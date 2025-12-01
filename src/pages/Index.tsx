import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Index = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const [realtimeEnabled, setRealtimeEnabled] = useState(true);

  const mockData = {
    totalMentions: 2847,
    positivePercent: 58,
    neutralPercent: 28,
    negativePercent: 14,
    sources: [
      { name: 'Федеральные СМИ', count: 892, change: '+12%' },
      { name: 'Региональные СМИ', count: 1245, change: '+8%' },
      { name: 'Telegram', count: 456, change: '+24%' },
      { name: 'VK', count: 254, change: '-3%' },
    ],
    topTopics: [
      { topic: 'Социальная поддержка', mentions: 456, sentiment: 'positive' },
      { topic: 'Инфраструктура', mentions: 389, sentiment: 'neutral' },
      { topic: 'Здравоохранение', mentions: 312, sentiment: 'positive' },
      { topic: 'ЖКХ', mentions: 287, sentiment: 'negative' },
      { topic: 'Образование', mentions: 245, sentiment: 'positive' },
    ],
    recentNews: [
      {
        id: 1,
        title: 'Открытие нового детского сада в центре города',
        source: 'Региональные вести',
        date: '2024-12-01',
        sentiment: 'positive',
        reach: '45K',
      },
      {
        id: 2,
        title: 'Губернатор провел встречу с предпринимателями',
        source: 'Деловой портал',
        date: '2024-12-01',
        sentiment: 'neutral',
        reach: '32K',
      },
      {
        id: 3,
        title: 'Жители района пожаловались на качество дорог',
        source: 'Городские новости',
        date: '2024-11-30',
        sentiment: 'negative',
        reach: '28K',
      },
    ],
    regionComparison: [
      { region: 'Ваш регион', score: 72, positive: 58, neutral: 28, negative: 14, trend: 'up' },
      { region: 'Московская область', score: 68, positive: 55, neutral: 30, negative: 15, trend: 'up' },
      { region: 'Санкт-Петербург', score: 75, positive: 62, neutral: 25, negative: 13, trend: 'up' },
      { region: 'Краснодарский край', score: 65, positive: 52, neutral: 32, negative: 16, trend: 'down' },
      { region: 'Татарстан', score: 78, positive: 65, neutral: 24, negative: 11, trend: 'up' },
    ],
    influencers: [
      { name: 'Иван Петров', platform: 'Telegram', followers: '245K', reach: '1.2M', sentiment: 'positive', activity: 87 },
      { name: 'Мария Сидорова', platform: 'VK', followers: '189K', reach: '890K', sentiment: 'neutral', activity: 72 },
      { name: 'Алексей Новиков', platform: 'Telegram', followers: '156K', reach: '780K', sentiment: 'negative', activity: 65 },
      { name: 'Елена Смирнова', platform: 'VK', followers: '134K', reach: '650K', sentiment: 'positive', activity: 58 },
    ],
    geographyData: [
      { city: 'Областной центр', mentions: 1245, sentiment: 'positive', lat: 55.75, lng: 37.61 },
      { city: 'Северный район', mentions: 456, sentiment: 'neutral', lat: 56.33, lng: 37.52 },
      { city: 'Южный район', mentions: 389, sentiment: 'negative', lat: 55.28, lng: 38.15 },
      { city: 'Западный район', mentions: 312, sentiment: 'positive', lat: 55.68, lng: 36.89 },
      { city: 'Восточный район', mentions: 245, sentiment: 'neutral', lat: 55.82, lng: 38.44 },
    ],
    wordCloud: [
      { word: 'развитие', count: 342, sentiment: 'positive' },
      { word: 'инфраструктура', count: 298, sentiment: 'neutral' },
      { word: 'поддержка', count: 276, sentiment: 'positive' },
      { word: 'проблема', count: 234, sentiment: 'negative' },
      { word: 'строительство', count: 198, sentiment: 'neutral' },
      { word: 'благоустройство', count: 187, sentiment: 'positive' },
      { word: 'ремонт', count: 165, sentiment: 'neutral' },
      { word: 'жалоба', count: 154, sentiment: 'negative' },
      { word: 'образование', count: 143, sentiment: 'positive' },
      { word: 'здравоохранение', count: 132, sentiment: 'neutral' },
      { word: 'транспорт', count: 121, sentiment: 'neutral' },
      { word: 'безопасность', count: 98, sentiment: 'positive' },
    ],
    trendForecast: [
      { topic: 'Социальная поддержка', current: 456, forecast: 520, direction: 'up', probability: 78 },
      { topic: 'ЖКХ', current: 287, forecast: 340, direction: 'up', probability: 85 },
      { topic: 'Здравоохранение', current: 312, forecast: 295, direction: 'down', probability: 62 },
      { topic: 'Инфраструктура', current: 389, forecast: 410, direction: 'up', probability: 71 },
    ],
    problemComments: [
      {
        id: 1,
        author: 'Пользователь VK',
        avatar: '👤',
        platform: 'VK',
        officialAccount: '@governor_region',
        text: 'Третий месяц не могут отремонтировать дорогу! Когда уже наведут порядок?!',
        topic: 'Дороги и ЖКХ',
        likes: 234,
        date: '2024-12-01',
        sentiment: 'angry',
      },
      {
        id: 2,
        author: 'Житель города',
        avatar: '👥',
        platform: 'Telegram',
        officialAccount: '@gov_official',
        text: 'В поликлинике запись к врачу на месяц вперед. Это ненормально!',
        topic: 'Здравоохранение',
        likes: 189,
        date: '2024-11-30',
        sentiment: 'angry',
      },
      {
        id: 3,
        author: 'Анна М.',
        avatar: '👩',
        platform: 'VK',
        officialAccount: '@mayor_city',
        text: 'Обещали детский сад в нашем районе ещё год назад. Где результат??',
        topic: 'Образование',
        likes: 156,
        date: '2024-11-30',
        sentiment: 'angry',
      },
      {
        id: 4,
        author: 'Сергей П.',
        avatar: '👨',
        platform: 'Telegram',
        officialAccount: '@governor_region',
        text: 'Тарифы ЖКХ растут, а качество услуг падает. Кто за это ответит?',
        topic: 'ЖКХ',
        likes: 298,
        date: '2024-11-29',
        sentiment: 'angry',
      },
    ],
    analyticsData: {
      hourlyActivity: [
        { hour: '00:00', mentions: 45 },
        { hour: '03:00', mentions: 23 },
        { hour: '06:00', mentions: 67 },
        { hour: '09:00', mentions: 234 },
        { hour: '12:00', mentions: 456 },
        { hour: '15:00', mentions: 389 },
        { hour: '18:00', mentions: 512 },
        { hour: '21:00', mentions: 298 },
      ],
      topAuthors: [
        { name: 'Александр Кузнецов', publications: 45, reach: '234K', sentiment: 'positive' },
        { name: 'Екатерина Волкова', publications: 38, reach: '189K', sentiment: 'neutral' },
        { name: 'Дмитрий Орлов', publications: 32, reach: '156K', sentiment: 'negative' },
        { name: 'Ольга Зайцева', publications: 28, reach: '142K', sentiment: 'positive' },
      ],
      mediaTypes: [
        { type: 'Текст', count: 1456, percent: 51 },
        { type: 'Фото', count: 892, percent: 31 },
        { type: 'Видео', count: 356, percent: 13 },
        { type: 'Инфографика', count: 143, percent: 5 },
      ],
    },
    liveStream: [
      {
        id: 1,
        timestamp: '14:23',
        source: 'Telegram',
        title: 'Новый проект благоустройства запущен',
        sentiment: 'positive',
        reach: 12400,
      },
      {
        id: 2,
        timestamp: '14:18',
        source: 'VK',
        title: 'Жители обсуждают повышение тарифов',
        sentiment: 'negative',
        reach: 8900,
      },
      {
        id: 3,
        timestamp: '14:12',
        source: 'Региональные СМИ',
        title: 'Открытие нового спортивного комплекса',
        sentiment: 'positive',
        reach: 15600,
      },
      {
        id: 4,
        timestamp: '14:05',
        source: 'Telegram',
        title: 'Губернатор прокомментировал ситуацию',
        sentiment: 'neutral',
        reach: 23400,
      },
      {
        id: 5,
        timestamp: '13:58',
        source: 'VK',
        title: 'Жалобы на работу общественного транспорта',
        sentiment: 'negative',
        reach: 6700,
      },
    ],
    monitoredSources: [
      { 
        id: 1,
        name: 'РИА Новости',
        type: 'Федеральные СМИ',
        url: 'ria.ru',
        status: 'active',
        lastUpdate: '2 мин назад',
        todayMentions: 45,
      },
      {
        id: 2,
        name: 'Региональные вести',
        type: 'Региональные СМИ',
        url: 'region-news.ru',
        status: 'active',
        lastUpdate: '5 мин назад',
        todayMentions: 123,
      },
      {
        id: 3,
        name: '@governor_region',
        type: 'Telegram',
        url: 't.me/governor_region',
        status: 'active',
        lastUpdate: '1 мин назад',
        todayMentions: 89,
      },
      {
        id: 4,
        name: 'Губернатор региона',
        type: 'VK',
        url: 'vk.com/governor',
        status: 'active',
        lastUpdate: '8 мин назад',
        todayMentions: 67,
      },
      {
        id: 5,
        name: 'Городской портал',
        type: 'Интернет-издание',
        url: 'city-portal.ru',
        status: 'warning',
        lastUpdate: '45 мин назад',
        todayMentions: 34,
      },
      {
        id: 6,
        name: 'Местные новости',
        type: 'Региональные СМИ',
        url: 'local-news.ru',
        status: 'error',
        lastUpdate: '3 ч назад',
        todayMentions: 0,
      },
    ],
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return 'bg-success text-success-foreground';
      case 'negative':
        return 'bg-destructive text-destructive-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getSentimentLabel = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return 'Позитив';
      case 'negative':
        return 'Негатив';
      default:
        return 'Нейтрально';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Icon name="BarChart3" className="text-primary" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Медиамониторинг</h1>
                <p className="text-sm text-muted-foreground">Система анализа медиаполя региона</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="day">Сегодня</SelectItem>
                  <SelectItem value="week">Неделя</SelectItem>
                  <SelectItem value="month">Месяц</SelectItem>
                  <SelectItem value="quarter">Квартал</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Icon name="Bell" size={18} />
              </Button>
              <Button variant="outline" size="icon">
                <Icon name="Settings" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 animate-fade-in">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Всего упоминаний</CardDescription>
              <CardTitle className="text-3xl font-bold">{mockData.totalMentions.toLocaleString()}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-success text-sm font-medium">
                <Icon name="TrendingUp" size={16} />
                <span>+15% к прошлой неделе</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Позитивные</CardDescription>
              <CardTitle className="text-3xl font-bold text-success">{mockData.positivePercent}%</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={mockData.positivePercent} className="h-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Нейтральные</CardDescription>
              <CardTitle className="text-3xl font-bold text-muted-foreground">{mockData.neutralPercent}%</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={mockData.neutralPercent} className="h-2 [&>div]:bg-muted-foreground" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Негативные</CardDescription>
              <CardTitle className="text-3xl font-bold text-destructive">{mockData.negativePercent}%</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={mockData.negativePercent} className="h-2 [&>div]:bg-destructive" />
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="bg-white border border-border">
            <TabsTrigger value="dashboard" className="gap-2">
              <Icon name="LayoutDashboard" size={16} />
              Дашборд
            </TabsTrigger>
            <TabsTrigger value="analytics" className="gap-2">
              <Icon name="TrendingUp" size={16} />
              Аналитика
            </TabsTrigger>
            <TabsTrigger value="monitoring" className="gap-2">
              <Icon name="Radio" size={16} />
              Мониторинг
            </TabsTrigger>
            <TabsTrigger value="sources" className="gap-2">
              <Icon name="Globe" size={16} />
              Источники
            </TabsTrigger>
            <TabsTrigger value="regions" className="gap-2">
              <Icon name="Map" size={16} />
              Регионы
            </TabsTrigger>
            <TabsTrigger value="influencers" className="gap-2">
              <Icon name="Users" size={16} />
              Авторы
            </TabsTrigger>
            <TabsTrigger value="problems" className="gap-2">
              <Icon name="AlertCircle" size={16} />
              Проблемы
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Sentiment Chart */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Динамика тональности</CardTitle>
                  <CardDescription>Изменение настроений в медиаполе за период</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-success" />
                          <span className="text-sm text-muted-foreground">Позитивные</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-muted" />
                          <span className="text-sm text-muted-foreground">Нейтральные</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-destructive" />
                          <span className="text-sm text-muted-foreground">Негативные</span>
                        </div>
                      </div>
                    </div>
                    <div className="h-[200px] flex items-end justify-between gap-2">
                      {[65, 58, 62, 70, 68, 58, 60].map((value, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center gap-2">
                          <div className="w-full flex flex-col gap-1">
                            <div
                              className="w-full bg-success rounded-t"
                              style={{ height: `${value}px` }}
                            />
                            <div
                              className="w-full bg-muted"
                              style={{ height: `${(100 - value) * 0.4}px` }}
                            />
                            <div
                              className="w-full bg-destructive rounded-b"
                              style={{ height: `${(100 - value) * 0.2}px` }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'][index]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sources */}
              <Card>
                <CardHeader>
                  <CardTitle>Источники</CardTitle>
                  <CardDescription>Распределение по каналам</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockData.sources.map((source, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium">{source.name}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-muted-foreground">{source.count}</span>
                            <Badge
                              variant={source.change.startsWith('+') ? 'default' : 'secondary'}
                              className="text-xs"
                            >
                              {source.change}
                            </Badge>
                          </div>
                        </div>
                        <Progress
                          value={(source.count / mockData.totalMentions) * 100}
                          className="h-2"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Top Topics & Recent News */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Топ тем</CardTitle>
                  <CardDescription>Наиболее обсуждаемые темы</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mockData.topTopics.map((topic, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/50 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                            {index + 1}
                          </div>
                          <div>
                            <p className="font-medium text-sm">{topic.topic}</p>
                            <p className="text-xs text-muted-foreground">{topic.mentions} упоминаний</p>
                          </div>
                        </div>
                        <Badge className={getSentimentColor(topic.sentiment)}>
                          {getSentimentLabel(topic.sentiment)}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Последние публикации</CardTitle>
                  <CardDescription>Новые материалы в медиаполе</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockData.recentNews.map((news) => (
                      <div key={news.id} className="p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h4 className="font-medium text-sm leading-tight">{news.title}</h4>
                          <Badge className={getSentimentColor(news.sentiment)} variant="outline">
                            {getSentimentLabel(news.sentiment)}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{news.source}</span>
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1">
                              <Icon name="Eye" size={12} />
                              {news.reach}
                            </span>
                            <span>{news.date}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            {/* Hourly Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Активность по часам</CardTitle>
                <CardDescription>Распределение упоминаний в течение суток</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-end justify-between gap-3">
                  {mockData.analyticsData.hourlyActivity.map((item, index) => {
                    const maxValue = Math.max(...mockData.analyticsData.hourlyActivity.map(i => i.mentions));
                    const height = (item.mentions / maxValue) * 250;
                    return (
                      <div key={index} className="flex-1 flex flex-col items-center gap-2">
                        <div className="relative w-full group">
                          <div
                            className="w-full bg-primary rounded-t hover:bg-primary/80 transition-colors cursor-pointer"
                            style={{ height: `${height}px` }}
                          />
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-foreground text-background px-2 py-1 rounded text-xs whitespace-nowrap">
                            {item.mentions}
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground font-medium">{item.hour}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Top Authors & Media Types */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Топ авторов</CardTitle>
                  <CardDescription>Самые активные журналисты</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockData.analyticsData.topAuthors.map((author, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-accent/30 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                            {index + 1}
                          </div>
                          <div>
                            <p className="font-medium text-sm">{author.name}</p>
                            <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                              <span>{author.publications} публикаций</span>
                              <span className="flex items-center gap-1">
                                <Icon name="Eye" size={10} />
                                {author.reach}
                              </span>
                            </div>
                          </div>
                        </div>
                        <Badge className={getSentimentColor(author.sentiment)}>
                          {getSentimentLabel(author.sentiment)}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Типы контента</CardTitle>
                  <CardDescription>Распределение по форматам</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockData.analyticsData.mediaTypes.map((type, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Icon 
                              name={
                                type.type === 'Текст' ? 'FileText' :
                                type.type === 'Фото' ? 'Image' :
                                type.type === 'Видео' ? 'Video' :
                                'BarChart'
                              }
                              size={16}
                              className="text-primary"
                            />
                            <span className="font-medium text-sm">{type.type}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-muted-foreground">{type.count}</span>
                            <Badge variant="outline">{type.percent}%</Badge>
                          </div>
                        </div>
                        <Progress value={type.percent} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sentiment Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle>Детальная тональность</CardTitle>
                <CardDescription>Анализ настроений по источникам</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockData.sources.map((source, index) => (
                    <div key={index} className="p-4 rounded-lg border border-border">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold">{source.name}</h4>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">{source.count} упоминаний</span>
                          <Badge variant={source.change.startsWith('+') ? 'default' : 'secondary'}>
                            {source.change}
                          </Badge>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        <div>
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="text-muted-foreground">Позитив</span>
                            <span className="font-medium text-success">62%</span>
                          </div>
                          <Progress value={62} className="h-1.5" />
                        </div>
                        <div>
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="text-muted-foreground">Нейтрал</span>
                            <span className="font-medium text-muted-foreground">26%</span>
                          </div>
                          <Progress value={26} className="h-1.5 [&>div]:bg-muted-foreground" />
                        </div>
                        <div>
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="text-muted-foreground">Негатив</span>
                            <span className="font-medium text-destructive">12%</span>
                          </div>
                          <Progress value={12} className="h-1.5 [&>div]:bg-destructive" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monitoring" className="space-y-6">
            {/* Monitoring Controls */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Реал-тайм мониторинг</CardTitle>
                    <CardDescription>Отслеживание публикаций в режиме реального времени</CardDescription>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        realtimeEnabled ? 'bg-success animate-pulse' : 'bg-muted-foreground'
                      }`} />
                      <span className="text-sm text-muted-foreground">
                        {realtimeEnabled ? 'Активно' : 'Приостановлено'}
                      </span>
                    </div>
                    <Button 
                      variant={realtimeEnabled ? 'destructive' : 'default'}
                      size="sm"
                      onClick={() => setRealtimeEnabled(!realtimeEnabled)}
                    >
                      <Icon name={realtimeEnabled ? 'Pause' : 'Play'} size={14} className="mr-2" />
                      {realtimeEnabled ? 'Приостановить' : 'Запустить'}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockData.liveStream.map((item) => (
                    <div 
                      key={item.id} 
                      className="p-4 rounded-lg border border-border hover:bg-accent/30 transition-all animate-fade-in"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant="outline" className="text-xs">
                              {item.timestamp}
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              {item.source}
                            </Badge>
                            <Badge className={getSentimentColor(item.sentiment)}>
                              {getSentimentLabel(item.sentiment)}
                            </Badge>
                          </div>
                          <h4 className="font-medium text-sm mb-2">{item.title}</h4>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Icon name="Eye" size={12} />
                              {item.reach.toLocaleString()} просмотров
                            </span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Icon name="ExternalLink" size={14} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Real-time Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Упоминаний за час</CardDescription>
                  <CardTitle className="text-3xl font-bold">127</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-success text-sm font-medium">
                    <Icon name="TrendingUp" size={16} />
                    <span>+18% к прошлому часу</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Позитивных сейчас</CardDescription>
                  <CardTitle className="text-3xl font-bold text-success">74</CardTitle>
                </CardHeader>
                <CardContent>
                  <Progress value={58} className="h-2" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Негативных сейчас</CardDescription>
                  <CardTitle className="text-3xl font-bold text-destructive">18</CardTitle>
                </CardHeader>
                <CardContent>
                  <Progress value={14} className="h-2 [&>div]:bg-destructive" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Средний охват</CardDescription>
                  <CardTitle className="text-3xl font-bold">14.2K</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
                    <Icon name="Users" size={16} />
                    <span>на публикацию</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="sources" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Управление источниками</CardTitle>
                    <CardDescription>Настройка и мониторинг источников данных</CardDescription>
                  </div>
                  <Button>
                    <Icon name="Plus" size={16} className="mr-2" />
                    Добавить источник
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockData.monitoredSources.map((source) => {
                    const getStatusColor = (status: string) => {
                      switch (status) {
                        case 'active': return 'bg-success';
                        case 'warning': return 'bg-warning';
                        case 'error': return 'bg-destructive';
                        default: return 'bg-muted';
                      }
                    };

                    const getStatusLabel = (status: string) => {
                      switch (status) {
                        case 'active': return 'Активен';
                        case 'warning': return 'Предупреждение';
                        case 'error': return 'Ошибка';
                        default: return 'Неизвестно';
                      }
                    };

                    return (
                      <div 
                        key={source.id} 
                        className="p-4 rounded-lg border border-border hover:bg-accent/30 transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-4 flex-1">
                            <div className={`w-3 h-3 rounded-full mt-1 ${
                              source.status === 'active' ? 'animate-pulse' : ''
                            } ${getStatusColor(source.status)}`} />
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-semibold text-base">{source.name}</h4>
                                <Badge variant="outline" className="text-xs">
                                  {source.type}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">{source.url}</p>
                              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Icon name="Clock" size={12} />
                                  {source.lastUpdate}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Icon name="FileText" size={12} />
                                  {source.todayMentions} сегодня
                                </span>
                                <Badge 
                                  variant={source.status === 'active' ? 'default' : 'destructive'}
                                  className="text-xs"
                                >
                                  {getStatusLabel(source.status)}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon">
                              <Icon name="Settings" size={16} />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Icon name="Trash2" size={16} className="text-destructive" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Source Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Всего источников</CardDescription>
                  <CardTitle className="text-3xl font-bold">6</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-success text-sm font-medium">
                    <Icon name="Database" size={16} />
                    <span>5 активных</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Проблемных источников</CardDescription>
                  <CardTitle className="text-3xl font-bold text-warning">1</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-warning text-sm font-medium">
                    <Icon name="AlertTriangle" size={16} />
                    <span>Требует внимания</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Среднее время обновления</CardDescription>
                  <CardTitle className="text-3xl font-bold">8 мин</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
                    <Icon name="RefreshCw" size={16} />
                    <span>Автообновление</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Regional Comparison */}
          <TabsContent value="regions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Сравнение регионов</CardTitle>
                <CardDescription>Бенчмаркинг медийного имиджа субъектов РФ</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockData.regionComparison.map((region, index) => (
                    <div key={index} className="p-4 rounded-lg border border-border hover:bg-accent/30 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                            index === 0 ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'
                          } font-bold`}>
                            {index + 1}
                          </div>
                          <div>
                            <h4 className="font-semibold text-base">{region.region}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs text-muted-foreground">Индекс имиджа:</span>
                              <Badge variant={index === 0 ? 'default' : 'secondary'}>
                                {region.score}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon 
                            name={region.trend === 'up' ? 'TrendingUp' : 'TrendingDown'} 
                            className={region.trend === 'up' ? 'text-success' : 'text-destructive'}
                            size={20}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">Позитивные</div>
                          <div className="flex items-center gap-2">
                            <Progress value={region.positive} className="h-2" />
                            <span className="text-sm font-medium text-success">{region.positive}%</span>
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">Нейтральные</div>
                          <div className="flex items-center gap-2">
                            <Progress value={region.neutral} className="h-2 [&>div]:bg-muted-foreground" />
                            <span className="text-sm font-medium text-muted-foreground">{region.neutral}%</span>
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">Негативные</div>
                          <div className="flex items-center gap-2">
                            <Progress value={region.negative} className="h-2 [&>div]:bg-destructive" />
                            <span className="text-sm font-medium text-destructive">{region.negative}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Geography & Word Cloud */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Карта упоминаний</CardTitle>
                  <CardDescription>Географическое распределение публикаций</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mockData.geographyData.map((location, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-accent/30 transition-colors">
                        <div className="flex items-center gap-3">
                          <Icon name="MapPin" className="text-primary" size={18} />
                          <div>
                            <p className="font-medium text-sm">{location.city}</p>
                            <p className="text-xs text-muted-foreground">{location.mentions} упоминаний</p>
                          </div>
                        </div>
                        <Badge className={getSentimentColor(location.sentiment)} variant="outline">
                          {getSentimentLabel(location.sentiment)}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Облако тегов</CardTitle>
                  <CardDescription>Ключевые слова в медиаполе</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {mockData.wordCloud.map((word, index) => {
                      const size = Math.max(12, Math.min(24, word.count / 20));
                      return (
                        <Badge
                          key={index}
                          className={`${getSentimentColor(word.sentiment)} cursor-pointer hover:scale-110 transition-transform`}
                          style={{ fontSize: `${size}px`, padding: `${size / 3}px ${size / 2}px` }}
                        >
                          {word.word} <span className="text-xs opacity-70 ml-1">{word.count}</span>
                        </Badge>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Trend Forecast */}
            <Card>
              <CardHeader>
                <CardTitle>Прогнозирование трендов</CardTitle>
                <CardDescription>Предсказание развития тем в медиаполе</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockData.trendForecast.map((trend, index) => (
                    <div key={index} className="p-4 rounded-lg border border-border">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold">{trend.topic}</h4>
                        <Badge variant={trend.direction === 'up' ? 'default' : 'secondary'}>
                          <Icon 
                            name={trend.direction === 'up' ? 'TrendingUp' : 'TrendingDown'} 
                            size={14} 
                            className="mr-1"
                          />
                          {trend.probability}% вероятность
                        </Badge>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="flex-1">
                          <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-sm text-muted-foreground">Сейчас:</span>
                            <span className="text-2xl font-bold">{trend.current}</span>
                          </div>
                          <div className="flex items-baseline gap-2">
                            <span className="text-sm text-muted-foreground">Прогноз:</span>
                            <span className={`text-2xl font-bold ${
                              trend.direction === 'up' ? 'text-warning' : 'text-muted-foreground'
                            }`}>{trend.forecast}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-3xl font-bold ${
                            trend.direction === 'up' ? 'text-warning' : 'text-muted-foreground'
                          }`}>
                            {trend.direction === 'up' ? '+' : ''}{trend.forecast - trend.current}
                          </div>
                          <div className="text-xs text-muted-foreground">через месяц</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Influencers */}
          <TabsContent value="influencers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Влиятельные авторы</CardTitle>
                <CardDescription>Кто формирует повестку в медиаполе региона</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockData.influencers.map((influencer, index) => (
                    <div key={index} className="p-4 rounded-lg border border-border hover:bg-accent/30 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4 flex-1">
                          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-lg">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold text-base">{influencer.name}</h4>
                              <Badge variant="outline" className="text-xs">
                                {influencer.platform}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                              <span className="flex items-center gap-1">
                                <Icon name="Users" size={14} />
                                {influencer.followers}
                              </span>
                              <span className="flex items-center gap-1">
                                <Icon name="Eye" size={14} />
                                {influencer.reach}
                              </span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="flex-1">
                                <div className="text-xs text-muted-foreground mb-1">Активность</div>
                                <Progress value={influencer.activity} className="h-2" />
                              </div>
                              <Badge className={getSentimentColor(influencer.sentiment)}>
                                {getSentimentLabel(influencer.sentiment)}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Problem Comments */}
          <TabsContent value="problems" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Проблемные вопросы</CardTitle>
                <CardDescription>Негативные комментарии в соцсетях официальных аккаунтов властей</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockData.problemComments.map((comment) => (
                    <div key={comment.id} className="p-4 rounded-lg border-2 border-destructive/20 bg-destructive/5 hover:bg-destructive/10 transition-colors">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="text-3xl">{comment.avatar}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-sm">{comment.author}</span>
                            <Badge variant="outline" className="text-xs">{comment.platform}</Badge>
                            <Icon name="ArrowRight" size={12} className="text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{comment.officialAccount}</span>
                          </div>
                          <p className="text-sm text-foreground mb-3 leading-relaxed">{comment.text}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <Badge variant="destructive" className="text-xs">
                                <Icon name="Flame" size={12} className="mr-1" />
                                Гневный
                              </Badge>
                              <span className="flex items-center gap-1">
                                <Icon name="ThumbsUp" size={12} />
                                {comment.likes}
                              </span>
                              <span>{comment.date}</span>
                            </div>
                            <Badge variant="outline">{comment.topic}</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Problem Statistics */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Всего проблемных комментариев</CardDescription>
                  <CardTitle className="text-3xl font-bold text-destructive">437</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-destructive text-sm font-medium">
                    <Icon name="TrendingUp" size={16} />
                    <span>+23% за неделю</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Требуют реакции</CardDescription>
                  <CardTitle className="text-3xl font-bold text-warning">87</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-warning text-sm font-medium">
                    <Icon name="AlertTriangle" size={16} />
                    <span>Высокая активность</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Средний охват негатива</CardDescription>
                  <CardTitle className="text-3xl font-bold">12.4K</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
                    <Icon name="Users" size={16} />
                    <span>на комментарий</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;