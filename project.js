let slideIndex = 0;
		showSlides();

		function showSlides() {
			let slides = document.getElementsByClassName("slide");
			for (let i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";
			}
			slideIndex++;
			if (slideIndex > slides.length) {
				slideIndex = 1;
			}
			slides[slideIndex - 1].style.display = "flex";
			setTimeout(showSlides, 2000); 
		}

function addToCart() {
    var addToCartButton = document.querySelector('.cart button');

        addToCartButton.textContent = 'Added to Cart';    
        
		addToCartButton.classList.add('added-to-cart');
		
		addToCartButton.disabled = true;
}

function increment() {
	var input = document.getElementById('quantity');
	input.value = parseInt(input.value, 10) + 1;
  }
  
function decrement() {
	var input = document.getElementById('quantity');
	var value = parseInt(input.value, 10);
	
	if (value > 0) {
	  input.value = value - 1;
	}
}

  