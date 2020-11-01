const principal = document.getElementById('principal')
const cores = ['#ff33cc', '#ff3399', '#ff0066', '#ff0000', '#ff3300', '#FFFF00', '#8A2BE2', '#7FFF00', '#FF00FF'] 
const quadradosQtd = 500

for(let i = 0; i < quadradosQtd; i++){
    const quadrado = document.createElement('div') 
    quadrado.classList.add('quadrado')

    quadrado.addEventListener('mouseover', () =>{
            setColorToE1(quadrado)
    })

    quadrado.addEventListener('mouseout', () =>{
        removeColorFromE1(quadrado)
    })

    principal.appendChild(quadrado)
}

setColorToE1 = (element) => {
    const cor = getRandomCor() 
    element.style.background = cor 
    element.style.boxShadow = `0 0 2px ${cor}, 0 0 10px ${cor}` 
}

removeColorFromE1 = (element) => {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

getRandomCor = () => {
    return cores[Math.floor(Math.random() * cores.length)] 
}