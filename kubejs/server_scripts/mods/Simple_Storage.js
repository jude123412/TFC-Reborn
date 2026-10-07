ServerEvents.recipes(event => {

    // Inventory Connector
    event.remove({id: 'toms_storage:inventory_connector'})
    event.shaped(
        'toms_storage:ts.inventory_connector',
        [
            'LCL',
            'ISI',
            'LGL'
        ],
        {
            L: '#tfc:lumber',
            C: 'minecraft:comparator',
            I: '#forge:plates/wrought_iron',
            S: '#forge:chests/wooden',
            G: '#forge:gems'
        }
    )

    
    // Storage Terminal
    event.replaceInput(
        {id: 'toms_storage:storage_terminal'},
        '#minecraft:planks',
        '#tfc:lumber'
    )

    // Inventory Trim
    event.replaceInput(
        {id: 'toms_storage:trim'},
        '#minecraft:planks',
        '#tfc:lumber'
    )

    // Open Crate
    event.replaceInput(
        {id: 'toms_storage:open_crate'},
        '#minecraft:planks',
        '#tfc:lumber'
    )

    // Inventory Cable
    event.remove({id: 'toms_storage:inventory_cable'})
    event.shaped(
        Item.of('toms_storage:ts.inventory_cable', 6),
        [
            'LLL',
            'SCS',
            'LLL'
        ],
        {
            L: '#tfc:lumber',
            S: '#forge:rods/wooden',
            C: '#forge:chests/wooden'
        }
    )

    // Inventory Cable Connector
    event.remove({id: 'toms_storage:inventory_cable_connector'})
    event.shapeless(
        Item.of('toms_storage:ts.inventory_cable_connector'),
        [
            'toms_storage:ts.inventory_cable',
            'toms_storage:ts.inventory_connector'
        ]
    )

    // Inventory Cable Connector (Filtered)
    event.replaceInput(
        {id: 'toms_storage:inventory_cable_connector_filtered'},
        'minecraft:quartz',
        '#forge:gems/quartz'
    )

    // Inventory Proxy
    event.replaceInput(
        {id: 'toms_storage:inventory_proxy'},
        '#minecraft:planks',
        '#tfc:lumber'
    )

    // Crafting Terminal
    event.remove({id: 'toms_storage:crafting_terminal'})
    event.shapeless(
        Item.of('toms_storage:ts.crafting_terminal'),
        [
            'toms_storage:ts.storage_terminal',
            '#tfc:workbenches',
            '#forge:gems/diamond'
        ]
    )

    // Basic Inventory Hopper
    event.replaceInput(
        {id: 'toms_storage:inventory_hopper_basic'},
        '#minecraft:planks',
        '#tfc:lumber'
    )

    // Level Emitter
    event.replaceInput(
        {id: 'toms_storage:level_emitter'},
        '#minecraft:planks',
        '#tfc:lumber'
    )

    // Wireless Terminal
    event.remove({id: 'toms_storage:wireless_terminal'})
    event.shaped(
        'toms_storage:ts.wireless_terminal',
        [
            'LCL',
            'SKG',
            'LPL'
        ],
        {
            L: '#tfc:lumber',
            C: 'minecraft:comparator',
            S: 'minecraft:spyglass',
            K: 'minecraft:glowstone',
            G: '#forge:glass',
            P: 'minecraft:ender_eye'
        }
    )

    // Inventory Cable Connector (Filtered)
    event.replaceInput(
        {id: 'toms_storage:poly_item_filter'},
        'minecraft:diamond',
        '#forge:gems/diamond'
    )
})