ServerEvents.recipes(event => {
    const tfc = event.recipes.tfc

    for (const brick in global.integration_bricks) {
        let b = global.integration_bricks[brick]

        if (b.primary != null && b.secondary != null) {
            if (b.primary_recipe != null) {
                event.remove({id: b.primary_recipe})

                event.shapeless(
                    Item.of(b.primary),
                    [
                        b.secondary,
                        '#tfc:chisels'
                    ]
                ).damageIngredient('#tfc:chisels')
            }

            tfc.chisel(
                b.primary,
                b.secondary,
                'smooth'
            )
        }

        if (b.primary != null && b.stairs != null) {
            if (b.stairs_recipe != null) {
                event.remove({id: b.stairs_recipe})

                event.shaped(
                    Item.of(b.stairs, 8), 
                    [
                        'P  ',
                        'PP ',
                        'PPP'
                    ],
                    {
                        P: b.primary
                    }
                )
            }

            tfc.chisel(
                b.stairs,
                b.primary,
                'stair'
            )
        }

        if (b.primary != null && b.slab != null) {
            if (b.slab_recipe != null) {
                event.remove({id: b.slab_recipe})
            
                event.shaped(
                    Item.of(b.slab, 6), 
                    [
                        'PPP'
                    ],
                    {
                        P: b.primary
                    }
                )
            }

            tfc.chisel(
                b.slab,
                b.primary,
                'slab'
            ).extraDrop(b.slab)
        }

        if (b.primary != null && b.chiseled != null) {
            if (b.chiseled_recipe != null) {
                event.remove({id: b.chiseled_recipe})
            }

            event.shapeless(
                Item.of(b.chiseled),
                [
                    b.primary,
                    '#tfc:chisels'
                ]
            ).damageIngredient('#tfc:chisels')

            tfc.chisel(
                b.chiseled,
                b.primary,
                'smooth'
            )
        }

        if (b.primary != null && b.cracked != null) {
            if (b.cracked_recipe != null) {
                event.remove({id: b.cracked_recipe})
            }

            event.shapeless(
                Item.of('botania:cracked_livingrock_bricks'),
                [
                    'botania:livingrock_bricks',
                    '#tfc:hammers'
                ]
            ).damageIngredient('#tfc:hammers')
        }

        if (b.primary != null && b.pillar != null) {
            if (b.pillar_recipe != null) {
                event.remove({id: b.pillar_recipe})
                event.shaped(
                    Item.of(b.pillar, 2), 
                    [
                        'BC',
                        'B '
                    ],
                    {
                        B: b.primary,
                        C: '#tfc:chisels'
                    }
                ).damageIngredient('#tfc:chisels')
            }
        }
    }
})