# Processos

## Tipos de Processos

O tipo `START` denota o processo inicial de um fluxo de trabalho. Cada fluxo de trabalho deve conter precisamente um processo inicial.

O tipo `PROCESS` indica um processo comum.

O tipo `DECISION` refere-se a um processo de decisão. Um processo de decisão pode ter múltiplas saídas, mas apenas uma delas será executada.

O tipo `BRANCH` indica uma ramificação no fluxo de trabalho e a partir deste ponto os processos são executados em paralelo.

O tipo `MERGE` indica um reagrupamento de fluxos que foram separados por uma ramificação.

O tipo `FAIL` representa um processo que falhou.

O tipo `SUCCESS` indica um processo que foi concluído com sucesso.


