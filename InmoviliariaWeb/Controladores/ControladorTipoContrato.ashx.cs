using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using InmoviliariaWeb.Clases;
using Newtonsoft.Json;


namespace InmoviliariaWeb.Controladores
{
    /// <summary>
    /// Descripción breve de ControladorTipoContrato
    /// </summary>
    public class ControladorTipoContrato : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            context.Response.Write(LlenarCombo());
        }

        private string LlenarCombo()
        {
            clsTipoContrato tipoContrato = new clsTipoContrato();
            return JsonConvert.SerializeObject(tipoContrato.LlenarCombo());
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}