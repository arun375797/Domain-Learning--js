# DOM Practice

Open `playground.html` in a browser and complete the tasks inside
`practice.js`.

### Core DOM Utilities
1. `getListItems()` — return an array of text content from all `<li>` elements.
2. `toggleHighlight(element)` — add/remove the `highlight` class on click.
3. `appendTodo(text)` — create a new `<li>` and append it to `#todo-list`.
4. `renderUserCard(user)` — create a card element from `{ name, email }`.
5. `wireForm()` — prevent default submit, read input value, and append a todo.

### Extra Interactions
- `toggleCheckbox(button, checkbox)` — clicking the button toggles a checkbox state.
- `preventRightClick(element)` — block context menus and show a custom message.
- `attachDelegatedHandler(list, selector, callback)` — event delegation helper.
- `countdownTimer(display, start)` — render countdown text every second then stop.
- `debouncedInput(input, callback, delay)` — emit input value changes using debouncing.
