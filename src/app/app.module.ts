import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { VideoPlayer } from '@ionic-native/video-player';
import { StreamingMedia } from '@ionic-native/streaming-media';
import { MediaCapture} from '@ionic-native/media-capture';

import { AboutPage } from '../pages/about/about';
import { AccountPage } from '../pages/account/account';
import { AddTaskPage } from '../pages/add-task/add-task';
import { BroadPage } from '../pages/broad/broad';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TaskDetailPage } from '../pages/task-detail/task-detail';
import { AddTrailerPage } from '../pages/add-trailer/add-trailer';
import { TrailerDetailPage } from '../pages/trailer-detail/trailer-detail';
import { LoginPage } from '../pages/login/login';
import { PersonalPage } from '../pages/personal/personal';
import { Camera } from '@ionic-native/camera';
import { FileTransfer } from '@ionic-native/file-transfer';
import { WalletPage } from '../pages/wallet/wallet';
import { RulebooksPage } from '../pages/rulebooks/rulebooks';
import { HistoryPage } from '../pages/history/history';
import { FiterPage } from '../pages/fiter/fiter';
import { ReportPage } from '../pages/report/report';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { HelpPage } from '../pages/help/help';
import { AgreementPage } from '../pages/agreement/agreement';
import { ManualPage } from '../pages/manual/manual';
import { MyLikePage } from '../pages/my-like/my-like';
import { MyObservePage } from '../pages/my-observe/my-observe';
import { MyVideoPage } from '../pages/my-video/my-video';
import { VideoPlayPage } from '../pages/video-play/video-play';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    AddTaskPage,
    ContactPage,
    HomePage,
    AccountPage,
    BroadPage,
    TabsPage,
    TaskDetailPage,
    AddTrailerPage,
    TrailerDetailPage,
    LoginPage,
    PersonalPage,
    WalletPage,
    RulebooksPage,
    HistoryPage,
    FiterPage,
    ReportPage,
    ContactUsPage,
    HelpPage,
    AgreementPage,
    ManualPage,
    MyLikePage,
    MyObservePage,
    MyVideoPage,
    VideoPlayPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      backButtonIcon: 'arrow-back',
      tabsHideOnSubPages: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    AddTaskPage,
    ContactPage,
    HomePage,
    AccountPage,
    BroadPage,
    TabsPage,
    TaskDetailPage,
    AddTrailerPage,
    TrailerDetailPage,
    LoginPage,
    PersonalPage,
    WalletPage,
    RulebooksPage,
    HistoryPage,
    FiterPage,
    ReportPage,
    ContactUsPage,
    HelpPage,
    AgreementPage,
    ManualPage,
    MyLikePage,
    MyObservePage,
    MyVideoPage,
    VideoPlayPage
  ],
  providers: [
    Camera, 
    FileTransfer,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VideoPlayer,
    StreamingMedia,
    MediaCapture
  ]
})
export class AppModule {}
