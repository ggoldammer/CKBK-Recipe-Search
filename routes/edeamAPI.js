require('dotenv').config();

let recipe_APP_ID = process.env.Recipe_APP_ID;
let recipe_APP_KEY = process.env.Recipe_APP_KEY;
let nutrition_APP_ID = process.env.Nutrition_APP_ID;
let nutrition_APP_KEY = process.env.Nutrition_APP_KEY;
let foodDB_APP_ID = process.env.FoodDB_APP_ID;
let foodDB_APP_KEY = process.env.FoodDB_APP_KEY;
let goodStuff = {
    recipeSearch: function (query) {
        let recipeURL = "https://api.edamam.com/search?q=" + "biscuts" + "&app_id=${" + recipe_APP_ID + "}&app_key=${" + recipe_APP_KEY +"}"
        $.ajax({
            url: recipeURL,
            method: "GET"
        }).then(function (res) {
            let recipeRes = res.data
            console.log(recipeRes)
        })
    },
    nutritionSearch: function () {},

    foodDBAPI: function () {}
}
goodStuff.recipeSearch();

module.exports = goodStuff;