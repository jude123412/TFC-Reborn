import classes.postInit.Utils
import net.minecraftforge.oredict.OreDictionary

// Recipes to remove by output
def recipesToRemoveByOutput = [
    item('immersiveengineering:connector', OreDictionary.WILDCARD_VALUE),
    item('immersiveengineering:metal_device0', OreDictionary.WILDCARD_VALUE),
    item('immersiveengineering:metal_decoration2', 4),
    item('immersiveengineering:stone_decoration', OreDictionary.WILDCARD_VALUE),
    item('immersiveengineering:stone_decoration_stairs_hempcrete'),
    item('immersiveengineering:stone_decoration_stairs_concrete'),
    item('immersiveengineering:stone_decoration_stairs_concrete_tile'),
    item('immersiveengineering:stone_decoration_stairs_concrete_leaded'),
    item('immersiveengineering:treated_wood', OreDictionary.WILDCARD_VALUE),
    item('immersiveengineering:treated_wood_stairs0'),
    item('immersiveengineering:treated_wood_stairs1'),
    item('immersiveengineering:treated_wood_stairs2'),
    item('immersiveengineering:wooden_decoration', OreDictionary.WILDCARD_VALUE),
    item('immersiveengineering:wooden_device0', OreDictionary.WILDCARD_VALUE),
    item('immersiveengineering:wooden_device1', OreDictionary.WILDCARD_VALUE),
    item('immersiveengineering:sheetmetal', OreDictionary.WILDCARD_VALUE),
    item('immersiveengineering:metal', OreDictionary.WILDCARD_VALUE),
    item('immersiveengineering:metal_decoration0', OreDictionary.WILDCARD_VALUE),
]

// Recipe Removal
for (var in recipesToRemoveByOutput) {
    crafting.removeByOutput(var)
}

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

// Blast Brick
crafting.shapedBuilder()
    .output(item('immersiveengineering:stone_decoration', 1))
    .shape([
        [item('tfc:ceramics/fired/fire_brick'),ore('ingotBrick'),item('tfc:ceramics/fired/fire_brick')],
        [ore('ingotBrick'),ore('dustSteel'),ore('ingotBrick')],
        [item('tfc:ceramics/fired/fire_brick'),ore('ingotBrick'),item('tfc:ceramics/fired/fire_brick')]
    ])
    .register()

// Reinforced Blast Brick
crafting.shapelessBuilder()
    .output(item('immersiveengineering:stone_decoration', 2))
    .input([
         ore('sheetSteel'),
         item('immersiveengineering:stone_decoration', 1)
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
        [ore('dustWroughtIron'),ore('blockGlass')],
        [ore('blockGlass'),ore('dyeGreen')],
    ])
    .register()

// Treated Wood Fence
crafting.shapedBuilder()
    .output(item('immersiveengineering:wooden_decoration') * 8)
    .shape([
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
        [ore('sheetSteel'),item('tfc:wooden_bucket').withNbt(['Fluid': ['FluidName': 'fresh_water', 'Amount': 1000]]).transform(Utils.transformerBucket),ore('sheetSteel')],
        [ore('ingotCopper'),item('tfcreborncore:regular/radiator_matrix'),ore('ingotCopper')],
        [ore('sheetSteel'),ore('ingotCopper'),ore('sheetSteel')]
    ])
    .register()

// Steel Fence
crafting.shapedBuilder()
    .output(item('immersiveengineering:metal_decoration1') * 8)
    .shape([
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

// Thermoelectric Generator
crafting.shapedBuilder()
    .output(item('immersiveengineering:metal_device1', 3))
    .shape([
        [ore('ingotSteel'),ore('ingotSteel'),ore('ingotSteel')],
        [ore('sheetConstantan'),item('immersiveengineering:metal_decoration0'),ore('sheetConstantan')],
        [ore('sheetConstantan'),ore('sheetConstantan'),ore('sheetConstantan')]
    ])
    .register()

// Powered Lantern
crafting.shapedBuilder()
    .output(item('immersiveengineering:metal_device1', 4) * 3)
    .shape([
        [null,ore('sheetIron'),null],
        [ore('paneGlass'),ore('electronTube'),ore('paneGlass')],
        [ore('sheetIron'),ore('wireCopper'),ore('sheetIron')]
    ])
    .register()

// Fluid Pipe
crafting.shapedBuilder()
    .output(item('immersiveengineering:metal_device1', 6) * 8)
    .shape([
        [ore('sheetIron'),ore('sheetIron'),ore('sheetIron')],
        [null,null,null],
        [ore('sheetIron'),ore('sheetIron'),ore('sheetIron')]
    ])
    .register()

// Tough Fabric
crafting.shapedBuilder()
    .output(item('immersiveengineering:material', 5))
    .shape([
        [item('tfc:crop/product/jute_fiber'),item('tfc:crop/product/jute_fiber'),item('tfc:crop/product/jute_fiber')],
        [item('tfc:crop/product/jute_fiber'),ore('stickTreatedWood'),item('tfc:crop/product/jute_fiber')],
        [item('tfc:crop/product/jute_fiber'),item('tfc:crop/product/jute_fiber'),item('tfc:crop/product/jute_fiber')]
    ])
    .register()

// Iron Mechanical Component
crafting.shapedBuilder()
    .output(item('immersiveengineering:material', 8))
    .shape([
        [null,ore('sheetIron'),null],
        [ore('sheetIron'),ore('gearCopper'),ore('sheetIron')],
        [null,ore('sheetIron'),null]
    ])
    .register()

// Steel Mechanical Component
crafting.shapedBuilder()
    .output(item('immersiveengineering:material', 9))
    .shape([
        [null,ore('sheetSteel'),null],
        [ore('sheetSteel'),ore('gearAnyBronze'),ore('sheetSteel')],
        [null,ore('sheetSteel'),null]
    ])
    .register()

// Toolbox
crafting.shapedBuilder()
    .output(item('immersiveengineering:toolbox'))
    .shape([
        [ore('sheetAluminium'),ore('sheetAluminium'),ore('sheetAluminium')],
        [ore('dyeRed'),item('immersiveengineering:wooden_device0'),ore('dyeRed')]
    ])
    .register()

// Jerrycan FTW
crafting.shapedBuilder()
    .output(item('immersiveengineering:jerrycan'))
    .shape([
        [null,ore('sheetIron'),ore('sheetIron')],
        [ore('sheetIron'),ore('dyeGreen'),ore('sheetIron')],
        [ore('sheetIron'),ore('sheetIron'),ore('sheetIron')]
    ])
    .register()

// Pressurized Air Tank
crafting.shapedBuilder()
    .output(item('immersiveengineering:toolupgrade'))
    .shape([
        [ore('sheetIron'),ore('dyeBlue'),null],
        [ore('dyeBlue'),ore('sheetIron'),ore('dyeBlue')],
        [null,ore('dyeBlue'),item('immersiveengineering:material', 8)]
    ])
    .register()

// Advanced Lubrication System
crafting.shapedBuilder()
    .output(item('immersiveengineering:toolupgrade', 1))
    .shape([
        [item('tfc:wooden_bucket').withNbt(['Fluid': ['FluidName': 'lubricant', 'Amount': 1000]]).transform(Utils.transformerBucket),ore('ingotIron'),null],
        [ore('ingotIron'),item('tfc:wooden_bucket').withNbt(['Fluid': ['FluidName': 'lubricant', 'Amount': 1000]]).transform(Utils.transformerBucket),ore('ingotIron')],
        [null,ore('ingotIron'),item('immersiveengineering:material', 8)]
    ])
    .register()

// Large Tank
crafting.shapedBuilder()
    .output(item('immersiveengineering:toolupgrade', 3))
    .shape([
        [item('immersiveengineering:material', 8),ore('ingotSteel'),null],
        [ore('ingotSteel'),ore('sheetIron'),ore('dyeRed')],
        [null,ore('dyeRed'),ore('sheetIron')]
    ])
    .register()

// Flashbulb
crafting.shapedBuilder()
    .output(item('immersiveengineering:toolupgrade', 10))
    .shape([
        [ore('sheetAluminium'),ore('paneGlass'),ore('sheetAluminium')],
        [ore('paneGlass'),item('immersiveengineering:material', 26),ore('paneGlass')]
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

// HV Wire Coil
crafting.shapedBuilder()
    .output(item('immersiveengineering:wirecoil', 2) * 4)
    .shape([
        [null,ore('wireSteel'),null],
        [ore('wireSteel'),ore('stickWood'),ore('wireSteel')],
        [null,ore('wireSteel'),null]
    ])
    .register()

// LV Wire Connector
crafting.shapedBuilder()
    .output(item('immersiveengineering:connector'))
    .shape([
        [ore('stickLongCopper')],
        [item('tfcreborncore:regular/ceramic_insulator')],
    ])
    .register()

// LV Wire Relay
crafting.shapedBuilder()
    .output(item('immersiveengineering:connector', 1))
    .shape([
        [ore('stickCopper')],
        [item('tfcreborncore:regular/ceramic_insulator')],
    ])
    .register()

// MV Wire Connector
crafting.shapedBuilder()
    .output(item('immersiveengineering:connector', 2))
    .shape([
        [ore('stickLongIron')],
        [item('tfcreborncore:regular/ceramic_insulator')],
    ])
    .register()

// MV Wire Relay
crafting.shapedBuilder()
    .output(item('immersiveengineering:connector', 3))
    .shape([
        [ore('stickIron')],
        [item('tfcreborncore:regular/ceramic_insulator')],
    ])
    .register()

// HV Wire Connector
crafting.shapedBuilder()
    .output(item('immersiveengineering:connector', 4))
    .shape([
        [ore('stickLongAluminium')],
        [item('tfcreborncore:regular/ceramic_insulator')],
    ])
    .register()

// HV Wire Relay
crafting.shapedBuilder()
    .output(item('immersiveengineering:connector', 5))
    .shape([
        [ore('stickAluminium')],
        [item('tfcreborncore:regular/glass_insulator')],
    ])
    .register()

//Structural Cable Connector
crafting.shapedBuilder()
    .output(item('immersiveengineering:connector', 6))
    .shape([
        [ore('sheetSteel'),ore('stickSteel'),ore('sheetSteel')],
        [ore('sheetSteel'),null,ore('sheetSteel')]
    ])
    .register()

// Transformer
crafting.shapedBuilder()
    .output(item('immersiveengineering:connector', 7))
    .shape([
        [item('immersiveengineering:connector'),item('immersiveengineering:metal_decoration0'),item('immersiveengineering:connector', 2)],
        [ore('sheetIron'),item('immersiveengineering:metal_decoration0', 1),ore('sheetIron')],
        [ore('sheetIron'),ore('sheetIron'),ore('sheetIron')]
    ])
    .register()

// HV Transformer
crafting.shapedBuilder()
    .output(item('immersiveengineering:connector', 8))
    .shape([
        [item('immersiveengineering:connector', 2),item('immersiveengineering:metal_decoration0', 1),item('immersiveengineering:connector', 4)],
        [ore('sheetIron'),item('immersiveengineering:metal_decoration0', 2),ore('sheetIron')],
        [ore('sheetIron'),ore('sheetIron'),ore('sheetIron')]
    ])
    .register()

// Breaker Switch
crafting.shapedBuilder()
    .output(item('immersiveengineering:connector', 9))
    .shape([
        [null,item('minecraft:lever'),null],
        [item('immersiveengineering:connector'),item('tfcreborncore:regular/rf_control_circuit'),item('immersiveengineering:connector')],
        [ore('sheetIron'),ore('sheetIron'),ore('sheetIron')]
    ])
    .register()

// Redstone Breaker
crafting.shapedBuilder()
    .output(item('immersiveengineering:connector', 10))
    .shape([
        [item('immersiveengineering:connector', 4),null,item('immersiveengineering:connector', 4)],
        [ore('sheetIron'),item('minecraft:repeater'),ore('sheetIron')],
        [ore('sheetIron'),ore('dustRedstone'),ore('sheetIron')]
    ])
    .register()

// Current Transformer
crafting.shapedBuilder()
    .output(item('immersiveengineering:connector', 11))
    .shape([
        [null,item('immersiveengineering:tool', 2),null],
        [item('tfcreborncore:regular/ceramic_insulator'),item('immersiveengineering:metal_decoration0'),item('tfcreborncore:regular/ceramic_insulator')],
        [ore('sheetIron'),item('immersiveengineering:metal_decoration0'),ore('sheetIron')]
    ])
    .register()

//Redstone Wire Connector
crafting.shapedBuilder()
    .output(item('immersiveengineering:connector', 12))
    .shape([
        [null,ore('stickElectrum'),null],
        [null,ore('dustRedstone'),null],
        [null,item('tfcreborncore:regular/ceramic_insulator'),null]
    ])
    .register()

// Redstone Probe Connector
crafting.shapedBuilder()
    .output(item('immersiveengineering:connector', 13))
    .shape([
        [null,item('immersiveengineering:connector', 12),null],
        [ore('paneGlassColorless'),item('immersiveengineering:material', 27),ore('paneGlassColorless')],
        [null,ore('gemQuartz'),null]
    ])
    .register()

// LV Capacitor
crafting.shapedBuilder()
    .output(item('immersiveengineering:metal_device0'))
    .shape([
        [ore('sheetIron'),ore('sheetIron'),ore('sheetIron')],
        [ore('sheetCopper'),item('tfcreborncore:regular/basic_capacitor_cell'),ore('sheetCopper')],
        [ore('plankTreatedWood'),item('tfcreborncore:regular/rf_control_circuit'),ore('plankTreatedWood')]
    ])
    .register()

// MV Capacitor
crafting.shapedBuilder()
    .output(item('immersiveengineering:metal_device0', 1))
    .shape([
        [ore('sheetIron'),ore('sheetIron'),ore('sheetIron')],
        [ore('sheetElectrum'),item('tfcreborncore:regular/advanced_capacitor_cell'),ore('sheetElectrum')],
        [ore('plankTreatedWood'),item('tfcreborncore:regular/rf_control_circuit'),ore('plankTreatedWood')]
    ])
    .register()

// HV Capacitor
crafting.shapedBuilder()
    .output(item('immersiveengineering:metal_device0', 2))
    .shape([
        [ore('sheetSteel'),ore('sheetSteel'),ore('sheetSteel')],
        [ore('sheetAluminium'),item('tfcreborncore:regular/hi_tech_capacitor_cell'),ore('sheetAluminium')],
        [ore('plankTreatedWood'),item('tfcreborncore:regular/rf_control_circuit'),ore('plankTreatedWood')]
    ])
    .register()

// Metal Barrel
crafting.shapedBuilder()
    .output(item('immersiveengineering:metal_device0', 4))
    .shape([
        [ore('blockSheetmetalIron'),ore('slabSheetmetalIron'),ore('blockSheetmetalIron')],
        [ore('blockSheetmetalIron'),null,ore('blockSheetmetalIron')],
        [ore('blockSheetmetalIron'),ore('blockSheetmetalIron'),ore('blockSheetmetalIron')]
    ])
    .register()

// Fluid Pump
crafting.shapedBuilder()
    .output(item('immersiveengineering:metal_device0', 5))
    .shape([
        [null,ore('sheetIron'),null],
        [ore('sheetIron'),item('immersiveengineering:material', 8),ore('sheetIron')],
        [item('immersiveengineering:metal_device1', 6),item('immersiveengineering:metal_device1', 6),item('immersiveengineering:metal_device1', 6)]
    ])
    .register()

// Fluid Outlet
crafting.shapedBuilder()
    .output(item('immersiveengineering:metal_device0', 6))
    .shape([
        [ore('sheetIron'),item('minecraft:iron_bars'),ore('sheetIron')],
        [item('minecraft:iron_bars'),null,item('minecraft:iron_bars')],
        [ore('sheetIron'),item('minecraft:iron_bars'),ore('sheetIron')]
    ])
    .register()

// Lantern
crafting.shapedBuilder()
    .output(item('immersiveengineering:metal_decoration2', 4))
    .shape([
        [null,ore('sheetIron'),null],
        [ore('paneGlassColorless'),ore('glowstone'),ore('paneGlassColorless')],
        [null,ore('sheetIron'),null]
    ])
    .register()

// Concrete Tile
crafting.shapelessBuilder()
    .output(item('immersiveengineering:stone_decoration', 6))
    .input([
        item('immersiveengineering:stone_decoration', 5).transform(Utils.transformerTool),
        ore('chisel').transform(Utils.transformerTool)
    ])
    .register()

// Treated Wood Planks
crafting.shapedBuilder()
    .output(item('immersiveengineering:treated_wood'))
    .shape([
        [ore('lumberTreatedWood'),ore('lumberTreatedWood')],
        [ore('lumberTreatedWood'),ore('lumberTreatedWood')]
    ])
    .register()

// Trated Wood Planks (Vertical Planks)
crafting.shapelessBuilder()
    .output(item('immersiveengineering:treated_wood', 1))
    .input([
        item('immersiveengineering:treated_wood'),
        ore('chisel').transform(Utils.transformerTool)
    ])
    .register()

// Trated Wood Planks (Packaged Planks)
crafting.shapelessBuilder()
    .output(item('immersiveengineering:treated_wood', 2))
    .input([
        item('immersiveengineering:treated_wood', 1),
        ore('chisel').transform(Utils.transformerTool)
    ])
    .register()

// Wooden Storage Crate
crafting.shapedBuilder()
    .output(item('immersiveengineering:wooden_device0'))
    .shape([
        [ore('lumberTreatedWood'),ore('lumberTreatedWood'),ore('lumberTreatedWood')],
        [ore('lumberTreatedWood'),null,ore('lumberTreatedWood')],
        [ore('lumberTreatedWood'),ore('lumberTreatedWood'),ore('lumberTreatedWood')]
    ])
    .register()

// Wooden Barrel
crafting.shapedBuilder()
    .output(item('immersiveengineering:wooden_device0', 1))
    .shape([
        [ore('lumberTreatedWood'),ore('slabTreatedWood'),ore('lumberTreatedWood')],
        [ore('lumberTreatedWood'),null,ore('lumberTreatedWood')],
        [ore('lumberTreatedWood'),ore('slabTreatedWood'),ore('lumberTreatedWood')]
    ])
    .register()

// Engineer's Workbench
crafting.shapedBuilder()
    .output(item('immersiveengineering:wooden_device0', 2))
    .shape([
        [ore('ingotDoubleIron'),null,item('immersiveengineering:blueprint')],
        [ore('plankTreatedWood'),ore('plankTreatedWood'),ore('plankTreatedWood')],
        [ore('workbench'),null,ore('fenceTreatedWood')]
    ])
    .register()

// Item Router
crafting.shapedBuilder()
    .output(item('immersiveengineering:wooden_device0', 3))
    .shape([
        [ore('plankTreatedWood'),ore('dustRedstone'),ore('plankTreatedWood')],
        [ore('sheetIron'),item('immersiveengineering:conveyor'),ore('sheetIron')],
        [ore('plankTreatedWood'),item('immersiveengineering:material', 8),ore('plankTreatedWood')]
    ])
    .register()

// Reinforced Storage Crate
crafting.shapedBuilder()
    .output(item('immersiveengineering:wooden_device0', 5))
    .shape([
        [ore('sheetIron'),ore('stickIron'),ore('sheetIron')],
        [ore('stickIron'),item('immersiveengineering:wooden_device0'),ore('stickIron')],
        [ore('sheetIron'),ore('stickIron'),ore('sheetIron')]
    ])
    .register()

// Turntable
crafting.shapedBuilder()
    .output(item('immersiveengineering:wooden_device0', 6))
    .shape([
        [ore('plankTreatedWood'),ore('sheetIron'),ore('plankTreatedWood')],
        [ore('dustRedstone'),item('immersiveengineering:metal_decoration0'),ore('dustRedstone')]
    ])
    .register()

// Fluid Router
crafting.shapedBuilder()
    .output(item('immersiveengineering:wooden_device0', 7))
    .shape([
        [ore('plankTreatedWood'),ore('dustRedstone'),ore('plankTreatedWood')],
        [ore('sheetIron'),item('immersiveengineering:metal_device1', 6),ore('sheetIron')],
        [ore('plankTreatedWood'),item('immersiveengineering:material', 8),ore('plankTreatedWood')]
    ])
    .register()

// Water Wheel
crafting.shapedBuilder()
    .output(item('immersiveengineering:wooden_device1'))
    .shape([
        [item('immersiveengineering:material', 10),item('immersiveengineering:material', 10),item('immersiveengineering:material', 10)],
        [item('immersiveengineering:material', 10),ore('ingotIron'),item('immersiveengineering:material', 10)],
        [item('immersiveengineering:material', 10),item('immersiveengineering:material', 10),item('immersiveengineering:material', 10)]
    ])
    .register()

// Windmill
crafting.shapedBuilder()
    .output(item('immersiveengineering:wooden_device1', 1))
    .shape([
        [item('immersiveengineering:material', 11),item('immersiveengineering:material', 11),item('immersiveengineering:material', 11)],
        [item('immersiveengineering:material', 11),ore('ingotIron'),item('immersiveengineering:material', 11)],
        [item('immersiveengineering:material', 11),item('immersiveengineering:material', 11),item('immersiveengineering:material', 11)]
    ])
    .register()

// Wooden Wallmount
crafting.shapedBuilder()
    .output(item('immersiveengineering:wooden_device1', 4))
    .shape([
        [ore('lumberTreatedWood'),ore('stickTreatedWood')],
        [ore('stickTreatedWood'),ore('lumberTreatedWood')]
    ])
    .register()

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
            [entry.key],
            [entry.key],
            [ore('stoneBrick')]
        ])
        .register()
}