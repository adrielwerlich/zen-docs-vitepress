# Antecipação de contas a receber

A antecipação de contas a receber é uma operação em que a empresa recebe um adiantamento de um cliente antes da entrega dos bens ou serviços e através da geração de nota fiscal. Essa modalidade de operação pode ser tratada de três formas distintas:

## No módulo financeiro como uma receita

![Receita](../treasury/revenueOpCreate.png)

## Pontos relevantes

1. Discriminação da receita: A conta contábil deve ser classificada como Passivo, Adiantamentos de Cliente, e os recursos devem ser direcionados para a conta contábil do banco onde foram creditados (exemplo: caixa, banco, etc);
1. Nos casos de antecipações realizadas antes da implantação do sistema, a classificação deve ser discriminada da seguinte forma:
    * Discriminação da receita: A conta contábil deve ser classificada como Passivo, Adiantamentos de Cliente.
    * Destino dos recursos: A conta contábil deve ser classificada como Passivo, Ajustes de Exercícios Anteriores.


## No módulo contábil incluindo um lançamento contábil

![Lançamento contábil](../../accounting/journalEntryOpCreate.png)

## Pontos relevantes

1. Débito: A conta contábil do banco onde os recursos foram creditados (exemplo: caixa, banco, etc).
Crédito: A conta contábil deve ser classificada como Passivo, Adiantamentos de Cliente.
1. No caso de antecipações realizadas antes da implantação do sistema, a classificação será a seguinte:
    * Débito: Conta contabil - Passivo, Ajustes de exercícios anteriores
    * Crédito: Conta contabil - Passivo, Adiantamentos de cliente
1. Se clicar apenas em **Gravar**, o lançamento ficará salvo para ser publicado posteriormente ao clicar em **Gravar e publicar**.


## No módulo fiscal escriturando uma nota fiscal de devolução

Ao registrar uma nota fiscal de devolução, esse processo irá gerar um crédito para o cliente no valor registrado na nota. Para que isso seja contabilizado como um crédito, no ícone **forma de pagamento**, o tipo deve ser selecionado como **pagamento**.


## Liquidação de contas a receber baixando das antecipações

![Liquidação de antecipada](../receivable/receivableOpSettle.png)

Se a antecipação foi registrada na conta contábil de adiantamentos de clientes, clique em Incluir liquidação e informe a conta contábil **Passivo, Adiantamentos de cliente** na liquidação.