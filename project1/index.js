function main(){
    watchForm()

}

function watchForm(){
    $('form').on('submit',(e)=>{
        e.preventDefault();
        const n=e.target['n-pics'].value;
        if (n>=1 && n<=50){
            getDogImages(n);
        }
        else {
            getDogImages(3)
        }
        //console.log(e.target['n-pics'].value)
    })
}

function getDogImages(n){
    fetch(`https://dog.ceo/api/breeds/image/random/${n}`)
    .then(
        response=>response.json()
    )
    .then(responseJSON=>console.log(responseJSON)
        )
    .catch(item=>alert("Something went wrong. Please try again later."))

    
}
main()