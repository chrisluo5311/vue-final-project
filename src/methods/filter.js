export function currency (num) {
  const n = parseInt(num, 10);
  return `${n.toFixed(0).replace(/./g, (c, i, a) => (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c))}`;
}

// 2023/8/30
export function date (time) {
  const localDate = new Date(time * 1000);
  return localDate.toLocaleDateString('zh-TW');
}

// 2021-05-27
export function formatTime(timestamp) {
  var date = new Date(timestamp * 1000);
  // 获取年份、月份和日期
  var year = date.getFullYear();
  var month = ('0' + (date.getMonth() + 1)).slice(-2);
  var day = ('0' + date.getDate()).slice(-2);
  // 返回格式化的日期字符串
  return (year + '-' + month + '-' + day);
}

export function toUnixStamp (date) {
  return (new Date(date)).getTime() / 1000;
}
