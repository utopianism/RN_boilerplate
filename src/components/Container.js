// @flow

import * as React from 'react';
import { View } from 'react-native';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

type Props = {
  children?: React.Node,
  style?: StyleObj;
};

const Container = (props: Props) => {
  return (
    <View
      style={[{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }, props.style]
    }
    >
      {props.children}
    </View>
  );
};

export { Container };
