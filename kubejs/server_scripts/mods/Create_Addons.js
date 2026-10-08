ServerEvents.recipes(event => {
    event.remove({id: 'createdieselgenerators:crafting/engine_piston'})
    event.remove({id: 'createdieselgenerators:crafting/wire_cutters'})
    event.remove({id: 'createdieselgenerators:crafting/hammer'})

    
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
})