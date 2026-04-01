import net.minecraftforge.oredict.OreDictionary

// Recipes to remove
def recipesToRemoveByOutput = [
    item('exnihilocreatio:item_material', 6),
    item('exnihilocreatio:item_material', 7),
    item('exnihilocreatio:hammer_wood'),
    item('exnihilocreatio:hammer_stone'),
    item('exnihilocreatio:hammer_iron'),
    item('exnihilocreatio:hammer_diamond'),
    item('exnihilocreatio:hammer_gold'),
    item('exnihilocreatio:item_mesh', 1),
    item('exnihilocreatio:item_mesh', 2),
    item('exnihilocreatio:item_mesh', 3),
    item('exnihilocreatio:item_mesh', 4),
    item('exnihilocreatio:item_material', 1),
    item('exnihilocreatio:block_crucible'),
    item('exnihilocreatio:block_barrel0'),
    item('exnihilocreatio:block_barrel1'),
    item('exnihilocreatio:block_waterwheel'),
    item('exnihilocreatio:block_axle_stone'),
    item('exnihilocreatio:block_auto_sifter'),
    item('exnihilocreatio:block_end_cake'),
    item('exnihilocreatio:block_crucible_wood'),
    item('exnihilocreatio:item_material', 5),
    item('exnihilocreatio:item_doll', OreDictionary.WILDCARD_VALUE)
]

// Recipe Removal
for (output in recipesToRemoveByOutput) {
    crafting.removeByOutput(output)
}

// String Mesh
crafting.shapedBuilder()
    .output(item('exnihilocreatio:item_mesh', 1))
    .shape([
        [ore('string'),ore('string'),ore('string')],
        [ore('string'),ore('string'),ore('string')],
        [ore('string'),ore('string'),ore('string')]
    ])
    .register()

// Flint Mesh
crafting.shapedBuilder()
    .output(item('exnihilocreatio:item_mesh', 2))
    .shape([
        [ore('wireAnyBronze'),ore('wireAnyBronze'),ore('wireAnyBronze')],
        [ore('wireAnyBronze'),item('exnihilocreatio:item_mesh', 1),ore('wireAnyBronze')],
        [ore('wireAnyBronze'),ore('wireAnyBronze'),ore('wireAnyBronze')]
    ])
    .register()

// Iron Mesh
crafting.shapedBuilder()
    .output(item('exnihilocreatio:item_mesh', 3))
    .shape([
        [ore('wireIron'),ore('wireIron'),ore('wireIron')],
        [ore('wireIron'),item('exnihilocreatio:item_mesh', 2),ore('wireIron')],
        [ore('wireIron'),ore('wireIron'),ore('wireIron')]
    ])
    .register()

// Diamond Mesh
crafting.shapedBuilder()
    .output(item('exnihilocreatio:item_mesh', 4))
    .shape([
        [ore('wireSteel'),ore('wireSteel'),ore('wireSteel')],
        [ore('wireSteel'),item('exnihilocreatio:item_mesh', 3),ore('wireSteel')],
        [ore('wireSteel'),ore('wireSteel'),ore('wireSteel')]
    ])
    .register()