document.addEventListener('DOMContentLoaded', function() {

    function toggleGuirlhanda(groupNumber, clickedButtonId) {
    
      const buttonsGroup = document.querySelectorAll(`button[id^="botao"][id$="${groupNumber}"]`);
  
      buttonsGroup.forEach(button => {
        const img = button.querySelector('img');
        const currentSrc = img.getAttribute('src');
        const hasGuirlhanda = currentSrc.includes('Guirlhanda');
  
   
        if (button.id === clickedButtonId) {
    
          if (hasGuirlhanda) {
            img.setAttribute('src', currentSrc.replace(' - Guirlhanda', ''));
          } else {
            img.setAttribute('src', currentSrc.replace('.png', ' - Guirlhanda.png'));
          }
        } else {
          // Todos os outros botões do grupo devem ter o "Guirlhanda" removido
          if (hasGuirlhanda) {
            img.setAttribute('src', currentSrc.replace(' - Guirlhanda', ''));
          }
        }
      });
    }
  
   
    const allButtons = document.querySelectorAll('button[id^="botao"]');
  
    allButtons.forEach(button => {
      button.addEventListener('click', function() {
  
        const groupNumber = this.id.replace(/\D/g, '');
  
      
        toggleGuirlhanda(groupNumber, this.id);
      });
    });
  });
  