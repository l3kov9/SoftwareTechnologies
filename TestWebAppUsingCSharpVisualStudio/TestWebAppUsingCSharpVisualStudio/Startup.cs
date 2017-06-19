using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TestWebAppUsingCSharpVisualStudio.Startup))]
namespace TestWebAppUsingCSharpVisualStudio
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
