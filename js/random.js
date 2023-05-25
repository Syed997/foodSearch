function getRandom(){
    fetch('https://randomuser.me/api/?results=5')
    .then(res =>res.json())
    .then(data => displayData(data));
}
getRandom();
function displayData(data){
    const dataObj = data.results;
    const ul = document.getElementById('container');
    console.log(dataObj);
    for(const user of dataObj){
        const li = document.createElement('li');
        li.innerText = `name: ${user.name.title}. ${user.name.first} ${user.name.last}
        email: ${user.email}`;
        ul.appendChild(li);
    }
}