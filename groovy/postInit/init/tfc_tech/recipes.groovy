import classes.postInit.Utils

// Remove Old Rackwheel Recipes
for (var in Utils.usableMetals) {
        crafting.remove('tfctech:' + var + '_rackwheel')
}
