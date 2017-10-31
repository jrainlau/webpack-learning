import moduleA from 'module-a'
import myComp from '~/comp-a'
import 'style/main.css'

if (module.hot) {
  module.hot.accept()
}

moduleA()

myComp.say()
