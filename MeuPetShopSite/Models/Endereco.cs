using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Meu_Pet_Shop.Models
{
    public class Endereco:Entity
    {
        [DisplayName("Cliente")]
        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        public Guid PessoaId { get; set; }

        public Pessoa Pessoa { get; set; }

        public string Logradouro{ get; set; }

        [DisplayName("Número")]
        public string Numero { get; set; }

        public string Complemento { get; set; }
        [RegularExpression(@"^\d{5}-\d{3}$", ErrorMessage = "Formato de Cep Inválido")]
        public string Cep { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        public string Bairro { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        public string Cidade { get; set; }

        public string Estado { get; set; }

        [DisplayName("Atualização")]
        public string Alteracao { get; set; }


    }
}
