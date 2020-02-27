using System;
using System.Collections.Generic;


namespace Compatibility
{
	public class Player
	{
		public Guid Id { get; }
		public string Name { get; set; }
		public List<Image> Rankings { get; set; }

		public Player(string name)
		{
			Id = Guid.NewGuid();
			Name = name;
			Rankings = new List<Image>();
		}
	}
}
