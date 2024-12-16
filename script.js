document.getElementById('reveal-button').addEventListener('click', function() {
    document.getElementById('question').classList.remove('hidden');
    document.getElementById('reveal-button').classList.add('hidden');
});

document.getElementById('yes-button').addEventListener('click', function() {
    document.getElementById('response-text').innerText = "Yay! I'm so happy! I can't wait to make more memories with you.";
    document.getElementById('response').classList.remove('hidden');
    document.getElementById('question').classList.add('hidden');
});

document.getElementById('no-button').addEventListener('click', function() {
    document.getElementById('response-text').innerText = "Oh, that's okay. I still cherish every moment we've shared.";
    document.getElementById('response').classList.remove('hidden');
    document.getElementById('question').classList.add('hidden');
});

noButton.addEventListener('click', () => {
    responseText.textContent = "Oh, that's okay. I still cherish every moment we've shared.";
    responseDiv.classList.remove('hidden');
    questionDiv.style.display = 'none';
  
    // Make the "No" button move randomly
    const buttonRect = noButton.getBoundingClientRect();
    const maxX = window.innerWidth - buttonRect.width;
    const maxY = window.innerHeight - buttonRect.height;
  
    noButton.style.position = 'absolute'; 
    noButton.style.left = Math.random() * maxX + 'px';
    noButton.style.top = Math.random() * maxY + 'px';
  });
