using Microsoft.AspNetCore.Mvc;

namespace DocuviewareDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DocuVieware3 : ControllerBase
    {
        [HttpGet("ping")]
        public string ping()
        {
            return "pong";
        }
    }
}
