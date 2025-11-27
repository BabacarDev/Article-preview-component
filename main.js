const shareBtn = document.getElementById('share');
const sharePanel = document.getElementById('share-panel');

shareBtn.addEventListener('click', (e) => {
   e.preventDefault();
   sharePanel.toggleAttribute('hidden');}
);
