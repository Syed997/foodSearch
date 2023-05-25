function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data));
}
loadPosts();
function displayPost(data){
    const postContainer = document.getElementById('post_constainer');
    for(const post of data){
        const div = document.createElement('div');
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `;
        postContainer.appendChild(div);
    }
}