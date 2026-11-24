StartupEvents.registry('fluid', event => {

    // Nitrate Solution
    event.create('nitrate_solution')
        .thinTexture(0xFFF9BF)
        .bucketColor(0xFFF9BF)
        .tag('tfc:usable_in_wooden_bucket')
        .tag('tfc:usable_in_red_steel_bucket')
        .tag('tfc:usable_in_barrel')
})