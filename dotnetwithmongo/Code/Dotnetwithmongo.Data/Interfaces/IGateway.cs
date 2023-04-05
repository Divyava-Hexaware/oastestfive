using MongoDB.Driver;

namespace Dotnetwithmongo.Data.Interfaces
{
    public interface IGateway
    {
        IMongoDatabase GetMongoDB();
    }
}
