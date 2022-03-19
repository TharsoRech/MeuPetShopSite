using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Meu_Pet_Shop.Models
{
    public class Atendente:Entity
    {
        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        public string Nome { get; set; }

        [DisplayName("Atualização")]
        public string Alteracao { get; set; }
    }

    
}
