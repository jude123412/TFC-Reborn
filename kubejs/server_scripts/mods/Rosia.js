ServerEvents.recipes(event => {

    // Recipe Removal
    event.remove({id: 'rosia:anvil/copper_wire'})
    event.remove({id: 'rosia:extruding_machine/rosia/copper_wire'})
    event.remove({id: 'rosia:extruding_machine/rosia/purple_steel_wire'})

    // Copper Coil
    event.remove({id: 'rosia:crafting/copper_coil'})
    event.shaped(
        'rosia:copper_coil', 
        [
            'WW',
            'WW',
            'WW'
        ],
        {
            W: '#forge:wires/copper'
        }
    )

    // Purple Steel Coil
    event.remove({id: 'rosia:purple_steel_coil'})
    event.shaped(
        'rosia:purple_steel_coil', 
        [
            'WW',
            'WW',
            'WW'
        ],
        {
            W: '#forge:wires/purple_steel'
        }
    )

    // Weak Purple Steel Ingot
    event.custom({
        type: 'immersiveengineering:arc_furnace',
        energy: 51200,
        input: {
            base_ingredient: {
                tag: 'forge:ingots/red_steel',
            }
        },
        additives: [
            {
                base_ingredient: {
                    tag: 'forge:ingots/blue_steel',
                },
            }
        ],
        results: [
            {
                base_ingredient: {
                    item: 'rosia:weak_purple_steel_ingot'
                },
                count: 2
            }
        ],
        secondaries: [],
        time: 100
    })

    // Purple Steel Ingot
    event.custom({
        type: 'immersiveengineering:arc_furnace',
        energy: 51200,
        input: {
            base_ingredient: {
                tag: 'forge:ingots/weak_purple_steel',
            }
        },
        additives: [
            {
                base_ingredient: {
                    tag: 'forge:dusts/coke',
                },
            }
        ],
        results: [
            {
                base_ingredient: {
                    item: 'rosia:purple_steel_ingot'
                }
            }
        ],
        slag: {
            item: 'kubejs:slag'
        },
        secondaries: [],
        time: 100
    })

    // Invar Ingot
    event.custom({
        type: 'immersiveengineering:arc_furnace',
        energy: 51200,
        input: {
            base_ingredient: {
                tag: 'forge:ingots/cast_iron',
            },
            count: 3
        },
        additives: [
            {
                base_ingredient: {
                    tag: 'forge:ingots/nickel',
                },
                count: 2
            }
        ],
        results: [
            {
                base_ingredient: {
                    item: 'rosia:invar_ingot'
                },
                count: 5
            }
        ],
        secondaries: [],
        time: 100
    })
})