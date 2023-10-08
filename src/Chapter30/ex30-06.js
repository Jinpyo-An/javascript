// const now = Date.now();
//
// console.log(now);
//
// Date.parse("Jan 2, 1970 00:00:00 UTC");
// Date.parse("Jan 2, 1970 09:00:00");
// Date.parse("1970/01/02/09:00:00");
//
// Date.UTC(1970, 0, 2);
// Date.UTC("1970/1/2");
//
// new Date('2020/07/24').getFullYear();

// const today = new Date();
//
// today.setFullYear(2000);
// today.getFullYear();
//
// today.setFullYear(1900,0,1);
// today.getFullYear();
//
// new Date('2020/07/24').getMonth();

// const today = new Date();
//
// today.setMonth(0);
// today.getMonth();
//
// today.setMonth(11,1);
// today.getMonth();
//
// new Date('2020/07/24').getDate();

// const today = new Date();
//
// today.setDate(1);
// today.getDate();
//
// new Date('2020/07/24').getDay();
//
// new Date('2020/07/24/12:00').getHours();

// const today = new Date();
//
// today.setHours(7);
// today.getHours();
//
// today.setHours(0,0,0,0);
// today.getHours();
//
// new Date('2020/07/24/12:30').getMinutes();

// const today = new Date();
//
// today.setMinutes(50);
// today.getMinutes();
//
// today.setMinutes(5,10,999);
// today.getMinutes();

// const today = new Date();
//
// today.setSeconds(30);
// today.getSeconds();
//
// today.setSeconds(10,0);
// today.getSeconds();

// new Date('2020/07/24/12:30:10:150').getMilliseconds();
//
// const today = new Date();
//
// today.setMilliseconds(123);
// today.getMilliseconds();

// new Date('2020/07/24/12:30').getTime();
//
// const today = new Date();
//
// today.setTime(86400000);
// console.log(today);

// const today = new Date();
//
// today.getTimezoneOffset() / 60;

// const today = new Date('2020/07/24/12:30');
//
// today.toString();
// today.toDateString();

const today = new Date('2020/07/24/12:30');
today.toString();
today.toTimeString();

today.toISOString();

today.toISOString().slice(0,10);
today.toISOString().slice(0,10).replace(/-/g,'');

today.toLocaleString();
today.toLocaleString('ko-KR');
today.toLocaleString('en-US');
today.toLocaleString('ja-JP');

today.toLocaleTimeString();
today.toLocaleTimeString('ko-KR');
today.toLocaleTimeString('en-US');
today.toLocaleTimeString('ja-JP');


















