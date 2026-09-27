window.SEMANA = {
  id: 'semana2',
  resumen: [
    { t: 'Diagrama de colaboración', d: 'Muestra los <b>objetos</b> que participan en un escenario, sus <b>enlaces</b> y los <b>mensajes numerados</b> (1, 1.1, 1.2…). En UML 2 se llama <i>diagrama de comunicación</i>.' },
    { t: 'Diagrama de paquetes', d: 'Agrupa elementos relacionados en <b>paquetes</b> (como carpetas) y muestra sus <b>dependencias</b> «use», «import», «access». Regla: alta cohesión, bajo acoplamiento, sin ciclos.' },
    { t: 'Diagrama de componentes', d: 'Describe las piezas <b>modulares y reemplazables</b> del sistema y sus <b>interfaces provistas</b> (piruleta) y <b>requeridas</b> (enchufe).' },
    { t: 'OMT y RUP', d: '<b>OMT</b> (Rumbaugh, 1991): modelos de objetos, dinámico y funcional. <b>RUP</b>: dirigido por casos de uso, centrado en la arquitectura, iterativo; fases Inicio, Elaboración, Construcción y Transición.' },
    { t: 'Scrum', d: 'Marco ágil con <b>Sprints</b> de un mes o menos. Roles: Product Owner, Scrum Master, Developers. Eventos: Planning, Daily, Review, Retrospective. Artefactos: Product Backlog, Sprint Backlog, Incremento.' },
    { t: 'Kanban y XP', d: '<b>Kanban</b>: visualizar el flujo y <b>limitar el WIP</b>, sin iteraciones fijas. <b>XP</b>: prácticas técnicas como programación en parejas, TDD, integración continua y refactorización.' }
  ],
  ideas: [
    'Secuencia = énfasis en el <b>tiempo</b>; colaboración = énfasis en las <b>relaciones</b> entre objetos.',
    'La numeración decimal 1.1, 1.2 indica mensajes que ocurren <b>dentro</b> del mensaje 1.',
    'Paquetes organizan el <b>modelo</b> (diseño lógico); componentes describen la <b>implementación</b>.',
    'El Manifiesto Ágil (2001) valora individuos, software funcionando, colaboración con el cliente y respuesta al cambio.',
    'No existe la "mejor" metodología: se elige la más adecuada al proyecto, al equipo y al cliente.'
  ],
  recursos: [
    { t: 'EquipoSoft: Eligiendo la Metodología Correcta',
      d: 'Caso práctico paso a paso: cómo el equipo compara <b>OMT, RUP, Scrum, Kanban y XP</b> y justifica su elección según el proyecto, el equipo y el cliente.',
      href: 'ejemplos/equiposoft-eligiendo-metodologia.html',
      cta: 'Ver el ejemplo →' }
  ],
  secciones: [
    { t: '1. Diagrama de colaboración (comunicación)', html: `
      <p>Es un <b>diagrama de interacción</b> que muestra qué objetos colaboran en un escenario y qué mensajes se envían. Cada mensaje lleva un <b>número de secuencia</b> que indica el orden.</p>
      <div class="tablewrap"><table><tr><th>Elemento</th><th>Notación</th><th>Ejemplo</th></tr>
      <tr><td>Objeto</td><td>Rectángulo con nombre subrayado</td><td><u>c:Cosecha</u>, <u>:ControladorCosecha</u></td></tr>
      <tr><td>Enlace</td><td>Línea entre objetos</td><td>Pantalla — Controlador</td></tr>
      <tr><td>Mensaje</td><td>Número: operación(args) + flecha</td><td>1.2: crear(datos) →</td></tr>
      <tr><td>Guarda</td><td>[condición]</td><td>1.5 [hayConexión]: enviar(c)</td></tr>
      <tr><td>Iteración</td><td>Asterisco después del número</td><td>2*: sincronizar(r)</td></tr></table></div>
      <figure class="fig"><img src="../assets/img/colaboracion.png" alt="Diagrama de colaboración del escenario Registrar cosecha" loading="lazy"><figcaption>Escenario "Registrar cosecha" en CaféApp</figcaption></figure>
      <div class="note tip"><b>Lectura:</b> el productor envía <i>1: registrarCosecha</i> a la pantalla; esta delega al controlador (1.1), que crea y valida la cosecha (1.2 y 1.3), la guarda localmente (1.4) y la envía al servidor si hay conexión (1.5) o la encola si no la hay (1.6).</div>` },
    { t: '2. Diagrama de paquetes', html: `
      <p>Un <b>paquete</b> agrupa elementos relacionados bajo un nombre, como una carpeta. El diagrama muestra la organización del sistema y las <b>dependencias</b> (flecha discontinua) entre paquetes.</p>
      <ul><li><b>«import»</b>: los elementos públicos del destino se agregan al espacio de nombres del origen.</li>
      <li><b>«access»</b>: se accede sin importar los nombres.</li><li><b>«use»</b>: dependencia general de uso.</li></ul>
      <figure class="fig"><img src="../assets/img/paquetes.png" alt="Diagrama de paquetes de CaféApp" loading="lazy"><figcaption>CaféApp organizada en paquetes por capas</figcaption></figure>
      <div class="note"><b>Buenas prácticas:</b> alta cohesión dentro del paquete, bajo acoplamiento entre paquetes y <b>ninguna dependencia cíclica</b>.</div>` },
    { t: '3. Diagrama de componentes', html: `
      <p>Un <b>componente</b> es una parte modular, desplegable y reemplazable que se comunica solo mediante <b>interfaces</b>.</p>
      <div class="tablewrap"><table><tr><th>Concepto</th><th>Significado</th></tr>
      <tr><td>Interfaz provista (piruleta ○—)</td><td>Lo que el componente ofrece a otros.</td></tr>
      <tr><td>Interfaz requerida (enchufe ⊂—)</td><td>Lo que el componente necesita de otros.</td></tr>
      <tr><td>Artefacto</td><td>Archivo físico que implementa el componente (.apk, .jar).</td></tr></table></div>
      <figure class="fig"><img src="../assets/img/componentes.png" alt="Diagrama de componentes de CaféApp" loading="lazy"><figcaption>Componentes del teléfono y del servidor</figcaption></figure>
      <div class="note tip">Mientras se respete la interfaz <i>ICosechasAPI</i>, el servidor puede reemplazarse sin tocar la app móvil: esa es la ventaja de pensar en componentes.</div>` },
    { t: '4. Metodología OMT', html: `
      <p>La <b>Object Modeling Technique</b> (Rumbaugh et al., 1991) describe el sistema con tres modelos y avanza en cuatro fases: análisis, diseño del sistema, diseño de objetos e implementación.</p>
      <figure class="fig"><img src="../assets/img/omt.png" alt="Fases y modelos de OMT" loading="lazy"><figcaption>Fases y modelos de OMT</figcaption></figure>
      <div class="tablewrap"><table><tr><th>Modelo</th><th>Describe</th><th>Hoy en UML</th></tr>
      <tr><td>De objetos</td><td>Estructura estática</td><td>Diagrama de clases</td></tr>
      <tr><td>Dinámico</td><td>Estados y eventos</td><td>Máquina de estados, secuencia</td></tr>
      <tr><td>Funcional</td><td>Transformación de datos</td><td>Actividades / flujo de datos</td></tr></table></div>` },
    { t: '5. Metodología RUP', html: `
      <p>El <b>Rational Unified Process</b> es <b>dirigido por casos de uso</b>, <b>centrado en la arquitectura</b> e <b>iterativo e incremental</b>.</p>
      <div class="tablewrap"><table><tr><th>Fase</th><th>Propósito</th><th>Hito</th></tr>
      <tr><td>Inicio</td><td>Alcance, caso de negocio, riesgos</td><td>Objetivos del ciclo de vida</td></tr>
      <tr><td>Elaboración</td><td>Arquitectura estable, mitigar riesgos</td><td>Arquitectura del ciclo de vida</td></tr>
      <tr><td>Construcción</td><td>Desarrollar el producto en iteraciones</td><td>Capacidad operativa inicial</td></tr>
      <tr><td>Transición</td><td>Entregar, capacitar, corregir</td><td>Lanzamiento del producto</td></tr></table></div>
      <figure class="fig"><img src="../assets/img/rup.png" alt="Gráfico de jorobas de RUP" loading="lazy"><figcaption>Intensidad de las disciplinas en cada fase</figcaption></figure>` },
    { t: '6. Manifiesto Ágil y Scrum', html: `
      <p>El <b>Manifiesto Ágil</b> (2001) valora: individuos e interacciones sobre procesos y herramientas; software funcionando sobre documentación extensiva; colaboración con el cliente sobre negociación contractual; respuesta ante el cambio sobre seguir un plan.</p>
      <figure class="fig"><img src="../assets/img/scrum.png" alt="Ciclo de Scrum" loading="lazy"><figcaption>Ciclo de Scrum</figcaption></figure>
      <div class="tablewrap"><table><tr><th>Roles</th><th>Eventos</th><th>Artefactos</th></tr>
      <tr><td>Product Owner<br>Scrum Master<br>Developers</td><td>Sprint<br>Sprint Planning<br>Daily Scrum (15 min)<br>Sprint Review<br>Sprint Retrospective</td><td>Product Backlog<br>Sprint Backlog<br>Incremento (Definition of Done)</td></tr></table></div>
      <div class="note tip"><b>Historia de usuario:</b> <i>Como productor, quiero registrar mi cosecha sin conexión para no perder datos en la finca.</i></div>` },
    { t: '7. Kanban', html: `
      <p><b>Kanban</b> visualiza el trabajo en un tablero y <b>limita el trabajo en curso (WIP)</b>. No tiene Sprints ni roles obligatorios; el trabajo fluye de forma continua.</p>
      <figure class="fig"><img src="../assets/img/kanban.png" alt="Tablero Kanban" loading="lazy"><figcaption>Tablero Kanban con límites WIP</figcaption></figure>
      <ul><li><b>Lead time:</b> desde que se solicita la tarea hasta que se entrega.</li><li><b>Cycle time:</b> desde que se empieza hasta que se termina.</li></ul>` },
    { t: '8. Programación Extrema (XP)', html: `
      <p><b>XP</b> (Kent Beck) se centra en prácticas técnicas. Valores: comunicación, simplicidad, retroalimentación, valentía y respeto.</p>
      <div class="tablewrap"><table><tr><th>Práctica</th><th>Idea</th></tr>
      <tr><td>Programación en parejas</td><td>Dos personas, un teclado</td></tr><tr><td>TDD</td><td>Primero la prueba, luego el código</td></tr>
      <tr><td>Integración continua</td><td>Integrar y probar varias veces al día</td></tr><tr><td>Refactorización</td><td>Mejorar el diseño sin cambiar el comportamiento</td></tr>
      <tr><td>Entregas pequeñas</td><td>Versiones frecuentes al cliente</td></tr><tr><td>Diseño simple</td><td>Lo más sencillo que funcione</td></tr></table></div>
      <div class="note"><b>Ingeniería Web:</b> metodologías como OOHDM, UWE y WebML agregan modelos de navegación y presentación para aplicaciones web.</div>` }
  ],
  flash: [
    ['Diagrama de colaboración', 'Diagrama de interacción que muestra objetos, enlaces y <b>mensajes numerados</b>; en UML 2 se llama diagrama de comunicación.'],
    ['Numeración 1.1, 1.2', 'Indica mensajes anidados: ocurren <b>dentro</b> de la ejecución del mensaje 1.'],
    ['Condición de guarda', 'Expresión entre corchetes que debe cumplirse para enviar el mensaje: <i>[hayConexión]</i>.'],
    ['Paquete', 'Mecanismo para agrupar elementos relacionados bajo un nombre, como una carpeta.'],
    ['«import»', 'Dependencia en la que los elementos públicos del paquete destino se agregan al espacio de nombres del origen.'],
    ['Componente', 'Parte modular, desplegable y reemplazable que se comunica mediante interfaces.'],
    ['Interfaz requerida', 'Servicio que un componente <b>necesita</b> de otro; se dibuja como un enchufe (semicírculo).'],
    ['OMT', 'Metodología de Rumbaugh (1991) con modelos de objetos, dinámico y funcional.'],
    ['Fases de RUP', 'Inicio, Elaboración, Construcción y Transición.'],
    ['Product Owner', 'Maximiza el valor del producto y ordena el Product Backlog.'],
    ['Daily Scrum', 'Evento diario de 15 minutos para inspeccionar el avance hacia el objetivo del Sprint.'],
    ['Límite WIP', 'Número máximo de tarjetas permitido en una columna del tablero Kanban.'],
    ['TDD', 'Desarrollo guiado por pruebas: se escribe la prueba antes que el código (práctica de XP).'],
    ['Definition of Done', 'Descripción formal de cuándo un incremento cumple la calidad requerida para considerarse terminado.']
  ],
  quiz: [
    { q: '¿Qué diferencia principal tiene el diagrama de colaboración respecto al de secuencia?', o: ['Enfatiza las relaciones (enlaces) entre objetos y numera los mensajes', 'Muestra solo clases y atributos', 'No muestra mensajes', 'Representa estados de un objeto'], a: 0, e: 'El de secuencia enfatiza el tiempo; el de colaboración, la estructura de enlaces, con numeración explícita.' },
    { q: 'En un diagrama de colaboración, el mensaje <i>1.2</i> significa que…', o: ['Ocurre dentro de la ejecución del mensaje 1', 'Es el mensaje número doce', 'Se repite dos veces', 'Tiene prioridad 1.2'], a: 0, e: 'La numeración decimal expresa anidamiento: 1.1 y 1.2 suceden mientras se ejecuta el mensaje 1.' },
    { q: '¿Cómo se indica que un mensaje se envía solo si hay conexión?', o: ['Con una condición de guarda [hayConexión]', 'Con un asterisco *', 'Con «import»', 'Con una línea discontinua'], a: 0, e: 'Las condiciones de guarda se escriben entre corchetes.' },
    { q: '¿Qué práctica es clave al organizar paquetes?', o: ['Evitar dependencias cíclicas', 'Poner todas las clases en un solo paquete', 'Que todos dependan de todos', 'Usar un paquete por cada atributo'], a: 0, e: 'Las dependencias deben fluir en un solo sentido; los ciclos propagan los cambios.' },
    { q: 'La "piruleta" (círculo en un palito) en un diagrama de componentes representa…', o: ['Una interfaz provista', 'Una interfaz requerida', 'Un paquete', 'Un actor'], a: 0, e: 'La piruleta es lo que el componente ofrece; el enchufe (semicírculo) es lo que requiere.' },
    { q: '¿Cuáles son los tres modelos de OMT?', o: ['Objetos, dinámico y funcional', 'Negocio, datos y red', 'CIM, PIM y PSM', 'Vista, modelo y controlador'], a: 0, e: 'OMT describe el sistema con los modelos de objetos, dinámico y funcional.' },
    { q: '¿Cuál NO es una característica esencial de RUP?', o: ['No requiere documentar nada', 'Dirigido por casos de uso', 'Centrado en la arquitectura', 'Iterativo e incremental'], a: 0, e: 'RUP produce artefactos formales; sus tres características son las otras opciones.' },
    { q: 'En RUP, ¿en qué fase se estabiliza la arquitectura?', o: ['Elaboración', 'Inicio', 'Construcción', 'Transición'], a: 0, e: 'La fase de Elaboración cierra con el hito "Arquitectura del ciclo de vida".' },
    { q: '¿Quién ordena y gestiona el Product Backlog en Scrum?', o: ['Product Owner', 'Scrum Master', 'El cliente final directamente', 'El más experimentado de los Developers'], a: 0, e: 'El Product Owner es responsable de maximizar el valor y gestionar el Product Backlog.' },
    { q: '¿Cuánto dura como máximo un Sprint según la Guía de Scrum?', o: ['Un mes o menos', 'Seis meses', 'Un día', 'No tiene límite'], a: 0, e: 'Los Sprints tienen duración fija de un mes o menos para mantener la inspección frecuente.' },
    { q: '¿Qué caracteriza principalmente a Kanban?', o: ['Visualizar el flujo y limitar el trabajo en curso', 'Sprints obligatorios de dos semanas', 'Programación en parejas obligatoria', 'Cuatro fases con hitos'], a: 0, e: 'Kanban no usa iteraciones fijas; se centra en el flujo y en los límites WIP.' },
    { q: '¿Qué práctica pertenece a Programación Extrema (XP)?', o: ['Desarrollo guiado por pruebas (TDD)', 'Sprint Review', 'Modelo funcional', 'Fase de Transición'], a: 0, e: 'TDD, programación en parejas, integración continua y refactorización son prácticas de XP.' },
    { q: 'Según el Manifiesto Ágil, se valora más…', o: ['El software funcionando que la documentación extensiva', 'Seguir un plan que responder al cambio', 'Los procesos que las personas', 'La negociación contractual que la colaboración'], a: 0, e: 'Los elementos de la izquierda (personas, software funcionando, colaboración, respuesta al cambio) se valoran más.' },
    { q: 'Un equipo de soporte recibe solicitudes todo el tiempo y no puede esperar a que termine un Sprint. ¿Qué conviene?', o: ['Kanban', 'RUP', 'OMT', 'Cascada'], a: 0, e: 'Kanban maneja flujo continuo de trabajo sin iteraciones de duración fija.' }
  ],
  juegos: [
    { tipo: 'match', icon: '🧩', t: 'Empareja conceptos', d: 'Une cada término con su definición.', n: 6, pares: [
      ['Diagrama de colaboración', 'Objetos, enlaces y mensajes numerados'], ['Diagrama de paquetes', 'Agrupación lógica y dependencias'],
      ['Diagrama de componentes', 'Piezas reemplazables e interfaces'], ['OMT', 'Modelos de objetos, dinámico y funcional'],
      ['RUP', 'Inicio, Elaboración, Construcción, Transición'], ['Scrum', 'Sprints, roles, eventos y artefactos'],
      ['Kanban', 'Tablero visual con límites WIP'], ['XP', 'Parejas, TDD, integración continua'],
      ['Guarda', '[condición] para enviar un mensaje'], ['Interfaz requerida', 'Lo que un componente necesita']] },
    { tipo: 'clasificar', icon: '🗂️', t: 'Clasifica Scrum', d: 'Roles, eventos o artefactos.', cats: ['Rol', 'Evento', 'Artefacto'], items: [
      ['Product Owner', 'Rol'], ['Scrum Master', 'Rol'], ['Developers', 'Rol'], ['Sprint', 'Evento'], ['Sprint Planning', 'Evento'],
      ['Daily Scrum', 'Evento'], ['Sprint Review', 'Evento'], ['Sprint Retrospective', 'Evento'], ['Product Backlog', 'Artefacto'],
      ['Sprint Backlog', 'Artefacto'], ['Incremento', 'Artefacto']] },
    { tipo: 'clasificar', icon: '⚖️', t: '¿Tradicional o ágil?', d: 'Clasifica prácticas y metodologías.', cats: ['Tradicional / pesada', 'Ágil'], inst: 'Toque cada tarjeta y luego el grupo al que pertenece.', items: [
      ['RUP', 'Tradicional / pesada'], ['OMT', 'Tradicional / pesada'], ['Fases con hitos formales', 'Tradicional / pesada'], ['Documentación extensa al inicio', 'Tradicional / pesada'],
      ['Control formal de cambios', 'Tradicional / pesada'], ['Scrum', 'Ágil'], ['Kanban', 'Ágil'], ['XP', 'Ágil'], ['Entregas frecuentes', 'Ágil'], ['Cliente colabora cada semana', 'Ágil']] },
    { tipo: 'ordenar', icon: '🔢', t: 'Ordena los mensajes', d: 'Reconstruye el escenario "Registrar cosecha".', inst: 'Ordene los mensajes del diagrama de colaboración usando ▲ y ▼. Luego toque Comprobar.', exp: 'La numeración decimal refleja este orden.', items: [
      '1: registrarCosecha(datos) → PantallaRegistro', '1.1: guardar(datos) → ControladorCosecha', '1.2: crear(datos) → Cosecha', '1.3: validar() → Cosecha', '1.4: insertar(c) → RepositorioLocal', '1.5 [hayConexión]: enviar(c) → ServicioSync'] },
    { tipo: 'ordenar', icon: '🔁', t: 'Ciclo de Scrum', d: 'Pon en orden el flujo de un Sprint.', inst: 'Ordene el flujo de trabajo de Scrum desde el inicio.', exp: 'Tras la retrospectiva comienza el siguiente Sprint.', items: [
      'Product Backlog ordenado por el Product Owner', 'Sprint Planning', 'Sprint Backlog', 'Sprint con Daily Scrum', 'Incremento terminado', 'Sprint Review', 'Sprint Retrospective'] },
    { tipo: 'ordenar', icon: '🏛️', t: 'Fases de RUP', d: 'Ordena las cuatro fases.', inst: 'Coloque las fases de RUP en el orden correcto.', exp: 'Cada fase cierra con un hito.', items: ['Inicio', 'Elaboración', 'Construcción', 'Transición'] },
    { tipo: 'escenario', icon: '🎯', t: '¿Qué metodología usarías?', d: 'Decide para cada escenario real.', opciones: ['Scrum', 'Kanban', 'XP', 'RUP', 'OMT'], inst: 'Lea el escenario y elija la metodología más adecuada.', items: [
      ['Una cooperativa cambia los requisitos cada semana y puede revisar avances cada 15 días. Equipo de 5 personas.', 'Scrum', 'Sprints cortos con Sprint Review frecuente.'],
      ['El área de soporte de una alcaldía recibe reportes de fallas a cualquier hora.', 'Kanban', 'Flujo continuo con límites WIP, sin esperar a un Sprint.'],
      ['Un banco contrata un sistema grande con alcance definido, varios equipos y documentación formal obligatoria.', 'RUP', 'Fases con hitos, arquitectura estable y artefactos formales.'],
      ['El equipo tiene muchos errores en el código y quiere mejorar la calidad técnica con pruebas automatizadas.', 'XP', 'TDD, integración continua y programación en parejas.'],
      ['Un sistema pequeño, centrado en datos, con requisitos estables, que se quiere modelar con detalle.', 'OMT', 'Énfasis en los modelos de objetos, dinámico y funcional.'],
      ['Una startup lanza una app nueva y necesita validar ideas con usuarios cada mes.', 'Scrum', 'Iteraciones de un mes o menos con incremento utilizable.'],
      ['Un taller de mantenimiento de software atiende pedidos pequeños de distintos clientes sin fechas fijas.', 'Kanban', 'Visualiza y limita el trabajo en curso.']] },
    { tipo: 'ahorcado', icon: '🔤', t: 'Ahorcado de términos', d: 'Adivina el concepto con la pista.', palabras: [
      ['COLABORACION', 'Diagrama que muestra objetos y mensajes numerados.'], ['PAQUETE', 'Agrupa elementos relacionados, como una carpeta.'],
      ['COMPONENTE', 'Parte modular y reemplazable de un sistema.'], ['SPRINT', 'Iteración de un mes o menos en Scrum.'],
      ['KANBAN', 'Tarjeta visual en japonés.'], ['ELABORACION', 'Fase de RUP donde se estabiliza la arquitectura.'],
      ['REFACTORIZACION', 'Mejorar el diseño del código sin cambiar su comportamiento.'], ['BACKLOG', 'Lista ordenada de trabajo pendiente en Scrum.'],
      ['INTERFAZ', 'Punto de conexión entre componentes: provista o requerida.']] }
  ],
  asignIntro: 'Las instrucciones completas y los instrumentos de evaluación están en el documento <b>Asignaciones Encuentro 2</b>. Entregue por Google Forms.',
  asignaciones: [
    ['A1', 'Tabla SQA', 'Individual', 'Dom. 27/09/2026, 11:59 p. m.'],
    ['A2', 'Diagrama de árbol de los diagramas UML', 'Individual', 'Dom. 27/09/2026, 11:59 p. m.'],
    ['A3', 'Set de diagramas UML: colaboración, paquetes y componentes', 'Equipo', 'Sáb. 03/10/2026, 11:59 p. m.'],
    ['A4', 'Cuadro comparativo de metodologías + backlog o tablero', 'Equipo', 'Sáb. 03/10/2026, 11:59 p. m.'],
    ['A5', 'Realiza el Quiz de esta página', 'Individual', 'Dom. 27/09/2026, 11:59 p. m.'],
    ['A6', 'HTI: lectura previa del Tema IV', 'Individual', 'Antes del 04/10/2026']
  ]
};
