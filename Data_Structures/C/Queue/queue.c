#include <stdio.h>
#include <stdlib.h>
#include "queue.h"

struct list{
	int value;
	List *next;
};

struct queue{
	List *first;
	List *end;
};


Queue *create(){
	Queue *q = (Queue *)malloc(sizeof(Queue));
	
	q->first = NULL;
	q->end  = NULL;

	return q;
}

void print(Queue *q){
	List *temp;

	for(temp = q->first; temp != NULL; temp = temp->next){
		printf("%d ", temp->value);
	}
}

int empty(Queue *q){
	return q == NULL;
}

Queue * push(Queue *q,int element){
	List * temp = (List *) malloc(sizeof(List));
	temp->value = element;
	temp->next = NULL;

	if(empty(q)){
		q->first = temp;
	}else{
		q->end->next = temp;
		
	}
	q->end = temp;
	return q;
}

Queue* removeQueue(Queue *q){

	List *temp = q->first;
	q->first = q->first->next;

	free(temp);

	return q;
}
