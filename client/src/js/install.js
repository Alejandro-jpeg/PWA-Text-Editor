const butInstall = document.getElementById("buttonInstall");

//BEFORE INSTALL PROMPT
window.addEventListener('beforeinstallprompt', (event) => {
    
    window.deferredPrompt = event;

    // Removing the class hidden so the button can be seen
    butInstall.classList.toggle('hidden', false);
  });

// BUT INSTALL
butInstall.addEventListener('click', async () => {
  
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
   return;
  }

  promptEvent.prompt();
  
  window.deferredPrompt = null;
  
  butInstall.classList.toggle('hidden', true);
});

//APP INSTALLED
window.addEventListener('appinstalled', (event) => {
  window.deferredPrompt = null;
}); 

