<div align="center">

#  MG. Portfolio
**Portafolio Personal — Maria Alejandra Gomez Archila**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![PokéAPI](https://img.shields.io/badge/PokéAPI-EF5350?style=for-the-badge&logo=pokemon&logoColor=white)

---

**Portafolio personal con temática Pokémon desarrollado con HTML, CSS y JavaScript. Presenta proyectos, habilidades y formas de contacto de forma interactiva y animada.**

**2026 — HTML + CSS + JavaScript + PokéAPI**

</div>

---

##  Descripción General

**MG. Portfolio** es un portafolio personal con estética de videojuego retro inspirada en Pokémon. Incluye:

-  Trainer Card animada con foto y estadísticas
-  Sección de perfil estilo Pokédex
-  Proyectos presentados como cartas Pokémon con datos reales de la PokéAPI
-  Gráfico de tipos con habilidades técnicas
-  Soft skills estilo movimientos de combate
-  Sección de contacto con botones a Email y LinkedIn
-  Versión en inglés disponible (`index-en.html`)
-  Fondo animado de estrellas y efecto parallax

---

##  Tecnologías Utilizadas

| Capa | Tecnología |
|------|------------|
| **Estructura** | HTML5 semántico |
| **Estilos** | CSS3 (variables, animaciones, responsive) |
| **Lógica** | JavaScript  |
| **Datos** | PokéAPI (REST, fetch async/await) |
| **Tipografía** | Press Start 2P (Google Fonts) |
| **Diseño** | Figma |

---

##  Estructura del Proyecto

```
 portfolio/
├── index.html          # Versión en español (principal)
├── index-en.html       # Versión en inglés
├── style.css           # Estilos globales y responsive
├── script.js           # Lógica principal (ES)
├── script-en.js        # Lógica versión inglés
└── media/
    ├── perfilgit.jpg   # Foto de perfil
    └── pokeTrainer.png # Sprite de entrenadora
```

---

##  Instalación y Uso

No requiere instalación. Es un proyecto estático que corre directamente en el navegador.

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/portfolio.git
cd portfolio

# 2. Abrir en el navegador
# Opción A: doble clic en index.html
# Opción B: con Live Server en VS Code
```

> **Recomendado:** Usar la extensión **Live Server** de VS Code para evitar problemas con el fetch a la PokéAPI por CORS en algunos navegadores.

---

##  Secciones

| Sección | Descripción |
|---------|-------------|
| **HOME** | Trainer Card con nombre, título y estadísticas |
| **PROFILE** | Entrada de Pokédex con descripción personal |
| **POKEDEX** | Proyectos como cartas Pokémon con datos de la PokéAPI |
| **STRATEGIES** | Habilidades técnicas organizadas por tipo |
| **SKILLS** | Soft skills como movimientos de combate |
| **CONTACT** | Botones de contacto a Email y LinkedIn |

---

##  Integración con PokéAPI

Los proyectos y categorías de habilidades consumen datos reales de [PokéAPI](https://pokeapi.co/) de forma asíncrona:

```javascript
async function fetchPokemon(nameOrId) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);
    return res.json();
}
```

Cada proyecto tiene un Pokémon asociado que aporta su sprite oficial, tipos y estadísticas base a la carta.

| Proyecto | Pokémon | Por qué |
|----------|---------|---------|
| Kario Media | Bulbasaur | Raíces sólidas, diseño base |
| LogiTrack | Jigglypuff | Música  |
| LMS CampusLand | Mewtwo | Poder y conocimiento |

---

##  Responsive Design

El portafolio está optimizado para todos los dispositivos:

| Breakpoint | Dispositivo |
|------------|-------------|
| `< 480px` | Teléfonos pequeños |
| `< 640px` | Teléfonos |
| `< 768px` | Tablets portrait |
| `< 1024px` | Tablets landscape / laptop pequeño |

---

##  Contacto

| Canal | Info |
|-------|------|
| **Email** | maga1731@gmail.com |
| **LinkedIn** | [maria-alejandra-gomez-archila](https://www.linkedin.com/in/maria-alejandra-gomez-archila-873340373/) |
| **GitHub** | [gamaz-19](https://github.com/gamaz-19) |

---

<div align="center">

**Desarrollado con 💻 + ☕ = 💡 por Maria Alejandra Gomez Archila • 2026**

[![HTML5](https://img.shields.io/badge/Made_with-HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![JavaScript](https://img.shields.io/badge/Powered_by-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</div>