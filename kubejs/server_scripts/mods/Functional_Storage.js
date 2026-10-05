ServerEvents.recipes(event => {
    const tfc = event.recipes.tfc

    event.remove({id: 'functionalstorage:oak_drawer_alternate_x1'})
    event.remove({id: 'functionalstorage:oak_drawer_alternate_x2'})
    event.remove({id: 'functionalstorage:oak_drawer_alternate_x4'})
    event.remove({id: 'functionalstorage:oak_1'})
    event.remove({id: 'functionalstorage:spruce_1'})
    event.remove({id: 'functionalstorage:birch_1'})
    event.remove({id: 'functionalstorage:jungle_1'})
    event.remove({id: 'functionalstorage:acacia_1'})
    event.remove({id: 'functionalstorage:dark_oak_1'})
    event.remove({id: 'functionalstorage:mangrove_1'})
    event.remove({id: 'functionalstorage:cherry_1'})
    event.remove({id: 'functionalstorage:oak_2'})
    event.remove({id: 'functionalstorage:spruce_2'})
    event.remove({id: 'functionalstorage:birch_2'})
    event.remove({id: 'functionalstorage:jungle_2'})
    event.remove({id: 'functionalstorage:acacia_2'})
    event.remove({id: 'functionalstorage:dark_oak_2'})
    event.remove({id: 'functionalstorage:mangrove_2'})
    event.remove({id: 'functionalstorage:cherry_2'})
    event.remove({id: 'functionalstorage:oak_4'})
    event.remove({id: 'functionalstorage:spruce_4'})
    event.remove({id: 'functionalstorage:birch_4'})
    event.remove({id: 'functionalstorage:jungle_4'})
    event.remove({id: 'functionalstorage:acacia_4'})
    event.remove({id: 'functionalstorage:dark_oak_4'})
    event.remove({id: 'functionalstorage:mangrove_4'})
    event.remove({id: 'functionalstorage:cherry_4'})

    // Crimson Drawer 1x1
    event.remove({id: 'functionalstorage:crimson_1'})
    event.shaped(
        'functionalstorage:crimson_1', 
        [
            'LLL',
            'LCL',
            'LLL'
        ],
        {
            L: 'beneath:wood/lumber/crimson',
            C: '#forge:chests/wooden'
        }
    )

    // Crimson Drawer 2x1
    event.remove({id: 'functionalstorage:crimson_2'})
    event.shaped(
        'functionalstorage:crimson_2', 
        [
            'LCL',
            'LLL',
            'LCL'
        ],
        {
            L: 'beneath:wood/lumber/crimson',
            C: '#forge:chests/wooden'
        }
    )

    // Crimson Drawer 2x2
    event.remove({id: 'functionalstorage:crimson_4'})
    event.shaped(
        'functionalstorage:crimson_4', 
        [
            'CLC',
            'LLL',
            'CLC'
        ],
        {
            L: 'beneath:wood/lumber/crimson',
            C: '#forge:chests/wooden'
        }
    )

    // Warped Drawer 1x1
    event.remove({id: 'functionalstorage:warped_1'})
    event.shaped(
        'functionalstorage:warped_1', 
        [
            'LLL',
            'LCL',
            'LLL'
        ],
        {
            L: 'beneath:wood/lumber/warped',
            C: '#forge:chests/wooden'
        }
    )

    // Warped Drawer 2x1
    event.remove({id: 'functionalstorage:warped_2'})
    event.shaped(
        'functionalstorage:warped_2', 
        [
            'LCL',
            'LLL',
            'LCL'
        ],
        {
            L: 'beneath:wood/lumber/warped',
            C: '#forge:chests/wooden'
        }
    )

    // Warped Drawer 2x2
    event.remove({id: 'functionalstorage:warped_4'})
    event.shaped(
        'functionalstorage:warped_4', 
        [
            'CLC',
            'LLL',
            'CLC'
        ],
        {
            L: 'beneath:wood/lumber/warped',
            C: '#forge:chests/wooden'
        }
    )

    // Framed Drawer 1x1
    event.remove({id: 'functionalstorage:framed_1'})
    event.shaped(
        'functionalstorage:framed_1', 
        [
            'NNN',
            'NCN',
            'NNN'
        ],
        {
            C: '#forge:chests/wooden',
            N: '#forge:nuggets/wrought_iron'
        }
    )

    // Framed Drawer 2x1
    event.remove({id: 'functionalstorage:framed_2'})
    event.shaped(
        'functionalstorage:framed_2', 
        [
            'NCN',
            'NNN',
            'NCN'
        ],
        {
            C: '#forge:chests/wooden',
            N: '#forge:nuggets/wrought_iron'
        }
    )

    // Framed Drawer 2x2
    event.remove({id: 'functionalstorage:framed_4'})
    event.shaped(
        'functionalstorage:framed_4', 
        [
            'CNC',
            'NNN',
            'CNC'
        ],
        {
            C: '#forge:chests/wooden',
            N: '#forge:nuggets/wrought_iron'
        }
    )

    // Fluid Drawer 1x1
    event.remove({id: 'functionalstorage:fluid_1'})
    event.shaped(
        'functionalstorage:fluid_1', 
        [
            'NNN',
            'NCN',
            'NNN'
        ],
        {
            C: '#tfc:buckets',
            N: '#tfc:rock/bricks'
        }
    )

    // Fluid Drawer 2x1
    event.remove({id: 'functionalstorage:fluid_2'})
    event.shaped(
        'functionalstorage:fluid_2', 
        [
            'NCN',
            'NNN',
            'NCN'
        ],
        {
            C: '#tfc:buckets',
            N: '#tfc:rock/bricks'
        }
    )

    // Fluid Drawer 2x2
    event.remove({id: 'functionalstorage:fluid_4'})
    event.shaped(
        'functionalstorage:fluid_4', 
        [
            'CNC',
            'NNN',
            'CNC'
        ],
        {
            C: '#tfc:buckets',
            N: '#tfc:rock/bricks'
        }
    )

    // Compacting Drawer
    event.remove({id: 'functionalstorage:compacting_drawer'})
    event.shaped(
        'functionalstorage:compacting_drawer', 
        [
            'SSS',
            'PDP',
            'SIS'
        ],
        {
            S: '#forge:stone',
            P: 'minecraft:piston',
            D: '#functionalstorage:drawer',
            I: '#forge:ingots/wrought_iron'
        }
    )

    // Framed Compacting Drawer
    event.remove({id: 'functionalstorage:compacting_framed_drawer'})
    event.shaped(
        'functionalstorage:compacting_framed_drawer', 
        [
            'NNN',
            'NDN',
            'NNN'
        ],
        {
            N: '#forge:nuggets/wrought_iron',
            D: 'functionalstorage:compacting_drawer'
        }
    )

    // Storage Controller
    event.replaceInput(
        {id: 'functionalstorage:storage_controller'},
        'minecraft:quartz_block',
        '#forge:gems/quartz'
    )

    // Framed Storage Controller
    event.remove({id: 'functionalstorage:framed_storage_controller'})
    event.shaped(
        'functionalstorage:framed_storage_controller', 
        [
            'NNN',
            'NCN',
            'NNN'
        ],
        {
            N: '#forge:nuggets/wrought_iron',
            C: 'functionalstorage:storage_controller'
        }
    )

    // Controller Access Point
    event.replaceInput(
        {id: 'functionalstorage:controller_extension'},
        'minecraft:quartz_block',
        '#forge:gems/quartz'
    )

    // Framed Controller Access Point
    event.remove({id: 'functionalstorage:framed_controller_extension'})
    event.shaped(
        'functionalstorage:framed_controller_extension', 
        [
            'NNN',
            'NCN',
            'NNN'
        ],
        {
            N: '#forge:nuggets/wrought_iron',
            C: 'functionalstorage:controller_extension'
        }
    )

    // Linking Tool
    event.replaceInput(
        {id: 'functionalstorage:linking_tool'},
        'minecraft:diamond',
        '#forge:gems/diamond'
    )

    // Configuration Tool
    event.replaceInput(
        {id: 'functionalstorage:configuration_tool'},
        'minecraft:emerald',
        '#forge:gems/emerald'
    )

    // Copper Upgrade
    event.remove({id: 'functionalstorage:copper_upgrade'})
    tfc.anvil(
            TFC.itemStackProvider.of('functionalstorage:copper_upgrade'),
            '#forge:double_sheets/copper',
        [
            'hit_third_last',
            'draw_second_last',
            'punch_last'
        ]
    ).tier(1)

    // Rose Gold Upgrade
    event.remove({id: 'functionalstorage:gold_upgrade'})
    tfc.anvil(
            TFC.itemStackProvider.of('functionalstorage:gold_upgrade'),
            '#forge:double_sheets/rose_gold',
        [
            'hit_third_last',
            'draw_second_last',
            'punch_last'
        ]
    ).tier(1)

    // Steel Upgrade
    event.remove({id: 'functionalstorage:diamond_upgrade'})
    tfc.anvil(
            TFC.itemStackProvider.of('functionalstorage:diamond_upgrade'),
            '#forge:double_sheets/steel',
        [
            'hit_third_last',
            'draw_second_last',
            'punch_last'
        ]
    ).tier(4)

    // Iron Downgrade
    event.remove({id: 'functionalstorage:iron_downgrade'})
    tfc.anvil(
                TFC.itemStackProvider.of('functionalstorage:iron_downgrade'),
                '#forge:double_sheets/wrought_iron',
            [
                'hit_third_last',
                'draw_second_last',
                'punch_last'
            ]
        ).tier(3)

    // Simple Compacting Drawer
    event.remove({id: 'functionalstorage:simple_compacting_drawer'})
    event.shaped(
        'functionalstorage:simple_compacting_drawer', 
        [
            'SSS',
            'SDP',
            'SIS'
        ],
        {
            S: '#forge:stone',
            D: '#functionalstorage:drawer',
            P: 'minecraft:piston',
            I: '#forge:ingots/wrought_iron'
        }
    )

    // Framed Simple Compacting Drawer
    event.remove({id: 'functionalstorage:framed_simple_compacting_drawer'})
    event.shaped(
        'functionalstorage:framed_simple_compacting_drawer', 
        [
            'NNN',
            'NCN',
            'NNN'
        ],
        {
            N: '#forge:nuggets/wrought_iron',
            C: 'functionalstorage:simple_compacting_drawer'
        }
    )

    // Void Upgrade
    event.remove({id: 'functionalstorage:void_upgrade'})
    tfc.anvil(
            TFC.itemStackProvider.of('functionalstorage:void_upgrade'),
            '#forge:double_sheets/black_bronze',
        [
            'hit_third_last',
            'draw_second_last',
            'punch_last'
        ]
    ).tier(2)
})