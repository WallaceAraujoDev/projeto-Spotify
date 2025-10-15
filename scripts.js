document.addEventListener('DOMContentLoaded', () => {
    // Corrigido: Nomes dos artistas para melhor representação (se for um clone)
    const artists = [
        { name: 'Henrique & Juliano', image: './img/artista-henrique-juliano.jpg' },
        { name: 'Jorge & Mateus', image: './img/artista-jorge-mateus.jpg' },
        { name: 'Zé Neto & Cristiano', image: './img/artista-ze-neto.jpg' },
        { name: 'Gusttavo Lima', image: './img/artista-gustavo-limma.jpg' },
        { name: 'Luan Santana', image: './img/artista-luan-santana.jpg' },
        { name: 'Matheus & Kauan', image: './img/artista-mateus-kauan.jpg' }
    ];

    // Corrigido: Nomes dos álbuns/artistas
    const albumData = [
        { name: 'White Noise', artist: 'Sleepy John', image: './img/album-white-noise.jpg' },
        { name: 'O Caju Todo (Ao Vivo)', artist: 'Henrique & Juliano', image: './img/album-caju.jpg' },
        { name: 'Nada Como um Dia Após o Outro', artist: 'Racionais MC\'s', image: './img/album-vida-loka.jpg' },
        { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image: './img/album-hit-me.jpg' },
        { name: 'COJO', artist: 'Liniker', image: './img/album-racionais.jpg' }, // Assumindo uma imagem de capa genérica para este exemplo
        { name: 'Escândalo Íntimo', artist: 'Luísa Sonza', image: './img/album-escandalo.jpg' }
    ];

    const artistGrid = document.querySelector('.artists-grid');
    const albumsGrid = document.querySelector('.albums-grid');

    /**
     * Função reutilizável para criar e renderizar um card.
     * @param {Object} data - Dados do item (nome, imagem).
     * @param {string} type - 'artist' ou 'album'.
     * @param {string} subtitle - Subtítulo do card.
     * @param {HTMLElement} targetGrid - O elemento pai onde o card será inserido.
     */
    const renderCard = (data, type, subtitle, targetGrid) => {
        const card = document.createElement('a'); // Usar <a> para navegação
        card.href = '#'; // Link dummy
        card.classList.add(`${type}-card`);

        // Uso de template string com a função subtitle para dinamicidade
        card.innerHTML = `
            <img src="${data.image}" alt="${data.name}">
            <h3>${data.name}</h3>
            <p>${subtitle}</p>
        `;
        
        targetGrid.appendChild(card);
    };

    // Renderizar artistas
    artists.forEach(artist => {
        renderCard(artist, 'artist', 'Artista', artistGrid);
    });

    // Renderizar álbuns
    albumData.forEach(album => {
        // O subtítulo do álbum é o nome do artista
        renderCard(album, 'album', album.artist, albumsGrid);
    });
});