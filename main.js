const searchValue = document.querySelector('.search input')
const searchButton = document.querySelector('.search button')
const apiUrl = 'https://itunes-api-proxy.glitch.me/search?term='
let trackName = document.createElement('div')
const allTracks = document.querySelector('.all_tracks')
console.log(allTracks)
// This is working to format the url based on user text and fetch and return song data
// function userSearch () {
//     searchButton.addEventListener('click', function() {
//         var url = (apiUrl.concat(encodeURIComponent(searchValue.value)))
//         fetch(url).then(promise => promise.json())
//         .then(data => { for (let song of Object.values((data))[1])
//             console.log(song.trackName)
//             })
//     })
// }
// userSearch()

// HOT NONSENSE

const url = 'https://itunes-api-proxy.glitch.me/search?term=black+sabbath'

function getTracks(url) {
    const promise = fetch(url
        ).then(function (response) {
        if (!response.ok) {
            throw Error(response.statusText)
        }
        return response.json()
    })
    console.log(promise)
    return promise
}

function updateTracks(url) {
    getTracks(url)
    .then(trackData => { for 
        (let song of Object.values((trackData))[1])
            addTrackName(song)
    })  
}

function addTrackName(song) {
    let trackName = document.createElement('div')
    allTracks.append(trackName)
    trackName.innerText = `${song.trackName}`
}

updateTracks(url)

// NOTES:

// Used to figure out promise structure
// var blackSabbath = fetch('https://itunes-api-proxy.glitch.me/search?term=black+sabbath')
//     .then(promise => promise.json())
//     console.log(blackSabbath.then(data => Object.values(data)))

// clearing element clear innerHTML
