export class BaseTag {
  name;
  description;
  children;

  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.children = [];
  }

  addChild(element, pos) {
    this.children.splice(pos, 0, element);
  }

  getXML() {
    return '';
  }
}
