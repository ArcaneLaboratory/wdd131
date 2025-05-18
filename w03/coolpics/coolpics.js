const menu = document.getElementById("menu");
const menuButton = document.getElementById("menu_button");
const gallery = document.querySelector(".gallery");

function toggleMenu(){
    menu.classList.toggle("hide");
}

function resizePage(){
    if (window.innerWidth > 1000){
        for (var image of images){
            image.src = "images/norris-full.jpeg";
        } 
    } else {
        for (var image of images){
            image.src = "images/norris-sm.jpeg";
        } 
    }
}

function openViewer(){
    const src = event.target.closest("img").src.split("-")[0] + "-full.jpeg";
    const alt = event.target.closest("img").alt;
    document.body.insertAdjacentHTML('afterbegin',
        `<dialog>
            <button class="close-viewer">X</button>
            <img src="${src}" alt="${alt}">
        </dialog>`
    )
    const dialog = document.querySelector("dialog");
    dialog.showModal();
    dialog.addEventListener("click", (event) => {
        if(event.target === dialog){
            dialog.close();
        }
    })
    const closeButton = document.querySelector(".close-viewer");
    closeButton.addEventListener("click", (event) => {
        dialog.close();
    }
    )
}

menuButton.addEventListener("click", toggleMenu);
window.addEventListener("resize", resizePage);
gallery.addEventListener("click", openViewer);
