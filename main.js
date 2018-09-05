let buttons = document.querySelectorAll("#butt"),
    quote1 = document.getElementById("quote1"),
    quote2 = document.getElementById("quote2"),
    quote3 = document.getElementById("quote3");

    buttons[0].addEventListener("click", (e) => {
        quote1.style.display = "block";
        if (quote1.style.display = "block") {
            quote2.style.display = "none";
            quote3.style.display = "none";
            buttons[0].className = "current";
            buttons[1].className = "";
            buttons[2].className = "";
        }
    });

    buttons[1].addEventListener("click", (e) => {
        quote1.style.display = "block";
        if (quote2.style.display = "block") {
            quote1.style.display = "none";
            quote3.style.display = "none";
            buttons[1].className = "current";
            buttons[2].className = "";
            buttons[0].className = "";
        }
    });

    buttons[2].addEventListener("click", (e) => {
        quote1.style.display = "block";
        if (quote3.style.display = "block") {
            quote1.style.display = "none";
            quote2.style.display = "none";
            buttons[2].className = "current";
            buttons[0].className = "";
            buttons[1].className = "";
        }
    });