var recipes_data = [];
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
    const obj = Object.entries(JSON.parse(this.responseText))[5][1];
    // console.log(obj);
    var i;
    	for (i = 0; i < obj.length; i++) {
    	  let data = {
    	    rowId: i,
    	    image: obj[i]["recipe"]["image"],
    	    ingredientLines: obj[i]["recipe"]["ingredientLines"],
    	    label: obj[i]["recipe"]["label"],
    	    totalTime: obj[i]["recipe"]["totalTime"],
    	    url: obj[i]["recipe"]["url"],
    	    yield_: obj[i]["recipe"]["yield"]
    	  };
	
    recipes_data.push(data);

	}
  console.log(recipes_data);
  displayRecipes(recipes_data);
}
});

xhr.open("GET", "https://edamam-recipe-search.p.rapidapi.com/search?q=pasta");
xhr.setRequestHeader("x-rapidapi-key", "");
xhr.setRequestHeader("x-rapidapi-host", "edamam-recipe-search.p.rapidapi.com");

xhr.send(data);





function displayRecipes(recipes_data) {
  var j;
  var x ="";
  for(j = 0; j < recipes_data.length; j++) {
    x = x + "<div class='a_post' id=" + recipes_data[j]['rowId'] + " onclick='openOverlay("+ recipes_data[j]['rowId']+ " )'> <img id='img' src= " +recipes_data[j]['image'] + "> <div> <h1 class='name'> " + recipes_data[j]['label'] + "</h1> </div></div>";
  }
  document.getElementById("posts_wrapper").innerHTML = x;
	console.log(recipes_data);
}


function closeOverlay() {
  document.getElementById("overlay").className = "hidden";
}


function openOverlay(id) {
	console.log(recipes_data);
	var ingredient_list="<ul>";
	var j;
	for(j = 0; j < recipes_data[id]['ingredientLines'].length; j++) {
		ingredient_list = ingredient_list + "<li> " + recipes_data[id]['ingredientLines'][j] + "</li>";
	}
	ingredient_list=ingredient_list+"</ul>";

	console.log(ingredient_list);
	document.getElementById('recipe_name').innerHTML = recipes_data[id]['label'];
	document.getElementById('serving').innerHTML = 'Serves ' + recipes_data[id]['yield_'];
	document.getElementById('ingredients').innerHTML = ingredient_list;
	document.getElementById('food_img').src =  recipes_data[id]['image'];
	document.getElementById('full_recipe').href = recipes_data[id]['url'];
	document.getElementById("overlay").className = "visible";

}
