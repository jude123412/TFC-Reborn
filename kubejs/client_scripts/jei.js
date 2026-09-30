JEIEvents.hideItems(event => {
    const itemTypes = [
        'plates',
        'gears',
        'nuggets'
    ];

    for (const metal in global.metals) {
        let m = global.metals[metal];

        for (const type of itemTypes) {

            // 1. Hide items under the metal’s own tag
            let directTag = Ingredient.of(`#forge:${type}/${metal}`).getItemIds();
            for (let id of directTag) {
                if (!id.includes("kubejs")) {
                    event.hide(id);
                }
            }

            // 2. Hide items under extra tags
            if (m.extra_tags) {
                for (const t of m.extra_tags) {
                    let extraTag = Ingredient.of(`#forge:${type}/${t}`).getItemIds();
                    for (let id of extraTag) {
                        if (!id.includes("kubejs")) {
                            event.hide(id);
                        }
                    }
                }
            }
        }
    }
});
