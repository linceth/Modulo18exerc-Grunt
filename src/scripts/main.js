const accordions = document.querySelectorAll('.accordion-header')
        for(let i=0; i < accordions.length; i++) {
            accordions[i].addEventListener('click', function(evento){
                if(evento.target.parentNode.classList.contains('is-open')) {
                    evento.target.parentNode.classList.remove('is-open');
            }else {
                evento.target.parentNode.classList.add('is-open');
            }
            })
        }