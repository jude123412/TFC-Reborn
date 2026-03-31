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
    item('thermalexpansion:device', OreDictionary.WILDCARD_VALUE),
    item('thermalexpansion:dynamo', OreDictionary.WILDCARD_VALUE),
    item('thermalexpansion:cell'),
    item('thermalexpansion:tank'),
    item('thermalexpansion:cache'),
    item('thermalexpansion:strongbox'),
    item('thermalexpansion:capacitor', OreDictionary.WILDCARD_VALUE),
    item('thermalexpansion:reservoir', OreDictionary.WILDCARD_VALUE),
    item('thermalexpansion:frame'),
    item('thermalexpansion:frame', 64),
    item('thermalexpansion:frame', 128),
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
    'thermalexpansion:satchel',
    'thermalexpansion:satchel_1',
    'thermalexpansion:satchel_2',
    'thermalexpansion:satchel_3',
    'thermalexpansion:satchel_4',
    'thermalexpansion:satchel_5',
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
        [ore('gearSteel'),item('thermalfoundation:material', 513),ore('gearSteel')]
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

// Thermal Mediator
crafting.shapedBuilder()
    .output(item('thermalexpansion:device', 2))
    .shape([
        [null,ore('ingotCopper'),null],
        [ore('sheetInvar'),item('thermalexpansion:frame', 64),ore('sheetInvar')],
        [ore('gearIron'),item('thermalfoundation:material', 512),ore('gearIron')]
    ])
    .register()

// Arboreal Extractor
crafting.shapedBuilder()
    .output(item('thermalexpansion:device', 3))
    .shape([
        [null,ore('groveIron'),null],
        [item('tfctech:ceramics/fluid_bowl'),item('thermalexpansion:frame', 64),item('tfctech:ceramics/fluid_bowl')],
        [ore('gearIron'),item('thermalfoundation:material', 512),ore('gearIron')]
    ])
    .register()

// Lexical Transmuter
crafting.shapedBuilder()
    .output(item('thermalexpansion:device', 7))
    .shape([
        [null,item('thermalfoundation:tome_lexicon'),null],
        [ore('sheetLead'),item('thermalexpansion:frame', 64),ore('sheetLead')],
        [ore('gearIron'),item('thermalfoundation:material', 512),ore('gearIron')]
    ])
    .register()

// Insightful Condenser
crafting.shapedBuilder()
    .output(item('thermalexpansion:device', 8))
    .shape([
        [null,item('thermalfoundation:tome_experience'),null],
        [ore('sheetGold'),item('thermalexpansion:frame', 64),ore('sheetGold')],
        [ore('gearIron'),item('thermalfoundation:material', 512),ore('gearIron')]
    ])
    .register()

// Creaturer Encaptulator
crafting.shapedBuilder()
    .output(item('thermalexpansion:device', 11))
    .shape([
        [null,item('thermalexpansion:morb'),null],
        [ore('sheetConstantan'),item('thermalexpansion:frame', 64),ore('sheetConstantan')],
        [ore('gearIron'),item('thermalfoundation:material', 512),ore('gearIron')]
    ])
    .register()

// Vacuumulator
crafting.shapedBuilder()
    .output(item('thermalexpansion:device', 12))
    .shape([
        [null,item('minecraft:hopper'),null],
        [ore('sheetTin'),item('thermalexpansion:frame', 64),ore('sheetTin')],
        [ore('gearIron'),item('thermalfoundation:material', 512),ore('gearIron')]
    ])
    .register()

// Steam Dynamo
crafting.shapedBuilder()
    .output(item('thermalexpansion:dynamo'))
    .shape([
        [null,item('thermalfoundation:material', 514),null],
        [ore('sheetTin'),item('minecraft:piston'),ore('sheetTin')],
        [ore('gearCopper'),ore('ingotRedstone'),ore('gearCopper')]
    ])
    .register()

// Compression Dynamo
crafting.shapedBuilder()
    .output(item('thermalexpansion:dynamo', 2))
    .shape([
        [null,item('thermalfoundation:material', 514),null],
        [ore('sheetTin'),item('minecraft:piston'),ore('sheetTin')],
        [ore('gearIron'),ore('ingotRedstone'),ore('gearIron')]
    ])
    .register()

// Energy Cell (Basic)
crafting.shapedBuilder()
    .output(item('thermalexpansion:cell'))
    .shape([
        [ore('sheetLead'),ore('blockRedstone'),ore('sheetLead')],
        [item('thermalfoundation:material', 513),item('thermalexpansion:frame', 128),item('thermalfoundation:material', 514)],
        [ore('sheetLead'),item('thermalfoundation:material', 515),ore('sheetLead')]
    ])
    .register()

// Portable Tank (Basic)
crafting.shapedBuilder()
    .output(item('thermalexpansion:tank'))
    .shape([
        [ore('sheetCopper'),ore('blockGlassHardened'),ore('sheetCopper')],
        [ore('blockGlassHardened'),item('thermalfoundation:material', 512),ore('blockGlassHardened')],
        [ore('sheetCopper'),ore('blockGlassHardened'),ore('sheetCopper')]
    ])
    .register()

// Flux Capacitor (Basic)
crafting.shapedBuilder()
    .output(item('thermalexpansion:capacitor'))
    .shape([
        [null,ore('dustRedstone'),null],
        [ore('sheetCopper'),ore('sheetLead'),ore('sheetCopper')],
        [ore('dustRedstone'),ore('dustSulfur'),ore('dustRedstone')]
    ])
    .register()


// Flux Capacitor (Hardened)
crafting.shapedBuilder()
    .output(item('thermalexpansion:capacitor', 1))
    .shape([
        [null,ore('dustRedstone'),null],
        [ore('sheetInvar'),item('thermalexpansion:capacitor'),ore('sheetInvar')],
        [ore('dustRedstone'),ore('sheetCopper'),ore('dustRedstone')]
    ])
    .register()


// Flux Capacitor (Reinforced)
crafting.shapedBuilder()
    .output(item('thermalexpansion:capacitor', 2))
    .shape([
        [null,ore('dustRedstone'),null],
        [ore('sheetElectrum'),item('thermalexpansion:capacitor', 1),ore('sheetElectrum')],
        [ore('dustRedstone'),ore('sheetInvar'),ore('dustRedstone')]
    ])
    .register()


// Flux Capacitor (Signalum)
crafting.shapedBuilder()
    .output(item('thermalexpansion:capacitor', 3))
    .shape([
        [null,ore('dustRedstone'),null],
        [ore('sheetSignalum'),item('thermalexpansion:capacitor', 2),ore('sheetSignalum')],
        [ore('dustRedstone'),ore('sheetElectrum'),ore('dustRedstone')]
    ])
    .register()


// Flux Capacitor (Resonant)
crafting.shapedBuilder()
    .output(item('thermalexpansion:capacitor', 4))
    .shape([
        [null,ore('dustRedstone'),null],
        [ore('sheetEnderium'),item('thermalexpansion:capacitor', 3),ore('sheetEnderium')],
        [ore('dustRedstone'),ore('sheetSignalum'),ore('dustRedstone')]
    ])
    .register()

// Reservoir (Basic)
crafting.shapedBuilder()
    .output(item('thermalexpansion:reservoir'))
    .shape([
        [null,ore('sheetTin'),null],
        [ore('sheetCopper'),ore('blockGlassHardened'),ore('sheetCopper')],
        [null,item('thermalfoundation:material', 512),null]
    ])
    .register()

// Reservoir (Hardened)
crafting.shapedBuilder()
    .output(item('thermalexpansion:reservoir', 1))
    .shape([
        [null,ore('sheetTin'),null],
        [ore('sheetInvar'),item('thermalexpansion:reservoir'),ore('sheetInvar')],
        [null,ore('sheetTin'),null]
    ])
    .register()

// Reservoir (Reinforced)
crafting.shapedBuilder()
    .output(item('thermalexpansion:reservoir', 2))
    .shape([
        [null,ore('sheetInvar'),null],
        [ore('sheetElectrum'),item('thermalexpansion:reservoir', 1),ore('sheetElectrum')],
        [null,ore('sheetInvar'),null]
    ])
    .register()

// Reservoir (Signalum)
crafting.shapedBuilder()
    .output(item('thermalexpansion:reservoir', 3))
    .shape([
        [null,ore('sheetElectrum'),null],
        [ore('sheetSignalum'),item('thermalexpansion:reservoir', 2),ore('sheetSignalum')],
        [null,ore('sheetElectrum'),null]
    ])
    .register()

// Reservoir (Resonant)
crafting.shapedBuilder()
    .output(item('thermalexpansion:reservoir', 4))
    .shape([
        [null,ore('sheetSignalum'),null],
        [ore('sheetEnderium'),item('thermalexpansion:reservoir', 3),ore('sheetEnderium')],
        [null,ore('sheetSignalum'),null]
    ])
    .register()

// Satchel (Basic)
crafting.shapedBuilder()
    .output(item('thermalexpansion:satchel'))
    .shape([
        [null,ore('leather'),null],
        [ore('sheetTin'),ore('chestWood'),ore('sheetTin')],
        [ore('leather'),null,ore('leather')]
    ])
    .register()

// Satchel (Basic) Alt
crafting.shapedBuilder()
    .output(item('thermalexpansion:satchel'))
    .shape([
        [null,ore('blockRockwool'),null],
        [ore('sheetTin'),ore('chestWood'),ore('sheetTin')],
        [ore('blockRockwool'),null,ore('blockRockwool')]
    ])
    .register()

// Satchel (Hardened)
crafting.shapedBuilder()
    .output(item('thermalexpansion:satchel', 1))
    .shape([
        [null,ore('leather'),null],
        [ore('sheetInvar'),item('thermalexpansion:satchel'),ore('sheetInvar')],
        [ore('leather'),null,ore('leather')]
    ])
    .register()

// Satchel (Hardened) Alt
crafting.shapedBuilder()
    .output(item('thermalexpansion:satchel', 1))
    .shape([
        [null,ore('blockRockwool'),null],
        [ore('sheetInvar'),item('thermalexpansion:satchel'),ore('sheetInvar')],
        [ore('blockRockwool'),null,ore('blockRockwool')]
    ])
    .register()

// Satchel (Reinforced)
crafting.shapedBuilder()
    .output(item('thermalexpansion:satchel', 2))
    .shape([
        [null,ore('leather'),null],
        [ore('sheetElectrum'),item('thermalexpansion:satchel', 1),ore('sheetElectrum')],
        [ore('leather'),null,ore('leather')]
    ])
    .register()

// Satchel (Reinforced) Alt
crafting.shapedBuilder()
    .output(item('thermalexpansion:satchel', 2))
    .shape([
        [null,ore('blockRockwool'),null],
        [ore('sheetElectrum'),item('thermalexpansion:satchel', 1),ore('sheetElectrum')],
        [ore('blockRockwool'),null,ore('blockRockwool')]
    ])
    .register()

// Satchel (Signalum)
crafting.shapedBuilder()
    .output(item('thermalexpansion:satchel', 3))
    .shape([
        [null,ore('leather'),null],
        [ore('sheetSignalum'),item('thermalexpansion:satchel', 2),ore('sheetSignalum')],
        [ore('leather'),null,ore('leather')]
    ])
    .register()
    
// Satchel (Signalum) Alt
crafting.shapedBuilder()
    .output(item('thermalexpansion:satchel', 3))
    .shape([
        [null,ore('blockRockwool'),null],
        [ore('sheetSignalum'),item('thermalexpansion:satchel', 2),ore('sheetSignalum')],
        [ore('blockRockwool'),null,ore('blockRockwool')]
    ])
    .register()

// Satchel (Resonant)
crafting.shapedBuilder()
    .output(item('thermalexpansion:satchel', 4))
    .shape([
        [null,ore('leather'),null],
        [ore('sheetEnderium'),item('thermalexpansion:satchel', 3),ore('sheetEnderium')],
        [ore('leather'),null,ore('leather')]
    ])
    .register()

// Satchel (Resonant) Alt
crafting.shapedBuilder()
    .output(item('thermalexpansion:satchel', 4))
    .shape([
        [null,ore('blockRockwool'),null],
        [ore('sheetEnderium'),item('thermalexpansion:satchel', 3),ore('sheetEnderium')],
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

// Device Frame
crafting.shapedBuilder()
    .output(item('thermalexpansion:frame', 64))
    .shape([
        [ore('sheetIron'),ore('blockGlassHardened'),ore('sheetIron')],
        [ore('blockGlassHardened'),item('tfcreborncore:item/rf_control_circuit'),ore('blockGlassHardened')],
        [ore('sheetIron'),ore('blockGlassHardened'),ore('sheetIron')]
    ])
    .register()

// Energy Cell Frame
crafting.shapedBuilder()
    .output(item('thermalexpansion:frame', 128))
    .shape([
        [ore('sheetLead'),ore('blockGlassHardened'),ore('sheetLead')],
        [ore('blockGlassHardened'),item('tfcreborncore:item/rf_control_circuit'),ore('blockGlassHardened')],
        [ore('sheetLead'),ore('blockGlassHardened'),ore('sheetLead')]
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
