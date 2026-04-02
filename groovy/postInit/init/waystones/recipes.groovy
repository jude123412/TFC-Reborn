crafting.removeByOutput(item('waystones:waystone'))
crafting.removeByOutput(item('waystones:return_scroll'))
crafting.removeByOutput(item('waystones:bound_scroll'))
crafting.removeByOutput(item('waystones:warp_scroll'))
crafting.removeByOutput(item('waystones:warp_stone'))

// Waystone
crafting.shapedBuilder()
    .output(item('waystones:waystone'))
    .shape([
        [null,ore('stoneBrick'),null],
        [ore('stoneBrick'),item('waystones:warp_stone'),ore('stoneBrick')],
        [ore('stoneBrick'),ore('stoneBrick'),ore('stoneBrick')]
    ])
    .register()

// Return Scroll
crafting.shapedBuilder()
    .output(item('waystones:return_scroll') * 4)
    .shape([
        [ore('dyePurple'),ore('gemChipped'),ore('dyePurple')],
        [ore('paper'),ore('paper'),ore('paper')]
    ])
    .register()

// Bound Scroll
crafting.shapedBuilder()
    .output(item('waystones:bound_scroll') * 4)
    .shape([
        [ore('dyePurple'),ore('gemFlawed'),ore('dyePurple')],
        [ore('paper'),ore('paper'),ore('paper')]
    ])
    .register()

// Warp Scroll
crafting.shapedBuilder()
    .output(item('waystones:warp_scroll') * 4)
    .shape([
        [ore('dyePurple'),ore('gemNormal'),ore('dyePurple')],
        [ore('paper'),ore('paper'),ore('paper')]
    ])
    .register()

// Warp Stone
crafting.shapedBuilder()
    .output(item('waystones:warp_stone'))
    .shape([
        [ore('rock'),ore('dyePurple'),ore('rock')],
        [ore('dyePurple'),ore('gemNormal'),ore('dyePurple')],
        [ore('rock'),ore('dyePurple'),ore('rock')]
    ])
    .register()