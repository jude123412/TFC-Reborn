import mods.terrafirmacraft.Heating;
import mods.terrafirmacraft.ItemRegistry;

// Item Heat Registry
ItemRegistry.registerItemHeat(<tfcreborncore:item/hardened_glass_mix>, 0.2, 1400, false);
ItemRegistry.registerItemHeat(<tfcreborncore:item/electrical_doodar_housing>, 0.2, 1400, true);

// Item Metal Registry
ItemRegistry.registerItemMetal(<tfcreborncore:item/electrical_doodar_base_plate>, "redstone", 20, true);
ItemRegistry.registerItemMetal(<tfcreborncore:item/electrical_thingamajig_stage_1>, "redstone", 10, true);
ItemRegistry.registerItemMetal(<tfcreborncore:item/electrical_thingamajig_stage_2>, "redstone", 10, true);
ItemRegistry.registerItemMetal(<tfcreborncore:item/electrical_thingamajig_stage_3>, "redstone", 10, true);
ItemRegistry.registerItemMetal(<tfcreborncore:item/electrical_doodar>, "redstone", 25, true);
ItemRegistry.registerItemMetal(<tfcreborncore:item/electrical_thingamajig>, "redstone", 20, true);

// Hardened Glass
Heating.addRecipe("hardened_glass", <tfcreborncore:item/hardened_glass_mix>, <thermalfoundation:glass:3>, 999, 1400);