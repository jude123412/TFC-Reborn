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
})