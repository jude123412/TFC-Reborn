ServerEvents.recipes(event => {

    // Recipe Removal
    event.remove({id: 'railcraft:coal_coke'})
    event.remove({id: 'railcraft:coal_coke_block_from_coal_coke'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ingots_copper'})
    event.remove({id: 'railcraft:crusher/crushing_tags_raw_materials_copper'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ores_copper'})
    event.remove({id: 'railcraft:crusher/crushing_tags_storage_blocks_raw_lead'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ores_lead'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ingots_lead'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ores_silver'})
    event.remove({id: 'railcraft:crusher/crushing_tags_storage_blocks_raw_silver'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ores_lead'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ores_silver'})
    event.remove({id: 'railcraft:crusher/crushing_tags_raw_materials_silver'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ingots_silver'})
    event.remove({id: 'railcraft:crusher/crushing_tags_storage_blocks_raw_nickel'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ores_iron'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ingots_nickel'})
    event.remove({id: 'railcraft:crusher/crushing_tags_raw_materials_nickel'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ores_nickel'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ingots_steel'})
    event.remove({id: 'railcraft:crusher/crushing_tags_storage_blocks_raw_iron'})
    event.remove({id: 'railcraft:crusher/crushing_tags_raw_materials_iron'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ingots_iron'})
    event.remove({id: 'railcraft:crusher/crushing_tags_storage_blocks_raw_gold'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ores_gold'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ingots_gold'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ingots_bronze'})
    event.remove({id: 'railcraft:crusher/crushing_lapis_lazuli'})
    event.remove({id: 'railcraft:crusher/crushing_tags_gems_quartz'})
    event.remove({id: 'railcraft:crusher/crushing_tags_gems_emerald'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ingots_tin'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ores_saltpeter'})
    event.remove({id: 'railcraft:crusher/crushing_coal_block'})
    event.remove({id: 'railcraft:crusher/crushing_coal'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ores_coal'})
    event.remove({id: 'railcraft:crusher/crushing_charcoal'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ores_sulfur'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ores_lapis'})
    event.remove({id: 'railcraft:crusher/crushing_blaze_rod'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ores_quartz'})
    event.remove({id: 'railcraft:crusher/crushing_tags_gems_diamond'})

    // Coke Oven Bricks
    event.remove({id: 'railcraft:coke_oven_bricks'})
    event.shaped(
        Item.of('railcraft:coke_oven_bricks', 2),
        [
            'BMB',
            'MBM',
            'BMB'
        ],
        {
            B: 'kubejs:refactory_brick',
            M: 'tfc:mortar',
        }
    )

    // Coal Coke
    event.remove({id: 'railcraft:coke_oven/coal_coke'})
    event.custom({
        type: 'railcraft:coking',
        cookingTime: 3600,
        creosoteOutput: 500,
        experience: 0.0,
        ingredient: {
            tag: 'forge:gems/coal'
        },
        result: {
            item: 'kubejs:coal_coke'
        }
    })

    // Block of Coal Coke
    event.remove({id: 'railcraft:coke_oven/coal_coke_block'})
    event.custom({
        type: 'railcraft:coking',
        cookingTime: 32400,
        creosoteOutput: 4500,
        experience: 0.0,
        ingredient: {
            item: 'minecraft:coal_block'
        },
        result: {
            item: 'kubejs:coal_coke_block'
        }
    })

    // Charcoal
    event.remove({id: 'railcraft:coke_oven/charcoal'})
    event.custom({
        type: 'railcraft:coking',
        cookingTime: 1800,
        creosoteOutput: 250,
        experience: 0.0,
        ingredient: {
            tag: 'tfc:pit_kiln_logs'
        },
        result: {
            item: 'minecraft:charcoal'
        }
    })
})