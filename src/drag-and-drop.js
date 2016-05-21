import dragula from 'dragula';
import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

//import {ElementDroppedEvent} from './events';

@inject(EventAggregator)
export class DragAndDrop {
  eventAggregator;
  dragging = false;

  constructor(eventAggregator) {
    this.eventAggregator = eventAggregator;

    let dragApi = dragula({
      isContainer: el => {
        if (!el) {
          return false;
        }

        if (dragApi.dragging) {
          return el.classList.contains('drop-target');
        }

        return el.classList.contains('drag-source');
      },
      moves: (el) => {
        return !el.classList.contains('active');
      },
      revertOnSpill: true,
      delay: 200
    });

    this.trackDrop(dragApi);
    this.trackDraggingState(dragApi);
  }

  trackDrop(dragApi) {
    dragApi.on('drop', (el, target, source) => {
      let parent;
      if (target.parentElement.parentElement.au.controller.viewModel.document) {
        parent = target.parentElement.parentElement.au.controller.viewModel.document.root;
      } else {
        parent = target.parentElement.parentElement.au.controller.viewModel.tag;
      }

      dragApi.cancel();
      if (parent.acceptsTag(source.tag)) {
        let element = new source.tag.constructor();
        element.setParent(parent);
        parent.addChild(element, this.dropPos);
      }
    });
  }

  trackDraggingState(dragApi) {
    let handle;
    dragApi.on('drag', () => {
      handle = setTimeout(() => this.dragging = true, 500);
    });

    dragApi.on('shadow', (el, container) => {
      this.dropPos = 0;
      for (let i = 0; i < container.children.length; i++) {
        if (container.children[i].classList.contains('gu-transit')) {
          console.log(i);
          this.dropPos = i;
        }
      }
    });

    dragApi.on('dragend', () => {
      clearTimeout(handle);
      this.dragging = false;
    });
  }
}
