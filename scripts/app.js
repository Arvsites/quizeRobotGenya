const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");

//Класс, который представляет сам тест
class Quiz
{	
	constructor(type, questions, results)
	{
		var audio = new Audio('greeting.mp3');
		audio.play();
		//Тип теста: 1 - классический тест с правильными ответами, 2 - тест без правильных ответов
		this.type = type;
		//Массив с вопросами
		this.questions = questions;
		
		//Массив с возможными результатами
		this.results = results;

		//Количество набранных очков
		this.score = 0;

		//Номер результата из массива
		this.result = 0;

		//Номер текущего вопроса
		this.current = 0;
		
		this.score1=0;
	}

	Click(index)
	{
		//Добавляем очки
		let value = this.questions[this.current].Click(index);
		this.score += value;

		let correct = -1;

		//Если было добавлено хотя одно очко, то считаем, что ответ верный
		if(value >= 1)
		{
			correct = index;
		}
		else
		{
			//Иначе ищем, какой ответ может быть правильным
			for(let i = 0; i < this.questions[this.current].answers.length; i++)
			{
				if(this.questions[this.current].answers[i].value >= 1)
				{
					correct = i;
					break;
				}
			}
		}

		this.Next();

		return correct;
	}

	//Переход к следующему вопросу
	Next()
	{
		if(quiz.score==10)
		{
			quiz.score=quiz.score-10;
			this.current=0;
			this.score1=0;
		}
		if(quiz.score==20)
		{
			quiz.score=quiz.score-20;
			this.current=5;
			this.score1=0;
		}
		if(quiz.score==30)
		{
			quiz.score=quiz.score-30;
			this.current=10;
			this.score1=0;
		}
		if(quiz.score==40)
		{
			quiz.score=quiz.score-40;
			this.current=15;
			this.score1=0;
		}
		this.current++;
		this.score1++;
		if(this.score1 >= 6) 
		{	
			this.current=21;
			this.score++;
			this.End();
		}
	}

	//Если вопросы кончились, этот метод проверит, какой результат получил пользователь
	End()
	{
		for(let i = 0; i < this.results.length; i++)
		{
			if(this.results[i].Check(this.score))
			{
				this.result = i;
			}
		}
	}
} 

//Класс, представляющий вопрос
class Question 
{
	constructor(text, answers)
	{
		this.text = text; 
		this.answers = answers; 
	}

	Click(index) 
	{
		return this.answers[index].value; 
	}
}

//Класс, представляющий ответ
class Answer 
{
	constructor(text, value) 
	{
		this.text = text; 
		this.value = value; 
	}
}

//Класс, представляющий результат
class Result 
{
	constructor(text, value)
	{
		this.text = text;
		this.value = value;
	}

	//Этот метод проверяет, достаточно ли очков набрал пользователь
	Check(value)
	{
		if(this.value <= value)
		{
			return true;
		}
		else 
		{
			return false;
		}
	}
}

//Массив с результатами
const results = 
[
	new Result("Вам многому нужно научиться", 0),
	new Result("Вы уже неплохо разбираетесь", 2),
	new Result("Ваш уровень выше среднего", 4),
	new Result("Вы в совершенстве знаете тему", 6)
];

//Массив с вопросами
const questions = 
[
	new Question("Сколько тебе лет?", 
	[
		new Answer("7-10", 10),
		new Answer("11-13", 20),
		new Answer("14-18", 30),
        new Answer("Более 18", 40)
	]),	
	//1
	new Question("Как можно обратиться к Уполномоченному по правам ребёнка в Челябинской области?", 
	[
		new Answer("Социальная сеть «Вконтакте»", 0),
		new Answer("Официальный сайт", 0),
		new Answer("Робот Женя", 0),
		new Answer("Все перечисленные варианты", 1)
	]),

	new Question("Какое самое главное право ребенка?", 
	[
		new Answer("Право на отдых", 0),
		new Answer("Право на жизнь", 1),
		new Answer("Право на развитие", 0),
		new Answer("Право на участие", 0)
	]),

	new Question("Когда празднуется Международный день защиты детей?", 
	[
		new Answer("1 сентября", 0),
		new Answer("15 октября", 0),
		new Answer("7 февраля", 0),
		new Answer("1 июня", 1)
	]),

	new Question("Куда нужно обратиться, если в школе украли телефон?", 
	[
		new Answer("К старшеклассникам", 0),
		new Answer("К директору", 0),
		new Answer("В полицию", 1),
		new Answer("К охраннику", 0)
	]),

	new Question("До какого возраста человек в России считается ребенком?", 
	[
		new Answer("До 14 лет", 0),
		new Answer("До 16 лет",0),
		new Answer("До 18 лет", 1),
		new Answer("По решению родителей", 0)
	]),
	//2
	new Question("Как можно обратиться к Уполномоченному по правам ребёнка в Челябинской области?", 
	[
		new Answer("Социальная сеть «Вконтакте»", 0),
		new Answer("Официальный сайт", 0),
		new Answer("Робот Женя", 0),
		new Answer("Все перечисленные варианты", 1)
	]),

	new Question("Со скольких лет ребенок наделяется правами?", 
	[
		new Answer("С рождения", 1),
		new Answer("С 7 лет", 0),
		new Answer("С 14 лет", 0),
		new Answer("С 18 лет", 0)
	]),

	new Question("Кто несет основную ответственность за ребенка?", 
	[
		new Answer("Школа", 0),
		new Answer("Родители", 1),
		new Answer("Государство ", 0),
		new Answer("Суд", 0)
	]),

	new Question("Где ребенок имеет право свободно выражать свое мнение?", 
	[
		new Answer("В компании друзей", 0),
		new Answer("В семье", 0),
		new Answer("Во всех сферах жизни", 1),
		new Answer("Нигде", 0)
	]),

	new Question("Кто относится к законным представителям ребенка?", 
	[
		new Answer("Родители", 1),
		new Answer("Государство",0),
		new Answer("Полиция", 0),
		new Answer("Школа", 0)
	]),
	//3	
	new Question("Как можно обратиться к Уполномоченному по правам ребёнка в Челябинской области?", 
	[
		new Answer("Социальная сеть «Вконтакте»", 0),
		new Answer("Официальный сайт", 0),
		new Answer("Робот Женя", 0),
		new Answer("Все перечисленные варианты", 1)
	]),

	new Question("От каких слов происходит термин омбудсмен?", 
	[
		new Answer("«закон», «поручение» ", 0),
		new Answer("«полномочие», «поручение» ", 1),
		new Answer("«права», «защита» ", 0),
		new Answer("«социум», «помощь» ", 0)
	]),

	new Question("В каком возрасте дети имеют право самостоятельно обращаться в суд?", 
	[
		new Answer("В 14 лет", 1),
		new Answer("В 16 лет", 0),
		new Answer("В 18 лет", 0),
		new Answer("Не имеют право", 0)
	]),

	new Question("Кто на данное время является уполномоченным по правам ребенка в Российской Федерации?", 
	[
		new Answer("Его нет ", 0),
		new Answer("Алексей Иванович Головань ",0),
		new Answer("Павел Алексеевич Астахов ", 0),
		new Answer("Мария Алексеевна Львова-Белова", 1)
	]),

	new Question("Какой международный документ гарантирует права и свободы детей?", 
	[
		new Answer("Конституция РФ", 0),
		new Answer("Конвенция о правах ребенка", 1),
		new Answer("Закон о защите прав детей", 0),
		new Answer("Свод детских прав", 0)
	]),
    
    //4	
	new Question("Какие функции выполняет уполномоченный по правам ребенка?", 
	[
		new Answer("Правовое просвещение граждан", 0),
		new Answer("Бесплатная юридическая помощь заявителям", 0),
		new Answer("Взаимодействие с детьми по вопросам защиты их прав", 0),
		new Answer("Все перечисленные варианты", 1)
	]),

	new Question("Кто является детским уполномоченным в Челябинской области?", 
	[
		new Answer("Ирина Альфредовна Гехт", 0),
		new Answer("Евгения Викторовна Майорова", 1),
		new Answer("Юлия Александровна Сударенко", 0),
		new Answer("Маргарита Николаевна Павлова", 0)
	]),

	new Question("Кто может обратиться к уполномоченному по правам ребенка?", 
	[
		new Answer("Законный представитель ребенка", 0),
		new Answer("Ребенок", 0),
		new Answer("Общественный деятель", 0),
		new Answer("Все перечисленные варианты", 1)
	]),

	new Question("От каких слов происходит термин «омбудсмен»", 
	[
		new Answer("«закон», «поручение»", 0),
		new Answer("«социум», «помощь»",0),
		new Answer("«права», «защита»", 0),
		new Answer("«полномочие», «поручение»", 1)
	]),

	new Question("Со скольких лет ребенок наделяется правами?", 
	[
		new Answer("С рождения", 1),
		new Answer("С 7 лет", 0),
		new Answer("С 14 лет", 0),
		new Answer("С 18 лет", 0)
	])
];

//Сам тест
const quiz = new Quiz(1, questions, results);

Update();

//Обновление теста
function Update()
{
	//Проверяем, есть ли ещё вопросы
	if(quiz.current < quiz.questions.length) 
	{
		//Если есть, меняем вопрос в заголовке
		headElem.innerHTML = quiz.questions[quiz.current].text;

		//Удаляем старые варианты ответов
		buttonsElem.innerHTML = "";

		//Создаём кнопки для новых вариантов ответов
		for(let i = 0; i < quiz.questions[quiz.current].answers.length; i++)
		{
			let btn = document.createElement("button");
			btn.className = "button";

			btn.innerHTML = quiz.questions[quiz.current].answers[i].text;

			btn.setAttribute("index", i);

			buttonsElem.appendChild(btn);
		}
		
		//Выводим номер текущего вопроса
		pagesElem.innerHTML = (quiz.score1+1) + " / 6" ;

		//Вызываем функцию, которая прикрепит события к новым кнопкам
		Init();
	}
	else
	{
		//Если это конец, то выводим результат
		buttonsElem.innerHTML = "";
		headElem.innerHTML = quiz.results[quiz.result].text;
		quiz.score=quiz.score-1;
		pagesElem.innerHTML = "Баллы: " + quiz.score;
	}
}

function Init()
{
	//Находим все кнопки
	let btns = document.getElementsByClassName("button");

	for(let i = 0; i < btns.length; i++)
	{
		//Прикрепляем событие для каждой отдельной кнопки
		//При нажатии на кнопку будет вызываться функция Click()
		btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
	}
}

function Click(index) 
{
	//Получаем номер правильного ответа
	let correct = quiz.Click(index);

	//Находим все кнопки
	let btns = document.getElementsByClassName("button");

	//Делаем кнопки серыми
	for(let i = 0; i < btns.length; i++)
	{
		btns[i].className = "button button_passive";
	}

	//Если это тест с правильными ответами, то мы подсвечиваем правильный ответ зелёным, а неправильный - красным
	if(quiz.type == 1)
	{
		if(correct >= 0)
		{
			btns[correct].className = "button button_correct";
		}

		if(index != correct) 
		{
			btns[index].className = "button button_wrong";
		} 
	}
	else
	{
		//Иначе просто подсвечиваем зелёным ответ пользователя
		btns[index].className = "button button_correct";
	}

	//Ждём секунду и обновляем тест
	setTimeout(Update, 1000);
}
