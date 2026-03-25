def recipesToRemove = [
    item('storagedrawers:upgrade_template'),
    item('storagedrawers:upgrade_storage'),
    item('storagedrawers:upgrade_storage', 1),
    item('storagedrawers:upgrade_storage', 2),
    item('storagedrawers:upgrade_storage', 3),
    item('storagedrawers:upgrade_storage', 4),
    item('storagedrawers:upgrade_one_stack'),
    item('storagedrawers:upgrade_void'),
    item('storagedrawers:upgrade_conversion'),
    item('storagedrawers:drawer_key'),
    item('storagedrawers:basicdrawers'),
    item('storagedrawers:basicdrawers', 1),
    item('storagedrawers:basicdrawers', 2),
    item('storagedrawers:basicdrawers', 3),
    item('storagedrawers:basicdrawers', 4),
    item('storagedrawers:compdrawers'),
    item('storagedrawers:controller'),
    item('storagedrawers:controllerslave'),
    item('storagedrawers:trim'),
    item('storagedrawers:trim', 1),
    item('storagedrawers:trim', 2),
    item('storagedrawers:trim', 3),
    item('storagedrawers:trim', 4),
    item('storagedrawers:trim', 5),
    item('storagedrawers:framingtable'),
    item('framedcompactdrawers:framed_compact_drawer'),
    item('framedcompactdrawers:framed_drawer_controller'),
    item('framedcompactdrawers:framed_slave')
]

for (item in recipesToRemove) {
    crafting.removeByOutput(item)
}

// Upgrade Template
crafting.shapedBuilder()
    .output(item('storagedrawers:upgrade_template'))
    .shape([
        [ore('stickWood'),ore('stickWood'),ore('stickWood')],
        [ore('stickWood'),ore('drawerFramed'),ore('stickWood')],
        [ore('stickWood'),ore('stickWood'),ore('stickWood')]
    ])
    .register()

// Storage Upgrade (I)
crafting.shapedBuilder()
    .output(item('storagedrawers:upgrade_storage'))
    .shape([
        [ore('stickWood'),ore('stickWood'),ore('stickWood')],
        [ore('ingotCopper'),item('storagedrawers:upgrade_template'),ore('ingotCopper')],
        [ore('stickWood'),ore('stickWood'),ore('stickWood')]
    ])
    .register()

// Storage Upgrade (II)
crafting.shapedBuilder()
    .output(item('storagedrawers:upgrade_storage', 1))
    .shape([
        [ore('stickWood'),ore('stickWood'),ore('stickWood')],
        [ore('ingotRoseGold'),item('storagedrawers:upgrade_storage'),ore('ingotRoseGold')],
        [ore('stickWood'),ore('stickWood'),ore('stickWood')]
    ])
    .register()

// Storage Upgrade (III)
crafting.shapedBuilder()
    .output(item('storagedrawers:upgrade_storage', 2))
    .shape([
        [ore('stickWood'),ore('stickWood'),ore('stickWood')],
        [ore('ingotSterlingSilver'),item('storagedrawers:upgrade_storage', 1),ore('ingotSterlingSilver')],
        [ore('stickWood'),ore('stickWood'),ore('stickWood')]
    ])
    .register()

// Storage Upgrade (IV)
crafting.shapedBuilder()
    .output(item('storagedrawers:upgrade_storage', 3))
    .shape([
        [ore('stickWood'),ore('stickWood'),ore('stickWood')],
        [ore('ingotBronze'),item('storagedrawers:upgrade_storage', 2),ore('ingotBronze')],
        [ore('stickWood'),ore('stickWood'),ore('stickWood')]
    ])
    .register()

// Storage Upgrade (V)
crafting.shapedBuilder()
    .output(item('storagedrawers:upgrade_storage', 4))
    .shape([
        [ore('stickWood'),ore('stickWood'),ore('stickWood')],
        [ore('ingotBismuthBronze'),item('storagedrawers:upgrade_storage', 3),ore('ingotBismuthBronze')],
        [ore('stickWood'),ore('stickWood'),ore('stickWood')]
    ])
    .register()

// Storage Downgrade
crafting.shapedBuilder()
    .output(item('storagedrawers:upgrade_one_stack'))
    .shape([
        [ore('stickWood'),ore('stickWood'),ore('stickWood')],
        [ore('cobblestone'),item('storagedrawers:upgrade_template'),ore('cobblestone')],
        [ore('stickWood'),ore('stickWood'),ore('stickWood')]
    ])
    .register()

// Void Upgrade
crafting.shapedBuilder()
    .output(item('storagedrawers:upgrade_void'))
    .shape([
        [ore('stickWood'),ore('stickWood'),ore('stickWood')],
        [ore('ingotBlackBronze'),item('storagedrawers:upgrade_template'),ore('ingotBlackBronze')],
        [ore('stickWood'),ore('stickWood'),ore('stickWood')]
    ])
    .register()

// Conversion Upgrade
crafting.shapedBuilder()
    .output(item('storagedrawers:upgrade_conversion'))
    .shape([
        [ore('gemLapis'),ore('stickWood'),ore('gemLapis')],
        [ore('stickWood'),item('storagedrawers:upgrade_template'),ore('stickWood')],
        [ore('gemLapis'),ore('stickWood'),ore('gemLapis')]
    ])
    .register()

// Drawer Key
crafting.shapedBuilder()
    .output(item('storagedrawers:drawer_key'))
    .shape([
        [ore('stripGold'),ore('ingotGold'),null],
        [null,ore('ingotGold'),null],
        [null,item('storagedrawers:upgrade_template'),null]
    ])
    .register()

// Framing Table
crafting.shapedBuilder()
    .output(item('storagedrawers:framingtable'))
    .shape([
        [null,null,null],
        [ore('plankWood'),ore('plankWood'),ore('plankWood')],
        [ore('plankWood'),null,ore('plankWood')]
    ])
    .register()

// Framed Compacting Drawer
crafting.shapedBuilder()
    .output(item('framedcompactdrawers:framed_compact_drawer'))
    .shape([
        [ore('stickWood'),ore('stickWood'),ore('stickWood')],
        [item('minecraft:piston'),ore('drawerFramed'),item('minecraft:piston')],
        [ore('stickWood'),ore('ingotIron'),ore('stickWood')]
    ])
    .register()

// Framed Compacting Drawer
crafting.shapedBuilder()
    .output(item('framedcompactdrawers:framed_drawer_controller'))
    .shape([
        [ore('stickWood'),ore('stickWood'),ore('stickWood')],
        [item('minecraft:comparator'),ore('drawerFramed'),item('minecraft:comparator')],
        [ore('stickWood'),ore('ingotGold'),ore('stickWood')]
    ])
    .register()

// Framed Compacting Drawer
crafting.shapedBuilder()
    .output(item('framedcompactdrawers:framed_slave'))
    .shape([
        [ore('stickWood'),ore('stickWood'),ore('stickWood')],
        [item('minecraft:comparator'),ore('drawerFramed'),item('minecraft:comparator')],
        [ore('stickWood'),ore('ingotIron'),ore('stickWood')]
    ])
    .register()

// crafting.shapedBuilder()
//     .output(null)
//     .shape([
//         [null,null,null],
//         [null,null,null],
//         [null,null,null]
//     ])
//     .register()

// crafting.shapelessBuilder()
//     .output(null)
//     .input([
//          null
//     ])
//     .register()

