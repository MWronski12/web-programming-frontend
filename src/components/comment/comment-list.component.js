import React, { Component } from "react";
import Comment from "./comment.component";
import BlogService from "../../services/blog.service";

export default class CommentList extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    BlogService.getPostComments(this.props.postId).then((response) => {
      this.setState({ comments: response.data });
    });
  }

  render() {
    return (
      <div>
        {this.state.comments.map((comment) => (
          <Comment key={comment.id} id={comment.id} />
        ))}
      </div>
    );
  }
}
