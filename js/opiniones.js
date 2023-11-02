document.addEventListener("DOMContentLoaded", () => {
    const reviewForm = document.getElementById("review-form");
    const reviewsContainer = document.getElementById("reviews");

    // Recuperar opiniones almacenadas en localStorage al cargar la página
    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];

    // Mostrar opiniones almacenadas en el contenedor
    storedReviews.forEach((review, index) => {
        addReview(review.name, review.comment, index);
    });

    reviewForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const nameInput = document.getElementById("name");
        const commentInput = document.getElementById("comment");

        const name = nameInput.value;
        const comment = commentInput.value;

        if (name && comment) {
            addReview(name, comment);

            // Almacenar opiniones en localStorage
            const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
            storedReviews.push({ name, comment });
            localStorage.setItem("reviews", JSON.stringify(storedReviews));

            nameInput.value = "";
            commentInput.value = "";
        }
    });

    function addReview(name, comment, index) {
        const reviewDiv = document.createElement("div");
        reviewDiv.className = "review";
        reviewDiv.innerHTML = `
            <h3>${name}</h3>
            <p>${comment}</p>
            <button class="delete-button" data-index="${index}">Eliminar</button>
        `;
        reviewsContainer.appendChild(reviewDiv);

        const deleteButtons = reviewDiv.querySelectorAll(".delete-button");
        deleteButtons.forEach((button) => {
            button.addEventListener("click", (e) => {
                const index = e.target.getAttribute("data-index");
                removeReview(index);
            });
        });
    }

    function removeReview(index) {
        // Eliminar la opinión del DOM
        reviewsContainer.removeChild(reviewsContainer.children[index]);

        // Eliminar la opinión del almacenamiento local
        const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
        storedReviews.splice(index, 1);
        localStorage.setItem("reviews", JSON.stringify(storedReviews));
    }
});
