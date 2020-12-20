import { mount } from 'enzyme';
import CommentBox from './CommentBox';
import { Root } from '../../Root';

let wrapper;
beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterAll(() => {
  wrapper.unmount();
});

it('should have one heading', () => {
  expect(wrapper.find('h1').length).toEqual(1);
});

describe('the text area', () => {
  beforeEach(() => {
    wrapper.find('textarea').simulate('change', { target: { value: 'foo' } });
    wrapper.update();
  });

  it('should have input type text that users can type', () => {
    expect(wrapper.find('textarea').prop('value')).toEqual('foo');
  });

  it('should clear the form after submit', () => {
    expect(wrapper.find('textarea').prop('value')).toEqual('foo');

    wrapper.find('form').simulate('submit');
    wrapper.update();
    expect(wrapper.find('textarea').prop('value')).toEqual('');
  });
});
