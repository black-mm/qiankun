import {initGlobalState } from 'qiankun';
// 初始化 state
const initialData = {
    name:'默认值' 
  };
const actions = initGlobalState(initialData);
export default actions