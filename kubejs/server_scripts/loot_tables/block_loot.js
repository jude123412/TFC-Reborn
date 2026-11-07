LootJS.modifiers((event) => {

    // Barrel
    event.addBlockLootModifier('minecraft:barrel')
        .removeLoot('tfc:wood/lumber/oak')
        .addLoot('minecraft:barrel')

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