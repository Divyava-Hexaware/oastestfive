using Dotnetwithmongo.BusinessServices.Interfaces;
using Dotnetwithmongo.Data.Interfaces;
using Dotnetwithmongo.BusinessEntities.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Dotnetwithmongo.BusinessServices.Services
{
    public class FormularyDetailPackagingService : IFormularyDetailPackagingService
    {
        readonly IFormularyDetailPackagingRepository _FormularyDetailPackagingRepository;

        public FormularyDetailPackagingService(IFormularyDetailPackagingRepository FormularyDetailPackagingRepository)
        {
           this._FormularyDetailPackagingRepository = FormularyDetailPackagingRepository;
        }
        public IEnumerable<FormularyDetailPackaging> GetAll()
        {
            return _FormularyDetailPackagingRepository.GetAll();
        }

        public FormularyDetailPackaging Get(string id)
        {
            return _FormularyDetailPackagingRepository.Get(id);
        }

        public FormularyDetailPackaging Save(FormularyDetailPackaging formularydetailpackaging)
        {
            _FormularyDetailPackagingRepository.Save(formularydetailpackaging);
            return formularydetailpackaging;
        }

        public FormularyDetailPackaging Update(string id, FormularyDetailPackaging formularydetailpackaging)
        {
            return _FormularyDetailPackagingRepository.Update(id, formularydetailpackaging);
        }

        public bool Delete(string id)
        {
            return _FormularyDetailPackagingRepository.Delete(id);
        }

    }
}
