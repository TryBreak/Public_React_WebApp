/*
 * @LastEditors: Mark
 * @Description: none
 * @Author: Mark
 * @Date: 2019-05-05 11:53:31
 * @LastEditTime: 2019-05-17 14:47:16
 */
import { observable, action, computed } from 'mobx';

class HomeStore {
  @observable text;
  @observable num;

  constructor() {
    this.num = 0;
    this.text = 'Hello Word!';
  }

  @action
  plus = () => {
    this.num += 1;
  };

  minus = () => {
    this.num -= 1;
  };

  change = (str) => {
    this.text = str;
  };
  @computed
  get plusNum() {
    return this.num + 5;
  }
}

const homeStore = new HomeStore(); //通过new 创建一个homeStore对象实例通过export导出

export default homeStore;
