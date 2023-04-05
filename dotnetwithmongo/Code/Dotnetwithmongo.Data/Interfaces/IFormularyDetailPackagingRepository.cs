using Dotnetwithmongo.BusinessEntities.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Dotnetwithmongo.Data.Interfaces
{
    public interface IFormularyDetailPackagingRepository : IGetAll<FormularyDetailPackaging>,IGet<FormularyDetailPackaging,string>, ISave<FormularyDetailPackaging>, IUpdate<FormularyDetailPackaging, string>, IDelete<string>
    {
    }
}
