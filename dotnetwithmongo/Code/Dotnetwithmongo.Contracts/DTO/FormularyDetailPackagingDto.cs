using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes; 
using System.Runtime.Serialization; 
namespace Dotnetwithmongo.Contracts.DTO {
   public class FormularyDetailPackagingDto { 
     public string Id { get; set; }
        public string DrugName { get; set; } 
        public string NDC { get; set; } 
        public string Tier { get; set; } 
        public string Year { get; set; } 
        public bool Not90DElig { get; set; } 
        public int PkgSize { get; set; } 
        public int PkgQty { get; set; } 
        public string PkgSizeUom { get; set; } 
        public string PkgDesc { get; set; } 
        public string UsualDailyDose { get; set; } 
        public string PBP { get; set; } 
        public bool IsUnitDosage { get; set; } 
} 
}
