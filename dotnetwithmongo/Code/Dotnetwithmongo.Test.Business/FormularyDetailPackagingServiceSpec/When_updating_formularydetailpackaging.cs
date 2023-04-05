using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using NSubstitute;
using Shouldly;
using Dotnetwithmongo.BusinessEntities.Entities;


namespace Dotnetwithmongo.Test.Business.FormularyDetailPackagingServiceSpec
{
    public class When_updating_formularydetailpackaging : UsingFormularyDetailPackagingServiceSpec
    {
        private FormularyDetailPackaging _result;
        private FormularyDetailPackaging _formularydetailpackaging;

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
                PkgSize = 79,
                PkgQty = 39,
                PkgSizeUom = "PkgSizeUom",
                PkgDesc = "PkgDesc",
                UsualDailyDose = "UsualDailyDose",
                PBP = "PBP",
                IsUnitDosage = true
            };

            _formularydetailpackagingRepository.Update(_formularydetailpackaging.Id, _formularydetailpackaging).Returns(_formularydetailpackaging);
            
        }
        public override void Because()
        {
            _result = subject.Update(_formularydetailpackaging.Id, _formularydetailpackaging);
        }

        [Test]
        public void Request_is_routed_through_repository()
        {
            _formularydetailpackagingRepository.Received(1).Update(_formularydetailpackaging.Id, _formularydetailpackaging);

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.ShouldBeOfType<FormularyDetailPackaging>();

            _result.ShouldBe(_formularydetailpackaging);
        }
    }
}