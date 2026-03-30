import classes.postInit.Utils


for (var in Utils.tier1Metals) {
    // Tier 1 Metal
    for (items in ore('ingot' + Utils.toPascal(var))) {
        ore_dict.add('ingotTier1', items)
    }
}