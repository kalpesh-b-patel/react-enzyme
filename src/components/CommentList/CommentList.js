import React from 'react';
import { connect } from 'react-redux';

const CommentList = (props) => {
  return (
    <div>
      {props.comments.map((comment) => (
        <li key={comment}> {comment}</li>
      ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};

export default connect(mapStateToProps, null)(CommentList);
