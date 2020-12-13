
function getDogBreed() {
    let getTheBreed = `https://dog.ceo/api/breeds/image/random/${nameOfBreed}`
    //const options = {method: 'GET'};
    fetch(getTheBreed)
    .then(response => response.json())
    .then(responseJson => showTheDog(responseJson));
};


function showTheDog(responseJson) {
    $('.results-img').empty();
    randomDog = responseJson.message;
    $('.results-img').append(randomDog);
}

function howManyDogs() {
    numberOfDogs = 3;
    getDogImages();
    console.log(numberOfDogs);
    $('form').submit('click', function(event) {
        numberOfDogs = $("input[type='number']").val();
        event.preventDefault();
        console.log(numberOfDogs);
        getDogImages(); 
    });
};

$(function() {
    console.log("page running");
    howManyDogs();
});