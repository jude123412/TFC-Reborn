TFCEvents.data(event => {
    // Cobblestone
    event.itemHeat('#forge:cobblestone', 2, null, null)

    // Deepslate
    event.itemHeat('minecraft:deepslate', 2, null, null)

    // Sculk
    event.itemHeat('minecraft:sculk', 2, 1000, 1400)

    // Echo Shard
    event.itemHeat('minecraft:echo_shard', 2, 1000, 1400)
})

ServerEvents.recipes(event => {
    const tfc = event.recipes.tfc

    // Recipe Removal
    event.remove({id: 'minecraft:crafting_table'})
    event.remove({id: 'minecraft:heavy_weighted_pressure_plate'})
    event.remove({id: 'create:crafting/appliances/chain_from_zinc'})
    event.remove({id: 'createdieselgenerators:compression_molding/chain'})
    event.remove({id: 'minecraft:chain'})
    event.remove({id: 'minecraft:iron_bars'})
    event.remove({id: 'minecraft:dye_white_wool'})
    event.remove({id: 'minecraft:dye_light_gray_wool'})
    event.remove({id: 'minecraft:dye_gray_wool'})
    event.remove({id: 'minecraft:dye_black_wool'})
    event.remove({id: 'minecraft:dye_brown_wool'})
    event.remove({id: 'minecraft:dye_red_wool'})
    event.remove({id: 'minecraft:dye_orange_wool'})
    event.remove({id: 'minecraft:dye_yellow_wool'})
    event.remove({id: 'minecraft:dye_lime_wool'})
    event.remove({id: 'minecraft:dye_green_wool'})
    event.remove({id: 'minecraft:dye_cyan_wool'})
    event.remove({id: 'minecraft:dye_light_blue_wool'})
    event.remove({id: 'minecraft:dye_blue_wool'})
    event.remove({id: 'minecraft:dye_purple_wool'})
    event.remove({id: 'minecraft:dye_magenta_wool'})
    event.remove({id: 'minecraft:dye_pink_wool'})
    event.remove({id: 'minecraft:white_terracotta'})
    event.remove({id: 'minecraft:light_gray_terracotta'})
    event.remove({id: 'minecraft:gray_terracotta'})
    event.remove({id: 'minecraft:black_terracotta'})
    event.remove({id: 'minecraft:brown_terracotta'})
    event.remove({id: 'minecraft:red_terracotta'})
    event.remove({id: 'minecraft:orange_terracotta'})
    event.remove({id: 'minecraft:yellow_terracotta'})
    event.remove({id: 'minecraft:lime_terracotta'})
    event.remove({id: 'minecraft:green_terracotta'})
    event.remove({id: 'minecraft:cyan_terracotta'})
    event.remove({id: 'minecraft:light_blue_terracotta'})
    event.remove({id: 'minecraft:blue_terracotta'})
    event.remove({id: 'minecraft:purple_terracotta'})
    event.remove({id: 'minecraft:magenta_terracotta'})
    event.remove({id: 'minecraft:pink_terracotta'})
    event.remove({id: 'tfc:crafting/vanilla/color/white_concrete_powder'})
    event.remove({id: 'tfc:crafting/vanilla/color/light_gray_concrete_powder'})
    event.remove({id: 'tfc:crafting/vanilla/color/gray_concrete_powder'})
    event.remove({id: 'tfc:crafting/vanilla/color/black_concrete_powder'})
    event.remove({id: 'tfc:crafting/vanilla/color/brown_concrete_powder'})
    event.remove({id: 'tfc:crafting/vanilla/color/red_concrete_powder'})
    event.remove({id: 'tfc:crafting/vanilla/color/orange_concrete_powder'})
    event.remove({id: 'tfc:crafting/vanilla/color/yellow_concrete_powder'})
    event.remove({id: 'tfc:crafting/vanilla/color/lime_concrete_powder'})
    event.remove({id: 'tfc:crafting/vanilla/color/green_concrete_powder'})
    event.remove({id: 'tfc:crafting/vanilla/color/cyan_concrete_powder'})
    event.remove({id: 'tfc:crafting/vanilla/color/light_blue_concrete_powder'})
    event.remove({id: 'tfc:crafting/vanilla/color/blue_concrete_powder'})
    event.remove({id: 'tfc:crafting/vanilla/color/purple_concrete_powder'})
    event.remove({id: 'tfc:crafting/vanilla/color/magenta_concrete_powder'})
    event.remove({id: 'tfc:crafting/vanilla/color/pink_concrete_powder'})
    event.remove({id: 'minecraft:jei.shulker.color.block.minecraft.white_shulker_box'})
    event.remove({id: 'minecraft:jei.shulker.color.block.minecraft.light_gray_shulker_box'})
    event.remove({id: 'minecraft:jei.shulker.color.block.minecraft.gray_shulker_box'})
    event.remove({id: 'minecraft:jei.shulker.color.block.minecraft.black_shulker_box'})
    event.remove({id: 'minecraft:jei.shulker.color.block.minecraft.brown_shulker_box'})
    event.remove({id: 'minecraft:jei.shulker.color.block.minecraft.red_shulker_box'})
    event.remove({id: 'minecraft:jei.shulker.color.block.minecraft.orange_shulker_box'})
    event.remove({id: 'minecraft:jei.shulker.color.block.minecraft.yellow_shulker_box'})
    event.remove({id: 'minecraft:jei.shulker.color.block.minecraft.lime_shulker_box'})
    event.remove({id: 'minecraft:jei.shulker.color.block.minecraft.green_shulker_box'})
    event.remove({id: 'minecraft:jei.shulker.color.block.minecraft.cyan_shulker_box'})
    event.remove({id: 'minecraft:jei.shulker.color.block.minecraft.light_blue_shulker_box'})
    event.remove({id: 'minecraft:jei.shulker.color.block.minecraft.blue_shulker_box'})
    event.remove({id: 'minecraft:jei.shulker.color.block.minecraft.purple_shulker_box'})
    event.remove({id: 'minecraft:jei.shulker.color.block.minecraft.magenta_shulker_box'})
    event.remove({id: 'minecraft:jei.shulker.color.block.minecraft.pink_shulker_box'})
    event.remove({id: 'minecraft:dye_white_bed'})
    event.remove({id: 'minecraft:dye_light_gray_bed'})
    event.remove({id: 'minecraft:dye_gray_bed'})
    event.remove({id: 'minecraft:dye_black_bed'})
    event.remove({id: 'minecraft:dye_brown_bed'})
    event.remove({id: 'minecraft:dye_red_bed'})
    event.remove({id: 'minecraft:dye_orange_bed'})
    event.remove({id: 'minecraft:dye_yellow_bed'})
    event.remove({id: 'minecraft:dye_lime_bed'})
    event.remove({id: 'minecraft:dye_green_bed'})
    event.remove({id: 'minecraft:dye_cyan_bed'})
    event.remove({id: 'minecraft:dye_light_blue_bed'})
    event.remove({id: 'minecraft:dye_blue_bed'})
    event.remove({id: 'minecraft:dye_purple_bed'})
    event.remove({id: 'minecraft:dye_magenta_bed'})
    event.remove({id: 'minecraft:dye_pink_bed'})
    event.remove({id: 'mekanism:processing/coal/to_ore'})
    event.remove({id: 'mekanism:processing/coal/to_deepslate_ore'})
    event.remove({id: 'mekanism:processing/iron/ore/from_raw'})
    event.remove({id: 'mekanism:processing/iron/ore/deepslate_from_raw'})
    event.remove({id: 'mekanism:processing/copper/ore/from_raw'})
    event.remove({id: 'mekanism:processing/copper/ore/deepslate_from_raw'})
    event.remove({id: 'mekanism:processing/gold/ore/from_raw'})
    event.remove({id: 'mekanism:processing/gold/ore/deepslate_from_raw'})
    event.remove({id: 'mekanism:processing/redstone/to_ore'})
    event.remove({id: 'mekanism:processing/redstone/to_deepslate_ore'})
    event.remove({id: 'mekanism:processing/emerald/to_ore'})
    event.remove({id: 'mekanism:processing/emerald/to_deepslate_ore'})
    event.remove({id: 'mekanism:processing/lapis_lazuli/to_ore'})
    event.remove({id: 'mekanism:processing/lapis_lazuli/to_deepslate_ore'})
    event.remove({id: 'mekanism:processing/diamond/to_ore'})
    event.remove({id: 'mekanism:processing/diamond/to_deepslate_ore'})
    event.remove({id: 'mekanism:processing/gold/ore/nether_from_raw'})
    event.remove({id: 'mekanism:processing/quartz/to_ore'})
    event.remove({id: 'mekanism:processing/netherite/dust_to_ancient_debris'})
    event.remove({id: 'minecraft:raw_iron_block'})
    event.remove({id: 'minecraft:raw_copper_block'})
    event.remove({id: 'minecraft:raw_gold_block'})
    event.remove({id: 'minecraft:smithing_table'})
    event.remove({id: 'minecraft:blast_furnace'})
    event.remove({id: 'create:haunting/soul_campfire'})
    event.remove({id: 'minecraft:cauldron'})
    event.remove({id: 'minecraft:beehive'})
    event.remove({id: 'minecraft:armor_stand'})
    event.remove({id: 'farmersdelight:painting_from_canvas'})
    event.remove({id: 'minecraft:tripwire_hook'})
    event.remove({id: 'minecraft:daylight_detector'})
    event.remove({id: 'minecraft:piston'})
    event.remove({id: 'minecraft:hopper'})
    event.remove({id: 'minecraft:observer'})
    event.remove({id: 'tfc:crafting/vanilla/redstone/steel_rail'})
    event.remove({id: 'tfc:crafting/vanilla/redstone/rail'})
    event.remove({id: 'mekanism:rails'})
    event.remove({id: 'minecraft:minecart'})
    event.remove({id: 'minecraft:furnace_minecart'})
    event.remove({id: 'minecraft:shears'})
    event.remove({id: 'minecraft:golden_carrot'})
    event.remove({id: 'minecraft:dried_kelp'})
    event.remove({id: 'create:milling/saddle'})
    event.remove({id: 'minecraft:brick'})
    event.remove({id: 'farmersdelight:pumpkin_pie_from_pie_crust'})
    event.remove({id: 'farmersdelight:pumpkin_pie_from_slices'})
    event.remove({id: 'farmersdelight:cake_from_slices'})
    event.remove({id: 'farmersdelight:cake_from_milk_bottle'})
    event.remove({id: 'minecraft:cake'})
    event.remove({id: 'create:crafting/curiosities/cake'})
    event.remove({id: 'farmersdelight:cooking/mushroom_stew'})
    event.remove({id: 'minecraft:paper'})
    event.remove({id: 'mekanism:paper'})
    event.remove({id: 'immersiveengineering:crafting/paper_from_sawdust'})
    event.remove({id: 'farmersdelight:paper_from_tree_bark'})
    event.remove({id: 'create:pressing/sugar_cane'})
    event.remove({id: 'vintage:curving/iron_sheet'})
    event.remove({id: 'createdieselgenerators:compression_molding/bucket'})
    event.remove({id: 'mekanism:sawing/pressure_plate/mangrove'})
    event.remove({id: 'mekanism:sawing/pressure_plate/warped'})
    event.remove({id: 'mekanism:sawing/hanging_sign/cherry'})
    event.remove({id: 'mekanism:sawing/hanging_sign/acacia'})
    event.remove({id: 'mekanism:sawing/log/jungle'})
    event.remove({id: 'mekanism:sawing/hanging_sign/dark_oak'})
    event.remove({id: 'mekanism:sawing/hanging_sign/warped'})
    event.remove({id: 'mekanism:sawing/log/acacia'})
    event.remove({id: 'mekanism:sawing/log/crimson'})
    event.remove({id: 'mekanism:sawing/pressure_plate/cherry'})
    event.remove({id: 'mekanism:sawing/button'})
    event.remove({id: 'mekanism:sawing/stairs'})
    event.remove({id: 'mekanism:sawing/slabs'})
    event.remove({id: 'mekanism:sawing/hanging_sign/bamboo'})
    event.remove({id: 'mekanism:sawing/pressure_plate/acacia'})
    event.remove({id: 'mekanism:sawing/log/spruce'})
    event.remove({id: 'mekanism:sawing/pressure_plate/birch'})
    event.remove({id: 'mekanism:sawing/log/cherry'})
    event.remove({id: 'mekanism:sawing/pressure_plate/dark_oak'})
    event.remove({id: 'mekanism:sawing/log/dark_oak'})
    event.remove({id: 'mekanism:sawing/log/birch'})
    event.remove({id: 'mekanism:sawing/hanging_sign/birch'})
    event.remove({id: 'mekanism:sawing/pressure_plate/crimson'})
    event.remove({id: 'mekanism:sawing/hanging_sign/crimson'})
    event.remove({id: 'mekanism:sawing/log/warped'})
    event.remove({id: 'mekanism:sawing/pressure_plate/spruce'})
    event.remove({id: 'mekanism:sawing/hanging_sign/jungle'})
    event.remove({id: 'mekanism:sawing/pressure_plate/jungle'})
    event.remove({id: 'mekanism:sawing/log/oak'})
    event.remove({id: 'mekanism:sawing/stick'})
    event.remove({id: 'mekanism:sawing/hanging_sign/oak'})
    event.remove({id: 'mekanism:sawing/pressure_plate/bamboo'})
    event.remove({id: 'mekanism:sawing/pressure_plate/oak'})
    event.remove({id: 'mekanism:sawing/hanging_sign/mangrove'})
    event.remove({id: 'mekanism:sawing/sign'})
    event.remove({id: 'mekanism:sawing/log/mangrove'})
    event.remove({id: 'mekanism:sawing/planks'})
    event.remove({id: 'mekanism:sawing/hanging_sign/spruce'})

    // Elytra
    tfc.welding(
        TFC.itemStackProvider.of('minecraft:elytra'),
        Ingredient.of('kubejs:elytra/left_wing'),
        Ingredient.of('kubejs:elytra/right_wing'),
        3
    )

    // Obsidian
    event.shaped(
        Item.of('minecraft:obsidian'),
        [
            'OO',
            'OO'
        ],
        {
            O: 'bsa:obsidian'
        }
    )

    // Book Shelf
    event.shapeless(
        Item.of('minecraft:bookshelf'),
        [
            '#tfc:bookshelves',
            '3x #tfc:books'
        ]
    )

    // Heart of the Sea
    event.shaped(
        Item.of('minecraft:heart_of_the_sea'), 
        [
            'FKF',
            'SQS',
            'FKF'
        ],
        {
            F: '#minecraft:fishes',
            K: '#tfc:plants/kelp',
            Q: 'tfc:gem/opal',
            S: '#forge:sheets/bismuth'
        }
    )

    // Nautilus Shell
    event.shaped(
        Item.of('minecraft:nautilus_shell'), 
        [
            ' H ',
            'HRH',
            'MH '
        ],
        {
            H: 'tfc:ore/halite',
            M: 'tfc:groundcover/mollusk',
            R: '#forge:rods/bismuth'
        }
    )

    // Sculk
    event.shaped(
        Item.of('minecraft:sculk'), 
        [
            'SSS',
            'SDS',
            'SSS'
        ],
        {
            D: 'minecraft:deepslate',
            S: 'minecraft:sculk_vein'
        }
    )

    // Sculk Catalyst
    event.shaped(
        Item.of('minecraft:sculk_catalyst'), 
        [
            ' V ',
            'STS',
            'SDS'
        ],
        {
            D: 'minecraft:deepslate',
            S: 'minecraft:sculk',
            T: 'apotheosis:warden_tendril',
            V: 'minecraft:sculk_vein'
        }
    )

    // Stonecutter
    event.remove({id: 'minecraft:stonecutter'})
    event.shaped(
        Item.of('minecraft:stonecutter'), 
        [
            ' P ',
            'PIP',
            'SSS'
        ],
        {
            P: '#forge:plates/wrought_iron',
            I: '#forge:ingots/wrought_iron',
            S: '#tfc:rock/raw'
        }
    )

    // Cartogrophy Table
    event.remove({id: 'minecraft:cartography_table'})
    event.shaped(
        Item.of('minecraft:cartography_table'), 
        [
            'PP',
            'CS'
        ],
        {
            P: '#forge:paper',
            C: '#tfc:workbenches',
            S: '#forge:sheets/wrought_iron'
        }
    )

    // Fletching Table
    event.shaped(
        Item.of('minecraft:fletching_table'), 
        [
            'BA',
            'CS'
        ],
        {
            B: '#forge:tools/bows',
            A: '#minecraft:arrows',
            C: '#tfc:workbenches',
            S: '#forge:sheets/wrought_iron'
        }
    )

    // Grindstone
    event.replaceInput(
        {id: 'minecraft:grindstone'},
        'minecraft:stone_slab',
        '#tfc:handstone'
    )

    // Banner Loom
    event.remove({id: 'tfc:crafting/vanilla/loom'})
    event.shaped(
        Item.of('minecraft:loom'), 
        [
            'BB',
            'CS'
        ],
        {
            B: '#forge:string',
            C: '#tfc:workbenches',
            S: '#forge:sheets/wrought_iron'
        }
    )

    // Anvil
    event.shaped(
        Item.of('minecraft:anvil'), 
        [
            'DDD',
            ' I ',
            'III'
        ],
        {
            D: '#forge:double_ingots/wrought_iron',
            I: '#forge:ingots/wrought_iron'
        }
    )

    // Brewing Stand
    event.remove({id: 'minecraft:brewing_stand'})
    event.shaped(
        Item.of('minecraft:brewing_stand'), 
        [
            'PBP',
            ' B ',
            'CCC'
        ],
        {
            P: '#forge:plates/wrought_iron',
            B: '#forge:rods/blaze',
            C: '#forge:cobblestone'
        }
    )

    
    // Loadstone
    event.remove({id: 'minecraft:lodestone'})
    event.shaped(
        Item.of('minecraft:lodestone'), 
        [
            'SPS',
            'PIP',
            'SPS'
        ],
        {
            S: '#forge:stone_bricks',
            P: '#forge:plates/steel',
            I: '#forge:gems'
        }
    )

    // Scaffolding
    event.remove({id: 'farmersdelight:scaffolding_from_canvas'})
    event.remove({id: 'mynethersdelight:crafting/scaffolding_alt'})
    event.shaped(
        Item.of('minecraft:scaffolding', 6), 
        [
            'BSB',
            'B B',
            'B B'
        ],
        {
            B: 'mynethersdelight:powder_cannon',
            S: '#forge:string'
        }
    )

    // Calibrated Sculk Sensor
    event.remove({id: 'minecraft:calibrated_sculk_sensor'})
    event.shapeless(
        Item.of('minecraft:calibrated_sculk_sensor'),
        [
            '#forge:gems/amethyst',
            '#forge:gems/amethyst',
            '#forge:gems/amethyst',
            'minecraft:sculk_sensor'
        ]
    )

    // Powered Rail
    event.remove({id: 'tfc:crafting/vanilla/redstone/powered_rail'})
    event.shapeless(
        Item.of('minecraft:powered_rail'),
        [
            'railcraft:booster_track_kit',
            'minecraft:rail'
        ]
    )

    // Detector Rail
    event.remove({id: 'minecraft:detector_rail'})
    event.remove({id: 'tfc:crafting/vanilla/redstone/detector_rail'})
    event.remove({id: 'tfc:crafting/vanilla/redstone/steel_detector_rail'})
    event.shapeless(
        Item.of('minecraft:detector_rail'),
        [
            'railcraft:detector_track_kit',
            'minecraft:rail'
        ]
    )

    // Activator Rail
    event.remove({id: 'minecraft:activator_rail'})
    event.remove({id: 'tfc:crafting/vanilla/redstone/activator_rail'})
    event.remove({id: 'tfc:crafting/vanilla/redstone/steel_activator_rail'})
    event.shapeless(
        Item.of('minecraft:activator_rail'),
        [
            'railcraft:activator_track_kit',
            'minecraft:rail'
        ]
    )

    // Amethyst
    event.shapeless(
        Item.of('minecraft:amethyst_shard'),
        [
            'tfc:gem/amethyst',
            '#create:sandpaper'
        ]
    ).damageIngredient('#forge:sandpaper')

    // Netherite Shovel
    event.remove({id: 'minecraft:netherite_shovel_smithing'})
    event.smithing(
        'minecraft:netherite_shovel',
        'minecraft:netherite_upgrade_smithing_template',
        'tfc:metal/shovel/black_steel',
        'minecraft:netherite_ingot'
    )
    

    // Netherite Pickaxe
    event.remove({id: 'minecraft:netherite_pickaxe_smithing'})
    event.smithing(
        'minecraft:netherite_pickaxe',
        'minecraft:netherite_upgrade_smithing_template',
        'tfc:metal/pickaxe/black_steel',
        'minecraft:netherite_ingot'
    )

    // Netherite Axe
    event.remove({id: 'minecraft:netherite_axe_smithing'})
    event.smithing(
        'minecraft:netherite_axe',
        'minecraft:netherite_upgrade_smithing_template',
        'tfc:metal/axe/black_steel',
        'minecraft:netherite_ingot'
    )

    // Netherite Hoe
    event.remove({id: 'minecraft:netherite_hoe_smithing'})
    event.smithing(
        'minecraft:netherite_hoe',
        'minecraft:netherite_upgrade_smithing_template',
        'tfc:metal/hoe/black_steel',
        'minecraft:netherite_ingot'
    )

    // Netherite Sword
    event.remove({id: 'minecraft:netherite_sword_smithing'})
    event.smithing(
        'minecraft:netherite_sword',
        'minecraft:netherite_upgrade_smithing_template',
        'tfc:metal/sword/black_steel',
        'minecraft:netherite_ingot'
    )

    // Netherite Helmet
    event.remove({id: 'minecraft:netherite_helmet_smithing'})
    event.smithing(
        'minecraft:netherite_helmet',
        'minecraft:netherite_upgrade_smithing_template',
        'tfc:metal/helmet/black_steel',
        'minecraft:netherite_ingot'
    )

    // Netherite Chestplate
    event.remove({id: 'minecraft:netherite_chestplate_smithing'})
    event.smithing(
        'minecraft:netherite_chestplate',
        'minecraft:netherite_upgrade_smithing_template',
        'tfc:metal/chestplate/black_steel',
        'minecraft:netherite_ingot'
    )

    // Netherite Leggings
    event.remove({id: 'minecraft:netherite_leggings_smithing'})
    event.smithing(
        'minecraft:netherite_leggings',
        'minecraft:netherite_upgrade_smithing_template',
        'tfc:metal/greaves/black_steel',
        'minecraft:netherite_ingot'
    )

    // Netherite Boots
    event.remove({id: 'minecraft:netherite_boots_smithing'})
    event.smithing(
        'minecraft:netherite_boots',
        'minecraft:netherite_upgrade_smithing_template',
        'tfc:metal/boots/black_steel',
        'minecraft:netherite_ingot'
    )

    // Block of Coal
    event.remove({id: 'minecraft:coal_block'})
    event.custom({
        type: 'immersiveengineering:metal_press',
        energy: 14400,
        input: {
            'base_ingredient': {
                tag: 'forge:gems/coal',
            },
            count: 9
        },
        mold: 'tfc_ie_addon:mold_block',
        result: {
            item: 'minecraft:coal_block'
        }
    })

    // Block of Iron
    event.remove({id: 'minecraft:iron_block'})
    event.remove({id: 'minecraft:iron_ingot_from_iron_block'})
    event.custom({
        type: 'immersiveengineering:metal_press',
        energy: 14400,
        input: {
            'base_ingredient': {
                tag: 'forge:ingots/iron',
            },
            count: 9
        },
        mold: 'tfc_ie_addon:mold_block',
        result: {
            item: 'minecraft:iron_block'
        }
    })

    // Block of Gold
    event.remove({id: 'minecraft:gold_block'})
    event.remove({id: 'minecraft:gold_ingot_from_gold_block'})
    event.custom({
        type: 'immersiveengineering:metal_press',
        energy: 14400,
        input: {
            'base_ingredient': {
                tag: 'forge:ingots/gold',
            },
            count: 9
        },
        mold: 'tfc_ie_addon:mold_block',
        result: {
            item: 'minecraft:gold_block'
        }
    })

    // Block of Redstone
    event.remove({id: 'minecraft:redstone_block'})
    event.remove({id: 'minecraft:redstone'})
    event.custom({
        type: 'immersiveengineering:metal_press',
        energy: 14400,
        input: {
            'base_ingredient': {
                tag: 'forge:dusts/redstone',
            },
            count: 9
        },
        mold: 'tfc_ie_addon:mold_block',
        result: {
            item: 'minecraft:redstone_block'
        }
    })

    // Block of Emerald
    event.remove({id: 'minecraft:emerald_block'})
    event.remove({id: 'minecraft:emerald'})
    event.custom({
        type: 'immersiveengineering:metal_press',
        energy: 14400,
        input: {
            'base_ingredient': {
                tag: 'forge:gems/emerald',
            },
            count: 9
        },
        mold: 'tfc_ie_addon:mold_block',
        result: {
            item: 'minecraft:emerald_block'
        }
    })

    // Block of Lapis
    event.remove({id: 'tfc:crafting/vanilla/lapis_block'})
    event.remove({id: 'minecraft:lapis_block'})
    event.custom({
        type: 'immersiveengineering:metal_press',
        energy: 14400,
        input: {
            'base_ingredient': {
                tag: 'forge:gems/lapis',
            },
            count: 9
        },
        mold: 'tfc_ie_addon:mold_block',
        result: {
            item: 'minecraft:lapis_block'
        }
    })

    // Block of Diamond
    event.remove({id: 'minecraft:diamond_block'})
    event.remove({id: 'minecraft:diamond'})
    event.custom({
        type: 'immersiveengineering:metal_press',
        energy: 14400,
        input: {
            'base_ingredient': {
                tag: 'forge:gems/diamond',
            },
            count: 9
        },
        mold: 'tfc_ie_addon:mold_block',
        result: {
            item: 'minecraft:diamond_block'
        }
    })

    // Block of Netherite
    event.remove({id: 'minecraft:netherite_block'})
    event.remove({id: 'minecraft:netherite_ingot_from_netherite_block'})
    event.custom({
        type: 'immersiveengineering:metal_press',
        energy: 14400,
        input: {
            'base_ingredient': {
                tag: 'forge:ingots/netherite',
            },
            count: 9
        },
        mold: 'tfc_ie_addon:mold_block',
        result: {
            item: 'minecraft:netherite_block'
        }
    })

    // Block of Quartz
    event.remove({id: 'minecraft:quartz_block'})
    event.custom({
        type: 'immersiveengineering:metal_press',
        energy: 14400,
        input: {
            'base_ingredient': {
                tag: 'forge:gems/quartz',
            },
            count: 4
        },
        mold: 'tfc_ie_addon:mold_block',
        result: {
            item: 'minecraft:quartz_block'
        }
    })


    // Block of Amethyst
    event.remove({id: 'minecraft:amethyst_block'})
    event.custom({
        type: 'immersiveengineering:metal_press',
        energy: 14400,
        input: {
            'base_ingredient': {
                tag: 'forge:gems/amethyst',
            },
            count: 4
        },
        mold: 'tfc_ie_addon:mold_block',
        result: {
            item: 'minecraft:amethyst_block'
        }
    })

    // Block of Copper
    event.remove({id: 'minecraft:copper_block'})
    event.custom({
        type: 'immersiveengineering:metal_press',
        energy: 14400,
        input: {
            'base_ingredient': {
                tag: 'forge:ingots/copper',
            },
            count: 9
        },
        mold: 'tfc_ie_addon:mold_block',
        result: {
            item: 'minecraft:copper_block'
        }
    })

    // Dried Kelp Block
    event.replaceInput(
        {id: 'minecraft:dried_kelp_block'},
        'minecraft:dried_kelp',
        'tfc:food/dried_kelp'
    )

    // Prismarine Crystals
    tfc.barrel_sealed(8000)
        .outputItem('minecraft:prismarine_crystals')
        .inputItem('#forge:gems/quartz')
        .inputFluid(Fluid.of('tfc:salt_water', 100))

    // Prismarine Shard
    tfc.barrel_sealed(8000)
        .outputItem('minecraft:prismarine_shard')
        .inputItem('#forge:gems/prismarine')
        .inputFluid(Fluid.of('minecraft:water', 100))

    // Sculk Vein
    tfc.barrel_sealed(32000)
        .outputItem('minecraft:sculk_vein')
        .inputItem('#tfc:fallen_leaves')
        .inputFluid(Fluid.of('tfc:cyan_dye', 250))

    // Deepslate
    tfc.heating('#forge:cobblestone', 1400)
        .resultItem(
            TFC.itemStackProvider.of('minecraft:deepslate').copyHeat()
        )

    // Echo Shard
    tfc.anvil(
                TFC.itemStackProvider.of('minecraft:echo_shard').copyHeat(),
                'minecraft:sculk',
            [
                'hit_third_last',
                'punch_second_last',
                'punch_not_last'
            ]
        ).tier(5)

    // Glass Bottle
    event.shapeless('minecraft:glass_bottle', [
        '#tfc:glass_bottles'
    ])

    // Barrel
    event.shaped(
        Item.of('minecraft:barrel'), 
        [
            'PLP',
            'S S',
            'PLP'
        ],
        {
            P: '#minecraft:planks',
            L: '#tfc:lumber',
            S: '#forge:plates/wrought_iron'
        }
    )
})