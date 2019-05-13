/*
 * @LastEditors: Tiger
 * @Description: In User Settings Edit
 * @Author: Mark
 * @Date: 2019-05-05 10:25:14
 * @LastEditTime: 2019-05-10 13:45:53
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Toast } from 'antd-mobile';
import { tab_icon } from './img/load';
import styles from './index.less';
class TabBar extends React.Component {
  static propTypes = {
    id: PropTypes.number, //需要高亮的ID
  };
  static defaultProps = {
    id: 1,
  };
  constructor() {
    super();
    this.state = {
      tabList: [
        {
          icon: tab_icon.icon_1,
          icon_active: tab_icon.icon_1_active,
          name: '商城',
          id: 1,
        },
        {
          icon: tab_icon.icon_2,
          icon_active: tab_icon.icon_2_active,
          name: '题库',
          id: 2,
        },
        {
          icon: tab_icon.icon_3,
          icon_active: tab_icon.icon_3_active,
          name: '课程',
          id: 3,
        },
        // {
        //   icon: tab_icon.icon_4,
        //   icon_active: tab_icon.icon_4_active,
        //   name: '打卡',
        //   id: 4,
        // },
        {
          icon: tab_icon.icon_5,
          icon_active: tab_icon.icon_5_active,
          name: '我的',
          id: 5,
        },
      ],
    };
  }
  hrefTo = item => {
    const _this = this;
    const { history } = this.props;

    const { id } = _this.props;
    if (item.id === id) {
      return false;
    }
    const wx = window.wx;
    switch (item.id) {
      case 1:
        history.push('/');
        break;

      case 2:
        Toast.info('敬请期待');
        break;

      case 3:
        console.log('课程,跳转LIST');
        history.push('/lessionlist');
        break;

      // case 4:
      //   wx.miniProgram.navigateTo({ url: '/path/to/page' });
      //   console.log('打卡,去小程序');
      //   break;

      case 5:
        history.push('/personal');
        break;

      default:
        break;
    }
  };
  render() {
    const { tabList } = this.state;
    const { id } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.null} />
        <div className={styles.tabBar}>
          {tabList.map(item => {
            return (
              <div
                className={
                  styles.item + ' ' + (id === item.id && styles.active)
                }
                key={item.id}
                onClick={() => this.hrefTo(item)}
              >
                <img
                  className={styles.icon}
                  alt="icon"
                  src={id === item.id ? item.icon_active : item.icon}
                />
                <span className={styles.name}>{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(TabBar);
