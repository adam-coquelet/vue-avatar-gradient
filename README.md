
# Vue Avatar Gradient ![](https://avatar.vercel.sh/rauchg?size=20) ![](https://avatar.vercel.sh/leerob?size=20) ![](https://avatar.vercel.sh/vercel?size=20) ![](https://avatar.vercel.sh/party?size=20) ![](https://avatar.vercel.sh/edge?size=20)

Generate beautiful gradient avatars for your Vue application.

A lightweight Vue 3 component that renders a customizable gradient avatar based on a token string. Ideal for user avatars, placeholders, or generated profile images.

Inspired by Vercel Avatar.

---

## Features

- **Deterministic Gradients:** Generates the same gradient for a given token.
- **Customizable Size & Shape:** Adjust `size` and `rounded` props.
- **Optional Text:** Display initials or labels inside the avatar.
- **Easy Integration:** Supports plugin installation or direct component import.

---

## Installation

Install the package and its peer dependency:

```bash
npm install vue-avatar-gradient tinycolor2
# or
yarn add vue-avatar-gradient tinycolor2
```

---

## Import Component

```js
import { Avatar } from 'vue-avatar-gradient'
```

## Usage

Provide a username to generate an avatar. Each name will generate a unique avatar. Just replace `TOKEN` with an username or email:

```html
<Avatar token="TOKEN"/>
```

![Avatar for rauchg](https://avatar.vercel.sh/TOKEN)



### Adjust Roundness

```html
<Avatar token="TOKEN" :round="60"/>
```

![Avatar for rauchg](https://avatar.vercel.sh/TOKEN?rounded=60)


### Custom Size
```html
<Avatar token="TOKEN" :size="30"/>
```
![Avatar for rauchg](https://avatar.vercel.sh/rauchg.svg?size=30)

### Add Initials

Add the `text` parameter:
```html
<Avatar token="TOKEN" text="EU"/>
```

![Avatar for rauchg](https://avatar.vercel.sh/rauchg.svg?text=EU)

---


## Props

| Prop      | Type    | Default | Description                                  |
|-----------|---------|---------|----------------------------------------------|
| `token`   | String  | —       | **Required.** Unique string to generate hash |
| `size`    | Number  | `50`    | Width and height of the SVG avatar (px)      |
| `rounded` | Number  | `0`     | Corner radius for rounded avatars (px)       |
| `text`    | String  | `''`    | Optional text (e.g., initials) inside avatar |

---

## Development & Build

- **Build:** Uses Vite to produce ESM and UMD bundles:

  ```bash
  npm run build
  ```

---

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues](https://github.com/adam-coquelet/vue-avatar-gradient/issues).

---

## License

MIT