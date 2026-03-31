import classes.postInit.Utils

for (var in Utils.trees) {
    // Bookshelf Recycling
    mods.thermalexpansion.sawmill.recipeBuilder()
        .input(item('tfc:wood/bookshelf/' + var))
        .output(item('tfc:wood/lumber/' + var) * 24, item('minecraft:book') * 3)
        .chance(100)
        .energy(1600)
        .register()
    
    // Workbench Recycling
    mods.thermalexpansion.sawmill.recipeBuilder()
        .input(item('tfc:wood/workbench/' + var))
        .output(item('tfc:wood/lumber/' + var) * 32)
        .energy(1600)
        .register()

    // Planks Recycling
    mods.thermalexpansion.sawmill.recipeBuilder()
        .input(item('tfc:wood/planks/' + var))
        .output(item('tfc:wood/lumber/' + var) * 4)
        .energy(1600)
        .register()

    // Leaves Recycling
    mods.thermalexpansion.pulverizer.recipeBuilder()
        .input(item('tfc:wood/leaves/' + var))
        .output(item('thermalfoundation:material', 816))
        .energy(1600)
        .register()
    mods.immersiveengineering.crusher.recipeBuilder()
        .input(item('tfc:wood/leaves/' + var))
        .output(item('thermalfoundation:material', 816))
        .energy(1600)
        .register()

    // Chest Recycling
    mods.thermalexpansion.sawmill.recipeBuilder()
        .input(item('tfc:wood/chest/' + var))
        .output(item('tfc:wood/lumber/' + var) * 8)
        .energy(1600)
        .register()

    // Trapped Chest Recycling
    mods.thermalexpansion.sawmill.recipeBuilder()
        .input(item('tfc:wood/chest_trap/' + var))
        .output(item('tfc:wood/lumber/' + var) * 8, item('minecraft:tripwire_hook'))
        .chance(100)
        .energy(1600)
        .register()

    // Tool Rack Recycling
    mods.thermalexpansion.sawmill.recipeBuilder()
        .input(item('tfc:wood/tool_rack/' + var))
        .output(item('tfc:wood/lumber/' + var) * 6)
        .energy(1600)
        .register()
    
    // Loom Recycling
    mods.thermalexpansion.sawmill.recipeBuilder()
        .input(item('tfc:wood/loom/' + var))
        .output(item('tfc:wood/lumber/' + var) * 7, item('minecraft:stick'))
        .energy(1600)
        .register()
    
    // Support Beam Recycling
    mods.thermalexpansion.sawmill.recipeBuilder()
        .input(item('tfc:wood/support/' + var))
        .output(item('tfc:wood/lumber/' + var) * 2)
        .energy(1600)
        .register()
    
    // Stairs Recycling
    mods.thermalexpansion.sawmill.recipeBuilder()
        .input(item('tfc:stairs/wood/' + var))
        .output(item('tfc:wood/lumber/' + var) * 3)
        .energy(1600)
        .register()
    
    // Fence Recycling
    mods.thermalexpansion.sawmill.recipeBuilder()
        .input(item('tfc:wood/fence/' + var))
        .output(item('tfc:wood/lumber/' + var) * 2)
        .energy(1600)
        .register()
    
    // Button Recycling
    mods.thermalexpansion.sawmill.recipeBuilder()
        .input(item('tfc:wood/button/' + var))
        .output(item('tfc:wood/lumber/' + var) * 4)
        .energy(1600)
        .register()

    // Pressure Plate Recycling
    mods.thermalexpansion.sawmill.recipeBuilder()
        .input(item('tfc:wood/pressure_plate/' + var))
        .output(item('tfc:wood/lumber/' + var) * 2)
        .energy(1600)
        .register()
    
    // Fence Gate Recycling
    mods.thermalexpansion.sawmill.recipeBuilder()
        .input(item('tfc:wood/fence_gate/' + var))
        .output(item('tfc:wood/lumber/' + var) * 6)
        .energy(1600)
        .register()

    // Sapling Recycling
    mods.thermalexpansion.pulverizer.recipeBuilder()
        .input(item('tfc:wood/sapling/' + var))
        .output(item('thermalfoundation:material', 816), item('minecraft:stick'))
        .chance(25)
        .energy(1600)
        .register()
    mods.immersiveengineering.crusher.recipeBuilder()
        .input(item('tfc:wood/sapling/' + var))
        .output(item('thermalfoundation:material', 816))
        .secondaryOutput(item('minecraft:stick'), 0.25)
        .energy(1600)
        .register()

    // Trapdoor Recycling
    mods.thermalexpansion.sawmill.recipeBuilder()
        .input(item('tfc:wood/trapdoor/' + var))
        .output(item('tfc:wood/lumber/' + var) * 2)
        .energy(1600)
        .register()
    
    // Barrel Recycling
    mods.thermalexpansion.sawmill.recipeBuilder()
        .input(item('tfc:wood/barrel/' + var))
        .output(item('tfc:wood/lumber/' + var) * 7)
        .energy(1600)
        .register()

    // Log Cutting
    mods.thermalexpansion.sawmill.recipeBuilder()
        .input(item('tfc:wood/log/' + var))
        .output(item('tfc:wood/lumber/' + var) * 12, item('tfcreborncore:item/wood_powder'))
        .chance(25)
        .energy(1600)
        .register()

    // Door Recycling
    mods.thermalexpansion.sawmill.recipeBuilder()
        .input(item('tfc:wood/door/' + var))
        .output(item('tfc:wood/lumber/' + var) * 3)
        .energy(1600)
        .register()
    
    // Slab Recycling
    mods.thermalexpansion.sawmill.recipeBuilder()
        .input(item('tfc:slab/wood/' + var))
        .output(item('tfc:wood/lumber/' + var) * 2)
        .energy(1600)
        .register()

    // Boat Recycling
    mods.thermalexpansion.sawmill.recipeBuilder()
        .input(item('tfc:wood/boat/' + var))
        .output(item('tfc:wood/lumber/' + var) * 5)
        .energy(1600)
        .register()
}