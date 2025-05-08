const nextButton = document.querySelector('#sliderNext');
const prevButton = document.querySelector('#sliderPrev');

nextButton.style.display = 'block';
prevButton.style.display = 'block';


// Swiper slider
const swiper = new Swiper('.swiper', {
	loop: true,


	spaceBetween: 30,

	navigation: {
		nextEl: '#sliderNext',
		prevEl: '#sliderPrev',
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},

	breakpoints: {
		1024: {
			slidesPerView: 4,
			slidesPerGroup: 4,

		},
		769: {
			slidesPerView: 3,
			slidesPerGroup: 3,

		},
		576: {
			slidesPerView: 2,
			slidesPerGroup: 2,

		},
		1: {
			slidesPerView: 1,
			slidesPerGroup: 1,

		},
	},


	on: {
		init: function () {
			updateCounter(this);
			document.querySelector('#sliderNext').style.display = 'block';
			document.querySelector('#sliderPrev').style.display = 'block';
		},
		slideChange: function () {
			updateCounter(this);
		}
	}
});

function updateCounter(swiperInstance) {
	const counter = document.querySelector('.slider__count');
	const totalGroups = Math.ceil(swiperInstance.slides.length / swiperInstance.params.slidesPerGroup);

	let realIndex = swiperInstance.realIndex;
	let currentGroup = Math.floor(realIndex / swiperInstance.params.slidesPerGroup);

	counter.textContent = `${currentGroup + 1} из ${totalGroups}`;

	if (totalGroups <= 1) {
		nextButton.classList.add('swiper-button-disabled');
		prevButton.classList.add('swiper-button-disabled');
	}
}