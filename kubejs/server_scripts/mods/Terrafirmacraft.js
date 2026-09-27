ServerEvents.recipes(event => {

    // Silt Mud bricks
    event.remove({id: 'tfc:crafting/soil/silt_drying_bricks'})
    event.shapeless(Item.of('tfc:drying_bricks/silt'), [
        'tfc:mud/silt',
        '#forge:straw'
    ])
    event.remove({id: 'tfc:crafting/soil/silt_mud_bricks'})
    event.shaped(Item.of('tfc:mud_bricks/silt', 4),
    [
        'BB',
        'BB'
    ],
    {
        B: 'tfc:mud_brick/silt'
    })

    // Loam Mud bricks
    event.remove({id: 'tfc:crafting/soil/loam_drying_bricks'})
    event.shapeless(Item.of('tfc:drying_bricks/loam'), [
        'tfc:mud/loam',
        '#forge:straw'
    ])
    event.remove({id: 'tfc:crafting/soil/loam_mud_bricks'})
    event.shaped(Item.of('tfc:mud_bricks/loam', 4),
    [
        'BB',
        'BB'
    ],
    {
        B: 'tfc:mud_brick/loam'
    })

    // Sandy Loam Mud bricks
    event.remove({id: 'tfc:crafting/soil/sandy_loam_drying_bricks'})
    event.shapeless(Item.of('tfc:drying_bricks/sandy_loam'), [
        'tfc:mud/sandy_loam',
        '#forge:straw'
    ])
    event.remove({id: 'tfc:crafting/soil/sandy_loam_mud_bricks'})
    event.shaped(Item.of('tfc:mud_bricks/sandy_loam', 4),
    [
        'BB',
        'BB'
    ],
    {
        B: 'tfc:mud_brick/sandy_loam'
    })

    // Silty Loam Mud bricks
    event.remove({id: 'tfc:crafting/soil/silty_loam_drying_bricks'})
    event.shapeless(Item.of('tfc:drying_bricks/silty_loam'), [
        'tfc:mud/silty_loam',
        '#forge:straw'
    ])
    event.remove({id: 'tfc:crafting/soil/silty_loam_mud_bricks'})
    event.shaped(Item.of('tfc:mud_bricks/silty_loam', 4),
    [
        'BB',
        'BB'
    ],
    {
        B: 'tfc:mud_brick/silty_loam'
    })
})