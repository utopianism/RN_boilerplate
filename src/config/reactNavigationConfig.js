// @flow

import { colors } from './colors';


/**
 * nav 的参数配置
 * 这里注意 Android 的 nav 默认样式 title 是不居中的
 * headerTitleStyle 主要是为了统一 Android iOS 的居中样式
 * 如需要，根据左右两边是否有 icon 添加 headerRight: (<View />) 让 title 居中
 */
const navigationOptions = {
  headerTitleStyle: {
    alignSelf: 'center',
    textAlign: 'center',
  },
};


/**
 * stackNavigator 的参数配置
 */
const stackNavigatorConfig = {
  transitionConfig: () => ({
    transitionSpec: {
      duration: 200,
    },
  }),
};

/**
 * tabbar 的样式配置
 */
const tabBarConfig = {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: colors.primary,
    inactiveTintColor: colors.grey,
    indicatorStyle: { height: 0 },
    showIcon: true,
    showLabel: false,
    style: {
      backgroundColor: '#fff',
    },
  },
};

export {
  navigationOptions,
  stackNavigatorConfig,
  tabBarConfig,
};
