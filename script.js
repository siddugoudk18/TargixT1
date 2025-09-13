const loadBtn = document.getElementById("loadBtn");
const postsContainer = document.getElementsById("postsContainer");

if(loadBtn){
    loadBtn.addEventListener("click",fetchPosts);
}

async function fetchPosts(){
    postsContainer.Container.innerHTML = "<p>Loading...</p>";

    try { 
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");

        if(!response.ok) {
            throw new Error("Network response was not ok");
        }
        const posts = await response.json();
    
    posts.Container.innerHTML = "";
    posts.forEach(post=> { 
        const div = document.createElement("div");
        div.classList.add("post");
        div.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
        posts.container.appendChild(div);
    });
}
catch(error) { 
    postsContainer.innerHTML = `<p class="error"> Failed to load posts: ${error.message}</p>`;
}
}
