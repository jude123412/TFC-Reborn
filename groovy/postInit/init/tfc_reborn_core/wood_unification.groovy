import classes.postInit.Utils
import net.minecraftforge.oredict.OreDictionary
import tfcreborncore.objects.items.enums.ModGroup
import tfcreborncore.objects.items.enums.ItemRCLumberType

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
}

// Forestry Wood
for (var in Utils.woods) {
    if (var.getModGroup() == ModGroup.FORESTRY) {
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