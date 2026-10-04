StartupEvents.registry('item', event => {
	// TFC Metal Additions
	for(const metal in global.metals) {
		let m = global.metals[metal]

		// New Metal Registry
		if (m.new_metal) {
			if (m.double_ingot != null) {
				event.create(`kubejs:metal/double_ingot/${metal}`)
					.texture(`kubejs:item/metal/double_ingot/${metal}`)
					.translationKey(`kubejs:item/metal/double_ingot/${metal}`)
					.tag('forge:double_ingots')
					.tag(`forge:double_ingots/${metal}`)
			}
			if (m.sheet != null) {
				event.create(`kubejs:metal/sheet/${metal}`)
					.texture(`kubejs:item/metal/sheet/${metal}`)
					.translationKey(`kubejs:item/metal/sheet/${metal}`)
					.tag('forge:sheets')
					.tag(`forge:sheets/${metal}`)
			}
		}

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

		// Dust Registry
		if (m.generate_dust) {
			event.create(`kubejs:metal/powder/${metal}`)
				.texture(`kubejs:item/powder/${metal}`)
				.translationKey(`kubejs:item/powder/${metal}`)
				.tag('forge:dusts')
				.tag(`forge:dusts/${metal}`)
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
})

StartupEvents.registry('fluid', event => {

	// Metal Fluid Registry
	for(const metal in global.metals) {
		let m = global.metals[metal]

		if (m.new_metal) {
			  event.create(`metal/${metal}`)
			  	.translationKey(`kubejs:metal/${metal}`)
				.thickTexture(m.color)
				.bucketColor(m.color)
				
		}
	}
})