
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Meu_Pet_Shop.Models
{
    public class Animal:Entity
    {
        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        public string Nome { get; set; }

        public Pessoa Pessoa { get; set; }

        [DisplayName("Responsável")]
        public Guid PessoaId { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        [DisplayName("Gênero")]
        public Genero Genero { get; set; }
        [DisplayName("Tipo de Animal")]
        public Guid TipoId { get; set; }
        public Tipo Tipo { get; set; }
        [DisplayName("Observação")]
        public string Obs { get; set; }

        [DisplayName("Atualização")]
        public string Alteracao { get; set; }
        public IEnumerable<Evento> Eventos { get; set; }

    }
    
}
