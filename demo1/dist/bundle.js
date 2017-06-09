/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _neact = __webpack_require__(1);

	var _Router = __webpack_require__(26);

	var _Router2 = _interopRequireDefault(_Router);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/** @jsx h */
	(0, _neact.render)((0, _neact.createElement)(_Router2.default, null), demo);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.utils = exports.PureComponent = exports.Component = exports.createClass = exports.processDOMPropertyHooks = exports.isValidElement = exports.cloneElement = exports.createTextVNode = exports.createVNode = exports.createElement = exports.Children = exports.unmountComponentAtNode = exports.findDOMNode = exports.patch = exports.render = undefined;

	var _render = __webpack_require__(3);

	var _processDOMPropertyHooks = __webpack_require__(16);

	var _processDOMPropertyHooks2 = _interopRequireDefault(_processDOMPropertyHooks);

	var _vnode = __webpack_require__(7);

	var _createElement = __webpack_require__(6);

	var _createClass = __webpack_require__(22);

	var _component = __webpack_require__(23);

	var _component2 = _interopRequireDefault(_component);

	var _pureComponent = __webpack_require__(25);

	var _pureComponent2 = _interopRequireDefault(_pureComponent);

	var _shared = __webpack_require__(4);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var utils = {
	    map: _shared.map,
	    each: _shared.each,
	    inherits: _shared.inherits,
	    bind: _shared.bind,
	    assign: _shared.assign,
	    toArray: _shared.toArray,
	    flatten: _shared.flatten,
	    filter: _shared.filter
	};

	var Children = {
	    map: function map(obj, cb, ctx) {
	        if ((0, _shared.isNullOrUndef)(obj)) return;
	        return (0, _shared.map)((0, _shared.toArray)(obj), cb, ctx);
	    },
	    forEach: function forEach(obj, cb, ctx) {
	        if ((0, _shared.isNullOrUndef)(obj)) return;
	        (0, _shared.each)((0, _shared.toArray)(obj), cb, ctx);
	    },
	    count: function count(children) {
	        return (0, _shared.toArray)(children).length;
	    },
	    only: function only(children) {
	        children = Children.toArray(children);
	        if (children.length !== 1 || !(0, _shared.isVNode)(children[0])) {
	            throw new Error('Children.only() expects only one child.');
	        }
	        return children[0];
	    },

	    toArray: _shared.toArray
	};

	exports.render = _render.render;
	exports.patch = _render._patch;
	exports.findDOMNode = _render.findDOMNode;
	exports.unmountComponentAtNode = _render.unmountComponentAtNode;
	exports.Children = Children;
	exports.createElement = _createElement.createElement;
	exports.createVNode = _vnode.createVNode;
	exports.createTextVNode = _vnode.createTextVNode;
	exports.cloneElement = _createElement.cloneElement;
	exports.isValidElement = _shared.isVNode;
	exports.processDOMPropertyHooks = _processDOMPropertyHooks2['default'];
	exports.createClass = _createClass.createClass;
	exports.Component = _component2['default'];
	exports.PureComponent = _pureComponent2['default'];
	exports.utils = utils;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports._patch = _patch;
	exports.render = render;
	exports.unmountComponentAtNode = unmountComponentAtNode;
	exports.findDOMNode = findDOMNode;

	var _shared = __webpack_require__(4);

	var _mount = __webpack_require__(5);

	var _unmount = __webpack_require__(11);

	var _patch2 = __webpack_require__(21);

	function _patch(lastVNode, nextVNode) {
	    if (!(0, _shared.isInvalid)(lastVNode)) {
	        if ((0, _shared.isDOM)(lastVNode)) {
	            render(nextVNode, lastVNode);
	        } else if ((0, _shared.isVNode)(lastVNode) && (0, _shared.isVNode)(nextVNode)) {
	            if (lastVNode.dom) {
	                (0, _patch2.patch)(lastVNode, nextVNode);
	                if (lastVNode.parentVNode) {
	                    (0, _shared.assign)(lastVNode, nextVNode);
	                }
	            } else {
	                (0, _shared.throwError)('patch error vNode');
	            }
	        }

	        return nextVNode;
	    }
	}

	function render(vNode, parentDom) {
	    if (document.body === parentDom) {
	        (0, _shared.warning)('you cannot render() to the "document.body". Use an empty element as a container instead.');
	    }

	    var lastVnode = parentDom.__NeactRootNode;

	    if (!lastVnode) {
	        if (!(0, _shared.isInvalid)(vNode) && (0, _shared.isVNode)(vNode)) {
	            (0, _mount.mount)(vNode, parentDom, null, {});
	            parentDom.__NeactRootNode = vNode;
	            return vNode._instance || vNode.dom;
	        } else {
	            (0, _shared.throwError)('isInvalid VNode');
	        }
	    } else {
	        if ((0, _shared.isInvalid)(vNode)) {
	            (0, _unmount.unmount)(lastVnode, parentDom);
	            parentDom.__NeactRootNode = null;
	            delete parentDom.__NeactRootNode;
	        } else if ((0, _shared.isVNode)(vNode)) {
	            (0, _patch2.patch)(lastVnode, vNode);
	            parentDom.__NeactRootNode = vNode;
	            return vNode._instance || vNode.dom;
	        } else {
	            (0, _shared.throwError)('isInvalid VNode');
	        }
	    }
	}

	function unmountComponentAtNode(dom) {
	    if (dom.__NeactRootNode) {
	        (0, _unmount.unmount)(dom.__NeactRootNode, dom);
	        delete dom.__NeactRootNode;
	    }
	}

	function findDOMNode(vNode) {
	    if (!(0, _shared.isInvalid)(_shared.isVNode)) {
	        if ((0, _shared.isVNode)(vNode)) {
	            return vNode.dom;
	        } else if (vNode._vNode) {
	            return vNode._vNode.dom;
	        }
	    }
	    return null;
	}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	exports.toArray = toArray;
	exports.isUndefined = isUndefined;
	exports.isStatefulComponent = isStatefulComponent;
	exports.isString = isString;
	exports.isNumber = isNumber;
	exports.isTrue = isTrue;
	exports.isNull = isNull;
	exports.isStringOrNumber = isStringOrNumber;
	exports.isNullOrUndef = isNullOrUndef;
	exports.isInvalid = isInvalid;
	exports.isFunction = isFunction;
	exports.isAttrAnEvent = isAttrAnEvent;
	exports.isDefined = isDefined;
	exports.isObject = isObject;
	exports.isDOM = isDOM;
	exports.isVNode = isVNode;
	exports.isSameVNode = isSameVNode;
	exports.isVoidVNode = isVoidVNode;
	exports.isEmptyVNode = isEmptyVNode;
	exports.isTextVNode = isTextVNode;
	exports.isElementVNode = isElementVNode;
	exports.isComponentVNode = isComponentVNode;
	exports.throwError = throwError;
	exports.warning = warning;
	exports.inherits = inherits;
	exports.each = each;
	exports.map = map;
	exports.filter = filter;
	exports.bind = bind;
	exports.assign = assign;
	var ArrayProto = Array.prototype;
	var nativeForEach = ArrayProto.forEach;
	var nativeMap = ArrayProto.map;
	var nativeFilter = ArrayProto.filter;

	var objToString = Object.prototype.toString;

	var emptyObject = exports.emptyObject = {};

	var isArray = exports.isArray = Array.isArray || function (s) {
	    return objToString.call(s) === '[object Array]';
	};

	function toArray(obj) {
	    return isArray(obj) ? obj : [obj];
	}

	function isUndefined(obj) {
	    return obj === undefined;
	}

	function isStatefulComponent(o) {
	    return !isUndefined(o.prototype) && !isUndefined(o.prototype.render);
	}

	function isString(obj) {
	    return typeof obj === 'string';
	}

	function isNumber(obj) {
	    return typeof obj === 'number';
	}

	function isTrue(obj) {
	    return obj === true;
	}

	function isNull(obj) {
	    return obj === null;
	}

	function isStringOrNumber(obj) {
	    return isString(obj) || isNumber(obj);
	}

	function isNullOrUndef(obj) {
	    return isUndefined(obj) || isNull(obj);
	}

	function isInvalid(obj) {
	    return isNull(obj) || obj === false || isTrue(obj) || isUndefined(obj);
	}

	function isFunction(obj) {
	    return typeof obj === 'function';
	}

	function isAttrAnEvent(attr) {
	    return attr[0] === 'o' && attr[1] === 'n' && attr.length > 3;
	}

	function isDefined(obj) {
	    return obj !== undefined;
	}

	function isObject(o) {
	    return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object';
	}

	function isDOM(obj) {
	    return obj && obj.nodeType === 1 && typeof obj.nodeName == 'string';
	}

	function isVNode(VNode) {
	    return VNode && isObject(VNode) && VNode.$$isVNode;
	}

	function isSameVNode(vnode1, vnode2) {
	    var isSame = vnode1.key === vnode2.key && vnode1.type === vnode2.type;
	    return isSame;
	}

	function isVoidVNode(vNode) {
	    return vNode.type === '#comment';
	}

	function isEmptyVNode(vNode) {
	    return vNode.type === '#comment';
	}

	function isTextVNode(vNode) {
	    return vNode.type === '#text';
	}

	function isElementVNode(vNode) {
	    return isString(vNode.type) && vNode.type[0] !== '#';
	}

	function isComponentVNode(vNode) {
	    return !isString(vNode.type); // && isFunction(vNode.type)
	}

	function throwError(message) {
	    if (!message) {
	        message = 'a runtime error occured!';
	    }
	    throw new Error('Neact Error: ' + message);
	}

	function warning(msg) {
	    if (console) {
	        console.warn(msg);
	    }
	}

	var EMPTY_OBJ = exports.EMPTY_OBJ = {};

	function inherits(cls, base, proto) {
	    function F() {}
	    F.prototype = base.prototype;
	    cls.prototype = new F();

	    if (proto) {
	        for (var prop in proto) {
	            cls.prototype[prop] = proto[prop];
	        }
	    }

	    cls.constructor = cls;
	}

	/**
	 * 数组或对象遍历
	 * @param {Object|Array} obj
	 * @param {Function} cb
	 * @param {*} [context]
	 */
	function each(obj, cb, context) {
	    if (!(obj && cb)) {
	        return;
	    }
	    if (obj.forEach && obj.forEach === nativeForEach) {
	        obj.forEach(cb, context);
	    } else if (obj.length === +obj.length) {
	        for (var i = 0, len = obj.length; i < len; i++) {
	            cb.call(context, obj[i], i, obj);
	        }
	    } else {
	        for (var key in obj) {
	            if (obj.hasOwnProperty(key)) {
	                cb.call(context, obj[key], key, obj);
	            }
	        }
	    }
	}

	/**
	 * 数组映射
	 * @param {Array} obj
	 * @param {Function} cb
	 * @param {*} [context]
	 * @return {Array}
	 */
	function map(obj, cb, context) {
	    if (!(obj && cb)) {
	        return;
	    }
	    if (obj.map && obj.map === nativeMap) {
	        return obj.map(cb, context);
	    } else {
	        var result = [];
	        for (var i = 0, len = obj.length; i < len; i++) {
	            result.push(cb.call(context, obj[i], i, obj));
	        }
	        return result;
	    }
	}

	/**
	 * 数组过滤
	 * @param {Array} obj
	 * @param {Function} cb
	 * @param {*} [context]
	 * @return {Array}
	 */
	function filter(obj, cb, context) {
	    if (!(obj && cb)) {
	        return;
	    }
	    if (obj.filter && obj.filter === nativeFilter) {
	        return obj.filter(cb, context);
	    } else {
	        var result = [];
	        for (var i = 0, len = obj.length; i < len; i++) {
	            if (cb.call(context, obj[i], i, obj)) {
	                result.push(obj[i]);
	            }
	        }
	        return result;
	    }
	}

	function bind(func, context) {
	    return function () {
	        func.apply(context, arguments);
	    };
	}

	var flatten = exports.flatten = function (input) {
	    var output = [],
	        idx = 0;
	    for (var i = 0, length = input && input.length; i < length; i++) {
	        var value = input[i];
	        if (isArray(value)) {
	            value = flatten(value);
	            var j = 0,
	                len = value.length;
	            output.length += len;
	            while (j < len) {
	                output[idx++] = value[j++];
	            }
	        } else {
	            output[idx++] = value;
	        }
	    }
	    return output;
	};

	function assign(target) {
	    if (Object.assign) {
	        return Object.assign.apply(Object, arguments);
	    }

	    if (target === undefined || target === null) {
	        throw new TypeError('Cannot convert undefined or null to object');
	    }

	    var output = Object(target);
	    for (var index = 1; index < arguments.length; index++) {
	        var source = arguments[index];
	        if (source !== undefined && source !== null) {
	            for (var nextKey in source) {
	                if (source.hasOwnProperty(nextKey)) {
	                    output[nextKey] = source[nextKey];
	                }
	            }
	        }
	    }
	    return output;
	};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	//import processElement from './processElement';

	exports.mount = mount;
	exports.mountText = mountText;
	exports.mountVoid = mountVoid;
	exports.mountElement = mountElement;
	exports.mountArrayChildren = mountArrayChildren;
	exports.mountComponent = mountComponent;
	exports.normalizeComponentChildren = normalizeComponentChildren;

	var _createElement = __webpack_require__(6);

	var _vnode = __webpack_require__(7);

	var _callbackQueue = __webpack_require__(9);

	var _callbackQueue2 = _interopRequireDefault(_callbackQueue);

	var _currentOwner = __webpack_require__(8);

	var _currentOwner2 = _interopRequireDefault(_currentOwner);

	var _shared = __webpack_require__(4);

	var _domUtils = __webpack_require__(10);

	var _refs = __webpack_require__(12);

	var _createComponentInstance = __webpack_require__(14);

	var _createComponentInstance2 = _interopRequireDefault(_createComponentInstance);

	var _processDOMProperty = __webpack_require__(15);

	var _processDOMEvents = __webpack_require__(13);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function mount(vNode, parentDom, callback, context, isSVG) {
	    var isUndefCallbacks = (0, _shared.isNullOrUndef)(callback);
	    var r = void 0;
	    callback = callback || new _callbackQueue2['default']();

	    if ((0, _shared.isElementVNode)(vNode)) {
	        r = mountElement(vNode, parentDom, callback, context, isSVG);
	    } else if ((0, _shared.isTextVNode)(vNode)) {
	        r = mountText(vNode, parentDom);
	    } else if ((0, _shared.isComponentVNode)(vNode)) {
	        r = mountComponent(vNode, parentDom, callback, context, isSVG);
	    } else if ((0, _shared.isVoidVNode)(vNode)) {
	        r = mountVoid(vNode, parentDom);
	    } else {
	        (0, _shared.throwError)('mount() expects a valid VNode, instead it received an object with the type "' + (typeof vNode === 'undefined' ? 'undefined' : _typeof(vNode)) + '".');
	    }

	    if (isUndefCallbacks) {
	        callback.notifyAll();
	    }
	    return r;
	}

	function mountText(vNode, parentDom) {
	    var dom = document.createTextNode(vNode.children);

	    vNode.dom = dom;
	    if (parentDom) {
	        (0, _domUtils.appendChild)(parentDom, dom);
	    }
	    return dom;
	}

	function mountVoid(vNode, parentDom) {
	    var dom = document.createComment('emptyNode');

	    vNode.dom = dom;
	    if (parentDom) {
	        (0, _domUtils.appendChild)(parentDom, dom);
	    }
	    return dom;
	}

	function mountElement(vNode, parentDom, callback, context, isSVG) {
	    var tag = vNode.type;

	    if (!isSVG) {
	        isSVG = vNode.isSVG;
	    }

	    var dom = (0, _domUtils.documentCreateElement)(tag, isSVG);
	    var children = vNode.children;
	    var props = vNode.props;
	    var events = vNode.events;
	    var hooks = vNode.hooks || {};

	    //if (!isNull(parentDom)) {
	    //    appendChild(parentDom, dom);
	    //}

	    vNode.dom = dom;

	    if (!(0, _shared.isNullOrUndef)(hooks.beforeCreate)) {
	        hooks.beforeCreate(vNode);
	    }

	    if (!(0, _shared.isNull)(children)) {
	        if ((0, _shared.isArray)(children)) {
	            mountArrayChildren(children, dom, callback, context, isSVG);
	        } else if ((0, _shared.isVNode)(children)) {
	            mount(children, dom, callback, context, isSVG);
	        }
	    }

	    //processElement(dom, vNode);

	    (0, _processDOMProperty.createDOMProperty)(props, isSVG, vNode);
	    (0, _processDOMEvents.createDOMEvents)(vNode);

	    if (!(0, _shared.isNull)(vNode.ref)) {
	        callback.enqueue(function () {
	            return (0, _refs.attachRef)(vNode);
	        });
	    }

	    if (!(0, _shared.isNull)(parentDom)) {
	        (0, _domUtils.appendChild)(parentDom, dom);
	    }

	    if (!(0, _shared.isNullOrUndef)(hooks.create)) {
	        callback.enqueue(function () {
	            return hooks.create(vNode);
	        });
	    }
	    return dom;
	}

	function mountArrayChildren(children, dom, callback, context, isSVG) {
	    for (var i = 0; i < children.length; i++) {
	        var child = children[i];

	        if (!(0, _shared.isInvalid)(child)) {
	            mount(child, dom, callback, context, isSVG);
	        }
	    }
	}

	function mountComponent(vNode, parentDom, callback, context, isSVG) {
	    var type = vNode.type;
	    var props = vNode.props;
	    var hooks = vNode.hooks || {};
	    var isClass = (0, _shared.isStatefulComponent)(type);
	    var dom = void 0,
	        children = void 0;

	    if (isClass) {
	        var inst = (0, _createComponentInstance2['default'])(vNode, context, isSVG);
	        vNode._instance = inst;

	        inst._pendingSetState = true;

	        if (inst.componentWillMount) {
	            inst.componentWillMount();
	            if (inst._pendingStateQueue) {
	                inst.state = inst._processPendingState(inst.props, inst.context);
	            }
	        }

	        inst._ignoreSetState = true;
	        _currentOwner2['default'].current = inst;
	        vNode.children = inst.render(inst.props, inst.state, inst.context);
	        _currentOwner2['default'].current = null;
	        inst._ignoreSetState = false;
	        normalizeComponentChildren(vNode);
	        inst._vNode = vNode;
	        //inst._renderedVNode = vNode.children;
	        inst._pendingSetState = false;

	        vNode.dom = dom = mount(vNode.children, parentDom, callback, inst._childContext, isSVG);

	        inst._callbacks = new _callbackQueue2['default']();

	        if (!(0, _shared.isNull)(vNode.ref)) {
	            callback.enqueue(function () {
	                return (0, _refs.attachRef)(vNode);
	            });
	        }

	        if (inst.componentDidMount) {
	            callback.enqueue(function () {
	                return inst.componentDidMount();
	            });
	        }

	        if (!(0, _shared.isNullOrUndef)(hooks.create)) {
	            callback.enqueue(function () {
	                return hooks.create(vNode);
	            });
	        }

	        if (inst._pendingCallbacks) {
	            callback.enqueue(function () {
	                return inst._processPendingCallbacks();
	            });
	        }
	    } else {
	        //Function Component
	        if (!(0, _shared.isNullOrUndef)(props.onComponentWillMount)) {
	            props.onComponentWillMount(vNode);
	        }

	        vNode.children = type(props, context);
	        normalizeComponentChildren(vNode);
	        vNode.dom = dom = mount(vNode.children, parentDom, callback, context, isSVG);

	        if (!(0, _shared.isNull)(vNode.ref)) {
	            callback.enqueue(function () {
	                return (0, _refs.attachRef)(vNode);
	            });
	        }

	        if (!(0, _shared.isNullOrUndef)(props.onComponentDidMount)) {
	            callback.enqueue(function () {
	                return props.onComponentDidMount(vNode);
	            });
	        }

	        if (!(0, _shared.isNullOrUndef)(hooks.create)) {
	            callback.enqueue(function () {
	                return hooks.create(vNode);
	            });
	        }
	    }

	    return dom;
	}

	function normalizeComponentChildren(vNode) {
	    var children = vNode.children;

	    if ((0, _shared.isArray)(children)) {
	        (0, _shared.throwError)('a valid Neact VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
	    } else if ((0, _shared.isInvalid)(children)) {
	        vNode.children = (0, _vnode.createVoidVNode)();
	    } else if ((0, _shared.isStringOrNumber)(children)) {
	        vNode.children = (0, _vnode.createTextVNode)(children);
	    }

	    vNode.children.parentVNode = vNode;

	    return vNode;
	}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.createElement = createElement;
	exports.cloneElement = cloneElement;

	var _shared = __webpack_require__(4);

	var _vnode = __webpack_require__(7);

	var _currentOwner = __webpack_require__(8);

	var _currentOwner2 = _interopRequireDefault(_currentOwner);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function createElement(type, config) {
	    if ((0, _shared.isInvalid)(type) || (0, _shared.isObject)(type) || (0, _shared.isNumber)(type)) {
	        throw new Error('Neact Error: createElement() type parameter cannot be undefined, null, false or true, It must be a string, class or function.');
	    }

	    for (var _len = arguments.length, _children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	        _children[_key - 2] = arguments[_key];
	    }

	    var prop = void 0,
	        children = (0, _shared.flatten)(_children),
	        props = {},
	        events = null,
	        hooks = null,
	        key = null,
	        ref = null,
	        isSVG = false;

	    if (children.length === 1) {
	        children = children[0];
	    } else if (children.length === 0) {
	        children = null;
	    }

	    if (!(0, _shared.isNullOrUndef)(config)) {
	        for (prop in config) {
	            if (prop === 'key') {
	                key = '' + config.key;
	            } else if (prop === 'ref') {
	                ref = config.ref;
	            } else if (prop === 'hooks') {
	                hooks = config.hooks;
	            } else if ((0, _shared.isString)(type) && (0, _shared.isAttrAnEvent)(prop)) {
	                if (!events) {
	                    events = {};
	                }
	                events[prop.toLowerCase()] = config[prop];
	            } else {
	                props[prop] = config[prop];
	            }
	        }
	    }

	    //class or function.
	    if (!(0, _shared.isString)(type) && type.defaultProps) {
	        var defaultProps = type.defaultProps;
	        for (prop in defaultProps) {
	            if (props[prop] === undefined) {
	                props[prop] = defaultProps[prop];
	            }
	        }
	    }

	    if (!children && props.children) {
	        children = props.children;
	    }

	    delete props.children;

	    if ((0, _shared.isString)(type)) {
	        if (type[0] === 's' && type[1] === 'v' && type[2] === 'g') {
	            isSVG = true;
	        }

	        if (props.dangerouslySetInnerHTML && !(0, _shared.isNullOrUndef)(children)) {
	            (0, _shared.throwError)('Can only set one of `children` or `props.dangerouslySetInnerHTML`');
	        }
	    }

	    return (0, _vnode.createVNode)(type, props, children, events, hooks, ref, key, isSVG, _currentOwner2['default'].current);
	}

	function cloneElement(element, config) {
	    if (!(0, _shared.isVNode)(element)) {
	        return element;
	    }
	    if ((0, _shared.isTextVNode)(element)) {
	        return (0, _vnode.createTextVNode)(element.children);
	    }
	    if ((0, _shared.isEmptyVNode)(element)) {
	        return (0, _vnode.createEmptyVNode)();
	    }

	    for (var _len2 = arguments.length, _children = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        _children[_key2 - 2] = arguments[_key2];
	    }

	    var prop = void 0,
	        i = void 0,
	        child = void 0,
	        children = (0, _shared.flatten)(_children),
	        type = element.type,
	        props = (0, _shared.assign)({}, element.props);

	    if (children.length === 1) {
	        children = children[0];
	    } else if (children.length === 0) {
	        children = null;
	    }

	    var key = element.key;
	    var ref = element.ref;
	    var hooks = element.hooks;
	    var events = element.events;

	    var owner = element._owner;

	    if (!(0, _shared.isNullOrUndef)(config)) {
	        for (prop in config) {
	            if (prop === 'key') {
	                key = key ? key : '' + config.key;
	            } else if (prop === 'ref') {
	                ref = ref ? ref : config.ref;
	            } else if (prop === 'hooks') {
	                hooks = hooks ? (0, _shared.assign)(hooks, config.hooks) : config.hooks;
	            } else if ((0, _shared.isString)(type) && (0, _shared.isAttrAnEvent)(prop)) {
	                if (!events) {
	                    events = {};
	                }
	                events[prop.toLowerCase()] = config[prop];
	            } else {
	                props[prop] = config[prop];
	            }
	        }
	    }

	    if (!children && config && config.children) {
	        children = config.children;
	    }

	    delete props.children;

	    var newChildren = [],
	        oldChildren = (0, _shared.isComponentVNode)(element) ? element.props.children : element.children;

	    children = children ? [].concat(oldChildren, children) : oldChildren;

	    if (children) {
	        if ((0, _shared.isArray)(children)) {
	            for (i = 0; i < children.length; i++) {
	                child = children[i];
	                if (!child) {
	                    continue;
	                }
	                newChildren.push((0, _shared.isVNode)(child) ? cloneElement(child) : child);
	            }
	            if (newChildren.length === 1) {
	                newChildren = newChildren[0];
	            } else if (newChildren.length === 0) {
	                newChildren = null;
	            }
	        } else {
	            newChildren = cloneElement(children);
	        }
	    }

	    return (0, _vnode.createVNode)(type, props, newChildren, events, hooks, ref, key, element.isSVG, _currentOwner2['default'].current);
	}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.emptyVNode = exports.createVoidVNode = undefined;
	exports.createEmptyVNode = createEmptyVNode;
	exports.createTextVNode = createTextVNode;
	exports.createVNode = createVNode;

	var _shared = __webpack_require__(4);

	function createEmptyVNode() {
	    return createVNode('#comment', null, null, null, null, null, null, false, null, true);
	}

	var createVoidVNode = exports.createVoidVNode = createEmptyVNode;

	var emptyVNode = exports.emptyVNode = createEmptyVNode();

	function createTextVNode(text) {
	    return createVNode('#text', null, text, null, null, null, null, false, null, true);
	}

	function createVNode(type, props, children, events, hooks, ref, key, isSVG, owner) {
	    var noNormalise = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : false;

	    var vNode = {
	        $$isVNode: true,
	        type: type,
	        key: key === undefined ? null : key,
	        ref: ref === undefined ? null : ref,
	        props: props === undefined ? null : props,
	        isSVG: isSVG === undefined ? null : isSVG,
	        children: children === undefined ? null : children,
	        parentVNode: null,
	        events: events || null,
	        hooks: hooks || null,
	        dom: null,
	        _owner: owner || null
	    };

	    if (!noNormalise) {
	        normalize(vNode);
	    }

	    return vNode;
	}

	function normalize(vNode) {
	    var isComponent = (0, _shared.isComponentVNode)(vNode);

	    if (!(0, _shared.isInvalid)(vNode.children)) {
	        vNode.children = normalizeChildren(vNode.children, isComponent ? null : vNode);
	    }

	    if (isComponent) {
	        if (!vNode.props) {
	            vNode.props = {};
	        }
	        vNode.props.children = vNode.children;
	        vNode.children = null;
	    }
	}

	function normalizeChildren(children, parentVNode) {
	    if ((0, _shared.isArray)(children)) {
	        return normalizeVNodes(children, parentVNode);
	    } else if ((0, _shared.isStringOrNumber)(children)) {
	        children = createTextVNode(children);
	    }
	    if ((0, _shared.isVNode)(children)) {
	        children.parentVNode = parentVNode;
	    }
	    return children;
	}

	function normalizeVNodes(nodes, parentVNode) {
	    var newNodes = [];

	    for (var i = 0; i < nodes.length; i++) {
	        var n = nodes[i];
	        if ((0, _shared.isInvalid)(n)) {
	            continue;
	        }
	        if ((0, _shared.isStringOrNumber)(n)) {
	            n = createTextVNode(n);
	        }

	        n.parentVNode = parentVNode;

	        newNodes.push(n);
	    }

	    return newNodes.length > 0 ? newNodes : null;
	}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var CurrentOwner = {
	    current: null
	};

	exports['default'] = CurrentOwner;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = CallbackQueue;
	function CallbackQueue() {
	    this.listeners = [];
	}
	CallbackQueue.prototype.enqueue = function (callback) {
	    this.listeners.push(callback);
	};

	CallbackQueue.prototype.notifyAll = function () {
	    var cbs = this.listeners;
	    this.listeners = [];
	    for (var i = 0; i < cbs.length; i++) {
	        cbs[i]();
	    }
	};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.appendChild = appendChild;
	exports.insertBefore = insertBefore;
	exports.nextSibling = nextSibling;
	exports.removeChild = removeChild;
	exports.documentCreateElement = documentCreateElement;
	exports.setTextContent = setTextContent;
	exports.updateTextContent = updateTextContent;
	exports.replaceWithNewNode = replaceWithNewNode;
	exports.replaceChild = replaceChild;
	exports.addEventListener = addEventListener;
	exports.removeEventListener = removeEventListener;

	var _unmount = __webpack_require__(11);

	var _mount = __webpack_require__(5);

	var svgNS = 'http://www.w3.org/2000/svg';

	function appendChild(parentDom, dom) {
	    parentDom.appendChild(dom);
	}

	function insertBefore(parentNode, newNode, referenceNode) {
	    parentNode.insertBefore(newNode, referenceNode);
	}

	function nextSibling(node) {
	    return node.nextSibling;
	}

	function removeChild(parentDom, dom) {
	    parentDom.removeChild(dom);
	}

	function documentCreateElement(tag, isSVG) {
	    if (isSVG === true) {
	        return document.createElementNS(svgNS, tag);
	    } else {
	        return document.createElement(tag);
	    }
	}

	function setTextContent(node, text) {
	    if (node.nodeType === 3) {
	        node.data = text;
	    } else {
	        if ('textContent' in node) {
	            node.textContent = text;
	        } else {
	            node.innerText = text;
	        }
	    }
	}

	function updateTextContent(dom, text) {
	    dom.firstChild.nodeValue = text;
	}

	function replaceWithNewNode(lastNode, nextNode, parentDom, callback, context, isSVG) {
	    (0, _unmount.unmount)(lastNode, null);
	    var dom = (0, _mount.mount)(nextNode, null, callback, context, isSVG);

	    nextNode.dom = dom;
	    replaceChild(parentDom, dom, lastNode.dom);
	}

	function replaceChild(parentDom, nextDom, lastDom) {
	    if (!parentDom) {
	        parentDom = lastDom.parentNode;
	    }
	    parentDom.replaceChild(nextDom, lastDom);
	}

	function addEventListener(node, name, fn) {
	    if (typeof node.addEventListener == "function") {
	        node.addEventListener(name, fn, false);
	    } else if (typeof node.attachEvent != "undefined") {
	        var attachEventName = "on" + name;
	        node.attachEvent(attachEventName, fn);
	    }
	}

	function removeEventListener(node, name, fn) {
	    if (typeof node.removeEventListener == "function") {
	        node.removeEventListener(name, fn, false);
	    } else if (typeof node.detachEvent != "undefined") {
	        var attachEventName = "on" + name;
	        node.detachEvent(attachEventName, fn);
	    }
	}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.unmountElement = unmountElement;
	exports.unmountComponent = unmountComponent;
	exports.unmount = unmount;

	var _shared = __webpack_require__(4);

	var _refs = __webpack_require__(12);

	var _domUtils = __webpack_require__(10);

	var _processDOMEvents = __webpack_require__(13);

	var _callbackQueue = __webpack_require__(9);

	var _callbackQueue2 = _interopRequireDefault(_callbackQueue);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function unmountVoidOrText(vNode, parentDom) {
	    if (parentDom) {
	        (0, _domUtils.removeChild)(parentDom, vNode.dom);
	    }
	}

	function unmountChildren(children, callback) {
	    if ((0, _shared.isArray)(children)) {
	        for (var i = 0; i < children.length; i++) {
	            var child = children[i];

	            if (!(0, _shared.isInvalid)(child) && (0, _shared.isVNode)(child)) {
	                unmount(child, null, callback);
	            }
	        }
	    } else if ((0, _shared.isVNode)(children)) {
	        unmount(children, null, callback);
	    }
	}

	function unmountElement(vNode, parentDom, callback) {
	    var dom = vNode.dom;
	    var events = vNode.events;
	    var hooks = vNode.hooks || {};
	    var children = vNode.children;

	    if (!(0, _shared.isNull)(vNode.ref)) {
	        (0, _refs.detachRef)(vNode);
	    }

	    (0, _processDOMEvents.destroyDOMEvents)(vNode);

	    if (parentDom) {
	        (0, _domUtils.removeChild)(parentDom, dom);
	    }

	    if (!(0, _shared.isNullOrUndef)(children)) {
	        unmountChildren(children, callback);
	    }

	    if (hooks.destroy) {
	        hooks.destroy(vNode);
	    }
	}

	function unmountComponent(vNode, parentDom, callback) {
	    var inst = vNode._instance;
	    var isClass = (0, _shared.isStatefulComponent)(vNode.type);
	    var children = vNode.children;
	    var props = vNode.props;
	    var hooks = vNode.hooks || {};
	    var dom = vNode.dom;

	    if (parentDom) {
	        (0, _domUtils.removeChild)(parentDom, vNode.dom);
	    }

	    if (isClass) {
	        if (!inst._unmounted) {
	            inst._ignoreSetState = true;
	            //TODO: beforeUnmount
	            if (inst.componentWillUnmount) {
	                inst.componentWillUnmount();
	            }

	            if (!(0, _shared.isNull)(vNode.ref)) {
	                (0, _refs.detachRef)(vNode);
	            }

	            unmount(children, null, callback);

	            inst._unmounted = true;
	            inst._ignoreSetState = false;

	            if (inst.componentDidUnmount) {
	                inst.componentDidUnmount();
	            }
	        }
	    } else {
	        if (!(0, _shared.isNullOrUndef)(props.onComponentWillUnmount)) {
	            props.onComponentWillUnmount(vNode);
	        }

	        if (!(0, _shared.isNull)(vNode.ref)) {
	            (0, _refs.detachRef)(vNode);
	        }

	        unmount(children, null, callback);

	        if (!(0, _shared.isNullOrUndef)(props.onComponentDidUnmount)) {
	            props.onComponentDidUnmount(vNode);
	        }
	    }

	    if (hooks.destroy) {
	        hooks.destroy(vNode);
	    }
	}

	function unmount(vNode, parentDom, callback) {
	    var isUndefCallbacks = (0, _shared.isNullOrUndef)(callback);
	    callback = callback || new _callbackQueue2['default']();

	    if ((0, _shared.isElementVNode)(vNode)) {
	        unmountElement(vNode, parentDom, callback);
	    } else if ((0, _shared.isVoidVNode)(vNode) || (0, _shared.isTextVNode)(vNode)) {
	        unmountVoidOrText(vNode, parentDom);
	    } else if ((0, _shared.isComponentVNode)(vNode)) {
	        unmountComponent(vNode, parentDom, callback);
	    }

	    if (isUndefCallbacks) {
	        callback.notifyAll();
	    }
	}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.shouldUpdateRefs = shouldUpdateRefs;
	exports.detachRef = detachRef;
	exports.attachRef = attachRef;
	function shouldUpdateRefs(lastVNode, nextVNode) {
	    var lastRef = lastVNode.ref;
	    var nextRef = nextVNode.ref;
	    var lastOwner = lastVNode._owner;
	    var nextOwner = nextVNode._owner;
	    return lastRef !== nextRef || typeof nextRef === 'string' && nextOwner !== lastOwner;
	}

	function detachRef(vNode) {
	    var ref = vNode.ref;
	    var owner = vNode._owner;

	    if (typeof ref === 'function') {
	        ref(null);
	    } else if (ref && owner) {
	        delete owner.refs[ref];
	    }
	}

	function attachRef(vNode) {
	    var ref = vNode.ref;
	    var owner = vNode._owner;
	    var target = vNode._instance || vNode.dom;

	    if (typeof ref === 'function') {
	        ref(target);
	    } else if (ref && owner) {
	        owner.refs[ref] = target;
	    }
	}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.createDOMEvents = createDOMEvents;
	exports.updateDOMEvents = updateDOMEvents;
	exports.destroyDOMEvents = destroyDOMEvents;

	var _domUtils = __webpack_require__(10);

	var _vnode = __webpack_require__(7);

	var _shared = __webpack_require__(4);

	function ename(s) {
	    return s.replace('on', '');
	}

	function invokeHandler(handler, vnode, event) {
	    var el = vnode.dom;
	    if (typeof handler === "function") {
	        // call function handler
	        handler.call(el, event, vnode);
	    } else if ((0, _shared.isObject)(handler)) {
	        // call handler with arguments
	        if (typeof handler[0] === "function") {
	            // special case for single argument for performance
	            if (handler.length === 2) {
	                handler[0].call(el, handler[1], event, vnode);
	            } else {
	                var args = handler.slice(1);
	                args.push(event);
	                args.push(vnode);
	                handler[0].apply(el, args);
	            }
	        } else {
	            // call multiple handlers
	            for (var i = 0; i < handler.length; i++) {
	                invokeHandler(handler[i], vnode, event);
	            }
	        }
	    }
	}

	function handleEvent(event, vnode) {
	    var name = 'on' + event.type,
	        on = vnode.events;

	    // call event handler(s) if exists
	    if (on && on[name]) {
	        invokeHandler(on[name], vnode, event);
	    }
	}

	function createListener() {
	    function handler(e) {
	        e = e || event;
	        handleEvent(e, handler.vnode);
	    }
	    return handler;
	}

	function createDOMEvents(vNode) {
	    updateDOMEvents(_vnode.emptyVNode, vNode);
	}

	function updateDOMEvents(oldVnode, vnode) {
	    var oldOn = oldVnode.events,
	        oldListener = oldVnode._listener,
	        oldElm = oldVnode.dom,
	        on = vnode && vnode.events,
	        elm = vnode && vnode.dom,
	        name;

	    // optimization for reused immutable handlers
	    if (oldOn === on) {
	        return;
	    }

	    // remove existing listeners which no longer used
	    if (oldOn && oldListener) {
	        // if element changed or deleted we remove all existing listeners unconditionally
	        if (!on) {
	            for (name in oldOn) {
	                // remove listener if element was changed or existing listeners removed
	                (0, _domUtils.removeEventListener)(oldElm, ename(name), oldListener);
	            }
	        } else {
	            for (name in oldOn) {
	                // remove listener if existing listener removed
	                if (!on[name]) {
	                    (0, _domUtils.removeEventListener)(oldElm, ename(name), oldListener);
	                }
	            }
	        }
	    }

	    // add new listeners which has not already attached
	    if (on) {
	        // reuse existing listener or create new
	        var listener = vnode._listener = oldVnode._listener || createListener();
	        // update vnode for listener
	        listener.vnode = vnode;

	        // if element changed or added we add all needed listeners unconditionally
	        if (!oldOn) {
	            for (name in on) {
	                // add listener if element was changed or new listeners added
	                (0, _domUtils.addEventListener)(elm, ename(name), listener);
	            }
	        } else {
	            for (name in on) {
	                // add listener if new listener added
	                if (!oldOn[name]) {
	                    (0, _domUtils.addEventListener)(elm, ename(name), listener);
	                }
	            }
	        }
	    }
	}

	function destroyDOMEvents(vNode) {
	    updateDOMEvents(vNode, _vnode.emptyVNode);
	}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createComponentInstance;

	var _shared = __webpack_require__(4);

	function createComponentInstance(vNode, context, isSVG) {
	    var type = vNode.type;
	    var props = vNode.props || {};
	    var ref = vNode.ref;

	    if ((0, _shared.isUndefined)(context)) {
	        context = {};
	    }

	    var inst = new type(props, context);

	    inst.props = props;
	    inst.context = context;
	    inst.refs = _shared.emptyObject;

	    var initialState = inst.state;
	    if (initialState === undefined) {
	        inst.state = initialState = null;
	    }

	    inst._unmounted = false;
	    inst._isSVG = isSVG;

	    var childContext = inst._processChildContext(context);
	    inst._childContext = childContext;
	    /*
	    if (!isNullOrUndef(childContext)) {
	        inst._childContext = assign({}, context, childContext);
	    } else {
	        inst._childContext = context;
	    }
	    */
	    return inst;
	}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.createDOMProperty = createDOMProperty;
	exports.updateDOMProperty = updateDOMProperty;

	var _domUtils = __webpack_require__(10);

	var _shared = __webpack_require__(4);

	var _processDOMPropertyHooks = __webpack_require__(16);

	var _processDOMPropertyHooks2 = _interopRequireDefault(_processDOMPropertyHooks);

	var _processDOMStyle = __webpack_require__(17);

	var _processDOMStyle2 = _interopRequireDefault(_processDOMStyle);

	var _processDOMAttr = __webpack_require__(20);

	var _processDOMAttr2 = _interopRequireDefault(_processDOMAttr);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var propertyHooks = (0, _shared.assign)({
	    style: _processDOMStyle2['default'],
	    __default__: _processDOMAttr2['default']
	}, _processDOMPropertyHooks2['default']);

	function createDOMProperty(props, isSVG, vNode) {
	    updateDOMProperty(null, props, isSVG, vNode);
	}

	function updateDOMProperty(lastProps, nextProps, isSVG, vNode) {
	    if (lastProps === nextProps) {
	        return;
	    }

	    var dom = vNode.dom;

	    lastProps = lastProps || _shared.emptyObject;
	    nextProps = nextProps || _shared.emptyObject;

	    if (nextProps !== _shared.emptyObject) {
	        for (var prop in nextProps) {
	            // do not add a hasOwnProperty check here, it affects performance
	            var nextValue = (0, _shared.isNullOrUndef)(nextProps[prop]) ? null : nextProps[prop];
	            var lastValue = (0, _shared.isNullOrUndef)(lastProps[prop]) ? null : lastProps[prop];
	            var hook = propertyHooks[prop] ? prop : '__default__';
	            propertyHooks[hook](lastValue, nextValue, prop, isSVG, dom, vNode);
	        }
	    }
	    if (lastProps !== _shared.emptyObject) {
	        for (var _prop in lastProps) {
	            if ((0, _shared.isNullOrUndef)(nextProps[_prop])) {
	                var _lastValue = (0, _shared.isNullOrUndef)(lastProps[_prop]) ? null : lastProps[_prop];
	                var _hook = propertyHooks[_prop] ? _prop : '__default__';
	                propertyHooks[_hook](_lastValue, null, _prop, isSVG, dom, vNode);
	            }
	        }
	    }
	}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var processDOMPropertyHooks = {};
	exports['default'] = processDOMPropertyHooks;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (lastValue, nextValue, prop, isSVG, dom, vNode) {
	    if (lastValue === nextValue) {
	        return;
	    }
	    if ((0, _shared.isString)(nextValue)) {
	        dom.style.cssText = nextValue;
	        return;
	    }
	    if ((0, _shared.isString)(lastValue)) {
	        dom.style.cssText = '';
	        lastValue = {};
	    }

	    var cur,
	        name,
	        elm = dom,
	        domStyle = dom.style,
	        oldStyle = lastValue,
	        style = nextValue;

	    if (!oldStyle && !style) {
	        return;
	    }
	    oldStyle = oldStyle || _shared.emptyObject;
	    style = style || _shared.emptyObject;
	    var oldHasDel = 'delayed' in oldStyle;

	    for (name in oldStyle) {
	        if (!style[name]) {
	            var expansion = _constants.hasShorthandPropertyBug && _constants.shorthandPropertyExpansions[name];
	            if (expansion) {
	                // Shorthand property that IE8 won't like unsetting, so unset each
	                // component to placate it
	                for (var individualStyleName in expansion) {
	                    domStyle[individualStyleName] = '';
	                }
	            } else {
	                domStyle[name] = '';
	            }
	        }
	    }
	    for (name in style) {
	        cur = dangerousStyleValue(name, style[name]);
	        if (name === 'float' || name === 'cssFloat') {
	            name = _constants.styleFloatAccessor;
	        }
	        if (name === 'delayed') {
	            for (name in style.delayed) {
	                cur = style.delayed[name];
	                if (!oldHasDel || cur !== oldStyle.delayed[name]) {
	                    setNextFrame(domStyle, name, cur);
	                }
	            }
	        } else if (cur !== oldStyle[name]) {
	            domStyle[name] = cur;
	        }
	    }
	};

	var _shared = __webpack_require__(4);

	var _constants = __webpack_require__(18);

	var raf = typeof window !== 'undefined' && window.requestAnimationFrame || setTimeout;
	var nextFrame = function nextFrame(fn) {
	    raf(function () {
	        raf(fn);
	    });
	};

	function setNextFrame(obj, prop, val) {
	    nextFrame(function () {
	        obj[prop] = val;
	    });
	}

	function dangerousStyleValue(name, value) {
	    var isEmpty = value == null || typeof value === 'boolean' || value === '';
	    if (isEmpty) {
	        return '';
	    }

	    var isNonNumeric = isNaN(value);
	    if (isNonNumeric || value === 0 || _constants.isUnitlessNumber[name]) {
	        return '' + value; // cast to string
	    }

	    if (typeof value === 'string') {
	        value = value.trim();
	    }
	    return value + 'px';
	}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.shorthandPropertyExpansions = exports.styleFloatAccessor = exports.hasShorthandPropertyBug = exports.probablyKebabProps = exports.dehyphenProps = exports.skipProps = exports.isUnitlessNumber = exports.namespaces = exports.booleanProps = exports.strictProps = exports.svgNS = exports.xmlNS = exports.xlinkNS = undefined;
	exports.kebabize = kebabize;

	var _support = __webpack_require__(19);

	function constructDefaults(string, object, value) {
	    var r = string.split(',');
	    for (var i = 0; i < r.length; i++) {
	        object[r[i]] = value;
	    }
	}

	var xlinkNS = exports.xlinkNS = 'http://www.w3.org/1999/xlink';
	var xmlNS = exports.xmlNS = 'http://www.w3.org/XML/1998/namespace';
	var svgNS = exports.svgNS = 'http://www.w3.org/2000/svg';
	var strictProps = exports.strictProps = {};
	var booleanProps = exports.booleanProps = {};
	var namespaces = exports.namespaces = {};
	var isUnitlessNumber = exports.isUnitlessNumber = {};
	var skipProps = exports.skipProps = {};
	var dehyphenProps = exports.dehyphenProps = {
	    acceptCharset: 'accept-charset',
	    httpEquiv: 'http-equiv'
	};
	var probablyKebabProps = exports.probablyKebabProps = /^(accentH|arabicF|capH|font[FSVW]|glyph[NO]|horiz[AO]|panose1|renderingI|strikethrough[PT]|underline[PT]|v[AHIM]|vert[AO]|xH|alignmentB|baselineS|clip[PR]|color[IPR]|dominantB|enableB|fill[OR]|flood[COF]|imageR|letterS|lightingC|marker[EMS]|pointerE|shapeR|stop[CO]|stroke[DLMOW]|text[ADR]|unicodeB|wordS|writingM).*/;

	function kebabize(str, smallLetter, largeLetter) {
	    return smallLetter + '-' + largeLetter.toLowerCase();
	}

	constructDefaults('xlink:href,xlink:arcrole,xlink:actuate,xlink:role,xlink:titlef,xlink:type', namespaces, xlinkNS);
	constructDefaults('xml:base,xml:lang,xml:space', namespaces, xmlNS);
	constructDefaults('volume,defaultValue,value', strictProps, true);
	constructDefaults('children,ref,key', skipProps, true);

	constructDefaults('muted,scoped,loop,open,checked,multiple,defaultChecked,selected,default,capture,disabled,readOnly,required,autoplay,controls,seamless,reversed,allowfullscreen,novalidate', booleanProps, true);

	constructDefaults('animationIterationCount,borderImageOutset,borderImageSlice,borderImageWidth,boxFlex,boxFlexGroup,boxOrdinalGroup,columnCount,flex,flexGrow,flexPositive,flexShrink,flexNegative,flexOrder,gridRow,gridColumn,fontWeight,lineClamp,lineHeight,opacity,order,orphans,tabSize,widows,zIndex,zoom,fillOpacity,floodOpacity,stopOpacity,strokeDasharray,strokeDashoffset,strokeMiterlimit,strokeOpacity,strokeWidth,', isUnitlessNumber, true);

	var hasShorthandPropertyBug = false;
	var styleFloatAccessor = 'cssFloat';

	if (_support.canUseDOM) {
	    var tempStyle = document.createElement('div').style;
	    try {
	        // IE8 throws "Invalid argument." if resetting shorthand style properties.
	        tempStyle.font = '';
	    } catch (e) {
	        exports.hasShorthandPropertyBug = hasShorthandPropertyBug = true;
	    }
	    // IE8 only supports accessing cssFloat (standard) as styleFloat
	    if (document.documentElement.style.cssFloat === undefined) {
	        exports.styleFloatAccessor = styleFloatAccessor = 'styleFloat';
	    }
	}
	exports.hasShorthandPropertyBug = hasShorthandPropertyBug;
	exports.styleFloatAccessor = styleFloatAccessor;

	/**
	 * Most style properties can be unset by doing .style[prop] = '' but IE8
	 * doesn't like doing that with shorthand properties so for the properties that
	 * IE8 breaks on, which are listed here, we instead unset each of the
	 * individual properties. See http://bugs.jquery.com/ticket/12385.
	 * The 4-value 'clock' properties like margin, padding, border-width seem to
	 * behave without any problems. Curiously, list-style works too without any
	 * special prodding.
	 */

	var shorthandPropertyExpansions = exports.shorthandPropertyExpansions = {
	    background: {
	        backgroundAttachment: true,
	        backgroundColor: true,
	        backgroundImage: true,
	        backgroundPositionX: true,
	        backgroundPositionY: true,
	        backgroundRepeat: true
	    },
	    backgroundPosition: {
	        backgroundPositionX: true,
	        backgroundPositionY: true
	    },
	    border: {
	        borderWidth: true,
	        borderStyle: true,
	        borderColor: true
	    },
	    borderBottom: {
	        borderBottomWidth: true,
	        borderBottomStyle: true,
	        borderBottomColor: true
	    },
	    borderLeft: {
	        borderLeftWidth: true,
	        borderLeftStyle: true,
	        borderLeftColor: true
	    },
	    borderRight: {
	        borderRightWidth: true,
	        borderRightStyle: true,
	        borderRightColor: true
	    },
	    borderTop: {
	        borderTopWidth: true,
	        borderTopStyle: true,
	        borderTopColor: true
	    },
	    font: {
	        fontStyle: true,
	        fontVariant: true,
	        fontWeight: true,
	        fontSize: true,
	        lineHeight: true,
	        fontFamily: true
	    },
	    outline: {
	        outlineWidth: true,
	        outlineStyle: true,
	        outlineColor: true
	    }
	};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	var canUseEventListeners = exports.canUseEventListeners = canUseDOM && !!(window.addEventListener || window.attachEvent);

	var ieVersion = exports.ieVersion = canUseDOM && document && function () {
	    var version = 3,
	        div = document.createElement('div'),
	        iElems = div.getElementsByTagName('i');

	    // Keep constructing conditional HTML blocks until we hit one that resolves to an empty fragment
	    while (div.innerHTML = '<!--[if gt IE ' + ++version + ']><i></i><![endif]-->', iElems[0]) {}
	    return version > 4 ? version : undefined;
	}();

	var isIE = exports.isIE = canUseDOM && !ieVersion;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (lastValue, nextValue, prop, isSVG, dom, vNode) {
	    if (lastValue === nextValue) {
	        return;
	    }
	    if (_constants.skipProps[prop]) {
	        return;
	    }

	    if (_constants.booleanProps[prop]) {
	        dom[prop] = nextValue ? true : false;
	    } else if (_constants.strictProps[prop]) {
	        var value = (0, _shared.isNullOrUndef)(nextValue) ? '' : nextValue;

	        if (dom[prop] !== value) {
	            dom[prop] = value;
	        }
	    } else {
	        if ((0, _shared.isNullOrUndef)(nextValue) && prop !== 'dangerouslySetInnerHTML') {
	            if (prop === 'className') {
	                dom.className = '';
	            }
	            dom.removeAttribute(prop);
	        } else if (prop === 'htmlFor') {
	            dom.setAttribute('for', nextValue);
	        } else if (prop === 'className') {
	            if (isSVG) {
	                dom.setAttribute('class', nextValue);
	            } else {
	                dom.className = nextValue;
	            }
	        } else if (prop === 'dangerouslySetInnerHTML') {
	            var lastHtml = lastValue && lastValue.__html;
	            var nextHtml = nextValue && nextValue.__html;

	            if (lastHtml !== nextHtml) {
	                if (!(0, _shared.isNullOrUndef)(nextHtml)) {
	                    dom.innerHTML = nextHtml;
	                }
	            }
	        } else {
	            var dehyphenProp = void 0;
	            if (_constants.dehyphenProps[prop]) {
	                dehyphenProp = _constants.dehyphenProps[prop];
	            } else if (isSVG && prop.match(_constants.probablyKebabProps)) {
	                dehyphenProp = prop.replace(/([a-z])([A-Z]|1)/g, _constants.kebabize);
	                _constants.dehyphenProps[prop] = dehyphenProp;
	            } else {
	                dehyphenProp = prop;
	            }
	            var ns = _constants.namespaces[prop];

	            if (ns) {
	                dom.setAttributeNS(ns, dehyphenProp, nextValue);
	            } else {
	                dom.setAttribute(dehyphenProp, nextValue);
	            }
	        }
	    }
	};

	var _shared = __webpack_require__(4);

	var _constants = __webpack_require__(18);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.patch = patch;

	var _shared = __webpack_require__(4);

	var _mount = __webpack_require__(5);

	var _unmount = __webpack_require__(11);

	var _domUtils = __webpack_require__(10);

	var _refs = __webpack_require__(12);

	var _callbackQueue = __webpack_require__(9);

	var _callbackQueue2 = _interopRequireDefault(_callbackQueue);

	var _processDOMProperty = __webpack_require__(15);

	var _processDOMEvents = __webpack_require__(13);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	//import processElement from './processElement';

	function patch(lastVNode, nextVNode, parentDom, callback, context, isSVG) {
	    var isUndefCallbacks = (0, _shared.isNullOrUndef)(callback);
	    callback = callback || new _callbackQueue2['default']();

	    //if (lastVNode === nextVNode) {
	    //    return nextVNode;
	    //}

	    if (!(0, _shared.isSameVNode)(lastVNode, nextVNode)) {
	        (0, _domUtils.replaceWithNewNode)(lastVNode, nextVNode, parentDom, callback, context, isSVG);
	    } else if ((0, _shared.isElementVNode)(lastVNode)) {
	        patchElement(lastVNode, nextVNode, parentDom, callback, context, isSVG);
	    } else if ((0, _shared.isComponentVNode)(lastVNode)) {
	        patchComponent(lastVNode, nextVNode, parentDom, callback, context, isSVG);
	    } else if ((0, _shared.isTextVNode)(lastVNode)) {
	        patchText(lastVNode, nextVNode);
	    } else if ((0, _shared.isVoidVNode)(lastVNode)) {
	        patchVoid(lastVNode, nextVNode);
	    }

	    if (isUndefCallbacks) {
	        callback.notifyAll();
	    }

	    return nextVNode;
	}

	function unmountChildren(children, dom) {
	    if ((0, _shared.isVNode)(children)) {
	        (0, _unmount.unmount)(children, dom);
	    } else if ((0, _shared.isArray)(children)) {
	        for (var i = 0; i < children.length; i++) {
	            var child = children[i];

	            if (!(0, _shared.isInvalid)(child)) {
	                (0, _unmount.unmount)(child, dom);
	            }
	        }
	    } else {
	        (0, _domUtils.setTextContent)(dom, '');
	    }
	}

	function patchElement(lastVNode, nextVNode, parentDom, callback, context, isSVG) {
	    var dom = lastVNode.dom;
	    var hooks = nextVNode.hooks || {};
	    var lastProps = lastVNode.props;
	    var nextProps = nextVNode.props;
	    var lastChildren = lastVNode.children;
	    var nextChildren = nextVNode.children;
	    var lastEvents = lastVNode.events;
	    var nextEvents = nextVNode.events;
	    var lastHtml = lastProps && lastProps.dangerouslySetInnerHTML && lastProps.dangerouslySetInnerHTML.__html;
	    var nextHtml = nextProps && nextProps.dangerouslySetInnerHTML && nextProps.dangerouslySetInnerHTML.__html;

	    nextVNode.dom = dom;

	    if (hooks.beforeUpdate) {
	        hooks.beforeUpdate(lastVNode, nextVNode);
	    }

	    var refsChanged = (0, _refs.shouldUpdateRefs)(lastVNode, nextVNode);
	    if (refsChanged) {
	        (0, _refs.detachRef)(lastVNode);
	    }

	    if (!(0, _shared.isNullOrUndef)(lastHtml) && (0, _shared.isNullOrUndef)(nextHtml)) {
	        dom.innerHTML = '';
	    }

	    //if (lastChildren !== nextChildren) {
	    patchChildren(lastChildren, nextChildren, dom, callback, context, isSVG);
	    //}

	    //processElement(dom, nextVNode);

	    (0, _processDOMProperty.updateDOMProperty)(lastVNode.props, nextVNode.props, isSVG, nextVNode);
	    (0, _processDOMEvents.updateDOMEvents)(lastVNode, nextVNode);

	    if (!(0, _shared.isNull)(nextVNode.ref)) {
	        callback.enqueue(function () {
	            return (0, _refs.attachRef)(nextVNode);
	        });
	    }

	    if (hooks.update) {
	        callback.enqueue(function () {
	            return hooks.update(nextVNode);
	        });
	    }
	}

	function patchChildren(lastChildren, nextChildren, dom, callback, context, isSVG) {
	    if ((0, _shared.isInvalid)(nextChildren)) {
	        unmountChildren(lastChildren, dom, callback);
	    } else if ((0, _shared.isInvalid)(lastChildren)) {
	        if ((0, _shared.isArray)(nextChildren)) {
	            (0, _mount.mountArrayChildren)(nextChildren, dom, callback, context, isSVG);
	        } else {
	            (0, _mount.mount)(nextChildren, dom, callback, context, isSVG);
	        }
	    } else if (!(0, _shared.isArray)(lastChildren) && !(0, _shared.isArray)(nextChildren)) {
	        patch(lastChildren, nextChildren, dom, callback, context, isSVG);
	    } else {
	        updateChildren((0, _shared.toArray)(lastChildren), (0, _shared.toArray)(nextChildren), dom, callback, context, isSVG);
	    }
	}

	function createKeyToOldIdx(children, beginIdx, endIdx) {
	    var i,
	        map = {},
	        key;
	    for (i = beginIdx; i <= endIdx; ++i) {
	        key = children[i].key;
	        if (!(0, _shared.isNullOrUndef)(key)) {
	            if ((0, _shared.isDefined)(map[key])) {
	                (0, _shared.throwError)('key must be unique.');
	            }
	            map[key] = i;
	        }
	    }
	    return map;
	}

	function updateChildren(oldCh, newCh, parentElm, callback, context, isSVG) {
	    var oldStartIdx = 0,
	        newStartIdx = 0;
	    var oldEndIdx = oldCh.length - 1;
	    var oldStartVnode = oldCh[0];
	    var oldEndVnode = oldCh[oldEndIdx];
	    var newEndIdx = newCh.length - 1;
	    var newStartVnode = newCh[0];
	    var newEndVnode = newCh[newEndIdx];
	    var oldKeyToIdx, idxInOld, elmToMove, before;

	    var newChilds = Array(newCh.length);

	    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
	        if ((0, _shared.isUndefined)(oldStartVnode)) {
	            oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
	        } else if ((0, _shared.isUndefined)(oldEndVnode)) {
	            oldEndVnode = oldCh[--oldEndIdx];
	        } else if ((0, _shared.isSameVNode)(oldStartVnode, newStartVnode)) {
	            patch(oldStartVnode, newStartVnode, parentElm, callback, context, isSVG);
	            oldStartVnode = oldCh[++oldStartIdx];
	            newStartVnode = newCh[++newStartIdx];
	        } else if ((0, _shared.isSameVNode)(oldEndVnode, newEndVnode)) {
	            patch(oldEndVnode, newEndVnode, parentElm, callback, context, isSVG);
	            oldEndVnode = oldCh[--oldEndIdx];
	            newEndVnode = newCh[--newEndIdx];
	        } else if ((0, _shared.isSameVNode)(oldStartVnode, newEndVnode)) {
	            // Vnode moved right
	            (0, _domUtils.insertBefore)(parentElm, oldStartVnode.dom, (0, _domUtils.nextSibling)(oldEndVnode.dom));
	            patch(oldStartVnode, newEndVnode, parentElm, callback, context, isSVG);
	            oldStartVnode = oldCh[++oldStartIdx];
	            newEndVnode = newCh[--newEndIdx];
	        } else if ((0, _shared.isSameVNode)(oldEndVnode, newStartVnode)) {
	            // Vnode moved left
	            (0, _domUtils.insertBefore)(parentElm, oldEndVnode.dom, oldStartVnode.dom);
	            patch(oldEndVnode, newStartVnode, parentElm, callback, context, isSVG);
	            oldEndVnode = oldCh[--oldEndIdx];
	            newStartVnode = newCh[++newStartIdx];
	        } else {
	            if ((0, _shared.isUndefined)(oldKeyToIdx)) {
	                oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
	            }

	            idxInOld = oldKeyToIdx[newStartVnode.key];

	            if ((0, _shared.isUndefined)(idxInOld) || (0, _shared.isUndefined)(oldCh[idxInOld])) {
	                // New element
	                var dom = (0, _mount.mount)(newCh[newStartIdx], null, callback, context, isSVG);
	                (0, _domUtils.insertBefore)(parentElm, dom, oldStartVnode.dom);
	                newStartVnode = newCh[++newStartIdx];
	            } else {
	                elmToMove = oldCh[idxInOld];
	                (0, _domUtils.insertBefore)(parentElm, elmToMove.dom, oldStartVnode.dom);
	                patch(elmToMove, newStartVnode, parentElm, callback, context, isSVG);
	                oldCh[idxInOld] = undefined;
	                newStartVnode = newCh[++newStartIdx];
	            }
	        }
	    }

	    if (oldStartIdx > oldEndIdx) {
	        // New element
	        before = (0, _shared.isUndefined)(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].dom;
	        for (; newStartIdx <= newEndIdx; newStartIdx++) {
	            var dom = (0, _mount.mount)(newCh[newStartIdx], null, callback, context, isSVG);
	            (0, _domUtils.insertBefore)(parentElm, dom, before);
	        }
	    } else if (newStartIdx > newEndIdx) {
	        // Remove element
	        for (; oldStartIdx <= oldEndIdx; oldStartIdx++) {

	            if ((0, _shared.isDefined)(oldCh[oldStartIdx])) {
	                (0, _unmount.unmount)(oldCh[oldStartIdx], parentElm);
	            }
	        }
	    }
	}

	function patchText(lastVNode, nextVNode) {
	    var nextText = nextVNode.children;
	    var dom = lastVNode.dom;

	    nextVNode.dom = dom;

	    if (lastVNode.children !== nextText) {
	        dom.nodeValue = nextText;
	    }
	}

	function patchVoid(lastVNode, nextVNode) {
	    nextVNode.dom = lastVNode.dom;
	}

	function patchComponent(lastVNode, nextVNode, parentDom, callback, context, isSVG) {
	    var nextType = nextVNode.type;
	    var nextProps = nextVNode.props;
	    var isClass = (0, _shared.isStatefulComponent)(nextType);
	    var hooks = nextVNode.hooks || {};

	    if (isClass) {
	        var inst = lastVNode._instance;
	        var lastChildren = lastVNode.children;
	        var lastProps = inst.props;
	        var lastState = inst.state;
	        var lastContext = inst.context;
	        var nextChildren = void 0,
	            childContext = void 0,
	            shouldUpdate = false;

	        nextVNode.dom = lastVNode.dom;
	        nextVNode.children = lastChildren;
	        nextVNode._instance = inst;
	        inst._isSVG = isSVG;

	        nextChildren = inst._updateComponent(lastProps, nextProps, context);

	        childContext = inst._processChildContext(context);
	        /*
	        if (!isNullOrUndef(childContext)) {
	            childContext = assign({}, context, childContext);
	        } else {
	            childContext = context;
	        }
	        */
	        if (nextChildren !== _shared.emptyObject) {
	            nextVNode.children = nextChildren;
	            (0, _mount.normalizeComponentChildren)(nextVNode);
	            nextChildren = nextVNode.children;
	            shouldUpdate = true;
	        }

	        inst._childContext = childContext;
	        inst._vNode = nextVNode;
	        //inst._renderedVNode = nextChildren;

	        if (shouldUpdate) {

	            if (hooks.beforeUpdate) {
	                hooks.beforeUpdate(lastVNode, nextVNode);
	            }

	            var refsChanged = (0, _refs.shouldUpdateRefs)(lastVNode, nextVNode);
	            if (refsChanged) {
	                (0, _refs.detachRef)(lastVNode);
	            }

	            patch(lastChildren, nextChildren, parentDom, callback, childContext, isSVG);
	            nextVNode.dom = nextChildren.dom;

	            if (!(0, _shared.isNull)(nextVNode.ref)) {
	                callback.enqueue(function () {
	                    return (0, _refs.attachRef)(nextVNode);
	                });
	            }

	            if (inst.componentDidUpdate) {
	                callback.enqueue(function () {
	                    return inst.componentDidUpdate(lastProps, lastState, lastContext, nextVNode.dom);
	                });
	            }

	            if (!(0, _shared.isNullOrUndef)(hooks.update)) {
	                callback.enqueue(function () {
	                    return hooks.update(nextVNode);
	                });
	            }
	        }

	        if (inst._pendingCallbacks) {
	            callback.enqueue(function () {
	                return inst._processPendingCallbacks();
	            });
	        }
	    } else {
	        var _shouldUpdate = true;
	        var _lastProps = lastVNode.props;
	        var _lastChildren = lastVNode.children;
	        var _nextChildren = _lastChildren;

	        nextVNode.dom = lastVNode.dom;
	        nextVNode.children = _nextChildren;

	        if (!(0, _shared.isNullOrUndef)(nextProps.onComponentShouldUpdate)) {
	            _shouldUpdate = nextProps.onComponentShouldUpdate(_lastProps, nextProps, context);
	        }

	        if (_shouldUpdate !== false) {
	            var _refsChanged = (0, _refs.shouldUpdateRefs)(lastVNode, nextVNode);
	            if (_refsChanged) {
	                (0, _refs.detachRef)(lastVNode);
	            }

	            if (!(0, _shared.isNullOrUndef)(nextProps.onComponentWillUpdate)) {
	                nextProps.onComponentWillUpdate(_lastProps, nextProps, nextVNode);
	            }
	            nextVNode.children = nextType(nextProps, context);

	            (0, _mount.normalizeComponentChildren)(nextVNode);

	            _nextChildren = nextVNode.children;

	            if (hooks.beforeUpdate) {
	                hooks.beforeUpdate(lastVNode, nextVNode);
	            }

	            patch(_lastChildren, _nextChildren, parentDom, callback, context, isSVG);
	            nextVNode.dom = _nextChildren.dom;

	            if (!(0, _shared.isNull)(nextVNode.ref)) {
	                callback.enqueue(function () {
	                    return (0, _refs.attachRef)(nextVNode);
	                });
	            }

	            if (!(0, _shared.isNullOrUndef)(nextProps.onComponentDidUpdate)) {
	                callback.enqueue(function () {
	                    return nextProps.onComponentDidUpdate(nextVNode);
	                });
	            }

	            if (!(0, _shared.isNullOrUndef)(hooks.update)) {
	                callback.enqueue(function () {
	                    return hooks.update(nextVNode);
	                });
	            }
	        }
	    }
	}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.createClass = createClass;

	var _shared = __webpack_require__(4);

	var _component = __webpack_require__(23);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function createClass(spec) {
	    function Constructor(props, context) {
	        this.state = {};
	        this.refs = {};
	        this.props = props || {};
	        this.context = context || {};

	        if (this.construct) {
	            this.construct(props, context);
	            return;
	        }

	        var initialState = this.getInitialState ? this.getInitialState(this.props, this.context) : null;

	        if (!((0, _shared.isObject)(initialState) && !(0, _shared.isArray)(initialState))) {
	            new TypeError('getInitialState(): must return an object or null');
	        }

	        this.state = initialState;
	    }

	    (0, _shared.inherits)(Constructor, _component2['default'], spec);

	    Constructor.prototype.constructor = Constructor;

	    if (spec.getDefaultProps) {
	        Constructor.defaultProps = spec.getDefaultProps();
	    }

	    if (!spec.render) {
	        throw new TypeError('createClass(...): Class specification must implement a `render` method.');
	    }

	    return Constructor;
	}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = Component;

	var _shared = __webpack_require__(4);

	var _currentOwner = __webpack_require__(8);

	var _currentOwner2 = _interopRequireDefault(_currentOwner);

	var _patch = __webpack_require__(21);

	var _mount = __webpack_require__(5);

	var _shallowEqual = __webpack_require__(24);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function updateParentComponentVNodes(vNode, dom) {
	    var parentVNode = vNode.parentVNode;

	    if (parentVNode && !(0, _shared.isString)(parentVNode.type)) {
	        parentVNode.dom = dom;
	        updateParentComponentVNodes(parentVNode, dom);
	    }
	}

	function enqueueSetState(component, newState, callback) {
	    var sync = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

	    if (!(0, _shared.isNullOrUndef)(newState)) {
	        var queue = component._pendingStateQueue || (component._pendingStateQueue = []);
	        queue.push(newState);
	    }

	    if (callback) {
	        var _queue = component._pendingCallbacks || (component._pendingCallbacks = []);
	        _queue.push(callback);
	    }

	    if (!component._pendingSetState || sync) {
	        applyState(component, false, callback);
	    }
	}

	function applyState(inst, callback) {
	    var vNode = inst._vNode;
	    var parentDom = vNode.dom.parentNode;
	    var hooks = vNode.hooks || {};
	    var state = inst.state;
	    var lastChildren = vNode.children;
	    var props = inst.props;
	    var context = inst.context;
	    var childContext = inst._processChildContext(context);
	    var nextChildren = void 0,
	        shouldUpdate = false;

	    nextChildren = inst._updateComponent(props, props, context);

	    if (nextChildren !== _shared.emptyObject) {
	        vNode.children = nextChildren;
	        (0, _mount.normalizeComponentChildren)(vNode);
	        nextChildren = vNode.children;
	        shouldUpdate = true;
	    }

	    if (shouldUpdate) {

	        if (hooks.beforeUpdate) {
	            hooks.beforeUpdate(vNode, vNode);
	        }
	        inst._childContext = childContext;
	        /*
	        if (!isNullOrUndef(childContext)) {
	            childContext = assign({}, context, inst._childContext, childContext);
	        } else {
	            childContext = assign({}, context, inst._childContext);
	        }
	        */
	        var callbacks = inst._callbacks;

	        (0, _patch.patch)(lastChildren, nextChildren, parentDom, callbacks, childContext, inst._isSVG);

	        var dom = vNode.dom = nextChildren.dom;

	        updateParentComponentVNodes(vNode, dom);

	        callbacks.notifyAll();

	        if (inst.componentDidUpdate) {
	            inst.componentDidUpdate(props, state);
	        }

	        if (!(0, _shared.isNullOrUndef)(hooks.update)) {
	            hooks.update(vNode);
	        }
	    }

	    if (inst._pendingCallbacks) {
	        inst._processPendingCallbacks();
	    }

	    if ((0, _shared.isFunction)(callback)) {
	        callback();
	    }
	}

	function Component(props, context) {
	    this.state = {};
	    this.refs = {};
	    this.props = props || {};
	    this.context = context || {};
	}

	(0, _shared.assign)(Component.prototype, {
	    _vNode: null,
	    _unmounted: true,
	    _callbacks: null,
	    _isSVG: false,
	    _childContext: null,
	    _pendingStateQueue: null,
	    _pendingCallbacks: null,
	    _pendingReplaceState: false,
	    _pendingForceUpdate: false,
	    _pendingSetState: false,
	    _disabledSetState: false,
	    _ignoreSetState: false,
	    //_renderedVNode: null,

	    render: function render() {},
	    forceUpdate: function forceUpdate(callback) {
	        if (this._unmounted) {
	            return;
	        }
	        this._pendingForceUpdate = true;

	        enqueueSetState(this, null, callback);
	    },
	    setState: function setState(newState, callback) {
	        if (this._unmounted) {
	            return;
	        }
	        if (!this._disabledSetState) {
	            if (!this._ignoreSetState) {
	                enqueueSetState(this, newState, callback);
	            } else {
	                (0, _shared.warning)('ignore update state via setState(...) in shouldComponentUpdate() or render().');
	            }
	        } else {
	            (0, _shared.throwError)('cannot update state via setState(...) in componentWillUpdate().');
	        }
	    },
	    replaceState: function replaceState(newState, callback) {
	        if (this._unmounted) {
	            return;
	        }
	        this._pendingReplaceState = true;
	        this.setState(newState, callback);
	    },
	    setStateSync: function setStateSync(newState, callback) {
	        if (this._unmounted) {
	            return;
	        }
	        if (!this._disabledSetState) {
	            if (!this._ignoreSetState) {
	                enqueueSetState(this, newState, callback, true);
	            } else {
	                (0, _shared.warning)('ignore update state via setState(...) in shouldComponentUpdate() or render().');
	            }
	        } else {
	            (0, _shared.throwError)('cannot update state via setState(...) in componentWillUpdate().');
	        }
	    },
	    getChildContext: function getChildContext() {},
	    _processChildContext: function _processChildContext(currentContext) {
	        var inst = this;
	        var childContext;

	        if (inst.getChildContext) {
	            childContext = inst.getChildContext();
	        }

	        if (childContext) {
	            return (0, _shared.assign)({}, currentContext, childContext);
	        }

	        return currentContext;
	    },
	    _updateComponent: function _updateComponent(prevProps, nextProps, context) {
	        var inst = this;
	        if (this._unmounted === true) {
	            (0, _shared.throwError)();
	        }

	        //let willReceive = false;
	        var children = _shared.emptyObject;
	        var shouldUpdate = true;

	        //if (prevProps !== nextProps) {
	        //    willReceive = true;
	        //}

	        if (inst.componentWillReceiveProps) {
	            //willReceive && 
	            inst._pendingSetState = true;
	            inst.componentWillReceiveProps(nextProps, context);
	            inst._pendingSetState = false;
	        }

	        var prevState = inst.state;
	        var nextState = inst._processPendingState(nextProps, context);

	        inst._ignoreSetState = true;

	        if (!inst._pendingForceUpdate) {
	            if (inst.shouldComponentUpdate) {
	                shouldUpdate = inst.shouldComponentUpdate(nextProps, nextState, context);
	            } else {
	                if (inst._isPureComponent) {
	                    shouldUpdate = !(0, _shallowEqual2['default'])(prevProps, nextProps) || !(0, _shallowEqual2['default'])(inst.state, nextState);
	                }
	            }
	        }

	        if (shouldUpdate !== false) {
	            inst._pendingForceUpdate = false;

	            if (inst.componentWillUpdate) {
	                inst._disabledSetState = true;
	                inst.componentWillUpdate(nextProps, nextState, context);
	                inst._disabledSetState = false;
	            }
	            inst.props = nextProps;
	            inst.state = nextState;
	            inst.context = context;
	            _currentOwner2['default'].current = inst;
	            children = inst.render(inst.props, inst.state, inst.context);
	            _currentOwner2['default'].current = null;
	        }

	        inst._ignoreSetState = false;

	        return children;
	    },
	    _processPendingState: function _processPendingState(props, context) {
	        var inst = this;
	        var queue = this._pendingStateQueue;
	        var replace = this._pendingReplaceState;
	        this._pendingReplaceState = false;
	        this._pendingStateQueue = null;

	        if (!queue) {
	            return inst.state;
	        }

	        if (replace && queue.length === 1) {
	            return queue[0];
	        }

	        var nextState = (0, _shared.assign)({}, replace ? queue[0] : inst.state);
	        for (var i = replace ? 1 : 0; i < queue.length; i++) {
	            var partial = queue[i];
	            (0, _shared.assign)(nextState, typeof partial === 'function' ? partial.call(inst, nextState, props, context) : partial);
	        }

	        return nextState;
	    },
	    _processPendingCallbacks: function _processPendingCallbacks() {
	        var callbacks = this._pendingCallbacks;
	        this._pendingCallbacks = null;
	        if (callbacks) {
	            for (var j = 0; j < callbacks.length; j++) {
	                var cb = callbacks[j];
	                if (typeof cb === 'function') {
	                    cb.call(this);
	                }
	            }
	        }
	    }
	});

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = shallowEqual;

	var _shared = __webpack_require__(4);

	var hasOwnProperty = Object.prototype.hasOwnProperty,
	    nativeKeys = Object.keys;

	function keys(obj) {
	    if (nativeKeys) {
	        return nativeKeys(obj);
	    }

	    var keys = [];

	    for (var key in obj) {
	        keys.push(key);
	    }

	    return keys;
	}

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	        // Steps 1-5, 7-10
	        // Steps 6.b-6.e: +0 != -0
	        // Added the nonzero y check to make Flow happy, but it is redundant
	        return x !== 0 || y !== 0 || 1 / x === 1 / y;
	    } else {
	        // Step 6.a: NaN == NaN
	        return x !== x && y !== y;
	    }
	}

	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	    if (is(objA, objB)) {
	        return true;
	    }

	    if (!(0, _shared.isObject)(objA) || objA === null || !(0, _shared.isObject)(objB) || objB === null) {
	        return false;
	    }

	    var keysA = keys(objA);
	    var keysB = keys(objB);

	    if (keysA.length !== keysB.length) {
	        return false;
	    }

	    // Test for A's keys different from B.
	    for (var i = 0; i < keysA.length; i++) {
	        if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	            return false;
	        }
	    }

	    return true;
	}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = PureComponent;

	var _component = __webpack_require__(23);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function PureComponent(props, context) {
	    this.state = {};
	    this.refs = {};
	    this.props = props || {};
	    this.context = context || {};
	}

	function ComponentDummy() {}
	ComponentDummy.prototype = _component2['default'].prototype;
	PureComponent.prototype = new ComponentDummy();
	PureComponent.prototype.constructor = PureComponent;

	PureComponent.prototype._isPureComponent = true;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _neact = __webpack_require__(1);

	var _neactRouter = __webpack_require__(27);

	var _About = __webpack_require__(58);

	var _About2 = _interopRequireDefault(_About);

	var _Home = __webpack_require__(59);

	var _Home2 = _interopRequireDefault(_Home);

	var _Content = __webpack_require__(61);

	var _Content2 = _interopRequireDefault(_Content);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** @jsx h */


	var i = 1;

	var Test = function Test() {
	    return (0, _neact.createElement)(
	        'div',
	        null,
	        i++
	    );
	};

	var Layout = function (_Component) {
	    _inherits(Layout, _Component);

	    function Layout() {
	        _classCallCheck(this, Layout);

	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	    }

	    Layout.prototype.render = function render() {
	        return (0, _neact.createElement)(
	            _neactRouter.HashRouter,
	            null,
	            (0, _neact.createElement)(
	                'div',
	                { 'class': 'main' },
	                (0, _neact.createElement)(
	                    'div',
	                    null,
	                    (0, _neact.createElement)(
	                        _neactRouter.NavLink,
	                        { to: '/index' },
	                        'index'
	                    ),
	                    (0, _neact.createElement)(
	                        _neactRouter.NavLink,
	                        { to: '/content' },
	                        'content'
	                    ),
	                    (0, _neact.createElement)(
	                        _neactRouter.NavLink,
	                        { to: '/about' },
	                        'about'
	                    )
	                ),
	                (0, _neact.createElement)(Test, null),
	                (0, _neact.createElement)(_neactRouter.Route, { path: '/', exact: true, component: _Home2.default }),
	                (0, _neact.createElement)(_neactRouter.Route, { path: '/index', component: _Home2.default }),
	                (0, _neact.createElement)(_neactRouter.Route, { path: '/content', component: _Content2.default }),
	                (0, _neact.createElement)(_neactRouter.Route, { path: '/about', component: _About2.default })
	            )
	        );
	    };

	    return Layout;
	}(_neact.Component);

	exports.default = Layout;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = __webpack_require__(28);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.History = exports.matchPath = exports.Switch = exports.StaticRouter = exports.Router = exports.Route = exports.Redirect = exports.Prompt = exports.NavLink = exports.MemoryRouter = exports.Link = exports.HashRouter = exports.BrowserRouter = undefined;

	var _BrowserRouter2 = __webpack_require__(29);

	var _BrowserRouter3 = _interopRequireDefault(_BrowserRouter2);

	var _HashRouter2 = __webpack_require__(42);

	var _HashRouter3 = _interopRequireDefault(_HashRouter2);

	var _Link2 = __webpack_require__(44);

	var _Link3 = _interopRequireDefault(_Link2);

	var _MemoryRouter2 = __webpack_require__(45);

	var _MemoryRouter3 = _interopRequireDefault(_MemoryRouter2);

	var _NavLink2 = __webpack_require__(47);

	var _NavLink3 = _interopRequireDefault(_NavLink2);

	var _Prompt2 = __webpack_require__(53);

	var _Prompt3 = _interopRequireDefault(_Prompt2);

	var _Redirect2 = __webpack_require__(54);

	var _Redirect3 = _interopRequireDefault(_Redirect2);

	var _Route2 = __webpack_require__(49);

	var _Route3 = _interopRequireDefault(_Route2);

	var _Router2 = __webpack_require__(40);

	var _Router3 = _interopRequireDefault(_Router2);

	var _StaticRouter2 = __webpack_require__(55);

	var _StaticRouter3 = _interopRequireDefault(_StaticRouter2);

	var _Switch2 = __webpack_require__(56);

	var _Switch3 = _interopRequireDefault(_Switch2);

	var _matchPath2 = __webpack_require__(50);

	var _matchPath3 = _interopRequireDefault(_matchPath2);

	var _es = __webpack_require__(57);

	var History = _interopRequireWildcard(_es);

	function _interopRequireWildcard(obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }newObj['default'] = obj;return newObj;
	  }
	}

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	exports.BrowserRouter = _BrowserRouter3['default'];
	exports.HashRouter = _HashRouter3['default'];
	exports.Link = _Link3['default'];
	exports.MemoryRouter = _MemoryRouter3['default'];
	exports.NavLink = _NavLink3['default'];
	exports.Prompt = _Prompt3['default'];
	exports.Redirect = _Redirect3['default'];
	exports.Route = _Route3['default'];
	exports.Router = _Router3['default'];
	exports.StaticRouter = _StaticRouter3['default'];
	exports.Switch = _Switch3['default'];
	exports.matchPath = _matchPath3['default'];
	exports.History = History;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	/*@jsx Neact.createElement*/
	'use strict';

	exports.__esModule = true;

	var _neact = __webpack_require__(1);

	var Neact = _interopRequireWildcard(_neact);

	var _createBrowserHistory = __webpack_require__(30);

	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

	var _Router = __webpack_require__(40);

	var _Router2 = _interopRequireDefault(_Router);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _interopRequireWildcard(obj) {
	    if (obj && obj.__esModule) {
	        return obj;
	    } else {
	        var newObj = {};if (obj != null) {
	            for (var key in obj) {
	                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	            }
	        }newObj['default'] = obj;return newObj;
	    }
	}

	/**
	 * The public API for a <Router> that uses HTML5 history.
	 */
	var BrowserRouter = Neact.createClass({
	    construct: function construct() {
	        this.history = (0, _createBrowserHistory2['default'])(this.props);
	    },
	    render: function render() {
	        return Neact.createElement(_Router2['default'], { history: this.history, children: this.props.children });
	    }
	});

	exports['default'] = BrowserRouter;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _warning = __webpack_require__(31);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(33);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _LocationUtils = __webpack_require__(34);

	var _PathUtils = __webpack_require__(37);

	var _createTransitionManager = __webpack_require__(38);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _DOMUtils = __webpack_require__(39);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var PopStateEvent = 'popstate';
	var HashChangeEvent = 'hashchange';

	var getHistoryState = function getHistoryState() {
	  try {
	    return window.history.state || {};
	  } catch (e) {
	    // IE 11 sometimes throws when accessing window.history.state
	    // See https://github.com/ReactTraining/history/pull/289
	    return {};
	  }
	};

	/**
	 * Creates a history object that uses the HTML5 history API including
	 * pushState, replaceState, and the popstate event.
	 */
	var createBrowserHistory = function createBrowserHistory() {
	  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Browser history needs a DOM');

	  var globalHistory = window.history;
	  var canUseHistory = (0, _DOMUtils.supportsHistory)();
	  var needsHashChangeListener = !(0, _DOMUtils.supportsPopStateOnHashChange)();

	  var _props$forceRefresh = props.forceRefresh,
	      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
	      _props$getUserConfirm = props.getUserConfirmation,
	      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
	      _props$keyLength = props.keyLength,
	      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

	  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

	  var getDOMLocation = function getDOMLocation(historyState) {
	    var _ref = historyState || {},
	        key = _ref.key,
	        state = _ref.state;

	    var _window$location = window.location,
	        pathname = _window$location.pathname,
	        search = _window$location.search,
	        hash = _window$location.hash;

	    var path = pathname + search + hash;

	    if (basename) path = (0, _PathUtils.stripPrefix)(path, basename);

	    return _extends({}, (0, _PathUtils.parsePath)(path), {
	      state: state,
	      key: key
	    });
	  };

	  var createKey = function createKey() {
	    return Math.random().toString(36).substr(2, keyLength);
	  };

	  var transitionManager = (0, _createTransitionManager2.default)();

	  var setState = function setState(nextState) {
	    _extends(history, nextState);

	    history.length = globalHistory.length;

	    transitionManager.notifyListeners(history.location, history.action);
	  };

	  var handlePopState = function handlePopState(event) {
	    // Ignore extraneous popstate events in WebKit.
	    if ((0, _DOMUtils.isExtraneousPopstateEvent)(event)) return;

	    handlePop(getDOMLocation(event.state));
	  };

	  var handleHashChange = function handleHashChange() {
	    handlePop(getDOMLocation(getHistoryState()));
	  };

	  var forceNextPop = false;

	  var handlePop = function handlePop(location) {
	    if (forceNextPop) {
	      forceNextPop = false;
	      setState();
	    } else {
	      var action = 'POP';

	      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	        if (ok) {
	          setState({ action: action, location: location });
	        } else {
	          revertPop(location);
	        }
	      });
	    }
	  };

	  var revertPop = function revertPop(fromLocation) {
	    var toLocation = history.location;

	    // TODO: We could probably make this more reliable by
	    // keeping a list of keys we've seen in sessionStorage.
	    // Instead, we just default to 0 for keys we don't know.

	    var toIndex = allKeys.indexOf(toLocation.key);

	    if (toIndex === -1) toIndex = 0;

	    var fromIndex = allKeys.indexOf(fromLocation.key);

	    if (fromIndex === -1) fromIndex = 0;

	    var delta = toIndex - fromIndex;

	    if (delta) {
	      forceNextPop = true;
	      go(delta);
	    }
	  };

	  var initialLocation = getDOMLocation(getHistoryState());
	  var allKeys = [initialLocation.key];

	  // Public interface

	  var createHref = function createHref(location) {
	    return basename + (0, _PathUtils.createPath)(location);
	  };

	  var push = function push(path, state) {
	    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

	    var action = 'PUSH';
	    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;

	      var href = createHref(location);
	      var key = location.key,
	          state = location.state;

	      if (canUseHistory) {
	        globalHistory.pushState({ key: key, state: state }, null, href);

	        if (forceRefresh) {
	          window.location.href = href;
	        } else {
	          var prevIndex = allKeys.indexOf(history.location.key);
	          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

	          nextKeys.push(location.key);
	          allKeys = nextKeys;

	          setState({ action: action, location: location });
	        }
	      } else {
	        (0, _warning2.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

	        window.location.href = href;
	      }
	    });
	  };

	  var replace = function replace(path, state) {
	    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

	    var action = 'REPLACE';
	    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;

	      var href = createHref(location);
	      var key = location.key,
	          state = location.state;

	      if (canUseHistory) {
	        globalHistory.replaceState({ key: key, state: state }, null, href);

	        if (forceRefresh) {
	          window.location.replace(href);
	        } else {
	          var prevIndex = allKeys.indexOf(history.location.key);

	          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

	          setState({ action: action, location: location });
	        }
	      } else {
	        (0, _warning2.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

	        window.location.replace(href);
	      }
	    });
	  };

	  var go = function go(n) {
	    globalHistory.go(n);
	  };

	  var goBack = function goBack() {
	    return go(-1);
	  };

	  var goForward = function goForward() {
	    return go(1);
	  };

	  var listenerCount = 0;

	  var checkDOMListeners = function checkDOMListeners(delta) {
	    listenerCount += delta;

	    if (listenerCount === 1) {
	      (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

	      if (needsHashChangeListener) (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
	    } else if (listenerCount === 0) {
	      (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

	      if (needsHashChangeListener) (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
	    }
	  };

	  var isBlocked = false;

	  var block = function block() {
	    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	    var unblock = transitionManager.setPrompt(prompt);

	    if (!isBlocked) {
	      checkDOMListeners(1);
	      isBlocked = true;
	    }

	    return function () {
	      if (isBlocked) {
	        isBlocked = false;
	        checkDOMListeners(-1);
	      }

	      return unblock();
	    };
	  };

	  var listen = function listen(listener) {
	    var unlisten = transitionManager.appendListener(listener);
	    checkDOMListeners(1);

	    return function () {
	      checkDOMListeners(-1);
	      unlisten();
	    };
	  };

	  var history = {
	    length: globalHistory.length,
	    action: 'POP',
	    location: initialLocation,
	    createHref: createHref,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    block: block,
	    listen: listen
	  };

	  return history;
	};

	exports.default = createBrowserHistory;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function warning() {};

	if (process.env.NODE_ENV !== 'production') {
	  warning = function warning(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }

	    if (format.length < 10 || /^[s\W]*$/.test(format)) {
	      throw new Error('The warning format should be able to uniquely identify this ' + 'warning. Please, use a more descriptive format than: ' + format);
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    }
	  };
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	'use strict';

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) {
	    return [];
	};

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function invariant(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.locationsAreEqual = exports.createLocation = undefined;

	var _resolvePathname = __webpack_require__(35);

	var _resolvePathname2 = _interopRequireDefault(_resolvePathname);

	var _valueEqual = __webpack_require__(36);

	var _valueEqual2 = _interopRequireDefault(_valueEqual);

	var _PathUtils = __webpack_require__(37);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var createLocation = exports.createLocation = function createLocation(path, state, key, currentLocation) {
	  var location = void 0;
	  if (typeof path === 'string') {
	    // Two-arg form: push(path, state)
	    location = (0, _PathUtils.parsePath)(path);
	    location.state = state;
	  } else {
	    // One-arg form: push(location)
	    location = _extends({}, path);

	    if (location.pathname === undefined) location.pathname = '';

	    if (location.search) {
	      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
	    } else {
	      location.search = '';
	    }

	    if (location.hash) {
	      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
	    } else {
	      location.hash = '';
	    }

	    if (state !== undefined && location.state === undefined) location.state = state;
	  }

	  location.key = key;

	  if (currentLocation) {
	    // Resolve incomplete/relative pathname relative to current location.
	    if (!location.pathname) {
	      location.pathname = currentLocation.pathname;
	    } else if (location.pathname.charAt(0) !== '/') {
	      location.pathname = (0, _resolvePathname2.default)(location.pathname, currentLocation.pathname);
	    }
	  }

	  return location;
	};

	var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
	  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0, _valueEqual2.default)(a.state, b.state);
	};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	'use strict';

	var isAbsolute = function isAbsolute(pathname) {
	  return pathname.charAt(0) === '/';
	};

	// About 1.5x faster than the two-arg version of Array#splice()
	var spliceOne = function spliceOne(list, index) {
	  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
	    list[i] = list[k];
	  }list.pop();
	};

	// This implementation is based heavily on node's url.parse
	var resolvePathname = function resolvePathname(to) {
	  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

	  var toParts = to && to.split('/') || [];
	  var fromParts = from && from.split('/') || [];

	  var isToAbs = to && isAbsolute(to);
	  var isFromAbs = from && isAbsolute(from);
	  var mustEndAbs = isToAbs || isFromAbs;

	  if (to && isAbsolute(to)) {
	    // to is absolute
	    fromParts = toParts;
	  } else if (toParts.length) {
	    // to is relative, drop the filename
	    fromParts.pop();
	    fromParts = fromParts.concat(toParts);
	  }

	  if (!fromParts.length) return '/';

	  var hasTrailingSlash = void 0;
	  if (fromParts.length) {
	    var last = fromParts[fromParts.length - 1];
	    hasTrailingSlash = last === '.' || last === '..' || last === '';
	  } else {
	    hasTrailingSlash = false;
	  }

	  var up = 0;
	  for (var i = fromParts.length; i >= 0; i--) {
	    var part = fromParts[i];

	    if (part === '.') {
	      spliceOne(fromParts, i);
	    } else if (part === '..') {
	      spliceOne(fromParts, i);
	      up++;
	    } else if (up) {
	      spliceOne(fromParts, i);
	      up--;
	    }
	  }

	  if (!mustEndAbs) for (; up--; up) {
	    fromParts.unshift('..');
	  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

	  var result = fromParts.join('/');

	  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

	  return result;
	};

	module.exports = resolvePathname;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	var valueEqual = function valueEqual(a, b) {
	  if (a === b) return true;

	  if (a == null || b == null) return false;

	  if (Array.isArray(a)) return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	    return valueEqual(item, b[index]);
	  });

	  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
	  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

	  if (aType !== bType) return false;

	  if (aType === 'object') {
	    var aValue = a.valueOf();
	    var bValue = b.valueOf();

	    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

	    var aKeys = Object.keys(a);
	    var bKeys = Object.keys(b);

	    if (aKeys.length !== bKeys.length) return false;

	    return aKeys.every(function (key) {
	      return valueEqual(a[key], b[key]);
	    });
	  }

	  return false;
	};

	exports.default = valueEqual;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var addLeadingSlash = exports.addLeadingSlash = function addLeadingSlash(path) {
	  return path.charAt(0) === '/' ? path : '/' + path;
	};

	var stripLeadingSlash = exports.stripLeadingSlash = function stripLeadingSlash(path) {
	  return path.charAt(0) === '/' ? path.substr(1) : path;
	};

	var stripPrefix = exports.stripPrefix = function stripPrefix(path, prefix) {
	  return path.indexOf(prefix) === 0 ? path.substr(prefix.length) : path;
	};

	var stripTrailingSlash = exports.stripTrailingSlash = function stripTrailingSlash(path) {
	  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
	};

	var parsePath = exports.parsePath = function parsePath(path) {
	  var pathname = path || '/';
	  var search = '';
	  var hash = '';

	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substr(hashIndex);
	    pathname = pathname.substr(0, hashIndex);
	  }

	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substr(searchIndex);
	    pathname = pathname.substr(0, searchIndex);
	  }

	  pathname = decodeURI(pathname);

	  return {
	    pathname: pathname,
	    search: search === '?' ? '' : search,
	    hash: hash === '#' ? '' : hash
	  };
	};

	var createPath = exports.createPath = function createPath(location) {
	  var pathname = location.pathname,
	      search = location.search,
	      hash = location.hash;

	  var path = encodeURI(pathname || '/');

	  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

	  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

	  return path;
	};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _warning = __webpack_require__(31);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createTransitionManager = function createTransitionManager() {
	  var prompt = null;

	  var setPrompt = function setPrompt(nextPrompt) {
	    (0, _warning2.default)(prompt == null, 'A history supports only one prompt at a time');

	    prompt = nextPrompt;

	    return function () {
	      if (prompt === nextPrompt) prompt = null;
	    };
	  };

	  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
	    // TODO: If another transition starts while we're still confirming
	    // the previous one, we may end up in a weird state. Figure out the
	    // best way to handle this.
	    if (prompt != null) {
	      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

	      if (typeof result === 'string') {
	        if (typeof getUserConfirmation === 'function') {
	          getUserConfirmation(result, callback);
	        } else {
	          (0, _warning2.default)(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

	          callback(true);
	        }
	      } else {
	        // Return false from a transition hook to cancel the transition.
	        callback(result !== false);
	      }
	    } else {
	      callback(true);
	    }
	  };

	  var listeners = [];

	  var appendListener = function appendListener(fn) {
	    var isActive = true;

	    var listener = function listener() {
	      if (isActive) fn.apply(undefined, arguments);
	    };

	    listeners.push(listener);

	    return function () {
	      isActive = false;
	      listeners = listeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  };

	  var notifyListeners = function notifyListeners() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    listeners.forEach(function (listener) {
	      return listener.apply(undefined, args);
	    });
	  };

	  return {
	    setPrompt: setPrompt,
	    confirmTransitionTo: confirmTransitionTo,
	    appendListener: appendListener,
	    notifyListeners: notifyListeners
	  };
	};

	exports.default = createTransitionManager;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
	  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
	};

	var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
	  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
	};

	var getConfirmation = exports.getConfirmation = function getConfirmation(message, callback) {
	  return callback(window.confirm(message));
	}; // eslint-disable-line no-alert

	/**
	 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
	 */
	var supportsHistory = exports.supportsHistory = function supportsHistory() {
	  var ua = window.navigator.userAgent;

	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

	  return window.history && 'pushState' in window.history;
	};

	/**
	 * Returns true if browser fires popstate on hash change.
	 * IE10 and IE11 do not.
	 */
	var supportsPopStateOnHashChange = exports.supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
	  return window.navigator.userAgent.indexOf('Trident') === -1;
	};

	/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */
	var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
	  return window.navigator.userAgent.indexOf('Firefox') === -1;
	};

	/**
	 * Returns true if a given popstate event is an extraneous WebKit event.
	 * Accounts for the fact that Chrome on iOS fires real popstate events
	 * containing undefined state when pressing the back button.
	 */
	var isExtraneousPopstateEvent = exports.isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
	  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
	};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _warning = __webpack_require__(31);

	var _warning2 = _interopRequireDefault(_warning);

	var _neact = __webpack_require__(1);

	var Neact = _interopRequireWildcard(_neact);

	var _objectAssign = __webpack_require__(41);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireWildcard(obj) {
	    if (obj && obj.__esModule) {
	        return obj;
	    } else {
	        var newObj = {};if (obj != null) {
	            for (var key in obj) {
	                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	            }
	        }newObj['default'] = obj;return newObj;
	    }
	}

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var Router = Neact.createClass({
	    construct: function construct(props) {
	        if (!props.history) {
	            throw new TypeError('history must be required!');
	        }

	        this.state.match = this.computeMatch(props.history.location.pathname);
	    },
	    getChildContext: function getChildContext() {
	        return {
	            router: (0, _objectAssign2['default'])({}, this.context.router, {
	                history: this.props.history,
	                route: {
	                    location: this.props.history.location,
	                    match: this.state.match
	                }
	            })
	        };
	    },
	    computeMatch: function computeMatch(pathname) {
	        return {
	            path: '/',
	            url: '/',
	            params: {},
	            isExact: pathname === '/'
	        };
	    },
	    render: function render() {
	        var children = this.props.children;

	        return children ? Neact.Children.only(children) : null;
	    },
	    componentWillMount: function componentWillMount() {
	        var _this = this;

	        var _props = this.props,
	            children = _props.children,
	            history = _props.history;

	        this.unlisten = history.listen(function () {
	            _this.setState({
	                match: _this.computeMatch(history.location.pathname)
	            });
	        });
	    },
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        (0, _warning2['default'])(this.props.history === nextProps.history, 'You cannot change <Router history>');
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        this.unlisten();
	    }
	});

	exports['default'] = Router;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */

	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	/*@jsx Neact.createElement*/
	'use strict';

	exports.__esModule = true;

	var _neact = __webpack_require__(1);

	var Neact = _interopRequireWildcard(_neact);

	var _createHashHistory = __webpack_require__(43);

	var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

	var _Router = __webpack_require__(40);

	var _Router2 = _interopRequireDefault(_Router);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _interopRequireWildcard(obj) {
	    if (obj && obj.__esModule) {
	        return obj;
	    } else {
	        var newObj = {};if (obj != null) {
	            for (var key in obj) {
	                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	            }
	        }newObj['default'] = obj;return newObj;
	    }
	}

	/**
	 * The public API for a <Router> that uses window.location.hash.
	 */
	var HashRouter = Neact.createClass({
	    construct: function construct() {
	        this.history = (0, _createHashHistory2['default'])(this.props);
	    },
	    render: function render() {
	        return Neact.createElement(_Router2['default'], { history: this.history, children: this.props.children });
	    }
	});

	exports['default'] = HashRouter;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _warning = __webpack_require__(31);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(33);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _LocationUtils = __webpack_require__(34);

	var _PathUtils = __webpack_require__(37);

	var _createTransitionManager = __webpack_require__(38);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _DOMUtils = __webpack_require__(39);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var HashChangeEvent = 'hashchange';

	var HashPathCoders = {
	  hashbang: {
	    encodePath: function encodePath(path) {
	      return path.charAt(0) === '!' ? path : '!/' + (0, _PathUtils.stripLeadingSlash)(path);
	    },
	    decodePath: function decodePath(path) {
	      return path.charAt(0) === '!' ? path.substr(1) : path;
	    }
	  },
	  noslash: {
	    encodePath: _PathUtils.stripLeadingSlash,
	    decodePath: _PathUtils.addLeadingSlash
	  },
	  slash: {
	    encodePath: _PathUtils.addLeadingSlash,
	    decodePath: _PathUtils.addLeadingSlash
	  }
	};

	var getHashPath = function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href;
	  var hashIndex = href.indexOf('#');
	  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
	};

	var pushHashPath = function pushHashPath(path) {
	  return window.location.hash = path;
	};

	var replaceHashPath = function replaceHashPath(path) {
	  var hashIndex = window.location.href.indexOf('#');

	  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
	};

	var createHashHistory = function createHashHistory() {
	  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Hash history needs a DOM');

	  var globalHistory = window.history;
	  var canGoWithoutReload = (0, _DOMUtils.supportsGoWithoutReloadUsingHash)();

	  var _props$getUserConfirm = props.getUserConfirmation,
	      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
	      _props$hashType = props.hashType,
	      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

	  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

	  var _HashPathCoders$hashT = HashPathCoders[hashType],
	      encodePath = _HashPathCoders$hashT.encodePath,
	      decodePath = _HashPathCoders$hashT.decodePath;

	  var getDOMLocation = function getDOMLocation() {
	    var path = decodePath(getHashPath());

	    if (basename) path = (0, _PathUtils.stripPrefix)(path, basename);

	    return (0, _PathUtils.parsePath)(path);
	  };

	  var transitionManager = (0, _createTransitionManager2.default)();

	  var setState = function setState(nextState) {
	    _extends(history, nextState);

	    history.length = globalHistory.length;

	    transitionManager.notifyListeners(history.location, history.action);
	  };

	  var forceNextPop = false;
	  var ignorePath = null;

	  var handleHashChange = function handleHashChange() {
	    var path = getHashPath();
	    var encodedPath = encodePath(path);

	    if (path !== encodedPath) {
	      // Ensure we always have a properly-encoded hash.
	      replaceHashPath(encodedPath);
	    } else {
	      var location = getDOMLocation();
	      var prevLocation = history.location;

	      if (!forceNextPop && (0, _LocationUtils.locationsAreEqual)(prevLocation, location)) return; // A hashchange doesn't always == location change.

	      if (ignorePath === (0, _PathUtils.createPath)(location)) return; // Ignore this change; we already setState in push/replace.

	      ignorePath = null;

	      handlePop(location);
	    }
	  };

	  var handlePop = function handlePop(location) {
	    if (forceNextPop) {
	      forceNextPop = false;
	      setState();
	    } else {
	      var action = 'POP';

	      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	        if (ok) {
	          setState({ action: action, location: location });
	        } else {
	          revertPop(location);
	        }
	      });
	    }
	  };

	  var revertPop = function revertPop(fromLocation) {
	    var toLocation = history.location;

	    // TODO: We could probably make this more reliable by
	    // keeping a list of paths we've seen in sessionStorage.
	    // Instead, we just default to 0 for paths we don't know.

	    var toIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(toLocation));

	    if (toIndex === -1) toIndex = 0;

	    var fromIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(fromLocation));

	    if (fromIndex === -1) fromIndex = 0;

	    var delta = toIndex - fromIndex;

	    if (delta) {
	      forceNextPop = true;
	      go(delta);
	    }
	  };

	  // Ensure the hash is encoded properly before doing anything else.
	  var path = getHashPath();
	  var encodedPath = encodePath(path);

	  if (path !== encodedPath) replaceHashPath(encodedPath);

	  var initialLocation = getDOMLocation();
	  var allPaths = [(0, _PathUtils.createPath)(initialLocation)];

	  // Public interface

	  var createHref = function createHref(location) {
	    return '#' + encodePath(basename + (0, _PathUtils.createPath)(location));
	  };

	  var push = function push(path, state) {
	    (0, _warning2.default)(state === undefined, 'Hash history cannot push state; it is ignored');

	    var action = 'PUSH';
	    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;

	      var path = (0, _PathUtils.createPath)(location);
	      var encodedPath = encodePath(basename + path);
	      var hashChanged = getHashPath() !== encodedPath;

	      if (hashChanged) {
	        // We cannot tell if a hashchange was caused by a PUSH, so we'd
	        // rather setState here and ignore the hashchange. The caveat here
	        // is that other hash histories in the page will consider it a POP.
	        ignorePath = path;
	        pushHashPath(encodedPath);

	        var prevIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(history.location));
	        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

	        nextPaths.push(path);
	        allPaths = nextPaths;

	        setState({ action: action, location: location });
	      } else {
	        (0, _warning2.default)(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

	        setState();
	      }
	    });
	  };

	  var replace = function replace(path, state) {
	    (0, _warning2.default)(state === undefined, 'Hash history cannot replace state; it is ignored');

	    var action = 'REPLACE';
	    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;

	      var path = (0, _PathUtils.createPath)(location);
	      var encodedPath = encodePath(basename + path);
	      var hashChanged = getHashPath() !== encodedPath;

	      if (hashChanged) {
	        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
	        // rather setState here and ignore the hashchange. The caveat here
	        // is that other hash histories in the page will consider it a POP.
	        ignorePath = path;
	        replaceHashPath(encodedPath);
	      }

	      var prevIndex = allPaths.indexOf((0, _PathUtils.createPath)(history.location));

	      if (prevIndex !== -1) allPaths[prevIndex] = path;

	      setState({ action: action, location: location });
	    });
	  };

	  var go = function go(n) {
	    (0, _warning2.default)(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

	    globalHistory.go(n);
	  };

	  var goBack = function goBack() {
	    return go(-1);
	  };

	  var goForward = function goForward() {
	    return go(1);
	  };

	  var listenerCount = 0;

	  var checkDOMListeners = function checkDOMListeners(delta) {
	    listenerCount += delta;

	    if (listenerCount === 1) {
	      (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
	    } else if (listenerCount === 0) {
	      (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
	    }
	  };

	  var isBlocked = false;

	  var block = function block() {
	    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	    var unblock = transitionManager.setPrompt(prompt);

	    if (!isBlocked) {
	      checkDOMListeners(1);
	      isBlocked = true;
	    }

	    return function () {
	      if (isBlocked) {
	        isBlocked = false;
	        checkDOMListeners(-1);
	      }

	      return unblock();
	    };
	  };

	  var listen = function listen(listener) {
	    var unlisten = transitionManager.appendListener(listener);
	    checkDOMListeners(1);

	    return function () {
	      checkDOMListeners(-1);
	      unlisten();
	    };
	  };

	  var history = {
	    length: globalHistory.length,
	    action: 'POP',
	    location: initialLocation,
	    createHref: createHref,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    block: block,
	    listen: listen
	  };

	  return history;
	};

	exports.default = createHashHistory;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _neact = __webpack_require__(1);

	var Neact = _interopRequireWildcard(_neact);

	var _objectAssign = __webpack_require__(41);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _interopRequireWildcard(obj) {
	    if (obj && obj.__esModule) {
	        return obj;
	    } else {
	        var newObj = {};if (obj != null) {
	            for (var key in obj) {
	                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	            }
	        }newObj['default'] = obj;return newObj;
	    }
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	var isModifiedEvent = function isModifiedEvent(event) {
	    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	};

	var Link = Neact.createClass({
	    handleClick: function handleClick(event) {
	        if (this.props.onClick) {
	            this.props.onClick(event);
	        }

	        if (!event.defaultPrevented && // onClick prevented default
	        event.button === 0 && // ignore right clicks
	        !this.props.target && // let browser handle "target=_blank" etc.
	        !isModifiedEvent(event // ignore clicks with modifier keys
	        )) {
	            event.preventDefault();

	            var _context$router = this.context.router,
	                history = _context$router.history,
	                route = _context$router.route;
	            var _props = this.props,
	                replace = _props.replace,
	                to = _props.to;

	            if (replace) {
	                history.replace(to);
	            } else {
	                history.push(to);
	            }
	        }
	    },
	    render: function render() {
	        var _this = this;

	        var _props2 = this.props,
	            replace = _props2.replace,
	            to = _props2.to,
	            props = _objectWithoutProperties(_props2, ['replace', 'to']);

	        var href = this.context.router.history.createHref(typeof to === 'string' ? { pathname: to } : to);

	        return Neact.createElement('a', (0, _objectAssign2['default'])({}, props, {
	            onClick: function onClick(e) {
	                return _this.handleClick(e);
	            },
	            href: href
	        }));
	    }
	});

	Link.defaultProps = {
	    replace: false
	};

	exports['default'] = Link;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	/*@jsx Neact.createElement*/
	'use strict';

	exports.__esModule = true;

	var _neact = __webpack_require__(1);

	var Neact = _interopRequireWildcard(_neact);

	var _createMemoryHistory = __webpack_require__(46);

	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

	var _Router = __webpack_require__(40);

	var _Router2 = _interopRequireDefault(_Router);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _interopRequireWildcard(obj) {
	    if (obj && obj.__esModule) {
	        return obj;
	    } else {
	        var newObj = {};if (obj != null) {
	            for (var key in obj) {
	                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	            }
	        }newObj['default'] = obj;return newObj;
	    }
	}

	/**
	 * The public API for a <Router> that stores location in memory.
	 */
	var MemoryRouter = Neact.createClass({
	    construct: function construct() {
	        this.history = (0, _createMemoryHistory2['default'])(this.props);
	    },
	    render: function render() {
	        return Neact.createElement(_Router2['default'], { history: this.history, children: this.props.children });
	    }
	});

	exports['default'] = MemoryRouter;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _warning = __webpack_require__(31);

	var _warning2 = _interopRequireDefault(_warning);

	var _PathUtils = __webpack_require__(37);

	var _LocationUtils = __webpack_require__(34);

	var _createTransitionManager = __webpack_require__(38);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var clamp = function clamp(n, lowerBound, upperBound) {
	  return Math.min(Math.max(n, lowerBound), upperBound);
	};

	/**
	 * Creates a history object that stores locations in memory.
	 */
	var createMemoryHistory = function createMemoryHistory() {
	  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var getUserConfirmation = props.getUserConfirmation,
	      _props$initialEntries = props.initialEntries,
	      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
	      _props$initialIndex = props.initialIndex,
	      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
	      _props$keyLength = props.keyLength,
	      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

	  var transitionManager = (0, _createTransitionManager2.default)();

	  var setState = function setState(nextState) {
	    _extends(history, nextState);

	    history.length = history.entries.length;

	    transitionManager.notifyListeners(history.location, history.action);
	  };

	  var createKey = function createKey() {
	    return Math.random().toString(36).substr(2, keyLength);
	  };

	  var index = clamp(initialIndex, 0, initialEntries.length - 1);
	  var entries = initialEntries.map(function (entry) {
	    return typeof entry === 'string' ? (0, _LocationUtils.createLocation)(entry, undefined, createKey()) : (0, _LocationUtils.createLocation)(entry, undefined, entry.key || createKey());
	  });

	  // Public interface

	  var createHref = _PathUtils.createPath;

	  var push = function push(path, state) {
	    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

	    var action = 'PUSH';
	    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;

	      var prevIndex = history.index;
	      var nextIndex = prevIndex + 1;

	      var nextEntries = history.entries.slice(0);
	      if (nextEntries.length > nextIndex) {
	        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
	      } else {
	        nextEntries.push(location);
	      }

	      setState({
	        action: action,
	        location: location,
	        index: nextIndex,
	        entries: nextEntries
	      });
	    });
	  };

	  var replace = function replace(path, state) {
	    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

	    var action = 'REPLACE';
	    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;

	      history.entries[history.index] = location;

	      setState({ action: action, location: location });
	    });
	  };

	  var go = function go(n) {
	    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

	    var action = 'POP';
	    var location = history.entries[nextIndex];

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (ok) {
	        setState({
	          action: action,
	          location: location,
	          index: nextIndex
	        });
	      } else {
	        // Mimic the behavior of DOM histories by
	        // causing a render after a cancelled POP.
	        setState();
	      }
	    });
	  };

	  var goBack = function goBack() {
	    return go(-1);
	  };

	  var goForward = function goForward() {
	    return go(1);
	  };

	  var canGo = function canGo(n) {
	    var nextIndex = history.index + n;
	    return nextIndex >= 0 && nextIndex < history.entries.length;
	  };

	  var block = function block() {
	    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	    return transitionManager.setPrompt(prompt);
	  };

	  var listen = function listen(listener) {
	    return transitionManager.appendListener(listener);
	  };

	  var history = {
	    length: entries.length,
	    action: 'POP',
	    location: entries[index],
	    index: index,
	    entries: entries,
	    createHref: createHref,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    canGo: canGo,
	    block: block,
	    listen: listen
	  };

	  return history;
	};

	exports.default = createMemoryHistory;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _neact = __webpack_require__(1);

	var Neact = _interopRequireWildcard(_neact);

	var _shared = __webpack_require__(48);

	var _objectAssign = __webpack_require__(41);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _Route = __webpack_require__(49);

	var _Route2 = _interopRequireDefault(_Route);

	var _Link = __webpack_require__(44);

	var _Link2 = _interopRequireDefault(_Link);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _interopRequireWildcard(obj) {
	    if (obj && obj.__esModule) {
	        return obj;
	    } else {
	        var newObj = {};if (obj != null) {
	            for (var key in obj) {
	                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	            }
	        }newObj['default'] = obj;return newObj;
	    }
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	var NavLink = function NavLink(_ref) {
	    var to = _ref.to,
	        exact = _ref.exact,
	        strict = _ref.strict,
	        activeClassName = _ref.activeClassName,
	        className = _ref.className,
	        activeStyle = _ref.activeStyle,
	        style = _ref.style,
	        getIsActive = _ref.isActive,
	        rest = _objectWithoutProperties(_ref, ['to', 'exact', 'strict', 'activeClassName', 'className', 'activeStyle', 'style', 'isActive']);

	    return Neact.createElement(_Route2['default'], {
	        path: (0, _shared.isObject)(to) ? to.pathname : to,
	        exact: exact,
	        strict: strict,
	        children: function children(_ref2) {
	            var location = _ref2.location,
	                match = _ref2.match;

	            var isActive = !!(getIsActive ? getIsActive(match, location) : match);
	            console.log(isActive);
	            return Neact.createElement(_Link2['default'], (0, _objectAssign2['default'])({}, rest, {
	                to: to,
	                className: isActive ? [activeClassName, className].join(' ') : className,
	                style: isActive ? (0, _objectAssign2['default'])({}, style, activeStyle) : style
	            }));
	        }
	    });
	};

	NavLink.defaultProps = {
	    activeClassName: 'active'
	};

	exports['default'] = NavLink;

/***/ }),
/* 48 */
/***/ (function(module, exports) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	exports.isUndefined = isUndefined;
	exports.isNull = isNull;
	exports.isNullOrUndef = isNullOrUndef;
	exports.isObject = isObject;
	exports.normalizeUrl = normalizeUrl;
	exports.parsePath = parsePath;
	var objToString = Object.prototype.toString;

	var isArray = exports.isArray = Array.isArray || function (s) {
	    return objToString.call(s) === '[object Array]';
	};

	function isUndefined(obj) {
	    return obj === undefined;
	}

	function isNull(obj) {
	    return obj === null;
	}

	function isNullOrUndef(obj) {
	    return isUndefined(obj) || isNull(obj);
	}

	function isObject(o) {
	    return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object';
	}

	function trimDots(ary) {
	    var i = void 0,
	        part = void 0;
	    for (i = 0; i < ary.length; i++) {
	        part = ary[i];

	        if (part === '' && i > 0 || part === '.') {
	            ary.splice(i, 1);
	            i -= 1;
	        } else if (part === '..') {
	            if (i === 0) {
	                ary.splice(0, 1);
	                i = -1;
	            } else if (i === 1 && ary[0] === '') {
	                ary.splice(i, 1);
	                i -= 1;
	            } else {
	                ary.splice(i - 1, 2);
	                i -= 2;
	            }
	        }
	    }
	}

	/**
	 * 
	 * @param {string} path 
	 * @param {string} baseName 
	 * @param {string} delimiter 
	 * @example
	 *   normalizeUrl('../test/my','/root/user/tmp') // /root/user/test/my
	 */
	function normalizeUrl(path) {
	    var baseName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';
	    var delimiter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '/';

	    var baseParts = baseName.split(delimiter);

	    if (isUndefined(path)) {
	        return path;
	    }

	    if (path) {
	        path = path.split(delimiter);

	        if (path[0].charAt(0) === '.' || path[0] !== '') {
	            path = baseParts.concat(path);
	        }

	        trimDots(path);

	        if (path.length === 1 && path[0] === '') {
	            path.push('');
	        }

	        path = path.join(delimiter);
	    } else {
	        path = baseName + path;
	    }

	    return path;
	}

	function parsePath(path) {
	    var pathname = path || '/';
	    var search = '';
	    var hash = '';

	    var hashIndex = pathname.indexOf('#');
	    if (hashIndex !== -1) {
	        hash = pathname.substr(hashIndex);
	        pathname = pathname.substr(0, hashIndex);
	    }

	    var searchIndex = pathname.indexOf('?');
	    if (searchIndex !== -1) {
	        search = pathname.substr(searchIndex);
	        pathname = pathname.substr(0, searchIndex);
	    }

	    pathname = decodeURI(pathname);

	    return {
	        pathname: pathname,
	        search: search === '?' ? '' : search,
	        hash: hash === '#' ? '' : hash
	    };
	}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _warning = __webpack_require__(31);

	var _warning2 = _interopRequireDefault(_warning);

	var _neact = __webpack_require__(1);

	var Neact = _interopRequireWildcard(_neact);

	var _matchPath = __webpack_require__(50);

	var _matchPath2 = _interopRequireDefault(_matchPath);

	var _objectAssign = __webpack_require__(41);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _shared = __webpack_require__(48);

	function _interopRequireWildcard(obj) {
	    if (obj && obj.__esModule) {
	        return obj;
	    } else {
	        var newObj = {};if (obj != null) {
	            for (var key in obj) {
	                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	            }
	        }newObj['default'] = obj;return newObj;
	    }
	}

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var Route = Neact.createClass({
	    construct: function construct(props, context) {
	        this.state.match = this.computeMatch(props, context.router);
	    },
	    computeMatch: function computeMatch(_ref, _ref2) {
	        var location = _ref.location,
	            path = _ref.path,
	            strict = _ref.strict,
	            exact = _ref.exact,
	            computedMatch = _ref.computedMatch;
	        var route = _ref2.route;

	        if (computedMatch) {
	            return computedMatch;
	        }

	        var pathname = (location || route.location).pathname;

	        return path ? (0, _matchPath2['default'])(pathname, { path: path, strict: strict, exact: exact }) : route.match;
	    },
	    getChildContext: function getChildContext() {
	        return {
	            router: (0, _objectAssign2['default'])({}, this.context.router, {
	                route: {
	                    location: this.props.location || this.context.router.route.location,
	                    match: this.state.match
	                }
	            })
	        };
	    },
	    componentWillMount: function componentWillMount() {
	        var _props = this.props,
	            component = _props.component,
	            render = _props.render,
	            children = _props.children;

	        (0, _warning2['default'])(!(component && render), 'You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored');

	        (0, _warning2['default'])(!(component && children), 'You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored');

	        (0, _warning2['default'])(!(render && children), 'You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored');
	    },
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	        (0, _warning2['default'])(!(nextProps.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

	        (0, _warning2['default'])(!(!nextProps.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');

	        this.setState({
	            match: this.computeMatch(nextProps, nextContext.router)
	        });
	    },
	    render: function render() {
	        var match = this.state.match;
	        var _props2 = this.props,
	            children = _props2.children,
	            component = _props2.component,
	            render = _props2.render;
	        var _context$router = this.context.router,
	            history = _context$router.history,
	            route = _context$router.route,
	            staticContext = _context$router.staticContext;

	        var location = this.props.location || route.location;
	        var props = { match: match, location: location, history: history, staticContext: staticContext };

	        return component ? // component prop gets first priority, only called if there's a match
	        match ? Neact.createElement(component, props) : null : render ? // render prop is next, only called if there's a match
	        match ? render(props) : null : children ? // children come last, always called
	        typeof children === 'function' ? children(props) : !(0, _shared.isArray)(children) || children.length ? // Preact defaults to empty children array
	        Neact.Children.only(children) : null : null;
	    }
	});

	exports['default'] = Route;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _pathToRegexp = __webpack_require__(51);

	var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _toArray(arr) {
	    return Array.isArray(arr) ? arr : Array.from(arr);
	}

	var patternCache = {};
	var cacheLimit = 10000;
	var cacheCount = 0;

	var compilePath = function compilePath(pattern, options) {
	    var cacheKey = '' + options.end + options.strict;
	    var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

	    if (cache[pattern]) {
	        return cache[pattern];
	    }

	    var keys = [];
	    var re = (0, _pathToRegexp2['default'])(pattern, keys, options);
	    var compiledPattern = { re: re, keys: keys };

	    if (cacheCount < cacheLimit) {
	        cache[pattern] = compiledPattern;
	        cacheCount++;
	    }

	    return compiledPattern;
	};

	/**
	 * Public API for matching a URL pathname to a path pattern.
	 */
	var matchPath = function matchPath(pathname) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    if (typeof options === 'string') {
	        options = { path: options };
	    }

	    var _options = options,
	        _options$path = _options.path,
	        path = _options$path === undefined ? '/' : _options$path,
	        _options$exact = _options.exact,
	        exact = _options$exact === undefined ? false : _options$exact,
	        _options$strict = _options.strict,
	        strict = _options$strict === undefined ? false : _options$strict;

	    var _compilePath = compilePath(path, { end: exact, strict: strict }),
	        re = _compilePath.re,
	        keys = _compilePath.keys;

	    var match = re.exec(pathname);

	    if (!match) {
	        return null;
	    }

	    var _match = _toArray(match),
	        url = _match[0],
	        values = _match.slice(1);

	    var isExact = pathname === url;

	    if (exact && !isExact) {
	        return null;
	    }

	    return {
	        path: path, // the path pattern used to match
	        url: path === '/' && url === '' ? '/' : url, // the matched portion of the URL
	        isExact: isExact, // whether or not we matched exactly
	        params: keys.reduce(function (memo, key, index) {
	            memo[key.name] = values[index];
	            return memo;
	        }, {})
	    };
	};

	exports['default'] = matchPath;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var isarray = __webpack_require__(52

	/**
	 * Expose `pathToRegexp`.
	 */
	);module.exports = pathToRegexp;
	module.exports.parse = parse;
	module.exports.compile = compile;
	module.exports.tokensToFunction = tokensToFunction;
	module.exports.tokensToRegExp = tokensToRegExp;

	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	// Match escaped characters that would otherwise appear in future matches.
	// This allows the user to escape special characters that won't transform.
	'(\\\\.)',
	// Match Express-style parameters and un-named parameters with a prefix
	// and optional suffixes. Matches appear as:
	//
	// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string}  str
	 * @param  {Object=} options
	 * @return {!Array}
	 */
	function parse(str, options) {
	  var tokens = [];
	  var key = 0;
	  var index = 0;
	  var path = '';
	  var defaultDelimiter = options && options.delimiter || '/';
	  var res;

	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0];
	    var escaped = res[1];
	    var offset = res.index;
	    path += str.slice(index, offset);
	    index = offset + m.length;

	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1];
	      continue;
	    }

	    var next = str[index];
	    var prefix = res[2];
	    var name = res[3];
	    var capture = res[4];
	    var group = res[5];
	    var modifier = res[6];
	    var asterisk = res[7];

	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path);
	      path = '';
	    }

	    var partial = prefix != null && next != null && next !== prefix;
	    var repeat = modifier === '+' || modifier === '*';
	    var optional = modifier === '?' || modifier === '*';
	    var delimiter = res[2] || defaultDelimiter;
	    var pattern = capture || group;

	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      partial: partial,
	      asterisk: !!asterisk,
	      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
	    });
	  }

	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index);
	  }

	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path);
	  }

	  return tokens;
	}

	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {string}             str
	 * @param  {Object=}            options
	 * @return {!function(Object=, Object=)}
	 */
	function compile(str, options) {
	  return tokensToFunction(parse(str, options));
	}

	/**
	 * Prettier encoding of URI path segments.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeURIComponentPretty(str) {
	  return encodeURI(str).replace(/[\/?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	  });
	}

	/**
	 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeAsterisk(str) {
	  return encodeURI(str).replace(/[?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	  });
	}

	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction(tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length);

	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (_typeof(tokens[i]) === 'object') {
	      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
	    }
	  }

	  return function (obj, opts) {
	    var path = '';
	    var data = obj || {};
	    var options = opts || {};
	    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i];

	      if (typeof token === 'string') {
	        path += token;

	        continue;
	      }

	      var value = data[token.name];
	      var segment;

	      if (value == null) {
	        if (token.optional) {
	          // Prepend partial segment prefixes.
	          if (token.partial) {
	            path += token.prefix;
	          }

	          continue;
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined');
	        }
	      }

	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
	        }

	        if (value.length === 0) {
	          if (token.optional) {
	            continue;
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty');
	          }
	        }

	        for (var j = 0; j < value.length; j++) {
	          segment = encode(value[j]);

	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
	          }

	          path += (j === 0 ? token.prefix : token.delimiter) + segment;
	        }

	        continue;
	      }

	      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
	      }

	      path += token.prefix + segment;
	    }

	    return path;
	  };
	}

	/**
	 * Escape a regular expression string.
	 *
	 * @param  {string} str
	 * @return {string}
	 */
	function escapeString(str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
	}

	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {string} group
	 * @return {string}
	 */
	function escapeGroup(group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1');
	}

	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {!RegExp} re
	 * @param  {Array}   keys
	 * @return {!RegExp}
	 */
	function attachKeys(re, keys) {
	  re.keys = keys;
	  return re;
	}

	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {string}
	 */
	function flags(options) {
	  return options.sensitive ? '' : 'i';
	}

	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {!RegExp} path
	 * @param  {!Array}  keys
	 * @return {!RegExp}
	 */
	function regexpToRegexp(path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g);

	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        partial: false,
	        asterisk: false,
	        pattern: null
	      });
	    }
	  }

	  return attachKeys(path, keys);
	}

	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {!Array}  path
	 * @param  {Array}   keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function arrayToRegexp(path, keys, options) {
	  var parts = [];

	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source);
	  }

	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

	  return attachKeys(regexp, keys);
	}

	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {string}  path
	 * @param  {!Array}  keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function stringToRegexp(path, keys, options) {
	  return tokensToRegExp(parse(path, options), keys, options);
	}

	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {!Array}          tokens
	 * @param  {(Array|Object)=} keys
	 * @param  {Object=}         options
	 * @return {!RegExp}
	 */
	function tokensToRegExp(tokens, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */keys || options;
	    keys = [];
	  }

	  options = options || {};

	  var strict = options.strict;
	  var end = options.end !== false;
	  var route = '';

	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i];

	    if (typeof token === 'string') {
	      route += escapeString(token);
	    } else {
	      var prefix = escapeString(token.prefix);
	      var capture = '(?:' + token.pattern + ')';

	      keys.push(token);

	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*';
	      }

	      if (token.optional) {
	        if (!token.partial) {
	          capture = '(?:' + prefix + '(' + capture + '))?';
	        } else {
	          capture = prefix + '(' + capture + ')?';
	        }
	      } else {
	        capture = prefix + '(' + capture + ')';
	      }

	      route += capture;
	    }
	  }

	  var delimiter = escapeString(options.delimiter || '/');
	  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
	  }

	  if (end) {
	    route += '$';
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
	  }

	  return attachKeys(new RegExp('^' + route, flags(options)), keys);
	}

	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(string|RegExp|Array)} path
	 * @param  {(Array|Object)=}       keys
	 * @param  {Object=}               options
	 * @return {!RegExp}
	 */
	function pathToRegexp(path, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */keys || options;
	    keys = [];
	  }

	  options = options || {};

	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, /** @type {!Array} */keys);
	  }

	  if (isarray(path)) {
	    return arrayToRegexp( /** @type {!Array} */path, /** @type {!Array} */keys, options);
	  }

	  return stringToRegexp( /** @type {string} */path, /** @type {!Array} */keys, options);
	}

/***/ }),
/* 52 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _neact = __webpack_require__(1);

	var Neact = _interopRequireWildcard(_neact);

	function _interopRequireWildcard(obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }newObj['default'] = obj;return newObj;
	  }
	}

	/**
	 * The public API for prompting the user before navigating away
	 * from a screen with a component.
	 */
	var Prompt = Neact.createClass({
	  enable: function enable(message) {
	    if (this.unblock) this.unblock();

	    this.unblock = this.context.router.history.block(message);
	  },
	  disable: function disable() {
	    if (this.unblock) {
	      this.unblock();
	      this.unblock = null;
	    }
	  },
	  componentWillMount: function componentWillMount() {
	    if (this.props.when) this.enable(this.props.message);
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (nextProps.when) {
	      if (!this.props.when || this.props.message !== nextProps.message) this.enable(nextProps.message);
	    } else {
	      this.disable();
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this.disable();
	  },
	  render: function render() {
	    return null;
	  }
	});

	Prompt.defaultProps = {
	  when: true
	};

	exports['default'] = Prompt;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _neact = __webpack_require__(1);

	var Neact = _interopRequireWildcard(_neact);

	function _interopRequireWildcard(obj) {
	    if (obj && obj.__esModule) {
	        return obj;
	    } else {
	        var newObj = {};if (obj != null) {
	            for (var key in obj) {
	                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	            }
	        }newObj['default'] = obj;return newObj;
	    }
	}

	var Redirect = Neact.createClass({
	    isStatic: function isStatic() {
	        return this.context.router && this.context.router.staticContext;
	    },
	    componentWillMount: function componentWillMount() {
	        if (this.isStatic()) {
	            this.perform();
	        }
	    },
	    componentDidMount: function componentDidMount() {
	        if (!this.isStatic()) {
	            this.perform();
	        }
	    },
	    perform: function perform() {
	        var history = this.context.router.history;
	        var _props = this.props,
	            push = _props.push,
	            to = _props.to;

	        if (push) {
	            history.push(to);
	        } else {
	            history.replace(to);
	        }
	    },
	    render: function render() {
	        return null;
	    }
	});

	Redirect.displayName = "Redirect";

	Redirect.defaultProps = {
	    push: false
	};

	exports['default'] = Redirect;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	/*@jsx Neact.createElement*/
	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _neact = __webpack_require__(1);

	var Neact = _interopRequireWildcard(_neact);

	var _PathUtils = __webpack_require__(37);

	var _Router = __webpack_require__(40);

	var _Router2 = _interopRequireDefault(_Router);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _interopRequireWildcard(obj) {
	    if (obj && obj.__esModule) {
	        return obj;
	    } else {
	        var newObj = {};if (obj != null) {
	            for (var key in obj) {
	                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	            }
	        }newObj['default'] = obj;return newObj;
	    }
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	var normalizeLocation = function normalizeLocation(object) {
	    var _object$pathname = object.pathname,
	        pathname = _object$pathname === undefined ? '/' : _object$pathname,
	        _object$search = object.search,
	        search = _object$search === undefined ? '' : _object$search,
	        _object$hash = object.hash,
	        hash = _object$hash === undefined ? '' : _object$hash;

	    return {
	        pathname: pathname,
	        search: search === '?' ? '' : search,
	        hash: hash === '#' ? '' : hash
	    };
	};

	var addBasename = function addBasename(basename, location) {
	    if (!basename) return location;

	    return _extends({}, location, {
	        pathname: (0, _PathUtils.addLeadingSlash)(basename) + location.pathname
	    });
	};

	var stripBasename = function stripBasename(basename, location) {
	    if (!basename) return location;

	    var base = (0, _PathUtils.addLeadingSlash)(basename);

	    if (location.pathname.indexOf(base) !== 0) return location;

	    return _extends({}, location, {
	        pathname: location.pathname.substr(base.length)
	    });
	};

	var createLocation = function createLocation(location) {
	    return typeof location === 'string' ? (0, _PathUtils.parsePath)(location) : normalizeLocation(location);
	};

	var createURL = function createURL(location) {
	    return typeof location === 'string' ? location : (0, _PathUtils.createPath)(location);
	};

	var staticHandler = function staticHandler(methodName) {
	    return function () {
	        throw new Error('You cannot %{methodName} with <StaticRouter>');
	    };
	};

	var noop = function noop() {};

	/**
	 * The public top-level API for a "static" <Router>, so-called because it
	 * can't actually change the current location. Instead, it just records
	 * location changes in a context object. Useful mainly in testing and
	 * server-rendering scenarios.
	 */
	var StaticRouter = Neact.createClass({
	    getChildContext: function getChildContext() {
	        return {
	            router: {
	                staticContext: this.props.context
	            }
	        };
	    },
	    createHref: function createHref(path) {
	        return (0, _PathUtils.addLeadingSlash)(this.props.basename + createURL(path));
	    },
	    handlePush: function handlePush(location) {
	        var _props = this.props,
	            basename = _props.basename,
	            context = _props.context;

	        context.action = 'PUSH';
	        context.location = addBasename(basename, createLocation(location));
	        context.url = createURL(context.location);
	    },
	    handleReplace: function handleReplace(location) {
	        var _props2 = this.props,
	            basename = _props2.basename,
	            context = _props2.context;

	        context.action = 'REPLACE';
	        context.location = addBasename(basename, createLocation(location));
	        context.url = createURL(context.location);
	    },
	    handleListen: function handleListen() {
	        return noop;
	    },
	    handleBlock: function handleBlock() {
	        return noop;
	    },
	    render: function render() {
	        var _props3 = this.props,
	            basename = _props3.basename,
	            context = _props3.context,
	            location = _props3.location,
	            props = _objectWithoutProperties(_props3, ['basename', 'context', 'location']);

	        var history = {
	            createHref: this.createHref,
	            action: 'POP',
	            location: stripBasename(basename, createLocation(location)),
	            push: this.handlePush,
	            replace: this.handleReplace,
	            go: staticHandler('go'),
	            goBack: staticHandler('goBack'),
	            goForward: staticHandler('goForward'),
	            listen: this.handleListen,
	            block: this.handleBlock
	        };

	        return Neact.createElement(_Router2['default'], _extends({}, props, { history: history }));
	    }
	});

	StaticRouter.defaultProps = {
	    basename: '',
	    location: '/'
	};

	exports['default'] = StaticRouter;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _neact = __webpack_require__(1);

	var Neact = _interopRequireWildcard(_neact);

	var _warning = __webpack_require__(31);

	var _warning2 = _interopRequireDefault(_warning);

	var _matchPath = __webpack_require__(50);

	var _matchPath2 = _interopRequireDefault(_matchPath);

	var _objectAssign = __webpack_require__(41);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _shared = __webpack_require__(48);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _interopRequireWildcard(obj) {
	    if (obj && obj.__esModule) {
	        return obj;
	    } else {
	        var newObj = {};if (obj != null) {
	            for (var key in obj) {
	                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	            }
	        }newObj['default'] = obj;return newObj;
	    }
	}

	var Switch = Neact.createClass({
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        (0, _warning2['default'])(!(nextProps.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

	        (0, _warning2['default'])(!(!nextProps.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
	    },
	    render: function render() {
	        var route = this.context.router.route;
	        var children = this.props.children;

	        var location = this.props.location || route.location;

	        var match = void 0,
	            child = void 0;
	        Neact.Children.forEach(children, function (element) {
	            if (!Neact.isValidElement(element)) {
	                return;
	            }

	            var _element$props = element.props,
	                pathProp = _element$props.path,
	                exact = _element$props.exact,
	                strict = _element$props.strict,
	                from = _element$props.from;

	            var path = pathProp || from;

	            if ((0, _shared.isNullOrUndef)(match)) {
	                child = element;
	                match = path ? (0, _matchPath2['default'])(location.pathname, { path: path, exact: exact, strict: strict }) : route.match;
	            }
	        });

	        child.props = (0, _objectAssign2['default'])(child.props || {}, { location: location, computedMatch: match });

	        return match ? child : null;
	    }
	});

	exports['default'] = Switch;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.createPath = exports.parsePath = exports.locationsAreEqual = exports.createLocation = exports.createMemoryHistory = exports.createHashHistory = exports.createBrowserHistory = undefined;

	var _LocationUtils = __webpack_require__(34);

	Object.defineProperty(exports, 'createLocation', {
	  enumerable: true,
	  get: function get() {
	    return _LocationUtils.createLocation;
	  }
	});
	Object.defineProperty(exports, 'locationsAreEqual', {
	  enumerable: true,
	  get: function get() {
	    return _LocationUtils.locationsAreEqual;
	  }
	});

	var _PathUtils = __webpack_require__(37);

	Object.defineProperty(exports, 'parsePath', {
	  enumerable: true,
	  get: function get() {
	    return _PathUtils.parsePath;
	  }
	});
	Object.defineProperty(exports, 'createPath', {
	  enumerable: true,
	  get: function get() {
	    return _PathUtils.createPath;
	  }
	});

	var _createBrowserHistory2 = __webpack_require__(30);

	var _createBrowserHistory3 = _interopRequireDefault(_createBrowserHistory2);

	var _createHashHistory2 = __webpack_require__(43);

	var _createHashHistory3 = _interopRequireDefault(_createHashHistory2);

	var _createMemoryHistory2 = __webpack_require__(46);

	var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.createBrowserHistory = _createBrowserHistory3.default;
	exports.createHashHistory = _createHashHistory3.default;
	exports.createMemoryHistory = _createMemoryHistory3.default;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	exports.default = function () {
	    return (0, _neact.createElement)(
	        'h1',
	        null,
	        'About'
	    );
	};

	var _neact = __webpack_require__(1);

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	exports.default = function () {
	    return (0, _neact.createElement)(_Table2.default, { rows: 20 });
	};

	var _neact = __webpack_require__(1);

	var _Table = __webpack_require__(60);

	var _Table2 = _interopRequireDefault(_Table);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (props) {
	    var data = [];
	    for (var i = 0; i < props.rows; i++) {
	        data.push({ id: i, name: 'nobo' + i, age: props.rows + i });
	    }
	    return Neact.createElement(Table, { columns: columns, data: data });
	};

	var _neact = __webpack_require__(1);

	var Neact = _interopRequireWildcard(_neact);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** @jsx Neact.createElement */

	var THead = function (_Neact$Component) {
	    _inherits(THead, _Neact$Component);

	    function THead(props) {
	        _classCallCheck(this, THead);

	        var _this = _possibleConstructorReturn(this, _Neact$Component.call(this, props));

	        _this.props.columns = _this.props.columns || [];
	        return _this;
	    }

	    THead.prototype.render = function render() {
	        var columns = this.props.columns;

	        return Neact.createElement(
	            "thead",
	            null,
	            Neact.createElement(
	                "tr",
	                null,
	                Neact.createElement(
	                    "th",
	                    { width: "40", "class": "h" },
	                    "#"
	                ),
	                Neact.utils.map(columns, function (data) {
	                    return Neact.createElement(
	                        "th",
	                        { "class": data.hcls },
	                        data.title
	                    );
	                })
	            )
	        );
	    };

	    return THead;
	}(Neact.Component);

	var RowDeltal = function (_Neact$Component2) {
	    _inherits(RowDeltal, _Neact$Component2);

	    function RowDeltal(props) {
	        _classCallCheck(this, RowDeltal);

	        return _possibleConstructorReturn(this, _Neact$Component2.call(this, props));
	    }

	    RowDeltal.prototype.render = function render() {
	        var rowData = this.props.rowData;
	        return Neact.createElement(
	            "div",
	            null,
	            "ID : ",
	            rowData.id,
	            Neact.createElement("br", null),
	            "NAME : ",
	            rowData.name,
	            Neact.createElement("br", null),
	            "AGE : ",
	            rowData.age
	        );
	    };

	    return RowDeltal;
	}(Neact.Component);

	var TBody = Neact.createClass({
	    getDefaultProps: function getDefaultProps() {
	        return {
	            columns: [],
	            data: []
	        };
	    },

	    addData: function addData() {
	        var props = this.props;
	        if (props.onAddData) {
	            props.onAddData();
	        }
	    },

	    deleteData: function deleteData() {
	        var props = this.props;
	        if (props.onRemoveData && this.selectIdx !== null) {
	            props.onRemoveData(this.selectIdx);
	        }
	    },

	    shouldComponentUpdate: function shouldComponentUpdate() {},

	    componentWillMount: function componentWillMount() {

	        this.selectIdx = null;
	    },

	    render: function render() {
	        var _this3 = this;

	        var self = this;
	        var columns = this.props.columns;
	        var data = this.props.data;
	        return Neact.createElement(
	            "tbody",
	            { tabIndex: "0", onKeyDown: function onKeyDown(e) {
	                    //UP 38 DOWN 40
	                    if (!data.length) return;
	                    if (self.selectIdx === null) {
	                        self.selectIdx = 0;
	                    } else if (e.keyCode == 38) {
	                        self.selectIdx = Math.max(0, --self.selectIdx);
	                    } else if (e.keyCode == 40) {
	                        self.selectIdx = Math.min(data.length - 1, ++self.selectIdx);
	                    }

	                    e.preventDefault();

	                    self.setState(null);
	                } },
	            Neact.createElement(
	                "tr",
	                null,
	                Neact.createElement(
	                    "td",
	                    { colspan: columns.length + 1 },
	                    Neact.createElement(
	                        "button",
	                        { onClick: function onClick(e) {
	                                return _this3.addData();
	                            } },
	                        "\u65B0\u589E"
	                    ),
	                    Neact.createElement(
	                        "button",
	                        { disabled: !data.length || self.selectIdx === null, onClick: function onClick(e) {
	                                return _this3.deleteData();
	                            } },
	                        "\u5220\u9664"
	                    )
	                )
	            ),
	            Neact.utils.map(data, function (rowData, i) {
	                var isSelected = false;
	                if (i === self.selectIdx) {
	                    isSelected = true;
	                }

	                var v = [];

	                var $row = Neact.createElement(
	                    "tr",
	                    { onClick: function onClick() {
	                            self.selectIdx = i;
	                            self.setState(null);
	                        }, className: isSelected ? 'selected' : '' },
	                    Neact.createElement(
	                        "td",
	                        { "class": "b" },
	                        Neact.createElement("input", { type: "checkbox", checked: isSelected ? 'checked' : '' })
	                    ),
	                    Neact.utils.map(columns, function (column) {
	                        return Neact.createElement(
	                            "td",
	                            { "class": column.bcls },
	                            rowData[column.field]
	                        );
	                    })
	                );

	                v.push($row);

	                if (isSelected) {
	                    v.push(Neact.createElement(
	                        "tr",
	                        { key: "_expand" },
	                        Neact.createElement(
	                            "td",
	                            { colspan: columns.length + 1 },
	                            Neact.createElement(RowDeltal, { rowData: rowData })
	                        )
	                    ));
	                }

	                return v;
	            })
	        );
	    }
	});

	var Table = Neact.createClass({

	    construct: function construct(props) {
	        this.state = {
	            columns: props.columns || [],
	            data: props.data || []
	        };
	    },

	    addData: function addData() {
	        var data = this.state.data;

	        data.push({
	            id: data.length,
	            name: 'nobo' + data.length,
	            age: 19
	        });

	        this.setState({
	            data: data
	        });
	    },

	    removeData: function removeData(idx) {
	        var data = this.state.data;
	        data.splice(idx, 1);
	        this.setState({
	            data: data
	        });
	    },

	    render: function render() {
	        var _this4 = this;

	        var columns = this.state.columns;
	        var data = this.state.data;

	        return Neact.createElement(
	            "table",
	            { style: "width:500px;border-collapse:collapse;table-layout:fixed;", cellpadding: "0", cellspacing: "0" },
	            Neact.createElement(THead, { columns: columns }),
	            Neact.createElement(TBody, {
	                columns: columns,
	                data: data,
	                onAddData: function onAddData() {
	                    return _this4.addData();
	                },
	                onRemoveData: function onRemoveData(idx) {
	                    return _this4.removeData(idx);
	                }
	            })
	        );
	    }
	});

	var columns = [{
	    hcls: 'h',
	    bcls: 'b',
	    field: 'id',
	    title: 'ID'
	}, {
	    hcls: 'h',
	    bcls: 'b',
	    field: 'name',
	    title: '名称'
	}, {
	    hcls: 'h',
	    bcls: 'b',
	    field: 'age',
	    title: '年龄'
	}];

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	exports.default = function () {
	    return (0, _neact.createElement)(_Table2.default, { rows: 30 });
	};

	var _neact = __webpack_require__(1);

	var _Table = __webpack_require__(60);

	var _Table2 = _interopRequireDefault(_Table);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })
/******/ ]);