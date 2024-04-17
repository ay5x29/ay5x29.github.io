const state = {      
    imgList: ['./1.png', './2.png', './s.png', './4.png', './5.png'],      
    curIndex: 0,      
    intervalId: null      
};      
  
const bannerEl = document.querySelector('.banner');      
const prevBtnEl = document.querySelector('#prevBtn');      
const nextBtnEl = document.querySelector('#nextBtn');      
  
function initImages() {        
    state.imgList.forEach(function(imgSrc, index) {    
        const imgEl = document.createElement('img');        
        imgEl.src = imgSrc;        
        imgEl.style.left = index * 100 + '%'; /* 使用百分比堆叠图片 */  
        bannerEl.appendChild(imgEl);        
    });        
}    
  
function handlePrev() {      
    state.curIndex = (state.curIndex - 1 + state.imgList.length) % state.imgList.length;      
    updateBanner();      
}      
  
function handleNext() {      
    state.curIndex = (state.curIndex + 1) % state.imgList.length;      
    updateBanner();      
}      
  
function updateBanner() {      
    bannerEl.style.transform = `translateX(${-state.curIndex * 100}%)`; // 移动整个图片容器  
}      
  
function startAutoPlay() {      
    state.intervalId = setInterval(handleNext, 3000);      
}      
  
function stopAutoPlay() {      
    clearInterval(state.intervalId);      
}      
  
prevBtnEl.addEventListener('click', handlePrev);      
nextBtnEl.addEventListener('click', handleNext);      
  
initImages();      
startAutoPlay();