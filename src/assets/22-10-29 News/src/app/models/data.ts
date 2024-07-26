import { Article, ArticleThumbnail } from "./models";

export const testArticleThumbnail: ArticleThumbnail = {
  category: 'environment',
  title: 'heavy rains in pune Creates water logged areas heavy',
  imageName: 'environment_rains_in_pune.jpg',
};

export const testArticle: Article = {
  id: 'heavy-rains-in-pune-creates-water-logged-areas',
  title: 'heavy rains in pune Creates water logged areas',
  category: 'environment',
  createdAt: '2022-10-20 16:23:43',
  createdBy: 'rohan ankalkote',
  modifiedAt: '2022-10-20 18:45:22',
  description: [
    {
      content:
        'According to the IMD, cumulonimbus cloud formation was noticed, which points a finger towards pressure formation from the Arabian Sea and the Bay of Bengal. Pune was an epicentre of this pressure formation and hence received heavy rainfall.Cumulonimbus clouds or thunderclouds are multi-level clouds that can produce hail, thunder and lightning. They are associated with extreme weather such as heavy torrential downpours, storms, lightning and even tornadoes.',
      imageName: 'environment_rains_in_pune.jpg',
    },
    {
      content:
        'Heavy rains lashed several areas in Pune city in Maharashtra on Monday with the Shivaji Nagar area receiving around 81 mm of rainfall in just a couple of hours, as per the Met department. Several areas such as Hadapsar, Market Yard, Sinhgad Road, NIBM, B T Kawade Road, and Katraj witnessed water-logging and inundation.',
      imageName: 'environment_rains_in_pune_2.jpg',
    },
    {
      content:
        'Due to these heavy rains, government has ordered to close schools and colleges for next 2 days.These heavy rains has also damages public as well as government properties. Shops of people have been completely submerged inside water. Basements of apartments have also submerged inside water.',
      imageName: 'environment_rains_in_pune_3.jpg',
    },
    {
      content:
        'Due to these rains in most of the areas drainage pipelines have been logged. It will take time to repair those drainage pipelines, which will keep water logged areas submerges for at least 2 days. Railway tracks are also logged, due to which trains have been stopped.',
      imageName: 'environment_rains_in_pune_4.jpg',
    },
    {
      content:
        'In the Sangvi area, vehicles including two-wheelers and cars roamed the waterlogged roads. Patches of paths and main roads in the area remain difficult to travel on although much of the water had receded.Fire and Rescue teams were pressed into action to lead rescue operations in central Pune with numerous narrow lines.The situation is said to be under control despite several trees that were uprooted at night and need to be removed. While the city is expected to receive more rainfall on Tuesday, it is unlikely to be ferocious, IMD informed.Earlier, the department had said that central Maharashtra and Konkan were likely to receive heavy rainfall till Tuesday. The downpour will take a break afterwards before returning around October 21, the officials informed.',
      imageName: 'environment_rains_in_pune_5.jpg',
    },
  ],
};