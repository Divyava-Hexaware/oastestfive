using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using NSubstitute;
using Shouldly;
using Dotnetwithmongo.BusinessEntities.Entities;

namespace Dotnetwithmongo.Test.Business.FormularyDetailPackagingServiceSpec
{
    public class When_getting_all_formularydetailpackaging : UsingFormularyDetailPackagingServiceSpec
    {
        private IEnumerable<FormularyDetailPackaging> _result;

        private IEnumerable<FormularyDetailPackaging> _all_formularydetailpackaging;
        private FormularyDetailPackaging _formularydetailpackaging;

        public override void Context()
        {
            base.Context();

            _formularydetailpackaging = new FormularyDetailPackaging{
                DrugName = "DrugName",
                NDC = "NDC",
                Tier = "Tier",
                Year = "Year",
                Not90DElig = false,
                PkgSize = 73,
                PkgQty = 87,
                PkgSizeUom = "PkgSizeUom",
                PkgDesc = "PkgDesc",
                UsualDailyDose = "UsualDailyDose",
                PBP = "PBP",
                IsUnitDosage = false
            };

            _all_formularydetailpackaging = new List<FormularyDetailPackaging> { _formularydetailpackaging};
            _formularydetailpackagingRepository.GetAll().Returns(_all_formularydetailpackaging);
        }
        public override void Because()
        {
            _result = subject.GetAll();
        }

        [Test]
        public void Request_is_routed_through_repository()
        {
            _formularydetailpackagingRepository.Received(1).GetAll();

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.ShouldBeOfType<List<FormularyDetailPackaging>>();

            List<FormularyDetailPackaging> resultList = _result as List<FormularyDetailPackaging>;

            resultList.Count.ShouldBe(1);

            resultList.ShouldBe(_all_formularydetailpackaging);
        }
    }
}