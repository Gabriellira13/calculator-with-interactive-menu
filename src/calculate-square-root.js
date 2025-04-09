import prompt from "prompt";
import chalk from "chalk";

prompt.start();

async function realizarOperacoes () {

     return new Promise((resolve, reject) => {
        prompt.get([
            {
                name: 'alfaNum1',
                description: (chalk.yellow.bold)('Digite o primeiro número:'),
                required: true,
                conform: (value) => !isNaN(value),
                message: chalk.red.bold("Caracter não permitido!! entre apenas com números")
                
            },
            {
                name: 'operacao',
                description: (chalk.yellow.bold) ('Digite a operação (+, -, *, /):'),
                pattern: /^[+\-*/]$/, // Aceita apenas os símbolos permitidos
                message: (chalk.red.bold) ('A operação deve ser +, - ou *'),
                required: true
            },
            {
                name: 'alfaNum2',
                description: (chalk.yellow.bold) ('Digite o segundo número:'),
                required: true,
                conform: (value) => !isNaN(value),
                message: chalk.red.bold("Caracter não permitido!! entre apenas com números")
            }
        ], function (err, result) {
            if (err) {
                console.log(chalk.red.bold)("Erro ao obter dados da operação:", err);
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}


function calcularRaizQuadrada() {
    return new Promise((resolve, reject) => {
        prompt.get(
            {
                name: 'raiz1',
                description: (chalk.yellow.bold)('Digite o número que deseja saber a raiz quadrada:'),
                required: true,
                conform: (value) => !isNaN(value), // Garante que seja um número
                message: 'Caracter não permitido! Entre apenas com números'
            },
            function (err, result) {
                if (err) {
                    reject('Erro ao capturar entrada');
                    return;
                }

                const numero = parseFloat(result.raiz1); // Converte o valor para número

                if (numero >= 0) {
                    const raizQuadrada = Math.sqrt(numero); // Calcula a raiz quadrada
                    console.log(chalk.greenBright.bold(raizQuadrada)); // Retorna o valor calculado
                } else {
                    reject('Não é possível calcular a raiz quadrada de um número negativo.');
                }
            }
        );
    });
}

export {realizarOperacoes, calcularRaizQuadrada};