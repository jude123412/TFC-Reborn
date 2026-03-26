import classes.postInit.Utils

// Remove Old Rackwheel Recipes
for (var in Utils.materials) {
        crafting.remove('tfctech:' + var + '_rackwheel')
}
