import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
const tarbarArr = [
  {
    img: 'icon-home',
    text: '首页',
    link: '/home'
  },
  {
    img: 'icon-fenlei',
    text: '分类',
    link: '/category'
  },
  {
    img: 'icon-gouwucheman',
    text: '购物车',
    link: '/car'
  },
  {
    img: 'icon-mine-red',
    text: '我的',
    link: '/user'
  }
];
const Tabbar = WrappedComponent =>
  class Tabbar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        index: 0
      };
    }
    itemChange(idx) {
      this.setState({
        index: idx
      });
    }
    render() {
      // const { index } = this.state;
      const url = window.location.href;
      return (
        <div className="tabbar-container">
          <div className="tabbar-children">
            <WrappedComponent />
          </div>
          <div className="tabbar">
            <div className="tabbar-content">
              {tarbarArr.map((item, idx) => (
                <Link
                  to={item.link}
                  className={
                    'tarbar-item ' +
                    (url.indexOf(item.link) > -1 ? 'active' : '')
                  }
                  key={idx}
                >
                  <div className={'iconfont ' + item.img} />
                  <div className="">{item.text}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      );
    }
  };

export default Tabbar;
