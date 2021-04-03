

let menuItem = {
    name: 'Kale Caesar Salad',
    nickName: 'All Hail Kale',
    referenceID: 'SLD001',
    description: 'Kale is king in this hearty, flavorful salad that pays homage to the traditional - but with a healthy twist',
    highInCalories: false,
    ingredients: ['Kale', 'Caesar dressing', 'Anchovy paste', 'Grilled corn', 'Parmesan cheese', 'Croutons'],
    numIngredients: function() {
    return this.ingredients.length;
    }
    }


// add year menu item added (salad 2017)

menuItem.yearAdded = 2017;


//add time meal served (salad lunch + dinner)

menuItem.timeServed = ['lunch', 'dinner'];

// change low/high calories to number of calories (salad 560 cal) - use delete or overwrite somehow?

delete menuItem.highInCalories
menuItem.numberOfCalories = 560;

// remove nickname

delete menuItem.nickName

// add lemon to list of ingredients

menuItem.ingredients.push('lemon')





console.log("\n\n******menuItem Object******");
Object.entries(menuItem).forEach(([key, value]) => {
if (key != 'numIngredients')
console.log(`${key}: ${value}`)
});
console.log(`Number of ingredients = ${menuItem.numIngredients()}`);