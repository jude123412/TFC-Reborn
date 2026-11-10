const generatedItems = new Set()

// Keep track of what items 
// have been generated.
// Thanks Copilot <3
global.createIfNeeded = (id, creator) => {
    if (id == null || !id.startsWith('kubejs:')) return
    if (!generatedItems.has(id)) {
        generatedItems.add(id)
        creator()
    }
}

// BuildCraft Assembly recipes have
// a strange energy format. This function should
// make the MJ requirement easier to read
// when creating recipe JSONs.
global.mj = (num) => {
    return num * 1000000
}