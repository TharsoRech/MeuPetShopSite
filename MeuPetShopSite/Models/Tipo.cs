using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Meu_Pet_Shop.Models
{
    public class Tipo:Entity
    {
        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        public string Nome { get; set; }

        public Raca Raca { get; set; }

        [ForeignKey("Raca")]
        [DisplayName("Raça")]
        public Guid? RacaId { get; set; }

        [DisplayName("Atualização")]
        public string Alteracao { get; set; }
    }
    
}
