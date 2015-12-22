/**
 * ChePollo (oo)
 * @module oo
 */


( function( window, factory ) {
    'use strict';
    // universal module definition
    if ( typeof exports === 'object' ) {
        // CommonJS
        module.exports = factory();
    } else {
        // browser global
        window.oo = factory();
    }

}( window, function factory() {

    'use strict';

    /** Class ChePollo. */
    class ChePollo {

        constructor() {
            return this;
        }

        //
        // DOM
        //

        /**
         * on DOM ready
         * @param {function} _callback
         */
        ready(_callback) {
            document.addEventListener('DOMContentLoaded', _callback);
        }

        /**
         * return a DOM node using querySelectorAll
         * @param {string} _selector
         * @returns {NodeList}
         */
        getAll(_selector) {
            return document.querySelectorAll(_selector);
        }

        /**
         * return a DOM node using querySelectorAll
         * @param {string} _id
         * @returns {Element}
         */
        getById(_id) {
            return document.getElementById(_id);
        }

        /**
         * fadeIn a DOM element
         * @param {Element} _el
         * @param {int} _duration
         */
        fadeIn(_el, _duration) {
            _el.style.display = "block";
            _el.style.opacity = 0;
            (function fade(){(_el.style.opacity+=.1)>.9?_el.style.display="block":setTimeout(fade,_duration)})();
        }

        /**
         * fadeOut a DOM element
         * @param {Element} _el
         * @param {int} _duration
         */
        fadeOut(_el, _duration) {
            var oldd = _el.style.display;
            _el.style.opacity = 1;
            (function fade(){(_el.style.opacity-=.1)<0?_el.style.display="none":setTimeout(fade,_duration)})();
        }

        /**
         * add a class to a DOM element
         * @param {Element} _el
         * @param {string} _classes
         */
        addClass(_el, _classes){
            return _el.classList.add(_classes);
        }

        /**
         * remove a class from a DOM element
         * @param {Element} _el
         * @param {string} _classes
         */
        removeClass(_el, _classes){
            return _el.classList.remove(_classes);
        }

        /**
         * checks if the given DOM element has a class
         * @param {Element} _el
         * @param {string} _class
         * @returns {boolean}
         */
        hasClass(_el, _class){
            return _el.classList.contains(_class);
        }

        /**
         * toggle a DOM element class
         * @param {Element} _el
         * @param {string} _class
         */
        toggleClass(_el, _class){
            return _el.classList.toggle(_class);
        }

        /**
         * add content to a DOM element dataList
         * @param {Element} _el
         * @param {string} _key
         * @param {string} _data
         */
        addData(_el, _key, _data){
            _el.dataset[_key] = _data;
        }

        /**
         * return the content of the given dataList key
         * @param _el
         * @param _key
         * @returns {string|undefined}
         */
        getData(_el, _key){
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
        debounce(func, wait, immediate) {
            var timeout;
            return function() {
                var context = this, args = arguments;
                clearTimeout(timeout);
                timeout = setTimeout(function() {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                }, wait);
                if (immediate && !timeout) func.apply(context, args);
            };
        };

    }

    return new ChePollo();

}));