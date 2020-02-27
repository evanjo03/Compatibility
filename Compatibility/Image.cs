using System;

namespace Compatibility
{
	public class Image
	{
		public Guid Id { get; }
		public string Path { get; set; }
		public int Height { get; set; }
		public int Length { get; set; }


		public Image(string path)
		{
			Id = Guid.NewGuid();
			Path = path;
			Height = 100;
			Length = 100;
		}
	}
}
