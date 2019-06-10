const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(proxy('/auth/*',
    //{ target: 'http://localhost:5000/' }
        
    { target: 'http://monktree.ap-south-1.elasticbeanstalk.com/' }
    ));
    app.use(proxy('/api/*', 
    //{ target: 'http://localhost:5000/' }
        
    { target: 'http://monktree.ap-south-1.elasticbeanstalk.com/' }
    ));
    app.use(proxy('/api/search_college/*', 
    //{ target: 'http://localhost:5000/' }
        
    { target: 'http://monktree.ap-south-1.elasticbeanstalk.com/' }
    ));
    app.use(proxy('/api/search_branch/*', 
    //{ target: 'http://localhost:5000/' }
        
    { target: 'http://monktree.ap-south-1.elasticbeanstalk.com/' }
    ));
}
