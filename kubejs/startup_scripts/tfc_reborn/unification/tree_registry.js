StartupEvents.registry('item', event => {
    // TFC Debark Additions
    for (const wood in global.integration_trees) {
        let t = global.integration_trees[wood]

        // Bark
        global.createIfNeeded(t.bark, () => {
            event.create(t.bark)
                .texture(`kubejs:item/wood/bark/${wood}`)
                .tag('tfc:firepit_fuel')
                .tag(`forge:bark`)
        })
        
        // Bark Powder
        global.createIfNeeded(t.bark_powder, () => {
            event.create(t.bark_powder)
                .texture(`kubejs:item/wood/bark_powder/${wood}`)
                .tag('forge:bark_powder')
        })

        // Lumber
        global.createIfNeeded(t.lumber, () => {
            event.create(t.lumber)
                .texture(`kubejs:item/wood/lumber/${wood}`)
                .tag('tfc:lumber')
        })
    }
})

StartupEvents.registry('block', event => {
    for (const wood in global.integration_trees) {
        let t = global.integration_trees[wood]

        global.createIfNeeded(t.support, () => {
            event.create(t.support, 'tfc:support')
                .textureAll(`kubejs:block/wood/support/${wood}`)
                .tagBlock('minecraft:mineable/axe')
                .tagBoth('tfc:support_beams')
        })
    }
})