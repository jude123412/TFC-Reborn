TFCEvents.data(event => {
    // Loose Andesite Rock
    event.itemHeat('create:shaft', 0.71425, 850, 1050)
})

ServerEvents.recipes(event => {
    const tfc = event.recipes.tfc
    const create = event.recipes.create

    event.remove({id: 'createdieselgenerators:compression_molding/bucket'})
    event.remove({id: 'create:crafting/kinetics/empty_blaze_burner'})
    event.remove({id: 'create:conversion_0'})
    
    // Copper Backtank
    event.replaceInput(
        {id: 'create:crafting/appliances/copper_backtank'},
        'minecraft:copper_block',
        '#forge:double_sheets/copper'
    )

    // Schematicannon
    event.replaceInput(
        {id: 'create:crafting/schematics/schematicannon'},
        'minecraft:smooth_stone',
        '#tfc:rock/smooth'
    )
    event.replaceInput(
        {id: 'create:crafting/schematics/schematicannon'},
        'minecraft:iron_block',
        '#forge:double_sheets/wrought_iron'
    )

    // Schematic Table
    event.replaceInput(
        {id: 'create:crafting/schematics/schematic_table'},
        'minecraft:smooth_stone',
        '#tfc:rock/smooth'
    )

    // Shaft
    event.remove({output: 'create:shaft'})
    create.cutting(Item.of('create:shaft', 4), 'create:andesite_alloy').processingTime(200)
    tfc.anvil(
        TFC.itemStackProvider.of('create:shaft').copyHeat().withCount(4),
        'create:andesite_alloy',
        [
            'hit_third_last',
            'draw_second_last',
            'upset_last'
        ]
    ).tier(2)

    // Cogwheel
    event.remove({output: 'create:cogwheel'})
    event.shaped(
        Item.of('create:cogwheel'),
        [
            'LPL',
            'PSP',
            'LPL'
        ],
        {
            L: '#tfc:lumber',
            P: '#minecraft:planks',
            S: 'create:shaft'
        }
    )

    // Large Cogwheel
    event.remove({output: 'create:large_cogwheel'})
    event.shaped(
        Item.of('create:large_cogwheel'),
        [
            'LPL',
            'PSP',
            'LPL'
        ],
        {
            L: '#tfc:lumber',
            P: '#minecraft:planks',
            S: 'create:cogwheel'
        }
    )

    // Mechanical Press
    event.replaceInput(
        {id: 'create:crafting/kinetics/mechanical_press'},
        'create:crafting/kinetics/mechanical_press',
        '#forge:double_ingots/wrought_iron'
    )

    // Chute
    event.replaceInput(
        {id: 'create:crafting/kinetics/chute'},
        'minecraft:iron_ingot',
        '#forge:ingots/wrought_iron'
    )

    // Metal Bracket
    event.replaceInput(
        {id: 'create:crafting/kinetics/metal_bracket'},
        'minecraft:iron_ingot',
        '#forge:ingots/wrought_iron'
    )

    // Item Drain
    event.replaceInput(
        {id: 'create:crafting/kinetics/item_drain'},
        'minecraft:iron_bars',
        'tfc:metal/bars/wrought_iron'
    )

    // Spout
    event.replaceInput(
        {id: 'create:crafting/kinetics/spout'},
        'minecraft:dried_kelp',
        'tfc:food/dried_kelp'
    )

    //Steam Engine
    event.remove({id: 'create:crafting/kinetics/steam_engine'})
    event.shaped(
        Item.of('create:steam_engine'),
        [
            ' G ',
            'CAC',
            'DPD'
        ],
        {
            G: '#forge:plates/gold',
            C: '#forge:plates/copper',
            A: '#forge:ingots/andesite_alloy',
            D: '#forge:double_ingots/copper',
            P: '#forge:double_sheets/copper'
        }
    )
})