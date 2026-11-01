StartupEvents.registry('item', event => {
	// TFC Metal Additions
	for(const metal in global.metals) {
		let m = global.metals[metal]

		// New Metal Registry
		if (m.new_metal) {
			if (m.generate_sheet || m.generate_armor || m.generate_basic_tool_heads) {
				event.create(`kubejs:metal/double_ingot/${metal}`)
					.texture(`kubejs:item/metal/double_ingot/${metal}`)
					.tag('forge:double_ingots')
					.tag(`forge:double_ingots/${metal}`)
					.tag('tfc:pileable_double_ingots')
					.tag(`tfc:metal_items/${metal}`)

				event.create(`kubejs:metal/sheet/${metal}`)
					.texture(`kubejs:item/metal/sheet/${metal}`)
					.tag('forge:sheets')
					.tag(`forge:sheets/${metal}`)
					.tag('tfc:pileable_sheets')
					.tag(`tfc:metal_items/${metal}`)

				event.create(`kubejs:metal/double_sheet/${metal}`)
					.texture(`kubejs:item/metal/double_sheet/${metal}`)
					.tag('forge:double_sheets')
					.tag(`forge:double_sheets/${metal}`)
					.tag(`tfc:metal_items/${metal}`)
			}

			if(m.generate_basic_tool_heads) {
				event.create(`kubejs:metal/pickaxe_head/${metal}`)
					.texture(`kubejs:item/metal/pickaxe_head/${metal}`)
					.tag(`tfc:metal_items/${metal}`)

				event.create(`kubejs:metal/axe_head/${metal}`)
					.texture(`kubejs:item/metal/axe_head/${metal}`)
					.tag(`tfc:metal_items/${metal}`)

				event.create(`kubejs:metal/shovel_head/${metal}`)
					.texture(`kubejs:item/metal/shovel_head/${metal}`)
					.tag(`tfc:metal_items/${metal}`)

				event.create(`kubejs:metal/hoe_head/${metal}`)
					.texture(`kubejs:item/metal/hoe_head/${metal}`)
					.tag(`tfc:metal_items/${metal}`)

				event.create(`kubejs:metal/sword_blade/${metal}`)
					.texture(`kubejs:item/metal/sword_blade/${metal}`)
					.tag(`tfc:metal_items/${metal}`)
			}

			if(m.generate_knife_blade) {
				event.create(`kubejs:metal/knife_blade/${metal}`)
					.texture(`kubejs:item/metal/knife_blade/${metal}`)
					.tag(`tfc:metal_items/${metal}`)
			}

			if(m.generate_armor) {
				event.create(`kubejs:metal/unfinished_helmet/${metal}`)
					.texture(`kubejs:item/metal/unfinished_helmet/${metal}`)
					.tag(`tfc:metal_items/${metal}`)

				event.create(`kubejs:metal/unfinished_chestplate/${metal}`)
					.texture(`kubejs:item/metal/unfinished_chestplate/${metal}`)
					.tag(`tfc:metal_items/${metal}`)

				event.create(`kubejs:metal/unfinished_greaves/${metal}`)
					.texture(`kubejs:item/metal/unfinished_greaves/${metal}`)
					.tag(`tfc:metal_items/${metal}`)
					
				event.create(`kubejs:metal/unfinished_boots/${metal}`)
					.texture(`kubejs:item/metal/unfinished_boots/${metal}`)
					.tag(`tfc:metal_items/${metal}`)
			}
		}

		// Plate Registry
		if (m.generate_plate) {
			event.create(`kubejs:metal/plate/${metal}`)
				.texture(`kubejs:item/metal/plate/${metal}`)
				.tag('forge:plates')
				.tag(`forge:plates/${metal}`)
		}

		// Gear Registry
		if (m.generate_gear) {
			event.create(`kubejs:metal/gear/${metal}`)
				.texture(`kubejs:item/metal/gear/${metal}`)
				.tag('forge:gears')
				.tag(`forge:gears/${metal}`)

			event.create(`kubejs:metal/gear/half/${metal}`)
				.texture(`kubejs:item/metal/gear/half/${metal}`)
				.tag('forge:gear_halfs')
				.tag(`forge:gear_halfs/${metal}`)
		}

		// Nugget Regsitry
		if (m.generate_nugget) {
			event.create(`kubejs:metal/nugget/${metal}`)
				.texture(`kubejs:item/metal/nugget/${metal}`)
				.tag('forge:nuggets')
				.tag(`forge:nuggets/${metal}`)
		}

		// Dust Registry
		if (m.generate_dust) {
			event.create(`kubejs:metal/powder/${metal}`)
				.texture(`kubejs:item/powder/${metal}`)
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

StartupEvents.registry('fluid', event => {

	// Metal Fluid Registry
	for(const metal in global.metals) {
		let m = global.metals[metal]

		if (m.new_metal) {
			  event.create(`metal/${metal}`)
				.thickTexture(m.color)
				.bucketColor(m.color)
		}
	}
})