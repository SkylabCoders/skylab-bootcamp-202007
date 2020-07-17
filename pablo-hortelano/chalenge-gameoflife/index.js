

let selector = document.querySelector(".row-1-column-4")
selector.setAttribute('class', 'paintItInBlack')




/* const drawBoard = (ctx, step) => {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        ctx.fillStyle = (i + j) & 1 ? "black" : "white";
        ctx.fillRect(j * step, i * step, step, step);
      }
    }
  };
  
  const drawPieces = (ctx, y, color, step) => {
    ctx.fillStyle = color;
    
    for (let i = y; i < 2 * step + y; i += step) {
      for (let j = step / 2; j < 8 * step; j += step) {
        ctx.beginPath();
        ctx.arc(j, i - step / 2, step / 3, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  };
  
  const step = 60;
  const c = document.createElement("canvas");
  c.height = c.width = step * 8;
  document.body.appendChild(c);
  const ctx = c.getContext("2d");
  
  drawBoard(ctx, step);
  drawPieces(ctx, step, "red", step);
  drawPieces(ctx, step * 7, "blue", step); */

  /*
  const drawBoard = (ctx, step) => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        ctx.fillStyle = (i + j) & 1 ? "black" : "white"; //Define a red fill-color for the rectangle:
        ctx.fillRect(j * step, i * step, step, step); //fillRect()  de la API Canvas 2D dibuja un rectángulo relleno en la posición ( x, y ).
      }
    }
  };
  
  const drawPieces = (ctx, y, color, step) => {
    ctx.fillStyle = color;
    
    for (let i = y; i < 2 * step + y; i += step) {
      for (let j = step / 2; j < 10 * step; j += step) {
        ctx.beginPath(); //beginPath() del API Canvas 2D comienza una nueva ruta vaciando la lista de sub-rutas
        ctx.arc(j, i - step / 2, step / 3, 0, Math.PI * 2); //The arc() method creates an arc/curve (used to create circles, or parts of circles).
        ctx.fill(); //The fill() method fills the current drawing (path). The default color is black.
      }
    }
  };
  
  const step = 60; //Tamaño
  const c = document.createElement("canvas");
  c.height = c.width = step * 10;
  document.body.appendChild(c);
  const ctx = c.getContext("2d"); //crea un elemento canvas y le da contexto 2d
  
  drawBoard(ctx, step);
  drawPieces(ctx, step, "red", step);
  drawPieces(ctx, step * 9, "blue", step); //Con el step * 10 sleccionasla posición vertical del tablero, si cambias step cambia tamaño de los pixeles
  */


