const botao = document.querySelector('button');
const rating = document.querySelector('.rating');
const thank = document.querySelector('.thank');
const choice = document.querySelector('.choice');


botao.addEventListener('click', function() {
    rating.classList.toggle('toggle');
    thank.classList.toggle('toggle');
    const value = document.querySelector('input[name="rating"]:checked').value;
    choice.innerHTML = value;
    });



    