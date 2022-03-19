using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Meu_Pet_Shop.Models
{
    public class Raca:Entity
    {
        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        public string Nome { get; set; }

        [DisplayName("Atualização")]
        public string Alteracao { get; set; }

    }
}
