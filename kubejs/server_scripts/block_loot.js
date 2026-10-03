LootJS.modifiers((event) => {

    // Sandy Shrub
    event.addBlockLootModifier('farmersdelight:sandy_shrub')
        .replaceLoot('minecraft:beetroot_seeds', 'tfc:seeds/beet', true)

    // Wild Cabbage
    event.addBlockLootModifier('farmersdelight:wild_cabbages')
        .replaceLoot('farmersdelight:cabbage', 'tfc:food/cabbage', true)
        .replaceLoot('farmersdelight:cabbage_seeds', 'tfc:seeds/cabbage', true)

    // Wild Onion
    event.addBlockLootModifier('farmersdelight:wild_onions')
        .replaceLoot('farmersdelight:onion', 'tfc:food/onion', true)

    // Tomato Shrub
    event.addBlockLootModifier('farmersdelight:wild_tomatoes')
        .replaceLoot('farmersdelight:tomato', 'tfc:food/tomato', true)
        .replaceLoot('farmersdelight:tomato_seeds', 'tfc:seeds/tomato', true)

    // Wild Carrot
    event.addBlockLootModifier('farmersdelight:wild_carrots')
        .replaceLoot('minecraft:carrot', 'tfc:food/carrot', true)

    // Wild Potato
    event.addBlockLootModifier('farmersdelight:wild_potatoes')
        .replaceLoot('minecraft:potato', 'tfc:food/potato', true)

    // Sea Beet
    event.addBlockLootModifier('farmersdelight:wild_beetroots')
        .replaceLoot('minecraft:beetroot', 'tfc:food/beet', true)
        .replaceLoot('minecraft:beetroot_seeds', 'tfc:seeds/beet', true)

    // Wild Rice
    event.addBlockLootModifier('farmersdelight:wild_rice')
        .replaceLoot('farmersdelight:rice', 'tfc:food/rice', true)

    // Adds approximetly 1/1111 chance for raw 
    // TFC rock blocks to drop an uncut gem.
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

    const ore_grades = [
        'poor',
        'normal',
        'rich'
    ]

    // Allows TFC ores to drop experience
    // and be affected by fortune
    for(const mineral in global.fortune_ores) {
        let m = global.fortune_ores[mineral]

        if (m.is_graded) {
            for (const grade of ore_grades) {
                event.addBlockLootModifier(new RegExp(`${m.mod_id}:ore/${grade}_${mineral}.*`))
                    .removeLoot(`${m.mod_id}:ore/${grade}_${mineral}`)
                    .pool(p => {
                        p.addLoot(`${m.mod_id}:ore/${grade}_${mineral}`)
                        p.applyOreBonus('minecraft:fortune');
                    })
                    .pool(p => {
                        p.randomChance(0.75);
                        p.dropExperience(1);
                    })
                    .pool(p => {
                        p.randomChance(0.25);
                        p.dropExperience(1);
                    });
            }
        } else {
            event.addBlockLootModifier(new RegExp(`${m.mod_id}:ore/${mineral}.*`))
                .removeLoot(`${m.mod_id}:ore/${mineral}`)
                .pool(p => {
                    p.addLoot(`${m.mod_id}:ore/${mineral}`)
                    p.applyOreBonus('minecraft:fortune');
                })
                .pool(p => {
                    p.randomChance(0.75);
                    p.dropExperience(1);
                })
                .pool(p => {
                    p.randomChance(0.25);
                    p.dropExperience(1);
                });
        }
    }
})