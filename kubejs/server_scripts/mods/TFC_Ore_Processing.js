ServerEvents.recipes(event => {
    const tfc = event.recipes.tfc

    event.remove({id: 'tfcoreprocessing:heating/coke_baking'})
    event.remove({id: 'tfcoreprocessing:quern/kindle/coal_dust_bituminous_coal'})
    event.remove({id: 'tfcoreprocessing:quern/kindle/coal_dust_lignite'})

    // Firelog
    event.remove({id: 'tfcoreprocessing:compress/firelog'})
    event.shapeless(
        Item.of('tfcoreprocessing:kindle/firelog'), 
        [
            'tfcoreprocessing:kindle/wood_pellets',
            'tfcoreprocessing:kindle/wood_pellets',
            'tfcoreprocessing:kindle/wood_pellets',
            'tfcoreprocessing:kindle/wood_pellets'
        ]
    )

    // Bamboo Firelog
    event.remove({id: 'tfcoreprocessing:compress/bamboo_firelog'})
    event.shapeless(
        Item.of('tfcoreprocessing:kindle/bamboo_firelog'), 
        [
            'tfcoreprocessing:kindle/bamboo_pellets',
            'tfcoreprocessing:kindle/bamboo_pellets',
            'tfcoreprocessing:kindle/bamboo_pellets',
            'tfcoreprocessing:kindle/bamboo_pellets'
        ]
    )

    // Palm Firelog
    event.remove({id: 'tfcoreprocessing:compress/palm_firelog'})
    event.shapeless(
        Item.of('tfcoreprocessing:kindle/palm_fiber_firelog'), 
        [
            'tfcoreprocessing:kindle/palm_fiber_pellets',
            'tfcoreprocessing:kindle/palm_fiber_pellets',
            'tfcoreprocessing:kindle/palm_fiber_pellets',
            'tfcoreprocessing:kindle/palm_fiber_pellets'
        ]
    )

    // Charcoal Pellets
    event.custom({
        type: 'immersiveengineering:coke_oven',
        creosote: 250,
        input: {
            tag: 'tfcoreprocessing:wood_pellets'
        },
        result: {
            item: 'tfcoreprocessing:kindle/charcoal_pellets'
        },
        time: 900
    })
    event.custom({
        type: 'immersiveengineering:blast_furnace_fuel',
        input: {
            item: 'tfcoreprocessing:kindle/charcoal_pellets'
        },
        time: 300
    })

    // Charcoal Briquette
    event.remove({id: 'tfcoreprocessing:compress/charcoal_briquette'})
    event.shapeless(
        Item.of('tfcoreprocessing:kindle/charcoal_briquette'), 
        [
            'tfcoreprocessing:kindle/charcoal_pellets',
            'tfcoreprocessing:kindle/charcoal_pellets',
            'tfcoreprocessing:kindle/charcoal_pellets',
            'tfcoreprocessing:kindle/charcoal_pellets'
        ]
    )
    event.custom({
        type: 'immersiveengineering:coke_oven',
        creosote: 1000,
        input: {
            tag: 'tfcoreprocessing:firelogs'
        },
        result: {
            item: 'tfcoreprocessing:kindle/charcoal_briquette'
        },
        time: 3600
    })
    event.custom({
        type: 'immersiveengineering:blast_furnace_fuel',
        input: {
            item: 'tfcoreprocessing:kindle/charcoal_briquette'
        },
        time: 1200
    })

    // High-Intensity Briquette
    event.remove({id: 'tfcoreprocessing:compress/charcoal_graphite_briquette'})
    event.shapeless(
        Item.of('tfcoreprocessing:kindle/charcoal_graphite_briquette'), 
        [
            'tfcoreprocessing:kindle/charcoal_pellets',
            'tfcoreprocessing:kindle/charcoal_pellets',
            'tfcoreprocessing:kindle/coke_pellets',
            'tfcoreprocessing:kindle/graphite_pellets'
        ]
    )

    // Diluted Charcoal Briquette
    event.remove({id: 'tfcoreprocessing:compress/charcoal_wood_briquette'})
    event.shapeless(
        Item.of('tfcoreprocessing:kindle/charcoal_wood_briquette'), 
        [
            'tfcoreprocessing:kindle/charcoal_pellets',
            'tfcoreprocessing:kindle/charcoal_pellets',
            'tfcoreprocessing:kindle/wood_pellets',
            'tfcoreprocessing:kindle/wood_pellets'
        ]
    )

    // Low Temperature Charcoal Briquette
    event.remove({id: 'tfcoreprocessing:compress/low_charcoal_briquette'})
    event.shapeless(
        Item.of('tfcoreprocessing:kindle/low_charcoal_briquette'), 
        [
            'tfcoreprocessing:kindle/charcoal_pellets',
            'tfcoreprocessing:kindle/wood_pellets',
            'tfcoreprocessing:kindle/wood_pellets',
            'tfcoreprocessing:kindle/wood_pellets'
        ]
    )

    // Coal Briquette
    event.remove({id: 'tfcoreprocessing:compress/coal_briquette'})
    event.shapeless(
        Item.of('tfcoreprocessing:kindle/coal_briquette'), 
        [
            'tfcoreprocessing:kindle/coal_pellets',
            'tfcoreprocessing:kindle/coal_pellets',
            'tfcoreprocessing:kindle/coal_pellets',
            'tfcoreprocessing:kindle/coal_pellets'
        ]
    )

    // Coke Pellets
    event.custom({
        type: 'immersiveengineering:coke_oven',
        creosote: 500,
        input: {
            item: 'tfcoreprocessing:kindle/coal_pellets'
        },
        result: {
            item: 'tfcoreprocessing:kindle/coke_pellets'
        },
        time: 1800
    })
    event.custom({
        type: 'immersiveengineering:blast_furnace_fuel',
        input: {
            item: 'tfcoreprocessing:kindle/coke_pellets'
        },
        time: 1200
    })

    // Coke Briquette
    event.remove({id: 'tfcoreprocessing:compress/coke_briquette'})
    event.shapeless(
        Item.of('tfcoreprocessing:kindle/coke_briquette'), 
        [
            'tfcoreprocessing:kindle/coke_pellets',
            'tfcoreprocessing:kindle/coke_pellets',
            'tfcoreprocessing:kindle/coke_pellets',
            'tfcoreprocessing:kindle/coke_pellets'
        ]
    )
    event.custom({
        type: 'immersiveengineering:coke_oven',
        creosote: 2000,
        input: {
            item: 'tfcoreprocessing:kindle/coal_briquette'
        },
        result: {
            item: 'tfcoreprocessing:kindle/coke_briquette'
        },
        time: 7200
    })
    event.custom({
        type: 'immersiveengineering:blast_furnace_fuel',
        input: {
            item: 'tfcoreprocessing:kindle/coke_briquette'
        },
        time: 4800
    })

    // Coke-Charcoal Briquette
    event.remove({id: 'tfcoreprocessing:compress/coke_charcoal_briquette'})
    event.shapeless(
        Item.of('tfcoreprocessing:kindle/coke_charcoal_briquette'), 
        [
            'tfcoreprocessing:kindle/coke_pellets',
            'tfcoreprocessing:kindle/coke_pellets',
            'tfcoreprocessing:kindle/charcoal_pellets',
            'tfcoreprocessing:kindle/charcoal_pellets'
        ]
    )

    // Plant Fibers
    event.shapeless(
        Item.of('tfcoreprocessing:kindle/bamboo_fiber'), 
        [
            '#tfc:compost_greens_low'
        ]
    )
    event.shapeless(
        Item.of('tfcoreprocessing:kindle/bamboo_fiber'), 
        [
            '#tfc:compost_browns_low'
        ]
    )
})