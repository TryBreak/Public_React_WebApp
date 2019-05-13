/*
 * @LastEditors: Mark
 * @Description: none
 * @Author: Mark
 * @Date: 2019-05-13 15:18:24
 * @LastEditTime: 2019-05-13 15:28:45
 */

// let url = 'https://xcx.joywaygym.com'; //生产服
let url = 'http://ip-29-shanhusecurity-app.coralcodes.com'; //测试服
// let url = 'http://ip-29-shanhusecurity-app.coralcodes.com'; //UAT

export const baseUrl = url;

const versionList = [
  {
    code: '0.1.0',
    describe: '这里是上传',
    user: 'Mark',
  },
];

export const version = versionList[versionList.length - 1];
