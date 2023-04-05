using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using NSubstitute;
using Shouldly;
using Microsoft.AspNetCore.Mvc;
using Dotnetwithmongo.BusinessEntities.Entities;
using Dotnetwithmongo.Contracts.DTO;

namespace Dotnetwithmongo.Test.Api.FormularyDetailPackagingControllerSpec
{
    public class When_getting_all_formularydetailpackaging : UsingFormularyDetailPackagingControllerSpec
    {
        private ActionResult<IEnumerable<FormularyDetailPackagingDto>> _result;

        private IEnumerable<FormularyDetailPackaging> _all_formularydetailpackaging;
        private FormularyDetailPackaging _formularydetailpackaging;

        private IEnumerable<FormularyDetailPackagingDto>  _all_formularydetailpackagingDto;
        private FormularyDetailPackagingDto _formularydetailpackagingDto;
    

        public override void Context()
        {
            base.Context();

            _formularydetailpackaging = new FormularyDetailPackaging{
                DrugName = "DrugName",
                NDC = "NDC",
                Tier = "Tier",
                Year = "Year",
                Not90DElig = false,
                PkgSize = 67,
                PkgQty = 48,
                PkgSizeUom = "PkgSizeUom",
                PkgDesc = "PkgDesc",
                UsualDailyDose = "UsualDailyDose",
                PBP = "PBP",
                IsUnitDosage = true
            };

            _formularydetailpackagingDto = new FormularyDetailPackagingDto{
                    DrugName = "DrugName",
                    NDC = "NDC",
                    Tier = "Tier",
                    Year = "Year",
                    Not90DElig = false,
                    PkgSize = 78,
                    PkgQty = 48,
                    PkgSizeUom = "PkgSizeUom",
                    PkgDesc = "PkgDesc",
                    UsualDailyDose = "UsualDailyDose",
                    PBP = "PBP",
                    IsUnitDosage = false
                };

            _all_formularydetailpackaging = new List<FormularyDetailPackaging> { _formularydetailpackaging};
            _formularydetailpackagingService.GetAll().Returns(_all_formularydetailpackaging);
            _all_formularydetailpackagingDto  = new List<FormularyDetailPackagingDto> {_formularydetailpackagingDto};
            _mapper.Map<IEnumerable<FormularyDetailPackagingDto>>(_all_formularydetailpackaging).Returns( _all_formularydetailpackagingDto);
        }
        public override void Because()
        {
            _result = subject.Get();
        }

        [Test]
        public void Request_is_routed_through_service()
        {
            _formularydetailpackagingService.Received(1).GetAll();

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.Result.ShouldBeOfType<OkObjectResult>();

            var resultListObject = (_result.Result as OkObjectResult).Value;

            resultListObject.ShouldBeOfType<List<FormularyDetailPackagingDto>>();

            List<FormularyDetailPackagingDto> resultList = resultListObject as List<FormularyDetailPackagingDto>;

            resultList.Count.ShouldBe(1);

            resultList.ShouldBe(_all_formularydetailpackagingDto);
        }
    }
}