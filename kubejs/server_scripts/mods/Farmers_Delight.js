ServerEvents.recipes(event => {
    const fd = event.recipes.farmersdelight
    
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
})