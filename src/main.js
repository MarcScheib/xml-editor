import {ViewLocator, LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';

LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.logLevel.debug);

ViewLocator.prototype.convertOriginToViewUrl = function(origin) {
  let moduleId = origin.moduleId;
  let id = (moduleId.endsWith('.js') || moduleId.endsWith('.ts')) ? moduleId.substring(0, moduleId.length - 3) : moduleId;
  return id.replace('view-model', 'view') + '.html';
};

export function configure(aurelia) {
  aurelia.use
    .defaultBindingLanguage()
    .defaultResources();

  aurelia.start()
    .then(a => a.setRoot('view-model/editor', document.body));
}
