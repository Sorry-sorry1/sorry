document.getElementById('okay-btn').addEventListener('click', function () {
    // Use your computer's local IP address
    fetch('http://192.168.53.154:3001/track-click', { // Change to your local IP
        method: 'POST',
        body: JSON.stringify({ clicked: true }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    // Redirect to Instagram
    window.open('https://www.instagram.com/__harixx_._/?hl=en', '_blank');
});
