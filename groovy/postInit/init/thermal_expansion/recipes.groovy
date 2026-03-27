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
    item('thermalfoundation:glass', OreDictionary.WILDCARD_VALUE),
    item('thermalfoundation:glass_alloy', OreDictionary.WILDCARD_VALUE)
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
