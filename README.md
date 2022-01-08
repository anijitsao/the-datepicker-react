# the-datepicker-react

It is a simple Datepicker component using [React JS](https://reactjs.org/).
Full documentation can be found in [Github](https://github.com/anijitsahu/the-datepicker-react)

## Introduction

This is a Simple datepicker component using [React JS](https://reactjs.org/). It has no other dependencies apart from [React JS](https://reactjs.org/).

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

This datepicker component uses [Fontawesome](https://fontawesome.com/) for the icons. So, include [Fontawesome](https://fontawesome.com/) library in the `index.html` by
```html
<link
    rel="stylesheet"
    href="<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous" referrerpolicy="no-referrer" />"
/>
```

Or can be downloaded from [npm](https://www.npmjs.com/package/fontawesome) and included in the project.

#### Import

Import the component in your application by,

```javascript
import ReactSimpleDatepicker from "the-datepicker-react;"
```

If you are using the source code directly,

```javascript
import ReactSimpleDatepicker from "/path/to/the-datepicker-react/ReactSimpleDatepicker.js;"
```

#### Use

Now render the datepicker component into your application use

```jsx
const onSelectedDateHandler = (date) => {
    console.log("date received", date);
}

<ReactSimpleDatepicker onSelectedDate={onSelectedDateHandler} />
```
