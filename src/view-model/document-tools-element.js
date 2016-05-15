import {bindable, customElement, inject} from "aurelia-framework";
import {DialogService} from "aurelia-dialog";
import {formatXml} from "../util/util";
import {XMLDialog} from "./xml-dialog";

@customElement('document-tools')
@inject(DialogService)
export class DocumentToolsElement {
  @bindable
  document;

  constructor(dialogService) {
    this.dialogService = dialogService;
  }

  clearDocument() {
    this.document.clear();
  }

  generateXML() {
    this.dialogService.open({
        viewModel: XMLDialog,
        model: {
          xml: formatXml(this.document.getXML())
        }
      })
      .then(result => {
      });
  }
}
