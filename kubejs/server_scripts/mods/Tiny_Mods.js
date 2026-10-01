ServerEvents.recipes(event => {

    // Golden Hopper
    event.remove({id: 'goldenhopper:golden_hopper'})
    event.shaped(
        Item.of('goldenhopper:golden_hopper'),
        [
            'S S',
            ' C '
        ],
        {
            S: '#forge:sheets/gold',
            C: '#forge:chests/wooden'
        }
    )

    // Cooling Lunch Box
    event.remove({id: 'tfclunchbox:upgrade_to_cooling_lunchbox'})
      event.shaped(
        Item.of('tfclunchbox:cooling_lunchbox'),
        [
            ' H ',
            'RLR'
        ],
        {
            H: '#tfc:hammers',
            R: '#forge:plates/red_steel',
            L: 'tfclunchbox:lunchbox'
        }
    )
})