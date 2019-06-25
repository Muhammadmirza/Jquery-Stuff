$(function() {

    //JSON $.getJSON

    var pokeapiUrl = "https://pokeapi.co/api/v2/generation/1";
    var pokemonByName = "https://pokeapi.co/api/v2/pokemon/";
    
    $.getJSON(pokeapiUrl).done(function(data){
        console.log(data)

        $.each(data.pokemon_species, function(index, pokemon){
            var name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
            var link = $("<a>").attr("id", pokemon.name).attr("href", "#").append($("<strong>").text(name));
            var par = $("<p>").html("Pokemon species no. "+ (index+1) + " is ").append(link);
            
            link.click(function(event){
                console.log("clicked")
                console.log(pokemonByName+pokemon.name)
                $.getJSON(pokemonByName+pokemon.name).done(function(details){
                    event.preventDefault();
                    console.log(details);
                }).fail(function(){
                    console.log("Could not pull data for " + pokemon.name + " at " + pokemonByName+pokemon.name);
                })
            })
            
            par.appendTo("#pokemon");

        })
    }).fail(function (){
        //failure code
        alert("Failed to get data.")
    }).always(function () {
        console.log("pokemon is awesome.")
    })



});