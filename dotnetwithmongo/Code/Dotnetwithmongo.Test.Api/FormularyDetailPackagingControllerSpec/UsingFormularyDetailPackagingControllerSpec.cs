using NSubstitute;
using Dotnetwithmongo.Test.Framework;
using Dotnetwithmongo.Api.Controllers;
using Dotnetwithmongo.BusinessServices.Interfaces;
using AutoMapper;
using Dotnetwithmongo.BusinessEntities.Entities;
using Dotnetwithmongo.Contracts.DTO;


namespace Dotnetwithmongo.Test.Api.FormularyDetailPackagingControllerSpec
{
    public abstract class UsingFormularyDetailPackagingControllerSpec : SpecFor<FormularyDetailPackagingController>
    {
        protected IFormularyDetailPackagingService _formularydetailpackagingService;
        protected IMapper _mapper;

        public override void Context()
        {
            _formularydetailpackagingService = Substitute.For<IFormularyDetailPackagingService>();
            _mapper = Substitute.For<IMapper>();
            subject = new FormularyDetailPackagingController(_formularydetailpackagingService,_mapper);

        }

    }
}
