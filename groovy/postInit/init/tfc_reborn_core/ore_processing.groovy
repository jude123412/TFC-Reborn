def names = [
    'native_copper':'native_gold',
    'native_gold':'native_silver',
    'native_platinum':'native_iridium',
    'hematite':'garnierite',
    'native_silver':'galena',
    'cassiterite':'magnetite',
    'galena':'native_silver',
    'bismuthinite':'galena',
    'garnierite':'magnetite',
    'sphalerite':'bismuthinite',
    'stibnite':'spodumene',
    'spodumene':'galena',
    'native_iridium':'native_platinum',
    'native_ardite':'cobaltite',
    'native_osmium':'zircon',
    'bauxite':'sphalerite',
    'wolframite':'rutile',
    'cobaltite':'native_ardite',
    'rutile':'wolframite',
    'thorianite':'galena',
    'pyrolusite':'magnesite',
    'magnesite':'pyrolusite',
    'zircon':'native_silver',
]

for (entry in names) {
    mods.thermalexpansion.compactor.recipeBuilder()
    .input(item('tfcreborncore:ore/' + entry.key + '_pile') * 5)
    .output(item('tfcreborncore:ore/' + entry.key + '_cube'))
    .mode(compactorMode('all'))
    .energy(4000)
    .register()

    mods.thermalexpansion.compactor.recipeBuilder()
    .input(item('tfcreborncore:ore/' + entry.key + '_cube') * 4)
    .output(item('tfcreborncore:ore/' + entry.key + '_bar'))
    .mode(compactorMode('all'))
    .energy(4000)
    .register()

    mods.immersiveengineering.squeezer.recipeBuilder()
    .input(item('tfcreborncore:ore/' + entry.key + '_pile') * 5)
    .output(item('tfcreborncore:ore/' + entry.key + '_cube'))
    .energy(400)
    .register()

    mods.immersiveengineering.squeezer.recipeBuilder()
    .input(item('tfcreborncore:ore/' + entry.key + '_cube') * 4)
    .output(item('tfcreborncore:ore/' + entry.key + '_bar'))
    .energy(400)
    .register()

    mods.thermalexpansion.pulverizer.recipeBuilder()
    .input(item('tfc:ore/small/' + entry.key))
    .output(item('tfcreborncore:ore/' + entry.key + '_pile') * 2, item('tfcreborncore:ore/' + entry.value + '_pile'))
    .chance(10)
    .energy(2000)
    .register()

    mods.thermalexpansion.pulverizer.recipeBuilder()
    .input(item('tfc:ore/' + entry.key))
    .output(item('tfcreborncore:ore/' + entry.key + '_pile') * 3, item('tfcreborncore:ore/' + entry.value + '_pile'))
    .chance(15)
    .energy(3000)
    .register()

    mods.thermalexpansion.pulverizer.recipeBuilder()
    .input(item('tfc:ore/' + entry.key, 1))
    .output(item('tfcreborncore:ore/' + entry.key + '_pile') * 5, item('tfcreborncore:ore/' + entry.value + '_pile'))
    .chance(25)
    .energy(5000)
    .register()

    mods.thermalexpansion.pulverizer.recipeBuilder()
    .input(item('tfc:ore/' + entry.key, 2))
    .output(item('tfcreborncore:ore/' + entry.key + '_pile') * 7, item('tfcreborncore:ore/' + entry.value + '_pile'))
    .chance(35)
    .energy(7000)
    .register()

    mods.immersiveengineering.crusher.recipeBuilder()
    .input(item('tfc:ore/small/' + entry.key))
    .output(item('tfcreborncore:ore/' + entry.key + '_pile') * 4)
    .secondaryOutput(item('tfcreborncore:ore/' + entry.value + '_pile'), 0.20)
    .energy(200)
    .register()

    mods.immersiveengineering.crusher.recipeBuilder()
    .input(item('tfc:ore/' + entry.key))
    .output(item('tfcreborncore:ore/' + entry.key + '_pile') * 6)
    .secondaryOutput(item('tfcreborncore:ore/' + entry.value + '_pile'), 0.30)
    .energy(200)
    .register()

    mods.immersiveengineering.crusher.recipeBuilder()
    .input(item('tfc:ore/' + entry.key, 1))
    .output(item('tfcreborncore:ore/' + entry.key + '_pile') * 10)
    .secondaryOutput(item('tfcreborncore:ore/' + entry.value + '_pile'), 0.50)
    .energy(200)
    .register()

    mods.immersiveengineering.crusher.recipeBuilder()
    .input(item('tfc:ore/' + entry.key, 2))
    .output(item('tfcreborncore:ore/' + entry.key + '_pile') * 14)
    .secondaryOutput(item('tfcreborncore:ore/' + entry.value + '_pile'), 0.70)
    .energy(200)
    .register()
}