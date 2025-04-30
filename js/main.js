// Swiper slider

const swiper = new Swiper('.swiper', {
	loop: true,
	// freeMode: true,

	slidesPerView: 4,
    slidesPerGroup: 4,
	spaceBetween: 30,
    

	// Navigation arrows
	navigation: {        
		nextEl: '#sliderNext',
		prevEl: '#sliderPrev',
	},
    on: {
		init: function () {
			updateCounter(this);
		},
		slideChange: function () {
			updateCounter(this);
		}
	}
});

function updateCounter(swiperInstance) {
	const counterSpan = document.querySelector('.slider__count span');
	const totalGroups = Math.ceil(swiperInstance.slides.length / swiperInstance.params.slidesPerGroup / 2); // делим на 2 из-за дублированных слайдов при loop:true

	let realIndex = swiperInstance.realIndex;
	let currentGroup = Math.floor(realIndex / swiperInstance.params.slidesPerGroup) + 1;

	counterSpan.textContent = currentGroup;
}