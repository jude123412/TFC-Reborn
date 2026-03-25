// TODO, Maybe add recipes for upgrades?

def recipesToRemove = [
    item('ironchest:iron_chest'),
    item('ironchest:iron_chest', 1),
    item('ironchest:iron_chest', 2),
    item('ironchest:iron_chest', 3),
    item('ironchest:iron_chest', 4),
    item('ironchest:iron_chest', 5),
    item('ironchest:iron_chest', 6),
    item('ironchest:iron_chest', 7),
    item('ironchest:iron_chest', 9),
    item('ironchest:iron_gold_chest_upgrade'),
    item('ironchest:gold_diamond_chest_upgrade'),
    item('ironchest:copper_silver_chest_upgrade'),
    item('ironchest:silver_gold_chest_upgrade'),
    item('ironchest:copper_iron_chest_upgrade'),
    item('ironchest:diamond_crystal_chest_upgrade'),
    item('ironchest:wood_iron_chest_upgrade'),
    item('ironchest:wood_copper_chest_upgrade'),
    item('ironchest:diamond_obsidian_chest_upgrade'),
    item('ironchest:diamond_netherite_chest_upgrade'),
    item('ironchest:obsidian_netherite_chest_upgrade'),
    item('ironchest:crystal_netherite_chest_upgrade'),
]

for (item in recipesToRemove) {
    crafting.removeByOutput(item)
}

// Copper Chest
crafting.shapedBuilder()
    .output(item('ironchest:iron_chest', 3))
    .shape([
        [null,ore('sheetCopper'),null],
        [ore('sheetCopper'),ore('chest'),ore('sheetCopper')],
        [null,ore('sheetCopper'),null]
    ])
    .register()

// Rose Gold Chest
crafting.shapedBuilder()
    .output(item('ironchest:iron_chest'))
    .shape([
        [null,ore('sheetRoseGold'),null],
        [ore('sheetRoseGold'),item('ironchest:iron_chest', 3),ore('sheetRoseGold')],
        [null,ore('sheetRoseGold'),null]
    ])
    .register()

// Sterling Silver
crafting.shapedBuilder()
    .output(item('ironchest:iron_chest', 4))
    .shape([
        [null,ore('sheetSterlingSilver'),null],
        [ore('sheetSterlingSilver'),item('ironchest:iron_chest'),ore('sheetSterlingSilver')],
        [null,ore('sheetSterlingSilver'),null]
    ])
    .register()

// Bronze
crafting.shapedBuilder()
    .output(item('ironchest:iron_chest', 1))
    .shape([
        [null,ore('sheetBronze'),null],
        [ore('sheetBronze'),item('ironchest:iron_chest', 4),ore('sheetBronze')],
        [null,ore('sheetBronze'),null]
    ])
    .register()

// Bismuth Bronze
crafting.shapedBuilder()
    .output(item('ironchest:iron_chest', 2))
    .shape([
        [null,ore('sheetBismuthBronze'),null],
        [ore('sheetBismuthBronze'),item('ironchest:iron_chest', 1),ore('sheetBismuthBronze')],
        [null,ore('sheetBismuthBronze'),null]
    ])
    .register()

// Black Bronze
crafting.shapedBuilder()
    .output(item('ironchest:iron_chest', 9))
    .shape([
        [null,ore('sheetBlackBronze'),null],
        [ore('sheetBlackBronze'),item('ironchest:iron_chest', 2),ore('sheetBlackBronze')],
        [null,ore('sheetBlackBronze'),null]
    ])
    .register()