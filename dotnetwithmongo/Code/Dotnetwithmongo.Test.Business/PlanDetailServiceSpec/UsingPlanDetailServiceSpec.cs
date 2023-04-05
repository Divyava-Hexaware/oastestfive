using NSubstitute;
using Dotnetwithmongo.Test.Framework;
using Dotnetwithmongo.BusinessServices.Services;
using Dotnetwithmongo.Data.Interfaces;

namespace Dotnetwithmongo.Test.Business.PlanDetailServiceSpec
{
    public abstract class UsingPlanDetailServiceSpec : SpecFor<PlanDetailService>
    {
        protected IPlanDetailRepository _plandetailRepository;

        public override void Context()
        {
            _plandetailRepository = Substitute.For<IPlanDetailRepository>();
            subject = new PlanDetailService(_plandetailRepository);

        }

    }
}