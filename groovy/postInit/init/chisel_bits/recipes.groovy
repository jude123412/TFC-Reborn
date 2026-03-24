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
        [null,ore('string'),null],
        [null,item('tfc:hide/raw/small'),null],
        [null,null,null]
    ])
    .register()

// Recipe Removal
for (var in recipesToRemove) {
    crafting.remove(var)
}