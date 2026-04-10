import classes.postInit.Utils

// Stone Processing
for (var in Utils.rocks) {
    mods.immersiveengineering.crusher.recipeBuilder()
        .input(item('tfc:raw/' + var))
        .output(item('tfc:cobble/' + var))
        .energy(1600)
        .register()
    
    mods.immersiveengineering.crusher.recipeBuilder()
        .input(item('tfc:cobble/' + var))
        .output(item('tfc:gravel/' + var))
        .energy(1600)
        .register()

    mods.immersiveengineering.crusher.recipeBuilder()
        .input(item('tfc:gravel/' + var))
        .output(item('tfc:sand/' + var))
        .energy(1600)
        .register()
}