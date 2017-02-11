import {ViewLocator, LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';

LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.logLevel.debug);

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
    .then(a => a.setRoot('editor', document.body));
}
