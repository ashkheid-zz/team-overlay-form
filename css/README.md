# About the structure of this folder

- Put all your css in these five css files begins with an underscore(`_`) and `@import` them in `style.css` respectively as mentioned below.
- Use BEM naming convention for your class names:<br />
`.{Block}__{Element}`<br />
`.{Block}__{Element}--{Modifier}`<br />
`.{Block}--{Modifier}`

We call them **Flat Selectors** which is always better than nested selectors for the sake of [Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)

- Don't use IDs for styling, **EVER**!
- Avoid **Grand-children Selectors**. Put them in `_shame.css` in case you need to do that.
<br /><br />
## _reset.css
It's just for reseting browsers default stylings.
<br /><br />
## _base.css

Applies to HTML, *no class/ID selectors*. It should contain selectors like `html`, `h1`, `h2`, `a`, `ul`, `li`. These aren't modules, these're your **basic HTML elements.**
<br /><br />
## _layout.css

Big sections you see when you step back like ten feet from your website. (`.header`, `.sidebars`, `body`, `footer`, right rail, left rail, primary rail, etc.)
<br /><br />
## _module.css

Encapsulated modules, **re-usable stuff**. Theoretically, you can use these in every section of your website you need to.
<br /><br />
## _state.css

**Overrides defaults** (`.is-opened`). It's the way you take an *existing module* and turn on or off a particular flag on that module to say " its state is different ".
<br /><br />
## _theme.css

Optional, if theming needed
<br /><br />
## _shame.css

Things you better avoid but you did them because of some particular constraints like *time* or *temporary need* or whatever... . Please manage to come back and fix them.

<br /><br /><hr>

> read more about [SMACSS](http://smacss.com/)