import Component from '@ember/component';
import { action } from '@ember/object';

export default class UiButtonComponent extends Component {
  @action
  click(event) {
    event.preventDefault();

    this.onClick();
  }
}
