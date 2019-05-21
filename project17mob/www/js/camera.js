var app = {
    initialize: function () {
        document.addEventListener('deviceready', () => {
            console.log(navigator.camera);
        }, false);
    }
};

document.getElementById('camera').addEventListener('click', () => {
    let options = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        targetWidth: 720,
        correctOrientation: true
    }

    takePicture(options)
})

var takePicture = (options) => {
    navigator.camera.getPicture((image_data) => {
        console.log(image_data)
    },
    (error) => {
        console.log(error)
    }, options)
}

app.initialize();