import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ActionSheetController } from 'ionic-angular';
import { TrailerDetailPage } from '../trailer-detail/trailer-detail';
import { CameraOptions, Camera } from '@ionic-native/camera';

/**
 * Generated class for the AddTrailerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-trailer',
  templateUrl: 'add-trailer.html',
})
export class AddTrailerPage {

  public task: {
    token: any,
    taskRecipient: string,
    taskName: string,
    taskDescription: string,
    taskPosition: string,
    taskStartTime: string,
    taskEndTime: string,
    taskLatitude: any,
    taskLongitude: any,
    taskReward: string
  }

  userImage: any = null;

  minStartTime: string = "2017-01-01T00:00:00Z";
  minEndTime: string = "2017-01-01T23:59:00Z";

  trailerDetailPage: any = TrailerDetailPage;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public actionSheetCtrl: ActionSheetController,
    public camera: Camera
  ) {
    var date = new Date();
      // date.setDate(new Date().getDate());
    var startTime = date.getFullYear() + '-' + this.prefix(2, date.getMonth() + 1) + '-' + this.prefix(2, date.getDate()) + 'T' + this.prefix(2, date.getHours()) +':' + this.prefix(2, date.getMinutes());
    date.setDate(new Date().getDate() + 1);
    var endTime = date.getFullYear() + '-' + this.prefix(2, date.getMonth() + 1) + '-' + this.prefix(2, date.getDate()) + 'T' + this.prefix(2, date.getHours()) +':' + this.prefix(2, date.getMinutes());
    var task_recipient = this.navParams.get('task_recipient');
    this.task = {
      token: '',
      taskRecipient: task_recipient,
      taskName: '',
      taskDescription: '',
      taskPosition: '',
      taskLatitude: 0,
      taskLongitude: 0,
      taskStartTime: startTime,
      taskEndTime: endTime,
      taskReward: '0'
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTrailerPage');
  }

  prefix(num, val) {
    return (new Array(num).join('0') + val).slice(-num);
  }

  updateEndTime() {
    var date = new Date(this.task.taskStartTime);
    date.setTime(date.getTime() + 1000 * 60 *30);
    this.minEndTime = date.getFullYear() + '-' + this.prefix(2, date.getMonth() + 1) + '-' + this.prefix(2, date.getDate()) + 'T' + this.prefix(2, date.getHours()) +':' + this.prefix(2, date.getMinutes());
    this.task.taskEndTime = this.minEndTime;
  }

  addTrailer() {
    if(this.task.taskName == "") {
      let alert = this.alertCtrl.create({
        title: '发布失败',
        subTitle: '请填写完整直播主题',
        buttons: [
          {
            text: '确认',
            handler: ()=>{
            }
          }
        ],
        enableBackdropDismiss: false
      });
      alert.present();
    }
    else {
      var subTitle = "直播主题：" + this.task.taskName;
      if(this.task.taskPosition != '') {
        subTitle += "<br/>" + "直播地点：" + this.task.taskPosition;
      }
      subTitle += "<br/>" + "直播时间：" + this.task.taskStartTime;
      let alert = this.alertCtrl.create({
        message: subTitle,
        buttons: [
          {
            text: '返回修改',
            handler: () => {
            }
          },
          {
            text: '确认发布',
            handler: () => {
              this.navCtrl.push(this.trailerDetailPage, {'tag': 'add', 'task': this.task});
            }
          }
        ]
      });
      alert.present();
    }
  }

  changeImage() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: '拍照',
          handler: () => {
            console.log('Camera clicked');
            const options: CameraOptions = {
              // Some common settings are 20, 50, and 100
              quality: 50,
              destinationType: this.camera.DestinationType.FILE_URI,
              // In this app, dynamically set the picture source, Camera or photo gallery
              
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              saveToPhotoAlbum:true,
              sourceType:this.camera.PictureSourceType.CAMERA,//拍照时，此参数必须有，否则拍照之后报错，照片不能保存
              
              correctOrientation: true  //Corrects Android orientation quirks
            }
            /**
              * imageData就是照片的路径，关于这个imageData还有一些细微的用法，可以参考官方的文档。
            */
            this.camera.getPicture(options).then((imageData) => {
              // imageData is either a base64 encoded string or a file URI
              // If it's base64:
              let base64Image =  imageData;
              this.userImage = base64Image;//给全局的文件路径赋值。
              // this.user.image = 'user1.jpg';
              // alert(this.userImage);
              // this.user.image = this.userImage;
              // this.modifyInfo = false;

              /*  this.zone.run(() => this.image = base64Image);*/
            }, (err) => {
              // Handle error，出错后，在此打印出错的信息。
              alert( err.toString());
            });
          }
        },
        {
          text: '相册',
          handler: () => {
            console.log('Photo clicked');
            const options: CameraOptions = {
              // Some common settings are 20, 50, and 100
              quality: 50,
              destinationType: this.camera.DestinationType.FILE_URI,
              // In this app, dynamically set the picture source, Camera or photo gallery
              sourceType: 0,//0对应的值为PHOTOLIBRARY ，即打开相册
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              allowEdit: true,
              correctOrientation: true  //Corrects Android orientation quirks
            }
            this.camera.getPicture(options).then((imageData) => {
              // imageData is either a base64 encoded string or a file URI
              // If it's base64:
              let base64Image = imageData;
              this.userImage = base64Image;
              // this.profilePicture=base64Image;
              // alert(base64Image);
              // this.user.image = this.userImage;
              // this.modifyInfo = false;
            }, (err) => {
              // Handle error
            });
          }
        },
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
