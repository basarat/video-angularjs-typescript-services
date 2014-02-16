class MainController {
    static $inject = ['$scope', 'logService'];
    constructor($scope, logService: LogService) {
        logService.log('some message');
    }
}
controllers.controller('mainController', MainController);
