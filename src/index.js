import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'Components/App';
import './index.css';

// Эта строка создает корневой элемент для  React-приложения.
// Находит элемент с идентификатором "root" на веб - странице.Корневой элемент используется для рендеринга всего  приложения React.
// .render(: Этот метод начинает процесс рендеринга внутри корневого элемента.
// Метод.render() принимает JSX - код(JavaScript XML) внутри себя и рендерит его в корневой элемент.
// React.StrictMode Это компонент-обертка вокруг  приложения.
// предоставляет дополнительные инструменты и предупреждения для помощи в обнаружении потенциальных проблем в  коде.
// Он оборачивает  приложение и его дочерние компоненты.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
