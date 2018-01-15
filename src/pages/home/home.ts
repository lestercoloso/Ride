import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http'; 
 
declare var google;
 
@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {
 
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('places') places: ElementRef;
  map: any;
  mylocation: any = [];
  pickup: any;
  dropoff: any;
  mylat: any;
  mylng: any;
  usericon: any = "assets/icon/man.png";
 
 
  constructor(
    public navCtrl: NavController, 
    public geolocation: Geolocation,
    public http: Http
    ) {
 
  }
 
  ionViewDidLoad(){
    this.loadMap();
  }
 
  loadMap(){
 
    this.geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      this.mylat = position.coords.latitude;
      this.mylng = position.coords.longitude;
      
      let mapOptions = {
        center: latLng,
        zoom: 16,
        mapTypeId: 'roadmap'
      }

      this.getAddress(position.coords.latitude, position.coords.longitude);
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);


    let autocomplete = new google.maps.places.Autocomplete(this.places.nativeElement);
    google.maps.event.addListener(autocomplete, 'place_changed', () => {

        let place = autocomplete.getPlace();
        let latitude = place.geometry.location.lat();
        let longitude = place.geometry.location.lng();
        alert(latitude + ", " + longitude);
        console.log(place);
      });


    }, (err) => {
      console.log(err);
    });
 
  }


  getAddress(lt,lng){
    this.http.get('http://maps.googleapis.com/maps/api/geocode/json?latlng='+lt+','+lng+'&sensor=true/false', { }).subscribe(data => {
      let result =  data.json();
      this.pickup = result.results[0].formatted_address;
    }, error => {
        alert('Unable to get the address');
    });  

  }


  myLocation(){
 
      let center = new google.maps.LatLng(this.mylat, this.mylng);
        this.map.panTo(center);

		  let marker = new google.maps.Marker({
		    map: this.map,
		    animation: google.maps.Animation.DROP,
		    icon: this.usericon,
        zoom: 18,
		    position: this.map.getCenter()
		  });
			
			for (var i = 0; i < this.mylocation.length; i++) {
				this.mylocation[i].setMap(null);
			}

		   this.mylocation.push(marker);
	  	 let content = "<h4>You!</h4>";         
		   // this.addInfoWindow(marker, content);
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