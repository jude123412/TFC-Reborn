import classes.postInit.Utils

for (var in Utils.materials) {
    // Double Ingot
    mods.immersiveengineering.metal_press.recipeBuilder()
        .mold(item('immersiveengineering:mold'))
        .input(ore('ingot' + Utils.toPascal(var)) * 2)
        .output(item('tfc:metal/double_ingot/' + var))
        .energy(1000)
        .register()

    // Nugget
    mods.immersiveengineering.metal_press.recipeBuilder()
        .mold(item('immersiveengineering:mold', 5))
        .input(ore('ingot' + Utils.toPascal(var)))
        .output(item('tfc:metal/nugget/' + var) * 10)
        .energy(1000)
        .register()

    // Sheet
    mods.immersiveengineering.metal_press.recipeBuilder()
        .mold(item('immersiveengineering:mold', 1))
        .input(ore('ingotDouble' + Utils.toPascal(var)))
        .output(item('tfc:metal/sheet/' + var))
        .energy(1000)
        .register()

    // Double Sheet
    mods.immersiveengineering.metal_press.recipeBuilder()
        .mold(item('immersiveengineering:mold', 6))
        .input(ore('sheet' + Utils.toPascal(var)) * 2)
        .output(item('tfc:metal/double_sheet/' + var))
        .energy(1000)
        .register()

    // Strip
    mods.immersiveengineering.metal_press.recipeBuilder()
        .mold(item('immersiveengineering:mold', 7))
        .input(ore('ingot' + Utils.toPascal(var)))
        .output(item('tfctech:metal/' + var + '_strip') * 2)
        .energy(1000)
        .register()

    // Rod
    mods.immersiveengineering.metal_press.recipeBuilder()
        .mold(item('immersiveengineering:mold', 2))
        .input(ore('ingot' + Utils.toPascal(var)))
        .output(item('tfctech:metal/' + var + '_rod') * 2)
        .energy(1000)
        .register()

    // Wire
    mods.immersiveengineering.metal_press.recipeBuilder()
        .mold(item('immersiveengineering:mold', 4))
        .input(ore('ingot' + Utils.toPascal(var)))
        .output(item('tfctech:metal/' + var + '_wire') * 2)
        .energy(1000)
        .register()

    // Rackwheel Piece
    mods.immersiveengineering.metal_press.recipeBuilder()
        .mold(item('tfcreborncore:item/metal_press_rackwheel_piece'))
        .input(ore('ingot' + Utils.toPascal(var)))
        .output(item('tfctech:metal/' + var + '_rackwheel_piece'))
        .energy(1000)
        .register()

    // Rackwheel
    mods.immersiveengineering.metal_press.recipeBuilder()
        .mold(item('tfcreborncore:item/metal_press_rackwheel'))
        .input(ore('ingot' + Utils.toPascal(var)) * 4)
        .output(item('tfctech:metal/' + var + '_rackwheel'))
        .energy(1000)
        .register()

    // Long Rod
    mods.immersiveengineering.metal_press.recipeBuilder()
        .mold(item('tfcreborncore:item/metal_press_long_rod'))
        .input(ore('ingot' + Utils.toPascal(var)))
        .output(item('tfctech:metal/' + var + '_long_rod'))
        .energy(1000)
        .register()

    // Bolt
    mods.immersiveengineering.metal_press.recipeBuilder()
        .mold(item('tfcreborncore:item/metal_press_bolt'))
        .input(ore('ingot' + Utils.toPascal(var)))
        .output(item('tfctech:metal/' + var + '_bolt') * 4)
        .energy(1000)
        .register()

    // Screw
    mods.immersiveengineering.metal_press.recipeBuilder()
        .mold(item('tfcreborncore:item/metal_press_screw'))
        .input(ore('ingot' + Utils.toPascal(var)))
        .output(item('tfctech:metal/' + var + '_screw') * 4)
        .energy(1000)
        .register()
}

// Empty Casing
mods.immersiveengineering.metal_press.recipeBuilder()
    .mold(item('immersiveengineering:mold', 3))
    .input(ore('ingotCopper'))
    .output(item('immersiveengineering:bullet') * 2)
    .energy(1000)
    .register()

// Tin Sleve
mods.immersiveengineering.metal_press.recipeBuilder()
    .mold(item('tfcreborncore:item/metal_press_sleeve'))
    .input(ore('ingotTin'))
    .output(item('tfctech:metal/tin_sleeve'))
    .energy(1000)
    .register()

// Brass Sleve
mods.immersiveengineering.metal_press.recipeBuilder()
    .mold(item('tfcreborncore:item/metal_press_sleeve'))
    .input(ore('ingotBrass'))
    .output(item('tfctech:metal/brass_sleeve'))
    .energy(1000)
    .register()

// Steel Sleve
mods.immersiveengineering.metal_press.recipeBuilder()
    .mold(item('tfcreborncore:item/metal_press_sleeve'))
    .input(ore('ingotSteel'))
    .output(item('tfctech:metal/steel_sleeve'))
    .energy(1000)
    .register()