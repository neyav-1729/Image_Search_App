const acceskey= "HXE64_dzkosi3JHkhGlSTKMYOklvPI-9CtdbNz4NAu8";

const formEl=document.querySelector("form");
const searchinputEl=document.getElementById("search-input");
const searchresultEl=document.querySelector(".search-results");
const showMoreButton = document.getElementById("show-more-button");
let inputData="";
let page =1;

formEl.addEventListener("submit" , (event)=>{
  event.preventDefault();
   searchImage();
});

showMoreButton.addEventListener("click" , ()=>{
searchImage();
});
async function searchImage() {
inputData=searchinputEl.value;
 const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${acceskey}`;
 console.log(url);
 const response=await fetch(url);
 const data=await response.json();
 //console.log(data);
 if(page === 1){
  searchresultEl.innerHTML="";
 }
 const results=data.results;
// console.log(results);

  results.map((result)=>{
const imageWraper=document.createElement("div");
imageWraper.classList.add("search-result");
const image = document.createElement("img");
image.src=result.urls.small;
image.alt=result.alt_description;
const imageLink=document.createElement("a");
imageLink.href=result.links.html;
imageLink.target="_blank";
imageLink.textContent=result.alt_description;

imageWraper.appendChild(image);
imageWraper.appendChild(imageLink);
searchresultEl.append(imageWraper);
  });
  page++;

 if(page > 1){
  showMoreButton.style.display="block";
 }
}