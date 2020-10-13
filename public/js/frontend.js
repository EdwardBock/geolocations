/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script/frontend.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/create-react-class/factory.js":
/*!****************************************************!*\
  !*** ./node_modules/create-react-class/factory.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var emptyObject = __webpack_require__(/*! fbjs/lib/emptyObject */ "./node_modules/fbjs/lib/emptyObject.js");
var _invariant = __webpack_require__(/*! fbjs/lib/invariant */ "./node_modules/fbjs/lib/invariant.js");

if (true) {
  var warning = __webpack_require__(/*! fbjs/lib/warning */ "./node_modules/fbjs/lib/warning.js");
}

var MIXINS_KEY = 'mixins';

// Helper function to allow the creation of anonymous functions which do not
// have .name set to the name of the variable being assigned to.
function identity(fn) {
  return fn;
}

var ReactPropTypeLocationNames;
if (true) {
  ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
} else {}

function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
  /**
   * Policies that describe methods in `ReactClassInterface`.
   */

  var injectedMixins = [];

  /**
   * Composite components are higher-level components that compose other composite
   * or host components.
   *
   * To create a new type of `ReactClass`, pass a specification of
   * your new class to `React.createClass`. The only requirement of your class
   * specification is that you implement a `render` method.
   *
   *   var MyComponent = React.createClass({
   *     render: function() {
   *       return <div>Hello World</div>;
   *     }
   *   });
   *
   * The class specification supports a specific protocol of methods that have
   * special meaning (e.g. `render`). See `ReactClassInterface` for
   * more the comprehensive protocol. Any other properties and methods in the
   * class specification will be available on the prototype.
   *
   * @interface ReactClassInterface
   * @internal
   */
  var ReactClassInterface = {
    /**
     * An array of Mixin objects to include when defining your component.
     *
     * @type {array}
     * @optional
     */
    mixins: 'DEFINE_MANY',

    /**
     * An object containing properties and methods that should be defined on
     * the component's constructor instead of its prototype (static methods).
     *
     * @type {object}
     * @optional
     */
    statics: 'DEFINE_MANY',

    /**
     * Definition of prop types for this component.
     *
     * @type {object}
     * @optional
     */
    propTypes: 'DEFINE_MANY',

    /**
     * Definition of context types for this component.
     *
     * @type {object}
     * @optional
     */
    contextTypes: 'DEFINE_MANY',

    /**
     * Definition of context types this component sets for its children.
     *
     * @type {object}
     * @optional
     */
    childContextTypes: 'DEFINE_MANY',

    // ==== Definition methods ====

    /**
     * Invoked when the component is mounted. Values in the mapping will be set on
     * `this.props` if that prop is not specified (i.e. using an `in` check).
     *
     * This method is invoked before `getInitialState` and therefore cannot rely
     * on `this.state` or use `this.setState`.
     *
     * @return {object}
     * @optional
     */
    getDefaultProps: 'DEFINE_MANY_MERGED',

    /**
     * Invoked once before the component is mounted. The return value will be used
     * as the initial value of `this.state`.
     *
     *   getInitialState: function() {
     *     return {
     *       isOn: false,
     *       fooBaz: new BazFoo()
     *     }
     *   }
     *
     * @return {object}
     * @optional
     */
    getInitialState: 'DEFINE_MANY_MERGED',

    /**
     * @return {object}
     * @optional
     */
    getChildContext: 'DEFINE_MANY_MERGED',

    /**
     * Uses props from `this.props` and state from `this.state` to render the
     * structure of the component.
     *
     * No guarantees are made about when or how often this method is invoked, so
     * it must not have side effects.
     *
     *   render: function() {
     *     var name = this.props.name;
     *     return <div>Hello, {name}!</div>;
     *   }
     *
     * @return {ReactComponent}
     * @required
     */
    render: 'DEFINE_ONCE',

    // ==== Delegate methods ====

    /**
     * Invoked when the component is initially created and about to be mounted.
     * This may have side effects, but any external subscriptions or data created
     * by this method must be cleaned up in `componentWillUnmount`.
     *
     * @optional
     */
    componentWillMount: 'DEFINE_MANY',

    /**
     * Invoked when the component has been mounted and has a DOM representation.
     * However, there is no guarantee that the DOM node is in the document.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been mounted (initialized and rendered) for the first time.
     *
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidMount: 'DEFINE_MANY',

    /**
     * Invoked before the component receives new props.
     *
     * Use this as an opportunity to react to a prop transition by updating the
     * state using `this.setState`. Current props are accessed via `this.props`.
     *
     *   componentWillReceiveProps: function(nextProps, nextContext) {
     *     this.setState({
     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
     *     });
     *   }
     *
     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
     * transition may cause a state change, but the opposite is not true. If you
     * need it, you are probably looking for `componentWillUpdate`.
     *
     * @param {object} nextProps
     * @optional
     */
    componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Invoked while deciding if the component should be updated as a result of
     * receiving new props, state and/or context.
     *
     * Use this as an opportunity to `return false` when you're certain that the
     * transition to the new props/state/context will not require a component
     * update.
     *
     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
     *     return !equal(nextProps, this.props) ||
     *       !equal(nextState, this.state) ||
     *       !equal(nextContext, this.context);
     *   }
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @return {boolean} True if the component should update.
     * @optional
     */
    shouldComponentUpdate: 'DEFINE_ONCE',

    /**
     * Invoked when the component is about to update due to a transition from
     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
     * and `nextContext`.
     *
     * Use this as an opportunity to perform preparation before an update occurs.
     *
     * NOTE: You **cannot** use `this.setState()` in this method.
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @param {ReactReconcileTransaction} transaction
     * @optional
     */
    componentWillUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component's DOM representation has been updated.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been updated.
     *
     * @param {object} prevProps
     * @param {?object} prevState
     * @param {?object} prevContext
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component is about to be removed from its parent and have
     * its DOM representation destroyed.
     *
     * Use this as an opportunity to deallocate any external resources.
     *
     * NOTE: There is no `componentDidUnmount` since your component will have been
     * destroyed by that point.
     *
     * @optional
     */
    componentWillUnmount: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillMount`.
     *
     * @optional
     */
    UNSAFE_componentWillMount: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillReceiveProps`.
     *
     * @optional
     */
    UNSAFE_componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillUpdate`.
     *
     * @optional
     */
    UNSAFE_componentWillUpdate: 'DEFINE_MANY',

    // ==== Advanced methods ====

    /**
     * Updates the component's currently mounted DOM representation.
     *
     * By default, this implements React's rendering and reconciliation algorithm.
     * Sophisticated clients may wish to override this.
     *
     * @param {ReactReconcileTransaction} transaction
     * @internal
     * @overridable
     */
    updateComponent: 'OVERRIDE_BASE'
  };

  /**
   * Similar to ReactClassInterface but for static methods.
   */
  var ReactClassStaticInterface = {
    /**
     * This method is invoked after a component is instantiated and when it
     * receives new props. Return an object to update state in response to
     * prop changes. Return null to indicate no change to state.
     *
     * If an object is returned, its keys will be merged into the existing state.
     *
     * @return {object || null}
     * @optional
     */
    getDerivedStateFromProps: 'DEFINE_MANY_MERGED'
  };

  /**
   * Mapping from class specification keys to special processing functions.
   *
   * Although these are declared like instance properties in the specification
   * when defining classes using `React.createClass`, they are actually static
   * and are accessible on the constructor instead of the prototype. Despite
   * being static, they must be defined outside of the "statics" key under
   * which all other static methods are defined.
   */
  var RESERVED_SPEC_KEYS = {
    displayName: function(Constructor, displayName) {
      Constructor.displayName = displayName;
    },
    mixins: function(Constructor, mixins) {
      if (mixins) {
        for (var i = 0; i < mixins.length; i++) {
          mixSpecIntoComponent(Constructor, mixins[i]);
        }
      }
    },
    childContextTypes: function(Constructor, childContextTypes) {
      if (true) {
        validateTypeDef(Constructor, childContextTypes, 'childContext');
      }
      Constructor.childContextTypes = _assign(
        {},
        Constructor.childContextTypes,
        childContextTypes
      );
    },
    contextTypes: function(Constructor, contextTypes) {
      if (true) {
        validateTypeDef(Constructor, contextTypes, 'context');
      }
      Constructor.contextTypes = _assign(
        {},
        Constructor.contextTypes,
        contextTypes
      );
    },
    /**
     * Special case getDefaultProps which should move into statics but requires
     * automatic merging.
     */
    getDefaultProps: function(Constructor, getDefaultProps) {
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps = createMergedResultFunction(
          Constructor.getDefaultProps,
          getDefaultProps
        );
      } else {
        Constructor.getDefaultProps = getDefaultProps;
      }
    },
    propTypes: function(Constructor, propTypes) {
      if (true) {
        validateTypeDef(Constructor, propTypes, 'prop');
      }
      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
    },
    statics: function(Constructor, statics) {
      mixStaticSpecIntoComponent(Constructor, statics);
    },
    autobind: function() {}
  };

  function validateTypeDef(Constructor, typeDef, location) {
    for (var propName in typeDef) {
      if (typeDef.hasOwnProperty(propName)) {
        // use a warning instead of an _invariant so components
        // don't show up in prod but only in __DEV__
        if (true) {
          warning(
            typeof typeDef[propName] === 'function',
            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
              'React.PropTypes.',
            Constructor.displayName || 'ReactClass',
            ReactPropTypeLocationNames[location],
            propName
          );
        }
      }
    }
  }

  function validateMethodOverride(isAlreadyDefined, name) {
    var specPolicy = ReactClassInterface.hasOwnProperty(name)
      ? ReactClassInterface[name]
      : null;

    // Disallow overriding of base class methods unless explicitly allowed.
    if (ReactClassMixin.hasOwnProperty(name)) {
      _invariant(
        specPolicy === 'OVERRIDE_BASE',
        'ReactClassInterface: You are attempting to override ' +
          '`%s` from your class specification. Ensure that your method names ' +
          'do not overlap with React methods.',
        name
      );
    }

    // Disallow defining methods more than once unless explicitly allowed.
    if (isAlreadyDefined) {
      _invariant(
        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
        'ReactClassInterface: You are attempting to define ' +
          '`%s` on your component more than once. This conflict may be due ' +
          'to a mixin.',
        name
      );
    }
  }

  /**
   * Mixin helper which handles policy validation and reserved
   * specification keys when building React classes.
   */
  function mixSpecIntoComponent(Constructor, spec) {
    if (!spec) {
      if (true) {
        var typeofSpec = typeof spec;
        var isMixinValid = typeofSpec === 'object' && spec !== null;

        if (true) {
          warning(
            isMixinValid,
            "%s: You're attempting to include a mixin that is either null " +
              'or not an object. Check the mixins included by the component, ' +
              'as well as any mixins they include themselves. ' +
              'Expected object but got %s.',
            Constructor.displayName || 'ReactClass',
            spec === null ? null : typeofSpec
          );
        }
      }

      return;
    }

    _invariant(
      typeof spec !== 'function',
      "ReactClass: You're attempting to " +
        'use a component class or function as a mixin. Instead, just use a ' +
        'regular object.'
    );
    _invariant(
      !isValidElement(spec),
      "ReactClass: You're attempting to " +
        'use a component as a mixin. Instead, just use a regular object.'
    );

    var proto = Constructor.prototype;
    var autoBindPairs = proto.__reactAutoBindPairs;

    // By handling mixins before any other properties, we ensure the same
    // chaining order is applied to methods with DEFINE_MANY policy, whether
    // mixins are listed before or after these methods in the spec.
    if (spec.hasOwnProperty(MIXINS_KEY)) {
      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
    }

    for (var name in spec) {
      if (!spec.hasOwnProperty(name)) {
        continue;
      }

      if (name === MIXINS_KEY) {
        // We have already handled mixins in a special case above.
        continue;
      }

      var property = spec[name];
      var isAlreadyDefined = proto.hasOwnProperty(name);
      validateMethodOverride(isAlreadyDefined, name);

      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
        RESERVED_SPEC_KEYS[name](Constructor, property);
      } else {
        // Setup methods on prototype:
        // The following member methods should not be automatically bound:
        // 1. Expected ReactClass methods (in the "interface").
        // 2. Overridden methods (that were mixed in).
        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
        var isFunction = typeof property === 'function';
        var shouldAutoBind =
          isFunction &&
          !isReactClassMethod &&
          !isAlreadyDefined &&
          spec.autobind !== false;

        if (shouldAutoBind) {
          autoBindPairs.push(name, property);
          proto[name] = property;
        } else {
          if (isAlreadyDefined) {
            var specPolicy = ReactClassInterface[name];

            // These cases should already be caught by validateMethodOverride.
            _invariant(
              isReactClassMethod &&
                (specPolicy === 'DEFINE_MANY_MERGED' ||
                  specPolicy === 'DEFINE_MANY'),
              'ReactClass: Unexpected spec policy %s for key %s ' +
                'when mixing in component specs.',
              specPolicy,
              name
            );

            // For methods which are defined more than once, call the existing
            // methods before calling the new property, merging if appropriate.
            if (specPolicy === 'DEFINE_MANY_MERGED') {
              proto[name] = createMergedResultFunction(proto[name], property);
            } else if (specPolicy === 'DEFINE_MANY') {
              proto[name] = createChainedFunction(proto[name], property);
            }
          } else {
            proto[name] = property;
            if (true) {
              // Add verbose displayName to the function, which helps when looking
              // at profiling tools.
              if (typeof property === 'function' && spec.displayName) {
                proto[name].displayName = spec.displayName + '_' + name;
              }
            }
          }
        }
      }
    }
  }

  function mixStaticSpecIntoComponent(Constructor, statics) {
    if (!statics) {
      return;
    }

    for (var name in statics) {
      var property = statics[name];
      if (!statics.hasOwnProperty(name)) {
        continue;
      }

      var isReserved = name in RESERVED_SPEC_KEYS;
      _invariant(
        !isReserved,
        'ReactClass: You are attempting to define a reserved ' +
          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
          'as an instance property instead; it will still be accessible on the ' +
          'constructor.',
        name
      );

      var isAlreadyDefined = name in Constructor;
      if (isAlreadyDefined) {
        var specPolicy = ReactClassStaticInterface.hasOwnProperty(name)
          ? ReactClassStaticInterface[name]
          : null;

        _invariant(
          specPolicy === 'DEFINE_MANY_MERGED',
          'ReactClass: You are attempting to define ' +
            '`%s` on your component more than once. This conflict may be ' +
            'due to a mixin.',
          name
        );

        Constructor[name] = createMergedResultFunction(Constructor[name], property);

        return;
      }

      Constructor[name] = property;
    }
  }

  /**
   * Merge two objects, but throw if both contain the same key.
   *
   * @param {object} one The first object, which is mutated.
   * @param {object} two The second object
   * @return {object} one after it has been mutated to contain everything in two.
   */
  function mergeIntoWithNoDuplicateKeys(one, two) {
    _invariant(
      one && two && typeof one === 'object' && typeof two === 'object',
      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
    );

    for (var key in two) {
      if (two.hasOwnProperty(key)) {
        _invariant(
          one[key] === undefined,
          'mergeIntoWithNoDuplicateKeys(): ' +
            'Tried to merge two objects with the same key: `%s`. This conflict ' +
            'may be due to a mixin; in particular, this may be caused by two ' +
            'getInitialState() or getDefaultProps() methods returning objects ' +
            'with clashing keys.',
          key
        );
        one[key] = two[key];
      }
    }
    return one;
  }

  /**
   * Creates a function that invokes two functions and merges their return values.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createMergedResultFunction(one, two) {
    return function mergedResult() {
      var a = one.apply(this, arguments);
      var b = two.apply(this, arguments);
      if (a == null) {
        return b;
      } else if (b == null) {
        return a;
      }
      var c = {};
      mergeIntoWithNoDuplicateKeys(c, a);
      mergeIntoWithNoDuplicateKeys(c, b);
      return c;
    };
  }

  /**
   * Creates a function that invokes two functions and ignores their return vales.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createChainedFunction(one, two) {
    return function chainedFunction() {
      one.apply(this, arguments);
      two.apply(this, arguments);
    };
  }

  /**
   * Binds a method to the component.
   *
   * @param {object} component Component whose method is going to be bound.
   * @param {function} method Method to be bound.
   * @return {function} The bound method.
   */
  function bindAutoBindMethod(component, method) {
    var boundMethod = method.bind(component);
    if (true) {
      boundMethod.__reactBoundContext = component;
      boundMethod.__reactBoundMethod = method;
      boundMethod.__reactBoundArguments = null;
      var componentName = component.constructor.displayName;
      var _bind = boundMethod.bind;
      boundMethod.bind = function(newThis) {
        for (
          var _len = arguments.length,
            args = Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
          _key < _len;
          _key++
        ) {
          args[_key - 1] = arguments[_key];
        }

        // User is trying to bind() an autobound method; we effectively will
        // ignore the value of "this" that the user is trying to use, so
        // let's warn.
        if (newThis !== component && newThis !== null) {
          if (true) {
            warning(
              false,
              'bind(): React component methods may only be bound to the ' +
                'component instance. See %s',
              componentName
            );
          }
        } else if (!args.length) {
          if (true) {
            warning(
              false,
              'bind(): You are binding a component method to the component. ' +
                'React does this for you automatically in a high-performance ' +
                'way, so you can safely remove this call. See %s',
              componentName
            );
          }
          return boundMethod;
        }
        var reboundMethod = _bind.apply(boundMethod, arguments);
        reboundMethod.__reactBoundContext = component;
        reboundMethod.__reactBoundMethod = method;
        reboundMethod.__reactBoundArguments = args;
        return reboundMethod;
      };
    }
    return boundMethod;
  }

  /**
   * Binds all auto-bound methods in a component.
   *
   * @param {object} component Component whose method is going to be bound.
   */
  function bindAutoBindMethods(component) {
    var pairs = component.__reactAutoBindPairs;
    for (var i = 0; i < pairs.length; i += 2) {
      var autoBindKey = pairs[i];
      var method = pairs[i + 1];
      component[autoBindKey] = bindAutoBindMethod(component, method);
    }
  }

  var IsMountedPreMixin = {
    componentDidMount: function() {
      this.__isMounted = true;
    }
  };

  var IsMountedPostMixin = {
    componentWillUnmount: function() {
      this.__isMounted = false;
    }
  };

  /**
   * Add more to the ReactClass base class. These are all legacy features and
   * therefore not already part of the modern ReactComponent.
   */
  var ReactClassMixin = {
    /**
     * TODO: This will be deprecated because state should always keep a consistent
     * type signature and the only use case for this, is to avoid that.
     */
    replaceState: function(newState, callback) {
      this.updater.enqueueReplaceState(this, newState, callback);
    },

    /**
     * Checks whether or not this composite component is mounted.
     * @return {boolean} True if mounted, false otherwise.
     * @protected
     * @final
     */
    isMounted: function() {
      if (true) {
        warning(
          this.__didWarnIsMounted,
          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
            'subscriptions and pending requests in componentWillUnmount to ' +
            'prevent memory leaks.',
          (this.constructor && this.constructor.displayName) ||
            this.name ||
            'Component'
        );
        this.__didWarnIsMounted = true;
      }
      return !!this.__isMounted;
    }
  };

  var ReactClassComponent = function() {};
  _assign(
    ReactClassComponent.prototype,
    ReactComponent.prototype,
    ReactClassMixin
  );

  /**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
  function createClass(spec) {
    // To keep our warnings more understandable, we'll use a little hack here to
    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
    // unnecessarily identify a class without displayName as 'Constructor'.
    var Constructor = identity(function(props, context, updater) {
      // This constructor gets overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted.

      if (true) {
        warning(
          this instanceof Constructor,
          'Something is calling a React component directly. Use a factory or ' +
            'JSX instead. See: https://fb.me/react-legacyfactory'
        );
      }

      // Wire up auto-binding
      if (this.__reactAutoBindPairs.length) {
        bindAutoBindMethods(this);
      }

      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;

      this.state = null;

      // ReactClasses doesn't have constructors. Instead, they use the
      // getInitialState and componentWillMount methods for initialization.

      var initialState = this.getInitialState ? this.getInitialState() : null;
      if (true) {
        // We allow auto-mocks to proceed as if they're returning null.
        if (
          initialState === undefined &&
          this.getInitialState._isMockFunction
        ) {
          // This is probably bad practice. Consider warning here and
          // deprecating this convenience.
          initialState = null;
        }
      }
      _invariant(
        typeof initialState === 'object' && !Array.isArray(initialState),
        '%s.getInitialState(): must return an object or null',
        Constructor.displayName || 'ReactCompositeComponent'
      );

      this.state = initialState;
    });
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];

    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
    mixSpecIntoComponent(Constructor, spec);
    mixSpecIntoComponent(Constructor, IsMountedPostMixin);

    // Initialize the defaultProps property after all mixins have been merged.
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }

    if (true) {
      // This is a tag to indicate that the use of these method names is ok,
      // since it's used with createClass. If it's not, then it's likely a
      // mistake so we'll warn you to use the static property, property
      // initializer or constructor respectively.
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps.isReactClassApproved = {};
      }
      if (Constructor.prototype.getInitialState) {
        Constructor.prototype.getInitialState.isReactClassApproved = {};
      }
    }

    _invariant(
      Constructor.prototype.render,
      'createClass(...): Class specification must implement a `render` method.'
    );

    if (true) {
      warning(
        !Constructor.prototype.componentShouldUpdate,
        '%s has a method called ' +
          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
          'The name is phrased as a question because the function is ' +
          'expected to return a value.',
        spec.displayName || 'A component'
      );
      warning(
        !Constructor.prototype.componentWillRecieveProps,
        '%s has a method called ' +
          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
        spec.displayName || 'A component'
      );
      warning(
        !Constructor.prototype.UNSAFE_componentWillRecieveProps,
        '%s has a method called UNSAFE_componentWillRecieveProps(). ' +
          'Did you mean UNSAFE_componentWillReceiveProps()?',
        spec.displayName || 'A component'
      );
    }

    // Reduce time spent doing lookups by setting these on the prototype.
    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }

    return Constructor;
  }

  return createClass;
}

module.exports = factory;


/***/ }),

/***/ "./node_modules/create-react-class/index.js":
/*!**************************************************!*\
  !*** ./node_modules/create-react-class/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var React = __webpack_require__(/*! react */ "react");
var factory = __webpack_require__(/*! ./factory */ "./node_modules/create-react-class/factory.js");

if (typeof React === 'undefined') {
  throw Error(
    'create-react-class could not find the React object. If you are using script tags, ' +
      'make sure that React is being loaded before create-react-class.'
  );
}

// Hack to grab NoopUpdateQueue from isomorphic React
var ReactNoopUpdateQueue = new React.Component().updater;

module.exports = factory(
  React.Component,
  React.isValidElement,
  ReactNoopUpdateQueue
);


/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function eventListener() {
      if (errorListener !== undefined) {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };
    var errorListener;

    // Adding an error listener is not optional because
    // if an error is thrown on an event emitter we cannot
    // guarantee that the actual event we are waiting will
    // be fired. The result could be a silent way to create
    // memory or file descriptor leaks, which is something
    // we should avoid.
    if (name !== 'error') {
      errorListener = function errorListener(err) {
        emitter.removeListener(name, eventListener);
        reject(err);
      };

      emitter.once('error', errorListener);
    }

    emitter.once(name, eventListener);
  });
}


/***/ }),

/***/ "./node_modules/fbjs/lib/emptyFunction.js":
/*!************************************************!*\
  !*** ./node_modules/fbjs/lib/emptyFunction.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ "./node_modules/fbjs/lib/emptyObject.js":
/*!**********************************************!*\
  !*** ./node_modules/fbjs/lib/emptyObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (true) {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;

/***/ }),

/***/ "./node_modules/fbjs/lib/invariant.js":
/*!********************************************!*\
  !*** ./node_modules/fbjs/lib/invariant.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



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

var validateFormat = function validateFormat(format) {};

if (true) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

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
}

module.exports = invariant;

/***/ }),

/***/ "./node_modules/fbjs/lib/warning.js":
/*!******************************************!*\
  !*** ./node_modules/fbjs/lib/warning.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(/*! ./emptyFunction */ "./node_modules/fbjs/lib/emptyFunction.js");

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),

/***/ "./node_modules/lodash.debounce/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.debounce/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


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
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
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
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
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

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react-geosuggest/module/Geosuggest.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-geosuggest/module/Geosuggest.esm.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_2__);




/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/* istanbul ignore next */
/* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-empty-function */
/**
 * Default values
 */
var defaults = {
    autoActivateFirstSuggest: false,
    disabled: false,
    fixtures: [],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getSuggestLabel: function (suggest) { return suggest.description; },
    highlightMatch: true,
    ignoreEnter: false,
    ignoreTab: false,
    initialValue: '',
    maxFixtures: 10,
    minLength: 1,
    onKeyDown: function () { },
    onKeyPress: function () { },
    placeholder: 'Search places',
    queryDelay: 250,
    skipSuggest: function () { return false; },
    style: {},
    inputType: 'text'
};

/**
 * Attributes allowed on input elements
 */
var allowedAttributes = [
    'autoCapitalize',
    'autoComplete',
    'autoCorrect',
    'autoFocus',
    'disabled',
    'form',
    'formAction',
    'formEncType',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'height',
    'inputMode',
    'maxLength',
    'name',
    'onClick',
    'onContextMenu',
    'onCopy',
    'onCut',
    'onDoubleClick',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onPaste',
    'pattern',
    'placeholder',
    'readOnly',
    'required',
    'size',
    'spellCheck',
    'tabIndex',
    'title',
    'aria-atomic',
    'aria-busy',
    'aria-controls',
    'aria-current',
    'aria-describedby',
    'aria-details',
    'aria-disabled',
    'aria-dropeffect',
    'aria-errormessage',
    'aria-flowto',
    'aria-grabbed',
    'aria-haspopup',
    'aria-hidden',
    'aria-invalid',
    'aria-keyshortcuts',
    'aria-label',
    'aria-labelledby',
    'aria-live',
    'aria-owns',
    'aria-relevant',
    'aria-roledescription',
    'aria-activedescendant',
    'aria-autocomplete',
    'aria-multiline',
    'aria-placeholder',
    'aria-readonly',
    'aria-required'
];
/**
 * Filter the properties for only allowed input properties
 */
function filterInputAttributes (props) {
    var attributes = {};
    Object.keys(props).forEach(function (attribute) {
        var isDataAttribute = attribute.startsWith('data-');
        var isAllowedAttribute = allowedAttributes.includes(attribute);
        if (isAllowedAttribute || isDataAttribute) {
            attributes[attribute] = props[attribute];
        }
    });
    return attributes;
}

/**
 * The input field
 */
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    /**
     * The constructor.
     */
    function Input(props) {
        var _this = _super.call(this, props) || this;
        /* eslint-enable @typescript-eslint/no-empty-function */
        /**
         * The reference to the input element
         */
        _this.input = null;
        _this.onChange = _this.onChange.bind(_this);
        _this.onInputKeyDown = _this.onInputKeyDown.bind(_this);
        return _this;
    }
    /**
     * When the input got changed
     */
    Input.prototype.onChange = function () {
        if (this.input) {
            this.props.onChange(this.input.value);
        }
    };
    /**
     * When a key gets pressed in the input
     */
    // eslint-disable-next-line complexity
    Input.prototype.onInputKeyDown = function (event) {
        // Call props.onKeyDown if defined
        // Gives the developer a little bit more control if needed
        if (this.props.onKeyDown) {
            this.props.onKeyDown(event);
        }
        switch (event.which) {
            case 40: // DOWN
                if (!event.shiftKey) {
                    event.preventDefault();
                    this.props.onNext();
                }
                break;
            case 38: // UP
                if (!event.shiftKey) {
                    event.preventDefault();
                    this.props.onPrev();
                }
                break;
            case 13: // ENTER
                if (this.props.doNotSubmitOnEnter) {
                    event.preventDefault();
                }
                if (!this.props.ignoreEnter) {
                    this.props.onSelect();
                }
                break;
            case 9: // TAB
                if (!this.props.ignoreTab) {
                    this.props.onSelect();
                }
                break;
            case 27: // ESC
                this.props.onEscape();
                break;
        }
    };
    /**
     * Focus the input
     */
    Input.prototype.focus = function () {
        if (this.input) {
            this.input.focus();
        }
    };
    /**
     * Blur the input
     */
    Input.prototype.blur = function () {
        if (this.input) {
            this.input.blur();
        }
    };
    /**
     * Render the view
     */
    Input.prototype.render = function () {
        var _this = this;
        var attributes = filterInputAttributes(this.props);
        var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('geosuggest__input', this.props.className);
        var shouldRenderLabel = this.props.label && this.props.id;
        if (!attributes.tabIndex) {
            attributes.tabIndex = 0;
        }
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            shouldRenderLabel && (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", { className: "geosuggest__label", htmlFor: this.props.id }, this.props.label)),
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", __assign({ className: classes, id: "geosuggest__input" + (this.props.id ? "--" + this.props.id : ''), ref: function (i) { return (_this.input = i); }, type: this.props.inputType }, attributes, { value: this.props.value, style: this.props.style, onKeyDown: this.onInputKeyDown, onChange: this.onChange, onKeyPress: this.props.onKeyPress, onFocus: this.props.onFocus, onBlur: this.props.onBlur, role: "combobox", "aria-expanded": !this.props.isSuggestsHidden, "aria-activedescendant": this.props.activeSuggest
                    ? this.props.activeSuggest.placeId
                    : // eslint-disable-next-line no-undefined
                        undefined, "aria-owns": this.props.listId }))));
    };
    /* eslint-disable @typescript-eslint/no-empty-function */
    /**
     * Default values for the properties
     */
    Input.defaultProps = {
        activeSuggest: null,
        autoComplete: 'nope',
        className: '',
        isSuggestsHidden: true,
        listId: '',
        inputType: 'text',
        onBlur: function () { },
        onChange: function () { },
        onEscape: function () { },
        onFocus: function () { },
        onKeyDown: function () { },
        onKeyPress: function () { },
        onNext: function () { },
        onPrev: function () { },
        onSelect: function () { },
        value: ''
    };
    return Input;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));

/**
 * A single Geosuggest item in the list
 */
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    /**
     * The constructor.
     */
    function default_1(props) {
        var _this = _super.call(this, props) || this;
        /**
         * The reference to the suggest element
         */
        _this.ref = null;
        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }
    /**
     * Makes a text bold
     */
    default_1.prototype.makeBold = function (element, key) {
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("b", { className: "geosuggest__item__matched-text", key: key }, element));
    };
    /**
     * Replace matched text with the same in bold
     */
    default_1.prototype.formatMatchedText = function (userInput, suggest) {
        if (!userInput || !suggest.matchedSubstrings) {
            return suggest.label;
        }
        var start = suggest.matchedSubstrings.offset;
        var length = suggest.matchedSubstrings.length;
        var end = start + length;
        var boldPart = this.makeBold(suggest.label.substring(start, end), suggest.label);
        var pre = '';
        var post = '';
        if (start > 0) {
            pre = suggest.label.slice(0, start);
        }
        if (end < suggest.label.length) {
            post = suggest.label.slice(end);
        }
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null,
            pre,
            boldPart,
            post));
    };
    /**
     * Checking if item just became active and scrolling if needed.
     */
    default_1.prototype.componentDidUpdate = function (prevProps) {
        if (!prevProps.isActive && this.props.isActive) {
            this.scrollIfNeeded();
        }
    };
    /**
     * Scrolling current item to the center of the list if item needs scrolling.
     * Item is scrolled to the center of the list.
     */
    default_1.prototype.scrollIfNeeded = function () {
        var element = this.ref;
        var parent = element && element.parentElement;
        if (!element || !parent) {
            return;
        }
        var overTop = element.offsetTop - parent.offsetTop < parent.scrollTop;
        var overBottom = element.offsetTop - parent.offsetTop + element.clientHeight >
            parent.scrollTop + parent.clientHeight;
        if (overTop || overBottom) {
            parent.scrollTop =
                element.offsetTop -
                    parent.offsetTop -
                    parent.clientHeight / 2 +
                    element.clientHeight / 2;
        }
    };
    /**
     * When the suggest item got clicked
     */
    default_1.prototype.onClick = function (event) {
        event.preventDefault();
        this.props.onSelect(this.props.suggest);
    };
    /**
     * Render the view
     */
    default_1.prototype.render = function () {
        var _a;
        var _this = this;
        var suggest = this.props.suggest;
        var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('geosuggest__item', this.props.className, this.props.suggestItemClassName, { 'geosuggest__item--active': this.props.isActive }, (_a = {},
            _a[this.props.activeClassName || ''] = this.props.activeClassName
                ? this.props.isActive
                : null,
            _a));
        var content = suggest.label;
        if (this.props.renderSuggestItem) {
            content = this.props.renderSuggestItem(suggest, this.props.userInput);
        }
        else if (this.props.isHighlightMatch) {
            content = this.formatMatchedText(this.props.userInput, suggest);
        }
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", { className: classes, ref: function (li) { return (_this.ref = li); }, style: this.props.style, onMouseDown: this.props.onMouseDown, onMouseOut: this.props.onMouseOut, onClick: this.onClick, role: "option", "aria-selected": this.props.isActive, id: suggest.placeId }, content));
    };
    return default_1;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));

/**
 * The list with suggestions.
 */
var default_1$1 = /** @class */ (function (_super) {
    __extends(default_1$1, _super);
    function default_1$1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Whether or not it is hidden
     */
    default_1$1.prototype.isHidden = function () {
        return this.props.isHidden || this.props.suggests.length === 0;
    };
    /**
     * There are new properties available for the list
     */
    default_1$1.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.suggests !== this.props.suggests) {
            if (this.props.suggests.length === 0) {
                this.props.onSuggestNoResults();
            }
        }
    };
    /**
     * Render the view
     * @return {Function} The React element to render
     */
    default_1$1.prototype.render = function () {
        var _a;
        var _this = this;
        var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('geosuggest__suggests', this.props.suggestsClassName, { 'geosuggest__suggests--hidden': this.isHidden() }, (_a = {},
            _a[this.props.hiddenClassName || ''] = this.props.hiddenClassName
                ? this.isHidden()
                : null,
            _a));
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", { className: classes, style: this.props.style, role: "listbox", id: this.props.listId }, this.props.suggests.map(function (suggest) {
            var isActive = (_this.props.activeSuggest &&
                suggest.placeId === _this.props.activeSuggest.placeId) ||
                false;
            return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(default_1, { key: suggest.placeId, className: suggest.className || '', userInput: _this.props.userInput, isHighlightMatch: _this.props.isHighlightMatch, suggest: suggest, style: _this.props.suggestItemStyle, suggestItemClassName: _this.props.suggestItemClassName, isActive: isActive, activeClassName: _this.props.suggestItemActiveClassName, onMouseDown: _this.props.onSuggestMouseDown, onMouseOut: _this.props.onSuggestMouseOut, onSelect: _this.props.onSuggestSelect, renderSuggestItem: _this.props.renderSuggestItem }));
        })));
    };
    return default_1$1;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));

/* global window */
// Escapes special characters in user input for regex
function escapeRegExp(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
/**
 * Entry point for the Geosuggest component
 */
var default_1$2 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    /**
     * The constructor. Sets the initial state.
     */
    // eslint-disable-next-line max-statements
    function default_1(props) {
        var _this = _super.call(this, props) || this;
        /**
         * The Google Map instance
         */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        _this.googleMaps = null;
        /**
         * The autocomple service to get suggests
         */
        _this.autocompleteService = null;
        /**
         * The places service to get place details
         */
        _this.placesService = null;
        /**
         * The sessionToken service to use session based monetization
         */
        _this.sessionToken = undefined;
        /**
         * The geocoder to get geocoded results
         */
        _this.geocoder = null;
        /**
         * The input component
         */
        _this.input = null;
        _this.state = {
            activeSuggest: null,
            ignoreBlur: false,
            isLoading: false,
            isSuggestsHidden: true,
            suggests: [],
            userInput: props.initialValue || ''
        };
        _this.onInputChange = _this.onInputChange.bind(_this);
        _this.onAfterInputChange = _this.onAfterInputChange.bind(_this);
        _this.onInputFocus = _this.onInputFocus.bind(_this);
        _this.onInputBlur = _this.onInputBlur.bind(_this);
        _this.onNext = _this.onNext.bind(_this);
        _this.onPrev = _this.onPrev.bind(_this);
        _this.onSelect = _this.onSelect.bind(_this);
        _this.onSuggestMouseDown = _this.onSuggestMouseDown.bind(_this);
        _this.onSuggestMouseOut = _this.onSuggestMouseOut.bind(_this);
        _this.onSuggestNoResults = _this.onSuggestNoResults.bind(_this);
        _this.hideSuggests = _this.hideSuggests.bind(_this);
        _this.selectSuggest = _this.selectSuggest.bind(_this);
        _this.listId = "geosuggest__list" + (props.id ? "--" + props.id : '');
        if (props.queryDelay) {
            _this.onAfterInputChange = lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default()(_this.onAfterInputChange, props.queryDelay);
        }
        return _this;
    }
    /**
     * Change inputValue if prop changes
     */
    default_1.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.initialValue !== this.props.initialValue) {
            this.setState({ userInput: this.props.initialValue || '' });
        }
        if (JSON.stringify(prevProps.fixtures) !== JSON.stringify(this.props.fixtures)) {
            this.searchSuggests();
        }
    };
    /**
     * Called on the client side after component is mounted.
     * Google api sdk object will be obtained and cached as a instance property.
     * Necessary objects of google api will also be determined and saved.
     */
    default_1.prototype.componentDidMount = function () {
        if (typeof window === 'undefined') {
            return;
        }
        var googleMaps = this.props.googleMaps ||
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (window.google && window.google.maps) ||
            this.googleMaps;
        /* istanbul ignore next */
        if (!googleMaps) {
            if (console) {
                // eslint-disable-next-line no-console
                console.error('Google maps API was not found in the page.');
            }
            return;
        }
        this.googleMaps = googleMaps;
        this.autocompleteService = new googleMaps.places.AutocompleteService();
        this.placesService = new googleMaps.places.PlacesService(document.createElement('div'));
        this.sessionToken = new googleMaps.places.AutocompleteSessionToken();
        this.geocoder = new googleMaps.Geocoder();
    };
    /**
     * When the component will unmount
     */
    default_1.prototype.componentWillUnmount = function () {
        clearTimeout(this.timer);
    };
    /**
     * When the input changed
     */
    default_1.prototype.onInputChange = function (userInput) {
        if (!userInput) {
            if (this.props.onSuggestSelect) {
                this.props.onSuggestSelect();
            }
        }
        this.setState({ userInput: userInput }, this.onAfterInputChange);
    };
    /**
     * On After the input got changed
     */
    default_1.prototype.onAfterInputChange = function () {
        this.showSuggests();
        if (this.props.onChange) {
            this.props.onChange(this.state.userInput);
        }
    };
    /**
     * When the input gets focused
     */
    default_1.prototype.onInputFocus = function () {
        if (this.props.onFocus) {
            this.props.onFocus();
        }
        this.showSuggests();
    };
    /**
     * When the input gets blurred
     */
    default_1.prototype.onInputBlur = function () {
        if (!this.state.ignoreBlur) {
            this.hideSuggests();
        }
    };
    default_1.prototype.onNext = function () {
        this.activateSuggest('next');
    };
    default_1.prototype.onPrev = function () {
        this.activateSuggest('prev');
    };
    default_1.prototype.onSelect = function () {
        this.selectSuggest(this.state.activeSuggest);
    };
    default_1.prototype.onSuggestMouseDown = function () {
        this.setState({ ignoreBlur: true });
    };
    default_1.prototype.onSuggestMouseOut = function () {
        this.setState({ ignoreBlur: false });
    };
    default_1.prototype.onSuggestNoResults = function () {
        if (this.props.onSuggestNoResults) {
            this.props.onSuggestNoResults(this.state.userInput);
        }
    };
    /**
     * Focus the input
     */
    default_1.prototype.focus = function () {
        if (this.input) {
            this.input.focus();
        }
    };
    /**
     * Blur the input
     */
    default_1.prototype.blur = function () {
        if (this.input) {
            this.input.blur();
        }
    };
    /**
     * Update the value of the user input
     */
    default_1.prototype.update = function (userInput) {
        this.setState({ userInput: userInput });
        if (this.props.onChange) {
            this.props.onChange(userInput);
        }
    };
    /*
     * Clear the input and close the suggestion pane
     */
    default_1.prototype.clear = function () {
        this.setState({ userInput: '' }, this.hideSuggests);
    };
    /**
     * Search for new suggests
     */
    // eslint-disable-next-line complexity, max-statements
    default_1.prototype.searchSuggests = function () {
        var _this = this;
        if (!this.state.userInput) {
            this.updateSuggests();
            return;
        }
        var options = {
            input: this.state.userInput,
            sessionToken: this.sessionToken
        };
        var inputLength = this.state.userInput.length;
        var isShorterThanMinLength = this.props.minLength && inputLength < this.props.minLength;
        if (isShorterThanMinLength) {
            this.updateSuggests();
            return;
        }
        var _a = this.props, location = _a.location, radius = _a.radius, bounds = _a.bounds, types = _a.types, country = _a.country;
        /* eslint-disable curly */
        if (location)
            options.location = location;
        if (radius)
            options.radius = Number(this.props.radius);
        if (bounds)
            options.bounds = bounds;
        if (types)
            options.types = types;
        if (country)
            options.componentRestrictions = { country: country };
        /* eslint-enable curly */
        this.setState({ isLoading: true }, function () {
            if (!_this.autocompleteService) {
                _this.setState({ isLoading: false });
                return;
            }
            _this.autocompleteService.getPlacePredictions(options, function (suggestsGoogle) {
                _this.setState({ isLoading: false });
                _this.updateSuggests(suggestsGoogle || [], // can be null
                function () {
                    if (_this.props.autoActivateFirstSuggest &&
                        !_this.state.activeSuggest) {
                        _this.activateSuggest('next');
                    }
                });
            });
        });
    };
    /**
     * Update the suggests
     */
    default_1.prototype.updateSuggests = function (suggestsGoogle, 
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-empty-function
    callback) {
        var _this = this;
        if (suggestsGoogle === void 0) { suggestsGoogle = []; }
        if (callback === void 0) { callback = function () { }; }
        var suggests = [];
        var userInput = this.state.userInput;
        var _a = this.props, skipSuggest = _a.skipSuggest, maxFixtures = _a.maxFixtures, fixtures = _a.fixtures;
        var regex = new RegExp(escapeRegExp(userInput), 'gim');
        var fixturesSearched = 0;
        var activeSuggest = null;
        if (fixtures) {
            fixtures.forEach(function (fixture) {
                if (maxFixtures && fixturesSearched >= maxFixtures) {
                    return;
                }
                if (skipSuggest &&
                    !skipSuggest(fixture) &&
                    fixture.label.match(regex)) {
                    fixturesSearched++;
                    suggests.push(__assign(__assign({}, fixture), { isFixture: true, matchedSubstrings: {
                            length: userInput.length,
                            offset: fixture.label.indexOf(userInput)
                        }, placeId: fixture.placeId || fixture.label }));
                }
            });
        }
        suggestsGoogle.forEach(function (suggest) {
            if (skipSuggest && !skipSuggest(suggest)) {
                suggests.push({
                    description: suggest.description,
                    isFixture: false,
                    label: _this.props.getSuggestLabel
                        ? _this.props.getSuggestLabel(suggest)
                        : '',
                    matchedSubstrings: suggest.matched_substrings[0],
                    placeId: suggest.place_id
                });
            }
        });
        activeSuggest = this.updateActiveSuggest(suggests);
        if (this.props.onUpdateSuggests) {
            this.props.onUpdateSuggests(suggests, activeSuggest);
        }
        this.setState({ suggests: suggests, activeSuggest: activeSuggest }, callback);
    };
    /**
     * Return the new activeSuggest object after suggests have been updated
     */
    default_1.prototype.updateActiveSuggest = function (suggests) {
        if (suggests === void 0) { suggests = []; }
        var activeSuggest = this.state.activeSuggest;
        if (activeSuggest) {
            var newSuggest = suggests.filter(function (listedSuggest) {
                return activeSuggest &&
                    activeSuggest.placeId === listedSuggest.placeId &&
                    activeSuggest.isFixture === listedSuggest.isFixture;
            })[0];
            activeSuggest = newSuggest || null;
        }
        return activeSuggest;
    };
    /**
     * Show the suggestions
     */
    default_1.prototype.showSuggests = function () {
        this.searchSuggests();
        this.setState({ isSuggestsHidden: false });
    };
    /**
     * Hide the suggestions
     */
    default_1.prototype.hideSuggests = function () {
        var _this = this;
        if (this.props.onBlur) {
            this.props.onBlur(this.state.userInput);
        }
        this.timer = window.setTimeout(function () {
            _this.setState({
                activeSuggest: null,
                isSuggestsHidden: true
            });
        }, 100);
    };
    /**
     * Activate a new suggest
     */
    // eslint-disable-next-line complexity, max-statements
    default_1.prototype.activateSuggest = function (direction) {
        if (this.state.isSuggestsHidden) {
            this.showSuggests();
            return;
        }
        var suggestsCount = this.state.suggests.length - 1;
        var next = direction === 'next';
        var newActiveSuggest = null;
        var newIndex = 0;
        var i = 0;
        for (i; i <= suggestsCount; i++) {
            if (this.state.suggests[i] === this.state.activeSuggest) {
                newIndex = next ? i + 1 : i - 1;
            }
        }
        if (!this.state.activeSuggest) {
            newIndex = next ? 0 : suggestsCount;
        }
        if (newIndex >= 0 && newIndex <= suggestsCount) {
            newActiveSuggest = this.state.suggests[newIndex];
        }
        if (this.props.onActivateSuggest) {
            this.props.onActivateSuggest(newActiveSuggest);
        }
        this.setState({ activeSuggest: newActiveSuggest });
    };
    /**
     * When an item got selected
     */
    // eslint-disable-next-line complexity
    default_1.prototype.selectSuggest = function (suggestToSelect) {
        var suggest = suggestToSelect || {
            isFixture: true,
            label: this.state.userInput,
            placeId: this.state.userInput
        };
        if (!suggestToSelect &&
            this.props.autoActivateFirstSuggest &&
            this.state.suggests.length > 0) {
            suggest = this.state.suggests[0];
        }
        this.setState({
            isSuggestsHidden: true,
            userInput: typeof suggest.label !== 'object'
                ? suggest.label
                : suggest.description || ''
        });
        if (suggest.location) {
            this.setState({ ignoreBlur: false });
            if (this.props.onSuggestSelect) {
                this.props.onSuggestSelect(suggest);
            }
            return;
        }
        this.geocodeSuggest(suggest);
    };
    /**
     * Geocode a suggest
     */
    default_1.prototype.geocodeSuggest = function (suggestToGeocode) {
        var _this = this;
        if (!this.geocoder) {
            return;
        }
        if (suggestToGeocode.placeId &&
            !suggestToGeocode.isFixture &&
            this.placesService) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var options = {
                placeId: suggestToGeocode.placeId,
                sessionToken: this.sessionToken
            };
            if (this.props.placeDetailFields) {
                options.fields = this.props.placeDetailFields;
                options.fields.unshift('geometry');
            }
            this.placesService.getDetails(options, function (results, status) {
                if (status === _this.googleMaps.places.PlacesServiceStatus.OK) {
                    var gmaps = results;
                    var location_1 = (gmaps.geometry &&
                        gmaps.geometry.location);
                    var suggest = __assign(__assign({}, suggestToGeocode), { gmaps: gmaps, location: {
                            lat: location_1.lat(),
                            lng: location_1.lng()
                        } });
                    _this.sessionToken = new google.maps.places.AutocompleteSessionToken();
                    if (_this.props.onSuggestSelect) {
                        _this.props.onSuggestSelect(suggest);
                    }
                }
            });
        }
        else {
            var options = {
                address: suggestToGeocode.label,
                bounds: this.props.bounds,
                componentRestrictions: this.props.country
                    ? { country: this.props.country }
                    : // eslint-disable-next-line no-undefined
                        undefined,
                location: this.props.location
            };
            this.geocoder.geocode(options, function (results, status) {
                if (status === _this.googleMaps.GeocoderStatus.OK) {
                    var gmaps = results[0];
                    var location_2 = (gmaps.geometry &&
                        gmaps.geometry.location);
                    var suggest = __assign(__assign({}, suggestToGeocode), { gmaps: gmaps, location: {
                            lat: location_2.lat(),
                            lng: location_2.lng()
                        } });
                    if (_this.props.onSuggestSelect) {
                        _this.props.onSuggestSelect(suggest);
                    }
                }
            });
        }
    };
    /**
     * Render the view
     */
    default_1.prototype.render = function () {
        var _this = this;
        var attributes = filterInputAttributes(this.props);
        var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('geosuggest', this.props.className, {
            'geosuggest--loading': this.state.isLoading
        });
        var input = (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Input, __assign({ className: this.props.inputClassName, ref: function (i) { return (_this.input = i); }, value: this.state.userInput, doNotSubmitOnEnter: !this.state.isSuggestsHidden, ignoreTab: this.props.ignoreTab, ignoreEnter: this.props.ignoreEnter, style: this.props.style && this.props.style.input, onChange: this.onInputChange, onFocus: this.onInputFocus, onBlur: this.onInputBlur, onKeyDown: this.props.onKeyDown, onKeyPress: this.props.onKeyPress, inputType: this.props.inputType, onNext: this.onNext, onPrev: this.onPrev, onSelect: this.onSelect, onEscape: this.hideSuggests, isSuggestsHidden: this.state.isSuggestsHidden, activeSuggest: this.state.activeSuggest, label: this.props.label, id: this.props.id, listId: this.listId }, attributes)));
        var suggestionsList = (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(default_1$1, { isHidden: this.state.isSuggestsHidden, style: this.props.style && this.props.style.suggests, suggestItemStyle: this.props.style && this.props.style.suggestItem, userInput: this.state.userInput, isHighlightMatch: Boolean(this.props.highlightMatch), suggestsClassName: this.props.suggestsClassName, suggestItemClassName: this.props.suggestItemClassName, suggests: this.state.suggests, hiddenClassName: this.props.suggestsHiddenClassName, suggestItemActiveClassName: this.props.suggestItemActiveClassName, activeSuggest: this.state.activeSuggest, onSuggestNoResults: this.onSuggestNoResults, onSuggestMouseDown: this.onSuggestMouseDown, onSuggestMouseOut: this.onSuggestMouseOut, onSuggestSelect: this.selectSuggest, renderSuggestItem: this.props.renderSuggestItem, listId: this.listId }));
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { className: classes, id: this.props.id },
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { className: "geosuggest__input-wrapper" }, input),
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { className: "geosuggest__suggests-wrapper" }, suggestionsList)));
    };
    /**
     * Default values for the properties
     */
    default_1.defaultProps = defaults;
    return default_1;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

/* harmony default export */ __webpack_exports__["default"] = (default_1$2);


/***/ }),

/***/ "./node_modules/react-gmaps/dist/components/circle.js":
/*!************************************************************!*\
  !*** ./node_modules/react-gmaps/dist/components/circle.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _entity = __webpack_require__(/*! ./entity */ "./node_modules/react-gmaps/dist/components/entity.js");

var _entity2 = _interopRequireDefault(_entity);

var _eventsCircle = __webpack_require__(/*! ../events/circle */ "./node_modules/react-gmaps/dist/events/circle.js");

var _eventsCircle2 = _interopRequireDefault(_eventsCircle);

exports['default'] = (0, _entity2['default'])('Circle', 'center', _eventsCircle2['default']);
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-gmaps/dist/components/entity.js":
/*!************************************************************!*\
  !*** ./node_modules/react-gmaps/dist/components/entity.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _createReactClass = __webpack_require__(/*! create-react-class */ "./node_modules/create-react-class/index.js");

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _mixinsListener = __webpack_require__(/*! ../mixins/listener */ "./node_modules/react-gmaps/dist/mixins/listener.js");

var _mixinsListener2 = _interopRequireDefault(_mixinsListener);

var _utilsCompareProps = __webpack_require__(/*! ../utils/compare-props */ "./node_modules/react-gmaps/dist/utils/compare-props.js");

var _utilsCompareProps2 = _interopRequireDefault(_utilsCompareProps);

exports['default'] = function (name, latLngProp, events) {
  return (0, _createReactClass2['default'])({

    mixins: [_mixinsListener2['default']],

    entity: null,

    componentDidMount: function componentDidMount() {
      var options = this.getOptions(this.props);
      this.entity = new google.maps[name](options);
      this.addListeners(this.entity, events);
    },

    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
      if (!(0, _utilsCompareProps2['default'])(this.props, nextProps)) {
        var options = this.getOptions(nextProps);
        this.entity.setOptions(options);
      }
    },

    componentWillUnmount: function componentWillUnmount() {
      this.entity.setMap(null);
      this.removeListeners();
      this.entity = null;
    },

    getEntity: function getEntity() {
      return this.entity;
    },

    getOptions: function getOptions(props) {
      return _extends({}, props, _defineProperty({}, latLngProp, this.switchPaths(name, props)));
    },

    switchPaths: function switchPaths(name, props) {
      switch (name) {
        case 'Polyline':
          return props.path;
          break;
        case 'Polygon':
          return props.paths;
          break;
        default:
          return new google.maps.LatLng(props.lat, props.lng);
          break;
      }
    },

    render: function render() {
      return null;
    }
  });
};

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-gmaps/dist/components/gmaps.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-gmaps/dist/components/gmaps.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _createReactClass = __webpack_require__(/*! create-react-class */ "./node_modules/create-react-class/index.js");

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _eventsMap = __webpack_require__(/*! ../events/map */ "./node_modules/react-gmaps/dist/events/map.js");

var _eventsMap2 = _interopRequireDefault(_eventsMap);

var _mixinsListener = __webpack_require__(/*! ../mixins/listener */ "./node_modules/react-gmaps/dist/mixins/listener.js");

var _mixinsListener2 = _interopRequireDefault(_mixinsListener);

var _utilsGoogleMaps = __webpack_require__(/*! ../utils/google-maps */ "./node_modules/react-gmaps/dist/utils/google-maps.js");

var _utilsGoogleMaps2 = _interopRequireDefault(_utilsGoogleMaps);

var _utilsCompareProps = __webpack_require__(/*! ../utils/compare-props */ "./node_modules/react-gmaps/dist/utils/compare-props.js");

var _utilsCompareProps2 = _interopRequireDefault(_utilsCompareProps);

var Gmaps = (0, _createReactClass2['default'])({

  mixins: [_mixinsListener2['default']],

  map: null,

  getInitialState: function getInitialState() {
    return {
      isMapCreated: false
    };
  },

  componentDidMount: function componentDidMount() {
    this.setState({
      callbackIndex: _utilsGoogleMaps2['default'].load(this.props.params, this.mapsCallback)
    });
  },

  componentWillUnmount: function componentWillUnmount() {
    _utilsGoogleMaps2['default'].removeCallback(this.state.callbackIndex);
    this.removeListeners();
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (this.map && !(0, _utilsCompareProps2['default'])(this.props, nextProps)) {
      this.map.setOptions(_extends({}, nextProps, {
        center: new google.maps.LatLng(nextProps.lat, nextProps.lng)
      }));
    }
  },

  getMap: function getMap() {
    return this.map;
  },

  mapsCallback: function mapsCallback() {
    this.createMap();
    this.addListeners(this.map, _eventsMap2['default']);
  },

  createMap: function createMap() {
    var node = _reactDom2['default'].findDOMNode(this);
    this.map = new google.maps.Map(node, _extends({}, this.props, {
      center: new google.maps.LatLng(this.props.lat, this.props.lng)
    }));
    this.setState({
      isMapCreated: true
    });
    if (this.props.onMapCreated) {
      this.props.onMapCreated(this.map);
    }
  },

  getChildren: function getChildren() {
    var _this = this;

    return _react2['default'].Children.map(this.props.children, function (child) {
      if (!_react2['default'].isValidElement(child)) {
        return child;
      }
      return _react2['default'].cloneElement(child, {
        ref: child.ref,
        map: _this.map
      });
    });
  },

  render: function render() {
    var style = (0, _objectAssign2['default'])({
      width: this.props.width,
      height: this.props.height
    }, this.props.style);
    return _react2['default'].createElement(
      'div',
      { style: style, className: this.props.className },
      this.props.loadingMessage || 'Loading...',
      this.state.isMapCreated ? this.getChildren() : null
    );
  }

});

exports['default'] = Gmaps;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-gmaps/dist/components/info-window.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-gmaps/dist/components/info-window.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _entity = __webpack_require__(/*! ./entity */ "./node_modules/react-gmaps/dist/components/entity.js");

var _entity2 = _interopRequireDefault(_entity);

var _eventsInfoWindow = __webpack_require__(/*! ../events/info-window */ "./node_modules/react-gmaps/dist/events/info-window.js");

var _eventsInfoWindow2 = _interopRequireDefault(_eventsInfoWindow);

exports['default'] = (0, _entity2['default'])('InfoWindow', 'position', _eventsInfoWindow2['default']);
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-gmaps/dist/components/marker.js":
/*!************************************************************!*\
  !*** ./node_modules/react-gmaps/dist/components/marker.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _entity = __webpack_require__(/*! ./entity */ "./node_modules/react-gmaps/dist/components/entity.js");

var _entity2 = _interopRequireDefault(_entity);

var _eventsMarker = __webpack_require__(/*! ../events/marker */ "./node_modules/react-gmaps/dist/events/marker.js");

var _eventsMarker2 = _interopRequireDefault(_eventsMarker);

exports['default'] = (0, _entity2['default'])('Marker', 'position', _eventsMarker2['default']);
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-gmaps/dist/components/polygon.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-gmaps/dist/components/polygon.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _entity = __webpack_require__(/*! ./entity */ "./node_modules/react-gmaps/dist/components/entity.js");

var _entity2 = _interopRequireDefault(_entity);

var _eventsPolygon = __webpack_require__(/*! ../events/polygon */ "./node_modules/react-gmaps/dist/events/polygon.js");

var _eventsPolygon2 = _interopRequireDefault(_eventsPolygon);

exports['default'] = (0, _entity2['default'])('Polygon', 'paths', _eventsPolygon2['default']);
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-gmaps/dist/components/polyline.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-gmaps/dist/components/polyline.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _entity = __webpack_require__(/*! ./entity */ "./node_modules/react-gmaps/dist/components/entity.js");

var _entity2 = _interopRequireDefault(_entity);

var _eventsPolyline = __webpack_require__(/*! ../events/polyline */ "./node_modules/react-gmaps/dist/events/polyline.js");

var _eventsPolyline2 = _interopRequireDefault(_eventsPolyline);

exports['default'] = (0, _entity2['default'])('Polyline', 'path', _eventsPolyline2['default']);
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-gmaps/dist/events/circle.js":
/*!********************************************************!*\
  !*** ./node_modules/react-gmaps/dist/events/circle.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = {
  onCenterChanged: 'center_changed',
  onClick: 'click',
  onDblClick: 'dblclick',
  onDrag: 'drag',
  onDragEnd: 'dragend',
  onDragStart: 'dragstart',
  onMouseDown: 'mousedown',
  onMouseMove: 'mousemove',
  onMouseOut: 'mouseout',
  onMouseOver: 'mouseover',
  onMouseUp: 'mouseup',
  onRadiusChanged: 'radius_changed',
  onRightClick: 'rightclick'
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-gmaps/dist/events/info-window.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-gmaps/dist/events/info-window.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = {
  onCloseClick: 'closeclick',
  onContentChanged: 'content_changed',
  onDOMReady: 'domready',
  onPositionChanged: 'position_changed',
  onZindexChanged: 'zindex_changed'
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-gmaps/dist/events/map.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-gmaps/dist/events/map.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = {
  onBoundsChanged: 'bounds_changed',
  onCenterChanged: 'center_changed',
  onClick: 'click',
  onDblClick: 'dblclick',
  onDrag: 'drag',
  onDragEnd: 'dragend',
  onDragStart: 'dragstart',
  onHeadingChanged: 'heading_changed',
  onIdle: 'idle',
  onMapTypeIdChanged: 'maptypeid_changed',
  onMouseMove: 'mousemove',
  onMouseOut: 'mouseout',
  onMouseOver: 'mouseover',
  onProjectionChanged: 'projection_changed',
  onResize: 'resize',
  onRightClick: 'rightclick',
  onTilesLoaded: 'tilesloaded',
  onTiltChanged: 'tilt_changed',
  onZoomChanged: 'zoom_changed'
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-gmaps/dist/events/marker.js":
/*!********************************************************!*\
  !*** ./node_modules/react-gmaps/dist/events/marker.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = {
  onAnimationChanged: 'animation_changed',
  onClick: 'click',
  onClickableChanged: 'clickable_changed',
  onCursorChanged: 'cursor_changed',
  onDblClick: 'dblclick',
  onDrag: 'drag',
  onDragEnd: 'dragend',
  onDraggableChanged: 'draggable_changed',
  onDragStart: 'dragstart',
  onFlatChanged: 'flat_changed',
  onIconChanged: 'icon_changed',
  onMouseDown: 'mousedown',
  onMouseOut: 'mouseout',
  onMouseOver: 'mouseover',
  onMouseUp: 'mouseup',
  onPositionChanged: 'position_changed',
  onRightClick: 'rightclick',
  onShapeChanged: 'shape_changed',
  onTitleChanged: 'title_changed',
  onVisibleChanged: 'visible_changed',
  onZindexChanged: 'zindex_changed'
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-gmaps/dist/events/polygon.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-gmaps/dist/events/polygon.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = {
  onClick: 'click',
  onDblClick: 'dblclick',
  onDrag: 'drag',
  onDragEnd: 'dragend',
  onDragStart: 'dragstart',
  onMouseDown: 'mousedown',
  onMouseMove: 'mousemove',
  onMouseOut: 'mouseout',
  onMouseOver: 'mouseover',
  onMouseUp: 'mouseup',
  onRightClick: 'rightclick'
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-gmaps/dist/events/polyline.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-gmaps/dist/events/polyline.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = {
  onClick: 'click',
  onDblClick: 'dblclick',
  onDrag: 'drag',
  onDragEnd: 'dragend',
  onDragStart: 'dragstart',
  onMouseDown: 'mousedown',
  onMouseMove: 'mousemove',
  onMouseOut: 'mouseout',
  onMouseOver: 'mouseover',
  onMouseUp: 'mouseup',
  onRightClick: 'rightclick'
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-gmaps/dist/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-gmaps/dist/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _componentsGmaps = __webpack_require__(/*! ./components/gmaps */ "./node_modules/react-gmaps/dist/components/gmaps.js");

var _componentsGmaps2 = _interopRequireDefault(_componentsGmaps);

var _componentsMarker = __webpack_require__(/*! ./components/marker */ "./node_modules/react-gmaps/dist/components/marker.js");

var _componentsMarker2 = _interopRequireDefault(_componentsMarker);

var _componentsInfoWindow = __webpack_require__(/*! ./components/info-window */ "./node_modules/react-gmaps/dist/components/info-window.js");

var _componentsInfoWindow2 = _interopRequireDefault(_componentsInfoWindow);

var _componentsCircle = __webpack_require__(/*! ./components/circle */ "./node_modules/react-gmaps/dist/components/circle.js");

var _componentsCircle2 = _interopRequireDefault(_componentsCircle);

var _componentsPolyline = __webpack_require__(/*! ./components/polyline */ "./node_modules/react-gmaps/dist/components/polyline.js");

var _componentsPolyline2 = _interopRequireDefault(_componentsPolyline);

var _componentsPolygon = __webpack_require__(/*! ./components/polygon */ "./node_modules/react-gmaps/dist/components/polygon.js");

var _componentsPolygon2 = _interopRequireDefault(_componentsPolygon);

exports.Gmaps = _componentsGmaps2['default'];
exports.Marker = _componentsMarker2['default'];
exports.InfoWindow = _componentsInfoWindow2['default'];
exports.Circle = _componentsCircle2['default'];
exports.Polyline = _componentsPolyline2['default'];
exports.Polygon = _componentsPolygon2['default'];

/***/ }),

/***/ "./node_modules/react-gmaps/dist/mixins/listener.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-gmaps/dist/mixins/listener.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Listener = {

  addListeners: function addListeners(entity, events) {
    for (var prop in this.props) {
      if (this.props.hasOwnProperty(prop) && events[prop]) {
        var addListener = google.maps.event.addListener;
        var listener = addListener(entity, events[prop], this.props[prop]);
        if (!this.listeners) {
          this.listeners = [];
        }
        this.listeners.push(listener);
      }
    }
  },

  removeListeners: function removeListeners() {
    if (window.google && this.listeners) {
      this.listeners.forEach(function (listener) {
        google.maps.event.removeListener(listener);
      });
    }
  }

};

exports["default"] = Listener;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-gmaps/dist/utils/compare-props.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-gmaps/dist/utils/compare-props.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (props, nextProps) {

  var propsKeys = Object.keys(props);
  var nextPropsKeys = Object.keys(nextProps);
  if (propsKeys.length !== nextPropsKeys.length) {
    return false;
  }

  for (var i = 0; i < propsKeys.length; i++) {
    var key = propsKeys[i];
    if (key !== 'children' && key.indexOf('on') !== 0 && (!nextProps.hasOwnProperty(key) || props[key] !== nextProps[key])) {
      return false;
    }
  }

  return true;
};

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-gmaps/dist/utils/google-maps.js":
/*!************************************************************!*\
  !*** ./node_modules/react-gmaps/dist/utils/google-maps.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _querystring = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");

var _querystring2 = _interopRequireDefault(_querystring);

exports['default'] = {

  callbacks: [],

  appended: false,

  load: function load(params, callback) {
    var index = this.callbacks.push(callback);
    if (googleMapsExists()) {
      setTimeout(this.fireCallbacks.bind(this));
    } else {
      if (!this.appended) {
        window.mapsCallback = this.mapsCallback.bind(this);
        this.appendScript(params);
      }
    }
    return index;
  },

  getSrc: function getSrc(params) {
    var src = 'https://maps.googleapis.com/maps/api/js';
    src += '?callback=mapsCallback&';
    src += _querystring2['default'].stringify(params);
    return src;
  },

  appendScript: function appendScript(params) {
    var src = this.getSrc(params);
    var script = document.createElement('script');
    script.setAttribute('src', src);
    document.head.appendChild(script);
    this.appended = true;
  },

  mapsCallback: function mapsCallback() {
    window.mapsCallback = undefined;
    this.fireCallbacks();
  },

  fireCallbacks: function fireCallbacks() {
    this.callbacks.forEach(function (callback) {
      return callback();
    });
    this.callbacks = [];
  },

  removeCallback: function removeCallback(index) {
    this.callbacks.splice(index - 1, 1);
  }

};

var googleMapsExists = function googleMapsExists() {
  return typeof window.google === 'object' && typeof window.google.maps === 'object';
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/underscore/modules/_baseCreate.js":
/*!********************************************************!*\
  !*** ./node_modules/underscore/modules/_baseCreate.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return baseCreate; });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/underscore/modules/isObject.js");
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");



// Create a naked function reference for surrogate-prototype-swapping.
function ctor() {
  return function(){};
}

// An internal function for creating a new object that inherits from another.
function baseCreate(prototype) {
  if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(prototype)) return {};
  if (_setup_js__WEBPACK_IMPORTED_MODULE_1__["nativeCreate"]) return Object(_setup_js__WEBPACK_IMPORTED_MODULE_1__["nativeCreate"])(prototype);
  var Ctor = ctor();
  Ctor.prototype = prototype;
  var result = new Ctor;
  Ctor.prototype = null;
  return result;
}


/***/ }),

/***/ "./node_modules/underscore/modules/_baseIteratee.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/_baseIteratee.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return baseIteratee; });
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity.js */ "./node_modules/underscore/modules/identity.js");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/underscore/modules/isFunction.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/underscore/modules/isObject.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/underscore/modules/isArray.js");
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./matcher.js */ "./node_modules/underscore/modules/matcher.js");
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./property.js */ "./node_modules/underscore/modules/property.js");
/* harmony import */ var _optimizeCb_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_optimizeCb.js */ "./node_modules/underscore/modules/_optimizeCb.js");








// An internal function to generate callbacks that can be applied to each
// element in a collection, returning the desired result — either `_.identity`,
// an arbitrary callback, a property matcher, or a property accessor.
function baseIteratee(value, context, argCount) {
  if (value == null) return _identity_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  if (Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) return Object(_optimizeCb_js__WEBPACK_IMPORTED_MODULE_6__["default"])(value, context, argCount);
  if (Object(_isObject_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) && !Object(_isArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value)) return Object(_matcher_js__WEBPACK_IMPORTED_MODULE_4__["default"])(value);
  return Object(_property_js__WEBPACK_IMPORTED_MODULE_5__["default"])(value);
}


/***/ }),

/***/ "./node_modules/underscore/modules/_cb.js":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/_cb.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cb; });
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ "./node_modules/underscore/modules/underscore.js");
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseIteratee.js */ "./node_modules/underscore/modules/_baseIteratee.js");
/* harmony import */ var _iteratee_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iteratee.js */ "./node_modules/underscore/modules/iteratee.js");




// The function we call internally to generate a callback. It invokes
// `_.iteratee` if overridden, otherwise `baseIteratee`.
function cb(value, context, argCount) {
  if (_underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"].iteratee !== _iteratee_js__WEBPACK_IMPORTED_MODULE_2__["default"]) return _underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"].iteratee(value, context);
  return Object(_baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value, context, argCount);
}


/***/ }),

/***/ "./node_modules/underscore/modules/_chainResult.js":
/*!*********************************************************!*\
  !*** ./node_modules/underscore/modules/_chainResult.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return chainResult; });
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ "./node_modules/underscore/modules/underscore.js");


// Helper function to continue chaining intermediate results.
function chainResult(instance, obj) {
  return instance._chain ? Object(_underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj).chain() : obj;
}


/***/ }),

/***/ "./node_modules/underscore/modules/_collectNonEnumProps.js":
/*!*****************************************************************!*\
  !*** ./node_modules/underscore/modules/_collectNonEnumProps.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return collectNonEnumProps; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/underscore/modules/isFunction.js");
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_has.js */ "./node_modules/underscore/modules/_has.js");




// Internal helper to create a simple lookup structure.
// `collectNonEnumProps` used to depend on `_.contains`, but this led to
// circular imports. `emulatedSet` is a one-off solution that only works for
// arrays of strings.
function emulatedSet(keys) {
  var hash = {};
  for (var l = keys.length, i = 0; i < l; ++i) hash[keys[i]] = true;
  return {
    contains: function(key) { return hash[key]; },
    push: function(key) {
      hash[key] = true;
      return keys.push(key);
    }
  };
}

// Internal helper. Checks `keys` for the presence of keys in IE < 9 that won't
// be iterated by `for key in ...` and thus missed. Extends `keys` in place if
// needed.
function collectNonEnumProps(obj, keys) {
  keys = emulatedSet(keys);
  var nonEnumIdx = _setup_js__WEBPACK_IMPORTED_MODULE_0__["nonEnumerableProps"].length;
  var constructor = obj.constructor;
  var proto = Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(constructor) && constructor.prototype || _setup_js__WEBPACK_IMPORTED_MODULE_0__["ObjProto"];

  // Constructor is a special case.
  var prop = 'constructor';
  if (Object(_has_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, prop) && !keys.contains(prop)) keys.push(prop);

  while (nonEnumIdx--) {
    prop = _setup_js__WEBPACK_IMPORTED_MODULE_0__["nonEnumerableProps"][nonEnumIdx];
    if (prop in obj && obj[prop] !== proto[prop] && !keys.contains(prop)) {
      keys.push(prop);
    }
  }
}


/***/ }),

/***/ "./node_modules/underscore/modules/_createAssigner.js":
/*!************************************************************!*\
  !*** ./node_modules/underscore/modules/_createAssigner.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createAssigner; });
// An internal function for creating assigner functions.
function createAssigner(keysFunc, defaults) {
  return function(obj) {
    var length = arguments.length;
    if (defaults) obj = Object(obj);
    if (length < 2 || obj == null) return obj;
    for (var index = 1; index < length; index++) {
      var source = arguments[index],
          keys = keysFunc(source),
          l = keys.length;
      for (var i = 0; i < l; i++) {
        var key = keys[i];
        if (!defaults || obj[key] === void 0) obj[key] = source[key];
      }
    }
    return obj;
  };
}


/***/ }),

/***/ "./node_modules/underscore/modules/_createEscaper.js":
/*!***********************************************************!*\
  !*** ./node_modules/underscore/modules/_createEscaper.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createEscaper; });
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");


// Internal helper to generate functions for escaping and unescaping strings
// to/from HTML interpolation.
function createEscaper(map) {
  var escaper = function(match) {
    return map[match];
  };
  // Regexes for identifying a key that needs to be escaped.
  var source = '(?:' + Object(_keys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(map).join('|') + ')';
  var testRegexp = RegExp(source);
  var replaceRegexp = RegExp(source, 'g');
  return function(string) {
    string = string == null ? '' : '' + string;
    return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
  };
}


/***/ }),

/***/ "./node_modules/underscore/modules/_createIndexFinder.js":
/*!***************************************************************!*\
  !*** ./node_modules/underscore/modules/_createIndexFinder.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createIndexFinder; });
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getLength.js */ "./node_modules/underscore/modules/_getLength.js");
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony import */ var _isNaN_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isNaN.js */ "./node_modules/underscore/modules/isNaN.js");




// Internal function to generate the `_.indexOf` and `_.lastIndexOf` functions.
function createIndexFinder(dir, predicateFind, sortedIndex) {
  return function(array, item, idx) {
    var i = 0, length = Object(_getLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array);
    if (typeof idx == 'number') {
      if (dir > 0) {
        i = idx >= 0 ? idx : Math.max(idx + length, i);
      } else {
        length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
      }
    } else if (sortedIndex && idx && length) {
      idx = sortedIndex(array, item);
      return array[idx] === item ? idx : -1;
    }
    if (item !== item) {
      idx = predicateFind(_setup_js__WEBPACK_IMPORTED_MODULE_1__["slice"].call(array, i, length), _isNaN_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
      return idx >= 0 ? idx + i : -1;
    }
    for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
      if (array[idx] === item) return idx;
    }
    return -1;
  };
}


/***/ }),

/***/ "./node_modules/underscore/modules/_createPredicateIndexFinder.js":
/*!************************************************************************!*\
  !*** ./node_modules/underscore/modules/_createPredicateIndexFinder.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createPredicateIndexFinder; });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getLength.js */ "./node_modules/underscore/modules/_getLength.js");



// Internal function to generate `_.findIndex` and `_.findLastIndex`.
function createPredicateIndexFinder(dir) {
  return function(array, predicate, context) {
    predicate = Object(_cb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(predicate, context);
    var length = Object(_getLength_js__WEBPACK_IMPORTED_MODULE_1__["default"])(array);
    var index = dir > 0 ? 0 : length - 1;
    for (; index >= 0 && index < length; index += dir) {
      if (predicate(array[index], index, array)) return index;
    }
    return -1;
  };
}


/***/ }),

/***/ "./node_modules/underscore/modules/_createReduce.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/_createReduce.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createReduce; });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/underscore/modules/_isArrayLike.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");
/* harmony import */ var _optimizeCb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_optimizeCb.js */ "./node_modules/underscore/modules/_optimizeCb.js");




// Internal helper to create a reducing function, iterating left or right.
function createReduce(dir) {
  // Wrap code that reassigns argument variables in a separate function than
  // the one that accesses `arguments.length` to avoid a perf hit. (#1991)
  var reducer = function(obj, iteratee, memo, initial) {
    var _keys = !Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj) && Object(_keys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj),
        length = (_keys || obj).length,
        index = dir > 0 ? 0 : length - 1;
    if (!initial) {
      memo = obj[_keys ? _keys[index] : index];
      index += dir;
    }
    for (; index >= 0 && index < length; index += dir) {
      var currentKey = _keys ? _keys[index] : index;
      memo = iteratee(memo, obj[currentKey], currentKey, obj);
    }
    return memo;
  };

  return function(obj, iteratee, memo, context) {
    var initial = arguments.length >= 3;
    return reducer(obj, Object(_optimizeCb_js__WEBPACK_IMPORTED_MODULE_2__["default"])(iteratee, context, 4), memo, initial);
  };
}


/***/ }),

/***/ "./node_modules/underscore/modules/_createSizePropertyCheck.js":
/*!*********************************************************************!*\
  !*** ./node_modules/underscore/modules/_createSizePropertyCheck.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createSizePropertyCheck; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");


// Common internal logic for `isArrayLike` and `isBufferLike`.
function createSizePropertyCheck(getSizeProperty) {
  return function(collection) {
    var sizeProperty = getSizeProperty(collection);
    return typeof sizeProperty == 'number' && sizeProperty >= 0 && sizeProperty <= _setup_js__WEBPACK_IMPORTED_MODULE_0__["MAX_ARRAY_INDEX"];
  }
}


/***/ }),

/***/ "./node_modules/underscore/modules/_deepGet.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/_deepGet.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return deepGet; });
// Internal function to obtain a nested property in `obj` along `path`.
function deepGet(obj, path) {
  var length = path.length;
  for (var i = 0; i < length; i++) {
    if (obj == null) return void 0;
    obj = obj[path[i]];
  }
  return length ? obj : void 0;
}


/***/ }),

/***/ "./node_modules/underscore/modules/_escapeMap.js":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/modules/_escapeMap.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Internal list of HTML entities for escaping.
/* harmony default export */ __webpack_exports__["default"] = ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;'
});


/***/ }),

/***/ "./node_modules/underscore/modules/_executeBound.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/_executeBound.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return executeBound; });
/* harmony import */ var _baseCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseCreate.js */ "./node_modules/underscore/modules/_baseCreate.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/underscore/modules/isObject.js");



// Internal function to execute `sourceFunc` bound to `context` with optional
// `args`. Determines whether to execute a function as a constructor or as a
// normal function.
function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
  if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
  var self = Object(_baseCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(sourceFunc.prototype);
  var result = sourceFunc.apply(self, args);
  if (Object(_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result)) return result;
  return self;
}


/***/ }),

/***/ "./node_modules/underscore/modules/_flatten.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/_flatten.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return flatten; });
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getLength.js */ "./node_modules/underscore/modules/_getLength.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/underscore/modules/_isArrayLike.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/underscore/modules/isArray.js");
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isArguments.js */ "./node_modules/underscore/modules/isArguments.js");





// Internal implementation of a recursive `flatten` function.
function flatten(input, depth, strict, output) {
  output = output || [];
  if (!depth && depth !== 0) {
    depth = Infinity;
  } else if (depth <= 0) {
    return output.concat(input);
  }
  var idx = output.length;
  for (var i = 0, length = Object(_getLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input); i < length; i++) {
    var value = input[i];
    if (Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && (Object(_isArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) || Object(_isArguments_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value))) {
      // Flatten current level of array or arguments object.
      if (depth > 1) {
        flatten(value, depth - 1, strict, output);
        idx = output.length;
      } else {
        var j = 0, len = value.length;
        while (j < len) output[idx++] = value[j++];
      }
    } else if (!strict) {
      output[idx++] = value;
    }
  }
  return output;
}


/***/ }),

/***/ "./node_modules/underscore/modules/_getByteLength.js":
/*!***********************************************************!*\
  !*** ./node_modules/underscore/modules/_getByteLength.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shallowProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_shallowProperty.js */ "./node_modules/underscore/modules/_shallowProperty.js");


// Internal helper to obtain the `byteLength` property of an object.
/* harmony default export */ __webpack_exports__["default"] = (Object(_shallowProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])('byteLength'));


/***/ }),

/***/ "./node_modules/underscore/modules/_getLength.js":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/modules/_getLength.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shallowProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_shallowProperty.js */ "./node_modules/underscore/modules/_shallowProperty.js");


// Internal helper to obtain the `length` property of an object.
/* harmony default export */ __webpack_exports__["default"] = (Object(_shallowProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])('length'));


/***/ }),

/***/ "./node_modules/underscore/modules/_group.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/_group.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return group; });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./each.js */ "./node_modules/underscore/modules/each.js");



// An internal function used for aggregate "group by" operations.
function group(behavior, partition) {
  return function(obj, iteratee, context) {
    var result = partition ? [[], []] : {};
    iteratee = Object(_cb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratee, context);
    Object(_each_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, function(value, index) {
      var key = iteratee(value, index, obj);
      behavior(result, value, key);
    });
    return result;
  };
}


/***/ }),

/***/ "./node_modules/underscore/modules/_has.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/_has.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return has; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");


// Internal function to check whether `key` is an own property name of `obj`.
function has(obj, key) {
  return obj != null && _setup_js__WEBPACK_IMPORTED_MODULE_0__["hasOwnProperty"].call(obj, key);
}


/***/ }),

/***/ "./node_modules/underscore/modules/_isArrayLike.js":
/*!*********************************************************!*\
  !*** ./node_modules/underscore/modules/_isArrayLike.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createSizePropertyCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createSizePropertyCheck.js */ "./node_modules/underscore/modules/_createSizePropertyCheck.js");
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getLength.js */ "./node_modules/underscore/modules/_getLength.js");



// Internal helper for collection methods to determine whether a collection
// should be iterated as an array or as an object.
// Related: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
// Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
/* harmony default export */ __webpack_exports__["default"] = (Object(_createSizePropertyCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_getLength_js__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ }),

/***/ "./node_modules/underscore/modules/_isBufferLike.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/_isBufferLike.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createSizePropertyCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createSizePropertyCheck.js */ "./node_modules/underscore/modules/_createSizePropertyCheck.js");
/* harmony import */ var _getByteLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getByteLength.js */ "./node_modules/underscore/modules/_getByteLength.js");



// Internal helper to determine whether we should spend extensive checks against
// `ArrayBuffer` et al.
/* harmony default export */ __webpack_exports__["default"] = (Object(_createSizePropertyCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_getByteLength_js__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ }),

/***/ "./node_modules/underscore/modules/_keyInObj.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/_keyInObj.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return keyInObj; });
// Internal `_.pick` helper function to determine whether `key` is an enumerable
// property name of `obj`.
function keyInObj(value, key, obj) {
  return key in obj;
}


/***/ }),

/***/ "./node_modules/underscore/modules/_optimizeCb.js":
/*!********************************************************!*\
  !*** ./node_modules/underscore/modules/_optimizeCb.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return optimizeCb; });
// Internal function that returns an efficient (for current engines) version
// of the passed-in callback, to be repeatedly applied in other Underscore
// functions.
function optimizeCb(func, context, argCount) {
  if (context === void 0) return func;
  switch (argCount == null ? 3 : argCount) {
    case 1: return function(value) {
      return func.call(context, value);
    };
    // The 2-argument case is omitted because we’re not using it.
    case 3: return function(value, index, collection) {
      return func.call(context, value, index, collection);
    };
    case 4: return function(accumulator, value, index, collection) {
      return func.call(context, accumulator, value, index, collection);
    };
  }
  return function() {
    return func.apply(context, arguments);
  };
}


/***/ }),

/***/ "./node_modules/underscore/modules/_setup.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/_setup.js ***!
  \***************************************************/
/*! exports provided: VERSION, root, ArrayProto, ObjProto, SymbolProto, push, slice, toString, hasOwnProperty, supportsArrayBuffer, nativeIsArray, nativeKeys, nativeCreate, nativeIsView, _isNaN, _isFinite, hasEnumBug, nonEnumerableProps, MAX_ARRAY_INDEX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "root", function() { return root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayProto", function() { return ArrayProto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjProto", function() { return ObjProto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolProto", function() { return SymbolProto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "push", function() { return push; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOwnProperty", function() { return hasOwnProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsArrayBuffer", function() { return supportsArrayBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nativeIsArray", function() { return nativeIsArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nativeKeys", function() { return nativeKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nativeCreate", function() { return nativeCreate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nativeIsView", function() { return nativeIsView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isNaN", function() { return _isNaN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isFinite", function() { return _isFinite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasEnumBug", function() { return hasEnumBug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nonEnumerableProps", function() { return nonEnumerableProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_ARRAY_INDEX", function() { return MAX_ARRAY_INDEX; });
// Current version.
var VERSION = '1.11.0';

// Establish the root object, `window` (`self`) in the browser, `global`
// on the server, or `this` in some virtual machines. We use `self`
// instead of `window` for `WebWorker` support.
var root = typeof self == 'object' && self.self === self && self ||
          typeof global == 'object' && global.global === global && global ||
          Function('return this')() ||
          {};

// Save bytes in the minified (but not gzipped) version:
var ArrayProto = Array.prototype, ObjProto = Object.prototype;
var SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null;

// Create quick reference variables for speed access to core prototypes.
var push = ArrayProto.push,
    slice = ArrayProto.slice,
    toString = ObjProto.toString,
    hasOwnProperty = ObjProto.hasOwnProperty;

// Modern feature detection.
var supportsArrayBuffer = typeof ArrayBuffer !== 'undefined';

// All **ECMAScript 5+** native function implementations that we hope to use
// are declared here.
var nativeIsArray = Array.isArray,
    nativeKeys = Object.keys,
    nativeCreate = Object.create,
    nativeIsView = supportsArrayBuffer && ArrayBuffer.isView;

// Create references to these builtin functions because we override them.
var _isNaN = isNaN,
    _isFinite = isFinite;

// Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
  'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

// The largest integer that can be represented exactly.
var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/underscore/modules/_shallowProperty.js":
/*!*************************************************************!*\
  !*** ./node_modules/underscore/modules/_shallowProperty.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shallowProperty; });
// Internal helper to generate a function to obtain property `key` from `obj`.
function shallowProperty(key) {
  return function(obj) {
    return obj == null ? void 0 : obj[key];
  };
}


/***/ }),

/***/ "./node_modules/underscore/modules/_tagTester.js":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/modules/_tagTester.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tagTester; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");


// Internal function for creating a `toString`-based type tester.
function tagTester(name) {
  return function(obj) {
    return _setup_js__WEBPACK_IMPORTED_MODULE_0__["toString"].call(obj) === '[object ' + name + ']';
  };
}


/***/ }),

/***/ "./node_modules/underscore/modules/_unescapeMap.js":
/*!*********************************************************!*\
  !*** ./node_modules/underscore/modules/_unescapeMap.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _invert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invert.js */ "./node_modules/underscore/modules/invert.js");
/* harmony import */ var _escapeMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_escapeMap.js */ "./node_modules/underscore/modules/_escapeMap.js");



// Internal list of HTML entities for unescaping.
/* harmony default export */ __webpack_exports__["default"] = (Object(_invert_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_escapeMap_js__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ }),

/***/ "./node_modules/underscore/modules/after.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/after.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return after; });
// Returns a function that will only be executed on and after the Nth call.
function after(times, func) {
  return function() {
    if (--times < 1) {
      return func.apply(this, arguments);
    }
  };
}


/***/ }),

/***/ "./node_modules/underscore/modules/allKeys.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/allKeys.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return allKeys; });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/underscore/modules/isObject.js");
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony import */ var _collectNonEnumProps_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_collectNonEnumProps.js */ "./node_modules/underscore/modules/_collectNonEnumProps.js");




// Retrieve all the enumerable property names of an object.
function allKeys(obj) {
  if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj)) return [];
  var keys = [];
  for (var key in obj) keys.push(key);
  // Ahem, IE < 9.
  if (_setup_js__WEBPACK_IMPORTED_MODULE_1__["hasEnumBug"]) Object(_collectNonEnumProps_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, keys);
  return keys;
}


/***/ }),

/***/ "./node_modules/underscore/modules/before.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/before.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return before; });
// Returns a function that will only be executed up to (but not including) the
// Nth call.
function before(times, func) {
  var memo;
  return function() {
    if (--times > 0) {
      memo = func.apply(this, arguments);
    }
    if (times <= 1) func = null;
    return memo;
  };
}


/***/ }),

/***/ "./node_modules/underscore/modules/bind.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/bind.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "./node_modules/underscore/modules/restArguments.js");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/underscore/modules/isFunction.js");
/* harmony import */ var _executeBound_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_executeBound.js */ "./node_modules/underscore/modules/_executeBound.js");




// Create a function bound to a given object (assigning `this`, and arguments,
// optionally).
/* harmony default export */ __webpack_exports__["default"] = (Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(func, context, args) {
  if (!Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(func)) throw new TypeError('Bind must be called on a function');
  var bound = Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(callArgs) {
    return Object(_executeBound_js__WEBPACK_IMPORTED_MODULE_2__["default"])(func, bound, context, this, args.concat(callArgs));
  });
  return bound;
}));


/***/ }),

/***/ "./node_modules/underscore/modules/bindAll.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/bindAll.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "./node_modules/underscore/modules/restArguments.js");
/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_flatten.js */ "./node_modules/underscore/modules/_flatten.js");
/* harmony import */ var _bind_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bind.js */ "./node_modules/underscore/modules/bind.js");




// Bind a number of an object's methods to that object. Remaining arguments
// are the method names to be bound. Useful for ensuring that all callbacks
// defined on an object belong to it.
/* harmony default export */ __webpack_exports__["default"] = (Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(obj, keys) {
  keys = Object(_flatten_js__WEBPACK_IMPORTED_MODULE_1__["default"])(keys, false, false);
  var index = keys.length;
  if (index < 1) throw new Error('bindAll must be passed function names');
  while (index--) {
    var key = keys[index];
    obj[key] = Object(_bind_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj[key], obj);
  }
  return obj;
}));


/***/ }),

/***/ "./node_modules/underscore/modules/chain.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/chain.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return chain; });
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ "./node_modules/underscore/modules/underscore.js");


// Start chaining a wrapped Underscore object.
function chain(obj) {
  var instance = Object(_underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj);
  instance._chain = true;
  return instance;
}


/***/ }),

/***/ "./node_modules/underscore/modules/chunk.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/chunk.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return chunk; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");


// Chunk a single array into multiple arrays, each containing `count` or fewer
// items.
function chunk(array, count) {
  if (count == null || count < 1) return [];
  var result = [];
  var i = 0, length = array.length;
  while (i < length) {
    result.push(_setup_js__WEBPACK_IMPORTED_MODULE_0__["slice"].call(array, i, i += count));
  }
  return result;
}


/***/ }),

/***/ "./node_modules/underscore/modules/clone.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/clone.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return clone; });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/underscore/modules/isObject.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/underscore/modules/isArray.js");
/* harmony import */ var _extend_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extend.js */ "./node_modules/underscore/modules/extend.js");




// Create a (shallow-cloned) duplicate of an object.
function clone(obj) {
  if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj)) return obj;
  return Object(_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) ? obj.slice() : Object(_extend_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, obj);
}


/***/ }),

/***/ "./node_modules/underscore/modules/compact.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/compact.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return compact; });
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.js */ "./node_modules/underscore/modules/filter.js");


// Trim out all falsy values from an array.
function compact(array) {
  return Object(_filter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, Boolean);
}


/***/ }),

/***/ "./node_modules/underscore/modules/compose.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/compose.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return compose; });
// Returns a function that is the composition of a list of functions, each
// consuming the return value of the function that follows.
function compose() {
  var args = arguments;
  var start = args.length - 1;
  return function() {
    var i = start;
    var result = args[start].apply(this, arguments);
    while (i--) result = args[i].call(this, result);
    return result;
  };
}


/***/ }),

/***/ "./node_modules/underscore/modules/constant.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/constant.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return constant; });
// Predicate-generating function. Often useful outside of Underscore.
function constant(value) {
  return function() {
    return value;
  };
}


/***/ }),

/***/ "./node_modules/underscore/modules/contains.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/contains.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return contains; });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/underscore/modules/_isArrayLike.js");
/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./values.js */ "./node_modules/underscore/modules/values.js");
/* harmony import */ var _indexOf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./indexOf.js */ "./node_modules/underscore/modules/indexOf.js");




// Determine if the array or object contains a given item (using `===`).
function contains(obj, item, fromIndex, guard) {
  if (!Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj)) obj = Object(_values_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj);
  if (typeof fromIndex != 'number' || guard) fromIndex = 0;
  return Object(_indexOf_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, item, fromIndex) >= 0;
}


/***/ }),

/***/ "./node_modules/underscore/modules/countBy.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/countBy.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _group_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_group.js */ "./node_modules/underscore/modules/_group.js");
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_has.js */ "./node_modules/underscore/modules/_has.js");



// Counts instances of an object that group by a certain criterion. Pass
// either a string attribute to count by, or a function that returns the
// criterion.
/* harmony default export */ __webpack_exports__["default"] = (Object(_group_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(result, value, key) {
  if (Object(_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result, key)) result[key]++; else result[key] = 1;
}));


/***/ }),

/***/ "./node_modules/underscore/modules/create.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/create.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return create; });
/* harmony import */ var _baseCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseCreate.js */ "./node_modules/underscore/modules/_baseCreate.js");
/* harmony import */ var _extendOwn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extendOwn.js */ "./node_modules/underscore/modules/extendOwn.js");



// Creates an object that inherits from the given prototype object.
// If additional properties are provided then they will be added to the
// created object.
function create(prototype, props) {
  var result = Object(_baseCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(prototype);
  if (props) Object(_extendOwn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result, props);
  return result;
}


/***/ }),

/***/ "./node_modules/underscore/modules/debounce.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/debounce.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return debounce; });
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "./node_modules/underscore/modules/restArguments.js");
/* harmony import */ var _delay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delay.js */ "./node_modules/underscore/modules/delay.js");



// When a sequence of calls of the returned function ends, the argument
// function is triggered. The end of a sequence is defined by the `wait`
// parameter. If `immediate` is passed, the argument function will be
// triggered at the beginning of the sequence instead of at the end.
function debounce(func, wait, immediate) {
  var timeout, result;

  var later = function(context, args) {
    timeout = null;
    if (args) result = func.apply(context, args);
  };

  var debounced = Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(args) {
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(later, wait);
      if (callNow) result = func.apply(this, args);
    } else {
      timeout = Object(_delay_js__WEBPACK_IMPORTED_MODULE_1__["default"])(later, wait, this, args);
    }

    return result;
  });

  debounced.cancel = function() {
    clearTimeout(timeout);
    timeout = null;
  };

  return debounced;
}


/***/ }),

/***/ "./node_modules/underscore/modules/defaults.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/defaults.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createAssigner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createAssigner.js */ "./node_modules/underscore/modules/_createAssigner.js");
/* harmony import */ var _allKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allKeys.js */ "./node_modules/underscore/modules/allKeys.js");



// Fill in a given object with default properties.
/* harmony default export */ __webpack_exports__["default"] = (Object(_createAssigner_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_allKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"], true));


/***/ }),

/***/ "./node_modules/underscore/modules/defer.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/defer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _partial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partial.js */ "./node_modules/underscore/modules/partial.js");
/* harmony import */ var _delay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delay.js */ "./node_modules/underscore/modules/delay.js");
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./underscore.js */ "./node_modules/underscore/modules/underscore.js");




// Defers a function, scheduling it to run after the current call stack has
// cleared.
/* harmony default export */ __webpack_exports__["default"] = (Object(_partial_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_delay_js__WEBPACK_IMPORTED_MODULE_1__["default"], _underscore_js__WEBPACK_IMPORTED_MODULE_2__["default"], 1));


/***/ }),

/***/ "./node_modules/underscore/modules/delay.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/delay.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "./node_modules/underscore/modules/restArguments.js");


// Delays a function for the given number of milliseconds, and then calls
// it with the arguments supplied.
/* harmony default export */ __webpack_exports__["default"] = (Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(func, wait, args) {
  return setTimeout(function() {
    return func.apply(null, args);
  }, wait);
}));


/***/ }),

/***/ "./node_modules/underscore/modules/difference.js":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/modules/difference.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "./node_modules/underscore/modules/restArguments.js");
/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_flatten.js */ "./node_modules/underscore/modules/_flatten.js");
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter.js */ "./node_modules/underscore/modules/filter.js");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contains.js */ "./node_modules/underscore/modules/contains.js");





// Take the difference between one array and a number of other arrays.
// Only the elements present in just the first array will remain.
/* harmony default export */ __webpack_exports__["default"] = (Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(array, rest) {
  rest = Object(_flatten_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rest, true, true);
  return Object(_filter_js__WEBPACK_IMPORTED_MODULE_2__["default"])(array, function(value){
    return !Object(_contains_js__WEBPACK_IMPORTED_MODULE_3__["default"])(rest, value);
  });
}));


/***/ }),

/***/ "./node_modules/underscore/modules/each.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/each.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return each; });
/* harmony import */ var _optimizeCb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_optimizeCb.js */ "./node_modules/underscore/modules/_optimizeCb.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/underscore/modules/_isArrayLike.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");




// The cornerstone for collection functions, an `each`
// implementation, aka `forEach`.
// Handles raw objects in addition to array-likes. Treats all
// sparse array-likes as if they were dense.
function each(obj, iteratee, context) {
  iteratee = Object(_optimizeCb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratee, context);
  var i, length;
  if (Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj)) {
    for (i = 0, length = obj.length; i < length; i++) {
      iteratee(obj[i], i, obj);
    }
  } else {
    var _keys = Object(_keys_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj);
    for (i = 0, length = _keys.length; i < length; i++) {
      iteratee(obj[_keys[i]], _keys[i], obj);
    }
  }
  return obj;
}


/***/ }),

/***/ "./node_modules/underscore/modules/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/escape.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createEscaper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createEscaper.js */ "./node_modules/underscore/modules/_createEscaper.js");
/* harmony import */ var _escapeMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_escapeMap.js */ "./node_modules/underscore/modules/_escapeMap.js");



// Function for escaping strings to HTML interpolation.
/* harmony default export */ __webpack_exports__["default"] = (Object(_createEscaper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_escapeMap_js__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ }),

/***/ "./node_modules/underscore/modules/every.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/every.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return every; });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/underscore/modules/_isArrayLike.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");




// Determine whether all of the elements pass a truth test.
function every(obj, predicate, context) {
  predicate = Object(_cb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(predicate, context);
  var _keys = !Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) && Object(_keys_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj),
      length = (_keys || obj).length;
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    if (!predicate(obj[currentKey], currentKey, obj)) return false;
  }
  return true;
}


/***/ }),

/***/ "./node_modules/underscore/modules/extend.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/extend.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createAssigner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createAssigner.js */ "./node_modules/underscore/modules/_createAssigner.js");
/* harmony import */ var _allKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allKeys.js */ "./node_modules/underscore/modules/allKeys.js");



// Extend a given object with all the properties in passed-in object(s).
/* harmony default export */ __webpack_exports__["default"] = (Object(_createAssigner_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_allKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ }),

/***/ "./node_modules/underscore/modules/extendOwn.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/extendOwn.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createAssigner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createAssigner.js */ "./node_modules/underscore/modules/_createAssigner.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");



// Assigns a given object with all the own properties in the passed-in
// object(s).
// (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
/* harmony default export */ __webpack_exports__["default"] = (Object(_createAssigner_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_keys_js__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ }),

/***/ "./node_modules/underscore/modules/filter.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/filter.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return filter; });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./each.js */ "./node_modules/underscore/modules/each.js");



// Return all the elements that pass a truth test.
function filter(obj, predicate, context) {
  var results = [];
  predicate = Object(_cb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(predicate, context);
  Object(_each_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, function(value, index, list) {
    if (predicate(value, index, list)) results.push(value);
  });
  return results;
}


/***/ }),

/***/ "./node_modules/underscore/modules/find.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/find.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return find; });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/underscore/modules/_isArrayLike.js");
/* harmony import */ var _findIndex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./findIndex.js */ "./node_modules/underscore/modules/findIndex.js");
/* harmony import */ var _findKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./findKey.js */ "./node_modules/underscore/modules/findKey.js");




// Return the first value which passes a truth test.
function find(obj, predicate, context) {
  var keyFinder = Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj) ? _findIndex_js__WEBPACK_IMPORTED_MODULE_1__["default"] : _findKey_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var key = keyFinder(obj, predicate, context);
  if (key !== void 0 && key !== -1) return obj[key];
}


/***/ }),

/***/ "./node_modules/underscore/modules/findIndex.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/findIndex.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createPredicateIndexFinder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createPredicateIndexFinder.js */ "./node_modules/underscore/modules/_createPredicateIndexFinder.js");


// Returns the first index on an array-like that passes a truth test.
/* harmony default export */ __webpack_exports__["default"] = (Object(_createPredicateIndexFinder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1));


/***/ }),

/***/ "./node_modules/underscore/modules/findKey.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/findKey.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return findKey; });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");



// Returns the first key on an object that passes a truth test.
function findKey(obj, predicate, context) {
  predicate = Object(_cb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(predicate, context);
  var _keys = Object(_keys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj), key;
  for (var i = 0, length = _keys.length; i < length; i++) {
    key = _keys[i];
    if (predicate(obj[key], key, obj)) return key;
  }
}


/***/ }),

/***/ "./node_modules/underscore/modules/findLastIndex.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/findLastIndex.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createPredicateIndexFinder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createPredicateIndexFinder.js */ "./node_modules/underscore/modules/_createPredicateIndexFinder.js");


// Returns the last index on an array-like that passes a truth test.
/* harmony default export */ __webpack_exports__["default"] = (Object(_createPredicateIndexFinder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(-1));


/***/ }),

/***/ "./node_modules/underscore/modules/findWhere.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/findWhere.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return findWhere; });
/* harmony import */ var _find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find.js */ "./node_modules/underscore/modules/find.js");
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matcher.js */ "./node_modules/underscore/modules/matcher.js");



// Convenience version of a common use case of `_.find`: getting the first
// object containing specific `key:value` pairs.
function findWhere(obj, attrs) {
  return Object(_find_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, Object(_matcher_js__WEBPACK_IMPORTED_MODULE_1__["default"])(attrs));
}


/***/ }),

/***/ "./node_modules/underscore/modules/first.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/first.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return first; });
/* harmony import */ var _initial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial.js */ "./node_modules/underscore/modules/initial.js");


// Get the first element of an array. Passing **n** will return the first N
// values in the array. The **guard** check allows it to work with `_.map`.
function first(array, n, guard) {
  if (array == null || array.length < 1) return n == null || guard ? void 0 : [];
  if (n == null || guard) return array[0];
  return Object(_initial_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, array.length - n);
}


/***/ }),

/***/ "./node_modules/underscore/modules/flatten.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/flatten.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return flatten; });
/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_flatten.js */ "./node_modules/underscore/modules/_flatten.js");


// Flatten out an array, either recursively (by default), or up to `depth`.
// Passing `true` or `false` as `depth` means `1` or `Infinity`, respectively.
function flatten(array, depth) {
  return Object(_flatten_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, depth, false);
}


/***/ }),

/***/ "./node_modules/underscore/modules/functions.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/functions.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return functions; });
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/underscore/modules/isFunction.js");


// Return a sorted list of the function names available on the object.
function functions(obj) {
  var names = [];
  for (var key in obj) {
    if (Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj[key])) names.push(key);
  }
  return names.sort();
}


/***/ }),

/***/ "./node_modules/underscore/modules/groupBy.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/groupBy.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _group_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_group.js */ "./node_modules/underscore/modules/_group.js");
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_has.js */ "./node_modules/underscore/modules/_has.js");



// Groups the object's values by a criterion. Pass either a string attribute
// to group by, or a function that returns the criterion.
/* harmony default export */ __webpack_exports__["default"] = (Object(_group_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(result, value, key) {
  if (Object(_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result, key)) result[key].push(value); else result[key] = [value];
}));


/***/ }),

/***/ "./node_modules/underscore/modules/has.js":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/has.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return has; });
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/underscore/modules/isArray.js");
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_has.js */ "./node_modules/underscore/modules/_has.js");
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");




// Shortcut function for checking if an object has a given property directly on
// itself (in other words, not on a prototype). Unlike the internal `has`
// function, this public version can also traverse nested properties.
function has(obj, path) {
  if (!Object(_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(path)) {
    return Object(_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, path);
  }
  var length = path.length;
  for (var i = 0; i < length; i++) {
    var key = path[i];
    if (obj == null || !_setup_js__WEBPACK_IMPORTED_MODULE_2__["hasOwnProperty"].call(obj, key)) {
      return false;
    }
    obj = obj[key];
  }
  return !!length;
}


/***/ }),

/***/ "./node_modules/underscore/modules/identity.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/identity.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return identity; });
// Keep the identity function around for default iteratees.
function identity(value) {
  return value;
}


/***/ }),

/***/ "./node_modules/underscore/modules/index-all.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/index-all.js ***!
  \******************************************************/
/*! exports provided: default, VERSION, restArguments, isObject, isNull, isUndefined, isBoolean, isElement, isString, isNumber, isDate, isRegExp, isError, isSymbol, isMap, isWeakMap, isSet, isWeakSet, isArrayBuffer, isDataView, isArray, isFunction, isArguments, isFinite, isNaN, isTypedArray, isEmpty, isMatch, isEqual, keys, allKeys, values, pairs, invert, functions, methods, extend, extendOwn, assign, defaults, create, clone, tap, has, mapObject, identity, constant, noop, property, propertyOf, matcher, matches, times, random, now, escape, unescape, templateSettings, template, result, uniqueId, chain, iteratee, partial, bind, bindAll, memoize, delay, defer, throttle, debounce, wrap, negate, compose, after, before, once, findKey, findIndex, findLastIndex, sortedIndex, indexOf, lastIndexOf, find, detect, findWhere, each, forEach, map, collect, reduce, foldl, inject, reduceRight, foldr, filter, select, reject, every, all, some, any, contains, includes, include, invoke, pluck, where, max, min, shuffle, sample, sortBy, groupBy, indexBy, countBy, partition, toArray, size, pick, omit, first, head, take, initial, last, rest, tail, drop, compact, flatten, without, uniq, unique, union, intersection, difference, unzip, transpose, zip, object, range, chunk, mixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_default_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-default.js */ "./node_modules/underscore/modules/index-default.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _index_default_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/underscore/modules/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["VERSION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "restArguments", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["restArguments"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isNull"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isRegExp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isError", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSymbol", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isSymbol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMap", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isWeakMap", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isWeakMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSet", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isWeakSet", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isWeakSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArrayBuffer", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isArrayBuffer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDataView", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isDataView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArguments", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isArguments"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFinite", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isFinite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNaN", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isNaN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypedArray", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isTypedArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isEmpty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMatch", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isMatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["isEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["keys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allKeys", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["allKeys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "values", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["values"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["pairs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["invert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "functions", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["functions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "methods", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["methods"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["extend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendOwn", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["extendOwn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["assign"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["defaults"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "create", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["create"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["clone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tap", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["tap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "has", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["has"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapObject", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["mapObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["identity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "constant", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["constant"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["noop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "property", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["property"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "propertyOf", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["propertyOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matcher", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["matcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["matches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "times", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["times"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "random", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["random"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "now", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["now"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["escape"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unescape", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["unescape"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateSettings", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["templateSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "template", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["template"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "result", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["result"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniqueId", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["uniqueId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chain", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["chain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iteratee", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["iteratee"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "partial", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["partial"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["bind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindAll", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["bindAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["memoize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["delay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["defer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["throttle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["debounce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["wrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["negate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["compose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "after", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["after"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "before", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["before"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "once", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["once"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findKey", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["findKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["findIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findLastIndex", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["findLastIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortedIndex", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["sortedIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indexOf", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["indexOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lastIndexOf", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["lastIndexOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "find", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["find"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detect", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["detect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findWhere", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["findWhere"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "each", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["each"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["forEach"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["map"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "collect", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["collect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["reduce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "foldl", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["foldl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["inject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduceRight", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["reduceRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "foldr", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["foldr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["filter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["select"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reject", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["reject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "every", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["every"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "all", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["all"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "some", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["some"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "any", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["any"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["contains"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "includes", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["includes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "include", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["include"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invoke", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["invoke"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pluck", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["pluck"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "where", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["where"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "max", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["max"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "min", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["min"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["shuffle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sample", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["sample"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortBy", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["sortBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["groupBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indexBy", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["indexBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countBy", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["countBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["partition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["toArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "size", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["size"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["pick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["omit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "first", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["first"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "head", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["head"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "take", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["take"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initial", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["initial"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "last", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["last"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rest", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["rest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tail", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["tail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "drop", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["drop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compact", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["compact"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["flatten"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "without", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["without"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniq", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["uniq"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unique", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["unique"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "union", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["union"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "intersection", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["intersection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "difference", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["difference"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unzip", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["unzip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["transpose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["zip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "object", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["object"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["range"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chunk", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["chunk"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixin", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["mixin"]; });

// ESM Exports
// ===========
// This module is the package entry point for ES module users. In other words,
// it is the module they are interfacing with when they import from the whole
// package instead of from a submodule, like this:
//
// ```js
// import { map } from 'underscore';
// ```
//
// The difference with `./index-default`, which is the package entry point for
// CommonJS, AMD and UMD users, is purely technical. In ES modules, named and
// default exports are considered to be siblings, so when you have a default
// export, its properties are not automatically available as named exports. For
// this reason, we re-export the named exports in addition to providing the same
// default export as in `./index-default`.




/***/ }),

/***/ "./node_modules/underscore/modules/index-default.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/index-default.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/underscore/modules/index.js");
// Default Export
// ==============
// In this module, we mix our bundled exports into the `_` object and export
// the result. This is analogous to setting `module.exports = _` in CommonJS.
// Hence, this module is also the entry point of our UMD bundle and the package
// entry point for CommonJS and AMD users. In other words, this is (the source
// of) the module you are interfacing with when you do any of the following:
//
// ```js
// // CommonJS
// var _ = require('underscore');
//
// // AMD
// define(['underscore'], function(_) {...});
//
// // UMD in the browser
// // _ is available as a global variable
// ```



// Add all of the Underscore functions to the wrapper object.
var _ = Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["mixin"])(_index_js__WEBPACK_IMPORTED_MODULE_0__);
// Legacy Node.js API.
_._ = _;
// Export the Underscore API.
/* harmony default export */ __webpack_exports__["default"] = (_);


/***/ }),

/***/ "./node_modules/underscore/modules/index.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/index.js ***!
  \**************************************************/
/*! exports provided: VERSION, restArguments, isObject, isNull, isUndefined, isBoolean, isElement, isString, isNumber, isDate, isRegExp, isError, isSymbol, isMap, isWeakMap, isSet, isWeakSet, isArrayBuffer, isDataView, isArray, isFunction, isArguments, isFinite, isNaN, isTypedArray, isEmpty, isMatch, isEqual, keys, allKeys, values, pairs, invert, functions, methods, extend, extendOwn, assign, defaults, create, clone, tap, has, mapObject, identity, constant, noop, property, propertyOf, matcher, matches, times, random, now, escape, unescape, templateSettings, template, result, uniqueId, chain, iteratee, partial, bind, bindAll, memoize, delay, defer, throttle, debounce, wrap, negate, compose, after, before, once, findKey, findIndex, findLastIndex, sortedIndex, indexOf, lastIndexOf, find, detect, findWhere, each, forEach, map, collect, reduce, foldl, inject, reduceRight, foldr, filter, select, reject, every, all, some, any, contains, includes, include, invoke, pluck, where, max, min, shuffle, sample, sortBy, groupBy, indexBy, countBy, partition, toArray, size, pick, omit, first, head, take, initial, last, rest, tail, drop, compact, flatten, without, uniq, unique, union, intersection, difference, unzip, transpose, zip, object, range, chunk, mixin, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return _setup_js__WEBPACK_IMPORTED_MODULE_0__["VERSION"]; });

/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restArguments.js */ "./node_modules/underscore/modules/restArguments.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "restArguments", function() { return _restArguments_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/underscore/modules/isObject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _isObject_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _isNull_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isNull.js */ "./node_modules/underscore/modules/isNull.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return _isNull_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _isUndefined_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isUndefined.js */ "./node_modules/underscore/modules/isUndefined.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _isUndefined_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _isBoolean_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isBoolean.js */ "./node_modules/underscore/modules/isBoolean.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _isBoolean_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _isElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isElement.js */ "./node_modules/underscore/modules/isElement.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return _isElement_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _isString_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./isString.js */ "./node_modules/underscore/modules/isString.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _isString_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _isNumber_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./isNumber.js */ "./node_modules/underscore/modules/isNumber.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _isNumber_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _isDate_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./isDate.js */ "./node_modules/underscore/modules/isDate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return _isDate_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _isRegExp_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./isRegExp.js */ "./node_modules/underscore/modules/isRegExp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return _isRegExp_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _isError_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./isError.js */ "./node_modules/underscore/modules/isError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isError", function() { return _isError_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./isSymbol.js */ "./node_modules/underscore/modules/isSymbol.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSymbol", function() { return _isSymbol_js__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _isMap_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./isMap.js */ "./node_modules/underscore/modules/isMap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMap", function() { return _isMap_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _isWeakMap_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./isWeakMap.js */ "./node_modules/underscore/modules/isWeakMap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isWeakMap", function() { return _isWeakMap_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _isSet_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./isSet.js */ "./node_modules/underscore/modules/isSet.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSet", function() { return _isSet_js__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _isWeakSet_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./isWeakSet.js */ "./node_modules/underscore/modules/isWeakSet.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isWeakSet", function() { return _isWeakSet_js__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _isArrayBuffer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./isArrayBuffer.js */ "./node_modules/underscore/modules/isArrayBuffer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArrayBuffer", function() { return _isArrayBuffer_js__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _isDataView_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./isDataView.js */ "./node_modules/underscore/modules/isDataView.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDataView", function() { return _isDataView_js__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/underscore/modules/isArray.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _isArray_js__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/underscore/modules/isFunction.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _isFunction_js__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./isArguments.js */ "./node_modules/underscore/modules/isArguments.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArguments", function() { return _isArguments_js__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _isFinite_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./isFinite.js */ "./node_modules/underscore/modules/isFinite.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFinite", function() { return _isFinite_js__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _isNaN_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./isNaN.js */ "./node_modules/underscore/modules/isNaN.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNaN", function() { return _isNaN_js__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./isTypedArray.js */ "./node_modules/underscore/modules/isTypedArray.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypedArray", function() { return _isTypedArray_js__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _isEmpty_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./isEmpty.js */ "./node_modules/underscore/modules/isEmpty.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return _isEmpty_js__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _isMatch_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./isMatch.js */ "./node_modules/underscore/modules/isMatch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMatch", function() { return _isMatch_js__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _isEqual_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./isEqual.js */ "./node_modules/underscore/modules/isEqual.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return _isEqual_js__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return _keys_js__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _allKeys_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./allKeys.js */ "./node_modules/underscore/modules/allKeys.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allKeys", function() { return _allKeys_js__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./values.js */ "./node_modules/underscore/modules/values.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "values", function() { return _values_js__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _pairs_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pairs.js */ "./node_modules/underscore/modules/pairs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return _pairs_js__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _invert_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./invert.js */ "./node_modules/underscore/modules/invert.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return _invert_js__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./functions.js */ "./node_modules/underscore/modules/functions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "functions", function() { return _functions_js__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "methods", function() { return _functions_js__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _extend_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./extend.js */ "./node_modules/underscore/modules/extend.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return _extend_js__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _extendOwn_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./extendOwn.js */ "./node_modules/underscore/modules/extendOwn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendOwn", function() { return _extendOwn_js__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return _extendOwn_js__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./defaults.js */ "./node_modules/underscore/modules/defaults.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return _defaults_js__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./create.js */ "./node_modules/underscore/modules/create.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "create", function() { return _create_js__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _clone_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./clone.js */ "./node_modules/underscore/modules/clone.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return _clone_js__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _tap_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./tap.js */ "./node_modules/underscore/modules/tap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tap", function() { return _tap_js__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./has.js */ "./node_modules/underscore/modules/has.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "has", function() { return _has_js__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* harmony import */ var _mapObject_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./mapObject.js */ "./node_modules/underscore/modules/mapObject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapObject", function() { return _mapObject_js__WEBPACK_IMPORTED_MODULE_41__["default"]; });

/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./identity.js */ "./node_modules/underscore/modules/identity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return _identity_js__WEBPACK_IMPORTED_MODULE_42__["default"]; });

/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./constant.js */ "./node_modules/underscore/modules/constant.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "constant", function() { return _constant_js__WEBPACK_IMPORTED_MODULE_43__["default"]; });

/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./noop.js */ "./node_modules/underscore/modules/noop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _noop_js__WEBPACK_IMPORTED_MODULE_44__["default"]; });

/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./property.js */ "./node_modules/underscore/modules/property.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "property", function() { return _property_js__WEBPACK_IMPORTED_MODULE_45__["default"]; });

/* harmony import */ var _propertyOf_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./propertyOf.js */ "./node_modules/underscore/modules/propertyOf.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "propertyOf", function() { return _propertyOf_js__WEBPACK_IMPORTED_MODULE_46__["default"]; });

/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./matcher.js */ "./node_modules/underscore/modules/matcher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matcher", function() { return _matcher_js__WEBPACK_IMPORTED_MODULE_47__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return _matcher_js__WEBPACK_IMPORTED_MODULE_47__["default"]; });

/* harmony import */ var _times_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./times.js */ "./node_modules/underscore/modules/times.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "times", function() { return _times_js__WEBPACK_IMPORTED_MODULE_48__["default"]; });

/* harmony import */ var _random_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./random.js */ "./node_modules/underscore/modules/random.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "random", function() { return _random_js__WEBPACK_IMPORTED_MODULE_49__["default"]; });

/* harmony import */ var _now_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./now.js */ "./node_modules/underscore/modules/now.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "now", function() { return _now_js__WEBPACK_IMPORTED_MODULE_50__["default"]; });

/* harmony import */ var _escape_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./escape.js */ "./node_modules/underscore/modules/escape.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return _escape_js__WEBPACK_IMPORTED_MODULE_51__["default"]; });

/* harmony import */ var _unescape_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./unescape.js */ "./node_modules/underscore/modules/unescape.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unescape", function() { return _unescape_js__WEBPACK_IMPORTED_MODULE_52__["default"]; });

/* harmony import */ var _templateSettings_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./templateSettings.js */ "./node_modules/underscore/modules/templateSettings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateSettings", function() { return _templateSettings_js__WEBPACK_IMPORTED_MODULE_53__["default"]; });

/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./template.js */ "./node_modules/underscore/modules/template.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "template", function() { return _template_js__WEBPACK_IMPORTED_MODULE_54__["default"]; });

/* harmony import */ var _result_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./result.js */ "./node_modules/underscore/modules/result.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "result", function() { return _result_js__WEBPACK_IMPORTED_MODULE_55__["default"]; });

/* harmony import */ var _uniqueId_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./uniqueId.js */ "./node_modules/underscore/modules/uniqueId.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniqueId", function() { return _uniqueId_js__WEBPACK_IMPORTED_MODULE_56__["default"]; });

/* harmony import */ var _chain_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./chain.js */ "./node_modules/underscore/modules/chain.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chain", function() { return _chain_js__WEBPACK_IMPORTED_MODULE_57__["default"]; });

/* harmony import */ var _iteratee_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./iteratee.js */ "./node_modules/underscore/modules/iteratee.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iteratee", function() { return _iteratee_js__WEBPACK_IMPORTED_MODULE_58__["default"]; });

/* harmony import */ var _partial_js__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./partial.js */ "./node_modules/underscore/modules/partial.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "partial", function() { return _partial_js__WEBPACK_IMPORTED_MODULE_59__["default"]; });

/* harmony import */ var _bind_js__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./bind.js */ "./node_modules/underscore/modules/bind.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return _bind_js__WEBPACK_IMPORTED_MODULE_60__["default"]; });

/* harmony import */ var _bindAll_js__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./bindAll.js */ "./node_modules/underscore/modules/bindAll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindAll", function() { return _bindAll_js__WEBPACK_IMPORTED_MODULE_61__["default"]; });

/* harmony import */ var _memoize_js__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./memoize.js */ "./node_modules/underscore/modules/memoize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return _memoize_js__WEBPACK_IMPORTED_MODULE_62__["default"]; });

/* harmony import */ var _delay_js__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./delay.js */ "./node_modules/underscore/modules/delay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return _delay_js__WEBPACK_IMPORTED_MODULE_63__["default"]; });

/* harmony import */ var _defer_js__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./defer.js */ "./node_modules/underscore/modules/defer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return _defer_js__WEBPACK_IMPORTED_MODULE_64__["default"]; });

/* harmony import */ var _throttle_js__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./throttle.js */ "./node_modules/underscore/modules/throttle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return _throttle_js__WEBPACK_IMPORTED_MODULE_65__["default"]; });

/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./debounce.js */ "./node_modules/underscore/modules/debounce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _debounce_js__WEBPACK_IMPORTED_MODULE_66__["default"]; });

/* harmony import */ var _wrap_js__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./wrap.js */ "./node_modules/underscore/modules/wrap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return _wrap_js__WEBPACK_IMPORTED_MODULE_67__["default"]; });

/* harmony import */ var _negate_js__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./negate.js */ "./node_modules/underscore/modules/negate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return _negate_js__WEBPACK_IMPORTED_MODULE_68__["default"]; });

/* harmony import */ var _compose_js__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./compose.js */ "./node_modules/underscore/modules/compose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _compose_js__WEBPACK_IMPORTED_MODULE_69__["default"]; });

/* harmony import */ var _after_js__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./after.js */ "./node_modules/underscore/modules/after.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "after", function() { return _after_js__WEBPACK_IMPORTED_MODULE_70__["default"]; });

/* harmony import */ var _before_js__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./before.js */ "./node_modules/underscore/modules/before.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "before", function() { return _before_js__WEBPACK_IMPORTED_MODULE_71__["default"]; });

/* harmony import */ var _once_js__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./once.js */ "./node_modules/underscore/modules/once.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "once", function() { return _once_js__WEBPACK_IMPORTED_MODULE_72__["default"]; });

/* harmony import */ var _findKey_js__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./findKey.js */ "./node_modules/underscore/modules/findKey.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findKey", function() { return _findKey_js__WEBPACK_IMPORTED_MODULE_73__["default"]; });

/* harmony import */ var _findIndex_js__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./findIndex.js */ "./node_modules/underscore/modules/findIndex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return _findIndex_js__WEBPACK_IMPORTED_MODULE_74__["default"]; });

/* harmony import */ var _findLastIndex_js__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./findLastIndex.js */ "./node_modules/underscore/modules/findLastIndex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findLastIndex", function() { return _findLastIndex_js__WEBPACK_IMPORTED_MODULE_75__["default"]; });

/* harmony import */ var _sortedIndex_js__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./sortedIndex.js */ "./node_modules/underscore/modules/sortedIndex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortedIndex", function() { return _sortedIndex_js__WEBPACK_IMPORTED_MODULE_76__["default"]; });

/* harmony import */ var _indexOf_js__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./indexOf.js */ "./node_modules/underscore/modules/indexOf.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indexOf", function() { return _indexOf_js__WEBPACK_IMPORTED_MODULE_77__["default"]; });

/* harmony import */ var _lastIndexOf_js__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./lastIndexOf.js */ "./node_modules/underscore/modules/lastIndexOf.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lastIndexOf", function() { return _lastIndexOf_js__WEBPACK_IMPORTED_MODULE_78__["default"]; });

/* harmony import */ var _find_js__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./find.js */ "./node_modules/underscore/modules/find.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "find", function() { return _find_js__WEBPACK_IMPORTED_MODULE_79__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detect", function() { return _find_js__WEBPACK_IMPORTED_MODULE_79__["default"]; });

/* harmony import */ var _findWhere_js__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./findWhere.js */ "./node_modules/underscore/modules/findWhere.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findWhere", function() { return _findWhere_js__WEBPACK_IMPORTED_MODULE_80__["default"]; });

/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./each.js */ "./node_modules/underscore/modules/each.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "each", function() { return _each_js__WEBPACK_IMPORTED_MODULE_81__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return _each_js__WEBPACK_IMPORTED_MODULE_81__["default"]; });

/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./map.js */ "./node_modules/underscore/modules/map.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return _map_js__WEBPACK_IMPORTED_MODULE_82__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "collect", function() { return _map_js__WEBPACK_IMPORTED_MODULE_82__["default"]; });

/* harmony import */ var _reduce_js__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./reduce.js */ "./node_modules/underscore/modules/reduce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return _reduce_js__WEBPACK_IMPORTED_MODULE_83__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "foldl", function() { return _reduce_js__WEBPACK_IMPORTED_MODULE_83__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return _reduce_js__WEBPACK_IMPORTED_MODULE_83__["default"]; });

/* harmony import */ var _reduceRight_js__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./reduceRight.js */ "./node_modules/underscore/modules/reduceRight.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduceRight", function() { return _reduceRight_js__WEBPACK_IMPORTED_MODULE_84__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "foldr", function() { return _reduceRight_js__WEBPACK_IMPORTED_MODULE_84__["default"]; });

/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./filter.js */ "./node_modules/underscore/modules/filter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _filter_js__WEBPACK_IMPORTED_MODULE_85__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _filter_js__WEBPACK_IMPORTED_MODULE_85__["default"]; });

/* harmony import */ var _reject_js__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./reject.js */ "./node_modules/underscore/modules/reject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reject", function() { return _reject_js__WEBPACK_IMPORTED_MODULE_86__["default"]; });

/* harmony import */ var _every_js__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./every.js */ "./node_modules/underscore/modules/every.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "every", function() { return _every_js__WEBPACK_IMPORTED_MODULE_87__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "all", function() { return _every_js__WEBPACK_IMPORTED_MODULE_87__["default"]; });

/* harmony import */ var _some_js__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./some.js */ "./node_modules/underscore/modules/some.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "some", function() { return _some_js__WEBPACK_IMPORTED_MODULE_88__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "any", function() { return _some_js__WEBPACK_IMPORTED_MODULE_88__["default"]; });

/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./contains.js */ "./node_modules/underscore/modules/contains.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return _contains_js__WEBPACK_IMPORTED_MODULE_89__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "includes", function() { return _contains_js__WEBPACK_IMPORTED_MODULE_89__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "include", function() { return _contains_js__WEBPACK_IMPORTED_MODULE_89__["default"]; });

/* harmony import */ var _invoke_js__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./invoke.js */ "./node_modules/underscore/modules/invoke.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invoke", function() { return _invoke_js__WEBPACK_IMPORTED_MODULE_90__["default"]; });

/* harmony import */ var _pluck_js__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./pluck.js */ "./node_modules/underscore/modules/pluck.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pluck", function() { return _pluck_js__WEBPACK_IMPORTED_MODULE_91__["default"]; });

/* harmony import */ var _where_js__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./where.js */ "./node_modules/underscore/modules/where.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "where", function() { return _where_js__WEBPACK_IMPORTED_MODULE_92__["default"]; });

/* harmony import */ var _max_js__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./max.js */ "./node_modules/underscore/modules/max.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "max", function() { return _max_js__WEBPACK_IMPORTED_MODULE_93__["default"]; });

/* harmony import */ var _min_js__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./min.js */ "./node_modules/underscore/modules/min.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "min", function() { return _min_js__WEBPACK_IMPORTED_MODULE_94__["default"]; });

/* harmony import */ var _shuffle_js__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./shuffle.js */ "./node_modules/underscore/modules/shuffle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return _shuffle_js__WEBPACK_IMPORTED_MODULE_95__["default"]; });

/* harmony import */ var _sample_js__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./sample.js */ "./node_modules/underscore/modules/sample.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sample", function() { return _sample_js__WEBPACK_IMPORTED_MODULE_96__["default"]; });

/* harmony import */ var _sortBy_js__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./sortBy.js */ "./node_modules/underscore/modules/sortBy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortBy", function() { return _sortBy_js__WEBPACK_IMPORTED_MODULE_97__["default"]; });

/* harmony import */ var _groupBy_js__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./groupBy.js */ "./node_modules/underscore/modules/groupBy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return _groupBy_js__WEBPACK_IMPORTED_MODULE_98__["default"]; });

/* harmony import */ var _indexBy_js__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./indexBy.js */ "./node_modules/underscore/modules/indexBy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indexBy", function() { return _indexBy_js__WEBPACK_IMPORTED_MODULE_99__["default"]; });

/* harmony import */ var _countBy_js__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./countBy.js */ "./node_modules/underscore/modules/countBy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countBy", function() { return _countBy_js__WEBPACK_IMPORTED_MODULE_100__["default"]; });

/* harmony import */ var _partition_js__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./partition.js */ "./node_modules/underscore/modules/partition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return _partition_js__WEBPACK_IMPORTED_MODULE_101__["default"]; });

/* harmony import */ var _toArray_js__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./toArray.js */ "./node_modules/underscore/modules/toArray.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return _toArray_js__WEBPACK_IMPORTED_MODULE_102__["default"]; });

/* harmony import */ var _size_js__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./size.js */ "./node_modules/underscore/modules/size.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "size", function() { return _size_js__WEBPACK_IMPORTED_MODULE_103__["default"]; });

/* harmony import */ var _pick_js__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ./pick.js */ "./node_modules/underscore/modules/pick.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return _pick_js__WEBPACK_IMPORTED_MODULE_104__["default"]; });

/* harmony import */ var _omit_js__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ./omit.js */ "./node_modules/underscore/modules/omit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return _omit_js__WEBPACK_IMPORTED_MODULE_105__["default"]; });

/* harmony import */ var _first_js__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! ./first.js */ "./node_modules/underscore/modules/first.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "first", function() { return _first_js__WEBPACK_IMPORTED_MODULE_106__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "head", function() { return _first_js__WEBPACK_IMPORTED_MODULE_106__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "take", function() { return _first_js__WEBPACK_IMPORTED_MODULE_106__["default"]; });

/* harmony import */ var _initial_js__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! ./initial.js */ "./node_modules/underscore/modules/initial.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initial", function() { return _initial_js__WEBPACK_IMPORTED_MODULE_107__["default"]; });

/* harmony import */ var _last_js__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! ./last.js */ "./node_modules/underscore/modules/last.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "last", function() { return _last_js__WEBPACK_IMPORTED_MODULE_108__["default"]; });

/* harmony import */ var _rest_js__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! ./rest.js */ "./node_modules/underscore/modules/rest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rest", function() { return _rest_js__WEBPACK_IMPORTED_MODULE_109__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tail", function() { return _rest_js__WEBPACK_IMPORTED_MODULE_109__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "drop", function() { return _rest_js__WEBPACK_IMPORTED_MODULE_109__["default"]; });

/* harmony import */ var _compact_js__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! ./compact.js */ "./node_modules/underscore/modules/compact.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compact", function() { return _compact_js__WEBPACK_IMPORTED_MODULE_110__["default"]; });

/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! ./flatten.js */ "./node_modules/underscore/modules/flatten.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return _flatten_js__WEBPACK_IMPORTED_MODULE_111__["default"]; });

/* harmony import */ var _without_js__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! ./without.js */ "./node_modules/underscore/modules/without.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "without", function() { return _without_js__WEBPACK_IMPORTED_MODULE_112__["default"]; });

/* harmony import */ var _uniq_js__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! ./uniq.js */ "./node_modules/underscore/modules/uniq.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniq", function() { return _uniq_js__WEBPACK_IMPORTED_MODULE_113__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unique", function() { return _uniq_js__WEBPACK_IMPORTED_MODULE_113__["default"]; });

/* harmony import */ var _union_js__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! ./union.js */ "./node_modules/underscore/modules/union.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "union", function() { return _union_js__WEBPACK_IMPORTED_MODULE_114__["default"]; });

/* harmony import */ var _intersection_js__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! ./intersection.js */ "./node_modules/underscore/modules/intersection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "intersection", function() { return _intersection_js__WEBPACK_IMPORTED_MODULE_115__["default"]; });

/* harmony import */ var _difference_js__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(/*! ./difference.js */ "./node_modules/underscore/modules/difference.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "difference", function() { return _difference_js__WEBPACK_IMPORTED_MODULE_116__["default"]; });

/* harmony import */ var _unzip_js__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(/*! ./unzip.js */ "./node_modules/underscore/modules/unzip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unzip", function() { return _unzip_js__WEBPACK_IMPORTED_MODULE_117__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return _unzip_js__WEBPACK_IMPORTED_MODULE_117__["default"]; });

/* harmony import */ var _zip_js__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(/*! ./zip.js */ "./node_modules/underscore/modules/zip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return _zip_js__WEBPACK_IMPORTED_MODULE_118__["default"]; });

/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(/*! ./object.js */ "./node_modules/underscore/modules/object.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "object", function() { return _object_js__WEBPACK_IMPORTED_MODULE_119__["default"]; });

/* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(/*! ./range.js */ "./node_modules/underscore/modules/range.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _range_js__WEBPACK_IMPORTED_MODULE_120__["default"]; });

/* harmony import */ var _chunk_js__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(/*! ./chunk.js */ "./node_modules/underscore/modules/chunk.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chunk", function() { return _chunk_js__WEBPACK_IMPORTED_MODULE_121__["default"]; });

/* harmony import */ var _mixin_js__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(/*! ./mixin.js */ "./node_modules/underscore/modules/mixin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixin", function() { return _mixin_js__WEBPACK_IMPORTED_MODULE_122__["default"]; });

/* harmony import */ var _underscore_array_methods_js__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(/*! ./underscore-array-methods.js */ "./node_modules/underscore/modules/underscore-array-methods.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _underscore_array_methods_js__WEBPACK_IMPORTED_MODULE_123__["default"]; });

// Named Exports
// =============

//     Underscore.js 1.11.0
//     https://underscorejs.org
//     (c) 2009-2020 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

// Baseline setup.



// Object Functions
// ----------------
// Our most fundamental functions operate on any JavaScript object.
// Most functions in Underscore depend on at least one function in this section.

// A group of functions that check the types of core JavaScript values.
// These are often informally referred to as the "isType" functions.



























// Functions that treat an object as a dictionary of key-value pairs.















// Utility Functions
// -----------------
// A bit of a grab bag: Predicate-generating functions for use with filters and
// loops, string escaping and templating, create random numbers and unique ids,
// and functions that facilitate Underscore's chaining and iteration conventions.


















// Function (ahem) Functions
// -------------------------
// These functions take a function as an argument and return a new function
// as the result. Also known as higher-order functions.















// Finders
// -------
// Functions that extract (the position of) a single element from an object
// or array based on some criterion.









// Collection Functions
// --------------------
// Functions that work on any collection of elements: either an array, or
// an object of key-value pairs.
























// `_.pick` and `_.omit` are actually object functions, but we put
// them here in order to create a more natural reading order in the
// monolithic build as they depend on `_.contains`.



// Array Functions
// ---------------
// Functions that operate on arrays (and array-likes) only, because they’re
// expressed in terms of operations on an ordered list of values.

















// OOP
// ---
// These modules support the "object-oriented" calling style. See also
// `underscore.js` and `index-default.js`.




/***/ }),

/***/ "./node_modules/underscore/modules/indexBy.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/indexBy.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _group_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_group.js */ "./node_modules/underscore/modules/_group.js");


// Indexes the object's values by a criterion, similar to `_.groupBy`, but for
// when you know that your index values will be unique.
/* harmony default export */ __webpack_exports__["default"] = (Object(_group_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(result, value, key) {
  result[key] = value;
}));


/***/ }),

/***/ "./node_modules/underscore/modules/indexOf.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/indexOf.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sortedIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sortedIndex.js */ "./node_modules/underscore/modules/sortedIndex.js");
/* harmony import */ var _findIndex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./findIndex.js */ "./node_modules/underscore/modules/findIndex.js");
/* harmony import */ var _createIndexFinder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_createIndexFinder.js */ "./node_modules/underscore/modules/_createIndexFinder.js");




// Return the position of the first occurrence of an item in an array,
// or -1 if the item is not included in the array.
// If the array is large and already in sort order, pass `true`
// for **isSorted** to use binary search.
/* harmony default export */ __webpack_exports__["default"] = (Object(_createIndexFinder_js__WEBPACK_IMPORTED_MODULE_2__["default"])(1, _findIndex_js__WEBPACK_IMPORTED_MODULE_1__["default"], _sortedIndex_js__WEBPACK_IMPORTED_MODULE_0__["default"]));


/***/ }),

/***/ "./node_modules/underscore/modules/initial.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/initial.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initial; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");


// Returns everything but the last entry of the array. Especially useful on
// the arguments object. Passing **n** will return all the values in
// the array, excluding the last N.
function initial(array, n, guard) {
  return _setup_js__WEBPACK_IMPORTED_MODULE_0__["slice"].call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
}


/***/ }),

/***/ "./node_modules/underscore/modules/intersection.js":
/*!*********************************************************!*\
  !*** ./node_modules/underscore/modules/intersection.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return intersection; });
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getLength.js */ "./node_modules/underscore/modules/_getLength.js");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contains.js */ "./node_modules/underscore/modules/contains.js");



// Produce an array that contains every item shared between all the
// passed-in arrays.
function intersection(array) {
  var result = [];
  var argsLength = arguments.length;
  for (var i = 0, length = Object(_getLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array); i < length; i++) {
    var item = array[i];
    if (Object(_contains_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result, item)) continue;
    var j;
    for (j = 1; j < argsLength; j++) {
      if (!Object(_contains_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arguments[j], item)) break;
    }
    if (j === argsLength) result.push(item);
  }
  return result;
}


/***/ }),

/***/ "./node_modules/underscore/modules/invert.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/invert.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return invert; });
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");


// Invert the keys and values of an object. The values must be serializable.
function invert(obj) {
  var result = {};
  var _keys = Object(_keys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj);
  for (var i = 0, length = _keys.length; i < length; i++) {
    result[obj[_keys[i]]] = _keys[i];
  }
  return result;
}


/***/ }),

/***/ "./node_modules/underscore/modules/invoke.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/invoke.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "./node_modules/underscore/modules/restArguments.js");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/underscore/modules/isFunction.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/underscore/modules/isArray.js");
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map.js */ "./node_modules/underscore/modules/map.js");
/* harmony import */ var _deepGet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_deepGet.js */ "./node_modules/underscore/modules/_deepGet.js");






// Invoke a method (with arguments) on every item in a collection.
/* harmony default export */ __webpack_exports__["default"] = (Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(obj, path, args) {
  var contextPath, func;
  if (Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path)) {
    func = path;
  } else if (Object(_isArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(path)) {
    contextPath = path.slice(0, -1);
    path = path[path.length - 1];
  }
  return Object(_map_js__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, function(context) {
    var method = func;
    if (!method) {
      if (contextPath && contextPath.length) {
        context = Object(_deepGet_js__WEBPACK_IMPORTED_MODULE_4__["default"])(context, contextPath);
      }
      if (context == null) return void 0;
      method = context[path];
    }
    return method == null ? method : method.apply(context, args);
  });
}));


/***/ }),

/***/ "./node_modules/underscore/modules/isArguments.js":
/*!********************************************************!*\
  !*** ./node_modules/underscore/modules/isArguments.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_has.js */ "./node_modules/underscore/modules/_has.js");



var isArguments = Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Arguments');

// Define a fallback version of the method in browsers (ahem, IE < 9), where
// there isn't any inspectable "Arguments" type.
(function() {
  if (!isArguments(arguments)) {
    isArguments = function(obj) {
      return Object(_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'callee');
    };
  }
}());

/* harmony default export */ __webpack_exports__["default"] = (isArguments);


/***/ }),

/***/ "./node_modules/underscore/modules/isArray.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/isArray.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");



// Is a given value an array?
// Delegates to ECMA5's native `Array.isArray`.
/* harmony default export */ __webpack_exports__["default"] = (_setup_js__WEBPACK_IMPORTED_MODULE_0__["nativeIsArray"] || Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_1__["default"])('Array'));


/***/ }),

/***/ "./node_modules/underscore/modules/isArrayBuffer.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/isArrayBuffer.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('ArrayBuffer'));


/***/ }),

/***/ "./node_modules/underscore/modules/isBoolean.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/isBoolean.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isBoolean; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");


// Is a given value a boolean?
function isBoolean(obj) {
  return obj === true || obj === false || _setup_js__WEBPACK_IMPORTED_MODULE_0__["toString"].call(obj) === '[object Boolean]';
}


/***/ }),

/***/ "./node_modules/underscore/modules/isDataView.js":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/modules/isDataView.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('DataView'));


/***/ }),

/***/ "./node_modules/underscore/modules/isDate.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/isDate.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Date'));


/***/ }),

/***/ "./node_modules/underscore/modules/isElement.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/isElement.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isElement; });
// Is a given value a DOM element?
function isElement(obj) {
  return !!(obj && obj.nodeType === 1);
}


/***/ }),

/***/ "./node_modules/underscore/modules/isEmpty.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/isEmpty.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isEmpty; });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/underscore/modules/_isArrayLike.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/underscore/modules/isArray.js");
/* harmony import */ var _isString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isString.js */ "./node_modules/underscore/modules/isString.js");
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isArguments.js */ "./node_modules/underscore/modules/isArguments.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");






// Is a given array, string, or object empty?
// An "empty" object has no enumerable own-properties.
function isEmpty(obj) {
  if (obj == null) return true;
  // Skip the more expensive `toString`-based type checks if `obj` has no
  // `.length`.
  if (Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj) && (Object(_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) || Object(_isString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj) || Object(_isArguments_js__WEBPACK_IMPORTED_MODULE_3__["default"])(obj))) return obj.length === 0;
  return Object(_keys_js__WEBPACK_IMPORTED_MODULE_4__["default"])(obj).length === 0;
}


/***/ }),

/***/ "./node_modules/underscore/modules/isEqual.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/isEqual.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isEqual; });
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ "./node_modules/underscore/modules/underscore.js");
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony import */ var _getByteLength_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getByteLength.js */ "./node_modules/underscore/modules/_getByteLength.js");
/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isTypedArray.js */ "./node_modules/underscore/modules/isTypedArray.js");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/underscore/modules/isFunction.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_has.js */ "./node_modules/underscore/modules/_has.js");








// Internal recursive comparison function for `_.isEqual`.
function eq(a, b, aStack, bStack) {
  // Identical objects are equal. `0 === -0`, but they aren't identical.
  // See the [Harmony `egal` proposal](https://wiki.ecmascript.org/doku.php?id=harmony:egal).
  if (a === b) return a !== 0 || 1 / a === 1 / b;
  // `null` or `undefined` only equal to itself (strict comparison).
  if (a == null || b == null) return false;
  // `NaN`s are equivalent, but non-reflexive.
  if (a !== a) return b !== b;
  // Exhaust primitive checks
  var type = typeof a;
  if (type !== 'function' && type !== 'object' && typeof b != 'object') return false;
  return deepEq(a, b, aStack, bStack);
}

// Internal recursive comparison function for `_.isEqual`.
function deepEq(a, b, aStack, bStack) {
  // Unwrap any wrapped objects.
  if (a instanceof _underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"]) a = a._wrapped;
  if (b instanceof _underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"]) b = b._wrapped;
  // Compare `[[Class]]` names.
  var className = _setup_js__WEBPACK_IMPORTED_MODULE_1__["toString"].call(a);
  if (className !== _setup_js__WEBPACK_IMPORTED_MODULE_1__["toString"].call(b)) return false;
  switch (className) {
    // These types are compared by value.
    case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
    case '[object String]':
      // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
      // equivalent to `new String("5")`.
      return '' + a === '' + b;
    case '[object Number]':
      // `NaN`s are equivalent, but non-reflexive.
      // Object(NaN) is equivalent to NaN.
      if (+a !== +a) return +b !== +b;
      // An `egal` comparison is performed for other numeric values.
      return +a === 0 ? 1 / +a === 1 / b : +a === +b;
    case '[object Date]':
    case '[object Boolean]':
      // Coerce dates and booleans to numeric primitive values. Dates are compared by their
      // millisecond representations. Note that invalid dates with millisecond representations
      // of `NaN` are not equivalent.
      return +a === +b;
    case '[object Symbol]':
      return _setup_js__WEBPACK_IMPORTED_MODULE_1__["SymbolProto"].valueOf.call(a) === _setup_js__WEBPACK_IMPORTED_MODULE_1__["SymbolProto"].valueOf.call(b);
    case '[object ArrayBuffer]':
      // Coerce to `DataView` so we can fall through to the next case.
      return deepEq(new DataView(a), new DataView(b), aStack, bStack);
    case '[object DataView]':
      var byteLength = Object(_getByteLength_js__WEBPACK_IMPORTED_MODULE_2__["default"])(a);
      if (byteLength !== Object(_getByteLength_js__WEBPACK_IMPORTED_MODULE_2__["default"])(b)) {
        return false;
      }
      while (byteLength--) {
        if (a.getUint8(byteLength) !== b.getUint8(byteLength)) {
          return false;
        }
      }
      return true;
  }

  if (Object(_isTypedArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(a)) {
    // Coerce typed arrays to `DataView`.
    return deepEq(new DataView(a.buffer), new DataView(b.buffer), aStack, bStack);
  }

  var areArrays = className === '[object Array]';
  if (!areArrays) {
    if (typeof a != 'object' || typeof b != 'object') return false;

    // Objects with different constructors are not equivalent, but `Object`s or `Array`s
    // from different frames are.
    var aCtor = a.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor && !(Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_4__["default"])(aCtor) && aCtor instanceof aCtor &&
                             Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_4__["default"])(bCtor) && bCtor instanceof bCtor)
                        && ('constructor' in a && 'constructor' in b)) {
      return false;
    }
  }
  // Assume equality for cyclic structures. The algorithm for detecting cyclic
  // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

  // Initializing stack of traversed objects.
  // It's done here since we only need them for objects and arrays comparison.
  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;
  while (length--) {
    // Linear search. Performance is inversely proportional to the number of
    // unique nested structures.
    if (aStack[length] === a) return bStack[length] === b;
  }

  // Add the first object to the stack of traversed objects.
  aStack.push(a);
  bStack.push(b);

  // Recursively compare objects and arrays.
  if (areArrays) {
    // Compare array lengths to determine if a deep comparison is necessary.
    length = a.length;
    if (length !== b.length) return false;
    // Deep compare the contents, ignoring non-numeric properties.
    while (length--) {
      if (!eq(a[length], b[length], aStack, bStack)) return false;
    }
  } else {
    // Deep compare objects.
    var _keys = Object(_keys_js__WEBPACK_IMPORTED_MODULE_5__["default"])(a), key;
    length = _keys.length;
    // Ensure that both objects contain the same number of properties before comparing deep equality.
    if (Object(_keys_js__WEBPACK_IMPORTED_MODULE_5__["default"])(b).length !== length) return false;
    while (length--) {
      // Deep compare each member
      key = _keys[length];
      if (!(Object(_has_js__WEBPACK_IMPORTED_MODULE_6__["default"])(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
    }
  }
  // Remove the first object from the stack of traversed objects.
  aStack.pop();
  bStack.pop();
  return true;
}

// Perform a deep comparison to check if two objects are equal.
function isEqual(a, b) {
  return eq(a, b);
}


/***/ }),

/***/ "./node_modules/underscore/modules/isError.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/isError.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Error'));


/***/ }),

/***/ "./node_modules/underscore/modules/isFinite.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/isFinite.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isFinite; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isSymbol.js */ "./node_modules/underscore/modules/isSymbol.js");



// Is a given object a finite number?
function isFinite(obj) {
  return !Object(_isSymbol_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) && Object(_setup_js__WEBPACK_IMPORTED_MODULE_0__["_isFinite"])(obj) && !isNaN(parseFloat(obj));
}


/***/ }),

/***/ "./node_modules/underscore/modules/isFunction.js":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/modules/isFunction.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");



var isFunction = Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Function');

// Optimize `isFunction` if appropriate. Work around some `typeof` bugs in old
// v8, IE 11 (#1621), Safari 8 (#1929), and PhantomJS (#2236).
var nodelist = _setup_js__WEBPACK_IMPORTED_MODULE_1__["root"].document && _setup_js__WEBPACK_IMPORTED_MODULE_1__["root"].document.childNodes;
if ( true && typeof Int8Array != 'object' && typeof nodelist != 'function') {
  isFunction = function(obj) {
    return typeof obj == 'function' || false;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (isFunction);


/***/ }),

/***/ "./node_modules/underscore/modules/isMap.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/isMap.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Map'));


/***/ }),

/***/ "./node_modules/underscore/modules/isMatch.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/isMatch.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isMatch; });
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");


// Returns whether an object has a given set of `key:value` pairs.
function isMatch(object, attrs) {
  var _keys = Object(_keys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(attrs), length = _keys.length;
  if (object == null) return !length;
  var obj = Object(object);
  for (var i = 0; i < length; i++) {
    var key = _keys[i];
    if (attrs[key] !== obj[key] || !(key in obj)) return false;
  }
  return true;
}


/***/ }),

/***/ "./node_modules/underscore/modules/isNaN.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/isNaN.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isNaN; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony import */ var _isNumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNumber.js */ "./node_modules/underscore/modules/isNumber.js");



// Is the given value `NaN`?
function isNaN(obj) {
  return Object(_isNumber_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) && Object(_setup_js__WEBPACK_IMPORTED_MODULE_0__["_isNaN"])(obj);
}


/***/ }),

/***/ "./node_modules/underscore/modules/isNull.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/isNull.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isNull; });
// Is a given value equal to null?
function isNull(obj) {
  return obj === null;
}


/***/ }),

/***/ "./node_modules/underscore/modules/isNumber.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/isNumber.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Number'));


/***/ }),

/***/ "./node_modules/underscore/modules/isObject.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/isObject.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isObject; });
// Is a given variable an object?
function isObject(obj) {
  var type = typeof obj;
  return type === 'function' || type === 'object' && !!obj;
}


/***/ }),

/***/ "./node_modules/underscore/modules/isRegExp.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/isRegExp.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('RegExp'));


/***/ }),

/***/ "./node_modules/underscore/modules/isSet.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/isSet.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Set'));


/***/ }),

/***/ "./node_modules/underscore/modules/isString.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/isString.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('String'));


/***/ }),

/***/ "./node_modules/underscore/modules/isSymbol.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/isSymbol.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Symbol'));


/***/ }),

/***/ "./node_modules/underscore/modules/isTypedArray.js":
/*!*********************************************************!*\
  !*** ./node_modules/underscore/modules/isTypedArray.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony import */ var _isDataView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isDataView.js */ "./node_modules/underscore/modules/isDataView.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant.js */ "./node_modules/underscore/modules/constant.js");
/* harmony import */ var _isBufferLike_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_isBufferLike.js */ "./node_modules/underscore/modules/_isBufferLike.js");





// Is a given value a typed array?
var typedArrayPattern = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
function isTypedArray(obj) {
  // `ArrayBuffer.isView` is the most future-proof, so use it when available.
  // Otherwise, fall back on the above regular expression.
  return _setup_js__WEBPACK_IMPORTED_MODULE_0__["nativeIsView"] ? (Object(_setup_js__WEBPACK_IMPORTED_MODULE_0__["nativeIsView"])(obj) && !Object(_isDataView_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj)) :
                Object(_isBufferLike_js__WEBPACK_IMPORTED_MODULE_3__["default"])(obj) && typedArrayPattern.test(_setup_js__WEBPACK_IMPORTED_MODULE_0__["toString"].call(obj));
}

/* harmony default export */ __webpack_exports__["default"] = (_setup_js__WEBPACK_IMPORTED_MODULE_0__["supportsArrayBuffer"] ? isTypedArray : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(false));


/***/ }),

/***/ "./node_modules/underscore/modules/isUndefined.js":
/*!********************************************************!*\
  !*** ./node_modules/underscore/modules/isUndefined.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isUndefined; });
// Is a given variable undefined?
function isUndefined(obj) {
  return obj === void 0;
}


/***/ }),

/***/ "./node_modules/underscore/modules/isWeakMap.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/isWeakMap.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('WeakMap'));


/***/ }),

/***/ "./node_modules/underscore/modules/isWeakSet.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/isWeakSet.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_tagTester.js */ "./node_modules/underscore/modules/_tagTester.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__["default"])('WeakSet'));


/***/ }),

/***/ "./node_modules/underscore/modules/iteratee.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/iteratee.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return iteratee; });
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ "./node_modules/underscore/modules/underscore.js");
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseIteratee.js */ "./node_modules/underscore/modules/_baseIteratee.js");



// External wrapper for our callback generator. Users may customize
// `_.iteratee` if they want additional predicate/iteratee shorthand styles.
// This abstraction hides the internal-only `argCount` argument.
function iteratee(value, context) {
  return Object(_baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value, context, Infinity);
}
_underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"].iteratee = iteratee;


/***/ }),

/***/ "./node_modules/underscore/modules/keys.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/keys.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return keys; });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/underscore/modules/isObject.js");
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_has.js */ "./node_modules/underscore/modules/_has.js");
/* harmony import */ var _collectNonEnumProps_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_collectNonEnumProps.js */ "./node_modules/underscore/modules/_collectNonEnumProps.js");





// Retrieve the names of an object's own properties.
// Delegates to **ECMAScript 5**'s native `Object.keys`.
function keys(obj) {
  if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj)) return [];
  if (_setup_js__WEBPACK_IMPORTED_MODULE_1__["nativeKeys"]) return Object(_setup_js__WEBPACK_IMPORTED_MODULE_1__["nativeKeys"])(obj);
  var keys = [];
  for (var key in obj) if (Object(_has_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, key)) keys.push(key);
  // Ahem, IE < 9.
  if (_setup_js__WEBPACK_IMPORTED_MODULE_1__["hasEnumBug"]) Object(_collectNonEnumProps_js__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, keys);
  return keys;
}


/***/ }),

/***/ "./node_modules/underscore/modules/last.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/last.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return last; });
/* harmony import */ var _rest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rest.js */ "./node_modules/underscore/modules/rest.js");


// Get the last element of an array. Passing **n** will return the last N
// values in the array.
function last(array, n, guard) {
  if (array == null || array.length < 1) return n == null || guard ? void 0 : [];
  if (n == null || guard) return array[array.length - 1];
  return Object(_rest_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, Math.max(0, array.length - n));
}


/***/ }),

/***/ "./node_modules/underscore/modules/lastIndexOf.js":
/*!********************************************************!*\
  !*** ./node_modules/underscore/modules/lastIndexOf.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _findLastIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./findLastIndex.js */ "./node_modules/underscore/modules/findLastIndex.js");
/* harmony import */ var _createIndexFinder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_createIndexFinder.js */ "./node_modules/underscore/modules/_createIndexFinder.js");



// Return the position of the last occurrence of an item in an array,
// or -1 if the item is not included in the array.
/* harmony default export */ __webpack_exports__["default"] = (Object(_createIndexFinder_js__WEBPACK_IMPORTED_MODULE_1__["default"])(-1, _findLastIndex_js__WEBPACK_IMPORTED_MODULE_0__["default"]));


/***/ }),

/***/ "./node_modules/underscore/modules/map.js":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/map.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return map; });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/underscore/modules/_isArrayLike.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");




// Return the results of applying the iteratee to each element.
function map(obj, iteratee, context) {
  iteratee = Object(_cb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratee, context);
  var _keys = !Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) && Object(_keys_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj),
      length = (_keys || obj).length,
      results = Array(length);
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    results[index] = iteratee(obj[currentKey], currentKey, obj);
  }
  return results;
}


/***/ }),

/***/ "./node_modules/underscore/modules/mapObject.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/mapObject.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mapObject; });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");



// Returns the results of applying the `iteratee` to each element of `obj`.
// In contrast to `_.map` it returns an object.
function mapObject(obj, iteratee, context) {
  iteratee = Object(_cb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratee, context);
  var _keys = Object(_keys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj),
      length = _keys.length,
      results = {};
  for (var index = 0; index < length; index++) {
    var currentKey = _keys[index];
    results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
  }
  return results;
}


/***/ }),

/***/ "./node_modules/underscore/modules/matcher.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/matcher.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return matcher; });
/* harmony import */ var _extendOwn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extendOwn.js */ "./node_modules/underscore/modules/extendOwn.js");
/* harmony import */ var _isMatch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isMatch.js */ "./node_modules/underscore/modules/isMatch.js");



// Returns a predicate for checking whether an object has a given set of
// `key:value` pairs.
function matcher(attrs) {
  attrs = Object(_extendOwn_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attrs);
  return function(obj) {
    return Object(_isMatch_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, attrs);
  };
}


/***/ }),

/***/ "./node_modules/underscore/modules/max.js":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/max.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return max; });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/underscore/modules/_isArrayLike.js");
/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./values.js */ "./node_modules/underscore/modules/values.js");
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./each.js */ "./node_modules/underscore/modules/each.js");





// Return the maximum element (or element-based computation).
function max(obj, iteratee, context) {
  var result = -Infinity, lastComputed = -Infinity,
      value, computed;
  if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
    obj = Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj) ? obj : Object(_values_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj);
    for (var i = 0, length = obj.length; i < length; i++) {
      value = obj[i];
      if (value != null && value > result) {
        result = value;
      }
    }
  } else {
    iteratee = Object(_cb_js__WEBPACK_IMPORTED_MODULE_2__["default"])(iteratee, context);
    Object(_each_js__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, function(v, index, list) {
      computed = iteratee(v, index, list);
      if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
        result = v;
        lastComputed = computed;
      }
    });
  }
  return result;
}


/***/ }),

/***/ "./node_modules/underscore/modules/memoize.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/memoize.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return memoize; });
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_has.js */ "./node_modules/underscore/modules/_has.js");


// Memoize an expensive function by storing its results.
function memoize(func, hasher) {
  var memoize = function(key) {
    var cache = memoize.cache;
    var address = '' + (hasher ? hasher.apply(this, arguments) : key);
    if (!Object(_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])(cache, address)) cache[address] = func.apply(this, arguments);
    return cache[address];
  };
  memoize.cache = {};
  return memoize;
}


/***/ }),

/***/ "./node_modules/underscore/modules/min.js":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/min.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return min; });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/underscore/modules/_isArrayLike.js");
/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./values.js */ "./node_modules/underscore/modules/values.js");
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./each.js */ "./node_modules/underscore/modules/each.js");





// Return the minimum element (or element-based computation).
function min(obj, iteratee, context) {
  var result = Infinity, lastComputed = Infinity,
      value, computed;
  if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
    obj = Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj) ? obj : Object(_values_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj);
    for (var i = 0, length = obj.length; i < length; i++) {
      value = obj[i];
      if (value != null && value < result) {
        result = value;
      }
    }
  } else {
    iteratee = Object(_cb_js__WEBPACK_IMPORTED_MODULE_2__["default"])(iteratee, context);
    Object(_each_js__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, function(v, index, list) {
      computed = iteratee(v, index, list);
      if (computed < lastComputed || computed === Infinity && result === Infinity) {
        result = v;
        lastComputed = computed;
      }
    });
  }
  return result;
}


/***/ }),

/***/ "./node_modules/underscore/modules/mixin.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/mixin.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mixin; });
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ "./node_modules/underscore/modules/underscore.js");
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./each.js */ "./node_modules/underscore/modules/each.js");
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions.js */ "./node_modules/underscore/modules/functions.js");
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony import */ var _chainResult_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_chainResult.js */ "./node_modules/underscore/modules/_chainResult.js");






// Add your own custom functions to the Underscore object.
function mixin(obj) {
  Object(_each_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_functions_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj), function(name) {
    var func = _underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"][name] = obj[name];
    _underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype[name] = function() {
      var args = [this._wrapped];
      _setup_js__WEBPACK_IMPORTED_MODULE_3__["push"].apply(args, arguments);
      return Object(_chainResult_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, func.apply(_underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"], args));
    };
  });
  return _underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"];
}


/***/ }),

/***/ "./node_modules/underscore/modules/negate.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/negate.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return negate; });
// Returns a negated version of the passed-in predicate.
function negate(predicate) {
  return function() {
    return !predicate.apply(this, arguments);
  };
}


/***/ }),

/***/ "./node_modules/underscore/modules/noop.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/noop.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return noop; });
// Predicate-generating function. Often useful outside of Underscore.
function noop(){}


/***/ }),

/***/ "./node_modules/underscore/modules/now.js":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/now.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// A (possibly faster) way to get the current timestamp as an integer.
/* harmony default export */ __webpack_exports__["default"] = (Date.now || function() {
  return new Date().getTime();
});


/***/ }),

/***/ "./node_modules/underscore/modules/object.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/object.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return object; });
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getLength.js */ "./node_modules/underscore/modules/_getLength.js");


// Converts lists into objects. Pass either a single array of `[key, value]`
// pairs, or two parallel arrays of the same length -- one of keys, and one of
// the corresponding values. Passing by pairs is the reverse of `_.pairs`.
function object(list, values) {
  var result = {};
  for (var i = 0, length = Object(_getLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(list); i < length; i++) {
    if (values) {
      result[list[i]] = values[i];
    } else {
      result[list[i][0]] = list[i][1];
    }
  }
  return result;
}


/***/ }),

/***/ "./node_modules/underscore/modules/omit.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/omit.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "./node_modules/underscore/modules/restArguments.js");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/underscore/modules/isFunction.js");
/* harmony import */ var _negate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./negate.js */ "./node_modules/underscore/modules/negate.js");
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map.js */ "./node_modules/underscore/modules/map.js");
/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_flatten.js */ "./node_modules/underscore/modules/_flatten.js");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contains.js */ "./node_modules/underscore/modules/contains.js");
/* harmony import */ var _pick_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pick.js */ "./node_modules/underscore/modules/pick.js");








// Return a copy of the object without the disallowed properties.
/* harmony default export */ __webpack_exports__["default"] = (Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(obj, keys) {
  var iteratee = keys[0], context;
  if (Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(iteratee)) {
    iteratee = Object(_negate_js__WEBPACK_IMPORTED_MODULE_2__["default"])(iteratee);
    if (keys.length > 1) context = keys[1];
  } else {
    keys = Object(_map_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_flatten_js__WEBPACK_IMPORTED_MODULE_4__["default"])(keys, false, false), String);
    iteratee = function(value, key) {
      return !Object(_contains_js__WEBPACK_IMPORTED_MODULE_5__["default"])(keys, key);
    };
  }
  return Object(_pick_js__WEBPACK_IMPORTED_MODULE_6__["default"])(obj, iteratee, context);
}));


/***/ }),

/***/ "./node_modules/underscore/modules/once.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/once.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _partial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partial.js */ "./node_modules/underscore/modules/partial.js");
/* harmony import */ var _before_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./before.js */ "./node_modules/underscore/modules/before.js");



// Returns a function that will be executed at most one time, no matter how
// often you call it. Useful for lazy initialization.
/* harmony default export */ __webpack_exports__["default"] = (Object(_partial_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_before_js__WEBPACK_IMPORTED_MODULE_1__["default"], 2));


/***/ }),

/***/ "./node_modules/underscore/modules/pairs.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/pairs.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pairs; });
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");


// Convert an object into a list of `[key, value]` pairs.
// The opposite of `_.object` with one argument.
function pairs(obj) {
  var _keys = Object(_keys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj);
  var length = _keys.length;
  var pairs = Array(length);
  for (var i = 0; i < length; i++) {
    pairs[i] = [_keys[i], obj[_keys[i]]];
  }
  return pairs;
}


/***/ }),

/***/ "./node_modules/underscore/modules/partial.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/partial.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "./node_modules/underscore/modules/restArguments.js");
/* harmony import */ var _executeBound_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_executeBound.js */ "./node_modules/underscore/modules/_executeBound.js");
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./underscore.js */ "./node_modules/underscore/modules/underscore.js");




// Partially apply a function by creating a version that has had some of its
// arguments pre-filled, without changing its dynamic `this` context. `_` acts
// as a placeholder by default, allowing any combination of arguments to be
// pre-filled. Set `_.partial.placeholder` for a custom placeholder argument.
var partial = Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(func, boundArgs) {
  var placeholder = partial.placeholder;
  var bound = function() {
    var position = 0, length = boundArgs.length;
    var args = Array(length);
    for (var i = 0; i < length; i++) {
      args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
    }
    while (position < arguments.length) args.push(arguments[position++]);
    return Object(_executeBound_js__WEBPACK_IMPORTED_MODULE_1__["default"])(func, bound, this, this, args);
  };
  return bound;
});

partial.placeholder = _underscore_js__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ __webpack_exports__["default"] = (partial);


/***/ }),

/***/ "./node_modules/underscore/modules/partition.js":
/*!******************************************************!*\
  !*** ./node_modules/underscore/modules/partition.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _group_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_group.js */ "./node_modules/underscore/modules/_group.js");


// Split a collection into two arrays: one whose elements all pass the given
// truth test, and one whose elements all do not pass the truth test.
/* harmony default export */ __webpack_exports__["default"] = (Object(_group_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(result, value, pass) {
  result[pass ? 0 : 1].push(value);
}, true));


/***/ }),

/***/ "./node_modules/underscore/modules/pick.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/pick.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "./node_modules/underscore/modules/restArguments.js");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/underscore/modules/isFunction.js");
/* harmony import */ var _optimizeCb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_optimizeCb.js */ "./node_modules/underscore/modules/_optimizeCb.js");
/* harmony import */ var _allKeys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allKeys.js */ "./node_modules/underscore/modules/allKeys.js");
/* harmony import */ var _keyInObj_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_keyInObj.js */ "./node_modules/underscore/modules/_keyInObj.js");
/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_flatten.js */ "./node_modules/underscore/modules/_flatten.js");







// Return a copy of the object only containing the allowed properties.
/* harmony default export */ __webpack_exports__["default"] = (Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(obj, keys) {
  var result = {}, iteratee = keys[0];
  if (obj == null) return result;
  if (Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(iteratee)) {
    if (keys.length > 1) iteratee = Object(_optimizeCb_js__WEBPACK_IMPORTED_MODULE_2__["default"])(iteratee, keys[1]);
    keys = Object(_allKeys_js__WEBPACK_IMPORTED_MODULE_3__["default"])(obj);
  } else {
    iteratee = _keyInObj_js__WEBPACK_IMPORTED_MODULE_4__["default"];
    keys = Object(_flatten_js__WEBPACK_IMPORTED_MODULE_5__["default"])(keys, false, false);
    obj = Object(obj);
  }
  for (var i = 0, length = keys.length; i < length; i++) {
    var key = keys[i];
    var value = obj[key];
    if (iteratee(value, key, obj)) result[key] = value;
  }
  return result;
}));


/***/ }),

/***/ "./node_modules/underscore/modules/pluck.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/pluck.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pluck; });
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.js */ "./node_modules/underscore/modules/map.js");
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property.js */ "./node_modules/underscore/modules/property.js");



// Convenience version of a common use case of `_.map`: fetching a property.
function pluck(obj, key) {
  return Object(_map_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, Object(_property_js__WEBPACK_IMPORTED_MODULE_1__["default"])(key));
}


/***/ }),

/***/ "./node_modules/underscore/modules/property.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/property.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return property; });
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/underscore/modules/isArray.js");
/* harmony import */ var _shallowProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_shallowProperty.js */ "./node_modules/underscore/modules/_shallowProperty.js");
/* harmony import */ var _deepGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_deepGet.js */ "./node_modules/underscore/modules/_deepGet.js");




// Creates a function that, when passed an object, will traverse that object’s
// properties down the given `path`, specified as an array of keys or indices.
function property(path) {
  if (!Object(_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(path)) {
    return Object(_shallowProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path);
  }
  return function(obj) {
    return Object(_deepGet_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, path);
  };
}


/***/ }),

/***/ "./node_modules/underscore/modules/propertyOf.js":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/modules/propertyOf.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return propertyOf; });
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/underscore/modules/isArray.js");
/* harmony import */ var _deepGet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_deepGet.js */ "./node_modules/underscore/modules/_deepGet.js");



// Generates a function for a given object that returns a given property.
function propertyOf(obj) {
  if (obj == null) {
    return function(){};
  }
  return function(path) {
    return !Object(_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(path) ? obj[path] : Object(_deepGet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, path);
  };
}


/***/ }),

/***/ "./node_modules/underscore/modules/random.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/random.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return random; });
// Return a random integer between `min` and `max` (inclusive).
function random(min, max) {
  if (max == null) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
}


/***/ }),

/***/ "./node_modules/underscore/modules/range.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/range.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return range; });
// Generate an integer Array containing an arithmetic progression. A port of
// the native Python `range()` function. See
// [the Python documentation](https://docs.python.org/library/functions.html#range).
function range(start, stop, step) {
  if (stop == null) {
    stop = start || 0;
    start = 0;
  }
  if (!step) {
    step = stop < start ? -1 : 1;
  }

  var length = Math.max(Math.ceil((stop - start) / step), 0);
  var range = Array(length);

  for (var idx = 0; idx < length; idx++, start += step) {
    range[idx] = start;
  }

  return range;
}


/***/ }),

/***/ "./node_modules/underscore/modules/reduce.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/reduce.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createReduce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createReduce.js */ "./node_modules/underscore/modules/_createReduce.js");


// **Reduce** builds up a single result from a list of values, aka `inject`,
// or `foldl`.
/* harmony default export */ __webpack_exports__["default"] = (Object(_createReduce_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1));


/***/ }),

/***/ "./node_modules/underscore/modules/reduceRight.js":
/*!********************************************************!*\
  !*** ./node_modules/underscore/modules/reduceRight.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createReduce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createReduce.js */ "./node_modules/underscore/modules/_createReduce.js");


// The right-associative version of reduce, also known as `foldr`.
/* harmony default export */ __webpack_exports__["default"] = (Object(_createReduce_js__WEBPACK_IMPORTED_MODULE_0__["default"])(-1));


/***/ }),

/***/ "./node_modules/underscore/modules/reject.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/reject.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reject; });
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.js */ "./node_modules/underscore/modules/filter.js");
/* harmony import */ var _negate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./negate.js */ "./node_modules/underscore/modules/negate.js");
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");




// Return all the elements for which a truth test fails.
function reject(obj, predicate, context) {
  return Object(_filter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, Object(_negate_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_cb_js__WEBPACK_IMPORTED_MODULE_2__["default"])(predicate)), context);
}


/***/ }),

/***/ "./node_modules/underscore/modules/rest.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/rest.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rest; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");


// Returns everything but the first entry of the `array`. Especially useful on
// the `arguments` object. Passing an **n** will return the rest N values in the
// `array`.
function rest(array, n, guard) {
  return _setup_js__WEBPACK_IMPORTED_MODULE_0__["slice"].call(array, n == null || guard ? 1 : n);
}


/***/ }),

/***/ "./node_modules/underscore/modules/restArguments.js":
/*!**********************************************************!*\
  !*** ./node_modules/underscore/modules/restArguments.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return restArguments; });
// Some functions take a variable number of arguments, or a few expected
// arguments at the beginning and then a variable number of values to operate
// on. This helper accumulates all remaining arguments past the function’s
// argument length (or an explicit `startIndex`), into an array that becomes
// the last argument. Similar to ES6’s "rest parameter".
function restArguments(func, startIndex) {
  startIndex = startIndex == null ? func.length - 1 : +startIndex;
  return function() {
    var length = Math.max(arguments.length - startIndex, 0),
        rest = Array(length),
        index = 0;
    for (; index < length; index++) {
      rest[index] = arguments[index + startIndex];
    }
    switch (startIndex) {
      case 0: return func.call(this, rest);
      case 1: return func.call(this, arguments[0], rest);
      case 2: return func.call(this, arguments[0], arguments[1], rest);
    }
    var args = Array(startIndex + 1);
    for (index = 0; index < startIndex; index++) {
      args[index] = arguments[index];
    }
    args[startIndex] = rest;
    return func.apply(this, args);
  };
}


/***/ }),

/***/ "./node_modules/underscore/modules/result.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/result.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return result; });
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/underscore/modules/isArray.js");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/underscore/modules/isFunction.js");



// Traverses the children of `obj` along `path`. If a child is a function, it
// is invoked with its parent as context. Returns the value of the final
// child, or `fallback` if any child is undefined.
function result(obj, path, fallback) {
  if (!Object(_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(path)) path = [path];
  var length = path.length;
  if (!length) {
    return Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(fallback) ? fallback.call(obj) : fallback;
  }
  for (var i = 0; i < length; i++) {
    var prop = obj == null ? void 0 : obj[path[i]];
    if (prop === void 0) {
      prop = fallback;
      i = length; // Ensure we don't continue iterating.
    }
    obj = Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(prop) ? prop.call(obj) : prop;
  }
  return obj;
}


/***/ }),

/***/ "./node_modules/underscore/modules/sample.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/sample.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sample; });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/underscore/modules/_isArrayLike.js");
/* harmony import */ var _clone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clone.js */ "./node_modules/underscore/modules/clone.js");
/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./values.js */ "./node_modules/underscore/modules/values.js");
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_getLength.js */ "./node_modules/underscore/modules/_getLength.js");
/* harmony import */ var _random_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./random.js */ "./node_modules/underscore/modules/random.js");






// Sample **n** random values from a collection using the modern version of the
// [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
// If **n** is not specified, returns a single random element.
// The internal `guard` argument allows it to work with `_.map`.
function sample(obj, n, guard) {
  if (n == null || guard) {
    if (!Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj)) obj = Object(_values_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj);
    return obj[Object(_random_js__WEBPACK_IMPORTED_MODULE_4__["default"])(obj.length - 1)];
  }
  var sample = Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj) ? Object(_clone_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) : Object(_values_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj);
  var length = Object(_getLength_js__WEBPACK_IMPORTED_MODULE_3__["default"])(sample);
  n = Math.max(Math.min(n, length), 0);
  var last = length - 1;
  for (var index = 0; index < n; index++) {
    var rand = Object(_random_js__WEBPACK_IMPORTED_MODULE_4__["default"])(index, last);
    var temp = sample[index];
    sample[index] = sample[rand];
    sample[rand] = temp;
  }
  return sample.slice(0, n);
}


/***/ }),

/***/ "./node_modules/underscore/modules/shuffle.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/shuffle.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shuffle; });
/* harmony import */ var _sample_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sample.js */ "./node_modules/underscore/modules/sample.js");


// Shuffle a collection.
function shuffle(obj) {
  return Object(_sample_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, Infinity);
}


/***/ }),

/***/ "./node_modules/underscore/modules/size.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/size.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return size; });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/underscore/modules/_isArrayLike.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");



// Return the number of elements in a collection.
function size(obj) {
  if (obj == null) return 0;
  return Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj) ? obj.length : Object(_keys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj).length;
}


/***/ }),

/***/ "./node_modules/underscore/modules/some.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/some.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return some; });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/underscore/modules/_isArrayLike.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");




// Determine if at least one element in the object passes a truth test.
function some(obj, predicate, context) {
  predicate = Object(_cb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(predicate, context);
  var _keys = !Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) && Object(_keys_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj),
      length = (_keys || obj).length;
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    if (predicate(obj[currentKey], currentKey, obj)) return true;
  }
  return false;
}


/***/ }),

/***/ "./node_modules/underscore/modules/sortBy.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/sortBy.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sortBy; });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");
/* harmony import */ var _pluck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pluck.js */ "./node_modules/underscore/modules/pluck.js");
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map.js */ "./node_modules/underscore/modules/map.js");




// Sort the object's values by a criterion produced by an iteratee.
function sortBy(obj, iteratee, context) {
  var index = 0;
  iteratee = Object(_cb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratee, context);
  return Object(_pluck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_map_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, function(value, key, list) {
    return {
      value: value,
      index: index++,
      criteria: iteratee(value, key, list)
    };
  }).sort(function(left, right) {
    var a = left.criteria;
    var b = right.criteria;
    if (a !== b) {
      if (a > b || a === void 0) return 1;
      if (a < b || b === void 0) return -1;
    }
    return left.index - right.index;
  }), 'value');
}


/***/ }),

/***/ "./node_modules/underscore/modules/sortedIndex.js":
/*!********************************************************!*\
  !*** ./node_modules/underscore/modules/sortedIndex.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sortedIndex; });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getLength.js */ "./node_modules/underscore/modules/_getLength.js");



// Use a comparator function to figure out the smallest index at which
// an object should be inserted so as to maintain order. Uses binary search.
function sortedIndex(array, obj, iteratee, context) {
  iteratee = Object(_cb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratee, context, 1);
  var value = iteratee(obj);
  var low = 0, high = Object(_getLength_js__WEBPACK_IMPORTED_MODULE_1__["default"])(array);
  while (low < high) {
    var mid = Math.floor((low + high) / 2);
    if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
  }
  return low;
}


/***/ }),

/***/ "./node_modules/underscore/modules/tap.js":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/tap.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tap; });
// Invokes `interceptor` with the `obj` and then returns `obj`.
// The primary purpose of this method is to "tap into" a method chain, in
// order to perform operations on intermediate results within the chain.
function tap(obj, interceptor) {
  interceptor(obj);
  return obj;
}


/***/ }),

/***/ "./node_modules/underscore/modules/template.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/template.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return template; });
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults.js */ "./node_modules/underscore/modules/defaults.js");
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./underscore.js */ "./node_modules/underscore/modules/underscore.js");
/* harmony import */ var _templateSettings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templateSettings.js */ "./node_modules/underscore/modules/templateSettings.js");




// When customizing `_.templateSettings`, if you don't want to define an
// interpolation, evaluation or escaping regex, we need one that is
// guaranteed not to match.
var noMatch = /(.)^/;

// Certain characters need to be escaped so that they can be put into a
// string literal.
var escapes = {
  "'": "'",
  '\\': '\\',
  '\r': 'r',
  '\n': 'n',
  '\u2028': 'u2028',
  '\u2029': 'u2029'
};

var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;

function escapeChar(match) {
  return '\\' + escapes[match];
}

// JavaScript micro-templating, similar to John Resig's implementation.
// Underscore templating handles arbitrary delimiters, preserves whitespace,
// and correctly escapes quotes within interpolated code.
// NB: `oldSettings` only exists for backwards compatibility.
function template(text, settings, oldSettings) {
  if (!settings && oldSettings) settings = oldSettings;
  settings = Object(_defaults_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, _underscore_js__WEBPACK_IMPORTED_MODULE_1__["default"].templateSettings);

  // Combine delimiters into one regular expression via alternation.
  var matcher = RegExp([
    (settings.escape || noMatch).source,
    (settings.interpolate || noMatch).source,
    (settings.evaluate || noMatch).source
  ].join('|') + '|$', 'g');

  // Compile the template source, escaping string literals appropriately.
  var index = 0;
  var source = "__p+='";
  text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
    source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
    index = offset + match.length;

    if (escape) {
      source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
    } else if (interpolate) {
      source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
    } else if (evaluate) {
      source += "';\n" + evaluate + "\n__p+='";
    }

    // Adobe VMs need the match returned to produce the correct offset.
    return match;
  });
  source += "';\n";

  // If a variable is not specified, place data values in local scope.
  if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

  source = "var __t,__p='',__j=Array.prototype.join," +
    "print=function(){__p+=__j.call(arguments,'');};\n" +
    source + 'return __p;\n';

  var render;
  try {
    render = new Function(settings.variable || 'obj', '_', source);
  } catch (e) {
    e.source = source;
    throw e;
  }

  var template = function(data) {
    return render.call(this, data, _underscore_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
  };

  // Provide the compiled source as a convenience for precompilation.
  var argument = settings.variable || 'obj';
  template.source = 'function(' + argument + '){\n' + source + '}';

  return template;
}


/***/ }),

/***/ "./node_modules/underscore/modules/templateSettings.js":
/*!*************************************************************!*\
  !*** ./node_modules/underscore/modules/templateSettings.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ "./node_modules/underscore/modules/underscore.js");


// By default, Underscore uses ERB-style template delimiters. Change the
// following template settings to use alternative delimiters.
/* harmony default export */ __webpack_exports__["default"] = (_underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"].templateSettings = {
  evaluate: /<%([\s\S]+?)%>/g,
  interpolate: /<%=([\s\S]+?)%>/g,
  escape: /<%-([\s\S]+?)%>/g
});


/***/ }),

/***/ "./node_modules/underscore/modules/throttle.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/throttle.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return throttle; });
/* harmony import */ var _now_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./now.js */ "./node_modules/underscore/modules/now.js");


// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.
function throttle(func, wait, options) {
  var timeout, context, args, result;
  var previous = 0;
  if (!options) options = {};

  var later = function() {
    previous = options.leading === false ? 0 : Object(_now_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  var throttled = function() {
    var _now = Object(_now_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    if (!previous && options.leading === false) previous = _now;
    var remaining = wait - (_now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = _now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };

  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  return throttled;
}


/***/ }),

/***/ "./node_modules/underscore/modules/times.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/times.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return times; });
/* harmony import */ var _optimizeCb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_optimizeCb.js */ "./node_modules/underscore/modules/_optimizeCb.js");


// Run a function **n** times.
function times(n, iteratee, context) {
  var accum = Array(Math.max(0, n));
  iteratee = Object(_optimizeCb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratee, context, 1);
  for (var i = 0; i < n; i++) accum[i] = iteratee(i);
  return accum;
}


/***/ }),

/***/ "./node_modules/underscore/modules/toArray.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/toArray.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toArray; });
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/underscore/modules/isArray.js");
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony import */ var _isString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isString.js */ "./node_modules/underscore/modules/isString.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_isArrayLike.js */ "./node_modules/underscore/modules/_isArrayLike.js");
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map.js */ "./node_modules/underscore/modules/map.js");
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./identity.js */ "./node_modules/underscore/modules/identity.js");
/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./values.js */ "./node_modules/underscore/modules/values.js");








// Safely create a real, live array from anything iterable.
var reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
function toArray(obj) {
  if (!obj) return [];
  if (Object(_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj)) return _setup_js__WEBPACK_IMPORTED_MODULE_1__["slice"].call(obj);
  if (Object(_isString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj)) {
    // Keep surrogate pair characters together.
    return obj.match(reStrSymbol);
  }
  if (Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_3__["default"])(obj)) return Object(_map_js__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, _identity_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return Object(_values_js__WEBPACK_IMPORTED_MODULE_6__["default"])(obj);
}


/***/ }),

/***/ "./node_modules/underscore/modules/underscore-array-methods.js":
/*!*********************************************************************!*\
  !*** ./node_modules/underscore/modules/underscore-array-methods.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underscore.js */ "./node_modules/underscore/modules/underscore.js");
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./each.js */ "./node_modules/underscore/modules/each.js");
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");
/* harmony import */ var _chainResult_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_chainResult.js */ "./node_modules/underscore/modules/_chainResult.js");





// Add all mutator `Array` functions to the wrapper.
Object(_each_js__WEBPACK_IMPORTED_MODULE_1__["default"])(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
  var method = _setup_js__WEBPACK_IMPORTED_MODULE_2__["ArrayProto"][name];
  _underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype[name] = function() {
    var obj = this._wrapped;
    if (obj != null) {
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) {
        delete obj[0];
      }
    }
    return Object(_chainResult_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, obj);
  };
});

// Add all accessor `Array` functions to the wrapper.
Object(_each_js__WEBPACK_IMPORTED_MODULE_1__["default"])(['concat', 'join', 'slice'], function(name) {
  var method = _setup_js__WEBPACK_IMPORTED_MODULE_2__["ArrayProto"][name];
  _underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype[name] = function() {
    var obj = this._wrapped;
    if (obj != null) obj = method.apply(obj, arguments);
    return Object(_chainResult_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, obj);
  };
});

/* harmony default export */ __webpack_exports__["default"] = (_underscore_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/underscore/modules/underscore.js":
/*!*******************************************************!*\
  !*** ./node_modules/underscore/modules/underscore.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setup.js */ "./node_modules/underscore/modules/_setup.js");


// If Underscore is called as a function, it returns a wrapped object that can
// be used OO-style. This wrapper holds altered versions of all functions added
// through `_.mixin`. Wrapped objects may be chained.
function _(obj) {
  if (obj instanceof _) return obj;
  if (!(this instanceof _)) return new _(obj);
  this._wrapped = obj;
}

_.VERSION = _setup_js__WEBPACK_IMPORTED_MODULE_0__["VERSION"];

// Extracts the result from a wrapped and chained object.
_.prototype.value = function() {
  return this._wrapped;
};

// Provide unwrapping proxies for some methods used in engine operations
// such as arithmetic and JSON stringification.
_.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

_.prototype.toString = function() {
  return String(this._wrapped);
};


/***/ }),

/***/ "./node_modules/underscore/modules/unescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/unescape.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createEscaper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createEscaper.js */ "./node_modules/underscore/modules/_createEscaper.js");
/* harmony import */ var _unescapeMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_unescapeMap.js */ "./node_modules/underscore/modules/_unescapeMap.js");



// Function for unescaping strings from HTML interpolation.
/* harmony default export */ __webpack_exports__["default"] = (Object(_createEscaper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_unescapeMap_js__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ }),

/***/ "./node_modules/underscore/modules/union.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/union.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "./node_modules/underscore/modules/restArguments.js");
/* harmony import */ var _uniq_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uniq.js */ "./node_modules/underscore/modules/uniq.js");
/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_flatten.js */ "./node_modules/underscore/modules/_flatten.js");




// Produce an array that contains the union: each distinct element from all of
// the passed-in arrays.
/* harmony default export */ __webpack_exports__["default"] = (Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(arrays) {
  return Object(_uniq_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_flatten_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arrays, true, true));
}));


/***/ }),

/***/ "./node_modules/underscore/modules/uniq.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/uniq.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return uniq; });
/* harmony import */ var _isBoolean_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isBoolean.js */ "./node_modules/underscore/modules/isBoolean.js");
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_cb.js */ "./node_modules/underscore/modules/_cb.js");
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getLength.js */ "./node_modules/underscore/modules/_getLength.js");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contains.js */ "./node_modules/underscore/modules/contains.js");





// Produce a duplicate-free version of the array. If the array has already
// been sorted, you have the option of using a faster algorithm.
// The faster algorithm will not work with an iteratee if the iteratee
// is not a one-to-one function, so providing an iteratee will disable
// the faster algorithm.
function uniq(array, isSorted, iteratee, context) {
  if (!Object(_isBoolean_js__WEBPACK_IMPORTED_MODULE_0__["default"])(isSorted)) {
    context = iteratee;
    iteratee = isSorted;
    isSorted = false;
  }
  if (iteratee != null) iteratee = Object(_cb_js__WEBPACK_IMPORTED_MODULE_1__["default"])(iteratee, context);
  var result = [];
  var seen = [];
  for (var i = 0, length = Object(_getLength_js__WEBPACK_IMPORTED_MODULE_2__["default"])(array); i < length; i++) {
    var value = array[i],
        computed = iteratee ? iteratee(value, i, array) : value;
    if (isSorted && !iteratee) {
      if (!i || seen !== computed) result.push(value);
      seen = computed;
    } else if (iteratee) {
      if (!Object(_contains_js__WEBPACK_IMPORTED_MODULE_3__["default"])(seen, computed)) {
        seen.push(computed);
        result.push(value);
      }
    } else if (!Object(_contains_js__WEBPACK_IMPORTED_MODULE_3__["default"])(result, value)) {
      result.push(value);
    }
  }
  return result;
}


/***/ }),

/***/ "./node_modules/underscore/modules/uniqueId.js":
/*!*****************************************************!*\
  !*** ./node_modules/underscore/modules/uniqueId.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return uniqueId; });
// Generate a unique integer id (unique within the entire client session).
// Useful for temporary DOM ids.
var idCounter = 0;
function uniqueId(prefix) {
  var id = ++idCounter + '';
  return prefix ? prefix + id : id;
}


/***/ }),

/***/ "./node_modules/underscore/modules/unzip.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/unzip.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return unzip; });
/* harmony import */ var _max_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./max.js */ "./node_modules/underscore/modules/max.js");
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getLength.js */ "./node_modules/underscore/modules/_getLength.js");
/* harmony import */ var _pluck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pluck.js */ "./node_modules/underscore/modules/pluck.js");




// Complement of zip. Unzip accepts an array of arrays and groups
// each array's elements on shared indices.
function unzip(array) {
  var length = array && Object(_max_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, _getLength_js__WEBPACK_IMPORTED_MODULE_1__["default"]).length || 0;
  var result = Array(length);

  for (var index = 0; index < length; index++) {
    result[index] = Object(_pluck_js__WEBPACK_IMPORTED_MODULE_2__["default"])(array, index);
  }
  return result;
}


/***/ }),

/***/ "./node_modules/underscore/modules/values.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/modules/values.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return values; });
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys.js */ "./node_modules/underscore/modules/keys.js");


// Retrieve the values of an object's properties.
function values(obj) {
  var _keys = Object(_keys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj);
  var length = _keys.length;
  var values = Array(length);
  for (var i = 0; i < length; i++) {
    values[i] = obj[_keys[i]];
  }
  return values;
}


/***/ }),

/***/ "./node_modules/underscore/modules/where.js":
/*!**************************************************!*\
  !*** ./node_modules/underscore/modules/where.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return where; });
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.js */ "./node_modules/underscore/modules/filter.js");
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matcher.js */ "./node_modules/underscore/modules/matcher.js");



// Convenience version of a common use case of `_.filter`: selecting only
// objects containing specific `key:value` pairs.
function where(obj, attrs) {
  return Object(_filter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, Object(_matcher_js__WEBPACK_IMPORTED_MODULE_1__["default"])(attrs));
}


/***/ }),

/***/ "./node_modules/underscore/modules/without.js":
/*!****************************************************!*\
  !*** ./node_modules/underscore/modules/without.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "./node_modules/underscore/modules/restArguments.js");
/* harmony import */ var _difference_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./difference.js */ "./node_modules/underscore/modules/difference.js");



// Return a version of the array that does not contain the specified value(s).
/* harmony default export */ __webpack_exports__["default"] = (Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(array, otherArrays) {
  return Object(_difference_js__WEBPACK_IMPORTED_MODULE_1__["default"])(array, otherArrays);
}));


/***/ }),

/***/ "./node_modules/underscore/modules/wrap.js":
/*!*************************************************!*\
  !*** ./node_modules/underscore/modules/wrap.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return wrap; });
/* harmony import */ var _partial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partial.js */ "./node_modules/underscore/modules/partial.js");


// Returns the first function passed as an argument to the second,
// allowing you to adjust arguments, run code before and after, and
// conditionally execute the original function.
function wrap(func, wrapper) {
  return Object(_partial_js__WEBPACK_IMPORTED_MODULE_0__["default"])(wrapper, func);
}


/***/ }),

/***/ "./node_modules/underscore/modules/zip.js":
/*!************************************************!*\
  !*** ./node_modules/underscore/modules/zip.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restArguments.js */ "./node_modules/underscore/modules/restArguments.js");
/* harmony import */ var _unzip_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unzip.js */ "./node_modules/underscore/modules/unzip.js");



// Zip together multiple lists into a single array -- elements that share
// an index go together.
/* harmony default export */ __webpack_exports__["default"] = (Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_unzip_js__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/script/component/geolocation-filter.jsx":
/*!*****************************************************!*\
  !*** ./src/script/component/geolocation-filter.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Filter = /*#__PURE__*/function (_Component) {
  _inherits(Filter, _Component);

  var _super = _createSuper(Filter);

  /**
   * ------------------------------------------------
   * lifecycle
   * ------------------------------------------------
   */
  function Filter(props) {
    var _this;

    _classCallCheck(this, Filter);

    _this = _super.call(this, props);
    _this.state = {
      active: {},
      active_list: false
    };
    return _this;
  }
  /**
   * ------------------------------------------------
   * rendering
   * ------------------------------------------------
   */


  _createClass(Filter, [{
    key: "renderFilters",
    value: function renderFilters() {
      var elements = [];

      for (var slug in this.props.items) {
        var label = this.props.items[slug];
        elements.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "filter__item ".concat(this.isActive(slug) ? "is-active" : "is-inactive"),
          key: slug,
          onClick: this.onToggleActive.bind(this, slug)
        }, label));
      }

      return elements;
    }
  }, {
    key: "render",
    value: function render() {
      if (Object.keys(this.props.items).length < 1) return null;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "geolocations__filter ".concat(this.state.active_list ? "is-active" : "is-inactive")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "filter__label",
        onClick: this.onToggleList.bind(this)
      }, "Filter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "filter__list"
      }, this.renderFilters()));
    }
    /**
     * ------------------------------------------------
     * events
     * ------------------------------------------------
     */

  }, {
    key: "onToggleList",
    value: function onToggleList() {
      this.setState({
        active_list: !this.state.active_list
      });
    }
  }, {
    key: "onToggleActive",
    value: function onToggleActive(slug) {
      this.state.active[slug] = !this.isActive(slug);
      this.setState({
        active: this.state.active
      });

      if (_typeof(this.props.onToggleActive) !== ( true ? "undefined" : undefined)) {
        this.props.onToggleActive(slug, this.state.active[slug]);
      }
    }
    /**
     * ------------------------------------------------
     * other functions
     * ------------------------------------------------
     */

  }, {
    key: "isActive",
    value: function isActive(slug) {
      if (_typeof(this.state.active[slug]) === ( true ? "undefined" : undefined)) {
        this.state.active[slug] = true;
      }

      return this.state.active[slug];
    }
  }]);

  return Filter;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/**
 * property defaults
 */


Filter.defaultProps = {
  items: {}
};
/**
 * export component to public
 */

/* harmony default export */ __webpack_exports__["default"] = (Filter);

/***/ }),

/***/ "./src/script/component/geolocation-list-item.jsx":
/*!********************************************************!*\
  !*** ./src/script/component/geolocation-list-item.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GeolocationListItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var geo_events = __webpack_require__(/*! ../helper/events.js */ "./src/script/helper/events.js");

var GeolocationListItem = /*#__PURE__*/function (_Component) {
  _inherits(GeolocationListItem, _Component);

  var _super = _createSuper(GeolocationListItem);

  /**
   * ------------------------------------------------
   * lifecycle
   * ------------------------------------------------
   */
  function GeolocationListItem(props) {
    var _this;

    _classCallCheck(this, GeolocationListItem);

    _this = _super.call(this, props);
    _this.state = {
      active: false,
      type_active: true,
      is_visible: true
    };

    if (_typeof(_this.props.events) !== ( true ? "undefined" : undefined) && _this.props.events != null) {
      _this.props.events.addListener(geo_events.MAP_MARKER_CLICKED, _this.onMarkerClicked.bind(_assertThisInitialized(_this)));

      _this.props.events.addListener(geo_events.LIST_ITEM_CLICKED, _this.onAnyItemClicked.bind(_assertThisInitialized(_this)));

      _this.props.events.addListener(geo_events.TYPE_ACTIVE_CHANGE, _this.onTypeActiveChange.bind(_assertThisInitialized(_this)));

      _this.props.events.addListener(geo_events.MAP_MARKER_IS_VISIBLE, _this.onMarkerIsVisible.bind(_assertThisInitialized(_this)));
    }

    return _this;
  }
  /**
   * ------------------------------------------------
   * rendering
   * ------------------------------------------------
   */


  _createClass(GeolocationListItem, [{
    key: "render",
    value: function render() {
      // console.log(this.state);
      if (!this.state.type_active || !this.state.is_visible && !this.state.active) return null;
      var active = this.state.active ? " is-active" : "";
      var _this$props$geolocati = this.props.geolocation,
          mail = _this$props$geolocati.mail,
          url = _this$props$geolocati.url;

      var _mail, _url;

      if (!underscore__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(mail)) {
        _mail = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "mailto:".concat(mail),
          className: "geolocations__mail-link"
        }, mail);
      }

      if (!underscore__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(url)) {
        var http = "";

        if (url.indexOf("http") < 0) {
          http = "http://";
        }

        _url = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "".concat(http).concat(url),
          className: "geolocations__url-link"
        }, url);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "geolocations__item".concat(active),
        onMouseEnter: this.onMouseOver.bind(this),
        onMouseLeave: this.onMouseOut.bind(this),
        onClick: this.onClick.bind(this)
      }, this.renderIf("geolocations__name", this.renderTitle()), this.renderIf("geolocations__function", this.props.geolocation.func), this.renderIf("geolocations__address", this.props.geolocation.address), this.renderIf("geolocations__phone", this.props.geolocation.phone), this.renderIf("geolocations__fax", this.props.geolocation.fax), this.renderIf("geolocations__mail", _mail), this.renderIf("geolocations__url", _url));
    }
  }, {
    key: "renderTitle",
    value: function renderTitle() {
      if (this.state.active && !this.props.is_single) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: this.props.geolocation.permalink
        }, this.props.geolocation.title);
      }

      return this.props.geolocation.title;
    }
  }, {
    key: "renderIf",
    value: function renderIf(classname, value) {
      if (underscore__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(value) || value == "") return null;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classname
      }, value);
    }
    /**
     * ------------------------------------------------
     * events
     * ------------------------------------------------
     */

  }, {
    key: "onTypeActiveChange",
    value: function onTypeActiveChange(slug, isactive) {
      if (slug == this.props.geolocation.type.slug) {
        this.setState({
          type_active: isactive
        });
      }
    }
    /**
     * ------------------------------------------------
     * other functions
     * ------------------------------------------------
     */

  }, {
    key: "onMarkerClicked",
    value: function onMarkerClicked(gloc) {
      var active = false;

      if (gloc.id === this.props.geolocation.id) {
        active = true;
      }

      ;
      this.setState({
        active: active
      });
    }
  }, {
    key: "onAnyItemClicked",
    value: function onAnyItemClicked(gloc) {
      if (gloc.id === this.props.geolocation.id) {
        this.setState({
          active: true
        });
      } else {
        this.setState({
          active: false
        });
      }
    }
  }, {
    key: "onClick",
    value: function onClick() {
      this.emitIf(geo_events.LIST_ITEM_CLICKED);
      this.setState({
        active: true
      });
    }
  }, {
    key: "onMouseOver",
    value: function onMouseOver(e) {
      this.emitIf(geo_events.LIST_ITEM_HOVER, true);
    }
  }, {
    key: "onMouseOut",
    value: function onMouseOut(e) {
      this.emitIf(geo_events.LIST_ITEM_HOVER, false);
    }
  }, {
    key: "emitIf",
    value: function emitIf(event, value) {
      if (_typeof(this.props.events) != ( true ? "undefined" : undefined) && this.props.events != null) {
        this.props.events.emit(event, this.props.geolocation, value);
      }
    }
  }, {
    key: "onMarkerIsVisible",
    value: function onMarkerIsVisible(is_visible, gloc) {
      if (gloc.id == this.props.geolocation.id) {
        this.setState({
          is_visible: is_visible
        });
      }
    }
  }]);

  return GeolocationListItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


GeolocationListItem.defaultProps = {
  is_single: false
};

/***/ }),

/***/ "./src/script/component/geolocation-marker.jsx":
/*!*****************************************************!*\
  !*** ./src/script/component/geolocation-marker.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GeolocationMarker; });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_gmaps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-gmaps */ "./node_modules/react-gmaps/dist/index.js");
/* harmony import */ var react_gmaps__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_gmaps__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helper_events_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/events.js */ "./src/script/helper/events.js");
/* harmony import */ var _helper_events_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_helper_events_js__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var GeolocationMarker = /*#__PURE__*/function (_Marker) {
  _inherits(GeolocationMarker, _Marker);

  var _super = _createSuper(GeolocationMarker);

  /**
   * ------------------------------------------------
   * lifecycle
   * ------------------------------------------------
   */
  function GeolocationMarker(props) {
    var _this;

    _classCallCheck(this, GeolocationMarker);

    _this = _super.call(this, props);
    _this.state = {
      over: _this.props.over,
      scale: 1,
      visible: true
    };
    return _this;
  }

  _createClass(GeolocationMarker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _get(_getPrototypeOf(GeolocationMarker.prototype), "componentDidMount", this).call(this);

      var gloc = this.props.geolocation;
      var marker = this.getEntity();
      var options = this.getOptions(this.props);
      var icon = {
        path: "M39,7.09A24.83,24.83,0,0,0,19.61,47.43h0L38,70.44a1.24,1.24,0,0,0,1.94,0l18.42-23h0A24.83,24.83,0,0,0,39,7.09Z",
        fillColor: "#FF0000",
        fillOpacity: .6,
        strokeColor: '#FF0000',
        strokeWeight: 1,
        strokeOpacity: 1,
        scale: 0.6,
        anchor: {
          x: 40,
          y: 70
        }
      };
      var _icon = gloc.marker_icon;

      if (underscore__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(_icon)) {
        for (var key in _icon) {
          icon[key] = _icon[key];
        }
      }

      marker.setIcon(icon);
      this.props.events.emit(_helper_events_js__WEBPACK_IMPORTED_MODULE_3___default.a.MAP_MARKER_ADDED, marker, gloc);
      this.props.events.addListener(_helper_events_js__WEBPACK_IMPORTED_MODULE_3___default.a.LIST_ITEM_HOVER, this.onHover.bind(this));
      this.props.events.addListener(_helper_events_js__WEBPACK_IMPORTED_MODULE_3___default.a.MAP_CENTER_CHANGED, this.onMapCenterChange.bind(this));
      this.props.events.addListener(_helper_events_js__WEBPACK_IMPORTED_MODULE_3___default.a.TYPE_ACTIVE_CHANGE, this.onActiveChange.bind(this));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _get(_getPrototypeOf(GeolocationMarker.prototype), "componentWillUnmount", this).call(this);

      this.props.events.removeListener(_helper_events_js__WEBPACK_IMPORTED_MODULE_3___default.a.LIST_ITEM_HOVER, this.onHover);
      this.props.events.removeListener(_helper_events_js__WEBPACK_IMPORTED_MODULE_3___default.a.MAP_CENTER_CHANGED, this.onMapCenterChange.bind(this));
      this.props.events.removeListener(_helper_events_js__WEBPACK_IMPORTED_MODULE_3___default.a.TYPE_ACTIVE_CHANGE, this.onActiveChange.bind(this));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var marker = this.getEntity();

      if (this.state.over) {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      } else {
        marker.setAnimation(null);
      }
    }
    /**
     * ------------------------------------------------
     * rendering
     * ------------------------------------------------
     */
    // no rendering needed here because gmaps does the rendering

    /**
     * ------------------------------------------------
     * events
     * ------------------------------------------------
     */

  }, {
    key: "onHover",
    value: function onHover(gloc, over) {
      if (gloc.id != this.props.geolocation.id) return;
      this.setState({
        over: over
      });
    }
  }, {
    key: "onActiveChange",
    value: function onActiveChange(slug, isactive) {
      var _this$props = this.props,
          geolocation = _this$props.geolocation,
          map = _this$props.map;

      if (geolocation.type.slug == slug) {
        console.log("relevant onActiveChange", slug, isactive);

        if (isactive) {
          this.getEntity().setMap(map);
        } else {
          this.getEntity().setMap(null);
        }
      }
    }
  }, {
    key: "onMapCenterChange",
    value: function onMapCenterChange(bounds) {
      var is_visible = bounds.contains(this.getEntity().getPosition());

      if (this.state.visible != is_visible) {
        this.state.visible = is_visible;
        this.props.events.emit(_helper_events_js__WEBPACK_IMPORTED_MODULE_3___default.a.MAP_MARKER_IS_VISIBLE, is_visible, this.props.geolocation);
      }
    }
    /**
     * ------------------------------------------------
     * other functions
     * ------------------------------------------------
     */

  }]);

  return GeolocationMarker;
}(react_gmaps__WEBPACK_IMPORTED_MODULE_2__["Marker"]);


GeolocationMarker.defaultProps = {
  over: false
};

/***/ }),

/***/ "./src/script/component/geolocations-list.jsx":
/*!****************************************************!*\
  !*** ./src/script/component/geolocations-list.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GeolocationsList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_events_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/events.js */ "./src/script/helper/events.js");
/* harmony import */ var _helper_events_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_helper_events_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _geolocation_list_item_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geolocation-list-item.jsx */ "./src/script/component/geolocation-list-item.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var GeolocationsList = /*#__PURE__*/function (_Component) {
  _inherits(GeolocationsList, _Component);

  var _super = _createSuper(GeolocationsList);

  /**
   * ------------------------------------------------
   * lifecycle
   * ------------------------------------------------
   */
  function GeolocationsList(props) {
    var _this;

    _classCallCheck(this, GeolocationsList);

    _this = _super.call(this, props);
    _this.state = {
      maps: null,
      page: 1,
      gloc_active: -1
    };
    _this.types = ['geocode', 'regions', 'cities'];
    _this.max_page = Math.round(_this.props.geolocations.length / _this.props.posts_per_page);

    _this.props.events.addListener(_helper_events_js__WEBPACK_IMPORTED_MODULE_1___default.a.MAP_MARKER_CLICKED, _this.onMarkerClicked.bind(_assertThisInitialized(_this)));

    _this.props.events.addListener(_helper_events_js__WEBPACK_IMPORTED_MODULE_1___default.a.MAP_CLICKED, _this.onMapClicked.bind(_assertThisInitialized(_this)));

    return _this;
  }

  _createClass(GeolocationsList, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
    /**
     * ------------------------------------------------
     * rendering
     * ------------------------------------------------
     */

  }, {
    key: "renderItem",
    value: function renderItem(gloc) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_geolocation_list_item_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: gloc.id,
        geolocation: gloc,
        events: this.props.events
      });
    }
  }, {
    key: "renderPager",
    value: function renderPager() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "geolocations__pager"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "geolocations__pager-prev",
        onClick: this.onChangePage.bind(this, -1)
      }, "\xAB"), this.state.page, " / ", this.max_page, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "geolocations__pager-next",
        onClick: this.onChangePage.bind(this, 1)
      }, "\xBB"));
    }
  }, {
    key: "render",
    value: function render() {
      var types = ['geocode', 'regions', 'cities'];
      /**
       * pager or no pager is the question
       */

      var items = [];
      var start = 0;
      var end = this.props.geolocations.length;
      var pager = null;

      if (this.props.posts_per_page > 0) {
        start = (this.state.page - 1) * this.props.posts_per_page;
        end = start + this.props.posts_per_page;
        if (end >= this.props.geolocations.length) end = this.props.geolocations.length;
        pager = this.renderPager();
      }
      /**
       * get items
       */


      for (var i = start; i < end; i++) {
        var _geolocation = this.props.geolocations[i];

        if (this.state.gloc_active > 0 && this.state.gloc_active === _geolocation.id) {
          items.unshift(this.renderItem(_geolocation));
        } else {
          items.push(this.renderItem(_geolocation));
        }
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "geolocations__list-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "geolocations__list"
      }, items), pager);
    }
    /**
     * ------------------------------------------------
     * events
     * ------------------------------------------------
     */

  }, {
    key: "onMarkerClicked",
    value: function onMarkerClicked(gloc) {
      this.setState({
        gloc_active: gloc.id
      }); // let active = false;
      // if(gloc.id == this.props.geolocation.id){
      // 	active = true;
      // };
      // this.setState({active: active});
    }
  }, {
    key: "onMapClicked",
    value: function onMapClicked(info) {
      this.setState({
        gloc_active: -1
      });
    }
  }, {
    key: "onChangePage",
    value: function onChangePage(diff) {
      this.state.page = this.state.page + diff;
      if (this.state.page < 1) this.state.page = 1;

      if (this.state.page >= this.max_page) {
        this.state.page = this.max_page;
      }

      this.setState({
        page: this.state.page
      });
    }
    /**
     * ------------------------------------------------
     * other functions
     * ------------------------------------------------
     */

  }]);

  return GeolocationsList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


GeolocationsList.defaultProps = {
  posts_per_page: -1
};

/***/ }),

/***/ "./src/script/component/geolocations.jsx":
/*!***********************************************!*\
  !*** ./src/script/component/geolocations.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Geolocations; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_gmaps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-gmaps */ "./node_modules/react-gmaps/dist/index.js");
/* harmony import */ var react_gmaps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_gmaps__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_geosuggest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-geosuggest */ "./node_modules/react-geosuggest/module/Geosuggest.esm.js");
/* harmony import */ var _geolocations_list_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./geolocations-list.jsx */ "./src/script/component/geolocations-list.jsx");
/* harmony import */ var _geolocation_list_item_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./geolocation-list-item.jsx */ "./src/script/component/geolocation-list-item.jsx");
/* harmony import */ var _geolocation_marker_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./geolocation-marker.jsx */ "./src/script/component/geolocation-marker.jsx");
/* harmony import */ var _geolocation_filter_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./geolocation-filter.jsx */ "./src/script/component/geolocation-filter.jsx");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helper_events_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helper/events.js */ "./src/script/helper/events.js");
/* harmony import */ var _helper_events_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_helper_events_js__WEBPACK_IMPORTED_MODULE_8__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


 // https://github.com/ubilabs/react-geosuggest









var Geolocations = /*#__PURE__*/function (_Component) {
  _inherits(Geolocations, _Component);

  var _super = _createSuper(Geolocations);

  /**
   * ------------------------------------------------
   * lifecycle
   * ------------------------------------------------
   */
  function Geolocations(props) {
    var _this;

    _classCallCheck(this, Geolocations);

    _this = _super.call(this, props);
    _this.bounds = new google.maps.LatLngBounds();
    _this.state = {
      types: {},
      types_active: {}
    };

    for (var key in props.geolocations) {
      if (!props.geolocations.hasOwnProperty(key)) continue;
      var type = props.geolocations[key].type;
      if (type.slug !== "") _this.state.types[type.slug] = type.label;
    }
    /**
     * global events
     * @type {EventEmitter}
     */


    _this._events = new events__WEBPACK_IMPORTED_MODULE_7___default.a.EventEmitter();

    _this._events.setMaxListeners(0);

    _this._events.addListener(_helper_events_js__WEBPACK_IMPORTED_MODULE_8___default.a.LIST_ITEM_HOVER, _this.onListItemHover.bind(_assertThisInitialized(_this)));

    _this._events.addListener(_helper_events_js__WEBPACK_IMPORTED_MODULE_8___default.a.LIST_ITEM_CLICKED, _this.onListItemClicked.bind(_assertThisInitialized(_this)));

    _this._events.addListener(_helper_events_js__WEBPACK_IMPORTED_MODULE_8___default.a.PLACES_RESULT, _this.onPlacesResult.bind(_assertThisInitialized(_this)));

    _this._events.addListener(_helper_events_js__WEBPACK_IMPORTED_MODULE_8___default.a.MAP_MARKER_ADDED, _this.onMarkerAdded.bind(_assertThisInitialized(_this))); // hash checks


    _this._hasInitialZoomHash = _typeof(_this.getHashZoom()) !== ( true ? "undefined" : undefined);
    _this._hasInitialCenterHash = _typeof(_this.getHashCenter()) !== ( true ? "undefined" : undefined);
    return _this;
  }
  /**
   * ------------------------------------------------
   * rendering
   * ------------------------------------------------
   */


  _createClass(Geolocations, [{
    key: "renderMarker",
    value: function renderMarker(gloc) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_geolocation_marker_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: gloc.id,
        geolocation: gloc,
        lat: gloc.lat,
        lng: gloc.lng,
        onClick: this.onClickMarker.bind(this, gloc),
        onMouseOver: this.onMouseHoverMarker.bind(this, gloc, true),
        onMouseOut: this.onMouseHoverMarker.bind(this, gloc, false),
        events: this._events
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.geolocations.length < 2) {
        return this.renderSingle();
      }

      return this.renderMulti();
    }
  }, {
    key: "renderSingle",
    value: function renderSingle() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "geolocations is-single-address"
      }, this.renderMaps(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_geolocation_list_item_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
        is_single: true,
        geolocation: this.props.geolocations[0]
      }));
    }
  }, {
    key: "renderMulti",
    value: function renderMulti(markers) {
      var _this$props = this.props,
          hide_list = _this$props.hide_list,
          hide_search = _this$props.hide_search;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "geolocations ".concat(hide_list ? "" : "show-list", " ").concat(hide_search ? "" : "show-search")
      }, this.renderMaps(), this.renderSearch(), this.renderFilter(), this.renderList());
    }
  }, {
    key: "renderMaps",
    value: function renderMaps() {
      var geolocs = this.props.geolocations;
      var markers = [];
      var lats = [];
      var lngs = [];
      var types = {};
      var center_lat = 0;
      var center_lng = 0;

      if (this.props.default_place) {
        var place = this.props.default_place;
        center_lat = place.geometry.location.lat;
        center_lng = place.geometry.location.lng; // TODO: find nearest and add to bounds

        var nearest = null;
        var nearest_distance = -1;

        for (var i = 0; i < geolocs.length; i++) {
          var distance = Geolocations.distance(geolocs[i].lat, geolocs[i].lng, center_lat, center_lng);

          if (nearest_distance < 0 || nearest_distance > distance) {
            nearest = new google.maps.LatLng(geolocs[i].lat, geolocs[i].lng);
            nearest_distance = distance;
          }
        }

        this.bounds = new google.maps.LatLngBounds(place.geometry.bounds.southwest, place.geometry.bounds.northeast);
        this.bounds.extend(nearest);
      } else {
        for (var _i = 0; _i < geolocs.length; _i++) {
          this.bounds.extend(new google.maps.LatLng(geolocs[_i].lat, geolocs[_i].lng));
          lats.push(geolocs[_i].lat);
          lngs.push(geolocs[_i].lng);
        }

        center_lat = (Math.max.apply(Math, lats) + Math.min.apply(Math, lats)) / 2;
        center_lng = (Math.max.apply(Math, lngs) + Math.min.apply(Math, lngs)) / 2;
      }

      if (this._hasInitialCenterHash) {
        center_lat = this.getHashCenter().lat;
        center_lng = this.getHashCenter().lng;
      }

      var zoom = 12;
      if (this._hasInitialZoomHash) zoom = parseInt(this.getHashZoom());

      for (var _i2 = 0; _i2 < geolocs.length; _i2++) {
        markers.push(this.renderMarker(geolocs[_i2]));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_gmaps__WEBPACK_IMPORTED_MODULE_1__["Gmaps"], {
        className: "geolocations__map",
        lat: center_lat,
        lng: center_lng,
        zoom: zoom,
        params: {
          v: '3.exp',
          key: this.props.apikey
        },
        styles: this.props.styles,
        onMapCreated: this.onMapCreated.bind(this),
        onCenterChanged: this.onMapCenterChanged.bind(this),
        onZoomChanged: this.onMapZoomChanged.bind(this),
        onClick: this.onMapClick.bind(this),
        onSearch: true
      }, markers);
    }
  }, {
    key: "renderSearch",
    value: function renderSearch() {
      var _this2 = this;

      var geosuggest = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_geosuggest__WEBPACK_IMPORTED_MODULE_2__["default"], {
        ref: function ref(el) {
          return _this2._geoSuggest = el;
        },
        placeholder: "Suche in der N\xE4he",
        country: "de",
        initialValue: this.props.default_place ? this.props.default_place.formatted_address : "",
        onSuggestSelect: this.onSuggestSelect.bind(this),
        onChange: function onChange(value) {//this.setHashSearch(value)
        }
      }); // geosuggest.update("33601");

      return this.renderIf(!this.props.hide_search, geosuggest);
    }
  }, {
    key: "renderList",
    value: function renderList() {
      return this.renderIf(!this.props.hide_list, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_geolocations_list_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        geolocations: this.props.geolocations,
        events: this._events
      }));
    }
  }, {
    key: "renderFilter",
    value: function renderFilter() {
      return this.renderIf(!this.props.hide_filter && Object.keys(this.state.types).length > 0, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_geolocation_filter_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
        items: this.state.types,
        onToggleActive: this.onToggleTypeActive.bind(this)
      }));
    }
  }, {
    key: "renderIf",
    value: function renderIf(render, element) {
      return render ? element : null;
    }
    /**
     * ------------------------------------------------
     * events
     * ------------------------------------------------
     */

  }, {
    key: "onMapCreated",
    value: function onMapCreated(map) {
      this.map = map;

      if (!this._hasInitialCenterHash) {
        map.fitBounds(this.bounds);
      }

      map.setOptions({
        disableDefaultUI: false,
        mapTypeControl: false
      });

      this._events.emit(_helper_events_js__WEBPACK_IMPORTED_MODULE_8___default.a.MAPS_READY, map);

      var props = this.props;
      var listener = google.maps.event.addListener(map, "idle", function () {
        if (map.getZoom() > props.min_zoom) map.setZoom(props.min_zoom);
        google.maps.event.removeListener(listener);
      });
      this.onMapCenterChanged();
      this.onRestoreState();
    }
  }, {
    key: "onRestoreState",
    value: function onRestoreState() {
      var id = this.getHashId();

      if (id) {
        var result = this.props.geolocations.find(function (geoloc) {
          return geoloc.id === parseInt(id);
        });

        if (result) {
          //this._geoSuggest.update("Osnabrück");
          // this._geoSuggest.selectSuggest();
          // this._events.emit(geo_events.LIST_ITEM_CLICKED, result);
          this._events.emit(_helper_events_js__WEBPACK_IMPORTED_MODULE_8___default.a.MAP_MARKER_CLICKED, result);
        }
      }
    }
  }, {
    key: "onMarkerAdded",
    value: function onMarkerAdded(marker, gloc) {// this.bounds.extend(marker);
      // this.map.fitBounds(this.bounds);
    }
  }, {
    key: "onMapCenterChanged",
    value: function onMapCenterChanged() {
      var _this3 = this;

      // prevent too many events with timeout
      clearTimeout(this._center_change_timeout);
      this._center_change_timeout = setTimeout(function () {
        if (_this3.map != null && _this3.map.getBounds() != null) {
          _this3._events.emit(_helper_events_js__WEBPACK_IMPORTED_MODULE_8___default.a.MAP_CENTER_CHANGED, _this3.map.getBounds());

          _this3.setHashValue("zoom", _this3.map.zoom);

          _this3.setHashCenter(_this3.map.center.lat(), _this3.map.center.lng());
        }
      }, 600);
    }
  }, {
    key: "onMapZoomChanged",
    value: function onMapZoomChanged() {
      this.onMapCenterChanged();
      this.setHashValue("zoom", this.map.zoom);
    }
  }, {
    key: "onMapClick",
    value: function onMapClick(info) {
      this._events.emit(_helper_events_js__WEBPACK_IMPORTED_MODULE_8___default.a.MAP_CLICKED, info);
    }
  }, {
    key: "onClickMarker",
    value: function onClickMarker(gloc) {
      this._events.emit(_helper_events_js__WEBPACK_IMPORTED_MODULE_8___default.a.MAP_MARKER_CLICKED, gloc);

      this.setHashId(gloc.id);
    }
  }, {
    key: "onMouseHoverMarker",
    value: function onMouseHoverMarker(gloc, over) {
      this._events.emit(_helper_events_js__WEBPACK_IMPORTED_MODULE_8___default.a.MAP_MARKER_HOVER, gloc, over);
    }
  }, {
    key: "onGotoLocation",
    value: function onGotoLocation(location) {
      var latLng = this.getLatLng(location);
      if (latLng !== false) this.map.panTo(new google.maps.LatLng(latLng));
    }
  }, {
    key: "onListItemHover",
    value: function onListItemHover(location) {// this.map.panTo(new google.maps.LatLng({lat: location.lat, lng: location.lng}));
    }
  }, {
    key: "onListItemClicked",
    value: function onListItemClicked(geoloc) {
      if (this.map.getZoom() < 12) {
        this.map.setZoom(12);
      }

      var latLng = this.getLatLng(geoloc);
      if (latLng !== false) this.map.panTo(new google.maps.LatLng(latLng));
      this.setHashId(geoloc.id);
    }
  }, {
    key: "onPlacesResult",
    value: function onPlacesResult(suggest) {
      var location = suggest.location;
      var bounds = suggest.gmaps.geometry.bounds; // this.map.panToBounds(bounds); NO ZOOMING

      if (bounds) {
        this.map.fitBounds(bounds);
      } else {
        if (this.map.getZoom() < 12) {
          this.map.setZoom(12);
        }

        var latLng = this.getLatLng(location);
        if (latLng !== false) this.map.panTo(new google.maps.LatLng(latLng));
      }
    }
  }, {
    key: "onSuggestSelect",
    value: function onSuggestSelect(suggest) {
      this._events.emit(_helper_events_js__WEBPACK_IMPORTED_MODULE_8___default.a.PLACES_RESULT, suggest);
    }
  }, {
    key: "onToggleTypeActive",
    value: function onToggleTypeActive(slug, isactive) {
      this._events.emit(_helper_events_js__WEBPACK_IMPORTED_MODULE_8___default.a.TYPE_ACTIVE_CHANGE, slug, isactive);
    }
    /**
     * ------------------------------------------------
     * other functions
     * ------------------------------------------------
     */

  }, {
    key: "getLatLng",
    value: function getLatLng(geoloc) {
      var lat = parseFloat(geoloc.lat);
      if (lat + "" !== geoloc.lat) return false;
      var lng = parseFloat(geoloc.lng);
      if (lng + "" !== geoloc.lng) return false;
      return {
        lat: lat,
        lng: lng
      };
    }
  }, {
    key: "setHashId",

    /**
     * ------------------------------------------------
     * url hash functions
     * ------------------------------------------------
     */
    value: function setHashId(value) {
      this.setHashValue("id", value);
    }
  }, {
    key: "getHashId",
    value: function getHashId() {
      return this.getHashValue("id");
    }
  }, {
    key: "setHashCenter",
    value: function setHashCenter(lat, lng) {
      this.setHashValue("lat", lat);
      this.setHashValue("lng", lng);
    }
  }, {
    key: "getHashCenter",
    value: function getHashCenter() {
      var _this$getHashValues = this.getHashValues(),
          lat = _this$getHashValues.lat,
          lng = _this$getHashValues.lng;

      return _typeof(lat) === ( true ? "undefined" : undefined) || _typeof(lng) === ( true ? "undefined" : undefined) ? undefined : {
        lat: lat,
        lng: lng
      };
    }
  }, {
    key: "setHashZoom",
    value: function setHashZoom(zoom) {
      this.setHashValue("zoom", zoom);
    }
  }, {
    key: "getHashZoom",
    value: function getHashZoom() {
      return this.getHashValue("zoom");
    }
  }, {
    key: "setHashSearch",
    value: function setHashSearch(value) {
      this.setHashValue("s", value);
    }
  }, {
    key: "getHashSearch",
    value: function getHashSearch() {
      return this.getHashValue("s");
    }
  }, {
    key: "getHashValues",
    value: function getHashValues() {
      var hash = window.location.hash;
      if (hash.indexOf("#") !== 0 || hash.length < 2) return {};
      var params = hash.substr(1);
      if (params.indexOf("=") < 1) return {};
      var items = hash.substr(1).split("&").map(function (pair) {
        return pair.split("=");
      });
      var object = {};
      items.forEach(function (item) {
        if (_typeof(item[0]) !== ( true ? "undefined" : undefined) && item[0].length > 0 && _typeof(item[1]) !== ( true ? "undefined" : undefined) && item[1].length > 0) {
          object[item[0]] = item[1];
        }
      });
      return object;
    }
  }, {
    key: "getHashValue",
    value: function getHashValue(key) {
      return this.getHashValues()[key];
    }
  }, {
    key: "setHashValues",
    value: function setHashValues(obj) {
      var state = "";

      if (Object.keys(obj).length > 0) {
        state = "#" + Object.keys(obj).map(function (key) {
          return key + "=" + obj[key];
        }).join("&");
      }

      history.replaceState(undefined, undefined, state);
    }
  }, {
    key: "setHashValue",
    value: function setHashValue(key, value) {
      var values = this.getHashValues();
      values[key] = value;
      var state = "";

      if (Object.keys(values).length > 0) {
        state = "#" + Object.keys(values).filter(function (key) {
          return _typeof(values[key]) !== ( true ? "undefined" : undefined) && values[key] !== "";
        }).map(function (key) {
          return key + "=" + values[key];
        }).join("&");
      }

      history.replaceState(undefined, undefined, state);
    }
  }], [{
    key: "distance",
    value: function distance(lat1, lng1, lat2, lng2) {
      var diff_lat = Math.abs(lat1 - lat2);
      var diff_lng = Math.abs(lng1 - lng2);
      return Math.sqrt(diff_lat * diff_lat + diff_lng * diff_lng);
    }
  }]);

  return Geolocations;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


Geolocations.defaultProps = {
  geolocations: [],
  default_place: null,
  min_zoom: 15,
  hide_list: false,
  hide_search: false,
  hide_filter: false
};

/***/ }),

/***/ "./src/script/frontend.js":
/*!********************************!*\
  !*** ./src/script/frontend.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helper_map_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper/map-styles.js */ "./src/script/helper/map-styles.js");
/* harmony import */ var _helper_map_styles_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_helper_map_styles_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_geolocations_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/geolocations.jsx */ "./src/script/component/geolocations.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





var apps = window.geolocations_data;
var places = window.geolocation_places;
var default_place = null;

if (_typeof(places) !== ( true ? "undefined" : undefined) && places != null && places.length > 0) {
  console.log("found places");
  default_place = places[0];
}

for (var index in apps) {
  if (!apps.hasOwnProperty(index)) continue;
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_geolocations_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    zip: "33602",
    geolocations: apps[index].data,
    default_place: default_place,
    hide_list: apps[index].hide_list,
    hide_search: apps[index].hide_search,
    hide_filter: apps[index].hide_filter,
    styles: _helper_map_styles_js__WEBPACK_IMPORTED_MODULE_2___default.a,
    apikey: Geolocations.api_key
  }), document.getElementById("geolocations__root-" + index));
  document.getElementById("gelocations-posts-list-" + index).style.display = 'none';
}

/***/ }),

/***/ "./src/script/helper/events.js":
/*!*************************************!*\
  !*** ./src/script/helper/events.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  MAPS_READY: "maps_ready",
  GOTO_LOCATION: "goto_location",
  MAP_CLICKED: "map_clicked",
  LIST_ITEM_CLICKED: "list_item_click",
  LIST_ITEM_HOVER: "list_item_over",
  MAP_MARKER_CLICKED: "map_marker_clicked",
  MAP_MARKER_HOVER: "map_marker_over",
  MAP_MARKER_ADDED: "map_marker_added",
  MAP_MARKER_IS_VISIBLE: "map_marker_is_visible",
  MAP_CENTER_CHANGED: "map_center_changed",
  PLACES_RESULT: "places_result",
  TYPE_ACTIVE_CHANGE: "type_active_change"
};

/***/ }),

/***/ "./src/script/helper/map-styles.js":
/*!*****************************************!*\
  !*** ./src/script/helper/map-styles.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://snazzymaps.com/style/25/blue-water
module.exports = [{
  "featureType": "road",
  "elementType": "geometry",
  "stylers": [{
    "lightness": 100
  }, {
    "visibility": "simplified"
  }]
}, {
  "featureType": "water",
  "elementType": "geometry",
  "stylers": [{
    "visibility": "on"
  }, {
    "color": "#C6E2FF"
  }]
}, {
  "featureType": "poi",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "#C5E3BF"
  }]
}, {
  "featureType": "road",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "#D1D1B8"
  }]
}];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyZWF0ZS1yZWFjdC1jbGFzcy9mYWN0b3J5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcmVhdGUtcmVhY3QtY2xhc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5T2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9pbnZhcmlhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL3dhcm5pbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC5kZWJvdW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcXVlcnlzdHJpbmctZXMzL2RlY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcXVlcnlzdHJpbmctZXMzL2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcXVlcnlzdHJpbmctZXMzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1nZW9zdWdnZXN0L21vZHVsZS9HZW9zdWdnZXN0LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZ21hcHMvZGlzdC9jb21wb25lbnRzL2NpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZ21hcHMvZGlzdC9jb21wb25lbnRzL2VudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZ21hcHMvZGlzdC9jb21wb25lbnRzL2dtYXBzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1nbWFwcy9kaXN0L2NvbXBvbmVudHMvaW5mby13aW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWdtYXBzL2Rpc3QvY29tcG9uZW50cy9tYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWdtYXBzL2Rpc3QvY29tcG9uZW50cy9wb2x5Z29uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1nbWFwcy9kaXN0L2NvbXBvbmVudHMvcG9seWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWdtYXBzL2Rpc3QvZXZlbnRzL2NpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZ21hcHMvZGlzdC9ldmVudHMvaW5mby13aW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWdtYXBzL2Rpc3QvZXZlbnRzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZ21hcHMvZGlzdC9ldmVudHMvbWFya2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1nbWFwcy9kaXN0L2V2ZW50cy9wb2x5Z29uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1nbWFwcy9kaXN0L2V2ZW50cy9wb2x5bGluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZ21hcHMvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZ21hcHMvZGlzdC9taXhpbnMvbGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWdtYXBzL2Rpc3QvdXRpbHMvY29tcGFyZS1wcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZ21hcHMvZGlzdC91dGlscy9nb29nbGUtbWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL19iYXNlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvX2Jhc2VJdGVyYXRlZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL19jYi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL19jaGFpblJlc3VsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL19jb2xsZWN0Tm9uRW51bVByb3BzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvX2NyZWF0ZUFzc2lnbmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvX2NyZWF0ZUVzY2FwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9fY3JlYXRlSW5kZXhGaW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9fY3JlYXRlUHJlZGljYXRlSW5kZXhGaW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9fY3JlYXRlUmVkdWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvX2NyZWF0ZVNpemVQcm9wZXJ0eUNoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvX2RlZXBHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9fZXNjYXBlTWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvX2V4ZWN1dGVCb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL19mbGF0dGVuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvX2dldEJ5dGVMZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9fZ2V0TGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvX2dyb3VwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL19pc0FycmF5TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL19pc0J1ZmZlckxpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9fa2V5SW5PYmouanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9fb3B0aW1pemVDYi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL19zZXR1cC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL19zaGFsbG93UHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9fdGFnVGVzdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvX3VuZXNjYXBlTWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvYWZ0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9hbGxLZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvYmVmb3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvYmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2JpbmRBbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9jaGFpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2NodW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvY2xvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9jb21wYWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvY29tcG9zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2NvbnN0YW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9jb3VudEJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2RlZmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvZGVsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9kaWZmZXJlbmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2VzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2V2ZXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvZXh0ZW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvZXh0ZW5kT3duLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvZmlsdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvZmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2ZpbmRJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2ZpbmRLZXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9maW5kTGFzdEluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvZmluZFdoZXJlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvZmlyc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9mbGF0dGVuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvZ3JvdXBCeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2lkZW50aXR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaW5kZXgtYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaW5kZXgtZGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaW5kZXhCeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2luZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9pbml0aWFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaW52ZXJ0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaW52b2tlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaXNBcnJheUJ1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2lzQm9vbGVhbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2lzRGF0YVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9pc0RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9pc0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9pc0VtcHR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaXNFcXVhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2lzRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9pc0Zpbml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9pc01hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2lzTWF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9pc05hTi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2lzTnVsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2lzTnVtYmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9pc1JlZ0V4cC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2lzU2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaXNTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2lzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2lzVW5kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaXNXZWFrTWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaXNXZWFrU2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvaXRlcmF0ZWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvbGFzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL2xhc3RJbmRleE9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvbWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvbWFwT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL21heC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL21lbW9pemUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL25lZ2F0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL25vb3AuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9ub3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9vbWl0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvb25jZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3BhaXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvcGFydGlhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3BhcnRpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3BpY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9wbHVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3Byb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvcHJvcGVydHlPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3JhbmRvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3JhbmdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvcmVkdWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvcmVkdWNlUmlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9yZWplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9yZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvcmVzdEFyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3Jlc3VsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3NhbXBsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3NodWZmbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy9zaXplLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvc29tZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3NvcnRCeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3NvcnRlZEluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvdGFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvdGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy90ZW1wbGF0ZVNldHRpbmdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvdGhyb3R0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy90aW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3RvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy91bmRlcnNjb3JlLWFycmF5LW1ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy91bmRlcnNjb3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvdW5lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy91bmlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3VuaXEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy91bmlxdWVJZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3VuemlwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvdmFsdWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvd2hlcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvbW9kdWxlcy93aXRob3V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL21vZHVsZXMvd3JhcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kZXJzY29yZS9tb2R1bGVzL3ppcC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvY29tcG9uZW50L2dlb2xvY2F0aW9uLWZpbHRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9jb21wb25lbnQvZ2VvbG9jYXRpb24tbGlzdC1pdGVtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L2NvbXBvbmVudC9nZW9sb2NhdGlvbi1tYXJrZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvY29tcG9uZW50L2dlb2xvY2F0aW9ucy1saXN0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L2NvbXBvbmVudC9nZW9sb2NhdGlvbnMuanN4Iiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvZnJvbnRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9oZWxwZXIvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvaGVscGVyL21hcC1zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIl0sIm5hbWVzIjpbIkZpbHRlciIsInByb3BzIiwic3RhdGUiLCJhY3RpdmUiLCJhY3RpdmVfbGlzdCIsImVsZW1lbnRzIiwic2x1ZyIsIml0ZW1zIiwibGFiZWwiLCJwdXNoIiwiaXNBY3RpdmUiLCJvblRvZ2dsZUFjdGl2ZSIsImJpbmQiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwib25Ub2dnbGVMaXN0IiwicmVuZGVyRmlsdGVycyIsInNldFN0YXRlIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiZ2VvX2V2ZW50cyIsInJlcXVpcmUiLCJHZW9sb2NhdGlvbkxpc3RJdGVtIiwidHlwZV9hY3RpdmUiLCJpc192aXNpYmxlIiwiZXZlbnRzIiwiYWRkTGlzdGVuZXIiLCJNQVBfTUFSS0VSX0NMSUNLRUQiLCJvbk1hcmtlckNsaWNrZWQiLCJMSVNUX0lURU1fQ0xJQ0tFRCIsIm9uQW55SXRlbUNsaWNrZWQiLCJUWVBFX0FDVElWRV9DSEFOR0UiLCJvblR5cGVBY3RpdmVDaGFuZ2UiLCJNQVBfTUFSS0VSX0lTX1ZJU0lCTEUiLCJvbk1hcmtlcklzVmlzaWJsZSIsImdlb2xvY2F0aW9uIiwibWFpbCIsInVybCIsIl9tYWlsIiwiX3VybCIsIl8iLCJpc1VuZGVmaW5lZCIsImh0dHAiLCJpbmRleE9mIiwib25Nb3VzZU92ZXIiLCJvbk1vdXNlT3V0Iiwib25DbGljayIsInJlbmRlcklmIiwicmVuZGVyVGl0bGUiLCJmdW5jIiwiYWRkcmVzcyIsInBob25lIiwiZmF4IiwiaXNfc2luZ2xlIiwicGVybWFsaW5rIiwidGl0bGUiLCJjbGFzc25hbWUiLCJ2YWx1ZSIsImlzYWN0aXZlIiwidHlwZSIsImdsb2MiLCJpZCIsImVtaXRJZiIsImUiLCJMSVNUX0lURU1fSE9WRVIiLCJldmVudCIsImVtaXQiLCJHZW9sb2NhdGlvbk1hcmtlciIsIm92ZXIiLCJzY2FsZSIsInZpc2libGUiLCJtYXJrZXIiLCJnZXRFbnRpdHkiLCJvcHRpb25zIiwiZ2V0T3B0aW9ucyIsImljb24iLCJwYXRoIiwiZmlsbENvbG9yIiwiZmlsbE9wYWNpdHkiLCJzdHJva2VDb2xvciIsInN0cm9rZVdlaWdodCIsInN0cm9rZU9wYWNpdHkiLCJhbmNob3IiLCJ4IiwieSIsIl9pY29uIiwibWFya2VyX2ljb24iLCJpc09iamVjdCIsImtleSIsInNldEljb24iLCJNQVBfTUFSS0VSX0FEREVEIiwib25Ib3ZlciIsIk1BUF9DRU5URVJfQ0hBTkdFRCIsIm9uTWFwQ2VudGVyQ2hhbmdlIiwib25BY3RpdmVDaGFuZ2UiLCJyZW1vdmVMaXN0ZW5lciIsInNldEFuaW1hdGlvbiIsImdvb2dsZSIsIm1hcHMiLCJBbmltYXRpb24iLCJCT1VOQ0UiLCJtYXAiLCJjb25zb2xlIiwibG9nIiwic2V0TWFwIiwiYm91bmRzIiwiY29udGFpbnMiLCJnZXRQb3NpdGlvbiIsIk1hcmtlciIsIkdlb2xvY2F0aW9uc0xpc3QiLCJwYWdlIiwiZ2xvY19hY3RpdmUiLCJ0eXBlcyIsIm1heF9wYWdlIiwiTWF0aCIsInJvdW5kIiwiZ2VvbG9jYXRpb25zIiwicG9zdHNfcGVyX3BhZ2UiLCJNQVBfQ0xJQ0tFRCIsIm9uTWFwQ2xpY2tlZCIsIm9uQ2hhbmdlUGFnZSIsInN0YXJ0IiwiZW5kIiwicGFnZXIiLCJyZW5kZXJQYWdlciIsImkiLCJfZ2VvbG9jYXRpb24iLCJ1bnNoaWZ0IiwicmVuZGVySXRlbSIsImluZm8iLCJkaWZmIiwiR2VvbG9jYXRpb25zIiwiTGF0TG5nQm91bmRzIiwidHlwZXNfYWN0aXZlIiwiaGFzT3duUHJvcGVydHkiLCJfZXZlbnRzIiwiRXZlbnRzIiwiRXZlbnRFbWl0dGVyIiwic2V0TWF4TGlzdGVuZXJzIiwib25MaXN0SXRlbUhvdmVyIiwib25MaXN0SXRlbUNsaWNrZWQiLCJQTEFDRVNfUkVTVUxUIiwib25QbGFjZXNSZXN1bHQiLCJvbk1hcmtlckFkZGVkIiwiX2hhc0luaXRpYWxab29tSGFzaCIsImdldEhhc2hab29tIiwiX2hhc0luaXRpYWxDZW50ZXJIYXNoIiwiZ2V0SGFzaENlbnRlciIsImxhdCIsImxuZyIsIm9uQ2xpY2tNYXJrZXIiLCJvbk1vdXNlSG92ZXJNYXJrZXIiLCJyZW5kZXJTaW5nbGUiLCJyZW5kZXJNdWx0aSIsInJlbmRlck1hcHMiLCJtYXJrZXJzIiwiaGlkZV9saXN0IiwiaGlkZV9zZWFyY2giLCJyZW5kZXJTZWFyY2giLCJyZW5kZXJGaWx0ZXIiLCJyZW5kZXJMaXN0IiwiZ2VvbG9jcyIsImxhdHMiLCJsbmdzIiwiY2VudGVyX2xhdCIsImNlbnRlcl9sbmciLCJkZWZhdWx0X3BsYWNlIiwicGxhY2UiLCJnZW9tZXRyeSIsImxvY2F0aW9uIiwibmVhcmVzdCIsIm5lYXJlc3RfZGlzdGFuY2UiLCJkaXN0YW5jZSIsIkxhdExuZyIsInNvdXRod2VzdCIsIm5vcnRoZWFzdCIsImV4dGVuZCIsIm1heCIsIm1pbiIsInpvb20iLCJwYXJzZUludCIsInJlbmRlck1hcmtlciIsInYiLCJhcGlrZXkiLCJzdHlsZXMiLCJvbk1hcENyZWF0ZWQiLCJvbk1hcENlbnRlckNoYW5nZWQiLCJvbk1hcFpvb21DaGFuZ2VkIiwib25NYXBDbGljayIsImdlb3N1Z2dlc3QiLCJlbCIsIl9nZW9TdWdnZXN0IiwiZm9ybWF0dGVkX2FkZHJlc3MiLCJvblN1Z2dlc3RTZWxlY3QiLCJoaWRlX2ZpbHRlciIsIm9uVG9nZ2xlVHlwZUFjdGl2ZSIsInJlbmRlciIsImVsZW1lbnQiLCJmaXRCb3VuZHMiLCJzZXRPcHRpb25zIiwiZGlzYWJsZURlZmF1bHRVSSIsIm1hcFR5cGVDb250cm9sIiwiTUFQU19SRUFEWSIsImxpc3RlbmVyIiwiZ2V0Wm9vbSIsIm1pbl96b29tIiwic2V0Wm9vbSIsIm9uUmVzdG9yZVN0YXRlIiwiZ2V0SGFzaElkIiwicmVzdWx0IiwiZmluZCIsImdlb2xvYyIsImNsZWFyVGltZW91dCIsIl9jZW50ZXJfY2hhbmdlX3RpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZ2V0Qm91bmRzIiwic2V0SGFzaFZhbHVlIiwic2V0SGFzaENlbnRlciIsImNlbnRlciIsInNldEhhc2hJZCIsIk1BUF9NQVJLRVJfSE9WRVIiLCJsYXRMbmciLCJnZXRMYXRMbmciLCJwYW5UbyIsInN1Z2dlc3QiLCJnbWFwcyIsInBhcnNlRmxvYXQiLCJnZXRIYXNoVmFsdWUiLCJnZXRIYXNoVmFsdWVzIiwidW5kZWZpbmVkIiwiaGFzaCIsIndpbmRvdyIsInBhcmFtcyIsInN1YnN0ciIsInNwbGl0IiwicGFpciIsIm9iamVjdCIsImZvckVhY2giLCJpdGVtIiwib2JqIiwiam9pbiIsImhpc3RvcnkiLCJyZXBsYWNlU3RhdGUiLCJ2YWx1ZXMiLCJmaWx0ZXIiLCJsYXQxIiwibG5nMSIsImxhdDIiLCJsbmcyIiwiZGlmZl9sYXQiLCJhYnMiLCJkaWZmX2xuZyIsInNxcnQiLCJhcHBzIiwiZ2VvbG9jYXRpb25zX2RhdGEiLCJwbGFjZXMiLCJnZW9sb2NhdGlvbl9wbGFjZXMiLCJpbmRleCIsIlJlYWN0RE9NIiwiZGF0YSIsImFwaV9rZXkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkaXNwbGF5IiwibW9kdWxlIiwiZXhwb3J0cyIsIkdPVE9fTE9DQVRJT04iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxJQUFxQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixjQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVUsSUFBcUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLElBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDNzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYixZQUFZLG1CQUFPLENBQUMsb0JBQU87QUFDM0IsY0FBYyxtQkFBTyxDQUFDLCtEQUFXOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsaUNBQWlDLFFBQVE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNB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Qiw2QkFBNkIsRUFBRTtBQUMvQjtBQUNBO0FBQ0EsOEJBQThCLGNBQWMsRUFBRTtBQUM5QyxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxzREFBUTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDJDQUEyQztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHVCQUF1QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBLHVCQUF1QixvQkFBb0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix1QkFBdUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnQkFBZ0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzZDO0FBQ2xCOzs7Ozs7Ozs7Ozs7O0FDakIzQjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsSUFBSTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUN5QztBQUNOOztBQUVuQztBQUNBLFFBQVEsdURBQUssQ0FBQyxzQ0FBVTtBQUN4QjtBQUNBO0FBQ0E7QUFDZSxnRUFBQyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDMUJqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNzQztBQUN3Qjs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNvRDtBQUNKO0FBQ1U7QUFDSjtBQUNBO0FBQ0Y7QUFDQTtBQUNKO0FBQ0k7QUFDRjtBQUNFO0FBQ047QUFDUTtBQUNSO0FBQ1E7QUFDUTtBQUNOO0FBQ047QUFDTTtBQUNFO0FBQ047QUFDTjtBQUNjO0FBQ1Y7QUFDQTtBQUNBOztBQUVsRDtBQUM0QztBQUNNO0FBQ0Y7QUFDRjtBQUNFO0FBRU07QUFDTjtBQUVNO0FBQ0Y7QUFDSjtBQUNGO0FBQ0o7QUFDQTtBQUNZOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ29EO0FBQ0E7QUFDUjtBQUNRO0FBQ0k7QUFFTjtBQUNKO0FBQ0U7QUFDTjtBQUNNO0FBQ0k7QUFDZ0I7QUFDaEI7QUFDSjtBQUNJO0FBQ047QUFDTTs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDa0Q7QUFDTjtBQUNNO0FBQ0E7QUFDSjtBQUNBO0FBQ007QUFDQTtBQUNSO0FBQ0k7QUFDRTtBQUNKO0FBQ0U7QUFDSjs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDa0Q7QUFDSTtBQUNRO0FBQ0o7QUFDUjtBQUNRO0FBRVo7QUFDUTs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFFK0M7QUFFRDtBQUdFO0FBRVU7QUFFVjtBQUNBO0FBRUY7QUFFRjtBQUdRO0FBQ0o7QUFDRjtBQUNBO0FBQ0o7QUFDQTtBQUNRO0FBQ0Y7QUFDQTtBQUNFO0FBQ0E7QUFDQTtBQUNJO0FBQ0o7QUFDTjs7QUFFNUM7QUFDQTtBQUNB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OlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2NyaXB0L2Zyb250ZW5kLmpzXCIpO1xuIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNyBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSAmJiBhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIGVtcHR5T2JqZWN0ID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlPYmplY3QnKTtcbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xufVxuXG52YXIgTUlYSU5TX0tFWSA9ICdtaXhpbnMnO1xuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gYWxsb3cgdGhlIGNyZWF0aW9uIG9mIGFub255bW91cyBmdW5jdGlvbnMgd2hpY2ggZG8gbm90XG4vLyBoYXZlIC5uYW1lIHNldCB0byB0aGUgbmFtZSBvZiB0aGUgdmFyaWFibGUgYmVpbmcgYXNzaWduZWQgdG8uXG5mdW5jdGlvbiBpZGVudGl0eShmbikge1xuICByZXR1cm4gZm47XG59XG5cbnZhciBSZWFjdFByb3BUeXBlTG9jYXRpb25OYW1lcztcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIFJlYWN0UHJvcFR5cGVMb2NhdGlvbk5hbWVzID0ge1xuICAgIHByb3A6ICdwcm9wJyxcbiAgICBjb250ZXh0OiAnY29udGV4dCcsXG4gICAgY2hpbGRDb250ZXh0OiAnY2hpbGQgY29udGV4dCdcbiAgfTtcbn0gZWxzZSB7XG4gIFJlYWN0UHJvcFR5cGVMb2NhdGlvbk5hbWVzID0ge307XG59XG5cbmZ1bmN0aW9uIGZhY3RvcnkoUmVhY3RDb21wb25lbnQsIGlzVmFsaWRFbGVtZW50LCBSZWFjdE5vb3BVcGRhdGVRdWV1ZSkge1xuICAvKipcbiAgICogUG9saWNpZXMgdGhhdCBkZXNjcmliZSBtZXRob2RzIGluIGBSZWFjdENsYXNzSW50ZXJmYWNlYC5cbiAgICovXG5cbiAgdmFyIGluamVjdGVkTWl4aW5zID0gW107XG5cbiAgLyoqXG4gICAqIENvbXBvc2l0ZSBjb21wb25lbnRzIGFyZSBoaWdoZXItbGV2ZWwgY29tcG9uZW50cyB0aGF0IGNvbXBvc2Ugb3RoZXIgY29tcG9zaXRlXG4gICAqIG9yIGhvc3QgY29tcG9uZW50cy5cbiAgICpcbiAgICogVG8gY3JlYXRlIGEgbmV3IHR5cGUgb2YgYFJlYWN0Q2xhc3NgLCBwYXNzIGEgc3BlY2lmaWNhdGlvbiBvZlxuICAgKiB5b3VyIG5ldyBjbGFzcyB0byBgUmVhY3QuY3JlYXRlQ2xhc3NgLiBUaGUgb25seSByZXF1aXJlbWVudCBvZiB5b3VyIGNsYXNzXG4gICAqIHNwZWNpZmljYXRpb24gaXMgdGhhdCB5b3UgaW1wbGVtZW50IGEgYHJlbmRlcmAgbWV0aG9kLlxuICAgKlxuICAgKiAgIHZhciBNeUNvbXBvbmVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAqICAgICAgIHJldHVybiA8ZGl2PkhlbGxvIFdvcmxkPC9kaXY+O1xuICAgKiAgICAgfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBUaGUgY2xhc3Mgc3BlY2lmaWNhdGlvbiBzdXBwb3J0cyBhIHNwZWNpZmljIHByb3RvY29sIG9mIG1ldGhvZHMgdGhhdCBoYXZlXG4gICAqIHNwZWNpYWwgbWVhbmluZyAoZS5nLiBgcmVuZGVyYCkuIFNlZSBgUmVhY3RDbGFzc0ludGVyZmFjZWAgZm9yXG4gICAqIG1vcmUgdGhlIGNvbXByZWhlbnNpdmUgcHJvdG9jb2wuIEFueSBvdGhlciBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIGluIHRoZVxuICAgKiBjbGFzcyBzcGVjaWZpY2F0aW9uIHdpbGwgYmUgYXZhaWxhYmxlIG9uIHRoZSBwcm90b3R5cGUuXG4gICAqXG4gICAqIEBpbnRlcmZhY2UgUmVhY3RDbGFzc0ludGVyZmFjZVxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHZhciBSZWFjdENsYXNzSW50ZXJmYWNlID0ge1xuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIE1peGluIG9iamVjdHMgdG8gaW5jbHVkZSB3aGVuIGRlZmluaW5nIHlvdXIgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHR5cGUge2FycmF5fVxuICAgICAqIEBvcHRpb25hbFxuICAgICAqL1xuICAgIG1peGluczogJ0RFRklORV9NQU5ZJyxcblxuICAgIC8qKlxuICAgICAqIEFuIG9iamVjdCBjb250YWluaW5nIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgdGhhdCBzaG91bGQgYmUgZGVmaW5lZCBvblxuICAgICAqIHRoZSBjb21wb25lbnQncyBjb25zdHJ1Y3RvciBpbnN0ZWFkIG9mIGl0cyBwcm90b3R5cGUgKHN0YXRpYyBtZXRob2RzKS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgc3RhdGljczogJ0RFRklORV9NQU5ZJyxcblxuICAgIC8qKlxuICAgICAqIERlZmluaXRpb24gb2YgcHJvcCB0eXBlcyBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqIEBvcHRpb25hbFxuICAgICAqL1xuICAgIHByb3BUeXBlczogJ0RFRklORV9NQU5ZJyxcblxuICAgIC8qKlxuICAgICAqIERlZmluaXRpb24gb2YgY29udGV4dCB0eXBlcyBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqIEBvcHRpb25hbFxuICAgICAqL1xuICAgIGNvbnRleHRUeXBlczogJ0RFRklORV9NQU5ZJyxcblxuICAgIC8qKlxuICAgICAqIERlZmluaXRpb24gb2YgY29udGV4dCB0eXBlcyB0aGlzIGNvbXBvbmVudCBzZXRzIGZvciBpdHMgY2hpbGRyZW4uXG4gICAgICpcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqIEBvcHRpb25hbFxuICAgICAqL1xuICAgIGNoaWxkQ29udGV4dFR5cGVzOiAnREVGSU5FX01BTlknLFxuXG4gICAgLy8gPT09PSBEZWZpbml0aW9uIG1ldGhvZHMgPT09PVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC4gVmFsdWVzIGluIHRoZSBtYXBwaW5nIHdpbGwgYmUgc2V0IG9uXG4gICAgICogYHRoaXMucHJvcHNgIGlmIHRoYXQgcHJvcCBpcyBub3Qgc3BlY2lmaWVkIChpLmUuIHVzaW5nIGFuIGBpbmAgY2hlY2spLlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCBiZWZvcmUgYGdldEluaXRpYWxTdGF0ZWAgYW5kIHRoZXJlZm9yZSBjYW5ub3QgcmVseVxuICAgICAqIG9uIGB0aGlzLnN0YXRlYCBvciB1c2UgYHRoaXMuc2V0U3RhdGVgLlxuICAgICAqXG4gICAgICogQHJldHVybiB7b2JqZWN0fVxuICAgICAqIEBvcHRpb25hbFxuICAgICAqL1xuICAgIGdldERlZmF1bHRQcm9wczogJ0RFRklORV9NQU5ZX01FUkdFRCcsXG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uY2UgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC4gVGhlIHJldHVybiB2YWx1ZSB3aWxsIGJlIHVzZWRcbiAgICAgKiBhcyB0aGUgaW5pdGlhbCB2YWx1ZSBvZiBgdGhpcy5zdGF0ZWAuXG4gICAgICpcbiAgICAgKiAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICogICAgIHJldHVybiB7XG4gICAgICogICAgICAgaXNPbjogZmFsc2UsXG4gICAgICogICAgICAgZm9vQmF6OiBuZXcgQmF6Rm9vKClcbiAgICAgKiAgICAgfVxuICAgICAqICAgfVxuICAgICAqXG4gICAgICogQHJldHVybiB7b2JqZWN0fVxuICAgICAqIEBvcHRpb25hbFxuICAgICAqL1xuICAgIGdldEluaXRpYWxTdGF0ZTogJ0RFRklORV9NQU5ZX01FUkdFRCcsXG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9XG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgZ2V0Q2hpbGRDb250ZXh0OiAnREVGSU5FX01BTllfTUVSR0VEJyxcblxuICAgIC8qKlxuICAgICAqIFVzZXMgcHJvcHMgZnJvbSBgdGhpcy5wcm9wc2AgYW5kIHN0YXRlIGZyb20gYHRoaXMuc3RhdGVgIHRvIHJlbmRlciB0aGVcbiAgICAgKiBzdHJ1Y3R1cmUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIE5vIGd1YXJhbnRlZXMgYXJlIG1hZGUgYWJvdXQgd2hlbiBvciBob3cgb2Z0ZW4gdGhpcyBtZXRob2QgaXMgaW52b2tlZCwgc29cbiAgICAgKiBpdCBtdXN0IG5vdCBoYXZlIHNpZGUgZWZmZWN0cy5cbiAgICAgKlxuICAgICAqICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgKiAgICAgdmFyIG5hbWUgPSB0aGlzLnByb3BzLm5hbWU7XG4gICAgICogICAgIHJldHVybiA8ZGl2PkhlbGxvLCB7bmFtZX0hPC9kaXY+O1xuICAgICAqICAgfVxuICAgICAqXG4gICAgICogQHJldHVybiB7UmVhY3RDb21wb25lbnR9XG4gICAgICogQHJlcXVpcmVkXG4gICAgICovXG4gICAgcmVuZGVyOiAnREVGSU5FX09OQ0UnLFxuXG4gICAgLy8gPT09PSBEZWxlZ2F0ZSBtZXRob2RzID09PT1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGluaXRpYWxseSBjcmVhdGVkIGFuZCBhYm91dCB0byBiZSBtb3VudGVkLlxuICAgICAqIFRoaXMgbWF5IGhhdmUgc2lkZSBlZmZlY3RzLCBidXQgYW55IGV4dGVybmFsIHN1YnNjcmlwdGlvbnMgb3IgZGF0YSBjcmVhdGVkXG4gICAgICogYnkgdGhpcyBtZXRob2QgbXVzdCBiZSBjbGVhbmVkIHVwIGluIGBjb21wb25lbnRXaWxsVW5tb3VudGAuXG4gICAgICpcbiAgICAgKiBAb3B0aW9uYWxcbiAgICAgKi9cbiAgICBjb21wb25lbnRXaWxsTW91bnQ6ICdERUZJTkVfTUFOWScsXG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBtb3VudGVkIGFuZCBoYXMgYSBET00gcmVwcmVzZW50YXRpb24uXG4gICAgICogSG93ZXZlciwgdGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgdGhlIERPTSBub2RlIGlzIGluIHRoZSBkb2N1bWVudC5cbiAgICAgKlxuICAgICAqIFVzZSB0aGlzIGFzIGFuIG9wcG9ydHVuaXR5IHRvIG9wZXJhdGUgb24gdGhlIERPTSB3aGVuIHRoZSBjb21wb25lbnQgaGFzXG4gICAgICogYmVlbiBtb3VudGVkIChpbml0aWFsaXplZCBhbmQgcmVuZGVyZWQpIGZvciB0aGUgZmlyc3QgdGltZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RE9NRWxlbWVudH0gcm9vdE5vZGUgRE9NIGVsZW1lbnQgcmVwcmVzZW50aW5nIHRoZSBjb21wb25lbnQuXG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgY29tcG9uZW50RGlkTW91bnQ6ICdERUZJTkVfTUFOWScsXG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIGJlZm9yZSB0aGUgY29tcG9uZW50IHJlY2VpdmVzIG5ldyBwcm9wcy5cbiAgICAgKlxuICAgICAqIFVzZSB0aGlzIGFzIGFuIG9wcG9ydHVuaXR5IHRvIHJlYWN0IHRvIGEgcHJvcCB0cmFuc2l0aW9uIGJ5IHVwZGF0aW5nIHRoZVxuICAgICAqIHN0YXRlIHVzaW5nIGB0aGlzLnNldFN0YXRlYC4gQ3VycmVudCBwcm9wcyBhcmUgYWNjZXNzZWQgdmlhIGB0aGlzLnByb3BzYC5cbiAgICAgKlxuICAgICAqICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24obmV4dFByb3BzLCBuZXh0Q29udGV4dCkge1xuICAgICAqICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgKiAgICAgICBsaWtlc0luY3JlYXNpbmc6IG5leHRQcm9wcy5saWtlQ291bnQgPiB0aGlzLnByb3BzLmxpa2VDb3VudFxuICAgICAqICAgICB9KTtcbiAgICAgKiAgIH1cbiAgICAgKlxuICAgICAqIE5PVEU6IFRoZXJlIGlzIG5vIGVxdWl2YWxlbnQgYGNvbXBvbmVudFdpbGxSZWNlaXZlU3RhdGVgLiBBbiBpbmNvbWluZyBwcm9wXG4gICAgICogdHJhbnNpdGlvbiBtYXkgY2F1c2UgYSBzdGF0ZSBjaGFuZ2UsIGJ1dCB0aGUgb3Bwb3NpdGUgaXMgbm90IHRydWUuIElmIHlvdVxuICAgICAqIG5lZWQgaXQsIHlvdSBhcmUgcHJvYmFibHkgbG9va2luZyBmb3IgYGNvbXBvbmVudFdpbGxVcGRhdGVgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG5leHRQcm9wc1xuICAgICAqIEBvcHRpb25hbFxuICAgICAqL1xuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6ICdERUZJTkVfTUFOWScsXG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoaWxlIGRlY2lkaW5nIGlmIHRoZSBjb21wb25lbnQgc2hvdWxkIGJlIHVwZGF0ZWQgYXMgYSByZXN1bHQgb2ZcbiAgICAgKiByZWNlaXZpbmcgbmV3IHByb3BzLCBzdGF0ZSBhbmQvb3IgY29udGV4dC5cbiAgICAgKlxuICAgICAqIFVzZSB0aGlzIGFzIGFuIG9wcG9ydHVuaXR5IHRvIGByZXR1cm4gZmFsc2VgIHdoZW4geW91J3JlIGNlcnRhaW4gdGhhdCB0aGVcbiAgICAgKiB0cmFuc2l0aW9uIHRvIHRoZSBuZXcgcHJvcHMvc3RhdGUvY29udGV4dCB3aWxsIG5vdCByZXF1aXJlIGEgY29tcG9uZW50XG4gICAgICogdXBkYXRlLlxuICAgICAqXG4gICAgICogICBzaG91bGRDb21wb25lbnRVcGRhdGU6IGZ1bmN0aW9uKG5leHRQcm9wcywgbmV4dFN0YXRlLCBuZXh0Q29udGV4dCkge1xuICAgICAqICAgICByZXR1cm4gIWVxdWFsKG5leHRQcm9wcywgdGhpcy5wcm9wcykgfHxcbiAgICAgKiAgICAgICAhZXF1YWwobmV4dFN0YXRlLCB0aGlzLnN0YXRlKSB8fFxuICAgICAqICAgICAgICFlcXVhbChuZXh0Q29udGV4dCwgdGhpcy5jb250ZXh0KTtcbiAgICAgKiAgIH1cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBuZXh0UHJvcHNcbiAgICAgKiBAcGFyYW0gez9vYmplY3R9IG5leHRTdGF0ZVxuICAgICAqIEBwYXJhbSB7P29iamVjdH0gbmV4dENvbnRleHRcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBjb21wb25lbnQgc2hvdWxkIHVwZGF0ZS5cbiAgICAgKiBAb3B0aW9uYWxcbiAgICAgKi9cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGU6ICdERUZJTkVfT05DRScsXG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBhYm91dCB0byB1cGRhdGUgZHVlIHRvIGEgdHJhbnNpdGlvbiBmcm9tXG4gICAgICogYHRoaXMucHJvcHNgLCBgdGhpcy5zdGF0ZWAgYW5kIGB0aGlzLmNvbnRleHRgIHRvIGBuZXh0UHJvcHNgLCBgbmV4dFN0YXRlYFxuICAgICAqIGFuZCBgbmV4dENvbnRleHRgLlxuICAgICAqXG4gICAgICogVXNlIHRoaXMgYXMgYW4gb3Bwb3J0dW5pdHkgdG8gcGVyZm9ybSBwcmVwYXJhdGlvbiBiZWZvcmUgYW4gdXBkYXRlIG9jY3Vycy5cbiAgICAgKlxuICAgICAqIE5PVEU6IFlvdSAqKmNhbm5vdCoqIHVzZSBgdGhpcy5zZXRTdGF0ZSgpYCBpbiB0aGlzIG1ldGhvZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBuZXh0UHJvcHNcbiAgICAgKiBAcGFyYW0gez9vYmplY3R9IG5leHRTdGF0ZVxuICAgICAqIEBwYXJhbSB7P29iamVjdH0gbmV4dENvbnRleHRcbiAgICAgKiBAcGFyYW0ge1JlYWN0UmVjb25jaWxlVHJhbnNhY3Rpb259IHRyYW5zYWN0aW9uXG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgY29tcG9uZW50V2lsbFVwZGF0ZTogJ0RFRklORV9NQU5ZJyxcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgY29tcG9uZW50J3MgRE9NIHJlcHJlc2VudGF0aW9uIGhhcyBiZWVuIHVwZGF0ZWQuXG4gICAgICpcbiAgICAgKiBVc2UgdGhpcyBhcyBhbiBvcHBvcnR1bml0eSB0byBvcGVyYXRlIG9uIHRoZSBET00gd2hlbiB0aGUgY29tcG9uZW50IGhhc1xuICAgICAqIGJlZW4gdXBkYXRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcmV2UHJvcHNcbiAgICAgKiBAcGFyYW0gez9vYmplY3R9IHByZXZTdGF0ZVxuICAgICAqIEBwYXJhbSB7P29iamVjdH0gcHJldkNvbnRleHRcbiAgICAgKiBAcGFyYW0ge0RPTUVsZW1lbnR9IHJvb3ROb2RlIERPTSBlbGVtZW50IHJlcHJlc2VudGluZyB0aGUgY29tcG9uZW50LlxuICAgICAqIEBvcHRpb25hbFxuICAgICAqL1xuICAgIGNvbXBvbmVudERpZFVwZGF0ZTogJ0RFRklORV9NQU5ZJyxcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGFib3V0IHRvIGJlIHJlbW92ZWQgZnJvbSBpdHMgcGFyZW50IGFuZCBoYXZlXG4gICAgICogaXRzIERPTSByZXByZXNlbnRhdGlvbiBkZXN0cm95ZWQuXG4gICAgICpcbiAgICAgKiBVc2UgdGhpcyBhcyBhbiBvcHBvcnR1bml0eSB0byBkZWFsbG9jYXRlIGFueSBleHRlcm5hbCByZXNvdXJjZXMuXG4gICAgICpcbiAgICAgKiBOT1RFOiBUaGVyZSBpcyBubyBgY29tcG9uZW50RGlkVW5tb3VudGAgc2luY2UgeW91ciBjb21wb25lbnQgd2lsbCBoYXZlIGJlZW5cbiAgICAgKiBkZXN0cm95ZWQgYnkgdGhhdCBwb2ludC5cbiAgICAgKlxuICAgICAqIEBvcHRpb25hbFxuICAgICAqL1xuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50OiAnREVGSU5FX01BTlknLFxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZW1lbnQgZm9yIChkZXByZWNhdGVkKSBgY29tcG9uZW50V2lsbE1vdW50YC5cbiAgICAgKlxuICAgICAqIEBvcHRpb25hbFxuICAgICAqL1xuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQ6ICdERUZJTkVfTUFOWScsXG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlbWVudCBmb3IgKGRlcHJlY2F0ZWQpIGBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzYC5cbiAgICAgKlxuICAgICAqIEBvcHRpb25hbFxuICAgICAqL1xuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiAnREVGSU5FX01BTlknLFxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZW1lbnQgZm9yIChkZXByZWNhdGVkKSBgY29tcG9uZW50V2lsbFVwZGF0ZWAuXG4gICAgICpcbiAgICAgKiBAb3B0aW9uYWxcbiAgICAgKi9cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZTogJ0RFRklORV9NQU5ZJyxcblxuICAgIC8vID09PT0gQWR2YW5jZWQgbWV0aG9kcyA9PT09XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBjb21wb25lbnQncyBjdXJyZW50bHkgbW91bnRlZCBET00gcmVwcmVzZW50YXRpb24uXG4gICAgICpcbiAgICAgKiBCeSBkZWZhdWx0LCB0aGlzIGltcGxlbWVudHMgUmVhY3QncyByZW5kZXJpbmcgYW5kIHJlY29uY2lsaWF0aW9uIGFsZ29yaXRobS5cbiAgICAgKiBTb3BoaXN0aWNhdGVkIGNsaWVudHMgbWF5IHdpc2ggdG8gb3ZlcnJpZGUgdGhpcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UmVhY3RSZWNvbmNpbGVUcmFuc2FjdGlvbn0gdHJhbnNhY3Rpb25cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKiBAb3ZlcnJpZGFibGVcbiAgICAgKi9cbiAgICB1cGRhdGVDb21wb25lbnQ6ICdPVkVSUklERV9CQVNFJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBTaW1pbGFyIHRvIFJlYWN0Q2xhc3NJbnRlcmZhY2UgYnV0IGZvciBzdGF0aWMgbWV0aG9kcy5cbiAgICovXG4gIHZhciBSZWFjdENsYXNzU3RhdGljSW50ZXJmYWNlID0ge1xuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgYWZ0ZXIgYSBjb21wb25lbnQgaXMgaW5zdGFudGlhdGVkIGFuZCB3aGVuIGl0XG4gICAgICogcmVjZWl2ZXMgbmV3IHByb3BzLiBSZXR1cm4gYW4gb2JqZWN0IHRvIHVwZGF0ZSBzdGF0ZSBpbiByZXNwb25zZSB0b1xuICAgICAqIHByb3AgY2hhbmdlcy4gUmV0dXJuIG51bGwgdG8gaW5kaWNhdGUgbm8gY2hhbmdlIHRvIHN0YXRlLlxuICAgICAqXG4gICAgICogSWYgYW4gb2JqZWN0IGlzIHJldHVybmVkLCBpdHMga2V5cyB3aWxsIGJlIG1lcmdlZCBpbnRvIHRoZSBleGlzdGluZyBzdGF0ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge29iamVjdCB8fCBudWxsfVxuICAgICAqIEBvcHRpb25hbFxuICAgICAqL1xuICAgIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczogJ0RFRklORV9NQU5ZX01FUkdFRCdcbiAgfTtcblxuICAvKipcbiAgICogTWFwcGluZyBmcm9tIGNsYXNzIHNwZWNpZmljYXRpb24ga2V5cyB0byBzcGVjaWFsIHByb2Nlc3NpbmcgZnVuY3Rpb25zLlxuICAgKlxuICAgKiBBbHRob3VnaCB0aGVzZSBhcmUgZGVjbGFyZWQgbGlrZSBpbnN0YW5jZSBwcm9wZXJ0aWVzIGluIHRoZSBzcGVjaWZpY2F0aW9uXG4gICAqIHdoZW4gZGVmaW5pbmcgY2xhc3NlcyB1c2luZyBgUmVhY3QuY3JlYXRlQ2xhc3NgLCB0aGV5IGFyZSBhY3R1YWxseSBzdGF0aWNcbiAgICogYW5kIGFyZSBhY2Nlc3NpYmxlIG9uIHRoZSBjb25zdHJ1Y3RvciBpbnN0ZWFkIG9mIHRoZSBwcm90b3R5cGUuIERlc3BpdGVcbiAgICogYmVpbmcgc3RhdGljLCB0aGV5IG11c3QgYmUgZGVmaW5lZCBvdXRzaWRlIG9mIHRoZSBcInN0YXRpY3NcIiBrZXkgdW5kZXJcbiAgICogd2hpY2ggYWxsIG90aGVyIHN0YXRpYyBtZXRob2RzIGFyZSBkZWZpbmVkLlxuICAgKi9cbiAgdmFyIFJFU0VSVkVEX1NQRUNfS0VZUyA9IHtcbiAgICBkaXNwbGF5TmFtZTogZnVuY3Rpb24oQ29uc3RydWN0b3IsIGRpc3BsYXlOYW1lKSB7XG4gICAgICBDb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICAgIH0sXG4gICAgbWl4aW5zOiBmdW5jdGlvbihDb25zdHJ1Y3RvciwgbWl4aW5zKSB7XG4gICAgICBpZiAobWl4aW5zKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWl4aW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbWl4U3BlY0ludG9Db21wb25lbnQoQ29uc3RydWN0b3IsIG1peGluc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGNoaWxkQ29udGV4dFR5cGVzOiBmdW5jdGlvbihDb25zdHJ1Y3RvciwgY2hpbGRDb250ZXh0VHlwZXMpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHZhbGlkYXRlVHlwZURlZihDb25zdHJ1Y3RvciwgY2hpbGRDb250ZXh0VHlwZXMsICdjaGlsZENvbnRleHQnKTtcbiAgICAgIH1cbiAgICAgIENvbnN0cnVjdG9yLmNoaWxkQ29udGV4dFR5cGVzID0gX2Fzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgIENvbnN0cnVjdG9yLmNoaWxkQ29udGV4dFR5cGVzLFxuICAgICAgICBjaGlsZENvbnRleHRUeXBlc1xuICAgICAgKTtcbiAgICB9LFxuICAgIGNvbnRleHRUeXBlczogZnVuY3Rpb24oQ29uc3RydWN0b3IsIGNvbnRleHRUeXBlcykge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdmFsaWRhdGVUeXBlRGVmKENvbnN0cnVjdG9yLCBjb250ZXh0VHlwZXMsICdjb250ZXh0Jyk7XG4gICAgICB9XG4gICAgICBDb25zdHJ1Y3Rvci5jb250ZXh0VHlwZXMgPSBfYXNzaWduKFxuICAgICAgICB7fSxcbiAgICAgICAgQ29uc3RydWN0b3IuY29udGV4dFR5cGVzLFxuICAgICAgICBjb250ZXh0VHlwZXNcbiAgICAgICk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBTcGVjaWFsIGNhc2UgZ2V0RGVmYXVsdFByb3BzIHdoaWNoIHNob3VsZCBtb3ZlIGludG8gc3RhdGljcyBidXQgcmVxdWlyZXNcbiAgICAgKiBhdXRvbWF0aWMgbWVyZ2luZy5cbiAgICAgKi9cbiAgICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBnZXREZWZhdWx0UHJvcHMpIHtcbiAgICAgIGlmIChDb25zdHJ1Y3Rvci5nZXREZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgQ29uc3RydWN0b3IuZ2V0RGVmYXVsdFByb3BzID0gY3JlYXRlTWVyZ2VkUmVzdWx0RnVuY3Rpb24oXG4gICAgICAgICAgQ29uc3RydWN0b3IuZ2V0RGVmYXVsdFByb3BzLFxuICAgICAgICAgIGdldERlZmF1bHRQcm9wc1xuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgQ29uc3RydWN0b3IuZ2V0RGVmYXVsdFByb3BzID0gZ2V0RGVmYXVsdFByb3BzO1xuICAgICAgfVxuICAgIH0sXG4gICAgcHJvcFR5cGVzOiBmdW5jdGlvbihDb25zdHJ1Y3RvciwgcHJvcFR5cGVzKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB2YWxpZGF0ZVR5cGVEZWYoQ29uc3RydWN0b3IsIHByb3BUeXBlcywgJ3Byb3AnKTtcbiAgICAgIH1cbiAgICAgIENvbnN0cnVjdG9yLnByb3BUeXBlcyA9IF9hc3NpZ24oe30sIENvbnN0cnVjdG9yLnByb3BUeXBlcywgcHJvcFR5cGVzKTtcbiAgICB9LFxuICAgIHN0YXRpY3M6IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBzdGF0aWNzKSB7XG4gICAgICBtaXhTdGF0aWNTcGVjSW50b0NvbXBvbmVudChDb25zdHJ1Y3Rvciwgc3RhdGljcyk7XG4gICAgfSxcbiAgICBhdXRvYmluZDogZnVuY3Rpb24oKSB7fVxuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlVHlwZURlZihDb25zdHJ1Y3RvciwgdHlwZURlZiwgbG9jYXRpb24pIHtcbiAgICBmb3IgKHZhciBwcm9wTmFtZSBpbiB0eXBlRGVmKSB7XG4gICAgICBpZiAodHlwZURlZi5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgLy8gdXNlIGEgd2FybmluZyBpbnN0ZWFkIG9mIGFuIF9pbnZhcmlhbnQgc28gY29tcG9uZW50c1xuICAgICAgICAvLyBkb24ndCBzaG93IHVwIGluIHByb2QgYnV0IG9ubHkgaW4gX19ERVZfX1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgICB0eXBlb2YgdHlwZURlZltwcm9wTmFtZV0gPT09ICdmdW5jdGlvbicsXG4gICAgICAgICAgICAnJXM6ICVzIHR5cGUgYCVzYCBpcyBpbnZhbGlkOyBpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSAnICtcbiAgICAgICAgICAgICAgJ1JlYWN0LlByb3BUeXBlcy4nLFxuICAgICAgICAgICAgQ29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgJ1JlYWN0Q2xhc3MnLFxuICAgICAgICAgICAgUmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXNbbG9jYXRpb25dLFxuICAgICAgICAgICAgcHJvcE5hbWVcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVNZXRob2RPdmVycmlkZShpc0FscmVhZHlEZWZpbmVkLCBuYW1lKSB7XG4gICAgdmFyIHNwZWNQb2xpY3kgPSBSZWFjdENsYXNzSW50ZXJmYWNlLmhhc093blByb3BlcnR5KG5hbWUpXG4gICAgICA/IFJlYWN0Q2xhc3NJbnRlcmZhY2VbbmFtZV1cbiAgICAgIDogbnVsbDtcblxuICAgIC8vIERpc2FsbG93IG92ZXJyaWRpbmcgb2YgYmFzZSBjbGFzcyBtZXRob2RzIHVubGVzcyBleHBsaWNpdGx5IGFsbG93ZWQuXG4gICAgaWYgKFJlYWN0Q2xhc3NNaXhpbi5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgX2ludmFyaWFudChcbiAgICAgICAgc3BlY1BvbGljeSA9PT0gJ09WRVJSSURFX0JBU0UnLFxuICAgICAgICAnUmVhY3RDbGFzc0ludGVyZmFjZTogWW91IGFyZSBhdHRlbXB0aW5nIHRvIG92ZXJyaWRlICcgK1xuICAgICAgICAgICdgJXNgIGZyb20geW91ciBjbGFzcyBzcGVjaWZpY2F0aW9uLiBFbnN1cmUgdGhhdCB5b3VyIG1ldGhvZCBuYW1lcyAnICtcbiAgICAgICAgICAnZG8gbm90IG92ZXJsYXAgd2l0aCBSZWFjdCBtZXRob2RzLicsXG4gICAgICAgIG5hbWVcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gRGlzYWxsb3cgZGVmaW5pbmcgbWV0aG9kcyBtb3JlIHRoYW4gb25jZSB1bmxlc3MgZXhwbGljaXRseSBhbGxvd2VkLlxuICAgIGlmIChpc0FscmVhZHlEZWZpbmVkKSB7XG4gICAgICBfaW52YXJpYW50KFxuICAgICAgICBzcGVjUG9saWN5ID09PSAnREVGSU5FX01BTlknIHx8IHNwZWNQb2xpY3kgPT09ICdERUZJTkVfTUFOWV9NRVJHRUQnLFxuICAgICAgICAnUmVhY3RDbGFzc0ludGVyZmFjZTogWW91IGFyZSBhdHRlbXB0aW5nIHRvIGRlZmluZSAnICtcbiAgICAgICAgICAnYCVzYCBvbiB5b3VyIGNvbXBvbmVudCBtb3JlIHRoYW4gb25jZS4gVGhpcyBjb25mbGljdCBtYXkgYmUgZHVlICcgK1xuICAgICAgICAgICd0byBhIG1peGluLicsXG4gICAgICAgIG5hbWVcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1peGluIGhlbHBlciB3aGljaCBoYW5kbGVzIHBvbGljeSB2YWxpZGF0aW9uIGFuZCByZXNlcnZlZFxuICAgKiBzcGVjaWZpY2F0aW9uIGtleXMgd2hlbiBidWlsZGluZyBSZWFjdCBjbGFzc2VzLlxuICAgKi9cbiAgZnVuY3Rpb24gbWl4U3BlY0ludG9Db21wb25lbnQoQ29uc3RydWN0b3IsIHNwZWMpIHtcbiAgICBpZiAoIXNwZWMpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHZhciB0eXBlb2ZTcGVjID0gdHlwZW9mIHNwZWM7XG4gICAgICAgIHZhciBpc01peGluVmFsaWQgPSB0eXBlb2ZTcGVjID09PSAnb2JqZWN0JyAmJiBzcGVjICE9PSBudWxsO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgd2FybmluZyhcbiAgICAgICAgICAgIGlzTWl4aW5WYWxpZCxcbiAgICAgICAgICAgIFwiJXM6IFlvdSdyZSBhdHRlbXB0aW5nIHRvIGluY2x1ZGUgYSBtaXhpbiB0aGF0IGlzIGVpdGhlciBudWxsIFwiICtcbiAgICAgICAgICAgICAgJ29yIG5vdCBhbiBvYmplY3QuIENoZWNrIHRoZSBtaXhpbnMgaW5jbHVkZWQgYnkgdGhlIGNvbXBvbmVudCwgJyArXG4gICAgICAgICAgICAgICdhcyB3ZWxsIGFzIGFueSBtaXhpbnMgdGhleSBpbmNsdWRlIHRoZW1zZWx2ZXMuICcgK1xuICAgICAgICAgICAgICAnRXhwZWN0ZWQgb2JqZWN0IGJ1dCBnb3QgJXMuJyxcbiAgICAgICAgICAgIENvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8ICdSZWFjdENsYXNzJyxcbiAgICAgICAgICAgIHNwZWMgPT09IG51bGwgPyBudWxsIDogdHlwZW9mU3BlY1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIF9pbnZhcmlhbnQoXG4gICAgICB0eXBlb2Ygc3BlYyAhPT0gJ2Z1bmN0aW9uJyxcbiAgICAgIFwiUmVhY3RDbGFzczogWW91J3JlIGF0dGVtcHRpbmcgdG8gXCIgK1xuICAgICAgICAndXNlIGEgY29tcG9uZW50IGNsYXNzIG9yIGZ1bmN0aW9uIGFzIGEgbWl4aW4uIEluc3RlYWQsIGp1c3QgdXNlIGEgJyArXG4gICAgICAgICdyZWd1bGFyIG9iamVjdC4nXG4gICAgKTtcbiAgICBfaW52YXJpYW50KFxuICAgICAgIWlzVmFsaWRFbGVtZW50KHNwZWMpLFxuICAgICAgXCJSZWFjdENsYXNzOiBZb3UncmUgYXR0ZW1wdGluZyB0byBcIiArXG4gICAgICAgICd1c2UgYSBjb21wb25lbnQgYXMgYSBtaXhpbi4gSW5zdGVhZCwganVzdCB1c2UgYSByZWd1bGFyIG9iamVjdC4nXG4gICAgKTtcblxuICAgIHZhciBwcm90byA9IENvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgICB2YXIgYXV0b0JpbmRQYWlycyA9IHByb3RvLl9fcmVhY3RBdXRvQmluZFBhaXJzO1xuXG4gICAgLy8gQnkgaGFuZGxpbmcgbWl4aW5zIGJlZm9yZSBhbnkgb3RoZXIgcHJvcGVydGllcywgd2UgZW5zdXJlIHRoZSBzYW1lXG4gICAgLy8gY2hhaW5pbmcgb3JkZXIgaXMgYXBwbGllZCB0byBtZXRob2RzIHdpdGggREVGSU5FX01BTlkgcG9saWN5LCB3aGV0aGVyXG4gICAgLy8gbWl4aW5zIGFyZSBsaXN0ZWQgYmVmb3JlIG9yIGFmdGVyIHRoZXNlIG1ldGhvZHMgaW4gdGhlIHNwZWMuXG4gICAgaWYgKHNwZWMuaGFzT3duUHJvcGVydHkoTUlYSU5TX0tFWSkpIHtcbiAgICAgIFJFU0VSVkVEX1NQRUNfS0VZUy5taXhpbnMoQ29uc3RydWN0b3IsIHNwZWMubWl4aW5zKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBuYW1lIGluIHNwZWMpIHtcbiAgICAgIGlmICghc3BlYy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5hbWUgPT09IE1JWElOU19LRVkpIHtcbiAgICAgICAgLy8gV2UgaGF2ZSBhbHJlYWR5IGhhbmRsZWQgbWl4aW5zIGluIGEgc3BlY2lhbCBjYXNlIGFib3ZlLlxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHByb3BlcnR5ID0gc3BlY1tuYW1lXTtcbiAgICAgIHZhciBpc0FscmVhZHlEZWZpbmVkID0gcHJvdG8uaGFzT3duUHJvcGVydHkobmFtZSk7XG4gICAgICB2YWxpZGF0ZU1ldGhvZE92ZXJyaWRlKGlzQWxyZWFkeURlZmluZWQsIG5hbWUpO1xuXG4gICAgICBpZiAoUkVTRVJWRURfU1BFQ19LRVlTLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgIFJFU0VSVkVEX1NQRUNfS0VZU1tuYW1lXShDb25zdHJ1Y3RvciwgcHJvcGVydHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU2V0dXAgbWV0aG9kcyBvbiBwcm90b3R5cGU6XG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgbWVtYmVyIG1ldGhvZHMgc2hvdWxkIG5vdCBiZSBhdXRvbWF0aWNhbGx5IGJvdW5kOlxuICAgICAgICAvLyAxLiBFeHBlY3RlZCBSZWFjdENsYXNzIG1ldGhvZHMgKGluIHRoZSBcImludGVyZmFjZVwiKS5cbiAgICAgICAgLy8gMi4gT3ZlcnJpZGRlbiBtZXRob2RzICh0aGF0IHdlcmUgbWl4ZWQgaW4pLlxuICAgICAgICB2YXIgaXNSZWFjdENsYXNzTWV0aG9kID0gUmVhY3RDbGFzc0ludGVyZmFjZS5oYXNPd25Qcm9wZXJ0eShuYW1lKTtcbiAgICAgICAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgcHJvcGVydHkgPT09ICdmdW5jdGlvbic7XG4gICAgICAgIHZhciBzaG91bGRBdXRvQmluZCA9XG4gICAgICAgICAgaXNGdW5jdGlvbiAmJlxuICAgICAgICAgICFpc1JlYWN0Q2xhc3NNZXRob2QgJiZcbiAgICAgICAgICAhaXNBbHJlYWR5RGVmaW5lZCAmJlxuICAgICAgICAgIHNwZWMuYXV0b2JpbmQgIT09IGZhbHNlO1xuXG4gICAgICAgIGlmIChzaG91bGRBdXRvQmluZCkge1xuICAgICAgICAgIGF1dG9CaW5kUGFpcnMucHVzaChuYW1lLCBwcm9wZXJ0eSk7XG4gICAgICAgICAgcHJvdG9bbmFtZV0gPSBwcm9wZXJ0eTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoaXNBbHJlYWR5RGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIHNwZWNQb2xpY3kgPSBSZWFjdENsYXNzSW50ZXJmYWNlW25hbWVdO1xuXG4gICAgICAgICAgICAvLyBUaGVzZSBjYXNlcyBzaG91bGQgYWxyZWFkeSBiZSBjYXVnaHQgYnkgdmFsaWRhdGVNZXRob2RPdmVycmlkZS5cbiAgICAgICAgICAgIF9pbnZhcmlhbnQoXG4gICAgICAgICAgICAgIGlzUmVhY3RDbGFzc01ldGhvZCAmJlxuICAgICAgICAgICAgICAgIChzcGVjUG9saWN5ID09PSAnREVGSU5FX01BTllfTUVSR0VEJyB8fFxuICAgICAgICAgICAgICAgICAgc3BlY1BvbGljeSA9PT0gJ0RFRklORV9NQU5ZJyksXG4gICAgICAgICAgICAgICdSZWFjdENsYXNzOiBVbmV4cGVjdGVkIHNwZWMgcG9saWN5ICVzIGZvciBrZXkgJXMgJyArXG4gICAgICAgICAgICAgICAgJ3doZW4gbWl4aW5nIGluIGNvbXBvbmVudCBzcGVjcy4nLFxuICAgICAgICAgICAgICBzcGVjUG9saWN5LFxuICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAvLyBGb3IgbWV0aG9kcyB3aGljaCBhcmUgZGVmaW5lZCBtb3JlIHRoYW4gb25jZSwgY2FsbCB0aGUgZXhpc3RpbmdcbiAgICAgICAgICAgIC8vIG1ldGhvZHMgYmVmb3JlIGNhbGxpbmcgdGhlIG5ldyBwcm9wZXJ0eSwgbWVyZ2luZyBpZiBhcHByb3ByaWF0ZS5cbiAgICAgICAgICAgIGlmIChzcGVjUG9saWN5ID09PSAnREVGSU5FX01BTllfTUVSR0VEJykge1xuICAgICAgICAgICAgICBwcm90b1tuYW1lXSA9IGNyZWF0ZU1lcmdlZFJlc3VsdEZ1bmN0aW9uKHByb3RvW25hbWVdLCBwcm9wZXJ0eSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNwZWNQb2xpY3kgPT09ICdERUZJTkVfTUFOWScpIHtcbiAgICAgICAgICAgICAgcHJvdG9bbmFtZV0gPSBjcmVhdGVDaGFpbmVkRnVuY3Rpb24ocHJvdG9bbmFtZV0sIHByb3BlcnR5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvdG9bbmFtZV0gPSBwcm9wZXJ0eTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgIC8vIEFkZCB2ZXJib3NlIGRpc3BsYXlOYW1lIHRvIHRoZSBmdW5jdGlvbiwgd2hpY2ggaGVscHMgd2hlbiBsb29raW5nXG4gICAgICAgICAgICAgIC8vIGF0IHByb2ZpbGluZyB0b29scy5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0eSA9PT0gJ2Z1bmN0aW9uJyAmJiBzcGVjLmRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgICAgICAgcHJvdG9bbmFtZV0uZGlzcGxheU5hbWUgPSBzcGVjLmRpc3BsYXlOYW1lICsgJ18nICsgbmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1peFN0YXRpY1NwZWNJbnRvQ29tcG9uZW50KENvbnN0cnVjdG9yLCBzdGF0aWNzKSB7XG4gICAgaWYgKCFzdGF0aWNzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgbmFtZSBpbiBzdGF0aWNzKSB7XG4gICAgICB2YXIgcHJvcGVydHkgPSBzdGF0aWNzW25hbWVdO1xuICAgICAgaWYgKCFzdGF0aWNzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgaXNSZXNlcnZlZCA9IG5hbWUgaW4gUkVTRVJWRURfU1BFQ19LRVlTO1xuICAgICAgX2ludmFyaWFudChcbiAgICAgICAgIWlzUmVzZXJ2ZWQsXG4gICAgICAgICdSZWFjdENsYXNzOiBZb3UgYXJlIGF0dGVtcHRpbmcgdG8gZGVmaW5lIGEgcmVzZXJ2ZWQgJyArXG4gICAgICAgICAgJ3Byb3BlcnR5LCBgJXNgLCB0aGF0IHNob3VsZG5cXCd0IGJlIG9uIHRoZSBcInN0YXRpY3NcIiBrZXkuIERlZmluZSBpdCAnICtcbiAgICAgICAgICAnYXMgYW4gaW5zdGFuY2UgcHJvcGVydHkgaW5zdGVhZDsgaXQgd2lsbCBzdGlsbCBiZSBhY2Nlc3NpYmxlIG9uIHRoZSAnICtcbiAgICAgICAgICAnY29uc3RydWN0b3IuJyxcbiAgICAgICAgbmFtZVxuICAgICAgKTtcblxuICAgICAgdmFyIGlzQWxyZWFkeURlZmluZWQgPSBuYW1lIGluIENvbnN0cnVjdG9yO1xuICAgICAgaWYgKGlzQWxyZWFkeURlZmluZWQpIHtcbiAgICAgICAgdmFyIHNwZWNQb2xpY3kgPSBSZWFjdENsYXNzU3RhdGljSW50ZXJmYWNlLmhhc093blByb3BlcnR5KG5hbWUpXG4gICAgICAgICAgPyBSZWFjdENsYXNzU3RhdGljSW50ZXJmYWNlW25hbWVdXG4gICAgICAgICAgOiBudWxsO1xuXG4gICAgICAgIF9pbnZhcmlhbnQoXG4gICAgICAgICAgc3BlY1BvbGljeSA9PT0gJ0RFRklORV9NQU5ZX01FUkdFRCcsXG4gICAgICAgICAgJ1JlYWN0Q2xhc3M6IFlvdSBhcmUgYXR0ZW1wdGluZyB0byBkZWZpbmUgJyArXG4gICAgICAgICAgICAnYCVzYCBvbiB5b3VyIGNvbXBvbmVudCBtb3JlIHRoYW4gb25jZS4gVGhpcyBjb25mbGljdCBtYXkgYmUgJyArXG4gICAgICAgICAgICAnZHVlIHRvIGEgbWl4aW4uJyxcbiAgICAgICAgICBuYW1lXG4gICAgICAgICk7XG5cbiAgICAgICAgQ29uc3RydWN0b3JbbmFtZV0gPSBjcmVhdGVNZXJnZWRSZXN1bHRGdW5jdGlvbihDb25zdHJ1Y3RvcltuYW1lXSwgcHJvcGVydHkpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgQ29uc3RydWN0b3JbbmFtZV0gPSBwcm9wZXJ0eTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWVyZ2UgdHdvIG9iamVjdHMsIGJ1dCB0aHJvdyBpZiBib3RoIGNvbnRhaW4gdGhlIHNhbWUga2V5LlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb25lIFRoZSBmaXJzdCBvYmplY3QsIHdoaWNoIGlzIG11dGF0ZWQuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB0d28gVGhlIHNlY29uZCBvYmplY3RcbiAgICogQHJldHVybiB7b2JqZWN0fSBvbmUgYWZ0ZXIgaXQgaGFzIGJlZW4gbXV0YXRlZCB0byBjb250YWluIGV2ZXJ5dGhpbmcgaW4gdHdvLlxuICAgKi9cbiAgZnVuY3Rpb24gbWVyZ2VJbnRvV2l0aE5vRHVwbGljYXRlS2V5cyhvbmUsIHR3bykge1xuICAgIF9pbnZhcmlhbnQoXG4gICAgICBvbmUgJiYgdHdvICYmIHR5cGVvZiBvbmUgPT09ICdvYmplY3QnICYmIHR5cGVvZiB0d28gPT09ICdvYmplY3QnLFxuICAgICAgJ21lcmdlSW50b1dpdGhOb0R1cGxpY2F0ZUtleXMoKTogQ2Fubm90IG1lcmdlIG5vbi1vYmplY3RzLidcbiAgICApO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHR3bykge1xuICAgICAgaWYgKHR3by5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIF9pbnZhcmlhbnQoXG4gICAgICAgICAgb25lW2tleV0gPT09IHVuZGVmaW5lZCxcbiAgICAgICAgICAnbWVyZ2VJbnRvV2l0aE5vRHVwbGljYXRlS2V5cygpOiAnICtcbiAgICAgICAgICAgICdUcmllZCB0byBtZXJnZSB0d28gb2JqZWN0cyB3aXRoIHRoZSBzYW1lIGtleTogYCVzYC4gVGhpcyBjb25mbGljdCAnICtcbiAgICAgICAgICAgICdtYXkgYmUgZHVlIHRvIGEgbWl4aW47IGluIHBhcnRpY3VsYXIsIHRoaXMgbWF5IGJlIGNhdXNlZCBieSB0d28gJyArXG4gICAgICAgICAgICAnZ2V0SW5pdGlhbFN0YXRlKCkgb3IgZ2V0RGVmYXVsdFByb3BzKCkgbWV0aG9kcyByZXR1cm5pbmcgb2JqZWN0cyAnICtcbiAgICAgICAgICAgICd3aXRoIGNsYXNoaW5nIGtleXMuJyxcbiAgICAgICAgICBrZXlcbiAgICAgICAgKTtcbiAgICAgICAgb25lW2tleV0gPSB0d29ba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9uZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBpbnZva2VzIHR3byBmdW5jdGlvbnMgYW5kIG1lcmdlcyB0aGVpciByZXR1cm4gdmFsdWVzLlxuICAgKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbmUgRnVuY3Rpb24gdG8gaW52b2tlIGZpcnN0LlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0d28gRnVuY3Rpb24gdG8gaW52b2tlIHNlY29uZC5cbiAgICogQHJldHVybiB7ZnVuY3Rpb259IEZ1bmN0aW9uIHRoYXQgaW52b2tlcyB0aGUgdHdvIGFyZ3VtZW50IGZ1bmN0aW9ucy5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGZ1bmN0aW9uIGNyZWF0ZU1lcmdlZFJlc3VsdEZ1bmN0aW9uKG9uZSwgdHdvKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlZFJlc3VsdCgpIHtcbiAgICAgIHZhciBhID0gb25lLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB2YXIgYiA9IHR3by5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgaWYgKGEgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gYjtcbiAgICAgIH0gZWxzZSBpZiAoYiA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBhO1xuICAgICAgfVxuICAgICAgdmFyIGMgPSB7fTtcbiAgICAgIG1lcmdlSW50b1dpdGhOb0R1cGxpY2F0ZUtleXMoYywgYSk7XG4gICAgICBtZXJnZUludG9XaXRoTm9EdXBsaWNhdGVLZXlzKGMsIGIpO1xuICAgICAgcmV0dXJuIGM7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBpbnZva2VzIHR3byBmdW5jdGlvbnMgYW5kIGlnbm9yZXMgdGhlaXIgcmV0dXJuIHZhbGVzLlxuICAgKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbmUgRnVuY3Rpb24gdG8gaW52b2tlIGZpcnN0LlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0d28gRnVuY3Rpb24gdG8gaW52b2tlIHNlY29uZC5cbiAgICogQHJldHVybiB7ZnVuY3Rpb259IEZ1bmN0aW9uIHRoYXQgaW52b2tlcyB0aGUgdHdvIGFyZ3VtZW50IGZ1bmN0aW9ucy5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluZWRGdW5jdGlvbihvbmUsIHR3bykge1xuICAgIHJldHVybiBmdW5jdGlvbiBjaGFpbmVkRnVuY3Rpb24oKSB7XG4gICAgICBvbmUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIHR3by5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQmluZHMgYSBtZXRob2QgdG8gdGhlIGNvbXBvbmVudC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBvbmVudCBDb21wb25lbnQgd2hvc2UgbWV0aG9kIGlzIGdvaW5nIHRvIGJlIGJvdW5kLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBtZXRob2QgTWV0aG9kIHRvIGJlIGJvdW5kLlxuICAgKiBAcmV0dXJuIHtmdW5jdGlvbn0gVGhlIGJvdW5kIG1ldGhvZC5cbiAgICovXG4gIGZ1bmN0aW9uIGJpbmRBdXRvQmluZE1ldGhvZChjb21wb25lbnQsIG1ldGhvZCkge1xuICAgIHZhciBib3VuZE1ldGhvZCA9IG1ldGhvZC5iaW5kKGNvbXBvbmVudCk7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGJvdW5kTWV0aG9kLl9fcmVhY3RCb3VuZENvbnRleHQgPSBjb21wb25lbnQ7XG4gICAgICBib3VuZE1ldGhvZC5fX3JlYWN0Qm91bmRNZXRob2QgPSBtZXRob2Q7XG4gICAgICBib3VuZE1ldGhvZC5fX3JlYWN0Qm91bmRBcmd1bWVudHMgPSBudWxsO1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnQuY29uc3RydWN0b3IuZGlzcGxheU5hbWU7XG4gICAgICB2YXIgX2JpbmQgPSBib3VuZE1ldGhvZC5iaW5kO1xuICAgICAgYm91bmRNZXRob2QuYmluZCA9IGZ1bmN0aW9uKG5ld1RoaXMpIHtcbiAgICAgICAgZm9yIChcbiAgICAgICAgICB2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgICAgICAgICBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLFxuICAgICAgICAgICAgX2tleSA9IDE7XG4gICAgICAgICAgX2tleSA8IF9sZW47XG4gICAgICAgICAgX2tleSsrXG4gICAgICAgICkge1xuICAgICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXNlciBpcyB0cnlpbmcgdG8gYmluZCgpIGFuIGF1dG9ib3VuZCBtZXRob2Q7IHdlIGVmZmVjdGl2ZWx5IHdpbGxcbiAgICAgICAgLy8gaWdub3JlIHRoZSB2YWx1ZSBvZiBcInRoaXNcIiB0aGF0IHRoZSB1c2VyIGlzIHRyeWluZyB0byB1c2UsIHNvXG4gICAgICAgIC8vIGxldCdzIHdhcm4uXG4gICAgICAgIGlmIChuZXdUaGlzICE9PSBjb21wb25lbnQgJiYgbmV3VGhpcyAhPT0gbnVsbCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgJ2JpbmQoKTogUmVhY3QgY29tcG9uZW50IG1ldGhvZHMgbWF5IG9ubHkgYmUgYm91bmQgdG8gdGhlICcgK1xuICAgICAgICAgICAgICAgICdjb21wb25lbnQgaW5zdGFuY2UuIFNlZSAlcycsXG4gICAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCFhcmdzLmxlbmd0aCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgJ2JpbmQoKTogWW91IGFyZSBiaW5kaW5nIGEgY29tcG9uZW50IG1ldGhvZCB0byB0aGUgY29tcG9uZW50LiAnICtcbiAgICAgICAgICAgICAgICAnUmVhY3QgZG9lcyB0aGlzIGZvciB5b3UgYXV0b21hdGljYWxseSBpbiBhIGhpZ2gtcGVyZm9ybWFuY2UgJyArXG4gICAgICAgICAgICAgICAgJ3dheSwgc28geW91IGNhbiBzYWZlbHkgcmVtb3ZlIHRoaXMgY2FsbC4gU2VlICVzJyxcbiAgICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGJvdW5kTWV0aG9kO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZWJvdW5kTWV0aG9kID0gX2JpbmQuYXBwbHkoYm91bmRNZXRob2QsIGFyZ3VtZW50cyk7XG4gICAgICAgIHJlYm91bmRNZXRob2QuX19yZWFjdEJvdW5kQ29udGV4dCA9IGNvbXBvbmVudDtcbiAgICAgICAgcmVib3VuZE1ldGhvZC5fX3JlYWN0Qm91bmRNZXRob2QgPSBtZXRob2Q7XG4gICAgICAgIHJlYm91bmRNZXRob2QuX19yZWFjdEJvdW5kQXJndW1lbnRzID0gYXJncztcbiAgICAgICAgcmV0dXJuIHJlYm91bmRNZXRob2Q7XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gYm91bmRNZXRob2Q7XG4gIH1cblxuICAvKipcbiAgICogQmluZHMgYWxsIGF1dG8tYm91bmQgbWV0aG9kcyBpbiBhIGNvbXBvbmVudC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBvbmVudCBDb21wb25lbnQgd2hvc2UgbWV0aG9kIGlzIGdvaW5nIHRvIGJlIGJvdW5kLlxuICAgKi9cbiAgZnVuY3Rpb24gYmluZEF1dG9CaW5kTWV0aG9kcyhjb21wb25lbnQpIHtcbiAgICB2YXIgcGFpcnMgPSBjb21wb25lbnQuX19yZWFjdEF1dG9CaW5kUGFpcnM7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgdmFyIGF1dG9CaW5kS2V5ID0gcGFpcnNbaV07XG4gICAgICB2YXIgbWV0aG9kID0gcGFpcnNbaSArIDFdO1xuICAgICAgY29tcG9uZW50W2F1dG9CaW5kS2V5XSA9IGJpbmRBdXRvQmluZE1ldGhvZChjb21wb25lbnQsIG1ldGhvZCk7XG4gICAgfVxuICB9XG5cbiAgdmFyIElzTW91bnRlZFByZU1peGluID0ge1xuICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX19pc01vdW50ZWQgPSB0cnVlO1xuICAgIH1cbiAgfTtcblxuICB2YXIgSXNNb3VudGVkUG9zdE1peGluID0ge1xuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX19pc01vdW50ZWQgPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCBtb3JlIHRvIHRoZSBSZWFjdENsYXNzIGJhc2UgY2xhc3MuIFRoZXNlIGFyZSBhbGwgbGVnYWN5IGZlYXR1cmVzIGFuZFxuICAgKiB0aGVyZWZvcmUgbm90IGFscmVhZHkgcGFydCBvZiB0aGUgbW9kZXJuIFJlYWN0Q29tcG9uZW50LlxuICAgKi9cbiAgdmFyIFJlYWN0Q2xhc3NNaXhpbiA9IHtcbiAgICAvKipcbiAgICAgKiBUT0RPOiBUaGlzIHdpbGwgYmUgZGVwcmVjYXRlZCBiZWNhdXNlIHN0YXRlIHNob3VsZCBhbHdheXMga2VlcCBhIGNvbnNpc3RlbnRcbiAgICAgKiB0eXBlIHNpZ25hdHVyZSBhbmQgdGhlIG9ubHkgdXNlIGNhc2UgZm9yIHRoaXMsIGlzIHRvIGF2b2lkIHRoYXQuXG4gICAgICovXG4gICAgcmVwbGFjZVN0YXRlOiBmdW5jdGlvbihuZXdTdGF0ZSwgY2FsbGJhY2spIHtcbiAgICAgIHRoaXMudXBkYXRlci5lbnF1ZXVlUmVwbGFjZVN0YXRlKHRoaXMsIG5ld1N0YXRlLCBjYWxsYmFjayk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvc2l0ZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1vdW50ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQGZpbmFsXG4gICAgICovXG4gICAgaXNNb3VudGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgdGhpcy5fX2RpZFdhcm5Jc01vdW50ZWQsXG4gICAgICAgICAgJyVzOiBpc01vdW50ZWQgaXMgZGVwcmVjYXRlZC4gSW5zdGVhZCwgbWFrZSBzdXJlIHRvIGNsZWFuIHVwICcgK1xuICAgICAgICAgICAgJ3N1YnNjcmlwdGlvbnMgYW5kIHBlbmRpbmcgcmVxdWVzdHMgaW4gY29tcG9uZW50V2lsbFVubW91bnQgdG8gJyArXG4gICAgICAgICAgICAncHJldmVudCBtZW1vcnkgbGVha3MuJyxcbiAgICAgICAgICAodGhpcy5jb25zdHJ1Y3RvciAmJiB0aGlzLmNvbnN0cnVjdG9yLmRpc3BsYXlOYW1lKSB8fFxuICAgICAgICAgICAgdGhpcy5uYW1lIHx8XG4gICAgICAgICAgICAnQ29tcG9uZW50J1xuICAgICAgICApO1xuICAgICAgICB0aGlzLl9fZGlkV2FybklzTW91bnRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gISF0aGlzLl9faXNNb3VudGVkO1xuICAgIH1cbiAgfTtcblxuICB2YXIgUmVhY3RDbGFzc0NvbXBvbmVudCA9IGZ1bmN0aW9uKCkge307XG4gIF9hc3NpZ24oXG4gICAgUmVhY3RDbGFzc0NvbXBvbmVudC5wcm90b3R5cGUsXG4gICAgUmVhY3RDb21wb25lbnQucHJvdG90eXBlLFxuICAgIFJlYWN0Q2xhc3NNaXhpblxuICApO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgY29tcG9zaXRlIGNvbXBvbmVudCBjbGFzcyBnaXZlbiBhIGNsYXNzIHNwZWNpZmljYXRpb24uXG4gICAqIFNlZSBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3RvcC1sZXZlbC1hcGkuaHRtbCNyZWFjdC5jcmVhdGVjbGFzc1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gc3BlYyBDbGFzcyBzcGVjaWZpY2F0aW9uICh3aGljaCBtdXN0IGRlZmluZSBgcmVuZGVyYCkuXG4gICAqIEByZXR1cm4ge2Z1bmN0aW9ufSBDb21wb25lbnQgY29uc3RydWN0b3IgZnVuY3Rpb24uXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGZ1bmN0aW9uIGNyZWF0ZUNsYXNzKHNwZWMpIHtcbiAgICAvLyBUbyBrZWVwIG91ciB3YXJuaW5ncyBtb3JlIHVuZGVyc3RhbmRhYmxlLCB3ZSdsbCB1c2UgYSBsaXR0bGUgaGFjayBoZXJlIHRvXG4gICAgLy8gZW5zdXJlIHRoYXQgQ29uc3RydWN0b3IubmFtZSAhPT0gJ0NvbnN0cnVjdG9yJy4gVGhpcyBtYWtlcyBzdXJlIHdlIGRvbid0XG4gICAgLy8gdW5uZWNlc3NhcmlseSBpZGVudGlmeSBhIGNsYXNzIHdpdGhvdXQgZGlzcGxheU5hbWUgYXMgJ0NvbnN0cnVjdG9yJy5cbiAgICB2YXIgQ29uc3RydWN0b3IgPSBpZGVudGl0eShmdW5jdGlvbihwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICAgICAgLy8gVGhpcyBjb25zdHJ1Y3RvciBnZXRzIG92ZXJyaWRkZW4gYnkgbW9ja3MuIFRoZSBhcmd1bWVudCBpcyB1c2VkXG4gICAgICAvLyBieSBtb2NrcyB0byBhc3NlcnQgb24gd2hhdCBnZXRzIG1vdW50ZWQuXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgdGhpcyBpbnN0YW5jZW9mIENvbnN0cnVjdG9yLFxuICAgICAgICAgICdTb21ldGhpbmcgaXMgY2FsbGluZyBhIFJlYWN0IGNvbXBvbmVudCBkaXJlY3RseS4gVXNlIGEgZmFjdG9yeSBvciAnICtcbiAgICAgICAgICAgICdKU1ggaW5zdGVhZC4gU2VlOiBodHRwczovL2ZiLm1lL3JlYWN0LWxlZ2FjeWZhY3RvcnknXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIFdpcmUgdXAgYXV0by1iaW5kaW5nXG4gICAgICBpZiAodGhpcy5fX3JlYWN0QXV0b0JpbmRQYWlycy5sZW5ndGgpIHtcbiAgICAgICAgYmluZEF1dG9CaW5kTWV0aG9kcyh0aGlzKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICAgICAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcblxuICAgICAgdGhpcy5zdGF0ZSA9IG51bGw7XG5cbiAgICAgIC8vIFJlYWN0Q2xhc3NlcyBkb2Vzbid0IGhhdmUgY29uc3RydWN0b3JzLiBJbnN0ZWFkLCB0aGV5IHVzZSB0aGVcbiAgICAgIC8vIGdldEluaXRpYWxTdGF0ZSBhbmQgY29tcG9uZW50V2lsbE1vdW50IG1ldGhvZHMgZm9yIGluaXRpYWxpemF0aW9uLlxuXG4gICAgICB2YXIgaW5pdGlhbFN0YXRlID0gdGhpcy5nZXRJbml0aWFsU3RhdGUgPyB0aGlzLmdldEluaXRpYWxTdGF0ZSgpIDogbnVsbDtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIC8vIFdlIGFsbG93IGF1dG8tbW9ja3MgdG8gcHJvY2VlZCBhcyBpZiB0aGV5J3JlIHJldHVybmluZyBudWxsLlxuICAgICAgICBpZiAoXG4gICAgICAgICAgaW5pdGlhbFN0YXRlID09PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICB0aGlzLmdldEluaXRpYWxTdGF0ZS5faXNNb2NrRnVuY3Rpb25cbiAgICAgICAgKSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBwcm9iYWJseSBiYWQgcHJhY3RpY2UuIENvbnNpZGVyIHdhcm5pbmcgaGVyZSBhbmRcbiAgICAgICAgICAvLyBkZXByZWNhdGluZyB0aGlzIGNvbnZlbmllbmNlLlxuICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIF9pbnZhcmlhbnQoXG4gICAgICAgIHR5cGVvZiBpbml0aWFsU3RhdGUgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGluaXRpYWxTdGF0ZSksXG4gICAgICAgICclcy5nZXRJbml0aWFsU3RhdGUoKTogbXVzdCByZXR1cm4gYW4gb2JqZWN0IG9yIG51bGwnLFxuICAgICAgICBDb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCAnUmVhY3RDb21wb3NpdGVDb21wb25lbnQnXG4gICAgICApO1xuXG4gICAgICB0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlO1xuICAgIH0pO1xuICAgIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IG5ldyBSZWFjdENsYXNzQ29tcG9uZW50KCk7XG4gICAgQ29uc3RydWN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3I7XG4gICAgQ29uc3RydWN0b3IucHJvdG90eXBlLl9fcmVhY3RBdXRvQmluZFBhaXJzID0gW107XG5cbiAgICBpbmplY3RlZE1peGlucy5mb3JFYWNoKG1peFNwZWNJbnRvQ29tcG9uZW50LmJpbmQobnVsbCwgQ29uc3RydWN0b3IpKTtcblxuICAgIG1peFNwZWNJbnRvQ29tcG9uZW50KENvbnN0cnVjdG9yLCBJc01vdW50ZWRQcmVNaXhpbik7XG4gICAgbWl4U3BlY0ludG9Db21wb25lbnQoQ29uc3RydWN0b3IsIHNwZWMpO1xuICAgIG1peFNwZWNJbnRvQ29tcG9uZW50KENvbnN0cnVjdG9yLCBJc01vdW50ZWRQb3N0TWl4aW4pO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgZGVmYXVsdFByb3BzIHByb3BlcnR5IGFmdGVyIGFsbCBtaXhpbnMgaGF2ZSBiZWVuIG1lcmdlZC5cbiAgICBpZiAoQ29uc3RydWN0b3IuZ2V0RGVmYXVsdFByb3BzKSB7XG4gICAgICBDb25zdHJ1Y3Rvci5kZWZhdWx0UHJvcHMgPSBDb25zdHJ1Y3Rvci5nZXREZWZhdWx0UHJvcHMoKTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gVGhpcyBpcyBhIHRhZyB0byBpbmRpY2F0ZSB0aGF0IHRoZSB1c2Ugb2YgdGhlc2UgbWV0aG9kIG5hbWVzIGlzIG9rLFxuICAgICAgLy8gc2luY2UgaXQncyB1c2VkIHdpdGggY3JlYXRlQ2xhc3MuIElmIGl0J3Mgbm90LCB0aGVuIGl0J3MgbGlrZWx5IGFcbiAgICAgIC8vIG1pc3Rha2Ugc28gd2UnbGwgd2FybiB5b3UgdG8gdXNlIHRoZSBzdGF0aWMgcHJvcGVydHksIHByb3BlcnR5XG4gICAgICAvLyBpbml0aWFsaXplciBvciBjb25zdHJ1Y3RvciByZXNwZWN0aXZlbHkuXG4gICAgICBpZiAoQ29uc3RydWN0b3IuZ2V0RGVmYXVsdFByb3BzKSB7XG4gICAgICAgIENvbnN0cnVjdG9yLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCA9IHt9O1xuICAgICAgfVxuICAgICAgaWYgKENvbnN0cnVjdG9yLnByb3RvdHlwZS5nZXRJbml0aWFsU3RhdGUpIHtcbiAgICAgICAgQ29uc3RydWN0b3IucHJvdG90eXBlLmdldEluaXRpYWxTdGF0ZS5pc1JlYWN0Q2xhc3NBcHByb3ZlZCA9IHt9O1xuICAgICAgfVxuICAgIH1cblxuICAgIF9pbnZhcmlhbnQoXG4gICAgICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUucmVuZGVyLFxuICAgICAgJ2NyZWF0ZUNsYXNzKC4uLik6IENsYXNzIHNwZWNpZmljYXRpb24gbXVzdCBpbXBsZW1lbnQgYSBgcmVuZGVyYCBtZXRob2QuJ1xuICAgICk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgd2FybmluZyhcbiAgICAgICAgIUNvbnN0cnVjdG9yLnByb3RvdHlwZS5jb21wb25lbnRTaG91bGRVcGRhdGUsXG4gICAgICAgICclcyBoYXMgYSBtZXRob2QgY2FsbGVkICcgK1xuICAgICAgICAgICdjb21wb25lbnRTaG91bGRVcGRhdGUoKS4gRGlkIHlvdSBtZWFuIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpPyAnICtcbiAgICAgICAgICAnVGhlIG5hbWUgaXMgcGhyYXNlZCBhcyBhIHF1ZXN0aW9uIGJlY2F1c2UgdGhlIGZ1bmN0aW9uIGlzICcgK1xuICAgICAgICAgICdleHBlY3RlZCB0byByZXR1cm4gYSB2YWx1ZS4nLFxuICAgICAgICBzcGVjLmRpc3BsYXlOYW1lIHx8ICdBIGNvbXBvbmVudCdcbiAgICAgICk7XG4gICAgICB3YXJuaW5nKFxuICAgICAgICAhQ29uc3RydWN0b3IucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNpZXZlUHJvcHMsXG4gICAgICAgICclcyBoYXMgYSBtZXRob2QgY2FsbGVkICcgK1xuICAgICAgICAgICdjb21wb25lbnRXaWxsUmVjaWV2ZVByb3BzKCkuIERpZCB5b3UgbWVhbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCk/JyxcbiAgICAgICAgc3BlYy5kaXNwbGF5TmFtZSB8fCAnQSBjb21wb25lbnQnXG4gICAgICApO1xuICAgICAgd2FybmluZyhcbiAgICAgICAgIUNvbnN0cnVjdG9yLnByb3RvdHlwZS5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2lldmVQcm9wcyxcbiAgICAgICAgJyVzIGhhcyBhIG1ldGhvZCBjYWxsZWQgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNpZXZlUHJvcHMoKS4gJyArXG4gICAgICAgICAgJ0RpZCB5b3UgbWVhbiBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcygpPycsXG4gICAgICAgIHNwZWMuZGlzcGxheU5hbWUgfHwgJ0EgY29tcG9uZW50J1xuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBSZWR1Y2UgdGltZSBzcGVudCBkb2luZyBsb29rdXBzIGJ5IHNldHRpbmcgdGhlc2Ugb24gdGhlIHByb3RvdHlwZS5cbiAgICBmb3IgKHZhciBtZXRob2ROYW1lIGluIFJlYWN0Q2xhc3NJbnRlcmZhY2UpIHtcbiAgICAgIGlmICghQ29uc3RydWN0b3IucHJvdG90eXBlW21ldGhvZE5hbWVdKSB7XG4gICAgICAgIENvbnN0cnVjdG9yLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZUNsYXNzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZhY3Rvcnk7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgZmFjdG9yeSA9IHJlcXVpcmUoJy4vZmFjdG9yeScpO1xuXG5pZiAodHlwZW9mIFJlYWN0ID09PSAndW5kZWZpbmVkJykge1xuICB0aHJvdyBFcnJvcihcbiAgICAnY3JlYXRlLXJlYWN0LWNsYXNzIGNvdWxkIG5vdCBmaW5kIHRoZSBSZWFjdCBvYmplY3QuIElmIHlvdSBhcmUgdXNpbmcgc2NyaXB0IHRhZ3MsICcgK1xuICAgICAgJ21ha2Ugc3VyZSB0aGF0IFJlYWN0IGlzIGJlaW5nIGxvYWRlZCBiZWZvcmUgY3JlYXRlLXJlYWN0LWNsYXNzLidcbiAgKTtcbn1cblxuLy8gSGFjayB0byBncmFiIE5vb3BVcGRhdGVRdWV1ZSBmcm9tIGlzb21vcnBoaWMgUmVhY3RcbnZhciBSZWFjdE5vb3BVcGRhdGVRdWV1ZSA9IG5ldyBSZWFjdC5Db21wb25lbnQoKS51cGRhdGVyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gIFJlYWN0LkNvbXBvbmVudCxcbiAgUmVhY3QuaXNWYWxpZEVsZW1lbnQsXG4gIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlXG4pO1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFIgPSB0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgPyBSZWZsZWN0IDogbnVsbFxudmFyIFJlZmxlY3RBcHBseSA9IFIgJiYgdHlwZW9mIFIuYXBwbHkgPT09ICdmdW5jdGlvbidcbiAgPyBSLmFwcGx5XG4gIDogZnVuY3Rpb24gUmVmbGVjdEFwcGx5KHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwodGFyZ2V0LCByZWNlaXZlciwgYXJncyk7XG4gIH1cblxudmFyIFJlZmxlY3RPd25LZXlzXG5pZiAoUiAmJiB0eXBlb2YgUi5vd25LZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gUi5vd25LZXlzXG59IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KVxuICAgICAgLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpO1xuICB9O1xufSBlbHNlIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gUHJvY2Vzc0VtaXRXYXJuaW5nKHdhcm5pbmcpIHtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS53YXJuKSBjb25zb2xlLndhcm4od2FybmluZyk7XG59XG5cbnZhciBOdW1iZXJJc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBOdW1iZXJJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIEV2ZW50RW1pdHRlci5pbml0LmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcbm1vZHVsZS5leHBvcnRzLm9uY2UgPSBvbmNlO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50c0NvdW50ID0gMDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxudmFyIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuZnVuY3Rpb24gY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcikge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50RW1pdHRlciwgJ2RlZmF1bHRNYXhMaXN0ZW5lcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24oYXJnKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcgIT09ICdudW1iZXInIHx8IGFyZyA8IDAgfHwgTnVtYmVySXNOYU4oYXJnKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcImRlZmF1bHRNYXhMaXN0ZW5lcnNcIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgYXJnICsgJy4nKTtcbiAgICB9XG4gICAgZGVmYXVsdE1heExpc3RlbmVycyA9IGFyZztcbiAgfVxufSk7XG5cbkV2ZW50RW1pdHRlci5pbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgaWYgKHRoaXMuX2V2ZW50cyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICB0aGlzLl9ldmVudHMgPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5fZXZlbnRzKSB7XG4gICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufTtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gc2V0TWF4TGlzdGVuZXJzKG4pIHtcbiAgaWYgKHR5cGVvZiBuICE9PSAnbnVtYmVyJyB8fCBuIDwgMCB8fCBOdW1iZXJJc05hTihuKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJuXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIG4gKyAnLicpO1xuICB9XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gX2dldE1heExpc3RlbmVycyh0aGF0KSB7XG4gIGlmICh0aGF0Ll9tYXhMaXN0ZW5lcnMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIHJldHVybiB0aGF0Ll9tYXhMaXN0ZW5lcnM7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZ2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gZ2V0TWF4TGlzdGVuZXJzKCkge1xuICByZXR1cm4gX2dldE1heExpc3RlbmVycyh0aGlzKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQodHlwZSkge1xuICB2YXIgYXJncyA9IFtdO1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIHZhciBkb0Vycm9yID0gKHR5cGUgPT09ICdlcnJvcicpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZClcbiAgICBkb0Vycm9yID0gKGRvRXJyb3IgJiYgZXZlbnRzLmVycm9yID09PSB1bmRlZmluZWQpO1xuICBlbHNlIGlmICghZG9FcnJvcilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAoZG9FcnJvcikge1xuICAgIHZhciBlcjtcbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKVxuICAgICAgZXIgPSBhcmdzWzBdO1xuICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAvLyBOb3RlOiBUaGUgY29tbWVudHMgb24gdGhlIGB0aHJvd2AgbGluZXMgYXJlIGludGVudGlvbmFsLCB0aGV5IHNob3dcbiAgICAgIC8vIHVwIGluIE5vZGUncyBvdXRwdXQgaWYgdGhpcyByZXN1bHRzIGluIGFuIHVuaGFuZGxlZCBleGNlcHRpb24uXG4gICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICB9XG4gICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1VuaGFuZGxlZCBlcnJvci4nICsgKGVyID8gJyAoJyArIGVyLm1lc3NhZ2UgKyAnKScgOiAnJykpO1xuICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgdGhyb3cgZXJyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICB9XG5cbiAgdmFyIGhhbmRsZXIgPSBldmVudHNbdHlwZV07XG5cbiAgaWYgKGhhbmRsZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgUmVmbGVjdEFwcGx5KGhhbmRsZXIsIHRoaXMsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW4gPSBoYW5kbGVyLmxlbmd0aDtcbiAgICB2YXIgbGlzdGVuZXJzID0gYXJyYXlDbG9uZShoYW5kbGVyLCBsZW4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpXG4gICAgICBSZWZsZWN0QXBwbHkobGlzdGVuZXJzW2ldLCB0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZnVuY3Rpb24gX2FkZExpc3RlbmVyKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIHByZXBlbmQpIHtcbiAgdmFyIG07XG4gIHZhciBldmVudHM7XG4gIHZhciBleGlzdGluZztcblxuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRhcmdldC5fZXZlbnRzQ291bnQgPSAwO1xuICB9IGVsc2Uge1xuICAgIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gICAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICAgIGlmIChldmVudHMubmV3TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0LmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyID8gbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgICAgIC8vIFJlLWFzc2lnbiBgZXZlbnRzYCBiZWNhdXNlIGEgbmV3TGlzdGVuZXIgaGFuZGxlciBjb3VsZCBoYXZlIGNhdXNlZCB0aGVcbiAgICAgIC8vIHRoaXMuX2V2ZW50cyB0byBiZSBhc3NpZ25lZCB0byBhIG5ldyBvYmplY3RcbiAgICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICAgIH1cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXTtcbiAgfVxuXG4gIGlmIChleGlzdGluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgICArK3RhcmdldC5fZXZlbnRzQ291bnQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiBleGlzdGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9XG4gICAgICAgIHByZXBlbmQgPyBbbGlzdGVuZXIsIGV4aXN0aW5nXSA6IFtleGlzdGluZywgbGlzdGVuZXJdO1xuICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIH0gZWxzZSBpZiAocHJlcGVuZCkge1xuICAgICAgZXhpc3RpbmcudW5zaGlmdChsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4aXN0aW5nLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gICAgbSA9IF9nZXRNYXhMaXN0ZW5lcnModGFyZ2V0KTtcbiAgICBpZiAobSA+IDAgJiYgZXhpc3RpbmcubGVuZ3RoID4gbSAmJiAhZXhpc3Rpbmcud2FybmVkKSB7XG4gICAgICBleGlzdGluZy53YXJuZWQgPSB0cnVlO1xuICAgICAgLy8gTm8gZXJyb3IgY29kZSBmb3IgdGhpcyBzaW5jZSBpdCBpcyBhIFdhcm5pbmdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgdmFyIHcgPSBuZXcgRXJyb3IoJ1Bvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgbGVhayBkZXRlY3RlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLmxlbmd0aCArICcgJyArIFN0cmluZyh0eXBlKSArICcgbGlzdGVuZXJzICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnYWRkZWQuIFVzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnaW5jcmVhc2UgbGltaXQnKTtcbiAgICAgIHcubmFtZSA9ICdNYXhMaXN0ZW5lcnNFeGNlZWRlZFdhcm5pbmcnO1xuICAgICAgdy5lbWl0dGVyID0gdGFyZ2V0O1xuICAgICAgdy50eXBlID0gdHlwZTtcbiAgICAgIHcuY291bnQgPSBleGlzdGluZy5sZW5ndGg7XG4gICAgICBQcm9jZXNzRW1pdFdhcm5pbmcodyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCB0cnVlKTtcbiAgICB9O1xuXG5mdW5jdGlvbiBvbmNlV3JhcHBlcigpIHtcbiAgaWYgKCF0aGlzLmZpcmVkKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIodGhpcy50eXBlLCB0aGlzLndyYXBGbik7XG4gICAgdGhpcy5maXJlZCA9IHRydWU7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5jYWxsKHRoaXMudGFyZ2V0KTtcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5hcHBseSh0aGlzLnRhcmdldCwgYXJndW1lbnRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb25jZVdyYXAodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgc3RhdGUgPSB7IGZpcmVkOiBmYWxzZSwgd3JhcEZuOiB1bmRlZmluZWQsIHRhcmdldDogdGFyZ2V0LCB0eXBlOiB0eXBlLCBsaXN0ZW5lcjogbGlzdGVuZXIgfTtcbiAgdmFyIHdyYXBwZWQgPSBvbmNlV3JhcHBlci5iaW5kKHN0YXRlKTtcbiAgd3JhcHBlZC5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICBzdGF0ZS53cmFwRm4gPSB3cmFwcGVkO1xuICByZXR1cm4gd3JhcHBlZDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSh0eXBlLCBsaXN0ZW5lcikge1xuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgdGhpcy5vbih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRPbmNlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgdGhpcy5wcmVwZW5kTGlzdGVuZXIodHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4vLyBFbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWYgYW5kIG9ubHkgaWYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBsaXN0LCBldmVudHMsIHBvc2l0aW9uLCBpLCBvcmlnaW5hbExpc3RlbmVyO1xuXG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgbGlzdCA9IGV2ZW50c1t0eXBlXTtcbiAgICAgIGlmIChsaXN0ID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHwgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3QubGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBvc2l0aW9uID0gLTE7XG5cbiAgICAgICAgZm9yIChpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fCBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgb3JpZ2luYWxMaXN0ZW5lciA9IGxpc3RbaV0ubGlzdGVuZXI7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gMClcbiAgICAgICAgICBsaXN0LnNoaWZ0KCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNwbGljZU9uZShsaXN0LCBwb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpXG4gICAgICAgICAgZXZlbnRzW3R5cGVdID0gbGlzdFswXTtcblxuICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIG9yaWdpbmFsTGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbiAgICBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnModHlwZSkge1xuICAgICAgdmFyIGxpc3RlbmVycywgZXZlbnRzLCBpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudHNbdHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZXZlbnRzKTtcbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGxpc3RlbmVycyA9IGV2ZW50c1t0eXBlXTtcblxuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBMSUZPIG9yZGVyXG4gICAgICAgIGZvciAoaSA9IGxpc3RlbmVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5mdW5jdGlvbiBfbGlzdGVuZXJzKHRhcmdldCwgdHlwZSwgdW53cmFwKSB7XG4gIHZhciBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuICBpZiAoZXZsaXN0ZW5lciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpXG4gICAgcmV0dXJuIHVud3JhcCA/IFtldmxpc3RlbmVyLmxpc3RlbmVyIHx8IGV2bGlzdGVuZXJdIDogW2V2bGlzdGVuZXJdO1xuXG4gIHJldHVybiB1bndyYXAgP1xuICAgIHVud3JhcExpc3RlbmVycyhldmxpc3RlbmVyKSA6IGFycmF5Q2xvbmUoZXZsaXN0ZW5lciwgZXZsaXN0ZW5lci5sZW5ndGgpO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIHRydWUpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yYXdMaXN0ZW5lcnMgPSBmdW5jdGlvbiByYXdMaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLmxpc3RlbmVyQ291bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsaXN0ZW5lckNvdW50LmNhbGwoZW1pdHRlciwgdHlwZSk7XG4gIH1cbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGxpc3RlbmVyQ291bnQ7XG5mdW5jdGlvbiBsaXN0ZW5lckNvdW50KHR5cGUpIHtcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcblxuICAgIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChldmxpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gMDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgcmV0dXJuIHRoaXMuX2V2ZW50c0NvdW50ID4gMCA/IFJlZmxlY3RPd25LZXlzKHRoaXMuX2V2ZW50cykgOiBbXTtcbn07XG5cbmZ1bmN0aW9uIGFycmF5Q2xvbmUoYXJyLCBuKSB7XG4gIHZhciBjb3B5ID0gbmV3IEFycmF5KG4pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSlcbiAgICBjb3B5W2ldID0gYXJyW2ldO1xuICByZXR1cm4gY29weTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlT25lKGxpc3QsIGluZGV4KSB7XG4gIGZvciAoOyBpbmRleCArIDEgPCBsaXN0Lmxlbmd0aDsgaW5kZXgrKylcbiAgICBsaXN0W2luZGV4XSA9IGxpc3RbaW5kZXggKyAxXTtcbiAgbGlzdC5wb3AoKTtcbn1cblxuZnVuY3Rpb24gdW53cmFwTGlzdGVuZXJzKGFycikge1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KGFyci5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJldC5sZW5ndGg7ICsraSkge1xuICAgIHJldFtpXSA9IGFycltpXS5saXN0ZW5lciB8fCBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gb25jZShlbWl0dGVyLCBuYW1lKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgZnVuY3Rpb24gZXZlbnRMaXN0ZW5lcigpIHtcbiAgICAgIGlmIChlcnJvckxpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZW1pdHRlci5yZW1vdmVMaXN0ZW5lcignZXJyb3InLCBlcnJvckxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIHJlc29sdmUoW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICB9O1xuICAgIHZhciBlcnJvckxpc3RlbmVyO1xuXG4gICAgLy8gQWRkaW5nIGFuIGVycm9yIGxpc3RlbmVyIGlzIG5vdCBvcHRpb25hbCBiZWNhdXNlXG4gICAgLy8gaWYgYW4gZXJyb3IgaXMgdGhyb3duIG9uIGFuIGV2ZW50IGVtaXR0ZXIgd2UgY2Fubm90XG4gICAgLy8gZ3VhcmFudGVlIHRoYXQgdGhlIGFjdHVhbCBldmVudCB3ZSBhcmUgd2FpdGluZyB3aWxsXG4gICAgLy8gYmUgZmlyZWQuIFRoZSByZXN1bHQgY291bGQgYmUgYSBzaWxlbnQgd2F5IHRvIGNyZWF0ZVxuICAgIC8vIG1lbW9yeSBvciBmaWxlIGRlc2NyaXB0b3IgbGVha3MsIHdoaWNoIGlzIHNvbWV0aGluZ1xuICAgIC8vIHdlIHNob3VsZCBhdm9pZC5cbiAgICBpZiAobmFtZSAhPT0gJ2Vycm9yJykge1xuICAgICAgZXJyb3JMaXN0ZW5lciA9IGZ1bmN0aW9uIGVycm9yTGlzdGVuZXIoZXJyKSB7XG4gICAgICAgIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIobmFtZSwgZXZlbnRMaXN0ZW5lcik7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfTtcblxuICAgICAgZW1pdHRlci5vbmNlKCdlcnJvcicsIGVycm9yTGlzdGVuZXIpO1xuICAgIH1cblxuICAgIGVtaXR0ZXIub25jZShuYW1lLCBldmVudExpc3RlbmVyKTtcbiAgfSk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBcbiAqL1xuXG5mdW5jdGlvbiBtYWtlRW1wdHlGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYXJnO1xuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyBhbmQgZGlzY2FyZHMgaW5wdXRzOyBpdCBoYXMgbm8gc2lkZSBlZmZlY3RzLiBUaGlzIGlzXG4gKiBwcmltYXJpbHkgdXNlZnVsIGlkaW9tYXRpY2FsbHkgZm9yIG92ZXJyaWRhYmxlIGZ1bmN0aW9uIGVuZHBvaW50cyB3aGljaFxuICogYWx3YXlzIG5lZWQgdG8gYmUgY2FsbGFibGUsIHNpbmNlIEpTIGxhY2tzIGEgbnVsbC1jYWxsIGlkaW9tIGFsYSBDb2NvYS5cbiAqL1xudmFyIGVtcHR5RnVuY3Rpb24gPSBmdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge307XG5cbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnMgPSBtYWtlRW1wdHlGdW5jdGlvbjtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNGYWxzZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKGZhbHNlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlID0gbWFrZUVtcHR5RnVuY3Rpb24odHJ1ZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCA9IG1ha2VFbXB0eUZ1bmN0aW9uKG51bGwpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RoaXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzO1xufTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIGFyZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW1wdHlGdW5jdGlvbjsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eU9iamVjdCA9IHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eU9iamVjdDsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgdmFsaWRhdGVGb3JtYXQoZm9ybWF0KTtcblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKCdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICsgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSkpO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJy4vZW1wdHlGdW5jdGlvbicpO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGVtcHR5RnVuY3Rpb247XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiBwcmludFdhcm5pbmcoZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcblxuICB3YXJuaW5nID0gZnVuY3Rpb24gd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0LmluZGV4T2YoJ0ZhaWxlZCBDb21wb3NpdGUgcHJvcFR5cGU6ICcpID09PSAwKSB7XG4gICAgICByZXR1cm47IC8vIElnbm9yZSBDb21wb3NpdGVDb21wb25lbnQgcHJvcHR5cGUgY2hlY2suXG4gICAgfVxuXG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZzsiLCIvKipcbiAqIGxvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanF1ZXJ5Lm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgdGhlIGBUeXBlRXJyb3JgIG1lc3NhZ2UgZm9yIFwiRnVuY3Rpb25zXCIgbWV0aG9kcy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE5BTiA9IDAgLyAwO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltID0gL15cXHMrfFxccyskL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIEdldHMgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IGhhdmUgZWxhcHNlZCBzaW5jZVxuICogdGhlIFVuaXggZXBvY2ggKDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IERhdGVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHRpbWVzdGFtcC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZlcihmdW5jdGlvbihzdGFtcCkge1xuICogICBjb25zb2xlLmxvZyhfLm5vdygpIC0gc3RhbXApO1xuICogfSwgXy5ub3coKSk7XG4gKiAvLyA9PiBMb2dzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRvb2sgZm9yIHRoZSBkZWZlcnJlZCBpbnZvY2F0aW9uLlxuICovXG52YXIgbm93ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByb290LkRhdGUubm93KCk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0byBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS5cbiAqIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZVxuICogbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZFxuICogd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbi4gU3Vic2VxdWVudFxuICogY2FsbHMgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbiByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2BcbiAqIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8uZGVib3VuY2VgIGFuZCBgXy50aHJvdHRsZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBkZWJvdW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPWZhbHNlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhXYWl0XVxuICogIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQncyBpbnZva2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGNvc3RseSBjYWxjdWxhdGlvbnMgd2hpbGUgdGhlIHdpbmRvdyBzaXplIGlzIGluIGZsdXguXG4gKiBqUXVlcnkod2luZG93KS5vbigncmVzaXplJywgXy5kZWJvdW5jZShjYWxjdWxhdGVMYXlvdXQsIDE1MCkpO1xuICpcbiAqIC8vIEludm9rZSBgc2VuZE1haWxgIHdoZW4gY2xpY2tlZCwgZGVib3VuY2luZyBzdWJzZXF1ZW50IGNhbGxzLlxuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIF8uZGVib3VuY2Uoc2VuZE1haWwsIDMwMCwge1xuICogICAnbGVhZGluZyc6IHRydWUsXG4gKiAgICd0cmFpbGluZyc6IGZhbHNlXG4gKiB9KSk7XG4gKlxuICogLy8gRW5zdXJlIGBiYXRjaExvZ2AgaXMgaW52b2tlZCBvbmNlIGFmdGVyIDEgc2Vjb25kIG9mIGRlYm91bmNlZCBjYWxscy5cbiAqIHZhciBkZWJvdW5jZWQgPSBfLmRlYm91bmNlKGJhdGNoTG9nLCAyNTAsIHsgJ21heFdhaXQnOiAxMDAwIH0pO1xuICogdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSgnL3N0cmVhbScpO1xuICogalF1ZXJ5KHNvdXJjZSkub24oJ21lc3NhZ2UnLCBkZWJvdW5jZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgZGVib3VuY2VkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCBkZWJvdW5jZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGFzdEFyZ3MsXG4gICAgICBsYXN0VGhpcyxcbiAgICAgIG1heFdhaXQsXG4gICAgICByZXN1bHQsXG4gICAgICB0aW1lcklkLFxuICAgICAgbGFzdENhbGxUaW1lLFxuICAgICAgbGFzdEludm9rZVRpbWUgPSAwLFxuICAgICAgbGVhZGluZyA9IGZhbHNlLFxuICAgICAgbWF4aW5nID0gZmFsc2UsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgd2FpdCA9IHRvTnVtYmVyKHdhaXQpIHx8IDA7XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAhIW9wdGlvbnMubGVhZGluZztcbiAgICBtYXhpbmcgPSAnbWF4V2FpdCcgaW4gb3B0aW9ucztcbiAgICBtYXhXYWl0ID0gbWF4aW5nID8gbmF0aXZlTWF4KHRvTnVtYmVyKG9wdGlvbnMubWF4V2FpdCkgfHwgMCwgd2FpdCkgOiBtYXhXYWl0O1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VGdW5jKHRpbWUpIHtcbiAgICB2YXIgYXJncyA9IGxhc3RBcmdzLFxuICAgICAgICB0aGlzQXJnID0gbGFzdFRoaXM7XG5cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBsZWFkaW5nRWRnZSh0aW1lKSB7XG4gICAgLy8gUmVzZXQgYW55IGBtYXhXYWl0YCB0aW1lci5cbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgLy8gU3RhcnQgdGhlIHRpbWVyIGZvciB0aGUgdHJhaWxpbmcgZWRnZS5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIC8vIEludm9rZSB0aGUgbGVhZGluZyBlZGdlLlxuICAgIHJldHVybiBsZWFkaW5nID8gaW52b2tlRnVuYyh0aW1lKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbWFpbmluZ1dhaXQodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWUsXG4gICAgICAgIHJlc3VsdCA9IHdhaXQgLSB0aW1lU2luY2VMYXN0Q2FsbDtcblxuICAgIHJldHVybiBtYXhpbmcgPyBuYXRpdmVNaW4ocmVzdWx0LCBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9rZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRJbnZva2UodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAvLyBFaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCwgYWN0aXZpdHkgaGFzIHN0b3BwZWQgYW5kIHdlJ3JlIGF0IHRoZVxuICAgIC8vIHRyYWlsaW5nIGVkZ2UsIHRoZSBzeXN0ZW0gdGltZSBoYXMgZ29uZSBiYWNrd2FyZHMgYW5kIHdlJ3JlIHRyZWF0aW5nXG4gICAgLy8gaXQgYXMgdGhlIHRyYWlsaW5nIGVkZ2UsIG9yIHdlJ3ZlIGhpdCB0aGUgYG1heFdhaXRgIGxpbWl0LlxuICAgIHJldHVybiAobGFzdENhbGxUaW1lID09PSB1bmRlZmluZWQgfHwgKHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQpIHx8XG4gICAgICAodGltZVNpbmNlTGFzdENhbGwgPCAwKSB8fCAobWF4aW5nICYmIHRpbWVTaW5jZUxhc3RJbnZva2UgPj0gbWF4V2FpdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZXJFeHBpcmVkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgaWYgKHNob3VsZEludm9rZSh0aW1lKSkge1xuICAgICAgcmV0dXJuIHRyYWlsaW5nRWRnZSh0aW1lKTtcbiAgICB9XG4gICAgLy8gUmVzdGFydCB0aGUgdGltZXIuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCByZW1haW5pbmdXYWl0KHRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIE9ubHkgaW52b2tlIGlmIHdlIGhhdmUgYGxhc3RBcmdzYCB3aGljaCBtZWFucyBgZnVuY2AgaGFzIGJlZW5cbiAgICAvLyBkZWJvdW5jZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIH1cbiAgICBsYXN0SW52b2tlVGltZSA9IDA7XG4gICAgbGFzdEFyZ3MgPSBsYXN0Q2FsbFRpbWUgPSBsYXN0VGhpcyA9IHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGltZXJJZCA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdHJhaWxpbmdFZGdlKG5vdygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpLFxuICAgICAgICBpc0ludm9raW5nID0gc2hvdWxkSW52b2tlKHRpbWUpO1xuXG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG5cbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbmcpIHtcbiAgICAgICAgLy8gSGFuZGxlIGludm9jYXRpb25zIGluIGEgdGlnaHQgbG9vcC5cbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAgICAgcmV0dXJuIGludm9rZUZ1bmMobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICBkZWJvdW5jZWQuZmx1c2ggPSBmbHVzaDtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVib3VuY2U7XG4iLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxuLy8gSWYgb2JqLmhhc093blByb3BlcnR5IGhhcyBiZWVuIG92ZXJyaWRkZW4sIHRoZW4gY2FsbGluZ1xuLy8gb2JqLmhhc093blByb3BlcnR5KHByb3ApIHdpbGwgYnJlYWsuXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9qb3llbnQvbm9kZS9pc3N1ZXMvMTcwN1xuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihxcywgc2VwLCBlcSwgb3B0aW9ucykge1xuICBzZXAgPSBzZXAgfHwgJyYnO1xuICBlcSA9IGVxIHx8ICc9JztcbiAgdmFyIG9iaiA9IHt9O1xuXG4gIGlmICh0eXBlb2YgcXMgIT09ICdzdHJpbmcnIHx8IHFzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICB2YXIgcmVnZXhwID0gL1xcKy9nO1xuICBxcyA9IHFzLnNwbGl0KHNlcCk7XG5cbiAgdmFyIG1heEtleXMgPSAxMDAwO1xuICBpZiAob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5tYXhLZXlzID09PSAnbnVtYmVyJykge1xuICAgIG1heEtleXMgPSBvcHRpb25zLm1heEtleXM7XG4gIH1cblxuICB2YXIgbGVuID0gcXMubGVuZ3RoO1xuICAvLyBtYXhLZXlzIDw9IDAgbWVhbnMgdGhhdCB3ZSBzaG91bGQgbm90IGxpbWl0IGtleXMgY291bnRcbiAgaWYgKG1heEtleXMgPiAwICYmIGxlbiA+IG1heEtleXMpIHtcbiAgICBsZW4gPSBtYXhLZXlzO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIHZhciB4ID0gcXNbaV0ucmVwbGFjZShyZWdleHAsICclMjAnKSxcbiAgICAgICAgaWR4ID0geC5pbmRleE9mKGVxKSxcbiAgICAgICAga3N0ciwgdnN0ciwgaywgdjtcblxuICAgIGlmIChpZHggPj0gMCkge1xuICAgICAga3N0ciA9IHguc3Vic3RyKDAsIGlkeCk7XG4gICAgICB2c3RyID0geC5zdWJzdHIoaWR4ICsgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtzdHIgPSB4O1xuICAgICAgdnN0ciA9ICcnO1xuICAgIH1cblxuICAgIGsgPSBkZWNvZGVVUklDb21wb25lbnQoa3N0cik7XG4gICAgdiA9IGRlY29kZVVSSUNvbXBvbmVudCh2c3RyKTtcblxuICAgIGlmICghaGFzT3duUHJvcGVydHkob2JqLCBrKSkge1xuICAgICAgb2JqW2tdID0gdjtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgb2JqW2tdLnB1c2godik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9ialtrXSA9IFtvYmpba10sIHZdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmo7XG59O1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHhzKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeHMpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBzdHJpbmdpZnlQcmltaXRpdmUgPSBmdW5jdGlvbih2KSB7XG4gIHN3aXRjaCAodHlwZW9mIHYpIHtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgcmV0dXJuIHY7XG5cbiAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIHJldHVybiB2ID8gJ3RydWUnIDogJ2ZhbHNlJztcblxuICAgIGNhc2UgJ251bWJlcic6XG4gICAgICByZXR1cm4gaXNGaW5pdGUodikgPyB2IDogJyc7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iaiwgc2VwLCBlcSwgbmFtZSkge1xuICBzZXAgPSBzZXAgfHwgJyYnO1xuICBlcSA9IGVxIHx8ICc9JztcbiAgaWYgKG9iaiA9PT0gbnVsbCkge1xuICAgIG9iaiA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBtYXAob2JqZWN0S2V5cyhvYmopLCBmdW5jdGlvbihrKSB7XG4gICAgICB2YXIga3MgPSBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKGspKSArIGVxO1xuICAgICAgaWYgKGlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgICByZXR1cm4gbWFwKG9ialtrXSwgZnVuY3Rpb24odikge1xuICAgICAgICAgIHJldHVybiBrcyArIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUodikpO1xuICAgICAgICB9KS5qb2luKHNlcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ga3MgKyBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKG9ialtrXSkpO1xuICAgICAgfVxuICAgIH0pLmpvaW4oc2VwKTtcblxuICB9XG5cbiAgaWYgKCFuYW1lKSByZXR1cm4gJyc7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKG5hbWUpKSArIGVxICtcbiAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUob2JqKSk7XG59O1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHhzKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeHMpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxuZnVuY3Rpb24gbWFwICh4cywgZikge1xuICBpZiAoeHMubWFwKSByZXR1cm4geHMubWFwKGYpO1xuICB2YXIgcmVzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgeHMubGVuZ3RoOyBpKyspIHtcbiAgICByZXMucHVzaChmKHhzW2ldLCBpKSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cblxudmFyIG9iamVjdEtleXMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiAob2JqKSB7XG4gIHZhciByZXMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSByZXMucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLmRlY29kZSA9IGV4cG9ydHMucGFyc2UgPSByZXF1aXJlKCcuL2RlY29kZScpO1xuZXhwb3J0cy5lbmNvZGUgPSBleHBvcnRzLnN0cmluZ2lmeSA9IHJlcXVpcmUoJy4vZW5jb2RlJyk7XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBGcmFnbWVudCwgUHVyZUNvbXBvbmVudCwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoLmRlYm91bmNlJztcblxuLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxudmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LWZ1bmN0aW9uLXJldHVybi10eXBlLCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktZnVuY3Rpb24gKi9cclxuLyoqXHJcbiAqIERlZmF1bHQgdmFsdWVzXHJcbiAqL1xyXG52YXIgZGVmYXVsdHMgPSB7XHJcbiAgICBhdXRvQWN0aXZhdGVGaXJzdFN1Z2dlc3Q6IGZhbHNlLFxyXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgZml4dHVyZXM6IFtdLFxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgIGdldFN1Z2dlc3RMYWJlbDogZnVuY3Rpb24gKHN1Z2dlc3QpIHsgcmV0dXJuIHN1Z2dlc3QuZGVzY3JpcHRpb247IH0sXHJcbiAgICBoaWdobGlnaHRNYXRjaDogdHJ1ZSxcclxuICAgIGlnbm9yZUVudGVyOiBmYWxzZSxcclxuICAgIGlnbm9yZVRhYjogZmFsc2UsXHJcbiAgICBpbml0aWFsVmFsdWU6ICcnLFxyXG4gICAgbWF4Rml4dHVyZXM6IDEwLFxyXG4gICAgbWluTGVuZ3RoOiAxLFxyXG4gICAgb25LZXlEb3duOiBmdW5jdGlvbiAoKSB7IH0sXHJcbiAgICBvbktleVByZXNzOiBmdW5jdGlvbiAoKSB7IH0sXHJcbiAgICBwbGFjZWhvbGRlcjogJ1NlYXJjaCBwbGFjZXMnLFxyXG4gICAgcXVlcnlEZWxheTogMjUwLFxyXG4gICAgc2tpcFN1Z2dlc3Q6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxyXG4gICAgc3R5bGU6IHt9LFxyXG4gICAgaW5wdXRUeXBlOiAndGV4dCdcclxufTtcblxuLyoqXHJcbiAqIEF0dHJpYnV0ZXMgYWxsb3dlZCBvbiBpbnB1dCBlbGVtZW50c1xyXG4gKi9cclxudmFyIGFsbG93ZWRBdHRyaWJ1dGVzID0gW1xyXG4gICAgJ2F1dG9DYXBpdGFsaXplJyxcclxuICAgICdhdXRvQ29tcGxldGUnLFxyXG4gICAgJ2F1dG9Db3JyZWN0JyxcclxuICAgICdhdXRvRm9jdXMnLFxyXG4gICAgJ2Rpc2FibGVkJyxcclxuICAgICdmb3JtJyxcclxuICAgICdmb3JtQWN0aW9uJyxcclxuICAgICdmb3JtRW5jVHlwZScsXHJcbiAgICAnZm9ybU1ldGhvZCcsXHJcbiAgICAnZm9ybU5vVmFsaWRhdGUnLFxyXG4gICAgJ2Zvcm1UYXJnZXQnLFxyXG4gICAgJ2hlaWdodCcsXHJcbiAgICAnaW5wdXRNb2RlJyxcclxuICAgICdtYXhMZW5ndGgnLFxyXG4gICAgJ25hbWUnLFxyXG4gICAgJ29uQ2xpY2snLFxyXG4gICAgJ29uQ29udGV4dE1lbnUnLFxyXG4gICAgJ29uQ29weScsXHJcbiAgICAnb25DdXQnLFxyXG4gICAgJ29uRG91YmxlQ2xpY2snLFxyXG4gICAgJ29uTW91c2VEb3duJyxcclxuICAgICdvbk1vdXNlRW50ZXInLFxyXG4gICAgJ29uTW91c2VMZWF2ZScsXHJcbiAgICAnb25Nb3VzZU1vdmUnLFxyXG4gICAgJ29uTW91c2VPdXQnLFxyXG4gICAgJ29uTW91c2VPdmVyJyxcclxuICAgICdvbk1vdXNlVXAnLFxyXG4gICAgJ29uUGFzdGUnLFxyXG4gICAgJ3BhdHRlcm4nLFxyXG4gICAgJ3BsYWNlaG9sZGVyJyxcclxuICAgICdyZWFkT25seScsXHJcbiAgICAncmVxdWlyZWQnLFxyXG4gICAgJ3NpemUnLFxyXG4gICAgJ3NwZWxsQ2hlY2snLFxyXG4gICAgJ3RhYkluZGV4JyxcclxuICAgICd0aXRsZScsXHJcbiAgICAnYXJpYS1hdG9taWMnLFxyXG4gICAgJ2FyaWEtYnVzeScsXHJcbiAgICAnYXJpYS1jb250cm9scycsXHJcbiAgICAnYXJpYS1jdXJyZW50JyxcclxuICAgICdhcmlhLWRlc2NyaWJlZGJ5JyxcclxuICAgICdhcmlhLWRldGFpbHMnLFxyXG4gICAgJ2FyaWEtZGlzYWJsZWQnLFxyXG4gICAgJ2FyaWEtZHJvcGVmZmVjdCcsXHJcbiAgICAnYXJpYS1lcnJvcm1lc3NhZ2UnLFxyXG4gICAgJ2FyaWEtZmxvd3RvJyxcclxuICAgICdhcmlhLWdyYWJiZWQnLFxyXG4gICAgJ2FyaWEtaGFzcG9wdXAnLFxyXG4gICAgJ2FyaWEtaGlkZGVuJyxcclxuICAgICdhcmlhLWludmFsaWQnLFxyXG4gICAgJ2FyaWEta2V5c2hvcnRjdXRzJyxcclxuICAgICdhcmlhLWxhYmVsJyxcclxuICAgICdhcmlhLWxhYmVsbGVkYnknLFxyXG4gICAgJ2FyaWEtbGl2ZScsXHJcbiAgICAnYXJpYS1vd25zJyxcclxuICAgICdhcmlhLXJlbGV2YW50JyxcclxuICAgICdhcmlhLXJvbGVkZXNjcmlwdGlvbicsXHJcbiAgICAnYXJpYS1hY3RpdmVkZXNjZW5kYW50JyxcclxuICAgICdhcmlhLWF1dG9jb21wbGV0ZScsXHJcbiAgICAnYXJpYS1tdWx0aWxpbmUnLFxyXG4gICAgJ2FyaWEtcGxhY2Vob2xkZXInLFxyXG4gICAgJ2FyaWEtcmVhZG9ubHknLFxyXG4gICAgJ2FyaWEtcmVxdWlyZWQnXHJcbl07XHJcbi8qKlxyXG4gKiBGaWx0ZXIgdGhlIHByb3BlcnRpZXMgZm9yIG9ubHkgYWxsb3dlZCBpbnB1dCBwcm9wZXJ0aWVzXHJcbiAqL1xyXG5mdW5jdGlvbiBmaWx0ZXJJbnB1dEF0dHJpYnV0ZXMgKHByb3BzKSB7XHJcbiAgICB2YXIgYXR0cmlidXRlcyA9IHt9O1xyXG4gICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xyXG4gICAgICAgIHZhciBpc0RhdGFBdHRyaWJ1dGUgPSBhdHRyaWJ1dGUuc3RhcnRzV2l0aCgnZGF0YS0nKTtcclxuICAgICAgICB2YXIgaXNBbGxvd2VkQXR0cmlidXRlID0gYWxsb3dlZEF0dHJpYnV0ZXMuaW5jbHVkZXMoYXR0cmlidXRlKTtcclxuICAgICAgICBpZiAoaXNBbGxvd2VkQXR0cmlidXRlIHx8IGlzRGF0YUF0dHJpYnV0ZSkge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzW2F0dHJpYnV0ZV0gPSBwcm9wc1thdHRyaWJ1dGVdO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGF0dHJpYnV0ZXM7XHJcbn1cblxuLyoqXHJcbiAqIFRoZSBpbnB1dCBmaWVsZFxyXG4gKi9cclxudmFyIElucHV0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKElucHV0LCBfc3VwZXIpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY29uc3RydWN0b3IuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIElucHV0KHByb3BzKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XHJcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktZnVuY3Rpb24gKi9cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgcmVmZXJlbmNlIHRvIHRoZSBpbnB1dCBlbGVtZW50XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgX3RoaXMuaW5wdXQgPSBudWxsO1xyXG4gICAgICAgIF90aGlzLm9uQ2hhbmdlID0gX3RoaXMub25DaGFuZ2UuYmluZChfdGhpcyk7XHJcbiAgICAgICAgX3RoaXMub25JbnB1dEtleURvd24gPSBfdGhpcy5vbklucHV0S2V5RG93bi5iaW5kKF90aGlzKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFdoZW4gdGhlIGlucHV0IGdvdCBjaGFuZ2VkXHJcbiAgICAgKi9cclxuICAgIElucHV0LnByb3RvdHlwZS5vbkNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5pbnB1dCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMuaW5wdXQudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFdoZW4gYSBrZXkgZ2V0cyBwcmVzc2VkIGluIHRoZSBpbnB1dFxyXG4gICAgICovXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxyXG4gICAgSW5wdXQucHJvdG90eXBlLm9uSW5wdXRLZXlEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgLy8gQ2FsbCBwcm9wcy5vbktleURvd24gaWYgZGVmaW5lZFxyXG4gICAgICAgIC8vIEdpdmVzIHRoZSBkZXZlbG9wZXIgYSBsaXR0bGUgYml0IG1vcmUgY29udHJvbCBpZiBuZWVkZWRcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbktleURvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbktleURvd24oZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LndoaWNoKSB7XHJcbiAgICAgICAgICAgIGNhc2UgNDA6IC8vIERPV05cclxuICAgICAgICAgICAgICAgIGlmICghZXZlbnQuc2hpZnRLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25OZXh0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzODogLy8gVVBcclxuICAgICAgICAgICAgICAgIGlmICghZXZlbnQuc2hpZnRLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25QcmV2KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMzogLy8gRU5URVJcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmRvTm90U3VibWl0T25FbnRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucHJvcHMuaWdub3JlRW50ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA5OiAvLyBUQUJcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wcm9wcy5pZ25vcmVUYWIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyNzogLy8gRVNDXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uRXNjYXBlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBGb2N1cyB0aGUgaW5wdXRcclxuICAgICAqL1xyXG4gICAgSW5wdXQucHJvdG90eXBlLmZvY3VzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlucHV0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBCbHVyIHRoZSBpbnB1dFxyXG4gICAgICovXHJcbiAgICBJbnB1dC5wcm90b3R5cGUuYmx1ciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5pbnB1dCkge1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0LmJsdXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZW5kZXIgdGhlIHZpZXdcclxuICAgICAqL1xyXG4gICAgSW5wdXQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBhdHRyaWJ1dGVzID0gZmlsdGVySW5wdXRBdHRyaWJ1dGVzKHRoaXMucHJvcHMpO1xyXG4gICAgICAgIHZhciBjbGFzc2VzID0gY2xhc3NuYW1lcygnZ2Vvc3VnZ2VzdF9faW5wdXQnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSk7XHJcbiAgICAgICAgdmFyIHNob3VsZFJlbmRlckxhYmVsID0gdGhpcy5wcm9wcy5sYWJlbCAmJiB0aGlzLnByb3BzLmlkO1xyXG4gICAgICAgIGlmICghYXR0cmlidXRlcy50YWJJbmRleCkge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzLnRhYkluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChjcmVhdGVFbGVtZW50KEZyYWdtZW50LCBudWxsLFxyXG4gICAgICAgICAgICBzaG91bGRSZW5kZXJMYWJlbCAmJiAoY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHsgY2xhc3NOYW1lOiBcImdlb3N1Z2dlc3RfX2xhYmVsXCIsIGh0bWxGb3I6IHRoaXMucHJvcHMuaWQgfSwgdGhpcy5wcm9wcy5sYWJlbCkpLFxyXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzZXMsIGlkOiBcImdlb3N1Z2dlc3RfX2lucHV0XCIgKyAodGhpcy5wcm9wcy5pZCA/IFwiLS1cIiArIHRoaXMucHJvcHMuaWQgOiAnJyksIHJlZjogZnVuY3Rpb24gKGkpIHsgcmV0dXJuIChfdGhpcy5pbnB1dCA9IGkpOyB9LCB0eXBlOiB0aGlzLnByb3BzLmlucHV0VHlwZSB9LCBhdHRyaWJ1dGVzLCB7IHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlLCBzdHlsZTogdGhpcy5wcm9wcy5zdHlsZSwgb25LZXlEb3duOiB0aGlzLm9uSW5wdXRLZXlEb3duLCBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZSwgb25LZXlQcmVzczogdGhpcy5wcm9wcy5vbktleVByZXNzLCBvbkZvY3VzOiB0aGlzLnByb3BzLm9uRm9jdXMsIG9uQmx1cjogdGhpcy5wcm9wcy5vbkJsdXIsIHJvbGU6IFwiY29tYm9ib3hcIiwgXCJhcmlhLWV4cGFuZGVkXCI6ICF0aGlzLnByb3BzLmlzU3VnZ2VzdHNIaWRkZW4sIFwiYXJpYS1hY3RpdmVkZXNjZW5kYW50XCI6IHRoaXMucHJvcHMuYWN0aXZlU3VnZ2VzdFxyXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wcy5hY3RpdmVTdWdnZXN0LnBsYWNlSWRcclxuICAgICAgICAgICAgICAgICAgICA6IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkLCBcImFyaWEtb3duc1wiOiB0aGlzLnByb3BzLmxpc3RJZCB9KSkpKTtcclxuICAgIH07XHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktZnVuY3Rpb24gKi9cclxuICAgIC8qKlxyXG4gICAgICogRGVmYXVsdCB2YWx1ZXMgZm9yIHRoZSBwcm9wZXJ0aWVzXHJcbiAgICAgKi9cclxuICAgIElucHV0LmRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICBhY3RpdmVTdWdnZXN0OiBudWxsLFxyXG4gICAgICAgIGF1dG9Db21wbGV0ZTogJ25vcGUnLFxyXG4gICAgICAgIGNsYXNzTmFtZTogJycsXHJcbiAgICAgICAgaXNTdWdnZXN0c0hpZGRlbjogdHJ1ZSxcclxuICAgICAgICBsaXN0SWQ6ICcnLFxyXG4gICAgICAgIGlucHV0VHlwZTogJ3RleHQnLFxyXG4gICAgICAgIG9uQmx1cjogZnVuY3Rpb24gKCkgeyB9LFxyXG4gICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiAoKSB7IH0sXHJcbiAgICAgICAgb25Fc2NhcGU6IGZ1bmN0aW9uICgpIHsgfSxcclxuICAgICAgICBvbkZvY3VzOiBmdW5jdGlvbiAoKSB7IH0sXHJcbiAgICAgICAgb25LZXlEb3duOiBmdW5jdGlvbiAoKSB7IH0sXHJcbiAgICAgICAgb25LZXlQcmVzczogZnVuY3Rpb24gKCkgeyB9LFxyXG4gICAgICAgIG9uTmV4dDogZnVuY3Rpb24gKCkgeyB9LFxyXG4gICAgICAgIG9uUHJldjogZnVuY3Rpb24gKCkgeyB9LFxyXG4gICAgICAgIG9uU2VsZWN0OiBmdW5jdGlvbiAoKSB7IH0sXHJcbiAgICAgICAgdmFsdWU6ICcnXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIElucHV0O1xyXG59KFB1cmVDb21wb25lbnQpKTtcblxuLyoqXHJcbiAqIEEgc2luZ2xlIEdlb3N1Z2dlc3QgaXRlbSBpbiB0aGUgbGlzdFxyXG4gKi9cclxudmFyIGRlZmF1bHRfMSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhkZWZhdWx0XzEsIF9zdXBlcik7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjb25zdHJ1Y3Rvci5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZGVmYXVsdF8xKHByb3BzKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIHJlZmVyZW5jZSB0byB0aGUgc3VnZ2VzdCBlbGVtZW50XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgX3RoaXMucmVmID0gbnVsbDtcclxuICAgICAgICBfdGhpcy5vbkNsaWNrID0gX3RoaXMub25DbGljay5iaW5kKF90aGlzKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIE1ha2VzIGEgdGV4dCBib2xkXHJcbiAgICAgKi9cclxuICAgIGRlZmF1bHRfMS5wcm90b3R5cGUubWFrZUJvbGQgPSBmdW5jdGlvbiAoZWxlbWVudCwga2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIChjcmVhdGVFbGVtZW50KFwiYlwiLCB7IGNsYXNzTmFtZTogXCJnZW9zdWdnZXN0X19pdGVtX19tYXRjaGVkLXRleHRcIiwga2V5OiBrZXkgfSwgZWxlbWVudCkpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmVwbGFjZSBtYXRjaGVkIHRleHQgd2l0aCB0aGUgc2FtZSBpbiBib2xkXHJcbiAgICAgKi9cclxuICAgIGRlZmF1bHRfMS5wcm90b3R5cGUuZm9ybWF0TWF0Y2hlZFRleHQgPSBmdW5jdGlvbiAodXNlcklucHV0LCBzdWdnZXN0KSB7XHJcbiAgICAgICAgaWYgKCF1c2VySW5wdXQgfHwgIXN1Z2dlc3QubWF0Y2hlZFN1YnN0cmluZ3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN1Z2dlc3QubGFiZWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzdGFydCA9IHN1Z2dlc3QubWF0Y2hlZFN1YnN0cmluZ3Mub2Zmc2V0O1xyXG4gICAgICAgIHZhciBsZW5ndGggPSBzdWdnZXN0Lm1hdGNoZWRTdWJzdHJpbmdzLmxlbmd0aDtcclxuICAgICAgICB2YXIgZW5kID0gc3RhcnQgKyBsZW5ndGg7XHJcbiAgICAgICAgdmFyIGJvbGRQYXJ0ID0gdGhpcy5tYWtlQm9sZChzdWdnZXN0LmxhYmVsLnN1YnN0cmluZyhzdGFydCwgZW5kKSwgc3VnZ2VzdC5sYWJlbCk7XHJcbiAgICAgICAgdmFyIHByZSA9ICcnO1xyXG4gICAgICAgIHZhciBwb3N0ID0gJyc7XHJcbiAgICAgICAgaWYgKHN0YXJ0ID4gMCkge1xyXG4gICAgICAgICAgICBwcmUgPSBzdWdnZXN0LmxhYmVsLnNsaWNlKDAsIHN0YXJ0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVuZCA8IHN1Z2dlc3QubGFiZWwubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHBvc3QgPSBzdWdnZXN0LmxhYmVsLnNsaWNlKGVuZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCxcclxuICAgICAgICAgICAgcHJlLFxyXG4gICAgICAgICAgICBib2xkUGFydCxcclxuICAgICAgICAgICAgcG9zdCkpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tpbmcgaWYgaXRlbSBqdXN0IGJlY2FtZSBhY3RpdmUgYW5kIHNjcm9sbGluZyBpZiBuZWVkZWQuXHJcbiAgICAgKi9cclxuICAgIGRlZmF1bHRfMS5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gKHByZXZQcm9wcykge1xyXG4gICAgICAgIGlmICghcHJldlByb3BzLmlzQWN0aXZlICYmIHRoaXMucHJvcHMuaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxJZk5lZWRlZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFNjcm9sbGluZyBjdXJyZW50IGl0ZW0gdG8gdGhlIGNlbnRlciBvZiB0aGUgbGlzdCBpZiBpdGVtIG5lZWRzIHNjcm9sbGluZy5cclxuICAgICAqIEl0ZW0gaXMgc2Nyb2xsZWQgdG8gdGhlIGNlbnRlciBvZiB0aGUgbGlzdC5cclxuICAgICAqL1xyXG4gICAgZGVmYXVsdF8xLnByb3RvdHlwZS5zY3JvbGxJZk5lZWRlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMucmVmO1xyXG4gICAgICAgIHZhciBwYXJlbnQgPSBlbGVtZW50ICYmIGVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICBpZiAoIWVsZW1lbnQgfHwgIXBhcmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBvdmVyVG9wID0gZWxlbWVudC5vZmZzZXRUb3AgLSBwYXJlbnQub2Zmc2V0VG9wIDwgcGFyZW50LnNjcm9sbFRvcDtcclxuICAgICAgICB2YXIgb3ZlckJvdHRvbSA9IGVsZW1lbnQub2Zmc2V0VG9wIC0gcGFyZW50Lm9mZnNldFRvcCArIGVsZW1lbnQuY2xpZW50SGVpZ2h0ID5cclxuICAgICAgICAgICAgcGFyZW50LnNjcm9sbFRvcCArIHBhcmVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgaWYgKG92ZXJUb3AgfHwgb3ZlckJvdHRvbSkge1xyXG4gICAgICAgICAgICBwYXJlbnQuc2Nyb2xsVG9wID1cclxuICAgICAgICAgICAgICAgIGVsZW1lbnQub2Zmc2V0VG9wIC1cclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQub2Zmc2V0VG9wIC1cclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuY2xpZW50SGVpZ2h0IC8gMiArXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGllbnRIZWlnaHQgLyAyO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFdoZW4gdGhlIHN1Z2dlc3QgaXRlbSBnb3QgY2xpY2tlZFxyXG4gICAgICovXHJcbiAgICBkZWZhdWx0XzEucHJvdG90eXBlLm9uQ2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMucHJvcHMub25TZWxlY3QodGhpcy5wcm9wcy5zdWdnZXN0KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJlbmRlciB0aGUgdmlld1xyXG4gICAgICovXHJcbiAgICBkZWZhdWx0XzEucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgc3VnZ2VzdCA9IHRoaXMucHJvcHMuc3VnZ2VzdDtcclxuICAgICAgICB2YXIgY2xhc3NlcyA9IGNsYXNzbmFtZXMoJ2dlb3N1Z2dlc3RfX2l0ZW0nLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5wcm9wcy5zdWdnZXN0SXRlbUNsYXNzTmFtZSwgeyAnZ2Vvc3VnZ2VzdF9faXRlbS0tYWN0aXZlJzogdGhpcy5wcm9wcy5pc0FjdGl2ZSB9LCAoX2EgPSB7fSxcclxuICAgICAgICAgICAgX2FbdGhpcy5wcm9wcy5hY3RpdmVDbGFzc05hbWUgfHwgJyddID0gdGhpcy5wcm9wcy5hY3RpdmVDbGFzc05hbWVcclxuICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wcy5pc0FjdGl2ZVxyXG4gICAgICAgICAgICAgICAgOiBudWxsLFxyXG4gICAgICAgICAgICBfYSkpO1xyXG4gICAgICAgIHZhciBjb250ZW50ID0gc3VnZ2VzdC5sYWJlbDtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5yZW5kZXJTdWdnZXN0SXRlbSkge1xyXG4gICAgICAgICAgICBjb250ZW50ID0gdGhpcy5wcm9wcy5yZW5kZXJTdWdnZXN0SXRlbShzdWdnZXN0LCB0aGlzLnByb3BzLnVzZXJJbnB1dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMucHJvcHMuaXNIaWdobGlnaHRNYXRjaCkge1xyXG4gICAgICAgICAgICBjb250ZW50ID0gdGhpcy5mb3JtYXRNYXRjaGVkVGV4dCh0aGlzLnByb3BzLnVzZXJJbnB1dCwgc3VnZ2VzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoY3JlYXRlRWxlbWVudChcImxpXCIsIHsgY2xhc3NOYW1lOiBjbGFzc2VzLCByZWY6IGZ1bmN0aW9uIChsaSkgeyByZXR1cm4gKF90aGlzLnJlZiA9IGxpKTsgfSwgc3R5bGU6IHRoaXMucHJvcHMuc3R5bGUsIG9uTW91c2VEb3duOiB0aGlzLnByb3BzLm9uTW91c2VEb3duLCBvbk1vdXNlT3V0OiB0aGlzLnByb3BzLm9uTW91c2VPdXQsIG9uQ2xpY2s6IHRoaXMub25DbGljaywgcm9sZTogXCJvcHRpb25cIiwgXCJhcmlhLXNlbGVjdGVkXCI6IHRoaXMucHJvcHMuaXNBY3RpdmUsIGlkOiBzdWdnZXN0LnBsYWNlSWQgfSwgY29udGVudCkpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBkZWZhdWx0XzE7XHJcbn0oUHVyZUNvbXBvbmVudCkpO1xuXG4vKipcclxuICogVGhlIGxpc3Qgd2l0aCBzdWdnZXN0aW9ucy5cclxuICovXHJcbnZhciBkZWZhdWx0XzEkMSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhkZWZhdWx0XzEkMSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIGRlZmF1bHRfMSQxKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciBvciBub3QgaXQgaXMgaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIGRlZmF1bHRfMSQxLnByb3RvdHlwZS5pc0hpZGRlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5pc0hpZGRlbiB8fCB0aGlzLnByb3BzLnN1Z2dlc3RzLmxlbmd0aCA9PT0gMDtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFRoZXJlIGFyZSBuZXcgcHJvcGVydGllcyBhdmFpbGFibGUgZm9yIHRoZSBsaXN0XHJcbiAgICAgKi9cclxuICAgIGRlZmF1bHRfMSQxLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiAocHJldlByb3BzKSB7XHJcbiAgICAgICAgaWYgKHByZXZQcm9wcy5zdWdnZXN0cyAhPT0gdGhpcy5wcm9wcy5zdWdnZXN0cykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zdWdnZXN0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25TdWdnZXN0Tm9SZXN1bHRzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZW5kZXIgdGhlIHZpZXdcclxuICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgUmVhY3QgZWxlbWVudCB0byByZW5kZXJcclxuICAgICAqL1xyXG4gICAgZGVmYXVsdF8xJDEucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgY2xhc3NlcyA9IGNsYXNzbmFtZXMoJ2dlb3N1Z2dlc3RfX3N1Z2dlc3RzJywgdGhpcy5wcm9wcy5zdWdnZXN0c0NsYXNzTmFtZSwgeyAnZ2Vvc3VnZ2VzdF9fc3VnZ2VzdHMtLWhpZGRlbic6IHRoaXMuaXNIaWRkZW4oKSB9LCAoX2EgPSB7fSxcclxuICAgICAgICAgICAgX2FbdGhpcy5wcm9wcy5oaWRkZW5DbGFzc05hbWUgfHwgJyddID0gdGhpcy5wcm9wcy5oaWRkZW5DbGFzc05hbWVcclxuICAgICAgICAgICAgICAgID8gdGhpcy5pc0hpZGRlbigpXHJcbiAgICAgICAgICAgICAgICA6IG51bGwsXHJcbiAgICAgICAgICAgIF9hKSk7XHJcbiAgICAgICAgcmV0dXJuIChjcmVhdGVFbGVtZW50KFwidWxcIiwgeyBjbGFzc05hbWU6IGNsYXNzZXMsIHN0eWxlOiB0aGlzLnByb3BzLnN0eWxlLCByb2xlOiBcImxpc3Rib3hcIiwgaWQ6IHRoaXMucHJvcHMubGlzdElkIH0sIHRoaXMucHJvcHMuc3VnZ2VzdHMubWFwKGZ1bmN0aW9uIChzdWdnZXN0KSB7XHJcbiAgICAgICAgICAgIHZhciBpc0FjdGl2ZSA9IChfdGhpcy5wcm9wcy5hY3RpdmVTdWdnZXN0ICYmXHJcbiAgICAgICAgICAgICAgICBzdWdnZXN0LnBsYWNlSWQgPT09IF90aGlzLnByb3BzLmFjdGl2ZVN1Z2dlc3QucGxhY2VJZCkgfHxcclxuICAgICAgICAgICAgICAgIGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gKGNyZWF0ZUVsZW1lbnQoZGVmYXVsdF8xLCB7IGtleTogc3VnZ2VzdC5wbGFjZUlkLCBjbGFzc05hbWU6IHN1Z2dlc3QuY2xhc3NOYW1lIHx8ICcnLCB1c2VySW5wdXQ6IF90aGlzLnByb3BzLnVzZXJJbnB1dCwgaXNIaWdobGlnaHRNYXRjaDogX3RoaXMucHJvcHMuaXNIaWdobGlnaHRNYXRjaCwgc3VnZ2VzdDogc3VnZ2VzdCwgc3R5bGU6IF90aGlzLnByb3BzLnN1Z2dlc3RJdGVtU3R5bGUsIHN1Z2dlc3RJdGVtQ2xhc3NOYW1lOiBfdGhpcy5wcm9wcy5zdWdnZXN0SXRlbUNsYXNzTmFtZSwgaXNBY3RpdmU6IGlzQWN0aXZlLCBhY3RpdmVDbGFzc05hbWU6IF90aGlzLnByb3BzLnN1Z2dlc3RJdGVtQWN0aXZlQ2xhc3NOYW1lLCBvbk1vdXNlRG93bjogX3RoaXMucHJvcHMub25TdWdnZXN0TW91c2VEb3duLCBvbk1vdXNlT3V0OiBfdGhpcy5wcm9wcy5vblN1Z2dlc3RNb3VzZU91dCwgb25TZWxlY3Q6IF90aGlzLnByb3BzLm9uU3VnZ2VzdFNlbGVjdCwgcmVuZGVyU3VnZ2VzdEl0ZW06IF90aGlzLnByb3BzLnJlbmRlclN1Z2dlc3RJdGVtIH0pKTtcclxuICAgICAgICB9KSkpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBkZWZhdWx0XzEkMTtcclxufShQdXJlQ29tcG9uZW50KSk7XG5cbi8qIGdsb2JhbCB3aW5kb3cgKi9cclxuLy8gRXNjYXBlcyBzcGVjaWFsIGNoYXJhY3RlcnMgaW4gdXNlciBpbnB1dCBmb3IgcmVnZXhcclxuZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cikge1xyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bXFwtXFxbXFxdXFwvXFx7XFx9XFwoXFwpXFwqXFwrXFw/XFwuXFxcXFxcXlxcJFxcfF0vZywgJ1xcXFwkJicpO1xyXG59XHJcbi8qKlxyXG4gKiBFbnRyeSBwb2ludCBmb3IgdGhlIEdlb3N1Z2dlc3QgY29tcG9uZW50XHJcbiAqL1xyXG52YXIgZGVmYXVsdF8xJDIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoZGVmYXVsdF8xLCBfc3VwZXIpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY29uc3RydWN0b3IuIFNldHMgdGhlIGluaXRpYWwgc3RhdGUuXHJcbiAgICAgKi9cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtc3RhdGVtZW50c1xyXG4gICAgZnVuY3Rpb24gZGVmYXVsdF8xKHByb3BzKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIEdvb2dsZSBNYXAgaW5zdGFuY2VcclxuICAgICAgICAgKi9cclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgICAgIF90aGlzLmdvb2dsZU1hcHMgPSBudWxsO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBhdXRvY29tcGxlIHNlcnZpY2UgdG8gZ2V0IHN1Z2dlc3RzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgX3RoaXMuYXV0b2NvbXBsZXRlU2VydmljZSA9IG51bGw7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIHBsYWNlcyBzZXJ2aWNlIHRvIGdldCBwbGFjZSBkZXRhaWxzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgX3RoaXMucGxhY2VzU2VydmljZSA9IG51bGw7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIHNlc3Npb25Ub2tlbiBzZXJ2aWNlIHRvIHVzZSBzZXNzaW9uIGJhc2VkIG1vbmV0aXphdGlvblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIF90aGlzLnNlc3Npb25Ub2tlbiA9IHVuZGVmaW5lZDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgZ2VvY29kZXIgdG8gZ2V0IGdlb2NvZGVkIHJlc3VsdHNcclxuICAgICAgICAgKi9cclxuICAgICAgICBfdGhpcy5nZW9jb2RlciA9IG51bGw7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIGlucHV0IGNvbXBvbmVudFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIF90aGlzLmlucHV0ID0gbnVsbDtcclxuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgYWN0aXZlU3VnZ2VzdDogbnVsbCxcclxuICAgICAgICAgICAgaWdub3JlQmx1cjogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzU3VnZ2VzdHNIaWRkZW46IHRydWUsXHJcbiAgICAgICAgICAgIHN1Z2dlc3RzOiBbXSxcclxuICAgICAgICAgICAgdXNlcklucHV0OiBwcm9wcy5pbml0aWFsVmFsdWUgfHwgJydcclxuICAgICAgICB9O1xyXG4gICAgICAgIF90aGlzLm9uSW5wdXRDaGFuZ2UgPSBfdGhpcy5vbklucHV0Q2hhbmdlLmJpbmQoX3RoaXMpO1xyXG4gICAgICAgIF90aGlzLm9uQWZ0ZXJJbnB1dENoYW5nZSA9IF90aGlzLm9uQWZ0ZXJJbnB1dENoYW5nZS5iaW5kKF90aGlzKTtcclxuICAgICAgICBfdGhpcy5vbklucHV0Rm9jdXMgPSBfdGhpcy5vbklucHV0Rm9jdXMuYmluZChfdGhpcyk7XHJcbiAgICAgICAgX3RoaXMub25JbnB1dEJsdXIgPSBfdGhpcy5vbklucHV0Qmx1ci5iaW5kKF90aGlzKTtcclxuICAgICAgICBfdGhpcy5vbk5leHQgPSBfdGhpcy5vbk5leHQuYmluZChfdGhpcyk7XHJcbiAgICAgICAgX3RoaXMub25QcmV2ID0gX3RoaXMub25QcmV2LmJpbmQoX3RoaXMpO1xyXG4gICAgICAgIF90aGlzLm9uU2VsZWN0ID0gX3RoaXMub25TZWxlY3QuYmluZChfdGhpcyk7XHJcbiAgICAgICAgX3RoaXMub25TdWdnZXN0TW91c2VEb3duID0gX3RoaXMub25TdWdnZXN0TW91c2VEb3duLmJpbmQoX3RoaXMpO1xyXG4gICAgICAgIF90aGlzLm9uU3VnZ2VzdE1vdXNlT3V0ID0gX3RoaXMub25TdWdnZXN0TW91c2VPdXQuYmluZChfdGhpcyk7XHJcbiAgICAgICAgX3RoaXMub25TdWdnZXN0Tm9SZXN1bHRzID0gX3RoaXMub25TdWdnZXN0Tm9SZXN1bHRzLmJpbmQoX3RoaXMpO1xyXG4gICAgICAgIF90aGlzLmhpZGVTdWdnZXN0cyA9IF90aGlzLmhpZGVTdWdnZXN0cy5iaW5kKF90aGlzKTtcclxuICAgICAgICBfdGhpcy5zZWxlY3RTdWdnZXN0ID0gX3RoaXMuc2VsZWN0U3VnZ2VzdC5iaW5kKF90aGlzKTtcclxuICAgICAgICBfdGhpcy5saXN0SWQgPSBcImdlb3N1Z2dlc3RfX2xpc3RcIiArIChwcm9wcy5pZCA/IFwiLS1cIiArIHByb3BzLmlkIDogJycpO1xyXG4gICAgICAgIGlmIChwcm9wcy5xdWVyeURlbGF5KSB7XHJcbiAgICAgICAgICAgIF90aGlzLm9uQWZ0ZXJJbnB1dENoYW5nZSA9IGRlYm91bmNlKF90aGlzLm9uQWZ0ZXJJbnB1dENoYW5nZSwgcHJvcHMucXVlcnlEZWxheSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ2hhbmdlIGlucHV0VmFsdWUgaWYgcHJvcCBjaGFuZ2VzXHJcbiAgICAgKi9cclxuICAgIGRlZmF1bHRfMS5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gKHByZXZQcm9wcykge1xyXG4gICAgICAgIGlmIChwcmV2UHJvcHMuaW5pdGlhbFZhbHVlICE9PSB0aGlzLnByb3BzLmluaXRpYWxWYWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlcklucHV0OiB0aGlzLnByb3BzLmluaXRpYWxWYWx1ZSB8fCAnJyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHByZXZQcm9wcy5maXh0dXJlcykgIT09IEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuZml4dHVyZXMpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU3VnZ2VzdHMoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgb24gdGhlIGNsaWVudCBzaWRlIGFmdGVyIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgICogR29vZ2xlIGFwaSBzZGsgb2JqZWN0IHdpbGwgYmUgb2J0YWluZWQgYW5kIGNhY2hlZCBhcyBhIGluc3RhbmNlIHByb3BlcnR5LlxyXG4gICAgICogTmVjZXNzYXJ5IG9iamVjdHMgb2YgZ29vZ2xlIGFwaSB3aWxsIGFsc28gYmUgZGV0ZXJtaW5lZCBhbmQgc2F2ZWQuXHJcbiAgICAgKi9cclxuICAgIGRlZmF1bHRfMS5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGdvb2dsZU1hcHMgPSB0aGlzLnByb3BzLmdvb2dsZU1hcHMgfHxcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICAgICAgICAgKHdpbmRvdy5nb29nbGUgJiYgd2luZG93Lmdvb2dsZS5tYXBzKSB8fFxyXG4gICAgICAgICAgICB0aGlzLmdvb2dsZU1hcHM7XHJcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICAgICAgICBpZiAoIWdvb2dsZU1hcHMpIHtcclxuICAgICAgICAgICAgaWYgKGNvbnNvbGUpIHtcclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdHb29nbGUgbWFwcyBBUEkgd2FzIG5vdCBmb3VuZCBpbiB0aGUgcGFnZS4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ29vZ2xlTWFwcyA9IGdvb2dsZU1hcHM7XHJcbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGVTZXJ2aWNlID0gbmV3IGdvb2dsZU1hcHMucGxhY2VzLkF1dG9jb21wbGV0ZVNlcnZpY2UoKTtcclxuICAgICAgICB0aGlzLnBsYWNlc1NlcnZpY2UgPSBuZXcgZ29vZ2xlTWFwcy5wbGFjZXMuUGxhY2VzU2VydmljZShkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uVG9rZW4gPSBuZXcgZ29vZ2xlTWFwcy5wbGFjZXMuQXV0b2NvbXBsZXRlU2Vzc2lvblRva2VuKCk7XHJcbiAgICAgICAgdGhpcy5nZW9jb2RlciA9IG5ldyBnb29nbGVNYXBzLkdlb2NvZGVyKCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBXaGVuIHRoZSBjb21wb25lbnQgd2lsbCB1bm1vdW50XHJcbiAgICAgKi9cclxuICAgIGRlZmF1bHRfMS5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogV2hlbiB0aGUgaW5wdXQgY2hhbmdlZFxyXG4gICAgICovXHJcbiAgICBkZWZhdWx0XzEucHJvdG90eXBlLm9uSW5wdXRDaGFuZ2UgPSBmdW5jdGlvbiAodXNlcklucHV0KSB7XHJcbiAgICAgICAgaWYgKCF1c2VySW5wdXQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25TdWdnZXN0U2VsZWN0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uU3VnZ2VzdFNlbGVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2VySW5wdXQ6IHVzZXJJbnB1dCB9LCB0aGlzLm9uQWZ0ZXJJbnB1dENoYW5nZSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBPbiBBZnRlciB0aGUgaW5wdXQgZ290IGNoYW5nZWRcclxuICAgICAqL1xyXG4gICAgZGVmYXVsdF8xLnByb3RvdHlwZS5vbkFmdGVySW5wdXRDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zaG93U3VnZ2VzdHMoKTtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMuc3RhdGUudXNlcklucHV0KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBXaGVuIHRoZSBpbnB1dCBnZXRzIGZvY3VzZWRcclxuICAgICAqL1xyXG4gICAgZGVmYXVsdF8xLnByb3RvdHlwZS5vbklucHV0Rm9jdXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Gb2N1cykge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uRm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaG93U3VnZ2VzdHMoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFdoZW4gdGhlIGlucHV0IGdldHMgYmx1cnJlZFxyXG4gICAgICovXHJcbiAgICBkZWZhdWx0XzEucHJvdG90eXBlLm9uSW5wdXRCbHVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5pZ25vcmVCbHVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZVN1Z2dlc3RzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGRlZmF1bHRfMS5wcm90b3R5cGUub25OZXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVTdWdnZXN0KCduZXh0Jyk7XHJcbiAgICB9O1xyXG4gICAgZGVmYXVsdF8xLnByb3RvdHlwZS5vblByZXYgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZVN1Z2dlc3QoJ3ByZXYnKTtcclxuICAgIH07XHJcbiAgICBkZWZhdWx0XzEucHJvdG90eXBlLm9uU2VsZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0U3VnZ2VzdCh0aGlzLnN0YXRlLmFjdGl2ZVN1Z2dlc3QpO1xyXG4gICAgfTtcclxuICAgIGRlZmF1bHRfMS5wcm90b3R5cGUub25TdWdnZXN0TW91c2VEb3duID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpZ25vcmVCbHVyOiB0cnVlIH0pO1xyXG4gICAgfTtcclxuICAgIGRlZmF1bHRfMS5wcm90b3R5cGUub25TdWdnZXN0TW91c2VPdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlnbm9yZUJsdXI6IGZhbHNlIH0pO1xyXG4gICAgfTtcclxuICAgIGRlZmF1bHRfMS5wcm90b3R5cGUub25TdWdnZXN0Tm9SZXN1bHRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uU3VnZ2VzdE5vUmVzdWx0cykge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uU3VnZ2VzdE5vUmVzdWx0cyh0aGlzLnN0YXRlLnVzZXJJbnB1dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogRm9jdXMgdGhlIGlucHV0XHJcbiAgICAgKi9cclxuICAgIGRlZmF1bHRfMS5wcm90b3R5cGUuZm9jdXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXQpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dC5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEJsdXIgdGhlIGlucHV0XHJcbiAgICAgKi9cclxuICAgIGRlZmF1bHRfMS5wcm90b3R5cGUuYmx1ciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5pbnB1dCkge1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0LmJsdXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGhlIHZhbHVlIG9mIHRoZSB1c2VyIGlucHV0XHJcbiAgICAgKi9cclxuICAgIGRlZmF1bHRfMS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKHVzZXJJbnB1dCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2VySW5wdXQ6IHVzZXJJbnB1dCB9KTtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHVzZXJJbnB1dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qXHJcbiAgICAgKiBDbGVhciB0aGUgaW5wdXQgYW5kIGNsb3NlIHRoZSBzdWdnZXN0aW9uIHBhbmVcclxuICAgICAqL1xyXG4gICAgZGVmYXVsdF8xLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlcklucHV0OiAnJyB9LCB0aGlzLmhpZGVTdWdnZXN0cyk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZWFyY2ggZm9yIG5ldyBzdWdnZXN0c1xyXG4gICAgICovXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eSwgbWF4LXN0YXRlbWVudHNcclxuICAgIGRlZmF1bHRfMS5wcm90b3R5cGUuc2VhcmNoU3VnZ2VzdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUudXNlcklucHV0KSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3VnZ2VzdHMoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgaW5wdXQ6IHRoaXMuc3RhdGUudXNlcklucHV0LFxyXG4gICAgICAgICAgICBzZXNzaW9uVG9rZW46IHRoaXMuc2Vzc2lvblRva2VuXHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgaW5wdXRMZW5ndGggPSB0aGlzLnN0YXRlLnVzZXJJbnB1dC5sZW5ndGg7XHJcbiAgICAgICAgdmFyIGlzU2hvcnRlclRoYW5NaW5MZW5ndGggPSB0aGlzLnByb3BzLm1pbkxlbmd0aCAmJiBpbnB1dExlbmd0aCA8IHRoaXMucHJvcHMubWluTGVuZ3RoO1xyXG4gICAgICAgIGlmIChpc1Nob3J0ZXJUaGFuTWluTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3VnZ2VzdHMoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCBsb2NhdGlvbiA9IF9hLmxvY2F0aW9uLCByYWRpdXMgPSBfYS5yYWRpdXMsIGJvdW5kcyA9IF9hLmJvdW5kcywgdHlwZXMgPSBfYS50eXBlcywgY291bnRyeSA9IF9hLmNvdW50cnk7XHJcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgY3VybHkgKi9cclxuICAgICAgICBpZiAobG9jYXRpb24pXHJcbiAgICAgICAgICAgIG9wdGlvbnMubG9jYXRpb24gPSBsb2NhdGlvbjtcclxuICAgICAgICBpZiAocmFkaXVzKVxyXG4gICAgICAgICAgICBvcHRpb25zLnJhZGl1cyA9IE51bWJlcih0aGlzLnByb3BzLnJhZGl1cyk7XHJcbiAgICAgICAgaWYgKGJvdW5kcylcclxuICAgICAgICAgICAgb3B0aW9ucy5ib3VuZHMgPSBib3VuZHM7XHJcbiAgICAgICAgaWYgKHR5cGVzKVxyXG4gICAgICAgICAgICBvcHRpb25zLnR5cGVzID0gdHlwZXM7XHJcbiAgICAgICAgaWYgKGNvdW50cnkpXHJcbiAgICAgICAgICAgIG9wdGlvbnMuY29tcG9uZW50UmVzdHJpY3Rpb25zID0geyBjb3VudHJ5OiBjb3VudHJ5IH07XHJcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBjdXJseSAqL1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IHRydWUgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIV90aGlzLmF1dG9jb21wbGV0ZVNlcnZpY2UpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy5hdXRvY29tcGxldGVTZXJ2aWNlLmdldFBsYWNlUHJlZGljdGlvbnMob3B0aW9ucywgZnVuY3Rpb24gKHN1Z2dlc3RzR29vZ2xlKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVTdWdnZXN0cyhzdWdnZXN0c0dvb2dsZSB8fCBbXSwgLy8gY2FuIGJlIG51bGxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMucHJvcHMuYXV0b0FjdGl2YXRlRmlyc3RTdWdnZXN0ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICFfdGhpcy5zdGF0ZS5hY3RpdmVTdWdnZXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmFjdGl2YXRlU3VnZ2VzdCgnbmV4dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSB0aGUgc3VnZ2VzdHNcclxuICAgICAqL1xyXG4gICAgZGVmYXVsdF8xLnByb3RvdHlwZS51cGRhdGVTdWdnZXN0cyA9IGZ1bmN0aW9uIChzdWdnZXN0c0dvb2dsZSwgXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LWZ1bmN0aW9uLXJldHVybi10eXBlLCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktZnVuY3Rpb25cclxuICAgIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAoc3VnZ2VzdHNHb29nbGUgPT09IHZvaWQgMCkgeyBzdWdnZXN0c0dvb2dsZSA9IFtdOyB9XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrID09PSB2b2lkIDApIHsgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7IH07IH1cclxuICAgICAgICB2YXIgc3VnZ2VzdHMgPSBbXTtcclxuICAgICAgICB2YXIgdXNlcklucHV0ID0gdGhpcy5zdGF0ZS51c2VySW5wdXQ7XHJcbiAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcywgc2tpcFN1Z2dlc3QgPSBfYS5za2lwU3VnZ2VzdCwgbWF4Rml4dHVyZXMgPSBfYS5tYXhGaXh0dXJlcywgZml4dHVyZXMgPSBfYS5maXh0dXJlcztcclxuICAgICAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKGVzY2FwZVJlZ0V4cCh1c2VySW5wdXQpLCAnZ2ltJyk7XHJcbiAgICAgICAgdmFyIGZpeHR1cmVzU2VhcmNoZWQgPSAwO1xyXG4gICAgICAgIHZhciBhY3RpdmVTdWdnZXN0ID0gbnVsbDtcclxuICAgICAgICBpZiAoZml4dHVyZXMpIHtcclxuICAgICAgICAgICAgZml4dHVyZXMuZm9yRWFjaChmdW5jdGlvbiAoZml4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1heEZpeHR1cmVzICYmIGZpeHR1cmVzU2VhcmNoZWQgPj0gbWF4Rml4dHVyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc2tpcFN1Z2dlc3QgJiZcclxuICAgICAgICAgICAgICAgICAgICAhc2tpcFN1Z2dlc3QoZml4dHVyZSkgJiZcclxuICAgICAgICAgICAgICAgICAgICBmaXh0dXJlLmxhYmVsLm1hdGNoKHJlZ2V4KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpeHR1cmVzU2VhcmNoZWQrKztcclxuICAgICAgICAgICAgICAgICAgICBzdWdnZXN0cy5wdXNoKF9fYXNzaWduKF9fYXNzaWduKHt9LCBmaXh0dXJlKSwgeyBpc0ZpeHR1cmU6IHRydWUsIG1hdGNoZWRTdWJzdHJpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGg6IHVzZXJJbnB1dC5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IGZpeHR1cmUubGFiZWwuaW5kZXhPZih1c2VySW5wdXQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHBsYWNlSWQ6IGZpeHR1cmUucGxhY2VJZCB8fCBmaXh0dXJlLmxhYmVsIH0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1Z2dlc3RzR29vZ2xlLmZvckVhY2goZnVuY3Rpb24gKHN1Z2dlc3QpIHtcclxuICAgICAgICAgICAgaWYgKHNraXBTdWdnZXN0ICYmICFza2lwU3VnZ2VzdChzdWdnZXN0KSkge1xyXG4gICAgICAgICAgICAgICAgc3VnZ2VzdHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHN1Z2dlc3QuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgaXNGaXh0dXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogX3RoaXMucHJvcHMuZ2V0U3VnZ2VzdExhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX3RoaXMucHJvcHMuZ2V0U3VnZ2VzdExhYmVsKHN1Z2dlc3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlZFN1YnN0cmluZ3M6IHN1Z2dlc3QubWF0Y2hlZF9zdWJzdHJpbmdzWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlSWQ6IHN1Z2dlc3QucGxhY2VfaWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYWN0aXZlU3VnZ2VzdCA9IHRoaXMudXBkYXRlQWN0aXZlU3VnZ2VzdChzdWdnZXN0cyk7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25VcGRhdGVTdWdnZXN0cykge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uVXBkYXRlU3VnZ2VzdHMoc3VnZ2VzdHMsIGFjdGl2ZVN1Z2dlc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3VnZ2VzdHM6IHN1Z2dlc3RzLCBhY3RpdmVTdWdnZXN0OiBhY3RpdmVTdWdnZXN0IH0sIGNhbGxiYWNrKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgbmV3IGFjdGl2ZVN1Z2dlc3Qgb2JqZWN0IGFmdGVyIHN1Z2dlc3RzIGhhdmUgYmVlbiB1cGRhdGVkXHJcbiAgICAgKi9cclxuICAgIGRlZmF1bHRfMS5wcm90b3R5cGUudXBkYXRlQWN0aXZlU3VnZ2VzdCA9IGZ1bmN0aW9uIChzdWdnZXN0cykge1xyXG4gICAgICAgIGlmIChzdWdnZXN0cyA9PT0gdm9pZCAwKSB7IHN1Z2dlc3RzID0gW107IH1cclxuICAgICAgICB2YXIgYWN0aXZlU3VnZ2VzdCA9IHRoaXMuc3RhdGUuYWN0aXZlU3VnZ2VzdDtcclxuICAgICAgICBpZiAoYWN0aXZlU3VnZ2VzdCkge1xyXG4gICAgICAgICAgICB2YXIgbmV3U3VnZ2VzdCA9IHN1Z2dlc3RzLmZpbHRlcihmdW5jdGlvbiAobGlzdGVkU3VnZ2VzdCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjdGl2ZVN1Z2dlc3QgJiZcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVTdWdnZXN0LnBsYWNlSWQgPT09IGxpc3RlZFN1Z2dlc3QucGxhY2VJZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVN1Z2dlc3QuaXNGaXh0dXJlID09PSBsaXN0ZWRTdWdnZXN0LmlzRml4dHVyZTtcclxuICAgICAgICAgICAgfSlbMF07XHJcbiAgICAgICAgICAgIGFjdGl2ZVN1Z2dlc3QgPSBuZXdTdWdnZXN0IHx8IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhY3RpdmVTdWdnZXN0O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogU2hvdyB0aGUgc3VnZ2VzdGlvbnNcclxuICAgICAqL1xyXG4gICAgZGVmYXVsdF8xLnByb3RvdHlwZS5zaG93U3VnZ2VzdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hTdWdnZXN0cygpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1N1Z2dlc3RzSGlkZGVuOiBmYWxzZSB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEhpZGUgdGhlIHN1Z2dlc3Rpb25zXHJcbiAgICAgKi9cclxuICAgIGRlZmF1bHRfMS5wcm90b3R5cGUuaGlkZVN1Z2dlc3RzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25CbHVyKHRoaXMuc3RhdGUudXNlcklucHV0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50aW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlU3VnZ2VzdDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGlzU3VnZ2VzdHNIaWRkZW46IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgMTAwKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEFjdGl2YXRlIGEgbmV3IHN1Z2dlc3RcclxuICAgICAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHksIG1heC1zdGF0ZW1lbnRzXHJcbiAgICBkZWZhdWx0XzEucHJvdG90eXBlLmFjdGl2YXRlU3VnZ2VzdCA9IGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc1N1Z2dlc3RzSGlkZGVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1N1Z2dlc3RzKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHN1Z2dlc3RzQ291bnQgPSB0aGlzLnN0YXRlLnN1Z2dlc3RzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgdmFyIG5leHQgPSBkaXJlY3Rpb24gPT09ICduZXh0JztcclxuICAgICAgICB2YXIgbmV3QWN0aXZlU3VnZ2VzdCA9IG51bGw7XHJcbiAgICAgICAgdmFyIG5ld0luZGV4ID0gMDtcclxuICAgICAgICB2YXIgaSA9IDA7XHJcbiAgICAgICAgZm9yIChpOyBpIDw9IHN1Z2dlc3RzQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5zdWdnZXN0c1tpXSA9PT0gdGhpcy5zdGF0ZS5hY3RpdmVTdWdnZXN0KSB7XHJcbiAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5leHQgPyBpICsgMSA6IGkgLSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5hY3RpdmVTdWdnZXN0KSB7XHJcbiAgICAgICAgICAgIG5ld0luZGV4ID0gbmV4dCA/IDAgOiBzdWdnZXN0c0NvdW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmV3SW5kZXggPj0gMCAmJiBuZXdJbmRleCA8PSBzdWdnZXN0c0NvdW50KSB7XHJcbiAgICAgICAgICAgIG5ld0FjdGl2ZVN1Z2dlc3QgPSB0aGlzLnN0YXRlLnN1Z2dlc3RzW25ld0luZGV4XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25BY3RpdmF0ZVN1Z2dlc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkFjdGl2YXRlU3VnZ2VzdChuZXdBY3RpdmVTdWdnZXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZVN1Z2dlc3Q6IG5ld0FjdGl2ZVN1Z2dlc3QgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBXaGVuIGFuIGl0ZW0gZ290IHNlbGVjdGVkXHJcbiAgICAgKi9cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XHJcbiAgICBkZWZhdWx0XzEucHJvdG90eXBlLnNlbGVjdFN1Z2dlc3QgPSBmdW5jdGlvbiAoc3VnZ2VzdFRvU2VsZWN0KSB7XHJcbiAgICAgICAgdmFyIHN1Z2dlc3QgPSBzdWdnZXN0VG9TZWxlY3QgfHwge1xyXG4gICAgICAgICAgICBpc0ZpeHR1cmU6IHRydWUsXHJcbiAgICAgICAgICAgIGxhYmVsOiB0aGlzLnN0YXRlLnVzZXJJbnB1dCxcclxuICAgICAgICAgICAgcGxhY2VJZDogdGhpcy5zdGF0ZS51c2VySW5wdXRcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICghc3VnZ2VzdFRvU2VsZWN0ICYmXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYXV0b0FjdGl2YXRlRmlyc3RTdWdnZXN0ICYmXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc3VnZ2VzdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBzdWdnZXN0ID0gdGhpcy5zdGF0ZS5zdWdnZXN0c1swXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzU3VnZ2VzdHNIaWRkZW46IHRydWUsXHJcbiAgICAgICAgICAgIHVzZXJJbnB1dDogdHlwZW9mIHN1Z2dlc3QubGFiZWwgIT09ICdvYmplY3QnXHJcbiAgICAgICAgICAgICAgICA/IHN1Z2dlc3QubGFiZWxcclxuICAgICAgICAgICAgICAgIDogc3VnZ2VzdC5kZXNjcmlwdGlvbiB8fCAnJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChzdWdnZXN0LmxvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpZ25vcmVCbHVyOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25TdWdnZXN0U2VsZWN0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uU3VnZ2VzdFNlbGVjdChzdWdnZXN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2VvY29kZVN1Z2dlc3Qoc3VnZ2VzdCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZW9jb2RlIGEgc3VnZ2VzdFxyXG4gICAgICovXHJcbiAgICBkZWZhdWx0XzEucHJvdG90eXBlLmdlb2NvZGVTdWdnZXN0ID0gZnVuY3Rpb24gKHN1Z2dlc3RUb0dlb2NvZGUpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICghdGhpcy5nZW9jb2Rlcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdWdnZXN0VG9HZW9jb2RlLnBsYWNlSWQgJiZcclxuICAgICAgICAgICAgIXN1Z2dlc3RUb0dlb2NvZGUuaXNGaXh0dXJlICYmXHJcbiAgICAgICAgICAgIHRoaXMucGxhY2VzU2VydmljZSkge1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIHBsYWNlSWQ6IHN1Z2dlc3RUb0dlb2NvZGUucGxhY2VJZCxcclxuICAgICAgICAgICAgICAgIHNlc3Npb25Ub2tlbjogdGhpcy5zZXNzaW9uVG9rZW5cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMucGxhY2VEZXRhaWxGaWVsZHMpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuZmllbGRzID0gdGhpcy5wcm9wcy5wbGFjZURldGFpbEZpZWxkcztcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuZmllbGRzLnVuc2hpZnQoJ2dlb21ldHJ5Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5wbGFjZXNTZXJ2aWNlLmdldERldGFpbHMob3B0aW9ucywgZnVuY3Rpb24gKHJlc3VsdHMsIHN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gX3RoaXMuZ29vZ2xlTWFwcy5wbGFjZXMuUGxhY2VzU2VydmljZVN0YXR1cy5PSykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBnbWFwcyA9IHJlc3VsdHM7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxvY2F0aW9uXzEgPSAoZ21hcHMuZ2VvbWV0cnkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ21hcHMuZ2VvbWV0cnkubG9jYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdWdnZXN0ID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHN1Z2dlc3RUb0dlb2NvZGUpLCB7IGdtYXBzOiBnbWFwcywgbG9jYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhdDogbG9jYXRpb25fMS5sYXQoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxuZzogbG9jYXRpb25fMS5sbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNlc3Npb25Ub2tlbiA9IG5ldyBnb29nbGUubWFwcy5wbGFjZXMuQXV0b2NvbXBsZXRlU2Vzc2lvblRva2VuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLnByb3BzLm9uU3VnZ2VzdFNlbGVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5wcm9wcy5vblN1Z2dlc3RTZWxlY3Qoc3VnZ2VzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgYWRkcmVzczogc3VnZ2VzdFRvR2VvY29kZS5sYWJlbCxcclxuICAgICAgICAgICAgICAgIGJvdW5kczogdGhpcy5wcm9wcy5ib3VuZHMsXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnRSZXN0cmljdGlvbnM6IHRoaXMucHJvcHMuY291bnRyeVxyXG4gICAgICAgICAgICAgICAgICAgID8geyBjb3VudHJ5OiB0aGlzLnByb3BzLmNvdW50cnkgfVxyXG4gICAgICAgICAgICAgICAgICAgIDogLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogdGhpcy5wcm9wcy5sb2NhdGlvblxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLmdlb2NvZGVyLmdlb2NvZGUob3B0aW9ucywgZnVuY3Rpb24gKHJlc3VsdHMsIHN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gX3RoaXMuZ29vZ2xlTWFwcy5HZW9jb2RlclN0YXR1cy5PSykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBnbWFwcyA9IHJlc3VsdHNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxvY2F0aW9uXzIgPSAoZ21hcHMuZ2VvbWV0cnkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ21hcHMuZ2VvbWV0cnkubG9jYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdWdnZXN0ID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHN1Z2dlc3RUb0dlb2NvZGUpLCB7IGdtYXBzOiBnbWFwcywgbG9jYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhdDogbG9jYXRpb25fMi5sYXQoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxuZzogbG9jYXRpb25fMi5sbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5wcm9wcy5vblN1Z2dlc3RTZWxlY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucHJvcHMub25TdWdnZXN0U2VsZWN0KHN1Z2dlc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmVuZGVyIHRoZSB2aWV3XHJcbiAgICAgKi9cclxuICAgIGRlZmF1bHRfMS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBmaWx0ZXJJbnB1dEF0dHJpYnV0ZXModGhpcy5wcm9wcyk7XHJcbiAgICAgICAgdmFyIGNsYXNzZXMgPSBjbGFzc25hbWVzKCdnZW9zdWdnZXN0JywgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHtcclxuICAgICAgICAgICAgJ2dlb3N1Z2dlc3QtLWxvYWRpbmcnOiB0aGlzLnN0YXRlLmlzTG9hZGluZ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBpbnB1dCA9IChjcmVhdGVFbGVtZW50KElucHV0LCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogdGhpcy5wcm9wcy5pbnB1dENsYXNzTmFtZSwgcmVmOiBmdW5jdGlvbiAoaSkgeyByZXR1cm4gKF90aGlzLmlucHV0ID0gaSk7IH0sIHZhbHVlOiB0aGlzLnN0YXRlLnVzZXJJbnB1dCwgZG9Ob3RTdWJtaXRPbkVudGVyOiAhdGhpcy5zdGF0ZS5pc1N1Z2dlc3RzSGlkZGVuLCBpZ25vcmVUYWI6IHRoaXMucHJvcHMuaWdub3JlVGFiLCBpZ25vcmVFbnRlcjogdGhpcy5wcm9wcy5pZ25vcmVFbnRlciwgc3R5bGU6IHRoaXMucHJvcHMuc3R5bGUgJiYgdGhpcy5wcm9wcy5zdHlsZS5pbnB1dCwgb25DaGFuZ2U6IHRoaXMub25JbnB1dENoYW5nZSwgb25Gb2N1czogdGhpcy5vbklucHV0Rm9jdXMsIG9uQmx1cjogdGhpcy5vbklucHV0Qmx1ciwgb25LZXlEb3duOiB0aGlzLnByb3BzLm9uS2V5RG93biwgb25LZXlQcmVzczogdGhpcy5wcm9wcy5vbktleVByZXNzLCBpbnB1dFR5cGU6IHRoaXMucHJvcHMuaW5wdXRUeXBlLCBvbk5leHQ6IHRoaXMub25OZXh0LCBvblByZXY6IHRoaXMub25QcmV2LCBvblNlbGVjdDogdGhpcy5vblNlbGVjdCwgb25Fc2NhcGU6IHRoaXMuaGlkZVN1Z2dlc3RzLCBpc1N1Z2dlc3RzSGlkZGVuOiB0aGlzLnN0YXRlLmlzU3VnZ2VzdHNIaWRkZW4sIGFjdGl2ZVN1Z2dlc3Q6IHRoaXMuc3RhdGUuYWN0aXZlU3VnZ2VzdCwgbGFiZWw6IHRoaXMucHJvcHMubGFiZWwsIGlkOiB0aGlzLnByb3BzLmlkLCBsaXN0SWQ6IHRoaXMubGlzdElkIH0sIGF0dHJpYnV0ZXMpKSk7XHJcbiAgICAgICAgdmFyIHN1Z2dlc3Rpb25zTGlzdCA9IChjcmVhdGVFbGVtZW50KGRlZmF1bHRfMSQxLCB7IGlzSGlkZGVuOiB0aGlzLnN0YXRlLmlzU3VnZ2VzdHNIaWRkZW4sIHN0eWxlOiB0aGlzLnByb3BzLnN0eWxlICYmIHRoaXMucHJvcHMuc3R5bGUuc3VnZ2VzdHMsIHN1Z2dlc3RJdGVtU3R5bGU6IHRoaXMucHJvcHMuc3R5bGUgJiYgdGhpcy5wcm9wcy5zdHlsZS5zdWdnZXN0SXRlbSwgdXNlcklucHV0OiB0aGlzLnN0YXRlLnVzZXJJbnB1dCwgaXNIaWdobGlnaHRNYXRjaDogQm9vbGVhbih0aGlzLnByb3BzLmhpZ2hsaWdodE1hdGNoKSwgc3VnZ2VzdHNDbGFzc05hbWU6IHRoaXMucHJvcHMuc3VnZ2VzdHNDbGFzc05hbWUsIHN1Z2dlc3RJdGVtQ2xhc3NOYW1lOiB0aGlzLnByb3BzLnN1Z2dlc3RJdGVtQ2xhc3NOYW1lLCBzdWdnZXN0czogdGhpcy5zdGF0ZS5zdWdnZXN0cywgaGlkZGVuQ2xhc3NOYW1lOiB0aGlzLnByb3BzLnN1Z2dlc3RzSGlkZGVuQ2xhc3NOYW1lLCBzdWdnZXN0SXRlbUFjdGl2ZUNsYXNzTmFtZTogdGhpcy5wcm9wcy5zdWdnZXN0SXRlbUFjdGl2ZUNsYXNzTmFtZSwgYWN0aXZlU3VnZ2VzdDogdGhpcy5zdGF0ZS5hY3RpdmVTdWdnZXN0LCBvblN1Z2dlc3ROb1Jlc3VsdHM6IHRoaXMub25TdWdnZXN0Tm9SZXN1bHRzLCBvblN1Z2dlc3RNb3VzZURvd246IHRoaXMub25TdWdnZXN0TW91c2VEb3duLCBvblN1Z2dlc3RNb3VzZU91dDogdGhpcy5vblN1Z2dlc3RNb3VzZU91dCwgb25TdWdnZXN0U2VsZWN0OiB0aGlzLnNlbGVjdFN1Z2dlc3QsIHJlbmRlclN1Z2dlc3RJdGVtOiB0aGlzLnByb3BzLnJlbmRlclN1Z2dlc3RJdGVtLCBsaXN0SWQ6IHRoaXMubGlzdElkIH0pKTtcclxuICAgICAgICByZXR1cm4gKGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzZXMsIGlkOiB0aGlzLnByb3BzLmlkIH0sXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZ2Vvc3VnZ2VzdF9faW5wdXQtd3JhcHBlclwiIH0sIGlucHV0KSxcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJnZW9zdWdnZXN0X19zdWdnZXN0cy13cmFwcGVyXCIgfSwgc3VnZ2VzdGlvbnNMaXN0KSkpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogRGVmYXVsdCB2YWx1ZXMgZm9yIHRoZSBwcm9wZXJ0aWVzXHJcbiAgICAgKi9cclxuICAgIGRlZmF1bHRfMS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0cztcclxuICAgIHJldHVybiBkZWZhdWx0XzE7XHJcbn0oQ29tcG9uZW50KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRfMSQyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2VudGl0eSA9IHJlcXVpcmUoJy4vZW50aXR5Jyk7XG5cbnZhciBfZW50aXR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2VudGl0eSk7XG5cbnZhciBfZXZlbnRzQ2lyY2xlID0gcmVxdWlyZSgnLi4vZXZlbnRzL2NpcmNsZScpO1xuXG52YXIgX2V2ZW50c0NpcmNsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ldmVudHNDaXJjbGUpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSAoMCwgX2VudGl0eTJbJ2RlZmF1bHQnXSkoJ0NpcmNsZScsICdjZW50ZXInLCBfZXZlbnRzQ2lyY2xlMlsnZGVmYXVsdCddKTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NyZWF0ZVJlYWN0Q2xhc3MgPSByZXF1aXJlKCdjcmVhdGUtcmVhY3QtY2xhc3MnKTtcblxudmFyIF9jcmVhdGVSZWFjdENsYXNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVJlYWN0Q2xhc3MpO1xuXG52YXIgX21peGluc0xpc3RlbmVyID0gcmVxdWlyZSgnLi4vbWl4aW5zL2xpc3RlbmVyJyk7XG5cbnZhciBfbWl4aW5zTGlzdGVuZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWl4aW5zTGlzdGVuZXIpO1xuXG52YXIgX3V0aWxzQ29tcGFyZVByb3BzID0gcmVxdWlyZSgnLi4vdXRpbHMvY29tcGFyZS1wcm9wcycpO1xuXG52YXIgX3V0aWxzQ29tcGFyZVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ29tcGFyZVByb3BzKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKG5hbWUsIGxhdExuZ1Byb3AsIGV2ZW50cykge1xuICByZXR1cm4gKDAsIF9jcmVhdGVSZWFjdENsYXNzMlsnZGVmYXVsdCddKSh7XG5cbiAgICBtaXhpbnM6IFtfbWl4aW5zTGlzdGVuZXIyWydkZWZhdWx0J11dLFxuXG4gICAgZW50aXR5OiBudWxsLFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLmdldE9wdGlvbnModGhpcy5wcm9wcyk7XG4gICAgICB0aGlzLmVudGl0eSA9IG5ldyBnb29nbGUubWFwc1tuYW1lXShvcHRpb25zKTtcbiAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKHRoaXMuZW50aXR5LCBldmVudHMpO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgaWYgKCEoMCwgX3V0aWxzQ29tcGFyZVByb3BzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLCBuZXh0UHJvcHMpKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gdGhpcy5nZXRPcHRpb25zKG5leHRQcm9wcyk7XG4gICAgICAgIHRoaXMuZW50aXR5LnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuZW50aXR5LnNldE1hcChudWxsKTtcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLmVudGl0eSA9IG51bGw7XG4gICAgfSxcblxuICAgIGdldEVudGl0eTogZnVuY3Rpb24gZ2V0RW50aXR5KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZW50aXR5O1xuICAgIH0sXG5cbiAgICBnZXRPcHRpb25zOiBmdW5jdGlvbiBnZXRPcHRpb25zKHByb3BzKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHByb3BzLCBfZGVmaW5lUHJvcGVydHkoe30sIGxhdExuZ1Byb3AsIHRoaXMuc3dpdGNoUGF0aHMobmFtZSwgcHJvcHMpKSk7XG4gICAgfSxcblxuICAgIHN3aXRjaFBhdGhzOiBmdW5jdGlvbiBzd2l0Y2hQYXRocyhuYW1lLCBwcm9wcykge1xuICAgICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgIGNhc2UgJ1BvbHlsaW5lJzpcbiAgICAgICAgICByZXR1cm4gcHJvcHMucGF0aDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUG9seWdvbic6XG4gICAgICAgICAgcmV0dXJuIHByb3BzLnBhdGhzO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKHByb3BzLmxhdCwgcHJvcHMubG5nKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfY3JlYXRlUmVhY3RDbGFzcyA9IHJlcXVpcmUoJ2NyZWF0ZS1yZWFjdC1jbGFzcycpO1xuXG52YXIgX2NyZWF0ZVJlYWN0Q2xhc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlUmVhY3RDbGFzcyk7XG5cbnZhciBfb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgX29iamVjdEFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RBc3NpZ24pO1xuXG52YXIgX2V2ZW50c01hcCA9IHJlcXVpcmUoJy4uL2V2ZW50cy9tYXAnKTtcblxudmFyIF9ldmVudHNNYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXZlbnRzTWFwKTtcblxudmFyIF9taXhpbnNMaXN0ZW5lciA9IHJlcXVpcmUoJy4uL21peGlucy9saXN0ZW5lcicpO1xuXG52YXIgX21peGluc0xpc3RlbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21peGluc0xpc3RlbmVyKTtcblxudmFyIF91dGlsc0dvb2dsZU1hcHMgPSByZXF1aXJlKCcuLi91dGlscy9nb29nbGUtbWFwcycpO1xuXG52YXIgX3V0aWxzR29vZ2xlTWFwczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0dvb2dsZU1hcHMpO1xuXG52YXIgX3V0aWxzQ29tcGFyZVByb3BzID0gcmVxdWlyZSgnLi4vdXRpbHMvY29tcGFyZS1wcm9wcycpO1xuXG52YXIgX3V0aWxzQ29tcGFyZVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ29tcGFyZVByb3BzKTtcblxudmFyIEdtYXBzID0gKDAsIF9jcmVhdGVSZWFjdENsYXNzMlsnZGVmYXVsdCddKSh7XG5cbiAgbWl4aW5zOiBbX21peGluc0xpc3RlbmVyMlsnZGVmYXVsdCddXSxcblxuICBtYXA6IG51bGwsXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTWFwQ3JlYXRlZDogZmFsc2VcbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNhbGxiYWNrSW5kZXg6IF91dGlsc0dvb2dsZU1hcHMyWydkZWZhdWx0J10ubG9hZCh0aGlzLnByb3BzLnBhcmFtcywgdGhpcy5tYXBzQ2FsbGJhY2spXG4gICAgfSk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIF91dGlsc0dvb2dsZU1hcHMyWydkZWZhdWx0J10ucmVtb3ZlQ2FsbGJhY2sodGhpcy5zdGF0ZS5jYWxsYmFja0luZGV4KTtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKHRoaXMubWFwICYmICEoMCwgX3V0aWxzQ29tcGFyZVByb3BzMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLCBuZXh0UHJvcHMpKSB7XG4gICAgICB0aGlzLm1hcC5zZXRPcHRpb25zKF9leHRlbmRzKHt9LCBuZXh0UHJvcHMsIHtcbiAgICAgICAgY2VudGVyOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKG5leHRQcm9wcy5sYXQsIG5leHRQcm9wcy5sbmcpXG4gICAgICB9KSk7XG4gICAgfVxuICB9LFxuXG4gIGdldE1hcDogZnVuY3Rpb24gZ2V0TWFwKCkge1xuICAgIHJldHVybiB0aGlzLm1hcDtcbiAgfSxcblxuICBtYXBzQ2FsbGJhY2s6IGZ1bmN0aW9uIG1hcHNDYWxsYmFjaygpIHtcbiAgICB0aGlzLmNyZWF0ZU1hcCgpO1xuICAgIHRoaXMuYWRkTGlzdGVuZXJzKHRoaXMubWFwLCBfZXZlbnRzTWFwMlsnZGVmYXVsdCddKTtcbiAgfSxcblxuICBjcmVhdGVNYXA6IGZ1bmN0aW9uIGNyZWF0ZU1hcCgpIHtcbiAgICB2YXIgbm9kZSA9IF9yZWFjdERvbTJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICB0aGlzLm1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAobm9kZSwgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgIGNlbnRlcjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyh0aGlzLnByb3BzLmxhdCwgdGhpcy5wcm9wcy5sbmcpXG4gICAgfSkpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNNYXBDcmVhdGVkOiB0cnVlXG4gICAgfSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25NYXBDcmVhdGVkKSB7XG4gICAgICB0aGlzLnByb3BzLm9uTWFwQ3JlYXRlZCh0aGlzLm1hcCk7XG4gICAgfVxuICB9LFxuXG4gIGdldENoaWxkcmVuOiBmdW5jdGlvbiBnZXRDaGlsZHJlbigpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5DaGlsZHJlbi5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICBpZiAoIV9yZWFjdDJbJ2RlZmF1bHQnXS5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgcmVmOiBjaGlsZC5yZWYsXG4gICAgICAgIG1hcDogX3RoaXMubWFwXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgc3R5bGUgPSAoMCwgX29iamVjdEFzc2lnbjJbJ2RlZmF1bHQnXSkoe1xuICAgICAgd2lkdGg6IHRoaXMucHJvcHMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0XG4gICAgfSwgdGhpcy5wcm9wcy5zdHlsZSk7XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IHN0eWxlOiBzdHlsZSwgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmNsYXNzTmFtZSB9LFxuICAgICAgdGhpcy5wcm9wcy5sb2FkaW5nTWVzc2FnZSB8fCAnTG9hZGluZy4uLicsXG4gICAgICB0aGlzLnN0YXRlLmlzTWFwQ3JlYXRlZCA/IHRoaXMuZ2V0Q2hpbGRyZW4oKSA6IG51bGxcbiAgICApO1xuICB9XG5cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBHbWFwcztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9lbnRpdHkgPSByZXF1aXJlKCcuL2VudGl0eScpO1xuXG52YXIgX2VudGl0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9lbnRpdHkpO1xuXG52YXIgX2V2ZW50c0luZm9XaW5kb3cgPSByZXF1aXJlKCcuLi9ldmVudHMvaW5mby13aW5kb3cnKTtcblxudmFyIF9ldmVudHNJbmZvV2luZG93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V2ZW50c0luZm9XaW5kb3cpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSAoMCwgX2VudGl0eTJbJ2RlZmF1bHQnXSkoJ0luZm9XaW5kb3cnLCAncG9zaXRpb24nLCBfZXZlbnRzSW5mb1dpbmRvdzJbJ2RlZmF1bHQnXSk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfZW50aXR5ID0gcmVxdWlyZSgnLi9lbnRpdHknKTtcblxudmFyIF9lbnRpdHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZW50aXR5KTtcblxudmFyIF9ldmVudHNNYXJrZXIgPSByZXF1aXJlKCcuLi9ldmVudHMvbWFya2VyJyk7XG5cbnZhciBfZXZlbnRzTWFya2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V2ZW50c01hcmtlcik7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9ICgwLCBfZW50aXR5MlsnZGVmYXVsdCddKSgnTWFya2VyJywgJ3Bvc2l0aW9uJywgX2V2ZW50c01hcmtlcjJbJ2RlZmF1bHQnXSk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfZW50aXR5ID0gcmVxdWlyZSgnLi9lbnRpdHknKTtcblxudmFyIF9lbnRpdHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZW50aXR5KTtcblxudmFyIF9ldmVudHNQb2x5Z29uID0gcmVxdWlyZSgnLi4vZXZlbnRzL3BvbHlnb24nKTtcblxudmFyIF9ldmVudHNQb2x5Z29uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V2ZW50c1BvbHlnb24pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSAoMCwgX2VudGl0eTJbJ2RlZmF1bHQnXSkoJ1BvbHlnb24nLCAncGF0aHMnLCBfZXZlbnRzUG9seWdvbjJbJ2RlZmF1bHQnXSk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfZW50aXR5ID0gcmVxdWlyZSgnLi9lbnRpdHknKTtcblxudmFyIF9lbnRpdHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZW50aXR5KTtcblxudmFyIF9ldmVudHNQb2x5bGluZSA9IHJlcXVpcmUoJy4uL2V2ZW50cy9wb2x5bGluZScpO1xuXG52YXIgX2V2ZW50c1BvbHlsaW5lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V2ZW50c1BvbHlsaW5lKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gKDAsIF9lbnRpdHkyWydkZWZhdWx0J10pKCdQb2x5bGluZScsICdwYXRoJywgX2V2ZW50c1BvbHlsaW5lMlsnZGVmYXVsdCddKTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzWydkZWZhdWx0J10gPSB7XG4gIG9uQ2VudGVyQ2hhbmdlZDogJ2NlbnRlcl9jaGFuZ2VkJyxcbiAgb25DbGljazogJ2NsaWNrJyxcbiAgb25EYmxDbGljazogJ2RibGNsaWNrJyxcbiAgb25EcmFnOiAnZHJhZycsXG4gIG9uRHJhZ0VuZDogJ2RyYWdlbmQnLFxuICBvbkRyYWdTdGFydDogJ2RyYWdzdGFydCcsXG4gIG9uTW91c2VEb3duOiAnbW91c2Vkb3duJyxcbiAgb25Nb3VzZU1vdmU6ICdtb3VzZW1vdmUnLFxuICBvbk1vdXNlT3V0OiAnbW91c2VvdXQnLFxuICBvbk1vdXNlT3ZlcjogJ21vdXNlb3ZlcicsXG4gIG9uTW91c2VVcDogJ21vdXNldXAnLFxuICBvblJhZGl1c0NoYW5nZWQ6ICdyYWRpdXNfY2hhbmdlZCcsXG4gIG9uUmlnaHRDbGljazogJ3JpZ2h0Y2xpY2snXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHtcbiAgb25DbG9zZUNsaWNrOiAnY2xvc2VjbGljaycsXG4gIG9uQ29udGVudENoYW5nZWQ6ICdjb250ZW50X2NoYW5nZWQnLFxuICBvbkRPTVJlYWR5OiAnZG9tcmVhZHknLFxuICBvblBvc2l0aW9uQ2hhbmdlZDogJ3Bvc2l0aW9uX2NoYW5nZWQnLFxuICBvblppbmRleENoYW5nZWQ6ICd6aW5kZXhfY2hhbmdlZCdcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1snZGVmYXVsdCddID0ge1xuICBvbkJvdW5kc0NoYW5nZWQ6ICdib3VuZHNfY2hhbmdlZCcsXG4gIG9uQ2VudGVyQ2hhbmdlZDogJ2NlbnRlcl9jaGFuZ2VkJyxcbiAgb25DbGljazogJ2NsaWNrJyxcbiAgb25EYmxDbGljazogJ2RibGNsaWNrJyxcbiAgb25EcmFnOiAnZHJhZycsXG4gIG9uRHJhZ0VuZDogJ2RyYWdlbmQnLFxuICBvbkRyYWdTdGFydDogJ2RyYWdzdGFydCcsXG4gIG9uSGVhZGluZ0NoYW5nZWQ6ICdoZWFkaW5nX2NoYW5nZWQnLFxuICBvbklkbGU6ICdpZGxlJyxcbiAgb25NYXBUeXBlSWRDaGFuZ2VkOiAnbWFwdHlwZWlkX2NoYW5nZWQnLFxuICBvbk1vdXNlTW92ZTogJ21vdXNlbW92ZScsXG4gIG9uTW91c2VPdXQ6ICdtb3VzZW91dCcsXG4gIG9uTW91c2VPdmVyOiAnbW91c2VvdmVyJyxcbiAgb25Qcm9qZWN0aW9uQ2hhbmdlZDogJ3Byb2plY3Rpb25fY2hhbmdlZCcsXG4gIG9uUmVzaXplOiAncmVzaXplJyxcbiAgb25SaWdodENsaWNrOiAncmlnaHRjbGljaycsXG4gIG9uVGlsZXNMb2FkZWQ6ICd0aWxlc2xvYWRlZCcsXG4gIG9uVGlsdENoYW5nZWQ6ICd0aWx0X2NoYW5nZWQnLFxuICBvblpvb21DaGFuZ2VkOiAnem9vbV9jaGFuZ2VkJ1xufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzWydkZWZhdWx0J10gPSB7XG4gIG9uQW5pbWF0aW9uQ2hhbmdlZDogJ2FuaW1hdGlvbl9jaGFuZ2VkJyxcbiAgb25DbGljazogJ2NsaWNrJyxcbiAgb25DbGlja2FibGVDaGFuZ2VkOiAnY2xpY2thYmxlX2NoYW5nZWQnLFxuICBvbkN1cnNvckNoYW5nZWQ6ICdjdXJzb3JfY2hhbmdlZCcsXG4gIG9uRGJsQ2xpY2s6ICdkYmxjbGljaycsXG4gIG9uRHJhZzogJ2RyYWcnLFxuICBvbkRyYWdFbmQ6ICdkcmFnZW5kJyxcbiAgb25EcmFnZ2FibGVDaGFuZ2VkOiAnZHJhZ2dhYmxlX2NoYW5nZWQnLFxuICBvbkRyYWdTdGFydDogJ2RyYWdzdGFydCcsXG4gIG9uRmxhdENoYW5nZWQ6ICdmbGF0X2NoYW5nZWQnLFxuICBvbkljb25DaGFuZ2VkOiAnaWNvbl9jaGFuZ2VkJyxcbiAgb25Nb3VzZURvd246ICdtb3VzZWRvd24nLFxuICBvbk1vdXNlT3V0OiAnbW91c2VvdXQnLFxuICBvbk1vdXNlT3ZlcjogJ21vdXNlb3ZlcicsXG4gIG9uTW91c2VVcDogJ21vdXNldXAnLFxuICBvblBvc2l0aW9uQ2hhbmdlZDogJ3Bvc2l0aW9uX2NoYW5nZWQnLFxuICBvblJpZ2h0Q2xpY2s6ICdyaWdodGNsaWNrJyxcbiAgb25TaGFwZUNoYW5nZWQ6ICdzaGFwZV9jaGFuZ2VkJyxcbiAgb25UaXRsZUNoYW5nZWQ6ICd0aXRsZV9jaGFuZ2VkJyxcbiAgb25WaXNpYmxlQ2hhbmdlZDogJ3Zpc2libGVfY2hhbmdlZCcsXG4gIG9uWmluZGV4Q2hhbmdlZDogJ3ppbmRleF9jaGFuZ2VkJ1xufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzWydkZWZhdWx0J10gPSB7XG4gIG9uQ2xpY2s6ICdjbGljaycsXG4gIG9uRGJsQ2xpY2s6ICdkYmxjbGljaycsXG4gIG9uRHJhZzogJ2RyYWcnLFxuICBvbkRyYWdFbmQ6ICdkcmFnZW5kJyxcbiAgb25EcmFnU3RhcnQ6ICdkcmFnc3RhcnQnLFxuICBvbk1vdXNlRG93bjogJ21vdXNlZG93bicsXG4gIG9uTW91c2VNb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgb25Nb3VzZU91dDogJ21vdXNlb3V0JyxcbiAgb25Nb3VzZU92ZXI6ICdtb3VzZW92ZXInLFxuICBvbk1vdXNlVXA6ICdtb3VzZXVwJyxcbiAgb25SaWdodENsaWNrOiAncmlnaHRjbGljaydcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1snZGVmYXVsdCddID0ge1xuICBvbkNsaWNrOiAnY2xpY2snLFxuICBvbkRibENsaWNrOiAnZGJsY2xpY2snLFxuICBvbkRyYWc6ICdkcmFnJyxcbiAgb25EcmFnRW5kOiAnZHJhZ2VuZCcsXG4gIG9uRHJhZ1N0YXJ0OiAnZHJhZ3N0YXJ0JyxcbiAgb25Nb3VzZURvd246ICdtb3VzZWRvd24nLFxuICBvbk1vdXNlTW92ZTogJ21vdXNlbW92ZScsXG4gIG9uTW91c2VPdXQ6ICdtb3VzZW91dCcsXG4gIG9uTW91c2VPdmVyOiAnbW91c2VvdmVyJyxcbiAgb25Nb3VzZVVwOiAnbW91c2V1cCcsXG4gIG9uUmlnaHRDbGljazogJ3JpZ2h0Y2xpY2snXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2NvbXBvbmVudHNHbWFwcyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9nbWFwcycpO1xuXG52YXIgX2NvbXBvbmVudHNHbWFwczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wb25lbnRzR21hcHMpO1xuXG52YXIgX2NvbXBvbmVudHNNYXJrZXIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvbWFya2VyJyk7XG5cbnZhciBfY29tcG9uZW50c01hcmtlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wb25lbnRzTWFya2VyKTtcblxudmFyIF9jb21wb25lbnRzSW5mb1dpbmRvdyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9pbmZvLXdpbmRvdycpO1xuXG52YXIgX2NvbXBvbmVudHNJbmZvV2luZG93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBvbmVudHNJbmZvV2luZG93KTtcblxudmFyIF9jb21wb25lbnRzQ2lyY2xlID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2NpcmNsZScpO1xuXG52YXIgX2NvbXBvbmVudHNDaXJjbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcG9uZW50c0NpcmNsZSk7XG5cbnZhciBfY29tcG9uZW50c1BvbHlsaW5lID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3BvbHlsaW5lJyk7XG5cbnZhciBfY29tcG9uZW50c1BvbHlsaW5lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBvbmVudHNQb2x5bGluZSk7XG5cbnZhciBfY29tcG9uZW50c1BvbHlnb24gPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvcG9seWdvbicpO1xuXG52YXIgX2NvbXBvbmVudHNQb2x5Z29uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBvbmVudHNQb2x5Z29uKTtcblxuZXhwb3J0cy5HbWFwcyA9IF9jb21wb25lbnRzR21hcHMyWydkZWZhdWx0J107XG5leHBvcnRzLk1hcmtlciA9IF9jb21wb25lbnRzTWFya2VyMlsnZGVmYXVsdCddO1xuZXhwb3J0cy5JbmZvV2luZG93ID0gX2NvbXBvbmVudHNJbmZvV2luZG93MlsnZGVmYXVsdCddO1xuZXhwb3J0cy5DaXJjbGUgPSBfY29tcG9uZW50c0NpcmNsZTJbJ2RlZmF1bHQnXTtcbmV4cG9ydHMuUG9seWxpbmUgPSBfY29tcG9uZW50c1BvbHlsaW5lMlsnZGVmYXVsdCddO1xuZXhwb3J0cy5Qb2x5Z29uID0gX2NvbXBvbmVudHNQb2x5Z29uMlsnZGVmYXVsdCddOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgTGlzdGVuZXIgPSB7XG5cbiAgYWRkTGlzdGVuZXJzOiBmdW5jdGlvbiBhZGRMaXN0ZW5lcnMoZW50aXR5LCBldmVudHMpIHtcbiAgICBmb3IgKHZhciBwcm9wIGluIHRoaXMucHJvcHMpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmhhc093blByb3BlcnR5KHByb3ApICYmIGV2ZW50c1twcm9wXSkge1xuICAgICAgICB2YXIgYWRkTGlzdGVuZXIgPSBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcjtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gYWRkTGlzdGVuZXIoZW50aXR5LCBldmVudHNbcHJvcF0sIHRoaXMucHJvcHNbcHJvcF0pO1xuICAgICAgICBpZiAoIXRoaXMubGlzdGVuZXJzKSB7XG4gICAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgcmVtb3ZlTGlzdGVuZXJzOiBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKHdpbmRvdy5nb29nbGUgJiYgdGhpcy5saXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LnJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG59O1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IExpc3RlbmVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAocHJvcHMsIG5leHRQcm9wcykge1xuXG4gIHZhciBwcm9wc0tleXMgPSBPYmplY3Qua2V5cyhwcm9wcyk7XG4gIHZhciBuZXh0UHJvcHNLZXlzID0gT2JqZWN0LmtleXMobmV4dFByb3BzKTtcbiAgaWYgKHByb3BzS2V5cy5sZW5ndGggIT09IG5leHRQcm9wc0tleXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wc0tleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0gcHJvcHNLZXlzW2ldO1xuICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5LmluZGV4T2YoJ29uJykgIT09IDAgJiYgKCFuZXh0UHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSB8fCBwcm9wc1trZXldICE9PSBuZXh0UHJvcHNba2V5XSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9xdWVyeXN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5c3RyaW5nJyk7XG5cbnZhciBfcXVlcnlzdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcXVlcnlzdHJpbmcpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSB7XG5cbiAgY2FsbGJhY2tzOiBbXSxcblxuICBhcHBlbmRlZDogZmFsc2UsXG5cbiAgbG9hZDogZnVuY3Rpb24gbG9hZChwYXJhbXMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5jYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgaWYgKGdvb2dsZU1hcHNFeGlzdHMoKSkge1xuICAgICAgc2V0VGltZW91dCh0aGlzLmZpcmVDYWxsYmFja3MuYmluZCh0aGlzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5hcHBlbmRlZCkge1xuICAgICAgICB3aW5kb3cubWFwc0NhbGxiYWNrID0gdGhpcy5tYXBzQ2FsbGJhY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hcHBlbmRTY3JpcHQocGFyYW1zKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGluZGV4O1xuICB9LFxuXG4gIGdldFNyYzogZnVuY3Rpb24gZ2V0U3JjKHBhcmFtcykge1xuICAgIHZhciBzcmMgPSAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzJztcbiAgICBzcmMgKz0gJz9jYWxsYmFjaz1tYXBzQ2FsbGJhY2smJztcbiAgICBzcmMgKz0gX3F1ZXJ5c3RyaW5nMlsnZGVmYXVsdCddLnN0cmluZ2lmeShwYXJhbXMpO1xuICAgIHJldHVybiBzcmM7XG4gIH0sXG5cbiAgYXBwZW5kU2NyaXB0OiBmdW5jdGlvbiBhcHBlbmRTY3JpcHQocGFyYW1zKSB7XG4gICAgdmFyIHNyYyA9IHRoaXMuZ2V0U3JjKHBhcmFtcyk7XG4gICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNyYyk7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIHRoaXMuYXBwZW5kZWQgPSB0cnVlO1xuICB9LFxuXG4gIG1hcHNDYWxsYmFjazogZnVuY3Rpb24gbWFwc0NhbGxiYWNrKCkge1xuICAgIHdpbmRvdy5tYXBzQ2FsbGJhY2sgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5maXJlQ2FsbGJhY2tzKCk7XG4gIH0sXG5cbiAgZmlyZUNhbGxiYWNrczogZnVuY3Rpb24gZmlyZUNhbGxiYWNrcygpIHtcbiAgICB0aGlzLmNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfSk7XG4gICAgdGhpcy5jYWxsYmFja3MgPSBbXTtcbiAgfSxcblxuICByZW1vdmVDYWxsYmFjazogZnVuY3Rpb24gcmVtb3ZlQ2FsbGJhY2soaW5kZXgpIHtcbiAgICB0aGlzLmNhbGxiYWNrcy5zcGxpY2UoaW5kZXggLSAxLCAxKTtcbiAgfVxuXG59O1xuXG52YXIgZ29vZ2xlTWFwc0V4aXN0cyA9IGZ1bmN0aW9uIGdvb2dsZU1hcHNFeGlzdHMoKSB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93Lmdvb2dsZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHdpbmRvdy5nb29nbGUubWFwcyA9PT0gJ29iamVjdCc7XG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4vaXNPYmplY3QuanMnO1xuaW1wb3J0IHsgbmF0aXZlQ3JlYXRlIH0gZnJvbSAnLi9fc2V0dXAuanMnO1xuXG4vLyBDcmVhdGUgYSBuYWtlZCBmdW5jdGlvbiByZWZlcmVuY2UgZm9yIHN1cnJvZ2F0ZS1wcm90b3R5cGUtc3dhcHBpbmcuXG5mdW5jdGlvbiBjdG9yKCkge1xuICByZXR1cm4gZnVuY3Rpb24oKXt9O1xufVxuXG4vLyBBbiBpbnRlcm5hbCBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgYSBuZXcgb2JqZWN0IHRoYXQgaW5oZXJpdHMgZnJvbSBhbm90aGVyLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmFzZUNyZWF0ZShwcm90b3R5cGUpIHtcbiAgaWYgKCFpc09iamVjdChwcm90b3R5cGUpKSByZXR1cm4ge307XG4gIGlmIChuYXRpdmVDcmVhdGUpIHJldHVybiBuYXRpdmVDcmVhdGUocHJvdG90eXBlKTtcbiAgdmFyIEN0b3IgPSBjdG9yKCk7XG4gIEN0b3IucHJvdG90eXBlID0gcHJvdG90eXBlO1xuICB2YXIgcmVzdWx0ID0gbmV3IEN0b3I7XG4gIEN0b3IucHJvdG90eXBlID0gbnVsbDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImltcG9ydCBpZGVudGl0eSBmcm9tICcuL2lkZW50aXR5LmpzJztcbmltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJy4vaXNGdW5jdGlvbi5qcyc7XG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnLi9pc09iamVjdC5qcyc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICcuL2lzQXJyYXkuanMnO1xuaW1wb3J0IG1hdGNoZXIgZnJvbSAnLi9tYXRjaGVyLmpzJztcbmltcG9ydCBwcm9wZXJ0eSBmcm9tICcuL3Byb3BlcnR5LmpzJztcbmltcG9ydCBvcHRpbWl6ZUNiIGZyb20gJy4vX29wdGltaXplQ2IuanMnO1xuXG4vLyBBbiBpbnRlcm5hbCBmdW5jdGlvbiB0byBnZW5lcmF0ZSBjYWxsYmFja3MgdGhhdCBjYW4gYmUgYXBwbGllZCB0byBlYWNoXG4vLyBlbGVtZW50IGluIGEgY29sbGVjdGlvbiwgcmV0dXJuaW5nIHRoZSBkZXNpcmVkIHJlc3VsdCDigJQgZWl0aGVyIGBfLmlkZW50aXR5YCxcbi8vIGFuIGFyYml0cmFyeSBjYWxsYmFjaywgYSBwcm9wZXJ0eSBtYXRjaGVyLCBvciBhIHByb3BlcnR5IGFjY2Vzc29yLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmFzZUl0ZXJhdGVlKHZhbHVlLCBjb250ZXh0LCBhcmdDb3VudCkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIGlkZW50aXR5O1xuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHJldHVybiBvcHRpbWl6ZUNiKHZhbHVlLCBjb250ZXh0LCBhcmdDb3VudCk7XG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgIWlzQXJyYXkodmFsdWUpKSByZXR1cm4gbWF0Y2hlcih2YWx1ZSk7XG4gIHJldHVybiBwcm9wZXJ0eSh2YWx1ZSk7XG59XG4iLCJpbXBvcnQgXyBmcm9tICcuL3VuZGVyc2NvcmUuanMnO1xuaW1wb3J0IGJhc2VJdGVyYXRlZSBmcm9tICcuL19iYXNlSXRlcmF0ZWUuanMnO1xuaW1wb3J0IGl0ZXJhdGVlIGZyb20gJy4vaXRlcmF0ZWUuanMnO1xuXG4vLyBUaGUgZnVuY3Rpb24gd2UgY2FsbCBpbnRlcm5hbGx5IHRvIGdlbmVyYXRlIGEgY2FsbGJhY2suIEl0IGludm9rZXNcbi8vIGBfLml0ZXJhdGVlYCBpZiBvdmVycmlkZGVuLCBvdGhlcndpc2UgYGJhc2VJdGVyYXRlZWAuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYih2YWx1ZSwgY29udGV4dCwgYXJnQ291bnQpIHtcbiAgaWYgKF8uaXRlcmF0ZWUgIT09IGl0ZXJhdGVlKSByZXR1cm4gXy5pdGVyYXRlZSh2YWx1ZSwgY29udGV4dCk7XG4gIHJldHVybiBiYXNlSXRlcmF0ZWUodmFsdWUsIGNvbnRleHQsIGFyZ0NvdW50KTtcbn1cbiIsImltcG9ydCBfIGZyb20gJy4vdW5kZXJzY29yZS5qcyc7XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBjb250aW51ZSBjaGFpbmluZyBpbnRlcm1lZGlhdGUgcmVzdWx0cy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoYWluUmVzdWx0KGluc3RhbmNlLCBvYmopIHtcbiAgcmV0dXJuIGluc3RhbmNlLl9jaGFpbiA/IF8ob2JqKS5jaGFpbigpIDogb2JqO1xufVxuIiwiaW1wb3J0IHsgbm9uRW51bWVyYWJsZVByb3BzLCBPYmpQcm90byB9IGZyb20gJy4vX3NldHVwLmpzJztcbmltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJy4vaXNGdW5jdGlvbi5qcyc7XG5pbXBvcnQgaGFzIGZyb20gJy4vX2hhcy5qcyc7XG5cbi8vIEludGVybmFsIGhlbHBlciB0byBjcmVhdGUgYSBzaW1wbGUgbG9va3VwIHN0cnVjdHVyZS5cbi8vIGBjb2xsZWN0Tm9uRW51bVByb3BzYCB1c2VkIHRvIGRlcGVuZCBvbiBgXy5jb250YWluc2AsIGJ1dCB0aGlzIGxlZCB0b1xuLy8gY2lyY3VsYXIgaW1wb3J0cy4gYGVtdWxhdGVkU2V0YCBpcyBhIG9uZS1vZmYgc29sdXRpb24gdGhhdCBvbmx5IHdvcmtzIGZvclxuLy8gYXJyYXlzIG9mIHN0cmluZ3MuXG5mdW5jdGlvbiBlbXVsYXRlZFNldChrZXlzKSB7XG4gIHZhciBoYXNoID0ge307XG4gIGZvciAodmFyIGwgPSBrZXlzLmxlbmd0aCwgaSA9IDA7IGkgPCBsOyArK2kpIGhhc2hba2V5c1tpXV0gPSB0cnVlO1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5zOiBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIGhhc2hba2V5XTsgfSxcbiAgICBwdXNoOiBmdW5jdGlvbihrZXkpIHtcbiAgICAgIGhhc2hba2V5XSA9IHRydWU7XG4gICAgICByZXR1cm4ga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICB9O1xufVxuXG4vLyBJbnRlcm5hbCBoZWxwZXIuIENoZWNrcyBga2V5c2AgZm9yIHRoZSBwcmVzZW5jZSBvZiBrZXlzIGluIElFIDwgOSB0aGF0IHdvbid0XG4vLyBiZSBpdGVyYXRlZCBieSBgZm9yIGtleSBpbiAuLi5gIGFuZCB0aHVzIG1pc3NlZC4gRXh0ZW5kcyBga2V5c2AgaW4gcGxhY2UgaWZcbi8vIG5lZWRlZC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbGxlY3ROb25FbnVtUHJvcHMob2JqLCBrZXlzKSB7XG4gIGtleXMgPSBlbXVsYXRlZFNldChrZXlzKTtcbiAgdmFyIG5vbkVudW1JZHggPSBub25FbnVtZXJhYmxlUHJvcHMubGVuZ3RoO1xuICB2YXIgY29uc3RydWN0b3IgPSBvYmouY29uc3RydWN0b3I7XG4gIHZhciBwcm90byA9IGlzRnVuY3Rpb24oY29uc3RydWN0b3IpICYmIGNvbnN0cnVjdG9yLnByb3RvdHlwZSB8fCBPYmpQcm90bztcblxuICAvLyBDb25zdHJ1Y3RvciBpcyBhIHNwZWNpYWwgY2FzZS5cbiAgdmFyIHByb3AgPSAnY29uc3RydWN0b3InO1xuICBpZiAoaGFzKG9iaiwgcHJvcCkgJiYgIWtleXMuY29udGFpbnMocHJvcCkpIGtleXMucHVzaChwcm9wKTtcblxuICB3aGlsZSAobm9uRW51bUlkeC0tKSB7XG4gICAgcHJvcCA9IG5vbkVudW1lcmFibGVQcm9wc1tub25FbnVtSWR4XTtcbiAgICBpZiAocHJvcCBpbiBvYmogJiYgb2JqW3Byb3BdICE9PSBwcm90b1twcm9wXSAmJiAha2V5cy5jb250YWlucyhwcm9wKSkge1xuICAgICAga2V5cy5wdXNoKHByb3ApO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gQW4gaW50ZXJuYWwgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIGFzc2lnbmVyIGZ1bmN0aW9ucy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUFzc2lnbmVyKGtleXNGdW5jLCBkZWZhdWx0cykge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgaWYgKGRlZmF1bHRzKSBvYmogPSBPYmplY3Qob2JqKTtcbiAgICBpZiAobGVuZ3RoIDwgMiB8fCBvYmogPT0gbnVsbCkgcmV0dXJuIG9iajtcbiAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2luZGV4XSxcbiAgICAgICAgICBrZXlzID0ga2V5c0Z1bmMoc291cmNlKSxcbiAgICAgICAgICBsID0ga2V5cy5sZW5ndGg7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgaWYgKCFkZWZhdWx0cyB8fCBvYmpba2V5XSA9PT0gdm9pZCAwKSBvYmpba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9O1xufVxuIiwiaW1wb3J0IGtleXMgZnJvbSAnLi9rZXlzLmpzJztcblxuLy8gSW50ZXJuYWwgaGVscGVyIHRvIGdlbmVyYXRlIGZ1bmN0aW9ucyBmb3IgZXNjYXBpbmcgYW5kIHVuZXNjYXBpbmcgc3RyaW5nc1xuLy8gdG8vZnJvbSBIVE1MIGludGVycG9sYXRpb24uXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFc2NhcGVyKG1hcCkge1xuICB2YXIgZXNjYXBlciA9IGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgcmV0dXJuIG1hcFttYXRjaF07XG4gIH07XG4gIC8vIFJlZ2V4ZXMgZm9yIGlkZW50aWZ5aW5nIGEga2V5IHRoYXQgbmVlZHMgdG8gYmUgZXNjYXBlZC5cbiAgdmFyIHNvdXJjZSA9ICcoPzonICsga2V5cyhtYXApLmpvaW4oJ3wnKSArICcpJztcbiAgdmFyIHRlc3RSZWdleHAgPSBSZWdFeHAoc291cmNlKTtcbiAgdmFyIHJlcGxhY2VSZWdleHAgPSBSZWdFeHAoc291cmNlLCAnZycpO1xuICByZXR1cm4gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgc3RyaW5nID0gc3RyaW5nID09IG51bGwgPyAnJyA6ICcnICsgc3RyaW5nO1xuICAgIHJldHVybiB0ZXN0UmVnZXhwLnRlc3Qoc3RyaW5nKSA/IHN0cmluZy5yZXBsYWNlKHJlcGxhY2VSZWdleHAsIGVzY2FwZXIpIDogc3RyaW5nO1xuICB9O1xufVxuIiwiaW1wb3J0IGdldExlbmd0aCBmcm9tICcuL19nZXRMZW5ndGguanMnO1xuaW1wb3J0IHsgc2xpY2UgfSBmcm9tICcuL19zZXR1cC5qcyc7XG5pbXBvcnQgaXNOYU4gZnJvbSAnLi9pc05hTi5qcyc7XG5cbi8vIEludGVybmFsIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIHRoZSBgXy5pbmRleE9mYCBhbmQgYF8ubGFzdEluZGV4T2ZgIGZ1bmN0aW9ucy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUluZGV4RmluZGVyKGRpciwgcHJlZGljYXRlRmluZCwgc29ydGVkSW5kZXgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFycmF5LCBpdGVtLCBpZHgpIHtcbiAgICB2YXIgaSA9IDAsIGxlbmd0aCA9IGdldExlbmd0aChhcnJheSk7XG4gICAgaWYgKHR5cGVvZiBpZHggPT0gJ251bWJlcicpIHtcbiAgICAgIGlmIChkaXIgPiAwKSB7XG4gICAgICAgIGkgPSBpZHggPj0gMCA/IGlkeCA6IE1hdGgubWF4KGlkeCArIGxlbmd0aCwgaSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZW5ndGggPSBpZHggPj0gMCA/IE1hdGgubWluKGlkeCArIDEsIGxlbmd0aCkgOiBpZHggKyBsZW5ndGggKyAxO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc29ydGVkSW5kZXggJiYgaWR4ICYmIGxlbmd0aCkge1xuICAgICAgaWR4ID0gc29ydGVkSW5kZXgoYXJyYXksIGl0ZW0pO1xuICAgICAgcmV0dXJuIGFycmF5W2lkeF0gPT09IGl0ZW0gPyBpZHggOiAtMTtcbiAgICB9XG4gICAgaWYgKGl0ZW0gIT09IGl0ZW0pIHtcbiAgICAgIGlkeCA9IHByZWRpY2F0ZUZpbmQoc2xpY2UuY2FsbChhcnJheSwgaSwgbGVuZ3RoKSwgaXNOYU4pO1xuICAgICAgcmV0dXJuIGlkeCA+PSAwID8gaWR4ICsgaSA6IC0xO1xuICAgIH1cbiAgICBmb3IgKGlkeCA9IGRpciA+IDAgPyBpIDogbGVuZ3RoIC0gMTsgaWR4ID49IDAgJiYgaWR4IDwgbGVuZ3RoOyBpZHggKz0gZGlyKSB7XG4gICAgICBpZiAoYXJyYXlbaWR4XSA9PT0gaXRlbSkgcmV0dXJuIGlkeDtcbiAgICB9XG4gICAgcmV0dXJuIC0xO1xuICB9O1xufVxuIiwiaW1wb3J0IGNiIGZyb20gJy4vX2NiLmpzJztcbmltcG9ydCBnZXRMZW5ndGggZnJvbSAnLi9fZ2V0TGVuZ3RoLmpzJztcblxuLy8gSW50ZXJuYWwgZnVuY3Rpb24gdG8gZ2VuZXJhdGUgYF8uZmluZEluZGV4YCBhbmQgYF8uZmluZExhc3RJbmRleGAuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQcmVkaWNhdGVJbmRleEZpbmRlcihkaXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFycmF5LCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICBwcmVkaWNhdGUgPSBjYihwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgIHZhciBsZW5ndGggPSBnZXRMZW5ndGgoYXJyYXkpO1xuICAgIHZhciBpbmRleCA9IGRpciA+IDAgPyAwIDogbGVuZ3RoIC0gMTtcbiAgICBmb3IgKDsgaW5kZXggPj0gMCAmJiBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gZGlyKSB7XG4gICAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgICByZXR1cm4gLTE7XG4gIH07XG59XG4iLCJpbXBvcnQgaXNBcnJheUxpa2UgZnJvbSAnLi9faXNBcnJheUxpa2UuanMnO1xuaW1wb3J0IGtleXMgZnJvbSAnLi9rZXlzLmpzJztcbmltcG9ydCBvcHRpbWl6ZUNiIGZyb20gJy4vX29wdGltaXplQ2IuanMnO1xuXG4vLyBJbnRlcm5hbCBoZWxwZXIgdG8gY3JlYXRlIGEgcmVkdWNpbmcgZnVuY3Rpb24sIGl0ZXJhdGluZyBsZWZ0IG9yIHJpZ2h0LlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUmVkdWNlKGRpcikge1xuICAvLyBXcmFwIGNvZGUgdGhhdCByZWFzc2lnbnMgYXJndW1lbnQgdmFyaWFibGVzIGluIGEgc2VwYXJhdGUgZnVuY3Rpb24gdGhhblxuICAvLyB0aGUgb25lIHRoYXQgYWNjZXNzZXMgYGFyZ3VtZW50cy5sZW5ndGhgIHRvIGF2b2lkIGEgcGVyZiBoaXQuICgjMTk5MSlcbiAgdmFyIHJlZHVjZXIgPSBmdW5jdGlvbihvYmosIGl0ZXJhdGVlLCBtZW1vLCBpbml0aWFsKSB7XG4gICAgdmFyIF9rZXlzID0gIWlzQXJyYXlMaWtlKG9iaikgJiYga2V5cyhvYmopLFxuICAgICAgICBsZW5ndGggPSAoX2tleXMgfHwgb2JqKS5sZW5ndGgsXG4gICAgICAgIGluZGV4ID0gZGlyID4gMCA/IDAgOiBsZW5ndGggLSAxO1xuICAgIGlmICghaW5pdGlhbCkge1xuICAgICAgbWVtbyA9IG9ialtfa2V5cyA/IF9rZXlzW2luZGV4XSA6IGluZGV4XTtcbiAgICAgIGluZGV4ICs9IGRpcjtcbiAgICB9XG4gICAgZm9yICg7IGluZGV4ID49IDAgJiYgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IGRpcikge1xuICAgICAgdmFyIGN1cnJlbnRLZXkgPSBfa2V5cyA/IF9rZXlzW2luZGV4XSA6IGluZGV4O1xuICAgICAgbWVtbyA9IGl0ZXJhdGVlKG1lbW8sIG9ialtjdXJyZW50S2V5XSwgY3VycmVudEtleSwgb2JqKTtcbiAgICB9XG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKG9iaiwgaXRlcmF0ZWUsIG1lbW8sIGNvbnRleHQpIHtcbiAgICB2YXIgaW5pdGlhbCA9IGFyZ3VtZW50cy5sZW5ndGggPj0gMztcbiAgICByZXR1cm4gcmVkdWNlcihvYmosIG9wdGltaXplQ2IoaXRlcmF0ZWUsIGNvbnRleHQsIDQpLCBtZW1vLCBpbml0aWFsKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IE1BWF9BUlJBWV9JTkRFWCB9IGZyb20gJy4vX3NldHVwLmpzJztcblxuLy8gQ29tbW9uIGludGVybmFsIGxvZ2ljIGZvciBgaXNBcnJheUxpa2VgIGFuZCBgaXNCdWZmZXJMaWtlYC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVNpemVQcm9wZXJ0eUNoZWNrKGdldFNpemVQcm9wZXJ0eSkge1xuICByZXR1cm4gZnVuY3Rpb24oY29sbGVjdGlvbikge1xuICAgIHZhciBzaXplUHJvcGVydHkgPSBnZXRTaXplUHJvcGVydHkoY29sbGVjdGlvbik7XG4gICAgcmV0dXJuIHR5cGVvZiBzaXplUHJvcGVydHkgPT0gJ251bWJlcicgJiYgc2l6ZVByb3BlcnR5ID49IDAgJiYgc2l6ZVByb3BlcnR5IDw9IE1BWF9BUlJBWV9JTkRFWDtcbiAgfVxufVxuIiwiLy8gSW50ZXJuYWwgZnVuY3Rpb24gdG8gb2J0YWluIGEgbmVzdGVkIHByb3BlcnR5IGluIGBvYmpgIGFsb25nIGBwYXRoYC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlZXBHZXQob2JqLCBwYXRoKSB7XG4gIHZhciBsZW5ndGggPSBwYXRoLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHZvaWQgMDtcbiAgICBvYmogPSBvYmpbcGF0aFtpXV07XG4gIH1cbiAgcmV0dXJuIGxlbmd0aCA/IG9iaiA6IHZvaWQgMDtcbn1cbiIsIi8vIEludGVybmFsIGxpc3Qgb2YgSFRNTCBlbnRpdGllcyBmb3IgZXNjYXBpbmcuXG5leHBvcnQgZGVmYXVsdCB7XG4gICcmJzogJyZhbXA7JyxcbiAgJzwnOiAnJmx0OycsXG4gICc+JzogJyZndDsnLFxuICAnXCInOiAnJnF1b3Q7JyxcbiAgXCInXCI6ICcmI3gyNzsnLFxuICAnYCc6ICcmI3g2MDsnXG59O1xuIiwiaW1wb3J0IGJhc2VDcmVhdGUgZnJvbSAnLi9fYmFzZUNyZWF0ZS5qcyc7XG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnLi9pc09iamVjdC5qcyc7XG5cbi8vIEludGVybmFsIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgYHNvdXJjZUZ1bmNgIGJvdW5kIHRvIGBjb250ZXh0YCB3aXRoIG9wdGlvbmFsXG4vLyBgYXJnc2AuIERldGVybWluZXMgd2hldGhlciB0byBleGVjdXRlIGEgZnVuY3Rpb24gYXMgYSBjb25zdHJ1Y3RvciBvciBhcyBhXG4vLyBub3JtYWwgZnVuY3Rpb24uXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleGVjdXRlQm91bmQoc291cmNlRnVuYywgYm91bmRGdW5jLCBjb250ZXh0LCBjYWxsaW5nQ29udGV4dCwgYXJncykge1xuICBpZiAoIShjYWxsaW5nQ29udGV4dCBpbnN0YW5jZW9mIGJvdW5kRnVuYykpIHJldHVybiBzb3VyY2VGdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICB2YXIgc2VsZiA9IGJhc2VDcmVhdGUoc291cmNlRnVuYy5wcm90b3R5cGUpO1xuICB2YXIgcmVzdWx0ID0gc291cmNlRnVuYy5hcHBseShzZWxmLCBhcmdzKTtcbiAgaWYgKGlzT2JqZWN0KHJlc3VsdCkpIHJldHVybiByZXN1bHQ7XG4gIHJldHVybiBzZWxmO1xufVxuIiwiaW1wb3J0IGdldExlbmd0aCBmcm9tICcuL19nZXRMZW5ndGguanMnO1xuaW1wb3J0IGlzQXJyYXlMaWtlIGZyb20gJy4vX2lzQXJyYXlMaWtlLmpzJztcbmltcG9ydCBpc0FycmF5IGZyb20gJy4vaXNBcnJheS5qcyc7XG5pbXBvcnQgaXNBcmd1bWVudHMgZnJvbSAnLi9pc0FyZ3VtZW50cy5qcyc7XG5cbi8vIEludGVybmFsIGltcGxlbWVudGF0aW9uIG9mIGEgcmVjdXJzaXZlIGBmbGF0dGVuYCBmdW5jdGlvbi5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZsYXR0ZW4oaW5wdXQsIGRlcHRoLCBzdHJpY3QsIG91dHB1dCkge1xuICBvdXRwdXQgPSBvdXRwdXQgfHwgW107XG4gIGlmICghZGVwdGggJiYgZGVwdGggIT09IDApIHtcbiAgICBkZXB0aCA9IEluZmluaXR5O1xuICB9IGVsc2UgaWYgKGRlcHRoIDw9IDApIHtcbiAgICByZXR1cm4gb3V0cHV0LmNvbmNhdChpbnB1dCk7XG4gIH1cbiAgdmFyIGlkeCA9IG91dHB1dC5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBnZXRMZW5ndGgoaW5wdXQpOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdmFsdWUgPSBpbnB1dFtpXTtcbiAgICBpZiAoaXNBcnJheUxpa2UodmFsdWUpICYmIChpc0FycmF5KHZhbHVlKSB8fCBpc0FyZ3VtZW50cyh2YWx1ZSkpKSB7XG4gICAgICAvLyBGbGF0dGVuIGN1cnJlbnQgbGV2ZWwgb2YgYXJyYXkgb3IgYXJndW1lbnRzIG9iamVjdC5cbiAgICAgIGlmIChkZXB0aCA+IDEpIHtcbiAgICAgICAgZmxhdHRlbih2YWx1ZSwgZGVwdGggLSAxLCBzdHJpY3QsIG91dHB1dCk7XG4gICAgICAgIGlkeCA9IG91dHB1dC5sZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaiA9IDAsIGxlbiA9IHZhbHVlLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGogPCBsZW4pIG91dHB1dFtpZHgrK10gPSB2YWx1ZVtqKytdO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIXN0cmljdCkge1xuICAgICAgb3V0cHV0W2lkeCsrXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufVxuIiwiaW1wb3J0IHNoYWxsb3dQcm9wZXJ0eSBmcm9tICcuL19zaGFsbG93UHJvcGVydHkuanMnO1xuXG4vLyBJbnRlcm5hbCBoZWxwZXIgdG8gb2J0YWluIHRoZSBgYnl0ZUxlbmd0aGAgcHJvcGVydHkgb2YgYW4gb2JqZWN0LlxuZXhwb3J0IGRlZmF1bHQgc2hhbGxvd1Byb3BlcnR5KCdieXRlTGVuZ3RoJyk7XG4iLCJpbXBvcnQgc2hhbGxvd1Byb3BlcnR5IGZyb20gJy4vX3NoYWxsb3dQcm9wZXJ0eS5qcyc7XG5cbi8vIEludGVybmFsIGhlbHBlciB0byBvYnRhaW4gdGhlIGBsZW5ndGhgIHByb3BlcnR5IG9mIGFuIG9iamVjdC5cbmV4cG9ydCBkZWZhdWx0IHNoYWxsb3dQcm9wZXJ0eSgnbGVuZ3RoJyk7XG4iLCJpbXBvcnQgY2IgZnJvbSAnLi9fY2IuanMnO1xuaW1wb3J0IGVhY2ggZnJvbSAnLi9lYWNoLmpzJztcblxuLy8gQW4gaW50ZXJuYWwgZnVuY3Rpb24gdXNlZCBmb3IgYWdncmVnYXRlIFwiZ3JvdXAgYnlcIiBvcGVyYXRpb25zLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ3JvdXAoYmVoYXZpb3IsIHBhcnRpdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICAgIHZhciByZXN1bHQgPSBwYXJ0aXRpb24gPyBbW10sIFtdXSA6IHt9O1xuICAgIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgpIHtcbiAgICAgIHZhciBrZXkgPSBpdGVyYXRlZSh2YWx1ZSwgaW5kZXgsIG9iaik7XG4gICAgICBiZWhhdmlvcihyZXN1bHQsIHZhbHVlLCBrZXkpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG4iLCJpbXBvcnQgeyBoYXNPd25Qcm9wZXJ0eSB9IGZyb20gJy4vX3NldHVwLmpzJztcblxuLy8gSW50ZXJuYWwgZnVuY3Rpb24gdG8gY2hlY2sgd2hldGhlciBga2V5YCBpcyBhbiBvd24gcHJvcGVydHkgbmFtZSBvZiBgb2JqYC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhcyhvYmosIGtleSkge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XG59XG4iLCJpbXBvcnQgY3JlYXRlU2l6ZVByb3BlcnR5Q2hlY2sgZnJvbSAnLi9fY3JlYXRlU2l6ZVByb3BlcnR5Q2hlY2suanMnO1xuaW1wb3J0IGdldExlbmd0aCBmcm9tICcuL19nZXRMZW5ndGguanMnO1xuXG4vLyBJbnRlcm5hbCBoZWxwZXIgZm9yIGNvbGxlY3Rpb24gbWV0aG9kcyB0byBkZXRlcm1pbmUgd2hldGhlciBhIGNvbGxlY3Rpb25cbi8vIHNob3VsZCBiZSBpdGVyYXRlZCBhcyBhbiBhcnJheSBvciBhcyBhbiBvYmplY3QuXG4vLyBSZWxhdGVkOiBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9sZW5ndGhcbi8vIEF2b2lkcyBhIHZlcnkgbmFzdHkgaU9TIDggSklUIGJ1ZyBvbiBBUk0tNjQuICMyMDk0XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTaXplUHJvcGVydHlDaGVjayhnZXRMZW5ndGgpO1xuIiwiaW1wb3J0IGNyZWF0ZVNpemVQcm9wZXJ0eUNoZWNrIGZyb20gJy4vX2NyZWF0ZVNpemVQcm9wZXJ0eUNoZWNrLmpzJztcbmltcG9ydCBnZXRCeXRlTGVuZ3RoIGZyb20gJy4vX2dldEJ5dGVMZW5ndGguanMnO1xuXG4vLyBJbnRlcm5hbCBoZWxwZXIgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgd2Ugc2hvdWxkIHNwZW5kIGV4dGVuc2l2ZSBjaGVja3MgYWdhaW5zdFxuLy8gYEFycmF5QnVmZmVyYCBldCBhbC5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNpemVQcm9wZXJ0eUNoZWNrKGdldEJ5dGVMZW5ndGgpO1xuIiwiLy8gSW50ZXJuYWwgYF8ucGlja2AgaGVscGVyIGZ1bmN0aW9uIHRvIGRldGVybWluZSB3aGV0aGVyIGBrZXlgIGlzIGFuIGVudW1lcmFibGVcbi8vIHByb3BlcnR5IG5hbWUgb2YgYG9iamAuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBrZXlJbk9iaih2YWx1ZSwga2V5LCBvYmopIHtcbiAgcmV0dXJuIGtleSBpbiBvYmo7XG59XG4iLCIvLyBJbnRlcm5hbCBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gZWZmaWNpZW50IChmb3IgY3VycmVudCBlbmdpbmVzKSB2ZXJzaW9uXG4vLyBvZiB0aGUgcGFzc2VkLWluIGNhbGxiYWNrLCB0byBiZSByZXBlYXRlZGx5IGFwcGxpZWQgaW4gb3RoZXIgVW5kZXJzY29yZVxuLy8gZnVuY3Rpb25zLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3B0aW1pemVDYihmdW5jLCBjb250ZXh0LCBhcmdDb3VudCkge1xuICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSByZXR1cm4gZnVuYztcbiAgc3dpdGNoIChhcmdDb3VudCA9PSBudWxsID8gMyA6IGFyZ0NvdW50KSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiBmdW5jLmNhbGwoY29udGV4dCwgdmFsdWUpO1xuICAgIH07XG4gICAgLy8gVGhlIDItYXJndW1lbnQgY2FzZSBpcyBvbWl0dGVkIGJlY2F1c2Ugd2XigJlyZSBub3QgdXNpbmcgaXQuXG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24odmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbik7XG4gICAgfTtcbiAgICBjYXNlIDQ6IHJldHVybiBmdW5jdGlvbihhY2N1bXVsYXRvciwgdmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIGFjY3VtdWxhdG9yLCB2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3VtZW50cyk7XG4gIH07XG59XG4iLCIvLyBDdXJyZW50IHZlcnNpb24uXG5leHBvcnQgdmFyIFZFUlNJT04gPSAnMS4xMS4wJztcblxuLy8gRXN0YWJsaXNoIHRoZSByb290IG9iamVjdCwgYHdpbmRvd2AgKGBzZWxmYCkgaW4gdGhlIGJyb3dzZXIsIGBnbG9iYWxgXG4vLyBvbiB0aGUgc2VydmVyLCBvciBgdGhpc2AgaW4gc29tZSB2aXJ0dWFsIG1hY2hpbmVzLiBXZSB1c2UgYHNlbGZgXG4vLyBpbnN0ZWFkIG9mIGB3aW5kb3dgIGZvciBgV2ViV29ya2VyYCBzdXBwb3J0LlxuZXhwb3J0IHZhciByb290ID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZi5zZWxmID09PSBzZWxmICYmIHNlbGYgfHxcbiAgICAgICAgICB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbC5nbG9iYWwgPT09IGdsb2JhbCAmJiBnbG9iYWwgfHxcbiAgICAgICAgICBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpIHx8XG4gICAgICAgICAge307XG5cbi8vIFNhdmUgYnl0ZXMgaW4gdGhlIG1pbmlmaWVkIChidXQgbm90IGd6aXBwZWQpIHZlcnNpb246XG5leHBvcnQgdmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGUsIE9ialByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcbmV4cG9ydCB2YXIgU3ltYm9sUHJvdG8gPSB0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyA/IFN5bWJvbC5wcm90b3R5cGUgOiBudWxsO1xuXG4vLyBDcmVhdGUgcXVpY2sgcmVmZXJlbmNlIHZhcmlhYmxlcyBmb3Igc3BlZWQgYWNjZXNzIHRvIGNvcmUgcHJvdG90eXBlcy5cbmV4cG9ydCB2YXIgcHVzaCA9IEFycmF5UHJvdG8ucHVzaCxcbiAgICBzbGljZSA9IEFycmF5UHJvdG8uc2xpY2UsXG4gICAgdG9TdHJpbmcgPSBPYmpQcm90by50b1N0cmluZyxcbiAgICBoYXNPd25Qcm9wZXJ0eSA9IE9ialByb3RvLmhhc093blByb3BlcnR5O1xuXG4vLyBNb2Rlcm4gZmVhdHVyZSBkZXRlY3Rpb24uXG5leHBvcnQgdmFyIHN1cHBvcnRzQXJyYXlCdWZmZXIgPSB0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnO1xuXG4vLyBBbGwgKipFQ01BU2NyaXB0IDUrKiogbmF0aXZlIGZ1bmN0aW9uIGltcGxlbWVudGF0aW9ucyB0aGF0IHdlIGhvcGUgdG8gdXNlXG4vLyBhcmUgZGVjbGFyZWQgaGVyZS5cbmV4cG9ydCB2YXIgbmF0aXZlSXNBcnJheSA9IEFycmF5LmlzQXJyYXksXG4gICAgbmF0aXZlS2V5cyA9IE9iamVjdC5rZXlzLFxuICAgIG5hdGl2ZUNyZWF0ZSA9IE9iamVjdC5jcmVhdGUsXG4gICAgbmF0aXZlSXNWaWV3ID0gc3VwcG9ydHNBcnJheUJ1ZmZlciAmJiBBcnJheUJ1ZmZlci5pc1ZpZXc7XG5cbi8vIENyZWF0ZSByZWZlcmVuY2VzIHRvIHRoZXNlIGJ1aWx0aW4gZnVuY3Rpb25zIGJlY2F1c2Ugd2Ugb3ZlcnJpZGUgdGhlbS5cbmV4cG9ydCB2YXIgX2lzTmFOID0gaXNOYU4sXG4gICAgX2lzRmluaXRlID0gaXNGaW5pdGU7XG5cbi8vIEtleXMgaW4gSUUgPCA5IHRoYXQgd29uJ3QgYmUgaXRlcmF0ZWQgYnkgYGZvciBrZXkgaW4gLi4uYCBhbmQgdGh1cyBtaXNzZWQuXG5leHBvcnQgdmFyIGhhc0VudW1CdWcgPSAhe3RvU3RyaW5nOiBudWxsfS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgndG9TdHJpbmcnKTtcbmV4cG9ydCB2YXIgbm9uRW51bWVyYWJsZVByb3BzID0gWyd2YWx1ZU9mJywgJ2lzUHJvdG90eXBlT2YnLCAndG9TdHJpbmcnLFxuICAncHJvcGVydHlJc0VudW1lcmFibGUnLCAnaGFzT3duUHJvcGVydHknLCAndG9Mb2NhbGVTdHJpbmcnXTtcblxuLy8gVGhlIGxhcmdlc3QgaW50ZWdlciB0aGF0IGNhbiBiZSByZXByZXNlbnRlZCBleGFjdGx5LlxuZXhwb3J0IHZhciBNQVhfQVJSQVlfSU5ERVggPSBNYXRoLnBvdygyLCA1MykgLSAxO1xuIiwiLy8gSW50ZXJuYWwgaGVscGVyIHRvIGdlbmVyYXRlIGEgZnVuY3Rpb24gdG8gb2J0YWluIHByb3BlcnR5IGBrZXlgIGZyb20gYG9iamAuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaGFsbG93UHJvcGVydHkoa2V5KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqID09IG51bGwgPyB2b2lkIDAgOiBvYmpba2V5XTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IHRvU3RyaW5nIH0gZnJvbSAnLi9fc2V0dXAuanMnO1xuXG4vLyBJbnRlcm5hbCBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgYSBgdG9TdHJpbmdgLWJhc2VkIHR5cGUgdGVzdGVyLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFnVGVzdGVyKG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0ICcgKyBuYW1lICsgJ10nO1xuICB9O1xufVxuIiwiaW1wb3J0IGludmVydCBmcm9tICcuL2ludmVydC5qcyc7XG5pbXBvcnQgZXNjYXBlTWFwIGZyb20gJy4vX2VzY2FwZU1hcC5qcyc7XG5cbi8vIEludGVybmFsIGxpc3Qgb2YgSFRNTCBlbnRpdGllcyBmb3IgdW5lc2NhcGluZy5cbmV4cG9ydCBkZWZhdWx0IGludmVydChlc2NhcGVNYXApO1xuIiwiLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBvbmx5IGJlIGV4ZWN1dGVkIG9uIGFuZCBhZnRlciB0aGUgTnRoIGNhbGwuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZnRlcih0aW1lcywgZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgaWYgKC0tdGltZXMgPCAxKSB7XG4gICAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfTtcbn1cbiIsImltcG9ydCBpc09iamVjdCBmcm9tICcuL2lzT2JqZWN0LmpzJztcbmltcG9ydCB7IGhhc0VudW1CdWcgfSBmcm9tICcuL19zZXR1cC5qcyc7XG5pbXBvcnQgY29sbGVjdE5vbkVudW1Qcm9wcyBmcm9tICcuL19jb2xsZWN0Tm9uRW51bVByb3BzLmpzJztcblxuLy8gUmV0cmlldmUgYWxsIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGFuIG9iamVjdC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFsbEtleXMob2JqKSB7XG4gIGlmICghaXNPYmplY3Qob2JqKSkgcmV0dXJuIFtdO1xuICB2YXIga2V5cyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSBrZXlzLnB1c2goa2V5KTtcbiAgLy8gQWhlbSwgSUUgPCA5LlxuICBpZiAoaGFzRW51bUJ1ZykgY29sbGVjdE5vbkVudW1Qcm9wcyhvYmosIGtleXMpO1xuICByZXR1cm4ga2V5cztcbn1cbiIsIi8vIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgb25seSBiZSBleGVjdXRlZCB1cCB0byAoYnV0IG5vdCBpbmNsdWRpbmcpIHRoZVxuLy8gTnRoIGNhbGwuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBiZWZvcmUodGltZXMsIGZ1bmMpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBpZiAoLS10aW1lcyA+IDApIHtcbiAgICAgIG1lbW8gPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIGlmICh0aW1lcyA8PSAxKSBmdW5jID0gbnVsbDtcbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn1cbiIsImltcG9ydCByZXN0QXJndW1lbnRzIGZyb20gJy4vcmVzdEFyZ3VtZW50cy5qcyc7XG5pbXBvcnQgaXNGdW5jdGlvbiBmcm9tICcuL2lzRnVuY3Rpb24uanMnO1xuaW1wb3J0IGV4ZWN1dGVCb3VuZCBmcm9tICcuL19leGVjdXRlQm91bmQuanMnO1xuXG4vLyBDcmVhdGUgYSBmdW5jdGlvbiBib3VuZCB0byBhIGdpdmVuIG9iamVjdCAoYXNzaWduaW5nIGB0aGlzYCwgYW5kIGFyZ3VtZW50cyxcbi8vIG9wdGlvbmFsbHkpLlxuZXhwb3J0IGRlZmF1bHQgcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihmdW5jLCBjb250ZXh0LCBhcmdzKSB7XG4gIGlmICghaXNGdW5jdGlvbihmdW5jKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQmluZCBtdXN0IGJlIGNhbGxlZCBvbiBhIGZ1bmN0aW9uJyk7XG4gIHZhciBib3VuZCA9IHJlc3RBcmd1bWVudHMoZnVuY3Rpb24oY2FsbEFyZ3MpIHtcbiAgICByZXR1cm4gZXhlY3V0ZUJvdW5kKGZ1bmMsIGJvdW5kLCBjb250ZXh0LCB0aGlzLCBhcmdzLmNvbmNhdChjYWxsQXJncykpO1xuICB9KTtcbiAgcmV0dXJuIGJvdW5kO1xufSk7XG4iLCJpbXBvcnQgcmVzdEFyZ3VtZW50cyBmcm9tICcuL3Jlc3RBcmd1bWVudHMuanMnO1xuaW1wb3J0IGZsYXR0ZW4gZnJvbSAnLi9fZmxhdHRlbi5qcyc7XG5pbXBvcnQgYmluZCBmcm9tICcuL2JpbmQuanMnO1xuXG4vLyBCaW5kIGEgbnVtYmVyIG9mIGFuIG9iamVjdCdzIG1ldGhvZHMgdG8gdGhhdCBvYmplY3QuIFJlbWFpbmluZyBhcmd1bWVudHNcbi8vIGFyZSB0aGUgbWV0aG9kIG5hbWVzIHRvIGJlIGJvdW5kLiBVc2VmdWwgZm9yIGVuc3VyaW5nIHRoYXQgYWxsIGNhbGxiYWNrc1xuLy8gZGVmaW5lZCBvbiBhbiBvYmplY3QgYmVsb25nIHRvIGl0LlxuZXhwb3J0IGRlZmF1bHQgcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihvYmosIGtleXMpIHtcbiAga2V5cyA9IGZsYXR0ZW4oa2V5cywgZmFsc2UsIGZhbHNlKTtcbiAgdmFyIGluZGV4ID0ga2V5cy5sZW5ndGg7XG4gIGlmIChpbmRleCA8IDEpIHRocm93IG5ldyBFcnJvcignYmluZEFsbCBtdXN0IGJlIHBhc3NlZCBmdW5jdGlvbiBuYW1lcycpO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBrZXkgPSBrZXlzW2luZGV4XTtcbiAgICBvYmpba2V5XSA9IGJpbmQob2JqW2tleV0sIG9iaik7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn0pO1xuIiwiaW1wb3J0IF8gZnJvbSAnLi91bmRlcnNjb3JlLmpzJztcblxuLy8gU3RhcnQgY2hhaW5pbmcgYSB3cmFwcGVkIFVuZGVyc2NvcmUgb2JqZWN0LlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hhaW4ob2JqKSB7XG4gIHZhciBpbnN0YW5jZSA9IF8ob2JqKTtcbiAgaW5zdGFuY2UuX2NoYWluID0gdHJ1ZTtcbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuIiwiaW1wb3J0IHsgc2xpY2UgfSBmcm9tICcuL19zZXR1cC5qcyc7XG5cbi8vIENodW5rIGEgc2luZ2xlIGFycmF5IGludG8gbXVsdGlwbGUgYXJyYXlzLCBlYWNoIGNvbnRhaW5pbmcgYGNvdW50YCBvciBmZXdlclxuLy8gaXRlbXMuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaHVuayhhcnJheSwgY291bnQpIHtcbiAgaWYgKGNvdW50ID09IG51bGwgfHwgY291bnQgPCAxKSByZXR1cm4gW107XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwLCBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChpIDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0LnB1c2goc2xpY2UuY2FsbChhcnJheSwgaSwgaSArPSBjb3VudCkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCJpbXBvcnQgaXNPYmplY3QgZnJvbSAnLi9pc09iamVjdC5qcyc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICcuL2lzQXJyYXkuanMnO1xuaW1wb3J0IGV4dGVuZCBmcm9tICcuL2V4dGVuZC5qcyc7XG5cbi8vIENyZWF0ZSBhIChzaGFsbG93LWNsb25lZCkgZHVwbGljYXRlIG9mIGFuIG9iamVjdC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsb25lKG9iaikge1xuICBpZiAoIWlzT2JqZWN0KG9iaikpIHJldHVybiBvYmo7XG4gIHJldHVybiBpc0FycmF5KG9iaikgPyBvYmouc2xpY2UoKSA6IGV4dGVuZCh7fSwgb2JqKTtcbn1cbiIsImltcG9ydCBmaWx0ZXIgZnJvbSAnLi9maWx0ZXIuanMnO1xuXG4vLyBUcmltIG91dCBhbGwgZmFsc3kgdmFsdWVzIGZyb20gYW4gYXJyYXkuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wYWN0KGFycmF5KSB7XG4gIHJldHVybiBmaWx0ZXIoYXJyYXksIEJvb2xlYW4pO1xufVxuIiwiLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgaXMgdGhlIGNvbXBvc2l0aW9uIG9mIGEgbGlzdCBvZiBmdW5jdGlvbnMsIGVhY2hcbi8vIGNvbnN1bWluZyB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBmdW5jdGlvbiB0aGF0IGZvbGxvd3MuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wb3NlKCkge1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgdmFyIHN0YXJ0ID0gYXJncy5sZW5ndGggLSAxO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGkgPSBzdGFydDtcbiAgICB2YXIgcmVzdWx0ID0gYXJnc1tzdGFydF0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB3aGlsZSAoaS0tKSByZXN1bHQgPSBhcmdzW2ldLmNhbGwodGhpcywgcmVzdWx0KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuIiwiLy8gUHJlZGljYXRlLWdlbmVyYXRpbmcgZnVuY3Rpb24uIE9mdGVuIHVzZWZ1bCBvdXRzaWRlIG9mIFVuZGVyc2NvcmUuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25zdGFudCh2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xufVxuIiwiaW1wb3J0IGlzQXJyYXlMaWtlIGZyb20gJy4vX2lzQXJyYXlMaWtlLmpzJztcbmltcG9ydCB2YWx1ZXMgZnJvbSAnLi92YWx1ZXMuanMnO1xuaW1wb3J0IGluZGV4T2YgZnJvbSAnLi9pbmRleE9mLmpzJztcblxuLy8gRGV0ZXJtaW5lIGlmIHRoZSBhcnJheSBvciBvYmplY3QgY29udGFpbnMgYSBnaXZlbiBpdGVtICh1c2luZyBgPT09YCkuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWlucyhvYmosIGl0ZW0sIGZyb21JbmRleCwgZ3VhcmQpIHtcbiAgaWYgKCFpc0FycmF5TGlrZShvYmopKSBvYmogPSB2YWx1ZXMob2JqKTtcbiAgaWYgKHR5cGVvZiBmcm9tSW5kZXggIT0gJ251bWJlcicgfHwgZ3VhcmQpIGZyb21JbmRleCA9IDA7XG4gIHJldHVybiBpbmRleE9mKG9iaiwgaXRlbSwgZnJvbUluZGV4KSA+PSAwO1xufVxuIiwiaW1wb3J0IGdyb3VwIGZyb20gJy4vX2dyb3VwLmpzJztcbmltcG9ydCBoYXMgZnJvbSAnLi9faGFzLmpzJztcblxuLy8gQ291bnRzIGluc3RhbmNlcyBvZiBhbiBvYmplY3QgdGhhdCBncm91cCBieSBhIGNlcnRhaW4gY3JpdGVyaW9uLiBQYXNzXG4vLyBlaXRoZXIgYSBzdHJpbmcgYXR0cmlidXRlIHRvIGNvdW50IGJ5LCBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGVcbi8vIGNyaXRlcmlvbi5cbmV4cG9ydCBkZWZhdWx0IGdyb3VwKGZ1bmN0aW9uKHJlc3VsdCwgdmFsdWUsIGtleSkge1xuICBpZiAoaGFzKHJlc3VsdCwga2V5KSkgcmVzdWx0W2tleV0rKzsgZWxzZSByZXN1bHRba2V5XSA9IDE7XG59KTtcbiIsImltcG9ydCBiYXNlQ3JlYXRlIGZyb20gJy4vX2Jhc2VDcmVhdGUuanMnO1xuaW1wb3J0IGV4dGVuZE93biBmcm9tICcuL2V4dGVuZE93bi5qcyc7XG5cbi8vIENyZWF0ZXMgYW4gb2JqZWN0IHRoYXQgaW5oZXJpdHMgZnJvbSB0aGUgZ2l2ZW4gcHJvdG90eXBlIG9iamVjdC5cbi8vIElmIGFkZGl0aW9uYWwgcHJvcGVydGllcyBhcmUgcHJvdmlkZWQgdGhlbiB0aGV5IHdpbGwgYmUgYWRkZWQgdG8gdGhlXG4vLyBjcmVhdGVkIG9iamVjdC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZShwcm90b3R5cGUsIHByb3BzKSB7XG4gIHZhciByZXN1bHQgPSBiYXNlQ3JlYXRlKHByb3RvdHlwZSk7XG4gIGlmIChwcm9wcykgZXh0ZW5kT3duKHJlc3VsdCwgcHJvcHMpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuIiwiaW1wb3J0IHJlc3RBcmd1bWVudHMgZnJvbSAnLi9yZXN0QXJndW1lbnRzLmpzJztcbmltcG9ydCBkZWxheSBmcm9tICcuL2RlbGF5LmpzJztcblxuLy8gV2hlbiBhIHNlcXVlbmNlIG9mIGNhbGxzIG9mIHRoZSByZXR1cm5lZCBmdW5jdGlvbiBlbmRzLCB0aGUgYXJndW1lbnRcbi8vIGZ1bmN0aW9uIGlzIHRyaWdnZXJlZC4gVGhlIGVuZCBvZiBhIHNlcXVlbmNlIGlzIGRlZmluZWQgYnkgdGhlIGB3YWl0YFxuLy8gcGFyYW1ldGVyLiBJZiBgaW1tZWRpYXRlYCBpcyBwYXNzZWQsIHRoZSBhcmd1bWVudCBmdW5jdGlvbiB3aWxsIGJlXG4vLyB0cmlnZ2VyZWQgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgc2VxdWVuY2UgaW5zdGVhZCBvZiBhdCB0aGUgZW5kLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG4gIHZhciB0aW1lb3V0LCByZXN1bHQ7XG5cbiAgdmFyIGxhdGVyID0gZnVuY3Rpb24oY29udGV4dCwgYXJncykge1xuICAgIHRpbWVvdXQgPSBudWxsO1xuICAgIGlmIChhcmdzKSByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICB9O1xuXG4gIHZhciBkZWJvdW5jZWQgPSByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICBpZiAodGltZW91dCkgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIGlmIChpbW1lZGlhdGUpIHtcbiAgICAgIHZhciBjYWxsTm93ID0gIXRpbWVvdXQ7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgICBpZiAoY2FsbE5vdykgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGltZW91dCA9IGRlbGF5KGxhdGVyLCB3YWl0LCB0aGlzLCBhcmdzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KTtcblxuICBkZWJvdW5jZWQuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBudWxsO1xuICB9O1xuXG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG4iLCJpbXBvcnQgY3JlYXRlQXNzaWduZXIgZnJvbSAnLi9fY3JlYXRlQXNzaWduZXIuanMnO1xuaW1wb3J0IGFsbEtleXMgZnJvbSAnLi9hbGxLZXlzLmpzJztcblxuLy8gRmlsbCBpbiBhIGdpdmVuIG9iamVjdCB3aXRoIGRlZmF1bHQgcHJvcGVydGllcy5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFzc2lnbmVyKGFsbEtleXMsIHRydWUpO1xuIiwiaW1wb3J0IHBhcnRpYWwgZnJvbSAnLi9wYXJ0aWFsLmpzJztcbmltcG9ydCBkZWxheSBmcm9tICcuL2RlbGF5LmpzJztcbmltcG9ydCBfIGZyb20gJy4vdW5kZXJzY29yZS5qcyc7XG5cbi8vIERlZmVycyBhIGZ1bmN0aW9uLCBzY2hlZHVsaW5nIGl0IHRvIHJ1biBhZnRlciB0aGUgY3VycmVudCBjYWxsIHN0YWNrIGhhc1xuLy8gY2xlYXJlZC5cbmV4cG9ydCBkZWZhdWx0IHBhcnRpYWwoZGVsYXksIF8sIDEpO1xuIiwiaW1wb3J0IHJlc3RBcmd1bWVudHMgZnJvbSAnLi9yZXN0QXJndW1lbnRzLmpzJztcblxuLy8gRGVsYXlzIGEgZnVuY3Rpb24gZm9yIHRoZSBnaXZlbiBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLCBhbmQgdGhlbiBjYWxsc1xuLy8gaXQgd2l0aCB0aGUgYXJndW1lbnRzIHN1cHBsaWVkLlxuZXhwb3J0IGRlZmF1bHQgcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihmdW5jLCB3YWl0LCBhcmdzKSB7XG4gIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmdW5jLmFwcGx5KG51bGwsIGFyZ3MpO1xuICB9LCB3YWl0KTtcbn0pO1xuIiwiaW1wb3J0IHJlc3RBcmd1bWVudHMgZnJvbSAnLi9yZXN0QXJndW1lbnRzLmpzJztcbmltcG9ydCBmbGF0dGVuIGZyb20gJy4vX2ZsYXR0ZW4uanMnO1xuaW1wb3J0IGZpbHRlciBmcm9tICcuL2ZpbHRlci5qcyc7XG5pbXBvcnQgY29udGFpbnMgZnJvbSAnLi9jb250YWlucy5qcyc7XG5cbi8vIFRha2UgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBvbmUgYXJyYXkgYW5kIGEgbnVtYmVyIG9mIG90aGVyIGFycmF5cy5cbi8vIE9ubHkgdGhlIGVsZW1lbnRzIHByZXNlbnQgaW4ganVzdCB0aGUgZmlyc3QgYXJyYXkgd2lsbCByZW1haW4uXG5leHBvcnQgZGVmYXVsdCByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKGFycmF5LCByZXN0KSB7XG4gIHJlc3QgPSBmbGF0dGVuKHJlc3QsIHRydWUsIHRydWUpO1xuICByZXR1cm4gZmlsdGVyKGFycmF5LCBmdW5jdGlvbih2YWx1ZSl7XG4gICAgcmV0dXJuICFjb250YWlucyhyZXN0LCB2YWx1ZSk7XG4gIH0pO1xufSk7XG4iLCJpbXBvcnQgb3B0aW1pemVDYiBmcm9tICcuL19vcHRpbWl6ZUNiLmpzJztcbmltcG9ydCBpc0FycmF5TGlrZSBmcm9tICcuL19pc0FycmF5TGlrZS5qcyc7XG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMuanMnO1xuXG4vLyBUaGUgY29ybmVyc3RvbmUgZm9yIGNvbGxlY3Rpb24gZnVuY3Rpb25zLCBhbiBgZWFjaGBcbi8vIGltcGxlbWVudGF0aW9uLCBha2EgYGZvckVhY2hgLlxuLy8gSGFuZGxlcyByYXcgb2JqZWN0cyBpbiBhZGRpdGlvbiB0byBhcnJheS1saWtlcy4gVHJlYXRzIGFsbFxuLy8gc3BhcnNlIGFycmF5LWxpa2VzIGFzIGlmIHRoZXkgd2VyZSBkZW5zZS5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVhY2gob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICBpdGVyYXRlZSA9IG9wdGltaXplQ2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICB2YXIgaSwgbGVuZ3RoO1xuICBpZiAoaXNBcnJheUxpa2Uob2JqKSkge1xuICAgIGZvciAoaSA9IDAsIGxlbmd0aCA9IG9iai5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaXRlcmF0ZWUob2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgX2tleXMgPSBrZXlzKG9iaik7XG4gICAgZm9yIChpID0gMCwgbGVuZ3RoID0gX2tleXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGl0ZXJhdGVlKG9ialtfa2V5c1tpXV0sIF9rZXlzW2ldLCBvYmopO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqO1xufVxuIiwiaW1wb3J0IGNyZWF0ZUVzY2FwZXIgZnJvbSAnLi9fY3JlYXRlRXNjYXBlci5qcyc7XG5pbXBvcnQgZXNjYXBlTWFwIGZyb20gJy4vX2VzY2FwZU1hcC5qcyc7XG5cbi8vIEZ1bmN0aW9uIGZvciBlc2NhcGluZyBzdHJpbmdzIHRvIEhUTUwgaW50ZXJwb2xhdGlvbi5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVzY2FwZXIoZXNjYXBlTWFwKTtcbiIsImltcG9ydCBjYiBmcm9tICcuL19jYi5qcyc7XG5pbXBvcnQgaXNBcnJheUxpa2UgZnJvbSAnLi9faXNBcnJheUxpa2UuanMnO1xuaW1wb3J0IGtleXMgZnJvbSAnLi9rZXlzLmpzJztcblxuLy8gRGV0ZXJtaW5lIHdoZXRoZXIgYWxsIG9mIHRoZSBlbGVtZW50cyBwYXNzIGEgdHJ1dGggdGVzdC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV2ZXJ5KG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gIHByZWRpY2F0ZSA9IGNiKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gIHZhciBfa2V5cyA9ICFpc0FycmF5TGlrZShvYmopICYmIGtleXMob2JqKSxcbiAgICAgIGxlbmd0aCA9IChfa2V5cyB8fCBvYmopLmxlbmd0aDtcbiAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgIHZhciBjdXJyZW50S2V5ID0gX2tleXMgPyBfa2V5c1tpbmRleF0gOiBpbmRleDtcbiAgICBpZiAoIXByZWRpY2F0ZShvYmpbY3VycmVudEtleV0sIGN1cnJlbnRLZXksIG9iaikpIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsImltcG9ydCBjcmVhdGVBc3NpZ25lciBmcm9tICcuL19jcmVhdGVBc3NpZ25lci5qcyc7XG5pbXBvcnQgYWxsS2V5cyBmcm9tICcuL2FsbEtleXMuanMnO1xuXG4vLyBFeHRlbmQgYSBnaXZlbiBvYmplY3Qgd2l0aCBhbGwgdGhlIHByb3BlcnRpZXMgaW4gcGFzc2VkLWluIG9iamVjdChzKS5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFzc2lnbmVyKGFsbEtleXMpO1xuIiwiaW1wb3J0IGNyZWF0ZUFzc2lnbmVyIGZyb20gJy4vX2NyZWF0ZUFzc2lnbmVyLmpzJztcbmltcG9ydCBrZXlzIGZyb20gJy4va2V5cy5qcyc7XG5cbi8vIEFzc2lnbnMgYSBnaXZlbiBvYmplY3Qgd2l0aCBhbGwgdGhlIG93biBwcm9wZXJ0aWVzIGluIHRoZSBwYXNzZWQtaW5cbi8vIG9iamVjdChzKS5cbi8vIChodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvYXNzaWduKVxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQXNzaWduZXIoa2V5cyk7XG4iLCJpbXBvcnQgY2IgZnJvbSAnLi9fY2IuanMnO1xuaW1wb3J0IGVhY2ggZnJvbSAnLi9lYWNoLmpzJztcblxuLy8gUmV0dXJuIGFsbCB0aGUgZWxlbWVudHMgdGhhdCBwYXNzIGEgdHJ1dGggdGVzdC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbHRlcihvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICB2YXIgcmVzdWx0cyA9IFtdO1xuICBwcmVkaWNhdGUgPSBjYihwcmVkaWNhdGUsIGNvbnRleHQpO1xuICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGxpc3QpKSByZXN1bHRzLnB1c2godmFsdWUpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdHM7XG59XG4iLCJpbXBvcnQgaXNBcnJheUxpa2UgZnJvbSAnLi9faXNBcnJheUxpa2UuanMnO1xuaW1wb3J0IGZpbmRJbmRleCBmcm9tICcuL2ZpbmRJbmRleC5qcyc7XG5pbXBvcnQgZmluZEtleSBmcm9tICcuL2ZpbmRLZXkuanMnO1xuXG4vLyBSZXR1cm4gdGhlIGZpcnN0IHZhbHVlIHdoaWNoIHBhc3NlcyBhIHRydXRoIHRlc3QuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaW5kKG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gIHZhciBrZXlGaW5kZXIgPSBpc0FycmF5TGlrZShvYmopID8gZmluZEluZGV4IDogZmluZEtleTtcbiAgdmFyIGtleSA9IGtleUZpbmRlcihvYmosIHByZWRpY2F0ZSwgY29udGV4dCk7XG4gIGlmIChrZXkgIT09IHZvaWQgMCAmJiBrZXkgIT09IC0xKSByZXR1cm4gb2JqW2tleV07XG59XG4iLCJpbXBvcnQgY3JlYXRlUHJlZGljYXRlSW5kZXhGaW5kZXIgZnJvbSAnLi9fY3JlYXRlUHJlZGljYXRlSW5kZXhGaW5kZXIuanMnO1xuXG4vLyBSZXR1cm5zIHRoZSBmaXJzdCBpbmRleCBvbiBhbiBhcnJheS1saWtlIHRoYXQgcGFzc2VzIGEgdHJ1dGggdGVzdC5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByZWRpY2F0ZUluZGV4RmluZGVyKDEpO1xuIiwiaW1wb3J0IGNiIGZyb20gJy4vX2NiLmpzJztcbmltcG9ydCBrZXlzIGZyb20gJy4va2V5cy5qcyc7XG5cbi8vIFJldHVybnMgdGhlIGZpcnN0IGtleSBvbiBhbiBvYmplY3QgdGhhdCBwYXNzZXMgYSB0cnV0aCB0ZXN0LlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmluZEtleShvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICBwcmVkaWNhdGUgPSBjYihwcmVkaWNhdGUsIGNvbnRleHQpO1xuICB2YXIgX2tleXMgPSBrZXlzKG9iaiksIGtleTtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IF9rZXlzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gX2tleXNbaV07XG4gICAgaWYgKHByZWRpY2F0ZShvYmpba2V5XSwga2V5LCBvYmopKSByZXR1cm4ga2V5O1xuICB9XG59XG4iLCJpbXBvcnQgY3JlYXRlUHJlZGljYXRlSW5kZXhGaW5kZXIgZnJvbSAnLi9fY3JlYXRlUHJlZGljYXRlSW5kZXhGaW5kZXIuanMnO1xuXG4vLyBSZXR1cm5zIHRoZSBsYXN0IGluZGV4IG9uIGFuIGFycmF5LWxpa2UgdGhhdCBwYXNzZXMgYSB0cnV0aCB0ZXN0LlxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJlZGljYXRlSW5kZXhGaW5kZXIoLTEpO1xuIiwiaW1wb3J0IGZpbmQgZnJvbSAnLi9maW5kLmpzJztcbmltcG9ydCBtYXRjaGVyIGZyb20gJy4vbWF0Y2hlci5qcyc7XG5cbi8vIENvbnZlbmllbmNlIHZlcnNpb24gb2YgYSBjb21tb24gdXNlIGNhc2Ugb2YgYF8uZmluZGA6IGdldHRpbmcgdGhlIGZpcnN0XG4vLyBvYmplY3QgY29udGFpbmluZyBzcGVjaWZpYyBga2V5OnZhbHVlYCBwYWlycy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmRXaGVyZShvYmosIGF0dHJzKSB7XG4gIHJldHVybiBmaW5kKG9iaiwgbWF0Y2hlcihhdHRycykpO1xufVxuIiwiaW1wb3J0IGluaXRpYWwgZnJvbSAnLi9pbml0aWFsLmpzJztcblxuLy8gR2V0IHRoZSBmaXJzdCBlbGVtZW50IG9mIGFuIGFycmF5LiBQYXNzaW5nICoqbioqIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBOXG4vLyB2YWx1ZXMgaW4gdGhlIGFycmF5LiBUaGUgKipndWFyZCoqIGNoZWNrIGFsbG93cyBpdCB0byB3b3JrIHdpdGggYF8ubWFwYC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpcnN0KGFycmF5LCBuLCBndWFyZCkge1xuICBpZiAoYXJyYXkgPT0gbnVsbCB8fCBhcnJheS5sZW5ndGggPCAxKSByZXR1cm4gbiA9PSBudWxsIHx8IGd1YXJkID8gdm9pZCAwIDogW107XG4gIGlmIChuID09IG51bGwgfHwgZ3VhcmQpIHJldHVybiBhcnJheVswXTtcbiAgcmV0dXJuIGluaXRpYWwoYXJyYXksIGFycmF5Lmxlbmd0aCAtIG4pO1xufVxuIiwiaW1wb3J0IF9mbGF0dGVuIGZyb20gJy4vX2ZsYXR0ZW4uanMnO1xuXG4vLyBGbGF0dGVuIG91dCBhbiBhcnJheSwgZWl0aGVyIHJlY3Vyc2l2ZWx5IChieSBkZWZhdWx0KSwgb3IgdXAgdG8gYGRlcHRoYC5cbi8vIFBhc3NpbmcgYHRydWVgIG9yIGBmYWxzZWAgYXMgYGRlcHRoYCBtZWFucyBgMWAgb3IgYEluZmluaXR5YCwgcmVzcGVjdGl2ZWx5LlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmxhdHRlbihhcnJheSwgZGVwdGgpIHtcbiAgcmV0dXJuIF9mbGF0dGVuKGFycmF5LCBkZXB0aCwgZmFsc2UpO1xufVxuIiwiaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnLi9pc0Z1bmN0aW9uLmpzJztcblxuLy8gUmV0dXJuIGEgc29ydGVkIGxpc3Qgb2YgdGhlIGZ1bmN0aW9uIG5hbWVzIGF2YWlsYWJsZSBvbiB0aGUgb2JqZWN0LlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZnVuY3Rpb25zKG9iaikge1xuICB2YXIgbmFtZXMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChpc0Z1bmN0aW9uKG9ialtrZXldKSkgbmFtZXMucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiBuYW1lcy5zb3J0KCk7XG59XG4iLCJpbXBvcnQgZ3JvdXAgZnJvbSAnLi9fZ3JvdXAuanMnO1xuaW1wb3J0IGhhcyBmcm9tICcuL19oYXMuanMnO1xuXG4vLyBHcm91cHMgdGhlIG9iamVjdCdzIHZhbHVlcyBieSBhIGNyaXRlcmlvbi4gUGFzcyBlaXRoZXIgYSBzdHJpbmcgYXR0cmlidXRlXG4vLyB0byBncm91cCBieSwgb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGNyaXRlcmlvbi5cbmV4cG9ydCBkZWZhdWx0IGdyb3VwKGZ1bmN0aW9uKHJlc3VsdCwgdmFsdWUsIGtleSkge1xuICBpZiAoaGFzKHJlc3VsdCwga2V5KSkgcmVzdWx0W2tleV0ucHVzaCh2YWx1ZSk7IGVsc2UgcmVzdWx0W2tleV0gPSBbdmFsdWVdO1xufSk7XG4iLCJpbXBvcnQgaXNBcnJheSBmcm9tICcuL2lzQXJyYXkuanMnO1xuaW1wb3J0IF9oYXMgZnJvbSAnLi9faGFzLmpzJztcbmltcG9ydCB7IGhhc093blByb3BlcnR5IH0gZnJvbSAnLi9fc2V0dXAuanMnO1xuXG4vLyBTaG9ydGN1dCBmdW5jdGlvbiBmb3IgY2hlY2tpbmcgaWYgYW4gb2JqZWN0IGhhcyBhIGdpdmVuIHByb3BlcnR5IGRpcmVjdGx5IG9uXG4vLyBpdHNlbGYgKGluIG90aGVyIHdvcmRzLCBub3Qgb24gYSBwcm90b3R5cGUpLiBVbmxpa2UgdGhlIGludGVybmFsIGBoYXNgXG4vLyBmdW5jdGlvbiwgdGhpcyBwdWJsaWMgdmVyc2lvbiBjYW4gYWxzbyB0cmF2ZXJzZSBuZXN0ZWQgcHJvcGVydGllcy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhcyhvYmosIHBhdGgpIHtcbiAgaWYgKCFpc0FycmF5KHBhdGgpKSB7XG4gICAgcmV0dXJuIF9oYXMob2JqLCBwYXRoKTtcbiAgfVxuICB2YXIgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0gcGF0aFtpXTtcbiAgICBpZiAob2JqID09IG51bGwgfHwgIWhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIG9iaiA9IG9ialtrZXldO1xuICB9XG4gIHJldHVybiAhIWxlbmd0aDtcbn1cbiIsIi8vIEtlZXAgdGhlIGlkZW50aXR5IGZ1bmN0aW9uIGFyb3VuZCBmb3IgZGVmYXVsdCBpdGVyYXRlZXMuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG4iLCIvLyBFU00gRXhwb3J0c1xuLy8gPT09PT09PT09PT1cbi8vIFRoaXMgbW9kdWxlIGlzIHRoZSBwYWNrYWdlIGVudHJ5IHBvaW50IGZvciBFUyBtb2R1bGUgdXNlcnMuIEluIG90aGVyIHdvcmRzLFxuLy8gaXQgaXMgdGhlIG1vZHVsZSB0aGV5IGFyZSBpbnRlcmZhY2luZyB3aXRoIHdoZW4gdGhleSBpbXBvcnQgZnJvbSB0aGUgd2hvbGVcbi8vIHBhY2thZ2UgaW5zdGVhZCBvZiBmcm9tIGEgc3VibW9kdWxlLCBsaWtlIHRoaXM6XG4vL1xuLy8gYGBganNcbi8vIGltcG9ydCB7IG1hcCB9IGZyb20gJ3VuZGVyc2NvcmUnO1xuLy8gYGBgXG4vL1xuLy8gVGhlIGRpZmZlcmVuY2Ugd2l0aCBgLi9pbmRleC1kZWZhdWx0YCwgd2hpY2ggaXMgdGhlIHBhY2thZ2UgZW50cnkgcG9pbnQgZm9yXG4vLyBDb21tb25KUywgQU1EIGFuZCBVTUQgdXNlcnMsIGlzIHB1cmVseSB0ZWNobmljYWwuIEluIEVTIG1vZHVsZXMsIG5hbWVkIGFuZFxuLy8gZGVmYXVsdCBleHBvcnRzIGFyZSBjb25zaWRlcmVkIHRvIGJlIHNpYmxpbmdzLCBzbyB3aGVuIHlvdSBoYXZlIGEgZGVmYXVsdFxuLy8gZXhwb3J0LCBpdHMgcHJvcGVydGllcyBhcmUgbm90IGF1dG9tYXRpY2FsbHkgYXZhaWxhYmxlIGFzIG5hbWVkIGV4cG9ydHMuIEZvclxuLy8gdGhpcyByZWFzb24sIHdlIHJlLWV4cG9ydCB0aGUgbmFtZWQgZXhwb3J0cyBpbiBhZGRpdGlvbiB0byBwcm92aWRpbmcgdGhlIHNhbWVcbi8vIGRlZmF1bHQgZXhwb3J0IGFzIGluIGAuL2luZGV4LWRlZmF1bHRgLlxuZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vaW5kZXgtZGVmYXVsdC5qcyc7XG5leHBvcnQgKiBmcm9tICcuL2luZGV4LmpzJztcbiIsIi8vIERlZmF1bHQgRXhwb3J0XG4vLyA9PT09PT09PT09PT09PVxuLy8gSW4gdGhpcyBtb2R1bGUsIHdlIG1peCBvdXIgYnVuZGxlZCBleHBvcnRzIGludG8gdGhlIGBfYCBvYmplY3QgYW5kIGV4cG9ydFxuLy8gdGhlIHJlc3VsdC4gVGhpcyBpcyBhbmFsb2dvdXMgdG8gc2V0dGluZyBgbW9kdWxlLmV4cG9ydHMgPSBfYCBpbiBDb21tb25KUy5cbi8vIEhlbmNlLCB0aGlzIG1vZHVsZSBpcyBhbHNvIHRoZSBlbnRyeSBwb2ludCBvZiBvdXIgVU1EIGJ1bmRsZSBhbmQgdGhlIHBhY2thZ2Vcbi8vIGVudHJ5IHBvaW50IGZvciBDb21tb25KUyBhbmQgQU1EIHVzZXJzLiBJbiBvdGhlciB3b3JkcywgdGhpcyBpcyAodGhlIHNvdXJjZVxuLy8gb2YpIHRoZSBtb2R1bGUgeW91IGFyZSBpbnRlcmZhY2luZyB3aXRoIHdoZW4geW91IGRvIGFueSBvZiB0aGUgZm9sbG93aW5nOlxuLy9cbi8vIGBgYGpzXG4vLyAvLyBDb21tb25KU1xuLy8gdmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG4vL1xuLy8gLy8gQU1EXG4vLyBkZWZpbmUoWyd1bmRlcnNjb3JlJ10sIGZ1bmN0aW9uKF8pIHsuLi59KTtcbi8vXG4vLyAvLyBVTUQgaW4gdGhlIGJyb3dzZXJcbi8vIC8vIF8gaXMgYXZhaWxhYmxlIGFzIGEgZ2xvYmFsIHZhcmlhYmxlXG4vLyBgYGBcbmltcG9ydCAqIGFzIGFsbEV4cG9ydHMgZnJvbSAnLi9pbmRleC5qcyc7XG5pbXBvcnQgeyBtaXhpbiB9IGZyb20gJy4vaW5kZXguanMnO1xuXG4vLyBBZGQgYWxsIG9mIHRoZSBVbmRlcnNjb3JlIGZ1bmN0aW9ucyB0byB0aGUgd3JhcHBlciBvYmplY3QuXG52YXIgXyA9IG1peGluKGFsbEV4cG9ydHMpO1xuLy8gTGVnYWN5IE5vZGUuanMgQVBJLlxuXy5fID0gXztcbi8vIEV4cG9ydCB0aGUgVW5kZXJzY29yZSBBUEkuXG5leHBvcnQgZGVmYXVsdCBfO1xuIiwiLy8gTmFtZWQgRXhwb3J0c1xuLy8gPT09PT09PT09PT09PVxuXG4vLyAgICAgVW5kZXJzY29yZS5qcyAxLjExLjBcbi8vICAgICBodHRwczovL3VuZGVyc2NvcmVqcy5vcmdcbi8vICAgICAoYykgMjAwOS0yMDIwIEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4vLyAgICAgVW5kZXJzY29yZSBtYXkgYmUgZnJlZWx5IGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cblxuLy8gQmFzZWxpbmUgc2V0dXAuXG5leHBvcnQgeyBWRVJTSU9OIH0gZnJvbSAnLi9fc2V0dXAuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyByZXN0QXJndW1lbnRzIH0gZnJvbSAnLi9yZXN0QXJndW1lbnRzLmpzJztcblxuLy8gT2JqZWN0IEZ1bmN0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLVxuLy8gT3VyIG1vc3QgZnVuZGFtZW50YWwgZnVuY3Rpb25zIG9wZXJhdGUgb24gYW55IEphdmFTY3JpcHQgb2JqZWN0LlxuLy8gTW9zdCBmdW5jdGlvbnMgaW4gVW5kZXJzY29yZSBkZXBlbmQgb24gYXQgbGVhc3Qgb25lIGZ1bmN0aW9uIGluIHRoaXMgc2VjdGlvbi5cblxuLy8gQSBncm91cCBvZiBmdW5jdGlvbnMgdGhhdCBjaGVjayB0aGUgdHlwZXMgb2YgY29yZSBKYXZhU2NyaXB0IHZhbHVlcy5cbi8vIFRoZXNlIGFyZSBvZnRlbiBpbmZvcm1hbGx5IHJlZmVycmVkIHRvIGFzIHRoZSBcImlzVHlwZVwiIGZ1bmN0aW9ucy5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNPYmplY3QgfSBmcm9tICcuL2lzT2JqZWN0LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNOdWxsIH0gZnJvbSAnLi9pc051bGwuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc1VuZGVmaW5lZCB9IGZyb20gJy4vaXNVbmRlZmluZWQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0Jvb2xlYW4gfSBmcm9tICcuL2lzQm9vbGVhbi5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzRWxlbWVudCB9IGZyb20gJy4vaXNFbGVtZW50LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNTdHJpbmcgfSBmcm9tICcuL2lzU3RyaW5nLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNOdW1iZXIgfSBmcm9tICcuL2lzTnVtYmVyLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNEYXRlIH0gZnJvbSAnLi9pc0RhdGUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc1JlZ0V4cCB9IGZyb20gJy4vaXNSZWdFeHAuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0Vycm9yIH0gZnJvbSAnLi9pc0Vycm9yLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNTeW1ib2wgfSBmcm9tICcuL2lzU3ltYm9sLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNNYXAgfSBmcm9tICcuL2lzTWFwLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNXZWFrTWFwIH0gZnJvbSAnLi9pc1dlYWtNYXAuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc1NldCB9IGZyb20gJy4vaXNTZXQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc1dlYWtTZXQgfSBmcm9tICcuL2lzV2Vha1NldC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzQXJyYXlCdWZmZXIgfSBmcm9tICcuL2lzQXJyYXlCdWZmZXIuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0RhdGFWaWV3IH0gZnJvbSAnLi9pc0RhdGFWaWV3LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNBcnJheSB9IGZyb20gJy4vaXNBcnJheS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzRnVuY3Rpb24gfSBmcm9tICcuL2lzRnVuY3Rpb24uanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0FyZ3VtZW50cyB9IGZyb20gJy4vaXNBcmd1bWVudHMuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0Zpbml0ZSB9IGZyb20gJy4vaXNGaW5pdGUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc05hTiB9IGZyb20gJy4vaXNOYU4uanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc1R5cGVkQXJyYXkgfSBmcm9tICcuL2lzVHlwZWRBcnJheS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzRW1wdHkgfSBmcm9tICcuL2lzRW1wdHkuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc01hdGNoIH0gZnJvbSAnLi9pc01hdGNoLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNFcXVhbCB9IGZyb20gJy4vaXNFcXVhbC5qcyc7XG5cbi8vIEZ1bmN0aW9ucyB0aGF0IHRyZWF0IGFuIG9iamVjdCBhcyBhIGRpY3Rpb25hcnkgb2Yga2V5LXZhbHVlIHBhaXJzLlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBrZXlzIH0gZnJvbSAnLi9rZXlzLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWxsS2V5cyB9IGZyb20gJy4vYWxsS2V5cy5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHZhbHVlcyB9IGZyb20gJy4vdmFsdWVzLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGFpcnMgfSBmcm9tICcuL3BhaXJzLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaW52ZXJ0IH0gZnJvbSAnLi9pbnZlcnQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmdW5jdGlvbnMsXG4gICAgICAgICBkZWZhdWx0IGFzIG1ldGhvZHMgICB9IGZyb20gJy4vZnVuY3Rpb25zLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXh0ZW5kIH0gZnJvbSAnLi9leHRlbmQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBleHRlbmRPd24sXG4gICAgICAgICBkZWZhdWx0IGFzIGFzc2lnbiAgICB9IGZyb20gJy4vZXh0ZW5kT3duLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGVmYXVsdHMgfSBmcm9tICcuL2RlZmF1bHRzLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3JlYXRlIH0gZnJvbSAnLi9jcmVhdGUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjbG9uZSB9IGZyb20gJy4vY2xvbmUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0YXAgfSBmcm9tICcuL3RhcC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGhhcyB9IGZyb20gJy4vaGFzLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWFwT2JqZWN0IH0gZnJvbSAnLi9tYXBPYmplY3QuanMnO1xuXG4vLyBVdGlsaXR5IEZ1bmN0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEEgYml0IG9mIGEgZ3JhYiBiYWc6IFByZWRpY2F0ZS1nZW5lcmF0aW5nIGZ1bmN0aW9ucyBmb3IgdXNlIHdpdGggZmlsdGVycyBhbmRcbi8vIGxvb3BzLCBzdHJpbmcgZXNjYXBpbmcgYW5kIHRlbXBsYXRpbmcsIGNyZWF0ZSByYW5kb20gbnVtYmVycyBhbmQgdW5pcXVlIGlkcyxcbi8vIGFuZCBmdW5jdGlvbnMgdGhhdCBmYWNpbGl0YXRlIFVuZGVyc2NvcmUncyBjaGFpbmluZyBhbmQgaXRlcmF0aW9uIGNvbnZlbnRpb25zLlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBpZGVudGl0eSB9IGZyb20gJy4vaWRlbnRpdHkuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb25zdGFudCB9IGZyb20gJy4vY29uc3RhbnQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBub29wIH0gZnJvbSAnLi9ub29wLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcHJvcGVydHkgfSBmcm9tICcuL3Byb3BlcnR5LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcHJvcGVydHlPZiB9IGZyb20gJy4vcHJvcGVydHlPZi5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1hdGNoZXIsXG4gICAgICAgICBkZWZhdWx0IGFzIG1hdGNoZXMgfSBmcm9tICcuL21hdGNoZXIuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0aW1lcyB9IGZyb20gJy4vdGltZXMuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyByYW5kb20gfSBmcm9tICcuL3JhbmRvbS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG5vdyB9IGZyb20gJy4vbm93LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXNjYXBlIH0gZnJvbSAnLi9lc2NhcGUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1bmVzY2FwZSB9IGZyb20gJy4vdW5lc2NhcGUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0ZW1wbGF0ZVNldHRpbmdzIH0gZnJvbSAnLi90ZW1wbGF0ZVNldHRpbmdzLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdGVtcGxhdGUgfSBmcm9tICcuL3RlbXBsYXRlLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcmVzdWx0IH0gZnJvbSAnLi9yZXN1bHQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1bmlxdWVJZCB9IGZyb20gJy4vdW5pcXVlSWQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjaGFpbiB9IGZyb20gJy4vY2hhaW4uanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpdGVyYXRlZSB9IGZyb20gJy4vaXRlcmF0ZWUuanMnO1xuXG4vLyBGdW5jdGlvbiAoYWhlbSkgRnVuY3Rpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaGVzZSBmdW5jdGlvbnMgdGFrZSBhIGZ1bmN0aW9uIGFzIGFuIGFyZ3VtZW50IGFuZCByZXR1cm4gYSBuZXcgZnVuY3Rpb25cbi8vIGFzIHRoZSByZXN1bHQuIEFsc28ga25vd24gYXMgaGlnaGVyLW9yZGVyIGZ1bmN0aW9ucy5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGFydGlhbCB9IGZyb20gJy4vcGFydGlhbC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGJpbmQgfSBmcm9tICcuL2JpbmQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBiaW5kQWxsIH0gZnJvbSAnLi9iaW5kQWxsLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWVtb2l6ZSB9IGZyb20gJy4vbWVtb2l6ZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGRlbGF5IH0gZnJvbSAnLi9kZWxheS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGRlZmVyIH0gZnJvbSAnLi9kZWZlci5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHRocm90dGxlIH0gZnJvbSAnLi90aHJvdHRsZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGRlYm91bmNlIH0gZnJvbSAnLi9kZWJvdW5jZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHdyYXAgfSBmcm9tICcuL3dyYXAuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBuZWdhdGUgfSBmcm9tICcuL25lZ2F0ZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbXBvc2UgfSBmcm9tICcuL2NvbXBvc2UuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhZnRlciB9IGZyb20gJy4vYWZ0ZXIuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBiZWZvcmUgfSBmcm9tICcuL2JlZm9yZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG9uY2UgfSBmcm9tICcuL29uY2UuanMnO1xuXG4vLyBGaW5kZXJzXG4vLyAtLS0tLS0tXG4vLyBGdW5jdGlvbnMgdGhhdCBleHRyYWN0ICh0aGUgcG9zaXRpb24gb2YpIGEgc2luZ2xlIGVsZW1lbnQgZnJvbSBhbiBvYmplY3Rcbi8vIG9yIGFycmF5IGJhc2VkIG9uIHNvbWUgY3JpdGVyaW9uLlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBmaW5kS2V5IH0gZnJvbSAnLi9maW5kS2V5LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmluZEluZGV4IH0gZnJvbSAnLi9maW5kSW5kZXguanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmaW5kTGFzdEluZGV4IH0gZnJvbSAnLi9maW5kTGFzdEluZGV4LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc29ydGVkSW5kZXggfSBmcm9tICcuL3NvcnRlZEluZGV4LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaW5kZXhPZiB9IGZyb20gJy4vaW5kZXhPZi5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGxhc3RJbmRleE9mIH0gZnJvbSAnLi9sYXN0SW5kZXhPZi5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGZpbmQsXG4gICAgICAgICBkZWZhdWx0IGFzIGRldGVjdCB9IGZyb20gJy4vZmluZC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGZpbmRXaGVyZSB9IGZyb20gJy4vZmluZFdoZXJlLmpzJztcblxuLy8gQ29sbGVjdGlvbiBGdW5jdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBGdW5jdGlvbnMgdGhhdCB3b3JrIG9uIGFueSBjb2xsZWN0aW9uIG9mIGVsZW1lbnRzOiBlaXRoZXIgYW4gYXJyYXksIG9yXG4vLyBhbiBvYmplY3Qgb2Yga2V5LXZhbHVlIHBhaXJzLlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBlYWNoLFxuICAgICAgICAgZGVmYXVsdCBhcyBmb3JFYWNoIH0gZnJvbSAnLi9lYWNoLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWFwLFxuICAgICAgICAgZGVmYXVsdCBhcyBjb2xsZWN0IH0gZnJvbSAnLi9tYXAuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyByZWR1Y2UsXG4gICAgICAgICBkZWZhdWx0IGFzIGZvbGRsLFxuICAgICAgICAgZGVmYXVsdCBhcyBpbmplY3QgfSBmcm9tICcuL3JlZHVjZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlZHVjZVJpZ2h0LFxuICAgICAgICAgZGVmYXVsdCBhcyBmb2xkciAgICAgICB9IGZyb20gJy4vcmVkdWNlUmlnaHQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmaWx0ZXIsXG4gICAgICAgICBkZWZhdWx0IGFzIHNlbGVjdCB9IGZyb20gJy4vZmlsdGVyLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcmVqZWN0IH0gZnJvbSAnLi9yZWplY3QuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBldmVyeSxcbiAgICAgICAgIGRlZmF1bHQgYXMgYWxsICAgfSBmcm9tICcuL2V2ZXJ5LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc29tZSxcbiAgICAgICAgIGRlZmF1bHQgYXMgYW55ICB9IGZyb20gJy4vc29tZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbnRhaW5zLFxuICAgICAgICAgZGVmYXVsdCBhcyBpbmNsdWRlcyxcbiAgICAgICAgIGRlZmF1bHQgYXMgaW5jbHVkZSAgfSBmcm9tICcuL2NvbnRhaW5zLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaW52b2tlIH0gZnJvbSAnLi9pbnZva2UuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwbHVjayB9IGZyb20gJy4vcGx1Y2suanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aGVyZSB9IGZyb20gJy4vd2hlcmUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtYXggfSBmcm9tICcuL21heC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1pbiB9IGZyb20gJy4vbWluLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc2h1ZmZsZSB9IGZyb20gJy4vc2h1ZmZsZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHNhbXBsZSB9IGZyb20gJy4vc2FtcGxlLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc29ydEJ5IH0gZnJvbSAnLi9zb3J0QnkuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBncm91cEJ5IH0gZnJvbSAnLi9ncm91cEJ5LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaW5kZXhCeSB9IGZyb20gJy4vaW5kZXhCeS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvdW50QnkgfSBmcm9tICcuL2NvdW50QnkuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwYXJ0aXRpb24gfSBmcm9tICcuL3BhcnRpdGlvbi5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHRvQXJyYXkgfSBmcm9tICcuL3RvQXJyYXkuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzaXplIH0gZnJvbSAnLi9zaXplLmpzJztcblxuLy8gYF8ucGlja2AgYW5kIGBfLm9taXRgIGFyZSBhY3R1YWxseSBvYmplY3QgZnVuY3Rpb25zLCBidXQgd2UgcHV0XG4vLyB0aGVtIGhlcmUgaW4gb3JkZXIgdG8gY3JlYXRlIGEgbW9yZSBuYXR1cmFsIHJlYWRpbmcgb3JkZXIgaW4gdGhlXG4vLyBtb25vbGl0aGljIGJ1aWxkIGFzIHRoZXkgZGVwZW5kIG9uIGBfLmNvbnRhaW5zYC5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGljayB9IGZyb20gJy4vcGljay5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG9taXQgfSBmcm9tICcuL29taXQuanMnO1xuXG4vLyBBcnJheSBGdW5jdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLVxuLy8gRnVuY3Rpb25zIHRoYXQgb3BlcmF0ZSBvbiBhcnJheXMgKGFuZCBhcnJheS1saWtlcykgb25seSwgYmVjYXVzZSB0aGV54oCZcmVcbi8vIGV4cHJlc3NlZCBpbiB0ZXJtcyBvZiBvcGVyYXRpb25zIG9uIGFuIG9yZGVyZWQgbGlzdCBvZiB2YWx1ZXMuXG5leHBvcnQgeyBkZWZhdWx0IGFzIGZpcnN0LFxuICAgICAgICAgZGVmYXVsdCBhcyBoZWFkLFxuICAgICAgICAgZGVmYXVsdCBhcyB0YWtlICB9IGZyb20gJy4vZmlyc3QuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpbml0aWFsIH0gZnJvbSAnLi9pbml0aWFsLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbGFzdCB9IGZyb20gJy4vbGFzdC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlc3QsXG4gICAgICAgICBkZWZhdWx0IGFzIHRhaWwsXG4gICAgICAgICBkZWZhdWx0IGFzIGRyb3AgfSBmcm9tICcuL3Jlc3QuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb21wYWN0IH0gZnJvbSAnLi9jb21wYWN0LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmxhdHRlbiB9IGZyb20gJy4vZmxhdHRlbi5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhvdXQgfSBmcm9tICcuL3dpdGhvdXQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1bmlxLFxuICAgICAgICAgZGVmYXVsdCBhcyB1bmlxdWUgfSBmcm9tICcuL3VuaXEuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1bmlvbiB9IGZyb20gJy4vdW5pb24uanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpbnRlcnNlY3Rpb24gfSBmcm9tICcuL2ludGVyc2VjdGlvbi5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGRpZmZlcmVuY2UgfSBmcm9tICcuL2RpZmZlcmVuY2UuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1bnppcCxcbiAgICAgICAgIGRlZmF1bHQgYXMgdHJhbnNwb3NlIH0gZnJvbSAnLi91bnppcC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHppcCB9IGZyb20gJy4vemlwLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgb2JqZWN0IH0gZnJvbSAnLi9vYmplY3QuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyByYW5nZSB9IGZyb20gJy4vcmFuZ2UuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjaHVuayB9IGZyb20gJy4vY2h1bmsuanMnO1xuXG4vLyBPT1Bcbi8vIC0tLVxuLy8gVGhlc2UgbW9kdWxlcyBzdXBwb3J0IHRoZSBcIm9iamVjdC1vcmllbnRlZFwiIGNhbGxpbmcgc3R5bGUuIFNlZSBhbHNvXG4vLyBgdW5kZXJzY29yZS5qc2AgYW5kIGBpbmRleC1kZWZhdWx0LmpzYC5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWl4aW4gfSBmcm9tICcuL21peGluLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL3VuZGVyc2NvcmUtYXJyYXktbWV0aG9kcy5qcyc7XG4iLCJpbXBvcnQgZ3JvdXAgZnJvbSAnLi9fZ3JvdXAuanMnO1xuXG4vLyBJbmRleGVzIHRoZSBvYmplY3QncyB2YWx1ZXMgYnkgYSBjcml0ZXJpb24sIHNpbWlsYXIgdG8gYF8uZ3JvdXBCeWAsIGJ1dCBmb3Jcbi8vIHdoZW4geW91IGtub3cgdGhhdCB5b3VyIGluZGV4IHZhbHVlcyB3aWxsIGJlIHVuaXF1ZS5cbmV4cG9ydCBkZWZhdWx0IGdyb3VwKGZ1bmN0aW9uKHJlc3VsdCwgdmFsdWUsIGtleSkge1xuICByZXN1bHRba2V5XSA9IHZhbHVlO1xufSk7XG4iLCJpbXBvcnQgc29ydGVkSW5kZXggZnJvbSAnLi9zb3J0ZWRJbmRleC5qcyc7XG5pbXBvcnQgZmluZEluZGV4IGZyb20gJy4vZmluZEluZGV4LmpzJztcbmltcG9ydCBjcmVhdGVJbmRleEZpbmRlciBmcm9tICcuL19jcmVhdGVJbmRleEZpbmRlci5qcyc7XG5cbi8vIFJldHVybiB0aGUgcG9zaXRpb24gb2YgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgYW4gaXRlbSBpbiBhbiBhcnJheSxcbi8vIG9yIC0xIGlmIHRoZSBpdGVtIGlzIG5vdCBpbmNsdWRlZCBpbiB0aGUgYXJyYXkuXG4vLyBJZiB0aGUgYXJyYXkgaXMgbGFyZ2UgYW5kIGFscmVhZHkgaW4gc29ydCBvcmRlciwgcGFzcyBgdHJ1ZWBcbi8vIGZvciAqKmlzU29ydGVkKiogdG8gdXNlIGJpbmFyeSBzZWFyY2guXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVJbmRleEZpbmRlcigxLCBmaW5kSW5kZXgsIHNvcnRlZEluZGV4KTtcbiIsImltcG9ydCB7IHNsaWNlIH0gZnJvbSAnLi9fc2V0dXAuanMnO1xuXG4vLyBSZXR1cm5zIGV2ZXJ5dGhpbmcgYnV0IHRoZSBsYXN0IGVudHJ5IG9mIHRoZSBhcnJheS4gRXNwZWNpYWxseSB1c2VmdWwgb25cbi8vIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBQYXNzaW5nICoqbioqIHdpbGwgcmV0dXJuIGFsbCB0aGUgdmFsdWVzIGluXG4vLyB0aGUgYXJyYXksIGV4Y2x1ZGluZyB0aGUgbGFzdCBOLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdGlhbChhcnJheSwgbiwgZ3VhcmQpIHtcbiAgcmV0dXJuIHNsaWNlLmNhbGwoYXJyYXksIDAsIE1hdGgubWF4KDAsIGFycmF5Lmxlbmd0aCAtIChuID09IG51bGwgfHwgZ3VhcmQgPyAxIDogbikpKTtcbn1cbiIsImltcG9ydCBnZXRMZW5ndGggZnJvbSAnLi9fZ2V0TGVuZ3RoLmpzJztcbmltcG9ydCBjb250YWlucyBmcm9tICcuL2NvbnRhaW5zLmpzJztcblxuLy8gUHJvZHVjZSBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIGV2ZXJ5IGl0ZW0gc2hhcmVkIGJldHdlZW4gYWxsIHRoZVxuLy8gcGFzc2VkLWluIGFycmF5cy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGludGVyc2VjdGlvbihhcnJheSkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBhcmdzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGdldExlbmd0aChhcnJheSk7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gYXJyYXlbaV07XG4gICAgaWYgKGNvbnRhaW5zKHJlc3VsdCwgaXRlbSkpIGNvbnRpbnVlO1xuICAgIHZhciBqO1xuICAgIGZvciAoaiA9IDE7IGogPCBhcmdzTGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmICghY29udGFpbnMoYXJndW1lbnRzW2pdLCBpdGVtKSkgYnJlYWs7XG4gICAgfVxuICAgIGlmIChqID09PSBhcmdzTGVuZ3RoKSByZXN1bHQucHVzaChpdGVtKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuIiwiaW1wb3J0IGtleXMgZnJvbSAnLi9rZXlzLmpzJztcblxuLy8gSW52ZXJ0IHRoZSBrZXlzIGFuZCB2YWx1ZXMgb2YgYW4gb2JqZWN0LiBUaGUgdmFsdWVzIG11c3QgYmUgc2VyaWFsaXphYmxlLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW52ZXJ0KG9iaikge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIHZhciBfa2V5cyA9IGtleXMob2JqKTtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IF9rZXlzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0W29ialtfa2V5c1tpXV1dID0gX2tleXNbaV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImltcG9ydCByZXN0QXJndW1lbnRzIGZyb20gJy4vcmVzdEFyZ3VtZW50cy5qcyc7XG5pbXBvcnQgaXNGdW5jdGlvbiBmcm9tICcuL2lzRnVuY3Rpb24uanMnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi9pc0FycmF5LmpzJztcbmltcG9ydCBtYXAgZnJvbSAnLi9tYXAuanMnO1xuaW1wb3J0IGRlZXBHZXQgZnJvbSAnLi9fZGVlcEdldC5qcyc7XG5cbi8vIEludm9rZSBhIG1ldGhvZCAod2l0aCBhcmd1bWVudHMpIG9uIGV2ZXJ5IGl0ZW0gaW4gYSBjb2xsZWN0aW9uLlxuZXhwb3J0IGRlZmF1bHQgcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihvYmosIHBhdGgsIGFyZ3MpIHtcbiAgdmFyIGNvbnRleHRQYXRoLCBmdW5jO1xuICBpZiAoaXNGdW5jdGlvbihwYXRoKSkge1xuICAgIGZ1bmMgPSBwYXRoO1xuICB9IGVsc2UgaWYgKGlzQXJyYXkocGF0aCkpIHtcbiAgICBjb250ZXh0UGF0aCA9IHBhdGguc2xpY2UoMCwgLTEpO1xuICAgIHBhdGggPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV07XG4gIH1cbiAgcmV0dXJuIG1hcChvYmosIGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZnVuYztcbiAgICBpZiAoIW1ldGhvZCkge1xuICAgICAgaWYgKGNvbnRleHRQYXRoICYmIGNvbnRleHRQYXRoLmxlbmd0aCkge1xuICAgICAgICBjb250ZXh0ID0gZGVlcEdldChjb250ZXh0LCBjb250ZXh0UGF0aCk7XG4gICAgICB9XG4gICAgICBpZiAoY29udGV4dCA9PSBudWxsKSByZXR1cm4gdm9pZCAwO1xuICAgICAgbWV0aG9kID0gY29udGV4dFtwYXRoXTtcbiAgICB9XG4gICAgcmV0dXJuIG1ldGhvZCA9PSBudWxsID8gbWV0aG9kIDogbWV0aG9kLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICB9KTtcbn0pO1xuIiwiaW1wb3J0IHRhZ1Rlc3RlciBmcm9tICcuL190YWdUZXN0ZXIuanMnO1xuaW1wb3J0IGhhcyBmcm9tICcuL19oYXMuanMnO1xuXG52YXIgaXNBcmd1bWVudHMgPSB0YWdUZXN0ZXIoJ0FyZ3VtZW50cycpO1xuXG4vLyBEZWZpbmUgYSBmYWxsYmFjayB2ZXJzaW9uIG9mIHRoZSBtZXRob2QgaW4gYnJvd3NlcnMgKGFoZW0sIElFIDwgOSksIHdoZXJlXG4vLyB0aGVyZSBpc24ndCBhbnkgaW5zcGVjdGFibGUgXCJBcmd1bWVudHNcIiB0eXBlLlxuKGZ1bmN0aW9uKCkge1xuICBpZiAoIWlzQXJndW1lbnRzKGFyZ3VtZW50cykpIHtcbiAgICBpc0FyZ3VtZW50cyA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIGhhcyhvYmosICdjYWxsZWUnKTtcbiAgICB9O1xuICB9XG59KCkpO1xuXG5leHBvcnQgZGVmYXVsdCBpc0FyZ3VtZW50cztcbiIsImltcG9ydCB7IG5hdGl2ZUlzQXJyYXkgfSBmcm9tICcuL19zZXR1cC5qcyc7XG5pbXBvcnQgdGFnVGVzdGVyIGZyb20gJy4vX3RhZ1Rlc3Rlci5qcyc7XG5cbi8vIElzIGEgZ2l2ZW4gdmFsdWUgYW4gYXJyYXk/XG4vLyBEZWxlZ2F0ZXMgdG8gRUNNQTUncyBuYXRpdmUgYEFycmF5LmlzQXJyYXlgLlxuZXhwb3J0IGRlZmF1bHQgbmF0aXZlSXNBcnJheSB8fCB0YWdUZXN0ZXIoJ0FycmF5Jyk7XG4iLCJpbXBvcnQgdGFnVGVzdGVyIGZyb20gJy4vX3RhZ1Rlc3Rlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHRhZ1Rlc3RlcignQXJyYXlCdWZmZXInKTtcbiIsImltcG9ydCB7IHRvU3RyaW5nIH0gZnJvbSAnLi9fc2V0dXAuanMnO1xuXG4vLyBJcyBhIGdpdmVuIHZhbHVlIGEgYm9vbGVhbj9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQm9vbGVhbihvYmopIHtcbiAgcmV0dXJuIG9iaiA9PT0gdHJ1ZSB8fCBvYmogPT09IGZhbHNlIHx8IHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgQm9vbGVhbl0nO1xufVxuIiwiaW1wb3J0IHRhZ1Rlc3RlciBmcm9tICcuL190YWdUZXN0ZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCB0YWdUZXN0ZXIoJ0RhdGFWaWV3Jyk7XG4iLCJpbXBvcnQgdGFnVGVzdGVyIGZyb20gJy4vX3RhZ1Rlc3Rlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHRhZ1Rlc3RlcignRGF0ZScpO1xuIiwiLy8gSXMgYSBnaXZlbiB2YWx1ZSBhIERPTSBlbGVtZW50P1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNFbGVtZW50KG9iaikge1xuICByZXR1cm4gISEob2JqICYmIG9iai5ub2RlVHlwZSA9PT0gMSk7XG59XG4iLCJpbXBvcnQgaXNBcnJheUxpa2UgZnJvbSAnLi9faXNBcnJheUxpa2UuanMnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi9pc0FycmF5LmpzJztcbmltcG9ydCBpc1N0cmluZyBmcm9tICcuL2lzU3RyaW5nLmpzJztcbmltcG9ydCBpc0FyZ3VtZW50cyBmcm9tICcuL2lzQXJndW1lbnRzLmpzJztcbmltcG9ydCBrZXlzIGZyb20gJy4va2V5cy5qcyc7XG5cbi8vIElzIGEgZ2l2ZW4gYXJyYXksIHN0cmluZywgb3Igb2JqZWN0IGVtcHR5P1xuLy8gQW4gXCJlbXB0eVwiIG9iamVjdCBoYXMgbm8gZW51bWVyYWJsZSBvd24tcHJvcGVydGllcy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRW1wdHkob2JqKSB7XG4gIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHRydWU7XG4gIC8vIFNraXAgdGhlIG1vcmUgZXhwZW5zaXZlIGB0b1N0cmluZ2AtYmFzZWQgdHlwZSBjaGVja3MgaWYgYG9iamAgaGFzIG5vXG4gIC8vIGAubGVuZ3RoYC5cbiAgaWYgKGlzQXJyYXlMaWtlKG9iaikgJiYgKGlzQXJyYXkob2JqKSB8fCBpc1N0cmluZyhvYmopIHx8IGlzQXJndW1lbnRzKG9iaikpKSByZXR1cm4gb2JqLmxlbmd0aCA9PT0gMDtcbiAgcmV0dXJuIGtleXMob2JqKS5sZW5ndGggPT09IDA7XG59XG4iLCJpbXBvcnQgXyBmcm9tICcuL3VuZGVyc2NvcmUuanMnO1xuaW1wb3J0IHsgdG9TdHJpbmcsIFN5bWJvbFByb3RvIH0gZnJvbSAnLi9fc2V0dXAuanMnO1xuaW1wb3J0IGdldEJ5dGVMZW5ndGggZnJvbSAnLi9fZ2V0Qnl0ZUxlbmd0aC5qcyc7XG5pbXBvcnQgaXNUeXBlZEFycmF5IGZyb20gJy4vaXNUeXBlZEFycmF5LmpzJztcbmltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJy4vaXNGdW5jdGlvbi5qcyc7XG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMuanMnO1xuaW1wb3J0IGhhcyBmcm9tICcuL19oYXMuanMnO1xuXG4vLyBJbnRlcm5hbCByZWN1cnNpdmUgY29tcGFyaXNvbiBmdW5jdGlvbiBmb3IgYF8uaXNFcXVhbGAuXG5mdW5jdGlvbiBlcShhLCBiLCBhU3RhY2ssIGJTdGFjaykge1xuICAvLyBJZGVudGljYWwgb2JqZWN0cyBhcmUgZXF1YWwuIGAwID09PSAtMGAsIGJ1dCB0aGV5IGFyZW4ndCBpZGVudGljYWwuXG4gIC8vIFNlZSB0aGUgW0hhcm1vbnkgYGVnYWxgIHByb3Bvc2FsXShodHRwczovL3dpa2kuZWNtYXNjcmlwdC5vcmcvZG9rdS5waHA/aWQ9aGFybW9ueTplZ2FsKS5cbiAgaWYgKGEgPT09IGIpIHJldHVybiBhICE9PSAwIHx8IDEgLyBhID09PSAxIC8gYjtcbiAgLy8gYG51bGxgIG9yIGB1bmRlZmluZWRgIG9ubHkgZXF1YWwgdG8gaXRzZWxmIChzdHJpY3QgY29tcGFyaXNvbikuXG4gIGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gIC8vIGBOYU5gcyBhcmUgZXF1aXZhbGVudCwgYnV0IG5vbi1yZWZsZXhpdmUuXG4gIGlmIChhICE9PSBhKSByZXR1cm4gYiAhPT0gYjtcbiAgLy8gRXhoYXVzdCBwcmltaXRpdmUgY2hlY2tzXG4gIHZhciB0eXBlID0gdHlwZW9mIGE7XG4gIGlmICh0eXBlICE9PSAnZnVuY3Rpb24nICYmIHR5cGUgIT09ICdvYmplY3QnICYmIHR5cGVvZiBiICE9ICdvYmplY3QnKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBkZWVwRXEoYSwgYiwgYVN0YWNrLCBiU3RhY2spO1xufVxuXG4vLyBJbnRlcm5hbCByZWN1cnNpdmUgY29tcGFyaXNvbiBmdW5jdGlvbiBmb3IgYF8uaXNFcXVhbGAuXG5mdW5jdGlvbiBkZWVwRXEoYSwgYiwgYVN0YWNrLCBiU3RhY2spIHtcbiAgLy8gVW53cmFwIGFueSB3cmFwcGVkIG9iamVjdHMuXG4gIGlmIChhIGluc3RhbmNlb2YgXykgYSA9IGEuX3dyYXBwZWQ7XG4gIGlmIChiIGluc3RhbmNlb2YgXykgYiA9IGIuX3dyYXBwZWQ7XG4gIC8vIENvbXBhcmUgYFtbQ2xhc3NdXWAgbmFtZXMuXG4gIHZhciBjbGFzc05hbWUgPSB0b1N0cmluZy5jYWxsKGEpO1xuICBpZiAoY2xhc3NOYW1lICE9PSB0b1N0cmluZy5jYWxsKGIpKSByZXR1cm4gZmFsc2U7XG4gIHN3aXRjaCAoY2xhc3NOYW1lKSB7XG4gICAgLy8gVGhlc2UgdHlwZXMgYXJlIGNvbXBhcmVkIGJ5IHZhbHVlLlxuICAgIGNhc2UgJ1tvYmplY3QgUmVnRXhwXSc6XG4gICAgICAvLyBSZWdFeHBzIGFyZSBjb2VyY2VkIHRvIHN0cmluZ3MgZm9yIGNvbXBhcmlzb24gKE5vdGU6ICcnICsgL2EvaSA9PT0gJy9hL2knKVxuICAgIGNhc2UgJ1tvYmplY3QgU3RyaW5nXSc6XG4gICAgICAvLyBQcmltaXRpdmVzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIG9iamVjdCB3cmFwcGVycyBhcmUgZXF1aXZhbGVudDsgdGh1cywgYFwiNVwiYCBpc1xuICAgICAgLy8gZXF1aXZhbGVudCB0byBgbmV3IFN0cmluZyhcIjVcIilgLlxuICAgICAgcmV0dXJuICcnICsgYSA9PT0gJycgKyBiO1xuICAgIGNhc2UgJ1tvYmplY3QgTnVtYmVyXSc6XG4gICAgICAvLyBgTmFOYHMgYXJlIGVxdWl2YWxlbnQsIGJ1dCBub24tcmVmbGV4aXZlLlxuICAgICAgLy8gT2JqZWN0KE5hTikgaXMgZXF1aXZhbGVudCB0byBOYU4uXG4gICAgICBpZiAoK2EgIT09ICthKSByZXR1cm4gK2IgIT09ICtiO1xuICAgICAgLy8gQW4gYGVnYWxgIGNvbXBhcmlzb24gaXMgcGVyZm9ybWVkIGZvciBvdGhlciBudW1lcmljIHZhbHVlcy5cbiAgICAgIHJldHVybiArYSA9PT0gMCA/IDEgLyArYSA9PT0gMSAvIGIgOiArYSA9PT0gK2I7XG4gICAgY2FzZSAnW29iamVjdCBEYXRlXSc6XG4gICAgY2FzZSAnW29iamVjdCBCb29sZWFuXSc6XG4gICAgICAvLyBDb2VyY2UgZGF0ZXMgYW5kIGJvb2xlYW5zIHRvIG51bWVyaWMgcHJpbWl0aXZlIHZhbHVlcy4gRGF0ZXMgYXJlIGNvbXBhcmVkIGJ5IHRoZWlyXG4gICAgICAvLyBtaWxsaXNlY29uZCByZXByZXNlbnRhdGlvbnMuIE5vdGUgdGhhdCBpbnZhbGlkIGRhdGVzIHdpdGggbWlsbGlzZWNvbmQgcmVwcmVzZW50YXRpb25zXG4gICAgICAvLyBvZiBgTmFOYCBhcmUgbm90IGVxdWl2YWxlbnQuXG4gICAgICByZXR1cm4gK2EgPT09ICtiO1xuICAgIGNhc2UgJ1tvYmplY3QgU3ltYm9sXSc6XG4gICAgICByZXR1cm4gU3ltYm9sUHJvdG8udmFsdWVPZi5jYWxsKGEpID09PSBTeW1ib2xQcm90by52YWx1ZU9mLmNhbGwoYik7XG4gICAgY2FzZSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nOlxuICAgICAgLy8gQ29lcmNlIHRvIGBEYXRhVmlld2Agc28gd2UgY2FuIGZhbGwgdGhyb3VnaCB0byB0aGUgbmV4dCBjYXNlLlxuICAgICAgcmV0dXJuIGRlZXBFcShuZXcgRGF0YVZpZXcoYSksIG5ldyBEYXRhVmlldyhiKSwgYVN0YWNrLCBiU3RhY2spO1xuICAgIGNhc2UgJ1tvYmplY3QgRGF0YVZpZXddJzpcbiAgICAgIHZhciBieXRlTGVuZ3RoID0gZ2V0Qnl0ZUxlbmd0aChhKTtcbiAgICAgIGlmIChieXRlTGVuZ3RoICE9PSBnZXRCeXRlTGVuZ3RoKGIpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHdoaWxlIChieXRlTGVuZ3RoLS0pIHtcbiAgICAgICAgaWYgKGEuZ2V0VWludDgoYnl0ZUxlbmd0aCkgIT09IGIuZ2V0VWludDgoYnl0ZUxlbmd0aCkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGlzVHlwZWRBcnJheShhKSkge1xuICAgIC8vIENvZXJjZSB0eXBlZCBhcnJheXMgdG8gYERhdGFWaWV3YC5cbiAgICByZXR1cm4gZGVlcEVxKG5ldyBEYXRhVmlldyhhLmJ1ZmZlciksIG5ldyBEYXRhVmlldyhiLmJ1ZmZlciksIGFTdGFjaywgYlN0YWNrKTtcbiAgfVxuXG4gIHZhciBhcmVBcnJheXMgPSBjbGFzc05hbWUgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gIGlmICghYXJlQXJyYXlzKSB7XG4gICAgaWYgKHR5cGVvZiBhICE9ICdvYmplY3QnIHx8IHR5cGVvZiBiICE9ICdvYmplY3QnKSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyBPYmplY3RzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWl2YWxlbnQsIGJ1dCBgT2JqZWN0YHMgb3IgYEFycmF5YHNcbiAgICAvLyBmcm9tIGRpZmZlcmVudCBmcmFtZXMgYXJlLlxuICAgIHZhciBhQ3RvciA9IGEuY29uc3RydWN0b3IsIGJDdG9yID0gYi5jb25zdHJ1Y3RvcjtcbiAgICBpZiAoYUN0b3IgIT09IGJDdG9yICYmICEoaXNGdW5jdGlvbihhQ3RvcikgJiYgYUN0b3IgaW5zdGFuY2VvZiBhQ3RvciAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0Z1bmN0aW9uKGJDdG9yKSAmJiBiQ3RvciBpbnN0YW5jZW9mIGJDdG9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgKCdjb25zdHJ1Y3RvcicgaW4gYSAmJiAnY29uc3RydWN0b3InIGluIGIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIC8vIEFzc3VtZSBlcXVhbGl0eSBmb3IgY3ljbGljIHN0cnVjdHVyZXMuIFRoZSBhbGdvcml0aG0gZm9yIGRldGVjdGluZyBjeWNsaWNcbiAgLy8gc3RydWN0dXJlcyBpcyBhZGFwdGVkIGZyb20gRVMgNS4xIHNlY3Rpb24gMTUuMTIuMywgYWJzdHJhY3Qgb3BlcmF0aW9uIGBKT2AuXG5cbiAgLy8gSW5pdGlhbGl6aW5nIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuICAvLyBJdCdzIGRvbmUgaGVyZSBzaW5jZSB3ZSBvbmx5IG5lZWQgdGhlbSBmb3Igb2JqZWN0cyBhbmQgYXJyYXlzIGNvbXBhcmlzb24uXG4gIGFTdGFjayA9IGFTdGFjayB8fCBbXTtcbiAgYlN0YWNrID0gYlN0YWNrIHx8IFtdO1xuICB2YXIgbGVuZ3RoID0gYVN0YWNrLmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgLy8gTGluZWFyIHNlYXJjaC4gUGVyZm9ybWFuY2UgaXMgaW52ZXJzZWx5IHByb3BvcnRpb25hbCB0byB0aGUgbnVtYmVyIG9mXG4gICAgLy8gdW5pcXVlIG5lc3RlZCBzdHJ1Y3R1cmVzLlxuICAgIGlmIChhU3RhY2tbbGVuZ3RoXSA9PT0gYSkgcmV0dXJuIGJTdGFja1tsZW5ndGhdID09PSBiO1xuICB9XG5cbiAgLy8gQWRkIHRoZSBmaXJzdCBvYmplY3QgdG8gdGhlIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuICBhU3RhY2sucHVzaChhKTtcbiAgYlN0YWNrLnB1c2goYik7XG5cbiAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIGFuZCBhcnJheXMuXG4gIGlmIChhcmVBcnJheXMpIHtcbiAgICAvLyBDb21wYXJlIGFycmF5IGxlbmd0aHMgdG8gZGV0ZXJtaW5lIGlmIGEgZGVlcCBjb21wYXJpc29uIGlzIG5lY2Vzc2FyeS5cbiAgICBsZW5ndGggPSBhLmxlbmd0aDtcbiAgICBpZiAobGVuZ3RoICE9PSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIERlZXAgY29tcGFyZSB0aGUgY29udGVudHMsIGlnbm9yaW5nIG5vbi1udW1lcmljIHByb3BlcnRpZXMuXG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICBpZiAoIWVxKGFbbGVuZ3RoXSwgYltsZW5ndGhdLCBhU3RhY2ssIGJTdGFjaykpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gRGVlcCBjb21wYXJlIG9iamVjdHMuXG4gICAgdmFyIF9rZXlzID0ga2V5cyhhKSwga2V5O1xuICAgIGxlbmd0aCA9IF9rZXlzLmxlbmd0aDtcbiAgICAvLyBFbnN1cmUgdGhhdCBib3RoIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBudW1iZXIgb2YgcHJvcGVydGllcyBiZWZvcmUgY29tcGFyaW5nIGRlZXAgZXF1YWxpdHkuXG4gICAgaWYgKGtleXMoYikubGVuZ3RoICE9PSBsZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgIC8vIERlZXAgY29tcGFyZSBlYWNoIG1lbWJlclxuICAgICAga2V5ID0gX2tleXNbbGVuZ3RoXTtcbiAgICAgIGlmICghKGhhcyhiLCBrZXkpICYmIGVxKGFba2V5XSwgYltrZXldLCBhU3RhY2ssIGJTdGFjaykpKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIC8vIFJlbW92ZSB0aGUgZmlyc3Qgb2JqZWN0IGZyb20gdGhlIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuICBhU3RhY2sucG9wKCk7XG4gIGJTdGFjay5wb3AoKTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIFBlcmZvcm0gYSBkZWVwIGNvbXBhcmlzb24gdG8gY2hlY2sgaWYgdHdvIG9iamVjdHMgYXJlIGVxdWFsLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNFcXVhbChhLCBiKSB7XG4gIHJldHVybiBlcShhLCBiKTtcbn1cbiIsImltcG9ydCB0YWdUZXN0ZXIgZnJvbSAnLi9fdGFnVGVzdGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgdGFnVGVzdGVyKCdFcnJvcicpO1xuIiwiaW1wb3J0IHsgX2lzRmluaXRlIH0gZnJvbSAnLi9fc2V0dXAuanMnO1xuaW1wb3J0IGlzU3ltYm9sIGZyb20gJy4vaXNTeW1ib2wuanMnO1xuXG4vLyBJcyBhIGdpdmVuIG9iamVjdCBhIGZpbml0ZSBudW1iZXI/XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0Zpbml0ZShvYmopIHtcbiAgcmV0dXJuICFpc1N5bWJvbChvYmopICYmIF9pc0Zpbml0ZShvYmopICYmICFpc05hTihwYXJzZUZsb2F0KG9iaikpO1xufVxuIiwiaW1wb3J0IHRhZ1Rlc3RlciBmcm9tICcuL190YWdUZXN0ZXIuanMnO1xuaW1wb3J0IHsgcm9vdCB9IGZyb20gJy4vX3NldHVwLmpzJztcblxudmFyIGlzRnVuY3Rpb24gPSB0YWdUZXN0ZXIoJ0Z1bmN0aW9uJyk7XG5cbi8vIE9wdGltaXplIGBpc0Z1bmN0aW9uYCBpZiBhcHByb3ByaWF0ZS4gV29yayBhcm91bmQgc29tZSBgdHlwZW9mYCBidWdzIGluIG9sZFxuLy8gdjgsIElFIDExICgjMTYyMSksIFNhZmFyaSA4ICgjMTkyOSksIGFuZCBQaGFudG9tSlMgKCMyMjM2KS5cbnZhciBub2RlbGlzdCA9IHJvb3QuZG9jdW1lbnQgJiYgcm9vdC5kb2N1bWVudC5jaGlsZE5vZGVzO1xuaWYgKHR5cGVvZiAvLi8gIT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgSW50OEFycmF5ICE9ICdvYmplY3QnICYmIHR5cGVvZiBub2RlbGlzdCAhPSAnZnVuY3Rpb24nKSB7XG4gIGlzRnVuY3Rpb24gPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PSAnZnVuY3Rpb24nIHx8IGZhbHNlO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc0Z1bmN0aW9uO1xuIiwiaW1wb3J0IHRhZ1Rlc3RlciBmcm9tICcuL190YWdUZXN0ZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCB0YWdUZXN0ZXIoJ01hcCcpO1xuIiwiaW1wb3J0IGtleXMgZnJvbSAnLi9rZXlzLmpzJztcblxuLy8gUmV0dXJucyB3aGV0aGVyIGFuIG9iamVjdCBoYXMgYSBnaXZlbiBzZXQgb2YgYGtleTp2YWx1ZWAgcGFpcnMuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc01hdGNoKG9iamVjdCwgYXR0cnMpIHtcbiAgdmFyIF9rZXlzID0ga2V5cyhhdHRycyksIGxlbmd0aCA9IF9rZXlzLmxlbmd0aDtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSByZXR1cm4gIWxlbmd0aDtcbiAgdmFyIG9iaiA9IE9iamVjdChvYmplY3QpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IF9rZXlzW2ldO1xuICAgIGlmIChhdHRyc1trZXldICE9PSBvYmpba2V5XSB8fCAhKGtleSBpbiBvYmopKSByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG4iLCJpbXBvcnQgeyBfaXNOYU4gfSBmcm9tICcuL19zZXR1cC5qcyc7XG5pbXBvcnQgaXNOdW1iZXIgZnJvbSAnLi9pc051bWJlci5qcyc7XG5cbi8vIElzIHRoZSBnaXZlbiB2YWx1ZSBgTmFOYD9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzTmFOKG9iaikge1xuICByZXR1cm4gaXNOdW1iZXIob2JqKSAmJiBfaXNOYU4ob2JqKTtcbn1cbiIsIi8vIElzIGEgZ2l2ZW4gdmFsdWUgZXF1YWwgdG8gbnVsbD9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzTnVsbChvYmopIHtcbiAgcmV0dXJuIG9iaiA9PT0gbnVsbDtcbn1cbiIsImltcG9ydCB0YWdUZXN0ZXIgZnJvbSAnLi9fdGFnVGVzdGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgdGFnVGVzdGVyKCdOdW1iZXInKTtcbiIsIi8vIElzIGEgZ2l2ZW4gdmFyaWFibGUgYW4gb2JqZWN0P1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIG9iajtcbiAgcmV0dXJuIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgdHlwZSA9PT0gJ29iamVjdCcgJiYgISFvYmo7XG59XG4iLCJpbXBvcnQgdGFnVGVzdGVyIGZyb20gJy4vX3RhZ1Rlc3Rlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHRhZ1Rlc3RlcignUmVnRXhwJyk7XG4iLCJpbXBvcnQgdGFnVGVzdGVyIGZyb20gJy4vX3RhZ1Rlc3Rlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHRhZ1Rlc3RlcignU2V0Jyk7XG4iLCJpbXBvcnQgdGFnVGVzdGVyIGZyb20gJy4vX3RhZ1Rlc3Rlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHRhZ1Rlc3RlcignU3RyaW5nJyk7XG4iLCJpbXBvcnQgdGFnVGVzdGVyIGZyb20gJy4vX3RhZ1Rlc3Rlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHRhZ1Rlc3RlcignU3ltYm9sJyk7XG4iLCJpbXBvcnQgeyBzdXBwb3J0c0FycmF5QnVmZmVyLCBuYXRpdmVJc1ZpZXcsIHRvU3RyaW5nIH0gZnJvbSAnLi9fc2V0dXAuanMnO1xuaW1wb3J0IGlzRGF0YVZpZXcgZnJvbSAnLi9pc0RhdGFWaWV3LmpzJztcbmltcG9ydCBjb25zdGFudCBmcm9tICcuL2NvbnN0YW50LmpzJztcbmltcG9ydCBpc0J1ZmZlckxpa2UgZnJvbSAnLi9faXNCdWZmZXJMaWtlLmpzJztcblxuLy8gSXMgYSBnaXZlbiB2YWx1ZSBhIHR5cGVkIGFycmF5P1xudmFyIHR5cGVkQXJyYXlQYXR0ZXJuID0gL1xcW29iamVjdCAoKEl8VWkpbnQoOHwxNnwzMil8RmxvYXQoMzJ8NjQpfFVpbnQ4Q2xhbXBlZHxCaWcoSXxVaSludDY0KUFycmF5XFxdLztcbmZ1bmN0aW9uIGlzVHlwZWRBcnJheShvYmopIHtcbiAgLy8gYEFycmF5QnVmZmVyLmlzVmlld2AgaXMgdGhlIG1vc3QgZnV0dXJlLXByb29mLCBzbyB1c2UgaXQgd2hlbiBhdmFpbGFibGUuXG4gIC8vIE90aGVyd2lzZSwgZmFsbCBiYWNrIG9uIHRoZSBhYm92ZSByZWd1bGFyIGV4cHJlc3Npb24uXG4gIHJldHVybiBuYXRpdmVJc1ZpZXcgPyAobmF0aXZlSXNWaWV3KG9iaikgJiYgIWlzRGF0YVZpZXcob2JqKSkgOlxuICAgICAgICAgICAgICAgIGlzQnVmZmVyTGlrZShvYmopICYmIHR5cGVkQXJyYXlQYXR0ZXJuLnRlc3QodG9TdHJpbmcuY2FsbChvYmopKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydHNBcnJheUJ1ZmZlciA/IGlzVHlwZWRBcnJheSA6IGNvbnN0YW50KGZhbHNlKTtcbiIsIi8vIElzIGEgZ2l2ZW4gdmFyaWFibGUgdW5kZWZpbmVkP1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNVbmRlZmluZWQob2JqKSB7XG4gIHJldHVybiBvYmogPT09IHZvaWQgMDtcbn1cbiIsImltcG9ydCB0YWdUZXN0ZXIgZnJvbSAnLi9fdGFnVGVzdGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgdGFnVGVzdGVyKCdXZWFrTWFwJyk7XG4iLCJpbXBvcnQgdGFnVGVzdGVyIGZyb20gJy4vX3RhZ1Rlc3Rlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHRhZ1Rlc3RlcignV2Vha1NldCcpO1xuIiwiaW1wb3J0IF8gZnJvbSAnLi91bmRlcnNjb3JlLmpzJztcbmltcG9ydCBiYXNlSXRlcmF0ZWUgZnJvbSAnLi9fYmFzZUl0ZXJhdGVlLmpzJztcblxuLy8gRXh0ZXJuYWwgd3JhcHBlciBmb3Igb3VyIGNhbGxiYWNrIGdlbmVyYXRvci4gVXNlcnMgbWF5IGN1c3RvbWl6ZVxuLy8gYF8uaXRlcmF0ZWVgIGlmIHRoZXkgd2FudCBhZGRpdGlvbmFsIHByZWRpY2F0ZS9pdGVyYXRlZSBzaG9ydGhhbmQgc3R5bGVzLlxuLy8gVGhpcyBhYnN0cmFjdGlvbiBoaWRlcyB0aGUgaW50ZXJuYWwtb25seSBgYXJnQ291bnRgIGFyZ3VtZW50LlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXRlcmF0ZWUodmFsdWUsIGNvbnRleHQpIHtcbiAgcmV0dXJuIGJhc2VJdGVyYXRlZSh2YWx1ZSwgY29udGV4dCwgSW5maW5pdHkpO1xufVxuXy5pdGVyYXRlZSA9IGl0ZXJhdGVlO1xuIiwiaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4vaXNPYmplY3QuanMnO1xuaW1wb3J0IHsgbmF0aXZlS2V5cywgaGFzRW51bUJ1ZyB9IGZyb20gJy4vX3NldHVwLmpzJztcbmltcG9ydCBoYXMgZnJvbSAnLi9faGFzLmpzJztcbmltcG9ydCBjb2xsZWN0Tm9uRW51bVByb3BzIGZyb20gJy4vX2NvbGxlY3ROb25FbnVtUHJvcHMuanMnO1xuXG4vLyBSZXRyaWV2ZSB0aGUgbmFtZXMgb2YgYW4gb2JqZWN0J3Mgb3duIHByb3BlcnRpZXMuXG4vLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgT2JqZWN0LmtleXNgLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ga2V5cyhvYmopIHtcbiAgaWYgKCFpc09iamVjdChvYmopKSByZXR1cm4gW107XG4gIGlmIChuYXRpdmVLZXlzKSByZXR1cm4gbmF0aXZlS2V5cyhvYmopO1xuICB2YXIga2V5cyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSBpZiAoaGFzKG9iaiwga2V5KSkga2V5cy5wdXNoKGtleSk7XG4gIC8vIEFoZW0sIElFIDwgOS5cbiAgaWYgKGhhc0VudW1CdWcpIGNvbGxlY3ROb25FbnVtUHJvcHMob2JqLCBrZXlzKTtcbiAgcmV0dXJuIGtleXM7XG59XG4iLCJpbXBvcnQgcmVzdCBmcm9tICcuL3Jlc3QuanMnO1xuXG4vLyBHZXQgdGhlIGxhc3QgZWxlbWVudCBvZiBhbiBhcnJheS4gUGFzc2luZyAqKm4qKiB3aWxsIHJldHVybiB0aGUgbGFzdCBOXG4vLyB2YWx1ZXMgaW4gdGhlIGFycmF5LlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGFzdChhcnJheSwgbiwgZ3VhcmQpIHtcbiAgaWYgKGFycmF5ID09IG51bGwgfHwgYXJyYXkubGVuZ3RoIDwgMSkgcmV0dXJuIG4gPT0gbnVsbCB8fCBndWFyZCA/IHZvaWQgMCA6IFtdO1xuICBpZiAobiA9PSBudWxsIHx8IGd1YXJkKSByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07XG4gIHJldHVybiByZXN0KGFycmF5LCBNYXRoLm1heCgwLCBhcnJheS5sZW5ndGggLSBuKSk7XG59XG4iLCJpbXBvcnQgZmluZExhc3RJbmRleCBmcm9tICcuL2ZpbmRMYXN0SW5kZXguanMnO1xuaW1wb3J0IGNyZWF0ZUluZGV4RmluZGVyIGZyb20gJy4vX2NyZWF0ZUluZGV4RmluZGVyLmpzJztcblxuLy8gUmV0dXJuIHRoZSBwb3NpdGlvbiBvZiB0aGUgbGFzdCBvY2N1cnJlbmNlIG9mIGFuIGl0ZW0gaW4gYW4gYXJyYXksXG4vLyBvciAtMSBpZiB0aGUgaXRlbSBpcyBub3QgaW5jbHVkZWQgaW4gdGhlIGFycmF5LlxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSW5kZXhGaW5kZXIoLTEsIGZpbmRMYXN0SW5kZXgpO1xuIiwiaW1wb3J0IGNiIGZyb20gJy4vX2NiLmpzJztcbmltcG9ydCBpc0FycmF5TGlrZSBmcm9tICcuL19pc0FycmF5TGlrZS5qcyc7XG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMuanMnO1xuXG4vLyBSZXR1cm4gdGhlIHJlc3VsdHMgb2YgYXBwbHlpbmcgdGhlIGl0ZXJhdGVlIHRvIGVhY2ggZWxlbWVudC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1hcChvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICB2YXIgX2tleXMgPSAhaXNBcnJheUxpa2Uob2JqKSAmJiBrZXlzKG9iaiksXG4gICAgICBsZW5ndGggPSAoX2tleXMgfHwgb2JqKS5sZW5ndGgsXG4gICAgICByZXN1bHRzID0gQXJyYXkobGVuZ3RoKTtcbiAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgIHZhciBjdXJyZW50S2V5ID0gX2tleXMgPyBfa2V5c1tpbmRleF0gOiBpbmRleDtcbiAgICByZXN1bHRzW2luZGV4XSA9IGl0ZXJhdGVlKG9ialtjdXJyZW50S2V5XSwgY3VycmVudEtleSwgb2JqKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0cztcbn1cbiIsImltcG9ydCBjYiBmcm9tICcuL19jYi5qcyc7XG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMuanMnO1xuXG4vLyBSZXR1cm5zIHRoZSByZXN1bHRzIG9mIGFwcGx5aW5nIHRoZSBgaXRlcmF0ZWVgIHRvIGVhY2ggZWxlbWVudCBvZiBgb2JqYC5cbi8vIEluIGNvbnRyYXN0IHRvIGBfLm1hcGAgaXQgcmV0dXJucyBhbiBvYmplY3QuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYXBPYmplY3Qob2JqLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgdmFyIF9rZXlzID0ga2V5cyhvYmopLFxuICAgICAgbGVuZ3RoID0gX2tleXMubGVuZ3RoLFxuICAgICAgcmVzdWx0cyA9IHt9O1xuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgdmFyIGN1cnJlbnRLZXkgPSBfa2V5c1tpbmRleF07XG4gICAgcmVzdWx0c1tjdXJyZW50S2V5XSA9IGl0ZXJhdGVlKG9ialtjdXJyZW50S2V5XSwgY3VycmVudEtleSwgb2JqKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0cztcbn1cbiIsImltcG9ydCBleHRlbmRPd24gZnJvbSAnLi9leHRlbmRPd24uanMnO1xuaW1wb3J0IGlzTWF0Y2ggZnJvbSAnLi9pc01hdGNoLmpzJztcblxuLy8gUmV0dXJucyBhIHByZWRpY2F0ZSBmb3IgY2hlY2tpbmcgd2hldGhlciBhbiBvYmplY3QgaGFzIGEgZ2l2ZW4gc2V0IG9mXG4vLyBga2V5OnZhbHVlYCBwYWlycy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1hdGNoZXIoYXR0cnMpIHtcbiAgYXR0cnMgPSBleHRlbmRPd24oe30sIGF0dHJzKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBpc01hdGNoKG9iaiwgYXR0cnMpO1xuICB9O1xufVxuIiwiaW1wb3J0IGlzQXJyYXlMaWtlIGZyb20gJy4vX2lzQXJyYXlMaWtlLmpzJztcbmltcG9ydCB2YWx1ZXMgZnJvbSAnLi92YWx1ZXMuanMnO1xuaW1wb3J0IGNiIGZyb20gJy4vX2NiLmpzJztcbmltcG9ydCBlYWNoIGZyb20gJy4vZWFjaC5qcyc7XG5cbi8vIFJldHVybiB0aGUgbWF4aW11bSBlbGVtZW50IChvciBlbGVtZW50LWJhc2VkIGNvbXB1dGF0aW9uKS5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1heChvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gIHZhciByZXN1bHQgPSAtSW5maW5pdHksIGxhc3RDb21wdXRlZCA9IC1JbmZpbml0eSxcbiAgICAgIHZhbHVlLCBjb21wdXRlZDtcbiAgaWYgKGl0ZXJhdGVlID09IG51bGwgfHwgdHlwZW9mIGl0ZXJhdGVlID09ICdudW1iZXInICYmIHR5cGVvZiBvYmpbMF0gIT0gJ29iamVjdCcgJiYgb2JqICE9IG51bGwpIHtcbiAgICBvYmogPSBpc0FycmF5TGlrZShvYmopID8gb2JqIDogdmFsdWVzKG9iaik7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IG9iai5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFsdWUgPSBvYmpbaV07XG4gICAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSA+IHJlc3VsdCkge1xuICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHYsIGluZGV4LCBsaXN0KSB7XG4gICAgICBjb21wdXRlZCA9IGl0ZXJhdGVlKHYsIGluZGV4LCBsaXN0KTtcbiAgICAgIGlmIChjb21wdXRlZCA+IGxhc3RDb21wdXRlZCB8fCBjb21wdXRlZCA9PT0gLUluZmluaXR5ICYmIHJlc3VsdCA9PT0gLUluZmluaXR5KSB7XG4gICAgICAgIHJlc3VsdCA9IHY7XG4gICAgICAgIGxhc3RDb21wdXRlZCA9IGNvbXB1dGVkO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCJpbXBvcnQgaGFzIGZyb20gJy4vX2hhcy5qcyc7XG5cbi8vIE1lbW9pemUgYW4gZXhwZW5zaXZlIGZ1bmN0aW9uIGJ5IHN0b3JpbmcgaXRzIHJlc3VsdHMuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW1vaXplKGZ1bmMsIGhhc2hlcikge1xuICB2YXIgbWVtb2l6ZSA9IGZ1bmN0aW9uKGtleSkge1xuICAgIHZhciBjYWNoZSA9IG1lbW9pemUuY2FjaGU7XG4gICAgdmFyIGFkZHJlc3MgPSAnJyArIChoYXNoZXIgPyBoYXNoZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSA6IGtleSk7XG4gICAgaWYgKCFoYXMoY2FjaGUsIGFkZHJlc3MpKSBjYWNoZVthZGRyZXNzXSA9IGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICByZXR1cm4gY2FjaGVbYWRkcmVzc107XG4gIH07XG4gIG1lbW9pemUuY2FjaGUgPSB7fTtcbiAgcmV0dXJuIG1lbW9pemU7XG59XG4iLCJpbXBvcnQgaXNBcnJheUxpa2UgZnJvbSAnLi9faXNBcnJheUxpa2UuanMnO1xuaW1wb3J0IHZhbHVlcyBmcm9tICcuL3ZhbHVlcy5qcyc7XG5pbXBvcnQgY2IgZnJvbSAnLi9fY2IuanMnO1xuaW1wb3J0IGVhY2ggZnJvbSAnLi9lYWNoLmpzJztcblxuLy8gUmV0dXJuIHRoZSBtaW5pbXVtIGVsZW1lbnQgKG9yIGVsZW1lbnQtYmFzZWQgY29tcHV0YXRpb24pLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWluKG9iaiwgaXRlcmF0ZWUsIGNvbnRleHQpIHtcbiAgdmFyIHJlc3VsdCA9IEluZmluaXR5LCBsYXN0Q29tcHV0ZWQgPSBJbmZpbml0eSxcbiAgICAgIHZhbHVlLCBjb21wdXRlZDtcbiAgaWYgKGl0ZXJhdGVlID09IG51bGwgfHwgdHlwZW9mIGl0ZXJhdGVlID09ICdudW1iZXInICYmIHR5cGVvZiBvYmpbMF0gIT0gJ29iamVjdCcgJiYgb2JqICE9IG51bGwpIHtcbiAgICBvYmogPSBpc0FycmF5TGlrZShvYmopID8gb2JqIDogdmFsdWVzKG9iaik7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IG9iai5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFsdWUgPSBvYmpbaV07XG4gICAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSA8IHJlc3VsdCkge1xuICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaXRlcmF0ZWUgPSBjYihpdGVyYXRlZSwgY29udGV4dCk7XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHYsIGluZGV4LCBsaXN0KSB7XG4gICAgICBjb21wdXRlZCA9IGl0ZXJhdGVlKHYsIGluZGV4LCBsaXN0KTtcbiAgICAgIGlmIChjb21wdXRlZCA8IGxhc3RDb21wdXRlZCB8fCBjb21wdXRlZCA9PT0gSW5maW5pdHkgJiYgcmVzdWx0ID09PSBJbmZpbml0eSkge1xuICAgICAgICByZXN1bHQgPSB2O1xuICAgICAgICBsYXN0Q29tcHV0ZWQgPSBjb21wdXRlZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuIiwiaW1wb3J0IF8gZnJvbSAnLi91bmRlcnNjb3JlLmpzJztcbmltcG9ydCBlYWNoIGZyb20gJy4vZWFjaC5qcyc7XG5pbXBvcnQgZnVuY3Rpb25zIGZyb20gJy4vZnVuY3Rpb25zLmpzJztcbmltcG9ydCB7IHB1c2ggfSBmcm9tICcuL19zZXR1cC5qcyc7XG5pbXBvcnQgY2hhaW5SZXN1bHQgZnJvbSAnLi9fY2hhaW5SZXN1bHQuanMnO1xuXG4vLyBBZGQgeW91ciBvd24gY3VzdG9tIGZ1bmN0aW9ucyB0byB0aGUgVW5kZXJzY29yZSBvYmplY3QuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXhpbihvYmopIHtcbiAgZWFjaChmdW5jdGlvbnMob2JqKSwgZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBmdW5jID0gX1tuYW1lXSA9IG9ialtuYW1lXTtcbiAgICBfLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGFyZ3MgPSBbdGhpcy5fd3JhcHBlZF07XG4gICAgICBwdXNoLmFwcGx5KGFyZ3MsIGFyZ3VtZW50cyk7XG4gICAgICByZXR1cm4gY2hhaW5SZXN1bHQodGhpcywgZnVuYy5hcHBseShfLCBhcmdzKSk7XG4gICAgfTtcbiAgfSk7XG4gIHJldHVybiBfO1xufVxuIiwiLy8gUmV0dXJucyBhIG5lZ2F0ZWQgdmVyc2lvbiBvZiB0aGUgcGFzc2VkLWluIHByZWRpY2F0ZS5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5lZ2F0ZShwcmVkaWNhdGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAhcHJlZGljYXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59XG4iLCIvLyBQcmVkaWNhdGUtZ2VuZXJhdGluZyBmdW5jdGlvbi4gT2Z0ZW4gdXNlZnVsIG91dHNpZGUgb2YgVW5kZXJzY29yZS5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vb3AoKXt9XG4iLCIvLyBBIChwb3NzaWJseSBmYXN0ZXIpIHdheSB0byBnZXQgdGhlIGN1cnJlbnQgdGltZXN0YW1wIGFzIGFuIGludGVnZXIuXG5leHBvcnQgZGVmYXVsdCBEYXRlLm5vdyB8fCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufTtcbiIsImltcG9ydCBnZXRMZW5ndGggIGZyb20gJy4vX2dldExlbmd0aC5qcyc7XG5cbi8vIENvbnZlcnRzIGxpc3RzIGludG8gb2JqZWN0cy4gUGFzcyBlaXRoZXIgYSBzaW5nbGUgYXJyYXkgb2YgYFtrZXksIHZhbHVlXWBcbi8vIHBhaXJzLCBvciB0d28gcGFyYWxsZWwgYXJyYXlzIG9mIHRoZSBzYW1lIGxlbmd0aCAtLSBvbmUgb2Yga2V5cywgYW5kIG9uZSBvZlxuLy8gdGhlIGNvcnJlc3BvbmRpbmcgdmFsdWVzLiBQYXNzaW5nIGJ5IHBhaXJzIGlzIHRoZSByZXZlcnNlIG9mIGBfLnBhaXJzYC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9iamVjdChsaXN0LCB2YWx1ZXMpIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gZ2V0TGVuZ3RoKGxpc3QpOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodmFsdWVzKSB7XG4gICAgICByZXN1bHRbbGlzdFtpXV0gPSB2YWx1ZXNbaV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtsaXN0W2ldWzBdXSA9IGxpc3RbaV1bMV07XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCJpbXBvcnQgcmVzdEFyZ3VtZW50cyBmcm9tICcuL3Jlc3RBcmd1bWVudHMuanMnO1xuaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnLi9pc0Z1bmN0aW9uLmpzJztcbmltcG9ydCBuZWdhdGUgZnJvbSAnLi9uZWdhdGUuanMnO1xuaW1wb3J0IG1hcCBmcm9tICcuL21hcC5qcyc7XG5pbXBvcnQgZmxhdHRlbiBmcm9tICcuL19mbGF0dGVuLmpzJztcbmltcG9ydCBjb250YWlucyBmcm9tICcuL2NvbnRhaW5zLmpzJztcbmltcG9ydCBwaWNrIGZyb20gJy4vcGljay5qcyc7XG5cbi8vIFJldHVybiBhIGNvcHkgb2YgdGhlIG9iamVjdCB3aXRob3V0IHRoZSBkaXNhbGxvd2VkIHByb3BlcnRpZXMuXG5leHBvcnQgZGVmYXVsdCByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKG9iaiwga2V5cykge1xuICB2YXIgaXRlcmF0ZWUgPSBrZXlzWzBdLCBjb250ZXh0O1xuICBpZiAoaXNGdW5jdGlvbihpdGVyYXRlZSkpIHtcbiAgICBpdGVyYXRlZSA9IG5lZ2F0ZShpdGVyYXRlZSk7XG4gICAgaWYgKGtleXMubGVuZ3RoID4gMSkgY29udGV4dCA9IGtleXNbMV07XG4gIH0gZWxzZSB7XG4gICAga2V5cyA9IG1hcChmbGF0dGVuKGtleXMsIGZhbHNlLCBmYWxzZSksIFN0cmluZyk7XG4gICAgaXRlcmF0ZWUgPSBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgICByZXR1cm4gIWNvbnRhaW5zKGtleXMsIGtleSk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gcGljayhvYmosIGl0ZXJhdGVlLCBjb250ZXh0KTtcbn0pO1xuIiwiaW1wb3J0IHBhcnRpYWwgZnJvbSAnLi9wYXJ0aWFsLmpzJztcbmltcG9ydCBiZWZvcmUgZnJvbSAnLi9iZWZvcmUuanMnO1xuXG4vLyBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIGF0IG1vc3Qgb25lIHRpbWUsIG5vIG1hdHRlciBob3dcbi8vIG9mdGVuIHlvdSBjYWxsIGl0LiBVc2VmdWwgZm9yIGxhenkgaW5pdGlhbGl6YXRpb24uXG5leHBvcnQgZGVmYXVsdCBwYXJ0aWFsKGJlZm9yZSwgMik7XG4iLCJpbXBvcnQga2V5cyBmcm9tICcuL2tleXMuanMnO1xuXG4vLyBDb252ZXJ0IGFuIG9iamVjdCBpbnRvIGEgbGlzdCBvZiBgW2tleSwgdmFsdWVdYCBwYWlycy5cbi8vIFRoZSBvcHBvc2l0ZSBvZiBgXy5vYmplY3RgIHdpdGggb25lIGFyZ3VtZW50LlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFpcnMob2JqKSB7XG4gIHZhciBfa2V5cyA9IGtleXMob2JqKTtcbiAgdmFyIGxlbmd0aCA9IF9rZXlzLmxlbmd0aDtcbiAgdmFyIHBhaXJzID0gQXJyYXkobGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHBhaXJzW2ldID0gW19rZXlzW2ldLCBvYmpbX2tleXNbaV1dXTtcbiAgfVxuICByZXR1cm4gcGFpcnM7XG59XG4iLCJpbXBvcnQgcmVzdEFyZ3VtZW50cyBmcm9tICcuL3Jlc3RBcmd1bWVudHMuanMnO1xuaW1wb3J0IGV4ZWN1dGVCb3VuZCBmcm9tICcuL19leGVjdXRlQm91bmQuanMnO1xuaW1wb3J0IF8gZnJvbSAnLi91bmRlcnNjb3JlLmpzJztcblxuLy8gUGFydGlhbGx5IGFwcGx5IGEgZnVuY3Rpb24gYnkgY3JlYXRpbmcgYSB2ZXJzaW9uIHRoYXQgaGFzIGhhZCBzb21lIG9mIGl0c1xuLy8gYXJndW1lbnRzIHByZS1maWxsZWQsIHdpdGhvdXQgY2hhbmdpbmcgaXRzIGR5bmFtaWMgYHRoaXNgIGNvbnRleHQuIGBfYCBhY3RzXG4vLyBhcyBhIHBsYWNlaG9sZGVyIGJ5IGRlZmF1bHQsIGFsbG93aW5nIGFueSBjb21iaW5hdGlvbiBvZiBhcmd1bWVudHMgdG8gYmVcbi8vIHByZS1maWxsZWQuIFNldCBgXy5wYXJ0aWFsLnBsYWNlaG9sZGVyYCBmb3IgYSBjdXN0b20gcGxhY2Vob2xkZXIgYXJndW1lbnQuXG52YXIgcGFydGlhbCA9IHJlc3RBcmd1bWVudHMoZnVuY3Rpb24oZnVuYywgYm91bmRBcmdzKSB7XG4gIHZhciBwbGFjZWhvbGRlciA9IHBhcnRpYWwucGxhY2Vob2xkZXI7XG4gIHZhciBib3VuZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBwb3NpdGlvbiA9IDAsIGxlbmd0aCA9IGJvdW5kQXJncy5sZW5ndGg7XG4gICAgdmFyIGFyZ3MgPSBBcnJheShsZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBib3VuZEFyZ3NbaV0gPT09IHBsYWNlaG9sZGVyID8gYXJndW1lbnRzW3Bvc2l0aW9uKytdIDogYm91bmRBcmdzW2ldO1xuICAgIH1cbiAgICB3aGlsZSAocG9zaXRpb24gPCBhcmd1bWVudHMubGVuZ3RoKSBhcmdzLnB1c2goYXJndW1lbnRzW3Bvc2l0aW9uKytdKTtcbiAgICByZXR1cm4gZXhlY3V0ZUJvdW5kKGZ1bmMsIGJvdW5kLCB0aGlzLCB0aGlzLCBhcmdzKTtcbiAgfTtcbiAgcmV0dXJuIGJvdW5kO1xufSk7XG5cbnBhcnRpYWwucGxhY2Vob2xkZXIgPSBfO1xuZXhwb3J0IGRlZmF1bHQgcGFydGlhbDtcbiIsImltcG9ydCBncm91cCBmcm9tICcuL19ncm91cC5qcyc7XG5cbi8vIFNwbGl0IGEgY29sbGVjdGlvbiBpbnRvIHR3byBhcnJheXM6IG9uZSB3aG9zZSBlbGVtZW50cyBhbGwgcGFzcyB0aGUgZ2l2ZW5cbi8vIHRydXRoIHRlc3QsIGFuZCBvbmUgd2hvc2UgZWxlbWVudHMgYWxsIGRvIG5vdCBwYXNzIHRoZSB0cnV0aCB0ZXN0LlxuZXhwb3J0IGRlZmF1bHQgZ3JvdXAoZnVuY3Rpb24ocmVzdWx0LCB2YWx1ZSwgcGFzcykge1xuICByZXN1bHRbcGFzcyA/IDAgOiAxXS5wdXNoKHZhbHVlKTtcbn0sIHRydWUpO1xuIiwiaW1wb3J0IHJlc3RBcmd1bWVudHMgZnJvbSAnLi9yZXN0QXJndW1lbnRzLmpzJztcbmltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJy4vaXNGdW5jdGlvbi5qcyc7XG5pbXBvcnQgb3B0aW1pemVDYiBmcm9tICcuL19vcHRpbWl6ZUNiLmpzJztcbmltcG9ydCBhbGxLZXlzIGZyb20gJy4vYWxsS2V5cy5qcyc7XG5pbXBvcnQga2V5SW5PYmogZnJvbSAnLi9fa2V5SW5PYmouanMnO1xuaW1wb3J0IGZsYXR0ZW4gZnJvbSAnLi9fZmxhdHRlbi5qcyc7XG5cbi8vIFJldHVybiBhIGNvcHkgb2YgdGhlIG9iamVjdCBvbmx5IGNvbnRhaW5pbmcgdGhlIGFsbG93ZWQgcHJvcGVydGllcy5cbmV4cG9ydCBkZWZhdWx0IHJlc3RBcmd1bWVudHMoZnVuY3Rpb24ob2JqLCBrZXlzKSB7XG4gIHZhciByZXN1bHQgPSB7fSwgaXRlcmF0ZWUgPSBrZXlzWzBdO1xuICBpZiAob2JqID09IG51bGwpIHJldHVybiByZXN1bHQ7XG4gIGlmIChpc0Z1bmN0aW9uKGl0ZXJhdGVlKSkge1xuICAgIGlmIChrZXlzLmxlbmd0aCA+IDEpIGl0ZXJhdGVlID0gb3B0aW1pemVDYihpdGVyYXRlZSwga2V5c1sxXSk7XG4gICAga2V5cyA9IGFsbEtleXMob2JqKTtcbiAgfSBlbHNlIHtcbiAgICBpdGVyYXRlZSA9IGtleUluT2JqO1xuICAgIGtleXMgPSBmbGF0dGVuKGtleXMsIGZhbHNlLCBmYWxzZSk7XG4gICAgb2JqID0gT2JqZWN0KG9iaik7XG4gIH1cbiAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGtleXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICB2YXIgdmFsdWUgPSBvYmpba2V5XTtcbiAgICBpZiAoaXRlcmF0ZWUodmFsdWUsIGtleSwgb2JqKSkgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufSk7XG4iLCJpbXBvcnQgbWFwIGZyb20gJy4vbWFwLmpzJztcbmltcG9ydCBwcm9wZXJ0eSBmcm9tICcuL3Byb3BlcnR5LmpzJztcblxuLy8gQ29udmVuaWVuY2UgdmVyc2lvbiBvZiBhIGNvbW1vbiB1c2UgY2FzZSBvZiBgXy5tYXBgOiBmZXRjaGluZyBhIHByb3BlcnR5LlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGx1Y2sob2JqLCBrZXkpIHtcbiAgcmV0dXJuIG1hcChvYmosIHByb3BlcnR5KGtleSkpO1xufVxuIiwiaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi9pc0FycmF5LmpzJztcbmltcG9ydCBzaGFsbG93UHJvcGVydHkgZnJvbSAnLi9fc2hhbGxvd1Byb3BlcnR5LmpzJztcbmltcG9ydCBkZWVwR2V0IGZyb20gJy4vX2RlZXBHZXQuanMnO1xuXG4vLyBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBwYXNzZWQgYW4gb2JqZWN0LCB3aWxsIHRyYXZlcnNlIHRoYXQgb2JqZWN04oCZc1xuLy8gcHJvcGVydGllcyBkb3duIHRoZSBnaXZlbiBgcGF0aGAsIHNwZWNpZmllZCBhcyBhbiBhcnJheSBvZiBrZXlzIG9yIGluZGljZXMuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9wZXJ0eShwYXRoKSB7XG4gIGlmICghaXNBcnJheShwYXRoKSkge1xuICAgIHJldHVybiBzaGFsbG93UHJvcGVydHkocGF0aCk7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBkZWVwR2V0KG9iaiwgcGF0aCk7XG4gIH07XG59XG4iLCJpbXBvcnQgaXNBcnJheSBmcm9tICcuL2lzQXJyYXkuanMnO1xuaW1wb3J0IGRlZXBHZXQgZnJvbSAnLi9fZGVlcEdldC5qcyc7XG5cbi8vIEdlbmVyYXRlcyBhIGZ1bmN0aW9uIGZvciBhIGdpdmVuIG9iamVjdCB0aGF0IHJldHVybnMgYSBnaXZlbiBwcm9wZXJ0eS5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb3BlcnR5T2Yob2JqKSB7XG4gIGlmIChvYmogPT0gbnVsbCkge1xuICAgIHJldHVybiBmdW5jdGlvbigpe307XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKHBhdGgpIHtcbiAgICByZXR1cm4gIWlzQXJyYXkocGF0aCkgPyBvYmpbcGF0aF0gOiBkZWVwR2V0KG9iaiwgcGF0aCk7XG4gIH07XG59XG4iLCIvLyBSZXR1cm4gYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIGBtaW5gIGFuZCBgbWF4YCAoaW5jbHVzaXZlKS5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJhbmRvbShtaW4sIG1heCkge1xuICBpZiAobWF4ID09IG51bGwpIHtcbiAgICBtYXggPSBtaW47XG4gICAgbWluID0gMDtcbiAgfVxuICByZXR1cm4gbWluICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKTtcbn1cbiIsIi8vIEdlbmVyYXRlIGFuIGludGVnZXIgQXJyYXkgY29udGFpbmluZyBhbiBhcml0aG1ldGljIHByb2dyZXNzaW9uLiBBIHBvcnQgb2Zcbi8vIHRoZSBuYXRpdmUgUHl0aG9uIGByYW5nZSgpYCBmdW5jdGlvbi4gU2VlXG4vLyBbdGhlIFB5dGhvbiBkb2N1bWVudGF0aW9uXShodHRwczovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L2Z1bmN0aW9ucy5odG1sI3JhbmdlKS5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gIGlmIChzdG9wID09IG51bGwpIHtcbiAgICBzdG9wID0gc3RhcnQgfHwgMDtcbiAgICBzdGFydCA9IDA7XG4gIH1cbiAgaWYgKCFzdGVwKSB7XG4gICAgc3RlcCA9IHN0b3AgPCBzdGFydCA/IC0xIDogMTtcbiAgfVxuXG4gIHZhciBsZW5ndGggPSBNYXRoLm1heChNYXRoLmNlaWwoKHN0b3AgLSBzdGFydCkgLyBzdGVwKSwgMCk7XG4gIHZhciByYW5nZSA9IEFycmF5KGxlbmd0aCk7XG5cbiAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgbGVuZ3RoOyBpZHgrKywgc3RhcnQgKz0gc3RlcCkge1xuICAgIHJhbmdlW2lkeF0gPSBzdGFydDtcbiAgfVxuXG4gIHJldHVybiByYW5nZTtcbn1cbiIsImltcG9ydCBjcmVhdGVSZWR1Y2UgZnJvbSAnLi9fY3JlYXRlUmVkdWNlLmpzJztcblxuLy8gKipSZWR1Y2UqKiBidWlsZHMgdXAgYSBzaW5nbGUgcmVzdWx0IGZyb20gYSBsaXN0IG9mIHZhbHVlcywgYWthIGBpbmplY3RgLFxuLy8gb3IgYGZvbGRsYC5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJlZHVjZSgxKTtcbiIsImltcG9ydCBjcmVhdGVSZWR1Y2UgZnJvbSAnLi9fY3JlYXRlUmVkdWNlLmpzJztcblxuLy8gVGhlIHJpZ2h0LWFzc29jaWF0aXZlIHZlcnNpb24gb2YgcmVkdWNlLCBhbHNvIGtub3duIGFzIGBmb2xkcmAuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWR1Y2UoLTEpO1xuIiwiaW1wb3J0IGZpbHRlciBmcm9tICcuL2ZpbHRlci5qcyc7XG5pbXBvcnQgbmVnYXRlIGZyb20gJy4vbmVnYXRlLmpzJztcbmltcG9ydCBjYiBmcm9tICcuL19jYi5qcyc7XG5cbi8vIFJldHVybiBhbGwgdGhlIGVsZW1lbnRzIGZvciB3aGljaCBhIHRydXRoIHRlc3QgZmFpbHMuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWplY3Qob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgcmV0dXJuIGZpbHRlcihvYmosIG5lZ2F0ZShjYihwcmVkaWNhdGUpKSwgY29udGV4dCk7XG59XG4iLCJpbXBvcnQgeyBzbGljZSB9IGZyb20gJy4vX3NldHVwLmpzJztcblxuLy8gUmV0dXJucyBldmVyeXRoaW5nIGJ1dCB0aGUgZmlyc3QgZW50cnkgb2YgdGhlIGBhcnJheWAuIEVzcGVjaWFsbHkgdXNlZnVsIG9uXG4vLyB0aGUgYGFyZ3VtZW50c2Agb2JqZWN0LiBQYXNzaW5nIGFuICoqbioqIHdpbGwgcmV0dXJuIHRoZSByZXN0IE4gdmFsdWVzIGluIHRoZVxuLy8gYGFycmF5YC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc3QoYXJyYXksIG4sIGd1YXJkKSB7XG4gIHJldHVybiBzbGljZS5jYWxsKGFycmF5LCBuID09IG51bGwgfHwgZ3VhcmQgPyAxIDogbik7XG59XG4iLCIvLyBTb21lIGZ1bmN0aW9ucyB0YWtlIGEgdmFyaWFibGUgbnVtYmVyIG9mIGFyZ3VtZW50cywgb3IgYSBmZXcgZXhwZWN0ZWRcbi8vIGFyZ3VtZW50cyBhdCB0aGUgYmVnaW5uaW5nIGFuZCB0aGVuIGEgdmFyaWFibGUgbnVtYmVyIG9mIHZhbHVlcyB0byBvcGVyYXRlXG4vLyBvbi4gVGhpcyBoZWxwZXIgYWNjdW11bGF0ZXMgYWxsIHJlbWFpbmluZyBhcmd1bWVudHMgcGFzdCB0aGUgZnVuY3Rpb27igJlzXG4vLyBhcmd1bWVudCBsZW5ndGggKG9yIGFuIGV4cGxpY2l0IGBzdGFydEluZGV4YCksIGludG8gYW4gYXJyYXkgdGhhdCBiZWNvbWVzXG4vLyB0aGUgbGFzdCBhcmd1bWVudC4gU2ltaWxhciB0byBFUzbigJlzIFwicmVzdCBwYXJhbWV0ZXJcIi5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc3RBcmd1bWVudHMoZnVuYywgc3RhcnRJbmRleCkge1xuICBzdGFydEluZGV4ID0gc3RhcnRJbmRleCA9PSBudWxsID8gZnVuYy5sZW5ndGggLSAxIDogK3N0YXJ0SW5kZXg7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgbGVuZ3RoID0gTWF0aC5tYXgoYXJndW1lbnRzLmxlbmd0aCAtIHN0YXJ0SW5kZXgsIDApLFxuICAgICAgICByZXN0ID0gQXJyYXkobGVuZ3RoKSxcbiAgICAgICAgaW5kZXggPSAwO1xuICAgIGZvciAoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgcmVzdFtpbmRleF0gPSBhcmd1bWVudHNbaW5kZXggKyBzdGFydEluZGV4XTtcbiAgICB9XG4gICAgc3dpdGNoIChzdGFydEluZGV4KSB7XG4gICAgICBjYXNlIDA6IHJldHVybiBmdW5jLmNhbGwodGhpcywgcmVzdCk7XG4gICAgICBjYXNlIDE6IHJldHVybiBmdW5jLmNhbGwodGhpcywgYXJndW1lbnRzWzBdLCByZXN0KTtcbiAgICAgIGNhc2UgMjogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCBhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSwgcmVzdCk7XG4gICAgfVxuICAgIHZhciBhcmdzID0gQXJyYXkoc3RhcnRJbmRleCArIDEpO1xuICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IHN0YXJ0SW5kZXg7IGluZGV4KyspIHtcbiAgICAgIGFyZ3NbaW5kZXhdID0gYXJndW1lbnRzW2luZGV4XTtcbiAgICB9XG4gICAgYXJnc1tzdGFydEluZGV4XSA9IHJlc3Q7XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG59XG4iLCJpbXBvcnQgaXNBcnJheSBmcm9tICcuL2lzQXJyYXkuanMnO1xuaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnLi9pc0Z1bmN0aW9uLmpzJztcblxuLy8gVHJhdmVyc2VzIHRoZSBjaGlsZHJlbiBvZiBgb2JqYCBhbG9uZyBgcGF0aGAuIElmIGEgY2hpbGQgaXMgYSBmdW5jdGlvbiwgaXRcbi8vIGlzIGludm9rZWQgd2l0aCBpdHMgcGFyZW50IGFzIGNvbnRleHQuIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBmaW5hbFxuLy8gY2hpbGQsIG9yIGBmYWxsYmFja2AgaWYgYW55IGNoaWxkIGlzIHVuZGVmaW5lZC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc3VsdChvYmosIHBhdGgsIGZhbGxiYWNrKSB7XG4gIGlmICghaXNBcnJheShwYXRoKSkgcGF0aCA9IFtwYXRoXTtcbiAgdmFyIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuICBpZiAoIWxlbmd0aCkge1xuICAgIHJldHVybiBpc0Z1bmN0aW9uKGZhbGxiYWNrKSA/IGZhbGxiYWNrLmNhbGwob2JqKSA6IGZhbGxiYWNrO1xuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcHJvcCA9IG9iaiA9PSBudWxsID8gdm9pZCAwIDogb2JqW3BhdGhbaV1dO1xuICAgIGlmIChwcm9wID09PSB2b2lkIDApIHtcbiAgICAgIHByb3AgPSBmYWxsYmFjaztcbiAgICAgIGkgPSBsZW5ndGg7IC8vIEVuc3VyZSB3ZSBkb24ndCBjb250aW51ZSBpdGVyYXRpbmcuXG4gICAgfVxuICAgIG9iaiA9IGlzRnVuY3Rpb24ocHJvcCkgPyBwcm9wLmNhbGwob2JqKSA6IHByb3A7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cbiIsImltcG9ydCBpc0FycmF5TGlrZSBmcm9tICcuL19pc0FycmF5TGlrZS5qcyc7XG5pbXBvcnQgY2xvbmUgZnJvbSAnLi9jbG9uZS5qcyc7XG5pbXBvcnQgdmFsdWVzIGZyb20gJy4vdmFsdWVzLmpzJztcbmltcG9ydCBnZXRMZW5ndGggZnJvbSAnLi9fZ2V0TGVuZ3RoLmpzJztcbmltcG9ydCByYW5kb20gZnJvbSAnLi9yYW5kb20uanMnO1xuXG4vLyBTYW1wbGUgKipuKiogcmFuZG9tIHZhbHVlcyBmcm9tIGEgY29sbGVjdGlvbiB1c2luZyB0aGUgbW9kZXJuIHZlcnNpb24gb2YgdGhlXG4vLyBbRmlzaGVyLVlhdGVzIHNodWZmbGVdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Zpc2hlcuKAk1lhdGVzX3NodWZmbGUpLlxuLy8gSWYgKipuKiogaXMgbm90IHNwZWNpZmllZCwgcmV0dXJucyBhIHNpbmdsZSByYW5kb20gZWxlbWVudC5cbi8vIFRoZSBpbnRlcm5hbCBgZ3VhcmRgIGFyZ3VtZW50IGFsbG93cyBpdCB0byB3b3JrIHdpdGggYF8ubWFwYC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNhbXBsZShvYmosIG4sIGd1YXJkKSB7XG4gIGlmIChuID09IG51bGwgfHwgZ3VhcmQpIHtcbiAgICBpZiAoIWlzQXJyYXlMaWtlKG9iaikpIG9iaiA9IHZhbHVlcyhvYmopO1xuICAgIHJldHVybiBvYmpbcmFuZG9tKG9iai5sZW5ndGggLSAxKV07XG4gIH1cbiAgdmFyIHNhbXBsZSA9IGlzQXJyYXlMaWtlKG9iaikgPyBjbG9uZShvYmopIDogdmFsdWVzKG9iaik7XG4gIHZhciBsZW5ndGggPSBnZXRMZW5ndGgoc2FtcGxlKTtcbiAgbiA9IE1hdGgubWF4KE1hdGgubWluKG4sIGxlbmd0aCksIDApO1xuICB2YXIgbGFzdCA9IGxlbmd0aCAtIDE7XG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBuOyBpbmRleCsrKSB7XG4gICAgdmFyIHJhbmQgPSByYW5kb20oaW5kZXgsIGxhc3QpO1xuICAgIHZhciB0ZW1wID0gc2FtcGxlW2luZGV4XTtcbiAgICBzYW1wbGVbaW5kZXhdID0gc2FtcGxlW3JhbmRdO1xuICAgIHNhbXBsZVtyYW5kXSA9IHRlbXA7XG4gIH1cbiAgcmV0dXJuIHNhbXBsZS5zbGljZSgwLCBuKTtcbn1cbiIsImltcG9ydCBzYW1wbGUgZnJvbSAnLi9zYW1wbGUuanMnO1xuXG4vLyBTaHVmZmxlIGEgY29sbGVjdGlvbi5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNodWZmbGUob2JqKSB7XG4gIHJldHVybiBzYW1wbGUob2JqLCBJbmZpbml0eSk7XG59XG4iLCJpbXBvcnQgaXNBcnJheUxpa2UgZnJvbSAnLi9faXNBcnJheUxpa2UuanMnO1xuaW1wb3J0IGtleXMgZnJvbSAnLi9rZXlzLmpzJztcblxuLy8gUmV0dXJuIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gYSBjb2xsZWN0aW9uLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2l6ZShvYmopIHtcbiAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gMDtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iaikgPyBvYmoubGVuZ3RoIDoga2V5cyhvYmopLmxlbmd0aDtcbn1cbiIsImltcG9ydCBjYiBmcm9tICcuL19jYi5qcyc7XG5pbXBvcnQgaXNBcnJheUxpa2UgZnJvbSAnLi9faXNBcnJheUxpa2UuanMnO1xuaW1wb3J0IGtleXMgZnJvbSAnLi9rZXlzLmpzJztcblxuLy8gRGV0ZXJtaW5lIGlmIGF0IGxlYXN0IG9uZSBlbGVtZW50IGluIHRoZSBvYmplY3QgcGFzc2VzIGEgdHJ1dGggdGVzdC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNvbWUob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgcHJlZGljYXRlID0gY2IocHJlZGljYXRlLCBjb250ZXh0KTtcbiAgdmFyIF9rZXlzID0gIWlzQXJyYXlMaWtlKG9iaikgJiYga2V5cyhvYmopLFxuICAgICAgbGVuZ3RoID0gKF9rZXlzIHx8IG9iaikubGVuZ3RoO1xuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgdmFyIGN1cnJlbnRLZXkgPSBfa2V5cyA/IF9rZXlzW2luZGV4XSA6IGluZGV4O1xuICAgIGlmIChwcmVkaWNhdGUob2JqW2N1cnJlbnRLZXldLCBjdXJyZW50S2V5LCBvYmopKSByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgY2IgZnJvbSAnLi9fY2IuanMnO1xuaW1wb3J0IHBsdWNrIGZyb20gJy4vcGx1Y2suanMnO1xuaW1wb3J0IG1hcCBmcm9tICcuL21hcC5qcyc7XG5cbi8vIFNvcnQgdGhlIG9iamVjdCdzIHZhbHVlcyBieSBhIGNyaXRlcmlvbiBwcm9kdWNlZCBieSBhbiBpdGVyYXRlZS5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNvcnRCeShvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gIHZhciBpbmRleCA9IDA7XG4gIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQpO1xuICByZXR1cm4gcGx1Y2sobWFwKG9iaiwgZnVuY3Rpb24odmFsdWUsIGtleSwgbGlzdCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBpbmRleDogaW5kZXgrKyxcbiAgICAgIGNyaXRlcmlhOiBpdGVyYXRlZSh2YWx1ZSwga2V5LCBsaXN0KVxuICAgIH07XG4gIH0pLnNvcnQoZnVuY3Rpb24obGVmdCwgcmlnaHQpIHtcbiAgICB2YXIgYSA9IGxlZnQuY3JpdGVyaWE7XG4gICAgdmFyIGIgPSByaWdodC5jcml0ZXJpYTtcbiAgICBpZiAoYSAhPT0gYikge1xuICAgICAgaWYgKGEgPiBiIHx8IGEgPT09IHZvaWQgMCkgcmV0dXJuIDE7XG4gICAgICBpZiAoYSA8IGIgfHwgYiA9PT0gdm9pZCAwKSByZXR1cm4gLTE7XG4gICAgfVxuICAgIHJldHVybiBsZWZ0LmluZGV4IC0gcmlnaHQuaW5kZXg7XG4gIH0pLCAndmFsdWUnKTtcbn1cbiIsImltcG9ydCBjYiBmcm9tICcuL19jYi5qcyc7XG5pbXBvcnQgZ2V0TGVuZ3RoIGZyb20gJy4vX2dldExlbmd0aC5qcyc7XG5cbi8vIFVzZSBhIGNvbXBhcmF0b3IgZnVuY3Rpb24gdG8gZmlndXJlIG91dCB0aGUgc21hbGxlc3QgaW5kZXggYXQgd2hpY2hcbi8vIGFuIG9iamVjdCBzaG91bGQgYmUgaW5zZXJ0ZWQgc28gYXMgdG8gbWFpbnRhaW4gb3JkZXIuIFVzZXMgYmluYXJ5IHNlYXJjaC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNvcnRlZEluZGV4KGFycmF5LCBvYmosIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gIGl0ZXJhdGVlID0gY2IoaXRlcmF0ZWUsIGNvbnRleHQsIDEpO1xuICB2YXIgdmFsdWUgPSBpdGVyYXRlZShvYmopO1xuICB2YXIgbG93ID0gMCwgaGlnaCA9IGdldExlbmd0aChhcnJheSk7XG4gIHdoaWxlIChsb3cgPCBoaWdoKSB7XG4gICAgdmFyIG1pZCA9IE1hdGguZmxvb3IoKGxvdyArIGhpZ2gpIC8gMik7XG4gICAgaWYgKGl0ZXJhdGVlKGFycmF5W21pZF0pIDwgdmFsdWUpIGxvdyA9IG1pZCArIDE7IGVsc2UgaGlnaCA9IG1pZDtcbiAgfVxuICByZXR1cm4gbG93O1xufVxuIiwiLy8gSW52b2tlcyBgaW50ZXJjZXB0b3JgIHdpdGggdGhlIGBvYmpgIGFuZCB0aGVuIHJldHVybnMgYG9iamAuXG4vLyBUaGUgcHJpbWFyeSBwdXJwb3NlIG9mIHRoaXMgbWV0aG9kIGlzIHRvIFwidGFwIGludG9cIiBhIG1ldGhvZCBjaGFpbiwgaW5cbi8vIG9yZGVyIHRvIHBlcmZvcm0gb3BlcmF0aW9ucyBvbiBpbnRlcm1lZGlhdGUgcmVzdWx0cyB3aXRoaW4gdGhlIGNoYWluLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFwKG9iaiwgaW50ZXJjZXB0b3IpIHtcbiAgaW50ZXJjZXB0b3Iob2JqKTtcbiAgcmV0dXJuIG9iajtcbn1cbiIsImltcG9ydCBkZWZhdWx0cyBmcm9tICcuL2RlZmF1bHRzLmpzJztcbmltcG9ydCBfIGZyb20gJy4vdW5kZXJzY29yZS5qcyc7XG5pbXBvcnQgJy4vdGVtcGxhdGVTZXR0aW5ncy5qcyc7XG5cbi8vIFdoZW4gY3VzdG9taXppbmcgYF8udGVtcGxhdGVTZXR0aW5nc2AsIGlmIHlvdSBkb24ndCB3YW50IHRvIGRlZmluZSBhblxuLy8gaW50ZXJwb2xhdGlvbiwgZXZhbHVhdGlvbiBvciBlc2NhcGluZyByZWdleCwgd2UgbmVlZCBvbmUgdGhhdCBpc1xuLy8gZ3VhcmFudGVlZCBub3QgdG8gbWF0Y2guXG52YXIgbm9NYXRjaCA9IC8oLileLztcblxuLy8gQ2VydGFpbiBjaGFyYWN0ZXJzIG5lZWQgdG8gYmUgZXNjYXBlZCBzbyB0aGF0IHRoZXkgY2FuIGJlIHB1dCBpbnRvIGFcbi8vIHN0cmluZyBsaXRlcmFsLlxudmFyIGVzY2FwZXMgPSB7XG4gIFwiJ1wiOiBcIidcIixcbiAgJ1xcXFwnOiAnXFxcXCcsXG4gICdcXHInOiAncicsXG4gICdcXG4nOiAnbicsXG4gICdcXHUyMDI4JzogJ3UyMDI4JyxcbiAgJ1xcdTIwMjknOiAndTIwMjknXG59O1xuXG52YXIgZXNjYXBlUmVnRXhwID0gL1xcXFx8J3xcXHJ8XFxufFxcdTIwMjh8XFx1MjAyOS9nO1xuXG5mdW5jdGlvbiBlc2NhcGVDaGFyKG1hdGNoKSB7XG4gIHJldHVybiAnXFxcXCcgKyBlc2NhcGVzW21hdGNoXTtcbn1cblxuLy8gSmF2YVNjcmlwdCBtaWNyby10ZW1wbGF0aW5nLCBzaW1pbGFyIHRvIEpvaG4gUmVzaWcncyBpbXBsZW1lbnRhdGlvbi5cbi8vIFVuZGVyc2NvcmUgdGVtcGxhdGluZyBoYW5kbGVzIGFyYml0cmFyeSBkZWxpbWl0ZXJzLCBwcmVzZXJ2ZXMgd2hpdGVzcGFjZSxcbi8vIGFuZCBjb3JyZWN0bHkgZXNjYXBlcyBxdW90ZXMgd2l0aGluIGludGVycG9sYXRlZCBjb2RlLlxuLy8gTkI6IGBvbGRTZXR0aW5nc2Agb25seSBleGlzdHMgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGVtcGxhdGUodGV4dCwgc2V0dGluZ3MsIG9sZFNldHRpbmdzKSB7XG4gIGlmICghc2V0dGluZ3MgJiYgb2xkU2V0dGluZ3MpIHNldHRpbmdzID0gb2xkU2V0dGluZ3M7XG4gIHNldHRpbmdzID0gZGVmYXVsdHMoe30sIHNldHRpbmdzLCBfLnRlbXBsYXRlU2V0dGluZ3MpO1xuXG4gIC8vIENvbWJpbmUgZGVsaW1pdGVycyBpbnRvIG9uZSByZWd1bGFyIGV4cHJlc3Npb24gdmlhIGFsdGVybmF0aW9uLlxuICB2YXIgbWF0Y2hlciA9IFJlZ0V4cChbXG4gICAgKHNldHRpbmdzLmVzY2FwZSB8fCBub01hdGNoKS5zb3VyY2UsXG4gICAgKHNldHRpbmdzLmludGVycG9sYXRlIHx8IG5vTWF0Y2gpLnNvdXJjZSxcbiAgICAoc2V0dGluZ3MuZXZhbHVhdGUgfHwgbm9NYXRjaCkuc291cmNlXG4gIF0uam9pbignfCcpICsgJ3wkJywgJ2cnKTtcblxuICAvLyBDb21waWxlIHRoZSB0ZW1wbGF0ZSBzb3VyY2UsIGVzY2FwaW5nIHN0cmluZyBsaXRlcmFscyBhcHByb3ByaWF0ZWx5LlxuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgc291cmNlID0gXCJfX3ArPSdcIjtcbiAgdGV4dC5yZXBsYWNlKG1hdGNoZXIsIGZ1bmN0aW9uKG1hdGNoLCBlc2NhcGUsIGludGVycG9sYXRlLCBldmFsdWF0ZSwgb2Zmc2V0KSB7XG4gICAgc291cmNlICs9IHRleHQuc2xpY2UoaW5kZXgsIG9mZnNldCkucmVwbGFjZShlc2NhcGVSZWdFeHAsIGVzY2FwZUNoYXIpO1xuICAgIGluZGV4ID0gb2Zmc2V0ICsgbWF0Y2gubGVuZ3RoO1xuXG4gICAgaWYgKGVzY2FwZSkge1xuICAgICAgc291cmNlICs9IFwiJytcXG4oKF9fdD0oXCIgKyBlc2NhcGUgKyBcIikpPT1udWxsPycnOl8uZXNjYXBlKF9fdCkpK1xcbidcIjtcbiAgICB9IGVsc2UgaWYgKGludGVycG9sYXRlKSB7XG4gICAgICBzb3VyY2UgKz0gXCInK1xcbigoX190PShcIiArIGludGVycG9sYXRlICsgXCIpKT09bnVsbD8nJzpfX3QpK1xcbidcIjtcbiAgICB9IGVsc2UgaWYgKGV2YWx1YXRlKSB7XG4gICAgICBzb3VyY2UgKz0gXCInO1xcblwiICsgZXZhbHVhdGUgKyBcIlxcbl9fcCs9J1wiO1xuICAgIH1cblxuICAgIC8vIEFkb2JlIFZNcyBuZWVkIHRoZSBtYXRjaCByZXR1cm5lZCB0byBwcm9kdWNlIHRoZSBjb3JyZWN0IG9mZnNldC5cbiAgICByZXR1cm4gbWF0Y2g7XG4gIH0pO1xuICBzb3VyY2UgKz0gXCInO1xcblwiO1xuXG4gIC8vIElmIGEgdmFyaWFibGUgaXMgbm90IHNwZWNpZmllZCwgcGxhY2UgZGF0YSB2YWx1ZXMgaW4gbG9jYWwgc2NvcGUuXG4gIGlmICghc2V0dGluZ3MudmFyaWFibGUpIHNvdXJjZSA9ICd3aXRoKG9ianx8e30pe1xcbicgKyBzb3VyY2UgKyAnfVxcbic7XG5cbiAgc291cmNlID0gXCJ2YXIgX190LF9fcD0nJyxfX2o9QXJyYXkucHJvdG90eXBlLmpvaW4sXCIgK1xuICAgIFwicHJpbnQ9ZnVuY3Rpb24oKXtfX3ArPV9fai5jYWxsKGFyZ3VtZW50cywnJyk7fTtcXG5cIiArXG4gICAgc291cmNlICsgJ3JldHVybiBfX3A7XFxuJztcblxuICB2YXIgcmVuZGVyO1xuICB0cnkge1xuICAgIHJlbmRlciA9IG5ldyBGdW5jdGlvbihzZXR0aW5ncy52YXJpYWJsZSB8fCAnb2JqJywgJ18nLCBzb3VyY2UpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgZS5zb3VyY2UgPSBzb3VyY2U7XG4gICAgdGhyb3cgZTtcbiAgfVxuXG4gIHZhciB0ZW1wbGF0ZSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICByZXR1cm4gcmVuZGVyLmNhbGwodGhpcywgZGF0YSwgXyk7XG4gIH07XG5cbiAgLy8gUHJvdmlkZSB0aGUgY29tcGlsZWQgc291cmNlIGFzIGEgY29udmVuaWVuY2UgZm9yIHByZWNvbXBpbGF0aW9uLlxuICB2YXIgYXJndW1lbnQgPSBzZXR0aW5ncy52YXJpYWJsZSB8fCAnb2JqJztcbiAgdGVtcGxhdGUuc291cmNlID0gJ2Z1bmN0aW9uKCcgKyBhcmd1bWVudCArICcpe1xcbicgKyBzb3VyY2UgKyAnfSc7XG5cbiAgcmV0dXJuIHRlbXBsYXRlO1xufVxuIiwiaW1wb3J0IF8gZnJvbSAnLi91bmRlcnNjb3JlLmpzJztcblxuLy8gQnkgZGVmYXVsdCwgVW5kZXJzY29yZSB1c2VzIEVSQi1zdHlsZSB0ZW1wbGF0ZSBkZWxpbWl0ZXJzLiBDaGFuZ2UgdGhlXG4vLyBmb2xsb3dpbmcgdGVtcGxhdGUgc2V0dGluZ3MgdG8gdXNlIGFsdGVybmF0aXZlIGRlbGltaXRlcnMuXG5leHBvcnQgZGVmYXVsdCBfLnRlbXBsYXRlU2V0dGluZ3MgPSB7XG4gIGV2YWx1YXRlOiAvPCUoW1xcc1xcU10rPyklPi9nLFxuICBpbnRlcnBvbGF0ZTogLzwlPShbXFxzXFxTXSs/KSU+L2csXG4gIGVzY2FwZTogLzwlLShbXFxzXFxTXSs/KSU+L2dcbn07XG4iLCJpbXBvcnQgbm93IGZyb20gJy4vbm93LmpzJztcblxuLy8gUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCB3aGVuIGludm9rZWQsIHdpbGwgb25seSBiZSB0cmlnZ2VyZWQgYXQgbW9zdCBvbmNlXG4vLyBkdXJpbmcgYSBnaXZlbiB3aW5kb3cgb2YgdGltZS4gTm9ybWFsbHksIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gd2lsbCBydW5cbi8vIGFzIG11Y2ggYXMgaXQgY2FuLCB3aXRob3V0IGV2ZXIgZ29pbmcgbW9yZSB0aGFuIG9uY2UgcGVyIGB3YWl0YCBkdXJhdGlvbjtcbi8vIGJ1dCBpZiB5b3UnZCBsaWtlIHRvIGRpc2FibGUgdGhlIGV4ZWN1dGlvbiBvbiB0aGUgbGVhZGluZyBlZGdlLCBwYXNzXG4vLyBge2xlYWRpbmc6IGZhbHNlfWAuIFRvIGRpc2FibGUgZXhlY3V0aW9uIG9uIHRoZSB0cmFpbGluZyBlZGdlLCBkaXR0by5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIHRpbWVvdXQsIGNvbnRleHQsIGFyZ3MsIHJlc3VsdDtcbiAgdmFyIHByZXZpb3VzID0gMDtcbiAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XG5cbiAgdmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgcHJldmlvdXMgPSBvcHRpb25zLmxlYWRpbmcgPT09IGZhbHNlID8gMCA6IG5vdygpO1xuICAgIHRpbWVvdXQgPSBudWxsO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgaWYgKCF0aW1lb3V0KSBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gIH07XG5cbiAgdmFyIHRocm90dGxlZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBfbm93ID0gbm93KCk7XG4gICAgaWYgKCFwcmV2aW91cyAmJiBvcHRpb25zLmxlYWRpbmcgPT09IGZhbHNlKSBwcmV2aW91cyA9IF9ub3c7XG4gICAgdmFyIHJlbWFpbmluZyA9IHdhaXQgLSAoX25vdyAtIHByZXZpb3VzKTtcbiAgICBjb250ZXh0ID0gdGhpcztcbiAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIGlmIChyZW1haW5pbmcgPD0gMCB8fCByZW1haW5pbmcgPiB3YWl0KSB7XG4gICAgICBpZiAodGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgfVxuICAgICAgcHJldmlvdXMgPSBfbm93O1xuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIGlmICghdGltZW91dCkgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAoIXRpbWVvdXQgJiYgb3B0aW9ucy50cmFpbGluZyAhPT0gZmFsc2UpIHtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCByZW1haW5pbmcpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHRocm90dGxlZC5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgcHJldmlvdXMgPSAwO1xuICAgIHRpbWVvdXQgPSBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIHRocm90dGxlZDtcbn1cbiIsImltcG9ydCBvcHRpbWl6ZUNiIGZyb20gJy4vX29wdGltaXplQ2IuanMnO1xuXG4vLyBSdW4gYSBmdW5jdGlvbiAqKm4qKiB0aW1lcy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpbWVzKG4sIGl0ZXJhdGVlLCBjb250ZXh0KSB7XG4gIHZhciBhY2N1bSA9IEFycmF5KE1hdGgubWF4KDAsIG4pKTtcbiAgaXRlcmF0ZWUgPSBvcHRpbWl6ZUNiKGl0ZXJhdGVlLCBjb250ZXh0LCAxKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIGFjY3VtW2ldID0gaXRlcmF0ZWUoaSk7XG4gIHJldHVybiBhY2N1bTtcbn1cbiIsImltcG9ydCBpc0FycmF5IGZyb20gJy4vaXNBcnJheS5qcyc7XG5pbXBvcnQgeyBzbGljZSB9IGZyb20gJy4vX3NldHVwLmpzJztcbmltcG9ydCBpc1N0cmluZyBmcm9tICcuL2lzU3RyaW5nLmpzJztcbmltcG9ydCBpc0FycmF5TGlrZSBmcm9tICcuL19pc0FycmF5TGlrZS5qcyc7XG5pbXBvcnQgbWFwIGZyb20gJy4vbWFwLmpzJztcbmltcG9ydCBpZGVudGl0eSBmcm9tICcuL2lkZW50aXR5LmpzJztcbmltcG9ydCB2YWx1ZXMgZnJvbSAnLi92YWx1ZXMuanMnO1xuXG4vLyBTYWZlbHkgY3JlYXRlIGEgcmVhbCwgbGl2ZSBhcnJheSBmcm9tIGFueXRoaW5nIGl0ZXJhYmxlLlxudmFyIHJlU3RyU3ltYm9sID0gL1teXFx1ZDgwMC1cXHVkZmZmXXxbXFx1ZDgwMC1cXHVkYmZmXVtcXHVkYzAwLVxcdWRmZmZdfFtcXHVkODAwLVxcdWRmZmZdL2c7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0FycmF5KG9iaikge1xuICBpZiAoIW9iaikgcmV0dXJuIFtdO1xuICBpZiAoaXNBcnJheShvYmopKSByZXR1cm4gc2xpY2UuY2FsbChvYmopO1xuICBpZiAoaXNTdHJpbmcob2JqKSkge1xuICAgIC8vIEtlZXAgc3Vycm9nYXRlIHBhaXIgY2hhcmFjdGVycyB0b2dldGhlci5cbiAgICByZXR1cm4gb2JqLm1hdGNoKHJlU3RyU3ltYm9sKTtcbiAgfVxuICBpZiAoaXNBcnJheUxpa2Uob2JqKSkgcmV0dXJuIG1hcChvYmosIGlkZW50aXR5KTtcbiAgcmV0dXJuIHZhbHVlcyhvYmopO1xufVxuIiwiaW1wb3J0IF8gZnJvbSAnLi91bmRlcnNjb3JlLmpzJztcbmltcG9ydCBlYWNoIGZyb20gJy4vZWFjaC5qcyc7XG5pbXBvcnQgeyBBcnJheVByb3RvIH0gZnJvbSAnLi9fc2V0dXAuanMnO1xuaW1wb3J0IGNoYWluUmVzdWx0IGZyb20gJy4vX2NoYWluUmVzdWx0LmpzJztcblxuLy8gQWRkIGFsbCBtdXRhdG9yIGBBcnJheWAgZnVuY3Rpb25zIHRvIHRoZSB3cmFwcGVyLlxuZWFjaChbJ3BvcCcsICdwdXNoJywgJ3JldmVyc2UnLCAnc2hpZnQnLCAnc29ydCcsICdzcGxpY2UnLCAndW5zaGlmdCddLCBmdW5jdGlvbihuYW1lKSB7XG4gIHZhciBtZXRob2QgPSBBcnJheVByb3RvW25hbWVdO1xuICBfLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBvYmogPSB0aGlzLl93cmFwcGVkO1xuICAgIGlmIChvYmogIT0gbnVsbCkge1xuICAgICAgbWV0aG9kLmFwcGx5KG9iaiwgYXJndW1lbnRzKTtcbiAgICAgIGlmICgobmFtZSA9PT0gJ3NoaWZ0JyB8fCBuYW1lID09PSAnc3BsaWNlJykgJiYgb2JqLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBkZWxldGUgb2JqWzBdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2hhaW5SZXN1bHQodGhpcywgb2JqKTtcbiAgfTtcbn0pO1xuXG4vLyBBZGQgYWxsIGFjY2Vzc29yIGBBcnJheWAgZnVuY3Rpb25zIHRvIHRoZSB3cmFwcGVyLlxuZWFjaChbJ2NvbmNhdCcsICdqb2luJywgJ3NsaWNlJ10sIGZ1bmN0aW9uKG5hbWUpIHtcbiAgdmFyIG1ldGhvZCA9IEFycmF5UHJvdG9bbmFtZV07XG4gIF8ucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG9iaiA9IHRoaXMuX3dyYXBwZWQ7XG4gICAgaWYgKG9iaiAhPSBudWxsKSBvYmogPSBtZXRob2QuYXBwbHkob2JqLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiBjaGFpblJlc3VsdCh0aGlzLCBvYmopO1xuICB9O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IF87XG4iLCJpbXBvcnQgeyBWRVJTSU9OIH0gZnJvbSAnLi9fc2V0dXAuanMnO1xuXG4vLyBJZiBVbmRlcnNjb3JlIGlzIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLCBpdCByZXR1cm5zIGEgd3JhcHBlZCBvYmplY3QgdGhhdCBjYW5cbi8vIGJlIHVzZWQgT08tc3R5bGUuIFRoaXMgd3JhcHBlciBob2xkcyBhbHRlcmVkIHZlcnNpb25zIG9mIGFsbCBmdW5jdGlvbnMgYWRkZWRcbi8vIHRocm91Z2ggYF8ubWl4aW5gLiBXcmFwcGVkIG9iamVjdHMgbWF5IGJlIGNoYWluZWQuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfKG9iaikge1xuICBpZiAob2JqIGluc3RhbmNlb2YgXykgcmV0dXJuIG9iajtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIF8pKSByZXR1cm4gbmV3IF8ob2JqKTtcbiAgdGhpcy5fd3JhcHBlZCA9IG9iajtcbn1cblxuXy5WRVJTSU9OID0gVkVSU0lPTjtcblxuLy8gRXh0cmFjdHMgdGhlIHJlc3VsdCBmcm9tIGEgd3JhcHBlZCBhbmQgY2hhaW5lZCBvYmplY3QuXG5fLnByb3RvdHlwZS52YWx1ZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5fd3JhcHBlZDtcbn07XG5cbi8vIFByb3ZpZGUgdW53cmFwcGluZyBwcm94aWVzIGZvciBzb21lIG1ldGhvZHMgdXNlZCBpbiBlbmdpbmUgb3BlcmF0aW9uc1xuLy8gc3VjaCBhcyBhcml0aG1ldGljIGFuZCBKU09OIHN0cmluZ2lmaWNhdGlvbi5cbl8ucHJvdG90eXBlLnZhbHVlT2YgPSBfLnByb3RvdHlwZS50b0pTT04gPSBfLnByb3RvdHlwZS52YWx1ZTtcblxuXy5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIFN0cmluZyh0aGlzLl93cmFwcGVkKTtcbn07XG4iLCJpbXBvcnQgY3JlYXRlRXNjYXBlciBmcm9tICcuL19jcmVhdGVFc2NhcGVyLmpzJztcbmltcG9ydCB1bmVzY2FwZU1hcCBmcm9tICcuL191bmVzY2FwZU1hcC5qcyc7XG5cbi8vIEZ1bmN0aW9uIGZvciB1bmVzY2FwaW5nIHN0cmluZ3MgZnJvbSBIVE1MIGludGVycG9sYXRpb24uXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFc2NhcGVyKHVuZXNjYXBlTWFwKTtcbiIsImltcG9ydCByZXN0QXJndW1lbnRzIGZyb20gJy4vcmVzdEFyZ3VtZW50cy5qcyc7XG5pbXBvcnQgdW5pcSBmcm9tICcuL3VuaXEuanMnO1xuaW1wb3J0IGZsYXR0ZW4gZnJvbSAnLi9fZmxhdHRlbi5qcyc7XG5cbi8vIFByb2R1Y2UgYW4gYXJyYXkgdGhhdCBjb250YWlucyB0aGUgdW5pb246IGVhY2ggZGlzdGluY3QgZWxlbWVudCBmcm9tIGFsbCBvZlxuLy8gdGhlIHBhc3NlZC1pbiBhcnJheXMuXG5leHBvcnQgZGVmYXVsdCByZXN0QXJndW1lbnRzKGZ1bmN0aW9uKGFycmF5cykge1xuICByZXR1cm4gdW5pcShmbGF0dGVuKGFycmF5cywgdHJ1ZSwgdHJ1ZSkpO1xufSk7XG4iLCJpbXBvcnQgaXNCb29sZWFuIGZyb20gJy4vaXNCb29sZWFuLmpzJztcbmltcG9ydCBjYiBmcm9tICcuL19jYi5qcyc7XG5pbXBvcnQgZ2V0TGVuZ3RoIGZyb20gJy4vX2dldExlbmd0aC5qcyc7XG5pbXBvcnQgY29udGFpbnMgZnJvbSAnLi9jb250YWlucy5qcyc7XG5cbi8vIFByb2R1Y2UgYSBkdXBsaWNhdGUtZnJlZSB2ZXJzaW9uIG9mIHRoZSBhcnJheS4gSWYgdGhlIGFycmF5IGhhcyBhbHJlYWR5XG4vLyBiZWVuIHNvcnRlZCwgeW91IGhhdmUgdGhlIG9wdGlvbiBvZiB1c2luZyBhIGZhc3RlciBhbGdvcml0aG0uXG4vLyBUaGUgZmFzdGVyIGFsZ29yaXRobSB3aWxsIG5vdCB3b3JrIHdpdGggYW4gaXRlcmF0ZWUgaWYgdGhlIGl0ZXJhdGVlXG4vLyBpcyBub3QgYSBvbmUtdG8tb25lIGZ1bmN0aW9uLCBzbyBwcm92aWRpbmcgYW4gaXRlcmF0ZWUgd2lsbCBkaXNhYmxlXG4vLyB0aGUgZmFzdGVyIGFsZ29yaXRobS5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVuaXEoYXJyYXksIGlzU29ydGVkLCBpdGVyYXRlZSwgY29udGV4dCkge1xuICBpZiAoIWlzQm9vbGVhbihpc1NvcnRlZCkpIHtcbiAgICBjb250ZXh0ID0gaXRlcmF0ZWU7XG4gICAgaXRlcmF0ZWUgPSBpc1NvcnRlZDtcbiAgICBpc1NvcnRlZCA9IGZhbHNlO1xuICB9XG4gIGlmIChpdGVyYXRlZSAhPSBudWxsKSBpdGVyYXRlZSA9IGNiKGl0ZXJhdGVlLCBjb250ZXh0KTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgc2VlbiA9IFtdO1xuICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gZ2V0TGVuZ3RoKGFycmF5KTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaV0sXG4gICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUgPyBpdGVyYXRlZSh2YWx1ZSwgaSwgYXJyYXkpIDogdmFsdWU7XG4gICAgaWYgKGlzU29ydGVkICYmICFpdGVyYXRlZSkge1xuICAgICAgaWYgKCFpIHx8IHNlZW4gIT09IGNvbXB1dGVkKSByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgICBzZWVuID0gY29tcHV0ZWQ7XG4gICAgfSBlbHNlIGlmIChpdGVyYXRlZSkge1xuICAgICAgaWYgKCFjb250YWlucyhzZWVuLCBjb21wdXRlZCkpIHtcbiAgICAgICAgc2Vlbi5wdXNoKGNvbXB1dGVkKTtcbiAgICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWNvbnRhaW5zKHJlc3VsdCwgdmFsdWUpKSB7XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCIvLyBHZW5lcmF0ZSBhIHVuaXF1ZSBpbnRlZ2VyIGlkICh1bmlxdWUgd2l0aGluIHRoZSBlbnRpcmUgY2xpZW50IHNlc3Npb24pLlxuLy8gVXNlZnVsIGZvciB0ZW1wb3JhcnkgRE9NIGlkcy5cbnZhciBpZENvdW50ZXIgPSAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdW5pcXVlSWQocHJlZml4KSB7XG4gIHZhciBpZCA9ICsraWRDb3VudGVyICsgJyc7XG4gIHJldHVybiBwcmVmaXggPyBwcmVmaXggKyBpZCA6IGlkO1xufVxuIiwiaW1wb3J0IG1heCBmcm9tICcuL21heC5qcyc7XG5pbXBvcnQgZ2V0TGVuZ3RoIGZyb20gJy4vX2dldExlbmd0aC5qcyc7XG5pbXBvcnQgcGx1Y2sgZnJvbSAnLi9wbHVjay5qcyc7XG5cbi8vIENvbXBsZW1lbnQgb2YgemlwLiBVbnppcCBhY2NlcHRzIGFuIGFycmF5IG9mIGFycmF5cyBhbmQgZ3JvdXBzXG4vLyBlYWNoIGFycmF5J3MgZWxlbWVudHMgb24gc2hhcmVkIGluZGljZXMuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1bnppcChhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgJiYgbWF4KGFycmF5LCBnZXRMZW5ndGgpLmxlbmd0aCB8fCAwO1xuICB2YXIgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IHBsdWNrKGFycmF5LCBpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImltcG9ydCBrZXlzIGZyb20gJy4va2V5cy5qcyc7XG5cbi8vIFJldHJpZXZlIHRoZSB2YWx1ZXMgb2YgYW4gb2JqZWN0J3MgcHJvcGVydGllcy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbHVlcyhvYmopIHtcbiAgdmFyIF9rZXlzID0ga2V5cyhvYmopO1xuICB2YXIgbGVuZ3RoID0gX2tleXMubGVuZ3RoO1xuICB2YXIgdmFsdWVzID0gQXJyYXkobGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHZhbHVlc1tpXSA9IG9ialtfa2V5c1tpXV07XG4gIH1cbiAgcmV0dXJuIHZhbHVlcztcbn1cbiIsImltcG9ydCBmaWx0ZXIgZnJvbSAnLi9maWx0ZXIuanMnO1xuaW1wb3J0IG1hdGNoZXIgZnJvbSAnLi9tYXRjaGVyLmpzJztcblxuLy8gQ29udmVuaWVuY2UgdmVyc2lvbiBvZiBhIGNvbW1vbiB1c2UgY2FzZSBvZiBgXy5maWx0ZXJgOiBzZWxlY3Rpbmcgb25seVxuLy8gb2JqZWN0cyBjb250YWluaW5nIHNwZWNpZmljIGBrZXk6dmFsdWVgIHBhaXJzLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2hlcmUob2JqLCBhdHRycykge1xuICByZXR1cm4gZmlsdGVyKG9iaiwgbWF0Y2hlcihhdHRycykpO1xufVxuIiwiaW1wb3J0IHJlc3RBcmd1bWVudHMgZnJvbSAnLi9yZXN0QXJndW1lbnRzLmpzJztcbmltcG9ydCBkaWZmZXJlbmNlIGZyb20gJy4vZGlmZmVyZW5jZS5qcyc7XG5cbi8vIFJldHVybiBhIHZlcnNpb24gb2YgdGhlIGFycmF5IHRoYXQgZG9lcyBub3QgY29udGFpbiB0aGUgc3BlY2lmaWVkIHZhbHVlKHMpLlxuZXhwb3J0IGRlZmF1bHQgcmVzdEFyZ3VtZW50cyhmdW5jdGlvbihhcnJheSwgb3RoZXJBcnJheXMpIHtcbiAgcmV0dXJuIGRpZmZlcmVuY2UoYXJyYXksIG90aGVyQXJyYXlzKTtcbn0pO1xuIiwiaW1wb3J0IHBhcnRpYWwgZnJvbSAnLi9wYXJ0aWFsLmpzJztcblxuLy8gUmV0dXJucyB0aGUgZmlyc3QgZnVuY3Rpb24gcGFzc2VkIGFzIGFuIGFyZ3VtZW50IHRvIHRoZSBzZWNvbmQsXG4vLyBhbGxvd2luZyB5b3UgdG8gYWRqdXN0IGFyZ3VtZW50cywgcnVuIGNvZGUgYmVmb3JlIGFuZCBhZnRlciwgYW5kXG4vLyBjb25kaXRpb25hbGx5IGV4ZWN1dGUgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd3JhcChmdW5jLCB3cmFwcGVyKSB7XG4gIHJldHVybiBwYXJ0aWFsKHdyYXBwZXIsIGZ1bmMpO1xufVxuIiwiaW1wb3J0IHJlc3RBcmd1bWVudHMgZnJvbSAnLi9yZXN0QXJndW1lbnRzLmpzJztcbmltcG9ydCB1bnppcCBmcm9tICcuL3VuemlwLmpzJztcblxuLy8gWmlwIHRvZ2V0aGVyIG11bHRpcGxlIGxpc3RzIGludG8gYSBzaW5nbGUgYXJyYXkgLS0gZWxlbWVudHMgdGhhdCBzaGFyZVxuLy8gYW4gaW5kZXggZ28gdG9nZXRoZXIuXG5leHBvcnQgZGVmYXVsdCByZXN0QXJndW1lbnRzKHVuemlwKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBGaWx0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRcblx0LyoqXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKiBsaWZlY3ljbGVcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHRcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0YWN0aXZlOnt9LFxuXHRcdFx0YWN0aXZlX2xpc3Q6IGZhbHNlLFxuXHRcdH07XG5cdFx0XG5cdH1cblx0XG5cdC8qKlxuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICogcmVuZGVyaW5nXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKi9cblx0cmVuZGVyRmlsdGVycygpe1xuXHRcdGxldCBlbGVtZW50cyA9IFtdO1xuXHRcdGZvcihsZXQgc2x1ZyBpbiB0aGlzLnByb3BzLml0ZW1zKXtcblx0XHRcdFxuXHRcdFx0bGV0IGxhYmVsID0gdGhpcy5wcm9wcy5pdGVtc1tzbHVnXTtcblx0XHRcdGVsZW1lbnRzLnB1c2goXG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9e2BmaWx0ZXJfX2l0ZW0gJHsodGhpcy5pc0FjdGl2ZShzbHVnKSk/IFwiaXMtYWN0aXZlXCI6IFwiaXMtaW5hY3RpdmVcIn1gfVxuXHRcdFx0XHRcdGtleT17c2x1Z31cblx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLm9uVG9nZ2xlQWN0aXZlLmJpbmQodGhpcyxzbHVnKX1cblx0XHRcdFx0PlxuXHRcdFx0XHR7bGFiZWx9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIGVsZW1lbnRzO1xuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRpZihPYmplY3Qua2V5cyh0aGlzLnByb3BzLml0ZW1zKS5sZW5ndGggPCAxKSByZXR1cm4gbnVsbDtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdlxuXHRcdFx0XHRjbGFzc05hbWU9e2BnZW9sb2NhdGlvbnNfX2ZpbHRlciAkeyh0aGlzLnN0YXRlLmFjdGl2ZV9saXN0KT8gXCJpcy1hY3RpdmVcIjogXCJpcy1pbmFjdGl2ZVwifWB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxsYWJlbFxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImZpbHRlcl9fbGFiZWxcIlxuXHRcdFx0XHQgICAgb25DbGljaz17dGhpcy5vblRvZ2dsZUxpc3QuYmluZCh0aGlzKX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdEZpbHRlclxuXHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZmlsdGVyX19saXN0XCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdHt0aGlzLnJlbmRlckZpbHRlcnMoKX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblx0XG5cdC8qKlxuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICogZXZlbnRzXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKi9cblx0b25Ub2dnbGVMaXN0KCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7YWN0aXZlX2xpc3Q6ICF0aGlzLnN0YXRlLmFjdGl2ZV9saXN0fSlcblx0fVxuXHRvblRvZ2dsZUFjdGl2ZShzbHVnKXtcblx0XHR0aGlzLnN0YXRlLmFjdGl2ZVtzbHVnXSA9ICF0aGlzLmlzQWN0aXZlKHNsdWcpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe2FjdGl2ZTogdGhpcy5zdGF0ZS5hY3RpdmV9KTtcblx0XHRpZih0eXBlb2YgdGhpcy5wcm9wcy5vblRvZ2dsZUFjdGl2ZSAhPT0gdHlwZW9mIHVuZGVmaW5lZCl7XG5cdFx0XHR0aGlzLnByb3BzLm9uVG9nZ2xlQWN0aXZlKHNsdWcsdGhpcy5zdGF0ZS5hY3RpdmVbc2x1Z10pO1xuXHRcdH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKiBvdGhlciBmdW5jdGlvbnNcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCAqL1xuXHRpc0FjdGl2ZShzbHVnKXtcblx0XHRpZih0eXBlb2YgdGhpcy5zdGF0ZS5hY3RpdmVbc2x1Z10gPT09IHR5cGVvZiB1bmRlZmluZWQpe1xuXHRcdFx0dGhpcy5zdGF0ZS5hY3RpdmVbc2x1Z10gPSB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5hY3RpdmVbc2x1Z107XG5cdH1cbn1cblxuLyoqXG4gKiBwcm9wZXJ0eSBkZWZhdWx0c1xuICovXG5GaWx0ZXIuZGVmYXVsdFByb3BzID0ge1xuXHRpdGVtczoge30sXG59O1xuXG4vKipcbiAqIGV4cG9ydCBjb21wb25lbnQgdG8gcHVibGljXG4gKi9cbmV4cG9ydCBkZWZhdWx0IEZpbHRlcjsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuXG5jb25zdCBnZW9fZXZlbnRzID0gcmVxdWlyZSgnLi4vaGVscGVyL2V2ZW50cy5qcycpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZW9sb2NhdGlvbkxpc3RJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0XG5cdC8qKlxuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICogbGlmZWN5Y2xlXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKi9cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGFjdGl2ZTogZmFsc2UsXG5cdFx0XHR0eXBlX2FjdGl2ZTogdHJ1ZSxcblx0XHRcdGlzX3Zpc2libGU6IHRydWUsXG5cdFx0fTtcblx0XHRcblx0XHRpZih0eXBlb2YgdGhpcy5wcm9wcy5ldmVudHMgIT09IHR5cGVvZiB1bmRlZmluZWQgJiYgdGhpcy5wcm9wcy5ldmVudHMgIT0gbnVsbCl7XG5cdFx0XHR0aGlzLnByb3BzLmV2ZW50cy5hZGRMaXN0ZW5lcihnZW9fZXZlbnRzLk1BUF9NQVJLRVJfQ0xJQ0tFRCwgdGhpcy5vbk1hcmtlckNsaWNrZWQuYmluZCh0aGlzKSk7XG5cdFx0XHR0aGlzLnByb3BzLmV2ZW50cy5hZGRMaXN0ZW5lcihnZW9fZXZlbnRzLkxJU1RfSVRFTV9DTElDS0VELCB0aGlzLm9uQW55SXRlbUNsaWNrZWQuYmluZCh0aGlzKSk7XG5cdFx0XHRcblx0XHRcdHRoaXMucHJvcHMuZXZlbnRzLmFkZExpc3RlbmVyKGdlb19ldmVudHMuVFlQRV9BQ1RJVkVfQ0hBTkdFLCB0aGlzLm9uVHlwZUFjdGl2ZUNoYW5nZS5iaW5kKHRoaXMpKTtcblx0XHRcdHRoaXMucHJvcHMuZXZlbnRzLmFkZExpc3RlbmVyKGdlb19ldmVudHMuTUFQX01BUktFUl9JU19WSVNJQkxFLCB0aGlzLm9uTWFya2VySXNWaXNpYmxlLmJpbmQodGhpcykpO1xuXHRcdH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKiByZW5kZXJpbmdcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCAqL1xuXHRyZW5kZXIoKSB7XG5cdFx0Ly8gY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG5cdFx0aWYoIXRoaXMuc3RhdGUudHlwZV9hY3RpdmUgfHwgKCF0aGlzLnN0YXRlLmlzX3Zpc2libGUgJiYgIXRoaXMuc3RhdGUuYWN0aXZlKSkgcmV0dXJuIG51bGw7XG5cdFx0bGV0IGFjdGl2ZSA9ICh0aGlzLnN0YXRlLmFjdGl2ZSk/IFwiIGlzLWFjdGl2ZVwiOiBcIlwiO1xuXHRcdGNvbnN0IHttYWlsLHVybH0gPSB0aGlzLnByb3BzLmdlb2xvY2F0aW9uO1xuXHRcdGxldCBfbWFpbCwgX3VybDtcblx0XHRpZighXy5pc1VuZGVmaW5lZChtYWlsKSl7XG5cdFx0XHRfbWFpbCA9IDxhXG5cdFx0XHRcdGhyZWY9e2BtYWlsdG86JHttYWlsfWB9XG5cdFx0XHQgICAgY2xhc3NOYW1lPVwiZ2VvbG9jYXRpb25zX19tYWlsLWxpbmtcIlxuXHRcdFx0PlxuXHRcdFx0XHR7bWFpbH1cblx0XHRcdDwvYT5cblx0XHR9XG5cdFx0aWYoIV8uaXNVbmRlZmluZWQodXJsKSl7XG5cdFx0XHRsZXQgaHR0cCA9IFwiXCI7XG5cdFx0XHRpZih1cmwuaW5kZXhPZihcImh0dHBcIikgPCAwKXtcblx0XHRcdFx0aHR0cCA9IFwiaHR0cDovL1wiO1xuXHRcdFx0fVxuXHRcdFx0X3VybCA9IDxhXG5cdFx0XHRcdGhyZWY9e2Ake2h0dHB9JHt1cmx9YH1cblx0XHRcdFx0Y2xhc3NOYW1lPVwiZ2VvbG9jYXRpb25zX191cmwtbGlua1wiXG5cdFx0XHQ+XG5cdFx0XHRcdHt1cmx9XG5cdFx0XHQ8L2E+XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT17YGdlb2xvY2F0aW9uc19faXRlbSR7YWN0aXZlfWB9XG5cdFx0XHRcdG9uTW91c2VFbnRlcj17dGhpcy5vbk1vdXNlT3Zlci5iaW5kKHRoaXMpfVxuXHRcdFx0ICAgIG9uTW91c2VMZWF2ZT17dGhpcy5vbk1vdXNlT3V0LmJpbmQodGhpcyl9XG5cdFx0XHQgICAgb25DbGljaz17dGhpcy5vbkNsaWNrLmJpbmQodGhpcyl9XG5cdFx0XHQ+XG5cdFx0XHRcdFxuXHRcdFx0XHR7dGhpcy5yZW5kZXJJZihcImdlb2xvY2F0aW9uc19fbmFtZVwiLHRoaXMucmVuZGVyVGl0bGUoKSl9XG5cdFx0XHRcdHt0aGlzLnJlbmRlcklmKFwiZ2VvbG9jYXRpb25zX19mdW5jdGlvblwiLHRoaXMucHJvcHMuZ2VvbG9jYXRpb24uZnVuYyl9XG5cdFx0XHRcdHt0aGlzLnJlbmRlcklmKFwiZ2VvbG9jYXRpb25zX19hZGRyZXNzXCIsdGhpcy5wcm9wcy5nZW9sb2NhdGlvbi5hZGRyZXNzKX1cblx0XHRcdFx0e3RoaXMucmVuZGVySWYoXCJnZW9sb2NhdGlvbnNfX3Bob25lXCIsdGhpcy5wcm9wcy5nZW9sb2NhdGlvbi5waG9uZSl9XG5cdFx0XHRcdHt0aGlzLnJlbmRlcklmKFwiZ2VvbG9jYXRpb25zX19mYXhcIix0aGlzLnByb3BzLmdlb2xvY2F0aW9uLmZheCl9XG5cdFx0XHRcdFxuXHRcdFx0XHR7dGhpcy5yZW5kZXJJZihcImdlb2xvY2F0aW9uc19fbWFpbFwiLF9tYWlsKX1cblx0XHRcdFx0e3RoaXMucmVuZGVySWYoXCJnZW9sb2NhdGlvbnNfX3VybFwiLF91cmwpfVxuXHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cdFxuXHRyZW5kZXJUaXRsZSgpe1xuXHRcdGlmKHRoaXMuc3RhdGUuYWN0aXZlICYmICF0aGlzLnByb3BzLmlzX3NpbmdsZSl7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8YVxuXHRcdFx0XHRcdGhyZWY9e3RoaXMucHJvcHMuZ2VvbG9jYXRpb24ucGVybWFsaW5rfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e3RoaXMucHJvcHMuZ2VvbG9jYXRpb24udGl0bGV9XG5cdFx0XHRcdDwvYT5cblx0XHRcdClcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMucHJvcHMuZ2VvbG9jYXRpb24udGl0bGU7XG5cdH1cblx0XG5cdHJlbmRlcklmKGNsYXNzbmFtZSwgdmFsdWUpe1xuXHRcdGlmKF8uaXNVbmRlZmluZWQodmFsdWUpIHx8IHZhbHVlID09IFwiXCIpIHJldHVybiBudWxsO1xuXHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lfT57dmFsdWV9PC9kaXY+XG5cdH1cblx0XG5cdC8qKlxuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICogZXZlbnRzXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKi9cblx0b25UeXBlQWN0aXZlQ2hhbmdlKHNsdWcsIGlzYWN0aXZlKXtcblx0XHRpZihzbHVnID09IHRoaXMucHJvcHMuZ2VvbG9jYXRpb24udHlwZS5zbHVnKXtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe3R5cGVfYWN0aXZlOiBpc2FjdGl2ZX0pO1xuXHRcdH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKiBvdGhlciBmdW5jdGlvbnNcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCAqL1xuXHRvbk1hcmtlckNsaWNrZWQoZ2xvYyl7XG5cdFx0bGV0IGFjdGl2ZSA9IGZhbHNlO1xuXHRcdGlmKGdsb2MuaWQgPT09IHRoaXMucHJvcHMuZ2VvbG9jYXRpb24uaWQpe1xuXHRcdFx0YWN0aXZlID0gdHJ1ZTtcblx0XHR9O1xuXHRcdHRoaXMuc2V0U3RhdGUoe2FjdGl2ZTogYWN0aXZlfSk7XG5cdH1cblx0b25BbnlJdGVtQ2xpY2tlZChnbG9jKXtcblx0XHRpZihnbG9jLmlkID09PSB0aGlzLnByb3BzLmdlb2xvY2F0aW9uLmlkKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHthY3RpdmU6dHJ1ZX0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHthY3RpdmU6ZmFsc2V9KTtcblx0XHR9XG5cblx0XHRcblx0fVxuXHRvbkNsaWNrKCl7XG5cdFx0dGhpcy5lbWl0SWYoZ2VvX2V2ZW50cy5MSVNUX0lURU1fQ0xJQ0tFRCk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7YWN0aXZlOnRydWV9KTtcblx0fVxuXHRvbk1vdXNlT3ZlcihlKXtcblx0XHR0aGlzLmVtaXRJZihnZW9fZXZlbnRzLkxJU1RfSVRFTV9IT1ZFUiwgdHJ1ZSk7XG5cdH1cblx0b25Nb3VzZU91dChlKXtcblx0XHR0aGlzLmVtaXRJZihnZW9fZXZlbnRzLkxJU1RfSVRFTV9IT1ZFUiwgZmFsc2UpXG5cdH1cblx0ZW1pdElmKGV2ZW50LCB2YWx1ZSl7XG5cdFx0aWYodHlwZW9mIHRoaXMucHJvcHMuZXZlbnRzICE9IHR5cGVvZiB1bmRlZmluZWQgJiYgdGhpcy5wcm9wcy5ldmVudHMgIT0gbnVsbCl7XG5cdFx0XHR0aGlzLnByb3BzLmV2ZW50cy5lbWl0KGV2ZW50LCB0aGlzLnByb3BzLmdlb2xvY2F0aW9uLCB2YWx1ZSk7XG5cdFx0fVxuXHR9XG5cdG9uTWFya2VySXNWaXNpYmxlKGlzX3Zpc2libGUsIGdsb2Mpe1xuXHRcdGlmKGdsb2MuaWQgPT0gdGhpcy5wcm9wcy5nZW9sb2NhdGlvbi5pZCl7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtpc192aXNpYmxlOiBpc192aXNpYmxlfSk7XG5cdFx0fVxuXHR9XG5cdFxufVxuR2VvbG9jYXRpb25MaXN0SXRlbS5kZWZhdWx0UHJvcHMgPSB7XG5cdGlzX3NpbmdsZTogZmFsc2UsXG59IiwiaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge01hcmtlciwgQ2lyY2xlfSBmcm9tICdyZWFjdC1nbWFwcyc7XG5cbmltcG9ydCBnZW9fZXZlbnRzIGZyb20gJy4uL2hlbHBlci9ldmVudHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZW9sb2NhdGlvbk1hcmtlciBleHRlbmRzIE1hcmtlciB7XG5cdFxuXHQvKipcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCAqIGxpZmVjeWNsZVxuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICovXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdFxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRvdmVyOiB0aGlzLnByb3BzLm92ZXIsXG5cdFx0XHRzY2FsZTogMSxcblx0XHRcdHZpc2libGU6IHRydWUsXG5cdFx0fTtcblx0XHRcblx0fVxuXHRcblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHRzdXBlci5jb21wb25lbnREaWRNb3VudCgpO1xuXHRcdFxuXHRcdGNvbnN0IGdsb2MgPSB0aGlzLnByb3BzLmdlb2xvY2F0aW9uO1xuXHRcdGNvbnN0IG1hcmtlciA9IHRoaXMuZ2V0RW50aXR5KCk7XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0T3B0aW9ucyh0aGlzLnByb3BzKTtcblx0XHRcblx0XHRsZXQgaWNvbiA9IHtcblx0XHRcdHBhdGg6IFwiTTM5LDcuMDlBMjQuODMsMjQuODMsMCwwLDAsMTkuNjEsNDcuNDNoMEwzOCw3MC40NGExLjI0LDEuMjQsMCwwLDAsMS45NCwwbDE4LjQyLTIzaDBBMjQuODMsMjQuODMsMCwwLDAsMzksNy4wOVpcIixcblx0XHRcdGZpbGxDb2xvcjogXCIjRkYwMDAwXCIsXG5cdFx0XHRmaWxsT3BhY2l0eTogLjYsXG5cdFx0XHRzdHJva2VDb2xvcjogJyNGRjAwMDAnLFxuXHRcdFx0c3Ryb2tlV2VpZ2h0OiAxLFxuXHRcdFx0c3Ryb2tlT3BhY2l0eTogMSxcblx0XHRcdHNjYWxlOiAwLjYsXG5cdFx0XHRhbmNob3I6IHtcblx0XHRcdFx0eDogNDAsXG5cdFx0XHRcdHk6IDcwLFxuXHRcdFx0fSxcblx0XHR9O1xuXHRcdFxuXHRcdGNvbnN0IF9pY29uID0gZ2xvYy5tYXJrZXJfaWNvbjtcblx0XHRcblx0XHRpZihfLmlzT2JqZWN0KF9pY29uKSl7XG5cdFx0XHRmb3IodmFyIGtleSBpbiBfaWNvbil7XG5cdFx0XHRcdGljb25ba2V5XSA9IF9pY29uW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdG1hcmtlci5zZXRJY29uKGljb24pO1xuXHRcdFxuXHRcdHRoaXMucHJvcHMuZXZlbnRzLmVtaXQoZ2VvX2V2ZW50cy5NQVBfTUFSS0VSX0FEREVELCBtYXJrZXIsIGdsb2MpO1xuXHRcdHRoaXMucHJvcHMuZXZlbnRzLmFkZExpc3RlbmVyKGdlb19ldmVudHMuTElTVF9JVEVNX0hPVkVSLHRoaXMub25Ib3Zlci5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnByb3BzLmV2ZW50cy5hZGRMaXN0ZW5lcihnZW9fZXZlbnRzLk1BUF9DRU5URVJfQ0hBTkdFRCwgdGhpcy5vbk1hcENlbnRlckNoYW5nZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnByb3BzLmV2ZW50cy5hZGRMaXN0ZW5lcihnZW9fZXZlbnRzLlRZUEVfQUNUSVZFX0NIQU5HRSwgdGhpcy5vbkFjdGl2ZUNoYW5nZS5iaW5kKHRoaXMpKTtcblx0fVxuXHRcblx0Y29tcG9uZW50V2lsbFVubW91bnQoKXtcblx0XHRzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuXHRcdHRoaXMucHJvcHMuZXZlbnRzLnJlbW92ZUxpc3RlbmVyKGdlb19ldmVudHMuTElTVF9JVEVNX0hPVkVSLHRoaXMub25Ib3Zlcik7XG5cdFx0dGhpcy5wcm9wcy5ldmVudHMucmVtb3ZlTGlzdGVuZXIoZ2VvX2V2ZW50cy5NQVBfQ0VOVEVSX0NIQU5HRUQsIHRoaXMub25NYXBDZW50ZXJDaGFuZ2UuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5wcm9wcy5ldmVudHMucmVtb3ZlTGlzdGVuZXIoZ2VvX2V2ZW50cy5UWVBFX0FDVElWRV9DSEFOR0UsIHRoaXMub25BY3RpdmVDaGFuZ2UuYmluZCh0aGlzKSk7XG5cdH1cblx0XG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpe1xuXHRcdGNvbnN0IG1hcmtlciA9IHRoaXMuZ2V0RW50aXR5KCk7XG5cdFx0aWYodGhpcy5zdGF0ZS5vdmVyKXtcblx0XHRcdG1hcmtlci5zZXRBbmltYXRpb24oZ29vZ2xlLm1hcHMuQW5pbWF0aW9uLkJPVU5DRSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1hcmtlci5zZXRBbmltYXRpb24obnVsbCk7XG5cdFx0fVxuXHR9XG5cdFxuXHQvKipcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCAqIHJlbmRlcmluZ1xuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICovXG5cdC8vIG5vIHJlbmRlcmluZyBuZWVkZWQgaGVyZSBiZWNhdXNlIGdtYXBzIGRvZXMgdGhlIHJlbmRlcmluZ1xuXHRcblx0LyoqXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKiBldmVudHNcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCAqL1xuXHRvbkhvdmVyKGdsb2MsIG92ZXIgKXtcblx0XHRpZihnbG9jLmlkICE9IHRoaXMucHJvcHMuZ2VvbG9jYXRpb24uaWQpIHJldHVybjtcblx0XHR0aGlzLnNldFN0YXRlKHtvdmVyOm92ZXJ9KTtcblx0fVxuXHRvbkFjdGl2ZUNoYW5nZShzbHVnLCBpc2FjdGl2ZSl7XG5cdFx0Y29uc3Qge2dlb2xvY2F0aW9uLCBtYXB9ID0gdGhpcy5wcm9wcztcblx0XHRpZihnZW9sb2NhdGlvbi50eXBlLnNsdWcgPT0gc2x1Zyl7XG5cdFx0XHRjb25zb2xlLmxvZyhcInJlbGV2YW50IG9uQWN0aXZlQ2hhbmdlXCIsIHNsdWcsIGlzYWN0aXZlKTtcblx0XHRcdGlmKGlzYWN0aXZlKXtcblx0XHRcdFx0dGhpcy5nZXRFbnRpdHkoKS5zZXRNYXAobWFwKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuZ2V0RW50aXR5KCkuc2V0TWFwKG51bGwpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRvbk1hcENlbnRlckNoYW5nZShib3VuZHMpe1xuXHRcdGNvbnN0IGlzX3Zpc2libGUgPSBib3VuZHMuY29udGFpbnModGhpcy5nZXRFbnRpdHkoKS5nZXRQb3NpdGlvbigpKTtcblx0XHRpZih0aGlzLnN0YXRlLnZpc2libGUgIT0gaXNfdmlzaWJsZSl7XG5cdFx0XHR0aGlzLnN0YXRlLnZpc2libGUgPSBpc192aXNpYmxlO1xuXHRcdFx0dGhpcy5wcm9wcy5ldmVudHMuZW1pdChnZW9fZXZlbnRzLk1BUF9NQVJLRVJfSVNfVklTSUJMRSwgaXNfdmlzaWJsZSwgdGhpcy5wcm9wcy5nZW9sb2NhdGlvbik7XG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICogb3RoZXIgZnVuY3Rpb25zXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKi9cbn1cblxuR2VvbG9jYXRpb25NYXJrZXIuZGVmYXVsdFByb3BzID0ge1xuXHRvdmVyOiBmYWxzZSxcbn1cbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgZ2VvX2V2ZW50cyBmcm9tICcuLi9oZWxwZXIvZXZlbnRzLmpzJztcblxuaW1wb3J0IExpc3RJdGVtIGZyb20gJy4vZ2VvbG9jYXRpb24tbGlzdC1pdGVtLmpzeCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlb2xvY2F0aW9uc0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRcblx0LyoqXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKiBsaWZlY3ljbGVcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0bWFwczogbnVsbCxcblx0XHRcdHBhZ2U6IDEsXG5cdFx0XHRnbG9jX2FjdGl2ZTogLTEsXG5cdFx0fVxuXHRcdFxuXHRcdHRoaXMudHlwZXMgPSBbJ2dlb2NvZGUnLCdyZWdpb25zJywnY2l0aWVzJ107XG5cdFx0XG5cdFx0dGhpcy5tYXhfcGFnZSA9IE1hdGgucm91bmQodGhpcy5wcm9wcy5nZW9sb2NhdGlvbnMubGVuZ3RoL3RoaXMucHJvcHMucG9zdHNfcGVyX3BhZ2UpO1xuXHRcdFxuXHRcdHRoaXMucHJvcHMuZXZlbnRzLmFkZExpc3RlbmVyKGdlb19ldmVudHMuTUFQX01BUktFUl9DTElDS0VELCB0aGlzLm9uTWFya2VyQ2xpY2tlZC5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnByb3BzLmV2ZW50cy5hZGRMaXN0ZW5lcihnZW9fZXZlbnRzLk1BUF9DTElDS0VELCB0aGlzLm9uTWFwQ2xpY2tlZC5iaW5kKHRoaXMpKTtcblx0XHRcblx0XHRcblx0fVxuXHRcblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICogcmVuZGVyaW5nXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKi9cblx0cmVuZGVySXRlbShnbG9jKXtcblx0XHRyZXR1cm4gPExpc3RJdGVtXG5cdFx0XHRrZXk9e2dsb2MuaWR9XG5cdFx0XHRnZW9sb2NhdGlvbj17Z2xvY31cblx0XHRcdGV2ZW50cz17dGhpcy5wcm9wcy5ldmVudHN9XG5cdFx0Lz5cblx0fVxuXHRyZW5kZXJQYWdlcigpe1xuXHRcdHJldHVybiA8ZGl2XG5cdFx0XHRjbGFzc05hbWU9XCJnZW9sb2NhdGlvbnNfX3BhZ2VyXCI+XG5cdFx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImdlb2xvY2F0aW9uc19fcGFnZXItcHJldlwiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLm9uQ2hhbmdlUGFnZS5iaW5kKHRoaXMsLTEpfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdCZsYXF1bztcblx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHR7dGhpcy5zdGF0ZS5wYWdlfSAvIHt0aGlzLm1heF9wYWdlfVxuXHRcdFx0PHNwYW5cblx0XHRcdFx0Y2xhc3NOYW1lPVwiZ2VvbG9jYXRpb25zX19wYWdlci1uZXh0XCJcblx0XHRcdFx0b25DbGljaz17dGhpcy5vbkNoYW5nZVBhZ2UuYmluZCh0aGlzLDEpfVxuXHRcdFx0PlxuXHRcdFx0XHRcdFx0JnJhcXVvO1xuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHQ8L2Rpdj5cblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgdHlwZXMgPSBbJ2dlb2NvZGUnLCdyZWdpb25zJywnY2l0aWVzJ107XG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogcGFnZXIgb3Igbm8gcGFnZXIgaXMgdGhlIHF1ZXN0aW9uXG5cdFx0ICovXG5cdFx0bGV0IGl0ZW1zID0gW107XG5cdFx0bGV0IHN0YXJ0ID0gMDtcblx0XHRsZXQgZW5kID0gdGhpcy5wcm9wcy5nZW9sb2NhdGlvbnMubGVuZ3RoO1xuXHRcdGxldCBwYWdlciA9IG51bGw7XG5cdFx0XG5cdFx0aWYodGhpcy5wcm9wcy5wb3N0c19wZXJfcGFnZSA+IDApe1xuXHRcdFx0c3RhcnQgPSAodGhpcy5zdGF0ZS5wYWdlLTEpKnRoaXMucHJvcHMucG9zdHNfcGVyX3BhZ2U7XG5cdFx0XHRlbmQgPSBzdGFydCt0aGlzLnByb3BzLnBvc3RzX3Blcl9wYWdlO1xuXHRcdFx0aWYoZW5kID49IHRoaXMucHJvcHMuZ2VvbG9jYXRpb25zLmxlbmd0aCkgZW5kID0gdGhpcy5wcm9wcy5nZW9sb2NhdGlvbnMubGVuZ3RoO1xuXHRcdFx0cGFnZXIgPSAgdGhpcy5yZW5kZXJQYWdlcigpO1xuXHRcdH1cblx0XHRcblx0XHQvKipcblx0XHQgKiBnZXQgaXRlbXNcblx0XHQgKi9cblx0XHRmb3IobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKXtcblx0XHRcdGNvbnN0IF9nZW9sb2NhdGlvbiA9IHRoaXMucHJvcHMuZ2VvbG9jYXRpb25zW2ldO1xuXHRcdFx0aWYodGhpcy5zdGF0ZS5nbG9jX2FjdGl2ZSA+IDAgJiYgdGhpcy5zdGF0ZS5nbG9jX2FjdGl2ZSA9PT0gX2dlb2xvY2F0aW9uLmlkKXtcblx0XHRcdFx0aXRlbXMudW5zaGlmdCh0aGlzLnJlbmRlckl0ZW0oX2dlb2xvY2F0aW9uKSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGl0ZW1zLnB1c2godGhpcy5yZW5kZXJJdGVtKF9nZW9sb2NhdGlvbikpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT1cImdlb2xvY2F0aW9uc19fbGlzdC13cmFwcGVyXCI+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZ2VvbG9jYXRpb25zX19saXN0XCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdHtpdGVtc31cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0XHR7cGFnZXJ9XG5cdFx0XHRcdFxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cdFxuXHQvKipcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCAqIGV2ZW50c1xuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICovXG5cdG9uTWFya2VyQ2xpY2tlZChnbG9jKXtcblx0XHR0aGlzLnNldFN0YXRlKHtnbG9jX2FjdGl2ZTogZ2xvYy5pZH0pO1xuXHRcdC8vIGxldCBhY3RpdmUgPSBmYWxzZTtcblx0XHQvLyBpZihnbG9jLmlkID09IHRoaXMucHJvcHMuZ2VvbG9jYXRpb24uaWQpe1xuXHRcdC8vIFx0YWN0aXZlID0gdHJ1ZTtcblx0XHQvLyB9O1xuXHRcdC8vIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZTogYWN0aXZlfSk7XG5cdH1cblx0b25NYXBDbGlja2VkKGluZm8pe1xuXHRcdHRoaXMuc2V0U3RhdGUoe2dsb2NfYWN0aXZlOiAtMX0pO1xuXHR9XG5cdFxuXHRvbkNoYW5nZVBhZ2UoZGlmZil7XG5cdFx0dGhpcy5zdGF0ZS5wYWdlID0gdGhpcy5zdGF0ZS5wYWdlK2RpZmY7XG5cdFx0aWYodGhpcy5zdGF0ZS5wYWdlIDwgMSkgdGhpcy5zdGF0ZS5wYWdlID0gMTtcblx0XHRpZih0aGlzLnN0YXRlLnBhZ2UgPj0gdGhpcy5tYXhfcGFnZSl7XG5cdFx0XHR0aGlzLnN0YXRlLnBhZ2UgPSB0aGlzLm1heF9wYWdlO1xuXHRcdH1cblxuXHRcdHRoaXMuc2V0U3RhdGUoe3BhZ2U6IHRoaXMuc3RhdGUucGFnZX0pO1xuXHR9XG5cdFxuXHRcblx0LyoqXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKiBvdGhlciBmdW5jdGlvbnNcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCAqL1xufVxuR2VvbG9jYXRpb25zTGlzdC5kZWZhdWx0UHJvcHMgPSB7XG5cdHBvc3RzX3Blcl9wYWdlOiAtMSxcbn1cbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtHbWFwcywgTWFya2VyLCBJbmZvV2luZG93LCBDaXJjbGV9IGZyb20gJ3JlYWN0LWdtYXBzJztcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3ViaWxhYnMvcmVhY3QtZ2Vvc3VnZ2VzdFxuaW1wb3J0IEdlb3N1Z2dlc3QgZnJvbSAncmVhY3QtZ2Vvc3VnZ2VzdCc7XG5cbmltcG9ydCBHZW9sb2NhdGlvbnNMaXN0IGZyb20gJy4vZ2VvbG9jYXRpb25zLWxpc3QuanN4JztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICcuL2dlb2xvY2F0aW9uLWxpc3QtaXRlbS5qc3gnO1xuaW1wb3J0IEdlb01hcmtlciBmcm9tICcuL2dlb2xvY2F0aW9uLW1hcmtlci5qc3gnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuL2dlb2xvY2F0aW9uLWZpbHRlci5qc3gnO1xuXG5pbXBvcnQgRXZlbnRzIGZyb20gJ2V2ZW50cyc7XG5pbXBvcnQgZ2VvX2V2ZW50cyBmcm9tICcuLi9oZWxwZXIvZXZlbnRzLmpzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZW9sb2NhdGlvbnMgZXh0ZW5kcyBDb21wb25lbnR7XG5cdFxuXHQvKipcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCAqIGxpZmVjeWNsZVxuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICovXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0XG5cdFx0dGhpcy5ib3VuZHMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCk7XG5cdFx0XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHR5cGVzOnt9LFxuXHRcdFx0dHlwZXNfYWN0aXZlOiB7fSxcblx0XHR9O1xuXHRcdFxuXHRcdGZvcihsZXQga2V5IGluIHByb3BzLmdlb2xvY2F0aW9ucyl7XG5cdFx0XHRpZighcHJvcHMuZ2VvbG9jYXRpb25zLmhhc093blByb3BlcnR5KGtleSkpIGNvbnRpbnVlO1xuXHRcdFx0bGV0IHR5cGUgPSBwcm9wcy5nZW9sb2NhdGlvbnNba2V5XS50eXBlO1xuXHRcdFx0aWYodHlwZS5zbHVnICE9PSBcIlwiKSB0aGlzLnN0YXRlLnR5cGVzW3R5cGUuc2x1Z10gPSB0eXBlLmxhYmVsO1xuXHRcdH1cblx0XHRcblx0XHQvKipcblx0XHQgKiBnbG9iYWwgZXZlbnRzXG5cdFx0ICogQHR5cGUge0V2ZW50RW1pdHRlcn1cblx0XHQgKi9cblx0XHR0aGlzLl9ldmVudHMgPSBuZXcgRXZlbnRzLkV2ZW50RW1pdHRlcigpO1xuXHRcdHRoaXMuX2V2ZW50cy5zZXRNYXhMaXN0ZW5lcnMoMCk7XG5cdFx0XG5cdFx0dGhpcy5fZXZlbnRzLmFkZExpc3RlbmVyKGdlb19ldmVudHMuTElTVF9JVEVNX0hPVkVSLHRoaXMub25MaXN0SXRlbUhvdmVyLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuX2V2ZW50cy5hZGRMaXN0ZW5lcihnZW9fZXZlbnRzLkxJU1RfSVRFTV9DTElDS0VELHRoaXMub25MaXN0SXRlbUNsaWNrZWQuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5fZXZlbnRzLmFkZExpc3RlbmVyKGdlb19ldmVudHMuUExBQ0VTX1JFU1VMVCx0aGlzLm9uUGxhY2VzUmVzdWx0LmJpbmQodGhpcykpO1xuXHRcdHRoaXMuX2V2ZW50cy5hZGRMaXN0ZW5lcihnZW9fZXZlbnRzLk1BUF9NQVJLRVJfQURERUQsdGhpcy5vbk1hcmtlckFkZGVkLmJpbmQodGhpcykpO1xuXG5cdFx0Ly8gaGFzaCBjaGVja3Ncblx0XHR0aGlzLl9oYXNJbml0aWFsWm9vbUhhc2ggPSAodHlwZW9mIHRoaXMuZ2V0SGFzaFpvb20oKSAhPT0gdHlwZW9mIHVuZGVmaW5lZCk7XG5cdFx0dGhpcy5faGFzSW5pdGlhbENlbnRlckhhc2ggPSAodHlwZW9mIHRoaXMuZ2V0SGFzaENlbnRlcigpICE9PSB0eXBlb2YgdW5kZWZpbmVkKTtcblxuXHR9XG5cdC8qKlxuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICogcmVuZGVyaW5nXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKi9cblx0cmVuZGVyTWFya2VyKGdsb2Mpe1xuXHRcdHJldHVybiA8R2VvTWFya2VyXG5cdFx0XHRrZXk9e2dsb2MuaWR9XG5cdFx0XHRnZW9sb2NhdGlvbj17Z2xvY31cblx0XHRcdGxhdD17Z2xvYy5sYXR9XG5cdFx0XHRsbmc9e2dsb2MubG5nfVxuXHRcdFx0b25DbGljaz17dGhpcy5vbkNsaWNrTWFya2VyLmJpbmQodGhpcywgZ2xvYyl9XG5cdFx0XHRvbk1vdXNlT3Zlcj17dGhpcy5vbk1vdXNlSG92ZXJNYXJrZXIuYmluZCh0aGlzLCBnbG9jLCB0cnVlKX1cblx0XHRcdG9uTW91c2VPdXQ9e3RoaXMub25Nb3VzZUhvdmVyTWFya2VyLmJpbmQodGhpcywgZ2xvYywgZmFsc2UpfVxuXHRcdCAgICBldmVudHM9e3RoaXMuX2V2ZW50c31cblx0XHQvPlxuXHR9XG5cdFxuXHRyZW5kZXIoKXtcblx0XHRpZih0aGlzLnByb3BzLmdlb2xvY2F0aW9ucy5sZW5ndGggPCAyKXtcblx0XHRcdHJldHVybiB0aGlzLnJlbmRlclNpbmdsZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5yZW5kZXJNdWx0aSgpO1xuXHR9XG5cdFxuXHRyZW5kZXJTaW5nbGUoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdlxuXHRcdFx0XHRjbGFzc05hbWU9XCJnZW9sb2NhdGlvbnMgaXMtc2luZ2xlLWFkZHJlc3NcIlxuXHRcdFx0PlxuXHRcdFx0XHR7dGhpcy5yZW5kZXJNYXBzKCl9XG5cdFx0XHRcdDxMaXN0SXRlbVxuXHRcdFx0XHRcdGlzX3NpbmdsZT17dHJ1ZX1cblx0XHRcdFx0XHRnZW9sb2NhdGlvbj17dGhpcy5wcm9wcy5nZW9sb2NhdGlvbnNbMF19XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblx0XG5cdHJlbmRlck11bHRpKG1hcmtlcnMpe1xuXHRcdGNvbnN0IHtoaWRlX2xpc3QsIGhpZGVfc2VhcmNofSA9IHRoaXMucHJvcHM7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3NOYW1lPXtgZ2VvbG9jYXRpb25zICR7KGhpZGVfbGlzdCk/IFwiXCI6IFwic2hvdy1saXN0XCJ9ICR7KGhpZGVfc2VhcmNoKT8gXCJcIjogXCJzaG93LXNlYXJjaFwifWB9XG5cdFx0XHQ+XG5cdFx0XHRcdHt0aGlzLnJlbmRlck1hcHMoKX1cblx0XHRcdFx0e3RoaXMucmVuZGVyU2VhcmNoKCl9XG5cdFx0XHRcdHt0aGlzLnJlbmRlckZpbHRlcigpfVxuXHRcdFx0XHR7dGhpcy5yZW5kZXJMaXN0KCl9XG5cdFx0XHRcblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXHRcblx0cmVuZGVyTWFwcygpe1xuXHRcdGNvbnN0IGdlb2xvY3MgPSB0aGlzLnByb3BzLmdlb2xvY2F0aW9ucztcblx0XHRcblx0XHRsZXQgbWFya2VycyA9IFtdO1xuXHRcdGxldCBsYXRzID0gW107XG5cdFx0bGV0IGxuZ3MgPSBbXTtcblx0XHRcblx0XHRsZXQgdHlwZXMgPSB7fTtcblx0XHRcblx0XHRsZXQgY2VudGVyX2xhdCA9IDA7XG5cdFx0bGV0IGNlbnRlcl9sbmcgPSAwO1xuXHRcdFxuXHRcdGlmKHRoaXMucHJvcHMuZGVmYXVsdF9wbGFjZSl7XG5cdFx0XHRsZXQgcGxhY2UgPSB0aGlzLnByb3BzLmRlZmF1bHRfcGxhY2U7XG5cdFx0XHRjZW50ZXJfbGF0ID0gcGxhY2UuZ2VvbWV0cnkubG9jYXRpb24ubGF0O1xuXHRcdFx0Y2VudGVyX2xuZyA9IHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uLmxuZztcblx0XHRcdC8vIFRPRE86IGZpbmQgbmVhcmVzdCBhbmQgYWRkIHRvIGJvdW5kc1xuXHRcdFx0bGV0IG5lYXJlc3QgPSBudWxsO1xuXHRcdFx0bGV0IG5lYXJlc3RfZGlzdGFuY2UgPSAtMTtcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCBnZW9sb2NzLmxlbmd0aDsgaSsrKXtcblx0XHRcdFx0bGV0IGRpc3RhbmNlID0gR2VvbG9jYXRpb25zLmRpc3RhbmNlKGdlb2xvY3NbaV0ubGF0LCBnZW9sb2NzW2ldLmxuZywgY2VudGVyX2xhdCwgY2VudGVyX2xuZyk7XG5cdFx0XHRcdGlmKG5lYXJlc3RfZGlzdGFuY2UgPCAwIHx8IG5lYXJlc3RfZGlzdGFuY2UgPiBkaXN0YW5jZSl7XG5cdFx0XHRcdFx0bmVhcmVzdCA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoZ2VvbG9jc1tpXS5sYXQsIGdlb2xvY3NbaV0ubG5nKTtcblx0XHRcdFx0XHRuZWFyZXN0X2Rpc3RhbmNlID0gIGRpc3RhbmNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmJvdW5kcyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMocGxhY2UuZ2VvbWV0cnkuYm91bmRzLnNvdXRod2VzdCwgcGxhY2UuZ2VvbWV0cnkuYm91bmRzLm5vcnRoZWFzdCk7XG5cdFx0XHR0aGlzLmJvdW5kcy5leHRlbmQobmVhcmVzdCk7XG5cdFx0XHRcblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IGdlb2xvY3MubGVuZ3RoOyBpKyspe1xuXHRcdFx0XHR0aGlzLmJvdW5kcy5leHRlbmQobmV3IGdvb2dsZS5tYXBzLkxhdExuZyhnZW9sb2NzW2ldLmxhdCwgZ2VvbG9jc1tpXS5sbmcpKTtcblx0XHRcdFx0bGF0cy5wdXNoKGdlb2xvY3NbaV0ubGF0KTtcblx0XHRcdFx0bG5ncy5wdXNoKGdlb2xvY3NbaV0ubG5nKTtcblx0XHRcdH1cblx0XHRcdGNlbnRlcl9sYXQgPSAoTWF0aC5tYXgoLi4ubGF0cykrTWF0aC5taW4oLi4ubGF0cykpLzI7XG5cdFx0XHRjZW50ZXJfbG5nID0gKE1hdGgubWF4KC4uLmxuZ3MpK01hdGgubWluKC4uLmxuZ3MpKS8yO1xuXHRcdH1cblxuXHRcdGlmKHRoaXMuX2hhc0luaXRpYWxDZW50ZXJIYXNoKXtcblx0XHRcdGNlbnRlcl9sYXQgPSB0aGlzLmdldEhhc2hDZW50ZXIoKS5sYXQ7XG5cdFx0XHRjZW50ZXJfbG5nID0gdGhpcy5nZXRIYXNoQ2VudGVyKCkubG5nO1xuXHRcdH1cblxuXHRcdGxldCB6b29tID0gMTI7XG5cdFx0aWYodGhpcy5faGFzSW5pdGlhbFpvb21IYXNoKSB6b29tID0gcGFyc2VJbnQodGhpcy5nZXRIYXNoWm9vbSgpKTtcblx0XHRcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgZ2VvbG9jcy5sZW5ndGg7IGkrKyl7XG5cdFx0XHRtYXJrZXJzLnB1c2godGhpcy5yZW5kZXJNYXJrZXIoZ2VvbG9jc1tpXSkpO1xuXHRcdH1cblxuXHRcdHJldHVybihcblx0XHRcdDxHbWFwc1xuXHRcdFx0XHRjbGFzc05hbWU9XCJnZW9sb2NhdGlvbnNfX21hcFwiXG5cdFx0XHRcdGxhdD17Y2VudGVyX2xhdH1cblx0XHRcdFx0bG5nPXtjZW50ZXJfbG5nfVxuXHRcdFx0XHR6b29tPXt6b29tfVxuXHRcdFx0XHRwYXJhbXM9e3t2OiAnMy5leHAnLCBrZXk6IHRoaXMucHJvcHMuYXBpa2V5fX1cblx0XHRcdFx0c3R5bGVzPXt0aGlzLnByb3BzLnN0eWxlc31cblx0XHRcdFx0b25NYXBDcmVhdGVkPXt0aGlzLm9uTWFwQ3JlYXRlZC5iaW5kKHRoaXMpfVxuXHRcdFx0XHRvbkNlbnRlckNoYW5nZWQ9e3RoaXMub25NYXBDZW50ZXJDaGFuZ2VkLmJpbmQodGhpcyl9XG5cdFx0XHRcdG9uWm9vbUNoYW5nZWQ9e3RoaXMub25NYXBab29tQ2hhbmdlZC5iaW5kKHRoaXMpfVxuXHRcdFx0ICAgIG9uQ2xpY2s9e3RoaXMub25NYXBDbGljay5iaW5kKHRoaXMpfVxuXHRcdFx0XHRvblNlYXJjaFxuXHRcdFx0PlxuXHRcdFx0XHR7bWFya2Vyc31cblx0XHRcdDwvR21hcHM+XG5cdFx0KVxuXHR9XG5cdFxuXHRyZW5kZXJTZWFyY2goKXtcblxuXHRcdGxldCBnZW9zdWdnZXN0ID0gPEdlb3N1Z2dlc3Rcblx0XHRcdHJlZj17ZWw9PiB0aGlzLl9nZW9TdWdnZXN0PWVsIH1cblx0XHRcdHBsYWNlaG9sZGVyPVwiU3VjaGUgaW4gZGVyIE7DpGhlXCJcblx0XHRcdGNvdW50cnk9XCJkZVwiXG5cdFx0XHRpbml0aWFsVmFsdWU9eyh0aGlzLnByb3BzLmRlZmF1bHRfcGxhY2UpP3RoaXMucHJvcHMuZGVmYXVsdF9wbGFjZS5mb3JtYXR0ZWRfYWRkcmVzczpcIlwifVxuXHRcdFx0b25TdWdnZXN0U2VsZWN0PXt0aGlzLm9uU3VnZ2VzdFNlbGVjdC5iaW5kKHRoaXMpfVxuXHRcdFx0b25DaGFuZ2U9eyh2YWx1ZSk9Pntcblx0XHRcdFx0Ly90aGlzLnNldEhhc2hTZWFyY2godmFsdWUpXG5cdFx0XHRcdH19XG5cdFx0Lz5cblx0XHRcblx0XHQvLyBnZW9zdWdnZXN0LnVwZGF0ZShcIjMzNjAxXCIpO1xuXHRcdHJldHVybiB0aGlzLnJlbmRlcklmKCF0aGlzLnByb3BzLmhpZGVfc2VhcmNoLChcblx0XHRcdGdlb3N1Z2dlc3Rcblx0XHQpKTtcblx0fVxuXHRcblx0cmVuZGVyTGlzdCgpe1xuXHRcdHJldHVybiB0aGlzLnJlbmRlcklmKCF0aGlzLnByb3BzLmhpZGVfbGlzdCwoXG5cdFx0XHQ8R2VvbG9jYXRpb25zTGlzdFxuXHRcdFx0XHRnZW9sb2NhdGlvbnM9e3RoaXMucHJvcHMuZ2VvbG9jYXRpb25zfVxuXHRcdFx0XHRldmVudHM9e3RoaXMuX2V2ZW50c31cblx0XHRcdC8+XG5cdFx0KSk7XG5cdH1cblx0XG5cdHJlbmRlckZpbHRlcigpe1xuXHRcdHJldHVybiB0aGlzLnJlbmRlcklmKCghdGhpcy5wcm9wcy5oaWRlX2ZpbHRlciAmJiBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLnR5cGVzKS5sZW5ndGggPiAwKSwoXG5cdFx0XHQ8RmlsdGVyXG5cdFx0XHRcdGl0ZW1zPXt0aGlzLnN0YXRlLnR5cGVzfVxuXHRcdFx0XHRvblRvZ2dsZUFjdGl2ZT17dGhpcy5vblRvZ2dsZVR5cGVBY3RpdmUuYmluZCh0aGlzKX1cblx0XHRcdC8+XG5cdFx0KSk7XG5cdH1cblx0XG5cdHJlbmRlcklmKHJlbmRlciwgZWxlbWVudCl7XG5cdFx0cmV0dXJuIChyZW5kZXIpPyBlbGVtZW50OiBudWxsO1xuXHR9XG5cdFxuXHQvKipcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCAqIGV2ZW50c1xuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICovXG5cdG9uTWFwQ3JlYXRlZChtYXApIHtcblx0XHR0aGlzLm1hcCA9IG1hcDtcblxuXHRcdGlmKCF0aGlzLl9oYXNJbml0aWFsQ2VudGVySGFzaCl7XG5cdFx0XHRtYXAuZml0Qm91bmRzKHRoaXMuYm91bmRzKTtcblx0XHR9XG5cblx0XHRtYXAuc2V0T3B0aW9ucyh7XG5cdFx0XHRkaXNhYmxlRGVmYXVsdFVJOiBmYWxzZSxcblx0XHRcdG1hcFR5cGVDb250cm9sOiBmYWxzZSxcblx0XHR9KTtcblx0XHR0aGlzLl9ldmVudHMuZW1pdChnZW9fZXZlbnRzLk1BUFNfUkVBRFksIG1hcCk7XG5cdFx0Y29uc3QgcHJvcHMgPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IGxpc3RlbmVyID0gZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFwLCBcImlkbGVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAobWFwLmdldFpvb20oKSA+IHByb3BzLm1pbl96b29tKSBtYXAuc2V0Wm9vbShwcm9wcy5taW5fem9vbSk7XG5cdFx0XHRnb29nbGUubWFwcy5ldmVudC5yZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcik7XG5cdFx0fSk7XG5cdFx0dGhpcy5vbk1hcENlbnRlckNoYW5nZWQoKTtcblx0XHR0aGlzLm9uUmVzdG9yZVN0YXRlKCk7XG5cdH1cblxuXHRvblJlc3RvcmVTdGF0ZSgpe1xuXG5cdFx0Y29uc3QgaWQgPSB0aGlzLmdldEhhc2hJZCgpO1xuXHRcdGlmKGlkKXtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IHRoaXMucHJvcHMuZ2VvbG9jYXRpb25zLmZpbmQoIChnZW9sb2MpPT4gZ2VvbG9jLmlkID09PSBwYXJzZUludChpZCkgKTtcblx0XHRcdGlmKHJlc3VsdCl7XG5cblx0XHRcdFx0Ly90aGlzLl9nZW9TdWdnZXN0LnVwZGF0ZShcIk9zbmFicsO8Y2tcIik7XG5cdFx0XHRcdC8vIHRoaXMuX2dlb1N1Z2dlc3Quc2VsZWN0U3VnZ2VzdCgpO1xuXHRcdFx0XHQvLyB0aGlzLl9ldmVudHMuZW1pdChnZW9fZXZlbnRzLkxJU1RfSVRFTV9DTElDS0VELCByZXN1bHQpO1xuXHRcdFx0XHR0aGlzLl9ldmVudHMuZW1pdChnZW9fZXZlbnRzLk1BUF9NQVJLRVJfQ0xJQ0tFRCwgcmVzdWx0KTtcblxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRcblx0b25NYXJrZXJBZGRlZChtYXJrZXIsIGdsb2Mpe1xuXHRcdC8vIHRoaXMuYm91bmRzLmV4dGVuZChtYXJrZXIpO1xuXHRcdC8vIHRoaXMubWFwLmZpdEJvdW5kcyh0aGlzLmJvdW5kcyk7XG5cdH1cblx0XG5cdG9uTWFwQ2VudGVyQ2hhbmdlZCgpe1xuXHRcdC8vIHByZXZlbnQgdG9vIG1hbnkgZXZlbnRzIHdpdGggdGltZW91dFxuXHRcdGNsZWFyVGltZW91dCh0aGlzLl9jZW50ZXJfY2hhbmdlX3RpbWVvdXQpO1xuXHRcdHRoaXMuX2NlbnRlcl9jaGFuZ2VfdGltZW91dCA9IHNldFRpbWVvdXQoKCk9Pntcblx0XHRcdGlmKHRoaXMubWFwICE9IG51bGwgJiYgdGhpcy5tYXAuZ2V0Qm91bmRzKCkgIT0gbnVsbCl7XG5cdFx0XHRcdHRoaXMuX2V2ZW50cy5lbWl0KGdlb19ldmVudHMuTUFQX0NFTlRFUl9DSEFOR0VELCB0aGlzLm1hcC5nZXRCb3VuZHMoKSk7XG5cdFx0XHRcdHRoaXMuc2V0SGFzaFZhbHVlKFwiem9vbVwiLCB0aGlzLm1hcC56b29tKTtcblx0XHRcdFx0dGhpcy5zZXRIYXNoQ2VudGVyKHRoaXMubWFwLmNlbnRlci5sYXQoKSwgdGhpcy5tYXAuY2VudGVyLmxuZygpKTtcblx0XHRcdH1cblx0XHR9LDYwMCk7XG5cdH1cblx0XG5cdG9uTWFwWm9vbUNoYW5nZWQoKXtcblx0XHR0aGlzLm9uTWFwQ2VudGVyQ2hhbmdlZCgpO1xuXHRcdHRoaXMuc2V0SGFzaFZhbHVlKFwiem9vbVwiLCB0aGlzLm1hcC56b29tKTtcblx0fVxuXHRvbk1hcENsaWNrKGluZm8pe1xuXHRcdHRoaXMuX2V2ZW50cy5lbWl0KGdlb19ldmVudHMuTUFQX0NMSUNLRUQsIGluZm8pO1xuXHR9XG5cdG9uQ2xpY2tNYXJrZXIoZ2xvYyl7XG5cdFx0dGhpcy5fZXZlbnRzLmVtaXQoZ2VvX2V2ZW50cy5NQVBfTUFSS0VSX0NMSUNLRUQsZ2xvYyk7XG5cdFx0dGhpcy5zZXRIYXNoSWQoZ2xvYy5pZCk7XG5cdH1cblx0b25Nb3VzZUhvdmVyTWFya2VyKGdsb2MsIG92ZXIpe1xuXHRcdHRoaXMuX2V2ZW50cy5lbWl0KGdlb19ldmVudHMuTUFQX01BUktFUl9IT1ZFUixnbG9jLCBvdmVyKTtcblx0fVxuXHRvbkdvdG9Mb2NhdGlvbihsb2NhdGlvbil7XG5cdFx0Y29uc3QgbGF0TG5nID0gdGhpcy5nZXRMYXRMbmcobG9jYXRpb24pO1xuXHRcdGlmKGxhdExuZyAhPT0gZmFsc2UpIHRoaXMubWFwLnBhblRvKG5ldyBnb29nbGUubWFwcy5MYXRMbmcobGF0TG5nKSk7XG5cdH1cblx0b25MaXN0SXRlbUhvdmVyKGxvY2F0aW9uKXtcblx0XHQvLyB0aGlzLm1hcC5wYW5UbyhuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKHtsYXQ6IGxvY2F0aW9uLmxhdCwgbG5nOiBsb2NhdGlvbi5sbmd9KSk7XG5cdH1cblx0b25MaXN0SXRlbUNsaWNrZWQoZ2VvbG9jKXtcblx0XHRpZih0aGlzLm1hcC5nZXRab29tKCkgPCAxMil7XG5cdFx0XHR0aGlzLm1hcC5zZXRab29tKDEyKTtcblx0XHR9XG5cdFx0Y29uc3QgbGF0TG5nID0gdGhpcy5nZXRMYXRMbmcoZ2VvbG9jKTtcblx0XHRpZihsYXRMbmcgIT09IGZhbHNlKSB0aGlzLm1hcC5wYW5UbyhuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGxhdExuZykpO1xuXHRcdHRoaXMuc2V0SGFzaElkKGdlb2xvYy5pZCk7XG5cdH1cblx0b25QbGFjZXNSZXN1bHQoc3VnZ2VzdCl7XG5cdFx0Y29uc3QgbG9jYXRpb24gPSBzdWdnZXN0LmxvY2F0aW9uO1xuXHRcdGNvbnN0IGJvdW5kcyA9IHN1Z2dlc3QuZ21hcHMuZ2VvbWV0cnkuYm91bmRzO1xuXHRcdC8vIHRoaXMubWFwLnBhblRvQm91bmRzKGJvdW5kcyk7IE5PIFpPT01JTkdcblx0XHRpZihib3VuZHMpe1xuXHRcdFx0dGhpcy5tYXAuZml0Qm91bmRzKGJvdW5kcyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmKHRoaXMubWFwLmdldFpvb20oKSA8IDEyKXtcblx0XHRcdFx0dGhpcy5tYXAuc2V0Wm9vbSgxMik7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBsYXRMbmcgPSB0aGlzLmdldExhdExuZyhsb2NhdGlvbik7XG5cdFx0XHRpZihsYXRMbmcgIT09IGZhbHNlKSB0aGlzLm1hcC5wYW5UbyhuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGxhdExuZykpO1xuXHRcdH1cblx0XHRcblx0fVxuXHRvblN1Z2dlc3RTZWxlY3Qoc3VnZ2VzdCl7XG5cdFx0dGhpcy5fZXZlbnRzLmVtaXQoZ2VvX2V2ZW50cy5QTEFDRVNfUkVTVUxULCBzdWdnZXN0KTtcblx0fVxuXHRvblRvZ2dsZVR5cGVBY3RpdmUoc2x1ZywgaXNhY3RpdmUpe1xuXHRcdHRoaXMuX2V2ZW50cy5lbWl0KGdlb19ldmVudHMuVFlQRV9BQ1RJVkVfQ0hBTkdFLCBzbHVnLCBpc2FjdGl2ZSk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICogb3RoZXIgZnVuY3Rpb25zXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKi9cblx0Z2V0TGF0TG5nKGdlb2xvYyl7XG5cdFx0Y29uc3QgbGF0ID0gcGFyc2VGbG9hdChnZW9sb2MubGF0KTtcblx0XHRpZihsYXQrXCJcIiAhPT0gZ2VvbG9jLmxhdCkgcmV0dXJuIGZhbHNlO1xuXHRcdGNvbnN0IGxuZyA9IHBhcnNlRmxvYXQoZ2VvbG9jLmxuZyk7XG5cdFx0aWYobG5nK1wiXCIgIT09IGdlb2xvYy5sbmcpIHJldHVybiBmYWxzZTtcblx0XHRyZXR1cm4ge2xhdCxsbmd9XG5cdH1cblx0c3RhdGljIGRpc3RhbmNlKGxhdDEsIGxuZzEsIGxhdDIsIGxuZzIpIHtcblx0XHRsZXQgZGlmZl9sYXQgPSBNYXRoLmFicyhsYXQxLWxhdDIpO1xuXHRcdGxldCBkaWZmX2xuZyA9IE1hdGguYWJzKGxuZzEtbG5nMik7XG5cdFx0cmV0dXJuIE1hdGguc3FydCggKGRpZmZfbGF0KmRpZmZfbGF0KSArIChkaWZmX2xuZypkaWZmX2xuZykgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICogdXJsIGhhc2ggZnVuY3Rpb25zXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKi9cblx0c2V0SGFzaElkKHZhbHVlKXtcblx0XHR0aGlzLnNldEhhc2hWYWx1ZShcImlkXCIsIHZhbHVlKTtcblx0fVxuXHRnZXRIYXNoSWQoKXtcblx0XHRyZXR1cm4gdGhpcy5nZXRIYXNoVmFsdWUoXCJpZFwiKTtcblx0fVxuXHRzZXRIYXNoQ2VudGVyKGxhdCwgbG5nKXtcblx0XHR0aGlzLnNldEhhc2hWYWx1ZShcImxhdFwiLCBsYXQpO1xuXHRcdHRoaXMuc2V0SGFzaFZhbHVlKFwibG5nXCIsIGxuZyk7XG5cdH1cblx0Z2V0SGFzaENlbnRlcigpe1xuXHRcdGNvbnN0IHtsYXQsIGxuZ30gPSB0aGlzLmdldEhhc2hWYWx1ZXMoKTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0dHlwZW9mIGxhdCA9PT0gdHlwZW9mIHVuZGVmaW5lZCB8fCB0eXBlb2YgbG5nID09PSB0eXBlb2YgdW5kZWZpbmVkXG5cdFx0KSA/IHVuZGVmaW5lZCA6IHtsYXQsIGxuZ307XG5cdH1cblx0c2V0SGFzaFpvb20oem9vbSl7XG5cdFx0dGhpcy5zZXRIYXNoVmFsdWUoXCJ6b29tXCIsIHpvb20pO1xuXHR9XG5cdGdldEhhc2hab29tKCl7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0SGFzaFZhbHVlKFwiem9vbVwiKTtcblx0fVxuXHRzZXRIYXNoU2VhcmNoKHZhbHVlKXtcblx0XHR0aGlzLnNldEhhc2hWYWx1ZShcInNcIiwgdmFsdWUpO1xuXHR9XG5cdGdldEhhc2hTZWFyY2goKXtcblx0XHRyZXR1cm4gdGhpcy5nZXRIYXNoVmFsdWUoXCJzXCIpO1xuXHR9XG5cdGdldEhhc2hWYWx1ZXMoKXtcblx0XHRjb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG5cdFx0aWYoaGFzaC5pbmRleE9mKFwiI1wiKSAhPT0gMCB8fCBoYXNoLmxlbmd0aCA8IDIpIHJldHVybiB7fTtcblx0XHRjb25zdCBwYXJhbXMgPSBoYXNoLnN1YnN0cigxKTtcblx0XHRpZihwYXJhbXMuaW5kZXhPZihcIj1cIikgPCAxKSByZXR1cm4ge307XG5cdFx0Y29uc3QgaXRlbXMgPSBoYXNoLnN1YnN0cigxKS5zcGxpdChcIiZcIikubWFwKChwYWlyKT0+IHBhaXIuc3BsaXQoXCI9XCIpKTtcblx0XHRjb25zdCBvYmplY3QgPSB7fTtcblx0XHRpdGVtcy5mb3JFYWNoKChpdGVtKT0+e1xuXHRcdFx0aWYoXG5cdFx0XHRcdHR5cGVvZiBpdGVtWzBdICE9PSB0eXBlb2YgdW5kZWZpbmVkICYmIGl0ZW1bMF0ubGVuZ3RoID4gMFxuXHRcdFx0XHQmJlxuXHRcdFx0XHR0eXBlb2YgaXRlbVsxXSAhPT0gdHlwZW9mIHVuZGVmaW5lZCAmJiBpdGVtWzFdLmxlbmd0aCA+IDBcblx0XHRcdCl7XG5cdFx0XHRcdG9iamVjdFtpdGVtWzBdXSA9IGl0ZW1bMV07XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0cmV0dXJuIG9iamVjdDtcblxuXHR9XG5cdGdldEhhc2hWYWx1ZShrZXkpe1xuXHRcdHJldHVybiB0aGlzLmdldEhhc2hWYWx1ZXMoKVtrZXldO1xuXHR9XG5cdHNldEhhc2hWYWx1ZXMob2JqKXtcblx0XHRsZXQgc3RhdGUgPSBcIlwiO1xuXHRcdGlmKE9iamVjdC5rZXlzKG9iaikubGVuZ3RoID4gMCl7XG5cdFx0XHRzdGF0ZSA9IFwiI1wiK09iamVjdC5rZXlzKG9iaikubWFwKChrZXkpPT4ga2V5K1wiPVwiK29ialtrZXldICkuam9pbihcIiZcIik7XG5cdFx0fVxuXHRcdGhpc3RvcnkucmVwbGFjZVN0YXRlKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBzdGF0ZSk7XG5cdH1cblx0c2V0SGFzaFZhbHVlKGtleSwgdmFsdWUpe1xuXHRcdGNvbnN0IHZhbHVlcyA9IHRoaXMuZ2V0SGFzaFZhbHVlcygpO1xuXHRcdHZhbHVlc1trZXldID0gdmFsdWU7XG5cdFx0bGV0IHN0YXRlID0gXCJcIjtcblx0XHRpZihPYmplY3Qua2V5cyh2YWx1ZXMpLmxlbmd0aCA+IDApe1xuXHRcdFx0c3RhdGUgPSBcIiNcIitPYmplY3Qua2V5cyh2YWx1ZXMpXG5cdFx0XHQuZmlsdGVyKChrZXkpPT4gdHlwZW9mIHZhbHVlc1trZXldICE9PSB0eXBlb2YgdW5kZWZpbmVkICYmIHZhbHVlc1trZXldICE9PSBcIlwiIClcblx0XHRcdC5tYXAoKGtleSk9PiBrZXkrXCI9XCIrdmFsdWVzW2tleV0gKVxuXHRcdFx0LmpvaW4oXCImXCIpO1xuXHRcdH1cblx0XHRoaXN0b3J5LnJlcGxhY2VTdGF0ZSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgc3RhdGUpO1xuXHR9XG5cblxufVxuXG5HZW9sb2NhdGlvbnMuZGVmYXVsdFByb3BzID0ge1xuXHRnZW9sb2NhdGlvbnM6IFtdLFxuXHRkZWZhdWx0X3BsYWNlOiBudWxsLFxuXHRtaW5fem9vbTogMTUsXG5cdGhpZGVfbGlzdDogZmFsc2UsXG5cdGhpZGVfc2VhcmNoOiBmYWxzZSxcblx0aGlkZV9maWx0ZXI6IGZhbHNlLFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hlbHBlci9tYXAtc3R5bGVzLmpzJztcblxuaW1wb3J0IEdlb2xvY2F0aW9uc0FwcCBmcm9tICcuL2NvbXBvbmVudC9nZW9sb2NhdGlvbnMuanN4JztcblxuXG5jb25zdCBhcHBzID0gd2luZG93Lmdlb2xvY2F0aW9uc19kYXRhO1xuXG5jb25zdCBwbGFjZXMgPSB3aW5kb3cuZ2VvbG9jYXRpb25fcGxhY2VzO1xubGV0IGRlZmF1bHRfcGxhY2UgPSBudWxsO1xuaWYodHlwZW9mIHBsYWNlcyAhPT0gdHlwZW9mIHVuZGVmaW5lZCAmJiBwbGFjZXMgIT0gbnVsbCAmJiBwbGFjZXMubGVuZ3RoID4gMCl7XG5cdGNvbnNvbGUubG9nKFwiZm91bmQgcGxhY2VzXCIpO1xuXHRkZWZhdWx0X3BsYWNlID0gcGxhY2VzWzBdO1xufVxuXG5mb3IobGV0IGluZGV4IGluIGFwcHMgKXtcblx0XG5cdGlmKCFhcHBzLmhhc093blByb3BlcnR5KGluZGV4KSljb250aW51ZTtcblx0XG5cdFJlYWN0RE9NLnJlbmRlcihcblx0XHQ8R2VvbG9jYXRpb25zQXBwXG5cdFx0XHR6aXA9XCIzMzYwMlwiXG5cdFx0XHRnZW9sb2NhdGlvbnM9e2FwcHNbaW5kZXhdLmRhdGF9XG5cdFx0XHRkZWZhdWx0X3BsYWNlPXtkZWZhdWx0X3BsYWNlfVxuXHRcdFx0aGlkZV9saXN0PXthcHBzW2luZGV4XS5oaWRlX2xpc3R9XG5cdFx0XHRoaWRlX3NlYXJjaD17YXBwc1tpbmRleF0uaGlkZV9zZWFyY2h9XG5cdFx0XHRoaWRlX2ZpbHRlcj17YXBwc1tpbmRleF0uaGlkZV9maWx0ZXJ9XG5cdFx0XHRzdHlsZXM9e3N0eWxlc31cblx0XHRcdGFwaWtleT17R2VvbG9jYXRpb25zLmFwaV9rZXl9XG5cdFx0Lz4sXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZW9sb2NhdGlvbnNfX3Jvb3QtXCIraW5kZXgpXG5cdCk7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2Vsb2NhdGlvbnMtcG9zdHMtbGlzdC1cIitpbmRleCkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuIiwiXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0TUFQU19SRUFEWTogXCJtYXBzX3JlYWR5XCIsXG5cdEdPVE9fTE9DQVRJT046IFwiZ290b19sb2NhdGlvblwiLFxuXHRNQVBfQ0xJQ0tFRDogXCJtYXBfY2xpY2tlZFwiLFxuXHRMSVNUX0lURU1fQ0xJQ0tFRDogXCJsaXN0X2l0ZW1fY2xpY2tcIixcblx0TElTVF9JVEVNX0hPVkVSOiBcImxpc3RfaXRlbV9vdmVyXCIsXG5cdE1BUF9NQVJLRVJfQ0xJQ0tFRDogXCJtYXBfbWFya2VyX2NsaWNrZWRcIixcblx0TUFQX01BUktFUl9IT1ZFUjogXCJtYXBfbWFya2VyX292ZXJcIixcblx0TUFQX01BUktFUl9BRERFRDogXCJtYXBfbWFya2VyX2FkZGVkXCIsXG5cdE1BUF9NQVJLRVJfSVNfVklTSUJMRTogXCJtYXBfbWFya2VyX2lzX3Zpc2libGVcIixcblx0TUFQX0NFTlRFUl9DSEFOR0VEOiBcIm1hcF9jZW50ZXJfY2hhbmdlZFwiLFxuXHRQTEFDRVNfUkVTVUxUOiBcInBsYWNlc19yZXN1bHRcIixcblx0VFlQRV9BQ1RJVkVfQ0hBTkdFOiBcInR5cGVfYWN0aXZlX2NoYW5nZVwiXG59IiwiXG4vLyBodHRwczovL3NuYXp6eW1hcHMuY29tL3N0eWxlLzI1L2JsdWUtd2F0ZXJcblxubW9kdWxlLmV4cG9ydHMgPSBbe1wiZmVhdHVyZVR5cGVcIjpcInJvYWRcIixcImVsZW1lbnRUeXBlXCI6XCJnZW9tZXRyeVwiLFwic3R5bGVyc1wiOlt7XCJsaWdodG5lc3NcIjoxMDB9LHtcInZpc2liaWxpdHlcIjpcInNpbXBsaWZpZWRcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwid2F0ZXJcIixcImVsZW1lbnRUeXBlXCI6XCJnZW9tZXRyeVwiLFwic3R5bGVyc1wiOlt7XCJ2aXNpYmlsaXR5XCI6XCJvblwifSx7XCJjb2xvclwiOlwiI0M2RTJGRlwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJwb2lcIixcImVsZW1lbnRUeXBlXCI6XCJnZW9tZXRyeS5maWxsXCIsXCJzdHlsZXJzXCI6W3tcImNvbG9yXCI6XCIjQzVFM0JGXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcInJvYWRcIixcImVsZW1lbnRUeXBlXCI6XCJnZW9tZXRyeS5maWxsXCIsXCJzdHlsZXJzXCI6W3tcImNvbG9yXCI6XCIjRDFEMUI4XCJ9XX1dO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NOyJdLCJzb3VyY2VSb290IjoiIn0=