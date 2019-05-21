pokemons = new XMLHttpRequest();
pokemons.responseType = 'json';
pokemons.open("GET", 'https://pokeapi.co/api/v2/pokemon/', true);

pokemons.onreadystatechange = function (e) {
    var html = "";
    if (pokemons.readyState == 4) {
        console.log(pokemons.response.results)
        $.each(pokemons.response.results, function(i, item) {
            $('ul').append('<li class="list-group-item">' + item.name + '</li>')
        });
    }
}

pokemons.send()