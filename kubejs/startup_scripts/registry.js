StartupEvents.registry('item', event => {
		// TFC Metal Additions
		for(const metal in global.metals) {
			let m = global.metals[metal]

			// Plate Registry
			if (m.generate_plate) {
				event.create(`kubejs:metal/plate/${metal}`)
					.texture(`kubejs:item/metal/plate/${metal}`)
					.translationKey(`kubejs:item/metal/plate/${metal}`)
					.tag(`forge:plates/${metal}`)
			}
		}

		// TFC Ore Additions
		for (const ore in global.metal_ores) {
			let o = global.metal_ores[ore]

			if (o.generate_powder) {
				event.create(`${o.mod_id}:powder/${ore}`)
					.texture(`${o.mod_id}:item/powder/${ore}`)
					.translationKey(`${o.mod_id}:item/powder/${ore}`)
					.tag('forge:dusts/')
			}

			if (o.generate_pellet) {
				event.create(`tfcoreprocessing:pellet/${ore}`)
					.texture(`tfcoreprocessing:item/pellet/${ore}`)
					.translationKey(`tfcoreprocessing:item/pellet/${ore}`)
					.tag(`forge:pellets/${ore}`)
			}
		}
	}
)