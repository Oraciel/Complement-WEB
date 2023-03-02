function onLoad(){
    defineHeading3();
    swapInnerHTML();
    dateAlter();
    let para = document.getElementById("days-remaining");
    para.addEventListener("click", getNbDays);
    updateGraphicClock();
    let p = document.getElementById("input");
    p.addEventListener("change", isEntryText);
    let menu = document.getElementsByClassName("menu");
    for (let i = 0; i < menu.length; i++) {
        menuClick(menu[i]);
    }
}

function defineHeading1() {
    var h1 = document.getElementById("title");
    document.title = h1.textContent;
}

function defineHeading2() {
    var h2 = document.querySelector("h2");
    document.title = h2.textContent;
}

function defineHeading3() {
    let nbh2 = document.getElementsByTagName("h2");
    if (nbh2.length === 0) {
        document.title = "Dacheville Vincent";
    } else {
        document.title = nbh2[nbh2.length - 1].innerHTML;
    }
}

function defineHeading4() {
    let nbClass = document.getElementsByClassName("firstOrLast");
    if (nbClass.length === 0) {
        document.title = "Dacheville Vincent";
    }
    else {
        if (nbClass.length%2===0) {
            document.title = nbClass[0].innerHTML;
            }
        if (nbClass.length%2===1) {
            document.title = nbClass[nbClass.length - 1].innerHTML;
        }
    }
}

function swapInnerHTML(){
    let para = document.getElementsByTagName("p");
    let temp = para[0].innerHTML;
    para[0].innerHTML = para[1].innerHTML;
    para[1].innerHTML = temp;
}

function dateAlter(){
    let info = document.getElementById("update-date");
    let today = new Date();
    let date = today.toLocaleDateString("fr-FR", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    let author = document.getElementsByName("author");
    let txt = "Dernière modification : le " + date + " par " + author[0].content;;
    info.innerHTML = txt;
}

function getNbDays() {
    let p = document.getElementById("days-remaining");
    let currentDate = new Date();
    let targetDate = new Date("July 19, " + currentDate.getFullYear());
    let remainingDays = Math.ceil((targetDate - currentDate) / (1000 * 60 * 60 * 24));

    if (remainingDays === 1) {
        p.innerHTML = "Il reste " + remainingDays + " jour avant le 19 juillet " + currentDate.getFullYear();
    } else {
        p.innerHTML = "Il reste " + remainingDays + " jours avant le 19 juillet " + currentDate.getFullYear();
    }
}

function updateClock1() {
    let p = document.getElementById("clock");
    setInterval(function () {
        let currentDate = new Date();
        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes();
        let seconds = currentDate.getSeconds();
        let txt = "Il est " + hours + "h" + minutes + "m" + seconds + "s";
        p.innerHTML = txt;
    }, 1000);
}

function updateClock2() {
    let p = document.getElementById("clock");
    window.setTimeout(function () {
        let currentDate = new Date();
        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes();
        let seconds = currentDate.getSeconds();
        let txt = "Il est " + hours + "h" + minutes + "m" + seconds + "s";
        p.innerHTML = txt;
    }, 1000);

}

function updateGraphicClock(){
    let p = document.getElementById("clock");

    setInterval(function () {
        let currentDate = new Date();
        let hoursFirstNumber = 0;
        let hoursSecondNumber = 0;
        let minutesFirstNumber = 0;
        let minutesSecondNumber = 0;
        let secondsFirstNumber = 0;
        let secondsSecondNumber = 0;
        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes();
        let seconds = currentDate.getSeconds();

        hours = hours.toString();
        if (hours.length === 1) {
            hoursFirstNumber = "0";
            hoursSecondNumber = hours;
        }
        else {
            hoursFirstNumber = hours[0];
            hoursSecondNumber = hours[1];
        }

        minutes = minutes.toString();
        if (minutes.length === 1) {
            minutesFirstNumber = "0";
            minutesSecondNumber = minutes;
        }
        else {
            minutesFirstNumber = minutes[0];
            minutesSecondNumber = minutes[1];
        }

        seconds = seconds.toString();
        if (seconds.length === 1) {
            secondsFirstNumber = "0";
            secondsSecondNumber = seconds;
        }
        else {
            secondsFirstNumber = seconds[0];
            secondsSecondNumber = seconds[1];
        }

        let hoursImg = "<img src=\"../assets/images/" + hoursFirstNumber + ".gif\" alt=\"\"/>" + "<img src=\"../assets/images/" + hoursSecondNumber + ".gif\" alt=\"\"/>";
        let hoursWord = "<p>H</p>";
        let minutesImg = "<img src=\"../assets/images/" + minutesFirstNumber + ".gif\" alt=\"\"/>" + "<img src=\"../assets/images/" + minutesSecondNumber + ".gif\" alt=\"\"/>";
        let minutesWord = "<p>M</p>";
        let secondsImg = "<img src=\"../assets/images/" + secondsFirstNumber + ".gif\" alt=\"\"/>" + "<img src=\"../assets/images/" + secondsSecondNumber + ".gif\" alt=\"\"/>";
        let secondsWord = "<p>S</p>";
        p.innerHTML = hoursImg + hoursWord + minutesImg + minutesWord + secondsImg + secondsWord
    }
    , 1000);
}

function isEntryText(){
    let p = document.getElementById("input");
    if (p.value.length === 0) {
        p.className = "white";
    }
    else if (/\d/.test(p.value)){
        p.className = "green";
    }
    else {
        p.className = "red";
    }
}

function menuClick(menu){
    menu.addEventListener("click", function () {
        let menuChildren = menu.getElementsByTagName("li");
        let menuAside = menu.getElementsByTagName("aside");
        let asideImg = menuAside[0].getElementsByTagName("img");
        for (let i = 0; i < menuChildren.length; i++) {
            if (menuChildren[i].style.display === "block") {
                menuChildren[i].style.display = "none";
                menuAside[0].className = "asideAlone";
                asideImg[0].src = "../assets/images/plus.gif";
            }
            else {
                menuChildren[i].style.display = "block";
                menuAside[0].className = "aside";
                asideImg[0].src = "../assets/images/minus.gif";
            }
        }
    }
    );
}

let originalPage = null;

function search() {
    const searchText = document.getElementById("search").value.trim();
    // .trim() supprime les espaces en début et fin de chaîne

    if (!searchText) {
        alert("Veuillez entrer un texte à rechercher.");
        return;
    }

    if (!originalPage) {
        const body = document.getElementsByTagName("body")[0];
        originalPage = body.innerHTML;
    } else {
        const body = document.getElementsByTagName("body")[0];
        body.innerHTML = originalPage;
    }

    const nodesToCheck = [document.body];
    let currentNode;
    let i;

    while (currentNode = nodesToCheck.pop()) {
        if (currentNode.nodeType === Node.TEXT_NODE) {
            const nodeText = currentNode.textContent.trim().toLowerCase();
            const index = nodeText.indexOf(searchText.toLowerCase());

            if (index >= 0) {
                const span = document.createElement("span");
                span.classList.add("highlight");

                const before = currentNode.splitText(index);
                const after = before.splitText(searchText.length);
                const highlighted = before.cloneNode(true);

                span.appendChild(highlighted);
                currentNode.parentNode.replaceChild(span, before);
            }
        } else if (currentNode.nodeType === Node.ELEMENT_NODE) {
            for (i = 0; i < currentNode.childNodes.length; i++) {
                nodesToCheck.push(currentNode.childNodes[i]);
            }
        }
    }
}



