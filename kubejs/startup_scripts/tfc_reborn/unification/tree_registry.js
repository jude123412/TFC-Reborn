StartupEvents.registry('item', event => {
    // TFC Debark Additions
	for (const wood in global.trees) {
		let t = global.trees[wood]

		if (t.generate_bark) {
            // Bark
			event.create(`tfc_debark:${wood}_bark`)
				.texture(`tfc_debark:item/${wood}_bark`)
				.tag('tfc:firepit_fuel')
				.tag(`forge:bark`)
            // Bark Powder
			event.create(`tfc_debark:${wood}_bark_powder`)
				.texture(`tfc_debark:item/${wood}_bark_dust`)
				.tag('forge:bark_powder')
		}
	}

    for (const wood in global.integration_trees) {
        let t = global.integration_trees[wood]

        if (t.generate_components) {
            // Bark
            event.create(`tfc_debark:${wood}_bark`)
                .texture(`tfc_debark:item/${wood}_bark`)
                .tag('tfc:firepit_fuel')
                .tag(`forge:bark`)

            // Bark Powder
            event.create(`tfc_debark:${wood}_bark_powder`)
                .texture(`tfc_debark:item/${wood}_bark_dust`)
                .tag('forge:bark_powder')

            // Lumber
            event.create(`kubejs:wood/lumber/${wood}`)
                .texture(`kubejs:item/wood/lumber/${wood}`)
                .tag('tfc:lumber')
        }
    }
})

StartupEvents.registry('block', event => {
    for (const wood in global.integration_trees) {
        let t = global.integration_trees[wood]

        if (t.generate_components) {
            event.create(`kubejs:wood/support/${wood}`, 'tfc:support')
                .textureAll(`kubejs:block/wood/support/${wood}`)
                .tagBlock('minecraft:mineable/axe')
                .tagBoth('tfc:support_beams')
        }
    }
})