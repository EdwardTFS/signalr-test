using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace signalrwebapi.Hubs
{
    public class DrawHub : Hub<IDrawClient>
    {
        public async Task Draw(Point x, Point y)
        {
            await Clients.Others.Draw( x,y);
        }
    }
}