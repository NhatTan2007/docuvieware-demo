using DocuviewareDemo.Models;
using GdPicture14.WEB;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;

namespace DocuviewareDemo.Controllers
{
    //[Route("api/[controller]")]
    [Route("api/DocuVieware")]
    [ApiController]
    public class DocuViewareController : ControllerBase
    {
        [HttpPost("[action]")]
        public ActionResult GetDocuViewareControl(DocuViewareConfiguration controlConfiguration)
        {
            if (!DocuViewareManager.IsSessionAlive(controlConfiguration.SessionId))
            {
                if (!string.IsNullOrEmpty(controlConfiguration.SessionId) && !string.IsNullOrEmpty(controlConfiguration.ControlId))
                {
                    DocuViewareManager.CreateDocuViewareSession(controlConfiguration.SessionId, controlConfiguration.ControlId, 20);
                }
                else
                {
                    throw new Exception("Invalid session identifier and/or invalid control identifier.");
                }
            }

            using DocuViewareControl docuVieware = new DocuViewareControl(controlConfiguration.SessionId)
            {
                AllowPrint = controlConfiguration.AllowPrint,
                EnablePrintButton = controlConfiguration.EnablePrintButton,
                AllowUpload = controlConfiguration.AllowUpload,
                EnableFileUploadButton = controlConfiguration.EnableFileUploadButton,
                CollapsedSnapIn = controlConfiguration.CollapsedSnapIn,
                ShowAnnotationsSnapIn = controlConfiguration.ShowAnnotationsSnapIn,
                EnableRotateButtons = controlConfiguration.EnableRotateButtons,
                EnableZoomButtons = controlConfiguration.EnableZoomButtons,
                EnablePageViewButtons = controlConfiguration.EnablePageViewButtons,
                EnableMultipleThumbnailSelection = controlConfiguration.EnableMultipleThumbnailSelection,
                EnableMouseModeButtons = controlConfiguration.EnableMouseModeButtons,
                EnableFormFieldsEdition = controlConfiguration.EnableFormFieldsEdition,
                EnableTwainAcquisitionButton = controlConfiguration.EnableTwainAcquisitionButton,
                MaxUploadSize = 36700160
            };

            using StringWriter controlOutput = new StringWriter();
            docuVieware.RenderControl(controlOutput);

            return Ok(new DocuViewareResponse
            {
                HtmlContent = controlOutput.ToString()
            });
        }
    }
}
