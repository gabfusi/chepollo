'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

/**
 * @module chepollo
 */

(function (window, factory) {
    'use strict';
    // universal module definition

    if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
        // CommonJS
        module.exports = factory();
    } else {
        // browser global
        window.oo = factory();
    }
})(window, function factory() {

    'use strict';

    /** Class oo. */

    var oo = (function () {
        function oo() {
            _classCallCheck(this, oo);

            return this;
        }

        //
        // DOM
        //

        /**
         * on DOM ready
         * @param {function} _callback
         */

        _createClass(oo, [{
            key: 'ready',
            value: function ready(_callback) {
                document.addEventListener('DOMContentLoaded', _callback);
            }

            /**
             * return a DOM node using querySelectorAll
             * @param {string} _selector
             * @returns {NodeList}
             */

        }, {
            key: 'getAll',
            value: function getAll(_selector) {
                return document.querySelectorAll(_selector);
            }

            /**
             * return a DOM node using querySelectorAll
             * @param {string} _id
             * @returns {Element}
             */

        }, {
            key: 'getById',
            value: function getById(_id) {
                return document.getElementById(_id);
            }

            /**
             * fadeIn a DOM element
             * @param {Element} _el
             * @param {int} _duration
             */

        }, {
            key: 'fadeIn',
            value: function fadeIn(_el, _duration) {
                _el.style.display = "block";
                _el.style.opacity = 0;
                (function fade() {
                    (_el.style.opacity += .1) > .9 ? _el.style.display = "block" : setTimeout(fade, _duration);
                })();
            }

            /**
             * fadeOut a DOM element
             * @param {Element} _el
             * @param {int} _duration
             */

        }, {
            key: 'fadeOut',
            value: function fadeOut(_el, _duration) {
                var oldd = _el.style.display;
                _el.style.opacity = 1;
                (function fade() {
                    (_el.style.opacity -= .1) < 0 ? _el.style.display = "none" : setTimeout(fade, _duration);
                })();
            }

            /**
             * add a class to a DOM element
             * @param {Element} _el
             * @param {string} _classes
             */

        }, {
            key: 'addClass',
            value: function addClass(_el, _classes) {
                return _el.classList.add(_classes);
            }

            /**
             * remove a class from a DOM element
             * @param {Element} _el
             * @param {string} _classes
             */

        }, {
            key: 'removeClass',
            value: function removeClass(_el, _classes) {
                return _el.classList.remove(_classes);
            }

            /**
             * checks if the given DOM element has a class
             * @param {Element} _el
             * @param {string} _class
             * @returns {boolean}
             */

        }, {
            key: 'hasClass',
            value: function hasClass(_el, _class) {
                return _el.classList.contains(_class);
            }

            /**
             * toggle a DOM element class
             * @param {Element} _el
             * @param {string} _class
             */

        }, {
            key: 'toggleClass',
            value: function toggleClass(_el, _class) {
                return _el.classList.toggle(_class);
            }

            /**
             * add content to a DOM element dataList
             * @param {Element} _el
             * @param {string} _key
             * @param {string} _data
             */

        }, {
            key: 'addData',
            value: function addData(_el, _key, _data) {
                _el.dataset[_key] = _data;
            }

            /**
             * return the content of the given dataList key
             * @param _el
             * @param _key
             * @returns {string|undefined}
             */

        }, {
            key: 'getData',
            value: function getData(_el, _key) {
                return typeof _el.dataset[_key] !== 'undefined' ? _el.dataset[_key] : undefined;
            }

            //
            // Utilities
            //

            /**
             * debounce a function
             * @param {function} func
             * @param {int} wait
             * @param {boolean} immediate
             * @returns {Function}
             */

        }, {
            key: 'debounce',
            value: function debounce(func, wait, immediate) {
                var timeout;
                return function () {
                    var context = this,
                        args = arguments;
                    clearTimeout(timeout);
                    timeout = setTimeout(function () {
                        timeout = null;
                        if (!immediate) func.apply(context, args);
                    }, wait);
                    if (immediate && !timeout) func.apply(context, args);
                };
            }
        }]);

        return oo;
    })();

    return new oo();
});
'use strict';

if (typeof window.localStorage == 'undefined' || typeof window.sessionStorage == 'undefined') (function () {

  var Storage = function Storage(type) {
    function createCookie(name, value, days) {
      var date, expires;

      if (days) {
        date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toGMTString();
      } else {
        expires = "";
      }
      document.cookie = name + "=" + value + expires + "; path=/";
    }

    function readCookie(name) {
      var nameEQ = name + "=",
          ca = document.cookie.split(';'),
          i,
          c;

      for (i = 0; i < ca.length; i++) {
        c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1, c.length);
        }

        if (c.indexOf(nameEQ) == 0) {
          return c.substring(nameEQ.length, c.length);
        }
      }
      return null;
    }

    function setData(data) {
      data = JSON.stringify(data);
      if (type == 'session') {
        window.name = data;
      } else {
        createCookie('localStorage', data, 365);
      }
    }

    function clearData() {
      if (type == 'session') {
        window.name = '';
      } else {
        createCookie('localStorage', '', 365);
      }
    }

    function getData() {
      var data = type == 'session' ? window.name : readCookie('localStorage');
      return data ? JSON.parse(data) : {};
    }

    // initialise if there's already data
    var data = getData();

    return {
      length: 0,
      clear: function clear() {
        data = {};
        this.length = 0;
        clearData();
      },
      getItem: function getItem(key) {
        return data[key] === undefined ? null : data[key];
      },
      key: function key(i) {
        // not perfect, but works
        var ctr = 0;
        for (var k in data) {
          if (ctr == i) return k;else ctr++;
        }
        return null;
      },
      removeItem: function removeItem(key) {
        delete data[key];
        this.length--;
        setData(data);
      },
      setItem: function setItem(key, value) {
        data[key] = value + ''; // forces the value to a string
        this.length++;
        setData(data);
      }
    };
  };

  if (typeof window.localStorage == 'undefined') window.localStorage = new Storage('local');
  if (typeof window.sessionStorage == 'undefined') window.sessionStorage = new Storage('session');
})();
"use strict";

(function () {

  if (typeof window.Element === "undefined" || "classList" in document.documentElement) return;

  var prototype = Array.prototype,
      push = prototype.push,
      splice = prototype.splice,
      join = prototype.join;

  function DOMTokenList(el) {
    this.el = el;
    // The className needs to be trimmed and split on whitespace
    // to retrieve a list of classes.
    var classes = el.className.replace(/^\s+|\s+$/g, '').split(/\s+/);
    for (var i = 0; i < classes.length; i++) {
      push.call(this, classes[i]);
    }
  };

  DOMTokenList.prototype = {
    add: function add(token) {
      if (this.contains(token)) return;
      push.call(this, token);
      this.el.className = this.toString();
    },
    contains: function contains(token) {
      return this.el.className.indexOf(token) != -1;
    },
    item: function item(index) {
      return this[index] || null;
    },
    remove: function remove(token) {
      if (!this.contains(token)) return;
      for (var i = 0; i < this.length; i++) {
        if (this[i] == token) break;
      }
      splice.call(this, i, 1);
      this.el.className = this.toString();
    },
    toString: function toString() {
      return join.call(this, ' ');
    },
    toggle: function toggle(token) {
      if (!this.contains(token)) {
        this.add(token);
      } else {
        this.remove(token);
      }

      return this.contains(token);
    }
  };

  window.DOMTokenList = DOMTokenList;

  function defineElementGetter(obj, prop, getter) {
    if (Object.defineProperty) {
      Object.defineProperty(obj, prop, {
        get: getter
      });
    } else {
      obj.__defineGetter__(prop, getter);
    }
  }

  defineElementGetter(Element.prototype, 'classList', function () {
    return new DOMTokenList(this);
  });
})();
'use strict';

(function () {
  var forEach = [].forEach,
      regex = /^data-(.+)/,
      dashChar = /\-([a-z])/ig,
      el = document.createElement('div'),
      mutationSupported = false,
      match;

  function detectMutation() {
    mutationSupported = true;
    this.removeEventListener('DOMAttrModified', detectMutation, false);
  }

  function toCamelCase(s) {
    return s.replace(dashChar, function (m, l) {
      return l.toUpperCase();
    });
  }

  function updateDataset() {
    var dataset = {};
    forEach.call(this.attributes, function (attr) {
      if (match = attr.name.match(regex)) dataset[toCamelCase(match[1])] = attr.value;
    });
    return dataset;
  }

  // only add support if the browser doesn't support data-* natively
  if (el.dataset != undefined) return;

  el.addEventListener('DOMAttrModified', detectMutation, false);
  el.setAttribute('foo', 'bar');

  function defineElementGetter(obj, prop, getter) {
    if (Object.defineProperty) {
      Object.defineProperty(obj, prop, {
        get: getter
      });
    } else {
      obj.__defineGetter__(prop, getter);
    }
  }

  defineElementGetter(Element.prototype, 'dataset', mutationSupported ? function () {
    if (!this._datasetCache) {
      this._datasetCache = updateDataset.call(this);
    }
    return this._datasetCache;
  } : updateDataset);

  document.addEventListener('DOMAttrModified', function (event) {
    delete event.target._datasetCache;
  }, false);
})();
//# sourceMappingURL=all.js.map
