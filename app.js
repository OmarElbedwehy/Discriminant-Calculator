const calcDis = (a, b, c) => {
    discriminantSolve = Math.pow(b, 2) - 4 * a * c;
    return discriminantSolve
}

document.querySelector("#solve").addEventListener("click", () => {
    const a_input = document.getElementById("a").value
    const b_input = document.getElementById("b").value
    const c_input = document.getElementById("c").value

    if (a_input !== "" && b_input !== "" && c_input !== "") {
        const result = calcDis(a_input, b_input, c_input);
        document.querySelector("#disc").textContent = result;

        const thereforEle = document.querySelector("#therefor")
        if (result > 0){
            thereforEle.textContent = "Differnt Real"
        }else if (result == 0){
            thereforEle.textContent = "Equal Real"
        }else if (result < 0){
            thereforEle.textContent = "Two Complex And Non Real"
        }
    } else {
        document.querySelector("#disc").textContent = "Fill Out All Inputs"
    }

})