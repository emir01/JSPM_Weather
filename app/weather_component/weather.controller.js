
export class WeatherController {
    constructor($http){
        this.location = ""
        this.http = $http;
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=Skopje&APPID=ab4c3921f950e867da9f0bd793cfebfe";
    }
    
     fetch() {
         
         this.http.get(this.url).then(response=>console.log(response.data));
    }
}
