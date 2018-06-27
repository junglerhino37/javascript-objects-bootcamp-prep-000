var meals = { breakfast: "oatmeal", lunch: "turkey sandwich", dinner: "steak and potatoes" };
 
// the `delete` operator returns `true` if it has successfully
// deleted, `false` otherwise
delete meals.dinner; // true
 
meals
// returns { breakfast: "oatmeal", lunch: "turkey sandwich" }