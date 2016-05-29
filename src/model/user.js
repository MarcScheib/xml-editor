import {BaseTag} from './base-tag';

export class User extends BaseTag {
  file = '';
  fileencoding = 'UTF-8';
  dbvariable = '';

  constructor() {
    super('<user>', 'This tag allows to create users which are imported from a CSV file or a database table.');
  }

  getXML() {
    if (this.file) {
      return '<user file="' + this.file + '" fileencoding="' + this.fileencoding + '" />';
    } else if (this.dbvariable) {
      return '<user dbvariable="' + this.dbvariable + '" />';
    }

    return '<user />';
  }
}
