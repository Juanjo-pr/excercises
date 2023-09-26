export class MakeHTML{

    constructor(){
        this.container
        this.data
    }
  
    model(obj){
      const newObj = {
        cont: obj.cont,
        elem: obj.elem,
        id: obj.id,
        class: obj.class,
        value: obj.value,
        type: obj.type,
        placeholder: obj.placeholder,
        text: obj.text,
        dataset1: obj.dataset1,
        any: obj.any,
      }
      return newObj
    }
  
    create(container, obj){
      const elem = document.createElement(obj.elem)
      if(obj.id){elem.setAttribute('id', obj.id)}
      if(obj.class){elem.setAttribute('class', obj.class)}
      if(obj.value){elem.setAttribute('value', obj.value)}
      if(obj.type){elem.setAttribute('type', obj.type)}
      if(obj.placeholder){elem.setAttribute('placeholder', obj.placeholder)}
      if(obj.text){elem.append(obj.text)}
      if(obj.dataset1){elem.setAttribute(obj.dataset1[0], obj.dataset1[1])}
      if(obj.any){elem.setAttribute(obj.any, '')}
  
      if(obj.cont === 'main'){container.appendChild(elem)}
      if(obj.cont.length === 2){
        let cont = ''
        if(obj.cont[0] === 'id'){cont = container.querySelector(`#${obj.cont[1]}`)}
        if(obj.cont[0] === 'class'){cont = container.querySelector(`.${obj.cont[1]}`)}
        if(cont){cont.appendChild(elem)}
      }
  
      return elem
    }
  
    build(container, data, arConditions = ['new'], specificData = undefined) {
      let arraySpecificIds = []
      if(specificData){arraySpecificIds = Object.keys(specificData)}
      this.container = container
      this.data = data
      if(this.data.length > 0){
        this.data.forEach(dat => {
          const obj = this.model(dat)
          if(specificData){
            let ifId = false
            if(obj.id){ifId = arraySpecificIds.some(id => id === obj.id)}
            if(ifId){
              const elem = this.create(this.container, obj)
              elem.value = specificData[obj.id]
            } 
            else{this.create(this.container, obj)}
          }
          else{this.create(this.container, obj)}
  
          const elem = this.create(this.container, obj)
          if(elem.id === 'btn_edit_task'){
            elem.setAttribute('data-edit', specificData['btn_edit_task'])
            elem.setAttribute('data-status', specificData['status'])
          }
          
        })
      }
      return container
    }
}