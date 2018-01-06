/* @flow */
//  所用使用 react-nativen AsyncStorage 写的存储方法都写在这个 js 里

import { AsyncStorage } from 'react-native';

// AsyncStorage set method wrapper:
function set(key: string, info: number | string | bool): Promise<boolean> {
  console.log(typeof info);
  if (typeof info === 'number' || typeof info === 'boolean') {
    info = info.toString();
  }
  if (info === null) {
    console.log('found null info');
    info = '';
  }
  console.log(`save key:${key} -- info:${info}`);
  return new Promise((resolve, reject) => {
    AsyncStorage.setItem(key, info)
    .then(r => resolve(r))
    .catch(e => reject(e));
  });
}

// AsyncStorage get method wrapper:
function get(key: string): Promise<string | boolean> {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(key)
    .then((r) => {
      console.log('get involve', r);
      let info = r;
      if (r === 'false') {
        info = false;
      }
      if (r === 'true') {
        info = true;
      }
      resolve(info);
    })
    .catch(e => reject(e));
  });
}


export function setTestName(name: string) {
  return set('TEST_NAME', name);
}

export function getTestName() {
  return get('TEST_NAME');
}
