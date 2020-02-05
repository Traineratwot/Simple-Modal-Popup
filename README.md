# Simple-modal-popup

```js
var template = {};
template.pattern = `
		<p>Я {t} {h}  {zzzz}</p>
		<p><input id="yes" type="button" value="Да"></p>
		<p><input class="no" type="button" value="нет"></p>
		`;
template.action = {
    //{selector:{event,function}}
    "#yes": {
        event: "click touch",
        function: (event, self, AnyValue) => {
            console.log(event, self, AnyValue);
        }
    },
    ".no": {
        event: "click touch",
        function: (event, self, AnyValue) => {
            console.log(event, self, AnyValue);
            self.close();
        }
    }
};
var modal = new SMP(
    template,
    { t: "Test", h: "I am CodeGod", zzzz: 1342342342345325 },
    {
        background: {
            css: {
                "background-color": "#66666656"
            }
        },
        popup: {
            css: {
                "background-color": "#4545fd"
            }
        }
    }
);
```
