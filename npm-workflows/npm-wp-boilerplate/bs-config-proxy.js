
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
    //**, para que escuche a todos los niveles desde la raíz de la carpeta principal
    "files": './**'
    , "proxy": 'zackis.tuto.autom.optim-wp-escuelait.net:8080'
    , "host": 'zackis.tuto.autom.optim-wp-escuelait.net'
    , "port": 8090
    , "open": 'external'
    //, "serveStatic": []
    , "reloadDelay": 300
    , "reloadDebounce": 500
    , "notify": true
    , "browser": 'default'
};