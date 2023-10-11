---
title: Front 1matter of account.md
editLink: true
search: false
disabledFor: ["hanas"]
---


# {{ $frontmatter.title }} {.title}

testeclassecustom {.menu}

# Contas contábeis

Uma conta contábil representa o código usado para classificar e rastrear as transações financeira de uma empresa. Elas representam uma categoria de transações financeiras relacionadas a um item específico, como dinheiro em caixa, contas a receber, estoque ou despesas com aluguel.

Cada conta contábil tem um número de identificação único, um nome e um tipo, que pode ser uma conta de ativo, passivo, patrimônio líquido, receita ou despesa. As contas contábeis são usadas no processo de contabilidade para manter um registro organizado e preciso das transações financeiras de uma empresa e para ajudar na geração relatórios, como balanços patrimoniais, demonstrações de resultados e fluxos de caixa.

## Definições importantes

Ativo - É uma conta contábil que representa um recurso econômico controlado pela empresa que tem o potencial de gerar benefícios financeiros. Ex: Caixa; Contas a receber; Estoque; Propriedades; Equipamentos; Marca.

Passivo - É uma conta contábil que representa uma obrigação ou dívida financeira que a empresa deve a terceiros. Ex: Fornecedores; Contas a pagar; Empréstimos e financiamentos; Salários e encargos; Obrigações Fiscais e Tributárias.

Receita - É o valor total que uma empresa ganha com a venda de bens ou serviços durante um determinado período de tempo. É o dinheiro que entra no caixa da empresa como resultado de suas atividades de negócios.

Despesa - É o valor que uma empresa gasta ou incorre para gerar receita durante um determinado período de tempo. Elas são o oposto das receitas, representando saídas de dinheiro ou perdas financeiras.

Sintética - A conta contábil sintética é uma categoria mais abrangente e geral dentro do plano de contas contábeis de uma entidade. Ela representa um agrupamento de contas contábeis analíticas relacionadas que possuem características semelhantes. As contas contábeis sintéticas fornecem uma visão consolidada e resumida das transações financeiras e operações da organização em diferentes áreas ou categorias.

Analítica - A conta contábil analítica é uma subdivisão específica de uma conta contábil geral. Ela permite um maior nível de detalhamento e precisão na classificação e registro das transações financeiras de uma entidade.

Em caso de dúvidas, pesquise uma conta contábil existente, para referência. E caso for feita uma exclusão, ela será definitiva e somente será efetivada se a conta contábil não tiver dependências.

## Veja também

[Planos de contas contábeis](accountChart)


<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()

console.log(theme);
console.log(page);
console.log(frontmatter.value);
</script>