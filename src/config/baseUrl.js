/*
 * @LastEditors: Mark
 * @Description: 版本号管理和baseUrl管理
 * @Author: Mark
 * @Date: 2019-05-13 15:18:24
 * @LastEditTime: 2019-05-13 16:09:11
 */

// let url = 'https://xcx.joywaygym.com'; //生产服
let url = 'http://ip-29-shanhusecurity-app.coralcodes.com'; //测试服
// let url = 'http://ip-29-shanhusecurity-app.coralcodes.com'; //UAT

export const baseUrl = url;

const versionList = [
  {
    code: '0.1.0',
    describe: 'Public_React_WebApp',
    user: 'Mark',
  },
];

export const version = versionList[versionList.length - 1];
