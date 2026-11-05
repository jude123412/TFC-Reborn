StartupEvents.registry('item', event => {
    // TFC Ore Additions
	for (const ore in global.metal_ores) {
		let o = global.metal_ores[ore]

		if (o.generate_powder) {
			event.create(`${o.mod_id}:powder/${ore}`)
				.texture(`${o.mod_id}:item/powder/${ore}`)
				.tag('forge:dusts')
				.tag(`tfc:powders`)
		}

		if (o.generate_pellet) {
			event.create(`tfcoreprocessing:pellet/${ore}`)
				.texture(`tfcoreprocessing:item/pellet/${ore}`)
				.tag('forge:pellets')
				.tag(`forge:pellets/${ore}`)
		}
	}
})