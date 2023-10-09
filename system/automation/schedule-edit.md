# Edição de agendamento

## Expressão cron

Uma expressão cron é uma sintaxe utilizada em sistemas operacionais baseados em Unix e em alguns outros sistemas para definir um agendamento de tarefas. A expressão cron especifica quando um comando ou script deve ser executado pelo sistema, indicando os valores para os minutos, horas, dias do mês, meses e dias da semana em que a tarefa deve ser executada.

A sintaxe da expressão cron consiste em cinco campos separados por espaços, que indicam a frequência da tarefa a ser executada. Os campos são, na ordem: minutos (0-59), horas (0-23), dia do mês (1-31), mês (1-12) e dia da semana (0-7, onde tanto 0 quanto 7 representam o domingo).

Os valores possíveis para cada campo são:

- Minutos: 0 a 59
- Horas: 0 a 23
- Dia do mês: 1 a 31
- Mês: 1 a 12 (ou os nomes abreviados dos meses em inglês, como jan, feb, mar, etc.)
- Dia da semana: 0 a 7 (sendo 0 e 7 equivalentes a domingo, ou os nomes abreviados dos dias em inglês, como sun, mon, tue, etc.)

Os campos também aceitam caracteres especiais que indicam intervalos, listas, e outras opções de agendamento. Alguns exemplos de caracteres especiais são:

- `*`: representa todos os valores possíveis para aquele campo
- `,`: separa valores individuais para o campo
- `-`: define um intervalo de valores para o campo
- `/`: define uma frequência específica para o campo

### Exemplos de expressão cron

Expressão Cron   | Descrição
-----------------|----------
`* * * * *`      | Executa a tarefa a cada minuto, o tempo todo
`0 * * * *`      | Executa a tarefa a cada hora, no início da hora
`0 0 * * *`      | Executa a tarefa uma vez por dia, à meia-noite
`0 0 * * 1`      | Executa a tarefa uma vez por semana, às segundas-feiras à meia-noite
`*/5 * * * *`    | Executa a tarefa a cada 5 minutos
`0 8-18 * * 1-5` | Executa a tarefa de segunda a sexta, entre as 8h e 18h
`0 0 1 * *`      | Executa a tarefa uma vez por mês, no primeiro dia do mês à meia-noite
`0 0 15,30 * *`  | Executa a tarefa duas vezes por mês, no dia 15 e 30, à meia-noite
`0 0 * * 0`      | Executa a tarefa uma vez por semana, aos domingos à meia-noite
`0 0 1 1 *`      | Executa a tarefa uma vez por ano, no primeiro dia do ano à meia-noite
