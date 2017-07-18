<div style="padding:0 8px">

<div align="center" style="background-color:#1b2c34">
  <img  src="https://github.com/remimarsal/prettier-now-vscode/raw/master/prettier-logo.png" alt="Logo" height="128" />
</div>

<h1 align="center">Prettier Now</h1>
<h2 align="center" style="border:none">Code Formatter for Visual Studio Code</h2>


<div align="center">

[![](https://vsmarketplacebadge.apphb.com/version/remimarsal.prettier-now.svg)](https://marketplace.visualstudio.com/items?itemName=remimarsal.prettier-now)
[![](https://vsmarketplacebadge.apphb.com/installs/remimarsal.prettier-now.svg)](https://marketplace.visualstudio.com/items?itemName=remimarsal.prettier-now)

</div>


VS Code package to format your Javascript using [Prettier Miscellaneous](https://github.com/arijs/prettier-miscellaneous). *Based on [Esben Petersen's extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and [Bastian Kistner's extension](https://marketplace.visualstudio.com/items?itemName=passionkind.prettier-vscode-with-tabs).*

Prettier Miscellaneous is a fork of [Prettier](https://github.com/prettier/prettier) and allows more customization of the output.<br/>
This extension is a wrapper around Prettier Miscellaneous, please report issues regarding the output on [Prettier Now](https://github.com/remimarsal/prettier-now-vscode/issues) or [Prettier Miscellaneous](https://github.com/arijs/prettier-miscellaneous/issues).<br/><br/>

<p align="center">
  <img src="https://github.com/remimarsal/prettier-now-vscode/raw/master/prettier-now2.gif" alt="Visual" />
</p>

--------------------------------------------------------------------------------

## Changelog
<small>
<ul>
<li>

#### *Update 1.3.0*
*Added support for GraphQL and CSS files with PostCSS syntax.*

</li>

<li>

#### *Update 1.2.0*
*New options jsxSingleQuote, spaceBeforeParen, alignObjectProperties. breakBeforeElse should now break properly.*

</li>

<li>

#### *Update 1.1.0*
*Added support for TypeScript, CSS, LESS and SASS files.*

</li>
</ul>
</small>

--------------------------------------------------------------------------------

## What does prettier do?

Prettier takes your code and reprints it from scratch by taking into account the line length.

For example, take the following code:

```js
foo(arg1, arg2, arg3, arg4);
```

It fits in a single line so it's going to stay as is. However, we've all run into this situation:

```js
foo(reallyLongArg(), omgSoManyParameters(), IShouldRefactorThis(), isThereSeriouslyAnotherOne());
```

Suddenly our previous format for calling function breaks down because this is too long. Prettier is going to do the painstaking work of reprinting it like that for you:

```js
foo(
  reallyLongArg(),
  omgSoManyParameters(),
  IShouldRefactorThis(),
  isThereSeriouslyAnotherOne()
);
```

Prettier enforces a consistent code **style** (i.e. code formatting that won't affect the AST) across your entire codebase because it disregards the original styling by parsing it away and re-printing the parsed AST with its own rules that take the maximum line length
into account, wrapping code when necessary.

--------------------------------------------------------------------------------
## Installation

Install through VS Code extensions. Search for `Prettier Now`.

[Visual Studio Code Market Place: Prettier Now](https://marketplace.visualstudio.com/items?itemName=remimarsal.prettier-now)

Can also be installed using 

```
ext install prettier-now
```
--------------------------------------------------------------------------------

## Usage

#### Format On Save

Set `editor.formatOnSave` to `true` in settings to automatically format files on save.

#### Or using Command Palette (CMD + Shift + P)

```
CMD + Shift + P -> Format Document
```

*<small>In order to run Prettier on your file, make sure VSCode recognises it as a filetype supported by Prettier Now. The filetype currently recognized is shown in the status bar. (e.g: JavaScript for .js files, Sass for .scss files, etc...). If for some reasons Prettier isn't applied on some filetype and you think it should, please let me know and report it [here](https://github.com/remimarsal/prettier-now-vscode/issues) !</small>*

--------------------------------------------------------------------------------

## Settings
Extension settings are specified within VSCode Settings.
Example config:
```
"prettier.singleQuote": true,
"prettier.arrowParens": true,
"prettier.jsonEnable": [] // will disable Prettier Misc on JSON files
```

| Option | Description | Default |
| ------------- | ------------- | ------------- |
| **printWidth**|Fit code within this line limit.| `120`
| **tabWidth**|Number of spaces it should use per tab.|`4`
|**useTabs**|Use tabs instead of spaces.|`true`
|**singleQuote**|If true, will use single instead of double quotes.<br/><br/>*Notes:<br/>• Quotes in JSX will always be double and ignore this setting.<br/>• If the number of quotes outweighs the other quote, the quote which is less used will be used to format the string - Example: `"I'm double quoted"` results in `"I'm double quoted"` and `"This \"example\" is single quoted"` results in `'This "example" is single quoted'`.*|`true`
|**jsxSingleQuote**|If true, will use single instead of double quotes in JSX.|`false`
|**trailingComma**|Controls the printing of trailing commas wherever possible.<br /><br />Valid options:<br/>`none` - No trailing commas<br/>`es5`  - Trailing commas where valid in ES5 (objects, arrays, etc)<br/>`all`  - Trailing commas wherever possible (function arguments)|`none`
|**bracketSpacing**|Print spaces between brackets in array literals.<br /><br />Valid options: <br/>`true` - Example: `[ foo: bar ]`<br/>`false` - Example: `[foo: bar]`.|`true`
|**bracesSpacing**|Print spaces between brackets in object literals<br /><br />Valid options: <br/>`true` - Example: `{ foo: bar }`<br/>`false` - Example: `{foo: bar}`.|`true`
|**breakProperty**|Allow object properties to break lines between the property name and its value.|`false`
|**arrowParens**|Always put parentheses on arrow function arguments.|`true`
|**arrayExpand**|Expand arrays into one item per line.|`false`
|**flattenTernaries**|Format ternaries in a flat style. (**UNSTABLE**)|`false`
|**breakBeforeElse**|Put else clause in a new line.|`false`
|**spaceBeforeParen**|Put a space before function parenthesis.|`false`
|**alignObjectProperties**|Align colons in multiline object literals. Does nothing if object has computed property names.|`false`
|**semi**|Print semicolons at the ends of statements.<br/><br/>Valid options:<br/>`true` - Add a semicolon at the end of every statement.<br/>`false` - Only add semicolons at the beginning of lines that may introduce ASI failures.|`true`
|**javascriptEnable**|Will apply Prettier Misc on JavaScript files.<br /><br />Valid options:<br/>`javascript` - JavaScript files<br/>`javascriptreact` - JSX files|`["javascript","javascriptreact"]`
|**typescriptEnable**|Will apply Prettier Misc on TypeScript files.<br /><br />Valid options:<br/>`typescript` - TypeScript files<br/>`typescriptreact` - TSX files|`["typescript","typescriptreact"]`
|**cssEnable**|Will apply Prettier Misc on Styling files.<br /><br />Valid options:<br/>`css` - CSS files<br/>`less` - LESS files<br/>`scss` - SASS files<br/>`postcss` - CSS files with PostCSS syntax|`["css","less","scss","postcss"]`
|**jsonEnable**|Will apply Prettier Misc on JSON files.<br /><br />Valid options:<br/>`json` - JSON files|`["json"]`
|**graphqlEnable**|Will apply Prettier Misc on GraphQL files.<br /><br />Valid options:<br/>`graphql` - GQL and GraphQL files|`["graphql"]`
|**jsxBracketSameLine**|If true, puts the `>` of a multi-line jsx element at the end of the last line instead of being alone on the next line.|`false`
|**groupFirstArg**|Print functions like setTimeout in a more compact form.|`false`
|**noSpaceEmptyFn**|Omit space before empty anonymous function body.|`false`

--------------------------------------------------------------------------------
## Contribute

Feel free to open issue or PRs [Here](https://github.com/remimarsal/prettier-now-vscode)!
</div>