async function foo() {
    try {
        var res = await fetch("https://api.imgflip.com/get_memes");
        var resdata = await res.json();
        var memes = resdata.data.memes;

        var randomIndex = Math.floor(Math.random() * memes.length);
        var randomMeme = memes[randomIndex];

        var div = document.createElement("div");
        div.className = "col-md-4 mb-4"; 
        div.innerHTML = `
            <div class="card">
                <img class="card-img-top" src="${randomMeme.url}" alt="Meme Image">
                <div class="card-body">
                    <h5 class="card-title text-center">${randomMeme.name}</h5>
                </div>
            </div>`;
        document.getElementById("memeContainer").appendChild(div);
    } catch (error) {
        console.error('Error fetching memes:', error);
    }
}

foo();
function refreshPage() {
    window.location.reload();
}