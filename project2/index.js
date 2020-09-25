function main(){
    watchForm()

}

function displayImages(imageArray){
    let bigString=""
    for (let i=0;i<imageArray.length;i++){
        bigString+=`<img src=${imageArray[i]} alt="A random dog picture." />`
    }
    $('#picture-display').html(bigString);
    $('#picture-display').removeClass('hidden')


}

function watchForm(){
    $('form').on('submit',(e)=>{
        e.preventDefault();
        const n=e.target['n-pics'].value;
        if (n>=1 && n<=50){
            getDogImages(n);
        }
        else {
            getDogImages(3);
        }
        
    })
}

function getDogImages(n){
    fetch(`https://dog.ceo/api/breeds/image/random/${n}`)
    .then(
        response=>response.json()
    )
    .then(responseJSON=>displayImages(responseJSON.message)
        )
    .catch(item=>alert("Something went wrong. Please try again later."))

    
}
$(main)