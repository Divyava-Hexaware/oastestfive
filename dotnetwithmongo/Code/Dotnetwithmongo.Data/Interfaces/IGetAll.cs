using System.Collections.Generic;

namespace Dotnetwithmongo.Data.Interfaces
{
    public interface IGetAll<out T> where T : class
    {
        IEnumerable<T> GetAll();
    }
}
