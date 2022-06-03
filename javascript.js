function calculadora () {
    const operacao = Number(prompt('Escolha sua operação:\n 1 - Soma (+) \n 2 - Subtração (-) \n 3 - Multiplicação (*) \n 4 - Divisão (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'));

    if (!operacao || operacao >= 7){
        alert('Erro - Operação inválida!');
        calculadora();
        return;
    }

    let n1 = Number(prompt(('Insira o primeiro valor:')));
    let n2 = Number(prompt(('Insira o segundo valor:')));

    if (!n1 || !n2) {
        alert('Erro - Operação inválida!');
        calculadora();
        return;
    }
    
    function novaoperacao(){
        let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
    
        if (opcao == 1){
            calculadora();
        } else if (opcao == 2){
            alert('Ate mais!')
        } else {
            alert('digite uma opção valida!')
        }

        novaoperacao();
    }

    if (operacao == 1){
        soma(n1, n2);
        novaoperacao();
    } else if (operacao == 2){
        subtracao(n1, n2);
        novaoperacao();
    } else if (operacao == 3){
        multiplicacao(n1, n2);
        novaoperacao();
    } else if (operacao == 4){
        divisao(n1, n2);
        novaoperacao();
    } else if (operacao == 5){
        divisaoInteira(n1, n2);
        novaoperacao();
    } else if (operacao == 6){
        potenciacao(n1, n2);
        novaoperacao();
    }
}

calculadora();
