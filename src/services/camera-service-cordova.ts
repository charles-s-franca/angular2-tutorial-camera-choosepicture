import { Injectable } from '@angular/core';
import { ICameraService } from "../interfaces/i-camera-service";

import { Diagnostic } from '@ionic-native/diagnostic';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Injectable()
export class CameraCordovaService implements ICameraService {
    constructor(
        private diagnostic: Diagnostic,
        private camera: Camera
    ) {

    }

    authorizeCamera(): Promise<any> {
        return new Promise<any>((resolve, reject)=>{
            this.diagnostic.requestCameraAuthorization().then(auth=>{
                console.log(auth);
                resolve(auth);
            }).catch(err=>{
                reject(err);
            })
        })
    }

    choosePicture(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            const options: CameraOptions = {
                quality: 100,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
            }

            this.camera.getPicture(options)
            .then((imageData) => {
                resolve(imageData);
            }, (err) => {
                console.log("There was a problem with permition", err);
                reject(err);        
            });
        })
    }

}