using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using NSubstitute;
using Shouldly;
using Microsoft.AspNetCore.Mvc;
using Dotnetwithmongo.BusinessEntities.Entities;
using Dotnetwithmongo.Contracts.DTO;

namespace Dotnetwithmongo.Test.Api.PlanDetailControllerSpec
{
    public class When_getting_all_plandetail : UsingPlanDetailControllerSpec
    {
        private ActionResult<IEnumerable<PlanDetailDto>> _result;

        private IEnumerable<PlanDetail> _all_plandetail;
        private PlanDetail _plandetail;

        private IEnumerable<PlanDetailDto>  _all_plandetailDto;
        private PlanDetailDto _plandetailDto;
    

        public override void Context()
        {
            base.Context();

            _plandetail = new PlanDetail{
                PharmacyCostType = "PharmacyCostType",
                DrugTier = 95,
                DrugTierCaption = "DrugTierCaption",
                DaysSupply = "DaysSupply",
                CostAmount = 25,
                CostPercentage = 90,
                MinAmount = 88,
                MaxAmount = 46,
                Is31DaySupply = true,
                DrugCategory = "DrugCategory",
                SubCategory = "SubCategory"
            };

            _plandetailDto = new PlanDetailDto{
                    PharmacyCostType = "PharmacyCostType",
                    DrugTier = 60,
                    DrugTierCaption = "DrugTierCaption",
                    DaysSupply = "DaysSupply",
                    CostAmount = 33,
                    CostPercentage = 94,
                    MinAmount = 84,
                    MaxAmount = 79,
                    Is31DaySupply = true,
                    DrugCategory = "DrugCategory",
                    SubCategory = "SubCategory"
                };

            _all_plandetail = new List<PlanDetail> { _plandetail};
            _plandetailService.GetAll().Returns(_all_plandetail);
            _all_plandetailDto  = new List<PlanDetailDto> {_plandetailDto};
            _mapper.Map<IEnumerable<PlanDetailDto>>(_all_plandetail).Returns( _all_plandetailDto);
        }
        public override void Because()
        {
            _result = subject.Get();
        }

        [Test]
        public void Request_is_routed_through_service()
        {
            _plandetailService.Received(1).GetAll();

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.Result.ShouldBeOfType<OkObjectResult>();

            var resultListObject = (_result.Result as OkObjectResult).Value;

            resultListObject.ShouldBeOfType<List<PlanDetailDto>>();

            List<PlanDetailDto> resultList = resultListObject as List<PlanDetailDto>;

            resultList.Count.ShouldBe(1);

            resultList.ShouldBe(_all_plandetailDto);
        }
    }
}