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
})