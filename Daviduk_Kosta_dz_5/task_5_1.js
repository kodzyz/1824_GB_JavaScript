/* 
1. Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги.
Доска должна быть верно разлинована на черные и белые ячейки. Строки должны
нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.
 */

function chess() {
    let board = document.querySelector('.board');    
    let field;
    for (let i = 0; i < 8; i++){        
        for (let j = 0; j < 8; j++){            
            field = document.createElement('div');            
            if ((i + j) % 2 == 0) field.className = 'white';                          
            else field.className = 'black';            
            board.appendChild(field);                      
        }
    }
}
chess();

