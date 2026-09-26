window.SEMANA = {
  id: 'semana3',
  resumen: [
    { t: 'Arquitectura de software', d: 'Estructura del sistema: sus <b>elementos</b>, sus propiedades visibles y sus <b>relaciones</b>. Captura decisiones tempranas que determinan la <b>calidad</b>.' },
    { t: 'Estilos arquitectónicos', d: '<b>Capas</b>, <b>cliente-servidor</b>, <b>MVC</b> y <b>servicios/microservicios</b> organizan el sistema completo.' },
    { t: 'Patrones de diseño', d: 'Soluciones reutilizables a problemas recurrentes (GoF, 1994): <b>creacionales</b>, <b>estructurales</b> y <b>de comportamiento</b>.' },
    { t: 'MDA', d: 'Arquitectura Dirigida por Modelos (OMG): <b>CIM → PIM → PSM → código</b> mediante transformaciones.' },
    { t: 'SOA', d: 'Funciones de negocio expuestas como <b>servicios reutilizables</b> con <b>contratos estándar</b> (REST/JSON, SOAP/XML).' },
    { t: 'Calendarización', d: '<b>EDT</b> → estimación <b>PERT</b> Te = (O + 4M + P)/6 → dependencias y <b>ruta crítica</b> → <b>Gantt</b> con hitos.' }
  ],
  ideas: [
    'Un <b>estilo</b> organiza todo el sistema; un <b>patrón de diseño</b> resuelve un problema local entre pocas clases.',
    'Atributos de calidad: rendimiento, seguridad, disponibilidad, mantenibilidad y escalabilidad.',
    'En MDA el <b>PIM</b> no menciona tecnología; el <b>PSM</b> sí (Android, Java, PostgreSQL…).',
    'SOA favorece la <b>reutilización</b>: la app, el portal web y el beneficio usan el mismo servicio de Cosechas.',
    'La <b>ruta crítica</b> es la secuencia más larga de tareas: si una se atrasa, se atrasa todo el proyecto.'
  ],
  secciones: [
    { t: '1. ¿Qué es la arquitectura de software?', html: `
      <p>Según Bass, Clements y Kazman (2012), es la estructura del sistema formada por sus <b>elementos</b>, las <b>propiedades visibles</b> de esos elementos y las <b>relaciones</b> entre ellos.</p>
      <p><b>¿Por qué importa?</b> Facilita la comunicación con los interesados, captura decisiones difíciles de revertir, determina los atributos de calidad y permite reutilizar a gran escala.</p>
      <div class="tablewrap"><table><tr><th>Atributo</th><th>Pregunta clave</th><th>Decisión que lo favorece</th></tr>
      <tr><td>Rendimiento</td><td>¿Responde rápido?</td><td>Caché, pocas llamadas remotas</td></tr>
      <tr><td>Seguridad</td><td>¿Protege los datos?</td><td>Autenticación centralizada, capas</td></tr>
      <tr><td>Disponibilidad</td><td>¿Funciona si algo falla?</td><td>Redundancia, modo offline</td></tr>
      <tr><td>Mantenibilidad</td><td>¿Es fácil de cambiar?</td><td>Bajo acoplamiento, componentes pequeños</td></tr>
      <tr><td>Escalabilidad</td><td>¿Crece sin rehacerse?</td><td>Servicios que escalan por separado</td></tr></table></div>` },
    { t: '2. Estilos arquitectónicos: capas y MVC', html: `
      <figure class="fig"><img src="assets/img/capas.png" alt="Arquitectura en capas" loading="lazy"><figcaption>Arquitectura en capas de CaféApp</figcaption></figure>
      <p>En la arquitectura en <b>capas</b>, cada capa usa solo la de abajo: presentación → negocio → datos → base de datos.</p>
      <figure class="fig"><img src="assets/img/mvc.png" alt="Patrón Modelo Vista Controlador" loading="lazy"><figcaption>Modelo-Vista-Controlador</figcaption></figure>
      <p><b>MVC</b> separa los datos y reglas (<b>Modelo</b>), la presentación (<b>Vista</b>) y la gestión de eventos (<b>Controlador</b>). Permite varias vistas del mismo modelo.</p>
      <div class="note">Otros estilos: <b>cliente-servidor</b> (datos centralizados) y <b>microservicios</b> (servicios pequeños desplegados por separado).</div>` },
    { t: '3. Patrones de diseño (GoF)', html: `
      <div class="tablewrap"><table><tr><th>Categoría</th><th>Propósito</th><th>Ejemplos</th></tr>
      <tr><td>Creacionales</td><td>Cómo se crean los objetos</td><td>Singleton, Factory Method, Builder</td></tr>
      <tr><td>Estructurales</td><td>Cómo se combinan clases y objetos</td><td>Adapter, Facade, Decorator</td></tr>
      <tr><td>De comportamiento</td><td>Cómo se comunican y reparten tareas</td><td>Observer, Strategy, State</td></tr></table></div>
      <figure class="fig"><img src="assets/img/observer.png" alt="Patrón Observer" loading="lazy"><figcaption>Patrón Observer: los precios del café notifican a sus observadores</figcaption></figure>
      <pre style="background:var(--surface-2);padding:12px;border-radius:10px;overflow-x:auto;font-size:13px"><code>interface Observador { fun actualizar(precio: Double) }
class ServicioPrecios {
    private val observadores = mutableListOf&lt;Observador&gt;()
    fun suscribir(o: Observador) = observadores.add(o)
    fun cambiarPrecio(p: Double) = observadores.forEach { it.actualizar(p) }
}</code></pre>` },
    { t: '4. Arquitectura Dirigida por Modelos (MDA)', html: `
      <p>Propuesta por el <b>OMG</b> en 2001: los <b>modelos</b> son el artefacto central y el código se obtiene mediante <b>transformaciones</b>.</p>
      <figure class="fig"><img src="assets/img/mda.png" alt="Niveles de MDA" loading="lazy"><figcaption>CIM → PIM → PSM → código</figcaption></figure>
      <div class="tablewrap"><table><tr><th>Modelo</th><th>Contenido</th><th>Ejemplo</th></tr>
      <tr><td>CIM</td><td>Negocio, sin software</td><td>Entrega de café al beneficio</td></tr>
      <tr><td>PIM</td><td>Solución UML sin tecnología</td><td>Clases Productor, Cosecha</td></tr>
      <tr><td>PSM</td><td>Solución para una plataforma</td><td>Entidades Room (Android) o JPA</td></tr>
      <tr><td>Código</td><td>Resultado de la transformación</td><td>Clases Kotlin, SQL</td></tr></table></div>
      <div class="note tip"><b>Beneficios:</b> portabilidad, productividad, documentación actualizada. <b>Limitaciones:</b> herramientas especializadas (EMF, Papyrus, Acceleo) y curva de aprendizaje.</div>` },
    { t: '5. Arquitectura Orientada a Servicios (SOA)', html: `
      <p>Organiza el sistema como <b>servicios</b> autónomos y reutilizables que se comunican mediante <b>contratos</b>.</p>
      <figure class="fig"><img src="assets/img/soa.png" alt="Arquitectura orientada a servicios" loading="lazy"><figcaption>Varios consumidores reutilizan los mismos servicios</figcaption></figure>
      <p><b>Elementos:</b> proveedor, consumidor, contrato (WSDL u OpenAPI), registro de servicios y bus de servicios (ESB) o API Gateway.</p>
      <p><b>Principios (Erl):</b> contrato estandarizado, bajo acoplamiento, abstracción, reutilización, autonomía, sin estado, descubrimiento y composición.</p>
      <div class="tablewrap"><table><tr><th></th><th>SOAP</th><th>REST</th></tr>
      <tr><td>Formato</td><td>XML con sobre</td><td>JSON habitual</td></tr><tr><td>Contrato</td><td>WSDL</td><td>OpenAPI (opcional)</td></tr>
      <tr><td>Uso típico</td><td>Banca, gobierno</td><td>Apps móviles y web</td></tr></table></div>` },
    { t: '6. Calendarización del desarrollo', html: `
      <ol><li><b>EDT (WBS):</b> descomponer proyecto → fases → tareas.</li>
      <li><b>PERT:</b> Te = (O + 4M + P) / 6, con estimación optimista, más probable y pesimista.</li>
      <li><b>Dependencias y ruta crítica:</b> la secuencia más larga determina la duración total.</li>
      <li><b>Hitos:</b> eventos clave sin duración (Beta lista, Entrega).</li>
      <li><b>Gantt:</b> barras en el tiempo para dar seguimiento.</li></ol>
      <figure class="fig"><img src="assets/img/gantt.png" alt="Diagrama de Gantt" loading="lazy"><figcaption>Cronograma de CaféApp</figcaption></figure>
      <div class="note"><b>Ejemplo:</b> O = 4, M = 6, P = 14 → Te = (4 + 24 + 14) / 6 = <b>7 días</b>.</div>` },
    { t: '7. Cierre integrador: plan de proyecto simplificado', html: `
      <ol><li>Portada y descripción</li><li>Charter</li><li>Minuta</li><li>Matriz de roles y de comunicación</li><li>Matriz de riesgos</li>
      <li>Diagramas UML (estados, colaboración, paquetes, componentes)</li><li>Metodología y backlog/tablero</li><li>Arquitectura (estilo, patrón, servicios)</li>
      <li>Cronograma (EDT, PERT, Gantt)</li><li>Conclusiones y lecciones aprendidas</li></ol>` }
  ],
  flash: [
    ['Arquitectura de software', 'Estructura del sistema: elementos, propiedades visibles y relaciones entre ellos.'],
    ['Estilo en capas', 'Cada capa ofrece servicios a la superior y usa solo la inferior.'],
    ['MVC', 'Modelo (datos y reglas), Vista (presentación) y Controlador (eventos).'],
    ['Patrón de diseño', 'Solución reutilizable a un problema de diseño recurrente en un contexto.'],
    ['Singleton', 'Patrón creacional: garantiza una única instancia de una clase.'],
    ['Adapter', 'Patrón estructural: convierte la interfaz de una clase en otra que el cliente espera.'],
    ['Observer', 'Patrón de comportamiento: notifica a los suscriptores cuando cambia el estado del sujeto.'],
    ['CIM', 'Modelo Independiente de la Computación: describe el negocio.'],
    ['PIM', 'Modelo Independiente de la Plataforma: solución en UML sin tecnología concreta.'],
    ['PSM', 'Modelo Específico de la Plataforma: el PIM adaptado a una tecnología.'],
    ['SOA', 'Arquitectura de servicios reutilizables que se comunican mediante contratos estándar.'],
    ['ESB / API Gateway', 'Intermediario que enruta, transforma mensajes y aplica seguridad entre servicios.'],
    ['PERT', 'Te = (O + 4M + P) / 6'],
    ['Ruta crítica', 'Secuencia de tareas más larga; su retraso retrasa todo el proyecto.']
  ],
  quiz: [
    { q: '¿Qué define mejor la arquitectura de software?', o: ['Los elementos del sistema, sus propiedades visibles y sus relaciones', 'El lenguaje de programación elegido', 'El diseño de la interfaz gráfica', 'La lista de requisitos'], a: 0, e: 'Definición de Bass, Clements y Kazman: elementos, propiedades y relaciones.' },
    { q: '¿Por qué las decisiones de arquitectura son críticas?', o: ['Se toman temprano y son costosas de cambiar', 'Porque las decide solo el cliente', 'Porque no afectan la calidad', 'Porque se toman al final'], a: 0, e: 'Capturan decisiones tempranas que condicionan todo el proyecto y sus atributos de calidad.' },
    { q: 'En MVC, ¿qué componente recibe los eventos del usuario y decide qué hacer?', o: ['Controlador', 'Modelo', 'Vista', 'Repositorio'], a: 0, e: 'El Controlador interpreta los eventos y actualiza el Modelo.' },
    { q: 'Observer es un patrón…', o: ['De comportamiento', 'Creacional', 'Estructural', 'Arquitectónico'], a: 0, e: 'Observer define cómo se comunican objetos: un sujeto notifica a sus observadores.' },
    { q: '¿Qué patrón usaría para conectar un servicio externo cuya interfaz no coincide con la de su app?', o: ['Adapter', 'Singleton', 'Observer', 'Builder'], a: 0, e: 'Adapter convierte una interfaz en otra que el cliente espera.' },
    { q: '¿Qué organismo propuso MDA?', o: ['Object Management Group (OMG)', 'IEEE', 'ISO', 'W3C'], a: 0, e: 'El OMG, que también mantiene UML, propuso MDA en 2001.' },
    { q: 'Un diagrama de clases UML de CaféApp sin mencionar Android ni Java es un…', o: ['PIM', 'CIM', 'PSM', 'Código'], a: 0, e: 'El PIM modela la solución de software sin tecnología concreta.' },
    { q: '¿Cuál es el orden correcto de modelos en MDA?', o: ['CIM → PIM → PSM → código', 'PSM → PIM → CIM → código', 'PIM → CIM → código → PSM', 'Código → PSM → PIM → CIM'], a: 0, e: 'Del negocio (CIM) a la solución independiente (PIM), luego a la plataforma (PSM) y al código.' },
    { q: 'La principal ventaja de SOA es…', o: ['Reutilizar servicios entre varias aplicaciones', 'Eliminar la necesidad de redes', 'Tener una sola base de datos gigante', 'Evitar el uso de contratos'], a: 0, e: 'Los servicios con contratos estándar pueden ser consumidos por muchas aplicaciones.' },
    { q: '¿Qué formato de contrato se asocia a SOAP?', o: ['WSDL', 'OpenAPI', 'CSV', 'Markdown'], a: 0, e: 'Los servicios SOAP se describen con WSDL; los REST, comúnmente con OpenAPI.' },
    { q: 'Con O = 3, M = 5 y P = 13, el tiempo esperado PERT es…', o: ['6 días', '5 días', '7 días', '21 días'], a: 0, e: 'Te = (3 + 20 + 13) / 6 = 36 / 6 = 6 días.' },
    { q: '¿Qué es la ruta crítica?', o: ['La secuencia de tareas más larga del proyecto', 'La tarea más difícil', 'La lista de riesgos', 'La primera tarea del cronograma'], a: 0, e: 'Si cualquier tarea de la ruta crítica se retrasa, se retrasa todo el proyecto.' },
    { q: 'Un hito en un cronograma…', o: ['Es un evento clave sin duración', 'Es la tarea más larga', 'Es un riesgo', 'Es un recurso humano'], a: 0, e: 'Los hitos marcan momentos clave como "Beta lista" o "Entrega".' },
    { q: 'La diferencia entre estilo arquitectónico y patrón de diseño es que…', o: ['El estilo organiza el sistema completo; el patrón resuelve un problema local', 'Son exactamente lo mismo', 'El patrón es solo para bases de datos', 'El estilo solo aplica a aplicaciones web'], a: 0, e: 'Estilos (capas, MVC, SOA) son de alto nivel; patrones GoF actúan entre pocas clases.' }
  ],
  juegos: [
    { tipo: 'match', icon: '🧩', t: 'Patrón ↔ problema', d: 'Une cada patrón con el problema que resuelve.', n: 6, inst: 'Toque un patrón y luego el problema que resuelve.', pares: [
      ['Singleton', 'Una única conexión a la base de datos'], ['Observer', 'Avisar a varias pantallas cuando cambia el precio'],
      ['Adapter', 'Usar un servicio externo con otra interfaz'], ['Facade', 'Ofrecer una interfaz simple a un subsistema complejo'],
      ['Factory Method', 'Crear objetos sin acoplarse a su clase concreta'], ['Strategy', 'Cambiar el algoritmo de cálculo en tiempo de ejecución'],
      ['State', 'Cambiar el comportamiento según el estado del objeto'], ['Decorator', 'Agregar funciones a un objeto sin modificar su clase']] },
    { tipo: 'clasificar', icon: '🗂️', t: 'Categorías GoF', d: 'Creacional, estructural o de comportamiento.', cats: ['Creacional', 'Estructural', 'De comportamiento'], items: [
      ['Singleton', 'Creacional'], ['Factory Method', 'Creacional'], ['Builder', 'Creacional'], ['Prototype', 'Creacional'],
      ['Adapter', 'Estructural'], ['Facade', 'Estructural'], ['Decorator', 'Estructural'], ['Composite', 'Estructural'],
      ['Observer', 'De comportamiento'], ['Strategy', 'De comportamiento'], ['State', 'De comportamiento'], ['Command', 'De comportamiento']] },
    { tipo: 'clasificar', icon: '🧱', t: 'Niveles de MDA', d: 'Ubica cada ejemplo en CIM, PIM o PSM.', cats: ['CIM', 'PIM', 'PSM'], items: [
      ['Proceso de entrega de café al beneficio', 'CIM'], ['Reglas de pago de la cooperativa', 'CIM'], ['El productor registra la cosecha en su cuaderno', 'CIM'],
      ['Diagrama de clases Productor–Cosecha', 'PIM'], ['Máquina de estados del registro', 'PIM'], ['Diagrama de colaboración de "Registrar cosecha"', 'PIM'],
      ['Entidad Room en Kotlin para Cosecha', 'PSM'], ['Tabla PostgreSQL con tipos específicos', 'PSM'], ['Controlador Spring con anotaciones', 'PSM']] },
    { tipo: 'ordenar', icon: '🔢', t: 'Cadena MDA', d: 'Ordena del negocio al código.', inst: 'Ordene los modelos de MDA desde el más abstracto.', exp: 'Refinamiento → transformación → generación.', items: [
      'CIM – Modelo del negocio', 'PIM – Modelo UML independiente de la plataforma', 'PSM – Modelo para Android/Kotlin', 'Código fuente generado'] },
    { tipo: 'ordenar', icon: '📅', t: 'Pasos para calendarizar', d: 'Ordena el proceso de planificación del tiempo.', inst: 'Ordene los pasos para calendarizar un proyecto.', exp: 'Luego se da seguimiento semanal al Gantt.', items: [
      'Elaborar la EDT (proyecto → fases → tareas)', 'Estimar cada tarea con PERT', 'Identificar dependencias y ruta crítica', 'Definir hitos', 'Construir el diagrama de Gantt'] },
    { tipo: 'pert', icon: '🧮', t: 'Reto PERT', d: 'Calcula el tiempo esperado de tareas aleatorias.', inst: 'Use la fórmula Te = (O + 4M + P) / 6. Los resultados son enteros o terminan en ,5.', tareas: [
      'Diseño de la base de datos', 'Pantalla de registro offline', 'API REST de cosechas', 'Pruebas con productores', 'Módulo de sincronización', 'Capacitación a técnicos'] },
    { tipo: 'escenario', icon: '🎯', t: '¿Qué arquitectura aplica?', d: 'Elige el estilo o enfoque adecuado.', opciones: ['Capas', 'MVC', 'SOA', 'MDA', 'Cliente-servidor'], inst: 'Lea la situación y elija la arquitectura o enfoque más adecuado.', items: [
      ['La app, el portal web y el sistema del beneficio necesitan usar la misma lógica de cosechas.', 'SOA', 'Un servicio reutilizable con contrato estándar evita duplicar lógica.'],
      ['Se quiere generar el código para Android y para web a partir del mismo modelo UML.', 'MDA', 'Un PIM transformado en varios PSM.'],
      ['Una pantalla debe mostrar los mismos datos en forma de tabla y de gráfico.', 'MVC', 'Varias vistas del mismo modelo.'],
      ['Separar presentación, reglas de negocio y acceso a datos para facilitar el mantenimiento.', 'Capas', 'Cada capa usa solo la inferior.'],
      ['Varias computadoras de una oficina consultan una base de datos central.', 'Cliente-servidor', 'Clientes solicitan servicios a un servidor central.'],
      ['Una alcaldía quiere integrar catastro, cobros y registro civil que ya existen.', 'SOA', 'Integración de sistemas mediante servicios.']] },
    { tipo: 'ahorcado', icon: '🔤', t: 'Ahorcado de arquitecturas', d: 'Adivina el concepto con la pista.', palabras: [
      ['ARQUITECTURA', 'Elementos, propiedades y relaciones de un sistema.'], ['SINGLETON', 'Patrón de una sola instancia.'],
      ['OBSERVER', 'Patrón que notifica a suscriptores.'], ['SERVICIO', 'Unidad reutilizable de SOA.'], ['GANTT', 'Diagrama de barras para el cronograma.'],
      ['HITO', 'Evento clave sin duración.'], ['PLATAFORMA', 'La "P" que diferencia al PIM del PSM.'], ['CONTROLADOR', 'La "C" de MVC.'], ['ADAPTER', 'Patrón que convierte una interfaz en otra.']] }
  ],
  asignIntro: 'Las instrucciones completas, las rúbricas y la lista de cotejo de autoevaluación están en el documento <b>Asignaciones Encuentro 3</b>. El plan de proyecto simplificado es el producto integrador del componente.',
  asignaciones: [
    ['B1', 'Tabla SQA sobre arquitecturas', 'Individual', 'Dom. 04/10/2026, 11:59 p. m.'],
    ['B2', 'Resumen y síntesis: MDA y SOA', 'Individual', 'Mié. 07/10/2026, 11:59 p. m.'],
    ['B3', 'Ensayo breve: "La arquitectura de software como decisión profesional"', 'Individual', 'Mié. 07/10/2026, 11:59 p. m.'],
    ['B4', 'Propuesta de arquitectura del proyecto', 'Equipo', 'Dom. 04/10/2026 (seminario)'],
    ['B5', 'Cronograma: EDT, PERT y Gantt', 'Equipo', 'Dom. 04/10/2026 (seminario)'],
    ['B6', 'Plan de proyecto simplificado (producto integrador)', 'Equipo', 'Dom. 11/10/2026, 11:59 p. m.'],
    ['B7', 'Seminario de cierre (exposición de 5 min)', 'Equipo', 'Dom. 04/10/2026'],
    ['B8', 'Autoevaluación con lista de cotejo', 'Individual', 'Con la entrega del plan']
  ]
};
