/*
map over an array and display all articles from Note.js
*/

import { getArticles, useArticles, deleteArticle } from "./ArticleProvider.js";
import { ArticleHTMLConverter } from "./Article.js";

const contentTarget = document.querySelector(".articleListContainer")
const eventHub = document.querySelector(".container")

const render = (articles) => {

    contentTarget.innerHTML = articles.map((articleObject) => {
        // return articleObject.id === parseInt(articleObject.id)
        return ArticleHTMLConverter(articleObject)
    })
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
        deleteArticle(id).then(
            () => {
                const updatedArticles = useArticles()
                render(updatedArticles)
            }
        )
    }
})