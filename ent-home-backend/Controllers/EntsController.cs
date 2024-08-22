using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ent_home_backend.Models;

namespace ent_home_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EntsController : ControllerBase
    {
        private readonly EntDbContext _context;

        public EntsController(EntDbContext context)
        {
            _context = context;
        }

        // GET: api/Ents
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ent>>> GetEnts()
        {
            return await _context.Ents.ToListAsync();
        }

        // GET: api/Ents/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Ent>> GetEnt(int id)
        {
            var ent = await _context.Ents.FindAsync(id);

            if (ent == null)
            {
                return NotFound();
            }

            return ent;
        }

        // PUT: api/Ents/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEnt(int id, Ent ent)
        {
            if (id != ent.Id)
            {
                return BadRequest();
            }

            _context.Entry(ent).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EntExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Ents
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Ent>> PostEnt(Ent ent)
        {
            _context.Ents.Add(ent);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEnt", new { id = ent.Id }, ent);
        }

        // DELETE: api/Ents/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEnt(int id)
        {
            var ent = await _context.Ents.FindAsync(id);
            if (ent == null)
            {
                return NotFound();
            }

            _context.Ents.Remove(ent);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EntExists(int id)
        {
            return _context.Ents.Any(e => e.Id == id);
        }
    }
}
