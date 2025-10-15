document.addEventListener('DOMContentLoaded', () => {
    // Array de artistas
    const artists = [
        { name: 'Morrique & Juliano', image: './img/artista-henrique-juliano.jpg' },
        { name: 'Jorge & Mateu', image: './img/artista-jorge-mateus.jpg' },
        { name: 'Zé Neto & Cristiano', image: './img/artista-ze-neto.jpg' },
        { name: 'Gustavo Lima', image: './img/artista-gustavo-limma.jpg' },
        { name: 'Luan Santana', image: './img/artista-luan-santana.jpg' },
        { name: 'Matheus & Kauan', image: './img/artista-mateus-kauan.jpg' }
    ];

    // Array de álbuns
    const albumData = [
        { name: 'Molto Molto (Sleep & Relaxation Sounds)', artist: 'Sleepy John', image: './img/album-white-noise.jpg' },
        { name: 'O del Espíldia Todo (Ao Vivo)', artist: 'Morrique & Juliano', image: './img/album-caju.jpg' },
        { name: 'Nada como un día após o outro', artist: 'Reclama\'s', image: './img/album-vida-loka.jpg' },
        { name: 'HIIT ME NANO AND SOFT', artist: 'Billie Ellian', image: './img/album-hit-me.jpg' },
        { name: 'COJO', artist: 'Linker', image: './img/album-racionais.jpg' },
        { name: 'Escándalo Intimo', artist: 'Luisa Souza', image: './img/album-escandalo.jpg' }
    ];

    const artistGrid = document.querySelector('.artists-grid');
    const albumsGrid = document.querySelector('.albums-grid');

    // Renderizar artistas
    artists.forEach(artist => {
        const artistCard = document.createElement('div');
        artistCard.classList.add('artist-card');
        
        artistCard.innerHTML = `
            <img src="${artist.image}" alt="${artist.name}">
            <h3>${artist.name}</h3>
            <p>Artista</p>
        `;
        artistGrid.appendChild(artistCard); // Corrigido: era artistGrid em vez de artistCard
    });

    // Renderizar álbuns (faltava esta parte)
    albumData.forEach(album => {
        const albumCard = document.createElement('div');
        albumCard.classList.add('album-card');
        
        albumCard.innerHTML = `
            <img src="${album.image}" alt="${album.name}">
            <h3>${album.name}</h3>
            <p>${album.artist}</p>
        `;
        albumsGrid.appendChild(albumCard);
    });
});