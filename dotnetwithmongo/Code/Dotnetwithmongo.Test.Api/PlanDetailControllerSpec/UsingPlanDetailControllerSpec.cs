using NSubstitute;
using Dotnetwithmongo.Test.Framework;
using Dotnetwithmongo.Api.Controllers;
using Dotnetwithmongo.BusinessServices.Interfaces;
using AutoMapper;
using Dotnetwithmongo.BusinessEntities.Entities;
using Dotnetwithmongo.Contracts.DTO;


namespace Dotnetwithmongo.Test.Api.PlanDetailControllerSpec
{
    public abstract class UsingPlanDetailControllerSpec : SpecFor<PlanDetailController>
    {
        protected IPlanDetailService _plandetailService;
        protected IMapper _mapper;

        public override void Context()
        {
            _plandetailService = Substitute.For<IPlanDetailService>();
            _mapper = Substitute.For<IMapper>();
            subject = new PlanDetailController(_plandetailService,_mapper);

        }

    }
}
