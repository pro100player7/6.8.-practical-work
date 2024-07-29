const trafficLightEl = document.querySelectorAll('#trafficLight');
let currentLight = 0;

function resetLights() 
{
    trafficLightEl.forEach((el) => 
    {
        el.style.background = 'black'; 
    });
}

function makeGreen() 
{
    resetLights(); 
    trafficLightEl[0].style.background = 'green'; 
    currentLight = 1; 
}

function makeYellow()
{
    resetLights(); 
    trafficLightEl[1].style.background = 'yellow'; 
    currentLight = 2;
}

function makeRed() 
{
    resetLights(); 
    trafficLightEl[2].style.background = 'red'; 
    currentLight = 0; 
}

function changeLight() 
{
    switch (currentLight) 
    {
        case 0:
            makeGreen();
            break;
        case 1:
            makeYellow();
            break;
        case 2:
            makeRed();
            break;
    }
}

trafficLightEl.forEach((el) => 
{
    el.addEventListener('click', changeLight);
});