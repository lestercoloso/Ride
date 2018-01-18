import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage, SearchPage  } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pickup: any = [];
  dropoff: any = [];
  centerlng: any;
  centerlat: any;

  pages: Array<{icon:string, title: string, component: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
    ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { icon:'fa-credit-card-alt', title: 'Credits', component: HomePage },
      { icon:'fa-ticket', title: 'Promotions', component: ListPage },
      { icon:'fa-car', title: 'My trips', component: SearchPage },
      { icon:'fa-info-circle', title: 'Help', component: ListPage },
      { icon:'fa-sign-out', title: 'Log out', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.pickup.address = '';
      this.pickup.lat = '';
      this.pickup.lng = '';

      this.dropoff.address = '';
      this.dropoff.lat = '';
      this.dropoff.lng = '';

    });
  }

  changeAddress(data){
      if(data.type=="pickup"){
        this.pickup.address = data.location.address;
        this.pickup.lat = data.location.lat;
        this.pickup.lng = data.location.lng;
      }else{
        this.dropoff.address = data.location.address;
        this.dropoff.lat = data.location.lat;
        this.dropoff.lng = data.location.lng;
      }
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  presentToast(m='') {
    let toast = this.toastCtrl.create({
      message: m,
      duration: 3000,
      position: 'middle'
    });
    toast.onDidDismiss(() => {
    });

    toast.present();
  }
  presentAlert(m='', t='', b='OK', css='') {
    let alert = this.alertCtrl.create({
      title: t,
      subTitle: m,
      cssClass: css,
      enableBackdropDismiss: false,
      buttons: [b]
    });
    alert.present();
  }

  
}
