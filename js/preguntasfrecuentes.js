const questions = document.querySelectorAll('.pregunta');

questions.forEach((question) => {
    question.addEventListener('click', () => {
        const answer = question.querySelector('.respuesta');
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});
