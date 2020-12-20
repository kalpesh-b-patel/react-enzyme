import App from './App';
import { shallow } from 'enzyme';
import CommentBox from './components/CommentBox/CommentBox';
import CommentList from './components/CommentList/CommentList';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<App />);
});

afterAll(() => {});

it('shows CommentBox, CommentList component', () => {
  expect(wrapper.find(CommentBox).length).toEqual(1);
  expect(wrapper.find(CommentList).length).toEqual(1);
});
