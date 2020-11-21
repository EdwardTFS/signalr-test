using System.Threading.Tasks;
namespace signalrwebapi.Hubs
{
public class Point{
    public float X { get; set; }
    public float Y { get; set; }
}

    public interface IDrawClient
    {
        Task Draw(Point from, Point to);
    }
}