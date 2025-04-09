import operacoes from "./services/operations.js";
import promptSchemaMain from "./prompts/promptschemamain.js";
import { realizarOperacoes, calcularRaizQuadrada } from "./calculate-square-root.js";

import prompt from "prompt";
import chalk from "chalk";


async function main(){

   const {select} = await prompt.get(promptSchemaMain);

   if(select === '1')
    
    realizarOperacoes()
    .then(({ alfaNum1, alfaNum2, operacao }) => {
        const num1 = parseFloat(alfaNum1);
        const num2 = parseFloat(alfaNum2);

        const calcular = operacoes[operacao.trim().toLowerCase()];

        if (calcular) {
            console.log(chalk.green.bold(`Resultado da operação: ${calcular(num1, num2)}`));
        } else {
            console.log(chalk.red.bold("Operação inválida! Escolha entre '+', '-', '*' ou '/'"));
        }
    }) 

    if(select === '2'){
        calcularRaizQuadrada();
22
    }
        
     //.catch((err) => console.error(chalk.red.bold("Erro ao realizar operação:", err)));
    }

main();
