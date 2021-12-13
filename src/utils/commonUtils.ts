//获取随机字符串
const randomString = (e: number) => {
  e = e || 32;
  const t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
  const a = t.length;
  let n = "";
  let i;
  for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n;
};

//获取url参数
const getParams = (url: string) => {
  const params: any = {};
  const search = `?${url.split("?")[1]}`;
  if (search.indexOf("?") === 0 && search.indexOf("=") > 1) {
    const paramArray = unescape(search)
      .substring(1, search.length)
      .split("&");
    if (paramArray.length > 0) {
      paramArray.forEach((currentValue) => {
        params[currentValue.split("=")[0]] = currentValue.split("=")[1];
      });
    }
  }
  return params;
}

//格式化银行卡号
const replaceCardType = (value: string) => {
  return value.replace(/(\d{4})(?=\d)/g, "$1 ");
}

export { randomString, getParams, replaceCardType }