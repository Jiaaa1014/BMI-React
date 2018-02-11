### Notes

`Range.js`作為`<input type="range">`的元素

#### props 
子元素有兩種方式使用`props`，一種比較常見，從母元素定義的拿
```jsx
<Child
  prop1=""
  prop2={this.state.info}
>
```
另一種直接在子元素裡面定義`props`
直接在另一個project的[README.md](https://github.com/Jiaaa1014/switchTab-React/blob/master/README.md)看

```js
Child.defaultProps = {/**/}
static get defaultProps() {/**/}
static defaultProps = {/**/}
```



#### bugs

```js
console.log(this.state)
// { height: "197", weight: "125", bmi: "70.67", bmiClass: "Obese" }
```
(height, weight) 與 (bmi, bmiClass)不同步

