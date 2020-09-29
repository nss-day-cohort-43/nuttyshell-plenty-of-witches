import { getArticles, useArticles, saveArticle } from "./ArticleProvider.js";
/*
    A bunch of input boxes related to the note information
*/
const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".articleFormContainer");

eventHub.addEventListener("click", clickEvent => {
    console.log(clickEvent.target.id);

    // let modalBtn = document.getElementById("modal-btn")
    let modal = document.querySelector(".modal")
    // let closeBtn = document.querySelector(".close-btn")

    if (clickEvent.target.id === "modal-btn") {
        modal.style.display = "block"
    }

    if (clickEvent.target.id === "close-btn") {
        modal.style.display = "none"
    }


    if (clickEvent.target.id === "saveArticle") {

        const articleTitle = document.querySelector("#articleForm--title")
        const articleContent = document.querySelector("#articleForm--synopsis")
        const articleURL = document.querySelector("#articleForm--URL")

        if (articleTitle.value !== "0" && articleContent.value !== "0" && articleURL.value !== "0") {
            const newArticle = {
                userId: sessionStorage.getItem('activeUser'),
                newsTitle: articleTitle.value,
                newsContent: articleContent.value,
                newsURL: articleURL.value,
                date: Date.now()
            }
            articleTitle.value = "";
            articleContent.value = "";
            articleURL.value = "";
            saveArticle(newArticle);


        } else {
            window.alert("Please Fill Out All Fields");
        }

    }
})


// const render = () => {
//     contentTarget.innerHTML = `
//         <button id="modal-btn">New Article</button>
//         <div class="modal">
//             <div class="modal-content">
//                 <span id="close-btn" class="close-button">&times;</span> 
//                 <div class="newArticle">                       
//                     <textarea id="articleForm--title" class="articleForm articleFormTitle" placeholder="[Title]"></textarea>
//                     <textarea id="articleForm--synopsis" class="articleForm articleFormSynopsis" placeholder="[Synopsis]"></textarea>
//                     <textarea id="articleForm--URL" class="articleForm articleFormURL" placeholder="[URL]"></textarea>
//                     <button id="saveArticle" class="articleForm saveArticleButton">Save</button>
//                 </div>                                                   
//             </div>
//         </div>        

//     `
// }

export const ArticleForm = () => {
    getArticles()
        .then(() => {
            render(useArticles());
        })

}



const render = (action) => {
    contentTarget.innerHTML = `
        <button id="modal-btn">New Article</button>
        <div class="modal">
            <div class="modal-content">
                <span id="close-btn" class="close-button">&times;</span> 
                <div class="newArticle">                       
                    <textarea id="articleForm--title" class="articleForm articleFormTitle" placeholder="[Title]"></textarea>
                    <textarea id="articleForm--synopsis" class="articleForm articleFormSynopsis" placeholder="[Synopsis]"></textarea>
                    <textarea id="articleForm--URL" class="articleForm articleFormURL" placeholder="[URL]"></textarea>
                    <button id="${action}" class="articleForm saveArticleButton">Save</button>
                </div>                                                   
            </div>
        </div>        
            		
    `
}


eventHub.addEventListener("click", clickEvent => {

    if (clickEvent.target.id === "modal-btn") {
        render("saveArticle");
    }

    if (clickEvent.target.id.startsWith("editArticle--")) {
        const [prefix, id] = clickEvent.target.id.split("--")
        render(`editedArticle--${id}`);
    }

})