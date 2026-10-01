TFCEvents.data(event => {
    // Plate Loop
    for (const ore in global.metal_ores) {
        let o = global.metal_ores[ore]
        let m = global.metals[o.metal]

        // Plate Loop
        if (o.generate_pellet) {
            event.itemHeat(`tfcoreprocessing:pellet/${ore}`, m.capacity, m.work, m.weld)
            event.itemSize(`tfcoreprocessing:pellet/${ore}`, 'small', 'medium')
        }
        if (o.generate_powder) {
            event.itemHeat(`${o.mod_id}:powder/${ore}`, m.capacity, m.work, m.weld)
        }
        if (o.should_melt) {
            event.itemHeat(`${o.mod_id}:powder/${ore}`, m.capacity, m.work, m.weld)
        }
    }
})

ServerEvents.tags('item', event => {
    // Add Coal gem tag
    event.add('forge:gems/coal', 'tfc:ore/bituminous_coal')
    event.add('forge:gems/coal', 'minecraft:coal')
    event.add('forge:gems/coal', 'tfc:ore/lignite')

    // Add Amethyst gem tag
    event.add('forge:gems/amethyst', 'tfc:gem/amethyst')
})

ServerEvents.recipes(event => {
    for (const ore in global.metal_ores) {
        const tfc = event.recipes.tfc
        const create = event.recipes.create

        let o = global.metal_ores[ore]
        let m = global.metals[o.metal]

        event.remove({type: 'immersiveengineering:arc_furnace'})

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

            event.custom({
                'type': 'immersiveengineering:arc_furnace',
                'energy': 51200,
                'input': {
                    'base_ingredient': {
                        'tag': `forge:pellets/${ore}`,
                    },
                    'count': 10
                },
                "additives": [],
                'results': [{
                    'base_ingredient': {
                        'item': `${o.ingot_mod_id}:${o.ingot_prefix}${o.metal}`
                    },
                    'count': 3
                }],
                secondaries: [],
                'time': 100
            })
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

            // Small Ore Crushing
            event.custom({
                type: "immersiveengineering:crusher",
                energy: 6000,
                input: {
                    item: `${o.mod_id}:ore/small_${ore}`
                },
                result: {
                    item: `${o.mod_id}:powder/${ore}`,
                    count: 4
                },
                secondaries: []
            })

            // Poor Ore Crushing
            event.custom({
                type: "immersiveengineering:crusher",
                energy: 6000,
                input: {
                    item: `${o.mod_id}:ore/poor_${ore}`
                },
                result: {
                    item: `${o.mod_id}:powder/${ore}`,
                    count: 6
                },
                secondaries: []
            })

            // Normal Ore Crushing
            event.custom({
                type: "immersiveengineering:crusher",
                energy: 6000,
                input: {
                    item: `${o.mod_id}:ore/normal_${ore}`
                },
                result: {
                    item: `${o.mod_id}:powder/${ore}`,
                    count: 10
                },
                secondaries: []
            })

            // Rich Ore Crushing
            event.custom({
                type: "immersiveengineering:crusher",
                energy: 6000,
                input: {
                    item: `${o.mod_id}:ore/rich_${ore}`
                },
                result: {
                    item: `${o.mod_id}:powder/${ore}`,
                    count: 14
                },
                secondaries: []
            })


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