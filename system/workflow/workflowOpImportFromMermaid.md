## Representação de um processo

### START

```javascript
process([Description]):::START
```

### PROCESS

```javascript
process[Description]
```

### DECISION

```javascript
process{Description}
```

### FAIL

```javascript
process([Description]):::FAIL
```

### SUCCESS

```javascript
process([Description]):::SUCCESS
```


## Representação de conexões entre os processos

### AUTO

```javascript
process1 ==o |Message| process2
```
### FORWARD

```javascript
process1 ==> |Message| process2
```


## Exemplo de diagrama

```javascript
flowchart TB
    start([Início]):::START
    decision{Decisão}
    success([Sucesso]):::SUCCESS
    fail([Falha]):::FAIL

    start --o decision
    decision --> success
    decision --> fail 
```