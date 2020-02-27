using System;
using System.Collections.Generic;


namespace Compatibility
{
	public class Game
	{
		public Guid Id { get;}
		public string EasyId { get; set; }
		public List<Team> Teams { get; set; }
		public List<Image> Images { get; set; }
		public Player Host { get; set; }

		public Game(string easyId, Player host)
		{
			Id = Guid.NewGuid();
			EasyId = easyId;
			Teams = new List<Team>();
			Images = new List<Image>();
			Host = host;

		}
	}
}
