using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using NSubstitute;
using Shouldly;
using Dotnetwithmongo.BusinessEntities.Entities;

namespace Dotnetwithmongo.Test.Business.PlanDetailServiceSpec
{
    public class When_saving_plandetail : UsingPlanDetailServiceSpec
    {
        private PlanDetail _result;

        private PlanDetail _plandetail;

        public override void Context()
        {
            base.Context();

            _plandetail = new PlanDetail
            {
                PharmacyCostType = "PharmacyCostType",
                DrugTier = 16,
                DrugTierCaption = "DrugTierCaption",
                DaysSupply = "DaysSupply",
                CostAmount = 66,
                CostPercentage = 49,
                MinAmount = 32,
                MaxAmount = 51,
                Is31DaySupply = false,
                DrugCategory = "DrugCategory",
                SubCategory = "SubCategory"
            };

            _plandetailRepository.Save(_plandetail).Returns(true);
        }
        public override void Because()
        {
            _result = subject.Save(_plandetail);
        }

        [Test]
        public void Request_is_routed_through_repository()
        {
            _plandetailRepository.Received(1).Save(_plandetail);

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.ShouldBeOfType<PlanDetail>();

            _result.ShouldBe(_plandetail);
        }
    }
}