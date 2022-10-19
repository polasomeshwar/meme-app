const API = "https://meme-api.herokuapp.com/gimme/IndianDankMemes";
const getImageUrl = async()=>{
    let resp = await fetch(API);
    return resp.json();
}
const fetchNext = async()=>{
    let resp = await fetch(API);
    let image = document.querySelector("#memeId");
    let {url} = await resp.json(); 
    image.src = url;
};
document.addEventListener("DOMContentLoaded",async()=>{
   console.log("Hello world");
   let image = document.querySelector("#memeId");
   let memeDetails = await getImageUrl();
   console.log(memeDetails); 
   let {url} = memeDetails;
   image.src = url;
   document.querySelector("#nextBtn").addEventListener("click",fetchNext);
}); 