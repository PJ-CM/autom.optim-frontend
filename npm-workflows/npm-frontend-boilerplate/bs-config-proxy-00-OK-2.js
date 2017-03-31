
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

const optionConfigBS = {
    server: false//false
    , proxyServer: 'zackis.tuto.autom.optim-frontend-escuelait.net:8080'//false
    , startPath: null//null
    , serveStatic: []//[]
    //, serveStatic: ['.']//[]
    , files: './src'//false
    , reloadDelay: 300//0
    , reloadDebounce: 500//0
    , host: 'zackis.tuto.autom.optim-frontend-escuelait.net'//null
    , port: 8090//3000
    , open: 'external'//'local'
    , notify: true//true
    , browser: 'default'//'default'
}

module.exports = {
    "files": optionConfigBS.files,
    "server": optionConfigBS.server,
    "proxy": optionConfigBS.proxyServer,
    "port": optionConfigBS.port,
    "serveStatic": optionConfigBS.serveStatic,
    "open": optionConfigBS.open,
    "browser": optionConfigBS.browser,
    "notify": optionConfigBS.notify,
    "reloadDelay": optionConfigBS.reloadDelay,
    "reloadDebounce": optionConfigBS.reloadDebounce,
    "startPath": optionConfigBS.startPath,
    "host": optionConfigBS.host,
};