
function searchFood(){
    const food = document.getElementById('default-search');
    const foodName = food.value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
    .then(res => res.json())
    .then(data => displayFood(data.meals));
}
function displayFood(name){
    
}
