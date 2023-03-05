
const productos = [
    {id:"1", nombre:"MOTO EI9", descripcion:"holaa",categoria:"MOVILES", precio: 20000, calificacion: 4, 
    imgs: {img1:"https://comunicaplus.net/wp-content/uploads/2022/12/a32-5g.jpg",img2:"https://comunicaplus.net/wp-content/uploads/2022/12/a32-5g.jpg",img3:"https://comunicaplus.net/wp-content/uploads/2022/12/a32-5g.jpg",},
    espesificaciones: { serie: "", fmp: 1, tmp:1, bateria: 1, pantalla: 1,}
    },
    {id:"2", nombre:"SAMSUNG F20 FE", descripcion:"holaa",categoria:"MOVILES", precio: 50000,  calificacion: 4, 
    imgs:{img1:"https://comunicaplus.net/wp-content/uploads/2022/12/a32-5g.jpg",img2:"https://comunicaplus.net/wp-content/uploads/2022/12/a32-5g.jpg",img3:"https://comunicaplus.net/wp-content/uploads/2022/12/a32-5g.jpg",}, 
    espesificaciones: { serie: "aaa", fmp: 20, tmp:30, bateria: 4000, pantalla: 15,}
    },
    {id:"3", nombre:"SAMSUNG A32", descripcion:"holaa",categoria:"MOVILES", precio: 50000,  calificacion: 4, 
    imgs:{img1:"https://comunicaplus.net/wp-content/uploads/2022/12/a32-5g.jpg",img2:"https://comunicaplus.net/wp-content/uploads/2022/12/a32-5g.jpg",img3:"https://comunicaplus.net/wp-content/uploads/2022/12/a32-5g.jpg",}, 
    espesificaciones: { serie: "", fmp: 1, tmp:1, bateria: 1, pantalla: 1,}
    },
    {id:"4", nombre:"IPHONE 14 PLUS", descripcion:"holaa",categoria:"MOVILES", precio: 50000,  calificacion: 4, 
    imgs:{img1:"https://comunicaplus.net/wp-content/uploads/2022/12/a32-5g.jpg",img2:"https://comunicaplus.net/wp-content/uploads/2022/12/a32-5g.jpg",img3:"https://comunicaplus.net/wp-content/uploads/2022/12/a32-5g.jpg",}, 
    espesificaciones: { serie: "", fmp: 1, tmp:1, bateria: 1, pantalla: 1,}
    },
    {id:"5", nombre:"SAMSUNG A72", descripcion:"holaa",categoria:"MOVILES", precio: 50000,  calificacion: 4, 
    imgs:{img1:"https://comunicaplus.net/wp-content/uploads/2022/12/a32-5g.jpg",img2:"https://comunicaplus.net/wp-content/uploads/2022/12/a32-5g.jpg",img3:"https://comunicaplus.net/wp-content/uploads/2022/12/a32-5g.jpg",}, 
    espesificaciones: { serie: "", fmp: 1, tmp:1, bateria: 1, pantalla: 1,}
    },
    {id:"6", nombre:"XIOAMI REDMI 2", descripcion:"holaa",categoria:"MOVILES", precio: 60000,  calificacion: 4, 
    imgs:{img1:"https://comunicaplus.net/wp-content/uploads/2022/12/a32-5g.jpg",img2:"https://comunicaplus.net/wp-content/uploads/2022/12/a32-5g.jpg",img3:"https://comunicaplus.net/wp-content/uploads/2022/12/a32-5g.jpg",}, 
    espesificaciones: { serie: "", fmp: 1, tmp:1, bateria: 1, pantalla: 1,}
    }
]

function getProducts(){
        return new Promise((res, req)=>{
            setTimeout(() => {
                if(true){return res(productos)}
                else{console.log("Error al obtener los productos");}
            }, 0);
        })
   
}

export default getProducts