import { getArticles, useArticles, saveArticle, getSingleArticle, editArticle } from "./ArticleProvider.js";
/*
    A bunch of input boxes related to the note information
*/
const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".articleFormContainer");

eventHub.addEventListener("click", clickEvent => {

    // let modalBtn = document.getElementById("modalButton")
    let modal = document.querySelector(".modal")
    // let closeBtn = document.querySelector(".close-btn")

    if (clickEvent.target.id === "modalButton" || clickEvent.target.id.startsWith("editArticle--")) {
        modal.style.display = "block"
    }

    if (clickEvent.target.id === "close-btn") {
        modal.style.display = "none"
    }

    const articleTitle = document.querySelector("#articleForm--title")
    const articleContent = document.querySelector("#articleForm--synopsis")
    const articleURL = document.querySelector("#articleForm--URL")

    if (clickEvent.target.id === "saveArticle") {


        if (articleTitle.value !== "0" && articleContent.value !== "0" && articleURL.value !== "0") {
            const newArticle = {
                userId: parseInt(sessionStorage.getItem('activeUser')),
                newsTitle: articleTitle.value,
                newsContent: articleContent.value,
                newsURL: articleURL.value,
                date: Date.now()
            }
            articleTitle.value = "";
            articleContent.value = "";
            articleURL.value = "";
            saveArticle(newArticle);
            modal.style.display = "none";


        } else {
            window.alert("Please Fill Out All Fields");
        }

    }

    if (clickEvent.target.id.startsWith("editedArticle")) {

        const [prefix, id] = clickEvent.target.id.split("--")
        const editedArticle = {
            userId: sessionStorage.getItem('activeUser'),
            id: id,
            newsTitle: articleTitle.value,
            newsContent: articleContent.value,
            newsURL: articleURL.value,
            date: Date.now()
        }
        articleTitle.value = "";
        articleContent.value = "";
        articleURL.value = "";
        editArticle(editedArticle.id, editedArticle);
        modal.style.display = "none";

    }

})



export const ArticleForm = () => {
    getArticles()
        .then(() => {
            render(useArticles());
        })

}

// action refers to the action of clicking the save or new article buttons; 
// isShown is stating that the modal is NOT shown on page load; and articleObject as the 3rd parameter
// is there for the purpose of fetching the article object by id when the edit button is clicked.

const render = (action, isShown = false, articleObject = {}) => {
    contentTarget.innerHTML = `    
        <button id="modalButton">New Article</button>
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
    let modal = document.querySelector(".modal")
    if (isShown) {
        modal.style.display = "block"
    }

    const articleTitle = document.querySelector("#articleForm--title")
    const articleContent = document.querySelector("#articleForm--synopsis")
    const articleURL = document.querySelector("#articleForm--URL")

    articleTitle.value = articleObject.newsTitle;
    articleContent.value = articleObject.newsContent;
    articleURL.value = articleObject.newsURL;

    if (articleObject.id === undefined) {
        articleTitle.value = "";
        articleContent.value = "";
        articleURL.value = "";
    }
}



eventHub.addEventListener("click", clickEvent => {

    if (clickEvent.target.id === "modalButton") {
        render("saveArticle", true,);
    }

    if (clickEvent.target.id.startsWith("editArticle--")) {
        const [prefix, id] = clickEvent.target.id.split("--")
        getSingleArticle(id).then((singleArticle) => {
            render(`editedArticle--${id}`, true, singleArticle);
        })
    }

})
