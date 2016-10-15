'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// /**数组的扩展**/


// let arrayLike = {
// 	'name':'smith',
// 	'age':'20',
// 	'like':'boy',
// 	'addr':'BJ hr',
// 	'0' : 'a' ,
// 	'1' : 'b' ,
// 	'2' : 'c' ,
// 	length:3
// }

// let personInfo = Array.from(arrayLike);
// console.log(personInfo)


// var a = [].slice.call(arrayLike);
// console.log(a);

// var f = (a) => { console.log(a);}

// f('箭头函数')

// function foo(a,vb,c) {
// 	var args = Array.from(arguments);
// 	console.log(args);
// }

// foo('1' , '2' , '3')


// var arr2 = Array.from(3);
// console.log(arr2);

// var arr3 = Array.from({length:4});
// console.log(arr3);


// var arr4 = ['11','22','33','44','55','66','77'];
// var arr5 = arr4.map(function(index, elem) {
// 	// console.log(index);
// 	// index*2;
// 	console.log(index*2)
// 	return index*2;
// })

// console.log(arr5);
// console.log(arr4);


// var arr6 = Array.from(['aa','bb','cc','dd'] ,function(item , index){
// 	console.log(item);
// 	return item+'cc'
// })

// console.log(arr6);


// var arr7 = Array.of(5);
// console.log(arr7);


/** Set的和Map的数据结构 **/

// var s = new Set();
// console.log(typeof s);

// var a = [1,2,3,4,5,6,7,7,4,3];

// for(let i =0, len = a.length ; i<len ;i++){
// 	s.add(a[i])
// }
// console.log(s);


// //add (value )

// var s = s.add('changyuntao');
// console.log(s);

// //delete()方法

// var isDelete = s.delete(1);
// console.log(isDelete);

// //has 判断是否具备该值
// var isOwn = s.has('changyuntao');
// console.log(isOwn);

// var clearAll = s.clear();
// console.log(s);


// /** 使用set方式可以清除数组当中重复的成员！**/

// var a = [1,2,3,2,3,4,5,'isClear'];

// function clearRepeatItem(array){
// 	return Array.from(new Set(array));
// }

// var a = clearRepeatItem(a);
// console.log(a);


// a.forEach(function(item ,index,arr){
// 	// console.log(item);
// 	// console.log(index);
// 	// console.log(arr);
// });

// a.map( function (item , index ,value) {
// 	// console.log(item);
// })


// var users = [
//   {name: "张含韵", "email": "zhang@email.com"},
//   {name: "江一燕",   "email": "jiang@email.com"},
//   {name: "李小璐",  "email": "li@email.com"}
// ];

// var emails = users.map(function (user) { return user.email; });

// console.log(emails);


// /**简单测试filter**/

// var filterArray = [2,3,4,5,6,7,8,9];
// var ff =filterArray.filter(function(index) {
// 	console.log(index)
// 	if(index>6){
// 		return index;
// 	}
// });
// console.log(ff);


// var someArr = [1,2,3,4,65,6,7,8];
// var sss = someArr.some(function(item){
// 	console.log(item);

// 	if(item>7){
// 		return item;
// 	}
// })

// console.log(sss);


/** 扩展运算符 **/

var a1 = [1, 2, 3, 4, 65, 67, 78, 8];
var a2 = [].concat(a1);
console.log(a2);

var a3 = [1, 2, 33, 4, 1, 2, 3, 33];
var a4 = [].concat(_toConsumableArray(new Set(a3)));
console.log(a4);

// var o =[{ name: "smith" }];
// var ws = new WeakSet();
// ws.add(o);
// console.log(ws);


var map = new Map([['name', '张三'], ['title', 'Author']]);

// console.log(map);

// var keys = map.keys();

// console.log(keys);

// var vals = map.values();

// console.log(vals);

// var entryies = map.entries();

// console.log(entryies);


map.forEach(function (item, index) {
	console.log(item);
	console.log(index);
});

var keys = [].concat(_toConsumableArray(map.keys()));
var vals = [].concat(_toConsumableArray(map.values()));

console.log(keys);
console.log(vals);

var s = new Map([['name', 'smith'], ['age', '20']]);
console.log(s);

/** 对象转换为map **/
var objToMap = function objToMap(obj) {
	var s = new Map();
	for (var k in obj) {
		s.set(k, obj[k]);
	}
	return s;
};

var userInfo = {
	name: "changyuntao",
	age: 26
};

var sss = objToMap(userInfo);
console.log(sss);
console.log(userInfo);

var s = new Map([['name', 'chang'], ['age', '20'], ['fdss']]);

console.log(s);

/** map转换为对象 **/

function mapToObj(strMap) {
	var obj = Object.create(null);
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = strMap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var _step$value = _slicedToArray(_step.value, 2);

			var k = _step$value[0];
			var v = _step$value[1];

			console.log(k);
			console.log(v);
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return obj;
}

var myMap = new Map().set('yes', true).set('no', false);
mapToObj(myMap);

var Arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 8];
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
	for (var _iterator2 = Arr10[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
		var value = _step2.value;

		console.log(value);
		// if(value === 3 ){
		// 	break;
		// }

		if (value % 2 === 0) {
			console.log("continue");
			continue;
		}
	}

	/** 传统的javaScript方法来定义构造函数，并且生成新的对象**/
} catch (err) {
	_didIteratorError2 = true;
	_iteratorError2 = err;
} finally {
	try {
		if (!_iteratorNormalCompletion2 && _iterator2.return) {
			_iterator2.return();
		}
	} finally {
		if (_didIteratorError2) {
			throw _iteratorError2;
		}
	}
}

function PersonInfo(uname, age) {
	this.uname = uname;
	this.age = age;
}
PersonInfo.prototype.getUserInfo = function () {
	console.log('我的名字是' + this.uname + '我的年龄是' + this.age);
};

var p1 = new PersonInfo('迈克尔', '30');
p1.getUserInfo();

/** 使用es6的class **/

var StartArr = function () {
	function StartArr(x, y) {
		_classCallCheck(this, StartArr);

		this.x = x;
		this.y = y;
	}

	_createClass(StartArr, [{
		key: 'toSay',
		value: function toSay() {
			console.log(this.x + this.y);
		}
	}]);

	return StartArr;
}();

var s1 = new StartArr('黄晓明', '卑鄙');
s1.toSay();

