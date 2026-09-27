TFCEvents.data(event => {
    // Plate Loop
    for (const metal in global.metals) {
        let m = global.metals[metal]

        // Plate Loop
        if (m.generate_plate) {
            event.itemHeat(`kubejs:metal/plate/${metal}`, m.capacity, m.work, m.weld)
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
                for (const t of m.extra_tags)
                event.add(`forge:plates/${t}`, `kubejs:metal/plate/${metal}`)
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

        // Remove ALL recipes that output any duplicate plate
        if (m.generate_plate) {
            let plates = Ingredient.of(`#forge:plates/${metal}`).getItemIds();
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
                `#forge:ingots/${metal}`,
                'immersiveengineering:mold_plate',
                1600
            )

            tfc.heating(`kubejs:metal/plate/${metal}`, m.melt)
                .resultFluid(Fluid.of(m.fluid, 100))
        }
    }
})

