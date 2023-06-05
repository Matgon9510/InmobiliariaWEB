var oTabla = $("#tblClientes").DataTable();
$(document).ready(function () {
    $('#btnBuscar').click(function () {
        Consultar();
    });
    $('#tblClientes tbody').on('click', 'tr', function () {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            oTabla.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
            EditarFila($(this).closest('tr'));
        }
    });
    $("#btnIngresar").click(function () {
        EjecutarComando("Insertar");
    });
   $("#btnActualizar").click(function () {
        EjecutarComando("Actualizar");
    });
    $("#btnEliminar").click(function () {
        EjecutarComando("Eliminar");
    });
    //Invocar el llenado del combo
    LlenarComboUtils();
    //Invoca el llenado de la tabla
    LlenarTablaClientes();
});

function Consultar() {
    //invoca el servicion
    let idCliente = $("#txtIdCliente").val();
    alert(idCliente)
    $.ajax({
        type: "GET",
        url: "http://localhost:51789//api/Cliente?idCliente=" + idCliente,
        contentType: "json",
        data: null,
        dataType: "json",
        success: function (rpta) {
            $("#txtNombre").val(rpta.nombre);
            $("#txtApellido").val(rpta.apellido);
            $("#txtEmail").val(rpta.email);
            $("#cboGenero").val(rpta.genero);
            $("#txtDireccion").val(rpta.direccion);
            $("#cboCiudad").val(rpta.ciudad);
        },
        error: function (errRpta) {
            $("#dvMensaje").addClass("alert alert-danger");
            $("#dvMensaje").html(errRpta);
        }
    });
}

function EjecutarComando(Comando) {
    let id_cliente = $("#txtIdCliente").val();
    let nombre = $("#txtNombre").val();
    let apellido = $("#txtApellido").val();
    let email = $("#txtEmail").val();
    let tipo_tel = $("#cboTipoTel").val();
    let telefono = $("#txtTelefono").val();
    let genero = $("#cboGenero").val();
    let direccion = $("#txtDireccion").val();
    let ciudad = $("#cboCiudad").val();
    let DatosCliente = {
        id_cliente: id_cliente,
        nombre: nombre,
        apellido: apellido,
        email: email,
        tipo_tel: tipo_tel,
        telefono: telefono,
        genero: genero,
        direccion: direccion,
        ciudad: ciudad,
        Comando: Comando,
    }
    $.ajax({
        type: "POST",
        url: "../Controladores/ControladorClientes.ashx",
        contentType: "json",
        data: JSON.stringify(DatosCliente),
        success: function (rpta) {
            if (rpta.includes("Error:")) {
                $("#dvMensaje").addClass("alert alert-danger");
                $("#dvMensaje").html(rpta);
            } else {
                $("#dvMensaje").addClass("alert alert-success");
                $("#dvMensaje").html(rpta);
                LlenarTablaClientes();
            }
        },
        error: function (errRpta) {
            $("#dvMensaje").addClass("alert alert-danger");
            $("#dvMensaje").html(errRpta);
        }
    });
}

function EditarFila(DatosFila) {
    $("#txtIdCliente").val(DatosFila.find('td:eq(0)').text());
    $("#txtNombre").val(DatosFila.find('td:eq(1)').text());
    $("#txtApellido").val(DatosFila.find('td:eq(2)').text());
    $("#txtEmail").val(DatosFila.find('td:eq(3)').text());
    $("#cboTipoTel").val(DatosFila.find('td:eq(4)').text());
    $("#txtTelefono").val(DatosFila.find('td:eq(5)').text());
    $("#cboGenero").val(DatosFila.find('td:eq(6)').text());
    $("#txtDireccion").val(DatosFila.find('td:eq(7)').text());
    $("#cboCiudad").val(DatosFila.find('td:eq(8)').text());
}

function LlenarComboUtils() {
    $.ajax({
        type: "POST",
        url: "../Controladores/ControladorUtils.ashx",
        contentType: "json",
        data: null,
        success: function (rpta) {
            //Crear un objeto JSON con la información
            rptaList = rpta.split(']');
            DatosComboTpTelefono = JSON.parse(rptaList[0] + ']');
            DatosComboGenero = JSON.parse(rptaList[1] + ']');
            DatosComboCiudad = JSON.parse(rptaList[2] + ']');
            
            DatosComboCiudad.forEach(op => {
                $("#cboCiudad").append(`<option value=${op.id_ciudad}>${op.descripcion}</option>`);
            });+
            DatosComboGenero.forEach(op => {
                $("#cboGenero").append(`<option value=${op.genero1}>${op.descripcion}</option>`);
            });
            DatosComboTpTelefono.forEach(op => {
                $("#cboTipoTel").append(`<option value=${op.id_tipo_tel}>${op.descripcion}</option>`);
            });
        },
        error: function (errCliente) {
            $("#dvMensaje").addClass("alert alert-danger");
            $("#dvMensaje").html(errCliente);
        }
    });
}

function LlenarTablaClientes() {
    let DatosCliente = {
        id_cliente: 0,
        nombre: "",
        apellido: "",
        email: "",
        tipo_tel: 0,
        telefono: 0,
        genero: 0,
        direccion: "",
        ciudad: 0,
        Comando: "LlenarGrid",
    }
    $.ajax({
        type: "POST",
        url: "../Controladores/ControladorClientes.ashx",
        contentType: "json",
        data: JSON.stringify(DatosCliente),
        success: function (rpta) {
            LlenarGrid_JSON(JSON.parse(rpta), "#tblClientes");
        },
        error: function (errRpta) {
            $("#dvMensaje").addClass("alert alert-danger");
            $("#dvMensaje").html(errRpta);
        }
    });
}


   
