const $inputName = document.querySelector("#name")
const $selectTitle = document.querySelector("#title")
const $otherTitle = document.querySelector("tit")

console.log ($selectTitle)
console.log ($inputName)

document.addEventListener("DOMContentloaded",
    function(event) {
        console.log("hello");
        $inputName.focus()


        $selectTitle.addEventListener("change", function(e) {
            console.log("===")
            console.log(e.target.value)
            console.log("===")

            if (e.target.value === "other") {
                console.log("c'est bon")
                $otherTitle.classList.remove("is-haden");
            } else {
                console.log("c'est pas bon")
                $otherTitle.classList.add("is-haden");
            }
        })
});

