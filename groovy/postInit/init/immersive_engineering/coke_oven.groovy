// Coal Coke
mods.immersiveengineering.coke_oven.recipeBuilder()
    .input(ore('gemLignite'))
    .output(item('tfcreborncore:regular/lignite_coke'))
    .time(3200)
    .creosote(500)
    .register()

// Bituminous Coal Coke
mods.immersiveengineering.coke_oven.recipeBuilder()
    .input(ore('gemCoal'))
    .output(item('tfcreborncore:regular/bituminous_coal_coke'))
    .time(1600)
    .creosote(500)
    .register()
    
// Charcoal
mods.immersiveengineering.coke_oven.recipeBuilder()
    .input(ore('logWood'))
    .output(item('minecraft:coal', 1))
    .time(1600)
    .creosote(250)
    .register()