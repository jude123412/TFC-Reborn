StartupEvents.registry('item', event => {

    // TFC Ore Additions
	for (const ore in global.metal_ores) {
		let o = global.metal_ores[ore]

		// Ore Powder
		global.createIfNeeded(o.ore_powder, () => {
			event.create(o.ore_powder)
				.texture(`kubejs:item/powder/${ore}`)
				.tag('forge:dusts')
				.tag(`tfc:powders`)
		})

		// Ore Pellet
		global.createIfNeeded(o.ore_pellet, () => {
			event.create(o.ore_pellet)
				.texture(`kubejs:item/pellet/${ore}`)
				.tag('tfcoreprocessing:pellets')
		})

		// Ore Refined Powder 
		global.createIfNeeded(o.ore_refined_powder, () => {
			event.create(o.ore_refined_powder)
				.texture(`kubejs:item/refined/${ore}`)
				.tag('tfcoreprocessing:refined')
		})

		// Ore Compressed Powder 
		global.createIfNeeded(o.ore_compressed_powder, () => {
			event.create(o.ore_compressed_powder)
				.texture(`kubejs:item/compressed/${ore}`)
				.tag('tfcoreprocessing:compressed')
		})

		// Ore Roasted Powder 
		global.createIfNeeded(o.ore_roasted_powder, () => {
			event.create(o.ore_roasted_powder)
				.texture(`kubejs:item/roasted/${ore}`)
				.tag('tfcoreprocessing:roasted')
		})

		// Ore Roasted Brick
		global.createIfNeeded(o.ore_roasted_brick, () => {
			event.create(o.ore_roasted_brick)
				.texture(`kubejs:item/roasted_brick/${ore}`)
				.tag('tfcoreprocessing:roasted_brick')
		})
	}
})

StartupEvents.registry('block', event => {

	// TFC Ore Additions 
	// Block Registry
	for (const ore in global.metal_ores) {
		let o = global.metal_ores[ore]

		// Ore Sand
		if (o.ore_sand != null) {
			global.createIfNeeded(o.ore_sand, () => {
				event.create(o.ore_sand.replace('kubejs:', ''), 'falling')
					.textureAll(`kubejs:block/ore_sand/${ore}`)
					.sandSoundType()
					.hardness(1)
					.resistance(1)
					.requiresTool(true)
					.tagBlock('minecraft:mineable/shovel')
			})
		}
	}
})


StartupEvents.registry('fluid', event => {

	// TFC Ore Additions 
	// Fluid Registry
	for (const ore in global.metal_ores) {
		let o = global.metal_ores[ore]

		// Slurry
		if (o.ore_slurry_color != null) {
			global.createIfNeeded(o.ore_slurry, () => {
				event.create(o.ore_slurry.replace('kubejs:', ''))
					.thinTexture(o.ore_slurry_color)
					.bucketColor(o.ore_slurry_color)
					.tag('tfc:usable_in_wooden_bucket')
					.tag('tfc:usable_in_red_steel_bucket')
					.tag('tfc:usable_in_barrel')
			})
		}
	}
})