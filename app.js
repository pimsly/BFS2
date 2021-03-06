// constant HEADER Value
const REQUEST_HEADER = {
    'Content-Type': 'application/json',	
    'x-api-key': '94ab5be8-cf8a-443b-9ee5-acd18976a2ed'	
};

// gets new cat and replaces image
const newCat = () => { 
    axios.get('https://api.thecatapi.com/v1/images/search')
        .then(response => {
            let img_url = response.data[0].url;
            let img_id = response.data[0].id;
            // grabs first img element and sets its src from response
            document.querySelector('img').src = img_url;
            // grab img element and update id
            document.querySelector('img').id = img_id;
            // check img_id
            console.log(`image id pulled from server data: ${img_id}`)
        })
        // error handling
        .catch(error => console.log('on new cat error', error));
}

function vote(value) {
    // set img_id from value in html element
    img_id = document.querySelector('img').id;

    // create vote object
    let vote_object = {
        image_id: img_id,
        value: value
    };

    // vote id variable
    let vote_id;

    // check vote object
    console.log(vote_object);

    // vote post route
    axios.post('https://api.thecatapi.com/v1/votes', vote_object, { headers: REQUEST_HEADER })
        .then(response => {
            vote_id = response.data.id; // use this for osmething ??C?DC?Dfe.kja,fjh
        })
        .catch(error => console.log('voting error', error))
        .finally(newCat())
};

// get all votes (use later)

const getVotes = () => axios.get('https://api.thecatapi.com/v1/votes', { headers: REQUEST_HEADER })
    .then(response => {
        console.log(response.data)
    })
    .catch(error => console.log('error getting votes', error));

// load cat immediately on pg
document.onload = newCat()





