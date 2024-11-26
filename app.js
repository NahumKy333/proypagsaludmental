document.addEventListener('DOMContentLoaded', function() {
    // --- Lógica del acordeón (para la página de información) ---
    const accordionButtons = document.querySelectorAll('.accordion-btn');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;

            // Cerrar todos los otros contenidos antes de abrir el actual (opcional)
            document.querySelectorAll('.accordion-content').forEach(item => {
                if (item !== content) {
                    item.style.display = 'none';
                }
            });

            // Alternar el display del contenido actual
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });

    // --- Lógica para mostrar/ocultar el test (en la página del test) ---
    document.getElementById("toggleTest").addEventListener("click", function() {
        const form = document.getElementById("mentalHealthTest");

        // Cambiar entre expandido y colapsado
        if (form.classList.contains("expanded")) {
            form.classList.remove("expanded");
            this.textContent = "Mostrar Test"; // Cambiar el texto del botón
        } else {
            form.classList.add("expanded");
            this.textContent = "Ocultar Test"; // Cambiar el texto del botón
        }
    });

    // --- Lógica para manejar el envío del test ---
    document.getElementById("submitTest").addEventListener("click", function() {
        // Obtener los valores seleccionados
        const q1 = document.querySelector('input[name="q1"]:checked');
        const q2 = document.querySelector('input[name="q2"]:checked');
        const q3 = document.querySelector('input[name="q3"]:checked');
        const q4 = document.querySelector('input[name="q4"]:checked');

        // Verificar que todas las preguntas hayan sido contestadas
        if (!q1 || !q2 || !q3 || !q4) {
            alert("Por favor, responde todas las preguntas.");
            return;
        }

        // Sumar los valores de las respuestas
        const score = parseInt(q1.value) + parseInt(q2.value) + parseInt(q3.value) + parseInt(q4.value);

        // Determinar el resultado
        let resultText = "";
        if (score <= 6) {
            resultText = "Tu puntaje indica que te encuentras en buen estado emocional. Sigue cuidando de ti.";
        } else if (score <= 10) {
            resultText = "Podrías estar experimentando algo de malestar emocional. Considera hablar con un profesional.";
        } else {
            resultText = "Tu puntaje indica que puedes estar pasando por una etapa difícil. Te recomendamos buscar ayuda profesional.";
        }

        // Mostrar el resultado
        const resultDiv = document.getElementById("testResult");
        resultDiv.innerHTML = resultText;
        resultDiv.style.display = "block";
    });
});
