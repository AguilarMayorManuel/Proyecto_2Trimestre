db.ventas.drop()
db.ventas.insertMany([{
    _id: 0,
    codigoVenta: "001",
    fechaVenta: new Date("2021-09-21"),
    articulo: [{
        modelo: "Huawei P50",
        marca: "Huawei",
        pais: "China",
        precioCompra: 760,
        precioVenta: 885,
        unidadesVendidas: 1,
        divisa: "euro",
        fechalanzamiento: new Date("2021-07-01"),
        diseño: {
            ancho: 73.8,
            alto: 156.5,
            grosor: 7.9,
            uom: "milimetro",
            peso: 181,
            uom: "gramo",
            materiales: ["aleacion de aluminio", "cristal"],
            huelladactilar: true,
            color: "oro"
        },
        pantalla: {
            pulgadas: 6.50,
            tipopantalla: "OLED"
        },
        sistemaoperativo: "android",
        hardware: {
            procesador: {
                modelo: "Qualcomm Snapdragon 888 4G",
                nucleos: 8,
                frecuencia: 2.84,
                uom: "gigahercio"
            },
            almacenamiento: {
                memoriaram: 8,
                memoriainterna: 128,
                uom: "gigabyte"
            },
            camara: {
                principal: {
                    resolucion: 50,
                    apertura: 1.8
                },
                dual: true,
                caracteristicasdual: {
                    resolucion: 13,
                    apertura: 2.2
                },
                frontal: {
                    resolucion: 13,
                    apertura: 2.4
                },
                uom: {
                    resolucion: "megapixel",
                    apertura: "diafragma"
                }
            },
            bateria: {
                capacidad: 4100,
                uom: "mega-amperio",
                extraible: false,
                cargarapida: true
            }
        },
        conectividad: {
            banda: [4, 3, 2],
            nfc: true,
            bluetooth: "5.2",
            tipousb: "C",
            audiojack: false
        }
    }, ],
    cliente: {
        nombre: "Juan Jose",
        apellidos: "Cardenas Guillamon",
        NIF: "19384214E",
        direccion: {
            calle: "Avenida Sanchez Pizjuan",
            bloque: "26",
            planta: "2",
            puerta: "D",
        }
    },
    vendedor: {
        nombre: "Julian",
        apellidos: "Gallego Gonzalez",
        edad: 36,
        antiguedad: 9,
        NIF: "93428123E",
        genero: "male",
        hijos: {
            tiene: true,
            cantidad: 2
        },
        salario: 1726.29
    }
}, {
    _id: 1,
    codigoVenta: "002",
    fechaVenta: new Date("2021-07-02"),
    articulo: [{
        modelo: "Redmi Note 10S",
        marca: "Xiaomi",
        pais: "China",
        precioCompra: 146.25,
        precioVenta: 189,
        unidadesVendidas: 4,
        divisa: "euro",
        fechalanzamiento: new Date("2021-03-01"),
        diseño: {
            ancho: 74.5,
            alto: 160.5,
            grosor: 8.3,
            uom: "milimetros",
            peso: 179,
            uom: "gramos",
            materiales: ["plastico", "P2i nano coating"],
            huelladactilar: true,
            color: "azul"
        },
        pantalla: {
            pulgadas: 6.43,
            tipopantalla: "amoled"
        },
        sistemaoperativo: "android",
        hardware: {
            procesador: {
                modelo: "MediaTek Helio G95",
                nucleos: 8,
                frecuencia: 2,
                uom: "gigahercio"
            },
            almacenamiento: {
                memoriaram: 6,
                memoriainterna: 128,
                uom: "gigabyte"
            },
            camara: {
                principal: {
                    resolucion: 64,
                    apertura: 1.79
                },
                dual: false,
                caracteristicasdual: {
                    resolucion: null,
                    apertura: null
                },
                frontal: {
                    resolucion: 13,
                    apertura: 2.45
                },
                uom: {
                    resolucion: "megapixel",
                    apertura: "diafragma"
                }
            },
            bateria: {
                capacidad: 5000,
                uom: "mega-amperio",
                extraible: false,
                cargarapida: true
            }
        },
        conectividad: {
            banda: [4, 3, 2],
            nfc: true,
            bluetooth: "5.0",
            tipousb: "C",
            audiojack: true
        }
    }],
    cliente: {
        nombre: "Francisco",
        apellidos: "Gimenez Gutierrez",
        NIF: "39039394R",
        direccion: {
            calle: "Girasol",
            bloque: "4",
            planta: "3",
            puerta: "B",
        }
    },
    vendedor: {
        nombre: "Maria",
        apellidos: "Reyes Fernandez",
        edad: 29,
        antiguedad: 1,
        NIF: "00324893T",
        genero: "female",
        hijos: {
            tiene: false,
            cantidad: null
        },
        salario: 1443
    }
}, {
    _id: 2,
    codigoVenta: "003",
    fechaVenta: new Date("2022-02-03"),
    articulo: [{
            modelo: "Alcatel 3 (2019)",
            marca: "Alcatel",
            pais: "China",
            precioCompra: 75,
            precioVenta: 90,
            unidadesVendidas: 1,
            divisa: "euro",
            fechalanzamiento: new Date("2019-02-01"),
            diseño: {
                ancho: 69.7,
                alto: 151.1,
                grosor: 8,
                uom: "milimetro",
                peso: 145,
                uom: "gramo",
                materiales: "plastico",
                huelladactilar: true,
                color: "negro"
            },
            pantalla: {
                pulgadas: 5.9,
                tipopantalla: "LCD IPS"
            },
            sistemaoperativo: "android",
            hardware: {
                procesador: {
                    modelo: "MediaTek Helio P23",
                    nucleos: 8,
                    frecuencia: 2,
                    uom: "gigahercio"
                },
                almacenamiento: {
                    memoriaram: 4,
                    memoriainterna: 64,
                    uom: "gigabyte"
                },
                camara: {
                    principal: {
                        resolucion: 13,
                        apertura: 2
                    },
                    dual: false,
                    caracteristicasdual: {
                        resolucion: null,
                        apertura: null
                    },
                    frontal: {
                        resolucion: 5,
                        apertura: 2.4
                    },
                    uom: {
                        resolucion: "megapixel",
                        apertura: "diafragma"
                    }
                },
                bateria: {
                    capacidad: 3000,
                    uom: "mega-amperio",
                    extraible: false,
                    cargarapida: false
                }
            },
            conectividad: {
                banda: [4, 3, 2],
                nfc: true,
                bluetooth: "4.2",
                tipousb: "microUSB 2.0",
                audiojack: true
            }
        },
        {
            modelo: "Motorola Moto E20",
            marca: "Motorola",
            pais: "Estados Unidos",
            precioCompra: 92,
            precioVenta: 108,
            unidadesVendidas: 1,
            divisa: "euro",
            fechalanzamiento: new Date("2021-09-01"),
            diseño: {
                ancho: 75.6,
                alto: 185,
                grosor: 8.5,
                uom: "milimetro",
                peso: 185,
                uom: "gramo",
                materiales: "plastico",
                huelladactilar: true,
                color: "azul"
            },
            pantalla: {
                pulgadas: 6.5,
                tipopantalla: "TFT LCD"
            },
            sistemaoperativo: "android",
            hardware: {
                procesador: {
                    modelo: "Unisoc T700",
                    nucleos: 8,
                    frecuencia: 1.8,
                    uom: "gigahercio"
                },
                almacenamiento: {
                    memoriaram: 2,
                    memoriainterna: 32,
                    uom: "gigabyte"
                },
                camara: {
                    principal: {
                        resolucion: 13,
                        apertura: 2
                    },
                    dual: false,
                    caracteristicasdual: {
                        resolucion: null,
                        apertura: null
                    },
                    frontal: {
                        resolucion: 5,
                        apertura: 2.2
                    },
                    uom: {
                        resolucion: "megapixel",
                        apertura: "diafragma"
                    }
                },
                bateria: {
                    capacidad: 4000,
                    uom: "mega-amperio",
                    extraible: false,
                    cargarapida: true
                }
            },
            conectividad: {
                banda: [4, 3, 2],
                nfc: false,
                bluetooth: "5.0",
                tipousb: "C",
                audiojack: true
            }
        }
    ],
    cliente: {
        nombre: "Vincenzo",
        apellidos: "Cimadomo Benitez",
        NIF: "94528724Q",
        direccion: {
            calle: "Santiago",
            bloque: "7",
            planta: "1",
            puerta: "A",
        }
    },
    vendedor: {
        nombre: "Sergio",
        apellidos: "Martinez Recaredo",
        edad: 54,
        antiguedad: 20,
        NIF: "38251044H",
        genero: "male",
        hijos: {
            tiene: true,
            cantidad: 3
        },
        salario: 2100
    }
}, {
    _id: 3,
    codigoVenta: "004",
    fechaVenta: new Date("2021-04-11"),
    articulo: [{
        modelo: "Samsung Galaxy A30s",
        marca: "Samsung",
        pais: "China",
        precioCompra: 243.68,
        precioVenta: 269,
        unidadesVendidas: 2,
        divisa: "euro",
        fechalanzamiento: new Date("2019-08-01"),
        diseño: {
            ancho: 74.7,
            alto: 158.5,
            grosor: 7.8,
            uom: "milimetro",
            peso: 166,
            uom: "gramo",
            materiales: "plastico",
            huelladactilar: true,
            color: "blanco"
        },
        pantalla: {
            pulgadas: 6.4,
            tipopantalla: "amoled"
        },
        sistemaoperativo: "android",
        hardware: {
            procesador: {
                modelo: "Samsung Exynos 7 Octa 7904",
                nucleos: 8,
                frecuencia: 1.8,
                uom: "gigahercio"
            },
            almacenamiento: {
                memoriaram: 4,
                memoriainterna: 128,
                uom: "gigabyte"
            },
            camara: {
                principal: {
                    resolucion: 16,
                    apertura: 1.7
                },
                dual: true,
                caracteristicasdual: {
                    resolucion: 5,
                    apertura: 2.2
                },
                frontal: {
                    resolucion: 16,
                    apertura: 2
                },
                uom: {
                    resolucion: "megapixel",
                    apertura: "diafragma"
                }
            },
            bateria: {
                capacidad: 4000,
                uom: "mega-amperio",
                extraible: false,
                cargarapida: true
            }
        },
        conectividad: {
            banda: [4, 3, 2],
            nfc: true,
            bluetooth: "5.0",
            tipousb: "microUSB 2.0",
            audiojack: true
        }
    }, ],
    cliente: {
        nombre: "Iker",
        apellidos: "Pallares Cespedes",
        NIF: "96160416S",
        direccion: {
            calle: "Juan Rabadan",
            bloque: "3",
            planta: "2",
            puerta: "F",
        }
    },
    vendedor: {
        nombre: "Jose Luis",
        apellidos: "Esteve Moreno",
        edad: 42,
        antiguedad: 11,
        NIF: "94738203J",
        genero: "male",
        hijos: {
            tiene: true,
            cantidad: 1
        },
        salario: 1720.21
    }
}, {
    _id: 4,
    codigoVenta: "005",
    fechaVenta: new Date("2021-10-22"),
    articulo: [{
        modelo: "Apple iPhone 7",
        marca: "Apple",
        pais: "Estados Unidos",
        precioCompra: 125.87,
        precioVenta: 164,
        unidadesVendidas: 2,
        divisa: "euro",
        fechalanzamiento: new Date("2016-09-01"),
        diseño: {
            ancho: 67.1,
            alto: 138.3,
            grosor: 7.1,
            uom: "milimetro",
            peso: 138,
            uom: "gramo",
            materiales: "aleacion de aluminio",
            huelladactilar: true,
            color: "rojo"
        },
        pantalla: {
            pulgadas: 4.7,
            tipopantalla: "LCD IPS"
        },
        sitemaoperativo: "iOS",
        hardware: {
            procesador: {
                modelo: "Apple A10 Fusion",
                nucleos: 4,
                frecuencia: 2.4,
                uom: "gigahercio"
            },
            almacenamiento: {
                memoriaram: 2,
                memoriainterna: 32,
                uom: "gigabyte"
            },
            camara: {
                principal: {
                    resolucion: 12,
                    apertura: 1.8
                },
                dual: false,
                caracteristicasdual: {
                    resolucion: null,
                    apertura: null
                },
                frontal: {
                    resolucion: 7,
                    apertura: 2.2
                },
                uom: {
                    resolucion: "megapixel",
                    apertura: "diafragma"
                }
            },
            bateria: {
                capacidad: 1960,
                uom: "mega-amperio",
                extraible: false,
                cargarapida: false
            }
        },
        conectividad: {
            banda: [2, 3, 4],
            nfc: true,
            bluetooth: "4.2",
            tipousb: "Conector Lightning",
            audiojack: false
        }
    }, ],
    cliente: {
        nombre: "Almudena",
        apellidos: "Alonso Anguita",
        NIF: "08470104F",
        direccion: {
            calle: "Badajoz",
            bloque: "5",
            planta: "1",
            puerta: "B",
        }
    },
    vendedor: {
        nombre: "Sergio",
        apellidos: "Martinez Recaredo",
        edad: 54,
        antiguedad: 20,
        NIF: "38251044H",
        genero: "male",
        hijos: {
            tiene: true,
            cantidad: 3
        },
        salario: 2100
    }
}, {
    _id: 5,
    codigoVenta: "006",
    fechaVenta: new Date("2021-02-16"),
    articulo: [{
            modelo: "Google Pixel 4a",
            marca: "Google",
            pais: "Estados Unidos",
            precioCompra: 369,
            precioVenta: 399,
            unidadesVendidas: 1,
            divisa: "euro",
            fechalanzamiento: new Date("2020-08-01"),
            diseño: {
                ancho: 69.4,
                alto: 144.2,
                grosor: 8.2,
                uom: "milimetro",
                peso: 143,
                uom: "gramo",
                materiales: "policarbonato",
                huelladactilar: true,
                color: "negro"
            },
            pantalla: {
                pulgadas: 5.81,
                tipopantalla: "OLED"
            },
            sitemaoperativo: "android",
            hardware: {
                procesador: {
                    modelo: "Qualcomm Snapdragon 730G",
                    nucleos: 8,
                    frecuencia: 2.2,
                    uom: "gigahercio"
                },
                almacenamiento: {
                    memoriaram: 6,
                    memoriainterna: 128,
                    uom: "gigabyte"
                },
                camara: {
                    principal: {
                        resolucion: 12.2,
                        apertura: 1.7
                    },
                    dual: false,
                    caracteristicasdual: {
                        resolucion: null,
                        apertura: null
                    },
                    frontal: {
                        resolucion: 8,
                        apertura: 2
                    },
                    uom: {
                        resolucion: "megapixel",
                        apertura: "diafragma"
                    }
                },
                bateria: {
                    capacidad: 3120,
                    uom: "mega-amperio",
                    extraible: false,
                    cargarapida: true
                }
            },
            conectividad: {
                banda: [4, 3, 2],
                nfc: true,
                bluetooth: "5.1",
                tipousb: "C",
                audiojack: true
            }
        },


    ],
    cliente: {
        nombre: "Ramon",
        apellidos: "Carrera Salcedo",
        NIF: "94837283K",
        direccion: {
            calle: "Irene de Montero",
            bloque: "2",
            planta: "2",
            puerta: "A",
        }
    },
    vendedor: {
        nombre: "Julian",
        apellidos: "Gallego Gonzalez",
        edad: 36,
        antiguedad: 9,
        NIF: "93428123E",
        genero: "male",
        hijos: {
            tiene: true,
            cantidad: 2
        },
        salario: 1726.29
    }
}, {
    _id: 6,
    codigoVenta: "007",
    fechaVenta: new Date("2021-09-08"),
    articulo: [{
        modelo: "Apple iPhone 13 Pro Max",
        marca: "Apple",
        pais: "Estados Unidos",
        precioCompra: 1082,
        precioVenta: 1579,
        unidadesVendidas: 1,
        divisa: "euro",
        fechalanzamiento: new Date("2021-09-01"),
        diseño: {
            ancho: 78.1,
            alto: 168.8,
            grosor: 7.4,
            uom: "milimetro",
            peso: 228,
            uom: "gramo",
            materiales: ["cristal", "aluminio"],
            huelladactilar: false,
            color: "plata"
        },
        pantalla: {
            pulgadas: 6.7,
            tipopantalla: "oled"
        },
        sitemaoperativo: "iOS",
        hardware: {
            procesador: {
                modelo: "Apple A15 Bionic",
                nucleos: 6,
                frecuencia: 3.1,
                uom: "gigahercio"
            },
            almacenamiento: {
                memoriaram: 6,
                memoriainterna: 512,
                uom: "gigabyte"
            },
            camara: {
                principal: {
                    resolucion: 12,
                    apertura: 1.5
                },
                dual: true,
                caracteristicasdual: {
                    resolucion: 12,
                    apertura: 1.8
                },
                frontal: {
                    resolucion: 12,
                    apertura: 2.2
                },
                uom: {
                    resolucion: "megapixel",
                    apertura: "diafragma"
                }
            },
            bateria: {
                capacidad: 4373,
                uom: "mega-amperio",
                extraible: false,
                cargarapida: true
            }
        },
        conectividad: {
            banda: [2, 3, 4, 5],
            nfc: true,
            bluetooth: "5.0",
            tipousb: "2.0",
            audiojack: false
        }
    }, ],
    cliente: {
        nombre: "Juan Manuel",
        apellidos: "Nido Barragán",
        NIF: "93890483F",
        direccion: {
            calle: "Jesus del Gran Poder",
            bloque: "91",
            planta: "2",
            puerta: "D",
        }
    },
    vendedor: {
        nombre: "Maria",
        apellidos: "Reyes Fernandez",
        edad: 29,
        antiguedad: 1,
        NIF: "00324893T",
        genero: "female",
        hijos: {
            tiene: false,
            cantidad: null
        },
        salario: 1443
    }
}, {
    _id: 7,
    codigoVenta: "008",
    fechaVenta: new Date("2021-05-22"),
    articulo: [{
        modelo: "Redmi Note 8",
        marca: "Xiaomi",
        pais: "China",
        precioCompra: 149,
        precioVenta: 168,
        unidadesVendidas: 2,
        divisa: "euro",
        fechalanzamiento: new Date("2019-08-01"),
        diseño: {
            ancho: 75.3,
            alto: 158.3,
            grosor: 8.4,
            uom: "milimetro",
            peso: 190,
            uom: "gramo",
            materiales: ["plastico", "cristal", "P2i nano coating"],
            huelladactilar: true,
            color: "negro"
        },
        pantalla: {
            pulgadas: 6.3,
            tipopantalla: "LTPS LCD"
        },
        sitemaoperativo: "android",
        hardware: {
            procesador: {
                modelo: "Qualcomm Snapdragon 665",
                nucleos: 8,
                frecuencia: 2,
                uom: "gigahercio"
            },
            almacenamiento: {
                memoriaram: 4,
                memoriainterna: 64,
                uom: "gigabyte"
            },
            camara: {
                principal: {
                    resolucion: 48,
                    apertura: 1.79
                },
                dual: true,
                caracteristicasdual: {
                    resolucion: 8,
                    apertura: 2.2
                },
                frontal: {
                    resolucion: 13,
                    apertura: 2
                },
                uom: {
                    resolucion: "megapixel",
                    apertura: "diafragma"
                }
            },
            bateria: {
                capacidad: 4000,
                uom: "mega-amperio",
                extraible: false,
                cargarapida: true
            }
        },
        conectividad: {
            banda: [4, 3, 2],
            nfc: false,
            bluetooth: "4.2",
            tipousb: "C",
            audiojack: true
        }
    }, ],
    cliente: {
        nombre: "Mercedes",
        apellidos: "Losa Calzada",
        NIF: "85888432G",
        direccion: {
            calle: "Fray de Leon",
            bloque: "63",
            planta: "4",
            puerta: "D",
        }
    },
    vendedor: {
        nombre: "Jose Luis",
        apellidos: "Esteve Moreno",
        edad: 42,
        antiguedad: 11,
        NIF: "94738203J",
        genero: "male",
        hijos: {
            tiene: true,
            cantidad: 1
        },
        salario: 1720.21
    }
}, {
    _id: 8,
    codigoVenta: "009",
    fechaVenta: new Date("2021-11-16"),
    articulo: [{
            modelo: "Samsung Galaxy A22 5G",
            marca: "Samsung",
            pais: "China",
            precioCompra: 192.34,
            precioVenta: 219,
            unidadesVendidas: 1,
            divisa: "euro",
            fechalanzamiento: new Date("2021-06-01"),
            diseño: {
                ancho: 76.4,
                alto: 167.2,
                grosor: 9,
                uom: "milimetro",
                peso: 203,
                uom: "gramo",
                materiales: "plastico",
                huelladactilar: true,
                color: "gris"
            },
            pantalla: {
                pulgadas: 6.6,
                tipopantalla: "TFT LCD"
            },
            sitemaoperativo: "android",
            hardware: {
                procesador: {
                    modelo: "MediaTek Dimensity 700",
                    nucleos: 8,
                    frecuencia: 2.2,
                    uom: "gigahercio"
                },
                almacenamiento: {
                    memoriaram: 4,
                    memoriainterna: 64,
                    uom: "gigabyte"
                },
                camara: {
                    principal: {
                        resolucion: 48,
                        apertura: 1.8
                    },
                    dual: false,
                    caracteristicasdual: {
                        resolucion: null,
                        apertura: null
                    },
                    frontal: {
                        resolucion: 8,
                        apertura: 2
                    },
                    uom: {
                        resolucion: "megapixel",
                        apertura: "diafragma"
                    }
                },
                bateria: {
                    capacidad: 5000,
                    uom: "mega-amperio",
                    extraible: false,
                    cargarapida: true
                }
            },
            conectividad: {
                banda: [5, 4, 3, 2],
                nfc: true,
                bluetooth: "5.0",
                tipousb: "C",
                audiojack: true
            }
        },
        {
            modelo: "Samsung Galaxy A30s",
            marca: "Samsung",
            pais: "China",
            precioCompra: 243.68,
            precioVenta: 269,
            unidadesVendidas: 1,
            divisa: "euro",
            fechalanzamiento: new Date("2019-08-01"),
            diseño: {
                ancho: 74.7,
                alto: 158.5,
                grosor: 7.8,
                uom: "milimetro",
                peso: 166,
                uom: "gramo",
                materiales: "plastico",
                huelladactilar: true,
                color: "negro"
            },
            pantalla: {
                pulgadas: 6.4,
                tipopantalla: "amoled"
            },
            sistemaoperativo: "android",
            hardware: {
                procesador: {
                    modelo: "Samsung Exynos 7 Octa 7904",
                    nucleos: 8,
                    frecuencia: 1.8,
                    uom: "gigahercio"
                },
                almacenamiento: {
                    memoriaram: 4,
                    memoriainterna: 128,
                    uom: "gigabyte"
                },
                camara: {
                    principal: {
                        resolucion: 16,
                        apertura: 1.7
                    },
                    dual: true,
                    caracteristicasdual: {
                        resolucion: 5,
                        apertura: 2.2
                    },
                    frontal: {
                        resolucion: 16,
                        apertura: 2
                    },
                    uom: {
                        resolucion: "megapixel",
                        apertura: "diafragma"
                    }
                },
                bateria: {
                    capacidad: 4000,
                    uom: "mega-amperio",
                    extraible: false,
                    cargarapida: true
                }
            },
            conectividad: {
                banda: [4, 3, 2],
                nfc: true,
                bluetooth: "5.0",
                tipousb: "microUSB 2.0",
                audiojack: true
            }
        },
    ],
    cliente: {
        nombre: "Diego",
        apellidos: "Martinez Martinez",
        NIF: "98531003Q",
        direccion: {
            calle: "Zaragoza",
            bloque: "3",
            planta: "4",
            puerta: "A",
        }
    },
    vendedor: {
        nombre: "Sergio",
        apellidos: "Martinez Recaredo",
        edad: 54,
        antiguedad: 20,
        NIF: "38251044H",
        genero: "male",
        hijos: {
            tiene: true,
            cantidad: 3
        },
        salario: 2100,
    }
}, {
    _id: 9,
    codigoVenta: "010",
    fechaVenta: new Date("2021-05-24"),
    articulo: [{
        modelo: "Redmi Note 10S",
        marca: "Xiaomi",
        pais: "China",
        precioCompra: 146.25,
        precioVenta: 189,
        unidadesVendidas: 4,
        divisa: "euro",
        fechalanzamiento: new Date("2021-03-01"),
        diseño: {
            ancho: 74.5,
            alto: 160.5,
            grosor: 8.3,
            uom: "milimetros",
            peso: 179,
            uom: "gramos",
            materiales: ["plastico", "P2i nano coating"],
            huelladactilar: true,
            color: "blanco"
        },
        pantalla: {
            pulgadas: 6.43,
            tipopantalla: "amoled"
        },
        sistemaoperativo: "android",
        hardware: {
            procesador: {
                modelo: "MediaTek Helio G95",
                nucleos: 8,
                frecuencia: 2,
                uom: "gigahercio"
            },
            almacenamiento: {
                memoriaram: 6,
                memoriainterna: 128,
                uom: "gigabyte"
            },
            camara: {
                principal: {
                    resolucion: 64,
                    apertura: 1.79
                },
                dual: false,
                caracteristicasdual: {
                    resolucion: null,
                    apertura: null
                },
                frontal: {
                    resolucion: 13,
                    apertura: 2.45
                },
                uom: {
                    resolucion: "megapixel",
                    apertura: "diafragma"
                }
            },
            bateria: {
                capacidad: 5000,
                uom: "mega-amperio",
                extraible: false,
                cargarapida: true
            }
        },
        conectividad: {
            banda: [4, 3, 2],
            nfc: true,
            bluetooth: "5.0",
            tipousb: "C",
            audiojack: true
        }
    }],
    cliente: {
        nombre: "Pedro",
        apellidos: "Sanchez Berenguer",
        NIF: "99320102S",
        direccion: {
            calle: "Torneo",
            bloque: "60",
            planta: "2",
            puerta: "C",
        }
    },
    vendedor: {
        nombre: "Sergio",
        apellidos: "Martinez Recaredo",
        edad: 54,
        antiguedad: 20,
        NIF: "38251044H",
        genero: "male",
        hijos: {
            tiene: true,
            cantidad: 3
        },
        salario: 2100
    }
}, {
    _id: 10,
    codigoVenta: "011",
    fechaVenta: new Date("2021-02-27"),
    articulo: [{
        modelo: "Samsung Galaxy A30s",
        marca: "Samsung",
        pais: "China",
        precioCompra: 243.68,
        precioVenta: 269,
        unidadesVendidas: 1,
        divisa: "euro",
        fechalanzamiento: new Date("2019-08-01"),
        diseño: {
            ancho: 74.7,
            alto: 158.5,
            grosor: 7.8,
            uom: "milimetro",
            peso: 166,
            uom: "gramo",
            materiales: "plastico",
            huelladactilar: true,
            color: "negro"
        },
        pantalla: {
            pulgadas: 6.4,
            tipopantalla: "amoled"
        },
        sistemaoperativo: "android",
        hardware: {
            procesador: {
                modelo: "Samsung Exynos 7 Octa 7904",
                nucleos: 8,
                frecuencia: 1.8,
                uom: "gigahercio"
            },
            almacenamiento: {
                memoriaram: 4,
                memoriainterna: 128,
                uom: "gigabyte"
            },
            camara: {
                principal: {
                    resolucion: 16,
                    apertura: 1.7
                },
                dual: true,
                caracteristicasdual: {
                    resolucion: 5,
                    apertura: 2.2
                },
                frontal: {
                    resolucion: 16,
                    apertura: 2
                },
                uom: {
                    resolucion: "megapixel",
                    apertura: "diafragma"
                }
            },
            bateria: {
                capacidad: 4000,
                uom: "mega-amperio",
                extraible: false,
                cargarapida: true
            }
        },
        conectividad: {
            banda: [4, 3, 2],
            nfc: true,
            bluetooth: "5.0",
            tipousb: "microUSB 2.0",
            audiojack: true
        }
    }, ],
    cliente: {
        nombre: "Africa",
        apellidos: "Villegas Bayo",
        NIF: "73472102K",
        direccion: {
            calle: "Avenida Sanchez Pizjuan",
            bloque: "18",
            planta: "2",
            puerta: "A",
        }
    },
    vendedor: {
        nombre: "Maria",
        apellidos: "Reyes Fernandez",
        edad: 29,
        antiguedad: 1,
        NIF: "00324893T",
        genero: "female",
        hijos: {
            tiene: false,
            cantidad: null
        },
        salario: 1443
    }
}, {
    _id: 11,
    codigoVenta: "012",
    fechaVenta: new Date("2021-01-12"),
    articulo: [{
            modelo: "Redmi Note 8",
            marca: "Xiaomi",
            pais: "China",
            precioCompra: 149,
            precioVenta: 168,
            unidadesVendidas: 2,
            divisa: "euro",
            fechalanzamiento: new Date("2019-08-01"),
            diseño: {
                ancho: 75.3,
                alto: 158.3,
                grosor: 8.4,
                uom: "milimetro",
                peso: 190,
                uom: "gramo",
                materiales: ["plastico", "cristal", "P2i nano coating"],
                huelladactilar: true,
                color: "azul"
            },
            pantalla: {
                pulgadas: 6.3,
                tipopantalla: "LTPS LCD"
            },
            sitemaoperativo: "android",
            hardware: {
                procesador: {
                    modelo: "Qualcomm Snapdragon 665",
                    nucleos: 8,
                    frecuencia: 2,
                    uom: "gigahercio"
                },
                almacenamiento: {
                    memoriaram: 4,
                    memoriainterna: 64,
                    uom: "gigabyte"
                },
                camara: {
                    principal: {
                        resolucion: 48,
                        apertura: 1.79
                    },
                    dual: true,
                    caracteristicasdual: {
                        resolucion: 8,
                        apertura: 2.2
                    },
                    frontal: {
                        resolucion: 13,
                        apertura: 2
                    },
                    uom: {
                        resolucion: "megapixel",
                        apertura: "diafragma"
                    }
                },
                bateria: {
                    capacidad: 4000,
                    uom: "mega-amperio",
                    extraible: false,
                    cargarapida: true
                }
            },
            conectividad: {
                banda: [4, 3, 2],
                nfc: false,
                bluetooth: "4.2",
                tipousb: "C",
                audiojack: true
            }
        },
        {
            modelo: "Alcatel 3 (2019)",
            marca: "Alcatel",
            pais: "China",
            precioCompra: 75,
            precioVenta: 90,
            unidadesVendidas: 1,
            divisa: "euro",
            fechalanzamiento: new Date("2019-02-01"),
            diseño: {
                ancho: 69.7,
                alto: 151.1,
                grosor: 8,
                uom: "milimetro",
                peso: 145,
                uom: "gramo",
                materiales: "plastico",
                huelladactilar: true,
                color: "negro"
            },
            pantalla: {
                pulgadas: 5.9,
                tipopantalla: "LCD IPS"
            },
            sistemaoperativo: "android",
            hardware: {
                procesador: {
                    modelo: "MediaTek Helio P23",
                    nucleos: 8,
                    frecuencia: 2,
                    uom: "gigahercio"
                },
                almacenamiento: {
                    memoriaram: 4,
                    memoriainterna: 64,
                    uom: "gigabyte"
                },
                camara: {
                    principal: {
                        resolucion: 13,
                        apertura: 2
                    },
                    dual: false,
                    caracteristicasdual: {
                        resolucion: null,
                        apertura: null
                    },
                    frontal: {
                        resolucion: 5,
                        apertura: 2.4
                    },
                    uom: {
                        resolucion: "megapixel",
                        apertura: "diafragma"
                    }
                },
                bateria: {
                    capacidad: 3000,
                    uom: "mega-amperio",
                    extraible: false,
                    cargarapida: false
                }
            },
            conectividad: {
                banda: [4, 3, 2],
                nfc: true,
                bluetooth: "4.2",
                tipousb: "microUSB 2.0",
                audiojack: true
            }
        },
    ],
    cliente: {
        nombre: "Rocio",
        apellidos: "Perez Cartagena",
        NIF: "83847821J",
        direccion: {
            calle: "Baños",
            bloque: "8",
            planta: "2",
            puerta: "A",
        }
    },
    vendedor: {
        nombre: "Julian",
        apellidos: "Gallego Gonzalez",
        edad: 36,
        antiguedad: 9,
        NIF: "93428123E",
        genero: "male",
        hijos: {
            tiene: true,
            cantidad: 2
        },
        salario: 1726.29
    }
}, {
    _id: 12,
    codigoVenta: "013",
    fechaVenta: new Date("2021-10-06"),
    articulo: [{
        modelo: "Google Pixel 4a",
        marca: "Google",
        pais: "Estados Unidos",
        precioCompra: 369,
        precioVenta: 399,
        unidadesVendidas: 1,
        divisa: "euro",
        fechalanzamiento: new Date("2020-08-01"),
        diseño: {
            ancho: 69.4,
            alto: 144.2,
            grosor: 8.2,
            uom: "milimetro",
            peso: 143,
            uom: "gramo",
            materiales: "policarbonato",
            huelladactilar: true,
            color: "negro"
        },
        pantalla: {
            pulgadas: 5.81,
            tipopantalla: "OLED"
        },
        sitemaoperativo: "android",
        hardware: {
            procesador: {
                modelo: "Qualcomm Snapdragon 730G",
                nucleos: 8,
                frecuencia: 2.2,
                uom: "gigahercio"
            },
            almacenamiento: {
                memoriaram: 6,
                memoriainterna: 128,
                uom: "gigabyte"
            },
            camara: {
                principal: {
                    resolucion: 12.2,
                    apertura: 1.7
                },
                dual: false,
                caracteristicasdual: {
                    resolucion: null,
                    apertura: null
                },
                frontal: {
                    resolucion: 8,
                    apertura: 2
                },
                uom: {
                    resolucion: "megapixel",
                    apertura: "diafragma"
                }
            },
            bateria: {
                capacidad: 3120,
                uom: "mega-amperio",
                extraible: false,
                cargarapida: true
            }
        },
        conectividad: {
            banda: [4, 3, 2],
            nfc: true,
            bluetooth: "5.1",
            tipousb: "C",
            audiojack: true
        }
    }, ],
    cliente: {
        nombre: "Juan",
        apellidos: "Bautista Fernandez",
        NIF: "29931037L",
        direccion: {
            calle: "Manzana",
            bloque: "3",
            planta: "3",
            puerta: "B",
        }
    },
    vendedor: {
        nombre: "Sergio",
        apellidos: "Martinez Recaredo",
        edad: 54,
        antiguedad: 20,
        NIF: "38251044H",
        genero: "male",
        hijos: {
            tiene: true,
            cantidad: 3
        },
        salario: 2100
    }
}, {
    _id: 13,
    codigoVenta: "014",
    fechaVenta: new Date("2021-12-03"),
    articulo: [{
        modelo: "Apple iPhone 13 Pro Max",
        marca: "Apple",
        pais: "Estados Unidos",
        precioCompra: 1082,
        precioVenta: 1579,
        unidadesVendidas: 1,
        divisa: "euro",
        fechalanzamiento: new Date("2021-09-01"),
        diseño: {
            ancho: 78.1,
            alto: 168.8,
            grosor: 7.4,
            uom: "milimetro",
            peso: 228,
            uom: "gramo",
            materiales: ["cristal", "aluminio"],
            huelladactilar: false,
            color: "oro"
        },
        pantalla: {
            pulgadas: 6.7,
            tipopantalla: "oled"
        },
        sitemaoperativo: "iOS",
        hardware: {
            procesador: {
                modelo: "Apple A15 Bionic",
                nucleos: 6,
                frecuencia: 3.1,
                uom: "gigahercio"
            },
            almacenamiento: {
                memoriaram: 6,
                memoriainterna: 512,
                uom: "gigabyte"
            },
            camara: {
                principal: {
                    resolucion: 12,
                    apertura: 1.5
                },
                dual: true,
                caracteristicasdual: {
                    resolucion: 12,
                    apertura: 1.8
                },
                frontal: {
                    resolucion: 12,
                    apertura: 2.2
                },
                uom: {
                    resolucion: "megapixel",
                    apertura: "diafragma"
                }
            },
            bateria: {
                capacidad: 4373,
                uom: "mega-amperio",
                extraible: false,
                cargarapida: true
            }
        },
        conectividad: {
            banda: [2, 3, 4, 5],
            nfc: true,
            bluetooth: "5.0",
            tipousb: "2.0",
            audiojack: false
        }
    }, ],
    cliente: {
        nombre: "Manuel",
        apellidos: "Rios Soler",
        NIF: "38410931H",
        direccion: {
            calle: "Torneo",
            bloque: "12",
            planta: "3",
            puerta: "D",
        }
    },
    vendedor: {
        nombre: "Jose Luis",
        apellidos: "Esteve Moreno",
        edad: 42,
        antiguedad: 11,
        NIF: "94738203J",
        genero: "male",
        hijos: {
            tiene: true,
            cantidad: 1
        },
        salario: 1720.21
    }
}, {
    _id: 14,
    codigoVenta: "015",
    fechaVenta: new Date("2021-05-04"),
    articulo: [{
        modelo: "Apple iPhone 7",
        marca: "Apple",
        pais: "Estados Unidos",
        precioCompra: 125.87,
        precioVenta: 164,
        unidadesVendidas: 2,
        divisa: "euro",
        fechalanzamiento: new Date("2016-09-01"),
        diseño: {
            ancho: 67.1,
            alto: 138.3,
            grosor: 7.1,
            uom: "milimetro",
            peso: 138,
            uom: "gramo",
            materiales: "aleacion de aluminio",
            huelladactilar: true,
            color: "negro"
        },
        pantalla: {
            pulgadas: 4.7,
            tipopantalla: "LCD IPS"
        },
        sitemaoperativo: "iOS",
        hardware: {
            procesador: {
                modelo: "Apple A10 Fusion",
                nucleos: 4,
                frecuencia: 2.4,
                uom: "gigahercio"
            },
            almacenamiento: {
                memoriaram: 2,
                memoriainterna: 32,
                uom: "gigabyte"
            },
            camara: {
                principal: {
                    resolucion: 12,
                    apertura: 1.8
                },
                dual: false,
                caracteristicasdual: {
                    resolucion: null,
                    apertura: null
                },
                frontal: {
                    resolucion: 7,
                    apertura: 2.2
                },
                uom: {
                    resolucion: "megapixel",
                    apertura: "diafragma"
                }
            },
            bateria: {
                capacidad: 1960,
                uom: "mega-amperio",
                extraible: false,
                cargarapida: false
            }
        },
        conectividad: {
            banda: [2, 3, 4],
            nfc: true,
            bluetooth: "4.2",
            tipousb: "Conector Lightning",
            audiojack: false
        }
    }, ],
    cliente: {
        nombre: "Miguel",
        apellidos: "Torres Caramelo",
        NIF: "03490324K",
        direccion: {
            calle: "Vitoria",
            bloque: "9",
            planta: "Bajo",
            puerta: "J",
        }
    },
    vendedor: {
        nombre: "Maria",
        apellidos: "Reyes Fernandez",
        edad: 29,
        antiguedad: 1,
        NIF: "00324893T",
        genero: "female",
        hijos: {
            tiene: false,
            cantidad: null
        },
        salario: 1443
    }
}, {
    _id: 15,
    codigoVenta: "016",
    fechaVenta: new Date("2021-11-06"),
    articulo: [{
        modelo: "Motorola Moto E20",
        marca: "Motorola",
        pais: "Estados Unidos",
        precioCompra: 92,
        precioVenta: 108,
        unidadesVendidas: 1,
        divisa: "euro",
        fechalanzamiento: new Date("2021-09-01"),
        diseño: {
            ancho: 75.6,
            alto: 185,
            grosor: 8.5,
            uom: "milimetro",
            peso: 185,
            uom: "gramo",
            materiales: "plastico",
            huelladactilar: true,
            color: "negro"
        },
        pantalla: {
            pulgadas: 6.5,
            tipopantalla: "TFT LCD"
        },
        sistemaoperativo: "android",
        hardware: {
            procesador: {
                modelo: "Unisoc T700",
                nucleos: 8,
                frecuencia: 1.8,
                uom: "gigahercio"
            },
            almacenamiento: {
                memoriaram: 2,
                memoriainterna: 32,
                uom: "gigabyte"
            },
            camara: {
                principal: {
                    resolucion: 13,
                    apertura: 2
                },
                dual: false,
                caracteristicasdual: {
                    resolucion: null,
                    apertura: null
                },
                frontal: {
                    resolucion: 5,
                    apertura: 2.2
                },
                uom: {
                    resolucion: "megapixel",
                    apertura: "diafragma"
                }
            },
            bateria: {
                capacidad: 4000,
                uom: "mega-amperio",
                extraible: false,
                cargarapida: true
            }
        },
        conectividad: {
            banda: [4, 3, 2],
            nfc: false,
            bluetooth: "5.0",
            tipousb: "C",
            audiojack: true
        }
    }],
    cliente: {
        nombre: "Juan Ramon",
        apellidos: "Jimenez Oriol",
        NIF: "49993103D",
        direccion: {
            calle: "Juzgado",
            bloque: "11",
            planta: "Bajo",
            puerta: "D",
        }
    },
    vendedor: {
        nombre: "Sergio",
        apellidos: "Martinez Recaredo",
        edad: 54,
        antiguedad: 20,
        NIF: "38251044H",
        genero: "male",
        hijos: {
            tiene: true,
            cantidad: 3
        },
        salario: 2100
    }
}, ])






