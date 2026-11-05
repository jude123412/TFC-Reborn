ServerEvents.recipes(event => {
    event.remove({id: 'tfc_ie_addon:crusher/ingot_iron'})

    // Distilled Water
    event.remove({id: 'immersivetechnology:distiller/water'})
    event.custom({
        type: 'immersivetechnology:distiller',
        energy: 10000,
        input: {
            amount: 1000,
            tag: 'tfc:any_water'
        },
        item_output: {
            chance: 0.5,
            item: 'tfc:powder/salt'
        },
        result:{
            amount: 500,
            fluid: 'immersivetechnology:distilled_water'
        },
        time: 20
    })
})