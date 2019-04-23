# Changelog


## [1.0.0] - 2019-03-04
### Added
- Added `compiler` category options in `config.json`.
- Added `cacheBuild` option in `config.json`.
- Added `rememberFiles` option in `config.json`.
- Added `beep` option in `config.json`.
- Added `backup` option in `config.json`.
- Added `webfont` option in `config.json`.
- Added `criticalcss` options in `config.json`.
- Improved and extended `site` options in `config.json`.
- `backup` task added to compiler.
- `appicons` task added to compiler.
- Compiler will now `beep` when done.
- `appicons` task will create favicons and app icons from a single master image generated from [https://realfavicongenerator.net](https://realfavicongenerator.net).
- Revised CHANGELOG.md added by [@AriesDatuin](https://github.com/ariesdatuin).

### Changed
- Merged options from `metadata.json` to `site` in `config.json`.
- Moved `production` option under `compiler` in `config.json`.
- Moved `preview` option under `compiler` in `config.json`.
- Improved `criticalcss` task.
- Improved `meta` task.
- Core/base files separated from `config.json` to `framework.json`.
- Framework assets and modules are now compiled separately and merged with `combinejs` task.
- Improved `clean` task.
- Moved variables to a separate file in `tasks/variables.js`.

### Fixed
- HTML minification should no longer result in mangled HTML when compiling elements with `data-attributes`.
- Fixed rare occurence where `criticalcss` task would inline entire CSS.
- `lintjs` task should no longer verify third-party JS plugins and libs.
- `lintjs` task should no longer verify SCSS assets.
- Compiler should no longer hang when optimizing SVG assets with no `width` and `height` defined.
- General housekeeping and improvements to compiler.

### Removed
- `metadata.json` is removed and no longer used.
- `sprite` task no longer supported.
- Removed `browserconfig.xml`.
- Removed `manifest.json`.
- Removed unnecessary tasks and modules.
