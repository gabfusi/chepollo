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


## API reference

ChePollo (oo)

<a name="module_oo..ChePollo"></a>
### oo~ChePollo
Class ChePollo.

**Kind**: inner class of <code>[oo](#module_oo)</code>  

* [~ChePollo](#module_oo..ChePollo)
    * [.ready(_callback)](#module_oo..ChePollo+ready)
    * [.getAll(_selector)](#module_oo..ChePollo+getAll) ⇒ <code>NodeList</code>
    * [.getById(_id)](#module_oo..ChePollo+getById) ⇒ <code>Element</code>
    * [.fadeIn(_el, _duration)](#module_oo..ChePollo+fadeIn)
    * [.fadeOut(_el, _duration)](#module_oo..ChePollo+fadeOut)
    * [.addClass(_el, _classes)](#module_oo..ChePollo+addClass)
    * [.removeClass(_el, _classes)](#module_oo..ChePollo+removeClass)
    * [.hasClass(_el, _class)](#module_oo..ChePollo+hasClass) ⇒ <code>boolean</code>
    * [.toggleClass(_el, _class)](#module_oo..ChePollo+toggleClass)
    * [.addData(_el, _key, _data)](#module_oo..ChePollo+addData)
    * [.getData(_el, _key)](#module_oo..ChePollo+getData) ⇒ <code>string</code> &#124; <code>undefined</code>
    * [.debounce(func, wait, immediate)](#module_oo..ChePollo+debounce) ⇒ <code>function</code>

<a name="module_oo..ChePollo+ready"></a>
#### chePollo.ready(_callback)
on DOM ready

**Kind**: instance method of <code>[ChePollo](#module_oo..ChePollo)</code>  

| Param | Type |
| --- | --- |
| _callback | <code>function</code> | 

<a name="module_oo..ChePollo+getAll"></a>
#### chePollo.getAll(_selector) ⇒ <code>NodeList</code>
return a DOM node using querySelectorAll

**Kind**: instance method of <code>[ChePollo](#module_oo..ChePollo)</code>  

| Param | Type |
| --- | --- |
| _selector | <code>string</code> | 

<a name="module_oo..ChePollo+getById"></a>
#### chePollo.getById(_id) ⇒ <code>Element</code>
return a DOM node using querySelectorAll

**Kind**: instance method of <code>[ChePollo](#module_oo..ChePollo)</code>  

| Param | Type |
| --- | --- |
| _id | <code>string</code> | 

<a name="module_oo..ChePollo+fadeIn"></a>
#### chePollo.fadeIn(_el, _duration)
fadeIn a DOM element

**Kind**: instance method of <code>[ChePollo](#module_oo..ChePollo)</code>  

| Param | Type |
| --- | --- |
| _el | <code>Element</code> | 
| _duration | <code>int</code> | 

<a name="module_oo..ChePollo+fadeOut"></a>
#### chePollo.fadeOut(_el, _duration)
fadeOut a DOM element

**Kind**: instance method of <code>[ChePollo](#module_oo..ChePollo)</code>  

| Param | Type |
| --- | --- |
| _el | <code>Element</code> | 
| _duration | <code>int</code> | 

<a name="module_oo..ChePollo+addClass"></a>
#### chePollo.addClass(_el, _classes)
add a class to a DOM element

**Kind**: instance method of <code>[ChePollo](#module_oo..ChePollo)</code>  

| Param | Type |
| --- | --- |
| _el | <code>Element</code> | 
| _classes | <code>string</code> | 

<a name="module_oo..ChePollo+removeClass"></a>
#### chePollo.removeClass(_el, _classes)
remove a class from a DOM element

**Kind**: instance method of <code>[ChePollo](#module_oo..ChePollo)</code>  

| Param | Type |
| --- | --- |
| _el | <code>Element</code> | 
| _classes | <code>string</code> | 

<a name="module_oo..ChePollo+hasClass"></a>
#### chePollo.hasClass(_el, _class) ⇒ <code>boolean</code>
checks if the given DOM element has a class

**Kind**: instance method of <code>[ChePollo](#module_oo..ChePollo)</code>  

| Param | Type |
| --- | --- |
| _el | <code>Element</code> | 
| _class | <code>string</code> | 

<a name="module_oo..ChePollo+toggleClass"></a>
#### chePollo.toggleClass(_el, _class)
toggle a DOM element class

**Kind**: instance method of <code>[ChePollo](#module_oo..ChePollo)</code>  

| Param | Type |
| --- | --- |
| _el | <code>Element</code> | 
| _class | <code>string</code> | 

<a name="module_oo..ChePollo+addData"></a>
#### chePollo.addData(_el, _key, _data)
add content to a DOM element dataList

**Kind**: instance method of <code>[ChePollo](#module_oo..ChePollo)</code>  

| Param | Type |
| --- | --- |
| _el | <code>Element</code> | 
| _key | <code>string</code> | 
| _data | <code>string</code> | 

<a name="module_oo..ChePollo+getData"></a>
#### chePollo.getData(_el, _key) ⇒ <code>string</code> &#124; <code>undefined</code>
return the content of the given dataList key

**Kind**: instance method of <code>[ChePollo](#module_oo..ChePollo)</code>  

| Param |
| --- |
| _el | 
| _key | 

<a name="module_oo..ChePollo+debounce"></a>
#### chePollo.debounce(func, wait, immediate) ⇒ <code>function</code>
debounce a function

**Kind**: instance method of <code>[ChePollo](#module_oo..ChePollo)</code>  

| Param | Type |
| --- | --- |
| func | <code>function</code> | 
| wait | <code>int</code> | 
| immediate | <code>boolean</code> | 

