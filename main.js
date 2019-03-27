const search = document.querySelector('.search input')
const searchButton = document.querySelector('.search button')
const apiUrl = 'https://itunes-api-proxy.glitch.me/search?term='


// This is working to format the url based on user text input so we can drop in fetch method
function searchApi() {
        const promise = fetch(userInput())
            .then(function (response) {
                if (!response.ok) {
                    throw Error(response.statusText)
                }
                return response.json()
            })
        console.log(promise)
        return promise
    }

function userInput () {
userINputsearchButton.addEventListener('click', function () {
        return(apiUrl.concat(search.value.trim().split(' ').join('+')))
    })
}
userInput()
searchApi()