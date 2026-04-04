import mods.terrafirmacraft.Quern;

// TFC Recipes
Quern.addRecipe("tfcreborncore:redstone_ingot_to_dust", <ore:ingotRedstone>, <minecraft:redstone>);
Quern.addRecipe("tfcreborncore:glowstone_ingot_to_dust", <ore:ingotGlowstone>, <minecraft:glowstone_dust>);
Quern.addRecipe("tfcreborncore:enderpearl_to_dust", <ore:gemEnder>, <tfcreborncore:item/enderpearl_powder>);
Quern.addRecipe("tfcreborncore:enderpearl_ingot_to_dust", <ore:ingotEnder>, <tfcreborncore:item/enderpearl_powder>);
Quern.addRecipe("tfcreborncore:certus_quartz_to_dust", <ore:crystalCertusQuartz>, <tfcreborncore:item/certus_quartz_powder>);
Quern.addRecipe("tfcreborncore:pure_certus_quartz_to_dust", <ore:crystalPureCertusQuartz>, <tfcreborncore:item/certus_quartz_powder>);
Quern.addRecipe("tfcreborncore:charged_certus_quartz_to_dust", <appliedenergistics2:material:1>, <tfcreborncore:item/certus_quartz_powder>);

// TFC Reborn Core
Quern.addRecipe("tfcreborncore:sawdust_from_lumber", <ore:lumber>, <tfcreborncore:item/wood_powder>);
Quern.addRecipe("tfcreborncore:coal_powder_from_lignite", <tfc:ore/lignite>, <tfcreborncore:item/coal_powder>);
Quern.addRecipe("tfcreborncore:coal_powder_from_coal", <ore:gemCoal>, <tfcreborncore:item/coal_powder> * 2);
Quern.addRecipe("tfcreborncore:snow_powder_from_snow", <minecraft:snow>, <tfcreborncore:item/snow_powder> * 2);
Quern.addRecipe("tfcreborncore:obsidian_powder_from_obsidian", <minecraft:obsidian>, <tfcreborncore:item/obsidian_powder> * 2);

// Thermal Expansion
Quern.addRecipe("tfcreborncore:blizz_powder", <ore:rodBlizz>, <thermalfoundation:material:2049> * 2);
Quern.addRecipe("tfcreborncore:blitz_powder", <ore:rodBlitz>, <thermalfoundation:material:2051> * 2);
Quern.addRecipe("tfcreborncore:basalz_powder", <ore:rodBasalz>, <thermalfoundation:material:2053> * 2);