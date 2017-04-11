
/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */

module.exports = {
    "files": './src'
    , "server": true
    , "startPath": './src'
    /*, "server": {
        baseDir: './src'
    }
    //, "startPath": './src'*/
    , "host": 'zackis.tuto.autom.optim-frontend-escuelait.net'
    , "port": 8090
    , "open": 'external'
    , "serveStatic": ['./src']
    , "reloadDelay": 300
    , "reloadDebounce": 500
    , "notify": true
    , "browser": 'default'
};