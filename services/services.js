function registrarAuditoria(modulo, accion, descripcion){

let data=JSON.parse(localStorage.getItem("auditoria"))||[];

let registro={
id:Date.now(),
usuario:localStorage.getItem("usuarioActivo")||"Sistema",
modulo,
accion,
descripcion,
fecha:new Date().toLocaleString(),
estado:"OK"
};

data.push(registro);

localStorage.setItem("auditoria",JSON.stringify(data));
}