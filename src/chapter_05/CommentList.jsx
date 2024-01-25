import React from 'react';
import Comment from './Comment';

const comments = [
    {
      name: "Kyle",
      comment: "Hi, I am Kyle.",
    },
    {
      name: "Peter",
      comment: "Nice to meet you",
    },
    {
      name: "Joy",
      comment: "I truthly welcome you!!",
    },
    {
      name: "Kyle",
      comment: "Thank you!",
    },
  ];
  
  function CommentList(props) {
    return (
      <div>
        {comments.map((comment) => {
          return <Comment name={comment.name} comment={comment.comment} />;
        })}
      </div>
    );
  }

export default CommentList;