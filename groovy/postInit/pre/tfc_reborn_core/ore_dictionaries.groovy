// Minecraft
// Gem Ender
ore_dict.add("gemEnder", item('minecraft:ender_pearl'))

// TFC Tech
// Any Bronze Strip
ore_dict.add("stripAnyBronze", item('tfctech:metal/bismuth_bronze_strip'))
ore_dict.add("stripAnyBronze", item('tfctech:metal/black_bronze_strip'))
ore_dict.add("stripAnyBronze", item('tfctech:metal/bronze_strip'))
// Any Bronze Rackwheel Piece
ore_dict.add("rackwheelPieceAnyBronze", item('tfctech:metal/bismuth_bronze_rackwheel_piece'))
ore_dict.add("rackwheelPieceAnyBronze", item('tfctech:metal/black_bronze_rackwheel_piece'))
ore_dict.add("rackwheelPieceAnyBronze", item('tfctech:metal/bronze_rackwheel_piece'))
// Any Bronze Rackwheel
ore_dict.add("rackwheelAnyBronze", item('tfctech:metal/bismuth_bronze_rackwheel'))
ore_dict.add("rackwheelAnyBronze", item('tfctech:metal/black_bronze_rackwheel'))
ore_dict.add("rackwheelAnyBronze", item('tfctech:metal/bronze_rackwheel'))
// Any Bronze Gear
ore_dict.add("gearAnyBronze", item('tfctech:metal/bismuth_bronze_gear'))
ore_dict.add("gearAnyBronze", item('tfctech:metal/black_bronze_gear'))
ore_dict.add("gearAnyBronze", item('tfctech:metal/bronze_gear'))
// Any Bronze Wire
ore_dict.add("wireAnyBronze", item('tfctech:metal/bismuth_bronze_wire'))
ore_dict.add("wireAnyBronze", item('tfctech:metal/black_bronze_wire'))
ore_dict.add("wireAnyBronze", item('tfctech:metal/bronze_wire'))
// Any Bronze Long Rod
ore_dict.add("stickLongAnyBronze", item('tfctech:metal/bismuth_bronze_long_rod'))
ore_dict.add("stickLongAnyBronze", item('tfctech:metal/black_bronze_long_rod'))
ore_dict.add("stickLongAnyBronze", item('tfctech:metal/bronze_long_rod'))
// Any Bronze Rod
ore_dict.add("stickAnyBronze", item('tfctech:metal/bismuth_bronze_rod'))
ore_dict.add("stickAnyBronze", item('tfctech:metal/black_bronze_rod'))
ore_dict.add("stickAnyBronze", item('tfctech:metal/bronze_rod'))
// Any Bronze Bolt
ore_dict.add("boltAnyBronze", item('tfctech:metal/bismuth_bronze_bolt'))
ore_dict.add("boltAnyBronze", item('tfctech:metal/black_bronze_bolt'))
ore_dict.add("boltAnyBronze", item('tfctech:metal/bronze_bolt'))
// Any Bronze Screw
ore_dict.add("screwAnyBronze", item('tfctech:metal/black_bronze_screw'))
ore_dict.add("screwAnyBronze", item('tfctech:metal/bismuth_bronze_screw'))
ore_dict.add("screwAnyBronze", item('tfctech:metal/bronze_screw'))

// Add Iron to Wrought Iron Parts
ore_dict.add("groveIron", item('tfctech:metal/iron_groove'))
ore_dict.add("bowlMountIron", item('tfctech:metal/iron_bowl_mount'))
ore_dict.add("drawPlateIron", item('tfctech:metal/iron_draw_plate'))
ore_dict.add("stripIron", item('tfctech:metal/wrought_iron_strip'))
ore_dict.add("rackwheelPieceIron", item('tfctech:metal/wrought_iron_rackwheel_piece'))
ore_dict.add("rackwheelIron", item('tfctech:metal/wrought_iron_rackwheel'))
ore_dict.add("gearIron", item('tfctech:metal/wrought_iron_gear'))
ore_dict.add("wireIron", item('tfctech:metal/wrought_iron_wire'))
ore_dict.add("stickLongIron", item('tfctech:metal/wrought_iron_long_rod'))
ore_dict.add("stickIron", item('tfctech:metal/wrought_iron_rod'))
ore_dict.add("boltIron", item('tfctech:metal/wrought_iron_bolt'))
ore_dict.add("screwIron", item('tfctech:metal/wrought_iron_screw'))

// Storage Drawers
def drawers = [
    item('storagedrawers:customdrawers'),
    item('storagedrawers:customdrawers', 1),
    item('storagedrawers:customdrawers', 2),
    item('storagedrawers:customdrawers', 3),
    item('storagedrawers:customdrawers', 4),
    item('storagedrawers:customdrawers', 4),
]

for (item in drawers) {
    ore_dict.add("drawerFramed", item)
}

// Thermal Expansion
// Add gemCinnabar to TE Cinnabar
ore_dict.add("gemCinnabar", item('thermalfoundation:material', 866))


// Forestry
// Sweetener
ore_dict.add("sweetener", item('forestry:honey_drop'))
ore_dict.add("sweetener", item('forestry:honeydew'))


// ore_dict.add("", null)