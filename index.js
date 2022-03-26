const fs = require('fs')

class Contenedor{
    constructor(miArchivo){
        this.rutaArchivo = './miArchivo.txt'
    }

    getAll = async () => {
        try {
            const contenido = await fs.promises.readFile(this.rutaArchivo, 'utf-8')           

            return JSON.parse(contenido)

        } catch (error) {
            await fs.promises.writeFile(this.ruta, JSON.stringify([], null, 2))
            const contenido = await fs.promises.readFile(this.rutaArchivo, 'utf-8')
            return JSON.parse(contenido)
        }
    }
    
    save = async producto =>{
        const arrProd = await this.getAll()

        arrProd.push(producto)

        try {
            await fs.promises.writeFile(this.rutaArchivo, JSON.stringify(arrProd, null, 2))
            return producto.id
        } catch (error) {
            throw new Error('No se pudo guardar')
        }
    }

    getById = async id => {
        const arrProd = await this.getAll()

        const idRecibido = arrProd.find()// Condicion derecibir ID de producto

        return idRecibido

    }

    deleteById = async id => {
        const arrProd = await this.getAll()

        const nuevoArreglo = arrProd.filter(p => p.id !== id)

        try {
            await fs.promises.writeFile(this.rutaArchivo, JSON.stringify(nuevoArreglo, null, 2))
        } catch (error) {
            throw new Error('No se pudo actualizar', error)
        }

    }
    deteleAll = async () => {
        return await fs.promises.writeFile(this.rutaArchivo, JSON.stringify([], null, 2))
    }
    

}

const db = new Contenedor(['miArchivo'])

const producto=[
    {
        nombre:"Teclado",
        id:1,
    },
    {
        nombre:"Parlantes",
        id:2,
    },

    {
        nombre:"Mouse",
        id:3,
    },
]
    


const test = async () => {
    console.log( await db.getAll())
    console.log( await db.save({ nombre: 'Auriculares', id: 4 }))
    console.log( await db.getById(3))
    await db.deteleAll()
    console.log( await db.getAll())
}

test()