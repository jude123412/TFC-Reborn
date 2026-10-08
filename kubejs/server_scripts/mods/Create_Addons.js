ServerEvents.recipes(event => {
    // Recipe Removal
    event.remove({id: 'createdieselgenerators:crafting/engine_piston'})
    event.remove({id: 'createdieselgenerators:crafting/wire_cutters'})
    event.remove({id: 'createdieselgenerators:crafting/hammer'})

    // Recipe Removal by output
    event.remove({output: 'createdieselgenerators:wood_chip'})

    
    // Diesel Engine
    event.remove({id: 'createdieselgenerators:crafting/diesel_engine'})
    event.shaped(
        'createdieselgenerators:diesel_engine', 
        [
            ' F ',
            'PSP',
            'BTB'
        ],
        {
            F: '#tfc:starts_fires_with_durability',
            P: 'createdieselgenerators:engine_piston',
            S: '#forge:double_ingots/brass',
            B: 'minecraft:polished_blackstone_slab',
            T: 'create:fluid_tank'
        }
    )

    // Huge Diesel Engine
    event.remove({id: 'createdieselgenerators:crafting/huge_diesel_engine'})
    event.shaped(
        'createdieselgenerators:huge_diesel_engine', 
        [
            'AFA',
            'PSP',
            'BTB'
        ],
        {
            A: '#forge:ingots/andesite_alloy',
            F: '#tfc:starts_fires_with_durability',
            P: '#forge:plates/brass',
            S: 'create:steam_engine',
            B: 'create:fluid_pipe',
            T: '#forge:double_ingots/brass'
        }
    )

    // Oil Scanner
    event.replaceInput(
        {id: 'createdieselgenerators:crafting/oil_scanner'},
        'minecraft:iron_ingot',
        '#forge:ingots/wrought_iron'
    )

    // Pumpjack Hole
    event.replaceInput(
        {id: 'createdieselgenerators:crafting/pumpjack_hole'},
        'minecraft:chain',
        'tfc:metal/chain/wrought_iron'
    )

    // Spout
    event.replaceInput(
        {id: 'createdieselgenerators:crafting/pumpjack_head'},
        'minecraft:dried_kelp',
        'tfc:food/dried_kelp'
    )

    // Chip Wood Beam
    event.replaceInput(
        {id: 'createdieselgenerators:crafting/chip_wood_beam'},
        'createdieselgenerators:wood_chip',
        '#forge:dusts/wood'
    )

    // Chip Wood Block
    event.remove({id: 'createdieselgenerators:crafting/chip_wood_block'})
    event.custom({
        type: 'immersiveengineering:metal_press',
        energy: 14400,
        input: {
            'base_ingredient': {
                tag: 'forge:dusts/wood',
            },
            count: 4
        },
        mold: 'tfc_ie_addon:mold_block',
        result: {
            item: 'createdieselgenerators:chip_wood_block'
        }
    })

    // Burner
    event.replaceInput(
        {id: 'createdieselgenerators:crafting/burner'},
        'minecraft:flint_and_steel',
        '#tfc:starts_fires_with_durability'
    )

    // Kelp Handle
    event.replaceInput(
        {id: 'createdieselgenerators:crafting/kelp_handle'},
        'minecraft:dried_kelp',
        'tfc:food/dried_kelp'
    )

    // Lighter
    event.remove({id: 'createdieselgenerators:crafting/lighter'})
    event.shaped(
        'createdieselgenerators:lighter', 
        [
            ' BL',
            'BSB',
            'BAB'
        ],
        {
            B: '#forge:plates/brass',
            L: '#tfc:starts_fires_with_durability',
            S: '#forge:string',
            A: '#forge:ingots/andesite_alloy'
        }
    )

    // Chemical Sprayer
    event.replaceInput(
        {id: 'createdieselgenerators:mechanical_crafting/chemcial_sprayer'},
        'minecraft:copper_block',
        '#forge:double_ingots/copper'
    )

    // Track layers Bag
    event.remove({id: 'createdieselgenerators:crafting/track_layers_bag'})
    event.shaped(
        'createdieselgenerators:track_layers_bag', 
        [
            ' S ',
            'LLL',
            ' A '
        ],
        {
            S: '#forge:string',
            L: '#forge:leather',
            A: '#forge:ingots/andesite_alloy'
        }
    )
})