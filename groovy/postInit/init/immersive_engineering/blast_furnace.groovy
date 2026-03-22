// Lignite Fuel
mods.immersiveengineering.blast_furnace_fuel.recipeBuilder()
    .input(item('tfc:ore/lignite'))
    .time(1200)
    .register()

// Coal Fuel
mods.immersiveengineering.blast_furnace_fuel.recipeBuilder()
    .input(item('minecraft:coal'))
    .time(1200)
    .register()

// Bituminous Coal Fuel
mods.immersiveengineering.blast_furnace_fuel.recipeBuilder()
    .input(item('tfc:ore/bituminous_coal'))
    .time(1200)
    .register()

// Coke Fuel
mods.immersiveengineering.blast_furnace_fuel.recipeBuilder()
    .input(ore('fuelCoke'))
    .time(1200)
    .register()

// Pig Iron
mods.immersiveengineering.blast_furnace.recipeBuilder()
    .input(ore('ingotIron'))
    .output(item('tfc:metal/ingot/pig_iron'))
    .time(1200)
    .slag(item('thermalfoundation:material', 864))
    .register()
// Steel
mods.immersiveengineering.blast_furnace.recipeBuilder()
    .input(ore('ingotPigIron'))
    .output(item('tfc:metal/ingot/steel'))
    .time(1200)
    .slag(item('thermalfoundation:material', 864))
    .register()
