using Dotnetwithmongo.Data.Interfaces;
using Dotnetwithmongo.BusinessEntities.Entities;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Core.Bindings;
using System;
using System.Collections.Generic;
using System.Text;

namespace Dotnetwithmongo.Data.Repositories
{
    public class FormularyDetailPackagingRepository : IFormularyDetailPackagingRepository
    {
        private readonly IGateway _gateway;
        private readonly string _collectionName = "FormularyDetailPackaging";

        public FormularyDetailPackagingRepository(IGateway gateway)
        {
            _gateway = gateway;
        }
        public IEnumerable<FormularyDetailPackaging> GetAll()
        {
            var result = _gateway.GetMongoDB().GetCollection<FormularyDetailPackaging>(_collectionName)
                            .Find(new BsonDocument())
                            .ToList();
            return result;
        }

        public FormularyDetailPackaging Get(string id)
        {
            var result = _gateway.GetMongoDB().GetCollection<FormularyDetailPackaging>(_collectionName)
                            .Find(x => x.Id == id).Single();
            return result;
        }

        public bool Save(FormularyDetailPackaging entity)
        {
            _gateway.GetMongoDB().GetCollection<FormularyDetailPackaging>(_collectionName)
                .InsertOne(entity);
            return true;
        }

        public FormularyDetailPackaging Update(string id, FormularyDetailPackaging entity)
        {
            var update = Builders<FormularyDetailPackaging>.Update
                .Set(e => e.DrugName, entity.DrugName )
                .Set(e => e.NDC, entity.NDC )
                .Set(e => e.Tier, entity.Tier )
                .Set(e => e.Year, entity.Year )
                .Set(e => e.Not90DElig, entity.Not90DElig )
                .Set(e => e.PkgSize, entity.PkgSize )
                .Set(e => e.PkgQty, entity.PkgQty )
                .Set(e => e.PkgSizeUom, entity.PkgSizeUom )
                .Set(e => e.PkgDesc, entity.PkgDesc )
                .Set(e => e.UsualDailyDose, entity.UsualDailyDose )
                .Set(e => e.PBP, entity.PBP )
                .Set(e => e.IsUnitDosage, entity.IsUnitDosage );

            var result = _gateway.GetMongoDB().GetCollection<FormularyDetailPackaging>(_collectionName)
                .FindOneAndUpdate(e => e.Id == id, update);
            return result;
        }

        public bool Delete(string id)
        {
            var result = _gateway.GetMongoDB().GetCollection<FormularyDetailPackaging>(_collectionName)
                         .FindOneAndDelete(e => e.Id == id);
            if(result==null) return false;             
            return true;
        }
    }
}
