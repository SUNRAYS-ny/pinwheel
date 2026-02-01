document.addEventListener('DOMContentLoaded', function() {
  const ellipses = document.querySelectorAll('.ellipse');
  const plusIcon = document.querySelector('.plus_shape');
  
  // Add event listeners to each ellipse
  ellipses.forEach(ellipse => {
    ellipse.addEventListener('mouseenter', function() {
      const rotateDegrees = this.getAttribute('data-rotate');
      plusIcon.style.transform = `rotate(${rotateDegrees}deg)`;
    });
    
    ellipse.addEventListener('mouseleave', function() {
      // Reset rotation when mouse leaves
      plusIcon.style.transform = 'rotate(0deg)';
    });
  });
});