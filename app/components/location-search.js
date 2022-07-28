import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class LocationSearchComponent extends Component {
  @tracked inputValue = '';

  @action
  setInputValue(event) {
    this.inputValue = event.target.value;
  }
}
