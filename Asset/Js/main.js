const img = document.querySelectorAll('.image img')
const btn_prev = document.querySelector('.prev')
const btn_next = document.querySelector('.next')
const btn_close = document.querySelector('.close-btn')
const galleryImg = document.querySelector('.gallery__inner img')
const gallery = document.querySelector('.gallery')
const view = document.querySelector('.View')
var currentIndex=0;
function show(){
    if (currentIndex==0){
        btn_prev.style.display="none"
    }
    else{
        btn_prev.style.display="block"
    }
    if (currentIndex==img.length-1){
        btn_next.style.display="none"
    }
    else{
        btn_next.style.display="block"
    }
    galleryImg.src=img[currentIndex].src;
    gallery.classList.add('show')

    }
  function cancelAnimation(){
    galleryImg.onmouseup=function(){
        galleryImg.style.transitionDuration='2s';
        galleryImg.style.transform='scale(1)'
    }
    }
    function resetAnimation(){
        galleryImg.style.transitionDuration='0.1s';
        galleryImg.style.transform='scale(1)'
    }
function animation(callback){
    galleryImg.onmousedown=function(){
        galleryImg.style.transitionDuration='2s';      
        galleryImg.style.transform='scale(1.9)'
    }
    callback()
}
img.forEach(function(item,index){
    item.onclick=function(){
        currentIndex=index;
        view.style.display="none"
        show()
    }
})
view.onclick =()=>{
    show()
    view.style.display="none"
}
btn_close.onclick = () =>{
    gallery.classList.remove('show')
    view.style.display="block"
    resetAnimation()
    
}
gallery.onclick = (e) =>{
    if(e.currentTarget == e.target){
        gallery.classList.remove('show')
        view.style.display="block"
        resetAnimation()
    }
}
btn_next.onclick = () =>{
    console.log(currentIndex)
    if (currentIndex >= 0 &&  currentIndex < img.length-1){
        currentIndex++;
        show()
        resetAnimation()
    }
}
btn_prev.onclick = () =>{
    console.log(currentIndex)
    if (currentIndex > 0){
        currentIndex--;
        show()
        resetAnimation()
    }
}
animation(cancelAnimation)