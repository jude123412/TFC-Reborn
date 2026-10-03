TFCEvents.data(event => {
    // Pumpkin Pie Slice
    event.foodItem('farmersdelight:pumpkin_pie_slice', food => {
        food.hunger(4)
        food.fruit(0.4)
        food.grain(0.1)
        food.saturation(1.0)
        food.decayModifier(3.0)
    })

    // Pumpkin Slice
    event.foodItem('farmersdelight:pumpkin_slice', food => {
        food.hunger(2)
        food.fruit(0.4)
        food.saturation(1.0)
        food.decayModifier(1.5)
    })
})

ServerEvents.recipes(event => {
    const fd = event.recipes.farmersdelight

    event.remove({id: 'farmersdelight:canvas'})
    
    //Fix Straw Recipes
    event.remove({output: 'farmersdelight:straw'})
    event.remove({output: 'farmersdelight:straw_bale'})
    event.remove({id: 'farmersdelight:straw'})
    event.replaceInput({input: 'farmersdelight:straw'},
    'farmersdelight:straw',
    'tfc:straw')

    event.remove({id: 'survivorsdelight:crafting/misc/fd_straw2tfc_straw'})
    event.remove({id: 'survivorsdelight:crafting/fd_straw2tfc_straw'})
    event.shapeless(Item.of('farmersdelight:straw_bale', 1), [
        'minecraft:hay_block'
    ])

    fd.cutting(
        'mynethersdelight:powdery_block',
        '#minecraft:axes',
        [
            'mynethersdelight:stripped_powdery_block',
            'tfc:straw'
        ],
    )

    // Magma Cake
    event.remove({id: 'beneathdelight:crafting/cake/magma_cake'})
    event.remove({id: 'mynethersdelight:crafting/magma_cake'})
    event.shaped(
        Item.of('mynethersdelight:magma_cake_block', 1),
        [
            'MMM',
            'PCP',
            'SSS'
        ],
        {
            M: 'beneathdelight:sweetened_magma_cream',
            P: 'mynethersdelight:pepper_powder',
            C: 'mynethersdelight:hot_cream',
            S: 'tfc:straw'
        }
    )

    // Pumpkin Pie Slice
    event.shapeless(
        Item.of('farmersdelight:pumpkin_pie_slice', 4),
        [
            'minecraft:pumpkin_pie',
            '#forge:tools/knives'
        ]
    ).damageIngredient('#forge:tools/knives')
})