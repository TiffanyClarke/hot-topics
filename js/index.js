const btns = document.querySelectorAll("header nav ul li a button");
const container = document.querySelector("main .container");
let urlHome = "./partials/home.html";
let urlPortfolio = "./partials/portfolio.html";


/*function loadContent(urlValue) {
	fetch(urlValue)
		.then()
		.then()
		.catch();
}

function handleClick(ev) {
	ev.preventDefault();
	let clickedLink = ev.target;
	url = clickedLink.href;
	loadContent(url);
}*/

function homeLoad(){
    fetch(urlHome)
            .then(function(response){
                return response.text();
             })
            .then(function(homeContent){
                container.innerHTML = homeContent;
            })
            .catch(function(err){
                console.log(err.message);
            });
}

function showContent (e) {
    let clickedBtn = e.target;
    let btnLabel = clickedBtn.textContent;
    
    
    if (btnLabel === "Home") {
        fetch(urlHome)
            .then(function(response){
                return response.text();
             })
            .then(function(homeContent){
                container.innerHTML = homeContent;
            })
            .catch(function(err){
                console.log(err.message);
            });
    } else if(btnLabel === "Portfolio") {
        fetch(urlPortfolio)
            .then(function(response){
                return response.text();
            })
            .then(function(portContent){
                container.innerHTML = portContent;
            })
            .catch(function(err){
                console.log(err.message);
            })
    }
}


for (let btn of btns) {
	btn.addEventListener("click", showContent);
}