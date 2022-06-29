import React, { Component } from "react";

import Bio from "./bio.component";
import PostList from "./post/post-list.component";
import CommentList from "./comment/comment-list.component";
import AddComment from "./comment/add-comment.component";
import CommentSection from "./comment/comment-section.component";
import PostDetails from "./post/post-details.component";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <Bio />
        <PostList />
      </div>
    );
  }
}
