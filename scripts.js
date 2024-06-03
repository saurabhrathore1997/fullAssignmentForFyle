// script for form section
document.getElementById("button").addEventListener("click",()=>{
    document.querySelector(".container").style.display="flex"
})
//script for why choose us section
function changeImage(imageSrc, element) {
    document.getElementById('project-image').src = imageSrc;
    
    // Remove active class from all items
    let items = document.querySelectorAll('.content-item');
    items.forEach(item => item.classList.remove('active'));
    
    // Add active class to clicked item
    element.classList.add('active');
}
// js for slide bar
function showWebDev(element) {
    element.querySelector('.overlay').classList.remove('hidden');
}

function hideWebDev(element) {
    element.querySelector('.overlay').classList.add('hidden');
}
function handleDot(id,value){
    id.addEventListener("mouseover",()=>{
        document.querySelector(value).style.backgroundColor="red" 
    })
    id.addEventListener("mouseout",()=>{
        document.querySelector(value).style.backgroundColor="grey" 
    })
}
handleDot(first,".firstDot")
handleDot(second,".secondDot")
handleDot(third,".thirdDot")