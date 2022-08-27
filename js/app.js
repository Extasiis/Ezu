const explora = () => {
    const explorar = document.querySelector('.nfts__explora')

    explorar.classList.toggle('active')
}

//Filtro

const luz = () => {
    const tipo = document.querySelector('.luz')

    tipo.classList.toggle('active')
}

const vapor = () => {
    const tipo = document.querySelector('.vapor')

    tipo.classList.toggle('active')
}

const agua = () => {
    const tipo = document.querySelector('.agua')

    tipo.classList.toggle('active')
}

const tierra = () => {
    const tipo = document.querySelector('.tierra')

    tipo.classList.toggle('active')
}

//Road Map

window.addEventListener('scroll', () => {
    const svg = document.querySelector('.svgPath');
    const svgHeight = svg.clientHeight; //Tamaño Height del contenedor SVG
    const svgPosition = svg.getBoundingClientRect().top;
    const scrollPosition = window.innerHeight / 2;

    //Fase Title
    const phaseTitles = document.querySelectorAll('.roadmap__phase-title'); 
    
    for (let i = 0; i < phaseTitles.length; i++) {
        const phaseTitlesPosition = phaseTitles[i].getBoundingClientRect().top;        
        if(scrollPosition > phaseTitlesPosition){
            phaseTitles[i].classList.add('active');
        } else{
            phaseTitles[i].classList.remove('active');
        }
    }

    //Fase contenido
    const phaseParrafo = document.querySelectorAll('.roadmap__phase-parrafo');
    
    for (let i = 0; i < phaseParrafo.length; i++) {
        const phaseParrafoPosition = phaseParrafo[i].getBoundingClientRect().top;
        if(scrollPosition > phaseParrafoPosition){
            phaseParrafo[i].classList.add('active')
        }else{
            phaseParrafo[i].classList.remove('active')
        }
    }

    //SVG Scroll
    if(scrollPosition > svgPosition){
        svg.classList.add('active')
        document.body.style.setProperty('--scroll', (svgPosition - 453) / svgHeight );
    }else{
        svg.classList.remove('active')
    }


document.body.style.setProperty('--start', scrollPosition);
document.body.style.setProperty('--svg-revelation', scrollPosition);


})