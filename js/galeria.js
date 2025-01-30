document.addEventListener("DOMContentLoaded", function() {
    const teclas = document.querySelectorAll('.tecla');
    let imgIndex = 0; // Índice de la imagen actual

    teclas.forEach((tecla, index) => {
        tecla.addEventListener('mouseover', function() {
            const imgSrc = this.getAttribute('data-img');
            this.style.backgroundImage = `url(${imgSrc})`;
            this.style.backgroundSize = "cover";
            
        });

        tecla.addEventListener('mouseout', function() {
            this.style.backgroundImage = '';
        });

        tecla.addEventListener('click', function() {
            imgIndex = index; // Actualiza el índice de la imagen actual
            updateModalImage();
            $('#imagenModal').modal('show');
        });
    });

    // Función para actualizar la imagen en el modal
    function updateModalImage() {
        const imgSrc = teclas[imgIndex].getAttribute('data-img');
        document.getElementById('imgModal').src = imgSrc;
    }

    // Agrega botones de navegación en el modal (si aún no los has hecho en tu HTML)
    document.getElementById('nextBtn').addEventListener('click', function() {
        imgIndex = (imgIndex + 1) % teclas.length; // Avanza al siguiente índice circularmente
        updateModalImage();
    });

    document.getElementById('prevBtn').addEventListener('click', function() {
        imgIndex = (imgIndex - 1 + teclas.length) % teclas.length; // Retrocede al índice anterior circularmente
        updateModalImage();
    });
});
