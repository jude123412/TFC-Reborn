// These need to be run before other recipes
ServerEvents.tags('item', event => {
    
    // Add glue to slimeballs tag
    event.add('forge:slimeballs', 'tfc:glue')

    // Fix TFC Coke tags
    event.add('forge:dusts/coke', 'tfc:powder/coke')
    event.add('forge:dusts/coal_coke', 'tfc:powder/coke')
    event.remove('forge:dusts/coal_coke', 'tfc:powder/graphite')
    event.remove('minecraft:forgedusts/coke', 'tfc:powder/coke')

    // Amethyst Dust
    event.add('forge:dusts/amethyst', 'tfc:powder/amethyst')

    // Diamond Dust
    event.add('forge:dusts/diamond', 'tfc:powder/diamond')

    // Emerald Dust
    event.add('forge:dusts/emerald', 'tfc:powder/emerald')
    
    // Lapis Lazuli Dust
    event.add('forge:dusts/lapis', 'tfc:powder/lapis_lazuli')

    // Opal Dust
    event.add('forge:dusts/opal', 'tfc:powder/opal')

    // Pyrite Dust
    event.add('forge:dusts/pyrite', 'tfc:powder/pyrite')

    // Ruby Dust
    event.add('forge:dusts/ruby', 'tfc:powder/ruby')

    // Sapphire Dust
    event.add('forge:dusts/sapphire', 'tfc:powder/sapphire')

    // Topaz Dust
    event.add('forge:dusts/topaz', 'tfc:powder/topaz')

    // Kaolinite Dust
    event.add('forge:dusts/kaolinite', 'tfc:powder/kaolinite')

    // Bauxite Dust
    event.add('forge:dusts/bauxite', 'tfc_ie_addon:powder/bauxite')

    // Alumina sources
    event.add('tfc:fireclay/alumina', '#forge:dusts/kaolinite')
    event.add('tfc:fireclay/alumina', '#forge:dusts/bauxite')
    event.add('tfc:fireclay/alumina', '#forge:dusts/sapphire')
    event.add('tfc:fireclay/alumina', '#forge:dusts/ruby')
    event.add('tfc:fireclay/alumina', '#forge:dusts/topaz')
    
    // Carbon sources
    event.add('tfc:fireclay/carbon', '#forge:dusts/graphite')
    event.add('tfc:fireclay/carbon', '#forge:dusts/coal_coke')

    // Sawdust
    event.add('forge:sawdust', '#forge:bark_powder')

    // Syvite Dust
    event.add('forge:dusts/sylvite', 'tfc:powder/sylvite')

    // Salt
    event.add('forge:dusts/salt', 'tfc:powder/salt')

    // Berries
    event.add('tfc:foods/berries', 'tfc:food/blackberry')
    event.add('tfc:foods/berries', 'tfc:food/blueberry')
    event.add('tfc:foods/berries', 'tfc:food/bunchberry')
    event.add('tfc:foods/berries', 'tfc:food/cloudberry')
    event.add('tfc:foods/berries', 'tfc:food/cranberry')
    event.add('tfc:foods/berries', 'tfc:food/elderberry')
    event.add('tfc:foods/berries', 'tfc:food/gooseberry')
    event.add('tfc:foods/berries', 'tfc:food/raspberry')
    event.add('tfc:foods/berries', 'tfc:food/snowberry')
    event.add('tfc:foods/berries', 'tfc:food/strawberry')
    event.add('tfc:foods/berries', 'tfc:food/wintergreen_berry')

    // Low Quality Cloth
    event.add('tfc:low_quality_cloth', 'tfc:burlap_cloth')
    event.add('tfc:low_quality_cloth', 'immersiveengineering:hemp_fabric')
    event.add('tfc:low_quality_cloth', 'farmersdelight:canvas')
    
    // Usable on Tool Rack
    event.add('tfc:usable_on_tool_rack', 'immersiveengineering:hammer')
    event.add('tfc:usable_on_tool_rack', 'immersiveengineering:wirecutter')
    event.add('tfc:usable_on_tool_rack', 'immersiveengineering:screwdriver')
    event.add('tfc:usable_on_tool_rack', 'immersiveengineering:voltmeter')
    event.add('tfc:usable_on_tool_rack', 'immersiveengineering:drill')
    event.add('tfc:usable_on_tool_rack', 'immersiveengineering:buzzsaw')
    event.add('tfc:usable_on_tool_rack', 'immersiveengineering:revolver')
    event.add('tfc:usable_on_tool_rack', 'immersiveengineering:chemthrower')
    event.add('tfc:usable_on_tool_rack', 'immersiveengineering:railgun')
    event.add('tfc:usable_on_tool_rack', 'artisanal:metal/flint_and/black_steel')
    event.add('tfc:usable_on_tool_rack', 'artisanal:metal/flint_and/blue_steel')
    event.add('tfc:usable_on_tool_rack', 'artisanal:metal/flint_and/red_steel')
    event.add('tfc:usable_on_tool_rack', 'create:wrench')
    event.add('tfc:usable_on_tool_rack', 'create:potato_cannon')
    event.add('tfc:usable_on_tool_rack', 'create:extendo_grip')
    event.add('tfc:usable_on_tool_rack', 'create:wand_of_symmetry')
    event.add('tfc:usable_on_tool_rack', 'create:handheld_worldshaper')
    event.add('tfc:usable_on_tool_rack', 'framedblocks:framed_hammer')
    event.add('tfc:usable_on_tool_rack', 'framedblocks:framed_wrench')
    event.add('tfc:usable_on_tool_rack', 'framedblocks:framed_key')
    event.add('tfc:usable_on_tool_rack', 'framedblocks:framed_screwdriver')
    event.add('tfc:usable_on_tool_rack', 'artisanal:stone/flint_and/pyrite')
    event.add('tfc:usable_on_tool_rack', 'artisanal:stone/flint_and/cut_pyrite')
    event.add('tfc:usable_on_tool_rack', '#artisanal:magnifying_glasses')
    event.add('tfc:usable_on_tool_rack', '#artisanal:can_openers')
    event.add('tfc:usable_on_tool_rack', 'survivorsbutchercraft:metal/butcher_knife/bismuth_bronze')
    event.add('tfc:usable_on_tool_rack', 'survivorsbutchercraft:metal/skinning_knife/bismuth_bronze')
    event.add('tfc:usable_on_tool_rack', 'survivorsbutchercraft:metal/gut_knife/bismuth_bronze')
    event.add('tfc:usable_on_tool_rack', 'survivorsbutchercraft:metal/butcher_knife/black_bronze')
    event.add('tfc:usable_on_tool_rack', 'survivorsbutchercraft:metal/skinning_knife/black_bronze')
    event.add('tfc:usable_on_tool_rack', 'survivorsbutchercraft:metal/gut_knife/black_bronze')
    event.add('tfc:usable_on_tool_rack', 'survivorsbutchercraft:metal/butcher_knife/bronze')
    event.add('tfc:usable_on_tool_rack', 'survivorsbutchercraft:metal/skinning_knife/bronze')
    event.add('tfc:usable_on_tool_rack', 'survivorsbutchercraft:metal/gut_knife/bronze')
    event.add('tfc:usable_on_tool_rack', 'survivorsbutchercraft:metal/butcher_knife/copper')
    event.add('tfc:usable_on_tool_rack', 'survivorsbutchercraft:metal/skinning_knife/copper')
    event.add('tfc:usable_on_tool_rack', 'survivorsbutchercraft:metal/gut_knife/copper')
    event.add('tfc:usable_on_tool_rack', 'survivorsbutchercraft:metal/butcher_knife/wrought_iron')
    event.add('tfc:usable_on_tool_rack', 'survivorsbutchercraft:metal/skinning_knife/wrought_iron')
    event.add('tfc:usable_on_tool_rack', 'survivorsbutchercraft:metal/gut_knife/wrought_iron')
    event.add('tfc:usable_on_tool_rack', 'survivorsbutchercraft:metal/butcher_knife/steel')
    event.add('tfc:usable_on_tool_rack', 'survivorsbutchercraft:metal/skinning_knife/steel')
    event.add('tfc:usable_on_tool_rack', 'survivorsbutchercraft:metal/gut_knife/steel')
    event.add('tfc:usable_on_tool_rack', 'survivorsbutchercraft:metal/butcher_knife/black_steel')
    event.add('tfc:usable_on_tool_rack', 'survivorsbutchercraft:metal/skinning_knife/black_steel')
    event.add('tfc:usable_on_tool_rack', 'survivorsbutchercraft:metal/gut_knife/black_steel')
    event.add('tfc:usable_on_tool_rack', 'survivorsbutchercraft:metal/butcher_knife/blue_steel')
    event.add('tfc:usable_on_tool_rack', 'survivorsbutchercraft:metal/skinning_knife/blue_steel')
    event.add('tfc:usable_on_tool_rack', 'survivorsbutchercraft:metal/gut_knife/blue_steel')
    event.add('tfc:usable_on_tool_rack', 'survivorsbutchercraft:metal/skinning_knife/red_steel')
    event.add('tfc:usable_on_tool_rack', 'survivorsbutchercraft:metal/gut_knife/red_steel')
    event.add('tfc:usable_on_tool_rack', 'bhc:blade_of_vitality')
    event.add('tfc:usable_on_tool_rack', 'immersivetechnology:formation_tool')
    event.add('tfc:usable_on_tool_rack', 'chiselsandbits:chisel_stone')
    event.add('tfc:usable_on_tool_rack', 'chiselsandbits:chisel_iron')
    event.add('tfc:usable_on_tool_rack', 'chiselsandbits:chisel_gold')
    event.add('tfc:usable_on_tool_rack', 'chiselsandbits:chisel_diamond')
    event.add('tfc:usable_on_tool_rack', 'chiselsandbits:chisel_netherite')
    event.add('tfc:usable_on_tool_rack', 'chiselsandbits:measuring_tape')
    event.add('tfc:usable_on_tool_rack', 'rosia:prospecting_kit')
    event.add('tfc:usable_on_tool_rack', 'createoreexcavation:vein_finder')
    event.add('tfc:usable_on_tool_rack', 'railcraft:iron_spike_maul')
    event.add('tfc:usable_on_tool_rack', 'railcraft:steel_spike_maul')
    event.add('tfc:usable_on_tool_rack', 'railcraft:diamond_spike_maul')
    event.add('tfc:usable_on_tool_rack', 'railcraft:iron_crowbar')
    event.add('tfc:usable_on_tool_rack', 'railcraft:steel_crowbar')
    event.add('tfc:usable_on_tool_rack', 'railcraft:diamond_crowbar')
    event.add('tfc:usable_on_tool_rack', 'railcraft:seasons_crowbar')
    event.add('tfc:usable_on_tool_rack', 'railcraft:whistle_tuner')
    event.add('tfc:usable_on_tool_rack', 'railcraft:signal_tuner')
    event.add('tfc:usable_on_tool_rack', 'railcraft:signal_block_surveyor')
    event.add('tfc:usable_on_tool_rack', 'mekanism:flamethrower')
    event.add('tfc:usable_on_tool_rack', 'mekanism:electric_bow')
    event.add('tfc:usable_on_tool_rack', 'mekanism:atomic_disassembler')
    event.add('tfc:usable_on_tool_rack', 'mekanism:meka_tool')
    event.add('tfc:usable_on_tool_rack', 'mekanism:configurator')
    event.add('tfc:usable_on_tool_rack', 'minecraft:trident')

    // TFC Moss
    event.add('tfc:moss', 'tfc:plant/moss')
    event.add('tfc:moss', 'tfc:plant/spanish_moss')

    // TFC Grass
    event.add('tfc:plants/grass', 'firmalife:plant/butterfly_grass')
    event.add('tfc:plants/grass', 'tfc:groundcover/dead_grass')
    event.add('tfc:plants/grass', 'tfc:plant/pampas_grass')
    event.add('tfc:plants/grass', 'tfc:plant/beachgrass')
    event.add('tfc:plants/grass', 'tfc:plant/bluegrass')
    event.add('tfc:plants/grass', 'tfc:plant/bromegrass')
    event.add('tfc:plants/grass', 'tfc:plant/fountain_grass')
    event.add('tfc:plants/grass', 'tfc:plant/manatee_grass')
    event.add('tfc:plants/grass', 'tfc:plant/orchard_grass')
    event.add('tfc:plants/grass', 'tfc:plant/ryegrass')
    event.add('tfc:plants/grass', 'tfc:plant/scutch_grass')
    event.add('tfc:plants/grass', 'tfc:plant/star_grass')
    event.add('tfc:plants/grass', 'tfc:plant/timothy_grass')
    event.add('tfc:plants/grass', 'tfc:plant/raddia_grass')
    event.add('tfc:plants/grass', 'tfc:plant/cordgrass')
    event.add('tfc:plants/grass', 'tfc:plant/eel_grass')
    event.add('tfc:plants/grass', 'tfc:plant/switchgrass')
    event.add('tfc:plants/grass', 'tfc:plant/tall_fescue_grass')
    event.add('tfc:plants/grass', 'tfc:plant/turtle_grass')

    // TFC Vines
    event.add('tfc:plants/vine', 'minecraft:weeping_vines')
    event.add('tfc:plants/vine', 'minecraft:twisting_vines')
    event.add('tfc:plants/vine', 'minecraft:vine')
    event.add('tfc:plants/vine', 'tfc:plant/hanging_vines')
    event.add('tfc:plants/vine', 'tfc:plant/jungle_vines')

    // TFC Kelp
    event.add('tfc:plants/kelp', 'minecraft:kelp')
    event.add('tfc:plants/kelp', 'tfc:plant/winged_kelp')
    event.add('tfc:plants/kelp', 'tfc:plant/leafy_kelp')
    event.add('tfc:plants/kelp', 'tfc:plant/giant_kelp_flower')

    // Kubejs Knapping
    event.add('kubejs:knapping/quartz', '#forge:gems/quartz')
    event.add('kubejs:knapping/lapis', '#forge:gems/lapis')
    event.add('kubejs:knapping/lapis', 'tfc:ore/lapis_lazuli')

    // TFC Any Knapping
    event.add('tfc:any_knapping', '#forge:gems/quartz')
    event.add('tfc:any_knapping', '#forge:gems/lapis')
    event.add('tfc:any_knapping', '#tfc:lumber')
    event.add('tfc:any_knapping', 'tfc:ore/lapis_lazuli')

    // TFC Rock Knapping
    event.add('tfc:rock_knapping', '#forge:gems/quartz')
    event.add('tfc:rock_knapping', '#forge:gems/lapis')
    event.add('tfc:rock_knapping', 'tfc:ore/lapis_lazuli')

    // TFC Wood Knapping
    event.add('tfc:wood_knapping', '#tfc:lumber')

    // Remove these to stop them showing up
    // in railcraft loot tables
    event.removeAll('railcraft:ingot_chest_loot')
    event.removeAll('railcraft:plate_chest_loot')
    event.removeAll('railcraft:gear_chest_loot')
})

ServerEvents.tags('fluid', event => {
    const red_steel_bucket = [
        'railcraft:creosote',
        'createdieselgenerators:biodiesel',
        'createdieselgenerators:diesel',
        'createdieselgenerators:crude_oil',
        'createdieselgenerators:gasoline',
        'createdieselgenerators:plant_oil',
        'createdieselgenerators:ethanol',
        'buildcraftenergy:oil',
        'buildcraftenergy:spout_oil'
    ]

    for (const fluid of red_steel_bucket) {
        event.add('tfc:usable_in_wooden_bucket', fluid)
        event.add('tfc:usable_in_red_steel_bucket', fluid)
        event.add('tfc:usable_in_barrel', fluid)
    }

    // Crude Oil
    event.add('forge:crude_oil', 'buildcraftenergy:oil')
    event.add('forge:crude_oil', 'buildcraftenergy:spout_oil')
    event.add('forge:crude_oil', 'artisanal:sour_crude_oil')

    // Oil
    event.add('forge:oil', 'createdieselgenerators:crude_oil')
    event.add('forge:oil', 'immersivepetroleum:crudeoil')
    event.add('forge:oil', 'artisanal:sour_crude_oil')

    // Kerosene
    event.add('forge:kerosene', 'artisanal:kerosene')

    // Sulfuric Acid
    event.add('forge:sulfuric_acid', 'artisanal:sulfuric_acid')

    // Artisanal Acids
    event.add('artisanal:acids', 'immersiveengineering:redstone_acid')
    event.add('artisanal:acids', 'mekanism:hydrofluoric_acid')
    event.add('artisanal:acids', 'mekanism:sulfuric_acid')
    event.add('artisanal:acids', 'vintage:sulfuric_acid')
})

ServerEvents.tags('block', event => {

    // Minecraft Dirt
    event.add('minecraft:dirt', '#tfc:grass')
})
