# Vue Flexible Link #

[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

Tiny Vue Component to open links in a browser, ideal for cross environment apps(Web and Native Desktop with Electron)

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
import FlexibleLink from 'vue-flexible-link/src/FlexibleLink.vue';

export default {
  data() {
    return {
      /*
        In this example ELECTRON_BUILD is a global variable
        defined at build time
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

```js
  // In the webpack config "DefinePlugin" is our friend
  plugins: [
    new webpack.DefinePlugin({
      ELECTRON_BUILD: true,
    }),
  ],
```

## Props ##

| Prop             | Type    | Description                                        | Default Value  |
|:----------------:|:-------:| -------------------------------------------------- | -------------- |
| **native**       | Boolean | Wheter the build for native(electron) environment  | true           |
| **custom-class** | String  | Use your custom class on the component             | -              |
| **href**         | String  | Attach your href on the component                  | '/'            |
| **target**       | String  | Attach the target like '*blank*'                   | '_self'        |


## Possible Scenarios ##

### 1. Cross Environment(Web and Electron) ###

Make sure your [build targets](https://webpack.js.org/configuration/target/) are configured to `electron-renderer` and `electron-main`

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

Make sure your [build targets](https://webpack.js.org/configuration/target/) are configured to `electron-renderer` and `electron-main`

You can import the component like this

```js
    import FlexibleLink from 'vue-flexible-link'
```

And you should be fine

### 3. For Web Environment Only ###
Yeah, this component doesn't make sense if you are building a web app only. Don't use it for this case.

### Note ###

If you are **having trouble configuring the builds** you may want to check out the config of my cross env project [finance-wheel(https://github.com/upclab/finance-wheel) based on official webpack template


## Roadmap ##
- Add functionality to check the environment automatically
