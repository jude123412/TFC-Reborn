JEIEvents.hideItems(event => {
    for (const metal in global.metals) {
        let m = global.metals[metal];

        // 1. Hide items under the metal’s own tag
        let directPlateTag = Ingredient.of(`#forge:plates/${metal}`).getItemIds();
        for (let id of directPlateTag) {
            if (!id.includes("kubejs")) {
                event.hide(id)
            }
        }
        
        // 2. Hide items under extra tags (like iron for wrought iron)
        if (m.extra_tags) {
            for (const t of m.extra_tags) {
                let extraTagItems = Ingredient.of(`#forge:plates/${t}`).getItemIds();
                for (let id of extraTagItems) {
                    if (!id.includes("kubejs")) {
                        event.hide(id);
                    }
                }
            }
        }
    }
})