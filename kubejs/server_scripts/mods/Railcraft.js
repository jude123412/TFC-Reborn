ServerEvents.recipes(event => {

    // Recipe Removal
    event.remove({id: 'railcraft:coal_coke'})
    event.remove({id: 'railcraft:coal_coke_block_from_coal_coke'})

    // Coke Oven Bricks
    event.remove({id: 'railcraft:coke_oven_bricks'})
    event.shaped(
        Item.of('railcraft:coke_oven_bricks', 2),
        [
            'SBS',
            'BCB',
            'SBS'
        ],
        {
            S: '#forge:sand',
            B: '#rnr:brick_road_items',
            C: 'minecraft:clay'
        }
    )

    // Coal Coke
    event.remove({id: 'railcraft:coke_oven/coal_coke'})
    event.custom({
        type: 'railcraft:coking',
        cookingTime: 3600,
        creosoteOutput: 500,
        experience: 0.0,
        ingredient: {
            tag: 'forge:gems/coal'
        },
        result: {
            item: 'kubejs:coal_coke'
        }
    })

    // Block of Coal Coke
    event.remove({id: 'railcraft:coke_oven/coal_coke_block'})
    event.custom({
        type: 'railcraft:coking',
        cookingTime: 32400,
        creosoteOutput: 4500,
        experience: 0.0,
        ingredient: {
            item: 'minecraft:coal_block'
        },
        result: {
            item: 'kubejs:coal_coke_block'
        }
    })

    // Charcoal
    event.remove({id: 'railcraft:coke_oven/charcoal'})
    event.custom({
        type: 'railcraft:coking',
        cookingTime: 1800,
        creosoteOutput: 250,
        experience: 0.0,
        ingredient: {
            tag: 'tfc:pit_kiln_logs'
        },
        result: {
            item: 'minecraft:charcoal'
        }
    })
})