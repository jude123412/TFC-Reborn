ServerEvents.recipes(event => {
    const lychee = event.recipes.lychee
    const create = event.recipes.create
    const tfc = event.recipes.tfc

    event.remove({id: /create:cutting\/runtime_generated\/compat\/minecraft\/.*/})
    event.remove({id: /create:cutting\/compat\/immersiveengineering\/.*/})
    event.remove({id: /create:cutting\/runtime_generated\/compat\/botania\/.*/})

    for (const wood in global.integration_trees) {
        let t = global.integration_trees[wood]

        if (t.bark != null && t.bark_powder != null) {
            event.remove({id: `${t.mod_id}:crafting/wood/${wood}_lumber_log`})
            event.remove({id: `${t.mod_id}:crafting/wood/${wood}_support`})

            tfc.quern(t.bark_powder, t.bark)
            create.milling(t.bark_powder, t.bark)
            create.crushing(t.bark_powder, t.bark)

            event.custom({
                type: 'railcraft:crusher',
                ingredient: {
                    item: t.bark
                },
                outputs: [
                    {
                        probability: 1.0,
                        result: {
                            item: t.bark_powder
                        }
                    }
                ]
            })

            event.custom({
                type: "immersiveengineering:crusher",
                energy: 3000,
                input: {
                    item: t.bark
                },
                result: {
                    item: t.bark_powder
                },
                secondaries: []
            })

            event.custom({
                type: 'mekanism:crushing',
                input: {
                    ingredient: {
                        item: t.bark
                    }
                },
                output: {
                    item: t.bark_powder
                }
            })
        }
        
        // Stripped Log/Wood
        if (t.log != null && t.wood != null && t.stripped_log != null && t.stripped_wood != null && t.bark != null) {
            event.remove({id: `tfc_debark:bark/${wood}_log`})
            event.remove({id: `tfc_debark:bark/${wood}_wood`})

            lychee.block_interacting(
                '#minecraft:axes', 
                BlockPredicate.of(t.log)
            ).post([ 
                Post.drop_item(Item.of(t.bark)).withChance(0.5),
                Post.place(t.stripped_log),
                Post.damage_item()
            ])
            lychee.block_interacting(
                '#minecraft:axes', 
                BlockPredicate.of(t.wood)
            ).post([ 
                Post.drop_item(Item.of(t.bark)).withChance(0.5),
                Post.place(t.stripped_wood),
                Post.damage_item()
            ])
            lychee.block_interacting(
                '#tfc:saws', 
                BlockPredicate.of(t.log)
            ).post([ 
                Post.drop_item(Item.of(t.bark)).withChance(0.5),
                Post.place(t.stripped_log),
                Post.damage_item()
            ])
            lychee.block_interacting(
                '#tfc:saws', 
                BlockPredicate.of(t.wood)
            ).post([ 
                Post.drop_item(Item.of(t.bark)).withChance(0.5),
                Post.place(t.stripped_wood),
                Post.damage_item()
            ])
            create.cutting(
                [
                    t.stripped_log,
                    t.bark
                ],
                t.log
            )
            create.cutting(
                [
                    t.stripped_wood,
                    t.bark
                ],
                t.wood
            )
            event.custom({
                type: 'mekanism:sawing',
                input: {
                    ingredient: {
                        item: t.log
                    }
                },
                mainOutput: {
                    item: t.stripped_log
                },
                secondaryChance: 1.0,
                secondaryOutput: {
                    item: t.bark
                }
            })
            event.custom({
                type: 'mekanism:sawing',
                input: {
                    ingredient: {
                        item: t.wood
                    }
                },
                mainOutput: {
                    item: t.stripped_wood
                },
                secondaryChance: 1.0,
                secondaryOutput: {
                    item: t.bark
                }
            })
        }

        // Support
        if (t.log != null && t.wood != null && t.stripped_log != null && t.stripped_wood != null && t.support != null && t.bark != null) {
            event.remove({id: `tfc:crafting/wood/${wood}_support`})
            event.remove({id: `tfc_lumberjack:support_from_log/${wood}`})
            event.remove({id: `tfc_lumberjack:compat/create/cutting/support/${wood}_log`})
            event.remove({id: `tfc_lumberjack:compat/create/cutting/support/${wood}_wood`})
            event.remove({id: `tfc_lumberjack:compat/immersiveengineering/sawmill/support/${wood}_log`})
            event.remove({id: `tfc_lumberjack:compat/immersiveengineering/sawmill/support/${wood}_wood`})

            lychee.block_interacting(
                '#minecraft:axes', 
                BlockPredicate.of(t.stripped_log)
            ).post([ 
                Post.drop_item(Item.of(t.support, 2)),
                Post.place('minecraft:air'),
                Post.damage_item()
            ])
            lychee.block_interacting(
                '#minecraft:axes', 
                BlockPredicate.of(t.stripped_wood)
            ).post([ 
                Post.drop_item(Item.of(t.support, 2)),
                Post.place('minecraft:air'),
                Post.damage_item()
            ])
            create.cutting(
                [
                    Item.of(t.support, 3),
                    'kubejs:powder/wood'
                ],
                t.stripped_log
            )
            create.cutting(
                [
                    Item.of(t.support, 3),
                    'kubejs:powder/wood'
                ],
                t.stripped_wood
            )
            event.custom({
                type: 'immersiveengineering:sawmill',
                secondaries: [
                    {
                        output: {
                            item: t.bark
                        },
                        stripping: true
                    },
                    {
                        output: {
                            item: 'kubejs:powder/wood'
                        },
                        stripping: false
                    }
                ],
                result: {
                    item: t.support,
                    count: 4
                },
                energy: 1600,
                input: [
                    {
                        item: t.log
                    }
                ],
                stripped: {
                    item: t.stripped_log
                }
            })
            event.custom({
                type: 'immersiveengineering:sawmill',
                secondaries: [
                    {
                        output: {
                            item: t.bark
                        },
                        stripping: true
                    },
                    {
                        output: {
                            item: 'kubejs:powder/wood'
                        },
                        stripping: false
                    }
                ],
                result: {
                    item: t.support,
                    count: 4
                },
                energy: 1600,
                input: [
                    {
                        item: t.wood
                    }
                ],
                stripped: {
                    item: t.stripped_wood
                }
            })
            event.custom({
                type: 'mekanism:sawing',
                input: {
                    ingredient: {
                        item: t.stripped_log
                    }
                },
                mainOutput: {
                    item: t.support,
                    count: 5
                },
                secondaryChance: 1.0,
                secondaryOutput: {
                    item: 'kubejs:powder/wood'
                }
            })
            event.custom({
                type: 'mekanism:sawing',
                input: {
                    ingredient: {
                        item: t.stripped_wood
                    }
                },
                mainOutput: {
                    item: t.support,
                    count: 5
                },
                secondaryChance: 1.0,
                secondaryOutput: {
                    item: 'kubejs:powder/wood'
                }
            })
        }

        // Lumber
        if (t.stripped_log != null && t.stripped_wood != null && t.support != null && t.bark != null) {
            event.remove({id: `tfc:crafting/wood/${wood}_lumber_log`})
            event.remove({id: `tfc_lumberjack:compat/create/cutting/lumber/${wood}`})
            event.remove({id: `tfc_ie_addon:sawmill/${wood}/button`})
            event.remove({id: `tfc_ie_addon:sawmill/${wood}_stripped_log`})
            event.remove({id: `tfc_ie_addon:sawmill/${wood}/pressure_plate`})
            event.remove({id: `tfc_ie_addon:sawmill/${wood}_log`})
            event.remove({id: `tfc_ie_addon:sawmill/${wood}/fence`})
            event.remove({id: `tfc_ie_addon:sawmill/${wood}/door`})
            event.remove({id: `tfc_ie_addon:sawmill/${wood}/stairs`})
            event.remove({id: `tfc_ie_addon:sawmill/${wood}/loom`})
            event.remove({id: `tfc_lumberjack:compat/immersiveengineering/sawmill/lumber/${wood}`})
            event.remove({id: `tfc_ie_addon:sawmill/${wood}/fence_gate`})
            event.remove({id: `tfc_ie_addon:sawmill/${wood}/sign`})
            event.remove({id: `tfc_ie_addon:sawmill/${wood}/boat`})
            event.remove({id: `tfc_ie_addon:sawmill/${wood}/planks`})
            event.remove({id: `tfc_ie_addon:sawmill/${wood}/tool_rack`})
            event.remove({id: `tfc_ie_addon:sawmill/${wood}/bookshelf`})
            event.remove({id: `tfc_ie_addon:sawmill/${wood}/slab`})
            event.remove({id: `tfc_ie_addon:sawmill/${wood}/trapped_chest`})
            event.remove({id: `tfc_ie_addon:sawmill/${wood}/sluice`})
            event.remove({id: `tfc_ie_addon:sawmill/${wood}/lectern`})
            event.remove({id: `tfc_ie_addon:sawmill/${wood}/trapdoor`})
            event.remove({id: `tfc_ie_addon:sawmill/${wood}_stripped_wood`})
            event.remove({id: `tfc_ie_addon:sawmill/${wood}/log_fence`})
            event.remove({id: `tfc_ie_addon:sawmill/${wood}/chest`})
            event.remove({id: `tfc_ie_addon:sawmill/${wood}/barrel`})
            event.remove({id: `tfc_ie_addon:sawmill/${wood}_wood`})

            lychee.block_interacting(
                '#tfc:saws', 
                BlockPredicate.of(t.stripped_log)
            ).post([ 
                Post.drop_item(Item.of(t.lumber, 4)),
                Post.drop_item(Item.of('kubejs:powder/wood')),
                Post.place('minecraft:air'),
                Post.damage_item()
            ])
            lychee.block_interacting(
                '#tfc:saws', 
                BlockPredicate.of(t.stripped_wood)
            ).post([ 
                Post.drop_item(Item.of(t.lumber, 4)),
                Post.drop_item(Item.of('kubejs:powder/wood')),
                Post.place('minecraft:air'),
                Post.damage_item()
            ])
            create.cutting(
                [
                    Item.of(t.lumber, 4),
                    'kubejs:powder/wood'
                ],
                t.support
            )
            event.custom({
                type: 'immersiveengineering:sawmill',
                secondaries: [
                    {
                        output: {
                            item: 'kubejs:powder/wood'
                        },
                        stripping: false
                    }
                ],
                result: {
                    item: t.lumber,
                    count: 4
                },
                energy: 1600,
                input: [
                    {
                        item: t.support
                    }
                ]
            })
            event.custom({
                type: 'mekanism:sawing',
                input: {
                    ingredient: {
                        item: t.support
                    }
                },
                mainOutput: {
                    item: t.lumber,
                    count: 4
                },
                secondaryChance: 1.0,
                secondaryOutput: {
                    item: 'kubejs:powder/wood'
                }
            })
        }

        if (t.lumber != null && t.planks != null && t.plank_recipe_id != null) {
            event.remove({id: t.plank_recipe_id})
            event.shaped(
                Item.of(t.planks), 
                [
                    'LL',
                    'LL'
                ],
                {
                    L: t.lumber
                }
            )
        }
    
        if (t.stairs != null && t.planks != null && t.stairs_recipe_id != null) {
            event.remove({id: t.stairs_recipe_id})
            event.shaped(
                Item.of(t.stairs, 8), 
                [
                    'P  ',
                    'PP ',
                    'PPP'
                ],
                {
                    P: t.planks
                }
            )
        }

        if (t.lumber != null && t.fence != null && t.planks != null && t.fence_recipe_id != null) {
            event.remove({id: t.fence_recipe_id})
            event.shaped(
                Item.of(t.fence, 8), 
                [
                    'PLP',
                    'PLP'
                ],
                {
                    P: t.planks,
                    L: t.lumber
                }
            )
        }

        if (t.lumber != null && t.fence_gate != null && t.planks != null && t.fence_gate_recipe_id != null) {
            event.remove({id: t.fence_gate_recipe_id})
            event.shaped(
                Item.of(t.fence_gate, 2), 
                [
                    'LPL',
                    'LPL'
                ],
                {
                    L: t.lumber,
                    P: t.planks
                }
            )
        }

        if (t.lumber != null && t.slab != null && t.stairs != null && t.planks != null) {
            event.shapeless(
                Item.of(t.lumber, 2),
                [
                    t.slab,
                    '#tfc:saws'
                ]
            ).damageIngredient('#tfc:saws')

            event.shapeless(
                Item.of(t.lumber, 3),
                [
                    t.stairs,
                    '#tfc:saws'
                ]
            ).damageIngredient('#tfc:saws')

            event.shapeless(
                Item.of(t.lumber, 4),
                [
                    t.planks,
                    '#tfc:saws'
                ]
            ).damageIngredient('#tfc:saws')
        }
    }
})

TFCEvents.data(event => {
    for (const wood in global.integration_trees) {
        let t = global.integration_trees[wood]

        if (t.generate_components) {
            event.support(t.support, 5, 5, 9)
        }
    }
})