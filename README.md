# Hypothesis node API
A node wrapper for the hypothesis api.

## Install

```bash
npm install hypothesis-api
```

## Documentation
See the [h documentation page](https://h.readthedocs.io/en/latest/api/#) for more info on request bodys, query params, etc.

## Usage
```
const HypothesisAPI = require('./hypothesis.js');

// To use: Construct new instance with APIKEY
// Get one here: https://hypothes.is/account/developer
const h = new HypothesisAPI('PASTE_YOUR_APIKEY_HERE');

// Example search.
// See query params: https://h.readthedocs.io/en/latest/api/#operation/search

h.search({
    group: 'aRBDqnWx',
    limit:200
}).then((data)=> {
    console.log(data);
});

// Get an annotation by id
h.getAnnotation('xV_csDKHEee9BQMw6s02xQ').then((data)=> {
    console.log(data);
});

// Delete an annotation by id
h.deleteAnnotation('xV_csDKHEee9BQMw6s02xQ').then((data)=> {
    console.log(data);
});

// Patch an annotation by id
h.updateAnnotation('o9QJWDHoEeeVHo_xoqQx0Q', {text: 'yay!'}).then((data)=> {
    console.log(data);
});

// Get profile info
h.getProfile().then((data)=> {
    console.log(data);
});

```




