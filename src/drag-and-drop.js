import dragula from 'dragula';
import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

//import {ElementDroppedEvent} from './events';
import {Device} from './model/device';

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
      delay: 200,
      copy: true
    });

    this.trackDrop(dragApi);
    this.trackDraggingState(dragApi);
  }

  trackDrop(dragApi) {
    dragApi.on('drop', (el, target, source) => {
      let parent;
      if (target.parentElement.au.controller.viewModel.$parent.document) {
        parent = target.parentElement.au.controller.viewModel.$parent.document.root;
      } else {
        parent = target.parentElement.au.controller.viewModel.$parent.tag;
      }

      dragApi.cancel();
      //if (parent.accepts(source.element)) {
        let element = new Device();
        //this.eventAggregator.publish(new ElementDroppedEvent(element, parent, this.dropPos));
      //}
      parent.addChild(element, this.dropPos);
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
