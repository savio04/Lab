
typedef struct list List;

//Cria uma lista
List *createList();

//Insere elemento no incio da lista
List *insertElement(List *l,int element);

//Verifica se a lista esta vazia 
int empty(List *l);

//Remove elemento da lista
List * removeElement(List *l,int element);

//Busca um elemento na lista
List *search(List *l, int element);

//Imprime a lista
void print(List *l);

