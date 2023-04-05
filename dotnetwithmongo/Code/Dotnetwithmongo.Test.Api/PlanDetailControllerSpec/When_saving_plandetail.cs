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
    public class When_saving_plandetail : UsingPlanDetailControllerSpec
    {
        private ActionResult<PlanDetailDto> _result;

        private PlanDetail _plandetail;
        private PlanDetailDto _plandetailDto;

        public override void Context()
        {
            base.Context();

            _plandetail = new PlanDetail
            {
                PharmacyCostType = "PharmacyCostType",
                DrugTier = 97,
                DrugTierCaption = "DrugTierCaption",
                DaysSupply = "DaysSupply",
                CostAmount = 86,
                CostPercentage = 94,
                MinAmount = 9,
                MaxAmount = 95,
                Is31DaySupply = false,
                DrugCategory = "DrugCategory",
                SubCategory = "SubCategory"
            };

            _plandetailDto = new PlanDetailDto{
                    PharmacyCostType = "PharmacyCostType",
                    DrugTier = 11,
                    DrugTierCaption = "DrugTierCaption",
                    DaysSupply = "DaysSupply",
                    CostAmount = 92,
                    CostPercentage = 71,
                    MinAmount = 51,
                    MaxAmount = 59,
                    Is31DaySupply = false,
                    DrugCategory = "DrugCategory",
                    SubCategory = "SubCategory"
            };

            _plandetailService.Save(_plandetail).Returns(_plandetail);
            _mapper.Map<PlanDetailDto>(_plandetail).Returns(_plandetailDto);
        }
        public override void Because()
        {
            _result = subject.Save(_plandetail);
        }

        [Test]
        public void Request_is_routed_through_service()
        {
            _plandetailService.Received(1).Save(_plandetail);

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.Result.ShouldBeOfType<OkObjectResult>();

            var resultListObject = (_result.Result as OkObjectResult).Value;

            resultListObject.ShouldBeOfType<PlanDetailDto>();

            var resultList = (PlanDetailDto)resultListObject;

            resultList.ShouldBe(_plandetailDto);
        }
    }
}

