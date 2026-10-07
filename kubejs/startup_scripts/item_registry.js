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

    // Iron Sawblade
    event.create(`kubejs:iron_sawblade`)
        .texture(`kubejs:item/iron_sawblade`)
        .translationKey(`kubejs:item/iron_sawblade`)
        .tag('forge:sawblades')

    // Elytra Left
    event.create(`kubejs:elytra/left_wing`)
        .texture(`kubejs:item/elytra_left_wing`)
        .translationKey(`kubejs:item/elytra_left_wing`)

    // Elytra Right
    event.create(`kubejs:elytra/right_wing`)
        .texture(`kubejs:item/elytra_right_wing`)
        .translationKey(`kubejs:item/elytra_right_wing`)
})