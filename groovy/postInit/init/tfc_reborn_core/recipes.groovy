// Hardened Glass Mix
crafting.shapelessBuilder()
    .output(item('tfcreborncore:item/hardened_glass_mix') * 2)
    .input([
         ore('dustFlux'),
         ore('dustAnyBronze'),
         ore('dustHematite')
    ])
    .register()

crafting.shapelessBuilder()
    .output(item('tfcreborncore:item/hardened_glass_mix') * 2)
    .input([
         ore('dustFlux'),
         ore('dustAnyBronze'),
         ore('dustLimonite')
    ])
    .register()
