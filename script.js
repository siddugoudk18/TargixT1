const loadBtn=document.getElementById("loadBtn");
const postsContainer=document.getElementById("postsContainer");

if(loadBtn){
    loadBtn.addEventListener("click",fetchposts)
}

async function fetchposts(){
    if(!postsContainer){
        return;
    }
    postsContainer.textContent="There are no posts"

    try{
        const res=await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
        if(!res.ok){
            throw new Error(`{response.Status}`);
        }
        postsContainer.textContent="";

        postsContainer.forEach((p)=>{
            const div=document.getElementById("div");
            div.className="post";

            const h3=document.getElementById("h3");
            h3.textContent=post.title;

            const p=document.getElementById("p");
            p.textContent=post.body;

            div.append(h3);
            div.append(p);

            postsContainer.append(div)
        });
    }
    catch(err){
        postsContainer.textContent="Failed to load posts:`${err.message}`";
        postsContainer.className="error"
    }
}