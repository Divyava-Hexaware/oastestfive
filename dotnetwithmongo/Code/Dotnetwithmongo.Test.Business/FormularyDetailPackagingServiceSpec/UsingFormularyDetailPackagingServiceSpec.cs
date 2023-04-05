using NSubstitute;
using Dotnetwithmongo.Test.Framework;
using Dotnetwithmongo.BusinessServices.Services;
using Dotnetwithmongo.Data.Interfaces;

namespace Dotnetwithmongo.Test.Business.FormularyDetailPackagingServiceSpec
{
    public abstract class UsingFormularyDetailPackagingServiceSpec : SpecFor<FormularyDetailPackagingService>
    {
        protected IFormularyDetailPackagingRepository _formularydetailpackagingRepository;

        public override void Context()
        {
            _formularydetailpackagingRepository = Substitute.For<IFormularyDetailPackagingRepository>();
            subject = new FormularyDetailPackagingService(_formularydetailpackagingRepository);

        }

    }
}