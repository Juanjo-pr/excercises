require('./styles.css')

import { MakeHTML } from './scripts/tools.js'

const makehtml = new MakeHTML()

class Colors{
    constructor(container, makehtml){
        this.container = container
        this.makehtml = makehtml

        this.run()
    }

    run(){
        console.log(this.container)

        this.buildHTML()
    }

    buildHTML(){
        this.makehtml()
    }


}

const cont = document.querySelector('#main_container')
new Colors(cont, makehtml)