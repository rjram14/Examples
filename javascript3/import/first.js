var articles = {}

articles.latestItem = [
    {
        name:'About JavaScript',
        price:989
    },
    {
        name:'About React',
        price:788
    }
]


articles.find = (table) => { return `Select * from ${table}`}

//module.exports = articles;
export default articles;