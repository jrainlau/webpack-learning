import myModuleA from 'module-a'
import myModuleB from 'module-b'

import('~/comp-a').then((compA) => {
  compA.default()
})
import('~/comp-b').then((compB) => {
  compB.default()
})

myModuleA()
myModuleB()

console.log('html-webpack-plugin~~~')