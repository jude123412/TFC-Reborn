TFCEvents.data(event => {

    // Cake Base
    event.itemHeat('createaddition:cake_base', 1.0, null, null)

    // Baked Cake Base
    event.itemHeat('createaddition:cake_base_baked', 1.0, null, null)
})

ServerEvents.recipes(event => {

    // Recipe Removal
    event.remove({id: 'createdieselgenerators:crafting/engine_piston'})
    event.remove({id: 'createdieselgenerators:crafting/wire_cutters'})
    event.remove({id: 'createdieselgenerators:crafting/hammer'})
    event.remove({id: 'vintage:hammering/netherite_ingot'})
    event.remove({id: 'createaddition:compat/immersiveengineering/crushing/steel_ingot'})
    event.remove({id: 'createaddition:compat/immersiveengineering/crushing/coal_coke'})
    event.remove({id: 'createaddition:crushing/diamond'})
    event.remove({id: 'createdieselgenerators:compression_molding/chain'})
    event.remove({id: 'vintage:curving/iron_sheet'})
    event.remove({id: 'createdieselgenerators:compression_molding/bucket'})
    event.remove({id: 'createaddition:crafting/electrum_ingot'})
    event.remove({id: 'createaddition:crafting/electrum'})
    event.remove({id: 'createaddition:mixing/electrum'})
    event.remove({id: 'vintage:craft/vanadium_nuggets_to_ingot'})
    event.remove({id: 'vintage:craft/vanadium_block_to_ingots'})
    event.remove({id: 'vintage:crushing/basalt_recycling'})
    event.remove({id: 'vintage:crushing/basalt'})
    event.remove({id: 'vintage:craft/vanadium_ingot_to_nuggets'})
    event.remove({id: 'vintage:craft/sulfur_item_to_nuggets'})
    event.remove({id: 'vintage:crushing/scoria'})
    event.remove({id: 'vintage:crushing/scoria_recycling'})
    event.remove({id: 'createaddition:crafting/electrum_nugget'})
    event.remove({id: 'createaddition:pressing/aluminum_ingot'})
    event.remove({id: 'createaddition:pressing/lead_ingot'})
    event.remove({id: 'createaddition:pressing/silver_ingot'})
    event.remove({id: 'createaddition:pressing/nickel_ingot'})
    event.remove({id: 'createaddition:pressing/uranium_ingot'})
    event.remove({id: 'createaddition:pressing/constantan_ingot'})
    event.remove({id: 'createaddition:pressing/steel_ingot'})
    event.remove({id: 'createaddition:pressing/electrum_ingot'})
    event.remove({id: 'createaddition:pressing/zinc_ingot'})
    event.remove({id: 'vintage:pressing/andesite_alloy'})
    event.remove({id: 'vintage:pressing/vanadium_ingot'})
    event.remove({id: 'vintage:pressing/bronze_ingot'})
    event.remove({id: 'vintage:pressing/lead_ingot'})
    event.remove({id: 'vintage:pressing/tin_ingot'})
    event.remove({id: 'vintage:pressing/uranium_ingot'})
    event.remove({id: 'vintage:pressing/refined_glowstone_ingot'})
    event.remove({id: 'vintage:pressing/refined_obsidian_ingot'})
    event.remove({id: 'vintage:pressing/osmium_ingot'})
    event.remove({id: 'vintage:pressing/silver_ingot'})
    event.remove({id: 'vintage:pressing/pig_iron_ingot'})
    event.remove({id: 'vintage:pressing/invar_ingot'})
    event.remove({id: 'vintage:pressing/rose_gold_ingot'})
    event.remove({id: 'vintage:pressing/constantan_ingot'})
    event.remove({id: 'vintage:pressing/nickel_ingot'})
    event.remove({id: 'vintage:pressing/refined_radiance'})
    event.remove({id: 'vintage:pressing/shadow_steel'})
    event.remove({id: 'createaddition:crafting/small_connector_copper'})
    event.remove({id: 'createaddition:crafting/small_light_connector'})
    event.remove({id: 'createaddition:crafting/large_connector_gold'})
    event.remove({id: 'createaddition:crafting/large_connector_electrum'})
    event.remove({id: 'createaddition:crafting/redstone_relay'})
    event.remove({id: 'createaddition:filling/cake'})
    event.remove({id: 'createaddition:crafting/electrum_block'})
    event.remove({id: 'createaddition:mixing/biomass_from_crops'})
    event.remove({id: 'createaddition:mixing/biomass_from_honeycomb'})
    event.remove({id: 'createaddition:mixing/biomass_from_plant_foods'})
    event.remove({id: 'createaddition:crafting/spool'})
    event.remove({id: 'createaddition:crafting/copper_spool'})
    event.remove({id: 'createaddition:crafting/gold_spool'})
    event.remove({id: 'createaddition:crafting/electrum_spool'})
    event.remove({id: 'createaddition:crafting/festive_spool'})
    event.remove({id: 'createaddition:compacting/seed_oil'})
    event.remove({id: 'createdieselgenerators:compacting/plant_oil'})

    // Recipe Removal by output
    event.remove({output: 'createdieselgenerators:wood_chip'})

    // Recipe Removal by type
    event.remove({ type: 'vintage:coiling' })
    event.remove({ type: 'createaddition:rolling' })

    
    // Diesel Engine
    event.remove({id: 'createdieselgenerators:crafting/diesel_engine'})
    event.shaped(
        'createdieselgenerators:diesel_engine', 
        [
            ' F ',
            'PSP',
            'BTB'
        ],
        {
            F: '#tfc:starts_fires_with_durability',
            P: 'createdieselgenerators:engine_piston',
            S: '#forge:double_ingots/brass',
            B: 'minecraft:polished_blackstone_slab',
            T: 'create:fluid_tank'
        }
    )

    // Huge Diesel Engine
    event.remove({id: 'createdieselgenerators:crafting/huge_diesel_engine'})
    event.shaped(
        'createdieselgenerators:huge_diesel_engine', 
        [
            'AFA',
            'PSP',
            'BTB'
        ],
        {
            A: '#forge:ingots/andesite_alloy',
            F: '#tfc:starts_fires_with_durability',
            P: '#forge:plates/brass',
            S: 'create:steam_engine',
            B: 'create:fluid_pipe',
            T: '#forge:double_ingots/brass'
        }
    )

    // Oil Scanner
    event.replaceInput(
        {id: 'createdieselgenerators:crafting/oil_scanner'},
        'minecraft:iron_ingot',
        '#forge:ingots/wrought_iron'
    )

    // Pumpjack Hole
    event.replaceInput(
        {id: 'createdieselgenerators:crafting/pumpjack_hole'},
        'minecraft:chain',
        'tfc:metal/chain/wrought_iron'
    )

    // Spout
    event.replaceInput(
        {id: 'createdieselgenerators:crafting/pumpjack_head'},
        'minecraft:dried_kelp',
        'tfc:food/dried_kelp'
    )

    // Chip Wood Beam
    event.replaceInput(
        {id: 'createdieselgenerators:crafting/chip_wood_beam'},
        'createdieselgenerators:wood_chip',
        '#forge:dusts/wood'
    )

    // Chip Wood Block
    event.remove({id: 'createdieselgenerators:crafting/chip_wood_block'})
    event.shapeless(
        Item.of('createdieselgenerators:chip_wood_block'),
        [
            '9x kubejs:powder/wood'
        ]
    )

    // Chip Wood to Sawdust
        event.shapeless(
        Item.of('createdieselgenerators:chip_wood_block'),
        [
            'createdieselgenerators:chip_wood_block',
            '#tfc:hammers'
        ]
    ).damageIngredient('#tfc:hammers')

    // Burner
    event.replaceInput(
        {id: 'createdieselgenerators:crafting/burner'},
        'minecraft:flint_and_steel',
        '#tfc:starts_fires_with_durability'
    )

    // Kelp Handle
    event.replaceInput(
        {id: 'createdieselgenerators:crafting/kelp_handle'},
        'minecraft:dried_kelp',
        'tfc:food/dried_kelp'
    )

    // Lighter
    event.remove({id: 'createdieselgenerators:crafting/lighter'})
    event.shaped(
        'createdieselgenerators:lighter', 
        [
            ' BL',
            'BSB',
            'BAB'
        ],
        {
            B: '#forge:plates/brass',
            L: '#tfc:starts_fires_with_durability',
            S: '#forge:string',
            A: '#forge:ingots/andesite_alloy'
        }
    )

    // Chemical Sprayer
    event.replaceInput(
        {id: 'createdieselgenerators:mechanical_crafting/chemcial_sprayer'},
        'minecraft:copper_block',
        '#forge:double_ingots/copper'
    )

    // Track layers Bag
    event.remove({id: 'createdieselgenerators:crafting/track_layers_bag'})
    event.shaped(
        'createdieselgenerators:track_layers_bag', 
        [
            ' S ',
            'LLL',
            ' A '
        ],
        {
            S: '#forge:string',
            L: '#forge:leather',
            A: '#forge:ingots/andesite_alloy'
        }
    )

    // Oil Scanner
    event.replaceInput(
        {id: 'vintage:craft/spring_coiling_machine'},
        'minecraft:iron_ingot',
        '#forge:ingots/wrought_iron'
    )

    // Helve Hammer
    event.replaceInput(
        {id: 'vintage:mechanical_crafting/helve_hammer'},
        'minecraft:iron_block',
        '#forge:double_ingots/wrought_iron'
    )

    // Lathe
    event.replaceInput(
        {id: 'vintage:mechanical_crafting/lathe'},
        'minecraft:iron_block',
        '#forge:double_ingots/wrought_iron'
    )

    // Convex Curving Head
    event.replaceInput(
        {id: 'vintage:turning/convex_curving_head'},
        'minecraft:iron_block',
        '#forge:double_ingots/wrought_iron'
    )

    // Spring Coiling Machine Wheel
    event.replaceInput(
        {id: 'vintage:craft/spring_coiling_machine_wheel'},
        'minecraft:iron_block',
        '#forge:double_ingots/wrought_iron'
    )

    // Vibrating Table
    event.replaceInput(
        {id: 'vintage:craft/vibrating_table'},
        '#vintage:springs',
        '#vintage:springs/iron'
    )

    // Wrought Iron Spring
    event.custom({
        type: 'vintage:coiling',
        springColor: '828282',
        ingredients: [
            {
                tag: 'forge:rods/wrought_iron'
            }
        ],
        results: [
            {
                item: 'vintage:iron_spring'
            }
        ],
        processingTime: 120
    })

    // Electric Motor
    event.remove({id: 'createaddition:mechanical_crafting/electric_motor'})
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            '  S  ',
            ' PCP ',
            'PCRCP',
            ' PCP ',
            '  F  '
        ],
        key: {
            S: {
                item: 'create:shaft'
            },
            P: {
                tag: 'forge:plates/brass'
            },
            C: {
                item: 'rosia:copper_coil'
            },
            R: {
                item: 'rosia:motor'
            },
            F: {
                item: 'createaddition:capacitor'
            }
        },
        result: {
            item: 'createaddition:electric_motor'
        }
    })

    // Alternator
    event.remove({id: 'createaddition:mechanical_crafting/alternator'})
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            '  F  ',
            ' PCP ',
            'PCRCP',
            ' PCP ',
            '  S  '
        ],
        key: {
            F: {
                item: 'createaddition:capacitor'
            },
            P: {
                tag: 'forge:plates/wrought_iron'
            },
            C: {
                item: 'rosia:copper_coil'
            },
            R: {
                item: 'rosia:motor'
            },
            S: {
                item: 'create:shaft'
            }
        },
        result: {
            item: 'createaddition:alternator'
        }
    })

    // Cake Base
    event.remove({id: 'createaddition:compacting/cake_base'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                tag: 'forge:eggs'
            },
            {
                tag: 'tfc:sweetener',
                count: 2
            },
            {
                tag: 'tfc:cow_food'
            }
        ],
        results: [
            {
                item: 'createaddition:cake_base'
            }
        ]
    })

    // Baked Cake Base
    event.remove({id: 'createaddition:smoking/cake_base_baked'})
    event.custom({
        type: 'tfc:heating',
        ingredient: {
            item: 'createaddition:cake_base'
        },
        result_item: {
            item: 'createaddition:cake_base_baked'
        },
        temperature: 200
    })

    // Tesla Coil
    event.replaceInput(
        {id: 'createaddition:mechanical_crafting/tesla_coil'},
        'createaddition:copper_spool',
        'rosia:copper_coil'
    )

    // Portable Energy Interface
    event.replaceInput(
        {id: 'createaddition:crafting/portable_energy_interface'},
        'createaddition:copper_spool',
        'rosia:copper_coil'
    )

    // Capacitor
    event.remove({id: 'createaddition:crafting/capacitor_1'})
    event.remove({id: 'createaddition:crafting/capacitor_2'})
    event.custom({
        type: 'minecraft:crafting_shaped',
        key: {
            G: {
                tag: 'tfc:fireclay/carbon'
            },
            R: {
                type: 'immersiveengineering:fluid',
                amount: 1000,
                tag: 'forge:redstone_acid'
            },
            P: {
                tag: 'forge:plates/aluminum'
            },
            J: {
                item: 'tfc:empty_jar'
            },
            S: {
                tag: 'forge:rods/zinc'
            }
        },
        pattern: [
            'GRG',
            'PJP',
            'SGS'
        ],
        result: {
            item: 'createaddition:capacitor'
        }
    })

    // Diamond Grit Sandpaper
    event.remove({id: 'createaddition:crafting/diamond_grit_sandpaper'})
    event.shapeless(
        Item.of('createaddition:diamond_grit_sandpaper'),
        [
            '#forge:paper',
            '#tfc:flux',
            '#forge:slimeballs',
            '2x #forge:dusts/diamond'
        ]
    )

    // Straw
    event.custom({
        type: 'createaddition:rolling',
        input: {
            tag: 'forge:paper'
        },
        result: {
            item: 'createaddition:straw'
        }
    })

    // Biofuel
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                tag: 'tfc:sweetener'
            },
            {
                item: 'create:cinder_flour'
            },
            {
                item: 'createaddition:biomass'
            }
        ],
        results:[
            {
                fluid: 'createaddition:bioethanol',
                amount: 125
            }
        ]
    })
})