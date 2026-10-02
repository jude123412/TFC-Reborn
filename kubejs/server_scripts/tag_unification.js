// These need to be run before other recipes
ServerEvents.tags('item', event => {
    
    // Add glue to slimeballs tag
    event.add('forge:slimeballs', 'tfc:glue')

    // Fix TFC Coke tags
    event.add('forge:dusts/coke', 'tfc:powder/coke')
    event.add('forge:dusts/coal_coke', 'tfc:powder/coke')
    event.remove('forge:dusts/coal_coke', 'tfc:powder/graphite')
    event.remove('minecraft:forgedusts/coke', 'tfc:powder/coke')

    // Alumina sources
    event.add('tfc:fireclay/alumina', 'tfc:powder/kaolinite')
    event.add('tfc:fireclay/alumina', '#forge:dusts/aluminum')
    
    // Carbon sources
    event.add('tfc:fireclay/carbon', 'tfc:powder/graphite')
    event.add('tfc:fireclay/carbon', '#forge:dusts/coal_coke')
})

ServerEvents.tags('fluid', event => {
    const red_steel_bucket = [
        'railcraft:creosote'
    ]

    for (const fluid of red_steel_bucket) {
        event.add('tfc:usable_in_wooden_bucket', fluid)
        event.add('tfc:usable_in_red_steel_bucket', fluid)
        event.add('tfc:usable_in_barrel', fluid)
    }
})
