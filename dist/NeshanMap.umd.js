(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["NeshanMap"] = factory(require("vue"));
	else
		root["NeshanMap"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__7203__) {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 1794:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
}); // runtime helper for setting properties on components
// in a tree-shakable way

exports.Z = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;

  for (const [key, val] of props) {
    target[key] = val;
  }

  return target;
};

/***/ }),

/***/ 9662:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(614);
var tryToString = __webpack_require__(6330);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ 1223:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5112);
var create = __webpack_require__(30);
var defineProperty = (__webpack_require__(3070).f);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ 9670:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(111);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ 1318:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(5656);
var toAbsoluteIndex = __webpack_require__(1400);
var lengthOfArrayLike = __webpack_require__(6244);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 4326:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ 9920:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hasOwn = __webpack_require__(2597);
var ownKeys = __webpack_require__(3887);
var getOwnPropertyDescriptorModule = __webpack_require__(1236);
var definePropertyModule = __webpack_require__(3070);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ 8880:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var definePropertyModule = __webpack_require__(3070);
var createPropertyDescriptor = __webpack_require__(9114);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 9114:
/***/ (function(module) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 8052:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(614);
var definePropertyModule = __webpack_require__(3070);
var makeBuiltIn = __webpack_require__(6339);
var defineGlobalProperty = __webpack_require__(3072);

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    if (!options.unsafe) delete O[key];
    else if (O[key]) simple = true;
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ 3072:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);

// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ 9781:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ 317:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isObject = __webpack_require__(111);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 8113:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(5005);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ 7392:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var userAgent = __webpack_require__(8113);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ 748:
/***/ (function(module) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 2109:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var getOwnPropertyDescriptor = (__webpack_require__(1236).f);
var createNonEnumerableProperty = __webpack_require__(8880);
var defineBuiltIn = __webpack_require__(8052);
var defineGlobalProperty = __webpack_require__(3072);
var copyConstructorProperties = __webpack_require__(9920);
var isForced = __webpack_require__(4705);

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ 7293:
/***/ (function(module) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 4374:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);

module.exports = !fails(function () {
  // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ 6916:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(4374);

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ 6530:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var hasOwn = __webpack_require__(2597);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ 1702:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(4374);

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var uncurryThis = NATIVE_BIND && bind.bind(call, call);

module.exports = NATIVE_BIND ? function (fn) {
  return fn && uncurryThis(fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ 5005:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isCallable = __webpack_require__(614);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ 8173:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var aCallable = __webpack_require__(9662);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),

/***/ 7854:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es-x/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ 2597:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var toObject = __webpack_require__(7908);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es-x/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ 3501:
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ 490:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(5005);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ 4664:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var fails = __webpack_require__(7293);
var createElement = __webpack_require__(317);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ 8361:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var fails = __webpack_require__(7293);
var classof = __webpack_require__(4326);

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ 2788:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var isCallable = __webpack_require__(614);
var store = __webpack_require__(5465);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 9909:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(8536);
var global = __webpack_require__(7854);
var uncurryThis = __webpack_require__(1702);
var isObject = __webpack_require__(111);
var createNonEnumerableProperty = __webpack_require__(8880);
var hasOwn = __webpack_require__(2597);
var shared = __webpack_require__(5465);
var sharedKey = __webpack_require__(6200);
var hiddenKeys = __webpack_require__(3501);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 614:
/***/ (function(module) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ 4705:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);
var isCallable = __webpack_require__(614);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 111:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(614);

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ 1913:
/***/ (function(module) {

module.exports = false;


/***/ }),

/***/ 2190:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(5005);
var isCallable = __webpack_require__(614);
var isPrototypeOf = __webpack_require__(7976);
var USE_SYMBOL_AS_UID = __webpack_require__(3307);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ 6244:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toLength = __webpack_require__(7466);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ 6339:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);
var isCallable = __webpack_require__(614);
var hasOwn = __webpack_require__(2597);
var DESCRIPTORS = __webpack_require__(9781);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(6530).CONFIGURABLE);
var inspectSource = __webpack_require__(2788);
var InternalStateModule = __webpack_require__(9909);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (String(name).slice(0, 7) === 'Symbol(') {
    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    defineProperty(value, 'name', { value: name, configurable: true });
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ 4758:
/***/ (function(module) {

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es-x/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ 133:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es-x/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(7392);
var fails = __webpack_require__(7293);

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ 8536:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isCallable = __webpack_require__(614);
var inspectSource = __webpack_require__(2788);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ 30:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(9670);
var definePropertiesModule = __webpack_require__(6048);
var enumBugKeys = __webpack_require__(748);
var hiddenKeys = __webpack_require__(3501);
var html = __webpack_require__(490);
var documentCreateElement = __webpack_require__(317);
var sharedKey = __webpack_require__(6200);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es-x/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ 6048:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(3353);
var definePropertyModule = __webpack_require__(3070);
var anObject = __webpack_require__(9670);
var toIndexedObject = __webpack_require__(5656);
var objectKeys = __webpack_require__(1956);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es-x/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ 3070:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var IE8_DOM_DEFINE = __webpack_require__(4664);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(3353);
var anObject = __webpack_require__(9670);
var toPropertyKey = __webpack_require__(4948);

var $TypeError = TypeError;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 1236:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var call = __webpack_require__(6916);
var propertyIsEnumerableModule = __webpack_require__(5296);
var createPropertyDescriptor = __webpack_require__(9114);
var toIndexedObject = __webpack_require__(5656);
var toPropertyKey = __webpack_require__(4948);
var hasOwn = __webpack_require__(2597);
var IE8_DOM_DEFINE = __webpack_require__(4664);

// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ 8006:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(6324);
var enumBugKeys = __webpack_require__(748);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 5181:
/***/ (function(__unused_webpack_module, exports) {

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 7976:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ 6324:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var hasOwn = __webpack_require__(2597);
var toIndexedObject = __webpack_require__(5656);
var indexOf = (__webpack_require__(1318).indexOf);
var hiddenKeys = __webpack_require__(3501);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ 1956:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(6324);
var enumBugKeys = __webpack_require__(748);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es-x/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ 5296:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ 2140:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__(6916);
var isCallable = __webpack_require__(614);
var isObject = __webpack_require__(111);

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 3887:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(5005);
var uncurryThis = __webpack_require__(1702);
var getOwnPropertyNamesModule = __webpack_require__(8006);
var getOwnPropertySymbolsModule = __webpack_require__(5181);
var anObject = __webpack_require__(9670);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 4488:
/***/ (function(module) {

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 6200:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var shared = __webpack_require__(2309);
var uid = __webpack_require__(9711);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 5465:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var defineGlobalProperty = __webpack_require__(3072);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;


/***/ }),

/***/ 2309:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var IS_PURE = __webpack_require__(1913);
var store = __webpack_require__(5465);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.23.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.23.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ 1400:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(9303);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 5656:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(8361);
var requireObjectCoercible = __webpack_require__(4488);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 9303:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var trunc = __webpack_require__(4758);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ 7466:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(9303);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 7908:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(4488);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 7593:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__(6916);
var isObject = __webpack_require__(111);
var isSymbol = __webpack_require__(2190);
var getMethod = __webpack_require__(8173);
var ordinaryToPrimitive = __webpack_require__(2140);
var wellKnownSymbol = __webpack_require__(5112);

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ 4948:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toPrimitive = __webpack_require__(7593);
var isSymbol = __webpack_require__(2190);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ 6330:
/***/ (function(module) {

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ 9711:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ 3307:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es-x/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(133);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 3353:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var fails = __webpack_require__(7293);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ 5112:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var shared = __webpack_require__(2309);
var hasOwn = __webpack_require__(2597);
var uid = __webpack_require__(9711);
var NATIVE_SYMBOL = __webpack_require__(133);
var USE_SYMBOL_AS_UID = __webpack_require__(3307);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 6699:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var $includes = (__webpack_require__(1318).includes);
var fails = __webpack_require__(7293);
var addToUnscopables = __webpack_require__(1223);

// FF99+ bug
var BROKEN_ON_SPARSE = fails(function () {
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ 7203:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__7203__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(6699);
// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(7203);
;// CONCATENATED MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */
function makeMap(str, expectsLowerCase) {
  const map = Object.create(null);
  const list = str.split(',');

  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }

  return expectsLowerCase ? val => !!map[val.toLowerCase()] : val => !!map[val];
}
/**
 * dev only flag -> name mapping
 */


const PatchFlagNames = {
  [1
  /* TEXT */
  ]: `TEXT`,
  [2
  /* CLASS */
  ]: `CLASS`,
  [4
  /* STYLE */
  ]: `STYLE`,
  [8
  /* PROPS */
  ]: `PROPS`,
  [16
  /* FULL_PROPS */
  ]: `FULL_PROPS`,
  [32
  /* HYDRATE_EVENTS */
  ]: `HYDRATE_EVENTS`,
  [64
  /* STABLE_FRAGMENT */
  ]: `STABLE_FRAGMENT`,
  [128
  /* KEYED_FRAGMENT */
  ]: `KEYED_FRAGMENT`,
  [256
  /* UNKEYED_FRAGMENT */
  ]: `UNKEYED_FRAGMENT`,
  [512
  /* NEED_PATCH */
  ]: `NEED_PATCH`,
  [1024
  /* DYNAMIC_SLOTS */
  ]: `DYNAMIC_SLOTS`,
  [2048
  /* DEV_ROOT_FRAGMENT */
  ]: `DEV_ROOT_FRAGMENT`,
  [-1
  /* HOISTED */
  ]: `HOISTED`,
  [-2
  /* BAIL */
  ]: `BAIL`
};
/**
 * Dev only
 */

const slotFlagsText = {
  [1
  /* STABLE */
  ]: 'STABLE',
  [2
  /* DYNAMIC */
  ]: 'DYNAMIC',
  [3
  /* FORWARDED */
  ]: 'FORWARDED'
};
const GLOBALS_WHITE_LISTED = (/* unused pure expression or super */ null && ('Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,' + 'decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,' + 'Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt'));
const isGloballyWhitelisted = /*#__PURE__*/(/* unused pure expression or super */ null && (makeMap(GLOBALS_WHITE_LISTED)));
const range = 2;

function generateCodeFrame(source, start = 0, end = source.length) {
  // Split the content into individual lines but capture the newline sequence
  // that separated each line. This is important because the actual sequence is
  // needed to properly take into account the full line length for offset
  // comparison
  let lines = source.split(/(\r?\n)/); // Separate the lines and newline sequences into separate arrays for easier referencing

  const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
  lines = lines.filter((_, idx) => idx % 2 === 0);
  let count = 0;
  const res = [];

  for (let i = 0; i < lines.length; i++) {
    count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);

    if (count >= start) {
      for (let j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) continue;
        const line = j + 1;
        res.push(`${line}${' '.repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
        const lineLength = lines[j].length;
        const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;

        if (j === i) {
          // push underline
          const pad = start - (count - (lineLength + newLineSeqLength));
          const length = Math.max(1, end > count ? lineLength - pad : end - start);
          res.push(`   |  ` + ' '.repeat(pad) + '^'.repeat(length));
        } else if (j > i) {
          if (end > count) {
            const length = Math.max(Math.min(end - count, lineLength), 1);
            res.push(`   |  ` + '^'.repeat(length));
          }

          count += lineLength + newLineSeqLength;
        }
      }

      break;
    }
  }

  return res.join('\n');
}
/**
 * On the client we only need to offer special cases for boolean attributes that
 * have different names from their corresponding dom properties:
 * - itemscope -> N/A
 * - allowfullscreen -> allowFullscreen
 * - formnovalidate -> formNoValidate
 * - ismap -> isMap
 * - nomodule -> noModule
 * - novalidate -> noValidate
 * - readonly -> readOnly
 */


const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /*#__PURE__*/(/* unused pure expression or super */ null && (makeMap(specialBooleanAttrs)));
/**
 * The full list is needed during SSR to produce the correct initial markup.
 */

const isBooleanAttr = /*#__PURE__*/makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,` + `loop,open,required,reversed,scoped,seamless,` + `checked,muted,multiple,selected`);
/**
 * Boolean attributes should be included if the value is truthy or ''.
 * e.g. `<select multiple>` compiles to `{ multiple: '' }`
 */

function includeBooleanAttr(value) {
  return !!value || value === '';
}

const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};

function isSSRSafeAttrName(name) {
  if (attrValidationCache.hasOwnProperty(name)) {
    return attrValidationCache[name];
  }

  const isUnsafe = unsafeAttrCharRE.test(name);

  if (isUnsafe) {
    console.error(`unsafe attribute name: ${name}`);
  }

  return attrValidationCache[name] = !isUnsafe;
}

const propsToAttrMap = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv'
};
/**
 * CSS properties that accept plain numbers
 */

const isNoUnitNumericStyleProp = /*#__PURE__*/(/* unused pure expression or super */ null && (makeMap(`animation-iteration-count,border-image-outset,border-image-slice,` + `border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,` + `columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,` + `grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,` + `grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,` + `line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,` + // SVG
`fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,` + `stroke-miterlimit,stroke-opacity,stroke-width`)));
/**
 * Known attributes, this is used for stringification of runtime static nodes
 * so that we don't stringify bindings that cannot be set from HTML.
 * Don't also forget to allow `data-*` and `aria-*`!
 * Generated from https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 */

const isKnownHtmlAttr = /*#__PURE__*/(/* unused pure expression or super */ null && (makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,` + `autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,` + `border,buffered,capture,challenge,charset,checked,cite,class,code,` + `codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,` + `coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,` + `disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,` + `formaction,formenctype,formmethod,formnovalidate,formtarget,headers,` + `height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,` + `ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,` + `manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,` + `open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,` + `referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,` + `selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,` + `start,step,style,summary,tabindex,target,title,translate,type,usemap,` + `value,width,wrap`)));
/**
 * Generated from https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute
 */

const isKnownSvgAttr = /*#__PURE__*/(/* unused pure expression or super */ null && (makeMap(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,` + `arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,` + `baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,` + `clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,` + `color-interpolation-filters,color-profile,color-rendering,` + `contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,` + `descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,` + `dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,` + `fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,` + `font-family,font-size,font-size-adjust,font-stretch,font-style,` + `font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,` + `glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,` + `gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,` + `horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,` + `k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,` + `lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,` + `marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,` + `mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,` + `name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,` + `overflow,overline-position,overline-thickness,panose-1,paint-order,path,` + `pathLength,patternContentUnits,patternTransform,patternUnits,ping,` + `pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,` + `preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,` + `rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,` + `restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,` + `specularConstant,specularExponent,speed,spreadMethod,startOffset,` + `stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,` + `strikethrough-position,strikethrough-thickness,string,stroke,` + `stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,` + `stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,` + `systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,` + `text-decoration,text-rendering,textLength,to,transform,transform-origin,` + `type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,` + `unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,` + `v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,` + `vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,` + `writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,` + `xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,` + `xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`)));

function normalizeStyle(value) {
  if (shared_esm_bundler_isArray(value)) {
    const res = {};

    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);

      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }

    return res;
  } else if (isString(value)) {
    return value;
  } else if (isObject(value)) {
    return value;
  }
}

const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;

function parseStringStyle(cssText) {
  const ret = {};
  cssText.split(listDelimiterRE).forEach(item => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}

function stringifyStyle(styles) {
  let ret = '';

  if (!styles || isString(styles)) {
    return ret;
  }

  for (const key in styles) {
    const value = styles[key];
    const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);

    if (isString(value) || typeof value === 'number' && isNoUnitNumericStyleProp(normalizedKey)) {
      // only render valid values
      ret += `${normalizedKey}:${value};`;
    }
  }

  return ret;
}

function normalizeClass(value) {
  let res = '';

  if (isString(value)) {
    res = value;
  } else if (shared_esm_bundler_isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);

      if (normalized) {
        res += normalized + ' ';
      }
    }
  } else if (isObject(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + ' ';
      }
    }
  }

  return res.trim();
}

function normalizeProps(props) {
  if (!props) return null;
  let {
    class: klass,
    style
  } = props;

  if (klass && !isString(klass)) {
    props.class = normalizeClass(klass);
  }

  if (style) {
    props.style = normalizeStyle(style);
  }

  return props;
} // These tag configs are shared between compiler-dom and runtime-dom, so they
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element


const HTML_TAGS = (/* unused pure expression or super */ null && ('html,body,base,head,link,meta,style,title,address,article,aside,footer,' + 'header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,' + 'figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,' + 'data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,' + 'time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,' + 'canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,' + 'th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,' + 'option,output,progress,select,textarea,details,dialog,menu,' + 'summary,template,blockquote,iframe,tfoot')); // https://developer.mozilla.org/en-US/docs/Web/SVG/Element

const SVG_TAGS = (/* unused pure expression or super */ null && ('svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,' + 'defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,' + 'feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,' + 'feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,' + 'feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,' + 'fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,' + 'foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,' + 'mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,' + 'polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,' + 'text,textPath,title,tspan,unknown,use,view'));
const VOID_TAGS = 'area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr';
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */

const isHTMLTag = /*#__PURE__*/(/* unused pure expression or super */ null && (makeMap(HTML_TAGS)));
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */

const isSVGTag = /*#__PURE__*/(/* unused pure expression or super */ null && (makeMap(SVG_TAGS)));
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */

const isVoidTag = /*#__PURE__*/(/* unused pure expression or super */ null && (makeMap(VOID_TAGS)));
const escapeRE = /["'&<>]/;

function escapeHtml(string) {
  const str = '' + string;
  const match = escapeRE.exec(str);

  if (!match) {
    return str;
  }

  let html = '';
  let escaped;
  let index;
  let lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        // "
        escaped = '&quot;';
        break;

      case 38:
        // &
        escaped = '&amp;';
        break;

      case 39:
        // '
        escaped = '&#39;';
        break;

      case 60:
        // <
        escaped = '&lt;';
        break;

      case 62:
        // >
        escaped = '&gt;';
        break;

      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.slice(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escaped;
  }

  return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
} // https://www.w3.org/TR/html52/syntax.html#comments


const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;

function escapeHtmlComment(src) {
  return src.replace(commentStripRE, '');
}

function looseCompareArrays(a, b) {
  if (a.length !== b.length) return false;
  let equal = true;

  for (let i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }

  return equal;
}

function looseEqual(a, b) {
  if (a === b) return true;
  let aValidType = isDate(a);
  let bValidType = isDate(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }

  aValidType = isSymbol(a);
  bValidType = isSymbol(b);

  if (aValidType || bValidType) {
    return a === b;
  }

  aValidType = shared_esm_bundler_isArray(a);
  bValidType = shared_esm_bundler_isArray(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b) : false;
  }

  aValidType = isObject(a);
  bValidType = isObject(b);

  if (aValidType || bValidType) {
    /* istanbul ignore if: this if will probably never be called */
    if (!aValidType || !bValidType) {
      return false;
    }

    const aKeysCount = Object.keys(a).length;
    const bKeysCount = Object.keys(b).length;

    if (aKeysCount !== bKeysCount) {
      return false;
    }

    for (const key in a) {
      const aHasKey = a.hasOwnProperty(key);
      const bHasKey = b.hasOwnProperty(key);

      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }

  return String(a) === String(b);
}

function looseIndexOf(arr, val) {
  return arr.findIndex(item => looseEqual(item, val));
}
/**
 * For converting {{ interpolation }} values to displayed strings.
 * @private
 */


const toDisplayString = val => {
  return isString(val) ? val : val == null ? '' : shared_esm_bundler_isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};

const replacer = (_key, val) => {
  // can't use isRef here since @vue/shared has no deps
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val]) => {
        entries[`${key} =>`] = val;
        return entries;
      }, {})
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()]
    };
  } else if (isObject(val) && !shared_esm_bundler_isArray(val) && !isPlainObject(val)) {
    return String(val);
  }

  return val;
};

const EMPTY_OBJ =  false ? 0 : {};
const EMPTY_ARR =  false ? 0 : [];

const NOOP = () => {};
/**
 * Always return false.
 */


const NO = () => false;

const onRE = /^on[^a-z]/;

const isOn = key => onRE.test(key);

const isModelListener = key => key.startsWith('onUpdate:');

const shared_esm_bundler_extend = Object.assign;

const remove = (arr, el) => {
  const i = arr.indexOf(el);

  if (i > -1) {
    arr.splice(i, 1);
  }
};

const shared_esm_bundler_hasOwnProperty = Object.prototype.hasOwnProperty;

const hasOwn = (val, key) => shared_esm_bundler_hasOwnProperty.call(val, key);

const shared_esm_bundler_isArray = Array.isArray;

const isMap = val => toTypeString(val) === '[object Map]';

const isSet = val => toTypeString(val) === '[object Set]';

const isDate = val => toTypeString(val) === '[object Date]';

const isFunction = val => typeof val === 'function';

const isString = val => typeof val === 'string';

const isSymbol = val => typeof val === 'symbol';

const isObject = val => val !== null && typeof val === 'object';

const isPromise = val => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};

const objectToString = Object.prototype.toString;

const toTypeString = value => objectToString.call(value);

const shared_esm_bundler_toRawType = value => {
  // extract "RawType" from strings like "[object RawType]"
  return toTypeString(value).slice(8, -1);
};

const isPlainObject = val => toTypeString(val) === '[object Object]';

const isIntegerKey = key => isString(key) && key !== 'NaN' && key[0] !== '-' && '' + parseInt(key, 10) === key;

const isReservedProp = /*#__PURE__*/(/* unused pure expression or super */ null && (makeMap( // the leading comma is intentional so empty string "" is also included
',key,ref,ref_for,ref_key,' + 'onVnodeBeforeMount,onVnodeMounted,' + 'onVnodeBeforeUpdate,onVnodeUpdated,' + 'onVnodeBeforeUnmount,onVnodeUnmounted')));
const isBuiltInDirective = /*#__PURE__*/(/* unused pure expression or super */ null && (makeMap('bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo')));

const cacheStringFunction = fn => {
  const cache = Object.create(null);
  return str => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};

const camelizeRE = /-(\w)/g;
/**
 * @private
 */

const camelize = cacheStringFunction(str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '');
});
const hyphenateRE = /\B([A-Z])/g;
/**
 * @private
 */

const hyphenate = cacheStringFunction(str => str.replace(hyphenateRE, '-$1').toLowerCase());
/**
 * @private
 */

const capitalize = cacheStringFunction(str => str.charAt(0).toUpperCase() + str.slice(1));
/**
 * @private
 */

const toHandlerKey = cacheStringFunction(str => str ? `on${capitalize(str)}` : ``); // compare whether a value has changed, accounting for NaN.

const shared_esm_bundler_hasChanged = (value, oldValue) => !Object.is(value, oldValue);

const invokeArrayFns = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};

const shared_esm_bundler_def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};

const toNumber = val => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};

let _globalThis;

const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : {});
};

const identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;

function genPropsAccessExp(name) {
  return identRE.test(name) ? `__props.${name}` : `__props[${JSON.stringify(name)}]`;
}


;// CONCATENATED MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js


function warn(msg, ...args) {
  console.warn(`[Vue warn] ${msg}`, ...args);
}

let activeEffectScope;

class EffectScope {
  constructor(detached = false) {
    /**
     * @internal
     */
    this.active = true;
    /**
     * @internal
     */

    this.effects = [];
    /**
     * @internal
     */

    this.cleanups = [];

    if (!detached && activeEffectScope) {
      this.parent = activeEffectScope;
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
    }
  }

  run(fn) {
    if (this.active) {
      const currentEffectScope = activeEffectScope;

      try {
        activeEffectScope = this;
        return fn();
      } finally {
        activeEffectScope = currentEffectScope;
      }
    } else if (false) {}
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */


  on() {
    activeEffectScope = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */


  off() {
    activeEffectScope = this.parent;
  }

  stop(fromParent) {
    if (this.active) {
      let i, l;

      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].stop();
      }

      for (i = 0, l = this.cleanups.length; i < l; i++) {
        this.cleanups[i]();
      }

      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].stop(true);
        }
      } // nested scope, dereference from parent to avoid memory leaks


      if (this.parent && !fromParent) {
        // optimized O(1) removal
        const last = this.parent.scopes.pop();

        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }

      this.active = false;
    }
  }

}

function effectScope(detached) {
  return new EffectScope(detached);
}

function recordEffectScope(effect, scope = activeEffectScope) {
  if (scope && scope.active) {
    scope.effects.push(effect);
  }
}

function getCurrentScope() {
  return activeEffectScope;
}

function onScopeDispose(fn) {
  if (activeEffectScope) {
    activeEffectScope.cleanups.push(fn);
  } else if (false) {}
}

const createDep = effects => {
  const dep = new Set(effects);
  dep.w = 0;
  dep.n = 0;
  return dep;
};

const wasTracked = dep => (dep.w & trackOpBit) > 0;

const newTracked = dep => (dep.n & trackOpBit) > 0;

const initDepMarkers = ({
  deps
}) => {
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].w |= trackOpBit; // set was tracked
    }
  }
};

const finalizeDepMarkers = effect => {
  const {
    deps
  } = effect;

  if (deps.length) {
    let ptr = 0;

    for (let i = 0; i < deps.length; i++) {
      const dep = deps[i];

      if (wasTracked(dep) && !newTracked(dep)) {
        dep.delete(effect);
      } else {
        deps[ptr++] = dep;
      } // clear bits


      dep.w &= ~trackOpBit;
      dep.n &= ~trackOpBit;
    }

    deps.length = ptr;
  }
};

const targetMap = new WeakMap(); // The number of effects currently being tracked recursively.

let effectTrackDepth = 0;
let trackOpBit = 1;
/**
 * The bitwise track markers support at most 30 levels of recursion.
 * This value is chosen to enable modern JS engines to use a SMI on all platforms.
 * When recursion depth is greater, fall back to using a full cleanup.
 */

const maxMarkerBits = 30;
let activeEffect;
const ITERATE_KEY = Symbol( false ? 0 : '');
const MAP_KEY_ITERATE_KEY = Symbol( false ? 0 : '');

class ReactiveEffect {
  constructor(fn, scheduler = null, scope) {
    this.fn = fn;
    this.scheduler = scheduler;
    this.active = true;
    this.deps = [];
    this.parent = undefined;
    recordEffectScope(this, scope);
  }

  run() {
    if (!this.active) {
      return this.fn();
    }

    let parent = activeEffect;
    let lastShouldTrack = shouldTrack;

    while (parent) {
      if (parent === this) {
        return;
      }

      parent = parent.parent;
    }

    try {
      this.parent = activeEffect;
      activeEffect = this;
      shouldTrack = true;
      trackOpBit = 1 << ++effectTrackDepth;

      if (effectTrackDepth <= maxMarkerBits) {
        initDepMarkers(this);
      } else {
        cleanupEffect(this);
      }

      return this.fn();
    } finally {
      if (effectTrackDepth <= maxMarkerBits) {
        finalizeDepMarkers(this);
      }

      trackOpBit = 1 << --effectTrackDepth;
      activeEffect = this.parent;
      shouldTrack = lastShouldTrack;
      this.parent = undefined;

      if (this.deferStop) {
        this.stop();
      }
    }
  }

  stop() {
    // stopped while running itself - defer the cleanup
    if (activeEffect === this) {
      this.deferStop = true;
    } else if (this.active) {
      cleanupEffect(this);

      if (this.onStop) {
        this.onStop();
      }

      this.active = false;
    }
  }

}

function cleanupEffect(effect) {
  const {
    deps
  } = effect;

  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].delete(effect);
    }

    deps.length = 0;
  }
}

function effect(fn, options) {
  if (fn.effect) {
    fn = fn.effect.fn;
  }

  const _effect = new ReactiveEffect(fn);

  if (options) {
    extend(_effect, options);
    if (options.scope) recordEffectScope(_effect, options.scope);
  }

  if (!options || !options.lazy) {
    _effect.run();
  }

  const runner = _effect.run.bind(_effect);

  runner.effect = _effect;
  return runner;
}

function stop(runner) {
  runner.effect.stop();
}

let shouldTrack = true;
const trackStack = [];

function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}

function enableTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = true;
}

function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === undefined ? true : last;
}

function track(target, type, key) {
  if (shouldTrack && activeEffect) {
    let depsMap = targetMap.get(target);

    if (!depsMap) {
      targetMap.set(target, depsMap = new Map());
    }

    let dep = depsMap.get(key);

    if (!dep) {
      depsMap.set(key, dep = createDep());
    }

    const eventInfo =  false ? 0 : undefined;
    trackEffects(dep, eventInfo);
  }
}

function trackEffects(dep, debuggerEventExtraInfo) {
  let shouldTrack = false;

  if (effectTrackDepth <= maxMarkerBits) {
    if (!newTracked(dep)) {
      dep.n |= trackOpBit; // set newly tracked

      shouldTrack = !wasTracked(dep);
    }
  } else {
    // Full cleanup mode.
    shouldTrack = !dep.has(activeEffect);
  }

  if (shouldTrack) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);

    if (false) {}
  }
}

function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);

  if (!depsMap) {
    // never been tracked
    return;
  }

  let deps = [];

  if (type === "clear"
  /* CLEAR */
  ) {
    // collection being cleared
    // trigger all effects for target
    deps = [...depsMap.values()];
  } else if (key === 'length' && shared_esm_bundler_isArray(target)) {
    depsMap.forEach((dep, key) => {
      if (key === 'length' || key >= newValue) {
        deps.push(dep);
      }
    });
  } else {
    // schedule runs for SET | ADD | DELETE
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    } // also run for iteration key on ADD | DELETE | Map.SET


    switch (type) {
      case "add"
      /* ADD */
      :
        if (!shared_esm_bundler_isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));

          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          // new index added to array -> length changes
          deps.push(depsMap.get('length'));
        }

        break;

      case "delete"
      /* DELETE */
      :
        if (!shared_esm_bundler_isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));

          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }

        break;

      case "set"
      /* SET */
      :
        if (isMap(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }

        break;
    }
  }

  const eventInfo =  false ? 0 : undefined;

  if (deps.length === 1) {
    if (deps[0]) {
      if (false) {} else {
        triggerEffects(deps[0]);
      }
    }
  } else {
    const effects = [];

    for (const dep of deps) {
      if (dep) {
        effects.push(...dep);
      }
    }

    if (false) {} else {
      triggerEffects(createDep(effects));
    }
  }
}

function triggerEffects(dep, debuggerEventExtraInfo) {
  // spread into array for stabilization
  const effects = shared_esm_bundler_isArray(dep) ? dep : [...dep];

  for (const effect of effects) {
    if (effect.computed) {
      triggerEffect(effect, debuggerEventExtraInfo);
    }
  }

  for (const effect of effects) {
    if (!effect.computed) {
      triggerEffect(effect, debuggerEventExtraInfo);
    }
  }
}

function triggerEffect(effect, debuggerEventExtraInfo) {
  if (effect !== activeEffect || effect.allowRecurse) {
    if (false) {}

    if (effect.scheduler) {
      effect.scheduler();
    } else {
      effect.run();
    }
  }
}

const isNonTrackableKeys = /*#__PURE__*/makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set( /*#__PURE__*/Object.getOwnPropertyNames(Symbol) // ios10.x Object.getOwnPropertyNames(Symbol) can enumerate 'arguments' and 'caller'
// but accessing them on Symbol leads to TypeError because Symbol is a strict mode
// function
.filter(key => key !== 'arguments' && key !== 'caller').map(key => Symbol[key]).filter(isSymbol));
const get = /*#__PURE__*/createGetter();
const shallowGet = /*#__PURE__*/createGetter(false, true);
const readonlyGet = /*#__PURE__*/createGetter(true);
const shallowReadonlyGet = /*#__PURE__*/createGetter(true, true);
const arrayInstrumentations = /*#__PURE__*/createArrayInstrumentations();

function createArrayInstrumentations() {
  const instrumentations = {};
  ['includes', 'indexOf', 'lastIndexOf'].forEach(key => {
    instrumentations[key] = function (...args) {
      const arr = toRaw(this);

      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get"
        /* GET */
        , i + '');
      } // we run the method using the original args first (which may be reactive)


      const res = arr[key](...args);

      if (res === -1 || res === false) {
        // if that didn't work, run it again using raw values.
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(key => {
    instrumentations[key] = function (...args) {
      pauseTracking();
      const res = toRaw(this)[key].apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}

function createGetter(isReadonly = false, shallow = false) {
  return function get(target, key, receiver) {
    if (key === "__v_isReactive"
    /* IS_REACTIVE */
    ) {
      return !isReadonly;
    } else if (key === "__v_isReadonly"
    /* IS_READONLY */
    ) {
      return isReadonly;
    } else if (key === "__v_isShallow"
    /* IS_SHALLOW */
    ) {
      return shallow;
    } else if (key === "__v_raw"
    /* RAW */
    && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }

    const targetIsArray = shared_esm_bundler_isArray(target);

    if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver);
    }

    const res = Reflect.get(target, key, receiver);

    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }

    if (!isReadonly) {
      track(target, "get"
      /* GET */
      , key);
    }

    if (shallow) {
      return res;
    }

    if (isRef(res)) {
      // ref unwrapping - skip unwrap for Array + integer key.
      return targetIsArray && isIntegerKey(key) ? res : res.value;
    }

    if (isObject(res)) {
      // Convert returned value into a proxy as well. we do the isObject check
      // here to avoid invalid value warning. Also need to lazy access readonly
      // and reactive here to avoid circular dependency.
      return isReadonly ? readonly(res) : reactive(res);
    }

    return res;
  };
}

const set = /*#__PURE__*/createSetter();
const shallowSet = /*#__PURE__*/createSetter(true);

function createSetter(shallow = false) {
  return function set(target, key, value, receiver) {
    let oldValue = target[key];

    if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
      return false;
    }

    if (!shallow && !isReadonly(value)) {
      if (!isShallow(value)) {
        value = toRaw(value);
        oldValue = toRaw(oldValue);
      }

      if (!shared_esm_bundler_isArray(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }

    const hadKey = shared_esm_bundler_isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
    const result = Reflect.set(target, key, value, receiver); // don't trigger if target is something up in the prototype chain of original

    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add"
        /* ADD */
        , key, value);
      } else if (shared_esm_bundler_hasChanged(value, oldValue)) {
        trigger(target, "set"
        /* SET */
        , key, value, oldValue);
      }
    }

    return result;
  };
}

function deleteProperty(target, key) {
  const hadKey = hasOwn(target, key);
  const oldValue = target[key];
  const result = Reflect.deleteProperty(target, key);

  if (result && hadKey) {
    trigger(target, "delete"
    /* DELETE */
    , key, undefined, oldValue);
  }

  return result;
}

function has(target, key) {
  const result = Reflect.has(target, key);

  if (!isSymbol(key) || !builtInSymbols.has(key)) {
    track(target, "has"
    /* HAS */
    , key);
  }

  return result;
}

function ownKeys(target) {
  track(target, "iterate"
  /* ITERATE */
  , shared_esm_bundler_isArray(target) ? 'length' : ITERATE_KEY);
  return Reflect.ownKeys(target);
}

const mutableHandlers = {
  get,
  set,
  deleteProperty,
  has,
  ownKeys
};
const readonlyHandlers = {
  get: readonlyGet,

  set(target, key) {
    if (false) {}

    return true;
  },

  deleteProperty(target, key) {
    if (false) {}

    return true;
  }

};
const shallowReactiveHandlers = /*#__PURE__*/shared_esm_bundler_extend({}, mutableHandlers, {
  get: shallowGet,
  set: shallowSet
}); // Props handlers are special in the sense that it should not unwrap top-level
// refs (in order to allow refs to be explicitly passed down), but should
// retain the reactivity of the normal readonly object.

const shallowReadonlyHandlers = /*#__PURE__*/shared_esm_bundler_extend({}, readonlyHandlers, {
  get: shallowReadonlyGet
});

const toShallow = value => value;

const getProto = v => Reflect.getPrototypeOf(v);

function get$1(target, key, isReadonly = false, isShallow = false) {
  // #1772: readonly(reactive(Map)) should return readonly + reactive version
  // of the value
  target = target["__v_raw"
  /* RAW */
  ];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);

  if (!isReadonly) {
    if (key !== rawKey) {
      track(rawTarget, "get"
      /* GET */
      , key);
    }

    track(rawTarget, "get"
    /* GET */
    , rawKey);
  }

  const {
    has
  } = getProto(rawTarget);
  const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;

  if (has.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    // #3602 readonly(reactive(Map))
    // ensure that the nested reactive `Map` can do tracking for itself
    target.get(key);
  }
}

function has$1(key, isReadonly = false) {
  const target = this["__v_raw"
  /* RAW */
  ];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);

  if (!isReadonly) {
    if (key !== rawKey) {
      track(rawTarget, "has"
      /* HAS */
      , key);
    }

    track(rawTarget, "has"
    /* HAS */
    , rawKey);
  }

  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}

function size(target, isReadonly = false) {
  target = target["__v_raw"
  /* RAW */
  ];
  !isReadonly && track(toRaw(target), "iterate"
  /* ITERATE */
  , ITERATE_KEY);
  return Reflect.get(target, 'size', target);
}

function add(value) {
  value = toRaw(value);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value);

  if (!hadKey) {
    target.add(value);
    trigger(target, "add"
    /* ADD */
    , value, value);
  }

  return this;
}

function set$1(key, value) {
  value = toRaw(value);
  const target = toRaw(this);
  const {
    has,
    get
  } = getProto(target);
  let hadKey = has.call(target, key);

  if (!hadKey) {
    key = toRaw(key);
    hadKey = has.call(target, key);
  } else if (false) {}

  const oldValue = get.call(target, key);
  target.set(key, value);

  if (!hadKey) {
    trigger(target, "add"
    /* ADD */
    , key, value);
  } else if (shared_esm_bundler_hasChanged(value, oldValue)) {
    trigger(target, "set"
    /* SET */
    , key, value, oldValue);
  }

  return this;
}

function deleteEntry(key) {
  const target = toRaw(this);
  const {
    has,
    get
  } = getProto(target);
  let hadKey = has.call(target, key);

  if (!hadKey) {
    key = toRaw(key);
    hadKey = has.call(target, key);
  } else if (false) {}

  const oldValue = get ? get.call(target, key) : undefined; // forward the operation before queueing reactions

  const result = target.delete(key);

  if (hadKey) {
    trigger(target, "delete"
    /* DELETE */
    , key, undefined, oldValue);
  }

  return result;
}

function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const oldTarget =  false ? 0 : undefined; // forward the operation before queueing reactions

  const result = target.clear();

  if (hadItems) {
    trigger(target, "clear"
    /* CLEAR */
    , undefined, undefined, oldTarget);
  }

  return result;
}

function createForEach(isReadonly, isShallow) {
  return function forEach(callback, thisArg) {
    const observed = this;
    const target = observed["__v_raw"
    /* RAW */
    ];
    const rawTarget = toRaw(target);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    !isReadonly && track(rawTarget, "iterate"
    /* ITERATE */
    , ITERATE_KEY);
    return target.forEach((value, key) => {
      // important: make sure the callback is
      // 1. invoked with the reactive map as `this` and 3rd arg
      // 2. the value received should be a corresponding reactive/readonly.
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}

function createIterableMethod(method, isReadonly, isShallow) {
  return function (...args) {
    const target = this["__v_raw"
    /* RAW */
    ];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === 'entries' || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === 'keys' && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    !isReadonly && track(rawTarget, "iterate"
    /* ITERATE */
    , isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY); // return a wrapped iterator which returns observed versions of the
    // values emitted from the real iterator

    return {
      // iterator protocol
      next() {
        const {
          value,
          done
        } = innerIterator.next();
        return done ? {
          value,
          done
        } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },

      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }

    };
  };
}

function createReadonlyMethod(type) {
  return function (...args) {
    if (false) {}

    return type === "delete"
    /* DELETE */
    ? false : this;
  };
}

function createInstrumentations() {
  const mutableInstrumentations = {
    get(key) {
      return get$1(this, key);
    },

    get size() {
      return size(this);
    },

    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations = {
    get(key) {
      return get$1(this, key, false, true);
    },

    get size() {
      return size(this);
    },

    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations = {
    get(key) {
      return get$1(this, key, true);
    },

    get size() {
      return size(this, true);
    },

    has(key) {
      return has$1.call(this, key, true);
    },

    add: createReadonlyMethod("add"
    /* ADD */
    ),
    set: createReadonlyMethod("set"
    /* SET */
    ),
    delete: createReadonlyMethod("delete"
    /* DELETE */
    ),
    clear: createReadonlyMethod("clear"
    /* CLEAR */
    ),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations = {
    get(key) {
      return get$1(this, key, true, true);
    },

    get size() {
      return size(this, true);
    },

    has(key) {
      return has$1.call(this, key, true);
    },

    add: createReadonlyMethod("add"
    /* ADD */
    ),
    set: createReadonlyMethod("set"
    /* SET */
    ),
    delete: createReadonlyMethod("delete"
    /* DELETE */
    ),
    clear: createReadonlyMethod("clear"
    /* CLEAR */
    ),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = ['keys', 'values', 'entries', Symbol.iterator];
  iteratorMethods.forEach(method => {
    mutableInstrumentations[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations[method] = createIterableMethod(method, true, false);
    shallowInstrumentations[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations[method] = createIterableMethod(method, true, true);
  });
  return [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations];
}

const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* #__PURE__*/createInstrumentations();

function createInstrumentationGetter(isReadonly, shallow) {
  const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive"
    /* IS_REACTIVE */
    ) {
      return !isReadonly;
    } else if (key === "__v_isReadonly"
    /* IS_READONLY */
    ) {
      return isReadonly;
    } else if (key === "__v_raw"
    /* RAW */
    ) {
      return target;
    }

    return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}

const mutableCollectionHandlers = {
  get: /*#__PURE__*/createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: /*#__PURE__*/createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: /*#__PURE__*/createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
  get: /*#__PURE__*/createInstrumentationGetter(true, true)
};

function checkIdentityKeys(target, has, key) {
  const rawKey = toRaw(key);

  if (rawKey !== key && has.call(target, rawKey)) {
    const type = toRawType(target);
    console.warn(`Reactive ${type} contains both the raw and reactive ` + `versions of the same object${type === `Map` ? ` as keys` : ``}, ` + `which can lead to inconsistencies. ` + `Avoid differentiating between the raw and reactive versions ` + `of an object and only use the reactive version if possible.`);
  }
}

const reactiveMap = new WeakMap();
const shallowReactiveMap = new WeakMap();
const readonlyMap = new WeakMap();
const shallowReadonlyMap = new WeakMap();

function targetTypeMap(rawType) {
  switch (rawType) {
    case 'Object':
    case 'Array':
      return 1
      /* COMMON */
      ;

    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
      /* COLLECTION */
      ;

    default:
      return 0
      /* INVALID */
      ;
  }
}

function getTargetType(value) {
  return value["__v_skip"
  /* SKIP */
  ] || !Object.isExtensible(value) ? 0
  /* INVALID */
  : targetTypeMap(shared_esm_bundler_toRawType(value));
}

function reactive(target) {
  // if trying to observe a readonly proxy, return the readonly version.
  if (isReadonly(target)) {
    return target;
  }

  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
/**
 * Return a shallowly-reactive copy of the original object, where only the root
 * level properties are reactive. It also does not auto-unwrap refs (even at the
 * root level).
 */


function shallowReactive(target) {
  return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
/**
 * Creates a readonly copy of the original object. Note the returned copy is not
 * made reactive, but `readonly` can be called on an already reactive object.
 */


function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
/**
 * Returns a reactive-copy of the original object, where only the root level
 * properties are readonly, and does NOT unwrap refs nor recursively convert
 * returned properties.
 * This is used for creating the props proxy object for stateful components.
 */


function shallowReadonly(target) {
  return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}

function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject(target)) {
    if (false) {}

    return target;
  } // target is already a Proxy, return it.
  // exception: calling readonly() on a reactive object


  if (target["__v_raw"
  /* RAW */
  ] && !(isReadonly && target["__v_isReactive"
  /* IS_REACTIVE */
  ])) {
    return target;
  } // target already has corresponding Proxy


  const existingProxy = proxyMap.get(target);

  if (existingProxy) {
    return existingProxy;
  } // only specific value types can be observed.


  const targetType = getTargetType(target);

  if (targetType === 0
  /* INVALID */
  ) {
    return target;
  }

  const proxy = new Proxy(target, targetType === 2
  /* COLLECTION */
  ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}

function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"
    /* RAW */
    ]);
  }

  return !!(value && value["__v_isReactive"
  /* IS_REACTIVE */
  ]);
}

function isReadonly(value) {
  return !!(value && value["__v_isReadonly"
  /* IS_READONLY */
  ]);
}

function isShallow(value) {
  return !!(value && value["__v_isShallow"
  /* IS_SHALLOW */
  ]);
}

function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}

function toRaw(observed) {
  const raw = observed && observed["__v_raw"
  /* RAW */
  ];
  return raw ? toRaw(raw) : observed;
}

function markRaw(value) {
  def(value, "__v_skip"
  /* SKIP */
  , true);
  return value;
}

const toReactive = value => isObject(value) ? reactive(value) : value;

const toReadonly = value => isObject(value) ? readonly(value) : value;

function trackRefValue(ref) {
  if (shouldTrack && activeEffect) {
    ref = toRaw(ref);

    if (false) {} else {
      trackEffects(ref.dep || (ref.dep = createDep()));
    }
  }
}

function triggerRefValue(ref, newVal) {
  ref = toRaw(ref);

  if (ref.dep) {
    if (false) {} else {
      triggerEffects(ref.dep);
    }
  }
}

function isRef(r) {
  return !!(r && r.__v_isRef === true);
}

function ref(value) {
  return createRef(value, false);
}

function shallowRef(value) {
  return createRef(value, true);
}

function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }

  return new RefImpl(rawValue, shallow);
}

class RefImpl {
  constructor(value, __v_isShallow) {
    this.__v_isShallow = __v_isShallow;
    this.dep = undefined;
    this.__v_isRef = true;
    this._rawValue = __v_isShallow ? value : toRaw(value);
    this._value = __v_isShallow ? value : toReactive(value);
  }

  get value() {
    trackRefValue(this);
    return this._value;
  }

  set value(newVal) {
    newVal = this.__v_isShallow ? newVal : toRaw(newVal);

    if (hasChanged(newVal, this._rawValue)) {
      this._rawValue = newVal;
      this._value = this.__v_isShallow ? newVal : toReactive(newVal);
      triggerRefValue(this, newVal);
    }
  }

}

function triggerRef(ref) {
  triggerRefValue(ref,  false ? 0 : void 0);
}

function unref(ref) {
  return isRef(ref) ? ref.value : ref;
}

const shallowUnwrapHandlers = {
  get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];

    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};

function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}

class CustomRefImpl {
  constructor(factory) {
    this.dep = undefined;
    this.__v_isRef = true;
    const {
      get,
      set
    } = factory(() => trackRefValue(this), () => triggerRefValue(this));
    this._get = get;
    this._set = set;
  }

  get value() {
    return this._get();
  }

  set value(newVal) {
    this._set(newVal);
  }

}

function customRef(factory) {
  return new CustomRefImpl(factory);
}

function toRefs(object) {
  if (false) {}

  const ret = isArray(object) ? new Array(object.length) : {};

  for (const key in object) {
    ret[key] = toRef(object, key);
  }

  return ret;
}

class ObjectRefImpl {
  constructor(_object, _key, _defaultValue) {
    this._object = _object;
    this._key = _key;
    this._defaultValue = _defaultValue;
    this.__v_isRef = true;
  }

  get value() {
    const val = this._object[this._key];
    return val === undefined ? this._defaultValue : val;
  }

  set value(newVal) {
    this._object[this._key] = newVal;
  }

}

function toRef(object, key, defaultValue) {
  const val = object[key];
  return isRef(val) ? val : new ObjectRefImpl(object, key, defaultValue);
}

class ComputedRefImpl {
  constructor(getter, _setter, isReadonly, isSSR) {
    this._setter = _setter;
    this.dep = undefined;
    this.__v_isRef = true;
    this._dirty = true;
    this.effect = new ReactiveEffect(getter, () => {
      if (!this._dirty) {
        this._dirty = true;
        triggerRefValue(this);
      }
    });
    this.effect.computed = this;
    this.effect.active = this._cacheable = !isSSR;
    this["__v_isReadonly"
    /* IS_READONLY */
    ] = isReadonly;
  }

  get value() {
    // the computed ref may get wrapped by other proxies e.g. readonly() #3376
    const self = toRaw(this);
    trackRefValue(self);

    if (self._dirty || !self._cacheable) {
      self._dirty = false;
      self._value = self.effect.run();
    }

    return self._value;
  }

  set value(newValue) {
    this._setter(newValue);
  }

}

function computed(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  const onlyGetter = isFunction(getterOrOptions);

  if (onlyGetter) {
    getter = getterOrOptions;
    setter =  false ? 0 : NOOP;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }

  const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);

  if (false) {}

  return cRef;
}

var _a;

const tick = /*#__PURE__*/(/* unused pure expression or super */ null && (Promise.resolve()));
const queue = (/* unused pure expression or super */ null && ([]));
let queued = false;

const scheduler = fn => {
  queue.push(fn);

  if (!queued) {
    queued = true;
    tick.then(flush);
  }
};

const flush = () => {
  for (let i = 0; i < queue.length; i++) {
    queue[i]();
  }

  queue.length = 0;
  queued = false;
};

class DeferredComputedRefImpl {
  constructor(getter) {
    this.dep = undefined;
    this._dirty = true;
    this.__v_isRef = true;
    this[_a] = true;
    let compareTarget;
    let hasCompareTarget = false;
    let scheduled = false;
    this.effect = new ReactiveEffect(getter, computedTrigger => {
      if (this.dep) {
        if (computedTrigger) {
          compareTarget = this._value;
          hasCompareTarget = true;
        } else if (!scheduled) {
          const valueToCompare = hasCompareTarget ? compareTarget : this._value;
          scheduled = true;
          hasCompareTarget = false;
          scheduler(() => {
            if (this.effect.active && this._get() !== valueToCompare) {
              triggerRefValue(this);
            }

            scheduled = false;
          });
        } // chained upstream computeds are notified synchronously to ensure
        // value invalidation in case of sync access; normal effects are
        // deferred to be triggered in scheduler.


        for (const e of this.dep) {
          if (e.computed instanceof DeferredComputedRefImpl) {
            e.scheduler(true
            /* computedTrigger */
            );
          }
        }
      }

      this._dirty = true;
    });
    this.effect.computed = this;
  }

  _get() {
    if (this._dirty) {
      this._dirty = false;
      return this._value = this.effect.run();
    }

    return this._value;
  }

  get value() {
    trackRefValue(this); // the computed ref may get wrapped by other proxies e.g. readonly() #3376

    return toRaw(this)._get();
  }

}

_a = "__v_isReadonly"
/* IS_READONLY */
;

function deferredComputed(getter) {
  return new DeferredComputedRefImpl(getter);
}


;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/settings/SettingsComp.vue?vue&type=script&setup=true&lang=ts


const _hoisted_1 = {
  class: "map-tiles"
};
const _hoisted_2 = ["onClick"];
const _hoisted_3 = ["src"];
const _hoisted_4 = {
  class: "desc"
};
const _hoisted_5 = {
  class: "map-checkboxes"
};

const _hoisted_6 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)("poi ");

const _hoisted_7 = {
  for: "traffic"
};

const _hoisted_8 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)("traffic ");


const __default__ = {
  name: "SettingsComp"
};
/* harmony default export */ var SettingsCompvue_type_script_setup_true_lang_ts = (/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({ ...__default__,
  props: {
    poi: Boolean,
    traffic: Boolean,
    mapType: {
      type: String,
      default: "neshan"
    },
    tiles: {
      type: Array,
      default: () => []
    },
    settingsBoxClass: Array,
    settingsBoxStyle: Object,
    typesClass: Array
  },
  emits: ["update:mapType", "update:poi", "update:traffic"],

  setup(__props, {
    emit
  }) {
    const props = __props;
    const poiLayer = computed({
      get: () => props.poi,
      set: val => emit("update:poi", val)
    });
    const trafficLayer = computed({
      get: () => props.traffic,
      set: val => emit("update:traffic", val)
    });
    return (_ctx, _cache) => {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
        style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeStyle)(__props.settingsBoxStyle),
        class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(["map-settings", __props.settingsBoxClass])
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_1, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)(__props.tiles, tile => {
        return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
          key: tile.title,
          onClick: $event => emit('update:mapType', tile.title),
          class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(["tile", {
            'selected-tile': tile.title == __props.mapType
          }])
        }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("img", {
          src: tile.url
        }, null, 8, _hoisted_3), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_4, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(tile.title), 1)], 10, _hoisted_2);
      }), 128))]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_5, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("label", null, [_hoisted_6, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withDirectives)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("input", {
        type: "checkbox",
        name: "poi",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (0,external_commonjs_vue_commonjs2_vue_root_Vue_.isRef)(poiLayer) ? poiLayer.value = $event : null)
      }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_.vModelCheckbox, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(poiLayer)]])]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("label", _hoisted_7, [_hoisted_8, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withDirectives)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("input", {
        type: "checkbox",
        name: "traffic",
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (0,external_commonjs_vue_commonjs2_vue_root_Vue_.isRef)(trafficLayer) ? trafficLayer.value = $event : null)
      }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_.vModelCheckbox, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(trafficLayer)]])])])], 6);
    };
  }

}));
;// CONCATENATED MODULE: ./src/components/settings/SettingsComp.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-67.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-67.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-67.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-67.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/settings/SettingsComp.vue?vue&type=style&index=0&id=65bddcb1&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/settings/SettingsComp.vue?vue&type=style&index=0&id=65bddcb1&lang=scss

;// CONCATENATED MODULE: ./src/components/settings/SettingsComp.vue



;

const __exports__ = SettingsCompvue_type_script_setup_true_lang_ts;

/* harmony default export */ var SettingsComp = (__exports__);
;// CONCATENATED MODULE: ./src/utils/location.util.ts
/**
 * Creates the sufficent title based on result data.
 * @param data - result of neshan web search
 * @returns title
 */
const getTitleFromData = data => {
  const mainTitle = data.place ? data.place : data.route_name ? data.route_name : 'معبر بدون نام';
  const fullTitle = data.neighbourhood ? mainTitle + `، ${data.neighbourhood}` : mainTitle;
  return fullTitle;
};
/**
 * Get the object of location and turns it into array
 * @param loc - location object
 * @returns
 */

const sanitizeLocation = loc => {
  return loc ? loc instanceof Object ? [loc.longitude, loc.latitude] : loc : undefined;
};
/**
 * Gets the device location
 * if it was succesfull, formats it and returns
 * otherwise, sends Neshan locaton
 * @returns location array
 */

const getLocation = async () => {
  const positionPromise = new Promise(resolve => {
    navigator.geolocation.getCurrentPosition(pos => {
      resolve(pos);
    });
  });
  const position = await positionPromise;
  return position && sanitizeLocation(position.coords) || Object.values(createCoordsObject());
};
/**
 * Create an object for a quick lat lng access
 */

const createCoordsObject = () => {
  return {
    longitude: 59.5870851,
    latitude: 36.311559
  };
};
/**
 * Transforms common latlng to open layers-friendly latlng
 * @param point
 * @param from
 * @param to
 * @returns points
 */

const transformCoords = (point, from = 'EPSG:3857', to = 'EPSG:4326') => {
  return ol.proj.transform(point, from, to);
};
;// CONCATENATED MODULE: ./src/parameters/index.ts
const urls = {
  reverse: "https://api.neshan.org/v4/reverse",
  search: "https://api.neshan.org/v1/search",
  map: "https://static.neshan.org/sdk/openlayers/5.3.0/ol.js"
};
const markerUrls = {
  red: "https://img.icons8.com/color/344/marker--v1.png",
  // blue: "https://img.icons8.com/ultraviolet/344/marker.png",
  blue: "/images/search-marker.png",
  white: "/images/search-marker-prev.png"
};
const tiles = [{
  title: "osm-bright",
  url: "https://static.neshan.org/sdk/examples/maptypes/images/map-types-bright.png"
}, {
  title: "standard-night",
  url: "https://static.neshan.org/sdk/examples/maptypes/images/map-types-standard-night.png"
}, {
  title: "standard-day",
  url: "https://static.neshan.org/sdk/examples/maptypes/images/map-types-standard-day.png"
}, {
  title: "neshan",
  url: "https://static.neshan.org/sdk/examples/maptypes/images/map-types-neshan.png"
}, {
  title: "dreamy-gold",
  url: "https://static.neshan.org/sdk/examples/maptypes/images/map-types-dreamy-gold.png"
}, {
  title: "dreamy",
  url: "https://static.neshan.org/sdk/examples/maptypes/images/map-types-dreamy.png"
}];
const breakpointsSegments = {
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false
};
const breakpointsSegmentsPixels = {
  xs: 0,
  sm: 600,
  md: 1024,
  lg: 1440,
  xl: 1920
};
const drawerConstants = {
  width: 240
};
const unsetMapDimnensions = {
  width: 700,
  height: 1000
};
;// CONCATENATED MODULE: ./src/utils/features.util.ts


/**
 * Receives an array of points and returns a layer of markers.
 * @param points - Array of points.
 * @param point.coords - Coordinates of that point.
 * @param point.text - If you have a particular text for the point.
 * @param point.color - If you have a particular color for that point (only checks the first point for now).
 * @param point.image - If you have a particular image for that point (only checks the first point for now).
 * @param point.iconScale - If you have a particular icon scale for that point (only checks the first point for now).
 * @param point.originalItem - original item from neshan search result
 * @param point.props - props to set for point feature
 * @param options.hidePopup - If you don't want to show popup
 * @param options.cluster - If these markers need to be clusterd on given zoom number
 * @param options.clusterThreshold - Zoom number that markers should be clusterd on zoom condition above that given zoom
 * @param options.props - Props to set for all features
 * @returns style and layer.
 */

const createMarkers = (points, options) => {
  const [{
    image,
    color,
    iconScale
  } = {}] = points;
  const features = createFeaturesFromPoints(points, options?.markersIconCallback, {
    isCluster: options?.cluster,
    ...options?.props
  });
  let layer;

  let _style;

  if (options?.cluster) {
    layer = createClusterLayer(features, options);
  } else {
    const _image = image || createIcon({
      color,
      iconScale,
      anchor: options?.anchor
    });

    const {
      styleFunc,
      style
    } = createStyle({
      image: _image,
      hidePopup: options?.hidePopup
    });
    _style = style;
    const source = createSource(features);
    layer = createLayer({
      style: styleFunc,
      source
    });
  }

  return {
    layer,
    style: _style
  };
};
const createText = () => {
  return new ol.style.Text({
    overflow: true,
    scale: 1.6,
    offsetY: -43,
    fill: new ol.style.Fill({
      color: "#fff"
    }),
    stroke: new ol.style.Stroke({
      color: "0",
      width: 2
    })
  });
};
const createIcon = ({
  color = "red",
  iconScale = 0.1,
  src = markerUrls[color],
  anchor = [0.5, 0.5]
} = {}) => {
  return new ol.style.Icon({
    src,
    scale: iconScale,
    anchor
  });
};
const createRawStyle = ({
  image,
  text
}) => {
  return new ol.style.Style({
    image: image,
    text: text
  });
};
const createStyle = ({
  hidePopup = false,
  image
}) => {
  const _text = createText();

  const _image = image || createIcon({
    color: "blue",
    iconScale: 0.15
  });

  const _style = createRawStyle({
    text: _text,
    image: _image
  });

  const styleFunc = styleFuncGen(_style, {
    hidePopup
  });
  return {
    style: _style,
    styleFunc
  };
};
/**
 * Creates ol source from given features
 * @param features
 * @returns ol source
 */

const createSource = features => {
  return new ol.source.Vector({
    features // projection: map.value.getView().projection, // Is it neccesary?

  });
};
/**
 * Creates ol layer
 * @returns ol layer
 */


const createLayer = ({
  target = "points",
  style,
  source
}) => {
  return new ol.layer.Vector({
    target,
    source,
    style
  });
};
/**
 * Converts points given from neshan server to openlayers-friendly points
 * @param items - Items from search result
 * @param options.color - color of the markers
 * @param options.iconScale - scale of the markers
 */

const createMapPoints = (items, options) => {
  return items.map(item => {
    const point = [item.location.x, item.location.y];
    const mapPoint = transformCoords(point, "EPSG:4326", "EPSG:3857");
    return {
      coords: mapPoint,
      text: item.title,
      color: options?.color || "blue",
      iconScale: options?.iconScale || 0.15,
      originalItem: item
    };
  });
};
/**
 * Creates an style function to dynamically change popup text and marker icons
 * @param style - The static raw style
 * @param options.hidePopup - Will not use popups and just hard text
 * @returns
 */

const styleFuncGen = (style, {
  hidePopup = false
}) => {
  return feature => {
    if (hidePopup) {
      style.getText().setText(feature.get("text"));
    }

    const iconProps = feature.get("iconProps");

    if (iconProps) {
      style.setImage(createIcon(iconProps));
    }

    return style;
  };
};

const createClusterSource = (features, {
  minDistance = 30,
  distance = 30
} = {}) => {
  return new ol.source.Cluster({
    distance,
    minDistance,
    source: createSource(features)
  });
};

const createClusterText = size => {
  return new ol.style.Text({
    text: size.toString(),
    font: "bold 15px serif",
    fill: new ol.style.Fill({
      color: [0, 0, 0, 1]
    })
  });
};

const createClusterCircle = () => {
  return new ol.style.Circle({
    radius: 15,
    stroke: new ol.style.Stroke({
      color: [255, 255, 255, 0.7],
      width: 4
    }),
    fill: new ol.style.Fill({
      color: [0, 153, 255, 0.7]
    })
  });
};

const createClusterStyle = size => {
  return new ol.style.Style({
    image: createClusterCircle(),
    text: createClusterText(size)
  });
};
/**
 * Creates a style function for the clusters.
 * That if they are pointing to a single marker
 * the icon shown is the icon for single markers.
 * @param hidePopup - whether it should show a popup on hover or is a static text
 * @returns
 */


const createClusterStyleFunc = hidePopup => {
  const styleCache = {};
  return clusterFeature => {
    const innerFeatures = clusterFeature.get("features");

    if (!hidePopup) {
      clusterFeature.set("text", innerFeatures.map(feat => feat.get("text")));
    }

    clusterFeature.set("isCluster", innerFeatures[0].get("isCluster"));
    const size = innerFeatures.length;
    let style = styleCache[size];

    if (!style) {
      if (size !== 1) {
        style = createClusterStyle(size);
        styleCache[size] = style;
      } else {
        const {
          styleFunc
        } = createStyle({
          hidePopup
        });
        style = styleFunc(innerFeatures[0], 100); // 100 is to shut its type up
      }
    }

    return style;
  };
};

const createClusterLayer = (features, options) => {
  const cluster_layer = new ol.layer.Vector({
    source: createClusterSource(features, {
      minDistance: options?.clusterDistance,
      distance: options?.clusterDistance
    }),
    style: createClusterStyleFunc(options?.hidePopup)
  });
  return cluster_layer;
};
/**
 * Gets the sufficent extent to zoom on a cluster or marker
 * @param cluster
 * @returns extent
 */


const getClusterExtent = cluster => {
  const originalFeatures = cluster.get("features");
  const extent = new ol.extent.createEmpty();
  originalFeatures.forEach(f => {
    ol.extent.extend(extent, getFeatureExtent(f));
  });
  return extent;
};
/**
 * Gets the extent of a feature
 * @param feature
 * @returns extent
 */

const getFeatureExtent = feature => {
  return feature.getGeometry().getExtent();
};
/**
 * Takes a feature and returns text value from its properties
 * and ol coords on map
 * @param feature
 * @returns
 */

const getCoordsAndTextFromFeature = feature => {
  const featCoords = getCoordsFromFeature(feature);
  const featText = feature.getProperties().text;
  return {
    featCoords,
    featText
  };
};
/**
 * Gets OpenLayer Coordinates of the given feature
 * @param feature
 * @returns Coords array
 */

const getCoordsFromFeature = feature => {
  const geometry = feature.getGeometry();
  return geometry.getCoordinates().slice(0, 2); //slice because it return array of 3 args idk why
};
/**
 * Receives an array of points and returns an array of features.
 * @param points - Array of points.
 * @param point.text - If you have a particular text for the point.
 * @param proint.props - Props to set for a feature
 * @param props - Props to set for features
 * @returns array of features.
 */

const createFeaturesFromPoints = (points, markersIconCallback, props) => {
  return points.map(point => new ol.Feature({
    geometry: new ol.geom.Point(point.coords),
    text: point.text,
    iconProps: markersIconCallback && markersIconCallback(point),
    ...point.props,
    ...props
  }));
};
;// CONCATENATED MODULE: ./src/utils/index.ts


;// CONCATENATED MODULE: ./src/store/dimensions/state.ts


const stateGen = () => {
  return {
    breakpoints: { ...breakpointsSegments,
      lt: { ...breakpointsSegments
      },
      gt: { ...breakpointsSegments
      }
    },
    mapDimensions: unsetMapDimnensions
  };
};

const dimenstionsState = stateGen();
;// CONCATENATED MODULE: ./src/store/markers/state.ts


const state_stateGen = () => {
  return {
    selectedMarker: null,
    mainMarker: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(),
    mainMarkerCoords: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(),
    reverseResult: null,
    searchMarkers: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(),
    searchResults: []
  };
};

const markersState = state_stateGen();
;// CONCATENATED MODULE: ./src/store/overlays/state.ts
const overlays_state_stateGen = () => {
  return {
    overlay: null,
    persistantOverlay: null
  };
};

const overlayState = overlays_state_stateGen();
;// CONCATENATED MODULE: ./src/store/state.ts




const state = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.reactive)({ ...dimenstionsState,
  ...markersState,
  ...overlayState,
  map: null,
  api: null,
  searchLoading: false,
  reverseLoading: false,
  drawerActivation: false,
  drawerShowDetails: false,
  mobileDrawerShowDetails: false
});
;// CONCATENATED MODULE: ./src/store/getters.ts



const getters = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.reactive)({
  screen: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => {
    return {
      small: state.breakpoints.lt.md
    };
  }),
  drawerWidth: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => {
    const width = state.breakpoints.lt.md ? state.mapDimensions.width : drawerConstants.width;
    return width;
  }),
  loading: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => {
    return state.searchLoading || state.reverseLoading;
  })
});
;// CONCATENATED MODULE: ./src/store/dimensions/mutations.ts

const dimensionsMutations = {
  setBreakPoints(value) {
    state.breakpoints = value;
  },

  setMapDimenstions(value) {
    state.mapDimensions = value;
  }

};
;// CONCATENATED MODULE: ./src/store/markers/mutations.ts

const markersMutations = {
  setSelectedMarker(value) {
    state.selectedMarker = value;
  },

  setMainMarker(value) {
    state.mainMarker = value;
  },

  setSearchMarkers(value) {
    state.searchMarkers = value;
  },

  setMainMarkerCoords(value) {
    state.mainMarkerCoords = value;
  },

  setSearchResults(value) {
    state.searchResults = value;
  },

  setReverseResult(value) {
    state.reverseResult = value;
  }

};
;// CONCATENATED MODULE: ./src/store/mutations.ts



const mutations = {
  toggleSearchLoading(value) {
    state.searchLoading = value;
  },

  toggleReverseLoading(value) {
    state.reverseLoading = value;
  },

  toggleDrawerActivation(value) {
    state.drawerActivation = value;
  },

  toggleDrawerShowDetails(value) {
    state.drawerShowDetails = value;
  },

  toggleMobileDrawerShowDetails(value) {
    state.mobileDrawerShowDetails = value;
  },

  setMap(value) {
    state.map = value;
  },

  setApi(value) {
    state.api = value;
  },

  ...markersMutations,
  ...dimensionsMutations
};
;// CONCATENATED MODULE: ./src/store/markers/actions.ts




/**
 * Receives an array of points and marks them on map.
 * @param points - Array of points.
 * @param point.coords - Coordinates of that point.
 * @param point.text - If you have a particular text for the point.
 * @param point.style - If you have a particular style for that point (only checks the first point for now).
 * @param point.color - If you have a particular color for that point (only checks the first point for now).
 * @param point.image - If you have a particular image for that point (only checks the first point for now).
 * @param point.iconScale - If you have a particular icon scale for that point (only checks the first point for now).
 * @param point.originalItem - original item from neshan search result
 * @param point.props - props to set for point feature
 * @param options.cluster - If these markers need to be clusterd on given zoom number
 * @param options.clusterThreshold - Zoom number that markers should be clusterd on zoom condition above that given zoom
 * @param options.showPopup - If you want show the text as popup
 * @param options.props - Props to set for all features
 * @returns style and layer.
 */

const addMarkers = (points, options) => {
  const {
    layer,
    style
  } = createMarkers(points, options);
  state.map?.addLayer(layer);
  return {
    layer,
    style
  };
};
/**
 * Removes markers from map
 */


const clearMarkerLayer = layer => {
  if (!layer) return;
  state.map?.removeLayer(layer);
};
/**
 * Toggles cluster source to deactivate or apply clustering (The layer will remain a cluster layer)
 * @param layer
 * @param deactivate - whether to deactivate clustering or apply it.
 */


const toggleClusterSource = (layer, deactivate) => {
  if (!layer) return;
  const rawLayer = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toRaw)(layer);
  const clusterFeatures = rawLayer.getSource().getFeatures() || [];
  if (!clusterFeatures.some(cf => cf.get("isCluster"))) return;
  const features = clusterFeatures.reduce((result, cf) => {
    const features = cf.get("features");
    return [...result, ...features];
  }, []);
  const newDistance = deactivate ? 0 : 30;
  const newSource = createClusterSource(features, {
    distance: newDistance,
    minDistance: newDistance
  });
  layer.setSource(newSource);
};
/**
 * Takes the title of a marker and returns the found cluster and its surrounding cluster
 * @param title - title of wanted feature
 * @returns The found feature and its cluster
 */


const getClusterByTitle = title => {
  const clusters = state.searchMarkers.getSource().getFeatures();
  let foundFeature;
  const cluster = clusters?.find(cluster => {
    const feature = getMarkerInClusterByTitle(cluster, title);

    if (feature) {
      foundFeature = feature;
    }

    return feature;
  });
  return {
    feature: foundFeature,
    cluster
  };
};
/**
 * Take a cluster and a title and returns the feature inside the cluster by its title
 * @param cluster - The cluster we are looking for feature in it
 * @param title - Title of wanted feature
 * @returns The found feature
 */


const getMarkerInClusterByTitle = (cluster, title) => {
  const features = cluster.get("features");
  return features?.find(feat => feat.get("text") === title);
};
/**
 * Takes the title of a marker and returns it.
 * @param title - title of wanted feature
 * @returns The found marker
 */


const getMarkerByTitle = title => {
  const markers = state.searchMarkers?.getSource().getFeatures();
  return markers?.find(feature => feature.get("text") === title);
};
/**
 * Takes a feature and returns its relating search item
 * @param feature
 * @returns Search Item
 */


const getSearchResultByFeature = feature => {
  const title = feature.get("text");
  return state.searchResults.find(si => si.title === (Array.isArray(title) ? title[0] : title));
};
/**
 * Take the layer and zooms on its features
 * @param layer
 * @param options.duration - Zooming duration
 */


const zoomToLayer = (layer, options) => {
  const extent = layer.getSource().getExtent();
  zoomToExtent(extent, options);
};
/**
 * Gets the desired extent and zooms on it
 * @param extent - Extent of the area to zoom on
 * @param options.duration - Zooming duration
 */


const zoomToExtent = (extent, options) => {
  const duration = options?.duration || 500;
  state.map?.getView().fit(extent, {
    size: state.map.getSize(),
    duration,
    minResolution: 0.3,
    padding: [15, store.getters.screen.small ? 15 : 300, 15, 15]
  });
};
/**
 * Takes the marker and zooms on it
 * @param marker
 * @param options.duration - Zooming duration
 */


const zoomToMarker = (marker, options) => {
  const extent = getFeatureExtent(marker);
  zoomToExtent(extent, options);
};
/**
 * Takes the cluster and zooms on it
 * @param cluster
 * @param options.duration - Zooming duration
 */


const zoomToCluster = (cluster, options) => {
  const extent = getClusterExtent(cluster);
  zoomToExtent(extent, options);
};
/**
 * Zooms on given feature and shows its details on detail section
 * Adds a persistant overlay on it
 * @param feature
 * @param options
 */


const selectFeauture = (feature, options) => {
  zoomToMarker(feature);
  const coords = options?.coords || getCoordsFromFeature(feature);
  const isMainMarker = feature?.getProperties().mainMarker;
  let text = options?.text || feature.getProperties().text;
  if (Array.isArray(text)) text = text[0];

  if (options?.delay !== 0) {
    setTimeout(() => {
      store.actions.overlays.changeOverlayStats({
        coords,
        text,
        offset: isMainMarker ? [0, -60] : [0, -40]
      }, "persistant");
    }, options?.delay || 500);
  } else {
    store.actions.overlays.changeOverlayStats({
      coords,
      text,
      offset: isMainMarker ? [0, -60] : [0, -40]
    }, "persistant");
  }

  const foundResult = isMainMarker ? state.reverseResult : store.actions.markers.getSearchResultByFeature(feature);

  if (foundResult) {
    store.setSelectedMarker(foundResult);
    store.toggleDrawerShowDetails(true);
    if (!store.state.mobileDrawerShowDetails) store.toggleMobileDrawerShowDetails(true);
    if (!store.getters.screen.small && !store.state.drawerActivation) store.toggleDrawerActivation(true);
  }
};
/**
 * Looks for features in current hover or click event of map
 * @param evt - Map hover or click event
 * @returns feature (If found)
 */


const getFeatureFromEvent = evt => {
  return store.state.map?.forEachFeatureAtPixel(evt.pixel, feature => feature);
};
/**
 * Places a marker on a point on ol map
 * Sends a reverse request on that position
 * and adds a title based on returned value
 * @param point - OL Coords
 * @param putMarker - Whether to put marker on locating area
 * @returns marker, standard coords of point and api result data
 */


const reverseOnPoint = async (point, {
  useMarker = true,
  usePopup = true,
  customText
} = {}) => {
  try {
    const stdPoint = transformCoords(point);
    let marker = null;

    if (useMarker) {
      const {
        layer
      } = store.actions.markers.addMarkers([{
        coords: point,
        text: ""
      }], {
        props: {
          mainMarker: true,
          isCluster: false
        },
        anchor: [0.5, 1]
      });
      store.setMainMarkerCoords(stdPoint);
      store.setMainMarker(layer);
      marker = layer;
    }

    if (!store.state.api) throw "No reverse api";
    const data = await store.state.api.REVERSE(...stdPoint);
    store.setSelectedMarker(data);
    store.setReverseResult(data);
    store.toggleDrawerShowDetails(true);
    const text = customText || getTitleFromData(data);
    store.state.mainMarker?.getSource().getFeatures()[0].set("text", text);

    if (usePopup) {
      store.actions.overlays.changeOverlayStats({
        coords: point,
        text,
        offset: [0, -60]
      }, "persistant");
    }

    return {
      marker,
      stdPoint,
      data
    };
  } catch (error) {
    console.log(error);
    return {};
  }
};
/**
 * Does a neshan search based on given parameters
 * @param searchParams.text - Part of or whole name of the place.
 * @param searchParams.coords - Coordinates you want to search around.
 */


const search = async ({
  term = "",
  coords
}, options) => {
  try {
    store.toggleSearchLoading(true);
    if (!store.state.api) return;
    const result = await store.state.api.SEARCH(term, coords);
    store.toggleDrawerShowDetails(false);
    clearMarkerLayer(store.state.searchMarkers);
    store.setSearchResults(result.items);
    const points = createMapPoints(result.items);
    const {
      layer
    } = store.actions.markers.addMarkers(points, {
      markersIconCallback: options?.markersIconCallback,
      cluster: options?.cluster,
      clusterThreshold: options?.clusterThreshold
    });
    store.actions.overlays.changeOverlayStats(undefined, "persistant");
    store.state.searchMarkers = layer; // Apparently it takse some async time to cluster the source

    setTimeout(() => {
      const features = layer.getSource().getFeatures(); //To fix a problem with zooming on single feature layers extent

      if (features.length === 1) {
        store.actions.markers.zoomToCluster(features[0], {
          duration: 1500
        });
      } else {
        store.actions.markers.zoomToLayer(layer, {
          duration: 1500
        });
      }
    }, 200);
  } catch (error) {
    console.log(error);
  } finally {
    store.toggleSearchLoading(false);
  }
};

const markersActions = {
  addMarkers,
  clearMarkerLayer,
  toggleClusterSource,
  getClusterByTitle,
  getMarkerInClusterByTitle,
  getMarkerByTitle,
  getSearchResultByFeature,
  zoomToLayer,
  zoomToExtent,
  zoomToMarker,
  zoomToCluster,
  selectFeauture,
  getFeatureFromEvent,
  reverseOnPoint,
  search
};
;// CONCATENATED MODULE: ./src/store/dimensions/actions.ts



/**
 * Updates map height value on window resize
 */

const updateMapDimensions = mapContainer => {
  if (!mapContainer.value) return;
  store.setMapDimenstions({
    height: mapContainer.value.clientHeight,
    width: mapContainer.value.clientWidth
  });
};
/**
 * Updates store breakpoints on windows resize
 */


const updateBreakpoints = () => {
  const width = window.innerWidth;
  const keys = Object.keys(breakpointsSegments);
  const newBreakpoints = JSON.parse(JSON.stringify((0,external_commonjs_vue_commonjs2_vue_root_Vue_.toRaw)(store.state.breakpoints)));
  keys.forEach((brp, i) => {
    const nextBrp = keys[i + 1];

    if (width >= breakpointsSegmentsPixels[brp]) {
      newBreakpoints.lt[brp] = false;

      if (!nextBrp || width < breakpointsSegmentsPixels[nextBrp]) {
        newBreakpoints[brp] = true;
        newBreakpoints.gt[brp] = false;
      } else {
        newBreakpoints[brp] = false;
        newBreakpoints.gt[brp] = true;
      }
    } else if (width < breakpointsSegmentsPixels[brp]) {
      newBreakpoints.lt[brp] = true;
      newBreakpoints.gt[brp] = false;
    }
  });
  store.setBreakPoints(newBreakpoints);
};

const dimensionsActions = {
  updateMapDimensions,
  updateBreakpoints
};
;// CONCATENATED MODULE: ./src/store/overlays/actions.ts

let privatePopupContainer;
let privatePersistantContainer;
/**
 * Sets up overlay on map
 */

const setupOverlays = ({
  popupContainer,
  persistantContainer
}) => {
  privatePopupContainer = popupContainer;
  privatePersistantContainer = persistantContainer;
  const overlay = createOverlay(popupContainer);
  state.overlay = overlay;
  const persistantOverlay = createOverlay(persistantContainer, true);
  state.persistantOverlay = persistantOverlay;
  state.map?.addOverlay(overlay);
  state.map?.addOverlay(persistantOverlay);
};
/**
 * Changes overlay coords and text
 * @param stats.coords
 * @param stats.text
 * @param target - Whether to manipulated temporary or persistant overlay stats
 */


const changeOverlayStats = (stats, target = "temporary") => {
  const targetContainer = target === "temporary" ? privatePopupContainer : privatePersistantContainer;
  const targetOverlay = target === "temporary" ? state.overlay : state.persistantOverlay;
  if (!targetContainer.value) return;

  if (stats) {
    const {
      coords,
      text,
      offset
    } = stats;
    targetContainer.value.innerHTML = text;

    if (offset) {
      targetOverlay?.setOffset(offset);
    }

    targetOverlay?.setPosition(coords);
  } else {
    targetOverlay?.setPosition(undefined);
  }
};
/**
 * Creates an ol overlay on container element
 * @param persistant - Whether it should not disappear on mouse leaving
 * @returns overlay
 */


const createOverlay = (container, persistant = false) => {
  const overlay = new ol.Overlay({
    element: container.value,
    map: state.map,
    positioning: "top-center",
    offset: [0, -40]
  });
  overlay.set("persistant", persistant); // An attr to know that we should remove it on following hovers

  return overlay;
};

const overlaysActions = {
  setupOverlays,
  createOverlay,
  changeOverlayStats
};
;// CONCATENATED MODULE: ./src/store/actions.ts



const actions = {
  markers: markersActions,
  dimensions: dimensionsActions,
  overlays: overlaysActions
};
;// CONCATENATED MODULE: ./src/store/index.ts





const storeGen = () => {
  return {
    state: state,
    getters: getters,
    actions: actions,
    ...mutations
  };
};

const store = storeGen();
;// CONCATENATED MODULE: ./src/static/index.ts
const inlineSvgs = {
  close: {
    d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
  },
  magnet: {
    d: "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
  },
  neighborhood_landmark: {
    d: "M17,16H15V22H12V17H8V22H5V16H3L10,10L17,16M6,2L10,6H9V9H7V6H5V9H3V6H2L6,2M18,3L23,8H22V12H19V9H17V12H15.34L14,10.87V8H13L18,3Z"
  },
  formal_school: {
    d: "M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"
  },
  university: {
    d: "M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"
  },
  primary: {
    d: "M18.1,4.8C18,4.3 17.6,4 17.1,4H13L13.2,7H10.8L11,4H6.8C6.3,4 5.9,4.4 5.8,4.8L3.1,18.8C3,19.4 3.5,20 4.1,20H10L10.3,15H13.7L14,20H19.8C20.4,20 20.9,19.4 20.8,18.8L18.1,4.8M10.4,13L10.6,9H13.2L13.4,13H10.4Z"
  },
  secondary: {
    d: "M18.1,4.8C18,4.3 17.6,4 17.1,4H13L13.2,7H10.8L11,4H6.8C6.3,4 5.9,4.4 5.8,4.8L3.1,18.8C3,19.4 3.5,20 4.1,20H10L10.3,15H13.7L14,20H19.8C20.4,20 20.9,19.4 20.8,18.8L18.1,4.8M10.4,13L10.6,9H13.2L13.4,13H10.4Z",
    scale: 0.8
  },
  tertiary: {
    d: "M18.1,4.8C18,4.3 17.6,4 17.1,4H13L13.2,7H10.8L11,4H6.8C6.3,4 5.9,4.4 5.8,4.8L3.1,18.8C3,19.4 3.5,20 4.1,20H10L10.3,15H13.7L14,20H19.8C20.4,20 20.9,19.4 20.8,18.8L18.1,4.8M10.4,13L10.6,9H13.2L13.4,13H10.4Z",
    scale: 0.6
  },
  vaccine: {
    d: "M11.15,15.18L9.73,13.77L11.15,12.35L12.56,13.77L13.97,12.35L12.56,10.94L13.97,9.53L15.39,10.94L16.8,9.53L13.97,6.7L6.9,13.77L9.73,16.6L11.15,15.18M3.08,19L6.2,15.89L4.08,13.77L13.97,3.87L16.1,6L17.5,4.58L16.1,3.16L17.5,1.75L21.75,6L20.34,7.4L18.92,6L17.5,7.4L19.63,9.53L9.73,19.42L7.61,17.3L3.08,21.84V19Z"
  },
  subway_station: {
    d: "M8.5,15A1,1 0 0,1 9.5,16A1,1 0 0,1 8.5,17A1,1 0 0,1 7.5,16A1,1 0 0,1 8.5,15M7,9H17V14H7V9M15.5,15A1,1 0 0,1 16.5,16A1,1 0 0,1 15.5,17A1,1 0 0,1 14.5,16A1,1 0 0,1 15.5,15M18,15.88V9C18,6.38 15.32,6 12,6C9,6 6,6.37 6,9V15.88A2.62,2.62 0 0,0 8.62,18.5L7.5,19.62V20H9.17L10.67,18.5H13.5L15,20H16.5V19.62L15.37,18.5C16.82,18.5 18,17.33 18,15.88M17.8,2.8C20.47,3.84 22,6.05 22,8.86V22H2V8.86C2,6.05 3.53,3.84 6.2,2.8C8,2.09 10.14,2 12,2C13.86,2 16,2.09 17.8,2.8Z"
  },
  metro_entrance: {
    d: "M6 11V13H4V11H6M22 5H17V19H22V5M7 5H2L2 19H7V5M22 3C23.11 3 24 3.89 24 5V21H0V5C0 3.89 .894 3 2 3H9V19H15V3H22M20 11H18V13H20V11Z",
    scale: 0.8
  },
  footway: {
    d: "M10.74,11.72C11.21,12.95 11.16,14.23 9.75,14.74C6.85,15.81 6.2,13 6.16,12.86L10.74,11.72M5.71,10.91L10.03,9.84C9.84,8.79 10.13,7.74 10.13,6.5C10.13,4.82 8.8,1.53 6.68,2.06C4.26,2.66 3.91,5.35 4,6.65C4.12,7.95 5.64,10.73 5.71,10.91M17.85,19.85C17.82,20 17.16,22.8 14.26,21.74C12.86,21.22 12.8,19.94 13.27,18.71L17.85,19.85M20,13.65C20.1,12.35 19.76,9.65 17.33,9.05C15.22,8.5 13.89,11.81 13.89,13.5C13.89,14.73 14.17,15.78 14,16.83L18.3,17.9C18.38,17.72 19.89,14.94 20,13.65Z"
  },
  department_store: {
    d: "M12,18H6V14H12M21,14V12L20,7H4L3,12V14H4V20H14V14H18V20H20V14M20,4H4V6H20V4Z"
  },
  internet_cafe: {
    d: "M8.95 13.4H6.58A5.5 5.5 0 0 1 6.58 10.6H8.95A11.56 11.56 0 0 0 8.85 12A11.56 11.56 0 0 0 8.95 13.4M7.16 9.2H9.2A12.06 12.06 0 0 1 10.18 6.71A5.55 5.55 0 0 0 7.16 9.2M16.84 9.2A5.59 5.59 0 0 0 13.81 6.71A10.95 10.95 0 0 1 14.78 9.2M12 17.57A9.5 9.5 0 0 0 13.34 14.8H10.66A9.5 9.5 0 0 0 12 17.57M12 6.42A9.53 9.53 0 0 0 10.66 9.2H13.34A9.53 9.53 0 0 0 12 6.42M7.16 14.8A5.61 5.61 0 0 0 10.18 17.29A12.06 12.06 0 0 1 9.2 14.8M21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19A2 2 0 0 1 21 5M19 12A7 7 0 1 0 12 19A7 7 0 0 0 19 12M15.15 12A11.56 11.56 0 0 1 15.05 13.4H17.42A5.5 5.5 0 0 0 17.42 10.6H15.05A11.56 11.56 0 0 1 15.15 12M13.81 17.29A5.62 5.62 0 0 0 16.84 14.8H14.78A10.95 10.95 0 0 1 13.81 17.29M10.36 10.6A8.81 8.81 0 0 0 10.36 13.4H13.64A10.3 10.3 0 0 0 13.75 12A10.21 10.21 0 0 0 13.64 10.6Z"
  },
  park: {
    d: "M10,21V18H3L8,13H5L10,8H7L12,3L17,8H14L19,13H16L21,18H14V21H10Z"
  },
  hotel: {
    d: "M480 0C497.7 0 512 14.33 512 32C512 49.67 497.7 64 480 64V448C497.7 448 512 462.3 512 480C512 497.7 497.7 512 480 512H304V448H208V512H32C14.33 512 0 497.7 0 480C0 462.3 14.33 448 32 448V64C14.33 64 0 49.67 0 32C0 14.33 14.33 0 32 0H480zM112 96C103.2 96 96 103.2 96 112V144C96 152.8 103.2 160 112 160H144C152.8 160 160 152.8 160 144V112C160 103.2 152.8 96 144 96H112zM224 144C224 152.8 231.2 160 240 160H272C280.8 160 288 152.8 288 144V112C288 103.2 280.8 96 272 96H240C231.2 96 224 103.2 224 112V144zM368 96C359.2 96 352 103.2 352 112V144C352 152.8 359.2 160 368 160H400C408.8 160 416 152.8 416 144V112C416 103.2 408.8 96 400 96H368zM96 240C96 248.8 103.2 256 112 256H144C152.8 256 160 248.8 160 240V208C160 199.2 152.8 192 144 192H112C103.2 192 96 199.2 96 208V240zM240 192C231.2 192 224 199.2 224 208V240C224 248.8 231.2 256 240 256H272C280.8 256 288 248.8 288 240V208C288 199.2 280.8 192 272 192H240zM352 240C352 248.8 359.2 256 368 256H400C408.8 256 416 248.8 416 240V208C416 199.2 408.8 192 400 192H368C359.2 192 352 199.2 352 208V240zM256 288C211.2 288 173.5 318.7 162.1 360.2C159.7 373.1 170.7 384 184 384H328C341.3 384 352.3 373.1 349 360.2C338.5 318.7 300.8 288 256 288z"
  },
  local_government_office: {
    d: "M5,3V21H11V17.5H13V21H19V3H5M7,5H9V7H7V5M11,5H13V7H11V5M15,5H17V7H15V5M7,9H9V11H7V9M11,9H13V11H11V9M15,9H17V11H15V9M7,13H9V15H7V13M11,13H13V15H11V13M15,13H17V15H15V13M7,17H9V19H7V17M15,17H17V19H15V17Z"
  },
  marker: {
    d: "M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"
  },
  city: {
    d: "M19,15H17V13H19M19,19H17V17H19M13,7H11V5H13M13,11H11V9H13M13,15H11V13H13M13,19H11V17H13M7,11H5V9H7M7,15H5V13H7M7,19H5V17H7M15,11V5L12,2L9,5V7H3V21H21V11H15Z"
  },
  residential: {
    d: "M17,16H15V22H12V17H8V22H5V16H3L10,10L17,16M6,2L10,6H9V9H7V6H5V9H3V6H2L6,2M18,3L23,8H22V12H19V9H17V12H15.34L14,10.87V8H13L18,3Z"
  },
  back: {
    d: "M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
  }
};
const defaultIcons = {
  place: {
    d: inlineSvgs.neighborhood_landmark.d
  },
  municipal: {
    d: inlineSvgs.primary.d
  }
};
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/icons/IconComponent.vue?vue&type=script&setup=true&lang=ts


const IconComponentvue_type_script_setup_true_lang_ts_hoisted_1 = ["fill", "d"];

/* harmony default export */ var IconComponentvue_type_script_setup_true_lang_ts = (/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  __name: 'IconComponent',
  props: {
    name: {
      type: String,
      default: "close"
    },
    size: {
      type: Number,
      default: 15
    },
    color: String
  },

  setup(__props) {
    return (_ctx, _cache) => {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("svg", {
        style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeStyle)(`width: ${__props.size}px; height: ${__props.size}px`),
        viewBox: "0 0 24 24"
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("path", {
        fill: __props.color || 'currentColor',
        d: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(inlineSvgs)[__props.name].d
      }, null, 8, IconComponentvue_type_script_setup_true_lang_ts_hoisted_1)], 4);
    };
  }

}));
;// CONCATENATED MODULE: ./src/components/icons/IconComponent.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./src/components/icons/IconComponent.vue



const IconComponent_exports_ = IconComponentvue_type_script_setup_true_lang_ts;

/* harmony default export */ var IconComponent = (IconComponent_exports_);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/drawer/SearchSection.vue?vue&type=script&setup=true&lang=ts



const _withScopeId = n => (_pushScopeId("data-v-079304d9"), n = n(), _popScopeId(), n);

const SearchSectionvue_type_script_setup_true_lang_ts_hoisted_1 = ["activated"];





/* harmony default export */ var SearchSectionvue_type_script_setup_true_lang_ts = (/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  __name: 'SearchSection',
  props: {
    searchBoxClass: Array,
    searchBoxStyle: Object,
    typesClass: Array,
    searchText: {
      type: String
    }
  },
  emits: ["update:search-text", "update:search-coords", "submit"],

  setup(__props, {
    emit
  }) {
    const props = __props;
    const width = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(drawerConstants.width);
    const text = computed({
      get: () => props.searchText,
      set: val => {
        if (!props.searchText) {
          privateText.value = val;
        }

        emit("update:search-text", val);
        runTimeout(val);
      }
    }); // Defined them in case of not wanting to use with v-model

    const privateText = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(props.searchText);
    /**
     * Emits Search Term to the parent component
     * @param term search text
     */

    const emitSearch = (term = "") => {
      const inputText = term || text.value?.trim() || privateText.value?.trim();
      emit("submit", inputText);
    };

    let emitTimeout;
    /**
     * Runs and updates a timeout so after that if fires emitSearch function
     * @param value - searching value
     * @param delay - delay time for emiting search, defaults to 1000
     */

    const runTimeout = (value = text.value || privateText.value, delay = 1000) => {
      clearTimeout(emitTimeout);

      if (!value) {
        store.toggleSearchLoading(false);
        return;
      } else if (!store.state.searchLoading) {
        store.toggleSearchLoading(true);
      }

      emitTimeout = setTimeout(() => {
        emitSearch(value);
      }, delay);
    };

    return (_ctx, _cache) => {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
        activated: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(store).state.drawerActivation,
        style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeStyle)(__props.searchBoxStyle || `width: ${width.value}px`),
        class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(["map-search-box justify-between align-center mx-auto", __props.searchBoxClass])
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.withDirectives)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("input", {
        type: "search",
        name: "search",
        placeholder: "جستجو",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (0,external_commonjs_vue_commonjs2_vue_root_Vue_.isRef)(text) ? text.value = $event : null),
        onKeydown: _cache[1] || (_cache[1] = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withKeys)($event => runTimeout((0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(text) || privateText.value, 0), ["enter"])),
        onFocus: _cache[2] || (_cache[2] = $event => (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(store).toggleDrawerActivation(true))
      }, null, 544), [[external_commonjs_vue_commonjs2_vue_root_Vue_.vModelText, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(text)]]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(store).state.drawerShowDetails && !(0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(store).getters.screen.small ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("button", {
        key: 0,
        onClick: _cache[3] || (_cache[3] = $event => (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(store).toggleDrawerShowDetails(false))
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(IconComponent, {
        name: "back",
        size: 15
      })])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), !(0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(store).state.drawerActivation ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("button", {
        key: 1,
        onClick: _cache[4] || (_cache[4] = $event => (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(store).toggleDrawerActivation(true))
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(IconComponent, {
        name: "magnet",
        size: 15
      })])) : ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("button", {
        key: 2,
        onClick: _cache[5] || (_cache[5] = $event => (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(store).toggleDrawerActivation(false))
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(IconComponent, {
        name: "close",
        size: 15
      })]))], 14, SearchSectionvue_type_script_setup_true_lang_ts_hoisted_1);
    };
  }

}));
;// CONCATENATED MODULE: ./src/components/drawer/SearchSection.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-67.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-67.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-67.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-67.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/drawer/SearchSection.vue?vue&type=style&index=0&id=079304d9&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/drawer/SearchSection.vue?vue&type=style&index=0&id=079304d9&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(1794);
;// CONCATENATED MODULE: ./src/components/drawer/SearchSection.vue



;


const SearchSection_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(SearchSectionvue_type_script_setup_true_lang_ts, [['__scopeId',"data-v-079304d9"]])

/* harmony default export */ var SearchSection = (SearchSection_exports_);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/drawer/result-section/ResultItem.vue?vue&type=script&setup=true&lang=ts



const ResultItemvue_type_script_setup_true_lang_ts_withScopeId = n => ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.pushScopeId)("data-v-47d71eba"), n = n(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.popScopeId)(), n);

const ResultItemvue_type_script_setup_true_lang_ts_hoisted_1 = {
  class: "list-item"
};
const ResultItemvue_type_script_setup_true_lang_ts_hoisted_2 = {
  class: "text-lg"
};
const ResultItemvue_type_script_setup_true_lang_ts_hoisted_3 = {
  class: "text-caption"
};

const ResultItemvue_type_script_setup_true_lang_ts_hoisted_4 = /*#__PURE__*/ResultItemvue_type_script_setup_true_lang_ts_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("hr", null, null, -1));

/* harmony default export */ var ResultItemvue_type_script_setup_true_lang_ts = (/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  __name: 'ResultItem',
  props: {
    item: Object
  },

  setup(__props) {
    return (_ctx, _cache) => {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", null, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", ResultItemvue_type_script_setup_true_lang_ts_hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("b", ResultItemvue_type_script_setup_true_lang_ts_hoisted_2, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(__props.item?.title), 1), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", ResultItemvue_type_script_setup_true_lang_ts_hoisted_3, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(__props.item?.neighbourhood), 1)]), ResultItemvue_type_script_setup_true_lang_ts_hoisted_4]);
    };
  }

}));
;// CONCATENATED MODULE: ./src/components/drawer/result-section/ResultItem.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-67.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-67.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-67.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-67.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/drawer/result-section/ResultItem.vue?vue&type=style&index=0&id=47d71eba&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/drawer/result-section/ResultItem.vue?vue&type=style&index=0&id=47d71eba&lang=scss&scoped=true

;// CONCATENATED MODULE: ./src/components/drawer/result-section/ResultItem.vue



;


const ResultItem_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ResultItemvue_type_script_setup_true_lang_ts, [['__scopeId',"data-v-47d71eba"]])

/* harmony default export */ var ResultItem = (ResultItem_exports_);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/LoadingComp.vue?vue&type=script&setup=true&lang=ts



const LoadingCompvue_type_script_setup_true_lang_ts_withScopeId = n => ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.pushScopeId)("data-v-734ba7ad"), n = n(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.popScopeId)(), n);

const LoadingCompvue_type_script_setup_true_lang_ts_hoisted_1 = ["dense"];

const LoadingCompvue_type_script_setup_true_lang_ts_hoisted_2 = /*#__PURE__*/LoadingCompvue_type_script_setup_true_lang_ts_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", null, null, -1));

const LoadingCompvue_type_script_setup_true_lang_ts_hoisted_3 = /*#__PURE__*/LoadingCompvue_type_script_setup_true_lang_ts_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", null, null, -1));

const LoadingCompvue_type_script_setup_true_lang_ts_hoisted_4 = [LoadingCompvue_type_script_setup_true_lang_ts_hoisted_2, LoadingCompvue_type_script_setup_true_lang_ts_hoisted_3];
/* harmony default export */ var LoadingCompvue_type_script_setup_true_lang_ts = (/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  __name: 'LoadingComp',
  props: {
    color: {
      type: String,
      default: 'blue'
    },
    dense: Boolean
  },

  setup(__props) {
    return (_ctx, _cache) => {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
        role: "status",
        class: "loading-bar",
        dense: __props.dense,
        style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeStyle)(`color: ${__props.color}`)
      }, LoadingCompvue_type_script_setup_true_lang_ts_hoisted_4, 12, LoadingCompvue_type_script_setup_true_lang_ts_hoisted_1);
    };
  }

}));
;// CONCATENATED MODULE: ./src/components/LoadingComp.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-67.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-67.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-67.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-67.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/LoadingComp.vue?vue&type=style&index=0&id=734ba7ad&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/LoadingComp.vue?vue&type=style&index=0&id=734ba7ad&lang=scss&scoped=true

;// CONCATENATED MODULE: ./src/components/LoadingComp.vue



;


const LoadingComp_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(LoadingCompvue_type_script_setup_true_lang_ts, [['__scopeId',"data-v-734ba7ad"]])

/* harmony default export */ var LoadingComp = (LoadingComp_exports_);
;// CONCATENATED MODULE: ./src/mixins/events.mixin.ts



function eventsMixin({
  emits,
  resultHoverCallback,
  resultClickCallback,
  markerHoverCallback,
  zoomOnMarkerClick,
  zoomOnResultClick,
  popupOnMarkerHover,
  popupOnResultHover,
  mapContainer,
  popupContainer,
  persistantContainer
}) {
  /**
   * Sets the required events up for the map.
   */
  const setupMapEvents = () => {
    setupClickEvent();
    setupZoomEvent();
    setupMarkerHoverEvent();
    setupResizeEvents();
  };

  const setupClickEvent = () => {
    store.state.map?.on("click", event => {
      handleClickEvent(event);
    });
  };

  const zoom = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(0);
  /**
   * Emits the new zoom value
   */

  const setupZoomEvent = () => {
    if (!store.state.map) return;
    zoom.value = store.state.map.getView().getZoom();
    store.state.map.on("moveend", () => {
      if (!store.state.map) return;
      const newZoom = store.state.map.getView().getZoom();

      if (zoom.value != newZoom) {
        emits("on-zoom", newZoom);
        zoom.value = newZoom;
      }
    });
  };
  /**
   * Sets up hover event for marker popups
   */


  const setupMarkerHoverEvent = () => {
    store.actions.overlays.setupOverlays({
      popupContainer,
      persistantContainer
    });
    store.state.map?.on("pointermove", function (evt) {
      const hoveredFeature = store.actions.markers.getFeatureFromEvent(evt);

      if (hoveredFeature) {
        const isMainMarker = hoveredFeature.getProperties().mainMarker;
        const innerFeatures = hoveredFeature.get("features");
        const {
          featCoords,
          featText
        } = getCoordsAndTextFromFeature(hoveredFeature);

        if (!innerFeatures || innerFeatures.length === 1) {
          if (popupOnMarkerHover) {
            store.actions.overlays.changeOverlayStats({
              text: Array.isArray(featText) ? featText[0] : featText,
              coords: featCoords,
              offset: isMainMarker ? [0, -60] : [0, -40]
            });
          }

          return;
        }

        if (markerHoverCallback) {
          markerHoverCallback({
            changeOverlayStats: store.actions.overlays.changeOverlayStats,
            map: store.state.map,
            feature: hoveredFeature
          });
        }
      }

      store.actions.overlays.changeOverlayStats();
    });
  };

  const setupResizeEvents = () => {
    window.addEventListener("resize", () => store.actions.dimensions.updateMapDimensions(mapContainer));
    window.addEventListener("resize", store.actions.dimensions.updateBreakpoints);
  };
  /**
   * After clicking on map, if there is no feature in there,
   * sets a marker on that coords.
   * Sends a request to api.reverse and labels the marker
   * otherwise it zooms and expands on that feature
   * In both cases emits an event named 'on-click' afterwards.
   * @param event - Map click event.
   */


  const handleClickEvent = async event => {
    let emittingMarker;
    let emittingData;
    let emittingStdPoint;
    const selectedFeature = store.actions.markers.getFeatureFromEvent(event);
    const isMainMarker = selectedFeature?.getProperties().mainMarker;
    if (!isMainMarker && store.state.mainMarker) store.state.map?.removeLayer(store.state.mainMarker);
    store.actions.overlays.changeOverlayStats(undefined, "persistant");

    if (zoomOnMarkerClick && selectedFeature) {
      handleFeatureClick(selectedFeature);
    } else {
      if (store.getters.screen.small) store.toggleMobileDrawerShowDetails(true);else store.toggleDrawerActivation(true);
      store.toggleReverseLoading(true);
      const result = await store.actions.markers.reverseOnPoint(event.coordinate);
      emittingMarker = result.marker;
      emittingData = result.data;
      emittingStdPoint = result.stdPoint;
      store.toggleReverseLoading(false);
    }

    emits("on-click", {
      event,
      marker: emittingMarker,
      stdPoint: emittingData,
      data: emittingStdPoint,
      map: store.state.map,
      selectedFeature
    });
  };
  /**
   * Zooms on feature and if its just a marker, shows it on details section
   * @param feature
   */


  const handleFeatureClick = feature => {
    const features = feature.get("features");

    if (features && features.length > 1) {
      store.actions.markers.zoomToCluster(feature);
    } else {
      store.actions.markers.selectFeauture(feature, {
        delay: 0
      });
    }
  };
  /**
   * Shows a popup on the relating marker
   * whenever mouse overs on its result on result box
   * also can get a callBack from user
   * @param item - Search item
   */


  const handleResultHover = item => {
    let foundFeature = store.actions.markers.getClusterByTitle(item.title).cluster;
    if (!foundFeature) foundFeature = store.actions.markers.getMarkerByTitle(item.title);

    if (foundFeature) {
      if (popupOnResultHover) {
        const {
          featCoords
        } = getCoordsAndTextFromFeature(foundFeature);
        store.actions.overlays.changeOverlayStats({
          coords: featCoords,
          text: item.title
        });
      }

      if (resultHoverCallback) {
        resultHoverCallback({
          map: store.state.map,
          feature: foundFeature
        });
      }
    }
  };
  /**
   * Zooms on the relating marker
   * and adds its overlay
   * whenever its result on result box
   * gets clicked
   * @param item - Search item
   */


  const handleResultClick = item => {
    let foundFeature = store.actions.markers.getClusterByTitle(item.title).feature;
    if (!foundFeature) foundFeature = store.actions.markers.getMarkerByTitle(item.title);

    if (foundFeature) {
      store.actions.overlays.changeOverlayStats();

      if (zoomOnResultClick) {
        store.actions.markers.selectFeauture(foundFeature, {
          text: item.title
        });
      }

      if (resultClickCallback) {
        resultClickCallback({
          map: store.state.map,
          feature: foundFeature
        });
      }
    }
  };

  return {
    setupMapEvents,
    setupClickEvent,
    setupZoomEvent,
    setupMarkerHoverEvent,
    handleClickEvent,
    handleResultHover,
    handleResultClick,
    getClusterExtent: getClusterExtent,
    zoom
  };
}
;// CONCATENATED MODULE: ./src/mixins/detailsSection.mixin.ts




function detailsSectionMixin({
  props,
  containerRef
}) {
  const iconName = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => {
    if (!props.item) return;
    const isReverse = ("route_type" in props.item);
    const name = isReverse ? props.item.route_type && Object.keys(inlineSvgs).includes(props.item.route_type) ? props.item.route_type : props.item.place ? "local_government_office" : "primary" : props.item.type && Object.keys(inlineSvgs).includes(props.item.type) ? props.item.type : props.item.category === "place" ? "local_government_office" : "primary";
    return name;
  });
  const formattedItem = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => {
    if (!props.item) return;
    const isReverse = ("route_type" in props.item);
    const region = isReverse ? props.item.city || props.item.village ? props.item.state ? (props.item.city || props.item.village) + ", " + props.item.state : props.item.city || props.item.village : props.item.state : props.item.region;
    const item = {
      place: isReverse ? props.item.place : props.item.title,
      address: isReverse ? props.item.formatted_address : props.item.address,
      region,
      neighbourhood: isReverse ? 'محله ' + props.item.neighbourhood : props.item.neighbourhood,
      in_odd_even_zone: isReverse ? props.item.in_odd_even_zone : null,
      in_traffic_zone: isReverse ? props.item.in_traffic_zone : null
    };
    return item;
  });
  const {
    width
  } = dimensionsMixin({
    containerRef
  });
  return {
    iconName,
    width,
    formattedItem
  };
}
;// CONCATENATED MODULE: ./src/mixins/dimensions.mixin.ts

function dimensionsMixin({
  containerRef
}) {
  const width = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(0);
  (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(() => containerRef.value?.clientWidth, nv => {
    if (nv) width.value = nv;
  });

  const updateWidth = () => {
    const initialWidth = containerRef.value?.clientWidth;
    if (initialWidth) width.value = initialWidth;
  };

  (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
    updateWidth();
  });
  (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onUpdated)(() => {
    updateWidth();
  });
  return {
    width
  };
}
;// CONCATENATED MODULE: ./src/mixins/index.ts



;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/drawer/result-section/PointDetails.vue?vue&type=script&setup=true&lang=ts


const PointDetailsvue_type_script_setup_true_lang_ts_hoisted_1 = {
  class: "px-2"
};
const PointDetailsvue_type_script_setup_true_lang_ts_hoisted_2 = {
  key: 0,
  class: "d-flex align-center"
};

const PointDetailsvue_type_script_setup_true_lang_ts_hoisted_3 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("br", null, null, -1);

const PointDetailsvue_type_script_setup_true_lang_ts_hoisted_4 = {
  key: 1,
  class: "d-flex align-center"
};

const PointDetailsvue_type_script_setup_true_lang_ts_hoisted_5 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("br", null, null, -1);

const PointDetailsvue_type_script_setup_true_lang_ts_hoisted_6 = {
  key: 2,
  class: "d-flex align-center"
};

const PointDetailsvue_type_script_setup_true_lang_ts_hoisted_7 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("br", null, null, -1);

const PointDetailsvue_type_script_setup_true_lang_ts_hoisted_8 = {
  key: 3,
  class: "d-flex align-center"
};

const _hoisted_9 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("br", null, null, -1);

const _hoisted_10 = {
  key: 4,
  class: "d-flex align-center"
};

const _hoisted_11 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("br", null, null, -1);

const _hoisted_12 = {
  key: 5,
  class: "d-flex align-center"
};



/* harmony default export */ var PointDetailsvue_type_script_setup_true_lang_ts = (/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  __name: 'PointDetails',
  props: {
    item: Object
  },

  setup(__props) {
    const props = __props;
    const pointDetailsContainer = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)();
    const {
      iconName,
      width,
      formattedItem
    } = detailsSectionMixin({
      props,
      containerRef: pointDetailsContainer
    });
    return (_ctx, _cache) => {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
        ref_key: "pointDetailsContainer",
        ref: pointDetailsContainer
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(IconComponent, {
        name: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(iconName),
        size: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(width)
      }, null, 8, ["name", "size"]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", PointDetailsvue_type_script_setup_true_lang_ts_hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(formattedItem)?.place ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", PointDetailsvue_type_script_setup_true_lang_ts_hoisted_2, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(IconComponent, {
        name: "marker",
        size: 25,
        color: "steelblue",
        class: "px-1"
      }), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)(" " + (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(formattedItem).place), 1)])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), PointDetailsvue_type_script_setup_true_lang_ts_hoisted_3, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(formattedItem)?.address ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", PointDetailsvue_type_script_setup_true_lang_ts_hoisted_4, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(IconComponent, {
        name: "secondary",
        size: 25,
        color: "steelblue",
        class: "px-1"
      }), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)(" " + (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(formattedItem).address), 1)])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), PointDetailsvue_type_script_setup_true_lang_ts_hoisted_5, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(formattedItem)?.neighbourhood ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", PointDetailsvue_type_script_setup_true_lang_ts_hoisted_6, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(IconComponent, {
        name: "neighborhood_landmark",
        size: 25,
        color: "steelblue",
        class: "px-1"
      }), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)(" " + (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(formattedItem).neighbourhood), 1)])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), PointDetailsvue_type_script_setup_true_lang_ts_hoisted_7, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(formattedItem)?.region ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", PointDetailsvue_type_script_setup_true_lang_ts_hoisted_8, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(IconComponent, {
        name: "city",
        size: 25,
        color: "steelblue",
        class: "px-1"
      }), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)(" " + (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(formattedItem).region), 1)])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), _hoisted_9, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(formattedItem)?.in_odd_even_zone ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_10, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(formattedItem).in_odd_even_zone ? "داخل" : "خارج از") + " محدوده طرح زوج و فرد ", 1)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), _hoisted_11, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(formattedItem)?.in_traffic_zone ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_12, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(formattedItem).in_traffic_zone ? "داخل" : "خارج از") + " محدوده طرح ترافیک ", 1)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)])], 512);
    };
  }

}));
;// CONCATENATED MODULE: ./src/components/drawer/result-section/PointDetails.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./src/components/drawer/result-section/PointDetails.vue



const PointDetails_exports_ = PointDetailsvue_type_script_setup_true_lang_ts;

/* harmony default export */ var PointDetails = (PointDetails_exports_);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/drawer/result-section/ResultsSection.vue?vue&type=script&setup=true&lang=ts







/* harmony default export */ var ResultsSectionvue_type_script_setup_true_lang_ts = (/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  __name: 'ResultsSection',
  props: {
    resultBoxClass: Array,
    resultBoxStyle: Object,
    results: {
      type: Array,
      default: () => []
    }
  },
  emits: ["result-hover", "result-click"],

  setup(__props, {
    emit: emits
  }) {
    const props = __props;
    const resultSection = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)();

    const handleHoverEmit = item => {
      if (!store.getters.screen.small) {
        emitHover(item);
      }
    };

    const emitHover = item => {
      emits("result-hover", item);
    };

    const emitClick = item => {
      emits("result-click", item);
    };

    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(() => store.state.drawerActivation, nv => {
      if (!nv) return;
      const style = store.getters.screen.small ? `height: ${store.state.mapDimensions.height}px; width: ${store.getters.drawerWidth}px; ${props.resultBoxStyle}` : `height: ${store.state.mapDimensions.height}px; width: ${store.getters.drawerWidth}px; ${props.resultBoxStyle}`;
      resultSection.value?.setAttribute("style", style);
    });
    return (_ctx, _cache) => {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
        style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeStyle)(__props.resultBoxStyle),
        class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)([__props.resultBoxClass, "map-result-box mx-auto"]),
        ref_key: "resultSection",
        ref: resultSection
      }, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(store).getters.screen.small ? (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(store).state.searchLoading : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(store).getters.loading) ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(LoadingComp, {
        key: 0,
        dense: "",
        color: "blue"
      })) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), !(0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(store).getters.screen.small && (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(store).state.drawerShowDetails && (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(store).state.selectedMarker ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(PointDetails, {
        key: 1,
        item: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(store).state.selectedMarker
      }, null, 8, ["item"])) : ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, {
        key: 2
      }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)(__props.results, item => {
        return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(ResultItem, {
          key: '' + item.location.x + item.location.y,
          item: item,
          onMouseenter: $event => handleHoverEmit(item),
          onClick: $event => emitClick(item)
        }, null, 8, ["item", "onMouseenter", "onClick"]);
      }), 128))], 6);
    };
  }

}));
;// CONCATENATED MODULE: ./src/components/drawer/result-section/ResultsSection.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-67.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-67.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-67.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-67.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/drawer/result-section/ResultsSection.vue?vue&type=style&index=0&id=afe289c2&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/drawer/result-section/ResultsSection.vue?vue&type=style&index=0&id=afe289c2&lang=scss&scoped=true

;// CONCATENATED MODULE: ./src/components/drawer/result-section/ResultsSection.vue



;


const ResultsSection_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ResultsSectionvue_type_script_setup_true_lang_ts, [['__scopeId',"data-v-afe289c2"]])

/* harmony default export */ var ResultsSection = (ResultsSection_exports_);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/drawer/DrawerComp.vue?vue&type=script&setup=true&lang=ts



const DrawerCompvue_type_script_setup_true_lang_ts_withScopeId = n => (_pushScopeId("data-v-bf85d500"), n = n(), _popScopeId(), n);

const DrawerCompvue_type_script_setup_true_lang_ts_hoisted_1 = ["activated"];





/* harmony default export */ var DrawerCompvue_type_script_setup_true_lang_ts = (/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  __name: 'DrawerComp',
  props: {
    results: Array,
    searchCoords: {
      type: Object,
      default: () => createCoordsObject()
    },
    loading: Boolean
  },
  emits: ["search", "result-click", "result-hover"],

  setup(__props, {
    emit: emits
  }) {
    const props = __props;
    const searchText = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)("");

    const emitSearch = searchData => {
      const coordsArr = searchData?.coords || [props.searchCoords.longitude, props.searchCoords.latitude];
      const data = {
        term: searchData.term || "",
        coords: coordsArr
      };
      emits("search", data);
    };

    const emitResultClick = item => {
      emits("result-click", item);
    };

    const emitResultHover = item => {
      emits("result-hover", item);
    };

    const mapDrawer = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)();
    const searchSection = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)();
    /**
     * Changes drawer max-height & max-width according to whether its activated or not
     * between 100% and search section dimenstions
     * @param activated - whether the drawer is activated or not
     */

    const toggleDrawerMaxDimenstions = activated => {
      if (!activated) {
        if (!searchSection.value) return;
        const height = searchSection.value.$el.clientHeight;
        const width = searchSection.value.$el.clientWidth;
        mapDrawer.value?.setAttribute("style", `max-height: ${height}px; max-width: ${width}px;`);
      } else {
        mapDrawer.value?.setAttribute("style", `max-height: 100%; max-width: 100%;`);
      }
    };

    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(() => store.state.drawerActivation, nv => {
      toggleDrawerMaxDimenstions(nv);
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
      toggleDrawerMaxDimenstions(store.state.drawerActivation);
    });
    return (_ctx, _cache) => {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
        class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)([{
          'map-drawer--mobile': (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(store).getters.screen.small,
          'map-drawer': !(0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(store).getters.screen.small,
          'box-shadow': !(0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(store).state.drawerActivation
        }, "d-flex flex-column"]),
        activated: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(store).state.drawerActivation,
        ref_key: "mapDrawer",
        ref: mapDrawer
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(SearchSection, {
        ref_key: "searchSection",
        ref: searchSection,
        searchText: searchText.value,
        "onUpdate:searchText": _cache[0] || (_cache[0] = $event => searchText.value = $event),
        onSubmit: _cache[1] || (_cache[1] = $event => emitSearch({
          term: $event
        }))
      }, null, 8, ["searchText"]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(ResultsSection, {
        results: __props.results,
        onResultClick: emitResultClick,
        onResultHover: emitResultHover
      }, null, 8, ["results"])], 10, DrawerCompvue_type_script_setup_true_lang_ts_hoisted_1);
    };
  }

}));
;// CONCATENATED MODULE: ./src/components/drawer/DrawerComp.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-67.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-67.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-67.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-67.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/drawer/DrawerComp.vue?vue&type=style&index=0&id=bf85d500&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/drawer/DrawerComp.vue?vue&type=style&index=0&id=bf85d500&lang=scss&scoped=true

;// CONCATENATED MODULE: ./src/components/drawer/DrawerComp.vue



;


const DrawerComp_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(DrawerCompvue_type_script_setup_true_lang_ts, [['__scopeId',"data-v-bf85d500"]])

/* harmony default export */ var DrawerComp = (DrawerComp_exports_);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/CurvedLoading.vue?vue&type=script&setup=true&lang=ts



const CurvedLoadingvue_type_script_setup_true_lang_ts_withScopeId = n => ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.pushScopeId)("data-v-428db4fc"), n = n(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.popScopeId)(), n);

const CurvedLoadingvue_type_script_setup_true_lang_ts_hoisted_1 = /*#__PURE__*/CurvedLoadingvue_type_script_setup_true_lang_ts_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
  class: "clipping"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
  class: "loading"
})], -1));

const CurvedLoadingvue_type_script_setup_true_lang_ts_hoisted_2 = [CurvedLoadingvue_type_script_setup_true_lang_ts_hoisted_1];


/* harmony default export */ var CurvedLoadingvue_type_script_setup_true_lang_ts = (/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  __name: 'CurvedLoading',
  props: {
    color: String
  },

  setup(__props) {
    const props = __props;
    const containerRef = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)();
    const {
      width
    } = dimensionsMixin({
      containerRef
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(width, nv => {
      containerRef.value?.style.setProperty("--container-width", nv + "px");
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(() => props.color, nv => {
      containerRef.value?.style.setProperty("--border-color", nv + "px");
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
      containerRef.value?.style.setProperty("--border-color", props.color || "blue");
      containerRef.value?.style.setProperty("--container-width", width.value + "px");
    });
    return (_ctx, _cache) => {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
        ref_key: "containerRef",
        ref: containerRef,
        class: "wrapper",
        style: {
          "--height": "50px"
        }
      }, CurvedLoadingvue_type_script_setup_true_lang_ts_hoisted_2, 512);
    };
  }

}));
;// CONCATENATED MODULE: ./src/components/CurvedLoading.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-67.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-67.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-67.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-67.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/CurvedLoading.vue?vue&type=style&index=0&id=428db4fc&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/CurvedLoading.vue?vue&type=style&index=0&id=428db4fc&lang=scss&scoped=true

;// CONCATENATED MODULE: ./src/components/CurvedLoading.vue



;


const CurvedLoading_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(CurvedLoadingvue_type_script_setup_true_lang_ts, [['__scopeId',"data-v-428db4fc"]])

/* harmony default export */ var CurvedLoading = (CurvedLoading_exports_);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MobileDetailsSection.vue?vue&type=script&setup=true&lang=ts



const MobileDetailsSectionvue_type_script_setup_true_lang_ts_withScopeId = n => ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.pushScopeId)("data-v-07bde7b3"), n = n(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.popScopeId)(), n);

const MobileDetailsSectionvue_type_script_setup_true_lang_ts_hoisted_1 = /*#__PURE__*/MobileDetailsSectionvue_type_script_setup_true_lang_ts_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
  class: "d-block"
}, null, -1));

const MobileDetailsSectionvue_type_script_setup_true_lang_ts_hoisted_2 = [MobileDetailsSectionvue_type_script_setup_true_lang_ts_hoisted_1];





/* harmony default export */ var MobileDetailsSectionvue_type_script_setup_true_lang_ts = (/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  __name: 'MobileDetailsSection',

  setup(__props) {
    const mobileResultViewContainer = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)();
    const fullScreen = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(false);

    const handleTouchMove = evt => {
      evt.preventDefault();
      const maxHeight = store.state.mapDimensions.height - Math.round(evt.targetTouches[0].clientY);
      mobileResultViewContainer.value?.style.setProperty("max-height", `calc(${maxHeight}px + 1.5rem)`);
    };

    const handleTouchEnd = () => {
      if (!mobileResultViewContainer.value) return;
      addTemporaryTransition();
      const maxHeight = window.getComputedStyle(mobileResultViewContainer.value).maxHeight;
      const maxHeightNumber = Number(maxHeight.slice(0, maxHeight.length - 2));

      if (fullScreen.value) {
        if (maxHeightNumber < store.state.mapDimensions.height * 0.8) {
          closeScreen();
        } else {
          mobileResultViewContainer.value.style.setProperty("max-height", store.state.mapDimensions.height + "px");
        }
      } else {
        if (maxHeightNumber > store.state.mapDimensions.height / 4) {
          mobileResultViewContainer.value.style.setProperty("max-height", store.state.mapDimensions.height + "px");
          mobileResultViewContainer.value.style.setProperty("border-radius", "0");
          fullScreen.value = true;
        } else {
          mobileResultViewContainer.value.style.setProperty("max-height", "3rem");
        }
      }
    };

    const closeScreen = () => {
      fullScreen.value = false;
      mobileResultViewContainer.value?.style.removeProperty("border-radius");
      mobileResultViewContainer.value?.style.removeProperty("max-height");
      addTemporaryTransition();
    };

    const addTemporaryTransition = () => {
      const transitionTime = 0.5;
      mobileResultViewContainer.value?.style.setProperty("transition", transitionTime + "s");
      setTimeout(() => {
        mobileResultViewContainer.value?.style.removeProperty("transition");
      }, transitionTime * 1000);
    };

    return (_ctx, _cache) => {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
        ref_key: "mobileResultViewContainer",
        ref: mobileResultViewContainer,
        class: "mobile-details-section o-hidden pos-relative"
      }, [!fullScreen.value && (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(store).state.reverseLoading ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(CurvedLoading, {
        key: 0,
        class: "curved-loading pos-absolute"
      })) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(IconComponent, {
        name: "close",
        size: 40,
        style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeStyle)([{
          "float": "left"
        }, `visibility: ${fullScreen.value ? 'visible' : 'hidden'};`]),
        class: "close-icon pos-absolute",
        onClick: closeScreen
      }, null, 8, ["style"]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
        class: "drag-button d-block pos-absolute",
        onTouchmove: handleTouchMove,
        onTouchend: handleTouchEnd
      }, MobileDetailsSectionvue_type_script_setup_true_lang_ts_hoisted_2, 32), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
        style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeStyle)(`height: ${(0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(store).state.mapDimensions.height}px;`),
        class: "o-auto"
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(PointDetails, {
        item: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(store).state.selectedMarker
      }, null, 8, ["item"])], 4)], 512);
    };
  }

}));
;// CONCATENATED MODULE: ./src/components/MobileDetailsSection.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-67.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-67.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-67.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-67.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MobileDetailsSection.vue?vue&type=style&index=0&id=07bde7b3&scoped=true&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/MobileDetailsSection.vue?vue&type=style&index=0&id=07bde7b3&scoped=true&lang=scss

;// CONCATENATED MODULE: ./src/components/MobileDetailsSection.vue



;


const MobileDetailsSection_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(MobileDetailsSectionvue_type_script_setup_true_lang_ts, [['__scopeId',"data-v-07bde7b3"]])

/* harmony default export */ var MobileDetailsSection = (MobileDetailsSection_exports_);
;// CONCATENATED MODULE: ./src/apis/index.ts

const createHeaders = token => {
  return {
    'Api-Key': token
  };
};
const createApi = token => {
  return {
    REVERSE: async (lng, lat) => {
      const params = `?lat=${lat}&lng=${lng}`;
      const res = await fetch(urls.reverse + params, {
        headers: createHeaders(token)
      });
      return await res.json();
    },
    SEARCH: async (term, [lng, lat]) => {
      const params = `?term=${term}&lat=${lat}&lng=${lng}`;
      const res = await fetch(urls.search + params, {
        headers: createHeaders(token)
      });
      return await res.json();
    }
  };
};
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Map.vue?vue&type=script&setup=true&lang=ts












const Mapvue_type_script_setup_true_lang_ts_default_ = {
  name: "NeshanMap"
};
/* harmony default export */ var Mapvue_type_script_setup_true_lang_ts = (/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({ ...Mapvue_type_script_setup_true_lang_ts_default_,
  props: {
    mapKey: {
      type: String,
      required: true
    },
    serviceKey: {
      type: String,
      default: ""
    },
    center: {
      type: Object,
      default: null
    },
    zoom: {
      type: Number,
      default: 12
    },
    poi: Boolean,
    traffic: Boolean,
    defaultType: {
      type: String,
      default: "neshan"
    },
    mapTypes: {
      type: Array,
      default: tiles.map(tile => tile.title)
    },
    settingsBoxClass: Array,
    settingsBoxStyle: Object,
    hideSettings: Boolean,
    typesClass: Array,
    hideSearchBox: Boolean,
    hideSearchContainer: Boolean,
    hideResultBox: Boolean,
    resultHoverCallback: Function,
    resultClickCallback: Function,
    markersIconCallback: Function,
    markerHoverCallback: Function,
    popupOnMarkerHover: {
      type: Boolean,
      default: true
    },
    popupOnResultHover: {
      type: Boolean,
      default: true
    },
    zoomOnMarkerClick: {
      type: Boolean,
      default: true
    },
    zoomOnResultClick: {
      type: Boolean,
      default: true
    },
    cluster: {
      type: Boolean,
      default: true
    },
    clusterThreshold: {
      type: Number,
      default: 18
    }
  },
  emits: ["on-zoom", "on-click"],

  setup(__props, {
    expose,
    emit: eventsEmits
  }) {
    const props = __props;
    store.setApi(createApi(props.serviceKey));
    /**
     * Sets the given token for api
     * @param token
     */

    const setToken = token => {
      store.setApi(createApi(token));
    };
    /**
     * Whenever service token changes,
     * applies it to api
     */


    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(() => props.serviceKey, nv => {
      setToken(nv);
    });
    const sanitizedCenter = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(sanitizeLocation(props.center));
    const mapType = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(props.defaultType);
    const reactiveTiles = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.reactive)(tiles.filter(tile => props.mapTypes.includes(tile.title)));
    const popupContainer = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)();
    const persistantContainer = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)();
    const trafficLayer = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(props.traffic);
    const poiLayer = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(props.poi);
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(() => props.traffic, nv => {
      trafficLayer.value = nv;
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(() => props.poi, nv => {
      poiLayer.value = nv;
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(trafficLayer, nv => {
      toggleTraffic(nv);
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(poiLayer, nv => {
      togglePoi(nv);
    });
    /**
     * Switches poi layer
     * @param value - Whether it should be on or off
     */

    const togglePoi = value => {
      store.state.map?.switchPoiLayer(value);
    };
    /**
     * Switches traffic layer
     * @param value - Whether it should be on or off
     */


    const toggleTraffic = value => {
      store.state.map?.switchTrafficLayer(value);
    };
    /**
     * Setups Map, adds serviceToken to api
     */


    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
      const scriptTag = importMap(urls.map);

      scriptTag.onload = () => {
        startMap();
        setupMapEvents();
        store.actions.dimensions.updateBreakpoints();
        store.actions.dimensions.updateMapDimensions(mapContainer);
      };
    });
    /**
     * Adds the map from given url to given script
     * @param url - Url of map or another script
     * @param tagName - Name of the expected tag
     * @returns Created tag
     */

    const importMap = (url, tagName = "my-openlayer") => {
      const foundDoc = document.getElementById(tagName);
      if (foundDoc) return foundDoc; // was already loaded

      const scriptTag = document.createElement("script");
      scriptTag.src = url;
      scriptTag.id = tagName;
      document.getElementsByTagName("head")[0].appendChild(scriptTag);
      return scriptTag;
    };

    const mapContainer = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)();
    /**
     * Starts the map and adds it to element with id='map'
     * Gets the mapKey, zoom, traffic and poi from props.
     * Gets the center from either sanitizedCenter variable or gets it from divice location
     * or Neshan building location.
     */

    const startMap = async () => {
      if (!mapContainer.value) return;
      const coords = sanitizedCenter.value || (await getLocation());
      const newMap = new ol.Map({
        target: mapContainer.value,
        key: props.mapKey,
        // mapType: 'standard-night',
        poi: poiLayer.value,
        traffic: trafficLayer.value,
        view: new ol.View({
          center: ol.proj.fromLonLat(coords),
          zoom: props.zoom,
          smoothExtentConstraint: true // projection: 'EPSG:4326' //Default was EPSG:3857

        })
      });
      store.setMap(newMap); // Currently there is a problem with assigning different map type on initilization

      changeMapType(mapType.value);
      shakeMap();
    };
    /**
     * Changes Map type
     * @param type - Exact name of a given map name
     */


    const changeMapType = type => {
      store.state.map?.setMapType(type);
      mapType.value = type;
    };
    /**
     * Updates map frame so the offset problem is no more.
     */


    const shakeMap = () => {
      setTimeout(() => store.state.map?.updateSize(), 300);
    };

    const {
      setupMapEvents,
      handleResultHover,
      handleResultClick,
      zoom
    } = eventsMixin({
      emits: eventsEmits,
      resultHoverCallback: props.resultHoverCallback,
      resultClickCallback: props.resultClickCallback,
      markerHoverCallback: props.markerHoverCallback,
      zoomOnMarkerClick: props.zoomOnMarkerClick,
      zoomOnResultClick: props.zoomOnResultClick,
      popupOnMarkerHover: props.popupOnMarkerHover,
      popupOnResultHover: props.popupOnResultHover,
      mapContainer,
      popupContainer,
      persistantContainer
    });
    /**
     * Changes cluster source to marker source on cluster threshold passing and vice versa
     */

    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(zoom, (nv, ov) => {
      if (nv >= props.clusterThreshold && ov < props.clusterThreshold) {
        store.actions.markers.toggleClusterSource(store.state.searchMarkers, true);
      } else if (nv < props.clusterThreshold && ov >= props.clusterThreshold) {
        store.actions.markers.toggleClusterSource(store.state.searchMarkers, false);
      }
    });

    const handleSearch = ({
      term = "",
      coords
    }) => {
      const reliableCoords = coords || store.state.mainMarkerCoords || sanitizedCenter.value;
      if (!reliableCoords || !store.state.api) return;
      const options = {
        cluster: props.cluster,
        clusterThreshold: props.clusterThreshold,
        markersIconCallback: props.markersIconCallback
      };
      store.actions.markers.search({
        term,
        coords: reliableCoords
      }, options);
    };
    /**
     * Makes it possible to have access to search function from outside of the component
     */


    expose({
      search: handleSearch
    });
    return (_ctx, _cache) => {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
        ref_key: "mapContainer",
        ref: mapContainer,
        class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(["map pos-relative", {
          small: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(store).getters.screen.small
        }])
      }, [!__props.hideSettings ? (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "settings", {
        key: 0,
        tiles: reactiveTiles,
        mapType: mapType.value,
        poi: poiLayer.value,
        traffic: trafficLayer.value
      }, () => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(SettingsComp, {
        tiles: reactiveTiles,
        mapType: mapType.value,
        "onUpdate:mapType": _cache[0] || (_cache[0] = $event => changeMapType($event)),
        settingsBoxClass: __props.settingsBoxClass,
        traffic: trafficLayer.value,
        "onUpdate:traffic": _cache[1] || (_cache[1] = $event => trafficLayer.value = $event),
        poi: poiLayer.value,
        "onUpdate:poi": _cache[2] || (_cache[2] = $event => poiLayer.value = $event)
      }, null, 8, ["tiles", "mapType", "settingsBoxClass", "traffic", "poi"])]) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), !__props.hideSearchContainer ? (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "search-container", {
        key: 1
      }, () => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(DrawerComp, {
        results: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(store).state.searchResults,
        onSearch: handleSearch,
        onResultClick: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(handleResultClick),
        onResultHover: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(handleResultHover)
      }, null, 8, ["results", "onResultClick", "onResultHover"])]) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)], 2), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(store).getters.screen.small ? (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withDirectives)(((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(MobileDetailsSection, {
        key: 0
      }, null, 512)), [[external_commonjs_vue_commonjs2_vue_root_Vue_.vShow, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(store).state.mobileDrawerShowDetails]]) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
        class: "map-popup-container",
        ref_key: "popupContainer",
        ref: popupContainer
      }, null, 512), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
        class: "map-popup-container",
        ref_key: "persistantContainer",
        ref: persistantContainer
      }, null, 512)], 64);
    };
  }

}));
;// CONCATENATED MODULE: ./src/components/Map.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-67.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-67.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-67.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-67.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Map.vue?vue&type=style&index=0&id=387476da&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/Map.vue?vue&type=style&index=0&id=387476da&lang=scss&scoped=true

;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-67.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-67.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-67.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-67.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Map.vue?vue&type=style&index=1&id=387476da&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/Map.vue?vue&type=style&index=1&id=387476da&lang=scss

;// CONCATENATED MODULE: ./src/components/Map.vue



;



const Map_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Mapvue_type_script_setup_true_lang_ts, [['__scopeId',"data-v-387476da"]])

/* harmony default export */ var components_Map = (Map_exports_);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (components_Map);


}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=NeshanMap.umd.js.map