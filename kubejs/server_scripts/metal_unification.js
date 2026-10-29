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
                `kubejs:metal/double_ingot/${metal}`,
                `kubejs:metal/sheet/${metal}`,
                m.tier,
                `kubejs:${metal}`
            )

            if (m.ingot != null) {
                event.itemHeat(m.ingot, m.capacity, m.work, m.weld)
            }

            if (m.generate_sheet) {
                event.itemHeat(`kubejs:metal/double_ingot/${metal}`, m.capacity * 2, m.work, m.weld)
                event.itemHeat(`kubejs:metal/sheet/${metal}`, m.capacity * 2, m.work, m.weld)
                event.itemHeat(`kubejs:metal/double_sheet/${metal}`, m.capacity * 4, m.work, m.weld)
                event.itemSize(`kubejs:metal/double_sheet/${metal}`, 'large', 'heavy')
            }

            if (m.generate_basic_tool_heads) {
                event.itemHeat(`kubejs:metal/pickaxe_head/${metal}`, m.capacity, m.work, m.weld)
                event.itemHeat(`kubejs:metal/axe_head/${metal}`, m.capacity, m.work, m.weld)
                event.itemHeat(`kubejs:metal/shovel_head/${metal}`, m.capacity, m.work, m.weld)
                event.itemHeat(`kubejs:metal/hoe_head/${metal}`, m.capacity, m.work, m.weld)
                event.itemHeat(`kubejs:metal/sword_blade/${metal}`, m.capacity * 2, m.work, m.weld)
            }

            if (m.generate_knife_blade) {
                event.itemHeat(`kubejs:metal/knife_blade/${metal}`, m.capacity, m.work, m.weld)
            }

            if (m.generate_armor) {
                event.itemHeat(`kubejs:metal/unfinished_helmet/${metal}`, m.capacity * 4, m.work, m.weld)
                event.itemHeat(`kubejs:metal/unfinished_chestplate/${metal}`, m.capacity * 4, m.work, m.weld)
                event.itemHeat(`kubejs:metal/unfinished_greaves/${metal}`, m.capacity * 4, m.work, m.weld)
                event.itemHeat(`kubejs:metal/unfinished_boots/${metal}`, m.capacity * 2, m.work, m.weld)
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
            // Ingots
            if (m.ingot != null) {
                event.recipes.tfc.casting(
                    `#forge:ingots/${metal}`,
                    'tfc:ceramic/ingot_mold',
                    TFC.fluidStackIngredient(m.fluid, 100),
                    0.1
                )

                event.recipes.tfc.casting(
                    `#forge:ingots/${metal}`,
                    'tfc:ceramic/fire_ingot_mold',
                    TFC.fluidStackIngredient(m.fluid, 100),
                    0.01
                )

                tfc.heating(m.ingot, m.melt)
                    .resultFluid(Fluid.of(m.fluid, 100))
            }

            // Generates Sheets, Double Ingots and Double Sheets
            if (m.generate_sheet || m.generate_armor || m.generate_basic_tool_heads) {
                // Double Ingots
                tfc.welding(
                    TFC.itemStackProvider.of(`kubejs:metal/double_ingot/${metal}`).copyHeat(),
                    Ingredient.of(`#forge:ingots/${metal}`),
                    Ingredient.of(`#forge:ingots/${metal}`),
                    m.tier
                )

                tfc.heating(`kubejs:metal/sheet/${metal}`, m.melt)
                    .resultFluid(Fluid.of(m.fluid, 200))

                // Double Sheets
                tfc.welding(
                    TFC.itemStackProvider.of(`kubejs:metal/double_sheet/${metal}`).copyHeat(),
                    Ingredient.of(`kubejs:metal/sheet/${metal}`),
                    Ingredient.of(`kubejs:metal/sheet/${metal}`),
                    m.tier
                )

                tfc.heating(`kubejs:metal/double_ingot/${metal}`, m.melt)
                    .resultFluid(Fluid.of(m.fluid, 200))

                // Sheets
                tfc.anvil(
                    TFC.itemStackProvider.of(`kubejs:metal/sheet/${metal}`).copyHeat(),
                    `kubejs:metal/double_ingot/${metal}`,
                    [
                        'hit_third_last',
                        'hit_second_last',
                        'hit_last'
                    ]
                ).tier(m.tier) 

                tfc.heating(`kubejs:metal/double_sheet/${metal}`, m.melt)
                    .resultFluid(Fluid.of(m.fluid, 400))
            }

            // Generates basic tool heads
            // (Pickaxe, Axe, Shovel, Hoe and Sword)
            if (m.generate_basic_tool_heads) {
                // Pickaxe Heads
                tfc.anvil(
                    TFC.itemStackProvider.of(`kubejs:metal/pickaxe_head/${metal}`).copyHeat(),
                    `#forge:ingots/${metal}`,
                    [
                        'punch_last',
                        'bend_not_last',
                        'draw_not_last'
                    ]
                ).tier(m.tier)

                tfc.heating(`kubejs:metal/pickaxe_head/${metal}`, m.melt)
                    .resultFluid(Fluid.of(m.fluid, 100))

                // Axe Heads
                tfc.anvil(
                    TFC.itemStackProvider.of(`kubejs:metal/axe_head/${metal}`).copyHeat(),
                    `#forge:ingots/${metal}`,
                    [
                        'punch_last',
                        'hit_second_last',
                        'upset_third_last'
                    ]
                ).tier(m.tier)

                tfc.heating(`kubejs:metal/axe_head/${metal}`, m.melt)
                    .resultFluid(Fluid.of(m.fluid, 100))

                // Shovel Heads
                tfc.anvil(
                    TFC.itemStackProvider.of(`kubejs:metal/shovel_head/${metal}`).copyHeat(),
                    `#forge:ingots/${metal}`,
                    [
                        'punch_last',
                        'hit_not_last'
                    ]
                ).tier(m.tier)

                tfc.heating(`kubejs:metal/shovel_head/${metal}`, m.melt)
                    .resultFluid(Fluid.of(m.fluid, 100))

                // Hoe Heads
                tfc.anvil(
                    TFC.itemStackProvider.of(`kubejs:metal/hoe_head/${metal}`).copyHeat(),
                    `#forge:ingots/${metal}`,
                    [
                        'punch_last',
                        'hit_not_last',
                        'bend_not_last'
                    ]
                ).tier(m.tier)

                tfc.heating(`kubejs:metal/hoe_head/${metal}`, m.melt)
                    .resultFluid(Fluid.of(m.fluid, 100))

                // Sword Blades
                tfc.anvil(
                    TFC.itemStackProvider.of(`kubejs:metal/sword_blade/${metal}`).copyHeat(),
                    `#forge:double_ingots/${metal}`,
                    [
                        'hit_last',
                        'bend_second_last',
                        'bend_third_last'
                    ]
                ).tier(m.tier)

                tfc.heating(`kubejs:metal/sword_blade/${metal}`, m.melt)
                    .resultFluid(Fluid.of(m.fluid, 200))
            }

            // Knife Blades
            if (m.generate_knife_blade) {
                tfc.anvil(
                    TFC.itemStackProvider.of(`kubejs:metal/knife_blade/${metal}`).copyHeat(),
                    `#forge:ingots/${metal}`,
                    [
                        'hit_last',
                        'draw_second_last',
                        'draw_third_last'
                    ]
                ).tier(m.tier)

                tfc.heating(`kubejs:metal/knife_blade/${metal}`, m.melt)
                    .resultFluid(Fluid.of(m.fluid, 100))
            }

            // Generates Unfinished Helmets,
            // Chestplates, Greaves and Boots
            if (m.generate_armor) {
                // Unfinished Helmets
                tfc.anvil(
                    TFC.itemStackProvider.of(`kubejs:metal/unfinished_helmet/${metal}`).copyHeat(),
                    `#forge:double_sheets/${metal}`,
                    [
                        'hit_last',
                        'bend_second_last',
                        'bend_third_last'
                    ]
                ).tier(m.tier)

                tfc.heating(`kubejs:metal/unfinished_helmet/${metal}`, m.melt)
                    .resultFluid(Fluid.of(m.fluid, 400))

                // Unfinished Chestplates
                tfc.anvil(
                    TFC.itemStackProvider.of(`kubejs:metal/unfinished_chestplate/${metal}`).copyHeat(),
                    `#forge:double_sheets/${metal}`,
                    [
                        'bend_any',
                        'draw_any',
                        'hit_any'
                    ]
                ).tier(m.tier)

                tfc.heating(`kubejs:metal/unfinished_chestplate/${metal}`, m.melt)
                    .resultFluid(Fluid.of(m.fluid, 400))

                // Unfinished Greaves
                tfc.anvil(
                    TFC.itemStackProvider.of(`kubejs:metal/unfinished_greaves/${metal}`).copyHeat(),
                    `#forge:double_sheets/${metal}`,
                    [
                        'hit_last',
                        'hit_second_last',
                        'upset_third_last'
                    ]
                ).tier(m.tier)

                tfc.heating(`kubejs:metal/unfinished_greaves/${metal}`, m.melt)
                    .resultFluid(Fluid.of(m.fluid, 400))

                // Unfinished Boots
                tfc.anvil(
                    TFC.itemStackProvider.of(`kubejs:metal/unfinished_boots/${metal}`).copyHeat(),
                    `#forge:sheets/${metal}`,
                    [
                        'bend_last',
                        'bend_second_last',
                        'shrink_third_last'
                    ]
                ).tier(m.tier)

                tfc.heating(`kubejs:metal/unfinished_boots/${metal}`, m.melt)
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