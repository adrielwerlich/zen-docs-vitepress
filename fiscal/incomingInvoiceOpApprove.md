# Aprovar nota fiscal de entrada

Ao aprovar uma nota fiscal de entrada, se os produtos e quantidades no romaneio coincidirem com os da nota fiscal, a aprovação será automática. Contudo, se surgirem disparidades, uma tela será apresentada para que o operador escolha a estratégia de resolução apropriada.

Para revisar eventuais divergências entre uma nota fiscal de entrada e seu respectivo romaneio, favor consultar o relatório "X".

Caso a aprovação de uma nota fiscal de entrada ocorra enquanto o romaneio de entrada estiver sem itens e no status [PREPARANDO]{.status}, o sistema procederá automaticamente à inclusão dos itens no romaneio, alinhando-se com os registros da nota fiscal.

A aprovação de uma nota fiscal com divergências requer permissão sobre o ponto de acesso [`/fiscal/incomingInvoiceOpApproveDivergences` ]{.accessPoint}

## Estratégias para lidar com faltas

As faltas de mercadorias podem ser tratadas de três formas diferentes:

### REJEITAR

Rejeita qualquer operação que apresente falta de mercadorias.

### DEVOLVER

Aceita a mercadoria e deixa marcada para devolução. Pode processar faltas totais e parciais.

### APROPRIAR

Apropria o valor das faltas no mesmo produto. Processa apenas faltas em produtos existentes.


## Estratégias para lidar com sobras

As sobras de mercadorias podem ser tratadas de duas formas diferentes:

### REJEITAR

Rejeita qualquer operação que apresente sobra de mercadorias.

### APROPRIAR

Apropria o valor das sobras no mesmo produto. Processa apenas sobras em produtos existentes.


## Estratégias para lidar com produtos não solicitados

Para lidar com produtos não solicitados em um pedido de compra, existem duas opções:

### ACEITAR

Esta opção permite a aceitação de produtos não solicitados.

### REJEITAR

Esta opção recusa uma operação que inclua produtos não solicitados.
