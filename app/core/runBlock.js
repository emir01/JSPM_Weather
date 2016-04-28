

export default function ($rootScope, $state){
    console.log("RUN")
    console.log($state.get());
    $state.go("home");
    $rootScope.$on('$stateChangeStart', 
    function(event, toState, toParams, fromState, fromParams, options){
        console.log(toState); 
        console.log(fromState);
        
        // transitionTo() promise will be rejected with 
        // a 'transition prevented' error
    });
    
    $rootScope.$on('$stateNotFound', function(){
        console.log("State not found");
    });
    
    $rootScope.$on("$stateChangeSuccess", function(){
        console.log("State Change Success");
    })
}