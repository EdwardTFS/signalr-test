using System.Threading.Tasks;
namespace signalrwebapi.Hubs
{
    public interface IChatClient
    {
        Task ReceiveMessage(string user, string message);
    }
}