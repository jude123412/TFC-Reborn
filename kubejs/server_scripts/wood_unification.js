ServerEvents.recipes(event => {
    const lychee = event.recipes.lychee
    const create = event.recipes.create
    const tfc = event.recipes.tfc

    for (const wood in global.trees) {
        let t = global.trees[wood]

        if (t.generate_bark) {
            event.remove({id: `${t.mod_id}:crafting/wood/${wood}_lumber_log`})
            event.remove({id: `${t.mod_id}:crafting/wood/${wood}_support`})

            tfc.quern(`tfc_debark:${wood}_bark_powder`, `tfc_debark:${wood}_bark`)
            create.milling(`tfc_debark:${wood}_bark_powder`, `tfc_debark:${wood}_bark`)
            create.crushing(`tfc_debark:${wood}_bark_powder`, `tfc_debark:${wood}_bark`)

            create.cutting(
                [
                    `${t.mod_id}:wood/stripped_log/${wood}`,
                    `tfc_debark:${wood}_bark`
                ],
                `${t.mod_id}:wood/log/${wood}`
            )
            create.cutting(
                [
                    `${t.mod_id}:wood/stripped_wood/${wood}`,
                    `tfc_debark:${wood}_bark`
                ],
                `${t.mod_id}:wood/wood/${wood}`
            )
        }

        // Stripped Log/Wood
        event.remove({id: `tfc_debark:bark/${wood}_log`})
        event.remove({id: `tfc_debark:bark/${wood}_wood`})
        lychee.block_interacting(
            '#tfc:axes_that_log', 
            BlockPredicate.of(`${t.mod_id}:wood/log/${wood}`)
        ).post([ 
            Post.drop_item(Item.of(`tfc_debark:${wood}_bark`)).withChance(0.5),
            Post.place(`${t.mod_id}:wood/stripped_log/${wood}`),
            Post.add_item_cooldown(1),
            Post.damage_item()
        ])
        lychee.block_interacting(
            '#tfc:axes_that_log', 
            BlockPredicate.of(`${t.mod_id}:wood/wood/${wood}`)
        ).post([ 
            Post.drop_item(Item.of(`tfc_debark:${wood}_bark`)).withChance(0.5),
            Post.place(`${t.mod_id}:wood/stripped_wood/${wood}`),
            Post.add_item_cooldown(1),
            Post.damage_item()
        ])
        
        event.custom({
            type: 'mekanism:sawing',
            input: {
                ingredient: {
                    item: `${t.mod_id}:wood/log/${wood}`
                }
            },
            mainOutput: {
                item: `${t.mod_id}:wood/stripped_log/${wood}`
            },
            secondaryChance: 1.0,
            secondaryOutput: {
                item: `tfc_debark:${wood}_bark`
            }
        })
        event.custom({
            type: 'mekanism:sawing',
            input: {
                ingredient: {
                    item: `${t.mod_id}:wood/wood/${wood}`
                }
            },
            mainOutput: {
                item: `${t.mod_id}:wood/stripped_wood/${wood}`
            },
            secondaryChance: 1.0,
            secondaryOutput: {
                item: `tfc_debark:${wood}_bark`
            }
        })
        

        // Support
        event.remove({id: `tfc:crafting/wood/${wood}_support`})
        event.remove({id: `tfc_lumberjack:support_from_log/${wood}`})
        event.remove({id: `tfc_lumberjack:compat/create/cutting/support/${wood}_log`})
        event.remove({id: `tfc_lumberjack:compat/create/cutting/support/${wood}_wood`})
        event.remove({id: `tfc_lumberjack:compat/immersiveengineering/sawmill/support/${wood}_log`})
        event.remove({id: `tfc_lumberjack:compat/immersiveengineering/sawmill/support/${wood}_wood`})
        lychee.block_interacting(
            '#tfc:axes_that_log', 
            BlockPredicate.of(`${t.mod_id}:wood/stripped_log/${wood}`)
        ).post([ 
            Post.drop_item(Item.of(`${t.mod_id}:wood/support/${wood}`, 2)),
            Post.place('minecraft:air'),
            Post.add_item_cooldown(1),
            Post.damage_item()
        ])
        lychee.block_interacting(
            '#tfc:axes_that_log', 
            BlockPredicate.of(`${t.mod_id}:wood/stripped_wood/${wood}`)
        ).post([ 
            Post.drop_item(Item.of(`${t.mod_id}:wood/support/${wood}`, 2)),
            Post.place('minecraft:air'),
            Post.add_item_cooldown(1),
            Post.damage_item()
        ])
        create.cutting(
            [
                Item.of(`${t.mod_id}:wood/support/${wood}`, 3),
                'kubejs:powder/wood'
            ],
            `${t.mod_id}:wood/stripped_log/${wood}`
        )
        create.cutting(
            [
                Item.of(`${t.mod_id}:wood/support/${wood}`, 3),
                'kubejs:powder/wood'
            ],
            `${t.mod_id}:wood/stripped_wood/${wood}`
        )
        event.custom({
            type: 'immersiveengineering:sawmill',
            secondaries: [
                {
                    output: {
                        item: `tfc_debark:${wood}_bark`
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
                item: `${t.mod_id}:wood/support/${wood}`,
                count: 4
            },
            energy: 1600,
            input: [
                {
                    item: `${t.mod_id}:wood/log/${wood}`
                }
            ],
            stripped: {
                item: `${t.mod_id}:wood/stripped_log/${wood}`
            }
        })
        event.custom({
            type: 'immersiveengineering:sawmill',
            secondaries: [
                {
                    output: {
                        item: `tfc_debark:${wood}_bark`
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
                item: `${t.mod_id}:wood/support/${wood}`,
                count: 4
            },
            energy: 1600,
            input: [
                {
                    item: `${t.mod_id}:wood/wood/${wood}`
                }
            ],
            stripped: {
                item: `${t.mod_id}:wood/stripped_wood/${wood}`
            }
        })
        event.custom({
            type: 'mekanism:sawing',
            input: {
                ingredient: {
                    item: `${t.mod_id}:wood/stripped_log/${wood}`
                }
            },
            mainOutput: {
                item: `${t.mod_id}:wood/support/${wood}`,
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
                    item: `${t.mod_id}:wood/stripped_wood/${wood}`
                }
            },
            mainOutput: {
                item: `${t.mod_id}:wood/support/${wood}`,
                count: 5
            },
            secondaryChance: 1.0,
            secondaryOutput: {
                item: 'kubejs:powder/wood'
            }
        })

        // Lumber
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
            BlockPredicate.of(`${t.mod_id}:wood/stripped_log/${wood}`)
        ).post([ 
            Post.drop_item(Item.of(`${t.mod_id}:wood/lumber/${wood}`, 4)),
            Post.drop_item(Item.of('kubejs:powder/wood')),
            Post.place('minecraft:air'),
            Post.add_item_cooldown(1),
            Post.damage_item()
        ])
        lychee.block_interacting(
            '#tfc:saws', 
            BlockPredicate.of(`${t.mod_id}:wood/stripped_wood/${wood}`)
        ).post([ 
            Post.drop_item(Item.of(`${t.mod_id}:wood/lumber/${wood}`, 4)),
            Post.drop_item(Item.of('kubejs:powder/wood')),
            Post.place('minecraft:air'),
            Post.add_item_cooldown(1),
            Post.damage_item()
        ])
        create.cutting(
            [
                Item.of(`${t.mod_id}:wood/lumber/${wood}`, 4),
                'kubejs:powder/wood'
            ],
            `${t.mod_id}:wood/support/${wood}`
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
                item: `${t.mod_id}:wood/lumber/${wood}`,
                count: 4
            },
            energy: 1600,
            input: [
                {
                    item: `${t.mod_id}:wood/support/${wood}`
                }
            ]
        })
        event.custom({
            type: 'mekanism:sawing',
            input: {
                ingredient: {
                    item: `${t.mod_id}:wood/support/${wood}`
                }
            },
            mainOutput: {
                item: `${t.mod_id}:wood/lumber/${wood}`,
                count: 4
            },
            secondaryChance: 1.0,
            secondaryOutput: {
                item: 'kubejs:powder/wood'
            }
        })
    }
})