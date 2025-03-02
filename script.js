document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".accordion-button");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target");
            const accordion = document.getElementById(targetId);
            
            if (!accordion) return;

            // Tjek om den allerede er åben
            const isOpen = accordion.style.maxHeight && accordion.style.maxHeight !== "0px";

            // Luk alle accordeons
            document.querySelectorAll(".accordion").forEach((acc) => {
                acc.style.maxHeight = "0px";
                acc.style.padding = "0 10px";
            });

            // Fjern aktiv klasse fra alle chevrons
            document.querySelectorAll(".accordion-button").forEach((btn) => {
                btn.classList.remove("open");
            });

            // Hvis den ikke var åben, åbn den og tilføj "open"-klasse
            if (!isOpen) {
                accordion.style.maxHeight = (accordion.scrollHeight + 20) + "px";
                accordion.style.padding = "10px";
                this.classList.add("open");
            }
        });
    });
});