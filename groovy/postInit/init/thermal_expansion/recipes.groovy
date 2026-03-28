import net.minecraftforge.oredict.OreDictionary

def recipesToRemove = [
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
    item('thermalfoundation:glass', OreDictionary.WILDCARD_VALUE),
    item('thermalfoundation:glass_alloy', OreDictionary.WILDCARD_VALUE),
    item('thermalexpansion:frame'),

]

// Recipe Removal
for (id in recipesToRemove) {
    crafting.removeByOutput(id)
}

// Leadstone Fluxduct
crafting.shapedBuilder()
    .output(item('thermaldynamics:duct_0') * 2)
    .shape([
        [ore('dustRedstone'), ore('blockGlassHardened'), ore('dustRedstone')],
        [ore('dustRedstone'), ore('sheetLead'), ore('dustRedstone')],
        [ore('dustRedstone'), ore('blockGlassHardened'), ore('dustRedstone')]
    ])
    .register()

// Hardened Fluxduct
crafting.shapedBuilder()
    .output(item('thermaldynamics:duct_0', 1) * 2)
    .shape([
        [ore('dustRedstone'), item('thermaldynamics:duct_0'), ore('dustRedstone')],
        [ore('dustRedstone'), ore('sheetSterlingSilver'), ore('dustRedstone')],
        [ore('dustRedstone'), item('thermaldynamics:duct_0'), ore('dustRedstone')]
    ])
    .register()

// Redstone Energy Fluxduct (Empty)
crafting.shapedBuilder()
    .output(item('thermaldynamics:duct_0', 6) * 2)
    .shape([
        [ore('dustRedstone'), item('thermaldynamics:duct_0', 1), ore('dustRedstone')],
        [ore('dustRedstone'), ore('sheetElectrum'), ore('dustRedstone')],
        [ore('dustRedstone'), item('thermaldynamics:duct_0', 1), ore('dustRedstone')]
    ])
    .register()

// Signalum Fluxduct (Empty)
crafting.shapedBuilder()
    .output(item('thermaldynamics:duct_0', 7) * 2)
    .shape([
        [ore('dustRedstone'), item('thermaldynamics:duct_0', 2), ore('dustRedstone')],
        [ore('dustRedstone'), ore('sheetSignalum'), ore('dustRedstone')],
        [ore('dustRedstone'), item('thermaldynamics:duct_0', 2), ore('dustRedstone')]
    ])
    .register()

// Resonant Fluxduct (Empty)
crafting.shapedBuilder()
    .output(item('thermaldynamics:duct_0', 8) * 2)
    .shape([
        [ore('dustRedstone'), item('thermaldynamics:duct_0', 3), ore('dustRedstone')],
        [ore('dustRedstone'), ore('sheetEnderium'), ore('dustRedstone')],
        [ore('dustRedstone'), item('thermaldynamics:duct_0', 3), ore('dustRedstone')]
    ])
    .register()

// Cryo-Stabilized Fluxduct (Empty)
crafting.shapedBuilder()
    .output(item('thermaldynamics:duct_0', 9))
    .shape([
        [ore('sheetLumium'), ore('blockGlassHardened'), ore('sheetLumium')],
        [ore('blockGlassHardened'), item('thermaldynamics:duct_0', 4), ore('blockGlassHardened')],
        [ore('sheetLumium'), ore('blockGlassHardened'), ore('sheetLumium')]
    ])
    .register()

// Fluiduct
crafting.shapedBuilder()
    .output(item('thermaldynamics:duct_16') * 8)
    .shape([
        [ore('sheetCopper'),ore('blockGlassHardened'),ore('sheetCopper')],
    ])
    .register()

// Fluiduct (Opaque)
crafting.shapedBuilder()
    .output(item('thermaldynamics:duct_16', 1) * 8)
    .shape([
        [ore('sheetCopper'),ore('sheetLead'),ore('sheetCopper')],
    ])
    .register()

// Hardened Fluiduct
crafting.shapedBuilder()
    .output(item('thermaldynamics:duct_16', 2) * 8)
    .shape([
        [ore('sheetSterlingSilver'),ore('blockGlassHardened'),ore('sheetSterlingSilver')],
    ])
    .register()

// Hardened Fluiduct (Opaque)
crafting.shapedBuilder()
    .output(item('thermaldynamics:duct_16', 3) * 8)
    .shape([
        [ore('sheetSterlingSilver'),ore('sheetLead'),ore('sheetSterlingSilver')]
    ])
    .register()

// Signalum-Plated Fluiduct
crafting.shapedBuilder()
    .output(item('thermaldynamics:duct_16', 4))
    .shape([
        [null,ore('stripElectrum'),null],
        [ore('stripSignalum'),item('thermaldynamics:duct_16', 2),ore('stripSignalum')],
        [null,ore('stripElectrum'),null]
    ])
    .register()
    
// Signalum-Plated Fluiduct (Opaque)
crafting.shapedBuilder()
    .output(item('thermaldynamics:duct_16', 5))
    .shape([
        [null,ore('stripElectrum'),null],
        [ore('stripSignalum'),item('thermaldynamics:duct_16', 3),ore('stripSignalum')],
        [null,ore('stripElectrum'),null]
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
    
// Super-Laminar Fluiduct (Opaque)
crafting.shapedBuilder()
    .output(item('thermaldynamics:duct_16', 7))
    .shape([
        [ore('blockGlassHardened'),ore('blockGlassHardened'),ore('blockGlassHardened')],
        [ore('sheetAnyBronze'),item('thermaldynamics:duct_16', 3),ore('sheetAnyBronze')],
        [ore('blockGlassHardened'),ore('blockGlassHardened'),ore('blockGlassHardened')]
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
