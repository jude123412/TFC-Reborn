// Metals
global.metals = {
    copper: {
        tier: 1,
        melt: 1080,
        capacity: 2.857,
        work: 648,
        weld: 864,
        fluid: 'tfc:metal/copper',
        generate_plate: true,
        generate_gear: true
    },
    aluminum: {
        tier: 1,
        melt: 650,
        capacity: 2.857,
        work: 390,
        weld: 520,
        fluid: 'tfc_ie_addon:metal/aluminum',
        generate_plate: true,
        generate_gear: false
    },
    lead: {
        tier: 2,
        melt: 500,
        capacity: 2.857,
        work: 300,
        weld: 400,
        fluid: 'tfc_ie_addon:metal/lead',
        generate_plate: true,
        generate_gear: true
    },
    silver: {
        tier: 2,
        melt: 961,
        capacity: 2.083,
        work: 577,
        weld: 769,
        fluid: 'tfc:metal/silver',
        generate_plate: true,
        generate_gear: true
    },
    nickel: {
        tier: 1,
        melt: 1453,
        capacity: 2.083,
        work: 872,
        weld: 1162,
        fluid: 'tfc:metal/nickel',
        generate_plate: true,
        generate_gear: true
    },
    uranium: {
        tier: 3,
        melt: 1250,
        capacity: 2.857,
        work: 750,
        weld: 1000,
        fluid: 'tfc_ie_addon:metal/uranium',
        generate_plate: true,
        generate_gear: false
    },
    constantan: {
        tier: 2,
        melt: 750,
        capacity: 2.857,
        work: 450,
        weld: 600,
        fluid: 'tfc_ie_addon:metal/constantan',
        generate_plate: true,
        generate_gear: false
    },
    electrum: {
        tier: 3,
        melt: 900,
        capacity: 2.857,
        work: 540,
        weld: 720,
        fluid: 'tfc_ie_addon:metal/electrum',
        generate_plate: true,
        generate_gear: false
    },
    steel: {
        tier: 4,
        melt: 1540,
        capacity: 2.857,
        work: 924,
        weld: 1232,
        fluid: 'tfc:metal/steel',
        generate_plate: true,
        generate_gear: true
    },
    wrought_iron: {
        tier: 3,
        melt: 1535,
        capacity: 2.857,
        work: 921,
        weld: 1228,
        fluid: 'tfc:metal/cast_iron',
        extra_tags: ['iron'],
        generate_plate: true,
        generate_gear: true
    },
    gold: {
        tier: 1,
        melt: 1060,
        capacity: 1.667,
        work: 636,
        weld: 848,
        fluid: 'tfc:metal/gold',
        generate_plate: true,
        generate_gear: true
    },
    tin: {
        tier: 1,
        melt: 230,
        capacity: 7.143,
        work: 138,
        weld: 184,
        fluid: 'tfc:metal/tin',
        generate_plate: true,
        generate_gear: true
    },
    zinc: {
        tier: 1,
        melt: 420,
        capacity: 4.762,
        work: 252,
        weld: 336,
        fluid: 'tfc:metal/zinc',
        generate_plate: true,
        generate_gear: true
    },
    brass: {
        tier: 2,
        melt: 930,
        capacity: 2.857,
        work: 558,
        weld: 744,
        fluid: 'tfc:metal/brass',
        generate_plate: true,
        generate_gear: true
    },
    bronze: {
        tier: 2,
        melt: 950,
        capacity: 2.857,
        work: 570,
        weld: 760,
        fluid: 'tfc:metal/bronze',
        generate_plate: true,
        generate_gear: true
    },
    invar: {
        tier: 3,
        melt: 1535,
        capacity: 2.083,
        work: 910,
        weld: 1200,
        fluid: 'rosia:invar_fluid',
        generate_plate: true,
        generate_gear: true
    },
    red_steel: {
        tier: 3,
        melt: 1540,
        capacity: 2.857,
        work: 924,
        weld: 1232,
        fluid: 'tfc:metal/red_steel',
        generate_plate: true,
        generate_gear: false
    },
    chromium: {
        tier: 4,
        melt: 1250,
        capacity: 2.857,
        work: 750,
        weld: 1000,
        fluid: 'firmalife:metal/chromium',
        generate_plate: false,
        generate_gear: false
    },
    cast_iron: {
        tier: 1,
        melt: 1535,
        capacity: 2.857,
        work: 921,
        weld: 1228,
        fluid: 'tfc:metal/cast_iron',
        generate_plate: false,
        generate_gear: false
    },
    bismuth: {
        tier: 1,
        melt: 270,
        capacity: 7.143,
        work: 162,
        weld: 216,
        fluid: 'tfc:metal/bismuth',
        generate_plate: false,
        generate_gear: false
    }
}

// Trees/Woods
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
    }
}

// Metallic ores
global.metal_ores = {
    chromite: {
        mod_id: 'firmalife',
        metal: 'chromium',
        generate_powder: true,
        generate_pellet: true,
        should_melt: true
    },
    bauxite: {
        mod_id: 'tfc_ie_addon',
        metal: 'aluminum',
        generate_pellet: true,
        should_melt: true,
        create_recipes: true
    },
    galena: {
        mod_id: 'tfc_ie_addon',
        metal: 'lead',
        generate_pellet: true,
        should_melt: true,
        create_recipes: true
    },
    uraninite: {
        mod_id: 'tfc_ie_addon',
        metal: 'uranium',
        generate_pellet: true,
        should_melt: true,
        create_recipes: true
    },
    native_copper: {
        mod_id: 'tfc',
        metal: 'copper',
        generate_pellet: true,
        create_recipes: true
    },
    native_gold: {
        mod_id: 'tfc',
        metal: 'gold',
        generate_pellet: true,
        create_recipes: true
    },
    hematite: {
        mod_id: 'tfc',
        metal: 'cast_iron',
        generate_pellet: true,
        create_recipes: true
    },
    native_silver: {
        mod_id: 'tfc',
        metal: 'silver',
        generate_pellet: true,
        create_recipes: true
    },
    cassiterite: {
        mod_id: 'tfc',
        metal: 'tin',
        generate_pellet: true,
        create_recipes: true
    },
    bismuthinite: {
        mod_id: 'tfc',
        metal: 'bismuth',
        generate_pellet: true,
        create_recipes: true
    },
    garnierite: {
        mod_id: 'tfc',
        metal: 'nickel',
        generate_pellet: true,
        create_recipes: true
    },
    malachite: {
        mod_id: 'tfc',
        metal: 'copper',
        generate_pellet: true,
        create_recipes: true
    },
    magnetite: {
        mod_id: 'tfc',
        metal: 'cast_iron',
        generate_pellet: true,
        create_recipes: true
    },
    limonite: {
        mod_id: 'tfc',
        metal: 'cast_iron',
        generate_pellet: true,
        create_recipes: true
    },
    sphalerite: {
        mod_id: 'tfc',
        metal: 'zinc',
        generate_pellet: true,
        create_recipes: true
    },
    tetrahedrite: {
        mod_id: 'tfc',
        metal: 'copper',
        generate_pellet: true,
        create_recipes: true
    }
}