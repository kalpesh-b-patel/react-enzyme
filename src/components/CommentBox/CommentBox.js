import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const CommentBox = (props) => {
  const [input, setInput] = useState('');

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.add(input);
    setInput('');
  };

  const onFetchComments = async () => {
    await props.fetch();
  };

  return (
    <div>
      <h1>Enter your comment</h1>
      <form onSubmit={onSubmit}>
        <textarea value={input} onChange={onInputChange} />
        <button type='submit'>Submit</button>
        <button
          type='button'
          className='fetch-comments'
          onClick={onFetchComments}
        >
          Fetch Comments
        </button>
      </form>
    </div>
  );
};

export default connect(null, actions)(CommentBox);
