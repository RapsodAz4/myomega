const images = [
    'img/AQUA.png',
    'img/AZUL.png',
    'img/MORADITO.png',
    'img/MORADO.png',
    'img/MOSTAZA.png',
    'img/MOSTAZAQUEMADA.png',
    'img/VERMELLON.png'
];

const phrases = [
    'Siempre fuimos un "hasta pronto", mas nunca supimos olvidarnos',
    'Siempre que veas un atardecer, recuerda que mori amando las cosas sencillas de la vida',
    'Nunca digas nunca... porque el destino escucha que esa peticion es la que por ley tiene que cumplirse mas rapido',
    'Nunca pienses que estos versos no son para ti... pues hasta el mas minimo de mis pensamientos te pertence',
    '¡Ay amor! El querer siempre trae consigo un poco de dolor y caminos de nostalgia.',
    'Siento tristeza por aquellos que nunca vieron en la vida, la posibilida de cambiar todo para mejor o peor aun, para si mismos.',
    'La poesia es el refugio para nosotros, los olvidados de la vida, los que siempre fueron un recuerdo entre el olvido',
    'Siempre quise escribir... mas que para mi, para aquellos que nunca han encontrado su lugar en el mundo. '
];

const mainImage = document.getElementById('mainImage');
const changeButton = document.getElementById('changeButton');
const randomPhrase = document.getElementById('randomPhrase');

changeButton.addEventListener('click', () => {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const randomText = phrases[Math.floor(Math.random() * phrases.length)];

    mainImage.src = randomImage;
    randomPhrase.textContent = randomText;
});
