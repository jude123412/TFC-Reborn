import classes.postInit.Utils

def ores = [
    'native_copper':'native_gold',
    'native_gold':'native_silver',
    'native_platinum':'native_iridium',
    'hematite':'garnierite',
    'native_silver':'galena',
    'cassiterite':'magnetite',
    'galena':'native_silver',
    'bismuthinite':'galena',
    'garnierite':'magnetite',
    'malachite':'bismuthinite',
    'magnetite':'tetrahedrite',
    'limonite':'wolframite',
    'sphalerite':'bismuthinite',
    'tetrahedrite':'cassiterite',
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

def oresInduction = [
    'native_copper': ['copper', 'gold'],
    'native_gold': ['gold', 'silver'],
    'native_platinum': ['platinum', 'iridium'],
    'hematite': ['wrought_iron', 'nickel'],
    'native_silver': ['silver', 'lead'],
    'cassiterite': ['tin', 'wrought_iron'],
    'galena': ['lead', 'silver'],
    'bismuthinite': ['bismuth', 'lead'],
    'garnierite': ['nickel', 'wrought_iron'],
    'malachite': ['copper', 'bismuth'],
    'magnetite': ['wrought_iron', 'copper'],
    'limonite': ['wrought_iron', 'tungsten'],
    'sphalerite': ['zinc', 'bismuth'],
    'tetrahedrite': ['copper', 'tin'],
    'stibnite': ['antimony', 'lithium'],
    'spodumene': ['lithium', 'lead'],
    'native_iridium': ['iridium', 'platinum'],
    'native_ardite': ['ardite', 'cobalt'],
    'native_osmium': ['osmium', 'zirconium'],
    'bauxite': ['aluminium', 'zinc'],
    'wolframite': ['tungsten', 'titanium'],
    'cobaltite': ['cobalt', 'ardite'],
    'rutile': ['titanium', 'tungsten'],
    'thorianite': ['thorium', 'lead'],
    'pyrolusite': ['manganese', 'magnesium'],
    'magnesite': ['magnesium', 'manganese'],
    'zircon': ['zirconium', 'silver']
]

// Main loop
for (entry in ores) {
    mods.immersiveengineering.squeezer.recipeBuilder()
        .input(item('tfcreborncore:ore/pile/' + entry.key) * 5)
        .output(item('tfcreborncore:ore/cube/' + entry.key))
        .energy(400)
        .register()

    mods.immersiveengineering.squeezer.recipeBuilder()
        .input(item('tfcreborncore:ore/cube/' + entry.key) * 4)
        .output(item('tfcreborncore:ore/bar/' + entry.key))
        .energy(400)
        .register()

    mods.immersiveengineering.crusher.recipeBuilder()
        .input(item('tfc:ore/small/' + entry.key))
        .output(item('tfcreborncore:ore/pile/' + entry.key) * 4)
        .secondaryOutput(item('tfcreborncore:ore/pile/' + entry.value), 0.20)
        .energy(200)
        .register()

    mods.immersiveengineering.crusher.recipeBuilder()
        .input(item('tfc:ore/' + entry.key, 1))
        .output(item('tfcreborncore:ore/pile/' + entry.key) * 6)
        .secondaryOutput(item('tfcreborncore:ore/pile/' + entry.value), 0.30)
        .energy(200)
        .register()

    mods.immersiveengineering.crusher.recipeBuilder()
        .input(item('tfc:ore/' + entry.key))
        .output(item('tfcreborncore:ore/pile/' + entry.key) * 10)
        .secondaryOutput(item('tfcreborncore:ore/pile/' + entry.value), 0.50)
        .energy(200)
        .register()

    mods.immersiveengineering.crusher.recipeBuilder()
        .input(item('tfc:ore/' + entry.key, 2))
        .output(item('tfcreborncore:ore/pile/' + entry.key) * 14)
        .secondaryOutput(item('tfcreborncore:ore/pile/' + entry.value), 0.70)
        .energy(200)
        .register()
}


// Secondary Processing
for (entry in oresInduction) {
    mods.immersiveengineering.arc_furnace.recipeBuilder()
        .mainInput(item('tfcreborncore:ore/bar/' + entry.key))
        .input(ore('sand'))
        .output(item('tfc:metal/ingot/' + entry.value[0]) * 2)
        .time(80)
        .energyPerTick(1600)
        .slag(item('tfcreborncore:item/rich_slag'))
        .register()

    mods.immersiveengineering.arc_furnace.recipeBuilder()
        .mainInput(item('tfcreborncore:ore/bar/' + entry.key))
        .input(ore('crystalSlagRich'))
        .output(item('tfc:metal/ingot/' + entry.value[0]) * 2)
        .time(80)
        .energyPerTick(1600)
        .slag(item('tfcreborncore:item/slag'))
        .register()

    mods.immersiveengineering.arc_furnace.recipeBuilder()
        .mainInput(item('tfcreborncore:ore/bar/' + entry.key))
        .input(ore('gemCinnabar'))
        .output(item('tfc:metal/ingot/' + entry.value[0]) * 2)
        .time(80)
        .energyPerTick(1600)
        .slag(item('tfc:metal/ingot/' + entry.value[1]))
        .register()
}