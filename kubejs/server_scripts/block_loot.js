LootJS.modifiers((event) => {
    // Adds an approximetly 1/1111 chance for raw TFC rock blocks to drop an uncut gem.
    // Yes, I'm brining it back...
    event.addBlockLootModifier(/tfc:rock\/raw\/[^_]+$/)
    .addAlternativesLoot(
        LootEntry.of('tfc:ore/amethyst').when((c) => c.randomChance(0.0001)),
        LootEntry.of('tfc:ore/diamond').when((c) => c.randomChance(0.0001)),
        LootEntry.of('tfc:ore/emerald').when((c) => c.randomChance(0.0001)),
        LootEntry.of('tfc:ore/lapis_lazuli').when((c) => c.randomChance(0.0001)),
        LootEntry.of('tfc:ore/opal').when((c) => c.randomChance(0.0001)),
        LootEntry.of('tfc:ore/pyrite').when((c) => c.randomChance(0.0001)),
        LootEntry.of('tfc:ore/ruby').when((c) => c.randomChance(0.0001)),
        LootEntry.of('tfc:ore/sapphire').when((c) => c.randomChance(0.0001)),
        LootEntry.of('tfc:ore/topaz').when((c) => c.randomChance(0.0001))
    );
})