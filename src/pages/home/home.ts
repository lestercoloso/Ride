import { Component, ViewChild, ElementRef, NgZone, Inject, Injector, Injectable } from '@angular/core';
import { NavController, ModalController, NavParams, ViewController, AlertController, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http'; 
import { MyApp } from '../../app/app.component';
import { Keyboard } from '@ionic-native/keyboard';
// import { Keyboard } from 'ionic-native';


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
  directionsDisplay: any;
  showbook: any;
  duration: any;
  distance: any;
  car_options: Array<{icon:string, title: string, price: number, details: any}>;
  usericon: any = "assets/icon/man.png";
 
 
  constructor(
    public navCtrl: NavController, 
    public geolocation: Geolocation,
    public http: Http,
    public modalCtrl: ModalController,
    private inj:Injector,
    private ngZone:NgZone,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController
    ) {

    this.car_options = [
      { icon:'assets/imgs/sedan.png', title: 'Deluxe', price: 10, details: '1-4 seater' },
      { icon:'assets/imgs/suv.png', title: 'Suite', price: 50, details: '1-5 seater' },
      { icon:'assets/imgs/sedan.png', title: 'Executive', price: 60, details: '1-6 seater' },
    ];


    this.MainApp = this.inj.get(MyApp);
  }
 
  computePrice(plus){

    let price = 0;
    let distance = this.distance/1000;
    let time = this.duration/60;

    price = parseInt(((distance*time)*0.95)+plus);
    return price;

  }

  ionViewDidLoad(){
    this.loadMap();
  }


  cancelUnbook(){
    let alert = this.alertCtrl.create({
        title: '',
        message: 'Are you sure you want to cancel this?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Ok',
            handler: () => {
              this.MainApp.dropoff.address = "";
              this.showbook = false;
              if (this.directionsDisplay != null) {
               this.directionsDisplay.setMap(null);
                this.directionsDisplay = null;
              }
            }
          }
        ]
      });
      alert.present();
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
        streetViewControl: false,
        mapTypeId: 'roadmap',
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
      if(result.status=="OK"){
       this.MainApp.pickup.address = result.results[0].formatted_address;       
      }else{
        alert('Unable to get the address');
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


book() {
  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  loading.present();

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}


  addInfoWindow(marker, content){
   
    let infoWindow = new google.maps.InfoWindow({
      content: content,
    }); 
      infoWindow.close();
      infoWindow.open(this.map, marker);
  }
 
    openSearch(type){

  	let searchModal = this.modalCtrl.create(SearchPage, { type:type });
  	  searchModal.onDidDismiss(data => {
    
        if(data){
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

        if (this.directionsDisplay != null) {
            this.directionsDisplay.setMap(null);
            this.directionsDisplay = null;
        }

                // var image = new google.maps.MarkerImage('https://lh3.googleusercontent.com/9VaPNnB-Z3vMgVuKCrEbTTxqg_70IzmzrH80wjwAcTLKlnRBmYedwel8mU3KWy0gpa9z=w300',
                //             new google.maps.Size(58, 58),
                //             new google.maps.Point(0, 0),
                //             new google.maps.Point(0, 14));

                // var markerOption = {
                //     clickable: false,
                //     flat: true,
                //     icon: image,
                //     visible: true,
                //     map: map
                // };

        this.directionsDisplay = new google.maps.DirectionsRenderer({ polylineOptions: { strokeColor: "black" } });

        this.directionsDisplay.setMap(null);
        this.directionsDisplay.setMap(this.map);
        // directionsDisplay.setPanel(this.directionsPanel.nativeElement);
        directionsService.route({
        		// origin: {lat: this.MainApp.pickup.lat, lng: this.MainApp.pickup.lng},
        		// destination: {lat: this.MainApp.dropoff.lat, lng: this.MainApp.dropoff.lng},
        		origin: this.MainApp.pickup.address,
        		destination: this.MainApp.dropoff.address,
            travelMode: google.maps.TravelMode['DRIVING']
        }, (res, status) => {
        	console.log(res);

            this.ngZone.run(() => {
          
            if(status == google.maps.DirectionsStatus.OK){
                this.showbook = 'book';
                this.directionsDisplay.setDirections(res);
                this.distance = res.routes[0].legs[0].distance.value;
                this.duration = res.routes[0].legs[0].duration.value;
            } else {
                console.warn(status);
            }

            });  

        });
 
    }

 
}



// -------------------------------------[search module]-----------------------------------------


@Component({
  selector: 'search-page',
  templateUrl: 'search.html'
})
export class SearchPage{
@ViewChild('input') myInput ;
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
    private inj:Injector,
    private keyboard:Keyboard,
 	) {

	this.MainApp = this.inj.get(MyApp);
    this.autocompleteItems = [];
    this.autocomplete = {
      query: ''
    };
	this.type = params.get('type');

 }


  ionViewDidEnter() {

	let elem = <HTMLInputElement>document.querySelector('.searchbar-input');
	  setTimeout(()=>{
      	if (elem) {
	    elem.focus();
	    this.keyboard.show();
		}
  	}, 150);


 }
 
 dismiss() {
    this.viewCtrl.dismiss();
  }

  chooseItem(item: any) {
    console.log(item);
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
    // let geocoder = new google.maps.Geocoder();
    // geocoder.geocode({ 'address': address }, (results, status) => {
    // 	// console.log(result);
    // 	if(status){
    // 	console.log(status);    		
    // }else{
    // 	console.log('wala');
    // }

      this.location_data.address = address;
  //     if(status){
		// this.location_data.lat = results[0].geometry.location.lat();
		// this.location_data.lng = results[0].geometry.location.lng();    	
	 //  }else{
		// this.location_data.lat = 0;
		// this.location_data.lng = 0;
	 //  }

   // });
 }



	getSearch(test){
		console.log(test);
	}






}