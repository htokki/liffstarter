liff.init(
    {
        liffId: '1656165289-zB7VXEPE'
    }
).then(() => {
    if (!liff.isLoggedIn()) {
        liff.login();
    }
    document.getElementById('send').addEventListener('click', send);
}).catch((error) => {
    document.getElementById('error').innerText = 'Error from LIFF: ' + error;
    
});

function send() {
    liff.shareTargetPicker([{
        'type': 'text',
        'text': 'Hello, World! from SHare Target Picker App...'
    }]).then(
        document.getElementById('success').innerText = 'Launched Share Target Picker'
        
    ).catch((error) => {
        document.getElementById('error').innerText = 'Error from Share Target Picker: ' + error;
    })
    liff.closeWindow()
}