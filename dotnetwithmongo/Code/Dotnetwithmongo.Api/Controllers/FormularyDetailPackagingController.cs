using System.Collections.Generic;
using Dotnetwithmongo.BusinessServices.Interfaces;
using Dotnetwithmongo.BusinessEntities.Entities;
using Dotnetwithmongo.Contracts.DTO;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;

namespace Dotnetwithmongo.Api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class FormularyDetailPackagingController : ControllerBase
    {
        readonly IFormularyDetailPackagingService _FormularyDetailPackagingService;
        private readonly IMapper _mapper;
        public FormularyDetailPackagingController(IFormularyDetailPackagingService FormularyDetailPackagingService,IMapper mapper)
        {
            _FormularyDetailPackagingService = FormularyDetailPackagingService;
            _mapper = mapper;
        }

        // GET: api/FormularyDetailPackaging
        [HttpGet]
        public ActionResult<IEnumerable<FormularyDetailPackagingDto>> Get()
        {
            var FormularyDetailPackagingDTOs = _mapper.Map<IEnumerable<FormularyDetailPackagingDto>>(_FormularyDetailPackagingService.GetAll());
            return Ok(FormularyDetailPackagingDTOs);
        }

        [HttpGet("{id}")]
        public ActionResult<FormularyDetailPackagingDto> GetById(string id)
        {
            var FormularyDetailPackagingDTO = _mapper.Map<FormularyDetailPackagingDto>(_FormularyDetailPackagingService.Get(id));
            return Ok(FormularyDetailPackagingDTO);
        }

        [HttpPost]
        public ActionResult<FormularyDetailPackagingDto> Save(FormularyDetailPackaging FormularyDetailPackaging)
        {
            var FormularyDetailPackagingDTOs = _mapper.Map<FormularyDetailPackagingDto>(_FormularyDetailPackagingService.Save(FormularyDetailPackaging));
            return Ok(FormularyDetailPackagingDTOs);
        }

        [HttpPut("{id}")]
        public ActionResult<FormularyDetailPackagingDto> Update([FromRoute] string id, FormularyDetailPackaging FormularyDetailPackaging)
        {
            var FormularyDetailPackagingDTOs = _mapper.Map<FormularyDetailPackagingDto>(_FormularyDetailPackagingService.Update(id, FormularyDetailPackaging));
            return Ok(FormularyDetailPackagingDTOs);
        }

        [HttpDelete("{id}")]
        public ActionResult<bool> Delete([FromRoute] string id)
        {
            bool res = _FormularyDetailPackagingService.Delete(id);
            return Ok(res);
    }


    }
}
