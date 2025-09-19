// const loadBtn = document.getElementById("loadBtn");
const imageContainer=document.getElementById("postsContainer");

// loadBtn.addEventListener("click", fetchImages);

async function fetchImages() {
    try {
        const response = await fetch("https://picsum.photos/v2/list?page=2&limit=12");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        // console.log(data)
        // const list=data.message;
        data.forEach(img=>{
            const img1=document.createElement("img");
            img1.src=img.download_url;
            img1.alt=img.author;
            img1.style.height="250px";
            img1.style.width="250px";
            img1.style.borderRadius="8px";
            img1.style.padding="2px";
            // img.classList.add("divi");
            imageContainer.appendChild(img1);
        })

    } catch (error) {
        console.log(error);
    }
}
fetchImages();

