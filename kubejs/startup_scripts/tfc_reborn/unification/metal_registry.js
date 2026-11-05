StartupEvents.registry('item', event => {
	// TFC Metal Additions
	for(const metal in global.metals) {
		let m = global.metals[metal]

		// TFC Metal Items
		// Double Ingot
		global.createIfNeeded(m.double_ingot, () => {
			event.create(m.double_ingot)
				.texture(`kubejs:item/metal/double_ingot/${metal}`)
				.tag('forge:double_ingots')
				.tag(`forge:double_ingots/${metal}`)
				.tag('tfc:pileable_double_ingots')
				.tag(`tfc:metal_item/${metal}`)
		})

		// Sheet
		global.createIfNeeded(m.sheet, () => {
			event.create(m.sheet)
				.texture(`kubejs:item/metal/sheet/${metal}`)
				.tag('forge:sheets')
				.tag(`forge:sheets/${metal}`)
				.tag('tfc:pileable_sheets')
				.tag(`tfc:metal_item/${metal}`)
		})

		// Double Sheet
		global.createIfNeeded(m.double_sheet, () => {
			event.create(m.double_sheet)
				.texture(`kubejs:item/metal/double_sheet/${metal}`)
				.tag('forge:double_sheets')
				.tag(`forge:double_sheets/${metal}`)
				.tag(`tfc:metal_item/${metal}`)
		})

		// Pickaxe Head
		global.createIfNeeded(m.pickaxe_head, () => {
			event.create(m.pickaxe_head)
				.texture(`kubejs:item/metal/pickaxe_head/${metal}`)
				.tag(`tfc:metal_item/${metal}`)
		})

		// Axe Head
		global.createIfNeeded(m.axe_head, () => {
			event.create(m.axe_head)
				.texture(`kubejs:item/metal/axe_head/${metal}`)
				.tag(`tfc:metal_item/${metal}`)
		})

		// Shovel Head
		global.createIfNeeded(m.shovel_head, () => {
			event.create(m.shovel_head)
				.texture(`kubejs:item/metal/shovel_head/${metal}`)
				.tag(`tfc:metal_item/${metal}`)
		})

		// Hoe Head
		global.createIfNeeded(m.hoe_head, () => {
			event.create(m.hoe_head)
				.texture(`kubejs:item/metal/hoe_head/${metal}`)
				.tag(`tfc:metal_item/${metal}`)
		})

		// Knife Blade
		global.createIfNeeded(m.knife_blade, () => {
			event.create(m.knife_blade)
				.texture(`kubejs:item/metal/knife_blade/${metal}`)
				.tag(`tfc:metal_item/${metal}`)
		})

		// Sword Blade
		global.createIfNeeded(m.sword_blade, () => {
			event.create(m.sword_blade)
				.texture(`kubejs:item/metal/sword_blade/${metal}`)
				.tag(`tfc:metal_item/${metal}`)
		})

		// Unfinished Helmet
		global.createIfNeeded(m.unfinished_helmet, () => {
			event.create(m.unfinished_helmet)
				.texture(`kubejs:item/metal/unfinished_helmet/${metal}`)
				.tag(`tfc:metal_item/${metal}`)
		})

		// Unfinished Chestplate
		global.createIfNeeded(m.unfinished_chestplate, () => {
			event.create(m.unfinished_chestplate)
				.texture(`kubejs:item/metal/unfinished_chestplate/${metal}`)
				.tag(`tfc:metal_item/${metal}`)
		})

		// Unfinished Greaves
		global.createIfNeeded(m.unfinished_greaves, () => {
			event.create(m.unfinished_greaves)
				.texture(`kubejs:item/metal/unfinished_greaves/${metal}`)
				.tag(`tfc:metal_item/${metal}`)
		})

		// Unfinished Boots
		global.createIfNeeded(m.unfinished_boots, () => {
			event.create(m.unfinished_boots)
				.texture(`kubejs:item/metal/unfinished_boots/${metal}`)
				.tag(`tfc:metal_item/${metal}`)
		})	

		// TFC Reborn Metal Items
		// Nugget
		global.createIfNeeded(m.nugget, () => {
			event.create(m.nugget)
				.texture(`kubejs:item/metal/nugget/${metal}`)
				.tag('forge:nuggets')
				.tag(`forge:nuggets/${metal}`)
				.tag(`tfc:metal_item/${metal}`)
		})

		// Plate
		global.createIfNeeded(m.plate, () => {
			event.create(m.plate)
				.texture(`kubejs:item/metal/plate/${metal}`)
				.tag('forge:plates')
				.tag(`forge:plates/${metal}`)
				.tag(`tfc:metal_item/${metal}`)
		})

		// Gear
		global.createIfNeeded(m.gear, () => {
			event.create(m.gear)
				.texture(`kubejs:item/metal/gear/${metal}`)
				.tag('forge:gears')
				.tag(`forge:gears/${metal}`)
				.tag(`tfc:metal_item/${metal}`)
		})

		// Gear Half
		global.createIfNeeded(m.gear_half, () => {
			event.create(m.gear_half)
				.texture(`kubejs:item/metal/gear/half/${metal}`)
				.tag('forge:gear_halfs')
				.tag(`forge:gear_halfs/${metal}`)
				.tag(`tfc:metal_item/${metal}`)
		})

		// Dust
		global.createIfNeeded(m.dust, () => {
			event.create(m.dust)
				.texture(`kubejs:item/powder/${metal}`)
				.tag('forge:dusts')
				.tag(`forge:dusts/${metal}`)
				.tag(`tfc:metal_item/${metal}`)
		})	
	}
})

StartupEvents.registry('fluid', event => {

	// Metal Fluid Registry
	for(const metal in global.metals) {
		let m = global.metals[metal]

		if (m.fluid != null && m.color != null) {
			global.createIfNeeded(m.fluid, () => {
				event.create(`metal/${metal}`)
					.thickTexture(m.color)
					.bucketColor(m.color)
					.tag('tfc:molten_metals')
					.tag('tfc:usable_in_ingot_mold')
			})
		}
	}
})