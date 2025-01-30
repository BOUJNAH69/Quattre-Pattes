// pour que quand le dom se charge on charge directement le javascript.
// c'est pour optimiser
document.addEventListener("DOMContentLoaded", function () {
    function toggleMenu() {
        document.querySelector('.mobile-nav').classList.toggle('active');
        document.querySelector('.burger-menu').classList.toggle('active'); // Transforme le burger en croix
    }

    document.querySelector('.burger-menu').addEventListener("click", toggleMenu);

    // Gestion des dons
    const donationOptions = document.querySelectorAll(".donation-option");
    const freqButtons = document.querySelectorAll(".freq-btn");
    const donateNowBtn = document.querySelector(".donate-now");
    let selectedAmount = 50; 
    let selectedFrequency = "Mensuel"; 

    // Gérer la sélection des montants
    donationOptions.forEach(option => {
        option.addEventListener("click", function () {
            donationOptions.forEach(opt => opt.classList.remove("active"));
            this.classList.add("active");
            // Les attributs en html
            selectedAmount = this.getAttribute("montant");
            updateDonationButton();
        });
    });

    // Gérer la sélection de la fréquence
    freqButtons.forEach(button => {
        button.addEventListener("click", function () {
            freqButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
            selectedFrequency = this.innerText;
            updateDonationButton();
        });
    });

    function updateDonationButton() {
        donateNowBtn.innerHTML = `❤️ Faire un don de ${selectedAmount}€/${selectedFrequency.toLowerCase()}`;
    }

    // Gestion des Histoires de Réussite
    const storyButtons = document.querySelectorAll(".story-btn");
    const storyMainImage = document.querySelector(".story-main img");
    const storyTitle = document.querySelector(".story-text h3");
    const storyText = document.querySelector(".story-text p");

    // Gérer le changement d'histoire au clic
    storyButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Supprimer la classe active de tous les boutons
            storyButtons.forEach(btn => btn.classList.remove("active"));

            // Ajouter la classe active au bouton sélectionné
            this.classList.add("active");

            // Changer l'image et le texte de l'histoire principale
            const newImage = this.getAttribute("data-image");
            const newTitle = this.getAttribute("data-title");
            const newText = this.getAttribute("data-text");

            storyMainImage.src = newImage;
            storyTitle.textContent = newTitle;
            storyText.textContent = newText;
        });
    });
 
    document.querySelectorAll(".quiz-item").forEach(quizItem => {
        const buttons = quizItem.querySelectorAll(".quiz-btn");
        const responseDiv = quizItem.querySelector(".quiz-response");
    
        buttons.forEach(button => {
            button.addEventListener("click", function () {
                // Cacher toutes les réponses et réinitialiser les boutons pour cette question
                buttons.forEach(btn => {
                    btn.style.backgroundColor = "#ddd";
                    btn.style.color = "black";
                });
    
                // Vérifier si la réponse est correcte
                const isCorrect = this.getAttribute("data-answer") === "true";
                const message = this.getAttribute("data-message");
    
                // Appliquer les couleurs uniquement au bouton sélectionné
                if (isCorrect) {
                    this.style.backgroundColor = "#4CAF50"; // Vert ✅
                    this.style.color = "white";
                    responseDiv.className = "quiz-response correct";
                } else {
                    this.style.backgroundColor = "#f44336"; // Rouge ❌
                    this.style.color = "white";
                    responseDiv.className = "quiz-response wrong";
                }
    
                // Afficher uniquement la réponse sélectionnée
                responseDiv.innerHTML = message;
                responseDiv.style.display = "block";
    
                // Désactiver les boutons après le choix
                buttons.forEach(btn => {
                    btn.disabled = true;
                });
            });
        });
    });
    
});
