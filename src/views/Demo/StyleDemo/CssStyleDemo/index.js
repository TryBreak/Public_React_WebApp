import React, { Component } from 'react';
import styles from './index.module.less';
import image14 from '../../../../assets/image/14.jpg';
class CssStyleDemo extends Component {
  render() {
    return (
      <div>
        <h1>这里是 CssStyleDemo ,这里是三级路由</h1>
        img标签引用
        <img src={require('../../../../assets/image/13.jpg')} alt="" />
        <img src={image14} alt="" />
        css使用
        <div className={styles.cover} />
      </div>
    );
  }
}

export default CssStyleDemo;
