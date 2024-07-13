let isOn = false;

function toggleButton() {
    const button = document.getElementById('toggleButton');
    const bulb = document.getElementById('lightBulb');
    const body = document.body;
    
    isOn = !isOn;

    if (isOn) {
        button.textContent = 'On';
        button.style.backgroundColor = '#28a745'; // green color
        bulb.style.display = 'block'; // Show the light bulb
        bulb.src = 'light-bulb-2-1427493.webp'; // Image for light bulb when it's on
        body.style.backgroundColor = '#fff'; // Change body background to white
    } else {
        button.textContent = 'Off';
        button.style.backgroundColor = '#dc3545'; // red color
        bulb.style.display = 'block'; 
        bulb.src = 'istockphoto-502789173-612x612.jpg';// Hide the light bulb
        body.style.backgroundColor = '#000'; // Change body background to black
    }
}

