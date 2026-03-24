import classes.postInit.Utils

for (var in Utils.materials) {
    // Double Ingot
    mods.immersiveengineering.metal_press.recipeBuilder()
        .mold(item('immersiveengineering:mold'))
        .input(ore('ingot' + Utils.toPascal(var)) * 2)
        .output(item('tfc:metal/double_ingot/' + var))
        .energy(100)
        .register()

    // Nugget
    mods.immersiveengineering.metal_press.recipeBuilder()
        .mold(item('immersiveengineering:mold', 5))
        .input(ore('ingot' + Utils.toPascal(var)))
        .output(item('tfc:metal/nugget/' + var) * 10)
        .energy(100)
        .register()

    // Sheet
    mods.immersiveengineering.metal_press.recipeBuilder()
        .mold(item('immersiveengineering:mold', 1))
        .input(ore('ingotDouble' + Utils.toPascal(var)))
        .output(item('tfc:metal/sheet/' + var))
        .energy(100)
        .register()

    // Double Sheet
    mods.immersiveengineering.metal_press.recipeBuilder()
        .mold(item('immersiveengineering:mold', 6))
        .input(ore('sheet' + Utils.toPascal(var)) * 2)
        .output(item('tfc:metal/double_sheet/' + var))
        .energy(100)
        .register()

    // Strip
    mods.immersiveengineering.metal_press.recipeBuilder()
        .mold(item('immersiveengineering:mold', 7))
        .input(ore('ingot' + Utils.toPascal(var)))
        .output(item('tfctech:metal/' + var + '_strip') * 2)
        .energy(100)
        .register()

    // Rod
    mods.immersiveengineering.metal_press.recipeBuilder()
        .mold(item('immersiveengineering:mold', 2))
        .input(ore('ingot' + Utils.toPascal(var)))
        .output(item('tfctech:metal/' + var + '_rod') * 2)
        .energy(100)
        .register()

    // Wire
    mods.immersiveengineering.metal_press.recipeBuilder()
        .mold(item('immersiveengineering:mold', 4))
        .input(ore('ingot' + Utils.toPascal(var)))
        .output(item('tfctech:metal/' + var + '_wire') * 2)
        .energy(100)
        .register()
}

// Empty Casing
mods.immersiveengineering.metal_press.recipeBuilder()
    .mold(item('immersiveengineering:mold', 3))
    .input(ore('ingotCopper'))
    .output(item('immersiveengineering:bullet') * 2)
    .energy(1000)
    .register()





