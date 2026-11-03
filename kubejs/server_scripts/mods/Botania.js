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

    // Terra Hoe
    event.remove({id: 'aiotbotania:terra_hoe'})
    event.shaped(
        Item.of('aiotbotania:terra_hoe'),
        [
            'H',
            'S'
        ],
        {
            H: 'kubejs:metal/hoe_head/terrasteel',
            S: 'botania:livingwood_twig',
        }
    )

    // Terra Spade
    event.remove({id: 'aiotbotania:terra_shovel'})
    event.shaped(
        Item.of('aiotbotania:terra_shovel'),
        [
            'H',
            'S'
        ],
        {
            H: 'kubejs:metal/shovel_head/terrasteel',
            S: 'botania:livingwood_twig',
        }
    )

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

    // Livingrock Stairs
    event.remove({id: 'botania:livingrock_stairs'})
    tfc.chisel('botania:livingrock_stairs', 'botania:livingrock', 'stair')
    event.shaped(
        Item.of('botania:livingrock_stairs', 8), 
        [
            'B  ',
            'BB ',
            'BBB'
        ],
        {
            B: 'botania:livingrock'
        }
    )

    // Livingrock Slab
    tfc.chisel('botania:livingrock_slab', 'botania:livingrock', 'slab')
        .extraDrop('botania:livingrock_slab')

    // Polished Livingrock
    event.remove({id: 'botania:polished_livingrock'})
    tfc.chisel('botania:polished_livingrock', 'botania:livingrock', 'smooth')
    event.shapeless(
        Item.of('botania:polished_livingrock'),
        [
            'botania:livingrock',
            '#tfc:chisels'
        ]
    ).damageIngredient('#tfc:chisels')

    // Polished Livingrock Stairs
    event.remove({id: 'botania:polished_livingrock_stairs'})
    tfc.chisel('botania:polished_livingrock_stairs', 'botania:polished_livingrock', 'smooth')
    event.shaped(
        Item.of('botania:polished_livingrock_stairs', 8), 
        [
            'B  ',
            'BB ',
            'BBB'
        ],
        {
            B: 'botania:polished_livingrock'
        }
    )
    // Polished Livingrock Slab
    tfc.chisel('botania:polished_livingrock_slab', 'botania:polished_livingrock', 'slab')
        .extraDrop('botania:polished_livingrock_slab')

    // Livingrock Bricks
    event.remove({id: 'botania:livingrock_bricks'})
    event.shapeless(
        Item.of('botania:livingrock_bricks'),
        [
            'botania:polished_livingrock',
            '#tfc:chisels'
        ]
    ).damageIngredient('#tfc:chisels')

    // Livingrock Brick Stairs
    event.remove({id: 'botania:livingrock_bricks_stairs'})
    tfc.chisel('botania:livingrock_bricks_stairs', 'botania:livingrock_bricks', 'smooth')
    event.shaped(
        Item.of('botania:livingrock_bricks_stairs', 8), 
        [
            'B  ',
            'BB ',
            'BBB'
        ],
        {
            B: 'botania:livingrock_bricks'
        }
    )

    // Livingrock Brick Slab
    tfc.chisel('botania:livingrock_bricks_slab', 'botania:livingrock_bricks', 'slab')
        .extraDrop('botania:livingrock_bricks_slab')
    
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

    // Livingrock Brick Stairs
    event.remove({id: 'botania:mossy_livingrock_bricks_stairs'})
    tfc.chisel('botania:mossy_livingrock_bricks_stairs', 'botania:mossy_livingrock_bricks', 'smooth')
    event.shaped(
        Item.of('botania:mossy_livingrock_bricks_stairs', 8), 
        [
            'B  ',
            'BB ',
            'BBB'
        ],
        {
            B: 'botania:mossy_livingrock_bricks'
        }
    )

    // Livingrock Brick Slab
    tfc.chisel('botania:mossy_livingrock_bricks_slab', 'botania:mossy_livingrock_bricks', 'slab')
        .extraDrop('botania:mossy_livingrock_bricks_slab')

    // Chiseled Livingrock Bricks
    event.remove({id: 'botania:chiseled_livingrock_bricks'})
    event.shapeless(
        Item.of('botania:chiseled_livingrock_bricks'),
        [
            'botania:livingrock_bricks',
            '#tfc:chisels'
        ]
    ).damageIngredient('#tfc:chisels')

    // Cracked Livingrock Bricks
    event.remove({id: 'botania:cracked_livingrock_bricks'})
    event.shapeless(
        Item.of('botania:cracked_livingrock_bricks'),
        [
            'botania:livingrock_bricks',
            '#tfc:hammers'
        ]
    ).damageIngredient('#tfc:hammers')

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
            L: 'kubejs:wood/lumber/livingwood',
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
            L: 'kubejs:wood/lumber/dreamwood',
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
            L: 'kubejs:wood/lumber/dreamwood',
            P: '#forge:plates/elementium',
            G: 'botania:mana_spreader'
        }
    )

    // Elven Mana Spreader
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

    // Block of Mana Diamond
    event.remove({id: 'botania:mana_diamond_block'})
    event.custom({
        type: 'immersiveengineering:metal_press',
        energy: 14400,
        input: {
            'base_ingredient': {
                tag: 'forge:gems/mana_diamond',
            },
            count: 9
        },
        mold: 'tfc_ie_addon:mold_block',
        result: {
            item: 'botania:mana_diamond_block'
        }
    })

    // Block of Dragonstone
    event.remove({id: 'botania:dragonstone_block'})
    event.custom({
        type: 'immersiveengineering:metal_press',
        energy: 14400,
        input: {
            'base_ingredient': {
                tag: 'forge:gems/dragonstone',
            },
            count: 9
        },
        mold: 'tfc_ie_addon:mold_block',
        result: {
            item: 'botania:dragonstone_block'
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

    // Elven Gateway Core
    event.replaceInput(
        {id: 'botania:alfheim_portal'},
        '#botania:livingwood_logs',
        'kubejs:wood/lumber/livingwood'
    )

    // Mana Pylon
    event.replaceInput(
        {id: 'botania:mana_pylon'},
        'minecraft:gold_ingot',
        '#forge:plates/gold'
    )
})