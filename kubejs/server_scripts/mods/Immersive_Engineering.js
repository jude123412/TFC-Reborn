ServerEvents.recipes(event => {
    const tfc = event.recipes.tfc

    // Recipe Removal
    event.remove({id: 'immersiveengineering:crusher/raw_block_uranium'})
    event.remove({id: 'immersiveengineering:crusher/ore_redstone'})
    event.remove({id: 'immersiveengineering:crusher/raw_block_osmium'})
    event.remove({id: 'immersiveengineering:crusher/ore_lapis'})
    event.remove({id: 'immersiveengineering:crusher/ore_iron'})
    event.remove({id: 'immersiveengineering:crusher/ore_fluorite'})
    event.remove({id: 'immersiveengineering:crusher/ore_silver'})
    event.remove({id: 'immersiveengineering:crusher/ore_diamond'})
    event.remove({id: 'immersiveengineering:crusher/raw_block_lead'})
    event.remove({id: 'immersiveengineering:crusher/ore_lead'})
    event.remove({id: 'immersiveengineering:crusher/raw_block_copper'})
    event.remove({id: 'immersiveengineering:crusher/ore_tin'})
    event.remove({id: 'immersiveengineering:crusher/ore_aluminum'})
    event.remove({id: 'immersiveengineering:crusher/raw_ore_aluminum'})
    event.remove({id: 'immersiveengineering:crusher/raw_ore_tin'})
    event.remove({id: 'immersiveengineering:crusher/raw_ore_nickel'})
    event.remove({id: 'immersiveengineering:crusher/ore_coal'})
    event.remove({id: 'immersiveengineering:crusher/black_dye'})
    event.remove({id: 'immersiveengineering:crusher/nether_gold'})
    event.remove({id: 'immersiveengineering:crusher/raw_ore_lead'})
    event.remove({id: 'immersiveengineering:crusher/raw_block_aluminum'})
    event.remove({id: 'immersiveengineering:crusher/raw_ore_silver'})
    event.remove({id: 'immersiveengineering:crusher/raw_block_iron'})
    event.remove({id: 'immersiveengineering:crusher/ore_nickel'})
    event.remove({id: 'immersiveengineering:crusher/raw_ore_iron'})
    event.remove({id: 'immersiveengineering:crusher/ore_copper1'})
    event.remove({id: 'immersiveengineering:crusher/ore_copper'})
    event.remove({id: 'immersiveengineering:crusher/ore_gold'})
    event.remove({id: 'immersiveengineering:crusher/ore_osmium'})
    event.remove({id: 'immersiveengineering:crusher/raw_block_gold'})
    event.remove({id: 'immersiveengineering:crusher/raw_ore_copper'})
    event.remove({id: 'immersiveengineering:crusher/raw_block_nickel'})
    event.remove({id: 'immersiveengineering:crusher/ore_emerald'})
    event.remove({id: 'immersiveengineering:crusher/ore_uranium'})
    event.remove({id: 'immersiveengineering:crusher/raw_block_tin'})
    event.remove({id: 'immersiveengineering:crusher/raw_block_silver'})
    event.remove({id: 'immersiveengineering:crusher/raw_ore_gold'})
    event.remove({id: 'createaddition:compat/immersiveengineering/crushing/coal_coke'})
    event.remove({id: 'immersiveengineering:crafting/coke_to_coal_coke'})
    event.remove({id: 'immersivetechnology:advanced_coke_oven/coke_block'})
    event.remove({id: 'immersivetechnology:advanced_coke_oven/charcoal'})
    event.remove({id: 'immersivetechnology:advanced_coke_oven/coke'})
    event.remove({id: 'immersiveengineering:crafting/coal_coke_to_coke'})

    // Recipe Removal by output
    event.remove({output: 'immersiveengineering:dust_wood'})

    // Coal Coke
    event.remove({id: 'tfc_ie_addon:cokeoven/bituminous_coal'})
    event.remove({id: 'immersiveengineering:cokeoven/coke'})
    event.remove({id: 'tfc_ie_addon:cokeoven/lignite'})
    event.custom({
        type: 'immersiveengineering:coke_oven',
        creosote: 4500,
        input: {
            tag: 'forge:storage_blocks/coal'
        },
        result: {
            item: 'kubejs:coal_coke_block'
        },
        time: 1800
    })

    // Block of Coal Coke
    event.remove({id: 'immersiveengineering:cokeoven/coke_block'})
    event.custom({
        type: 'immersiveengineering:coke_oven',
        creosote: 500,
        input: {
            tag: 'forge:gems/coal'
        },
        result: {
            item: 'kubejs:coal_coke'
        },
        time: 16200
    })

    // Charcoal
    event.remove({id: 'immersiveengineering:cokeoven/charcoal'})
    event.custom({
        type: 'immersiveengineering:coke_oven',
        creosote: 250,
        input: {
            tag: 'tfc:pit_kiln_logs'
        },
        result: {
            item: 'minecraft:charcoal'
        },
        time: 900
    })

    // Steel Sawblade
    event.remove({id: 'immersiveengineering:crafting/sawblade'})
    tfc.anvil(
        TFC.itemStackProvider.of('immersiveengineering:sawblade'),
        '#forge:gears/steel',
        [
            'punch_third_last',
            'hit_second_last',
            'upset_last'
        ]
    ).tier(4)
})