using System.Collections.Generic;

namespace  Dotnetwithmongo.Data.Interfaces
{
    public interface IGet<out T,in TKey> where T : class
    {
        T Get(TKey id) ;
    }
}
