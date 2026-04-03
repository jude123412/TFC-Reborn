crafting.removeByOutput(item('openglider:hang_glider_part', 2))

// Scaffolding
crafting.shapedBuilder()
    .output(item('openglider:hang_glider_part', 2))
    .shape([
        [null,ore('stickAnyBronze'),null],
        [ore('stickAnyBronze'),null,ore('stickAnyBronze')],
        [ore('stickAnyBronze'),ore('stickAnyBronze'),ore('stickAnyBronze')]
    ])
    .register()