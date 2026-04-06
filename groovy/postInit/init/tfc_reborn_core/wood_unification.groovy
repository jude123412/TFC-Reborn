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


    // Bookshelf Recycling
    mods.thermalexpansion.sawmill.recipeBuilder()
        .input(item('tfc:wood/bookshelf/' + var))
        .output(item('tfc:wood/lumber/' + var) * 24, item('minecraft:book') * 3)
        .chance(100)
        .energy(1600)
        .register()
    
    // Workbench Recycling
    mods.thermalexpansion.sawmill.recipeBuilder()
        .input(item('tfc:wood/workbench/' + var))
        .output(item('tfc:wood/lumber/' + var) * 32)
        .energy(1600)
        .register()

    // Planks Recycling
    mods.thermalexpansion.sawmill.recipeBuilder()
        .input(item('tfc:wood/planks/' + var))
        .output(item('tfc:wood/lumber/' + var) * 4)
        .energy(1600)
        .register()

    // Leaves Recycling
    mods.thermalexpansion.pulverizer.recipeBuilder()
        .input(item('tfc:wood/leaves/' + var))
        .output(item('thermalfoundation:material', 816))
        .energy(1600)
        .register()
    mods.immersiveengineering.crusher.recipeBuilder()
        .input(item('tfc:wood/leaves/' + var))
        .output(item('thermalfoundation:material', 816))
        .energy(1600)
        .register()

    // Chest Recycling
    mods.thermalexpansion.sawmill.recipeBuilder()
        .input(item('tfc:wood/chest/' + var))
        .output(item('tfc:wood/lumber/' + var) * 8)
        .energy(1600)
        .register()

    // Trapped Chest Recycling
    mods.thermalexpansion.sawmill.recipeBuilder()
        .input(item('tfc:wood/chest_trap/' + var))
        .output(item('tfc:wood/lumber/' + var) * 8, item('minecraft:tripwire_hook'))
        .chance(100)
        .energy(1600)
        .register()

    // Tool Rack Recycling
    mods.thermalexpansion.sawmill.recipeBuilder()
        .input(item('tfc:wood/tool_rack/' + var))
        .output(item('tfc:wood/lumber/' + var) * 6)
        .energy(1600)
        .register()
    
    // Loom Recycling
    mods.thermalexpansion.sawmill.recipeBuilder()
        .input(item('tfc:wood/loom/' + var))
        .output(item('tfc:wood/lumber/' + var) * 7, item('minecraft:stick'))
        .energy(1600)
        .register()
    
    // Support Beam Recycling
    mods.thermalexpansion.sawmill.recipeBuilder()
        .input(item('tfc:wood/support/' + var))
        .output(item('tfc:wood/lumber/' + var) * 2)
        .energy(1600)
        .register()
    
    // Stairs Recycling
    mods.thermalexpansion.sawmill.recipeBuilder()
        .input(item('tfc:stairs/wood/' + var))
        .output(item('tfc:wood/lumber/' + var) * 3)
        .energy(1600)
        .register()
    
    // Fence Recycling
    mods.thermalexpansion.sawmill.recipeBuilder()
        .input(item('tfc:wood/fence/' + var))
        .output(item('tfc:wood/lumber/' + var) * 2)
        .energy(1600)
        .register()
    
    // Button Recycling
    mods.thermalexpansion.sawmill.recipeBuilder()
        .input(item('tfc:wood/button/' + var))
        .output(item('tfc:wood/lumber/' + var) * 4)
        .energy(1600)
        .register()

    // Pressure Plate Recycling
    mods.thermalexpansion.sawmill.recipeBuilder()
        .input(item('tfc:wood/pressure_plate/' + var))
        .output(item('tfc:wood/lumber/' + var) * 2)
        .energy(1600)
        .register()
    
    // Fence Gate Recycling
    mods.thermalexpansion.sawmill.recipeBuilder()
        .input(item('tfc:wood/fence_gate/' + var))
        .output(item('tfc:wood/lumber/' + var) * 6)
        .energy(1600)
        .register()

    // Sapling Recycling
    mods.thermalexpansion.pulverizer.recipeBuilder()
        .input(item('tfc:wood/sapling/' + var))
        .output(item('thermalfoundation:material', 816), item('minecraft:stick'))
        .chance(25)
        .energy(1600)
        .register()
    mods.immersiveengineering.crusher.recipeBuilder()
        .input(item('tfc:wood/sapling/' + var))
        .output(item('thermalfoundation:material', 816))
        .secondaryOutput(item('minecraft:stick'), 0.25)
        .energy(1600)
        .register()

    // Trapdoor Recycling
    mods.thermalexpansion.sawmill.recipeBuilder()
        .input(item('tfc:wood/trapdoor/' + var))
        .output(item('tfc:wood/lumber/' + var) * 2)
        .energy(1600)
        .register()
    
    // Barrel Recycling
    mods.thermalexpansion.sawmill.recipeBuilder()
        .input(item('tfc:wood/barrel/' + var))
        .output(item('tfc:wood/lumber/' + var) * 7)
        .energy(1600)
        .register()

    // Log Cutting
    mods.thermalexpansion.sawmill.recipeBuilder()
        .input(item('tfc:wood/log/' + var))
        .output(item('tfc:wood/lumber/' + var) * 12, item('tfcreborncore:item/wood_powder'))
        .chance(25)
        .energy(1600)
        .register()

    // Door Recycling
    mods.thermalexpansion.sawmill.recipeBuilder()
        .input(item('tfc:wood/door/' + var))
        .output(item('tfc:wood/lumber/' + var) * 3)
        .energy(1600)
        .register()
    
    // Slab Recycling
    mods.thermalexpansion.sawmill.recipeBuilder()
        .input(item('tfc:slab/wood/' + var))
        .output(item('tfc:wood/lumber/' + var) * 2)
        .energy(1600)
        .register()

    // Boat Recycling
    mods.thermalexpansion.sawmill.recipeBuilder()
        .input(item('tfc:wood/boat/' + var))
        .output(item('tfc:wood/lumber/' + var) * 5)
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