class Stack{
    constructor() {
        this.items = []
    }

    push(element){
       return  this.items.push(element)
    }

    pop(){
          return this.items.pop()
    }


    peek(){
        return this.items[this.items.length -1 ]
    }


}
