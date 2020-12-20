import CommentList from './CommentList';
import { mount } from 'enzyme';
import { Root } from '../../Root';

let wrapper;
beforeEach(() => {
  wrapper = mount(
    <Root initialState={{ comments: ['one', 'two', 'three'] }}>
      <CommentList />
    </Root>
  );
});

afterAll(() => {});

it('show all li tags', () => {
  expect(wrapper.find('li').length).toEqual(3);
});

it('show all li txt', () => {
  expect(wrapper.render().text()).toContain('one');
  expect(wrapper.render().text()).toContain('two');
  expect(wrapper.render().text()).toContain('three');
});
