import { getArticles, useArticles, saveArticle } from "./ArticleProvider.js";
/*
    A bunch of input boxes related to the note information
*/
const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".articleFormContainer");

eventHub.addEventListener("click", clickEvent => {

    let modalBtn = document.getElementById("modal-btn")
    let modal = document.querySelector(".modal")
    let closeBtn = document.querySelector(".close-btn")

    modalBtn.onclick = function () {
        modal.style.display = "block"
    }
    closeBtn.onclick = function () {
        modal.style.display = "none"
    }
    window.onclick = function (e) {
        if (e.target == modal) {
            modal.style.display = "none"
        }
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


const render = () => {
    contentTarget.innerHTML = `
        <button id="modal-btn">New Article</button>
        <div class="modal">
            <div class="modal-content">
                <div class="newArticle">                       
                    <textarea id="articleForm--title" class="articleForm articleFormTitle" placeholder="[Title]"></textarea>
                    <textarea id="articleForm--synopsis" class="articleForm articleFormSynopsis" placeholder="[Synopsis]"></textarea>
                    <textarea id="articleForm--URL" class="articleForm articleFormURL" placeholder="[URL]"></textarea>
                    <button id="saveArticle" class="articleForm saveArticleButton">Save</button>
                </div>
                <span class="close-btn">&times;</span>                    
            </div>
        </div>        
            		
    `
}

export const ArticleForm = () => {
    getArticles()
        .then(() => {
            render(useArticles());
        })

}