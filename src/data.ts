import type {
  Competency,
  CompetencyDetail,
  CompetencyExample,
  CompetencyVisual,
  ContentSection,
  Project,
  Technology,
  Tool,
} from "./types";

export const profile = {
  name: "Егор Агеев",
  location: "Вишнёвые горы",
  headline: "Unity / C# Developer",
  description:
    "Разрабатываю игровые системы, архитектуру и инструменты Unity Editor. От прототипа и сборки до развития опубликованного продукта.",
  contacts: [
    {
      label: "GitHub",
      value: "@Ryagich",
      href: "https://github.com/Ryagich",
    },
    {
      label: "Telegram",
      value: "@Ryagich",
      href: "https://t.me/Ryagich",
    },
    {
      label: "Яндекс Игры",
      value: "Профиль разработчика",
      href: "https://yandex.ru/games/developer/67582",
    },
    {
      label: "itch.io",
      value: "moody-dust.itch.io",
      href: "https://moody-dust.itch.io/",
    },
  ],
  resume: undefined as string | undefined,
};
export const categoryLabels = {
  all: "Все",
  current: "Текущие",
  "web-pc": "Web / PC",
  mobile: "Мобильные",
} as const;
export const statusLabels = {
  released: "Опубликован",
  "in-development": "В разработке",
  prototype: "Прототип",
} as const;
export const projects: Project[] = [
  {
    id: "rpg",
    slug: "rpg",
    title: "RPG",
    coverLabel: "",
    summary:
      "Исследование мира, где решения игрока определяют доступные события и отношения с фракциями.",
    description:
      "Ролевая игра в средневековом фэнтези-сеттинге про исследование мира, где решения игрока определяют доступные события и отношения с фракциями. Диалоги, квесты и взаимодействия с NPC используют сохранённое состояние прохождения; боевая система дополняет этот игровой цикл.\n\nПроект разрабатывается самостоятельно. Технический акцент — модульная архитектура, взаимодействие независимых систем и собственные графовые редакторы Unity для авторинга сценариев и поведения без изменения программного кода.",
    developmentStartedAt: "2026-03-07T06:51:43Z",
    publicationStatus: "В разработке. Не опубликовано.",
    links: [
      {
        label: "Тестовая сборка",
        href: "https://yandex.ru/games/app/601512?draft=true",
      },
      {
        label: "Черновик проекта",
        href: "https://yandex.ru/games/app/601513?draft=true",
      },
    ],
    repositoryLinks: [{ label: "GitHub", href: "https://github.com/Ryagich/RPG" }],
    coverImage: {
      src: "/content/projects/rpg/rpg-village-lookout.png",
      alt: "Персонаж перед башней в лесной локации RPG",
    },
    popupMedia: [
      {
        src: "/content/projects/rpg/rpg-village-lookout.png",
        alt: "Персонаж перед башней в лесной локации RPG",
        caption: "Лесная локация",
      },
      {
        src: "/content/projects/rpg/rpg-city-approach.png",
        alt: "Персонаж на подходе к городу в RPG",
        caption: "Подход к городу",
      },
    ],
    popupSections: [
      {
        title: "Архитектура игровой сессии",
        text: "Контексты проекта, игровой сцены, игрока, интерфейса, локаций и NPC задают границы данных и жизненные циклы систем.",
      },
      {
        title: "Игрок и игровые действия",
        text: "Движение, камера, взаимодействия, бой, характеристики и экипировка сопровождают действие от ввода до результата.",
      },
      {
        title: "Инвентарь и экономика",
        text: "Рюкзак, добыча, экипировка, торговля и предметы мира используют одну модель операций с предметами.",
      },
      {
        title: "Интерфейс и управление",
        text: "HUD, карта, журнал, меню и переназначение клавиш получают состояние из игровых систем и текущего режима.",
      },
      {
        title: "NPC и сценарные системы",
        text: "Поведение NPC, диалоги, задания и отношения фракций связывают события мира с прохождением игрока.",
      },
      {
        title: "Мир, локации и сохранения",
        text: "Переходы, предметы мира, рост растений и сохранение поддерживают состояние локаций между сессиями.",
      },
      {
        title: "Контентные инструменты и сервисы",
        text: "Графовые редакторы, локализация, аудио, обучение и телеметрия сопровождают создание и работу игрового контента.",
      },
    ],
    categories: ["current", "web-pc"],
    status: "in-development",
    featured: true,
    technologies: [
      "Unity",
      "C#",
      "VContainer",
      "MessagePipe",
      "UniTask",
      "UniRx",
      "Addressables",
      "Unity Input System",
      "Unity Localization",
      "AI Navigation / NavMesh",
      "UI Toolkit",
    ],
    cardTechnologies: ["Unity", "C#"],
    platforms: ["Web / PC"],
    role: "Архитектура и разработка игровых систем, сценарных данных и инструментов Unity Editor.",
    features: [
      "Иерархия Project, Game, Player, Canvas, NPC и интерактивных Lifetime Scope",
      "Сеточный инвентарь, экипировка, быстрые слоты, предмет в руке, добыча и торговля",
      "Бой с окнами урона, частями тела, бронёй, реакциями, уклонением, перекатами и захватом цели",
      "NPC с восприятием, NavMesh-навигацией, подбором предметов, боевыми тактиками и FSM",
      "Диалоговые и квестовые графы, журнал, карта, уведомления и отношения фракций",
      "Версионируемые сохранения игрока, NPC, предметов мира, растений, квестов и состояния локаций",
      "Локализация, аудио, обучение, telemetry, реклама и настройка управления",
    ],
    solutions: [
      "Авторские ScriptableObject-данные отделены от изменяемого состояния прохождения.",
      "UI наблюдает за моделями и передаёт пользовательское намерение в игровые системы.",
      "События связывают ввод, режим игры, геймплей и интерфейс через scoped message broker-ы.",
      "Сохранение собирается профильными координаторами и восстанавливается владельцами доменных данных.",
    ],
    sections: [],
  },
  {
    id: "farm",
    slug: "farm",
    title: "Farm",
    coverLabel: "",
    coverImage: {
      src: "/content/projects/farm/farm-cover.jpg",
      alt: "Игровая сцена Farm с торговой зоной и растениями",
    },
    links: [{ label: "itch.io", href: "https://moody-dust.itch.io/farm" }],
    repositoryLinks: [{ label: "GitHub", href: "https://github.com/Ryagich/Farm" }],
    summary: "Описание проекта появится позже.",
    description: "Подробное описание проекта появится позже.",
    categories: ["web-pc"],
    status: "released",
    publicationStatus: "Разработка завершена. Опубликовано.",
    featured: true,
    technologies: ["Unity", "C#"],
    cardTechnologies: ["Unity", "C#"],
    platforms: ["Web / PC"],
    role: "",
    features: [],
    solutions: [],
    sections: [],
    developmentStartedAt: "2023-05-27T00:00:00Z",
    developmentEndedAt: "2023-05-30T00:00:00Z",
    isPlaceholder: true,
  },
  {
    id: "apocalypse-zombie-shooter",
    slug: "apocalypse-zombie-shooter",
    title: "Апокалипсис Зомби Шутер",
    coverLabel: "",
    coverImage: {
      src: "/content/projects/apocalypse-zombie-shooter/cover.png",
      alt: "Персонаж из Апокалипсис Зомби Шутер",
    },
    summary: "Описание проекта появится позже.",
    description: "Подробное описание проекта появится позже.",
    categories: ["web-pc"],
    status: "released",
    publicationStatus: "Разработка завершена. Снято с публикации.",
    featured: true,
    technologies: [],
    cardTechnologies: [],
    platforms: ["Web / PC"],
    role: "",
    features: [],
    solutions: [],
    sections: [],
    developmentStartedAt: "2023-09-02T00:00:00Z",
    developmentEndedAt: "2023-10-02T00:00:00Z",
    isPlaceholder: true,
  },
  {
    id: "counter-terrorist",
    slug: "counter-terrorist",
    title: "Counter-Terrorist",
    coverLabel: "",
    coverImage: {
      src: "/content/projects/counter-terrorist/cover.jpg",
      alt: "Обложка Counter-Terrorist",
    },
    links: [
      {
        label: "Яндекс Игры",
        href: "https://yandex.ru/games/app/counter-terrorist-272178?lang=ru",
      },
    ],
    repositoryLinks: [
      { label: "GitHub", href: "https://github.com/Ryagich/fps_3" },
    ],
    summary:
      "Небольшой сюжетный одиночный шутер, где оперативник выполняет задания и сражается с противниками под управлением ИИ.",
    description:
      "Подробное описание проекта появится позже.",
    categories: ["web-pc"],
    status: "released",
    publicationStatus: "Разработка завершена. Опубликовано.",
    featured: true,
    technologies: [
      "Unity",
      "C#",
      "NeoFPS",
      "EnemyAI",
      "Yandex Games SDK",
      "Unity Localization",
    ],
    cardTechnologies: ["Unity", "C#"],
    platforms: ["Web / PC"],
    role:
      "Самостоятельная разработка: уровни, сценарная логика и соединение готовых FPS- и AI-пакетов с системами игры и Яндекс Игр.",
    isPlaceholder: true,
    features: [
      "Три игровых уровня и последовательное открытие доступа к ним",
      "Цели, текстовые события, ключи и запертые двери",
      "Патрули, динамический спавн и переключение противников в боевой режим",
      "Указатель цели в интерфейсе и сохранение позиции игрока",
      "Локализация, события аналитики и показ рекламы через SDK Яндекс Игр",
    ],
    solutions: [
      "EnemyController связывает готовый EnemyAI со сценарием уровня: выбирает точки спавна и патруля, ограничивает число противников и переводит их в боевое состояние.",
      "Состояние прохождения хранится в сохранении Яндекс Игр: открытые уровни, позиция игрока на сцене и состояние босса.",
      "TargetPointer переводит мировую цель в экранную подсказку и показывает направление, когда цель остаётся за границей экрана.",
    ],
    sections: [
      {
        id: "counter-terrorist-overview",
        tocTitle: "Три уровня",
        kind: "chapter",
        title: "Браузерный FPS с тремя уровнями и последовательным прохождением.",
        body:
          "Counter-Terrorist опубликован в Яндекс Играх. В Unity-проекте есть отдельные сцены lvl_1, lvl_2 и lvl_3, экран загрузки и меню выбора уровней. Доступ к уровням читается из сохранения, поэтому игра открывает прохождение последовательно.\n\nОсновой шутера служат NeoFPS и EnemyAI. Собственные компоненты связывают их со сценарием: запускают события уровня, создают противников, меняют их поведение и сохраняют результат прохождения.",
        outline: [
          { label: "Уровни", description: "Три игровые сцены: lvl_1, lvl_2 и lvl_3." },
          { label: "Платформа", description: "WebGL-версия опубликована в Яндекс Играх." },
          { label: "Сохранение", description: "Прогресс и состояние отдельных сцен записываются через Yandex Games SDK." },
        ],
      },
      {
        id: "counter-terrorist-scenes",
        tocTitle: "Кадры из игры",
        label: "МАТЕРИАЛЫ ИЗ ЯНДЕКС ИГР",
        kind: "gallery",
        title: "Пять кадров показывают уровни и бой от первого лица.",
        body:
          "Скриншоты и видео опубликованы на странице игры в Яндекс Играх. На них видны окружение уровней, оружие от первого лица и боевые сцены.",
        media: [
          { src: "/content/projects/counter-terrorist/screenshot-01.jpg", alt: "Кадр Counter-Terrorist", caption: "Кадр из опубликованной версии игры." },
          { src: "/content/projects/counter-terrorist/screenshot-02.jpg", alt: "Боевая сцена Counter-Terrorist", caption: "Бой от первого лица." },
          { src: "/content/projects/counter-terrorist/screenshot-03.jpg", alt: "Уровень Counter-Terrorist", caption: "Окружение одного из уровней." },
          { src: "/content/projects/counter-terrorist/screenshot-04.jpg", alt: "Кадр Counter-Terrorist", caption: "Ещё один кадр игрового процесса." },
          { src: "/content/projects/counter-terrorist/screenshot-05.jpg", alt: "Сцена Counter-Terrorist", caption: "Сцена из игры." },
        ],
      },
      {
        id: "counter-terrorist-enemies",
        tocTitle: "Противники и бой",
        label: "СПАВН И СОСТОЯНИЯ",
        kind: "diagram",
        title: "Сценарий уровня управляет числом врагов, точками их появления и переходом в бой.",
        body:
          "EnemyController хранит активных противников, ограничивает их максимальное количество и периодически добавляет новых. Для первого этапа выбираются случайные точки патруля; на следующем этапе используются другой набор точек и другой темп появления. Trigger-зоны могут разово вызвать группу патрульных врагов.\n\nПока сцена находится в Idle, урон по противнику переводит её в Action. После этого EnemyController обновляет параметры боя у активных StateController из EnemyAI. Готовый AI-пакет отвечает за базовое поведение врага; сценарный код задаёт, когда и где это поведение используется.",
        flow: [
          { label: "Idle", description: "Сцена ждёт первого боевого события." },
          { label: "Урон врагу", description: "EnemyController меняет состояние сцены на Action." },
          { label: "Action", description: "Активные враги получают параметры обзора, дистанции и угла боя." },
          { label: "Спавн", description: "Новые противники получают цель, точки патруля и текущие настройки боя." },
        ],
      },
      {
        id: "counter-terrorist-progression",
        tocTitle: "Цели и прогресс",
        label: "ЗАДАНИЯ, УКАЗАТЕЛЬ И СОХРАНЕНИЯ",
        kind: "text",
        title: "Цели уровня соединяют текст задания, направление на экране и сохранённое состояние прохождения.",
        body:
          "TaskManager хранит текущий текст задачи и обновляет его после завершения вывода реплик. TargetPointer получает мировую цель, переводит её в экранные координаты и меняет иконку: внутри кадра видна обычная метка, за пределами экрана — стрелка в сторону цели.\n\nTextCloseDoor проверяет ключи в инвентаре: при успехе открывает дверь и меняет задание, при отсутствии ключа показывает другой текст. PlayerPlaceSaver сохраняет координаты героя отдельно для каждой сцены. OpenLVLChecker читает из сохранения список открытых уровней, BossStateController запоминает, жив ли босс. Эти значения сохраняются через Yandex Games SDK.",
        details: [
          { title: "Задание", body: "TaskManager принимает новый текст цели, а TriggerText и связанные события запускают его обновление." },
          { title: "Дверь", body: "TextCloseDoor проверяет ключи через интерфейс инвентаря NeoFPS и меняет текст события в зависимости от результата." },
          { title: "Возврат в игру", body: "Сохранение восстанавливает позицию игрока, открытые уровни и состояние босса." },
        ],
      },
      {
        id: "counter-terrorist-platform",
        tocTitle: "Версия для Яндекс Игр",
        label: "WEBGL-ПУБЛИКАЦИЯ",
        kind: "text",
        title: "Сборка подключена к возможностям площадки: сохранениям, языку окружения, рекламе и событиям.",
        body:
          "LanguageSwitcher выбирает локаль Unity по языку, который отдаёт SDK Яндекс Игр. AdsManager запускает полноэкранную рекламу с таймером между показами. YaStats и YaDeathStats отправляют события, включая название сцены и смерть игрока.\n\nЭто отдельный слой вокруг игрового FPS: он делает WebGL-версию пригодной для публикации на площадке и не смешивает механику уровня с кодом платформы.",
      },
    ],
    developmentStartedAt: "2023-10-04T00:00:00Z",
    developmentEndedAt: "2023-11-19T00:00:00Z",
    popupMedia: [
      { src: "/content/projects/counter-terrorist/cover.jpg", alt: "Обложка Counter-Terrorist", caption: "Обложка опубликованной версии." },
      { src: "/content/projects/counter-terrorist/screenshot-02.jpg", alt: "Боевая сцена Counter-Terrorist", caption: "Бой от первого лица." },
    ],
  },
  {
    id: "zombies-in-minori",
    slug: "zombies-in-minori",
    title: "Zombies in Minori",
    coverLabel: "",
    links: [{ label: "itch.io", href: "https://moody-dust.itch.io/zombie-shooter" }],
    repositoryLinks: [{ label: "GitHub", href: "https://github.com/Ryagich/3D-Shooter" }],
    summary: "Шутер про выживание среди зомби на одной улице города Минори.",
    description: "Zombies in Minori — шутер про выживание среди зомби на одной улице города Минори. В нём собраны зомби, оружие, предметы, инвентарь и шкалы выживания. Я сам моделировал окружение и предметы; модели оружия взяты из открытых ассетов.\n\nДвижение ощущается скользким, стрельба и интерфейс требуют полной переработки, инвентарь содержит баги. В проекте появились механики, к которым я затем возвращался в следующих играх — уже с новым кодом и другим уровнем реализации.",
    categories: ["web-pc"],
    status: "released",
    publicationStatus: "Разработка завершена. Опубликовано.",
    featured: true,
    technologies: ["Unity", "C#"],
    cardTechnologies: ["Unity", "C#"],
    platforms: ["Web / PC"],
    role: "Самостоятельная разработка: код игровых систем, моделирование окружения, предметов и интерьеров, сборка сцен и интерфейса.",
    features: [
      "Одна игровая улица города Минори с домами и доступным интерьером",
      "Зомби с NavMesh-перемещением, поиском игрока и атакой",
      "Огнестрельное и ближнее оружие, режимы огня, отдача и перезарядка",
      "Сетчатый инвентарь, экипировочные слоты, стопки предметов и выброс в мир",
      "Предметы в руке, еда, здоровье, выносливость, голод, жажда и иммунитет",
    ],
    solutions: [
      "Инвентарь разделён на модели предметов и контейнеров, контроллеры операций и UI-представления.",
      "Оружие использует отдельные компоненты для стрельбы, патронов, пуль, отдачи, интерфейса и анимации.",
      "Зомби переключает состояния случайного движения, преследования и атаки по дистанции, зрению и слуху.",
    ],
    sections: [],
    developmentStartedAt: "2022-10-13T14:20:24Z",
    developmentEndedAt: "2023-05-29T15:14:09Z",
    coverImage: {
      src: "/content/projects/zombies-in-minori/zombies-MinoriFromMyGame.jpg",
      alt: "Улица Минори в Zombies in Minori",
    },
    popupMedia: [
      { src: "/content/projects/zombies-in-minori/zombies-MinoriFromMyGame.jpg", alt: "Игровая улица города Минори", caption: "Игровая улица с церковью в перспективе." },
      { src: "/content/projects/zombies-in-minori/zombies-Inventory_ex_2.jpg", alt: "Инвентарь и меню предмета", caption: "Сетчатый инвентарь и меню выброса предмета." },
    ],
    popupSections: [
      { title: "Минори", text: "Одна улица города Минори стала основой для игровой сцены. Здания и предметы моделировались вручную." },
      { title: "Выживание", text: "Инвентарь, оружие, еда и шкалы состояния собраны в работающий прототип выживания." },
      { title: "Зомби", text: "Противники используют NavMesh, конечный автомат, зрение, слух и ближнюю атаку." },
    ],
  },
  {
    id: "wizard-game",
    slug: "wizard-game",
    title: "Волшебник",
    coverLabel: "ОБУЧАЮЩАЯ ИГРА",
    summary: "Образовательная игра: начинающий волшебник решает задачи по физике, математике и биологии.",
    description: "Мой второй игровой проект и первый опыт командной разработки: игра сделана для институтского предмета на первом курсе бакалавриата. В игре начинающий волшебник проходит квесты и решает задачи по точным и естественным наукам. Магия объясняется законами физики: например, для получения ключа изо льда нужно рассчитать энергию для его плавления.\n\nПроект сделан на RPG Maker MV.",
    categories: ["web-pc"],
    status: "released",
    publicationStatus: "Разработка завершена. Опубликовано.",
    featured: true,
    technologies: ["RPG Maker MV", "JavaScript", "HTML"],
    cardTechnologies: ["RPG Maker MV"],
    platforms: ["Web / PC"],
    role: "Участник команды.",
    features: [],
    solutions: [],
    sections: [],
    developmentStartedAt: "2021-04-19T13:09:28Z",
    developmentEndedAt: "2021-06-16T06:11:20Z",
    links: [{ label: "Играть", href: "https://tripletri.github.io/WizardGameBrowser/" }],
    repositoryLinks: [{ label: "GitHub", href: "https://github.com/Tripletri/WizardGame/tree/main" }],
    coverImage: {
      src: "/content/projects/wizard-game/wizard-game-cover.png",
      alt: "Сцена из игры Волшебник",
    },
    popupSections: [
      { title: "Идея игры", text: "Начинающий волшебник проходит квесты и получает знания, нужные для решения следующих задач." },
      { title: "Задания", text: "Головоломки связаны с физикой, математикой и биологией. Магия строится на физических законах." },
      { title: "Движок", text: "Проект собран на RPG Maker MV: события, карты и игровые данные создаются средствами движка." },
    ],
  },
  {
    id: "reigns-zombie-survival",
    slug: "reigns-zombie-survival",
    title: "Reigns Zombie Survival",
    coverLabel: "",
    links: [
      {
        label: "itch.io",
        href: "https://moody-dust.itch.io/reigns-zombie-survival",
      },
    ],
    coverImage: {
      src: "/content/projects/reigns-zombie-survival/reigns-zombie-survival-cover.png",
      alt: "Иконка Reigns Zombie Survival с рукой зомби у надгробия",
    },
    summary: "Описание проекта появится позже.",
    description: "Подробное описание проекта появится позже.",
    categories: ["web-pc", "mobile"],
    status: "released",
    publicationStatus: "Разработка завершена. Частично снято с публикации.",
    featured: true,
    technologies: ["Unity", "C#"],
    cardTechnologies: ["Unity", "C#"],
    platforms: ["Web / PC", "Мобильные"],
    role: "",
    features: [],
    solutions: [],
    sections: [],
    developmentEndedAt: "2022-01-10T00:00:00Z",
    isPlaceholder: true,
  },
  {
    id: "primal-civilisation",
    slug: "primal-civilisation",
    title: "Primal Civilisation",
    coverLabel: "",
    summary: "Описание проекта появится позже.",
    description: "Подробное описание проекта появится позже.",
    categories: ["web-pc"],
    status: "released",
    publicationStatus: "Разработка завершена. Не опубликовано.",
    featured: true,
    technologies: ["C#", "Windows Forms"],
    cardTechnologies: ["C#", "Windows Forms"],
    platforms: ["Web / PC"],
    role: "",
    features: [],
    solutions: [],
    sections: [],
    repositoryLinks: [
      {
        label: "GitHub",
        href: "https://github.com/Ryagich/PrimalCivilisation",
      },
    ],
    isPlaceholder: true,
  },
  {
    id: "fps-4-7",
    slug: "fps-4-7",
    title: "FPS 4–7",
    coverLabel: "",
    summary:
      "Серия шутеров, где каждая следующая игра развивает предыдущую: сохраняет основу и получает новые механики.",
    description:
      "FPS 4–7 — серия отдельных шутеров в одном репозитории. Каждая ветка представляет отдельную игру: после публикации предыдущая версия становится основой для следующей. Новая ветка сохраняет работающие системы, затем получает новые уровни, сценарии и механики.\n\nВ серию входят ветки FPS_4, FPS_5, FPS_6 и FPS_7. Такой процесс позволил последовательно развивать игру, не начиная каждый проект с нуля.",
    categories: ["web-pc"],
    status: "released",
    publicationStatus: "Разработка завершена. Частично снято с публикации.",
    featured: true,
    technologies: [
      "Unity",
      "C#",
      "NeoFPS",
      "EnemyAI",
      "Yandex Games SDK",
      "Unity Localization",
    ],
    cardTechnologies: ["Unity", "C#"],
    platforms: ["Web / PC"],
    role: "",
    features: [
      "FPS_4, FPS_5, FPS_6 и FPS_7 — отдельные игры в ветках одного репозитория.",
    ],
    solutions: [],
    sections: [],
    developmentStartedAt: "2023-12-30T00:01:06Z",
    developmentEndedAt: "2024-05-04T19:14:16Z",
    repositoryLinks: [{ label: "GitHub", href: "https://github.com/Ryagich/FPS" }],
    isPlaceholder: true,
  },
  {
    id: "fps-roguelike-1",
    slug: "fps-roguelike-1",
    title: "FPS Roguelike 1",
    coverLabel: "",
    summary:
      "FPS-рогалик развивает идеи серии FPS 4–7. Новый набор механик сделал его отдельной игрой.",
    description:
      "FPS Roguelike 1 развивает идеи серии FPS 4–7 и переносит их в формат FPS-рогалика. Ветка FPS_Roguelike_1 получила собственный набор механик и систем, поэтому выросла в отдельную игру.",
    categories: ["web-pc"],
    status: "released",
    publicationStatus: "Разработка завершена.",
    featured: true,
    technologies: [
      "Unity",
      "C#",
      "NeoFPS",
      "EnemyAI",
      "Yandex Games SDK",
      "Unity Localization",
    ],
    cardTechnologies: ["Unity", "C#"],
    platforms: ["Web / PC"],
    role: "",
    features: [
      "FPS_Roguelike_1 — отдельная ветка с собственным набором игровых систем.",
    ],
    solutions: [],
    sections: [],
    developmentStartedAt: "2024-02-22T19:41:51Z",
    developmentEndedAt: "2024-12-20T20:05:43Z",
    developmentPeriods: [
      {
        startedAt: "2024-10-26T00:24:54Z",
        endedAt: "2024-12-20T20:05:43Z",
      },
      {
        startedAt: "2023-12-07T13:06:25Z",
        endedAt: "2024-05-09T21:46:41Z",
      },
    ],
    repositoryLinks: [
      {
        label: "GitHub",
        href: "https://github.com/Ryagich/FPS/tree/FPS_Roguelike_1",
      },
    ],
    isPlaceholder: true,
  },
  {
    id: "untold-adventure-platformer",
    slug: "untold-adventure-platformer",
    title: "Untold Adventure: Platformer",
    coverLabel: "",
    coverImage: {
      src: "/content/projects/untold-adventure-platformer/PlatformerTitle.png",
      alt: "Экран заголовка Untold Adventure: Platformer",
    },
    popupMedia: [
      {
        src: "/content/projects/untold-adventure-platformer/PlatformerTitle.png",
        alt: "Экран заголовка Untold Adventure: Platformer",
        caption: "Экран заголовка.",
      },
      {
        src: "/content/projects/untold-adventure-platformer/PlatformerCastle1.png",
        alt: "Замок в Untold Adventure: Platformer",
        caption: "Локация с замком.",
      },
      {
        src: "/content/projects/untold-adventure-platformer/PlatformerForest1.png",
        alt: "Лесная локация в Untold Adventure: Platformer",
        caption: "Лесная локация.",
      },
      {
        src: "/content/projects/untold-adventure-platformer/PlatformerCastSpellInForest.png",
        alt: "Применение заклинания в лесу в Untold Adventure: Platformer",
        caption: "Применение заклинания в лесу.",
      },
      {
        src: "/content/projects/untold-adventure-platformer/Platformer3Location.png",
        alt: "Игровая локация в Untold Adventure: Platformer",
        caption: "Игровая локация.",
      },
      {
        src: "/content/projects/untold-adventure-platformer/Platformer3LocationWithUI.png",
        alt: "Игровая локация с интерфейсом в Untold Adventure: Platformer",
        caption: "Игровая локация с интерфейсом.",
      },
    ],
    summary: "Описание проекта появится позже.",
    description: "Подробное описание проекта появится позже.",
    categories: ["mobile"],
    status: "released",
    publicationStatus: "Разработка завершена. Снято с публикации.",
    featured: true,
    technologies: [],
    cardTechnologies: [],
    platforms: ["Мобильные"],
    role: "",
    features: [],
    solutions: [],
    sections: [],
    developmentStartedAt: "2022-01-09T00:00:00Z",
    developmentEndedAt: "2023-07-27T00:00:00Z",
    isPlaceholder: true,
  },
  {
    id: "save-the-planet-2d-shooter",
    slug: "save-the-planet-2d-shooter",
    title: "GMO Shooter",
    coverLabel: "",
    links: [{ label: "itch.io", href: "https://moody-dust.itch.io/stop-squares" }],
    repositoryLinks: [{ label: "GitHub", href: "https://github.com/Ryagich/GMO_Shooter" }],
    coverImage: {
      src: "/content/projects/gmo-shooter/save-the-planet-cover.png",
      alt: "Иллюстрация GMO Shooter",
    },
    summary:
      "2D-шутер о бобре-садовнике, который защищает свой сад от мутировавших овощей.",
    description:
      "Во время сбора урожая на бобра-садовника нападают мутировавшие овощи. След ведёт от сада к подземному колодцу, затем к заводу, который отравлял воду в реке. В финале герой противостоит суперкомпьютеру, управляющему предприятием.\n\nОпубликованная версия включает сад с волнами врагов и отдельную сцену с боссом-суперкомпьютером. Подземный этап и завод остались частью запланированного продолжения.",
    developmentStartedAt: "2022-09-19T10:41:07Z",
    developmentEndedAt: "2022-12-26T18:01:06Z",
    categories: ["web-pc"],
    status: "in-development",
    publicationStatus: "Разработка приостановлена. Опубликовано.",
    featured: true,
    technologies: ["Unity", "C#"],
    cardTechnologies: ["Unity", "C#"],
    platforms: ["Web / PC"],
    role:
      "Самостоятельная разработка игрового процесса, контента, интерфейсов, кода и графики.",
    features: [
      "Сад с волнами мутировавших овощей и отдельная сцена с боссом-суперкомпьютером",
      "Пистолеты, винтовки и дробовики с боеприпасами и автоматической сменой оружия",
      "Контейнеры с монетами, аптечками, боеприпасами и взрывными предметами",
      "Меню покупки оружия и улучшений",
      "Сохранение денег, разблокированного оружия, улучшений и прогресса уровней",
      "Управление с клавиатуры и мыши, экранные кнопки и виртуальный стик",
    ],
    solutions: [
      "Уровни, волны, оружие и улучшения описаны ScriptableObject-ассетами, поэтому их параметры настраиваются без изменения игровых скриптов.",
      "Сохранение хранит идентификаторы ассетов и восстанавливает выбранное оружие, доступные улучшения, деньги и прогресс прохождения.",
      "Босс получает набор атак через UnityEvent и выбирает их по текущему запасу здоровья.",
    ],
    popupSections: [
      {
        title: "История и готовая версия",
        text: "Бобр-садовник защищает сад от мутировавших овощей и выходит на след источника заражения реки. В опубликованной версии доступен первый этап и отдельная сцена с боссом-суперкомпьютером.",
      },
      {
        title: "Бой и добыча",
        text: "Враги приходят волнами. Контейнеры сбрасывают монеты, здоровье, боеприпасы и взрывные предметы, формируя короткий цикл между сражениями и усилением персонажа.",
      },
      {
        title: "Прогресс",
        text: "Оружие, улучшения, деньги и прогресс уровней собраны в модели сохранения. Данные оружия, волн и предметов оформлены как ScriptableObject-ассеты.",
      },
      {
        title: "Графика",
        text: "Все иллюстрации созданы вручную: сначала наброски на бумаге, затем фотографии набросков и перерисовка в векторе на ПК.",
      },
    ],
    sections: [
      {
        id: "story",
        title: "История и структура игры",
        kind: "chapter",
        body:
          "История начинается в саду: бобр собирает урожай, когда на него нападают мутировавшие овощи. Расследование приводит героя к отравленной реке и источнику загрязнения.\n\nСюжет задуман как путь через три разные среды. Реализован первый этап с овощными противниками и отдельная битва с суперкомпьютером. Колодец и завод сохраняют направление для продолжения проекта.",
        outline: [
          {
            label: "Сад",
            description:
              "Первый этап: волны мутировавших овощей, добыча из контейнеров и развитие оружия.",
          },
          {
            label: "Колодец",
            description:
              "Запланированный подземный этап с новыми противниками, которые перемещаются по полу и потолку.",
          },
          {
            label: "Завод",
            description:
              "Запланированный финальный этап с роботами и боем против суперкомпьютера, отравляющего воду.",
          },
        ],
        media: [
          {
            src: "/content/projects/gmo-shooter/gmo-vegetable-fight.png",
            alt: "Скриншот первого этапа в саду",
            caption: "Бой с мутировавшими овощами в саду",
          },
        ],
      },
      {
        id: "combat-loop",
        title: "Бой, волны и добыча",
        kind: "chapter",
        body:
          "Волна хранит префаб противника, количество и длительность. Спавнер запускает следующую волну в середине текущей, поэтому давление на игрока нарастает постепенно.\n\nГерой собирает выпадающие предметы через физические столкновения. Монеты идут на открытия, аптечки восстанавливают здоровье, боеприпасы переключают активное оружие на подходящий тип.",
        details: [
          {
            title: "Противники",
            body:
              "Овощи получают здоровье, движение к герою, контактный урон, реакцию на попадание и эффект разрезания после смерти.",
          },
          {
            title: "Контейнеры",
            body:
              "Падающие ящики существуют ограниченное время. После разрушения они создают несколько предметов с физическим разлётом.",
          },
          {
            title: "Оружие",
            body:
              "Инвентарь создаёт пистолет, винтовку и дробовик из выбранных данных. Когда боеприпасы заканчиваются, выбирается доступный вариант с наибольшим DPS.",
          },
        ],
        flow: [
          {
            label: "Волна",
            description:
              "Данные волны задают тип противника, количество и длительность появления.",
          },
          {
            label: "Бой",
            description:
              "Противники движутся к герою, наносят контактный урон и реагируют на попадания.",
          },
          {
            label: "Контейнеры",
            description:
              "Падающие ящики разрушаются от урона и выбрасывают предметы на арену.",
          },
          {
            label: "Добыча",
            description:
              "Герой получает здоровье, монеты, боеприпасы или взрывной предмет для следующей волны.",
          },
        ],
      },
      {
        id: "progression",
        title: "Оружие, улучшения и сохранения",
        kind: "chapter",
        body:
          "Параметры оружия, волн, уровней и улучшений вынесены в ScriptableObject-ассеты. Игровые сцены получают готовые данные из Resources и используют их для построения боёв, магазина и контейнеров.\n\nМодель сохранения объединяет деньги, открытый уровень и волну, доступное оружие, выбранные типы оружия и улучшения. Данные сериализуются в JSON и записываются в PlayerPrefs.",
        details: [
          {
            title: "Оружие",
            body:
              "WeaponInfo хранит префаб, иконку, стоимость, категорию и статус открытия. Меню использует эти данные для выбора и покупки.",
          },
          {
            title: "Улучшения",
            body:
              "StatUpdate отвечает за характеристики героя. BoxUpdate задаёт параметры падения контейнеров и их содержимого.",
          },
          {
            title: "Модель сохранения",
            body:
              "Сериализатор сопоставляет идентификаторы из сохранения с ScriptableObject-ассетами, затем менеджер собирает состояние сессии.",
          },
        ],
        flow: [
          {
            label: "Данные контента",
            description:
              "Оружие, волны, уровни и улучшения существуют как отдельные ассеты.",
          },
          {
            label: "Игровая сессия",
            description:
              "Сцена и интерфейс получают выбранное оружие, открытые данные и параметры улучшений.",
          },
          {
            label: "SaveModel",
            description:
              "Модель собирает деньги, прогресс уровней, оружие и улучшения по их идентификаторам.",
          },
          {
            label: "PlayerPrefs",
            description:
              "JSON хранит модель локально, затем сериализатор находит нужные ассеты для новой сессии.",
          },
        ],
      },
      {
        id: "boss",
        title: "Босс-суперкомпьютер",
        kind: "chapter",
        body:
          "Финальный босс собран в отдельной сцене. Контроллер отслеживает долю здоровья и открывает новые атаки по мере боя. Список действий настраивается через UnityEvent, поэтому атаки остаются настройкой сцены.\n\nВ наборе поведения есть перемещение по арене, рывок к позиции игрока, лазерные атаки и руки-спутники. После уничтожения крупной руки появляются более мелкие противники.",
        details: [
          {
            title: "Фазы",
            body:
              "Порог здоровья выбирает доступный набор состояний и одновременно сокращает паузу между атаками.",
          },
          {
            title: "Руки",
            body:
              "Контроллер создаёт крупные руки вокруг босса, собирает их в круг и заменяет уничтоженную руку несколькими маленькими.",
          },
          {
            title: "Лазеры",
            body:
              "Лазерный контроллер создаёт атаку в случайной позиции арены или прямо над героем.",
          },
        ],
        flow: [
          {
            label: "Здоровье",
            description:
              "Контроллер отслеживает долю оставшегося здоровья суперкомпьютера.",
          },
          {
            label: "Фаза",
            description:
              "Порог здоровья открывает новые состояния и сокращает паузу между атаками.",
          },
          {
            label: "Атака",
            description:
              "UnityEvent запускает выбранное действие сцены: движение, руки или лазеры.",
          },
          {
            label: "Давление на игрока",
            description:
              "Атаки создают новые угрозы на арене и меняют темп боя до следующей смены фазы.",
          },
        ],
        media: [
          {
            src: "/content/projects/gmo-shooter/gmo-boss-fight.png",
            alt: "Скриншот боя с суперкомпьютером",
            caption: "Бой с суперкомпьютером на заводе",
          },
        ],
      },
      {
        id: "visual-style",
        title: "Авторская графика",
        kind: "chapter",
        body:
          "Визуальный стиль проекта собран вручную. Персонажи, овощи, роботы, оружие, контейнеры, интерфейс и фоны начались с рисунков на бумаге. Наброски были сфотографированы, затем перерисованы в векторе на ПК и подготовлены для Unity.\n\nЭтот процесс задал единый рисунок игре и позволил сделать контент проекта частью самостоятельной работы, от первого эскиза до спрайта в сцене.",
      },
      {
        id: "development-history",
        title: "Развитие проекта",
        kind: "chapter",
        body:
          "История Git содержит 27 коммитов с сентября по декабрь 2022 года. По ней виден путь от основы 2D-шутера к первому уровню, боссу и интерфейсу магазина.",
        outline: [
          {
            label: "Сентябрь",
            description:
              "Основа проекта, оружие, первые векторные ассеты и переработка системы попаданий.",
          },
          {
            label: "Начало октября",
            description:
              "Графика первого уровня, волны противников, контейнеры с добычей и управление для мобильных устройств.",
          },
          {
            label: "Босс",
            description:
              "Сцена с суперкомпьютером, состояния атак, спрайты босса, руки-спутники и лазеры с предупреждением.",
          },
          {
            label: "Ноябрь и декабрь",
            description:
              "Новый контент, интерфейс магазина и финальные правки Unity UI Toolkit и сцен.",
          },
        ],
      },
      {
        id: "gameplay-video",
        title: "Демонстрация игрового процесса",
        kind: "video",
        body:
          "Первый этап, контейнеры с добычей, смена оружия и бой с боссом.",
        media: [
          {
            alt: "Видео игрового процесса GMO Shooter",
            caption: "[Видео: сад, волны, добыча и босс]",
          },
        ],
      },
    ],
    isPlaceholder: false,
  },
];
export const toolCategoryLabels = { all: "Все", graph: "Графовые" } as const;
export const tools: Tool[] = [
  {
    id: "dialog-editor",
    slug: "dialog-editor",
    title: "Редактор диалогов",
    coverLabel: "UNITY EDITOR TOOL",
    coverImage: {
      src: "/content/tools/dialogue-editor/dialogue-quest-demo.jpg",
      alt: "Окно редактора диалогов в Unity",
    },
    summary: "Инструмент Unity Editor для авторинга диалогов в RPG.",
    description:
      "Диалоговый редактор собирает фразы, ответы, условия и игровые последствия в граф. Его используют для разговоров, сцен и интерактивных объектов RPG, когда ход диалога зависит от состояния мира.",
    technologies: ["Unity", "C#", "UI Toolkit", "ScriptableObject"],
    capabilities: [
      "Граф реплик и ответов с отдельной точкой входа",
      "Локализация и случайные варианты одной реплики",
      "Условия и действия: квесты, деньги, предметы и флаги",
      "Темы разговора, квестовые ответы, возврат и выход",
      "Форсированные реплики с приоритетом",
      "Проверка ссылок и поиск изолированных фраз",
    ],
    popupSections: [
      {
        title: "Структура разговора",
        text: "Фразы и ответы образуют граф с точкой входа, тематическими ветками и выходами из диалога.",
      },
      {
        title: "Правила выбора",
        text: "Условия проверяют состояние игрока и мира, затем подтверждённый ответ применяет свои последствия.",
      },
      {
        title: "Сценарный контроль",
        text: "Квестовые и принудительные реплики задают приоритет разговора и порядок обязательных сцен.",
      },
      {
        title: "Проверка структуры",
        text: "Редактор показывает нарушенные ссылки, изолированные фразы и связи, созданные runtime-правилами.",
      },
    ],
    categories: ["graph"],
    relatedProjectIds: ["rpg"],
    sections: [
      {
        id: "dialog-as-system",
        label: "ЗАДАЧА",
        title: "Диалог — часть игровой логики",
        kind: "text",
        body: "В RPG разговор меняет состояние мира: игрок берёт задание, тратит деньги, отдаёт предмет, открывает следующий этап квеста или получает новую информацию. Диалоговая система учитывает условия, последствия выбора и правила, по которым она показывает доступные ответы.\n\nРедактор собирает эту логику в граф. Сценарист видит ход разговора, а программист получает данные, с которыми работает runtime-система. Диалог хранится как набор Unity-ассетов и может развиваться вместе с квестами и другими системами проекта.",
      },
      {
        id: "dialog-lifecycle",
        label: "ЖИЗНЕННЫЙ ЦИКЛ",
        title: "От взаимодействия с NPC до сохранения игры",
        kind: "text",
        body: "При взаимодействии NPC сначала проверяет, есть ли для игрока форсированная реплика. Если такой ветки нет, открывается обычный диалог. DialogueContext получает цель взаимодействия, информацию о персонаже, граф, инвентарь, деньги, фракцию и начальную фразу.\n\nТекст текущей фразы выбирается один раз через GetRandomText и сохраняется в контексте. Поэтому история разговора, интерфейс и отладочный trace используют один и тот же вариант локализованной реплики. DialoguePage показывает реплику NPC, запрашивает доступные ответы, применяет выбор игрока и переводит контекст на следующую фразу. После завершения DialogueExitController запускает обычный выход из игрового режима, а DialogueSaveCoordinator создаёт checkpoint для завершённого диалога, если это не отключено в настройках графа.",
      },
      {
        id: "data-model",
        label: "МОДЕЛЬ ДАННЫХ",
        title: "Граф хранит топологию, фразы хранят содержимое",
        kind: "code",
        body: "DialogGraph содержит список узлов и стартовую фразу. Узел хранит координату на полотне и ссылку на DialogPhrase. Сама фраза — отдельный ScriptableObject: в ней находятся локализованный текст, варианты текста, ответы, игровые события и параметры сценарной ветки.\n\nТакое устройство сохраняет структуру разговора отдельно от содержимого реплик. Координаты узлов нужны редактору, а runtime использует связи между фразами и настройки ответов.",
        language: "csharp",
        code: `public class DialogGraph : ScriptableObject
{
    public List<DialogNode> Nodes = new();

    [field: SerializeField] public DialogPhrase EntryPhrase { get; private set; }
}

[System.Serializable]
public class DialogNode
{
    public Vector2 Position;
    public DialogPhrase Phrase;
}`,
      },
      {
        id: "node-types",
        label: "НОДЫ",
        title: "Один тип узла, несколько ролей в разговоре",
        kind: "text",
        body: "На полотне все элементы представлены одним типом DialogNode: он ссылается на DialogPhrase и хранит позицию. Роль узла задаётся флагами фразы. Благодаря этому у редактора единые механики создания, перемещения, выбора цели и отрисовки связей, а предметная семантика видна через заголовок, цвет и бейджи.\n\nСтартовая фраза хранится в самом DialogGraph и не требует отдельного класса узла. Квестовые и служебные фразы остаются обычными ассетами, но runtime добавляет их в разговор по своим правилам. Редактор знает эти правила и учитывает такие связи при построении и проверке графа.",
        details: [
          {
            title: "Стартовая фраза",
            body: "EntryPhrase открывается при обычном разговоре. Она является регулярной точкой выбора: здесь система добавляет темы, квестовые ответы и действие выхода.",
          },
          {
            title: "Обычная реплика",
            body: "Показывает текст NPC и собственный список ответов. Каждый ответ ведёт к следующей фразе либо завершает разговор.",
          },
          {
            title: "Квестовая фраза",
            body: "Хранит QuestAnswer. В регулярной точке выбора этот ответ появляется автоматически, когда выполнены его условия.",
          },
          {
            title: "Тема разговора",
            body: "Хранит ConversationAnswer и открывает переиспользуемую тематическую ветку: например, вопрос о персонаже, месте или текущем событии.",
          },
          {
            title: "Возврат к выбору",
            body: "Conversation Return Action добавляется внутри ветки темы и ведёт к указанной фразе. У действия есть собственные текст и условия.",
          },
          {
            title: "Выход из диалога",
            body: "Dialogue Exit Action добавляется в регулярных точках выбора и в терминальных репликах, когда других доступных ответов нет.",
          },
          {
            title: "Форсированная квестовая реплика",
            body: "При взаимодействии выбирается среди доступных обязательных сцен. Для порядка запуска используется числовой приоритет.",
          },
        ],
      },
      {
        id: "authoring",
        label: "АВТОРИНГ",
        title: "Настройка ветки в контексте всего разговора",
        kind: "text",
        body: "В окне можно создать граф, добавить новую фразу как ассет или подключить существующую. Для каждого ответа задаются текст, условия, события, следующая фраза и действие выхода. Цель выбирается через поле ссылки или прямо на полотне: после нажатия на кнопку связи доступные узлы подсвечиваются.\n\nУзел показывает русскоязычный preview локализованной строки, поддерживает альтернативные варианты текста и разворачиваемые настройки ответов. Визуальные маркеры различают стартовую реплику, квестовую ветку, тему разговора, действие возврата, выход и фразу без входящих ссылок.",
      },
      {
        id: "canvas-connections",
        label: "ПОЛОТНО РЕДАКТОРА",
        title: "На граф выводятся прямые и вычисляемые связи",
        kind: "code",
        body: "Диалоговый редактор работает поверх общего RetainedGraphCanvas из графовой платформы. Адаптер передаёт ему ноды, их позиции, стили и соединения. Прямые соединения строятся из обычных ответов, квестового ответа, входа в тему, возврата и выхода.\n\nВозврат из тематической ветки добавляется runtime-слоем в зависимости от текущей фразы. Редактор рассчитывает такую связь отдельно и выводит её на полотно. Поэтому схема показывает не только ссылки, которые автор ввёл вручную, но и навигацию, которую получит игрок.",
        language: "csharp",
        code: `private static IEnumerable<DialogAnswer> GetConnectionAnswers(DialogPhrase phrase)
{
    if (phrase == null)
        yield break;

    foreach (DialogAnswer answer in phrase.Answers)
        yield return answer;

    if (phrase.IsQuestPhrase)
        yield return phrase.QuestAnswer;

    if (phrase.IsConversationTopic)
        yield return phrase.ConversationAnswer;

    if (phrase.IsConversationReturnAction)
        yield return phrase.ConversationReturnAnswer;

    if (phrase.IsDialogueExitAction)
        yield return phrase.DialogueExitAnswer;
}`,
      },
      {
        id: "runtime-answers",
        label: "RUNTIME",
        title: "Ответы собираются перед показом игроку",
        kind: "code",
        body: "DialogueAnswerProvider формирует доступные ответы: он берёт обычные ответы текущей фразы, добавляет квестовые варианты и темы разговора в точках выбора, затем — возврат из темы и выход из диалога. В интерфейс попадает уже готовый список вариантов.\n\nПравила показа ответов находятся в одном сервисе. Экран диалога рисует список, выполняет выбранное действие и запрашивает следующий набор вариантов.",
        language: "csharp",
        code: `public IReadOnlyList<DialogueAnswerOption> GetVisibleAnswers(DialogPhrase phrase)
{
    var visibleAnswers = new List<DialogueAnswerOption>();
    if (phrase == null)
        return visibleAnswers;

    AddPhraseAnswers(visibleAnswers, phrase);

    DialogGraph currentDialog = dialogueContext.CurrentDialog;
    bool isRegularChoicePoint = currentDialog != null && currentDialog.IsRegularChoicePoint(phrase);
    if (isRegularChoicePoint)
        AddRegularChoiceAnswers(visibleAnswers, phrase, currentDialog);

    AddConversationReturnAnswers(visibleAnswers, phrase, currentDialog);
    AddExitAnswers(visibleAnswers, phrase, currentDialog, isRegularChoicePoint, visibleAnswers.Count != 0);
    return visibleAnswers;
}`,
      },
      {
        id: "branch-types",
        label: "СЦЕНАРНЫЕ ВЕТВИ",
        title: "Квесты и темы разговора работают как варианты выбора",
        kind: "text",
        body: "Квестовая фраза и тема разговора появляются в обычной точке выбора автоматически, когда выполнены их условия. Для темы можно настроить действие возврата: оно добавляется в доступные реплики внутри её ветки и возвращает игрока к следующей фразе. Действие выхода добавляется в точках выбора и остаётся безопасным выходом из терминальных реплик.\n\nЭти переходы могут не иметь обычной входящей стрелки, поэтому редактор рассматривает их вместе с прямыми ответами. В обходе графа участвуют ответы фразы, квестовый ответ, вход в тему, возврат и выход.",
      },
      {
        id: "gameplay-contract",
        label: "СВЯЗЬ С ИГРОЙ",
        title: "Выбор игрока может изменить квест, инвентарь и состояние мира",
        kind: "code",
        body: "Условие ответа описывает, что нужно проверить или выполнить: выдать и забрать деньги, забрать предмет, добавить квест, перейти по этапу квеста, завершить его, проверить или изменить временный флаг. Проверка учитывает весь набор условий; например, последовательно списываемые предметы и деньги сначала симулируются, чтобы ответ не появился раньше времени.\n\nПеред применением выбранный ответ повторно проверяется. Затем DialogueAnswerExecutionService последовательно выполняет его действия и возвращает presentation-neutral effects: UI использует их для уведомлений о деньгах, предметах и состоянии квеста. Код выполнения отделён от окна диалога и доступен другим точкам приложения.",
        language: "csharp",
        code: `public bool TryExecute(
    bool hasConditions,
    IReadOnlyList<DialogAnswerCondition> conditions,
    out IReadOnlyList<DialogueAnswerExecutionEffect> effects)
{
    var result = new List<DialogueAnswerExecutionEffect>();
    effects = result;
    if (!hasConditions || conditions == null)
        return true;

    if (!DialogueAnswerAvailability.AreConditionsSatisfied(
            hasConditions, conditions, playerInventory,
            playerMoneyStorage, questController, runtimeFlags))
        return false;

    foreach (DialogAnswerCondition condition in conditions)
    {
        if (condition == null)
            continue;

        if (!TryExecuteCondition(condition, result))
        {
            effects = Array.Empty<DialogueAnswerExecutionEffect>();
            return false;
        }
    }

    return true;
}`,
      },
      {
        id: "gameplay-events",
        label: "СОБЫТИЯ",
        title: "Диалог публикует события для игровых систем",
        kind: "text",
        body: "DialogueGameplayEvent — отдельный ScriptableObject-ассет, который автор назначает реплике или ответу. После показа реплики или выбора ответа DialoguePage публикует DialogueGameplayEventRaisedMessage через MessagePipe.\n\nЭта точка расширения используется в проекте сценариями мельницы, лесной встречи с бандитами и обучением. Игровой координатор подписывается на конкретный ассет события и выполняет свою часть сценария: меняет этап мира, запускает встречу или продолжает обучение. Автор диалога выбирает событие из набора контрактов, а система-подписчик остаётся в своём домене.",
      },
      {
        id: "forced-dialogue",
        label: "СЦЕНАРНЫЙ КОНТРОЛЬ",
        title: "Форсированные реплики и управление выходом",
        kind: "text",
        body: "Граф может содержать форсированные квестовые реплики. При взаимодействии NPC-система выбирает среди доступных фраз ту, у которой выше приоритет: меньший номер приоритета запускается раньше. Так один NPC может последовательно провести игрока через несколько обязательных сцен.\n\nВ форсированном разговоре выход закрыт по умолчанию. Отдельная фраза ветки может восстановить возможность выйти; редактор разрешает включить эту настройку только в корректном месте графа. У действия выхода есть флаг продолжения форсированного диалога — после закрытия окна система при необходимости откроет следующую обязательную реплику.",
      },
      {
        id: "integrity",
        label: "ПРОВЕРКА СТРУКТУРЫ",
        title: "Редактор поддерживает целостность графа",
        kind: "text",
        body: "Перед отрисовкой графа редактор удаляет узлы с отсутствующими ассетами, сбрасывает пропавшую стартовую фразу и перестраивает индекс связей. Он показывает ответы без цели, цели, которые не добавлены в текущий граф, и обычные фразы без входящих переходов. Квестовые и служебные узлы исключены из этой проверки: для них входящие варианты создаёт runtime.\n\nПри удалении фразы инструмент проходит по всем авторским связям и очищает ссылки на неё; при замене фразы переносит входящие ссылки на новый ассет. Это избавляет сценариста от ручного поиска зависимостей после перестройки диалога.",
      },
      {
        id: "editor-view",
        label: "ИНСТРУМЕНТ В РАБОТЕ",
        title: "Диалоговый граф в Unity Editor",
        kind: "gallery",
        body: "Рабочее окно редактора: фразы, ответы, специальные ветки и связи находятся на одном полотне.",
        media: [
          {
            src: "/content/tools/dialogue-editor/dialogue-quest-demo.jpg",
            alt: "Графовый редактор диалогов в Unity",
            caption: "Рабочее окно редактора диалогов.",
          },
        ],
      },
    ],
  },
  {
    id: "quest-editor",
    slug: "quest-editor",
    title: "Редактор квестов",
    coverLabel: "UNITY EDITOR TOOL",
    coverImage: {
      src: "/content/tools/quest-editor/quest-editor-graph.jpg",
      alt: "Окно редактора квестов в Unity",
    },
    summary:
      "Инструмент для настройки этапов, переходов и состояния игровых заданий.",
    description:
      "Графовый редактор квестов: автор собирает этапы задания и переходы между ними, а подключённые игровые системы используют эти данные в журнале, диалогах, карте и сценариях мира.",
    technologies: ["Unity", "C#", "UI Toolkit", "ScriptableObjects"],
    capabilities: [
      "Этапы и переходы задания",
      "Условия и автоматические переходы",
      "Настройка журналов, целей и наград",
    ],
    popupSections: [
      {
        title: "Этапы задания",
        text: "Узлы графа описывают текущую задачу, текст журнала, цель на карте и результат этапа.",
      },
      {
        title: "Переходы и условия",
        text: "Автор задаёт связи между этапами, требования перехода и автоматические изменения прогресса.",
      },
      {
        title: "Игровое представление",
        text: "Журнал, карта, уведомления и диалоги читают один объект прогресса конкретного прохождения.",
      },
    ],
    categories: ["graph"],
    relatedProjectIds: ["rpg"],
    sections: [],
  },
  {
    id: "fsm-editor",
    slug: "fsm-editor",
    title: "Редактор FSM",
    coverLabel: "UNITY EDITOR TOOL",
    coverImage: {
      src: "/content/tools/fsm-editor/state-machine-editor.jpg",
      alt: "Окно редактора конечных автоматов в Unity",
    },
    summary:
      "Визуальная настройка состояний, условий и переходов конечного автомата.",
    description:
      "Графовый редактор конечных автоматов: автор собирает состояния и переходы, а runtime исполняет их в контексте конкретного объекта.",
    technologies: ["Unity", "C#", "UI Toolkit", "ScriptableObjects"],
    capabilities: [
      "Состояния, поведения и переходы",
      "Условия All / Any и действия перехода",
      "Проверка ссылок и изолированных состояний",
    ],
    popupSections: [
      {
        title: "Граф поведения",
        text: "Состояния, переходы, условия и поведения сохраняются как авторские данные конечного автомата.",
      },
      {
        title: "Исполнение в игре",
        text: "Runtime-машина создаётся для конкретного объекта и хранит его текущую фазу, время и контекст.",
      },
      {
        title: "Порядок решений",
        text: "Условия переходов проверяются последовательно, затем первое подходящее действие переводит объект в следующее состояние.",
      },
      {
        title: "Целостность графа",
        text: "Редактор помогает найти потерянные ссылки, недостижимые состояния и нарушенные связи.",
      },
    ],
    categories: ["graph"],
    relatedProjectIds: ["rpg"],
    sections: [],
  },
  {
    id: "faction-relations-editor",
    slug: "faction-relations-editor",
    title: "Редактор отношений фракций",
    coverLabel: "UNITY EDITOR TOOL",
    coverImage: {
      src: "/content/tools/faction-relations-editor/faction-relations-editor.jpg",
      alt: "Редактор отношений фракций в Unity",
    },
    summary:
      "Настройка исходных отношений между фракциями и порогов их интерпретации в игре.",
    description:
      "Редактор собирает пары фракций в одну таблицу, задаёт их базовые отношения и синхронизирует данные с набором FactionConfig. Runtime использует эти значения для NPC, диалогов и сценарных событий.",
    technologies: ["Unity", "C#", "UI Toolkit", "ScriptableObjects"],
    capabilities: [
      "Таблица пар фракций и базовых отношений",
      "Пороги враждебности, нейтральности и дружелюбия",
      "Синхронизация с FactionConfig, Undo и сохранение ассета",
    ],
    popupSections: [
      {
        title: "Исходные данные мира",
        text: "Конфигурация хранит базовое отношение каждой пары фракций и правила его интерпретации.",
      },
      {
        title: "Таблица отношений",
        text: "Автор выбирает конфигурацию, задаёт пороги и редактирует числовое значение для каждой пары.",
      },
      {
        title: "Синхронизация пар",
        text: "Инструмент находит FactionConfig, добавляет отсутствующие записи и очищает устаревшие ссылки.",
      },
      {
        title: "Состояние прохождения",
        text: "Runtime создаёт изменяемую копию базовых отношений для NPC, диалогов, событий и сохранений.",
      },
    ],
    categories: [],
    relatedProjectIds: ["rpg"],
    sections: [
      {
        id: "faction-editor-purpose",
        label: "ЗАДАЧА",
        kind: "text",
        title: "Базовые отношения фракций собраны в одном ассете.",
        body: "Отношение между двумя фракциями является исходным правилом мира. NPC используют его при выборе цели, диалоги — при проверке доступности реплик, сценарные события — при изменении состояния прохождения.\n\nРедактор работает с FactionRelationsConfig и показывает каждую пару как отдельную запись. Автор меняет данные мира в одном окне, затем runtime получает согласованный набор исходных значений.",
        outline: [
          {
            label: "FactionConfig",
            description:
              "Отдельный ассет описывает одну фракцию и её постоянный идентификатор.",
          },
          {
            label: "FactionRelationsConfig",
            description:
              "Общий ассет хранит пороги отношений и таблицу пар фракций.",
          },
          {
            label: "RuntimeFactionRelations",
            description:
              "Игровая сессия создаёт изменяемую таблицу из исходных данных для конкретного прохождения.",
          },
        ],
      },
      {
        id: "faction-editor-table",
        label: "РАБОЧЕЕ ОКНО",
        kind: "gallery",
        title: "Таблица показывает пару фракций и её числовое отношение.",
        body: "В верхней части окна выбирается или создаётся FactionRelationsConfig. Ниже находятся пороги, по которым числовое значение получает игровой смысл. Основная таблица содержит левую фракцию, значение отношения и правую фракцию.\n\nПоле отношения записывает изменение через Undo, помечает ассет изменённым и сохраняет его. Поэтому настройка остаётся частью обычного рабочего процесса Unity Editor.",
        media: [
          {
            src: "/content/tools/faction-relations-editor/faction-relations-editor.jpg",
            alt: "Редактор отношений фракций в Unity",
            caption:
              "Таблица базовых отношений, пороги враждебности и дружелюбия, выбор конфигурации и команды синхронизации.",
          },
        ],
        code: `field.RegisterValueChangedCallback(evt =>\n{\n    if (evt.newValue == entry.Relation)\n    {\n        return;\n    }\n\n    Undo.RecordObject(relationsConfig, "Change Faction Relation");\n    relationsConfig.SetRelation(entry.LeftFaction, entry.RightFaction, evt.newValue);\n    EditorUtility.SetDirty(relationsConfig);\n    AssetDatabase.SaveAssets();\n});`,
      },
      {
        id: "faction-editor-sync",
        label: "СИНХРОНИЗАЦИЯ",
        kind: "code",
        title:
          "Новые фракции автоматически получают необходимые пары отношений.",
        body: "Редактор находит все FactionConfig в проекте, упорядочивает их и передаёт список конфигурации отношений. Конфигурация строит ожидаемые уникальные пары, добавляет отсутствующие записи и удаляет записи с потерянными или повторяющимися ссылками.\n\nЭта проверка запускается при открытии окна, ручном обновлении и изменении проекта. Таблица остаётся связанной с актуальным составом фракций без ручного создания каждой пары.",
        code: `public bool SyncWithFactions(IEnumerable<FactionConfig> factionConfigs)\n{\n    var factions = factionConfigs\n        .Where(faction => faction != null)\n        .Distinct()\n        .OrderBy(faction => faction.name)\n        .ToList();\n\n    var expectedPairs = new HashSet<(FactionConfig Left, FactionConfig Right)>();\n    for (var leftIndex = 0; leftIndex < factions.Count; leftIndex++)\n    {\n        for (var rightIndex = leftIndex + 1; rightIndex < factions.Count; rightIndex++)\n        {\n            expectedPairs.Add((factions[leftIndex], factions[rightIndex]));\n        }\n    }\n\n    // Конфигурация добавляет отсутствующие пары и очищает устаревшие записи.\n}`,
      },
      {
        id: "faction-editor-runtime",
        label: "СВЯЗЬ С ИГРОЙ",
        kind: "code",
        title:
          "Runtime использует копию исходных отношений для конкретного прохождения.",
        body: "RuntimeFactionRelations создаётся из FactionRelationsConfig в начале игровой сессии. Игровые события изменяют только runtime-таблицу, затем сохранение записывает её снимок. Исходный ассет остаётся базой для нового прохождения.\n\nПороги задают интерпретацию значения. Система отношений возвращает враждебность или дружелюбие по текущему значению пары; NPC и диалоги получают этот результат через общий интерфейс.",
        code: `public bool TryChangeRelation(FactionConfig leftFaction, FactionConfig rightFaction, int amount)\n{\n    if (amount == 0 || leftFaction == null || rightFaction == null || leftFaction == rightFaction)\n    {\n        return false;\n    }\n\n    var pair = new FactionPair(leftFaction, rightFaction);\n    relations[pair] = GetRelation(leftFaction, rightFaction) + amount;\n    Changed?.Invoke();\n    return true;\n}`,
      },
    ],
  },
];
export const dialogEditorStorySections: ContentSection[] = [
  {
    id: "dialog-editor-purpose",
    label: "ЗАДАЧА",
    title: "Диалог как редактируемая модель игры",
    kind: "text",
    body: "В RPG разговоры связывают сценарий с состоянием мира. Реплика может открыть тему, выдать квест, проверить предметы или деньги, изменить этап задания, запустить игровое событие. Поэтому данные диалога собраны в ориентированный граф: узлы хранят фразы, связи описывают доступные ответы и переходы между ними.\n\nРедактор даёт автору целостную карту разговора. Структура видна до запуска игры: где начинается диалог, какие ветки доступны игроку, где разговор завершится, какие места требуют настройки. Runtime читает те же ScriptableObject-ассеты и исполняет заданные правила.",
  },
  {
    id: "dialog-editor-lifecycle",
    label: "КАК ЭТО ИСПОЛЬЗУЕТСЯ",
    title: "Как граф участвует в разговоре",
    kind: "diagram",
    body: "Интерактивный объект получает ссылку на DialogGraph. При начале разговора DialogueContext открывает стартовую фразу и хранит данные текущей сессии: выбранную реплику, собеседника, режим выхода и текст, который увидел игрок. После завершения контекст очищается.\n\nГраф остаётся набором авторских данных. Один и тот же DialogGraph можно назначить нескольким объектам и проходить в разных сохранениях. Прогресс игрока, состояние квестов, ресурсы и флаги живут в своих системах. По ним runtime определяет доступные ветки, не изменяя фразы, связи и компоновку редактора.",
    media: [
      {
        src: "/content/tools/dialogue-editor/dialogue-runtime-flow.svg",
        alt: "Схема потока данных диалоговой системы: интерактивный объект, граф, контекст разговора, провайдер ответов, интерфейс и сервис исполнения",
        caption:
          "Поток данных: граф задаёт возможные ветки, сессия разговора хранит текущую позицию, игровые системы хранят прогресс.",
      },
    ],
  },
  {
    id: "dialog-editor-context-code",
    label: "СЕССИЯ РАЗГОВОРА",
    title: "Данные текущего разговора",
    kind: "code",
    body: "DialogueContext получает стартовую фразу из графа и сохраняет разрешённый текст текущей реплики. Это предотвращает неприятную ситуацию со случайными вариантами: интерфейс, история разговора и отладочная трасса всегда показывают одну и ту же выбранную формулировку.\n\nВ контексте также хранится режим форсированного диалога. Для обязательной сцены выход может быть закрыт, пока автор не приведёт игрока к фразе, которая явно возвращает возможность завершить разговор.",
    language: "csharp",
    code: `public void SetTarget(
    Interactable target,
    CharacterInfo characterInfo = null,
    DialogGraph dialog = null,
    DialogPhrase initialPhrase = null,
    bool isForcedDialogue = false)
{
    CurrentTarget = target;
    CurrentDialog = dialog;
    CurrentPhrase = initialPhrase ?? dialog?.EntryPhrase;
    CurrentPhraseText = ResolvePhraseText(CurrentPhrase);
    IsForcedDialogue = isForcedDialogue;
    CanExitDialogue = !isForcedDialogue;
    Opened?.Invoke();
}`,
  },
  {
    id: "dialog-editor-availability",
    label: "ПРИМЕР СЦЕНАРИЯ",
    title: "Один разговор — разные варианты для разных состояний мира",
    kind: "text",
    body: "Представим мельника. В первом разговоре у игрока есть вопрос о пропавших документах. После принятия задания появляется тема «Я нашёл бумаги». Если предмет уже лежит в инвентаре, ответ ведёт к переходу квеста и забирает документ. Если документов нет, ответ не показывается. После завершения квеста автор может назначить обязательную реплику благодарности с более высоким приоритетом, и она откроется раньше обычной точки входа.\n\nВсе эти варианты находятся в одном графе. Автор видит историю целиком и может проверить, куда приведёт каждая связь. Runtime не перебирает жёстко прописанные ветвления в UI: он собирает доступные ответы из текущей фразы и из специальных фраз графа, затем проверяет условия каждой из них.",
    details: [
      {
        title: "Прямой ответ",
        body: "Принадлежит текущей реплике. Это обычная стрелка на полотне: «Покажи товар» ведёт к следующей фразе торговца.",
      },
      {
        title: "Квестовый вариант",
        body: "Хранится на квестовой фразе и добавляется в регулярной точке выбора, когда состояние квеста позволяет выполнить действие.",
      },
      {
        title: "Тема разговора",
        body: "Открывает независимую ветку вроде «Расскажи о мельнице». После неё действие возврата возвращает игрока к общей точке выбора.",
      },
      {
        title: "Выход",
        body: "Добавляется там, где разговор можно завершить. Если автор не задал собственную фразу прощания, используется локализованный системный вариант.",
      },
    ],
  },
  {
    id: "dialog-editor-answer-provider",
    label: "СБОРКА ВАРИАНТОВ",
    title: "Интерфейс не решает, какие ответы существуют",
    kind: "code",
    body: "DialogueAnswerProvider — граница между сценарными данными и представлением. UI не знает, что такое квестовая ветка или возврат из темы. Он получает готовый список DialogueAnswerOption и отображает его. Благодаря этому правила не дублируются между экраном диалога, тестовой сценой и возможными будущими интерфейсами.\n\nПорядок сборки тоже часть авторского опыта: сначала прямые ответы фразы, затем варианты регулярной точки выбора, далее возврат и выход. Это делает поведение разговора предсказуемым для автора графа.",
    language: "csharp",
    code: `public IReadOnlyList<DialogueAnswerOption> GetVisibleAnswers(DialogPhrase phrase)
{
    var visibleAnswers = new List<DialogueAnswerOption>();
    if (phrase == null) return visibleAnswers;

    AddPhraseAnswers(visibleAnswers, phrase);

    DialogGraph graph = dialogueContext.CurrentDialog;
    if (graph != null && graph.IsRegularChoicePoint(phrase))
        AddRegularChoiceAnswers(visibleAnswers, phrase, graph);

    AddConversationReturnAnswers(visibleAnswers, phrase, graph);
    AddExitAnswers(visibleAnswers, phrase, graph,
        graph != null && graph.IsRegularChoicePoint(phrase),
        visibleAnswers.Count != 0);
    return visibleAnswers;
}`,
  },
  {
    id: "dialog-editor-conditions",
    label: "УСЛОВИЯ И ПОСЛЕДСТВИЯ",
    title: "Ответ сначала доказывает, что возможен, затем меняет мир",
    kind: "code",
    body: "Ответ содержит список условий. Один и тот же список описывает и доступность кнопки, и последствия выбора. В нём есть проверка и изменение денег, выдача или изъятие предметов, добавление квеста, переход по квестовой ветке, завершение задания и работа с временными флагами.\n\nПеред исполнением сервис проверяет весь набор заново. Это защищает мир от частичного выполнения: например, если один из нескольких требуемых предметов исчез между отображением ответа и нажатием, игра не успеет списать деньги или изменить квест наполовину. UI получает нейтральные эффекты для уведомлений и не становится владельцем игровых данных.",
    language: "csharp",
    code: `public bool TryExecute(
    bool hasConditions,
    IReadOnlyList<DialogAnswerCondition> conditions,
    out IReadOnlyList<DialogueAnswerExecutionEffect> effects)
{
    var result = new List<DialogueAnswerExecutionEffect>();
    effects = result;

    if (!hasConditions || conditions == null)
        return true;

    if (!DialogueAnswerAvailability.AreConditionsSatisfied(
            hasConditions, conditions, playerInventory,
            playerMoneyStorage, questController, runtimeFlags))
        return false;

    foreach (DialogAnswerCondition condition in conditions)
        if (condition != null && !TryExecuteCondition(condition, result))
        {
            effects = Array.Empty<DialogueAnswerExecutionEffect>();
            return false;
        }

    return true;
}`,
  },
  {
    id: "dialog-editor-data-code",
    label: "ЧТО ХРАНИТСЯ В ГРАФЕ",
    title: "Расположение для автора, ссылки для игры",
    kind: "code",
    body: "DialogGraph хранит список узлов и отдельную EntryPhrase. У DialogNode ровно две задачи: ссылка на ассет фразы и координата на полотне. Сама фраза содержит текст и ответы. Такая модель сознательно не смешивает логику разговора с его компоновкой в окне редактора.\n\nИгре не важно, где автор расположил карточку на холсте. Редактору не приходится хранить сценарный текст в UI-объекте. Поэтому граф можно открыть снова, изменить композицию или отрисовать другим представлением без влияния на runtime-поведение.",
    language: "csharp",
    code: `[CreateAssetMenu(menuName = "configs/Dialogs/Graph")]
public class DialogGraph : ScriptableObject
{
    public List<DialogNode> Nodes = new();
    [field: SerializeField] public DialogPhrase EntryPhrase { get; private set; }
}

[System.Serializable]
public class DialogNode
{
    public Vector2 Position;
    public DialogPhrase Phrase;
}`,
  },
  {
    id: "dialog-editor-authoring",
    label: "АВТОРИНГ",
    title: "Рабочее полотно для сценарной ветки",
    kind: "gallery",
    body: "В окне Unity Editor можно создавать и размещать фразы, соединять их ответами, выбирать стартовую реплику и редактировать параметры прямо в контексте графа. Панорамирование и масштабирование помогают работать с крупной веткой, а сохранённые позиции узлов возвращают автору привычную композицию после повторного открытия.\n\nОтдельная панель управляет созданием и загрузкой графа, путями к ассетам реплик и темой интерфейса. Для связей предусмотрен режим выбора целевого узла: автор начинает соединение у ответа и выбирает нужную фразу на полотне.",
    media: [
      {
        src: "/content/tools/dialogue-editor/dialogue-quest-demo.jpg",
        alt: "Общий вид диалогового редактора в Unity Editor: панель управления, узлы фраз и связи ответов",
        caption: "Общий вид диалогового редактора в Unity Editor.",
      },
    ],
  },
  {
    id: "dialog-editor-semantics",
    label: "МОДЕЛЬ ДАННЫХ",
    title: "Один граф, несколько сценарных ролей",
    kind: "diagram",
    body: "Базовая структура остаётся простой: DialogGraph содержит узлы, каждый узел ссылается на DialogPhrase, а ответы указывают на следующую фразу. Смысл узла задают его данные. Обычные реплики ведут разговор по прямым связям. Темы разговора и квестовые фразы становятся доступны в точках выбора после проверки условий. Служебные действия возвращают игрока к выбору или завершают диалог.\n\nТакое разделение позволяет держать общую механику графа независимой от сценарного содержания. Редактор работает со структурой, доменные поля фразы определяют доступные варианты и правила выполнения.",
    media: [
      {
        src: "/content/tools/dialogue-editor/dialogue-quest-demo.jpg",
        alt: "Диалоговый граф в Unity Editor: карточки фраз и направленные связи ответов",
        caption:
          "Граф в редакторе: карточка представляет DialogPhrase, стрелка начинается у ответа и ведёт к следующей фразе.",
      },
      {
        src: "/content/tools/dialogue-editor/dialogue-node-topic.jpg",
        alt: "Карточка диалоговой фразы с включённой темой разговора и условием Check Quest Node",
        caption:
          "Крупный план узла: тема разговора становится доступна после проверки квестового условия; её ответ и действия настраиваются в той же карточке.",
      },
    ],
  },
  {
    id: "dialog-editor-runtime",
    label: "СВЯЗЬ С ИГРОЙ",
    title: "Выбор игрока становится игровым действием",
    kind: "text",
    body: "Перед показом вариантов DialogueAnswerProvider собирает обычные ответы текущей фразы, доступные квестовые ветки, темы разговора, возврат и выход. Условия проверяют состояние инвентаря, деньги, этапы квестов и временные флаги. Пользовательский интерфейс получает готовый список и не хранит правила сценария.\n\nПосле выбора DialogueAnswerExecutionService повторно проверяет условия, затем последовательно выполняет последствия. Он работает через владельцев игровых систем: инвентарь, кошелёк, квестовый контроллер и реестр флагов. Реплики и ответы также могут публиковать события через MessagePipe, чтобы координаторы мира продолжали сценарий в своей области ответственности.",
  },
  {
    id: "dialog-editor-integrity",
    label: "НАДЁЖНОСТЬ ГРАФА",
    title: "Редактор помогает сохранять связную модель",
    kind: "text",
    body: "При открытии и изменении графа инструмент очищает узлы с отсутствующими ассетами, сбрасывает утраченную стартовую реплику и перестраивает индекс связей. На полотне видны ответы без цели, ссылки на фразы вне текущего графа и обычные реплики без входящих переходов. Квестовые и служебные ветки рассматриваются по отдельным правилам: часть их входов формируется runtime-системой.\n\nПри удалении или замене фразы редактор проходит по авторским ссылкам и обновляет их. Эта операция защищает граф от ручного поиска зависимостей после перестройки сценария.",
  },
  {
    id: "dialog-editor-canvas",
    label: "РЕДАКТОР КАК ИНСТРУМЕНТ",
    title: "Общий canvas не знает, что на нём нарисован диалог",
    kind: "code",
    body: "Диалоговый редактор не строит рабочее полотно заново для каждой предметной области. RetainedGraphCanvas — общий UI Toolkit-компонент, который умеет рисовать сетку, масштабировать и панорамировать область, виртуализировать узлы, перемещать карточки и отрисовывать соединения. Он параметризован типами узла и связи.\n\nДиалоговая специализация передаёт в общий canvas адаптер: откуда брать узлы, как получить их координату, каким цветом выделить фразу, какие ответы считать связями, можно ли выбрать этот узел целью. Тот же принцип используется в редакторах квестов и FSM. Меняется семантика данных, механика работы с графом остаётся общей.",
    language: "csharp",
    code: `private DelegatingRetainedGraphCanvasAdapter<DialogNode, DialogCanvasConnection>
    CreateCanvasAdapter()
{
    return new DelegatingRetainedGraphCanvasAdapter<DialogNode, DialogCanvasConnection>(
        "Create or load a dialog graph.",
        new Vector2(DialogNodeWidth, 220f),
        () => currentGraph != null,
        PrepareRetainedGraph,
        ClearRetainedNodeRects,
        GetRetainedGraphNodes,
        GetRetainedGraphConnections,
        GetRetainedNodePosition,
        SetRetainedNodePosition,
        GetRetainedNodeTitle,
        GetRetainedNodeTint,
        IsRetainedNodeTargetable,
        TrySelectRetainedTarget);
}`,
  },
  {
    id: "dialog-editor-common-core",
    label: "ГРАФОВАЯ ОСНОВА",
    title: "Диалоговый редактор — специализация общей архитектуры",
    kind: "text",
    body: "Диалоговый редактор использует тот же каркас, что редакторы квестов и конечных автоматов в RPG. Общий слой отвечает за рабочее полотно, масштаб, панорамирование, перемещение узлов, отслеживание изменений ассетов и UI Toolkit-представление. Специализированный слой определяет данные узла, правила создания связи, визуальные подсказки и доменные проверки.\n\nЭтот принцип напрямую продолжает тему магистерской диссертации «Разработка редактора состояний для моделирования и управления сложными объектами на базе конечных автоматов». В работе исследованы ориентированные графы, анализ достижимости, изолированные и терминальные узлы, визуальная маршрутизация связей и отделение модели от её отображения. RPG стала практической средой для применения той же идеи к диалогам, квестам и FSM.",
  },
  {
    id: "dialog-editor-demo",
    label: "ДЕМОНСТРАЦИЯ",
    title: "От графа к разговору в игре",
    kind: "video",
    body: "В демонстрации показан один сценарный маршрут целиком: ветка разговора в редакторе, условия выбранного ответа и результат этого выбора в запущенной сцене. Видео связывает граф с тем, как игрок видит реплики, получает новую цель или меняет состояние мира.",
  },
];

export const questEditorStorySections: ContentSection[] = [
  {
    id: "quest-editor-purpose",
    label: "ЗАДАЧА",
    title: "Квест как маршрут через состояние игры",
    kind: "text",
    body: "Квестовый граф задаёт последовательность целей: поговорить с персонажем, найти путь, принести предмет, получить награду. У каждой цели есть собственный текст для журнала, иконка, точка на карте, условия доступности и последствия завершения. Редактор собирает эти части в одну видимую модель задания.\n\nАвтор открывает карту квеста и видит всю его логику: с какого этапа она начинается, какие переходы допустимы, где лежит финальная цель, какие ветки сработают автоматически. Подключённые игровые системы используют эти данные в журнале, на карте, в диалогах и в сценариях мира.",
  },
  {
    id: "quest-editor-model",
    label: "МОДЕЛЬ ДАННЫХ",
    title: "Граф хранит структуру задания, узел хранит содержание этапа",
    kind: "code",
    body: "QuestGraph — ассет задания. В нём лежат название, описание, иконка, постоянный идентификатор и список QuestNode. Первый узел списка задаёт точку входа. Каждый QuestNode связывает координату карточки на полотне с отдельным ассетом QuestNodeData. Благодаря этому этап можно редактировать как самостоятельную единицу и при этом показывать его в составе графа.\n\nQuestNodeData хранит локализованные название и описание, иконку, настройки цели на карте, требования для старта этапа, результаты завершения и исходящие переходы. QuestTransition вынесен в отдельный ассет: у него есть целевой этап, условия, результаты и флаг автоматического исполнения.",
    language: "csharp",
    code: `[CreateAssetMenu(menuName = "configs/Quests/Graph")]
public class QuestGraph : ScriptableObject
{
    [SerializeField] private string persistentId;
    [SerializeField] private LocalizedString title = new();
    [SerializeField] private LocalizedString description = new();

    public List<QuestNode> Nodes = new();
    public QuestNodeData GetEntryNode() => Nodes.FirstOrDefault()?.NodeData;
}

[System.Serializable]
public class QuestNode
{
    public Vector2 Position;
    public QuestNodeData NodeData;
}`,
  },
  {
    id: "quest-editor-authoring",
    label: "РАБОЧЕЕ ПОЛОТНО",
    title: "Этапы и переходы собираются в контексте всего задания",
    kind: "gallery",
    body: "На полотне каждая карточка показывает этап квеста. Здесь видны стартовая точка, связи к следующим целям и их направление. Внутри карточки автор редактирует название, описание, локализованный предпросмотр, предметы и деньги в условиях или результатах, цель на карте и исходящие переходы. Связь создаётся от этапа к этапу, поэтому порядок прохождения читается сразу.\n\nНа примере «Попасть в город» первый этап предлагает поговорить с главой городской стражи. Переход ведёт к поиску другого пути в город. Даже небольшой граф показывает основной смысл инструмента: структура задания и данные каждого шага находятся рядом, без переключения между множеством инспекторов.",
    media: [
      {
        src: "/content/tools/quest-editor/quest-editor-graph.jpg",
        alt: "Графовый редактор квеста «Попасть в город» в Unity Editor",
        caption:
          "Два этапа квеста и направленный переход между ними. Карточки содержат данные этапов, стрелка показывает возможный следующий шаг.",
      },
    ],
  },
  {
    id: "quest-editor-lifecycle",
    label: "КАК ЭТО ИСПОЛЬЗУЕТСЯ",
    title: "Один граф связывает авторский контент и текущий прогресс игрока",
    kind: "diagram",
    body: "QuestGraph и его узлы остаются авторскими ScriptableObject-ассетами. Когда квест начинается, QuestController создаёт QuestProgress: он хранит ссылку на граф, текущий этап, список завершённых этапов и признак завершения. Именно этот объект меняется во время игры.\n\nОстальные системы запрашивают текущее состояние у контроллера. Журнал показывает текущую цель и историю, карта берёт позицию маркера, диалог проверяет, дошёл ли игрок до нужного этапа. Сохранение записывает постоянные идентификаторы графа и узлов, затем восстанавливает QuestProgress при загрузке. Авторский контент остаётся общим для всех прохождений.",
    media: [
      {
        src: "/content/tools/quest-editor/quest-runtime-flow.svg",
        alt: "Схема работы квестовой системы: авторский граф, контроллер прогресса, журнал, карта, диалоги и сохранение",
        caption:
          "Граф описывает возможные этапы. QuestProgress хранит путь конкретного игрока и даёт остальным системам единый источник текущего состояния.",
      },
    ],
  },
  {
    id: "quest-editor-transition",
    label: "ПЕРЕХОД МЕЖДУ ЭТАПАМИ",
    title:
      "Переход проверяет условия, применяет результат и меняет текущую цель",
    kind: "code",
    body: "QuestController остаётся единственным владельцем прогресса. Перед переходом он убеждается, что квест активен, переход принадлежит текущему узлу, цель находится в том же графе и все требования выполнены. Затем применяются результаты перехода: например, выдаются или списываются предметы и деньги. После успешного применения QuestProgress переводится на целевой узел и публикуется событие об изменении квеста.\n\nТакой порядок защищает данные от неполного выполнения. Журнал и другие подписчики обновляются только после того, как переход действительно состоялся.",
    language: "csharp",
    code: `public bool TryExecuteTransition(QuestGraph questGraph, QuestTransition transition)
{
    if (!CanExecuteTransition(questGraph, transition))
        return false;

    if (!ApplyResults(transition.HasResults ? transition.Results : null))
        return false;

    QuestProgress questProgress = progressByQuest[questGraph];
    questProgress.SetCurrentNode(transition.TargetNode);
    Changed?.Invoke(new QuestChangeInfo(QuestChangeType.Updated, questGraph));
    return true;
}`,
  },
  {
    id: "quest-editor-rules",
    label: "УСЛОВИЯ И ПОСЛЕДСТВИЯ",
    title: "Правила этапов: условия, результаты и автоматические переходы",
    kind: "text",
    body: "Текущая реализация поддерживает ресурсы двух типов: деньги и предметы. В требованиях отрицательное значение означает необходимое количество ресурса. В результатах положительное значение добавляет деньги или предметы игроку, отрицательное — списывает их. Те же наборы данных могут стоять на переходе и на финальном узле.\n\nУ перехода есть режим автоматического выполнения. QuestAutomaticTransitionService слушает изменения инвентаря и квестового состояния, затем просит контроллер проверить один доступный автоматический переход. Это удобно для этапов вроде «соберите нужные предметы»: квест реагирует на изменение мира без отдельного сценарного скрипта для каждой такой проверки.",
    details: [
      {
        title: "Требования этапа",
        body: "Проверяются при добавлении квеста. Они позволяют открыть задание только в подходящем состоянии игрока.",
      },
      {
        title: "Условия перехода",
        body: "Проверяются из текущего этапа перед сменой цели. Если условия не выполнены, QuestProgress остаётся на прежнем узле.",
      },
      {
        title: "Результаты",
        body: "Применяются после успешной проверки: дают или забирают предметы и деньги.",
      },
      {
        title: "Финальный этап",
        body: "Узел без исходящих переходов можно завершить. Его собственные результаты выдаются один раз вместе с завершением квеста.",
      },
    ],
  },
  {
    id: "quest-editor-journal",
    label: "РЕЗУЛЬТАТ В ИГРЕ",
    title: "Журнал показывает историю и текущую цель из QuestProgress",
    kind: "gallery",
    body: "Экран журнала строит список задач по QuestProgress: завершённые узлы выводятся как выполненные пункты, текущий узел — как активная цель. Название и описание квеста берутся из QuestGraph, текст задачи — из QuestNodeData.\n\nНа скриншоте активен первый этап «Попасть в город»: игроку нужно поговорить с главой городской стражи. После перехода к следующей карточке графа тот же журнал автоматически покажет новую цель и оставит пройденный этап в истории.",
    media: [
      {
        src: "/content/tools/quest-editor/quest-journal.png",
        alt: "Журнал заданий в игре с активным квестом «Попасть в город»",
        caption:
          "Журнал отображает авторские данные графа через текущий и завершённые узлы QuestProgress.",
      },
    ],
  },
  {
    id: "quest-editor-world",
    label: "СВЯЗЬ С МИРОМ",
    title: "Один этап может управлять журналом, картой и диалоговыми ветками",
    kind: "text",
    body: "У QuestNodeData можно назначить цель на карте. Она может ссылаться на объект сцены по идентификатору или на динамическую цель, которую сценарий регистрирует по ключу. QuestMapTargetRegistry находит позицию для текущего узла, поэтому карта привязана к данным этапа, а не к отдельной таблице координат.\n\nДиалоговая система использует запросы QuestController: есть ли квест у игрока, завершён ли он, находится ли игрок на конкретном узле, достигал ли этапа раньше, может ли он выполнить переход. Благодаря этому фраза может открыть задание, завершить этап или появиться только в нужный момент. Квест остаётся владельцем своей последовательности, диалог становится входом в неё или реакцией на неё.",
  },
  {
    id: "quest-editor-integrity",
    label: "ЦЕЛОСТНОСТЬ ГРАФА",
    title: "Редактор поддерживает связи при изменении квеста",
    kind: "code",
    body: "При загрузке редактор очищает список от отсутствующих ассетов и отмечает обычные узлы без входящих переходов. Первый узел списка считается стартовым и не попадает в эту проверку. При удалении этапа инструмент проходит по исходящим переходам остальных узлов, очищает ссылки на удалённую цель и удаляет переходы, которыми владел сам этап.\n\nПосле перестройки квеста редактор сам обновляет затронутые ссылки и удаляет принадлежащие этапу переходы. Граф остаётся согласованным контейнером для ассетов узлов и переходов.",
    language: "csharp",
    code: `public static bool IsOrphanNode(QuestGraph graph, QuestNodeData nodeData)
{
    if (graph?.Nodes == null || nodeData == null || GetStartNode(graph) == nodeData)
        return false;

    return !graph.Nodes.Where(node => node?.NodeData != null)
        .SelectMany(node => node.NodeData.Transitions ?? new List<QuestTransition>())
        .Any(transition => transition != null && transition.TargetNode == nodeData);
}`,
  },
  {
    id: "quest-editor-save",
    label: "СОХРАНЕНИЯ",
    title: "Сохранение хранит путь конкретного игрока",
    kind: "code",
    body: "У графа и каждого этапа есть PersistentId. В файл сохранения попадают идентификатор квеста, идентификатор текущего узла, список завершённых узлов и флаг завершения. При загрузке QuestCatalog находит граф, система сопоставляет идентификаторы с его узлами и восстанавливает QuestProgress.\n\nСценарный контент остаётся в ассетах, персональный прогресс записывается в сохранение. Один и тот же квест можно проходить в разных слотах, запускать заново и переносить вместе с совместимым набором ассетов без изменения его структуры.",
    language: "csharp",
    code: `return quests.Progress
    .Where(progress => progress?.QuestGraph != null && progress.CurrentNode != null)
    .Select(progress => new SavedQuestProgress
    {
        questId = progress.QuestGraph.PersistentId,
        currentNodeId = progress.CurrentNode.PersistentId,
        completedNodeIds = progress.CompletedNodes
            .Select(node => node.PersistentId)
            .ToArray(),
        state = progress.IsCompleted ? 1 : 0
    })
    .ToArray();`,
  },
  {
    id: "quest-editor-common-core",
    label: "ГРАФОВАЯ ОСНОВА",
    title: "Квестовый редактор использует общий canvas графовых инструментов",
    kind: "text",
    body: "Редактор квестов построен поверх того же RetainedGraphCanvas, что и редактор диалогов. Общий слой отвечает за панорамирование, масштабирование, перемещение карточек, отрисовку связей, выбор цели перехода и обновление представления при изменении ассетов. Квестовый адаптер сообщает ему, как получить узлы, переходы, заголовки, координаты и правила выбора цели.\n\nКвестовая предметная модель остаётся в специализированном слое: здесь находятся данные этапа, правила перехода, проверка структуры и оформление карточки. Общая инфраструктура развивается сразу для нескольких графовых редакторов.",
  },
];

export const fsmEditorStorySections: ContentSection[] = [
  {
    id: "fsm-editor-purpose",
    label: "ЗАДАЧА",
    title: "Как граф превращается в работающую машину состояний",
    kind: "text",
    body: "Конечный автомат нужен там, где объект долго живёт в одном режиме, регулярно выполняет его работу и меняет режим при наступлении понятного события. Визуальный граф фиксирует эту логику целиком: с какого состояния начинается работа, что происходит внутри каждого состояния, какие проверки открывают следующий путь, что должно случиться прямо в момент перехода.\n\nВ инструменте состояние — содержательная карточка, а не просто подпись на линии. В него можно положить несколько поведений. Например, одно поведение поддерживает движение, второе управляет анимацией, третье следит за временным ограничением. Пока состояние активно, машина вызывает их каждый кадр. Рядом лежит упорядоченный список переходов. Он задаёт приоритет реакций: если в один кадр подходят два правила, машина выберет первое в списке.\n\nПоэтому полотно редактора служит и для сборки, и для чтения поведения. По нему видно, где начинается путь, какие циклы возвращают объект к обычной работе, какое правило перехватывает ситуацию раньше соседнего, где у состояния несколько независимых обязанностей.",
  },
  {
    id: "fsm-editor-model",
    label: "ДАННЫЕ ГРАФА",
    title: "Что именно сохраняет редактор",
    kind: "code",
    body: "Результат работы редактора хранится в нескольких ScriptableObject-ассетах. StateMachineGraph содержит список узлов. Узел хранит ссылку на State и координату карточки на полотне. Первый валидный узел становится точкой входа. Такое правило видно в коде GetEntryState и совпадает с тем, как редактор помечает стартовую карточку.\n\nState хранит название, список BaseBehaviour и список исходящих Transition. Переход хранит цель, режим объединения условий и отдельный список действий перехода. Данные полотна остаются рядом с данными поведения: автор может переставить карточки для читаемости, не меняя саму логику. При запуске эти ассеты читаются как описание автомата; текущее состояние, время и временные значения создаются отдельно для каждого экземпляра.",
    language: "csharp",
    code: `[CreateAssetMenu(menuName = "configs/StateMachine/Graph")]
public class StateMachineGraph : ScriptableObject
{
    public List<Node> Nodes = new();
    public State GetEntryState() =>
        Nodes.FirstOrDefault(node => node?.State != null)?.State;
}

public class State : ScriptableObject
{
    [field: SerializeField] public string Name { get; private set; }
    public List<BaseBehaviour> Behaviours = new();
    public List<Transition> Transitions = new();
}

public class Transition : ScriptableObject
{
    public TransitionType Type = TransitionType.All;
    public List<BaseCondition> Conditions = new();
    public List<ActionOnTransitionBase> ActionOnTransitions = new();
    public State TargetState;
}`,
  },
  {
    id: "fsm-editor-authoring",
    label: "РАБОЧЕЕ ПОЛОТНО",
    title: "Состояние собирается как небольшая программа",
    kind: "gallery",
    body: "Карточка состояния открывает его содержание прямо в редакторе. В верхней части задаётся имя. Ниже расположен список поведений: каждая строка ссылается на отдельный asset класса BaseBehaviour. Ещё ниже находятся переходы. Для каждого перехода автор выбирает режим All или Any, добавляет условия, добавляет действия на переходе и назначает карточку-цель.\n\nЭто даёт важную грань детализации. На полотне читается маршрут объекта. Внутри карточки читается работа отдельного режима. Условно, карточка «Сближение» может одновременно вести объект к цели, поддерживать направление взгляда и учитывать короткий рывок. Стрелка из этой карточки объясняет, при каких фактах нужно уйти в атаку, ожидание или другую реакцию.\n\nСоздание связи устроено в два шага: редактор создаёт Transition у состояния-источника и переводит полотно в режим выбора цели. Следующий клик по карточке присваивает TargetState. В коде этот момент короткий, поэтому у связи нет скрытой логики: выбранный узел становится целью конкретного transition asset.",
    media: [
      {
        src: "/content/tools/fsm-editor/state-machine-editor.jpg",
        alt: "Графовый редактор конечного автомата в Unity Editor с карточками состояний и переходами",
        caption:
          "Рабочее полотно FSM: стартовое состояние, циклы, развилки и возвращения к предыдущим режимам читаются по расположению карточек и направлению связей.",
      },
    ],
  },
  {
    id: "fsm-editor-runtime-start",
    label: "ЗАПУСК В RUNTIME",
    title: "Runner создаёт исполнителя для конкретного объекта",
    kind: "diagram",
    body: "Граф сам по себе ничего не обновляет. Его читает отдельный runtime-класс StateMachine. Runner создаёт StateMachineContext для экземпляра в сцене, регистрирует в нём доступные сервисы, создаёт StateMachine с графом и контекстом, затем вызывает Start. Start запрашивает у графа точку входа и вызывает Enter поведений стартового состояния.\n\nТакой порядок даёт каждому запущенному объекту собственную машину. Два экземпляра могут ссылаться на один и тот же StateMachineGraph, находиться в разных состояниях, иметь разное время работы и разные временные значения. Содержимое asset-графа от этого не меняется.\n\nНиже — реальный runner для существа с навигацией и боевой логикой. В нём видно границу ответственности: runner знает, какие сервисы существуют у объекта; StateMachine знает, как исполнять состояния и переходы; сами поведения обращаются к нужному сервису через контекст.",
    language: "csharp",
    code: `public void Start()
{
    var context = new StateMachineContext
    {
        Owner = ownerTransform != null ? ownerTransform.gameObject : null
    };

    context.SetService(animation);
    context.SetService(navigation);
    context.SetService(combat);
    context.SetService(hitReaction);
    context.SetService(targeting);
    context.SetService(combatVision);
    context.SetService(stats);

    stateMachine = new RuntimeStateMachine(graph, context);
    stateMachine.Start();
}

public void Tick() => stateMachine?.Tick(Time.deltaTime);`,
    media: [
      {
        src: "/content/tools/fsm-editor/fsm-runtime-flow.svg",
        alt: "Схема работы FSM: граф состояний, runner, контекст объекта, state machine, поведения и переходы",
        caption:
          "Граф служит шаблоном поведения. Runner создаёт runtime-контекст и StateMachine для одного объекта; дальнейшее выполнение идёт через Tick.",
      },
    ],
  },
  {
    id: "fsm-editor-context",
    label: "КОНТЕКСТ",
    title: "Где поведения берут состояние живого объекта",
    kind: "code",
    body: "StateMachineContext — небольшой контейнер на время жизни одной runtime-машины. В нём есть Owner, DeltaTime и ElapsedTime. Сервисы хранятся по типу: поведение запрашивает NpcNavMeshController, NpcCombatService или любой другой зарегистрированный класс, не получая зависимости через поля ScriptableObject-ассета. Это важно для переиспользования: asset поведения остаётся конфигурацией, конкретные ссылки приходят из запущенного объекта.\n\nВторая коллекция values хранит краткоживущие значения по строковому ключу. Поведение может завести флаг на входе в состояние, обновлять его в Logic и удалить в Exit. Эти значения не пишутся обратно в граф и не делятся между двумя экземплярами машины.",
    language: "csharp",
    code: `public class StateMachineContext
{
    private readonly Dictionary<Type, object> services = new();
    private readonly Dictionary<string, object> values = new();

    public GameObject Owner;
    public float DeltaTime;
    public float ElapsedTime;

    public void SetService<T>(T service) where T : class
    {
        if (service == null) services.Remove(typeof(T));
        else services[typeof(T)] = service;
    }

    public T GetService<T>() where T : class =>
        TryGetService(out T service) ? service : null;

    public void SetValue<T>(string key, T value) => values[key] = value;
    public bool RemoveValue(string key) => values.Remove(key);
}`,
  },
  {
    id: "fsm-editor-tick",
    label: "КАДР ИСПОЛНЕНИЯ",
    title: "Что происходит в каждом Tick",
    kind: "code",
    body: "Метод Tick вызывается runner’ом каждый кадр с Time.deltaTime. Сначала машина записывает время в StateMachineContext. Затем она проходит по всему списку Behaviours активного State и вызывает Logic у каждого элемента. Состояние может содержать один asset поведения или несколько: машина не выбирает одно «главное» поведение, она исполняет весь список по порядку.\n\nПосле Logic начинается проверка исходящих переходов. Переходы обходятся в том же порядке, в котором они лежат в карточке State. У первого перехода, который вернул true из CanTransition, выполняются все ActionOnTransitions. Затем вызывается SetState для TargetState и Tick завершается через return. Следовательно, за кадр срабатывает максимум один переход. Порядок переходов в редакторе — часть логики поведения, а не декоративная сортировка.\n\nЭто хорошо видно в исходном методе: два foreach отражают две фазы кадра. Первая поддерживает работу текущего режима. Вторая принимает решение о смене режима.",
    language: "csharp",
    code: `public void Tick(float deltaTime)
{
    if (CurrentState == null) return;

    context.DeltaTime = deltaTime;
    context.ElapsedTime += deltaTime;

    foreach (BaseBehaviour behaviour in CurrentState.Behaviours)
        behaviour?.Logic(context);

    foreach (Transition transition in CurrentState.Transitions)
    {
        if (transition == null || !transition.CanTransition(context))
            continue;

        foreach (ActionOnTransitionBase action in transition.ActionOnTransitions)
            action?.DoAction(context);

        SetState(transition.TargetState);
        return;
    }
}`,
  },
  {
    id: "fsm-editor-behaviours",
    label: "ЖИЗНЕННЫЙ ЦИКЛ СОСТОЯНИЯ",
    title: "Несколько поведений работают в одном состоянии",
    kind: "code",
    body: "У BaseBehaviour есть три точки жизненного цикла: Enter, Logic и Exit. Enter вызывается один раз, когда машина вошла в состояние. Logic вызывается каждый Tick, пока состояние остаётся текущим. Exit вызывается перед тем, как CurrentState сменится. Машина проходит по всему списку Behaviours в каждом из этих местах, поэтому одно состояние естественно собирается из нескольких независимых обязанностей.\n\nВ реальном NpcCombatApproachBehaviour Enter запоминает исходную точку столкновения, готовит оружие, включает фиксацию взгляда и инициализирует три временных значения. Logic вызывает MoveToTarget на каждом кадре. Exit удаляет именно эти три значения. Такой фрагмент показывает, зачем нужен жизненный цикл: состояние получает место для подготовки, непрерывной работы и уборки временных данных.",
    language: "csharp",
    code: `public override void Enter(StateMachineContext context)
{
    RememberEngagementOrigin(context);
    context?.GetService<NpcNavMeshController>()?.SetFacingLocked(true);
    context?.GetService<NpcCombatService>()?.TryPrepareWeapon();
    context?.SetValue(NpcCombatStateKeys.ApproachBurstRequested, false);
    context?.SetValue(NpcCombatStateKeys.ApproachBurstElapsed, 0f);
    context?.SetValue(NpcCombatStateKeys.ApproachBurstBlockObserved, false);
    MoveToTarget(context);
}

public override void Logic(StateMachineContext context) => MoveToTarget(context);

public override void Exit(StateMachineContext context)
{
    context?.RemoveValue(NpcCombatStateKeys.ApproachBurstRequested);
    context?.RemoveValue(NpcCombatStateKeys.ApproachBurstElapsed);
    context?.RemoveValue(NpcCombatStateKeys.ApproachBurstBlockObserved);
}`,
    details: [
      {
        title: "Enter",
        body: "Подготовка режима: запуск нужной анимации, настройка навигации, запись начальных значений в context.",
      },
      {
        title: "Logic",
        body: "Регулярная работа состояния. Вызов идёт каждый кадр для каждого поведения активного State.",
      },
      {
        title: "Exit",
        body: "Завершение режима: очистка временных ключей, остановка процесса или возврат настройки сервиса.",
      },
      {
        title: "Список Behaviours",
        body: "Порядок списка определяет порядок вызовов. В одном State можно сочетать несколько поведений без создания монолитного класса.",
      },
    ],
  },
  {
    id: "fsm-editor-transition-rules",
    label: "УСЛОВИЯ И ПЕРЕХОДЫ",
    title: "Как машина выбирает стрелку на графе",
    kind: "code",
    body: "Каждая стрелка на полотне соответствует Transition asset. У него есть цель, Conditions и режим Type. В режиме All каждая ссылка в списке Conditions должна вернуть true. В режиме Any достаточно одного true. Пустой список All в текущем коде возвращает true, поскольку LINQ All для пустой последовательности истинно; пустой список Any возвращает false. Это значимая деталь настройки: переход без условий в режиме All может стать безусловным переходом и сработает сразу при проверке.\n\nУсловие остаётся маленьким объектом, отвечающим на один вопрос. Ниже — фактическое условие, которое получает из контекста NpcCombatService и проверяет наличие цели. Такой asset можно добавить в несколько переходов, не копируя проверку.\n\nПосле успешной проверки StateMachine сначала выполняет все ActionOnTransitions, затем вызывает SetState. Значит, действия перехода происходят ещё при старом CurrentState; только затем машина вызывает Exit старых behaviours, назначает новый State, вызывает Enter новых behaviours и вызывает Enter у условий нового состояния.",
    language: "csharp",
    code: `public bool CanTransition(StateMachineContext context)
{
    if (TargetState == null || Conditions == null) return false;

    return Type switch
    {
        TransitionType.All => Conditions.All(c => c != null && c.IsCondition(context)),
        TransitionType.Any => Conditions.Any(c => c != null && c.IsCondition(context)),
        _ => false
    };
}

public sealed class NpcHasCombatTargetCondition : BaseCondition
{
    public override bool IsCondition(StateMachineContext context) =>
        context?.GetService<NpcCombatService>()?.HasCombatTarget == true;
}`,
  },
  {
    id: "fsm-editor-set-state",
    label: "СМЕНА СОСТОЯНИЯ",
    title: "Порядок перехода определён в одном методе",
    kind: "code",
    body: "SetState — единственная точка, которая меняет CurrentState. Она сразу выходит, если целевое состояние уже активно. Затем проходит по поведениям прежнего состояния и вызывает Exit. После присваивания CurrentState новый список behaviours получает Enter. В конце инициализируются условия всех исходящих переходов нового состояния через их Enter.\n\nТакой порядок полезно знать при создании поведения. Действие перехода стоит использовать для единичного события, связанного со сменой режима. Enter — для настройки нового режима. Exit — для завершения прежнего. Logic — для непрерывной работы. У каждого шага есть своё место, поэтому правило остаётся читаемым и в коде, и в карточке редактора.",
    language: "csharp",
    code: `public void SetState(State state)
{
    if (CurrentState == state) return;

    foreach (BaseBehaviour behaviour in CurrentState?.Behaviours ?? [])
        behaviour?.Exit(context);

    CurrentState = state;
    if (CurrentState == null) return;

    foreach (BaseBehaviour behaviour in CurrentState.Behaviours ?? [])
        behaviour?.Enter(context);

    foreach (Transition transition in CurrentState.Transitions ?? [])
        foreach (BaseCondition condition in transition?.Conditions ?? [])
            condition?.Enter(context);
}`,
  },
  {
    id: "fsm-editor-farm",
    label: "КОМПАКТНЫЙ АВТОМАТ",
    title: "Состояние как общий режим для нескольких систем",
    kind: "code",
    body: "Во втором проекте тот же принцип используется в более компактной форме. GameStateController хранит текущий режим: игра, редактор, строительство или расширение территории. Смена режима записывает новое значение в ReactiveProperty. Подсистемы сами подписываются на него и меняют своё поведение.\n\nЭто можно проследить по коду: PlayerMovement обнуляет ввод, когда GameState отличается от Game; GridController скрывает линии сетки в Game и рисует их в остальных трёх режимах; ExtensionFounder показывает предпросмотр расширения только в Expansion и скрывает его при любом другом значении; GridExtensionSpawner также подписан на это состояние. Здесь нет графового полотна, поскольку четыре режима и их реакции помещаются в компактном контроллере. При росте числа правил, циклов, условий и постоянных действий такое описание становится содержимым StateMachineGraph.\n\nЭтот пример важен для самого инструмента: FSM не привязан к одному виду поведения. Графовый редактор добавляет структуру поверх той же идеи текущего состояния и явной смены режима.",
    language: "csharp",
    code: `public class GameStateController
{
    public ReactiveProperty<GameStates> GameState { get; private set; } = new();

    public void ChangeState(GameStates newState)
    {
        GameState.Value = newState;
    }
}

public enum GameStates
{
    Game, Redactor, Building, Expansion
}

private void OnChangedGameState(GameStates currentState)
{
    switch (currentState)
    {
        case GameStates.Game:
            separation.UnDraw(Parents);
            break;
        case GameStates.Redactor or GameStates.Building or GameStates.Expansion:
            separation.Draw(Parents);
            break;
    }
}`,
  },
  {
    id: "fsm-editor-canvas",
    label: "ОБЩАЯ ГРАФОВАЯ ОСНОВА",
    title: "Полотно отделено от предметной логики автомата",
    kind: "code",
    body: "Редактор FSM построен поверх RetainedGraphCanvas — того же слоя, который используется редакторами диалогов и квестов. Canvas занимается панорамированием, масштабированием, перетаскиванием карточек, отрисовкой связей и режимом выбора цели. StateMachineEditorWindow передаёт в него адаптер с правилами именно автомата: откуда взять список Node, как получить Transition, как нарисовать карточку State, как удалить её и как принять клик по цели.\n\nТакое разделение хорошо заметно в CreateCanvasAdapter. Окно передаёт методы GetRetainedGraphNodes, GetRetainedGraphConnections, GetRetainedNodePosition, SetRetainedNodePosition, DrawRetainedNode и TrySelectRetainedTarget. Общая инфраструктура остаётся одной для трёх редакторов. Содержимое карточек, тип связей и проверки задаёт специализация FSM.",
    language: "csharp",
    code: `private DelegatingRetainedGraphCanvasAdapter<Node, Transition>
    CreateCanvasAdapter()
{
    return new DelegatingRetainedGraphCanvasAdapter<Node, Transition>(
        "Create or load a state machine graph.",
        NodeSize,
        () => currentGraph != null,
        PrepareRetainedGraph,
        ClearRetainedNodeRects,
        GetRetainedGraphNodes,
        GetRetainedGraphConnections,
        GetRetainedNodePosition,
        SetRetainedNodePosition,
        SetRetainedNodeRect,
        GetRetainedNodeTitle,
        GetRetainedNodeTint,
        IsRetainedNodeTargetable,
        DrawRetainedNode,
        DeleteRetainedNode,
        SelectRetainedNode,
        ClearRetainedNodeSelection,
        TrySelectRetainedTarget);
}`,
  },
  {
    id: "fsm-editor-linking",
    label: "СОЗДАНИЕ СВЯЗИ",
    title: "Стрелка на полотне становится ссылкой TargetState",
    kind: "code",
    body: "При выборе цели редактор проверяет, что режим выбора включён, ожидающий переход существует, карточка не пуста и автор не выбрал карточку-источник. Затем он записывает node.State в pendingTransition.TargetState, помечает asset изменённым, постепенно перестраивает линии и завершает режим выбора.\n\nПереход остаётся обычным объектом данных. Полотно рисует стрелку, исходя из TargetState; runtime использует ту же ссылку в SetState. Поэтому связь на экране и связь, по которой пройдёт машина, имеют один источник истины.",
    language: "csharp",
    code: `bool TrySelectRetainedTarget(Node node)
{
    if (!isSelectingTargetNode || pendingTransition == null ||
        node == null || node == sourceNodeForSelection || node.State == null)
        return false;

    pendingTransition.TargetState = node.State;
    MarkDirty(pendingTransition);
    toolkitCanvas?.RebuildConnectionsGradually();
    CancelTargetSelection(false);
    return true;
}`,
  },
  {
    id: "fsm-editor-integrity",
    label: "ЦЕЛОСТНОСТЬ ГРАФА",
    title: "Редактор поддерживает ссылки во время правок",
    kind: "code",
    body: "Структурные проверки начинаются уже при подготовке графа: редактор удаляет Node без State и ссылки на State-ассеты, которых больше нет в AssetDatabase. Для диагностики он умеет определить изолированное состояние — состояние без входящих переходов, кроме стартового. Карточки с отсутствующей целью и цели, находящиеся за пределами текущего графа, выделяются отдельно.\n\nУдаление состояния затрагивает больше одной карточки. StateGraphReferenceOperations проходит по всем состояниям и очищает входящие TargetState, указывавшие на удаляемый State. Затем удаляются Transition assets, которыми владело удаляемое состояние. Эта работа не оставлена на ручную чистку: редактор поддерживает данные во время обычного редактирования графа.",
    language: "csharp",
    code: `public static void RemoveIncomingReferences(
    StateMachineGraph graph, State target)
{
    foreach (Node node in graph.Nodes)
    {
        State state = node?.State;
        if (state == null) continue;

        foreach (Transition transition in state.Transitions)
        {
            if (transition != null && transition.TargetState == target)
            {
                transition.TargetState = null;
                GraphEditorAssetService.MarkDirty(transition, "Remove state reference");
            }
        }
    }
}

public static bool IsOrphanState(StateMachineGraph graph, State state)
{
    if (graph?.Nodes == null || state == null || GetStartState(graph) == state)
        return false;

    return !graph.Nodes.Where(node => node?.State != null)
        .SelectMany(node => node.State.Transitions ?? new List<Transition>())
        .Any(transition => transition != null && transition.TargetState == state);
}`,
  },
  {
    id: "fsm-editor-assets-in-practice",
    label: "СБОРКА БОЛЬШОГО ГРАФА",
    title: "Поведение растёт набором небольших ассетов",
    kind: "text",
    body: "В рабочем графе состояния, условия и переходы лежат отдельными ассетами в папках рядом друг с другом. У базового графа персонажа есть отдельные состояния для ожидания, диалога, подбора предмета, возвращения домой, реакции на попадание, бегства и боевых тактик. Переходы тоже имеют собственные имена: например, переход из диалога в ожидание, из атаки к выбору следующей тактики или из поиска к возвращению домой.\n\nТакая структура делает изменение локальным. Новая тактика начинается с нового Behaviour или State asset. Новое правило — с нового Condition asset. После этого автор подключает их к нужной карточке в редакторе. Никакая большая центральная таблица не требует переписывания: граф собирает готовые части в конкретный маршрут.\n\nПри этом один и тот же тип условия или поведения можно использовать в нескольких местах. Условие наличия боевой цели встречается на разных переходах; поведение сближения существует как самостоятельный asset. Связи конкретного графа определяют, где эти части работают и какой приоритет имеют среди соседних правил.",
    details: [
      {
        title: "State asset",
        body: "Имя режима, список Behaviours и список исходящих Transition. Одна карточка на полотне соответствует одному State.",
      },
      {
        title: "Transition asset",
        body: "Целевой State, список Conditions, режим All / Any и список ActionOnTransitions. Ссылка принадлежит состоянию-источнику.",
      },
      {
        title: "Behaviour asset",
        body: "Код регулярной работы режима с точками Enter, Logic и Exit. Он получает живые сервисы только через StateMachineContext.",
      },
      {
        title: "Condition asset",
        body: "Небольшая проверка, которую можно подключать к разным переходам. Условие тоже получает context и может использовать время или временные значения.",
      },
    ],
  },
  {
    id: "fsm-editor-condition-lifecycle",
    label: "СОСТОЯНИЕ УСЛОВИЯ",
    title: "Условие может помнить время решения",
    kind: "code",
    body: "BaseCondition имеет два метода: IsCondition вызывается при проверке перехода, Enter вызывается один раз после входа в состояние, которому принадлежит этот переход. Второй метод нужен условиям, которым требуется подготовить проверку заново.\n\nNpcShouldFleeCondition показывает это на реальном сценарии. При входе в состояние оно обнуляет FleeDecisionTimer. Затем на каждом Tick проверяет боевую систему. Немедленная опасность даёт true сразу. Для обычного решения о бегстве condition накапливает DeltaTime в context и возвращает true только после заданной длительности. При отмене решения таймер снова обнуляется.\n\nЗдесь важна граница данных: сам Condition asset не хранит таймер в поле ScriptableObject. Таймер живёт в context конкретной машины. Поэтому два объекта, использующие одно условие, никогда не делят между собой отсчёт времени.",
    language: "csharp",
    code: `public override bool Enter(StateMachineContext context)
{
    context?.SetValue(NpcCombatStateKeys.FleeDecisionTimer, 0f);
    return false;
}

public override bool IsCondition(StateMachineContext context)
{
    var combat = context?.GetService<NpcCombatService>();
    if (combat == null || !combat.ShouldFlee)
    {
        ResetDecisionTimer(context);
        return false;
    }

    context.TryGetValue<float>(NpcCombatStateKeys.FleeDecisionTimer, out var timer);
    timer += context.DeltaTime;
    context.SetValue(NpcCombatStateKeys.FleeDecisionTimer, timer);

    if (timer < combat.GetFleeDecisionDuration()) return false;
    ResetDecisionTimer(context);
    return true;
}`,
  },
  {
    id: "fsm-editor-runner-control",
    label: "УПРАВЛЕНИЕ И ОТЛАДКА",
    title: "Runner владеет жизнью runtime-машины",
    kind: "code",
    body: "StateMachine — обычный C#-класс, не MonoBehaviour. Он не знает про Unity Update, контейнер зависимостей или конкретную сцену. Эти вещи находятся на стороне runner. В проекте runner зарегистрирован как IStartable и ITickable: контейнер вызывает Start один раз и Tick с Time.deltaTime.\n\nУ runner есть ещё одна прикладная ответственность — временно отдать управление объектом внешней игровой сессии. При SetExternalControl(true) он останавливает навигацию и очищает запрос атаки. Последующие Tick не передаются StateMachine, поэтому CurrentState, context и весь путь по графу сохраняются. После возврата управления runner продолжит вызывать Tick с того же состояния.\n\nДля проверки поведения runner после запуска и после каждого Tick передаёт имя CurrentState и текущее здоровье в NpcLifetimeScope. Поле currentState помечено ReadOnlyInInspector. Это даёт разработчику простую runtime-наблюдаемость: в Inspector видно, в каком состоянии сейчас находится объект, без ручных логов в каждом behaviour.",
    language: "csharp",
    code: `public void Tick()
{
    if (isExternallyControlled)
    {
        UpdateRuntimeDebugInfo();
        return;
    }

    stateMachine?.Tick(Time.deltaTime);
    UpdateRuntimeDebugInfo();
}

private void UpdateRuntimeDebugInfo()
{
    var stateName = stateMachine?.CurrentState != null
        ? stateMachine.CurrentState.name
        : "None";
    npcScope.SetRuntimeDebugInfo(statsController.Hp.Value.Value, stateName);
}`,
  },
  {
    id: "fsm-editor-authoring-rules",
    label: "ПРАВИЛА РЕДАКТИРОВАНИЯ",
    title: "Редактор удерживает однозначную структуру",
    kind: "code",
    body: "У карточки State есть владелец — один Node в текущем графе. Когда автор пытается назначить тот же State второй карточке, окно показывает предупреждение и не применяет замену. Переход также может находиться только в одном списке Transitions: редактор проверяет и другой State, и дубликат в той же карточке.\n\nЭти правила важны для читаемости полотна и для исполнения. Одна карточка означает один режим в текущем графе. Одна стрелка имеет одного источника и одну точку настройки. В результате authoring-представление совпадает с тем, как StateMachine проходит списки Behaviours и Transitions в runtime.",
    language: "csharp",
    code: `if (newState != null && currentGraph.Nodes.Exists(
        node => node != currentNode && node.State == newState))
{
    EditorUtility.DisplayDialog(
        "Duplicate State Detected",
        $"State \\"{newState.name}\\" is already assigned to another node.",
        "OK");
    return;
}

bool duplicateInOtherState = currentGraph.Nodes.Any(node =>
    node.State != null && node.State != state &&
    node.State.Transitions != null &&
    node.State.Transitions.Contains(newTransition));`,
  },
  {
    id: "fsm-editor-result",
    label: "ИТОГ",
    title: "Один инструмент, несколько уровней сложности поведения",
    kind: "text",
    body: "Редактор FSM даёт автору рабочее место для конечного автомата: карточки состояний, составные поведения, переходы с условиями и действиями, явный порядок приоритетов, проверку структуры и общее графовое полотно. Runtime-слой исполняет те же данные предсказуемым циклом: запускает все Logic активного состояния, ищет первый допустимый переход, выполняет действия перехода и проводит объект через Exit и Enter.\n\nСамое ценное здесь — связка редактора и исполнения. На полотне видна именно та структура, по которой пройдёт код. Когда нужно добавить новую реакцию, разработчик создаёт Behaviour, Condition или ActionOnTransitionBase, подключает asset к нужной карточке и сразу видит её место среди остальных правил. Это позволяет развивать поведение по частям, сохраняя общую картину графа.",
  },
];

export const rpgStorySectionsDraft: ContentSection[] = [
  {
    id: "rpg-chapter-foundation",
    label: "ГЛАВА I",
    title: "Основа игрового мира",
    kind: "chapter",
    body: "Игровая сессия начинается раньше, чем игрок видит первую сцену. ProjectLifetimeScope поднимается один раз при запуске приложения и остаётся в памяти при переходах между локациями. В нём живут общие вещи: конфигурации, загрузка, локализация, сохранения и аудиосервис.\n\nКогда загружена игровая сцена, появляется GameLifetimeScope. Он собирает именно эту сессию: шины сообщений, реестры целей, контексты взаимодействий, игрока, Canvas и объекты мира. У каждого объекта есть свой набор зависимостей и понятный срок жизни. Поэтому NPC, сундук или страница интерфейса не разыскивают нужные компоненты по всей сцене.",
    media: [
      {
        alt: "Нужна схема запуска: ProjectLifetimeScope создаётся до сцены; GameLifetimeScope поднимает игровую сессию; внутри появляются PlayerLifetimeScope, CanvasLifetimeScope и scope интерактивных объектов. Стрелки должны показывать направление владения, а не вызовы каждого класса.",
        caption:
          "ТЗ для схемы: жизненный цикл контейнеров и объектов игровой сессии.",
      },
    ],
  },
  {
    id: "rpg-bootstrap",
    label: "ЗАПУСК",
    title: "Проектный контейнер появляется раньше первой сцены",
    kind: "code",
    body: "До первой сцены Unity вызывает ProjectBootstrap. Он создаёт prefab постоянного контейнера, если тот ещё не существует. Это короткое место входа, из которого начинается весь запуск приложения.\n\nДальше GameLifetimeScope собирает игровую сцену. После загрузки данных сохранения он создаёт игрока из prefab, ставит его в стартовую точку или в сохранённую позу и передаёт его transform аудиосервису. Игрок появляется уже в готовой среде: карта, сохранение, звук и общие сервисы успели инициализироваться.",
    language: "csharp",
    code: `[RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.BeforeSceneLoad)]
private static void Initialize()
{
    if (ProjectLifetimeScope.Instance != null) return;

    var prefab = Resources.Load<ProjectLifetimeScope>("Project/ProjectLifetimeScope");
    var scope = Object.Instantiate(prefab);
    scope.name = prefab.name;
}

internal void InitializeWorld(LocationTransitionService transitions, IAudioService audio, Pose? savedPose)
{
    playerScope = CreateChildFromPrefab(PlayerPrefab, _ => { });
    if (transitions.TryGetPlayerSpawn(out var spawnPose))
        PlacePlayerAtSpawn(playerScope, spawnPose);
    if (savedPose.HasValue)
        PlacePlayerAtSpawn(playerScope, savedPose.Value);
    audio.SetListenerTransform(playerScope.transform);
}`,
    media: [
      {
        alt: "Нужен GIF 8–12 секунд: запуск игры, появление игрока в стартовой точке, затем переход в другую локацию и восстановление управления. Без монтажных эффектов; важно показать непрерывность игровой сессии.",
        caption: "ТЗ для GIF: запуск сессии и работа перехода между локациями.",
      },
    ],
  },
  {
    id: "rpg-messages",
    label: "СВЯЗЬ СИСТЕМ",
    title: "События связывают ввод, режим игры и интерфейс",
    kind: "text",
    body: "Нажатие клавиши инвентаря не создаёт окно напрямую. InputHandler публикует InventoryInputMessage. GameModesController решает, допустим ли переход в текущем состоянии игры, меняет GameMode на Inventory и сообщает об этом остальным. PagesController получает новое состояние и открывает InventoryPage.\n\nТот же маршрут работает для карты, журнала, паузы, диалога, торговли и смерти. Благодаря этому страница инвентаря не зависит от конкретной клавиши, а обработчик ввода не знает, из каких префабов состоит интерфейс. GameMode становится общим правилом для интерфейса, курсора, времени и доступных действий персонажа.",
    details: [
      {
        title: "InputHandler",
        body: "Читает действия Unity Input System и публикует предметные сообщения.",
      },
      {
        title: "GameModesController",
        body: "Хранит активный GameMode, обрабатывает запросы на переключение и публикует изменение режима.",
      },
      {
        title: "PagesController",
        body: "Разрешает GameMode в конкретную страницу, завершает предыдущую и вызывает Draw у следующей.",
      },
      {
        title: "Контексты",
        body: "LootingContext, DialogueContext, InventoryInteractionContext и другие держат временное состояние конкретного сценария.",
      },
    ],
    media: [
      {
        alt: "Нужна компактная схема события: клавиша инвентаря → InventoryInputMessage → GameModesController → GameModeChangedMessage → PagesController → InventoryPage.Draw. Отдельно отметить, что InventoryPage подписывается на PlayerInventory уже после открытия.",
        caption:
          "ТЗ для схемы: путь одного пользовательского действия до страницы интерфейса.",
      },
    ],
  },
  {
    id: "rpg-chapter-player",
    label: "ГЛАВА II",
    title: "Игрок, взаимодействие и бой",
    kind: "chapter",
    body: "На экране игрок видит одного персонажа. В коде его движение, камера, характеристики, инвентарь, оружие, попадания и взаимодействия существуют как отдельные части. PlayerLifetimeScope создаёт их вместе и передаёт общий контекст: transform, Animator, CharacterController, характеристики, инвентарь и каналы сообщений.\n\nТакое разделение заметно в обычной игре. Удар меняет здоровье, здоровье обновляет HUD, анимация открывает окно попадания, инвентарь влияет на экипировку и вес. Каждая часть занимается своим участком этого пути, поэтому новая механика не превращает одного контроллера игрока в место, где собрана вся игра.",
    media: [
      {
        src: "/content/projects/rpg/rpg-village-lookout.png",
        alt: "Игрок на лесной локации RPG",
        caption: "Игровая сцена: персонаж, окружение и точка обзора игрока.",
      },
    ],
  },
  {
    id: "rpg-interaction",
    label: "ВЗАИМОДЕЙСТВИЕ",
    title: "Мир отвечает на действие игрока через Interactable",
    kind: "gallery",
    body: "Когда персонаж подходит к предмету, сундуку, урожаю или собеседнику, он видит одну и ту же подсказку взаимодействия. За ней стоит Interactable: он хранит доступность объекта, текст подсказки и связанную логику. PlayerInteractableLogic выбирает доступную цель и передаёт ей подтверждённое действие.\n\nДальше каждый объект делает своё дело. ItemHolder отдаёт предмет, сундук открывает второй инвентарь, торговец создаёт контекст торговли, объект с диалогом открывает разговор. Общий вход делает управление понятным, а смысл действия остаётся у самого объекта.",
    media: [
      {
        src: "/content/projects/rpg/interaction-rpg-01.png",
        alt: "Пример взаимодействия игрока с объектом в RPG",
        caption:
          "Взаимодействие в сцене: объект сообщает доступное действие, игрок подтверждает его обычным вводом.",
      },
      {
        alt: "Нужен скриншот: игрок стоит у двух разных интерактивных объектов, на одном кадре видна подсказка взаимодействия. Для второго объекта сделать отдельный кадр с открывшимся результатом: сундук, диалог или сбор предмета.",
        caption:
          "ТЗ для пары скриншотов: единая точка входа и разные результаты взаимодействия.",
      },
    ],
  },
  {
    id: "rpg-combat",
    label: "БОЙ",
    title: "Оружие, действие персонажа и результат попадания",
    kind: "text",
    body: "Удар начинается с намерения игрока, но урон появляется только в нужный кадр анимации. Контроллер оружия принимает ввод, запускает действие персонажа и ждёт анимационное событие. В этот момент EquippedWeaponDamageWindowController открывает WeaponDamageZone. Она получает пересечения с hitbox цели, после чего CharacterDamageReceiver рассчитывает итог и запускает реакцию.\n\nТак замах, попадание и последствия не сливаются в один вызов. Анимация отвечает за ритм удара; зона оружия — за факт контакта; получатель урона — за защиту, HP и реакцию. Поэтому тот же расчёт работает для разных видов оружия и разных целей.",
    media: [
      {
        src: "/content/projects/rpg/npc-combat-01.png",
        alt: "Бой персонажа и NPC в RPG",
        caption:
          "Бой в сцене: дистанция, анимация атаки и реакция противника работают как разные слои одной ситуации.",
      },
      {
        src: "/content/projects/rpg/npc-combat-02.png",
        alt: "Второй кадр боевой ситуации в RPG",
        caption:
          "Второй кадр для сравнения положения участников и работы боевой дистанции.",
      },
      {
        alt: "Нужен короткий GIF: персонаж достаёт оружие, начинает атаку, в точке удара цель получает реакцию. На записи должны быть видны полный замах и завершение реакции.",
        caption:
          "ТЗ для GIF: связь анимационного события, damage window и реакции на попадание.",
      },
    ],
  },
  {
    id: "rpg-player-control",
    label: "УПРАВЛЕНИЕ И ЦЕЛЬ",
    title: "Режим игры определяет, какие действия остаются у игрока",
    kind: "code",
    body: "Персонаж двигается во время игры и при открытом инвентаре. Карта, журнал, диалог и пауза забирают это управление. PlayerMovementController получает PlayerMoveMessage, сверяется с текущим GameMode и передаёт направление в PlayerMovement. Когда движение снова разрешено, камера возвращается к игровому target.\n\nЗахват цели обновляется каждый кадр. TargetLockController берёт кандидатов из реестра, проверяет видимость и валидность, удерживает цель ещё короткое время после потери из поля зрения и передаёт её камере. Он же разворачивает модель к противнику. Перекат и другие действия могут временно приостановить этот разворот, поэтому анимация не борется с захватом цели за поворот персонажа.",
    language: "csharp",
    code: `private void OnGameModeChanged(GameModeChangedMessage msg)
{
    if (msg.GameMode is GameMode.Game or GameMode.Inventory)
    {
        playerMovement.ChangeState(true);
        cameraMotor.ChangeGameplayTarget(transform);
    }
    else
    {
        playerMovement.ChangeState(false);
    }
}`,
    media: [
      {
        alt: "Нужен GIF: игрок берёт цель в target lock, обходит её, затем цель скрывается за препятствием или выходит из зоны и lock переключается либо снимается. Важно показать камеру и поворот персонажа.",
        caption: "ТЗ для GIF: жизненный цикл target lock.",
      },
    ],
  },
  {
    id: "rpg-damage-pipeline",
    label: "РАСЧЁТ УРОНА",
    title: "Попадание проходит через тело, защиту и состояние боя",
    kind: "code",
    body: "Попадание в голову и попадание в руку не обязаны давать один результат. CharacterDamageReceiver получает WeaponHit вместе с BodyHitbox, проверяет неуязвимость, берёт множитель части тела и учитывает защиту из экипировки. Учебная сессия при необходимости ограничивает урон. Только после этих проверок StatsController уменьшает HP.\n\nВ CharacterDamagedMessage остаётся вся картина попадания: исходный урон, множитель, защита, фактический результат и точка контакта. HUD и реакции персонажа подписываются на изменение характеристик и на это сообщение. Боевой код не рисует интерфейс сам и не решает, как именно показать игроку потерю здоровья.",
    language: "csharp",
    code: `var bodyMultiplier = Mathf.Max(0f, hitbox.DamageMultiplier);
var defense = PhysicalDefenseCalculator.ResolveProtection(inventory, hitbox.BodyPart);
var damage = hit.Damage * bodyMultiplier * (1f - defense);
damage = nonLethalCombatSessions.ClampIncomingWeaponDamage(this, damage);

var previousHp = statsController.Hp.Value.Value;
statsController.AddValue(StatType.Hp, -damage);
var finalDamage = Mathf.Max(0f, previousHp - statsController.Hp.Value.Value);`,
    media: [
      {
        alt: "Нужна схема удара: animation event открывает WeaponDamageZone → BodyHitbox → CharacterDamageReceiver → PhysicalDefenseCalculator и StatsController → CharacterDamagedMessage → реакция, UI и AI. Стрелки должны показывать порядок обработки.",
        caption: "ТЗ для схемы: полный путь одного попадания.",
      },
    ],
  },
  {
    id: "rpg-chapter-ui",
    label: "ГЛАВА III",
    title: "Интерфейс игрока и постраничная отрисовка",
    kind: "chapter",
    body: "Инвентарь, карта, журнал, диалог и торговля не лежат скрытыми в Canvas в ожидании открытия. PagesController держит одну активную страницу. При смене GameMode он завершает текущую страницу и создаёт следующую.\n\nУ каждой страницы остаётся собственный короткий жизненный цикл: она создаёт нужные объекты, подписывается на данные, принимает ввод и затем всё это освобождает. Поэтому закрытая карта не продолжает искать маркеры под курсором, а закрытый инвентарь не перерисовывает ячейки.",
    media: [
      {
        alt: "Нужна схема страниц: GameMode в центре, вокруг Main, Pause, Inventory, Looting, Dialogue, Trade, Map, Quest, Lesson, Death и SwitchLocation. Показать, что в каждый момент PagesController держит currentPage только одного типа.",
        caption: "ТЗ для схемы: постраничная система интерфейса.",
      },
    ],
  },
  {
    id: "rpg-pages-controller",
    label: "ПОСТРАНИЧНАЯ СИСТЕМА",
    title: "Открытие страницы — это управляемый переход",
    kind: "code",
    body: "PagesController получает GameModeChangedMessage и переводит его в конкретную страницу через ResolvePage. Перед переходом текущая страница узнаёт, что откроется дальше, через PrepareForTransition. Затем она скрывается, а следующая вызывает Draw. BasePage задаёт для этого три понятные точки: Draw, Hide и PrepareForTransition.\n\nInventoryPage при открытии строит сетку и подписывается на инвентарь, характеристики и вес. MapPage создаёт иконку игрока, маркеры заданий и карточки целей. При Hide подписки и временные объекты уходят вместе со страницей. Такой порядок особенно важен в игре, где окна открываются и закрываются десятки раз за сессию.",
    language: "csharp",
    code: `private void Update(GameMode gameMode)
{
    var nextPage = ResolvePage(gameMode);
    currentPage?.PrepareForTransition(nextPage.Type);
    HideCurrentPage();
    currentPage = nextPage;
    currentPage?.Draw();
}

public abstract class BasePage
{
    public abstract PageType Type { get; }
    public abstract void Draw();
    public virtual void PrepareForTransition(PageType nextPageType) { }
    public abstract void Hide();
}`,
    media: [
      {
        alt: "Нужно видео 15–20 секунд без склеек: игрок последовательно открывает инвентарь, карту, журнал и паузу, затем возвращается в игру. Курсор и блокировка управления должны быть видны.",
        caption: "ТЗ для видео: переключение страниц через единый GameMode.",
      },
    ],
  },
  {
    id: "rpg-popups",
    label: "POP-UP И КОНТЕКСТНЫЕ ДЕЙСТВИЯ",
    title: "Карточки предметов и маркеров живут рядом с источником",
    kind: "text",
    body: "InventoryPage ведёт список PopupTarget для предметов и слотов. Pop-up открывается по наведению после задержки либо сразу по правой кнопке мыши. Пока карточка открыта, её позиция обновляется относительно указателя; при перерисовке инвентаря, смене предметов или закрытии страницы она уничтожается вместе с остальным временным UI.\n\nПКМ открывает уже не справочную карточку, а небольшое меню операций над конкретным предметом. У предмета в сетке доступны «использовать», «выбросить половину» для стака и «выбросить»; у предмета в слоте — вернуть в инвентарь, если это допускают правила, либо выбросить. Меню получает тот же PopupTarget, поэтому действие всегда относится к тому же стеку или слоту, который выбрал игрок. После нажатия оно закрывается, выполняет операцию модели и позволяет странице перерисоваться по новому состоянию.\n\nНа карте похожий механизм работает для маркеров заданий. MapPage каждый Tick ищет marker под курсором, выдерживает PopupHoverDelaySeconds, создаёт QuestPopup и заполняет его названием квеста, текущей целью, описанием и иконкой. Pop-up отключает raycast, чтобы он не перехватывал наведение у маркера.",
    media: [
      {
        alt: "Нужен скриншот инвентаря: курсор над предметом, открыта подробная карточка со свойствами. В кадре должны быть видны сам предмет, его ячейка и pop-up, чтобы была понятна привязка.",
        caption: "ТЗ для скриншота: pop-up предмета по наведению.",
      },
      {
        alt: "Нужен скриншот инвентаря: открыто контекстное действие по ПКМ на предмете. В кадре показать курсор или визуальное состояние, которое отличает этот режим от hover-pop-up.",
        caption: "ТЗ для скриншота: действие по правой кнопке мыши.",
      },
      {
        alt: "Нужен скриншот карты: курсор на маркере квеста, рядом открыта карточка с названием квеста, текущей целью и описанием.",
        caption: "ТЗ для скриншота: pop-up цели на карте.",
      },
    ],
  },
  {
    id: "rpg-inventory-ui",
    label: "ИНВЕНТАРЬ В UI",
    title: "Открытая страница пересобирает только своё представление",
    kind: "gallery",
    body: "Открывая инвентарь, игрок получает сетку предметов, экипировку, быстрые слоты, вес и характеристики. InventoryPage собирает это представление в Draw, затем подписывается на PlayerInventory, HandSlot, вес и реактивные характеристики. Когда модель меняется, ReDraw создаёт актуальные предметы и слоты заново.\n\nОтдельный Tick нужен только для того, что действительно меняется в кадре: предмета в руке, hover-карточки и кэша слотов. Canvas не перерисовывается вслепую. Модель сообщает о содержательном изменении, а страница обновляет своё временное представление.",
    media: [
      {
        src: "/content/projects/rpg/inventory-trade-rpg.jpg",
        alt: "Окно торговли и два инвентаря в RPG",
        caption:
          "Страница торговли: сеточный инвентарь, экипировка, быстрые слоты, вес предметов и операции между двумя владельцами.",
      },
      {
        alt: "Нужен GIF: игрок переносит предмет в руке между ячейками, затем экипирует его и наблюдает обновление слота и веса. Запись должна сохранять полный путь предмета без ускорения.",
        caption: "ТЗ для GIF: модель инвентаря и её визуальное представление.",
      },
    ],
  },
  {
    id: "rpg-chapter-items",
    label: "ГЛАВА IV",
    title: "Предметы, инвентарь и экономика",
    kind: "chapter",
    body: "У предмета есть одно авторское описание — ItemConfig. В нём лежат постоянный ID, категория, иконка, вес, размер в сетке и свойства. В игре этот тип превращается в ItemStack с количеством, затем в ItemInInventory с координатами, поворотом и контейнером.\n\nОдин и тот же ItemConfig проходит через всю игру: лежит на земле, занимает место в рюкзаке, попадает в экипировку, продаётся торговцу и записывается в сохранение по ID. При этом в сохранение не нужно копировать изображение, описание и характеристики предмета — достаточно восстановить их из исходного конфига.",
    media: [
      {
        alt: "Нужен скриншот Unity Inspector с ItemConfig одного предмета. Должны быть видны его постоянный ID, иконка, размер в сетке, вес, категория и настройка визуала или экипировки. Личные данные можно скрыть.",
        caption: "ТЗ для скриншота: авторские данные предмета.",
      },
    ],
  },
  {
    id: "rpg-inventory-model",
    label: "МОДЕЛЬ ИНВЕНТАРЯ",
    title: "Сетка, слоты и предмет в руке описывают одну операцию",
    kind: "text",
    body: "PlayerInventory одновременно хранит сетку рюкзака, экипировку, быстрые слоты и HandSlot. Когда игрок берёт предмет мышью, стек на время оказывается в HandSlot. Оттуда его можно положить в новую ячейку, надеть, вернуть обратно или выбросить в мир. Модель знает правила размера, поворота, совместимости слота, веса и переполнения.\n\nСундук, торговец и тело используют другие реализации инвентаря, но говорят с UI на одном языке: есть ячейки, стеки и операции размещения. Поэтому looting и trade показывают разные сценарии владения предметами, не изобретая отдельную механику переноса для каждого. Деньги живут в MoneyStorage; торговля меняет их отдельно от сетки предметов.",
    details: [
      {
        title: "ItemConfig",
        body: "Неизменяемое авторское описание типа предмета с постоянным ID для поиска при загрузке.",
      },
      { title: "ItemStack", body: "Количество единиц одного ItemConfig." },
      {
        title: "ItemInInventory",
        body: "Стек плюс координаты, поворот и контейнер, в котором он находится.",
      },
      {
        title: "HandSlot",
        body: "Временное место для предмета во время drag-and-drop и операций по ячейкам.",
      },
    ],
    media: [
      {
        alt: "Нужна схема данных предмета: ItemConfig → ItemStack → ItemInInventory. От ItemInInventory провести линии к координатам tiled-сетки, слоту экипировки и HandSlot. Схема должна быть спокойной, без игровых иконок.",
        caption:
          "ТЗ для схемы: данные предмета от authored config до положения в инвентаре.",
      },
    ],
  },
  {
    id: "rpg-trade-loot",
    label: "ЛУТ И ТОРГОВЛЯ",
    title: "Один интерфейс обслуживает разные сценарии владения",
    kind: "gallery",
    body: "Открыв сундук или обыскав тело, игрок видит два инвентаря рядом. LootingContext хранит текущую добычу, а LootingPage показывает её содержимое рядом с рюкзаком персонажа. Торговля устроена похоже: MerchantInteractionScope собирает встречу с продавцом, MerchantInventory хранит товар, TradePage добавляет цены и MoneyStorage.\n\nСтраница не решает, помещается ли предмет и можно ли его купить. Она просит модель выполнить действие и показывает результат. Поэтому меч можно снять с тела, достать из сундука, купить или переложить в собственном рюкзаке по одним правилам размещения.",
    media: [
      {
        src: "/content/projects/rpg/inventory-trade-rpg.jpg",
        alt: "Торговля между двумя инвентарями в RPG",
        caption:
          "Два владельца предметов на одной странице: операция меняет данные инвентарей и денег, UI отражает результат.",
      },
      {
        alt: "Нужен скриншот looting-страницы: слева инвентарь сундука или тела, справа инвентарь игрока, в центре предмет в руке либо выделенная ячейка. Важно показать, что это другой сценарий того же интерфейса.",
        caption: "ТЗ для скриншота: добыча из сундука или тела.",
      },
    ],
  },
  {
    id: "rpg-chapter-npc",
    label: "ГЛАВА V",
    title: "NPC, существа и живой мир",
    kind: "chapter",
    body: "NPC видит цель, замечает предметы, ходит по NavMesh, вступает в бой, разговаривает, получает урон и оставляет добычу. Для каждого экземпляра его scope собирает эти части вместе: характеристики, зрение, навигацию, инвентарь, бой, диалог, реакцию и лут.\n\nПосле этого runner создаёт StateMachine для конкретного объекта. Граф описывает возможные состояния, а машина хранит только текущий путь именно этого NPC: выбранную цель, таймеры, данные навигации и прочие факты встречи. Два персонажа могут пользоваться одним графом и в этот же момент находиться в совершенно разных состояниях.",
    media: [
      {
        src: "/content/projects/rpg/npc-combat-01.png",
        alt: "NPC в боевой ситуации RPG",
        caption:
          "Сцена поведения NPC: восприятие, навигация, бой и анимация встречаются в одном игровом моменте.",
      },
    ],
  },
  {
    id: "rpg-npc-perception",
    label: "ВОСПРИЯТИЕ И ПОВЕДЕНИЕ",
    title: "Цель, предмет и опасность становятся входными данными автомата",
    kind: "text",
    body: "Зрение NPC ищет персонажей, отдельный сенсор ищет предметы. NpcItemInterest запоминает найденную вещь, NpcInventoryPlanner оценивает её пользу, NpcItemPickupService выполняет подбор. В бою работают NpcCombatService, профиль противника и NpcNavMeshController.\n\nГраф состояний связывает эти факты в поведение. В состоянии «идти к предмету» behaviour берёт текущий интерес и отдаёт навигации точку назначения. Условие перехода к подбору проверяет, дошёл ли NPC. Другой переход видит боевую цель и переводит персонажа в бой. На графе виден порядок решений; физика, поиск и движение остаются в специализированных сервисах.",
    media: [
      {
        alt: "Нужен GIF: NPC замечает предмет, подходит, подбирает его и возвращается к обычному поведению. Запись должна показывать весь путь, желательно с коротким кадром FSM runtime-debug в Inspector или визуальным названием состояния.",
        caption:
          "ТЗ для GIF: предметное восприятие и последовательность состояний NPC.",
      },
      {
        alt: "Нужен GIF: NPC замечает цель, сближается, занимает место вокруг цели и атакует. Нужны кадры, где видно, что NPC не просто идёт в центр противника.",
        caption: "ТЗ для GIF: боевая навигация и состояния NPC.",
      },
    ],
  },
  {
    id: "rpg-npc-fsm-link",
    label: "FSM В ПРОЕКТЕ",
    title: "Граф поведения остаётся авторскими данными",
    kind: "text",
    body: "StateMachineGraph, State, Transition, Behaviour и Condition существуют как отдельные ассеты. Runner создаёт только runtime-оболочку: CurrentState, время и StateMachineContext. Поэтому два NPC могут использовать один граф, не деля текущую фазу боя, временные таймеры или ссылки на цели.\n\nВ базовых графах есть состояния ожидания, диалога, подбора предметов, возвращения домой, попадания, бегства и боевых тактик. Условия определяют доступный переход, поведения регулярно исполняют работу активного состояния. Подробный разбор порядка Tick, приоритетов переходов, Enter/Logic/Exit и устройства редактора вынесен на отдельную страницу FSM, чтобы страница RPG оставалась картой всей игры.",
    media: [
      {
        src: "/content/tools/fsm-editor/state-machine-editor.jpg",
        alt: "Редактор FSM в Unity Editor",
        caption:
          "Граф поведения как authored-данные: отдельная страница редактора раскрывает его исполнение и поддержку структуры.",
      },
    ],
  },
  {
    id: "rpg-chapter-story",
    label: "ГЛАВА VI",
    title: "Диалоги, квесты, фракции и состояние мира",
    kind: "chapter",
    body: "Разговор, задание и отношения фракций меняют ход игры, но исходные графы и конфигурации остаются контентом. Диалог смотрит на текущий квест, предметы, деньги и runtime-флаги, затем показывает только доступные ответы. QuestController хранит прохождение отдельно от QuestGraph. Карта и журнал читают текущую цель из этого прогресса.\n\nОтношения фракций тоже начинают жизнь как authored-данные, после запуска переходят в изменяемое runtime-состояние. Игровой выбор может изменить отношение, сохранение запишет результат, а исходный asset не будет испорчен прохождением одной сессии.",
    media: [
      {
        src: "/content/tools/quest-editor/quest-journal.png",
        alt: "Журнал квестов во время игры",
        caption:
          "Журнал читает текущий QuestProgress и показывает задачу, созданную из данных графа.",
      },
      {
        src: "/content/tools/faction-relations-editor/faction-relations-editor.jpg",
        alt: "Редактор отношений фракций",
        caption:
          "Авторские отношения фракций задают начальное состояние runtime-системы.",
      },
    ],
  },
  {
    id: "rpg-dialogue-runtime",
    label: "ИСПОЛНЕНИЕ ДИАЛОГА",
    title:
      "Ответ сначала проверяется как доступный, затем становится игровым действием",
    kind: "code",
    body: "Открытый разговор хранится в DialogueContext: с кем говорит игрок, какой граф открыт, на какой фразе он находится, какие у собеседника есть деньги и инвентарь, разрешён ли выход. DialogueAnswerProvider читает текущую фразу и собирает видимые варианты: обычные ответы, темы разговора, возврат к разговору и авторский выход. Условия проверяются по текущему состоянию игры.\n\nПосле выбора ответ проверяется ещё раз в DialogueAnswerExecutionService. Это защищает разговор от устаревшего или программно вызванного выбора: сначала убеждаемся, что условие по-прежнему выполняется, потом меняем деньги, предметы, квест или runtime-флаг. DialoguePage показывает результат как уведомление и публикует gameplay events. Граф описывает содержание и последствия ответа; способ показать разговор остаётся делом интерфейса.",
    language: "csharp",
    code: `if (!DialogueAnswerAvailability.AreConditionsSatisfied(
        hasConditions, conditions, playerInventory,
        playerMoneyStorage, questController, runtimeFlags))
{
    return false;
}

foreach (DialogAnswerCondition condition in conditions)
{
    switch (condition.Type)
    {
        case DialogAnswerConditionType.TakeItemIfHas:
            playerInventory.TryConsumeItemCount(condition.ItemConfig, condition.ItemCount);
            break;
        case DialogAnswerConditionType.DoQuestStep:
            questController.TryExecuteTransition(condition.QuestGraph, condition.QuestTransition);
            break;
        case DialogAnswerConditionType.SetRuntimeFlag:
            runtimeFlags.Activate(condition.RuntimeFlag);
            break;
    }
}`,
    media: [
      {
        alt: "Нужна схема одного ответа диалога: DialogPhrase → DialogueAnswerProvider проверяет условия → кнопка в DialoguePage → DialogueAnswerExecutionService повторно проверяет и применяет последствия → QuestController, PlayerInventory, MoneyStorage или RuntimeFlagRegistry. Показать прямые стрелки и отдельной подписью отметить, что DialogGraph остаётся authored-ассетом.",
        caption:
          "ТЗ для схемы: путь одного ответа от графа до изменения игрового состояния.",
      },
    ],
  },
  {
    id: "rpg-quest-flow",
    label: "КВЕСТ КАК ПРОГРЕСС",
    title: "Граф задания и прохождение задания существуют раздельно",
    kind: "code",
    body: "QuestGraph описывает само задание: этапы, переходы, условия, результаты, текст для журнала и цель на карте. Когда задание начинается, QuestController создаёт QuestProgress. В нём хранится текущий этап, завершённые узлы и факт окончания. Граф остаётся неизменным и может обслуживать много прохождений.\n\nПереход выполняется в строгом порядке: проверить требования, применить результаты, отметить завершённый этап, перейти к следующему и сообщить подписчикам. Автоматические переходы запускаются по одному, чтобы ошибка в графе не превратилась в бесконечный цикл. После загрузки сохранения контроллер отдельно сообщает UI, что найденный прогресс был восстановлен, а не получен игроком только что.",
    language: "csharp",
    code: `public bool TryExecuteTransition(QuestGraph questGraph, QuestTransition transition)
{
    if (!CanExecuteTransition(questGraph, transition)) return false;
    if (!ApplyResults(transition.HasResults ? transition.Results : null)) return false;

    QuestProgress progress = progressByQuest[questGraph];
    progress.SetCurrentNode(transition.TargetNode);
    Changed?.Invoke(new QuestChangeInfo(QuestChangeType.Updated, questGraph));
    return true;
}

public void SetCurrentNode(QuestNodeData nodeData)
{
    AddCompletedNode(CurrentNode);
    CurrentNode = nodeData;
}`,
    media: [
      {
        src: "/content/tools/quest-editor/quest-editor-graph.jpg",
        alt: "Графовый редактор квеста в Unity Editor",
        caption:
          "Authoring-граф задания и runtime-прогресс разделены: граф не меняется, прохождение живёт в QuestProgress.",
      },
      {
        alt: "Нужно видео: игрок получает квест в диалоге, открывает журнал, на карте появляется цель, затем действие игрока переводит задание на следующий этап. В кадре нужны все четыре шага.",
        caption:
          "ТЗ для видео: один квест проходит через диалог, журнал, карту и игровой мир.",
      },
    ],
  },
  {
    id: "rpg-factions",
    label: "ФРАКЦИИ",
    title: "Авторские отношения становятся отдельным runtime-состоянием",
    kind: "text",
    body: "FactionRelationsConfig задаёт исходные отношения пар фракций. При запуске RuntimeFactionRelations переносит их в словарь, с которым уже работает игра. Если сценарий меняет дружелюбие или враждебность, меняется эта runtime-копия и приходит событие Changed.\n\nВ сохранение попадает снимок пар по постоянным ID фракций. При загрузке GameSaveService находит актуальные authored-конфигурации и восстанавливает только существующие записи. Так игровая сессия может менять отношения сколько угодно раз, не записывая эти изменения в ScriptableObject.",
    media: [
      {
        src: "/content/tools/faction-relations-editor/faction-relations-editor.jpg",
        alt: "Редактор отношений фракций в Unity Editor",
        caption:
          "Редактор задаёт исходные связи; во время игры RuntimeFactionRelations хранит их изменяемую копию.",
      },
      {
        alt: "Нужен скриншот игрового интерфейса или сцены, где последствия отношения фракции заметны: другой статус, поведение NPC, доступность диалога или реакция на игрока. Если прямого UI нет, нужен кадр двух NPC разных фракций и поясняющая подпись.",
        caption: "ТЗ для скриншота: проявление отношений фракций в игре.",
      },
    ],
  },
  {
    id: "rpg-chapter-saves",
    label: "ГЛАВА VII",
    title: "Сохранения и восстановление мира",
    kind: "chapter",
    body: "Полное сохранение фиксирует мир таким, каким его оставил игрок: позу и характеристики персонажа, деньги, инвентарь, квесты, отношения фракций, флаги диалогов, NPC, предметы на земле, растения и текущую локацию. Эти данные собирают профильные координаторы — каждый отвечает за свой участок мира.\n\nGameSaveService переводит этот снимок в простую структуру PluginYG и обратно. Он не решает, когда завершить квест или куда поставить игрока: правила остаются у квестов, локаций, предметов и NPC. Благодаря этому сохранение соединяет системы, не забирая их предметную логику.",
    media: [
      {
        alt: "Нужна схема сохранения: PlayerSaveCoordinator, NpcSaveCoordinator, DialogueSaveCoordinator, LocationTransitionSaveCoordinator, DroppedItemPersistenceService и PlantWorldPersistenceService собирают снимок через GameSaveController → GameSaveService → SavesYG. Рядом отдельный обратный путь загрузки.",
        caption: "ТЗ для схемы: участники сохранения и восстановления мира.",
      },
    ],
  },
  {
    id: "rpg-save-versioning",
    label: "ВЕРСИИ И ИДЕНТИФИКАТОРЫ",
    title: "Загрузка проверяет данные и переживает изменения контента",
    kind: "code",
    body: "GameSaveService ведёт версию формата. В коде есть отдельные миграционные ступени для квестов, характеристик выживания, состояния персонажа, immutable ID NPC, предметов мира, растений и рекламного состояния. При появлении постоянных ID у NPC старые записи, завязанные на путь объекта в иерархии, намеренно отбрасываются только для NPC: такую запись нельзя безопасно сопоставить с новой идентичностью.\n\nИнвентарь сохраняется через ID ItemConfig, количество, координаты, поворот и контейнер. При восстановлении ItemStorage ищет конфигурацию по ID; неизвестные или некорректные записи пропускаются, а не ломают загрузку целиком. Квесты используют PersistentId графа и узла. Тот же принцип применяется к фракциям и объектам мира.",
    language: "csharp",
    code: `private const int NpcPersistentIdSaveVersion = 7;
private const int WorldItemsSaveVersion = 8;
private const int PlantWorldSaveVersion = 9;
private const int AdvertisingSaveVersion = 10;
private const int CurrentVersion = AdvertisingSaveVersion;

internal static SavedInventoryItem[] SerializeInventory(PlayerInventory inventory) =>
    inventory.GetPersistenceSnapshot()
        .Where(entry => entry.ItemConfig != null && !string.IsNullOrWhiteSpace(entry.ItemConfig.Id))
        .Select(entry => new SavedInventoryItem {
            itemId = entry.ItemConfig.Id, count = entry.Count,
            x = entry.X, y = entry.Y, rotated = entry.IsRotated ? 1 : 0,
            slot = (int)entry.Container
        }).ToArray();`,
    media: [
      {
        alt: "Нужен GIF: игрок подбирает предмет, меняет состояние мира или этап задания, сохраняет игру, затем загружает сохранение. После загрузки должны быть видны восстановленные предмет, прогресс и позиция.",
        caption:
          "ТЗ для GIF: наблюдаемый результат сохранения и восстановления.",
      },
    ],
  },
  {
    id: "rpg-save-restore",
    label: "ВОССТАНОВЛЕНИЕ",
    title: "Загрузка завершается только после восстановления доменных систем",
    kind: "code",
    body: "PlayerSaveCoordinator ждёт готовности save-контроллера и каталога предметов, регистрирует состояние игрока, восстанавливает его и только затем запускает доступные автоматические переходы квестов. После этого QuestController посылает отдельный сигнал StateRestored. Он нужен подписчикам, чтобы журнал и уведомления не приняли восстановленный прогресс за свежий игровой результат.\n\nЭта последовательность показывает принцип страницы RPG целиком: инфраструктура даёт готовность, доменная система восстанавливает свои данные, затем presentation-слой получает уже согласованное состояние.",
    language: "csharp",
    code: `await saveController.Ready;
await itemStorage.Ready;

saveController.RegisterPlayerState(inventory, money, stats, quests,
    itemStorage, questCatalog, playerTransform);

bool restored = saveController.RestoreRegisteredPlayer();
if (restored)
{
    while (quests.TryExecuteAvailableAutomaticTransition()) { }
    quests.NotifyStateRestored();
}`,
    media: [
      {
        alt: "Нужна схема загрузки: готовность save service → готовность ItemStorage → регистрация игрока → восстановление предметов, денег, статов и квестов → автоматические переходы квестов → StateRestored → журнал и UI.",
        caption: "ТЗ для схемы: порядок восстановления игрока после загрузки.",
      },
    ],
  },
  {
    id: "rpg-debug-validation",
    label: "ОТЛАДКА И ПРОВЕРКИ",
    title: "Системы сообщают о некорректных данных на границе ответственности",
    kind: "text",
    body: "Проверки расположены там, где система получает внешние данные. GameSaveService пропускает неизвестный ItemConfig, потерянный QuestGraph или узел, которого уже нет в графе, и пишет предупреждение. StateMachine runner передаёт текущее имя состояния в scope для просмотра в Inspector. Редакторские окна графов ищут отсутствующие ссылки, изолированные узлы и дублирующиеся связи до запуска сцены.\n\nТакой подход особенно важен для проекта с большим количеством ассетов. Ошибка в одном контентном объекте остаётся локальной, а сообщение показывает, в какой системе и на какой границе данные перестали соответствовать ожиданиям.",
    media: [
      {
        alt: "Нужен скриншот Unity Inspector работающего NPC: рядом с HP виден ReadOnly current state, заданный NpcStateMachineRunner. Важно, чтобы кадр был в Play Mode и показывал именно runtime-значение.",
        caption: "ТЗ для скриншота: runtime-отладка состояния NPC.",
      },
      {
        alt: "Нужен скриншот редактора графов с предупреждением: изолированный узел, отсутствующая цель перехода или другая структурная проблема. В кадре должна быть видна и карточка, и само предупреждение.",
        caption: "ТЗ для скриншота: проверка authored-данных до запуска.",
      },
    ],
  },
  {
    id: "rpg-end-to-end-cases",
    label: "СКВОЗНЫЕ СЦЕНАРИИ",
    title: "Проект читается через путь игровых фактов",
    kind: "text",
    body: "Несколько коротких маршрутов связывают главы страницы. Подбор предмета проходит от Interactable и ItemHolder через PlayerInventory к InventoryPage и снимку сохранения. Квест начинается в диалоге, меняет QuestProgress, появляется в журнале и на карте, затем сохраняется по PersistentId. NPC получает факт о цели от зрения, StateMachine выбирает состояние, навигация и бой исполняют его, урон меняет характеристики и публикует событие реакции.\n\nЭти сценарии нужны на странице рядом с подробными разделами: читатель получает целый путь одной игровой ситуации и затем может углубиться в интересующую систему через содержание.",
    details: [
      {
        title: "Предмет",
        body: "Interactable → ItemHolder → PlayerInventory → InventoryPage → snapshot сохранения.",
      },
      {
        title: "Квест",
        body: "Диалог → QuestController → QuestProgress → журнал и карта → сохранение по PersistentId.",
      },
      {
        title: "Бой",
        body: "Зрение → FSM → навигация и атака → урон → характеристики, реакция и UI.",
      },
    ],
    media: [
      {
        alt: "Нужна широкая схема из трёх горизонтальных дорожек: предмет, квест, бой. В каждой дорожке 5–6 прямоугольников с названиями систем и прямыми стрелками. Цвета спокойные, одна акцентная палитра сайта.",
        caption: "ТЗ для схемы: три сквозных маршрута через игровые системы.",
      },
    ],
  },
  {
    id: "rpg-chapter-content",
    label: "ГЛАВА VIII",
    title: "Контент, локализация и собственные инструменты",
    kind: "chapter",
    body: "Большая часть игровых правил хранится в authoring-данных: ItemConfig, конфигурации характеристик и боя, фракции, графы диалогов, графы квестов, графы FSM, локализованные записи и наборы предметов. Собственные редакторы дают этим данным форму, в которой структуру можно видеть и проверять до запуска сцены.",
    media: [
      {
        src: "/content/tools/dialogue-editor/dialogue-quest-demo.jpg",
        alt: "Диалоговый редактор в Unity Editor",
        caption:
          "Один из инструментов контентного пайплайна: сценарные данные собираются как граф, а runtime читает их без изменения authored-ассетов.",
      },
      {
        alt: "Нужен скриншот Unity Project window и Inspector: рядом должны быть видны папки конфигураций предметов, квестов, диалогов и FSM, а в Inspector — один выбранный asset. Скриншот должен показывать структуру контента, без лишнего интерфейса.",
        caption:
          "ТЗ для скриншота: контент проекта как набор связанных данных.",
      },
    ],
  },
  {
    id: "rpg-editor-links",
    label: "ГРАФОВЫЕ ИНСТРУМЕНТЫ",
    title: "Редакторы входят в производственный контур игры",
    kind: "text",
    body: "Редакторы диалогов, квестов и FSM используют одно графовое полотно, общие операции с узлами и связями, проверки ссылок и специализацию предметных данных. Каждый результат сохраняется как набор ScriptableObject-ассетов. Runtime-системы получают эти данные через scope и создают собственное изменяемое состояние только на время игры.\n\nНа странице RPG важно видеть место инструментов в общей архитектуре: диалог открывает и меняет сценарное состояние; квест сообщает журналу и карте текущую цель; FSM управляет поведением NPC; сохранения фиксируют прогресс, не меняя исходные графы. Подробные статьи раскрывают каждый редактор отдельно.",
    media: [
      {
        src: "/content/tools/fsm-editor/state-machine-editor.jpg",
        alt: "Редактор FSM в Unity Editor",
        caption: "Граф поведения NPC.",
      },
      {
        src: "/content/tools/quest-editor/quest-editor-graph.jpg",
        alt: "Редактор квестов в Unity Editor",
        caption: "Граф задания и его этапов.",
      },
    ],
  },
  {
    id: "rpg-chapter-world",
    label: "ГЛАВА IX",
    title: "Локации, растения, звук, обучение и наблюдаемость",
    kind: "chapter",
    body: "Эти подсистемы дополняют основной игровой цикл: загрузка управляет переходом между сценами, растения меняют мир во времени, звук обслуживает UI и сцену через пулы источников, обучение связывает практику с квестами и диалогами, телеметрия наблюдает за уже совершившимися действиями. Они не меняют чужое доменное состояние напрямую.",
    media: [
      {
        src: "/content/projects/rpg/rpg-city-approach.png",
        alt: "Подход к городу в RPG",
        caption:
          "Локация как часть игровой сессии: переходы, аудио, объекты мира и сохранённая позиция игрока собираются при загрузке.",
      },
    ],
  },
  {
    id: "rpg-world-services",
    label: "СЦЕНА И ЖИВОЙ МИР",
    title: "Загрузка и рост объектов мира имеют собственный жизненный цикл",
    kind: "text",
    body: "SceneLoadingService хранит только подготовленную цель перехода и признак, нужно ли ждать ввода перед активацией. Затем он загружает специальную loading-сцену. Это отделяет решение «куда перейти» от отображения загрузочного экрана и от инициализации целевой локации. LocationTransitionService и координатор сохранений добавляют к этому контекст входа и сохранённую позу игрока.\n\nPlantGrowerByStages показывает другой тип жизни объекта мира. Он хранит текущую стадию и таймер, каждый Tick накапливает время, заменяет prefab следующей стадии, проигрывает звук и отправляет событие завершения роста. Состояние растений участвует в PlantWorldPersistenceService, поэтому растущий объект не возвращается к началу после загрузки.",
    media: [
      {
        alt: "Нужен GIF: растение проходит хотя бы две стадии роста, затем игрок собирает результат. Желательно показать переход между стадиями и короткую реакцию на сбор.",
        caption: "ТЗ для GIF: рост растения как сохраняемое состояние мира.",
      },
      {
        alt: "Нужен скриншот перехода между локациями: loading-экран или страница выбора перехода, на которой ясно видно направление перехода. Если экран минималистичный, показать его рядом с кадром целевой локации.",
        caption: "ТЗ для пары кадров: смена локации через loading-сцену.",
      },
    ],
  },
  {
    id: "rpg-audio-training",
    label: "ЗВУК, ОБУЧЕНИЕ И ТЕЛЕМЕТРИЯ",
    title: "Сервисные системы наблюдают и обслуживают игру",
    kind: "text",
    body: "AudioService создаётся как постоянный сервис и держит ограниченные пулы AudioSource для UI, обычных звуков мира и шагов. Шаги выбирают поверхность лучом без выделения нового массива, получают набор клипов из FootstepConfig и проверяют расстояние до слушателя. Когда пул заполнен, сервис переиспользует источник с наименьшим приоритетом; шаг NPC не должен прерывать важный звук игрока.\n\nTrainingSessionController создаёт учебную ситуацию как отдельную сессию: выдаёт временное оружие с runtime-тегом, управляет учебным квестом, показывает lesson-страницу, отслеживает результат и в конце удаляет временные сущности. QuestTelemetryTracker работает иначе: он подписывается на уже готовый QuestController после восстановления сохранения и отправляет событие только при старте или завершении квеста, не вмешиваясь в его прогресс.",
    media: [
      {
        alt: "Нужно видео: короткая учебная сцена — показ урока, временная цель или противник, выполнение действия и возврат в обычный режим. Нужна видимая связь с квестовой целью или lesson-панелью.",
        caption: "ТЗ для видео: обучение как изолированная игровая сессия.",
      },
      {
        alt: "Нужен скриншот настройки AudioConfig или FootstepConfig в Unity Inspector: категории громкости, prefab источника шагов и параметры поверхности. Важно показать данные, а не только игровую сцену.",
        caption: "ТЗ для скриншота: конфигурация аудиосервиса.",
      },
    ],
  },
  {
    id: "rpg-localization-boot",
    label: "ЗАПУСК И ЛОКАЛИЗАЦИЯ",
    title:
      "Перед игровой сессией проект ждёт данные платформы и подготавливает текст",
    kind: "code",
    body: "Bootloader запускается в постоянном проектном scope. Он ждёт данные SDK, получает язык и сохранение платформы, инициализирует метрику, затем передаёт код языка в LocalizationHelper. Помощник выбирает локаль Unity Localization, загружает таблицы строк и строит кэш по ключам. Только после этого BootCompletion сообщает, что стартовые данные готовы.\n\nЭто влияет на весь интерфейс, а не только на экран выбора языка. Диалоговая страница, журнал заданий, карточки предметов, названия фракций и подписи действий читают LocalizedString через общий кэш. Поэтому при создании UI они получают уже разрешённый текст, а данные графов и конфигов продолжают хранить ссылки на локализованные записи, а не копии строк.",
    language: "csharp",
    code: `await YG2Awaiter.WaitForSDKDataAsync();
YG2.GetLanguage();
YGInsides.LoadProgress();

await LocalizationHelper.InvalidateAsync(YG2.lang);
LocalizationAwaiter.SignalReady();
bootCompletion.Signal();

// Для UI и authored-данных:
string text = localizedString.GetLocalizedStringCached();`,
    media: [
      {
        alt: "Нужен скриншот двух одинаковых игровых экранов на разных языках: например журнал заданий или диалог. Важно, чтобы в обоих кадрах сохранились те же данные и структура UI, изменился только текст.",
        caption:
          "ТЗ для скриншота: локализованные authored-данные в уже работающем интерфейсе.",
      },
    ],
  },
  {
    id: "rpg-death-flow",
    label: "СМЕРТЬ И ВОЗВРАТ УПРАВЛЕНИЯ",
    title: "Нулевое HP переводит персонажа в отдельный режим игры",
    kind: "text",
    body: "PlayerDeathController подписывается на HP и один раз реагирует на достижение минимального значения. Контроллер помечает персонажа мёртвым, выключает перемещение и locomotion-анимацию, выбрасывает экипированное оружие, отключает CharacterController, включает ragdoll и активирует тело как объект добычи. Затем он публикует PlayerDiedMessage и запрашивает GameMode.Death.\n\nСмерть здесь не является только визуальной анимацией. Она меняет доступные действия, физическое представление персонажа и способ взаимодействия с его предметами. GameModesController не принимает обычные запросы переключения, пока активен Death, поэтому игрок не может открыть навигационные страницы поверх этого состояния.",
    media: [
      {
        alt: "Нужен короткий GIF: персонаж получает последний удар, оружие выпадает, включается ragdoll, затем рядом появляется возможность обыскать тело. Не нужен монтаж: важна последовательность одного события.",
        caption:
          "ТЗ для GIF: смерть как связанный переход состояния персонажа, физики и добычи.",
      },
    ],
  },
  {
    id: "rpg-platform-runtime",
    label: "ПЛАТФОРМЕННЫЙ СЕРВИС",
    title: "Полноэкранные события возвращают игре её собственное состояние",
    kind: "text",
    body: "AdvertisingService живёт в игровой сессии и сам решает, возможен ли показ рекламы: он ждёт готовности сохранения, проверяет grace period новой игры, интервалы между показами, активность SDK и тип текущей сцены. Сервис наблюдает за возвратом из паузы, диалога, торговли, карты, журнала, лута и перехода между локациями, а также за завершением перехода между локациями.\n\nПосле закрытия полноэкранного окна сервис не пытается вручную угадать состояние курсора и времени. На следующем кадре он вызывает GameModesController.RestoreCurrentModeState, который заново применяет правила текущего GameMode. Так возвращается тот же курсор и Time.timeScale, которые были до внешнего окна.",
    media: [
      {
        alt: "Нужен скриншот или короткая запись: открыта карта либо пауза, затем показано внешнее полноэкранное окно платформы и возврат к той же странице с корректным курсором. Если рекламу записать нельзя, подойдёт схема из трёх кадров с этим сценарием.",
        caption:
          "ТЗ для иллюстрации: возврат из внешнего полноэкранного режима в сохранённый GameMode.",
      },
    ],
  },
];

// Текст страницы намеренно отделён от иллюстративных данных выше. Так проще
// поддерживать один голос рассказа, не теряя технические примеры и медиа.
export const rpgStoryCopyDraft: Record<
  string,
  Pick<ContentSection, "title" | "body">
> = {
  "rpg-chapter-foundation": {
    title: "Как собирается игровая сессия",
    body: "Игрок видит локацию, персонажа и интерфейс как одну игру. В коде это несколько контекстов с разным сроком жизни: проект переживает смену сцен, игровая сессия существует внутри загруженной локации, а игрок, UI и NPC получают собственные зависимости.\n\nТакой разбор не даёт состоянию «утекать» между сценами. Сервис загрузки или сохранений не зависит от конкретного уровня, а логика NPC не становится общей для всех персонажей в сцене.",
  },
  "rpg-bootstrap": {
    title: "Общие сервисы создаются до первой сцены",
    body: "Точка входа создаёт корневой контейнер один раз. В нём живут сервисы, которые нужны и в меню, и в игре: загрузка сцен, сохранения, локализация, аудио и конфигурация.\n\nБлагодаря этому любую рабочую сцену можно запускать отдельно. Она подключается к уже определённому набору общих зависимостей, а не ищет объекты из предыдущей сцены.",
  },
  "rpg-messages": {
    title: "Ввод сообщает о намерении, а не открывает окна",
    body: "Нажатие клавиши инвентаря сначала превращается в сообщение. Контроллер игрового режима решает, допустимо ли это действие сейчас: например, карта не должна открываться поверх смерти или диалога.\n\nТолько после смены режима интерфейс выбирает нужную страницу. Поэтому правила игры остаются в одном месте, а UI отвечает за показ уже принятого решения.",
  },
  "rpg-chapter-player": {
    title: "Персонаж как набор согласованных систем",
    body: "Движение, камера, характеристики, экипировка, инвентарь, оружие и взаимодействия не объединены в один управляющий скрипт. У каждой части есть собственная задача, а контекст игрока собирает их в работающего персонажа.\n\nЭто видно и в игре: действие начинается с ввода, проходит через правила текущего режима и заканчивается изменением состояния мира или персонажа.",
  },
  "rpg-interaction": {
    title: "Одна точка входа для сундука, NPC и предмета",
    body: "Подойдя к предмету, сундуку, растению или персонажу, игрок получает знакомую подсказку и одно действие взаимодействия. Сам объект сообщает, доступен ли он и что должно произойти после подтверждения.\n\nОбщий слой не знает, будет ли результатом лут, разговор или сбор урожая. Он передаёт действие владельцу механики, поэтому новые интерактивные объекты не требуют переписывать управление игроком.",
  },
  "rpg-combat": {
    title: "Удар привязан к моменту в анимации",
    body: "Нажатие атаки не наносит урон мгновенно. Оружие запускает действие персонажа, а окно попадания открывает анимационное событие в нужный момент замаха.\n\nДальше отдельные части системы находят цель, проверяют попадание и передают его получателю урона. Это связывает картинку на экране с фактическим результатом и оставляет место для разных типов оружия и реакций.",
  },
  "rpg-player-control": {
    title: "Режим игры определяет доступные действия",
    body: "Инвентарь не требует полностью останавливать персонажа, а диалог, журнал, карта и пауза требуют. Эти различия описывает игровой режим, а контроллер движения лишь проверяет, разрешён ли запрос на перемещение.\n\nТак правила ввода не дублируются в каждой странице UI. При появлении нового режима его поведение задаётся в одном месте.",
  },
  "rpg-damage-pipeline": {
    title: "Попадание и потеря здоровья — разные этапы",
    body: "Информация о попадании включает оружие и часть тела. Получатель урона проверяет защиту и неуязвимость, применяет множитель зоны и только затем меняет здоровье.\n\nОружие не знает формулу защиты конкретной цели, а здоровье не знает, откуда пришёл удар. Такое разделение помогает добавлять броню, уязвимые зоны и реакции без переписывания всей цепочки.",
  },
  "rpg-chapter-ui": {
    title: "Интерфейс существует только в нужный момент",
    body: "Инвентарь, карта, журнал, диалог и торговля — это не постоянно активные окна на Canvas. Контроллер страниц создаёт нужную страницу при смене игрового режима и закрывает её при следующем переходе.\n\nСтраница подписывается только на те данные, которые ей нужны, и отписывается при закрытии. Так представление не хранит устаревшее состояние и не продолжает реагировать, когда его уже нет на экране.",
  },
  "rpg-pages-controller": {
    title: "Смена страницы проходит как явный переход",
    body: "Контроллер получает изменение игрового режима, определяет следующую страницу и даёт текущей странице подготовиться к закрытию. Затем старая страница освобождает подписки, а новая создаётся с подходящим контекстом.\n\nДля игрока это обычное открытие окна. Для кода — предсказуемый жизненный цикл без нескольких одновременно активных экранов.",
  },
  "rpg-popups": {
    title: "Карточка следует за объектом, который её открыл",
    body: "Карточка предмета появляется по наведению или по контекстному действию и знает свой исходный слот. Пока она открыта, её положение пересчитывается относительно этого элемента.\n\nКогда страница закрывается или слот исчезает, карточка закрывается вместе с источником. Это избавляет интерфейс от «висячих» подсказок и случайных ссылок на старые ячейки.",
  },
  "rpg-inventory-ui": {
    title: "Инвентарь отображает модель, а не управляет ею",
    body: "При открытии страница строит сетку рюкзака, экипировку, быстрые слоты, вес и характеристики из состояния персонажа. Затем она обновляет только изменившееся представление по событиям модели.\n\nПеремещение предмета, экипировка и обмен происходят в инвентаре, а UI лишь передаёт намерение игрока и показывает итог. Благодаря этому те же правила работают в торговле и луте.",
  },
  "rpg-chapter-items": {
    title: "Предметы и экономика",
    body: "Описание предмета хранится отдельно от его экземпляров в инвентаре. Конфигурация задаёт постоянные свойства — идентификатор, иконку, размер, вес и правила использования; во время игры появляются стеки, ячейки и владельцы.\n\nЭта граница важна для всего, что связано с предметами: рюкзака, экипировки, добычи, торговли и сохранений. Игра меняет состояние экземпляров, но не авторские данные предмета.",
  },
  "rpg-inventory-model": {
    title: "Сетка и слоты описывают одну операцию с предметом",
    body: "Рюкзак, экипировка, быстрые слоты и предмет в руке работают через одну модель. Временно взятый стек попадает в HandSlot; оттуда его можно положить в свободное место, объединить с другим стеком, экипировать или вернуть владельцу.\n\nСетка проверяет размеры предмета и занятые клетки. Поэтому правила размещения не зависят от того, перетаскивает ли игрок предмет мышью, получает лут или покупает его у торговца.",
  },
  "rpg-trade-loot": {
    title: "Лут и торговля используют общий язык владения",
    body: "При обыске рядом показываются два инвентаря: источник добычи и рюкзак игрока. Торговля устроена похоже, но к передаче предмета добавляет цену и деньги участников.\n\nВ обоих случаях интерфейс получает контекст владельцев, а операция проверяется в модели инвентарей. Разница сценариев не разрастается в две независимые системы перетаскивания.",
  },
  "rpg-chapter-npc": {
    title: "NPC как самостоятельный участник мира",
    body: "NPC может заметить цель, подобрать предмет, пройти по NavMesh, вступить в бой, поговорить, получить урон и оставить добычу. Для каждого экземпляра эти возможности собираются в собственном контексте.\n\nПоэтому персонажи не делят таймеры, цели и временные решения. Общие правила поведения остаются в данных, а конкретная ситуация живёт у конкретного NPC.",
  },
  "rpg-npc-perception": {
    title: "Поведение получает факты, а не ищет их само",
    body: "Зрение NPC обнаруживает персонажей, отдельный сенсор находит предметы. Сервисы интереса и оценки решают, стоит ли брать найденную вещь; боевая часть передаёт автомату сведения об угрозе и цели.\n\nАвтомат получает уже подготовленные факты: кого вижу, что лежит рядом, могу ли атаковать или пора отступать. За счёт этого состояния поведения остаются небольшими и понятными.",
  },
  "rpg-npc-fsm-link": {
    title: "Один граф поведения, отдельное состояние у каждого NPC",
    body: "Граф конечного автомата, состояния, переходы и условия хранятся как авторские ассеты. При запуске Runner создаёт для NPC собственное состояние автомата: текущий узел, время и ссылки на его окружение.\n\nНесколько персонажей могут пользоваться одним графом ожидания, боя или бегства, не влияя друг на друга. Подробное устройство инструмента вынесено на отдельную страницу редактора FSM.",
  },
  "rpg-chapter-story": {
    title: "Сценарий меняет состояние мира",
    body: "Диалоги, задания и отношения фракций связывают историю с игровыми правилами. Разговор может открыть тему, выдать цель, проверить предмет или изменить отношение; задание — направить игрока к следующему действию.\n\nПри этом графы и конфигурации не изменяются во время игры. Изменяется только прохождение конкретного игрока: выбранные ответы, этапы заданий и отношения в мире.",
  },
  "rpg-dialogue-runtime": {
    title: "Выбор игрока сначала проверяется, потом применяется",
    body: "Контекст диалога хранит собеседника, текущую фразу, доступные ресурсы и правила выхода. Перед показом ответа игра проверяет его условия. Перед применением — проверяет ещё раз, чтобы устаревший интерфейс не смог изменить мир.\n\nПосле подтверждения отдельный шаг применяет последствия: предметы, деньги, флаги, этапы заданий или переход к следующей фразе. Это не позволяет проверке доступности случайно стать игровым действием.",
  },
  "rpg-quest-flow": {
    title: "Граф квеста и путь игрока хранятся раздельно",
    body: "QuestGraph описывает квест как контент: этапы, переходы, условия, результаты, текст журнала и цель на карте. Когда игрок получает задание, контроллер создаёт отдельный QuestProgress с текущим этапом и историей прохождения.\n\nЖурнал, карта, диалоги и сохранения читают один и тот же прогресс. Поэтому в разных частях игры не появляются параллельные списки целей с разным состоянием.",
  },
  "rpg-factions": {
    title: "Исходные отношения не смешиваются с решениями игрока",
    body: "Конфигурация фракций задаёт стартовые отношения. В начале сессии игра создаёт изменяемую таблицу отношений, с которой уже работают NPC, диалоги и события.\n\nЕсли сценарий меняет дружелюбие или враждебность, меняется только состояние текущего прохождения. После загрузки оно восстанавливается поверх исходной конфигурации.",
  },
  "rpg-chapter-saves": {
    title: "Мир сохраняется как набор состояний",
    body: "Сохранение фиксирует не только позицию и характеристики игрока. В него входят инвентарь, деньги, задания, отношения фракций, флаги диалогов, состояние NPC, предметы на земле и объекты мира.\n\nУ каждой системы свой координатор восстановления. Общий сервис отвечает за формат и файл, но не пытается сам решать, как собрать персонажа или квест после загрузки.",
  },
  "rpg-save-versioning": {
    title: "Формат сохранения учитывает развитие игры",
    body: "У файла сохранения есть версия и последовательные миграции. При загрузке игра приводит старые данные к текущему формату, а затем сверяет ссылки с существующими конфигурациями и постоянными идентификаторами.\n\nЕсли контент изменился, неизвестная запись не должна ломать всю загрузку. Система пропускает то, что уже нельзя восстановить, и оставляет понятную диагностическую запись.",
  },
  "rpg-save-restore": {
    title: "Загрузка заканчивается после восстановления доменных систем",
    body: "Персонаж восстанавливается только после готовности сохранения и каталога предметов. Затем контроллеры возвращают задания, фракции, мир и остальные зависимые состояния в определённом порядке.\n\nОтдельный сигнал сообщает UI и наблюдателям, что это восстановление, а не новое игровое событие. Так журнал не выдаёт старую цель за свежую награду, а автоматика не запускается раньше времени.",
  },
  "rpg-debug-validation": {
    title: "Ошибки данных ловятся в месте их чтения",
    body: "Проверки расположены на границах систем. Сервис сохранений сообщает о неизвестном предмете или потерянной ссылке на этап квеста; графовые инструменты отмечают недостижимые узлы и нарушенные связи.\n\nЭто не маскирует проблему, но не превращает один повреждённый объект в падение всей сессии. Диагностика остаётся рядом с владельцем данных, где её проще исправить.",
  },
  "rpg-end-to-end-cases": {
    title: "Проект проверяется сквозными игровыми сценариями",
    body: "Полезнее всего смотреть на систему по цепочке действий. Подбор предмета проходит от интерактивного объекта в инвентарь, затем в UI и сохранение. Квест начинается в диалоге, меняет журнал и карту, а его состояние переживает загрузку.\n\nТакие маршруты помогают проверять не отдельные классы, а реальные границы между системами. Именно в них обычно проявляются несогласованные события и неправильный порядок инициализации.",
  },
  "rpg-chapter-content": {
    title: "Контент создаётся отдельно от исполняемой логики",
    body: "Предметы, параметры боя, фракции, графы диалогов, квестов и состояний, а также локализованные строки существуют как данные проекта. Игра читает их при запуске и создаёт собственное изменяемое состояние только для текущей сессии.\n\nТак сценарий или настройка предмета не требуют править код механики. Собственные редакторы делают эти данные обозримыми и помогают проверять структуру до запуска игры.",
  },
  "rpg-editor-links": {
    title: "Инструменты для контента — часть разработки игры",
    body: "Редакторы диалогов, квестов и конечных автоматов используют общее графовое полотно: узлы, связи, проверку ссылок и базовые операции редактирования. При этом каждый инструмент сохраняет свои предметные правила и данные.\n\nРезультат работы редактора сразу использует игра: диалог меняет сценарное состояние, квест обновляет цель, FSM управляет NPC. Отдельные страницы показывают каждый инструмент подробнее.",
  },
  "rpg-chapter-world": {
    title: "Системы, которые поддерживают жизнь мира",
    body: "Переходы между локациями, рост растений, звук, обучение, локализация и интеграция платформы редко видны как отдельные механики. Но именно они делают игровую сессию цельной и предсказуемой.\n\nДля каждой из этих задач есть отдельный владелец состояния и жизненного цикла. Они обслуживают игру, не забирая на себя правила боя, диалогов или интерфейса.",
  },
  "rpg-world-services": {
    title: "Локация и объекты мира меняются по своим правилам",
    body: "Сервис загрузки сначала запоминает цель перехода, затем открывает промежуточную loading-сцену и только после этого собирает целевую локацию. Контекст перехода сохраняет, откуда пришёл игрок и какую позицию нужно восстановить.\n\nРастения живут по другому циклу: накапливают время, меняют стадию, обновляют представление и сохраняют свой прогресс. После загрузки мир возвращается не к исходной декорации, а к тому состоянию, в котором его оставили.",
  },
  "rpg-audio-training": {
    title: "Звук, обучение и телеметрия не вмешиваются в геймплей",
    body: "Аудиосервис использует отдельные ограниченные пулы источников для UI, окружения и шагов. Он выбирает подходящий звук поверхности и не позволяет второстепенному шуму перебивать более важный.\n\nОбучение создаёт временную ситуацию с собственными предметами и целью, а после завершения очищает её. Телеметрия только наблюдает за готовым состоянием заданий и не участвует в изменении их прогресса.",
  },
  "rpg-localization-boot": {
    title: "Игра ждёт язык и данные платформы до показа текста",
    body: "Bootloader дожидается данных SDK, загружает сохранение, определяет язык и инициализирует локализацию. Только после этого проект сообщает, что стартовые сервисы готовы.\n\nДиалоги, журнал, предметы и фракции хранят ссылки на локализованные записи, а не копии строк. Интерфейс получает готовый текст в момент создания и не расходится с данными контента.",
  },
  "rpg-death-flow": {
    title: "Смерть меняет состояние персонажа и доступные действия",
    body: "Когда здоровье достигает нуля, контроллер смерти один раз переводит персонажа в состояние смерти: останавливает движение и анимацию передвижения, убирает оружие, включает ragdoll и делает тело источником добычи.\n\nЗатем игра включает режим Death. Пока он активен, обычные запросы UI и управления не могут перебить переход. Смерть остаётся целостным игровым событием, а не набором несвязанных визуальных эффектов.",
  },
  "rpg-platform-runtime": {
    title: "После внешнего полноэкранного окна игра возвращает свой режим",
    body: "Сервис платформы решает, уместно ли показать внешнее полноэкранное окно: учитывает состояние сохранения, паузу после старта, интервалы и текущую сцену. Он не открывает его в середине несовместимого игрового перехода.\n\nПосле возвращения сервис не пытается вручную восстановить курсор и время. Он просит контроллер режимов заново применить правила текущего GameMode — например, карты, паузы или обычной игры.",
  },
};

// Стиль этого текста повторяет страницу «Графовые редакторы»: определение
// конкретной модели, её состав и следствие для остального проекта.
export const rpgStoryCopy: Record<
  string,
  Pick<ContentSection, "title" | "body">
> = {
  "rpg-chapter-foundation": {
    title: "Путешествие по миру продолжается между локациями.",
    body: "Игрок проходит через поселения, дороги и опасные участки мира, знакомится с персонажами и принимает решения в заданиях. Каждая ситуация оставляет след в прохождении: разговор открывает новую тему, выполненное поручение меняет отношение NPC, найденный предмет получает значение в следующей сцене.\n\nПроект строится вокруг этой непрерывности. Локация даёт место для отдельной истории, а состояние прохождения связывает её с тем, что игрок уже сделал и что увидит дальше.",
  },
  "rpg-bootstrap": {
    title: "ProjectLifetimeScope создаётся до первой сцены.",
    body: "ProjectBootstrap вызывается до загрузки первой Unity-сцены. Он проверяет существование корневого prefab, создаёт его при необходимости и оставляет объект между сменами сцен через DontDestroyOnLoad. Это единственная точка, из которой начинается сборка общепроектных зависимостей.\n\nМеню, игровая сцена и development-сцена получают одного и того же родителя, но создают собственные дочерние scope. Общие сервисы не зависят от того, какая сцена была открыта первой.",
  },
  "rpg-messages": {
    title: "Ввод и интерфейс связаны через GameMode.",
    body: "InputHandler публикует сообщения о действиях игрока: открытии инвентаря, карты, журнала или паузы. Он не создаёт страницы UI и не меняет курсор напрямую. Эти сообщения получает GameModesController, который проверяет допустимость перехода и устанавливает следующий GameMode.\n\nPagesController подписывается уже на изменение режима. Он завершает предыдущую страницу и создаёт представление для нового состояния. Таким образом, правила переходов не дублируются между вводом, интерфейсом и отдельными игровыми механиками.",
  },
  "rpg-chapter-player": {
    title: "Контекст игрока объединяет независимые подсистемы.",
    body: "PlayerLifetimeScope создаётся как дочерний объект GameLifetimeScope. Внутри него зарегистрированы движение, камера, характеристики, инвентарь, экипировка, оружие, взаимодействие и сохранение персонажа. Эти компоненты не собираются в одном PlayerController: каждый владеет своей частью состояния и своей последовательностью работы.\n\nCanvasScope создаётся дочерним от игрока. Интерфейс получает состояние персонажа через зависимости и сообщения, но игровой код не зависит от конкретных страниц, слотов или виджетов.",
  },
  "rpg-interaction": {
    title: "Interactable отделяет обнаружение объекта от его действия.",
    body: "Interactable хранит доступность объекта, текст подсказки и ссылку на действие. Система взаимодействия игрока определяет текущую цель, показывает одну общую подсказку и передаёт подтверждённое действие владельцу объекта. Один и тот же путь используется для предмета на земле, сундука, растения и NPC.\n\nСлой игрока не содержит проверки вида «открыть сундук» или «начать диалог». Конкретная механика остаётся на стороне объекта, а добавление нового интерактивного типа не меняет обработчик ввода.",
  },
  "rpg-combat": {
    title: "Атака связана с анимацией через окно попадания.",
    body: "Контроллер оружия принимает запрос атаки и запускает действие персонажа. Урон не появляется в момент нажатия: анимационное событие открывает damage window в нужной фазе удара. В этот момент оружие выполняет проверку цели и создаёт WeaponHit.\n\nПолучатель урона существует отдельно от оружия и от анимации. Поэтому один механизм атаки может работать с разными видами оружия, а правила реакции и расчёта остаются на стороне цели.",
  },
  "rpg-player-control": {
    title: "GameMode задаёт правила управления игроком.",
    body: "PlayerMovementController получает PlayerMoveMessage и передаёт направление в систему движения только тогда, когда текущий GameMode разрешает перемещение. Инвентарь не блокирует игрока; карта, журнал, диалог, пауза и смерть используют другие правила ввода и курсора.\n\nОграничение не хранится в странице интерфейса. Новая страница или механика добавляет собственный режим, а существующий контроллер движения продолжает читать одно общее состояние.",
  },
  "rpg-damage-pipeline": {
    title: "Урон рассчитывается на стороне получателя.",
    body: "CharacterDamageReceiver получает WeaponHit вместе с BodyHitbox. Он проверяет неуязвимость, определяет множитель части тела, учитывает защиту и передаёт итоговое значение характеристикам персонажа. Оружие сообщает факт попадания, но не изменяет HP напрямую.\n\nЭта граница позволяет добавить новую броню, зону попадания или реакцию без изменений в оружии и без копирования формулы урона в несколько источников попаданий.",
  },
  "rpg-chapter-ui": {
    title: "Страницы UI создаются по текущему состоянию игры.",
    body: "PagesController хранит только одну активную страницу. При переходе GameMode текущая страница завершает работу, освобождает подписки и передаёт управление следующей. Инвентарь, карта, диалог, торговля и журнал не остаются скрытыми объектами Canvas между открытиями.\n\nУ каждой страницы есть свой набор данных и свой жизненный цикл. Она создаётся в контексте нужной механики и перестаёт получать события после закрытия.",
  },
  "rpg-pages-controller": {
    title: "Переход между страницами имеет явный порядок.",
    body: "После GameModeChangedMessage PagesController определяет страницу через ResolvePage. Текущая страница получает PrepareForTransition, затем закрывается; после этого создаётся новое представление с нужным контекстом. Порядок не зависит от того, какой экран был открыт до этого.\n\nДиалог может передать управление торговле, торговля — инвентарю, а карта — обычной игре без прямых ссылок между страницами. Их связь определяется только состоянием игры.",
  },
  "rpg-popups": {
    title: "PopupTarget задаёт владельца контекстной карточки.",
    body: "InventoryPage регистрирует PopupTarget для предметов и слотов. При наведении или контекстном действии страница открывает карточку относительно конкретного target и обновляет её положение, пока источник остаётся в представлении.\n\nКарточка не хранит независимую ссылку на сцену или инвентарь. Если слот удалён или страница закрыта, target исчезает вместе с ним и pop-up не остаётся на экране без владельца.",
  },
  "rpg-inventory-ui": {
    title: "InventoryPage отображает состояние PlayerInventory.",
    body: "При создании InventoryPage строит сетку рюкзака, экипировку, быстрые слоты, HandSlot, вес и характеристики из модели PlayerInventory. Затем страница подписывается на изменения соответствующих частей модели и перерисовывает собственное представление.\n\nОперации с предметами не находятся в UI. Страница передаёт намерение игрока в инвентарь, а результатом уже является изменённая модель, которую можно использовать в торговле, луте и сохранении.",
  },
  "rpg-chapter-items": {
    title: "ItemConfig и ItemStack описывают разные уровни данных.",
    body: "ItemConfig хранит неизменяемые свойства предмета: постоянный идентификатор, категорию, иконку, вес, размер в сетке и параметры использования. Во время игры предмет существует как ItemStack с количеством и текущим владельцем. Сетка, экипировка, быстрые слоты и добыча работают с экземплярами, а не меняют конфигурацию.\n\nРазделение конфигурации и состояния используется также при сохранении. Файл сохраняет ссылку на предмет по ID и изменяемые данные стека, а не копию всей настройки предмета.",
  },
  "rpg-inventory-model": {
    title: "HandSlot связывает перенос между инвентарями и слотами.",
    body: "PlayerInventory содержит сетку рюкзака, экипировку, быстрые слоты и HandSlot. Когда игрок берёт стек мышью, предмет временно переходит в HandSlot. Оттуда он может быть помещён в другую ячейку, объединён со стеком, экипирован или возвращён владельцу.\n\nGridInventory проверяет размер предмета, занятые клетки и возможность размещения. Эти правила не зависят от способа вызова операции: ручного перетаскивания, автоматического подбора, обмена или загрузки сохранения.",
  },
  "rpg-trade-loot": {
    title: "Торговля и добыча работают с парой владельцев.",
    body: "LootingContext хранит источник добычи и инвентарь игрока; LootingPage строит представление двух контейнеров рядом. Торговля использует тот же принцип, но дополняет контекст деньгами участников и правилами цены.\n\nПеремещение предмета выполняется между моделями владельцев. UI не содержит отдельной версии сетки для сундука, тела или торговца — он отображает тот инвентарь, который передан ему в контексте.",
  },
  "rpg-chapter-npc": {
    title: "NPC имеет собственный набор runtime-систем.",
    body: "NpcLifetimeScope создаётся для конкретного персонажа или существа. В нём находятся характеристики, NavMesh-навигация, восприятие, инвентарь, бой, диалог, фракция, FSM и persistent-состояние. Каждый экземпляр получает собственные ссылки на цель, таймеры и текущий режим.\n\nОбщие конфигурации и графы могут использоваться несколькими NPC, но изменяемые данные не становятся общими. Поведение одного противника не влияет на состояние другого.",
  },
  "rpg-npc-perception": {
    title: "Сенсоры заполняют контекст поведения NPC.",
    body: "Зрение NPC обнаруживает персонажей, а отдельный сенсор находит предметы. NpcItemInterest запоминает найденную вещь; NpcInventoryPlanner определяет её ценность; NpcItemPickupService выполняет подбор. Боевая система добавляет в контекст сведения о цели, расстоянии и угрозе.\n\nСостояния конечного автомата не выполняют поиск объектов по сцене. Они получают уже подготовленный контекст и принимают решение только в пределах своего поведения.",
  },
  "rpg-npc-fsm-link": {
    title: "Граф FSM хранит правила, а машина — текущее состояние.",
    body: "StateMachineGraph, State, Transition, Behaviour и Condition существуют как отдельные ScriptableObject-ассеты. StateMachineRunner создаёт для NPC runtime-машину с CurrentState, временем и StateMachineContext. Граф не меняется при работе конкретного персонажа.\n\nОдин набор состояний ожидания, диалога, подбора предметов, боя и бегства может использоваться несколькими NPC. Контекст каждого экземпляра хранит только его цель, таймеры и временные значения.",
  },
  "rpg-chapter-story": {
    title: "Диалоги и квесты используют состояние текущей сессии.",
    body: "Граф диалога хранит фразы, ответы, условия и игровые последствия. QuestGraph хранит этапы задания, переходы, требования и данные для журнала. Конфигурация отношений фракций задаёт исходную таблицу мира. Эти ассеты описывают содержание игры и не изменяются при прохождении.\n\nВо время сессии создаются DialogueContext, QuestProgress и RuntimeFactionRelations. Именно они содержат выбор игрока, текущий этап и изменённые отношения, а затем передают эти данные в сохранение.",
  },
  "rpg-dialogue-runtime": {
    title: "DialogueContext содержит состояние одного разговора.",
    body: "При запуске диалога DialogueContext получает цель взаимодействия, граф, текущую фразу, инвентарь, деньги, квесты, фракцию и runtime-флаги. DialogueAnswerProvider формирует ответы, условия которых выполнены. Текст выбранной реплики сохраняется в контексте, поэтому UI и журнал используют один вариант локализации.\n\nПосле подтверждения ответа DialogueAnswerExecutor повторно проверяет условия и только затем применяет последствия. Проверка доступности ответа не меняет мир; изменение выполняется отдельным шагом после выбора игрока.",
  },
  "rpg-quest-flow": {
    title: "QuestGraph и QuestProgress существуют отдельно.",
    body: "QuestGraph описывает структуру задания: этапы, переходы, условия, результаты, текст журнала и цель на карте. При старте задания QuestController создаёт QuestProgress. В нём находятся текущий узел, завершённые этапы и статус прохождения конкретного игрока.\n\nЖурнал, карта, диалоги, уведомления и сохранения читают QuestProgress. Граф остаётся исходным описанием задания и может использоваться при каждом новом прохождении без сброса или копирования его структуры.",
  },
  "rpg-factions": {
    title: "RuntimeFactionRelations отделяет изменения от конфигурации.",
    body: "FactionRelationsConfig задаёт стартовые отношения между парами фракций. При запуске RuntimeFactionRelations переносит их в изменяемую таблицу, с которой работают NPC, диалоги и игровые события. Изменение дружелюбия не записывается обратно в конфигурацию.\n\nПри сохранении фиксируются только значения текущей таблицы. После загрузки игра создаёт её из исходной конфигурации и применяет сохранённые изменения для существующих пар фракций.",
  },
  "rpg-chapter-saves": {
    title: "Сохранение состоит из снимков отдельных систем.",
    body: "GameSaveService владеет форматом файла и его версией. Отдельные координаторы собирают состояние игрока, инвентаря, квестов, фракций, диалогов, NPC, предметов мира и растений. Каждый блок знает, какие данные ему принадлежат и в каком порядке их следует восстановить.\n\nСервис сохранений не собирает игровую логику в одном месте. Он передаёт данные владельцу домена, а тот сопоставляет их со своими конфигурациями и runtime-объектами.",
  },
  "rpg-save-versioning": {
    title: "Версия формата определяет путь миграции сохранения.",
    body: "GameSaveService хранит версию файла и применяет миграции последовательно. В проекте отдельные ступени существуют для квестов, характеристик выживания, состояния игрока, immutable ID NPC, предметов мира, растений и других данных, которые менялись вместе с проектом.\n\nПосле миграции сервис проверяет ссылки на ItemConfig, QuestGraph и узлы графов. Неизвестная запись не должна останавливать загрузку всего файла: она пропускается с диагностическим сообщением.",
  },
  "rpg-save-restore": {
    title: "Восстановление запускается после готовности зависимостей.",
    body: "PlayerSaveCoordinator ожидает готовность save-контроллера и каталога предметов, регистрирует данные игрока и восстанавливает их. Квесты, фракции, NPC и объекты мира подключаются через собственных координаторов. Автоматические переходы квестов запускаются только после того, как исходный прогресс уже восстановлен.\n\nПосле завершения доменные системы публикуют StateRestored. UI и наблюдатели отличают это событие от обычного изменения во время игры и не создают повторные уведомления или новые записи телеметрии.",
  },
  "rpg-debug-validation": {
    title: "Проверки расположены на границе данных и системы.",
    body: "GameSaveService проверяет, существует ли ItemConfig, QuestGraph и целевой узел графа, на который ссылается файл. Редакторы графов проверяют стартовые, изолированные и недостижимые узлы при авторинге. Каждая проверка выполняется в том слое, который знает правила соответствующих данных.\n\nПовреждённая или устаревшая запись не скрывается и не приводит к неявной замене. Система фиксирует проблему, пропускает невозможный фрагмент и продолжает восстановление остальных независимых данных.",
  },
  "rpg-end-to-end-cases": {
    title: "Сквозной сценарий связывает подсистемы в одном маршруте.",
    body: "Подбор предмета начинается в Interactable и ItemHolder, изменяет PlayerInventory, обновляет InventoryPage и попадает в снимок сохранения. Квест начинается в диалоге, создаёт QuestProgress, меняет журнал и цель на карте, а затем восстанавливается при следующей сессии.\n\nТакие маршруты показывают не отдельные классы, а границы между ними. Они используются для проверки порядка инициализации, подписок и передачи данных между игровыми системами.",
  },
  "rpg-chapter-content": {
    title: "Игровое содержание хранится в конфигурациях и графах.",
    body: "ItemConfig, настройки характеристик и боя, фракции, графы диалогов, квестов и FSM, локализованные записи и наборы предметов существуют как Unity-ассеты. Они задают исходное содержание игры: правила, структуру и ссылки между объектами.\n\nRuntime-системы используют эти данные как конфигурацию и создают отдельное изменяемое состояние на время сессии. Поэтому сохранение не изменяет исходный граф, а новая ветка квеста не требует встраивать её в общий код.",
  },
  "rpg-editor-links": {
    title: "Графовые редакторы используют общее полотно и разные модели.",
    body: "Редакторы диалогов, квестов и FSM разделяют операции с canvas: перемещение и создание узлов, соединение связей, масштабирование, панорамирование и проверку ссылок. При этом содержимое узла, смысл связи и правила валидации определяются конкретной предметной моделью.\n\nКаждый редактор сохраняет результат как набор ScriptableObject-ассетов. Runtime читает эти же данные: диалог — для выбора реплик, квест — для этапов, FSM — для поведения NPC.",
  },
  "rpg-chapter-world": {
    title: "Локации и сервисы поддерживают состояние игровой сессии.",
    body: "Загрузка сцен, рост растений, звук, обучение, локализация, телеметрия и платформенные события находятся рядом с основными игровыми системами, но имеют отдельные владельцы. Они не определяют правила боя, квеста или инвентаря; их задача — подготовить, сопровождать или восстановить игровое состояние.\n\nТакое разделение сохраняет границу между механикой и инфраструктурой. Внешнее событие платформы или смена локации не требуют прямого вмешательства в каждый контроллер игрока.",
  },
  "rpg-world-services": {
    title: "Переход между локациями и рост растений имеют отдельный цикл.",
    body: "SceneLoadingService хранит подготовленную цель перехода и признак ожидания ввода, затем открывает loading-сцену. LocationTransitionService передаёт в этот процесс контекст входа, а координатор сохранений добавляет сохранённую позицию игрока. Решение о переходе, показ загрузки и инициализация целевой сцены не смешиваются в одном объекте.\n\nPlantGrowerByStages хранит стадию и время роста конкретного растения. Он меняет prefab следующей стадии, воспроизводит звук и сообщает о завершении роста. PlantWorldPersistenceService сохраняет это состояние отдельно от объектов игрока.",
  },
  "rpg-audio-training": {
    title: "Аудио, обучение и телеметрия работают поверх готовой игры.",
    body: "AudioService содержит отдельные ограниченные пулы AudioSource для UI, окружения и шагов. Система шагов определяет поверхность лучом, получает клипы из FootstepConfig и выбирает источник с подходящим приоритетом. Второстепенный звук NPC не должен прерывать важный звук игрока.\n\nTrainingSessionController создаёт временную учебную сессию с предметами и целью, а затем удаляет её объекты. QuestTelemetryTracker подписывается на готовый QuestController после восстановления сохранения и фиксирует старт или завершение задания, не изменяя его прогресс.",
  },
  "rpg-localization-boot": {
    title: "Bootloader завершает запуск после инициализации текста.",
    body: "Bootloader запускается в проектном scope. Он ожидает данные SDK, получает язык и сохранение платформы, запускает метрики и передаёт код языка в LocalizationHelper. Помощник выбирает Unity Locale, загружает таблицы строк и строит кэш локализованных записей.\n\nТолько после этого BootCompletion сообщает о готовности проекта. Диалог, журнал, предметы и фракции получают текст через LocalizedString, а конфигурации продолжают хранить ссылки на записи вместо копий строк.",
  },
  "rpg-death-flow": {
    title: "Смерть переводит персонажа в отдельный GameMode.",
    body: "PlayerDeathController подписывается на HP и один раз реагирует на достижение нуля. Он помечает персонажа мёртвым, отключает движение и locomotion-анимацию, убирает оружие, выключает CharacterController, включает ragdoll и делает тело объектом добычи. После этого публикуется PlayerDiedMessage и запрашивается GameMode.Death.\n\nDeath не является только визуальной анимацией. Пока этот режим активен, GameModesController не принимает обычные запросы страниц и управления, поэтому другой UI-переход не может перебить последовательность смерти.",
  },
  "rpg-platform-runtime": {
    title: "Платформенное полноэкранное событие восстанавливает текущий режим.",
    body: "AdvertisingService проверяет готовность сохранения, grace period новой игры, интервал между показами, состояние SDK и тип активной сцены. Он также наблюдает за завершением паузы, диалога, торговли, карты, журнала, лута и перехода между локациями, чтобы выбрать допустимую точку вызова.\n\nПосле возврата из внешнего окна сервис не восстанавливает курсор и Time.timeScale вручную. На следующем кадре он вызывает GameModesController.RestoreCurrentModeState, который повторно применяет правила активного GameMode.",
  },
};

// Страница проекта следует тому же правилу, что и «Графовые редакторы»:
// сначала модель и её границы, затем состав и наблюдаемое следствие.
export const rpgStorySectionsReplacement: ContentSection[] = [
  {
    id: "rpg-session",
    label: "ОСНОВА ПРОЕКТА",
    kind: "text",
    title: "Состояние прохождения связывает игровые ситуации.",
    body: "Действие игрока меняет состояние мира. Это изменение получает продолжение в следующей игровой ситуации. Для проекта важен маршрут состояния: место его появления, владелец и момент сохранения.\n\nProjectLifetimeScope хранит сервисы, существующие на протяжении приложения. Игровая сцена создаёт дочерний GameLifetimeScope для текущей сессии. Такая иерархия отделяет постоянные данные прохождения от объектов локации.",
  },
  {
    id: "rpg-game-mode",
    label: "РЕЖИМ ИГРЫ",
    kind: "text",
    title: "GameMode фиксирует активную форму игры.",
    body: "GameMode описывает текущую форму игры и правила управления в ней. GameModesController принимает намерение игрока, проверяет переход и публикует новое состояние. Вместе с режимом он применяет правила курсора и времени.\n\nPagesController получает результат перехода и показывает соответствующую страницу. Один объект определяет порядок смены режима. Интерфейс и ввод используют это общее правило на протяжении сессии.",
  },
  {
    id: "rpg-interaction",
    label: "ВЗАИМОДЕЙСТВИЕ",
    kind: "gallery",
    title: "Interactable задаёт границу между игроком и объектом мира.",
    body: "Interactable сообщает, доступен ли объект игроку и какое действие он готов принять. Система игрока находит подходящую цель, показывает подсказку и передаёт подтверждённое действие владельцу объекта.\n\nДальнейший сценарий принадлежит самому объекту. Общий вход сохраняет единое управление. Данные и последствия действия остаются рядом с объектом мира.",
    media: [
      {
        src: "/content/projects/rpg/interaction-rpg-01.png",
        alt: "Игрок взаимодействует с объектом в RPG",
        caption:
          "Взаимодействие начинается в мире. Результат определяет объект.",
      },
    ],
  },
  {
    id: "rpg-story",
    label: "СЦЕНАРИЙ",
    kind: "gallery",
    title: "Граф задаёт структуру сценария, прогресс хранит его прохождение.",
    body: "DialogGraph описывает структуру разговора. QuestGraph описывает путь задания. Оба графа существуют как Unity-ассеты и задают исходную структуру сценария.\n\nВо время игры DialogueContext выбирает доступное продолжение разговора из состояния мира. QuestProgress хранит достигнутый этап задания. Представления игры и сохранение обращаются к этому прогрессу. Одна ситуация получает единое представление во всех частях игры.",
    media: [
      {
        src: "/content/tools/dialogue-editor/dialogue-quest-demo.jpg",
        alt: "Диалог и цель задания в RPG",
        caption:
          "Диалог использует состояние прохождения. Квест передаёт текущую цель журналу и карте.",
      },
      {
        src: "/content/tools/quest-editor/quest-runtime-flow.svg",
        alt: "Схема выполнения квеста в RPG",
        caption:
          "Граф хранит исходную структуру. Прогресс отражает конкретное прохождение.",
      },
    ],
  },
  {
    id: "rpg-npc",
    label: "ПОВЕДЕНИЕ NPC",
    kind: "gallery",
    title: "Один граф поведения создаёт отдельную машину для каждого NPC.",
    body: "Граф конечного автомата хранит доступные состояния и переходы. StateMachineRunner создаёт по нему runtime-машину для конкретного NPC. Контекст машины содержит данные, нужные поведению в этой сессии.\n\nНесколько персонажей могут использовать один граф. Каждый проходит его в собственном темпе и с собственным контекстом. Сенсоры и боевая система готовят данные. Текущее состояние автомата принимает решение на их основе.",
    media: [
      {
        src: "/content/projects/rpg/npc-combat-01.png",
        alt: "NPC и игрок в боевой ситуации RPG",
        caption:
          "Поведение NPC использует локальный контекст конкретного персонажа.",
      },
      {
        src: "/content/tools/fsm-editor/state-machine-editor.jpg",
        alt: "Редактор конечного автомата в Unity",
        caption:
          "Граф задаёт путь поведения. Runtime-машина исполняет его для отдельного персонажа.",
      },
    ],
  },
  {
    id: "rpg-save",
    label: "СОХРАНЕНИЕ",
    kind: "text",
    title: "Сохранение возвращает состояние через владельцев данных.",
    body: "GameSaveService хранит версию файла и координирует запись прохождения. Каждая игровая система готовит собственный снимок и восстанавливает его после создания нужных runtime-объектов.\n\nПри загрузке игра сопоставляет сохранённую запись с исходным Unity-ассетом и применяет к нему достигнутое состояние. Этот порядок сохраняет конфигурации проекта исходными данными, а состояние прохождения — данными конкретной сессии. Проверка ссылок позволяет продолжить загрузку, если отдельная запись устарела.",
  },
  {
    id: "rpg-editor-tools",
    label: "АВТОРИНГ",
    kind: "gallery",
    title: "Редактор показывает сценарную модель целиком.",
    body: "Графовые редакторы позволяют собрать структуру сценария на одном полотне. На нём видны игровые сущности и допустимое развитие ситуации. Проверки находят ошибки структуры до запуска игры.\n\nРедактор сохраняет модель как Unity-ассеты. Runtime-система читает те же данные в игре. Сценарий меняется через его структуру. Логика исполнения остаётся в соответствующей системе.",
    media: [
      {
        src: "/content/tools/dialogue-editor/dialogue-node-topic.jpg",
        alt: "Узел темы в редакторе диалогов Unity",
        caption:
          "Диалоговый граф хранит структуру разговора и связанные с ней условия.",
      },
      {
        src: "/content/tools/quest-editor/quest-editor-graph.jpg",
        alt: "Граф квеста в Unity Editor",
        caption:
          "Квестовый граф показывает этапы и переходы как данные сценария.",
      },
    ],
  },
];

export const rpgUiSupplementSections: ContentSection[] = [
  {
    id: "rpg-hud",
    label: "HUD И СОСТОЯНИЕ ПЕРСОНАЖА",
    kind: "gallery",
    title:
      "HUD подписывается на характеристики и показывает последствия действий в мире.",
    body: "PlayerStatsHud получает здоровье, выносливость и связанные конфигурации из контекста игрока. Реактивные значения обновляют полосы и числовые представления в момент изменения характеристик. BloodScreenController, BeatingHeart и HeartbeatPulse усиливают обратную связь при критическом здоровье; экран смерти открывается через отдельную страницу после смены игрового режима.\n\nHUD остаётся представлением: источник здоровья находится в StatsController, расход и восстановление выносливости выполняют StaminaMovementChanger и StaminaPeriodicChanger, а боевое попадание публикует факт нанесённого урона. Интерфейс собирает эти факты в считываемую картину состояния персонажа.",
    media: [
      {
        alt: "Нужен скриншот игрового HUD: полосы здоровья и выносливости, быстрые слоты, подсказка взаимодействия и видимая сцена. Снимок должен показывать интерфейс в контексте игрового момента.",
        caption: "ТЗ для скриншота: HUD во время исследования или боя.",
      },
      {
        alt: "Нужен короткий GIF: здоровье снижается от попадания, появляется кровавый экран и пульсация сердца, затем интерфейс возвращается к спокойному состоянию после восстановления.",
        caption: "ТЗ для GIF: реакция HUD на изменение характеристик.",
      },
    ],
  },
  {
    id: "rpg-map",
    label: "КАРТА",
    kind: "gallery",
    title: "Карта переводит положение мира в навигационный слой интерфейса.",
    body: "MapPage открывает MapHolder и передаёт его MapScrollController. Контроллер удерживает масштаб, смещение, границы просмотра и положение курсора; MapConfig проецирует мировые координаты на плоскость карты. CharacterIcon следует позиции игрока, а QuestMapTargetRegistry находит authored-точки целей для активных этапов заданий.\n\nМаркер квеста создаётся из текущего QuestProgress и содержит иконку, позицию и ссылку на конкретную цель. Наведение проверяется в экранных координатах после преобразования карты; выбранный маркер открывает карточку с названием квеста, целью и описанием. Карта получает состояние квестов и мира, сохраняя собственную ответственность за навигацию и представление.",
    media: [
      {
        alt: "Нужен скриншот полной карты: позиция игрока, несколько иконок локаций и маркер активной цели. В кадре показать масштаб и область прокрутки.",
        caption:
          "ТЗ для скриншота: карта с положением игрока и навигационными значками.",
      },
      {
        alt: "Нужен GIF: игрок открывает карту, приближает область колесом мыши, перемещает полотно и наводит курсор на маркер задания. В финале появляется карточка цели.",
        caption: "ТЗ для GIF: масштабирование, прокрутка и pop-up маркера.",
      },
    ],
  },
  {
    id: "rpg-quest-journal",
    label: "ЖУРНАЛ И УВЕДОМЛЕНИЯ",
    kind: "gallery",
    title: "Журнал собирает список заданий вокруг одного QuestProgress.",
    body: "QuestPage реагирует на изменения QuestController и строит список активных заданий через QuestListItem. Выбранный квест получает QuestDescriptionHolder, а его текущие и завершённые этапы выводятся QuestTaskListItem. QuestShortInfo показывает компактную цель во время игры. Страница хранит выбор игрока и периодически сверяет видимое содержимое с текущим состоянием, чтобы представление оставалось синхронизированным с прогрессом.\n\nQuestNotificationService получает изменения заданий и передаёт QuestNotificationView данные о добавлении, обновлении, завершении или провале. При восстановлении сохранения отдельный сигнал StateRestored отделяет загрузку существующего прогресса от свежего игрового события. Поэтому журнал, уведомления и карта читают одно состояние прохождения и показывают его в разных формах.",
    media: [
      {
        alt: "Нужен скриншот журнала: слева список активных заданий, справа описание выбранного задания и список его этапов. Визуально выделить текущую цель.",
        caption: "ТЗ для скриншота: журнал заданий и выбор активного квеста.",
      },
      {
        alt: "Нужен GIF: игрок получает или обновляет задание, видит уведомление, затем открывает журнал и карту с той же текущей целью.",
        caption:
          "ТЗ для GIF: один QuestProgress в уведомлении, журнале и на карте.",
      },
    ],
  },
  {
    id: "rpg-settings-input",
    label: "МЕНЮ, НАСТРОЙКИ И ВВОД",
    kind: "text",
    title:
      "Экранные страницы и переназначение управления используют общий режим игры.",
    body: "MenuUI, PauseMenu и SettingsMenuUI управляют экранными разделами через PagesController и GameModesController. Переход в паузу, инвентарь, карту, диалог, торговлю, добычу или урок переключает активные действия ввода, курсор, время и видимость соответствующей страницы. После закрытия GameModesController возвращает правила текущего режима игры.\n\nInputRebinder работает с InputActionAsset и хранит пользовательские override-ы в BindingOverridesStorage. InputBindingOverridesBootstrap восстанавливает их при запуске, а BindingShower показывает назначенные клавиши в интерфейсе. Звуки кнопок и настройки микшера подключаются как отдельные элементы UI, сохраняя настройку после следующего запуска.",
    media: [
      {
        alt: "Нужен скриншот паузы или настроек: видны секции меню, настройка громкости и строки переназначения клавиш. Лучше показать активное состояние одного раздела.",
        caption: "ТЗ для скриншота: меню настроек и пользовательский ввод.",
      },
    ],
  },
];

// Активная статья строится как цельный маршрут состояния через игровые системы.
// Техническая страница GMO Shooter следует структуре RPG: не перечень фич,
// а последовательность, по которой игровой ввод становится результатом в бою.
// Формулировки основаны на публичном репозитории проекта: Assets/NewScripts
// и наборе prefab-ов в Assets/Prefabs.
export const gmoStorySections: ContentSection[] = [
  {
    id: "gmo-hero-control",
    tocTitle: "Управление героем",
    label: "ГЛАВА I",
    title: "Движение и прицеливание — два независимых контура.",
    kind: "chapter",
    body: "GMO Shooter — 2D-шутер о бобре-садовнике, который защищает сад от мутировавших овощей. В основе ощущений от игры — разделение перемещения и направления атаки. HeroMovement меняет горизонтальную скорость Rigidbody2D, а HeroRotations отдельно поворачивает руки к направлению ввода и отражает спрайт тела при смене стороны.\n\nТак герой может перемещаться по площадке, продолжая вести огонь в сторону угрозы. Этот маленький технический выбор задаёт весь темп игры: позиция отвечает за дистанцию, а руки и оружие — за линию выстрела.",
    outline: [
      {
        label: "Ввод",
        description: "InputHandler передаёт горизонтальное движение и направление прицеливания в разные компоненты героя.",
      },
      {
        label: "Физика",
        description: "HeroMovement управляет скоростью Rigidbody2D: задаёт скорость при вводе и плавно снижает её без ввода.",
      },
      {
        label: "Визуальное направление",
        description: "HeroRotations поворачивает руки и зеркалит тело, сохраняя корректное положение оружия с обеих сторон.",
      },
    ],
    media: [
      {
        src: "/content/projects/gmo-shooter/gmo-vegetable-fight.png",
        alt: "Бобёр-садовник сражается с мутировавшими овощами в GMO Shooter",
        caption: "Бой в саду: положение героя и направление оружия управляются независимо.",
      },
    ],
  },
  {
    id: "gmo-weapon-loop",
    tocTitle: "Контур выстрела",
    label: "ГЛАВА II",
    title: "Оружие координирует выстрел, а способ стрельбы можно заменить.",
    kind: "chapter",
    body: "Компонент Weapon не создаёт пулю сам. Он проверяет направление через Physics2D.Raycast, готовность после задержки и наличие боеприпасов в BulletsController. Если выстрел возможен, компонент запускает реализацию IShooter, списывает один боеприпас, включает звук и вспышку, а при наличии CinemachineImpulseSource добавляет импульс камеры.\n\nСама баллистика вынесена в реализации интерфейса. DefaultShooter создаёт одну пулю со случайным разбросом, ShotgunShooter — несколько пуль и делит урон между ними. За счёт этого общий контур не зависит от конкретного оружия: смена поведения не дублирует проверку попадания, боеприпасы или эффекты обратной связи.",
    flow: [
      {
        label: "Проверка",
        description: "Raycast определяет, есть ли цель в направлении ствола; готовность и боеприпасы завершают проверку.",
      },
      {
        label: "Стратегия",
        description: "Weapon вызывает IShooter: одна пуля для обычного выстрела или пачка дробинок для дробовика.",
      },
      {
        label: "Обратная связь",
        description: "Звук, вспышка у дула и импульс камеры сопровождают успешный выстрел.",
      },
      {
        label: "Пауза",
        description: "Корутина задержки возвращает оружие в состояние готовности к следующей атаке.",
      },
    ],
    code: `private void Shoot()
{
    shooter.Shoot(_bulletSpeed, _damage, _range);
    _soundPlayer.Play();
    _bulletsController.SubtractBullets(1);
    _muzzleflash.Flash();
    CoroutineHolder.Instance.StartCoroutine(CoolDown());
}`,
    details: [
      {
        title: "Обычный выстрел",
        body: "DefaultShooter создаёт один экземпляр Bullet и передаёт ему скорость, урон и время жизни, вычисленное из дальности.",
      },
      {
        title: "Дробовик",
        body: "ShotgunShooter создаёт несколько пуль с разбросом. Каждая получает долю общего урона, поэтому суммарная характеристика остаётся под контролем оружия.",
      },
    ],
  },
  {
    id: "gmo-arena-content",
    tocTitle: "Арена и ресурсы",
    label: "ГЛАВА III",
    title: "Префабы собирают боевую сцену из повторно используемых элементов.",
    kind: "chapter",
    body: "В репозитории игровые сущности оформлены отдельными prefab-ами: герой, Bullet, оружие, ящики, собираемые предметы, враги и объекты эффектов. Среди контейнеров есть варианты для здоровья, монет, патронов винтовки и дробовика, TNT и золотого сундука; в папках врагов — противники для основной сцены и второго уровня.\n\nТакой состав показывает практическую структуру контента Unity-проекта: сцена расставляет готовые сущности, а вариации предметов и противников остаются самостоятельными ресурсами. Для страницы это важнее декларативного списка механик — можно увидеть, из чего фактически собрана игровая петля: угроза, выстрел, расход боеприпасов и восполнение ресурса.",
    media: [
      {
        src: "/content/projects/gmo-shooter/gmo-boss-fight.png",
        alt: "Сражение с боссом в GMO Shooter",
        caption: "Отдельная сцена с боссом дополняет волны противников в саду.",
      },
    ],
    details: [
      {
        title: "Ресурс во время боя",
        body: "Сундуки и предметы дают игроку повод менять позицию и выбирать момент подбора: в проекте подготовлены варианты для здоровья, монет, патронов и взрывных предметов.",
      },
      {
        title: "Контент как набор prefab-ов",
        body: "Prefab-структура позволяет изолированно настраивать игрока, оружие, пулю, врага или контейнер и затем использовать их в разных сценах без копирования иерархий.",
      },
      {
        title: "Исходный код",
        body: "Публичный репозиторий содержит Unity-проект, включая Assets, Packages и ProjectSettings. Страница опирается на фактические скрипты HeroMovement, HeroRotations, Weapon, DefaultShooter и ShotgunShooter.",
      },
    ],
  },
];

// Полная статья GMO Shooter. Отдельный массив сохранён от карточки проекта,
// чтобы повествование вело читателя по игре и по реальному устройству её Unity-кода.
export const gmoStorySectionsExtended: ContentSection[] = [
  {
    id: "gmo-story",
    tocTitle: "Что уже сделано",
    label: "САД, РЕКА, ЗАВОД",
    title: "Что реализовано в проекте и что осталось незавершённым.",
    kind: "chapter",
    body: "GMO Shooter — ранний незаконченный Unity-проект. История начинается с бобра-садовника: во время сбора урожая его сад атакуют мутировавшие овощи. По замыслу расследование должно было привести героя к отравленной реке, подземному колодцу и заводу — источнику загрязнения. Суперкомпьютер управляет предприятием и выступает финальным антагонистом этой истории.\n\nВ проекте реализован первый этап: сад с волнами овощей, оружием, падающими ящиками и отдельной сценой робота-босса. Колодец и завод остались незавершёнными. В Unity-проекте сохранились фон завода, девять спрайтов роботов, Robot Boss и код движения ног и конечностей для роботизированных противников. Эти материалы относятся к подготовке продолжения, а не к готовому второму уровню.",
    outline: [
      { label: "Реализовано: сад", description: "Первый уровень с овощами-врагами, волнами, лутом, оружием и отдельной ареной босса." },
      { label: "Запланировано: колодец", description: "Подземный переход к источнику заражения — часть сюжетного маршрута, но не готовая сцена." },
      { label: "Подготовлено: завод", description: "Фон, набор роботов и код их движения есть в проекте; полноценный второй уровень не реализован." },
      { label: "Финальная цель", description: "Суперкомпьютер — сюжетный антагонист; робот-босс в готовой сцене задаёт направление этой линии." },
    ],
    media: [
      { src: "/content/projects/gmo-shooter/gmo-vegetable-fight.png", alt: "Сражение садовника с мутировавшими овощами", caption: "Первый этап истории — сад, где привычный урожай становится противником." },
      { src: "/content/projects/gmo-shooter/gmo-boss-fight.png", alt: "Отдельная сцена с роботом-боссом", caption: "Босс-сцена развивает тему промышленной угрозы, заложенную в истории." },
    ],
  },
  {
    id: "gmo-input",
    tocTitle: "Управление и прицеливание",
    label: "ПОЗИЦИЯ И НАПРАВЛЕНИЕ",
    title: "Игрок выбирает позицию и направление атаки отдельно.",
    kind: "chapter",
    body: "Управление разделено на независимые действия. InputHandler читает горизонтальное перемещение и направление прицеливания. На ПК направление считается от центра безопасной области экрана к мыши; для мобильного управления оно берётся из виртуального джойстика. HeroMovement переводит только горизонтальный ввод в скорость Rigidbody2D, а HeroRotations поворачивает руки и зеркалит тело в зависимости от того, смотрит герой влево или вправо.\n\nЭто создаёт основу для шутера на горизонтальной арене: герой не обязан идти в сторону выстрела. Позиция влияет на дистанцию до врага и ящика, а направление рук — на траекторию оружия. В репозитории при этом сохранён и более ранний контур MoveController / RotateController: он показывает, как управление развивалось от обычного движения и поворота курсором к единому InputHandler для ПК и touch-ввода.",
    flow: [
      { label: "Ввод", description: "Клавиатура и мышь на ПК либо кнопки и джойстик на мобильном устройстве." },
      { label: "Движение", description: "Rigidbody2D получает горизонтальную скорость; без ввода скорость плавно гасится." },
      { label: "Прицел", description: "Руки ориентируются независимо от тела; отражение спрайта сохраняет силуэт с обеих сторон." },
      { label: "Выстрел", description: "Оружие использует направление transform.right как линию проверки и полёта пули." },
    ],
    code: `var dir = InputHandler.Direction;
var scaleSign = (dir > 90 || dir < -90) ? -1 : 1;

_hands.SetRotation2D(dir);
SetScaleSign(_body, scaleSign, 1);
SetScaleSign(_hands, 1, scaleSign);`,
  },
  {
    id: "gmo-arsenal",
    tocTitle: "Арсенал и переключение",
    label: "ОРУЖИЕ КАК ЦИКЛ",
    title: "Оружие разделяет общую логику выстрела и конкретную баллистику.",
    kind: "chapter",
    body: "Weapon проверяет цель Raycast-ом, ждёт cooldown, сверяется с BulletsController, вызывает выбранный IShooter, списывает патрон и запускает звук, muzzle flash и Cinemachine impulse. Пуля получает скорость, урон и время жизни, затем задаёт Rigidbody2D velocity. TouchDamager передаёт урон цели при столкновении.\n\nDefaultShooter создаёт одну пулю с разбросом. ShotgunShooter создаёт несколько пуль и распределяет общий урон между ними. WeaponInventory создаёт по одному экземпляру пистолета, винтовки и дробовика из сохранённого выбора, сортирует их по DPS и автоматически выбирает лучший вариант с боеприпасами, когда активный опустел. Последовательность работы выглядит так: данные выбора → инвентарь оружия → выстрел → расход → автоматическое переключение.",
    details: [
      { title: "Три класса оружия", body: "WeaponInfo определяет Pistol, Rifle и Shotgun, а также prefab, иконку, стоимость и флаг открытия. Это связывает игровой предмет и экран выбора без жёсткой привязки к конкретной сцене." },
      { title: "Боеприпасы как ограничение", body: "BulletsController хранит текущий и максимальный запас, умеет ограничивать пополнение и посылает событие OnOutOfBullets — именно на него подписывается WeaponInventory." },
      { title: "Выстрел только по линии угрозы", body: "Перед выстрелом Weapon делает Physics2D.Raycast в направлении ствола. В текущем прототипе это означает, что расход и эффекты происходят, когда луч встречает collider на заданной дальности." },
      { title: "Обратная связь", body: "Успешный выстрел включает звук, вспышку у дула и при наличии компонента импульс камеры. Эти маленькие сигналы делают механику ощутимой без отдельной системы анимаций оружия." },
    ],
    media: [
      { src: "/content/projects/gmo-shooter/sprites/glock18.png", alt: "Спрайт пистолета Glock 18 из GMO Shooter", caption: "Пистолет — один из трёх классов WeaponInfo." },
      { src: "/content/projects/gmo-shooter/sprites/ak47.png", alt: "Спрайт винтовки AK-47 из GMO Shooter", caption: "Винтовочный визуальный вариант." },
      { src: "/content/projects/gmo-shooter/sprites/ump.png", alt: "Спрайт оружия UMP из GMO Shooter", caption: "Ещё один автоматический вариант арсенала." },
      { src: "/content/projects/gmo-shooter/sprites/nova.png", alt: "Спрайт дробовика Nova из GMO Shooter", caption: "Дробовик соответствует отдельной реализации ShotgunShooter." },
      { src: "/content/projects/gmo-shooter/sprites/sawed_off.png", alt: "Спрайт дробовика Sawed-Off из GMO Shooter", caption: "Второй вариант дробовика в наборе ассетов." },
    ],
  },
  {
    id: "gmo-waves",
    tocTitle: "Первый этап: сад",
    label: "РЕАЛИЗОВАННЫЙ УРОВЕНЬ: САД",
    title: "Первый этап — это сад, где сам урожай стал набором противников.",
    kind: "chapter",
    body: "WaveScriptable — это data-asset с prefab-ом врага, количеством и длительностью волны. EnemySpawner запускает первую волну, размещает врагов случайно у левой или правой границы и немного варьирует масштаб. Важная деталь: когда WaveScriptable выпускает половину запланированных врагов, он вызывает NextWave. Следующая волна начинает набираться поверх текущей, поэтому сложность растёт перекрытием, а не только сменой одного списка на другой.\n\nВраг собран из небольших компонентов. EnemyHp слушает Damageable, уменьшает здоровье и вызывает OnDeath один раз. EnemyMovementController плавно ведёт Rigidbody2D по горизонтали к стороне игрока и отражает спрайт. EnemyTouchDamager наносит периодический контактный урон, пока герой остаётся в триггере. DamageAnimation временно подменяет материал всех дочерних SpriteRenderer, а EnemyDamageParticles выпускает частицы в точке удара. В результате у попадания есть и числовой, и визуальный ответ.",
    flow: [
      { label: "Данные волны", description: "Enemy prefab, число появлений и интервал выводятся в ScriptableObject." },
      { label: "Появление", description: "Spawner выбирает левую или правую границу и слегка варьирует размер экземпляра." },
      { label: "Сближение", description: "Враг ускоряется по оси X, разворачивается к игроку и наносит контактный урон." },
      { label: "Реакция", description: "Урон обновляет HP, показывает flash/частицы и запускает разрезание или уничтожение." },
    ],
    media: [
      { src: "/content/projects/gmo-shooter/sprites/broccoli.png", alt: "Спрайт врага-брокколи из GMO Shooter", caption: "Брокколи — один из овощных противников первого этапа." },
      { src: "/content/projects/gmo-shooter/sprites/carrot.png", alt: "Спрайт врага-моркови из GMO Shooter", caption: "Морковь из набора врагов сада." },
      { src: "/content/projects/gmo-shooter/sprites/cucumber.png", alt: "Спрайт врага-огурца из GMO Shooter", caption: "Огурец из набора врагов сада." },
      { src: "/content/projects/gmo-shooter/sprites/eggplant.png", alt: "Спрайт врага-баклажана из GMO Shooter", caption: "Баклажан из набора врагов сада." },
      { src: "/content/projects/gmo-shooter/sprites/pepper.png", alt: "Спрайт врага-перца из GMO Shooter", caption: "Перец из набора врагов сада." },
      { src: "/content/projects/gmo-shooter/sprites/radish.png", alt: "Спрайт врага-редиса из GMO Shooter", caption: "Редис из набора врагов сада." },
    ],
  },
  {
    id: "gmo-second-stage",
    tocTitle: "Второй этап: завод",
    label: "ПОДГОТОВЛЕННОЕ, НО НЕРЕАЛИЗОВАННОЕ ПРОДОЛЖЕНИЕ",
    title: "После овощей должна была начаться другая глава — завод с роботами.",
    kind: "chapter",
    body: "Второй этап не вошёл в готовую версию игры. Роботы остаются подготовленным набором контента и систем, а не частью завершённой игровой сцены. В Assets лежат девять вариантов роботов, Robot Boss, промышленный фон Zavod и ZavodForeground, а в Scripts — отдельная папка RobotMovement.\n\nМатериалы показывают направление продолжения. Овощи в саду собраны из простых частей и ходят на двух ногах. Роботы используют цель стопы, цикл шага и inverse kinematics для двух сегментов конечности. Второй этап развивал тему механизированных модульных противников. Подготовленные ассеты и код фиксируют эту линию проекта; готовой сцены завода в репозитории нет.",
    details: [
      { title: "Что подготовлено", body: "Набор robot1–robot9, RobotBoss, фон завода и компоненты LegCycler, InverseKinematics и RobotSlicer." },
      { title: "Чего нет в готовой версии", body: "Завершённой сцены завода, собранной волны роботов и опубликованного второго этапа прохождения." },
      { title: "Почему это интересно", body: "Материалы фиксируют эволюцию дизайна: второй акт задумывался не как повтор сада с другим спрайтом, а как новый тип врагов и новый способ оживлять их тела." },
    ],
    media: [
      { src: "/content/projects/gmo-shooter/sprites/robot1.png", alt: "Спрайт Robot 01 из подготовленного второго этапа", caption: "Один из девяти подготовленных роботов." },
      { src: "/content/projects/gmo-shooter/sprites/robot3.png", alt: "Спрайт Robot 03 из подготовленного второго этапа", caption: "Модульный силуэт роботизированного врага." },
      { src: "/content/projects/gmo-shooter/sprites/robot5.png", alt: "Спрайт Robot 05 из подготовленного второго этапа", caption: "Вариант из линейки Robot 01–09." },
      { src: "/content/projects/gmo-shooter/sprites/robot8.png", alt: "Спрайт Robot 08 из подготовленного второго этапа", caption: "Ещё один подготовленный робот." },
      { src: "/content/projects/gmo-shooter/sprites/RobotBoss.png", alt: "Спрайт Robot Boss из GMO Shooter", caption: "Robot Boss связывает визуальную тему завода с уже реализованной ареной босса." },
    ],
  },
  {
    id: "gmo-animation",
    tocTitle: "Процедурная анимация",
    label: "ДВИЖЕНИЕ ИЗ ЧАСТЕЙ",
    title: "Процедурная анимация оживляет ноги и конечности персонажей.",
    kind: "chapter",
    body: "В проекте есть два варианта процедурной анимации. У овощных врагов EnemyAnimator строит походку через фазу: передняя и задняя ноги движутся по окружности в противофазе вокруг вычисленной средней точки, а тело подпрыгивает по abs(sin). Начальная фаза выбирается случайно, поэтому несколько врагов не делают шаг одновременно.\n\nДля роботов подготовлены LegCycler и InverseKinematics. LegCycler двигает цель ноги по полуокружности и мягко интерполирует её позицию. InverseKinematics получает позиции начала и цели, длины upper arm / forearm, находит точку сустава как пересечение окружностей и ориентирует оба сегмента. Художник задаёт части тела и точки крепления в prefab-е. Код вычисляет позу на каждом FixedUpdate.\n\nEnemySlicer отсоединяет подготовленные дольки овоща и добавляет им SliceParticle: случайную скорость, вращение, гравитацию и таймер удаления. RobotSlicer рекурсивно собирает дочерние SpriteRenderer, создаёт для каждого отдельный объект и превращает его в летящую часть. Разрезание следует структуре сущности и показывает её составные части.",
    details: [
      { title: "Овощи: синус и противофаза", body: "EnemyAnimator использует один phase для подъёма тела и вращения обеих ног. Это читаемый способ дать персонажу походку без Animator Controller." },
      { title: "Роботы: цель + IK", body: "LegCycler задаёт траекторию стопы, а InverseKinematics подбирает положение колена и ориентацию двух сегментов для достижения цели." },
      { title: "Расчленение", body: "Для овощей используются подготовленные sliced-спрайты; для робота части извлекаются из дочерней иерархии. Оба варианта получают физически выглядящее разлётание через SliceParticle." },
    ],
    code: `var jointPosition = GetIntersections(
    transform1.position, _to.position, size1.y, size2.y);

transform2.position = CopyXY(jointPosition, transform2.position);
transform2.localRotation = FromTo2d(transform2.position, _to.position);
transform1.localRotation = FromTo2d(transform1.position, jointPosition);`,
    media: [
      { src: "/content/projects/gmo-shooter/sprites/broccoli_sliced.png", alt: "Разрезанный спрайт брокколи из GMO Shooter", caption: "Подготовленные части для EnemySlicer после смерти врага." },
      { src: "/content/projects/gmo-shooter/sprites/carrot_sliced.png", alt: "Разрезанный спрайт моркови из GMO Shooter", caption: "Отдельные части получают скорость, вращение и гравитацию через SliceParticle." },
      { src: "/content/projects/gmo-shooter/sprites/cucumber_sliced.png", alt: "Разрезанный спрайт огурца из GMO Shooter", caption: "Состояние после поражения не рисуется поверх врага, а отделяется в самостоятельные объекты." },
      { src: "/content/projects/gmo-shooter/sprites/RobotBoss.png", alt: "Спрайт Robot Boss из GMO Shooter", caption: "Составной босс: корпус, руки и глаз визуально поддерживают механику отдельных целей." },
    ],
  },
  {
    id: "gmo-loot-upgrades",
    tocTitle: "Лут и прокачка",
    label: "РЕСУРСЫ И РОСТ",
    title: "Падающие ящики связывают выживание, оружие и мета-прогрессию.",
    kind: "chapter",
    body: "BoxSpawner создаёт ящик над ареной, DropBox плавно опускает его к заданной высоте и удаляет, если игрок не успел отреагировать. После попадания ящик выключает возможность повторного получения урона, создаёт визуальный эффект и выбрасывает несколько Collectable с физическим импульсом. Предметы существуют ограниченное время, проигрывают звук при подборе и различаются типом: Heart, Coin, ShotGunBullets, RifleBullets и Explosion.\n\nЭти параметры не разбросаны по prefab-ам. BoxUpdate хранит cooldown появления, время жизни ящика и предмета, количество, ценность, стоимость, открыт ли апгрейд и ссылку на следующий уровень. BoxSpawnerManager в момент запуска находит доступные конфигурации в сохранении и назначает их пяти спавнерам: здоровье, золото, винтовочные патроны, патроны дробовика и TNT. Рядом лежит StatUpdate для характеристик героя — HP и скорости. Так прокачка задумана как цепочка данных: следующий tier, цена и доступность принадлежат asset-у, а не коду сцены.",
    flow: [
      { label: "Появление", description: "Разные типы BoxSpawner работают с настройками из доступных BoxUpdate." },
      { label: "Разрушение", description: "DropBox выбрасывает заданное число предметов с случайным физическим импульсом." },
      { label: "Подбор", description: "Hero различает здоровье, монеты, патроны винтовки и дробовика по Collectable.Type." },
      { label: "Новый tier", description: "BoxUpdate и StatUpdate несут ссылку NextUpdate, стоимость и флаг IsOpen." },
    ],
  },
  {
    id: "gmo-boss",
    tocTitle: "Босс и его фазы",
    label: "СЦЕНАРИЙ БОССА",
    title: "Босс меняет ритм боя через здоровье, таймер и набор способностей.",
    kind: "chapter",
    body: "Босс — не просто большой Enemy. BossStateController требует EnemyHp, Damageable, EnemyCharger и LazerController. Он слушает каждое попадание, пересчитывает отношение текущего HP к максимальному и по списку threshold-ов выбирает индекс стадии. С уменьшением здоровья меняется и пауза между действиями: cooldown вычисляется из доли здоровья. Затем контроллер выбирает UnityEvent из доступного диапазона, поэтому конкретную фазу можно собрать в Inspector из связанных методов и prefab-ов без переписывания контроллера.\n\nНабор доступных способностей хорошо читается по отдельным компонентам. EnemyCharger передаёт BossMovementController X-координату героя для рывка. LazerController может поставить лазер в случайной точке или прямо по оси игрока. Сам Lazer сначала проявляет предупреждающую линию, выдерживает паузу, мигает предупреждением, затем включает и мигает опасной частью — то есть атака даёт игроку окно для реакции. HandsController создаёт большие руки, при их смерти производит маленькие, а в особом режиме переводит руки на орбиту вокруг босса. HandMovementController переключается между случайным движением по области, атакой по X игрока и круговой траекторией.\n\nВизуально босс разделён на корпус, руки и глаз — это видно и в исходном RobotBoss-asset, и в prefab-структуре. Разделение не косметическое: руки — самостоятельные живые объекты с собственной смертью и движением, а фазы босса переключают поведение всей сцены.",
    details: [
      { title: "Пороговые стадии", body: "BossStateController получает массив UnityEvent и массив порогов. После урона выбирается индекс последнего порога, который пересёк коэффициент HP / MaxHP." },
      { title: "Телеграф атаки", body: "Lazer не наносит угрозу мгновенно: появляется и нарастает warning-спрайт, затем он мигает до включения луча. Это честная визуальная коммуникация опасности." },
      { title: "Руки как отдельные цели", body: "Большая рука подписана на EnemyHp.OnDeath и рождает несколько маленьких рук. Уничтожение части босса меняет состав угроз на арене." },
      { title: "Пространство боя", body: "BossMovementController выбирает точки внутри collider-границ. На режиме окружности центральная точка используется и боссом, и его руками." },
    ],
  },
  {
    id: "gmo-save-content",
    tocTitle: "Данные, уровни и сохранения",
    label: "КОНТЕНТ, КОТОРЫЙ ПОМНИТ ИГРА",
    title: "Прогресс сохраняет не копии контента, а ссылки на его идентификаторы.",
    kind: "chapter",
    body: "В проекте используется SaveManager как ScriptableObject-центр сохранения. При загрузке ScriptableObjectSerializer сканирует Resources, собирает объекты, реализующие ISaveId, и кладёт их в словарь по паре «имя asset-а + тип». JSON-модель хранит строки-id: доступное оружие и выбранные варианты для трёх классов, деньги, максимальный уровень и волну, доступные апгрейды характеристик и ящиков. При загрузке строки снова превращаются в исходные WeaponInfo, LevelScriptable, WaveScriptable, StatUpdate и BoxUpdate.\n\nЭто подход, хорошо подходящий для Unity-контента: балансные значения, prefab-ссылки и параметры волн остаются в редактируемых ScriptableObject, а сохранение фиксирует только выбор и прогресс игрока. LevelScriptable связывает имя сцены с массивом волн; LevelSelector передаёт выбранную волну при переходе. В результате состояние игрока и авторские настройки не смешиваются в одном JSON-файле.",
    details: [
      { title: "Что хранится", body: "Деньги, максимальный уровень и волна, доступное/выбранное оружие, доступные обновления характеристик и ящиков." },
      { title: "Что остаётся контентом", body: "Prefab оружия, иконка, цена, параметры ящика, enemy prefab и длительность волны остаются в ScriptableObject и prefab-ах." },
      { title: "Почему это удобно", body: "Баланс или визуал можно поменять в Unity без миграции сохранений: запись по id снова найдёт актуальный asset того же типа." },
    ],
  },
  {
    id: "gmo-polish",
    tocTitle: "Дополнительные скрипты",
    label: "ЧТО ЕЩЁ ОСТАЛОСЬ В РЕПОЗИТОРИИ",
    title: "В репозитории есть дополнительные скрипты для фона, частиц, паузы и ввода.",
    kind: "chapter",
    body: "В репозитории остались вспомогательные скрипты. ParallaxMovement смещает слои фона с разной скоростью за героем. ParticleController меняет интенсивность частиц от скорости. CollectableParticleController включает эмиссию, пока предмет движется после выброса из ящика. Есть пауза через Time.timeScale, SceneLoader, экранные кнопки, собственное распознавание tap/drag и Joystick для мобильного управления.\n\nЭтот раздел не делает выводов о масштабе или завершённости проекта. Он фиксирует дополнительные эксперименты, которые сохранились в коде ранней версии: фон, частицы, управление для разных устройств и переходы между сценами.",
    media: [
      { src: "/content/projects/gmo-shooter/gmo-vegetable-fight.png", alt: "Геймплей GMO Shooter в саду", caption: "В сцене сада видны фон, герой, овощные враги и падающие ящики." },
      { src: "/content/projects/gmo-shooter/gmo-boss-fight.png", alt: "Битва с боссом GMO Shooter", caption: "Отдельная сцена с роботом-боссом." },
    ],
  },
];

// Текущая версия статьи GMO Shooter. Текст опирается на сцены, ассеты и скрипты репозитория.
export const gmoStorySectionsRpgStyle: ContentSection[] = [
  {
    id: "gmo-chapter-story",
    tocTitle: "Сад, колодец и завод",
    kind: "chapter",
    title: "Сад, колодец и завод",
    body: "История начинается в саду. Бобр-садовник собирает урожай, когда овощи начинают нападать на него. По сюжету герой должен был пройти от сада к отравленной реке, спуститься в колодец и добраться до завода — источника загрязнения. Заводом управляет суперкомпьютер.\n\nВ репозитории собран первый этап — сад с волнами овощей, оружием, ящиками и отдельной сценой робота-босса. Для продолжения сохранены спрайты роботов, фон завода и скрипты их движения. Игровой уровень с колодцем и заводом в проекте отсутствует.",
    outline: [
      { label: "Сад", description: "Готовая игровая сцена: герой отбивается от овощей, собирает предметы и меняет оружие." },
      { label: "Колодец", description: "Часть маршрута из сюжета. Отдельной сцены для него в репозитории нет." },
      { label: "Завод", description: "Для него подготовлены фон, роботы и код процедурного движения конечностей." },
      { label: "Суперкомпьютер", description: "Финальный противник истории. В готовой части проекта его сцены нет." },
    ],
    media: [
      { src: "/content/projects/gmo-shooter/gmo-vegetable-fight.png", alt: "Бобр-садовник сражается с овощами", caption: "Первый этап проходит в саду." },
      { src: "/content/projects/gmo-shooter/gmo-boss-fight.png", alt: "Сцена с роботом-боссом", caption: "Робот-босс вынесен в отдельную сцену." },
    ],
  },
  {
    id: "gmo-garden",
    tocTitle: "Сад: волны и овощи",
    label: "ПЕРВЫЙ ЭТАП",
    kind: "gallery",
    title: "WaveScriptable задаёт состав волны. EnemySpawner выпускает овощей с двух сторон арены.",
    body: "Уровень построен вокруг волн. WaveScriptable хранит список противников и настройки волны. EnemySpawner создаёт их на левой или правой границе сцены, выбирает случайный масштаб и запускает следующую волну, когда в текущей создана половина запланированных врагов.\n\nВ саду используются брокколи, капуста, морковь, огурец, баклажан, перец, картофель и редис. Для нескольких овощей сделаны разрезанные варианты: EnemySlicer создаёт их после смерти противника.",
    flow: [
      { label: "WaveScriptable", description: "Хранит набор врагов и параметры волны." },
      { label: "EnemySpawner", description: "Выбирает сторону появления и создаёт противника." },
      { label: "EnemyHp", description: "Получает урон и передаёт событие компонентам смерти." },
      { label: "EnemySlicer", description: "Заменяет целый спрайт овоща на разрезанные части." },
    ],
    media: [
      { src: "/content/projects/gmo-shooter/sprites/broccoli.png", alt: "Спрайт брокколи", caption: "Брокколи" },
      { src: "/content/projects/gmo-shooter/sprites/cabage.png", alt: "Спрайт капусты", caption: "Капуста" },
      { src: "/content/projects/gmo-shooter/sprites/carrot.png", alt: "Спрайт моркови", caption: "Морковь" },
      { src: "/content/projects/gmo-shooter/sprites/cucumber.png", alt: "Спрайт огурца", caption: "Огурец" },
      { src: "/content/projects/gmo-shooter/sprites/eggplant.png", alt: "Спрайт баклажана", caption: "Баклажан" },
      { src: "/content/projects/gmo-shooter/sprites/pepper.png", alt: "Спрайт перца", caption: "Перец" },
      { src: "/content/projects/gmo-shooter/sprites/potato.png", alt: "Спрайт картофеля", caption: "Картофель" },
      { src: "/content/projects/gmo-shooter/sprites/radish.png", alt: "Спрайт редиса", caption: "Редис" },
    ],
  },
  {
    id: "gmo-chapter-hero",
    tocTitle: "Игрок и оружие",
    kind: "chapter",
    title: "Игрок и оружие",
    body: "Основной бой строится на двух независимых действиях: герой перемещается по горизонтали и выбирает направление выстрела. Это позволяет держать дистанцию от врагов, подбирать ящики и стрелять в нужную сторону.\n\nКод разделён по задачам. InputHandler собирает ввод. HeroMovement меняет скорость Rigidbody2D. HeroRotations поворачивает руки и отражает спрайт героя. Weapon проверяет возможность выстрела и запускает конкретную баллистику.",
    outline: [
      { label: "Перемещение", description: "Горизонтальная скорость Rigidbody2D задаётся через HeroMovement." },
      { label: "Прицеливание", description: "Направление приходит из мыши на ПК или виртуального джойстика на мобильном устройстве." },
      { label: "Выстрел", description: "Weapon проверяет задержку, боеприпасы и препятствие перед оружием." },
    ],
  },
  {
    id: "gmo-input",
    tocTitle: "Движение и прицеливание",
    label: "УПРАВЛЕНИЕ",
    kind: "text",
    title: "InputHandler передаёт движение и направление прицела отдельными значениями.",
    body: "На ПК направление прицела считается от центра безопасной области экрана к курсору. Для мобильного управления InputHandler получает его из виртуального джойстика. Горизонтальный ввод передаётся в HeroMovement отдельно.\n\nHeroRotations использует направление прицела для рук, оружия и разворота спрайта. В репозитории также остались ранние MoveController и RotateController: они показывают предыдущий вариант той же схемы управления.",
    language: "csharp",
    code: "// HeroMovement\\n_rigidbody.velocity = new Vector2(InputHandler.Horizontal * _speed, _rigidbody.velocity.y);\\n\\n// HeroRotations\\n_hand.rotation = Quaternion.Euler(0, 0, InputHandler.DirectionAngle);\\n_body.localScale = new Vector3(InputHandler.Direction.x < 0 ? -1 : 1, 1, 1);",
  },
  {
    id: "gmo-arsenal",
    tocTitle: "Оружие и боеприпасы",
    label: "ОРУЖИЕ",
    kind: "gallery",
    title: "Weapon отвечает за выстрел. Реализации IShooter задают траекторию пуль.",
    body: "Weapon хранит общие правила: проверяет задержку между выстрелами, наличие патронов и Raycast перед стволом. После выстрела он уменьшает запас боеприпасов, вызывает эффект у дула, звук и импульс камеры.\n\nDefaultShooter создаёт одну пулю со случайным разбросом. ShotgunShooter выпускает несколько пуль и распределяет урон между ними. WeaponInventory создаёт пистолет, винтовку и дробовик по данным сохранения, сортирует их по DPS и переключает оружие, когда у текущего заканчиваются патроны.",
    details: [
      { title: "Пистолет", body: "Базовое оружие хранится в WeaponInfo вместе с prefab, спрайтом, ценой и флагом открытия." },
      { title: "Винтовка", body: "Использует общий путь Weapon и отдельные боеприпасы RifleAmmo." },
      { title: "Дробовик", body: "ShotgunShooter создаёт несколько пуль за один выстрел." },
    ],
    media: [
      { src: "/content/projects/gmo-shooter/sprites/deagle.png", alt: "Спрайт пистолета Deagle", caption: "Пистолет" },
      { src: "/content/projects/gmo-shooter/sprites/ak47.png", alt: "Спрайт автомата AK-47", caption: "Автомат" },
      { src: "/content/projects/gmo-shooter/sprites/nova.png", alt: "Спрайт дробовика Nova", caption: "Дробовик" },
      { src: "/content/projects/gmo-shooter/sprites/awp.png", alt: "Спрайт винтовки AWP", caption: "Винтовка" },
      { src: "/content/projects/gmo-shooter/sprites/ump.png", alt: "Спрайт UMP", caption: "UMP" },
      { src: "/content/projects/gmo-shooter/sprites/uzi.png", alt: "Спрайт Uzi", caption: "Uzi" },
    ],
  },
  {
    id: "gmo-loot",
    tocTitle: "Ящики, предметы и улучшения",
    label: "ПОДБОР ПРЕДМЕТОВ",
    kind: "diagram",
    title: "Падающие ящики добавляют здоровье, монеты и боеприпасы прямо во время волны.",
    body: "BoxSpawner создаёт ящики над ареной. DropBox даёт им упасть, получает урон и после разрушения создаёт предметы. У предметов есть отдельные prefab для сердца, монеты, патронов винтовки, патронов дробовика, TNT и золотого сундука.\n\nStatUpdate и Updates содержат данные для улучшений. WeaponInfo хранит стоимость и состояние открытия оружия. Набор этих скриптов связывает бой с подбором ресурсов и покупкой нового оружия.",
    flow: [
      { label: "BoxSpawner", description: "Создаёт ящик над игровой областью." },
      { label: "DropBox", description: "Обрабатывает падение, урон и разрушение ящика." },
      { label: "Collectable", description: "Появляется с импульсом и ждёт подбора." },
      { label: "Updates", description: "Применяет значение предмета или улучшения." },
    ],
  },
  {
    id: "gmo-chapter-enemies",
    tocTitle: "Враги, анимация и босс",
    kind: "chapter",
    title: "Враги, анимация и босс",
    body: "Для обычных противников собран набор небольших компонентов: EnemyMovementController ведёт врага к игроку, EnemyTouchDamager наносит контактный урон, EnemyHp принимает попадания, DamageAnimation и EnemyDamageParticles показывают реакцию на них.\n\nОтдельно сделаны две системы процедурного движения. Овощные враги получают шаг и покачивание тела через EnemyAnimator. Роботы используют LegCycler и InverseKinematics для расчёта двухсегментной ноги.",
    outline: [
      { label: "Овощи", description: "Противники первого этапа со спрайтами и разрезанием после смерти." },
      { label: "Роботы", description: "Материалы для следующего этапа: девять роботов, RobotBoss и код конечностей." },
      { label: "Босс", description: "Отдельный противник со стадиями по запасу здоровья." },
    ],
  },
  {
    id: "gmo-animation",
    tocTitle: "Процедурная анимация",
    label: "НОГИ И КОНЕЧНОСТИ",
    kind: "gallery",
    title: "EnemyAnimator строит шаг овощного врага на синусоиде.",
    body: "EnemyAnimator хранит фазу шага для левой и правой ноги. Фазы сдвинуты на половину периода, поэтому ноги движутся по очереди. Тем же значением скрипт поднимает и опускает тело врага. Параметры амплитуды, скорости и высоты тела вынесены в настройки компонента.\n\nДля роботов LegCycler выбирает следующую точку шага, когда нога отстаёт от тела. InverseKinematics по длинам двух сегментов вычисляет положение колена и стопы. Эта система лежит рядом с роботами, подготовленными для второго этапа.",
    media: [
      { src: "/content/projects/gmo-shooter/sprites/carrot_sliced.png", alt: "Разрезанная морковь", caption: "Разрезанная морковь" },
      { src: "/content/projects/gmo-shooter/sprites/broccoli_sliced.png", alt: "Разрезанная брокколи", caption: "Разрезанная брокколи" },
      { src: "/content/projects/gmo-shooter/sprites/RobotBoss.png", alt: "Спрайт Robot Boss", caption: "Robot Boss" },
    ],
  },
  {
    id: "gmo-boss",
    tocTitle: "Робот-босс",
    label: "ОТДЕЛЬНАЯ БОСС-СЦЕНА",
    kind: "diagram",
    title: "BossStateController меняет набор действий по текущему запасу здоровья босса.",
    body: "BossStateController хранит пороги здоровья и UnityEvent для каждой стадии. При переходе через порог контроллер вызывает назначенное действие. Время между атаками тоже зависит от здоровья.\n\nВ набор атак входят движение, рывок EnemyCharger, управление руками и лазер. HandsController создаёт малые руки после гибели большой. LazerController сначала показывает предупреждение, затем запускает мигание лазера и его попадания.",
    flow: [
      { label: "Здоровье", description: "BossStateController сравнивает текущее значение с порогами стадий." },
      { label: "Стадия", description: "UnityEvent запускает назначенную атаку или изменение поведения." },
      { label: "Предупреждение", description: "LazerController выводит линию и меняет её прозрачность." },
      { label: "Лазер", description: "Lazer наносит урон в активной фазе атаки." },
    ],
    media: [
      { src: "/content/projects/gmo-shooter/gmo-boss-fight.png", alt: "Битва с роботом-боссом", caption: "Сцена с роботом-боссом." },
    ],
  },
  {
    id: "gmo-chapter-factory",
    tocTitle: "Подготовленный второй этап",
    kind: "chapter",
    title: "Подготовленный второй этап",
    body: "После сада сюжет ведёт героя к заводу. В папках Assets и Scripts для этой части сохранились фон, девять спрайтов роботов, RobotBoss, RobotMovement, LegCycler, InverseKinematics и RobotSlicer.\n\nЭти материалы не собраны в игровую сцену. В проекте нет второго уровня, расстановки роботов, волн и перехода из сада на завод. Раздел фиксирует подготовленные ассеты и системы этого этапа.",
    outline: [
      { label: "Фон", description: "Спрайт промышленного окружения для сцены завода." },
      { label: "Роботы", description: "Девять вариантов противников и отдельный RobotBoss." },
      { label: "Движение", description: "Скрипты для перемещения, ног, конечностей и разрезания робота." },
    ],
  },
  {
    id: "gmo-robots",
    tocTitle: "Роботы завода",
    label: "АССЕТЫ ВТОРОГО ЭТАПА",
    kind: "gallery",
    title: "Для завода подготовлены девять роботов и отдельный RobotBoss.",
    body: "В наборе есть роботы разных силуэтов и размеров. Их спрайты находятся рядом с RobotMovement, LegCycler, InverseKinematics и RobotSlicer. Код задаёт основу для поведения и движения этих противников.\n\nПолноценной сцены завода в репозитории нет. Спрайты и скрипты показывают направление следующего этапа без приписывания ему готового геймплея.",
    media: [
      { src: "/content/projects/gmo-shooter/sprites/robot1.png", alt: "Спрайт робота 1", caption: "Robot 1" },
      { src: "/content/projects/gmo-shooter/sprites/robot2.png", alt: "Спрайт робота 2", caption: "Robot 2" },
      { src: "/content/projects/gmo-shooter/sprites/robot3.png", alt: "Спрайт робота 3", caption: "Robot 3" },
      { src: "/content/projects/gmo-shooter/sprites/robot4.png", alt: "Спрайт робота 4", caption: "Robot 4" },
      { src: "/content/projects/gmo-shooter/sprites/robot5.png", alt: "Спрайт робота 5", caption: "Robot 5" },
      { src: "/content/projects/gmo-shooter/sprites/robot6.png", alt: "Спрайт робота 6", caption: "Robot 6" },
      { src: "/content/projects/gmo-shooter/sprites/robot7.png", alt: "Спрайт робота 7", caption: "Robot 7" },
      { src: "/content/projects/gmo-shooter/sprites/robot8.png", alt: "Спрайт робота 8", caption: "Robot 8" },
      { src: "/content/projects/gmo-shooter/sprites/robot9.png", alt: "Спрайт робота 9", caption: "Robot 9" },
    ],
  },
  {
    id: "gmo-save",
    tocTitle: "Сохранения и данные",
    label: "PLAYERPREFS И SCRIPTABLEOBJECT",
    kind: "text",
    title: "SaveManager сохраняет прогресс в JSON и восстанавливает ScriptableObject по ID ассета.",
    body: "SaveManager сериализует данные игрока в JSON и записывает строку в PlayerPrefs. При загрузке он находит нужные ScriptableObject в Resources и восстанавливает ссылки по идентификаторам ассетов.\n\nВ сохранение попадают данные, связанные с оружием и его открытием. WeaponInventory использует их при создании доступного набора оружия для новой игровой сессии.",
    language: "csharp",
    code: "PlayerPrefs.SetString(_saveKey, JsonUtility.ToJson(_playerData));\\n\\nvar json = PlayerPrefs.GetString(_saveKey);\\n_playerData = JsonUtility.FromJson<PlayerData>(json);",
  },
  {
    id: "gmo-support",
    tocTitle: "Фон, частицы и пауза",
    label: "ВСПОМОГАТЕЛЬНЫЕ СИСТЕМЫ",
    kind: "text",
    title: "В репозитории есть отдельные скрипты для фона, частиц, паузы и мобильного ввода.",
    body: "ParallaxMovement сдвигает слои фона с разной скоростью относительно героя. ParticleController меняет интенсивность частиц от скорости объекта. CollectableParticleController держит эмиссию включённой, пока предмет летит после появления из ящика.\n\nДля сцен есть Pause через Time.timeScale и SceneLoader. Для мобильного управления сохранены экранные кнопки, распознавание tap и drag, а также Joystick. Эти скрипты дополняют основные боевые системы и показывают, какие части интерфейса и окружения были заведены в проект.",
  },
];

export const zombiesInMinoriStorySections: ContentSection[] = [
  {
    id: "minori-chapter-start",
    tocTitle: "Первая 3D-игра",
    kind: "chapter",
    title: "Первая 3D-игра",
    body: "Я хотел сделать большую игру про выживание во время зомби-апокалипсиса. Работа остановилась на одной улице города Минори, нескольких домах и наборе базовых систем.\n\nИгра получилась неровной. Управление скользит, стрельба ощущается тяжело, UI не адаптирован под разные разрешения, в инвентаре есть баги. Эта страница не пытается скрыть эти проблемы. Она показывает конкретные механики, которые я впервые собрал здесь и затем переосмысливал в следующих проектах.",
    outline: [
      { label: "Период", description: "13 октября 2022 — 29 мая 2023: даты первого и последнего коммитов репозитория." },
      { label: "Сцена", description: "Одна улица города Минори, дома и интерьер одного из них." },
      { label: "Системы", description: "Зомби, оружие, инвентарь, предметы в руках и шкалы выживания." },
    ],
  },
  {
    id: "minori-street",
    tocTitle: "Улица Минори",
    label: "ГОРОД КАК ОРИЕНТИР",
    kind: "gallery",
    title: "Церковь в конце улицы стала главным ориентиром игровой локации.",
    body: "Название Minori взято от небольшого итальянского города. Особой сюжетной причины не было: мне хотелось поместить игру про зомби в небольшой итальянский городок. В первую очередь меня привлекла церковь в конце улицы. Застройка вокруг неё стала окружением для игровой сцены.\n\nЭто не точная реконструкция. В игре сохранены направление улицы, плотная застройка и общий силуэт места. На этой одной улице и остался масштаб готовой локации.",
    media: [
      { src: "/content/projects/zombies-in-minori/zombies-MinoriFromGoogle.jpg", alt: "Улица с церковью в городе Минори", caption: "Церковь и окружающая её улица в городе Минори." },
      { src: "/content/projects/zombies-in-minori/zombies-MinoriFromMyGame.jpg", alt: "Игровая улица в Zombies in Minori", caption: "Церковь в перспективе игровой улицы." },
      { src: "/content/projects/zombies-in-minori/zombies-MinoriFromGoogle2.jpg", alt: "Ещё один вид улицы в городе Минори", caption: "Вторая точка сравнения с реальной улицей." },
      { src: "/content/projects/zombies-in-minori/zombies-MinoriFromMyGame2.jpg", alt: "Второй вид игровой улицы", caption: "Её игровая версия." },
    ],
  },
  {
    id: "minori-chapter-systems",
    tocTitle: "Бой и выживание",
    kind: "chapter",
    title: "Бой и выживание",
    body: "Игровая сцена связывает несколько систем: герой перемещается, расходует выносливость, держит оружие или предмет в руках, стреляет, подбирает вещи и следит за шкалами состояния. Зомби ходят по NavMesh, замечают героя, преследуют его и атакуют вблизи.\n\nСистемы написаны как набор MonoBehaviour-компонентов и простых моделей. Они не образуют зрелую архитектуру, но уже разделены по задачам: ввод, движение, оружие, инвентарь, здоровье, статистики и ИИ лежат в отдельных папках и классах.",
    outline: [
      { label: "Ввод", description: "InputHandler публикует события мыши, клавиш, выбора оружия, инвентаря и взаимодействий." },
      { label: "Герой", description: "HeroMovement работает с CharacterController, ускорением, торможением, прыжком, приседанием и спринтом." },
      { label: "Противники", description: "ZombieLogic объединяет NavMeshAgent, конечный автомат, зрение, слух и атаку." },
    ],
  },
  {
    id: "minori-movement",
    tocTitle: "Движение и состояние героя",
    label: "CHARACTERCONTROLLER",
    kind: "text",
    title: "HeroMovement рассчитывает скорость с ускорением, сопротивлением и ограничением максимальной скорости.",
    body: "HeroMovement читает направление из InputHandler и передаёт скорость в CharacterController. В скрипте есть гравитация, прыжок, приседание с проверкой места над головой и спринт, который расходует выносливость. CameraController поворачивает героя и камеру мышью. FieldOfViewController уменьшает FOV при прицеливании.\n\nИменно настройки ускорения и сопротивления сделали движение слишком скользким. Герой долго гасит скорость, поэтому управление ощущается как движение по льду. В новых проектах такую систему нужно писать заново и проверять в реальном запуске игры.",
    code: "var deltaV = transform.rotation * (InputHandler.Movement.normalized\n    * Time.fixedDeltaTime * _stepAcceleration);\n\nvelocity += deltaV;\nvelocity = Vector3.ClampMagnitude(velocity.WithY(0), maxSpeed).WithY(velocity.y);\ncharacterC.Move(velocity * Time.fixedDeltaTime);",
    language: "csharp",
  },
  {
    id: "minori-weapons",
    tocTitle: "Стрельба и оружие",
    label: "ОРУЖИЕ",
    kind: "text",
    title: "WeaponController поддерживает одиночный, очередной и автоматический огонь.",
    body: "У оружия есть три режима: Single, Burst и Automate. Клавиша V переключает доступные режимы, WeaponController запускает нужное количество выстрелов, AmmoController ведёт магазин и собирает патроны из инвентаря при перезарядке. ShootController создаёт пулю из пула, задаёт разброс, скорость и урон. Bullet проверяет попадание через Linecast, наносит урон и оставляет эффект на поверхности.\n\nПрицеливание меняет FOV камеры. Recoil накапливает тепло оружия, берёт силу и случайное смещение из AnimationCurve и добавляет движение камере. В коде собраны все части полноценного оружейного контура: режимы, патроны, перезарядка, отдача, разброс, эффекты попаданий и HUD. В текущей игре они не дают хорошего ощущения от стрельбы — это тоже часть честного состояния проекта.",
    details: [
      { title: "Патроны", body: "Количество патронов в магазине хранится в AdditionalData предмета оружия. AmmoController переносит патроны из стопок инвентаря при перезарядке." },
      { title: "Пуля", body: "Bullet берётся из BulletPool, движется до попадания или возвращается в пул через пять секунд." },
      { title: "Ближний бой", body: "ColdWeapon запускает анимацию атаки. ColdWeaponDamageArea проверяет OverlapBox в активном окне удара." },
    ],
  },
  {
    id: "minori-inventory",
    tocTitle: "Сетчатый инвентарь",
    label: "ПРЕДМЕТЫ, СЛОТЫ И ВЫБРОС",
    kind: "gallery",
    title: "Инвентарь хранит предметы в сетке и отдельных слотах экипировки.",
    body: "GridModel хранит двумерную сетку ячеек и проверяет границы, свободное место, размеры предмета и его поворот. ItemModel содержит размер, количество, максимальный размер стопки, позицию и дополнительные данные. InventoryModel собирает сетки, слоты и предмет в курсоре. Он умеет искать свободное место, объединять недозаполненные стопки и переносить предмет между контейнерами.\n\nInventoryController поднимает предмет в руку курсора, пытается положить его в сетку, поменять местами или объединить со стопкой. Перетаскивание за пределы UI выбрасывает предмет в мир через DropItem. Правый клик открывает ItemMenuController: для предмета появляются действия Use и Drop. UI не адаптирован под экран и может выходить за его границы. В инвентаре есть ошибки, однако сама схема с сеткой, слотами, стопками и предметом в руке уже работает в коде.",
    media: [
      { src: "/content/projects/zombies-in-minori/zombies-Inventory_ex_1.jpg", alt: "Сетчатый инвентарь Zombies in Minori", caption: "Сетки и слоты экипировки." },
      { src: "/content/projects/zombies-in-minori/zombies-Inventory_ex_2.jpg", alt: "Инвентарь с меню Drop", caption: "Контекстное меню предмета с действием Drop." },
    ],
  },
  {
    id: "minori-items-stats",
    tocTitle: "Предметы в руках и статы",
    label: "ИСПОЛЬЗОВАНИЕ ПРЕДМЕТОВ",
    kind: "gallery",
    title: "Предмет из инвентаря можно вынести в руку и использовать в игровом мире.",
    body: "ItemData связывает предмет со спрайтом, размером, типом, prefab для выброса и prefab для руки. WorldHandItemController следит за слотами основного и дополнительного оружия, создаёт их визуальные версии в руках героя и переключает их клавишами 1–3. Предмет без экипировочного слота тоже можно вынести в руку через Use в контекстном меню.\n\nFood использует этот же путь: при нажатии предмет в руке уменьшает свою стопку и изменяет здоровье, голод, жажду и иммунитет. BarsController объединяет три Stat, HpController отвечает за здоровье, StaminaController — за выносливость спринта. Статы и полоски состояния появились здесь впервые. Позже эта тема много раз переписывалась и оставалась в моих проектах в более развитом виде.",
    media: [
      { src: "/content/projects/zombies-in-minori/zombies-UsableItem.jpg", alt: "Предмет в руках героя", caption: "Предмет из инвентаря в руках героя." },
    ],
  },
  {
    id: "minori-interaction",
    tocTitle: "Интерактивные объекты",
    label: "ПОДБОР И ВЗАИМОДЕЙСТВИЕ",
    kind: "gallery",
    title: "InteractableFounder показывает подсказку Press F, когда игрок смотрит на предмет.",
    body: "InteractableFounder пускает Raycast из камеры перед героем. Если луч попадает в объект с компонентом Interactable на заданном расстоянии, на экране появляется подсказка Press F. Нажатие F вызывает событие объекта.\n\nЧерез эту связку в мире можно подбирать и использовать предметы. Interactable содержит UnityEvent с героем и объектом, поэтому конкретное действие задаётся в инспекторе. На скриншоте подсказка появляется у предметов на столе в церкви.",
    media: [
      { src: "/content/projects/zombies-in-minori/zombies-Minori_Interact_Ex.jpg", alt: "Подсказка Press F у интерактивных предметов", caption: "Луч из камеры находит интерактивный объект и выводит Press F." },
    ],
  },
  {
    id: "minori-zombies",
    tocTitle: "Зомби и конечный автомат",
    label: "NAVMESH И СОСТОЯНИЯ",
    kind: "diagram",
    title: "ZombieLogic переключает случайное движение, преследование и атаку.",
    body: "Каждый зомби получает NavMeshAgent, Animator, HpController, EntityVisualDetector и EntitySoundDetector. При запуске ZombieLogic создаёт состояния RandomWalking, HeroChasing и Attacking. RandomWalking выбирает точку на NavMesh в заданном радиусе. HeroChasing постоянно обновляет цель агента на позиции героя. Attacking останавливает агента, разворачивает зомби к герою и запускает анимацию удара.\n\nПереход к преследованию срабатывает по зрению или слуху. VisualDetector ищет коллайдеры в радиусе, проверяет угол обзора и лучи до цели с учётом препятствий. SoundDetector использует сферу слышимости. Когда цель выходит из радиуса преследования, зомби возвращается к случайному движению. EnemyAttack собирает цели в триггере и наносит урон при атаке. После смерти EnemyDead выключает движение и удаляет объект через семь секунд.",
    flow: [
      { label: "RandomWalking", description: "Зомби выбирает случайную доступную точку на NavMesh." },
      { label: "Visual / Sound detector", description: "Зрение и слух находят героя и запускают преследование." },
      { label: "HeroChasing", description: "NavMeshAgent получает текущую позицию героя как пункт назначения." },
      { label: "Attacking", description: "Зомби останавливается, поворачивается к герою и вызывает EnemyAttack." },
    ],
  },
  {
    id: "minori-world",
    tocTitle: "Дома и собственная графика",
    label: "3D-МОДЕЛИРОВАНИЕ",
    kind: "gallery",
    title: "Окружение, предметы и интерьер дома я моделировал сам.",
    body: "Кроме моделей оружия, взятых из открытых ассетов, графика проекта собрана вручную: улица, фасады, церковь в конце перспективы, мебель и предметы внутри дома. До этого у меня не было опыта в 3D-моделировании. Поэтому геометрия и итоговая картинка выглядят грубо.\n\nВ один из домов можно зайти. Для него сделаны комнаты, мебель, кухня, стол, стулья, телевизор, диван и другие предметы. Это был отдельный кусок работы внутри небольшой сцены. После Zombies in Minori я больше не занимался 3D-моделированием; в этом проекте остался единственный такой опыт.",
    media: [
      { src: "/content/projects/zombies-in-minori/zombies-MinoriInHouse1.jpg", alt: "Интерьер дома в Zombies in Minori", caption: "Комната с мебелью." },
      { src: "/content/projects/zombies-in-minori/zombies-MinoriInHouse2.jpg", alt: "Вторая комната дома в Zombies in Minori", caption: "Ещё одна часть интерьера." },
      { src: "/content/projects/zombies-in-minori/zombies-MinoriInHouse3.jpg", alt: "Интерьер дома в Zombies in Minori", caption: "Дом можно исследовать изнутри." },
    ],
  },
  {
    id: "minori-summary",
    tocTitle: "Что я взял из проекта",
    label: "МЕСТО ПРОЕКТА В ПОРТФОЛИО",
    kind: "text",
    title: "Zombies in Minori стал началом работы с 3D-проектами, инвентарём и системами выживания.",
    body: "В проекте есть одна улица города Минори, интерьер дома, зомби, оружие, инвентарь, предметы в руках и шкалы состояния. Я довёл эти части до работающего прототипа и опубликовал его.\n\nУправление, стрельба, UI и код отдельных систем требуют замены. Здесь впервые появились задачи инвентаря, статов, предметов, оружия и ИИ. В следующих проектах я возвращался к ним уже с опытом этой работы.",
  },
];

export const wizardGameStorySections: ContentSection[] = [
  {
    id: "wizard-chapter-context",
    tocTitle: "Второй проект и первая команда",
    kind: "chapter",
    title: "Второй игровой проект и первый опыт командной разработки.",
    body: "«Волшебник. Обучение естественным наукам» — командная образовательная игра. Это мой второй игровой проект и первая работа в команде.\n\nИгра сделана для институтского предмета на первом курсе бакалавриата. Нужно было объединиться в команды и подготовить совместный проект. Наша команда решила делать игру. Опыта разработки игр ни у кого не было, поэтому выбрали готовый движок RPG Maker MV.",
    outline: [
      { label: "Формат", description: "Desktop-ориентированная игра с веб-версией." },
      { label: "Аудитория", description: "Школьники 5–9 классов." },
      { label: "Движок", description: "RPG Maker MV с JavaScript и HTML в составе проекта." },
    ],
  },
  {
    id: "wizard-idea",
    tocTitle: "Игра про волшебника",
    label: "ОБРАЗОВАТЕЛЬНАЯ RPG",
    kind: "gallery",
    title: "Начинающий волшебник получает знания в квестах и применяет их в головоломках.",
    body: "Игрок управляет начинающим волшебником. Продвижение по сюжету связано с заданиями по точным и естественным наукам. В описании проекта магия построена на физических законах, поэтому знания становятся частью игрового действия.\n\nИгра рассчитана на школьников 5–9 классов. В репозитории есть карты, персонажи, звуки, изображения и данные игрового проекта.",
    media: [
      { src: "/content/projects/wizard-game/wizard-game-cover.png", alt: "Лесная локация игры Волшебник", caption: "Игровая локация со знаком атома." },
      { src: "/content/projects/wizard-game/wizard-game-2.png", alt: "Диалог в зале игры Волшебник", caption: "Сцена с диалогом в зале." },
    ],
  },
  {
    id: "wizard-puzzles",
    tocTitle: "Задачи и магия",
    label: "УЧЕБНЫЕ ГОЛОВОЛОМКИ",
    kind: "text",
    title: "Физика, математика и биология становятся задачами внутри квестов.",
    body: "В одной биологической задаче игрок выбирает кость, которой не хватает скелету. В другой нужно получить ключ из куска льда и рассчитать энергию, необходимую для его плавления.\n\nУчебный вопрос становится условием для следующего шага: квест задаёт ситуацию, задача требует знания, правильное решение открывает дальнейшее прохождение.",
    flow: [
      { label: "Квест", description: "Игрок получает ситуацию и цель." },
      { label: "Задача", description: "Нужно применить знание из школьного предмета." },
      { label: "Решение", description: "Верный ответ открывает дальнейшее прохождение." },
    ],
  },
  {
    id: "wizard-maker",
    tocTitle: "RPG Maker MV",
    label: "ДВИЖОК",
    kind: "text",
    title: "RPG Maker MV хранит карты, события и игровые данные в готовой структуре проекта.",
    body: "В репозитории лежит файл Game.rpgproject, JSON-данные персонажей и игровые папки audio, img и js. RPG Maker MV даёт редактор карт, диалогов, событий и базовых правил RPG. Поэтому большая часть игрового содержания создаётся средствами движка и настройкой данных.\n\nJavaScript и HTML входят в стек RPG Maker MV. Эта технология заметно отличается от моего дальнейшего пути с Unity и C#.",
  },
  {
    id: "wizard-gallery",
    tocTitle: "Материалы проекта",
    label: "КАДРЫ ИЗ РЕПОЗИТОРИЯ",
    kind: "gallery",
    title: "Репозиторий сохранил игровые локации, диалоги и схему запуска игры.",
    body: "В проекте есть несколько скриншотов игрового процесса и схема, описывающая путь от запуска к главному меню, настройкам, загрузке сохранения и началу игры.",
    media: [
      { src: "/content/projects/wizard-game/wizard-game-3.png", alt: "Игровая сцена Волшебника", caption: "Кадр игрового процесса." },
      { src: "/content/projects/wizard-game/wizard-game-4.png", alt: "Локация игры Волшебник", caption: "Ещё одна игровая локация." },
      { src: "/content/projects/wizard-game/wizard-game-schema.png", alt: "Схема запуска игры Волшебник", caption: "Схема главного меню, сохранений и запуска игрового процесса." },
    ],
  },
];

export const rpgStorySections: ContentSection[] = [
  {
    id: "rpg-chapter-architecture",
    tocTitle: "Архитектура игровой сессии",
    kind: "chapter",
    title: "Архитектура игровой сессии",
    outline: [
      {
        label: "ProjectLifetimeScope",
        description:
          "Постоянные сервисы проекта: загрузка, сохранения, локализация и аудио.",
      },
      {
        label: "GameLifetimeScope",
        description:
          "Контекст открытой игровой сцены, её сообщения и общие реестры.",
      },
      {
        label: "Локальные контексты",
        description:
          "Игрок, интерфейс, локация и NPC получают состояние в пределах собственного жизненного цикла.",
      },
    ],
    body: "Игровая сессия объединяет постоянные сервисы проекта, объекты загруженной локации и временные контексты игрока. Границы жизненного цикла определяют владельцев данных и порядок инициализации систем.",
  },
  {
    id: "rpg-session",
    label: "ОСНОВА ПРОЕКТА",
    tocTitle: "Игровая сессия и контексты",
    kind: "text",
    title: "Игровая сессия собирает состояние мира вокруг игрока.",
    body: "Проект хранит постоянные сервисы в ProjectLifetimeScope: загрузку, сохранения, локализацию, аудио и конфигурации. После загрузки игровой сцены создаётся GameLifetimeScope. Он собирает контекст текущей сессии: игрока, интерфейс, объекты мира и игровые каналы сообщений.\n\nКаждый контекст владеет данными в пределах своего жизненного цикла. Смена локации создаёт новую игровую среду. Постоянные данные прохождения остаются доступны для следующей сессии.",
  },
  {
    id: "rpg-game-mode",
    label: "РЕЖИМ ИГРЫ",
    tocTitle: "GameMode и переходы интерфейса",
    kind: "text",
    title: "GameMode определяет форму игры и доступные действия.",
    code: `private void ChangeGameMode(ChangeGameModeRequest msg)
{
    if (GameMode == GameMode.Death)
    {
        return;
    }

    if (msg.Mode == GameMode.Game && dialogueContext.IsForcedDialogue && !dialogueContext.CanExitDialogue)
    {
        return;
    }

    ApplyGameMode(msg.Mode);
}`,
    body: "Намерение игрока поступает в GameModesController как предметное сообщение. Контроллер проверяет правила перехода, устанавливает новый GameMode и публикует результат. Вместе с режимом применяются правила движения, времени и курсора.\n\nPagesController получает установленный режим и открывает подходящую страницу. Ввод, интерфейс и игровые действия используют одно состояние. Такой порядок сохраняет правила перехода в единой точке.",
  },
  {
    id: "rpg-chapter-player",
    tocTitle: "Игрок и игровые действия",
    kind: "chapter",
    title: "Игрок и игровые действия",
    outline: [
      {
        label: "Движение и камера",
        description:
          "Ввод переводится в движение относительно камеры и учитывает состояние персонажа.",
      },
      {
        label: "Взаимодействие",
        description:
          "Объект мира определяет доступность действия и его результат.",
      },
      {
        label: "Бой",
        description:
          "Атака проходит от анимационного события до расчёта урона и реакции цели.",
      },
      {
        label: "Характеристики",
        description:
          "Здоровье, выносливость, вес и экипировка влияют на доступные действия.",
      },
    ],
    body: "Контекст игрока объединяет системы, которые сопровождают действие от ввода до изменения состояния персонажа. Каждая из них отвечает за свой этап и передаёт результат следующей.",
  },
  {
    id: "rpg-interaction",
    label: "ВЗАИМОДЕЙСТВИЕ",
    tocTitle: "Взаимодействие с объектами мира",
    kind: "gallery",
    title: "Interactable передаёт действие владельцу объекта мира.",
    code: `private void Interact(InteractableInputMessage msg)
{
    RefreshAvailableInteractables();
    if (actionState.IsActionBlocked)
    {
        EndAllManualInteractions();
        return;
    }

    foreach (Interactable interactable in Interactables)
    {
        interactable.TryManualInteract(scope);
    }
}`,
    body: "Interactable сообщает, доступен ли объект игроку, и задаёт текст подсказки. Система игрока выбирает подходящую цель, показывает действие и передаёт подтверждённый запрос объекту.\n\nСундук открывает инвентарь добычи. Предмет передаётся владельцу. Персонаж создаёт контекст диалога. Общая точка входа сохраняет единое управление. Сценарий и его последствия остаются в системе объекта.",
    media: [
      {
        src: "/content/projects/rpg/interaction-rpg-01.png",
        alt: "Игрок взаимодействует с объектом в RPG",
        caption:
          "Взаимодействие начинается в мире. Результат определяет объект.",
      },
    ],
  },
  {
    id: "rpg-player-combat",
    label: "ИГРОК И БОЙ",
    tocTitle: "Боевая система и расчёт урона",
    kind: "gallery",
    title: "Попадание проходит через отдельные этапы игрового действия.",
    code: `public void ReceiveHit(BodyHitbox hitbox, in WeaponHit hit)
{
    if (isWeaponDamageBlocked || hitbox == null || hit.Damage <= 0f)
    {
        return;
    }

    var bodyMultiplier = Mathf.Max(0f, hitbox.DamageMultiplier);
    var physicalDefense = PhysicalDefenseCalculator.ResolveProtection(inventory, hitbox.BodyPart);
    var mitigatedDamage = hit.Damage * bodyMultiplier * (1f - physicalDefense);

    var hp = statsController.Hp;
    var previousHp = hp.Value.Value;
    statsController.AddValue(StatType.Hp, -mitigatedDamage, StatChangeSource.Combat);
}`,
    body: "Ввод запускает действие персонажа. Анимационное событие открывает окно урона в нужный момент удара. WeaponDamageZone фиксирует контакт с BodyHitbox. CharacterDamageReceiver рассчитывает итог с учётом части тела, защиты и состояния цели.\n\nПосле расчёта изменяются характеристики персонажа. Событие попадания передаёт результат HUD, реакции цели и поведению NPC. Каждый этап описывает собственный факт: действие, контакт, расчёт или изменение состояния.",
    media: [
      {
        src: "/content/projects/rpg/npc-combat-01.png",
        alt: "Бой персонажа и NPC в RPG",
        caption:
          "Анимация, контакт и реакция цели образуют последовательность одного удара.",
      },
      {
        src: "/content/projects/rpg/npc-combat-02.png",
        alt: "Боевая ситуация в RPG",
        caption: "Положение участников определяет дистанцию и момент контакта.",
      },
    ],
  },
  {
    id: "rpg-camera-target-lock",
    label: "КАМЕРА И ЦЕЛЬ",
    tocTitle: "Камера, движение и захват цели",
    kind: "text",
    title: "Захват цели связывает камеру, движение и боевое действие.",
    body: "TargetLockController ищет кандидатов в радиусе игрока и оценивает их по дистанции, положению на экране, направлению персонажа и прямой видимости. Игрок переключает найденные цели. Система удерживает цель короткое время после потери видимости, чтобы камера не переключалась при каждом кратком перекрытии.\n\nМягкий захват разворачивает персонажа к цели. Жёсткий захват передаёт цели камеру. Перед атакой персонаж выравнивается по направлению удара. Перекат и другие действия временно приостанавливают автоматический разворот. Управление сохраняет предсказуемое поведение во время движения и боя.",
  },
  {
    id: "rpg-movement",
    label: "ДВИЖЕНИЕ И АНИМАЦИЯ",
    tocTitle: "Движение, бег и направленные действия",
    kind: "code",
    title: "Движение рассчитывается относительно камеры и состояния персонажа.",
    body: "PlayerMovement сглаживает скорость до целевого значения, переводит ввод в плоскость камеры и передаёт результат CharacterController. Выносливость и переносимый вес определяют доступность движения и бега. Поэтому эти ограничения применяются до расчёта скорости, а не в интерфейсе или обработчике клавиш.\n\nPlayerAnimationController получает фактическую скорость и направление в локальных координатах модели. Для переката он отдельно запоминает направление ввода до запуска анимации. Движение, визуальное состояние и игровое действие используют одни и те же данные.",
    code: `public void Tick()
{
    ApplyStaminaRestrictions();

    currentVelocity = Vector2.MoveTowards(
        currentVelocity,
        targetVelocity,
        currentSpeedChangeRate * Time.deltaTime);

    var moveDirection = cameraMotor.GetGameplayPlanarRotation() *
                        new Vector3(currentVelocity.x, 0, currentVelocity.y);

    RotateTowardsMovement(moveDirection, currentVelocity);
    controller.Move(moveDirection.normalized * (moveSpeed * Time.deltaTime));
}`,
    media: [
      {
        alt: "Нужно видео: персонаж идёт и бежит относительно поворота камеры, затем выполняет перекат в сторону текущего ввода. В кадре должны быть видны смена направления камеры и действие персонажа.",
        caption:
          "ТЗ для видео: движение относительно камеры и направленный перекат.",
      },
    ],
  },
  {
    id: "rpg-character-state",
    label: "СОСТОЯНИЕ ПЕРСОНАЖА",
    tocTitle: "Характеристики, выносливость и экипировка",
    kind: "text",
    title:
      "Характеристики персонажа получают изменения из отдельных игровых правил.",
    body: "StatsController хранит здоровье, выносливость, воду и еду. Движение расходует выносливость через StaminaMovementChanger. Периодические системы восстанавливают или изменяют характеристики по правилам текущей сессии.\n\nЭкипировка передаёт защиту в расчёт урона. Оружие и части снаряжения получают визуальное представление на модели персонажа. Игровая механика изменяет данные характеристик и экипировки. HUD и страницы интерфейса показывают уже рассчитанное состояние.",
  },
  {
    id: "rpg-chapter-inventory",
    tocTitle: "Инвентарь и экономика",
    kind: "chapter",
    title: "Инвентарь и экономика",
    outline: [
      {
        label: "Инвентарь игрока",
        description:
          "Сетка, вес, стеки и быстрые слоты хранят предметы прохождения.",
      },
      {
        label: "Экипировка",
        description:
          "Слоты размещают снаряжение и передают его свойства персонажу.",
      },
      {
        label: "Контейнеры и добыча",
        description:
          "Сундуки и тела используют те же правила передачи предметов.",
      },
      {
        label: "Торговля",
        description:
          "Два инвентаря обмениваются предметами с учётом денег участников.",
      },
      {
        label: "Предметы в мире",
        description:
          "Выброшенная вещь получает владельца локации и сохраняемое состояние.",
      },
    ],
    body: "Предмет проходит через одну модель операций независимо от владельца. Рюкзак игрока, сундук, добыча, торговый экран и объект на земле передают ей разные контексты, затем получают единый результат изменения.\n\nСхема показывает путь предмета между владельцами. Отдельные разделы ниже раскрывают правила сетки, экипировки, контекстного меню, торговли и сохранения выброшенных вещей.",
  },
  {
    id: "rpg-items",
    label: "ПРЕДМЕТЫ И ИНВЕНТАРЬ",
    tocTitle: "Предметы, инвентарь, добыча и торговля",
    kind: "gallery",
    title: "Модель предметов задаёт правила для рюкзака, добычи и торговли.",
    code: `public bool AssignFastSlot(FastSlotModel fastSlot, ItemConfig itemConfig)
{
    if (fastSlot == null || itemConfig == null || itemConfig.ItemType != ItemType.Usable)
    {
        return false;
    }

    fastSlot.Assign(itemConfig);
    NotifyChanged();
    return true;
}`,
    body: "ItemConfig хранит постоянные свойства предмета: идентификатор, размер, вес, иконку и правила использования. Во время игры инвентари создают стеки, ячейки и владельцев предметов. Изменяемое состояние принадлежит прохождению игрока.\n\nРюкзак, экипировка, быстрые слоты и предмет в руке используют общую модель. Операция проверяет место в сетке, занятые клетки и правила объединения стеков. Торговля добавляет к этой операции цену и состояние денег участников.",
    media: [
      {
        src: "/content/projects/rpg/inventory-trade-rpg.jpg",
        alt: "Окно торговли в RPG",
        caption: "Два инвентаря используют одну модель операций с предметами.",
      },
    ],
  },
  {
    id: "rpg-inventory-ui",
    label: "РАБОТА С ИНВЕНТАРЁМ",
    tocTitle: "Сетка, предмет в руке и контекстное меню",
    kind: "text",
    title: "Интерфейс инвентаря передаёт операции модели предметов.",
    body: "При захвате предмета InventoryHandController переносит стек во временный слот в руке. Интерфейс следует за курсором, показывает размер предмета и привязывает его к подходящей позиции сетки, слоту экипировки или быстрому слоту. Модель проверяет возможность операции до изменения инвентаря.\n\nПКМ открывает контекстное меню для выбранного предмета. В зависимости от его типа и положения доступны использование, перемещение, экипировка, сброс на землю и действие с частью стака. Окно инвентаря показывает вес, характеристики, экипировку и быстрые слоты. Эти представления обновляются из состояния владельца предметов.",
  },
  {
    id: "rpg-loot-trade",
    label: "ДОБЫЧА И ТОРГОВЛЯ",
    tocTitle: "Добыча, торговля и два инвентаря",
    kind: "text",
    title: "Один сценарий предметов работает с разными владельцами.",
    body: "Страница добычи показывает инвентарь источника и инвентарь игрока. Предметы можно переносить между владельцами, использовать, экипировать и разделять на части. Если после операции в инвентаре не хватает места, остаток попадает в мир как предмет на земле.\n\nТорговля использует тот же способ работы с предметом. Участники собирают предметы в списки продажи, после чего система проверяет цену и деньги каждого владельца. MerchantStockGenerator формирует начальный ассортимент торговца по правилам категорий и диапазонам количества. Интерфейс показывает результат операции после подтверждения модели.",
  },
  {
    id: "rpg-chapter-ui",
    tocTitle: "Интерфейс и управление",
    kind: "chapter",
    title: "Интерфейс и управление",
    outline: [
      {
        label: "Страницы интерфейса",
        description:
          "Игровой режим открывает подходящий экран и задаёт доступные действия.",
      },
      {
        label: "HUD",
        description:
          "Состояние персонажа остаётся видимым во время игры и диалога.",
      },
      {
        label: "Карта и журнал",
        description:
          "Текущая цель задания отображается в пространстве и в списке прохождения.",
      },
      {
        label: "Настройки",
        description:
          "Параметры звука и пользовательские назначения клавиш сохраняются между запусками.",
      },
    ],
    body: "Интерфейс показывает состояние игрока и мира в контексте текущего действия. Страницы создаются при смене режима игры и получают только те данные, которые нужны их сценарию.",
  },
  {
    id: "rpg-ui",
    label: "ИНТЕРФЕЙС",
    tocTitle: "Постраничная система интерфейса",
    kind: "text",
    title: "Страница интерфейса существует в пределах своего сценария.",
    body: "PagesController создаёт страницу после смены GameMode. Страница получает необходимый контекст, строит представление и подписывается на данные модели. При следующем переходе она освобождает временные объекты и подписки.\n\nИнвентарь показывает данные владельца предметов. Карта преобразует положение мира в навигационный слой. Журнал читает QuestProgress. HUD получает характеристики игрока. Каждое представление получает данные из своей системы и показывает их в пределах активного режима.",
  },
  {
    id: "rpg-hud",
    label: "HUD",
    tocTitle: "HUD и непрерывность состояния персонажа",
    kind: "text",
    title: "HUD сохраняет связь между действием игрока и состоянием персонажа.",
    code: `public void Attach(StatsHolder holder, State initialState = null)
{
    Detach();
    statsHolder = holder;
    if (statsHolder == null)
    {
        return;
    }

    InitializeVisibilityState();
    hpFiller.Current.Subscribe(_ => RefreshHpFill()).AddTo(holderDisposables);
    playerInventory.Changed.Subscribe(_ => RefreshInventory()).AddTo(holderDisposables);
}`,
    body: "PlayerStatsHud подписывается на здоровье, выносливость, воду, еду, вес и быстрые слоты. Изменение здоровья запускает отдельную анимацию полученного урона или восстановления. Критические значения управляют видимостью индикаторов и экранной обратной связью.\n\nHUD появляется там, где игроку нужно видеть состояние персонажа во время действия. Переход между игрой и диалогом передаёт его визуальное состояние через PlayerStatsHudContinuity. Полосы, быстрые слоты и индикатор веса продолжают работать как одно представление состояния игрока.",
  },
  {
    id: "rpg-map-journal",
    label: "КАРТА И ЖУРНАЛ",
    tocTitle: "Карта, журнал и уведомления заданий",
    kind: "text",
    title: "Карта и журнал используют одну цель прохождения.",
    body: "MapPage показывает положение игрока на карте, поддерживает масштабирование и перемещение полотна. QuestMapTargetRegistry сопоставляет текущий этап задания с точкой мира. Маркер цели открывает карточку с названием задания, текущей целью и её описанием при наведении.\n\nQuestPage строит список активных заданий из QuestProgress. QuestShortInfo показывает текущую цель во время игры. QuestNotificationService сообщает о получении, обновлении, завершении или провале задания. Карта, журнал и уведомления читают одно состояние и показывают его в подходящем для сценария виде.",
  },
  {
    id: "rpg-settings-input",
    label: "МЕНЮ И УПРАВЛЕНИЕ",
    tocTitle: "Меню, настройки и переназначение клавиш",
    kind: "text",
    title: "Настройки управления остаются частью игровой сессии.",
    body: "MenuUI, PauseMenu и SettingsMenuUI открываются через PagesController и правила GameMode. Страница настроек получает параметры звука и пользовательские назначения клавиш. Смена режима управления обновляет курсор, время и доступные действия персонажа.\n\nInputRebinder запускает интерактивное переназначение действия, проверяет совпадающие назначения и сохраняет override-ы Input System. При следующем запуске InputBindingOverridesBootstrap восстанавливает выбор игрока. BindingShower выводит локализованное название назначенной клавиши в интерфейсе.",
  },
  {
    id: "rpg-chapter-story",
    tocTitle: "NPC и сценарные системы",
    kind: "chapter",
    title: "NPC и сценарные системы",
    outline: [
      {
        label: "Поведение NPC",
        description:
          "Восприятие, навигация и бой передают факты конечному автомату персонажа.",
      },
      {
        label: "Диалоги",
        description:
          "Граф разговора связывает реплики с условиями и последствиями выбора.",
      },
      {
        label: "Задания",
        description:
          "Прогресс хранит этап прохождения, затем передаёт цель журналу и карте.",
      },
      {
        label: "Фракции",
        description:
          "Изменяемые отношения используются NPC, диалогами и событиями мира.",
      },
    ],
    body: "Сценарное состояние связывает поведение объектов с прохождением игрока. Авторские графы задают доступные варианты, runtime-контексты хранят результат конкретной игры.",
  },
  {
    id: "rpg-npc",
    label: "ПОВЕДЕНИЕ NPC",
    tocTitle: "NPC, восприятие и конечные автоматы",
    kind: "gallery",
    title: "Каждый NPC исполняет граф поведения в собственном контексте.",
    body: "StateMachineGraph хранит состояния, переходы, условия и поведения как авторские данные. StateMachineRunner создаёт по этому графу runtime-машину конкретного NPC. В её контексте находятся текущая цель, таймеры, данные восприятия и состояние боя.\n\nNpcVision проверяет дистанцию, угол обзора и прямую видимость. NpcCombatService сопоставляет цель с отношениями фракций, выбирает боевую тактику и передаёт маршрут NpcNavMeshController. Граф ведёт персонажа через поиск, сближение, обход, атаку, поиск последней известной позиции, возвращение домой или бегство. Отдельный сенсор находит предметы; планировщик инвентаря оценивает их, после чего NPC может подобрать вещь, экипировать оружие или оставить добычу после смерти.",
    media: [
      {
        src: "/content/projects/rpg/npc-combat-01.png",
        alt: "NPC в боевой ситуации RPG",
        caption:
          "Контекст NPC объединяет восприятие, навигацию, бой и поведение.",
      },
      {
        src: "/content/tools/fsm-editor/state-machine-editor.jpg",
        alt: "Редактор конечного автомата в Unity",
        caption: "Граф задаёт структуру поведения персонажа.",
      },
    ],
  },
  {
    id: "rpg-npc-items",
    label: "ПРЕДМЕТНЫЕ РЕШЕНИЯ NPC",
    tocTitle: "Поиск, оценка и подбор предметов NPC",
    kind: "code",
    title: "NPC подбирает предмет через отдельный план операции.",
    body: "Сенсор предметов не изменяет инвентарь напрямую. Он передаёт найденный объект в NpcItemInterest, а NpcInventoryPlanner строит план: взять предмет в рюкзак, занять подходящий слот или освободить место. NpcItemPickupService исполняет план и возвращает прежние предметы в мир, если операция не завершилась.\n\nЭтот порядок сохраняет границы между восприятием, выбором и изменением инвентаря. Граф поведения запускает подбор как действие состояния, не принимая на себя правила размещения предметов.",
    code: `public bool TryPickup(NpcItemPickupPlan plan)
{
    if (plan?.ItemHolder == null || plan.ItemStack?.ItemConfig == null || inventory == null)
    {
        return false;
    }

    var removedStacks = RemovePlannedDrops(plan.DropSources);
    var originalCount = plan.ItemStack.Count;
    var remainder = plan.UseSlot
        ? TryPlaceInSlot(plan)
        : TryAddToInventory(plan.ItemStack);

    if (remainder != null && remainder.Count >= originalCount)
    {
        RestoreOrDrop(removedStacks);
        return false;
    }

    return true;
}`,
    media: [
      {
        alt: "Нужен GIF: NPC замечает предмет, подходит к нему, подбирает его и меняет экипировку или переносит находку в инвентарь. Желательно показать один завершённый цикл без монтажных склеек.",
        caption: "ТЗ для GIF: предметное восприятие и подбор NPC.",
      },
    ],
  },
  {
    id: "rpg-story",
    label: "ДИАЛОГИ И КВЕСТЫ",
    tocTitle: "Диалоги, квесты и состояние прохождения",
    kind: "gallery",
    title: "Граф хранит структуру сценария, прогресс хранит прохождение.",
    body: "DialogGraph описывает фразы, ответы, условия и последствия выбора. QuestGraph описывает этапы задания, переходы, требования и цели. Эти Unity-ассеты содержат исходную структуру сценария.\n\nDialogueContext хранит состояние одного разговора. QuestProgress хранит текущий этап и историю задания. Журнал, карта, уведомления и сохранение обращаются к одному прогрессу. Игровая ситуация получает согласованное представление во всех системах.",
    media: [
      {
        src: "/content/tools/dialogue-editor/dialogue-quest-demo.jpg",
        alt: "Диалог и цель задания в RPG",
        caption:
          "Диалог изменяет сценарное состояние. Квест передаёт текущую цель журналу и карте.",
      },
      {
        src: "/content/tools/quest-editor/quest-runtime-flow.svg",
        alt: "Схема выполнения квеста в RPG",
        caption:
          "Граф хранит структуру. Прогресс описывает конкретное прохождение.",
      },
    ],
  },
  {
    id: "rpg-quest-auto",
    label: "ПРОГРЕСС ЗАДАНИЙ",
    tocTitle: "Автоматические переходы заданий",
    kind: "code",
    title: "Задание проверяет авторские переходы после изменения состояния.",
    body: "QuestAutomaticTransitionService подписывается на изменения инвентаря и состояния задания. После события он передаёт проверку QuestController, который остаётся единственным владельцем прогресса. Так получение нужного предмета или выполнение другого условия переводит задание на следующий этап без отдельной логики в каждом предмете.\n\nПроверка защищена от повторного входа. Одно изменение состояния не запускает параллельные цепочки переходов и сохраняет порядок исполнения сценария.",
    code: `public void Start()
{
    inventorySubscription = playerInventory.Changed
        .Subscribe(_ => EvaluateTransitions());
    questController.Changed += OnQuestChanged;
    EvaluateTransitions();
}

private void EvaluateTransitions()
{
    if (isEvaluating)
    {
        return;
    }

    isEvaluating = true;
    try
    {
        questController.TryExecuteAvailableAutomaticTransition();
    }
    finally
    {
        isEvaluating = false;
    }
}`,
    media: [
      {
        alt: "Нужно видео: игрок получает предмет, после чего в журнале автоматически меняется текущая цель, а на карте появляется или обновляется метка задания.",
        caption:
          "ТЗ для видео: связь инвентаря, квестового перехода, журнала и карты.",
      },
    ],
  },
  {
    id: "rpg-dialogue-rules",
    label: "ПРАВИЛА СЦЕНАРИЯ",
    tocTitle: "Условия и последствия выбора",
    kind: "text",
    title: "Выбор игрока проходит проверку до применения последствий.",
    body: "Диалоговая система формирует ответы из состояния игрока и мира: предметов, денег, этапов заданий, флагов и отношений фракций. Интерфейс показывает ответы, условия которых выполнены.\n\nПосле подтверждения система повторно проверяет условия и применяет последствия отдельным шагом. Этот шаг меняет предметы, деньги, этап задания, флаги или текущую фразу. Проверка доступности сохраняет роль чтения состояния. Применение выбора сохраняет роль изменения состояния.",
  },
  {
    id: "rpg-dialogue-runtime",
    label: "СОСТОЯНИЕ ДИАЛОГА",
    tocTitle: "Временные флаги и принудительные диалоги",
    kind: "code",
    title:
      "Диалог хранит временные факты отдельно от сохранённого прохождения.",
    body: "DialogueRuntimeFlagRegistry хранит флаги только в пределах игровой сессии. Они открывают или закрывают реплики для текущей цепочки событий и не становятся самостоятельной системой сохранений. Постоянные последствия продолжают храниться у предметов, денег, заданий и отношений фракций.\n\nNPC может использовать обычную доступность диалога или принудительный запуск. Это позволяет сценарию начать нужный разговор в ответ на игровое событие, сохранив проверку его условий в одном месте.",
    code: `public sealed class DialogueRuntimeFlagRegistry
{
    private readonly HashSet<DialogueRuntimeFlag> activeFlags = new();

    public bool IsActive(DialogueRuntimeFlag flag) =>
        flag != null && activeFlags.Contains(flag);

    public void Activate(DialogueRuntimeFlag flag)
    {
        if (flag != null)
        {
            activeFlags.Add(flag);
        }
    }

    public void Clear() => activeFlags.Clear();
}`,
  },
  {
    id: "rpg-factions",
    label: "ОТНОШЕНИЯ МИРА",
    tocTitle: "Фракции и отношения",
    kind: "text",
    title: "Фракции отделяют исходные правила мира от решений игрока.",
    code: `public bool TryChangeRelation(FactionConfig leftFaction, FactionConfig rightFaction, int amount)
{
    if (amount == 0 || leftFaction == null || rightFaction == null || leftFaction == rightFaction)
    {
        return false;
    }

    var pair = new FactionPair(leftFaction, rightFaction);
    relations[pair] = GetRelation(leftFaction, rightFaction) + amount;
    Changed?.Invoke();
    return true;
}`,
    body: "FactionRelationsConfig задаёт стартовые отношения между фракциями. В начале сессии RuntimeFactionRelations создаёт изменяемую таблицу отношений. Её используют NPC, диалоги и сценарные события.\n\nИзменение дружелюбия записывается в состояние текущего прохождения. При загрузке игра создаёт таблицу из конфигурации и применяет сохранённые изменения. Исходные данные остаются пригодны для нового прохождения.",
  },
  {
    id: "rpg-chapter-world",
    tocTitle: "Мир, локации и сохранения",
    kind: "chapter",
    title: "Мир, локации и сохранения",
    outline: [
      {
        label: "Сохранение",
        description:
          "Владельцы систем записывают и восстанавливают данные конкретного прохождения.",
      },
      {
        label: "Локации",
        description:
          "Переход хранит точку входа и создаёт контекст следующей части мира.",
      },
      {
        label: "Предметы мира",
        description:
          "Выброшенные вещи остаются в локации до подбора или завершения срока жизни.",
      },
      {
        label: "Ресурсы",
        description: "Растения сохраняют стадию роста и результат сбора.",
      },
    ],
    body: "Сохранение фиксирует изменения игрока и объектов мира. При загрузке каждая система восстанавливает собственные данные в контексте нужной локации.",
  },
  {
    id: "rpg-save",
    label: "СОХРАНЕНИЕ",
    tocTitle: "Сохранение и восстановление состояния",
    kind: "code",
    title: "Сохранение возвращает данные через владельцев доменных систем.",
    body: "GameSaveService хранит формат и версию файла. Координаторы систем собирают снимки игрока, инвентаря, заданий, фракций, NPC, предметов мира и растений. Каждый координатор знает состав своих данных и порядок их восстановления.\n\nЗагрузка начинается после завершения общего boot-процесса. Сначала GameWorldBootstrapper получает сохранённый контекст перехода и позу игрока. Затем создаётся мир текущей локации, владельцы доменных данных восстанавливают своё состояние и публикуют StateRestored. Интерфейс получает уже согласованные данные, поэтому загрузка не выглядит как последовательность новых игровых событий.",
    code: `public async void Start()
{
    await bootCompletion.WaitAsync();
    UnityEngine.Pose? savedPlayerPose = null;

    await saveController.Ready;
    saveController.RestoreLocationTransition(transitionContext);
    savedPlayerPose = saveController.TryGetSavedPlayerPose(out UnityEngine.Pose pose)
        ? pose
        : null;

    scope.InitializeWorld(locationTransitions, audioService, savedPlayerPose);
    worldInitialized.TrySetResult(true);
}`,
    media: [
      {
        alt: "Нужна схема: Bootloader → чтение сохранения → контекст перехода и поза игрока → создание локации → восстановление систем → StateRestored → UI. У каждого этапа должна быть короткая подпись.",
        caption: "ТЗ для схемы: порядок запуска сессии из сохранения.",
      },
    ],
  },
  {
    id: "rpg-world-items",
    label: "ПРЕДМЕТЫ В МИРЕ",
    tocTitle: "Выброшенные предметы и постоянный мир",
    kind: "text",
    title: "Предмет на земле остаётся частью состояния локации.",
    code: `public void RegisterRuntimeDrop(ItemHolder itemHolder)
{
    if (!isReady || isDisposed || itemHolder == null || !itemHolder.UsesSave)
    {
        return;
    }

    string locationId = locationTransitions.CurrentLocation?.Id;
    var tracked = new TrackedWorldItem(itemHolder, locationId, DefaultLifetimeSeconds);
    activeItems[itemHolder.PersistentId] = tracked;
}`,
    body: "CharacterWorldItemDropper создаёт предмет в мире, когда игрок или NPC освобождает его из инвентаря. DroppedItemPersistenceService получает запись о новом объекте, связывает её с текущей локацией и добавляет в снимок сохранения.\n\nПри следующей загрузке сервис сопоставляет записи с authored-объектами сцены или создаёт предмет из конфигурации. Срок жизни выброшенного предмета уменьшается во время игры. Собранные и исчезнувшие объекты удаляются из сохранённого списка. Состояние мира сохраняет последствия действий игрока между сессиями.",
  },
  {
    id: "rpg-content",
    label: "КОНТЕНТ И АВТОРИНГ",
    tocTitle: "Графовые редакторы и сценарный контент",
    kind: "gallery",
    title: "Графовые редакторы показывают структуру сценария до запуска игры.",
    body: "Редакторы диалогов, квестов и конечных автоматов используют общее полотно для работы с узлами и связями. Предметная модель определяет содержимое узла, смысл перехода и правила проверки.\n\nРедактор сохраняет результат как набор ScriptableObject-ассетов. Runtime читает эти данные для разговора, задания или поведения NPC. Проверки структуры помогают обнаружить изолированные узлы, недостижимые ветви и ошибки ссылок во время авторинга.",
    details: [
      {
        title: "Диалоги",
        body: "DialogEditorWindow записывает фразы, ответы, условия и связи в DialogGraph. DialogueContainer читает граф во время разговора, а DialogueAnswerExecutionService применяет последствия подтверждённой реплики.",
      },
      {
        title: "Задания",
        body: "QuestEditorWindow формирует этапы, переходы и данные узлов в QuestGraph. QuestController хранит текущий прогресс, а QuestAutomaticTransitionService перепроверяет авторские автоматические переходы после изменения состояния.",
      },
      {
        title: "Поведение",
        body: "StateMachineEditorWindow сохраняет состояния, условия, поведения и переходы в StateMachineGraph. StateMachineRunner создаёт runtime-машину для конкретного NPC и исполняет этот граф в его контексте.",
      },
    ],
    media: [
      {
        src: "/content/tools/dialogue-editor/dialogue-node-topic.jpg",
        alt: "Узел темы в редакторе диалогов Unity",
        caption: "Диалоговый граф хранит структуру разговора и его условия.",
      },
      {
        src: "/content/tools/quest-editor/quest-editor-graph.jpg",
        alt: "Граф квеста в Unity Editor",
        caption:
          "Квестовый граф показывает этапы и переходы как сценарные данные.",
      },
    ],
  },
  {
    id: "rpg-world",
    label: "ЛОКАЦИИ И МИР",
    tocTitle: "Локации и сохраняемое состояние мира",
    kind: "gallery",
    title: "Локация создаёт собственный контекст для объектов и сценариев.",
    body: "SceneLoadingService подготавливает цель перехода и открывает loading-сцену. LocationTransitionService передаёт контекст входа. Координатор сохранений добавляет сохранённую позу игрока. Целевая локация получает эти данные при создании игровой сессии.\n\nРастения, предметы мира и локальные сценарии хранят состояние в пределах своей локации. Системы сохранения фиксируют его отдельно от состояния игрока. Следующая загрузка восстанавливает мир в соответствии с прохождением.",
    media: [
      {
        src: "/content/projects/rpg/rpg-city-approach.png",
        alt: "Подход к городу в RPG",
        caption:
          "Локация собирает переходы, объекты мира и сохранённое положение игрока.",
      },
    ],
  },
  {
    id: "rpg-location-transition",
    label: "ПЕРЕХОДЫ ЛОКАЦИЙ",
    tocTitle: "Точки входа и переходы между локациями",
    kind: "code",
    title:
      "Переход передаёт следующей локации точку входа, а не только её имя.",
    body: "Система проверяет источник перехода, целевую локацию и доступность её входной точки. После подтверждения она сохраняет идентификаторы назначения в LocationTransitionContext. При создании новой игровой сессии локация получает контекст, включает нужные объекты, строит навигацию и размещает игрока у выбранного входа.\n\nСохранённая поза игрока участвует в том же процессе загрузки. Поэтому обычный переход и восстановление сохранения используют общий жизненный цикл мира.",
    code: `public bool TryRequestTransition(string sourceLocationId, string sourceTransitionId)
{
    var sourceLocation = selector.FindLocation(sourceLocationId);
    var transition = sourceLocation?.FindTransition(sourceTransitionId);

    if (transition == null || !transition.CanExit)
    {
        return false;
    }

    var destinationLocation = selector.FindLocation(transition.TargetLocationId);
    var destination = destinationLocation?.FindTransition(transition.TargetTransitionId);
    if (destination == null || !destination.CanEnter)
    {
        return false;
    }

    TransitionRequested?.Invoke(new VillageLocationTransitionRequest(
        sourceLocation.Id,
        transition.Id,
        transition.TargetLocationId,
        transition.TargetTransitionId));
    return true;
}`,
    media: [
      {
        alt: "Нужно видео: игрок выходит из одной части поселения, подтверждает переход, загружается следующая часть и появляется у заданной точки входа. В начале и конце записи должен быть виден персонаж.",
        caption: "ТЗ для видео: переход между локациями и точка входа.",
      },
    ],
  },
  {
    id: "rpg-plants",
    label: "РАСТЕНИЯ И РЕСУРСЫ",
    tocTitle: "Рост растений и сбор ресурсов",
    kind: "text",
    title: "Растения проходят стадии роста как объекты игрового мира.",
    code: `public void Tick()
{
    if (IsPlanted.Value)
    {
        return;
    }

    timer.Value += Time.deltaTime;
    if (timer.Value >= stageTime)
    {
        timer.Value = 0f;
        NextStage();
    }
}`,
    body: "PlantGrowerByStages хранит стадию и время роста конкретного растения. Система накапливает игровое время, заменяет представление на следующую стадию и сообщает о готовности ресурса к сбору. Взаимодействие с растением передаёт урожай в инвентарь игрока.\n\nPlantWorldPersistenceService сохраняет стадию растения и восстанавливает её при загрузке. Поля, деревья и плоды продолжают свой жизненный цикл вместе с локацией. Сбор ресурса влияет на состояние мира и остаётся видимым в следующей сессии.",
  },
  {
    id: "rpg-chapter-content",
    tocTitle: "Контентные инструменты и сервисы",
    kind: "chapter",
    title: "Контентные инструменты и сервисы",
    outline: [
      {
        label: "Графовые редакторы",
        description:
          "Диалоги, задания и FSM создаются как проверяемые авторские данные.",
      },
      {
        label: "Сервисы сессии",
        description:
          "Локализация, аудио, обучение и телеметрия получают готовые игровые факты.",
      },
      {
        label: "Смерть персонажа",
        description:
          "Система завершает активное действие, переводит сессию в режим смерти и открывает соответствующий экран.",
      },
    ],
    body: "Редакторы и сервисы поддерживают создание, загрузку и сопровождение игрового контента. Они работают с данными проекта и не изменяют правила предметных систем напрямую.",
  },
  {
    id: "rpg-services",
    label: "СЕРВИСЫ СЕССИИ",
    tocTitle: "Локализация, аудио, обучение и телеметрия",
    kind: "text",
    title: "Аудио, локализация, обучение и телеметрия сопровождают игру.",
    body: "Сервисы сессии получают готовые игровые факты и работают в пределах собственной задачи. Они не владеют правилами боя, диалога, инвентаря или прогресса.",
    details: [
      {
        title: "Локализация и запуск",
        body: "Bootloader получает данные платформы, выбирает локаль и подготавливает сохранение до создания игровой сессии. Диалоги, журнал, предметы и фракции получают локализованные записи через общий кэш.",
      },
      {
        title: "Аудио",
        body: "AudioService разделяет источники UI, звуков мира и шагов на отдельные ограниченные пулы. Система выбирает покрытие для шагов, учитывает дистанцию до слушателя и хранит уровни громкости по категориям. AmbientController независимо планирует фоновые дорожки активной игровой сцены.",
      },
      {
        title: "Обучение",
        body: "TrainingSessionController собирает временную учебную ситуацию из диалогового события, цели задания, экипировки и подсказок. После завершения она возвращает игрока в обычный контекст сессии.",
      },
      {
        title: "Телеметрия",
        body: "Трекеры фиксируют подтверждённые события заданий, посещение локаций и смерть персонажа. Запись начинается после восстановления сохранения, поэтому загрузка старого прохождения не создаёт ложные игровые события.",
      },
    ],
  },
  {
    id: "rpg-death-platform",
    label: "СМЕРТЬ ПЕРСОНАЖА",
    tocTitle: "Смерть персонажа",
    kind: "text",
    title: "Смерть переводит сессию в отдельное игровое состояние.",
    body: "PlayerDeathController реагирует на нулевое HP. Он завершает управление персонажем, включает физическое представление тела, публикует PlayerDiedMessage и переводит сессию в GameMode.Death.\n\nРежим смерти задаёт доступные действия и состояние интерфейса. Движение, анимация и экипированное оружие завершают активное состояние вместе с персонажем.",
  },
];

export const technologies: Technology[] = [
  {
    id: "csharp",
    name: "C#",
    group: "Языки и движки",
    purpose: "Основной язык разработки игровых систем.",
    use: "Геймплей, UI, инструменты и интеграции.",
    projectSlugs: ["rpg"],
  },
  {
    id: "unity",
    name: "Unity",
    group: "Языки и движки",
    purpose: "Игровой движок и среда разработки.",
    use: "Сцены, игровые механики, сборки и редакторские инструменты.",
    projectSlugs: ["rpg"],
  },
  {
    id: "vcontainer",
    name: "VContainer",
    group: "Архитектура и DI",
    purpose: "Контейнер зависимостей.",
    use: "Lifetime Scope и регистрация сервисов для игровых подсистем, UI и сцен.",
  },
  {
    id: "messagepipe",
    name: "MessagePipe",
    group: "Асинхронность и события",
    purpose: "Шина сообщений для слабосвязанного взаимодействия.",
    use: "События боевой системы, ввода, UI, диалогов и игровых сценариев.",
  },
  {
    id: "unitask",
    name: "UniTask",
    group: "Асинхронность и события",
    purpose: "Асинхронные операции в Unity.",
    use: "Асинхронная загрузка и инициализация локализации.",
  },
  {
    id: "unirx",
    name: "UniRx",
    group: "Асинхронность и события",
    purpose: "Реактивное программирование.",
    use: "Реактивные свойства и подписки для инвентаря, характеристик, UI и взаимодействий.",
  },
  {
    id: "uitoolkit",
    name: "UI Toolkit",
    group: "Интерфейсы и инструменты",
    purpose: "Создание интерфейсов и Editor UI.",
    use: "Интерфейсы меню, HUD и собственных инструментов.",
    toolSlugs: ["dialog-editor", "fsm-editor"],
  },
  {
    id: "input",
    name: "Unity Input System",
    group: "Интерфейсы и инструменты",
    purpose: "Система ввода.",
    use: "Управление персонажем, UI и переназначение клавиш.",
  },
  {
    id: "dotween",
    name: "DOTween",
    group: "Интерфейсы и инструменты",
    purpose: "Анимация UI и игровых объектов.",
    use: "Анимации растений, сундуков, полей и карты.",
  },
  {
    id: "addressables",
    name: "Addressables",
    group: "Ресурсы и рендеринг",
    purpose: "Управление ресурсами.",
    use: "Загрузка конфигураций предметов и игрового контента.",
  },
  {
    id: "localization",
    name: "Unity Localization",
    group: "Ресурсы и рендеринг",
    purpose: "Локализация игрового текста и данных.",
    use: "Локализованные реплики, квесты, UI, конфигурации и редакторские графы.",
  },
  {
    id: "navigation",
    name: "AI Navigation / NavMesh",
    group: "Ресурсы и рендеринг",
    purpose: "Навигация NPC.",
    use: "Перемещение, поиск цели и поведение противников.",
  },
  {
    id: "urp",
    name: "Unity URP",
    group: "Ресурсы и рендеринг",
    purpose: "Рендеринг и работа с шейдерами.",
    use: "Работа со сценами и шейдерами URP.",
  },
  {
    id: "scriptable",
    name: "ScriptableObjects",
    group: "Инструменты разработки",
    purpose: "Конфигурационные данные игровых систем.",
    use: "Предметы, рецепты и настройки контента.",
    projectSlugs: ["rpg"],
    toolSlugs: ["quest-editor"],
  },
  {
    id: "naughtyattributes",
    name: "NaughtyAttributes",
    group: "Инструменты разработки",
    purpose: "Атрибуты для Unity Inspector.",
    use: "Удобная настройка игровых конфигураций и инспекторов.",
  },
  {
    id: "git",
    name: "Git",
    group: "Инструменты разработки",
    purpose: "Контроль версий.",
    use: "Рабочий процесс разработки и командное взаимодействие.",
  },
];

export const architecturePatterns = [
  {
    group: "АРХИТЕКТУРА ИГРЫ",
    title: "Entity–Component–System (ECS)",
    text: "Entity–Component–System разделяет сущности, их данные-компоненты и системы, которые обрабатывают наборы компонентов.\n\nИспользую ECS как основу игровой архитектуры: сущности собираю из компонентов, а обработку выношу в независимые системы с одной зоной ответственности.",
  },
  {
    group: "СВЯЗИ СИСТЕМ",
    title: "Dependency Injection",
    text: "Dependency Injection — паттерн, при котором объект получает необходимые зависимости извне.\n\nИспользую конструкторную инъекцию и контейнеры, чтобы задавать время жизни сервисов в границах контекста.",
  },
  {
    group: "СВЯЗИ СИСТЕМ",
    title: "Singleton",
    text: "Singleton гарантирует единственный экземпляр объекта и даёт общую точку доступа к нему.\n\nИспользую его для корневого контекста, который живёт на протяжении запуска приложения.",
  },
  {
    group: "СВЯЗИ СИСТЕМ",
    title: "Observer",
    text: "Observer связывает источник изменений с подписчиками, которые получают уведомление о новом состоянии.\n\nИспользую подписки для обновления представлений и реакции на изменения игрового состояния.",
  },
  {
    group: "СВЯЗИ СИСТЕМ",
    title: "Publish–Subscribe",
    text: "Publish–Subscribe передаёт сообщения через канал, отделяя издателя от получателей.\n\nИспользую шину сообщений для ввода, взаимодействий, урона и смены режимов.",
  },
  {
    group: "СВЯЗИ СИСТЕМ",
    title: "Event Aggregator",
    text: "Event Aggregator собирает события многих частей приложения в единой точке маршрутизации.\n\nИспользую его, когда одно событие должно быть доступно нескольким независимым системам.",
  },
  {
    group: "СВЯЗИ СИСТЕМ",
    title: "Command",
    text: "Command представляет действие как самостоятельный объект или сообщение.\n\nПреобразую пользовательский ввод в команды и передаю их исполнителю с учётом текущего состояния.",
  },
  {
    group: "СОСТОЯНИЯ И ПРАВИЛА",
    title: "Finite State Machine",
    text: "Finite State Machine описывает поведение набором состояний и переходов между ними.\n\nИспользую состояния, условия перехода и правила входа с выходом для режимов и поведения сущностей.",
  },
  {
    group: "СОСТОЯНИЯ И ПРАВИЛА",
    title: "Strategy",
    text: "Strategy выносит взаимозаменяемый алгоритм за общий интерфейс.\n\nИспользую стратегии для правил, которые могут меняться независимо от системы, вызывающей их.",
  },
  {
    group: "СОСТОЯНИЯ И ПРАВИЛА",
    title: "Specification",
    text: "Specification представляет отдельное правило как объект и позволяет собирать правила в логические комбинации.\n\nИспользую спецификации для проверки игровых условий, объединяя их через обязательные и альтернативные требования.",
  },
  {
    group: "СОСТОЯНИЯ И ПРАВИЛА",
    title: "Template Method",
    text: "Template Method задаёт общий алгоритм в базовом классе и оставляет отдельные шаги производным классам.\n\nИспользую его для повторяющихся жизненных циклов, где конкретная реализация определяет только точки расширения.",
  },
  {
    group: "СОСТОЯНИЯ И ПРАВИЛА",
    title: "Blackboard",
    text: "Blackboard хранит общее рабочее состояние, доступное нескольким частям поведения.\n\nИспользую общий контекст для передачи временных данных между условиями, действиями и состояниями.",
  },
  {
    group: "СОСТОЯНИЯ И ПРАВИЛА",
    title: "Service Locator",
    text: "Service Locator предоставляет объектам доступ к сервисам через единый каталог.\n\nИспользую локатор внутри изолированного контекста поведения, где состав доступных сервисов заранее определён.",
  },
  {
    group: "КОНТЕНТ И ДАННЫЕ",
    title: "Data-Driven Design",
    text: "Data-Driven Design переносит изменяемые правила и параметры из кода в данные.\n\nИспользую ассеты конфигурации для контента, баланса, интерфейса и сценарных графов.",
  },
  {
    group: "КОНТЕНТ И ДАННЫЕ",
    title: "Flyweight",
    text: "Flyweight выделяет разделяемые данные, чтобы одинаковая информация не хранилась в каждом экземпляре объекта.\n\nИспользую общие ассеты для конфигураций и поведения, а изменяемые данные прохождения храню отдельно для каждого экземпляра.",
  },
  {
    group: "КОНТЕНТ И ДАННЫЕ",
    title: "Interpreter",
    text: "Interpreter исполняет язык правил, представленный структурой данных.\n\nИспользую интерпретацию условий для определения доступности переходов и последствий действий.",
  },
  {
    group: "КОНТЕНТ И ДАННЫЕ",
    title: "Registry",
    text: "Registry хранит объекты по ключу и предоставляет быстрый доступ к ним.\n\nИспользую реестры для активных объектов мира, которые нужны разным системам во время сессии.",
  },
  {
    group: "КОНТЕНТ И ДАННЫЕ",
    title: "Prototype",
    text: "Prototype создаёт новый объект копированием подготовленного образца.\n\nИспользую префабы как образцы для создания игровых объектов и элементов интерфейса с готовой структурой.",
  },
  {
    group: "КОНТЕНТ И ДАННЫЕ",
    title: "Builder",
    text: "Builder собирает сложный объект по шагам, отделяя процесс создания от результата.\n\nИспользую его в редакторских утилитах для последовательной сборки составных интерфейсов.",
  },
  {
    group: "СОХРАНЕНИЯ И ИНТЕГРАЦИИ",
    title: "Memento",
    text: "Memento сохраняет снимок состояния, который можно восстановить позднее.\n\nИспользую снимки для фиксации прогресса между игровыми сессиями и восстановления прохождения.",
  },
  {
    group: "СОХРАНЕНИЯ И ИНТЕГРАЦИИ",
    title: "Data Mapper",
    text: "Data Mapper преобразует данные между объектной моделью и внешним форматом хранения.\n\nИспользую отдельный слой преобразования, чтобы формат сохранения не влиял на игровую модель.",
  },
  {
    group: "СОХРАНЕНИЯ И ИНТЕГРАЦИИ",
    title: "Facade",
    text: "Facade даёт простой интерфейс к набору связанных подсистем.\n\nИспользую фасад как единую точку для операций, которые требуют согласованной работы нескольких сервисов.",
  },
  {
    group: "СОХРАНЕНИЯ И ИНТЕГРАЦИИ",
    title: "Adapter",
    text: "Adapter приводит один интерфейс к форме, ожидаемой другой системой.\n\nИспользую адаптеры на границах платформенных интеграций и общих инструментальных компонентов.",
  },
  {
    group: "ИНСТРУМЕНТЫ",
    title: "Model–View–Presenter",
    text: "Model–View–Presenter разделяет данные, отображение и логику представления.\n\nИспользую отдельные роли для чтения данных, отрисовки и обработки действий, чтобы интерфейсный компонент не зависел от структуры предметной области.",
  },
  {
    group: "ПРОИЗВОДИТЕЛЬНОСТЬ",
    title: "Object Pool",
    text: "Object Pool хранит набор готовых объектов для повторного использования.\n\nИспользую пул для часто создаваемых объектов, когда важны предсказуемые расходы памяти и времени.",
  },
];
export const resultCards = [
  {
    title: "Полный цикл разработки",
    text: "Проектирование, архитектура, программирование, тестирование, сборка, публикация и поддержка.",
  },
  {
    title: "Опубликованные проекты",
    text: "[добавить количество игр, площадки публикации и подтверждённые данные]",
  },
  {
    title: "Аудитория и аналитика",
    text: "[добавить дневную аудиторию, удержание и проверенные изменения метрик]",
  },
  {
    title: "Оптимизация и развитие",
    text: "WebGL, улучшение производительности и итеративное развитие игровых систем.",
  },
];

export const competencies: Competency[] = [
  {
    group: "Архитектура",
    title: "Игровая архитектура",
    text: "Разделение игровых систем, UI, данных и инфраструктуры.",
  },
  {
    group: "Архитектура",
    title: "DI и сборка систем",
    text: "Регистрация зависимостей, constructor injection, EntryPoint и освобождение ресурсов.",
  },
  {
    group: "Архитектура",
    title: "Событийные системы",
    text: "Типизированные сообщения между вводом, геймплеем, UI и сценариями.",
  },
  {
    group: "AI и геймплей",
    title: "Конечные автоматы",
    text: "Runtime FSM, графы ScriptableObject, условия, поведения и редактор.",
  },
  {
    group: "AI и геймплей",
    title: "NPC AI и навигация",
    text: "Восприятие, выбор целей, принятие решений, NavMesh и боевые позиции.",
  },
  {
    group: "AI и геймплей",
    title: "Боевая система",
    text: "Атаки, окна урона, хитбоксы, расчёт попаданий и боевые реакции.",
  },
  {
    group: "Геймплейные системы",
    title: "Системы взаимодействия",
    text: "Объекты мира, проверки доступности, подбор, контейнеры и контекстные действия.",
  },
  {
    group: "Геймплейные системы",
    title: "Инвентарь и экипировка",
    text: "Модели хранения, операции с предметами, экипировка и инвентарный UI.",
  },
  {
    group: "Геймплейные системы",
    title: "Прогрессия игрока",
    text: "Характеристики, предметы, таланты и улучшения, расширяющие возможности игрока.",
  },
  {
    group: "Геймплейные системы",
    title: "Диалоги и квесты",
    text: "Графы сценариев, условия, последствия выбора и состояние заданий.",
  },
  {
    group: "Геймплейные системы",
    title: "Фракции и отношения",
    text: "Конфигурация отношений групп, runtime-изменения и единые правила мира.",
  },
  {
    group: "Геймплей и мир",
    title: "Level design и игровые пространства",
    text: "Локации, маршруты, точки интереса, переходы и игровые ситуации в пространстве.",
  },
  {
    group: "Инструменты и контент",
    title: "Unity Editor Tools",
    text: "Графовые редакторы, утилиты подготовки данных и автоматизация авторинга.",
  },
  {
    group: "Инструменты и контент",
    title: "Сохранения",
    text: "Постоянное состояние игры, сериализация данных и восстановление прогресса.",
  },
  {
    group: "Инструменты и контент",
    title: "Локализация",
    text: "Локализованные UI, данные, реплики, квесты и инструменты редактирования.",
  },
  {
    group: "Инструменты и контент",
    title: "Загрузка контента",
    text: "Addressables, конфигурации и управление загрузкой сцен.",
  },
  {
    group: "Интерфейс и presentation",
    title: "Input и rebinding",
    text: "Управление персонажем и переназначение действий игроком.",
  },
  {
    group: "Интерфейс и presentation",
    title: "UI и HUD",
    text: "Игровые меню, страницы инвентаря, карты, диалогов, торговли и характеристик.",
  },
  {
    group: "Интерфейс и presentation",
    title: "Анимация и звук",
    text: "События анимаций, переходы оружия, шаги, ambient и игровые звуки.",
  },
  {
    group: "Продукт",
    title: "Telemetry и аналитика",
    text: "События смерти игрока, квестов и локаций; интеграция метрик.",
  },
  {
    group: "Продукт",
    title: "Ведение проекта от идеи до релиза",
    text: "Разработка, подготовка релизных сборок, публикация и развитие игры после выхода.",
  },
];

export const competencyDetails: Record<string, CompetencyDetail> = {
  "Игровая архитектура": {
    description:
      "В RPG я использую иерархию scope, в которой зависимости живут ровно столько, сколько существует их контекст. Постоянные сервисы не зависят от конкретной сцены, а меню, игровая сессия, локация, игрок, UI и NPC получают ограниченные контейнеры. Это не «один глобальный Service Locator», а дерево владения: дочерний scope может использовать зависимости родителя, но не наоборот.",
    source:
      "Assets/Scripts/Container/Project/ProjectBootstrap.cs; Assets/Scripts/Container/Project/ProjectLifetimeScope.cs; Assets/Scripts/Container/Game/GameSceneBootstrapper.cs; Assets/Scripts/Container/PlayerLifetimeScope.cs",
    architecture: [
      {
        label: "ProjectScope",
        description:
          "Корневой scope создаётся bootstrap-классом вне зависимости от первой сцены. Он переживает смену сцен через DontDestroyOnLoad и владеет общепроектными сервисами: загрузкой сцен, сохранениями, локализацией, аудио, telemetry, конфигурациями и глобальными каталогами.",
      },
      {
        label: "MenuScope",
        description:
          "Дочерний scope ProjectScope для menu-сцены. Меню, страницы настроек и MenuController живут только пока открыто меню. После перехода в игру они освобождаются вместе со сценой, а ProjectScope остаётся.",
      },
      {
        label: "GameScope",
        description:
          "Дочерний scope ProjectScope для игровой сессии. GameSceneBootstrapper создаёт его программно после завершения общего boot-процесса. Здесь находятся message broker-ы ввода и геймплея, реестры целей/боёв и сервисы, общие для этой игровой сцены.",
      },
      {
        label: "LevelScope",
        description:
          "Опциональный дочерний scope GameScope. Его можно положить на конкретный уровень или локацию: он инъецирует authored-объекты сцены и хранит локальные сценарии, поля, деревья, encounters и прочую логику, которая не должна стать глобальной.",
      },
      {
        label: "PlayerScope → CanvasScope",
        description:
          "PlayerScope создаётся как дочерний prefab от GameScope. Он владеет движением, боёвкой, характеристиками, инвентарём и сохранением игрока. В build callback PlayerScope создаёт CanvasScope: интерфейс становится частью контекста игрока, а не singleton на весь проект.",
      },
      {
        label: "NPC scopes",
        description:
          "Каждый NPC — отдельный entity-scope в контексте GameScope или LevelScope. Внутри инкапсулируются AI, NavMesh, инвентарь, бой, диалоги, фракция и уникальное persistent-состояние конкретного персонажа.",
      },
    ],
    sections: [
      {
        title: "1. Запуск: почему есть отдельный ProjectScope",
        text: "Стартовая сцена не должна определять, существуют ли сохранения, локализация или загрузчик сцен. Bootstrap сначала проверяет, создан ли корневой scope, и при необходимости создаёт prefab. В Awake корневой scope защищён от дубликатов и сохраняется между сценами. Поэтому можно запускать меню, игровую сцену или development-сцену без ручного поиска «глобальных» объектов.",
        code: `protected override void Awake()\n{\n    if (Instance != null && Instance != this)\n    {\n        Destroy(gameObject);\n        return;\n    }\n\n    Instance = this;\n    DontDestroyOnLoad(gameObject);\n    base.Awake();\n}`,
      },
      {
        title: "2. Игровая сцена: сборка GameScope и уровней",
        text: "GameSceneBootstrapper ждёт окончания общего boot-процесса, создаёт GameScope, явно назначает ему ProjectScope родителем, передаёт контекст сцены и собирает контейнер. После этого из сериализованного списка строятся LevelScope, каждый с GameScope как родителем. Благодаря этому level-логика получает доступ к сервисам сессии и проекта, но не разрастается в общий контейнер.",
        code: `var gameLifetimeScope = Instantiate(gameScopePrefab);\ngameLifetimeScope.gameObject.SetActive(false);\ngameLifetimeScope.parentReference.Object = projectScope;\nSceneManager.MoveGameObjectToScene(gameLifetimeScope.gameObject, gameObject.scene);\ngameLifetimeScope.SetGameCamera(gameCamera);\ngameLifetimeScope.gameObject.SetActive(true);\ngameLifetimeScope.Build();\n\nBuildLevelScopes(gameLifetimeScope);`,
      },
      {
        title: "3. Игрок и UI: зависимость в правильную сторону",
        text: "PlayerScope создаётся дочерним от GameScope. Он регистрирует только системы игрока: ввод, движение, характеристики, инвентарь, оружие, квесты и сохранение. CanvasScope создаётся внутри PlayerScope после его сборки. Поэтому UI может подписываться на состояние игрока, но игровой код не обязан знать о конкретных страницах или виджетах.",
        code: `builder.RegisterBuildCallback(_ =>\n{\n    CreateChildFromPrefab(canvasLifetimeScope);\n});\n\nbuilder.RegisterEntryPoint<PlayerMovementController>().AsSelf();\nbuilder.RegisterEntryPoint<PlayerInventory>()\n       .As<IInventory>()\n       .As<IEquipmentInventory>()\n       .AsSelf();`,
      },
      {
        title: "4. Что даёт такая иерархия",
        text: "Владение и очистка привязаны к жизненному циклу: выход из menu-сцены уничтожает MenuScope, выгрузка уровня — его локальные сервисы, а удаление NPC — только состояние этого NPC. Это уменьшает количество скрытых зависимостей, упрощает запуск отдельных сцен и делает границы между доменами видимыми в composition root. При этом общие сервисы вроде сохранений или локализации остаются в одном месте и не дублируются по сценам.",
      },
    ],
  },
  "DI и сборка систем": {
    description:
      "DI использую для явной сборки систем внутри контейнера. Регистрации находятся в точке сборки, зависимости передаются через конструкторы, а запуск и освобождение ресурсов описываются интерфейсами VContainer. Это позволяет читать состав системы и её зависимости без поиска по сцене или цепочке MonoBehaviour.",
    source: "Assets/Scripts/Container/Project/ProjectLifetimeScope.cs",
  },
  "Событийные системы": {
    description:
      "Для обмена сообщениями между независимыми системами использую MessagePipe. Отправитель зависит только от типа сообщения и IPublisher, получатель — от ISubscriber. Это позволяет связывать ввод, UI, геймплей и сценарии без ссылок между конкретными классами.",
    source: "Assets/Scripts/Messages; Assets/Scripts/Input; Assets/Scripts/UI",
  },
  "Конечные автоматы": {
    description:
      "В сложных системах с большим количеством состояний, действий и переходов между ними логика быстро превращается в набор взаимозависимых ветвлений. Такой код трудно расширять и отлаживать: изменение одного сценария может затронуть другой. Конечный автомат выделяет состояния и правила переходов в явную структуру. Для таких задач использую собственную runtime-систему и графовый редактор Unity Editor.",
    source:
      "Assets/Scripts/StateMachine; Assets/Scripts/Editor/GraphEditors/StateMachine",
  },
  "NPC AI и навигация": {
    description:
      "AI персонажа — это не один контроллер движения. Система должна воспринять окружение, выбрать цель, принять решение, построить достижимый маршрут и корректно отреагировать на изменение ситуации. В своих проектах разделяю эти задачи на самостоятельные части, чтобы поведение можно было расширять и проверять без переписывания всей логики.",
    source: "Assets/Scripts/NPC/NpcNavMeshController.cs",
  },
  "Боевая система": {
    description:
      "Боевая система должна не просто уменьшать здоровье, а согласовывать ввод, анимацию, попадание, правила расчёта урона и реакцию мира. Я разделяю эти этапы так, чтобы каждую часть можно было менять и проверять отдельно: например, добавить новое оружие, правило защиты или реакцию, не переписывая весь боевой цикл.",
    source: "Assets/Scripts/Combat; Assets/Scripts/Inventory/PlayerWeapon*",
  },
  "Системы взаимодействия": {
    description:
      "Система взаимодействия связывает ввод игрока, объект мира и результат в игровой системе. Она определяет доступные рядом объекты, проверяет условия действия, поддерживает автоматический и ручной режимы, а затем передаёт результат в нужную систему: инвентарь, диалог, сценарий или объект мира. Интерфейс получает список доступных действий и отображает его игроку.",
    source:
      "Assets/Scripts/Interactable; Assets/Scripts/Inventory/Looting; Assets/Code/Interactable",
  },
  "Инвентарь и экипировка": {
    description:
      "Инвентарь нужно проектировать под потребности конкретного проекта. В одном случае нужны сетка, перенос предметов между ячейками и несколько типов хранилищ. В другом достаточно слотов оружия, расходников и счётчиков ресурсов. А иногда само хранилище становится частью механики мира. Не стоит добавлять сложную систему с большим количеством механик только ради сложности: инвентарь должен решать задачи проекта, а не создавать лишнюю работу игроку и команде.",
    source: "Assets/Scripts/Inventory",
  },
  "Прогрессия игрока": {
    description:
      "Прогрессия связывает действия игрока с новыми возможностями в игре. Проектирую её через характеристики, предметы, таланты, улучшения и награды, чтобы каждый элемент влиял на понятную часть игрового опыта. Выбранное улучшение применяет изменение в модели персонажа, интерфейс отражает результат, а сохранения фиксируют развитие между сессиями.",
    source:
      "Assets/Scripts/Stats; Assets/Scripts/Inventory; Assets/Code/Talents; Assets/Code/Upgrades",
  },
  "Диалоги и квесты": {
    description:
      "Диалог или задание может быть простым эпизодом, а может связывать выбор игрока, предметы, деньги, состояние мира и дальнейшие цели. Поэтому сценарная система должна соответствовать масштабу проекта. Для небольшого сценария достаточно смены режима и камеры. Для разветвлённой RPG-логики нужны данные графа, проверка условий, отдельное runtime-состояние и контролируемое применение последствий.",
    source:
      "Assets/Scripts/Dialogs; Assets/Scripts/Dialogue; Assets/Scripts/Quests",
  },
  "Фракции и отношения": {
    description:
      "Отношения между группами — это правило мира, которым пользуются разные системы. Они могут влиять на выбор цели, доступность действий, сценарии и реакцию персонажей. Чтобы эти правила не дублировались в AI и геймплейных объектах, исходные отношения задаются в конфигурации, а изменения конкретного прохождения хранятся отдельно в runtime-системе.",
    source:
      "Assets/Scripts/Factions/RuntimeFactionRelations.cs; Assets/Scripts/NPC",
  },
  "Level design и игровые пространства": {
    description:
      "Проектирую игровые пространства через маршруты игрока, зоны с собственной задачей, точки интереса и переходы между локациями. Сценарии, интерактивные объекты, навигация и визуальное окружение собираются вокруг роли конкретного места. В результате локация поддерживает темп игры и направляет игрока через действия, а не только через декоративное наполнение.",
    source:
      "Assets/Scripts/Locations; Assets/Scripts/Forest; Assets/Scripts/Landings; Assets/Code/LevelSpawner.cs; Assets/Scripts/BuildingsAndGrid",
  },
  "Unity Editor Tools": {
    description:
      "Редакторский инструмент нужен не ради отдельного окна в Unity, а когда он сокращает повторяющуюся ручную работу, делает структуру данных понятнее или предотвращает ошибку до запуска игры. Для таких задач создаю графовые редакторы, специализированные инспекторы, утилиты настройки и проверки данных. Runtime использует подготовленные данные, а код инструмента остаётся в Editor-сборке.",
    source: "Assets/Scripts/Editor/GraphEditors/Dialogs/DialogEditorWindow.cs",
  },
  Сохранения: {
    description:
      "Система сохранений переносит состояние игры между сессиями. Её состав определяется механиками: от набора значений прогресса до состояния объектов мира. В формате сохранения использую сериализуемые данные и постоянные идентификаторы вместо runtime-ссылок. Восстановление выполняется после инициализации зависимостей, а версия формата и миграции позволяют развивать систему без потери прогресса.",
    source:
      "Assets/Scripts/Saves; Assets/Scripts/Storage; Assets/Code/Saver.cs",
  },
  Локализация: {
    description:
      "Локализация задаёт язык текста для интерфейса, игровых данных и инструментов авторинга. При запуске приложение получает код языка платформы или сохранённую настройку, выбирает Locale в Unity Localization и загружает таблицы строк. После этого UI и конфигурации получают локализованные значения, а пользовательская смена языка сохраняется для следующего запуска.",
    source:
      "Assets/Scripts/Localization; Assets/Scripts/Editor/GraphEditors/Core; Assets/Code/Language",
  },
  "Загрузка контента": {
    description:
      "Addressables использую для асинхронной загрузки конфигураций и построения каталогов, с которыми работают игровые системы. Каталог ждёт завершения операции, проверяет полученные данные и предоставляет поиск по постоянным ID. Handle ресурса остаётся у владельца каталога и освобождается вместе с ним. Переходы между сценами координирует отдельный сервис, который хранит параметры следующей загрузки.",
    source:
      "Assets/Scripts/Inventory/Storage/ItemStorage.cs; Assets/Scripts/Loading/SceneLoadingService.cs",
  },
  "Input и rebinding": {
    description:
      "Unity Input System описывает действия игрока в Input Action Asset, а InputHandler преобразует их в типизированные сообщения для игровых систем. Обработчик учитывает текущий игровой режим и состояние персонажа. Переназначение запускает интерактивный выбор клавиши, обрабатывает отмену и конфликт привязок, обновляет UI и сохраняет overrides в JSON. При следующем запуске настройки загружаются до подписки обработчиков на действия.",
    source:
      "Assets/Scripts/Input; Assets/Scripts/InputRebinding; Assets/Code/InputRebinding",
  },
  "UI и HUD": {
    description:
      "UI строю как набор самостоятельных страниц, между которыми переключается навигация. В каждый момент Canvas отрисовывает текущую страницу и принадлежащие ей элементы, поэтому экран не превращается в один большой контроллер со всеми зависимостями проекта. Страница отвечает за свой жизненный цикл и представление данных, а игровые системы остаются источником состояния. Такой подход уменьшает связанность кода, упрощает отрисовку и позволяет развивать интерфейс по частям.",
    source: "Assets/Scripts/UI; Assets/Scripts/UI/UIElements/PlayerStatsHud.cs",
  },
  "Анимация и звук": {
    description:
      "Работаю со связью между игровым действием, его визуальной фазой и звуковой обратной связью. Анимационные события задают точный момент выполнения действия, а аудиосистема получает контекст и находит подходящую конфигурацию воспроизведения. Тайминги, клипы и параметры звука остаются управляемыми данными; игровые системы получают единый способ запускать визуальные и звуковые реакции.",
    source:
      "Assets/Scripts/Audio; Assets/Scripts/Inventory/PlayerWeaponAnimationEventReceiver.cs; Assets/Scripts/Movement",
  },
  "Telemetry и аналитика": {
    description:
      "Регулярно добавляю продуктовые метрики в игровые проекты: фиксирую ключевые действия и этапы прохождения, собираю контекст событий и использую данные для оценки поведения игроков. События проектируются с понятными ID и параметрами, чтобы их можно было сравнивать между версиями и использовать при принятии решений. Игровые системы работают через единый интерфейс telemetry, а конкретный сервис доставки остаётся деталью инфраструктуры.",
    source: "Assets/Scripts/Telemetry",
  },
  "Ведение проекта от идеи до релиза": {
    description:
      "Веду Unity-проекты через весь цикл разработки: от первой рабочей версии и проектирования систем до релизной сборки, публикации и последующего развития. В моём опыте есть выпуски для WebGL-площадок, Google Play и itch.io. Подготовка к релизу включает техническую интеграцию платформы, сохранения, локализацию, настройки, метрики, проверку сборки и исправление проблем, найденных после выхода.",
    source: "RPG; FPS; Farm_Shop",
  },
};

export const competencyIntroOverrides: Record<string, string> = {
  "Игровая архитектура":
    "Архитектура проектов строится на иерархии DI-контейнеров. Сервисы регистрируются в контейнере соответствующего контекста: проекта, сцены или отдельной подсистемы. Поэтому сервис создаётся вместе с нужным контекстом и освобождается при его завершении. Дочерний контейнер получает доступ к зависимостям родительского, но не наоборот.",
};

export const competencyArchitectureOverrides: Record<
  string,
  NonNullable<CompetencyDetail["architecture"]>
> = {
  "Игровая архитектура": [
    {
      label: "Корневой контейнер · ProjectScope",
      description:
        "Создаётся независимо от стартовой сцены, сохраняется между сценами и держит сервисы всего приложения: загрузку сцен, сохранения, локализацию, аудио, telemetry и общие конфигурации.",
    },
    {
      label: "Контейнер меню · MenuScope",
      description:
        "Дочерний контейнер корневого уровня. Страницы, настройки и контроллер меню существуют только пока открыта menu-сцена; после перехода в игру они освобождаются.",
    },
    {
      label: "Игровой контейнер · GameScope",
      description:
        "Дочерний контейнер корневого уровня для игровой сессии. Владеет игровыми событиями, реестрами и системами, общими для текущей сцены.",
    },
    {
      label: "Контейнер уровня · LevelScope",
      description:
        "Опциональный дочерний контейнер GameScope для логики отдельной локации: сценариев, объектов мира и authored-компонентов, которые не должны становиться глобальными.",
    },
    {
      label: "Контейнер игрока → UI · PlayerScope → CanvasScope",
      description:
        "PlayerScope создаётся дочерним к GameScope и собирает системы игрока. Его дочерний CanvasScope связывает UI с контекстом игрока, не делая интерфейс глобальным сервисом.",
    },
    {
      label: "Контейнеры NPC · NpcLifetimeScope",
      description:
        "Контейнер конкретного персонажа в контексте игровой сцены или уровня. Инкапсулирует AI, навигацию, инвентарь, бой, диалоги, фракцию и persistent-состояние.",
    },
  ],
  "Конечные автоматы": [
    {
      label: "Состояние",
      description:
        "Определяет, что система делает в текущем режиме: набор доступных действий и локальные правила работы.",
    },
    {
      label: "Условия",
      description:
        "Проверяют, наступила ли ситуация для смены режима. Условие отвечает только на вопрос, можно ли перейти.",
    },
    {
      label: "Переход",
      description:
        "Связывает исходное и следующее состояния, задаёт порядок проверки и объединяет условия.",
    },
    {
      label: "Действие перехода",
      description:
        "Выполняет одноразовое изменение на границе состояний: подготовку данных, очистку или запуск следующего шага.",
    },
    {
      label: "Следующее состояние",
      description:
        "Получает управление с уже подготовленным контекстом и начинает свой набор действий.",
    },
  ],
  "NPC AI и навигация": [
    {
      label: "Восприятие",
      description:
        "Собирает доступные данные об окружении: кандидатов, видимость, дистанцию и другие сигналы.",
    },
    {
      label: "Оценка цели",
      description:
        "Отбирает подходящую цель по правилам системы и сохраняет нужный контекст для следующего решения.",
    },
    {
      label: "Выбор действия",
      description:
        "Определяет реакцию: сближение, атака, поиск, ожидание, обход, отступление или другое поведение.",
    },
    {
      label: "Навигация",
      description:
        "Проверяет достижимость точки и ведёт агента по маршруту с учётом дистанции остановки.",
    },
    {
      label: "Обратная связь",
      description:
        "Изменение ситуации возвращается в цикл: цель потеряна, путь недоступен, позиция достигнута или условия изменились.",
    },
  ],
  "Боевая система": [
    {
      label: "Намерение атаки",
      description:
        "Система принимает действие и фиксирует контекст атаки: атакующего, тип действия, цель и правила.",
    },
    {
      label: "Окно урона",
      description:
        "Урон активен только в нужный момент анимации, а не на всём протяжении действия.",
    },
    {
      label: "Регистрация попадания",
      description:
        "Зона оружия или другой источник определяет, что именно было затронуто, и не дублирует попадание.",
    },
    {
      label: "Расчёт результата",
      description:
        "К базовому урону применяются правила зоны попадания, защиты, блоков и игровых ограничений.",
    },
    {
      label: "Реакция и события",
      description:
        "Система обновляет состояние цели и передаёт факт попадания реакциям, AI, UI, звуку и другим подписчикам.",
    },
  ],
  "Прогрессия игрока": [
    {
      label: "Игровой результат",
      description:
        "Игрок получает награду за завершённое действие, найденный предмет или выбранное улучшение.",
    },
    {
      label: "Правило развития",
      description:
        "Конфигурация определяет стоимость, условия доступа и эффект следующего шага прогрессии.",
    },
    {
      label: "Модель персонажа",
      description:
        "Талант, предмет или улучшение меняет характеристики, доступные действия или другие параметры игрока.",
    },
    {
      label: "Представление",
      description:
        "UI отображает доступный выбор, текущее развитие и применённый результат.",
    },
    {
      label: "Постоянное состояние",
      description:
        "Открытые улучшения и изменённые параметры записываются в сохранение для следующей сессии.",
    },
  ],
  "Системы взаимодействия": [
    {
      label: "Поиск объекта",
      description:
        "Триггерная зона или луч из камеры формируют список объектов, доступных игроку в текущей точке.",
    },
    {
      label: "Проверка условий",
      description:
        "Объект оценивает дистанцию, состояние игрока и правила конкретного действия.",
    },
    {
      label: "Режим действия",
      description:
        "Система запускает действие автоматически или по вводу игрока и завершает его при смене контекста.",
    },
    {
      label: "Игровой результат",
      description:
        "Логика объекта меняет состояние ответственной системы, а UI обновляет представление результата.",
    },
  ],
  "Инвентарь и экипировка": [
    {
      label: "Предмет",
      description:
        "Тип предмета, его постоянные свойства и состояние конкретного экземпляра.",
    },
    {
      label: "Хранилище",
      description: "Правила вместимости, ограничений и доступа к предметам.",
    },
    {
      label: "Операция",
      description:
        "Перенос, добавление, извлечение, объединение или разделение как изменение модели данных.",
    },
    {
      label: "Представление",
      description:
        "Интерфейс показывает актуальное состояние и отправляет действия игрока в систему.",
    },
  ],
  "Диалоги и квесты": [
    {
      label: "Сценарные данные",
      description:
        "Реплики, узлы, переходы и условия описывают возможные варианты развития.",
    },
    {
      label: "Runtime-состояние",
      description:
        "Система хранит текущую ветку, активные задания и временные факты сценария.",
    },
    {
      label: "Правила перехода",
      description:
        "Перед выбором или автоматическим шагом проверяются условия и допустимость изменения состояния.",
    },
    {
      label: "Последствия",
      description:
        "Выбор меняет игровые данные через отдельные системы: инвентарь, деньги, квесты или мир.",
    },
  ],
  "Фракции и отношения": [
    {
      label: "Исходные отношения",
      description:
        "Конфигурация задаёт базовую матрицу отношений между группами.",
    },
    {
      label: "Runtime-состояние",
      description:
        "Прохождение хранит только изменения относительно исходных правил.",
    },
    {
      label: "Единый запрос",
      description:
        "Игровые системы получают отношение пары групп через общий контракт.",
    },
    {
      label: "Сохранение",
      description:
        "Изменённые значения сериализуются и восстанавливаются вместе с прогрессом.",
    },
  ],
  "Unity Editor Tools": [
    {
      label: "Данные контента",
      description:
        "Инструмент работает с теми же ассетами и моделями, которые использует runtime.",
    },
    {
      label: "Рабочее представление",
      description:
        "Граф, таблица, инспектор или меню подбираются под задачу автора контента.",
    },
    {
      label: "Проверка и подготовка",
      description:
        "Утилита синхронизирует, валидирует или создаёт данные до запуска игры.",
    },
    {
      label: "Runtime",
      description:
        "Игра читает готовые данные и не зависит от редакторского интерфейса.",
    },
  ],
  Сохранения: [
    {
      label: "Состояние системы",
      description:
        "Игровая система хранит актуальные правила и runtime-данные, необходимые для создания снимка.",
    },
    {
      label: "Снимок данных",
      description:
        "Нужная часть состояния превращается в компактные сериализуемые записи: значения, позиции, состав или изменённые признаки.",
    },
    {
      label: "Связь с контентом",
      description:
        "Запись хранит постоянные ID, по которым после запуска можно найти конфигурацию или созданный в сцене объект.",
    },
    {
      label: "Восстановление",
      description:
        "Данные применяются только после подготовки каталогов, конфигураций и получателей состояния.",
    },
    {
      label: "Развитие формата",
      description:
        "Версия, миграции и явный сброс позволяют безопасно менять состав данных между обновлениями.",
    },
  ],
  Локализация: [
    {
      label: "Источник языка",
      description:
        "Код языка берётся из настроек платформы или из ранее сохранённого выбора игрока.",
    },
    {
      label: "Выбор Locale",
      description:
        "Boot-процесс находит Locale по коду и задаёт его в Unity Localization.",
    },
    {
      label: "Таблицы и конфигурации",
      description:
        "UI, игровые данные и инструменты получают строки из общих таблиц локализации.",
    },
    {
      label: "Готовность",
      description:
        "После загрузки таблиц система публикует сигнал, по которому запускаются зависимые экраны и сервисы.",
    },
    {
      label: "Смена языка",
      description:
        "Новый язык применяется к активной локали и сохраняется для следующего запуска.",
    },
  ],
  "Загрузка контента": [
    {
      label: "Ключ или label",
      description:
        "Addressables находит набор ресурсов по стабильному ключу или label.",
    },
    {
      label: "Асинхронная операция",
      description:
        "Владелец ждёт завершения операции и публикует готовность каталога.",
    },
    {
      label: "Каталог данных",
      description:
        "Загруженные конфигурации проверяются и собираются в структуры для поиска по ID и категориям.",
    },
    {
      label: "Время жизни ресурса",
      description:
        "Handle хранится у владельца каталога и освобождается при завершении его жизненного цикла.",
    },
    {
      label: "Переход сцены",
      description:
        "Сервис фиксирует целевую сцену и параметры перехода, затем передаёт управление loading-сцене.",
    },
  ],
  "Input и rebinding": [
    {
      label: "Input Action Asset",
      description:
        "Конфигурация содержит действия и стандартные привязки для клавиатуры, мыши и других устройств.",
    },
    {
      label: "Обработчик ввода",
      description:
        "Callback действия преобразуется в типизированное сообщение для движения, взаимодействия, меню или боя.",
    },
    {
      label: "Игровой режим",
      description:
        "Обработчик выбирает подходящую реакцию с учётом текущего режима и состояния персонажа.",
    },
    {
      label: "Интерактивное переназначение",
      description:
        "Операция ожидает новую клавишу, поддерживает отмену и обновляет отображение привязки.",
    },
    {
      label: "Хранение overrides",
      description:
        "Изменённые привязки сериализуются в JSON и загружаются до запуска обработчиков.",
    },
  ],
  "UI и HUD": [
    {
      label: "Игровое состояние",
      description:
        "Модели публикуют изменения, необходимые для построения представления.",
    },
    {
      label: "Текущая страница",
      description:
        "Canvas показывает одну самостоятельную страницу и её локальные виджеты.",
    },
    {
      label: "Навигация",
      description:
        "Навигация переключает страницы, управляет фокусом и применяет режим ввода.",
    },
    {
      label: "Локальный жизненный цикл",
      description:
        "Страница создаёт и освобождает своё представление, не удерживая зависимости других экранов.",
    },
    {
      label: "Непрерывный HUD",
      description:
        "Общее визуальное состояние передаётся следующей странице без заметного сброса.",
    },
  ],
  "Анимация и звук": [
    {
      label: "Игровое действие",
      description:
        "Система начинает действие и обновляет его runtime-состояние.",
    },
    {
      label: "Визуальная фаза",
      description:
        "Animator показывает последовательность и сообщает ключевые точки действия.",
    },
    {
      label: "Синхронизация",
      description:
        "Обработчик события проверяет состояние и запускает нужную игровую реакцию.",
    },
    {
      label: "Аудиозапрос",
      description:
        "Аудиосервис получает тип реакции, позицию и контекст воспроизведения.",
    },
    {
      label: "Конфигурация",
      description:
        "Данные определяют клипы, громкость, категорию микшера и параметры звука.",
    },
  ],
  "Telemetry и аналитика": [
    {
      label: "Игровой факт",
      description:
        "Трекер получает подтверждённый результат из системы, где он произошёл.",
    },
    {
      label: "Событие и параметры",
      description:
        "Событие содержит стабильный ID и небольшой набор значений, описывающих контекст.",
    },
    {
      label: "Интерфейс telemetry",
      description: "Игровой код вызывает единый контракт IGameTelemetry.",
    },
    {
      label: "Сервис доставки",
      description:
        "Адаптер отправляет подготовленное событие в подключённую систему аналитики.",
    },
    {
      label: "Анализ",
      description:
        "Собранные события помогают оценивать прохождение, сложности и изменения после обновлений.",
    },
  ],
  "Level design и игровые пространства": [
    {
      label: "Задача пространства",
      description:
        "Локация получает игровую роль: маршрут, исследование, встреча, обучение, бой или развитие базы.",
    },
    {
      label: "Точки интереса",
      description:
        "Интерактивные объекты, персонажи и сценарные триггеры размещаются вокруг этой роли.",
    },
    {
      label: "Маршрут игрока",
      description:
        "Переходы, ориентиры и доступные действия направляют движение между зонами.",
    },
    {
      label: "Техническая сборка",
      description:
        "Сцена подключает навигацию, runtime-объекты, точки появления и локальные сценарии.",
    },
    {
      label: "Состояние мира",
      description:
        "Изменения пространства и сценариев сохраняются и восстанавливаются между сессиями.",
    },
  ],
  "Ведение проекта от идеи до релиза": [
    {
      label: "Рабочая версия",
      description:
        "Идея проверяется через playable-версию с основным игровым циклом и понятной целью.",
    },
    {
      label: "Развитие систем",
      description:
        "Геймплей, UI, контент и инфраструктура развиваются вместе с потребностями проекта.",
    },
    {
      label: "Релизная подготовка",
      description:
        "Сборка получает настройки платформы, сохранения, локализацию, метрики и необходимые интеграции.",
    },
    {
      label: "Публикация",
      description:
        "Готовая версия подготавливается для выбранной площадки и проходит финальную проверку.",
    },
    {
      label: "Развитие после релиза",
      description:
        "Проблемы, обратная связь и продуктовые данные становятся основой для следующих обновлений.",
    },
  ],
};

export const competencyMapTitles: Record<string, string> = {
  "Игровая архитектура": "Иерархия контейнеров в моих проектах",
  "Конечные автоматы": "Модель конечного автомата",
  "NPC AI и навигация": "Контур принятия решения AI",
  "Боевая система": "Поток обработки атаки",
  "Системы взаимодействия": "Путь контекстного действия",
  "Инвентарь и экипировка": "Поток работы с предметом",
  "Прогрессия игрока": "Путь развития игрока",
  "Диалоги и квесты": "Переход от контента к игровому результату",
  "Фракции и отношения": "Работа отношений в runtime",
  "Level design и игровые пространства": "От игровой задачи к пространству",
  "Unity Editor Tools": "Контентный цикл",
  Сохранения: "Жизненный цикл постоянного состояния",
  Локализация: "Путь локализованного текста",
  "Загрузка контента": "Управляемая загрузка ресурса",
  "Input и rebinding": "Путь игрового действия",
  "UI и HUD": "Связь игрового состояния и представления",
  "Анимация и звук": "Синхронизация действия и обратной связи",
  "Telemetry и аналитика": "Путь продуктового события",
  "Ведение проекта от идеи до релиза": "Цикл развития игрового продукта",
};

export const competencySectionOverrides: Record<
  string,
  NonNullable<CompetencyDetail["sections"]>
> = {
  "Игровая архитектура": [
    {
      title: "1. Границы контекстов",
      text: "Корневой контейнер создаётся независимо от стартовой сцены и остаётся между переходами. Дочерние контейнеры появляются только для реальных контекстов конкретного проекта: игровой сессии, игрока, UI, уровня, объекта мира или отдельной подсистемы. Благодаря этому общепроектное состояние не смешивается с состоянием сцены, сущности или интерфейса. Набор контекстов может отличаться в зависимости от жанра, но принцип владения зависимостями остаётся тем же.",
    },
    {
      title: "2. Явная связь уровней",
      text: "Родительский контейнер предоставляет дочернему общие зависимости, но не получает зависимости обратно. Например, игровая сессия использует сервисы уровня проекта, а контейнер уровня — сервисы игровой сессии. Направление зависимостей видно по иерархии и не требует поиска глобальных объектов.",
      code: `var gameLifetimeScope = Instantiate(gameScopePrefab);
gameLifetimeScope.gameObject.SetActive(false);
gameLifetimeScope.parentReference.Object = projectScope;
SceneManager.MoveGameObjectToScene(
    gameLifetimeScope.gameObject,
    gameObject.scene);
gameLifetimeScope.gameObject.SetActive(true);
gameLifetimeScope.Build();`,
    },
    {
      title: "3. Локальные контексты для сущностей",
      text: "Игрок, UI и NPC не становятся частью одного общего контейнера. Контейнер игрока создаётся внутри игровой сессии, а контейнер интерфейса — внутри контейнера игрока. Контейнер NPC может принадлежать игровой сессии или уровню. Это сохраняет локальность зависимостей и позволяет освобождать состояние вместе с владельцем.",
      code: `builder.RegisterBuildCallback(_ =>
{
    CreateChildFromPrefab(canvasLifetimeScope);
});`,
    },
    {
      title: "4. Что даёт такая схема",
      text: "Можно запускать нужную сцену изолированно, не вручную собирать глобальные объекты и не переносить локальные сервисы между уровнями. При выгрузке сцены, уровня или сущности освобождается только состояние этого контекста. Границы систем остаются видимыми в структуре контейнеров.",
    },
  ],
  "DI и сборка систем": [
    {
      title: "1. Точки сборки",
      text: "У каждого контейнера есть своя точка сборки — метод Configure. В ней находится состав систем данного контекста: конфигурации, сервисы, Unity-компоненты и запускаемые процессы. Поэтому для изменения состава игровой сессии или игрока не нужно искать создание объектов по разным MonoBehaviour.",
      code: `builder.RegisterInstance(AudioConfig).AsSelf();
builder.RegisterEntryPoint<AudioService>(Lifetime.Singleton)
       .As<IAudioService>()
       .AsSelf();
builder.Register<SceneLoadingService>(Lifetime.Singleton)
       .AsSelf();`,
    },
    {
      title: "2. Контракты и конструкторное внедрение",
      text: "Зависимости передаются в конструктор, а не извлекаются из сцены или статического поля. Класс прямо показывает, какие данные и сервисы ему нужны. Когда сервис используется через интерфейс, реализацию можно заменить в точке сборки без изменения потребителей.",
      code: `public AudioService(AudioConfig config,
                    FootstepConfig footstepConfig)
{
    this.config = config;
    this.footstepConfig = footstepConfig;
}`,
    },
    {
      title: "3. Запуск процессов",
      text: "Для систем с собственным запуском использую EntryPoint и интерфейсы VContainer. IStartable запускает начальную инициализацию, ITickable подключает обновление, IDisposable освобождает подписки и временные ресурсы при уничтожении контейнера. Это отделяет создание объекта от момента, когда он начинает работать.",
      code: `builder.Register<PlayerHitReactionController>(Lifetime.Scoped)
       .As<ICharacterHitReactionController>()
       .As<IStartable>()
       .As<ITickable>()
       .As<System.IDisposable>();`,
    },
    {
      title: "4. Связь с Unity-сценой",
      text: "DI не заменяет Unity-объекты абстракциями там, где нужны реальные ссылки на сцену или prefab. Компоненты Animator, CharacterController и другие authored-объекты регистрируются из иерархии сцены. В результате код получает их через зависимости, а настройка объекта остаётся в Unity.",
      code: `builder.RegisterComponentInHierarchy<Animator>()
       .UnderTransform(transform)
       .AsSelf();
builder.RegisterComponentInHierarchy<CharacterController>()
       .UnderTransform(transform)
       .AsSelf();`,
    },
    {
      title: "5. Очистка подписок",
      text: "Системы, подписанные на события, реализуют IDisposable и снимают подписки при освобождении контейнера. Это особенно важно для UI, интерактивных объектов и логики сцены: после выгрузки контекста они не продолжают получать события и не удерживают ссылки на уничтоженные объекты.",
      code: `public void Start()
{
    interactable.Interacted += OnInteracted;
    interactable.EndInteracted += OnEndInteracted;
}

public void Dispose()
{
    interactable.Interacted -= OnInteracted;
    interactable.EndInteracted -= OnEndInteracted;
}`,
    },
  ],
  "Событийные системы": [
    {
      title: "1. Типизированные каналы сообщений",
      text: "Каждый тип сообщения регистрируется отдельно в игровом контейнере. Вместо общего шины с произвольными строками у сообщения есть C#-тип: например, запрос смены режима, событие урона или нажатие действия. Это делает связи между системами видимыми при поиске по типу и проверяемыми компилятором.",
      code: `var options = builder.RegisterMessagePipe();
builder.RegisterMessageBroker<ChangeGameModeRequest>(options);
builder.RegisterMessageBroker<GameModeChangedMessage>(options);
builder.RegisterMessageBroker<CharacterDamagedMessage>(options);`,
    },
    {
      title: "2. Запрос и результат — разные сообщения",
      text: "Системы ввода и UI отправляют запрос на изменение состояния, но не меняют его сами. Контроллер игрового режима принимает запрос, применяет правила перехода и публикует отдельное сообщение о результате. Остальные системы — камера, страницы UI, реклама или управление — реагируют уже на итоговое состояние.",
      code: `changeGameModeRequestPublisher.Publish(new ChangeGameModeRequest(GameMode.Inventory));

// После применения правил режима:
gameModeChangedPublisher.Publish(new GameModeChangedMessage(mode));`,
    },
    {
      title: "3. Адресные сообщения для конкретной сущности",
      text: "Когда однотипных сущностей несколько, сообщение отправляется с ключом контейнера. Например, интерактивный объект публикует появление в зоне действия конкретного игрока, а логика игрока подписывается только на сообщения со своим Scope ID. Так события не смешиваются между разными экземплярами.",
      code: `interactablePublisher.Publish(
    scopeID,
    new InteractableMessage(interactable));

interactableSubscriber
    .Subscribe(scopeID, Add)
    .AddTo(disposables);`,
    },
    {
      title: "4. Владение подписками",
      text: "Подписка хранится в объекте, которому она нужна, и освобождается вместе с его контекстом. Для этого используются IDisposable и CompositeDisposable. Система не остаётся слушателем после выгрузки UI, уровня или сущности, поэтому не удерживает ссылки на уже уничтоженные объекты.",
      code: `gameModeChangedSubscriber
    .Subscribe(OnGameModeChanged)
    .AddTo(disposables);

public void Dispose()
{
    disposables.Dispose();
}`,
    },
    {
      title: "5. Где события уместны",
      text: "Сообщения использую на границах независимых систем: ввод и геймплей, геймплей и UI, диалоги и сценарии, состояние персонажа и реакция мира. Для локального взаимодействия объектов, которые принадлежат одному контексту, остаются прямые зависимости и обычные C#-события. Это не превращает MessagePipe в единственный способ связи в проекте.",
    },
  ],
  "Боевая система": [
    {
      title: "1. Разделение боевого цикла",
      text: "Атака, проверка попадания, расчёт результата и реакция цели — разные задачи. Я не связываю их в одном контроллере: ввод или AI формируют намерение атаки, анимация определяет момент удара, зона попадания фиксирует контакт, а отдельный приёмник рассчитывает результат. Такая структура позволяет менять конкретный слой без каскадной переработки остальных.",
    },
    {
      title: "2. Урон синхронизирован с анимацией",
      text: "У оружия есть окно урона: оно открывается только в нужной фазе удара и закрывается сразу после неё. Это исключает постоянный активный коллайдер и связывает геймплейный момент попадания с визуальным действием. Один контроллер отвечает за то, чтобы одновременно была активна только одна зона урона.",
      code: `public void BeginDamageWindow(
    CharacterDamageReceiver attacker,
    ItemConfig weaponConfig,
    bool isHeavyAttack)
{
    this.attacker = attacker;
    this.weaponConfig = weaponConfig;
    isDamageWindowOpen = attacker != null
                         && weaponConfig != null
                         && !attacker.IsWeaponAttackSuppressed;
}`,
    },
    {
      title: "3. Хитбоксы и защита от повторных попаданий",
      text: "Источник урона определяет факт пересечения, а хитбокс цели — конкретную зону тела и её множитель. В пределах одного окна урона цель учитывается один раз, поэтому один взмах не наносит урон каждый кадр, пока коллайдеры пересекаются. Это правило одинаково важно и для ближнего боя, и для других источников периодического контакта.",
    },
    {
      title: "4. Расчёт урона как отдельное правило",
      text: "Базовый урон не записывается напрямую в здоровье. Сначала применяются правила конкретной игры, затем система передаёт итоговое значение состоянию персонажа. В одном проекте это могут быть зона попадания и защита, в другом — тип оружия, выбранный персонаж и прокачка. Такой порядок позволяет добавлять модификаторы без изменения кода оружия или хитбокса.",
      code: `// RPG: зона попадания и защита
var bodyMultiplier = Mathf.Max(0f, hitbox.DamageMultiplier);
var physicalDefense = PhysicalDefenseCalculator.ResolveProtection(
    inventory, hitbox.BodyPart);
var mitigatedDamage = hit.Damage
                      * bodyMultiplier
                      * (1f - physicalDefense);

statsController.AddValue(StatType.Hp, -mitigatedDamage);

// FPS: бонус персонажа и постоянный апгрейд оружия
if (Type is WeaponType.Pistol)
    _damage += _damage * .5f;

_damage += _damage * .05f
           * (1 + YandexGame.savesData.Upgrades[1][0][0]);`,
    },
    {
      title: "5. Реакция на результат атаки",
      text: "После успешного попадания факт урона передаётся отдельным системам. Реакция на удар, смерть, анимация, звук, интерфейс, AI и аналитика не должны быть напрямую привязаны к оружию. Это позволяет одной атаке вызывать нужный набор последствий, а новые реакции добавлять как отдельные подписчики.",
    },
  ],
  "NPC AI и навигация": [
    {
      title: "1. Разделение задач AI",
      text: "Восприятие окружения, выбор цели, принятие решения и движение не должны быть одной связанной системой. Я разделяю их так, чтобы сенсор только собирал кандидатов, логика выбора цели определяла приоритет, модель поведения выбирала действие, а навигация отвечала за перемещение. Это позволяет изменять одну часть AI без побочных изменений в остальных.",
    },
    {
      title: "2. Восприятие и выбор цели",
      text: "Для принятия решения недостаточно узнать, что объект находится рядом. Важны дистанция, угол обзора, видимость, принадлежность к фракции, доступность цели и контекст текущего поведения. AI хранит актуальную цель и последнюю известную позицию, поэтому после потери видимости может перейти к поиску, а не мгновенно забыть о ситуации. Ниже — часть текущей проверки сектора обзора.",
      code: `var distanceSqr = toTarget.sqrMagnitude;
if (distanceSqr > distance * distance)
    return false;

if (distanceSqr <= Mathf.Epsilon || angle >= 360f)
    return true;

return Vector3.Angle(GetPlanarForward(), toTarget.normalized)
       <= angle * 0.5f;`,
    },
    {
      title: "3. Навигация как проверяемая операция",
      text: "Перед движением к точке нужно проверить, можно ли расположить её на навигационной сетке и построить полный маршрут. Это защищает систему от попыток идти к недостижимым позициям, за границы NavMesh или в частично построенный путь. Отдельно контролируются остановочная дистанция, факт прибытия и остановка агента при смене решения. В текущем проекте команда движения передаётся агенту только после этих проверок.",
      code: `if (!NavMesh.SamplePosition(destination, out var hit, sampleRadius, NavMesh.AllAreas))
    return false;

var path = new NavMeshPath();
if (!NavMesh.CalculatePath(agent.transform.position, hit.position, NavMesh.AllAreas, path)
 || path.status != NavMeshPathStatus.PathComplete)
    return false;

return agent.SetPath(path);`,
    },
    {
      title: "4. Обработка изменений ситуации",
      text: "Цель может исчезнуть, стать недоступной, выйти из поля зрения, погибнуть или смениться на более приоритетную. Маршрут может оказаться недостижимым. Эти случаи рассматриваются как нормальные ветви поведения: AI очищает или обновляет состояние, выбирает следующее действие и не остаётся в «зависшем» режиме движения.",
    },
  ],
  "Конечные автоматы": [
    {
      title: "1. Декомпозиция сложного поведения",
      text: "Конечный автомат помогает разделить большую систему на понятные режимы работы. Для каждого состояния определяются допустимые действия, а переходы фиксируют, при каких условиях система меняет режим. Вместо одной разросшейся ветки условий получается структура, которую можно обсуждать, проверять и расширять по частям.",
    },
    {
      title: "2. Явные правила переходов",
      text: "Переход — отдельное правило, а не побочный эффект внутри произвольного метода. У него есть условия, целевое состояние и при необходимости действие, которое выполняется во время смены. Это позволяет отдельно контролировать, какие переходы возможны, в каком порядке они проверяются и что происходит на границе состояний. В текущей реализации поддерживаются режимы «все условия выполнены» и «выполнено хотя бы одно».",
      code: `return Type switch
{
    TransitionType.All => Conditions.All(condition => condition?.IsCondition(context) == true),
    TransitionType.Any => Conditions.Any(condition => condition?.IsCondition(context) == true),
    _ => false,
};`,
    },
    {
      title: "3. Переиспользуемые части поведения",
      text: "Действия внутри состояния, условия перехода и одноразовые действия при смене состояния выделяются в небольшие независимые блоки. Один и тот же блок можно использовать в разных сценариях без копирования логики. Новое состояние обычно собирается из уже существующих частей, а не требует отдельной ветки во всей системе. Для поведения используется единый жизненный цикл: вход в состояние, работа внутри него и выход.",
      code: `public virtual void Enter(StateMachineContext context) { }
public virtual void Logic(StateMachineContext context) { }
public virtual void Exit(StateMachineContext context) { }`,
    },
    {
      title: "4. Разделение модели и runtime-состояния",
      text: "Модель автомата описывает возможные состояния и переходы. Runtime-экземпляр хранит текущее состояние и данные конкретного запуска системы. Благодаря этому одна модель может использоваться многими экземплярами, а временные данные одного из них не влияют на остальные.",
    },
    {
      title: "5. Инструменты проектирования",
      text: "Для сложных автоматов важна не только runtime-логика, но и способ работать со структурой. Графовое представление позволяет видеть возможные пути, проверять недостижимые состояния и обсуждать сценарии без чтения большого количества кода. Поэтому для таких систем я создаю и использую редакторские инструменты.",
    },
  ],
  "Системы взаимодействия": [
    {
      title: "1. Поиск доступных объектов",
      text: "Взаимодействие начинается с поиска объектов в окружении игрока. Для этого подходят триггерная зона вокруг персонажа или луч из камеры — способ выбирается под управление и жанр. Найденные объекты попадают в единый список, из которого интерфейс получает доступные действия.",
    },
    {
      title: "2. Условия находятся рядом с действием",
      text: "У каждого объекта есть собственные условия доступности: дистанция, состояние игрока, ограничения предмета или сценария. Контроллер игрока запрашивает результат этой проверки и запускает действие. Новая механика добавляет свою логику доступности, не требуя менять обработку остальных объектов.",
    },
    {
      title: "3. Автоматический и ручной режимы",
      text: "Часть действий выполняется при входе в область объекта, другая часть ожидает ввод игрока. Система хранит выбранный режим, следит за изменением доступности и завершает ручное действие при выходе из зоны, блокировке действий или смене игрового режима. Это предотвращает зависшие состояния и повторные вызовы.",
    },
    {
      title: "4. Результат передаётся ответственной системе",
      text: "Интерактивный объект публикует факт действия, а его логика обновляет нужную систему: инвентарь, диалог, сценарий или состояние мира. UI подписывается на доступные объекты и изменения состояния, поэтому показывает актуальное действие без хранения игровых правил.",
      code: `private bool IsInteractableAvailable(Interactable interactable)\n{\n    if (interactable == null)\n    {\n        return false;\n    }\n\n    var availability = interactable.GetComponent<IInteractableAvailability>();\n    return availability == null || availability.IsInteractableAvailable(scope);\n}`,
    },
  ],
  "Инвентарь и экипировка": [
    {
      title: "1. Инвентарь начинается с правил игры",
      text: "Инвентарь создаётся под задачи конкретной игры. Если предметы должны занимать место, иметь форму и перемещаться вручную, нужна система с сеткой и правилами размещения. Если важен быстрый доступ к ограниченному набору вещей, достаточно слотов. Для ресурсов и однотипных объектов подходит стек. Бывают и механики, в которых отдельное хранилище принадлежит объекту мира и само становится частью игрового процесса. Выбор модели определяется не привычным интерфейсом, а тем, какие действия игра предлагает игроку.",
    },
    {
      title: "2. Предметы, экземпляры и ограничения",
      text: "Тип предмета хранит постоянные данные: название, иконку, категорию, правила использования, размер или максимальный размер стека. Состояние конкретного экземпляра хранится отдельно: количество, позиция, выбранный слот, прочность и другие изменяемые параметры. Хранилище задаёт ограничения — что можно положить, сколько предметов принять и какие операции допустимы. Благодаря этому данные предмета не расползаются по UI и игровым компонентам.",
    },
    {
      title: "3. Операции должны принадлежать модели",
      text: "Добавление, перенос, обмен, разделение стека, экипировка и извлечение предмета — это правила системы, а не действия интерфейса. UI сообщает намерение игрока, а модель проверяет возможность операции и возвращает результат. Такой подход исключает рассинхронизацию: нельзя визуально положить предмет в недоступную ячейку, а затем отдельно пытаться исправить данные.",
    },
    {
      title: "4. Сетка — не просто набор ячеек",
      text: "Сеточный инвентарь требует отдельной логики размещения. Нужно проверить, помещается ли предмет, какие клетки он занимает, можно ли его передвинуть, объединить с другим предметом или автоматически найти для него место. В RPG добавление сначала заполняет подходящие существующие стаки, затем ищет свободную область нужного размера и только после этого создаёт новый экземпляр в сетке. Отрисовка строится поверх этой модели: она показывает состояние, но не является источником правил.",
      code: `// RPG: заполнение стаков и поиск места для предмета в сетке\nvar changed = FillExistingGridStacks(remainingStack);\n\nwhile (remainingStack.Count > 0\n       && TryFindFreeItemTiles(Tiles, remainingStack.Size, out var itemTiles))\n{\n    var countToPlace = Mathf.Min(remainingStack.Count, remainingStack.MaxStack);\n    AddItem(new ItemStack(remainingStack.ItemConfig, countToPlace), itemTiles);\n    remainingStack.Count -= countToPlace;\n    changed = true;\n}`,
    },
    {
      title: "5. Разные хранилища, единые правила передачи",
      text: "У игрока, NPC, контейнера, торгового окна или объекта мира могут быть разные ограничения и способ отображения содержимого. При этом передача между ними должна опираться на единые операции: отдать предмет, принять предмет, проверить вместимость, обновить состояние. Farm Shop показывает другой тип задачи: полка содержит несколько независимых хранилищ, каждое из которых принимает только подходящий товар. Система выбирает подходящее хранилище, а не складывает все предметы в один общий список.",
      code: `// Farm Shop: полка выбирает одно из независимых хранилищ для товара\nvar inventory = Inventories.FirstOrDefault(i => i.CanAdd(config));\nif (inventory != null)\n{\n    var handItem = Object.Instantiate(config.HandPrefab);\n    handItem.transform.SetPositionAndRotation(\n        position.GetPosition(),\n        position.rotation);\n\n    Items.Add(handItem);\n    inventory.Add(handItem);\n    SaveItemsCount(inventory, config);\n}`,
    },
    {
      title: "6. Экипировка и расходуемые ресурсы",
      text: "Слоты экипировки отличаются от обычного хранения: они принимают только подходящие типы предметов и меняют состояние персонажа. Предмет может влиять на характеристики, доступные действия, внешний вид или боевые правила. Боеприпасы и расходники также требуют отдельных правил: важно не только хранить количество, но и корректно расходовать, пополнять и показывать его игроку. В FPS-модели набор оружия и выбранные модули восстанавливаются из сохранённых слотов: лишние экземпляры исключаются до инициализации итогового набора.",
      code: `// FPS: формирование доступного набора оружия из сохранённого выбора\nvar newWeapons = new List<WeaponBehaviour>();\nforeach (var weapon in weapons)\n{\n    if (weapon)\n        newWeapons.Add(weapon);\n}\n\nInitAttachments(newWeapons.ToArray());\n_inventory.weapons = newWeapons.ToArray();\n_inventory.Init();`,
    },
    {
      title: "7. Инвентарный интерфейс помогает принимать решения",
      text: "Инвентарный экран должен показывать не только иконку и число. Игроку нужны понятные состояния ячеек, обратная связь на перенос, информация о свойствах предмета и ясное объяснение недоступного действия. Попап при наведении решает часть этой задачи: он берёт сведения из данных предмета и не создаёт вторую, расходящуюся копию характеристик в UI.",
    },
  ],
  "Диалоги и квесты": [
    {
      title: "1. Сложность сценарной системы определяется задачей",
      text: "Не каждому проекту нужен большой редактор диалогов и квестовые графы. Если диалог только переводит игру в отдельный режим, меняет камеру и возвращает управление, достаточно компактной системы. Когда от выбора зависят предметы, деньги, условия, цели и дальнейшие ветви, сценарий нужно описывать как данные и исполнять отдельной runtime-логикой. Это позволяет не тащить тяжёлую систему туда, где она не решает задачу, и не пытаться собрать сложный сценарий из разросшихся if.",
    },
    {
      title: "2. Граф хранит возможные пути, runtime — текущий путь",
      text: "Сценарные данные описывают реплики, ответы, узлы и переходы. Runtime отдельно хранит то, что происходит в текущем прохождении: активный диалог, этап квеста и временные флаги. Одна и та же структура сценария может использоваться многократно, а состояние игрока не меняет авторские данные. Это также упрощает сохранение и восстановление прогресса.",
    },
    {
      title: "3. Доступный ответ не должен менять мир",
      text: "Проверка доступности отвечает только на вопрос, можно ли показать или выбрать вариант. Последствия применяются после подтверждённого выбора. В RPG-диалогах сначала формируется список ответов, прошедших условия; затем отдельный сервис повторно проверяет условия перед применением эффектов. Повторная проверка защищает систему от устаревшего UI и частичного выполнения действия.",
      code: `bool isAvailable = DialogueAnswerAvailability.AreConditionsSatisfied(\n    answer.HasConditions,\n    answer.Conditions,\n    playerInventory,\n    playerMoneyStorage,\n    questController,\n    runtimeFlags);\n\nif (!isAvailable)\n    return;\n\nvisibleAnswers.Add(new DialogueAnswerOption(\n    text,\n    nextPhrase,\n    answer.ForceExitAfterAnswer,\n    answer.ContinueForcedDialogueAfterExit,\n    answer.GameplayEvents,\n    answer.HasConditions,\n    answer.Conditions));`,
    },
    {
      title: "4. Последствия выбора выполняются отдельными системами",
      text: "Диалог не должен сам менять деньги, удалять предметы или перестраивать квест. Он описывает, какое последствие требуется, а сервис исполнения обращается к владельцам соответствующих данных. Благодаря этому UI не получает доступ к игровым системам напрямую, а один набор последствий можно использовать в разных ветвях сценария.",
      code: `case DialogAnswerConditionType.TakeItemIfHas:\n{\n    int count = Mathf.Abs(condition.ItemCount);\n    if (!playerInventory.TryConsumeItemCount(condition.ItemConfig, count))\n        return false;\n\n    effects.Add(DialogueAnswerExecutionEffect\n        .ImmediateItemLost(condition.ItemConfig, count));\n    break;\n}`,
    },
    {
      title: "5. Квест — это состояние и разрешённые переходы",
      text: "Квестовая система хранит текущий узел, историю пройденных этапов и статус задания. Переход возможен только после проверки требований. Часть переходов запускается выбором игрока, часть — изменением игрового состояния: например, когда в инвентаре появился нужный предмет. Контроллер квестов остаётся владельцем прогресса, а другие системы только сообщают о факте изменения.",
    },
    {
      title: "6. Автоматические переходы не должны жить в UI",
      text: "Автоматический шаг задания — это правило игры, а не побочный эффект открытия страницы квестов. В RPG отдельный сервис подписывается на изменение инвентаря и состояния квестов, а затем просит контроллер проверить допустимые переходы. UI получает уже обновлённое состояние и не влияет на логику выполнения.",
      code: `public void Start()\n{\n    inventorySubscription = playerInventory.Changed\n        .Subscribe(_ => EvaluateTransitions());\n    questController.Changed += OnQuestChanged;\n    EvaluateTransitions();\n}\n\nprivate void EvaluateTransitions()\n{\n    questController.TryExecuteAvailableAutomaticTransition();\n}`,
    },
    {
      title: "7. Представление получает готовый сценарный результат",
      text: "Интерфейс показывает доступные реплики, активную цель, уведомления и маркеры, но не решает, какие из них должны существовать. Это сохраняет границу между игровыми правилами и presentation-слоем. В Farm Shop диалог решает более узкую задачу: контроллер реагирует на смену игрового режима и меняет состояние камеры. Такая компактная реализация уместна, когда проекту не нужна разветвлённая сценарная логика.",
      code: `// Farm Shop: диалог управляет presentation-сценарием\npublic DialogueController(\n    CameraMotor cameraMotor,\n    ISubscriber<GameModeChangedMessage> gameModeSubscriber,\n    ISubscriber<ChangeGameModeToDialogueRequest> dialogueSubscriber)\n{\n    this.cameraMotor = cameraMotor;\n    gameModeSubscriber.Subscribe(ChangeCameraState);\n    dialogueSubscriber.Subscribe(SetNewTarget);\n}\n\nprivate void ChangeCameraState(GameModeChangedMessage message)\n{\n    cameraMotor.ChangeCameraMode(\n        message.GameMode is GameMode.Dialogue\n            ? CameraModes.Dialogue\n            : CameraModes.Gameplay);\n}`,
    },
  ],
  "Фракции и отношения": [
    {
      title: "1. Отношения групп — отдельное правило мира",
      text: "Принадлежность объекта к группе и отношение между группами не должны быть спрятаны внутри отдельных контроллеров. Выделенная система даёт единый ответ: нейтральна ли другая сторона, дружественна или враждебна. Этот ответ могут использовать AI, боевые правила, диалоги, доступ к зонам и сценарии, не зная, где хранятся исходные данные.",
    },
    {
      title: "2. Пара групп — это одно отношение",
      text: "Отношение между двумя группами симметрично: не нужно хранить две независимые записи для A → B и B → A. В runtime-модели пара нормализуется при создании ключа, поэтому порядок аргументов не создаёт дубликат и не позволяет двум системам получить разные значения для одной и той же связи.",
      code: `private readonly struct FactionPair : IEquatable<FactionPair>\n{\n    public FactionConfig Left { get; }\n    public FactionConfig Right { get; }\n\n    public FactionPair(FactionConfig first, FactionConfig second)\n    {\n        if (first.GetInstanceID() < second.GetInstanceID())\n        {\n            Left = first;\n            Right = second;\n        }\n        else\n        {\n            Left = second;\n            Right = first;\n        }\n    }\n}`,
    },
    {
      title: "3. Конфигурация и прохождение решают разные задачи",
      text: "Базовая матрица отношений принадлежит контенту. Она определяет стартовые правила новой игры. Изменения, которые происходят во время прохождения, живут в отдельном runtime-хранилище и не записываются обратно в ассет конфигурации. Благодаря этому можно восстановить сохранение, начать новую игру с исходных значений и редактировать контент без смешения с данными игрока.",
    },
    {
      title: "4. Изменение отношений проходит через один контракт",
      text: "Система, которая хочет изменить отношение, не редактирует таблицу напрямую. Она передаёт пару групп и величину изменения в общий сервис. Все потребители запрашивают итоговое значение через тот же контракт. Такая граница позволяет позже добавить временные модификаторы, репутацию, маскировку или сюжетные исключения без переписывания AI и других систем.",
      code: `public bool TryChangeRelation(\n    FactionConfig leftFaction,\n    FactionConfig rightFaction,\n    int amount)\n{\n    if (amount == 0 || leftFaction == null || rightFaction == null\n        || leftFaction == rightFaction)\n    {\n        return false;\n    }\n\n    var pair = new FactionPair(leftFaction, rightFaction);\n    relations[pair] = GetRelation(leftFaction, rightFaction) + amount;\n    Changed?.Invoke();\n    return true;\n}`,
    },
    {
      title: "5. Данные должны быть удобны для настройки",
      text: "Матрица отношений растёт вместе с числом групп, поэтому её неудобно поддерживать вручную в обычном инспекторе. Для настройки создано отдельное окно Unity Editor: оно синхронизирует пары фракций, удаляет устаревшие записи и показывает пороги нейтрального, дружественного и враждебного отношения. Редакторская утилита не меняет runtime-правила, но делает их создание и проверку быстрее.",
    },
  ],
  "Unity Editor Tools": [
    {
      title: "1. Инструмент появляется из повторяющейся задачи",
      text: "Если автору контента приходится регулярно вручную связывать ассеты, искать нужные поля в инспекторе или проверять структуру данных по нескольким объектам, эту работу стоит перенести в инструмент. Редактор не должен дублировать стандартный инспектор без причины. Его задача — дать представление и операции, которых не хватает для конкретной системы.",
    },
    {
      title: "2. Runtime-данные и интерфейс редактора разделены",
      text: "Окно Unity Editor создаёт, связывает и изменяет ассеты, но не становится частью игровой системы. Runtime получает готовые графы, конфигурации и ссылки на объекты, не зная, каким окном они были подготовлены. Благодаря этому инструмент можно менять независимо от исполнения игры, а редакторский код не попадает в build.",
    },
    {
      title: "3. Общая основа для графовых редакторов",
      text: "Диалоги, квесты и конечные автоматы имеют разные данные, но похожий способ работы: рабочее поле, панорамирование, масштабирование, узлы и связи. Вместо трёх независимых окон общая часть вынесена в базовый класс. Производные редакторы оставляют у себя только доменные правила и представление своих узлов.",
      code: `public abstract partial class GraphEditorWindowBase : EditorWindow\n{\n    private readonly GraphEditorWorkspaceState workspaceState = new();\n\n    protected float zoom\n    {\n        get => workspaceState.Zoom;\n        set => workspaceState.Zoom = value;\n    }\n\n    protected Vector2 panOffset\n    {\n        get => workspaceState.PanOffset;\n        set => workspaceState.PanOffset = value;\n    }\n}`,
    },
    {
      title: "4. Инструмент сохраняет обычный workflow Unity",
      text: "Изменения проходят через SerializedObject, Undo, EditorUtility.SetDirty и сохранение ассетов. Это важно: автор может отменить действие, увидеть изменённый файл в системе контроля версий и не получить «скрытую» модификацию объекта. Инструмент ускоряет работу, но не ломает привычный поток Unity.",
    },
    {
      title: "5. Утилиты проверяют и синхронизируют данные",
      text: "Не каждая задача требует большого окна. Небольшая утилита может сопоставить конфигурацию с Input Actions, создать недостающие идентификаторы, подготовить хитбоксы, аудио или очистить невалидные ссылки. Такие операции лучше выполнять явно и повторяемо, чем надеяться на ручную настройку каждой сцены.",
      code: `var serializedConfig = new SerializedObject(config);\nvar property = serializedConfig.FindProperty(\n    $"<{actionName}>k__BackingField");\nvar action = actions.FindAction(actionName);\n\nif (property != null && action != null)\n{\n    property.objectReferenceValue = reference;\n    serializedConfig.ApplyModifiedPropertiesWithoutUndo();\n    EditorUtility.SetDirty(config);\n}`,
    },
    {
      title: "6. Инструмент должен делать структуру проверяемой",
      text: "Графовый редактор помогает увидеть недостижимый узел, незаполненный переход или неверную связь до запуска игры. Табличный редактор отношений показывает полную матрицу групп. Специализированный инспектор убирает лишние поля и делает настройку объекта последовательной. Чем раньше ошибка становится видна автору, тем меньше времени уходит на её поиск в runtime.",
    },
  ],
  Сохранения: [
    {
      title: "1. Граница постоянного состояния",
      text: "В сохранение попадают только изменения, нужные после следующего запуска: прогресс, параметры, размещение объектов и их состав. Временные ссылки, подписки, кэши и состояние текущего кадра не сохраняются.",
    },
    {
      title: "2. Формат соответствует масштабу системы",
      text: "Для простого прогресса достаточно чисел, флагов и массивов. Если объекты можно создавать, перемещать, изменять и удалять, требуются отдельные записи состояния: идентификатор, положение, свойства и признак существования. Формат не усложняется заранее, но развивается вместе с постоянными системами.",
    },
    {
      title: "3. Постоянные идентификаторы вместо runtime-ссылок",
      text: "После перезапуска сцена создаётся заново, поэтому ссылка на прежний объект бесполезна. Запись хранит ID конфигурации или объекта сцены, по которому система находит исходный контент и применяет сохранённые изменения. Это не зависит от порядка объектов в Hierarchy и позволяет пропускать неполные или устаревшие записи.",
    },
    {
      title: "4. Восстановление в правильный момент",
      text: "Данные применяются после готовности каталогов, сцены и систем-получателей. В более сложной реализации слой сохранений ждёт завершения boot-процесса, инициализирует коллекции и только затем открывает восстановление. Так запуск остаётся воспроизводимым, а данные не приходят в ещё не готовую систему.",
    },
    {
      title: "5. Версии, миграции и новый старт",
      text: "Сохранение остаётся у игрока между обновлениями. Версия формата определяет, как прочитать старые данные: преобразовать, дополнить или пропустить часть записи. Новый старт также задаётся явно — сбрасываются все данные, которые влияют на дальнейшее прохождение.",
      code: `public async void Start()\n{\n    await bootCompletion.WaitAsync();\n    EnsureInitialized();\n    MigrateNpcStatesToPersistentIds();\n    RestoreFactionRelations(factionRelations, YG2.saves.factionRelations);\n\n    IsReady = true;\n    ready.TrySetResult(true);\n}`,
    },
  ],
  Локализация: [
    {
      title: "1. Источник языка",
      text: "Язык определяется в начале запуска. В проектах используется код, полученный от платформы, а пользовательская смена языка сохраняется в настройках. Оба источника приводятся к коду Locale Unity Localization.",
    },
    {
      title: "2. Загрузка до показа интерфейса",
      text: "Boot-процесс ждёт инициализацию Unity Localization, выбирает нужный Locale и загружает таблицы строк. Затем публикуется сигнал готовности, по которому могут запускаться экраны и сервисы с локализованными данными.",
    },
    {
      title: "3. Общие строки для UI и данных",
      text: "LocalizedString используется в интерфейсе и ScriptableObject-конфигурациях. Это позволяет применять одни и те же таблицы для названий, описаний, подсказок и данных, которые нужны игровым системам или редакторским инструментам.",
    },
    {
      title: "4. Кэширование и смена языка",
      text: "После загрузки таблиц локализованные значения кэшируются для быстрого доступа. При смене языка кэш обновляется, активный Locale меняется, а выбранный код записывается в сохранения. На следующем запуске используется тот же выбор.",
      code: `await LocalizationSettings.InitializationOperation;\n\nvar locale = LocalizationSettings.AvailableLocales.Locales\n    .Find(item => item.Identifier.Code == language);\n\nif (locale != null)\n{\n    LocalizationSettings.SelectedLocale = locale;\n}\n\nawait LocalizationSettings.StringDatabase.GetAllTables();`,
    },
  ],
  "Загрузка контента": [
    {
      title: "1. Addressables и каталог конфигураций",
      text: "Конфигурации предметов загружаются одной асинхронной операцией по label Addressables. После завершения операции каталог оставляет только валидные записи с уникальным ID и строит индексы по категориям. Игровые системы запрашивают готовые конфигурации у каталога.",
    },
    {
      title: "2. Готовность и ошибки загрузки",
      text: "Каталог публикует Task готовности. Зависимые системы ожидают его перед работой с данными. Ошибка операции, пустой результат, пустой ID или дубликат фиксируются отдельно; некорректные записи не попадают в каталог.",
    },
    {
      title: "3. Владение handle",
      text: "AsyncOperationHandle хранится в сервисе, который запустил загрузку. При уничтожении сервиса handle освобождается через Addressables.Release, а ожидающие системы получают результат о недоступности каталога. Это связывает ресурс с жизненным циклом владельца.",
    },
    {
      title: "4. Переход между сценами",
      text: "SceneLoadingService принимает имя целевой сцены и параметры активации, сохраняет их до перехода и открывает loading-сцену. Она получает параметры через сервис и выполняет дальнейшую загрузку. UI и игровые объекты используют один маршрут перехода.",
      code: `loadHandle = Addressables.LoadAssetsAsync<ItemConfig>(AddressablesLabel, null);\nhasLoadHandle = true;\n\nvar loadedItems = await loadHandle.Task;\nif (loadHandle.Status == AsyncOperationStatus.Succeeded)\n{\n    BuildCatalogue(loadedItems);\n}`,
    },
  ],
  "Input и rebinding": [
    {
      title: "1. Действия и сообщения",
      text: "Input Action Asset хранит действия и их стандартные привязки. InputHandler подписывается на callbacks Unity Input System и публикует типизированные сообщения: движение, взаимодействие, открытие страниц, выбор слота, уклонение или действие мышью. Игровые системы получают уже обработанное намерение игрока.",
    },
    {
      title: "2. Учёт игрового режима",
      text: "Одна и та же команда может иметь разные результаты в разных режимах. InputHandler проверяет текущий GameMode и состояние персонажа, затем публикует подходящее сообщение. Неактивные режимы на команду не реагируют. При смерти игрока обработчик очищает направление движения и перестаёт принимать игровые действия.",
    },
    {
      title: "3. Интерактивное переназначение",
      text: "Компонент настройки находит action и binding по имени, временно отключает действие и запускает PerformInteractiveRebinding. Escape отменяет операцию. После выбора клавиши проверяются совпадающие привязки в карте, а прежняя клавиша переносится в конфликтующую запись. UI сразу показывает новое читаемое название клавиши с учётом выбранного языка.",
    },
    {
      title: "4. Сохранение пользовательских настроек",
      text: "Overrides сериализуются средствами Input System в JSON и сохраняются в PlayerPrefs. Bootstrap загружает их до подписки scene-систем на действия. Сброс удаляет overrides из Input Action Asset и сохранённую запись.",
      code: `public static void Save(InputActionAsset inputActions)\n{\n    PlayerPrefs.SetString(\n        PlayerPrefsKey,\n        inputActions.SaveBindingOverridesAsJson());\n    PlayerPrefs.Save();\n}\n\npublic static void Load(InputActionAsset inputActions)\n{\n    inputActions.LoadBindingOverridesFromJson(\n        PlayerPrefs.GetString(PlayerPrefsKey));\n}`,
    },
  ],
  "Прогрессия игрока": [
    {
      title: "1. Прогрессия задаёт следующий выбор",
      text: "Игрок должен видеть связь между действием, наградой и новым способом играть. Поэтому развитие строится вокруг понятных шагов: получить ресурс, открыть улучшение, изменить параметр или доступную возможность, а затем проверить эффект в игре. Такая последовательность помогает удерживать цель прогрессии в самом игровом опыте.",
    },
    {
      title: "2. Изменения проходят через модель персонажа",
      text: "Улучшение не меняет интерфейс напрямую. Оно применяет изменение к характеристике или другой модели, которая публикует результат для зависимых систем. HUD, боевая логика, движение и сохранения получают актуальное состояние из одного источника.",
      code: `public void AddValue(StatType statType, float value)
{
    var stat = GetStat(statType);
    var previousValue = stat.Value.Value;
    stat.AddValue(value);
    PublishIfChanged(statType, previousValue, stat.Value.Value);
}`,
    },
    {
      title: "3. Таланты и улучшения",
      text: "Таланты и улучшения описывают вариант развития, условия открытия и эффект. Экран выбора создаёт понятный момент решения, а игровой код применяет результат к нужной системе. Новые варианты можно добавлять через данные и отдельные эффекты, не меняя устройство всей прогрессии.",
    },
    {
      title: "4. Развитие сохраняется",
      text: "Открытые возможности и изменения параметров входят в постоянное состояние игры. После загрузки игрок получает уже выбранные таланты, предметы и связанные эффекты. Это связывает прогрессию с продолжительностью игрового опыта, а не с одной сессией.",
    },
  ],
  "Level design и игровые пространства": [
    {
      title: "1. У пространства есть игровая роль",
      text: "Перед наполнением локации определяется, что игрок должен в ней сделать и почувствовать: пройти маршрут, найти цель, встретить персонажа, освоить механику, подготовиться к следующей ситуации. Эта роль определяет расположение объектов, плотность событий и доступные действия.",
    },
    {
      title: "2. Маршрут строится через ориентиры и переходы",
      text: "Переходы между зонами связываются с конкретными точками входа и выхода. Система знает текущую локацию, проверяет доступность перехода и создаёт игрока в подготовленной точке назначения. Так техническая логика поддерживает задуманный маршрут и не оставляет появление игрока случайным.",
      code: `var selectedId = string.IsNullOrWhiteSpace(transitionContext.TargetLocationId)
    ? selector.DefaultLocationId
    : transitionContext.TargetLocationId;

currentLocation = selector.FindLocation(selectedId);
currentEntrance = currentLocation?.FindTransition(
    transitionContext.TargetTransitionId);`,
    },
    {
      title: "3. Игровая ситуация собирается из систем",
      text: "Интерактивные объекты, персонажи, задания, навигация и сценарные триггеры получают роль внутри конкретного места. За счёт этого локация работает как игровая ситуация: в ней есть причина остановиться, исследовать, принять решение или продолжить путь.",
    },
    {
      title: "4. Пространство развивается вместе с игроком",
      text: "Изменяемые объекты, размещённые постройки, открытые зоны и сценарное состояние сохраняются между сессиями. Игрок возвращается в пространство с последствиями своих действий, а не в исходную декорацию. Это позволяет связывать level design с прогрессией и развитием мира.",
    },
  ],
  "Ведение проекта от идеи до релиза": [
    {
      title: "1. От рабочей версии к игровому продукту",
      text: "Работу начинаю с playable-версии, которая проверяет основной игровой цикл. Затем развиваю системы, контент и интерфейс вокруг того, что уже можно запустить и оценить. Такой порядок помогает принимать решения по реальной игре и сохранять фокус на результате для игрока.",
    },
    {
      title: "2. Релизная подготовка",
      text: "Перед выпуском проект собирается в цельную версию: проверяются переходы, сохранения, настройки, локализация, платформенные сценарии и поведение на целевом устройстве. Отдельно готовится процесс запуска, чтобы сервисы и контент инициализировались в правильном порядке.",
      code: `public void Load(string targetSceneName)
{
    PrepareDirectLoad(targetSceneName, waitForInputBeforeActivation: false);
    LoadRequested?.Invoke();
    Time.timeScale = 1f;
    SceneManager.LoadScene(config.LoadSceneName);
}`,
    },
    {
      title: "3. Публикация на разных площадках",
      text: "Есть опыт публикации игр на WebGL-площадках, Google Play и itch.io. Для каждой площадки подготавливается подходящая сборка и проверяются её ограничения, ввод, отображение, сохранение прогресса и интеграции. Этот опыт позволяет заранее учитывать путь игры до игрока, а не ограничиваться работой в редакторе.",
    },
    {
      title: "4. Развитие после выхода",
      text: "После публикации работа продолжается: исправляются найденные проблемы, улучшается пользовательский опыт, добавляются новые возможности и подключаются метрики для оценки изменений. Релиз становится точкой следующей итерации, а не завершением разработки.",
    },
  ],
  "UI и HUD": [
    {
      title: "1. Интерфейс состоит из страниц",
      text: "Каждый крупный экран оформлен отдельной страницей со своим набором элементов, подписок и локальным состоянием. Canvas показывает только текущую страницу. Вместо одного объекта, который знает обо всём UI, получается набор небольших изолированных модулей с понятной ответственностью.",
      code: `private void Update(GameMode gameMode)
{
    var nextPage = ResolvePage(gameMode);
    currentPage?.PrepareForTransition(nextPage.Type);
    HideCurrentPage();
    currentPage = nextPage;
    currentPage?.Draw();
}`,
    },
    {
      title: "2. Связанность остаётся локальной",
      text: "Страница получает только зависимости, необходимые для её работы, и владеет созданными виджетами. Изменение одного экрана не требует обходить контроллеры других экранов или держать их объекты активными. Новая страница добавляется через навигацию и собственный контекст, поэтому система растёт без усложнения существующих частей.",
    },
    {
      title: "3. Отрисовка и жизненный цикл",
      text: "При переходе навигация закрывает прежнюю страницу, освобождает её подписки и создаёт представление следующей. Отрисовка остаётся простой: обновления приходят только в активный экран и только от нужных ему моделей. Это уменьшает количество условий, скрытых объектов и побочных изменений в UI.",
    },
    {
      title: "4. Навигация, ввод и HUD",
      text: "Переход страницы одновременно задаёт фокус, доступный набор действий и состояние курсора. HUD сохраняет свои визуальные значения перед сменой страницы и передаёт их следующему представлению. Пользователь видит цельный интерфейс, а код сохраняет границы между страницами.",
      code: `public override void PrepareForTransition(PageType nextPageType)
{
    if (nextPageType == PageType.Dialogue)
    {
        playerStatsHudContinuity.Store(Type, playerStatsHud.CaptureState());
        return;
    }

    playerStatsHudContinuity.Clear();
}`,
    },
  ],
  "Анимация и звук": [
    {
      title: "1. Действие проходит через визуальную фазу",
      text: "Игровая система начинает действие, Animator показывает его развитие, а ключевой момент отмечается анимационным событием. Обработчик получает этот сигнал и выполняет связанную реакцию. Так визуальная последовательность и логика используют один тайминг, который удобно настраивать вместе с клипом.",
    },
    {
      title: "2. События остаются управляемыми",
      text: "Анимационное событие приходит в отдельный обработчик, который проверяет актуальное состояние и передаёт команду нужной системе. Эта граница защищает от вызовов, утративших актуальность после отмены действия или смены режима. Клип отвечает за момент, а система — за допустимость и результат.",
    },
    {
      title: "3. Звук как самостоятельная система",
      text: "Игровые и анимационные события создают аудиозапрос с нужным контекстом. Аудиосервис выбирает конфигурацию воспроизведения и работает с источниками звука централизованно. Благодаря этому однообразно обрабатываются позиция, громкость, микшерные категории и настройки пользователя.",
    },
    {
      title: "4. Настройка через данные",
      text: "Клипы, группы вариантов, уровни громкости и параметры воспроизведения хранятся в конфигурациях. Изменение звучания или тайминга не требует искать вызовы по игровому коду. Такой подход даёт быстрый цикл настройки и сохраняет код систем компактным.",
    },
  ],
  "Telemetry и аналитика": [
    {
      title: "1. Метрики как часть разработки",
      text: "Telemetry добавляется вместе с игровыми системами, когда появляется понятная продуктовая задача. Она помогает увидеть путь игрока, оценить востребованность механик, найти сложные этапы и проверить эффект изменений после обновлений. Метрики становятся частью цикла разработки, а не разовой интеграцией перед релизом.",
    },
    {
      title: "2. События с понятным смыслом",
      text: "Для события задаются стабильный ID, момент отправки и параметры контекста. Набор параметров остаётся небольшим и отвечает на конкретный вопрос анализа. Благодаря этому данные сохраняют смысл при развитии проекта, их удобно сравнивать между сборками и использовать для следующих решений.",
    },
    {
      title: "3. Подтверждённый игровой факт",
      text: "Трекер подписывается на завершённое изменение в игровой системе: переход, результат действия или смену важного состояния. Событие отправляется один раз после подтверждения результата и получает данные, доступные в этот момент. Такой подход защищает аналитику от повторов и предположений, собранных из интерфейса.",
    },
    {
      title: "4. Единый контракт telemetry",
      text: "Игровые системы передают eventId и параметры через IGameTelemetry. Контракт состоит из одного метода Track, поэтому вызов телеметрии остаётся одинаковым для любого источника события. Сервис доставки подключается на уровне инфраструктуры проекта и не влияет на устройство игровых систем.",
    },
  ],
};

export const competencyExamples: Record<string, CompetencyExample[]> = {
  "Игровая архитектура": [
    {
      project: "RPG",
      chapter: "Develop-сцены и политика сохранений",
      description:
        "Текущая реализация изолированной develop-сцены через конфигурацию GameSceneSessionConfiguration. Ссылка на подробную главу появится вместе со страницей RPG.",
    },
  ],
};

export const competencyVisuals: Record<string, CompetencyVisual> = {
  "Прогрессия игрока": {
    alt: "Экраны прогрессии и улучшений в FPS-проекте",
    images: [
      {
        src: "/content/projects/rpg/progression-skill-tree.webp",
        alt: "Дерево навыков персонажа",
        caption:
          "Дерево навыков с категориями, уровнями и стоимостью улучшений.",
      },
      {
        src: "/content/projects/rpg/progression-weapon-upgrades.webp",
        alt: "Экран улучшений оружия",
        caption:
          "Экран улучшений оружия: параметры, доступные варианты и выбранная модификация.",
      },
      {
        src: "/content/projects/rpg/progression-character-bot.webp",
        alt: "Выбор персонажа со способностями",
        caption:
          "Карточка персонажа с параметрами, способностями и описанием роли.",
      },
      {
        src: "/content/projects/rpg/progression-character-rambo.webp",
        alt: "Выбор персонажа Рэмбо",
        caption:
          "Ещё один вариант развития: другой набор параметров, способностей и ресурсов.",
      },
      {
        src: "/content/projects/rpg/progression-talent-choice.png",
        alt: "Экран выбора таланта",
        caption:
          "Выбор одного из нескольких талантов с описанием игрового эффекта.",
      },
    ],
    layout: "horizontal",
    caption:
      "Прогрессия объединяет навыки, улучшения оружия и выбор персонажа с разными игровыми возможностями.",
    articleLabel:
      "Подробное описание систем прогрессии появится на страницах проектов.",
  },
  "Конечные автоматы": {
    alt: "Скриншот кастомного редактора конечных автоматов в Unity",
    src: "/content/tools/fsm-editor/state-machine-editor.jpg",
    caption:
      "Кастомный редактор конечных автоматов: состояния, переходы, условия и действия переходов.",
    articleLabel:
      "Подробная статья о кастомном редакторе появится после подготовки материалов.",
  },
  "Боевая система": {
    alt: "Скриншоты боевой системы",
    images: [
      {
        src: "/content/projects/rpg/npc-combat-01.png",
        alt: "Несколько персонажей участвуют в бою",
        caption: "Активная схватка с несколькими участниками.",
      },
      {
        src: "/content/projects/rpg/npc-combat-02.png",
        alt: "Персонажи после завершения боя",
        caption: "Результат столкновения и состояние участников после боя.",
      },
    ],
    caption: "Текущий пример боевой системы в RPG-проекте.",
    articleLabel:
      "Подробная техническая глава о боевой системе появится на странице проекта.",
  },
  "Инвентарь и экипировка": {
    alt: "Окно торговли с инвентарями персонажей",
    src: "/content/projects/rpg/inventory-trade-rpg.jpg",
    caption:
      "Торговое окно: два сеточных инвентаря, экипировка, быстрые слоты, вес предметов и операции покупки или продажи.",
    articleLabel:
      "Подробная статья об инвентарной системе появится на странице проекта.",
  },
  "Диалоги и квесты": {
    alt: "Графовый редактор диалогов в Unity",
    src: "/content/tools/dialogue-editor/dialogue-quest-demo.jpg",
    caption:
      "Редактор диалогов: фразы, ответы, переходы и сценарные настройки собраны в едином графе.",
    articleLabel:
      "Подробная статья о сценарных инструментах появится на странице проекта.",
  },
  "Фракции и отношения": {
    alt: "Редактор отношений фракций в Unity",
    src: "/content/tools/faction-relations-editor/faction-relations-editor.jpg",
    caption:
      "Отдельное окно Unity Editor для настройки базовых отношений между фракциями и порогов поведения.",
    articleLabel:
      "Подробная статья о системе фракций появится на странице проекта.",
  },
  "Unity Editor Tools": {
    alt: "Примеры кастомных инструментов Unity Editor",
    layout: "horizontal",
    images: [
      {
        src: "/content/tools/fsm-editor/state-machine-editor.jpg",
        alt: "Графовый редактор конечных автоматов",
        caption:
          "Редактор конечных автоматов: работа с состояниями, переходами и условиями.",
      },
      {
        src: "/content/tools/dialogue-editor/dialogue-quest-demo.jpg",
        alt: "Графовый редактор диалогов",
        caption: "Редактор диалогов: работа со сценарными ветками и ответами.",
      },
      {
        src: "/content/tools/faction-relations-editor/faction-relations-editor.jpg",
        alt: "Редактор отношений фракций",
        caption: "Табличный инструмент для настройки отношений групп.",
      },
    ],
    caption:
      "Инструменты подбирают представление под данные: граф для связей и таблицу для матрицы отношений.",
    articleLabel:
      "Подробная статья о редакторских инструментах появится после подготовки материалов.",
  },
};

export const competencySectionAddendums: Record<
  string,
  NonNullable<CompetencyDetail["sections"]>
> = {
  "Игровая архитектура": [
    {
      title: "5. Develop-сцены: изоляция для быстрой проверки механик",
      text: "Develop-сцена нужна, чтобы запускать игровые системы в изолированной среде: проверять AI, бой, UI, квесты и другие механики без влияния на пользовательский прогресс. В зависимости от устройства конкретного проекта такая среда не должна выполнять запись сохранений, восстановление прогресса и другие операции, меняющие постоянное состояние. Какие именно подсистемы исключаются, определяется составом проекта, а не самой архитектурой контейнеров.",
      code: `[SerializeField] private bool isGameplayScene = true;\n\ngameLifetimeScope.SetSceneSessionConfiguration(\n    new GameSceneSessionConfiguration(isGameplayScene));\n\nif (!sceneSessionConfiguration.IsGameplayScene)\n{\n    return true; // пропускаем checkpoint для develop-сцены\n}`,
    },
    {
      title: "6. Особенности текущей реализации",
      text: "Сейчас режим develop-сцены задаётся флагом IsGameplayScene. Для текущих потребностей проектов этого достаточно: можно быстро собрать изолированную сцену, использовать тот же игровой контейнер и не рисковать постоянными данными. Ограничение подхода в том, что отдельные системы сами проверяют режим сцены. Пока режимов немного, это не создаёт лишней сложности. Когда появятся sandbox, автоматические тесты, preview-сцены или разные правила telemetry, режим стоит вынести в отдельную policy/strategy с явными возможностями: сохранять прогресс, восстанавливать состояние, отправлять продуктовые события. Тогда это будет решение под конкретный набор новых сценариев, а не преждевременная усложняющая прослойка.",
    },
    {
      title: "7. Почему контейнеры и их иерархия",
      text: "Зависимости в игровом коде можно организовать по-разному: через статические singleton-сервисы, ручную сборку в MonoBehaviour, один плоский контейнер на всю игру или поиск компонентов в рантайме. Для небольшого прототипа эти способы позволяют быстрее начать работу. Но по мере роста проектов они размывают время жизни объектов и скрывают зависимости: сложно понять, кто создаёт сервис, кто им владеет и когда его нужно очистить. Иерархия контейнеров даёт явные точки сборки для проекта, сцены, уровня и сущности; зависимости передаются через конструкторы, а время жизни совпадает с жизнью контекста. Для реализации этой схемы использую VContainer. При этом authored-компоненты сцены остаются прямыми Unity-ссылками там, где это уместно, а не превращаются в абстракции ради абстракций.",
    },
  ],
};
