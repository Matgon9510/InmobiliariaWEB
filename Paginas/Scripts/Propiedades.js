var oTabla = $("#tblPropiedades").DataTable();
$(document).ready(function () {
    $('#btnBuscar').click(function () {
        Consultar();
    });
    $('#tblPropiedades tbody').on('click', 'tr', function () {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            oTabla.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
            EditarFila($(this).closest('tr'));
        }
    });
    $("#bntInsertar").click(function () {
        EjecutarComando("Post");
    });
    $("#btnActualizar").click(function () {
        EjecutarComando("Put");
    });
    $("#btnEliminar").click(function () {
        EjecutarComando("Delete");
    });
    //Invoca el llenado de la tabla
    LlenarComboCiudad();
    //Invocar el llenado del combo
    LlenarComboComision();
    //Invocar el llenado del combo
    LlenarComboDepartamento();
    //Invocar el llenado del combo
    LlenarComboTipoPropiedad();
    //Invocar el llenado del combo
    LlenarComboEstacionamiento();
    //Invocar el llenado del combo
    LlenarComboEstado();
    //Invocar el llenado del combo
    LlenarComboTipoContrato();
    //Invoca el llenado de la tabla
    LlenarTablaPropiedades();

});

function Consultar() {
    //invoca el servicion
    let idPropiedad = $("#txtid_propiedad").val();
    alert(idPropiedad)
    $.ajax({
        type: "GET",
        url: "http://localhost:51789//api/Propiedad?idPropiedad=" + idPropiedad,
        contentType: "json",
        data: null,
        dataType: "json",
        success: function (rpta) {
            $("#txtDireccion").val(rpta.direccion);
            $("#cboCiudad").val(rpta.ciudad);
            $("#cboDepartamento").val(rpta.departamento);
            $("#cboTipoPropiedad").val(rpta.tipo_propiedad);
            $("#txtNumHabitaciones").val(rpta.num_habitaciones);
            $("#txtNumBanos").val(rpta.num_banos);
            $("#cboEstacionamiento").val(rpta.estacionamiento);
            $("#cboEstado").val(rpta.estado);
            $("#cboTipoContrato").val(rpta.tipo_contrato);
            $("#txtPrecioInicial").val(rpta.precio_inicial);
            $("#cboComision").val(rpta.comision);
            $("#txtPrecioFinal").val(rpta.precio_final);
        },
        error: function (errRpta) {
            $("#dvMensaje").addClass("alert alert-danger");
            $("#dvMensaje").html(errRpta);
        }
    });
}

function EjecutarComando(Comando) {
    event.preventDefault();
    let id_propiedad = $("#txtid_propiedad").val();
    let direccion = $("#txtDireccion").val();
    let ciudad = $("#cboCiudad").val();
    let departamento = $("#cboDepartamento").val();
    let tipo_propiedad = $("#cboTipoPropiedad").val();
    let num_habitaciones = $("#txtNumHabitaciones").val();
    let num_banos = $("#txtNumBanos").val();
    let estacionamiento = $("#cboEstacionamiento").val();
    let estado = $("#cboEstado").val();
    let tipo_contrato = $("#cboTipoContrato").val();
    let precio_inicial = $("#txtPrecioInicial").val();
    let DatosPropiedad = {
        id_propiedad: id_propiedad,
        direccion: direccion,
        ciudad: ciudad,
        departamento: departamento,
        tipo_propiedad: tipo_propiedad,
        num_habitaciones: num_habitaciones,
        num_banos: num_banos,
        estacionamiento: estacionamiento,
        estado: estado,
        tipo_contrato: tipo_contrato,
        precio_inicial: precio_inicial,
        comision: 0,
        precio_final: 0,
        Comando: Comando,
    }
    $.ajax({
        type: Comando,
        url: "http://localhost:51789//api/Propiedad",
        contentType: "application/json",
        data: JSON.stringify(DatosPropiedad),
        dataType: "json",
        success: function (Rpta) {
            LlenarTablaPropiedades();
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
    $("#txtid_propiedad").val(DatosFila.find('td:eq(0)').text());
    $("#txtDireccion").val(DatosFila.find('td:eq(1)').text());
    $("#cboCiudad").val(DatosFila.find('td:eq(2)').text());
    $("#cboDepartamento").val(DatosFila.find('td:eq(3)').text());
    $("#cboTipoPropiedad").val(DatosFila.find('td:eq(4)').text());
    $("#txtNumHabitaciones").val(DatosFila.find('td:eq(5)').text());
    $("#txtNumBanos").val(DatosFila.find('td:eq(6)').text());
    $("#cboEstacionamiento").val(DatosFila.find('td:eq(7)').text());
    $("#cboEstado").val(DatosFila.find('td:eq(8)').text());
    $("#cboTipoContrato").val(DatosFila.find('td:eq(9)').text());
    $("#txtPrecioInicial").val(DatosFila.find('td:eq(10)').text());
    $("#cboComision").val(DatosFila.find('td:eq(11)').text());
    $("#txtPrecioFinal").val(DatosFila.find('td:eq(12)').text());
}


function LlenarComboCiudad() {
    LlenarComboServicio("http://localhost:51789/api/Ciudad", "#cboCiudad", "", true);
}


function LlenarComboDepartamento() {
    LlenarComboServicio("http://localhost:51789/api/Departamento", "#cboDepartamento", "", true);
}

function LlenarComboTipoPropiedad() {
    LlenarComboServicio("http://localhost:51789/api/TipoPropiedad", "#cboTipoPropiedad", "", true);
}



function LlenarComboEstacionamiento() {
    LlenarComboServicio("http://localhost:51789/api/Estacionamiento", "#cboEstacionamiento", "", true);
}


function LlenarComboEstado() {
    LlenarComboServicio("http://localhost:51789/api/Estado", "#cboEstado", "", true);
}


function LlenarComboTipoContrato() {
    LlenarComboServicio("http://localhost:51789/api/TipoContrato", "#cboTipoContrato", "", true);
}

function LlenarComboComision() {
    LlenarComboServicio("http://localhost:51789/api/Comision", "#cboComision", "", true);
}


function LlenarTablaPropiedades() {
    let DatosPropiedad = {
        id_propiedad: 0,
        direccion: "",
        ciudad: 0,
        departamento: 0,
        tipo_propiedad: 0,
        num_habitaciones: 0,
        num_banos: 0,
        estacionamiento: 0,
        estado: 0,
        tipo_contrato: 0,
        precio_inicial: 0,
        comision: 0,
        precio_final: 0,
        Comando: "LlenarGrid",
    }
    $.ajax({
        type: "POST",
        url: "../Controladores/ControladorPropiedad.ashx",
        contentType: "json",
        data: JSON.stringify(DatosPropiedad),
        success: function (rpta) {
            LlenarGrid_JSON(JSON.parse(rpta), "#tblPropiedades");
            /*
            //Crear un objeto JSON con la información
            Datos = JSON.parse(rpta);
            //Llenar la tabla
            var columns = [];
            columnNames = Object.keys(Datos[0]);
            for (var i in columnNames) {
                columns.push({
                    data: columnNames[i],
                    title: columnNames[i]
                });
            }

            $("#tblVenta").DataTable({
                data: Datos,
                columns: columns,
                destroy: true
            });
            */
        },
        error: function (errRpta) {
            $("#dvMensaje").addClass("alert alert-danger");
            $("#dvMensaje").html(errRpta);
        }
    });
}