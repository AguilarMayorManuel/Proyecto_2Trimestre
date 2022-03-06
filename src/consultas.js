//1-Genero una colección con la información de cada venta, sin el campo "articulo".

db.ventas.aggregate([{
        $project: {
            "articulo": 0,
            "_id": 0
        }
    },
    {
        $out: {
            db: "proyecto2trimestre",
            coll: "datosVentas"
        }
    }
])

//2-Genero una colección con la información de cada artículo.

db.ventas.aggregate([{
        $unwind: "$articulo"
    },
    {
        $project: {
            "codigoVenta": 1,
            "_id": 0,
            codigoVenta: 1,
            modelo: "$articulo.modelo",
            marca: "$articulo.marca",
            pais: "$articulo.pais",
            precioCompra: "$articulo.precioCompra",
            precioVenta: "$articulo.precioVenta",
            unidadesVendidas: "$articulo.unidadesVendidas",
            divisa: "$articulo.divisa",
            fechalanzamiento: "$articulo.fechalanzamiento",
            diseño: "$articulo.diseño",
            pantalla: "$articulo.pantalla",
            sistemaoperativo: "$articulo.sistemaoperativo",
            hardware: "$articulo.hardware",
            conectividad: "$articulo.conectividad"
        }
    },
    /*{
        $project: {
            codigoVenta: 1,
            modelo: "$articulo.modelo",
            marca: "$articulo.marca",
            pais: "$articulo.pais",
            precioCompra: "$articulo.precioCompra",
            precioVenta: "$articulo.precioVenta",
            unidadesVendidas: "$articulo.unidadesVendidas",
            divisa: "$articulo.divisa",
            fechalanzamiento: "$articulo.fechalanzamiento",
            diseño: "$articulo.diseño",
            pantalla: "$articulo.pantalla",
            sistemaoperativo: "$articulo.sistemaoperativo",
            hardware: "$articulo.hardware",
            conectividad: "$articulo.conectividad"
        }
    },*/
    {
        $out: {
            db: "proyecto2trimestre",
            coll: "datosArticulos"
        }
    }
])

//3-Genero una colección con toda la información de cada cliente.

db.ventas.aggregate([

    {
        $project: {
            "_id": 0,
            "codigoVenta": 1,
            nombre: "$cliente.nombre",
            apellidos: "$cliente.apellidos",
            NIF: "$cliente.NIF",
            direccion: "$cliente.direccion"
        }
    },
    /*{
        $project: {
            codigoVenta: 1,
            nombre: "$cliente.nombre",
            apellidos: "$cliente.apellidos",
            NIF: "$cliente.NIF",
            direccion: "$cliente.direccion"
        }
    },*/
    {
        $out: {
            db: "proyecto2trimestre",
            coll: "datosClientes"
        }
    }
])

//4-Genero una colección con toda la información de cada vendedor.

db.ventas.aggregate([{
        $project: {
            "_id": 0,
            "vendedor": 1,
            "codigoVenta":1
        }
    },
    {
        $group: {
            _id: {
                nombre: "$vendedor.nombre",
                apellidos: "$vendedor.apellidos",
                edad: "$vendedor.edad",
                antiguedad: "$vendedor.antiguedad",
                NIF: "$vendedor.NIF",
                genero: "$vendedor.genero",
                hijos: "$vendedor.hijos",
                salario: "$vendedor.salario"
            },
            ventas:{$addToSet:"$codigoVenta"}
        }
    },
    {
        $project: {
            nombre: {
                $concat: ["$_id.nombre", " ", "$_id.apellidos"]
            }, //uno el campo nombre y apellidos
            edad: "$_id.edad",
            antiguedad: "$_id.antiguedad",
            NIF: "$_id.NIF",
            genero: "$_id.genero",
            hijos: "$_id.hijos",
            salario: "$_id.salario",
            ventas:1
        }
    },
    {
        $project: {
            _id: 0
        }
    },
    {
        $out: {
            db: "proyecto2trimestre",
            coll: "datosVendedores"
        }
    }
])


//5-Queremos saber el número de ventas que ha realizado cada vendedor.

db.datosVentas.aggregate([{
        $group: {
            _id: {
                nombre: "$vendedor.nombre",
                apellidos: "$vendedor.apellidos"
            },
            numeroVentas: {
                $sum: 1
            }
        }
    },
    {
        $project: {
            vendedor: {
                $concat: ["$_id.nombre", " ", "$_id.apellidos"]
            },
            numeroVentas: 1,
            _id: 0
        }
    },
    {
        $sort: {
            "numeroVentas": -1
        }
    }
])

/*RESULTADO:
[
  { numeroVentas: 6, vendedor: 'Sergio Martinez Recaredo' },
  { numeroVentas: 4, vendedor: 'Maria Reyes Fernandez' },
  { numeroVentas: 3, vendedor: 'Julian Gallego Gonzalez' },
  { numeroVentas: 3, vendedor: 'Jose Luis Esteve Moreno' }
]
*/

//6-Queremos saber cuantos artículos se han vendido en cada venta.

db.datosArticulos.aggregate([{
        $sortByCount: "$codigoVenta"
    },
    {
        $project: {
            codigoVenta: "$_id",
            numeroArticulos: "$count",
            _id: 0
        }
    },
    {
        $sort: {
            "codigoVenta": 1
        }
    }
])

/*RESULTADO:
[
  { codigoVenta: '001', numeroArticulos: 1 },
  { codigoVenta: '002', numeroArticulos: 1 },
  { codigoVenta: '003', numeroArticulos: 2 },
  { codigoVenta: '004', numeroArticulos: 1 },
  { codigoVenta: '005', numeroArticulos: 1 },
  { codigoVenta: '006', numeroArticulos: 1 },
  { codigoVenta: '007', numeroArticulos: 1 },
  { codigoVenta: '008', numeroArticulos: 1 },
  { codigoVenta: '009', numeroArticulos: 2 },
  { codigoVenta: '010', numeroArticulos: 1 },
  { codigoVenta: '011', numeroArticulos: 1 },
  { codigoVenta: '012', numeroArticulos: 2 },
  { codigoVenta: '013', numeroArticulos: 1 },
  { codigoVenta: '014', numeroArticulos: 1 },
  { codigoVenta: '015', numeroArticulos: 1 },
  { codigoVenta: '016', numeroArticulos: 1 }
]
*/

//7-Queremos saber cuantas ventas se han realizado cada mes.

db.datosVentas.aggregate([{
        $group: {
            _id: {
                mes: {
                    $month: "$fechaVenta"
                },
                año: {
                    $year: "$fechaVenta"
                }
            },
            numeroVentas: {
                $sum: 1
            }
        }
    },
    {
        $project: {
            mes: "$_id.mes",
            año: "$_id.año",
            numeroventas: "$numeroVentas",
            _id: 0
        }
    },
    {
        $sort: {
            año: 1,
            mes: 1
        }
    }
])

/*RESULTADO:
[
  { mes: 1, 'año': 2021, numeroventas: 1 },
  { mes: 2, 'año': 2021, numeroventas: 2 },
  { mes: 4, 'año': 2021, numeroventas: 1 },
  { mes: 5, 'año': 2021, numeroventas: 3 },
  { mes: 7, 'año': 2021, numeroventas: 1 },
  { mes: 9, 'año': 2021, numeroventas: 2 },
  { mes: 10, 'año': 2021, numeroventas: 2 },
  { mes: 11, 'año': 2021, numeroventas: 2 },
  { mes: 12, 'año': 2021, numeroventas: 1 },
  { mes: 2, 'año': 2022, numeroventas: 1 }
]
*/

//8-Queremos saber cuantas ventas ha realizado cada vendedor y las ganancias que ha generado.

db.datosArticulos.aggregate([{
        $lookup: {
            from: "datosVentas",
            localField: "codigoVenta",
            foreignField: "codigoVenta",
            as: "venta"
        }
    },
    {
        $addFields: {
            vendedor: {
                $arrayElemAt: [
                    "$venta",0
                ]
            }
        }
    },
    {
        $project: {
            venta: 0,
            "vendedor.cliente": 0
        }
    },
    {
        $project: {
            _id: 1,
            modelo: 1,
            precioVenta: 1,
            vendedor: "$vendedor.vendedor",
            unidadesVendidas: 1,
            codigoVenta: 1
        }
    },
    {
        $group: {
            _id: {
                vendedor: "$vendedor",
                venta: "$codigoVenta"
            },
            ganancias: {
                $sum: {
                    $multiply: ["$precioVenta", "$unidadesVendidas"]
                }
            }
        }
    },
    {
        $group: {
            _id: "$_id.vendedor",
            ganancias: {
                $sum: "$ganancias"
            },
            numeroVentas: {
                $sum: 1
            }
        }
    },
    {
        $project: {
            "nombre": "$_id.nombre",
            "apellidos": "$_id.apellidos",
            ganancias: 1,
            numeroVentas: 1
        }
    },
    {
        $project: {
            _id: 0,
            vendedor: {
                $concat: ["$nombre", " ", "$apellidos"]
            },
            numeroVentas: 1,
            ganancias: 1,
        }
    },
    {
        $sort: {
            ganancias: -1
        }
    }
])

/*RESULTADO:
[
  {
    ganancias: 2932,
    numeroVentas: 4,
    vendedor: 'Maria Reyes Fernandez'
  },
  {
    ganancias: 2453,
    numeroVentas: 3,
    vendedor: 'Jose Luis Esteve Moreno'
  },
  {
    ganancias: 2277,
    numeroVentas: 6,
    vendedor: 'Sergio Martinez Recaredo'
  },
  {
    ganancias: 1710,
    numeroVentas: 3,
    vendedor: 'Julian Gallego Gonzalez'
  }
]
*/

//9-Queremos saber que móviles ha vendido cada vendedor.

db.datosArticulos.aggregate([{
        $lookup: {
            from: "datosVentas",
            localField: "codigoVenta",
            foreignField: "codigoVenta",
            as: "venta"
        }
    },
    {
        $addFields: {
            vendedor: {
                $arrayElemAt: [
                    "$venta", 0
                ]
            }
        }
    },
    {
        $project: {
            venta: 0,
            "vendedor.cliente": 0
        }
    },
    {
        $project: {
            _id: 1,
            modelo: 1,
            vendedor: "$vendedor.vendedor",
            codigoVenta: 1,
        }
    },
    {
        $group: {
            _id: "$vendedor",
            moviles: {
                $addToSet: "$modelo"
            },
        }
    },
    {
        $project: {
            _id: 0,
            vendedor: {
                $concat: ["$_id.nombre", " ", "$_id.apellidos"]
            },
            moviles: 1
        }
    }
])

/*RESULTADO:
[
  {
    moviles: [
      'Alcatel 3 (2019)',
      'Samsung Galaxy A30s',
      'Motorola Moto E20',
      'Samsung Galaxy A22 5G',
      'Google Pixel 4a',
      'Apple iPhone 7',
      'Redmi Note 10S'
    ],
    vendedor: 'Sergio Martinez Recaredo'
  },
  {
    moviles: [
      'Apple iPhone 13 Pro Max',
      'Apple iPhone 7',
      'Redmi Note 10S',
      'Samsung Galaxy A30s'
    ],
    vendedor: 'Maria Reyes Fernandez'
  },
  {
    moviles: [
      'Redmi Note 8',
      'Huawei P50',
      'Alcatel 3 (2019)',
      'Google Pixel 4a'
    ],
    vendedor: 'Julian Gallego Gonzalez'
  },
  {
    moviles: [
      'Samsung Galaxy A30s',
      'Apple iPhone 13 Pro Max',
      'Redmi Note 8'
    ],
    vendedor: 'Jose Luis Esteve Moreno'
  }
]
*/

//10-Queremos saber que móviles ha vendido cada vendedor, el color del móvil y cuantas unidades ha vendido de ese móvil.

db.datosArticulos.aggregate([{
        $lookup: {
            from: "datosVentas",
            localField: "codigoVenta",
            foreignField: "codigoVenta",
            as: "venta"
        }
    },
    {
        $addFields: {
            vendedor: {
                $arrayElemAt: [
                    "$venta", 0
                ]
            }
        }
    },
    {
        $project: {
            venta: 0,
            "vendedor.cliente": 0
        }
    },
    {
        $project: {
            _id: 1,
            modelo: 1,
            vendedor: "$vendedor.vendedor",
            codigoVenta: 1,
            "diseño.color": 1,
            unidadesVendidas: 1
        }
    },
    {
        $group: {
            _id: "$vendedor",
            moviles: {
                $push: {
                    modelo: "$modelo",
                    color: "$diseño.color",
                    unidades: "$unidadesVendidas"
                }
            },

        }
    },
    {
        $project: {
            _id: 0,
            vendedor: {
                $concat: ["$_id.nombre", " ", "$_id.apellidos"]
            },
            moviles: 1
        }
    }
])

/*RESULTADO:
[
  {
    moviles: [
      { modelo: 'Alcatel 3 (2019)', color: 'negro', unidades: 1 },
      { modelo: 'Motorola Moto E20', color: 'azul', unidades: 1 },
      { modelo: 'Apple iPhone 7', color: 'rojo', unidades: 2 },
      { modelo: 'Samsung Galaxy A22 5G', color: 'gris', unidades: 1 },
      { modelo: 'Samsung Galaxy A30s', color: 'negro', unidades: 1 },
      { modelo: 'Redmi Note 10S', color: 'blanco', unidades: 4 },
      { modelo: 'Google Pixel 4a', color: 'negro', unidades: 1 },
      { modelo: 'Motorola Moto E20', color: 'negro', unidades: 1 }
    ],
    vendedor: 'Sergio Martinez Recaredo'
  },
  {
    moviles: [
      { modelo: 'Redmi Note 10S', color: 'azul', unidades: 4 },
      {
        modelo: 'Apple iPhone 13 Pro Max',
        color: 'plata',
        unidades: 1
      },
      { modelo: 'Samsung Galaxy A30s', color: 'negro', unidades: 1 },
      { modelo: 'Apple iPhone 7', color: 'negro', unidades: 2 }
    ],
    vendedor: 'Maria Reyes Fernandez'
  },
  {
    moviles: [
      { modelo: 'Huawei P50', color: 'oro', unidades: 1 },
      { modelo: 'Google Pixel 4a', color: 'negro', unidades: 1 },
      { modelo: 'Redmi Note 8', color: 'azul', unidades: 2 },
      { modelo: 'Alcatel 3 (2019)', color: 'negro', unidades: 1 }
    ],
    vendedor: 'Julian Gallego Gonzalez'
  },
  {
    moviles: [
      { modelo: 'Samsung Galaxy A30s', color: 'blanco', unidades: 2 },
      { modelo: 'Redmi Note 8', color: 'negro', unidades: 2 },
      { modelo: 'Apple iPhone 13 Pro Max', color: 'oro', unidades: 1 }
    ],
    vendedor: 'Jose Luis Esteve Moreno'
  }
]
*/

//11-Queremos saber los beneficios de cada venta y los móviles que fueron vendidos.

db.datosArticulos.aggregate([{
        $lookup: {
            from: "datosVentas",
            localField: "codigoVenta",
            foreignField: "codigoVenta",
            as: "venta"
        }
    },
    {
        $addFields: {
            vendedor: {
                $arrayElemAt: [
                    "$venta", 0
                ]
            }
        }
    },
    {
        $project: {
            venta: 0,
            "vendedor.cliente": 0,
            "vendedor.vendedor": 0,
            "vendedor._id": 0,
            "vendedor.codigoVenta": 0,
        }
    },
    {
        $project: {
            _id: 0,
            codigoVenta: 1,
            modelo: 1,
            precioCompra: 1,
            precioVenta: 1,
            unidadesVendidas: 1,
            fechaVenta: "$vendedor.fechaVenta"
        }
    },
    {
        $group: {
            _id: {
                codVenta: "$codigoVenta",
                modelo: "$modelo",
                precioCompra: "$precioCompra",
                precioVenta: "$precioVenta",
                unidadesVendidas: "$unidadesVendidas",
                fechaVenta: "$fechaVenta"
            }
        }
    },
    {
        $project: {
            codVenta: "$_id.codVenta",
            modelo: "$_id.modelo",
            precioCompra: "$_id.precioCompra",
            precioVenta: "$_id.precioVenta",
            unidadesVendidas: "$_id.unidadesVendidas",
            fechaVenta: "$_id.fechaVenta",
            _id: 0
        }
    },
    {
        $group: {
            _id: {
                codigoVenta: "$codVenta",
                modelo: "$modelo"
            },
            ganancias: {
                $sum: {
                    $multiply: ["$precioVenta", "$unidadesVendidas"]
                }
            },
            perdidas: {
                $sum: {
                    $multiply: ["$precioCompra", "$unidadesVendidas"]
                }
            }
        }
    },
    {
        $project: {
            codigoVenta: "$_id.codigoVenta",
            modelo: "$_id.modelo",
            ganancias: 1,
            perdidas: 1,
            _id: 0
        }
    },
    {
        $group: {
            _id: {
                codVenta: "$codigoVenta",
            },
            item: {
                $addToSet: "$modelo"
            },
            ganancias: {
                $sum: "$ganancias"
            },
            perdidas: {
                $sum: "$perdidas"
            }


        }
    },
    {
        $project: {
            venta: "$_id.codVenta",
            beneficio: {
                $round: [{
                    $subtract: ["$ganancias", "$perdidas"]
                }, 2]
            },
            _id: 0,
            item: 1
        }
    },
    {
        $sort: {
            "beneficio": -1
        }
    }
])
/*RESULTADO:
[
    { item: [ 'Huawei P50' ], venta: '001', beneficio: 125 },
    { item: [ 'Redmi Note 8' ], venta: '008', beneficio: 38 },
    { item: [ 'Google Pixel 4a' ], venta: '013', beneficio: 30 },
    { item: [ 'Apple iPhone 13 Pro Max' ], venta: '007', beneficio: 497 },
    { item: [ 'Apple iPhone 7' ], venta: '015', beneficio: 76.26 },
    {
      item: [ 'Alcatel 3 (2019)', 'Redmi Note 8' ],
      venta: '012',
      beneficio: 53
    },
    { item: [ 'Motorola Moto E20' ], venta: '016', beneficio: 16 },
    { item: [ 'Apple iPhone 13 Pro Max' ], venta: '014', beneficio: 497 },
    { item: [ 'Samsung Galaxy A30s' ], venta: '011', beneficio: 25.32 },
    { item: [ 'Redmi Note 10S' ], venta: '010', beneficio: 171 },
    { item: [ 'Apple iPhone 7' ], venta: '005', beneficio: 76.26 },
    {
      item: [ 'Motorola Moto E20', 'Alcatel 3 (2019)' ],
      venta: '003',
      beneficio: 31
    },
    { item: [ 'Samsung Galaxy A30s' ], venta: '004', beneficio: 50.64 },
    { item: [ 'Redmi Note 10S' ], venta: '002', beneficio: 171 },
    {
      item: [ 'Samsung Galaxy A22 5G', 'Samsung Galaxy A30s' ],
      venta: '009',
      beneficio: 51.98
    },
    { item: [ 'Google Pixel 4a' ], venta: '006', beneficio: 30 }
  ]
*/

//12-Ahora queremos ver unicamente las ventas cuyo beneficio sea mayor de 100

db.datosArticulos.aggregate([{
        $lookup: {
            from: "datosVentas",
            localField: "codigoVenta",
            foreignField: "codigoVenta",
            as: "venta"
        }
    },
    {
        $addFields: {
            vendedor: {
                $arrayElemAt: [
                    "$venta", 0
                ]
            }
        }
    },
    {
        $project: {
            venta: 0,
            "vendedor.cliente": 0,
            "vendedor.vendedor": 0,
            "vendedor._id": 0,
            "vendedor.codigoVenta": 0,
        }
    },
    {
        $project: {
            _id: 0,
            codigoVenta: 1,
            modelo: 1,
            precioCompra: 1,
            precioVenta: 1,
            unidadesVendidas: 1,
            fechaVenta: "$vendedor.fechaVenta"
        }
    },
    {
        $group: {
            _id: {
                codVenta: "$codigoVenta",
                modelo: "$modelo",
                precioCompra: "$precioCompra",
                precioVenta: "$precioVenta",
                unidadesVendidas: "$unidadesVendidas",
                fechaVenta: "$fechaVenta"
            }
        }
    },
    {
        $project: {
            codVenta: "$_id.codVenta",
            modelo: "$_id.modelo",
            precioCompra: "$_id.precioCompra",
            precioVenta: "$_id.precioVenta",
            unidadesVendidas: "$_id.unidadesVendidas",
            fechaVenta: "$_id.fechaVenta",
            _id: 0
        }
    },
    {
        $group: {
            _id: {
                codigoVenta: "$codVenta",
                modelo: "$modelo"
            },
            ganancias: {
                $sum: {
                    $multiply: ["$precioVenta", "$unidadesVendidas"]
                }
            },
            perdidas: {
                $sum: {
                    $multiply: ["$precioCompra", "$unidadesVendidas"]
                }
            }
        }
    },
    {
        $project: {
            codigoVenta: "$_id.codigoVenta",
            modelo: "$_id.modelo",
            ganancias: 1,
            perdidas: 1,
            _id: 0
        }
    },
    {
        $group: {
            _id: {
                codVenta: "$codigoVenta",
            },
            item: {
                $addToSet: "$modelo"
            },
            ganancias: {
                $sum: "$ganancias"
            },
            perdidas: {
                $sum: "$perdidas"
            }


        }
    },
    {
        $project: {
            venta: "$_id.codVenta",
            beneficio: {
                $round: [{
                    $subtract: ["$ganancias", "$perdidas"]
                }, 2]
            },
            _id: 0,
            item: 1
        }
    },
    {
        $match: {
            "beneficio": {
                $gt: 100
            }
        }
    },
    {
        $sort: {
            "beneficio": -1
        }
    }
])

/*
RESULTADO:
[
  { item: [ 'Apple iPhone 13 Pro Max' ], venta: '007', beneficio: 497 },
  { item: [ 'Apple iPhone 13 Pro Max' ], venta: '014', beneficio: 497 },
  { item: [ 'Redmi Note 10S' ], venta: '002', beneficio: 171 },
  { item: [ 'Redmi Note 10S' ], venta: '010', beneficio: 171 },
  { item: [ 'Huawei P50' ], venta: '001', beneficio: 125 }
]
*/















