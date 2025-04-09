import chalk from 'chalk';

const promptSchemaMain = {
  properties: {
    select: {
      description: chalk.yellow.bold("Escolha a ferramenta (1 - Operações básicas / 2 - Raiz quadrada):"),
      pattern: /^[1-2]$/, // Permite apenas 1 ou 2
      message: chalk.red.italic("Escolha entre 1 ou 2"),
      required: true
    }
  }
}

export default promptSchemaMain;