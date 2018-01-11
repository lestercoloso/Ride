import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
 
declare var google;
 
@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {
 
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  mylocation: any = [];
  pickup: any;
  dropoff: any;
  usericon: any = "/assets/icon/man.png";
 
 
  constructor(public navCtrl: NavController, public geolocation: Geolocation) {
 
  }
 
  ionViewDidLoad(){
    this.loadMap();
  }
 
  loadMap(){
 
    this.geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      let mapOptions = {
        center: latLng,
        zoom: 16,
        mapTypeId: 'roadmap'
      }
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    }, (err) => {
      console.log(err);
    });
 
  }

  addMarker(){
 

    this.geolocation.getCurrentPosition().then((position) => {

      let center = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        this.map.panTo(center);

		  let marker = new google.maps.Marker({
		    map: this.map,
		    animation: google.maps.Animation.DROP,
		    icon: this.usericon,
		    position: this.map.getCenter()
		  });
			
		  	console.log(this.mylocation.length);
			for (var i = 0; i < this.mylocation.length; i++) {
				this.mylocation[i].setMap(null);
			}

			this.mylocation.push(marker);
		  	let content = "<h4>You!</h4>";         
			this.addInfoWindow(marker, content);

    }, (err) => {
      console.log(err);
    });




}

addInfoWindow(marker, content){
 
  let infoWindow = new google.maps.InfoWindow({
    content: content,
  });
 
//  google.maps.event.addListener(marker, 'click', () => {
    infoWindow.close();
    infoWindow.open(this.map, marker);
//  });
 
}
 
}