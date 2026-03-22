(функция () {
    'use strict';

    /**
     * STUDIOS MASTER (Unified)
     * Разработано: Syvyj
     * Версия: 1.2.0
     * Описание: Единые студийные коллекции для Lampa (Netflix, HBO, Disney+ и др.)
     *
     * Этот плагин разработан сообществом.
     * Благодарность автору за подбор и логику.
     */

    // -----------------------------------------------------------------
    // ЛОКАЛИЗАЦИЯ
    // -----------------------------------------------------------------

    var LOCALIZATION = {
        'ru': {
            new_movies: 'Новые фильмы',
            new_series: 'Новые сериалы',
            Trending_netflix: 'В тренде на Netflix',
            action_blockbusters: 'Экшн и Блокбастеры',
            Fantasy_worlds: 'Фантастические миры',
            Reality_hits: 'Реалити-шоу: Хиты',
            Crime_dramas: 'Криминальные драмы',
            kdramas: 'K-Dramas (Корейские сериалы)',
            Anime_collection: 'Коллекция аниме',
            documentary_cinema: 'Документальное кино',
            Critics_choice: 'Выбор критиков (Высокий рейтинг)',
            hits_apple_tv: 'Хиты Apple TV+',
            apple_original_films: 'Оригинальные фильмы Apple',
            apple_scifi: 'Фантастическое яблоко',
            Comedies_feel_good: 'Комедии и хорошее настроение',
            Thrillers_detectives: 'Триллеры и Детективы',
            new_movies_wb_hbo: 'Новые фильмы WB/HBO',
            new_series_hbo_max: 'Новые сериалы HBO/Max',
            hbo_main_hits: 'HBO: Главные хиты',
            max_originals: 'Max Originals',
            warner_bros_blockbusters: 'Блокбастеры Warner Bros.',
            Golden_collection_hbo: 'Золотая коллекция HBO (Высший рейтинг)',
            epic_worlds_fantasy: 'Эпичные миры (Фэнтези)',
            premium_dramas: 'Премиальные драмы',
            Adult_animation: 'Взрослая анимация (Плавание для взрослых)',
            dc_universe_movies: 'Вселенная DC (Фильмы)',
            Trending_prime_video: 'В тренде на Prime Video',
            hard_action_antiheroes: 'Жесткий экшн и Антигерои',
            mgm_amazon_blockbusters: 'Блокбастеры MGM и Amazon',
            комедии: «Комедия»,
            high_rating_imdb: 'Высший рейтинг IMDb',
            new_movies_disney: 'Новые фильмы на Disney+',
            new_series_disney: 'Новые сериалы на Disney+',
            marvel_cinematic_universe: 'Marvel: Киновселенная (MCU)',
            marvel_series: 'Marvel: Сериалы',
            star_wars_movies: 'Звездные Войны: Фильмы',
            star_wars_mandalorian: 'Звездные Войны: Мандалорец и другие',
            disney_classics: 'Классика Диснея',
            pixar_infinity_beyond: 'Pixar: Бесконечность и далее',
            fx_adult_hits: 'FX: Взрослые хиты (Медведь, Сёгун)',
            simpsons_fox_animation: 'Симпсоны и анимация FOX',
            hulu_originals_trending: 'Hulu Originals: В тренде',
            Dramas_thrillers_hulu: 'Драмы и триллеры Hulu',
            Comedies_adult_animation: 'Комедии и анимация для взрослых',
            мини-сериал: 'Мини-сериалы (Ограниченная серия)',
            paramount_blockbusters: 'Блокбастеры Paramount Pictures',
            paramount_originals: 'Оригинальные сериалы Paramount+',
            Yellowstone_universe: 'Вселенная Йеллоустоун',
            star_trek_final_frontier: 'Звездный путь: Последняя граница',
            Nickelodeon_kids: 'Никелодеон: Для детей',
            syfy_hits: 'Хиты телеканала Syfy',
            space_journeys_scifi: 'Космические путешествия и Научная Фантастика',
            mysticism_horror_fantasy: 'Мистика, Ужасы и Фэнтези',
            образовательные: «Познавательное»,
            new_releases_discovery: 'Новые выпуски: Discovery, NatGeo, BBC',
            discovery_channel_hits: 'Discovery Channel: Хиты',
            national_geographic_world: 'National Geographic: Мир вокруг',
            Animal_planet_animals: 'Планета животных: Животные',
            bbc_earth_nature: 'BBC Earth: Природа (Высокий рейтинг)',
            culinary_battles_chefs: 'Кулинарные направления и Шеф-повара',
            voice_dance_talent_shows: 'Голос, Танцы и Шоу талантов',
            Survival_shows: 'Шоу о выживании',
            science_technology_experiments: 'Наука, Техника и Эксперименты',
            travel_tourism: 'Путешествия и туризм',
            true_crime_investigations: 'True Crime: Реальные расследования',
            плагин_loaded: 'Studios Master от Syvyj Up'
        },
        'en': {
            new_movies: 'Новые фильмы',
            new_series: 'Новый сериал',
            trending_netflix: 'В тренде на Netflix',
            action_blockbusters: 'Экшн и блокбастеры',
            fantasy_worlds: 'Фантастические миры',
            reality_hits: 'Реалити-шоу: хиты',
            crime_dramas: 'Криминальные драмы',
            корейские дорамы: «K-Dramas (Korean Series)»,
            anime_collection: 'Коллекция аниме',
            documentary_cinema: 'Документальное кино',
            critics_choice: 'Выбор критиков (высокая оценка)',
            hits_apple_tv: 'Хиты Apple TV+',
            apple_original_films: 'Оригинальные фильмы Apple',
            apple_scifi: 'Apple Sci-Fi',
            comedies_feel_good: 'Комедии и хорошее настроение',
            thrillers_detectives: 'Триллеры и детективы',
            new_movies_wb_hbo: 'Новые фильмы WB/HBO',
            new_series_hbo_max: 'Новый сериал HBO/Max',
            hbo_main_hits: 'HBO: Main Hits',
            max_originals: 'Max Originals',
            warner_bros_blockbusters: 'Warner Bros. Blockbusters',
            golden_collection_hbo: 'Золотая коллекция HBO (самый высокий рейтинг)',
            epic_worlds_fantasy: 'Эпические миры (фэнтези)',
            premium_dramas: 'Премиум-драмы',
            adult_animation: 'Взрослая анимация (Adult Swim)',
            dc_universe_movies: 'Вселенная DC (Фильмы)',
            trending_prime_video: 'В тренде на Prime Video',
            hard_action_antiheroes: 'Жесткие боевики и антигерои',
            mgm_amazon_blockbusters: 'MGM & Amazon Blockbusters',
            комедии: «Комедии»,
            highest_rating_imdb: 'Наивысший рейтинг на IMDb',
            new_movies_disney: 'Новые фильмы на Disney+',
            new_series_disney: 'Новый сериал на Disney+',
            marvel_cinematic_universe: 'Кинематографическая вселенная Marvel (MCU)',
            marvel_series: 'Marvel: Сериал',
            star_wars_movies: 'Звездные войны: Фильмы',
            star_wars_mandalorian: 'Звездные войны: Мандалорец и другие',
            disney_classics: 'Классика Диснея',
            pixar_infinity_beyond: 'Pixar: Бесконечность и за её пределами',
            fx_adult_hits: 'FX: Adult Hits (The Bear, Shogun)',
            simpsons_fox_animation: 'Симпсоны и анимация FOX',
            hulu_originals_trending: 'Оригинальные сериалы Hulu: в тренде',
            dramas_thrillers_hulu: 'Драмы и триллеры Hulu',
            comedies_adult_animation: 'Комедии и анимация для взрослых',
            мини-сериал: «Мини-сериал (ограниченный сериал)»,
            paramount_blockbusters: 'Paramount Pictures Blockbusters',
            paramount_originals: 'Оригинальные сериалы Paramount+',
            yellowstone_universe: 'Вселенная Йеллоустоуна',
            star_trek_final_frontier: 'Звездный путь: Последний рубеж',
            nickelodeon_kids: 'Nickelodeon: Для детей',
            syfy_hits: 'Хиты канала Syfy',
            space_journeys_scifi: 'Космические путешествия и научная фантастика',
            mysticism_horror_fantasy: 'Мистицизм, ужасы и фэнтези',
            образовательный: 'Образовательный',
            new_releases_discovery: 'Новые релизы: Discovery, NatGeo, BBC',
            discovery_channel_hits: 'Discovery Channel: Hits',
            national_geographic_world: 'National Geographic: The World Around',
            animal_planet_animals: 'Планета животных: Животные',
            bbc_earth_nature: 'BBC Земля: Природа (высокий рейтинг)',
            culinary_battles_chefs: 'Кулинарные баттлы и шеф-повара',
            voice_dance_talent_shows: 'Шоу голоса, танцев и талантов',
            survival_shows: 'Шоу на выживание',
            science_technology_experiments: 'Наука, технологии и эксперименты',
            travel_tourism: 'Путешествия и туризм',
            true_crime_investigations: 'Настоящие преступления: реальные расследования',
            plugin_loaded: 'Studios Master by Syvyj развернут'
        },
        'uk': {
            new_movies: 'Новые фильмы',
            new_series: 'Новые сериалы',
            Trending_netflix: 'В трендах Netflix',
            action_blockbusters: 'Екшн та Блокбастеры',
            Fantasy_worlds: 'Фантастические світи',
            Reality_hits: 'Реалити-шоу: Хити',
            Crime_dramas: 'Криминальные драми',
            дорамы: 'К-Драмы (Корейские сериалы)',
            аниме_коллекция: 'Аниме коллекция',
            documentary_cinema: 'Документальное кино',
            Critics_choice: 'Выбор критиков (Высокий рейтинг)',
            hits_apple_tv: 'Хіти Apple TV+',
            apple_original_films: 'Оригинальные фильмы Apple',
            apple_scifi: 'Фантастическое яблоко',
            Comedies_feel_good: 'Комедия и хорошее настроение',
            Thrillers_detectives: 'Трилеры и Детективы',
            new_movies_wb_hbo: 'Новые фильмы WB/HBO',
            new_series_hbo_max: 'Новые сериалы HBO/Max',
            hbo_main_hits: 'HBO: Головні хіти',
            max_originals: 'Max Originals',
            warner_bros_blockbusters: 'Блокбастеры Warner Bros.',
            Golden_collection_hbo: 'Золотая коллекция HBO (Наивысший рейтинг)',
            epic_worlds_fantasy: 'Епічні світи (Фентезі)',
            premium_dramas: 'Премьерские драмы',
            Adult_animation: 'Доросла анимация (Adult Swim)',
            dc_universe_movies: 'Всесвіт DC (Фильмы)',
            Trending_prime_video: 'В трендах Prime Video',
            hard_action_antiheroes: 'Жорсткий екшн та Антигерої',
            mgm_amazon_blockbusters: 'Блокбастеры MGM и Amazon',
            комедии: «Комедії»,
            high_rating_imdb: 'Наиболее высокий рейтинг IMDb',
            new_movies_disney: 'Новые фильмы на Disney+',
            new_series_disney: 'Новые сериалы на Disney+',
            marvel_cinematic_universe: 'Marvel: Киновсесвіт (MCU)',
            marvel_series: 'Marvel: Серии',
            star_wars_movies: 'Зоряні Війни: Фильмы',
            star_wars_mandalorian: 'Зоряни Війни: Мандалорец та иньші',
            disney_classics: 'Классика Диснея',
            pixar_infinity_beyond: 'Pixar: Нескучность и далі',
            fx_adult_hits: 'FX: Дорослі хіти (Медведь, Сёгун)',
            simpsons_fox_animation: 'Симпсоны и анимация FOX',
            hulu_originals_trending: 'Hulu Originals: У тренді',
            Dramas_thrillers_hulu: 'Драми та Трилери Hulu',
            Comedies_adult_animation: 'Комедия и анимация для доросли',
            мини-сериал: «Міни-сериалы (Ограниченная серия)»,
            paramount_blockbusters: 'Блокбастеры Paramount Pictures',
            paramount_originals: 'Оригинальные сериалы Paramount+',
            Yellowstone_universe: 'Всесвіт Йеллоустоун',
            star_trek_final_frontier: 'Звездный путь: Остання Межа',
            Nickelodeon_kids: 'Nickelodeon: Для детей',
            syfy_hits: 'Хіти телеканала Syfy',
            space_journeys_scifi: 'Космічні подорожі та Наукова Фантастика',
            mysticism_horror_fantasy: 'Мистика, Жахи та Фентезі',
            образовательные: «Пізнавальне»,
            new_releases_discovery: 'Новые выпуски: Discovery, NatGeo, BBC',
            discovery_channel_hits: 'Discovery Channel: Хіти',
            national_geographic_world: 'National Geographic: Світ навколо',
            Animal_planet_animals: 'Планета животных: Тварини',
            bbc_earth_nature: 'BBC Earth: Природа (Высокий рейтинг)',
            culinary_battles_chefs: 'Кулинарные битви та Шеф-кухари',
            voice_dance_talent_shows: 'Голос, Танці та Шоу талантів',
            Survival_shows: 'Шоу про выживание',
            science_technology_experiments: 'Наука, техника и эксперименты',
            travel_tourism: 'Подорожі та Туризм',
            true_crime_investigations: 'True Crime: Реальные расследования',
            плагин_loaded: 'Studios Master от Сивого разгорнуто'
        },
        'pl': {
            new_movies: 'Nowe Filmy',
            new_series: 'Nowe Seriale',
            Trending_netflix: «Тренды на Netflix»,
            action_blockbusters: 'Акция и блокбастеры',
            Fantasy_worlds: 'Святое фэнтези',
            reality_hits: 'Реалити-шоу: Хити',
            Crime_dramas: 'Драмы Криминальное',
            дорамы: «К-Драмы (Сериал Корейские)»,
            Anime_collection: 'Коллекции аниме',
            documentary_cinema: 'Кино Документальное',
            Critics_choice: 'Выбор Критыкув (Высока Оцена)',
            hits_apple_tv: 'Hity Apple TV+',
            apple_original_films: 'Оригинальные фильмы Apple',
            apple_scifi: 'Apple Sci-Fi',
            comedies_feel_good: 'Комедия, которая дарит хорошее настроение',
            thrillers_detectives: 'Thrillery i Detektywi',
            new_movies_wb_hbo: 'Nowe Filmy WB/HBO',
            new_series_hbo_max: 'Новый сериал HBO/Max',
            hbo_main_hits: 'HBO: Главные Хиты',
            max_originals: 'Max Originals',
            warner_bros_blockbusters: 'Блокбастер Warner Bros.',
            Golden_collection_hbo: 'Золотая коллекция HBO (Национальная сцена)',
            epic_worlds_fantasy: 'Эпические святы (Фэнтези)',
            premium_dramas: 'Dramy Premium',
            Adult_animation: 'Анимация для Дорослича (Плавание для взрослых)',
            dc_universe_movies: 'Uniwersum DC (Фильмы)',
            Trending_prime_video: 'Тренды на Prime Video',
            hard_action_antiheroes: 'Тварда Акции и Антибохатерове',
            mgm_amazon_blockbusters: 'Блокбастер MGM на Amazon',
            комедии: «Комедия»,
            high_rating_imdb: 'Найвыжша Оцена IMDb',
            new_movies_disney: «Новые фильмы на Disney+»,
            new_series_disney: «Новый сериал на Disney+»,
            marvel_cinematic_universe: 'Marvel: Filmowe Uniwersum (MCU)',
            marvel_series: 'Marvel: Seriale',
            star_wars_movies: 'Gwiezdne Wojny: Filmy',
            star_wars_mandalorian: 'Gwiezdne Wojny: Mandalorian i Inni',
            disney_classics: «Классическая Дисней»,
            pixar_infinity_beyond: 'Pixar: Несконьчоньц и Далей',
            fx_adult_hits: 'FX: Hity dla Dorosłych (The Bear, Shogun)',
            simpsons_fox_animation: 'Симпсоны и анимация FOX',
            hulu_originals_trending: 'Hulu Originals: Trendujące',
            Dramas_thrillers_hulu: 'Драмы и триллеры Hulu',
            Comedies_adult_animation: 'Комедия и анимация для Дорослича',
            мини-сериал: «Минисериале (ограниченный сериал)»,
            paramount_blockbusters: 'Блокбастер Paramount Pictures',
            paramount_originals: 'Оригинальные сериалы Paramount+',
            yellowstone_universe: 'Uniwersum Yellowstone',
            star_trek_final_frontier: 'Звездный путь: Остатечна граница',
            Nickelodeon_kids: 'Никелодеон: Дла Дзечи',
            syfy_hits: 'Hity Channel Syfy',
            space_journeys_scifi: 'Космические приключения и научная фантастика',
            mysticism_horror_fantasy: 'Mistycyzm, Horror i Fantasy',
            образовательный: 'Edukacyjne',
            new_releases_discovery: 'Новая Видания: Дискавери, NatGeo, BBC',
            discovery_channel_hits: 'Discovery Channel: Hity',
            national_geographic_world: 'National Geographic: Свят Вокул',
            Animal_planet_animals: 'Планета животных: Звежента',
            bbc_earth_nature: 'BBC Earth: Natura (Высока Оцена)',
            culinary_battles_chefs: 'Кулинарные битвы и зефови кучни',
            voice_dance_talent_shows: 'Голос, Танец и шоу талантов',
            Survival_shows: 'Шоу о Пшетрваниу',
            science_technology_experiments: 'Наука, технологии и эксперименты',
            travel_tourism: 'Подруже и Туристка',
            true_crime_investigations: 'Настоящее преступление: Rzeczywiste Śledztwa',
            плагин_loaded: 'Studios Master от Syvyj wdrożony'
        }
    };

    function getLocalizedString(key) {
        var lang = Lampa.Storage.get('language', 'uk');
        var fallbackLang = 'en';
        
        if (lang === 'be' || lang === 'ru') {
            язык = 'ру';
        } else if (lang === 'pl') {
            lang = 'pl';
        } else if (lang === 'uk') {
            lang = 'uk';
        } еще {
            lang = 'en';
        }
        
        return LOCALIZATION[lang][key] || LOCALIZATION[fallbackLang][key] || key;
    }

    var SERVICE_CONFIGS = {
        'netflix': {
            заголовок: 'Netflix',
            icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 2L16.5 22" stroke="#E50914" stroke-width="4"/><path d="M7.5 2L7.5 22" stroke="#E50914" stroke-width="4"/><path d="M7.5 2L16.5 22" stroke="#E50914" stroke-width="4"/></svg>',
            категории: [
                { "title": getLocalizedString('new_movies'), "url": "discover/movie", "params": { "with_watch_providers": "8", "watch_region": "UA", "sort_by": "primary_release_date.desc", "primary_release_date.lte": "{current_date}", "vote_count.gte": "5" } },
                { "title": getLocalizedString('new_series'), "url": "discover/tv", "params": { "with_networks": "213", "sort_by": "first_air_date.desc", "first_air_date.lte": "{current_date}", "vote_count.gte": "5" } },
                { "title": getLocalizedString('trending_netflix'), "url": "discover/tv", "params": { "with_networks": "213", "sort_by": "popularity.desc" } },
                { "title": getLocalizedString('action_blockbusters'), "url": "discover/movie", "params": { "with_companies": "213", "with_genres": "28,12", "sort_by": "popularity.desc" } },
                { "title": getLocalizedString('fantasy_worlds'), "url": "discover/tv", "params": { "with_networks": "213", "with_genres": "10765", "sort_by": "vote_average.desc", "vote_count.gte": "200" } },
                { "title": getLocalizedString('reality_hits'), "url": "discover/tv", "params": { "with_networks": "213", "with_genres": "10764", "sort_by": "popularity.desc" } },
                { "title": getLocalizedString('crime_dramas'), "url": "discover/tv", "params": { "with_networks": "213", "with_genres": "80", "sort_by": "popularity.desc" } },
                { "title": getLocalizedString('kdramas'), "url": "discover/tv", "params": { "with_networks": "213", "with_original_language": "ko", "sort_by": "popularity.desc" } },
                { "title": getLocalizedString('anime_collection'), "url": "discover/tv", "params": { "with_networks": "213", "with_genres": "16", "with_keywords": "210024", "sort_by": "popularity.desc" } },
                { "title": getLocalizedString('documentary_cinema'), "url": "discover/movie", "params": { "with_companies": "213", "with_genres": "99", "sort_by": "release_date.desc" } },
                { "title": getLocalizedString('critics_choice'), "url": "discover/movie", "params": { "with_companies": "213", "vote_average.gte": "7.5", "vote_count.gte": "300", "sort_by": "vote_average.desc" } }
            ]
        },
        'яблоко': {
            заголовок: 'Apple TV+',
            icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 ​​0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>',
            категории: [
                { "title": getLocalizedString('new_movies'), "url": "discover/movie", "params": { "with_watch_providers": "350", "watch_region": "UA", "sort_by": "primary_release_date.desc", "primary_release_date.lte": "{current_date}", "vote_count.gte": "5" } },
                { "title": getLocalizedString('new_series'), "url": "discover/tv", "params": { "with_watch_providers": "350", "watch_region": "UA", "sort_by": "first_air_date.desc", "first_air_date.lte": "{current_date}", "vote_count.gte": "5" } },
                { "title": getLocalizedString('hits_apple_tv'), "url": "discover/tv", "params": { "with_watch_providers": "350", "watch_region": "UA", "sort_by": "popularity.desc" } },
                { "title": getLocalizedString('apple_original_films'), "url": "discover/movie", "params": { "with_watch_providers": "350", "watch_region": "UA", "sort_by": "release_date.desc", "vote_count.gte": "10" } },
                { "title": getLocalizedString('apple_scifi'), "url": "discover/tv", "params": { "with_watch_providers": "350", "watch_region": "UA", "with_genres": "10765", "sort_by": "vote_average.desc", "vote_count.gte": "200" } },
                { "title": getLocalizedString('comedies_feel_good'), "url": "discover/tv", "params": { "with_watch_providers": "350", "watch_region": "UA", "with_genres": "35", "sort_by": "popularity.desc" } },
                { "title": getLocalizedString('thrillers_detectives'), "url": "discover/tv", "params": { "with_watch_providers": "350", "watch_region": "UA", "with_genres": "9648,80", "sort_by": "popularity.desc" } }
            ]
        },
        'hbo': {
            заголовок: 'HBO',
            icon: '<svg width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor"><path d="M7.042 16.896H4.414v-3.754H2.708v3.754H.01L0 7.22h2.708v3.6h1.706v-3.6h2.628zm12.043.046C21.795 16.94 24 14.689 24 11.978a4.89 4.89 0 0 0-4.915-4.92c-2.707-.002-4.09 1.991-4.432 2.795.003-1.207-1.187-2.632-2.58-2.634H7.59v9.674l4.181.001c1.686 0 2,886-1,46 2,888-2,713,385,788 1,72 2,762 4,427 2.76zm-7.665-3.936c.387 0 .692.382.692.817 0 .435-.305.817-.692.817h-1.33v-1.634zm.005-3.633c.387 0 .692.382.692.817 0 .436-.305.818-.692.818h-1.33V9.373zm1.77 2.607c.305-.039.813-.387.992-.61-.063.276-.068 1.074.006 1.35-.204-.314-.688-.701-.998-.74zm3.43 0a2.462 2.462 0 1 1 4.924 0 2.462 2.462 0 0 1-4.925 0zm2.462 1.936a1.936 1,936 0 1 0 0-3,872 1,936 1,936 0 0 0 0 3.872z"/></svg>',
            категории: [
                { "title": getLocalizedString('new_movies_wb_hbo'), "url": "discover/movie", "params": { "with_companies": "174|49", "sort_by": "primary_release_date.desc", "primary_release_date.lte": "{current_date}", "vote_count.gte": "10" } },
                { "title": getLocalizedString('new_series_hbo_max'), "url": "discover/tv", "params": { "with_networks": "49|3186", "sort_by": "first_air_date.desc", "first_air_date.lte": "{current_date}", "vote_count.gte": "5" } },
                { "title": getLocalizedString('hbo_main_hits'), "url": "discover/tv", "params": { "with_networks": "49", "sort_by": "popularity.desc" } },
                { "title": getLocalizedString('max_originals'), "url": "discover/tv", "params": { "with_networks": "3186", "sort_by": "popularity.desc" } },
                { "title": getLocalizedString('warner_bros_blockbusters'), "url": "discover/movie", "params": { "with_companies": "174", "sort_by": "revenue.desc", "vote_count.gte": "1000" } },
                { "title": getLocalizedString('golden_collection_hbo'), "url": "discover/tv", "params": { "with_networks": "49", "sort_by": "vote_average.desc", "vote_count.gte": "500", "vote_average.gte": "8.0" } },
                { "title": getLocalizedString('epic_worlds_fantasy'), "url": "discover/tv", "params": { "with_networks": "49|3186", "with_genres": "10765", "sort_by": "popularity.desc" } },
                { "title": getLocalizedString('premium_dramas'), "url": "discover/tv", "params": { "with_networks": "49", "with_genres": "18", "without_genres": "10765", "sort_by": "popularity.desc" } },
                { "title": getLocalizedString('adult_animation'), "url": "discover/tv", "params": { "with_networks": "3186|80", "with_genres": "16", "sort_by": "popularity.desc" } },
                { "title": getLocalizedString('dc_universe_movies'), "url": "discover/movie", "params": { "with_companies": "174", "with_keywords": "9715", "sort_by": "release_date.desc" } }
            ]
        },
        'amazon': {
            название: 'Prime Video',
            icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.787 15.292c-.336-.43-2.222-.204-3.069-.103-.257.031-.296-.193-.065-.356 1.504-1.056 3.968-.75 4.255-.397.288.357-.076 2.827-1.485 4.007-.217.18-.423.084-.327-.155.317-.792 1.027-2.566.69-2.996"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>',
            категории: [
                { "title": getLocalizedString('trending_prime_video'), "url": "discover/tv", "params": { "with_networks": "1024", "sort_by": "popularity.desc" } },
                { "title": getLocalizedString('new_movies'), "url": "discover/movie", "params": { "with_watch_providers": "119", "watch_region": "UA", "sort_by": "primary_release_date.desc", "primary_release_date.lte": "{current_date}", "vote_count.gte": "5" } },
                { "title": getLocalizedString('new_series'), "url": "discover/tv", "params": { "with_networks": "1024", "sort_by": "first_air_date.desc", "first_air_date.lte": "{current_date}", "vote_count.gte": "5" } },
                { "title": getLocalizedString('hard_action_antiheroes'), "url": "discover/tv", "params": { "with_networks": "1024", "with_genres": "10765,10759", "sort_by": "popularity.desc" } },
                { "title": getLocalizedString('mgm_amazon_blockbusters'), "url": "discover/movie", "params": { "with_companies": "1024|21", "sort_by": "revenue.desc" } },
                { "title": getLocalizedString('comedies'), "url": "discover/tv", "params": { "with_networks": "1024", "with_genres": "35", "sort_by": "vote_average.desc" } },
                { "title": getLocalizedString('highest_rating_imdb'), "url": "discover/tv", "params": { "with_networks": "1024", "vote_average.gte": "8.0", "vote_count.gte": "500", "sort_by": "vote_average.desc" } }
            ]
        },
        'дисней': {
            заголовок: 'Disney+',
            icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19,3V7m2-2H17m-10.31,4L8.69,21m-5.69-7c0-3,5.54-4.55,9-2m-9,2s12.29-2,13.91,6.77c1.09,5.93-6.58,6.7-9.48,5.89S3,16.06,3,14.06"/></svg>',
            категории: [
                { "title": getLocalizedString('new_movies_disney'), "url": "discover/movie", "params": { "with_watch_providers": "337", "watch_region": "UA", "sort_by": "primary_release_date.desc", "primary_release_date.lte": "{current_date}", "vote_count.gte": "5" } },
                { "title": getLocalizedString('new_series_disney'), "url": "discover/tv", "params": { "with_watch_providers": "337", "watch_region": "UA", "sort_by": "first_air_date.desc", "first_air_date.lte": "{current_date}", "vote_count.gte": "5" } },
                { "title": getLocalizedString('marvel_cinematic_universe'), "url": "discover/movie", "params": { "with_companies": "420", "sort_by": "release_date.desc", "vote_count.gte": "200" } },
                { "title": getLocalizedString('marvel_series'), "url": "discover/tv", "params": { "with_companies": "420", "with_networks": "2739", "sort_by": "first_air_date.desc" } },
                { "title": getLocalizedString('star_wars_movies'), "url": "discover/movie", "params": { "with_companies": "1", "sort_by": "release_date.asc" } },
                { "title": getLocalizedString('star_wars_mandalorian'), "url": "discover/tv", "params": { "with_companies": "1", "with_keywords": "1930", "sort_by": "popularity.desc" } },
                { "title": getLocalizedString('disney_classics'), "url": "discover/movie", "params": { "with_companies": "6125", "sort_by": "popularity.desc" } },
                { "title": getLocalizedString('pixar_infinity_beyond'), "url": "discover/movie", "params": { "with_companies": "3", "sort_by": "popularity.desc" } },
                { "title": getLocalizedString('fx_adult_hits'), "url": "discover/tv", "params": { "with_networks": "88", "sort_by": "popularity.desc" } },
                { "title": getLocalizedString('simpsons_fox_animation'), "url": "discover/tv", "params": { "with_networks": "19", "with_genres": "16", "sort_by": "popularity.desc" } }
            ]
        },
        'hulu': {
            заголовок: 'Hulu',
            icon: '<svg viewBox="0 0 24 24" fill="#3DBB3D"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/></svg>',
            категории: [
                { "title": getLocalizedString('hulu_originals_trending'), "url": "discover/tv", "params": { "with_networks": "453", "sort_by": "popularity.desc" } },
                { "title": getLocalizedString('dramas_thrillers_hulu'), "url": "discover/tv", "params": { "with_networks": "453", "with_genres": "18,9648", "sort_by": "vote_average.desc" } },
                { "title": getLocalizedString('comedies_adult_animation'), "url": "discover/tv", "params": { "with_networks": "453", "with_genres": "35,16", "sort_by": "popularity.desc" } },
                { "title": getLocalizedString('miniseries'), "url": "discover/tv", "params": { "with_networks": "453", "with_keywords": "158718", "sort_by": "first_air_date.desc" } }
            ]
        },
        'paramount': {
            название: 'Paramount+',
            icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22H22L12 2ZM12 6.5L18.5 19.5H5.5L12 6.5Z"/></svg>',
            категории: [
                { "title": getLocalizedString('paramount_blockbusters'), "url": "discover/movie", "params": { "with_companies": "4", "sort_by": "revenue.desc" } },
                { "title": getLocalizedString('paramount_originals'), "url": "discover/tv", "params": { "with_networks": "4330", "sort_by": "popularity.desc" } },
                { "title": getLocalizedString('yellowstone_universe'), "url": "discover/tv", "params": { "with_networks": "318|4330", "with_genres": "37,18", "sort_by": "popularity.desc" } },
                { "title": getLocalizedString('star_trek_final_frontier'), "url": "discover/tv", "params": { "with_networks": "4330", "with_keywords": "159223", "sort_by": "first_air_date.desc" } },
                { "title": getLocalizedString('nickelodeon_kids'), "url": "discover/tv", "params": { "with_networks": "13", "sort_by": "popularity.desc" } }
            ]
        },
        'syfy': {
            название: 'Syfy',
            icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z"/></svg>',
            категории: [
                { "title": getLocalizedString('syfy_hits'), "url": "discover/tv", "params": { "with_networks": "77", "sort_by": "popularity.desc" } },
                { "title": getLocalizedString('space_journeys_scifi'), "url": "discover/tv", "params": { "with_networks": "77", "with_genres": "10765", "with_keywords": "3801", "sort_by": "vote_average.desc" } },
                { "title": getLocalizedString('mysticism_horror_fantasy'), "url": "discover/tv", "params": { "with_networks": "77", "with_genres": "9648,10765", "without_keywords": "3801", "sort_by": "popularity.desc" } }
            ]
        },
        'educational_and_reality': {
            заголовок: getLocalizedString('educational'),
            icon: '<svg viewBox="0 0 24 24" fill="#FF9800"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>',
            категории: [
                // --- БЛОК 1: Студийные новости (Discovery, NatGeo, BBC, History) ---
                {
                    "title": getLocalizedString('new_releases_discovery'),
                    "url": "discover/tv",
                    "параметры": {
                        "with_networks": "64|91|43|2696|4|65", // Всі топ канали разом
                        "sort_by": "first_air_date.desc", // Сортировка по новому
                        "first_air_date.lte": "{current_date}",
                        "vote_count.gte": "0" // Показать напоминание без оценок (совсем свежее)
                    }
                },

                // --- БЛОК 2: Сначала от студии ---
                { "title": getLocalizedString('discovery_channel_hits'), "url": "discover/tv", "params": { "with_networks": "64", "sort_by": "popularity.desc" } },
                { "title": getLocalizedString('national_geographic_world'), "url": "discover/tv", "params": { "with_networks": "43", "sort_by": "popularity.desc" } },
                { "title": getLocalizedString('animal_planet_animals'), "url": "discover/tv", "params": { "with_networks": "91", "sort_by": "popularity.desc" } },
                { "title": getLocalizedString('bbc_earth_nature'), "url": "discover/tv", "params": { "with_networks": "4", "with_genres": "99", "sort_by": "vote_average.desc", "vote_count.gte": "50" } },

                // --- БЛОК 3: Жанровые дополнения (Все студии света) ---

                // Кулинария (МастерШеф, Адская Кухня и т.д.)
                {
                    "title": getLocalizedString('culinary_battles_chefs'),
                    "url": "discover/tv",
                    "параметры": {
                        "with_genres": "10764", // Реальность
                        "with_keywords": "222083", // Готовка ИЛИ Выпечка (Випічка)
                        "without_keywords": "10636,5481", // ПРИБРАТИ: Dating (Single's Inferno), Survival
                        "sort_by": "popularity.desc"
                    }
                },

                // Шоу талантів (Голос, Х-Фактор, Айдол)
                {
                    "title": getLocalizedString('voice_dance_talent_shows'),
                    "url": "discover/tv",
                    "параметры": {
                        "with_genres": "10764", // Реальность
                        "with_keywords": "4542|4568|2643", // Пение ИЛИ Танцы ИЛИ Шоу талантов
                        "without_keywords": "5481,9714", // ПРИБРАТИ: Survival (Выживший), Travel (Amazing Race)
                        "sort_by": "popularity.desc"
                    }
                },

                // Виживання (Выживший, Беар Гриллс)
                {
                    "title": getLocalizedString('survival_shows'),
                    "url": "discover/tv",
                    "параметры": {
                        "with_genres": "10764",
                        "with_keywords": "5481|10348", // Ключевые слова: Выживание
                        "sort_by": "popularity.desc"
                    }
                },
                // Наука та Технологиї (Разрушители мифов, Как это сделано)
                {
                    "title": getLocalizedString('cience_technology_experiments'),
                    "url": "discover/tv",
                    "параметры": {
                        "with_genres": "99",
                        "with_keywords": "12554|4924", // Наука ИЛИ Технология
                        "sort_by": "popularity.desc"
                    }
                },

                // Подорожі (Орел і Решка, Путешественник)
                {
                    "title": getLocalizedString('travel_tourism'),
                    "url": "discover/tv",
                    "параметры": {
                        "with_genres": "99,10764",
                        "with_keywords": "9714", // Ключевое слово: Путешествия
                        "sort_by": "vote_average.desc",
                        "vote_count.gte": "20"
                    }
                },

                // Настоящее преступление (Криминал)
                {
                    "title": getLocalizedString('true_crime_investigations'),
                    "url": "discover/tv",
                    "параметры": {
                        "with_genres": "99",
                        "with_keywords": "10714|9840", // Расследование серийных убийц ИЛИ
                        "sort_by": "popularity.desc"
                    }
                }
            ]
        }
    };

    // -----------------------------------------------------------------
    // КОМПОНЕНТЫ
    // -----------------------------------------------------------------

    function StudiosMain(object) {
        var comp = new Lampa.InteractionMain(object);
        var config = SERVICE_CONFIGS[object.service_id];

        comp.create = function () {
            var _this = this;
            this.activity.loader(true);
            var categories = config.categories;
            вар сеть = новый Lampa.Reguest();
            var status = new Lampa.Status(categories.length);

            status.onComplite = function () {
                var fulldata = [];
                Object.keys(status.data).sort(function (a, b) { return a - b; }).forEach(function (key) {
                    var data = status.data[key];
                    if (data && data.results && data.results.length) {
                        вар кот = категории [parseInt (ключ)];
                        Lampa.Utils.extendItemsParams(data.results, { style: { name: 'wide' } });
                        fulldata.push({
                            заголовок: cat.title,
                            результаты: data.results,
                            url: cat.url,
                            параметры: cat.params,
                            service_id: object.service_id // передать для контекста 'Показать все'
                        });
                    }
                });

                if (fulldata.length) {
                    _this.build(fulldata);
                    _this.activity.loader(false);
                } еще {
                    _this.empty();
                }
            };

            categories.forEach(function (cat, index) {
                var params = [];
                params.push('api_key=' + Lampa.TMDB.key());
                params.push('language=' + Lampa.Storage.get('language', 'uk'));

                if (cat.params) {
                    for (var key in cat.params) {
                        var val = cat.params[key];
                        if (val === '{current_date}') {
                            var d = new Date();
                            val = [d.getFullYear(), ('0' + (d.getMonth() + 1)).slice(-2), ('0' + d.getDate()).slice(-2)].join('-');
                        }
                        params.push(key + '=' + val);
                    }
                }

                var url = Lampa.TMDB.api(cat.url + '?' + params.join('&'));

                network.silent(url, function (json) {
                    status.append(index.toString(), json);
                }, функция () {
                    status.error();
                });
            });

            return this.render();
        };

        comp.onMore = function (data) {
            Lampa.Activity.push({
                url: data.url,
                параметры: данные.параметры,
                заголовок: данные.заголовок,
                компонент: 'studios_view',
                страница: 1
            });
        };

        вернуть comp;
    }

    function StudiosView(object) {
        var comp = new Lampa.InteractionCategory(object);
        вар сеть = новый Lampa.Reguest();

        function buildUrl(page) {
            var params = [];
            params.push('api_key=' + Lampa.TMDB.key());
            params.push('language=' + Lampa.Storage.get('language', 'uk'));
            params.push('page=' + page);

            if (object.params) {
                for (var key in object.params) {
                    var val = object.params[key];
                    if (val === '{current_date}') {
                        var d = new Date();
                        val = [d.getFullYear(), ('0' + (d.getMonth() + 1)).slice(-2), ('0' + d.getDate()).slice(-2)].join('-');
                    }
                    params.push(key + '=' + val);
                }
            }
            return Lampa.TMDB.api(object.url + '?' + params.join('&'));
        }

        comp.create = function () {
            var _this = this;
            network.silent(buildUrl(1), function (json) {
                _this.build(json);
            }, this.empty.bind(this));
        };

        comp.nextPageReuest = function (object, resolve, reject) {
            network.silent(buildUrl(object.page), resolve, reject);
        };

        вернуть comp;
    }

    // -----------------------------------------------------------------
    // ВВЕДЕНИЕ
    // -----------------------------------------------------------------

    function startPlugin() {
        if (window.plugin_studios_master_ready) return;
        window.plugin_studios_master_ready = true;

        // Регистрация компонентов
        Lampa.Component.add('studios_main', StudiosMain);
        Lampa.Component.add('studios_view', StudiosView);

        // Внедрить CSS для широких карточек один раз
        if (!$('#studios-unified-css').length) {
            $('body').append(`
                <style id="studios-unified-css">
                    .studios_main .card--wide { width: 18.3em !important; }
                    .studios_view .card--wide { width: 18.3em !important; }
                    .studios_view .category-full { padding-top: 1em; }
                </style>
            `);
        }

        // Функция для отображения кнопок меню
        function addMenuButtons() {
            вар меню = $('.menu .menu__list').eq(0);
            if (!menu.length) return;

            // Проходим по всем конфигурациям и добавляем кнопки
            Object.keys(SERVICE_CONFIGS).forEach(function (sid) {
                var conf = SERVICE_CONFIGS[sid];

                // Избегайте дубликатов
                if (menu.find('.menu__item[data-sid="' + sid + '"]').length) return;

                var btn = $(`<li class="menu__item selector" data-action="studios_action_${sid}" data-sid="${sid}">
                    <div class="menu__ico">${conf.icon}</div>
                    <div class="menu__text">${conf.title}</div>
                </li>`);

                btn.on('hover:enter', function () {
                    Lampa.Activity.push({
                        заголовок: conf.title,
                        компонент: 'studios_main',
                        service_id: sid,
                        страница: 1
                    });
                });

                // Добавить в меню
                menu.append(btn);
            });
        }

        // Инициализация
        if (window.appready) {
            addMenuButtons();
        } еще {
            Lampa.Listener.follow('app', function (e) {
                if (e.type == 'ready') addMenuButtons();
            });
        }

        // Проверка безопасности для обеспечения отображения кнопок даже при изменении DOM
        setInterval(function () {
            if (window.appready && $('.menu .menu__list').eq(0).length) {
                addMenuButtons();
            }
        }, 3000);
    }

    if (!window.plugin_studios_master_ready) startPlugin();
})();
