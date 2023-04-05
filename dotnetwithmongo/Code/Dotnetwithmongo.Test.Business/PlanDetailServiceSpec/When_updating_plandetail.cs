using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using NSubstitute;
using Shouldly;
using Dotnetwithmongo.BusinessEntities.Entities;


namespace Dotnetwithmongo.Test.Business.PlanDetailServiceSpec
{
    public class When_updating_plandetail : UsingPlanDetailServiceSpec
    {
        private PlanDetail _result;
        private PlanDetail _plandetail;

        public override void Context()
        {
            base.Context();

            _plandetail = new PlanDetail
            {
                PharmacyCostType = "PharmacyCostType",
                DrugTier = 100,
                DrugTierCaption = "DrugTierCaption",
                DaysSupply = "DaysSupply",
                CostAmount = 99,
                CostPercentage = 59,
                MinAmount = 66,
                MaxAmount = 71,
                Is31DaySupply = true,
                DrugCategory = "DrugCategory",
                SubCategory = "SubCategory"
            };

            _plandetailRepository.Update(_plandetail.Id, _plandetail).Returns(_plandetail);
            
        }
        public override void Because()
        {
            _result = subject.Update(_plandetail.Id, _plandetail);
        }

        [Test]
        public void Request_is_routed_through_repository()
        {
            _plandetailRepository.Received(1).Update(_plandetail.Id, _plandetail);

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.ShouldBeOfType<PlanDetail>();

            _result.ShouldBe(_plandetail);
        }
    }
}