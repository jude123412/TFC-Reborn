import classes.postInit.Utils
import net.minecraftforge.oredict.OreDictionary
import tfcreborncore.objects.items.enums.ModGroup
import tfcreborncore.objects.items.enums.ItemRCLumberType

def recipesToRemoveByOutput = [
    item('forestry:planks.0', OreDictionary.WILDCARD_VALUE),
    item('forestry:planks.1', OreDictionary.WILDCARD_VALUE),
    item('forestry:fences.0', OreDictionary.WILDCARD_VALUE),
    item('forestry:fences.1', OreDictionary.WILDCARD_VALUE),
    item('forestry:planks.vanilla.fireproof.0', OreDictionary.WILDCARD_VALUE),
    item('forestry:planks.fireproof.0', OreDictionary.WILDCARD_VALUE),
    item('forestry:fences.fireproof.0', OreDictionary.WILDCARD_VALUE),
    item('forestry:planks.fireproof.1', OreDictionary.WILDCARD_VALUE),
    item('forestry:fences.fireproof.1', OreDictionary.WILDCARD_VALUE),
    item('extratrees:planks.0', OreDictionary.WILDCARD_VALUE),
    item('extratrees:planks.1', OreDictionary.WILDCARD_VALUE),
    item('extratrees:planks.2', OreDictionary.WILDCARD_VALUE),
    item('extratrees:planks.fireproof.0', OreDictionary.WILDCARD_VALUE),
    item('extratrees:planks.fireproof.1', OreDictionary.WILDCARD_VALUE),
    item('extratrees:planks.fireproof.2', OreDictionary.WILDCARD_VALUE),
    item('extratrees:fences.0', OreDictionary.WILDCARD_VALUE),
    item('extratrees:fences.1', OreDictionary.WILDCARD_VALUE),
    item('extratrees:fences.2', OreDictionary.WILDCARD_VALUE),
    item('extratrees:fences.fireproof.0', OreDictionary.WILDCARD_VALUE),
    item('extratrees:fences.fireproof.1', OreDictionary.WILDCARD_VALUE),
    item('extratrees:fences.fireproof.2', OreDictionary.WILDCARD_VALUE)
]

for (var in recipesToRemoveByOutput) {
    crafting.removeByOutput(var)
}

for (var in Utils.trees) {
    crafting.removeByOutput(item('tfc:wood/lumber/' + var))

    // New Log to Lumber
    crafting.shapelessBuilder()
        .output(item('tfc:wood/lumber/' + var) * 8)
        .input([
            ore('saw').transform(Utils.transformerTool),
            ore('logWood' + Utils.toPascal(var))
        ])
        .register()

    // New Plank to Lumber
    crafting.shapelessBuilder()
        .output(item('tfc:wood/lumber/' + var) * 8)
        .input([
            ore('saw').transform(Utils.transformerTool),
            ore('plankWood' + Utils.toPascal(var))
        ])
        .register()

    // Log Cutting
    mods.thermalexpansion.sawmill.recipeBuilder()
        .input(item('tfc:wood/log/' + var))
        .output(item('tfc:wood/lumber/' + var) * 12, item('tfcreborncore:item/wood_powder'))
        .chance(25)
        .energy(1600)
        .register()
}

// Forestry Wood
for (var in Utils.woods) {
    if (var.getModGroup() == ModGroup.FORESTRY) {
        crafting.removeByOutput(item('forestry:fence.gates.' + var.toString().toLowerCase()))
        crafting.removeByOutput(item('forestry:stairs.' + var.toString().toLowerCase()))
        crafting.removeByOutput(item('forestry:doors.' + var.toString().toLowerCase()))

        if (var != ItemRCLumberType.ACACIA && 
            var != ItemRCLumberType.CHESTNUT && 
            var != ItemRCLumberType.SEQUOIA && 
            var != ItemRCLumberType.KAPOK && 
            var != ItemRCLumberType.WILLOW && 
            var != ItemRCLumberType.PALM && 
            var != ItemRCLumberType.PINE && 
            var != ItemRCLumberType.MAPLE) {
            crafting.shapelessBuilder()
                .output(item('tfcreborncore:wood/lumber/' + var.toString().toLowerCase()) * 8)
                .input([
                    item('forestry:logs.' + var.getWoodSpeciesId(), var.getWoodMeta()),
                    ore('saw').transform(Utils.transformerTool)
                ])
                .register()

            crafting.shapedBuilder()
                .output(item('forestry:planks.' + var.getPlankSpeciesId(), var.getPlankMeta()))
                .shape([
                    [ore('lumber' + Utils.toPascal(var.toString().toLowerCase())),ore('lumber' + Utils.toPascal(var.toString().toLowerCase()))],
                    [ore('lumber' + Utils.toPascal(var.toString().toLowerCase())),ore('lumber' + Utils.toPascal(var.toString().toLowerCase()))]
                ])
                .register()

            crafting.shapedBuilder()
                .output(item('forestry:fences.' + var.getPlankSpeciesId(), var.getPlankMeta()) * 8)
                .shape([
                    [ore('plankWood' + Utils.toPascal(var.toString().toLowerCase())),ore('lumber' + Utils.toPascal(var.toString().toLowerCase())),ore('plankWood' + Utils.toPascal(var.toString().toLowerCase()))],
                    [ore('plankWood' + Utils.toPascal(var.toString().toLowerCase())),ore('lumber' + Utils.toPascal(var.toString().toLowerCase())),ore('plankWood' + Utils.toPascal(var.toString().toLowerCase()))]
                ])
                .register()
            
            crafting.shapedBuilder()
                .output(item('forestry:fence.gates.' + var.toString().toLowerCase()) * 2)
                .shape([
                    [ore('lumber' + Utils.toPascal(var.toString().toLowerCase())),ore('plankWood' + Utils.toPascal(var.toString().toLowerCase())),ore('lumber' + Utils.toPascal(var.toString().toLowerCase()))],
                    [ore('lumber' + Utils.toPascal(var.toString().toLowerCase())),ore('plankWood' + Utils.toPascal(var.toString().toLowerCase())),ore('lumber' + Utils.toPascal(var.toString().toLowerCase()))]
                ])
                .register()

            crafting.shapedBuilder()
                .output(item('forestry:stairs.' + var.toString().toLowerCase()) * 8)
                .shape([
                    [ore('plankWood' + Utils.toPascal(var.toString().toLowerCase())),null,null],
                    [ore('plankWood' + Utils.toPascal(var.toString().toLowerCase())),ore('plankWood' + Utils.toPascal(var.toString().toLowerCase())),null],
                    [ore('plankWood' + Utils.toPascal(var.toString().toLowerCase())),ore('plankWood' + Utils.toPascal(var.toString().toLowerCase())),ore('plankWood' + Utils.toPascal(var.toString().toLowerCase()))]
                ])
                .register()

            crafting.shapedBuilder()
                .output(item('forestry:doors.' + var.toString().toLowerCase()) * 2)
                .shape([
                    [ore('lumber' + Utils.toPascal(var.toString().toLowerCase())),ore('lumber' + Utils.toPascal(var.toString().toLowerCase()))],
                    [ore('lumber' + Utils.toPascal(var.toString().toLowerCase())),ore('lumber' + Utils.toPascal(var.toString().toLowerCase()))],
                    [ore('lumber' + Utils.toPascal(var.toString().toLowerCase())),ore('lumber' + Utils.toPascal(var.toString().toLowerCase()))]
                ])
                .register()
        }
    }

    if (var.getModGroup() == ModGroup.BINNIES) {


        if (var != ItemRCLumberType.EUCALYPTUS2 && 
            var != ItemRCLumberType.EUCALYPTUS3 && 
            var != ItemRCLumberType.CHERRY2 && 
            var != ItemRCLumberType.CINNAMON && 
            var != ItemRCLumberType.ASH && 
            var != ItemRCLumberType.HICKORY && 
            var != ItemRCLumberType.ROSEWOOD) {

            crafting.removeByOutput(item('extratrees:fence.gates.' + var.toString().toLowerCase()))
            crafting.removeByOutput(item('extratrees:stairs.' + var.toString().toLowerCase()))
            crafting.removeByOutput(item('extratrees:doors.' + var.toString().toLowerCase()))
            crafting.removeByOutput(item('extratrees:fence.gates.fireproof.' + var.toString().toLowerCase()))

            crafting.shapelessBuilder()
                .output(item('tfcreborncore:wood/lumber/' + var.toString().toLowerCase()) * 8)
                .input([
                    item('extratrees:logs.' + var.getWoodSpeciesId(), var.getWoodMeta()),
                    ore('saw').transform(Utils.transformerTool)
                ])
                .register()

            crafting.shapedBuilder()
                .output(item('extratrees:planks.' + var.getPlankSpeciesId(), var.getPlankMeta()))
                .shape([
                    [ore('lumber' + Utils.toPascal(var.toString().toLowerCase())),ore('lumber' + Utils.toPascal(var.toString().toLowerCase()))],
                    [ore('lumber' + Utils.toPascal(var.toString().toLowerCase())),ore('lumber' + Utils.toPascal(var.toString().toLowerCase()))]
                ])
                .register()

            crafting.shapedBuilder()
                .output(item('extratrees:fences.' + var.getPlankSpeciesId(), var.getPlankMeta()) * 8)
                .shape([
                    [ore('plankWood' + Utils.toPascal(var.toString().toLowerCase())),ore('lumber' + Utils.toPascal(var.toString().toLowerCase())),ore('plankWood' + Utils.toPascal(var.toString().toLowerCase()))],
                    [ore('plankWood' + Utils.toPascal(var.toString().toLowerCase())),ore('lumber' + Utils.toPascal(var.toString().toLowerCase())),ore('plankWood' + Utils.toPascal(var.toString().toLowerCase()))]
                ])
                .register()
            
            crafting.shapedBuilder()
                .output(item('extratrees:fence.gates.' + var.toString().toLowerCase()) * 2)
                .shape([
                    [ore('lumber' + Utils.toPascal(var.toString().toLowerCase())),ore('plankWood' + Utils.toPascal(var.toString().toLowerCase())),ore('lumber' + Utils.toPascal(var.toString().toLowerCase()))],
                    [ore('lumber' + Utils.toPascal(var.toString().toLowerCase())),ore('plankWood' + Utils.toPascal(var.toString().toLowerCase())),ore('lumber' + Utils.toPascal(var.toString().toLowerCase()))]
                ])
                .register()

            crafting.shapedBuilder()
                .output(item('extratrees:stairs.' + var.toString().toLowerCase()) * 8)
                .shape([
                    [ore('plankWood' + Utils.toPascal(var.toString().toLowerCase())),null,null],
                    [ore('plankWood' + Utils.toPascal(var.toString().toLowerCase())),ore('plankWood' + Utils.toPascal(var.toString().toLowerCase())),null],
                    [ore('plankWood' + Utils.toPascal(var.toString().toLowerCase())),ore('plankWood' + Utils.toPascal(var.toString().toLowerCase())),ore('plankWood' + Utils.toPascal(var.toString().toLowerCase()))]
                ])
                .register()

            crafting.shapedBuilder()
                .output(item('extratrees:doors.' + var.toString().toLowerCase()) * 2)
                .shape([
                    [ore('lumber' + Utils.toPascal(var.toString().toLowerCase())),ore('lumber' + Utils.toPascal(var.toString().toLowerCase()))],
                    [ore('lumber' + Utils.toPascal(var.toString().toLowerCase())),ore('lumber' + Utils.toPascal(var.toString().toLowerCase()))],
                    [ore('lumber' + Utils.toPascal(var.toString().toLowerCase())),ore('lumber' + Utils.toPascal(var.toString().toLowerCase()))]
                ])
                .register()
        }
    }
}