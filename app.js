const API_KEY = "29fd0495db6c4ee0ad74d1f73dd54909";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchNews("todays news"));

function reload() {
    window.location.reload();
}

async function fetchNews(query) {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    console.log(data);
    bindData(data.articles);  
}

function bindData(articles) {
    const cardsContainer = document.getElementById("cards-container");
    const newsCardTemplete = document.getElementById("template-news-card");
    
    cardsContainer.innerHTML = '';

    articles.forEach((article) => { 
        if (!article.urlToImage) return;
        const cardClone = newsCardTemplete.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone, article) {
    const newsImg = cardClone.querySelector('#news-img');
    const newsTitle = cardClone.querySelector('#news-title');
    const newsSourse = cardClone.querySelector('#news-sourse');
    const newsDesc = cardClone.querySelector('#news-desc');

    newsImg.src = article.urlToImage;
    newsTitle.innerHTMl = article.title;
    newsDesc.innerHTML = article.description;
   
    const date = new Date(article.publishedAt).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    });

    newsSourse.innerHTML = `${article.source.name}${date}`;
    cardClone.firstElementChild.addEventListener("click", () => {
        window.open(article.url,"_blank");

    });
}

let curSelectedNav = null;
function onNavItemClick(id) {
    fetchNews(id);
    const navItem = document.getElementById(id);
    curSelectedNav?.classList.remove('active');
    curSelectedNav = navItem;
    curSelectedNav.classList.add('active');
}

const searchButton = document.getElementById('search-button');

const searchText = document.getElementById('search-text');

searchButton.addEventListener('click', () => { 
    const query = searchText.value;
    if (!query) return;
    fetchNews(query);
    curSelectedNav?.classList.remove("active");
    curSelectedNav = null;

});
// console.log(newsTitle);