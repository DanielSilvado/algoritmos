### DESAFIO 1

Um cliente deseja ocultar todos os CPFs de uma longa cadeia de
caracteres. Escrever uma função PHP que receba uma cadeia de caracteres, e que
retorne outra cadeia de caracteres, substituindo todos os CPFs por xxx. 
Por exemplo, para a entrada:

```
“Eu, Fulano, CPF 123.234.345/56, casado com Beltrana,
CPF 234.345.456/67, gostaria de solicitar o registro do imóvel
adquirido de Sicrano, CPF 345.456.567/78.”
```

A função deve retornar:

```
“Eu, Fulano, CPF xxx, casado com Beltrana, CPF xxx, gostaria de
solicitar o registro do imóvel adquirido de Sicrano, CPF xxx.”
```

### QUESTÃO 2

Dado um array de números inteiros, retorne os índices dos
dois números de forma que eles se somem a um alvo
específico.

Você pode assumir que cada entrada teria exatamente uma
solução, e você não pode usar o mesmo elemento duas
vezes.
Um número é considerado feliz, se em algum ponto a soma de seus dígitos ao quadrado equivale a 1.

```
EXEMPLO:

Dado nums = [2, 7, 11, 15], alvo = 9,
Como nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```
