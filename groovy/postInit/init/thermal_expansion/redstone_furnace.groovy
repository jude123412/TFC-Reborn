// Charcoal
mods.thermalexpansion.furnace_pyrolysis.recipeBuilder()
    .input(item('thermalfoundation:material', 801))
    .output(item('minecraft:coal', 1))
    .creosote(250)
    .energy(6400)
    .register()

mods.thermalexpansion.furnace_pyrolysis.recipeBuilder()
    .input(ore('logWood'))
    .output(item('minecraft:coal', 1))
    .creosote(500)
    .energy(6400)
    .register()