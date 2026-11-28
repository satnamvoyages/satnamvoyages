// Lets TypeScript accept plain CSS imports such as `import './globals.css'`.
// TypeScript 6 checks side-effect imports by default and errors (TS2882)
// on CSS files when no type declaration exists for them.
declare module '*.css';
