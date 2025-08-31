# Change Log

All notable changes to the "sparked" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [0.0.7]

- Fixed case sensitivity issue with color hex codes
  - Added uppercase versions of all color hex codes to support both lowercase and uppercase input
  - Now works with colors like `#F4F6F9`, `#E5E9F1`, etc. in addition to lowercase versions

## [0.0.6]

- Added sequential and categorical color snippets
- Added transparent color snippet

## [0.0.5]

- Updated blue color naming convention from descriptive names to numbered system
  - `blue-lightest` → `blue-100`
  - `blue-lighter` → `blue-200`
  - `blue-light` → `blue-300`
  - `blue` → `blue-400`
  - `blue-dark` → `blue-500`
  - `blue-darker` → `blue-600`
- Added font-weight snippets for Spark design system variables
  - `normal` → `$spark-text-font-weight-normal`
  - `semibold` or `600` → `$spark-text-font-weight-semibold`
  - `bold` → `$spark-text-font-weight-bold`
- Added new blue color variants
  - `$spark-color-blue-25`
  - `$spark-color-blue-50`

## [0.0.4]

- Initial release