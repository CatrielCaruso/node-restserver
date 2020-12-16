//=================
// Puerto
//=================

process.env.PORT = process.env.PORT || 3000;


//=================
// ENTORNO
//=================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//=================
// BASES DE DATOS
//=================

let urlDB;

if (process.env.NODE_ENV === 'dev') {

    urlDB = 'mongodb://localhost:27017/cafe';


} else {


    urlDB = 'mongodb+srv://catriel:F0OaDLE09sJlrpvu@cluster0.bdtpc.mongodb.net/cafe';



}

process.env.URLDB = urlDB;