ServerEvents.recipes(event => {
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
        'type': 'railcraft:coking',
        'cookingTime': 400,
        'creosoteOutput': 500,
        'experience': 0.0,
        'ingredient': {
            'tag': 'forge:gems/coal'
        },
        'result': {
            'item': 'immersiveengineering:coal_coke'
        }
    })

    // Coal Coke Block
    event.remove({id: 'railcraft:coke_oven/coal_coke_block'})
    event.custom({
        'type': 'railcraft:coking',
        'cookingTime': 3600,
        'creosoteOutput': 4500,
        'experience': 0.0,
        'ingredient': {
            'item': 'minecraft:coal_block'
        },
        'result': {
            'item': 'immersiveengineering:coke'
        }
    })
})