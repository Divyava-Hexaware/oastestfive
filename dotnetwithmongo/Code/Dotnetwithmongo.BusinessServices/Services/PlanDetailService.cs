using Dotnetwithmongo.BusinessServices.Interfaces;
using Dotnetwithmongo.Data.Interfaces;
using Dotnetwithmongo.BusinessEntities.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Dotnetwithmongo.BusinessServices.Services
{
    public class PlanDetailService : IPlanDetailService
    {
        readonly IPlanDetailRepository _PlanDetailRepository;

        public PlanDetailService(IPlanDetailRepository PlanDetailRepository)
        {
           this._PlanDetailRepository = PlanDetailRepository;
        }
        public IEnumerable<PlanDetail> GetAll()
        {
            return _PlanDetailRepository.GetAll();
        }

        public PlanDetail Get(string id)
        {
            return _PlanDetailRepository.Get(id);
        }

        public PlanDetail Save(PlanDetail plandetail)
        {
            _PlanDetailRepository.Save(plandetail);
            return plandetail;
        }

        public PlanDetail Update(string id, PlanDetail plandetail)
        {
            return _PlanDetailRepository.Update(id, plandetail);
        }

        public bool Delete(string id)
        {
            return _PlanDetailRepository.Delete(id);
        }

    }
}
