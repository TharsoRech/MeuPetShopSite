using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Meu_Pet_Shop.Models
{
    public class Evento:Entity
    {
        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        public string Descricao { get; set; }

        public string DataCriada { get; set; }

        public string CriadoPor { get; set; }

        public DateTime Inicio { get; set; }
        [DisplayName("Previsão de Conclusão/Data de Conclusão")]
        public DateTime Concluido { get; set; }

        public Status Status { get; set; }

        [DisplayName("Atualização")]
        public string Alteracao { get; set; }

        public Atendente Atendente { get; set; }
        [DisplayName("Atendente")]
        public Guid AtendenteId { get; set; }
        [DisplayName("Animal")]
        public Guid AnimalId { get; set; }

        public Animal Animal { get; set; }


    }

    
}
