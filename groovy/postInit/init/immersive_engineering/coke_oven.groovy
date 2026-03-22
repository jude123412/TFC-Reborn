// Coal Coke
mods.immersiveengineering.coke_oven.recipeBuilder()
    .input(item('tfc:ore/lignite'))
    .output(item('thermalfoundation:material', 802))
    .time(1600)
    .creosote(500)
    .register()

// Coal Coke
mods.immersiveengineering.coke_oven.recipeBuilder()
    .input(item('minecraft:coal'))
    .output(item('thermalfoundation:material', 802))
    .time(1600)
    .creosote(500)
    .register()

// Coal Coke
mods.immersiveengineering.coke_oven.recipeBuilder()
    .input(item('tfc:ore/bituminous_coal'))
    .output(item('thermalfoundation:material', 802))
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