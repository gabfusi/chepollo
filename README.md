# Che Pollo!

ChePollo is an ultra-simple framework for common javascript client tasks, such as:

- Manipulating the DOM
- Debouncing functions
- Saving data on localStorage (falling back to cookies)

ChePollo is:

- super-light (<4kb)
- written in pure Vanilla javascript using ES6 syntax.
- transpiled to ES5 using babel and gulp
- packed in a CommonJS module or available in global scope (window.oo)
- compatible with IE > 7 (it has polyfill included)


---


## Install

```
$ npm install chepollo
```


## Usage

```js
oo.ready(function(){
    var foo = oo.getById('foo');
    oo.addClass(foo, 'pollastro');
    oo.addData(foo, 'somekey', 'somedata');
    oo.getData(foo, 'somekey'); // "somedata"
    oo.debounce(function(){
        foo.removeClass(foo, 'pollastro');
    }, 1000)();
});
```


## API reference

<a name="module_chepollo..oo"></a>
### chepollo~oo
Class oo.

**Kind**: inner class of <code>[chepollo](#module_chepollo)</code>  

* [~oo](#module_chepollo..oo)
    * [.ready(_callback)](#module_chepollo..oo+ready)
    * [.getAll(_selector)](#module_chepollo..oo+getAll) ⇒ <code>NodeList</code>
    * [.getOne(_selector)](#module_chepollo..oo+getOne) ⇒ <code>Element</code>
    * [.getById(_id)](#module_chepollo..oo+getById) ⇒ <code>Element</code>
    * [.fadeIn(_el, _duration)](#module_chepollo..oo+fadeIn)
    * [.fadeOut(_el, _duration)](#module_chepollo..oo+fadeOut)
    * [.addClass(_el, _classes)](#module_chepollo..oo+addClass)
    * [.removeClass(_el, _classes)](#module_chepollo..oo+removeClass)
    * [.hasClass(_el, _class)](#module_chepollo..oo+hasClass) ⇒ <code>boolean</code>
    * [.toggleClass(_el, _class)](#module_chepollo..oo+toggleClass)
    * [.addData(_el, _key, _data)](#module_chepollo..oo+addData)
    * [.getData(_el, _key)](#module_chepollo..oo+getData) ⇒ <code>string</code> &#124; <code>undefined</code>
    * [.storageGet(_key)](#module_chepollo..oo+storageGet)
    * [.storageSet(_key, _data)](#module_chepollo..oo+storageSet)
    * [.storageRemove(_key)](#module_chepollo..oo+storageRemove)
    * [.storageClear()](#module_chepollo..oo+storageClear)
    * [.cookieSet(cname, cvalue, exdays)](#module_chepollo..oo+cookieSet)
    * [.cookieGet(cname)](#module_chepollo..oo+cookieGet) ⇒ <code>\*</code>
    * [.debounce(func, wait, immediate)](#module_chepollo..oo+debounce) ⇒ <code>function</code>

<a name="module_chepollo..oo+ready"></a>
#### oo.ready(_callback)
on DOM ready

**Kind**: instance method of <code>[oo](#module_chepollo..oo)</code>  

| Param | Type |
| --- | --- |
| _callback | <code>function</code> | 

<a name="module_chepollo..oo+getAll"></a>
#### oo.getAll(_selector) ⇒ <code>NodeList</code>
return an array of DOM nodes using querySelectorAll()

**Kind**: instance method of <code>[oo](#module_chepollo..oo)</code>  

| Param | Type |
| --- | --- |
| _selector | <code>string</code> | 

<a name="module_chepollo..oo+getOne"></a>
#### oo.getOne(_selector) ⇒ <code>Element</code>
return a dom Element using querySelector()

**Kind**: instance method of <code>[oo](#module_chepollo..oo)</code>  

| Param |
| --- |
| _selector | 

<a name="module_chepollo..oo+getById"></a>
#### oo.getById(_id) ⇒ <code>Element</code>
return a DOM node using getElementById

**Kind**: instance method of <code>[oo](#module_chepollo..oo)</code>  

| Param | Type |
| --- | --- |
| _id | <code>string</code> | 

<a name="module_chepollo..oo+fadeIn"></a>
#### oo.fadeIn(_el, _duration)
fadeIn a DOM element

**Kind**: instance method of <code>[oo](#module_chepollo..oo)</code>  

| Param | Type |
| --- | --- |
| _el | <code>Element</code> | 
| _duration | <code>int</code> | 

<a name="module_chepollo..oo+fadeOut"></a>
#### oo.fadeOut(_el, _duration)
fadeOut a DOM element

**Kind**: instance method of <code>[oo](#module_chepollo..oo)</code>  

| Param | Type |
| --- | --- |
| _el | <code>Element</code> | 
| _duration | <code>int</code> | 

<a name="module_chepollo..oo+addClass"></a>
#### oo.addClass(_el, _classes)
add a class to a DOM element

**Kind**: instance method of <code>[oo](#module_chepollo..oo)</code>  

| Param | Type |
| --- | --- |
| _el | <code>Element</code> | 
| _classes | <code>string</code> | 

<a name="module_chepollo..oo+removeClass"></a>
#### oo.removeClass(_el, _classes)
remove a class from a DOM element

**Kind**: instance method of <code>[oo](#module_chepollo..oo)</code>  

| Param | Type |
| --- | --- |
| _el | <code>Element</code> | 
| _classes | <code>string</code> | 

<a name="module_chepollo..oo+hasClass"></a>
#### oo.hasClass(_el, _class) ⇒ <code>boolean</code>
checks if the given DOM element has a class

**Kind**: instance method of <code>[oo](#module_chepollo..oo)</code>  

| Param | Type |
| --- | --- |
| _el | <code>Element</code> | 
| _class | <code>string</code> | 

<a name="module_chepollo..oo+toggleClass"></a>
#### oo.toggleClass(_el, _class)
toggle a DOM element class

**Kind**: instance method of <code>[oo](#module_chepollo..oo)</code>  

| Param | Type |
| --- | --- |
| _el | <code>Element</code> | 
| _class | <code>string</code> | 

<a name="module_chepollo..oo+addData"></a>
#### oo.addData(_el, _key, _data)
add content to a DOM element dataList

**Kind**: instance method of <code>[oo](#module_chepollo..oo)</code>  

| Param | Type |
| --- | --- |
| _el | <code>Element</code> | 
| _key | <code>string</code> | 
| _data | <code>string</code> | 

<a name="module_chepollo..oo+getData"></a>
#### oo.getData(_el, _key) ⇒ <code>string</code> &#124; <code>undefined</code>
return the content of the given dataList key

**Kind**: instance method of <code>[oo](#module_chepollo..oo)</code>  

| Param |
| --- |
| _el | 
| _key | 

<a name="module_chepollo..oo+storageGet"></a>
#### oo.storageGet(_key)
get data from localStorage (with cookie fallback)

**Kind**: instance method of <code>[oo](#module_chepollo..oo)</code>  

| Param |
| --- |
| _key | 

<a name="module_chepollo..oo+storageSet"></a>
#### oo.storageSet(_key, _data)
set data in localStorage (with cookie fallback)

**Kind**: instance method of <code>[oo](#module_chepollo..oo)</code>  

| Param |
| --- |
| _key | 
| _data | 

<a name="module_chepollo..oo+storageRemove"></a>
#### oo.storageRemove(_key)
removes a key from localStorage (with cookie fallback)

**Kind**: instance method of <code>[oo](#module_chepollo..oo)</code>  

| Param |
| --- |
| _key | 

<a name="module_chepollo..oo+storageClear"></a>
#### oo.storageClear()
clear localStorage (with cookie fallback)

**Kind**: instance method of <code>[oo](#module_chepollo..oo)</code>  
<a name="module_chepollo..oo+cookieSet"></a>
#### oo.cookieSet(cname, cvalue, exdays)
set a cookie

**Kind**: instance method of <code>[oo](#module_chepollo..oo)</code>  

| Param |
| --- |
| cname | 
| cvalue | 
| exdays | 

<a name="module_chepollo..oo+cookieGet"></a>
#### oo.cookieGet(cname) ⇒ <code>\*</code>
get a cookie

**Kind**: instance method of <code>[oo](#module_chepollo..oo)</code>  

| Param |
| --- |
| cname | 

<a name="module_chepollo..oo+debounce"></a>
#### oo.debounce(func, wait, immediate) ⇒ <code>function</code>
debounce a function

**Kind**: instance method of <code>[oo](#module_chepollo..oo)</code>  

| Param | Type |
| --- | --- |
| func | <code>function</code> | 
| wait | <code>int</code> | 
| immediate | <code>boolean</code> | 

