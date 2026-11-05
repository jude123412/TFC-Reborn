ServerEvents.recipes(event => {
    event.remove({id: 'tfc_ie_addon:crusher/ingot_iron'})
    event.remove({id: 'tfc_ie_addon:crafting/copper_sheet_to_plate'})
    event.remove({id: 'tfc_ie_addon:crafting/aluminum_sheet_to_plate'})
    event.remove({id: 'tfc_ie_addon:crafting/lead_sheet_to_plate'})
    event.remove({id: 'tfc_ie_addon:crafting/silver_sheet_to_plate'})
    event.remove({id: 'tfc_ie_addon:crafting/nickel_sheet_to_plate'})
    event.remove({id: 'tfc_ie_addon:crafting/uranium_sheet_to_plate'})
    event.remove({id: 'tfc_ie_addon:crafting/constantan_sheet_to_plate'})
    event.remove({id: 'tfc_ie_addon:crafting/electrum_sheet_to_plate'})
    event.remove({id: 'tfc_ie_addon:crafting/steel_sheet_to_plate'})
    event.remove({id: 'tfc_ie_addon:crafting/wrought_iron_sheet_to_plate'})
    event.remove({id: 'tfc_ie_addon:metalpress/plate_wrought_iron'})
    event.remove({id: 'tfc_ie_addon:crafting/gold_sheet_to_plate'})

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