LootJS.modifiers((event) => {
    // Matches any loot table that contains "chests" in its path (vanilla and modded dungeons)
    event.addLootTableModifier(/.*:chests\/.*/)
        .replaceLoot('tfc:metal/double_ingot/wrought_iron', 'tfc:metal/double_ingot/cast_iron', true)
        .replaceLoot('minecraft:iron_ingot', 'tfc:metal/ingot/cast_iron', true)
        .replaceLoot('minecraft:gold_ingot', 'tfc:metal/ingot/gold', true)
});