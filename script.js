let img_slider = document.getElementsByClassName("img_slider");

let etape = 0;

let nbr_img = img_slider.length;

let retour = document.querySelector(".retour");
let suivant = document.querySelector(".suivant");

function enleverActiveImages() {
	for (let i = 0; i < nbr_img; i++) {
		img_slider[i].classList.remove("active");
	}
}

suivant.addEventListener("click", function () {
	etape++;
	if (etape >= nbr_img) {
		etape = 0;
	}
	enleverActiveImages();
	img_slider[etape].classList.add("active");
});

retour.addEventListener("click", function () {
	etape--;
	if (etape < 0) {
		etape = nbr_img - 1;
	}
	enleverActiveImages();
	img_slider[etape].classList.add("active");
});
