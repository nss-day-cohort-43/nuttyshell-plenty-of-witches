/*
hold on to array of articles
useArticles - makes copy of array of articles and returns
get all the articles from DB
add a article to the DB
*/

let articles = [];

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const articleStateChangedEvent = new CustomEvent("articleStateChanged")

    eventHub.dispatchEvent(articleStateChangedEvent)
}

export const useArticles = () => {
    return articles.slice();
}

export const getArticles = () => {
    return fetch('http://localhost:8088/articles')
        .then(response => response.json())
        .then(parsedArticles => {
            articles = parsedArticles
        })

}

export const saveArticle = articleObj => {
    return fetch("http://localhost:8088/articles", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(articleObj)
    })
        .then(() => {
            return getArticles()
        })
        .then(dispatchStateChangeEvent)
}


//button click
//reference specific article by the id
//removed from api
//get all articles
//display articles

export const deleteArticle = articleId => {
    return fetch(`http://localhost:8088/articles/${articleId}`, {
        method: "DELETE"
    })
        .then(getArticles)
}

export const editArticle = (articleId, articleObj) => {
    return fetch(`http://localhost:8088/articles/${articleId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(articleObj)
    })
        .then(() => {
            return getArticles()
        })
        .then(dispatchStateChangeEvent)
}