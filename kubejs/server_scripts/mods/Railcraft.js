TFCEvents.data(event => {
    // Crowbars
    event.itemHeat('railcraft:iron_crowbar', 2.857 * 2, 921, 1228)
    event.itemHeat('railcraft:steel_crowbar', 2.857 * 2, 924, 1232)
    event.itemHeat('railcraft:diamond_crowbar', 2.857 * 2, 924, 1232)

    // Spike Mauls
    event.itemHeat('railcraft:iron_spike_maul', 2.857 * 2, 921, 1228)
    event.itemHeat('railcraft:steel_spike_maul', 2.857 * 2, 924, 1232)
    event.itemHeat('railcraft:diamond_spike_maul', 2.857 * 2, 924, 1232)
})

ServerEvents.recipes(event => {

    const tfc = event.recipes.tfc

    // Recipe Removal
    event.remove({id: 'railcraft:coal_coke'})
    event.remove({id: 'railcraft:coal_coke_block_from_coal_coke'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ingots_copper'})
    event.remove({id: 'railcraft:crusher/crushing_tags_raw_materials_copper'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ores_copper'})
    event.remove({id: 'railcraft:crusher/crushing_tags_storage_blocks_raw_lead'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ores_lead'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ingots_lead'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ores_silver'})
    event.remove({id: 'railcraft:crusher/crushing_tags_storage_blocks_raw_silver'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ores_lead'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ores_silver'})
    event.remove({id: 'railcraft:crusher/crushing_tags_raw_materials_silver'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ingots_silver'})
    event.remove({id: 'railcraft:crusher/crushing_tags_storage_blocks_raw_nickel'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ores_iron'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ingots_nickel'})
    event.remove({id: 'railcraft:crusher/crushing_tags_raw_materials_nickel'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ores_nickel'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ingots_steel'})
    event.remove({id: 'railcraft:crusher/crushing_tags_storage_blocks_raw_iron'})
    event.remove({id: 'railcraft:crusher/crushing_tags_raw_materials_iron'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ingots_iron'})
    event.remove({id: 'railcraft:crusher/crushing_tags_storage_blocks_raw_gold'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ores_gold'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ingots_gold'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ingots_bronze'})
    event.remove({id: 'railcraft:crusher/crushing_lapis_lazuli'})
    event.remove({id: 'railcraft:crusher/crushing_tags_gems_quartz'})
    event.remove({id: 'railcraft:crusher/crushing_tags_gems_emerald'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ingots_tin'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ores_saltpeter'})
    event.remove({id: 'railcraft:crusher/crushing_coal_block'})
    event.remove({id: 'railcraft:crusher/crushing_coal'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ores_coal'})
    event.remove({id: 'railcraft:crusher/crushing_charcoal'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ores_sulfur'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ores_lapis'})
    event.remove({id: 'railcraft:crusher/crushing_blaze_rod'})
    event.remove({id: 'railcraft:crusher/crushing_tags_ores_quartz'})
    event.remove({id: 'railcraft:crusher/crushing_tags_gems_diamond'})
    event.remove({id: 'railcraft:crusher/crushing_tags_coal_coke'})
    event.remove({id: 'railcraft:torch_creosote'})
    event.remove({id: 'railcraft:crusher/crushing_brick_slab'})
    event.remove({id: 'railcraft:crusher/crushing_brick_stairs'})
    event.remove({id: 'railcraft:crusher/crushing_coke_oven_bricks'})
    event.remove({id: 'railcraft:crusher/crushing_bricks'})
    event.remove({id: 'railcraft:crusher/crushing_blast_furnace_bricks'})
    event.remove({id: 'railcraft:crusher/crushing_nether_brick_stairs'})
    event.remove({id: 'railcraft:crusher/crushing_nether_brick_fence'})
    event.remove({id: 'railcraft:lead_ingot_from_lead_nugget'})
    event.remove({id: 'railcraft:lead_ingot'})
    event.remove({id: 'railcraft:nickel_ingot_from_nickel_nugget'})
    event.remove({id: 'railcraft:nickel_ingot'})
    event.remove({id: 'railcraft:silver_ingot'})
    event.remove({id: 'railcraft:silver_ingot_from_silver_nugget'})
    event.remove({id: 'railcraft:tin_ingot'})
    event.remove({id: 'railcraft:tin_ingot_from_tin_nugget'})
    event.remove({id: 'railcraft:zinc_ingot_from_zinc_nugget'})
    event.remove({id: 'railcraft:zinc_ingot'})
    event.remove({id: 'railcraft:steel_ingot'})
    event.remove({id: 'railcraft:blast_furnace/blasting_iron_door'})
    event.remove({id: 'railcraft:blast_furnace/blasting_iron_leggings'})
    event.remove({id: 'railcraft:blast_furnace/blasting_iron_horse_armor'})
    event.remove({id: 'railcraft:blast_furnace/blasting_steel_hoe'})
    event.remove({id: 'railcraft:blast_furnace/blasting_steel_pickaxe'})
    event.remove({id: 'railcraft:blast_furnace/blasting_iron_hoe'})
    event.remove({id: 'railcraft:blast_furnace/blasting_iron_trapdoor'})
    event.remove({id: 'railcraft:blast_furnace/blasting_iron_pickaxe'})
    event.remove({id: 'railcraft:blast_furnace/blasting_steel_sword'})
    event.remove({id: 'railcraft:blast_furnace/blasting_steel_axe'})
    event.remove({id: 'railcraft:blast_furnace/blasting_steel_shears'})
    event.remove({id: 'railcraft:blast_furnace/blasting_iron_boots'})
    event.remove({id: 'railcraft:blast_furnace/blasting_iron_chestplate'})
    event.remove({id: 'railcraft:blast_furnace/blasting_iron_axe'})
    event.remove({id: 'railcraft:blast_furnace/blasting_bucket'})
    event.remove({id: 'railcraft:blast_furnace/blasting_steel_boots'})
    event.remove({id: 'railcraft:blast_furnace/blasting_shears'})
    event.remove({id: 'railcraft:blast_furnace/blasting_steel_chestplate'})
    event.remove({id: 'railcraft:blast_furnace/blasting_iron_helmet'})
    event.remove({id: 'railcraft:blast_furnace/blasting_steel_helmet'})
    event.remove({id: 'railcraft:blast_furnace/blasting_iron_sword'})
    event.remove({id: 'railcraft:blast_furnace/blasting_iron_shovel'})
    event.remove({id: 'railcraft:blast_furnace/blasting_iron_crowbar'})
    event.remove({id: 'railcraft:blast_furnace/blasting_iron_ingot'})
    event.remove({id: 'railcraft:blast_furnace/blasting_steel_leggings'})
    event.remove({id: 'railcraft:steel_ingot_from_steel_nugget'})
    event.remove({id: 'railcraft:brass_ingot_crafted_with_ingots'})
    event.remove({id: 'railcraft:brass_ingot'})
    event.remove({id: 'railcraft:brass_ingot_from_brass_nugget'})
    event.remove({id: 'railcraft:bronze_ingot'})
    event.remove({id: 'railcraft:bronze_ingot_crafted_with_ingots'})
    event.remove({id: 'railcraft:bronze_ingot_from_bronze_nugget'})
    event.remove({id: 'railcraft:invar_ingot'})
    event.remove({id: 'railcraft:invar_ingot_from_invar_nugget'})
    event.remove({id: 'railcraft:invar_ingot_crafted_with_ingots'})
    event.remove({id: 'railcraft:crusher/crushing_netherite_ingot'})
    event.remove({id: 'railcraft:crusher/crushing_gravel'})
    event.remove({id: 'railcraft:lead_nugget'})
    event.remove({id: 'railcraft:nickel_nugget'})
    event.remove({id: 'railcraft:silver_nugget'})
    event.remove({id: 'railcraft:tin_nugget'})
    event.remove({id: 'railcraft:zinc_nugget'})
    event.remove({id: 'railcraft:steel_nugget'})
    event.remove({id: 'railcraft:brass_nugget'})
    event.remove({id: 'railcraft:bronze_nugget'})
    event.remove({id: 'railcraft:invar_nugget'})
    event.remove({id: 'railcraft:rolling/iron_plate'})
    event.remove({id: 'railcraft:rolling/iron_plate'})
    event.remove({id: 'railcraft:rolling/gold_plate'})
    event.remove({id: 'railcraft:rolling/lead_plate'})
    event.remove({id: 'railcraft:rolling/nickel_plate'})
    event.remove({id: 'railcraft:rolling/silver_plate'})
    event.remove({id: 'railcraft:rolling/tin_plate'})
    event.remove({id: 'railcraft:rolling/zinc_plate'})
    event.remove({id: 'railcraft:rolling/steel_plate'})
    event.remove({id: 'railcraft:rolling/brass_plate'})
    event.remove({id: 'railcraft:rolling/bronze_plate'})
    event.remove({id: 'railcraft:rolling/invar_plate'})
    event.remove({id: 'railcraft:rolling/copper_plate'})
    event.remove({id: 'railcraft:bushing_gear_brass'})
    event.remove({id: 'railcraft:bushing_gear_bronze'})
    event.remove({id: 'railcraft:rolling/bushing_gear_brass'})
    event.remove({id: 'railcraft:rolling/bushing_gear_bronze'})
    event.remove({id: 'railcraft:iron_gear'})
    event.remove({id: 'railcraft:copper_gear'})
    event.remove({id: 'railcraft:gold_gear'})
    event.remove({id: 'railcraft:lead_gear'})
    event.remove({id: 'railcraft:nickel_gear'})
    event.remove({id: 'railcraft:silver_gear'})
    event.remove({id: 'railcraft:tin_gear'})
    event.remove({id: 'railcraft:zinc_gear'})
    event.remove({id: 'railcraft:steel_gear'})
    event.remove({id: 'railcraft:brass_gear'})
    event.remove({id: 'railcraft:bronze_gear'})
    event.remove({id: 'railcraft:invar_gear'})
    event.remove({id: 'railcraft:steel_shovel'})
    event.remove({id: 'railcraft:steel_pickaxe'})
    event.remove({id: 'railcraft:steel_axe'})
    event.remove({id: 'railcraft:steel_hoe'})
    event.remove({id: 'railcraft:steel_shears'})
    event.remove({id: 'railcraft:world_spike_minecart'})
    event.remove({id: 'railcraft:tunnel_bore'})
    event.remove({id: 'railcraft:steel_sword'})
    event.remove({id: 'railcraft:steel_helmet'})
    event.remove({id: 'railcraft:steel_chestplate'})
    event.remove({id: 'railcraft:steel_leggings'})
    event.remove({id: 'railcraft:steel_boots'})
    event.remove({id: 'railcraft:steam_oven'})
    event.remove({id: 'railcraft:manual_rolling_machine'})
    event.remove({id: 'railcraft:blast_furnace_bricks'})
    event.remove({id: 'railcraft:feed_station'})
    event.remove({id: 'railcraft:worldspike_minecart_disassembly'})
    event.remove({id: 'railcraft:world_spike'})
    event.remove({id: 'railcraft:personal_world_spike'})
    event.remove({id: 'railcraft:lead_block_from_lead_ingot'})
    event.remove({id: 'railcraft:nickel_block_from_nickel_ingot'})
    event.remove({id: 'railcraft:silver_block_from_silver_ingot'})
    event.remove({id: 'railcraft:tin_block_from_tin_ingot'})
    event.remove({id: 'railcraft:zinc_block_from_zinc_ingot'})
    event.remove({id: 'railcraft:steel_block_from_steel_ingot'})
    event.remove({id: 'railcraft:steel_block_from_steel_ingot'})
    event.remove({id: 'railcraft:blast_furnace/blasting_steel_block'})
    event.remove({id: 'railcraft:brass_block_from_brass_ingot'})
    event.remove({id: 'railcraft:crusher/crushing_zinc_silver_battery_empty'})
    event.remove({id: 'railcraft:iron_tunnel_bore_head'})
    event.remove({id: 'railcraft:bronze_tunnel_bore_head'})
    event.remove({id: 'railcraft:steel_tunnel_bore_head'})
    event.remove({id: 'railcraft:diamond_tunnel_bore_head'})

    // Coke Oven Bricks
    event.remove({id: 'railcraft:coke_oven_bricks'})
    event.shaped(
        Item.of('railcraft:coke_oven_bricks', 2),
        [
            'BMB',
            'MBM',
            'BMB'
        ],
        {
            B: 'kubejs:refactory_brick',
            M: 'tfc:mortar',
        }
    )

    // Coal Coke
    event.remove({id: 'railcraft:coke_oven/coal_coke'})
    event.custom({
        type: 'railcraft:coking',
        cookingTime: 3600,
        creosoteOutput: 500,
        experience: 0.0,
        ingredient: {
            tag: 'forge:gems/coal'
        },
        result: {
            item: 'kubejs:coal_coke'
        }
    })

    // Block of Coal Coke
    event.remove({id: 'railcraft:coke_oven/coal_coke_block'})
    event.custom({
        type: 'railcraft:coking',
        cookingTime: 32400,
        creosoteOutput: 4500,
        experience: 0.0,
        ingredient: {
            item: 'minecraft:coal_block'
        },
        result: {
            item: 'kubejs:coal_coke_block'
        }
    })

    // Charcoal
    event.remove({id: 'railcraft:coke_oven/charcoal'})
    event.custom({
        type: 'railcraft:coking',
        cookingTime: 1800,
        creosoteOutput: 250,
        experience: 0.0,
        ingredient: {
            tag: 'tfc:pit_kiln_logs'
        },
        result: {
            item: 'minecraft:charcoal'
        }
    })

    // Locking Track Kit
    event.replaceInput(
        {id: 'railcraft:locking_track_kit'},
        'minecraft:stone_pressure_plate',
        '#minecraft:stone_pressure_plates'
    )

    // Detector Track Kit
    event.replaceInput(
        {id: 'railcraft:detector_track_kit'},
        'minecraft:stone_pressure_plate',
        '#minecraft:stone_pressure_plates'
    )

    // Disembarking Track Kit
    event.replaceInput(
        {id: 'railcraft:disembarking_track_kit'},
        'minecraft:stone_pressure_plate',
        '#minecraft:stone_pressure_plates'
    )

    // Launcher Track Kit
    event.replaceInput(
        {id: 'railcraft:launcher_track_kit'},
        '#forge:storage_blocks/steel',
        '#forge:double_ingots/steel'
    )

    // One-Way Track Kit
    event.replaceInput(
        {id: 'railcraft:one_way_track_kit'},
        'minecraft:stone_pressure_plate',
        '#minecraft:stone_pressure_plates'
    )

    // Switch Track Lever
    event.replaceInput(
        {id: 'railcraft:switch_track_lever'},
        'minecraft:iron_ingot',
        '#forge:plates/wrought_iron'
    )

    // Switch Track Motor
    event.replaceInput(
        {id: 'railcraft:switch_track_motor'},
        'minecraft:iron_ingot',
        '#forge:plates/wrought_iron'
    )

    // Analog Signal Controller Box
    event.replaceInput(
        {id: 'railcraft:analog_signal_controller_box'},
        'minecraft:iron_ingot',
        '#forge:plates/wrought_iron'
    )

    // Signal Sequencer Box
    event.replaceInput(
        {id: 'railcraft:signal_sequencer_box'},
        'minecraft:iron_ingot',
        '#forge:plates/wrought_iron'
    )

    // Signal Capacitor Box
    event.replaceInput(
        {id: 'railcraft:signal_capacitor_box'},
        'minecraft:iron_ingot',
        '#forge:plates/wrought_iron'
    )

    // Signal Interlock Box
    event.replaceInput(
        {id: 'railcraft:signal_interlock_box'},
        'minecraft:iron_ingot',
        '#forge:plates/wrought_iron'
    )

    // Signal Block Relay Box
    event.replaceInput(
        {id: 'railcraft:signal_block_relay_box'},
        'minecraft:iron_ingot',
        '#forge:plates/wrought_iron'
    )

    // Signal Receiver Box
    event.replaceInput(
        {id: 'railcraft:signal_receiver_box'},
        'minecraft:iron_ingot',
        '#forge:plates/wrought_iron'
    )

    // Signal Controller Box
    event.replaceInput(
        {id: 'railcraft:signal_controller_box'},
        'minecraft:iron_ingot',
        '#forge:plates/wrought_iron'
    )

    // Token Signal Box
    event.replaceInput(
        {id: 'railcraft:token_signal_box'},
        'minecraft:iron_ingot',
        '#forge:plates/wrought_iron'
    )

    // Block Signal
    event.replaceInput(
        {id: 'railcraft:block_signal'},
        'minecraft:iron_ingot',
        '#forge:plates/wrought_iron'
    )

    // Distant Signal
    event.replaceInput(
        {id: 'railcraft:distant_signal'},
        'minecraft:iron_ingot',
        '#forge:plates/wrought_iron'
    )

    // Token Signal
    event.replaceInput(
        {id: 'railcraft:token_signal'},
        'minecraft:iron_ingot',
        '#forge:plates/wrought_iron'
    )

    // Dual-Head Block Signal
    event.replaceInput(
        {id: 'railcraft:dual_block_signal'},
        'minecraft:iron_ingot',
        '#forge:plates/wrought_iron'
    )

    // Dual-Head Distant Signal
    event.replaceInput(
        {id: 'railcraft:dual_distant_signal'},
        'minecraft:iron_ingot',
        '#forge:plates/wrought_iron'
    )

    // Dual-Head Token Signal
    event.replaceInput(
        {id: 'railcraft:dual_token_signal'},
        'minecraft:iron_ingot',
        '#forge:plates/wrought_iron'
    )

    // Minecart with Energy Cell
    event.replaceInput(
        {id: 'railcraft:energy_minecart'},
        'immersiveengineering:ingot_lead',
        '#forge:plates/lead'
    )

    // Track Layer Cart
    event.replaceInput(
        {id: 'railcraft:track_layer'},
        '#forge:storage_blocks/steel',
        '#forge:double_ingots/steel'
    )

    // Track Relayer Cart
    event.remove({id: 'railcraft:track_relayer'})
    event.shaped(
        Item.of('railcraft:track_relayer'), 
        [
            'DLD',
            'BSB',
            'TCT'
        ],
        {
            D: '#forge:dyes/yellow',
            L: 'minecraft:redstone_lamp',
            B: '#forge:rods/blaze',
            T: '#minecraft:pickaxes',
            C: 'minecraft:minecart'
        }
    )

    // Track Layer Cart
    event.replaceInput(
        {id: 'railcraft:track_remover'},
        '#forge:storage_blocks/steel',
        '#forge:double_ingots/steel'
    )

    // Track Undercutter Cart
    event.remove({id: 'railcraft:track_undercutter'})
    event.shaped(
        Item.of('railcraft:track_undercutter'), 
        [
            'DLD',
            'BSB',
            'TCT'
        ],
        {
            D: '#forge:dyes/yellow',
            L: 'minecraft:redstone_lamp',
            B: '#forge:rods/blaze',
            T: '#minecraft:shovels',
            C: 'minecraft:minecart'
        }
    )

    // Steam Locomotive
    event.remove({id: 'railcraft:steam_locomotive'})
    event.shaped(
        Item.of('railcraft:steam_locomotive'), 
        [
            ' BS',
            'SFF',
            'GCG'
        ],
        {
            B: 'railcraft:low_pressure_steam_boiler_tank',
            S: '#forge:plates/wrought_iron',
            F: 'railcraft:solid_fueled_firebox',
            G: '#forge:gears/wrought_iron',
            C: 'minecraft:minecart'
        }
    )

    // Electric Locomotive
    event.replaceInput(
        {id: 'railcraft:electric_locomotive'},
        'railcraft:charge_motor',
        '#forge:motor_rf'
    )

    // Solid Fueled Firebox
    event.remove({id: 'railcraft:solid_fueled_firebox'})
    event.shaped(
        Item.of('railcraft:solid_fueled_firebox'), 
        [
            'CBC',
            'BFB',
            'CBC'
        ],
        {
            C: '#tfc:fireclay/carbon',
            B: 'kubejs:refactory_brick',
            F: '#tfc:starts_fires_with_durability'
        }
    )

    // Liquid Fueled Firebox
    event.remove({id: 'railcraft:fluid_fueled_firebox'})
    event.shaped(
        Item.of('railcraft:fluid_fueled_firebox'), 
        [
            'PSP',
            'CFC',
            'PSP'
        ],
        {
            P: '#forge:plates/invar',
            S: '#railcraft:strengthened_glass',
            C: 'minecraft:iron_bars',
            F: 'railcraft:solid_fueled_firebox'
        }
    )

    // Steam Turbine Housing
    event.remove({id: 'railcraft:steam_turbine'})
    event.shaped(
        Item.of('railcraft:steam_turbine'), 
        [
            'SCS',
            'PMP',
            'SCS'
        ],
        {
            S: '#forge:double_sheets/steel',
            C: 'buildcraftsilicon:redstone_chipset/iron',
            P: '#forge:ingots/steel',
            M: '#forge:motor_rf'
        }
    )

    // Powered Rolling Machine
    event.remove({id: 'railcraft:powered_rolling_machine'})
    event.shaped(
        Item.of('railcraft:powered_rolling_machine'), 
        [
            'SCS',
            'PDP',
            'SMS'
        ],
        {
            S: '#forge:sheets/wrought_iron',
            C: 'buildcraftsilicon:redstone_chipset/diamond',
            P: 'minecraft:piston',
            D: '#forge:double_ingots/wrought_iron',
            M: '#forge:motor_rf'
        }
    )

    // Crusher
    event.remove({id: 'railcraft:crusher'})
    event.shaped(
        Item.of('railcraft:crusher', 4), 
        [
            'SMS',
            'WCW',
            'SMS'
        ],
        {
            S: '#forge:sheets/wrought_iron',
            M: '#forge:motor_rf',
            W: 'create:crushing_wheel',
            C: 'buildcraftsilicon:redstone_chipset/diamond'
        }
    )

    // Water Tank Siding
    event.remove({id: 'railcraft:water_tank_siding'})
    event.shaped(
        Item.of('railcraft:water_tank_siding', 4), 
        [
            'WWW',
            'CGC',
            'WWW'
        ],
        {
            W: '#minecraft:planks',
            C: '#forge:plates/copper',
            G: '#forge:slimeballs'
        }
    )

    // Charge Meter
    event.replaceInput(
        {id: 'railcraft:charge_meter'},
        'minecraft:stone_button',
        '#minecraft:buttons'
    )

    // Nickel-Zinc Battery
    event.remove({id: 'railcraft:nickel_zinc_battery'})
    event.custom({
        type: 'minecraft:crafting_shaped',
        result: {
            item: 'railcraft:nickel_zinc_battery'
        },
        pattern: [
            'TCT',
            'ASB',
            'ALB'
        ],
        key: {
            T: {
                item: 'railcraft:charge_terminal'
            },
            C: {
                item: 'railcraft:charge_spool_medium'
            },
            A: {
                item: 'railcraft:nickel_electrode'
            },
            S: {
                tag: 'forge:dusts/saltpeter'
            },
            B: {
                item: 'railcraft:zinc_electrode'
            },
            L: {
                type: 'immersiveengineering:fluid',
                amount: 1000,
                tag: 'tfc:any_fresh_water'
            }
        }
    })

    // Nickel-Iron Battery
    event.remove({id: 'railcraft:nickel_iron_battery'})
    event.custom({
        type: 'minecraft:crafting_shaped',
        result: {
            item: 'railcraft:nickel_iron_battery'
        },
        pattern: [
            'TCT',
            'ASB',
            'ALB'
        ],
        key: {
            T: {
                item: 'railcraft:charge_terminal'
            },
            C: {
                item: 'railcraft:charge_spool_medium'
            },
            A: {
                item: 'railcraft:nickel_electrode'
            },
            S: {
                tag: 'forge:dusts/saltpeter'
            },
            B: {
                item: 'railcraft:iron_electrode'
            },
            L: {
                type: 'immersiveengineering:fluid',
                amount: 1000,
                tag: 'tfc:any_fresh_water'
            }
        }
    })

    // Zinc-Carbon Battery
    event.remove({id: 'railcraft:zinc_carbon_battery'})
    event.custom({
        type: 'minecraft:crafting_shaped',
        result: {
            item: 'railcraft:zinc_carbon_battery'
        },
        pattern: [
            'TCT',
            'ASB',
            'ALB'
        ],
        key: {
            T: {
                item: 'railcraft:charge_terminal'
            },
            C: {
                item: 'railcraft:charge_spool_medium'
            },
            A: {
                item: 'railcraft:nickel_electrode'
            },
            S: {
                tag: 'forge:dusts/saltpeter'
            },
            B: {
                item: 'railcraft:carbon_electrode'
            },
            L: {
                type: 'immersiveengineering:fluid',
                amount: 1000,
                tag: 'tfc:any_fresh_water'
            }
        }
    })

    // Zinc-Silver Battery
    event.remove({id: 'railcraft:zinc_silver_battery'})
    event.custom({
        type: 'minecraft:crafting_shaped',
        result: {
            item: 'railcraft:zinc_silver_battery'
        },
        pattern: [
            'TCT',
            'ASB',
            'ALB'
        ],
        key: {
            T: {
                item: 'railcraft:charge_terminal'
            },
            C: {
                item: 'railcraft:charge_spool_medium'
            },
            A: {
                item: 'railcraft:nickel_electrode'
            },
            S: {
                tag: 'forge:dusts/saltpeter'
            },
            B: {
                item: 'railcraft:silver_electrode'
            },
            L: {
                type: 'immersiveengineering:fluid',
                amount: 1000,
                tag: 'tfc:any_fresh_water'
            }
        }
    })

    // Zinc-Carbon Battery Recycling
    event.custom({
        type: 'railcraft:crusher',
        ingredient: {
            item: 'railcraft:zinc_carbon_battery_empty'
        },
        outputs: [
            {
                probability: 1.00,
                result: {
                    item: 'railcraft:charge_terminal'
                },
                count: 2
            },
            {
                probability: 1.00,
                result: {
                    item: 'railcraft:charge_spool_medium'
                }
            },
            {
                probability: 1.00,
                result: {
                    item: 'kubejs:slag'
                },
                count: 4
            },
            {
                probability: 0.50,
                result: {
                    item: 'kubejs:slag'
                },
                count: 2
            }
        ]
    })

    // Zinc-Silver Battery Recycling
    event.custom({
        type: 'railcraft:crusher',
        ingredient: {
            item: 'railcraft:zinc_silver_battery_empty'
        },
        outputs: [
            {
                probability: 1.00,
                result: {
                    item: 'railcraft:charge_terminal'
                },
                count: 2
            },
            {
                probability: 1.00,
                result: {
                    item: 'railcraft:charge_spool_medium'
                }
            },
            {
                probability: 1.00,
                result: {
                    item: 'kubejs:slag'
                },
                count: 4
            },
            {
                probability: 0.50,
                result: {
                    item: 'kubejs:slag'
                },
                count: 2
            }
        ]
    })

    // Electric Locomotive
    event.replaceInput(
        {id: 'railcraft:steel_anvil'},
        '#forge:storage_blocks/steel',
        '#forge:double_ingots/steel'
    )

    // Bronze Block
    event.remove({id: 'railcraft:bronze_block_from_bronze_ingot'})
    event.custom({
        type: 'immersiveengineering:metal_press',
        energy: 14400,
        input: {
            'base_ingredient': {
                tag: 'forge:ingots/bronze',
            },
            count: 9
        },
        mold: 'tfc_ie_addon:mold_block',
        result: {
            item: 'railcraft:bronze_block'
        }
    })

    // Invar Block
    event.remove({id: 'railcraft:invar_block_from_invar_ingot'})
    event.custom({
        type: 'immersiveengineering:metal_press',
        energy: 14400,
        input: {
            'base_ingredient': {
                tag: 'forge:ingots/invar',
            },
            count: 9
        },
        mold: 'tfc_ie_addon:mold_block',
        result: {
            item: 'railcraft:invar_block'
        }
    })

    // Carbon Electrode
    event.remove({id: 'railcraft:rolling/carbon_electrode'})
    event.custom({
        type: 'railcraft:rolling',
        key: {
            A: {
                tag: 'minecraft:coals'
            }
        },
        pattern: [
            'A',
            'A',
            'A'
        ],
        result: {
            item: 'railcraft:carbon_electrode'
        }
    })

    // Item Loader
    event.replaceInput(
        {id: 'railcraft:item_loader'},
        'minecraft:cobblestone',
        '#forge:cobblestone'
    )

    // Advanced Item Loader
    event.replaceInput(
        {id: 'railcraft:advanced_item_loader'},
        'railcraft:steel_shovel',
        '#forge:dusts/redstone'
    )

    // Item Unloader
    event.replaceInput(
        {id: 'railcraft:item_unloader'},
        'minecraft:cobblestone',
        '#forge:cobblestone'
    )

    // Advanced Item Unloader
    event.replaceInput(
        {id: 'railcraft:advanced_item_unloader'},
        'railcraft:steel_shovel',
        '#forge:dusts/redstone'
    )

    // Fluid Loader
    event.replaceInput(
        {id: 'railcraft:fluid_loader'},
        'minecraft:glass',
        '#forge:glass/colorless'
    )

    // Fluid Unloader
    event.replaceInput(
        {id: 'railcraft:fluid_unloader'},
        'minecraft:glass',
        '#forge:glass/colorless'
    )

    // Advanced Cart Detector
    event.remove({id: 'railcraft:advanced_detector'})
    event.shaped(
        Item.of('railcraft:advanced_detector'),
        [
            'BBB',
            'BPB',
            'BBB'
        ],
        {
            B: '#forge:plates/steel',
            P: '#minecraft:stone_pressure_plates',
        }
    )

    // Age Cart Detector
    event.remove({id: 'railcraft:age_detector'})
    event.shaped(
        Item.of('railcraft:age_detector'),
        [
            'BBB',
            'BPB',
            'BBB'
        ],
        {
            B: 'afc:wood/log/black_oak',
            P: '#minecraft:stone_pressure_plates',
        }
    )

    // Animal Cart Detector
    event.remove({id: 'railcraft:animal_detector'})
    event.shaped(
        Item.of('railcraft:animal_detector'),
        [
            'BBB',
            'BPB',
            'BBB'
        ],
        {
            B: 'tfc:wood/log/oak',
            P: '#minecraft:stone_pressure_plates',
        }
    )

    // Any Cart Detector
    event.remove({id: 'railcraft:any_detector'})
    event.shaped(
        Item.of('railcraft:any_detector'),
        [
            'BBB',
            'BPB',
            'BBB'
        ],
        {
            B: '#forge:stone',
            P: '#minecraft:stone_pressure_plates',
        }
    )

    // Empty Cart Detector
    event.remove({id: 'railcraft:empty_detector'})
    event.shaped(
        Item.of('railcraft:empty_detector'),
        [
            'BBB',
            'BPB',
            'BBB'
        ],
        {
            B: '#minecraft:stone_bricks',
            P: '#minecraft:stone_pressure_plates',
        }
    )

    // Item Cart Detector
    event.remove({id: 'railcraft:item_detector'})
    event.shaped(
        Item.of('railcraft:item_detector'),
        [
            'BBB',
            'BPB',
            'BBB'
        ],
        {
            B: 'tfc:wood/stripped_wood/acacia',
            P: '#minecraft:stone_pressure_plates',
        }
    )

    // Locomotive Cart Detector
    event.remove({id: 'railcraft:locomotive_detector'})
    event.shaped(
        Item.of('railcraft:locomotive_detector'),
        [
            'BBB',
            'BPB',
            'BBB'
        ],
        {
            B: 'immersiveengineering:cokebrick',
            P: '#minecraft:stone_pressure_plates',
        }
    )

    // Mob Cart Detector
    event.remove({id: 'railcraft:mob_detector'})
    event.shaped(
        Item.of('railcraft:mob_detector'),
        [
            'BBB',
            'BPB',
            'BBB'
        ],
        {
            B: '#forge:cobblestone/mossy',
            P: '#minecraft:stone_pressure_plates',
        }
    )

    // Mob Cart Detector
    event.remove({id: 'railcraft:player_detector'})
    event.shaped(
        Item.of('railcraft:player_detector'),
        [
            'BBB',
            'BPB',
            'BBB'
        ],
        {
            B: '#minecraft:slabs',
            P: '#minecraft:stone_pressure_plates',
        }
    )

    // Routing Cart Detector
    event.replaceInput(
        {id: 'railcraft:routing_detector'},
        'minecraft:stone_pressure_plate',
        '#minecraft:stone_pressure_plates'
    )

    // Sheep Cart Detector
    event.replaceInput(
        {id: 'railcraft:sheep_detector'},
        'minecraft:stone_pressure_plate',
        '#minecraft:stone_pressure_plates'
    )

    // Tank Cart Detector
    event.replaceInput(
        {id: 'railcraft:tank_detector'},
        'minecraft:stone_pressure_plate',
        '#minecraft:stone_pressure_plates'
    )

    // Train Cart Detector
    event.replaceInput(
        {id: 'railcraft:train_detector'},
        'minecraft:stone_pressure_plate',
        '#minecraft:stone_pressure_plates'
    )

    // Villager Cart Detector
    event.replaceInput(
        {id: 'railcraft:villager_detector'},
        'minecraft:stone_pressure_plate',
        '#minecraft:stone_pressure_plates'
    )

    // Iron Spike Maul
    event.remove({id: 'railcraft:iron_spike_maul'})
    event.shaped(
        Item.of('railcraft:iron_spike_maul'),
        [
            'H',
            'S'
        ],
        {
            H: 'kubejs:metal/spike_maul_head/iron',
            S: '#forge:rods/wooden',
        }
    )
    tfc.heating('railcraft:iron_spike_maul', 1535)
        .resultFluid(Fluid.of('tfc:metal/cast_iron', 200))
        .useDurability(true)

    // Steel Spike Maul
    event.remove({id: 'railcraft:steel_spike_maul'})
    event.shaped(
        Item.of('railcraft:steel_spike_maul'),
        [
            'H',
            'S'
        ],
        {
            H: 'kubejs:metal/spike_maul_head/steel',
            S: '#forge:rods/wooden',
        }
    )
    tfc.heating('railcraft:steel_spike_maul', 1540)
        .resultFluid(Fluid.of('tfc:metal/steel', 200))
        .useDurability(true)

    // Diamond Spike Maul
    event.remove({id: 'railcraft:diamond_spike_maul'})
    event.shaped(
        Item.of('railcraft:diamond_spike_maul'),
        [
            'H',
            'S'
        ],
        {
            H: 'kubejs:metal/spike_maul_head/diamond',
            S: '#forge:rods/wooden',
        }
    )
    tfc.heating('railcraft:diamond_spike_maul', 1540)
        .resultFluid(Fluid.of('tfc:metal/unknown', 200))
        .useDurability(true)

    // Iron Crowbar
    event.remove({id: 'railcraft:iron_crowbar'})
    event.shaped(
        Item.of('railcraft:iron_crowbar'),
        [
            'H',
            'S'
        ],
        {
            H: 'kubejs:metal/unfinished_crowbar/iron',
            S: '#forge:dyes/red',
        }
    )
    tfc.heating('railcraft:iron_crowbar', 1535)
        .resultFluid(Fluid.of('tfc:metal/cast_iron', 200))
        .useDurability(true)

    // Steel Crowbar
    event.remove({id: 'railcraft:steel_crowbar'})
    event.shaped(
        Item.of('railcraft:steel_crowbar'),
        [
            'H',
            'S'
        ],
        {
            H: 'kubejs:metal/unfinished_crowbar/steel',
            S: '#forge:dyes/red',
        }
    )
    tfc.heating('railcraft:steel_crowbar', 1540)
        .resultFluid(Fluid.of('tfc:metal/steel', 200))
        .useDurability(true)

    // Diamond Crowbar
    event.remove({id: 'railcraft:diamond_crowbar'})
    event.shaped(
        Item.of('railcraft:diamond_crowbar'),
        [
            'H',
            'S'
        ],
        {
            H: 'kubejs:metal/unfinished_crowbar/diamond',
            S: '#forge:dyes/blue',
        }
    )
    tfc.heating('railcraft:diamond_crowbar', 1540)
        .resultFluid(Fluid.of('tfc:metal/unknown', 200))
        .useDurability(true)
})