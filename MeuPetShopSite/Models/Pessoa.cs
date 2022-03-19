using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Meu_Pet_Shop.Models
{

    public class Pessoa:Entity
    {

        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        public string Nome { get; set; }

        [DisplayName("Data de Nascimento")]
        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        public string DataDeNascimento { get; set; }

        [RegularExpression(@"^((\d{3}).(\d{3}).(\d{3})-(\d{2}))*$", ErrorMessage ="Formato de Cpf Inválido")]
        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        public string CPF { get; set; }
 
        public IEnumerable<Animal> Animais { get; set; }
        public Endereco Endereco { get; set; }

        [DisplayName("Atualização")]
        public string Alteracao { get; set; }
    }
}
