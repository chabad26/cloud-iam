// Charger et injecter le header et footer
async function loadLayout() {
  try {
    // Charger le header
    const headerResponse = await fetch('/assets/html/header.html');
    if (!headerResponse.ok) throw new Error('Impossible de charger le header');
    const headerHTML = await headerResponse.text();
    
    // Injecter le header au début du body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    // Charger le footer
    const footerResponse = await fetch('/assets/html/footer.html');
    if (!footerResponse.ok) throw new Error('Impossible de charger le footer');
    const footerHTML = await footerResponse.text();
    
    // Injecter le footer à la fin du body
    document.body.insertAdjacentHTML('beforeend', footerHTML);
    document.dispatchEvent(new CustomEvent('layout:loaded'));
  } catch (error) {
    console.error('Erreur lors du chargement du layout:', error);
  }
}

// Charger le layout quand le DOM est prêt
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadLayout);
} else {
  loadLayout();
}
