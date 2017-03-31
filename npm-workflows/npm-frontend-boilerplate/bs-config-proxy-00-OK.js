
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

/*let proxyServer = 'localhost:8080',
    startPath = '/aaa-cursos/autom.optim-frontend/talleres.frontend-2017/codigos/npm-workflows/npm-frontend-boilerplate'
const optionConfigBS = {
    proxyServer: 'localhost:8080'
    , startPath: '/aaa-cursos/autom.optim-frontend/talleres.frontend-2017/codigos/npm-workflows/npm-frontend-boilerplate'
    , serveStatic: ['.']
    , files: './src'
    , reloadDelay: 300
    , reloadDebounce: 500
}*/
const optionConfigBS = {
    proxyServer: 'zackis.tuto.autom.optim-frontend-escuelait.net:8080'//false
    , startPath: null//null
    //, startPath: '/aaa-cursos/autom.optim-frontend/talleres.frontend-2017/codigos/npm-workflows/npm-frontend-boilerplate'//null
    , serveStatic: []//[]
    //, serveStatic: ['.']//[]
    , files: './src'//false
    , reloadDelay: 300//0
    , reloadDebounce: 500//0
    , host: 'zackis.tuto.autom.optim-frontend-escuelait.net'//null
    , port: 8090//3000
    , open: 'external'//'local'
    , notify: true//true
}

module.exports = {
    "files": optionConfigBS.files,
    // "watchEvents": [
    //     "change"
    // ],
    // "watchOptions": {
    //     "ignoreInitial": true
    // },
    // "server": {
    //     baseDir: optionConfigBS.files
    // },//false,/**/
    "server": false,
    "proxy": optionConfigBS.proxyServer,
    "port": optionConfigBS.port,
    "serveStatic": optionConfigBS.serveStatic,//[],
    //"open": "local",
    "open": optionConfigBS.open,
    // "browser": "default",
    "notify": optionConfigBS.notify,
    "reloadDelay": optionConfigBS.reloadDelay,//0,
    "reloadDebounce": optionConfigBS.reloadDebounce,//0,
    "startPath": optionConfigBS.startPath,//null,
    "host": optionConfigBS.host,//null,
};

/*module.exports = {
    // "ui": {
    //     "port": 3001,
    //     "weinre": {
    //         "port": 8080
    //     }
    // },
    "files": optionConfigBS.files,
    // "watchEvents": [
    //     "change"
    // ],
    // "watchOptions": {
    //     "ignoreInitial": true
    // },
    // "server": {
    //     baseDir: optionConfigBS.files
    // },//false,
    "server": false,
    "proxy": optionConfigBS.proxyServer,
    "port": optionConfigBS.port,
    //"middleware": false,
    "serveStatic": optionConfigBS.serveStatic,//[],
    // "ghostMode": {
    //     "clicks": true,
    //     "scroll": true,
    //     "forms": {
    //         "submit": true,
    //         "inputs": true,
    //         "toggles": true
    //     }
    // },
    // "logLevel": "info",
    // "logPrefix": "BS",
    // "logConnections": false,
    // "logFileChanges": true,
    // "logSnippet": true,
    // "rewriteRules": [],
    //"open": "local",
    "open": optionConfigBS.open,
    // "browser": "default",
    // "cors": false,
    // "xip": false,
    // "hostnameSuffix": false,
    // "reloadOnRestart": false,
    // "notify": true,
    // "scrollProportionally": true,
    // "scrollThrottle": 0,
    // "scrollRestoreTechnique": "window.name",
    // "scrollElements": [],
    // "scrollElementMapping": [],
    "reloadDelay": optionConfigBS.reloadDelay,//0,
    "reloadDebounce": optionConfigBS.reloadDebounce,//0,
    // "reloadThrottle": 0,
    // "plugins": [],
    // "injectChanges": true,
    //"startPath": null,
    "startPath": optionConfigBS.startPath,//null,
    //"minify": true,
    "host": optionConfigBS.host,//null,
    // "localOnly": false,
    // "codeSync": true,
    // "timestamps": true,
    // "clientEvents": [
    //     "scroll",
    //     "scroll:element",
    //     "input:text",
    //     "input:toggles",
    //     "form:submit",
    //     "form:reset",
    //     "click"
    // ],
    // "socket": {
    //     "socketIoOptions": {
    //         "log": false
    //     },
    //     "socketIoClientConfig": {
    //         "reconnectionAttempts": 50
    //     },
    //     "path": "/browser-sync/socket.io",
    //     "clientPath": "/browser-sync",
    //     "namespace": "/browser-sync",
    //     "clients": {
    //         "heartbeatTimeout": 5000
    //     }
    // },
    // "tagNames": {
    //     "less": "link",
    //     "scss": "link",
    //     "css": "link",
    //     "jpg": "img",
    //     "jpeg": "img",
    //     "png": "img",
    //     "svg": "img",
    //     "gif": "img",
    //     "js": "script"
    // }
};*/

/*module.exports = {
    "ui": {
        "port": 3001,
        "weinre": {
            "port": 8080
        }
    },
    "files": optionConfigBS.files,
    "watchEvents": [
        "change"
    ],
    "watchOptions": {
        "ignoreInitial": true
    },
    "server": {
        baseDir: optionConfigBS.files
    },//false,
    "proxy": optionConfigBS.proxyServer,
    "port": optionConfigBS.port,
    "middleware": false,
    "serveStatic": optionConfigBS.serveStatic,
    "ghostMode": {
        "clicks": true,
        "scroll": true,
        "forms": {
            "submit": true,
            "inputs": true,
            "toggles": true
        }
    },
    "logLevel": "info",
    "logPrefix": "BS",
    "logConnections": false,
    "logFileChanges": true,
    "logSnippet": true,
    "rewriteRules": [],
    //"open": "local",
    "open": optionConfigBS.open,
    "browser": "default",
    "cors": false,
    "xip": false,
    "hostnameSuffix": false,
    "reloadOnRestart": false,
    "notify": true,
    "scrollProportionally": true,
    "scrollThrottle": 0,
    "scrollRestoreTechnique": "window.name",
    "scrollElements": [],
    "scrollElementMapping": [],
    "reloadDelay": optionConfigBS.reloadDelay,
    "reloadDebounce": optionConfigBS.reloadDebounce,
    "reloadThrottle": 0,
    "plugins": [],
    "injectChanges": true,
    "startPath": optionConfigBS.startPath,
    "minify": true,
    "host": optionConfigBS.host,//null,
    "localOnly": false,
    "codeSync": true,
    "timestamps": true,
    "clientEvents": [
        "scroll",
        "scroll:element",
        "input:text",
        "input:toggles",
        "form:submit",
        "form:reset",
        "click"
    ],
    "socket": {
        "socketIoOptions": {
            "log": false
        },
        "socketIoClientConfig": {
            "reconnectionAttempts": 50
        },
        "path": "/browser-sync/socket.io",
        "clientPath": "/browser-sync",
        "namespace": "/browser-sync",
        "clients": {
            "heartbeatTimeout": 5000
        }
    },
    "tagNames": {
        "less": "link",
        "scss": "link",
        "css": "link",
        "jpg": "img",
        "jpeg": "img",
        "png": "img",
        "svg": "img",
        "gif": "img",
        "js": "script"
    }
};*/