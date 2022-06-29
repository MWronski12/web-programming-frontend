import React, { Component } from "react";
import { useParams } from "react-router-dom";

import authService from "../../services/auth.service";
import CommentSection from "../comment/comment-section.component";
import PostListItem from "./post-list-item.component";

export default class PostDetails extends Component {
  constructor() {
    super();

    this.state = {
      showAdminContent: false,
    };
  }

  componentDidMount() {
    const user = authService.getCurrentUser();

    if (user) {
      this.setState({
        showAdminContent: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  render() {
    return (
      <div className="mt-5">
        <PostListItem postId={this.props.postId} />
        <CommentSection postId={this.props.postId} />
      </div>
    );
  }
}
