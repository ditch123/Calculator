function main() {
    const divList = document.querySelectorAll(".calculator .button div div");
    const textInput = document.getElementById("textinput");

    divList.forEach((div) => {
        div.addEventListener('click', () => {

            if (div.innerHTML == "=") {
                textInput.innerHTML = eval(textInput.innerHTML);
            } else if (div.innerHTML == "AC") {
                textInput.innerHTML = "0";
            } else {
                if (textInput.innerHTML == "0")
                    textInput.innerHTML = div.innerHTML;
                else textInput.innerHTML += div.innerHTML;
            }
        });

    });
}

main();