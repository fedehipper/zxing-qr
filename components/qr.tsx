import {BrowserQRCodeReader} from '@zxing/library';

function Qr() {

    const codeReader = new BrowserQRCodeReader()
    codeReader.getVideoInputDevices()
        .then((videoInputDevices) => {
            videoInputDevices.forEach((element) => {
                console.log(`${element.label}, ${element.deviceId}`)            
            }
            )})
        .catch(err => {
            console.error(err)
        })
        


    return <video id="video" width="300" height="200" style={{border: '1px solid gray'}}/>
}


export default Qr;