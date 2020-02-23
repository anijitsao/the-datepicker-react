# the-datepicker-react
It is a simple Datepicker component using [React JS](https://reactjs.org/).
Full documentation can be found in [Github](https://github.com/anijitsahu/the-datepicker-react)

## Introduction
This is a Simple datepicker component using [React JS](https://reactjs.org/). As it is using `state` in the *Functional Component* `v16.9` of [React JS](https://reactjs.org/) is needed. It has no other dependencies.

## Installation

### npm
To install it from `npm` use   

```
npm install the-datepicker-react --save
```

### Github
Cloning the repository directly from Github    

```
git clone https://github.com/anijitsahu/the-datepicker-react.git
```


## Usage 
This datepicker component uses [Fontawesome](https://fontawesome.com/) for the icons. So, include [Fontawesome](https://fontawesome.com/) library in the `index.html` by the following command,  

```html
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
```
Or can be downloaded from [npm](https://www.npmjs.com/package/fontawesome) and included in the project.  

#### Import
Import the component in your application by
```javascript
   import ReactSimpleDatepicker from 'the-datepicker-react'
```  

if you directly use the source code
```javascript
   import ReactSimpleDatepicker from '/path/to/the-date-picker/ReactSimpleDatepicker.js'
```  

#### Use
to use this component in your application use

```jsx 
    <ReactSimpleDatepicker
        onSelectedDate={onSelectedDateHandler}    
    />
```
In the *parent* component write one method to receive the selected date from the child component write one method   
```javascript
const onSelectedDateHandler = (date) => {
    console.log("date received", date)
}
```
