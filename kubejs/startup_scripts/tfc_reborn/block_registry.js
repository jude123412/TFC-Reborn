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

    // Unfired Insulator
    event.create('insulator/unfired_ceramic')
        .gravelSoundType()
        .hardness(0.6)
        .resistance(0.5)
        .fullBlock(false)
        .notSolid()
        .box(5, 0, 5, 11, 8, 11)
        .tagBlock('minecraft:mineable/shovel')
    
    // Insulator
    event.create('insulator/ceramic')
        .stoneSoundType()
        .hardness(1.5)
        .resistance(6)
        .requiresTool(true)
        .fullBlock(false)
        .notSolid()
        .box(5, 0, 5, 11, 8, 11)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')

    // Glass Insulator
    event.create('insulator/glass')
        .glassSoundType()
        .hardness(1.5)
        .resistance(6)
        .requiresTool(true)
        .fullBlock(false)
        .notSolid()
        .renderType('translucent')
        .box(5, 0, 5, 11, 14, 11)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
    
    // Precision Machine Frame
    event.create('precision_machine_frame')
        .textureAll('kubejs:block/precision_machine_frame')
        .soundType(SoundType.METAL)
        .hardness(5)
        .resistance(12)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')

    // Refactory Clay Block
    event.create('refactory_clay_block')
        .textureAll('kubejs:block/refactory_clay_block')
        .soundType(SoundType.GRAVEL)
        .hardness(0.6)
        .resistance(1.2)
        .requiresTool(false)
        .tagBlock('minecraft:mineable/shovel')

    // Refactory Bricks
    event.create('refactory_bricks')
        .textureAll('kubejs:block/refactory_bricks')
        .soundType(SoundType.STONE)
        .hardness(5)
        .resistance(12)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')

    // Wrought Iron Reinforced Fire Bricks
    event.create('iron_reinforced_fire_bricks')
        .textureAll('kubejs:block/iron_reinforced_fire_bricks')
        .soundType(SoundType.DEEPSLATE_BRICKS)
        .hardness(5)
        .resistance(12)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')

    // Steel Reinforced Fire Bricks
    event.create('steel_reinforced_fire_bricks')
        .textureAll('kubejs:block/steel_reinforced_fire_bricks')
        .soundType(SoundType.NETHER_BRICKS)
        .hardness(6)
        .resistance(20)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
})