let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

      if (!nameInput.value) {
        nameInput.classList.add('error-border');
        errorList.innerHTML += '<li>A név mező nincs kitöltve!</li>';
      } else {
        nameInput.classList.remove('error-border');
      }

      if (!nameInput.value || !emailInput.value || !emailRegex.test(emailInput.value) || helpTopicSelect.value === "") {
        event.preventDefault();
      }else{
        alert('Sikeresen felvette velünk a kapcsolatot!');
      }