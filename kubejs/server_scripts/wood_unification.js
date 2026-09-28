ServerEvents.recipes(event => {
    const lychee = event.recipes.lychee

    for (const wood in global.trees) {
        let t = global.trees[wood]

        // Stripped Log/Wood
        event.remove({id: `tfc_debark:bark/${wood}_log`})
        event.remove({id: `tfc_debark:bark/${wood}_wood`})
        lychee.block_interacting(
            '#tfc:axes_that_log', 
            BlockPredicate.of(`${t.mod_id}:wood/log/${wood}`)
        ).post([ 
            Post.drop_item(Item.of(`tfc_debark:${wood}_bark`)).withChance(0.5),
            Post.place(`${t.mod_id}:wood/stripped_log/${wood}`),
            Post.add_item_cooldown(1),
            Post.damage_item()
        ])
        lychee.block_interacting(
            '#tfc:axes_that_log', 
            BlockPredicate.of(`${t.mod_id}:wood/wood/${wood}`)
        ).post([ 
            Post.drop_item(Item.of(`tfc_debark:${wood}_bark`)).withChance(0.5),
            Post.place(`${t.mod_id}:wood/stripped_wood/${wood}`),
            Post.add_item_cooldown(1),
            Post.damage_item()
        ])
        
        event.remove({id: `survivorsdelight:cutting/tfc/strip_wood/${wood}_log`})
        event.remove({id: `survivorsdelight:cutting/tfc/strip_wood/${wood}_wood`})
        event.remove({id: `tfc_debark:bark/compat/farmersdelight/${wood}_log`})
        event.remove({id: `tfc_debark:bark/compat/farmersdelight/${wood}_wood`})
        event.recipes.farmersdelight.cutting(
            `${t.mod_id}:wood/log/${wood}`,
            '#tfc:axes_that_log',
            [
                `${t.mod_id}:wood/stripped_log/${wood}`,
                Item.of(`tfc_debark:${wood}_bark`)
                    .withChance(0.5)
            ],
            'minecraft:item.axe.strip'
        )
        event.recipes.farmersdelight.cutting(
            `${t.mod_id}:wood/wood/${wood}`,
            '#tfc:axes_that_log',
            [
                `${t.mod_id}:wood/stripped_wood/${wood}`,
                Item.of(`tfc_debark:${wood}_bark`)
                    .withChance(0.5)
            ],
            'minecraft:item.axe.strip'
        )

        // Support
        event.remove({id: `tfc:crafting/wood/${wood}_support`})
        event.remove({id: `tfc_lumberjack:support_from_log/${wood}`})
        lychee.block_interacting(
            '#tfc:axes_that_log', 
            BlockPredicate.of(`${t.mod_id}:wood/stripped_log/${wood}`)
        ).post([ 
            Post.drop_item(Item.of(`${t.mod_id}:wood/support/${wood}`, 2)),
            Post.place('minecraft:air'),
            Post.add_item_cooldown(1),
            Post.damage_item()
        ])
        lychee.block_interacting(
            '#tfc:axes_that_log', 
            BlockPredicate.of(`${t.mod_id}:wood/stripped_wood/${wood}`)
        ).post([ 
            Post.drop_item(Item.of(`${t.mod_id}:wood/support/${wood}`, 2)),
            Post.place('minecraft:air'),
            Post.add_item_cooldown(1),
            Post.damage_item()
        ])
        event.recipes.farmersdelight.cutting(
            `${t.mod_id}:wood/stripped_log/${wood}`,
            '#tfc:axes_that_log',
            [
                Item.of(`${t.mod_id}:wood/support/${wood}`, 2)
            ],
            'minecraft:block.wood.hit'
        )
        event.recipes.farmersdelight.cutting(
            `${t.mod_id}:wood/stripped_wood/${wood}`,
            '#tfc:axes_that_log',
            [
                Item.of(`${t.mod_id}:wood/support/${wood}`, 2)
            ],
            'minecraft:block.wood.hit'
        )

        // Lumber
        event.remove({id: `tfc:crafting/wood/${wood}_lumber_log`})
        lychee.block_interacting(
            '#tfc:saws', 
            BlockPredicate.of(`${t.mod_id}:wood/stripped_log/${wood}`)
        ).post([ 
            Post.drop_item(Item.of(`${t.mod_id}:wood/lumber/${wood}`, 4)),
            Post.drop_item(Item.of(`tfc_lumberjack:sawdust`)),
            Post.place('minecraft:air'),
            Post.add_item_cooldown(1),
            Post.damage_item()
        ])
        lychee.block_interacting(
            '#tfc:saws', 
            BlockPredicate.of(`${t.mod_id}:wood/stripped_wood/${wood}`)
        ).post([ 
            Post.drop_item(Item.of(`${t.mod_id}:wood/lumber/${wood}`, 4)),
            Post.drop_item(Item.of(`tfc_lumberjack:sawdust`)),
            Post.place('minecraft:air'),
            Post.add_item_cooldown(1),
            Post.damage_item()
        ])
        event.recipes.farmersdelight.cutting(
            `${t.mod_id}:wood/stripped_log/${wood}`,
            '#tfc:saws',
            [
                Item.of(`${t.mod_id}:wood/lumber/${wood}`, 4),
                Item.of(`tfc_lumberjack:sawdust`)
            ],
            'minecraft:block.wood.hit'
        )
        event.recipes.farmersdelight.cutting(
            `${t.mod_id}:wood/stripped_wood/${wood}`,
            '#tfc:saws',
            [
                Item.of(`${t.mod_id}:wood/lumber/${wood}`, 4),
                Item.of(`tfc_lumberjack:sawdust`)
            ],
            'minecraft:block.wood.hit'
        )
    }
})