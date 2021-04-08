#include <stdio.h>
#include <stdlib.h>
#include "stack.h"

void main(){
    Stack *s = create();

    int isEmpty = empty(s);
    if(isEmpty){
        printf("Pilha esta vazia\n");
    }
    
    push(s,10);
    push(s,69);
    push(s,23);
    push(s,3);
    print(s);

    pop(s);
    printf("\n");
    print(s);
}