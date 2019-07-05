import React, { Component } from 'react';
import Tabbar from '../components/tabbar';
class Home extends Component {
  render() {
    return (
      <div>
        home
        {/* <Tabbar /> 组件形式这样引用 */}
      </div>
    );
  }
}
// 组件形式这样导出
// export default Home; 
export default Tabbar(Home);
