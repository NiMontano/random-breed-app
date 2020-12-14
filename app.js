
function renderDogBreed(nameOfBreed) {
    let getTheBreed = `https://dog.ceo/api/breed/${nameOfBreed}/images/random`;

    fetch(getTheBreed)
        .then(response => {
            if(!response.ok) {
                throw new Error(response.error);
            } 
            return response.json();
        })
        .then(responseJson => showTheDog(responseJson))
        .catch(error => {
            $('.results-img').text('No such doggo :(');
        })
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
        renderDogBreed(nameOfBreed); 
    });
};

$(function() {
    breedOfDog();
});