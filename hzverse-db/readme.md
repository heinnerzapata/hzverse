# hzverser-db
## Usage

``` js

const setupDatabase = require('hzverse-db')

setupDatabase(config).then(db => {
  const { Agent , Metric } = db
}).catch(err => console.error(err))

```
