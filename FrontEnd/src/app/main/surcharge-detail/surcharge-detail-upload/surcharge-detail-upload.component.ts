import { Component, EventEmitter, OnInit, Output, ViewChild, ɵɵpureFunction1 } from '@angular/core';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { InforSurcharge } from 'src/app/shared/model/model.model';
import { ListSurchageService } from 'src/app/shared/service/list-surchage.service';
import { SurchargeDetailService } from 'src/app/shared/service/surcharge-detail.service';

@Component({
  selector: 'app-surcharge-detail-upload',
  templateUrl: './surcharge-detail-upload.component.html',
  styleUrls: ['./surcharge-detail-upload.component.css']
})
export class SurchargeDetailUploadComponent implements OnInit {

  constructor(public listSurchageService: ListSurchageService, public surchargeDetailService: SurchargeDetailService) { }
  public surCharge;
  //
  @Output() public pictureTaken = new EventEmitter<WebcamImage>();
// toggle webcam on/off
public allowCameraSwitch = true;
public multipleWebcamsAvailable = false;
public deviceId: string;
public videoOptions: MediaTrackConstraints = {
// width: {ideal: 1024},
// height: {ideal: 576}
};
public errors: WebcamInitError[] = [];
// webcam snapshot trigger
private trigger: Subject<void> = new Subject<void>();
// switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>(); 
  //

  ngOnInit(): void {
    this.surCharge = this.listSurchageService.surcharge;
    WebcamUtil.getAvailableVideoInputs()
    .then((mediaDevices: MediaDeviceInfo[]) => {
    this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
    });
  }
  chooseSurcharge(){
    
  }
  public triggerSnapshot(): void {
    this.trigger.next();
    }
    public toggleWebcam(): void {
    this.listSurchageService.showWebcam = !this.listSurchageService.showWebcam;
    }
    public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
    }
    public showNextWebcam(directionOrDeviceId: boolean|string): void {
    // true => move forward through devices
    // false => move backwards through devices
    // string => move to device with given deviceId
    this.nextWebcam.next(directionOrDeviceId);
    }
    public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.pictureTaken.emit(webcamImage);
    }
    public cameraWasSwitched(deviceId: string): void {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
    }
    public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
    }
    public get nextWebcamObservable(): Observable<boolean|string> {
    return this.nextWebcam.asObservable();
    }
    public async upLoad(event){
      if(this.surchargeDetailService.myfile.length > 0)
      {
        await this.func1();
       
            for(  let surcharge of this.surchargeDetailService.myfile)
            {
            await  this.surchargeDetailService.getInforSurcharge(surcharge).subscribe((res)=>{
                    this.surchargeDetailService.surchargeInfor = res as InforSurcharge;
                    this.surchargeDetailService.listSurchargeInfor.push(this.surchargeDetailService.surchargeInfor);
                    console.log(this.surchargeDetailService.surchargeInfor);
                  });         
            }
        await this.func2();
    }
  }
    //  this.surchargeDetailService.myfile.forEach(async element => {
    //    const sur = await this.surchargeDetailService.getInforSurcharge(element).subscribe(res=>{
    //      return (res as InforSurcharge);
    //    });
    //    //this.surchargeDetailService.surchargeInfor = sur;
    //    console.log(sur);
       
    //  });
      // for  (let i = 0; i < this.surchargeDetailService.myfile.length; i++)
      // {
      //   this.surchargeDetailService.getInforSurcharge(this.surchargeDetailService.myfile[i]).subscribe((res)=>{
      //     this.surchargeDetailService.surchargeInfor = res as InforSurcharge;
      //     console.log(this.surchargeDetailService.surchargeInfor);
      //   });
      // }
        

    onFileSelected(event){
      this.surchargeDetailService.myfile = event.target.files;
    }
    async func1(){
      console.log("1");
    }
    async func2(){
      console.log("2");
    }
    test(){
      this.surchargeDetailService.show = true;
    }
}
