import mods.terrafirmacraft.Barrel;

// Immersive Engineering Recipes
// Treated Wood
Barrel.addRecipe("tfcreborncore:treated_wood_planks", <ore:plankWood>, <liquid:creosote> * 100, <immersiveengineering:treated_wood>, null, 32);
Barrel.addRecipe("tfcreborncore:treated_wood_lumber", <ore:lumber>, <liquid:creosote> * 25, <tfcreborncore:wood/lumber/treated_wood>, null, 8);

// TFC Reborn Core Recipes
// Latex Coated Wood Sheet
Barrel.addRecipe("tfcreborncore:latex_coated_wood_sheet", <tfcreborncore:item/wood_sheet>, <liquid:latex> * 100, <tfcreborncore:item/latex_coated_wood_sheet>, null, 8);

// Thermal Expansion Recipes
// Redstone Dust
Barrel.addRecipe("tfcreborncore:redstone_from_witch_water", <ore:dustCopper>, <liquid:witchwater> * 100, <minecraft:redstone>, null, 8);
// Glowstone Dust
Barrel.addRecipe("tfcreborncore:glowstone_from_witch_water", <ore:dustGold>, <liquid:witchwater> * 100, <minecraft:glowstone_dust>, null, 8);
// Enderpearl Powder
Barrel.addRecipe("tfcreborncore:enderpearl_from_witch_water", <ore:dustBismuth>, <liquid:witchwater> * 100, <tfcreborncore:item/enderpearl_powder>, null, 8);
// Blaze Rod
Barrel.addRecipe("tfcreborncore:blaze_rod_from_witch_water", <ore:stickRoseGold>, <liquid:witchwater> * 250, <minecraft:blaze_rod>, null, 8);
// Blizz Rod
Barrel.addRecipe("tfcreborncore:blizz_rod_from_witch_water", <ore:stickCobalt>, <liquid:witchwater> * 250, <thermalfoundation:material:2048>, null, 8);
// Blitz Rod
Barrel.addRecipe("tfcreborncore:blitz_rod_from_witch_water", <ore:stickGold>, <liquid:witchwater> * 250, <thermalfoundation:material:2050>, null, 8);
// Basalaz Rod
Barrel.addRecipe("tfcreborncore:basalaz_from_witch_water", <ore:stickMagnesiumDiboride>, <liquid:witchwater> * 250, <thermalfoundation:material:2052>, null, 8);

// Minecraft Recipes
Barrel.addRecipe("tfcreborncore:obsidian_from_witch_water", <ore:cobblestone>, <liquid:witchwater> * 250, <minecraft:obsidian>, null, 72);