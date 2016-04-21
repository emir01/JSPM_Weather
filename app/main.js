import angular from "angular"
import "./core/core.module"

angular.element(document).ready(function () {
    angular.bootstrap(document), ["app"]
})