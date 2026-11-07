LootJS.modifiers((event) => {

    // Adds approximetly 1/1111 chance for raw 
    // TFC rock blocks to drop an uncut gem.
    // Yes, I'm brining it back...

    const rockGems = {
        granite: [
            'tfc:ore/emerald',
            'tfc:ore/sapphire'
        ],
        diorite: [
            'tfc:ore/emerald',
            'tfc:ore/sapphire'
        ],
        gabbro: [
            'tfc:ore/emerald',
            'tfc:ore/diamond',
            'tfc:ore/sapphire'
        ],
        shale: [
            'tfc:ore/amethyst',
            'tfc:ore/opal',
            'tfc:ore/sapphire',
            'tfc:ore/topaz'
        ],
        claystone: [
            'tfc:ore/amethyst',
            'tfc:ore/opal',
            'tfc:ore/sapphire',
            'tfc:ore/topaz'
        ],
        limestone: [
            'tfc:ore/lapis_lazuli',
            'tfc:ore/amethyst',
            'tfc:ore/opal',
            'tfc:ore/sapphire',
            'tfc:ore/topaz'
        ],
        conglomerate: [
            'tfc:ore/amethyst',
            'tfc:ore/opal',
            'tfc:ore/sapphire',
            'tfc:ore/topaz'
        ],
        dolomite: [
            'tfc:ore/amethyst',
            'tfc:ore/opal',
            'tfc:ore/sapphire',
            'tfc:ore/topaz'
        ],
        chert: [
            'tfc:ore/amethyst',
            'tfc:ore/opal',
            'tfc:ore/sapphire',
            'tfc:ore/topaz'
        ],
        chalk: [
            'tfc:ore/amethyst',
            'tfc:ore/opal',
            'tfc:ore/sapphire',
            'tfc:ore/topaz'
        ],
        rhyolite: [
            'tfc:ore/opal',
            'tfc:ore/sapphire'
        ],
        basalt: [
            'tfc:ore/opal',
            'tfc:ore/sapphire'
        ],
        andesite: [
            'tfc:ore/opal',
            'tfc:ore/sapphire'
        ],
        dacite: [
            'tfc:ore/opal',
            'tfc:ore/sapphire'
        ],
        quartzite: [
            'tfc:ore/amethyst',
            'tfc:ore/sapphire',
            'tfc:ore/topaz'
        ],
        slate: [
            'tfc:ore/amethyst',
            'tfc:ore/sapphire',
            'tfc:ore/topaz'
        ],
        phyllite: [
            'tfc:ore/amethyst',
            'tfc:ore/sapphire',
            'tfc:ore/topaz'
        ],
        schist: [
            'tfc:ore/amethyst',
            'tfc:ore/sapphire',
            'tfc:ore/topaz'
        ],
        gneiss: [
            'tfc:ore/amethyst',
            'tfc:ore/sapphire',
            'tfc:ore/topaz'
        ],
        marble: [
            'tfc:ore/lapis_lazuli',
            'tfc:ore/amethyst',
            'tfc:ore/ruby',
            'tfc:ore/sapphire',
            'tfc:ore/topaz'
        ],
    }

    for (const rock in rockGems) {
        let gems = rockGems[rock]
        let chance = 0.0009 / gems.length

        let modifier = event.addBlockLootModifier(`tfc:rock/raw/${rock}`)

        let entries = []

        for (let gem of gems) {
            entries.push(
                LootEntry.of(gem).when(c => c.randomChance(chance))
            )
        }

        modifier.addAlternativesLoot(entries)
    }
})