// Recipes to remove
def recipesToRemove = [
    'immersiveengineering:stone_decoration/cokebrick',
    'immersiveengineering:stone_decoration/hempcrete',
    'immersiveengineering:stone_decoration/concrete2',
    'immersiveengineering:stone_decoration/concrete',
    'immersiveengineering:stone_decoration/concrete_leaded',
    'immersiveengineering:stone_decoration/hempcrete_stairs',
    'immersiveengineering:stone_decoration/concrete_stairs',
    'immersiveengineering:stone_decoration/concrete_tile_stairs',
    'immersiveengineering:stone_decoration/concrete_leaded_stairs',
    'immersiveengineering:stone_decoration/insulating_glass',
    'immersiveengineering:stone_decoration/alloybrick',
    'immersiveengineering:treated_wood/treated_wood',
    'immersiveengineering:treated_wood/treated_wood_stairs0',
    'immersiveengineering:treated_wood/treated_wood_stairs1',
    'immersiveengineering:treated_wood/treated_wood_stairs2',
    'immersiveengineering:treated_wood/treated_wood_fence',
    'immersiveengineering:treated_wood/treated_wood_scaffolding',
    'immersiveengineering:wooden_devices/reinforced_crate',
    'immersiveengineering:wooden_devices/post',
    'immersiveengineering:sheetmetal/copper_sheetmetal',
    'immersiveengineering:sheetmetal/aluminum_sheetmetal',
    'immersiveengineering:sheetmetal/lead_sheetmetal',
    'immersiveengineering:sheetmetal/silver_sheetmetal',
    'immersiveengineering:sheetmetal/nickel_sheetmetal',
    'immersiveengineering:sheetmetal/uranium_sheetmetal',
    'immersiveengineering:sheetmetal/constantan_sheetmetal',
    'immersiveengineering:sheetmetal/electrum_sheetmetal',
    'immersiveengineering:sheetmetal/steel_sheetmetal',
    'immersiveengineering:sheetmetal/iron_sheetmetal',
    'immersiveengineering:sheetmetal/gold_sheetmetal',
    'immersiveengineering:metal_decoration/coil_copper',
    'immersiveengineering:metal_decoration/coil_electrum',
    'immersiveengineering:metal_decoration/coil_hv',
    'immersiveengineering:metal_decoration/redstone_engineering',
    'immersiveengineering:metal_decoration/light_engineering',
    'immersiveengineering:metal_decoration/heavy_engineering',
    'immersiveengineering:metal_decoration/generator',
    'immersiveengineering:metal_decoration/radiator',
    'immersiveengineering:metal_decoration/steel_fence',
    'immersiveengineering:metal_decoration/steel_scaffolding',
    'immersiveengineering:metal_decoration/aluminum_fence',
    'immersiveengineering:metal_decoration/aluminum_scaffolding',
    'immersiveengineering:metal_decoration/steel_post',
    'immersiveengineering:metal_decoration/aluminum_post',
    'immersiveengineering:metal_decoration/structural_arm_steel',
    'immersiveengineering:metal_decoration/structural_arm_alu',
    'immersiveengineering:metal_decoration/steel_scaffolding_stairs0',
    'immersiveengineering:metal_decoration/steel_scaffolding_stairs1',
    'immersiveengineering:metal_decoration/steel_scaffolding_stairs2',
    'immersiveengineering:metal_decoration/aluminum_scaffolding_stairs0',
    'immersiveengineering:metal_decoration/aluminum_scaffolding_stairs1',
    'immersiveengineering:metal_decoration/aluminum_scaffolding_stairs2',
    'immersiveengineering:metal_decoration/ladder',
]

// Stair Recipes
def stairItems = [
    (item('immersiveengineering:stone_decoration', 4)):(item('immersiveengineering:stone_decoration_stairs_hempcrete') * 8),
    (item('immersiveengineering:stone_decoration', 5)):(item('immersiveengineering:stone_decoration_stairs_concrete') * 8),
    (item('immersiveengineering:stone_decoration', 6)):(item('immersiveengineering:stone_decoration_stairs_concrete_tile') * 8),
    (item('immersiveengineering:stone_decoration', 7)):(item('immersiveengineering:stone_decoration_stairs_concrete_leaded') * 8),
    (item('immersiveengineering:treated_wood')):(item('immersiveengineering:treated_wood_stairs0') * 8),
    (item('immersiveengineering:treated_wood', 1)):(item('immersiveengineering:treated_wood_stairs1') * 8),
    (item('immersiveengineering:treated_wood', 2)):(item('immersiveengineering:treated_wood_stairs2') * 8),
    (item('immersiveengineering:metal_decoration1', 1)):(item('immersiveengineering:steel_scaffolding_stairs0') * 8),
    (item('immersiveengineering:metal_decoration1', 2)):(item('immersiveengineering:steel_scaffolding_stairs1') * 8),
    (item('immersiveengineering:metal_decoration1', 3)):(item('immersiveengineering:steel_scaffolding_stairs2') * 8),
    (item('immersiveengineering:metal_decoration1', 5)):(item('immersiveengineering:aluminum_scaffolding_stairs0') * 8),
    (item('immersiveengineering:metal_decoration1', 6)):(item('immersiveengineering:aluminum_scaffolding_stairs1') * 8),
    (item('immersiveengineering:metal_decoration1', 7)):(item('immersiveengineering:aluminum_scaffolding_stairs2') * 8),
]

// Sheet Metal Recipes
def sheetMetalItems = [
    (ore('sheetCopper')):(item('immersiveengineering:sheetmetal') * 8),
    (ore('sheetAluminium')):(item('immersiveengineering:sheetmetal', 1) * 8),
    (ore('sheetLead')):(item('immersiveengineering:sheetmetal', 2) * 8),
    (ore('sheetSilver')):(item('immersiveengineering:sheetmetal', 3) * 8),
    (ore('sheetNickel')):(item('immersiveengineering:sheetmetal', 4) * 8),
    (ore('sheetUranium')):(item('immersiveengineering:sheetmetal', 5) * 8),
    (ore('sheetConstantan')):(item('immersiveengineering:sheetmetal', 6) * 8),
    (ore('sheetElectrum')):(item('immersiveengineering:sheetmetal', 7) * 8),
    (ore('sheetSteel')):(item('immersiveengineering:sheetmetal', 8) * 8),
    (ore('sheetIron')):(item('immersiveengineering:sheetmetal', 9) * 8),
    (ore('sheetGold')):(item('immersiveengineering:sheetmetal', 10) * 8),
]

// Post Recipes
def postItems = [
    (ore('fenceTreatedWood')):(item('immersiveengineering:wooden_device1', 3)),
    (ore('fenceSteel')):(item('immersiveengineering:metal_decoration2')),
    (ore('fenceAluminum')):(item('immersiveengineering:metal_decoration2', 2))
]

def ladderItems = [
    ore('stickIron'),
    ore('stickAluminum'),
    ore('stickSteel')
]

// Coke Oven
crafting.shapedBuilder()
    .output(item('immersiveengineering:stone_decoration'))
    .shape([
        [ore('clay'),ore('ingotBrick'),ore('clay')],
        [ore('ingotBrick'),ore('stoneBrick'),ore('ingotBrick')],
        [ore('clay'),ore('ingotBrick'),ore('clay')]
    ])
    .register()

// Hempcrete
crafting.shapelessBuilder()
    .output(item('immersiveengineering:stone_decoration', 4) * 2)
    .input([
        item('tfc:crop/product/jute_fiber'),
        item('tfc:aggregate'),
        item('tfc:aggregate'),
    ])
    .register()

// Concrete
crafting.shapelessBuilder()
    .output(item('immersiveengineering:stone_decoration', 5) * 2)
    .input([
        ore('clay'),
        item('tfc:aggregate'),
        item('tfc:aggregate'),
        ore('dustLime')
    ])
    .register()
crafting.shapelessBuilder()
    .output(item('immersiveengineering:stone_decoration', 5) * 4)
    .input([
        ore('crystalSlag'),
        item('tfc:aggregate'),
        item('tfc:aggregate'),
        ore('dustLime')
    ])
    .register()

// Leaded Concrete
crafting.shapelessBuilder()
    .output(item('immersiveengineering:stone_decoration', 7) * 2)
    .input([
        ore('sheetLead'),
        item('immersiveengineering:stone_decoration', 5),
        item('immersiveengineering:stone_decoration', 5)
    ])
    .register()

// Insulating Glass
crafting.shapedBuilder()
    .output(item('immersiveengineering:stone_decoration', 8) * 2)
    .shape([
        [ore('dustWroughtIron'),ore('blockGlass'),null],
        [ore('blockGlass'),ore('dyeGreen'),null],
        [null,null,null]
    ])
    .register()

// Treated Wood Fence
crafting.shapedBuilder()
    .output(item('immersiveengineering:wooden_decoration') * 8)
    .shape([
        [null,null,null],
        [ore('plankTreatedWood'),ore('stickTreatedWood'),ore('plankTreatedWood')],
        [ore('plankTreatedWood'),ore('stickTreatedWood'),ore('plankTreatedWood')]
    ])
    .register()

// Treated Wood Scaffolding
crafting.shapedBuilder()
    .output(item('immersiveengineering:wooden_decoration', 1) * 8)
    .shape([
        [ore('stickTreatedWood'),ore('plankTreatedWood'),ore('stickTreatedWood')],
        [ore('plankTreatedWood'),ore('stickTreatedWood'),ore('plankTreatedWood')],
        [ore('stickTreatedWood'),ore('plankTreatedWood'),ore('stickTreatedWood')]
    ])
    .register()

// Reinforced Storage Crate
crafting.shapedBuilder()
    .output(item('immersiveengineering:wooden_device0', 5))
    .shape([
        [ore('plankTreatedWood'),ore('sheetIron'),ore('plankTreatedWood')],
        [ore('stickIron'),item('immersiveengineering:wooden_device0'),ore('stickIron')],
        [ore('plankTreatedWood'),ore('sheetIron'),ore('plankTreatedWood')]
    ])
    .register()

// Copper Coil Block
crafting.shapedBuilder()
    .output(item('immersiveengineering:metal_decoration0'))
    .shape([
        [item('immersiveengineering:wirecoil'),item('immersiveengineering:wirecoil'),item('immersiveengineering:wirecoil')],
        [item('immersiveengineering:wirecoil'),ore('stickLongIron'),item('immersiveengineering:wirecoil')],
        [item('immersiveengineering:wirecoil'),item('immersiveengineering:wirecoil'),item('immersiveengineering:wirecoil')]
    ])
    .register()

// Electrum Coil Block
crafting.shapedBuilder()
    .output(item('immersiveengineering:metal_decoration0', 1))
    .shape([
        [item('immersiveengineering:wirecoil', 1),item('immersiveengineering:wirecoil', 1),item('immersiveengineering:wirecoil', 1)],
        [item('immersiveengineering:wirecoil', 1),ore('stickLongIron'),item('immersiveengineering:wirecoil', 1)],
        [item('immersiveengineering:wirecoil', 1),item('immersiveengineering:wirecoil', 1),item('immersiveengineering:wirecoil', 1)]
    ])
    .register()

// High-Voltage Coil Block
crafting.shapedBuilder()
    .output(item('immersiveengineering:metal_decoration0', 2))
    .shape([
        [item('immersiveengineering:wirecoil', 2),item('immersiveengineering:wirecoil', 2),item('immersiveengineering:wirecoil', 2)],
        [item('immersiveengineering:wirecoil', 2),ore('stickLongIron'),item('immersiveengineering:wirecoil', 2)],
        [item('immersiveengineering:wirecoil', 2),item('immersiveengineering:wirecoil', 2),item('immersiveengineering:wirecoil', 2)]
    ])
    .register()

// Redstone Engineering Block
crafting.shapedBuilder()
    .output(item('immersiveengineering:metal_decoration0', 3) * 4)
    .shape([
        [ore('sheetIron'),item('minecraft:redstone'),ore('sheetIron')],
        [item('minecraft:redstone'),ore('gearCopper'),item('minecraft:redstone')],
        [ore('sheetIron'),item('minecraft:redstone'),ore('sheetIron')]
    ])
    .register()

// Light Engineering Block
crafting.shapedBuilder()
    .output(item('immersiveengineering:metal_decoration0', 4) * 4)
    .shape([
        [ore('sheetIron'),item('immersiveengineering:material', 8),ore('sheetIron')],
        [item('minecraft:piston'),ore('gearCopper'),item('minecraft:piston')],
        [ore('sheetIron'),item('immersiveengineering:material', 8),ore('sheetIron')]
    ])
    .register()

// Heavy Engineering Block
crafting.shapedBuilder()
    .output(item('immersiveengineering:metal_decoration0', 5) * 4)
    .shape([
        [ore('sheetSteel'),item('immersiveengineering:material', 9),ore('sheetSteel')],
        [item('minecraft:piston'),ore('gearElectrum'),item('minecraft:piston')],
        [ore('sheetSteel'),item('immersiveengineering:material', 9),ore('sheetSteel')]
    ])
    .register()

// Generator Block
crafting.shapedBuilder()
    .output(item('immersiveengineering:metal_decoration0', 6) * 2)
    .shape([
        [ore('sheetSteel'),ore('sheetSteel'),ore('sheetSteel')],
        [ore('gearElectrum'),item('immersiveengineering:metal_device1', 2),ore('gearElectrum')],
        [ore('sheetSteel'),ore('sheetSteel'),ore('sheetSteel')]
    ])
    .register()

// Radiator Block
crafting.shapedBuilder()
    .output(item('immersiveengineering:metal_decoration0', 7) * 2)
    .shape([
        [ore('sheetSteel'),ore('ingotCopper'),ore('sheetSteel')],
        [ore('ingotCopper'),ore('gearIron'),ore('ingotCopper')],
        [ore('sheetSteel'),ore('ingotCopper'),ore('sheetSteel')]
    ])
    .register()

// Steel Fence
crafting.shapedBuilder()
    .output(item('immersiveengineering:metal_decoration1') * 8)
    .shape([
        [null,null,null],
        [ore('ingotSteel'),ore('stickSteel'),ore('ingotSteel')],
        [ore('ingotSteel'),ore('stickSteel'),ore('ingotSteel')]
    ])
    .register()

// Steel Scaffolding
crafting.shapedBuilder()
    .output(item('immersiveengineering:metal_decoration1', 1) * 8)
    .shape([
        [ore('stickSteel'),ore('ingotSteel'),ore('stickSteel')],
        [ore('ingotSteel'),ore('stickSteel'),ore('ingotSteel')],
        [ore('stickSteel'),ore('ingotSteel'),ore('stickSteel')]
    ])
    .register()

// Aluminium Fence
crafting.shapedBuilder()
    .output(item('immersiveengineering:metal_decoration1', 4) * 8)
    .shape([
        [null,null,null],
        [ore('ingotAluminum'),ore('stickAluminum'),ore('ingotAluminum')],
        [ore('ingotAluminum'),ore('stickAluminum'),ore('ingotAluminum')]
    ])
    .register()

// Aluminium Scaffolding
crafting.shapedBuilder()
    .output(item('immersiveengineering:metal_decoration1', 5) * 8)
    .shape([
        [ore('stickAluminum'),ore('ingotAluminum'),ore('stickAluminum')],
        [ore('ingotAluminum'),ore('stickAluminum'),ore('ingotAluminum')],
        [ore('stickAluminum'),ore('ingotAluminum'),ore('stickAluminum')]
    ])
    .register()


// Steel Structural Arm
crafting.shapedBuilder()
    .output(item('immersiveengineering:metal_decoration2', 7) * 8)
    .shape([
        [ore('scaffoldingSteel'),ore('scaffoldingSteel'),ore('scaffoldingSteel')],
        [ore('scaffoldingSteel'),ore('scaffoldingSteel'),null],
        [ore('scaffoldingSteel'),null,null]
    ])
    .register()

// Aluminium Structural Arm
crafting.shapedBuilder()
    .output(item('immersiveengineering:metal_decoration2', 8) * 8)
    .shape([
        [ore('scaffoldingAluminum'),ore('scaffoldingAluminum'),ore('scaffoldingAluminum')],
        [ore('scaffoldingAluminum'),ore('scaffoldingAluminum'),null],
        [ore('scaffoldingAluminum'),null,null]
    ])
    .register()

// Recipe Builder for Metal Ladder
for (key in ladderItems) {
    crafting.shapedBuilder()
        .output(item('immersiveengineering:metal_ladder') * 16)
        .shape([
            [key,null,key],
            [key,null,key],
            [key,null,key]
        ])
        .register()
}

// Recipe Builder for Stairs
for (entry in stairItems) {
    crafting.shapedBuilder()
        .output(entry.value)
        .shape([
            [entry.key,null,null],
            [entry.key,entry.key,null],
            [entry.key,entry.key,entry.key]
        ])
        .register()
}

// Recipe Builder for Sheet Metal
for (entry in sheetMetalItems) {
    crafting.shapedBuilder()
        .output(entry.value)
        .shape([
            [null,entry.key,null],
            [entry.key,null,entry.key],
            [null,entry.key,null]
        ])
        .register()
}

// Recipe Builder for Pole
for (entry in postItems) {
    crafting.shapedBuilder()
        .output(entry.value)
        .shape([
            [null,entry.key,null],
            [null,entry.key,null],
            [null,ore('stoneBrick'),null]
        ])
        .register()
}

// Recipe Removal
for (id in recipesToRemove) {
    crafting.remove(id)
}

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