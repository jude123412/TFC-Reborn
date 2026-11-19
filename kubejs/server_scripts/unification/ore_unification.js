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
    }
})

ServerEvents.recipes(event => {

    // Recipe Removal
    event.remove({ id: /tfc:quern\/small_.*/ })
    event.remove({ id: /tfc:quern\/poor_.*/ })
    event.remove({ id: /tfc:quern\/normal_.*/ })
    event.remove({ id: /tfc:quern\/rich_.*/ })
    event.remove({ id: /tfc_ie_addon:quern\/small_.*/ })
    event.remove({ id: /tfc_ie_addon:quern\/poor_.*/ })
    event.remove({ id: /tfc_ie_addon:quern\/normal_.*/ })
    event.remove({ id: /tfc_ie_addon:quern\/rich_.*/ })
    event.remove({ id: /tfc_ie_addon:crusher\/ore\/small_.*/ })
    event.remove({ id: /tfc_ie_addon:crusher\/ore\/poor_.*/ })
    event.remove({ id: /tfc_ie_addon:crusher\/ore\/normal_.*/ })
    event.remove({ id: /tfc_ie_addon:crusher\/ore\/rich_.*/ })

    // Begin...
    for (const ore in global.metal_ores) {
        let o = global.metal_ores[ore]
        let m = global.metals[o.ore_metal]

        // Ore Powder Melting
        if (o.ore_powder != null && (o.ore_powder.startsWith('kubejs:') || o.ore_powder.startsWith('tfc_ie_addon:'))) {
            event.custom({
                type: 'tfc:heating',
                ingredient: {
                    item: o.ore_powder
                },
                result_fluid: {
                    fluid: m.fluid,
                    amount: 6
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
    }
})

// ServerEvents.recipes(event => {
//     for (const ore in global.metal_ores) {
//         const tfc = event.recipes.tfc
//         const create = event.recipes.create

//         let o = global.metal_ores[ore]
//         let m = global.metals[o.metal]

//         event.remove({type: 'immersiveengineering:arc_furnace'})

//         // Pellet Recipes
//         if (o.generate_pellet) {
//             event.shaped(Item.of(`tfcoreprocessing:pellet/${ore}`),
//             [
//                 'PP',
//                 'PP'
//             ],
//             {
//                 P: `${o.mod_id}:powder/${ore}`
//             })

//             tfc.heating(`tfcoreprocessing:pellet/${ore}`, m.melt)
//                 .resultFluid(Fluid.of(m.fluid, 30))

//             event.custom({
//                 'type': 'immersiveengineering:arc_furnace',
//                 'energy': 51200,
//                 'input': {
//                     'base_ingredient': {
//                         'tag': `forge:pellets/${ore}`,
//                     },
//                     'count': 10
//                 },
//                 "additives": [],
//                 'results': [{
//                     'base_ingredient': {
//                         'item': `${o.ingot_mod_id}:${o.ingot_prefix}${o.metal}`
//                     },
//                     'count': 3
//                 }],
//                 secondaries: [],
//                 'time': 100
//             })
//         }

//         if (o.generate_powder) {
//             tfc.quern(Item.of(`${o.mod_id}:powder/${ore}`, 2), `${o.mod_id}:ore/small_${ore}`)
//             tfc.quern(Item.of(`${o.mod_id}:powder/${ore}`, 3), `${o.mod_id}:ore/poor_${ore}`)
//             tfc.quern(Item.of(`${o.mod_id}:powder/${ore}`, 5), `${o.mod_id}:ore/normal_${ore}`)
//             tfc.quern(Item.of(`${o.mod_id}:powder/${ore}`, 7), `${o.mod_id}:ore/rich_${ore}`)

//             create.milling(Item.of(`${o.mod_id}:powder/${ore}`, 2), `${o.mod_id}:ore/small_${ore}`)
//             create.milling(Item.of(`${o.mod_id}:powder/${ore}`, 3), `${o.mod_id}:ore/poor_${ore}`)
//             create.milling(Item.of(`${o.mod_id}:powder/${ore}`, 5), `${o.mod_id}:ore/normal_${ore}`)
//             create.milling(Item.of(`${o.mod_id}:powder/${ore}`, 7), `${o.mod_id}:ore/rich_${ore}`)

//             create.crushing(Item.of(`${o.mod_id}:powder/${ore}`, 3), `${o.mod_id}:ore/small_${ore}`)
//             create.crushing(Item.of(`${o.mod_id}:powder/${ore}`, 5), `${o.mod_id}:ore/poor_${ore}`)
//             create.crushing(Item.of(`${o.mod_id}:powder/${ore}`, 8), `${o.mod_id}:ore/normal_${ore}`)
//             create.crushing(Item.of(`${o.mod_id}:powder/${ore}`, 11), `${o.mod_id}:ore/rich_${ore}`)

//             // Small Ore Crushing
//             event.custom({
//                 type: "immersiveengineering:crusher",
//                 energy: 6000,
//                 input: {
//                     item: `${o.mod_id}:ore/small_${ore}`
//                 },
//                 result: {
//                     item: `${o.mod_id}:powder/${ore}`,
//                     count: 4
//                 },
//                 secondaries: []
//             })

//             // Poor Ore Crushing
//             event.custom({
//                 type: "immersiveengineering:crusher",
//                 energy: 6000,
//                 input: {
//                     item: `${o.mod_id}:ore/poor_${ore}`
//                 },
//                 result: {
//                     item: `${o.mod_id}:powder/${ore}`,
//                     count: 6
//                 },
//                 secondaries: []
//             })

//             // Normal Ore Crushing
//             event.custom({
//                 type: "immersiveengineering:crusher",
//                 energy: 6000,
//                 input: {
//                     item: `${o.mod_id}:ore/normal_${ore}`
//                 },
//                 result: {
//                     item: `${o.mod_id}:powder/${ore}`,
//                     count: 10
//                 },
//                 secondaries: []
//             })

//             // Rich Ore Crushing
//             event.custom({
//                 type: "immersiveengineering:crusher",
//                 energy: 6000,
//                 input: {
//                     item: `${o.mod_id}:ore/rich_${ore}`
//                 },
//                 result: {
//                     item: `${o.mod_id}:powder/${ore}`,
//                     count: 14
//                 },
//                 secondaries: []
//             })


//             tfc.heating(`${o.mod_id}:powder/${ore}`, m.melt)
//                 .resultFluid(Fluid.of(m.fluid, 6))
//         }

//         if (o.should_melt) {
//             tfc.heating(`${o.mod_id}:powder/${ore}`, m.melt)
//                 .resultFluid(Fluid.of(m.fluid, 6))
//         }

//         if (o.create_recipes) {
//             create.milling(Item.of(`${o.mod_id}:powder/${ore}`, 2), `${o.mod_id}:ore/small_${ore}`)
//             create.milling(Item.of(`${o.mod_id}:powder/${ore}`, 3), `${o.mod_id}:ore/poor_${ore}`)
//             create.milling(Item.of(`${o.mod_id}:powder/${ore}`, 5), `${o.mod_id}:ore/normal_${ore}`)
//             create.milling(Item.of(`${o.mod_id}:powder/${ore}`, 7), `${o.mod_id}:ore/rich_${ore}`)

//             create.crushing(Item.of(`${o.mod_id}:powder/${ore}`, 3), `${o.mod_id}:ore/small_${ore}`)
//             create.crushing(Item.of(`${o.mod_id}:powder/${ore}`, 5), `${o.mod_id}:ore/poor_${ore}`)
//             create.crushing(Item.of(`${o.mod_id}:powder/${ore}`, 8), `${o.mod_id}:ore/normal_${ore}`)
//             create.crushing(Item.of(`${o.mod_id}:powder/${ore}`, 11), `${o.mod_id}:ore/rich_${ore}`)
//         }
//     }
// })