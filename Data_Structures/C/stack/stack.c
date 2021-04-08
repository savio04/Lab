#include <stdio.h>
#include <stdlib.h>
#include "stack.h"

struct stack{
    Queue *start; 
};

struct queue{
    int value;
    Queue *next;
};

Stack * create(){
    Stack *s =(Stack *) malloc(sizeof(Stack));
    s->start = NULL;

    return s;    
}

void  push(Stack *s,int element){
    Queue *q = (Queue *) malloc(sizeof(Queue));
    q->value = element;
    q->next = s->start;

    s->start = q;

}

void pop(Stack *s){
    if(s == NULL){
        return;
    }

    Queue *temp = s->start;
    s->start = temp->next;

    free(temp);
}

void print(Stack *s){
    Queue *temp;

    for(temp = s->start; temp != NULL; temp = temp->next){
        printf("%d\n", temp->value);
    } 
}

