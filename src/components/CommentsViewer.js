import React from 'react';
import styled from 'styled-components';

export default class CommentsViewer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      comments: [],
    }
  }

  buttonClick = async (e) => {
    let r = await fetch('https://jsonplaceholder.typicode.com/comments');
    let comments = await r.json();

    this.setState({ comments: comments })
  }

  render() {
    return (
      <div>
        <button onClick={(e) => this.buttonClick(e)}>fetch</button>
        <Container>
          {this.state.comments.map((c, i) => <Comment key={c.id} comment={c} />)}
        </Container>
      </div>
    )
  };
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export class Comment extends React.Component {
  render() {
    return (
      <CommentContainer>
        <CommentId>
          {this.props.comment.id}
        </CommentId>
        <div>
          {this.props.comment.name}
        </div>
      </CommentContainer>
    )
  };
}

const CommentContainer = styled.div`
  display: flex;
  flex-basis: 2;
  font-size: 1.5em;
  padding: 1em;
  margin: 2em;
  color: #fbfbfb;
  border-radius: 0.5em;
  background-color: #0f0f0f;
  align-items: center;
`

const CommentId = styled.div`
  font-size: 1.7em;
  margin-right: 1em;
`