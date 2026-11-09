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
})
ServerEvents.recipes(event => {
    const tfc = event.recipes.tfc

    // Recipe Removal
    event.remove({id: 'buildcraftfactory:distiller'})
    event.remove({id: 'buildcraftfactory:heat_exchange'})
    event.remove({id: 'buildcraftcore:engine_redstone'})
    event.remove({id: 'buildcraftenergy:stirling_engine'})
    event.remove({id: 'buildcraftenergy:combustion_engine'})
    event.remove({id: 'buildcraftenergy:mj_dynamo'})
    event.remove({id: 'buildcraftfactory:tank'})
    
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
            G: '#forge:gears/gold',
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
            G: '#forge:gears/wrought_iron',
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
            G: '#forge:gears/wrought_iron',
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
            G: '#forge:gears/gold',
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
            G: '#forge:gears/gold',
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
        'buildcraftcore:paintbrush/clean',
        '#bsa:bindings/strong'
    )

    // Volume Box
    event.replaceInput(
        {id: 'buildcraftcore:volume_box'},
        'buildcraftcore:volume_box',
        '#forge:glass/colorless'
    )

    // FE Engine
    event.remove({id: 'buildcraftenergy:fe_engine'})
    event.shaped(
        Item.of('buildcraftenergy:engine_fe'),
        [
            'WWW',
            'BCB',
            'GPG'
        ],
        {
            W: '#forge:sheets/bismuth',
            B: 'buildcraftsilicon:redstone_chipset/diamond',
            C: 'kubejs:engine_core',
            G: 'buildcraftcore:gears/gear_diamond',
            P: 'minecraft:piston'
        }
    )
})