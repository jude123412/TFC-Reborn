const generatedItems = new Set()

// Keep track of what items 
// have been generated.
// Thanks Copilot <3
global.createIfNeeded = (id, creator) => {
    if (!id.startsWith('kubejs:') || id == null) return
    if (!generatedItems.has(id)) {
        generatedItems.add(id)
        creator()
    }
}