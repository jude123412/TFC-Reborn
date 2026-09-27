TFCEvents.data(event => {
    // Plate Loop
    for (const ore in global.metal_ores) {
        let o = global.metal_ores[ore]
        let m = global.metals[o.metal]

        // Plate Loop
        if (o.generate_pellet) {
            event.itemHeat(`tfcoreprocessing:pellet/${ore}`, m.capacity, m.work, m.weld)
        }
        if (o.generate_powder) {
            event.itemHeat(`${o.mod_id}:powder/${ore}`, m.capacity, m.work, m.weld)
        }
        if (o.should_melt) {
            event.itemHeat(`${o.mod_id}:powder/${ore}`, m.capacity, m.work, m.weld)
        }
    }
})

ServerEvents.recipes(event => {
    for (const ore in global.metal_ores) {
        const tfc = event.recipes.tfc
        const create = event.recipes.create
        const ie = event.recipes.immersiveengineering

        let o = global.metal_ores[ore]
        let m = global.metals[o.metal]

        // Pellet Recipes
        if (o.generate_pellet) {
            event.shaped(Item.of(`tfcoreprocessing:pellet/${ore}`),
            [
                'PP',
                'PP'
            ],
            {
                P: `${o.mod_id}:powder/${ore}`
            })

            tfc.heating(`tfcoreprocessing:pellet/${ore}`, m.melt)
                .resultFluid(Fluid.of(m.fluid, 30))
        }
        if (o.generate_powder) {
            tfc.quern(Item.of(`${o.mod_id}:powder/${ore}`, 2), `${o.mod_id}:ore/small_${ore}`)
            tfc.quern(Item.of(`${o.mod_id}:powder/${ore}`, 3), `${o.mod_id}:ore/poor_${ore}`)
            tfc.quern(Item.of(`${o.mod_id}:powder/${ore}`, 5), `${o.mod_id}:ore/normal_${ore}`)
            tfc.quern(Item.of(`${o.mod_id}:powder/${ore}`, 7), `${o.mod_id}:ore/rich_${ore}`)

            create.milling(Item.of(`${o.mod_id}:powder/${ore}`, 2), `${o.mod_id}:ore/small_${ore}`)
            create.milling(Item.of(`${o.mod_id}:powder/${ore}`, 3), `${o.mod_id}:ore/poor_${ore}`)
            create.milling(Item.of(`${o.mod_id}:powder/${ore}`, 5), `${o.mod_id}:ore/normal_${ore}`)
            create.milling(Item.of(`${o.mod_id}:powder/${ore}`, 7), `${o.mod_id}:ore/rich_${ore}`)

            create.crushing(Item.of(`${o.mod_id}:powder/${ore}`, 3), `${o.mod_id}:ore/small_${ore}`)
            create.crushing(Item.of(`${o.mod_id}:powder/${ore}`, 5), `${o.mod_id}:ore/poor_${ore}`)
            create.crushing(Item.of(`${o.mod_id}:powder/${ore}`, 8), `${o.mod_id}:ore/normal_${ore}`)
            create.crushing(Item.of(`${o.mod_id}:powder/${ore}`, 11), `${o.mod_id}:ore/rich_${ore}`)

            ie.crusher(Item.of(`${o.mod_id}:powder/${ore}`, 4), InputItem.of(`${o.mod_id}:ore/small_${ore}`), [], 6000)
            ie.crusher(Item.of(`${o.mod_id}:powder/${ore}`, 6), InputItem.of(`${o.mod_id}:ore/poor_${ore}`), [], 6000)
            ie.crusher(Item.of(`${o.mod_id}:powder/${ore}`, 10), InputItem.of(`${o.mod_id}:ore/normal_${ore}`), [], 6000)
            ie.crusher(Item.of(`${o.mod_id}:powder/${ore}`, 14), InputItem.of(`${o.mod_id}:ore/rich_${ore}`), [], 6000)

            tfc.heating(`${o.mod_id}:powder/${ore}`, m.melt)
                .resultFluid(Fluid.of(m.fluid, 6))
        }
        if (o.should_melt) {
            tfc.heating(`${o.mod_id}:powder/${ore}`, m.melt)
                .resultFluid(Fluid.of(m.fluid, 6))
        }
        if (o.create_recipes) {
            create.milling(Item.of(`${o.mod_id}:powder/${ore}`, 2), `${o.mod_id}:ore/small_${ore}`)
            create.milling(Item.of(`${o.mod_id}:powder/${ore}`, 3), `${o.mod_id}:ore/poor_${ore}`)
            create.milling(Item.of(`${o.mod_id}:powder/${ore}`, 5), `${o.mod_id}:ore/normal_${ore}`)
            create.milling(Item.of(`${o.mod_id}:powder/${ore}`, 7), `${o.mod_id}:ore/rich_${ore}`)

            create.crushing(Item.of(`${o.mod_id}:powder/${ore}`, 3), `${o.mod_id}:ore/small_${ore}`)
            create.crushing(Item.of(`${o.mod_id}:powder/${ore}`, 5), `${o.mod_id}:ore/poor_${ore}`)
            create.crushing(Item.of(`${o.mod_id}:powder/${ore}`, 8), `${o.mod_id}:ore/normal_${ore}`)
            create.crushing(Item.of(`${o.mod_id}:powder/${ore}`, 11), `${o.mod_id}:ore/rich_${ore}`)
        }
    }
})