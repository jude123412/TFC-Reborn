ServerEvents.recipes(event => {
    const tfc = event.recipes.tfc

    // Bark Fire Pellets
    event.shapeless(Item.of('tfcoreprocessing:kindle/wood_pellets'), [
        '#forge:bark_powder',
        '#forge:bark_powder',
        '#forge:bark_powder',
        '#forge:bark_powder'
    ])

    // Firelog
    event.remove({id: 'tfcoreprocessing:compress/firelog'})
    event.shapeless(Item.of('tfcoreprocessing:kindle/firelog'), [
        'tfcoreprocessing:kindle/wood_pellets',
        'tfcoreprocessing:kindle/wood_pellets',
        'tfcoreprocessing:kindle/wood_pellets',
        'tfcoreprocessing:kindle/wood_pellets'
    ])

    // Bamboo Firelog
    event.remove({id: 'tfcoreprocessing:compress/bamboo_firelog'})
    event.shapeless(Item.of('tfcoreprocessing:kindle/bamboo_firelog'), [
        'tfcoreprocessing:kindle/bamboo_pellets',
        'tfcoreprocessing:kindle/bamboo_pellets',
        'tfcoreprocessing:kindle/bamboo_pellets',
        'tfcoreprocessing:kindle/bamboo_pellets'
    ])

    // Palm Firelog
    event.remove({id: 'tfcoreprocessing:compress/palm_firelog'})
    event.shapeless(Item.of('tfcoreprocessing:kindle/palm_fiber_firelog'), [
        'tfcoreprocessing:kindle/palm_fiber_pellets',
        'tfcoreprocessing:kindle/palm_fiber_pellets',
        'tfcoreprocessing:kindle/palm_fiber_pellets',
        'tfcoreprocessing:kindle/palm_fiber_pellets'
    ])

    // Charcoal Briquette
    event.remove({id: 'tfcoreprocessing:compress/charcoal_briquette'})
    event.shapeless(Item.of('tfcoreprocessing:kindle/charcoal_briquette'), [
        'tfcoreprocessing:kindle/charcoal_pellets',
        'tfcoreprocessing:kindle/charcoal_pellets',
        'tfcoreprocessing:kindle/charcoal_pellets',
        'tfcoreprocessing:kindle/charcoal_pellets'
    ])

    // High-Intensity Briquette
    event.remove({id: 'tfcoreprocessing:compress/charcoal_graphite_briquette'})
    event.shapeless(Item.of('tfcoreprocessing:kindle/charcoal_graphite_briquette'), [
        'tfcoreprocessing:kindle/charcoal_pellets',
        'tfcoreprocessing:kindle/charcoal_pellets',
        'tfcoreprocessing:kindle/coke_pellets',
        'tfcoreprocessing:kindle/graphite_pellets'
    ])

    // Diluted Charcoal Briquette
    event.remove({id: 'tfcoreprocessing:compress/charcoal_wood_briquette'})
    event.shapeless(Item.of('tfcoreprocessing:kindle/charcoal_wood_briquette'), [
        'tfcoreprocessing:kindle/charcoal_pellets',
        'tfcoreprocessing:kindle/charcoal_pellets',
        'tfcoreprocessing:kindle/wood_pellets',
        'tfcoreprocessing:kindle/wood_pellets'
    ])

    // Low Temperature Charcoal Briquette
    event.remove({id: 'tfcoreprocessing:compress/low_charcoal_briquette'})
    event.shapeless(Item.of('tfcoreprocessing:kindle/low_charcoal_briquette'), [
        'tfcoreprocessing:kindle/charcoal_pellets',
        'tfcoreprocessing:kindle/wood_pellets',
        'tfcoreprocessing:kindle/wood_pellets',
        'tfcoreprocessing:kindle/wood_pellets'
    ])

    // Coal Briquette
    event.remove({id: 'tfcoreprocessing:compress/coal_briquette'})
    event.shapeless(Item.of('tfcoreprocessing:kindle/coal_briquette'), [
        'tfcoreprocessing:kindle/coal_pellets',
        'tfcoreprocessing:kindle/coal_pellets',
        'tfcoreprocessing:kindle/coal_pellets',
        'tfcoreprocessing:kindle/coal_pellets'
    ])

    // Coke Briquette
    event.remove({id: 'tfcoreprocessing:compress/coke_briquette'})
    event.shapeless(Item.of('tfcoreprocessing:kindle/coke_briquette'), [
        'tfcoreprocessing:kindle/coke_pellets',
        'tfcoreprocessing:kindle/coke_pellets',
        'tfcoreprocessing:kindle/coke_pellets',
        'tfcoreprocessing:kindle/coke_pellets'
    ])

    // Coke-Charcoal Briquette
    event.remove({id: 'tfcoreprocessing:compress/coke_charcoal_briquette'})
    event.shapeless(Item.of('tfcoreprocessing:kindle/coke_charcoal_briquette'), [
        'tfcoreprocessing:kindle/coke_pellets',
        'tfcoreprocessing:kindle/coke_pellets',
        'tfcoreprocessing:kindle/charcoal_pellets',
        'tfcoreprocessing:kindle/charcoal_pellets'
    ])

    // Plant Fibers
    event.shapeless(Item.of('tfcoreprocessing:kindle/bamboo_fiber'), [
        '#tfc:compost_greens_low'
    ])
    event.shapeless(Item.of('tfcoreprocessing:kindle/bamboo_fiber'), [
        '#tfc:compost_browns_low'
    ])
})