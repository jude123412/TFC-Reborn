import classes.postInit.Utils

def ores1 = [
    'copper':['native_copper', 'native_gold'],
    'gold':['native_gold', 'native_silver'],
    'platinum':['native_platinum', 'native_iridium'],
    'wrought_iron':['hematite', 'garnierite'],
    'silver':['native_silver', 'galena'],
    'tin':['cassiterite', 'hematite'],
    'lead':['galena', 'native_silver'],
    'bismuth':['bismuthinite', 'galena'],
    'nickel':['garnierite', 'native_platinum'],
    'zinc':['sphalerite', 'bismuthinite'],
    'antimony':['stibnite', 'spodumene'],
    'lithium':['spodumene', 'galena'],
    'iridium':['native_iridium', 'native_platinum'],
    'ardite':['native_ardite', 'cobaltite'],
    'osmium':['native_osmium', 'zircon'],
    'aluminium':['bauxite', 'sphalerite'],
    'tungsten':['wolframite', 'rutile'],
    'cobalt':['cobaltite', 'native_ardite'],
    'titanium':['rutile', 'wolframite'],
    'thorium':['thorianite', 'galena'],
    'manganese':['pyrolusite', 'magnesite'],
    'magnesium':['magnesite', 'pyrolusite'],
    'zirconium':['zircon', 'native_silver'],
]

// Main loop
for (entry in ores1) {
    mods.thermalexpansion.compactor.recipeBuilder()
    .input(ore('pile' + Utils.toPascal(entry.key)) * 5)
    .output(item('tfcreborncore:ore/' + entry.value[0] + '_cube'))
    .mode(compactorMode('all'))
    .energy(4000)
    .register()

    mods.thermalexpansion.compactor.recipeBuilder()
    .input(ore('cube' + Utils.toPascal(entry.key)) * 4)
    .output(item('tfcreborncore:ore/' + entry.value[0] + '_bar'))
    .mode(compactorMode('all'))
    .energy(4000)
    .register()

    mods.immersiveengineering.squeezer.recipeBuilder()
    .input(ore('pile' + Utils.toPascal(entry.key)) * 5)
    .output(item('tfcreborncore:ore/' + entry.value[0] + '_cube'))
    .energy(400)
    .register()

    mods.immersiveengineering.squeezer.recipeBuilder()
    .input(ore('cube' + Utils.toPascal(entry.key)) * 4)
    .output(item('tfcreborncore:ore/' + entry.value[0] + '_bar'))
    .energy(400)
    .register()

    mods.thermalexpansion.pulverizer.recipeBuilder()
    .input(ore('oreSmall' + Utils.toPascal(entry.key)))
    .output(item('tfcreborncore:ore/' + entry.value[0] + '_pile') * 2, item('tfcreborncore:ore/' + entry.value[1] + '_pile'))
    .chance(10)
    .energy(2000)
    .register()

    mods.thermalexpansion.pulverizer.recipeBuilder()
    .input(ore('orePoor' + Utils.toPascal(entry.key)))
    .output(item('tfcreborncore:ore/' + entry.value[0] + '_pile') * 3, item('tfcreborncore:ore/' + entry.value[1] + '_pile'))
    .chance(15)
    .energy(3000)
    .register()

    mods.thermalexpansion.pulverizer.recipeBuilder()
    .input(ore('oreNormal' + Utils.toPascal(entry.key)))
    .output(item('tfcreborncore:ore/' + entry.value[0] + '_pile') * 5, item('tfcreborncore:ore/' + entry.value[1] + '_pile'))
    .chance(25)
    .energy(5000)
    .register()

    mods.thermalexpansion.pulverizer.recipeBuilder()
    .input(ore('oreRich' + Utils.toPascal(entry.key)))
    .output(item('tfcreborncore:ore/' + entry.value[0] + '_pile') * 7, item('tfcreborncore:ore/' + entry.value[1] + '_pile'))
    .chance(35)
    .energy(7000)
    .register()

    mods.immersiveengineering.crusher.recipeBuilder()
    .input(ore('oreSmall' + Utils.toPascal(entry.key)))
    .output(item('tfcreborncore:ore/' + entry.value[0] + '_pile') * 4)
    .secondaryOutput(item('tfcreborncore:ore/' + entry.value[1] + '_pile'), 0.20)
    .energy(200)
    .register()

    mods.immersiveengineering.crusher.recipeBuilder()
    .input(ore('orePoor' + Utils.toPascal(entry.key)))
    .output(item('tfcreborncore:ore/' + entry.value[0] + '_pile') * 6)
    .secondaryOutput(item('tfcreborncore:ore/' + entry.value[1] + '_pile'), 0.30)
    .energy(200)
    .register()

    mods.immersiveengineering.crusher.recipeBuilder()
    .input(ore('oreNormal' + Utils.toPascal(entry.key)))
    .output(item('tfcreborncore:ore/' + entry.value[0] + '_pile') * 10)
    .secondaryOutput(item('tfcreborncore:ore/' + entry.value[1] + '_pile'), 0.50)
    .energy(200)
    .register()

    mods.immersiveengineering.crusher.recipeBuilder()
    .input(ore('oreRich' + Utils.toPascal(entry.key)))
    .output(item('tfcreborncore:ore/' + entry.value[0] + '_pile') * 14)
    .secondaryOutput(item('tfcreborncore:ore/' + entry.value[1] + '_pile'), 0.70)
    .energy(200)
    .register()
}