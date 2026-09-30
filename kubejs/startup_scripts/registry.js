StartupEvents.registry('item', event => {
		// TFC Metal Additions
		for(const metal in global.metals) {
			let m = global.metals[metal]

			// Plate Registry
			if (m.generate_plate) {
				event.create(`kubejs:metal/plate/${metal}`)
					.texture(`kubejs:item/metal/plate/${metal}`)
					.translationKey(`kubejs:item/metal/plate/${metal}`)
					.tag('forge:plates')
					.tag(`forge:plates/${metal}`)
			}

			// Gear Registry
			if (m.generate_gear) {
				event.create(`kubejs:metal/gear/${metal}`)
					.texture(`kubejs:item/metal/gear/${metal}`)
					.translationKey(`kubejs:item/metal/gear/${metal}`)
					.tag('forge:gears')
					.tag(`forge:gears/${metal}`)

				event.create(`kubejs:metal/gear/half/${metal}`)
					.texture(`kubejs:item/metal/gear/half/${metal}`)
					.translationKey(`kubejs:item/metal/gear/half/${metal}`)
					.tag('forge:gear_halfs')
					.tag(`forge:gear_halfs/${metal}`)
			}

			// Nugget Regsitry
			if (m.generate_nugget) {
				event.create(`kubejs:metal/nugget/${metal}`)
					.texture(`kubejs:item/metal/nugget/${metal}`)
					.translationKey(`kubejs:item/metal/nugget/${metal}`)
					.tag('forge:nuggets')
					.tag(`forge:nuggets/${metal}`)
			}
		}

		// TFC Ore Additions
		for (const ore in global.metal_ores) {
			let o = global.metal_ores[ore]

			if (o.generate_powder) {
				event.create(`${o.mod_id}:powder/${ore}`)
					.texture(`${o.mod_id}:item/powder/${ore}`)
					.translationKey(`${o.mod_id}:item/powder/${ore}`)
					.tag('forge:dusts')
					.tag(`tfc:powders`)
			}

			if (o.generate_pellet) {
				event.create(`tfcoreprocessing:pellet/${ore}`)
					.texture(`tfcoreprocessing:item/pellet/${ore}`)
					.translationKey(`tfcoreprocessing:item/pellet/${ore}`)
					.tag('forge:pellets')
					.tag(`forge:pellets/${ore}`)
			}
		}
	}
)