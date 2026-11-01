LootJS.modifiers((event) => {
    // Matches any loot table that contains 'archaeology' in its path (vanilla and modded)
    event.addLootTableModifier(/.*:archaeology\/.*/)
        .replaceLoot('minecraft:wooden_hoe', 'tfc:metal/hoe/copper', true)
        .replaceLoot('minecraft:iron_axe', 'tfc:metal/axe/wrought_iron', true)
        .replaceLoot('minecraft:gold_nugget', 'tfc:ore/small_native_gold', true)
        .replaceLoot('minecraft:wheat', 'tfc:food/wheat', true)
        .replaceLoot('minecraft:wheat_seeds', 'tfc:seeds/wheat', true)
        .replaceLoot('minecraft:beetroot_seeds', 'tfc:seeds/beet', true)

    // Matches any loot table that contains 'entities' in its path (vanilla and modded)
    event.addLootTableModifier(/.*:entities\/.*/)
        .replaceLoot('minecraft:iron_ingot', 'tfc:metal/ingot/cast_iron', true)
        .replaceLoot('minecraft:carrot', 'tfc:food/carrot', true)
        .replaceLoot('minecraft:potato', 'tfc:food/potato', true)
        .replaceLoot('minecraft:iron_shovel', 'tfc:metal/shovel/wrought_iron', true)

    // Matches cat gift pool :D
    event.addLootTableModifier('minecraft:gameplay/cat_morning_gift')
        .replaceLoot('minecraft:chicken', 'tfc:food/chicken')
});