import React from 'react';
import '@docsearch/css'; // Подключение стилей DocSearch
import { DocSearch } from '@docsearch/react';

function SearchBar() {
  return (
    <DocSearch
      appId="C87UUZ1F4U"
      //apiKey="8bc0c1b166a56875b0c3dd07534b2fd5"
      apiKey="25e5f33cbc9f28a800231ca539022a9a"
      indexName="mes-onrender"
    />
  );
}

export default SearchBar;

//Если надо скрыть поиск - юзаем нижний код вместо верхнего!
// import React from 'react';
// import {useEffect} from 'react';

// function SearchBar() {
//   useEffect(() => {
//     // Пример кода для скрытия элемента
//     const searchButton = document.querySelector('.DocSearch-Button');
//     if (searchButton) {
//       searchButton.style.display = 'none';
//     }
//   }, []);

//   return null;
// }

// export default SearchBar;
