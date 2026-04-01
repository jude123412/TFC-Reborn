import mods.exnihilocreatio.Sieve;
import crafttweaker.item.IItemStack;

Sieve.removeAll();

val ores = [
    <tfc:ore/small/tetrahedrite>,
    <tfc:ore/small/native_copper>,
    <tfc:ore/small/malachite>,
    <tfc:ore/small/sphalerite>,
    <tfc:ore/small/bismuthinite>,
    <tfc:ore/small/cassiterite>,
    <tfc:ore/small/native_gold>,
    <tfc:ore/small/native_silver>
] as IItemStack[];

for entry in ores {
    Sieve.addStringMeshRecipe(<ore:gravel>, entry, 0.01);
    Sieve.addFlintMeshRecipe(<ore:gravel>, entry, 0.02);
    Sieve.addIronMeshRecipe(<ore:gravel>, entry, 0.04);
    Sieve.addDiamondMeshRecipe(<ore:gravel>, entry, 0.08);
}

val seeds = [
    <exnihilocreatio:item_material:3>,
    <firmalife:crop/seeds/pumpkin>,
    <firmalife:crop/seeds/melon>,
    <tfc:crop/seeds/barley>,
    <tfc:crop/seeds/maize>,
    <tfc:crop/seeds/oat>,
    <tfc:crop/seeds/rice>,
    <tfc:crop/seeds/rye>,
    <tfc:crop/seeds/wheat>,
    <tfc:crop/seeds/beet>,
    <tfc:crop/seeds/cabbage>,
    <tfc:crop/seeds/carrot>,
    <tfc:crop/seeds/garlic>,
    <tfc:crop/seeds/green_bean>,
    <tfc:crop/seeds/onion>,
    <tfc:crop/seeds/potato>,
    <tfc:crop/seeds/soybean>,
    <tfc:crop/seeds/squash>,
    <tfc:crop/seeds/sugarcane>,
    <tfc:crop/seeds/tomato>,
    <tfc:crop/seeds/red_bell_pepper>,
    <tfc:crop/seeds/yellow_bell_pepper>,
    <tfc:crop/seeds/jute>,
] as IItemStack[];

for entry in seeds {
    Sieve.addStringMeshRecipe(<ore:dirt>, entry, 0.01);
    Sieve.addFlintMeshRecipe(<ore:dirt>, entry, 0.02);
    Sieve.addIronMeshRecipe(<ore:dirt>, entry, 0.03);
    Sieve.addDiamondMeshRecipe(<ore:dirt>, entry, 0.04);
}