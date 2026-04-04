// Wood Sheet
crafting.shapedBuilder()
    .output(item('tfcreborncore:item/wood_sheet'))
    .shape([
        [null,ore('dustWood'),null],
        [ore('dustWood'),ore('slimeball'),ore('dustWood')],
        [null,ore('dustWood'),null]
    ])
    .register()

// Electrical Doodar Housing
crafting.shapelessBuilder()
    .output(item('tfcreborncore:item/electrical_doodar_housing'))
    .input([
         ore('blockGlassHardened'),
         ore('chisel')
    ])
    .register()

// RF Control Circuit
crafting.shapedBuilder()
    .output(item('tfcreborncore:item/rf_control_circuit'))
    .shape([
        [item('tfcreborncore:item/electrical_doodar'),ore('sheetAnyBronze'),item('tfcreborncore:item/electrical_doodar')],
        [item('tfcreborncore:item/electrical_thingamajig'),item('tfcreborncore:item/wood_sheet'),item('tfcreborncore:item/electrical_thingamajig')],
        [ore('stripRedAlloy'),ore('stripRedAlloy'),ore('stripRedAlloy')]
    ])
    .register()

// RF Control Circuit Alt
crafting.shapedBuilder()
    .output(item('tfcreborncore:item/rf_control_circuit') * 2)
    .shape([
        [item('tfcreborncore:item/electrical_doodar'),ore('sheetIron'),item('tfcreborncore:item/electrical_doodar')],
        [item('tfcreborncore:item/electrical_thingamajig'),item('tfcreborncore:item/latex_coated_wood_sheet'),item('tfcreborncore:item/electrical_thingamajig')],
        [ore('stripRedAlloy'),ore('stripRedAlloy'),ore('stripRedAlloy')]
    ])
    .register()

// Hardened Glass Mix
crafting.shapelessBuilder()
    .output(item('tfcreborncore:item/hardened_glass_mix'))
    .input([
         ore('dustFlux'),
         ore('dustObsidian'),
         ore('dustHematite')
    ])
    .register()

// Hardened Glass Mix Alt
crafting.shapelessBuilder()
    .output(item('tfcreborncore:item/hardened_glass_mix'))
    .input([
         ore('dustFlux'),
         ore('dustObsidian'),
         ore('dustLimonite')
    ])
    .register()

// Synthetic Graphite Mix
crafting.shapelessBuilder()
    .output(item('tfcreborncore:item/synthetic_graphite_mix'))
    .input([
         ore('dustFlux'),
         ore('dustCoal'),
         ore('dustWood')
    ])
    .register()

// Brass Piston
crafting.shapedBuilder()
    .output(item('tfcreborncore:item/brass_piston'))
    .shape([
        [null,ore('sheetBrass'),null],
        [ore('ingotBrass'),ore('stickLongBrass'),ore('ingotBrass')],
        [ore('ingotBrass'),item('tfc:brass_mechanisms'),ore('ingotBrass')]
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