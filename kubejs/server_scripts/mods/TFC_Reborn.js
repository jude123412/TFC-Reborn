TFCEvents.data(event => {
    // Loose Andesite Rock
    event.itemHeat('tfc:rock/loose/andesite', 5.714, 900, 1100)

    // Fluxstone
    event.itemHeat('#tfc:fluxstone', 5.714, null, null)

    // Left Elytra Wing
    event.itemHeat('kubejs:elytra/left_wing', 8.332, 910, 1200)

    // Right Elytra Wing
    event.itemHeat('kubejs:elytra/right_wing', 8.332, 910, 1200)

    // Unfired Refactory Brick
    event.itemHeat('kubejs:unfired_refactory_brick', 2.332, null, null)

    // Unfired Ceramic Insulator
    event.itemHeat('kubejs:insulator/unfired_ceramic', 2.332, null, null)

    // Pipe Frame
    event.itemHeat('kubejs:pipe_frame/cobblestone', 5.714, null, null)
    event.itemHeat('kubejs:pipe_frame/iron', 2.857 * 2, 921, 1228)
    event.itemHeat('kubejs:pipe_frame/gold', 1.667 * 2, 636, 848)
    event.itemSize('kubejs:pipe_frame/wood', 'large', 'light')
    event.itemSize('kubejs:pipe_frame/cobblestone', 'large', 'light')
    event.itemSize('kubejs:pipe_frame/stone', 'large', 'light')
    event.itemSize('kubejs:pipe_frame/quartz', 'large', 'light')
    event.itemSize('kubejs:pipe_frame/iron', 'large', 'light')
    event.itemSize('kubejs:pipe_frame/gold', 'large', 'light')
    event.itemSize('kubejs:pipe_frame/clay', 'large', 'light')
    event.itemSize('kubejs:pipe_frame/sandstone', 'large', 'light')
    event.itemSize('kubejs:pipe_frame/obsidian', 'large', 'light')
    event.itemSize('kubejs:pipe_frame/diamond', 'large', 'light')
    event.itemSize('kubejs:pipe_frame/lapis', 'large', 'light')
    event.itemSize('kubejs:pipe_frame/emerald', 'large', 'light')

    // Quicklime
    event.itemSize('kubejs:quicklime', 'small', 'light')

    // Engine Core
    event.itemSize('kubejs:engine_core', 'large', 'heavy')

    // Laser Core
    event.itemSize('kubejs:laser_core', 'large', 'heavy')

    // Wood Board
    event.itemSize('kubejs:wooden_board', 'small', 'medium')

    // Coal Coke
    event.fuel('kubejs:coal_coke', 1550, 3300, null)

    // Block of Coal Coke
    event.fuel('kubejs:coal_coke_block', 1550, 33000, null)

    // Refactory Clay Knapping
    event.knappingType(
        'kubejs:refactory_clay',
        5,
        5,
        'tfc:item.knapping.clay',
        true,
        true,
        false,
        'kubejs:refactory_clay',
        'kubejs:refactory_clay'
    )

    // Lumber Knapping
    event.knappingType(
        '#tfc:lumber',
        16,
        16,
        'minecraft:block.wood.break',
        false,
        false,
        true,
        'tfc:wood/lumber/oak',
        'kubejs:lumber'
    )
})

ServerEvents.recipes(event => {
    const tfc = event.recipes.tfc
    const mekanism = event.recipes.mekanism
    const create = event.recipes.create

    // Molten Andesite
    tfc.heating('tfc:rock/loose/andesite', 1450)
        .resultFluid(Fluid.of('kubejs:metal/andesite', 100))

    // Andesite Alloy
    tfc.alloy(
        'kubejs:andesite_alloy',
        [
            TFC.alloyPart('kubejs:andesite', 0.95, 0.99),
            TFC.alloyPart('tfc:cast_iron', 0.01, 0.05)
        ]
    )
    tfc.alloy(
        'kubejs:andesite_alloy',
        [
            TFC.alloyPart('kubejs:andesite', 0.95, 0.99),
            TFC.alloyPart('tfc:zinc', 0.01, 0.05)
        ]
    )

    // Obsidian Powder
    event.remove({id: 'railcraft:crusher/crushing_obsidian'})
    event.remove({id: 'railcraft:crusher/crushing_crushed_obsidian'})
    event.remove({id: 'railcraft:crusher/crushing_personal_world_spike'})
    event.remove({id: 'create:crushing/obsidian'})
    event.remove({id: 'mekanism:enriching/conversion/obsidian_to_obsidian_dust'})
    create.crushing(['railcraft:crushed_obsidian', Item.of('kubejs:powder/obsidian').withChance(0.25)], '#forge:obsidian')
    create.crushing(['kubejs:powder/obsidian', Item.of('kubejs:powder/obsidian').withChance(0.25)], 'railcraft:crushed_obsidian')
    event.custom({
        type: "immersiveengineering:crusher",
        energy: 6000,
        input: {
            tag: 'forge:obsidian'
        },
        result: {
            item: 'railcraft:crushed_obsidian'
        },
        secondaries: [
            {
                chance: 0.50,
                output: {
                    item: 'kubejs:powder/obsidian'
                }
            }
        ]
    })
    event.custom({
        type: "immersiveengineering:crusher",
        energy: 6000,
        input: {
            item: 'railcraft:crushed_obsidian'
        },
        result: {
            item: 'kubejs:powder/obsidian'
        },
        secondaries: [
            {
                chance: 0.50,
                output: {
                    item: 'kubejs:powder/obsidian'
                }
            }
        ]
    })
    mekanism.enriching(Item.of('kubejs:powder/obsidian', 4), Item.of('#forge:obsidian'))

    // Block of Coal Coke
    event.stonecutting('immersiveengineering:coke', '#forge:storage_blocks/coal_coke')
    event.stonecutting('railcraft:coal_coke_block', '#forge:storage_blocks/coal_coke')
    event.stonecutting('kubejs:coal_coke_block', '#forge:storage_blocks/coal_coke')
    event.shapeless('kubejs:coal_coke_block', [
        '9x #forge:coal_coke'
    ])

    // Iron Sawblade
    tfc.anvil(
        TFC.itemStackProvider.of('kubejs:iron_sawblade'),
        '#forge:gears/wrought_iron',
        [
            'punch_third_last',
            'hit_second_last',
            'upset_last'
        ]
    ).tier(3)

    // Left Elytra Wing
    tfc.anvil(
        TFC.itemStackProvider.of('kubejs:elytra/left_wing'),
        '#forge:double_sheets/invar',
        [
            'bend_third_last',
            'punch_any',
            'hit_any'
        ]
    ).tier(3)
    tfc.heating('kubejs:elytra/left_wing', 1535).resultFluid(Fluid.of('rosia:invar_fluid', 400))

    // Right Elytra Wing
    tfc.anvil(
        TFC.itemStackProvider.of('kubejs:elytra/right_wing'),
        '#forge:double_sheets/invar',
        [
            'bend_third_last',
            'punch_any',
            'hit_any'
        ]
    ).tier(3)
    tfc.heating('kubejs:elytra/right_wing', 1535).resultFluid(Fluid.of('rosia:invar_fluid', 400))


    // Refactory Clay
    event.shaped(
        Item.of('kubejs:refactory_clay'), 
        [
            'SCS',
            'DBD',
            'SCS'
        ],
        {
            S: '#minecraft:sand',
            C: '#forge:dusts/charcoal',
            D: '#forge:dusts/sylvite',
            B: '#forge:clay'
        }
    )

    // Unfired Refactory Brick
    event.custom({
        type: 'tfc:knapping',
        knapping_type: 'kubejs:refactory_clay',
        pattern: [
            'XXXXX',
            '     ',
            'XXXXX',
            '     ',
            'XXXXX'
        ],
        result: {
            item: 'kubejs:unfired_refactory_brick',
            count: 3
        }
    })

    // Refactory Brick
    event.custom({
        type: 'tfc:heating',
        ingredient: {
            item: 'kubejs:unfired_refactory_brick'
        },
        result_item: {
            item: 'kubejs:refactory_brick'
        },
        temperature: 1399
    })

    // Unfired Ceramic Insulator
    event.custom({
        type: 'tfc:knapping',
        knapping_type: 'tfc:clay',
        pattern: [
            ' XXX ',
            'XXXXX',
            ' XXX ',
            'XXXXX',
            ' XXX '
        ],
        result: {
            item: 'kubejs:insulator/unfired_ceramic'
        }
    })

    // Ceramic Insulator
    event.custom({
        type: 'tfc:heating',
        ingredient: {
            item: 'kubejs:insulator/unfired_ceramic'
        },
        result_item: {
            item: 'kubejs:insulator/ceramic'
        },
        temperature: 1399
    })

    // Glass Insulator
    event.custom({
        type: 'tfc:glassworking',
        operations: [
            'iron',
            'stretch',
            'pinch',
            'stretch',
            'pinch',
            'saw'
        ],
        batch: {
            tag: 'tfc:glass_batches'
        },
        result: {
            item: 'kubejs:insulator/glass'
        }
    })

    // Quicklime
    event.custom({
        type: 'tfc:heating',
        ingredient: {
            tag: 'tfc:fluxstone'
        },
        result_item: {
            item: 'kubejs:quicklime'
        },
        temperature: 900
    })

    // Wooden Pipe Frame
    event.custom({
        type: 'tfc:knapping',
        knapping_type: 'kubejs:lumber',
        outside_slot_required: false,
        pattern: [
            ' X X ',
            'X X X',
            ' X X ',
            'X X X',
            ' X X '
        ],
        ingredient: {
            tag: 'tfc:lumber'
        },
        result: {
            item: 'kubejs:pipe_frame/wood',
            count: 8
        }
    })

    // Cobblestone Pipe Frame
    event.custom({
        type: 'tfc:knapping',
        knapping_type: 'tfc:rock',
        outside_slot_required: false,
        pattern: [
            ' X X ',
            'X X X',
            ' X X ',
            'X X X',
            ' X X '
        ],
        ingredient: {
            tag: 'bsa:rock/loose'
        },
        result: {
            item: 'kubejs:pipe_frame/cobblestone',
            count: 8
        }
    })

    // Stone Pipe Frame
    event.custom({
        type: 'tfc:heating',
        ingredient: {
            item: 'kubejs:pipe_frame/cobblestone'
        },
        result_item: {
            item: 'kubejs:pipe_frame/stone'
        },
        temperature: 1399
    })

    // Quartz Pipe Frame
    event.custom({
        type: 'tfc:knapping',
        knapping_type: 'tfc:rock',
        outside_slot_required: false,
        pattern: [
            ' X X ',
            'X X X',
            ' X X ',
            'X X X',
            ' X X '
        ],
        ingredient: {
            tag: 'kubejs:knapping/quartz'
        },
        result: {
            item: 'kubejs:pipe_frame/quartz',
            count: 8
        }
    })

    // Iron Pipe Frame
    event.custom({
        type: 'tfc:anvil',
        input: {
            item: 'tfc:metal/double_ingot/wrought_iron'
        },
        result: {
            item: 'kubejs:pipe_frame/iron',
            count: 8
        },
        tier: 3,
        rules: [
            'draw_not_last',
            'bend_not_last',
            'hit_last'
        ],
        "apply_forging_bonus": false
    })
    tfc.heating('kubejs:pipe_frame/iron', 1535)
        .resultFluid(Fluid.of('tfc:metal/cast_iron', 25))

    // Gold Pipe Frame
    event.custom({
        type: 'tfc:anvil',
        input: {
            item: 'tfc:metal/double_ingot/gold'
        },
        result: {
            item: 'kubejs:pipe_frame/gold',
            count: 8
        },
        tier: 1,
        rules: [
            'draw_not_last',
            'bend_not_last',
            'hit_last'
        ],
        "apply_forging_bonus": false
    })
    tfc.heating('kubejs:pipe_frame/gold', 1060)
        .resultFluid(Fluid.of('tfc:metal/gold', 25))

    // Clay Pipe Frame
    event.custom({
        type: 'tfc:knapping',
        knapping_type: 'tfc:clay',
        pattern: [
            ' X X ',
            'X X X',
            ' X X ',
            'X X X',
            ' X X '
        ],
        result: {
            item: 'kubejs:pipe_frame/clay',
            count: 8
        }
    })

    // Sandstone Pipe Frame
    event.custom({
        type: 'tfc:knapping',
        knapping_type: 'tfc:rock',
        outside_slot_required: false,
        pattern: [
            ' X X ',
            'X X X',
            ' X X ',
            'X X X',
            ' X X '
        ],
        ingredient: {
            tag: 'kubejs:knapping/sandstone'
        },
        result: {
            item: 'kubejs:pipe_frame/sandstone',
            count: 8
        }
    })

    // Obsidian Pipe Frame
    event.custom({
        type: 'tfc:knapping',
        knapping_type: 'tfc:rock',
        outside_slot_required: false,
        pattern: [
            ' X X ',
            'X X X',
            ' X X ',
            'X X X',
            ' X X '
        ],
        ingredient: {
            tag: 'bsa:knapping/obsidian'
        },
        result: {
            item: 'kubejs:pipe_frame/obsidian',
            count: 8
        }
    })

    // Diamond Pipe Frame
    event.custom({
        type: 'tfc:knapping',
        knapping_type: 'tfc:rock',
        outside_slot_required: false,
        pattern: [
            ' X X ',
            'X X X',
            ' X X ',
            'X X X',
            ' X X '
        ],
        ingredient: {
            tag: 'bsa:knapping/diamond'
        },
        result: {
            item: 'kubejs:pipe_frame/diamond',
            count: 8
        }
    })

    // Lapis Pipe Frame
    event.custom({
        type: 'tfc:knapping',
        knapping_type: 'tfc:rock',
        outside_slot_required: false,
        pattern: [
            ' X X ',
            'X X X',
            ' X X ',
            'X X X',
            ' X X '
        ],
        ingredient: {
            tag: 'kubejs:knapping/lapis'
        },
        result: {
            item: 'kubejs:pipe_frame/lapis',
            count: 8
        }
    })

    // Emerald Pipe Frame
    event.custom({
        type: 'tfc:knapping',
        knapping_type: 'tfc:rock',
        outside_slot_required: false,
        pattern: [
            ' X X ',
            'X X X',
            ' X X ',
            'X X X',
            ' X X '
        ],
        ingredient: {
            tag: 'bsa:knapping/emerald'
        },
        result: {
            item: 'kubejs:pipe_frame/emerald',
            count: 8
        }
    })

    // Loose Brown Sandstone
    event.shapeless(
        Item.of('kubejs:sandstone/loose/brown', 4),
        [
            'tfc:raw_sandstone/brown'
        ]
    )

    // Loose White Sandstone
    event.shapeless(
        Item.of('kubejs:sandstone/loose/white', 4),
        [
            'tfc:raw_sandstone/white'
        ]
    )

    // Loose Black Sandstone
    event.shapeless(
        Item.of('kubejs:sandstone/loose/black', 4),
        [
            'tfc:raw_sandstone/black'
        ]
    )

    // Loose Red Sandstone
    event.shapeless(
        Item.of('kubejs:sandstone/loose/red', 4),
        [
            'tfc:raw_sandstone/red'
        ]
    )

    // Loose Yellow Sandstone
    event.shapeless(
        Item.of('kubejs:sandstone/loose/yellow', 4),
        [
            'tfc:raw_sandstone/yellow'
        ]
    )

    // Loose Green Sandstone
    event.shapeless(
        Item.of('kubejs:sandstone/loose/green', 4),
        [
            'tfc:raw_sandstone/green'
        ]
    )

    // Loose Pink Sandstone
    event.shapeless(
        Item.of('kubejs:sandstone/loose/pink', 4),
        [
            'tfc:raw_sandstone/pink'
        ]
    )

    // Managlass Batch
    event.custom({
        type: 'botania:mana_infusion',
        input: {
            tag: 'tfc:glass_batches'
        },
        mana: 150,
        output: {
            item: 'kubejs:mana_glass_batch'
        }
    })

    // Alfglass Batch
    event.custom({
        type: 'botania:elven_trade',
        ingredients: [
            {
                item: 'kubejs:mana_glass_batch'
            }
        ],
        output: [
            {
                item: 'kubejs:alf_glass_batch'
            }
        ]
    })

    // Refactory Clay
    event.shaped(
        Item.of('kubejs:precision_machine_frame'), 
        [
            'SBS',
            'GPG',
            'SBS'
        ],
        {
            S: '#forge:sheets/wrought_iron',
            B: 'minecraft:piston',
            G: '#forge:gears/wrought_iron',
            P: 'create:precision_mechanism'
        }
    )

    // Engine Core
    event.custom({
        type: 'tfc:knapping',
        knapping_type: 'tfc:rock',
        outside_slot_required: false,
        pattern: [
            ' XXX ',
            ' XXX ',
            ' XXX ',
            ' XXX ',
            ' XXX '
        ],
        ingredient: {
            tag: 'kubejs:knapping/lapis'
        },
        result: {
            item: 'kubejs:engine_core'
        }
    })

    // Wooden Board
    event.custom({
        type: 'tfc:knapping',
        knapping_type: 'kubejs:lumber',
        outside_slot_required: false,
        pattern: [
            'XXX  ',
            'XX   ',
            '     ',
            'XXX  ',
            'XX   '
        ],
        ingredient: {
            tag: 'tfc:lumber'
        },
        result: {
            item: 'kubejs:wooden_board',
            count: 4
        }
    })

    // Laser Core
    event.custom({
        type: 'tfc:knapping',
        knapping_type: 'tfc:rock',
        outside_slot_required: false,
        pattern: [
            ' XXX ',
            ' XXX ',
            ' XXX ',
            'XXXXX'
        ],
        ingredient: {
            tag: 'kubejs:knapping/lapis'
        },
        result: {
            item: 'kubejs:laser_core'
        }
    })
})