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
    { t: '1. Vistas de UML', html: `
      <p>UML organiza sus diagramas en <b>vistas</b>. La <i>vista estática</i> describe la estructura (clases, objetos, paquetes, componentes); la <i>vista dinámica</i> describe el comportamiento en el tiempo (máquina de estados, secuencia, colaboración, actividades); y la <i>vista de gestión del modelo</i> organiza el propio modelo en paquetes. En este encuentro trabajaremos tres diagramas que completan el Tema II:</p>
      <div class="tablewrap"><table><tr><th>Diagrama</th><th>Vista / categoría</th><th>Pregunta que responde</th><th>Ejemplo en CaféApp</th></tr>
      <tr><td><b>Máquina de estados</b> (Encuentro 1)</td><td>Dinámica – comportamiento</td><td>¿Por qué estados pasa un objeto?</td><td>Registro: Borrador → Guardado → Sincronizado</td></tr>
      <tr><td><b>Colaboración (comunicación)</b></td><td>Dinámica – interacción</td><td>¿Qué objetos se envían mensajes y en qué orden?</td><td>Registrar una cosecha</td></tr>
      <tr><td><b>Paquetes</b></td><td>Gestión del modelo / estructura</td><td>¿Cómo se agrupa el sistema y qué depende de qué?</td><td>Presentación, Negocio, Datos, Sincronización</td></tr>
      <tr><td><b>Componentes</b></td><td>Estructura – implementación</td><td>¿Qué piezas reemplazables forman el sistema y cómo se conectan?</td><td>Módulo de registro, API REST, BD local</td></tr></table></div>` },
    { t: '2. Diagrama de colaboración (comunicación)', html: `
      <p>El <b>diagrama de colaboración</b>, llamado <b>diagrama de comunicación</b> desde UML 2.0, es un diagrama de interacción que muestra los <b>objetos</b> que participan en un escenario, los <b>enlaces</b> que los conectan y los <b>mensajes</b> que se envían, numerados para indicar el orden. Mientras el diagrama de secuencia pone el énfasis en el <i>tiempo</i>, el de colaboración pone el énfasis en la <i>estructura de relaciones</i> entre los objetos que colaboran.</p>
      <h3>Elementos principales</h3>
      <ul class="key">
        <li><b>Objeto (rol):</b> rectángulo con el nombre subrayado, con la forma <i>nombre:Clase</i> o <i>:Clase</i> (objeto anónimo). Ejemplo: <u>c:Cosecha</u>, <u>:ControladorCosecha</u>.</li>
        <li><b>Actor:</b> quien inicia la interacción (figura humana o sistema externo).</li>
        <li><b>Enlace:</b> línea que une dos objetos e indica que pueden comunicarse.</li>
        <li><b>Mensaje:</b> texto con una flecha junto al enlace, que indica la dirección. Lleva un <b>número de secuencia</b> y el nombre de la operación con sus argumentos: <i>1.2: crear(datos)</i>.</li>
        <li><b>Numeración decimal:</b> 1, 1.1, 1.2… indica anidamiento: los mensajes 1.1 y 1.2 ocurren <i>dentro</i> de la ejecución del mensaje 1.</li>
        <li><b>Condición de guarda:</b> expresión entre corchetes que debe cumplirse para enviar el mensaje: <i>[hayConexión] enviar(c)</i>.</li>
        <li><b>Iteración:</b> un asterisco (*) después del número indica que el mensaje se repite: <i>2*: sincronizar(registro)</i>.</li>
      </ul>
      <figure class="fig"><img src="../assets/img/colaboracion.png" alt="Diagrama de colaboración del escenario Registrar cosecha" loading="lazy"><figcaption>Figura 1. Diagrama de colaboración (comunicación) del escenario "Registrar cosecha" en CaféApp.</figcaption></figure>
      <div class="note tip"><b>Lectura del ejemplo:</b> el productor inicia el escenario con el mensaje <i>1: registrarCosecha(datos)</i> sobre la pantalla. La pantalla delega al controlador (<i>1.1</i>), que crea y valida el objeto <i>Cosecha</i> (<i>1.2</i> y <i>1.3</i>) y lo guarda en el repositorio local (<i>1.4</i>). Finalmente, si hay conexión se envía al servidor (<i>1.5</i>); si no la hay, se encola para sincronizar después (<i>1.6</i>). Este diagrama complementa la máquina de estados del Encuentro 1: aquella mostraba <i>los estados del registro</i>; esta muestra <i>quién hace qué</i> para producirlos.</div>
      <h3>Secuencia vs. colaboración</h3>
      <div class="tablewrap"><table><tr><th>Aspecto</th><th>Diagrama de secuencia</th><th>Diagrama de colaboración</th></tr>
      <tr><td><b>Énfasis</b></td><td>Orden temporal de los mensajes</td><td>Relaciones (enlaces) entre objetos</td></tr>
      <tr><td><b>Orden</b></td><td>Implícito: de arriba hacia abajo</td><td>Explícito: numeración 1, 1.1, 1.2…</td></tr>
      <tr><td><b>Distribución</b></td><td>Objetos en fila con líneas de vida</td><td>Objetos libres en el plano, unidos por enlaces</td></tr>
      <tr><td><b>Conviene cuando…</b></td><td>Hay muchos mensajes y el tiempo es clave</td><td>Interesa ver qué objetos están conectados y cuántos colaboran</td></tr></table></div>
      <div class="note"><b>Pasos para elaborar un diagrama de colaboración:</b> (1) elija un escenario concreto (un caso de uso o parte de él); (2) identifique el actor y los objetos que intervienen; (3) dibuje los enlaces entre los objetos que se comunican; (4) agregue los mensajes con su número, dirección y argumentos; (5) incorpore condiciones de guarda o iteraciones cuando existan; (6) revise que la numeración cuente la historia completa del escenario.</div>` },
    { t: '3. Diagrama de paquetes', html: `
      <p>Un <b>paquete</b> es un mecanismo de UML para <b>agrupar elementos relacionados</b> (clases, casos de uso, otros paquetes) bajo un mismo nombre, como las carpetas en un sistema de archivos. El <b>diagrama de paquetes</b> muestra cómo está organizado el sistema en grupos lógicos y las <b>dependencias</b> entre ellos. Es especialmente útil en sistemas medianos o grandes, porque permite ver "el bosque" sin perderse en "los árboles".</p>
      <ul class="key">
        <li><b>Paquete:</b> se dibuja como una carpeta con pestaña; el nombre va en la pestaña o en el cuerpo.</li>
        <li><b>Dependencia:</b> flecha discontinua desde el paquete que <i>usa</i> hacia el paquete <i>usado</i>. Si cambia el paquete destino, puede afectar al origen.</li>
        <li><b>Estereotipos de dependencia:</b> <i>«import»</i> (los elementos públicos del paquete destino se agregan al espacio de nombres del origen), <i>«access»</i> (acceso sin importar los nombres) y <i>«use»</i> (uso general).</li>
        <li><b>Anidamiento:</b> un paquete puede contener otros paquetes, lo que forma una jerarquía.</li>
      </ul>
      <figure class="fig"><img src="../assets/img/paquetes.png" alt="Diagrama de paquetes de CaféApp" loading="lazy"><figcaption>Figura 2. Diagrama de paquetes de CaféApp organizado por capas.</figcaption></figure>
      <div class="note tip"><b>Lectura del ejemplo:</b> CaféApp se organiza en cinco paquetes principales. <i>Presentación</i> (pantallas y formularios) usa («use») la <i>Lógica de negocio</i> (Cosechas, Productores, Fincas), que a su vez depende de <i>Sincronización</i> (cola offline, reintentos) y <i>Acceso a datos</i> (RepositorioLocal, ClienteAPI). <i>Utilidades</i> (fechas, validaciones) es importado («import») por la Lógica de negocio y por Acceso a datos. Finalmente, Acceso a datos accede («access») a un componente externo: la API REST del servidor. Las dependencias fluyen desde Presentación hacia Datos, sin ciclos; así un cambio en el repositorio local no afecta a las pantallas, siempre que respete la interfaz.</div>
      <h3>Pasos para elaborar un diagrama de paquetes</h3>
      <ol class="key">
        <li>Identifique los grupos lógicos principales del sistema (capas, módulos, subsistemas).</li>
        <li>Dibuje cada paquete como una carpeta con pestaña y asigne un nombre claro.</li>
        <li>Determine qué paquetes dependen de cuáles otros para funcionar.</li>
        <li>Dibuje flechas discontinuas desde el paquete que usa hacia el paquete usado.</li>
        <li>Agregue un estereotipo («import», «access» o «use») en cada flecha.</li>
        <li>Considere anidamiento si algunos paquetes contienen otros.</li>
        <li>Revise las buenas prácticas: alta cohesión, bajo acoplamiento y ausencia de ciclos.</li>
      </ol>
      <div class="note"><b>Buenas prácticas al definir paquetes</b><br><b>Alta cohesión:</b> cada paquete agrupa elementos que cambian por las mismas razones.<br><b>Bajo acoplamiento:</b> minimice las dependencias entre paquetes.<br><b>Evite los ciclos:</b> si A depende de B y B depende de A, cualquier cambio se propaga en ambas direcciones. Las dependencias deben "fluir" en un solo sentido (por ejemplo, de Presentación hacia Datos).</div>` },
    { t: '4. Diagrama de componentes', html: `
      <p>Un <b>componente</b> es una parte <b>modular, desplegable y reemplazable</b> de un sistema que encapsula su contenido y se comunica con el exterior únicamente a través de <b>interfaces</b>: es modular (independiente), desplegable (se puede instalar por separado) y reemplazable (se puede cambiar sin afectar el resto). El <b>diagrama de componentes</b> muestra qué piezas forman el sistema, cómo se conectan y qué servicio ofrece cada una.</p>
      <p>Mientras el diagrama de paquetes organiza el <i>modelo</i> de forma lógica, el de componentes describe la <i>implementación</i>: bibliotecas, módulos, servicios, bases de datos.</p>
      <div class="tablewrap"><table><tr><th>Elemento</th><th>Significado / notación</th></tr>
      <tr><td><b>Componente</b></td><td>Rectángulo con el estereotipo «component» o con el ícono de dos pequeñas pestañas.</td></tr>
      <tr><td><b>Interfaz provista</b></td><td>Lo que el componente ofrece a otros; se representa con una "paleta" (círculo en un palito ○—).</td></tr>
      <tr><td><b>Interfaz requerida</b></td><td>Lo que el componente necesita de otros; se representa con un "enchufe" (semicírculo ⊂—).</td></tr>
      <tr><td><b>Dependencia / conector</b></td><td>Flecha discontinua o unión entre la interfaz requerida y la provista.</td></tr>
      <tr><td><b>Dispositivo</b></td><td>Contenedor que agrupa componentes que se despliegan juntos (teléfono, servidor, nube).</td></tr></table></div>
      <figure class="fig"><img src="../assets/img/componentes.svg" alt="Diagrama de componentes de CaféApp" loading="lazy"><figcaption>Figura 3. Diagrama de componentes de CaféApp: piezas del teléfono y del servidor conectadas mediante interfaces.</figcaption></figure>
      <div class="note tip"><b>Explicación del diagrama:</b> en el <b>teléfono del productor</b>, la <i>Pantalla de Registro</i> es donde se ingresa la cosecha. Requiere (1) comunicarse con el <i>Módulo de Sincronización</i> para enviar datos al servidor y (2) guardar los datos en el <i>Almacenamiento Local (SQLite)</i> para que no se pierdan si se corta la conexión. El Módulo de Sincronización lee el almacenamiento local y, cuando hay internet, envía los datos usando la interfaz <i>ICosechasAPI</i>.<br>En el <b>servidor CaféApp</b>, la <i>API REST Cosechas</i> recibe los datos del teléfono y requiere el <i>Servicio de Autenticación</i> (JAuth) para verificar al productor y la base de datos <i>PostgreSQL</i> (SQL) para guardar los registros.<br>La conexión principal es <b>ICosechasAPI</b> (REST/JSON): mientras esa interfaz se mantenga estable, se puede cambiar la tecnología del servidor sin afectar la aplicación del teléfono.</div>
      <h3>Pasos para elaborar un diagrama de componentes</h3>
      <ol class="key">
        <li>Identifique las piezas modulares, desplegables y reemplazables del sistema (módulos, servicios, interfaces de usuario, bases de datos, librerías, servidores).</li>
        <li>Dibuje cada componente como un rectángulo con el estereotipo «component» y asigne un nombre claro y funcional.</li>
        <li>Agrupe los componentes en <b>dispositivos</b> según dónde se desplieguen juntos (teléfono, servidor, navegador, nube).</li>
        <li>Determine qué interfaces cada componente <b>provee</b> y cuáles <b>requiere</b>.</li>
        <li>Represente las interfaces provistas con una "paleta" y las requeridas con un "enchufe".</li>
        <li>Dibuje conectores (líneas punteadas) desde el enchufe del componente que necesita hacia la paleta del que lo proporciona.</li>
        <li>Identifique servicios o sistemas <b>externos</b> (APIs públicas, pagos, redes sociales) y dibújelos claramente separados.</li>
        <li>Asigne nombres descriptivos a cada interfaz (ICosechasAPI, IAutenticación, SQL).</li>
        <li>Verifique que cada componente tenga una responsabilidad clara y única y que las interfaces sean específicas.</li>
        <li>Revise que las dependencias fluyan de la interfaz de usuario hacia la lógica, y de la lógica hacia las bases de datos y servicios externos.</li>
      </ol>
      <h3>Paquetes vs. componentes</h3>
      <div class="tablewrap"><table><tr><th>Criterio</th><th>Diagrama de paquetes</th><th>Diagrama de componentes</th></tr>
      <tr><td><b>Propósito</b></td><td>Organizar lógicamente el modelo</td><td>Mostrar las piezas físicas/ejecutables y sus interfaces</td></tr>
      <tr><td><b>Elementos</b></td><td>Paquetes y dependencias</td><td>Componentes, interfaces provistas y requeridas</td></tr>
      <tr><td><b>Nivel</b></td><td>Diseño lógico</td><td>Diseño de implementación</td></tr>
      <tr><td><b>Pregunta</b></td><td>¿Dónde está cada cosa?</td><td>¿Con qué piezas se arma el sistema y cómo se conectan?</td></tr></table></div>` },
    { t: '5. Tema III: ¿Qué es una metodología de desarrollo?', html: `
      <p>Una <b>metodología de desarrollo</b> es un conjunto organizado de <b>fases, actividades, roles, artefactos y prácticas</b> que guía a un equipo desde la idea hasta la entrega y el mantenimiento de un software. No es lo mismo que un modelo de proceso (cascada, espiral, incremental) —que describe el orden general de las etapas—: la metodología concreta <i>quién</i> hace <i>qué</i>, <i>cómo</i> y <i>con qué documentos</i>.</p>
      <div class="grid">
        <div class="card kpi" style="margin:0"><b>Tradicionales o pesadas</b><p class="muted" style="margin:.3em 0 0">Planificación detallada al inicio, documentación extensa, control formal de cambios.</p></div>
        <div class="card kpi" style="margin:0"><b>Ágiles</b><p class="muted" style="margin:.3em 0 0">Entregas frecuentes, colaboración con el cliente, adaptación al cambio.</p></div>
      </div>
      <div class="note">Ninguna es mejor en todos los casos: la elección depende del <b>tamaño del equipo</b>, la <b>estabilidad de los requisitos</b>, la <b>criticidad del sistema</b> y la <b>cultura de la organización</b>.</div>` },
    { t: '5.1 OMT – Object Modeling Technique', html: `
      <p>La <b>Técnica de Modelado de Objetos (OMT)</b> fue propuesta por James Rumbaugh y colaboradores en 1991. Fue una de las metodologías orientadas a objetos más influyentes y, junto con los métodos de Booch y Jacobson, dio origen a UML. OMT describe el sistema mediante <b>tres modelos complementarios</b> y avanza por <b>cuatro fases</b>: análisis, diseño del sistema, diseño de objetos e implementación.</p>
      <figure class="fig"><img src="../assets/img/omt.png" alt="Fases de OMT y los tres modelos que produce el análisis" loading="lazy"><figcaption>Figura 4. Fases de OMT y los tres modelos que produce el análisis.</figcaption></figure>
      <div class="tablewrap"><table><tr><th>Modelo OMT</th><th>Qué describe</th><th>Diagrama UML equivalente hoy</th></tr>
      <tr><td><b>Modelo de objetos</b></td><td>Estructura estática: clases, atributos, operaciones y relaciones</td><td>Diagrama de clases y de objetos</td></tr>
      <tr><td><b>Modelo dinámico</b></td><td>Aspectos que cambian en el tiempo: eventos y estados</td><td>Máquina de estados, secuencia, colaboración</td></tr>
      <tr><td><b>Modelo funcional</b></td><td>Cómo se transforman los datos (entradas → salidas)</td><td>Diagrama de actividades / flujo de datos</td></tr></table></div>
      <div class="note"><b>Fortalezas:</b> notación clara, fuerte énfasis en el análisis, buena para sistemas intensivos en datos.<br><b>Limitaciones:</b> es esencialmente secuencial, no define cómo gestionar el proyecto ni cómo iterar, y su notación fue superada por UML.</div>` },
    { t: '5.2 RUP – Rational Unified Process', html: `
      <p>El <b>Proceso Unificado de Rational (RUP)</b> fue desarrollado por Rational Software (Jacobson, Booch y Rumbaugh) a finales de los años noventa y utiliza UML como lenguaje de modelado. Se apoya en tres características esenciales:</p>
      <ul class="key">
        <li><b>Dirigido por casos de uso:</b> los requisitos se expresan como casos de uso, que guían el diseño, la implementación y las pruebas.</li>
        <li><b>Centrado en la arquitectura:</b> se define y valida tempranamente una arquitectura estable.</li>
        <li><b>Iterativo e incremental:</b> el sistema se construye en varias iteraciones; cada una produce una versión ejecutable.</li>
      </ul>
      <p>RUP organiza el ciclo de vida en <b>cuatro fases</b>, cada una cerrada por un <b>hito</b>, y en <b>disciplinas</b> (flujos de trabajo) que se ejecutan con distinta intensidad en cada fase:</p>
      <div class="tablewrap"><table><tr><th>Fase</th><th>Propósito</th><th>Hito de cierre</th></tr>
      <tr><td><b>Inicio (Concepción)</b></td><td>Definir el alcance, el caso de negocio y los riesgos principales</td><td>Objetivos del ciclo de vida</td></tr>
      <tr><td><b>Elaboración</b></td><td>Analizar el dominio, estabilizar la arquitectura y mitigar riesgos técnicos</td><td>Arquitectura del ciclo de vida</td></tr>
      <tr><td><b>Construcción</b></td><td>Desarrollar el producto completo en iteraciones</td><td>Capacidad operativa inicial (versión beta)</td></tr>
      <tr><td><b>Transición</b></td><td>Entregar el producto a los usuarios, capacitar y corregir</td><td>Lanzamiento del producto</td></tr></table></div>
      <figure class="fig"><img src="../assets/img/rup.png" alt="Gráfico de jorobas de RUP" loading="lazy"><figcaption>Figura 5. Gráfico de "jorobas" de RUP: intensidad de cada disciplina a lo largo de las fases.</figcaption></figure>
      <div class="note tip">El gráfico se lee así: el modelado de negocio y los requisitos tienen su mayor esfuerzo al inicio; la implementación y las pruebas se concentran en la construcción; el despliegue crece al final. En todas las fases se realiza un poco de cada disciplina: por eso RUP es <b>iterativo</b>.</div>
      <h3>OMT vs. RUP</h3>
      <div class="tablewrap"><table><tr><th>Criterio</th><th>OMT</th><th>RUP</th></tr>
      <tr><td><b>Origen</b></td><td>Rumbaugh et al., 1991</td><td>Rational Software, 1998 (Jacobson, Booch, Rumbaugh)</td></tr>
      <tr><td><b>Enfoque</b></td><td>Modelado de objetos; secuencial</td><td>Proceso completo; iterativo e incremental</td></tr>
      <tr><td><b>Artefactos</b></td><td>Modelos de objetos, dinámico y funcional</td><td>Casos de uso, modelos UML, plan de iteración, arquitectura, pruebas</td></tr>
      <tr><td><b>Gestión del proyecto</b></td><td>No la contempla explícitamente</td><td>Incluye disciplinas de gestión, configuración y entorno</td></tr>
      <tr><td><b>Adecuado para</b></td><td>Proyectos pequeños o medianos centrados en datos</td><td>Proyectos medianos o grandes, equipos formales, contratos con alcance definido</td></tr></table></div>` },
    { t: '6. Metodologías ágiles: el Manifiesto Ágil', html: `
      <p>En 2001, diecisiete desarrolladores firmaron el <b>Manifiesto por el Desarrollo Ágil de Software</b>, que valora:</p>
      <div class="tablewrap"><table><tr><th>Valoramos más…</th><th>…que</th></tr>
      <tr><td><b>Individuos e interacciones</b></td><td>procesos y herramientas</td></tr>
      <tr><td><b>Software funcionando</b></td><td>documentación extensiva</td></tr>
      <tr><td><b>Colaboración con el cliente</b></td><td>negociación contractual</td></tr>
      <tr><td><b>Respuesta ante el cambio</b></td><td>seguir un plan</td></tr></table></div>
      <div class="note">El manifiesto aclara que los elementos de la derecha también tienen valor, pero se valoran más los de la izquierda. Sus doce principios destacan, entre otros, la entrega frecuente de software que funciona, la aceptación de cambios incluso en etapas tardías, la colaboración diaria entre negocio y desarrolladores, y la reflexión periódica del equipo para mejorar.</div>` },
    { t: '6.1 Scrum', html: `
      <p><b>Scrum</b> es un marco de trabajo ligero, definido por Ken Schwaber y Jeff Sutherland en la <i>Guía de Scrum</i> (versión 2020), que ayuda a generar valor mediante soluciones adaptativas para problemas complejos. Se basa en el <b>empirismo</b> (transparencia, inspección y adaptación) y trabaja en ciclos de duración fija llamados <b>Sprints</b>.</p>
      <figure class="fig"><img src="../assets/img/scrum.png" alt="Ciclo de Scrum" loading="lazy"><figcaption>Figura 6. Ciclo de Scrum: del Product Backlog al incremento terminado.</figcaption></figure>
      <p>La Figura 6 muestra cómo un equipo transforma las necesidades del cliente —compiladas en el <b>Product Backlog</b>— en <b>software que funciona</b> (el Incremento) mediante Sprints.</p>
      <h3>Componentes principales del ciclo</h3>
      <ol class="key">
        <li><b>Product Backlog (punto de partida):</b> lista ordenada de todo lo necesario para mejorar el producto: historias de usuario, requisitos técnicos, correcciones de defectos y mejoras. El <b>Product Owner</b> la ordena según prioridad y valor para el negocio.</li>
        <li><b>El Sprint (el corazón del ciclo):</b> contenedor de duración fija —típicamente de <b>una a cuatro semanas</b>, máximo un mes— en el que el equipo trabaja en los elementos seleccionados. Todo gira alrededor del <b>Sprint Goal</b> (objetivo del Sprint).</li>
        <li><b>Los eventos dentro del Sprint:</b>
          <ul>
            <li><b>Sprint Planning:</b> el equipo y el Product Owner deciden qué elementos entran al Sprint, estiman el trabajo y definen el objetivo.</li>
            <li><b>Daily Scrum:</b> reunión de 15 minutos cada día para inspeccionar el avance: qué hice ayer, qué haré hoy y qué impedimentos hay. Es coordinación entre colegas, no un reporte al gerente.</li>
            <li><b>Sprint Review:</b> al final, el equipo presenta lo completado a los interesados y recibe retroalimentación para el próximo Sprint.</li>
            <li><b>Sprint Retrospective:</b> el equipo reflexiona qué hizo bien y qué puede mejorar; el Scrum Master facilita acciones concretas.</li>
          </ul></li>
        <li><b>El Incremento (punto de llegada):</b> software funcionando, probado y que cumple la <b>Definición de Terminado</b>. No es un "casi listo": es potencialmente desplegable.</li>
      </ol>
      <div class="note"><b>La retroalimentación permanente:</b> el ciclo <b>nunca termina</b>. Tras cada Sprint, el Product Backlog se ajusta con la retroalimentación del cliente y comienza un nuevo Sprint.<br><b>Comparación con métodos tradicionales:</b> en OMT o RUP se planifica extensamente al inicio; en Scrum la planificación es <b>breve y frecuente</b>. Si la cooperativa pide "alertas por SMS", se agrega al Product Backlog y se prioriza en la siguiente Sprint Planning, sin replantear todo el proyecto.</div>
      <div class="tablewrap"><table><tr><th>Elemento</th><th>Componentes</th><th>Descripción breve</th></tr>
      <tr><td rowspan="3"><b>Roles (Scrum Team)</b></td><td>Product Owner</td><td>Maximiza el valor del producto; gestiona y ordena el Product Backlog.</td></tr>
      <tr><td>Scrum Master</td><td>Facilita, elimina impedimentos y promueve la comprensión de Scrum.</td></tr>
      <tr><td>Developers</td><td>Crean el incremento utilizable en cada Sprint.</td></tr>
      <tr><td rowspan="5"><b>Eventos</b></td><td>Sprint</td><td>Contenedor de todos los eventos; dura un mes o menos.</td></tr>
      <tr><td>Sprint Planning</td><td>Define qué se hará en el Sprint y cómo (Sprint Goal).</td></tr>
      <tr><td>Daily Scrum</td><td>15 minutos diarios para inspeccionar el avance hacia el objetivo.</td></tr>
      <tr><td>Sprint Review</td><td>Se presenta el resultado a los interesados y se adapta el backlog.</td></tr>
      <tr><td>Sprint Retrospective</td><td>El equipo planifica cómo mejorar su forma de trabajar.</td></tr>
      <tr><td rowspan="3"><b>Artefactos</b></td><td>Product Backlog</td><td>Lista ordenada de lo necesario para mejorar el producto (compromiso: objetivo del producto).</td></tr>
      <tr><td>Sprint Backlog</td><td>Elementos elegidos para el Sprint más el plan (compromiso: objetivo del Sprint).</td></tr>
      <tr><td>Incremento</td><td>Resultado utilizable que cumple la Definición de Terminado (Definition of Done).</td></tr></table></div>
      <div class="note tip"><b>Historias de usuario:</b> formato <i>Como [rol], quiero [funcionalidad] para [beneficio]</i>. Ejemplo: <i>"Como productor, quiero registrar mi cosecha sin conexión para no perder datos cuando estoy en la finca".</i></div>` },
    { t: '6.2 Kanban', html: `
      <p><b>Kanban</b> (del japonés "tarjeta visual") tiene su origen en el sistema de producción de Toyota y fue adaptado al software por David J. Anderson. A diferencia de Scrum, <b>no usa iteraciones de duración fija ni roles obligatorios</b>: se centra en <b>visualizar el flujo de trabajo</b> y <b>limitar el trabajo en curso (WIP, Work in Progress)</b> para terminar tareas antes de empezar otras.</p>
      <figure class="fig"><img src="../assets/img/kanban.png" alt="Tablero Kanban de CaféApp" loading="lazy"><figcaption>Figura 7. Tablero Kanban de CaféApp con límites de trabajo en curso (WIP).</figcaption></figure>
      <ul class="key">
        <li><b>Visualizar el trabajo:</b> cada tarea es una tarjeta que avanza por columnas (Por hacer → En progreso → En revisión → Terminado).</li>
        <li><b>Limitar el WIP:</b> cada columna tiene un máximo de tarjetas; si "En progreso" admite 2, nadie inicia una tercera tarea hasta liberar espacio.</li>
        <li><b>Gestionar el flujo:</b> se mide el <i>lead time</i> (desde que se pide hasta que se entrega) y el <i>cycle time</i> (desde que se empieza hasta que se termina).</li>
        <li><b>Mejorar continuamente:</b> las políticas del tablero se hacen explícitas y se ajustan con la experiencia.</li>
      </ul>` },
    { t: '6.3 Programación Extrema (XP)', html: `
      <p><b>Extreme Programming (XP)</b> fue formulada por Kent Beck a finales de los noventa. Se enfoca en las <b>prácticas técnicas de ingeniería</b> que permiten responder rápido al cambio con alta calidad. Sus valores son: <b>comunicación, simplicidad, retroalimentación, valentía y respeto</b>.</p>
      <div class="tablewrap"><table><tr><th>Práctica XP</th><th>En qué consiste</th></tr>
      <tr><td><b>Juego de la planificación</b></td><td>El cliente escribe historias y el equipo estima; se planifican entregas cortas.</td></tr>
      <tr><td><b>Entregas pequeñas</b></td><td>Versiones funcionales frecuentes al cliente.</td></tr>
      <tr><td><b>Programación en parejas</b></td><td>Dos personas, un teclado: una escribe y la otra revisa en tiempo real.</td></tr>
      <tr><td><b>Desarrollo guiado por pruebas (TDD)</b></td><td>Primero se escribe la prueba automatizada; luego el código que la hace pasar.</td></tr>
      <tr><td><b>Refactorización</b></td><td>Mejorar el diseño del código sin cambiar su comportamiento.</td></tr>
      <tr><td><b>Integración continua</b></td><td>El código se integra y se prueba varias veces al día.</td></tr>
      <tr><td><b>Diseño simple</b></td><td>Lo más sencillo que funcione; nada de funcionalidad "por si acaso".</td></tr>
      <tr><td><b>Propiedad colectiva y estándares de código</b></td><td>Cualquiera puede mejorar cualquier parte; todos siguen el mismo estilo.</td></tr>
      <tr><td><b>Cliente en el sitio</b></td><td>Un representante del cliente disponible para resolver dudas.</td></tr>
      <tr><td><b>Ritmo sostenible</b></td><td>Evitar horas extra permanentes; el cansancio genera errores.</td></tr></table></div>` },
    { t: '6.4 ¿Qué metodología conviene en cada escenario?', html: `
      <div class="tablewrap"><table><tr><th>Escenario</th><th>Metodología sugerida</th><th>Razón</th></tr>
      <tr><td>Requisitos cambiantes, cliente disponible, equipo pequeño (3–9 personas)</td><td><b>Scrum</b></td><td>Sprints cortos con revisión frecuente del cliente.</td></tr>
      <tr><td>Soporte y mantenimiento con solicitudes que llegan de forma continua</td><td><b>Kanban</b></td><td>Flujo continuo sin esperar a que termine un Sprint.</td></tr>
      <tr><td>Alta exigencia de calidad técnica y cambios frecuentes en el código</td><td><b>XP</b> (o Scrum + prácticas XP)</td><td>TDD, integración continua y parejas reducen defectos.</td></tr>
      <tr><td>Proyecto grande, contrato con alcance definido, varios equipos, necesidad de documentación formal</td><td><b>RUP</b></td><td>Fases con hitos, arquitectura estable y artefactos formales.</td></tr>
      <tr><td>Sistema pequeño centrado en datos, con requisitos estables, para modelar a fondo</td><td><b>OMT</b> (o análisis orientado a objetos con UML)</td><td>Énfasis en modelos de objetos, dinámico y funcional.</td></tr></table></div>` },
    { t: '6.5 Una mirada a la Ingeniería Web', html: `
      <p>Las aplicaciones web tienen características propias: navegación, contenido que cambia con frecuencia, múltiples tipos de usuarios y despliegue inmediato. Por ello surgieron <b>metodologías de Ingeniería Web</b> que agregan modelos de <i>navegación</i> y de <i>presentación</i> a los modelos clásicos.</p>
      <ul class="key">
        <li><b>OOHDM</b> (Object-Oriented Hypermedia Design Method).</li>
        <li><b>UWE</b> (UML-based Web Engineering), que extiende UML con estereotipos para la web.</li>
        <li><b>WebML</b> (Web Modeling Language).</li>
      </ul>
      <div class="note">En la práctica actual, muchos equipos web combinan estos modelos con prácticas ágiles como Scrum o Kanban.</div>` },
    { t: '7. Ejemplo aplicado — EquipoSoft adopta Scrum', html: `
      <p>Después de analizar el cuadro anterior, EquipoSoft concluye que CaféApp tiene requisitos cambiantes y un cliente accesible, por lo que adopta <b>Scrum con Sprints de dos semanas</b>, complementado con un tablero Kanban para visualizar las tareas y con dos prácticas de XP (programación en parejas para la sincronización y pruebas automatizadas). <b>Carmen</b> asume el rol de Product Owner con la cooperativa, <b>Luis</b> el de Scrum Master y los demás son Developers. Este es su primer Product Backlog:</p>
      <div class="tablewrap"><table><tr><th>ID</th><th>Historia de usuario</th><th>Prioridad</th><th>Estimación (puntos)</th></tr>
      <tr><td>HU-01</td><td>Como productor, quiero registrar mi cosecha sin conexión para no perder datos en la finca.</td><td>Alta</td><td>8</td></tr>
      <tr><td>HU-02</td><td>Como productor, quiero que mis registros se sincronicen solos al recuperar señal.</td><td>Alta</td><td>8</td></tr>
      <tr><td>HU-03</td><td>Como técnico de la cooperativa, quiero ver un reporte por finca para planificar la recolección.</td><td>Media</td><td>5</td></tr>
      <tr><td>HU-04</td><td>Como productor, quiero recibir un SMS con el precio del día para decidir cuándo vender.</td><td>Media</td><td>5</td></tr>
      <tr><td>HU-05</td><td>Como administrador, quiero exportar los registros a Excel para mis informes.</td><td>Baja</td><td>3</td></tr></table></div>
      <div class="note tip">Con Scrum, los cambios del cliente ya no generan discusiones: se registran como nuevas historias en el Product Backlog y la cooperativa decide su prioridad en cada Sprint Review.</div>
      <p><a class="btn ghost" href="ejemplos/equiposoft-eligiendo-metodologia.html">Ver el caso completo de EquipoSoft →</a></p>` }
  ],
  flash: [
    ['Vistas de UML', '<b>Estática</b> (estructura: clases, objetos, paquetes, componentes), <b>dinámica</b> (comportamiento en el tiempo) y <b>de gestión del modelo</b> (organiza el modelo en paquetes).'],
    ['Diagrama de colaboración', 'Diagrama de interacción que muestra objetos, enlaces y <b>mensajes numerados</b>; desde UML 2.0 se llama <b>diagrama de comunicación</b>.'],
    ['Objeto (rol)', 'Rectángulo con el nombre subrayado: <i>nombre:Clase</i> o <i>:Clase</i> (objeto anónimo). Ej.: <u>c:Cosecha</u>.'],
    ['Enlace', 'Línea que une dos objetos e indica que pueden comunicarse.'],
    ['Numeración 1.1, 1.2', 'Indica anidamiento: los mensajes 1.1 y 1.2 ocurren <b>dentro</b> de la ejecución del mensaje 1.'],
    ['Condición de guarda', 'Expresión entre corchetes que debe cumplirse para enviar el mensaje: <i>[hayConexión] enviar(c)</i>.'],
    ['Iteración (*)', 'Un asterisco después del número indica que el mensaje se repite: <i>2*: sincronizar(registro)</i>.'],
    ['Secuencia vs. colaboración', 'Secuencia: énfasis en el <b>tiempo</b> (orden implícito, de arriba abajo). Colaboración: énfasis en las <b>relaciones</b> (orden explícito con numeración).'],
    ['Paquete', 'Mecanismo de UML para agrupar elementos relacionados bajo un nombre, como una carpeta. Se dibuja como una carpeta con pestaña.'],
    ['«import» · «access» · «use»', '<b>import</b>: los elementos públicos del destino se agregan al espacio de nombres del origen. <b>access</b>: acceso sin importar nombres. <b>use</b>: uso general.'],
    ['Buenas prácticas de paquetes', '<b>Alta cohesión</b>, <b>bajo acoplamiento</b> y <b>sin ciclos</b>: las dependencias fluyen en un solo sentido.'],
    ['Componente', 'Parte <b>modular, desplegable y reemplazable</b> que encapsula su contenido y se comunica solo mediante interfaces.'],
    ['Interfaz provista', 'Lo que el componente <b>ofrece</b> a otros; se dibuja como una "paleta" (círculo en un palito).'],
    ['Interfaz requerida', 'Lo que el componente <b>necesita</b> de otros; se dibuja como un "enchufe" (semicírculo).'],
    ['Dispositivo', 'Contenedor que agrupa componentes que se despliegan juntos (teléfono, servidor, nube).'],
    ['Paquetes vs. componentes', 'Paquetes: diseño <b>lógico</b> (¿dónde está cada cosa?). Componentes: diseño de <b>implementación</b> (¿con qué piezas se arma el sistema?).'],
    ['Metodología de desarrollo', 'Conjunto organizado de <b>fases, actividades, roles, artefactos y prácticas</b> que guía al equipo desde la idea hasta la entrega y el mantenimiento.'],
    ['OMT', 'Técnica de Modelado de Objetos (Rumbaugh et al., 1991): modelos de <b>objetos, dinámico y funcional</b>; fases: análisis, diseño del sistema, diseño de objetos e implementación.'],
    ['Características de RUP', '<b>Dirigido por casos de uso</b>, <b>centrado en la arquitectura</b> e <b>iterativo e incremental</b>.'],
    ['Fases e hitos de RUP', 'Inicio → Objetivos del ciclo de vida · Elaboración → Arquitectura del ciclo de vida · Construcción → Capacidad operativa inicial · Transición → Lanzamiento del producto.'],
    ['Manifiesto Ágil (2001)', 'Individuos e interacciones, software funcionando, colaboración con el cliente y respuesta ante el cambio.'],
    ['Empirismo en Scrum', 'Pilares: <b>transparencia, inspección y adaptación</b>.'],
    ['Product Owner', 'Maximiza el valor del producto; gestiona y ordena el Product Backlog.'],
    ['Scrum Master', 'Facilita, elimina impedimentos y promueve la comprensión de Scrum.'],
    ['Sprint Goal', 'Objetivo del Sprint: el valor específico que el equipo se compromete a entregar.'],
    ['Daily Scrum', 'Evento diario de 15 minutos para inspeccionar el avance hacia el objetivo; coordinación entre colegas, no un reporte al gerente.'],
    ['Incremento', 'Resultado utilizable de cada Sprint que cumple la <b>Definición de Terminado</b>; es potencialmente desplegable.'],
    ['Historia de usuario', '<i>Como [rol], quiero [funcionalidad] para [beneficio]</i>.'],
    ['Kanban', 'Del japonés "tarjeta visual"; origen en Toyota, adaptado al software por David J. Anderson. Visualiza el flujo y <b>limita el WIP</b>.'],
    ['Lead time vs. cycle time', '<b>Lead time</b>: desde que se pide hasta que se entrega. <b>Cycle time</b>: desde que se empieza hasta que se termina.'],
    ['Valores de XP', 'Comunicación, simplicidad, retroalimentación, valentía y respeto (Kent Beck).'],
    ['TDD', 'Desarrollo guiado por pruebas: primero se escribe la prueba automatizada; luego el código que la hace pasar.'],
    ['Ritmo sostenible (XP)', 'Evitar horas extra permanentes: el cansancio genera errores.'],
    ['Ingeniería Web', 'Metodologías como <b>OOHDM</b>, <b>UWE</b> y <b>WebML</b> agregan modelos de navegación y presentación.']
  ],
  quiz: [
    { q: '¿Qué vista de UML describe el comportamiento en el tiempo (máquina de estados, secuencia, colaboración)?', o: ['Vista dinámica', 'Vista estática', 'Vista de gestión del modelo', 'Vista de despliegue'], a: 0, e: 'La vista dinámica describe el comportamiento en el tiempo; la estática describe la estructura.' },
    { q: 'Desde UML 2.0, el diagrama de colaboración se llama…', o: ['Diagrama de comunicación', 'Diagrama de secuencia', 'Diagrama de actividades', 'Diagrama de despliegue'], a: 0, e: 'Es el mismo diagrama de interacción; UML 2.0 lo renombró diagrama de comunicación.' },
    { q: '¿Qué diferencia principal tiene el diagrama de colaboración respecto al de secuencia?', o: ['Enfatiza las relaciones (enlaces) entre objetos y numera los mensajes', 'Enfatiza el orden temporal con líneas de vida', 'Muestra solo clases y atributos', 'No tiene mensajes'], a: 0, e: 'Secuencia = énfasis en el tiempo; colaboración = énfasis en la estructura de relaciones.' },
    { q: 'En un diagrama de colaboración, el mensaje <i>1.2</i> significa que…', o: ['Ocurre dentro de la ejecución del mensaje 1', 'Es el mensaje número doce', 'Se repite dos veces', 'Tiene prioridad 1.2'], a: 0, e: 'La numeración decimal indica anidamiento.' },
    { q: '¿Qué indica <i>2*: sincronizar(registro)</i>?', o: ['Que el mensaje se repite (iteración)', 'Que es un mensaje opcional', 'Que requiere conexión', 'Que es el segundo objeto'], a: 0, e: 'El asterisco después del número indica iteración.' },
    { q: '¿Cómo se indica que un mensaje se envía solo si hay conexión?', o: ['Con una condición de guarda [hayConexión]', 'Con un asterisco *', 'Con «import»', 'Con una línea discontinua'], a: 0, e: 'Las condiciones de guarda van entre corchetes.' },
    { q: 'En la Figura 1 de CaféApp, ¿qué mensaje se envía si NO hay conexión?', o: ['1.6 [sinConexión]: encolar(c)', '1.5 [hayConexión]: enviar(c)', '1.4: insertar(c)', '1.3: validar()'], a: 0, e: 'Sin conexión, el registro se encola para sincronizar después.' },
    { q: 'En un diagrama de paquetes, la dependencia se dibuja como…', o: ['Flecha discontinua desde el paquete que usa hacia el usado', 'Línea continua sin flecha', 'Rombo relleno', 'Círculo en un palito'], a: 0, e: 'Si cambia el paquete destino, puede afectar al origen.' },
    { q: '¿Qué estereotipo agrega los elementos públicos del paquete destino al espacio de nombres del origen?', o: ['«import»', '«access»', '«use»', '«component»'], a: 0, e: '«access» accede sin importar los nombres; «use» es uso general.' },
    { q: '¿Qué regla es clave al organizar paquetes?', o: ['Alta cohesión, bajo acoplamiento y sin ciclos', 'Todas las clases en un solo paquete', 'Que todos dependan de todos', 'Un paquete por cada atributo'], a: 0, e: 'Si A depende de B y B de A, cualquier cambio se propaga en ambas direcciones.' },
    { q: 'La "paleta" (círculo en un palito) en un diagrama de componentes representa…', o: ['Una interfaz provista', 'Una interfaz requerida', 'Un paquete', 'Un actor'], a: 0, e: 'La paleta es lo que el componente ofrece; el enchufe (semicírculo) es lo que requiere.' },
    { q: 'En el diagrama de componentes, un <b>dispositivo</b> es…', o: ['Un contenedor que agrupa componentes que se despliegan juntos', 'Una interfaz requerida', 'Un paquete importado', 'Un mensaje numerado'], a: 0, e: 'Ej.: Teléfono del productor y Servidor CaféApp.' },
    { q: 'En CaféApp, ¿qué interfaz conecta el Módulo de Sincronización con la API REST Cosechas?', o: ['ICosechasAPI (REST/JSON)', 'IAlmacenamiento', 'JAuth', 'SQL'], a: 0, e: 'Mientras ICosechasAPI se mantenga estable, se puede cambiar la tecnología del servidor sin afectar el teléfono.' },
    { q: '¿Qué pregunta responde el diagrama de componentes?', o: ['¿Con qué piezas se arma el sistema y cómo se conectan?', '¿Dónde está cada cosa en el modelo lógico?', '¿Por qué estados pasa un objeto?', '¿En qué orden temporal se envían los mensajes?'], a: 0, e: 'El de paquetes responde "¿dónde está cada cosa?".' },
    { q: '¿Qué distingue a una metodología de un modelo de proceso (cascada, espiral)?', o: ['La metodología concreta quién hace qué, cómo y con qué documentos', 'La metodología solo define el orden de las etapas', 'No hay diferencia', 'El modelo de proceso define roles y artefactos'], a: 0, e: 'El modelo de proceso describe el orden general de las etapas; la metodología lo concreta.' },
    { q: '¿Cuáles son los tres modelos de OMT?', o: ['Objetos, dinámico y funcional', 'Negocio, datos y red', 'CIM, PIM y PSM', 'Vista, modelo y controlador'], a: 0, e: 'Hoy equivalen a clases, máquina de estados/secuencia y actividades/flujo de datos.' },
    { q: '¿Cuál es una limitación de OMT?', o: ['Es esencialmente secuencial y no define cómo gestionar el proyecto', 'No tiene notación', 'Solo sirve para aplicaciones web', 'Exige Sprints de dos semanas'], a: 0, e: 'Además, su notación fue superada por UML.' },
    { q: '¿Cuál NO es una característica esencial de RUP?', o: ['No requiere documentar nada', 'Dirigido por casos de uso', 'Centrado en la arquitectura', 'Iterativo e incremental'], a: 0, e: 'RUP produce artefactos formales en cada fase.' },
    { q: 'En RUP, ¿qué hito cierra la fase de Construcción?', o: ['Capacidad operativa inicial (versión beta)', 'Objetivos del ciclo de vida', 'Arquitectura del ciclo de vida', 'Lanzamiento del producto'], a: 0, e: 'Inicio → Objetivos; Elaboración → Arquitectura; Construcción → Capacidad operativa inicial; Transición → Lanzamiento.' },
    { q: 'En el gráfico de "jorobas" de RUP, ¿en qué fase se concentran implementación y pruebas?', o: ['Construcción', 'Inicio', 'Elaboración', 'Transición'], a: 0, e: 'El despliegue crece al final, en la Transición.' },
    { q: 'Según el Manifiesto Ágil, se valora más…', o: ['La colaboración con el cliente que la negociación contractual', 'Seguir un plan que responder al cambio', 'Los procesos que las personas', 'La documentación extensiva que el software funcionando'], a: 0, e: 'Los elementos de la derecha también tienen valor, pero se valoran más los de la izquierda.' },
    { q: '¿En qué se basa Scrum según la Guía de Scrum 2020?', o: ['En el empirismo: transparencia, inspección y adaptación', 'En la planificación detallada al inicio', 'En el modelo funcional', 'En los límites WIP'], a: 0, e: 'Scrum trabaja en Sprints de duración fija y se adapta con cada inspección.' },
    { q: '¿Quién ordena y gestiona el Product Backlog?', o: ['Product Owner', 'Scrum Master', 'El cliente final directamente', 'El Developer más experimentado'], a: 0, e: 'En CaféApp, Carmen asume el rol de Product Owner.' },
    { q: 'En EquipoSoft, ¿quién asume el rol de Scrum Master?', o: ['Luis', 'Carmen', 'Ana', 'Javier'], a: 0, e: 'Carmen es Product Owner, Luis es Scrum Master y los demás son Developers.' },
    { q: '¿Qué es el Incremento en Scrum?', o: ['Resultado utilizable que cumple la Definición de Terminado', 'Un borrador "casi listo"', 'La lista de tareas del Sprint', 'La reunión final del Sprint'], a: 0, e: 'Es potencialmente desplegable.' },
    { q: '¿Cuánto dura como máximo un Sprint?', o: ['Un mes o menos', 'Seis meses', 'Un día', 'No tiene límite'], a: 0, e: 'Típicamente de una a cuatro semanas.' },
    { q: 'El <i>lead time</i> en Kanban mide…', o: ['Desde que se pide una tarea hasta que se entrega', 'Desde que se empieza hasta que se termina', 'La duración del Sprint', 'El número de tarjetas por columna'], a: 0, e: 'El cycle time mide desde que se empieza hasta que se termina.' },
    { q: 'Si la columna "En progreso" tiene límite WIP 2 y ya hay dos tarjetas, ¿qué se hace?', o: ['Nadie inicia una tercera tarea hasta liberar espacio', 'Se agrega igual la tercera', 'Se crea un nuevo Sprint', 'Se elimina una tarjeta'], a: 0, e: 'Limitar el WIP ayuda a terminar tareas antes de empezar otras.' },
    { q: '¿Cuál NO es un valor de XP?', o: ['Documentación exhaustiva', 'Comunicación', 'Simplicidad', 'Valentía'], a: 0, e: 'Valores de XP: comunicación, simplicidad, retroalimentación, valentía y respeto.' },
    { q: '¿Qué práctica de XP consiste en "lo más sencillo que funcione, nada por si acaso"?', o: ['Diseño simple', 'Refactorización', 'Ritmo sostenible', 'Cliente en el sitio'], a: 0, e: 'Refactorizar es mejorar el diseño sin cambiar el comportamiento.' },
    { q: 'Un equipo de soporte recibe solicitudes todo el tiempo y no puede esperar a que termine un Sprint. ¿Qué conviene?', o: ['Kanban', 'RUP', 'OMT', 'Cascada'], a: 0, e: 'Kanban maneja flujo continuo sin iteraciones fijas.' },
    { q: '¿Qué metodología de Ingeniería Web extiende UML con estereotipos para la web?', o: ['UWE', 'OOHDM', 'WebML', 'OMT'], a: 0, e: 'UWE = UML-based Web Engineering.' }
  ],
  juegos: [
    { tipo: 'match', icon: '🧩', t: 'Empareja conceptos', d: 'Une cada término con su definición.', n: 6, pares: [
      ['Diagrama de colaboración', 'Objetos, enlaces y mensajes numerados'], ['Diagrama de paquetes', 'Agrupación lógica y dependencias'],
      ['Diagrama de componentes', 'Piezas reemplazables e interfaces'], ['OMT', 'Modelos de objetos, dinámico y funcional'],
      ['RUP', 'Inicio, Elaboración, Construcción, Transición'], ['Scrum', 'Sprints, roles, eventos y artefactos'],
      ['Kanban', 'Tablero visual con límites WIP'], ['XP', 'Parejas, TDD, integración continua'],
      ['Guarda', '[condición] para enviar un mensaje'], ['Iteración', 'Asterisco: el mensaje se repite'],
      ['Interfaz provista', 'Paleta: lo que el componente ofrece'], ['Interfaz requerida', 'Enchufe: lo que el componente necesita'],
      ['Dispositivo', 'Agrupa componentes que se despliegan juntos'], ['Empirismo', 'Transparencia, inspección y adaptación'],
      ['UWE', 'Extiende UML con estereotipos para la web']] },
    { tipo: 'match', icon: '🏁', t: 'Fases e hitos de RUP', d: 'Une cada fase con su hito de cierre.', n: 4, pares: [
      ['Inicio', 'Objetivos del ciclo de vida'], ['Elaboración', 'Arquitectura del ciclo de vida'],
      ['Construcción', 'Capacidad operativa inicial (beta)'], ['Transición', 'Lanzamiento del producto']] },
    { tipo: 'clasificar', icon: '🗂️', t: 'Clasifica Scrum', d: 'Roles, eventos o artefactos.', cats: ['Rol', 'Evento', 'Artefacto'], items: [
      ['Product Owner', 'Rol'], ['Scrum Master', 'Rol'], ['Developers', 'Rol'], ['Sprint', 'Evento'], ['Sprint Planning', 'Evento'],
      ['Daily Scrum', 'Evento'], ['Sprint Review', 'Evento'], ['Sprint Retrospective', 'Evento'], ['Product Backlog', 'Artefacto'],
      ['Sprint Backlog', 'Artefacto'], ['Incremento', 'Artefacto']] },
    { tipo: 'clasificar', icon: '🧱', t: 'Vistas de UML', d: '¿Estática o dinámica?', cats: ['Vista estática (estructura)', 'Vista dinámica (comportamiento)'], inst: 'Toque cada diagrama y luego la vista a la que pertenece.', items: [
      ['Diagrama de clases', 'Vista estática (estructura)'], ['Diagrama de objetos', 'Vista estática (estructura)'], ['Diagrama de paquetes', 'Vista estática (estructura)'],
      ['Diagrama de componentes', 'Vista estática (estructura)'], ['Máquina de estados', 'Vista dinámica (comportamiento)'], ['Diagrama de secuencia', 'Vista dinámica (comportamiento)'],
      ['Diagrama de colaboración', 'Vista dinámica (comportamiento)'], ['Diagrama de actividades', 'Vista dinámica (comportamiento)']] },
    { tipo: 'clasificar', icon: '⚖️', t: '¿Tradicional o ágil?', d: 'Clasifica prácticas y metodologías.', cats: ['Tradicional / pesada', 'Ágil'], inst: 'Toque cada tarjeta y luego el grupo al que pertenece.', items: [
      ['RUP', 'Tradicional / pesada'], ['OMT', 'Tradicional / pesada'], ['Fases con hitos formales', 'Tradicional / pesada'], ['Planificación detallada al inicio', 'Tradicional / pesada'],
      ['Control formal de cambios', 'Tradicional / pesada'], ['Documentación extensa', 'Tradicional / pesada'], ['Scrum', 'Ágil'], ['Kanban', 'Ágil'], ['XP', 'Ágil'],
      ['Entregas frecuentes', 'Ágil'], ['Colaboración con el cliente', 'Ágil'], ['Adaptación al cambio', 'Ágil']] },
    { tipo: 'clasificar', icon: '🛠️', t: '¿Scrum, Kanban o XP?', d: 'Clasifica cada práctica según su marco.', cats: ['Scrum', 'Kanban', 'XP'], inst: 'Toque cada práctica y luego el marco ágil al que pertenece.', items: [
      ['Sprint Review', 'Scrum'], ['Product Owner', 'Scrum'], ['Sprint Goal', 'Scrum'], ['Daily Scrum', 'Scrum'],
      ['Límite WIP', 'Kanban'], ['Lead time y cycle time', 'Kanban'], ['Flujo continuo sin iteraciones fijas', 'Kanban'], ['Políticas explícitas del tablero', 'Kanban'],
      ['Programación en parejas', 'XP'], ['TDD', 'XP'], ['Integración continua', 'XP'], ['Ritmo sostenible', 'XP'], ['Cliente en el sitio', 'XP']] },
    { tipo: 'ordenar', icon: '🔢', t: 'Ordena los mensajes', d: 'Reconstruye el escenario "Registrar cosecha".', inst: 'Ordene los mensajes del diagrama de colaboración usando ▲ y ▼. Luego toque Comprobar.', exp: 'La numeración decimal cuenta la historia completa del escenario.', items: [
      '1: registrarCosecha(datos) → PantallaRegistro', '1.1: guardar(datos) → ControladorCosecha', '1.2: crear(datos) → Cosecha', '1.3: validar() → Cosecha', '1.4: insertar(c) → RepositorioLocal', '1.5 [hayConexión]: enviar(c) → ServicioSync', '1.6 [sinConexión]: encolar(c) → ServicioSync'] },
    { tipo: 'ordenar', icon: '✏️', t: 'Pasos del diagrama de colaboración', d: 'Ordena cómo se elabora.', inst: 'Coloque los pasos para elaborar un diagrama de colaboración en el orden correcto.', exp: 'Así lo indica el material didáctico.', items: [
      'Elegir un escenario concreto', 'Identificar el actor y los objetos que intervienen', 'Dibujar los enlaces entre los objetos que se comunican',
      'Agregar los mensajes con número, dirección y argumentos', 'Incorporar condiciones de guarda o iteraciones', 'Revisar que la numeración cuente la historia completa'] },
    { tipo: 'ordenar', icon: '🔁', t: 'Ciclo de Scrum', d: 'Pon en orden el flujo de un Sprint.', inst: 'Ordene el flujo de trabajo de Scrum desde el inicio.', exp: 'Tras la retrospectiva, el Product Backlog se ajusta y comienza el siguiente Sprint: el ciclo nunca termina.', items: [
      'Product Backlog ordenado por el Product Owner', 'Sprint Planning', 'Sprint Backlog', 'Sprint con Daily Scrum', 'Incremento terminado', 'Sprint Review', 'Sprint Retrospective'] },
    { tipo: 'ordenar', icon: '🧭', t: 'Fases de OMT', d: 'Ordena las cuatro fases.', inst: 'Coloque las fases de OMT en el orden correcto.', exp: 'El análisis produce los tres modelos: objetos, dinámico y funcional.', items: ['Análisis', 'Diseño del sistema', 'Diseño de objetos', 'Implementación'] },
    { tipo: 'ordenar', icon: '🏛️', t: 'Fases de RUP', d: 'Ordena las cuatro fases.', inst: 'Coloque las fases de RUP en el orden correcto.', exp: 'Cada fase cierra con un hito.', items: ['Inicio', 'Elaboración', 'Construcción', 'Transición'] },
    { tipo: 'escenario', icon: '🎯', t: '¿Qué metodología usarías?', d: 'Decide para cada escenario real.', opciones: ['Scrum', 'Kanban', 'XP', 'RUP', 'OMT'], inst: 'Lea el escenario y elija la metodología más adecuada.', items: [
      ['Una cooperativa cambia los requisitos cada semana y puede revisar avances cada 15 días. Equipo de 5 personas.', 'Scrum', 'Sprints cortos con revisión frecuente del cliente.'],
      ['El área de soporte de una alcaldía recibe reportes de fallas a cualquier hora.', 'Kanban', 'Flujo continuo sin esperar a que termine un Sprint.'],
      ['Un banco contrata un sistema grande con alcance definido, varios equipos y documentación formal obligatoria.', 'RUP', 'Fases con hitos, arquitectura estable y artefactos formales.'],
      ['El equipo tiene muchos errores en el código y quiere mejorar la calidad técnica con pruebas automatizadas.', 'XP', 'TDD, integración continua y parejas reducen defectos.'],
      ['Un sistema pequeño, centrado en datos, con requisitos estables, que se quiere modelar con detalle.', 'OMT', 'Énfasis en los modelos de objetos, dinámico y funcional.'],
      ['Una startup lanza una app nueva y necesita validar ideas con usuarios cada mes.', 'Scrum', 'Iteraciones de un mes o menos con incremento utilizable.'],
      ['Un taller de mantenimiento de software atiende pedidos pequeños de distintos clientes sin fechas fijas.', 'Kanban', 'Visualiza el flujo y limita el trabajo en curso.']] },
    { tipo: 'escenario', icon: '📐', t: '¿Qué diagrama UML usarías?', d: 'Elige el diagrama que responde cada pregunta.', opciones: ['Colaboración', 'Paquetes', 'Componentes', 'Máquina de estados'], inst: 'Lea la necesidad del equipo y elija el diagrama más adecuado.', items: [
      ['Ana quiere saber qué objetos intervienen y en qué orden se envían mensajes al registrar una cosecha.', 'Colaboración', 'Muestra objetos, enlaces y mensajes numerados.'],
      ['Ana pregunta en qué "carpeta" lógica está el código de sincronización y de qué depende.', 'Paquetes', 'Organiza el sistema en grupos lógicos y sus dependencias.'],
      ['Ana necesita saber qué parte se instala en el teléfono y cuál en el servidor, y cómo se conectan.', 'Componentes', 'Muestra piezas desplegables agrupadas en dispositivos e interfaces.'],
      ['Se quiere mostrar que un registro pasa de Borrador a Guardado y luego a Sincronizado.', 'Máquina de estados', 'Describe los estados por los que pasa un objeto.'],
      ['Se quiere verificar que no haya dependencias cíclicas entre Presentación, Negocio y Datos.', 'Paquetes', 'Regla: alta cohesión, bajo acoplamiento y sin ciclos.'],
      ['Se quiere cambiar PostgreSQL por otra base de datos sin afectar la app móvil.', 'Componentes', 'Mientras la interfaz se mantenga, la pieza es reemplazable.']] },
    { tipo: 'ahorcado', icon: '🔤', t: 'Ahorcado de términos', d: 'Adivina el concepto con la pista.', palabras: [
      ['COLABORACION', 'Diagrama que muestra objetos y mensajes numerados.'], ['COMUNICACION', 'Nombre del diagrama de colaboración desde UML 2.0.'],
      ['PAQUETE', 'Agrupa elementos relacionados, como una carpeta.'], ['COMPONENTE', 'Parte modular, desplegable y reemplazable de un sistema.'],
      ['DISPOSITIVO', 'Contenedor de componentes que se despliegan juntos.'], ['INTERFAZ', 'Punto de conexión entre componentes: provista o requerida.'],
      ['SPRINT', 'Iteración de un mes o menos en Scrum.'], ['KANBAN', 'Tarjeta visual en japonés.'], ['ELABORACION', 'Fase de RUP donde se estabiliza la arquitectura.'],
      ['EMPIRISMO', 'Base de Scrum: transparencia, inspección y adaptación.'], ['REFACTORIZACION', 'Mejorar el diseño del código sin cambiar su comportamiento.'],
      ['BACKLOG', 'Lista ordenada de trabajo pendiente en Scrum.'], ['INCREMENTO', 'Resultado utilizable de cada Sprint.']] }
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
