import mods.terrafirmacraft.Heating;
import mods.terrafirmacraft.ItemRegistry;

// TFC Reborn Core Recipes
// Item Heat Registry
ItemRegistry.registerItemHeat(<tfcreborncore:item/hardened_glass_mix>, 0.2, 1400, false);
ItemRegistry.registerItemHeat(<tfcreborncore:item/electrical_doodar_housing>, 0.2, 1400, true);
ItemRegistry.registerItemHeat(<tfcreborncore:item/synthetic_graphite_mix>, 0.6, 2000, false);

// Item Metal Registry
ItemRegistry.registerItemMetal(<tfcreborncore:item/electrical_doodar_base_plate>, "redstone", 20, true);
ItemRegistry.registerItemMetal(<tfcreborncore:item/electrical_thingamajig_stage_1>, "redstone", 10, true);
ItemRegistry.registerItemMetal(<tfcreborncore:item/electrical_thingamajig_stage_2>, "redstone", 10, true);
ItemRegistry.registerItemMetal(<tfcreborncore:item/electrical_thingamajig_stage_3>, "redstone", 10, true);
ItemRegistry.registerItemMetal(<tfcreborncore:item/electrical_doodar>, "redstone", 25, true);
ItemRegistry.registerItemMetal(<tfcreborncore:item/electrical_thingamajig>, "redstone", 20, true);
ItemRegistry.registerItemMetal(<tfcreborncore:item/brass_piston>, "brass", 750, true);

// TFC Fuel Item Regsitry
ItemRegistry.registerFuel(<tfcreborncore:item/lignite_coke>, 4000, 1415.0, true, false);
ItemRegistry.registerFuel(<tfcreborncore:item/bituminous_coal_coke>, 4400, 1500.0, true, false);

// Hardened Glass
Heating.addRecipe("tfcreborncore:hardened_glass", <tfcreborncore:item/hardened_glass_mix>, <thermalfoundation:glass:3>, 999, 1400);
Heating.addRecipe("tfcreborncore:synthetic_graphite", <tfcreborncore:item/synthetic_graphite_mix>, <tfc:powder/graphite>, 1600, 2000);

// TFC Recipes
// Item Heat Registry
ItemRegistry.registerItemHeat(<tfc:powder/graphite>, 0.6, 2000, false);
ItemRegistry.registerItemHeat(<tfcreborncore:item/unfired_clay_sheet>, 0.2, 2000, false);
ItemRegistry.registerItemHeat(<tfcreborncore:item/unfired_ceramic_insulator>, 0.2, 2000, false);
ItemRegistry.registerItemHeat(<tfcreborncore:item/clay_sheet>, 0.2, 2000, false);
ItemRegistry.registerItemHeat(<tfcreborncore:item/ceramic_insulator>, 0.2, 2000, false);

// Ceramic Sheet
Heating.addRecipe("tfcreborncore:ceramic_sheet", <tfcreborncore:item/unfired_clay_sheet>, <tfcreborncore:item/clay_sheet>, 1599, 1599);
// Ceramic Insulator
Heating.addRecipe("tfcreborncore:ceramic_insulator", <tfcreborncore:item/unfired_ceramic_insulator>, <tfcreborncore:item/ceramic_insulator>, 1599, 1599);

// Item Metal Registry
ItemRegistry.registerItemMetal(<tfc:brass_mechanisms>, "brass", 50, true);