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

    const ores = [
        "poor",
        "normal",
        "rich",
        "bituminous_coal",
        "lignite",
        "gypsum",
        "graphite",
        "sulfur",
        "cinnabar",
        "cryolite",
        "saltpeter",
        "sylvite",
        "borax",
        "halite",
        "amethyst",
        "diamond",
        "emerald",
        "lapis_lazuli",
        "opal",
        "pyrite",
        "ruby",
        "sapphire",
        "topaz"
    ];

    // Allows tfc ores to drop experience in a balanced way :~)
    for(const mineral of ores) {
        event.addBlockLootModifier(new RegExp(".*ore\/.*" + mineral))
            .pool(p => {
                p.randomChance(0.75);
                p.dropExperience(1);
            })
            .pool(p => {
                p.randomChance(0.25);
                p.dropExperience(1);
            })
    }
})