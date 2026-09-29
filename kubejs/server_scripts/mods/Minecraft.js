TFCEvents.data(event => {
    event.itemHeat('#forge:cobblestone', 2, null, null)
    event.itemHeat('minecraft:deepslate', 2, null, null)
    event.itemHeat('minecraft:sculk', 2, 1000, 1400)
    event.itemHeat('minecraft:echo_shard', 2, 1000, 1400)
})

ServerEvents.recipes(event => {
    const tfc = event.recipes.tfc
    const ie = event.recipes.immersiveengineering

    // Crafting Table Removal
    event.remove({id:"minecraft:crafting_table"})

    // Elytra
    event.shaped(
        Item.of('minecraft:elytra'),
        [
            ' R ',
            'SGS',
            'RSR'
        ],
        {
            G: 'immersiveengineering:glider',
            R: '#forge:double_sheets/steel',
            S: '#forge:rods/steel'
        }
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

    // Block of Iron
    event.remove({id: 'minecraft:iron_block'})
    event.remove({id: 'minecraft:iron_ingot_from_iron_block'})
    ie.metal_press(
        'minecraft:iron_block',
        Item.of('#forge:ingots/iron', 9),
        'tfc_ie_addon:mold_block',
        14400
    )

    // Block of Gold
    event.remove({id: 'minecraft:gold_block'})
    event.remove({id: 'minecraft:gold_ingot_from_gold_block'})
    ie.metal_press(
        'minecraft:gold_block',
        Item.of('#forge:ingots/gold', 9),
        'tfc_ie_addon:mold_block',
        14400
    )

    // Block of Redstone
    event.remove({id: 'minecraft:redstone_block'})
    event.remove({id: 'minecraft:redstone'})
    ie.metal_press(
        'minecraft:redstone_block',
        Item.of('#forge:dusts/redstone', 9),
        'tfc_ie_addon:mold_block',
        14400
    )

    // Block of Emerald
    event.remove({id: 'minecraft:emerald_block'})
    event.remove({id: 'minecraft:emerald'})
    ie.metal_press(
        'minecraft:emerald_block',
        Item.of('#forge:gems/emerald', 9),
        'tfc_ie_addon:mold_block',
        14400
    )

    // Block of Lapis
    event.remove({id: 'tfc:crafting/vanilla/lapis_block'})
    event.remove({id: 'minecraft:lapis_block'})
    ie.metal_press(
        'minecraft:lapis_block',
        Item.of('#forge:gems/lapis', 9),
        'tfc_ie_addon:mold_block',
        14400
    )

    // Block of Diamond
    event.remove({id: 'minecraft:diamond_block'})
    event.remove({id: 'minecraft:diamond'})
    ie.metal_press(
        'minecraft:diamond_block',
        Item.of('#forge:gems/diamond', 9),
        'tfc_ie_addon:mold_block',
        14400
    )

    // Block of Netherite
    event.remove({id: 'minecraft:netherite_block'})
    event.remove({id: 'minecraft:netherite_ingot_from_netherite_block'})
    ie.metal_press(
        'minecraft:netherite_block',
        Item.of('#forge:ingots/netherite', 9),
        'tfc_ie_addon:mold_block',
        14400
    )

    // Block of Gold
    event.remove({id: 'minecraft:quartz_block'})
    ie.metal_press(
        'minecraft:quartz_block',
        Item.of('#forge:gems/quartz', 4),
        'tfc_ie_addon:mold_block',
        14400
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

})