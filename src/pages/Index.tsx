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

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Аналитические отчеты</CardTitle>
                <CardDescription>Подробный анализ медийного поля</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center h-64">
                <p className="text-muted-foreground">Раздел в разработке</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monitoring">
            <Card>
              <CardHeader>
                <CardTitle>Реал-тайм мониторинг</CardTitle>
                <CardDescription>Отслеживание публикаций в режиме реального времени</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center h-64">
                <p className="text-muted-foreground">Раздел в разработке</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sources">
            <Card>
              <CardHeader>
                <CardTitle>Управление источниками</CardTitle>
                <CardDescription>Настройка источников мониторинга</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center h-64">
                <p className="text-muted-foreground">Раздел в разработке</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;