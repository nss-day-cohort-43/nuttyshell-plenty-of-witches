import { getArticles, useArticles, saveArticle } from "./ArticleProvider.js";
/*
    A bunch of input boxes related to the note information
*/
const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".articleFormContainer");

eventHub.addEventListener("click", clickEvent => {
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
        <div class="newArticle">
            <h2 class="articleFormHeading">NEW ARTICLE</h2>
            <textarea id="articleForm--title" class="articleForm articleFormTitle" placeholder="[Title]"></textarea>
            <textarea id="articleForm--synopsis" class="articleForm articleFormSynopsis" placeholder="[Synopsis]"></textarea>
            <textarea id="articleForm--URL" class="articleForm articleFormURL" placeholder="[URL]"></textarea>
            <button id="saveArticle" class="articleForm saveArticleButton">Save</button>
        </div>
		
    `
}

export const ArticleForm = () => {
    getArticles()
        .then(() => {
            render(useArticles());
        })

}