

function displayImages(imageUrl){
    
    $('#picture-display').html(`<h2>${breed.value}</h2>
    <img src=${imageUrl} alt="A random picture of a ${breed.value}." />`);
    $('#picture-display').removeClass('hidden')
    $('input').val("")


}

function watchForm(){
    $('form').on('submit',(e)=>{
        e.preventDefault();
        const breed=e.target['breed'].value;
        
        getDogImages(breed)
        
    })
}

function getDogImages(breed){
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(

        response=>{
            if (response.ok){
                return response.json()
            }
            else {
                console.log('not found')
                return Promise.reject({
                    message: "not found"
                })
            }
            
        }
    )
    .then(responseJSON=>{
        displayImages(responseJSON.message);
    }
        )
    .catch(item=>
        alert(item.message)


)

    
}
watchForm()