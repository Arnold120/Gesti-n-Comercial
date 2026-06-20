function generarReporte(){

let ventas=JSON.parse(localStorage.getItem("ventas"))||[];
let compras=JSON.parse(localStorage.getItem("compras"))||[];
let productos=JSON.parse(localStorage.getItem("productos"))||[];

let totalVentas=ventas.reduce((a,v)=>a+Number(v.total),0);
let totalCompras=compras.reduce((a,v)=>a+Number(v.total),0);

document.getElementById("ventas").innerHTML=
"Total ventas: "+totalVentas+"<br>Registros: "+ventas.length;

document.getElementById("compras").innerHTML=
"Total compras: "+totalCompras+"<br>Registros: "+compras.length;

document.getElementById("inventario").innerHTML=
"Productos: "+productos.length;
}

function exportarCSV(){
let ventas=JSON.parse(localStorage.getItem("ventas"))||[];
let csv="numero,total\n";
ventas.forEach(v=>{
csv+=v.numeroVenta+","+v.total+"\n";
});
let blob=new Blob([csv],{type:"text/csv"});
let a=document.createElement("a");
a.href=URL.createObjectURL(blob);
a.download="reporte.csv";
a.click();
}

function limpiar(){
document.getElementById("ventas").innerHTML="";
document.getElementById("compras").innerHTML="";
document.getElementById("inventario").innerHTML="";
}