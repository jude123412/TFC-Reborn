def recipesToRemove = [
    'chiselsandbits:positiveprint',
    'chiselsandbits:negativeprint',
    'chiselsandbits:mirrorprint',
    'chiselsandbits:bit_bag',
]

// Positive Chisel Design
crafting.shapelessBuilder()
    .output(item('chiselsandbits:positiveprint'))
    .input([
         ore('paper'),
         ore('dyeBlue')
    ])
    .register()

// Negative Chisel Design
crafting.shapelessBuilder()
    .output(item('chiselsandbits:negativeprint'))
    .input([
         ore('paper'),
         ore('dyeRed')
    ])
    .register()

// Mirror Chisel Design
crafting.shapelessBuilder()
    .output(item('chiselsandbits:mirrorprint'))
    .input([
         ore('paper'),
         ore('dyeYellow')
    ])
    .register()

//Chiseled Bit Bag
crafting.shapedBuilder()
    .output(item('chiselsandbits:bit_bag'))
    .shape([
        [ore('string')],
        [item('tfc:hide/raw/small')],
    ])
    .register()

// Recipe Removal
for (var in recipesToRemove) {
    crafting.remove(var)
}