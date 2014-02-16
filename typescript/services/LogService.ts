class LogService {
    static $inject = ['$rootScope'];
    constructor($rootScope) {
        $rootScope.foo = 123;
    }
    log(msg: string) {
        console.log(msg);
    }
}

services.service('logService', LogService);