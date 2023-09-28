//Arrays multidimesuionais "Arrays dentro de arrays"

//Ex: Tabela, ou matrizes em C#
// 1 2 4
// 3 6 9 // 3 linhas por 3 colunas
// 8 6 9

const e = [ [ 1, 2, 4 ], [ 3, 4, 7 ] ];

for (let i = 0; i < e.length; i++) {
    for (let j = 0; j < e[i].length; j++) {
        process.stdout.write(e[i][j] + "\t");
    }
    console.log("");
}