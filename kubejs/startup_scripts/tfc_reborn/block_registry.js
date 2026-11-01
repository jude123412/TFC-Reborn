StartupEvents.registry('block', event => {

    // Block of Coal Coke
    event.create('coal_coke_block')
        .textureAll('kubejs:block/coal_coke')
        .stoneSoundType()
        .hardness(5)
        .resistance(6)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagItem('tfc:forge_fuel')
        .tagItem('rosia:fire_box_fuel')
        .tagItem('forge:storage_blocks')
        .tagItem('forge:storage_blocks/coal_coke')
})