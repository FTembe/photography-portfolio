let images= document.querySelectorAll('.item img'),
	target= document.querySelector('#target'),
	zoom  = document.querySelector('.zoom');

images.forEach((image)=>{
	image.addEventListener('click',()=>{
		target.src=image.src;
		zoom.classList.add('active')
	})
})

document.querySelector('.close').addEventListener('click',()=>{
	zoom.classList.remove('active')
})