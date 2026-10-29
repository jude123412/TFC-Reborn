ItemEvents.modification(event => {

    // This makes Netherite tools and armor
    // sit between blacksteel and bluesteel
    // in terms of durability
    const netherite_tools = [
        'minecraft:netherite_shovel',
        'minecraft:netherite_pickaxe',
        'minecraft:netherite_axe',
        'minecraft:netherite_hoe',
        'minecraft:netherite_sword'
    ]

    for (const tool of netherite_tools) {
        event.modify(tool, item => {
            item.maxDamage = 5350
        })
    }

    event.modify('minecraft:netherite_helmet', item => {
        item.maxDamage = 649
    })
    event.modify('minecraft:netherite_chestplate', item => {
        item.maxDamage = 944
    })
    event.modify('minecraft:netherite_leggings', item => {
        item.maxDamage = 855
    })
    event.modify('minecraft:netherite_boots', item => {
        item.maxDamage = 755
    })
})
