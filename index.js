import './styles/style.scss';
import './styles/media.scss';
import './styles/mobile.scss';

const searchSVG = document.getElementById('header-search'),
    searchInput = document.getElementById('header-search-input'),
    // Search elements
    fpItemWrappers = document.querySelectorAll('.fp-item-wrapper'),
    fpItems = document.querySelectorAll('.fp-item.shown'),
    fpItemsSelected = document.querySelectorAll('.fp-item.selected');
    // "Featured items" for buy

searchSVG.addEventListener('mouseover', () => {
    searchInput.classList.toggle('hidden');
    searchInput.classList.toggle('shown');
});

searchSVG.addEventListener('mouseout', () => {
    searchInput.classList.toggle('shown');
    searchInput.classList.toggle('hidden');
});

for (let i = 0; i < fpItemWrappers.length; i++) {
    fpItems[i].addEventListener('click', (event) => {
        fpItems[i].classList.add('hidden');
        fpItemsSelected[i].classList.add('shown')
    });

    fpItemsSelected[i].addEventListener('click', (event) => {
        fpItems[i].classList.remove('hidden');
        fpItemsSelected[i].classList.remove('shown');
    });
};