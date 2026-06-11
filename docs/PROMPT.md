# PROMPT

Actúa como un Senior Staff Frontend Engineer especializado en:

* Astro
* Svelte
* Content-driven websites
* Information Architecture
* Investor Relations websites
* Mining / Resource sector corporate websites
* Static Site Generation (SSG)
* SEO técnico
* Accesibilidad
* Escalabilidad de contenido

Tu objetivo es diseñar la arquitectura completa de una nueva versión del sitio web corporativo de Fitzroy Minerals.

## Contexto

Fitzroy Minerals es una compañía minera enfocada en exploración y desarrollo de proyectos de cobre y oro en Chile y Argentina.

El sitio actual tiene una arquitectura antigua basada en páginas corporativas tradicionales con múltiples tabs y navegación poco optimizada.

El objetivo NO es rediseñar identidad visual, branding o colores.

El objetivo es:

* mejorar arquitectura de información
* mejorar jerarquía de contenido
* mejorar navegación
* mejorar descubrimiento de información
* mejorar experiencia para inversionistas
* facilitar mantenimiento del contenido
* construir un sitio estático moderno usando Astro

---

## Stack tecnológico requerido

El proyecto debe construirse utilizando:

* Astro
* TypeScript
* Content Collections de Astro
* Markdown / MDX para contenido editorial
* Componentes Svelte sólo cuando exista necesidad de interacción
* Generación estática (SSG)
* Sin CMS externo
* Git como fuente de verdad para el contenido

---

## Principios de arquitectura

Favorecer:

### Content First

Todo el contenido posible debe vivir en:

* Markdown
* MDX
* Archivos de datos TypeScript

No hardcodear contenido dentro de componentes.

---

### Reutilización

El contenido debe poder reutilizarse entre páginas.

Ejemplo:

* un miembro del liderazgo aparece en Home y About
* una noticia puede relacionarse con un proyecto
* una presentación puede relacionarse con un proyecto
* un reporte técnico puede relacionarse con un proyecto

---

### Escalabilidad

La arquitectura debe soportar:

* crecimiento de proyectos
* crecimiento de noticias
* crecimiento de documentos
* crecimiento de miembros del directorio

sin requerir cambios estructurales.

---

## Contenido disponible

Utiliza la siguiente estructura actual del sitio como referencia:
```

# Fitzroy Minerals

## HOMEPAGE

### Intro Banner
> (background image, text)

Focused on exploring and advancing commercial copper and gold discoveries in Chile and Argentina.

The world needs more copper mines. Fitzroy is focused on shallow exploration projects with good grade, simple metallurgy and infrastructure advantages. Gold and silver are important economic by-products.

### Video Banner
> (introductory/promotional video)

### Recent News Banner
> (3 latest news: headline/link to news, date)

### Latest Presentation Banner
> (background image, link to presentation pdf)

### Projects Banner
> (3 highlighted projects cards: title, photo, link to project page)

### Leadership Banner
> (sideways infinite scroll displays company leaders: name, role, bio snippet, link to CORPORATE>ManagementBiosTab)



## CORPORATE PAGE

### Management Bios Tab
> (List of company leaders: name, role, bio)

- Campbell Smyth
    Chairman, Director
    Mr Smyth has over 30 years of experience in the fund management, capital markets and corporate finance of the venture capital and resource sectors. Mr Smyth holds a Bachelor of Commerce from the University of Western Australia and a Postgraduate from Pembroke College, Oxford. Mr Smyth is also currently non-executive director of Carlton Precious Inc (CPI: TSXV), and non-executive chairman of Orange Minerals (OMX:ASX).

- Merlin Marr-Johnson
    President and CEO, Director

    Mr. Marr-Johnson has over 25 years of experience in the resources sector in technical, corporate, and capital markets roles. Mr. Marr-Johnson holds an honors degree in geology from Manchester University and a Master’s Degree in Mineral Deposit Evaluation from the Royal School of Mines, Imperial College. He speaks several languages, including Spanish. Mr Marr-Johnson is currently non-executive director of Salazar Resources Ltd (SRL: TSXV)

- Gilberto Schubert
    COO and Country Manager

    Gilberto Schubert is a professional geologist with over 30 years of experience in industry including early- to late-stage exploration, economic and financial evaluation of projects, planning, development, and mining operations in Brazil, Peru and Chile. From 1992 to 2013 he worked for Vale, culminating in eight years as Country Manager, Chile. Gilberto holds a BSc and an MSc in Geology from the Universidade Federal do Rio de Janeiro; an MBA from Fundação Dom Cabral, Belo Horizonte; a Diploma in Mineral Economics from Universidad de Chile, Santiago; and an MSc in Mining Economics from Curtin University of Technology, Perth.

- Craig Parry
    Technical Advisor

    Craig is a geologist with over 25 years of experience in exploration and development. He is co-founder and Chairman of Inventa Capital – a private natural resources investment company. In addition he is Chairman of Skeena Resources, Vizsla Silver, and Vizsla Copper. Craig is the former CEO and founder of IsoEnergy, a successful uranium exploration company focused on Canadian Assets, and a founding director of NexGen Energy. He was founding shareholder and Senior Advisor to EMR Capital, and spent ten years at Rio Tinto.

- Ken McNaughton
    Technical Advisor

    Ken McNaughton is a professional geological engineer with over 30 years of experience. Ken was previously Chief Exploration Officer at Pretium Resources Inc., and Vice President, Exploration at Silver Standard Resources Inc. for 20 years. He was instrumental in the discovery of Brucejack. Ken holds a Bachelor of Applied Science degree and a Master of Applied Science degree in geological engineering from the University of Windsor. Ken is currently the Chief Exploration Officer of P2 Gold (PGLD TSXV)

- Queenie Kuang
    CFO

    Queenie is a Chartered Professional Accountant and holds a Bachelor of Business Administration degree in Accounting and Finance from Simon Fraser University. She has over 17 years of experience in investment banking, listings, M&A, and financial advisory services including: financial statement preparation, public company reporting, and corporate governance support. Queenie has served as CFO and director for several publicly listed companies.

- John Seaman, ICD.D
    Director

    John Seaman is currently a Director of I-80 Gold Corp. John was the Chief Financial Officer of Premier Gold Mines from August 2006 to June 2012 and Chief Financial Officer of Wolfden Resources Inc. from October 2002 to May 2007. He also sat on the board for Premier as Lead Director. John has been a director and/or officer of various other public companies.

- Mary Gilzean
    Director

    Mary has over 25 years of experience in international mineral exploration and human resources management. She has lived and worked in Africa, Europe, and North and South America with Teck Resources and BHP Billiton. Mary is a graduate in geology from Stanford University and holds a Master’s Degree in geology from the University of California, Berkeley. She has served on the boards of several non-profit organizations in the Vancouver area. Mary is also non-executive director for Salazar Resources (TSXV).

- Victor Flores
    Director

    Victor has a Bachelor’s degree in Geological Sciences, a Master’s degree in Energy and Mineral Resources from the University of Texas at Austin, and a CFA charter. He worked as a resources analyst then Portfolio Manager and Chief Investment Officer for United Services Advisors, before spending 11 years at HSBC. From 2009 he spent nine years as a portfolio manager for Paulson & Co and since 2018 he has been a mining sector consultant, including six years as Director of Strategic Projects for Orion Resource Partners.

### Corporate Directory Tab
> (various addresses and contact info)

- Head Office
    Fitzroy Minerals Ltd.
    Suite 1400 – 1050 West Pender Street
    Vancouver, BC
    Canada    V6E 3S7
    Email: mmj@fitzroyminerals.com
    Phone: +44 (0)7803712280

- Transfer Agent
    Odyssey Transfer Inc.
    United Kingdom Building, 350 – 409 Granville Street
    Vancouver, BC
    Canada    V6C 1T2
    Email: dhewitt@odysseytrust.com
    Phone: (778) 512-2131
    Toll-Free: (888) 290-1175
    Web: https://odysseytrust.com/

- Chief Financial Officer
    Chief Financial Officer
    Email: qkuang@fitzroyminerals.com
    Phone: +44 (0)7803712280

- CEO and President
    Merlin Marr-Johnson
    Email: mmj@fitzroyminerals.com
    Phone: +44 (0)7803712280

- Auditors
    DeVISSER GRAY LLP
    Chartered Professional Accountants
    Per: G. Cameron Dong Ltd. - Incorporated Partner
    De Visser Gray LLP
    Per: G. Cameron Dong Ltd. - Incorporated Partner
    401 - 905 West Pender, Vancouver, BC, V6C 1L6
    Phone: (604) 687-5447 Ext. 8 | Fax: (604) 687-6737
    Email: cdong@devissergray.com
    Web: http://www.devissergray.com

### Privacy Policy Tab
> (privacy policy info)

- Introduction
    You can visit www.fitzroyminerals.com without telling us who you are or revealing any personal information about yourself. However our sites do utilise cookies and analytics to improve your experience. In some circumstances however, we may ask for your name, email address and other information for you to access areas of the web site that require registration. The information you share with us when filling out forms will be used only for the intended purpose to communicate and serve your needs more efficiently. We will ask you to consent to allowing us to send you communications such as email newsletters and other material and information that we think would be of interest to you.

- Cookies
    Fitzroy Minerals’ website uses cookies to provide you with tailored information. Cookies are very small bits of code, unique to a user, which a website can send to your browser to facilitate your next visit. Cookies enable seamless travel across www.fitzroyminerals.com without having to fill out registration forms with information you have already provided. Usage of a cookie is in no way linked to any personally identifiable contact information while on Fitzroy Minerals’ website. Your browser can be set to notify you when a cookie is sent, giving you the chance to decide whether or not to accept it.

- Google Analytics
    www.fitzroyminerals.com also uses Google Analytics, a web analytics service provided by Google, Inc. (“Google”). Google Analytics uses “cookies”, which are text files placed on your computer, to help us analyse how users use the site so that we can improve your online experiences. Google Analytics sets four cookies that allow us to analyse traffic on the website. Google Analytics cookies allow us to recognise and count the number of visitors to this website and to see how visitors move around the site (in particular, what pages of the website are being visited). This helps us to improve the way our website works.
    These cookies do not collect or track any personal data or information about you as an individual. Instead, they are focused on how the website is used, and seek to enhance the accessibility of the website.
    We also log your domain and IP address automatically when you visit this website. This data identifies the computer that you are using to view this website and your approximate geographic location. Again, we do this to track usage patterns.
    Note that most web browsers allow some control of cookies through browser settings. If you delete or block our cookies, some parts of the website may not work properly, because some of our cookies are necessary for the operation of this website.
    This Cookies Statement places all users of this website on notice about our use of cookies.
    Your continued use of this website confirms to us that you are aware of our use of cookies and have no objection to this.
    Our website is hosted and maintained by Adnet Communications Inc. (https://www.adnetinc.com/contact/)
    A useful site on how to manage and control cookies on different browsers is: https://www.aboutcookies.org/

- Personal Data
    On our website, we provide an option to subscribe to our email list by filling out a form in order to receive news releases or other information concerning Fitzroy Minerals Inc. By providing your e-mail address on this form, you are consenting to receive this information. However, you may withdraw your consent at any time.
    The information we ask for on this form is simply your name (first and last) and email address. Personal data that is collected through the subscribe form on our website is shared with the Company’s external service providers who assist us with our services and functions. Personal data that is collected through this website may be stored and processed in any country where Fitzroy Minerals Inc. or its external service providers operate. Adnet Communications Inc. maintains and processes our email lists.
    Another example of how you may choose to provide personal data to us through this website is by sending us an email with a question or comment. We will process the personal data that you provide through this website to answer your query and if relevant, to manage our business relationship with you or your company.
    We take all reasonable steps to protect the security of information (including personal data) that is provided by you or exchanged with you through this website. Our security measures include using firewalls, intrusion detection systems and virus scanning tools to protect against unauthorized persons and viruses from accessing the information that you provide to us, and we to you. However, please be aware that there are inherent risks in transmitting information by use of the Internet and other online or electronic transmission systems and that we cannot guarantee the security of information transmitted in this way.
    This website may contain links to third party websites. Before providing personal data to third party websites, we recommend you examine the privacy policies on those websites. Norseman Silver is not responsible for the privacy practices on third party websites.
    Fitzroy Minerals’ website, external service providers and linked third party sites are not for use by children under the age of 16 years and the Company does not knowingly collect, store, share or use the personal data of children under 16 years. If you are under the age of 16 years, please do not provide any personal data, even if prompted by the sites to do so. If you are under the age of 16 years and you have provided personal data, please ask your parent(s) or guardian(s) to notify the Company and we will delete all such personal data.
    You may choose not to have a unique web analytics cookie identification number assigned to your computer to avoid the aggregation and analysis of data collected on this website.
    To make that choice, please click here.

### Disclaimer Tab
> (disclaimer info)

- Accuracy of Information
    Readers are directed to the public disclosure of Fitzroy Minerals Inc. (Fitzroy) available under Fitzroy’s profile on the System for Electronic Document Analysis and Retrieval (“SEDAR”) at www.sedarplus.ca
    Information on this website was believed to be accurate at the time it was posted, but may be superseded by more recent public disclosure of Fitzroy. Fitzroy makes no representations or warranties as to the accuracy, reliability, completeness or timeliness of the information on this website.
    Information disclosed or provided by Fitzroy in order to comply with applicable securities laws is not intended to be in any way qualified, amended, modified or supplemented by the information otherwise available in, through, or on this website.

- Forward-Looking Information
    Some of the statements contained in this website may be forward-looking statements or forward-looking information within the meaning of applicable securities laws (collectively, "forward-looking statements"). All statements herein, other than statements of historical fact, are forward-looking statements. Although Fitzroy believes that such statements are reasonable, it can give no assurance that such expectations will prove to be correct. Forward-looking statements are typically identified by words such as: believe, expect, anticipate, intend, estimate, postulate, and similar expressions, or are those, which, by their nature, refer to future events. Fitzroy cautions investors that any forward-looking statements are not guarantees of future results or performance, and that actual results may differ materially from those in forward-looking statements as a result of various factors, including, but not limited to, capital and other costs varying significantly from estimates, changes in world metal markets, changes in equity markets, timing of exploration programs and results varying from expectations, delays in obtaining results, equipment failure, unexpected geological conditions, local community relations, dealings with non-governmental organizations, delays in operations due to permit grants, environmental and safety risks, and other risks and uncertainties disclosed in Fitzroy’s most recent public disclosure on SEDAR at www.sedarplus.ca. Any forward-looking statement speaks only as of the date on which it is made and, except as may be required by applicable securities laws, Fitzroy does not assume the obligation to revise or update forward-looking statements or information that may be contained in this website or the documents posted on it or to revise them to reflect the occurrence of future unanticipated events.

- Share Quotes and Charts
    Fitzroy does not guarantee the sequence, accuracy or completeness of any share quotes available on this website or other data displayed, and is not liable or responsible in any way for any delays, inaccuracies or errors in any share price information or data or in the transmission of any share price information or data. Any share price information or data provided is not to be relied upon for any trading, business or financial purpose and Fitzroy and Fitzroy’s service providers are not liable or responsible in any way for any damages, losses or costs arising from reliance upon this information or incurred as a result of the non-performance, interruption or termination for any reason whatsoever of the share price information or data.

- No Solicitation
    Material contained in or accessible through this website is for information purposes only and is not intended to and does not constitute an offering of securities in any jurisdiction. Fitzroy does not assume any duty of disclosure beyond that which is required by applicable law.

- Investment Decisions
    Due to the technical and security risks inherent in the internet, because information on this website may be out of date or superseded by more recent public disclosure of Fitzroy, and because the document you access may differ from the original depending on your browser software, the information set out in this website should not be used for the purpose of making investment decisions with respect to Fitzroy’s securities. If you are contemplating trading in Fitzroy’s securities, you should review Fitzroy’s public disclosure on SEDAR at www.sedarplus.ca and contact your securities broker or financial advisors.

- Privacy Statement
    Fitzroy’s website does not collect any personal information about visitors to this website other than that which is specifically and knowingly provided by you. That personal information will not be transferred to any third party unless otherwise stated at the time of collection. Fitzroy does collect and maintain statistics relating to the number of visits to the website, the types of browsers used and the Internet Protocol Address of the originator. This information is used only for internal purposes.



## PROJECTS PAGE
> (a tab for each project with info, photos)



## INVESTORS PAGE

### Stock Information Tab
> (a sub-tab for 'TSX-V: FTZ' and 'OTC: FTZFF' stocks: graph and info)

### Share Structure Tab
> (share info)
as of January 28, 2026
Issued & Outstanding*   282,293,754
Stock Options           24,325,000
Warrants 		        30,025,368
Fully Diluted 		    336,644,122

### Presentations Tab
> (list of corporate presentations: thumbnail, title/date, link to pdf of slideshow)

### Financials Tab
> (list of quarterly reports by year: link to Financial Statement 'FS' and Management Discusion & Analysis 'MDA' pdfs)

### Technical Report Tab
> (title and link to pdf of 'National Instrument 43-101 Technical Report for the Buen Retiro Copper Project')

### Media and Research Tab
> (list of videos, letters to shareholders, capital reports and external links to relevant articles and posts)

### Annual General Meeting Tab
> (shareholder meeting info and list of meeting materials pdfs)
The annual general and special meeting of the shareholders of Fitzroy Minerals Inc. will be held at 3:00 p.m. (Vancouver time) on Friday, October 24, 2025 at Suite 1400 – 1050 West Pender Street, Vancouver, British Columbia.

### 'LIFE' Offering Tab
> (legally required yes/no prompt, if yes: 'DOCUMENT UNAVAILABLE', else: link to offer info pdf)



## NEWS PAGE
> (list of news: title, date, link to article, link to pdf version)



## CONTACT PAGE

### Contact Info Tab
Fitzroy Minerals Inc.
Head Office
Suite 1400 – 1050 West Pender Street
Vancouver, BC
Canada    V6E 3S7
Email: mmj@fitzroyminerals.com
Tel: +44 7803712280

### Subscribe Tab
> (name & email input + CAPTCHA form to 'subscribe for updates')

```


---