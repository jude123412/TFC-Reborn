TFCEvents.data(event => {
    // Bar of Chocolate
    event.foodItem('create:bar_of_chocolate', food => {
        food.hunger(4)
        food.dairy(0.5)
        food.saturation(0.8)
        food.decayModifier(0.5)
    })

    event.foodItem('create:sweet_roll', food => {
        food.hunger(6)
        food.grain(0.8)
        food.dairy(0.5)
        food.saturation(1.6)
        food.decayModifier(3.0)
    })

    event.foodItem('create:chocolate_glazed_berries', food => {
        food.hunger(2)
        food.fruit(0.8)
        food.dairy(0.5)
        food.saturation(1.0)
        food.decayModifier(1.5)
    })

    event.foodItem('create:honeyed_apple', food => {
        food.hunger(4)
        food.fruit(1.0)
        food.saturation(0.8)
        food.decayModifier(1.5)
    })

    event.foodItem('create:builders_tea', food => {
        food.hunger(1)
        food.fruit(0.2)
        food.dairy(0.5)
        food.saturation(0.8)
        food.decayModifier(1.0)
    })
})

ServerEvents.recipes(event => {
    const tfc = event.recipes.tfc
    const create = event.recipes.create

    event.remove({id: 'createdieselgenerators:compression_molding/bucket'})
    event.remove({id: 'create:crafting/kinetics/empty_blaze_burner'})
    event.remove({id: 'create:conversion_0'})
    event.remove({id: 'create:crafting/materials/andesite_alloy'})
    event.remove({id: 'create:crafting/materials/andesite_alloy_from_zinc'})
    event.remove({id: 'create:crafting/materials/andesite_alloy_from_block'})
    event.remove({id: 'create:mixing/andesite_alloy_from_zinc'})
    event.remove({id: 'create:mixing/andesite_alloy'})
    event.remove({id: 'create:milling/wheat'})
    event.remove({id: 'createdieselgenerators:basin_fermenting/dough'})
    event.remove({id: 'create:crafting/appliances/dough'})
    event.remove({id: 'create:splashing/wheat_flour'})
    event.remove({id: 'create:mixing/dough_by_mixing'})
    event.remove({id: 'create:crushing/raw_iron_block'})
    event.remove({id: 'create:crushing/deepslate_iron_ore'})
    event.remove({id: 'create:crushing/deepslate_zinc_ore'})
    event.remove({id: 'create:crushing/raw_zinc_block'})
    event.remove({id: 'create:crushing/raw_zinc'})
    event.remove({id: 'create:crushing/zinc_ore'})
    event.remove({id: 'create:crushing/raw_osmium_block'})
    event.remove({id: 'create:crushing/osmium_ore'})
    event.remove({id: 'create:crushing/raw_osmium'})
    event.remove({id: 'create:crushing/raw_silver'})
    event.remove({id: 'create:crushing/raw_silver_block'})
    event.remove({id: 'create:crushing/silver_ore'})
    event.remove({id: 'create:crushing/tin_ore'})
    event.remove({id: 'create:crushing/raw_tin'})
    event.remove({id: 'create:crushing/raw_tin_block'})
    event.remove({id: 'create:crushing/raw_lead'})
    event.remove({id: 'create:crushing/lead_ore'})
    event.remove({id: 'create:crushing/raw_lead_block'})
    event.remove({id: 'create:crushing/raw_aluminum_block'})
    event.remove({id: 'create:crushing/raw_aluminum'})
    event.remove({id: 'create:crushing/aluminum_ore'})
    event.remove({id: 'create:crushing/raw_uranium'})
    event.remove({id: 'create:crushing/uranium_ore'})
    event.remove({id: 'create:crushing/raw_uranium_block'})
    event.remove({id: 'create:crushing/raw_nickel'})
    event.remove({id: 'create:crushing/nickel_ore'})
    event.remove({id: 'create:crushing/raw_nickel_block'})
    event.remove({id: 'create:compacting/chocolate'})
    event.remove({id: 'create:crushing/deepslate_copper_ore'})
    event.remove({id: 'create:crushing/diamond_ore'})
    event.remove({id: 'create:crushing/raw_copper_block'})
    event.remove({id: 'create:crushing/raw_gold'})
    event.remove({id: 'create:crushing/deepslate_diamond_ore'})
    event.remove({id: 'create:crushing/copper_ore'})
    event.remove({id: 'create:crushing/coal_ore'})
    event.remove({id: 'create:crushing/deepslate_emerald_ore'})
    event.remove({id: 'create:crushing/raw_copper'})
    event.remove({id: 'create:crushing/gold_ore'})
    event.remove({id: 'create:crushing/redstone_ore'})
    event.remove({id: 'create:crushing/deepslate_redstone_ore'})
    event.remove({id: 'create:crushing/deepslate_lapis_ore'})
    event.remove({id: 'create:crushing/raw_iron1'})
    event.remove({id: 'create:crushing/emerald_ore'})
    event.remove({id: 'create:crushing/nether_quartz_ore'})
    event.remove({id: 'create:crushing/lapis_ore'})
    event.remove({id: 'create:crushing/deepslate_gold_ore'})
    event.remove({id: 'create:crushing/iron_ore'})
    event.remove({id: 'create:crushing/raw_gold_block'})
    event.remove({id: 'create:crushing/deepslate_coal_ore'})
    event.remove({id: 'create:crushing/raw_iron'})
    event.remove({id: 'create:compacting/blaze_cake'})
    event.remove({id: 'create:crafting/materials/raw_zinc_block'})
    event.remove({id: 'createaddition:compat/immersiveengineering/fabric_sail'})

    // Copper Backtank
    event.replaceInput(
        {id: 'create:crafting/appliances/copper_backtank'},
        'minecraft:copper_block',
        '#forge:double_sheets/copper'
    )

    // Schematicannon
    event.replaceInput(
        {id: 'create:crafting/schematics/schematicannon'},
        'minecraft:smooth_stone',
        '#tfc:rock/smooth'
    )
    event.replaceInput(
        {id: 'create:crafting/schematics/schematicannon'},
        'minecraft:iron_block',
        '#forge:double_sheets/wrought_iron'
    )

    // Schematic Table
    event.replaceInput(
        {id: 'create:crafting/schematics/schematic_table'},
        'minecraft:smooth_stone',
        '#tfc:rock/smooth'
    )

    // Shaft
    event.remove({output: 'create:shaft'})
    create.cutting(Item.of('create:shaft', 4), 'create:andesite_alloy').processingTime(200)
    tfc.anvil(
        TFC.itemStackProvider.of('create:shaft').copyHeat().withCount(4),
        'create:andesite_alloy',
        [
            'hit_third_last',
            'draw_second_last',
            'upset_last'
        ]
    ).tier(2)

    // Cogwheel
    event.remove({output: 'create:cogwheel'})
    event.shaped(
        Item.of('create:cogwheel'),
        [
            ' L ',
            'LSL',
            ' L '
        ],
        {
            L: '#tfc:lumber',
            S: 'create:shaft'
        }
    )

    // Large Cogwheel
    event.remove({output: 'create:large_cogwheel'})
    event.shaped(
        Item.of('create:large_cogwheel'),
        [
            ' L ',
            'LSL',
            ' L '
        ],
        {
            L: '#tfc:lumber',
            S: 'create:cogwheel'
        }
    )

    // Mechanical Press
    event.replaceInput(
        {id: 'create:crafting/kinetics/mechanical_press'},
        'minecraft:iron_block',
        '#forge:double_ingots/wrought_iron'
    )

    // Chute
    event.replaceInput(
        {id: 'create:crafting/kinetics/chute'},
        'minecraft:iron_ingot',
        '#forge:ingots/wrought_iron'
    )

    // Metal Bracket
    event.replaceInput(
        {id: 'create:crafting/kinetics/metal_bracket'},
        'minecraft:iron_ingot',
        '#forge:ingots/wrought_iron'
    )

    // Item Drain
    event.replaceInput(
        {id: 'create:crafting/kinetics/item_drain'},
        'minecraft:iron_bars',
        'tfc:metal/bars/wrought_iron'
    )

    // Spout
    event.replaceInput(
        {id: 'create:crafting/kinetics/spout'},
        'minecraft:dried_kelp',
        'tfc:food/dried_kelp'
    )

    //Steam Engine
    event.remove({id: 'create:crafting/kinetics/steam_engine'})
    event.shaped(
        Item.of('create:steam_engine'),
        [
            ' G ',
            'CAC',
            'DPD'
        ],
        {
            G: '#forge:plates/gold',
            C: '#forge:sheets/copper',
            A: '#forge:ingots/andesite_alloy',
            D: '#forge:double_ingots/copper',
            P: '#forge:gears/wrought_iron'
        }
    )

    // Controller Rail
    event.remove({id: 'create:crafting/kinetics/controller_rail'})
    event.shaped(
        Item.of('create:controller_rail', 8),
        [
            'R R',
            'RSR',
            'RTR'
        ],
        {
            R: 'railcraft:advanced_rail',
            S: 'railcraft:wooden_railbed',
            T: 'create:electron_tube'
        }
    )

    // Mechanical Drill
    event.remove({id: 'create:crafting/kinetics/mechanical_drill'})
    event.shaped(
        Item.of('create:mechanical_drill'),
        [
            'D',
            'A',
            'C'
        ],
        {
            D: 'immersiveengineering:drillhead_iron',
            A: '#forge:ingots/andesite_alloy',
            C: 'create:andesite_casing'
        }
    )

    // Mechanical Saw
    event.remove({id: 'create:crafting/kinetics/mechanical_saw'})
    event.shaped(
        Item.of('create:mechanical_saw'),
        [
            'D',
            'A',
            'C'
        ],
        {
            D: 'kubejs:iron_sawblade',
            A: '#forge:ingots/andesite_alloy',
            C: 'create:andesite_casing'
        }
    )

    // Redstone Contact
    event.replaceInput(
        {id: 'create:crafting/logistics/redstone_contact'},
        'minecraft:cobblestone',
        '#forge:cobblestone'
    )

    // Windmill Sail
    event.remove({id: 'create:crafting/kinetics/white_sail'})
    event.shaped(
        Item.of('create:white_sail', 2),
        [
            'SRS',
            'RCR',
            'SRS'
        ],
        {
            S: '#bsa:bindings/weak',
            R: '#forge:rods/wooden',
            C: 'farmersdelight:canvas'
        }
    )

    // Mechanical Crafter
    event.replaceInput(
        {id: 'create:crafting/kinetics/mechanical_crafter'},
        'minecraft:crafting_table',
        '#tfc:workbenches'
    )
    
    // Andesite Funnel
    event.replaceInput(
        {id: 'create:crafting/logistics/andesite_funnel'},
        'minecraft:dried_kelp',
        'tfc:food/dried_kelp'
    )

    // Brass Funnel
    event.replaceInput(
        {id: 'create:crafting/logistics/brass_funnel'},
        'minecraft:dried_kelp',
        'tfc:food/dried_kelp'
    )

    // Andesite Tunnel
    event.replaceInput(
        {id: 'create:crafting/logistics/andesite_tunnel'},
        'minecraft:dried_kelp',
        'tfc:food/dried_kelp'
    )

    // Brass Tunnel
    event.replaceInput(
        {id: 'create:crafting/logistics/brass_tunnel'},
        'minecraft:dried_kelp',
        'tfc:food/dried_kelp'
    )

    // Item Vault
    event.replaceInput(
        {id: 'create:crafting/kinetics/item_vault'},
        'minecraft:barrel',
        '#forge:chests'
    )

    // Item Hatch
    event.replaceInput(
        {id: 'create:crafting/logistics/item_hatch'},
        'minecraft:iron_trapdoor',
        'tfc:metal/trapdoor/wrought_iron'
    )
    
    // Packager
    event.replaceInput(
        {id: 'create:crafting/logistics/packager'},
        'minecraft:iron_ingot',
        '#forge:ingots/wrought_iron'
    )

    // White Postbox
    event.replaceInput(
        {id: 'create:crafting/logistics/white_postbox'},
        'minecraft:barrel',
        '#forge:chests'
    )

    // Redstone Requester
    event.replaceInput(
        {id: 'create:crafting/logistics/redstone_requester'},
        'minecraft:iron_ingot',
        '#forge:ingots/wrought_iron'
    )

    // Pulse Timer
    event.replaceInput(
        {id: 'create:crafting/logistics/pulse_timer'},
        'minecraft:amethyst_shard',
        '#forge:gems/amethyst'
    )

    // Rose Quartz
    event.remove({id: 'create:crafting/materials/rose_quartz'})
    tfc.barrel_sealed(8000)
        .outputItem('create:rose_quartz')
        .inputs('#forge:gems/quartz', TFC.fluidStackIngredient('#forge:redstone_acid', 2000))
       
    // Chocolate
    event.remove({id: 'create:mixing/chocolate'})
    event.custom({
            type: 'create:mixing',
            heatRequirement: 'heated',
            ingredients: [
                {
                    tag: 'tfc:sweetener'
                },
                {
                    item: 'firmalife:food/cocoa_beans'
                },
                {
                    amount: 250,
                    fluidTag: 'tfc:milks'
                }
            ],
            results: [
                {
                    amount: 250,
                    fluid: 'create:chocolate'
                }
            ]
        }
    )

    // Sweet Roll
    event.remove({id: 'create:filling/sweet_roll'})
    event.custom({
            type: 'create:filling',
            ingredients: [
                {
                    tag: 'tfc:foods/breads'
                },
                {
                    amount: 250,
                    fluidTag: 'tfc:milks'
                }
            ],
            results: [
                {
                item: 'create:sweet_roll'
                }
            ]
        }
    )

    // Chocolate Glazed Berries
    event.replaceInput(
        {id: 'create:filling/chocolate_glazed_berries'},
        'minecraft:sweet_berries',
        '#tfc:foods/berries'
    )

    // Chocolate Glazed Berries
    event.replaceInput(
        {id: 'create:filling/honeyed_apple'},
        'minecraft:apple',
        '#tfc:foods/apples'
    )

    // Crafting Blueprint
    event.replaceInput(
        {id: 'create:crafting/appliances/crafting_blueprint'},
        'minecraft:crafting_table',
        '#tfc:workbenches'
    )

    // Copper Diving Helmet
    event.remove({id: 'create:crafting/appliances/copper_diving_helmet'})
    event.shaped(
        'create:copper_diving_helmet',
        [
            'H',
            'G'
        ],
        {
            H: 'tfc:metal/helmet/copper',
            G: '#forge:glass'
        }
    )

    // Copper Diving Boots
    event.remove({id: 'create:crafting/appliances/copper_diving_boots'})
    event.shaped(
        'create:copper_diving_boots',
        [
            ' B ',
            'A A'
        ],
        {
            B: 'tfc:metal/boots/copper',
            A: '#forge:ingots/andesite_alloy'
        }
    )

    // Sand Paper
    event.remove({id: 'create:crafting/materials/sand_paper'})
    event.shapeless(
        Item.of('create:sand_paper'),
        [
            '#forge:paper',
            '#tfc:flux',
            '#forge:slimeballs',
            'tfc:sand/yellow',
            '#tfc:gem_powders'
        ]
    )

    // Red Sand Paper
    event.remove({id: 'create:crafting/materials/red_sand_paper'})
    event.shapeless(
        Item.of('create:red_sand_paper'),
        [
            '#forge:paper',
            '#tfc:flux',
            '#forge:slimeballs',
            'tfc:sand/red',
            '#tfc:gem_powders'
        ]
    )

    // Block of Industrial Iron
    event.remove({id: 'create:industrial_iron_block_from_ingots_iron_stonecutting'})
    event.stonecutting('2x create:industrial_iron_block', '#forge:ingots/wrought_iron')

    // Block of Weathered Iron
    event.remove({id: 'create:weathered_iron_block_from_ingots_iron_stonecutting'})
    event.stonecutting('2x create:weathered_iron_block', '#forge:ingots/wrought_iron')

    // Block of Zinc
    event.remove({id: 'create:crafting/materials/zinc_block_from_compacting'})
    event.custom({
        type: 'immersiveengineering:metal_press',
        energy: 14400,
        input: {
            'base_ingredient': {
                tag: 'forge:ingots/zinc',
            },
            count: 9
        },
        mold: 'tfc_ie_addon:mold_block',
        result: {
            item: 'create:zinc_block'
        }
    })

    // Block of Zinc
    event.remove({id: 'create:crafting/materials/andesite_alloy_block'})
    event.custom({
        type: 'immersiveengineering:metal_press',
        energy: 14400,
        input: {
            'base_ingredient': {
                tag: 'forge:ingots/andesite_alloy',
            },
            count: 9
        },
        mold: 'tfc_ie_addon:mold_block',
        result: {
            item: 'create:andesite_alloy_block'
        }
    })

    // Block of Brass
    event.remove({id: 'create:crafting/materials/brass_block_from_compacting'})
    event.custom({
        type: 'immersiveengineering:metal_press',
        energy: 14400,
        input: {
            'base_ingredient': {
                tag: 'forge:ingots/brass',
            },
            count: 9
        },
        mold: 'tfc_ie_addon:mold_block',
        result: {
            item: 'create:brass_block'
        }
    })

    // Builders Tea
    event.remove({id: 'create:mixing/tea'})
    event.custom({
            type: 'create:mixing',
            heatRequirement: 'heated',
            ingredients: [
                {
                    tag: 'minecraft:leaves'
                },
                {
                    amount: 250,
                    fluidTag: 'tfc:hydrating'
                },
                {
                    amount: 250,
                    fluidTag: 'tfc:milks'
                }
            ],
            results: [
                {
                    amount: 500,
                    fluid: 'create:tea'
                }
            ]
        }
    )

    // Honey
    event.remove({id: 'create:mixing/honey'})
    event.custom({
            type: 'create:mixing',
            heatRequirement: 'heated',
            ingredients: [
                {
                    item: 'firmalife:raw_honey'
                }
            ],
            results: [
                {
                    amount: 250,
                    fluid: 'create:honey'
                }
            ]
        }
    )

    // Fluid Tank
    event.remove({id: 'create:crafting/kinetics/fluid_tank'})
    event.shaped(
        'create:fluid_tank',
        [
            'P',
            'G',
            'P'
        ],
        {
            P: '#forge:plates/copper',
            G: '#forge:glass'
        }
    )
})