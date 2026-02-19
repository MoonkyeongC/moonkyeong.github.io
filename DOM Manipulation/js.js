// display corresponding content when button is clicked
function showFilter() {
    document.getElementById("filterContent").style.display = "block";
    document.getElementById("newContent").style.display = "none";
}
function showAddNew() {
    document.getElementById("filterContent").style.display = "none";
    document.getElementById("newContent").style.display = "flex";
}

// checkboxes
function filterArticles() {
    // get all checkboxes
    let opinionCheck = document.getElementById("opinionCheckbox").checked;
    let recipeCheck = document.getElementById("recipeCheckbox").checked;
    let updateCheck = document.getElementById("updateCheckbox").checked;

    // get all articles
    let articles = document.querySelectorAll("article");

    // loop through each article
    articles.forEach(article => {
        if (article.classList.contains("opinion") && opinionCheck) {
            article.style.display = "block";
        }
        else if (article.classList.contains("recipe") && recipeCheck) {
            article.style.display = "block";
        }
        else if (article.classList.contains("update") && updateCheck) {
            article.style.display = "block";
        }
        else {
            article.style.display = "none";
        }
    })
}

function addNewArticle() {
    // user input into input header
    let title = document.getElementById("inputHeader").value;

    // text from textarea
    let text = document.getElementById("inputArticle").value;

    // check which radio is selected
    let opinion = document.getElementById("opinionRadio").checked;
    let recipe = document.getElementById("recipeRadio").checked;
    let life = document.getElementById("lifeRadio").checked;

    // assign class
    let articleClass = "";
    let markerText = "";
    if (opinion) {
        articleClass = "opinion";
        markerText = "Opinion";
    } else if (recipe) {
        articleClass = "recipe";
        markerText = "Recipe";
    } else if (life) {
        articleClass = "update";
        markerText = "Update";
    }

    // create new article element
    var articleList = document.getElementById("articleList");
    var newArticle = document.createElement("article");

    // add class based on type
    newArticle.className = articleClass;

    // build html structure of article
    newArticle.innerHTML = 
        '<span class="marker">' + markerText + '</span>' +
        '<h2>' + title + '</h2>' +
        '<p>' + text + '</p>' +
        '<p><a href="moreDetails.html">Read more...</a></p>';

    // add to page
    articleList.appendChild(newArticle);

    // // re-apply filters to show/hide based on current checkbox settings
    filterArticles();
}