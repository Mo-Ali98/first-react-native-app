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
      title: "Mountain Lake Reflection",
      imageUri:
        "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg",
      description: "Crystal clear lake mirroring majestic mountains.",
      detailedDescription:
        "A serene alpine lake perfectly reflects the surrounding peaks, creating a mirror image of nature's grandeur. The crystal-clear waters act as a natural mirror, doubling the majesty of the towering mountains. During sunrise and sunset, the scene transforms into a spectacular display of colors, with the water's surface capturing every nuance of the changing sky. The surrounding wilderness, home to diverse alpine flora and fauna, adds to the location's pristine beauty. This spot is particularly popular among photographers and nature enthusiasts who seek to capture the perfect reflection shot.",
    },
    {
      id: 2,
      title: "Urban Cafe Culture",
      imageUri:
        "https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg",
      description: "Charming street cafe with vintage aesthetics.",
      detailedDescription:
        "Experience the warmth and charm of local cafe culture, where coffee and conversation blend perfectly in this historic establishment. The cafe's vintage decor features original Art Nouveau elements from the 1920s, including ornate mirrors and handcrafted woodwork. The aroma of freshly ground coffee beans fills the air, while sunlight streams through large windows, creating an inviting atmosphere. Local artists' works adorn the walls, and the outdoor seating area offers a perfect vantage point for people-watching. The cafe is renowned for its signature house-roasted coffee beans and traditional pastries made fresh daily.",
    },
    {
      id: 3,
      title: "Tropical Paradise",
      imageUri:
        "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg",
      description: "Pristine beach with swaying palm trees.",
      detailedDescription:
        "White sandy beaches meet crystal clear waters in this tropical haven...",
    },
    {
      id: 4,
      title: "Ancient Architecture",
      imageUri:
        "https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg",
      description: "Historic building with intricate details.",
      detailedDescription:
        "Centuries of history carved into stone, telling stories of past civilizations...",
    },
    {
      id: 5,
      title: "Forest Meditation",
      imageUri:
        "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg",
      description: "Peaceful woodland path through tall trees.",
      detailedDescription:
        "Find inner peace among the ancient trees in this natural sanctuary, where centuries-old giants reach skyward creating a cathedral-like canopy overhead. The forest floor is carpeted with soft moss and ferns, while dappled sunlight filters through the leaves creating ever-changing patterns. The air is rich with the scent of pine and earth, and the gentle rustling of leaves provides nature's own meditation soundtrack. Well-maintained trails wind through the forest, offering various meditation spots and benches for quiet contemplation. The area is particularly magical during early morning hours when mist weaves between the trees.",
    },
    {
      id: 6,
      title: "Desert Sunset",
      imageUri:
        "https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg",
      description: "Golden hour in the sandy dunes.",
      detailedDescription:
        "Watch as the sun paints the desert landscape in warm, golden hues, transforming the rolling dunes into a sea of light and shadow. As day transitions to dusk, the sky becomes a canvas of oranges, pinks, and purples, while the cooling sand shifts from gold to deep amber. The absolute silence of the desert adds to the majesty of the moment, broken only by the gentle whisper of wind over the dunes. This particular viewing spot, accessible via a well-maintained desert trail, offers panoramic views of the surrounding landscape. During winter months, the sunset arrives earlier, creating perfect opportunities for photographers to capture the magical desert light without enduring extreme heat.",
    },
    {
      id: 7,
      title: "Modern Architecture",
      imageUri:
        "https://images.pexels.com/photos/256150/pexels-photo-256150.jpeg",
      description: "Contemporary building with geometric patterns.",
      detailedDescription:
        "Bold lines and innovative design define this architectural masterpiece, where form and function merge seamlessly in a celebration of contemporary design. The building's facade features an intricate interplay of glass, steel, and concrete, creating ever-changing patterns as light moves across its surface throughout the day. The structure incorporates cutting-edge sustainable technologies, including solar panels integrated into its design and a revolutionary rainwater harvesting system. The interior spaces are equally impressive, with soaring atria, floating staircases, and carefully considered acoustics. This award-winning building has become a symbol of urban renewal and sustainable architecture, attracting architecture enthusiasts and photographers from around the world.",
    },
    {
      id: 8,
      title: "Garden Serenity",
      imageUri:
        "https://images.pexels.com/photos/1470171/pexels-photo-1470171.jpeg",
      description: "Perfectly manicured Japanese garden.",
      detailedDescription:
        "Experience tranquility in this meticulously designed garden space, where centuries of Japanese gardening traditions come to life. Created by master gardener Tanaka Hiroshi in 1985, each element has been carefully positioned according to ancient principles of balance and harmony. The garden features hand-selected rocks from local quarries, carefully pruned bonsai trees over 100 years old, and a koi pond fed by a natural spring. Traditional elements include a wooden tea house, authentic stone lanterns, and a bamboo water feature whose gentle rhythmic sounds promote meditation. The garden changes dramatically with each season: cherry blossoms in spring, lush greenery in summer, vibrant maples in autumn, and snow-covered sculptural forms in winter.",
    },
    {
      id: 9,
      title: "Mountain Summit",
      imageUri:
        "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
      description: "Breathtaking view from the peak.",
      detailedDescription:
        "Reach new heights and witness the world from above at this breathtaking mountain summit, standing proud at 3,842 meters above sea level. The panoramic vista spans three countries on a clear day, with snow-capped peaks stretching to the horizon. The air is crisp and thin at this altitude, adding to the exhilarating experience of achievement. The summit features a modern observation deck with educational panels identifying surrounding peaks and their geological history. For experienced mountaineers, this represents the culmination of a challenging ascent through various ecological zones, from alpine meadows to bare rock faces. The site is accessible year-round via a combination of cable car and hiking trails, though winter visits require proper equipment and experience.",
    },
    {
      id: 10,
      title: "Coastal Sunset",
      imageUri:
        "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg",
      description: "Dramatic ocean sunset with rocky coast.",
      detailedDescription:
        "Watch nature's daily spectacle as the sun meets the horizon along this dramatic coastline, where ancient granite cliffs meet the restless ocean. The location features a series of natural rock formations carved by millions of years of wave action, creating perfect vantage points for sunset viewing. During golden hour, the cliffs take on a warm, reddish glow, while the ocean below shifts through shades of gold and deep blue. Local wildlife adds to the scene, with seabirds soaring on thermal currents and occasionally seals appearing in the waters below. A newly constructed viewing platform provides safe access to the best observation points, while interpretive signs explain the area's geological and ecological significance. The site is particularly spectacular during storm seasons when powerful waves crash against the rocks.",
    },
    {
      id: 11,
      title: "City Nightscape",
      imageUri:
        "https://images.pexels.com/photos/316902/pexels-photo-316902.jpeg",
      description: "Urban skyline illuminated at night.",
      detailedDescription:
        "The city comes alive with countless lights painting the night sky in this stunning urban vista. From this elevated vantage point, witness the metropolis transform as day turns to dusk and thousands of lights begin their evening dance. Modern skyscrapers with their architectural lighting create a geometric light show, while historic buildings are illuminated to showcase their classical details. The observation deck offers 270-degree views and is equipped with high-powered telescopes for detailed exploration of the cityscape. Time your visit during special events to witness the sky illuminated with fireworks, or come during the quiet hours just before dawn to see the city slowly awakening. Professional photographers particularly value the location during the blue hour, when artificial lights blend perfectly with the remaining natural light.",
    },
    {
      id: 12,
      title: "Rustic Farmhouse",
      imageUri:
        "https://images.pexels.com/photos/248837/pexels-photo-248837.jpeg",
      description: "Traditional countryside home and barn.",
      detailedDescription:
        "Experience the charm of rural living in this historic farmstead, dating back to 1832. The beautifully preserved main house features original hand-hewn beams and locally quarried stone walls, telling stories of early American craftsmanship. The surrounding 50-acre property includes the iconic red barn, restored using traditional techniques, and heritage gardens that still produce heirloom vegetables and fruits. Visitors can explore the original root cellar, climb into the hayloft, and see the restored water wheel that once powered the farm's mill. Throughout the seasons, the farm hosts traditional craft demonstrations, from wool spinning to blacksmithing, keeping alive the skills of past generations. The property is particularly stunning during harvest season when the surrounding maple trees burst into brilliant autumn colors.",
    },
    {
      id: 13,
      title: "Autumn Colors",
      imageUri:
        "https://images.pexels.com/photos/1808329/pexels-photo-1808329.jpeg",
      description: "Vibrant fall foliage in the park.",
      detailedDescription:
        "Nature's palette comes alive in this 200-acre arboretum, where carefully curated collections of maple, oak, and beech trees create a spectacular autumn display. The park features over 500 species of deciduous trees, each selected for its unique fall coloring, creating a tapestry of reds, oranges, yellows, and purples. A network of accessible trails winds through the grounds, including elevated walkways that offer breathtaking canopy-level views. The park's microclimate creates one of the longest fall color seasons in the region, typically lasting from late September through early November. Educational stations along the paths explain the science behind fall colors, while designated photography points offer perfect vantage points for capturing the seasonal spectacle. Early morning visitors often encounter local wildlife, including deer and various bird species, among the misty trails.",
    },
    {
      id: 14,
      title: "Waterfall Wonder",
      imageUri:
        "https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg",
      description: "Powerful cascade in tropical setting.",
      detailedDescription:
        "Feel the raw power of nature as water crashes over ancient rocks in this magnificent 200-foot waterfall. The cascade, formed during the last ice age, thunders down three distinct tiers of volcanic basalt, creating a constant mist that nurtures a unique microenvironment of rare ferns and mosses. A series of viewing platforms provides different perspectives of the falls, from the misty base to the dramatic crest. The surrounding rainforest features old-growth trees draped in epiphytes, creating an otherworldly atmosphere. During rainy seasons, the falls reach their full dramatic potential, while in drier months, visitors can safely explore some of the rock formations. The site includes interpretive trails explaining the geological and ecological significance of the area, and the visitor center offers displays about local indigenous peoples' historical connections to this sacred site.",
    },
    {
      id: 15,
      title: "Historic Street",
      imageUri:
        "https://images.pexels.com/photos/161901/paris-sunset-france-monument-161901.jpeg",
      description: "Charming cobblestone street in old town.",
      detailedDescription:
        "Walk through history on these centuries-old pathways, where every cobblestone tells a story of the past. This perfectly preserved medieval street, dating from the 14th century, winds through the heart of the old town, lined with buildings spanning five centuries of architectural evolution. The distinctive herringbone pattern of the cobblestones was laid by master craftsmen in 1756, while the wrought-iron street lamps are original gas fixtures converted to electric light. Each building along the street features unique historical elements, from Gothic doorways to Renaissance windows and Baroque facades. Local guides share tales of the street's famous residents, including artists, writers, and revolutionaries who once called this address home. The street is particularly magical during early morning hours or at dusk when the old-world atmosphere is enhanced by the warm glow of the historic lampposts.",
    },
    {
      id: 16,
      title: "Cozy Coffee Shop",
      imageUri:
        "https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg",
      description: "Warm and inviting cafe interior.",
      detailedDescription:
        "A charming space where coffee lovers gather to enjoy artisanal brews...",
    },
    {
      id: 17,
      title: "Zen Garden",
      imageUri:
        "https://images.pexels.com/photos/1470171/pexels-photo-1470171.jpeg",
      description: "Traditional Japanese rock garden.",
      detailedDescription:
        "Find peace in the minimalist beauty of raked sand and carefully placed stones...",
    },
    {
      id: 18,
      title: "Urban Rooftop",
      imageUri:
        "https://images.pexels.com/photos/1769392/pexels-photo-1769392.jpeg",
      description: "Modern rooftop lounge with city views.",
      detailedDescription:
        "Elevate your perspective from this stylish urban oasis above the city...",
    },
    {
      id: 19,
      title: "Forest Waterfall",
      imageUri:
        "https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg",
      description: "Hidden waterfall in lush forest.",
      detailedDescription:
        "Discover this secluded cascade surrounded by verdant wilderness...",
    },
    {
      id: 20,
      title: "Desert Oasis",
      imageUri:
        "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg",
      description: "Palm-lined pool in desert setting.",
      detailedDescription:
        "A refreshing haven amidst the golden sands of the desert...",
    },
    {
      id: 21,
      title: "Mountain Cabin",
      imageUri:
        "https://images.pexels.com/photos/3609832/pexels-photo-3609832.jpeg",
      description: "Rustic retreat in the mountains.",
      detailedDescription:
        "Escape to this cozy hideaway surrounded by pristine wilderness...",
    },
    {
      id: 22,
      title: "Coastal Village",
      imageUri:
        "https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg",
      description: "Charming seaside community.",
      detailedDescription:
        "Experience life in this picturesque fishing village by the sea...",
    },
    {
      id: 23,
      title: "Vineyard Vista",
      imageUri:
        "https://images.pexels.com/photos/442116/pexels-photo-442116.jpeg",
      description: "Rolling hills of grape vines.",
      detailedDescription:
        "Explore the beautiful landscapes of wine country...",
    },
    {
      id: 24,
      title: "Arctic Aurora",
      imageUri:
        "https://images.pexels.com/photos/1933316/pexels-photo-1933316.jpeg",
      description: "Northern lights over snowy landscape.",
      detailedDescription:
        "Witness the magical dance of the aurora borealis...",
    },
    {
      id: 25,
      title: "Bamboo Forest",
      imageUri:
        "https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg",
      description: "Towering bamboo grove pathway.",
      detailedDescription:
        "Walk through this ethereal forest of swaying bamboo...",
    },
    {
      id: 26,
      title: "Historic Castle",
      imageUri:
        "https://images.pexels.com/photos/2832034/pexels-photo-2832034.jpeg",
      description: "Medieval fortress on hilltop.",
      detailedDescription:
        "Step back in time at this majestic medieval stronghold...",
    },
    {
      id: 27,
      title: "Tropical Lagoon",
      imageUri:
        "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg",
      description: "Crystal clear waters in hidden cove.",
      detailedDescription:
        "Discover paradise in this secluded tropical hideaway...",
    },
    {
      id: 28,
      title: "Urban Park",
      imageUri:
        "https://images.pexels.com/photos/1165982/pexels-photo-1165982.jpeg",
      description: "Green space in city center.",
      detailedDescription: "Find nature's respite in the heart of the city...",
    },
    {
      id: 29,
      title: "Mountain Lake",
      imageUri:
        "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg",
      description: "Alpine lake with mountain backdrop.",
      detailedDescription:
        "Experience the serenity of this pristine mountain lake...",
    },
    {
      id: 30,
      title: "Desert Night",
      imageUri:
        "https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg",
      description: "Starlit sky over sand dunes.",
      detailedDescription:
        "Witness the magic of the desert under a starry sky...",
    },
    {
      id: 50,
      title: "Starry Night",
      imageUri:
        "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg",
      description: "Clear night sky filled with stars.",
      detailedDescription:
        "Witness the universe's beauty under a blanket of stars...",
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
