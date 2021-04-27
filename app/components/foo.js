import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class FooComponent extends Component {
  @tracked foo;
}
