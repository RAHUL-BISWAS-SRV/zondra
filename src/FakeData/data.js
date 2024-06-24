const blogData = [
  {
    id: 31,
    title: "Creative Writing Techniques",
    subtitle: "Enhance your storytelling skills",
    content:
      "Suspendisse potenti. Ut accumsan nec dui ac facilisis. Quisque at vehicula lorem.",
    category: "Writing",
    cover_image:
      "https://www.animaker.com/blog/wp-content/uploads/2018/09/Picmaker-Custom-Thumbnail-banner-image.jpg",
    thumble_image:
      "https://s3-alpha.figma.com/hub/file/2835829151/9cd1e57f-3f45-4f50-9daf-f542d2c9afbc-cover.png",
    timestamp: 1646336400000,
    tags: ["Writing", "Creativity", "Storytelling"],
    author_name: "Emma Thompson",
    author_id: 31,
    likes: 58,
    comments: [
      {
        comment_id: "c61",
        comment_message: "Great writing tips!",
        comment_user_name: "Olivia Brown",
        comment_user_id: 161,
        comment_timestamp: 1646347200000,
      },
      {
        comment_id: "c62",
        comment_message: "Helpful for my writing practice.",
        comment_user_name: "Sophia Miller",
        comment_user_id: 162,
        comment_timestamp: 1646358000000,
      },
    ],
  },
  {
    id: 32,
    title: "The Beauty of Nature",
    subtitle: "Exploring natural wonders",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et neque eros.",
    category: "Nature",
    cover_image:
      "https://www.animaker.com/blog/wp-content/uploads/2018/09/Picmaker-Custom-Thumbnail-banner-image.jpg",
    thumble_image:
      "https://s3-alpha.figma.com/hub/file/2835829151/9cd1e57f-3f45-4f50-9daf-f542d2c9afbc-cover.png",
    timestamp: 1646239200000,
    tags: ["Nature", "Wonders", "Exploration"],
    author_name: "Liam Davis",
    author_id: 32,
    likes: 64,
    comments: [
      {
        comment_id: "c63",
        comment_message: "Nature is truly beautiful!",
        comment_user_name: "Emily Wilson",
        comment_user_id: 163,
        comment_timestamp: 1646250000000,
      },
      {
        comment_id: "c64",
        comment_message: "I love exploring nature!",
        comment_user_name: "Ava Jones",
        comment_user_id: 164,
        comment_timestamp: 1646260800000,
      },
    ],
  },
  {
    id: 33,
    title: "Fitness Routines for Beginners",
    subtitle: "Starting your fitness journey",
    content:
      "Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
    category: "Fitness",
    cover_image:
      "https://www.animaker.com/blog/wp-content/uploads/2018/09/Picmaker-Custom-Thumbnail-banner-image.jpg",
    thumble_image:
      "https://s3-alpha.figma.com/hub/file/2835829151/9cd1e57f-3f45-4f50-9daf-f542d2c9afbc-cover.png",
    timestamp: 1646142800000,
    tags: ["Fitness", "Beginner", "Health"],
    author_name: "Lucas Martinez",
    author_id: 33,
    likes: 49,
    comments: [
      {
        comment_id: "c65",
        comment_message: "Great beginner tips!",
        comment_user_name: "Aiden Garcia",
        comment_user_id: 165,
        comment_timestamp: 1646153600000,
      },
      {
        comment_id: "c66",
        comment_message: "Helpful for my fitness journey.",
        comment_user_name: "Harper Clark",
        comment_user_id: 166,
        comment_timestamp: 1646164400000,
      },
    ],
  },
  {
    id: 34,
    title: "Traveling on a Budget",
    subtitle: "Affordable travel tips",
    content:
      "Suspendisse potenti. Ut accumsan nec dui ac facilisis. Quisque at vehicula lorem.",
    category: "Travel",
    cover_image:
      "https://www.animaker.com/blog/wp-content/uploads/2018/09/Picmaker-Custom-Thumbnail-banner-image.jpg",
    thumble_image:
      "https://s3-alpha.figma.com/hub/file/2835829151/9cd1e57f-3f45-4f50-9daf-f542d2c9afbc-cover.png",
    timestamp: 1646046400000,
    tags: ["Travel", "Budget", "Tips"],
    author_name: "Benjamin Martinez",
    author_id: 34,
    likes: 53,
    comments: [
      {
        comment_id: "c67",
        comment_message: "Great travel tips!",
        comment_user_name: "Mason Lopez",
        comment_user_id: 167,
        comment_timestamp: 1646057200000,
      },
      {
        comment_id: "c68",
        comment_message: "Affordable travel advice!",
        comment_user_name: "Evelyn Walker",
        comment_user_id: 168,
        comment_timestamp: 1646068000000,
      },
    ],
  },
  {
    id: 35,
    title: "Home Decorating Ideas",
    subtitle: "Making your home beautiful",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et neque eros.",
    category: "Home",
    cover_image:
      "https://www.animaker.com/blog/wp-content/uploads/2018/09/Picmaker-Custom-Thumbnail-banner-image.jpg",
    thumble_image:
      "https://s3-alpha.figma.com/hub/file/2835829151/9cd1e57f-3f45-4f50-9daf-f542d2c9afbc-cover.png",
    timestamp: 1645950000000,
    tags: ["Home", "Decorating", "Ideas"],
    author_name: "Amelia Rodriguez",
    author_id: 35,
    likes: 68,
    comments: [
      {
        comment_id: "c69",
        comment_message: "Beautiful decorating ideas!",
        comment_user_name: "Eli Wright",
        comment_user_id: 169,
        comment_timestamp: 1645960800000,
      },
      {
        comment_id: "c70",
        comment_message: "Inspired to redecorate my home.",
        comment_user_name: "Scarlett Hernandez",
        comment_user_id: 170,
        comment_timestamp: 1645971600000,
      },
    ],
  },
  {
    id: 36,
    title: "Mindfulness Meditation",
    subtitle: "Finding peace in everyday life",
    content:
      "Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
    category: "Wellness",
    cover_image:
      "https://www.animaker.com/blog/wp-content/uploads/2018/09/Picmaker-Custom-Thumbnail-banner-image.jpg",
    thumble_image:
      "https://s3-alpha.figma.com/hub/file/2835829151/9cd1e57f-3f45-4f50-9daf-f542d2c9afbc-cover.png",
    timestamp: 1645853600000,
    tags: ["Mindfulness", "Meditation", "Peace"],
    author_name: "William Wilson",
    author_id: 36,
    likes: 74,
    comments: [
      {
        comment_id: "c71",
        comment_message: "Great meditation guide!",
        comment_user_name: "Mia Taylor",
        comment_user_id: 171,
        comment_timestamp: 1645864400000,
      },
      {
        comment_id: "c72",
        comment_message: "Mindfulness is key to a peaceful life.",
        comment_user_name: "Daniel Anderson",
        comment_user_id: 172,
        comment_timestamp: 1645875200000,
      },
    ],
  },
  {
    id: 37,
    title: "Gardening for Beginners",
    subtitle: "Starting your own garden",
    content:
      "Suspendisse potenti. Ut accumsan nec dui ac facilisis. Quisque at vehicula lorem.",
    category: "Gardening",
    cover_image:
      "https://www.animaker.com/blog/wp-content/uploads/2018/09/Picmaker-Custom-Thumbnail-banner-image.jpg",
    thumble_image:
      "https://s3-alpha.figma.com/hub/file/2835829151/9cd1e57f-3f45-4f50-9daf-f542d2c9afbc-cover.png",
    timestamp: 1645757200000,
    tags: ["Gardening", "Beginner", "Plants"],
    author_name: "Olivia Lee",
    author_id: 37,
    likes: 45,
    comments: [
      {
        comment_id: "c73",
        comment_message: "Great gardening tips!",
        comment_user_name: "Mason White",
        comment_user_id: 173,
        comment_timestamp: 1645768000000,
      },
      {
        comment_id: "c74",
        comment_message: "Helpful for beginners.",
        comment_user_name: "Abigail Young",
        comment_user_id: 174,
        comment_timestamp: 1645778800000,
      },
    ],
  },
  {
    id: 38,
    title: "Exploring Digital Art",
    subtitle: "Techniques and tools for digital artists",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et neque eros.",
    category: "Art",
    cover_image:
      "https://www.animaker.com/blog/wp-content/uploads/2018/09/Picmaker-Custom-Thumbnail-banner-image.jpg",
    thumble_image:
      "https://s3-alpha.figma.com/hub/file/2835829151/9cd1e57f-3f45-4f50-9daf-f542d2c9afbc-cover.png",
    timestamp: 1645660800000,
    tags: ["Digital Art", "Art", "Techniques"],
    author_name: "James Robinson",
    author_id: 38,
    likes: 56,
    comments: [
      {
        comment_id: "c75",
        comment_message: "Amazing digital art tips!",
        comment_user_name: "Sophie Green",
        comment_user_id: 175,
        comment_timestamp: 1645671600000,
      },
      {
        comment_id: "c76",
        comment_message: "Inspired to try digital art.",
        comment_user_name: "Benjamin Walker",
        comment_user_id: 176,
        comment_timestamp: 1645682400000,
      },
    ],
  },
  {
    id: 39,
    title: "Learning a New Language",
    subtitle: "Tips for effective language learning",
    content:
      "Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
    category: "Education",
    cover_image:
      "https://www.animaker.com/blog/wp-content/uploads/2018/09/Picmaker-Custom-Thumbnail-banner-image.jpg",
    thumble_image:
      "https://s3-alpha.figma.com/hub/file/2835829151/9cd1e57f-3f45-4f50-9daf-f542d2c9afbc-cover.png",
    timestamp: 1645564400000,
    tags: ["Language Learning", "Education", "Tips"],
    author_name: "Charlotte Harris",
    author_id: 39,
    likes: 63,
    comments: [
      {
        comment_id: "c77",
        comment_message: "Great language learning tips!",
        comment_user_name: "Alexander Allen",
        comment_user_id: 177,
        comment_timestamp: 1645575200000,
      },
      {
        comment_id: "c78",
        comment_message: "Helpful for my language journey.",
        comment_user_name: "Henry Wright",
        comment_user_id: 178,
        comment_timestamp: 1645586000000,
      },
    ],
  },
  {
    id: 40,
    title: "Healthy Eating Habits",
    subtitle: "Nutritional tips for a healthier life",
    content:
      "Suspendisse potenti. Ut accumsan nec dui ac facilisis. Quisque at vehicula lorem.",
    category: "Health",
    cover_image:
      "https://www.animaker.com/blog/wp-content/uploads/2018/09/Picmaker-Custom-Thumbnail-banner-image.jpg",
    thumble_image:
      "https://s3-alpha.figma.com/hub/file/2835829151/9cd1e57f-3f45-4f50-9daf-f542d2c9afbc-cover.png",
    timestamp: 1645468000000,
    tags: ["Healthy Eating", "Nutrition", "Health"],
    author_name: "Jacob Young",
    author_id: 40,
    likes: 74,
    comments: [
      {
        comment_id: "c79",
        comment_message: "Great nutritional advice!",
        comment_user_name: "Sofia Adams",
        comment_user_id: 179,
        comment_timestamp: 1645478800000,
      },
      {
        comment_id: "c80",
        comment_message: "Inspired to eat healthier.",
        comment_user_name: "Victoria Clark",
        comment_user_id: 180,
        comment_timestamp: 1645489600000,
      },
    ],
  },
  // Add more entries similarly to reach the total of 50
];

export default blogData;
