import { RawgApiResponse } from '@/types/rawg';

export const MOCK_RAWG_RESPONSE: RawgApiResponse = {
  count: 898857,
  next: 'https://api.rawg.io/api/games?key=c23b0b0a740f4ba1a20803b84cb6a2a3&page=2',
  previous: null,
  results: [
    {
      id: 3498,
      slug: 'grand-theft-auto-v',
      name: 'Grand Theft Auto V',
      released: '2013-09-17',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
      rating: 4.47,
      rating_top: 5,
      ratings: [
        { id: 5, title: 'exceptional', count: 4433, percent: 59.0 },
        { id: 4, title: 'recommended', count: 2462, percent: 32.77 },
        { id: 3, title: 'meh', count: 472, percent: 6.28 },
        { id: 1, title: 'skip', count: 147, percent: 1.96 },
      ],
      ratings_count: 7378,
      reviews_text_count: 74,
      added: 22566,
      added_by_status: {
        yet: 560,
        owned: 12883,
        beaten: 6498,
        toplay: 652,
        dropped: 1194,
        playing: 779,
      },
      metacritic: 92,
      playtime: 74,
      suggestions_count: 450,
      updated: '2026-04-24T07:19:13',
      reviews_count: 7514,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 187,
            name: 'PlayStation 5',
            slug: 'playstation5',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 1467,
            image_background:
              'https://media.rawg.io/media/games/cd3/cd3c9c7d3e95cb1608fd6250f1b90b7a.jpg',
          },
          released_at: '2013-09-17',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 186,
            name: 'Xbox Series S/X',
            slug: 'xbox-series-x',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 1244,
            image_background:
              'https://media.rawg.io/media/games/5f6/5f61441e6338e9221f96a8f4c64c7bb8.jpg',
          },
          released_at: '2013-09-17',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 560749,
            image_background:
              'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
          },
          released_at: '2013-09-17',
          requirements_en: {
            minimum: 'Minimum:OS: Windows 10 64 Bit...',
            recommended: 'Recommended:OS: Windows 10 64 Bit...',
          },
          requirements_ru: null,
        },
        // ... demais plataformas podem ser inseridas conforme necessário
      ],
      parent_platforms: [
        { platform: { id: 1, name: 'PC', slug: 'pc' } },
        { platform: { id: 2, name: 'PlayStation', slug: 'playstation' } },
        { platform: { id: 3, name: 'Xbox', slug: 'xbox' } },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 191609,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
      ],
      stores: [
        {
          id: 290376,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 123346,
            image_background:
              'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 250833,
          image_background:
            'https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
        },
      ],
    },
    {
      id: 3499,
      slug: 'grand-theft-auto-v',
      name: 'Grand Theft Auto V',
      released: '2013-09-17',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
      rating: 4.47,
      rating_top: 5,
      ratings: [
        { id: 5, title: 'exceptional', count: 4433, percent: 59.0 },
        { id: 4, title: 'recommended', count: 2462, percent: 32.77 },
        { id: 3, title: 'meh', count: 472, percent: 6.28 },
        { id: 1, title: 'skip', count: 147, percent: 1.96 },
      ],
      ratings_count: 7378,
      reviews_text_count: 74,
      added: 22566,
      added_by_status: {
        yet: 560,
        owned: 12883,
        beaten: 6498,
        toplay: 652,
        dropped: 1194,
        playing: 779,
      },
      metacritic: 92,
      playtime: 74,
      suggestions_count: 450,
      updated: '2026-04-24T07:19:13',
      reviews_count: 7514,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 187,
            name: 'PlayStation 5',
            slug: 'playstation5',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 1467,
            image_background:
              'https://media.rawg.io/media/games/cd3/cd3c9c7d3e95cb1608fd6250f1b90b7a.jpg',
          },
          released_at: '2013-09-17',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 186,
            name: 'Xbox Series S/X',
            slug: 'xbox-series-x',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 1244,
            image_background:
              'https://media.rawg.io/media/games/5f6/5f61441e6338e9221f96a8f4c64c7bb8.jpg',
          },
          released_at: '2013-09-17',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 560749,
            image_background:
              'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
          },
          released_at: '2013-09-17',
          requirements_en: {
            minimum: 'Minimum:OS: Windows 10 64 Bit...',
            recommended: 'Recommended:OS: Windows 10 64 Bit...',
          },
          requirements_ru: null,
        },
        // ... demais plataformas podem ser inseridas conforme necessário
      ],
      parent_platforms: [
        { platform: { id: 1, name: 'PC', slug: 'pc' } },
        { platform: { id: 2, name: 'PlayStation', slug: 'playstation' } },
        { platform: { id: 3, name: 'Xbox', slug: 'xbox' } },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 191609,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
      ],
      stores: [
        {
          id: 290376,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 123346,
            image_background:
              'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 250833,
          image_background:
            'https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
        },
      ],
    },
    {
      id: 3500,
      slug: 'grand-theft-auto-v',
      name: 'Grand Theft Auto V',
      released: '2013-09-17',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
      rating: 4.47,
      rating_top: 5,
      ratings: [
        { id: 5, title: 'exceptional', count: 4433, percent: 59.0 },
        { id: 4, title: 'recommended', count: 2462, percent: 32.77 },
        { id: 3, title: 'meh', count: 472, percent: 6.28 },
        { id: 1, title: 'skip', count: 147, percent: 1.96 },
      ],
      ratings_count: 7378,
      reviews_text_count: 74,
      added: 22566,
      added_by_status: {
        yet: 560,
        owned: 12883,
        beaten: 6498,
        toplay: 652,
        dropped: 1194,
        playing: 779,
      },
      metacritic: 92,
      playtime: 74,
      suggestions_count: 450,
      updated: '2026-04-24T07:19:13',
      reviews_count: 7514,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 187,
            name: 'PlayStation 5',
            slug: 'playstation5',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 1467,
            image_background:
              'https://media.rawg.io/media/games/cd3/cd3c9c7d3e95cb1608fd6250f1b90b7a.jpg',
          },
          released_at: '2013-09-17',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 186,
            name: 'Xbox Series S/X',
            slug: 'xbox-series-x',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 1244,
            image_background:
              'https://media.rawg.io/media/games/5f6/5f61441e6338e9221f96a8f4c64c7bb8.jpg',
          },
          released_at: '2013-09-17',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 560749,
            image_background:
              'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
          },
          released_at: '2013-09-17',
          requirements_en: {
            minimum: 'Minimum:OS: Windows 10 64 Bit...',
            recommended: 'Recommended:OS: Windows 10 64 Bit...',
          },
          requirements_ru: null,
        },
        // ... demais plataformas podem ser inseridas conforme necessário
      ],
      parent_platforms: [
        { platform: { id: 1, name: 'PC', slug: 'pc' } },
        { platform: { id: 2, name: 'PlayStation', slug: 'playstation' } },
        { platform: { id: 3, name: 'Xbox', slug: 'xbox' } },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 191609,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
      ],
      stores: [
        {
          id: 290376,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 123346,
            image_background:
              'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 250833,
          image_background:
            'https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
        },
      ],
    },
    {
      id: 3501,
      slug: 'grand-theft-auto-v',
      name: 'Grand Theft Auto V',
      released: '2013-09-17',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
      rating: 4.47,
      rating_top: 5,
      ratings: [
        { id: 5, title: 'exceptional', count: 4433, percent: 59.0 },
        { id: 4, title: 'recommended', count: 2462, percent: 32.77 },
        { id: 3, title: 'meh', count: 472, percent: 6.28 },
        { id: 1, title: 'skip', count: 147, percent: 1.96 },
      ],
      ratings_count: 7378,
      reviews_text_count: 74,
      added: 22566,
      added_by_status: {
        yet: 560,
        owned: 12883,
        beaten: 6498,
        toplay: 652,
        dropped: 1194,
        playing: 779,
      },
      metacritic: 92,
      playtime: 74,
      suggestions_count: 450,
      updated: '2026-04-24T07:19:13',
      reviews_count: 7514,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 187,
            name: 'PlayStation 5',
            slug: 'playstation5',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 1467,
            image_background:
              'https://media.rawg.io/media/games/cd3/cd3c9c7d3e95cb1608fd6250f1b90b7a.jpg',
          },
          released_at: '2013-09-17',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 186,
            name: 'Xbox Series S/X',
            slug: 'xbox-series-x',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 1244,
            image_background:
              'https://media.rawg.io/media/games/5f6/5f61441e6338e9221f96a8f4c64c7bb8.jpg',
          },
          released_at: '2013-09-17',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 560749,
            image_background:
              'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
          },
          released_at: '2013-09-17',
          requirements_en: {
            minimum: 'Minimum:OS: Windows 10 64 Bit...',
            recommended: 'Recommended:OS: Windows 10 64 Bit...',
          },
          requirements_ru: null,
        },
        // ... demais plataformas podem ser inseridas conforme necessário
      ],
      parent_platforms: [
        { platform: { id: 1, name: 'PC', slug: 'pc' } },
        { platform: { id: 2, name: 'PlayStation', slug: 'playstation' } },
        { platform: { id: 3, name: 'Xbox', slug: 'xbox' } },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 191609,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
      ],
      stores: [
        {
          id: 290376,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 123346,
            image_background:
              'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 250833,
          image_background:
            'https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
        },
      ],
    },
    {
      id: 3502,
      slug: 'grand-theft-auto-v',
      name: 'Grand Theft Auto V',
      released: '2013-09-17',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
      rating: 4.47,
      rating_top: 5,
      ratings: [
        { id: 5, title: 'exceptional', count: 4433, percent: 59.0 },
        { id: 4, title: 'recommended', count: 2462, percent: 32.77 },
        { id: 3, title: 'meh', count: 472, percent: 6.28 },
        { id: 1, title: 'skip', count: 147, percent: 1.96 },
      ],
      ratings_count: 7378,
      reviews_text_count: 74,
      added: 22566,
      added_by_status: {
        yet: 560,
        owned: 12883,
        beaten: 6498,
        toplay: 652,
        dropped: 1194,
        playing: 779,
      },
      metacritic: 92,
      playtime: 74,
      suggestions_count: 450,
      updated: '2026-04-24T07:19:13',
      reviews_count: 7514,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 187,
            name: 'PlayStation 5',
            slug: 'playstation5',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 1467,
            image_background:
              'https://media.rawg.io/media/games/cd3/cd3c9c7d3e95cb1608fd6250f1b90b7a.jpg',
          },
          released_at: '2013-09-17',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 186,
            name: 'Xbox Series S/X',
            slug: 'xbox-series-x',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 1244,
            image_background:
              'https://media.rawg.io/media/games/5f6/5f61441e6338e9221f96a8f4c64c7bb8.jpg',
          },
          released_at: '2013-09-17',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 560749,
            image_background:
              'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
          },
          released_at: '2013-09-17',
          requirements_en: {
            minimum: 'Minimum:OS: Windows 10 64 Bit...',
            recommended: 'Recommended:OS: Windows 10 64 Bit...',
          },
          requirements_ru: null,
        },
        // ... demais plataformas podem ser inseridas conforme necessário
      ],
      parent_platforms: [
        { platform: { id: 1, name: 'PC', slug: 'pc' } },
        { platform: { id: 2, name: 'PlayStation', slug: 'playstation' } },
        { platform: { id: 3, name: 'Xbox', slug: 'xbox' } },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 191609,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
      ],
      stores: [
        {
          id: 290376,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 123346,
            image_background:
              'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 250833,
          image_background:
            'https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
        },
      ],
    },
  ],
};

export const ROCKSTAR_GAMES: RawgApiResponse = {
  count: 26,
  next: 'https://api.rawg.io/api/games?developers=rockstar-games&key=c23b0b0a740f4ba1a20803b84cb6a2a3&page=2',
  previous: null,
  results: [
    {
      slug: 'grand-theft-auto-v',
      name: 'Grand Theft Auto V',
      playtime: 74,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 187,
            name: 'PlayStation 5',
            slug: 'playstation5',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 186,
            name: 'Xbox Series S/X',
            slug: 'xbox-series-x',
          },
        },
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
          },
        },
        {
          platform: {
            id: 16,
            name: 'PlayStation 3',
            slug: 'playstation3',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
          },
        },
        {
          store: {
            id: 7,
            name: 'Xbox 360 Store',
            slug: 'xbox360',
          },
        },
        {
          store: {
            id: 11,
            name: 'Epic Games',
            slug: 'epic-games',
          },
        },
      ],
      released: '2013-09-17',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
      rating: 4.47,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 4433,
          percent: 59,
        },
        {
          id: 4,
          title: 'recommended',
          count: 2462,
          percent: 32.77,
        },
        {
          id: 3,
          title: 'meh',
          count: 472,
          percent: 6.28,
        },
        {
          id: 1,
          title: 'skip',
          count: 147,
          percent: 1.96,
        },
      ],
      ratings_count: 7378,
      reviews_text_count: 74,
      added: 22566,
      added_by_status: {
        yet: 560,
        owned: 12883,
        beaten: 6498,
        toplay: 652,
        dropped: 1194,
        playing: 779,
      },
      metacritic: 92,
      suggestions_count: 450,
      updated: '2026-04-24T07:19:13',
      id: 3498,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 250833,
          image_background:
            'https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 70700,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 50554,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 42392,
          name: 'Приключение',
          slug: 'prikliuchenie',
          language: 'rus',
          games_count: 49157,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 51712,
          image_background:
            'https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 42555,
          image_background:
            'https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 24145,
          image_background:
            'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 39708,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 42425,
          name: 'Для нескольких игроков',
          slug: 'dlia-neskolkikh-igrokov',
          language: 'rus',
          games_count: 12936,
          image_background:
            'https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg',
        },
        {
          id: 42400,
          name: 'Атмосфера',
          slug: 'atmosfera',
          language: 'rus',
          games_count: 6083,
          image_background:
            'https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg',
        },
        {
          id: 42401,
          name: 'Отличный саундтрек',
          slug: 'otlichnyi-saundtrek',
          language: 'rus',
          games_count: 4675,
          image_background:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3450,
          image_background:
            'https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 26627,
          image_background:
            'https://media.rawg.io/media/games/00d/00d374f12a3ab5f96c500a2cfa901e15.jpg',
        },
        {
          id: 18,
          name: 'Co-op',
          slug: 'co-op',
          language: 'eng',
          games_count: 14392,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 42442,
          name: 'Открытый мир',
          slug: 'otkrytyi-mir',
          language: 'rus',
          games_count: 7452,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 36,
          name: 'Open World',
          slug: 'open-world',
          language: 'eng',
          games_count: 9266,
          image_background:
            'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
        },
        {
          id: 411,
          name: 'cooperative',
          slug: 'cooperative',
          language: 'eng',
          games_count: 6588,
          image_background:
            'https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg',
        },
        {
          id: 42428,
          name: 'Шутер',
          slug: 'shuter',
          language: 'rus',
          games_count: 11967,
          image_background:
            'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
        },
        {
          id: 42429,
          name: 'От первого лица',
          slug: 'ot-pervogo-litsa',
          language: 'rus',
          games_count: 16473,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 37397,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42435,
          name: 'Шедевр',
          slug: 'shedevr',
          language: 'rus',
          games_count: 1059,
          image_background:
            'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
        },
        {
          id: 42441,
          name: 'От третьего лица',
          slug: 'ot-tretego-litsa',
          language: 'rus',
          games_count: 10233,
          image_background:
            'https://media.rawg.io/media/games/00d/00d374f12a3ab5f96c500a2cfa901e15.jpg',
        },
        {
          id: 149,
          name: 'Third Person',
          slug: 'third-person',
          language: 'eng',
          games_count: 14710,
          image_background:
            'https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg',
        },
        {
          id: 42482,
          name: 'Смешная',
          slug: 'smeshnaia',
          language: 'rus',
          games_count: 12851,
          image_background:
            'https://media.rawg.io/media/games/858/858c016de0cf7bc21a57dcc698a04a0c.jpg',
        },
        {
          id: 4,
          name: 'Funny',
          slug: 'funny',
          language: 'eng',
          games_count: 28842,
          image_background:
            'https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg',
        },
        {
          id: 37,
          name: 'Sandbox',
          slug: 'sandbox',
          language: 'eng',
          games_count: 8514,
          image_background:
            'https://media.rawg.io/media/games/b4e/b4e4c73d5aa4ec66bbf75375c4847a2b.jpg',
        },
        {
          id: 42481,
          name: 'Юмор',
          slug: 'iumor',
          language: 'rus',
          games_count: 8203,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        {
          id: 42444,
          name: 'Песочница',
          slug: 'pesochnitsa',
          language: 'rus',
          games_count: 5742,
          image_background:
            'https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg',
        },
        {
          id: 123,
          name: 'Comedy',
          slug: 'comedy',
          language: 'eng',
          games_count: 14866,
          image_background:
            'https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg',
        },
        {
          id: 42446,
          name: 'Шутер от третьего лица',
          slug: 'shuter-ot-tretego-litsa',
          language: 'rus',
          games_count: 2778,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 150,
          name: 'Third-Person Shooter',
          slug: 'third-person-shooter',
          language: 'eng',
          games_count: 4168,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 62,
          name: 'Moddable',
          slug: 'moddable',
          language: 'eng',
          games_count: 1136,
          image_background:
            'https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg',
        },
        {
          id: 42438,
          name: 'Поддержка модификаций',
          slug: 'podderzhka-modifikatsii',
          language: 'rus',
          games_count: 947,
          image_background:
            'https://media.rawg.io/media/games/806/8060a7663364ac23e15480728938d6f3.jpg',
        },
        {
          id: 42529,
          name: 'Для взрослых',
          slug: 'dlia-vzroslykh',
          language: 'rus',
          games_count: 4584,
          image_background:
            'https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg',
        },
        {
          id: 42496,
          name: 'Гонки',
          slug: 'gonki',
          language: 'rus',
          games_count: 4697,
          image_background:
            'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
        },
        {
          id: 144,
          name: 'Crime',
          slug: 'crime',
          language: 'eng',
          games_count: 3270,
          image_background:
            'https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg',
        },
        {
          id: 42443,
          name: 'Криминал',
          slug: 'kriminal',
          language: 'rus',
          games_count: 1386,
          image_background:
            'https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg',
        },
        {
          id: 62349,
          name: 'vr mod',
          slug: 'vr-mod',
          language: 'eng',
          games_count: 17,
          image_background:
            'https://media.rawg.io/media/screenshots/1bb/1bb3f78f0fe43b5d5ca2f3da5b638840.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
        name_en: 'Mature',
        name_ru: 'С 17 лет',
      },
      user_game: null,
      reviews_count: 7514,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
        },
        {
          id: 1827223,
          image:
            'https://media.rawg.io/media/screenshots/f95/f9518b1d99210c0cae21fc09e95b4e31.jpg',
        },
        {
          id: 1827225,
          image:
            'https://media.rawg.io/media/screenshots/a5c/a5c95ea539c87d5f538763e16e18fb99.jpg',
        },
        {
          id: 1827226,
          image:
            'https://media.rawg.io/media/screenshots/a7e/a7e990bc574f4d34e03b5926361d1ee7.jpg',
        },
        {
          id: 1827228,
          image:
            'https://media.rawg.io/media/screenshots/eb0/eb0a2c0de9194a635fc0cd04f5a29ae7.jpg',
        },
        {
          id: 1827229,
          image:
            'https://media.rawg.io/media/screenshots/ec7/ec7f05fb82290fea9647b7879fe9a6bf.jpg',
        },
        {
          id: 1827230,
          image:
            'https://media.rawg.io/media/screenshots/260/260559fbefce0b36c66ae5e280c7d774.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
      ],
    },
    {
      slug: 'red-dead-redemption-2',
      name: 'Red Dead Redemption 2',
      playtime: 21,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
          },
        },
        {
          store: {
            id: 11,
            name: 'Epic Games',
            slug: 'epic-games',
          },
        },
      ],
      released: '2018-10-26',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
      rating: 4.59,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 4149,
          percent: 73.84,
        },
        {
          id: 4,
          title: 'recommended',
          count: 994,
          percent: 17.69,
        },
        {
          id: 3,
          title: 'meh',
          count: 300,
          percent: 5.34,
        },
        {
          id: 1,
          title: 'skip',
          count: 176,
          percent: 3.13,
        },
      ],
      ratings_count: 5486,
      reviews_text_count: 96,
      added: 16868,
      added_by_status: {
        yet: 1021,
        owned: 8817,
        beaten: 3621,
        toplay: 1678,
        dropped: 771,
        playing: 960,
      },
      metacritic: 96,
      suggestions_count: 630,
      updated: '2026-04-24T07:18:07',
      id: 28,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 250833,
          image_background:
            'https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 70700,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 50554,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 42392,
          name: 'Приключение',
          slug: 'prikliuchenie',
          language: 'rus',
          games_count: 49157,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 42555,
          image_background:
            'https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 39708,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 42425,
          name: 'Для нескольких игроков',
          slug: 'dlia-neskolkikh-igrokov',
          language: 'rus',
          games_count: 12936,
          image_background:
            'https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg',
        },
        {
          id: 42400,
          name: 'Атмосфера',
          slug: 'atmosfera',
          language: 'rus',
          games_count: 6083,
          image_background:
            'https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg',
        },
        {
          id: 42401,
          name: 'Отличный саундтрек',
          slug: 'otlichnyi-saundtrek',
          language: 'rus',
          games_count: 4675,
          image_background:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3450,
          image_background:
            'https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg',
        },
        {
          id: 42394,
          name: 'Глубокий сюжет',
          slug: 'glubokii-siuzhet',
          language: 'rus',
          games_count: 18117,
          image_background:
            'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
        },
        {
          id: 18,
          name: 'Co-op',
          slug: 'co-op',
          language: 'eng',
          games_count: 14392,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 27260,
          image_background:
            'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
        },
        {
          id: 42442,
          name: 'Открытый мир',
          slug: 'otkrytyi-mir',
          language: 'rus',
          games_count: 7452,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 36,
          name: 'Open World',
          slug: 'open-world',
          language: 'eng',
          games_count: 9266,
          image_background:
            'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
        },
        {
          id: 42428,
          name: 'Шутер',
          slug: 'shuter',
          language: 'rus',
          games_count: 11967,
          image_background:
            'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
        },
        {
          id: 42429,
          name: 'От первого лица',
          slug: 'ot-pervogo-litsa',
          language: 'rus',
          games_count: 16473,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 37397,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42435,
          name: 'Шедевр',
          slug: 'shedevr',
          language: 'rus',
          games_count: 1059,
          image_background:
            'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
        },
        {
          id: 42441,
          name: 'От третьего лица',
          slug: 'ot-tretego-litsa',
          language: 'rus',
          games_count: 10233,
          image_background:
            'https://media.rawg.io/media/games/00d/00d374f12a3ab5f96c500a2cfa901e15.jpg',
        },
        {
          id: 149,
          name: 'Third Person',
          slug: 'third-person',
          language: 'eng',
          games_count: 14710,
          image_background:
            'https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg',
        },
        {
          id: 40845,
          name: 'Partial Controller Support',
          slug: 'partial-controller-support',
          language: 'eng',
          games_count: 13990,
          image_background:
            'https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 14989,
          image_background:
            'https://media.rawg.io/media/games/1bd/1bd2657b81eb0c99338120ad444b24ff.jpg',
        },
        {
          id: 42427,
          name: 'Шутер от первого лица',
          slug: 'shuter-ot-pervogo-litsa',
          language: 'rus',
          games_count: 6971,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 9,
          name: 'Online Co-Op',
          slug: 'online-co-op',
          language: 'eng',
          games_count: 7682,
          image_background:
            'https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg',
        },
        {
          id: 42491,
          name: 'Мясо',
          slug: 'miaso',
          language: 'rus',
          games_count: 4962,
          image_background:
            'https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg',
        },
        {
          id: 26,
          name: 'Gore',
          slug: 'gore',
          language: 'eng',
          games_count: 6669,
          image_background:
            'https://media.rawg.io/media/games/152/152e788b7504aa2753c86dae912fb34c.jpg',
        },
        {
          id: 6,
          name: 'Exploration',
          slug: 'exploration',
          language: 'eng',
          games_count: 29245,
          image_background:
            'https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg',
        },
        {
          id: 37,
          name: 'Sandbox',
          slug: 'sandbox',
          language: 'eng',
          games_count: 8514,
          image_background:
            'https://media.rawg.io/media/games/b4e/b4e4c73d5aa4ec66bbf75375c4847a2b.jpg',
        },
        {
          id: 42444,
          name: 'Песочница',
          slug: 'pesochnitsa',
          language: 'rus',
          games_count: 5742,
          image_background:
            'https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg',
        },
        {
          id: 34,
          name: 'Violent',
          slug: 'violent',
          language: 'eng',
          games_count: 7852,
          image_background:
            'https://media.rawg.io/media/games/5a4/5a44112251d70a25291cc33757220fce.jpg',
        },
        {
          id: 42446,
          name: 'Шутер от третьего лица',
          slug: 'shuter-ot-tretego-litsa',
          language: 'rus',
          games_count: 2778,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 150,
          name: 'Third-Person Shooter',
          slug: 'third-person-shooter',
          language: 'eng',
          games_count: 4168,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 157,
          name: 'PvP',
          slug: 'pvp',
          language: 'eng',
          games_count: 12048,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 40837,
          name: 'In-App Purchases',
          slug: 'in-app-purchases',
          language: 'eng',
          games_count: 3419,
          image_background:
            'https://media.rawg.io/media/games/447/4470c1e76f01acfaf5af9c207d1c1c92.jpg',
        },
        {
          id: 42460,
          name: 'Реализм',
          slug: 'realizm',
          language: 'rus',
          games_count: 9134,
          image_background:
            'https://media.rawg.io/media/games/ccd/ccd40e8f86c0ae10a082b610d31d4475.jpg',
        },
        {
          id: 42529,
          name: 'Для взрослых',
          slug: 'dlia-vzroslykh',
          language: 'rus',
          games_count: 4584,
          image_background:
            'https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg',
        },
        {
          id: 77,
          name: 'Realistic',
          slug: 'realistic',
          language: 'eng',
          games_count: 9156,
          image_background:
            'https://media.rawg.io/media/screenshots/f34/f34c86335d0c51baa582aa93fa2d3f55.jpg',
        },
        {
          id: 192,
          name: 'Mature',
          slug: 'mature',
          language: 'eng',
          games_count: 4783,
          image_background:
            'https://media.rawg.io/media/games/4fb/4fb548e4816c84d1d70f1a228fb167cc.jpg',
        },
        {
          id: 110,
          name: 'Cinematic',
          slug: 'cinematic',
          language: 'eng',
          games_count: 3381,
          image_background:
            'https://media.rawg.io/media/games/471/4712c9ac591f556f553556b864a7e92b.jpg',
        },
        {
          id: 89,
          name: 'Historical',
          slug: 'historical',
          language: 'eng',
          games_count: 3988,
          image_background:
            'https://media.rawg.io/media/games/55e/55ee6432ac2bf224610fa17e4c652107.jpg',
        },
        {
          id: 144,
          name: 'Crime',
          slug: 'crime',
          language: 'eng',
          games_count: 3270,
          image_background:
            'https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg',
        },
        {
          id: 45878,
          name: 'Online PvP',
          slug: 'online-pvp',
          language: 'eng',
          games_count: 6411,
          image_background:
            'https://media.rawg.io/media/games/742/7424c1f7d0a8da9ae29cd866f985698b.jpg',
        },
        {
          id: 42690,
          name: 'Красивая',
          slug: 'krasivaia',
          language: 'rus',
          games_count: 593,
          image_background:
            'https://media.rawg.io/media/games/718/71891d2484a592d871e91dc826707e1c.jpg',
        },
        {
          id: 478,
          name: '3rd-Person Perspective',
          slug: '3rd-person-perspective',
          language: 'eng',
          games_count: 87,
          image_background:
            'https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg',
        },
        {
          id: 270,
          name: 'Blood',
          slug: 'blood',
          language: 'eng',
          games_count: 2157,
          image_background:
            'https://media.rawg.io/media/games/3ea/3ea3c9bbd940b6cb7f2139e42d3d443f.jpg',
        },
        {
          id: 78,
          name: 'America',
          slug: 'america',
          language: 'eng',
          games_count: 974,
          image_background:
            'https://media.rawg.io/media/games/a79/a79d2fc90c4dbf07a8580b19600fd61d.jpg',
        },
        {
          id: 578,
          name: 'Masterpiece',
          slug: 'masterpiece',
          language: 'eng',
          games_count: 302,
          image_background:
            'https://media.rawg.io/media/games/9f1/9f1891779cb20f44de93cef33b067e50.jpg',
        },
        {
          id: 577,
          name: 'Beautiful',
          slug: 'beautiful',
          language: 'eng',
          games_count: 1875,
          image_background:
            'https://media.rawg.io/media/games/c24/c24f4434882ae9c2c8d9d38de82cb7a5.jpg',
        },
        {
          id: 181,
          name: 'Hunting',
          slug: 'hunting',
          language: 'eng',
          games_count: 1091,
          image_background:
            'https://media.rawg.io/media/games/119/119bb59e64c7956171a33df0d35aee6b.jpg',
        },
        {
          id: 152,
          name: 'Western',
          slug: 'western',
          language: 'eng',
          games_count: 1430,
          image_background:
            'https://media.rawg.io/media/screenshots/ec9/ec901b13386ef03af757e0f165e04b3c.jpg',
        },
        {
          id: 42475,
          name: 'Вестерн',
          slug: 'vestern',
          language: 'rus',
          games_count: 485,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 5452,
          name: '3rd-person',
          slug: '3rd-person',
          language: 'eng',
          games_count: 93,
          image_background:
            'https://media.rawg.io/media/screenshots/fa7/fa74edcad003d71d5406a0b8976a5b88.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
        name_en: 'Mature',
        name_ru: 'С 17 лет',
      },
      user_game: null,
      reviews_count: 5619,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 778173,
          image:
            'https://media.rawg.io/media/screenshots/7b8/7b8895a23e8ca0dbd9e1ba24696579d9.jpg',
        },
        {
          id: 778174,
          image:
            'https://media.rawg.io/media/screenshots/b8c/b8cee381079d58b981594ede46a3d6ca.jpg',
        },
        {
          id: 778175,
          image:
            'https://media.rawg.io/media/screenshots/fd6/fd6e41d4c30c098158568aef32dfed35.jpg',
        },
        {
          id: 778176,
          image:
            'https://media.rawg.io/media/screenshots/2ed/2ed3b2791b3bbed6b98bf362694aeb73.jpg',
        },
        {
          id: 778177,
          image:
            'https://media.rawg.io/media/screenshots/857/8573b9f4f06a0c112d6e39cdf3544881.jpg',
        },
        {
          id: 778178,
          image:
            'https://media.rawg.io/media/screenshots/985/985e3e1f1d1af1ab0797d43a95d472cc.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
      ],
    },
    {
      slug: 'max-payne-3',
      name: 'Max Payne 3',
      playtime: 10,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 5,
            name: 'macOS',
            slug: 'macos',
          },
        },
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
          },
        },
        {
          platform: {
            id: 16,
            name: 'PlayStation 3',
            slug: 'playstation3',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 7,
            name: 'Xbox 360 Store',
            slug: 'xbox360',
          },
        },
      ],
      released: '2012-05-15',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/5bf/5bf88a28de96321c86561a65ee48e6c2.jpg',
      rating: 4.26,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 931,
          percent: 47.62,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 810,
          percent: 41.43,
        },
        {
          id: 3,
          title: 'meh',
          count: 173,
          percent: 8.85,
        },
        {
          id: 1,
          title: 'skip',
          count: 41,
          percent: 2.1,
        },
      ],
      ratings_count: 1937,
      reviews_text_count: 10,
      added: 8283,
      added_by_status: {
        yet: 317,
        owned: 5180,
        beaten: 2209,
        toplay: 240,
        dropped: 296,
        playing: 41,
      },
      metacritic: 87,
      suggestions_count: 630,
      updated: '2026-04-22T17:49:25',
      id: 4280,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 250829,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 70696,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 50552,
          image_background:
            'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
        },
        {
          id: 42392,
          name: 'Приключение',
          slug: 'prikliuchenie',
          language: 'rus',
          games_count: 49155,
          image_background:
            'https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 51709,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 42554,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 39707,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 42425,
          name: 'Для нескольких игроков',
          slug: 'dlia-neskolkikh-igrokov',
          language: 'rus',
          games_count: 12936,
          image_background:
            'https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg',
        },
        {
          id: 42400,
          name: 'Атмосфера',
          slug: 'atmosfera',
          language: 'rus',
          games_count: 6083,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 42401,
          name: 'Отличный саундтрек',
          slug: 'otlichnyi-saundtrek',
          language: 'rus',
          games_count: 4675,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3450,
          image_background:
            'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
        },
        {
          id: 42394,
          name: 'Глубокий сюжет',
          slug: 'glubokii-siuzhet',
          language: 'rus',
          games_count: 18116,
          image_background:
            'https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg',
        },
        {
          id: 18,
          name: 'Co-op',
          slug: 'co-op',
          language: 'eng',
          games_count: 14391,
          image_background:
            'https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 27259,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 36,
          name: 'Open World',
          slug: 'open-world',
          language: 'eng',
          games_count: 9265,
          image_background:
            'https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg',
        },
        {
          id: 42428,
          name: 'Шутер',
          slug: 'shuter',
          language: 'rus',
          games_count: 11966,
          image_background:
            'https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg',
        },
        {
          id: 42435,
          name: 'Шедевр',
          slug: 'shedevr',
          language: 'rus',
          games_count: 1059,
          image_background:
            'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
        },
        {
          id: 42441,
          name: 'От третьего лица',
          slug: 'ot-tretego-litsa',
          language: 'rus',
          games_count: 10233,
          image_background:
            'https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg',
        },
        {
          id: 149,
          name: 'Third Person',
          slug: 'third-person',
          language: 'eng',
          games_count: 14710,
          image_background:
            'https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg',
        },
        {
          id: 40845,
          name: 'Partial Controller Support',
          slug: 'partial-controller-support',
          language: 'eng',
          games_count: 13990,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 30,
          name: 'FPS',
          slug: 'fps',
          language: 'eng',
          games_count: 14989,
          image_background:
            'https://media.rawg.io/media/games/1bd/1bd2657b81eb0c99338120ad444b24ff.jpg',
        },
        {
          id: 42402,
          name: 'Насилие',
          slug: 'nasilie',
          language: 'rus',
          games_count: 6814,
          image_background:
            'https://media.rawg.io/media/games/152/152e788b7504aa2753c86dae912fb34c.jpg',
        },
        {
          id: 34,
          name: 'Violent',
          slug: 'violent',
          language: 'eng',
          games_count: 7852,
          image_background:
            'https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg',
        },
        {
          id: 42446,
          name: 'Шутер от третьего лица',
          slug: 'shuter-ot-tretego-litsa',
          language: 'rus',
          games_count: 2778,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 42477,
          name: 'Мрачная',
          slug: 'mrachnaia',
          language: 'rus',
          games_count: 8161,
          image_background:
            'https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg',
        },
        {
          id: 150,
          name: 'Third-Person Shooter',
          slug: 'third-person-shooter',
          language: 'eng',
          games_count: 4168,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 41,
          name: 'Dark',
          slug: 'dark',
          language: 'eng',
          games_count: 18707,
          image_background:
            'https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg',
        },
        {
          id: 42406,
          name: 'Нагота',
          slug: 'nagota',
          language: 'rus',
          games_count: 8449,
          image_background:
            'https://media.rawg.io/media/games/bee/bee483efadcf9d7e657e52184316a34e.jpg',
        },
        {
          id: 44,
          name: 'Nudity',
          slug: 'nudity',
          language: 'eng',
          games_count: 8847,
          image_background:
            'https://media.rawg.io/media/games/473/473bd9a5e9522629d6cb28b701fb836a.jpg',
        },
        {
          id: 110,
          name: 'Cinematic',
          slug: 'cinematic',
          language: 'eng',
          games_count: 3381,
          image_background:
            'https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg',
        },
        {
          id: 42623,
          name: 'Кинематографичная',
          slug: 'kinematografichnaia',
          language: 'rus',
          games_count: 3289,
          image_background:
            'https://media.rawg.io/media/games/0af/0af85e8edddfa55368e47c539914a220.jpg',
        },
        {
          id: 305,
          name: 'Linear',
          slug: 'linear',
          language: 'eng',
          games_count: 9742,
          image_background:
            'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
        },
        {
          id: 133,
          name: '3D Vision',
          slug: '3d-vision',
          language: 'eng',
          games_count: 1154,
          image_background:
            'https://media.rawg.io/media/screenshots/f2f/f2f3c93d6153da7aee590f3ab8ccd803.jpg',
        },
        {
          id: 42437,
          name: 'Линейная',
          slug: 'lineinaia',
          language: 'rus',
          games_count: 9685,
          image_background:
            'https://media.rawg.io/media/games/943/9432de383089b0a427a3cdf3687b2b73.jpg',
        },
        {
          id: 42650,
          name: 'Драма',
          slug: 'drama-2',
          language: 'rus',
          games_count: 5366,
          image_background:
            'https://media.rawg.io/media/games/8f5/8f51cd193717f03ec820b5caece4f963.jpg',
        },
        {
          id: 42622,
          name: 'Нуар',
          slug: 'nuar',
          language: 'rus',
          games_count: 1077,
          image_background:
            'https://media.rawg.io/media/games/639/63907c46573df93d2d2f65e9fff4f284.jpg',
        },
        {
          id: 289,
          name: 'Noir',
          slug: 'noir',
          language: 'eng',
          games_count: 1672,
          image_background:
            'https://media.rawg.io/media/games/2f5/2f5eb72fe45540e93ac2726877551a20.jpg',
        },
        {
          id: 42510,
          name: 'Замедление времени',
          slug: 'zamedlenie-vremeni',
          language: 'rus',
          games_count: 897,
          image_background:
            'https://media.rawg.io/media/screenshots/ad4/ad445a12ee46543d4d117f3893041ebf.jpg',
        },
        {
          id: 308,
          name: 'Bullet Time',
          slug: 'bullet-time',
          language: 'eng',
          games_count: 877,
          image_background:
            'https://media.rawg.io/media/screenshots/ad4/ad445a12ee46543d4d117f3893041ebf.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
        name_en: 'Mature',
        name_ru: 'С 17 лет',
      },
      user_game: null,
      reviews_count: 1955,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/5bf/5bf88a28de96321c86561a65ee48e6c2.jpg',
        },
        {
          id: 125813,
          image:
            'https://media.rawg.io/media/screenshots/05b/05b7b6970c42861b24c97a829135f685.jpg',
        },
        {
          id: 125814,
          image:
            'https://media.rawg.io/media/screenshots/770/7706c93f23fef77b8e500eb7ee06eee9.jpg',
        },
        {
          id: 125815,
          image:
            'https://media.rawg.io/media/screenshots/898/89879b7064e612c95bf976d6abc2fa0c.jpg',
        },
        {
          id: 125816,
          image:
            'https://media.rawg.io/media/screenshots/24f/24f3c80cfad97fe119a317dd7f1b3ffb.jpg',
        },
        {
          id: 125817,
          image:
            'https://media.rawg.io/media/screenshots/961/96136b0c8c45e4a9df2d2482fb862a8e.jpg',
        },
        {
          id: 125818,
          image:
            'https://media.rawg.io/media/screenshots/53a/53a90ec4b5ea59a217fd4cc075b877ad.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 5,
            name: 'Apple Macintosh',
            slug: 'mac',
          },
        },
      ],
      genres: [
        {
          id: 2,
          name: 'Shooter',
          slug: 'shooter',
        },
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
      ],
    },
    {
      slug: 'red-dead-redemption',
      name: 'Red Dead Redemption',
      playtime: 6,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 187,
            name: 'PlayStation 5',
            slug: 'playstation5',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 186,
            name: 'Xbox Series S/X',
            slug: 'xbox-series-x',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
          },
        },
        {
          platform: {
            id: 16,
            name: 'PlayStation 3',
            slug: 'playstation3',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
          },
        },
        {
          store: {
            id: 7,
            name: 'Xbox 360 Store',
            slug: 'xbox360',
          },
        },
      ],
      released: '2010-05-18',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/686/686909717c3aa01518bc42ae2bf4259e.jpg',
      rating: 4.42,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 1321,
          percent: 59.26,
        },
        {
          id: 4,
          title: 'recommended',
          count: 672,
          percent: 30.15,
        },
        {
          id: 3,
          title: 'meh',
          count: 158,
          percent: 7.09,
        },
        {
          id: 1,
          title: 'skip',
          count: 78,
          percent: 3.5,
        },
      ],
      ratings_count: 2208,
      reviews_text_count: 14,
      added: 7448,
      added_by_status: {
        yet: 381,
        owned: 4233,
        beaten: 1811,
        toplay: 492,
        dropped: 425,
        playing: 106,
      },
      metacritic: 95,
      suggestions_count: 476,
      updated: '2026-04-22T17:50:36',
      id: 4544,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 250833,
          image_background:
            'https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 70700,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 50554,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 42392,
          name: 'Приключение',
          slug: 'prikliuchenie',
          language: 'rus',
          games_count: 49157,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 51712,
          image_background:
            'https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 42555,
          image_background:
            'https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 24145,
          image_background:
            'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 39708,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 42401,
          name: 'Отличный саундтрек',
          slug: 'otlichnyi-saundtrek',
          language: 'rus',
          games_count: 4675,
          image_background:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3450,
          image_background:
            'https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg',
        },
        {
          id: 42394,
          name: 'Глубокий сюжет',
          slug: 'glubokii-siuzhet',
          language: 'rus',
          games_count: 18117,
          image_background:
            'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 27260,
          image_background:
            'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
        },
        {
          id: 42442,
          name: 'Открытый мир',
          slug: 'otkrytyi-mir',
          language: 'rus',
          games_count: 7452,
          image_background:
            'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        },
        {
          id: 36,
          name: 'Open World',
          slug: 'open-world',
          language: 'eng',
          games_count: 9266,
          image_background:
            'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
        },
        {
          id: 42428,
          name: 'Шутер',
          slug: 'shuter',
          language: 'rus',
          games_count: 11967,
          image_background:
            'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
        },
        {
          id: 42441,
          name: 'От третьего лица',
          slug: 'ot-tretego-litsa',
          language: 'rus',
          games_count: 10233,
          image_background:
            'https://media.rawg.io/media/games/00d/00d374f12a3ab5f96c500a2cfa901e15.jpg',
        },
        {
          id: 149,
          name: 'Third Person',
          slug: 'third-person',
          language: 'eng',
          games_count: 14710,
          image_background:
            'https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg',
        },
        {
          id: 42491,
          name: 'Мясо',
          slug: 'miaso',
          language: 'rus',
          games_count: 4962,
          image_background:
            'https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg',
        },
        {
          id: 42461,
          name: 'Классика',
          slug: 'klassika',
          language: 'rus',
          games_count: 1502,
          image_background:
            'https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg',
        },
        {
          id: 26,
          name: 'Gore',
          slug: 'gore',
          language: 'eng',
          games_count: 6669,
          image_background:
            'https://media.rawg.io/media/games/152/152e788b7504aa2753c86dae912fb34c.jpg',
        },
        {
          id: 193,
          name: 'Classic',
          slug: 'classic',
          language: 'eng',
          games_count: 1839,
          image_background:
            'https://media.rawg.io/media/games/9c4/9c47f320eb73c9a02d462e12f6206b26.jpg',
        },
        {
          id: 69,
          name: 'Action-Adventure',
          slug: 'action-adventure',
          language: 'eng',
          games_count: 21027,
          image_background:
            'https://media.rawg.io/media/games/c50/c5085506fe4b5e20fc7aa5ace842c20b.jpg',
        },
        {
          id: 42446,
          name: 'Шутер от третьего лица',
          slug: 'shuter-ot-tretego-litsa',
          language: 'rus',
          games_count: 2778,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 150,
          name: 'Third-Person Shooter',
          slug: 'third-person-shooter',
          language: 'eng',
          games_count: 4168,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 42406,
          name: 'Нагота',
          slug: 'nagota',
          language: 'rus',
          games_count: 8449,
          image_background:
            'https://media.rawg.io/media/games/bee/bee483efadcf9d7e657e52184316a34e.jpg',
        },
        {
          id: 63,
          name: 'Zombies',
          slug: 'zombies',
          language: 'eng',
          games_count: 11212,
          image_background:
            'https://media.rawg.io/media/games/686/686909717c3aa01518bc42ae2bf4259e.jpg',
        },
        {
          id: 44,
          name: 'Nudity',
          slug: 'nudity',
          language: 'eng',
          games_count: 8847,
          image_background:
            'https://media.rawg.io/media/games/473/473bd9a5e9522629d6cb28b701fb836a.jpg',
        },
        {
          id: 42544,
          name: 'Зомби',
          slug: 'zombi-2',
          language: 'rus',
          games_count: 3563,
          image_background:
            'https://media.rawg.io/media/games/009/009e4e84975d6a60173ec1199db25aa3.jpg',
        },
        {
          id: 42490,
          name: 'Приключенческий экшен',
          slug: 'prikliuchencheskii-ekshen',
          language: 'rus',
          games_count: 13412,
          image_background:
            'https://media.rawg.io/media/games/d09/d096ad37b7f522e11c02848252213a9a.jpg',
        },
        {
          id: 571,
          name: '3D',
          slug: '3d',
          language: 'eng',
          games_count: 93800,
          image_background:
            'https://media.rawg.io/media/games/b74/b74b15a48ac7bc37fbb42ee4afcc0b91.jpg',
        },
        {
          id: 42405,
          name: 'Сексуальный контент',
          slug: 'seksualnyi-kontent',
          language: 'rus',
          games_count: 8715,
          image_background:
            'https://media.rawg.io/media/games/11f/11fd681c312c14644ab360888dba3486.jpg',
        },
        {
          id: 1465,
          name: 'combat',
          slug: 'combat',
          language: 'eng',
          games_count: 16394,
          image_background:
            'https://media.rawg.io/media/games/260/26023c855f1769a93411d6a7ea084632.jpeg',
        },
        {
          id: 50,
          name: 'Sexual Content',
          slug: 'sexual-content',
          language: 'eng',
          games_count: 8755,
          image_background:
            'https://media.rawg.io/media/games/67f/67f62d1f062a6164f57575e0604ee9f6.jpg',
        },
        {
          id: 58132,
          name: 'Атмосферная',
          slug: 'atmosfernaia',
          language: 'rus',
          games_count: 15410,
          image_background:
            'https://media.rawg.io/media/games/c4e/c4e3ad247e93d3a5dc40aa215a778a9c.jpg',
        },
        {
          id: 270,
          name: 'Blood',
          slug: 'blood',
          language: 'eng',
          games_count: 2157,
          image_background:
            'https://media.rawg.io/media/games/3ea/3ea3c9bbd940b6cb7f2139e42d3d443f.jpg',
        },
        {
          id: 200,
          name: 'Narration',
          slug: 'narration',
          language: 'eng',
          games_count: 3039,
          image_background:
            'https://media.rawg.io/media/games/068/0686934f91304843c9ad37ec55c3ac1d.jpg',
        },
        {
          id: 42577,
          name: 'Кровь',
          slug: 'krov',
          language: 'rus',
          games_count: 537,
          image_background:
            'https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg',
        },
        {
          id: 91686,
          name: 'Family Sharing',
          slug: 'family-sharing',
          language: 'eng',
          games_count: 28920,
          image_background:
            'https://media.rawg.io/media/screenshots/eb7/eb70b94188815efea35b95222561e37e.jpg',
        },
        {
          id: 152,
          name: 'Western',
          slug: 'western',
          language: 'eng',
          games_count: 1430,
          image_background:
            'https://media.rawg.io/media/screenshots/ec9/ec901b13386ef03af757e0f165e04b3c.jpg',
        },
        {
          id: 42475,
          name: 'Вестерн',
          slug: 'vestern',
          language: 'rus',
          games_count: 485,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 59333,
          name: 'Повествовательная',
          slug: 'povestvovatelnaia',
          language: 'rus',
          games_count: 2585,
          image_background:
            'https://media.rawg.io/media/games/6fc/6fcd3a3192df9abeb281f6e936fc1b80.jpg',
        },
        {
          id: 3117,
          name: 'shoot',
          slug: 'shoot',
          language: 'eng',
          games_count: 9955,
          image_background:
            'https://media.rawg.io/media/games/da9/da93ffb65843f39b240ffd97c07a3acb.jpg',
        },
        {
          id: 91537,
          name: 'HDR available',
          slug: 'hdr-available',
          language: 'eng',
          games_count: 198,
          image_background:
            'https://media.rawg.io/media/games/fbd/fbdef5455da4c4033bed896e1540f6a1.jpg',
        },
        {
          id: 3388,
          name: 'waves',
          slug: 'waves',
          language: 'eng',
          games_count: 1820,
          image_background:
            'https://media.rawg.io/media/screenshots/781/781c9e4d587accc729c9b2516e4bff36.jpg',
        },
        {
          id: 1427,
          name: 'nightmare',
          slug: 'nightmare',
          language: 'eng',
          games_count: 551,
          image_background:
            'https://media.rawg.io/media/games/eba/eba3ebb72a958ae9c167ce04e58104ff.jpg',
        },
        {
          id: 3992,
          name: 'clone',
          slug: 'clone',
          language: 'eng',
          games_count: 1008,
          image_background:
            'https://media.rawg.io/media/screenshots/990/9906c5c53cc94be308a69f0b585711d6.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
        name_en: 'Mature',
        name_ru: 'С 17 лет',
      },
      user_game: null,
      reviews_count: 2229,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/686/686909717c3aa01518bc42ae2bf4259e.jpg',
        },
        {
          id: 518885,
          image:
            'https://media.rawg.io/media/screenshots/cf4/cf4ff03cc16bf7ccff78c1fb38bcafc2.jpg',
        },
        {
          id: 518886,
          image:
            'https://media.rawg.io/media/screenshots/304/304ad0c33748eff98812f057592741b6.jpg',
        },
        {
          id: 518887,
          image:
            'https://media.rawg.io/media/screenshots/ef7/ef743c271d18cf643a47543bf73fcf78.jpg',
        },
        {
          id: 518888,
          image:
            'https://media.rawg.io/media/screenshots/8f7/8f76b9883f00955461bb4f57cbf64914.jpg',
        },
        {
          id: 518889,
          image:
            'https://media.rawg.io/media/screenshots/7aa/7aafdcf2cf8a9863673b767f368a3291.jpg',
        },
        {
          id: 518890,
          image:
            'https://media.rawg.io/media/screenshots/495/495b5bc877060900fcad68d5c6fb19b2.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 2,
          name: 'Shooter',
          slug: 'shooter',
        },
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
      ],
    },
    {
      slug: 'manhunt',
      name: 'Manhunt',
      playtime: 1,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 80,
            name: 'Xbox',
            slug: 'xbox-old',
          },
        },
        {
          platform: {
            id: 16,
            name: 'PlayStation 3',
            slug: 'playstation3',
          },
        },
        {
          platform: {
            id: 15,
            name: 'PlayStation 2',
            slug: 'playstation2',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
      ],
      released: '2003-11-19',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/c23/c23b578d6a9dd1c73ee403157184e793.jpg',
      rating: 3.92,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 190,
          percent: 53.67,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 88,
          percent: 24.86,
        },
        {
          id: 3,
          title: 'meh',
          count: 55,
          percent: 15.54,
        },
        {
          id: 1,
          title: 'skip',
          count: 21,
          percent: 5.93,
        },
      ],
      ratings_count: 352,
      reviews_text_count: 2,
      added: 2067,
      added_by_status: {
        yet: 125,
        owned: 1386,
        beaten: 291,
        toplay: 83,
        dropped: 164,
        playing: 18,
      },
      metacritic: 75,
      suggestions_count: 586,
      updated: '2026-04-18T11:22:28',
      id: 2647,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 250833,
          image_background:
            'https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 70700,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 50554,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 39708,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 42400,
          name: 'Атмосфера',
          slug: 'atmosfera',
          language: 'rus',
          games_count: 6083,
          image_background:
            'https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg',
        },
        {
          id: 42401,
          name: 'Отличный саундтрек',
          slug: 'otlichnyi-saundtrek',
          language: 'rus',
          games_count: 4675,
          image_background:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3450,
          image_background:
            'https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg',
        },
        {
          id: 42435,
          name: 'Шедевр',
          slug: 'shedevr',
          language: 'rus',
          games_count: 1059,
          image_background:
            'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
        },
        {
          id: 42441,
          name: 'От третьего лица',
          slug: 'ot-tretego-litsa',
          language: 'rus',
          games_count: 10233,
          image_background:
            'https://media.rawg.io/media/games/00d/00d374f12a3ab5f96c500a2cfa901e15.jpg',
        },
        {
          id: 149,
          name: 'Third Person',
          slug: 'third-person',
          language: 'eng',
          games_count: 14710,
          image_background:
            'https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg',
        },
        {
          id: 16,
          name: 'Horror',
          slug: 'horror',
          language: 'eng',
          games_count: 49170,
          image_background:
            'https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg',
        },
        {
          id: 42420,
          name: 'Сложная',
          slug: 'slozhnaia',
          language: 'rus',
          games_count: 6336,
          image_background:
            'https://media.rawg.io/media/games/238/2383a172b4d50a7b44e07980eb7141ea.jpg',
        },
        {
          id: 42491,
          name: 'Мясо',
          slug: 'miaso',
          language: 'rus',
          games_count: 4962,
          image_background:
            'https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg',
        },
        {
          id: 42461,
          name: 'Классика',
          slug: 'klassika',
          language: 'rus',
          games_count: 1502,
          image_background:
            'https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg',
        },
        {
          id: 26,
          name: 'Gore',
          slug: 'gore',
          language: 'eng',
          games_count: 6669,
          image_background:
            'https://media.rawg.io/media/games/152/152e788b7504aa2753c86dae912fb34c.jpg',
        },
        {
          id: 193,
          name: 'Classic',
          slug: 'classic',
          language: 'eng',
          games_count: 1839,
          image_background:
            'https://media.rawg.io/media/games/9c4/9c47f320eb73c9a02d462e12f6206b26.jpg',
        },
        {
          id: 42452,
          name: 'Выживание',
          slug: 'vyzhivanie',
          language: 'rus',
          games_count: 8283,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 1,
          name: 'Survival',
          slug: 'survival',
          language: 'eng',
          games_count: 10838,
          image_background:
            'https://media.rawg.io/media/games/dd5/dd50d4266915d56dd5b63ae1bf72606a.jpg',
        },
        {
          id: 42402,
          name: 'Насилие',
          slug: 'nasilie',
          language: 'rus',
          games_count: 6814,
          image_background:
            'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
        },
        {
          id: 34,
          name: 'Violent',
          slug: 'violent',
          language: 'eng',
          games_count: 7852,
          image_background:
            'https://media.rawg.io/media/games/5a4/5a44112251d70a25291cc33757220fce.jpg',
        },
        {
          id: 15,
          name: 'Stealth',
          slug: 'stealth',
          language: 'eng',
          games_count: 7161,
          image_background:
            'https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg',
        },
        {
          id: 42439,
          name: 'Стелс',
          slug: 'stels',
          language: 'rus',
          games_count: 3014,
          image_background:
            'https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg',
        },
        {
          id: 42477,
          name: 'Мрачная',
          slug: 'mrachnaia',
          language: 'rus',
          games_count: 8162,
          image_background:
            'https://media.rawg.io/media/games/744/744adc36e6573dd67a0cb0e373738d19.jpg',
        },
        {
          id: 41,
          name: 'Dark',
          slug: 'dark',
          language: 'eng',
          games_count: 18708,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 42406,
          name: 'Нагота',
          slug: 'nagota',
          language: 'rus',
          games_count: 8449,
          image_background:
            'https://media.rawg.io/media/games/bee/bee483efadcf9d7e657e52184316a34e.jpg',
        },
        {
          id: 42471,
          name: 'Хоррор на выживание',
          slug: 'khorror-na-vyzhivanie',
          language: 'rus',
          games_count: 4609,
          image_background:
            'https://media.rawg.io/media/games/7a4/7a45e4cdc5b07f316d49cf147b083b27.jpg',
        },
        {
          id: 17,
          name: 'Survival Horror',
          slug: 'survival-horror',
          language: 'eng',
          games_count: 9973,
          image_background:
            'https://media.rawg.io/media/games/d9f/d9f982e042df6263684ba1fdea3efc1c.jpg',
        },
        {
          id: 107,
          name: 'Family Friendly',
          slug: 'family-friendly',
          language: 'eng',
          games_count: 10693,
          image_background:
            'https://media.rawg.io/media/games/78d/78dfae12fb8c5b16cd78648553071e0a.jpg',
        },
        {
          id: 42529,
          name: 'Для взрослых',
          slug: 'dlia-vzroslykh',
          language: 'rus',
          games_count: 4584,
          image_background:
            'https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg',
        },
        {
          id: 192,
          name: 'Mature',
          slug: 'mature',
          language: 'eng',
          games_count: 4783,
          image_background:
            'https://media.rawg.io/media/games/4fb/4fb548e4816c84d1d70f1a228fb167cc.jpg',
        },
        {
          id: 42577,
          name: 'Кровь',
          slug: 'krov',
          language: 'rus',
          games_count: 537,
          image_background:
            'https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg',
        },
        {
          id: 62348,
          name: 'first person mod',
          slug: 'first-person-mod',
          language: 'eng',
          games_count: 14,
          image_background:
            'https://media.rawg.io/media/games/6fd/6fd971ffa72faa1758960d25ef6196bc.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
        name_en: 'Mature',
        name_ru: 'С 17 лет',
      },
      user_game: null,
      reviews_count: 354,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/c23/c23b578d6a9dd1c73ee403157184e793.jpg',
        },
        {
          id: 24179,
          image:
            'https://media.rawg.io/media/screenshots/56d/56d4464eca2b1db2a08366b5fa116bf7.jpg',
        },
        {
          id: 24182,
          image:
            'https://media.rawg.io/media/screenshots/ddd/dddb1dfafade72570cda5539932d5c2e.jpg',
        },
        {
          id: 24185,
          image:
            'https://media.rawg.io/media/screenshots/afb/afb163cd1ee78a15f730219bd0c73111.jpg',
        },
        {
          id: 24186,
          image:
            'https://media.rawg.io/media/screenshots/db1/db1690862e36bc4499d4b13fb5d05910.jpg',
        },
        {
          id: 24189,
          image:
            'https://media.rawg.io/media/screenshots/72e/72ec632934523f8a1496fb0bc19911d5.jpg',
        },
        {
          id: 24192,
          image:
            'https://media.rawg.io/media/screenshots/8ac/8ac260f0fef1195e63f363baa5103283.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
      ],
    },
    {
      slug: 'grand-theft-auto-san-andreas-the-definitive-editio',
      name: 'Grand Theft Auto: San Andreas – The Definitive Edition',
      playtime: 3,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 187,
            name: 'PlayStation 5',
            slug: 'playstation5',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 186,
            name: 'Xbox Series S/X',
            slug: 'xbox-series-x',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
        {
          platform: {
            id: 19,
            name: 'PS Vita',
            slug: 'ps-vita',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
      ],
      released: '2021-11-11',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/ae3/ae3ba4e4d73ab8ec9dd6bfd8ab9d4efb.jpg',
      rating: 3.11,
      rating_top: 3,
      ratings: [
        {
          id: 3,
          title: 'meh',
          count: 57,
          percent: 35.19,
        },
        {
          id: 4,
          title: 'recommended',
          count: 40,
          percent: 24.69,
        },
        {
          id: 1,
          title: 'skip',
          count: 38,
          percent: 23.46,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 27,
          percent: 16.67,
        },
      ],
      ratings_count: 159,
      reviews_text_count: 3,
      added: 1184,
      added_by_status: {
        yet: 38,
        owned: 926,
        beaten: 105,
        toplay: 25,
        dropped: 78,
        playing: 12,
      },
      metacritic: null,
      suggestions_count: 115,
      updated: '2026-03-15T12:02:52',
      id: 709004,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 250829,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 70696,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 50552,
          image_background:
            'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
        },
        {
          id: 42392,
          name: 'Приключение',
          slug: 'prikliuchenie',
          language: 'rus',
          games_count: 49155,
          image_background:
            'https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 24144,
          image_background:
            'https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg',
        },
        {
          id: 42442,
          name: 'Открытый мир',
          slug: 'otkrytyi-mir',
          language: 'rus',
          games_count: 7451,
          image_background:
            'https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg',
        },
        {
          id: 36,
          name: 'Open World',
          slug: 'open-world',
          language: 'eng',
          games_count: 9265,
          image_background:
            'https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg',
        },
        {
          id: 42441,
          name: 'От третьего лица',
          slug: 'ot-tretego-litsa',
          language: 'rus',
          games_count: 10233,
          image_background:
            'https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg',
        },
        {
          id: 149,
          name: 'Third Person',
          slug: 'third-person',
          language: 'eng',
          games_count: 14710,
          image_background:
            'https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg',
        },
        {
          id: 42402,
          name: 'Насилие',
          slug: 'nasilie',
          language: 'rus',
          games_count: 6814,
          image_background:
            'https://media.rawg.io/media/games/152/152e788b7504aa2753c86dae912fb34c.jpg',
        },
        {
          id: 34,
          name: 'Violent',
          slug: 'violent',
          language: 'eng',
          games_count: 7852,
          image_background:
            'https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg',
        },
        {
          id: 69,
          name: 'Action-Adventure',
          slug: 'action-adventure',
          language: 'eng',
          games_count: 21026,
          image_background:
            'https://media.rawg.io/media/games/c50/c5085506fe4b5e20fc7aa5ace842c20b.jpg',
        },
        {
          id: 42446,
          name: 'Шутер от третьего лица',
          slug: 'shuter-ot-tretego-litsa',
          language: 'rus',
          games_count: 2778,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 150,
          name: 'Third-Person Shooter',
          slug: 'third-person-shooter',
          language: 'eng',
          games_count: 4168,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 42490,
          name: 'Приключенческий экшен',
          slug: 'prikliuchencheskii-ekshen',
          language: 'rus',
          games_count: 13411,
          image_background:
            'https://media.rawg.io/media/games/3be/3be0e624424d3453005019799a760af2.jpg',
        },
        {
          id: 1465,
          name: 'combat',
          slug: 'combat',
          language: 'eng',
          games_count: 16393,
          image_background:
            'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
        },
        {
          id: 144,
          name: 'Crime',
          slug: 'crime',
          language: 'eng',
          games_count: 3269,
          image_background:
            'https://media.rawg.io/media/games/6cc/6cc68fa183b905ac9d85efb9797776f6.jpg',
        },
        {
          id: 42484,
          name: '90-е',
          slug: '90-e',
          language: 'rus',
          games_count: 4123,
          image_background:
            'https://media.rawg.io/media/screenshots/b04/b042f8a7d3d9f8fe61d5af5d47ab6088.jpg',
        },
        {
          id: 42443,
          name: 'Криминал',
          slug: 'kriminal',
          language: 'rus',
          games_count: 1386,
          image_background:
            'https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg',
        },
        {
          id: 243,
          name: "1990's",
          slug: '1990s',
          language: 'eng',
          games_count: 4028,
          image_background:
            'https://media.rawg.io/media/games/2f2/2f2eb93e32d400677b0b27f4686f7b4f.jpg',
        },
        {
          id: 58127,
          name: 'Бой',
          slug: 'boi-2',
          language: 'rus',
          games_count: 11205,
          image_background:
            'https://media.rawg.io/media/games/fa2/fa28280bb6f7bec50b94bc821d412795.jpg',
        },
      ],
      esrb_rating: null,
      user_game: null,
      reviews_count: 162,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/ae3/ae3ba4e4d73ab8ec9dd6bfd8ab9d4efb.jpg',
        },
        {
          id: 3151476,
          image:
            'https://media.rawg.io/media/screenshots/247/2474dc7676b9a20581ae66b38b3f036a.jpg',
        },
        {
          id: 3151477,
          image:
            'https://media.rawg.io/media/screenshots/e6d/e6d4bb9ce262382565425b8679626c70.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
        },
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
      ],
    },
    {
      slug: 'red-dead-online',
      name: 'Red Dead Online',
      playtime: 7,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 187,
            name: 'PlayStation 5',
            slug: 'playstation5',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 186,
            name: 'Xbox Series S/X',
            slug: 'xbox-series-x',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
          },
        },
        {
          store: {
            id: 11,
            name: 'Epic Games',
            slug: 'epic-games',
          },
        },
      ],
      released: '2018-10-26',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/769/769b7f0f609f44bac86f2c791fee21dd.jpg',
      rating: 3.58,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 40,
          percent: 35.4,
        },
        {
          id: 3,
          title: 'meh',
          count: 38,
          percent: 33.63,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 24,
          percent: 21.24,
        },
        {
          id: 1,
          title: 'skip',
          count: 11,
          percent: 9.73,
        },
      ],
      ratings_count: 108,
      reviews_text_count: 4,
      added: 695,
      added_by_status: {
        yet: 19,
        owned: 528,
        beaten: 43,
        toplay: 12,
        dropped: 74,
        playing: 19,
      },
      metacritic: null,
      suggestions_count: 336,
      updated: '2025-12-16T13:41:53',
      id: 404481,
      score: null,
      clip: null,
      tags: [
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 50552,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 42392,
          name: 'Приключение',
          slug: 'prikliuchenie',
          language: 'rus',
          games_count: 49155,
          image_background:
            'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 42553,
          image_background:
            'https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg',
        },
        {
          id: 42425,
          name: 'Для нескольких игроков',
          slug: 'dlia-neskolkikh-igrokov',
          language: 'rus',
          games_count: 12936,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        {
          id: 18,
          name: 'Co-op',
          slug: 'co-op',
          language: 'eng',
          games_count: 14391,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 42442,
          name: 'Открытый мир',
          slug: 'otkrytyi-mir',
          language: 'rus',
          games_count: 7451,
          image_background:
            'https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg',
        },
        {
          id: 36,
          name: 'Open World',
          slug: 'open-world',
          language: 'eng',
          games_count: 9265,
          image_background:
            'https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg',
        },
        {
          id: 42428,
          name: 'Шутер',
          slug: 'shuter',
          language: 'rus',
          games_count: 11966,
          image_background:
            'https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg',
        },
        {
          id: 40845,
          name: 'Partial Controller Support',
          slug: 'partial-controller-support',
          language: 'eng',
          games_count: 13990,
          image_background:
            'https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg',
        },
        {
          id: 9,
          name: 'Online Co-Op',
          slug: 'online-co-op',
          language: 'eng',
          games_count: 7681,
          image_background:
            'https://media.rawg.io/media/games/d2c/d2c74dacd89fd817c2deb625b01adb1a.jpg',
        },
        {
          id: 42433,
          name: 'Совместная игра по сети',
          slug: 'sovmestnaia-igra-po-seti',
          language: 'rus',
          games_count: 1226,
          image_background:
            'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
        },
        {
          id: 42446,
          name: 'Шутер от третьего лица',
          slug: 'shuter-ot-tretego-litsa',
          language: 'rus',
          games_count: 2778,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 150,
          name: 'Third-Person Shooter',
          slug: 'third-person-shooter',
          language: 'eng',
          games_count: 4168,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 157,
          name: 'PvP',
          slug: 'pvp',
          language: 'eng',
          games_count: 12047,
          image_background:
            'https://media.rawg.io/media/games/e4a/e4ab7f784bdc38c76ce6e4cef9715d18.jpg',
        },
        {
          id: 42434,
          name: 'Игрок против игрока',
          slug: 'igrok-protiv-igroka',
          language: 'rus',
          games_count: 7217,
          image_background:
            'https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg',
        },
        {
          id: 42460,
          name: 'Реализм',
          slug: 'realizm',
          language: 'rus',
          games_count: 9132,
          image_background:
            'https://media.rawg.io/media/games/e31/e315213a5cb21645df8db3e5191e530c.jpg',
        },
        {
          id: 77,
          name: 'Realistic',
          slug: 'realistic',
          language: 'eng',
          games_count: 9154,
          image_background:
            'https://media.rawg.io/media/games/d07/d0790809a13027251b6d0f4dc7538c58.jpg',
        },
        {
          id: 45878,
          name: 'Online PvP',
          slug: 'online-pvp',
          language: 'eng',
          games_count: 6411,
          image_background:
            'https://media.rawg.io/media/games/742/7424c1f7d0a8da9ae29cd866f985698b.jpg',
        },
        {
          id: 152,
          name: 'Western',
          slug: 'western',
          language: 'eng',
          games_count: 1430,
          image_background:
            'https://media.rawg.io/media/screenshots/ec9/ec901b13386ef03af757e0f165e04b3c.jpg',
        },
        {
          id: 42475,
          name: 'Вестерн',
          slug: 'vestern',
          language: 'rus',
          games_count: 485,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 42644,
          name: 'Лошади',
          slug: 'loshadi',
          language: 'rus',
          games_count: 261,
          image_background:
            'https://media.rawg.io/media/games/ccd/ccd40e8f86c0ae10a082b610d31d4475.jpg',
        },
        {
          id: 128,
          name: 'Horses',
          slug: 'horses',
          language: 'eng',
          games_count: 287,
          image_background:
            'https://media.rawg.io/media/games/d8f/d8f3b28fc747ed6f92943cdd33fb91b5.jpeg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
        name_en: 'Mature',
        name_ru: 'С 17 лет',
      },
      user_game: null,
      reviews_count: 113,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/769/769b7f0f609f44bac86f2c791fee21dd.jpg',
        },
        {
          id: 2618997,
          image:
            'https://media.rawg.io/media/screenshots/070/07056c44fb59607fce59c6c821708757.jpg',
        },
        {
          id: 2618998,
          image:
            'https://media.rawg.io/media/screenshots/139/139cd1337cc136bb6c1112419f6f84cf.jpg',
        },
        {
          id: 2618999,
          image:
            'https://media.rawg.io/media/screenshots/351/3516e9bd54fc17d21fa4cf1414a53221.jpg',
        },
        {
          id: 2619000,
          image:
            'https://media.rawg.io/media/screenshots/65d/65d0e517246f1a8d26ac8a9068e378b7.jpg',
        },
        {
          id: 2619001,
          image:
            'https://media.rawg.io/media/screenshots/45f/45f54612e0d161d2f87696771a515e3a.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
      ],
      genres: [
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
        },
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
      ],
    },
    {
      slug: 'grand-theft-aito-vi',
      name: 'Grand Theft Auto VI',
      playtime: 0,
      platforms: [
        {
          platform: {
            id: 187,
            name: 'PlayStation 5',
            slug: 'playstation5',
          },
        },
        {
          platform: {
            id: 186,
            name: 'Xbox Series S/X',
            slug: 'xbox-series-x',
          },
        },
      ],
      stores: null,
      released: '2026-11-19',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/734/7342a1cd82c8997ec620084ae4c2e7e4.jpg',
      rating: 3.69,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 24,
          percent: 41.38,
        },
        {
          id: 4,
          title: 'recommended',
          count: 16,
          percent: 27.59,
        },
        {
          id: 1,
          title: 'skip',
          count: 12,
          percent: 20.69,
        },
        {
          id: 3,
          title: 'meh',
          count: 6,
          percent: 10.34,
        },
      ],
      ratings_count: 54,
      reviews_text_count: 2,
      added: 688,
      added_by_status: {
        yet: 92,
        owned: 157,
        beaten: 10,
        toplay: 410,
        dropped: 1,
        playing: 18,
      },
      metacritic: null,
      suggestions_count: 501,
      updated: '2026-04-21T08:16:26',
      id: 972995,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 250833,
          image_background:
            'https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 24145,
          image_background:
            'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 39708,
          image_background:
            'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3450,
          image_background:
            'https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg',
        },
        {
          id: 36,
          name: 'Open World',
          slug: 'open-world',
          language: 'eng',
          games_count: 9266,
          image_background:
            'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
        },
        {
          id: 4,
          name: 'Funny',
          slug: 'funny',
          language: 'eng',
          games_count: 28842,
          image_background:
            'https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg',
        },
        {
          id: 37,
          name: 'Sandbox',
          slug: 'sandbox',
          language: 'eng',
          games_count: 8514,
          image_background:
            'https://media.rawg.io/media/games/b4e/b4e4c73d5aa4ec66bbf75375c4847a2b.jpg',
        },
        {
          id: 189,
          name: 'Female Protagonist',
          slug: 'female-protagonist',
          language: 'eng',
          games_count: 15547,
          image_background:
            'https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg',
        },
        {
          id: 123,
          name: 'Comedy',
          slug: 'comedy',
          language: 'eng',
          games_count: 14866,
          image_background:
            'https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg',
        },
        {
          id: 34,
          name: 'Violent',
          slug: 'violent',
          language: 'eng',
          games_count: 7852,
          image_background:
            'https://media.rawg.io/media/games/5a4/5a44112251d70a25291cc33757220fce.jpg',
        },
        {
          id: 150,
          name: 'Third-Person Shooter',
          slug: 'third-person-shooter',
          language: 'eng',
          games_count: 4168,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 44,
          name: 'Nudity',
          slug: 'nudity',
          language: 'eng',
          games_count: 8847,
          image_background:
            'https://media.rawg.io/media/games/473/473bd9a5e9522629d6cb28b701fb836a.jpg',
        },
        {
          id: 144,
          name: 'Crime',
          slug: 'crime',
          language: 'eng',
          games_count: 3270,
          image_background:
            'https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg',
        },
        {
          id: 478,
          name: '3rd-Person Perspective',
          slug: '3rd-person-perspective',
          language: 'eng',
          games_count: 87,
          image_background:
            'https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg',
        },
        {
          id: 151,
          name: 'Modern',
          slug: 'modern',
          language: 'eng',
          games_count: 2292,
          image_background:
            'https://media.rawg.io/media/games/a1e/a1efdea31e35beddae46d37aee4d64c7.jpg',
        },
        {
          id: 782,
          name: 'humor',
          slug: 'humor',
          language: 'eng',
          games_count: 727,
          image_background:
            'https://media.rawg.io/media/screenshots/759/75927ff47e676b0e35a6a8916c7336d3.jpg',
        },
        {
          id: 4541,
          name: 'criminal',
          slug: 'criminal',
          language: 'eng',
          games_count: 17,
          image_background:
            'https://media.rawg.io/media/screenshots/75f/75f4ba3ea983ad1f4747877286715d84.jpg',
        },
        {
          id: 10381,
          name: 'miami',
          slug: 'miami',
          language: 'eng',
          games_count: 21,
          image_background:
            'https://media.rawg.io/media/screenshots/33a/33a561d835a01e7b6f3052cb5df52992.jpg',
        },
      ],
      esrb_rating: {
        id: 6,
        name: 'Rating Pending',
        slug: 'rating-pending',
        name_en: 'Rating Pending',
        name_ru: 'Рейтинг обсуждается',
      },
      user_game: null,
      reviews_count: 58,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/734/7342a1cd82c8997ec620084ae4c2e7e4.jpg',
        },
        {
          id: 3978446,
          image:
            'https://media.rawg.io/media/screenshots/598/5983ffe274a237b33e0f0452364fba78.jpg',
        },
        {
          id: 3978447,
          image:
            'https://media.rawg.io/media/screenshots/384/384241113cb4510774289415d7d6dba1.jpg',
        },
        {
          id: 3978448,
          image:
            'https://media.rawg.io/media/screenshots/4c4/4c47d5e898bda3ce131a8e73db6fe505.jpg',
        },
        {
          id: 3978449,
          image:
            'https://media.rawg.io/media/screenshots/db2/db2c206e7896ddc846c60f5d315ecfc3.jpg',
        },
        {
          id: 3978450,
          image:
            'https://media.rawg.io/media/screenshots/05d/05db79dc3d0b0cc9af3f10135ad78025.jpg',
        },
        {
          id: 3978451,
          image:
            'https://media.rawg.io/media/screenshots/d11/d119bf3a0e7473ac0fe86648c4841859.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
      ],
    },
    {
      slug: 'gta-chinatown-wars',
      name: 'Grand Theft Auto: Chinatown Wars',
      playtime: 0,
      platforms: [
        {
          platform: {
            id: 3,
            name: 'iOS',
            slug: 'ios',
          },
        },
        {
          platform: {
            id: 21,
            name: 'Android',
            slug: 'android',
          },
        },
        {
          platform: {
            id: 9,
            name: 'Nintendo DS',
            slug: 'nintendo-ds',
          },
        },
        {
          platform: {
            id: 19,
            name: 'PS Vita',
            slug: 'ps-vita',
          },
        },
        {
          platform: {
            id: 17,
            name: 'PSP',
            slug: 'psp',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 4,
            name: 'App Store',
            slug: 'apple-appstore',
          },
        },
        {
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
          },
        },
        {
          store: {
            id: 8,
            name: 'Google Play',
            slug: 'google-play',
          },
        },
      ],
      released: '2009-03-17',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/bcd/bcdadb5dd2be66dd4dd1f657275b3f8e.jpg',
      rating: 3.89,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 122,
          percent: 60.7,
        },
        {
          id: 3,
          title: 'meh',
          count: 43,
          percent: 21.39,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 32,
          percent: 15.92,
        },
        {
          id: 1,
          title: 'skip',
          count: 4,
          percent: 1.99,
        },
      ],
      ratings_count: 197,
      reviews_text_count: 2,
      added: 505,
      added_by_status: {
        yet: 38,
        owned: 75,
        beaten: 184,
        toplay: 66,
        dropped: 131,
        playing: 11,
      },
      metacritic: 90,
      suggestions_count: 329,
      updated: '2026-03-22T12:51:42',
      id: 5200,
      score: null,
      clip: null,
      tags: [
        {
          id: 70,
          name: 'War',
          slug: 'war',
          language: 'eng',
          games_count: 10101,
          image_background:
            'https://media.rawg.io/media/games/410/41033a495ce8f7fd4b0934bdb975f12a.jpg',
        },
        {
          id: 2030,
          name: 'city',
          slug: 'city',
          language: 'eng',
          games_count: 9288,
          image_background:
            'https://media.rawg.io/media/games/1c6/1c61ef4ce04bce876841118580b03ccb.jpg',
        },
        {
          id: 878,
          name: 'sword',
          slug: 'sword',
          language: 'eng',
          games_count: 1430,
          image_background:
            'https://media.rawg.io/media/screenshots/c80/c80f6c86de421615f4e84a07e5dde573.jpg',
        },
        {
          id: 920,
          name: 'murder',
          slug: 'murder',
          language: 'eng',
          games_count: 753,
          image_background:
            'https://media.rawg.io/media/games/284/284c7a96d5b79b0c8a45d8cd2faad608.jpg',
        },
        {
          id: 1333,
          name: 'android',
          slug: 'android',
          language: 'eng',
          games_count: 3363,
          image_background:
            'https://media.rawg.io/media/screenshots/5a7/5a72aed79451d8fbd6a7b82f784002bd.jpg',
        },
        {
          id: 730,
          name: 'youtube',
          slug: 'youtube',
          language: 'eng',
          games_count: 4215,
          image_background:
            'https://media.rawg.io/media/screenshots/d7b/d7b7a8d13aa7fc8cfb0dabc5d597bc15_6qWuh2W.jpg',
        },
        {
          id: 8604,
          name: 'kid',
          slug: 'kid',
          language: 'eng',
          games_count: 1208,
          image_background:
            'https://media.rawg.io/media/games/6f5/6f5a86874e87f6f8d63caad6e4a3b49f.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
        name_en: 'Mature',
        name_ru: 'С 17 лет',
      },
      user_game: null,
      reviews_count: 201,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/bcd/bcdadb5dd2be66dd4dd1f657275b3f8e.jpg',
        },
        {
          id: 909265,
          image:
            'https://media.rawg.io/media/screenshots/77c/77c0664088470b00304b9dc67ce525d6.jpg',
        },
        {
          id: 909267,
          image:
            'https://media.rawg.io/media/screenshots/adf/adf68db0fecf836fa4c1f96b97d3cf61.jpg',
        },
        {
          id: 909268,
          image:
            'https://media.rawg.io/media/screenshots/6bc/6bc27f99786a814ea80cbe237ead47dc.jpg',
        },
        {
          id: 909270,
          image:
            'https://media.rawg.io/media/screenshots/bf2/bf2ce8fe48211a5ccf7890d35fab3e52.jpg',
        },
        {
          id: 909272,
          image:
            'https://media.rawg.io/media/screenshots/3ea/3eac403fd26dc306300542e81fb6fdb9.jpg',
        },
        {
          id: 251218,
          image:
            'https://media.rawg.io/media/screenshots/fa8/fa8fa3fc6c45c26447f0d0228be04070.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 4,
            name: 'iOS',
            slug: 'ios',
          },
        },
        {
          platform: {
            id: 8,
            name: 'Android',
            slug: 'android',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
        },
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
      ],
    },
    {
      slug: 'grand-theft-auto-vice-city-the-definitive-edition',
      name: 'Grand Theft Auto: Vice City – The Definitive Edition',
      playtime: 4,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 187,
            name: 'PlayStation 5',
            slug: 'playstation5',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 186,
            name: 'Xbox Series S/X',
            slug: 'xbox-series-x',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
          },
        },
        {
          store: {
            id: 4,
            name: 'App Store',
            slug: 'apple-appstore',
          },
        },
      ],
      released: '2021-11-11',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/a0d/a0d4405596639b3fe4de603f4489755e.jpg',
      rating: 3.74,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 36,
          percent: 37.89,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 26,
          percent: 27.37,
        },
        {
          id: 3,
          title: 'meh',
          count: 24,
          percent: 25.26,
        },
        {
          id: 1,
          title: 'skip',
          count: 9,
          percent: 9.47,
        },
      ],
      ratings_count: 93,
      reviews_text_count: 1,
      added: 468,
      added_by_status: {
        yet: 27,
        owned: 283,
        beaten: 91,
        toplay: 18,
        dropped: 38,
        playing: 11,
      },
      metacritic: null,
      suggestions_count: 113,
      updated: '2026-03-09T11:19:44',
      id: 708999,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 250826,
          image_background:
            'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 70694,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 50552,
          image_background:
            'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
        },
        {
          id: 42392,
          name: 'Приключение',
          slug: 'prikliuchenie',
          language: 'rus',
          games_count: 49155,
          image_background:
            'https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 24144,
          image_background:
            'https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg',
        },
        {
          id: 42442,
          name: 'Открытый мир',
          slug: 'otkrytyi-mir',
          language: 'rus',
          games_count: 7451,
          image_background:
            'https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg',
        },
        {
          id: 36,
          name: 'Open World',
          slug: 'open-world',
          language: 'eng',
          games_count: 9265,
          image_background:
            'https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg',
        },
        {
          id: 42441,
          name: 'От третьего лица',
          slug: 'ot-tretego-litsa',
          language: 'rus',
          games_count: 10233,
          image_background:
            'https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg',
        },
        {
          id: 149,
          name: 'Third Person',
          slug: 'third-person',
          language: 'eng',
          games_count: 14710,
          image_background:
            'https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg',
        },
        {
          id: 42402,
          name: 'Насилие',
          slug: 'nasilie',
          language: 'rus',
          games_count: 6814,
          image_background:
            'https://media.rawg.io/media/games/152/152e788b7504aa2753c86dae912fb34c.jpg',
        },
        {
          id: 34,
          name: 'Violent',
          slug: 'violent',
          language: 'eng',
          games_count: 7852,
          image_background:
            'https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg',
        },
        {
          id: 69,
          name: 'Action-Adventure',
          slug: 'action-adventure',
          language: 'eng',
          games_count: 21026,
          image_background:
            'https://media.rawg.io/media/games/c50/c5085506fe4b5e20fc7aa5ace842c20b.jpg',
        },
        {
          id: 42446,
          name: 'Шутер от третьего лица',
          slug: 'shuter-ot-tretego-litsa',
          language: 'rus',
          games_count: 2778,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 150,
          name: 'Third-Person Shooter',
          slug: 'third-person-shooter',
          language: 'eng',
          games_count: 4168,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 42490,
          name: 'Приключенческий экшен',
          slug: 'prikliuchencheskii-ekshen',
          language: 'rus',
          games_count: 13411,
          image_background:
            'https://media.rawg.io/media/games/3be/3be0e624424d3453005019799a760af2.jpg',
        },
        {
          id: 1465,
          name: 'combat',
          slug: 'combat',
          language: 'eng',
          games_count: 16393,
          image_background:
            'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
        },
        {
          id: 144,
          name: 'Crime',
          slug: 'crime',
          language: 'eng',
          games_count: 3269,
          image_background:
            'https://media.rawg.io/media/games/6cc/6cc68fa183b905ac9d85efb9797776f6.jpg',
        },
        {
          id: 42443,
          name: 'Криминал',
          slug: 'kriminal',
          language: 'rus',
          games_count: 1386,
          image_background:
            'https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg',
        },
        {
          id: 58127,
          name: 'Бой',
          slug: 'boi-2',
          language: 'rus',
          games_count: 11205,
          image_background:
            'https://media.rawg.io/media/games/fa2/fa28280bb6f7bec50b94bc821d412795.jpg',
        },
        {
          id: 224,
          name: '1980s',
          slug: '1980s',
          language: 'eng',
          games_count: 3428,
          image_background:
            'https://media.rawg.io/media/games/c64/c64d2f63cabeab9126693b7d39539c8d.jpg',
        },
      ],
      esrb_rating: null,
      user_game: null,
      reviews_count: 95,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/a0d/a0d4405596639b3fe4de603f4489755e.jpg',
        },
        {
          id: 3151478,
          image:
            'https://media.rawg.io/media/screenshots/4c9/4c9db97c0bd299b13a9480cde2c57ad3.jpg',
        },
        {
          id: 3151479,
          image:
            'https://media.rawg.io/media/screenshots/69f/69f35dcb30489c578d40c3e0f2d5cae1.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 1,
          name: 'Racing',
          slug: 'racing',
        },
        {
          id: 2,
          name: 'Shooter',
          slug: 'shooter',
        },
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
        },
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
      ],
    },
    {
      slug: 'manhunt-2',
      name: 'Manhunt 2',
      playtime: 0,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 15,
            name: 'PlayStation 2',
            slug: 'playstation2',
          },
        },
        {
          platform: {
            id: 17,
            name: 'PSP',
            slug: 'psp',
          },
        },
        {
          platform: {
            id: 11,
            name: 'Wii',
            slug: 'wii',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
          },
        },
      ],
      released: '2007-10-29',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/2a8/2a8e6acdf8cde8915920f568bd6f86b0.jpg',
      rating: 3.6,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 66,
          percent: 49.25,
        },
        {
          id: 3,
          title: 'meh',
          count: 47,
          percent: 35.07,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 14,
          percent: 10.45,
        },
        {
          id: 1,
          title: 'skip',
          count: 7,
          percent: 5.22,
        },
      ],
      ratings_count: 133,
      reviews_text_count: 1,
      added: 355,
      added_by_status: {
        yet: 38,
        owned: 55,
        beaten: 137,
        toplay: 60,
        dropped: 62,
        playing: 3,
      },
      metacritic: 67,
      suggestions_count: 513,
      updated: '2026-04-01T01:35:22',
      id: 5205,
      score: null,
      clip: null,
      tags: [
        {
          id: 41,
          name: 'Dark',
          slug: 'dark',
          language: 'eng',
          games_count: 18707,
          image_background:
            'https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg',
        },
        {
          id: 413,
          name: 'online',
          slug: 'online',
          language: 'eng',
          games_count: 6552,
          image_background:
            'https://media.rawg.io/media/games/6b1/6b14dc4cc1785e396580c69165e55d2d.jpg',
        },
        {
          id: 2184,
          name: 'hunt',
          slug: 'hunt',
          language: 'eng',
          games_count: 2356,
          image_background:
            'https://media.rawg.io/media/games/163/163004f22c5bd859a962b9187c967284.jpg',
        },
      ],
      esrb_rating: {
        id: 5,
        name: 'Adults Only',
        slug: 'adults-only',
        name_en: 'Adults Only',
        name_ru: 'Только для взрослых',
      },
      user_game: null,
      reviews_count: 134,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/2a8/2a8e6acdf8cde8915920f568bd6f86b0.jpg',
        },
        {
          id: 529596,
          image:
            'https://media.rawg.io/media/screenshots/724/7246ebfe2ab293499f0115580637b316.jpg',
        },
        {
          id: 529597,
          image:
            'https://media.rawg.io/media/screenshots/d71/d713b8c4d748d2259147dde133345fe7.jpg',
        },
        {
          id: 529598,
          image:
            'https://media.rawg.io/media/screenshots/738/738d819ec0939acf91ce4fb3182d9796.jpg',
        },
        {
          id: 529599,
          image:
            'https://media.rawg.io/media/screenshots/26d/26d4794c8007dab43f61a9a052ca687f.jpg',
        },
        {
          id: 529600,
          image:
            'https://media.rawg.io/media/screenshots/eee/eeedd78aecd74c1857c450daed31f7a5.jpg',
        },
        {
          id: 529601,
          image:
            'https://media.rawg.io/media/screenshots/042/042f415eae57176944821a089e27e7ce.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
        },
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
      ],
    },
    {
      slug: 'red-dead-redemption-undead-nightmare',
      name: 'Red Dead Redemption: Undead Nightmare',
      playtime: 0,
      platforms: [
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
          },
        },
        {
          platform: {
            id: 16,
            name: 'PlayStation 3',
            slug: 'playstation3',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
          },
        },
      ],
      released: '2010-11-22',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/632/63248c06f2dbf7362ed7add26603d40f.jpg',
      rating: 3.99,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 84,
          percent: 59.15,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 32,
          percent: 22.54,
        },
        {
          id: 3,
          title: 'meh',
          count: 22,
          percent: 15.49,
        },
        {
          id: 1,
          title: 'skip',
          count: 4,
          percent: 2.82,
        },
      ],
      ratings_count: 141,
      reviews_text_count: 1,
      added: 353,
      added_by_status: {
        yet: 44,
        owned: 51,
        beaten: 172,
        toplay: 33,
        dropped: 45,
        playing: 8,
      },
      metacritic: 87,
      suggestions_count: 628,
      updated: '2026-04-19T20:37:42',
      id: 4546,
      score: null,
      clip: null,
      tags: [
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 42554,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 63,
          name: 'Zombies',
          slug: 'zombies',
          language: 'eng',
          games_count: 11212,
          image_background:
            'https://media.rawg.io/media/games/686/686909717c3aa01518bc42ae2bf4259e.jpg',
        },
        {
          id: 413,
          name: 'online',
          slug: 'online',
          language: 'eng',
          games_count: 6552,
          image_background:
            'https://media.rawg.io/media/games/6b1/6b14dc4cc1785e396580c69165e55d2d.jpg',
        },
        {
          id: 744,
          name: 'friends',
          slug: 'friends',
          language: 'eng',
          games_count: 15189,
          image_background:
            'https://media.rawg.io/media/games/315/3156817d3ac1f341da73de6495fb28f5.jpg',
        },
        {
          id: 1484,
          name: 'skill',
          slug: 'skill',
          language: 'eng',
          games_count: 3534,
          image_background:
            'https://media.rawg.io/media/games/ccd/ccd36642cee0cbb95681a6e3b7715381.jpg',
        },
        {
          id: 5777,
          name: 'pack',
          slug: 'pack',
          language: 'eng',
          games_count: 2720,
          image_background:
            'https://media.rawg.io/media/games/02d/02d70f4bacfa1f03fbd1c5896a963084.jpg',
        },
        {
          id: 712,
          name: 'school',
          slug: 'school',
          language: 'eng',
          games_count: 4586,
          image_background:
            'https://media.rawg.io/media/screenshots/b87/b876d9664840d7e2f53cf5c649476935.jpg',
        },
        {
          id: 1427,
          name: 'nightmare',
          slug: 'nightmare',
          language: 'eng',
          games_count: 551,
          image_background:
            'https://media.rawg.io/media/games/eba/eba3ebb72a958ae9c167ce04e58104ff.jpg',
        },
        {
          id: 1605,
          name: 'horse',
          slug: 'horse',
          language: 'eng',
          games_count: 888,
          image_background:
            'https://media.rawg.io/media/screenshots/8ac/8ac6377d5d3158087e7a4643c603b196.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
        name_en: 'Mature',
        name_ru: 'С 17 лет',
      },
      user_game: null,
      reviews_count: 142,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/632/63248c06f2dbf7362ed7add26603d40f.jpg',
        },
        {
          id: 567847,
          image:
            'https://media.rawg.io/media/screenshots/7df/7dfe255e9e6666350afd05ceb61ebf95.jpg',
        },
        {
          id: 567848,
          image:
            'https://media.rawg.io/media/screenshots/f5b/f5bbfb1e247d5f26922b25cdbd952855.jpg',
        },
        {
          id: 567849,
          image:
            'https://media.rawg.io/media/screenshots/730/730da6b35fc29286da2488e448e6bd68.jpg',
        },
        {
          id: 567850,
          image:
            'https://media.rawg.io/media/screenshots/ad1/ad1a1d2bf57b304e5eabfb3b42f48fb4.jpg',
        },
        {
          id: 567851,
          image:
            'https://media.rawg.io/media/screenshots/62e/62e8494b930af3e924125d6fb87318e1.jpg',
        },
        {
          id: 567852,
          image:
            'https://media.rawg.io/media/screenshots/ad6/ad6a847bc1a3edf028119533e6ad0608.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
      ],
      genres: [
        {
          id: 2,
          name: 'Shooter',
          slug: 'shooter',
        },
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
        },
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
      ],
    },
    {
      slug: 'red-dead-revolver',
      name: 'Red Dead Revolver',
      playtime: 0,
      platforms: [
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 80,
            name: 'Xbox',
            slug: 'xbox-old',
          },
        },
        {
          platform: {
            id: 15,
            name: 'PlayStation 2',
            slug: 'playstation2',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
        {
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
          },
        },
      ],
      released: '2004-05-04',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/f7e/f7e2d60d8e813593c831a07d28bba5c3.jpg',
      rating: 3.57,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 39,
          percent: 49.37,
        },
        {
          id: 3,
          title: 'meh',
          count: 21,
          percent: 26.58,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 11,
          percent: 13.92,
        },
        {
          id: 1,
          title: 'skip',
          count: 8,
          percent: 10.13,
        },
      ],
      ratings_count: 77,
      reviews_text_count: 2,
      added: 281,
      added_by_status: {
        yet: 27,
        owned: 115,
        beaten: 60,
        toplay: 39,
        dropped: 31,
        playing: 9,
      },
      metacritic: 73,
      suggestions_count: 563,
      updated: '2025-12-23T12:10:28',
      id: 1115,
      score: null,
      clip: null,
      tags: [
        {
          id: 117,
          name: 'Mystery',
          slug: 'mystery',
          language: 'eng',
          games_count: 16465,
          image_background:
            'https://media.rawg.io/media/games/baf/baf9905270314e07e6850cffdb51df41.jpg',
        },
        {
          id: 413,
          name: 'online',
          slug: 'online',
          language: 'eng',
          games_count: 6552,
          image_background:
            'https://media.rawg.io/media/games/6b1/6b14dc4cc1785e396580c69165e55d2d.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
        name_en: 'Mature',
        name_ru: 'С 17 лет',
      },
      user_game: null,
      reviews_count: 79,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/f7e/f7e2d60d8e813593c831a07d28bba5c3.jpg',
        },
        {
          id: 9782,
          image:
            'https://media.rawg.io/media/screenshots/0d2/0d2146749278f144beaf9a470e412169.jpg',
        },
        {
          id: 9783,
          image:
            'https://media.rawg.io/media/screenshots/265/2651d13b869b667d78cde3af2c72e286.jpg',
        },
        {
          id: 9785,
          image:
            'https://media.rawg.io/media/screenshots/a19/a19bf48b0c5273221520ed0f0e9e8ac0.jpg',
        },
        {
          id: 9788,
          image:
            'https://media.rawg.io/media/screenshots/ba7/ba750d662b9b0b830573ba27c75882db.jpg',
        },
        {
          id: 9790,
          image:
            'https://media.rawg.io/media/screenshots/f1b/f1b47dd1ecf76cca07eaa1748642f944.jpg',
        },
        {
          id: 9792,
          image:
            'https://media.rawg.io/media/screenshots/9fe/9fe79b9e64ce1c167559a6968716cab4.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
      ],
    },
    {
      slug: 'grand-theft-auto-iii-the-definitive-edition',
      name: 'Grand Theft Auto III: The Definitive Edition',
      playtime: 0,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 187,
            name: 'PlayStation 5',
            slug: 'playstation5',
          },
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 186,
            name: 'Xbox Series S/X',
            slug: 'xbox-series-x',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
      ],
      released: '2021-11-11',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/9db/9db7575938031b505ed7cdc2067168ce.jpg',
      rating: 3.39,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 33,
          percent: 41.77,
        },
        {
          id: 3,
          title: 'meh',
          count: 23,
          percent: 29.11,
        },
        {
          id: 1,
          title: 'skip',
          count: 12,
          percent: 15.19,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 11,
          percent: 13.92,
        },
      ],
      ratings_count: 77,
      reviews_text_count: 1,
      added: 236,
      added_by_status: {
        yet: 23,
        owned: 83,
        beaten: 86,
        toplay: 14,
        dropped: 19,
        playing: 11,
      },
      metacritic: null,
      suggestions_count: 306,
      updated: '2026-03-09T11:19:37',
      id: 708998,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 250826,
          image_background:
            'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 70694,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 50552,
          image_background:
            'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
        },
        {
          id: 42392,
          name: 'Приключение',
          slug: 'prikliuchenie',
          language: 'rus',
          games_count: 49155,
          image_background:
            'https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 24144,
          image_background:
            'https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg',
        },
        {
          id: 42442,
          name: 'Открытый мир',
          slug: 'otkrytyi-mir',
          language: 'rus',
          games_count: 7451,
          image_background:
            'https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg',
        },
        {
          id: 36,
          name: 'Open World',
          slug: 'open-world',
          language: 'eng',
          games_count: 9265,
          image_background:
            'https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg',
        },
        {
          id: 42441,
          name: 'От третьего лица',
          slug: 'ot-tretego-litsa',
          language: 'rus',
          games_count: 10233,
          image_background:
            'https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg',
        },
        {
          id: 149,
          name: 'Third Person',
          slug: 'third-person',
          language: 'eng',
          games_count: 14710,
          image_background:
            'https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg',
        },
        {
          id: 42402,
          name: 'Насилие',
          slug: 'nasilie',
          language: 'rus',
          games_count: 6814,
          image_background:
            'https://media.rawg.io/media/games/152/152e788b7504aa2753c86dae912fb34c.jpg',
        },
        {
          id: 34,
          name: 'Violent',
          slug: 'violent',
          language: 'eng',
          games_count: 7852,
          image_background:
            'https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg',
        },
        {
          id: 69,
          name: 'Action-Adventure',
          slug: 'action-adventure',
          language: 'eng',
          games_count: 21026,
          image_background:
            'https://media.rawg.io/media/games/c50/c5085506fe4b5e20fc7aa5ace842c20b.jpg',
        },
        {
          id: 42446,
          name: 'Шутер от третьего лица',
          slug: 'shuter-ot-tretego-litsa',
          language: 'rus',
          games_count: 2778,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 150,
          name: 'Third-Person Shooter',
          slug: 'third-person-shooter',
          language: 'eng',
          games_count: 4168,
          image_background:
            'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
        },
        {
          id: 42490,
          name: 'Приключенческий экшен',
          slug: 'prikliuchencheskii-ekshen',
          language: 'rus',
          games_count: 13411,
          image_background:
            'https://media.rawg.io/media/games/3be/3be0e624424d3453005019799a760af2.jpg',
        },
        {
          id: 1465,
          name: 'combat',
          slug: 'combat',
          language: 'eng',
          games_count: 16393,
          image_background:
            'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
        },
        {
          id: 144,
          name: 'Crime',
          slug: 'crime',
          language: 'eng',
          games_count: 3269,
          image_background:
            'https://media.rawg.io/media/games/6cc/6cc68fa183b905ac9d85efb9797776f6.jpg',
        },
        {
          id: 42443,
          name: 'Криминал',
          slug: 'kriminal',
          language: 'rus',
          games_count: 1386,
          image_background:
            'https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg',
        },
        {
          id: 58127,
          name: 'Бой',
          slug: 'boi-2',
          language: 'rus',
          games_count: 11205,
          image_background:
            'https://media.rawg.io/media/games/fa2/fa28280bb6f7bec50b94bc821d412795.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
        name_en: 'Mature',
        name_ru: 'С 17 лет',
      },
      user_game: null,
      reviews_count: 79,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/9db/9db7575938031b505ed7cdc2067168ce.jpg',
        },
        {
          id: 3738574,
          image:
            'https://media.rawg.io/media/screenshots/917/91753f1409b6734fec6e869a8b121169.jpg',
        },
        {
          id: 3738575,
          image:
            'https://media.rawg.io/media/screenshots/b4f/b4ff6f3f5703003be45853cfe27285f9.jpg',
        },
        {
          id: 3738576,
          image:
            'https://media.rawg.io/media/screenshots/81d/81deebab26c764dad55d259588e9a72a.jpg',
        },
        {
          id: 3738577,
          image:
            'https://media.rawg.io/media/screenshots/308/30808b46ffb29ce1e9c0e726411d46a1.jpg',
        },
        {
          id: 3738578,
          image:
            'https://media.rawg.io/media/screenshots/490/4909d87c0bb30a8d3de6124d5f50f1da.jpg',
        },
        {
          id: 3151480,
          image:
            'https://media.rawg.io/media/screenshots/6a8/6a888e11992575a4185616813445b829.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 2,
          name: 'Shooter',
          slug: 'shooter',
        },
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
        },
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
      ],
    },
    {
      slug: 'la-noire-the-vr-case-files',
      name: 'L.A. Noire: The VR Case Files',
      playtime: 2,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
          },
        },
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
      ],
      released: '2017-12-15',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/5f0/5f0496427e951c894435134ff1a2d4cb.jpg',
      rating: 3.42,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 6,
          percent: 31.58,
        },
        {
          id: 3,
          title: 'meh',
          count: 6,
          percent: 31.58,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 4,
          percent: 21.05,
        },
        {
          id: 1,
          title: 'skip',
          count: 3,
          percent: 15.79,
        },
      ],
      ratings_count: 19,
      reviews_text_count: 0,
      added: 151,
      added_by_status: {
        yet: 11,
        owned: 111,
        beaten: 4,
        toplay: 12,
        dropped: 8,
        playing: 5,
      },
      metacritic: 82,
      suggestions_count: 468,
      updated: '2024-03-09T22:03:11',
      id: 50503,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 250721,
          image_background:
            'https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg',
        },
        {
          id: 42396,
          name: 'Для одного игрока',
          slug: 'dlia-odnogo-igroka',
          language: 'rus',
          games_count: 70620,
          image_background:
            'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
        },
        {
          id: 42417,
          name: 'Экшен',
          slug: 'ekshen',
          language: 'rus',
          games_count: 50511,
          image_background:
            'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
        },
        {
          id: 42392,
          name: 'Приключение',
          slug: 'prikliuchenie',
          language: 'rus',
          games_count: 49124,
          image_background:
            'https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg',
        },
        {
          id: 42442,
          name: 'Открытый мир',
          slug: 'otkrytyi-mir',
          language: 'rus',
          games_count: 7440,
          image_background:
            'https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg',
        },
        {
          id: 42402,
          name: 'Насилие',
          slug: 'nasilie',
          language: 'rus',
          games_count: 6810,
          image_background:
            'https://media.rawg.io/media/games/0af/0af85e8edddfa55368e47c539914a220.jpg',
        },
        {
          id: 34,
          name: 'Violent',
          slug: 'violent',
          language: 'eng',
          games_count: 7848,
          image_background:
            'https://media.rawg.io/media/games/858/858c016de0cf7bc21a57dcc698a04a0c.jpg',
        },
        {
          id: 33,
          name: 'VR',
          slug: 'vr',
          language: 'eng',
          games_count: 12963,
          image_background:
            'https://media.rawg.io/media/screenshots/77b/77bd0acea49153dc6c5a89d91eb568bc.jpg',
        },
        {
          id: 42526,
          name: 'Детектив',
          slug: 'detektiv',
          language: 'rus',
          games_count: 2631,
          image_background:
            'https://media.rawg.io/media/games/0b3/0b34647c42271600399b93d19b10f1aa.jpg',
        },
        {
          id: 42622,
          name: 'Нуар',
          slug: 'nuar',
          language: 'rus',
          games_count: 1076,
          image_background:
            'https://media.rawg.io/media/games/be0/be084b850302abe81675bc4ffc08a0d0.jpg',
        },
        {
          id: 42694,
          name: 'Расследование',
          slug: 'rassledovanie',
          language: 'rus',
          games_count: 461,
          image_background:
            'https://media.rawg.io/media/screenshots/3d3/3d37e29bbf87a5f140e27e6000e5cdbe.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
        name_en: 'Mature',
        name_ru: 'С 17 лет',
      },
      user_game: null,
      reviews_count: 19,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/5f0/5f0496427e951c894435134ff1a2d4cb.jpg',
        },
        {
          id: 707110,
          image:
            'https://media.rawg.io/media/screenshots/aa6/aa6adf62c2dd142dfbaa8e28b5839474.jpg',
        },
        {
          id: 707111,
          image:
            'https://media.rawg.io/media/screenshots/e92/e9265a8bffc3b2046f90baa7924143e8.jpg',
        },
        {
          id: 707112,
          image:
            'https://media.rawg.io/media/screenshots/7ba/7ba48aeff19a0869272184dd067b297d.jpg',
        },
        {
          id: 707113,
          image:
            'https://media.rawg.io/media/screenshots/cfb/cfb47c5ff4a69c75ac66e0393c4b0f0c.jpg',
        },
        {
          id: 707114,
          image:
            'https://media.rawg.io/media/screenshots/9e2/9e2404653851d9276a26e074834709c0.jpg',
        },
        {
          id: 707115,
          image:
            'https://media.rawg.io/media/screenshots/d39/d39ef152d933b1a31effa588db0f633e.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
      ],
      genres: [
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
        },
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
      ],
    },
    {
      slug: 'bully-anniversary-edition',
      name: 'Bully: Anniversary Edition',
      playtime: 0,
      platforms: [
        {
          platform: {
            id: 3,
            name: 'iOS',
            slug: 'ios',
          },
        },
        {
          platform: {
            id: 21,
            name: 'Android',
            slug: 'android',
          },
        },
        {
          platform: {
            id: 19,
            name: 'PS Vita',
            slug: 'ps-vita',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 4,
            name: 'App Store',
            slug: 'apple-appstore',
          },
        },
        {
          store: {
            id: 8,
            name: 'Google Play',
            slug: 'google-play',
          },
        },
      ],
      released: '2016-12-08',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/5bc/5bcfcafffbd3085c62cc712b5b5f4b88.jpg',
      rating: 4.12,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 11,
          percent: 45.83,
        },
        {
          id: 4,
          title: 'recommended',
          count: 9,
          percent: 37.5,
        },
        {
          id: 3,
          title: 'meh',
          count: 2,
          percent: 8.33,
        },
        {
          id: 1,
          title: 'skip',
          count: 2,
          percent: 8.33,
        },
      ],
      ratings_count: 22,
      reviews_text_count: 1,
      added: 71,
      added_by_status: {
        yet: 6,
        owned: 11,
        beaten: 27,
        toplay: 15,
        dropped: 8,
        playing: 4,
      },
      metacritic: null,
      suggestions_count: 282,
      updated: '2026-02-06T20:46:00',
      id: 2638,
      score: null,
      clip: null,
      tags: [
        {
          id: 115,
          name: 'Controller',
          slug: 'controller',
          language: 'eng',
          games_count: 15031,
          image_background:
            'https://media.rawg.io/media/games/410/41033a495ce8f7fd4b0934bdb975f12a.jpg',
        },
        {
          id: 70,
          name: 'War',
          slug: 'war',
          language: 'eng',
          games_count: 10101,
          image_background:
            'https://media.rawg.io/media/games/410/41033a495ce8f7fd4b0934bdb975f12a.jpg',
        },
        {
          id: 406,
          name: 'Story',
          slug: 'story',
          language: 'eng',
          games_count: 11547,
          image_background:
            'https://media.rawg.io/media/games/315/3156817d3ac1f341da73de6495fb28f5.jpg',
        },
        {
          id: 413,
          name: 'online',
          slug: 'online',
          language: 'eng',
          games_count: 6552,
          image_background:
            'https://media.rawg.io/media/games/6b1/6b14dc4cc1785e396580c69165e55d2d.jpg',
        },
        {
          id: 744,
          name: 'friends',
          slug: 'friends',
          language: 'eng',
          games_count: 15189,
          image_background:
            'https://media.rawg.io/media/games/315/3156817d3ac1f341da73de6495fb28f5.jpg',
        },
        {
          id: 712,
          name: 'school',
          slug: 'school',
          language: 'eng',
          games_count: 4586,
          image_background:
            'https://media.rawg.io/media/screenshots/b87/b876d9664840d7e2f53cf5c649476935.jpg',
        },
        {
          id: 1069,
          name: 'ball',
          slug: 'ball',
          language: 'eng',
          games_count: 6294,
          image_background:
            'https://media.rawg.io/media/screenshots/ea8/ea82ea0e91daeafd6b98d22166c0913b.jpg',
        },
        {
          id: 2865,
          name: 'girl',
          slug: 'girl',
          language: 'eng',
          games_count: 2075,
          image_background:
            'https://media.rawg.io/media/screenshots/865/865964417247f8fa694bf60c36e2818b.jpg',
        },
        {
          id: 1303,
          name: 'Shadows',
          slug: 'shadows',
          language: 'eng',
          games_count: 803,
          image_background:
            'https://media.rawg.io/media/screenshots/5a4/5a4228bfe19fa9e7c9c2d47ade1e9c0a.jpg',
        },
        {
          id: 2489,
          name: 'dodge',
          slug: 'dodge',
          language: 'eng',
          games_count: 2981,
          image_background:
            'https://media.rawg.io/media/screenshots/404/4045a88d51324d13eda8aa26f245f2df.jpg',
        },
        {
          id: 2835,
          name: 'word',
          slug: 'word',
          language: 'eng',
          games_count: 2071,
          image_background:
            'https://media.rawg.io/media/screenshots/f52/f52e8a443a2c9901602263871516669a.jpg',
        },
      ],
      esrb_rating: {
        id: 3,
        name: 'Teen',
        slug: 'teen',
        name_en: 'Teen',
        name_ru: 'С 13 лет',
      },
      user_game: null,
      reviews_count: 24,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/5bc/5bcfcafffbd3085c62cc712b5b5f4b88.jpg',
        },
        {
          id: 908420,
          image:
            'https://media.rawg.io/media/screenshots/160/1607c0b8fedfbc45f6263589a85f33ea.jpg',
        },
        {
          id: 908424,
          image:
            'https://media.rawg.io/media/screenshots/4d5/4d53ab4357f6fdf496ac309e27f8be3a.jpg',
        },
        {
          id: 908426,
          image:
            'https://media.rawg.io/media/screenshots/4f4/4f40a250d1c21984d08426aaee6fe427.jpg',
        },
        {
          id: 908429,
          image:
            'https://media.rawg.io/media/screenshots/080/080fc46c7265099ee0ab067105a11668.jpg',
        },
        {
          id: 908432,
          image:
            'https://media.rawg.io/media/screenshots/d38/d386c94668459acf071b90bd6af03036_yIVW8Js.jpg',
        },
        {
          id: 24095,
          image:
            'https://media.rawg.io/media/screenshots/a14/a1420eaf92de86d7f7d409b3b822e9ad.jpeg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 4,
            name: 'iOS',
            slug: 'ios',
          },
        },
        {
          platform: {
            id: 8,
            name: 'Android',
            slug: 'android',
          },
        },
      ],
      genres: [
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
        },
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
      ],
    },
    {
      slug: 'the-italian-job',
      name: 'The Italian Job',
      playtime: 0,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 27,
            name: 'PlayStation',
            slug: 'playstation1',
          },
        },
      ],
      stores: null,
      released: '2001-10-05',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/a6b/a6bcb93ed2bdfa3880feaba9a1a5ab1b.jpg',
      rating: 3.71,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 6,
          percent: 35.29,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 5,
          percent: 29.41,
        },
        {
          id: 3,
          title: 'meh',
          count: 4,
          percent: 23.53,
        },
        {
          id: 1,
          title: 'skip',
          count: 2,
          percent: 11.76,
        },
      ],
      ratings_count: 17,
      reviews_text_count: 0,
      added: 60,
      added_by_status: {
        yet: 4,
        owned: 15,
        beaten: 18,
        toplay: 8,
        dropped: 14,
        playing: 1,
      },
      metacritic: 64,
      suggestions_count: 281,
      updated: '2025-07-27T06:15:11',
      id: 31017,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 250826,
          image_background:
            'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 42553,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
      ],
      esrb_rating: {
        id: 3,
        name: 'Teen',
        slug: 'teen',
        name_en: 'Teen',
        name_ru: 'С 13 лет',
      },
      user_game: null,
      reviews_count: 17,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/a6b/a6bcb93ed2bdfa3880feaba9a1a5ab1b.jpg',
        },
        {
          id: 311073,
          image:
            'https://media.rawg.io/media/screenshots/b30/b30486bd951f33ec819eb839c2307404.jpg',
        },
        {
          id: 311074,
          image:
            'https://media.rawg.io/media/screenshots/9f5/9f5a335ec060c8ce4cce3dfdc2224859.jpg',
        },
        {
          id: 311075,
          image:
            'https://media.rawg.io/media/screenshots/3c7/3c717bf323c06486fab43d1dde53abd2.jpg',
        },
        {
          id: 311076,
          image:
            'https://media.rawg.io/media/screenshots/5bd/5bd723727cf9f09ca4356091fa5ad5bd.jpg',
        },
        {
          id: 311077,
          image:
            'https://media.rawg.io/media/screenshots/4ed/4ed9d968a34b798f73a0f31269cd8eda.jpg',
        },
        {
          id: 311078,
          image:
            'https://media.rawg.io/media/screenshots/bf9/bf9e310a6a9de6ff1568850d7fd39879.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
      ],
      genres: [
        {
          id: 1,
          name: 'Racing',
          slug: 'racing',
        },
        {
          id: 11,
          name: 'Arcade',
          slug: 'arcade',
        },
      ],
    },
    {
      slug: 'grand-theft-auto-the-trilogy',
      name: 'Grand Theft Auto: The Trilogy',
      playtime: 0,
      platforms: [
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
          },
        },
        {
          platform: {
            id: 80,
            name: 'Xbox',
            slug: 'xbox-old',
          },
        },
        {
          platform: {
            id: 15,
            name: 'PlayStation 2',
            slug: 'playstation2',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
          },
        },
      ],
      released: '2011-01-06',
      tba: false,
      background_image:
        'https://media.rawg.io/media/screenshots/a95/a95c031fe96063cc40ad377fd828d9ad.jpg',
      rating: 4.09,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: 'recommended',
          count: 6,
          percent: 54.55,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 4,
          percent: 36.36,
        },
        {
          id: 1,
          title: 'skip',
          count: 1,
          percent: 9.09,
        },
      ],
      ratings_count: 11,
      reviews_text_count: 0,
      added: 46,
      added_by_status: {
        yet: 3,
        owned: 17,
        beaten: 10,
        toplay: 8,
        dropped: 8,
      },
      metacritic: null,
      suggestions_count: 9,
      updated: '2026-04-19T19:14:55',
      id: 2908,
      score: null,
      clip: null,
      tags: [
        {
          id: 413,
          name: 'online',
          slug: 'online',
          language: 'eng',
          games_count: 6552,
          image_background:
            'https://media.rawg.io/media/games/6b1/6b14dc4cc1785e396580c69165e55d2d.jpg',
        },
        {
          id: 2030,
          name: 'city',
          slug: 'city',
          language: 'eng',
          games_count: 9287,
          image_background:
            'https://media.rawg.io/media/screenshots/c80/c80f6c86de421615f4e84a07e5dde573.jpg',
        },
        {
          id: 2129,
          name: 'interactive',
          slug: 'interactive',
          language: 'eng',
          games_count: 476,
          image_background:
            'https://media.rawg.io/media/games/f41/f41d8b47828d04a597b90de55635af30.jpg',
        },
      ],
      esrb_rating: null,
      user_game: null,
      reviews_count: 11,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/screenshots/a95/a95c031fe96063cc40ad377fd828d9ad.jpg',
        },
        {
          id: 806857,
          image:
            'https://media.rawg.io/media/screenshots/a95/a95c031fe96063cc40ad377fd828d9ad.jpg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
      ],
    },
    {
      slug: 'max-payne-mobile',
      name: 'Max Payne Mobile',
      playtime: 0,
      platforms: [
        {
          platform: {
            id: 3,
            name: 'iOS',
            slug: 'ios',
          },
        },
        {
          platform: {
            id: 21,
            name: 'Android',
            slug: 'android',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 4,
            name: 'App Store',
            slug: 'apple-appstore',
          },
        },
        {
          store: {
            id: 8,
            name: 'Google Play',
            slug: 'google-play',
          },
        },
      ],
      released: '2012-04-12',
      tba: false,
      background_image:
        'https://media.rawg.io/media/screenshots/878/878193558aca97b9d07d38cee9e16fd4.jpg',
      rating: 4.18,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 10,
          percent: 58.82,
        },
        {
          id: 4,
          title: 'recommended',
          count: 4,
          percent: 23.53,
        },
        {
          id: 1,
          title: 'skip',
          count: 2,
          percent: 11.76,
        },
        {
          id: 3,
          title: 'meh',
          count: 1,
          percent: 5.88,
        },
      ],
      ratings_count: 17,
      reviews_text_count: 0,
      added: 39,
      added_by_status: {
        yet: 4,
        owned: 8,
        beaten: 18,
        toplay: 4,
        dropped: 4,
        playing: 1,
      },
      metacritic: null,
      suggestions_count: 283,
      updated: '2025-01-01T21:47:08',
      id: 757,
      score: null,
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 238777,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 36784,
          image_background:
            'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
        },
        {
          id: 149,
          name: 'Third Person',
          slug: 'third-person',
          language: 'eng',
          games_count: 13305,
          image_background:
            'https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg',
        },
        {
          id: 193,
          name: 'Classic',
          slug: 'classic',
          language: 'eng',
          games_count: 1815,
          image_background:
            'https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg',
        },
        {
          id: 150,
          name: 'Third-Person Shooter',
          slug: 'third-person-shooter',
          language: 'eng',
          games_count: 3861,
          image_background:
            'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        },
        {
          id: 11669,
          name: 'stats',
          slug: 'stats',
          language: 'eng',
          games_count: 5482,
          image_background:
            'https://media.rawg.io/media/games/f8c/f8c6a262ead4c16b47e1219310210eb3.jpg',
        },
        {
          id: 41,
          name: 'Dark',
          slug: 'dark',
          language: 'eng',
          games_count: 17392,
          image_background:
            'https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg',
        },
        {
          id: 406,
          name: 'Story',
          slug: 'story',
          language: 'eng',
          games_count: 11501,
          image_background:
            'https://media.rawg.io/media/games/708/7080e6c87e0825cb02888bf3c44b3889.jpg',
        },
        {
          id: 289,
          name: 'Noir',
          slug: 'noir',
          language: 'eng',
          games_count: 1526,
          image_background:
            'https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg',
        },
        {
          id: 920,
          name: 'murder',
          slug: 'murder',
          language: 'eng',
          games_count: 751,
          image_background:
            'https://media.rawg.io/media/games/284/284c7a96d5b79b0c8a45d8cd2faad608.jpg',
        },
        {
          id: 5082,
          name: 'revenge',
          slug: 'revenge',
          language: 'eng',
          games_count: 89,
          image_background:
            'https://media.rawg.io/media/screenshots/8e4/8e444a94ce8669fa5b088711308a3d61.jpg',
        },
        {
          id: 47412,
          name: 'mobile port',
          slug: 'mobile-port',
          language: 'eng',
          games_count: 1,
          image_background:
            'https://media.rawg.io/media/screenshots/878/878193558aca97b9d07d38cee9e16fd4.jpg',
        },
      ],
      esrb_rating: null,
      user_game: null,
      reviews_count: 17,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/screenshots/878/878193558aca97b9d07d38cee9e16fd4.jpg',
        },
        {
          id: 907512,
          image:
            'https://media.rawg.io/media/screenshots/e86/e862840b4f9b8b21150b14a6f0a2dc65.jpg',
        },
        {
          id: 907514,
          image:
            'https://media.rawg.io/media/screenshots/3f5/3f552e03f70fc82f49bf5ad2729349af.jpg',
        },
        {
          id: 907516,
          image:
            'https://media.rawg.io/media/screenshots/486/486002f036f76a6d95bd142a6c23a965.jpg',
        },
        {
          id: 907518,
          image:
            'https://media.rawg.io/media/screenshots/dac/dac82c4e1cef54250cddf463a84697d5.jpg',
        },
        {
          id: 6614,
          image:
            'https://media.rawg.io/media/screenshots/a0e/a0ef85976d98fea9643c85b041d1ad1a.jpeg',
        },
        {
          id: 6615,
          image:
            'https://media.rawg.io/media/screenshots/d13/d136ea9f8a422f5604011dfc39082db6.jpeg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 4,
            name: 'iOS',
            slug: 'ios',
          },
        },
        {
          platform: {
            id: 8,
            name: 'Android',
            slug: 'android',
          },
        },
      ],
      genres: [
        {
          id: 2,
          name: 'Shooter',
          slug: 'shooter',
        },
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
      ],
    },
    {
      slug: 'grand-theft-auto-ifruit',
      name: 'Grand Theft Auto: iFruit',
      playtime: 0,
      platforms: [
        {
          platform: {
            id: 3,
            name: 'iOS',
            slug: 'ios',
          },
        },
        {
          platform: {
            id: 21,
            name: 'Android',
            slug: 'android',
          },
        },
      ],
      stores: [
        {
          store: {
            id: 4,
            name: 'App Store',
            slug: 'apple-appstore',
          },
        },
        {
          store: {
            id: 8,
            name: 'Google Play',
            slug: 'google-play',
          },
        },
      ],
      released: '2013-09-16',
      tba: false,
      background_image:
        'https://media.rawg.io/media/screenshots/d74/d748bb016b1c26935cb7c2d0f2a7ba40.jpg',
      rating: 2.75,
      rating_top: 3,
      ratings: [
        {
          id: 3,
          title: 'meh',
          count: 7,
          percent: 58.33,
        },
        {
          id: 1,
          title: 'skip',
          count: 3,
          percent: 25,
        },
        {
          id: 5,
          title: 'exceptional',
          count: 1,
          percent: 8.33,
        },
        {
          id: 4,
          title: 'recommended',
          count: 1,
          percent: 8.33,
        },
      ],
      ratings_count: 12,
      reviews_text_count: 0,
      added: 30,
      added_by_status: {
        yet: 1,
        owned: 7,
        beaten: 8,
        toplay: 2,
        dropped: 12,
      },
      metacritic: null,
      suggestions_count: 162,
      updated: '2023-02-27T04:28:19',
      id: 7872,
      score: null,
      clip: null,
      tags: [
        {
          id: 70,
          name: 'War',
          slug: 'war',
          language: 'eng',
          games_count: 10100,
          image_background:
            'https://media.rawg.io/media/games/6d3/6d33014a4ed48a19c30a77ead5a0f62e.jpg',
        },
        {
          id: 413,
          name: 'online',
          slug: 'online',
          language: 'eng',
          games_count: 6552,
          image_background:
            'https://media.rawg.io/media/games/6b1/6b14dc4cc1785e396580c69165e55d2d.jpg',
        },
        {
          id: 2590,
          name: 'fun',
          slug: 'fun',
          language: 'eng',
          games_count: 29225,
          image_background:
            'https://media.rawg.io/media/games/ba7/ba7e84d59dbdb2fab5b2c1368e3bdfa5.jpg',
        },
        {
          id: 1709,
          name: 'work',
          slug: 'work',
          language: 'eng',
          games_count: 9295,
          image_background:
            'https://media.rawg.io/media/games/0c1/0c16bebacd247eadfe767ace1823f21d.jpg',
        },
        {
          id: 1652,
          name: 'night',
          slug: 'night',
          language: 'eng',
          games_count: 4496,
          image_background:
            'https://media.rawg.io/media/games/2ee/2eeed8524931b4fae1e4a40d0e5443b5.jpg',
        },
        {
          id: 1807,
          name: 'water',
          slug: 'water',
          language: 'eng',
          games_count: 3865,
          image_background:
            'https://media.rawg.io/media/games/9da/9dad0e1b6406a4685f244c58854a0ea2.jpg',
        },
        {
          id: 892,
          name: 'love',
          slug: 'love',
          language: 'eng',
          games_count: 6385,
          image_background:
            'https://media.rawg.io/media/screenshots/a71/a716436bd36cbea4979b0ad7ecae578d.jpg',
        },
        {
          id: 582,
          name: 'Dog',
          slug: 'dog',
          language: 'eng',
          games_count: 2261,
          image_background:
            'https://media.rawg.io/media/screenshots/fb5/fb554f480b9896b031d68ef5ef9937fa.jpeg',
        },
        {
          id: 1069,
          name: 'ball',
          slug: 'ball',
          language: 'eng',
          games_count: 6294,
          image_background:
            'https://media.rawg.io/media/screenshots/ea8/ea82ea0e91daeafd6b98d22166c0913b.jpg',
        },
        {
          id: 4312,
          name: 'colors',
          slug: 'colors',
          language: 'eng',
          games_count: 3626,
          image_background:
            'https://media.rawg.io/media/screenshots/c49/c49d40f7b5940784b701e78a57558e4f.jpg',
        },
        {
          id: 1015,
          name: 'survive',
          slug: 'survive',
          language: 'eng',
          games_count: 1264,
          image_background:
            'https://media.rawg.io/media/screenshots/cb7/cb7f39b09e55a75b2169e69b58f64f7c.jpg',
        },
        {
          id: 1524,
          name: 'beach',
          slug: 'beach',
          language: 'eng',
          games_count: 1144,
          image_background:
            'https://media.rawg.io/media/screenshots/857/8578c1526315140cbdb732555e85f92a_CSrwfoJ.jpg',
        },
        {
          id: 3111,
          name: 'paint',
          slug: 'paint',
          language: 'eng',
          games_count: 1637,
          image_background:
            'https://media.rawg.io/media/screenshots/e7a/e7ab62265bcf0afc04e2482d82bc6f9e.jpg',
        },
        {
          id: 2266,
          name: 'pet',
          slug: 'pet',
          language: 'eng',
          games_count: 1061,
          image_background:
            'https://media.rawg.io/media/screenshots/823/82365a077148843b8a4992a31ce388bd.jpg',
        },
      ],
      esrb_rating: null,
      user_game: null,
      reviews_count: 12,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/screenshots/d74/d748bb016b1c26935cb7c2d0f2a7ba40.jpg',
        },
        {
          id: 906218,
          image:
            'https://media.rawg.io/media/screenshots/04b/04bf75cd42fb0b69f0581238a2ff96c7.jpg',
        },
        {
          id: 906223,
          image:
            'https://media.rawg.io/media/screenshots/eda/eda824d3bf0a2188c7627bd235d447a1.jpg',
        },
        {
          id: 906225,
          image:
            'https://media.rawg.io/media/screenshots/d52/d52e29b2e9c72bd18ac2b038caf2a563.jpg',
        },
        {
          id: 906227,
          image:
            'https://media.rawg.io/media/screenshots/335/335871bf92c05b4d247ef95e9f0a9e35.jpg',
        },
        {
          id: 54145,
          image:
            'https://media.rawg.io/media/screenshots/8b1/8b1bfd50ba3f85d82e479c076e201bce.jpeg',
        },
        {
          id: 54146,
          image:
            'https://media.rawg.io/media/screenshots/c2e/c2e49885146cc9255706ee7d9ea6aef6.jpeg',
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 4,
            name: 'iOS',
            slug: 'ios',
          },
        },
        {
          platform: {
            id: 8,
            name: 'Android',
            slug: 'android',
          },
        },
      ],
      genres: [
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
        },
        {
          id: 4,
          name: 'Action',
          slug: 'action',
        },
      ],
    },
  ],
};
