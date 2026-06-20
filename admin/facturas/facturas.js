function getFacturas(){
    return JSON.parse(localStorage.getItem("facturas")) || [];
}

function setFacturas(data){
    localStorage.setItem("facturas", JSON.stringify(data));
}

function generarId(){
    return Date.now();
}

function limpiarFormulario(){
    document.getElementById("idFactura").value="";
    document.getElementById("numeroFactura").value="";
    document.getElementById("numeroVenta").value="";
    document.getElementById("cliente").value="";
    document.getElementById("codigo").value="";
    document.getElementById("nombre").value="";
    document.getElementById("cantidad").value="";
    document.getElementById("precioUnitario").value="";
    document.getElementById("descuento").value=0;
    document.getElementById("impuesto").value=0;
    document.getElementById("usuario").value="";
    document.getElementById("estado").value="Emitida";
}

function calcularSubtotal(c,p){
    return Number(c)*Number(p);
}

function calcularTotal(sub,d,i){
    return Number(sub)-Number(d)+Number(i);
}

function guardarFactura(){
    let data=getFacturas();

    const nf=document.getElementById("numeroFactura").value;
    const cliente=document.getElementById("cliente").value;
    const codigo=document.getElementById("codigo").value;
    const nombre=document.getElementById("nombre").value;
    const cantidad=document.getElementById("cantidad").value;
    const precio=document.getElementById("precioUnitario").value;

    if(!nf||!cliente||!codigo||!nombre||!cantidad||!precio){
        alert("Campos obligatorios");
        return;
    }

    let subtotal=calcularSubtotal(cantidad,precio);
    let descuento=Number(document.getElementById("descuento").value||0);
    let impuesto=Number(document.getElementById("impuesto").value||0);

    let factura={
        id:generarId(),
        numeroFactura:nf,
        numeroVenta:document.getElementById("numeroVenta").value,
        cliente,
        codigo,
        nombre,
        cantidad:Number(cantidad),
        precioUnitario:Number(precio),
        subtotal,
        descuento,
        impuesto,
        total:calcularTotal(subtotal,descuento,impuesto),
        metodoPago:document.getElementById("metodoPago").value,
        usuario:document.getElementById("usuario").value,
        estado:document.getElementById("estado").value,
        fecha:new Date().toLocaleString()
    };

    data.push(factura);
    setFacturas(data);

    registrarAuditoria("Facturas","Crear","Factura registrada");

    cargarFacturas();
    limpiarFormulario();
}

function cargarFacturas(){
    let data=getFacturas();
    let t=document.getElementById("tablaFacturas");

    t.innerHTML=data.map(f=>`
        <tr>
            <td>${f.numeroFactura}</td>
            <td>${f.numeroVenta}</td>
            <td>${f.cliente}</td>
            <td>${f.nombre}</td>
            <td>${f.total}</td>
            <td>${f.metodoPago}</td>
            <td>${f.usuario}</td>
            <td>${f.fecha}</td>
            <td>${f.estado}</td>
            <td>
                <button onclick="editarFactura(${f.id})">Editar</button>
                <button onclick="eliminarFactura(${f.id})">Eliminar</button>
            </td>
        </tr>
    `).join("");
}

function editarFactura(id){
    let f=getFacturas().find(x=>x.id===id);

    document.getElementById("idFactura").value=f.id;
    document.getElementById("numeroFactura").value=f.numeroFactura;
    document.getElementById("numeroVenta").value=f.numeroVenta;
    document.getElementById("cliente").value=f.cliente;
    document.getElementById("codigo").value=f.codigo;
    document.getElementById("nombre").value=f.nombre;
    document.getElementById("cantidad").value=f.cantidad;
    document.getElementById("precioUnitario").value=f.precioUnitario;
    document.getElementById("descuento").value=f.descuento;
    document.getElementById("impuesto").value=f.impuesto;
    document.getElementById("usuario").value=f.usuario;
    document.getElementById("estado").value=f.estado;
}

function actualizarFactura(){
    let data=getFacturas();
    let id=Number(document.getElementById("idFactura").value);

    data=data.map(f=>{
        if(f.id===id){
            let sub=calcularSubtotal(
                document.getElementById("cantidad").value,
                document.getElementById("precioUnitario").value
            );
            let d=Number(document.getElementById("descuento").value||0);
            let i=Number(document.getElementById("impuesto").value||0);

            return{
                ...f,
                numeroFactura:document.getElementById("numeroFactura").value,
                numeroVenta:document.getElementById("numeroVenta").value,
                cliente:document.getElementById("cliente").value,
                codigo:document.getElementById("codigo").value,
                nombre:document.getElementById("nombre").value,
                cantidad:Number(document.getElementById("cantidad").value),
                precioUnitario:Number(document.getElementById("precioUnitario").value),
                subtotal:sub,
                descuento:d,
                impuesto:i,
                total:calcularTotal(sub,d,i),
                metodoPago:document.getElementById("metodoPago").value,
                usuario:document.getElementById("usuario").value,
                estado:document.getElementById("estado").value
            };
        }
        return f;
    });

    setFacturas(data);
    cargarFacturas();
    limpiarFormulario();
}

function eliminarFactura(id){
    if(!confirm("¿Eliminar factura?"))return;

    let data=getFacturas().filter(f=>f.id!==id);
    setFacturas(data);
    cargarFacturas();
}

cargarFacturas();