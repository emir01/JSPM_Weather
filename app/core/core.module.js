import angular from "angular";
import "angular-ui-router";
import {WeatherController} from "../weather_component/weather.controller"
import tpl  from "../weather_component/weather.html!"

console.log("CORE MODULE");

let appModule = angular.module("app", ["ui.router"])
    .config(($stateProvider)=> {
           $stateProvider.state('home', {
                url: '/',
                views: {
                    application: {
                        template: tpl,
                        controller: WeatherController,
                        controllerAs: 'vm'
                    }
                }
            });
        })
    .controller("WeatherController", WeatherController);
        