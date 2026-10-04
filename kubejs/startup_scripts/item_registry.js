StartupEvents.registry('item', event => {
    // Obsidian Powder
    event.create(`kubejs:powder/obsidian`)
        .texture(`kubejs:item/powder/obsidian`)
        .translationKey(`kubejs:item/powder/obsidian`)
        .tag('forge:dusts')
        .tag(`forge:dusts/obsidian`)
    
    // Coal Coke
    event.create(`kubejs:coal_coke`)
        .texture(`kubejs:item/coal_coke`)
        .translationKey(`kubejs:item/coal_coke`)
        .tag('forge:coal_coke')
        .tag('tfc:forge_fuel')
        .tag('rosia:fire_box_fuel')
})