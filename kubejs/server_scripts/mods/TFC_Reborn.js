TFCEvents.data(event => {
    // Loose Andesite Rock
    event.itemHeat('tfc:rock/loose/andesite', 5.714, 900, 1100)
})

ServerEvents.recipes(event => {
    const tfc = event.recipes.tfc

    // Molten Andesite
    tfc.heating('tfc:rock/loose/andesite', 1450)
        .resultFluid(Fluid.of('kubejs:metal/andesite', 100))

    // Andesite Alloy
    tfc.alloy(
        'kubejs:andesite_alloy',
        [
            TFC.alloyPart('kubejs:andesite', 0.95, 1.00),
            TFC.alloyPart('tfc:wrought_iron', 0.01, 0.05)
        ]
    )
    tfc.alloy(
        'kubejs:andesite_alloy',
        [
            TFC.alloyPart('kubejs:andesite', 0.95, 1.00),
            TFC.alloyPart('tfc:zinc', 0.01, 0.05)
        ]
    )
})