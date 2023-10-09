# Fluxos de trabalho

Um fluxo de trabalho refere-se a uma sequência de passos, atividades ou tarefas interconectadas que são executadas para alcançar um objetivo específico. É uma representação visual ou descritiva de como um processo ou conjunto de processos é realizado, desde o início até a conclusão.

Os workflows são comumente usados em diversas áreas, como negócios, tecnologia da informação, produção, gerenciamento de projetos e em muitos outros campos. Eles ajudam a organizar e otimizar processos, garantindo que as tarefas sejam realizadas de forma eficiente e sem interrupções desnecessárias.

Cada etapa em um workflow pode envolver ações humanas, automatizadas ou uma combinação de ambas. Além disso, os workflows podem incluir decisões que direcionam o caminho a ser seguido com base em condições específicas.

Em resumo, um workflow é uma representação estruturada de como um processo é conduzido, com o objetivo de torná-lo mais eficiente, controlado e compreensível.

Um fluxo de trabalho é composto por processos e conectores.

Um [processo](workflowNode) representa uma etapa dentro de um fluxo de trabalho.

Um [conector](workflowConnector) denota a ligação entre dois processos dentro de um fluxo de trabalho.

## Requisitos de um fluxo de trabalho no Zen Erp

- Deve conter precisamente um processo do tipo `START`.
- Deve conter pelo menos um processo do tipo `SUCCESS` ou `FAIL`.
- Se a tag `parallel`{.tag} estiver presente, processos em paralelo serão permitidos.
- Se a tag `parallel`{.tag} não estiver presente, não serão permitidos processos em paralelo.
- Processos de tipos diferentes de `FAIL` ou `SUCCESS` devem ter pelo menos um conector de saída.
- Um processo não pode ser conectado a si mesmo.

## Sugestões para identificação dos processos e mensagens dos conectores

- Processos terminais devem ser identificados preferencialmente com verbos no particípio passado
    - Ex: "Aprovado", "Reprovado"
- Processos regulares devem ser identificador preferencialmente com verbos no infinitivo ou com substantivos
    - Ex: "Aprovar comercial" ou "Aprovação comercial"
- As mensagens nos conectores, por indicarem uma ação, devem utilizar preferencialmente verbos no infinitivo
    - Ex: "Aprovar", "Reprovar", "Submeter para aprovação da diretoria"
