# Vue Flexible Link #
Tiny Vue Component to open a link in Electron or Web environment

- If you are in a electron app opens the link in a new browser tab with the `shell.openExternal` API.
- If you are in a web, the component will be a regular web link

> This component was tested with webpack only

## Installation ##

    npm install --save vue-flexible-link

or

    yarn add vue-flexible-link

## Usage ##

```html
<flexible-link :native="isElectronBuild" href="https://github.com/upclab/finance-wheel">
  <span class="icon" style="color: #333;">
    <icon name="github" scale="3"></icon>
  </span>
</flexible-link>
```

```js
<script>
import FlexibleLink from 'vue-flexible-link/src/FlexibleLink';

export default {
  data() {
    return {
      /*
        In this example ELECTRON_BUILD is a global variable
        defined at compile time
      */
      isElectronBuild: !!ELECTRON_BUILD,
    };
  },
  components: {
    FlexibleLink,
  },
};
</script>

```

## Props ##

| Prop             | Type    | Description                                        | Default Value  |
|:----------------:|:-------:| -------------------------------------------------- | -------------- |
| **native**       | Boolean | If this build is in a native(electron) environment | true           |
| **custom-class** | String  | Use your custom class on the component             | -              |
| **href**         | String  | Attach your href on the component                  | '/'            |
| **target**       | String  | Attach the target like '*blank*'                   | '_self'        |


### 1. Cross Environment(Web and Electron) ###
You need the import the non-compiled component

```js
import FlexibleLink from 'vue-flexible-link/src/FlexibleLink'
```

And you need the add the node's *fs* mock to your **webpack configuration** to get this working:

```js
entry: {
// ...
},
output: {
// ...
},
module: {
// ...
},
node: {
  fs: 'empty', // fs works only with the 'empty' value 
},
```

### 2. For Electron Environment Only ###

You can import the component like this

```js
    import FlexibleLink from 'vue-flexible-link'
```

And you should be fine

### 3. For Web Environment Only ###
Yeah, this component doesn't make sense if you are building a web app only. Don't use it.

## Roadmap ##
- Add functionality to check the environment automatically
