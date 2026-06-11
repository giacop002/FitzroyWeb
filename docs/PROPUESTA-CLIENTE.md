# Propuesta de Rediseño Web
## Fitzroy Minerals Ltd.
**Versión 1.0 — Junio 2026**

---

## Introducción

El presente documento describe los cambios propuestos para el nuevo sitio web de Fitzroy Minerals. Su objetivo es explicar, de forma clara, qué se cambia, por qué se cambia, y qué beneficio concreto representa cada decisión — tanto para la empresa como para quienes visitan el sitio.

Este proceso no implica un cambio de identidad visual ni de marca. El foco es exclusivamente mejorar la forma en que se organiza y presenta la información que Fitzroy ya tiene.

---

## Qué cambia y por qué

### 1. La navegación principal se simplifica y se hace más directa

**Situación actual:** la navegación mezcla secciones corporativas con secciones de inversionistas, sin una jerarquía clara.

**Propuesta:** cinco secciones principales, cada una con un propósito inequívoco.

| Sección | Para quién |
|---|---|
| **About** | Quienes quieren conocer la empresa y su equipo |
| **Projects** | Quienes quieren evaluar los activos mineros |
| **Investors** | Inversionistas actuales y potenciales |
| **News** | Quienes siguen la actividad de la empresa |
| **Contact** | Quienes quieren comunicarse o suscribirse |

Esta estructura refleja cómo los visitantes realmente usan el sitio, y facilita que cada tipo de usuario encuentre lo que necesita sin explorar secciones que no le corresponden.

---

### 2. La página de inicio comunica la propuesta de valor de la empresa

**Situación actual:** la página de inicio tiene un banner introductorio y luego enlaza a distintas secciones, pero no responde de forma inmediata las preguntas que hace un inversionista que visita el sitio por primera vez: *¿qué tiene esta empresa? ¿por qué vale la pena mirarla? ¿cómo está la acción?*

**Propuesta:** la página de inicio se estructura en secciones con propósitos definidos:

- **Banner principal:** posicionamiento de la empresa en una o dos frases.
- **Pilares estratégicos:** tres razones concretas por las que Fitzroy es una propuesta de inversión diferenciada (proyectos someros, metalurgia simple, infraestructura disponible). Esto no requiere que el visitante lea documentos para entender el thesis de la empresa.
- **Proyectos destacados:** los activos clave, con foto, ubicación y etapa de desarrollo. Visibles desde la página de inicio.
- **Noticias recientes:** los tres últimos comunicados, con fecha y enlace directo.
- **Última presentación corporativa:** acceso en un clic al documento más importante para inversionistas.
- **Equipo de gestión:** presentación del equipo con nombres, roles y una frase de credenciales. Con enlace a las biografías completas.
- **Información bursátil:** precio y variación de la acción en tiempo real, sin necesidad de salir del sitio.

Cada sección tiene un propósito claro y se apoya en información real de la empresa.

---

### 3. Los proyectos tienen páginas propias completas

**Situación actual:** los proyectos se presentan como pestañas dentro de una misma página, lo que limita la profundidad de información que se puede mostrar por proyecto.

**Propuesta:** La información técnica más detallada queda disponible dentro de la página del proyecto, sin afectar la legibilidad del resto del sitio.

---

### 4. La sección de Investor Relations se convierte en un hub centralizado

**Situación actual:** la información para inversionistas está dividida en múltiples pestañas que no tienen una relación visual entre sí.

**Propuesta:** la sección `/investors` funciona como un panel de control para inversionistas. Al ingresar, el visitante ve de inmediato:

- El precio actual de la acción (TSX-V: FTZ y OTC: FTZFF).
- La estructura accionaria actualizada.
- La última presentación corporativa disponible para descarga.
- Los últimos reportes financieros (estados financieros y MD&A).
- El reporte técnico NI 43-101.
- Información sobre el próximo Annual General Meeting.

Desde ese panel central, cada sección tiene su propia página con el historial completo. Un inversionista que visita el sitio regularmente puede ver todo lo relevante en una sola pantalla, y profundizar en lo que necesita con un clic.

---

### 5. Las noticias se pueden filtrar por tema

**Situación actual:** las noticias aparecen como una lista cronológica, sin posibilidad de filtrar por tipo de comunicado.

**Propuesta:** cada noticia se clasifica en una categoría (resultados de exploración, actualización corporativa, información financiera, cambios de gestión, entre otras). En la página de noticias, el visitante puede filtrar por categoría sin necesidad de abandonar la página.

Esto es especialmente útil para analistas técnicos que sólo quieren ver resultados de perforación, o para inversionistas que quieren seguir la actividad corporativa separada de los anuncios de financiamiento.

---

### 6. El equipo y sus biografías son más accesibles

**Situación actual:** las biografías del equipo están en una pestaña dentro de la sección "Corporate", lo que las hace poco visibles para quienes evalúan la empresa.

**Propuesta:** el equipo aparece en dos lugares:

- En la página de inicio: el nombre, cargo y una frase corta de cada persona, como referencia rápida de credibilidad.
- En la página `/about/leadership`: las biografías completas, organizadas por rol (directorio, gestión, asesores técnicos).

Esta visibilidad es relevante porque en el sector de junior miners, el equipo es frecuentemente uno de los factores más determinantes en la decisión de inversión.

---

### 7. El contenido se puede actualizar sin necesidad de un desarrollador

**Situación actual:** agregar o modificar contenido (noticias, documentos, información de proyectos) requiere acceso al código del sitio.

**Propuesta:** todo el contenido editorial del sitio — noticias, documentos, datos del proyecto, información del equipo — se almacena en archivos de texto estructurado que siguen un formato predefinido. Agregar una nueva noticia o subir una nueva presentación implica crear un archivo de texto con la información correspondiente y cargarlo al repositorio. No se requiere tocar el código del sitio.

Esto reduce la dependencia del equipo de desarrollo para tareas rutinarias y disminuye el riesgo de errores en actualizaciones frecuentes.

---

## Qué no cambia

- La identidad visual, los colores, la tipografía y el logotipo de Fitzroy no se modifican en esta etapa.
- El contenido existente se migra íntegramente al nuevo sitio. No se elimina información, se reorganiza.
- Los documentos actuales (presentaciones, reportes financieros, reporte NI 43-101) mantienen sus enlaces de descarga.
- La política de privacidad y el disclaimer legal se mantienen, accesibles desde el footer.

---

## Resumen de beneficios

| Área | Beneficio |
|---|---|
| Inversionistas | Acceso más rápido a la información más relevante: precio, presentación, financials |
| Proyectos | Cada activo tiene su propia presencia digital, compartible y detallada |
| Equipo | Mayor visibilidad de las credenciales del management |
| Comunicaciones | Noticias clasificadas y filtrables |
| Operaciones | El contenido se puede actualizar sin necesidad de desarrollo |
| Posicionamiento | El sitio refleja mejor la seriedad y el estadio de desarrollo de la empresa |

---

*Fitzroy Minerals Ltd. — Propuesta de Rediseño Web v1.0*
*Documento preparado para revisión del cliente — Junio 2026*
