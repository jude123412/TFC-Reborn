import classes.postInit.Utils
import net.minecraftforge.oredict.OreDictionary
import tfcreborncore.objects.items.enums.ModGroup

// Rockwool Dictionaries
for (var in Utils.woods) {
    if (var.getModGroup() == ModGroup.FORESTRY) {
        ore_dict.add('logWood' + Utils.toPascal(var.toString().toLowerCase()), item('forestry:logs.' + var.getWoodSpeciesId(), var.getWoodMeta()))
        ore_dict.add('plankWood' + Utils.toPascal(var.toString().toLowerCase()), item('forestry:planks.' + var.getPlankSpeciesId(), var.getPlankMeta()))
    }

    if (var.getModGroup() == ModGroup.BINNIES) {
        ore_dict.add('logWood' + Utils.toPascal(var.toString().toLowerCase()), item('extratrees:logs.' + var.getWoodSpeciesId(), var.getWoodMeta()))
        ore_dict.add('plankWood' + Utils.toPascal(var.toString().toLowerCase()), item('extratrees:planks.' + var.getPlankSpeciesId(), var.getPlankMeta()))
    }
}