// let parentElements = document.getElementById("parent")
// console.log(parentElements);
// let item2 = document.getElementsByClassName("item")
let item = document.querySelectorAll(".item")

// console.log( item);

for (let i = 0; i < item.length; i++) {
    let btnPlus = item[i].children[5].children[0]
    let btnMoins = item[i].children[5].children[2]

    // recupération de la balise span contenant le nombre d'article
    let quantity = item[i].children[5].children[1]

    // recupération de la valeur de cette balisse span à travers la variable quantity . Plus la conversion en entier 
    let qty = parseInt(quantity.innerHTML)
    // console.log(qty+1);

    //récupération de la somme total de l'article 
    let totalUnit = item[i].children[7]
    //recupération du prix de l'article
    let price = item[i].children[3]
    let unitPrice = parseInt(price.innerText)



    // L'évenement pour pouvoir incrémenter la valeur de qty à travers le bouton plus (btnPLus)
    btnPlus.addEventListener("click", function () {
        qty++ //qty = qty + 1
        console.log(qty);
        // passage de valeur à la balise span qui recupère le nombre d'article (affichage)
        quantity.innerHTML = qty
        totalUnit.innerHTML = unitPrice * qty
        Somme()
    })

    btnMoins.addEventListener("click", Dimunuer)
    function Dimunuer() {
        qty--
        if (qty >= 0) {
            quantity.innerHTML = qty
            totalUnit.innerHTML = unitPrice * qty

            Somme()
        }

    }


    // console.log(btnPlus, btnMoins, qty, quantity);

}

function Somme() {
    let sum = 0;
    let totalAmount = document.getElementById("total")
    for (let i = 0; i < item.length; i++) {
        let total = item[i].children[7]
        sum += parseInt(total.innerText)
    }
    console.log(sum);
    totalAmount.innerHTML = sum

}