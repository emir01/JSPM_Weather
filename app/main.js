import angular from "angular"
import "./core/core.module"

angular.element(document).ready(function () {
    console.log("BOOTSTRAP");
    angular.bootstrap(document, ["app"]);
})