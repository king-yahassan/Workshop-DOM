const parent = document.querySelector("#parent")
// const parent3 = document.getElementById("parent")
// console.log(parent,parent3);
// const item2 = document.getElementsByClassName("item")
const item = document.querySelectorAll(".item")

for (let i = 0 ; i< item.length ; i++){

    const btnPlus =item[i].children[5].children[0]
    let btnMoins = item[i].children[5].children[2]

    // recupération de la balise span contenant le nombre d'article
    let quantity = item[i].children[5].children[1]


    let qty = parseInt(quantity.innerHTML)

    // console.log(qty-1);

    //prix unitaire
    let price = item[i].children[3]
    let unitPrice = parseInt(price.innerText)

    //récupération de la somme total de l'article 
    let totalUnit = item[i].children[7]

    //récup des icons

    let btnLike = item[i].children[9].children[0]
    let btnDelete = item[i].children[9].children[1]

    btnPlus.addEventListener("click", function () {

        qty++ //qty = qty + 1
        //Pour afficher la contenu html
        quantity.innerHTML = qty
        totalUnit.innerHTML = qty * unitPrice
        Somme()

    })

    btnMoins.addEventListener("click", function () {
        if (qty > 0) {
            qty-- //qty = qty + 1
            //Pour afficher la contenu html
            quantity.innerHTML = qty
            totalUnit.innerHTML = qty * unitPrice
            Somme()
        }
    })

    btnLike.addEventListener("click" , function(){
        if (btnLike.style.color === "red") {
            btnLike.style.color = "black"
        } else {
            btnLike.style.color = "red"
        }
    })

    btnDelete.addEventListener("click" , function(){
        parent.removeChild(item[i])
        Somme()

    })

}


function Somme() {
    let sum = 0;
    let totalAmount = document.getElementById("total")
    // console.log(totalAmount);
    for (let i = 0; i < item.length; i++) {
        let total = item[i].children[7]
        // console.log(sum);
        // sum = sum + parseInt(total.innerText) 
        sum += parseInt(total.innerText) 
    }
    console.log(sum);
    totalAmount.innerHTML = sum

}