# Google Translate Clon Backend

Este repositorio contiene el backend del proyecto **Google Translate Clon**, basado en el curso de **React** de **@midudev**. El objetivo principal de este proyecto es aprender a utilizar **TypeScript**, **Node.js**, **Express** y la **API de OpenAI** para crear una aplicación de traducción funcional.

Este backend se encarga de gestionar las traducciones mediante la API de OpenAI, proporcionando un servicio escalable y eficiente.

## Características

- Traducción en **9 idiomas** distintos:
  - Español (es)
  - Inglés (en)
  - Francés (fr)
  - Alemán (de)
  - Italiano (it)
  - Portugués (pt)
  - Ruso (ru)
  - Japonés (ja)
  - Chino (zh)

- **Integración con la API de OpenAI** para realizar las traducciones de manera automática.
- **Cors habilitado** para permitir solicitudes desde dominios externos.
- **Futuro**: Integración con **Redis** para almacenar traducciones recurrentes y optimizar el uso de la API.
- **Futuro**: Uso de **MySQL** para almacenar logs de traducciones y reducir costos.
- **Futuro**: Implementación de **express-rate-limit** para limitar la cantidad de solicitudes por usuario.

## Tecnologías Usadas

- **Node.js**: Entorno de ejecución de JavaScript para el servidor.
- **Express**: Framework minimalista y flexible para la creación de aplicaciones web y API en Node.js.
- **OpenAI API**: API utilizada para realizar las traducciones.
- **Cors**: Middleware para gestionar solicitudes entre diferentes dominios (CORS).
- **Biome**: Linter configurado para mantener un código limpio y consistente.
- **Jest** (futuro): Planeado para agregar pruebas unitarias y de integración.

## Instalación

Para configurar y ejecutar este proyecto en tu entorno local, sigue estos pasos:

1. Clona este repositorio:

  ```bash
  git clone https://github.com/PaoloHerrera/Google-Translate-Clon-Backend.git
  cd Google-Translate-Clon-Backend
  ```

2. Instala las dependencias

  ```bash
  npm install
  ```

3. Crea un archivo .env en la raíz del proyecto con la siguiente variable de entorno:

  ```bash
  OPENAI_API_KEY=<tu_key_de_traduccion>
  ```

4. Ejecuta el proyecto en modo desarrollo:

  ```bash
  npm start
  ```

## Futuro

- Seguridad: Mejorar la seguridad del backend mediante middlewares adicionales, como la validación de entradas y protección contra ataques comunes.
- Redis: Implementar Redis para almacenar en caché las traducciones frecuentes, mejorando el rendimiento y reduciendo costos.
- MySQL: Utilizar MySQL para almacenar logs de traducciones, lo que permitirá un análisis más detallado del uso de la aplicación y mejorará la eficiencia.
- Express-rate-limit: Limitar las solicitudes por parte de los usuarios para evitar el abuso del servicio.
- Pruebas: Implementar pruebas unitarias y de integración usando Jest.
- Despliegue: Realizar el despliegue del backend en un entorno de producción (por ejemplo, Heroku, AWS, etc.).

## Desafíos y Aprendizaje

- Este es mi primer proyecto usando TypeScript. Durante el proceso, aprendí a trabajar con tipos, interfaces y la integración con una API de traducción.
- Manejo de la API de OpenAI: La integración con la API de OpenAI fue un desafío técnico interesante, permitiéndome familiarizarme con su uso y optimización en un entorno backend.
- Middleware y Seguridad: Aprendí a trabajar con middlewares como cors y a planificar la implementación de seguridad adicional en el futuro.

## Observaciones

- Este proyecto es principalmente un ejercicio personal para aprender nuevas tecnologías y mejorar mis habilidades en el desarrollo backend.
- Está basado en el proyecto de clonación de Google Translate del curso de React de @midudev, con algunas mejoras y adiciones a nivel de backend.
  
## Licencia

Este proyecto está bajo la **MIT License**. Puedes ver los detalles completos de la licencia en el archivo [LICENSE](./LICENSE).

La MIT License permite la reutilización del código de forma gratuita, siempre que se incluya una copia del aviso de la licencia y la renuncia de responsabilidad en cualquier distribución del código. Para más información sobre esta licencia, consulta el archivo LICENSE.
