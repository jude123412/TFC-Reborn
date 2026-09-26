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
	}
)