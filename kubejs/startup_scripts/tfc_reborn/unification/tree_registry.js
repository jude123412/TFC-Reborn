StartupEvents.registry('item', event => {
    // TFC Debark Additions
	for (const wood in global.trees) {
		let t = global.trees[wood]

		// Bark/Powder
		if (t.generate_bark) {
			event.create(`tfc_debark:${wood}_bark`)
				.texture(`tfc_debark:item/${wood}_bark`)
				.tag('tfc:firepit_fuel')
				.tag(`forge:bark`)

			event.create(`tfc_debark:${wood}_bark_powder`)
				.texture(`tfc_debark:item/${wood}_bark_dust`)
				.tag('forge:bark_powder')
		}
	}
})