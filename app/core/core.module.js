import angular from "angular";
import "angular-ui-router";
import { WeatherController } from "../weather_component/weather.controller"
import tpl  from "../weather_component/weather.html!"

angular.module("app", ["ui.router"])
    .config(($stateProvider, $urlRouterProvider)=> {
         $urlRouterProvider.otherwise("/")
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