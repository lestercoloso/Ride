import { Component, ViewChild, ElementRef, NgZone, Inject, Injector, Injectable } from '@angular/core';
import { NavController, ModalController, NavParams, ViewController} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http'; 
import { MyApp } from '../../app/app.component';


declare var google;

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


service = new google.maps.places.AutocompleteService();

 constructor(
    public navCtrl: NavController, 
    public params: NavParams,
    public http: Http,
    public viewCtrl: ViewController, 
    private zone: NgZone,
    private inj:Injector
  ) {

    this.autocompleteItems = [];
    this.autocomplete = {
      query: ''
    };

this.MainApp = this.inj.get(MyApp);
this.type = params.get('type');

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
      // this.MainApp.changeAddress('test','hellos');
      this.MainApp.changeAddress(this.type, results[0].formatted_address, results[0].geometry.location.lat(), results[0].geometry.location.lng());
   });
 }



  getSearch(test){
    console.log(test);
  }






}