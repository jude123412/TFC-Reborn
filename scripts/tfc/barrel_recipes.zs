import mods.terrafirmacraft.Barrel;

// Immersive Engineering Recipes
// Treated Wood
Barrel.addRecipe("tfcreborncore:treated_wood", <ore:plankWood>, <liquid:creosote> * 125, <immersiveengineering:treated_wood>, null, 8);

// TFC Reborn Core Recipes
// Latex Coated Wood Sheet
Barrel.addRecipe("tfcreborncore:latex_coated_wood_sheet", <tfcreborncore:item/wood_sheet>, <liquid:latex> * 100, <tfcreborncore:item/latex_coated_wood_sheet>, null, 8);

// Ex Nihilo Recipes
// Witch Water
Barrel.addRecipe("tfcreborncore:witch_water_from_spores", <exnihilocreatio:item_material:3>, <liquid:fresh_water> * 1000, null, <liquid:witchwater> * 1000, 24);
Barrel.addRecipe("tfcreborncore:witch_water_from_water", <tfc:wooden_bucket>.withTag({Fluid: {FluidName: "witchwater", Amount: 1000}}), <liquid:fresh_water> * 9000, <tfc:wooden_bucket>, <liquid:witchwater> * 10000, 0);
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