StartupEvents.registry('item', event => {
		// TFC Metal Additions
		for(const metal in global.metals) {
			// Plate Registry
			event.create(`kubejs:metal/plate/${metal}`)
				.texture(`kubejs:item/metal/plate/${metal}`)
				.translationKey(`kubejs:item/metal/plate/${metal}`)
				.tag(`forge:plates/${metal}`)
		}
	}
)