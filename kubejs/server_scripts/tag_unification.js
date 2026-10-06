// These need to be run before other recipes
ServerEvents.tags('item', event => {
    
    // Add glue to slimeballs tag
    event.add('forge:slimeballs', 'tfc:glue')

    // Fix TFC Coke tags
    event.add('forge:dusts/coke', 'tfc:powder/coke')
    event.add('forge:dusts/coal_coke', 'tfc:powder/coke')
    event.remove('forge:dusts/coal_coke', 'tfc:powder/graphite')
    event.remove('minecraft:forgedusts/coke', 'tfc:powder/coke')

    // Alumina sources
    event.add('tfc:fireclay/alumina', 'tfc:powder/kaolinite')
    event.add('tfc:fireclay/alumina', '#forge:dusts/aluminum')
    
    // Carbon sources
    event.add('tfc:fireclay/carbon', 'tfc:powder/graphite')
    event.add('tfc:fireclay/carbon', '#forge:dusts/coal_coke')

    // Sawdust
    event.add('forge:sawdust', '#forge:bark_powder')

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
})

ServerEvents.tags('fluid', event => {
    const red_steel_bucket = [
        'railcraft:creosote'
    ]

    for (const fluid of red_steel_bucket) {
        event.add('tfc:usable_in_wooden_bucket', fluid)
        event.add('tfc:usable_in_red_steel_bucket', fluid)
        event.add('tfc:usable_in_barrel', fluid)
    }
})
