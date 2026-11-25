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
    event.remove({id: 'tfc_ie_addon:anvil/aluminum_rod'})
    event.remove({id: 'tfc_ie_addon:fermenter/snowberry'})
    event.remove({id: 'tfc_ie_addon:fermenter/bunchberry'})
    event.remove({id: 'tfc_ie_addon:fermenter/carrot'})
    event.remove({id: 'tfc_ie_addon:fermenter/beet'})
    event.remove({id: 'tfc_ie_addon:fermenter/green_apple'})
    event.remove({id: 'tfc_ie_addon:fermenter/sugarcane'})
    event.remove({id: 'tfc_ie_addon:fermenter/elderberry'})
    event.remove({id: 'tfc_ie_addon:fermenter/grains'})
    event.remove({id: 'tfc_ie_addon:fermenter/red_apple'})
    event.remove({id: 'tfc_ie_addon:fermenter/blueberry'})
    event.remove({id: 'tfc_ie_addon:fermenter/cloudberry'})
    event.remove({id: 'tfc_ie_addon:fermenter/gooseberry'})
    event.remove({id: 'tfc_ie_addon:fermenter/orange'})
    event.remove({id: 'tfc_ie_addon:fermenter/plum'})
    event.remove({id: 'tfc_ie_addon:fermenter/green_bean'})
    event.remove({id: 'tfc_ie_addon:fermenter/raspberry'})
    event.remove({id: 'tfc_ie_addon:fermenter/potato'})
    event.remove({id: 'tfc_ie_addon:fermenter/raw_honey'})
    event.remove({id: 'tfc_ie_addon:fermenter/peach'})
    event.remove({id: 'tfc_ie_addon:fermenter/cherry'})
    event.remove({id: 'tfc_ie_addon:fermenter/soybean'})
    event.remove({id: 'tfc_ie_addon:fermenter/blackberry'})
    event.remove({id: 'tfc_ie_addon:fermenter/squash'})
    event.remove({id: 'tfc_ie_addon:fermenter/lemon'})
    event.remove({id: 'tfc_ie_addon:fermenter/wintergreen_berry'})
    event.remove({id: 'tfc_ie_addon:fermenter/cranberry'})
    event.remove({id: 'tfc_ie_addon:fermenter/banana'})
    event.remove({id: 'tfc_ie_addon:fermenter/strawberry'})
    event.remove({id: 'tfc_ie_addon:fermenter/cabbage'})
    event.remove({id: 'tfc_ie_addon:heating/slag'})

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

    // Diesel Distillation
    event.custom({
        type: 'createdieselgenerators:distillation',
        ingredients: [
            {
                fluidTag: 'forge:crude_oil',
                amount: 60
            }
        ],
        heatRequirement: 'heated',
        processingTime: 100,
        results: [
            {
                fluid: 'immersivepetroleum:lubricant',
                amount: 10
            },
            {
                fluid: 'immersivepetroleum:diesel_sulfur',
                amount: 30
            },
            {
                fluid: 'immersivepetroleum:kerosene',
                amount: 20
            },
            {
                fluid: 'immersivepetroleum:naphtha',
                amount: 15
            }
        ]
    })
})