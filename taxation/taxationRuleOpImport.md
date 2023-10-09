# Importar regras tributárias

Para simplificar a inserção das regras tributárias, oferecemos a opção de importar as informações por meio de uma planilha de Excel. Isso agiliza o processo e facilita a integração das regras fiscais no sistema.

[Tributação > Regras tributárias > Importar regras tributárias](/taxation/taxationRuleOpImport.html){.menu}

Baixe a [planilha modelo](taxationRuleOpImport.csv) e preencha com as regras tributárias da empresa.

## Colunas

* Flow - **IN** para regra de entrada, **OUT** para regra de saída
* Region - Código da região fiscal (ex: **BR**)
* FiscalProfileCompany - Descrição do perfil fiscal da empresa
* FiscalProfilePerson - Descrição do perfil fiscal do cliente/fornecedor
* FiscalProfileOperation - Descrição do perfil fiscal da operação
* FiscalProfileProduct - Código do perfil fiscal do produto
* TaxationOperation - Código da operação fiscal
* Colunas com as regras tributárias:
    * Tax.IMPOSTO.PROPRIEDADE
        * **IMPOSTO** é o código do imposto (ex: **ICMS**, **IPI**, etc...)
        * **PROPRIEDADE** é o código da propriedade
* Properties.outgoingInvoiceComments - Observações fiscais relacionadas à regra tributária.

## Propriedades

* BaseValue - Expressão para calcular a base de cálculo
* TaxRate - Alíquota do imposto
* CST - Código da situação tributária
* CompensationRate - Percentual de aproveitamento do imposto na entrada

## Expressões

## Exemplos

* Definir a base de cálculo do ICMS como o valor da operação menos o valor do frete
    * Tax.ICMS.baseValue -> operationValue-freightValue
* Definir a alíquota do ICMS como 18%
    * Tax.ICMS.taxRate -> 18
* Definir a CST da operação como 010
    * Tax.ICMS.cst -> 010

tax.ICMS.baseValue | tax.ICMS.taxRate | tax.ICMS.cst
-- | -- | ---
operationValue-freightValue | 18 | 010

* Observação de aproveitamento de ICMS de empresas do Simples Nacional
    * Documento emitido por ME ou EPP optante pelo Simples Nacional. Não gera direito a crédito fiscal de ICMS, IPI e ISS.
