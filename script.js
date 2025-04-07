const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
   smooth: true
});
var fix = document.querySelector('.fixed-image');
var elemC = document.querySelector('.elem-container');
elemC.addEventListener("mouseenter", function() {
    fix.style.display = "block";
});
elemC.addEventListener("mouseleave", function() {
    fix.style.display = "none";
});
var elems = document.querySelectorAll('.elem');
elems.forEach(function(e){
    e.addEventListener("mouseenter", function() {
        var image = e.getAttribute('data-image');
        fix.style.backgroundImage = `url(${image})`;

    })

})
// Select all h1 elements in the last-left div
const headings = document.querySelectorAll('.last-left h1');

// Select the image and paragraph elements
const imageElement = document.querySelector('.last-right img');
const paragraphElement = document.querySelector('.last-left p');

// Add click event listeners to each h1
headings.forEach((heading) => {
    heading.addEventListener('click', () => {
        // Get the data attributes from the clicked h1
        const newImage = heading.getAttribute('data-image');
        const newText = heading.getAttribute('data-text');

        // Update the image and paragraph with a smooth transition
        imageElement.style.opacity = '0';
        paragraphElement.style.opacity = '0';

        setTimeout(() => {
            imageElement.src = newImage;
            paragraphElement.textContent = newText;

            imageElement.style.opacity = '1';
            paragraphElement.style.opacity = '1';
        }, 300); // Delay to match the fade-out animation
    });
});

