import angular from "angular";
import "angular-ui-router";
import { WeatherController } from "../weather_component/weather.controller"
import tpl  from "../weather_component/weather.html!"
import runBlock from "./runBlock";

angular.module("app", ["ui.router"])
    .config(($stateProvider, $rootScopeProvider)=> {
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
    .run(runBlock)
    .controller("WeatherController", WeatherController);
        