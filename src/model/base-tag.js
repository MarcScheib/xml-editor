export class BaseTag {
  name;
  description;
  parent;
  children;

  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.children = [];
  }

  addChild(element, pos) {
    this.children.splice(pos, 0, element);
  }

  remove() {
    for (let i = 0; i < this.parent.children.length; i++) {
      if (this.parent.children[i] === this) {
        this.parent.children.splice(i, 1);
        break;
      }
    }
  }

  clone() {
    // Todo: extend cloning
    let newTag = new this.constructor();
    newTag.setParent(this.parent);

    let pos = 0;
    for (let i = 0; i < this.parent.children.length; i++) {
      if (this.parent.children[i] === this) {
        pos = i;
        break;
      }
    }
    this.parent.addChild(newTag, pos + 1);
  }

  setParent(parent) {
    this.parent = parent;
  }

  getXML() {
    return '';
  }
}
