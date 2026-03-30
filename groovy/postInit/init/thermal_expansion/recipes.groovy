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
    item('thermalfoundation:glass', OreDictionary.WILDCARD_VALUE),
    item('thermalfoundation:glass_alloy', OreDictionary.WILDCARD_VALUE),
    item('thermalexpansion:frame'),

]

def recipesToRemoveById = [
    'thermaldynamics:duct_32',
    'thermaldynamics:duct_32_10',
    'thermaldynamics:duct_32_12'
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
    0:"tin",
    1:"invar",
    2:"electrum",
    3:"signalum",
    4:"enderium",
]

for (array in servoRecipes) {
crafting.shapedBuilder()
    .output(item('thermaldynamics:servo', array.key) * 2)
    .shape([
        [ore('strip' + Utils.toPascal(array.value)),ore('blockGlassHardened'),ore('strip' + Utils.toPascal(array.value))],
        [ore('sheet' + Utils.toPascal(array.value)),ore('dustRedstone'),ore('sheet' + Utils.toPascal(array.value))]
    ])
    .register()

crafting.shapedBuilder()
    .output(item('thermaldynamics:filter', array.key) * 2)
    .shape([
        [ore('strip' + Utils.toPascal(array.value)),ore('blockGlassHardened'),ore('strip' + Utils.toPascal(array.value))],
        [ore('sheet' + Utils.toPascal(array.value)),ore('paper'),ore('sheet' + Utils.toPascal(array.value))]
    ])
    .register()

crafting.shapedBuilder()
    .output(item('thermaldynamics:retriever', array.key) * 2)
    .shape([
        [ore('strip' + Utils.toPascal(array.value)),ore('blockGlassHardened'),ore('strip' + Utils.toPascal(array.value))],
        [ore('sheet' + Utils.toPascal(array.value)),item('minecraft:ender_eye'),ore('sheet' + Utils.toPascal(array.value))]
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
