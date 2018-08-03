// 用ts,这些基本用不到的

export function type(Anything: any) {
  const toString = Object.prototype.toString;
  return toString.call(Anything).slice(8, -1);
}
export function isNumber(Anything: any) { //NaN 也是==Number
  return !isNaN(Anything) && type(Anything) === 'Number';
}
export function isBoolean(Anything: any) {
  return type(Anything) === 'Boolea';
}
export function isDate(Anything: any) {
  return type(Anything) === 'Date';
}
export function isSymbol(Anything: any) {
  return type(Anything) === 'Symbol';
}
// 引用类型
export function isFunction(Anything: any) {
  return type(Anything) === 'Function';
}
export function isObject(Anything: any) {
  return type(Anything) === 'Object';
}
export function isArray(Anything: any) {
  return type(Anything) === 'Array' && Array.isArray(Anything);
}
export function isString(Anything: any) {
  return type(Anything) === 'String';
}
// isNaN 系统自带
export function isUndefined(Anything: any) {
  return type(Anything) === 'Undefined';
}
export function isNull(Anything: any) {
  return type(Anything) === 'Null';
}
export function isRegexp(Anything: any) {
  return type(Anything) === 'RegExp';
}

export function isPrimitive(value: any) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  );
}

export function removeArrValue(arr: any, item: any) {
  if (arr.length) {
    const index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}

export function toArray(obj: any) {
  const arr = [];
  for (const i of Object.keys(obj)) {
    arr.push(obj[i]);
  }
  return arr;
}

export function looseEqual(a: any, b: any): any {
  if (a === b) { return true; }
  const isObjectA = isObject(a);
  const isObjectB = isObject(b);
  const isArrayA = isArray(a);
  const isArrayB = isArray(b);
  const isPrimitiveA = isPrimitive(a);
  const isPrimitiveB = isPrimitive(b);
  try {
    if (isObjectA && isObjectB) {
      const keysA = Object.keys(a);
      const keysB = Object.keys(b);
      return keysA.length === keysB.length && keysA.every((key) => {
        return looseEqual(a[key], b[key]);
      });
    } else if (isArrayA && isArrayB) {
      return a.length === b.length && a.every((e: any, i: any) => {
        return looseEqual(e, b[i]);
      });
    } else if (!isPrimitiveA && !isPrimitiveB) {
      return String(a) === String(b);
    } else {
      return false;
    }
  } catch (e) {
    console.log(e);
    return false;
  }
}

export function looseIndexOf(arr: any, val: any) {
  for (let i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i; }
  }
  return -1;
}

export function urlencode(data: any, hasWhat = true) {
  const result: any = [];
  for (const key of Object.keys(data)) {
    const value = data[key];
    if (value.constructor === Array) {
      value.forEach(function(value: any) {
        result.push(key + '=' + value);
      });
    } else {
      result.push(key + '=' + value);
    }
  }
  return hasWhat ? '?' + result.join('&') : result.join('&');
}

/** 
 * param 将要转为URL参数字符串的对象 
 * key URL参数字符串的前缀 
 * encode true/false 是否进行URL编码,默认为true 
 */
export function urlEncodeX(param: any, key: string, encode = true) {
  if (param === null) { return ''; }
  let paramStr = '';
  const t = typeof (param);
  if (t === 'string' || t === 'number' || t === 'boolean') {
    paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param);
  } else {
    for (const i of Object.keys(param)) {
      const k = key === null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
      paramStr += urlEncodeX(param[i], k, encode);
    }
    if (paramStr[0] === "&") { paramStr = paramStr.slice(1); }
  }
  return paramStr;
}
