//typing animation
var typed = new Typed(".typing",{
	strings: ["Full stack webdeveloper", "Freelancer", "Youtuber" , "Motivational Speaker"],
	typeSpeed:100,
	backspeed:10,
	loop:true
});


//dark mode


const dayNight = document.querySelector('#darkmode');
dayNight.addEventListener('click', () =>{
	document.body.classList.toggle('dark-theme');
	if(document.body.classList.contains('dark-theme')){
		localStorage.setItem('theme','dark-theme');
	}else{
		localStorage.setItem('theme','light');
	}
})

function themeMode(){
	if(localStorage.getItem('theme') !== null){
		if(localStorage.getItem('theme') === 'light'){
			document.body.classList.remove('dark-theme');
		}else{
			document.body.classList.add('dark-theme');
		}
	}
}
themeMode()

// preloding

var preloader = document.getElementById('loading');
function loadingFunc(){
	preloader.style.display = 'none';
}



// scroll fade animation
