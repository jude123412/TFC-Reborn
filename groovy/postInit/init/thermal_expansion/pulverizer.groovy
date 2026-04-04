// Blaze Powder
mods.thermalexpansion.pulverizer.recipeBuilder()
    .input(ore('rodBlaze'))
    .output(item('minecraft:blaze_powder') * 2, item('minecraft:blaze_powder'))
    .chance(25)
    .energy(1600)
    .register()

// Blizz Powder
mods.thermalexpansion.pulverizer.recipeBuilder()
    .input(ore('rodBlizz'))
    .output(item('thermalfoundation:material', 2049) * 2, item('thermalfoundation:material', 2049))
    .chance(25)
    .energy(1600)
    .register()

// Blitz Powder
mods.thermalexpansion.pulverizer.recipeBuilder()
    .input(ore('rodBlitz'))
    .output(item('thermalfoundation:material', 2051) * 2, item('thermalfoundation:material', 2051))
    .chance(25)
    .energy(1600)
    .register()

// Basalz Powder
mods.thermalexpansion.pulverizer.recipeBuilder()
    .input(ore('rodBasalz'))
    .output(item('thermalfoundation:material', 2053) * 2, item('thermalfoundation:material', 2053))
    .chance(25)
    .energy(1600)
    .register()

// Obsidian Powder
mods.thermalexpansion.pulverizer.recipeBuilder()
    .input(item('minecraft:obsidian'))
    .output(item('tfcreborncore:item/obsidian_powder') * 2, item('tfcreborncore:item/obsidian_powder'))
    .chance(25)
    .energy(1600)
    .register()

// Powdered Snow
mods.thermalexpansion.pulverizer.recipeBuilder()
    .input(item('minecraft:snow'))
    .output(item('tfcreborncore:item/snow_powder') * 2, item('tfcreborncore:item/snow_powder'))
    .chance(25)
    .energy(1600)
    .register()