import mods.terrafirmacraft.Anvil;
import mods.terrafirmacraft.Welding;

// TFC Reborn Core Recipes
// Electrical Doodar Base Plate
Anvil.addRecipe("tfcreborncore:electrical_doodar_base_plate", <ore:ingotRedstone>, <tfcreborncore:item/electrical_doodar_base_plate> * 5, 2, null, "DRAW_THIRD_LAST", "DRAW_SECOND_LAST", "HIT_LAST");
// Electrical Thingamajig Stage 1
Anvil.addRecipe("tfcreborncore:electrical_thingamajig_stage_1", <ore:ingotRedstone>, <tfcreborncore:item/electrical_thingamajig_stage_1> * 10, 2, null, "HIT_THIRD_LAST", "BEND_SECOND_LAST", "HIT_LAST");
// Radiator Piping
Anvil.addRecipe("tfcreborncore:radiator_piping", <ore:ingotIron>, <tfcreborncore:item/radiator_piping>, 2, null, "BEND_THIRD_LAST", "UPSET_SECOND_LAST", "DRAW_LAST");

// Electrical Thingamajig Stage 2
Welding.addRecipe("tfcreborncore:electrical_thingamajig_stage_2", <ore:boltRedAlloy>, <tfcreborncore:item/electrical_thingamajig_stage_1>, <tfcreborncore:item/electrical_thingamajig_stage_2>, 2);
// Electrical Thingamajig Stage 3
Welding.addRecipe("tfcreborncore:electrical_thingamajig_stage_3", <ore:stripGold>, <tfcreborncore:item/electrical_thingamajig_stage_2>, <tfcreborncore:item/electrical_thingamajig_stage_3>, 2);
// Electrical Doodar
Welding.addRecipe("tfcreborncore:electrical_doodar", <tfcreborncore:item/electrical_doodar_base_plate>, <tfcreborncore:item/electrical_doodar_housing>, <tfcreborncore:item/electrical_doodar>, 2);
// Electrical Thingamajig
Welding.addRecipe("tfcreborncore:electrical_thingamajig", <tfcreborncore:item/electrical_thingamajig_stage_2>, <tfcreborncore:item/electrical_thingamajig_stage_3>, <tfcreborncore:item/electrical_thingamajig>, 2);
// Radiator Matrix
Welding.addRecipe("tfcreborncore:radiator_matrix", <ore:ingotDoubleIron>, <tfcreborncore:item/radiator_piping>, <tfcreborncore:item/radiator_matrix>, 2);

// TFC Tech Recipes
Anvil.addRecipe("tfctech:tin_sleeve", <ore:ingotTin>, <tfctech:metal/tin_sleeve>, 1, null, "BEND_THIRD_LAST", "BEND_SECOND_LAST", "BEND_LAST");
Anvil.addRecipe("tfctech:brass_sleeve", <ore:ingotBrass>, <tfctech:metal/brass_sleeve>, 1, null, "BEND_THIRD_LAST", "BEND_SECOND_LAST", "BEND_LAST");
Anvil.addRecipe("tfctech:steel_sleeve", <ore:ingotSteel>, <tfctech:metal/steel_sleeve>, 4, null, "BEND_THIRD_LAST", "BEND_SECOND_LAST", "BEND_LAST");