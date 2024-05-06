document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".question1-container");

    faqItems.forEach(function (item) {
        const question = item.querySelector(".question1-text");

        question.addEventListener("click", function () {
            const answer = item.querySelector(".answer");
            const toggleIcon = question.querySelector(".toggle-icon");

            const isOpen = answer.classList.contains("show");

            faqItems.forEach(function (otherItem) {
                otherItem.querySelector(".answer").classList.remove("show");
                otherItem.querySelector(".toggle-icon").textContent = "+";
            });

            if (!isOpen) {
                answer.classList.add("show");
                toggleIcon.textContent = "-";
            }
        });
    });
});
