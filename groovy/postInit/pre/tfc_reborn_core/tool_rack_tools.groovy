// Add toolRackCapable to any item
// to allow it to be placed within 
// a Terrafirmacraft Tool Rack!

import net.minecraftforge.oredict.OreDictionary

def items = [
    item('chisel:chisel_iron', OreDictionary.WILDCARD_VALUE),
    item('chisel:chisel_diamond', OreDictionary.WILDCARD_VALUE),
    item('chisel:chisel_hitech', OreDictionary.WILDCARD_VALUE),
    item('powerchisels:fluxed_chisel'),
    item('chiselsandbits:chisel_stone'),
    item('chiselsandbits:chisel_iron'),
    item('chiselsandbits:chisel_gold'),
    item('chiselsandbits:chisel_diamond'),
    item('chiselsandbits:wrench_wood'),
    item('chiselsandbits:bitsaw_diamond'),
    item('chiselsandbits:tape_measure'),
    item('thermalfoundation:meter'),
    item('thermalfoundation:tome_lexicon'),
    item('thermalfoundation:tome_experience'),
    item('thermalinnovation:magnet', OreDictionary.WILDCARD_VALUE),
    item('thermalinnovation:injector', OreDictionary.WILDCARD_VALUE),
    item('thermalinnovation:quiver', OreDictionary.WILDCARD_VALUE),
    item('immersiveengineering:tool', 2),
    item('immersiveengineering:drill'),
    item('immersiveengineering:jerrycan'),
    item('immersiveengineering:revolver'),
    item('immersiveengineering:chemthrower'),
    item('immersiveengineering:railgun'),
    item('immersiveengineering:skyhook'),
    item('immersivepetroleum:oil_can'),
    item('tfc:spindle'),
    item('storagedrawers:drawer_key'),
    item('storagedrawers:shroud_key'),
    item('storagedrawers:personal_key'),
    item('storagedrawers:quantify_key'),
    item('storagedrawers:tape'),
    item('logisticspipes:pipe_controller'),
    item('logisticspipes:pipe_manager'),
    item('logisticspipes:logistics_programmer'),
    item('logisticspipes:remote_orderer'),
    item('buildcraftsilicon:gate_copier'),
    item('buildinggadgets:buildingtool'),
    item('buildinggadgets:exchangertool'),
    item('buildinggadgets:copypastetool'),
    item('buildinggadgets:destructiontool'),
    item('buildcraftcore:wrench'),
    item('buildcraftcore:paintbrush', OreDictionary.WILDCARD_VALUE),
    item('buildcraftcore:marker_connector'),
    item('appliedenergistics2:certus_quartz_cutting_knife'),
    item('appliedenergistics2:nether_quartz_cutting_knife'),
    item('appliedenergistics2:entropy_manipulator'),
    item('appliedenergistics2:charged_staff'),
    item('appliedenergistics2:matter_cannon'),
    item('appliedenergistics2:portable_cell'),
    item('appliedenergistics2:color_applicator'),
    item('appliedenergistics2:biometric_card'),
    item('appliedenergistics2:memory_card'),
    item('tfc:spindle', OreDictionary.WILDCARD_VALUE)
]

def blowpipe = ore_dict.getItems('blowpipe')

for (item in blowpipe) {
    ore_dict.add("tool", item)
}

for (item in items) {
    ore_dict.add("tool", item)
}
