using Dotnetwithmongo.BusinessEntities.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Dotnetwithmongo.BusinessServices.Interfaces
{
    public interface IFormularyDetailPackagingService
    {      
        IEnumerable<FormularyDetailPackaging> GetAll();
        FormularyDetailPackaging Get(string id);
        FormularyDetailPackaging Save(FormularyDetailPackaging formularydetailpackaging);
        FormularyDetailPackaging Update(string id, FormularyDetailPackaging formularydetailpackaging);
        bool Delete(string id);

    }
}
