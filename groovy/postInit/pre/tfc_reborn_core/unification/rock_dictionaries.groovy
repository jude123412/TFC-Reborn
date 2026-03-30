import classes.postInit.Utils
import net.minecraftforge.oredict.OreDictionary

// Rockwool Dictionaries
for (var in Utils.rocks) {
    ore_dict.add('blockRockwool', item('tfc_decoration:rockwool/' + var))
}