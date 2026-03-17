// Recipes to remove
def recipesToRemove = [
    'immersiveengineering:stone_decoration/cokebrick',
    'immersiveengineering:stone_decoration/hempcrete',
    'immersiveengineering:stone_decoration/concrete2',
    'immersiveengineering:stone_decoration/concrete',
    'immersiveengineering:stone_decoration/concrete_leaded',
    'immersiveengineering:stone_decoration/hempcrete_stairs',
    'immersiveengineering:stone_decoration/concrete_stairs',
    'immersiveengineering:stone_decoration/concrete_tile_stairs',
    'immersiveengineering:stone_decoration/concrete_leaded_stairs',
    'immersiveengineering:stone_decoration/insulating_glass',
    'immersiveengineering:stone_decoration/alloybrick',
    'immersiveengineering:treated_wood/treated_wood',
    'immersiveengineering:treated_wood/treated_wood_stairs0',
    'immersiveengineering:treated_wood/treated_wood_stairs1',
    'immersiveengineering:treated_wood/treated_wood_stairs2',
    'immersiveengineering:treated_wood/treated_wood_fence',
    'immersiveengineering:treated_wood/treated_wood_scaffolding',
    'immersiveengineering:wooden_devices/item_router',
]

// Coke Oven
crafting.shapedBuilder()
    .output(item('immersiveengineering:stone_decoration'))
    .shape([
        [ore('clay'),ore('ingotBrick'),ore('clay')],
        [ore('ingotBrick'),ore('stoneBrick'),ore('ingotBrick')],
        [ore('clay'),ore('ingotBrick'),ore('clay')]
    ])
    .register()

// Hempcrete
crafting.shapelessBuilder()
    .output(item('immersiveengineering:stone_decoration', 4) * 2)
    .input([
        item('tfc:crop/product/jute_fiber'),
        item('tfc:aggregate'),
        item('tfc:aggregate'),
    ])
    .register()

// Concrete
crafting.shapelessBuilder()
    .output(item('immersiveengineering:stone_decoration', 5) * 2)
    .input([
        ore('clay'),
        item('tfc:aggregate'),
        item('tfc:aggregate'),
        ore('dustLime')
    ])
    .register()
crafting.shapelessBuilder()
    .output(item('immersiveengineering:stone_decoration', 5) * 4)
    .input([
        ore('crystalSlag'),
        item('tfc:aggregate'),
        item('tfc:aggregate'),
        ore('dustLime')
    ])
    .register()

// Leaded Concrete
crafting.shapelessBuilder()
    .output(item('immersiveengineering:stone_decoration', 7) * 2)
    .input([
        ore('sheetLead'),
        item('immersiveengineering:stone_decoration', 5),
        item('immersiveengineering:stone_decoration', 5)
    ])
    .register()

// Insulating Glass
crafting.shapedBuilder()
    .output(item('immersiveengineering:stone_decoration', 8) * 2)
    .shape([
        [ore('dustWroughtIron'),ore('blockGlass'),null],
        [ore('blockGlass'),ore('dyeGreen'),null],
        [null,null,null]
    ])
    .register()

// Treated Wood Fence
crafting.shapedBuilder()
    .output(item('immersiveengineering:wooden_decoration') * 8)
    .shape([
        [null,null,null],
        [ore('plankTreatedWood'),ore('stickTreatedWood'),ore('plankTreatedWood')],
        [ore('plankTreatedWood'),ore('stickTreatedWood'),ore('plankTreatedWood')]
    ])
    .register()

// Treated Wood Scaffolding
crafting.shapedBuilder()
    .output(item('immersiveengineering:wooden_decoration', 1) * 6)
    .shape([
        [item('immersiveengineering:treated_wood'),item('immersiveengineering:treated_wood'),item('immersiveengineering:treated_wood')],
        [ore('screwAnyBronze'),ore('stickTreatedWood'),ore('screwAnyBronze')],
        [ore('stickTreatedWood'),ore('screwAnyBronze'),ore('stickTreatedWood')]
    ])
    .register()

def stairRecipeItems = [
    (item('immersiveengineering:stone_decoration', 4)):(item('immersiveengineering:stone_decoration_stairs_hempcrete') * 8),
    (item('immersiveengineering:stone_decoration', 5)):(item('immersiveengineering:stone_decoration_stairs_concrete') * 8),
    (item('immersiveengineering:stone_decoration', 6)):(item('immersiveengineering:stone_decoration_stairs_concrete_tile') * 8),
    (item('immersiveengineering:stone_decoration', 7)):(item('immersiveengineering:stone_decoration_stairs_concrete_leaded') * 8),
    (item('immersiveengineering:treated_wood')):(item('immersiveengineering:treated_wood_stairs0') * 8),
    (item('immersiveengineering:treated_wood', 1)):(item('immersiveengineering:treated_wood_stairs1') * 8),
    (item('immersiveengineering:treated_wood', 2)):(item('immersiveengineering:treated_wood_stairs2') * 8)
]

for (entry in stairRecipeItems) {
    crafting.shapedBuilder()
        .output(entry.value)
        .shape([
            [entry.key,null,null],
            [entry.key,entry.key,null],
            [entry.key,entry.key,entry.key]
        ])
        .register()
}

for (id in recipesToRemove) {
    crafting.remove(id)
}

// crafting.shapedBuilder()
//     .output(null)
//     .shape([
//         [null,null,null],
//         [null,null,null],
//         [null,null,null]
//     ])
//     .register()

// crafting.shapelessBuilder()
//     .output(null)
//     .input([
//          null
//     ])
//     .register()