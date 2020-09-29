using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Pokédex.Model
{
    public class PokeApi
    {
        public int Count { get; set; }
        public IEnumerable<Pokemon> Results { get; set; }
    }
}
