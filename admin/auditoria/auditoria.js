function getAuditoria(){
return JSON.parse(localStorage.getItem("auditoria"))||[];
}

function setAuditoria(data){
localStorage.setItem("auditoria",JSON.stringify(data));
}

function generarId(){
return Date.now();
}

function cargarAuditoria(){
let data=getAuditoria();
let t=document.getElementById("tablaAuditoria");

t.innerHTML=data.map(a=>`
<tr>
<td>${a.usuario}</td>
<td>${a.accion}</td>
<td>${a.modulo}</td>
<td>${a.descripcion}</td>
<td>${a.fecha}</td>
<td>${a.estado}</td>
</tr>
`).join("");
}

function filtrarAuditoria(){
cargarAuditoria();
}

function limpiarAuditoria(){
localStorage.removeItem("auditoria");
cargarAuditoria();
}

cargarAuditoria();