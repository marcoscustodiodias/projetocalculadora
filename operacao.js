let resultado;

function soma(n1, n2) {
    resultado = n1 + n2;
    alert(`${n1} + ${n2} = ${resultado}`);
}

function subtracao(n1, n2) {
    resultado = n1 - n2;
    alert(`${n1} - ${n2} = ${resultado}`);
}

function multiplicacao(n1, n2) {
    resultado = n1 * n2;
    alert(`${n1} * ${n2} = ${resultado}`);
}

function divisao(n1, n2) {
    resultado = n1 / n2;
    alert(`${n1} / ${n2} = ${resultado}`);
}

function divisaoInteira(n1, n2) {
    resultado = n1 % n2;
    alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
}

function potenciacao(n1, n2) {
    resultado = n1 ** n2;
    alert(`${n1} elevado a ${n2}ª ígual a ${resultado}`);
}
