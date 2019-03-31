const searchValue = document.querySelector('#user_input')
const searchButton = document.querySelector('.search_box button')
const apiUrl = 'https://itunes-api-proxy.glitch.me/search?term='
const allTracks = document.querySelector('.all_tracks')
const player = document.querySelector('.player')
// const test = document.querySelector('.trackArt 932648449')
// let url = apiUrl.concat(encodeURIComponent(searchValue.value)) doesn't seem to work in passing to functions as variable??

// function setUrl () {

// }

function startSearch () {
    searchButton.addEventListener('click', function() {
        allTracks.innerHTML = ""
        if(document.getElementById('music_video').checked) {
            getTracks(apiUrl.concat(encodeURIComponent(searchValue.value),'&media=musicVideo'))
                console.log(apiUrl.concat(encodeURIComponent(searchValue.value),'&media=musicVideo'))
            updateTracks(apiUrl.concat(encodeURIComponent(searchValue.value),'&media=musicVideo'))
        } else {
            getTracks(apiUrl.concat(encodeURIComponent(searchValue.value)))
            updateTracks(apiUrl.concat(encodeURIComponent(searchValue.value)))
        }
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
    // Looping through all returned songs from fetch and adding track data and pulling in the audio Url for central playback
    getTracks(url)
    .then(trackData => { for 
        (let song of Object.values((trackData))[1]) {
            addTrackData(song)
            playSong(song)
        }
    })  
}

function addTrackData(song) {
    // This function will be called on each track and populate the relevant data (i.e. title, album art)
    let track = document.createElement('div')
    let trackName = document.createElement('div')
    let trackAlbum = document.createElement('div')
    let trackArt = document.createElement('div')
        track.className = `track_${song.trackId} track`
        allTracks.appendChild(track)
        track.appendChild(trackArt)
        trackArt.className = `trackArt`
        trackArt.innerHTML = `<img src="${song.artworkUrl100}">`
        track.appendChild(trackName)
        trackName.className = `trackName`
        trackName.innerText = `${song.trackName}`
        track.appendChild(trackAlbum)
        trackAlbum.className = 'trackAlbum'
        trackAlbum.innerText = `${song.collectionName}`
}

function playSong (song) {
    // This function is selecting each individual trackArt div adding a click event which adds this song to the player at the top
    document.querySelector(`.track_${song.trackId}`).addEventListener('click', function () {
        let audio = document.querySelector('audio')
        player.innerHTML = `<audio controls src="${song.previewUrl}"></audio>`
            if (audio.getAttribute('src') !== `${song.previewUrl}` || audio.paused) {
                document.querySelector('audio').play()
            } else {
                document.querySelector('audio').pause()
            }
    })}

startSearch()

// NOTES:

// Used to figure out promise structure
// var blackSabbath = fetch('https://itunes-api-proxy.glitch.me/search?term=black+sabbath')
//     .then(promise => promise.json())
//     console.log(blackSabbath.then(data => Object.values(data)))
