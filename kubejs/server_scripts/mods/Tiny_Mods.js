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

    // Scanner
    event.remove({id: 'scannable:scanner'})
    event.shaped(
        Item.of('scannable:scanner'),
        [
            'RPR',
            'BCB',
            'SQS'

        ],
        {
            R: '#forge:rods/wrought_iron',
            P: '#forge:glass_panes/colorless',
            B: 'minecraft:iron_bars',
            C: 'buildcraftsilicon:redstone_chipset/red',
            S: '#forge:sheets/gold',
            Q: '#forge:gems/quartz'
        }
    )

    // Blank Scanner Module
    event.remove({id: 'scannable:blank_module'})
    event.custom({
        type: 'tfc:anvil',
        input: {
            item: 'tfc:metal/sheet/bismuth_bronze'
        },
        result: {
            item: 'scannable:blank_module'
        },
        tier: 2,
        rules: [
            'bend_third_last',
            'bend_second_last',
            'upset_last'
        ],
        "apply_forging_bonus": false
    })

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