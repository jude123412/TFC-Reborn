ServerEvents.recipes(event => {

    // Recipe Removal
    event.remove({id: 'buildcraftcore:gears/gear_iron'})
    event.remove({id: 'buildcraftcore:gears/gear_gold'})
    

    // Wooden Gear
    event.remove({id: 'buildcraftcore:gears/gear_wood'})
    event.shaped(
        Item.of('buildcraftcore:gears/gear_wood'),
        [
            'SPS',
            'PBP',
            'SPS'
        ],
        {
            S: '#forge:rods/wooden',
            P: '#minecraft:planks',
            B: '#forge:slimeballs'
        }
    )

    // Stone Gear
    event.remove({id: 'buildcraftcore:gears/gear_stone'})
    event.custom({
        type: 'tfc:knapping',
        knapping_type: 'tfc:rock',
        outside_slot_required: false,
        pattern: [
            ' X X ',
            'XXXXX',
            ' X X ',
            'XXXXX',
            ' X X '
        ],
        ingredient: {
            tag: 'bsa:rock/loose'
        },
        result: {
            item: 'buildcraftcore:gears/gear_stone'
        }
    })

    // Diamond Gear
    event.remove({id: 'buildcraftcore:gears/gear_diamond'})
    event.custom({
        type: 'tfc:knapping',
        knapping_type: 'tfc:rock',
        outside_slot_required: false,
        pattern: [
            ' X X ',
            'XXXXX',
            ' X X ',
            'XXXXX',
            ' X X '
        ],
        ingredient: {
            tag: 'bsa:knapping/diamond'
        },
        result: {
            item: 'buildcraftcore:gears/gear_diamond'
        }
    })
})