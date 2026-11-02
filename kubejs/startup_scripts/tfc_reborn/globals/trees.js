global.trees = {
    ash: {
        mod_id: 'tfc',
        generate_bark: false
    },
    acacia: {
        mod_id: 'tfc',
        generate_bark: false
    },
    aspen: {
        mod_id: 'tfc',
        generate_bark: false
    },
    birch: {
        mod_id: 'tfc',
        generate_bark: false
    },
    blackwood: {
        mod_id: 'tfc',
        generate_bark: false
    },
    chestnut: {
        mod_id: 'tfc',
        generate_bark: false
    },
    douglas_fir: {
        mod_id: 'tfc',
        generate_bark: false
    },
    hickory: {
        mod_id: 'tfc',
        generate_bark: false
    },
    kapok: {
        mod_id: 'tfc',
        generate_bark: false
    },
    mangrove: {
        mod_id: 'tfc',
        generate_bark: false
    },
    maple: {
        mod_id: 'tfc',
        generate_bark: false
    },
    oak: {
        mod_id: 'tfc',
        generate_bark: false
    },
    palm: {
        mod_id: 'tfc',
        generate_bark: false
    },
    pine: {
        mod_id: 'tfc',
        generate_bark: false
    },
    rosewood: {
        mod_id: 'tfc',
        generate_bark: false
    },
    sequoia: {
        mod_id: 'tfc',
        generate_bark: false
    },
    sycamore: {
        mod_id: 'tfc',
        generate_bark: false
    },
    spruce: {
        mod_id: 'tfc',
        generate_bark: false
    },
    white_cedar: {
        mod_id: 'tfc',
        generate_bark: false
    },
    willow: {
        mod_id: 'tfc',
        generate_bark: false
    },
    baobab: {
        mod_id: 'afc',
        generate_bark: true
    },
    eucalyptus: {
        mod_id: 'afc',
        generate_bark: true
    },
    mahogany: {
        mod_id: 'afc',
        generate_bark: true
    },
    hevea: {
        mod_id: 'afc',
        generate_bark: true
    },
    tualang: {
        mod_id: 'afc',
        generate_bark: true
    },
    teak: {
        mod_id: 'afc',
        generate_bark: true
    },
    cypress: {
        mod_id: 'afc',
        generate_bark: true
    },
    fig: {
        mod_id: 'afc',
        generate_bark: true
    },
    ironwood: {
        mod_id: 'afc',
        generate_bark: true
    },
    ipe: {
        mod_id: 'afc',
        generate_bark: true
    },
    crimson: {
        mod_id: 'beneath',
        generate_bark: true
    },
    warped: {
        mod_id: 'beneath',
        generate_bark: true
    }
}

// This global is intended to make adding new wood types easier
// by automatically generating recipes based on the supplied data.
//
// If you need to add an additional wood variant without generating
// new lumber recipes, use livingwood and glimmering_livingwood as
// examples. The order is important: the primary wood must come first,
// followed by any variants.
global.integration_trees = {
    livingwood: {
        mod_id: 'botania',
        log: 'botania:livingwood_log',
        wood: 'botania:livingwood',
        stripped_log: 'botania:stripped_livingwood_log',
        stripped_wood: 'botania:stripped_livingwood',
        planks: 'botania:livingwood_planks',
        stairs: 'botania:livingwood_planks_stairs',
        fence: 'botania:livingwood_fence',
        fence_gate: 'botania:livingwood_fence_gate',
        support: 'kubejs:wood/support/livingwood',
        lumber: 'kubejs:wood/lumber/livingwood',
        bark: 'tfc_debark:livingwood_bark',
        bark_powder: 'tfc_debark:livingwood_bark_powder',
        plank_recipe_id: 'botania:livingwood_planks',
        stairs_recipe_id: 'botania:livingwood_planks_stairs',
        fence_recipe_id: 'botania:livingwood_planks_stairs',
        fence_gate_recipe_id: 'botania:livingwood_fence_gate',
        generate_components: true
    },
    glimmering_livingwood: {
        mod_id: 'botania',
        log: 'botania:glimmering_livingwood_log',
        wood: 'botania:glimmering_livingwood',
        stripped_log: 'botania:glimmering_stripped_livingwood_log',
        stripped_wood: 'botania:glimmering_stripped_livingwood',
        planks: null,
        stairs: null,
        fence: null,
        fence_gate: null,
        support: 'kubejs:wood/support/livingwood',
        lumber: 'kubejs:wood/lumber/livingwood',
        bark: 'tfc_debark:livingwood_bark',
        bark_powder: 'tfc_debark:livingwood_bark_powder',
        plank_recipe_id: null,
        stairs_recipe_id: null,
        fence_recipe_id: null,
        fence_gate_recipe_id: null,
        generate_components: false
    }
}