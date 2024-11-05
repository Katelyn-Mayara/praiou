document.getElementById('yes-button').addEventListener('click', function() {
    document.getElementById('response').innerHTML = "BORA MEMOOOOO!";
    document.getElementById('response').classList.remove('hidden');
    document.getElementById('beach-image').style.display = "block";
});


const noButton = document.getElementById('no-button');

noButton.addEventListener('mouseenter', function() {
    const randomX = Math.floor(Math.random() * 100) - 50; 
    const randomY = Math.floor(Math.random() * 100) - 50; 
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`; 
});

noButton.addEventListener('mouseleave', function() {
    noButton.style.transform = `translate(0, 0)`; 
});
