let cuestionario = [
    {
        "pregunta" : "¿cuantas lunas tiene Marte?",
        "respuesta" : ["2", "1", "3", "ninguna de las anteriores"]
    },

    {
        "pregunta" : "¿aproximadamente a cuantos minutos llega la luz del sol a nuestro planeta?",
        "respuesta" : ["8 minutos", "3 minutos", "9 minutos", "5 minutos"]
    },

    {
        "pregunta" : "¿cuantos planetas tiene nuesto sistema solar?",
        "respuesta" : ["9", "10", "5", "12"]
    },

    {
        "pregunta" : "¿cual es la galaxia mas cercana a la nuestra?",
        "respuesta" : ["Andromeda", "Helios", "Barnard", "Ninguna de las anteriores"]
    },

    {
        "pregunta" : "¿cual fue el primer hombre en pisar la luna?",
        "respuesta" : ["Neil Alden Armstrong", "Joseph Michael Acaba", "Loren Wilber Acton", "Andrew Michael Allen"]
    }
]



let currentIndex = 0
let puntos = 0


let printHtmlPregunta = (i) => {
    
    let p = cuestionario[i]
    let a = p.respuesta
    respuestaCorrecta = a[0]
    a = a.sort((a,b) => Math.floor(Math.random()*3)-1)

    
    
    
    let htmlRespuestaArray = a.map(currentA => 
        `<button onClick="evaluarRespuesta('${currentA}', this)">O</button> <span>${currentA}</span><br>`)
    let htmlRespuesta = htmlRespuestaArray.join('')
    let htmlPregunta = `${p.pregunta}<div><br>${htmlRespuesta}</div>`
    document.querySelector('.pregunta').innerHTML = htmlPregunta
    
}

let evaluarRespuesta = (respuesta) => {
    currentIndex++
    if (respuesta == respuestaCorrecta) {
        alert("Respuesta correcta")
        puntos++
        document.querySelector('.puntos').innerHTML = puntos
        printHtmlPregunta(currentIndex)
    }else {
        alert("Respuesta incorrecta, se finalizara el juego...")
        location.reload();
    }
    
}

printHtmlPregunta(currentIndex)