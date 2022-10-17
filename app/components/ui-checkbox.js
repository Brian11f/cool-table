import Component from '@glimmer/component';

export default class UiCheckbox extends Component {
  get isChecked() {
    return this.args.selected.includes(this.args.model.id);
  }
}
