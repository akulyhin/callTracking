import './sass/styles.scss';

import './js/script';


const addPhone = document.querySelector('.add_phone');
const phonesBlock = document.querySelector('.phones');


addPhone.addEventListener('click', () => {
const phones = document.querySelectorAll('.phones input');

phones.last = function () {
    return this[this.length -1];
}

   function addId(id) {
    return +id.replace(/[^0-9]/g, '') + 1;
   }

    const phone = `<input type="text" name="tel-${addId(phones.last().getAttribute('id'))}[source-1]" id="tel-${addId(phones.last().getAttribute('id'))}">`;
    phonesBlock.insertAdjacentHTML('beforeend', phone);

})




