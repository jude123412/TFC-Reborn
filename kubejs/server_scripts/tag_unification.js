// These need to be run before other recipes
ServerEvents.tags('item', event => {
    
    // Add glue to slimeballs tag
    event.add('forge:slimeballs', 'tfc:glue')
})