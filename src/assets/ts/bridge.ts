// import bridge from '@/assets/js/bridge.js'; // 引入桥

/* eslint-disable */
import { isObject, urlencode } from '@/assets/ts/util';
import { isApp } from '@/assets/ts/env';

// 类型检查
function check(vms?: any, vmName?: any, data?: any) {
  if (vmName && !vms.hasOwnProperty(vmName)) { throw new Error('没有发现' + vmName); }
  if (data && !isObject(data)) { throw new Error(vmName + ': 传入的$data应为一个对象'); }
}

export default function(g: any) {
  if (!isApp) { return; }
  if (g.hasOwnProperty('bridge')) {
    throw new Error('bridge字段被占用');
  } else {
    if (!g.vms) { throw new Error('没有发现vms字段'); }
    const vms = g.vms;
    if (!isObject(vms)) { throw new Error('vms类型错误'); }

    g.bridge = {
      // 查看data
      getData(vmName: any, isStringify: any) {
        vmName = String(vmName);
        check(vms, vmName);
        const vm = vms[vmName];
        return isStringify ? JSON.stringify(vm.$data, null, 4)
          : Object.assign({}, vm.$data);
      },
      // 推送数据到组件
      pushData(vmName: any, data: any) {
        vmName = String(vmName);
        check(vms, vmName, data);
        const vm = vms[vmName];
        Object.assign(vm, data);
      },

       /**
        * App调用组件内的方法  
        * @param  {string} vmName       组件name
        * @param  {string} methodName    组件方法名
        * @param  {string} data          APP传过来的数据
        */
      callMethod(vmName: any, methodName: any, data: any) {
        const vm = vms[vmName];
        vm[methodName](data);
      },

    };
  }
}


function execute(url: string) {
  let iframe: any = document.createElement('IFRAME');
  iframe.setAttribute('src', url);
  document.documentElement.appendChild(iframe);
  iframe.parentNode.removeChild(iframe);
  iframe = null;
}

/* ======================================== 原生调用 ======================================== */

// 原生图片浏览
export function nativeBrowse(imgUrl: string) {
  if (!isApp) { return; }
  const temp = 'xcx://nativeBrowse/?imgUrl=' + imgUrl;
  execute(temp); console.log(temp); console.log('图片浏览: ', imgUrl);
}
// 跳转外链
export function nativeOpenBrowser(url: string) {
  if (!isApp) { return; }
  const temp = 'xcx://nativeOpenBrowser/?url=' + url;
  execute(temp); console.log(temp); console.log('跳转外链: ', url);
}



/* ======================================== 交互调用 ======================================== */
/**
 * @param viewName 视口名称
 * @param params   要传递的参数
 */
interface NativeGoArg {
  viewName: string;    
  params: object;  
}
export function nativeGo(parameter: NativeGoArg) {
  if (!isApp) { return; }
  console.log(parameter.params);
  let temp = null;
  if (parameter.params) {
    temp = 'xcx://nativeGo?' + parameter.viewName + '&' + urlencode(parameter.params, false);
  } else {
    temp = 'xcx://nativeGo?' + parameter.viewName;
  }
  execute(temp); console.log(temp); console.log('跳转: ', parameter.viewName, parameter.params);
}

