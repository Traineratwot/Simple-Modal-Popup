# Simple-modal-popup

Эта библиотек предоставит вам возможность легок создавать свои всплывающие окна (далее ВО).
Итак как этим пользоваться? <br>
1) подключаем jquery<br>
2) подключаем 2 файла библиотеки SMP.js b SMP.css<br>
3)

```html
<head>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<link rel="stylesheet" href="/SMP.css">
	<script src="/SMP.js"></script>
</head>
<input id="fef" type="button" value="Открыть Окно" onclick="modal.open('AnyValue')">
<p><input class="no" type="button" value="нет"></p>

<body>
	<script defer>
        var template = {}
                // в template.pattern записываем свой шаблон для ВО в фигурных скобках пишем имя переменной если это нужно 
                /*в template.action добавляем события в этом ВО в качестве ключа испоьзуется селектор JQ на этот элемент будет наложено событие
                в качестве значения устанавливае объект с двумя свойствами event - название события и функция то что будет исполняться при срабатывнии события
                в функцию будет передано 3 переменные в указанном порядке
                1) event это объект типа event в который добавлео this (как onclik="func(this)")
                2) self это объект класса SMP тоесть объект самого ВО
                3) AnyValue это ваша кастомная переменная делайте с ней все что хотите она добавляется в SMP при вызове open("AnyValue")
                */
		template.pattern = `
		<p>Я {t}?</p>
		<p><input id="yes" type="button" value="{h}"></p>
		<p><input class="no" type="button" value="{zzzz}"></p>
        `;
		template.action = {
			//{selector:{event,function}}
			"#yes": {
				event: "click touch", function: (event, self, AnyValue) => {
					console.log(event.this)
				}
			},
			".no": {
				event: "click touch", function: (event, self, AnyValue) => {
					console.log(event, self, AnyValue); self.close()
				}
			}
        };
        /*
        теперь мы можем создать объект класса SMP с НЕобязательными параметрами
        1) объект temolate
        2) объект со значениями ваших перременных в template.pattern {t}
        3) объект option здесь вы можете кастомизировать фон и ВО
        option.popup принимает два совйства css и offset как в JQ
         (поумолчанию ВО появляется в центре со полупрозрачнмы тёмным фоном)
        
        Теперь у нас есть объект modal класса SMP в нем есть 2 оcновных метода
        1) modal.open() Необязательные параметры такиеже как и в конструкторе кроме первого 
        2) modal.close()
        
        Об остальном ва лучше узнать из кода самой библиотеки )
        */
       
		var modal = new SMP(template, { t: 'Test', h: "I am CodeGod", zzzz: 1342342342345325 }, {
			background: {
				css: {
					"background-color": "#66666656",
				},
			},
			popup: {
				css: {
					"background-color": "#4545fd"
				}
			}
		});
	</script>
</body>

</html>
```
