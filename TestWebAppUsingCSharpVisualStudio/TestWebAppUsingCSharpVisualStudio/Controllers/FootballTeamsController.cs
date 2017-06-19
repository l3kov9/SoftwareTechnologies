
namespace TestWebAppUsingCSharpVisualStudio.Controllers
{
    using System.Web.Mvc;

    public class FootballTeamsController : Controller
    {
        [HttpGet]
        public ActionResult Create()
        {
            return View();
        }

        
        public ActionResult Details()
        {
            return View();
        }
    }
}