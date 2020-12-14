
function renderDogBreed() {
    let getTheBreed = `https://dog.ceo/api/breed/${nameOfBreed}/images/random`
    fetch(getTheBreed)
    .then(response => response.json())
    .then(responseJson => showTheDog(responseJson))
    .catch(error => alert('No such doggo'));
};


function showTheDog(responseJson) {
    $('.results-img').empty();
    randomDog = responseJson.message;
    $('.results-img').append(`<img src="${randomDog}"></img>`);
}

function breedOfDog() {
    $('form').submit('click', function(event) {
        nameOfBreed = $("input[type='text']").val();
        event.preventDefault();
        renderDogBreed(); 
    });
};

$(function() {
    breedOfDog();
});