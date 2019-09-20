
    document.getElementById("searchbtn").onclick = () =>{
    const query = document.getElementById("search").value;

fetch('http://api.giphy.com/v1/gifs/search?&q=' + query + '&limit=49&api_key=LgxDtDFTM9ckcIet413XLqR4XZmItEP9')
    .then((response) => { return response.json(); })
    .then ((resp)=>{
        let gifsArray =resp.data
        giphyFunc(gifsArray);
    })
    }
async function giphyFunc(gifsArray){
    const gifs = await document.getElementById('gifs');
    let container = `<div id ="container"></div>`;
    gifsArray.forEach((giphy)=>{
        container += `<img src = "${giphy.images.fixed_height.url}"/>`;
    })
    document.getElementById("gifs").innerHTML=container;
}
