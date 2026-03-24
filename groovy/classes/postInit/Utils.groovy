package classes.postInit

import net.dries007.tfc.api.registries.TFCRegistries
import net.dries007.tfc.api.types.Metal

class Utils {
    // Gets all metals that are usable and 
    // adds them to this static def
    static def materials = TFCRegistries.METALS.findAll{it.usable}.collect{it.registryName.path.toLowerCase()}

    // Formats any string using _ to make ore dictionary names easy
    // Example : bismuth_bronze turns to BismuthBronze xD
    static def toPascal(String s) {
        if (!s) return s
        s.split('_').collect { it.capitalize() }.join('')
    }
}