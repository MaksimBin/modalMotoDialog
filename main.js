
var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

//-- usage --//
preload(
      "/pngwing.com (13).png",
      "/pngwing.com (14).png",
      "/pngwing.com (15).png",
      "/pngwing.com (12).png"
)


let audios = []
let audio = new Audio("/Alec_Koff_-_Second_Law_(musmore.org).mp3")

audio.oncanplaythrough = isAppLoaded;

function isAppLoaded() {
   audios.push(audio.src)
}

let btn = document.querySelector('.startButton')
btn.disabled = true
btn.innerHTML = "Загрузка..."
  const bt = () => {
  
  
    if (images.length == 4 && audios.length == 1) {
      btn.disabled = false
      btn.innerHTML = "Start"
    } else {
      btn.disabled = true
      btn.innerHTML = "Загрузка..."
    }
    
    console.log(images.length)
  }
  
  
  setInterval(() => {
    bt()
  }, 3000)
  
  
  
  
  let numbers = 0
  
  
  
  
  
  
  const audioPlay = () => {
    audio.play()
  }
  
  
  const startDisplay = () => {
    
    
    
    
    document.querySelector('.preloader').style = "opacity: 0.0; transition-duration: 2s;"
    
    
    setTimeout(() => {
      document.querySelector('.preloader').style = "display: none;"
    }, 2000)
    
    
    audioPlay()
  }

setInterval(() => {
  document.querySelector('.content').style = `background-image: url('${images[getImages(numbers)].src}');background-repeat: no-repeat;background-size: contain;background-position: center;`
  
}, 1000)


const getImages = () => {
  if (numbers == 4) {
    numbers = 0
    return 0
  } else {
    return numbers++
  }
}


document.querySelector('.content-el').style = "display: none;"

const openModal = () => {
  
  document.querySelector('.btn').style = "margin-top:350px;transform: rotate(90deg);transition-duration: 2s;"
  
  
  setTimeout(() => {
    document.querySelector('.btn').style = "margin-right: 600px;opacity: 0.0;transition-duration: 2s;"
  }, 2000)
  
  
  setTimeout(() => {
    document.querySelector('.btn').style = "display: none;"
  }, 3000)
  
  setTimeout(() => {
    document.querySelector('.content-el').style = "display: block; margin-left:900px;"
  }, 3000)
  
  setTimeout(() => {
    document.querySelector('.content-el').style = "margin-left:110px;transition-duration: 2s;"
  }, 4000)
}

const closeModal = () => {
 
  document.querySelector('.content-el').style = "margin-left:900px;transition-duration: 2s;"
  
setTimeout(() => {
    document.querySelector('.btn').style = "margin-top: 1000px;opacity: 0.0;transition-duration: 2s;"
  }, 2000)
  
  setTimeout(() => {
    document.querySelector('.btn').style = "margin-top: 350px;opacity: 0.9;transition-duration: 2s;"
  }, 3000)

}










