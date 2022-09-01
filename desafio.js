const fs = require("fs");



class Contenedor {
    async save(productos){
        try {
            await fs.promises.writeFile('./productos.txt', JSON.stringify(productos, null, 2), "utf-8");
        } catch(e) {

            console.log(e)}
}   

async getAll(){
    try{
        const contenido = await fs.promises.readFile("./productos.txt", "utf-8");
        console.log(contenido)
        return JSON.parse(contenido);
    } catch (error) {}
} 

async saveNew(productoNuevo) {
    const contenido = await this.getAll();
    const indice = contenido.sort((a, b) => b.id - a.id)[0].id;   
    productoNuevo.id = indice + 1; 
    contenido.push(productoNuevo);
    this.save(contenido)
}

}

const contenedor = new Contenedor();
//contenedor.save(productos);
contenedor.getAll();

