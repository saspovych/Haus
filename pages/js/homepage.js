(function () {
	const burger = document.querySelector('.burger')
	const navig = document.querySelector('.burger_navigation')
	const nav = document.querySelector('.header__account_action ')
	burger.addEventListener('click', () => {
		burger.classList.toggle('burger_active')
		navig.classList.toggle('navigation_active')
		nav.classList.toggle('navigation_active')
	})
} ())