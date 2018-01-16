import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { NavController, ModalController, NavParams, ViewController} from 'ionic-angular';
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
    public http: Http,
    public modalCtrl: ModalController
    ) {
  }
 
  ionViewDidLoad(){
    this.loadMap();


  }

  openSearch(lat, lng){

	let searchModal = this.modalCtrl.create(SearchPage, { lat: lat, lng: lng });
	searchModal.present();

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

service = new google.maps.places.AutocompleteService();

 constructor(
 	  public params: NavParams,
    public http: Http,
    public viewCtrl: ViewController, 
    private zone: NgZone
 	) {

    this.autocompleteItems = [];
    this.autocomplete = {
      query: ''
    };

 	// this.longitude = params.get('lng');
 	// this.latitude = params.get('lat');


      // let script = document.createElement("script");
      // script.id = "googleMaps";

      // let apiKey = 'AIzaSyA9f8YjPIgwAr-ZIscN1nTMmGUZsDsHbTQ';
      // script.src = 'https://maps.googleapis.com/maps/api/js?key='+apiKey+'&libraries=places&callback=initAutocomplete';
      
      // document.body.appendChild(script);  

 }


 dismiss() {
    this.viewCtrl.dismiss();
  }

  chooseItem(item: any) {
    this.viewCtrl.dismiss(item);
    this.geo = item;
    this.geoCode(this.geo);//convert Address to lat and long
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
        predictions.forEach(function (prediction) {
          me.autocompleteItems.push(prediction.description);
        });
      });
    });
  }

  //convert Address string to lat and long
  geoCode(address:any) {
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, (results, status) => {
    this.latitude = results[0].geometry.location.lat();
    this.longitude = results[0].geometry.location.lng();
    alert("lat: " + this.latitude + ", long: " + this.longitude);
   });
 }



	getSearch(test){
		console.log(test);
	}


	// updateSearch(key){
	//    this.http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+this.latitude+', '+this.longitude+'&radius=1000&keyword='+this.key+'&key=AIzaSyArxGIDm4Ksf4GAuzpoG7xyLP1VTLiynmc', { }).subscribe(data => {
	//        let result =  data.json();
	//        if(result.status=="OK"){
	// 			for(let address of result.results) {
	// 				console.log(address.vicinity);
	// 			}
	//        }else{
	//        	alert("No Results found.");
	//        }
	//       console.log(result);
	//     }, error => {
	//         alert('Unable to get the address');
	//     });  

	// }




}