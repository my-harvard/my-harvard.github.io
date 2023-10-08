var clicked = false;

function lights_out() {
    if (!clicked) {
        new Audio('fnaf/FNAF_power_out.mp3').play();
        clicked = true;

        setTimeout(function() { 
            fnaf.style.background = "url(fnaf/FNAF_power_out.gif)";
            fnaf.style.width = "100%";
            fnaf.style.backgroundSize = "cover";
            fnaf.style.backgroundPosition = "center";
            setTimeout(function() { location.reload() }, 10000);
        }, 15000)

    }
}

// Wait for 5000 milliseconds (5 seconds) and then play the sound
document.addEventListener('click', lights_out);