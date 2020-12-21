import CommentBox from 'components/CommentBox/CommentBox';
import CommentList from 'components/CommentList/CommentList';
import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import './components/Child';
import * as actions from './actions';

function App(props) {
  const onAuthClick = () => {
    props.toggleAuth(!props.auth);
  };
  return (
    <div className='App'>
      <Link to='/'>Home</Link>&nbsp;&nbsp;
      <Link to='/post'>Comments</Link>&nbsp;&nbsp;
      <button type='button' onClick={onAuthClick}>
        {props.auth ? 'Logout' : 'Login'}
      </button>
      <Switch>
        <Route exact path='/post' component={CommentBox}></Route>
        <Route exact path='/' component={CommentList}></Route>
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, actions)(App);
