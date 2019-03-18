import React, {Component} from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3', 'tag4']
  };
  render() {
    return (
      <React.Fragment>
        <span className={this.badgeClassHandler()}> {this.formatCount()} </span>
        <button className="btn btn-primary">Increment</button>
        <ul>
          {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
      </React.Fragment>
    );
  }

  formatCount() {
    const {count} = this.state;
    return count === 0 ? 'zero' : count;
  }
  badgeClassHandler() {
    const {count} = this.state;
    let className = 'badge m-2 badge-';
    className += count === 0 ? 'warning' : 'primary';
    return className;
  }
}

export default Counter;
