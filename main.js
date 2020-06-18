let input = document.getElementById('headerInputSearch');
let suggestion = document.getElementById('idSuggestion');
let headerSearch = document.getElementById('idHeaderSearch');
let slideIndex = 0;
let slides = document.getElementsByClassName('img-slide');
let thumbnails = document.getElementsByClassName('thumbnail-img');
let idsetTimeout;


function handleClick(e) {
	if(e.target === input) {
		suggestion.style.visibility = 'visible';
		headerSearch.classList.add('header-search-focus');
	}
	else {
		suggestion.style.visibility = 'hidden';
		headerSearch.classList.remove('header-search-focus');
	}
}

function showSlideImages() {	
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
		thumbnails[i].classList.remove('bd-cl-white');
	}
	slides[slideIndex].style.display = 'block';
	thumbnails[slideIndex].classList.add('bd-cl-white');
	++slideIndex;
	if (slideIndex > slides.length - 1) slideIndex = 0;
	idsetTimeout = setTimeout(showSlideImages, 3000);
}

function hoverThumbnail() {
	for (let i = 0; i < thumbnails.length; i++) {
		thumbnails[i].addEventListener('mouseover', () => {
			clearTimeout(idsetTimeout);

			for (let j = 0; j < slides.length; j++) {
				slides[j].style.display = 'none';
				thumbnails[j].classList.remove('bd-cl-white');
			}

			thumbnails[i].classList.add('bd-cl-white');
			slides[i].style.display = 'block';
		});
		thumbnails[i].addEventListener('mouseout', () => {
			showSlideImages();
		});
	}
}

hoverThumbnail();
showSlideImages();
document.addEventListener('click', handleClick);


