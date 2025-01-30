document.addEventListener("DOMContentLoaded", () => {

    window.addEventListener("scroll", () => {
        const sections = document.querySelectorAll("section");
        const navLi = document.querySelectorAll(".menu-items li a");
        
        sections.forEach((section, i) => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= -100 && rect.top < window.innerHeight / 2) {
                navLi.forEach(link => link.classList.remove("active"));
                navLi[i].classList.add("active");
            }
        });
    });
    
    // Seleccionar todos los botones "Ver Video"
    const videoButtons = document.querySelectorAll(".video-btn");

    videoButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            // Obtener el contenedor de video dentro de la misma tarjeta
            const videoContainer = button.nextElementSibling;

            // Verificar si el video ya está visible
            if (videoContainer.style.display === "block") {
                // Si el video ya está visible, ocultarlo
                videoContainer.classList.remove("visible");
                setTimeout(() => {
                    videoContainer.style.display = "none";
                }, 500); // Esperar que se complete la animación de desvanecimiento
            } else {
                // Ocultar otros videos antes de mostrar el nuevo
                document.querySelectorAll(".videoInstagram").forEach(video => {
                    video.classList.remove("visible");
                    setTimeout(() => {
                        video.style.display = "none";
                    }, 500);
                });

                // Mostrar el contenedor de video
                videoContainer.style.display = "block";
                setTimeout(() => {
                    videoContainer.classList.add("visible"); // Añadir visibilidad con desvanecimiento
                }, 10);

                // Cargar dinámicamente el script de Instagram
                if (!document.querySelector("script[src='//www.instagram.com/embed.js']")) {
                    const instagramScript = document.createElement("script");
                    instagramScript.async = true;
                    instagramScript.src = "//www.instagram.com/embed.js";
                    document.body.appendChild(instagramScript);
                } else {
                    window.instgrm.Embeds.process();
                }
            }
        });
    });

    const animatedElements = document.querySelectorAll(".ContenidoCursos");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("showCursos"); // Agrega la clase para mostrar
                observer.unobserve(entry.target); // Deja de observar el elemento
            }
        });
    }, {
        threshold: 0.2 // Porcentaje del elemento visible para activar
    });

    animatedElements.forEach((element) => observer.observe(element));

    

});
