using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Pokédex.Model
{
    public class Pokemon
    {
        public Guid Id { get; set; }
        public int NationalNo { get; set; }
        public string Name { get; set; }
        public bool IsCaught { get; set; }
        public string Date { get; set; }
    }
}
