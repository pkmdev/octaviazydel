# octaviazydel
Based on the `_s` starter theme

### Available CLI commands

`_s` comes packed with CLI commands tailored for WordPress theme development :

- `composer lint:wpcs` : checks all PHP files against [PHP Coding Standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/php/).
- `composer lint:php` : checks all PHP files for syntax errors.
- `composer make-pot` : generates a .pot file in the `languages/` directory.
- `yarn run compile:css` : compiles SASS files to css.
- `yarn run compile:rtl` : generates an RTL stylesheet.
- `yarn run watch` : watches all SASS files and recompiles them to css when they change.
- `yarn run lint:scss` : checks all SASS files against [CSS Coding Standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/css/).
- `yarn run lint:js` : checks all JavaScript files against [JavaScript Coding Standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/javascript/).
- `yarn run bundle` : generates a .zip archive for distribution, excluding development and system files.
