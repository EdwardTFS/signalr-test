using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace signalrwebapi.Hubs
{
    public class TestHub : Hub<IChatClient>
    {
        public async Task SendMessage(string user, string message)
        {
            await Clients.All.ReceiveMessage( user, message);
        }
    }
}