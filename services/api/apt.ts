export type Item = {
  id: number;
  title: string;
  description: string;
  imageUri: string;
  detailedDescription: string;
};

export class Api {
  private items: Item[] = [
    {
      id: 1,
      title: "Beautiful Landscape",
      imageUri:
        "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "A stunning view of a lush green landscape.",
      detailedDescription:
        "This breathtaking landscape captures the serene beauty of nature at its finest. The rolling hills stretch as far as the eye can see, covered in vibrant green grasses that sway gently in the breeze. A meandering river cuts through the valley, reflecting the soft blue sky above. In the distance, tall mountains rise majestically, their peaks kissed by the clouds. The air is fresh and crisp, carrying the scent of wildflowers and pine trees. This scene embodies tranquility and the purest form of natural beauty, perfect for a peaceful retreat into the great outdoors.\n\nAs you walk through this vast and untouched wilderness, the beauty of every detail captures your attention. The distant hum of nature, punctuated only by the occasional rustle of leaves or the chirping of birds, creates a symphony of serenity. The landscape offers a quiet space for introspection, where every breath you take seems to cleanse your mind and soul. This area is perfect for hiking, camping, or simply finding solace in the embrace of Mother Nature. Whether you're an avid adventurer or someone looking for a peaceful escape from the demands of modern life, this landscape is a true sanctuary of peace and beauty.",
    },
    {
      id: 2,
      title: "Beach Vibes",
      imageUri:
        "https://images.pexels.com/photos/2526038/pexels-photo-2526038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "A warm, sunny beach with turquoise waters.",
      detailedDescription:
        "Imagine yourself lounging on the warm golden sand of a tropical beach, with the turquoise waves lapping at the shore. The sun shines brightly overhead, casting a golden glow over the landscape. Palm trees sway gently in the breeze, providing some shade as you take in the view. The sound of the waves crashing in the distance is soothing, a constant reminder of the peaceful rhythm of the ocean. This beach is a paradise, offering the perfect place to relax and unwind while soaking in the natural beauty surrounding you.\n\nAs you walk along the shore, the sand feels soft beneath your feet, and the salty air invigorates your senses. The rhythmic sound of the ocean, combined with the occasional call of seabirds flying overhead, creates an atmosphere of calm and tranquility. You can see families building sandcastles, couples taking romantic walks along the shoreline, and people in the water enjoying the warm embrace of the ocean. This is a place where time seems to slow down, and all the worries of everyday life fade away. Whether you're here to relax, play, or simply enjoy the sights and sounds of the sea, this beach has something for everyone.",
    },
    {
      id: 3,
      title: "Mountain Adventure",
      imageUri:
        "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "A rugged mountain landscape, perfect for hiking.",
      detailedDescription:
        "This dramatic mountain scene showcases towering peaks that rise high into the sky, their rugged faces carved by years of wind and weather. The air is crisp and fresh, invigorating as you embark on a hiking adventure up the steep trails. Below, a dense forest of pine trees stretches across the valley, offering a natural sanctuary for wildlife. As you ascend, the view opens up, revealing panoramic vistas of rocky cliffs, jagged ridges, and snow-capped peaks in the distance. The sense of accomplishment and awe that comes with reaching the summit is unparalleled.\n\nThe journey up the mountain is one of both physical and mental challenge. As you navigate the narrow, winding paths, every step you take feels like an opportunity to connect with the wilderness around you. The quiet solitude allows you to reflect and recharge as you leave the noise and stress of daily life behind. Once at the top, the sense of achievement is profound — you're greeted by a view that stretches for miles, a reward for your perseverance. This is an adventure for those seeking the thrill of the outdoors and the beauty of untamed landscapes. The mountains, with their majestic beauty and untouched tranquility, offer a sanctuary for those seeking a deeper connection with nature.",
    },
    {
      id: 4,
      title: "City Lights",
      imageUri:
        "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "The vibrant lights of a bustling city at night.",
      detailedDescription:
        "The city comes alive at night with a dazzling display of lights. The skyline is illuminated by towering skyscrapers, their windows twinkling like stars in the dark sky. Neon signs flash with vibrant colors, advertising everything from theaters to trendy restaurants. The streets are bustling with people, cars, and buses, all contributing to the electric energy of the urban landscape. The sound of distant traffic, laughter, and music fills the air, creating a unique symphony of city life.\n\nAs you walk through the streets, you are struck by the contrast between the quiet of the alleys and the liveliness of the main avenues. On one street corner, a group of friends gathers to enjoy a late-night snack, while on another, a busker strums a guitar, adding to the vibrant atmosphere. The lights reflect off the glass windows of cafes and shops, creating a sense of warmth and vibrancy. The city is a living, breathing entity — full of opportunity, excitement, and energy. Whether you're headed to a late-night show or simply exploring the city under the glow of neon signs, the city at night offers an experience like no other, filled with possibility and adventure.",
    },
  ];

  async fetchItems(): Promise<Item[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.items);
      }, 0); // Simulated 2-second delay
    });
  }

  async fetchItemById(id: number): Promise<Item | undefined> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const item = this.items.find((item) => item.id === id);
        resolve(item);
      }, 0); // Simulated 2-second delay
    });
  }
}
