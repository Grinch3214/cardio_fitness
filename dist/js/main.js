function openCard(event, tabName) {
	let i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(tabName).style.display = "block";
	event.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

function openCardTab(event, tabName) {
	let i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontentReviews");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinksReviews");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(tabName).style.display = "block";
	event.currentTarget.className += " active";
}

document.getElementById("defaultOpenCard").click();


const menuIcon = document.querySelector('.menu__icon');
const headerNav = document.querySelector('.header__nav');
if (menuIcon) {

	menuIcon.addEventListener("click", function (e) {
		document.body.classList.toggle('lock');
		menuIcon.classList.toggle('active');
		headerNav.classList.toggle('active');
	});
}

const menuLinks = document.querySelectorAll('.header__item-link');

if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", function (e) {
			document.body.classList.remove('lock');
			menuIcon.classList.remove('active');
			headerNav.classList.remove('active');
		});
	});
}

const swiper = new Swiper('.swiper', {
	spaceBetween: 0,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	autoplay: {
		delay: 3000,
	},
	loop: true,
});


$(document).ready(function () {
	$('button.footer-btn').click(function (event) {
		event.preventDefault();
		$('#overlay').fadeIn(297, function () {
			$('#modal')
				.css('display', 'block')
				.animate({ opacity: 1 }, 198);
		});
	});

	$('#modal_close, #overlay, .form-button').click(function () {
		$('#modal').animate({ opacity: 0 }, 198, function () {
			$(this).css('display', 'none');
			$('#overlay').fadeOut(297);
		});
	});
});

const footerBtn = document.querySelector('.footer-btn');
if (footerBtn) {
	footerBtn.addEventListener("click", function (e) {
		document.body.classList.toggle('lock');
	});
}

const overLay = document.querySelector('#overlay');
const close = document.querySelector('.close');
const formBtn = document.querySelector('.form-button');
if (overLay) {
	overLay.addEventListener("click", function (event) {
		document.body.classList.remove('lock');
	});
}
if (close) {
	close.addEventListener("click", function (event) {
		document.body.classList.remove('lock');
	});
}
if (formBtn) {
	formBtn.addEventListener("click", function (event) {
		document.body.classList.remove('lock');
	});
}


$(document).ready(function () {

	//E-mail Ajax Send
	$("form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			// alert("Спасибо!");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
			}, 300);
		});
		return false;
	});

});