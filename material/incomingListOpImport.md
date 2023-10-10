# Importação de itens de romaneio de entrada através de planilha

## Preparação 

Baixe a [planilha modelo](incomingListOpImport.xlsx) e preencha com as informações de cada item.

## Colunas

    * Warehouse - Código do armazém
    * Address - Código do endereço
    * Depositor.id - ID do depositante
    * ProductPacking - Código do produto
    * ProductPacking.barcode - Código de barras do produto
        - Para produtos que tenha código EAN informar essa coluna
    * Quality - Código da qualidade
    * Lot - Código do lote
    * Lot.properties.<prop> - Propriedade do lote
    * Serial - Número serial
    * Serial.properties.<prop> - Propriedade do serial
    * ExpirationDate - Data de validade
    * HandlingUnit - Código do palete
    * Quantity - Quantidade
        - Se não informado o sistema adotará quantidade 1
    * NetWeightKg - Peso líquido
    * GrossWeightKg - Peso bruto
    * VolumeM3 - Volume da embalagem
    * Tags - Tags
    * Properties.<prop> - Propriedades do item do romaneio

![Preenchimento da planilha](incomingListOpImport.png)

## Importando a planilha

### Incluindo um novo romaneio e importando a planilha

![Romaneio e importe de planilha](incomingListOpImport1.png)

## Pontos relevantes

1. Para importar produtos com controle serial (ex: peças de tecidos, componentes com número de série, automóveis), cada linha da planilha deverá representar um item com seu respectivo número serial e quantidade;
1. É obrigatório preencher pelo menos uma das colunas: productPacking.code ou productPacking.barcode. As demais colunas são opcionais, e caso não sejam preenchidas, o sistema atribuirá um valor padrão;
1. Na coluna **productPacking.code** preencher apenas o código, não necessitando da descrição;
1. Caso o romaneio de entrada já estiver criado, pule a etapa de criação do cabeçalho e vá diretamente para a importação da planilha.