/**
 * HomeController
 * 默认控制器
 */

'use strict';

class HomeController {
    static *index(next) {
        yield this.render('index');
        yield next;
    }
}
module.exports = HomeController;
