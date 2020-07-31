using System;

namespace ngSight.Models
{
    public class Order
    {
        public int Id {get; set;}
        public customer Customer{ get; set;}
        public decimal Total {get; set;}
        public DateTime Placed {get; set;}
        public DateTime? Completed {get; set;}
    }
}