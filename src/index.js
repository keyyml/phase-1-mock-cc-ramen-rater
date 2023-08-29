// write your code here
fetch("http://localhost:3000/ramens")
.then((resp) => resp.json())
.then((ramens) => {
    renderImages(ramens)
});
   

function renderImages(ramens){
   const imagesDiv = document.getElementById('ramen-menu')
    // console.log(imagesDiv)
    
    ramens.forEach((ramen) => {
        const newImage = document.createElement('img')
        newImage.src = ramen.image
        newImage.alt = `${ramen.name}, from ${ramen.restaurant}`
        
        
        newImage.addEventListener('click', renderDisplay)

        function renderDisplay() {
            const imageInDisplay = document.querySelector('.detail-image')
            imageInDisplay.src = newImage.src
            
            const nameInDisplay = document.querySelector('.name')
            nameInDisplay.textContent = ramen.name
            
            const restaurantInDisplay = document.querySelector('.restaurant')
            restaurantInDisplay.textContent = ramen.restaurant 

            const ratingInDisplay = document.querySelector('#rating-display')
            ratingInDisplay.textContent = ramen.rating

            const commentInDisplay = document.querySelector('#comment-display')
            commentInDisplay.textContent = ramen.comment
        }
        
       imagesDiv.append(newImage) 
    })
}

const ramenForm = document.querySelector('#new-ramen')
// console.log(ramenForm)

ramenForm.addEventListener('submit', addNewRamen)

function addNewRamen(e){
    e.preventDefault()
    const newRamen = {
        'name': e.target.name.value,
        'restaurant': e.target.restaurant.value,
        'image': e.target.image.value,
        'rating': e.target.rating.value,
        'comment': e.target['new-comment'].value
    }
    renderImages([newRamen])
}