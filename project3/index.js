

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
                
                return Promise.reject({
                    message: "That breed was not found.  Please try a different breed."
                })
            }
            
        }
    )
    .then(responseJSON=>{
        displayImages(responseJSON.message);
    }
        )
    .catch(item=>
        $('#picture-display').html(`<h2>${item.message}</h2>`)

    
        


)

    
}
$(watchForm)