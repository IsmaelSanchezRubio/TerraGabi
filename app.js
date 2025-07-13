// Lógica para la funcionalidad del carrusel de imágenes (específica de index.html)
document.addEventListener("DOMContentLoaded", () => {
  const carouselImages = document.getElementById("carousel-images");

  // Solo inicializa el carrusel si el elemento existe en la página (es decir, estamos en index.html)
  if (carouselImages) {
    const images = carouselImages.querySelectorAll("img");
    const totalImages = images.length;
    let currentIndex = 0;

    /**
     * Mueve el carrusel a la imagen siguiente o anterior.
     * @param {number} direction - 1 para siguiente, -1 para anterior.
     */
    window.moveCarousel = function (direction) {
      // Hacemos la función global para onclick en HTML
      currentIndex += direction;
      // Reinicia el índice si se sale de los límites
      if (currentIndex >= totalImages) {
        currentIndex = 0;
      } else if (currentIndex < 0) {
        currentIndex = totalImages - 1;
      }
      // Aplica la transformación CSS para mover las imágenes horizontalmente
      carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
      updateDots(); // Actualiza los puntos de navegación para reflejar la imagen actual
    };

    /**
     * Crea los puntos de navegación del carrusel dinámicamente.
     * Cada punto es clickeable para navegar directamente a una imagen.
     */
    function createDots() {
      const carouselDots = document.getElementById("carousel-dots");
      // Limpia los puntos existentes antes de crearlos de nuevo (útil si se llama varias veces)
      carouselDots.innerHTML = "";
      for (let i = 0; i < totalImages; i++) {
        const dot = document.createElement("span");
        dot.classList.add("carousel-dot");
        // Añade un evento de click para navegar a la imagen correspondiente
        dot.addEventListener("click", () => {
          currentIndex = i;
          carouselImages.style.transform = `translateX(-${
            currentIndex * 100
          }%)`;
          updateDots();
        });
        carouselDots.appendChild(dot);
      }
      updateDots(); // Asegura que el punto inicial esté activo
    }

    /**
     * Actualiza el estado visual de los puntos de navegación.
     * El punto correspondiente a la imagen actual se marca como 'activo'.
     */
    function updateDots() {
      const dots = document.querySelectorAll(".carousel-dot");
      dots.forEach((dot, index) => {
        if (index === currentIndex) {
          dot.classList.add("active");
        } else {
          dot.classList.remove("active");
        }
      });
    }

    createDots(); // Inicializa los puntos del carrusel
    // Opcional: Carrusel automático
    // setInterval(() => {
    //     window.moveCarousel(1);
    // }, 5000); // Cambia de imagen cada 5 segundos
  }
});

// Lógica para cargar y mostrar la carta (específica de carta.html)
document.addEventListener("DOMContentLoaded", () => {
  const menuContainer = document.getElementById("menu-container");

  // Solo renderiza la carta si el elemento existe en la página (es decir, estamos en carta.html)
  if (menuContainer) {
    // Datos de la carta con información de alérgenos
    const menuItems = [
      // Entrantes
      {
        category: "Entrantes Frescos y Ligeros",
        name: "Carpaccio de Pulpo con Gochujang Suave",
        description:
          "Finas láminas de pulpo de Huelva cocidas a baja temperatura, aliñadas con aceite de oliva virgen extra, cítricos y un toque sutil de pasta de pimiento coreano fermentado (gochujang).",
        price: "8,50",
        image: "assets/platos/1.png",
        allergens: ["Moluscos", "Sésamo"],
      },
      {
        category: "Entrantes Frescos y Ligeros",
        name: "Tartar de Atún Rojo con Sésamo Tostado y Alcaparras Crujientes",
        description:
          "Atún rojo salvaje picado, marinado con soja baja en sodio, aceite de sésamo tostado, jengibre fresco, cebollino y alcaparras fritas.",
        price: "9,90",
        image: "assets/platos/2.png",
        allergens: ["Pescado", "Soja", "Sésamo"],
      },
      {
        category: "Entrantes Frescos y Ligeros",
        name: "Gazpacho de Tomate Asado con Crujiente de Kimchi",
        description:
          "Una versión ahumada del clásico gazpacho andaluz, servido frío y acompañado de finas láminas de kimchi deshidratado para un contraste de textura y sabor.",
        price: "7,50",
        image: "assets/platos/3.png",
        allergens: [],
      },
      {
        category: "Entrantes Frescos y Ligeros",
        name: "Ensalada de Quinoa Negra, Burrata y Brotes con Aderezo de Yuzu",
        description:
          "Quinoa negra con tomate cherry confitado, rúcula, burrata cremosa y una vinagreta ligera de aceite de oliva, lima y yuzu japonés.",
        price: "12,00",
        image: "assets/platos/4.png",
        allergens: ["Lactosa"],
      },
      {
        category: "Entrantes Frescos y Ligeros",
        name: "Gyozas de Gamba Blanca al Ajillo",
        description:
          "Delicadas empanadillas rellenas de gamba blanca fresca de la costa, salteadas con ajo y guindilla, servidas con una salsa de soja y mirin.",
        price: "10,50",
        image: "assets/platos/5.png",
        allergens: ["Crustáceos", "Gluten", "Soja"],
      },

      // Del Mar a la Mesa
      {
        category: "Del Mar a la Mesa (Pescados y Mariscos)",
        name: "Lubina Salvaje a la Sal con Salsa de Ciruela Coreana",
        description:
          "Lubina entera horneada en costra de sal marina, terminada en mesa y acompañada de una salsa agridulce y afrutada a base de ciruelas coreanas.",
        price: "21,50",
        image: "assets/platos/6.png",
        allergens: ["Pescado"],
      },
      {
        category: "Del Mar a la Mesa (Pescados y Mariscos)",
        name: "Arroz Cremoso de Plancton Marino con Vieira Sellada y Algas Nori",
        description:
          "Un risotto innovador con el sabor umami del plancton, coronado por una vieira glaseada y tiras de alga nori crujiente.",
        price: "19,00",
        image: "assets/platos/7.png",
        allergens: ["Moluscos"],
      },
      {
        category: "Del Mar a la Mesa (Pescados y Mariscos)",
        name: "Bacalao Confitado con Pipirrana Mediterránea y Salsa de Soja Fermentada",
        description:
          "Lomo de bacalao confitado en aceite de oliva, acompañado de una refrescante pipirrana de verduras frescas y una reducción de soja fermentada.",
        price: "18,50",
        image: "assets/platos/8.png",
        allergens: ["Pescado", "Soja"],
      },
      {
        category: "Del Mar a la Mesa (Pescados y Mariscos)",
        name: "Gambas de Huelva Salteadas al Sabor Kimchi",
        description:
          "Las icónicas gambas blancas de la zona salteadas al wok con un aderezo vibrante que evoca los matices especiados y fermentados del kimchi.",
        price: "16,00",
        image: "assets/platos/9.png",
        allergens: ["Crustáceos"],
      },
      {
        category: "Del Mar a la Mesa (Pescados y Mariscos)",
        name: "Pargo en Papillote con Verduras de Temporada y Caldo Dashi",
        description:
          "Pargo fresco cocinado en su jugo con verduras al vapor, aromatizado con un ligero caldo dashi para realzar su sabor natural.",
        price: "22,00",
        image: "assets/platos/10.png",
        allergens: ["Pescado"],
      },

      // De la Tierra
      {
        category: "De la Tierra (Carnes y Aves)",
        name: "Solomillo de Ternera al Carbón con Puré de Boniato y Reducción de Oporto y Gochujang",
        description:
          "Solomillo de ternera madurada a la brasa, servido con un cremoso puré de boniato y una salsa rica que combina el dulzor del Oporto con el picante del gochujang.",
        price: "24,00",
        image: "assets/platos/11.png",
        allergens: ["Sulfitos"],
      },
      {
        category: "De la Tierra (Carnes y Aves)",
        name: "Costillas de Cerdo Ibérico Lacadas con Miel de Caña y Gochujang",
        description:
          "Costillas ibéricas cocinadas a baja temperatura hasta la perfección, glaseadas con una reducción de miel de caña de la región y gochujang.",
        price: "19,50",
        image: "assets/platos/12.png",
        allergens: [],
      },
      {
        category: "De la Tierra (Carnes y Aves)",
        name: "Pollo Crujiente Estilo Coreano con Salsa de Yogur Griego y Menta",
        description:
          "Trozos de pollo marinados y fritos hasta quedar extra crujientes, servidos con una refrescante salsa de yogur griego, pepino y menta.",
        price: "15,00",
        image: "assets/platos/13.png",
        allergens: ["Gluten", "Lactosa"],
      },
      {
        category: "De la Tierra (Carnes y Aves)",
        name: "Carrilleras de Cerdo Estofadas al Vino Tinto con Castañas y Champiñones Shiitake",
        description:
          "Tiernas carrilleras estofadas en vino tinto, acompañadas de castañas de la sierra y el toque umami de los champiñones shiitake.",
        price: "17,50",
        image: "assets/platos/14.png",
        allergens: ["Sulfitos"],
      },

      // Arroces y Pastas
      {
        category: "Arroces y Pastas",
        name: "Paella Fusión de Mariscos con Kimchi y Aceite de Sésamo",
        description:
          "Una reinterpretación de la paella de mariscos, donde el sofrito se enriquece con kimchi y un toque final de aceite de sésamo para un sabor único.",
        price: "20,00",
        image: "assets/platos/15.png",
        allergens: ["Mariscos", "Sésamo"],
      },
      {
        category: "Arroces y Pastas",
        name: "Fideuá Negra con Calamar y Alioli de Azafrán Coreano (Jaffron)",
        description:
          "Fideuá teñida con tinta de calamar, trozos de calamar fresco y un alioli tradicional con un matiz exótico de azafrán coreano.",
        price: "19,00",
        image: "assets/platos/16.png",
        allergens: ["Gluten", "Moluscos", "Huevo"],
      },
      {
        category: "Arroces y Pastas",
        name: "Pasta Fresca al Vongole con Nori Tostado",
        description:
          "Pasta fresca (tagliatelle o linguine) salteada con almejas, ajo, guindilla y un toque de vino blanco, finalizada con crujiente nori tostado.",
        price: "16,50",
        image: "assets/platos/17.png",
        allergens: ["Gluten", "Moluscos", "Sulfitos"],
      },

      // Opciones Vegetarianas
      {
        category: "Opciones Vegetarianas",
        name: "Berenjena Asada con Salsa Romesco de Nueces Pecanas y Bulgogi de Setas",
        description:
          "Media berenjena asada, cubierta con una salsa romesco diferente (con nueces pecanas) y shiitake salteados al estilo bulgogi.",
        price: "14,00",
        image: "assets/platos/18.png",
        allergens: ["Frutos de cáscara (nueces)"],
      },

      // Postres
      {
        category: "Postres (Dulce Fusión)",
        name: "Panacotta de Té Matcha con Coulis de Mango y Menta",
        description:
          "Clásica panacotta italiana infusionada con té matcha, servida con un coulis tropical de mango y hojas de menta fresca.",
        price: "7,00",
        image: "assets/platos/19.png",
        allergens: ["Lactosa"],
      },
      {
        category: "Postres (Dulce Fusión)",
        name: "Brownie de Chocolate Negro con Helado de Sésamo Negro y Tierra de Pistacho",
        description:
          "Un decadente brownie de chocolate acompañado de un helado artesanal de sésamo negro coreano y una 'tierra' crujiente de pistachos.",
        price: "7,50",
        image: "assets/platos/20.png",
        allergens: [
          "Gluten",
          "Lactosa",
          "Huevo",
          "Sésamo",
          "Frutos de cáscara (pistachos)",
        ],
      },
    ];

    /**
     * Función para renderizar los elementos de la carta en la página.
     * Organiza los platos por categoría y los muestra en un diseño de dos columnas.
     */
    function renderMenu() {
      const menuContainer = document.getElementById("menu-container");
      let currentCategory = "";
      let currentCategoryGrid = null; // Variable para el contenedor de la cuadrícula de la categoría actual

      menuItems.forEach((item) => {
        // Si la categoría cambia, añade un nuevo título de categoría y un nuevo contenedor de cuadrícula
        if (item.category !== currentCategory) {
          currentCategory = item.category;

          // Crea y añade el título de la categoría
          const categoryTitleElement = document.createElement("h2");
          categoryTitleElement.classList.add("category-title");
          categoryTitleElement.textContent = currentCategory;
          menuContainer.appendChild(categoryTitleElement);

          // Crea un nuevo div para los productos de esta categoría con las clases de cuadrícula
          currentCategoryGrid = document.createElement("div");
          currentCategoryGrid.classList.add(
            "grid",
            "grid-cols-1",
            "md:grid-cols-2",
            "gap-8"
          );
          menuContainer.appendChild(currentCategoryGrid);
        }

        // Crea el elemento de la tarjeta del plato
        const itemCard = document.createElement("div");
        itemCard.classList.add("menu-item-card");

        // Almacena los datos completos del item en un atributo 'data-item'
        // Esto nos permite recuperarlos fácilmente al hacer clic
        itemCard.dataset.item = JSON.stringify(item);

        // Imagen del plato
        const itemImage = document.createElement("img");
        itemImage.src = item.image;
        itemImage.alt = item.name;
        itemCard.appendChild(itemImage);

        // Contenido del plato (nombre, descripción, precio y botones de acción)
        const itemContent = document.createElement("div");
        itemContent.classList.add("menu-item-content");

        const itemName = document.createElement("h3");
        itemName.classList.add("menu-item-name");
        itemName.textContent = item.name;
        itemContent.appendChild(itemName);

        const itemDescription = document.createElement("p");
        itemDescription.classList.add("menu-item-description");
        itemDescription.textContent = item.description;
        itemContent.appendChild(itemDescription);

        const itemPrice = document.createElement("span");
        itemPrice.classList.add("menu-item-price");
        itemPrice.textContent = `${item.price}€`;
        itemContent.appendChild(itemPrice);

        // Contenedor para los botones de acción (vacío por ahora, pero se mantiene la estructura)
        const itemActions = document.createElement("div");
        itemActions.classList.add("menu-item-actions");

        itemCard.appendChild(itemContent); // Añade el contenido a la tarjeta del plato
        currentCategoryGrid.appendChild(itemCard); // Añade la tarjeta al contenedor de la cuadrícula de la categoría actual

        // Añade el evento de clic a cada tarjeta de plato
        itemCard.addEventListener("click", () => {
          // Recupera los datos del item desde el atributo 'data-item' y los parsea
          const clickedItem = JSON.parse(itemCard.dataset.item);
          openMenuItemModal(clickedItem); // Abre la modal con los datos del plato
        });
      });
    }

    // Llama a la función para renderizar la carta cuando el DOM esté completamente cargado
    renderMenu();

    /**
     * Abre la ventana modal con los detalles del plato.
     * @param {object} itemData - Objeto con los datos del plato (name, description, price, image, allergens).
     */
    function openMenuItemModal(itemData) {
      const modal = document.getElementById("menu-item-modal");
      const modalImage = document.getElementById("modal-item-image");
      const modalName = document.getElementById("modal-item-name");
      const modalDescription = document.getElementById(
        "modal-item-description"
      );
      const modalPrice = document.getElementById("modal-item-price");
      const modalAllergens = document.getElementById("modal-item-allergens");

      // Rellena la modal con los datos del plato
      modalImage.src = itemData.image;
      modalImage.alt = itemData.name;
      modalName.textContent = itemData.name;
      modalDescription.textContent = itemData.description;
      modalPrice.textContent = `${itemData.price}€`;

      // Limpia y añade los alérgenos
      modalAllergens.innerHTML = ""; // Limpia cualquier alérgeno anterior
      if (itemData.allergens && itemData.allergens.length > 0) {
        const allergensTitle = document.createElement("h4");
        allergensTitle.classList.add("modal-allergens-title");
        allergensTitle.textContent = "Alérgenos:";
        modalAllergens.appendChild(allergensTitle);

        const allergensList = document.createElement("ul");
        allergensList.classList.add("modal-allergens-list");
        itemData.allergens.forEach((allergen) => {
          const listItem = document.createElement("li");
          listItem.textContent = allergen;
          allergensList.appendChild(listItem);
        });
        modalAllergens.appendChild(allergensList);
      } else {
        const noAllergensText = document.createElement("p");
        noAllergensText.classList.add("modal-no-allergens");
        noAllergensText.textContent = "Sin alérgenos conocidos.";
        modalAllergens.appendChild(noAllergensText);
      }

      modal.classList.add("show-modal"); // Muestra la modal aplicando la clase CSS
    }

    /**
     * Cierra la ventana modal.
     */
    function closeMenuItemModal() {
      const modal = document.getElementById("menu-item-modal");
      modal.classList.remove("show-modal"); // Oculta la modal quitando la clase CSS
    }

    // Añade el evento de clic al botón de cerrar la modal
    const closeButton = document.querySelector(".modal-close-button");
    if (closeButton) {
      closeButton.addEventListener("click", closeMenuItemModal);
    }

    // Cierra la modal si se hace clic fuera del contenido de la modal
    const modalOverlay = document.getElementById("menu-item-modal");
    if (modalOverlay) {
      modalOverlay.addEventListener("click", (event) => {
        // Si el clic fue directamente en el overlay (no en el contenido de la modal)
        if (event.target === modalOverlay) {
          closeMenuItemModal();
        }
      });
    }
  }
});

// Lógica para actualizar los enlaces del header en todas las páginas
document.addEventListener("DOMContentLoaded", () => {
  // Selecciona todos los enlaces de navegación dentro del header
  const navLinks = document.querySelectorAll("header nav a");

  navLinks.forEach((link) => {
    // Si el enlace es "Home", asegura que apunte a index.html
    if (link.textContent.includes("Terra Gabi")) {
      // Usamos el texto del nombre del restaurante para el enlace de inicio
      link.href = "index.html";
    } else if (link.textContent === "Carta") {
      link.href = "carta.html";
    } else if (link.textContent === "Reserva de Mesa") {
      // Ahora el enlace de reserva apunta a la nueva página reserva.html
      link.href = "reserva.html";
    } else if (link.textContent === "Contacto") {
      link.href = "contacto.html";
    }
  });
});

// Lógica para la funcionalidad de la reserva de mesa (específica de reserva.html)
document.addEventListener("DOMContentLoaded", () => {
  const horaSelect = document.getElementById("hora");

  // Función para generar las opciones de hora
  function generateTimeOptions() {
    // Limpia las opciones existentes, excepto la primera (placeholder)
    while (horaSelect.options.length > 1) {
      horaSelect.remove(1);
    }

    // Horario de apertura del restaurante (¡AJUSTA ESTO CON EL HORARIO REAL!)
    // Ejemplo: de 10:00 a 22:00 cada media hora
    const openHour = 10; // Hora de apertura (ej: 10 para 10:00)
    const closeHour = 22; // Hora de cierre (ej: 22 para 22:00)

    // Bucle para generar las horas cada media hora
    for (let h = openHour; h <= closeHour; h++) {
      for (let m = 0; m < 60; m += 30) {
        // Formatea la hora y los minutos para que tengan dos dígitos (ej: 09:00, 10:30)
        const hour = String(h).padStart(2, "0");
        const minute = String(m).padStart(2, "0");
        const time = `${hour}:${minute}`;

        // Crea una nueva opción para el selector
        const option = document.createElement("option");
        option.value = time;
        option.textContent = time;
        horaSelect.appendChild(option);
      }
    }
  }

  // Llama a la función para generar las opciones de hora cuando la página se carga
  generateTimeOptions();
});
