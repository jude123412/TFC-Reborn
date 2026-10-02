TFCEvents.data(event => {
    // Plate Loop
    for (const metal in global.metals) {
        let m = global.metals[metal]

        if (m.new_metal) {
            event.metal(
                m.fluid,
                m.melt,
                m.capacity,
                m.ingot,
                m.double_ingot,
                m.sheet,
                m.tier,
                `kubejs:${metal}`
            )

            if (m.ingot != null) {
                event.itemHeat(m.ingot, m.capacity, m.work, m.weld)
            }

            if (m.double_ingot != null) {
                event.itemHeat(m.double_ingot, m.capacity, m.work, m.weld)
            }

            if (m.sheet != null) {
                event.itemHeat(m.sheet, m.capacity, m.work, m.weld)
            }
        }

        // Plate Loop
        if (m.generate_plate) {
            event.itemHeat(`kubejs:metal/plate/${metal}`, m.capacity, m.work, m.weld)
            event.itemSize(`kubejs:metal/plate/${metal}`, 'large', 'medium')
        }

        // Gear Loop
        if (m.generate_gear) {
            event.itemHeat(`kubejs:metal/gear/${metal}`, m.capacity, m.work, m.weld)
            event.itemHeat(`kubejs:metal/gear/half/${metal}`, m.capacity, m.work, m.weld)
            event.itemSize(`kubejs:metal/gear/${metal}`, 'large', 'heavy')
            event.itemSize(`kubejs:metal/gear/half/${metal}`, 'large', 'medium')
        }

        // Nugget Loop
        if (m.generate_nugget) {
            event.itemHeat(`kubejs:metal/nugget/${metal}`, m.capacity, m.work, m.weld)
            event.itemSize(`kubejs:metal/nugget/${metal}`, 'small', 'light')
        }

        // Dust Loop
        if (m.generate_dust) {
            event.itemHeat(`kubejs:metal/powder/${metal}`, m.capacity, m.work, m.weld)
            event.itemSize(`kubejs:metal/powder/${metal}`, 'normal', 'medium')
        }
    }
})

ServerEvents.tags('item', event => {
    // Fix cast iron tag
    event.remove('forge:ingots/cast_iron', 'minecraft:iron_ingot')
    event.add('forge:ingots/wrought_iron', 'minecraft:iron_ingot')
    
    
    for (const metal in global.metals) {
        let m = global.metals[metal]

        if (m.new_metal) {
            // If the item is NOT in #forge:ingots/<metal>, add it
            if (!Ingredient.of(`#forge:ingots/${metal}`).test(m.ingot)) {
                event.add(`forge:ingots/${metal}`, m.ingot)
            }
            // If the item is NOT in #forge:ingots, add it
            if (!Ingredient.of(`#forge:ingots`).test(m.ingot)) {
                event.add(`forge:ingots`, m.ingot)
            }
            // If the item is NOT in #tfc:pileable_ingots, add it
            if (!Ingredient.of(`#tfc:pileable_ingots`).test(m.ingot)) {
                event.add(`tfc:pileable_ingots`, m.ingot)
            }
        }

        // Plate Loop
        if (m.generate_plate) {
            if (m.extra_tags) {
                for (const t of m.extra_tags) {
                    event.add(`forge:plates/${t}`, `kubejs:metal/plate/${metal}`)
                }
            }
        }

        // Gear Loop
        if (m.generate_gear) {
            if (m.extra_tags) {
                for (const t of m.extra_tags) {
                    event.add(`forge:gears/${t}`, `kubejs:metal/gear/${metal}`)
                    event.add(`forge:gear_halfs/${t}`, `kubejs:metal/gear/half/${metal}`)
                }
            }
        }

        // Nugget Loop
        if (m.generate_gear) {
            if (m.extra_tags) {
                for (const t of m.extra_tags) {
                    event.add(`forge:nuggets/${t}`, `kubejs:metal/nugget/${metal}`)
                }
            }
        }

        // Dust Loop
        if (m.generate_dust) {
            if (m.extra_tags) {
                for (const t of m.extra_tags) {
                    event.add(`forge:dusts/${t}`, `kubejs:metal/powder/${metal}`)
                }
            }
        }
    }
})

ServerEvents.tags('fluid', event => { 

    // Metals need this tag to be castable
    for (const metal in global.metals) {
        let m = global.metals[metal]

        if (m.new_metal){
            event.add('tfc:molten_metals', m.fluid)
            event.add('tfc:usable_in_ingot_mold', m.fluid)
        }
    }
})

ServerEvents.recipes(event => {
    const tfc = event.recipes.tfc
    const create = event.recipes.create

    // New Metal Loop
    for (const metal in global.metals) {
        let m = global.metals[metal]

        if (m.new_metal){
            if (m.ingot != null) {
                event.recipes.tfc.casting(
                    m.ingot,
                    'tfc:ceramic/ingot_mold',
                    TFC.fluidStackIngredient(m.fluid, 100),
                    0.1
                )

                event.recipes.tfc.casting(
                    m.ingot,
                    'tfc:ceramic/fire_ingot_mold',
                    TFC.fluidStackIngredient(m.fluid, 100),
                    0.01
                )

                tfc.heating(m.ingot, m.melt)
                    .resultFluid(Fluid.of(m.fluid, 100))
            }

            if (m.double_ingot != null) {
                tfc.welding(
                    TFC.itemStackProvider.of(m.double_ingot).copyHeat(),
                    Ingredient.of(m.ingot),
                    Ingredient.of(m.ingot),
                    m.tier
                )

                tfc.heating(m.double_ingot, m.melt)
                    .resultFluid(Fluid.of(m.fluid, 200))
            }

            if (m.sheet != null) {
                tfc.anvil(
                    TFC.itemStackProvider.of(m.sheet).copyHeat(),
                    m.double_ingot,
                    [
                        'hit_third_last',
                        'hit_second_last',
                        'hit_last'
                    ]).tier(m.tier)

                tfc.heating(m.double_ingot, m.melt)
                    .resultFluid(Fluid.of(m.fluid, 200))
            }
        }
    }

    // Plate Loop
    for (const metal in global.metals) {
        let m = global.metals[metal]

        // Remove ONLY crafting table recipes that output any ingot
        // defined in global.metals
        let ingots = Ingredient.of(`#forge:ingots/${metal}`).getItemIds();
        for (let item of ingots) {
            const types = ['crafting_shaped', 'crafting_shapeless', 'blasting', 'smelting']
            for (const t of types) {
                event.remove({ 
                    output: item,
                    type: `minecraft:${t}`
                })
            }
        }

        // Plate Loop
        if (m.generate_plate) {
            let items = Ingredient.of(`#forge:plates/${metal}`).getItemIds();
            // Remove ALL recipes that output any duplicate plate
            for (let id of items) {
                event.remove({output: id});
            }
            if (m.extra_tags) {
                for (let t of m.extra_tags) {
                    let extraItems = Ingredient.of(`#forge:plates/${t}`).getItemIds();
                    for (let id of extraItems) {
                        event.remove({output: id});
                    }
                }
            }

            tfc.heating(`kubejs:metal/plate/${metal}`, m.melt)
                .resultFluid(Fluid.of(m.fluid, 100))

            tfc.anvil(
                TFC.itemStackProvider.of(`kubejs:metal/plate/${metal}`).copyHeat(),
                `#forge:ingots/${metal}`,
                [
                    'hit_third_last',
                    'hit_second_last',
                    'hit_last'
                ]).tier(m.tier)
            create.pressing(`kubejs:metal/plate/${metal}`, `#forge:ingots/${metal}`)
            event.custom({
                type: "immersiveengineering:metal_press",
                energy: 1600,
                input: {
                    'base_ingredient': {
                        tag: `forge:ingots/${metal}`,
                    }
                },
                mold: "immersiveengineering:mold_plate",
                result: {
                    item: `kubejs:metal/plate/${metal}`
                }
            })
        }

        // Gear Loop
        if (m.generate_gear) {
            // Remove ALL recipes that output any duplicate gear
            let items = Ingredient.of(`#forge:gears/${metal}`).getItemIds();
            for (let id of items) {
                event.remove({output: id});
            }
            if (m.extra_tags) {
                for (let t of m.extra_tags) {
                    let extraItems = Ingredient.of(`#forge:gears/${t}`).getItemIds();
                    for (let id of extraItems) {
                        event.remove({output: id});
                    }
                }
            }
            
            tfc.heating(`kubejs:metal/gear/${metal}`, m.melt)
                .resultFluid(Fluid.of(m.fluid, 400))
            tfc.heating(`kubejs:metal/gear/half/${metal}`, m.melt)
                .resultFluid(Fluid.of(m.fluid, 200))

            tfc.anvil(
                TFC.itemStackProvider.of(`kubejs:metal/gear/half/${metal}`).copyHeat(),
                `#forge:double_ingots/${metal}`,
                [
                    'upset_any',
                    'draw_any',
                    'bend_not_last'
                ]).tier(m.tier)

            tfc.welding(
                TFC.itemStackProvider.of(`kubejs:metal/gear/${metal}`).copyHeat(),
                Ingredient.of(`#forge:gear_halfs/${metal}`),
                Ingredient.of(`#forge:gear_halfs/${metal}`),
                m.tier
            )

            event.custom({
                type: "immersiveengineering:metal_press",
                energy: 6400,
                input: {
                    'base_ingredient': {
                        tag: `forge:ingots/${metal}`,
                    },
                    count: 4
                },
                mold: "immersiveengineering:mold_gear",
                result: {
                    item: `kubejs:metal/gear/${metal}`
                }
            })
        }

        // Nugget Loop
        if (m.generate_nugget) {
            // Remove ALL recipes that output any duplicate nugget
            let nuggets = Ingredient.of(`#forge:nuggets/${metal}`).getItemIds();
            for (let item of nuggets) {
                event.remove({output: item});
            }

            if (m.extra_tags) {
                for (let t of m.extra_tags) {
                    let extraItems = Ingredient.of(`#forge:nuggets/${t}`).getItemIds();
                    for (let id of extraItems) {
                        event.remove({output: id});
                    }
                }
            }

            tfc.heating(`kubejs:metal/nugget/${metal}`, m.melt)
                .resultFluid(Fluid.of(m.fluid, 10))

            event.shapeless(
                Item.of(`kubejs:metal/nugget/${metal}`, 10),
                [
                    `#forge:ingots/${metal}`,
                    '#tfc:hammers'
                ]
            ).damageIngredient('#tfc:hammers')
        }

        if (m.generate_dust) {
            // Remove ALL recipes that output any duplicate dust
            let dusts = Ingredient.of(`#forge:dusts/${metal}`).getItemIds();
            for (let item of dusts) {
                event.remove({output: item})
            }

            tfc.quern(Item.of(`kubejs:metal/powder/${metal}`), `#forge:ingots/${metal}`)

            create.milling(OutputItem.of(`kubejs:metal/powder/${metal}`), InputItem.of(`#forge:ingots/${metal}`))
            create.crushing(OutputItem.of(`kubejs:metal/powder/${metal}`), InputItem.of(`#forge:ingots/${metal}`))

            event.custom({
                type: "immersiveengineering:crusher",
                energy: 3000,
                input: {
                    tag: `forge:ingots/${metal}`
                },
                result: {
                    item: `kubejs:metal/powder/${metal}`
                },
                secondaries: []
            })

            tfc.heating(`kubejs:metal/powder/${metal}`, m.melt)
                .resultFluid(Fluid.of(m.fluid, 100))
        }
    }
})