TFCEvents.data(event => { })

ServerEvents.recipes(event => {
    const tfc = event.recipes.tfc

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

    // Tiny Planet
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
        event.shapeless(
        Item.of('botania:mana_glass_pane', 2),
        [
            'botania:mana_glass',
            '#tfc:saws'
        ]
    ).damageIngredient('#tfc:saws')

    // Alfglass Pane
    event.remove({id: 'botania:elf_glass_pane'})
        event.shapeless(
        Item.of('botania:elf_glass_pane', 2),
        [
            'botania:elf_glass',
            '#tfc:saws'
        ]
    ).damageIngredient('#tfc:saws')

    // Bifrost Pane
    event.remove({id: 'botania:bifrost_pane'})
        event.shapeless(
        Item.of('botania:bifrost_pane', 2),
        [
            'botania:bifrost_perm',
            '#tfc:saws'
        ]
    ).damageIngredient('#tfc:saws')

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
})