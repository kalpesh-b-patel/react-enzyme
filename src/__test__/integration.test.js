import { mount } from 'enzyme';
import { Root } from '../Root';
import moxios from 'moxios';
import App from '../App';

let wrapper;
beforeEach(() => {
  moxios.install();
  moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [
      {
        name: 'one',
      },
      {
        name: 'two',
      },
      {
        name: 'three',
      },
    ],
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('show all li tags', (done) => {
  wrapper = mount(
    <Root>
      <App />
    </Root>
  );
  wrapper.find('.fetch-comments').simulate('click');

  moxios.wait(() => {
    wrapper.update();
    expect(wrapper.find('li').length).toEqual(3);
    done();
    wrapper.unmount();
  });
});
