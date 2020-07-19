// old code

/*
function newCat() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(xhttp.responseText);
    var cat = response[0]
    document.getElementById("img").innerHTML = `<img src="${cat.url}">`
    }
};
xhttp.open("GET", "https://api.thecatapi.com/v1/images/search", true);
xhttp.send();
}

function voteDown() {

}

function getVotes() {

}

document.onload = newCat()

*/




// new code using axios




// constant HEADER value
const REQUEST_HEADER = {
    'Content-Type': 'application/json',
    'x-api-key': '94ab5be8-cf8a-443b-9ee5-acd18976a2ed'
};

// gets new cat and replaces image
const newCat = () => { 
    axios.get('https://api.thecatapi.com/v1/images/search')
        .then(response => {
            const img_url = response.data[0].url;
            console.log(img_url)
            document.getElementById('img').innerHTML = `<img src="${img_url}">`
        })
        .catch(error => console.log('on new cat error', error));
}

// create vote object