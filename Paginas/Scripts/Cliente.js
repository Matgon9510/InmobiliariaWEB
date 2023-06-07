var oTabla = $("#tblClientes").DataTable();
var oTabla1 = $("#tblTelefonos").DataTable();
$(document).ready(function () {
    $("#btnTelefonos").prop('disabled', true);
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
    $('#tblTelefonos tbody').on('click', 'tr', function () {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            oTabla1.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
            EditarFilaTelefonos($(this).closest('tr'));
        }
    });

    $("#bntInsertarTel").click(function () {
        ProcesarTelefonos("Post");
    });
    $("#btnActualizarTel").click(function () {
        ProcesarTelefonos("Put");
    });
    $("#btnEliminarTel").click(function () {
        ProcesarTelefonos("Delete");
    });

    $("#btnIngresar").click(function () {
        EjecutarComando("Post");
    });
   $("#btnActualizar").click(function () {
        EjecutarComando("Put");
    });
    $("#btnEliminar").click(function () {
        EjecutarComando("Delete");
    });
    $("#btnTelefonos").click(function () {
        //Invoca la página modal, y pasa el nombre del cliente
        $("#txtNombre").val($("#txtNombre").val() + " " + $("#txtApellido").val())
        //Invoca la tabla para llenar los teléfonos del cliente
        LlenarTablaTelefonos();
    });
    $("#btnCerrarModal").click(function () {
        LlenarTablaClientes();
    });
    //Invocar el llenado del combo
    //LlenarComboUtils();
    //Invoca el llenado de la tabla
    LlenarTablaClientes();
    //Llenar el combo Ciudad
    LlenarComboCiudad();
    //Llenar el combo Genero
    LlenarComboGenero();
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
    event.preventDefault();
    let id_cliente = $("#txtIdCliente").val();
    let nombre = $("#txtNombre").val();
    let apellido = $("#txtApellido").val();
    let email = $("#txtEmail").val();
    let genero = $("#cboGenero").val();
    let direccion = $("#txtDireccion").val();
    let ciudad = $("#cboCiudad").val();
    let DatosCliente = {
        id_cliente: id_cliente,
        nombre: nombre,
        apellido: apellido,
        email: email,
        genero: genero,
        direccion: direccion,
        ciudad: ciudad,
        Comando: Comando,
    }
    $.ajax({
        type: Comando,
        url: "http://localhost:51789//api/Cliente",
        contentType: "application/json",
        data: JSON.stringify(DatosCliente),
        dataType: "json",
        success: function (Rpta) {
            LlenarTablaClientes();
            $("#dvMensaje").addClass("alert alert-success");
            $("#dvMensaje").html(Rpta);
        },
        error: function (Error) {
            $("#dvMensaje").addClass("alert alert-danger");
            $("#dvMensaje").html(Error);
        }
      
    });


}

function EditarFila(DatosFila) {
    $("#btnTelefonos").prop('disabled', false);
    $("#txtIdCliente").val(DatosFila.find('td:eq(1)').text());
    $("#txtNombre").val(DatosFila.find('td:eq(2)').text());
    $("#txtApellido").val(DatosFila.find('td:eq(3)').text());
    $("#txtDireccion").val(DatosFila.find('td:eq(4)').text());
    $("#txtEmail").val(DatosFila.find('td:eq(5)').text());   
    $("#cboCiudad").val(DatosFila.find('td:eq(6)').text());
    $("#cboGenero").val(DatosFila.find('td:eq(7)').text());
}

function LlenarTablaTelefonos() {
    //Limpia la tabla de telefonos
    oTabla1.clear().draw(false);
    let id_cliente = $("#txtIdCliente").val();
    let sURL = "http://localhost:51789/api/Telefono?Documento=" + id_cliente;
    LlenaTablaServicio(sURL, "#tblTelefonos");
}


function LlenarTablaClientes() {
    LlenaTablaServicio("http://localhost:51789/api/Cliente", "#tblClientes")
}

function LlenarComboGenero() {
    LlenarComboServicio("http://localhost:51789/api/Genero", "#cboGenero", "", true);
}

function LlenarComboCiudad() {
    LlenarComboServicio("http://localhost:51789/api/Ciudad", "#cboCiudad", "", true);
}
   

