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
    item('thermalfoundation:wrench'),
    item('thermalfoundation:meter'),
    item('thermalfoundation:upgrade'),
    item('thermalfoundation:upgrade', 1),
    item('thermalfoundation:upgrade', 2),
    item('thermalfoundation:upgrade', 3),
    item('thermalfoundation:security'),
    item('thermalfoundation:storage', OreDictionary.WILDCARD_VALUE),
    item('thermalfoundation:storage_alloy', OreDictionary.WILDCARD_VALUE),
    item('thermalfoundation:storage_resource', OreDictionary.WILDCARD_VALUE),
    item('thermalfoundation:bait', OreDictionary.WILDCARD_VALUE),
    item('thermalfoundation:material', OreDictionary.WILDCARD_VALUE),
    item('thermalfoundation:glass', OreDictionary.WILDCARD_VALUE),
    item('thermalfoundation:glass_alloy', OreDictionary.WILDCARD_VALUE),
]

def recipesToRemoveById = [
    'thermaldynamics:duct_32',
    'thermaldynamics:duct_32_10',
    'thermaldynamics:duct_32_12',
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

// Crescent Hammer
crafting.shapedBuilder()
    .output(item('thermalfoundation:wrench'))
    .shape([
        [ore('stickLongIron'),null,ore('stickLongIron')],
        [ore('dyeBlue'),ore('gearTin'),ore('dyeBlue')],
        [ore('dyeBlue'),ore('stickLongIron'),ore('dyeBlue')]
    ])
    .register()

// Multimeter
crafting.shapedBuilder()
    .output(item('thermalfoundation:meter'))
    .shape([
        [ore('sheetCopper'),null,ore('sheetCopper')],
        [ore('sheetLead'),item('thermalfoundation:material', 515),ore('sheetLead')],
        [null,ore('gearGold'),null]
    ])
    .register()

// Hardened Upgrade Kit
crafting.shapedBuilder()
    .output(item('thermalfoundation:upgrade'))
    .shape([
        [null,ore('sheetTin'),null],
        [ore('sheetInvar'),ore('gearAnyBronze'),ore('sheetInvar')],
        [ore('dustRedstone'),ore('sheetTin'),ore('dustRedstone')]
    ])
    .register()

// Reinforced Upgrade Kit
crafting.shapedBuilder()
    .output(item('thermalfoundation:upgrade', 1))
    .shape([
        [null,ore('sheetInvar'),null],
        [ore('sheetElectrum'),ore('gearIron'),ore('sheetElectrum')],
        [ore('dustGlowstone'),ore('sheetInvar'),ore('dustGlowstone')]
    ])
    .register()

// Signalum Upgrade Kit
crafting.shapedBuilder()
    .output(item('thermalfoundation:upgrade', 2))
    .shape([
        [null,ore('sheetElectrum'),null],
        [ore('sheetSignalum'),ore('gearSteel'),ore('sheetSignalum')],
        [ore('dustPyrotheum'),ore('sheetElectrum'),ore('dustPyrotheum')]
    ])
    .register()

// Resonant Upgrade Kit
crafting.shapedBuilder()
    .output(item('thermalfoundation:upgrade', 3))
    .shape([
        [null,ore('sheetSignalum'),null],
        [ore('sheetEnderium'),ore('gearBlackSteel'),ore('sheetEnderium')],
        [ore('dustCryotheum'),ore('sheetSignalum'),ore('dustCryotheum')]
    ])
    .register()

// Signalum Security Lock
crafting.shapedBuilder()
    .output(item('thermalfoundation:security'))
    .shape([
        [null,ore('stickSignalum'),null],
        [ore('stickSignalum'),ore('dustRedstone'),ore('stickSignalum')],
        [ore('sheetSignalum'),ore('sheetSignalum'),ore('sheetSignalum')]
    ])
    .register()

// Redstone Servo
crafting.shapedBuilder()
    .output(item('thermalfoundation:material', 512))
    .shape([
        [ore('ingotRedstone'),ore('stickLongIron'),ore('ingotRedstone')],
        [null,ore('stickLongIron'),null],
        [ore('ingotRedstone'),ore('stickLongIron'),ore('ingotRedstone')]
    ])
    .register()

// Redstone Reception Coil
crafting.shapedBuilder()
    .output(item('thermalfoundation:material', 513))
    .shape([
        [null,ore('dustRedstone'),ore('stickLongGold')],
        [ore('dustRedstone'),ore('ingotGold'),ore('dustRedstone')],
        [ore('stickLongGold'),ore('dustRedstone'),null]
    ])
    .register()

// Redstone Transmission Coil
crafting.shapedBuilder()
    .output(item('thermalfoundation:material', 514))
    .shape([
        [null,ore('dustRedstone'),ore('stickLongSilver')],
        [ore('dustRedstone'),ore('ingotSilver'),ore('dustRedstone')],
        [ore('stickLongSilver'),ore('dustRedstone'),null]
    ])
    .register()

// Redstone Conductanace Coil
crafting.shapedBuilder()
    .output(item('thermalfoundation:material', 515))
    .shape([
        [ore('stickLongElectrum'),ore('dustRedstone'),null],
        [ore('dustRedstone'),ore('ingotElectrum'),ore('dustRedstone')],
        [null,ore('dustRedstone'),ore('stickLongElectrum')]
    ])
    .register()

// Tool Casing
crafting.shapedBuilder()
    .output(item('thermalfoundation:material', 640))
    .shape([
        [null,ore('sheetGold'),null],
        [ore('ingotRedstone'),item('tfcreborncore:item/rf_control_circuit'),ore('ingotRedstone')],
        [null,ore('sheetGold'),null]
    ])
    .register()

// Drill Head
crafting.shapedBuilder()
    .output(item('thermalfoundation:material', 656))
    .shape([
        [ore('sheetIron'),ore('rackwheelPieceIron'),null],
        [ore('rackwheelPieceIron'),ore('sheetIron'),ore('rackwheelPieceIron')],
        [null,ore('rackwheelPieceIron'),ore('sheetIron')]
    ])
    .register()

// Saw Blade
crafting.shapedBuilder()
    .output(item('thermalfoundation:material', 657))
    .shape([
        [null,ore('rackwheelPieceIron'),null],
        [ore('rackwheelPieceIron'),ore('sheetIron'),ore('rackwheelPieceIron')],
        [null,ore('rackwheelPieceIron'),null]
    ])
    .register()

// Pulped Bioblend
crafting.shapelessBuilder()
    .output(item('thermalfoundation:material', 818) * 4)
    .input([
        ore('itemBiomass'),
        ore('itemBiomass'),
        ore('dustWood'),
        ore('dustWood')
    ])
    .register()

// Pyrotheum Dust
crafting.shapelessBuilder()
    .output(item('thermalfoundation:material', 1024) * 2)
    .input([
        ore('dustBlaze'),
        ore('dustBlaze'),
        ore('dustRedstone'),
        ore('dustSulfur')
    ])
    .register()

// Cryotheum Dust
crafting.shapelessBuilder()
    .output(item('thermalfoundation:material', 1025) * 2)
    .input([
        ore('dustBlizz'),
        ore('dustBlizz'),
        ore('dustRedstone'),
        ore('dustSnow')
    ])
    .register()

// Aerotheum Dust
crafting.shapelessBuilder()
    .output(item('thermalfoundation:material', 1026) * 2)
    .input([
        ore('dustBlitz'),
        ore('dustBlitz'),
        ore('dustRedstone'),
        ore('dustSaltpeter')
    ])
    .register()

// Petrotheum Dust
crafting.shapelessBuilder()
    .output(item('thermalfoundation:material', 1027) * 2)
    .input([
        ore('dustBasalz'),
        ore('dustBasalz'),
        ore('dustRedstone'),
        ore('dustObsidian')
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
