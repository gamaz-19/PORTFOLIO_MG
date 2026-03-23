/* ─── HAMBURGER MENU ─── */
document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
});

/* ─── SCROLL REVEAL ─── */
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ─── TYPE COLORS MAP ─── */
const TYPE_COLORS = {
    fire: '#F08030',
    water: '#6890F0',
    grass: '#78C850',
    electric: '#F8D030',
    psychic: '#F85888',
    ice: '#98D8D8',
    dragon: '#7038F8',
    ghost: '#705898',
    steel: '#B8B8D0',
    normal: '#A8A878',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    rock: '#B8A038',
    bug: '#A8B820',
    dark: '#705848',
};

function typeColor(t) {
    return TYPE_COLORS[t] || '#888';
}

function typeBadgeHTML(t) {
    const c = typeColor(t);
    const textCol = ['electric', 'ice', 'steel', 'normal', 'ground', 'bug'].includes(t) ? '#222' : '#fff';
    return `<span class="type-badge" style="background:${c};color:${textCol};">${t.toUpperCase()}</span>`;
}

function statColor(val) {
    if (val >= 100) return '#78C850';
    if (val >= 60) return '#F8D030';
    return '#F85888';
}

/* ─── FETCH POKEMON ─── */
async function fetchPokemon(nameOrId) {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);
        if (!res.ok) throw new Error();
        return res.json();
    } catch {
        return null;
    }
}

/* ─── PROJECT DATA ─── */
const PROJECTS = [
    {
        id: '#001',
        name: 'Kario Media',
        desc: 'Panel de gestión de proyectos para empresa de licitaciones públicas y privadas.',
        techs: ['HTML', 'CSS', 'Figma'],
        link: 'https://github.com/gamaz-19/PROYECTO_HTML_GOMEZMARIA_VARGASJHORGUEN_DOMINGUEZROBINSON',
        pokemon: 'bulbasaur',   // plant/web roots 
        hp: 85,
        stats: [{ n: 'Diseño', v: 90 }, { n: 'UI', v: 85 }, { n: 'Figma', v: 75 }],
    },
    {
        id: '#002',
        name: 'CampusMusic',
        desc: 'Sistema MongoDB para gestionar cursos, inscripciones e instrumentos en academia musical multisitio.',
        techs: ['Node.js', 'MongoDB', 'Mermaid'],
        link: 'https://github.com/gamaz-19/PROYECTO_MONGODB_SANCHEZYESICA_GOMEZMARIA',
        pokemon: 'jigglypuff',  // music 
        hp: 92,
        stats: [{ n: 'DB', v: 90 }, { n: 'Node', v: 80 }, { n: 'Docs', v: 85 }],
    },
    {
        id: '#003',
        name: 'LMS CampusLand',
        desc: 'Plataforma educativa web con gestión de cursos, docentes, estudiantes y evaluaciones.',
        techs: ['HTML5', 'CSS3', 'JavaScript', 'JSON Server'],
        link: 'https://github.com/Johanbadillo/Proyecto_GomezMaria_MonsalveJohan_MartinezStiven',
        pokemon: 'mewtwo',      // knowledge/power 
        hp: 99,
        stats: [{ n: 'Full', v: 88 }, { n: 'JS', v: 85 }, { n: 'API', v: 80 }],
    },
];

/* ─── RENDER PROJECT CARDS ─── */
async function renderProjects() {
    const grid = document.getElementById('pokemonCardsGrid');
    if (!grid) {
        console.error('No existe #pokemonCardsGrid en el HTML');
        return;
    }


    grid.innerHTML = '';

    const results = await Promise.all(PROJECTS.map(p => fetchPokemon(p.pokemon)));

    PROJECTS.forEach((proj, i) => {
        const poke = results[i];
        const types = poke ? poke.types.map(t => t.type.name) : ['normal'];
        const spriteUrl = poke
            ? (poke.sprites.other['official-artwork'].front_default || poke.sprites.front_default)
            : null;

        const bgColor = typeColor(types[0]);

        const card = document.createElement('div');
        card.className = 'pokemon-project-card reveal';
        card.style.setProperty('--card-type-color', bgColor);

        const statsHTML = proj.stats.map(s => `
        <div class="pcard-stat-row">
        <span class="pcard-stat-name">${s.n}</span>
        <div class="pcard-stat-bar">
            <div class="pcard-stat-fill" style="width:0%;background:${statColor(s.v)};" data-val="${s.v}"></div>
        </div>
        <span class="pcard-stat-num">${s.v}</span>
        </div>
    `).join('');

        const realStats = poke ? poke.stats.slice(0, 3).map(s => `
        <div class="pcard-stat-row">
        <span class="pcard-stat-name">${s.stat.name.replace('special-', 'sp.')}</span>
        <div class="pcard-stat-bar">
            <div class="pcard-stat-fill" style="width:0%;background:${statColor(s.base_stat)};" data-val="${Math.min(s.base_stat, 100)}"></div>
        </div>
        <span class="pcard-stat-num">${s.base_stat}</span>
        </div>
    `).join('') : statsHTML;

        const techHTML = proj.techs.map(t => `<span class="tech-pill">${t}</span>`).join('');
        const typesHTML = types.map(t => typeBadgeHTML(t)).join('');

        card.innerHTML = `
        <div class="pcard-top" style="background:linear-gradient(135deg, ${bgColor}22 0%, transparent 60%);">
        <span class="pcard-id">${proj.id}</span>
        <span class="pcard-hp">HP <span>${proj.hp}</span></span>
        ${spriteUrl
                ? `<img class="pcard-pokemon" src="${spriteUrl}" alt="${proj.pokemon}" />`
                : `<div class="pcard-pokemon-loading">🎮</div>`}
        </div>
        <div class="pcard-body">
        <div class="pcard-name">${proj.name.toUpperCase()}</div>
        <div class="pcard-pokemon-name">⚡ ${poke ? poke.name.toUpperCase() : proj.pokemon.toUpperCase()}</div>
        <div class="pcard-types">${typesHTML}</div>
        <p class="pcard-desc">${proj.desc}</p>
        <div class="pcard-stats-mini">${realStats}</div>
        <div class="pcard-tech">${techHTML}</div>
        <a href="${proj.link}" target="_blank" class="pcard-link">VER REPO →</a>
        </div>
    `;

        grid.appendChild(card);

        // Animate stat bars after a short delay
        setTimeout(() => {
            card.querySelectorAll('.pcard-stat-fill').forEach(bar => {
                const val = parseInt(bar.dataset.val);
                bar.style.width = Math.min(val, 100) + '%';
            });
        }, 300 + i * 150);

        observer.observe(card);
    });
}

/* ─── SKILL CATEGORIES ─── */
const SKILL_TYPES = [
    {
        name: 'Frontend',
        type: 'fire',
        emoji: '🔥',
        skills: ['HTML5', 'CSS3', 'JavaScript'],
        pokemon: 'charmander',
    },
    {
        name: 'Backend',
        type: 'water',
        emoji: '💧',
        skills: ['Java', 'SpringBoot', 'Python'],
        pokemon: 'squirtle',
    },
    {
        name: 'Bases de Datos',
        type: 'grass',
        emoji: '🌿',
        skills: ['MongoDB', 'MySQL', 'PostgreSQL'],
        pokemon: 'oddish',
    },
    {
        name: 'Herramientas',
        type: 'electric',
        emoji: '⚡',
        skills: ['Git', 'GitHub', 'VS Code', 'Figma'],
        pokemon: 'pikachu',
    },
];

async function renderSkills() {
    const grid = document.getElementById('typeChartGrid');
    const pokeResults = await Promise.all(SKILL_TYPES.map(s => fetchPokemon(s.pokemon)));

    SKILL_TYPES.forEach((cat, i) => {
        const poke = pokeResults[i];
        const spriteUrl = poke ? poke.sprites.front_default : null;
        const bgColor = typeColor(cat.type);
        const textCol = ['electric'].includes(cat.type) ? '#222' : '#fff';

        const card = document.createElement('div');
        card.className = 'type-category-card reveal';
        card.innerHTML = `
        <div class="type-cat-header" style="background:linear-gradient(135deg, ${bgColor}33, ${bgColor}11);">
        <div class="type-icon" style="background:${bgColor};">
            ${spriteUrl
                ? `<img src="${spriteUrl}" style="width:32px;height:32px;object-fit:contain;" alt="${cat.pokemon}" />`
                : `<span style="font-size:1.1rem;">${cat.emoji}</span>`}
        </div>
        <span class="type-cat-name" style="color:${bgColor};">${cat.name.toUpperCase()}</span>
        <span class="type-badge" style="background:${bgColor};color:${textCol};margin-left:auto;">${cat.type.toUpperCase()}</span>
        </div>
        <div class="type-cat-body">
        <ul class="skill-items">
            ${cat.skills.map(s => `<li class="skill-item" style="color:#c0cce0;">${s}</li>`).join('')}
        </ul>
        </div>
    `;

        grid.appendChild(card);
        observer.observe(card);
    });
}


/* ─── INIT ─── */
renderProjects();
renderSkills();


/* ─── STARS ─── */
const starsEl = document.getElementById('stars');
for (let i = 0; i < 120; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    s.style.cssText = `
    left: ${Math.random() * 100}%;
    top: ${Math.random() * 100}%;
    width: ${Math.random() < 0.7 ? 1 : 2}px;
    height: ${Math.random() < 0.7 ? 1 : 2}px;
    animation-delay: ${Math.random() * 4}s;
    animation-duration: ${2 + Math.random() * 3}s;
    `;
    starsEl.appendChild(s);
}