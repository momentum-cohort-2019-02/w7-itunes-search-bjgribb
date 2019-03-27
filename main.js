const search = document.querySelector('.search input')
const searchButton = document.querySelector('.search button')
const apiUrl = 'https://itunes-api-proxy.glitch.me/search?term='


// This is working to format the url based on user text input so we can drop in fetch method
function searchApi () {
    searchButton.addEventListener('click', function() {
        console.log(apiUrl.concat(search.value.trim().split(' ').join('+')))
        let url = (apiUrl.concat(search.value.trim().split(' ').join('+')))
        console.log(fetch(url))
    })
}

searchApi()
