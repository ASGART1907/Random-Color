
    const container = document.querySelector(".container");
    const spanRight = document.querySelector(".right");
    const spanLeft = document.querySelector(".left");
    const button = document.querySelector("button");

    let colors = [
        "Yellow",
        "Blue",
        "Magenta",
        "Green",
        "Purple",
        "Orange",
        "Dodgerblue",
        "Lime",
        "Orangered",
        "Dodgerblue",
        "Gray",
        "Red",
        "Darkgreen",
        "Black",
        "White",
        "Brown",
        "Darkgoldenrod",
        "Mediumpurple",
        "Pink",
        "Limegreen",
        "Khaki",
        "Darkorchid"
    ]


    button.addEventListener("click",randomColor);

    function randomColor(){
        let rightColor = Math.floor(Math.random() * colors.length);
        let leftColor = Math.floor(Math.random() * colors.length);

        if(rightColor === leftColor){
            colors[leftColor++];
            leftColor === colors.length ? leftColor = 0 : colors[leftColor];
            container.style.background = `linear-gradient(to right,${colors[rightColor]},${colors[leftColor]})`;
            spanRight.innerHTML = colors[rightColor];
            spanLeft.innerHTML = colors[leftColor];
            console.log("Ayna");
        }else{
            container.style.background = `linear-gradient(to right,${colors[rightColor]},${colors[leftColor]})`;
            spanRight.innerHTML = colors[rightColor];
            spanLeft.innerHTML = colors[leftColor];
        }

    }

