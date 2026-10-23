StartupEvents.registry('item', event => {
    // Obsidian Powder
    event.create('kubejs:powder/obsidian')
        .texture('kubejs:item/powder/obsidian')
        .translationKey('kubejs:item/powder/obsidian')
        .tag('forge:dusts')
        .tag('forge:dusts/obsidian')

    // Sawdust
    event.create('kubejs:powder/wood')
        .texture('kubejs:item/powder/wood')
        .translationKey('kubejs:item/powder/wood')
        .tag('forge:dusts')
        .tag('forge:dusts/wood')
        .tag('forge:sawdust')
    
    // Coal Coke
    event.create('kubejs:coal_coke')
        .texture('kubejs:item/coal_coke')
        .translationKey('kubejs:item/coal_coke')
        .tag('forge:coal_coke')
        .tag('tfc:forge_fuel')
        .tag('rosia:fire_box_fuel')

    // Iron Sawblade
    event.create('kubejs:iron_sawblade')
        .texture('kubejs:item/iron_sawblade')
        .translationKey('kubejs:item/iron_sawblade')
        .tag('forge:sawblades')

    // Elytra Left
    event.create('kubejs:elytra/left_wing')
        .texture('kubejs:item/elytra_left_wing')
        .translationKey('kubejs:item/elytra_left_wing')

    // Elytra Right
    event.create('kubejs:elytra/right_wing')
        .texture('kubejs:item/elytra_right_wing')
        .translationKey('kubejs:item/elytra_right_wing')

    event.create('kubejs:refactory_clay')
        .texture('kubejs:item/refactory_clay')
        .translationKey('kubejs:item/refactory_clay')
        .tag('tfc:refactory_clay_knapping')
        .tag('tfc:any_knapping')
        .tag('forge:refactory_clay')

    event.create('kubejs:unfired_refactory_brick')
        .texture('kubejs:item/unfired_refactory_brick')
        .translationKey('kubejs:item/unfired_refactory_brick')
        .tag('tfc:refactory_clay_recycle_1')

    event.create('kubejs:refactory_brick')
        .texture('kubejs:item/refactory_brick')
        .translationKey('kubejs:item/refactory_brick')
})