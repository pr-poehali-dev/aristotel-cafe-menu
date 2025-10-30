import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const menuData = {
  appetizers: [
    {
      name: 'Тарелка «Четыре причины»',
      description: 'Ассорти, символизирующее материальную, формальную, двигательную и целевую причины всего сущего',
      price: '15 минут размышлений'
    },
    {
      name: 'Комбо «Третий лишний»',
      description: 'Два противоречащих суждения, из которых одно обязательно неожиданно окажется сладким, а второе соленым',
      price: '3 логических силлогизма'
    }
  ],
  mains: [
    {
      name: 'Суп «Сущность»',
      description: 'Символизирует суть и основу вкуса, подобно тому, как сущность определяет природу вещей',
      price: '20 минут созерцания'
    },
    {
      name: 'Стейк «Золотая середина»',
      description: 'Каждый компонент блюда взвешен и гармонично взаимодействует с другими, избегая крайностей вкуса. Блюдо не доминирует, а создает цельный и уравновешенный вкус',
      price: '1 час поиска баланса',
      special: true
    },
    {
      name: 'Картофель «Логос»',
      description: 'Не просто еда, а выражение идеи пути от хаоса к порядку, от бессмысленного множества к упорядоченной системе',
      price: '30 минут упорядочивания'
    },
    {
      name: 'Салат «Наследие»',
      description: 'Ингредиенты, символизирующие различные эпохи и культурные традиции, которые сливаются в единую целостность',
      price: '7 поколений мудрости'
    }
  ],
  desserts: [
    {
      name: 'Чизкейк «Состояние»',
      description: 'Измененная текстура и состояние ингредиентов демонстрируют философскую категорию состояния',
      price: '25 минут трансформации'
    },
    {
      name: 'Слоеный десерт в стакане «Положение»',
      description: 'Необычная подача, где структура и расположение компонентов подчеркивают идею положения',
      price: '10 актов размещения'
    }
  ],
  drinks: [
    {
      name: '«Перипатетика»',
      description: 'Алкогольный коктейль, динамичный и бодрящий, символизирующий движение',
      price: '1 прогулка по Ликею'
    },
    {
      name: '«Претерпевание»',
      description: 'Красное вино, прошедшее длительный путь выдержки, символизирующее преодоление и трансформацию',
      price: '5 лет терпения'
    },
    {
      name: '«Энтелехия»',
      description: 'Свежевыжатый сок, раскрывающий энергию роста и развитие внутреннего потенциала',
      price: '1 акт становления'
    },
    {
      name: '«Идея»',
      description: 'Чистая минеральная вода, символизирующая чистоту и простоту истинных форм',
      price: '1 момент ясности'
    }
  ]
};

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    notes: ''
  });
  const { toast } = useToast();

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Бронирование отправлено",
      description: `Спасибо, ${bookingData.name}! Мы свяжемся с вами для подтверждения.`,
    });
    setBookingData({ name: '', email: '', date: '', time: '', guests: '', notes: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              περίπατος
            </h1>
            <div className="hidden md:flex gap-6">
              {['home', 'concept', 'menu', 'gallery', 'booking', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'concept' && 'Концепция'}
                  {section === 'menu' && 'Меню'}
                  {section === 'gallery' && 'Галерея'}
                  {section === 'booking' && 'Бронирование'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button size="sm" onClick={() => setActiveSection('booking')}>
              Забронировать
            </Button>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {activeSection === 'home' && (
          <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
            <div 
              className="absolute inset-0 opacity-20 bg-cover bg-center"
              style={{ 
                backgroundImage: 'url(https://cdn.poehali.dev/projects/f5bb4253-6a16-4628-bb29-934752aec7da/files/53a9c584-9130-4cad-a473-eaf2bc05334f.jpg)',
                filter: 'sepia(0.3) hue-rotate(260deg)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
              <h2 className="text-7xl md:text-9xl font-bold mb-6 tracking-tighter">
                περίπατος
              </h2>
              <p className="text-2xl md:text-3xl text-muted-foreground mb-4 font-light">
                Философский опыт через кулинарию
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Где каждое блюдо — это путь к познанию истины через вкус
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" onClick={() => setActiveSection('menu')} className="text-lg px-8">
                  Исследовать меню
                </Button>
                <Button size="lg" variant="outline" onClick={() => setActiveSection('concept')} className="text-lg px-8">
                  Узнать концепцию
                </Button>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'concept' && (
          <section className="py-20 animate-fade-in">
            <div className="container mx-auto px-4">
              <h2 className="text-5xl font-bold mb-12 text-center">Философия Аристотеля</h2>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <Card className="bg-card/50 backdrop-blur border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon name="Brain" className="text-primary" size={28} />
                      Перипатетическая школа
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Название нашего ресторана происходит от древнегреческой философской школы, 
                      основанной Аристотелем. Философы обучались во время прогулок, что символизировало 
                      движение мысли и поиск истины через опыт.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon name="Scale" className="text-secondary" size={28} />
                      Золотая середина
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Центральная концепция этики Аристотеля: добродетель есть среднее между двумя 
                      крайностями. Наша кухня воплощает этот принцип в каждом блюде — баланс вкусов, 
                      текстур и философских идей.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon name="Lightbulb" className="text-accent" size={28} />
                      Четыре причины
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Материальная, формальная, двигательная и целевая — четыре причины объясняют 
                      существование вещей. Каждое наше блюдо создается с учетом всех четырех аспектов, 
                      от выбора ингредиентов до финальной презентации.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon name="Sparkles" className="text-primary" size={28} />
                      Энтелехия
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Внутренняя целенаправленная сила, побуждающая к развитию и реализации потенциала. 
                      Наша кухня раскрывает истинный потенциал каждого ингредиента, превращая простое 
                      в совершенное.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'menu' && (
          <section className="py-20 animate-fade-in">
            <div className="container mx-auto px-4">
              <h2 className="text-5xl font-bold mb-4 text-center">Философское меню</h2>
              <p className="text-center text-muted-foreground mb-12 text-lg">
                Каждое блюдо — воплощение философской концепции
              </p>

              <div className="max-w-5xl mx-auto space-y-12">
                <div>
                  <h3 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                    <Icon name="Utensils" className="text-primary" size={32} />
                    Закуски
                  </h3>
                  <div className="grid gap-4">
                    {menuData.appetizers.map((item, idx) => (
                      <Card key={idx} className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-xl">{item.name}</CardTitle>
                            <span className="text-secondary font-medium text-sm">{item.price}</span>
                          </div>
                          <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </div>

                <Separator className="bg-border/50" />

                <div>
                  <h3 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                    <Icon name="ChefHat" className="text-primary" size={32} />
                    Основные блюда
                  </h3>
                  <div className="grid gap-4">
                    {menuData.mains.map((item, idx) => (
                      <Card 
                        key={idx} 
                        className={`backdrop-blur transition-all ${
                          item.special 
                            ? 'bg-gradient-to-r from-primary/20 via-card/50 to-secondary/20 border-secondary/50 hover:border-secondary' 
                            : 'bg-card/50 border-primary/20 hover:border-primary/40'
                        }`}
                      >
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-xl flex items-center gap-2">
                              {item.name}
                              {item.special && <Icon name="Star" className="text-secondary" size={20} />}
                            </CardTitle>
                            <span className="text-secondary font-medium text-sm">{item.price}</span>
                          </div>
                          <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
                        </CardHeader>
                        {item.special && (
                          <CardContent>
                            <div className="space-y-4">
                              <div className="aspect-video bg-gradient-to-br from-primary/30 via-background/50 to-secondary/30 rounded-lg overflow-hidden relative">
                                <img 
                                  src="https://cdn.poehali.dev/projects/f5bb4253-6a16-4628-bb29-934752aec7da/files/ddeadf6e-6d38-4818-9b5e-fcdd92849815.jpg"
                                  alt="Золотая середина - визуализация"
                                  className="w-full h-full object-cover opacity-70 mix-blend-luminosity"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                              </div>
                              
                              <div className="prose prose-sm max-w-none">
                                <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                                  <Icon name="BookOpen" className="text-secondary" size={20} />
                                  Философия блюда
                                </h4>
                                <div className="space-y-3 text-muted-foreground">
                                  <p className="leading-relaxed">
                                    <span className="text-secondary font-medium">«Добродетель есть среднее между двумя крайностями, одна из которых — излишество, а другая — недостаток»</span> — это основа блюда. Каждый ингредиент тщательно взвешен для создания идеального баланса.
                                  </p>
                                  <p className="leading-relaxed">
                                    Стейк готовится при точной температуре, избегая как недожаренности, так и пересушивания. Специи добавлены в такой пропорции, что ни одна не доминирует — воплощение принципа <span className="text-accent font-medium">«щедрость — середина между расточительством и скупостью»</span>.
                                  </p>
                                  <p className="leading-relaxed">
                                    Гарнир и соус подобраны так, чтобы дополнять мясо, не перекрывая его вкус. Это блюдо — не просто еда, а <span className="text-primary font-medium">философский урок о поиске гармонии</span> в каждом аспекте жизни.
                                  </p>
                                </div>
                              </div>

                              <div className="grid md:grid-cols-3 gap-3 mt-4">
                                <div className="p-3 bg-background/50 rounded-lg border border-border/50">
                                  <p className="text-sm font-medium text-secondary mb-1">Баланс вкуса</p>
                                  <p className="text-xs text-muted-foreground">Ни сладко, ни остро — идеальная середина</p>
                                </div>
                                <div className="p-3 bg-background/50 rounded-lg border border-border/50">
                                  <p className="text-sm font-medium text-accent mb-1">Гармония текстур</p>
                                  <p className="text-xs text-muted-foreground">Нежность и упругость в равновесии</p>
                                </div>
                                <div className="p-3 bg-background/50 rounded-lg border border-border/50">
                                  <p className="text-sm font-medium text-primary mb-1">Умеренность порции</p>
                                  <p className="text-xs text-muted-foreground">Достаточно, чтобы насытить, не переедая</p>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        )}
                      </Card>
                    ))}
                  </div>
                </div>

                <Separator className="bg-border/50" />

                <div>
                  <h3 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                    <Icon name="Cake" className="text-primary" size={32} />
                    Десерты
                  </h3>
                  <div className="grid gap-4">
                    {menuData.desserts.map((item, idx) => (
                      <Card key={idx} className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-xl">{item.name}</CardTitle>
                            <span className="text-secondary font-medium text-sm">{item.price}</span>
                          </div>
                          <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </div>

                <Separator className="bg-border/50" />

                <div>
                  <h3 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                    <Icon name="Wine" className="text-primary" size={32} />
                    Напитки
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {menuData.drinks.map((item, idx) => (
                      <Card key={idx} className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-lg">{item.name}</CardTitle>
                            <span className="text-secondary font-medium text-xs whitespace-nowrap ml-2">{item.price}</span>
                          </div>
                          <CardDescription className="text-sm leading-relaxed">{item.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'gallery' && (
          <section className="py-20 animate-fade-in">
            <div className="container mx-auto px-4">
              <h2 className="text-5xl font-bold mb-4 text-center">Галерея</h2>
              <p className="text-center text-muted-foreground mb-12 text-lg">
                Визуальное воплощение философских концепций
              </p>

              <div className="max-w-6xl mx-auto">
                <Card className="bg-gradient-to-br from-primary/20 via-card to-secondary/20 border-primary/30 overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-3">
                      <Icon name="Star" className="text-secondary" size={28} />
                      Стейк «Золотая середина»
                    </CardTitle>
                    <CardDescription className="text-base">
                      Футуристическая интерпретация философской концепции баланса
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-gradient-to-br from-primary/40 via-background/60 to-secondary/40 rounded-lg flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-float" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-secondary/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/30 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
                      </div>
                      <div className="relative z-10 text-center">
                        <Icon name="Scale" className="text-primary mx-auto mb-4" size={64} />
                        <p className="text-xl font-medium text-muted-foreground">
                          Геометрическое воплощение гармонии
                        </p>
                        <p className="text-sm text-muted-foreground/70 mt-2 max-w-md">
                          Идеальный баланс формы и содержания, избегающий крайностей
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
                      <div className="p-4 bg-background/50 rounded-lg border border-border/50">
                        <p className="font-medium mb-2">Добродетель</p>
                        <p className="text-muted-foreground">Среднее между излишеством и недостатком</p>
                      </div>
                      <div className="p-4 bg-background/50 rounded-lg border border-border/50">
                        <p className="font-medium mb-2">Щедрость</p>
                        <p className="text-muted-foreground">Середина между расточительством и скупостью</p>
                      </div>
                      <div className="p-4 bg-background/50 rounded-lg border border-border/50">
                        <p className="font-medium mb-2">Мудрость</p>
                        <p className="text-muted-foreground">Искать золотую середину, избегая крайностей</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  {[
                    { icon: 'Shapes', title: 'Интерьер', desc: 'Геометрия пространства' },
                    { icon: 'Sparkles', title: 'Атмосфера', desc: 'Свет и форма' },
                    { icon: 'Eye', title: 'Детали', desc: 'Философия в мелочах' }
                  ].map((item, idx) => (
                    <Card key={idx} className="bg-card/30 backdrop-blur border-primary/20 hover:border-primary/40 transition-all">
                      <CardContent className="pt-6">
                        <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-4">
                          <Icon name={item.icon as any} className="text-primary" size={48} />
                        </div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'booking' && (
          <section className="py-20 animate-fade-in">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-5xl font-bold mb-4 text-center">Бронирование</h2>
                <p className="text-center text-muted-foreground mb-12 text-lg">
                  Присоединитесь к философскому путешествию
                </p>

                <Card className="bg-card/50 backdrop-blur border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon name="Calendar" className="text-primary" size={28} />
                      Забронировать столик
                    </CardTitle>
                    <CardDescription>
                      Заполните форму, и мы свяжемся с вами для подтверждения
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleBooking} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Имя</Label>
                        <Input
                          id="name"
                          placeholder="Ваше имя"
                          value={bookingData.name}
                          onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={bookingData.email}
                          onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                          required
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="date">Дата</Label>
                          <Input
                            id="date"
                            type="date"
                            value={bookingData.date}
                            onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="time">Время</Label>
                          <Input
                            id="time"
                            type="time"
                            value={bookingData.time}
                            onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="guests">Количество гостей</Label>
                        <Input
                          id="guests"
                          type="number"
                          min="1"
                          max="20"
                          placeholder="2"
                          value={bookingData.guests}
                          onChange={(e) => setBookingData({ ...bookingData, guests: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="notes">Особые пожелания</Label>
                        <Textarea
                          id="notes"
                          placeholder="Аллергии, предпочтения, особые случаи..."
                          value={bookingData.notes}
                          onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                          rows={4}
                        />
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        <Icon name="Check" className="mr-2" size={20} />
                        Забронировать столик
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'contacts' && (
          <section className="py-20 animate-fade-in">
            <div className="container mx-auto px-4">
              <h2 className="text-5xl font-bold mb-4 text-center">Контакты</h2>
              <p className="text-center text-muted-foreground mb-12 text-lg">
                Найдите нас в пространстве и времени
              </p>

              <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                <Card className="bg-card/50 backdrop-blur border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon name="MapPin" className="text-primary" size={28} />
                      Адрес
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Философский квартал<br />
                      ул. Аристотеля, 384<br />
                      Москва, Россия
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Недалеко от метро «Библиотека им. Ленина»
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon name="Clock" className="text-primary" size={28} />
                      Часы работы
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Понедельник - Четверг</span>
                      <span className="font-medium">12:00 - 23:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Пятница - Суббота</span>
                      <span className="font-medium">12:00 - 01:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Воскресенье</span>
                      <span className="font-medium">12:00 - 22:00</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon name="Phone" className="text-primary" size={28} />
                      Телефон
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">+7 (495) 384-322-0</p>
                    <p className="text-sm text-muted-foreground">
                      Бронирование и вопросы
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon name="Mail" className="text-primary" size={28} />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">info@peripathos.ru</p>
                    <p className="text-sm text-muted-foreground">
                      Ответим в течение суток
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="max-w-4xl mx-auto mt-8">
                <Card className="bg-card/50 backdrop-blur border-primary/20">
                  <CardContent className="pt-6">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Icon name="Map" className="text-primary mx-auto mb-3" size={48} />
                        <p className="text-muted-foreground">Карта местоположения</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="border-t border-border/50 mt-20 py-12 bg-background/50 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                περίπατος
              </h3>
              <p className="text-sm text-muted-foreground">
                Философский опыт через кулинарию
              </p>
            </div>
            <div className="flex gap-6">
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Twitter" size={20} />
              </Button>
            </div>
          </div>
          <Separator className="my-6 bg-border/50" />
          <p className="text-center text-sm text-muted-foreground">
            © 2024 περίπατος. Все права защищены. Философия вкуса.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;