import CommentBox from 'components/CommentBox/CommentBox';
import CommentList from 'components/CommentList/CommentList';
import './App.css';
import './components/Child';

function App() {
  return (
    <div className='App'>
      <CommentBox />
      <CommentList />
    </div>
  );
}

export default App;
