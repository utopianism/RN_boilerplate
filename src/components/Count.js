// @flow

import * as React from 'react';
import { Text } from 'react-native';

type Props = {
   defaultCount: number;
}

type State = {
  count: number;
}

let timer = 0;

class Count extends React.Component<Props, State> {
  static defaultProps = {
    defaultCount: 5,
  };

  state = {
    count: this.props.defaultCount,
  };

  componentDidMount() {
    timer = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(timer);
  }

  render() {
    return (
      <Text>Count: {this.state.count}</Text>
    );
  }
}

export { Count };
