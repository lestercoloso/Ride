import { Component, ViewChild, ElementRef, NgZone, Inject, Injector, Injectable } from '@angular/core';
import { NavController, ModalController, NavParams, ViewController} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http'; 
import { MyApp } from '../../app/app.component';



declare var google;
 
@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {
 
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('places') places: ElementRef;
  MainApp: any;
  map: any;
  mylocation: any = [];
  pickup: any;
  dropoff: any;
  mylat: any;
  mylng: any;
  showbook: boolean = false;
  usericon: any = "assets/icon/man.png";
 
 
  constructor(
    public navCtrl: NavController, 
    public geolocation: Geolocation,
    public http: Http,
    public modalCtrl: ModalController,
    private inj:Injector
    ) {

    this.MainApp = this.inj.get(MyApp);
  }
 
  ionViewDidLoad(){
    this.loadMap();
  }


 
  loadMap(){
 
    this.geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      this.mylat = position.coords.latitude;
      this.mylng = position.coords.longitude;

      this.MainApp.centerlat = position.coords.latitude;
      this.MainApp.centerlng = position.coords.longitude;

      this.MainApp.pickup.lat = position.coords.latitude;
      this.MainApp.pickup.lng = position.coords.longitude;
      
      let mapOptions = {
        center: latLng,
        icon: this.usericon,
        zoom: 16,
        // mapTypeId: 'roadmap',
        disableDefaultUI: true
      }

      this.getAddress(position.coords.latitude, position.coords.longitude);
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.myLocation();

    }, (err) => {
      console.log(err);
    });
 
  }


  getAddress(lt,lng){
    this.http.get('http://maps.googleapis.com/maps/api/geocode/json?latlng='+lt+','+lng+'&sensor=true/false', { }).subscribe(data => {
      let result =  data.json();
      if(result.results[0]){
       this.MainApp.pickup.address = result.results[0].formatted_address;       
      }
    }, error => {
        alert('Unable to get the address');
    });  

  }


  myLocation(){

      let center = new google.maps.LatLng(this.MainApp.centerlat, this.MainApp.centerlng);
        this.map.panTo(center);

		  let marker = new google.maps.Marker({
		    map: this.map,
		    // animation: google.maps.Animation.DROP,
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
 
  openSearch(type){

	let searchModal = this.modalCtrl.create(SearchPage, { type:type });
	  searchModal.onDidDismiss(data => {
	  	if(data){
	  		console.log(data);
			this.MainApp.changeAddress(data); 
			if(this.MainApp.dropoff && this.MainApp.pickup){
				this.startNavigating();					
			}
	  	}
	  });
	searchModal.present();

  }

    startNavigating(){
 
        let directionsService = new google.maps.DirectionsService;
        let directionsDisplay = new google.maps.DirectionsRenderer({ polylineOptions: { strokeColor: "black" } });
 
        directionsDisplay.setMap(this.map);
        // directionsDisplay.setPanel(this.directionsPanel.nativeElement);
 
        directionsService.route({
			origin: {lat: this.MainApp.pickup.lat, lng: this.MainApp.pickup.lng},
			destination: {lat: this.MainApp.dropoff.lat, lng: this.MainApp.dropoff.lng},
            travelMode: google.maps.TravelMode['DRIVING']
        }, (res, status) => {
        	// console.log(res);
        	this.showbook = true;
            if(status == google.maps.DirectionsStatus.OK){
                directionsDisplay.setDirections(res);
            } else {
                console.warn(status);
            }
        });
 
    }

 
}






@Component({
  selector: 'search-page',
  templateUrl: 'search.html'
})
export class SearchPage{

  autocompleteItems;
  autocomplete;
  latitude: number = 0;
  longitude: number = 0;
  geo: any;
  type: any;
  MainApp: any;
  location_data: any = [];


service = new google.maps.places.AutocompleteService();

 constructor(
 	  public params: NavParams,
    public http: Http,
    public viewCtrl: ViewController, 
    private zone: NgZone,
    private inj:Injector
 	) {
this.MainApp = this.inj.get(MyApp);
    this.autocompleteItems = [];
    this.autocomplete = {
      query: ''
    };
this.type = params.get('type');



 }


  ionViewLoaded() {

	}
 
 dismiss() {
    this.viewCtrl.dismiss();
  }

  chooseItem(item: any) {
    this.geo = item;
    this.geoCode(this.geo);//convert Address to lat and long
    this.viewCtrl.dismiss({type:this.type, location:this.location_data});
  }


  updateSearch() {
    if (this.autocomplete.query == '') {
      this.autocompleteItems = [];
      return;
    }
    let me = this;
    this.service.getPlacePredictions({ input: this.autocomplete.query,  componentRestrictions: {country: 'PH'} }, function (predictions, status) {
      me.autocompleteItems = []; 
      me.zone.run(function () {
        if(predictions){
          predictions.forEach(function (prediction) {
            me.autocompleteItems.push(prediction.description);
          });   
        }
      });
    });
  }

  //convert Address string to lat and long
  geoCode(address:any) {
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, (results, status) => {
      // this.longitude = 12232;
      this.location_data.address = results[0].formatted_address;
      this.location_data.lat = results[0].geometry.location.lat();
      this.location_data.lng = results[0].geometry.location.lng();
      // this.MainApp.changeAddress('test','hellos');
      // this.MainApp.changeAddress(this.type, results[0].formatted_address, results[0].geometry.location.lat(), results[0].geometry.location.lng());
   });
 }



	getSearch(test){
		console.log(test);
	}






}