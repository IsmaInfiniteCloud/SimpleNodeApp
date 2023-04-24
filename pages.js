const _ = require('lodash')

const items = [[1],[2],[3,[44]],[12,12,11]]

const newItems = _.flattenDeep(items)
console.log(newItems)