// @flow

// 说明：
/*
数据库根据 userId 去创建；
用户退出登录的时候关掉相应的数据库；
用户重新登录的话打开相应的 userId 的数据库；
用户第一次登录完，下次再打开 app 时在 splash 页面打开之前保存的 userId 的数据库

根据上面的逻辑，需要公开一个根据 userId 创建库的 api 和根据 userId 关闭库的 api
因为考虑到整个 app 的数据库操作比较频繁，打开数据库不再进行关闭操作

DB flow:
openDB(name: string); // 在如果表不存在这里也会创建表
查询，增加操作....
closeDB();
*/

import SQLite from 'react-native-sqlite-storage';


SQLite.DEBUG(true);
SQLite.enablePromise(true);

/* eslint-disable no-multi-str */

const dbCreatTable = 'create table if not exists "test" \
(\
   `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, \
   `name` TEXT\
 )';

let DBRef = {};

const dbVersion = '2.0';
const dbDisplayname = 'db';
const dbSize = 200000; // 20mb max

function executeSql(dbRef, sql) {
  return dbRef.executeSql(sql);
}

async function openDB(dbName: string = '') {
  try {
    DBRef = await SQLite.openDatabase(`test${dbName}.db`, dbVersion, dbDisplayname, dbSize);
    await executeSql(DBRef, 'PRAGMA foreign_keys = ON;');
    await executeSql(DBRef, dbCreatTable);
    return true;
  } catch (e) {
    throw e;
  }
}

async function closeDB() {
  try {
    await DBRef.close();
    return true;
  } catch (e) {
    throw e;
  }
}

async function insertTest(name: string) {
  try {
    await executeSql(DBRef, `INSERT INTO test VALUES (null, ${name})`);
    return true;
  } catch (e) {
    throw e;
  }
}

// 组查询：
async function queryTest() {
  try {
    const arr = await executeSql(DBRef, 'SELECT * FROM test');
    const results = arr[0];
    const len = results.rows.length;
    if (len === 0) {
      return [];
    }
    return parseTestData(results);
  } catch (e) {
    throw e;
  }
}

function parseTestData(results: Object) {
  const responseTestData = [];
  console.log(results);
  for (let i = 0; i < results.rows.length; i += 1) {
    const row = results.rows.item(i);
    const testData = {
      id: row.id,
      name: row.name,
    };
    responseTestData.push(testData);
    console.log(`------responseTestData ${JSON.stringify(responseTestData)}`);
  }
  return responseTestData;
}

export {

  openDB,
  closeDB,
  insertTest,
  queryTest,


};
