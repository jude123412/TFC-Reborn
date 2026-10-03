TFCEvents.data(event => {
    // Loose Andesite Rock
    event.itemHeat('tfc:rock/loose/andesite', 5.714, 900, 1100)
})

ServerEvents.recipes(event => {
    const tfc = event.recipes.tfc
    const mekanism = event.recipes.mekanism
    const create = event.recipes.create

    // Molten Andesite
    tfc.heating('tfc:rock/loose/andesite', 1450)
        .resultFluid(Fluid.of('kubejs:metal/andesite', 100))

    // Andesite Alloy
    tfc.alloy(
        'kubejs:andesite_alloy',
        [
            TFC.alloyPart('kubejs:andesite', 0.95, 1.00),
            TFC.alloyPart('tfc:cast_iron', 0.01, 0.05)
        ]
    )
    tfc.alloy(
        'kubejs:andesite_alloy',
        [
            TFC.alloyPart('kubejs:andesite', 0.95, 1.00),
            TFC.alloyPart('tfc:zinc', 0.01, 0.05)
        ]
    )

    // Obsidian Powder
    event.remove({id: 'railcraft:crusher/crushing_obsidian'})
    event.remove({id: 'railcraft:crusher/crushing_crushed_obsidian'})
    event.remove({id: 'railcraft:crusher/crushing_personal_world_spike'})
    event.remove({id: 'create:crushing/obsidian'})
    event.remove({id: 'mekanism:enriching/conversion/obsidian_to_obsidian_dust'})
    create.crushing(['railcraft:crushed_obsidian', Item.of('kubejs:powder/obsidian').withChance(0.25)], '#forge:obsidian')
    create.crushing(['kubejs:powder/obsidian', Item.of('kubejs:powder/obsidian').withChance(0.25)], 'railcraft:crushed_obsidian')
    event.custom({
        type: "immersiveengineering:crusher",
        energy: 6000,
        input: {
            tag: 'forge:obsidian'
        },
        result: {
            item: 'railcraft:crushed_obsidian'
        },
        secondaries: [
            {
                chance: 0.50,
                output: {
                    item: 'kubejs:powder/obsidian'
                }
            }
        ]
    })
    event.custom({
        type: "immersiveengineering:crusher",
        energy: 6000,
        input: {
            item: 'railcraft:crushed_obsidian'
        },
        result: {
            item: 'kubejs:powder/obsidian'
        },
        secondaries: [
            {
                chance: 0.50,
                output: {
                    item: 'kubejs:powder/obsidian'
                }
            }
        ]
    })
    mekanism.enriching(Item.of('kubejs:powder/obsidian', 4), Item.of('#forge:obsidian'))
})