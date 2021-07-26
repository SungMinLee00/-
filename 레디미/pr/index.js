var index = 1;
document.getElementById("left").addEventListener("click", left_click);
document.getElementById("right").addEventListener("click", right_click);
const textStatus = document.createElement("div");
const textTitle = document.createElement("div");
const textDescription = document.createElement("div");
const img = document.createElement("img");
const currentSee = document.createElement("h");
const Quality = document.createElement("div");
const Season = document.createElement("div");
const Year = document.createElement("div");
const userName = document.createElement("h");
const userImg = document.createElement("h");


api_call();
function api_call() {
    fetch("http://3.37.140.20:5000/api/v1/movie/"+index)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            userName.textContent = localStorage.getItem('userName');
            userImg.textContent = localStorage.getItem('userImg');

            textStatus.textContent = data.status;
            textTitle.textContent = data.data.title;
            textDescription.textContent = data.data.description;
            img.src = data.data.image;
            currentSee.textContent = data.data.current_see;
            Quality.textContent = data.data.quality;
            Season.textContent = data.data.season;
            Year.textContent = data.data.year;


            const title = document.getElementById("Crown");
            title.appendChild(textTitle);

            const des = document.getElementById("des")
            des.appendChild(textDescription);

            const IMG = document.getElementById("g");
            IMG.appendChild(img);

            const current_see = document.getElementById("play1_");
            current_see.appendChild(currentSee);

            const quality = document.getElementById("ult");
            quality.appendChild(Quality);

            const season = document.getElementById("season");
            season.appendChild(Season);

            const year = document.getElementById("year")
            year.appendChild(Year);

            const lee = document.getElementById("lee")
            lee.appendChild(userName);

            const userI = document.getElementById("person1")
            userI.src = userImg.textContent;
        }).catch(error => { console.log(error) })
}

function left_click() {
    if (index == 1) {
        index = 3;
        
    }
    else if (index == 2) {
        index = 1;
    }
    else if (index == 3) {
        index = 2;
    }
    api_call();
}


function right_click() {
    if (index == 1) {
        index = 2;
    }
    else if (index == 2) {
        index = 3;
    }
    else if (index == 3) {
        index = 1;
    }
    api_call();
}


