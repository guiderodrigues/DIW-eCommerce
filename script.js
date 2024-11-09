//estrelas
function createStarsElt(rating) {
    let starsImg = document.createElement("img");
    starsImg.classList.add("estrelasImg");
    starsImg.src = "https://img.freepik.com/vetores-premium/icone-de-classificacao-de-cinco-estrelas-estrelas-de-avaliacao-vetor-estrelas-planas-isoladas_118339-1270.jpg?w=2000";
    starsImg.style.clipPath = "inset(0 " + (100 - rating * 20) + "% 0 0)";
    return starsImg;
}
//pegar dados da api
/*fetch('https://diwserver.vps.webdock.cloud/products/')
    .then(res => res.json())
    .then(json => {
        console.log(json);
        exibirDados(json)
    })*/

fetch('https://diwserver.vps.webdock.cloud/products/')
    .then(res => res.json())
    .then(json => {
        console.log(json);
        exibirDados(json)
    })
//chamar detalhes
function chamarDetalhes(id) {
  let codigo = id;
  window.location.href = "detalhes.html?codigo=" + codigo;
}

//exibir dados
var info, info2;
function exibirDados(dados) {
    const localle = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'})
    var str = "";
    for (var i = 0; i < dados.products.length; i++) {
        var produto = dados.products[i];
        info = dados.products;
        info2 = dados;
        str += "<div id='" + produto.id + "'class='col-md-4 mx-2 my-3 px-0 rounded d-flex'>";
        str += "<div class='card'>";
        str += "<img src='" + produto.image + "' class='card-img-top'>";
        str += "<div class='card-body'>";
        str += "<h5 class='card-title'>" + produto.title + "</h5>";
        str += "<p class='card-text'>"+"<b>Brand: </b>"+ produto.brandName+ "</p>";
        str += "<p class='card-text'>"+"<b>Year: </b>"+ produto.year+ "</p>";
        str += "<p class='card-text'><b>"+ localle.format(produto.price/100) + "</b></p>";
        str += "<a href='#' id='botao' class='btn btn-primary'>Buy</a>";
        str += "<a href='#' id='botao' class='btn btn-primary' onclick='chamarDetalhes(\"" + produto.id + "\")'>Details</a>";
        str += "</div>";
        str += "</div>";
        str += "</div>";
    }
    document.getElementById("produtos").innerHTML = str;
}
//filtrar por categoria
function categoria() {
    var select = document.getElementById("subject");
    var option = select.value;
    if (option == "Apparel - Topwear") {
        exibirCategoria(option);
    } else if (option == "Footwear - Shoes") {
        exibirCategoria(option);
    }
    else if (option == "Apparel - Apparel Set") {
        exibirCategoria(option);
    } else if (option == "todos") {
        exibirDados(info2);
    }
}

//exibir categoria
function exibirCategoria(categoria) {
    var elemento = document.getElementById("produtos");
    elemento.innerHTML = "";
    let str = '';
    console.log(categoria);
    console.log(info[0].category);
    for (let i = 0; i < info.length; i++) {
        console.log(info[i].category);
        if (info[i].category == categoria) {
            console.log("entrou");
            str += "<div id='" + info[i].id + "'class='col-md-4 mx-2 my-3 px-0 rounded d-flex'>";
            str += "<div class='card'>";
            str += "<img src='" + info[i].image + "' class='card-img-top'>";
            str += "<div class='card-body'>";
            str += "<h5 class='card-title'>" + info[i].title + "</h5>";
            str += "<p class='card-text'>" + "Preço: R$" + info[i].price + "</p>";
            str += "<p class='card-text'>" + "Avaliação: " + info[i].rating.rate + "</p>";
            str += "<a href='#' class='btn btn-primary'>Comprar</a>";
            str += "</div>";
            str += "</div>";
            str += "</div>";
        }
    }
    console.log(str);
    document.getElementById("produtos").innerHTML = str;
}

function funcionalSearchbar(){
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchbar");
    filter = input.value.toUpperCase();
    ul = document.getElementById("produtos");
    li = ul.getElementsByTagName("div");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h5")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
        } else {
        li[i].style.display = "none";
        }
    }
}
var input = document.getElementById("searchbar");
input.addEventListener("input", funcionalSearchbar);

