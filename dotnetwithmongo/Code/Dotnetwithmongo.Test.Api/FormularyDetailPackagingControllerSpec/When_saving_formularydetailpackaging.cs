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

namespace Dotnetwithmongo.Test.Api.FormularyDetailPackagingControllerSpec
{
    public class When_saving_formularydetailpackaging : UsingFormularyDetailPackagingControllerSpec
    {
        private ActionResult<FormularyDetailPackagingDto> _result;

        private FormularyDetailPackaging _formularydetailpackaging;
        private FormularyDetailPackagingDto _formularydetailpackagingDto;

        public override void Context()
        {
            base.Context();

            _formularydetailpackaging = new FormularyDetailPackaging
            {
                DrugName = "DrugName",
                NDC = "NDC",
                Tier = "Tier",
                Year = "Year",
                Not90DElig = true,
                PkgSize = 53,
                PkgQty = 35,
                PkgSizeUom = "PkgSizeUom",
                PkgDesc = "PkgDesc",
                UsualDailyDose = "UsualDailyDose",
                PBP = "PBP",
                IsUnitDosage = false
            };

            _formularydetailpackagingDto = new FormularyDetailPackagingDto{
                    DrugName = "DrugName",
                    NDC = "NDC",
                    Tier = "Tier",
                    Year = "Year",
                    Not90DElig = true,
                    PkgSize = 21,
                    PkgQty = 52,
                    PkgSizeUom = "PkgSizeUom",
                    PkgDesc = "PkgDesc",
                    UsualDailyDose = "UsualDailyDose",
                    PBP = "PBP",
                    IsUnitDosage = true
            };

            _formularydetailpackagingService.Save(_formularydetailpackaging).Returns(_formularydetailpackaging);
            _mapper.Map<FormularyDetailPackagingDto>(_formularydetailpackaging).Returns(_formularydetailpackagingDto);
        }
        public override void Because()
        {
            _result = subject.Save(_formularydetailpackaging);
        }

        [Test]
        public void Request_is_routed_through_service()
        {
            _formularydetailpackagingService.Received(1).Save(_formularydetailpackaging);

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.Result.ShouldBeOfType<OkObjectResult>();

            var resultListObject = (_result.Result as OkObjectResult).Value;

            resultListObject.ShouldBeOfType<FormularyDetailPackagingDto>();

            var resultList = (FormularyDetailPackagingDto)resultListObject;

            resultList.ShouldBe(_formularydetailpackagingDto);
        }
    }
}

