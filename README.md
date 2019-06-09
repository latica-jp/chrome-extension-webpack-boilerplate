# kintone Field Inspector for Chrome DevTools

## Usage

### Show field info

Type `f()` on Chrome DevTools console to show kintone form field info.  
Handy for get field id or code from label, and vice versa.

Examples:
```
// find field which code or label is 'price'
f('price')
// find field which id is 43923
f(43923)
```

### Inspect field

Type `i()` on Chrome DevTools console to find and inspect kintone form field.  
Handy for find field on any kintone form view (create, edit and detail).

Examples:
```
// find and inspect field which code or label is 'price'
f('price')
// find and inspect field which id is 43923
f(43923)
```

## Licence

MIT
