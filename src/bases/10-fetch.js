const apiKey = 'Ui5L1XDR2xpodRAIgMIerF5itQL5EzMu';

const respuesta = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

respuesta.then(res => res.json())
.then(({data}) => {
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
    

})
.catch(err => console.warn(err))
