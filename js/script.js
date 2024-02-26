document.querySelector('.header__burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header__hidden').classList.toggle('active');
    document.querySelector('.section-main').classList.toggle('active');
});

Array.prototype.map.call(document.querySelectorAll('.modal-close'),function(element,index){
    element.addEventListener('click',function(){
		document.querySelector('.modal-bg').style.display = 'none';
        document.querySelector('.modal').style.display = 'none';
  },false)
});

document.querySelector('.button-call').addEventListener('click', function() {
    document.querySelector('.modal-bg').style.display = 'block';
    document.querySelector('.modal').style.display = 'block';
});