using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MeuPetShopSite.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnimaisController : ControllerBase
    {
        // GET: api/<AnimaisController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<AnimaisController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<AnimaisController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<AnimaisController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<AnimaisController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
