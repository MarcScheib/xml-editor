System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  map: {
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@2.0.1",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.0",
    "aurelia-dialog": "npm:aurelia-dialog@1.0.0-beta.3.0.1",
    "aurelia-framework": "npm:aurelia-framework@1.1.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.1.0",
    "aurelia-syntax-highlighter": "npm:aurelia-syntax-highlighter@0.1.1",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "bootstrap": "github:twbs/bootstrap@4.0.0-alpha.6",
    "core-js": "npm:core-js@1.2.7",
    "dragula": "npm:dragula@3.7.2",
    "font-awesome": "github:FortAwesome/font-awesome@4.7.0",
    "jquery": "npm:jquery@3.1.1",
    "text": "github:systemjs/plugin-text@0.0.4",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.9"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:twbs/bootstrap@4.0.0-alpha.6": {
      "jquery": "npm:jquery@2.2.4",
      "tether": "github:HubSpot/tether@1.4.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-binding@1.2.0": {
      "aurelia-logging": "npm:aurelia-logging@1.3.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0"
    },
    "npm:aurelia-bootstrapper@2.0.1": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-framework": "npm:aurelia-framework@1.1.0",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.1",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.1.0",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.2.0",
      "aurelia-router": "npm:aurelia-router@1.2.1",
      "aurelia-templating": "npm:aurelia-templating@1.3.0",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.3.0",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.3.1",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.1.0"
    },
    "npm:aurelia-dependency-injection@1.3.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-dialog@1.0.0-beta.3.0.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-templating": "npm:aurelia-templating@1.3.0"
    },
    "npm:aurelia-event-aggregator@1.0.1": {
      "aurelia-logging": "npm:aurelia-logging@1.3.0"
    },
    "npm:aurelia-framework@1.1.0": {
      "aurelia-binding": "npm:aurelia-binding@1.2.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.3.0"
    },
    "npm:aurelia-history-browser@1.0.0": {
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-loader-default@1.0.1": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-loader@1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-logging-console@1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.3.0"
    },
    "npm:aurelia-metadata@1.0.3": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-pal-browser@1.1.0": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-polyfills@1.2.0": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-route-recognizer@1.1.0": {
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-router@1.2.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.0",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.0"
    },
    "npm:aurelia-syntax-highlighter@0.1.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-templating": "npm:aurelia-templating@1.3.0",
      "prismjs": "npm:prismjs@1.5.1"
    },
    "npm:aurelia-task-queue@1.2.0": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-templating-binding@1.3.0": {
      "aurelia-binding": "npm:aurelia-binding@1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.0",
      "aurelia-templating": "npm:aurelia-templating@1.3.0"
    },
    "npm:aurelia-templating-resources@1.3.1": {
      "aurelia-binding": "npm:aurelia-binding@1.2.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.3.0"
    },
    "npm:aurelia-templating-router@1.1.0": {
      "aurelia-binding": "npm:aurelia-binding@1.2.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.2.1",
      "aurelia-templating": "npm:aurelia-templating@1.3.0"
    },
    "npm:aurelia-templating@1.3.0": {
      "aurelia-binding": "npm:aurelia-binding@1.2.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.8",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:contra@1.9.4": {
      "atoa": "npm:atoa@1.0.0",
      "ticky": "npm:ticky@1.0.1"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:crossvent@1.5.4": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "custom-event": "npm:custom-event@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:dragula@3.7.2": {
      "contra": "npm:contra@1.9.4",
      "crossvent": "npm:crossvent@1.5.4"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:ticky@1.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});