TFCEvents.data(event => {

    // Wooden Gear
    event.itemSize('buildcraftcore:gears/gear_wood', 'large', 'heavy')

    // Stone Gear
    event.itemSize('buildcraftcore:gears/gear_stone', 'large', 'heavy')

    // Iron Gear
    event.itemSize('buildcraftcore:gears/gear_iron', 'large', 'heavy')

    // Gold Gear
    event.itemSize('buildcraftcore:gears/gear_gold', 'large', 'heavy')

    // Diamond Gear
    event.itemSize('buildcraftcore:gears/gear_diamond', 'large', 'heavy')

    // Redstone Board
    event.itemSize('buildcraftrobotics:redstone_board', 'small', 'medium')
})

ServerEvents.recipes(event => {
    const tfc = event.recipes.tfc

    // Recipe Removal
    event.remove({id: 'buildcraftfactory:distiller'})
    event.remove({id: 'buildcraftfactory:heat_exchange'})
    event.remove({id: 'buildcraftenergy:combustion_engine'})
    event.remove({id: 'buildcraftfactory:tank'})
    event.remove({id: 'buildcraftfactory:pump'})
    event.remove({id: 'buildcraftfactory:flood_gate'})
    event.remove({id: 'buildcraftfactory:water_gel'})
    event.remove({id: 'buildcraftfactory:gel'})
    event.remove({id: 'buildcraftsilicon:plug_gate_create/iron_no_modifier'})
    event.remove({id: 'buildcraftsilicon:plug_gate_create/nether_brick_no_modifier'})
    event.remove({id: 'buildcraftenergy:fe_engine'})
    event.remove({id: 'buildcraftenergy:mj_dynamo'})
    
    // Construction Marker
    event.replaceInput(
        {id: 'buildcraftbuilders:marker_construction'},
        'buildcraftcore:gears/gear_gold',
        '#forge:dyes/yellow'
    )

    // Blueprint
    event.remove({id: 'buildcraftbuilders:blueprint'})
    event.custom({
        type: 'tfc:barrel_instant',
        input_item: {
            ingredient: {
                tag: 'forge:paper'
            }
        },
        input_fluid: {
            ingredient: 'tfc:blue_dye',
            amount: 250
        },
        output_item: {
            item: 'buildcraftbuilders:blueprint'  
        }
    })

    // Template
    event.remove({id: 'buildcraftbuilders:template'})
    event.custom({
        type: 'tfc:barrel_instant',
        input_item: {
            ingredient: {
                tag: 'forge:paper'
            }
        },
        input_fluid: {
            ingredient: 'tfc:black_dye',
            amount: 250
        },
        output_item: {
            item: 'buildcraftbuilders:template'
        }
    })

    // Single Block Schematic
    event.replaceInput(
        {id: 'buildcraftbuilders:schematic_single'},
        'minecraft:lapis_lazuli',
        'buildcraftbuilders:blueprint'
    )

    // Filler
    event.remove({id: 'buildcraftbuilders:filler'})
    event.shaped(
        Item.of('buildcraftbuilders:filler'),
        [
            'CLC',
            'RFR',
            'GTG'
        ],
        {
            C: '#forge:chests/wooden',
            L: 'buildcraftcore:marker_volume',
            R: 'buildcraftsilicon:redstone_chipset/iron',
            F: 'kubejs:precision_machine_frame',
            G: 'buildcraftcore:gears/gear_gold',
            T: '#tfc:workbenches'
            
        }
    )

    // Builder
    event.remove({id: 'buildcraftbuilders:builder'})
    event.shaped(
        Item.of('buildcraftbuilders:builder'),
        [
            'CLC',
            'RFR',
            'GTG'
        ],
        {
            C: '#forge:chests/wooden',
            L: 'buildcraftcore:marker_volume',
            R: 'buildcraftsilicon:redstone_chipset/iron',
            F: 'kubejs:precision_machine_frame',
            G: 'buildcraftcore:gears/gear_diamond',
            T: '#tfc:workbenches'
        }
    )

    // Architect Table
    event.remove({id: 'buildcraftbuilders:architect'})
    event.shaped(
        Item.of('buildcraftbuilders:architect'),
        [
            'CLC',
            'RFR',
            'GTG'
        ],
        {
            C: 'buildcraftbuilders:blueprint',
            L: 'buildcraftcore:marker_volume',
            R: 'buildcraftsilicon:redstone_chipset/iron',
            F: 'kubejs:precision_machine_frame',
            G: 'buildcraftcore:gears/gear_diamond',
            T: '#tfc:workbenches'
        }
    )

    // Electronic Library
    event.remove({id: 'buildcraftbuilders:library'})
    event.shaped(
        Item.of('buildcraftbuilders:library'),
        [
            'IGI',
            'BFB',
            'IGI'
        ],
        {
            I: '#forge:ingots/wrought_iron',
            G: 'buildcraftcore:gears/gear_iron',
            B: '#tfc:bookshelves',
            F: 'kubejs:precision_machine_frame'
        }
    )

    // Electronic Library
    event.remove({id: 'buildcraftbuilders:replacer'})
    event.shaped(
        Item.of('buildcraftbuilders:replacer'),
        [
            'IGI',
            'BFB',
            'IGI'
        ],
        {
            I: '#forge:ingots/wrought_iron',
            G: 'buildcraftcore:gears/gear_iron',
            B: '#forge:ingots/brick',
            F: 'kubejs:precision_machine_frame'
        }
    )

    // Quarry :D
    event.remove({id: 'buildcraftbuilders:quarry'})
    event.shaped(
        Item.of('buildcraftbuilders:quarry'),
        [
            'IGI',
            'BFB',
            'IGI'
        ],
        {
            I: 'buildcraftcore:gears/gear_diamond',
            G: 'buildcraftcore:gears/gear_gold',
            B: 'tfc_ie_addon:drillhead_black_steel',
            F: 'buildcraftbuilders:filler'
        }
    )

    // Filler Planner
    event.remove({id: 'buildcraftbuilders:filler_planner'})
    event.shaped(
        Item.of('buildcraftbuilders:filler_planner'),
        [
            'IGI',
            'BFB',
            'IGI'
        ],
        {
            I: '#forge:ingots/wrought_iron',
            G: 'buildcraftcore:gears/gear_gold',
            B: '#forge:paper',
            F: '#forge:dusts/redstone'
        }
    )

    // Land Mark
    event.replaceInput(
        {id: 'buildcraftcore:marker_volume'},
        'minecraft:lapis_lazuli',
        '#forge:dyes/blue'
    )

    // Path Mark
    event.replaceInput(
        {id: 'buildcraftcore:marker_path'},
        'minecraft:green_dye',
        '#forge:dyes/green'
    )

    // Redstone Engine
    event.remove({id: 'buildcraftcore:engine_redstone'})
    event.shaped(
        Item.of('buildcraftcore:engine_redstone'),
        [
            'WWW',
            'BCB',
            'GPG'
        ],
        {
            W: '#minecraft:planks',
            B: 'buildcraftrobotics:redstone_board',
            C: 'kubejs:engine_core',
            G: 'buildcraftcore:gears/gear_wood',
            P: 'minecraft:piston'
        }
    )

    // Stirling Engine
    event.remove({id: 'buildcraftenergy:stirling_engine'})
    event.shaped(
        Item.of('buildcraftenergy:engine_stone'),
        [
            'WWW',
            'BCB',
            'GPG'
        ],
        {
            W: '#forge:smooth_stone',
            B: 'buildcraftrobotics:redstone_board',
            C: 'kubejs:engine_core',
            G: 'buildcraftcore:gears/gear_stone',
            P: 'minecraft:piston'
        }
    )

    // Wrench
    event.remove({id: 'buildcraftcore:wrench'})
    tfc.anvil(
        TFC.itemStackProvider.of('buildcraftcore:wrench'),
        '#forge:ingots/wrought_iron',
        [
            'bend_third_last',
            'bend_second_last',
            'hit_last'
        ]
    ).tier(3)

    // Wooden Gear
    event.remove({id: 'buildcraftcore:gears/gear_wood'})
    event.custom({
        type: 'tfc:knapping',
        knapping_type: 'kubejs:lumber',
        outside_slot_required: false,
        pattern: [
            ' X X ',
            'XXXXX',
            ' X X ',
            'XXXXX',
            ' X X '
        ],
        ingredient: {
            tag: 'tfc:lumber'
        },
        result: {
            item: 'buildcraftcore:gears/gear_wood'
        }
    })

    // Stone Gear
    event.remove({id: 'buildcraftcore:gears/gear_stone'})
    event.custom({
        type: 'tfc:knapping',
        knapping_type: 'tfc:rock',
        outside_slot_required: false,
        pattern: [
            ' X X ',
            'XXXXX',
            ' X X ',
            'XXXXX',
            ' X X '
        ],
        ingredient: {
            tag: 'bsa:rock/loose'
        },
        result: {
            item: 'buildcraftcore:gears/gear_stone'
        }
    })

    // Iron Gear
    event.remove({id: 'buildcraftcore:gears/gear_iron'})
    tfc.anvil(
        TFC.itemStackProvider.of('buildcraftcore:gears/gear_iron'),
        '#forge:gears/wrought_iron',
        [
            'hit_any',
            'hit_any',
            'hit_any'
        ]
    ).tier(3)

    // Gold Gear
    event.remove({id: 'buildcraftcore:gears/gear_gold'})
    tfc.anvil(
        TFC.itemStackProvider.of('buildcraftcore:gears/gear_gold'),
        '#forge:gears/gold',
        [
            'hit_any',
            'hit_any',
            'hit_any'
        ]
    ).tier(1)

    // Diamond Gear
    event.remove({id: 'buildcraftcore:gears/gear_diamond'})
    event.custom({
        type: 'tfc:knapping',
        knapping_type: 'tfc:rock',
        outside_slot_required: false,
        pattern: [
            ' X X ',
            'XXXXX',
            ' X X ',
            'XXXXX',
            ' X X '
        ],
        ingredient: {
            tag: 'bsa:knapping/diamond'
        },
        result: {
            item: 'buildcraftcore:gears/gear_diamond'
        }
    })

    // Paintbrush
    event.replaceInput(
        {id: 'buildcraftcore:paintbrush/clean'},
        'minecraft:string',
        '#bsa:bindings/strong'
    )

    // Volume Box
    event.replaceInput(
        {id: 'buildcraftcore:volume_box'},
        'minecraft:glass',
        '#forge:glass/colorless'
    )

    // Auto Workbench
    event.remove({id: 'buildcraftfactory:autowork_bench_1'})
    event.remove({id: 'buildcraftfactory:autowork_bench_2'})
    event.shaped(
        Item.of('buildcraftfactory:autoworkbench_item'),
        [
            'GPG',
            'SCS',
            'GPG'
        ],
        {
            G: 'buildcraftcore:gears/gear_stone',
            P: 'create:precision_mechanism',
            S: 'buildcraftcore:gears/gear_wood',
            C: '#tfc:workbenches'
        }
    )

    // Mining Well
    event.remove({id: 'buildcraftfactory:mining_well'})
    event.shaped(
        Item.of('buildcraftfactory:mining_well'),
        [
            'GRG',
            'CPC',
            'GDG'
        ],
        {
            G: 'buildcraftcore:gears/gear_iron',
            R: '#forge:storage_blocks/redstone',
            C: 'buildcraftsilicon:redstone_chipset/iron',
            P: 'kubejs:precision_machine_frame',
            D: 'immersiveengineering:drillhead_steel'
        }
    )

    // Chute
    event.remove({id: 'buildcraftfactory:chute'})
    event.shaped(
        Item.of('buildcraftfactory:chute'),
        [
            'SGS',
            ' H '
        ],
        {
            S: '#forge:sheets/wrought_iron',
            G: 'buildcraftcore:gears/gear_stone',
            H: 'minecraft:hopper'
        }
    )

    // Zone Planner
    event.remove({id: 'buildcraftrobotics:zone_planner'})
    event.shaped(
        Item.of('buildcraftrobotics:zone_planner'),
        [
            'ICI',
            'BFB',
            'IGI'
        ],
        {
            I: '#forge:ingots/wrought_iron',
            G: 'buildcraftcore:gears/gear_diamond',
            B: 'buildcraftcore:gears/gear_gold',
            F: 'kubejs:precision_machine_frame',
            C: 'minecraft:map'
        }
    )

    // Requester
    event.remove({id: 'buildcraftrobotics:requester'})
    event.shaped(
        Item.of('buildcraftrobotics:requester'),
        [
            'ICI',
            'BFB',
            'IGI'
        ],
        {
            I: '#forge:ingots/wrought_iron',
            C: '#tfc:workbenches',
            B: 'buildcraftcore:gears/gear_gold',
            F: 'kubejs:precision_machine_frame',
            G: '#forge:chests/wooden'
        }
    )

    // Construction Marker
    event.replaceInput(
        {id: 'buildcraftrobotics:robot'},
        'minecraft:iron_ingot',
        '#forge:plates/wrought_iron'
    )

    // Redstone Board
    event.remove({id: 'buildcraftrobotics:redstone_board'})
    event.custom({
        type: 'tfc:barrel_sealed',
        input_item: {
            ingredient: {
                item: 'kubejs:wooden_board'
            }
        },
        input_fluid: {
            ingredient: {
                tag: 'forge:redstone_acid'
            },
            amount: 250
        },
        output_item: {
            item: 'buildcraftrobotics:redstone_board'
        },
        duration: 8000
    }).id('redstone_board_etching')

    // Docking Station
    event.remove({id: 'buildcraftrobotics:robot_station'})
    event.shaped(
        Item.of('buildcraftrobotics:robot_station'),
        [
            ' G ',
            'PSP'
        ],
        {
            G: 'buildcraftsilicon:redstone_chipset/gold',
            P: '#forge:plates/wrought_iron',
            S: '#forge:sheets/wrought_iron'
        }
    )

    // Laser
    event.remove({id: 'buildcraftsilicon:laser'})
    event.shaped(
        Item.of('buildcraftsilicon:laser'),
        [
            'RRR',
            'RCR',
            'OOO'
        ],
        {
            R: '#forge:dusts/redstone',
            C: 'kubejs:laser_core',
            O: '#forge:obsidian'
        }
    )

    // Assembly Table
    event.remove({id: 'buildcraftsilicon:assembly_table'})
    event.shaped(
        Item.of('buildcraftsilicon:assembly_table'),
        [
            'RRR',
            'OCO',
            'OGO'
        ],
        {
            R: '#forge:dusts/redstone',
            C: '#tfc:workbenches',
            O: '#forge:obsidian',
            G: 'buildcraftcore:gears/gear_diamond'
        }
    )

    // Advanced Crafting Table
    event.remove({id: 'buildcraftsilicon:advanced_crafting_table'})
    event.shaped(
        Item.of('buildcraftsilicon:advanced_crafting_table'),
        [
            'OCO',
            'ORO',
            'OSO'
        ],
        {
            O: '#forge:obsidian',
            C: '#tfc:workbenches',
            R: 'buildcraftsilicon:redstone_chipset/red',
            S: '#forge:chests/wooden'
        }
    )

    // Construction Marker
    event.replaceInput(
        {id: 'buildcraftsilicon:integration_table'},
        'minecraft:gold_ingot',
        '#forge:plates/gold'
    )

    // Charging Table
    event.remove({id: 'buildcraftsilicon:charging_table'})
    event.shaped(
        Item.of('buildcraftsilicon:charging_table'),
        [
            'OCO',
            'ORO',
            'OSO'
        ],
        {
            O: '#forge:obsidian',
            C: 'buildcraftsilicon:redstone_chipset/red',
            R: '#forge:plates/wrought_iron',
            S: 'buildcraftcore:gears/gear_gold'
        }
    )

    // Programming Table
    event.remove({id: 'buildcraftsilicon:programming_table'})
    event.shaped(
        Item.of('buildcraftsilicon:programming_table'),
        [
            'OCO',
            'ORO',
            'OSO'
        ],
        {
            O: '#forge:obsidian',
            C: '#forge:glass/colorless',
            R: 'buildcraftcore:list',
            S: 'buildcraftcore:gears/gear_gold'
        }
    )

    // Redstone Chipset
    event.remove({id: 'buildcraftsilicon:assembly/redstone_chipset'})
    event.custom({
        type: 'buildcraftsilicon:assembly',
        MJ: global.mj(10000),
        group: 'buildcraftsilicon:chipsets',
        ingredient_counts: [
            1,
            1
        ],
        ingredients: [
            {
                item: 'buildcraftrobotics:redstone_board'
            },
            {
                tag: 'forge:dusts/redstone'
            }
        ],
        result: {
            item: 'buildcraftsilicon:redstone_chipset/red'
        }
    })

    // Iron Chipset
    event.remove({id: 'buildcraftsilicon:assembly/iron_chipset'})
    event.custom({
        type: 'buildcraftsilicon:assembly',
        MJ: global.mj(20000),
        group: 'buildcraftsilicon:chipsets',
        ingredient_counts: [
            1,
            1
        ],
        ingredients: [
            {
                item: 'buildcraftrobotics:redstone_board'
            },
            {
                tag: 'forge:dusts/wrought_iron'
            }
        ],
        result: {
            item: 'buildcraftsilicon:redstone_chipset/iron'
        }
    })

    // Gold Chipset
    event.remove({id: 'buildcraftsilicon:assembly/gold_chipset'})
    event.custom({
        type: 'buildcraftsilicon:assembly',
        MJ: global.mj(40000),
        group: 'buildcraftsilicon:chipsets',
        ingredient_counts: [
            1,
            1
        ],
        ingredients: [
            {
                item: 'buildcraftrobotics:redstone_board'
            },
            {
                tag: 'forge:dusts/gold'
            }
        ],
        result: {
            item: 'buildcraftsilicon:redstone_chipset/gold'
        }
    })

    // Quartz Chipset
    event.remove({id: 'buildcraftsilicon:assembly/quartz_chipset'})
    event.custom({
        type: 'buildcraftsilicon:assembly',
        MJ: global.mj(60000),
        group: 'buildcraftsilicon:chipsets',
        ingredient_counts: [
            1,
            1
        ],
        ingredients: [
            {
                item: 'buildcraftrobotics:redstone_board'
            },
            {
                tag: 'forge:gems/quartz'
            }
        ],
        result: {
            item: 'buildcraftsilicon:redstone_chipset/quartz'
        }
    })

    // Diamond Chipset
    event.remove({id: 'buildcraftsilicon:assembly/diamond_chipset'})
    event.custom({
        type: 'buildcraftsilicon:assembly',
        MJ: global.mj(80000),
        group: 'buildcraftsilicon:chipsets',
        ingredient_counts: [
            1,
            1
        ],
        ingredients: [
            {
                item: 'buildcraftrobotics:redstone_board'
            },
            {
                tag: 'forge:gems/diamond'
            }
        ],
        result: {
            item: 'buildcraftsilicon:redstone_chipset/diamond'
        }
    })

    // Pipe Pulsar
    event.remove({id: 'buildcraftsilicon:assembly/plug_pulsar'})
    event.custom({
        type: 'buildcraftsilicon:assembly',
        MJ: global.mj(1000),
        ingredient_counts: [
            1,
            2
        ],
        ingredients: [
            {
                item: 'buildcraftcore:engine_redstone'
            },
            {
                tag: 'forge:plates/wrought_iron'
            }
        ],
        result: {
            item: 'buildcraftsilicon:plug/pulsar'
        }
    })

    // Pipe Sealant
    event.remove({id: 'buildcraftenergy:residue_to_pipe_sealant'})
    event.remove({id: 'buildcrafttransport:waterproof'})
    event.remove({id: 'buildcrafttransport:residue_to_waterproof'})
    event.custom({
        type: 'tfc:barrel_sealed',
        input_item: {
            ingredient: {
                tag: 'forge:slimeballs'
            }
        },
        input_fluid: {
            ingredient: {
                tag: 'tfc:green_dye'
            },
            amount: 50
        },
        output_item: {
            item: 'buildcrafttransport:waterproof',
            count: 4
        },
        duration: 8000
    }).id('pipe_sealant')

    // Cobblestone Structure Pipe
    event.remove({id: 'buildcrafttransport:structure'})
    event.custom({
        type: 'buildcraftsilicon:assembly',
        MJ: global.mj(1000),
        ingredient_counts: [
            4,
            1,
        ],
        ingredients: [
            {
                item: 'kubejs:pipe_frame/cobblestone'
            },
            {
                tag: 'forge:cobblestone'
            }
        ],
        result: {
            item: 'buildcrafttransport:structure',
            count: 8
        }
    })

    // Wooden Pipe
    event.remove({id: 'buildcrafttransport:wood_item'})
    event.custom({
        type: 'buildcraftsilicon:assembly',
        MJ: global.mj(1000),
        ingredient_counts: [
            4,
            1
        ],
        ingredients: [
            {
                item: 'kubejs:pipe_frame/wood'
            },
            {
                tag: 'forge:glass/colorless'
            }
        ],
        result: {
            item: 'buildcrafttransport:wood_item',
            count: 8
        }
    })
    event.shaped(
        Item.of('buildcrafttransport:wood_item'),
        [
            'FGF',
        ],
        {
            F: 'kubejs:pipe_frame/wood',
            G: '#forge:glass/colorless'
        }
    )

    // Cobblestone Pipe
    event.remove({id: 'buildcrafttransport:cobblestone_item'})
    event.custom({
        type: 'buildcraftsilicon:assembly',
        MJ: global.mj(1000),
        ingredient_counts: [
            4,
            1
        ],
        ingredients: [
            {
                item: 'kubejs:pipe_frame/cobblestone'
            },
            {
                tag: 'forge:glass/colorless'
            }
        ],
        result: {
            item: 'buildcrafttransport:cobblestone_item',
            count: 8
        }
    })
    event.shaped(
        Item.of('buildcrafttransport:cobblestone_item'),
        [
            'FGF',
        ],
        {
            F: 'kubejs:pipe_frame/cobblestone',
            G: '#forge:glass/colorless'
        }
    )

    // Stone Pipe
    event.remove({id: 'buildcrafttransport:stone_item'})
    event.custom({
        type: 'buildcraftsilicon:assembly',
        MJ: global.mj(1000),
        ingredient_counts: [
            4,
            1
        ],
        ingredients: [
            {
                item: 'kubejs:pipe_frame/stone'
            },
            {
                tag: 'forge:glass/colorless'
            }
        ],
        result: {
            item: 'buildcrafttransport:stone_item',
            count: 8
        }
    })

    // Quartz Pipe
    event.remove({id: 'buildcrafttransport:quartz_item'})
    event.custom({
        type: 'buildcraftsilicon:assembly',
        MJ: global.mj(1000),
        ingredient_counts: [
            4,
            1
        ],
        ingredients: [
            {
                item: 'kubejs:pipe_frame/quartz'
            },
            {
                tag: 'forge:glass/colorless'
            }
        ],
        result: {
            item: 'buildcrafttransport:quartz_item',
            count: 8
        }
    })

    // Iron Pipe
    event.remove({id: 'buildcrafttransport:iron_item'})
    event.custom({
        type: 'buildcraftsilicon:assembly',
        MJ: global.mj(1000),
        ingredient_counts: [
            4,
            1
        ],
        ingredients: [
            {
                item: 'kubejs:pipe_frame/iron'
            },
            {
                tag: 'forge:glass/colorless'
            }
        ],
        result: {
            item: 'buildcrafttransport:iron_item',
            count: 8
        }
    })

    // Gold Pipe
    event.remove({id: 'buildcrafttransport:gold_item'})
    event.custom({
        type: 'buildcraftsilicon:assembly',
        MJ: global.mj(1000),
        ingredient_counts: [
            4,
            1
        ],
        ingredients: [
            {
                item: 'kubejs:pipe_frame/gold'
            },
            {
                tag: 'forge:glass/colorless'
            }
        ],
        result: {
            item: 'buildcrafttransport:gold_item',
            count: 8
        }
    })

    // Clay Pipe
    event.remove({id: 'buildcrafttransport:clay_item'})
    event.custom({
        type: 'buildcraftsilicon:assembly',
        MJ: global.mj(1000),
        ingredient_counts: [
            4,
            1
        ],
        ingredients: [
            {
                item: 'kubejs:pipe_frame/clay'
            },
            {
                tag: 'forge:glass/colorless'
            }
        ],
        result: {
            item: 'buildcrafttransport:clay_item',
            count: 8
        }
    })

    // Sandstone Pipe
    event.remove({id: 'buildcrafttransport:sandstone_item'})
    event.custom({
        type: 'buildcraftsilicon:assembly',
        MJ: global.mj(1000),
        ingredient_counts: [
            4,
            1
        ],
        ingredients: [
            {
                item: 'kubejs:pipe_frame/sandstone'
            },
            {
                tag: 'forge:glass/colorless'
            }
        ],
        result: {
            item: 'buildcrafttransport:sandstone_item',
            count: 8
        }
    })

    // Void Pipe
    event.remove({id: 'buildcrafttransport:void_item'})
    event.custom({
        type: 'buildcraftsilicon:assembly',
        MJ: global.mj(1000),
        ingredient_counts: [
            2,
            2,
            1
        ],
        ingredients: [
            {
                item: 'kubejs:pipe_frame/obsidian'
            },
            {
                item: 'kubejs:pipe_frame/cobblestone'
            },
            {
                tag: 'forge:glass/colorless'
            }
        ],
        result: {
            item: 'buildcrafttransport:void_item',
            count: 8
        }
    })

    // Obsidian Pipe
    event.remove({id: 'buildcrafttransport:obsidian_item'})
    event.custom({
        type: 'buildcraftsilicon:assembly',
        MJ: global.mj(1000),
        ingredient_counts: [
            4,
            1
        ],
        ingredients: [
            {
                item: 'kubejs:pipe_frame/obsidian'
            },
            {
                tag: 'forge:glass/colorless'
            }
        ],
        result: {
            item: 'buildcrafttransport:obsidian_item',
            count: 8
        }
    })

    // Diamond Pipe
    event.remove({id: 'buildcrafttransport:diamond_item'})
    event.custom({
        type: 'buildcraftsilicon:assembly',
        MJ: global.mj(1000),
        ingredient_counts: [
            4,
            1
        ],
        ingredients: [
            {
                item: 'kubejs:pipe_frame/diamond'
            },
            {
                tag: 'forge:glass/colorless'
            }
        ],
        result: {
            item: 'buildcrafttransport:diamond_item',
            count: 8
        }
    })

    // Wooden Diamond Pipe
    event.remove({id: 'buildcrafttransport:diamond_wood_item'})
    event.custom({
        type: 'buildcraftsilicon:assembly',
        MJ: global.mj(1000),
        ingredient_counts: [
            2,
            2,
            1
        ],
        ingredients: [
            {
                item: 'kubejs:pipe_frame/diamond'
            },
            {
                item: 'kubejs:pipe_frame/wood'
            },
            {
                tag: 'forge:glass/colorless'
            }
        ],
        result: {
            item: 'buildcrafttransport:diamond_wood_item',
            count: 8
        }
    })

    // Lazuli Pipe
    event.remove({id: 'buildcrafttransport:lapis_item'})
    event.custom({
        type: 'buildcraftsilicon:assembly',
        MJ: global.mj(1000),
        ingredient_counts: [
            4,
            1
        ],
        ingredients: [
            {
                item: 'kubejs:pipe_frame/lapis'
            },
            {
                tag: 'forge:glass/colorless'
            }
        ],
        result: {
            item: 'buildcrafttransport:lapis_item',
            count: 8
        }
    })

    // Daizuli Pipe
    event.remove({id: 'buildcrafttransport:daizuli_item'})
    event.custom({
        type: 'buildcraftsilicon:assembly',
        MJ: global.mj(1000),
        ingredient_counts: [
            2,
            2,
            1
        ],
        ingredients: [
            {
                item: 'kubejs:pipe_frame/diamond'
            },
            {
                item: 'kubejs:pipe_frame/lapis'
            },
            {
                tag: 'forge:glass/colorless'
            }
        ],
        result: {
            item: 'buildcrafttransport:daizuli_item',
            count: 8
        }
    })

    // Emzuli Pipe
    event.remove({id: 'buildcrafttransport:emzuli_item'})
    event.custom({
        type: 'buildcraftsilicon:assembly',
        MJ: global.mj(1000),
        ingredient_counts: [
            2,
            2,
            1
        ],
        ingredients: [
            {
                item: 'kubejs:pipe_frame/emerald'
            },
            {
                item: 'kubejs:pipe_frame/lapis'
            },
            {
                tag: 'forge:glass/colorless'
            }
        ],
        result: {
            item: 'buildcrafttransport:emzuli_item',
            count: 8
        }
    })

    // Stripes Pipe
    event.remove({id: 'buildcrafttransport:stripes_item'})
    event.custom({
        type: 'buildcraftsilicon:assembly',
        MJ: global.mj(1000),
        ingredient_counts: [
            2,
            2,
            1
        ],
        ingredients: [
            {
                item: 'kubejs:pipe_frame/gold'
            },
            {
                item: 'kubejs:pipe_frame/cobblestone'
            },
            {
                tag: 'forge:glass/colorless'
            }
        ],
        result: {
            item: 'buildcrafttransport:stripes_item',
            count: 8
        }
    })

    // Power Adaptor
    event.replaceInput(
        {id: 'buildcrafttransport:plug_power_adaptor'},
        'minecraft:gold_ingot',
        '#forge:plates/gold'
    )
})