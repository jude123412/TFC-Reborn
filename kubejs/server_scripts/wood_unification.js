ServerEvents.recipes(event => {
    const lychee = event.recipes.lychee

    for (const wood in global.trees) {
        let t = global.trees[wood]

        event.remove({id: `tfc:crafting/wood/${wood}_support`})
        event.remove({id: `tfc_lumberjack:support_from_log/${wood}`})
        lychee.block_interacting(
            '#tfc:axes_that_log', 
            BlockPredicate.of(`${t.mod_id}:wood/stripped_log/${wood}`)
        ).post([ 
            Post.drop_item(Item.of(`${t.mod_id}:wood/support/${wood}`, 2)),
            Post.place("minecraft:air"),
            Post.add_item_cooldown(1),
            Post.damage_item()
        ])
        lychee.block_interacting(
            '#tfc:axes_that_log', 
            BlockPredicate.of(`${t.mod_id}:wood/stripped_wood/${wood}`)
        ).post([ 
            Post.drop_item(Item.of(`${t.mod_id}:wood/support/${wood}`, 2)),
            Post.place("minecraft:air"),
            Post.add_item_cooldown(1),
            Post.damage_item()
        ])

        event.remove({id: `tfc:crafting/wood/${wood}_lumber_log`})
        lychee.block_interacting(
            '#tfc:saws', 
            BlockPredicate.of(`${t.mod_id}:wood/stripped_log/${wood}`)
        ).post([ 
            Post.drop_item(Item.of(`${t.mod_id}:wood/lumber/${wood}`, 4)),
            Post.place("minecraft:air"),
            Post.add_item_cooldown(1),
            Post.damage_item()
        ])
        lychee.block_interacting(
            '#tfc:saws', 
            BlockPredicate.of(`${t.mod_id}:wood/stripped_wood/${wood}`)
        ).post([ 
            Post.drop_item(Item.of(`${t.mod_id}:wood/lumber/${wood}`, 4)),
            Post.place("minecraft:air"),
            Post.add_item_cooldown(1),
            Post.damage_item()
        ])
    }
})