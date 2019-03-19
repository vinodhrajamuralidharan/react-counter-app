import React, {Component} from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: []
  };

  tagsHandler() {
    if (this.state.tags.length) {
      return  <ul> {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}  </ul>;
    }

    return 'There are no tags!'
  }
  incrementHandler= (val) => {
    this.setState({
      count: this.state.count+val
    });
    console.log('Increment clicked' + this.state.count);
  }
  render() {
    return (
      <React.Fragment>
        <span className="badge badge-primary">{this.state.count}</span>
        {this.state.tags.length === 0 && 'Please enter some tags'}
        {this.tagsHandler()}
        <button className="btn btn-primary" onClick={() => this.incrementHandler(1)}>Increment</button>
      </React.Fragment>
    );
  }
}

export default Counter;
