ServerEvents.recipes(event => {

    event.remove({id: 'musketmod:iron_nugget_from_blasting'})
    event.remove({id: 'musketmod:iron_nugget_from_smelting'})

    // Golden Hopper
    event.remove({id: 'goldenhopper:golden_hopper'})
    event.custom({
        type: 'tfc:anvil',
        input: {
            tag: 'forge:double_sheets/gold'
        },
        result: {
            item: 'goldenhopper:golden_hopper'
        },
        tier: 1,
        rules: [
            'bend_third_last',
            'bend_second_last',
            'hit_last'
        ],
        "apply_forging_bonus": false
    })
    event.custom({
        type: 'tfc:anvil',
        input: {
            tag: 'forge:double_sheets/rose_gold'
        },
        result: {
            item: 'goldenhopper:golden_hopper'
        },
        tier: 1,
        rules: [
            'bend_third_last',
            'bend_second_last',
            'hit_last'
        ],
        "apply_forging_bonus": false
    })

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

    // Musket
    event.remove({id: 'musketmod:musket'})
    event.shaped(
        Item.of('musketmod:musket'),
        [
            'RRP',
            ' SG'
        ],
        {
            R: '#forge:rods/wrought_iron',
            P: 'kubejs:illegal_gun_parts',
            S: 'kubejs:gun_stock',
            G: '#forge:slimeballs'
        }
    )

    // Musket with Bayonet
    event.replaceInput(
        {id: 'musketmod:musket_with_bayonet_smithing'},
        'minecraft:iron_sword',
        'tfc:metal/knife_blade/wrought_iron'
    )

    // Blunderbuss
    event.remove({id: 'musketmod:blunderbuss'})
    event.shaped(
        Item.of('musketmod:blunderbuss'),
        [
            'RRP',
            ' SG'
        ],
        {
            R: '#forge:rods/copper',
            P: 'kubejs:illegal_gun_parts',
            S: 'kubejs:gun_stock',
            G: '#forge:slimeballs'
        }
    )

    // Flintlock Pistol
    event.remove({id: 'musketmod:pistol'})
    event.shaped(
        Item.of('musketmod:pistol'),
        [
            'RP',
            'SG'
        ],
        {
            R: '#forge:rods/wrought_iron',
            P: 'kubejs:illegal_gun_parts',
            S: 'kubejs:gun_stock',
            G: '#forge:slimeballs'
        }
    )

    // Paper Cartridge
    event.remove({id: 'musketmod:cartridge'})
    event.shaped(
        Item.of('musketmod:cartridge', 4),
        [
            'NN',
            'GP'
        ],
        {
            N: '#forge:nuggets',
            G: '#tfc:usable_in_powder_keg',
            P: '#forge:paper'
        }
    ) 

    // Smithing Template
    event.remove({id: 'musketmod:musket_upgrade_smithing_template'})
    event.custom({
        type: 'tfc:anvil',
        input: {
            tag: 'forge:sheets/wrought_iron'
        },
        result: {
            item: 'musketmod:musket_upgrade_smithing_template'
        },
        tier: 3,
        rules: [
            'hit_third_last',
            'punch_second_last',
            'draw_last'
        ],
        "apply_forging_bonus": false
    })
})