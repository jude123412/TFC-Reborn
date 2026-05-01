// Empty Casing
mods.immersiveengineering.metal_press.recipeBuilder()
    .mold(item('immersiveengineering:mold', 3))
    .input(ore('ingotCopper'))
    .output(item('immersiveengineering:bullet') * 2)
    .energy(1000)
    .register()

// Tin Sleve
mods.immersiveengineering.metal_press.recipeBuilder()
    .mold(item('tfcreborncore:regular/metal_press_sleeve'))
    .input(ore('ingotTin'))
    .output(item('tfctech:metal/tin_sleeve'))
    .energy(1000)
    .register()

// Brass Sleve
mods.immersiveengineering.metal_press.recipeBuilder()
    .mold(item('tfcreborncore:regular/metal_press_sleeve'))
    .input(ore('ingotBrass'))
    .output(item('tfctech:metal/brass_sleeve'))
    .energy(1000)
    .register()

// Steel Sleve
mods.immersiveengineering.metal_press.recipeBuilder()
    .mold(item('tfcreborncore:regular/metal_press_sleeve'))
    .input(ore('ingotSteel'))
    .output(item('tfctech:metal/steel_sleeve'))
    .energy(1000)
    .register()