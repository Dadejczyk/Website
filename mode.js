document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar');
	const allNavItems = document.querySelectorAll('.nav-link');
	const navList = document.querySelector('.navbar-collapse');

	function addShadow() {
		if (window.scrollY >= 100) {
			nav.classList.add('shadow-bg');
		} else {
			nav.classList.remove('shadow-bg');
		}
	}

	allNavItems.forEach((item) =>
		item.addEventListener('click', () => {
			navList.classList.remove('show');
		})
	);

	window.addEventListener('scroll', addShadow);
});

document.addEventListener('DOMContentLoaded', function () {
	const sections = document.querySelectorAll('.car1');

	const observerOptions = {
		root: null, 
		threshold: 0.2, 
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('animate');
				observer.unobserve(entry.target); 
			}
		});
	}, observerOptions);

	sections.forEach((section) => {
		observer.observe(section); 
	});
});
