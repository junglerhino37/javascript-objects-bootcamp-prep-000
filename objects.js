var meals = { breakfast: "oatmeal", lunch: "turkey sandwich", dinner: "steak and potatoes" };
 
// the `delete` operator returns `true` if it has successfully
// deleted, `false` otherwise
console.log(delete meals.dinner); // true
 
console.log(meals)
// returns { breakfast: "oatmeal", lunch: "turkey sandwich" }