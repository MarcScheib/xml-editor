export class BaseTag {
  tagName;
  tagDescription;
  parent;
  children;
  acceptTags;
  isSelected;

  constructor(name, description) {
    this.tagName = name;
    this.tagDescription = description;
    this.children = [];
    this.acceptTags = [];
  }

  attached() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  addChild(element, pos) {
    this.children.splice(pos, 0, element);
  }

  acceptsTag(tag) {
    for (let i = 0; i < this.acceptTags.length; i++) {
      if (tag instanceof this.acceptTags[i]) {
        return true;
      }
    }

    return false;
  }

  edit() {
    let document = this;
    while (document.parent !== undefined) {
      document = document.parent;
    }

    if (document.selectedTag !== undefined) {
      document.selectedTag.isSelected = false;
    }

    document.selectedTag = this;
    this.isSelected = true;
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
