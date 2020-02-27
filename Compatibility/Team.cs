using System;
using System.Collections.Generic;

namespace Compatibility
{
	public class Team
	{
		public Guid Id { get; }
		public string Name { get; set; }
		public List<Player> Teammates { get; set; }
		public int Points { get; set; }
		public int NumRankings { get; set; }


		public Team(string name)
		{
			Id = Guid.NewGuid();
			Name = name;
		}

		public void addPlayer(Player player)
        {
			Teammates.Add(player);
        }

		public void removePlayer(Player player)
		{
			Teammates.Remove(player);
		}

		public void AddPoints(int val)
        {
			Points += val;
        }

	}


}