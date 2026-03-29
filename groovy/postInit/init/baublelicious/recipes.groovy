def recipesToRemove = [
    item('baublelicious:itemring'),
    item('baublelicious:itemamulet'),
    item('baublelicious:itembelt'),
    item('baublelicious:itemspeedbelt'),
    item('baublelicious:itemgrowthpendant'),
    item('baublelicious:itemringofflight'),
    item('baublelicious:itembeltwaterwalking'),
    item('baublelicious:itemdivingamulet'),
    item('baublelicious:itemfallingbelt'),
    item('baublelicious:itemamuletnightvision'),
    item('baublelicious:itemamuletfierycore'),
    item('baublelicious:item.itemmagiccore'),
    item('baublelicious:item.itemmagiccore', 1),
    item('baublelicious:item.itemmagiccore', 2)
]

// Recipe Removal
for (id in recipesToRemove) {
    crafting.removeByOutput(id)
}

// Amulet
crafting.shapedBuilder()
    .output(item('baublelicious:itemamulet'))
    .shape([
        [ore('knife')],
        [ore('leather')]
    ])
    .register()

// Belt
crafting.shapedBuilder()
    .output(item('baublelicious:itembelt'))
    .shape([
        [item('tfctech:wiredraw/leather_belt')],
        [ore('stripGold')]
    ])
    .register()

// Speed Belt
crafting.shapedBuilder()
    .output(item('baublelicious:itemspeedbelt'))
    .shape([
        [null,ore('gemFlawedEmerald'),null],
        [ore('stickGold'),item('baublelicious:itembelt'),ore('stickGold')],
        [null,ore('ingotAnyBronze'),null]
    ])
    .register()

crafting.shapedBuilder()
    .output(item('baublelicious:itemspeedbelt'))
    .shape([
        [null,ore('gemFlawedJade'),null],
        [ore('stickGold'),item('baublelicious:itembelt'),ore('stickGold')],
        [null,ore('ingotAnyBronze'),null]
    ])
    .register()

// Ring of Flight
crafting.shapedBuilder()
    .output(item('baublelicious:itemringofflight'))
    .shape([
        [null,ore('gemExquisiteTourmaline'),null],
        [ore('feather'),item('baublelicious:itemring'),ore('feather')],
        [null,ore('ingotSteel'),null]
    ])
    .register()

// Belt of Water Walking
crafting.shapedBuilder()
    .output(item('baublelicious:itembeltwaterwalking'))
    .shape([
        [null,ore('gemExquisiteBeryl'),null],
        [ore('stickIron'),item('baublelicious:itembelt'),ore('stickIron')],
        [null,ore('ingotSteel'),null]
    ])
    .register()

// Amulet of Diving
crafting.shapedBuilder()
    .output(item('baublelicious:itemdivingamulet'))
    .shape([
        [null,ore('gemSapphire'),null],
        [ore('stickRoseGold'),item('baublelicious:itemamulet'),ore('stickRoseGold')],
        [null,ore('ingotIron'),null]
    ])
    .register()

// Falling Belt
crafting.shapedBuilder()
    .output(item('baublelicious:itemfallingbelt'))
    .shape([
        [null,ore('gemAmethyst'),null],
        [item('minecraft:feather'),item('baublelicious:itembelt'),item('minecraft:feather')],
        [null,ore('ingotIron'),null]
    ])
    .register()

// Amulet of Nightvision
crafting.shapedBuilder()
    .output(item('baublelicious:itemamuletnightvision'))
    .shape([
        [null,ore('gemExquisiteJasper'),null],
        [ore('stickLumium'),item('baublelicious:itemamulet'),ore('stickLumium')],
        [null,ore('ingotSteel'),null]
    ])
    .register()

// Amulet of the Fiery Core
crafting.shapedBuilder()
    .output(item('baublelicious:itemamuletfierycore'))
    .shape([
        [null,ore('gemExquisiteTopaz'),null],
        [ore('stickSignalum'),item('baublelicious:itemamulet'),ore('stickSignalum')],
        [null,ore('ingotSteel'),null]
    ])
    .register()

// Miner's Ring
crafting.shapedBuilder()
    .output(item('baubles:ring'))
    .shape([
        [null,ore('gemFlawedOpal'),null],
        [ore('stickSterlingSilver'),item('baublelicious:itemring'),ore('stickSterlingSilver')],
        [null,ore('ingotAnyBronze'),null]
    ])
    .register()