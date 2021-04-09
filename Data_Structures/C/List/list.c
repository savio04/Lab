#include <stdio.h>
#include <stdlib.h>
#include "list.h"

struct list{
    int value;
    List *next;
};

List *createList(){
    return NULL;
}

int empty(List *l){
    return NULL == l;
}

List * insertElement(List *l, int element){
    
    List *newElement = (List *)malloc(sizeof(List));

    newElement->value = element;
    newElement->next = l;

    return newElement;
}

List * removeElement(List *l, int element){
    List *temp = l->next;
    List* previous = l;

    if(l->value == element){
        free(l);
        return temp;
    }

    for(temp; temp != NULL;temp = temp->next){
        if(temp->value == element){
            previous->next = temp->next;
            free(temp);
            break;
        }
        previous  = temp;
    }
    return l;
}

List * search(List *l, int element){
    List *temp = l;

    for(temp; temp != NULL; temp = temp->next){
        if(temp->value == element){
            temp->next = NULL;
            return temp;
        }
    }

    return NULL;
               
}

void print(List *l){
    List *temp = l;

    for(temp;temp != NULL; temp = temp->next){
        printf("%d ", temp->value);
    }

    printf("\n");
}




