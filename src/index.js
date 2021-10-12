let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
  toyFormContainer.addEventListener('submit', (e)=>{
    e.preventDefault()
    postToy(e.target.name.value, e.target.image.value)
    e.target.reset()
  })
  
});


// When the page loads, make a 'GET' request to fetch all the toy objects. With the response data, make a <div class="card"> for each toy and add it to the toy-collection div.


fetch("http://localhost:3000/toys")
.then( response => response.json())
.then((toyData) => toyData.forEach(renderToy))




//<div class="card">
//<h2>Woody</h2>
//<img src="[toy_image_url]" class="toy-avatar" />
//<p>4 Likes </p>
//<button class="like-btn" id="[toy_id]">Like <3</button>
//</div>

function renderToy(toys){

  const toyCard =`
  <div class="card">
  <h2>${toys.name}</h2>
  <img src =${toys.image} class="toy-avatar" />
  <p>${toys.likes} Likes </p>
  <button class="like-btn" id=${toys.id}>Like</button>
  </div>
  ` 
  const divCard = document.getElementById("toy-collection")
  divCard.innerHTML +=toyCard


}


//post new Toy

function postToy(name, url){
fetch ("http://localhost:3000/toys", {
  method: 'POST',
  headers:{
  "Content-Type": "application/json",
  Accept: "application/json"
  },
  body:JSON.stringify({
  "name": name,
  "image": url ,
  "likes": 0
  })
})
.then(resp => {return resp.json()})
.then((toyData) => renderToy(toyData) )
}


//add likes

document.addEventListener('click', e => {
  //if(e.target.className === "like-btn"){
    //handlelikeButton(e)
console.log(e.target.previousSibling)})

  
//});

//<button class="like-btn" id=${toys.id}>Like</button>

function handlelikeButton(e){
  const toyId = e.target
  console.log(toyId)

}
