def recipesToRemove = [
    'chisel:chisel_iron',
    'chisel:chisel_diamond',
    'chisel:chisel_hitech',
    'minecraft:fluxedchiselthermalexpansion'
]

// Chisel
crafting.shapedBuilder()
    .output(item('chisel:chisel_iron'))
    .shape([
        [null,ore('ingotCopper'),null],
        [ore('stickWood'),null,null]
    ])
    .register()

// Diamond Chisel
crafting.shapedBuilder()
    .output(item('chisel:chisel_diamond'))
    .shape([
        [null,ore('ingotIron'),null],
        [ore('stickWood'),null,null]
    ])
    .register()


// IChisel
crafting.shapelessBuilder()
    .output(item('chisel:chisel_hitech'))
    .input([
         item('chisel:chisel_diamond'),
         ore('gemNormal'),
         ore('ingotSterlingSilver')
    ])
    .register()

// Fluxed Chisel
crafting.shapedBuilder()
    .output(item('powerchisels:fluxed_chisel'))
    .shape([
        [ore('sheetSterlingSilver'),item('chisel:chisel_hitech')],
        [item('thermalfoundation:material', 640),ore('sheetSterlingSilver')]
    ])
    .register()

// Recipe Removal
for (var in recipesToRemove) {
    crafting.remove(var)
}