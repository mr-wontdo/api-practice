(function giphySearch() {
    const searchButton = document.querySelector('button');
    const searchInput = document.querySelector('input#giphy_search');
    const img = document.querySelector('img');

    searchButton.addEventListener('click', () => searchGIF());
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') searchGIF();
    });
    document.querySelector('form').addEventListener('submit', (e) => e.preventDefault());

    function searchGIF() {
        searchValue = document.querySelector('input#giphy_search').value;
        apiEndpoint = 'https://api.giphy.com/v1/gifs/translate?api_key=v7A2xtvTcD35rzAjKvc6F5b5CpcXwbuP&s=' + searchValue;
        fetch(apiEndpoint, {mode: 'cors'})
            .then(response => response.json())
            .then(response => {
                if (response.meta.status !==200) {
                    throw new Error(response.meta.msg);
                } else if (response.data.length === 0) {
                    alert('Unable to find any gifs.');
                } else {
                    img.src = response.data.images.original.url; 
                }
            })
            .catch(error => alert(error));
    }
})();
