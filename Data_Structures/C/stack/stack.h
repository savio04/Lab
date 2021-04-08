
typedef struct stack Stack;
typedef struct queue Queue;

//Cria uma estrutura do tipo pilha
Stack* create();

//Verifica se a pilha esta vazia
int empty(Stack *s);

//Adiciona um elemento no topo da pilha
void push(Stack *s, int element);

//Retira um elemento do topo da pilha
void pop(Stack *s);

//imprime a pilha
void print(Stack *s);
