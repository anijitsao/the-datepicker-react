# the-datepicker-react
It is a simple Datepicker component using [React JS](https://reactjs.org/).
Full documentation can be found in [Github](https://github.com/anijitsahu/the-datepicker-react)

## Installation

### npm
To install it from `npm` use   

`npm install the-datepicker-react --save`

### Github
Cloning the repository directly from Github use the following command   

`git clone https://github.com/anijitsahu/the-datepicker-react.git`


## Usage 
This datepicker component uses [Fontawesome](https://fontawesome.com/) for the icons. So, include [Fontawesome](https://fontawesome.com/) library in the `index.html` by the following command, <br/>
```html
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
```
Or can be downloaded from [npm](https://www.npmjs.com/package/fontawesome) and included in the project.  


to use this component in your application use

```jsx 
    <ReactSimpleDatepicker
        onSelectedDate={onSelectedDateHandler}    
    />
```
In the *parent* component write one method to receive the selected date from the child component write one method   
```javascript
onSelectedDateHandler = (date) => {
    console.log('date received', date)
}
```
