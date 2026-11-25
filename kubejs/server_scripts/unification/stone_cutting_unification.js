ServerEvents.recipes(event => {

    // Helper Function to make adding
    // block conversion recipes to the 
    // stonecutter
    function addStonecuttingRecipes(outputs, inputs) {
        outputs.forEach(output => {
            inputs.forEach(input => {
                event.stonecutting(output, input)
            })
        })
    }

    // Block of Coal Coke
    addStonecuttingRecipes(
        [
            'immersiveengineering:coke',
            'railcraft:coal_coke_block',
            'kubejs:coal_coke_block'
        ],
        [
            '#forge:storage_blocks/coal_coke'
        ]
    )

    // Block of Lead
    addStonecuttingRecipes(
        [
            'immersiveengineering:storage_lead',
            'railcraft:lead_block'
        ],
        [
            '#forge:storage_blocks/lead'
        ]
    )

    // Block of Nickel
    addStonecuttingRecipes(
        [
            'immersiveengineering:storage_nickel',
            'railcraft:nickel_block'
        ],
        [
            '#forge:storage_blocks/nickel'
        ]
    )

    // Block of Silver
    addStonecuttingRecipes(
        [
            'immersiveengineering:storage_silver',
            'railcraft:silver_block'
        ],
        [
            '#forge:storage_blocks/silver'
        ]
    )

    // Block of Tin
    addStonecuttingRecipes(
        [
            'railcraft:tin_block'
        ],
        [
            '#forge:storage_blocks/tin'
        ]
    )

    // Block of Zinc
    addStonecuttingRecipes(
        [
            'create:zinc_block',
            'railcraft:zinc_block'
        ],
        [
            '#forge:storage_blocks/zinc'
        ]
    )

    // Block of Steel
    addStonecuttingRecipes(
        [
            'immersiveengineering:storage_steel',
            'railcraft:steel_block'
        ],
        [
            '#forge:storage_blocks/steel'
        ]
    )

    // Block of Brass
    addStonecuttingRecipes(
        [
            'create:brass_block',
            'railcraft:brass_block'
        ],
        [
            '#forge:storage_blocks/brass'
        ]
    )

    // Block of Bronze
    addStonecuttingRecipes(
        [
            'railcraft:bronze_block'
        ],
        [
            '#forge:storage_blocks/bronze'
        ]
    )

    // Block of Invar
    addStonecuttingRecipes(
        [
            'railcraft:invar_block'
        ],
        [
            '#forge:storage_blocks/invar'
        ]
    )
})