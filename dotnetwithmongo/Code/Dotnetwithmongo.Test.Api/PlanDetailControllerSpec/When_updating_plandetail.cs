using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using NSubstitute;
using Shouldly;
using Microsoft.AspNetCore.Mvc;
using Dotnetwithmongo.BusinessEntities.Entities;
using Dotnetwithmongo.Contracts.DTO;
using Dotnetwithmongo.BusinessServices.Services;

namespace Dotnetwithmongo.Test.Api.PlanDetailControllerSpec
{
    public class When_updating_plandetail : UsingPlanDetailControllerSpec
    {
        private ActionResult<PlanDetailDto > _result;
        private PlanDetail _plandetail;
        private PlanDetailDto _plandetailDto;

        public override void Context()
        {
            base.Context();

            _plandetail = new PlanDetail
            {
                PharmacyCostType = "PharmacyCostType",
                DrugTier = 36,
                DrugTierCaption = "DrugTierCaption",
                DaysSupply = "DaysSupply",
                CostAmount = 4,
                CostPercentage = 66,
                MinAmount = 25,
                MaxAmount = 31,
                Is31DaySupply = false,
                DrugCategory = "DrugCategory",
                SubCategory = "SubCategory"
            };

            _plandetailDto = new PlanDetailDto{
                    PharmacyCostType = "PharmacyCostType",
                    DrugTier = 48,
                    DrugTierCaption = "DrugTierCaption",
                    DaysSupply = "DaysSupply",
                    CostAmount = 69,
                    CostPercentage = 36,
                    MinAmount = 2,
                    MaxAmount = 82,
                    Is31DaySupply = false,
                    DrugCategory = "DrugCategory",
                    SubCategory = "SubCategory"
            };

            _plandetailService.Update(_plandetail.Id, _plandetail).Returns(_plandetail);
            _mapper.Map<PlanDetailDto>(_plandetail).Returns(_plandetailDto);
            
        }
        public override void Because()
        {
            _result = subject.Update(_plandetail.Id, _plandetail);
        }

        [Test]
        public void Request_is_routed_through_service()
        {
            _plandetailService.Received(1).Update(_plandetail.Id, _plandetail);

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.Result.ShouldBeOfType<OkObjectResult>();

            var resultListObject = (_result.Result as OkObjectResult).Value;

            resultListObject.ShouldBeOfType<PlanDetailDto>();

            var resultList = resultListObject as PlanDetailDto;

            resultList.ShouldBe(_plandetailDto);
        }
    }
}