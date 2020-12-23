# usa-map-react | A simple SVG USA map rendering on React

Forked and refactored to use typescript from [https://github.com/gabidavila/react-usa-map](https://github.com/gabidavila/react-usa-map)

This is an alternate version for you that just want a simple customizable map on HTML. This maps shows states delimitations including DC, Alaska, and Hawaii. D3 is not needed.

It uses the [Albers projection](https://en.wikipedia.org/wiki/Albers_projection).

## Installation

`yarn add usa-map-react`

or

`npm install usa-map-react --save`

## Usage

The below example shows the mandatory `onClick` event.

```typescript
import React from "react"
import { USAMap } from "usa-map-react"

const App = () => {
  /* mandatory */
  const mapHandler = (event) => {
    alert(event.target.dataset.name)
  }

  return (
    <div className="App">
      <USAMap onClick={mapHandler} />
    </div>
  )
}

export default App
```

Example with optional props, `App.js`:

```typescript
import React, { Component } from "react"
import "./App.css" /* optional for styling like the :hover pseudo-class */
import { USAMap } from "usa-map-react"

const App = () => {
  /* mandatory */
  const mapHandler = (event) => {
    alert(event.target.dataset.name)
  }

  /* optional customization of filling per state and calling custom callbacks per state */
  const statesCustomConfig = {
    NJ: {
      fill: "navy",
      clickHandler: (event) =>
        console.log("Custom handler for NJ", event.target.dataset),
    },
    NY: {
      fill: "#CC0000",
    },
  }

  return (
    <div className="App">
      <USAMap customize={statesCustomConfig} onClick={mapHandler} />
    </div>
  )
}

export default App
```

`App.css`:

```css
path {
  pointer-events: all;
}
path:hover {
  opacity: 0.5;
  cursor: pointer;
}
```

## All optional props:

| prop             | description                                                  |
| ---------------- | ------------------------------------------------------------ |
| `title`          | Content for the Title attribute on the `svg`                 |
| `width`          | The `width` for rendering, numeric, no `px` suffix           |
| `height`         | The `height` for rendering, numeric, no `px` suffix          |
| `defaultFill`    | The default color for filling                                |
| `customize`      | Optional customization of filling per state                  |
| `hideStateTitle` | Optional prop to prevent state title from appearing on hover |

Additionally each `path` tag has an abbreviation of the current state followed by a `state` class:

```html
<path
  fill="#{custom color or #D3D3D3}"
  data-name="CA"
  class="CA state"
  d="...{polygon dimensions here}..."
></path>
```

# License

[MIT](LICENSE.md).

# Sources

The map is sourced from [Wikimedia](<https://commons.wikimedia.org/wiki/File:Blank_US_Map_(states_only).svg>) and is under [Creative Commons Attribution-Share Alike 3.0 Unported](https://spdx.org/licenses/CC-BY-SA-3.0.html) license. This package is inspired on the [react-us-state-map](https://npmjs.com/package/react-us-state-map) package, in fact the initial SVG class system is based on it.
