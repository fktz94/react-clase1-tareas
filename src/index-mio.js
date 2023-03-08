/* eslint-disable react/react-in-jsx-scope */
// import { Welcome } from './components/Welcome.js';

// ReactDOM.render(<Welcome nombre="Julián" />, document.getElementById('react-app'));

// import { Button } from './components/Button.js';

// ReactDOM.render(
//   <Button onClick={event => alert(event.target.value)}>Hacé click!</Button>,
//   document.getElementById('react-app')
// );

// import { Page } from './components/Page.js';

// ReactDOM.render(
//   <Page
//     titulo="Mi diario"
//     articulos={[
//       { titulo: 'Dia uno', cuerpo: 'Hoy vi una ardilla.' },
//       { titulo: 'Dia dos', cuerpo: 'Hoy vi otra ardilla, pero capaz sea la misma.' },
//     ]}
//   />,
//   document.getElementById('react-app')
// );

// import { LikeButton } from './components/LikeButton.js';

// ReactDOM.render(<LikeButton />, document.getElementById('react-app'));

// import { ToDoList } from './components/ToDoList.js';

// ReactDOM.render(<ToDoList />, document.getElementById('react-app'));

import { Tarjeta, BlogPost } from './tarea/Tarea1.js'

import { MatchNombre, PasswordInput, ValidationInput } from './tarea/Tarea2.js'

// Tarea 1

ReactDOM.render(
  <Tarjeta
    nombre="Facundo Ortiz"
    titulo="Desarrollador web trainee"
    imagen="https://avatars.githubusercontent.com/u/106633973?v=4"
  />,
  document.getElementById('react-app'),
)

ReactDOM.render(
  <BlogPost
    titulo="Los de miga"
    parrafos={[
      'Tres sanguches de miga. Era tódo lo que había de provisión.\nA veces me pregunto cómo puede ser que no los entienda. Predilectos en los cumpleaños y en casi cualquier festejo. Todo el mundo los ama. Jamón, salame, incluso rúcula o roquefort. Hasta Pappo los inmortalizó en una canción.\nMe sirvo un vaso de coca, me como unas papitas y me dejo de preocupar.',
    ]}
    autor={{
      nombre: 'Facundo Ortiz',
      titulo: 'Desarrollador web trainee',
      imagen: 'https://avatars.githubusercontent.com/u/106633973?v=4',
    }}
  />,
  document.getElementById('react-app'),
)

// Tarea 2

ReactDOM.render(
  <MatchNombre nombre="Facundo" />,
  document.getElementById('react-app'),
)

ReactDOM.render(
  <PasswordInput minLength={8} type="password" />,
  document.getElementById('react-app'),
)

ReactDOM.render(
  <ValidationInput validation={(value) => value.length > 8} isPassword />,
  document.getElementById('react-app'),
)

ReactDOM.render(
  <ValidationInput
    validation={(value) => !value.match(' ')}
    isPassword={false}
  />,
  document.getElementById('react-app'),
)

ReactDOM.render(
  <ValidationInput
    validation={(value) =>
      value.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )
    }
    isPassword={false}
  />,
  document.getElementById('react-app'),
)

// Tarea 3
