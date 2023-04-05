using Dotnetwithmongo.BusinessEntities.Entities;
using Dotnetwithmongo.Contracts.DTO;
using AutoMapper;
namespace Dotnetwithmongo.Api.Middleware
{
public class MappingFile : Profile
{
    public MappingFile()
    {
        // Mapping variables
		CreateMap<FormularyDetailPackaging , FormularyDetailPackagingDto>(); 
		CreateMap<PlanDetail , PlanDetailDto>(); 
    }
  }
}
