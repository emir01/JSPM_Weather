import angular from "angular";
import "angular-ui-router";


let appModule = angular.module("app", [])
    .config(($stateProvider)=> {
           $stateProvider.state('home', {
                url: '/',
                views: {
                    application: {
                        template: tpl,
                        controller: ApplicationController,
                        controllerAs: 'vm'
                    }
                }
            });
        });

export default appModule;
