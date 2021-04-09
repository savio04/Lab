#include <stdio.h>
#include <stdlib.h>
#include "list.h"

void main(){
    List *list = createList();
    list = insertElement(list,10);
    list = insertElement(list,25);
    list = insertElement(list,35);
    list = insertElement(list,98);
    list = insertElement(list,78);
    print(list);
    
    list = removeElement(list,25);  
    print(list);

    List *l = search(list,78);
    
    if(!empty(l)){
        printf("Elemento encontrado: \n");
        print(l);
    }   
}
