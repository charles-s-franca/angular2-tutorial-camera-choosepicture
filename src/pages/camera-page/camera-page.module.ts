import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CameraPage } from './camera-page';
import { Camera } from "@ionic-native/camera";
import { CameraCordovaService } from "../../services/camera-service-cordova";
import { Diagnostic } from "@ionic-native/diagnostic";

@NgModule({
  declarations: [
    CameraPage,
  ],
  imports: [
    IonicPageModule.forChild(CameraPage),
  ],
  exports: [
    CameraPage
  ],
  providers: [
    Camera,
    CameraCordovaService,
    Diagnostic
  ]
})
export class CameraPageModule {}
