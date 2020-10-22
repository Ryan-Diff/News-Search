export const getNews = (search) => {
    return fetch(`https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=${search}&apiKey=${process.env.API_KEY}`, {
        header: {
            Origin: null
        }
    })
    .then(res => res.json())
    .then(json => json.articles.map(article => ({
        title: article.title,
        author: article.author,
        description: article.description
    })));
};