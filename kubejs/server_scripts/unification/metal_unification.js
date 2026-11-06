TFCEvents.data(event => {

    for (const metal in global.metals) {
        let m = global.metals[metal]

        if (m.is_custom) {
            event.metal(
                m.fluid,
                m.melt,
                m.capacity,
                m.ingot,
                m.double_ingot,
                m.sheet,
                m.tier,
                `kubejs:${metal}`
            )
        }

        if (m.ingot != null && m.ingot.startsWith('kubejs:')) {
            event.itemHeat(m.ingot, m.capacity, m.work, m.weld)
        }

        if (m.double_ingot != null && m.double_ingot.startsWith('kubejs:')) {
            event.itemHeat(m.double_ingot, m.capacity * 2, m.work, m.weld)
        }

        if (m.sheet != null && m.sheet.startsWith('kubejs:')) {
            event.itemHeat(m.sheet, m.capacity * 2, m.work, m.weld)
        }

        if (m.double_sheet != null && m.double_sheet.startsWith('kubejs:')) {
            event.itemHeat(m.double_sheet, m.capacity * 4, m.work, m.weld)
            event.itemSize(m.double_sheet, 'large', 'heavy')
        }
            
        // Plate
        if (m.plate != null) {
            event.itemHeat(m.plate, m.capacity, m.work, m.weld)
            event.itemSize(m.plate, 'large', 'medium')
        }

        // Gear
        if (m.gear != null && m.gear_half != null) {
            event.itemHeat(m.gear, m.capacity, m.work, m.weld)
            event.itemHeat(m.gear_half, m.capacity, m.work, m.weld)
            event.itemSize(m.gear, 'large', 'heavy')
            event.itemSize(m.gear_half, 'large', 'medium')
        }

        // Nugget
        if (m.nugget != null && m.nugget.startsWith('kubejs:')) {
            event.itemHeat(m.nugget, m.capacity, m.work, m.weld)
            event.itemSize(m.nugget, 'small', 'light')
        }

        // Dust
        if (m.dust != null && m.dust.startsWith('kubejs:')) {
            event.itemHeat(m.dust, m.capacity, m.work, m.weld)
            event.itemSize(m.dust, 'normal', 'medium')
        }

        if (m.aiot != null) {
            event.itemHeat(m.aiot, m.capacity * 6, m.work, m.weld)
        }

        if (m.pickaxe != null) {
            event.itemHeat(m.pickaxe, m.capacity, m.work, m.weld)
        }

        if (m.axe != null) {
            event.itemHeat(m.axe, m.capacity, m.work, m.weld)
        }

        if (m.shovel != null) {
            event.itemHeat(m.shovel, m.capacity, m.work, m.weld)
        }

        if (m.hoe != null) {
            event.itemHeat(m.hoe, m.capacity, m.work, m.weld)
        }

        if (m.knife != null) {
            event.itemHeat(m.knife, m.capacity, m.work, m.weld)
        }

        if (m.sword != null) {
            event.itemHeat(m.sword, m.capacity * 2, m.work, m.weld)
        }

        if (m.helmet != null && m.chestplate != null && m.greaves != null && m.boots != null) {
            event.itemHeat(m.helmet, m.capacity * 6, m.work, m.weld)
            event.itemHeat(m.chestplate, m.capacity * 8, m.work, m.weld)
            event.itemHeat(m.greaves, m.capacity * 6, m.work, m.weld)
            event.itemHeat(m.boots, m.capacity * 4, m.work, m.weld)
        }

        if (m.pickaxe_head != null) {
            event.itemHeat(m.pickaxe_head, m.capacity, m.work, m.weld)
        }

        if (m.axe_head != null) {
            event.itemHeat(m.axe_head, m.capacity, m.work, m.weld)
        }

        if (m.shovel_head != null) {
            event.itemHeat(m.shovel_head, m.capacity, m.work, m.weld)
        }

        if (m.hoe_head != null) {
            event.itemHeat(m.hoe_head, m.capacity, m.work, m.weld)
        }

        if (m.knife_blade != null) {
            event.itemHeat(m.knife_blade, m.capacity, m.work, m.weld)
        }

        if (m.sword_blade != null) {
            event.itemHeat(m.sword_blade, m.capacity * 2, m.work, m.weld)
        }

        if (m.unfinished_helmet != null && m.unfinished_chestplate != null && m.unfinished_greaves != null && m.unfinished_boots != null) {
            event.itemHeat(m.unfinished_helmet, m.capacity * 4, m.work, m.weld)
            event.itemHeat(m.unfinished_chestplate, m.capacity * 4, m.work, m.weld)
            event.itemHeat(m.unfinished_greaves, m.capacity * 4, m.work, m.weld)
            event.itemHeat(m.unfinished_boots, m.capacity * 2, m.work, m.weld)
        }
    }
})

ServerEvents.tags('item', event => {
    // Fix cast iron tag
    event.remove('forge:ingots/cast_iron', 'minecraft:iron_ingot')
    event.add('forge:ingots/wrought_iron', 'minecraft:iron_ingot')
    
    
    for (const metal in global.metals) {
        let m = global.metals[metal]

        
        if (m.ingot != null) {
            // If the item is NOT in #forge:ingots/<metal>, add it
            if (!Ingredient.of(`#forge:ingots/${metal}`).test(m.ingot)) {
                event.add(`forge:ingots/${metal}`, m.ingot)
            }

            // If the item is NOT in #forge:ingots, add it
            if (!Ingredient.of(`#forge:ingots`).test(m.ingot)) {
                event.add(`forge:ingots`, m.ingot)
            }

            // If the item is NOT in #tfc:pileable_ingots, add it
            if (!Ingredient.of(`#tfc:pileable_ingots`).test(m.ingot)) {
                event.add(`tfc:pileable_ingots`, m.ingot)
            }

            // If the item is NOT in #tfc:metal_item/${metal}, add it
            if (!Ingredient.of(`#tfc:metal_item/${metal}`).test(m.ingot)) {
                event.add(`tfc:metal_item/${metal}`, m.ingot)
            }
        }

        if (m.nugget != null) {
            // If the item is NOT in #forge:nuggets/<metal>, add it
            if (!Ingredient.of(`#forge:nuggets/${metal}`).test(m.nugget)) {
                event.add(`forge:nuggets/${metal}`, m.nugget)
            }

            // If the item is NOT in #forge:nuggets, add it
            if (!Ingredient.of(`#forge:nuggets`).test(m.nugget)) {
                event.add(`forge:nuggets`, m.nugget)
            }

            // If the item is NOT in #tfc:metal_item/${metal}, add it
            if (!Ingredient.of(`#tfc:metal_item/${metal}`).test(m.nugget)) {
                event.add(`tfc:metal_item/${metal}`, m.nugget)
            }
        }

        if (m.dust != null) {
            // If the item is NOT in #forge:dusts/<metal>, add it
            if (!Ingredient.of(`#forge:dusts/${metal}`).test(m.dust)) {
                event.add(`forge:dusts/${metal}`, m.dust)
            }

            // If the item is NOT in #forge:dusts, add it
            if (!Ingredient.of(`#forge:dusts`).test(m.dust)) {
                event.add(`forge:dusts`, m.dust)
            }

            // If the item is NOT in #tfc:metal_item/${metal}, add it
            if (!Ingredient.of(`#tfc:metal_item/${metal}`).test(m.dust)) {
                event.add(`tfc:metal_item/${metal}`, m.dust)
            }
        }

        if (m.aiot != null) {
            // If the item is NOT in #tfc:metal_item/${metal}, add it
            if (!Ingredient.of(`#tfc:metal_item/${metal}`).test(m.aiot)) {
                event.add(`tfc:metal_item/${metal}`, m.aiot)
            }
        }

        if (m.pickaxe != null) {
            // If the item is NOT in #tfc:metal_item/${metal}, add it
            if (!Ingredient.of(`#tfc:metal_item/${metal}`).test(m.pickaxe)) {
                event.add(`tfc:metal_item/${metal}`, m.pickaxe)
            }
        }

        if (m.axe != null) {
            // If the item is NOT in #tfc:metal_item/${metal}, add it
            if (!Ingredient.of(`#tfc:metal_item/${metal}`).test(m.axe)) {
                event.add(`tfc:metal_item/${metal}`, m.axe)
            }
        }

        if (m.shovel != null) {
            // If the item is NOT in #tfc:metal_item/${metal}, add it
            if (!Ingredient.of(`#tfc:metal_item/${metal}`).test(m.shovel)) {
                event.add(`tfc:metal_item/${metal}`, m.shovel)
            }
        }

        if (m.hoe != null) {
            // If the item is NOT in #tfc:metal_item/${metal}, add it
            if (!Ingredient.of(`#tfc:metal_item/${metal}`).test(m.hoe)) {
                event.add(`tfc:metal_item/${metal}`, m.hoe)
            }
        }

        if (m.sword != null) {
            // If the item is NOT in #tfc:metal_item/${metal}, add it
            if (!Ingredient.of(`#tfc:metal_item/${metal}`).test(m.sword)) {
                event.add(`tfc:metal_item/${metal}`, m.sword)
            }
        }

        if (m.shears != null) {
            // If the item is NOT in #tfc:metal_item/${metal}, add it
            if (!Ingredient.of(`#tfc:metal_item/${metal}`).test(m.shears)) {
                event.add(`tfc:metal_item/${metal}`, m.shears)
            }
        }

        if (m.helmet != null) {
            // If the item is NOT in #tfc:metal_item/${metal}, add it
            if (!Ingredient.of(`#tfc:metal_item/${metal}`).test(m.helmet)) {
                event.add(`tfc:metal_item/${metal}`, m.helmet)
            }
        }

        if (m.chestplate != null) {
            // If the item is NOT in #tfc:metal_item/${metal}, add it
            if (!Ingredient.of(`#tfc:metal_item/${metal}`).test(m.chestplate)) {
                event.add(`tfc:metal_item/${metal}`, m.chestplate)
            }
        }

        if (m.greaves != null) {
            // If the item is NOT in #tfc:metal_item/${metal}, add it
            if (!Ingredient.of(`#tfc:metal_item/${metal}`).test(m.greaves)) {
                event.add(`tfc:metal_item/${metal}`, m.greaves)
            }
        }

        if (m.boots != null) {
            // If the item is NOT in #tfc:metal_item/${metal}, add it
            if (!Ingredient.of(`#tfc:metal_item/${metal}`).test(m.boots)) {
                event.add(`tfc:metal_item/${metal}`, m.boots)
            }
        }
    }
})

ServerEvents.recipes(event => {
    const tfc = event.recipes.tfc
    const create = event.recipes.create

    for (const metal in global.metals) {
        let m = global.metals[metal]

        // New Metals
        if (m.is_custom) {
            if (m.ingot != null) {
                tfc.casting(
                    m.ingot,
                    'tfc:ceramic/ingot_mold',
                    TFC.fluidStackIngredient(m.fluid, 100),
                    0.1
                )

                tfc.casting(
                    m.ingot,
                    'tfc:ceramic/fire_ingot_mold',
                    TFC.fluidStackIngredient(m.fluid, 100),
                    0.01
                )

                tfc.heating(m.ingot, m.melt)
                    .resultFluid(Fluid.of(m.fluid, 100))
            }

            if (m.double_ingot != null && m.ingot != null) {
                tfc.welding(
                    TFC.itemStackProvider.of(m.double_ingot).copyHeat(),
                    Ingredient.of(m.ingot),
                    Ingredient.of(m.ingot),
                    m.tier
                )

                tfc.heating(m.double_ingot , m.melt)
                    .resultFluid(Fluid.of(m.fluid, 200))
            }

            if (m.double_sheet != null && m.sheet != null) {
               tfc.welding(
                    TFC.itemStackProvider.of(m.double_sheet).copyHeat(),
                    Ingredient.of(m.sheet),
                    Ingredient.of(m.sheet),
                    m.tier
                )

                tfc.heating(m.double_sheet, m.melt)
                    .resultFluid(Fluid.of(m.fluid, 400))
            }

            if (m.aiot != null) {
                tfc.heating(m.aiot, m.melt)
                    .resultFluid(Fluid.of(m.fluid, 600))
                    .useDurability(true)
            }
            
            if (m.pickaxe != null && m.pickaxe_head != null && m.tool_rod != null) {
                event.remove({output: m.pickaxe})

                event.shaped(
                    Item.of(m.pickaxe),
                    [
                        'H',
                        'S'
                    ],
                    {
                        H: m.pickaxe_head,
                        S: m.tool_rod,
                    }
                )

                tfc.heating(m.pickaxe, m.melt)
                    .resultFluid(Fluid.of(m.fluid, 100))
                    .useDurability(true)
            }

            if (m.axe != null && m.axe_head != null && m.tool_rod != null) {
                event.remove({output: m.axe})

                event.shaped(
                    Item.of(m.axe),
                    [
                        'H',
                        'S'
                    ],
                    {
                        H: m.axe_head,
                        S: m.tool_rod,
                    }
                )

                tfc.heating(m.axe, m.melt)
                    .resultFluid(Fluid.of(m.fluid, 100))
                    .useDurability(true)
            }

            if (m.shovel != null && m.shovel_head != null && m.tool_rod != null) {
                event.remove({output: m.shovel})

                event.shaped(
                    Item.of(m.shovel),
                    [
                        'H',
                        'S'
                    ],
                    {
                        H: m.shovel_head,
                        S: m.tool_rod,
                    }
                )
                tfc.heating(m.shovel, m.melt)
                    .resultFluid(Fluid.of(m.fluid, 100))
                    .useDurability(true)
            }

            if (m.hoe != null && m.hoe_head != null && m.tool_rod != null) {
                event.remove({output: m.hoe})

                event.shaped(
                    Item.of(m.hoe),
                    [
                        'H',
                        'S'
                    ],
                    {
                        H: m.hoe_head,
                        S: m.tool_rod,
                    }
                )

                tfc.heating(m.hoe, m.melt)
                    .resultFluid(Fluid.of(m.fluid, 100))
                    .useDurability(true)
            }

            if (m.sword != null && m.sword_blade != null && m.tool_rod != null) {
                event.remove({output: m.sword})

                event.shaped(
                    Item.of(m.sword),
                    [
                        'H',
                        'S'
                    ],
                    {
                        H: m.sword_blade,
                        S: m.tool_rod,
                    }
                )

                tfc.heating(m.sword, m.melt)
                    .resultFluid(Fluid.of(m.fluid, 200))
                    .useDurability(true)
            }

            if (m.shears != null && m.knife_blade != null) {
                event.remove({output: m.shears})

                tfc.welding(
                    TFC.itemStackProvider.of(m.shears).copyHeat(),
                    Ingredient.of(m.knife_blade),
                    Ingredient.of(m.knife_blade),
                    m.tier
                )

                tfc.heating(m.shears, m.melt)
                    .resultFluid(Fluid.of(m.fluid, 100))
                    .useDurability(true)
            }

            if (m.helmet != null && m.unfinished_helmet != null && m.sheet != null) {
                event.remove({output: m.helmet})

                tfc.welding(
                    TFC.itemStackProvider.of(m.helmet).copyHeat(),
                    Ingredient.of(m.unfinished_helmet),
                    Ingredient.of(m.sheet),
                    m.tier
                )

                tfc.heating(m.helmet, m.melt)
                    .resultFluid(Fluid.of(m.fluid, 600))
                    .useDurability(true)
            }

            if (m.chestplate != null && m.unfinished_chestplate != null && m.double_sheet != null) {
                event.remove({output: m.chestplate})

                tfc.welding(
                    TFC.itemStackProvider.of(m.chestplate).copyHeat(),
                    Ingredient.of(m.unfinished_chestplate),
                    Ingredient.of(m.double_sheet),
                    m.tier
                )

                tfc.heating(m.chestplate, m.melt)
                    .resultFluid(Fluid.of(m.fluid, 800))
                    .useDurability(true)
            }

            if (m.greaves != null && m.unfinished_greaves != null && m.sheet != null) {
                event.remove({output: m.greaves})
                tfc.welding(
                    TFC.itemStackProvider.of(m.greaves).copyHeat(),
                    Ingredient.of(m.unfinished_greaves),
                    Ingredient.of(m.sheet),
                    m.tier
                )

                tfc.heating(m.greaves, m.melt)
                    .resultFluid(Fluid.of(m.fluid, 600))
                    .useDurability(true)
            }

            if (m.boots != null && m.unfinished_boots != null && m.sheet != null) {
                event.remove({output: m.boots})

                tfc.welding(
                    TFC.itemStackProvider.of(m.boots).copyHeat(),
                    Ingredient.of(m.unfinished_boots),
                    Ingredient.of(m.sheet),
                    m.tier
                )

                tfc.heating(m.boots, m.melt)
                    .resultFluid(Fluid.of(m.fluid, 400))
                    .useDurability(true)
            }

            if (m.pickaxe_head != null && m.ingot != null) {
                tfc.anvil(
                    TFC.itemStackProvider.of(m.pickaxe_head).copyHeat(),
                    m.ingot,
                    [
                        'punch_last',
                        'bend_not_last',
                        'draw_not_last'
                    ]
                ).tier(m.tier)

                tfc.heating(m.pickaxe_head, m.melt)
                    .resultFluid(Fluid.of(m.fluid, 100))
            }

            if (m.axe_head != null && m.ingot != null) {
                tfc.anvil(
                    TFC.itemStackProvider.of(m.axe_head).copyHeat(),
                    m.ingot,
                    [
                        'punch_last',
                        'hit_second_last',
                        'upset_third_last'
                    ]
                ).tier(m.tier)

                tfc.heating(m.axe_head, m.melt)
                    .resultFluid(Fluid.of(m.fluid, 100))
            }

            if (m.shovel_head != null && m.ingot != null) {
               tfc.anvil(
                    TFC.itemStackProvider.of(m.shovel_head).copyHeat(),
                    m.ingot,
                    [
                        'punch_last',
                        'hit_not_last'
                    ]
                ).tier(m.tier)

                tfc.heating(m.shovel_head, m.melt)
                    .resultFluid(Fluid.of(m.fluid, 100))
            }

            if (m.hoe_head != null && m.ingot != null) {
                tfc.anvil(
                    TFC.itemStackProvider.of(m.hoe_head).copyHeat(),
                    m.ingot,
                    [
                        'punch_last',
                        'hit_not_last',
                        'bend_not_last'
                    ]
                ).tier(m.tier)

                tfc.heating(m.hoe_head, m.melt)
                    .resultFluid(Fluid.of(m.fluid, 100))
            }

            if (m.sword_blade != null && m.double_ingot != null) {
                tfc.anvil(
                    TFC.itemStackProvider.of(m.sword_blade).copyHeat(),
                    m.double_ingot,
                    [
                        'hit_last',
                        'bend_second_last',
                        'bend_third_last'
                    ]
                ).tier(m.tier)

                tfc.heating(m.sword_blade, m.melt)
                    .resultFluid(Fluid.of(m.fluid, 200))
            }

            if (m.knife_blade != null && m.ingot != null) {
                tfc.anvil(
                    TFC.itemStackProvider.of(m.knife_blade).copyHeat(),
                    m.ingot,
                    [
                        'hit_last',
                        'draw_second_last',
                        'draw_third_last'
                    ]
                ).tier(m.tier)

                tfc.heating(m.knife_blade, m.melt)
                    .resultFluid(Fluid.of(m.fluid, 100))
            }

            if (m.unfinished_helmet != null && m.double_sheet != null) {
                tfc.anvil(
                    TFC.itemStackProvider.of(m.unfinished_helmet).copyHeat(),
                    m.double_sheet,
                    [
                        'hit_last',
                        'bend_second_last',
                        'bend_third_last'
                    ]
                ).tier(m.tier)

                tfc.heating(m.unfinished_helmet, m.melt)
                    .resultFluid(Fluid.of(m.fluid, 400))
            }

            if (m.unfinished_chestplate != null && m.double_sheet != null) {
                tfc.anvil(
                    TFC.itemStackProvider.of(m.unfinished_chestplate).copyHeat(),
                    m.double_sheet,
                    [
                        'bend_any',
                        'draw_any',
                        'hit_any'
                    ]
                ).tier(m.tier)

                tfc.heating(m.unfinished_chestplate, m.melt)
                    .resultFluid(Fluid.of(m.fluid, 400))
            }

            if (m.unfinished_greaves != null && m.double_sheet != null) {
                tfc.anvil(
                    TFC.itemStackProvider.of(m.unfinished_greaves).copyHeat(),
                    m.double_sheet,
                    [
                        'hit_last',
                        'hit_second_last',
                        'upset_third_last'
                    ]
                ).tier(m.tier)

                tfc.heating(m.unfinished_greaves, m.melt)
                    .resultFluid(Fluid.of(m.fluid, 400))
            }

            if (m.unfinished_boots != null && m.sheet != null) {
                tfc.anvil(
                    TFC.itemStackProvider.of(m.unfinished_boots).copyHeat(),
                    m.sheet,
                    [
                        'bend_last',
                        'bend_second_last',
                        'shrink_third_last'
                    ]
                ).tier(m.tier)

                tfc.heating(m.unfinished_boots, m.melt)
                    .resultFluid(Fluid.of(m.fluid, 200))
            }
        }
    }

    for (const metal in global.metals) {
        let m = global.metals[metal]

        // Sheets
        if (m.sheet != null && m.double_ingot != null && m.fluid != null) {
            event.remove({output: m.sheet})
            
            tfc.anvil(
                TFC.itemStackProvider.of(m.sheet).copyHeat(),
                m.double_ingot,
                [
                    'hit_third_last',
                    'hit_second_last',
                    'hit_last'
                ]
            ).tier(m.tier)

            event.custom({
                type: 'railcraft:rolling',
                key: {
                    A: {
                        item: m.double_ingot
                    }
                },
                pattern: [
                    "AA"
                ],
                result: {
                    count: 2,
                    item: m.sheet
                }
            })

            event.custom({
                type: 'immersiveengineering:metal_press',
                energy: 1600,
                input: {
                    'base_ingredient': {
                        item: m.double_ingot,
                    }
                },
                mold: 'tfc_ie_addon:mold_sheet',
                result: {
                    item: m.sheet
                }
            })

            event.custom({
                type: 'rosia:rolling_machine',
                ingredients:[
                    {
                        item: m.double_ingot
                    }
                ],
                output: {
                    item: m.sheet
                }
            })
            
            if (m.sheet.startsWith('kubejs:')) {
                tfc.heating(m.sheet, m.melt)
                    .resultFluid(Fluid.of(m.fluid, 200))
            }
        }
        
        // Plates
        if (m.plate != null && m.ingot != null && m.fluid != null) {
            tfc.anvil(
                TFC.itemStackProvider.of(m.plate).copyHeat(),
                m.ingot,
                [
                    'hit_third_last',
                    'hit_second_last',
                    'hit_last'
                ]).tier(m.tier)

            create.pressing(m.plate, m.ingot)

            event.custom({
                type: 'railcraft:rolling',
                key: {
                    A: {
                        item: m.ingot
                    }
                },
                pattern: [
                    "AA"
                ],
                result: {
                    count: 2,
                    item: m.plate
                }
            })

            event.custom({
                type: "immersiveengineering:metal_press",
                energy: 1600,
                input: {
                    base_ingredient: {
                        item: m.ingot,
                    }
                },
                mold: "immersiveengineering:mold_plate",
                result: {
                    item: m.plate
                }
            })

            event.custom({
                type: 'rosia:rolling_machine',
                ingredients:[
                    {
                        item: m.ingot
                    }
                ],
                output: {
                    item: m.plate
                }
            })

            tfc.heating(m.plate, m.melt)
                .resultFluid(Fluid.of(m.fluid, 100))
        }

        // Gears
        if (m.gear != null && m.gear_half != null && m.ingot != null && m.double_ingot != null && m.fluid != null) {
            event.remove({output: m.gear})

            tfc.anvil(
                TFC.itemStackProvider.of(m.gear_half).copyHeat(),
                m.double_ingot,
                [
                    'upset_any',
                    'draw_any',
                    'bend_not_last'
                ]).tier(m.tier)

            tfc.welding(
                TFC.itemStackProvider.of(m.gear).copyHeat(),
                Ingredient.of(m.gear_half),
                Ingredient.of(m.gear_half),
                m.tier
            )

            event.custom({
                type: "immersiveengineering:metal_press",
                energy: 6400,
                input: {
                    'base_ingredient': {
                        item: m.ingot,
                    },
                    count: 4
                },
                mold: "immersiveengineering:mold_gear",
                result: {
                    item: m.gear
                }
            })

            tfc.heating(m.gear, m.melt)
                .resultFluid(Fluid.of(m.fluid, 400))
            tfc.heating(m.gear_half, m.melt)
                .resultFluid(Fluid.of(m.fluid, 200))
        }

        // Nuggets
        if (m.nugget != null && m.ingot != null  && m.fluid != null) {
            tfc.heating(m.nugget, m.melt)
                .resultFluid(Fluid.of(m.fluid, 10))

            event.shapeless(
                Item.of(m.nugget, 10),
                [
                    m.ingot,
                    '#tfc:hammers'
                ]
            ).damageIngredient('#tfc:hammers')
        }

        // Dusts
        if (m.dust != null && m.ingot != null  && m.fluid != null) {
            event.custom({
                type: 'railcraft:crusher',
                ingredient: {
                    item: m.ingot
                },
                outputs: [
                    {
                        probability: 1.0,
                        result: {
                            item: m.dust
                        }
                    }
                ]
            })

            event.custom({
                type: "immersiveengineering:crusher",
                energy: 3000,
                input: {
                    item: m.ingot
                },
                result: {
                    item: m.dust
                },
                secondaries: []
            })

            event.custom({
                type: 'mekanism:crushing',
                input: {
                    ingredient: {
                        item: m.ingot
                    }
                },
                output: {
                    item: m.dust
                }
            })

            tfc.heating(m.dust, m.melt)
                .resultFluid(Fluid.of(m.fluid, 100))
        }
    }
})