import {ViewLocator, LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';

LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.logLevel.debug);

ViewLocator.prototype.convertOriginToViewUrl = function(origin) {
  let moduleId = origin.moduleId;
  let id = (moduleId.endsWith('.js')) ? moduleId.substring(0, moduleId.length - 3) : moduleId;
  return id.replace('view-model', 'view') + '.html';
};

export function configure(aurelia) {
  aurelia.use
    .defaultBindingLanguage()
    .defaultResources()
    .plugin('aurelia-dialog', config => {
      config.useDefaults();
      config.settings.lock = true;
      config.settings.centerHorizontalOnly = true;
      config.settings.startingZIndex = 1035;
    })
    .plugin('aurelia-syntax-highlighter');

  aurelia.start()
    .then(a => a.setRoot('view-model/editor', document.body));
}
