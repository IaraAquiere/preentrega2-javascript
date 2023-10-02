let productos = [
    { id: 1, nombre: "Edea Fly + Roll Line Mistral", descripcion:"Bota Edea Fly, Indice de Rigidez 60, Plancha Roll Line Mistral", Imagen:"https://tcdn.storeden.com/gallery/643a57a100f220640f70097e", precio:585.00, categoria:"patines" },
    { id: 2, nombre: "Risport Mercurio + Roll Line Mistral", descripcion:"Bota Risport Mercurio, Indice de Rigidez 65, Plancha Roll Line Mistral", Imagen:"https://tcdn.storeden.com/gallery/643a5e4a202628a20529855c", precio: 530.00, categoria: "patines" },
    { id: 3, nombre: "Edea Ritmo + Roll Line Mistral", descripcion:"Bota Edea Ritmo, Indice de Rigidez 50, Plancha Roll Line Mistral", Imagen:"https://tcdn.storeden.com/gallery/643a5918be7ea0596463c899", precio:435.00, categoria: "patines" },
    { id: 4, nombre: "Edea Fly + Roll Line Evo", descripcion:"Bota Edea Fly, Indice de Rigidez 60, Plancha Roll Line Evo", Imagen: "https://tcdn.storeden.com/gallery/643a6f592026280b16298562", precio:866.50, categoria: "patines" },
    { id: 5, nombre: "Edea Flamenco + Dance + Ice", descripcion:"Botas Edea Flamenco, Planchas Roll Line Dance,Ruedas Roll Line ICE", Image: "https://tcdn.storeden.com/gallery/6179027800f220088a602977", precio:658.00, categoria:"patines" },
    { id: 6, nombre: "Edea Rondo + Roll Line Variant C", descripcion:"Bota Edea Rondo, Indice de Rigidez 35, Plancha Roll Line Variant C", Imagen: "https://tcdn.storeden.com/gallery/6437d25d00f22025bd92aaeb", precio:278.00, categoria:"patines" },
    { id: 7, nombre: "Patines NEW SCHOOL", descripcion:"Patines para patinaje artistico por los principiantes y por un uso amatorial.", Imagne:"https://tcdn.storeden.com/gallery/62bc103700f2205adaae3d67", precio:49.00, categoria:"patines" },
    { id: 8, nombre: "Risport Electra + Saturno + Star", Imagen:"https://tcdn.storeden.com/gallery/617908455fb8e0aff908db1e", precio: 334.00, categoria:"patines" },
    { id: 9, nombre: "Frenos Roll Line Super Professional", Imagen:"https://egress.storeden.net/gallery/5d6ebe2c02e58e713aa22301", precio:17.0, categoria:"frenos" },
    { id: 10, nombre: "Frenos Roll Line Standard", Imagen:"https://tcdn.storeden.com/gallery/5d6ebe2d02e58e713aa2231b", precio:14.50, categoria:"frenos" },
    { id: 11, nombre: "Ruedas Roll Line Giotto 55 mm", Imagen:"https://tcdn.storeden.com/gallery/5d6ebe3102e58e713aa2237f", precio:38.50, categoria:"ruedas" },
    { id: 12, nombre: "Bolsa Portapatines Edea CUBE", Imagen:"https://egress.storeden.net/gallery/6169473b2026282058bc277c", precio:37.50, categoria:"ruedas" },
    { id: 13, nombre: "Mochila Edea Libra", Imagen:"https://tcdn.storeden.com/gallery/649da48e00f2203372c66b77", precio:37.50, categoria:"bolsos" },
    { id: 14, nombre: "Bolsa Portapatines Edea Jaquard", Imagen:"https://tcdn.storeden.com/gallery/61377b83202628621985a57e", precio:19.00, categoria:"bolsos" }
];

const guardarproductols= (productos)=> {
    localStorage.setItem("productos", JSON.stringify(productos));
}

const cargarproductos = () =>{
    return json.parse(localStorage.getItem("productos")) || []; 
}

guardarproductols(productos)