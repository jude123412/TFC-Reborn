import net.minecraftforge.oredict.OreDictionary
import classes.postInit.Utils

def recipesToRemoveByOutput = [
    item('thermalcultivation:watering_can', OreDictionary.WILDCARD_VALUE),
    item('thermaldynamics:duct_0'),
    item('thermaldynamics:duct_0', 1),
    item('thermaldynamics:duct_0', 3),
    item('thermaldynamics:duct_0', 4),
    item('thermaldynamics:duct_0', 6),
    item('thermaldynamics:duct_0', 7),
    item('thermaldynamics:duct_0', 8),
    item('thermaldynamics:duct_0', 9),
    item('thermaldynamics:duct_16'),
    item('thermaldynamics:duct_16', 1),
    item('thermaldynamics:duct_16', 2),
    item('thermaldynamics:duct_16', 3),
    item('thermaldynamics:duct_16', 4),
    item('thermaldynamics:duct_16', 5),
    item('thermaldynamics:duct_16', 6),
    item('thermaldynamics:duct_16', 7),
    item('thermaldynamics:duct_32', 1),
    item('thermaldynamics:duct_32', 3),
    item('thermaldynamics:duct_32', 4),
    item('thermaldynamics:duct_32', 5),
    item('thermaldynamics:duct_32', 6),
    item('thermaldynamics:duct_32', 7),
    item('thermaldynamics:duct_48'),
    item('thermaldynamics:duct_64', 1),
    item('thermaldynamics:duct_64', 3),
    item('thermaldynamics:servo', OreDictionary.WILDCARD_VALUE),
    item('thermaldynamics:filter', OreDictionary.WILDCARD_VALUE),
    item('thermaldynamics:retriever', OreDictionary.WILDCARD_VALUE),
    item('thermaldynamics:relay'),
    item('thermalexpansion:machine', OreDictionary.WILDCARD_VALUE),
    item('thermalfoundation:glass', OreDictionary.WILDCARD_VALUE),
    item('thermalfoundation:glass_alloy', OreDictionary.WILDCARD_VALUE),
    item('thermalexpansion:frame'),
]

def recipesToRemoveById = [
    'thermaldynamics:duct_32',
    'thermaldynamics:duct_32_10',
    'thermaldynamics:duct_32_12',
    'thermalexpansion:satchel',
    'thermalexpansion:satchel_1',
]

// Recipe Removal
for (output in recipesToRemoveByOutput) {
    crafting.removeByOutput(output)
}

// Recipe Removal
for (id in recipesToRemoveById) {
    crafting.remove(id)
}

def servoRecipes = [
    "tin":0,
    "silver":0,
    "zinc":0,
    "invar":1,
    "electrum":2,
    "signalum":3,
    "enderium":4,
]

for (entry in servoRecipes) {
crafting.shapedBuilder()
    .output(item('thermaldynamics:servo', entry.value) * 2)
    .shape([
        [ore('strip' + Utils.toPascal(entry.key)),ore('blockGlassHardened'),ore('strip' + Utils.toPascal(entry.key))],
        [ore('sheet' + Utils.toPascal(entry.key)),ore('dustRedstone'),ore('sheet' + Utils.toPascal(entry.key))]
    ])
    .register()

crafting.shapedBuilder()
    .output(item('thermaldynamics:filter', entry.value) * 2)
    .shape([
        [ore('strip' + Utils.toPascal(entry.key)),ore('blockGlassHardened'),ore('strip' + Utils.toPascal(entry.key))],
        [ore('sheet' + Utils.toPascal(entry.key)),ore('paper'),ore('sheet' + Utils.toPascal(entry.key))]
    ])
    .register()

crafting.shapedBuilder()
    .output(item('thermaldynamics:retriever', entry.value) * 2)
    .shape([
        [ore('strip' + Utils.toPascal(entry.key)),ore('blockGlassHardened'),ore('strip' + Utils.toPascal(entry.key))],
        [ore('sheet' + Utils.toPascal(entry.key)),item('minecraft:ender_eye'),ore('sheet' + Utils.toPascal(entry.key))]
    ])
    .register()
}

// Fluiduct
crafting.shapedBuilder()
    .output(item('thermaldynamics:duct_16') * 8)
    .shape([
        [ore('sheetCopper'),ore('blockGlassHardened'),ore('sheetCopper')],
    ])
    .register()

// Hardened Fluiduct
crafting.shapedBuilder()
    .output(item('thermaldynamics:duct_16', 2) * 8)
    .shape([
        [ore('sheetSterlingSilver'),ore('blockGlassHardened'),ore('sheetSterlingSilver')],
    ])
    .register()

// Super-Laminar Fluiduct
crafting.shapedBuilder()
    .output(item('thermaldynamics:duct_16', 6))
    .shape([
        [ore('blockGlassHardened'),ore('blockGlassHardened'),ore('blockGlassHardened')],
        [ore('sheetAnyBronze'),item('thermaldynamics:duct_16', 2),ore('sheetAnyBronze')],
        [ore('blockGlassHardened'),ore('blockGlassHardened'),ore('blockGlassHardened')]
    ])
    .register()

// Itemduct
crafting.shapedBuilder()
    .output(item('thermaldynamics:duct_32') * 8)
    .shape([
        [ore('sheetTin'),ore('blockGlassHardened'),ore('sheetTin')]
    ])
    .register()

//Structuralduct
crafting.shapedBuilder()
    .output(item('thermaldynamics:duct_48') * 16)
    .shape([
        [ore('nuggetIron'),ore('sheetLead'),ore('nuggetIron')]
    ])
    .register()

// Long Range Viaduct
crafting.shapedBuilder()
    .output(item('thermaldynamics:duct_64', 1) * 32)
    .shape([
        [ore('sheetLead'),ore('blockGlassHardened'),ore('sheetLead')],
        [ore('blockGlassHardened'),null,ore('blockGlassHardened')],
        [ore('sheetLead'),ore('blockGlassHardened'),ore('sheetLead')]
    ])
    .register()

// Viaduct (Untreated)
crafting.shapedBuilder()
    .output(item('thermaldynamics:duct_64', 3) * 16)
    .shape([
        [ore('sheetAnyBronze'),ore('blockGlassHardened'),ore('sheetAnyBronze')],
        [ore('blockGlassHardened'),null,ore('blockGlassHardened')],
        [ore('sheetAnyBronze'),ore('blockGlassHardened'),ore('sheetAnyBronze')]
    ])
    .register()

// Redstone Relay
crafting.shapedBuilder()
    .output(item('thermaldynamics:relay') * 2)
    .shape([
        [ore('stripSignalum'),ore('gemQuartz'),ore('stripSignalum')],
        [ore('sheetLead'),ore('dustRedstone'),ore('sheetLead')]
    ])
    .register()

// Redstone Furnace
crafting.shapedBuilder()
    .output(item('thermalexpansion:machine'))
    .shape([
        [null,ore('inductorCopper'),null],
        [item('tfc:fire_bricks'),item('thermalexpansion:frame'),item('tfc:fire_bricks')],
        [ore('gearCopper'),item('thermalfoundation:material', 513),ore('gearCopper')]
    ])
    .register()

// Pulverizer
crafting.shapedBuilder()
    .output(item('thermalexpansion:machine', 1))
    .shape([
        [null,item('minecraft:flint'),null],
        [ore('rackwheelAnyBronze'),item('thermalexpansion:frame'),ore('rackwheelAnyBronze')],
        [ore('gearCopper'),item('thermalfoundation:material', 513),ore('gearCopper')]
    ])
    .register()

// Sawmill
crafting.shapedBuilder()
    .output(item('thermalexpansion:machine', 2))
    .shape([
        [null,item('thermalfoundation:material', 657),null],
        [ore('plankWood'),item('thermalexpansion:frame'),ore('plankWood')],
        [ore('gearIron'),item('thermalfoundation:material', 513),ore('gearIron')]
    ])
    .register()

// Induction Smelter
crafting.shapedBuilder()
    .output(item('thermalexpansion:machine', 3))
    .shape([
        [null,ore('gearInvar'),null],
        [ore('sand'),item('thermalexpansion:frame'),ore('sand')],
        [ore('gearIron'),item('thermalfoundation:material', 513),ore('gearIron')]
    ])
    .register()

// Phytogenic Insulator
crafting.shapedBuilder()
    .output(item('thermalexpansion:machine', 4))
    .shape([
        [null,ore('gearLumium'),null],
        [ore('dirt'),item('thermalexpansion:frame'),ore('dirt')],
        [ore('gearSignalum'),item('thermalfoundation:material', 513),ore('gearSignalum')]
    ])
    .register()

// Compactor
crafting.shapedBuilder()
    .output(item('thermalexpansion:machine', 5))
    .shape([
        [null,item('minecraft:piston'),null],
        [ore('ingotAnyBronze'),item('thermalexpansion:frame'),ore('ingotAnyBronze')],
        [ore('gearCopper'),item('thermalfoundation:material', 513),ore('gearCopper')]
    ])
    .register()

// Magma Crucible
crafting.shapedBuilder()
    .output(item('thermalexpansion:machine', 6))
    .shape([
        [null,ore('inductorCopper'),null],
        [item('tfc:fire_bricks'),item('thermalexpansion:frame'),item('tfc:fire_bricks')],
        [ore('gearSignalum'),item('thermalfoundation:material', 513),ore('gearSignalum')]
    ])
    .register()

// Fractionating Still
crafting.shapedBuilder()
    .output(item('thermalexpansion:machine', 7))
    .shape([
        [null,ore('gearIridium'),null],
        [ore('blockGlassHardened'),item('thermalexpansion:frame'),ore('blockGlassHardened')],
        [ore('gearIron'),item('thermalfoundation:material', 513),ore('gearIron')]
    ])
    .register()

// Fluid Transposer
crafting.shapedBuilder()
    .output(item('thermalexpansion:machine', 8))
    .shape([
        [null,ore('gearGold'),null],
        [ore('blockGlassHardened'),item('thermalexpansion:frame'),ore('blockGlassHardened')],
        [ore('gearLumium'),item('thermalfoundation:material', 513),ore('gearLumium')]
    ])
    .register()

// Energetic Infuser
crafting.shapedBuilder()
    .output(item('thermalexpansion:machine', 9))
    .shape([
        [null,ore('gearRedAlloy'),null],
        [item('thermalfoundation:material', 514),item('thermalexpansion:frame'),item('thermalfoundation:material', 514)],
        [ore('gearSignalum'),item('thermalfoundation:material', 513),ore('gearSignalum')]
    ])
    .register()

// Centrifugal Separator
crafting.shapedBuilder()
    .output(item('thermalexpansion:machine', 10))
    .shape([
        [null,ore('rackwheelArdite'),null],
        [ore('ingotConstantan'),item('thermalexpansion:frame'),ore('ingotConstantan')],
        [ore('gearIron'),item('thermalfoundation:material', 513),ore('gearIron')]
    ])
    .register()

// Sequential Fabricator
crafting.shapedBuilder()
    .output(item('thermalexpansion:machine', 11))
    .shape([
        [null,ore('workbench'),null],
        [ore('ingotTin'),item('thermalexpansion:frame'),ore('ingotTin')],
        [ore('gearCopper'),item('thermalfoundation:material', 513),ore('gearCopper')]
    ])
    .register()

// Sequential Fabricator Alt 1
crafting.shapedBuilder()
    .output(item('thermalexpansion:machine', 11))
    .shape([
        [null,ore('workbench'),null],
        [ore('ingotSilver'),item('thermalexpansion:frame'),ore('ingotSilver')],
        [ore('gearCopper'),item('thermalfoundation:material', 513),ore('gearCopper')]
    ])
    .register()

// Sequential Fabricator Alt 2
crafting.shapedBuilder()
    .output(item('thermalexpansion:machine', 11))
    .shape([
        [null,ore('workbench'),null],
        [ore('ingotZinc'),item('thermalexpansion:frame'),ore('ingotZinc')],
        [ore('gearCopper'),item('thermalfoundation:material', 513),ore('gearCopper')]
    ])
    .register()

// Alchemical Imbuer
crafting.shapedBuilder()
    .output(item('thermalexpansion:machine', 12))
    .shape([
        [null,ore('stickArdite'),null],
        [ore('blockGlassHardened'),item('thermalexpansion:frame'),ore('blockGlassHardened')],
        [ore('gearEnderium'),item('thermalfoundation:material', 513),ore('gearEnderium')]
    ])
    .register()

// Arcane Ensorcellator
crafting.shapedBuilder()
    .output(item('thermalexpansion:machine', 13))
    .shape([
        [null,ore('gemExquisiteDiamond'),null],
        [ore('blockLapis'),item('thermalexpansion:frame'),ore('blockLapis')],
        [ore('gearSteel'),item('thermalfoundation:material', 513),ore('gearSteel')]
    ])
    .register()

// Glacial Precipitator
crafting.shapedBuilder()
    .output(item('thermalexpansion:machine', 14))
    .shape([
        [null,ore('gemExquisiteJasper'),null],
        [ore('ingotLumium'),item('thermalexpansion:frame'),ore('ingotLumium')],
        [ore('gearEnderium'),item('thermalfoundation:material', 513),ore('gearEnderium')]
    ])
    .register()

// Igneous Extruder
crafting.shapedBuilder()
    .output(item('thermalexpansion:machine', 15))
    .shape([
        [null,ore('gemExquisiteGarnet'),null],
        [ore('ingotSignalum'),item('thermalexpansion:frame'),ore('ingotLumium')],
        [ore('gearEnderium'),item('thermalfoundation:material', 513),ore('gearEnderium')]
    ])
    .register()




// Satchel
crafting.shapedBuilder()
    .output(item('thermalexpansion:satchel'))
    .shape([
        [null,ore('leather'),null],
        [ore('ingotTin'),ore('chestWood'),ore('ingotTin')],
        [ore('leather'),null,ore('leather')]
    ])
    .register()

// Satchel Alt
crafting.shapedBuilder()
    .output(item('thermalexpansion:satchel'))
    .shape([
        [null,ore('blockRockwool'),null],
        [ore('ingotTin'),ore('chestWood'),ore('ingotTin')],
        [ore('blockRockwool'),null,ore('blockRockwool')]
    ])
    .register()





// Machine Frame
crafting.shapedBuilder()
    .output(item('thermalexpansion:frame'))
    .shape([
        [ore('sheetAnyBronze'),ore('blockGlassHardened'),ore('sheetAnyBronze')],
        [ore('blockGlassHardened'),item('tfcreborncore:item/rf_control_circuit'),ore('blockGlassHardened')],
        [ore('sheetAnyBronze'),ore('blockGlassHardened'),ore('sheetAnyBronze')]
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
