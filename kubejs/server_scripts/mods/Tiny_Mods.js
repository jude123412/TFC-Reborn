ServerEvents.recipes(event => {

    event.remove({id: 'musketmod:iron_nugget_from_blasting'})
    event.remove({id: 'musketmod:iron_nugget_from_smelting'})

    // Golden Hopper
    event.remove({id: 'goldenhopper:golden_hopper'})
    event.shaped(
        Item.of('goldenhopper:golden_hopper'),
        [
            'S S',
            ' C '
        ],
        {
            S: '#forge:sheets/gold',
            C: '#forge:chests/wooden'
        }
    )

    // Cooling Lunch Box
    event.remove({id: 'tfclunchbox:upgrade_to_cooling_lunchbox'})
    event.shaped(
        Item.of('tfclunchbox:cooling_lunchbox'),
        [
            ' H ',
            'RLR'
        ],
        {
            H: '#tfc:hammers',
            R: '#forge:plates/red_steel',
            L: 'tfclunchbox:lunchbox'
        }
    )

    // Scanner Module: Common Ores
    event.replaceInput(
        {id: 'scannable:common_ores_module'},
        'minecraft:coal',
        '#forge:gems/coal'
    )

    // Scanner Module: Fluids
    event.remove({id: 'scannable:fluid_module'})
    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            {
                item: 'scannable:blank_module',
            },
            {
                type: 'immersiveengineering:fluid',
                tag: 'tfc:any_fresh_water',
                amount: 100
            }
        ],
        result: {
            item: 'scannable:fluid_module'
        }
    })

    // Scanner Module: Chests
    event.replaceInput(
        {id: 'scannable:chest_module'},
        'minecraft:chest',
        '#forge:chests/wooden'
    )
})