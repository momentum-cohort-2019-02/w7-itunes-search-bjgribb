const search = document.querySelector('.search input')
const searchButton = document.querySelector('.search button')
const apiUrl = 'https://itunes-api-proxy.glitch.me/search?term='


// This is working to format the url based on user text and fetch and return song data
function userSearch () {
    searchButton.addEventListener('click', function() {
        var url = (apiUrl.concat(encodeURIComponent(search.value)))
        fetch(url).then(promise => promise.json())
        .then(data => { for (let song of Object.values((data))[1])
            console.log(song.trackName)
            })
    })
}


userSearch()

// NOTES:

// Used to figure out promise structure
// var blackSabbath = fetch('https://itunes-api-proxy.glitch.me/search?term=black+sabbath')
//     .then(promise => promise.json()) //.then(data => Object.data(data)))
// console.log(blackSabbath.then(data => Object.values(data)[1][45].trackName))

// clearing element clear innerHTML