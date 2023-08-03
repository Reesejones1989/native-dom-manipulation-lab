let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  document.querySelector("#main-title").textContent="FF9"

  // Part 2
  document.querySelector("body").style.backgroundColor= "blue"

  // Part 3
removeLast = document.querySelector("#favorite-things").lastElementChild
newFavThings = document.querySelector("#favorite-things").removeChild(removeLast)

  // Part 4
specialTitle = document.querySelectorAll(".special-title");
for (let i =0; i< specialTitle.length; i++){
  specialTitle[i].style.fontSize = "2rem";
}

  // Part 5
// raceCities = [];
const pastRaces = document.querySelector("#past-races")
 const chicago = pastRaces.querySelector("li:nth-child(4)")
 console.log(chicago)
console.log(pastRaces)
 pastRaces.removeChild(chicago)


  // Part 6
  let newLi = document.createElement('li')
  newLi.innerHTML ="Cincinnati"
  document.querySelector("#past-races").appendChild(newLi)


  // Part 7
let div = document.createElement('div');
div.classList.add("blog-post");
let h2 = document.createElement('h2');
h2.innerText='My First Blog Post';
let p = document.createElement('p');
p.innerText ='Keep blogging and typing';
document.querySelector(".main").appendChild(div);
div.appendChild(h2);
h2.appendChild(p);

  // Part 8
const quoteTitle = document.querySelector("#quote-title")
quoteTitle.addEventListener("click", function(e){
  randomQuote();
})

  // Part 9
  const blogPost = document.querySelectorAll(".blog-post")
  console.log(blogPost)
  for (i=0;i<blogPost.length; i++ ){
    blogPost[i].addEventListener("click", function(mouseout){
      div.classList.toggle("purple")
      console.log('purple')
    })

    blogPost[i].addEventListener("click", function(mouseenter){
      // toggle("red")
      div.classList.toggle("red")
      console.log("red")
    })
  }




});
