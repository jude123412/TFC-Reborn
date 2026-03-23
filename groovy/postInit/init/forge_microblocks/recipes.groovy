crafting.remove('microblockcbe:stone_rod')
crafting.remove('microblockcbe:stone_saw')
crafting.remove('microblockcbe:iron_saw')
crafting.remove('microblockcbe:diamond_saw')

// Stone Rod
crafting.shapedBuilder()
    .output(item('microblockcbe:stone_rod') * 4)
    .shape([
        [null,ore('stone'),null],
        [ore('stone'),null,null],
        [null,null,null]
    ])
    .register()

// Stone Saw/Copper Block Saw
crafting.shapedBuilder()
    .output(item('microblockcbe:saw_stone'))
    .shape([
        [null,null,null],
        [ore('rodStone'),ore('rodStone'),ore('stickWood')],
        [ore('rodStone'),item('tfc:metal/saw_blade/copper'),ore('stickWood')]
    ])
    .register()

// Iron Saw/Wrought Iron Block Saw
crafting.shapedBuilder()
    .output(item('microblockcbe:saw_iron'))
    .shape([
        [null,null,null],
        [ore('rodStone'),ore('rodStone'),ore('stickWood')],
        [ore('rodStone'),item('tfc:metal/saw_blade/wrought_iron'),ore('stickWood')]
    ])
    .register()

// Diamond Saw/Black Steel Block Saw
crafting.shapedBuilder()
    .output(item('microblockcbe:saw_diamond'))
    .shape([
        [null,null,null],
        [ore('rodStone'),ore('rodStone'),ore('stickWood')],
        [ore('rodStone'),item('tfc:metal/saw_blade/black_steel'),ore('stickWood')]
    ])
    .register()