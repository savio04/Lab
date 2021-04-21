#include <stdio.h>
#include <stdlib.h>
#include "queue.h"


int main(){
	Queue *q = create();

	q = push(q,2);
	q = push(q,6);

//	print(q);

	return 0;
}
