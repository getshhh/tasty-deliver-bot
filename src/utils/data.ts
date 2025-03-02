
import { Product, Category } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Пицца Маргарита',
    description: 'Классическая итальянская пицца с свежей моцареллой, помидорами и базиликом на тонком хрустящем тесте, сбрызнутая оливковым маслом экстра-класса.',
    price: 549,
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=1000',
    category: 'pizza',
    rating: 4.8,
    reviewCount: 124,
    featured: true,
    preparationTime: '15-20 мин',
    tags: ['Итальянская', 'Вегетарианская', 'Хит продаж'],
    ingredients: ['Свежая моцарелла', 'Томаты Сан-Марцано', 'Свежий базилик', 'Оливковое масло', 'Морская соль'],
    nutritionalInfo: {
      calories: 285,
      protein: 12,
      carbs: 36,
      fat: 10,
    },
  },
  {
    id: '2',
    name: 'Трюфельное ризотто с грибами',
    description: 'Сливочный рис арборио, медленно приготовленный с ассорти диких грибов, заправленный трюфельным маслом и сыром Пармезан Реджано.',
    price: 690,
    image: 'https://images.unsplash.com/photo-1667292182511-b92fa3fa04e9?auto=format&fit=crop&q=80&w=1000',
    category: 'mains',
    rating: 4.9,
    reviewCount: 87,
    featured: true,
    preparationTime: '25-30 мин',
    tags: ['Итальянская', 'Вегетарианская', 'Гурме'],
    ingredients: ['Рис Арборио', 'Дикие грибы', 'Трюфельное масло', 'Сыр Пармезан', 'Белое вино', 'Овощной бульон'],
    nutritionalInfo: {
      calories: 420,
      protein: 9,
      carbs: 52,
      fat: 18,
    },
  },
  {
    id: '3',
    name: 'Острая курица с тайским базиликом',
    description: 'Обжаренный фарш из курицы с тайским базиликом, чили и чесноком, подается с жасминовым рисом и жареным яйцом сверху.',
    price: 620,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=1000',
    category: 'asian',
    rating: 4.7,
    reviewCount: 103,
    featured: true,
    preparationTime: '20-25 мин',
    tags: ['Тайская', 'Острая', 'Популярное'],
    ingredients: ['Курица', 'Тайский базилик', 'Чили', 'Чеснок', 'Жасминовый рис', 'Соевый соус', 'Рыбный соус', 'Яйцо'],
    nutritionalInfo: {
      calories: 480,
      protein: 28,
      carbs: 42,
      fat: 22,
    },
  },
  {
    id: '4',
    name: 'Средиземноморский боул с лососем',
    description: 'Филе запеченного лосося на подушке из киноа с огурцом, помидорами черри, красным луком, сыром фета и соусом дзадзики.',
    price: 750,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=1000',
    category: 'healthy',
    rating: 4.6,
    reviewCount: 76,
    featured: true,
    preparationTime: '20 мин',
    tags: ['Средиземноморская', 'Морепродукты', 'Здоровое питание'],
    ingredients: ['Дикий лосось', 'Киноа', 'Огурец', 'Помидоры черри', 'Красный лук', 'Сыр фета', 'Греческий йогурт', 'Укроп', 'Лимон'],
    nutritionalInfo: {
      calories: 410,
      protein: 32,
      carbs: 28,
      fat: 19,
    },
  },
  {
    id: '5',
    name: 'Классический бургер с говядиной',
    description: 'Котлета из премиальной говядины с плавленым чеддером, салатом, помидором и специальным соусом на поджаренной булочке бриошь, подается с хрустящим картофелем фри.',
    price: 590,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=1000',
    category: 'burgers',
    rating: 4.5,
    reviewCount: 142,
    preparationTime: '15 мин',
    tags: ['Американская', 'Комфорт-фуд', 'Хит продаж'],
    ingredients: ['Говядина Ангус', 'Сыр чеддер', 'Салат', 'Помидор', 'Красный лук', 'Специальный соус', 'Булочка бриошь'],
    nutritionalInfo: {
      calories: 680,
      protein: 38,
      carbs: 45,
      fat: 42,
    },
  },
  {
    id: '6',
    name: 'Боул с ягодами и асаи',
    description: 'Смузи из асаи с бананом, посыпанный гранолой, свежей клубникой, черникой, ломтиками банана и медом.',
    price: 480,
    image: 'https://images.unsplash.com/photo-1564834744159-ff0ea41ba4b9?auto=format&fit=crop&q=80&w=1000',
    category: 'breakfast',
    rating: 4.7,
    reviewCount: 58,
    preparationTime: '10 мин',
    tags: ['Завтрак', 'Здоровое питание', 'Вегетарианское'],
    ingredients: ['Асаи', 'Банан', 'Гранола', 'Клубника', 'Черника', 'Мед', 'Миндальное молоко'],
    nutritionalInfo: {
      calories: 320,
      protein: 8,
      carbs: 62,
      fat: 9,
    },
  },
  {
    id: '7',
    name: 'Шоколадный фондан',
    description: 'Теплый шоколадный кекс с жидкой начинкой внутри, подается с ванильным мороженым и легкой присыпкой из сахарной пудры.',
    price: 370,
    image: 'https://images.unsplash.com/photo-1631778068024-03aa7a327d6e?auto=format&fit=crop&q=80&w=1000',
    category: 'desserts',
    rating: 4.9,
    reviewCount: 93,
    featured: true,
    preparationTime: '15 мин',
    tags: ['Десерт', 'Шоколад', 'Изысканное'],
    ingredients: ['Темный шоколад', 'Сливочное масло', 'Яйца', 'Сахар', 'Мука', 'Ванильное мороженое'],
    nutritionalInfo: {
      calories: 450,
      protein: 7,
      carbs: 48,
      fat: 28,
    },
  },
  {
    id: '8',
    name: 'Свежий садовый салат',
    description: 'Хрустящие листья салата с помидорами черри, огурцом, авокадо, красным луком и заправкой из бальзамического уксуса.',
    price: 450,
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&q=80&w=1000',
    category: 'salads',
    rating: 4.4,
    reviewCount: 45,
    preparationTime: '10 мин',
    tags: ['Здоровое питание', 'Вегетарианское', 'Свежее'],
    ingredients: ['Микс салатных листьев', 'Помидоры черри', 'Огурец', 'Авокадо', 'Красный лук', 'Заправка из бальзамического уксуса'],
    nutritionalInfo: {
      calories: 220,
      protein: 5,
      carbs: 18,
      fat: 15,
    },
  },
  {
    id: '9',
    name: 'Борщ с говядиной',
    description: 'Традиционный украинский борщ с говядиной, свеклой, капустой и другими овощами, подается со сметаной и ржаным хлебом.',
    price: 380,
    image: 'https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?auto=format&fit=crop&q=80&w=1000',
    category: 'mains',
    rating: 4.8,
    reviewCount: 112,
    preparationTime: '30 мин',
    tags: ['Русская кухня', 'Суп', 'Традиционное'],
    ingredients: ['Говядина', 'Свекла', 'Капуста', 'Картофель', 'Морковь', 'Лук', 'Томатная паста', 'Сметана'],
    nutritionalInfo: {
      calories: 310,
      protein: 18,
      carbs: 24,
      fat: 16,
    },
  },
  {
    id: '10',
    name: 'Сырники со сметаной и джемом',
    description: 'Нежные сырники из творога, обжаренные до золотистой корочки, подаются со сметаной и ягодным джемом.',
    price: 320,
    image: 'https://images.unsplash.com/photo-1551059446-6a21beb1feee?auto=format&fit=crop&q=80&w=1000',
    category: 'breakfast',
    rating: 4.7,
    reviewCount: 89,
    preparationTime: '15 мин',
    tags: ['Завтрак', 'Русская кухня', 'Сладкое'],
    ingredients: ['Творог', 'Яйца', 'Мука', 'Сахар', 'Ванильный экстракт', 'Сметана', 'Ягодный джем'],
    nutritionalInfo: {
      calories: 380,
      protein: 14,
      carbs: 42,
      fat: 18,
    },
  },
  {
    id: '11',
    name: 'Паста Карбонара',
    description: 'Классическая итальянская паста с соусом из яиц, сыра пекорино романо, гуанчале и свежемолотого черного перца.',
    price: 520,
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&q=80&w=1000',
    category: 'mains',
    rating: 4.9,
    reviewCount: 134,
    preparationTime: '15 мин',
    tags: ['Итальянская', 'Паста', 'Популярное'],
    ingredients: ['Спагетти', 'Гуанчале', 'Яйца', 'Сыр пекорино романо', 'Черный перец'],
    nutritionalInfo: {
      calories: 550,
      protein: 22,
      carbs: 58,
      fat: 28,
    },
  },
  {
    id: '12',
    name: 'Тирамису',
    description: 'Итальянский десерт из слоев печенья савоярди, пропитанного кофе, и нежного крема на основе маскарпоне с какао.',
    price: 350,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea2a91a?auto=format&fit=crop&q=80&w=1000',
    category: 'desserts',
    rating: 4.8,
    reviewCount: 105,
    preparationTime: '10 мин',
    tags: ['Десерт', 'Итальянская', 'Кофе'],
    ingredients: ['Маскарпоне', 'Печенье савоярди', 'Кофе', 'Яйца', 'Сахар', 'Какао'],
    nutritionalInfo: {
      calories: 420,
      protein: 8,
      carbs: 46,
      fat: 24,
    },
  },
];

export const categories: Category[] = [
  {
    id: '1',
    name: 'Пицца',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1000',
    count: 12,
  },
  {
    id: '2',
    name: 'Бургеры',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1000',
    count: 8,
  },
  {
    id: '3',
    name: 'Азиатская',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1000',
    count: 15,
  },
  {
    id: '4',
    name: 'Здоровая еда',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=1000',
    count: 10,
  },
  {
    id: '5',
    name: 'Десерты',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=1000',
    count: 9,
  },
  {
    id: '6',
    name: 'Завтраки',
    image: 'https://images.unsplash.com/photo-1533089860892-a9b969df67e3?auto=format&fit=crop&q=80&w=1000',
    count: 7,
  },
  {
    id: '7',
    name: 'Супы',
    image: 'https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?auto=format&fit=crop&q=80&w=1000',
    count: 6,
  },
  {
    id: '8',
    name: 'Русская кухня',
    image: 'https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?auto=format&fit=crop&q=80&w=1000',
    count: 11,
  },
];
