import classes.postInit.Utils

for (var in Utils.materials) {
    // Recipe Removal
    crafting.removeByOutput(item('tfctech:metal/' + var + '_strip'))
    crafting.removeByOutput(item('tfctech:metal/' + var + '_rod'))
    crafting.removeByOutput(item('tfctech:metal/' + var + '_bolt'))
    crafting.removeByOutput(item('tfctech:metal/' + var + '_screw'))

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

    // Dust
    mods.immersiveengineering.crusher.recipeBuilder()
        .input(ore('ingot' + Utils.toPascal(var)))
        .output(item('tfc:metal/dust/' + var))
        .energy(1000)
        .register()
        
    // Dust || Finally, it works!
    mods.thermalexpansion.pulverizer.recipeBuilder()
        .input(ore('ingot' + Utils.toPascal(var)))
        .output(item('tfc:metal/dust/' + var))
        .energy(2000)
        .register()

    // Strip from Ingot
    crafting.shapelessBuilder()
    .output(item('tfctech:metal/' + var + '_strip'))
    .input([
         ore('chisel').transform(Utils.transformerTool),
         ore('ingot' + Utils.toPascal(var))
    ])
    .register()

    // Long Rod from Rods
    crafting.shapelessBuilder()
    .output(item('tfctech:metal/' + var + '_long_rod'))
    .input([
         ore('hammer').transform(Utils.transformerTool),
         ore('stick' + Utils.toPascal(var)),
         ore('stick' + Utils.toPascal(var))
    ])
    .register()

    // Rod from Ingot
    crafting.shapelessBuilder()
    .output(item('tfctech:metal/' + var + '_rod'))
    .input([
         ore('chisel').transform(Utils.transformerTool),
         ore('ingot' + Utils.toPascal(var))
    ])
    .register()

    // Bolt from Rod
    crafting.shapelessBuilder()
    .output(item('tfctech:metal/' + var + '_bolt'))
    .input([
         ore('chisel').transform(Utils.transformerTool),
         ore('stick' + Utils.toPascal(var))
    ])
    .register()

    // Screw from Bolt
    crafting.shapelessBuilder()
    .output(item('tfctech:metal/' + var + '_screw'))
    .input([
         ore('chisel').transform(Utils.transformerTool),
         ore('bolt' + Utils.toPascal(var)),
         ore('bolt' + Utils.toPascal(var))
    ])
    .register()

    // Wire from Sheet
    crafting.shapelessBuilder()
    .output(item('tfctech:metal/' + var + '_wire') * 2)
    .input([
         ore('wireCutter').transform(Utils.transformerTool),
         ore('sheet' + Utils.toPascal(var))
    ])
    .register()
}

// Redstone Dust
mods.thermalexpansion.pulverizer.recipeBuilder()
    .input(ore('ingotRedstone'))
    .output(item('minecraft:redstone'))
    .energy(2000)
    .register()

mods.immersiveengineering.crusher.recipeBuilder()
    .input(ore('ingotRedstone'))
    .output(item('minecraft:redstone'))
    .energy(2000)
    .register()

// Glowstone Dust
mods.thermalexpansion.pulverizer.recipeBuilder()
    .input(ore('ingotGlowstone'))
    .output(item('minecraft:glowstone_dust'))
    .energy(2000)
    .register()

mods.immersiveengineering.crusher.recipeBuilder()
    .input(ore('ingotGlowstone'))
    .output(item('minecraft:glowstone_dust'))
    .energy(2000)
    .register()

// Ender Dust
mods.thermalexpansion.pulverizer.recipeBuilder()
    .input(ore('gemEnder'))
    .output(item('appliedenergistics2:material', 46))
    .energy(2000)
    .register()

mods.immersiveengineering.crusher.recipeBuilder()
    .input(ore('gemEnder'))
    .output(item('appliedenergistics2:material', 46))
    .energy(2000)
    .register()

mods.thermalexpansion.pulverizer.recipeBuilder()
    .input(ore('ingotEnder'))
    .output(item('appliedenergistics2:material', 46))
    .energy(2000)
    .register()
    
mods.immersiveengineering.crusher.recipeBuilder()
    .input(ore('ingotEnder'))
    .output(item('appliedenergistics2:material', 46))
    .energy(2000)
    .register()