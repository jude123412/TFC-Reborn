package classes.postInit

import net.dries007.tfc.api.registries.TFCRegistries
import net.dries007.tfc.api.types.Metal
import tfcreborncore.objects.items.enums.ItemRCLumberType

class Utils {
    // Gets all TFC usable metals
    static def usableMetals = TFCRegistries.METALS.findAll{it.usable}.collect{it.registryName.path.toLowerCase()}

    // Gets all TFC rocks
    static def rocks = TFCRegistries.ROCKS.collect{it.registryName.path.toLowerCase()}

    // Gets all TFC trees
    static def trees = TFCRegistries.TREES.collect{it.registryName.path.toLowerCase()}

    // Gets all Forestry Woods
    static def woods = ItemRCLumberType.values()

    // Formats any string using _ to make ore dictionary names easy
    // Example : bismuth_bronze turns to BismuthBronze xD
    static def toPascal(String s) {
        if (!s) return s
        s.split('_').collect { it.capitalize() }.join('')
    }

    // transforms any item with durability and returns it 
    // with 1 durability less than original
    // Only usable within Crafting Table Recipes
    static def transformerTool = {stack -> return new ItemStack(stack.item, stack.count, stack.getItemDamage() + 1)}
    
    // Transforms any bucket with a fluid and returns it
    // without NBT Data, Rendering the bucket essentially empty
    static def transformerBucket = {stack -> return new ItemStack(stack.item, stack.count)}
}