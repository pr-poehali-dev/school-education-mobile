import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const programs = [
    {
      title: "Математика",
      description: "Углубленное изучение алгебры и геометрии",
      duration: "2 года",
      age: "12-16 лет",
      price: "5000₽/мес"
    },
    {
      title: "Физика",
      description: "Экспериментальная физика и подготовка к олимпиадам",
      duration: "1,5 года",
      age: "14-18 лет",
      price: "4500₽/мес"
    },
    {
      title: "Программирование",
      description: "Основы программирования и создание проектов",
      duration: "2,5 года",
      age: "10-17 лет",
      price: "6000₽/мес"
    }
  ];

  const teachers = [
    {
      name: "Анна Петрова",
      subject: "Математика",
      experience: "15 лет",
      education: "МГУ, кандидат наук"
    },
    {
      name: "Михаил Сидоров",
      subject: "Физика",
      experience: "12 лет",
      education: "МФТИ, доктор наук"
    },
    {
      name: "Елена Козлова",
      subject: "Программирование",
      experience: "8 лет",
      education: "ВШЭ, магистр IT"
    }
  ];

  const schedule = [
    { day: "Понедельник", time: "16:00-18:00", subject: "Математика" },
    { day: "Вторник", time: "17:00-19:00", subject: "Физика" },
    { day: "Среда", time: "16:30-18:30", subject: "Программирование" },
    { day: "Четверг", time: "16:00-18:00", subject: "Математика" },
    { day: "Пятница", time: "17:00-19:00", subject: "Физика" }
  ];

  const reviews = [
    {
      name: "Мария Иванова",
      role: "Родитель",
      text: "Отличная школа! Мой сын значительно улучшил знания по математике.",
      rating: 5
    },
    {
      name: "Александр",
      role: "Ученик",
      text: "Преподаватели объясняют сложные темы простым языком.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary/10 to-primary/5 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-merriweather text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Академия Знаний
          </h1>
          <p className="font-open-sans text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Качественное образование для детей и подростков. Развиваем таланты и готовим к успешному будущему.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-open-sans font-medium">
              <Icon name="BookOpen" size={20} className="mr-2" />
              Записаться на обучение
            </Button>
            <Button variant="outline" size="lg" className="font-open-sans font-medium">
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-300/20 rounded-full blur-2xl"></div>
      </section>

      {/* Programs Section */}
      <section className="py-16 px-4" id="programs">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Образовательные программы
            </h2>
            <p className="font-open-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Выберите направление обучения для вашего ребенка
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="font-merriweather text-xl">{program.title}</CardTitle>
                    <Icon name="GraduationCap" className="text-primary" size={24} />
                  </div>
                  <CardDescription className="font-open-sans">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-open-sans text-sm text-gray-500">Длительность:</span>
                      <Badge variant="secondary">{program.duration}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-open-sans text-sm text-gray-500">Возраст:</span>
                      <Badge variant="outline">{program.age}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-open-sans text-sm text-gray-500">Стоимость:</span>
                      <Badge className="bg-primary">{program.price}</Badge>
                    </div>
                  </div>
                  <Button className="w-full mt-4 font-open-sans" variant="outline">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="py-16 px-4 bg-gray-50" id="teachers">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Команда преподавателей
            </h2>
            <p className="font-open-sans text-lg text-gray-600">
              Опытные педагоги с высшим образованием
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachers.map((teacher, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name="User" size={32} className="text-primary" />
                  </div>
                  <CardTitle className="font-merriweather text-xl">{teacher.name}</CardTitle>
                  <CardDescription className="font-open-sans">
                    Преподаватель {teacher.subject}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm font-open-sans text-gray-600">
                    <p><strong>Опыт:</strong> {teacher.experience}</p>
                    <p><strong>Образование:</strong> {teacher.education}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 px-4" id="schedule">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Расписание занятий
            </h2>
            <p className="font-open-sans text-lg text-gray-600">
              Удобное время для обучения
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="font-merriweather flex items-center">
                <Icon name="Calendar" size={24} className="mr-2 text-primary" />
                Еженедельное расписание
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gray-50">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span className="font-open-sans font-medium">{item.day}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="font-open-sans">{item.time}</span>
                      <Badge variant="outline">{item.subject}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 px-4 bg-gray-50" id="certificates">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Документы и сертификаты
            </h2>
            <p className="font-open-sans text-lg text-gray-600">
              Официальные документы об образовании
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Award" size={32} className="text-primary" />
              </div>
              <h3 className="font-merriweather text-xl font-semibold mb-2">Лицензия</h3>
              <p className="font-open-sans text-gray-600 text-center">
                Лицензия на образовательную деятельность
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="FileText" size={32} className="text-primary" />
              </div>
              <h3 className="font-merriweather text-xl font-semibold mb-2">Сертификаты</h3>
              <p className="font-open-sans text-gray-600 text-center">
                Сертификаты о прохождении курсов
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Shield" size={32} className="text-primary" />
              </div>
              <h3 className="font-merriweather text-xl font-semibold mb-2">Аккредитация</h3>
              <p className="font-open-sans text-gray-600 text-center">
                Государственная аккредитация программ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4" id="reviews">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Отзывы учеников и родителей
            </h2>
            <p className="font-open-sans text-lg text-gray-600">
              Что говорят о нашей школе
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="font-merriweather text-lg">{review.name}</CardTitle>
                      <CardDescription className="font-open-sans">{review.role}</CardDescription>
                    </div>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-open-sans text-gray-600 italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-900 text-white" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-merriweather text-3xl md:text-4xl font-bold mb-4">
            Контактная информация
          </h2>
          <p className="font-open-sans text-lg text-gray-300 mb-8">
            Свяжитесь с нами для записи на обучение
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Icon name="Phone" size={32} className="text-primary mb-4" />
              <h3 className="font-merriweather text-xl font-semibold mb-2">Телефон</h3>
              <p className="font-open-sans text-gray-300">+7 (495) 123-45-67</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Icon name="Mail" size={32} className="text-primary mb-4" />
              <h3 className="font-merriweather text-xl font-semibold mb-2">Email</h3>
              <p className="font-open-sans text-gray-300">info@akademia-znaniy.ru</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Icon name="MapPin" size={32} className="text-primary mb-4" />
              <h3 className="font-merriweather text-xl font-semibold mb-2">Адрес</h3>
              <p className="font-open-sans text-gray-300">г. Москва, ул. Ленина, д. 1</p>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-open-sans font-medium">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Записаться на консультацию
            </Button>
            <Button variant="outline" size="lg" className="font-open-sans font-medium border-gray-600 text-white hover:bg-gray-800">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать брошюру
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;