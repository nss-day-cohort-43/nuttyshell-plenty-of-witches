/*
map over an array and display all articles from Note.js
*/

import { getArticles, useArticles, deleteArticle, editArticle } from "./ArticleProvider.js";
import { ArticleHTMLConverter } from "./Article.js";

const contentTarget = document.querySelector(".articleListContainer")
const eventHub = document.querySelector(".container")
let user = parseInt(sessionStorage.getItem('activeUser'))

eventHub.addEventListener("userAuthenticated", e => {
    const newArticles = useArticles()
    render(newArticles)
})

const render = (articles) => {
    contentTarget.innerHTML = articles.map((articleObject) => {
        if (articleObject.userId === user) {
            return ArticleHTMLConverter(articleObject)
        }
    }).join("")
}

export const ArticleList = () => {
    getArticles()
        .then(() => {
            const articles = useArticles();
            render(articles)
        })
}


eventHub.addEventListener("articleStateChanged", () => {
    const newArticles = useArticles()
    render(newArticles)
})


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteArticle--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useArticles() and render the article list again.
        */

        let areYouSure = confirm("This will permenantly delete your article...")

        if (areYouSure) {
            deleteArticle(id).then(
                () => {
                    const updatedArticles = useArticles()
                    render(updatedArticles)
                }
            )
        }
    }
})