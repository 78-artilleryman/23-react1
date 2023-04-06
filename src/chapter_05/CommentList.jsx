import React from "react";
import Comment from "./Comment";

const comments = [
  {
      name: "윤병현",
      comment: "안녕하세요, 윤병현입니다.",
  },
  {
      name: "김솔빈",
      comment: "리액트 재미있어요~!",
  },
  {
      name: "차인태",
      comment: "저도 리액트 배워보고 싶어요!!",
  },
];

function CommentList(){
  return(
    <div>
      {comments.map((comment) =>{
        return(
          <Comment name={comment.name} comment={comment.comment}/>
        )
      })}
    </div>
  )
}

export default CommentList