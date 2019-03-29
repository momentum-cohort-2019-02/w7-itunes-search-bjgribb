const searchValue = document.querySelector('.search input')
const searchButton = document.querySelector('.search button')
const apiUrl = 'https://itunes-api-proxy.glitch.me/search?term='
const allTracks = document.querySelector('.all_tracks')
// let url = apiUrl.concat(encodeURIComponent(searchValue.value)) doesn't seem to work in passing to functions as variable??

function startSearch () {
    searchButton.addEventListener('click', function() {
        allTracks.innerHTML = ""
        getTracks(apiUrl.concat(encodeURIComponent(searchValue.value)))
        updateTracks(apiUrl.concat(encodeURIComponent(searchValue.value)))
        addTrackData(song)
} )
}

function getTracks(url) {
    // making fetch request returning json
    const promise = fetch(url
        ).then(function (response) {
        if (!response.ok) {
            throw Error(response.statusText)
        }
        return response.json()
    })
    return promise
}

function updateTracks(url) {
    // Looping through all returned songs from fetch and adding track data
    getTracks(url)
    .then(trackData => { for 
        (let song of Object.values((trackData))[1])
            addTrackData(song)
    })  
}

function addTrackData(song) {
    // This function will be called on each track and populate the relevant data (i.e. title, album art)
    let track = document.createElement('div')
    let trackName = document.createElement('div')
    let trackAlbum = document.createElement('div')
    let trackArt = document.createElement('div')
    let trackPlayer = document.createElement('div')
        allTracks.appendChild(track)
        track.className = 'track'
        track.appendChild(trackArt)
        trackArt.className = 'trackArt'
        trackArt.innerHTML = `<img src="${song.artworkUrl100}">`
        track.appendChild(trackName)
        trackName.className = 'trackName'
        trackName.innerText = `${song.trackName}`
        track.appendChild(trackAlbum)
        trackAlbum.innerText = `${song.collectionName}`
        track.appendChild(trackPlayer)
        trackPlayer.innerHTML = `<audio controls src="${song.previewUrl}"></audio>`
}

startSearch()


// NOTES:

// Used to figure out promise structure
// var blackSabbath = fetch('https://itunes-api-proxy.glitch.me/search?term=black+sabbath')
//     .then(promise => promise.json())
//     console.log(blackSabbath.then(data => Object.values(data)))

// clearing element clear innerHTML
