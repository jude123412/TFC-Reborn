TFCEvents.data(event => {
    // Thorn Chakram
    event.itemHeat('botania:thorn_chakram', 2.857, 921, 1228)
    event.itemSize('botania:thorn_chakram', 'large', 'medium')

    // Flare Chakram
    event.itemHeat('botania:flare_chakram', 2.857, 921, 1228)
    event.itemSize('botania:flare_chakram', 'large', 'medium')
})

ServerEvents.recipes(event => {
    const tfc = event.recipes.tfc
    const botania = event.recipes.botania

    event.remove({id: 'aiotbotania:livingrock_aiot'})
    event.remove({id: 'aiotbotania:livingrock_axe'})
    event.remove({id: 'aiotbotania:livingrock_hoe'})
    event.remove({id: 'aiotbotania:livingrock_pickaxe'})
    event.remove({id: 'aiotbotania:livingrock_shears'})
    event.remove({id: 'aiotbotania:livingrock_shovel'})
    event.remove({id: 'aiotbotania:livingrock_sword'})
    event.remove({id: 'aiotbotania:livingwood_aiot'})
    event.remove({id: 'aiotbotania:livingwood_axe'})
    event.remove({id: 'aiotbotania:livingwood_hoe'})
    event.remove({id: 'aiotbotania:livingwood_pickaxe'})
    event.remove({id: 'aiotbotania:livingwood_shears'})
    event.remove({id: 'aiotbotania:livingwood_shovel'})
    event.remove({id: 'aiotbotania:livingwood_sword'})
    event.remove({id: 'botania:mana_infusion/brick_deconstruct'})
    event.remove({id: 'botania:conversions/manasteel_from_nuggets'})
    event.remove({id: 'botania:conversions/manasteel_block_deconstruct'})
    event.remove({id: 'botania:conversions/terrasteel_block_deconstruct'})
    event.remove({id: 'botania:conversions/terrasteel_from_nugget'})
    event.remove({id: 'botania:conversions/elementium_from_nuggets'})
    event.remove({id: 'botania:conversions/elementium_block_deconstruct'})
    event.remove({id: 'botania:conversions/manasteel_to_nuggets'})
    event.remove({id: 'botania:conversions/terrasteel_to_nugget'})
    event.remove({id: 'botania:conversions/elementium_to_nuggets'})

    // Floating White Flower
    event.replaceInput(
        {id: 'botania:white_floating_flower'},
        'minecraft:dirt',
        '#minecraft:dirt'
    )

    // Floating Light Gray Flower
    event.replaceInput(
        {id: 'botania:light_gray_floating_flower'},
        'minecraft:dirt',
        '#minecraft:dirt'
    )

    // Floating Gray Flower
    event.replaceInput(
        {id: 'botania:gray_floating_flower'},
        'minecraft:dirt',
        '#minecraft:dirt'
    )

    // Floating Black Flower
    event.replaceInput(
        {id: 'botania:black_floating_flower'},
        'minecraft:dirt',
        '#minecraft:dirt'
    )

    // Floating Brown Flower
    event.replaceInput(
        {id: 'botania:brown_floating_flower'},
        'minecraft:dirt',
        '#minecraft:dirt'
    )

    // Floating Red Flower
    event.replaceInput(
        {id: 'botania:red_floating_flower'},
        'minecraft:dirt',
        '#minecraft:dirt'
    )

    // Floating Orange Flower
    event.replaceInput(
        {id: 'botania:orange_floating_flower'},
        'minecraft:dirt',
        '#minecraft:dirt'
    )

    // Floating Yellow Flower
    event.replaceInput(
        {id: 'botania:yellow_floating_flower'},
        'minecraft:dirt',
        '#minecraft:dirt'
    )
    
    // Floating Lime Flower
    event.replaceInput(
        {id: 'botania:lime_floating_flower'},
        'minecraft:dirt',
        '#minecraft:dirt'
    )

    // Floating Green Flower
    event.replaceInput(
        {id: 'botania:green_floating_flower'},
        'minecraft:dirt',
        '#minecraft:dirt'
    )

    // Floating Cyan Flower
    event.replaceInput(
        {id: 'botania:cyan_floating_flower'},
        'minecraft:dirt',
        '#minecraft:dirt'
    )

    // Floating Light Blue Flower
    event.replaceInput(
        {id: 'botania:light_blue_floating_flower'},
        'minecraft:dirt',
        '#minecraft:dirt'
    )

    // Floating Blue Flower
    event.replaceInput(
        {id: 'botania:blue_floating_flower'},
        'minecraft:dirt',
        '#minecraft:dirt'
    )

    // Floating Purple Flower
    event.replaceInput(
        {id: 'botania:purple_floating_flower'},
        'minecraft:dirt',
        '#minecraft:dirt'
    )

    // Floating Magenta Flower
    event.replaceInput(
        {id: 'botania:magenta_floating_flower'},
        'minecraft:dirt',
        '#minecraft:dirt'
    )

    // Floating Pink Flower
    event.replaceInput(
        {id: 'botania:pink_floating_flower'},
        'minecraft:dirt',
        '#minecraft:dirt'
    )

    // Petal Apothecary
    event.replaceInput(
        {id: 'botania:apothecary_default'},
        'minecraft:cobblestone',
        '#forge:cobblestone'
    )

    // Livingrock
    event.remove({id: 'botania:pure_daisy/livingrock'})
    event.custom({
        type: 'botania:pure_daisy',
        input: {
            type: 'block',
            block: 'tfc:rock/raw/marble'
        },
        output: {
            name: 'botania:livingrock'
        }
    })

    // Mossy Livingrock Bricks
    event.remove({id: 'botania:mossy_livingrock_bricks'})
    event.remove({id: 'botania:mossy_livingrock_bricks_vine'})
    event.shapeless(
        Item.of('botania:mossy_livingrock_bricks'),
        [
            'botania:livingrock_bricks',
            '#tfc:moss'
        ]
    )

    // Mossy Livingwood Planks
    event.remove({id: 'botania:mossy_livingwood_planks'})
    event.remove({id: 'botania:mossy_livingwood_planks_vine'})
    event.shapeless(
        Item.of('botania:mossy_livingwood_planks'),
        [
            'botania:livingwood_planks',
            '#tfc:moss'
        ]
    )

    // Framed Livingwood Planks
    event.remove({id: 'botania:framed_livingwood'})
    event.shapeless(
        Item.of('botania:framed_livingwood'),
        [
            'botania:livingwood_planks',
            '#tfc:chisels'
        ]
    ).damageIngredient('#tfc:chisels')

    // Pattern Framed Livingwood Planks
    event.remove({id: 'botania:pattern_framed_livingwood'})
    event.shapeless(
        Item.of('botania:pattern_framed_livingwood'),
        [
            'botania:framed_livingwood',
            '#tfc:chisels'
        ]
    ).damageIngredient('#tfc:chisels')

    // Mossy Dreamwood Planks
    event.remove({id: 'botania:mossy_dreamwood_planks'})
    event.remove({id: 'botania:mossy_dreamwood_planks_vine'})
    event.shapeless(
        Item.of('botania:mossy_dreamwood_planks'),
        [
            'botania:dreamwood_planks',
            '#tfc:moss'
        ]
    )

    // Framed Dreamwood Planks
    event.remove({id: 'botania:framed_dreamwood'})
    event.shapeless(
        Item.of('botania:framed_dreamwood'),
        [
            'botania:dreamwood_planks',
            '#tfc:chisels'
        ]
    ).damageIngredient('#tfc:chisels')

    // Pattern Framed Dreamwood Planks
    event.remove({id: 'botania:pattern_framed_dreamwood'})
    event.shapeless(
        Item.of('botania:pattern_framed_dreamwood'),
        [
            'botania:framed_dreamwood',
            '#tfc:chisels'
        ]
    ).damageIngredient('#tfc:chisels')

    // Mana Spreader
    event.remove({id: 'botania:mana_spreader'})
    event.shaped(
        Item.of('botania:mana_spreader'), 
        [
            'LLL',
            'LPG',
            'LLL'
        ],
        {
            L: '#botania:livingwood_logs',
            P: '#forge:plates/gold',
            G: 'tfc:lens'
        }
    )

    // Elven Mana Spreader
    event.remove({id: 'botania:elven_spreader'})
    event.shaped(
        Item.of('botania:elven_spreader'), 
        [
            'LLL',
            'LPG',
            'LLL'
        ],
        {
            L: '#botania:dreamwood_logs',
            P: '#forge:plates/elementium',
            G: 'tfc:lens'
        }
    )
    event.shaped(
        Item.of('botania:elven_spreader'), 
        [
            'LLL',
            'LPG',
            'LLL'
        ],
        {
            L: '#botania:dreamwood_logs',
            P: '#forge:plates/elementium',
            G: 'botania:mana_spreader'
        }
    )

    // Mana Pool
    event.remove({id: 'botania:mana_pool'})
    event.shaped(
        Item.of('botania:mana_pool'), 
        [
            'R R',
            'RDR',
            'RPR'
        ],
        {
            R: 'botania:livingrock',
            D: '#forge:double_ingots/manasteel',
            P: 'botania:diluted_pool'
        }
    )

    // Alchemy Catalyst
    event.replaceInput(
        {id: 'botania:alchemy_catalyst'},
        'minecraft:gold_ingot',
        '#forge:ingots/gold'
    )

    // Block of Manasteel
    event.remove({id: 'botania:manasteel_block'})
    event.custom({
        type: 'immersiveengineering:metal_press',
        energy: 14400,
        input: {
            'base_ingredient': {
                tag: 'forge:ingots/manasteel',
            },
            count: 9
        },
        mold: 'tfc_ie_addon:mold_block',
        result: {
            item: 'botania:manasteel_block'
        }
    })

    // Block of Terrasteel
    event.remove({id: 'botania:terrasteel_block'})
    event.custom({
        type: 'immersiveengineering:metal_press',
        energy: 14400,
        input: {
            'base_ingredient': {
                tag: 'forge:ingots/terrasteel',
            },
            count: 9
        },
        mold: 'tfc_ie_addon:mold_block',
        result: {
            item: 'botania:terrasteel_block'
        }
    })

    // Block of Elementium
    event.remove({id: 'botania:elementium_block'})
    event.custom({
        type: 'immersiveengineering:metal_press',
        energy: 14400,
        input: {
            'base_ingredient': {
                tag: 'forge:ingots/elementium',
            },
            count: 9
        },
        mold: 'tfc_ie_addon:mold_block',
        result: {
            item: 'botania:elementium_block'
        }
    })

    // Runic Altar
    event.remove({id: 'botania:runic_altar_alt'})
    event.remove({id: 'botania:runic_altar'})
    event.shaped(
        Item.of('botania:runic_altar'), 
        [
            'P P',
            'RGR',
            ' R '
        ],
        {
            P: '#forge:sheets/manasteel',
            G: '#forge:gems/mana_diamond',
            R: 'botania:livingrock'
        }
    )
    event.shaped(
        Item.of('botania:runic_altar'), 
        [
            'P P',
            'RGR',
            ' R '
        ],
        {
            P: '#forge:sheets/manasteel',
            G: 'botania:mana_pearl',
            R: 'botania:livingrock'
        }
    )

    // Botanical Brewery
    event.replaceInput(
        {id: 'botania:brewery'},
        'botania:manasteel_block',
        '#forge:double_ingots/manasteel'
    )

    // Terrestrial Agglomeration Plate
    event.replaceInput(
        {id: 'botania:terra_plate'},
        'minecraft:lapis_block',
        '#forge:gems/lapis'
    )
    event.replaceInput(
        {id: 'botania:terra_plate'},
        'botania:manasteel_block',
        '#forge:double_sheets/manasteel'
    )

    // Mana Pylon
    event.replaceInput(
        {id: 'botania:mana_pylon'},
        'minecraft:gold_ingot',
        '#forge:plates/gold'
    )

    // Tiny Planet Block
    event.replaceInput(
        {id: 'botania:tiny_planet_block'},
        'minecraft:stone',
        '#forge:stone'
    )

    // Drum of the Wild
    event.replaceInput(
        {id: 'botania:drum_wild'},
        '#botania:livingwood_logs',
        'kubejs:wood/lumber/livingwood'
    )

    // Drum of the Gathering
    event.replaceInput(
        {id: 'botania:drum_gathering'},
        '#botania:dreamwood_logs',
        'kubejs:wood/lumber/dreamwood'
    )

    // Drum of the Canopy
    event.replaceInput(
        {id: 'botania:drum_canopy'},
        '#botania:livingwood_logs',
        'kubejs:wood/lumber/livingwood'
    )

    // Mana Fluxfield
    event.replaceInput(
        {id: 'botania:mana_fluxfield'},
        'minecraft:redstone_block',
        '#forge:dusts/redstone'
    )

    // Mana Pump
    event.replaceInput(
        {id: 'botania:pump'},
        'minecraft:bucket',
        'tfc:wooden_bucket'
    )

    // Crafty Crate
    event.replaceInput(
        {id: 'botania:pump'},
        'minecraft:crafting_table',
        '#tfc:workbenches'
    )

    // Tiny Potato
    event.replaceInput(
        {id: 'botania:pump'},
        'minecraft:potato',
        'tfc:food/potato'
    )

    // Red Stringed Interceptor
    event.replaceInput(
        {id: 'botania:red_string_interceptor'},
        'minecraft:stone_button',
        '#minecraft:buttons'
    )

    // Mana Fluxfield
    event.replaceInput(
        {id: 'botania:corporea_interceptor'},
        'minecraft:redstone_block',
        '#forge:dusts/redstone'
    )

    // Hour Glass
    event.replaceInput(
        {id: 'botania:hourglass'},
        'minecraft:gold_ingot',
        '#forge:plates/gold'
    )

    // Cellular Block
    event.remove({id: 'botania:cell_block'})
    event.shapeless(
        Item.of('botania:cell_block', 8),
        [
            '2x #tfc:compost_greens_high',
            '2x #tfc:compost_browns_high'
        ]
    )

    // Teru Teru Bozu
    event.replaceInput(
        {id: 'botania:teru_teru_bozu'},
        'minecraft:sunflower',
        '#tfc:makes_yellow_dye'
    )

    // Cocoon of Caprice
    event.replaceInput(
        {id: 'botania:cocoon'},
        'minecraft:string',
        '#bsa:bindings/strong'
    )

    // Runic Altar
    event.remove({id: 'botania:shimmerwood_planks_stairs'})
    event.shaped(
        Item.of('botania:shimmerwood_planks_stairs', 8), 
        [
            'P  ',
            'PP ',
            'PPP'
        ],
        {
            P: 'botania:shimmerwood_planks'
        }
    )

    // White Portuguese Pavement
    event.remove({id: 'botania:white_pavement'})
    event.shapeless(
        Item.of('botania:white_pavement', 3),
        [
            'botania:livingrock',
            '#forge:cobblestone',
            '#forge:gravel',
            '#forge:clay'
        ]
    )

    // Black Portuguese Pavement
    event.remove({id: 'botania:black_pavement'})
    event.shapeless(
        Item.of('botania:black_pavement', 3),
        [
            '3x botania:white_pavement',
            '#forge:dyes/black'
        ]
    )

    // Blue Portuguese Pavement
    event.remove({id: 'botania:blue_pavement'})
    event.shapeless(
        Item.of('botania:blue_pavement', 3),
        [
            '3x botania:white_pavement',
            '#forge:dyes/blue'
        ]
    )

    // Yellow Portuguese Pavement
    event.remove({id: 'botania:yellow_pavement'})
    event.shapeless(
        Item.of('botania:yellow_pavement', 3),
        [
            '3x botania:white_pavement',
            '#forge:dyes/yellow'
        ]
    )

    // Red Portuguese Pavement
    event.remove({id: 'botania:red_pavement'})
    event.shapeless(
        Item.of('botania:red_pavement', 3),
        [
            '3x botania:white_pavement',
            '#forge:dyes/red'
        ]
    )

    // Green Portuguese Pavement
    event.remove({id: 'botania:green_pavement'})
    event.shapeless(
        Item.of('botania:green_pavement', 3),
        [
            '3x botania:white_pavement',
            '#forge:dyes/green'
        ]
    )

    // Managlass Pane
    event.remove({id: 'botania:mana_glass_pane'})
    event.custom({
        type: 'tfc:glassworking',
        operations: [
            'table_pour'
        ],
        batch: {
            item: 'kubejs:mana_glass_batch'
        },
        result: {
            item: 'botania:mana_glass_pane'
        }
    })

    // Alfglass Pane
    event.remove({id: 'botania:elf_glass_pane'})
    event.custom({
        type: 'tfc:glassworking',
        operations: [
            'table_pour'
        ],
        batch: {
            item: 'kubejs:alf_glass_batch'
        },
        result: {
            item: 'botania:elf_glass_pane'
        }
    })

    // Bifrost Pane
    event.remove({id: 'botania:bifrost_pane'})
        event.shapeless(
        Item.of('botania:bifrost_pane', 2),
        [
            'botania:bifrost_perm',
            'tfc:gem_saw'
        ]
    ).damageIngredient('tfc:gem_saw')

    // Manasteel
    event.replaceInput(
        {id: 'botania:mana_infusion/manasteel'},
        'minecraft:iron_ingot',
        '#forge:ingots/wrought_iron'
    )

    // Manasteel
    event.replaceInput(
        {id: 'botania:mana_infusion/mana_diamond'},
        'minecraft:diamond',
        '#forge:gems/diamond'
    )

    // Livingwood Twig
    event.remove({id: 'botania:livingwood_twig'})
    event.shapeless(
        Item.of('botania:livingwood_twig'),
        [
            '2x botania:livingwood_planks',
            '#tfc:saws'
        ]
    ).damageIngredient('#tfc:saws')

    // Redstone Root
    event.remove({id: 'botania:redstone_root'})
        event.shapeless(
        Item.of('botania:redstone_root'),
        [
            'tfc:straw',
            '#forge:dusts/redstone'
        ]
    )

    // Red String
    event.replaceInput(
        {id: 'botania:red_string'},
        'minecraft:string',
        '#forge:string'
    )    
    event.replaceInput(
        {id: 'botania:red_string_alt'},
        'minecraft:string',
        '#forge:string'
    )

    // Dreamwood Twig
    event.remove({id: 'botania:dreamwood_twig'})
    event.shapeless(
        Item.of('botania:dreamwood_twig'),
        [
            '2x botania:dreamwood_planks',
            '#tfc:saws'
        ]
    ).damageIngredient('#tfc:saws')

    // Mana Infused String
    event.replaceInput(
        {id: 'botania:mana_infusion/mana_string'},
        'minecraft:string',
        '#forge:string'
    )

    // Manaweave Cloth
   event.remove({id: 'botania:manaweave_cloth'})
    tfc.loom(
        'botania:manaweave_cloth',
        '12x botania:mana_string',
        12,
        'kubejs:block/manaweave_cloth'
    )

    // Smokey Quartz
    event.remove({id: 'botania:quartz_dark'})
    event.shaped(
        Item.of('botania:quartz_dark', 8), 
        [
            'QQQ',
            'QDQ',
            'QQQ'
        ],
        {
            Q: '#forge:gems/quartz',
            D: '#forge:dyes/black'
        }
    )

    // Mana Quartz
    event.remove({id: 'botania:mana_infusion/mana_quartz'})
    event.shaped(
        Item.of('botania:quartz_mana', 8), 
        [
            'QQQ',
            'QDQ',
            'QQQ'
        ],
        {
            Q: '#forge:gems/quartz',
            D: '#forge:dyes/light_blue'
        }
    )

    // Blaze Quartz
    event.remove({id: 'botania:quartz_blaze'})
    event.shaped(
        Item.of('botania:quartz_blaze', 8), 
        [
            'QQQ',
            'QDQ',
            'QQQ'
        ],
        {
            Q: '#forge:gems/quartz',
            D: '#forge:dyes/orange'
        }
    )

    // Lavender Quartz
    event.remove({id: 'botania:quartz_lavender'})
    event.shaped(
        Item.of('botania:quartz_lavender', 8), 
        [
            'QQQ',
            'QDQ',
            'QQQ'
        ],
        {
            Q: '#forge:gems/quartz',
            D: '#forge:dyes/purple'
        }
    )

    // Redquartz
    event.remove({id: 'botania:quartz_red'})
    event.shaped(
        Item.of('botania:quartz_red', 8), 
        [
            'QQQ',
            'QDQ',
            'QQQ'
        ],
        {
            Q: '#forge:gems/quartz',
            D: '#forge:dyes/red'
        }
    )

    // Elven Quartz
    event.remove({id: 'botania:elven_trade/elf_quartz'})
    event.shaped(
        Item.of('botania:quartz_elven', 8), 
        [
            'QQQ',
            'QDQ',
            'QQQ'
        ],
        {
            Q: '#forge:gems/quartz',
            D: '#forge:dyes/lime'
        }
    )

    // Sunny Quartz
    event.remove({id: 'botania:quartz_sunny'})
    event.shaped(
        Item.of('botania:quartz_sunny', 8), 
        [
            'QQQ',
            'QDQ',
            'QQQ'
        ],
        {
            Q: '#forge:gems/quartz',
            D: '#forge:dyes/yellow'
        }
    )

    // Mana Lens
    event.remove({id: 'botania:lens_normal'})
    event.shaped(
        Item.of('botania:lens_normal'), 
        [
            ' P ',
            'PLP',
            ' P '
        ],
        {
            P: '#forge:plates/manasteel',
            L: 'tfc:lens'
        }
    )

    // Bore Lens
    event.remove({id: 'botania:lens_mine'})
    event.shaped(
        Item.of('botania:lens_mine'), 
        [
            ' P ',
            'LML',
            ' R '
        ],
        {
            P: 'minecraft:piston',
            L: '#forge:gems/lapis',
            M: 'botania:lens_normal',
            R: 'minecraft:redstone'
        }
    )

    // Magnetizing Lens
    event.remove({id: 'botania:lens_magnet'})
    event.shapeless(
        Item.of('botania:lens_magnet'),
        [
            'botania:lens_normal',
            'rosia:magnet'
        ]
    )

    // Rune of Water
    event.remove({id: 'botania:runic_altar/water'})
    event.custom({
        type: 'botania:runic_altar',
        ingredients: [
            {
                tag: 'forge:dusts/mana'
            },
            {
                tag: 'forge:ingots/manasteel'
            },
            {
                item: 'minecraft:bone_meal'
            },
            {
                item: 'tfc:food/sugarcane'
            },
            {
                tag: 'tfc:holds_small_fishing_bait'
            }
        ],
        mana: 5200,
        output: {
            count: 2,
            item: 'botania:rune_water'
        }
    })

    // Rune of Earth
    event.remove({id: 'botania:runic_altar/earth'})
    event.custom({
        type: 'botania:runic_altar',
        ingredients: [
            {
                tag: 'forge:dusts/mana'
            },
            {
                tag: 'forge:ingots/manasteel'
            },
            {
                tag: 'forge:stone'
            },
            {
                tag: 'forge:gems/coal'
            },
            {
                item: 'tfc:plant/artists_conk'
            }
        ],
        mana: 5200,
        output: {
            count: 2,
            item: 'botania:rune_earth'
        }
    })

    // Rune of Air
    event.replaceInput(
        {id: 'botania:runic_altar/air'},
        'minecraft:string',
        '#bsa:bindings/strong'
    )

    // Rune of Spring
    event.replaceInput(
        {id: 'botania:runic_altar/spring'},
        'minecraft:wheat',
        'tfc:food/wheat'
    )

    // Rune of Summer
    event.remove({id: 'botania:runic_altar/summer'})
    event.custom({
        type: 'botania:runic_altar',
        ingredients: [
            {
                item: 'botania:rune_earth'
            },
            {
                item: 'botania:rune_air'
            },
            {
                tag: 'forge:sand'
            },
            {
                tag: 'forge:sand'
            },
            {
                tag: 'forge:slimeballs'
            },
            {
                item: 'tfc:food/melon_slice'
            }
        ],
        mana: 8000,
        output: {
            item: 'botania:rune_summer'
        }
    })

    // Rune of Winter
    event.replaceInput(
        {id: 'botania:runic_altar/winter'},
        'minecraft:cake',
        'tfc:cake'
    )

    // Pasture Seeds
    event.replaceInput(
        {id: 'botania:mana_infusion/grass_seeds'},
        'minecraft:grass',
        '#tfc:plants/grass'
    )

    // Boreal Seeds
    event.replaceInput(
        {id: 'botania:mana_infusion/podzol_seeds'},
        'minecraft:dead_bush',
        'tfc:plant/dead_bush'
    )

    // Infestation Spores
    event.replaceInput(
        {id: 'botania:mana_infusion/mycel_seeds'},
        '#forge:mushrooms',
        'tfc:plant/artists_conk'
    )

    // Dry Pasture Seeds
    event.replaceInput(
        {id: 'botania:dry_seeds'},
        'minecraft:dead_bush',
        'tfc:plant/dead_bush'
    )

    // Golden Pasture Seeds
    event.replaceInput(
        {id: 'botania:golden_seeds'},
        'minecraft:wheat',
        '#forge:nuggets/gold'
    )

    // Rod of the Lands
    event.replaceInput(
        {id: 'botania:dirt_rod'},
        'minecraft:dirt',
        '#minecraft:dirt'
    )

    // Rod of the Depths
    event.replaceInput(
        {id: 'botania:cobble_rod'},
        'minecraft:cobblestone',
        '#forge:cobblestone'
    )

    // Rod of the Seas
    event.replaceInput(
        {id: 'botania:water_rod'},
        'minecraft:potion',
        'minecraft:prismarine_crystals'
    )

    // Rod of the Shifting Crust
    event.replaceInput(
        {id: 'botania:exchange_rod'},
        'minecraft:stone',
        '#forge:stone'
    )

    // Rod of the Shaded Mesa
    event.replaceInput(
        {id: 'botania:gravity_rod'},
        'minecraft:wheat',
        'tfc:food/wheat'
    )

    // Manaweave Cowl
    event.remove({id: 'botania:manaweave_helmet'})
    event.shaped(
        Item.of('botania:manaweave_helmet'), 
        [
            'CCC',
            'CNC',
            'S S'
        ],
        {
            C: 'botania:manaweave_cloth',
            N: '#tfc:sewing_needles',
            S: 'botania:mana_string'
        }
    ).damageIngredient('#tfc:sewing_needles')

    // Manaweave Robe Top
    event.remove({id: 'botania:manaweave_chestplate'})
    event.shaped(
        Item.of('botania:manaweave_chestplate'), 
        [
            'CNC',
            'CCC',
            'SCS'
        ],
        {
            C: 'botania:manaweave_cloth',
            N: '#tfc:sewing_needles',
            S: 'botania:mana_string'
        }
    ).damageIngredient('#tfc:sewing_needles')

    // Manaweave Robe Bottom
    event.remove({id: 'botania:manaweave_leggings'})
    event.shaped(
        Item.of('botania:manaweave_leggings'), 
        [
            'CCC',
            'CNC',
            'CSC'
        ],
        {
            C: 'botania:manaweave_cloth',
            N: '#tfc:sewing_needles',
            S: 'botania:mana_string'
        }
    ).damageIngredient('#tfc:sewing_needles')

    // Manaweave Boots
    event.remove({id: 'botania:manaweave_boots'})
    event.shaped(
        Item.of('botania:manaweave_boots'), 
        [
            'S S',
            'CNC',
            'C C'
        ],
        {
            C: 'botania:manaweave_cloth',
            N: '#tfc:sewing_needles',
            S: 'botania:mana_string'
        }
    ).damageIngredient('#tfc:sewing_needles')

    // Soulscribe
    event.replaceInput(
        {id: 'botania:ender_dagger'},
        'botania:manasteel_ingot',
        'kubejs:metal/knife_blade/manasteel'
    )

    // Vitreous Pickaxe
    event.remove({id: 'botania:glass_pickaxe'})
    event.shaped(
        Item.of('botania:glass_pickaxe'), 
        [
            'GGG',
            ' P ',
            ' S '
        ],
        {
            G: '#forge:glass/colorless',
            P: 'botania:manasteel_pick',
            S: 'botania:livingwood_twig'
        }
    )

    // Crystal Bow
    event.remove({id: 'botania:crystal_bow'})
    event.shaped(
        Item.of('botania:crystal_bow'), 
        [
            ' D ',
            'DBD',
            ' D '
        ],
        {
            D: '#forge:gems/dragonstone',
            B: 'botania:crystal_bow'
        }
    )

    // Thorn Chakram
    event.remove({id: 'botania:thorn_chakram'})
    tfc.anvil(
        TFC.itemStackProvider.of('botania:thorn_chakram'),
        '#forge:ingots/terrasteel',
        [
            'draw_third_last',
            'draw_second_last',
            'bend_last'
        ]
    ).tier(4)
    tfc.heating('botania:thorn_chakram', 1535).resultFluid(Fluid.of('kubejs:metal/terrasteel', 100))

    // Flare Chakram
    tfc.heating('botania:flare_chakram', 1535).resultFluid(Fluid.of('kubejs:metal/terrasteel', 100))

    // Mana Mirror
    event.remove({id: 'botania:mana_mirror'})
    event.shaped(
        Item.of('botania:mana_mirror'), 
        [
            'LTL',
            'PTP',
            ' S '
        ],
        {
            L: 'botania:livingrock',
            T: '#forge:double_ingots/terrasteel',
            P: 'botania:mana_pearl',
            T: 'botania:mana_tablet',
            S: 'botania:livingwood_twig'
        }
    )

    // Mana Blaster :D
    event.replaceInput(
        {id: 'botania:mana_gun'},
        'minecraft:tnt',
        '#forge:nuggets/terrasteel'
    )

    // Vine Ball
    event.replaceInput(
        {id: 'botania:vine_ball'},
        'minecraft:vine',
        '#tfc:plants/vine'
    )

    // Extrapolated Bucket
    event.remove({id: 'botania:open_bucket'})
    tfc.anvil(
        TFC.itemStackProvider.of('botania:open_bucket'),
        '#forge:sheets/elementium',
        [
            'bend_third_last',
            'bend_second_last',
            'bend_last'
        ]
    ).tier(4)

    // Assembly Halo
    event.replaceInput(
        {id: 'botania:crafting_halo'},
        'minecraft:crafting_table',
        '#tfc:workbenches'
    )

    // Stone of Temperance
    event.replaceInput(
        {id: 'botania:temperance_stone'},
        'minecraft:stone',
        '#forge:stone'
    )

    // Cacophonium
    event.remove({id: 'botania:cacophonium'})
    event.shaped(
        Item.of('botania:cacophonium'), 
        [
            ' SL',
            'SNS',
            ' SI'
        ],
        {
            S: '#forge:sheets/gold',
            L: 'botania:livingwood_twig',
            N: 'minecraft:note_block',
            I: '#forge:ingots/gold'
        }
    )

    // Slime in a Bottle
    event.remove({id: 'botania:slime_bottle'})
    event.shaped(
        Item.of('botania:slime_bottle'), 
        [
            'SGS',
            'IBI',
            ' S '
        ],
        {
            S: '#forge:sheets/elementium',
            G: 'botania:elf_glass',
            I: '#forge:ingots/elementium',
            B: 'minecraft:slime_ball'
        }
    )

    // Worldshaper's Sextant
    event.remove({id: 'botania:sextant'})
    event.shaped(
        Item.of('botania:sextant'), 
        [
            'IL ',
            'LL ',
            'ISI'
        ],
        {
            I: '#forge:ingots/manasteel',
            L: 'botania:livingwood_twig',
            S: '#forge:sheets/manasteel'
        }
    )

    // Worldshaper's Astrolabe
    event.remove({id: 'botania:astrolabe'})
    event.shaped(
        Item.of('botania:astrolabe'), 
        [
            ' SG',
            'SIS',
            'GSL'
        ],
        {
            S: '#forge:sheets/elementium',
            G: 'botania:life_essence',
            I: '#forge:ingots/elementium',
            L: '#botania:dreamwood_logs'
        }
    )

    // Trinket Case
    event.remove({id: 'botania:bauble_box'})
    event.shaped(
        Item.of('botania:bauble_box'), 
        [
            ' M ',
            'SCS',
            ' G '
        ],
        {
            M: '#forge:ingots/manasteel',
            S: '#forge:plates/manasteel',
            C: '#forge:chests/wooden',
            G: '#forge:ingots/gold'
        }
    )

    // Ring of Chordata
    event.remove({id: 'botania:water_ring'})
    event.shaped(
        Item.of('botania:water_ring'), 
        [
            'RMF',
            'MHM',
            'FM '
        ],
        {
            R: 'botania:rune_water',
            M: '#forge:ingots/manasteel',
            F: '#minecraft:fishes',
            H: 'minecraft:heart_of_the_sea'
        }
    )

    // Dexterous Motion
    event.replaceInput(
        {id: 'botania:dodge_ring'},
        'minecraft:emerald',
        '#forge:gems/emerald'
    )

    // Ring of the Mantle
    event.replaceInput(
        {id: 'botania:mining_ring'},
        'minecraft:golden_pickaxe',
        'tfc:metal/pickaxe/copper'
    )

    // Cloak of Balance
    event.replaceInput(
        {id: 'botania:balance_cloak'},
        'minecraft:emerald',
        '#forge:gems/emerald'
    )

    // Third Eye
    event.replaceInput(
        {id: 'botania:third_eye'},
        'minecraft:golden_carrot',
        '#forge:plates/copper'
    )

    // Tiny Planet Bauble
    event.replaceInput(
        {id: 'botania:tiny_planet'},
        'minecraft:stone',
        '#forge:stone'
    )

    // Charm of the Diva
    event.replaceInput(
        {id: 'botania:diva_charm'},
        'minecraft:gold_ingot',
        '#forge:ingots/gold'
    )

    // The Spectator
    event.replaceInput(
        {id: 'botania:itemfinder'},
        'minecraft:iron_ingot',
        '#forge:ingots/wrought_iron'
    )
    
    // Frugel Tiara
    event.replaceInput(
        {id: 'botania:flighttiara_0'},
        'botania:elementium_ingot',
        '#forge:sheets/elementium'
    )

    // Biscuit of Totality
    event.replaceInput(
        {id: 'botania:mana_infusion/mana_cookie'},
        'minecraft:cookie',
        'firmalife:food/chocolate_chip_cookie'
    )

    // World Seed
    event.replaceInput(
        {id: 'botania:world_seed'},
        'minecraft:grass_block',
        '#minecraft:dirt'
    )

    // Resolute Ivy
    event.replaceInput(
        {id: 'botania:keep_ivy'},
        'minecraft:vine',
        '#tfc:plants/vine'
    )

    // Crafting Placeholder
    event.replaceInput(
        {id: 'botania:placeholder'},
        'minecraft:crafting_table',
        '#tfc:workbenches'
    )

    // Managlass Vial
    event.remove({id: 'botania:vial'})
    event.custom({
        type: 'tfc:glassworking',
        operations: [
            'blow',
            'stretch',
            'pinch',
            'saw'
        ],
        batch: {
            item: 'kubejs:mana_glass_batch'
        },
        result: {
            item: 'botania:vial'
        }
    })

    // Managlass Vial
    event.remove({id: 'botania:flask'})
    event.custom({
        type: 'tfc:glassworking',
        operations: [
            'blow',
            'blow',
            'pinch',
            'roll',
            'saw'
        ],
        batch: {
            item: 'kubejs:alf_glass_batch'
        },
        result: {
            item: 'botania:flask'
        }
    })

    // Managlass 
    event.remove({id: 'botania:mana_infusion/mana_glass'})
    event.custom({
        type: 'tfc:glassworking',
        operations: [
            'basin_pour'
        ],
        batch: {
            item: 'kubejs:mana_glass_batch'
        },
        result: {
            item: 'botania:mana_glass'
        }
    })

    // Alfglass Pane
    event.remove({id: 'botania:elven_trade/elf_glass'})
    event.custom({
        type: 'tfc:glassworking',
        operations: [
            'basin_pour'
        ],
        batch: {
            item: 'kubejs:alf_glass_batch'
        },
        result: {
            item: 'botania:elf_glass'
        }
    })

})