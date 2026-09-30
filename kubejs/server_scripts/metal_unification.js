TFCEvents.data(event => {
    // Plate Loop
    for (const metal in global.metals) {
        let m = global.metals[metal]

        // Plate Loop
        if (m.generate_plate) {
            event.itemHeat(`kubejs:metal/plate/${metal}`, m.capacity, m.work, m.weld)
        }

        // Gear Loop
        if (m.generate_gear) {
            event.itemHeat(`kubejs:metal/gear/${metal}`, m.capacity, m.work, m.weld)
            event.itemHeat(`kubejs:metal/gear/half/${metal}`, m.capacity, m.work, m.weld)
        }
    }
})

ServerEvents.tags('item', event => {
    // Fix cast iron tag
    event.remove('forge:ingots/cast_iron', 'minecraft:iron_ingot')
    event.add('forge:ingots/wrought_iron', 'minecraft:iron_ingot')
    
    
    for (const metal in global.metals) {
        let m = global.metals[metal]

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
    }
})

ServerEvents.recipes(event => {
    const tfc = event.recipes.tfc
    const create = event.recipes.create
    const ie = event.recipes.immersiveengineering

    // Plate Loop
    for (const metal in global.metals) {
        let m = global.metals[metal]

        if (m.generate_plate) {
            let plates = Ingredient.of(`#forge:plates/${metal}`).getItemIds();
            // Remove ALL recipes that output any duplicate plate
            for (let id of plates) {
                event.remove({output: id});
            }
            if (m.extra_tags) {
                for (let t of m.extra_tags) {
                    let extraPlates = Ingredient.of(`#forge:plates/${t}`).getItemIds();
                    for (let id of extraPlates) {
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
            ]
            ).tier(m.tier)
            create.pressing(`kubejs:metal/plate/${metal}`, `#forge:ingots/${metal}`)
            ie.metal_press(
                `kubejs:metal/plate/${metal}`,
                InputItem.of(`#forge:ingots/${metal}`),
                'immersiveengineering:mold_plate',
                1600
            )
        }

        // Gear Loop
        if (m.generate_gear) {
            // Remove ALL recipes that output any duplicate gear
            let plates = Ingredient.of(`#forge:gears/${metal}`).getItemIds();
            for (let id of plates) {
                event.remove({output: id});
            }
            if (m.extra_tags) {
                for (let t of m.extra_tags) {
                    let extraPlates = Ingredient.of(`#forge:gears/${t}`).getItemIds();
                    for (let id of extraPlates) {
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
            ])

            tfc.welding(
                TFC.itemStackProvider.of(`kubejs:metal/gear/${metal}`).copyHeat(),
                Ingredient.of(`#forge:gear_halfs/${metal}`),
                Ingredient.of(`#forge:gear_halfs/${metal}`),
                m.tier
            )

            ie.metal_press(
                `kubejs:metal/gear/${metal}`,
                InputItem.of(`#forge:ingots/${metal}`, 4),
                'immersiveengineering:mold_gear',
                6400
            )
        }
    }
})

