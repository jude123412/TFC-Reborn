JEIEvents.removeCategories(event => {

    // Uncomment to view all categories from jei
    // under logs/kubejs/client.log
    // console.log(event.categoryIds)

    // Hidden Buildcraft Recipe Categories
    event.remove('buildcraftfactory:distillation')
    event.remove('buildcraftfactory:heat_exchange')
})