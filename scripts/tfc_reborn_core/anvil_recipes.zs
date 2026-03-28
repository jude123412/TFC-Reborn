import mods.terrafirmacraft.Anvil;
import mods.terrafirmacraft.Welding;

// Electrical Doodar Base Plate
Anvil.addRecipe("electrical_doodar_base_plate", <ore:ingotRedstone>, <tfcreborncore:item/electrical_doodar_base_plate> * 4, 2, null, "DRAW_THIRD_LAST", "DRAW_SECOND_LAST", "HIT_LAST");
// Electrical Thingamajig Stage 1
Anvil.addRecipe("electrical_thingamajig_stage_1", <ore:ingotRedstone>, <tfcreborncore:item/electrical_thingamajig_stage_1> * 10, 2, null, "HIT_THIRD_LAST", "BEND_SECOND_LAST", "HIT_LAST");

// Electrical Thingamajig Stage 2
Welding.addRecipe("electrical_thingamajig_stage_2", <ore:boltRedAlloy>, <tfcreborncore:item/electrical_thingamajig_stage_1>, <tfcreborncore:item/electrical_thingamajig_stage_2>, 2);
// Electrical Thingamajig Stage 3
Welding.addRecipe("electrical_thingamajig_stage_3", <ore:stripGold>, <tfcreborncore:item/electrical_thingamajig_stage_2>, <tfcreborncore:item/electrical_thingamajig_stage_3>, 2);
// Electrical Doodar
Welding.addRecipe("electrical_doodar", <tfcreborncore:item/electrical_doodar_base_plate>, <tfcreborncore:item/electrical_doodar_housing>, <tfcreborncore:item/electrical_doodar>, 2);
// Electrical Thingamajig
Welding.addRecipe("electrical_thingamajig", <tfcreborncore:item/electrical_thingamajig_stage_2>, <tfcreborncore:item/electrical_thingamajig_stage_3>, <tfcreborncore:item/electrical_thingamajig>, 2);