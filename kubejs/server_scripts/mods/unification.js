TFCEvents.data(event => {
    for (const metal in global.metals) {
        let m = global.metals[metal]
        event.itemHeat(`kubejs:metal/plate/${metal}`, m.capacity, m.work, m.weld)
    }
})

ServerEvents.recipes(event => {
    const tfc = event.recipes.tfc
    for (const metal in global.metals) {
        let m = global.metals[metal]

        tfc.anvil(
            TFC.itemStackProvider.of(`kubejs:metal/plate/${metal}`).copyHeat(),
            `#forge:ingots/${metal}`,
        [
            'hit_third_last',
            'hit_second_last',
            'hit_last'
        ]
        ).tier(m.tier)

        tfc.heating(`kubejs:metal/plate/${metal}`, m.melt)
            .resultFluid(Fluid.of(m.fluid, 100))
    }
})

ServerEvents.tags('item', event => {
    for (const metal in global.metals) {
        let m = global.metals[metal]

        if (m.extra_tags) {
            for (const t of m.extra_tags)
            event.add(`forge:plates/${t}`, `kubejs:metal/plate/${metal}`)
        }
    }
})