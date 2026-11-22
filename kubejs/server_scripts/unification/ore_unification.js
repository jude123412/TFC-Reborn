TFCEvents.data(event => {

    // Ore Processing!!!
    for (const ore in global.metal_ores) {
        let o = global.metal_ores[ore]
        let m = global.metals[o.ore_metal]

        // Powder
        if (o.ore_powder != null && (o.ore_powder.startsWith('kubejs:') || o.ore_powder.startsWith('tfc_ie_addon:'))) {
            event.itemHeat(o.ore_powder, m.capacity / 4, m.work, m.weld)
        }

        // Pellets
        if (o.ore_pellet != null && o.ore_pellet.startsWith('kubejs:')) {
            event.itemHeat(o.ore_pellet, m.capacity / 2, m.work, m.weld)
            event.itemSize(o.ore_pellet, 'small', 'medium')
        }

        // Refined Powder
        if (o.ore_refined_powder != null && o.ore_refined_powder.startsWith('kubejs:')) {
            event.itemHeat(o.ore_refined_powder, m.capacity / 4, m.work, m.weld)
        }

        // Compressed Brick
        if (o.ore_compressed_powder != null && o.ore_compressed_powder.startsWith('kubejs:')) {
            event.itemHeat(o.ore_compressed_powder, m.capacity / 2, m.work, m.weld)
        }

        // Roasted Powder
        if (o.ore_roasted_powder != null && o.ore_roasted_powder.startsWith('kubejs:')) {
            event.itemHeat(o.ore_roasted_powder, m.capacity / 4, m.work, m.weld)
        }

        // Roasted Brick
        if (o.ore_roasted_brick != null && o.ore_roasted_brick.startsWith('kubejs:')) {
            event.itemHeat(o.ore_roasted_brick, m.capacity / 2, m.work, m.weld)
        }

        if (o.ore_sand != null && o.ore_sand.startsWith('kubejs:')) {
            event.itemHeat(o.ore_sand, m.capacity / 2, m.work, m.weld)
        }
    }
})

ServerEvents.recipes(event => {

    // Recipe Removal
    event.remove({id: /tfc:quern\/small_.*/})
    event.remove({id: /tfc:quern\/poor_.*/})
    event.remove({id: /tfc:quern\/normal_.*/})
    event.remove({id: /tfc:quern\/rich_.*/})
    event.remove({id: /tfc_ie_addon:quern\/small_.*/})
    event.remove({id: /tfc_ie_addon:quern\/poor_.*/})
    event.remove({id: /tfc_ie_addon:quern\/normal_.*/})
    event.remove({id: /tfc_ie_addon:quern\/rich_.*/})
    event.remove({id: /tfc_ie_addon:crusher\/ore\/small_.*/})
    event.remove({id: /tfc_ie_addon:crusher\/ore\/poor_.*/})
    event.remove({id: /tfc_ie_addon:crusher\/ore\/normal_.*/})
    event.remove({id: /tfc_ie_addon:crusher\/ore\/rich_.*/})
    event.remove({id: /tfcoreprocessing:uncompress\/uncompress_refined.*/})
    event.remove({id: /tfcoreprocessing:uncompress\/uncompress_roasted.*/})
    event.remove({id: /tfcoreprocessing:compress\/compress_refined.*/})
    event.remove({id: /tfcoreprocessing:compress\/compress_roasted.*/})
    event.remove({id: /tfcoreprocessing:barrel\/slurry\/slurry_.*/})
    event.remove({id: /tfcoreprocessing:pot\/slurry\/slurry_.*/})
    event.remove({id: /tfcoreprocessing:pot\/slurry\/roast_.*/})
    event.remove({id: /tfcoreprocessing:heating\/powder\/.*/})
    event.remove({id: /tfcoreprocessing:heating\/refined\/.*/})
    event.remove({id: /tfcoreprocessing:heating\/compressed\/.*/})
    event.remove({id: /tfcoreprocessing:heating\/roasted\/.*/})
    event.remove({id: /tfcoreprocessing:heating\/roasted_brick\/.*/})

    // Begin...
    for (const ore in global.metal_ores) {
        let o = global.metal_ores[ore]
        let m = global.metals[o.ore_metal]

        // Ore Powder Melting
        if (o.ore_powder != null) {
            event.custom({
                type: 'tfc:heating',
                ingredient: {
                    item: o.ore_powder
                },
                result_fluid: {
                    fluid: m.fluid,
                    amount: 5
                },
                temperature: m.melt
            })
        }

        // Small Ore Piece
        if (o.small_ore_piece != null && o.ore_powder != null && o.ore_secondary_powder != null) {

            // Quern
            event.custom({
                type: 'tfc:quern',
                ingredient: {
                    item: o.small_ore_piece
                },
                result: {
                    item: o.ore_powder,
                    count: 2
                }
            })

            // Create Milling
            event.custom({
                type: 'create:milling',
                ingredients: [
                    {
                        item: o.small_ore_piece
                    }
                ],
                processingTime: 400,
                results: [
                    {
                        item: o.ore_powder,
                        count: 2
                    }
                ]
            })

            // Create Crushing
            event.custom({
                type: 'create:crushing',
                ingredients: [
                    {
                        item: o.small_ore_piece
                    }
                ],
                processingTime: 400,
                results: [
                    {
                        item: o.ore_powder,
                        count: 2
                    },
                    {
                        chance: 0.33,
                        item: o.ore_secondary_powder
                    }
                ]
            })

            // Railcraft Crusher
            event.custom({
                type: 'railcraft:crusher',
                ingredient: {
                    item: o.small_ore_piece
                },
                outputs: [
                    {
                        probability: 1.00,
                        result: {
                            item: o.ore_powder
                        },
                        count: 2
                    },
                    {
                        probability: 0.66,
                        result: {
                            item: o.ore_secondary_powder
                        }
                    }
                ]
            })

            // Immersive Engineering Crusher
            event.custom({
                type: "immersiveengineering:crusher",
                energy: 6000,
                input: {
                    item: o.small_ore_piece
                },
                result: {
                    item: o.ore_powder,
                    count: 2
                },
                secondaries: [
                    {
                        chance: 1.00,
                        output: {
                            item: o.ore_secondary_powder
                        } 
                    }
                ]
            })
        }

        // Poor Ore Piece
        if (o.poor_ore_piece != null && o.ore_powder != null && o.ore_secondary_powder != null) {

            // Quern
            event.custom({
                type: 'tfc:quern',
                ingredient: {
                    item: o.poor_ore_piece
                },
                result: {
                    item: o.ore_powder,
                    count: 3
                }
            })

            // Create Milling
            event.custom({
                type: 'create:milling',
                ingredients: [
                    {
                        item: o.poor_ore_piece
                    }
                ],
                processingTime: 400,
                results: [
                    {
                        item: o.ore_powder,
                        count: 3
                    }
                ]
            })

            // Create Crushing
            event.custom({
                type: 'create:crushing',
                ingredients: [
                    {
                        item: o.poor_ore_piece
                    }
                ],
                processingTime: 400,
                results: [
                    {
                        item: o.ore_powder,
                        count: 3
                    },
                    {
                        chance: 0.33,
                        item: o.ore_secondary_powder
                    }
                ]
            })

            // Railcraft Crusher
            event.custom({
                type: 'railcraft:crusher',
                ingredient: {
                    item: o.poor_ore_piece
                },
                outputs: [
                    {
                        probability: 1.00,
                        result: {
                            item: o.ore_powder
                        },
                        count: 3
                    },
                    {
                        probability: 0.66,
                        result: {
                            item: o.ore_secondary_powder
                        }
                    }
                ]
            })

            // Immersive Engineering Crusher
            event.custom({
                type: "immersiveengineering:crusher",
                energy: 6000,
                input: {
                    item: o.poor_ore_piece
                },
                result: {
                    item: o.ore_powder,
                    count: 3
                },
                secondaries: [
                    {
                        chance: 1.00,
                        output: {
                            item: o.ore_secondary_powder
                        } 
                    }
                ]
            })
        }

        // Normal Ore Piece
        if (o.normal_ore_piece != null && o.ore_powder != null && o.ore_secondary_powder != null) {

            // Quern
            event.custom({
                type: 'tfc:quern',
                ingredient: {
                    item: o.normal_ore_piece
                },
                result: {
                    item: o.ore_powder,
                    count: 5
                }
            })

            // Create Milling
            event.custom({
                type: 'create:milling',
                ingredients: [
                    {
                        item: o.normal_ore_piece
                    }
                ],
                processingTime: 400,
                results: [
                    {
                        item: o.ore_powder,
                        count: 5
                    }
                ]
            })

            // Create Crushing
            event.custom({
                type: 'create:crushing',
                ingredients: [
                    {
                        item: o.normal_ore_piece
                    }
                ],
                processingTime: 400,
                results: [
                    {
                        item: o.ore_powder,
                        count: 5
                    },
                    {
                        chance: 0.33,
                        item: o.ore_secondary_powder,
                        count: 2
                    }
                ]
            })

            // Railcraft Crusher
            event.custom({
                type: 'railcraft:crusher',
                ingredient: {
                    item: o.normal_ore_piece
                },
                outputs: [
                    {
                        probability: 1.00,
                        result: {
                            item: o.ore_powder
                        },
                        count: 5
                    },
                    {
                        probability: 0.66,
                        result: {
                            item: o.ore_secondary_powder
                        },
                        count: 2
                    }
                ]
            })

            // Immersive Engineering Crusher
            event.custom({
                type: "immersiveengineering:crusher",
                energy: 6000,
                input: {
                    item: o.normal_ore_piece
                },
                result: {
                    item: o.ore_powder,
                    count: 5
                },
                secondaries: [
                    {
                        chance: 1.00,
                        output: {
                            item: o.ore_secondary_powder,
                            count: 2
                        } 
                    }
                ]
            })
        }

        // Rich Ore Piece
        if (o.rich_ore_piece != null && o.ore_powder != null && o.ore_secondary_powder != null) {

            // Quern
            event.custom({
                type: 'tfc:quern',
                ingredient: {
                    item: o.rich_ore_piece
                },
                result: {
                    item: o.ore_powder,
                    count: 7
                }
            })

            // Create Milling
            event.custom({
                type: 'create:milling',
                ingredients: [
                    {
                        item: o.rich_ore_piece
                    }
                ],
                processingTime: 400,
                results: [
                    {
                        item: o.ore_powder,
                        count: 7
                    }
                ]
            })

            // Create Crushing
            event.custom({
                type: 'create:crushing',
                ingredients: [
                    {
                        item: o.rich_ore_piece
                    }
                ],
                processingTime: 400,
                results: [
                    {
                        item: o.ore_powder,
                        count: 7
                    },
                    {
                        chance: 0.33,
                        item: o.ore_secondary_powder,
                        count: 3
                    }
                ]
            })

            // Railcraft Crusher
            event.custom({
                type: 'railcraft:crusher',
                ingredient: {
                    item: o.rich_ore_piece
                },
                outputs: [
                    {
                        probability: 1.00,
                        result: {
                            item: o.ore_powder
                        },
                        count: 7
                    },
                    {
                        probability: 0.66,
                        result: {
                            item: o.ore_secondary_powder
                        },
                        count: 3
                    }
                ]
            })

            // Immersive Engineering Crusher
            event.custom({
                type: "immersiveengineering:crusher",
                energy: 6000,
                input: {
                    item: o.rich_ore_piece
                },
                result: {
                    item: o.ore_powder,
                    count: 7
                },
                secondaries: [
                    {
                        chance: 1.00,
                        output: {
                            item: o.ore_secondary_powder,
                            count: 3
                        } 
                    }
                ]
            })
        }

        // Pellet Processing
        if (o.ore_pellet != null && m.ingot != null && o.ore_powder != null && o.ore_slurry != null) {

            // Pellet
            event.shaped(Item.of(o.ore_pellet),
                [
                    'PP',
                    'PP'
                ],
                {
                    P: o.ore_powder
                }
            )

            // Uncompress Pellet
            event.shapeless(
                Item.of(o.ore_powder, 4),
                [
                    o.ore_pellet,
                    '#tfc:hammers'
                ]
            ).damageIngredient('#tfc:hammers')

            // Slurry
            event.custom({
                type: 'createdieselgenerators:bulk_fermenting',
                ingredients: [
                    {
                        fluidTag: 'tfc:any_fresh_water',
                        amount: 250
                    },
                    {
                        item: o.ore_powder
                    }
                ],
                processingTime: 600,
                results: [
                    {
                        fluid: o.ore_slurry,
                        amount: 250
                    }
                ]
            })

            // Pellet Heating
            event.custom({
                type: 'tfc:heating',
                ingredient: {
                    item: o.ore_pellet
                },
                result_fluid: {
                    fluid: m.fluid,
                    amount: 20
                },
                temperature: m.melt
            })
        }

        // Compressed Powder Processing
        if (o.ore_compressed_powder != null && m.ingot != null && o.ore_refined_powder != null && o.ore_slurry != null) {

            // Compressed Powder
            event.shaped(Item.of(o.ore_compressed_powder),
                [
                    'PP',
                    'PP'
                ],
                {
                    P: o.ore_refined_powder
                }
            )

            // Uncompress Compressed Powder
            event.shapeless(
                Item.of(o.ore_refined_powder, 4),
                [
                    o.ore_compressed_powder,
                    '#tfc:hammers'
                ]
            ).damageIngredient('#tfc:hammers')

            // Slurry Evaporation
            event.custom({
                type: 'createdieselgenerators:basin_fermenting',
                ingredients: [
                    {
                        fluid: o.ore_slurry,
                        amount: 250
                    }
                ],
                heatRequirement: 'heated',
                processingTime: 600,
                results: [
                    {
                        item: o.ore_refined_powder
                    }
                ]
            })

            // Refined Powder Heating
            event.custom({
                type: 'tfc:heating',
                ingredient: {
                    item: o.ore_refined_powder
                },
                result_fluid: {
                    fluid: m.fluid,
                    amount: 10
                },
                temperature: m.melt
            })

            // Compressed Powder Heating
            event.custom({
                type: 'tfc:heating',
                ingredient: {
                    item: o.ore_compressed_powder
                },
                result_fluid: {
                    fluid: m.fluid,
                    amount: 40
                },
                temperature: m.melt
            })
        }

        // Roasted Brick Processing
        if (o.ore_roasted_brick != null && m.ingot != null && o.ore_roasted_powder != null && o.ore_refined_powder != null) {

            // Roasted Brick
            event.shaped(Item.of(o.ore_roasted_brick),
                [
                    'PP',
                    'PP'
                ],
                {
                    P: o.ore_roasted_powder
                }
            )

            // Uncompress Roasted Brick
            event.shapeless(
                Item.of(o.ore_roasted_powder, 4),
                [
                    o.ore_roasted_brick,
                    '#tfc:hammers'
                ]
            ).damageIngredient('#tfc:hammers')

            // Refined Powder Roasting
            event.custom({
                type: 'createdieselgenerators:basin_fermenting',
                ingredients: [
                    {
                        item: o.ore_refined_powder
                    },
                    {
                        fluidTag: 'tfc:any_fresh_water',
                        amount: 20
                    }
                ],
                heatRequirement: 'heated',
                processingTime: 600,
                results: [
                    {
                        item: o.ore_roasted_powder
                    }
                ]
            })

            // Roasted Powder Heating
            event.custom({
                type: 'tfc:heating',
                ingredient: {
                    item: o.ore_roasted_powder
                },
                result_fluid: {
                    fluid: m.fluid,
                    amount: 15
                },
                temperature: m.melt
            })

            // Roasted Brick Heating
            event.custom({
                type: 'tfc:heating',
                ingredient: {
                    item: o.ore_roasted_brick
                },
                result_fluid: {
                    fluid: m.fluid,
                    amount: 60
                },
                temperature: m.melt
            })
        }

        // Ore Sand Processing
        if(o.ore_sand != null && o.ore_pellet != null && o.ore_compressed_powder != null && o.ore_roasted_brick != null && m.ingot != null) {
            
            // Pellet -> Ore Sand
            event.shapeless(
                Item.of(o.ore_sand),
                [
                    `5x ${o.ore_pellet}`
                ]
            )

            // Compressed Powder -> Ore Sand
            event.shapeless(
                Item.of(o.ore_sand, 2),
                [
                    `5x ${o.ore_compressed_powder}`
                ]
            )

            // Roasted Brick -> Ore Sand
                event.shapeless(
                Item.of(o.ore_sand, 3),
                [
                    `5x ${o.ore_roasted_brick}`
                ]
            )

            // Ore Sand Blasting
            event.custom({
                type: 'immersiveengineering:blast_furnace',
                input: {
                    item: o.ore_sand
                },
                result: {
                    item: m.ingot
                },
                slag: {
                    item: 'kubejs:slag'
                },
                time: 1200
            })

            // Ore Sand Arc Melting
            event.custom({
                type: 'immersiveengineering:arc_furnace',
                energy: 51200,
                input: {
                    base_ingredient: {
                        item: o.ore_sand,
                    }
                },
                additives: [],
                results: [
                    {
                        base_ingredient: {
                            item: m.ingot
                        },
                        count: 1
                    }
                ],
                slag: {
                    item: 'kubejs:slag'
                },
                secondaries: [],
                time: 100
            })

            // Ore Sand Heating
            if (o.ore_sand.startsWith('kubejs:')) {
                event.custom({
                    type: 'tfc:heating',
                    ingredient: {
                        item: o.ore_sand
                    },
                    result_fluid: {
                        fluid: m.fluid,
                        amount: 100
                    },
                    temperature: m.melt
                })
            } 
        }
    }
})