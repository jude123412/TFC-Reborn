ServerEvents.recipes(event => {
    const lychee = event.recipes.lychee
    const create = event.recipes.create
    const tfc = event.recipes.tfc

    event.remove({id: 'create:crushing/compat/immersiveengineering/coke_block'})
    event.remove({id: 'create:crushing/compat/immersiveengineering/coal_coke'})
    event.remove({id: 'immersiveengineering:crusher/coke'})
    event.remove({id: 'immersiveengineering:crusher/coke_block'})
    event.remove({id: 'railcraft:crusher/crushing_tags_coal_coke'})

    // Silt Mud bricks
    event.remove({id: 'tfc:crafting/soil/silt_drying_bricks'})
    event.shapeless(Item.of('tfc:drying_bricks/silt'), [
        'tfc:mud/silt',
        '#forge:straw'
    ])
    lychee.block_interacting(
        '#forge:straw', 
        BlockPredicate.of('tfc:mud/silt')
    ).post([ 
        Post.drop_item(Item.of('tfc:drying_bricks/silt')),
        Post.place('minecraft:air')
    ])
    event.remove({id: 'tfc:crafting/soil/silt_mud_bricks'})
    event.shaped(Item.of('tfc:mud_bricks/silt', 4),
    [
        'BB',
        'BB'
    ],
    {
        B: 'tfc:mud_brick/silt'
    })

    // Loam Mud bricks
    event.remove({id: 'tfc:crafting/soil/loam_drying_bricks'})
    event.shapeless(Item.of('tfc:drying_bricks/loam'), [
        'tfc:mud/loam',
        '#forge:straw'
    ])
    lychee.block_interacting(
        '#forge:straw', 
        BlockPredicate.of('tfc:mud/loam')
    ).post([ 
        Post.drop_item(Item.of('tfc:drying_bricks/loam')),
        Post.place('minecraft:air')
    ])
    event.remove({id: 'tfc:crafting/soil/loam_mud_bricks'})
    event.shaped(Item.of('tfc:mud_bricks/loam', 4),
    [
        'BB',
        'BB'
    ],
    {
        B: 'tfc:mud_brick/loam'
    })

    // Sandy Loam Mud bricks
    event.remove({id: 'tfc:crafting/soil/sandy_loam_drying_bricks'})
    event.shapeless(Item.of('tfc:drying_bricks/sandy_loam'), [
        'tfc:mud/sandy_loam',
        '#forge:straw'
    ])
    lychee.block_interacting(
        '#forge:straw', 
        BlockPredicate.of('tfc:mud/sandy_loam')
    ).post([ 
        Post.drop_item(Item.of('tfc:drying_bricks/sandy_loam')),
        Post.place('minecraft:air')
    ])
    event.remove({id: 'tfc:crafting/soil/sandy_loam_mud_bricks'})
    event.shaped(Item.of('tfc:mud_bricks/sandy_loam', 4),
    [
        'BB',
        'BB'
    ],
    {
        B: 'tfc:mud_brick/sandy_loam'
    })

    // Silty Loam Mud bricks
    event.remove({id: 'tfc:crafting/soil/silty_loam_drying_bricks'})
    event.shapeless(Item.of('tfc:drying_bricks/silty_loam'), [
        'tfc:mud/silty_loam',
        '#forge:straw'
    ])
    lychee.block_interacting(
        '#forge:straw', 
        BlockPredicate.of('tfc:mud/silty_loam')
    ).post([ 
        Post.drop_item(Item.of('tfc:drying_bricks/silty_loam')),
        Post.place('minecraft:air')
    ])
    event.remove({id: 'tfc:crafting/soil/silty_loam_mud_bricks'})
    event.shaped(Item.of('tfc:mud_bricks/silty_loam', 4),
    [
        'BB',
        'BB'
    ],
    {
        B: 'tfc:mud_brick/silty_loam'
    })



    // Coke Powder
    tfc.quern(Item.of('tfc:powder/coke'), '#forge:coal_coke')
    tfc.quern(Item.of('tfc:powder/coke', 9), `#forge:storage_blocks/coal_coke`)
    create.milling(Item.of('tfc:powder/coke'), InputItem.of('#forge:coal_coke'))
    create.milling(Item.of('tfc:powder/coke', 9), InputItem.of(`#forge:storage_blocks/coal_coke`))
    create.crushing(Item.of('tfc:powder/coke'), InputItem.of('#forge:coal_coke'))
    create.crushing(Item.of('tfc:powder/coke', 9), InputItem.of('#forge:storage_blocks/coal_coke'))
    event.custom({
        type: 'immersiveengineering:crusher',
        energy: 27000,
        input: {
            tag: 'forge:storage_blocks/coal_coke'
        },
        result: {
            item: 'tfc:powder/coke',
            count: 9
        },
        secondaries: []
    })
    event.custom({
        type: 'immersiveengineering:crusher',
        energy: 3000,
        input: {
            tag: 'forge:coal_coke'
        },
        result: {
            item: 'tfc:powder/coke'
        },
        secondaries: []
    })
    event.custom({
        type: 'railcraft:crusher',
        ingredient: {
            tag: 'forge:coal_coke'
        },
        outputs: [
            {
                probability: 1.0,
                result: {
                    item: 'tfc:powder/coke',
                }
            }
        ]
    })
    event.custom({
        type: 'railcraft:crusher',
        ingredient: {
            tag: 'forge:storage_blocks/coal_coke'
        },
        outputs: [
            {
                count: 9,
                probability: 1.0,
                result: {
                    item: 'tfc:powder/coke',
                }
            }
        ]
    })
    event.custom({
        type: 'mekanism:crushing',
        input:{
            ingredient: {
                tag: 'forge:coal_coke' 
            }
        },
        output: {
            item: 'tfc:powder/coke',
            count: 1
        }
    })
    event.custom({
        type: 'mekanism:crushing',
        input:{
            ingredient: {
                tag: 'forge:storage_blocks/coal_coke' 
            }
        },
        output: {
            item: 'tfc:powder/coke',
            count: 9
        }
    })

    // Fireclay
    event.remove({id: 'tfc:crafting/fire_clay'})
    event.shaped(Item.of('tfc:fire_clay'),
    [
        'ACA',
        'CBC',
        'ACA'
    ],
    {
        A: '#tfc:fireclay/alumina',
        C: '#tfc:fireclay/carbon',
        B: '#forge:clay'
    })

    // Wrought Iron 1:1
    tfc.bloomery(
        'tfc:raw_iron_bloom',
        'kubejs:coal_coke',
        Fluid.of('tfc:metal/cast_iron', 100),
        15000
    )

    // Wrought Iron
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {
            item: 'tfc:raw_iron_bloom'
        },
        loops: 5,
        results: [
            {
                item: 'tfc:metal/ingot/wrought_iron'
            }
        ],
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'tfc:refined_iron_bloom'
                    },
                    {
                        tag: 'tfc:hammers'
                    }
                ],
                keepHeldItem: true,
                results: [
                    {
                        item: 'tfc:raw_iron_bloom'
                    }
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'tfc:refined_iron_bloom'
                    },
                    {
                        tag: 'tfc:hammers'
                    }
                ],
                keepHeldItem: true,
                results: [
                    {
                        item: 'tfc:raw_iron_bloom'
                    }
                ]
            }
        ],
        transitionalItem: {
            item: 'tfc:refined_iron_bloom'
        }
    })

    // Steel
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {
            item: 'tfc:metal/ingot/pig_iron'
        },
        loops: 5,
        results: [
            {
                item: 'tfc:metal/ingot/steel'
            }
        ],
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'tfc:metal/ingot/high_carbon_steel'
                    },
                    {
                        tag: 'tfc:hammers'
                    }
                ],
                keepHeldItem: true,
                results: [
                    {
                        item: 'tfc:metal/ingot/pig_iron'
                    }
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'tfc:metal/ingot/high_carbon_steel'
                    },
                    {
                        tag: 'tfc:hammers'
                    }
                ],
                keepHeldItem: true,
                results: [
                    {
                        item: 'tfc:metal/ingot/pig_iron'
                    }
                ]
            }
        ],
        transitionalItem: {
            item: 'tfc:metal/ingot/high_carbon_steel'
        }
    })

    // Black Steel
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {
            item: 'tfc:metal/ingot/high_carbon_black_steel'
        },
        loops: 5,
        results: [
            {
                item: 'tfc:metal/ingot/black_steel'
            }
        ],
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'tfc:metal/ingot/high_carbon_black_steel'
                    },
                    {
                        tag: 'tfc:hammers'
                    }
                ],
                keepHeldItem: true,
                results: [
                    {
                        item: 'tfc:metal/ingot/high_carbon_black_steel'
                    }
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'tfc:metal/ingot/high_carbon_black_steel'
                    },
                    {
                        tag: 'tfc:hammers'
                    }
                ],
                keepHeldItem: true,
                results: [
                    {
                        item: 'tfc:metal/ingot/high_carbon_black_steel'
                    }
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'tfc:metal/ingot/high_carbon_black_steel'
                    },
                    {
                        tag: 'tfc:hammers'
                    }
                ],
                keepHeldItem: true,
                results: [
                    {
                        item: 'tfc:metal/ingot/high_carbon_black_steel'
                    }
                ]
            }
        ],
        transitionalItem: {
            item: 'tfc:metal/ingot/high_carbon_black_steel'
        }
    })

    // Blue Steel
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {
            item: 'tfc:metal/ingot/high_carbon_blue_steel'
        },
        loops: 5,
        results: [
            {
                item: 'tfc:metal/ingot/blue_steel'
            }
        ],
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'tfc:metal/ingot/high_carbon_blue_steel'
                    },
                    {
                        tag: 'tfc:hammers'
                    }
                ],
                keepHeldItem: true,
                results: [
                    {
                        item: 'tfc:metal/ingot/high_carbon_blue_steel'
                    }
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'tfc:metal/ingot/high_carbon_blue_steel'
                    },
                    {
                        tag: 'tfc:hammers'
                    }
                ],
                keepHeldItem: true,
                results: [
                    {
                        item: 'tfc:metal/ingot/high_carbon_blue_steel'
                    }
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'tfc:metal/ingot/high_carbon_blue_steel'
                    },
                    {
                        tag: 'tfc:hammers'
                    }
                ],
                keepHeldItem: true,
                results: [
                    {
                        item: 'tfc:metal/ingot/high_carbon_blue_steel'
                    }
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'tfc:metal/ingot/high_carbon_blue_steel'
                    },
                    {
                        tag: 'tfc:hammers'
                    }
                ],
                keepHeldItem: true,
                results: [
                    {
                        item: 'tfc:metal/ingot/high_carbon_blue_steel'
                    }
                ]
            }
        ],
        transitionalItem: {
            item: 'tfc:metal/ingot/high_carbon_blue_steel'
        }
    })

    // Red Steel
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {
            item: 'tfc:metal/ingot/high_carbon_red_steel'
        },
        loops: 5,
        results: [
            {
                item: 'tfc:metal/ingot/red_steel'
            }
        ],
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'tfc:metal/ingot/high_carbon_red_steel'
                    },
                    {
                        tag: 'tfc:hammers'
                    }
                ],
                keepHeldItem: true,
                results: [
                    {
                        item: 'tfc:metal/ingot/high_carbon_red_steel'
                    }
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'tfc:metal/ingot/high_carbon_red_steel'
                    },
                    {
                        tag: 'tfc:hammers'
                    }
                ],
                keepHeldItem: true,
                results: [
                    {
                        item: 'tfc:metal/ingot/high_carbon_red_steel'
                    }
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'tfc:metal/ingot/high_carbon_red_steel'
                    },
                    {
                        tag: 'tfc:hammers'
                    }
                ],
                keepHeldItem: true,
                results: [
                    {
                        item: 'tfc:metal/ingot/high_carbon_red_steel'
                    }
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'tfc:metal/ingot/high_carbon_red_steel'
                    },
                    {
                        tag: 'tfc:hammers'
                    }
                ],
                keepHeldItem: true,
                results: [
                    {
                        item: 'tfc:metal/ingot/high_carbon_red_steel'
                    }
                ]
            }
        ],
        transitionalItem: {
            item: 'tfc:metal/ingot/high_carbon_red_steel'
        }
    })

    // Saltpeter Powder
    create.milling(Item.of('tfc:powder/saltpeter', 4), InputItem.of('tfc:ore/saltpeter'))
    create.crushing(Item.of('tfc:powder/saltpeter', 4), InputItem.of('tfc:ore/saltpeter'))
    event.custom({
        type: 'railcraft:crusher',
        ingredient: {
            item: 'tfc:ore/saltpeter'
        },
        outputs: [
            {
                count: 4,
                probability: 1.0,
                result: {
                    item: 'tfc:powder/saltpeter',
                }
            }
        ]
    })
    event.custom({
        type: 'mekanism:crushing',
        input:{
            ingredient: {
                item: 'tfc:ore/saltpeter' 
            }
        },
        output: {
            item: 'tfc:powder/saltpeter',
            count: 4
        }
    })

    // Windmill Blade
    event.replaceInput(
        {id: 'tfc:crafting/windmill_blade'},
        'tfc:wool_cloth',
        '#tfc:high_quality_cloth'
    )
})