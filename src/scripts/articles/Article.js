/*
Take articles made and prepare to display on website
*/

export const ArticleHTMLConverter = (articleObject) => {
    return `
		<section class="article">
			<div class="article--timestamp">Date: ${new Date(articleObject.date).toLocaleDateString('en-US')}</div>
            <div class="article--title">News Title: ${articleObject.newsTitle}</div>
            <div class="article--content">Synopsis: ${articleObject.newsSynopsis}</div>
            <div class="article--url">URL: ${articleObject.newsURL}</div>
            <button id="deleteArticle--${articleObject.id}" class="deleteArticleButton">Delete</button>
            <button id="editArticle--${articleObject.id}" class="editArticleButton">Edit</button>
        </section>
    `
}
