window.addEventListener('load', function () {
    verDadosApi();
});
function verDadosApi() {
    let params = new URLSearchParams(window.location.search);
    let id = params.get('codigo');
    console.log(id);
    fetch('https://diwserver.vps.webdock.cloud/products/' + id)
    .then(res => res.json())
    .then(json => {
        console.log(json);
        exibirDados(json)})
}
function exibirDados(dados) {
    const localle = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'})
    var str = "";
        var produto = dados.products;
        info = dados.products;
        str += "<div id='" + dados.id + "'class='col-md-4 mx-auto' my-auto px-0 rounded d-flex'>";
        str += "<div class='card mx-auto'>";
        str += "<img src='" + dados.image + "' class='card-img-top'>";
        str += "<div class='card-body'>";
        str += "<h5 class='card-title'>" + dados.title + "</h5>";
        str += "<p class='card-text'><b>"+ dados.brandName + "</b></p>";
        str += "<p class='card-text'>" +"Description:"+ dados.description + "</p>";
        str += "<p class='card-text'><b>" +"Usage: "+ dados.usage + "</b></p>";
        str += "<p class='card-text'><b>" + localle.format(dados.price/100) + "</b></p>";
        str += "<a href='#' id='botao' class='btn btn-primary'>Comprar</a>";
        str += "</div>";
        str += "</div>";
        str += "</div>";
        document.getElementById("detalhes").innerHTML = str;
    }