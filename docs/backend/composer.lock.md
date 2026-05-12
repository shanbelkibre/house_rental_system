# composer.lock

## Code (numbered)

```text
1 {
2     "_readme": [
3         "This file locks the dependencies of your project to a known state",
4         "Read more about it at https://getcomposer.org/doc/01-basic-usage.md#installing-dependencies",
5         "This file is @generated automatically"
6     ],
7     "content-hash": "6be428b73177f694ff71535a3fb32467",
8     "packages": [
9         {
10             "name": "brick/math",
11             "version": "0.14.8",
12             "source": {
13                 "type": "git",
14                 "url": "https://github.com/brick/math.git",
15                 "reference": "63422359a44b7f06cae63c3b429b59e8efcc0629"
16             },
17             "dist": {
18                 "type": "zip",
19                 "url": "https://api.github.com/repos/brick/math/zipball/63422359a44b7f06cae63c3b429b59e8efcc0629",
20                 "reference": "63422359a44b7f06cae63c3b429b59e8efcc0629",
21                 "shasum": ""
22             },
23             "require": {
24                 "php": "^8.2"
25             },
26             "require-dev": {
27                 "php-coveralls/php-coveralls": "^2.2",
28                 "phpstan/phpstan": "2.1.22",
29                 "phpunit/phpunit": "^11.5"
30             },
31             "type": "library",
32             "autoload": {
33                 "psr-4": {
34                     "Brick\\Math\\": "src/"
35                 }
36             },
37             "notification-url": "https://packagist.org/downloads/",
38             "license": [
39                 "MIT"
40             ],
41             "description": "Arbitrary-precision arithmetic library",
42             "keywords": [
43                 "Arbitrary-precision",
44                 "BigInteger",
45                 "BigRational",
46                 "arithmetic",
47                 "bigdecimal",
48                 "bignum",
49                 "bignumber",
50                 "brick",
51                 "decimal",
52                 "integer",
53                 "math",
54                 "mathematics",
55                 "rational"
56             ],
57             "support": {
58                 "issues": "https://github.com/brick/math/issues",
59                 "source": "https://github.com/brick/math/tree/0.14.8"
60             },
61             "funding": [
62                 {
63                     "url": "https://github.com/BenMorel",
64                     "type": "github"
65                 }
66             ],
67             "time": "2026-02-10T14:33:43+00:00"
68         },
69         {
70             "name": "carbonphp/carbon-doctrine-types",
71             "version": "3.2.0",
72             "source": {
73                 "type": "git",
74                 "url": "https://github.com/CarbonPHP/carbon-doctrine-types.git",
75                 "reference": "18ba5ddfec8976260ead6e866180bd5d2f71aa1d"
76             },
77             "dist": {
78                 "type": "zip",
79                 "url": "https://api.github.com/repos/CarbonPHP/carbon-doctrine-types/zipball/18ba5ddfec8976260ead6e866180bd5d2f71aa1d",
80                 "reference": "18ba5ddfec8976260ead6e866180bd5d2f71aa1d",
81                 "shasum": ""
82             },
83             "require": {
84                 "php": "^8.1"
85             },
86             "conflict": {
87                 "doctrine/dbal": "<4.0.0 || >=5.0.0"
88             },
89             "require-dev": {
90                 "doctrine/dbal": "^4.0.0",
91                 "nesbot/carbon": "^2.71.0 || ^3.0.0",
92                 "phpunit/phpunit": "^10.3"
93             },
94             "type": "library",
95             "autoload": {
96                 "psr-4": {
97                     "Carbon\\Doctrine\\": "src/Carbon/Doctrine/"
98                 }
99             },
100             "notification-url": "https://packagist.org/downloads/",
101             "license": [
102                 "MIT"
103             ],
104             "authors": [
105                 {
106                     "name": "KyleKatarn",
107                     "email": "kylekatarnls@gmail.com"
108                 }
109             ],
110             "description": "Types to use Carbon in Doctrine",
111             "keywords": [
112                 "carbon",
113                 "date",
114                 "datetime",
115                 "doctrine",
116                 "time"
117             ],
118             "support": {
119                 "issues": "https://github.com/CarbonPHP/carbon-doctrine-types/issues",
120                 "source": "https://github.com/CarbonPHP/carbon-doctrine-types/tree/3.2.0"
121             },
122             "funding": [
123                 {
124                     "url": "https://github.com/kylekatarnls",
125                     "type": "github"
126                 },
127                 {
128                     "url": "https://opencollective.com/Carbon",
129                     "type": "open_collective"
130                 },
131                 {
132                     "url": "https://tidelift.com/funding/github/packagist/nesbot/carbon",
133                     "type": "tidelift"
134                 }
135             ],
136             "time": "2024-02-09T16:56:22+00:00"
137         },
138         {
139             "name": "dflydev/dot-access-data",
140             "version": "v3.0.3",
141             "source": {
142                 "type": "git",
143                 "url": "https://github.com/dflydev/dflydev-dot-access-data.git",
144                 "reference": "a23a2bf4f31d3518f3ecb38660c95715dfead60f"
145             },
146             "dist": {
147                 "type": "zip",
148                 "url": "https://api.github.com/repos/dflydev/dflydev-dot-access-data/zipball/a23a2bf4f31d3518f3ecb38660c95715dfead60f",
149                 "reference": "a23a2bf4f31d3518f3ecb38660c95715dfead60f",
150                 "shasum": ""
151             },
152             "require": {
153                 "php": "^7.1 || ^8.0"
154             },
155             "require-dev": {
156                 "phpstan/phpstan": "^0.12.42",
157                 "phpunit/phpunit": "^7.5 || ^8.5 || ^9.3",
158                 "scrutinizer/ocular": "1.6.0",
159                 "squizlabs/php_codesniffer": "^3.5",
160                 "vimeo/psalm": "^4.0.0"
161             },
162             "type": "library",
163             "extra": {
164                 "branch-alias": {
165                     "dev-main": "3.x-dev"
166                 }
167             },
168             "autoload": {
169                 "psr-4": {
170                     "Dflydev\\DotAccessData\\": "src/"
171                 }
172             },
173             "notification-url": "https://packagist.org/downloads/",
174             "license": [
175                 "MIT"
176             ],
177             "authors": [
178                 {
179                     "name": "Dragonfly Development Inc.",
180                     "email": "info@dflydev.com",
181                     "homepage": "http://dflydev.com"
182                 },
183                 {
184                     "name": "Beau Simensen",
185                     "email": "beau@dflydev.com",
186                     "homepage": "http://beausimensen.com"
187                 },
188                 {
189                     "name": "Carlos Frutos",
190                     "email": "carlos@kiwing.it",
191                     "homepage": "https://github.com/cfrutos"
192                 },
193                 {
194                     "name": "Colin O'Dell",
195                     "email": "colinodell@gmail.com",
196                     "homepage": "https://www.colinodell.com"
197                 }
198             ],
199             "description": "Given a deep data structure, access data by dot notation.",
200             "homepage": "https://github.com/dflydev/dflydev-dot-access-data",
201             "keywords": [
202                 "access",
203                 "data",
204                 "dot",
205                 "notation"
206             ],
207             "support": {
208                 "issues": "https://github.com/dflydev/dflydev-dot-access-data/issues",
209                 "source": "https://github.com/dflydev/dflydev-dot-access-data/tree/v3.0.3"
210             },
211             "time": "2024-07-08T12:26:09+00:00"
212         },
213         {
214             "name": "doctrine/inflector",
215             "version": "2.1.0",
216             "source": {
217                 "type": "git",
218                 "url": "https://github.com/doctrine/inflector.git",
219                 "reference": "6d6c96277ea252fc1304627204c3d5e6e15faa3b"
220             },
221             "dist": {
222                 "type": "zip",
223                 "url": "https://api.github.com/repos/doctrine/inflector/zipball/6d6c96277ea252fc1304627204c3d5e6e15faa3b",
224                 "reference": "6d6c96277ea252fc1304627204c3d5e6e15faa3b",
225                 "shasum": ""
226             },
227             "require": {
228                 "php": "^7.2 || ^8.0"
229             },
230             "require-dev": {
231                 "doctrine/coding-standard": "^12.0 || ^13.0",
232                 "phpstan/phpstan": "^1.12 || ^2.0",
233                 "phpstan/phpstan-phpunit": "^1.4 || ^2.0",
234                 "phpstan/phpstan-strict-rules": "^1.6 || ^2.0",
235                 "phpunit/phpunit": "^8.5 || ^12.2"
236             },
237             "type": "library",
238             "autoload": {
239                 "psr-4": {
240                     "Doctrine\\Inflector\\": "src"
241                 }
242             },
243             "notification-url": "https://packagist.org/downloads/",
244             "license": [
245                 "MIT"
246             ],
247             "authors": [
248                 {
249                     "name": "Guilherme Blanco",
250                     "email": "guilhermeblanco@gmail.com"
251                 },
252                 {
253                     "name": "Roman Borschel",
254                     "email": "roman@code-factory.org"
255                 },
256                 {
257                     "name": "Benjamin Eberlei",
258                     "email": "kontakt@beberlei.de"
259                 },
260                 {
261                     "name": "Jonathan Wage",
262                     "email": "jonwage@gmail.com"
263                 },
264                 {
265                     "name": "Johannes Schmitt",
266                     "email": "schmittjoh@gmail.com"
267                 }
268             ],
269             "description": "PHP Doctrine Inflector is a small library that can perform string manipulations with regard to upper/lowercase and singular/plural forms of words.",
270             "homepage": "https://www.doctrine-project.org/projects/inflector.html",
271             "keywords": [
272                 "inflection",
273                 "inflector",
274                 "lowercase",
275                 "manipulation",
276                 "php",
277                 "plural",
278                 "singular",
279                 "strings",
280                 "uppercase",
281                 "words"
282             ],
283             "support": {
284                 "issues": "https://github.com/doctrine/inflector/issues",
285                 "source": "https://github.com/doctrine/inflector/tree/2.1.0"
286             },
287             "funding": [
288                 {
289                     "url": "https://www.doctrine-project.org/sponsorship.html",
290                     "type": "custom"
291                 },
292                 {
293                     "url": "https://www.patreon.com/phpdoctrine",
294                     "type": "patreon"
295                 },
296                 {
297                     "url": "https://tidelift.com/funding/github/packagist/doctrine%2Finflector",
298                     "type": "tidelift"
299                 }
300             ],
301             "time": "2025-08-10T19:31:58+00:00"
302         },
303         {
304             "name": "doctrine/lexer",
305             "version": "3.0.1",
306             "source": {
307                 "type": "git",
308                 "url": "https://github.com/doctrine/lexer.git",
309                 "reference": "31ad66abc0fc9e1a1f2d9bc6a42668d2fbbcd6dd"
310             },
311             "dist": {
312                 "type": "zip",
313                 "url": "https://api.github.com/repos/doctrine/lexer/zipball/31ad66abc0fc9e1a1f2d9bc6a42668d2fbbcd6dd",
314                 "reference": "31ad66abc0fc9e1a1f2d9bc6a42668d2fbbcd6dd",
315                 "shasum": ""
316             },
317             "require": {
318                 "php": "^8.1"
319             },
320             "require-dev": {
321                 "doctrine/coding-standard": "^12",
322                 "phpstan/phpstan": "^1.10",
323                 "phpunit/phpunit": "^10.5",
324                 "psalm/plugin-phpunit": "^0.18.3",
325                 "vimeo/psalm": "^5.21"
326             },
327             "type": "library",
328             "autoload": {
329                 "psr-4": {
330                     "Doctrine\\Common\\Lexer\\": "src"
331                 }
332             },
333             "notification-url": "https://packagist.org/downloads/",
334             "license": [
335                 "MIT"
336             ],
337             "authors": [
338                 {
339                     "name": "Guilherme Blanco",
340                     "email": "guilhermeblanco@gmail.com"
341                 },
342                 {
343                     "name": "Roman Borschel",
344                     "email": "roman@code-factory.org"
345                 },
346                 {
347                     "name": "Johannes Schmitt",
348                     "email": "schmittjoh@gmail.com"
349                 }
350             ],
351             "description": "PHP Doctrine Lexer parser library that can be used in Top-Down, Recursive Descent Parsers.",
352             "homepage": "https://www.doctrine-project.org/projects/lexer.html",
353             "keywords": [
354                 "annotations",
355                 "docblock",
356                 "lexer",
357                 "parser",
358                 "php"
359             ],
360             "support": {
361                 "issues": "https://github.com/doctrine/lexer/issues",
362                 "source": "https://github.com/doctrine/lexer/tree/3.0.1"
363             },
364             "funding": [
365                 {
366                     "url": "https://www.doctrine-project.org/sponsorship.html",
367                     "type": "custom"
368                 },
369                 {
370                     "url": "https://www.patreon.com/phpdoctrine",
371                     "type": "patreon"
372                 },
373                 {
374                     "url": "https://tidelift.com/funding/github/packagist/doctrine%2Flexer",
375                     "type": "tidelift"
376                 }
377             ],
378             "time": "2024-02-05T11:56:58+00:00"
379         },
380         {
381             "name": "dragonmantank/cron-expression",
382             "version": "v3.6.0",
383             "source": {
384                 "type": "git",
385                 "url": "https://github.com/dragonmantank/cron-expression.git",
386                 "reference": "d61a8a9604ec1f8c3d150d09db6ce98b32675013"
387             },
388             "dist": {
389                 "type": "zip",
390                 "url": "https://api.github.com/repos/dragonmantank/cron-expression/zipball/d61a8a9604ec1f8c3d150d09db6ce98b32675013",
391                 "reference": "d61a8a9604ec1f8c3d150d09db6ce98b32675013",
392                 "shasum": ""
393             },
394             "require": {
395                 "php": "^8.2|^8.3|^8.4|^8.5"
396             },
397             "replace": {
398                 "mtdowling/cron-expression": "^1.0"
399             },
400             "require-dev": {
401                 "phpstan/extension-installer": "^1.4.3",
402                 "phpstan/phpstan": "^1.12.32|^2.1.31",
403                 "phpunit/phpunit": "^8.5.48|^9.0"
404             },
405             "type": "library",
406             "extra": {
407                 "branch-alias": {
408                     "dev-master": "3.x-dev"
409                 }
410             },
411             "autoload": {
412                 "psr-4": {
413                     "Cron\\": "src/Cron/"
414                 }
415             },
416             "notification-url": "https://packagist.org/downloads/",
417             "license": [
418                 "MIT"
419             ],
420             "authors": [
421                 {
422                     "name": "Chris Tankersley",
423                     "email": "chris@ctankersley.com",
424                     "homepage": "https://github.com/dragonmantank"
425                 }
426             ],
427             "description": "CRON for PHP: Calculate the next or previous run date and determine if a CRON expression is due",
428             "keywords": [
429                 "cron",
430                 "schedule"
431             ],
432             "support": {
433                 "issues": "https://github.com/dragonmantank/cron-expression/issues",
434                 "source": "https://github.com/dragonmantank/cron-expression/tree/v3.6.0"
435             },
436             "funding": [
437                 {
438                     "url": "https://github.com/dragonmantank",
439                     "type": "github"
440                 }
441             ],
442             "time": "2025-10-31T18:51:33+00:00"
443         },
444         {
445             "name": "egulias/email-validator",
446             "version": "4.0.4",
447             "source": {
448                 "type": "git",
449                 "url": "https://github.com/egulias/EmailValidator.git",
450                 "reference": "d42c8731f0624ad6bdc8d3e5e9a4524f68801cfa"
451             },
452             "dist": {
453                 "type": "zip",
454                 "url": "https://api.github.com/repos/egulias/EmailValidator/zipball/d42c8731f0624ad6bdc8d3e5e9a4524f68801cfa",
455                 "reference": "d42c8731f0624ad6bdc8d3e5e9a4524f68801cfa",
456                 "shasum": ""
457             },
458             "require": {
459                 "doctrine/lexer": "^2.0 || ^3.0",
460                 "php": ">=8.1",
461                 "symfony/polyfill-intl-idn": "^1.26"
462             },
463             "require-dev": {
464                 "phpunit/phpunit": "^10.2",
465                 "vimeo/psalm": "^5.12"
466             },
467             "suggest": {
468                 "ext-intl": "PHP Internationalization Libraries are required to use the SpoofChecking validation"
469             },
470             "type": "library",
471             "extra": {
472                 "branch-alias": {
473                     "dev-master": "4.0.x-dev"
474                 }
475             },
476             "autoload": {
477                 "psr-4": {
478                     "Egulias\\EmailValidator\\": "src"
479                 }
480             },
481             "notification-url": "https://packagist.org/downloads/",
482             "license": [
483                 "MIT"
484             ],
485             "authors": [
486                 {
487                     "name": "Eduardo Gulias Davis"
488                 }
489             ],
490             "description": "A library for validating emails against several RFCs",
491             "homepage": "https://github.com/egulias/EmailValidator",
492             "keywords": [
493                 "email",
494                 "emailvalidation",
495                 "emailvalidator",
496                 "validation",
497                 "validator"
498             ],
499             "support": {
500                 "issues": "https://github.com/egulias/EmailValidator/issues",
501                 "source": "https://github.com/egulias/EmailValidator/tree/4.0.4"
502             },
503             "funding": [
504                 {
505                     "url": "https://github.com/egulias",
506                     "type": "github"
507                 }
508             ],
509             "time": "2025-03-06T22:45:56+00:00"
510         },
511         {
512             "name": "fruitcake/php-cors",
513             "version": "v1.4.0",
514             "source": {
515                 "type": "git",
516                 "url": "https://github.com/fruitcake/php-cors.git",
517                 "reference": "38aaa6c3fd4c157ffe2a4d10aa8b9b16ba8de379"
518             },
519             "dist": {
520                 "type": "zip",
521                 "url": "https://api.github.com/repos/fruitcake/php-cors/zipball/38aaa6c3fd4c157ffe2a4d10aa8b9b16ba8de379",
522                 "reference": "38aaa6c3fd4c157ffe2a4d10aa8b9b16ba8de379",
523                 "shasum": ""
524             },
525             "require": {
526                 "php": "^8.1",
527                 "symfony/http-foundation": "^5.4|^6.4|^7.3|^8"
528             },
529             "require-dev": {
530                 "phpstan/phpstan": "^2",
531                 "phpunit/phpunit": "^9",
532                 "squizlabs/php_codesniffer": "^4"
533             },
534             "type": "library",
535             "extra": {
536                 "branch-alias": {
537                     "dev-master": "1.3-dev"
538                 }
539             },
540             "autoload": {
541                 "psr-4": {
542                     "Fruitcake\\Cors\\": "src/"
543                 }
544             },
545             "notification-url": "https://packagist.org/downloads/",
546             "license": [
547                 "MIT"
548             ],
549             "authors": [
550                 {
551                     "name": "Fruitcake",
552                     "homepage": "https://fruitcake.nl"
553                 },
554                 {
555                     "name": "Barryvdh",
556                     "email": "barryvdh@gmail.com"
557                 }
558             ],
559             "description": "Cross-origin resource sharing library for the Symfony HttpFoundation",
560             "homepage": "https://github.com/fruitcake/php-cors",
561             "keywords": [
562                 "cors",
563                 "laravel",
564                 "symfony"
565             ],
566             "support": {
567                 "issues": "https://github.com/fruitcake/php-cors/issues",
568                 "source": "https://github.com/fruitcake/php-cors/tree/v1.4.0"
569             },
570             "funding": [
571                 {
572                     "url": "https://fruitcake.nl",
573                     "type": "custom"
574                 },
575                 {
576                     "url": "https://github.com/barryvdh",
577                     "type": "github"
578                 }
579             ],
580             "time": "2025-12-03T09:33:47+00:00"
581         },
582         {
583             "name": "graham-campbell/result-type",
584             "version": "v1.1.4",
585             "source": {
586                 "type": "git",
587                 "url": "https://github.com/GrahamCampbell/Result-Type.git",
588                 "reference": "e01f4a821471308ba86aa202fed6698b6b695e3b"
589             },
590             "dist": {
591                 "type": "zip",
592                 "url": "https://api.github.com/repos/GrahamCampbell/Result-Type/zipball/e01f4a821471308ba86aa202fed6698b6b695e3b",
593                 "reference": "e01f4a821471308ba86aa202fed6698b6b695e3b",
594                 "shasum": ""
595             },
596             "require": {
597                 "php": "^7.2.5 || ^8.0",
598                 "phpoption/phpoption": "^1.9.5"
599             },
600             "require-dev": {
601                 "phpunit/phpunit": "^8.5.41 || ^9.6.22 || ^10.5.45 || ^11.5.7"
602             },
603             "type": "library",
604             "autoload": {
605                 "psr-4": {
606                     "GrahamCampbell\\ResultType\\": "src/"
607                 }
608             },
609             "notification-url": "https://packagist.org/downloads/",
610             "license": [
611                 "MIT"
612             ],
613             "authors": [
614                 {
615                     "name": "Graham Campbell",
616                     "email": "hello@gjcampbell.co.uk",
617                     "homepage": "https://github.com/GrahamCampbell"
618                 }
619             ],
620             "description": "An Implementation Of The Result Type",
621             "keywords": [
622                 "Graham Campbell",
623                 "GrahamCampbell",
624                 "Result Type",
625                 "Result-Type",
626                 "result"
627             ],
628             "support": {
629                 "issues": "https://github.com/GrahamCampbell/Result-Type/issues",
630                 "source": "https://github.com/GrahamCampbell/Result-Type/tree/v1.1.4"
631             },
632             "funding": [
633                 {
634                     "url": "https://github.com/GrahamCampbell",
635                     "type": "github"
636                 },
637                 {
638                     "url": "https://tidelift.com/funding/github/packagist/graham-campbell/result-type",
639                     "type": "tidelift"
640                 }
641             ],
642             "time": "2025-12-27T19:43:20+00:00"
643         },
644         {
645             "name": "guzzlehttp/guzzle",
646             "version": "7.10.0",
647             "source": {
648                 "type": "git",
649                 "url": "https://github.com/guzzle/guzzle.git",
650                 "reference": "b51ac707cfa420b7bfd4e4d5e510ba8008e822b4"
651             },
652             "dist": {
653                 "type": "zip",
654                 "url": "https://api.github.com/repos/guzzle/guzzle/zipball/b51ac707cfa420b7bfd4e4d5e510ba8008e822b4",
655                 "reference": "b51ac707cfa420b7bfd4e4d5e510ba8008e822b4",
656                 "shasum": ""
657             },
658             "require": {
659                 "ext-json": "*",
660                 "guzzlehttp/promises": "^2.3",
661                 "guzzlehttp/psr7": "^2.8",
662                 "php": "^7.2.5 || ^8.0",
663                 "psr/http-client": "^1.0",
664                 "symfony/deprecation-contracts": "^2.2 || ^3.0"
665             },
666             "provide": {
667                 "psr/http-client-implementation": "1.0"
668             },
669             "require-dev": {
670                 "bamarni/composer-bin-plugin": "^1.8.2",
671                 "ext-curl": "*",
672                 "guzzle/client-integration-tests": "3.0.2",
673                 "php-http/message-factory": "^1.1",
674                 "phpunit/phpunit": "^8.5.39 || ^9.6.20",
675                 "psr/log": "^1.1 || ^2.0 || ^3.0"
676             },
677             "suggest": {
678                 "ext-curl": "Required for CURL handler support",
679                 "ext-intl": "Required for Internationalized Domain Name (IDN) support",
680                 "psr/log": "Required for using the Log middleware"
681             },
682             "type": "library",
683             "extra": {
684                 "bamarni-bin": {
685                     "bin-links": true,
686                     "forward-command": false
687                 }
688             },
689             "autoload": {
690                 "files": [
691                     "src/functions_include.php"
692                 ],
693                 "psr-4": {
694                     "GuzzleHttp\\": "src/"
695                 }
696             },
697             "notification-url": "https://packagist.org/downloads/",
698             "license": [
699                 "MIT"
700             ],
701             "authors": [
702                 {
703                     "name": "Graham Campbell",
704                     "email": "hello@gjcampbell.co.uk",
705                     "homepage": "https://github.com/GrahamCampbell"
706                 },
707                 {
708                     "name": "Michael Dowling",
709                     "email": "mtdowling@gmail.com",
710                     "homepage": "https://github.com/mtdowling"
711                 },
712                 {
713                     "name": "Jeremy Lindblom",
714                     "email": "jeremeamia@gmail.com",
715                     "homepage": "https://github.com/jeremeamia"
716                 },
717                 {
718                     "name": "George Mponos",
719                     "email": "gmponos@gmail.com",
720                     "homepage": "https://github.com/gmponos"
721                 },
722                 {
723                     "name": "Tobias Nyholm",
724                     "email": "tobias.nyholm@gmail.com",
725                     "homepage": "https://github.com/Nyholm"
726                 },
727                 {
728                     "name": "Márk Sági-Kazár",
729                     "email": "mark.sagikazar@gmail.com",
730                     "homepage": "https://github.com/sagikazarmark"
731                 },
732                 {
733                     "name": "Tobias Schultze",
734                     "email": "webmaster@tubo-world.de",
735                     "homepage": "https://github.com/Tobion"
736                 }
737             ],
738             "description": "Guzzle is a PHP HTTP client library",
739             "keywords": [
740                 "client",
741                 "curl",
742                 "framework",
743                 "http",
744                 "http client",
745                 "psr-18",
746                 "psr-7",
747                 "rest",
748                 "web service"
749             ],
750             "support": {
751                 "issues": "https://github.com/guzzle/guzzle/issues",
752                 "source": "https://github.com/guzzle/guzzle/tree/7.10.0"
753             },
754             "funding": [
755                 {
756                     "url": "https://github.com/GrahamCampbell",
757                     "type": "github"
758                 },
759                 {
760                     "url": "https://github.com/Nyholm",
761                     "type": "github"
762                 },
763                 {
764                     "url": "https://tidelift.com/funding/github/packagist/guzzlehttp/guzzle",
765                     "type": "tidelift"
766                 }
767             ],
768             "time": "2025-08-23T22:36:01+00:00"
769         },
770         {
771             "name": "guzzlehttp/promises",
772             "version": "2.3.0",
773             "source": {
774                 "type": "git",
775                 "url": "https://github.com/guzzle/promises.git",
776                 "reference": "481557b130ef3790cf82b713667b43030dc9c957"
777             },
778             "dist": {
779                 "type": "zip",
780                 "url": "https://api.github.com/repos/guzzle/promises/zipball/481557b130ef3790cf82b713667b43030dc9c957",
781                 "reference": "481557b130ef3790cf82b713667b43030dc9c957",
782                 "shasum": ""
783             },
784             "require": {
785                 "php": "^7.2.5 || ^8.0"
786             },
787             "require-dev": {
788                 "bamarni/composer-bin-plugin": "^1.8.2",
789                 "phpunit/phpunit": "^8.5.44 || ^9.6.25"
790             },
791             "type": "library",
792             "extra": {
793                 "bamarni-bin": {
794                     "bin-links": true,
795                     "forward-command": false
796                 }
797             },
798             "autoload": {
799                 "psr-4": {
800                     "GuzzleHttp\\Promise\\": "src/"
801                 }
802             },
803             "notification-url": "https://packagist.org/downloads/",
804             "license": [
805                 "MIT"
806             ],
807             "authors": [
808                 {
809                     "name": "Graham Campbell",
810                     "email": "hello@gjcampbell.co.uk",
811                     "homepage": "https://github.com/GrahamCampbell"
812                 },
813                 {
814                     "name": "Michael Dowling",
815                     "email": "mtdowling@gmail.com",
816                     "homepage": "https://github.com/mtdowling"
817                 },
818                 {
819                     "name": "Tobias Nyholm",
820                     "email": "tobias.nyholm@gmail.com",
821                     "homepage": "https://github.com/Nyholm"
822                 },
823                 {
824                     "name": "Tobias Schultze",
825                     "email": "webmaster@tubo-world.de",
826                     "homepage": "https://github.com/Tobion"
827                 }
828             ],
829             "description": "Guzzle promises library",
830             "keywords": [
831                 "promise"
832             ],
833             "support": {
834                 "issues": "https://github.com/guzzle/promises/issues",
835                 "source": "https://github.com/guzzle/promises/tree/2.3.0"
836             },
837             "funding": [
838                 {
839                     "url": "https://github.com/GrahamCampbell",
840                     "type": "github"
841                 },
842                 {
843                     "url": "https://github.com/Nyholm",
844                     "type": "github"
845                 },
846                 {
847                     "url": "https://tidelift.com/funding/github/packagist/guzzlehttp/promises",
848                     "type": "tidelift"
849                 }
850             ],
851             "time": "2025-08-22T14:34:08+00:00"
852         },
853         {
854             "name": "guzzlehttp/psr7",
855             "version": "2.9.0",
856             "source": {
857                 "type": "git",
858                 "url": "https://github.com/guzzle/psr7.git",
859                 "reference": "7d0ed42f28e42d61352a7a79de682e5e67fec884"
860             },
861             "dist": {
862                 "type": "zip",
863                 "url": "https://api.github.com/repos/guzzle/psr7/zipball/7d0ed42f28e42d61352a7a79de682e5e67fec884",
864                 "reference": "7d0ed42f28e42d61352a7a79de682e5e67fec884",
865                 "shasum": ""
866             },
867             "require": {
868                 "php": "^7.2.5 || ^8.0",
869                 "psr/http-factory": "^1.0",
870                 "psr/http-message": "^1.1 || ^2.0",
871                 "ralouphie/getallheaders": "^3.0"
872             },
873             "provide": {
874                 "psr/http-factory-implementation": "1.0",
875                 "psr/http-message-implementation": "1.0"
876             },
877             "require-dev": {
878                 "bamarni/composer-bin-plugin": "^1.8.2",
879                 "http-interop/http-factory-tests": "0.9.0",
880                 "jshttp/mime-db": "1.54.0.1",
881                 "phpunit/phpunit": "^8.5.44 || ^9.6.25"
882             },
883             "suggest": {
884                 "laminas/laminas-httphandlerrunner": "Emit PSR-7 responses"
885             },
886             "type": "library",
887             "extra": {
888                 "bamarni-bin": {
889                     "bin-links": true,
890                     "forward-command": false
891                 }
892             },
893             "autoload": {
894                 "psr-4": {
895                     "GuzzleHttp\\Psr7\\": "src/"
896                 }
897             },
898             "notification-url": "https://packagist.org/downloads/",
899             "license": [
900                 "MIT"
901             ],
902             "authors": [
903                 {
904                     "name": "Graham Campbell",
905                     "email": "hello@gjcampbell.co.uk",
906                     "homepage": "https://github.com/GrahamCampbell"
907                 },
908                 {
909                     "name": "Michael Dowling",
910                     "email": "mtdowling@gmail.com",
911                     "homepage": "https://github.com/mtdowling"
912                 },
913                 {
914                     "name": "George Mponos",
915                     "email": "gmponos@gmail.com",
916                     "homepage": "https://github.com/gmponos"
917                 },
918                 {
919                     "name": "Tobias Nyholm",
920                     "email": "tobias.nyholm@gmail.com",
921                     "homepage": "https://github.com/Nyholm"
922                 },
923                 {
924                     "name": "Márk Sági-Kazár",
925                     "email": "mark.sagikazar@gmail.com",
926                     "homepage": "https://github.com/sagikazarmark"
927                 },
928                 {
929                     "name": "Tobias Schultze",
930                     "email": "webmaster@tubo-world.de",
931                     "homepage": "https://github.com/Tobion"
932                 },
933                 {
934                     "name": "Márk Sági-Kazár",
935                     "email": "mark.sagikazar@gmail.com",
936                     "homepage": "https://sagikazarmark.hu"
937                 }
938             ],
939             "description": "PSR-7 message implementation that also provides common utility methods",
940             "keywords": [
941                 "http",
942                 "message",
943                 "psr-7",
944                 "request",
945                 "response",
946                 "stream",
947                 "uri",
948                 "url"
949             ],
950             "support": {
951                 "issues": "https://github.com/guzzle/psr7/issues",
952                 "source": "https://github.com/guzzle/psr7/tree/2.9.0"
953             },
954             "funding": [
955                 {
956                     "url": "https://github.com/GrahamCampbell",
957                     "type": "github"
958                 },
959                 {
960                     "url": "https://github.com/Nyholm",
961                     "type": "github"
962                 },
963                 {
964                     "url": "https://tidelift.com/funding/github/packagist/guzzlehttp/psr7",
965                     "type": "tidelift"
966                 }
967             ],
968             "time": "2026-03-10T16:41:02+00:00"
969         },
970         {
971             "name": "guzzlehttp/uri-template",
972             "version": "v1.0.5",
973             "source": {
974                 "type": "git",
975                 "url": "https://github.com/guzzle/uri-template.git",
976                 "reference": "4f4bbd4e7172148801e76e3decc1e559bdee34e1"
977             },
978             "dist": {
979                 "type": "zip",
980                 "url": "https://api.github.com/repos/guzzle/uri-template/zipball/4f4bbd4e7172148801e76e3decc1e559bdee34e1",
981                 "reference": "4f4bbd4e7172148801e76e3decc1e559bdee34e1",
982                 "shasum": ""
983             },
984             "require": {
985                 "php": "^7.2.5 || ^8.0",
986                 "symfony/polyfill-php80": "^1.24"
987             },
988             "require-dev": {
989                 "bamarni/composer-bin-plugin": "^1.8.2",
990                 "phpunit/phpunit": "^8.5.44 || ^9.6.25",
991                 "uri-template/tests": "1.0.0"
992             },
993             "type": "library",
994             "extra": {
995                 "bamarni-bin": {
996                     "bin-links": true,
997                     "forward-command": false
998                 }
999             },
1000             "autoload": {
1001                 "psr-4": {
1002                     "GuzzleHttp\\UriTemplate\\": "src"
1003                 }
1004             },
1005             "notification-url": "https://packagist.org/downloads/",
1006             "license": [
1007                 "MIT"
1008             ],
1009             "authors": [
1010                 {
1011                     "name": "Graham Campbell",
1012                     "email": "hello@gjcampbell.co.uk",
1013                     "homepage": "https://github.com/GrahamCampbell"
1014                 },
1015                 {
1016                     "name": "Michael Dowling",
1017                     "email": "mtdowling@gmail.com",
1018                     "homepage": "https://github.com/mtdowling"
1019                 },
1020                 {
1021                     "name": "George Mponos",
1022                     "email": "gmponos@gmail.com",
1023                     "homepage": "https://github.com/gmponos"
1024                 },
1025                 {
1026                     "name": "Tobias Nyholm",
1027                     "email": "tobias.nyholm@gmail.com",
1028                     "homepage": "https://github.com/Nyholm"
1029                 }
1030             ],
1031             "description": "A polyfill class for uri_template of PHP",
1032             "keywords": [
1033                 "guzzlehttp",
1034                 "uri-template"
1035             ],
1036             "support": {
1037                 "issues": "https://github.com/guzzle/uri-template/issues",
1038                 "source": "https://github.com/guzzle/uri-template/tree/v1.0.5"
1039             },
1040             "funding": [
1041                 {
1042                     "url": "https://github.com/GrahamCampbell",
1043                     "type": "github"
1044                 },
1045                 {
1046                     "url": "https://github.com/Nyholm",
1047                     "type": "github"
1048                 },
1049                 {
1050                     "url": "https://tidelift.com/funding/github/packagist/guzzlehttp/uri-template",
1051                     "type": "tidelift"
1052                 }
1053             ],
1054             "time": "2025-08-22T14:27:06+00:00"
1055         },
1056         {
1057             "name": "intervention/gif",
1058             "version": "5.0.0",
1059             "source": {
1060                 "type": "git",
1061                 "url": "https://github.com/Intervention/gif.git",
1062                 "reference": "d856f59205aec768059d837148d755c079cdb94a"
1063             },
1064             "dist": {
1065                 "type": "zip",
1066                 "url": "https://api.github.com/repos/Intervention/gif/zipball/d856f59205aec768059d837148d755c079cdb94a",
1067                 "reference": "d856f59205aec768059d837148d755c079cdb94a",
1068                 "shasum": ""
1069             },
1070             "require": {
1071                 "php": "^8.3"
1072             },
1073             "require-dev": {
1074                 "phpstan/phpstan": "^2.1",
1075                 "phpunit/phpunit": "^12.0",
1076                 "slevomat/coding-standard": "~8.0",
1077                 "squizlabs/php_codesniffer": "^4"
1078             },
1079             "type": "library",
1080             "autoload": {
1081                 "psr-4": {
1082                     "Intervention\\Gif\\": "src"
1083                 }
1084             },
1085             "notification-url": "https://packagist.org/downloads/",
1086             "license": [
1087                 "MIT"
1088             ],
1089             "authors": [
1090                 {
1091                     "name": "Oliver Vogel",
1092                     "email": "oliver@intervention.io",
1093                     "homepage": "https://intervention.io/"
1094                 }
1095             ],
1096             "description": "PHP GIF Encoder/Decoder",
1097             "homepage": "https://github.com/intervention/gif",
1098             "keywords": [
1099                 "animation",
1100                 "gd",
1101                 "gif",
1102                 "image"
1103             ],
1104             "support": {
1105                 "issues": "https://github.com/Intervention/gif/issues",
1106                 "source": "https://github.com/Intervention/gif/tree/5.0.0"
1107             },
1108             "funding": [
1109                 {
1110                     "url": "https://paypal.me/interventionio",
1111                     "type": "custom"
1112                 },
1113                 {
1114                     "url": "https://github.com/Intervention",
1115                     "type": "github"
1116                 },
1117                 {
1118                     "url": "https://ko-fi.com/interventionphp",
1119                     "type": "ko_fi"
1120                 }
1121             ],
1122             "time": "2026-03-21T05:08:17+00:00"
1123         },
1124         {
1125             "name": "intervention/image",
1126             "version": "4.0.2",
1127             "source": {
1128                 "type": "git",
1129                 "url": "https://github.com/Intervention/image.git",
1130                 "reference": "3c449518c7782ea7454d18c4a7a54e6c2250e889"
1131             },
1132             "dist": {
1133                 "type": "zip",
1134                 "url": "https://api.github.com/repos/Intervention/image/zipball/3c449518c7782ea7454d18c4a7a54e6c2250e889",
1135                 "reference": "3c449518c7782ea7454d18c4a7a54e6c2250e889",
1136                 "shasum": ""
1137             },
1138             "require": {
1139                 "ext-mbstring": "*",
1140                 "intervention/gif": "^5",
1141                 "php": "^8.3"
1142             },
1143             "require-dev": {
1144                 "mockery/mockery": "^1.6",
1145                 "phpstan/phpstan": "^2.1",
1146                 "phpunit/phpunit": "^12.0",
1147                 "slevomat/coding-standard": "~8.0",
1148                 "squizlabs/php_codesniffer": "^4"
1149             },
1150             "suggest": {
1151                 "ext-exif": "Recommended to be able to read EXIF data properly."
1152             },
1153             "type": "library",
1154             "autoload": {
1155                 "psr-4": {
1156                     "Intervention\\Image\\": "src"
1157                 }
1158             },
1159             "notification-url": "https://packagist.org/downloads/",
1160             "license": [
1161                 "MIT"
1162             ],
1163             "authors": [
1164                 {
1165                     "name": "Oliver Vogel",
1166                     "email": "oliver@intervention.io",
1167                     "homepage": "https://intervention.io"
1168                 }
1169             ],
1170             "description": "PHP Image Processing",
1171             "homepage": "https://image.intervention.io",
1172             "keywords": [
1173                 "gd",
1174                 "image",
1175                 "imagick",
1176                 "resize",
1177                 "thumbnail",
1178                 "watermark"
1179             ],
1180             "support": {
1181                 "issues": "https://github.com/Intervention/image/issues",
1182                 "source": "https://github.com/Intervention/image/tree/4.0.2"
1183             },
1184             "funding": [
1185                 {
1186                     "url": "https://paypal.me/interventionio",
1187                     "type": "custom"
1188                 },
1189                 {
1190                     "url": "https://github.com/Intervention",
1191                     "type": "github"
1192                 },
1193                 {
1194                     "url": "https://ko-fi.com/interventionphp",
1195                     "type": "ko_fi"
1196                 }
1197             ],
1198             "time": "2026-04-24T13:57:17+00:00"
1199         },
1200         {
1201             "name": "laravel/framework",
1202             "version": "v13.6.0",
1203             "source": {
1204                 "type": "git",
1205                 "url": "https://github.com/laravel/framework.git",
1206                 "reference": "416a93ea9c53161e0d4b8a44045f447b65a7d2f1"
1207             },
1208             "dist": {
1209                 "type": "zip",
1210                 "url": "https://api.github.com/repos/laravel/framework/zipball/416a93ea9c53161e0d4b8a44045f447b65a7d2f1",
1211                 "reference": "416a93ea9c53161e0d4b8a44045f447b65a7d2f1",
1212                 "shasum": ""
1213             },
1214             "require": {
1215                 "brick/math": "^0.14.2 || ^0.15 || ^0.16 || ^0.17",
1216                 "composer-runtime-api": "^2.2",
1217                 "doctrine/inflector": "^2.0.5",
1218                 "dragonmantank/cron-expression": "^3.4",
1219                 "egulias/email-validator": "^4.0",
1220                 "ext-ctype": "*",
1221                 "ext-filter": "*",
1222                 "ext-hash": "*",
1223                 "ext-mbstring": "*",
1224                 "ext-openssl": "*",
1225                 "ext-session": "*",
1226                 "ext-tokenizer": "*",
1227                 "fruitcake/php-cors": "^1.3",
1228                 "guzzlehttp/guzzle": "^7.8.2",
1229                 "guzzlehttp/promises": "^2.0.3",
1230                 "guzzlehttp/uri-template": "^1.0",
1231                 "laravel/prompts": "^0.3.0",
1232                 "laravel/serializable-closure": "^2.0.10",
1233                 "league/commonmark": "^2.8.1",
1234                 "league/flysystem": "^3.25.1",
1235                 "league/flysystem-local": "^3.25.1",
1236                 "league/uri": "^7.5.1",
1237                 "monolog/monolog": "^3.0",
1238                 "nesbot/carbon": "^3.8.4",
1239                 "nunomaduro/termwind": "^2.0",
1240                 "php": "^8.3",
1241                 "psr/container": "^1.1.1 || ^2.0.1",
1242                 "psr/log": "^1.0 || ^2.0 || ^3.0",
1243                 "psr/simple-cache": "^1.0 || ^2.0 || ^3.0",
1244                 "ramsey/uuid": "^4.7",
1245                 "symfony/console": "^7.4.0 || ^8.0.0",
1246                 "symfony/error-handler": "^7.4.0 || ^8.0.0",
1247                 "symfony/finder": "^7.4.0 || ^8.0.0",
1248                 "symfony/http-foundation": "^7.4.0 || ^8.0.0",
1249                 "symfony/http-kernel": "^7.4.0 || ^8.0.0",
1250                 "symfony/mailer": "^7.4.0 || ^8.0.0",
1251                 "symfony/mime": "^7.4.0 || ^8.0.0",
1252                 "symfony/polyfill-php84": "^1.33",
1253                 "symfony/polyfill-php85": "^1.33",
1254                 "symfony/process": "^7.4.5 || ^8.0.5",
1255                 "symfony/routing": "^7.4.0 || ^8.0.0",
1256                 "symfony/uid": "^7.4.0 || ^8.0.0",
1257                 "symfony/var-dumper": "^7.4.0 || ^8.0.0",
1258                 "tijsverkoyen/css-to-inline-styles": "^2.2.5",
1259                 "vlucas/phpdotenv": "^5.6.1",
1260                 "voku/portable-ascii": "^2.0.2"
1261             },
1262             "conflict": {
1263                 "tightenco/collect": "<5.5.33"
1264             },
1265             "provide": {
1266                 "psr/container-implementation": "1.1 || 2.0",
1267                 "psr/log-implementation": "1.0 || 2.0 || 3.0",
1268                 "psr/simple-cache-implementation": "1.0 || 2.0 || 3.0"
1269             },
1270             "replace": {
1271                 "illuminate/auth": "self.version",
1272                 "illuminate/broadcasting": "self.version",
1273                 "illuminate/bus": "self.version",
1274                 "illuminate/cache": "self.version",
1275                 "illuminate/collections": "self.version",
1276                 "illuminate/concurrency": "self.version",
1277                 "illuminate/conditionable": "self.version",
1278                 "illuminate/config": "self.version",
1279                 "illuminate/console": "self.version",
1280                 "illuminate/container": "self.version",
1281                 "illuminate/contracts": "self.version",
1282                 "illuminate/cookie": "self.version",
1283                 "illuminate/database": "self.version",
1284                 "illuminate/encryption": "self.version",
1285                 "illuminate/events": "self.version",
1286                 "illuminate/filesystem": "self.version",
1287                 "illuminate/hashing": "self.version",
1288                 "illuminate/http": "self.version",
1289                 "illuminate/json-schema": "self.version",
1290                 "illuminate/log": "self.version",
1291                 "illuminate/macroable": "self.version",
1292                 "illuminate/mail": "self.version",
1293                 "illuminate/notifications": "self.version",
1294                 "illuminate/pagination": "self.version",
1295                 "illuminate/pipeline": "self.version",
1296                 "illuminate/process": "self.version",
1297                 "illuminate/queue": "self.version",
1298                 "illuminate/redis": "self.version",
1299                 "illuminate/reflection": "self.version",
1300                 "illuminate/routing": "self.version",
1301                 "illuminate/session": "self.version",
1302                 "illuminate/support": "self.version",
1303                 "illuminate/testing": "self.version",
1304                 "illuminate/translation": "self.version",
1305                 "illuminate/validation": "self.version",
1306                 "illuminate/view": "self.version",
1307                 "spatie/once": "*"
1308             },
1309             "require-dev": {
1310                 "ably/ably-php": "^1.0",
1311                 "aws/aws-sdk-php": "^3.322.9",
1312                 "ext-gmp": "*",
1313                 "fakerphp/faker": "^1.24",
1314                 "guzzlehttp/psr7": "^2.4",
1315                 "laravel/pint": "^1.18",
1316                 "league/flysystem-aws-s3-v3": "^3.25.1",
1317                 "league/flysystem-ftp": "^3.25.1",
1318                 "league/flysystem-path-prefixing": "^3.25.1",
1319                 "league/flysystem-read-only": "^3.25.1",
1320                 "league/flysystem-sftp-v3": "^3.25.1",
1321                 "mockery/mockery": "^1.6.10",
1322                 "opis/json-schema": "^2.4.1",
1323                 "orchestra/testbench-core": "^11.0.0",
1324                 "pda/pheanstalk": "^7.0.0 || ^8.0.0",
1325                 "php-http/discovery": "^1.15",
1326                 "phpstan/phpstan": "^2.0",
1327                 "phpunit/phpunit": "^11.5.50 || ^12.5.8 || ^13.0.3",
1328                 "predis/predis": "^2.3 || ^3.0",
1329                 "rector/rector": "^2.3",
1330                 "resend/resend-php": "^1.0",
1331                 "symfony/cache": "^7.4.0 || ^8.0.0",
1332                 "symfony/http-client": "^7.4.0 || ^8.0.0",
1333                 "symfony/psr-http-message-bridge": "^7.4.0 || ^8.0.0",
1334                 "symfony/translation": "^7.4.0 || ^8.0.0"
1335             },
1336             "suggest": {
1337                 "ably/ably-php": "Required to use the Ably broadcast driver (^1.0).",
1338                 "aws/aws-sdk-php": "Required to use the SQS queue driver, DynamoDb failed job storage, and SES mail driver (^3.322.9).",
1339                 "brianium/paratest": "Required to run tests in parallel (^7.0 || ^8.0).",
1340                 "ext-apcu": "Required to use the APC cache driver.",
1341                 "ext-fileinfo": "Required to use the Filesystem class.",
1342                 "ext-ftp": "Required to use the Flysystem FTP driver.",
1343                 "ext-gd": "Required to use Illuminate\\Http\\Testing\\FileFactory::image().",
1344                 "ext-memcached": "Required to use the memcache cache driver.",
1345                 "ext-pcntl": "Required to use all features of the queue worker and console signal trapping.",
1346                 "ext-pdo": "Required to use all database features.",
1347                 "ext-posix": "Required to use all features of the queue worker.",
1348                 "ext-redis": "Required to use the Redis cache and queue drivers (^4.0 || ^5.0 || ^6.0).",
1349                 "fakerphp/faker": "Required to generate fake data using the fake() helper (^1.23).",
1350                 "filp/whoops": "Required for friendly error pages in development (^2.14.3).",
1351                 "laravel/tinker": "Required to use the tinker console command (^2.0).",
1352                 "league/flysystem-aws-s3-v3": "Required to use the Flysystem S3 driver (^3.25.1).",
1353                 "league/flysystem-ftp": "Required to use the Flysystem FTP driver (^3.25.1).",
1354                 "league/flysystem-path-prefixing": "Required to use the scoped driver (^3.25.1).",
1355                 "league/flysystem-read-only": "Required to use read-only disks (^3.25.1)",
1356                 "league/flysystem-sftp-v3": "Required to use the Flysystem SFTP driver (^3.25.1).",
1357                 "mockery/mockery": "Required to use mocking (^1.6).",
1358                 "pda/pheanstalk": "Required to use the beanstalk queue driver (^7.0 || ^8.0).",
1359                 "php-http/discovery": "Required to use PSR-7 bridging features (^1.15).",
1360                 "phpunit/phpunit": "Required to use assertions and run tests (^11.5.50 || ^12.5.8 || ^13.0.3).",
1361                 "predis/predis": "Required to use the predis connector (^2.3 || ^3.0).",
1362                 "psr/http-message": "Required to allow Storage::put to accept a StreamInterface (^1.0).",
1363                 "pusher/pusher-php-server": "Required to use the Pusher broadcast driver (^6.0 || ^7.0).",
1364                 "resend/resend-php": "Required to enable support for the Resend mail transport (^0.10.0 || ^1.0).",
1365                 "spatie/fork": "Required to use the 'fork' concurrency driver (^1.2).",
1366                 "symfony/cache": "Required to PSR-6 cache bridge (^7.4 || ^8.0).",
1367                 "symfony/filesystem": "Required to enable support for relative symbolic links (^7.4 || ^8.0).",
1368                 "symfony/http-client": "Required to enable support for the Symfony API mail transports (^7.4 || ^8.0).",
1369                 "symfony/mailgun-mailer": "Required to enable support for the Mailgun mail transport (^7.4 || ^8.0).",
1370                 "symfony/postmark-mailer": "Required to enable support for the Postmark mail transport (^7.4 || ^8.0).",
1371                 "symfony/psr-http-message-bridge": "Required to use PSR-7 bridging features (^7.4 || ^8.0)."
1372             },
1373             "type": "library",
1374             "extra": {
1375                 "branch-alias": {
1376                     "dev-master": "13.0.x-dev"
1377                 }
1378             },
1379             "autoload": {
1380                 "files": [
1381                     "src/Illuminate/Collections/functions.php",
1382                     "src/Illuminate/Collections/helpers.php",
1383                     "src/Illuminate/Events/functions.php",
1384                     "src/Illuminate/Filesystem/functions.php",
1385                     "src/Illuminate/Foundation/helpers.php",
1386                     "src/Illuminate/Log/functions.php",
1387                     "src/Illuminate/Reflection/helpers.php",
1388                     "src/Illuminate/Support/functions.php",
1389                     "src/Illuminate/Support/helpers.php"
1390                 ],
1391                 "psr-4": {
1392                     "Illuminate\\": "src/Illuminate/",
1393                     "Illuminate\\Support\\": [
1394                         "src/Illuminate/Macroable/",
1395                         "src/Illuminate/Collections/",
1396                         "src/Illuminate/Conditionable/",
1397                         "src/Illuminate/Reflection/"
1398                     ]
1399                 }
1400             },
1401             "notification-url": "https://packagist.org/downloads/",
1402             "license": [
1403                 "MIT"
1404             ],
1405             "authors": [
1406                 {
1407                     "name": "Taylor Otwell",
1408                     "email": "taylor@laravel.com"
1409                 }
1410             ],
1411             "description": "The Laravel Framework.",
1412             "homepage": "https://laravel.com",
1413             "keywords": [
1414                 "framework",
1415                 "laravel"
1416             ],
1417             "support": {
1418                 "issues": "https://github.com/laravel/framework/issues",
1419                 "source": "https://github.com/laravel/framework"
1420             },
1421             "time": "2026-04-21T13:32:11+00:00"
1422         },
1423         {
1424             "name": "laravel/prompts",
1425             "version": "v0.3.17",
1426             "source": {
1427                 "type": "git",
1428                 "url": "https://github.com/laravel/prompts.git",
1429                 "reference": "6a82ac19a28b916ae0885828795dbd4c59d9a818"
1430             },
1431             "dist": {
1432                 "type": "zip",
1433                 "url": "https://api.github.com/repos/laravel/prompts/zipball/6a82ac19a28b916ae0885828795dbd4c59d9a818",
1434                 "reference": "6a82ac19a28b916ae0885828795dbd4c59d9a818",
1435                 "shasum": ""
1436             },
1437             "require": {
1438                 "composer-runtime-api": "^2.2",
1439                 "ext-mbstring": "*",
1440                 "php": "^8.1",
1441                 "symfony/console": "^6.2|^7.0|^8.0"
1442             },
1443             "conflict": {
1444                 "illuminate/console": ">=10.17.0 <10.25.0",
1445                 "laravel/framework": ">=10.17.0 <10.25.0"
1446             },
1447             "require-dev": {
1448                 "illuminate/collections": "^10.0|^11.0|^12.0|^13.0",
1449                 "mockery/mockery": "^1.5",
1450                 "pestphp/pest": "^2.3|^3.4|^4.0",
1451                 "phpstan/phpstan": "^1.12.28",
1452                 "phpstan/phpstan-mockery": "^1.1.3"
1453             },
1454             "suggest": {
1455                 "ext-pcntl": "Required for the spinner to be animated."
1456             },
1457             "type": "library",
1458             "extra": {
1459                 "branch-alias": {
1460                     "dev-main": "0.3.x-dev"
1461                 }
1462             },
1463             "autoload": {
1464                 "files": [
1465                     "src/helpers.php"
1466                 ],
1467                 "psr-4": {
1468                     "Laravel\\Prompts\\": "src/"
1469                 }
1470             },
1471             "notification-url": "https://packagist.org/downloads/",
1472             "license": [
1473                 "MIT"
1474             ],
1475             "description": "Add beautiful and user-friendly forms to your command-line applications.",
1476             "support": {
1477                 "issues": "https://github.com/laravel/prompts/issues",
1478                 "source": "https://github.com/laravel/prompts/tree/v0.3.17"
1479             },
1480             "time": "2026-04-20T16:07:33+00:00"
1481         },
1482         {
1483             "name": "laravel/sanctum",
1484             "version": "v4.3.1",
1485             "source": {
1486                 "type": "git",
1487                 "url": "https://github.com/laravel/sanctum.git",
1488                 "reference": "e3b85d6e36ad00e5db2d1dcc27c81ffdf15cbf76"
1489             },
1490             "dist": {
1491                 "type": "zip",
1492                 "url": "https://api.github.com/repos/laravel/sanctum/zipball/e3b85d6e36ad00e5db2d1dcc27c81ffdf15cbf76",
1493                 "reference": "e3b85d6e36ad00e5db2d1dcc27c81ffdf15cbf76",
1494                 "shasum": ""
1495             },
1496             "require": {
1497                 "ext-json": "*",
1498                 "illuminate/console": "^11.0|^12.0|^13.0",
1499                 "illuminate/contracts": "^11.0|^12.0|^13.0",
1500                 "illuminate/database": "^11.0|^12.0|^13.0",
1501                 "illuminate/support": "^11.0|^12.0|^13.0",
1502                 "php": "^8.2",
1503                 "symfony/console": "^7.0|^8.0"
1504             },
1505             "require-dev": {
1506                 "mockery/mockery": "^1.6",
1507                 "orchestra/testbench": "^9.15|^10.8|^11.0",
1508                 "phpstan/phpstan": "^1.10"
1509             },
1510             "type": "library",
1511             "extra": {
1512                 "laravel": {
1513                     "providers": [
1514                         "Laravel\\Sanctum\\SanctumServiceProvider"
1515                     ]
1516                 }
1517             },
1518             "autoload": {
1519                 "psr-4": {
1520                     "Laravel\\Sanctum\\": "src/"
1521                 }
1522             },
1523             "notification-url": "https://packagist.org/downloads/",
1524             "license": [
1525                 "MIT"
1526             ],
1527             "authors": [
1528                 {
1529                     "name": "Taylor Otwell",
1530                     "email": "taylor@laravel.com"
1531                 }
1532             ],
1533             "description": "Laravel Sanctum provides a featherweight authentication system for SPAs and simple APIs.",
1534             "keywords": [
1535                 "auth",
1536                 "laravel",
1537                 "sanctum"
1538             ],
1539             "support": {
1540                 "issues": "https://github.com/laravel/sanctum/issues",
1541                 "source": "https://github.com/laravel/sanctum"
1542             },
1543             "time": "2026-02-07T17:19:31+00:00"
1544         },
1545         {
1546             "name": "laravel/serializable-closure",
1547             "version": "v2.0.12",
1548             "source": {
1549                 "type": "git",
1550                 "url": "https://github.com/laravel/serializable-closure.git",
1551                 "reference": "a6abb4e54f6fcd3138120b9ad497f0bd146f9919"
1552             },
1553             "dist": {
1554                 "type": "zip",
1555                 "url": "https://api.github.com/repos/laravel/serializable-closure/zipball/a6abb4e54f6fcd3138120b9ad497f0bd146f9919",
1556                 "reference": "a6abb4e54f6fcd3138120b9ad497f0bd146f9919",
1557                 "shasum": ""
1558             },
1559             "require": {
1560                 "php": "^8.1"
1561             },
1562             "require-dev": {
1563                 "illuminate/support": "^10.0|^11.0|^12.0|^13.0",
1564                 "nesbot/carbon": "^2.67|^3.0",
1565                 "pestphp/pest": "^2.36|^3.0|^4.0",
1566                 "phpstan/phpstan": "^2.0",
1567                 "symfony/var-dumper": "^6.2.0|^7.0.0|^8.0.0"
1568             },
1569             "type": "library",
1570             "extra": {
1571                 "branch-alias": {
1572                     "dev-master": "2.x-dev"
1573                 }
1574             },
1575             "autoload": {
1576                 "psr-4": {
1577                     "Laravel\\SerializableClosure\\": "src/"
1578                 }
1579             },
1580             "notification-url": "https://packagist.org/downloads/",
1581             "license": [
1582                 "MIT"
1583             ],
1584             "authors": [
1585                 {
1586                     "name": "Taylor Otwell",
1587                     "email": "taylor@laravel.com"
1588                 },
1589                 {
1590                     "name": "Nuno Maduro",
1591                     "email": "nuno@laravel.com"
1592                 }
1593             ],
1594             "description": "Laravel Serializable Closure provides an easy and secure way to serialize closures in PHP.",
1595             "keywords": [
1596                 "closure",
1597                 "laravel",
1598                 "serializable"
1599             ],
1600             "support": {
1601                 "issues": "https://github.com/laravel/serializable-closure/issues",
1602                 "source": "https://github.com/laravel/serializable-closure"
1603             },
1604             "time": "2026-04-14T13:33:34+00:00"
1605         },
1606         {
1607             "name": "laravel/tinker",
1608             "version": "v3.0.2",
1609             "source": {
1610                 "type": "git",
1611                 "url": "https://github.com/laravel/tinker.git",
1612                 "reference": "4faba77764bd33411735936acdf30446d058c78b"
1613             },
1614             "dist": {
1615                 "type": "zip",
1616                 "url": "https://api.github.com/repos/laravel/tinker/zipball/4faba77764bd33411735936acdf30446d058c78b",
1617                 "reference": "4faba77764bd33411735936acdf30446d058c78b",
1618                 "shasum": ""
1619             },
1620             "require": {
1621                 "illuminate/console": "^8.0|^9.0|^10.0|^11.0|^12.0|^13.0",
1622                 "illuminate/contracts": "^8.0|^9.0|^10.0|^11.0|^12.0|^13.0",
1623                 "illuminate/support": "^8.0|^9.0|^10.0|^11.0|^12.0|^13.0",
1624                 "php": "^8.1",
1625                 "psy/psysh": "^0.12.0",
1626                 "symfony/var-dumper": "^5.4|^6.0|^7.0|^8.0"
1627             },
1628             "require-dev": {
1629                 "mockery/mockery": "~1.3.3|^1.4.2",
1630                 "phpstan/phpstan": "^1.10",
1631                 "phpunit/phpunit": "^10.5|^11.5"
1632             },
1633             "suggest": {
1634                 "illuminate/database": "The Illuminate Database package (^8.0|^9.0|^10.0|^11.0|^12.0|^13.0)."
1635             },
1636             "type": "library",
1637             "extra": {
1638                 "laravel": {
1639                     "providers": [
1640                         "Laravel\\Tinker\\TinkerServiceProvider"
1641                     ]
1642                 },
1643                 "branch-alias": {
1644                     "dev-master": "3.x-dev"
1645                 }
1646             },
1647             "autoload": {
1648                 "psr-4": {
1649                     "Laravel\\Tinker\\": "src/"
1650                 }
1651             },
1652             "notification-url": "https://packagist.org/downloads/",
1653             "license": [
1654                 "MIT"
1655             ],
1656             "authors": [
1657                 {
1658                     "name": "Taylor Otwell",
1659                     "email": "taylor@laravel.com"
1660                 }
1661             ],
1662             "description": "Powerful REPL for the Laravel framework.",
1663             "keywords": [
1664                 "REPL",
1665                 "Tinker",
1666                 "laravel",
1667                 "psysh"
1668             ],
1669             "support": {
1670                 "issues": "https://github.com/laravel/tinker/issues",
1671                 "source": "https://github.com/laravel/tinker/tree/v3.0.2"
1672             },
1673             "time": "2026-03-17T14:54:13+00:00"
1674         },
1675         {
1676             "name": "league/commonmark",
1677             "version": "2.8.2",
1678             "source": {
1679                 "type": "git",
1680                 "url": "https://github.com/thephpleague/commonmark.git",
1681                 "reference": "59fb075d2101740c337c7216e3f32b36c204218b"
1682             },
1683             "dist": {
1684                 "type": "zip",
1685                 "url": "https://api.github.com/repos/thephpleague/commonmark/zipball/59fb075d2101740c337c7216e3f32b36c204218b",
1686                 "reference": "59fb075d2101740c337c7216e3f32b36c204218b",
1687                 "shasum": ""
1688             },
1689             "require": {
1690                 "ext-mbstring": "*",
1691                 "league/config": "^1.1.1",
1692                 "php": "^7.4 || ^8.0",
1693                 "psr/event-dispatcher": "^1.0",
1694                 "symfony/deprecation-contracts": "^2.1 || ^3.0",
1695                 "symfony/polyfill-php80": "^1.16"
1696             },
1697             "require-dev": {
1698                 "cebe/markdown": "^1.0",
1699                 "commonmark/cmark": "0.31.1",
1700                 "commonmark/commonmark.js": "0.31.1",
1701                 "composer/package-versions-deprecated": "^1.8",
1702                 "embed/embed": "^4.4",
1703                 "erusev/parsedown": "^1.0",
1704                 "ext-json": "*",
1705                 "github/gfm": "0.29.0",
1706                 "michelf/php-markdown": "^1.4 || ^2.0",
1707                 "nyholm/psr7": "^1.5",
1708                 "phpstan/phpstan": "^1.8.2",
1709                 "phpunit/phpunit": "^9.5.21 || ^10.5.9 || ^11.0.0",
1710                 "scrutinizer/ocular": "^1.8.1",
1711                 "symfony/finder": "^5.3 | ^6.0 | ^7.0 || ^8.0",
1712                 "symfony/process": "^5.4 | ^6.0 | ^7.0 || ^8.0",
1713                 "symfony/yaml": "^2.3 | ^3.0 | ^4.0 | ^5.0 | ^6.0 | ^7.0 || ^8.0",
1714                 "unleashedtech/php-coding-standard": "^3.1.1",
1715                 "vimeo/psalm": "^4.24.0 || ^5.0.0 || ^6.0.0"
1716             },
1717             "suggest": {
1718                 "symfony/yaml": "v2.3+ required if using the Front Matter extension"
1719             },
1720             "type": "library",
1721             "extra": {
1722                 "branch-alias": {
1723                     "dev-main": "2.9-dev"
1724                 }
1725             },
1726             "autoload": {
1727                 "psr-4": {
1728                     "League\\CommonMark\\": "src"
1729                 }
1730             },
1731             "notification-url": "https://packagist.org/downloads/",
1732             "license": [
1733                 "BSD-3-Clause"
1734             ],
1735             "authors": [
1736                 {
1737                     "name": "Colin O'Dell",
1738                     "email": "colinodell@gmail.com",
1739                     "homepage": "https://www.colinodell.com",
1740                     "role": "Lead Developer"
1741                 }
1742             ],
1743             "description": "Highly-extensible PHP Markdown parser which fully supports the CommonMark spec and GitHub-Flavored Markdown (GFM)",
1744             "homepage": "https://commonmark.thephpleague.com",
1745             "keywords": [
1746                 "commonmark",
1747                 "flavored",
1748                 "gfm",
1749                 "github",
1750                 "github-flavored",
1751                 "markdown",
1752                 "md",
1753                 "parser"
1754             ],
1755             "support": {
1756                 "docs": "https://commonmark.thephpleague.com/",
1757                 "forum": "https://github.com/thephpleague/commonmark/discussions",
1758                 "issues": "https://github.com/thephpleague/commonmark/issues",
1759                 "rss": "https://github.com/thephpleague/commonmark/releases.atom",
1760                 "source": "https://github.com/thephpleague/commonmark"
1761             },
1762             "funding": [
1763                 {
1764                     "url": "https://www.colinodell.com/sponsor",
1765                     "type": "custom"
1766                 },
1767                 {
1768                     "url": "https://www.paypal.me/colinpodell/10.00",
1769                     "type": "custom"
1770                 },
1771                 {
1772                     "url": "https://github.com/colinodell",
1773                     "type": "github"
1774                 },
1775                 {
1776                     "url": "https://tidelift.com/funding/github/packagist/league/commonmark",
1777                     "type": "tidelift"
1778                 }
1779             ],
1780             "time": "2026-03-19T13:16:38+00:00"
1781         },
1782         {
1783             "name": "league/config",
1784             "version": "v1.2.0",
1785             "source": {
1786                 "type": "git",
1787                 "url": "https://github.com/thephpleague/config.git",
1788                 "reference": "754b3604fb2984c71f4af4a9cbe7b57f346ec1f3"
1789             },
1790             "dist": {
1791                 "type": "zip",
1792                 "url": "https://api.github.com/repos/thephpleague/config/zipball/754b3604fb2984c71f4af4a9cbe7b57f346ec1f3",
1793                 "reference": "754b3604fb2984c71f4af4a9cbe7b57f346ec1f3",
1794                 "shasum": ""
1795             },
1796             "require": {
1797                 "dflydev/dot-access-data": "^3.0.1",
1798                 "nette/schema": "^1.2",
1799                 "php": "^7.4 || ^8.0"
1800             },
1801             "require-dev": {
1802                 "phpstan/phpstan": "^1.8.2",
1803                 "phpunit/phpunit": "^9.5.5",
1804                 "scrutinizer/ocular": "^1.8.1",
1805                 "unleashedtech/php-coding-standard": "^3.1",
1806                 "vimeo/psalm": "^4.7.3"
1807             },
1808             "type": "library",
1809             "extra": {
1810                 "branch-alias": {
1811                     "dev-main": "1.2-dev"
1812                 }
1813             },
1814             "autoload": {
1815                 "psr-4": {
1816                     "League\\Config\\": "src"
1817                 }
1818             },
1819             "notification-url": "https://packagist.org/downloads/",
1820             "license": [
1821                 "BSD-3-Clause"
1822             ],
1823             "authors": [
1824                 {
1825                     "name": "Colin O'Dell",
1826                     "email": "colinodell@gmail.com",
1827                     "homepage": "https://www.colinodell.com",
1828                     "role": "Lead Developer"
1829                 }
1830             ],
1831             "description": "Define configuration arrays with strict schemas and access values with dot notation",
1832             "homepage": "https://config.thephpleague.com",
1833             "keywords": [
1834                 "array",
1835                 "config",
1836                 "configuration",
1837                 "dot",
1838                 "dot-access",
1839                 "nested",
1840                 "schema"
1841             ],
1842             "support": {
1843                 "docs": "https://config.thephpleague.com/",
1844                 "issues": "https://github.com/thephpleague/config/issues",
1845                 "rss": "https://github.com/thephpleague/config/releases.atom",
1846                 "source": "https://github.com/thephpleague/config"
1847             },
1848             "funding": [
1849                 {
1850                     "url": "https://www.colinodell.com/sponsor",
1851                     "type": "custom"
1852                 },
1853                 {
1854                     "url": "https://www.paypal.me/colinpodell/10.00",
1855                     "type": "custom"
1856                 },
1857                 {
1858                     "url": "https://github.com/colinodell",
1859                     "type": "github"
1860                 }
1861             ],
1862             "time": "2022-12-11T20:36:23+00:00"
1863         },
1864         {
1865             "name": "league/flysystem",
1866             "version": "3.33.0",
1867             "source": {
1868                 "type": "git",
1869                 "url": "https://github.com/thephpleague/flysystem.git",
1870                 "reference": "570b8871e0ce693764434b29154c54b434905350"
1871             },
1872             "dist": {
1873                 "type": "zip",
1874                 "url": "https://api.github.com/repos/thephpleague/flysystem/zipball/570b8871e0ce693764434b29154c54b434905350",
1875                 "reference": "570b8871e0ce693764434b29154c54b434905350",
1876                 "shasum": ""
1877             },
1878             "require": {
1879                 "league/flysystem-local": "^3.0.0",
1880                 "league/mime-type-detection": "^1.0.0",
1881                 "php": "^8.0.2"
1882             },
1883             "conflict": {
1884                 "async-aws/core": "<1.19.0",
1885                 "async-aws/s3": "<1.14.0",
1886                 "aws/aws-sdk-php": "3.209.31 || 3.210.0",
1887                 "guzzlehttp/guzzle": "<7.0",
1888                 "guzzlehttp/ringphp": "<1.1.1",
1889                 "phpseclib/phpseclib": "3.0.15",
1890                 "symfony/http-client": "<5.2"
1891             },
1892             "require-dev": {
1893                 "async-aws/s3": "^1.5 || ^2.0",
1894                 "async-aws/simple-s3": "^1.1 || ^2.0",
1895                 "aws/aws-sdk-php": "^3.295.10",
1896                 "composer/semver": "^3.0",
1897                 "ext-fileinfo": "*",
1898                 "ext-ftp": "*",
1899                 "ext-mongodb": "^1.3|^2",
1900                 "ext-zip": "*",
1901                 "friendsofphp/php-cs-fixer": "^3.5",
1902                 "google/cloud-storage": "^1.23",
1903                 "guzzlehttp/psr7": "^2.6",
1904                 "microsoft/azure-storage-blob": "^1.1",
1905                 "mongodb/mongodb": "^1.2|^2",
1906                 "phpseclib/phpseclib": "^3.0.36",
1907                 "phpstan/phpstan": "^1.10",
1908                 "phpunit/phpunit": "^9.5.11|^10.0",
1909                 "sabre/dav": "^4.6.0"
1910             },
1911             "type": "library",
1912             "autoload": {
1913                 "psr-4": {
1914                     "League\\Flysystem\\": "src"
1915                 }
1916             },
1917             "notification-url": "https://packagist.org/downloads/",
1918             "license": [
1919                 "MIT"
1920             ],
1921             "authors": [
1922                 {
1923                     "name": "Frank de Jonge",
1924                     "email": "info@frankdejonge.nl"
1925                 }
1926             ],
1927             "description": "File storage abstraction for PHP",
1928             "keywords": [
1929                 "WebDAV",
1930                 "aws",
1931                 "cloud",
1932                 "file",
1933                 "files",
1934                 "filesystem",
1935                 "filesystems",
1936                 "ftp",
1937                 "s3",
1938                 "sftp",
1939                 "storage"
1940             ],
1941             "support": {
1942                 "issues": "https://github.com/thephpleague/flysystem/issues",
1943                 "source": "https://github.com/thephpleague/flysystem/tree/3.33.0"
1944             },
1945             "time": "2026-03-25T07:59:30+00:00"
1946         },
1947         {
1948             "name": "league/flysystem-local",
1949             "version": "3.31.0",
1950             "source": {
1951                 "type": "git",
1952                 "url": "https://github.com/thephpleague/flysystem-local.git",
1953                 "reference": "2f669db18a4c20c755c2bb7d3a7b0b2340488079"
1954             },
1955             "dist": {
1956                 "type": "zip",
1957                 "url": "https://api.github.com/repos/thephpleague/flysystem-local/zipball/2f669db18a4c20c755c2bb7d3a7b0b2340488079",
1958                 "reference": "2f669db18a4c20c755c2bb7d3a7b0b2340488079",
1959                 "shasum": ""
1960             },
1961             "require": {
1962                 "ext-fileinfo": "*",
1963                 "league/flysystem": "^3.0.0",
1964                 "league/mime-type-detection": "^1.0.0",
1965                 "php": "^8.0.2"
1966             },
1967             "type": "library",
1968             "autoload": {
1969                 "psr-4": {
1970                     "League\\Flysystem\\Local\\": ""
1971                 }
1972             },
1973             "notification-url": "https://packagist.org/downloads/",
1974             "license": [
1975                 "MIT"
1976             ],
1977             "authors": [
1978                 {
1979                     "name": "Frank de Jonge",
1980                     "email": "info@frankdejonge.nl"
1981                 }
1982             ],
1983             "description": "Local filesystem adapter for Flysystem.",
1984             "keywords": [
1985                 "Flysystem",
1986                 "file",
1987                 "files",
1988                 "filesystem",
1989                 "local"
1990             ],
1991             "support": {
1992                 "source": "https://github.com/thephpleague/flysystem-local/tree/3.31.0"
1993             },
1994             "time": "2026-01-23T15:30:45+00:00"
1995         },
1996         {
1997             "name": "league/mime-type-detection",
1998             "version": "1.16.0",
1999             "source": {
2000                 "type": "git",
2001                 "url": "https://github.com/thephpleague/mime-type-detection.git",
2002                 "reference": "2d6702ff215bf922936ccc1ad31007edc76451b9"
2003             },
2004             "dist": {
2005                 "type": "zip",
2006                 "url": "https://api.github.com/repos/thephpleague/mime-type-detection/zipball/2d6702ff215bf922936ccc1ad31007edc76451b9",
2007                 "reference": "2d6702ff215bf922936ccc1ad31007edc76451b9",
2008                 "shasum": ""
2009             },
2010             "require": {
2011                 "ext-fileinfo": "*",
2012                 "php": "^7.4 || ^8.0"
2013             },
2014             "require-dev": {
2015                 "friendsofphp/php-cs-fixer": "^3.2",
2016                 "phpstan/phpstan": "^0.12.68",
2017                 "phpunit/phpunit": "^8.5.8 || ^9.3 || ^10.0"
2018             },
2019             "type": "library",
2020             "autoload": {
2021                 "psr-4": {
2022                     "League\\MimeTypeDetection\\": "src"
2023                 }
2024             },
2025             "notification-url": "https://packagist.org/downloads/",
2026             "license": [
2027                 "MIT"
2028             ],
2029             "authors": [
2030                 {
2031                     "name": "Frank de Jonge",
2032                     "email": "info@frankdejonge.nl"
2033                 }
2034             ],
2035             "description": "Mime-type detection for Flysystem",
2036             "support": {
2037                 "issues": "https://github.com/thephpleague/mime-type-detection/issues",
2038                 "source": "https://github.com/thephpleague/mime-type-detection/tree/1.16.0"
2039             },
2040             "funding": [
2041                 {
2042                     "url": "https://github.com/frankdejonge",
2043                     "type": "github"
2044                 },
2045                 {
2046                     "url": "https://tidelift.com/funding/github/packagist/league/flysystem",
2047                     "type": "tidelift"
2048                 }
2049             ],
2050             "time": "2024-09-21T08:32:55+00:00"
2051         },
2052         {
2053             "name": "league/uri",
2054             "version": "7.8.1",
2055             "source": {
2056                 "type": "git",
2057                 "url": "https://github.com/thephpleague/uri.git",
2058                 "reference": "08cf38e3924d4f56238125547b5720496fac8fd4"
2059             },
2060             "dist": {
2061                 "type": "zip",
2062                 "url": "https://api.github.com/repos/thephpleague/uri/zipball/08cf38e3924d4f56238125547b5720496fac8fd4",
2063                 "reference": "08cf38e3924d4f56238125547b5720496fac8fd4",
2064                 "shasum": ""
2065             },
2066             "require": {
2067                 "league/uri-interfaces": "^7.8.1",
2068                 "php": "^8.1",
2069                 "psr/http-factory": "^1"
2070             },
2071             "conflict": {
2072                 "league/uri-schemes": "^1.0"
2073             },
2074             "suggest": {
2075                 "ext-bcmath": "to improve IPV4 host parsing",
2076                 "ext-dom": "to convert the URI into an HTML anchor tag",
2077                 "ext-fileinfo": "to create Data URI from file contennts",
2078                 "ext-gmp": "to improve IPV4 host parsing",
2079                 "ext-intl": "to handle IDN host with the best performance",
2080                 "ext-uri": "to use the PHP native URI class",
2081                 "jeremykendall/php-domain-parser": "to further parse the URI host and resolve its Public Suffix and Top Level Domain",
2082                 "league/uri-components": "to provide additional tools to manipulate URI objects components",
2083                 "league/uri-polyfill": "to backport the PHP URI extension for older versions of PHP",
2084                 "php-64bit": "to improve IPV4 host parsing",
2085                 "rowbot/url": "to handle URLs using the WHATWG URL Living Standard specification",
2086                 "symfony/polyfill-intl-idn": "to handle IDN host via the Symfony polyfill if ext-intl is not present"
2087             },
2088             "type": "library",
2089             "extra": {
2090                 "branch-alias": {
2091                     "dev-master": "7.x-dev"
2092                 }
2093             },
2094             "autoload": {
2095                 "psr-4": {
2096                     "League\\Uri\\": ""
2097                 }
2098             },
2099             "notification-url": "https://packagist.org/downloads/",
2100             "license": [
2101                 "MIT"
2102             ],
2103             "authors": [
2104                 {
2105                     "name": "Ignace Nyamagana Butera",
2106                     "email": "nyamsprod@gmail.com",
2107                     "homepage": "https://nyamsprod.com"
2108                 }
2109             ],
2110             "description": "URI manipulation library",
2111             "homepage": "https://uri.thephpleague.com",
2112             "keywords": [
2113                 "URN",
2114                 "data-uri",
2115                 "file-uri",
2116                 "ftp",
2117                 "hostname",
2118                 "http",
2119                 "https",
2120                 "middleware",
2121                 "parse_str",
2122                 "parse_url",
2123                 "psr-7",
2124                 "query-string",
2125                 "querystring",
2126                 "rfc2141",
2127                 "rfc3986",
2128                 "rfc3987",
2129                 "rfc6570",
2130                 "rfc8141",
2131                 "uri",
2132                 "uri-template",
2133                 "url",
2134                 "ws"
2135             ],
2136             "support": {
2137                 "docs": "https://uri.thephpleague.com",
2138                 "forum": "https://thephpleague.slack.com",
2139                 "issues": "https://github.com/thephpleague/uri-src/issues",
2140                 "source": "https://github.com/thephpleague/uri/tree/7.8.1"
2141             },
2142             "funding": [
2143                 {
2144                     "url": "https://github.com/sponsors/nyamsprod",
2145                     "type": "github"
2146                 }
2147             ],
2148             "time": "2026-03-15T20:22:25+00:00"
2149         },
2150         {
2151             "name": "league/uri-interfaces",
2152             "version": "7.8.1",
2153             "source": {
2154                 "type": "git",
2155                 "url": "https://github.com/thephpleague/uri-interfaces.git",
2156                 "reference": "85d5c77c5d6d3af6c54db4a78246364908f3c928"
2157             },
2158             "dist": {
2159                 "type": "zip",
2160                 "url": "https://api.github.com/repos/thephpleague/uri-interfaces/zipball/85d5c77c5d6d3af6c54db4a78246364908f3c928",
2161                 "reference": "85d5c77c5d6d3af6c54db4a78246364908f3c928",
2162                 "shasum": ""
2163             },
2164             "require": {
2165                 "ext-filter": "*",
2166                 "php": "^8.1",
2167                 "psr/http-message": "^1.1 || ^2.0"
2168             },
2169             "suggest": {
2170                 "ext-bcmath": "to improve IPV4 host parsing",
2171                 "ext-gmp": "to improve IPV4 host parsing",
2172                 "ext-intl": "to handle IDN host with the best performance",
2173                 "php-64bit": "to improve IPV4 host parsing",
2174                 "rowbot/url": "to handle URLs using the WHATWG URL Living Standard specification",
2175                 "symfony/polyfill-intl-idn": "to handle IDN host via the Symfony polyfill if ext-intl is not present"
2176             },
2177             "type": "library",
2178             "extra": {
2179                 "branch-alias": {
2180                     "dev-master": "7.x-dev"
2181                 }
2182             },
2183             "autoload": {
2184                 "psr-4": {
2185                     "League\\Uri\\": ""
2186                 }
2187             },
2188             "notification-url": "https://packagist.org/downloads/",
2189             "license": [
2190                 "MIT"
2191             ],
2192             "authors": [
2193                 {
2194                     "name": "Ignace Nyamagana Butera",
2195                     "email": "nyamsprod@gmail.com",
2196                     "homepage": "https://nyamsprod.com"
2197                 }
2198             ],
2199             "description": "Common tools for parsing and resolving RFC3987/RFC3986 URI",
2200             "homepage": "https://uri.thephpleague.com",
2201             "keywords": [
2202                 "data-uri",
2203                 "file-uri",
2204                 "ftp",
2205                 "hostname",
2206                 "http",
2207                 "https",
2208                 "parse_str",
2209                 "parse_url",
2210                 "psr-7",
2211                 "query-string",
2212                 "querystring",
2213                 "rfc3986",
2214                 "rfc3987",
2215                 "rfc6570",
2216                 "uri",
2217                 "url",
2218                 "ws"
2219             ],
2220             "support": {
2221                 "docs": "https://uri.thephpleague.com",
2222                 "forum": "https://thephpleague.slack.com",
2223                 "issues": "https://github.com/thephpleague/uri-src/issues",
2224                 "source": "https://github.com/thephpleague/uri-interfaces/tree/7.8.1"
2225             },
2226             "funding": [
2227                 {
2228                     "url": "https://github.com/sponsors/nyamsprod",
2229                     "type": "github"
2230                 }
2231             ],
2232             "time": "2026-03-08T20:05:35+00:00"
2233         },
2234         {
2235             "name": "monolog/monolog",
2236             "version": "3.10.0",
2237             "source": {
2238                 "type": "git",
2239                 "url": "https://github.com/Seldaek/monolog.git",
2240                 "reference": "b321dd6749f0bf7189444158a3ce785cc16d69b0"
2241             },
2242             "dist": {
2243                 "type": "zip",
2244                 "url": "https://api.github.com/repos/Seldaek/monolog/zipball/b321dd6749f0bf7189444158a3ce785cc16d69b0",
2245                 "reference": "b321dd6749f0bf7189444158a3ce785cc16d69b0",
2246                 "shasum": ""
2247             },
2248             "require": {
2249                 "php": ">=8.1",
2250                 "psr/log": "^2.0 || ^3.0"
2251             },
2252             "provide": {
2253                 "psr/log-implementation": "3.0.0"
2254             },
2255             "require-dev": {
2256                 "aws/aws-sdk-php": "^3.0",
2257                 "doctrine/couchdb": "~1.0@dev",
2258                 "elasticsearch/elasticsearch": "^7 || ^8",
2259                 "ext-json": "*",
2260                 "graylog2/gelf-php": "^1.4.2 || ^2.0",
2261                 "guzzlehttp/guzzle": "^7.4.5",
2262                 "guzzlehttp/psr7": "^2.2",
2263                 "mongodb/mongodb": "^1.8 || ^2.0",
2264                 "php-amqplib/php-amqplib": "~2.4 || ^3",
2265                 "php-console/php-console": "^3.1.8",
2266                 "phpstan/phpstan": "^2",
2267                 "phpstan/phpstan-deprecation-rules": "^2",
2268                 "phpstan/phpstan-strict-rules": "^2",
2269                 "phpunit/phpunit": "^10.5.17 || ^11.0.7",
2270                 "predis/predis": "^1.1 || ^2",
2271                 "rollbar/rollbar": "^4.0",
2272                 "ruflin/elastica": "^7 || ^8",
2273                 "symfony/mailer": "^5.4 || ^6",
2274                 "symfony/mime": "^5.4 || ^6"
2275             },
2276             "suggest": {
2277                 "aws/aws-sdk-php": "Allow sending log messages to AWS services like DynamoDB",
2278                 "doctrine/couchdb": "Allow sending log messages to a CouchDB server",
2279                 "elasticsearch/elasticsearch": "Allow sending log messages to an Elasticsearch server via official client",
2280                 "ext-amqp": "Allow sending log messages to an AMQP server (1.0+ required)",
2281                 "ext-curl": "Required to send log messages using the IFTTTHandler, the LogglyHandler, the SendGridHandler, the SlackWebhookHandler or the TelegramBotHandler",
2282                 "ext-mbstring": "Allow to work properly with unicode symbols",
2283                 "ext-mongodb": "Allow sending log messages to a MongoDB server (via driver)",
2284                 "ext-openssl": "Required to send log messages using SSL",
2285                 "ext-sockets": "Allow sending log messages to a Syslog server (via UDP driver)",
2286                 "graylog2/gelf-php": "Allow sending log messages to a GrayLog2 server",
2287                 "mongodb/mongodb": "Allow sending log messages to a MongoDB server (via library)",
2288                 "php-amqplib/php-amqplib": "Allow sending log messages to an AMQP server using php-amqplib",
2289                 "rollbar/rollbar": "Allow sending log messages to Rollbar",
2290                 "ruflin/elastica": "Allow sending log messages to an Elastic Search server"
2291             },
2292             "type": "library",
2293             "extra": {
2294                 "branch-alias": {
2295                     "dev-main": "3.x-dev"
2296                 }
2297             },
2298             "autoload": {
2299                 "psr-4": {
2300                     "Monolog\\": "src/Monolog"
2301                 }
2302             },
2303             "notification-url": "https://packagist.org/downloads/",
2304             "license": [
2305                 "MIT"
2306             ],
2307             "authors": [
2308                 {
2309                     "name": "Jordi Boggiano",
2310                     "email": "j.boggiano@seld.be",
2311                     "homepage": "https://seld.be"
2312                 }
2313             ],
2314             "description": "Sends your logs to files, sockets, inboxes, databases and various web services",
2315             "homepage": "https://github.com/Seldaek/monolog",
2316             "keywords": [
2317                 "log",
2318                 "logging",
2319                 "psr-3"
2320             ],
2321             "support": {
2322                 "issues": "https://github.com/Seldaek/monolog/issues",
2323                 "source": "https://github.com/Seldaek/monolog/tree/3.10.0"
2324             },
2325             "funding": [
2326                 {
2327                     "url": "https://github.com/Seldaek",
2328                     "type": "github"
2329                 },
2330                 {
2331                     "url": "https://tidelift.com/funding/github/packagist/monolog/monolog",
2332                     "type": "tidelift"
2333                 }
2334             ],
2335             "time": "2026-01-02T08:56:05+00:00"
2336         },
2337         {
2338             "name": "nesbot/carbon",
2339             "version": "3.11.4",
2340             "source": {
2341                 "type": "git",
2342                 "url": "https://github.com/CarbonPHP/carbon.git",
2343                 "reference": "e890471a3494740f7d9326d72ce6a8c559ffee60"
2344             },
2345             "dist": {
2346                 "type": "zip",
2347                 "url": "https://api.github.com/repos/CarbonPHP/carbon/zipball/e890471a3494740f7d9326d72ce6a8c559ffee60",
2348                 "reference": "e890471a3494740f7d9326d72ce6a8c559ffee60",
2349                 "shasum": ""
2350             },
2351             "require": {
2352                 "carbonphp/carbon-doctrine-types": "<100.0",
2353                 "ext-json": "*",
2354                 "php": "^8.1",
2355                 "psr/clock": "^1.0",
2356                 "symfony/clock": "^6.3.12 || ^7.0 || ^8.0",
2357                 "symfony/polyfill-mbstring": "^1.0",
2358                 "symfony/translation": "^4.4.18 || ^5.2.1 || ^6.0 || ^7.0 || ^8.0"
2359             },
2360             "provide": {
2361                 "psr/clock-implementation": "1.0"
2362             },
2363             "require-dev": {
2364                 "doctrine/dbal": "^3.6.3 || ^4.0",
2365                 "doctrine/orm": "^2.15.2 || ^3.0",
2366                 "friendsofphp/php-cs-fixer": "^v3.87.1",
2367                 "kylekatarnls/multi-tester": "^2.5.3",
2368                 "phpmd/phpmd": "^2.15.0",
2369                 "phpstan/extension-installer": "^1.4.3",
2370                 "phpstan/phpstan": "^2.1.22",
2371                 "phpunit/phpunit": "^10.5.53",
2372                 "squizlabs/php_codesniffer": "^3.13.4 || ^4.0.0"
2373             },
2374             "bin": [
2375                 "bin/carbon"
2376             ],
2377             "type": "library",
2378             "extra": {
2379                 "laravel": {
2380                     "providers": [
2381                         "Carbon\\Laravel\\ServiceProvider"
2382                     ]
2383                 },
2384                 "phpstan": {
2385                     "includes": [
2386                         "extension.neon"
2387                     ]
2388                 },
2389                 "branch-alias": {
2390                     "dev-2.x": "2.x-dev",
2391                     "dev-master": "3.x-dev"
2392                 }
2393             },
2394             "autoload": {
2395                 "psr-4": {
2396                     "Carbon\\": "src/Carbon/"
2397                 }
2398             },
2399             "notification-url": "https://packagist.org/downloads/",
2400             "license": [
2401                 "MIT"
2402             ],
2403             "authors": [
2404                 {
2405                     "name": "Brian Nesbitt",
2406                     "email": "brian@nesbot.com",
2407                     "homepage": "https://markido.com"
2408                 },
2409                 {
2410                     "name": "kylekatarnls",
2411                     "homepage": "https://github.com/kylekatarnls"
2412                 }
2413             ],
2414             "description": "An API extension for DateTime that supports 281 different languages.",
2415             "homepage": "https://carbonphp.github.io/carbon/",
2416             "keywords": [
2417                 "date",
2418                 "datetime",
2419                 "time"
2420             ],
2421             "support": {
2422                 "docs": "https://carbonphp.github.io/carbon/guide/getting-started/introduction.html",
2423                 "issues": "https://github.com/CarbonPHP/carbon/issues",
2424                 "source": "https://github.com/CarbonPHP/carbon"
2425             },
2426             "funding": [
2427                 {
2428                     "url": "https://github.com/sponsors/kylekatarnls",
2429                     "type": "github"
2430                 },
2431                 {
2432                     "url": "https://opencollective.com/Carbon#sponsor",
2433                     "type": "opencollective"
2434                 },
2435                 {
2436                     "url": "https://tidelift.com/subscription/pkg/packagist-nesbot-carbon?utm_source=packagist-nesbot-carbon&utm_medium=referral&utm_campaign=readme",
2437                     "type": "tidelift"
2438                 }
2439             ],
2440             "time": "2026-04-07T09:57:54+00:00"
2441         },
2442         {
2443             "name": "nette/schema",
2444             "version": "v1.3.5",
2445             "source": {
2446                 "type": "git",
2447                 "url": "https://github.com/nette/schema.git",
2448                 "reference": "f0ab1a3cda782dbc5da270d28545236aa80c4002"
2449             },
2450             "dist": {
2451                 "type": "zip",
2452                 "url": "https://api.github.com/repos/nette/schema/zipball/f0ab1a3cda782dbc5da270d28545236aa80c4002",
2453                 "reference": "f0ab1a3cda782dbc5da270d28545236aa80c4002",
2454                 "shasum": ""
2455             },
2456             "require": {
2457                 "nette/utils": "^4.0",
2458                 "php": "8.1 - 8.5"
2459             },
2460             "require-dev": {
2461                 "nette/phpstan-rules": "^1.0",
2462                 "nette/tester": "^2.6",
2463                 "phpstan/extension-installer": "^1.4@stable",
2464                 "phpstan/phpstan": "^2.1.39@stable",
2465                 "tracy/tracy": "^2.8"
2466             },
2467             "type": "library",
2468             "extra": {
2469                 "branch-alias": {
2470                     "dev-master": "1.3-dev"
2471                 }
2472             },
2473             "autoload": {
2474                 "psr-4": {
2475                     "Nette\\": "src"
2476                 },
2477                 "classmap": [
2478                     "src/"
2479                 ]
2480             },
2481             "notification-url": "https://packagist.org/downloads/",
2482             "license": [
2483                 "BSD-3-Clause",
2484                 "GPL-2.0-only",
2485                 "GPL-3.0-only"
2486             ],
2487             "authors": [
2488                 {
2489                     "name": "David Grudl",
2490                     "homepage": "https://davidgrudl.com"
2491                 },
2492                 {
2493                     "name": "Nette Community",
2494                     "homepage": "https://nette.org/contributors"
2495                 }
2496             ],
2497             "description": "📐 Nette Schema: validating data structures against a given Schema.",
2498             "homepage": "https://nette.org",
2499             "keywords": [
2500                 "config",
2501                 "nette"
2502             ],
2503             "support": {
2504                 "issues": "https://github.com/nette/schema/issues",
2505                 "source": "https://github.com/nette/schema/tree/v1.3.5"
2506             },
2507             "time": "2026-02-23T03:47:12+00:00"
2508         },
2509         {
2510             "name": "nette/utils",
2511             "version": "v4.1.3",
2512             "source": {
2513                 "type": "git",
2514                 "url": "https://github.com/nette/utils.git",
2515                 "reference": "bb3ea637e3d131d72acc033cfc2746ee893349fe"
2516             },
2517             "dist": {
2518                 "type": "zip",
2519                 "url": "https://api.github.com/repos/nette/utils/zipball/bb3ea637e3d131d72acc033cfc2746ee893349fe",
2520                 "reference": "bb3ea637e3d131d72acc033cfc2746ee893349fe",
2521                 "shasum": ""
2522             },
2523             "require": {
2524                 "php": "8.2 - 8.5"
2525             },
2526             "conflict": {
2527                 "nette/finder": "<3",
2528                 "nette/schema": "<1.2.2"
2529             },
2530             "require-dev": {
2531                 "jetbrains/phpstorm-attributes": "^1.2",
2532                 "nette/phpstan-rules": "^1.0",
2533                 "nette/tester": "^2.5",
2534                 "phpstan/extension-installer": "^1.4@stable",
2535                 "phpstan/phpstan": "^2.1@stable",
2536                 "tracy/tracy": "^2.9"
2537             },
2538             "suggest": {
2539                 "ext-gd": "to use Image",
2540                 "ext-iconv": "to use Strings::webalize(), toAscii(), chr() and reverse()",
2541                 "ext-intl": "to use Strings::webalize(), toAscii(), normalize() and compare()",
2542                 "ext-json": "to use Nette\\Utils\\Json",
2543                 "ext-mbstring": "to use Strings::lower() etc...",
2544                 "ext-tokenizer": "to use Nette\\Utils\\Reflection::getUseStatements()"
2545             },
2546             "type": "library",
2547             "extra": {
2548                 "branch-alias": {
2549                     "dev-master": "4.1-dev"
2550                 }
2551             },
2552             "autoload": {
2553                 "psr-4": {
2554                     "Nette\\": "src"
2555                 },
2556                 "classmap": [
2557                     "src/"
2558                 ]
2559             },
2560             "notification-url": "https://packagist.org/downloads/",
2561             "license": [
2562                 "BSD-3-Clause",
2563                 "GPL-2.0-only",
2564                 "GPL-3.0-only"
2565             ],
2566             "authors": [
2567                 {
2568                     "name": "David Grudl",
2569                     "homepage": "https://davidgrudl.com"
2570                 },
2571                 {
2572                     "name": "Nette Community",
2573                     "homepage": "https://nette.org/contributors"
2574                 }
2575             ],
2576             "description": "🛠  Nette Utils: lightweight utilities for string & array manipulation, image handling, safe JSON encoding/decoding, validation, slug or strong password generating etc.",
2577             "homepage": "https://nette.org",
2578             "keywords": [
2579                 "array",
2580                 "core",
2581                 "datetime",
2582                 "images",
2583                 "json",
2584                 "nette",
2585                 "paginator",
2586                 "password",
2587                 "slugify",
2588                 "string",
2589                 "unicode",
2590                 "utf-8",
2591                 "utility",
2592                 "validation"
2593             ],
2594             "support": {
2595                 "issues": "https://github.com/nette/utils/issues",
2596                 "source": "https://github.com/nette/utils/tree/v4.1.3"
2597             },
2598             "time": "2026-02-13T03:05:33+00:00"
2599         },
2600         {
2601             "name": "nikic/php-parser",
2602             "version": "v5.7.0",
2603             "source": {
2604                 "type": "git",
2605                 "url": "https://github.com/nikic/PHP-Parser.git",
2606                 "reference": "dca41cd15c2ac9d055ad70dbfd011130757d1f82"
2607             },
2608             "dist": {
2609                 "type": "zip",
2610                 "url": "https://api.github.com/repos/nikic/PHP-Parser/zipball/dca41cd15c2ac9d055ad70dbfd011130757d1f82",
2611                 "reference": "dca41cd15c2ac9d055ad70dbfd011130757d1f82",
2612                 "shasum": ""
2613             },
2614             "require": {
2615                 "ext-ctype": "*",
2616                 "ext-json": "*",
2617                 "ext-tokenizer": "*",
2618                 "php": ">=7.4"
2619             },
2620             "require-dev": {
2621                 "ircmaxell/php-yacc": "^0.0.7",
2622                 "phpunit/phpunit": "^9.0"
2623             },
2624             "bin": [
2625                 "bin/php-parse"
2626             ],
2627             "type": "library",
2628             "extra": {
2629                 "branch-alias": {
2630                     "dev-master": "5.x-dev"
2631                 }
2632             },
2633             "autoload": {
2634                 "psr-4": {
2635                     "PhpParser\\": "lib/PhpParser"
2636                 }
2637             },
2638             "notification-url": "https://packagist.org/downloads/",
2639             "license": [
2640                 "BSD-3-Clause"
2641             ],
2642             "authors": [
2643                 {
2644                     "name": "Nikita Popov"
2645                 }
2646             ],
2647             "description": "A PHP parser written in PHP",
2648             "keywords": [
2649                 "parser",
2650                 "php"
2651             ],
2652             "support": {
2653                 "issues": "https://github.com/nikic/PHP-Parser/issues",
2654                 "source": "https://github.com/nikic/PHP-Parser/tree/v5.7.0"
2655             },
2656             "time": "2025-12-06T11:56:16+00:00"
2657         },
2658         {
2659             "name": "nunomaduro/termwind",
2660             "version": "v2.4.0",
2661             "source": {
2662                 "type": "git",
2663                 "url": "https://github.com/nunomaduro/termwind.git",
2664                 "reference": "712a31b768f5daea284c2169a7d227031001b9a8"
2665             },
2666             "dist": {
2667                 "type": "zip",
2668                 "url": "https://api.github.com/repos/nunomaduro/termwind/zipball/712a31b768f5daea284c2169a7d227031001b9a8",
2669                 "reference": "712a31b768f5daea284c2169a7d227031001b9a8",
2670                 "shasum": ""
2671             },
2672             "require": {
2673                 "ext-mbstring": "*",
2674                 "php": "^8.2",
2675                 "symfony/console": "^7.4.4 || ^8.0.4"
2676             },
2677             "require-dev": {
2678                 "illuminate/console": "^11.47.0",
2679                 "laravel/pint": "^1.27.1",
2680                 "mockery/mockery": "^1.6.12",
2681                 "pestphp/pest": "^2.36.0 || ^3.8.4 || ^4.3.2",
2682                 "phpstan/phpstan": "^1.12.32",
2683                 "phpstan/phpstan-strict-rules": "^1.6.2",
2684                 "symfony/var-dumper": "^7.3.5 || ^8.0.4",
2685                 "thecodingmachine/phpstan-strict-rules": "^1.0.0"
2686             },
2687             "type": "library",
2688             "extra": {
2689                 "laravel": {
2690                     "providers": [
2691                         "Termwind\\Laravel\\TermwindServiceProvider"
2692                     ]
2693                 },
2694                 "branch-alias": {
2695                     "dev-2.x": "2.x-dev"
2696                 }
2697             },
2698             "autoload": {
2699                 "files": [
2700                     "src/Functions.php"
2701                 ],
2702                 "psr-4": {
2703                     "Termwind\\": "src/"
2704                 }
2705             },
2706             "notification-url": "https://packagist.org/downloads/",
2707             "license": [
2708                 "MIT"
2709             ],
2710             "authors": [
2711                 {
2712                     "name": "Nuno Maduro",
2713                     "email": "enunomaduro@gmail.com"
2714                 }
2715             ],
2716             "description": "It's like Tailwind CSS, but for the console.",
2717             "keywords": [
2718                 "cli",
2719                 "console",
2720                 "css",
2721                 "package",
2722                 "php",
2723                 "style"
2724             ],
2725             "support": {
2726                 "issues": "https://github.com/nunomaduro/termwind/issues",
2727                 "source": "https://github.com/nunomaduro/termwind/tree/v2.4.0"
2728             },
2729             "funding": [
2730                 {
2731                     "url": "https://www.paypal.com/paypalme/enunomaduro",
2732                     "type": "custom"
2733                 },
2734                 {
2735                     "url": "https://github.com/nunomaduro",
2736                     "type": "github"
2737                 },
2738                 {
2739                     "url": "https://github.com/xiCO2k",
2740                     "type": "github"
2741                 }
2742             ],
2743             "time": "2026-02-16T23:10:27+00:00"
2744         },
2745         {
2746             "name": "phpoption/phpoption",
2747             "version": "1.9.5",
2748             "source": {
2749                 "type": "git",
2750                 "url": "https://github.com/schmittjoh/php-option.git",
2751                 "reference": "75365b91986c2405cf5e1e012c5595cd487a98be"
2752             },
2753             "dist": {
2754                 "type": "zip",
2755                 "url": "https://api.github.com/repos/schmittjoh/php-option/zipball/75365b91986c2405cf5e1e012c5595cd487a98be",
2756                 "reference": "75365b91986c2405cf5e1e012c5595cd487a98be",
2757                 "shasum": ""
2758             },
2759             "require": {
2760                 "php": "^7.2.5 || ^8.0"
2761             },
2762             "require-dev": {
2763                 "bamarni/composer-bin-plugin": "^1.8.2",
2764                 "phpunit/phpunit": "^8.5.44 || ^9.6.25 || ^10.5.53 || ^11.5.34"
2765             },
2766             "type": "library",
2767             "extra": {
2768                 "bamarni-bin": {
2769                     "bin-links": true,
2770                     "forward-command": false
2771                 },
2772                 "branch-alias": {
2773                     "dev-master": "1.9-dev"
2774                 }
2775             },
2776             "autoload": {
2777                 "psr-4": {
2778                     "PhpOption\\": "src/PhpOption/"
2779                 }
2780             },
2781             "notification-url": "https://packagist.org/downloads/",
2782             "license": [
2783                 "Apache-2.0"
2784             ],
2785             "authors": [
2786                 {
2787                     "name": "Johannes M. Schmitt",
2788                     "email": "schmittjoh@gmail.com",
2789                     "homepage": "https://github.com/schmittjoh"
2790                 },
2791                 {
2792                     "name": "Graham Campbell",
2793                     "email": "hello@gjcampbell.co.uk",
2794                     "homepage": "https://github.com/GrahamCampbell"
2795                 }
2796             ],
2797             "description": "Option Type for PHP",
2798             "keywords": [
2799                 "language",
2800                 "option",
2801                 "php",
2802                 "type"
2803             ],
2804             "support": {
2805                 "issues": "https://github.com/schmittjoh/php-option/issues",
2806                 "source": "https://github.com/schmittjoh/php-option/tree/1.9.5"
2807             },
2808             "funding": [
2809                 {
2810                     "url": "https://github.com/GrahamCampbell",
2811                     "type": "github"
2812                 },
2813                 {
2814                     "url": "https://tidelift.com/funding/github/packagist/phpoption/phpoption",
2815                     "type": "tidelift"
2816                 }
2817             ],
2818             "time": "2025-12-27T19:41:33+00:00"
2819         },
2820         {
2821             "name": "psr/clock",
2822             "version": "1.0.0",
2823             "source": {
2824                 "type": "git",
2825                 "url": "https://github.com/php-fig/clock.git",
2826                 "reference": "e41a24703d4560fd0acb709162f73b8adfc3aa0d"
2827             },
2828             "dist": {
2829                 "type": "zip",
2830                 "url": "https://api.github.com/repos/php-fig/clock/zipball/e41a24703d4560fd0acb709162f73b8adfc3aa0d",
2831                 "reference": "e41a24703d4560fd0acb709162f73b8adfc3aa0d",
2832                 "shasum": ""
2833             },
2834             "require": {
2835                 "php": "^7.0 || ^8.0"
2836             },
2837             "type": "library",
2838             "autoload": {
2839                 "psr-4": {
2840                     "Psr\\Clock\\": "src/"
2841                 }
2842             },
2843             "notification-url": "https://packagist.org/downloads/",
2844             "license": [
2845                 "MIT"
2846             ],
2847             "authors": [
2848                 {
2849                     "name": "PHP-FIG",
2850                     "homepage": "https://www.php-fig.org/"
2851                 }
2852             ],
2853             "description": "Common interface for reading the clock.",
2854             "homepage": "https://github.com/php-fig/clock",
2855             "keywords": [
2856                 "clock",
2857                 "now",
2858                 "psr",
2859                 "psr-20",
2860                 "time"
2861             ],
2862             "support": {
2863                 "issues": "https://github.com/php-fig/clock/issues",
2864                 "source": "https://github.com/php-fig/clock/tree/1.0.0"
2865             },
2866             "time": "2022-11-25T14:36:26+00:00"
2867         },
2868         {
2869             "name": "psr/container",
2870             "version": "2.0.2",
2871             "source": {
2872                 "type": "git",
2873                 "url": "https://github.com/php-fig/container.git",
2874                 "reference": "c71ecc56dfe541dbd90c5360474fbc405f8d5963"
2875             },
2876             "dist": {
2877                 "type": "zip",
2878                 "url": "https://api.github.com/repos/php-fig/container/zipball/c71ecc56dfe541dbd90c5360474fbc405f8d5963",
2879                 "reference": "c71ecc56dfe541dbd90c5360474fbc405f8d5963",
2880                 "shasum": ""
2881             },
2882             "require": {
2883                 "php": ">=7.4.0"
2884             },
2885             "type": "library",
2886             "extra": {
2887                 "branch-alias": {
2888                     "dev-master": "2.0.x-dev"
2889                 }
2890             },
2891             "autoload": {
2892                 "psr-4": {
2893                     "Psr\\Container\\": "src/"
2894                 }
2895             },
2896             "notification-url": "https://packagist.org/downloads/",
2897             "license": [
2898                 "MIT"
2899             ],
2900             "authors": [
2901                 {
2902                     "name": "PHP-FIG",
2903                     "homepage": "https://www.php-fig.org/"
2904                 }
2905             ],
2906             "description": "Common Container Interface (PHP FIG PSR-11)",
2907             "homepage": "https://github.com/php-fig/container",
2908             "keywords": [
2909                 "PSR-11",
2910                 "container",
2911                 "container-interface",
2912                 "container-interop",
2913                 "psr"
2914             ],
2915             "support": {
2916                 "issues": "https://github.com/php-fig/container/issues",
2917                 "source": "https://github.com/php-fig/container/tree/2.0.2"
2918             },
2919             "time": "2021-11-05T16:47:00+00:00"
2920         },
2921         {
2922             "name": "psr/event-dispatcher",
2923             "version": "1.0.0",
2924             "source": {
2925                 "type": "git",
2926                 "url": "https://github.com/php-fig/event-dispatcher.git",
2927                 "reference": "dbefd12671e8a14ec7f180cab83036ed26714bb0"
2928             },
2929             "dist": {
2930                 "type": "zip",
2931                 "url": "https://api.github.com/repos/php-fig/event-dispatcher/zipball/dbefd12671e8a14ec7f180cab83036ed26714bb0",
2932                 "reference": "dbefd12671e8a14ec7f180cab83036ed26714bb0",
2933                 "shasum": ""
2934             },
2935             "require": {
2936                 "php": ">=7.2.0"
2937             },
2938             "type": "library",
2939             "extra": {
2940                 "branch-alias": {
2941                     "dev-master": "1.0.x-dev"
2942                 }
2943             },
2944             "autoload": {
2945                 "psr-4": {
2946                     "Psr\\EventDispatcher\\": "src/"
2947                 }
2948             },
2949             "notification-url": "https://packagist.org/downloads/",
2950             "license": [
2951                 "MIT"
2952             ],
2953             "authors": [
2954                 {
2955                     "name": "PHP-FIG",
2956                     "homepage": "http://www.php-fig.org/"
2957                 }
2958             ],
2959             "description": "Standard interfaces for event handling.",
2960             "keywords": [
2961                 "events",
2962                 "psr",
2963                 "psr-14"
2964             ],
2965             "support": {
2966                 "issues": "https://github.com/php-fig/event-dispatcher/issues",
2967                 "source": "https://github.com/php-fig/event-dispatcher/tree/1.0.0"
2968             },
2969             "time": "2019-01-08T18:20:26+00:00"
2970         },
2971         {
2972             "name": "psr/http-client",
2973             "version": "1.0.3",
2974             "source": {
2975                 "type": "git",
2976                 "url": "https://github.com/php-fig/http-client.git",
2977                 "reference": "bb5906edc1c324c9a05aa0873d40117941e5fa90"
2978             },
2979             "dist": {
2980                 "type": "zip",
2981                 "url": "https://api.github.com/repos/php-fig/http-client/zipball/bb5906edc1c324c9a05aa0873d40117941e5fa90",
2982                 "reference": "bb5906edc1c324c9a05aa0873d40117941e5fa90",
2983                 "shasum": ""
2984             },
2985             "require": {
2986                 "php": "^7.0 || ^8.0",
2987                 "psr/http-message": "^1.0 || ^2.0"
2988             },
2989             "type": "library",
2990             "extra": {
2991                 "branch-alias": {
2992                     "dev-master": "1.0.x-dev"
2993                 }
2994             },
2995             "autoload": {
2996                 "psr-4": {
2997                     "Psr\\Http\\Client\\": "src/"
2998                 }
2999             },
3000             "notification-url": "https://packagist.org/downloads/",
3001             "license": [
3002                 "MIT"
3003             ],
3004             "authors": [
3005                 {
3006                     "name": "PHP-FIG",
3007                     "homepage": "https://www.php-fig.org/"
3008                 }
3009             ],
3010             "description": "Common interface for HTTP clients",
3011             "homepage": "https://github.com/php-fig/http-client",
3012             "keywords": [
3013                 "http",
3014                 "http-client",
3015                 "psr",
3016                 "psr-18"
3017             ],
3018             "support": {
3019                 "source": "https://github.com/php-fig/http-client"
3020             },
3021             "time": "2023-09-23T14:17:50+00:00"
3022         },
3023         {
3024             "name": "psr/http-factory",
3025             "version": "1.1.0",
3026             "source": {
3027                 "type": "git",
3028                 "url": "https://github.com/php-fig/http-factory.git",
3029                 "reference": "2b4765fddfe3b508ac62f829e852b1501d3f6e8a"
3030             },
3031             "dist": {
3032                 "type": "zip",
3033                 "url": "https://api.github.com/repos/php-fig/http-factory/zipball/2b4765fddfe3b508ac62f829e852b1501d3f6e8a",
3034                 "reference": "2b4765fddfe3b508ac62f829e852b1501d3f6e8a",
3035                 "shasum": ""
3036             },
3037             "require": {
3038                 "php": ">=7.1",
3039                 "psr/http-message": "^1.0 || ^2.0"
3040             },
3041             "type": "library",
3042             "extra": {
3043                 "branch-alias": {
3044                     "dev-master": "1.0.x-dev"
3045                 }
3046             },
3047             "autoload": {
3048                 "psr-4": {
3049                     "Psr\\Http\\Message\\": "src/"
3050                 }
3051             },
3052             "notification-url": "https://packagist.org/downloads/",
3053             "license": [
3054                 "MIT"
3055             ],
3056             "authors": [
3057                 {
3058                     "name": "PHP-FIG",
3059                     "homepage": "https://www.php-fig.org/"
3060                 }
3061             ],
3062             "description": "PSR-17: Common interfaces for PSR-7 HTTP message factories",
3063             "keywords": [
3064                 "factory",
3065                 "http",
3066                 "message",
3067                 "psr",
3068                 "psr-17",
3069                 "psr-7",
3070                 "request",
3071                 "response"
3072             ],
3073             "support": {
3074                 "source": "https://github.com/php-fig/http-factory"
3075             },
3076             "time": "2024-04-15T12:06:14+00:00"
3077         },
3078         {
3079             "name": "psr/http-message",
3080             "version": "2.0",
3081             "source": {
3082                 "type": "git",
3083                 "url": "https://github.com/php-fig/http-message.git",
3084                 "reference": "402d35bcb92c70c026d1a6a9883f06b2ead23d71"
3085             },
3086             "dist": {
3087                 "type": "zip",
3088                 "url": "https://api.github.com/repos/php-fig/http-message/zipball/402d35bcb92c70c026d1a6a9883f06b2ead23d71",
3089                 "reference": "402d35bcb92c70c026d1a6a9883f06b2ead23d71",
3090                 "shasum": ""
3091             },
3092             "require": {
3093                 "php": "^7.2 || ^8.0"
3094             },
3095             "type": "library",
3096             "extra": {
3097                 "branch-alias": {
3098                     "dev-master": "2.0.x-dev"
3099                 }
3100             },
3101             "autoload": {
3102                 "psr-4": {
3103                     "Psr\\Http\\Message\\": "src/"
3104                 }
3105             },
3106             "notification-url": "https://packagist.org/downloads/",
3107             "license": [
3108                 "MIT"
3109             ],
3110             "authors": [
3111                 {
3112                     "name": "PHP-FIG",
3113                     "homepage": "https://www.php-fig.org/"
3114                 }
3115             ],
3116             "description": "Common interface for HTTP messages",
3117             "homepage": "https://github.com/php-fig/http-message",
3118             "keywords": [
3119                 "http",
3120                 "http-message",
3121                 "psr",
3122                 "psr-7",
3123                 "request",
3124                 "response"
3125             ],
3126             "support": {
3127                 "source": "https://github.com/php-fig/http-message/tree/2.0"
3128             },
3129             "time": "2023-04-04T09:54:51+00:00"
3130         },
3131         {
3132             "name": "psr/log",
3133             "version": "3.0.2",
3134             "source": {
3135                 "type": "git",
3136                 "url": "https://github.com/php-fig/log.git",
3137                 "reference": "f16e1d5863e37f8d8c2a01719f5b34baa2b714d3"
3138             },
3139             "dist": {
3140                 "type": "zip",
3141                 "url": "https://api.github.com/repos/php-fig/log/zipball/f16e1d5863e37f8d8c2a01719f5b34baa2b714d3",
3142                 "reference": "f16e1d5863e37f8d8c2a01719f5b34baa2b714d3",
3143                 "shasum": ""
3144             },
3145             "require": {
3146                 "php": ">=8.0.0"
3147             },
3148             "type": "library",
3149             "extra": {
3150                 "branch-alias": {
3151                     "dev-master": "3.x-dev"
3152                 }
3153             },
3154             "autoload": {
3155                 "psr-4": {
3156                     "Psr\\Log\\": "src"
3157                 }
3158             },
3159             "notification-url": "https://packagist.org/downloads/",
3160             "license": [
3161                 "MIT"
3162             ],
3163             "authors": [
3164                 {
3165                     "name": "PHP-FIG",
3166                     "homepage": "https://www.php-fig.org/"
3167                 }
3168             ],
3169             "description": "Common interface for logging libraries",
3170             "homepage": "https://github.com/php-fig/log",
3171             "keywords": [
3172                 "log",
3173                 "psr",
3174                 "psr-3"
3175             ],
3176             "support": {
3177                 "source": "https://github.com/php-fig/log/tree/3.0.2"
3178             },
3179             "time": "2024-09-11T13:17:53+00:00"
3180         },
3181         {
3182             "name": "psr/simple-cache",
3183             "version": "3.0.0",
3184             "source": {
3185                 "type": "git",
3186                 "url": "https://github.com/php-fig/simple-cache.git",
3187                 "reference": "764e0b3939f5ca87cb904f570ef9be2d78a07865"
3188             },
3189             "dist": {
3190                 "type": "zip",
3191                 "url": "https://api.github.com/repos/php-fig/simple-cache/zipball/764e0b3939f5ca87cb904f570ef9be2d78a07865",
3192                 "reference": "764e0b3939f5ca87cb904f570ef9be2d78a07865",
3193                 "shasum": ""
3194             },
3195             "require": {
3196                 "php": ">=8.0.0"
3197             },
3198             "type": "library",
3199             "extra": {
3200                 "branch-alias": {
3201                     "dev-master": "3.0.x-dev"
3202                 }
3203             },
3204             "autoload": {
3205                 "psr-4": {
3206                     "Psr\\SimpleCache\\": "src/"
3207                 }
3208             },
3209             "notification-url": "https://packagist.org/downloads/",
3210             "license": [
3211                 "MIT"
3212             ],
3213             "authors": [
3214                 {
3215                     "name": "PHP-FIG",
3216                     "homepage": "https://www.php-fig.org/"
3217                 }
3218             ],
3219             "description": "Common interfaces for simple caching",
3220             "keywords": [
3221                 "cache",
3222                 "caching",
3223                 "psr",
3224                 "psr-16",
3225                 "simple-cache"
3226             ],
3227             "support": {
3228                 "source": "https://github.com/php-fig/simple-cache/tree/3.0.0"
3229             },
3230             "time": "2021-10-29T13:26:27+00:00"
3231         },
3232         {
3233             "name": "psy/psysh",
3234             "version": "v0.12.22",
3235             "source": {
3236                 "type": "git",
3237                 "url": "https://github.com/bobthecow/psysh.git",
3238                 "reference": "3be75d5b9244936dd4ac62ade2bfb004d13acf0f"
3239             },
3240             "dist": {
3241                 "type": "zip",
3242                 "url": "https://api.github.com/repos/bobthecow/psysh/zipball/3be75d5b9244936dd4ac62ade2bfb004d13acf0f",
3243                 "reference": "3be75d5b9244936dd4ac62ade2bfb004d13acf0f",
3244                 "shasum": ""
3245             },
3246             "require": {
3247                 "ext-json": "*",
3248                 "ext-tokenizer": "*",
3249                 "nikic/php-parser": "^5.0 || ^4.0",
3250                 "php": "^8.0 || ^7.4",
3251                 "symfony/console": "^8.0 || ^7.0 || ^6.0 || ^5.0 || ^4.0 || ^3.4",
3252                 "symfony/var-dumper": "^8.0 || ^7.0 || ^6.0 || ^5.0 || ^4.0 || ^3.4"
3253             },
3254             "conflict": {
3255                 "symfony/console": "4.4.37 || 5.3.14 || 5.3.15 || 5.4.3 || 5.4.4 || 6.0.3 || 6.0.4"
3256             },
3257             "require-dev": {
3258                 "bamarni/composer-bin-plugin": "^1.2",
3259                 "composer/class-map-generator": "^1.6"
3260             },
3261             "suggest": {
3262                 "composer/class-map-generator": "Improved tab completion performance with better class discovery.",
3263                 "ext-pcntl": "Enabling the PCNTL extension makes PsySH a lot happier :)",
3264                 "ext-posix": "If you have PCNTL, you'll want the POSIX extension as well."
3265             },
3266             "bin": [
3267                 "bin/psysh"
3268             ],
3269             "type": "library",
3270             "extra": {
3271                 "bamarni-bin": {
3272                     "bin-links": false,
3273                     "forward-command": false
3274                 },
3275                 "branch-alias": {
3276                     "dev-main": "0.12.x-dev"
3277                 }
3278             },
3279             "autoload": {
3280                 "files": [
3281                     "src/functions.php"
3282                 ],
3283                 "psr-4": {
3284                     "Psy\\": "src/"
3285                 }
3286             },
3287             "notification-url": "https://packagist.org/downloads/",
3288             "license": [
3289                 "MIT"
3290             ],
3291             "authors": [
3292                 {
3293                     "name": "Justin Hileman",
3294                     "email": "justin@justinhileman.info"
3295                 }
3296             ],
3297             "description": "An interactive shell for modern PHP.",
3298             "homepage": "https://psysh.org",
3299             "keywords": [
3300                 "REPL",
3301                 "console",
3302                 "interactive",
3303                 "shell"
3304             ],
3305             "support": {
3306                 "issues": "https://github.com/bobthecow/psysh/issues",
3307                 "source": "https://github.com/bobthecow/psysh/tree/v0.12.22"
3308             },
3309             "time": "2026-03-22T23:03:24+00:00"
3310         },
3311         {
3312             "name": "ralouphie/getallheaders",
3313             "version": "3.0.3",
3314             "source": {
3315                 "type": "git",
3316                 "url": "https://github.com/ralouphie/getallheaders.git",
3317                 "reference": "120b605dfeb996808c31b6477290a714d356e822"
3318             },
3319             "dist": {
3320                 "type": "zip",
3321                 "url": "https://api.github.com/repos/ralouphie/getallheaders/zipball/120b605dfeb996808c31b6477290a714d356e822",
3322                 "reference": "120b605dfeb996808c31b6477290a714d356e822",
3323                 "shasum": ""
3324             },
3325             "require": {
3326                 "php": ">=5.6"
3327             },
3328             "require-dev": {
3329                 "php-coveralls/php-coveralls": "^2.1",
3330                 "phpunit/phpunit": "^5 || ^6.5"
3331             },
3332             "type": "library",
3333             "autoload": {
3334                 "files": [
3335                     "src/getallheaders.php"
3336                 ]
3337             },
3338             "notification-url": "https://packagist.org/downloads/",
3339             "license": [
3340                 "MIT"
3341             ],
3342             "authors": [
3343                 {
3344                     "name": "Ralph Khattar",
3345                     "email": "ralph.khattar@gmail.com"
3346                 }
3347             ],
3348             "description": "A polyfill for getallheaders.",
3349             "support": {
3350                 "issues": "https://github.com/ralouphie/getallheaders/issues",
3351                 "source": "https://github.com/ralouphie/getallheaders/tree/develop"
3352             },
3353             "time": "2019-03-08T08:55:37+00:00"
3354         },
3355         {
3356             "name": "ramsey/collection",
3357             "version": "2.1.1",
3358             "source": {
3359                 "type": "git",
3360                 "url": "https://github.com/ramsey/collection.git",
3361                 "reference": "344572933ad0181accbf4ba763e85a0306a8c5e2"
3362             },
3363             "dist": {
3364                 "type": "zip",
3365                 "url": "https://api.github.com/repos/ramsey/collection/zipball/344572933ad0181accbf4ba763e85a0306a8c5e2",
3366                 "reference": "344572933ad0181accbf4ba763e85a0306a8c5e2",
3367                 "shasum": ""
3368             },
3369             "require": {
3370                 "php": "^8.1"
3371             },
3372             "require-dev": {
3373                 "captainhook/plugin-composer": "^5.3",
3374                 "ergebnis/composer-normalize": "^2.45",
3375                 "fakerphp/faker": "^1.24",
3376                 "hamcrest/hamcrest-php": "^2.0",
3377                 "jangregor/phpstan-prophecy": "^2.1",
3378                 "mockery/mockery": "^1.6",
3379                 "php-parallel-lint/php-console-highlighter": "^1.0",
3380                 "php-parallel-lint/php-parallel-lint": "^1.4",
3381                 "phpspec/prophecy-phpunit": "^2.3",
3382                 "phpstan/extension-installer": "^1.4",
3383                 "phpstan/phpstan": "^2.1",
3384                 "phpstan/phpstan-mockery": "^2.0",
3385                 "phpstan/phpstan-phpunit": "^2.0",
3386                 "phpunit/phpunit": "^10.5",
3387                 "ramsey/coding-standard": "^2.3",
3388                 "ramsey/conventional-commits": "^1.6",
3389                 "roave/security-advisories": "dev-latest"
3390             },
3391             "type": "library",
3392             "extra": {
3393                 "captainhook": {
3394                     "force-install": true
3395                 },
3396                 "ramsey/conventional-commits": {
3397                     "configFile": "conventional-commits.json"
3398                 }
3399             },
3400             "autoload": {
3401                 "psr-4": {
3402                     "Ramsey\\Collection\\": "src/"
3403                 }
3404             },
3405             "notification-url": "https://packagist.org/downloads/",
3406             "license": [
3407                 "MIT"
3408             ],
3409             "authors": [
3410                 {
3411                     "name": "Ben Ramsey",
3412                     "email": "ben@benramsey.com",
3413                     "homepage": "https://benramsey.com"
3414                 }
3415             ],
3416             "description": "A PHP library for representing and manipulating collections.",
3417             "keywords": [
3418                 "array",
3419                 "collection",
3420                 "hash",
3421                 "map",
3422                 "queue",
3423                 "set"
3424             ],
3425             "support": {
3426                 "issues": "https://github.com/ramsey/collection/issues",
3427                 "source": "https://github.com/ramsey/collection/tree/2.1.1"
3428             },
3429             "time": "2025-03-22T05:38:12+00:00"
3430         },
3431         {
3432             "name": "ramsey/uuid",
3433             "version": "4.9.2",
3434             "source": {
3435                 "type": "git",
3436                 "url": "https://github.com/ramsey/uuid.git",
3437                 "reference": "8429c78ca35a09f27565311b98101e2826affde0"
3438             },
3439             "dist": {
3440                 "type": "zip",
3441                 "url": "https://api.github.com/repos/ramsey/uuid/zipball/8429c78ca35a09f27565311b98101e2826affde0",
3442                 "reference": "8429c78ca35a09f27565311b98101e2826affde0",
3443                 "shasum": ""
3444             },
3445             "require": {
3446                 "brick/math": "^0.8.16 || ^0.9 || ^0.10 || ^0.11 || ^0.12 || ^0.13 || ^0.14",
3447                 "php": "^8.0",
3448                 "ramsey/collection": "^1.2 || ^2.0"
3449             },
3450             "replace": {
3451                 "rhumsaa/uuid": "self.version"
3452             },
3453             "require-dev": {
3454                 "captainhook/captainhook": "^5.25",
3455                 "captainhook/plugin-composer": "^5.3",
3456                 "dealerdirect/phpcodesniffer-composer-installer": "^1.0",
3457                 "ergebnis/composer-normalize": "^2.47",
3458                 "mockery/mockery": "^1.6",
3459                 "paragonie/random-lib": "^2",
3460                 "php-mock/php-mock": "^2.6",
3461                 "php-mock/php-mock-mockery": "^1.5",
3462                 "php-parallel-lint/php-parallel-lint": "^1.4.0",
3463                 "phpbench/phpbench": "^1.2.14",
3464                 "phpstan/extension-installer": "^1.4",
3465                 "phpstan/phpstan": "^2.1",
3466                 "phpstan/phpstan-mockery": "^2.0",
3467                 "phpstan/phpstan-phpunit": "^2.0",
3468                 "phpunit/phpunit": "^9.6",
3469                 "slevomat/coding-standard": "^8.18",
3470                 "squizlabs/php_codesniffer": "^3.13"
3471             },
3472             "suggest": {
3473                 "ext-bcmath": "Enables faster math with arbitrary-precision integers using BCMath.",
3474                 "ext-gmp": "Enables faster math with arbitrary-precision integers using GMP.",
3475                 "ext-uuid": "Enables the use of PeclUuidTimeGenerator and PeclUuidRandomGenerator.",
3476                 "paragonie/random-lib": "Provides RandomLib for use with the RandomLibAdapter",
3477                 "ramsey/uuid-doctrine": "Allows the use of Ramsey\\Uuid\\Uuid as Doctrine field type."
3478             },
3479             "type": "library",
3480             "extra": {
3481                 "captainhook": {
3482                     "force-install": true
3483                 }
3484             },
3485             "autoload": {
3486                 "files": [
3487                     "src/functions.php"
3488                 ],
3489                 "psr-4": {
3490                     "Ramsey\\Uuid\\": "src/"
3491                 }
3492             },
3493             "notification-url": "https://packagist.org/downloads/",
3494             "license": [
3495                 "MIT"
3496             ],
3497             "description": "A PHP library for generating and working with universally unique identifiers (UUIDs).",
3498             "keywords": [
3499                 "guid",
3500                 "identifier",
3501                 "uuid"
3502             ],
3503             "support": {
3504                 "issues": "https://github.com/ramsey/uuid/issues",
3505                 "source": "https://github.com/ramsey/uuid/tree/4.9.2"
3506             },
3507             "time": "2025-12-14T04:43:48+00:00"
3508         },
3509         {
3510             "name": "symfony/clock",
3511             "version": "v7.4.8",
3512             "source": {
3513                 "type": "git",
3514                 "url": "https://github.com/symfony/clock.git",
3515                 "reference": "674fa3b98e21531dd040e613479f5f6fa8f32111"
3516             },
3517             "dist": {
3518                 "type": "zip",
3519                 "url": "https://api.github.com/repos/symfony/clock/zipball/674fa3b98e21531dd040e613479f5f6fa8f32111",
3520                 "reference": "674fa3b98e21531dd040e613479f5f6fa8f32111",
3521                 "shasum": ""
3522             },
3523             "require": {
3524                 "php": ">=8.2",
3525                 "psr/clock": "^1.0",
3526                 "symfony/polyfill-php83": "^1.28"
3527             },
3528             "provide": {
3529                 "psr/clock-implementation": "1.0"
3530             },
3531             "type": "library",
3532             "autoload": {
3533                 "files": [
3534                     "Resources/now.php"
3535                 ],
3536                 "psr-4": {
3537                     "Symfony\\Component\\Clock\\": ""
3538                 },
3539                 "exclude-from-classmap": [
3540                     "/Tests/"
3541                 ]
3542             },
3543             "notification-url": "https://packagist.org/downloads/",
3544             "license": [
3545                 "MIT"
3546             ],
3547             "authors": [
3548                 {
3549                     "name": "Nicolas Grekas",
3550                     "email": "p@tchwork.com"
3551                 },
3552                 {
3553                     "name": "Symfony Community",
3554                     "homepage": "https://symfony.com/contributors"
3555                 }
3556             ],
3557             "description": "Decouples applications from the system clock",
3558             "homepage": "https://symfony.com",
3559             "keywords": [
3560                 "clock",
3561                 "psr20",
3562                 "time"
3563             ],
3564             "support": {
3565                 "source": "https://github.com/symfony/clock/tree/v7.4.8"
3566             },
3567             "funding": [
3568                 {
3569                     "url": "https://symfony.com/sponsor",
3570                     "type": "custom"
3571                 },
3572                 {
3573                     "url": "https://github.com/fabpot",
3574                     "type": "github"
3575                 },
3576                 {
3577                     "url": "https://github.com/nicolas-grekas",
3578                     "type": "github"
3579                 },
3580                 {
3581                     "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
3582                     "type": "tidelift"
3583                 }
3584             ],
3585             "time": "2026-03-24T13:12:05+00:00"
3586         },
3587         {
3588             "name": "symfony/console",
3589             "version": "v7.4.8",
3590             "source": {
3591                 "type": "git",
3592                 "url": "https://github.com/symfony/console.git",
3593                 "reference": "1e92e39c51f95b88e3d66fa2d9f06d1fb45dd707"
3594             },
3595             "dist": {
3596                 "type": "zip",
3597                 "url": "https://api.github.com/repos/symfony/console/zipball/1e92e39c51f95b88e3d66fa2d9f06d1fb45dd707",
3598                 "reference": "1e92e39c51f95b88e3d66fa2d9f06d1fb45dd707",
3599                 "shasum": ""
3600             },
3601             "require": {
3602                 "php": ">=8.2",
3603                 "symfony/deprecation-contracts": "^2.5|^3",
3604                 "symfony/polyfill-mbstring": "~1.0",
3605                 "symfony/service-contracts": "^2.5|^3",
3606                 "symfony/string": "^7.2|^8.0"
3607             },
3608             "conflict": {
3609                 "symfony/dependency-injection": "<6.4",
3610                 "symfony/dotenv": "<6.4",
3611                 "symfony/event-dispatcher": "<6.4",
3612                 "symfony/lock": "<6.4",
3613                 "symfony/process": "<6.4"
3614             },
3615             "provide": {
3616                 "psr/log-implementation": "1.0|2.0|3.0"
3617             },
3618             "require-dev": {
3619                 "psr/log": "^1|^2|^3",
3620                 "symfony/config": "^6.4|^7.0|^8.0",
3621                 "symfony/dependency-injection": "^6.4|^7.0|^8.0",
3622                 "symfony/event-dispatcher": "^6.4|^7.0|^8.0",
3623                 "symfony/http-foundation": "^6.4|^7.0|^8.0",
3624                 "symfony/http-kernel": "^6.4|^7.0|^8.0",
3625                 "symfony/lock": "^6.4|^7.0|^8.0",
3626                 "symfony/messenger": "^6.4|^7.0|^8.0",
3627                 "symfony/process": "^6.4|^7.0|^8.0",
3628                 "symfony/stopwatch": "^6.4|^7.0|^8.0",
3629                 "symfony/var-dumper": "^6.4|^7.0|^8.0"
3630             },
3631             "type": "library",
3632             "autoload": {
3633                 "psr-4": {
3634                     "Symfony\\Component\\Console\\": ""
3635                 },
3636                 "exclude-from-classmap": [
3637                     "/Tests/"
3638                 ]
3639             },
3640             "notification-url": "https://packagist.org/downloads/",
3641             "license": [
3642                 "MIT"
3643             ],
3644             "authors": [
3645                 {
3646                     "name": "Fabien Potencier",
3647                     "email": "fabien@symfony.com"
3648                 },
3649                 {
3650                     "name": "Symfony Community",
3651                     "homepage": "https://symfony.com/contributors"
3652                 }
3653             ],
3654             "description": "Eases the creation of beautiful and testable command line interfaces",
3655             "homepage": "https://symfony.com",
3656             "keywords": [
3657                 "cli",
3658                 "command-line",
3659                 "console",
3660                 "terminal"
3661             ],
3662             "support": {
3663                 "source": "https://github.com/symfony/console/tree/v7.4.8"
3664             },
3665             "funding": [
3666                 {
3667                     "url": "https://symfony.com/sponsor",
3668                     "type": "custom"
3669                 },
3670                 {
3671                     "url": "https://github.com/fabpot",
3672                     "type": "github"
3673                 },
3674                 {
3675                     "url": "https://github.com/nicolas-grekas",
3676                     "type": "github"
3677                 },
3678                 {
3679                     "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
3680                     "type": "tidelift"
3681                 }
3682             ],
3683             "time": "2026-03-30T13:54:39+00:00"
3684         },
3685         {
3686             "name": "symfony/css-selector",
3687             "version": "v7.4.8",
3688             "source": {
3689                 "type": "git",
3690                 "url": "https://github.com/symfony/css-selector.git",
3691                 "reference": "b055f228a4178a1d6774909903905e3475f3eac8"
3692             },
3693             "dist": {
3694                 "type": "zip",
3695                 "url": "https://api.github.com/repos/symfony/css-selector/zipball/b055f228a4178a1d6774909903905e3475f3eac8",
3696                 "reference": "b055f228a4178a1d6774909903905e3475f3eac8",
3697                 "shasum": ""
3698             },
3699             "require": {
3700                 "php": ">=8.2"
3701             },
3702             "type": "library",
3703             "autoload": {
3704                 "psr-4": {
3705                     "Symfony\\Component\\CssSelector\\": ""
3706                 },
3707                 "exclude-from-classmap": [
3708                     "/Tests/"
3709                 ]
3710             },
3711             "notification-url": "https://packagist.org/downloads/",
3712             "license": [
3713                 "MIT"
3714             ],
3715             "authors": [
3716                 {
3717                     "name": "Fabien Potencier",
3718                     "email": "fabien@symfony.com"
3719                 },
3720                 {
3721                     "name": "Jean-François Simon",
3722                     "email": "jeanfrancois.simon@sensiolabs.com"
3723                 },
3724                 {
3725                     "name": "Symfony Community",
3726                     "homepage": "https://symfony.com/contributors"
3727                 }
3728             ],
3729             "description": "Converts CSS selectors to XPath expressions",
3730             "homepage": "https://symfony.com",
3731             "support": {
3732                 "source": "https://github.com/symfony/css-selector/tree/v7.4.8"
3733             },
3734             "funding": [
3735                 {
3736                     "url": "https://symfony.com/sponsor",
3737                     "type": "custom"
3738                 },
3739                 {
3740                     "url": "https://github.com/fabpot",
3741                     "type": "github"
3742                 },
3743                 {
3744                     "url": "https://github.com/nicolas-grekas",
3745                     "type": "github"
3746                 },
3747                 {
3748                     "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
3749                     "type": "tidelift"
3750                 }
3751             ],
3752             "time": "2026-03-24T13:12:05+00:00"
3753         },
3754         {
3755             "name": "symfony/deprecation-contracts",
3756             "version": "v3.6.0",
3757             "source": {
3758                 "type": "git",
3759                 "url": "https://github.com/symfony/deprecation-contracts.git",
3760                 "reference": "63afe740e99a13ba87ec199bb07bbdee937a5b62"
3761             },
3762             "dist": {
3763                 "type": "zip",
3764                 "url": "https://api.github.com/repos/symfony/deprecation-contracts/zipball/63afe740e99a13ba87ec199bb07bbdee937a5b62",
3765                 "reference": "63afe740e99a13ba87ec199bb07bbdee937a5b62",
3766                 "shasum": ""
3767             },
3768             "require": {
3769                 "php": ">=8.1"
3770             },
3771             "type": "library",
3772             "extra": {
3773                 "thanks": {
3774                     "url": "https://github.com/symfony/contracts",
3775                     "name": "symfony/contracts"
3776                 },
3777                 "branch-alias": {
3778                     "dev-main": "3.6-dev"
3779                 }
3780             },
3781             "autoload": {
3782                 "files": [
3783                     "function.php"
3784                 ]
3785             },
3786             "notification-url": "https://packagist.org/downloads/",
3787             "license": [
3788                 "MIT"
3789             ],
3790             "authors": [
3791                 {
3792                     "name": "Nicolas Grekas",
3793                     "email": "p@tchwork.com"
3794                 },
3795                 {
3796                     "name": "Symfony Community",
3797                     "homepage": "https://symfony.com/contributors"
3798                 }
3799             ],
3800             "description": "A generic function and convention to trigger deprecation notices",
3801             "homepage": "https://symfony.com",
3802             "support": {
3803                 "source": "https://github.com/symfony/deprecation-contracts/tree/v3.6.0"
3804             },
3805             "funding": [
3806                 {
3807                     "url": "https://symfony.com/sponsor",
3808                     "type": "custom"
3809                 },
3810                 {
3811                     "url": "https://github.com/fabpot",
3812                     "type": "github"
3813                 },
3814                 {
3815                     "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
3816                     "type": "tidelift"
3817                 }
3818             ],
3819             "time": "2024-09-25T14:21:43+00:00"
3820         },
3821         {
3822             "name": "symfony/error-handler",
3823             "version": "v7.4.8",
3824             "source": {
3825                 "type": "git",
3826                 "url": "https://github.com/symfony/error-handler.git",
3827                 "reference": "8dd79d8af777ee6cba2fd4d98da6ffb839f3c0fa"
3828             },
3829             "dist": {
3830                 "type": "zip",
3831                 "url": "https://api.github.com/repos/symfony/error-handler/zipball/8dd79d8af777ee6cba2fd4d98da6ffb839f3c0fa",
3832                 "reference": "8dd79d8af777ee6cba2fd4d98da6ffb839f3c0fa",
3833                 "shasum": ""
3834             },
3835             "require": {
3836                 "php": ">=8.2",
3837                 "psr/log": "^1|^2|^3",
3838                 "symfony/polyfill-php85": "^1.32",
3839                 "symfony/var-dumper": "^6.4|^7.0|^8.0"
3840             },
3841             "conflict": {
3842                 "symfony/deprecation-contracts": "<2.5",
3843                 "symfony/http-kernel": "<6.4"
3844             },
3845             "require-dev": {
3846                 "symfony/console": "^6.4|^7.0|^8.0",
3847                 "symfony/deprecation-contracts": "^2.5|^3",
3848                 "symfony/http-kernel": "^6.4|^7.0|^8.0",
3849                 "symfony/serializer": "^6.4|^7.0|^8.0",
3850                 "symfony/webpack-encore-bundle": "^1.0|^2.0"
3851             },
3852             "bin": [
3853                 "Resources/bin/patch-type-declarations"
3854             ],
3855             "type": "library",
3856             "autoload": {
3857                 "psr-4": {
3858                     "Symfony\\Component\\ErrorHandler\\": ""
3859                 },
3860                 "exclude-from-classmap": [
3861                     "/Tests/"
3862                 ]
3863             },
3864             "notification-url": "https://packagist.org/downloads/",
3865             "license": [
3866                 "MIT"
3867             ],
3868             "authors": [
3869                 {
3870                     "name": "Fabien Potencier",
3871                     "email": "fabien@symfony.com"
3872                 },
3873                 {
3874                     "name": "Symfony Community",
3875                     "homepage": "https://symfony.com/contributors"
3876                 }
3877             ],
3878             "description": "Provides tools to manage errors and ease debugging PHP code",
3879             "homepage": "https://symfony.com",
3880             "support": {
3881                 "source": "https://github.com/symfony/error-handler/tree/v7.4.8"
3882             },
3883             "funding": [
3884                 {
3885                     "url": "https://symfony.com/sponsor",
3886                     "type": "custom"
3887                 },
3888                 {
3889                     "url": "https://github.com/fabpot",
3890                     "type": "github"
3891                 },
3892                 {
3893                     "url": "https://github.com/nicolas-grekas",
3894                     "type": "github"
3895                 },
3896                 {
3897                     "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
3898                     "type": "tidelift"
3899                 }
3900             ],
3901             "time": "2026-03-24T13:12:05+00:00"
3902         },
3903         {
3904             "name": "symfony/event-dispatcher",
3905             "version": "v7.4.8",
3906             "source": {
3907                 "type": "git",
3908                 "url": "https://github.com/symfony/event-dispatcher.git",
3909                 "reference": "f57b899fa736fd71121168ef268f23c206083f0a"
3910             },
3911             "dist": {
3912                 "type": "zip",
3913                 "url": "https://api.github.com/repos/symfony/event-dispatcher/zipball/f57b899fa736fd71121168ef268f23c206083f0a",
3914                 "reference": "f57b899fa736fd71121168ef268f23c206083f0a",
3915                 "shasum": ""
3916             },
3917             "require": {
3918                 "php": ">=8.2",
3919                 "symfony/event-dispatcher-contracts": "^2.5|^3"
3920             },
3921             "conflict": {
3922                 "symfony/dependency-injection": "<6.4",
3923                 "symfony/service-contracts": "<2.5"
3924             },
3925             "provide": {
3926                 "psr/event-dispatcher-implementation": "1.0",
3927                 "symfony/event-dispatcher-implementation": "2.0|3.0"
3928             },
3929             "require-dev": {
3930                 "psr/log": "^1|^2|^3",
3931                 "symfony/config": "^6.4|^7.0|^8.0",
3932                 "symfony/dependency-injection": "^6.4|^7.0|^8.0",
3933                 "symfony/error-handler": "^6.4|^7.0|^8.0",
3934                 "symfony/expression-language": "^6.4|^7.0|^8.0",
3935                 "symfony/framework-bundle": "^6.4|^7.0|^8.0",
3936                 "symfony/http-foundation": "^6.4|^7.0|^8.0",
3937                 "symfony/service-contracts": "^2.5|^3",
3938                 "symfony/stopwatch": "^6.4|^7.0|^8.0"
3939             },
3940             "type": "library",
3941             "autoload": {
3942                 "psr-4": {
3943                     "Symfony\\Component\\EventDispatcher\\": ""
3944                 },
3945                 "exclude-from-classmap": [
3946                     "/Tests/"
3947                 ]
3948             },
3949             "notification-url": "https://packagist.org/downloads/",
3950             "license": [
3951                 "MIT"
3952             ],
3953             "authors": [
3954                 {
3955                     "name": "Fabien Potencier",
3956                     "email": "fabien@symfony.com"
3957                 },
3958                 {
3959                     "name": "Symfony Community",
3960                     "homepage": "https://symfony.com/contributors"
3961                 }
3962             ],
3963             "description": "Provides tools that allow your application components to communicate with each other by dispatching events and listening to them",
3964             "homepage": "https://symfony.com",
3965             "support": {
3966                 "source": "https://github.com/symfony/event-dispatcher/tree/v7.4.8"
3967             },
3968             "funding": [
3969                 {
3970                     "url": "https://symfony.com/sponsor",
3971                     "type": "custom"
3972                 },
3973                 {
3974                     "url": "https://github.com/fabpot",
3975                     "type": "github"
3976                 },
3977                 {
3978                     "url": "https://github.com/nicolas-grekas",
3979                     "type": "github"
3980                 },
3981                 {
3982                     "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
3983                     "type": "tidelift"
3984                 }
3985             ],
3986             "time": "2026-03-30T13:54:39+00:00"
3987         },
3988         {
3989             "name": "symfony/event-dispatcher-contracts",
3990             "version": "v3.6.0",
3991             "source": {
3992                 "type": "git",
3993                 "url": "https://github.com/symfony/event-dispatcher-contracts.git",
3994                 "reference": "59eb412e93815df44f05f342958efa9f46b1e586"
3995             },
3996             "dist": {
3997                 "type": "zip",
3998                 "url": "https://api.github.com/repos/symfony/event-dispatcher-contracts/zipball/59eb412e93815df44f05f342958efa9f46b1e586",
3999                 "reference": "59eb412e93815df44f05f342958efa9f46b1e586",
4000                 "shasum": ""
4001             },
4002             "require": {
4003                 "php": ">=8.1",
4004                 "psr/event-dispatcher": "^1"
4005             },
4006             "type": "library",
4007             "extra": {
4008                 "thanks": {
4009                     "url": "https://github.com/symfony/contracts",
4010                     "name": "symfony/contracts"
4011                 },
4012                 "branch-alias": {
4013                     "dev-main": "3.6-dev"
4014                 }
4015             },
4016             "autoload": {
4017                 "psr-4": {
4018                     "Symfony\\Contracts\\EventDispatcher\\": ""
4019                 }
4020             },
4021             "notification-url": "https://packagist.org/downloads/",
4022             "license": [
4023                 "MIT"
4024             ],
4025             "authors": [
4026                 {
4027                     "name": "Nicolas Grekas",
4028                     "email": "p@tchwork.com"
4029                 },
4030                 {
4031                     "name": "Symfony Community",
4032                     "homepage": "https://symfony.com/contributors"
4033                 }
4034             ],
4035             "description": "Generic abstractions related to dispatching event",
4036             "homepage": "https://symfony.com",
4037             "keywords": [
4038                 "abstractions",
4039                 "contracts",
4040                 "decoupling",
4041                 "interfaces",
4042                 "interoperability",
4043                 "standards"
4044             ],
4045             "support": {
4046                 "source": "https://github.com/symfony/event-dispatcher-contracts/tree/v3.6.0"
4047             },
4048             "funding": [
4049                 {
4050                     "url": "https://symfony.com/sponsor",
4051                     "type": "custom"
4052                 },
4053                 {
4054                     "url": "https://github.com/fabpot",
4055                     "type": "github"
4056                 },
4057                 {
4058                     "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
4059                     "type": "tidelift"
4060                 }
4061             ],
4062             "time": "2024-09-25T14:21:43+00:00"
4063         },
4064         {
4065             "name": "symfony/finder",
4066             "version": "v7.4.8",
4067             "source": {
4068                 "type": "git",
4069                 "url": "https://github.com/symfony/finder.git",
4070                 "reference": "e0be088d22278583a82da281886e8c3592fbf149"
4071             },
4072             "dist": {
4073                 "type": "zip",
4074                 "url": "https://api.github.com/repos/symfony/finder/zipball/e0be088d22278583a82da281886e8c3592fbf149",
4075                 "reference": "e0be088d22278583a82da281886e8c3592fbf149",
4076                 "shasum": ""
4077             },
4078             "require": {
4079                 "php": ">=8.2"
4080             },
4081             "require-dev": {
4082                 "symfony/filesystem": "^6.4|^7.0|^8.0"
4083             },
4084             "type": "library",
4085             "autoload": {
4086                 "psr-4": {
4087                     "Symfony\\Component\\Finder\\": ""
4088                 },
4089                 "exclude-from-classmap": [
4090                     "/Tests/"
4091                 ]
4092             },
4093             "notification-url": "https://packagist.org/downloads/",
4094             "license": [
4095                 "MIT"
4096             ],
4097             "authors": [
4098                 {
4099                     "name": "Fabien Potencier",
4100                     "email": "fabien@symfony.com"
4101                 },
4102                 {
4103                     "name": "Symfony Community",
4104                     "homepage": "https://symfony.com/contributors"
4105                 }
4106             ],
4107             "description": "Finds files and directories via an intuitive fluent interface",
4108             "homepage": "https://symfony.com",
4109             "support": {
4110                 "source": "https://github.com/symfony/finder/tree/v7.4.8"
4111             },
4112             "funding": [
4113                 {
4114                     "url": "https://symfony.com/sponsor",
4115                     "type": "custom"
4116                 },
4117                 {
4118                     "url": "https://github.com/fabpot",
4119                     "type": "github"
4120                 },
4121                 {
4122                     "url": "https://github.com/nicolas-grekas",
4123                     "type": "github"
4124                 },
4125                 {
4126                     "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
4127                     "type": "tidelift"
4128                 }
4129             ],
4130             "time": "2026-03-24T13:12:05+00:00"
4131         },
4132         {
4133             "name": "symfony/http-foundation",
4134             "version": "v7.4.8",
4135             "source": {
4136                 "type": "git",
4137                 "url": "https://github.com/symfony/http-foundation.git",
4138                 "reference": "9381209597ec66c25be154cbf2289076e64d1eab"
4139             },
4140             "dist": {
4141                 "type": "zip",
4142                 "url": "https://api.github.com/repos/symfony/http-foundation/zipball/9381209597ec66c25be154cbf2289076e64d1eab",
4143                 "reference": "9381209597ec66c25be154cbf2289076e64d1eab",
4144                 "shasum": ""
4145             },
4146             "require": {
4147                 "php": ">=8.2",
4148                 "symfony/deprecation-contracts": "^2.5|^3",
4149                 "symfony/polyfill-mbstring": "^1.1"
4150             },
4151             "conflict": {
4152                 "doctrine/dbal": "<3.6",
4153                 "symfony/cache": "<6.4.12|>=7.0,<7.1.5"
4154             },
4155             "require-dev": {
4156                 "doctrine/dbal": "^3.6|^4",
4157                 "predis/predis": "^1.1|^2.0",
4158                 "symfony/cache": "^6.4.12|^7.1.5|^8.0",
4159                 "symfony/clock": "^6.4|^7.0|^8.0",
4160                 "symfony/dependency-injection": "^6.4|^7.0|^8.0",
4161                 "symfony/expression-language": "^6.4|^7.0|^8.0",
4162                 "symfony/http-kernel": "^6.4|^7.0|^8.0",
4163                 "symfony/mime": "^6.4|^7.0|^8.0",
4164                 "symfony/rate-limiter": "^6.4|^7.0|^8.0"
4165             },
4166             "type": "library",
4167             "autoload": {
4168                 "psr-4": {
4169                     "Symfony\\Component\\HttpFoundation\\": ""
4170                 },
4171                 "exclude-from-classmap": [
4172                     "/Tests/"
4173                 ]
4174             },
4175             "notification-url": "https://packagist.org/downloads/",
4176             "license": [
4177                 "MIT"
4178             ],
4179             "authors": [
4180                 {
4181                     "name": "Fabien Potencier",
4182                     "email": "fabien@symfony.com"
4183                 },
4184                 {
4185                     "name": "Symfony Community",
4186                     "homepage": "https://symfony.com/contributors"
4187                 }
4188             ],
4189             "description": "Defines an object-oriented layer for the HTTP specification",
4190             "homepage": "https://symfony.com",
4191             "support": {
4192                 "source": "https://github.com/symfony/http-foundation/tree/v7.4.8"
4193             },
4194             "funding": [
4195                 {
4196                     "url": "https://symfony.com/sponsor",
4197                     "type": "custom"
4198                 },
4199                 {
4200                     "url": "https://github.com/fabpot",
4201                     "type": "github"
4202                 },
4203                 {
4204                     "url": "https://github.com/nicolas-grekas",
4205                     "type": "github"
4206                 },
4207                 {
4208                     "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
4209                     "type": "tidelift"
4210                 }
4211             ],
4212             "time": "2026-03-24T13:12:05+00:00"
4213         },
4214         {
4215             "name": "symfony/http-kernel",
4216             "version": "v7.4.8",
4217             "source": {
4218                 "type": "git",
4219                 "url": "https://github.com/symfony/http-kernel.git",
4220                 "reference": "017e76ad089bac281553389269e259e155935e1a"
4221             },
4222             "dist": {
4223                 "type": "zip",
4224                 "url": "https://api.github.com/repos/symfony/http-kernel/zipball/017e76ad089bac281553389269e259e155935e1a",
4225                 "reference": "017e76ad089bac281553389269e259e155935e1a",
4226                 "shasum": ""
4227             },
4228             "require": {
4229                 "php": ">=8.2",
4230                 "psr/log": "^1|^2|^3",
4231                 "symfony/deprecation-contracts": "^2.5|^3",
4232                 "symfony/error-handler": "^6.4|^7.0|^8.0",
4233                 "symfony/event-dispatcher": "^7.3|^8.0",
4234                 "symfony/http-foundation": "^7.4|^8.0",
4235                 "symfony/polyfill-ctype": "^1.8"
4236             },
4237             "conflict": {
4238                 "symfony/browser-kit": "<6.4",
4239                 "symfony/cache": "<6.4",
4240                 "symfony/config": "<6.4",
4241                 "symfony/console": "<6.4",
4242                 "symfony/dependency-injection": "<6.4",
4243                 "symfony/doctrine-bridge": "<6.4",
4244                 "symfony/flex": "<2.10",
4245                 "symfony/form": "<6.4",
4246                 "symfony/http-client": "<6.4",
4247                 "symfony/http-client-contracts": "<2.5",
4248                 "symfony/mailer": "<6.4",
4249                 "symfony/messenger": "<6.4",
4250                 "symfony/translation": "<6.4",
4251                 "symfony/translation-contracts": "<2.5",
4252                 "symfony/twig-bridge": "<6.4",
4253                 "symfony/validator": "<6.4",
4254                 "symfony/var-dumper": "<6.4",
4255                 "twig/twig": "<3.12"
4256             },
4257             "provide": {
4258                 "psr/log-implementation": "1.0|2.0|3.0"
4259             },
4260             "require-dev": {
4261                 "psr/cache": "^1.0|^2.0|^3.0",
4262                 "symfony/browser-kit": "^6.4|^7.0|^8.0",
4263                 "symfony/clock": "^6.4|^7.0|^8.0",
4264                 "symfony/config": "^6.4|^7.0|^8.0",
4265                 "symfony/console": "^6.4|^7.0|^8.0",
4266                 "symfony/css-selector": "^6.4|^7.0|^8.0",
4267                 "symfony/dependency-injection": "^6.4.1|^7.0.1|^8.0",
4268                 "symfony/dom-crawler": "^6.4|^7.0|^8.0",
4269                 "symfony/expression-language": "^6.4|^7.0|^8.0",
4270                 "symfony/finder": "^6.4|^7.0|^8.0",
4271                 "symfony/http-client-contracts": "^2.5|^3",
4272                 "symfony/process": "^6.4|^7.0|^8.0",
4273                 "symfony/property-access": "^7.1|^8.0",
4274                 "symfony/routing": "^6.4|^7.0|^8.0",
4275                 "symfony/serializer": "^7.1|^8.0",
4276                 "symfony/stopwatch": "^6.4|^7.0|^8.0",
4277                 "symfony/translation": "^6.4|^7.0|^8.0",
4278                 "symfony/translation-contracts": "^2.5|^3",
4279                 "symfony/uid": "^6.4|^7.0|^8.0",
4280                 "symfony/validator": "^6.4|^7.0|^8.0",
4281                 "symfony/var-dumper": "^6.4|^7.0|^8.0",
4282                 "symfony/var-exporter": "^6.4|^7.0|^8.0",
4283                 "twig/twig": "^3.12"
4284             },
4285             "type": "library",
4286             "autoload": {
4287                 "psr-4": {
4288                     "Symfony\\Component\\HttpKernel\\": ""
4289                 },
4290                 "exclude-from-classmap": [
4291                     "/Tests/"
4292                 ]
4293             },
4294             "notification-url": "https://packagist.org/downloads/",
4295             "license": [
4296                 "MIT"
4297             ],
4298             "authors": [
4299                 {
4300                     "name": "Fabien Potencier",
4301                     "email": "fabien@symfony.com"
4302                 },
4303                 {
4304                     "name": "Symfony Community",
4305                     "homepage": "https://symfony.com/contributors"
4306                 }
4307             ],
4308             "description": "Provides a structured process for converting a Request into a Response",
4309             "homepage": "https://symfony.com",
4310             "support": {
4311                 "source": "https://github.com/symfony/http-kernel/tree/v7.4.8"
4312             },
4313             "funding": [
4314                 {
4315                     "url": "https://symfony.com/sponsor",
4316                     "type": "custom"
4317                 },
4318                 {
4319                     "url": "https://github.com/fabpot",
4320                     "type": "github"
4321                 },
4322                 {
4323                     "url": "https://github.com/nicolas-grekas",
4324                     "type": "github"
4325                 },
4326                 {
4327                     "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
4328                     "type": "tidelift"
4329                 }
4330             ],
4331             "time": "2026-03-31T20:57:01+00:00"
4332         },
4333         {
4334             "name": "symfony/mailer",
4335             "version": "v7.4.8",
4336             "source": {
4337                 "type": "git",
4338                 "url": "https://github.com/symfony/mailer.git",
4339                 "reference": "f6ea532250b476bfc1b56699b388a1bdbf168f62"
4340             },
4341             "dist": {
4342                 "type": "zip",
4343                 "url": "https://api.github.com/repos/symfony/mailer/zipball/f6ea532250b476bfc1b56699b388a1bdbf168f62",
4344                 "reference": "f6ea532250b476bfc1b56699b388a1bdbf168f62",
4345                 "shasum": ""
4346             },
4347             "require": {
4348                 "egulias/email-validator": "^2.1.10|^3|^4",
4349                 "php": ">=8.2",
4350                 "psr/event-dispatcher": "^1",
4351                 "psr/log": "^1|^2|^3",
4352                 "symfony/event-dispatcher": "^6.4|^7.0|^8.0",
4353                 "symfony/mime": "^7.2|^8.0",
4354                 "symfony/service-contracts": "^2.5|^3"
4355             },
4356             "conflict": {
4357                 "symfony/http-client-contracts": "<2.5",
4358                 "symfony/http-kernel": "<6.4",
4359                 "symfony/messenger": "<6.4",
4360                 "symfony/mime": "<6.4",
4361                 "symfony/twig-bridge": "<6.4"
4362             },
4363             "require-dev": {
4364                 "symfony/console": "^6.4|^7.0|^8.0",
4365                 "symfony/http-client": "^6.4|^7.0|^8.0",
4366                 "symfony/messenger": "^6.4|^7.0|^8.0",
4367                 "symfony/twig-bridge": "^6.4|^7.0|^8.0"
4368             },
4369             "type": "library",
4370             "autoload": {
4371                 "psr-4": {
4372                     "Symfony\\Component\\Mailer\\": ""
4373                 },
4374                 "exclude-from-classmap": [
4375                     "/Tests/"
4376                 ]
4377             },
4378             "notification-url": "https://packagist.org/downloads/",
4379             "license": [
4380                 "MIT"
4381             ],
4382             "authors": [
4383                 {
4384                     "name": "Fabien Potencier",
4385                     "email": "fabien@symfony.com"
4386                 },
4387                 {
4388                     "name": "Symfony Community",
4389                     "homepage": "https://symfony.com/contributors"
4390                 }
4391             ],
4392             "description": "Helps sending emails",
4393             "homepage": "https://symfony.com",
4394             "support": {
4395                 "source": "https://github.com/symfony/mailer/tree/v7.4.8"
4396             },
4397             "funding": [
4398                 {
4399                     "url": "https://symfony.com/sponsor",
4400                     "type": "custom"
4401                 },
4402                 {
4403                     "url": "https://github.com/fabpot",
4404                     "type": "github"
4405                 },
4406                 {
4407                     "url": "https://github.com/nicolas-grekas",
4408                     "type": "github"
4409                 },
4410                 {
4411                     "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
4412                     "type": "tidelift"
4413                 }
4414             ],
4415             "time": "2026-03-24T13:12:05+00:00"
4416         },
4417         {
4418             "name": "symfony/mime",
4419             "version": "v7.4.8",
4420             "source": {
4421                 "type": "git",
4422                 "url": "https://github.com/symfony/mime.git",
4423                 "reference": "6df02f99998081032da3407a8d6c4e1dcb5d4379"
4424             },
4425             "dist": {
4426                 "type": "zip",
4427                 "url": "https://api.github.com/repos/symfony/mime/zipball/6df02f99998081032da3407a8d6c4e1dcb5d4379",
4428                 "reference": "6df02f99998081032da3407a8d6c4e1dcb5d4379",
4429                 "shasum": ""
4430             },
4431             "require": {
4432                 "php": ">=8.2",
4433                 "symfony/deprecation-contracts": "^2.5|^3",
4434                 "symfony/polyfill-intl-idn": "^1.10",
4435                 "symfony/polyfill-mbstring": "^1.0"
4436             },
4437             "conflict": {
4438                 "egulias/email-validator": "~3.0.0",
4439                 "phpdocumentor/reflection-docblock": "<5.2|>=7",
4440                 "phpdocumentor/type-resolver": "<1.5.1",
4441                 "symfony/mailer": "<6.4",
4442                 "symfony/serializer": "<6.4.3|>7.0,<7.0.3"
4443             },
4444             "require-dev": {
4445                 "egulias/email-validator": "^2.1.10|^3.1|^4",
4446                 "league/html-to-markdown": "^5.0",
4447                 "phpdocumentor/reflection-docblock": "^5.2|^6.0",
4448                 "symfony/dependency-injection": "^6.4|^7.0|^8.0",
4449                 "symfony/process": "^6.4|^7.0|^8.0",
4450                 "symfony/property-access": "^6.4|^7.0|^8.0",
4451                 "symfony/property-info": "^6.4|^7.0|^8.0",
4452                 "symfony/serializer": "^6.4.3|^7.0.3|^8.0"
4453             },
4454             "type": "library",
4455             "autoload": {
4456                 "psr-4": {
4457                     "Symfony\\Component\\Mime\\": ""
4458                 },
4459                 "exclude-from-classmap": [
4460                     "/Tests/"
4461                 ]
4462             },
4463             "notification-url": "https://packagist.org/downloads/",
4464             "license": [
4465                 "MIT"
4466             ],
4467             "authors": [
4468                 {
4469                     "name": "Fabien Potencier",
4470                     "email": "fabien@symfony.com"
4471                 },
4472                 {
4473                     "name": "Symfony Community",
4474                     "homepage": "https://symfony.com/contributors"
4475                 }
4476             ],
4477             "description": "Allows manipulating MIME messages",
4478             "homepage": "https://symfony.com",
4479             "keywords": [
4480                 "mime",
4481                 "mime-type"
4482             ],
4483             "support": {
4484                 "source": "https://github.com/symfony/mime/tree/v7.4.8"
4485             },
4486             "funding": [
4487                 {
4488                     "url": "https://symfony.com/sponsor",
4489                     "type": "custom"
4490                 },
4491                 {
4492                     "url": "https://github.com/fabpot",
4493                     "type": "github"
4494                 },
4495                 {
4496                     "url": "https://github.com/nicolas-grekas",
4497                     "type": "github"
4498                 },
4499                 {
4500                     "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
4501                     "type": "tidelift"
4502                 }
4503             ],
4504             "time": "2026-03-30T14:11:46+00:00"
4505         },
4506         {
4507             "name": "symfony/polyfill-ctype",
4508             "version": "v1.37.0",
4509             "source": {
4510                 "type": "git",
4511                 "url": "https://github.com/symfony/polyfill-ctype.git",
4512                 "reference": "141046a8f9477948ff284fa65be2095baafb94f2"
4513             },
4514             "dist": {
4515                 "type": "zip",
4516                 "url": "https://api.github.com/repos/symfony/polyfill-ctype/zipball/141046a8f9477948ff284fa65be2095baafb94f2",
4517                 "reference": "141046a8f9477948ff284fa65be2095baafb94f2",
4518                 "shasum": ""
4519             },
4520             "require": {
4521                 "php": ">=7.2"
4522             },
4523             "provide": {
4524                 "ext-ctype": "*"
4525             },
4526             "suggest": {
4527                 "ext-ctype": "For best performance"
4528             },
4529             "type": "library",
4530             "extra": {
4531                 "thanks": {
4532                     "url": "https://github.com/symfony/polyfill",
4533                     "name": "symfony/polyfill"
4534                 }
4535             },
4536             "autoload": {
4537                 "files": [
4538                     "bootstrap.php"
4539                 ],
4540                 "psr-4": {
4541                     "Symfony\\Polyfill\\Ctype\\": ""
4542                 }
4543             },
4544             "notification-url": "https://packagist.org/downloads/",
4545             "license": [
4546                 "MIT"
4547             ],
4548             "authors": [
4549                 {
4550                     "name": "Gert de Pagter",
4551                     "email": "BackEndTea@gmail.com"
4552                 },
4553                 {
4554                     "name": "Symfony Community",
4555                     "homepage": "https://symfony.com/contributors"
4556                 }
4557             ],
4558             "description": "Symfony polyfill for ctype functions",
4559             "homepage": "https://symfony.com",
4560             "keywords": [
4561                 "compatibility",
4562                 "ctype",
4563                 "polyfill",
4564                 "portable"
4565             ],
4566             "support": {
4567                 "source": "https://github.com/symfony/polyfill-ctype/tree/v1.37.0"
4568             },
4569             "funding": [
4570                 {
4571                     "url": "https://symfony.com/sponsor",
4572                     "type": "custom"
4573                 },
4574                 {
4575                     "url": "https://github.com/fabpot",
4576                     "type": "github"
4577                 },
4578                 {
4579                     "url": "https://github.com/nicolas-grekas",
4580                     "type": "github"
4581                 },
4582                 {
4583                     "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
4584                     "type": "tidelift"
4585                 }
4586             ],
4587             "time": "2026-04-10T16:19:22+00:00"
4588         },
4589         {
4590             "name": "symfony/polyfill-intl-grapheme",
4591             "version": "v1.37.0",
4592             "source": {
4593                 "type": "git",
4594                 "url": "https://github.com/symfony/polyfill-intl-grapheme.git",
4595                 "reference": "4864388bfbd3001ce88e234fab652acd91fdc57e"
4596             },
4597             "dist": {
4598                 "type": "zip",
4599                 "url": "https://api.github.com/repos/symfony/polyfill-intl-grapheme/zipball/4864388bfbd3001ce88e234fab652acd91fdc57e",
4600                 "reference": "4864388bfbd3001ce88e234fab652acd91fdc57e",
4601                 "shasum": ""
4602             },
4603             "require": {
4604                 "php": ">=7.2"
4605             },
4606             "suggest": {
4607                 "ext-intl": "For best performance"
4608             },
4609             "type": "library",
4610             "extra": {
4611                 "thanks": {
4612                     "url": "https://github.com/symfony/polyfill",
4613                     "name": "symfony/polyfill"
4614                 }
4615             },
4616             "autoload": {
4617                 "files": [
4618                     "bootstrap.php"
4619                 ],
4620                 "psr-4": {
4621                     "Symfony\\Polyfill\\Intl\\Grapheme\\": ""
4622                 }
4623             },
4624             "notification-url": "https://packagist.org/downloads/",
4625             "license": [
4626                 "MIT"
4627             ],
4628             "authors": [
4629                 {
4630                     "name": "Nicolas Grekas",
4631                     "email": "p@tchwork.com"
4632                 },
4633                 {
4634                     "name": "Symfony Community",
4635                     "homepage": "https://symfony.com/contributors"
4636                 }
4637             ],
4638             "description": "Symfony polyfill for intl's grapheme_* functions",
4639             "homepage": "https://symfony.com",
4640             "keywords": [
4641                 "compatibility",
4642                 "grapheme",
4643                 "intl",
4644                 "polyfill",
4645                 "portable",
4646                 "shim"
4647             ],
4648             "support": {
4649                 "source": "https://github.com/symfony/polyfill-intl-grapheme/tree/v1.37.0"
4650             },
4651             "funding": [
4652                 {
4653                     "url": "https://symfony.com/sponsor",
4654                     "type": "custom"
4655                 },
4656                 {
4657                     "url": "https://github.com/fabpot",
4658                     "type": "github"
4659                 },
4660                 {
4661                     "url": "https://github.com/nicolas-grekas",
4662                     "type": "github"
4663                 },
4664                 {
4665                     "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
4666                     "type": "tidelift"
4667                 }
4668             ],
4669             "time": "2026-04-26T13:13:48+00:00"
4670         },
4671         {
4672             "name": "symfony/polyfill-intl-idn",
4673             "version": "v1.37.0",
4674             "source": {
4675                 "type": "git",
4676                 "url": "https://github.com/symfony/polyfill-intl-idn.git",
4677                 "reference": "9614ac4d8061dc257ecc64cba1b140873dce8ad3"
4678             },
4679             "dist": {
4680                 "type": "zip",
4681                 "url": "https://api.github.com/repos/symfony/polyfill-intl-idn/zipball/9614ac4d8061dc257ecc64cba1b140873dce8ad3",
4682                 "reference": "9614ac4d8061dc257ecc64cba1b140873dce8ad3",
4683                 "shasum": ""
4684             },
4685             "require": {
4686                 "php": ">=7.2",
4687                 "symfony/polyfill-intl-normalizer": "^1.10"
4688             },
4689             "suggest": {
4690                 "ext-intl": "For best performance"
4691             },
4692             "type": "library",
4693             "extra": {
4694                 "thanks": {
4695                     "url": "https://github.com/symfony/polyfill",
4696                     "name": "symfony/polyfill"
4697                 }
4698             },
4699             "autoload": {
4700                 "files": [
4701                     "bootstrap.php"
4702                 ],
4703                 "psr-4": {
4704                     "Symfony\\Polyfill\\Intl\\Idn\\": ""
4705                 }
4706             },
4707             "notification-url": "https://packagist.org/downloads/",
4708             "license": [
4709                 "MIT"
4710             ],
4711             "authors": [
4712                 {
4713                     "name": "Laurent Bassin",
4714                     "email": "laurent@bassin.info"
4715                 },
4716                 {
4717                     "name": "Trevor Rowbotham",
4718                     "email": "trevor.rowbotham@pm.me"
4719                 },
4720                 {
4721                     "name": "Symfony Community",
4722                     "homepage": "https://symfony.com/contributors"
4723                 }
4724             ],
4725             "description": "Symfony polyfill for intl's idn_to_ascii and idn_to_utf8 functions",
4726             "homepage": "https://symfony.com",
4727             "keywords": [
4728                 "compatibility",
4729                 "idn",
4730                 "intl",
4731                 "polyfill",
4732                 "portable",
4733                 "shim"
4734             ],
4735             "support": {
4736                 "source": "https://github.com/symfony/polyfill-intl-idn/tree/v1.37.0"
4737             },
4738             "funding": [
4739                 {
4740                     "url": "https://symfony.com/sponsor",
4741                     "type": "custom"
4742                 },
4743                 {
4744                     "url": "https://github.com/fabpot",
4745                     "type": "github"
4746                 },
4747                 {
4748                     "url": "https://github.com/nicolas-grekas",
4749                     "type": "github"
4750                 },
4751                 {
4752                     "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
4753                     "type": "tidelift"
4754                 }
4755             ],
4756             "time": "2024-09-10T14:38:51+00:00"
4757         },
4758         {
4759             "name": "symfony/polyfill-intl-normalizer",
4760             "version": "v1.37.0",
4761             "source": {
4762                 "type": "git",
4763                 "url": "https://github.com/symfony/polyfill-intl-normalizer.git",
4764                 "reference": "3833d7255cc303546435cb650316bff708a1c75c"
4765             },
4766             "dist": {
4767                 "type": "zip",
4768                 "url": "https://api.github.com/repos/symfony/polyfill-intl-normalizer/zipball/3833d7255cc303546435cb650316bff708a1c75c",
4769                 "reference": "3833d7255cc303546435cb650316bff708a1c75c",
4770                 "shasum": ""
4771             },
4772             "require": {
4773                 "php": ">=7.2"
4774             },
4775             "suggest": {
4776                 "ext-intl": "For best performance"
4777             },
4778             "type": "library",
4779             "extra": {
4780                 "thanks": {
4781                     "url": "https://github.com/symfony/polyfill",
4782                     "name": "symfony/polyfill"
4783                 }
4784             },
4785             "autoload": {
4786                 "files": [
4787                     "bootstrap.php"
4788                 ],
4789                 "psr-4": {
4790                     "Symfony\\Polyfill\\Intl\\Normalizer\\": ""
4791                 },
4792                 "classmap": [
4793                     "Resources/stubs"
4794                 ]
4795             },
4796             "notification-url": "https://packagist.org/downloads/",
4797             "license": [
4798                 "MIT"
4799             ],
4800             "authors": [
4801                 {
4802                     "name": "Nicolas Grekas",
4803                     "email": "p@tchwork.com"
4804                 },
4805                 {
4806                     "name": "Symfony Community",
4807                     "homepage": "https://symfony.com/contributors"
4808                 }
4809             ],
4810             "description": "Symfony polyfill for intl's Normalizer class and related functions",
4811             "homepage": "https://symfony.com",
4812             "keywords": [
4813                 "compatibility",
4814                 "intl",
4815                 "normalizer",
4816                 "polyfill",
4817                 "portable",
4818                 "shim"
4819             ],
4820             "support": {
4821                 "source": "https://github.com/symfony/polyfill-intl-normalizer/tree/v1.37.0"
4822             },
4823             "funding": [
4824                 {
4825                     "url": "https://symfony.com/sponsor",
4826                     "type": "custom"
4827                 },
4828                 {
4829                     "url": "https://github.com/fabpot",
4830                     "type": "github"
4831                 },
4832                 {
4833                     "url": "https://github.com/nicolas-grekas",
4834                     "type": "github"
4835                 },
4836                 {
4837                     "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
4838                     "type": "tidelift"
4839                 }
4840             ],
4841             "time": "2024-09-09T11:45:10+00:00"
4842         },
4843         {
4844             "name": "symfony/polyfill-mbstring",
4845             "version": "v1.37.0",
4846             "source": {
4847                 "type": "git",
4848                 "url": "https://github.com/symfony/polyfill-mbstring.git",
4849                 "reference": "6a21eb99c6973357967f6ce3708cd55a6bec6315"
4850             },
4851             "dist": {
4852                 "type": "zip",
4853                 "url": "https://api.github.com/repos/symfony/polyfill-mbstring/zipball/6a21eb99c6973357967f6ce3708cd55a6bec6315",
4854                 "reference": "6a21eb99c6973357967f6ce3708cd55a6bec6315",
4855                 "shasum": ""
4856             },
4857             "require": {
4858                 "ext-iconv": "*",
4859                 "php": ">=7.2"
4860             },
4861             "provide": {
4862                 "ext-mbstring": "*"
4863             },
4864             "suggest": {
4865                 "ext-mbstring": "For best performance"
4866             },
4867             "type": "library",
4868             "extra": {
4869                 "thanks": {
4870                     "url": "https://github.com/symfony/polyfill",
4871                     "name": "symfony/polyfill"
4872                 }
4873             },
4874             "autoload": {
4875                 "files": [
4876                     "bootstrap.php"
4877                 ],
4878                 "psr-4": {
4879                     "Symfony\\Polyfill\\Mbstring\\": ""
4880                 }
4881             },
4882             "notification-url": "https://packagist.org/downloads/",
4883             "license": [
4884                 "MIT"
4885             ],
4886             "authors": [
4887                 {
4888                     "name": "Nicolas Grekas",
4889                     "email": "p@tchwork.com"
4890                 },
4891                 {
4892                     "name": "Symfony Community",
4893                     "homepage": "https://symfony.com/contributors"
4894                 }
4895             ],
4896             "description": "Symfony polyfill for the Mbstring extension",
4897             "homepage": "https://symfony.com",
4898             "keywords": [
4899                 "compatibility",
4900                 "mbstring",
4901                 "polyfill",
4902                 "portable",
4903                 "shim"
4904             ],
4905             "support": {
4906                 "source": "https://github.com/symfony/polyfill-mbstring/tree/v1.37.0"
4907             },
4908             "funding": [
4909                 {
4910                     "url": "https://symfony.com/sponsor",
4911                     "type": "custom"
4912                 },
4913                 {
4914                     "url": "https://github.com/fabpot",
4915                     "type": "github"
4916                 },
4917                 {
4918                     "url": "https://github.com/nicolas-grekas",
4919                     "type": "github"
4920                 },
4921                 {
4922                     "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
4923                     "type": "tidelift"
4924                 }
4925             ],
4926             "time": "2026-04-10T17:25:58+00:00"
4927         },
4928         {
4929             "name": "symfony/polyfill-php80",
4930             "version": "v1.37.0",
4931             "source": {
4932                 "type": "git",
4933                 "url": "https://github.com/symfony/polyfill-php80.git",
4934                 "reference": "dfb55726c3a76ea3b6459fcfda1ec2d80a682411"
4935             },
4936             "dist": {
4937                 "type": "zip",
4938                 "url": "https://api.github.com/repos/symfony/polyfill-php80/zipball/dfb55726c3a76ea3b6459fcfda1ec2d80a682411",
4939                 "reference": "dfb55726c3a76ea3b6459fcfda1ec2d80a682411",
4940                 "shasum": ""
4941             },
4942             "require": {
4943                 "php": ">=7.2"
4944             },
4945             "type": "library",
4946             "extra": {
4947                 "thanks": {
4948                     "url": "https://github.com/symfony/polyfill",
4949                     "name": "symfony/polyfill"
4950                 }
4951             },
4952             "autoload": {
4953                 "files": [
4954                     "bootstrap.php"
4955                 ],
4956                 "psr-4": {
4957                     "Symfony\\Polyfill\\Php80\\": ""
4958                 },
4959                 "classmap": [
4960                     "Resources/stubs"
4961                 ]
4962             },
4963             "notification-url": "https://packagist.org/downloads/",
4964             "license": [
4965                 "MIT"
4966             ],
4967             "authors": [
4968                 {
4969                     "name": "Ion Bazan",
4970                     "email": "ion.bazan@gmail.com"
4971                 },
4972                 {
4973                     "name": "Nicolas Grekas",
4974                     "email": "p@tchwork.com"
4975                 },
4976                 {
4977                     "name": "Symfony Community",
4978                     "homepage": "https://symfony.com/contributors"
4979                 }
4980             ],
4981             "description": "Symfony polyfill backporting some PHP 8.0+ features to lower PHP versions",
4982             "homepage": "https://symfony.com",
4983             "keywords": [
4984                 "compatibility",
4985                 "polyfill",
4986                 "portable",
4987                 "shim"
4988             ],
4989             "support": {
4990                 "source": "https://github.com/symfony/polyfill-php80/tree/v1.37.0"
4991             },
4992             "funding": [
4993                 {
4994                     "url": "https://symfony.com/sponsor",
4995                     "type": "custom"
4996                 },
4997                 {
4998                     "url": "https://github.com/fabpot",
4999                     "type": "github"
5000                 },
5001                 {
5002                     "url": "https://github.com/nicolas-grekas",
5003                     "type": "github"
5004                 },
5005                 {
5006                     "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
5007                     "type": "tidelift"
5008                 }
5009             ],
5010             "time": "2026-04-10T16:19:22+00:00"
5011         },
5012         {
5013             "name": "symfony/polyfill-php83",
5014             "version": "v1.37.0",
5015             "source": {
5016                 "type": "git",
5017                 "url": "https://github.com/symfony/polyfill-php83.git",
5018                 "reference": "3600c2cb22399e25bb226e4a135ce91eeb2a6149"
5019             },
5020             "dist": {
5021                 "type": "zip",
5022                 "url": "https://api.github.com/repos/symfony/polyfill-php83/zipball/3600c2cb22399e25bb226e4a135ce91eeb2a6149",
5023                 "reference": "3600c2cb22399e25bb226e4a135ce91eeb2a6149",
5024                 "shasum": ""
5025             },
5026             "require": {
5027                 "php": ">=7.2"
5028             },
5029             "type": "library",
5030             "extra": {
5031                 "thanks": {
5032                     "url": "https://github.com/symfony/polyfill",
5033                     "name": "symfony/polyfill"
5034                 }
5035             },
5036             "autoload": {
5037                 "files": [
5038                     "bootstrap.php"
5039                 ],
5040                 "psr-4": {
5041                     "Symfony\\Polyfill\\Php83\\": ""
5042                 },
5043                 "classmap": [
5044                     "Resources/stubs"
5045                 ]
5046             },
5047             "notification-url": "https://packagist.org/downloads/",
5048             "license": [
5049                 "MIT"
5050             ],
5051             "authors": [
5052                 {
5053                     "name": "Nicolas Grekas",
5054                     "email": "p@tchwork.com"
5055                 },
5056                 {
5057                     "name": "Symfony Community",
5058                     "homepage": "https://symfony.com/contributors"
5059                 }
5060             ],
5061             "description": "Symfony polyfill backporting some PHP 8.3+ features to lower PHP versions",
5062             "homepage": "https://symfony.com",
5063             "keywords": [
5064                 "compatibility",
5065                 "polyfill",
5066                 "portable",
5067                 "shim"
5068             ],
5069             "support": {
5070                 "source": "https://github.com/symfony/polyfill-php83/tree/v1.37.0"
5071             },
5072             "funding": [
5073                 {
5074                     "url": "https://symfony.com/sponsor",
5075                     "type": "custom"
5076                 },
5077                 {
5078                     "url": "https://github.com/fabpot",
5079                     "type": "github"
5080                 },
5081                 {
5082                     "url": "https://github.com/nicolas-grekas",
5083                     "type": "github"
5084                 },
5085                 {
5086                     "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
5087                     "type": "tidelift"
5088                 }
5089             ],
5090             "time": "2026-04-10T17:25:58+00:00"
5091         },
5092         {
5093             "name": "symfony/polyfill-php84",
5094             "version": "v1.37.0",
5095             "source": {
5096                 "type": "git",
5097                 "url": "https://github.com/symfony/polyfill-php84.git",
5098                 "reference": "88486db2c389b290bf87ff1de7ebc1e13e42bb06"
5099             },
5100             "dist": {
5101                 "type": "zip",
5102                 "url": "https://api.github.com/repos/symfony/polyfill-php84/zipball/88486db2c389b290bf87ff1de7ebc1e13e42bb06",
5103                 "reference": "88486db2c389b290bf87ff1de7ebc1e13e42bb06",
5104                 "shasum": ""
5105             },
5106             "require": {
5107                 "php": ">=7.2"
5108             },
5109             "type": "library",
5110             "extra": {
5111                 "thanks": {
5112                     "url": "https://github.com/symfony/polyfill",
5113                     "name": "symfony/polyfill"
5114                 }
5115             },
5116             "autoload": {
5117                 "files": [
5118                     "bootstrap.php"
5119                 ],
5120                 "psr-4": {
5121                     "Symfony\\Polyfill\\Php84\\": ""
5122                 },
5123                 "classmap": [
5124                     "Resources/stubs"
5125                 ]
5126             },
5127             "notification-url": "https://packagist.org/downloads/",
5128             "license": [
5129                 "MIT"
5130             ],
5131             "authors": [
5132                 {
5133                     "name": "Nicolas Grekas",
5134                     "email": "p@tchwork.com"
5135                 },
5136                 {
5137                     "name": "Symfony Community",
5138                     "homepage": "https://symfony.com/contributors"
5139                 }
5140             ],
5141             "description": "Symfony polyfill backporting some PHP 8.4+ features to lower PHP versions",
5142             "homepage": "https://symfony.com",
5143             "keywords": [
5144                 "compatibility",
5145                 "polyfill",
5146                 "portable",
5147                 "shim"
5148             ],
5149             "support": {
5150                 "source": "https://github.com/symfony/polyfill-php84/tree/v1.37.0"
5151             },
5152             "funding": [
5153                 {
5154                     "url": "https://symfony.com/sponsor",
5155                     "type": "custom"
5156                 },
5157                 {
5158                     "url": "https://github.com/fabpot",
5159                     "type": "github"
5160                 },
5161                 {
5162                     "url": "https://github.com/nicolas-grekas",
5163                     "type": "github"
5164                 },
5165                 {
5166                     "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
5167                     "type": "tidelift"
5168                 }
5169             ],
5170             "time": "2026-04-10T18:47:49+00:00"
5171         },
5172         {
5173             "name": "symfony/polyfill-php85",
5174             "version": "v1.37.0",
5175             "source": {
5176                 "type": "git",
5177                 "url": "https://github.com/symfony/polyfill-php85.git",
5178                 "reference": "fcfa4973a9917cef23f2e38774da74a2b7d115ee"
5179             },
5180             "dist": {
5181                 "type": "zip",
5182                 "url": "https://api.github.com/repos/symfony/polyfill-php85/zipball/fcfa4973a9917cef23f2e38774da74a2b7d115ee",
5183                 "reference": "fcfa4973a9917cef23f2e38774da74a2b7d115ee",
5184                 "shasum": ""
5185             },
5186             "require": {
5187                 "php": ">=7.2"
5188             },
5189             "type": "library",
5190             "extra": {
5191                 "thanks": {
5192                     "url": "https://github.com/symfony/polyfill",
5193                     "name": "symfony/polyfill"
5194                 }
5195             },
5196             "autoload": {
5197                 "files": [
5198                     "bootstrap.php"
5199                 ],
5200                 "psr-4": {
5201                     "Symfony\\Polyfill\\Php85\\": ""
5202                 },
5203                 "classmap": [
5204                     "Resources/stubs"
5205                 ]
5206             },
5207             "notification-url": "https://packagist.org/downloads/",
5208             "license": [
5209                 "MIT"
5210             ],
5211             "authors": [
5212                 {
5213                     "name": "Nicolas Grekas",
5214                     "email": "p@tchwork.com"
5215                 },
5216                 {
5217                     "name": "Symfony Community",
5218                     "homepage": "https://symfony.com/contributors"
5219                 }
5220             ],
5221             "description": "Symfony polyfill backporting some PHP 8.5+ features to lower PHP versions",
5222             "homepage": "https://symfony.com",
5223             "keywords": [
5224                 "compatibility",
5225                 "polyfill",
5226                 "portable",
5227                 "shim"
5228             ],
5229             "support": {
5230                 "source": "https://github.com/symfony/polyfill-php85/tree/v1.37.0"
5231             },
5232             "funding": [
5233                 {
5234                     "url": "https://symfony.com/sponsor",
5235                     "type": "custom"
5236                 },
5237                 {
5238                     "url": "https://github.com/fabpot",
5239                     "type": "github"
5240                 },
5241                 {
5242                     "url": "https://github.com/nicolas-grekas",
5243                     "type": "github"
5244                 },
5245                 {
5246                     "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
5247                     "type": "tidelift"
5248                 }
5249             ],
5250             "time": "2026-04-26T13:10:57+00:00"
5251         },
5252         {
5253             "name": "symfony/polyfill-uuid",
5254             "version": "v1.37.0",
5255             "source": {
5256                 "type": "git",
5257                 "url": "https://github.com/symfony/polyfill-uuid.git",
5258                 "reference": "26dfec253c4cf3e51b541b52ddf7e42cb0908e94"
5259             },
5260             "dist": {
5261                 "type": "zip",
5262                 "url": "https://api.github.com/repos/symfony/polyfill-uuid/zipball/26dfec253c4cf3e51b541b52ddf7e42cb0908e94",
5263                 "reference": "26dfec253c4cf3e51b541b52ddf7e42cb0908e94",
5264                 "shasum": ""
5265             },
5266             "require": {
5267                 "php": ">=7.2"
5268             },
5269             "provide": {
5270                 "ext-uuid": "*"
5271             },
5272             "suggest": {
5273                 "ext-uuid": "For best performance"
5274             },
5275             "type": "library",
5276             "extra": {
5277                 "thanks": {
5278                     "url": "https://github.com/symfony/polyfill",
5279                     "name": "symfony/polyfill"
5280                 }
5281             },
5282             "autoload": {
5283                 "files": [
5284                     "bootstrap.php"
5285                 ],
5286                 "psr-4": {
5287                     "Symfony\\Polyfill\\Uuid\\": ""
5288                 }
5289             },
5290             "notification-url": "https://packagist.org/downloads/",
5291             "license": [
5292                 "MIT"
5293             ],
5294             "authors": [
5295                 {
5296                     "name": "Grégoire Pineau",
5297                     "email": "lyrixx@lyrixx.info"
5298                 },
5299                 {
5300                     "name": "Symfony Community",
5301                     "homepage": "https://symfony.com/contributors"
5302                 }
5303             ],
5304             "description": "Symfony polyfill for uuid functions",
5305             "homepage": "https://symfony.com",
5306             "keywords": [
5307                 "compatibility",
5308                 "polyfill",
5309                 "portable",
5310                 "uuid"
5311             ],
5312             "support": {
5313                 "source": "https://github.com/symfony/polyfill-uuid/tree/v1.37.0"
5314             },
5315             "funding": [
5316                 {
5317                     "url": "https://symfony.com/sponsor",
5318                     "type": "custom"
5319                 },
5320                 {
5321                     "url": "https://github.com/fabpot",
5322                     "type": "github"
5323                 },
5324                 {
5325                     "url": "https://github.com/nicolas-grekas",
5326                     "type": "github"
5327                 },
5328                 {
5329                     "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
5330                     "type": "tidelift"
5331                 }
5332             ],
5333             "time": "2026-04-10T16:19:22+00:00"
5334         },
5335         {
5336             "name": "symfony/process",
5337             "version": "v7.4.8",
5338             "source": {
5339                 "type": "git",
5340                 "url": "https://github.com/symfony/process.git",
5341                 "reference": "60f19cd3badc8de688421e21e4305eba50f8089a"
5342             },
5343             "dist": {
5344                 "type": "zip",
5345                 "url": "https://api.github.com/repos/symfony/process/zipball/60f19cd3badc8de688421e21e4305eba50f8089a",
5346                 "reference": "60f19cd3badc8de688421e21e4305eba50f8089a",
5347                 "shasum": ""
5348             },
5349             "require": {
5350                 "php": ">=8.2"
5351             },
5352             "type": "library",
5353             "autoload": {
5354                 "psr-4": {
5355                     "Symfony\\Component\\Process\\": ""
5356                 },
5357                 "exclude-from-classmap": [
5358                     "/Tests/"
5359                 ]
5360             },
5361             "notification-url": "https://packagist.org/downloads/",
5362             "license": [
5363                 "MIT"
5364             ],
5365             "authors": [
5366                 {
5367                     "name": "Fabien Potencier",
5368                     "email": "fabien@symfony.com"
5369                 },
5370                 {
5371                     "name": "Symfony Community",
5372                     "homepage": "https://symfony.com/contributors"
5373                 }
5374             ],
5375             "description": "Executes commands in sub-processes",
5376             "homepage": "https://symfony.com",
5377             "support": {
5378                 "source": "https://github.com/symfony/process/tree/v7.4.8"
5379             },
5380             "funding": [
5381                 {
5382                     "url": "https://symfony.com/sponsor",
5383                     "type": "custom"
5384                 },
5385                 {
5386                     "url": "https://github.com/fabpot",
5387                     "type": "github"
5388                 },
5389                 {
5390                     "url": "https://github.com/nicolas-grekas",
5391                     "type": "github"
5392                 },
5393                 {
5394                     "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
5395                     "type": "tidelift"
5396                 }
5397             ],
5398             "time": "2026-03-24T13:12:05+00:00"
5399         },
5400         {
5401             "name": "symfony/routing",
5402             "version": "v7.4.8",
5403             "source": {
5404                 "type": "git",
5405                 "url": "https://github.com/symfony/routing.git",
5406                 "reference": "9608de9873ec86e754fb6c0a0fa7e5f1a960eb6b"
5407             },
5408             "dist": {
5409                 "type": "zip",
5410                 "url": "https://api.github.com/repos/symfony/routing/zipball/9608de9873ec86e754fb6c0a0fa7e5f1a960eb6b",
5411                 "reference": "9608de9873ec86e754fb6c0a0fa7e5f1a960eb6b",
5412                 "shasum": ""
5413             },
5414             "require": {
5415                 "php": ">=8.2",
5416                 "symfony/deprecation-contracts": "^2.5|^3"
5417             },
5418             "conflict": {
5419                 "symfony/config": "<6.4",
5420                 "symfony/dependency-injection": "<6.4",
5421                 "symfony/yaml": "<6.4"
5422             },
5423             "require-dev": {
5424                 "psr/log": "^1|^2|^3",
5425                 "symfony/config": "^6.4|^7.0|^8.0",
5426                 "symfony/dependency-injection": "^6.4|^7.0|^8.0",
5427                 "symfony/expression-language": "^6.4|^7.0|^8.0",
5428                 "symfony/http-foundation": "^6.4|^7.0|^8.0",
5429                 "symfony/yaml": "^6.4|^7.0|^8.0"
5430             },
5431             "type": "library",
5432             "autoload": {
5433                 "psr-4": {
5434                     "Symfony\\Component\\Routing\\": ""
5435                 },
5436                 "exclude-from-classmap": [
5437                     "/Tests/"
5438                 ]
5439             },
5440             "notification-url": "https://packagist.org/downloads/",
5441             "license": [
5442                 "MIT"
5443             ],
5444             "authors": [
5445                 {
5446                     "name": "Fabien Potencier",
5447                     "email": "fabien@symfony.com"
5448                 },
5449                 {
5450                     "name": "Symfony Community",
5451                     "homepage": "https://symfony.com/contributors"
5452                 }
5453             ],
5454             "description": "Maps an HTTP request to a set of configuration variables",
5455             "homepage": "https://symfony.com",
5456             "keywords": [
5457                 "router",
5458                 "routing",
5459                 "uri",
5460                 "url"
5461             ],
5462             "support": {
5463                 "source": "https://github.com/symfony/routing/tree/v7.4.8"
5464             },
5465             "funding": [
5466                 {
5467                     "url": "https://symfony.com/sponsor",
5468                     "type": "custom"
5469                 },
5470                 {
5471                     "url": "https://github.com/fabpot",
5472                     "type": "github"
5473                 },
5474                 {
5475                     "url": "https://github.com/nicolas-grekas",
5476                     "type": "github"
5477                 },
5478                 {
5479                     "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
5480                     "type": "tidelift"
5481                 }
5482             ],
5483             "time": "2026-03-24T13:12:05+00:00"
5484         },
5485         {
5486             "name": "symfony/service-contracts",
5487             "version": "v3.6.1",
5488             "source": {
5489                 "type": "git",
5490                 "url": "https://github.com/symfony/service-contracts.git",
5491                 "reference": "45112560a3ba2d715666a509a0bc9521d10b6c43"
5492             },
5493             "dist": {
5494                 "type": "zip",
5495                 "url": "https://api.github.com/repos/symfony/service-contracts/zipball/45112560a3ba2d715666a509a0bc9521d10b6c43",
5496                 "reference": "45112560a3ba2d715666a509a0bc9521d10b6c43",
5497                 "shasum": ""
5498             },
5499             "require": {
5500                 "php": ">=8.1",
5501                 "psr/container": "^1.1|^2.0",
5502                 "symfony/deprecation-contracts": "^2.5|^3"
5503             },
5504             "conflict": {
5505                 "ext-psr": "<1.1|>=2"
5506             },
5507             "type": "library",
5508             "extra": {
5509                 "thanks": {
5510                     "url": "https://github.com/symfony/contracts",
5511                     "name": "symfony/contracts"
5512                 },
5513                 "branch-alias": {
5514                     "dev-main": "3.6-dev"
5515                 }
5516             },
5517             "autoload": {
5518                 "psr-4": {
5519                     "Symfony\\Contracts\\Service\\": ""
5520                 },
5521                 "exclude-from-classmap": [
5522                     "/Test/"
5523                 ]
5524             },
5525             "notification-url": "https://packagist.org/downloads/",
5526             "license": [
5527                 "MIT"
5528             ],
5529             "authors": [
5530                 {
5531                     "name": "Nicolas Grekas",
5532                     "email": "p@tchwork.com"
5533                 },
5534                 {
5535                     "name": "Symfony Community",
5536                     "homepage": "https://symfony.com/contributors"
5537                 }
5538             ],
5539             "description": "Generic abstractions related to writing services",
5540             "homepage": "https://symfony.com",
5541             "keywords": [
5542                 "abstractions",
5543                 "contracts",
5544                 "decoupling",
5545                 "interfaces",
5546                 "interoperability",
5547                 "standards"
5548             ],
5549             "support": {
5550                 "source": "https://github.com/symfony/service-contracts/tree/v3.6.1"
5551             },
5552             "funding": [
5553                 {
5554                     "url": "https://symfony.com/sponsor",
5555                     "type": "custom"
5556                 },
5557                 {
5558                     "url": "https://github.com/fabpot",
5559                     "type": "github"
5560                 },
5561                 {
5562                     "url": "https://github.com/nicolas-grekas",
5563                     "type": "github"
5564                 },
5565                 {
5566                     "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
5567                     "type": "tidelift"
5568                 }
5569             ],
5570             "time": "2025-07-15T11:30:57+00:00"
5571         },
5572         {
5573             "name": "symfony/string",
5574             "version": "v7.4.8",
5575             "source": {
5576                 "type": "git",
5577                 "url": "https://github.com/symfony/string.git",
5578                 "reference": "114ac57257d75df748eda23dd003878080b8e688"
5579             },
5580             "dist": {
5581                 "type": "zip",
5582                 "url": "https://api.github.com/repos/symfony/string/zipball/114ac57257d75df748eda23dd003878080b8e688",
5583                 "reference": "114ac57257d75df748eda23dd003878080b8e688",
5584                 "shasum": ""
5585             },
5586             "require": {
5587                 "php": ">=8.2",
5588                 "symfony/deprecation-contracts": "^2.5|^3.0",
5589                 "symfony/polyfill-ctype": "~1.8",
5590                 "symfony/polyfill-intl-grapheme": "~1.33",
5591                 "symfony/polyfill-intl-normalizer": "~1.0",
5592                 "symfony/polyfill-mbstring": "~1.0"
5593             },
5594             "conflict": {
5595                 "symfony/translation-contracts": "<2.5"
5596             },
5597             "require-dev": {
5598                 "symfony/emoji": "^7.1|^8.0",
5599                 "symfony/http-client": "^6.4|^7.0|^8.0",
5600                 "symfony/intl": "^6.4|^7.0|^8.0",
5601                 "symfony/translation-contracts": "^2.5|^3.0",
5602                 "symfony/var-exporter": "^6.4|^7.0|^8.0"
5603             },
5604             "type": "library",
5605             "autoload": {
5606                 "files": [
5607                     "Resources/functions.php"
5608                 ],
5609                 "psr-4": {
5610                     "Symfony\\Component\\String\\": ""
5611                 },
5612                 "exclude-from-classmap": [
5613                     "/Tests/"
5614                 ]
5615             },
5616             "notification-url": "https://packagist.org/downloads/",
5617             "license": [
5618                 "MIT"
5619             ],
5620             "authors": [
5621                 {
5622                     "name": "Nicolas Grekas",
5623                     "email": "p@tchwork.com"
5624                 },
5625                 {
5626                     "name": "Symfony Community",
5627                     "homepage": "https://symfony.com/contributors"
5628                 }
5629             ],
5630             "description": "Provides an object-oriented API to strings and deals with bytes, UTF-8 code points and grapheme clusters in a unified way",
5631             "homepage": "https://symfony.com",
5632             "keywords": [
5633                 "grapheme",
5634                 "i18n",
5635                 "string",
5636                 "unicode",
5637                 "utf-8",
5638                 "utf8"
5639             ],
5640             "support": {
5641                 "source": "https://github.com/symfony/string/tree/v7.4.8"
5642             },
5643             "funding": [
5644                 {
5645                     "url": "https://symfony.com/sponsor",
5646                     "type": "custom"
5647                 },
5648                 {
5649                     "url": "https://github.com/fabpot",
5650                     "type": "github"
5651                 },
5652                 {
5653                     "url": "https://github.com/nicolas-grekas",
5654                     "type": "github"
5655                 },
5656                 {
5657                     "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
5658                     "type": "tidelift"
5659                 }
5660             ],
5661             "time": "2026-03-24T13:12:05+00:00"
5662         },
5663         {
5664             "name": "symfony/translation",
5665             "version": "v7.4.8",
5666             "source": {
5667                 "type": "git",
5668                 "url": "https://github.com/symfony/translation.git",
5669                 "reference": "33600f8489485425bfcddd0d983391038d3422e7"
5670             },
5671             "dist": {
5672                 "type": "zip",
5673                 "url": "https://api.github.com/repos/symfony/translation/zipball/33600f8489485425bfcddd0d983391038d3422e7",
5674                 "reference": "33600f8489485425bfcddd0d983391038d3422e7",
5675                 "shasum": ""
5676             },
5677             "require": {
5678                 "php": ">=8.2",
5679                 "symfony/deprecation-contracts": "^2.5|^3",
5680                 "symfony/polyfill-mbstring": "~1.0",
5681                 "symfony/translation-contracts": "^2.5.3|^3.3"
5682             },
5683             "conflict": {
5684                 "nikic/php-parser": "<5.0",
5685                 "symfony/config": "<6.4",
5686                 "symfony/console": "<6.4",
5687                 "symfony/dependency-injection": "<6.4",
5688                 "symfony/http-client-contracts": "<2.5",
5689                 "symfony/http-kernel": "<6.4",
5690                 "symfony/service-contracts": "<2.5",
5691                 "symfony/twig-bundle": "<6.4",
5692                 "symfony/yaml": "<6.4"
5693             },
5694             "provide": {
5695                 "symfony/translation-implementation": "2.3|3.0"
5696             },
5697             "require-dev": {
5698                 "nikic/php-parser": "^5.0",
5699                 "psr/log": "^1|^2|^3",
5700                 "symfony/config": "^6.4|^7.0|^8.0",
5701                 "symfony/console": "^6.4|^7.0|^8.0",
5702                 "symfony/dependency-injection": "^6.4|^7.0|^8.0",
5703                 "symfony/finder": "^6.4|^7.0|^8.0",
5704                 "symfony/http-client-contracts": "^2.5|^3.0",
5705                 "symfony/http-kernel": "^6.4|^7.0|^8.0",
5706                 "symfony/intl": "^6.4|^7.0|^8.0",
5707                 "symfony/polyfill-intl-icu": "^1.21",
5708                 "symfony/routing": "^6.4|^7.0|^8.0",
5709                 "symfony/service-contracts": "^2.5|^3",
5710                 "symfony/yaml": "^6.4|^7.0|^8.0"
5711             },
5712             "type": "library",
5713             "autoload": {
5714                 "files": [
5715                     "Resources/functions.php"
5716                 ],
5717                 "psr-4": {
5718                     "Symfony\\Component\\Translation\\": ""
5719                 },
5720                 "exclude-from-classmap": [
5721                     "/Tests/"
5722                 ]
5723             },
5724             "notification-url": "https://packagist.org/downloads/",
5725             "license": [
5726                 "MIT"
5727             ],
5728             "authors": [
5729                 {
5730                     "name": "Fabien Potencier",
5731                     "email": "fabien@symfony.com"
5732                 },
5733                 {
5734                     "name": "Symfony Community",
5735                     "homepage": "https://symfony.com/contributors"
5736                 }
5737             ],
5738             "description": "Provides tools to internationalize your application",
5739             "homepage": "https://symfony.com",
5740             "support": {
5741                 "source": "https://github.com/symfony/translation/tree/v7.4.8"
5742             },
5743             "funding": [
5744                 {
5745                     "url": "https://symfony.com/sponsor",
5746                     "type": "custom"
5747                 },
5748                 {
5749                     "url": "https://github.com/fabpot",
5750                     "type": "github"
5751                 },
5752                 {
5753                     "url": "https://github.com/nicolas-grekas",
5754                     "type": "github"
5755                 },
5756                 {
5757                     "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
5758                     "type": "tidelift"
5759                 }
5760             ],
5761             "time": "2026-03-24T13:12:05+00:00"
5762         },
5763         {
5764             "name": "symfony/translation-contracts",
5765             "version": "v3.6.1",
5766             "source": {
5767                 "type": "git",
5768                 "url": "https://github.com/symfony/translation-contracts.git",
5769                 "reference": "65a8bc82080447fae78373aa10f8d13b38338977"
5770             },
5771             "dist": {
5772                 "type": "zip",
5773                 "url": "https://api.github.com/repos/symfony/translation-contracts/zipball/65a8bc82080447fae78373aa10f8d13b38338977",
5774                 "reference": "65a8bc82080447fae78373aa10f8d13b38338977",
5775                 "shasum": ""
5776             },
5777             "require": {
5778                 "php": ">=8.1"
5779             },
5780             "type": "library",
5781             "extra": {
5782                 "thanks": {
5783                     "url": "https://github.com/symfony/contracts",
5784                     "name": "symfony/contracts"
5785                 },
5786                 "branch-alias": {
5787                     "dev-main": "3.6-dev"
5788                 }
5789             },
5790             "autoload": {
5791                 "psr-4": {
5792                     "Symfony\\Contracts\\Translation\\": ""
5793                 },
5794                 "exclude-from-classmap": [
5795                     "/Test/"
5796                 ]
5797             },
5798             "notification-url": "https://packagist.org/downloads/",
5799             "license": [
5800                 "MIT"
5801             ],
5802             "authors": [
5803                 {
5804                     "name": "Nicolas Grekas",
5805                     "email": "p@tchwork.com"
5806                 },
5807                 {
5808                     "name": "Symfony Community",
5809                     "homepage": "https://symfony.com/contributors"
5810                 }
5811             ],
5812             "description": "Generic abstractions related to translation",
5813             "homepage": "https://symfony.com",
5814             "keywords": [
5815                 "abstractions",
5816                 "contracts",
5817                 "decoupling",
5818                 "interfaces",
5819                 "interoperability",
5820                 "standards"
5821             ],
5822             "support": {
5823                 "source": "https://github.com/symfony/translation-contracts/tree/v3.6.1"
5824             },
5825             "funding": [
5826                 {
5827                     "url": "https://symfony.com/sponsor",
5828                     "type": "custom"
5829                 },
5830                 {
5831                     "url": "https://github.com/fabpot",
5832                     "type": "github"
5833                 },
5834                 {
5835                     "url": "https://github.com/nicolas-grekas",
5836                     "type": "github"
5837                 },
5838                 {
5839                     "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
5840                     "type": "tidelift"
5841                 }
5842             ],
5843             "time": "2025-07-15T13:41:35+00:00"
5844         },
5845         {
5846             "name": "symfony/uid",
5847             "version": "v7.4.8",
5848             "source": {
5849                 "type": "git",
5850                 "url": "https://github.com/symfony/uid.git",
5851                 "reference": "6883ebdf7bf6a12b37519dbc0df62b0222401b56"
5852             },
5853             "dist": {
5854                 "type": "zip",
5855                 "url": "https://api.github.com/repos/symfony/uid/zipball/6883ebdf7bf6a12b37519dbc0df62b0222401b56",
5856                 "reference": "6883ebdf7bf6a12b37519dbc0df62b0222401b56",
5857                 "shasum": ""
5858             },
5859             "require": {
5860                 "php": ">=8.2",
5861                 "symfony/polyfill-uuid": "^1.15"
5862             },
5863             "require-dev": {
5864                 "symfony/console": "^6.4|^7.0|^8.0"
5865             },
5866             "type": "library",
5867             "autoload": {
5868                 "psr-4": {
5869                     "Symfony\\Component\\Uid\\": ""
5870                 },
5871                 "exclude-from-classmap": [
5872                     "/Tests/"
5873                 ]
5874             },
5875             "notification-url": "https://packagist.org/downloads/",
5876             "license": [
5877                 "MIT"
5878             ],
5879             "authors": [
5880                 {
5881                     "name": "Grégoire Pineau",
5882                     "email": "lyrixx@lyrixx.info"
5883                 },
5884                 {
5885                     "name": "Nicolas Grekas",
5886                     "email": "p@tchwork.com"
5887                 },
5888                 {
5889                     "name": "Symfony Community",
5890                     "homepage": "https://symfony.com/contributors"
5891                 }
5892             ],
5893             "description": "Provides an object-oriented API to generate and represent UIDs",
5894             "homepage": "https://symfony.com",
5895             "keywords": [
5896                 "UID",
5897                 "ulid",
5898                 "uuid"
5899             ],
5900             "support": {
5901                 "source": "https://github.com/symfony/uid/tree/v7.4.8"
5902             },
5903             "funding": [
5904                 {
5905                     "url": "https://symfony.com/sponsor",
5906                     "type": "custom"
5907                 },
5908                 {
5909                     "url": "https://github.com/fabpot",
5910                     "type": "github"
5911                 },
5912                 {
5913                     "url": "https://github.com/nicolas-grekas",
5914                     "type": "github"
5915                 },
5916                 {
5917                     "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
5918                     "type": "tidelift"
5919                 }
5920             ],
5921             "time": "2026-03-24T13:12:05+00:00"
5922         },
5923         {
5924             "name": "symfony/var-dumper",
5925             "version": "v7.4.8",
5926             "source": {
5927                 "type": "git",
5928                 "url": "https://github.com/symfony/var-dumper.git",
5929                 "reference": "9510c3966f749a1d1ff0059e1eabef6cc621e7fd"
5930             },
5931             "dist": {
5932                 "type": "zip",
5933                 "url": "https://api.github.com/repos/symfony/var-dumper/zipball/9510c3966f749a1d1ff0059e1eabef6cc621e7fd",
5934                 "reference": "9510c3966f749a1d1ff0059e1eabef6cc621e7fd",
5935                 "shasum": ""
5936             },
5937             "require": {
5938                 "php": ">=8.2",
5939                 "symfony/deprecation-contracts": "^2.5|^3",
5940                 "symfony/polyfill-mbstring": "~1.0"
5941             },
5942             "conflict": {
5943                 "symfony/console": "<6.4"
5944             },
5945             "require-dev": {
5946                 "symfony/console": "^6.4|^7.0|^8.0",
5947                 "symfony/http-kernel": "^6.4|^7.0|^8.0",
5948                 "symfony/process": "^6.4|^7.0|^8.0",
5949                 "symfony/uid": "^6.4|^7.0|^8.0",
5950                 "twig/twig": "^3.12"
5951             },
5952             "bin": [
5953                 "Resources/bin/var-dump-server"
5954             ],
5955             "type": "library",
5956             "autoload": {
5957                 "files": [
5958                     "Resources/functions/dump.php"
5959                 ],
5960                 "psr-4": {
5961                     "Symfony\\Component\\VarDumper\\": ""
5962                 },
5963                 "exclude-from-classmap": [
5964                     "/Tests/"
5965                 ]
5966             },
5967             "notification-url": "https://packagist.org/downloads/",
5968             "license": [
5969                 "MIT"
5970             ],
5971             "authors": [
5972                 {
5973                     "name": "Nicolas Grekas",
5974                     "email": "p@tchwork.com"
5975                 },
5976                 {
5977                     "name": "Symfony Community",
5978                     "homepage": "https://symfony.com/contributors"
5979                 }
5980             ],
5981             "description": "Provides mechanisms for walking through any arbitrary PHP variable",
5982             "homepage": "https://symfony.com",
5983             "keywords": [
5984                 "debug",
5985                 "dump"
5986             ],
5987             "support": {
5988                 "source": "https://github.com/symfony/var-dumper/tree/v7.4.8"
5989             },
5990             "funding": [
5991                 {
5992                     "url": "https://symfony.com/sponsor",
5993                     "type": "custom"
5994                 },
5995                 {
5996                     "url": "https://github.com/fabpot",
5997                     "type": "github"
5998                 },
5999                 {
6000                     "url": "https://github.com/nicolas-grekas",
6001                     "type": "github"
6002                 },
6003                 {
6004                     "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
6005                     "type": "tidelift"
6006                 }
6007             ],
6008             "time": "2026-03-30T13:44:50+00:00"
6009         },
6010         {
6011             "name": "tijsverkoyen/css-to-inline-styles",
6012             "version": "v2.4.0",
6013             "source": {
6014                 "type": "git",
6015                 "url": "https://github.com/tijsverkoyen/CssToInlineStyles.git",
6016                 "reference": "f0292ccf0ec75843d65027214426b6b163b48b41"
6017             },
6018             "dist": {
6019                 "type": "zip",
6020                 "url": "https://api.github.com/repos/tijsverkoyen/CssToInlineStyles/zipball/f0292ccf0ec75843d65027214426b6b163b48b41",
6021                 "reference": "f0292ccf0ec75843d65027214426b6b163b48b41",
6022                 "shasum": ""
6023             },
6024             "require": {
6025                 "ext-dom": "*",
6026                 "ext-libxml": "*",
6027                 "php": "^7.4 || ^8.0",
6028                 "symfony/css-selector": "^5.4 || ^6.0 || ^7.0 || ^8.0"
6029             },
6030             "require-dev": {
6031                 "phpstan/phpstan": "^2.0",
6032                 "phpstan/phpstan-phpunit": "^2.0",
6033                 "phpunit/phpunit": "^8.5.21 || ^9.5.10"
6034             },
6035             "type": "library",
6036             "extra": {
6037                 "branch-alias": {
6038                     "dev-master": "2.x-dev"
6039                 }
6040             },
6041             "autoload": {
6042                 "psr-4": {
6043                     "TijsVerkoyen\\CssToInlineStyles\\": "src"
6044                 }
6045             },
6046             "notification-url": "https://packagist.org/downloads/",
6047             "license": [
6048                 "BSD-3-Clause"
6049             ],
6050             "authors": [
6051                 {
6052                     "name": "Tijs Verkoyen",
6053                     "email": "css_to_inline_styles@verkoyen.eu",
6054                     "role": "Developer"
6055                 }
6056             ],
6057             "description": "CssToInlineStyles is a class that enables you to convert HTML-pages/files into HTML-pages/files with inline styles. This is very useful when you're sending emails.",
6058             "homepage": "https://github.com/tijsverkoyen/CssToInlineStyles",
6059             "support": {
6060                 "issues": "https://github.com/tijsverkoyen/CssToInlineStyles/issues",
6061                 "source": "https://github.com/tijsverkoyen/CssToInlineStyles/tree/v2.4.0"
6062             },
6063             "time": "2025-12-02T11:56:42+00:00"
6064         },
6065         {
6066             "name": "vlucas/phpdotenv",
6067             "version": "v5.6.3",
6068             "source": {
6069                 "type": "git",
6070                 "url": "https://github.com/vlucas/phpdotenv.git",
6071                 "reference": "955e7815d677a3eaa7075231212f2110983adecc"
6072             },
6073             "dist": {
6074                 "type": "zip",
6075                 "url": "https://api.github.com/repos/vlucas/phpdotenv/zipball/955e7815d677a3eaa7075231212f2110983adecc",
6076                 "reference": "955e7815d677a3eaa7075231212f2110983adecc",
6077                 "shasum": ""
6078             },
6079             "require": {
6080                 "ext-pcre": "*",
6081                 "graham-campbell/result-type": "^1.1.4",
6082                 "php": "^7.2.5 || ^8.0",
6083                 "phpoption/phpoption": "^1.9.5",
6084                 "symfony/polyfill-ctype": "^1.26",
6085                 "symfony/polyfill-mbstring": "^1.26",
6086                 "symfony/polyfill-php80": "^1.26"
6087             },
6088             "require-dev": {
6089                 "bamarni/composer-bin-plugin": "^1.8.2",
6090                 "ext-filter": "*",
6091                 "phpunit/phpunit": "^8.5.34 || ^9.6.13 || ^10.4.2"
6092             },
6093             "suggest": {
6094                 "ext-filter": "Required to use the boolean validator."
6095             },
6096             "type": "library",
6097             "extra": {
6098                 "bamarni-bin": {
6099                     "bin-links": true,
6100                     "forward-command": false
6101                 },
6102                 "branch-alias": {
6103                     "dev-master": "5.6-dev"
6104                 }
6105             },
6106             "autoload": {
6107                 "psr-4": {
6108                     "Dotenv\\": "src/"
6109                 }
6110             },
6111             "notification-url": "https://packagist.org/downloads/",
6112             "license": [
6113                 "BSD-3-Clause"
6114             ],
6115             "authors": [
6116                 {
6117                     "name": "Graham Campbell",
6118                     "email": "hello@gjcampbell.co.uk",
6119                     "homepage": "https://github.com/GrahamCampbell"
6120                 },
6121                 {
6122                     "name": "Vance Lucas",
6123                     "email": "vance@vancelucas.com",
6124                     "homepage": "https://github.com/vlucas"
6125                 }
6126             ],
6127             "description": "Loads environment variables from `.env` to `getenv()`, `$_ENV` and `$_SERVER` automagically.",
6128             "keywords": [
6129                 "dotenv",
6130                 "env",
6131                 "environment"
6132             ],
6133             "support": {
6134                 "issues": "https://github.com/vlucas/phpdotenv/issues",
6135                 "source": "https://github.com/vlucas/phpdotenv/tree/v5.6.3"
6136             },
6137             "funding": [
6138                 {
6139                     "url": "https://github.com/GrahamCampbell",
6140                     "type": "github"
6141                 },
6142                 {
6143                     "url": "https://tidelift.com/funding/github/packagist/vlucas/phpdotenv",
6144                     "type": "tidelift"
6145                 }
6146             ],
6147             "time": "2025-12-27T19:49:13+00:00"
6148         },
6149         {
6150             "name": "voku/portable-ascii",
6151             "version": "2.1.1",
6152             "source": {
6153                 "type": "git",
6154                 "url": "https://github.com/voku/portable-ascii.git",
6155                 "reference": "8e1051fe39379367aecf014f41744ce7539a856f"
6156             },
6157             "dist": {
6158                 "type": "zip",
6159                 "url": "https://api.github.com/repos/voku/portable-ascii/zipball/8e1051fe39379367aecf014f41744ce7539a856f",
6160                 "reference": "8e1051fe39379367aecf014f41744ce7539a856f",
6161                 "shasum": ""
6162             },
6163             "require": {
6164                 "php": ">=7.1.0"
6165             },
6166             "require-dev": {
6167                 "phpunit/phpunit": "~8.5 || ~9.6 || ~10.5 || ~11.5"
6168             },
6169             "suggest": {
6170                 "ext-intl": "Use Intl for transliterator_transliterate() support"
6171             },
6172             "type": "library",
6173             "autoload": {
6174                 "psr-4": {
6175                     "voku\\": "src/voku/"
6176                 }
6177             },
6178             "notification-url": "https://packagist.org/downloads/",
6179             "license": [
6180                 "MIT"
6181             ],
6182             "authors": [
6183                 {
6184                     "name": "Lars Moelleken",
6185                     "homepage": "https://www.moelleken.org/"
6186                 }
6187             ],
6188             "description": "Portable ASCII library - performance optimized (ascii) string functions for php.",
6189             "homepage": "https://github.com/voku/portable-ascii",
6190             "keywords": [
6191                 "ascii",
6192                 "clean",
6193                 "php"
6194             ],
6195             "support": {
6196                 "issues": "https://github.com/voku/portable-ascii/issues",
6197                 "source": "https://github.com/voku/portable-ascii/tree/2.1.1"
6198             },
6199             "funding": [
6200                 {
6201                     "url": "https://www.paypal.me/moelleken",
6202                     "type": "custom"
6203                 },
6204                 {
6205                     "url": "https://github.com/voku",
6206                     "type": "github"
6207                 },
6208                 {
6209                     "url": "https://opencollective.com/portable-ascii",
6210                     "type": "open_collective"
6211                 },
6212                 {
6213                     "url": "https://www.patreon.com/voku",
6214                     "type": "patreon"
6215                 },
6216                 {
6217                     "url": "https://tidelift.com/funding/github/packagist/voku/portable-ascii",
6218                     "type": "tidelift"
6219                 }
6220             ],
6221             "time": "2026-04-26T05:33:54+00:00"
6222         }
6223     ],
6224     "packages-dev": [
6225         {
6226             "name": "fakerphp/faker",
6227             "version": "v1.24.1",
6228             "source": {
6229                 "type": "git",
6230                 "url": "https://github.com/FakerPHP/Faker.git",
6231                 "reference": "e0ee18eb1e6dc3cda3ce9fd97e5a0689a88a64b5"
6232             },
6233             "dist": {
6234                 "type": "zip",
6235                 "url": "https://api.github.com/repos/FakerPHP/Faker/zipball/e0ee18eb1e6dc3cda3ce9fd97e5a0689a88a64b5",
6236                 "reference": "e0ee18eb1e6dc3cda3ce9fd97e5a0689a88a64b5",
6237                 "shasum": ""
6238             },
6239             "require": {
6240                 "php": "^7.4 || ^8.0",
6241                 "psr/container": "^1.0 || ^2.0",
6242                 "symfony/deprecation-contracts": "^2.2 || ^3.0"
6243             },
6244             "conflict": {
6245                 "fzaninotto/faker": "*"
6246             },
6247             "require-dev": {
6248                 "bamarni/composer-bin-plugin": "^1.4.1",
6249                 "doctrine/persistence": "^1.3 || ^2.0",
6250                 "ext-intl": "*",
6251                 "phpunit/phpunit": "^9.5.26",
6252                 "symfony/phpunit-bridge": "^5.4.16"
6253             },
6254             "suggest": {
6255                 "doctrine/orm": "Required to use Faker\\ORM\\Doctrine",
6256                 "ext-curl": "Required by Faker\\Provider\\Image to download images.",
6257                 "ext-dom": "Required by Faker\\Provider\\HtmlLorem for generating random HTML.",
6258                 "ext-iconv": "Required by Faker\\Provider\\ru_RU\\Text::realText() for generating real Russian text.",
6259                 "ext-mbstring": "Required for multibyte Unicode string functionality."
6260             },
6261             "type": "library",
6262             "autoload": {
6263                 "psr-4": {
6264                     "Faker\\": "src/Faker/"
6265                 }
6266             },
6267             "notification-url": "https://packagist.org/downloads/",
6268             "license": [
6269                 "MIT"
6270             ],
6271             "authors": [
6272                 {
6273                     "name": "François Zaninotto"
6274                 }
6275             ],
6276             "description": "Faker is a PHP library that generates fake data for you.",
6277             "keywords": [
6278                 "data",
6279                 "faker",
6280                 "fixtures"
6281             ],
6282             "support": {
6283                 "issues": "https://github.com/FakerPHP/Faker/issues",
6284                 "source": "https://github.com/FakerPHP/Faker/tree/v1.24.1"
6285             },
6286             "time": "2024-11-21T13:46:39+00:00"
6287         },
6288         {
6289             "name": "filp/whoops",
6290             "version": "2.18.4",
6291             "source": {
6292                 "type": "git",
6293                 "url": "https://github.com/filp/whoops.git",
6294                 "reference": "d2102955e48b9fd9ab24280a7ad12ed552752c4d"
6295             },
6296             "dist": {
6297                 "type": "zip",
6298                 "url": "https://api.github.com/repos/filp/whoops/zipball/d2102955e48b9fd9ab24280a7ad12ed552752c4d",
6299                 "reference": "d2102955e48b9fd9ab24280a7ad12ed552752c4d",
6300                 "shasum": ""
6301             },
6302             "require": {
6303                 "php": "^7.1 || ^8.0",
6304                 "psr/log": "^1.0.1 || ^2.0 || ^3.0"
6305             },
6306             "require-dev": {
6307                 "mockery/mockery": "^1.0",
6308                 "phpunit/phpunit": "^7.5.20 || ^8.5.8 || ^9.3.3",
6309                 "symfony/var-dumper": "^4.0 || ^5.0"
6310             },
6311             "suggest": {
6312                 "symfony/var-dumper": "Pretty print complex values better with var-dumper available",
6313                 "whoops/soap": "Formats errors as SOAP responses"
6314             },
6315             "type": "library",
6316             "extra": {
6317                 "branch-alias": {
6318                     "dev-master": "2.7-dev"
6319                 }
6320             },
6321             "autoload": {
6322                 "psr-4": {
6323                     "Whoops\\": "src/Whoops/"
6324                 }
6325             },
6326             "notification-url": "https://packagist.org/downloads/",
6327             "license": [
6328                 "MIT"
6329             ],
6330             "authors": [
6331                 {
6332                     "name": "Filipe Dobreira",
6333                     "homepage": "https://github.com/filp",
6334                     "role": "Developer"
6335                 }
6336             ],
6337             "description": "php error handling for cool kids",
6338             "homepage": "https://filp.github.io/whoops/",
6339             "keywords": [
6340                 "error",
6341                 "exception",
6342                 "handling",
6343                 "library",
6344                 "throwable",
6345                 "whoops"
6346             ],
6347             "support": {
6348                 "issues": "https://github.com/filp/whoops/issues",
6349                 "source": "https://github.com/filp/whoops/tree/2.18.4"
6350             },
6351             "funding": [
6352                 {
6353                     "url": "https://github.com/denis-sokolov",
6354                     "type": "github"
6355                 }
6356             ],
6357             "time": "2025-08-08T12:00:00+00:00"
6358         },
6359         {
6360             "name": "hamcrest/hamcrest-php",
6361             "version": "v2.1.1",
6362             "source": {
6363                 "type": "git",
6364                 "url": "https://github.com/hamcrest/hamcrest-php.git",
6365                 "reference": "f8b1c0173b22fa6ec77a81fe63e5b01eba7e6487"
6366             },
6367             "dist": {
6368                 "type": "zip",
6369                 "url": "https://api.github.com/repos/hamcrest/hamcrest-php/zipball/f8b1c0173b22fa6ec77a81fe63e5b01eba7e6487",
6370                 "reference": "f8b1c0173b22fa6ec77a81fe63e5b01eba7e6487",
6371                 "shasum": ""
6372             },
6373             "require": {
6374                 "php": "^7.4|^8.0"
6375             },
6376             "replace": {
6377                 "cordoval/hamcrest-php": "*",
6378                 "davedevelopment/hamcrest-php": "*",
6379                 "kodova/hamcrest-php": "*"
6380             },
6381             "require-dev": {
6382                 "phpunit/php-file-iterator": "^1.4 || ^2.0 || ^3.0",
6383                 "phpunit/phpunit": "^4.8.36 || ^5.7 || ^6.5 || ^7.0 || ^8.0 || ^9.0"
6384             },
6385             "type": "library",
6386             "extra": {
6387                 "branch-alias": {
6388                     "dev-master": "2.1-dev"
6389                 }
6390             },
6391             "autoload": {
6392                 "classmap": [
6393                     "hamcrest"
6394                 ]
6395             },
6396             "notification-url": "https://packagist.org/downloads/",
6397             "license": [
6398                 "BSD-3-Clause"
6399             ],
6400             "description": "This is the PHP port of Hamcrest Matchers",
6401             "keywords": [
6402                 "test"
6403             ],
6404             "support": {
6405                 "issues": "https://github.com/hamcrest/hamcrest-php/issues",
6406                 "source": "https://github.com/hamcrest/hamcrest-php/tree/v2.1.1"
6407             },
6408             "time": "2025-04-30T06:54:44+00:00"
6409         },
6410         {
6411             "name": "laravel/pail",
6412             "version": "v1.2.6",
6413             "source": {
6414                 "type": "git",
6415                 "url": "https://github.com/laravel/pail.git",
6416                 "reference": "aa71a01c309e7f66bc2ec4fb1a59291b82eb4abf"
6417             },
6418             "dist": {
6419                 "type": "zip",
6420                 "url": "https://api.github.com/repos/laravel/pail/zipball/aa71a01c309e7f66bc2ec4fb1a59291b82eb4abf",
6421                 "reference": "aa71a01c309e7f66bc2ec4fb1a59291b82eb4abf",
6422                 "shasum": ""
6423             },
6424             "require": {
6425                 "ext-mbstring": "*",
6426                 "illuminate/console": "^10.24|^11.0|^12.0|^13.0",
6427                 "illuminate/contracts": "^10.24|^11.0|^12.0|^13.0",
6428                 "illuminate/log": "^10.24|^11.0|^12.0|^13.0",
6429                 "illuminate/process": "^10.24|^11.0|^12.0|^13.0",
6430                 "illuminate/support": "^10.24|^11.0|^12.0|^13.0",
6431                 "nunomaduro/termwind": "^1.15|^2.0",
6432                 "php": "^8.2",
6433                 "symfony/console": "^6.0|^7.0|^8.0"
6434             },
6435             "require-dev": {
6436                 "laravel/framework": "^10.24|^11.0|^12.0|^13.0",
6437                 "laravel/pint": "^1.13",
6438                 "orchestra/testbench-core": "^8.13|^9.17|^10.8|^11.0",
6439                 "pestphp/pest": "^2.20|^3.0|^4.0",
6440                 "pestphp/pest-plugin-type-coverage": "^2.3|^3.0|^4.0",
6441                 "phpstan/phpstan": "^1.12.27",
6442                 "symfony/var-dumper": "^6.3|^7.0|^8.0",
6443                 "symfony/yaml": "^6.3|^7.0|^8.0"
6444             },
6445             "type": "library",
6446             "extra": {
6447                 "laravel": {
6448                     "providers": [
6449                         "Laravel\\Pail\\PailServiceProvider"
6450                     ]
6451                 },
6452                 "branch-alias": {
6453                     "dev-main": "1.x-dev"
6454                 }
6455             },
6456             "autoload": {
6457                 "psr-4": {
6458                     "Laravel\\Pail\\": "src/"
6459                 }
6460             },
6461             "notification-url": "https://packagist.org/downloads/",
6462             "license": [
6463                 "MIT"
6464             ],
6465             "authors": [
6466                 {
6467                     "name": "Taylor Otwell",
6468                     "email": "taylor@laravel.com"
6469                 },
6470                 {
6471                     "name": "Nuno Maduro",
6472                     "email": "enunomaduro@gmail.com"
6473                 }
6474             ],
6475             "description": "Easily delve into your Laravel application's log files directly from the command line.",
6476             "homepage": "https://github.com/laravel/pail",
6477             "keywords": [
6478                 "dev",
6479                 "laravel",
6480                 "logs",
6481                 "php",
6482                 "tail"
6483             ],
6484             "support": {
6485                 "issues": "https://github.com/laravel/pail/issues",
6486                 "source": "https://github.com/laravel/pail"
6487             },
6488             "time": "2026-02-09T13:44:54+00:00"
6489         },
6490         {
6491             "name": "laravel/pint",
6492             "version": "v1.29.1",
6493             "source": {
6494                 "type": "git",
6495                 "url": "https://github.com/laravel/pint.git",
6496                 "reference": "0770e9b7fafd50d4586881d456d6eb41c9247a80"
6497             },
6498             "dist": {
6499                 "type": "zip",
6500                 "url": "https://api.github.com/repos/laravel/pint/zipball/0770e9b7fafd50d4586881d456d6eb41c9247a80",
6501                 "reference": "0770e9b7fafd50d4586881d456d6eb41c9247a80",
6502                 "shasum": ""
6503             },
6504             "require": {
6505                 "ext-json": "*",
6506                 "ext-mbstring": "*",
6507                 "ext-tokenizer": "*",
6508                 "ext-xml": "*",
6509                 "php": "^8.2.0"
6510             },
6511             "require-dev": {
6512                 "friendsofphp/php-cs-fixer": "^3.95.1",
6513                 "illuminate/view": "^12.56.0",
6514                 "larastan/larastan": "^3.9.6",
6515                 "laravel-zero/framework": "^12.1.0",
6516                 "mockery/mockery": "^1.6.12",
6517                 "nunomaduro/termwind": "^2.4.0",
6518                 "pestphp/pest": "^3.8.6",
6519                 "shipfastlabs/agent-detector": "^1.1.3"
6520             },
6521             "bin": [
6522                 "builds/pint"
6523             ],
6524             "type": "project",
6525             "autoload": {
6526                 "psr-4": {
6527                     "App\\": "app/",
6528                     "Database\\Seeders\\": "database/seeders/",
6529                     "Database\\Factories\\": "database/factories/"
6530                 }
6531             },
6532             "notification-url": "https://packagist.org/downloads/",
6533             "license": [
6534                 "MIT"
6535             ],
6536             "authors": [
6537                 {
6538                     "name": "Nuno Maduro",
6539                     "email": "enunomaduro@gmail.com"
6540                 }
6541             ],
6542             "description": "An opinionated code formatter for PHP.",
6543             "homepage": "https://laravel.com",
6544             "keywords": [
6545                 "dev",
6546                 "format",
6547                 "formatter",
6548                 "lint",
6549                 "linter",
6550                 "php"
6551             ],
6552             "support": {
6553                 "issues": "https://github.com/laravel/pint/issues",
6554                 "source": "https://github.com/laravel/pint"
6555             },
6556             "time": "2026-04-20T15:26:14+00:00"
6557         },
6558         {
6559             "name": "mockery/mockery",
6560             "version": "1.6.12",
6561             "source": {
6562                 "type": "git",
6563                 "url": "https://github.com/mockery/mockery.git",
6564                 "reference": "1f4efdd7d3beafe9807b08156dfcb176d18f1699"
6565             },
6566             "dist": {
6567                 "type": "zip",
6568                 "url": "https://api.github.com/repos/mockery/mockery/zipball/1f4efdd7d3beafe9807b08156dfcb176d18f1699",
6569                 "reference": "1f4efdd7d3beafe9807b08156dfcb176d18f1699",
6570                 "shasum": ""
6571             },
6572             "require": {
6573                 "hamcrest/hamcrest-php": "^2.0.1",
6574                 "lib-pcre": ">=7.0",
6575                 "php": ">=7.3"
6576             },
6577             "conflict": {
6578                 "phpunit/phpunit": "<8.0"
6579             },
6580             "require-dev": {
6581                 "phpunit/phpunit": "^8.5 || ^9.6.17",
6582                 "symplify/easy-coding-standard": "^12.1.14"
6583             },
6584             "type": "library",
6585             "autoload": {
6586                 "files": [
6587                     "library/helpers.php",
6588                     "library/Mockery.php"
6589                 ],
6590                 "psr-4": {
6591                     "Mockery\\": "library/Mockery"
6592                 }
6593             },
6594             "notification-url": "https://packagist.org/downloads/",
6595             "license": [
6596                 "BSD-3-Clause"
6597             ],
6598             "authors": [
6599                 {
6600                     "name": "Pádraic Brady",
6601                     "email": "padraic.brady@gmail.com",
6602                     "homepage": "https://github.com/padraic",
6603                     "role": "Author"
6604                 },
6605                 {
6606                     "name": "Dave Marshall",
6607                     "email": "dave.marshall@atstsolutions.co.uk",
6608                     "homepage": "https://davedevelopment.co.uk",
6609                     "role": "Developer"
6610                 },
6611                 {
6612                     "name": "Nathanael Esayeas",
6613                     "email": "nathanael.esayeas@protonmail.com",
6614                     "homepage": "https://github.com/ghostwriter",
6615                     "role": "Lead Developer"
6616                 }
6617             ],
6618             "description": "Mockery is a simple yet flexible PHP mock object framework",
6619             "homepage": "https://github.com/mockery/mockery",
6620             "keywords": [
6621                 "BDD",
6622                 "TDD",
6623                 "library",
6624                 "mock",
6625                 "mock objects",
6626                 "mockery",
6627                 "stub",
6628                 "test",
6629                 "test double",
6630                 "testing"
6631             ],
6632             "support": {
6633                 "docs": "https://docs.mockery.io/",
6634                 "issues": "https://github.com/mockery/mockery/issues",
6635                 "rss": "https://github.com/mockery/mockery/releases.atom",
6636                 "security": "https://github.com/mockery/mockery/security/advisories",
6637                 "source": "https://github.com/mockery/mockery"
6638             },
6639             "time": "2024-05-16T03:13:13+00:00"
6640         },
6641         {
6642             "name": "myclabs/deep-copy",
6643             "version": "1.13.4",
6644             "source": {
6645                 "type": "git",
6646                 "url": "https://github.com/myclabs/DeepCopy.git",
6647                 "reference": "07d290f0c47959fd5eed98c95ee5602db07e0b6a"
6648             },
6649             "dist": {
6650                 "type": "zip",
6651                 "url": "https://api.github.com/repos/myclabs/DeepCopy/zipball/07d290f0c47959fd5eed98c95ee5602db07e0b6a",
6652                 "reference": "07d290f0c47959fd5eed98c95ee5602db07e0b6a",
6653                 "shasum": ""
6654             },
6655             "require": {
6656                 "php": "^7.1 || ^8.0"
6657             },
6658             "conflict": {
6659                 "doctrine/collections": "<1.6.8",
6660                 "doctrine/common": "<2.13.3 || >=3 <3.2.2"
6661             },
6662             "require-dev": {
6663                 "doctrine/collections": "^1.6.8",
6664                 "doctrine/common": "^2.13.3 || ^3.2.2",
6665                 "phpspec/prophecy": "^1.10",
6666                 "phpunit/phpunit": "^7.5.20 || ^8.5.23 || ^9.5.13"
6667             },
6668             "type": "library",
6669             "autoload": {
6670                 "files": [
6671                     "src/DeepCopy/deep_copy.php"
6672                 ],
6673                 "psr-4": {
6674                     "DeepCopy\\": "src/DeepCopy/"
6675                 }
6676             },
6677             "notification-url": "https://packagist.org/downloads/",
6678             "license": [
6679                 "MIT"
6680             ],
6681             "description": "Create deep copies (clones) of your objects",
6682             "keywords": [
6683                 "clone",
6684                 "copy",
6685                 "duplicate",
6686                 "object",
6687                 "object graph"
6688             ],
6689             "support": {
6690                 "issues": "https://github.com/myclabs/DeepCopy/issues",
6691                 "source": "https://github.com/myclabs/DeepCopy/tree/1.13.4"
6692             },
6693             "funding": [
6694                 {
6695                     "url": "https://tidelift.com/funding/github/packagist/myclabs/deep-copy",
6696                     "type": "tidelift"
6697                 }
6698             ],
6699             "time": "2025-08-01T08:46:24+00:00"
6700         },
6701         {
6702             "name": "nunomaduro/collision",
6703             "version": "v8.9.4",
6704             "source": {
6705                 "type": "git",
6706                 "url": "https://github.com/nunomaduro/collision.git",
6707                 "reference": "716af8f95a470e9094cfca09ed897b023be191a5"
6708             },
6709             "dist": {
6710                 "type": "zip",
6711                 "url": "https://api.github.com/repos/nunomaduro/collision/zipball/716af8f95a470e9094cfca09ed897b023be191a5",
6712                 "reference": "716af8f95a470e9094cfca09ed897b023be191a5",
6713                 "shasum": ""
6714             },
6715             "require": {
6716                 "filp/whoops": "^2.18.4",
6717                 "nunomaduro/termwind": "^2.4.0",
6718                 "php": "^8.2.0",
6719                 "symfony/console": "^7.4.8 || ^8.0.8"
6720             },
6721             "conflict": {
6722                 "laravel/framework": "<11.48.0 || >=14.0.0",
6723                 "phpunit/phpunit": "<11.5.50 || >=14.0.0"
6724             },
6725             "require-dev": {
6726                 "brianium/paratest": "^7.8.5",
6727                 "larastan/larastan": "^3.9.6",
6728                 "laravel/framework": "^11.48.0 || ^12.56.0 || ^13.5.0",
6729                 "laravel/pint": "^1.29.1",
6730                 "orchestra/testbench-core": "^9.12.0 || ^10.12.1 || ^11.2.1",
6731                 "pestphp/pest": "^3.8.5 || ^4.4.3 || ^5.0.0",
6732                 "sebastian/environment": "^7.2.1 || ^8.0.4 || ^9.3.0"
6733             },
6734             "type": "library",
6735             "extra": {
6736                 "laravel": {
6737                     "providers": [
6738                         "NunoMaduro\\Collision\\Adapters\\Laravel\\CollisionServiceProvider"
6739                     ]
6740                 },
6741                 "branch-alias": {
6742                     "dev-8.x": "8.x-dev"
6743                 }
6744             },
6745             "autoload": {
6746                 "files": [
6747                     "./src/Adapters/Phpunit/Autoload.php"
6748                 ],
6749                 "psr-4": {
6750                     "NunoMaduro\\Collision\\": "src/"
6751                 }
6752             },
6753             "notification-url": "https://packagist.org/downloads/",
6754             "license": [
6755                 "MIT"
6756             ],
6757             "authors": [
6758                 {
6759                     "name": "Nuno Maduro",
6760                     "email": "enunomaduro@gmail.com"
6761                 }
6762             ],
6763             "description": "Cli error handling for console/command-line PHP applications.",
6764             "keywords": [
6765                 "artisan",
6766                 "cli",
6767                 "command-line",
6768                 "console",
6769                 "dev",
6770                 "error",
6771                 "handling",
6772                 "laravel",
6773                 "laravel-zero",
6774                 "php",
6775                 "symfony"
6776             ],
6777             "support": {
6778                 "issues": "https://github.com/nunomaduro/collision/issues",
6779                 "source": "https://github.com/nunomaduro/collision"
6780             },
6781             "funding": [
6782                 {
6783                     "url": "https://www.paypal.com/paypalme/enunomaduro",
6784                     "type": "custom"
6785                 },
6786                 {
6787                     "url": "https://github.com/nunomaduro",
6788                     "type": "github"
6789                 },
6790                 {
6791                     "url": "https://www.patreon.com/nunomaduro",
6792                     "type": "patreon"
6793                 }
6794             ],
6795             "time": "2026-04-21T14:04:20+00:00"
6796         },
6797         {
6798             "name": "phar-io/manifest",
6799             "version": "2.0.4",
6800             "source": {
6801                 "type": "git",
6802                 "url": "https://github.com/phar-io/manifest.git",
6803                 "reference": "54750ef60c58e43759730615a392c31c80e23176"
6804             },
6805             "dist": {
6806                 "type": "zip",
6807                 "url": "https://api.github.com/repos/phar-io/manifest/zipball/54750ef60c58e43759730615a392c31c80e23176",
6808                 "reference": "54750ef60c58e43759730615a392c31c80e23176",
6809                 "shasum": ""
6810             },
6811             "require": {
6812                 "ext-dom": "*",
6813                 "ext-libxml": "*",
6814                 "ext-phar": "*",
6815                 "ext-xmlwriter": "*",
6816                 "phar-io/version": "^3.0.1",
6817                 "php": "^7.2 || ^8.0"
6818             },
6819             "type": "library",
6820             "extra": {
6821                 "branch-alias": {
6822                     "dev-master": "2.0.x-dev"
6823                 }
6824             },
6825             "autoload": {
6826                 "classmap": [
6827                     "src/"
6828                 ]
6829             },
6830             "notification-url": "https://packagist.org/downloads/",
6831             "license": [
6832                 "BSD-3-Clause"
6833             ],
6834             "authors": [
6835                 {
6836                     "name": "Arne Blankerts",
6837                     "email": "arne@blankerts.de",
6838                     "role": "Developer"
6839                 },
6840                 {
6841                     "name": "Sebastian Heuer",
6842                     "email": "sebastian@phpeople.de",
6843                     "role": "Developer"
6844                 },
6845                 {
6846                     "name": "Sebastian Bergmann",
6847                     "email": "sebastian@phpunit.de",
6848                     "role": "Developer"
6849                 }
6850             ],
6851             "description": "Component for reading phar.io manifest information from a PHP Archive (PHAR)",
6852             "support": {
6853                 "issues": "https://github.com/phar-io/manifest/issues",
6854                 "source": "https://github.com/phar-io/manifest/tree/2.0.4"
6855             },
6856             "funding": [
6857                 {
6858                     "url": "https://github.com/theseer",
6859                     "type": "github"
6860                 }
6861             ],
6862             "time": "2024-03-03T12:33:53+00:00"
6863         },
6864         {
6865             "name": "phar-io/version",
6866             "version": "3.2.1",
6867             "source": {
6868                 "type": "git",
6869                 "url": "https://github.com/phar-io/version.git",
6870                 "reference": "4f7fd7836c6f332bb2933569e566a0d6c4cbed74"
6871             },
6872             "dist": {
6873                 "type": "zip",
6874                 "url": "https://api.github.com/repos/phar-io/version/zipball/4f7fd7836c6f332bb2933569e566a0d6c4cbed74",
6875                 "reference": "4f7fd7836c6f332bb2933569e566a0d6c4cbed74",
6876                 "shasum": ""
6877             },
6878             "require": {
6879                 "php": "^7.2 || ^8.0"
6880             },
6881             "type": "library",
6882             "autoload": {
6883                 "classmap": [
6884                     "src/"
6885                 ]
6886             },
6887             "notification-url": "https://packagist.org/downloads/",
6888             "license": [
6889                 "BSD-3-Clause"
6890             ],
6891             "authors": [
6892                 {
6893                     "name": "Arne Blankerts",
6894                     "email": "arne@blankerts.de",
6895                     "role": "Developer"
6896                 },
6897                 {
6898                     "name": "Sebastian Heuer",
6899                     "email": "sebastian@phpeople.de",
6900                     "role": "Developer"
6901                 },
6902                 {
6903                     "name": "Sebastian Bergmann",
6904                     "email": "sebastian@phpunit.de",
6905                     "role": "Developer"
6906                 }
6907             ],
6908             "description": "Library for handling version information and constraints",
6909             "support": {
6910                 "issues": "https://github.com/phar-io/version/issues",
6911                 "source": "https://github.com/phar-io/version/tree/3.2.1"
6912             },
6913             "time": "2022-02-21T01:04:05+00:00"
6914         },
6915         {
6916             "name": "phpunit/php-code-coverage",
6917             "version": "12.5.6",
6918             "source": {
6919                 "type": "git",
6920                 "url": "https://github.com/sebastianbergmann/php-code-coverage.git",
6921                 "reference": "876099a072646c7745f673d7aeab5382c4439691"
6922             },
6923             "dist": {
6924                 "type": "zip",
6925                 "url": "https://api.github.com/repos/sebastianbergmann/php-code-coverage/zipball/876099a072646c7745f673d7aeab5382c4439691",
6926                 "reference": "876099a072646c7745f673d7aeab5382c4439691",
6927                 "shasum": ""
6928             },
6929             "require": {
6930                 "ext-dom": "*",
6931                 "ext-libxml": "*",
6932                 "ext-xmlwriter": "*",
6933                 "nikic/php-parser": "^5.7.0",
6934                 "php": ">=8.3",
6935                 "phpunit/php-text-template": "^5.0",
6936                 "sebastian/complexity": "^5.0",
6937                 "sebastian/environment": "^8.0.3",
6938                 "sebastian/lines-of-code": "^4.0",
6939                 "sebastian/version": "^6.0",
6940                 "theseer/tokenizer": "^2.0.1"
6941             },
6942             "require-dev": {
6943                 "phpunit/phpunit": "^12.5.1"
6944             },
6945             "suggest": {
6946                 "ext-pcov": "PHP extension that provides line coverage",
6947                 "ext-xdebug": "PHP extension that provides line coverage as well as branch and path coverage"
6948             },
6949             "type": "library",
6950             "extra": {
6951                 "branch-alias": {
6952                     "dev-main": "12.5.x-dev"
6953                 }
6954             },
6955             "autoload": {
6956                 "classmap": [
6957                     "src/"
6958                 ]
6959             },
6960             "notification-url": "https://packagist.org/downloads/",
6961             "license": [
6962                 "BSD-3-Clause"
6963             ],
6964             "authors": [
6965                 {
6966                     "name": "Sebastian Bergmann",
6967                     "email": "sebastian@phpunit.de",
6968                     "role": "lead"
6969                 }
6970             ],
6971             "description": "Library that provides collection, processing, and rendering functionality for PHP code coverage information.",
6972             "homepage": "https://github.com/sebastianbergmann/php-code-coverage",
6973             "keywords": [
6974                 "coverage",
6975                 "testing",
6976                 "xunit"
6977             ],
6978             "support": {
6979                 "issues": "https://github.com/sebastianbergmann/php-code-coverage/issues",
6980                 "security": "https://github.com/sebastianbergmann/php-code-coverage/security/policy",
6981                 "source": "https://github.com/sebastianbergmann/php-code-coverage/tree/12.5.6"
6982             },
6983             "funding": [
6984                 {
6985                     "url": "https://github.com/sebastianbergmann",
6986                     "type": "github"
6987                 },
6988                 {
6989                     "url": "https://liberapay.com/sebastianbergmann",
6990                     "type": "liberapay"
6991                 },
6992                 {
6993                     "url": "https://thanks.dev/u/gh/sebastianbergmann",
6994                     "type": "thanks_dev"
6995                 },
6996                 {
6997                     "url": "https://tidelift.com/funding/github/packagist/phpunit/php-code-coverage",
6998                     "type": "tidelift"
6999                 }
7000             ],
7001             "time": "2026-04-15T08:23:17+00:00"
7002         },
7003         {
7004             "name": "phpunit/php-file-iterator",
7005             "version": "6.0.1",
7006             "source": {
7007                 "type": "git",
7008                 "url": "https://github.com/sebastianbergmann/php-file-iterator.git",
7009                 "reference": "3d1cd096ef6bea4bf2762ba586e35dbd317cbfd5"
7010             },
7011             "dist": {
7012                 "type": "zip",
7013                 "url": "https://api.github.com/repos/sebastianbergmann/php-file-iterator/zipball/3d1cd096ef6bea4bf2762ba586e35dbd317cbfd5",
7014                 "reference": "3d1cd096ef6bea4bf2762ba586e35dbd317cbfd5",
7015                 "shasum": ""
7016             },
7017             "require": {
7018                 "php": ">=8.3"
7019             },
7020             "require-dev": {
7021                 "phpunit/phpunit": "^12.0"
7022             },
7023             "type": "library",
7024             "extra": {
7025                 "branch-alias": {
7026                     "dev-main": "6.0-dev"
7027                 }
7028             },
7029             "autoload": {
7030                 "classmap": [
7031                     "src/"
7032                 ]
7033             },
7034             "notification-url": "https://packagist.org/downloads/",
7035             "license": [
7036                 "BSD-3-Clause"
7037             ],
7038             "authors": [
7039                 {
7040                     "name": "Sebastian Bergmann",
7041                     "email": "sebastian@phpunit.de",
7042                     "role": "lead"
7043                 }
7044             ],
7045             "description": "FilterIterator implementation that filters files based on a list of suffixes.",
7046             "homepage": "https://github.com/sebastianbergmann/php-file-iterator/",
7047             "keywords": [
7048                 "filesystem",
7049                 "iterator"
7050             ],
7051             "support": {
7052                 "issues": "https://github.com/sebastianbergmann/php-file-iterator/issues",
7053                 "security": "https://github.com/sebastianbergmann/php-file-iterator/security/policy",
7054                 "source": "https://github.com/sebastianbergmann/php-file-iterator/tree/6.0.1"
7055             },
7056             "funding": [
7057                 {
7058                     "url": "https://github.com/sebastianbergmann",
7059                     "type": "github"
7060                 },
7061                 {
7062                     "url": "https://liberapay.com/sebastianbergmann",
7063                     "type": "liberapay"
7064                 },
7065                 {
7066                     "url": "https://thanks.dev/u/gh/sebastianbergmann",
7067                     "type": "thanks_dev"
7068                 },
7069                 {
7070                     "url": "https://tidelift.com/funding/github/packagist/phpunit/php-file-iterator",
7071                     "type": "tidelift"
7072                 }
7073             ],
7074             "time": "2026-02-02T14:04:18+00:00"
7075         },
7076         {
7077             "name": "phpunit/php-invoker",
7078             "version": "6.0.0",
7079             "source": {
7080                 "type": "git",
7081                 "url": "https://github.com/sebastianbergmann/php-invoker.git",
7082                 "reference": "12b54e689b07a25a9b41e57736dfab6ec9ae5406"
7083             },
7084             "dist": {
7085                 "type": "zip",
7086                 "url": "https://api.github.com/repos/sebastianbergmann/php-invoker/zipball/12b54e689b07a25a9b41e57736dfab6ec9ae5406",
7087                 "reference": "12b54e689b07a25a9b41e57736dfab6ec9ae5406",
7088                 "shasum": ""
7089             },
7090             "require": {
7091                 "php": ">=8.3"
7092             },
7093             "require-dev": {
7094                 "ext-pcntl": "*",
7095                 "phpunit/phpunit": "^12.0"
7096             },
7097             "suggest": {
7098                 "ext-pcntl": "*"
7099             },
7100             "type": "library",
7101             "extra": {
7102                 "branch-alias": {
7103                     "dev-main": "6.0-dev"
7104                 }
7105             },
7106             "autoload": {
7107                 "classmap": [
7108                     "src/"
7109                 ]
7110             },
7111             "notification-url": "https://packagist.org/downloads/",
7112             "license": [
7113                 "BSD-3-Clause"
7114             ],
7115             "authors": [
7116                 {
7117                     "name": "Sebastian Bergmann",
7118                     "email": "sebastian@phpunit.de",
7119                     "role": "lead"
7120                 }
7121             ],
7122             "description": "Invoke callables with a timeout",
7123             "homepage": "https://github.com/sebastianbergmann/php-invoker/",
7124             "keywords": [
7125                 "process"
7126             ],
7127             "support": {
7128                 "issues": "https://github.com/sebastianbergmann/php-invoker/issues",
7129                 "security": "https://github.com/sebastianbergmann/php-invoker/security/policy",
7130                 "source": "https://github.com/sebastianbergmann/php-invoker/tree/6.0.0"
7131             },
7132             "funding": [
7133                 {
7134                     "url": "https://github.com/sebastianbergmann",
7135                     "type": "github"
7136                 }
7137             ],
7138             "time": "2025-02-07T04:58:58+00:00"
7139         },
7140         {
7141             "name": "phpunit/php-text-template",
7142             "version": "5.0.0",
7143             "source": {
7144                 "type": "git",
7145                 "url": "https://github.com/sebastianbergmann/php-text-template.git",
7146                 "reference": "e1367a453f0eda562eedb4f659e13aa900d66c53"
7147             },
7148             "dist": {
7149                 "type": "zip",
7150                 "url": "https://api.github.com/repos/sebastianbergmann/php-text-template/zipball/e1367a453f0eda562eedb4f659e13aa900d66c53",
7151                 "reference": "e1367a453f0eda562eedb4f659e13aa900d66c53",
7152                 "shasum": ""
7153             },
7154             "require": {
7155                 "php": ">=8.3"
7156             },
7157             "require-dev": {
7158                 "phpunit/phpunit": "^12.0"
7159             },
7160             "type": "library",
7161             "extra": {
7162                 "branch-alias": {
7163                     "dev-main": "5.0-dev"
7164                 }
7165             },
7166             "autoload": {
7167                 "classmap": [
7168                     "src/"
7169                 ]
7170             },
7171             "notification-url": "https://packagist.org/downloads/",
7172             "license": [
7173                 "BSD-3-Clause"
7174             ],
7175             "authors": [
7176                 {
7177                     "name": "Sebastian Bergmann",
7178                     "email": "sebastian@phpunit.de",
7179                     "role": "lead"
7180                 }
7181             ],
7182             "description": "Simple template engine.",
7183             "homepage": "https://github.com/sebastianbergmann/php-text-template/",
7184             "keywords": [
7185                 "template"
7186             ],
7187             "support": {
7188                 "issues": "https://github.com/sebastianbergmann/php-text-template/issues",
7189                 "security": "https://github.com/sebastianbergmann/php-text-template/security/policy",
7190                 "source": "https://github.com/sebastianbergmann/php-text-template/tree/5.0.0"
7191             },
7192             "funding": [
7193                 {
7194                     "url": "https://github.com/sebastianbergmann",
7195                     "type": "github"
7196                 }
7197             ],
7198             "time": "2025-02-07T04:59:16+00:00"
7199         },
7200         {
7201             "name": "phpunit/php-timer",
7202             "version": "8.0.0",
7203             "source": {
7204                 "type": "git",
7205                 "url": "https://github.com/sebastianbergmann/php-timer.git",
7206                 "reference": "f258ce36aa457f3aa3339f9ed4c81fc66dc8c2cc"
7207             },
7208             "dist": {
7209                 "type": "zip",
7210                 "url": "https://api.github.com/repos/sebastianbergmann/php-timer/zipball/f258ce36aa457f3aa3339f9ed4c81fc66dc8c2cc",
7211                 "reference": "f258ce36aa457f3aa3339f9ed4c81fc66dc8c2cc",
7212                 "shasum": ""
7213             },
7214             "require": {
7215                 "php": ">=8.3"
7216             },
7217             "require-dev": {
7218                 "phpunit/phpunit": "^12.0"
7219             },
7220             "type": "library",
7221             "extra": {
7222                 "branch-alias": {
7223                     "dev-main": "8.0-dev"
7224                 }
7225             },
7226             "autoload": {
7227                 "classmap": [
7228                     "src/"
7229                 ]
7230             },
7231             "notification-url": "https://packagist.org/downloads/",
7232             "license": [
7233                 "BSD-3-Clause"
7234             ],
7235             "authors": [
7236                 {
7237                     "name": "Sebastian Bergmann",
7238                     "email": "sebastian@phpunit.de",
7239                     "role": "lead"
7240                 }
7241             ],
7242             "description": "Utility class for timing",
7243             "homepage": "https://github.com/sebastianbergmann/php-timer/",
7244             "keywords": [
7245                 "timer"
7246             ],
7247             "support": {
7248                 "issues": "https://github.com/sebastianbergmann/php-timer/issues",
7249                 "security": "https://github.com/sebastianbergmann/php-timer/security/policy",
7250                 "source": "https://github.com/sebastianbergmann/php-timer/tree/8.0.0"
7251             },
7252             "funding": [
7253                 {
7254                     "url": "https://github.com/sebastianbergmann",
7255                     "type": "github"
7256                 }
7257             ],
7258             "time": "2025-02-07T04:59:38+00:00"
7259         },
7260         {
7261             "name": "phpunit/phpunit",
7262             "version": "12.5.23",
7263             "source": {
7264                 "type": "git",
7265                 "url": "https://github.com/sebastianbergmann/phpunit.git",
7266                 "reference": "c54fcf3d6bcb6e96ac2f7e40097dc37b5f139969"
7267             },
7268             "dist": {
7269                 "type": "zip",
7270                 "url": "https://api.github.com/repos/sebastianbergmann/phpunit/zipball/c54fcf3d6bcb6e96ac2f7e40097dc37b5f139969",
7271                 "reference": "c54fcf3d6bcb6e96ac2f7e40097dc37b5f139969",
7272                 "shasum": ""
7273             },
7274             "require": {
7275                 "ext-dom": "*",
7276                 "ext-json": "*",
7277                 "ext-libxml": "*",
7278                 "ext-mbstring": "*",
7279                 "ext-xml": "*",
7280                 "ext-xmlwriter": "*",
7281                 "myclabs/deep-copy": "^1.13.4",
7282                 "phar-io/manifest": "^2.0.4",
7283                 "phar-io/version": "^3.2.1",
7284                 "php": ">=8.3",
7285                 "phpunit/php-code-coverage": "^12.5.6",
7286                 "phpunit/php-file-iterator": "^6.0.1",
7287                 "phpunit/php-invoker": "^6.0.0",
7288                 "phpunit/php-text-template": "^5.0.0",
7289                 "phpunit/php-timer": "^8.0.0",
7290                 "sebastian/cli-parser": "^4.2.0",
7291                 "sebastian/comparator": "^7.1.6",
7292                 "sebastian/diff": "^7.0.0",
7293                 "sebastian/environment": "^8.1.0",
7294                 "sebastian/exporter": "^7.0.2",
7295                 "sebastian/global-state": "^8.0.2",
7296                 "sebastian/object-enumerator": "^7.0.0",
7297                 "sebastian/recursion-context": "^7.0.1",
7298                 "sebastian/type": "^6.0.3",
7299                 "sebastian/version": "^6.0.0",
7300                 "staabm/side-effects-detector": "^1.0.5"
7301             },
7302             "bin": [
7303                 "phpunit"
7304             ],
7305             "type": "library",
7306             "extra": {
7307                 "branch-alias": {
7308                     "dev-main": "12.5-dev"
7309                 }
7310             },
7311             "autoload": {
7312                 "files": [
7313                     "src/Framework/Assert/Functions.php"
7314                 ],
7315                 "classmap": [
7316                     "src/"
7317                 ]
7318             },
7319             "notification-url": "https://packagist.org/downloads/",
7320             "license": [
7321                 "BSD-3-Clause"
7322             ],
7323             "authors": [
7324                 {
7325                     "name": "Sebastian Bergmann",
7326                     "email": "sebastian@phpunit.de",
7327                     "role": "lead"
7328                 }
7329             ],
7330             "description": "The PHP Unit Testing framework.",
7331             "homepage": "https://phpunit.de/",
7332             "keywords": [
7333                 "phpunit",
7334                 "testing",
7335                 "xunit"
7336             ],
7337             "support": {
7338                 "issues": "https://github.com/sebastianbergmann/phpunit/issues",
7339                 "security": "https://github.com/sebastianbergmann/phpunit/security/policy",
7340                 "source": "https://github.com/sebastianbergmann/phpunit/tree/12.5.23"
7341             },
7342             "funding": [
7343                 {
7344                     "url": "https://phpunit.de/sponsoring.html",
7345                     "type": "other"
7346                 }
7347             ],
7348             "time": "2026-04-18T06:12:49+00:00"
7349         },
7350         {
7351             "name": "sebastian/cli-parser",
7352             "version": "4.2.0",
7353             "source": {
7354                 "type": "git",
7355                 "url": "https://github.com/sebastianbergmann/cli-parser.git",
7356                 "reference": "90f41072d220e5c40df6e8635f5dafba2d9d4d04"
7357             },
7358             "dist": {
7359                 "type": "zip",
7360                 "url": "https://api.github.com/repos/sebastianbergmann/cli-parser/zipball/90f41072d220e5c40df6e8635f5dafba2d9d4d04",
7361                 "reference": "90f41072d220e5c40df6e8635f5dafba2d9d4d04",
7362                 "shasum": ""
7363             },
7364             "require": {
7365                 "php": ">=8.3"
7366             },
7367             "require-dev": {
7368                 "phpunit/phpunit": "^12.0"
7369             },
7370             "type": "library",
7371             "extra": {
7372                 "branch-alias": {
7373                     "dev-main": "4.2-dev"
7374                 }
7375             },
7376             "autoload": {
7377                 "classmap": [
7378                     "src/"
7379                 ]
7380             },
7381             "notification-url": "https://packagist.org/downloads/",
7382             "license": [
7383                 "BSD-3-Clause"
7384             ],
7385             "authors": [
7386                 {
7387                     "name": "Sebastian Bergmann",
7388                     "email": "sebastian@phpunit.de",
7389                     "role": "lead"
7390                 }
7391             ],
7392             "description": "Library for parsing CLI options",
7393             "homepage": "https://github.com/sebastianbergmann/cli-parser",
7394             "support": {
7395                 "issues": "https://github.com/sebastianbergmann/cli-parser/issues",
7396                 "security": "https://github.com/sebastianbergmann/cli-parser/security/policy",
7397                 "source": "https://github.com/sebastianbergmann/cli-parser/tree/4.2.0"
7398             },
7399             "funding": [
7400                 {
7401                     "url": "https://github.com/sebastianbergmann",
7402                     "type": "github"
7403                 },
7404                 {
7405                     "url": "https://liberapay.com/sebastianbergmann",
7406                     "type": "liberapay"
7407                 },
7408                 {
7409                     "url": "https://thanks.dev/u/gh/sebastianbergmann",
7410                     "type": "thanks_dev"
7411                 },
7412                 {
7413                     "url": "https://tidelift.com/funding/github/packagist/sebastian/cli-parser",
7414                     "type": "tidelift"
7415                 }
7416             ],
7417             "time": "2025-09-14T09:36:45+00:00"
7418         },
7419         {
7420             "name": "sebastian/comparator",
7421             "version": "7.1.6",
7422             "source": {
7423                 "type": "git",
7424                 "url": "https://github.com/sebastianbergmann/comparator.git",
7425                 "reference": "c769009dee98f494e0edc3fd4f4087501688f11e"
7426             },
7427             "dist": {
7428                 "type": "zip",
7429                 "url": "https://api.github.com/repos/sebastianbergmann/comparator/zipball/c769009dee98f494e0edc3fd4f4087501688f11e",
7430                 "reference": "c769009dee98f494e0edc3fd4f4087501688f11e",
7431                 "shasum": ""
7432             },
7433             "require": {
7434                 "ext-dom": "*",
7435                 "ext-mbstring": "*",
7436                 "php": ">=8.3",
7437                 "sebastian/diff": "^7.0",
7438                 "sebastian/exporter": "^7.0"
7439             },
7440             "require-dev": {
7441                 "phpunit/phpunit": "^12.2"
7442             },
7443             "suggest": {
7444                 "ext-bcmath": "For comparing BcMath\\Number objects"
7445             },
7446             "type": "library",
7447             "extra": {
7448                 "branch-alias": {
7449                     "dev-main": "7.1-dev"
7450                 }
7451             },
7452             "autoload": {
7453                 "classmap": [
7454                     "src/"
7455                 ]
7456             },
7457             "notification-url": "https://packagist.org/downloads/",
7458             "license": [
7459                 "BSD-3-Clause"
7460             ],
7461             "authors": [
7462                 {
7463                     "name": "Sebastian Bergmann",
7464                     "email": "sebastian@phpunit.de"
7465                 },
7466                 {
7467                     "name": "Jeff Welch",
7468                     "email": "whatthejeff@gmail.com"
7469                 },
7470                 {
7471                     "name": "Volker Dusch",
7472                     "email": "github@wallbash.com"
7473                 },
7474                 {
7475                     "name": "Bernhard Schussek",
7476                     "email": "bschussek@2bepublished.at"
7477                 }
7478             ],
7479             "description": "Provides the functionality to compare PHP values for equality",
7480             "homepage": "https://github.com/sebastianbergmann/comparator",
7481             "keywords": [
7482                 "comparator",
7483                 "compare",
7484                 "equality"
7485             ],
7486             "support": {
7487                 "issues": "https://github.com/sebastianbergmann/comparator/issues",
7488                 "security": "https://github.com/sebastianbergmann/comparator/security/policy",
7489                 "source": "https://github.com/sebastianbergmann/comparator/tree/7.1.6"
7490             },
7491             "funding": [
7492                 {
7493                     "url": "https://github.com/sebastianbergmann",
7494                     "type": "github"
7495                 },
7496                 {
7497                     "url": "https://liberapay.com/sebastianbergmann",
7498                     "type": "liberapay"
7499                 },
7500                 {
7501                     "url": "https://thanks.dev/u/gh/sebastianbergmann",
7502                     "type": "thanks_dev"
7503                 },
7504                 {
7505                     "url": "https://tidelift.com/funding/github/packagist/sebastian/comparator",
7506                     "type": "tidelift"
7507                 }
7508             ],
7509             "time": "2026-04-14T08:23:15+00:00"
7510         },
7511         {
7512             "name": "sebastian/complexity",
7513             "version": "5.0.0",
7514             "source": {
7515                 "type": "git",
7516                 "url": "https://github.com/sebastianbergmann/complexity.git",
7517                 "reference": "bad4316aba5303d0221f43f8cee37eb58d384bbb"
7518             },
7519             "dist": {
7520                 "type": "zip",
7521                 "url": "https://api.github.com/repos/sebastianbergmann/complexity/zipball/bad4316aba5303d0221f43f8cee37eb58d384bbb",
7522                 "reference": "bad4316aba5303d0221f43f8cee37eb58d384bbb",
7523                 "shasum": ""
7524             },
7525             "require": {
7526                 "nikic/php-parser": "^5.0",
7527                 "php": ">=8.3"
7528             },
7529             "require-dev": {
7530                 "phpunit/phpunit": "^12.0"
7531             },
7532             "type": "library",
7533             "extra": {
7534                 "branch-alias": {
7535                     "dev-main": "5.0-dev"
7536                 }
7537             },
7538             "autoload": {
7539                 "classmap": [
7540                     "src/"
7541                 ]
7542             },
7543             "notification-url": "https://packagist.org/downloads/",
7544             "license": [
7545                 "BSD-3-Clause"
7546             ],
7547             "authors": [
7548                 {
7549                     "name": "Sebastian Bergmann",
7550                     "email": "sebastian@phpunit.de",
7551                     "role": "lead"
7552                 }
7553             ],
7554             "description": "Library for calculating the complexity of PHP code units",
7555             "homepage": "https://github.com/sebastianbergmann/complexity",
7556             "support": {
7557                 "issues": "https://github.com/sebastianbergmann/complexity/issues",
7558                 "security": "https://github.com/sebastianbergmann/complexity/security/policy",
7559                 "source": "https://github.com/sebastianbergmann/complexity/tree/5.0.0"
7560             },
7561             "funding": [
7562                 {
7563                     "url": "https://github.com/sebastianbergmann",
7564                     "type": "github"
7565                 }
7566             ],
7567             "time": "2025-02-07T04:55:25+00:00"
7568         },
7569         {
7570             "name": "sebastian/diff",
7571             "version": "7.0.0",
7572             "source": {
7573                 "type": "git",
7574                 "url": "https://github.com/sebastianbergmann/diff.git",
7575                 "reference": "7ab1ea946c012266ca32390913653d844ecd085f"
7576             },
7577             "dist": {
7578                 "type": "zip",
7579                 "url": "https://api.github.com/repos/sebastianbergmann/diff/zipball/7ab1ea946c012266ca32390913653d844ecd085f",
7580                 "reference": "7ab1ea946c012266ca32390913653d844ecd085f",
7581                 "shasum": ""
7582             },
7583             "require": {
7584                 "php": ">=8.3"
7585             },
7586             "require-dev": {
7587                 "phpunit/phpunit": "^12.0",
7588                 "symfony/process": "^7.2"
7589             },
7590             "type": "library",
7591             "extra": {
7592                 "branch-alias": {
7593                     "dev-main": "7.0-dev"
7594                 }
7595             },
7596             "autoload": {
7597                 "classmap": [
7598                     "src/"
7599                 ]
7600             },
7601             "notification-url": "https://packagist.org/downloads/",
7602             "license": [
7603                 "BSD-3-Clause"
7604             ],
7605             "authors": [
7606                 {
7607                     "name": "Sebastian Bergmann",
7608                     "email": "sebastian@phpunit.de"
7609                 },
7610                 {
7611                     "name": "Kore Nordmann",
7612                     "email": "mail@kore-nordmann.de"
7613                 }
7614             ],
7615             "description": "Diff implementation",
7616             "homepage": "https://github.com/sebastianbergmann/diff",
7617             "keywords": [
7618                 "diff",
7619                 "udiff",
7620                 "unidiff",
7621                 "unified diff"
7622             ],
7623             "support": {
7624                 "issues": "https://github.com/sebastianbergmann/diff/issues",
7625                 "security": "https://github.com/sebastianbergmann/diff/security/policy",
7626                 "source": "https://github.com/sebastianbergmann/diff/tree/7.0.0"
7627             },
7628             "funding": [
7629                 {
7630                     "url": "https://github.com/sebastianbergmann",
7631                     "type": "github"
7632                 }
7633             ],
7634             "time": "2025-02-07T04:55:46+00:00"
7635         },
7636         {
7637             "name": "sebastian/environment",
7638             "version": "8.1.0",
7639             "source": {
7640                 "type": "git",
7641                 "url": "https://github.com/sebastianbergmann/environment.git",
7642                 "reference": "b121608b28a13f721e76ffbbd386d08eff58f3f6"
7643             },
7644             "dist": {
7645                 "type": "zip",
7646                 "url": "https://api.github.com/repos/sebastianbergmann/environment/zipball/b121608b28a13f721e76ffbbd386d08eff58f3f6",
7647                 "reference": "b121608b28a13f721e76ffbbd386d08eff58f3f6",
7648                 "shasum": ""
7649             },
7650             "require": {
7651                 "php": ">=8.3"
7652             },
7653             "require-dev": {
7654                 "phpunit/phpunit": "^12.0"
7655             },
7656             "suggest": {
7657                 "ext-posix": "*"
7658             },
7659             "type": "library",
7660             "extra": {
7661                 "branch-alias": {
7662                     "dev-main": "8.1-dev"
7663                 }
7664             },
7665             "autoload": {
7666                 "classmap": [
7667                     "src/"
7668                 ]
7669             },
7670             "notification-url": "https://packagist.org/downloads/",
7671             "license": [
7672                 "BSD-3-Clause"
7673             ],
7674             "authors": [
7675                 {
7676                     "name": "Sebastian Bergmann",
7677                     "email": "sebastian@phpunit.de"
7678                 }
7679             ],
7680             "description": "Provides functionality to handle HHVM/PHP environments",
7681             "homepage": "https://github.com/sebastianbergmann/environment",
7682             "keywords": [
7683                 "Xdebug",
7684                 "environment",
7685                 "hhvm"
7686             ],
7687             "support": {
7688                 "issues": "https://github.com/sebastianbergmann/environment/issues",
7689                 "security": "https://github.com/sebastianbergmann/environment/security/policy",
7690                 "source": "https://github.com/sebastianbergmann/environment/tree/8.1.0"
7691             },
7692             "funding": [
7693                 {
7694                     "url": "https://github.com/sebastianbergmann",
7695                     "type": "github"
7696                 },
7697                 {
7698                     "url": "https://liberapay.com/sebastianbergmann",
7699                     "type": "liberapay"
7700                 },
7701                 {
7702                     "url": "https://thanks.dev/u/gh/sebastianbergmann",
7703                     "type": "thanks_dev"
7704                 },
7705                 {
7706                     "url": "https://tidelift.com/funding/github/packagist/sebastian/environment",
7707                     "type": "tidelift"
7708                 }
7709             ],
7710             "time": "2026-04-15T12:13:01+00:00"
7711         },
7712         {
7713             "name": "sebastian/exporter",
7714             "version": "7.0.2",
7715             "source": {
7716                 "type": "git",
7717                 "url": "https://github.com/sebastianbergmann/exporter.git",
7718                 "reference": "016951ae10980765e4e7aee491eb288c64e505b7"
7719             },
7720             "dist": {
7721                 "type": "zip",
7722                 "url": "https://api.github.com/repos/sebastianbergmann/exporter/zipball/016951ae10980765e4e7aee491eb288c64e505b7",
7723                 "reference": "016951ae10980765e4e7aee491eb288c64e505b7",
7724                 "shasum": ""
7725             },
7726             "require": {
7727                 "ext-mbstring": "*",
7728                 "php": ">=8.3",
7729                 "sebastian/recursion-context": "^7.0"
7730             },
7731             "require-dev": {
7732                 "phpunit/phpunit": "^12.0"
7733             },
7734             "type": "library",
7735             "extra": {
7736                 "branch-alias": {
7737                     "dev-main": "7.0-dev"
7738                 }
7739             },
7740             "autoload": {
7741                 "classmap": [
7742                     "src/"
7743                 ]
7744             },
7745             "notification-url": "https://packagist.org/downloads/",
7746             "license": [
7747                 "BSD-3-Clause"
7748             ],
7749             "authors": [
7750                 {
7751                     "name": "Sebastian Bergmann",
7752                     "email": "sebastian@phpunit.de"
7753                 },
7754                 {
7755                     "name": "Jeff Welch",
7756                     "email": "whatthejeff@gmail.com"
7757                 },
7758                 {
7759                     "name": "Volker Dusch",
7760                     "email": "github@wallbash.com"
7761                 },
7762                 {
7763                     "name": "Adam Harvey",
7764                     "email": "aharvey@php.net"
7765                 },
7766                 {
7767                     "name": "Bernhard Schussek",
7768                     "email": "bschussek@gmail.com"
7769                 }
7770             ],
7771             "description": "Provides the functionality to export PHP variables for visualization",
7772             "homepage": "https://www.github.com/sebastianbergmann/exporter",
7773             "keywords": [
7774                 "export",
7775                 "exporter"
7776             ],
7777             "support": {
7778                 "issues": "https://github.com/sebastianbergmann/exporter/issues",
7779                 "security": "https://github.com/sebastianbergmann/exporter/security/policy",
7780                 "source": "https://github.com/sebastianbergmann/exporter/tree/7.0.2"
7781             },
7782             "funding": [
7783                 {
7784                     "url": "https://github.com/sebastianbergmann",
7785                     "type": "github"
7786                 },
7787                 {
7788                     "url": "https://liberapay.com/sebastianbergmann",
7789                     "type": "liberapay"
7790                 },
7791                 {
7792                     "url": "https://thanks.dev/u/gh/sebastianbergmann",
7793                     "type": "thanks_dev"
7794                 },
7795                 {
7796                     "url": "https://tidelift.com/funding/github/packagist/sebastian/exporter",
7797                     "type": "tidelift"
7798                 }
7799             ],
7800             "time": "2025-09-24T06:16:11+00:00"
7801         },
7802         {
7803             "name": "sebastian/global-state",
7804             "version": "8.0.2",
7805             "source": {
7806                 "type": "git",
7807                 "url": "https://github.com/sebastianbergmann/global-state.git",
7808                 "reference": "ef1377171613d09edd25b7816f05be8313f9115d"
7809             },
7810             "dist": {
7811                 "type": "zip",
7812                 "url": "https://api.github.com/repos/sebastianbergmann/global-state/zipball/ef1377171613d09edd25b7816f05be8313f9115d",
7813                 "reference": "ef1377171613d09edd25b7816f05be8313f9115d",
7814                 "shasum": ""
7815             },
7816             "require": {
7817                 "php": ">=8.3",
7818                 "sebastian/object-reflector": "^5.0",
7819                 "sebastian/recursion-context": "^7.0"
7820             },
7821             "require-dev": {
7822                 "ext-dom": "*",
7823                 "phpunit/phpunit": "^12.0"
7824             },
7825             "type": "library",
7826             "extra": {
7827                 "branch-alias": {
7828                     "dev-main": "8.0-dev"
7829                 }
7830             },
7831             "autoload": {
7832                 "classmap": [
7833                     "src/"
7834                 ]
7835             },
7836             "notification-url": "https://packagist.org/downloads/",
7837             "license": [
7838                 "BSD-3-Clause"
7839             ],
7840             "authors": [
7841                 {
7842                     "name": "Sebastian Bergmann",
7843                     "email": "sebastian@phpunit.de"
7844                 }
7845             ],
7846             "description": "Snapshotting of global state",
7847             "homepage": "https://www.github.com/sebastianbergmann/global-state",
7848             "keywords": [
7849                 "global state"
7850             ],
7851             "support": {
7852                 "issues": "https://github.com/sebastianbergmann/global-state/issues",
7853                 "security": "https://github.com/sebastianbergmann/global-state/security/policy",
7854                 "source": "https://github.com/sebastianbergmann/global-state/tree/8.0.2"
7855             },
7856             "funding": [
7857                 {
7858                     "url": "https://github.com/sebastianbergmann",
7859                     "type": "github"
7860                 },
7861                 {
7862                     "url": "https://liberapay.com/sebastianbergmann",
7863                     "type": "liberapay"
7864                 },
7865                 {
7866                     "url": "https://thanks.dev/u/gh/sebastianbergmann",
7867                     "type": "thanks_dev"
7868                 },
7869                 {
7870                     "url": "https://tidelift.com/funding/github/packagist/sebastian/global-state",
7871                     "type": "tidelift"
7872                 }
7873             ],
7874             "time": "2025-08-29T11:29:25+00:00"
7875         },
7876         {
7877             "name": "sebastian/lines-of-code",
7878             "version": "4.0.0",
7879             "source": {
7880                 "type": "git",
7881                 "url": "https://github.com/sebastianbergmann/lines-of-code.git",
7882                 "reference": "97ffee3bcfb5805568d6af7f0f893678fc076d2f"
7883             },
7884             "dist": {
7885                 "type": "zip",
7886                 "url": "https://api.github.com/repos/sebastianbergmann/lines-of-code/zipball/97ffee3bcfb5805568d6af7f0f893678fc076d2f",
7887                 "reference": "97ffee3bcfb5805568d6af7f0f893678fc076d2f",
7888                 "shasum": ""
7889             },
7890             "require": {
7891                 "nikic/php-parser": "^5.0",
7892                 "php": ">=8.3"
7893             },
7894             "require-dev": {
7895                 "phpunit/phpunit": "^12.0"
7896             },
7897             "type": "library",
7898             "extra": {
7899                 "branch-alias": {
7900                     "dev-main": "4.0-dev"
7901                 }
7902             },
7903             "autoload": {
7904                 "classmap": [
7905                     "src/"
7906                 ]
7907             },
7908             "notification-url": "https://packagist.org/downloads/",
7909             "license": [
7910                 "BSD-3-Clause"
7911             ],
7912             "authors": [
7913                 {
7914                     "name": "Sebastian Bergmann",
7915                     "email": "sebastian@phpunit.de",
7916                     "role": "lead"
7917                 }
7918             ],
7919             "description": "Library for counting the lines of code in PHP source code",
7920             "homepage": "https://github.com/sebastianbergmann/lines-of-code",
7921             "support": {
7922                 "issues": "https://github.com/sebastianbergmann/lines-of-code/issues",
7923                 "security": "https://github.com/sebastianbergmann/lines-of-code/security/policy",
7924                 "source": "https://github.com/sebastianbergmann/lines-of-code/tree/4.0.0"
7925             },
7926             "funding": [
7927                 {
7928                     "url": "https://github.com/sebastianbergmann",
7929                     "type": "github"
7930                 }
7931             ],
7932             "time": "2025-02-07T04:57:28+00:00"
7933         },
7934         {
7935             "name": "sebastian/object-enumerator",
7936             "version": "7.0.0",
7937             "source": {
7938                 "type": "git",
7939                 "url": "https://github.com/sebastianbergmann/object-enumerator.git",
7940                 "reference": "1effe8e9b8e068e9ae228e542d5d11b5d16db894"
7941             },
7942             "dist": {
7943                 "type": "zip",
7944                 "url": "https://api.github.com/repos/sebastianbergmann/object-enumerator/zipball/1effe8e9b8e068e9ae228e542d5d11b5d16db894",
7945                 "reference": "1effe8e9b8e068e9ae228e542d5d11b5d16db894",
7946                 "shasum": ""
7947             },
7948             "require": {
7949                 "php": ">=8.3",
7950                 "sebastian/object-reflector": "^5.0",
7951                 "sebastian/recursion-context": "^7.0"
7952             },
7953             "require-dev": {
7954                 "phpunit/phpunit": "^12.0"
7955             },
7956             "type": "library",
7957             "extra": {
7958                 "branch-alias": {
7959                     "dev-main": "7.0-dev"
7960                 }
7961             },
7962             "autoload": {
7963                 "classmap": [
7964                     "src/"
7965                 ]
7966             },
7967             "notification-url": "https://packagist.org/downloads/",
7968             "license": [
7969                 "BSD-3-Clause"
7970             ],
7971             "authors": [
7972                 {
7973                     "name": "Sebastian Bergmann",
7974                     "email": "sebastian@phpunit.de"
7975                 }
7976             ],
7977             "description": "Traverses array structures and object graphs to enumerate all referenced objects",
7978             "homepage": "https://github.com/sebastianbergmann/object-enumerator/",
7979             "support": {
7980                 "issues": "https://github.com/sebastianbergmann/object-enumerator/issues",
7981                 "security": "https://github.com/sebastianbergmann/object-enumerator/security/policy",
7982                 "source": "https://github.com/sebastianbergmann/object-enumerator/tree/7.0.0"
7983             },
7984             "funding": [
7985                 {
7986                     "url": "https://github.com/sebastianbergmann",
7987                     "type": "github"
7988                 }
7989             ],
7990             "time": "2025-02-07T04:57:48+00:00"
7991         },
7992         {
7993             "name": "sebastian/object-reflector",
7994             "version": "5.0.0",
7995             "source": {
7996                 "type": "git",
7997                 "url": "https://github.com/sebastianbergmann/object-reflector.git",
7998                 "reference": "4bfa827c969c98be1e527abd576533293c634f6a"
7999             },
8000             "dist": {
8001                 "type": "zip",
8002                 "url": "https://api.github.com/repos/sebastianbergmann/object-reflector/zipball/4bfa827c969c98be1e527abd576533293c634f6a",
8003                 "reference": "4bfa827c969c98be1e527abd576533293c634f6a",
8004                 "shasum": ""
8005             },
8006             "require": {
8007                 "php": ">=8.3"
8008             },
8009             "require-dev": {
8010                 "phpunit/phpunit": "^12.0"
8011             },
8012             "type": "library",
8013             "extra": {
8014                 "branch-alias": {
8015                     "dev-main": "5.0-dev"
8016                 }
8017             },
8018             "autoload": {
8019                 "classmap": [
8020                     "src/"
8021                 ]
8022             },
8023             "notification-url": "https://packagist.org/downloads/",
8024             "license": [
8025                 "BSD-3-Clause"
8026             ],
8027             "authors": [
8028                 {
8029                     "name": "Sebastian Bergmann",
8030                     "email": "sebastian@phpunit.de"
8031                 }
8032             ],
8033             "description": "Allows reflection of object attributes, including inherited and non-public ones",
8034             "homepage": "https://github.com/sebastianbergmann/object-reflector/",
8035             "support": {
8036                 "issues": "https://github.com/sebastianbergmann/object-reflector/issues",
8037                 "security": "https://github.com/sebastianbergmann/object-reflector/security/policy",
8038                 "source": "https://github.com/sebastianbergmann/object-reflector/tree/5.0.0"
8039             },
8040             "funding": [
8041                 {
8042                     "url": "https://github.com/sebastianbergmann",
8043                     "type": "github"
8044                 }
8045             ],
8046             "time": "2025-02-07T04:58:17+00:00"
8047         },
8048         {
8049             "name": "sebastian/recursion-context",
8050             "version": "7.0.1",
8051             "source": {
8052                 "type": "git",
8053                 "url": "https://github.com/sebastianbergmann/recursion-context.git",
8054                 "reference": "0b01998a7d5b1f122911a66bebcb8d46f0c82d8c"
8055             },
8056             "dist": {
8057                 "type": "zip",
8058                 "url": "https://api.github.com/repos/sebastianbergmann/recursion-context/zipball/0b01998a7d5b1f122911a66bebcb8d46f0c82d8c",
8059                 "reference": "0b01998a7d5b1f122911a66bebcb8d46f0c82d8c",
8060                 "shasum": ""
8061             },
8062             "require": {
8063                 "php": ">=8.3"
8064             },
8065             "require-dev": {
8066                 "phpunit/phpunit": "^12.0"
8067             },
8068             "type": "library",
8069             "extra": {
8070                 "branch-alias": {
8071                     "dev-main": "7.0-dev"
8072                 }
8073             },
8074             "autoload": {
8075                 "classmap": [
8076                     "src/"
8077                 ]
8078             },
8079             "notification-url": "https://packagist.org/downloads/",
8080             "license": [
8081                 "BSD-3-Clause"
8082             ],
8083             "authors": [
8084                 {
8085                     "name": "Sebastian Bergmann",
8086                     "email": "sebastian@phpunit.de"
8087                 },
8088                 {
8089                     "name": "Jeff Welch",
8090                     "email": "whatthejeff@gmail.com"
8091                 },
8092                 {
8093                     "name": "Adam Harvey",
8094                     "email": "aharvey@php.net"
8095                 }
8096             ],
8097             "description": "Provides functionality to recursively process PHP variables",
8098             "homepage": "https://github.com/sebastianbergmann/recursion-context",
8099             "support": {
8100                 "issues": "https://github.com/sebastianbergmann/recursion-context/issues",
8101                 "security": "https://github.com/sebastianbergmann/recursion-context/security/policy",
8102                 "source": "https://github.com/sebastianbergmann/recursion-context/tree/7.0.1"
8103             },
8104             "funding": [
8105                 {
8106                     "url": "https://github.com/sebastianbergmann",
8107                     "type": "github"
8108                 },
8109                 {
8110                     "url": "https://liberapay.com/sebastianbergmann",
8111                     "type": "liberapay"
8112                 },
8113                 {
8114                     "url": "https://thanks.dev/u/gh/sebastianbergmann",
8115                     "type": "thanks_dev"
8116                 },
8117                 {
8118                     "url": "https://tidelift.com/funding/github/packagist/sebastian/recursion-context",
8119                     "type": "tidelift"
8120                 }
8121             ],
8122             "time": "2025-08-13T04:44:59+00:00"
8123         },
8124         {
8125             "name": "sebastian/type",
8126             "version": "6.0.3",
8127             "source": {
8128                 "type": "git",
8129                 "url": "https://github.com/sebastianbergmann/type.git",
8130                 "reference": "e549163b9760b8f71f191651d22acf32d56d6d4d"
8131             },
8132             "dist": {
8133                 "type": "zip",
8134                 "url": "https://api.github.com/repos/sebastianbergmann/type/zipball/e549163b9760b8f71f191651d22acf32d56d6d4d",
8135                 "reference": "e549163b9760b8f71f191651d22acf32d56d6d4d",
8136                 "shasum": ""
8137             },
8138             "require": {
8139                 "php": ">=8.3"
8140             },
8141             "require-dev": {
8142                 "phpunit/phpunit": "^12.0"
8143             },
8144             "type": "library",
8145             "extra": {
8146                 "branch-alias": {
8147                     "dev-main": "6.0-dev"
8148                 }
8149             },
8150             "autoload": {
8151                 "classmap": [
8152                     "src/"
8153                 ]
8154             },
8155             "notification-url": "https://packagist.org/downloads/",
8156             "license": [
8157                 "BSD-3-Clause"
8158             ],
8159             "authors": [
8160                 {
8161                     "name": "Sebastian Bergmann",
8162                     "email": "sebastian@phpunit.de",
8163                     "role": "lead"
8164                 }
8165             ],
8166             "description": "Collection of value objects that represent the types of the PHP type system",
8167             "homepage": "https://github.com/sebastianbergmann/type",
8168             "support": {
8169                 "issues": "https://github.com/sebastianbergmann/type/issues",
8170                 "security": "https://github.com/sebastianbergmann/type/security/policy",
8171                 "source": "https://github.com/sebastianbergmann/type/tree/6.0.3"
8172             },
8173             "funding": [
8174                 {
8175                     "url": "https://github.com/sebastianbergmann",
8176                     "type": "github"
8177                 },
8178                 {
8179                     "url": "https://liberapay.com/sebastianbergmann",
8180                     "type": "liberapay"
8181                 },
8182                 {
8183                     "url": "https://thanks.dev/u/gh/sebastianbergmann",
8184                     "type": "thanks_dev"
8185                 },
8186                 {
8187                     "url": "https://tidelift.com/funding/github/packagist/sebastian/type",
8188                     "type": "tidelift"
8189                 }
8190             ],
8191             "time": "2025-08-09T06:57:12+00:00"
8192         },
8193         {
8194             "name": "sebastian/version",
8195             "version": "6.0.0",
8196             "source": {
8197                 "type": "git",
8198                 "url": "https://github.com/sebastianbergmann/version.git",
8199                 "reference": "3e6ccf7657d4f0a59200564b08cead899313b53c"
8200             },
8201             "dist": {
8202                 "type": "zip",
8203                 "url": "https://api.github.com/repos/sebastianbergmann/version/zipball/3e6ccf7657d4f0a59200564b08cead899313b53c",
8204                 "reference": "3e6ccf7657d4f0a59200564b08cead899313b53c",
8205                 "shasum": ""
8206             },
8207             "require": {
8208                 "php": ">=8.3"
8209             },
8210             "type": "library",
8211             "extra": {
8212                 "branch-alias": {
8213                     "dev-main": "6.0-dev"
8214                 }
8215             },
8216             "autoload": {
8217                 "classmap": [
8218                     "src/"
8219                 ]
8220             },
8221             "notification-url": "https://packagist.org/downloads/",
8222             "license": [
8223                 "BSD-3-Clause"
8224             ],
8225             "authors": [
8226                 {
8227                     "name": "Sebastian Bergmann",
8228                     "email": "sebastian@phpunit.de",
8229                     "role": "lead"
8230                 }
8231             ],
8232             "description": "Library that helps with managing the version number of Git-hosted PHP projects",
8233             "homepage": "https://github.com/sebastianbergmann/version",
8234             "support": {
8235                 "issues": "https://github.com/sebastianbergmann/version/issues",
8236                 "security": "https://github.com/sebastianbergmann/version/security/policy",
8237                 "source": "https://github.com/sebastianbergmann/version/tree/6.0.0"
8238             },
8239             "funding": [
8240                 {
8241                     "url": "https://github.com/sebastianbergmann",
8242                     "type": "github"
8243                 }
8244             ],
8245             "time": "2025-02-07T05:00:38+00:00"
8246         },
8247         {
8248             "name": "staabm/side-effects-detector",
8249             "version": "1.0.5",
8250             "source": {
8251                 "type": "git",
8252                 "url": "https://github.com/staabm/side-effects-detector.git",
8253                 "reference": "d8334211a140ce329c13726d4a715adbddd0a163"
8254             },
8255             "dist": {
8256                 "type": "zip",
8257                 "url": "https://api.github.com/repos/staabm/side-effects-detector/zipball/d8334211a140ce329c13726d4a715adbddd0a163",
8258                 "reference": "d8334211a140ce329c13726d4a715adbddd0a163",
8259                 "shasum": ""
8260             },
8261             "require": {
8262                 "ext-tokenizer": "*",
8263                 "php": "^7.4 || ^8.0"
8264             },
8265             "require-dev": {
8266                 "phpstan/extension-installer": "^1.4.3",
8267                 "phpstan/phpstan": "^1.12.6",
8268                 "phpunit/phpunit": "^9.6.21",
8269                 "symfony/var-dumper": "^5.4.43",
8270                 "tomasvotruba/type-coverage": "1.0.0",
8271                 "tomasvotruba/unused-public": "1.0.0"
8272             },
8273             "type": "library",
8274             "autoload": {
8275                 "classmap": [
8276                     "lib/"
8277                 ]
8278             },
8279             "notification-url": "https://packagist.org/downloads/",
8280             "license": [
8281                 "MIT"
8282             ],
8283             "description": "A static analysis tool to detect side effects in PHP code",
8284             "keywords": [
8285                 "static analysis"
8286             ],
8287             "support": {
8288                 "issues": "https://github.com/staabm/side-effects-detector/issues",
8289                 "source": "https://github.com/staabm/side-effects-detector/tree/1.0.5"
8290             },
8291             "funding": [
8292                 {
8293                     "url": "https://github.com/staabm",
8294                     "type": "github"
8295                 }
8296             ],
8297             "time": "2024-10-20T05:08:20+00:00"
8298         },
8299         {
8300             "name": "theseer/tokenizer",
8301             "version": "2.0.1",
8302             "source": {
8303                 "type": "git",
8304                 "url": "https://github.com/theseer/tokenizer.git",
8305                 "reference": "7989e43bf381af0eac72e4f0ca5bcbfa81658be4"
8306             },
8307             "dist": {
8308                 "type": "zip",
8309                 "url": "https://api.github.com/repos/theseer/tokenizer/zipball/7989e43bf381af0eac72e4f0ca5bcbfa81658be4",
8310                 "reference": "7989e43bf381af0eac72e4f0ca5bcbfa81658be4",
8311                 "shasum": ""
8312             },
8313             "require": {
8314                 "ext-dom": "*",
8315                 "ext-tokenizer": "*",
8316                 "ext-xmlwriter": "*",
8317                 "php": "^8.1"
8318             },
8319             "type": "library",
8320             "autoload": {
8321                 "classmap": [
8322                     "src/"
8323                 ]
8324             },
8325             "notification-url": "https://packagist.org/downloads/",
8326             "license": [
8327                 "BSD-3-Clause"
8328             ],
8329             "authors": [
8330                 {
8331                     "name": "Arne Blankerts",
8332                     "email": "arne@blankerts.de",
8333                     "role": "Developer"
8334                 }
8335             ],
8336             "description": "A small library for converting tokenized PHP source code into XML and potentially other formats",
8337             "support": {
8338                 "issues": "https://github.com/theseer/tokenizer/issues",
8339                 "source": "https://github.com/theseer/tokenizer/tree/2.0.1"
8340             },
8341             "funding": [
8342                 {
8343                     "url": "https://github.com/theseer",
8344                     "type": "github"
8345                 }
8346             ],
8347             "time": "2025-12-08T11:19:18+00:00"
8348         }
8349     ],
8350     "aliases": [],
8351     "minimum-stability": "stable",
8352     "stability-flags": {},
8353     "prefer-stable": true,
8354     "prefer-lowest": false,
8355     "platform": {
8356         "php": "^8.3"
8357     },
8358     "platform-dev": {},
8359     "plugin-api-version": "2.9.0"
8360 }
```

## Line-by-line explanation

- Line 1: Implements application logic: {
- Line 2: Implements application logic: "_readme": [
- Line 3: Implements application logic: "This file locks the dependencies of your project to a known state",
- Line 4: Implements application logic: "Read more about it at https://getcomposer.org/doc/01-basic-usage.md#installing-dependencies",
- Line 5: Implements application logic: "This file is @generated automatically"
- Line 6: Implements application logic: ],
- Line 7: Implements application logic: "content-hash": "6be428b73177f694ff71535a3fb32467",
- Line 8: Implements application logic: "packages": [
- Line 9: Implements application logic: {
- Line 10: Implements application logic: "name": "brick/math",
- Line 11: Implements application logic: "version": "0.14.8",
- Line 12: Implements application logic: "source": {
- Line 13: Implements application logic: "type": "git",
- Line 14: Implements application logic: "url": "https://github.com/brick/math.git",
- Line 15: Implements application logic: "reference": "63422359a44b7f06cae63c3b429b59e8efcc0629"
- Line 16: Implements application logic: },
- Line 17: Implements application logic: "dist": {
- Line 18: Implements application logic: "type": "zip",
- Line 19: Implements application logic: "url": "https://api.github.com/repos/brick/math/zipball/63422359a44b7f06cae63c3b429b59e8efcc0629",
- Line 20: Implements application logic: "reference": "63422359a44b7f06cae63c3b429b59e8efcc0629",
- Line 21: Implements application logic: "shasum": ""
- Line 22: Implements application logic: },
- Line 23: Implements application logic: "require": {
- Line 24: Implements application logic: "php": "^8.2"
- Line 25: Implements application logic: },
- Line 26: Implements application logic: "require-dev": {
- Line 27: Implements application logic: "php-coveralls/php-coveralls": "^2.2",
- Line 28: Implements application logic: "phpstan/phpstan": "2.1.22",
- Line 29: Implements application logic: "phpunit/phpunit": "^11.5"
- Line 30: Implements application logic: },
- Line 31: Implements application logic: "type": "library",
- Line 32: Implements application logic: "autoload": {
- Line 33: Implements application logic: "psr-4": {
- Line 34: Implements application logic: "Brick\\Math\\": "src/"
- Line 35: Implements application logic: }
- Line 36: Implements application logic: },
- Line 37: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 38: Implements application logic: "license": [
- Line 39: Implements application logic: "MIT"
- Line 40: Implements application logic: ],
- Line 41: Implements application logic: "description": "Arbitrary-precision arithmetic library",
- Line 42: Implements application logic: "keywords": [
- Line 43: Implements application logic: "Arbitrary-precision",
- Line 44: Implements application logic: "BigInteger",
- Line 45: Implements application logic: "BigRational",
- Line 46: Implements application logic: "arithmetic",
- Line 47: Implements application logic: "bigdecimal",
- Line 48: Implements application logic: "bignum",
- Line 49: Implements application logic: "bignumber",
- Line 50: Implements application logic: "brick",
- Line 51: Implements application logic: "decimal",
- Line 52: Implements application logic: "integer",
- Line 53: Implements application logic: "math",
- Line 54: Implements application logic: "mathematics",
- Line 55: Implements application logic: "rational"
- Line 56: Implements application logic: ],
- Line 57: Implements application logic: "support": {
- Line 58: Implements application logic: "issues": "https://github.com/brick/math/issues",
- Line 59: Implements application logic: "source": "https://github.com/brick/math/tree/0.14.8"
- Line 60: Implements application logic: },
- Line 61: Implements application logic: "funding": [
- Line 62: Implements application logic: {
- Line 63: Implements application logic: "url": "https://github.com/BenMorel",
- Line 64: Implements application logic: "type": "github"
- Line 65: Implements application logic: }
- Line 66: Implements application logic: ],
- Line 67: Implements application logic: "time": "2026-02-10T14:33:43+00:00"
- Line 68: Implements application logic: },
- Line 69: Implements application logic: {
- Line 70: Implements application logic: "name": "carbonphp/carbon-doctrine-types",
- Line 71: Implements application logic: "version": "3.2.0",
- Line 72: Implements application logic: "source": {
- Line 73: Implements application logic: "type": "git",
- Line 74: Implements application logic: "url": "https://github.com/CarbonPHP/carbon-doctrine-types.git",
- Line 75: Implements application logic: "reference": "18ba5ddfec8976260ead6e866180bd5d2f71aa1d"
- Line 76: Implements application logic: },
- Line 77: Implements application logic: "dist": {
- Line 78: Implements application logic: "type": "zip",
- Line 79: Implements application logic: "url": "https://api.github.com/repos/CarbonPHP/carbon-doctrine-types/zipball/18ba5ddfec8976260ead6e866180bd5d2f71aa1d",
- Line 80: Implements application logic: "reference": "18ba5ddfec8976260ead6e866180bd5d2f71aa1d",
- Line 81: Implements application logic: "shasum": ""
- Line 82: Implements application logic: },
- Line 83: Implements application logic: "require": {
- Line 84: Implements application logic: "php": "^8.1"
- Line 85: Implements application logic: },
- Line 86: Implements application logic: "conflict": {
- Line 87: Implements application logic: "doctrine/dbal": "<4.0.0 || >=5.0.0"
- Line 88: Implements application logic: },
- Line 89: Implements application logic: "require-dev": {
- Line 90: Implements application logic: "doctrine/dbal": "^4.0.0",
- Line 91: Implements application logic: "nesbot/carbon": "^2.71.0 || ^3.0.0",
- Line 92: Implements application logic: "phpunit/phpunit": "^10.3"
- Line 93: Implements application logic: },
- Line 94: Implements application logic: "type": "library",
- Line 95: Implements application logic: "autoload": {
- Line 96: Implements application logic: "psr-4": {
- Line 97: Implements application logic: "Carbon\\Doctrine\\": "src/Carbon/Doctrine/"
- Line 98: Implements application logic: }
- Line 99: Implements application logic: },
- Line 100: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 101: Implements application logic: "license": [
- Line 102: Implements application logic: "MIT"
- Line 103: Implements application logic: ],
- Line 104: Implements application logic: "authors": [
- Line 105: Implements application logic: {
- Line 106: Implements application logic: "name": "KyleKatarn",
- Line 107: Implements application logic: "email": "kylekatarnls@gmail.com"
- Line 108: Implements application logic: }
- Line 109: Implements application logic: ],
- Line 110: Implements application logic: "description": "Types to use Carbon in Doctrine",
- Line 111: Implements application logic: "keywords": [
- Line 112: Implements application logic: "carbon",
- Line 113: Implements application logic: "date",
- Line 114: Implements application logic: "datetime",
- Line 115: Implements application logic: "doctrine",
- Line 116: Implements application logic: "time"
- Line 117: Implements application logic: ],
- Line 118: Implements application logic: "support": {
- Line 119: Implements application logic: "issues": "https://github.com/CarbonPHP/carbon-doctrine-types/issues",
- Line 120: Implements application logic: "source": "https://github.com/CarbonPHP/carbon-doctrine-types/tree/3.2.0"
- Line 121: Implements application logic: },
- Line 122: Implements application logic: "funding": [
- Line 123: Implements application logic: {
- Line 124: Implements application logic: "url": "https://github.com/kylekatarnls",
- Line 125: Implements application logic: "type": "github"
- Line 126: Implements application logic: },
- Line 127: Implements application logic: {
- Line 128: Implements application logic: "url": "https://opencollective.com/Carbon",
- Line 129: Implements application logic: "type": "open_collective"
- Line 130: Implements application logic: },
- Line 131: Implements application logic: {
- Line 132: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/nesbot/carbon",
- Line 133: Implements application logic: "type": "tidelift"
- Line 134: Implements application logic: }
- Line 135: Implements application logic: ],
- Line 136: Implements application logic: "time": "2024-02-09T16:56:22+00:00"
- Line 137: Implements application logic: },
- Line 138: Implements application logic: {
- Line 139: Implements application logic: "name": "dflydev/dot-access-data",
- Line 140: Implements application logic: "version": "v3.0.3",
- Line 141: Implements application logic: "source": {
- Line 142: Implements application logic: "type": "git",
- Line 143: Implements application logic: "url": "https://github.com/dflydev/dflydev-dot-access-data.git",
- Line 144: Implements application logic: "reference": "a23a2bf4f31d3518f3ecb38660c95715dfead60f"
- Line 145: Implements application logic: },
- Line 146: Implements application logic: "dist": {
- Line 147: Implements application logic: "type": "zip",
- Line 148: Implements application logic: "url": "https://api.github.com/repos/dflydev/dflydev-dot-access-data/zipball/a23a2bf4f31d3518f3ecb38660c95715dfead60f",
- Line 149: Implements application logic: "reference": "a23a2bf4f31d3518f3ecb38660c95715dfead60f",
- Line 150: Implements application logic: "shasum": ""
- Line 151: Implements application logic: },
- Line 152: Implements application logic: "require": {
- Line 153: Implements application logic: "php": "^7.1 || ^8.0"
- Line 154: Implements application logic: },
- Line 155: Implements application logic: "require-dev": {
- Line 156: Implements application logic: "phpstan/phpstan": "^0.12.42",
- Line 157: Implements application logic: "phpunit/phpunit": "^7.5 || ^8.5 || ^9.3",
- Line 158: Implements application logic: "scrutinizer/ocular": "1.6.0",
- Line 159: Implements application logic: "squizlabs/php_codesniffer": "^3.5",
- Line 160: Implements application logic: "vimeo/psalm": "^4.0.0"
- Line 161: Implements application logic: },
- Line 162: Implements application logic: "type": "library",
- Line 163: Implements application logic: "extra": {
- Line 164: Implements application logic: "branch-alias": {
- Line 165: Implements application logic: "dev-main": "3.x-dev"
- Line 166: Implements application logic: }
- Line 167: Implements application logic: },
- Line 168: Implements application logic: "autoload": {
- Line 169: Implements application logic: "psr-4": {
- Line 170: Implements application logic: "Dflydev\\DotAccessData\\": "src/"
- Line 171: Implements application logic: }
- Line 172: Implements application logic: },
- Line 173: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 174: Implements application logic: "license": [
- Line 175: Implements application logic: "MIT"
- Line 176: Implements application logic: ],
- Line 177: Implements application logic: "authors": [
- Line 178: Implements application logic: {
- Line 179: Implements application logic: "name": "Dragonfly Development Inc.",
- Line 180: Implements application logic: "email": "info@dflydev.com",
- Line 181: Implements application logic: "homepage": "http://dflydev.com"
- Line 182: Implements application logic: },
- Line 183: Implements application logic: {
- Line 184: Implements application logic: "name": "Beau Simensen",
- Line 185: Implements application logic: "email": "beau@dflydev.com",
- Line 186: Implements application logic: "homepage": "http://beausimensen.com"
- Line 187: Implements application logic: },
- Line 188: Implements application logic: {
- Line 189: Implements application logic: "name": "Carlos Frutos",
- Line 190: Implements application logic: "email": "carlos@kiwing.it",
- Line 191: Implements application logic: "homepage": "https://github.com/cfrutos"
- Line 192: Implements application logic: },
- Line 193: Implements application logic: {
- Line 194: Implements application logic: "name": "Colin O'Dell",
- Line 195: Implements application logic: "email": "colinodell@gmail.com",
- Line 196: Implements application logic: "homepage": "https://www.colinodell.com"
- Line 197: Implements application logic: }
- Line 198: Implements application logic: ],
- Line 199: Implements application logic: "description": "Given a deep data structure, access data by dot notation.",
- Line 200: Implements application logic: "homepage": "https://github.com/dflydev/dflydev-dot-access-data",
- Line 201: Implements application logic: "keywords": [
- Line 202: Implements application logic: "access",
- Line 203: Implements application logic: "data",
- Line 204: Implements application logic: "dot",
- Line 205: Implements application logic: "notation"
- Line 206: Implements application logic: ],
- Line 207: Implements application logic: "support": {
- Line 208: Implements application logic: "issues": "https://github.com/dflydev/dflydev-dot-access-data/issues",
- Line 209: Implements application logic: "source": "https://github.com/dflydev/dflydev-dot-access-data/tree/v3.0.3"
- Line 210: Implements application logic: },
- Line 211: Implements application logic: "time": "2024-07-08T12:26:09+00:00"
- Line 212: Implements application logic: },
- Line 213: Implements application logic: {
- Line 214: Implements application logic: "name": "doctrine/inflector",
- Line 215: Implements application logic: "version": "2.1.0",
- Line 216: Implements application logic: "source": {
- Line 217: Implements application logic: "type": "git",
- Line 218: Implements application logic: "url": "https://github.com/doctrine/inflector.git",
- Line 219: Implements application logic: "reference": "6d6c96277ea252fc1304627204c3d5e6e15faa3b"
- Line 220: Implements application logic: },
- Line 221: Implements application logic: "dist": {
- Line 222: Implements application logic: "type": "zip",
- Line 223: Implements application logic: "url": "https://api.github.com/repos/doctrine/inflector/zipball/6d6c96277ea252fc1304627204c3d5e6e15faa3b",
- Line 224: Implements application logic: "reference": "6d6c96277ea252fc1304627204c3d5e6e15faa3b",
- Line 225: Implements application logic: "shasum": ""
- Line 226: Implements application logic: },
- Line 227: Implements application logic: "require": {
- Line 228: Implements application logic: "php": "^7.2 || ^8.0"
- Line 229: Implements application logic: },
- Line 230: Implements application logic: "require-dev": {
- Line 231: Implements application logic: "doctrine/coding-standard": "^12.0 || ^13.0",
- Line 232: Implements application logic: "phpstan/phpstan": "^1.12 || ^2.0",
- Line 233: Implements application logic: "phpstan/phpstan-phpunit": "^1.4 || ^2.0",
- Line 234: Implements application logic: "phpstan/phpstan-strict-rules": "^1.6 || ^2.0",
- Line 235: Implements application logic: "phpunit/phpunit": "^8.5 || ^12.2"
- Line 236: Implements application logic: },
- Line 237: Implements application logic: "type": "library",
- Line 238: Implements application logic: "autoload": {
- Line 239: Implements application logic: "psr-4": {
- Line 240: Implements application logic: "Doctrine\\Inflector\\": "src"
- Line 241: Implements application logic: }
- Line 242: Implements application logic: },
- Line 243: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 244: Implements application logic: "license": [
- Line 245: Implements application logic: "MIT"
- Line 246: Implements application logic: ],
- Line 247: Implements application logic: "authors": [
- Line 248: Implements application logic: {
- Line 249: Implements application logic: "name": "Guilherme Blanco",
- Line 250: Implements application logic: "email": "guilhermeblanco@gmail.com"
- Line 251: Implements application logic: },
- Line 252: Implements application logic: {
- Line 253: Implements application logic: "name": "Roman Borschel",
- Line 254: Implements application logic: "email": "roman@code-factory.org"
- Line 255: Implements application logic: },
- Line 256: Implements application logic: {
- Line 257: Implements application logic: "name": "Benjamin Eberlei",
- Line 258: Implements application logic: "email": "kontakt@beberlei.de"
- Line 259: Implements application logic: },
- Line 260: Implements application logic: {
- Line 261: Implements application logic: "name": "Jonathan Wage",
- Line 262: Implements application logic: "email": "jonwage@gmail.com"
- Line 263: Implements application logic: },
- Line 264: Implements application logic: {
- Line 265: Implements application logic: "name": "Johannes Schmitt",
- Line 266: Implements application logic: "email": "schmittjoh@gmail.com"
- Line 267: Implements application logic: }
- Line 268: Implements application logic: ],
- Line 269: Implements application logic: "description": "PHP Doctrine Inflector is a small library that can perform string manipulations with regard to upper/lowercase and singular/plural forms of words.",
- Line 270: Implements application logic: "homepage": "https://www.doctrine-project.org/projects/inflector.html",
- Line 271: Implements application logic: "keywords": [
- Line 272: Implements application logic: "inflection",
- Line 273: Implements application logic: "inflector",
- Line 274: Implements application logic: "lowercase",
- Line 275: Implements application logic: "manipulation",
- Line 276: Implements application logic: "php",
- Line 277: Implements application logic: "plural",
- Line 278: Implements application logic: "singular",
- Line 279: Implements application logic: "strings",
- Line 280: Implements application logic: "uppercase",
- Line 281: Implements application logic: "words"
- Line 282: Implements application logic: ],
- Line 283: Implements application logic: "support": {
- Line 284: Implements application logic: "issues": "https://github.com/doctrine/inflector/issues",
- Line 285: Implements application logic: "source": "https://github.com/doctrine/inflector/tree/2.1.0"
- Line 286: Implements application logic: },
- Line 287: Implements application logic: "funding": [
- Line 288: Implements application logic: {
- Line 289: Implements application logic: "url": "https://www.doctrine-project.org/sponsorship.html",
- Line 290: Implements application logic: "type": "custom"
- Line 291: Implements application logic: },
- Line 292: Implements application logic: {
- Line 293: Implements application logic: "url": "https://www.patreon.com/phpdoctrine",
- Line 294: Implements application logic: "type": "patreon"
- Line 295: Implements application logic: },
- Line 296: Implements application logic: {
- Line 297: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/doctrine%2Finflector",
- Line 298: Implements application logic: "type": "tidelift"
- Line 299: Implements application logic: }
- Line 300: Implements application logic: ],
- Line 301: Implements application logic: "time": "2025-08-10T19:31:58+00:00"
- Line 302: Implements application logic: },
- Line 303: Implements application logic: {
- Line 304: Implements application logic: "name": "doctrine/lexer",
- Line 305: Implements application logic: "version": "3.0.1",
- Line 306: Implements application logic: "source": {
- Line 307: Implements application logic: "type": "git",
- Line 308: Implements application logic: "url": "https://github.com/doctrine/lexer.git",
- Line 309: Implements application logic: "reference": "31ad66abc0fc9e1a1f2d9bc6a42668d2fbbcd6dd"
- Line 310: Implements application logic: },
- Line 311: Implements application logic: "dist": {
- Line 312: Implements application logic: "type": "zip",
- Line 313: Implements application logic: "url": "https://api.github.com/repos/doctrine/lexer/zipball/31ad66abc0fc9e1a1f2d9bc6a42668d2fbbcd6dd",
- Line 314: Implements application logic: "reference": "31ad66abc0fc9e1a1f2d9bc6a42668d2fbbcd6dd",
- Line 315: Implements application logic: "shasum": ""
- Line 316: Implements application logic: },
- Line 317: Implements application logic: "require": {
- Line 318: Implements application logic: "php": "^8.1"
- Line 319: Implements application logic: },
- Line 320: Implements application logic: "require-dev": {
- Line 321: Implements application logic: "doctrine/coding-standard": "^12",
- Line 322: Implements application logic: "phpstan/phpstan": "^1.10",
- Line 323: Implements application logic: "phpunit/phpunit": "^10.5",
- Line 324: Implements application logic: "psalm/plugin-phpunit": "^0.18.3",
- Line 325: Implements application logic: "vimeo/psalm": "^5.21"
- Line 326: Implements application logic: },
- Line 327: Implements application logic: "type": "library",
- Line 328: Implements application logic: "autoload": {
- Line 329: Implements application logic: "psr-4": {
- Line 330: Implements application logic: "Doctrine\\Common\\Lexer\\": "src"
- Line 331: Implements application logic: }
- Line 332: Implements application logic: },
- Line 333: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 334: Implements application logic: "license": [
- Line 335: Implements application logic: "MIT"
- Line 336: Implements application logic: ],
- Line 337: Implements application logic: "authors": [
- Line 338: Implements application logic: {
- Line 339: Implements application logic: "name": "Guilherme Blanco",
- Line 340: Implements application logic: "email": "guilhermeblanco@gmail.com"
- Line 341: Implements application logic: },
- Line 342: Implements application logic: {
- Line 343: Implements application logic: "name": "Roman Borschel",
- Line 344: Implements application logic: "email": "roman@code-factory.org"
- Line 345: Implements application logic: },
- Line 346: Implements application logic: {
- Line 347: Implements application logic: "name": "Johannes Schmitt",
- Line 348: Implements application logic: "email": "schmittjoh@gmail.com"
- Line 349: Implements application logic: }
- Line 350: Implements application logic: ],
- Line 351: Implements application logic: "description": "PHP Doctrine Lexer parser library that can be used in Top-Down, Recursive Descent Parsers.",
- Line 352: Implements application logic: "homepage": "https://www.doctrine-project.org/projects/lexer.html",
- Line 353: Implements application logic: "keywords": [
- Line 354: Implements application logic: "annotations",
- Line 355: Implements application logic: "docblock",
- Line 356: Implements application logic: "lexer",
- Line 357: Implements application logic: "parser",
- Line 358: Implements application logic: "php"
- Line 359: Implements application logic: ],
- Line 360: Implements application logic: "support": {
- Line 361: Implements application logic: "issues": "https://github.com/doctrine/lexer/issues",
- Line 362: Implements application logic: "source": "https://github.com/doctrine/lexer/tree/3.0.1"
- Line 363: Implements application logic: },
- Line 364: Implements application logic: "funding": [
- Line 365: Implements application logic: {
- Line 366: Implements application logic: "url": "https://www.doctrine-project.org/sponsorship.html",
- Line 367: Implements application logic: "type": "custom"
- Line 368: Implements application logic: },
- Line 369: Implements application logic: {
- Line 370: Implements application logic: "url": "https://www.patreon.com/phpdoctrine",
- Line 371: Implements application logic: "type": "patreon"
- Line 372: Implements application logic: },
- Line 373: Implements application logic: {
- Line 374: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/doctrine%2Flexer",
- Line 375: Implements application logic: "type": "tidelift"
- Line 376: Implements application logic: }
- Line 377: Implements application logic: ],
- Line 378: Implements application logic: "time": "2024-02-05T11:56:58+00:00"
- Line 379: Implements application logic: },
- Line 380: Implements application logic: {
- Line 381: Implements application logic: "name": "dragonmantank/cron-expression",
- Line 382: Implements application logic: "version": "v3.6.0",
- Line 383: Implements application logic: "source": {
- Line 384: Implements application logic: "type": "git",
- Line 385: Implements application logic: "url": "https://github.com/dragonmantank/cron-expression.git",
- Line 386: Implements application logic: "reference": "d61a8a9604ec1f8c3d150d09db6ce98b32675013"
- Line 387: Implements application logic: },
- Line 388: Implements application logic: "dist": {
- Line 389: Implements application logic: "type": "zip",
- Line 390: Implements application logic: "url": "https://api.github.com/repos/dragonmantank/cron-expression/zipball/d61a8a9604ec1f8c3d150d09db6ce98b32675013",
- Line 391: Implements application logic: "reference": "d61a8a9604ec1f8c3d150d09db6ce98b32675013",
- Line 392: Implements application logic: "shasum": ""
- Line 393: Implements application logic: },
- Line 394: Implements application logic: "require": {
- Line 395: Implements application logic: "php": "^8.2|^8.3|^8.4|^8.5"
- Line 396: Implements application logic: },
- Line 397: Implements application logic: "replace": {
- Line 398: Implements application logic: "mtdowling/cron-expression": "^1.0"
- Line 399: Implements application logic: },
- Line 400: Implements application logic: "require-dev": {
- Line 401: Implements application logic: "phpstan/extension-installer": "^1.4.3",
- Line 402: Implements application logic: "phpstan/phpstan": "^1.12.32|^2.1.31",
- Line 403: Implements application logic: "phpunit/phpunit": "^8.5.48|^9.0"
- Line 404: Implements application logic: },
- Line 405: Implements application logic: "type": "library",
- Line 406: Implements application logic: "extra": {
- Line 407: Implements application logic: "branch-alias": {
- Line 408: Implements application logic: "dev-master": "3.x-dev"
- Line 409: Implements application logic: }
- Line 410: Implements application logic: },
- Line 411: Implements application logic: "autoload": {
- Line 412: Implements application logic: "psr-4": {
- Line 413: Implements application logic: "Cron\\": "src/Cron/"
- Line 414: Implements application logic: }
- Line 415: Implements application logic: },
- Line 416: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 417: Implements application logic: "license": [
- Line 418: Implements application logic: "MIT"
- Line 419: Implements application logic: ],
- Line 420: Implements application logic: "authors": [
- Line 421: Implements application logic: {
- Line 422: Implements application logic: "name": "Chris Tankersley",
- Line 423: Implements application logic: "email": "chris@ctankersley.com",
- Line 424: Implements application logic: "homepage": "https://github.com/dragonmantank"
- Line 425: Implements application logic: }
- Line 426: Implements application logic: ],
- Line 427: Implements application logic: "description": "CRON for PHP: Calculate the next or previous run date and determine if a CRON expression is due",
- Line 428: Implements application logic: "keywords": [
- Line 429: Implements application logic: "cron",
- Line 430: Implements application logic: "schedule"
- Line 431: Implements application logic: ],
- Line 432: Implements application logic: "support": {
- Line 433: Implements application logic: "issues": "https://github.com/dragonmantank/cron-expression/issues",
- Line 434: Implements application logic: "source": "https://github.com/dragonmantank/cron-expression/tree/v3.6.0"
- Line 435: Implements application logic: },
- Line 436: Implements application logic: "funding": [
- Line 437: Implements application logic: {
- Line 438: Implements application logic: "url": "https://github.com/dragonmantank",
- Line 439: Implements application logic: "type": "github"
- Line 440: Implements application logic: }
- Line 441: Implements application logic: ],
- Line 442: Implements application logic: "time": "2025-10-31T18:51:33+00:00"
- Line 443: Implements application logic: },
- Line 444: Implements application logic: {
- Line 445: Implements application logic: "name": "egulias/email-validator",
- Line 446: Implements application logic: "version": "4.0.4",
- Line 447: Implements application logic: "source": {
- Line 448: Implements application logic: "type": "git",
- Line 449: Implements application logic: "url": "https://github.com/egulias/EmailValidator.git",
- Line 450: Implements application logic: "reference": "d42c8731f0624ad6bdc8d3e5e9a4524f68801cfa"
- Line 451: Implements application logic: },
- Line 452: Implements application logic: "dist": {
- Line 453: Implements application logic: "type": "zip",
- Line 454: Implements application logic: "url": "https://api.github.com/repos/egulias/EmailValidator/zipball/d42c8731f0624ad6bdc8d3e5e9a4524f68801cfa",
- Line 455: Implements application logic: "reference": "d42c8731f0624ad6bdc8d3e5e9a4524f68801cfa",
- Line 456: Implements application logic: "shasum": ""
- Line 457: Implements application logic: },
- Line 458: Implements application logic: "require": {
- Line 459: Implements application logic: "doctrine/lexer": "^2.0 || ^3.0",
- Line 460: Implements application logic: "php": ">=8.1",
- Line 461: Implements application logic: "symfony/polyfill-intl-idn": "^1.26"
- Line 462: Implements application logic: },
- Line 463: Implements application logic: "require-dev": {
- Line 464: Implements application logic: "phpunit/phpunit": "^10.2",
- Line 465: Implements application logic: "vimeo/psalm": "^5.12"
- Line 466: Implements application logic: },
- Line 467: Implements application logic: "suggest": {
- Line 468: Implements application logic: "ext-intl": "PHP Internationalization Libraries are required to use the SpoofChecking validation"
- Line 469: Implements application logic: },
- Line 470: Implements application logic: "type": "library",
- Line 471: Implements application logic: "extra": {
- Line 472: Implements application logic: "branch-alias": {
- Line 473: Implements application logic: "dev-master": "4.0.x-dev"
- Line 474: Implements application logic: }
- Line 475: Implements application logic: },
- Line 476: Implements application logic: "autoload": {
- Line 477: Implements application logic: "psr-4": {
- Line 478: Implements application logic: "Egulias\\EmailValidator\\": "src"
- Line 479: Implements application logic: }
- Line 480: Implements application logic: },
- Line 481: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 482: Implements application logic: "license": [
- Line 483: Implements application logic: "MIT"
- Line 484: Implements application logic: ],
- Line 485: Implements application logic: "authors": [
- Line 486: Implements application logic: {
- Line 487: Implements application logic: "name": "Eduardo Gulias Davis"
- Line 488: Implements application logic: }
- Line 489: Implements application logic: ],
- Line 490: Implements application logic: "description": "A library for validating emails against several RFCs",
- Line 491: Implements application logic: "homepage": "https://github.com/egulias/EmailValidator",
- Line 492: Implements application logic: "keywords": [
- Line 493: Implements application logic: "email",
- Line 494: Implements application logic: "emailvalidation",
- Line 495: Implements application logic: "emailvalidator",
- Line 496: Implements application logic: "validation",
- Line 497: Implements application logic: "validator"
- Line 498: Implements application logic: ],
- Line 499: Implements application logic: "support": {
- Line 500: Implements application logic: "issues": "https://github.com/egulias/EmailValidator/issues",
- Line 501: Implements application logic: "source": "https://github.com/egulias/EmailValidator/tree/4.0.4"
- Line 502: Implements application logic: },
- Line 503: Implements application logic: "funding": [
- Line 504: Implements application logic: {
- Line 505: Implements application logic: "url": "https://github.com/egulias",
- Line 506: Implements application logic: "type": "github"
- Line 507: Implements application logic: }
- Line 508: Implements application logic: ],
- Line 509: Implements application logic: "time": "2025-03-06T22:45:56+00:00"
- Line 510: Implements application logic: },
- Line 511: Implements application logic: {
- Line 512: Implements application logic: "name": "fruitcake/php-cors",
- Line 513: Implements application logic: "version": "v1.4.0",
- Line 514: Implements application logic: "source": {
- Line 515: Implements application logic: "type": "git",
- Line 516: Implements application logic: "url": "https://github.com/fruitcake/php-cors.git",
- Line 517: Implements application logic: "reference": "38aaa6c3fd4c157ffe2a4d10aa8b9b16ba8de379"
- Line 518: Implements application logic: },
- Line 519: Implements application logic: "dist": {
- Line 520: Implements application logic: "type": "zip",
- Line 521: Implements application logic: "url": "https://api.github.com/repos/fruitcake/php-cors/zipball/38aaa6c3fd4c157ffe2a4d10aa8b9b16ba8de379",
- Line 522: Implements application logic: "reference": "38aaa6c3fd4c157ffe2a4d10aa8b9b16ba8de379",
- Line 523: Implements application logic: "shasum": ""
- Line 524: Implements application logic: },
- Line 525: Implements application logic: "require": {
- Line 526: Implements application logic: "php": "^8.1",
- Line 527: Implements application logic: "symfony/http-foundation": "^5.4|^6.4|^7.3|^8"
- Line 528: Implements application logic: },
- Line 529: Implements application logic: "require-dev": {
- Line 530: Implements application logic: "phpstan/phpstan": "^2",
- Line 531: Implements application logic: "phpunit/phpunit": "^9",
- Line 532: Implements application logic: "squizlabs/php_codesniffer": "^4"
- Line 533: Implements application logic: },
- Line 534: Implements application logic: "type": "library",
- Line 535: Implements application logic: "extra": {
- Line 536: Implements application logic: "branch-alias": {
- Line 537: Implements application logic: "dev-master": "1.3-dev"
- Line 538: Implements application logic: }
- Line 539: Implements application logic: },
- Line 540: Implements application logic: "autoload": {
- Line 541: Implements application logic: "psr-4": {
- Line 542: Implements application logic: "Fruitcake\\Cors\\": "src/"
- Line 543: Implements application logic: }
- Line 544: Implements application logic: },
- Line 545: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 546: Implements application logic: "license": [
- Line 547: Implements application logic: "MIT"
- Line 548: Implements application logic: ],
- Line 549: Implements application logic: "authors": [
- Line 550: Implements application logic: {
- Line 551: Implements application logic: "name": "Fruitcake",
- Line 552: Implements application logic: "homepage": "https://fruitcake.nl"
- Line 553: Implements application logic: },
- Line 554: Implements application logic: {
- Line 555: Implements application logic: "name": "Barryvdh",
- Line 556: Implements application logic: "email": "barryvdh@gmail.com"
- Line 557: Implements application logic: }
- Line 558: Implements application logic: ],
- Line 559: Implements application logic: "description": "Cross-origin resource sharing library for the Symfony HttpFoundation",
- Line 560: Implements application logic: "homepage": "https://github.com/fruitcake/php-cors",
- Line 561: Implements application logic: "keywords": [
- Line 562: Implements application logic: "cors",
- Line 563: Implements application logic: "laravel",
- Line 564: Implements application logic: "symfony"
- Line 565: Implements application logic: ],
- Line 566: Implements application logic: "support": {
- Line 567: Implements application logic: "issues": "https://github.com/fruitcake/php-cors/issues",
- Line 568: Implements application logic: "source": "https://github.com/fruitcake/php-cors/tree/v1.4.0"
- Line 569: Implements application logic: },
- Line 570: Implements application logic: "funding": [
- Line 571: Implements application logic: {
- Line 572: Implements application logic: "url": "https://fruitcake.nl",
- Line 573: Implements application logic: "type": "custom"
- Line 574: Implements application logic: },
- Line 575: Implements application logic: {
- Line 576: Implements application logic: "url": "https://github.com/barryvdh",
- Line 577: Implements application logic: "type": "github"
- Line 578: Implements application logic: }
- Line 579: Implements application logic: ],
- Line 580: Implements application logic: "time": "2025-12-03T09:33:47+00:00"
- Line 581: Implements application logic: },
- Line 582: Implements application logic: {
- Line 583: Implements application logic: "name": "graham-campbell/result-type",
- Line 584: Implements application logic: "version": "v1.1.4",
- Line 585: Implements application logic: "source": {
- Line 586: Implements application logic: "type": "git",
- Line 587: Implements application logic: "url": "https://github.com/GrahamCampbell/Result-Type.git",
- Line 588: Implements application logic: "reference": "e01f4a821471308ba86aa202fed6698b6b695e3b"
- Line 589: Implements application logic: },
- Line 590: Implements application logic: "dist": {
- Line 591: Implements application logic: "type": "zip",
- Line 592: Implements application logic: "url": "https://api.github.com/repos/GrahamCampbell/Result-Type/zipball/e01f4a821471308ba86aa202fed6698b6b695e3b",
- Line 593: Implements application logic: "reference": "e01f4a821471308ba86aa202fed6698b6b695e3b",
- Line 594: Implements application logic: "shasum": ""
- Line 595: Implements application logic: },
- Line 596: Implements application logic: "require": {
- Line 597: Implements application logic: "php": "^7.2.5 || ^8.0",
- Line 598: Implements application logic: "phpoption/phpoption": "^1.9.5"
- Line 599: Implements application logic: },
- Line 600: Implements application logic: "require-dev": {
- Line 601: Implements application logic: "phpunit/phpunit": "^8.5.41 || ^9.6.22 || ^10.5.45 || ^11.5.7"
- Line 602: Implements application logic: },
- Line 603: Implements application logic: "type": "library",
- Line 604: Implements application logic: "autoload": {
- Line 605: Implements application logic: "psr-4": {
- Line 606: Implements application logic: "GrahamCampbell\\ResultType\\": "src/"
- Line 607: Implements application logic: }
- Line 608: Implements application logic: },
- Line 609: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 610: Implements application logic: "license": [
- Line 611: Implements application logic: "MIT"
- Line 612: Implements application logic: ],
- Line 613: Implements application logic: "authors": [
- Line 614: Implements application logic: {
- Line 615: Implements application logic: "name": "Graham Campbell",
- Line 616: Implements application logic: "email": "hello@gjcampbell.co.uk",
- Line 617: Implements application logic: "homepage": "https://github.com/GrahamCampbell"
- Line 618: Implements application logic: }
- Line 619: Implements application logic: ],
- Line 620: Implements application logic: "description": "An Implementation Of The Result Type",
- Line 621: Implements application logic: "keywords": [
- Line 622: Implements application logic: "Graham Campbell",
- Line 623: Implements application logic: "GrahamCampbell",
- Line 624: Implements application logic: "Result Type",
- Line 625: Implements application logic: "Result-Type",
- Line 626: Implements application logic: "result"
- Line 627: Implements application logic: ],
- Line 628: Implements application logic: "support": {
- Line 629: Implements application logic: "issues": "https://github.com/GrahamCampbell/Result-Type/issues",
- Line 630: Implements application logic: "source": "https://github.com/GrahamCampbell/Result-Type/tree/v1.1.4"
- Line 631: Implements application logic: },
- Line 632: Implements application logic: "funding": [
- Line 633: Implements application logic: {
- Line 634: Implements application logic: "url": "https://github.com/GrahamCampbell",
- Line 635: Implements application logic: "type": "github"
- Line 636: Implements application logic: },
- Line 637: Implements application logic: {
- Line 638: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/graham-campbell/result-type",
- Line 639: Implements application logic: "type": "tidelift"
- Line 640: Implements application logic: }
- Line 641: Implements application logic: ],
- Line 642: Implements application logic: "time": "2025-12-27T19:43:20+00:00"
- Line 643: Implements application logic: },
- Line 644: Implements application logic: {
- Line 645: Implements application logic: "name": "guzzlehttp/guzzle",
- Line 646: Implements application logic: "version": "7.10.0",
- Line 647: Implements application logic: "source": {
- Line 648: Implements application logic: "type": "git",
- Line 649: Implements application logic: "url": "https://github.com/guzzle/guzzle.git",
- Line 650: Implements application logic: "reference": "b51ac707cfa420b7bfd4e4d5e510ba8008e822b4"
- Line 651: Implements application logic: },
- Line 652: Implements application logic: "dist": {
- Line 653: Implements application logic: "type": "zip",
- Line 654: Implements application logic: "url": "https://api.github.com/repos/guzzle/guzzle/zipball/b51ac707cfa420b7bfd4e4d5e510ba8008e822b4",
- Line 655: Implements application logic: "reference": "b51ac707cfa420b7bfd4e4d5e510ba8008e822b4",
- Line 656: Implements application logic: "shasum": ""
- Line 657: Implements application logic: },
- Line 658: Implements application logic: "require": {
- Line 659: Implements application logic: "ext-json": "*",
- Line 660: Implements application logic: "guzzlehttp/promises": "^2.3",
- Line 661: Implements application logic: "guzzlehttp/psr7": "^2.8",
- Line 662: Implements application logic: "php": "^7.2.5 || ^8.0",
- Line 663: Implements application logic: "psr/http-client": "^1.0",
- Line 664: Implements application logic: "symfony/deprecation-contracts": "^2.2 || ^3.0"
- Line 665: Implements application logic: },
- Line 666: Implements application logic: "provide": {
- Line 667: Implements application logic: "psr/http-client-implementation": "1.0"
- Line 668: Implements application logic: },
- Line 669: Implements application logic: "require-dev": {
- Line 670: Implements application logic: "bamarni/composer-bin-plugin": "^1.8.2",
- Line 671: Implements application logic: "ext-curl": "*",
- Line 672: Implements application logic: "guzzle/client-integration-tests": "3.0.2",
- Line 673: Implements application logic: "php-http/message-factory": "^1.1",
- Line 674: Implements application logic: "phpunit/phpunit": "^8.5.39 || ^9.6.20",
- Line 675: Implements application logic: "psr/log": "^1.1 || ^2.0 || ^3.0"
- Line 676: Implements application logic: },
- Line 677: Implements application logic: "suggest": {
- Line 678: Implements application logic: "ext-curl": "Required for CURL handler support",
- Line 679: Implements application logic: "ext-intl": "Required for Internationalized Domain Name (IDN) support",
- Line 680: Implements application logic: "psr/log": "Required for using the Log middleware"
- Line 681: Implements application logic: },
- Line 682: Implements application logic: "type": "library",
- Line 683: Implements application logic: "extra": {
- Line 684: Implements application logic: "bamarni-bin": {
- Line 685: Implements application logic: "bin-links": true,
- Line 686: Implements application logic: "forward-command": false
- Line 687: Implements application logic: }
- Line 688: Implements application logic: },
- Line 689: Implements application logic: "autoload": {
- Line 690: Implements application logic: "files": [
- Line 691: Implements application logic: "src/functions_include.php"
- Line 692: Implements application logic: ],
- Line 693: Implements application logic: "psr-4": {
- Line 694: Implements application logic: "GuzzleHttp\\": "src/"
- Line 695: Implements application logic: }
- Line 696: Implements application logic: },
- Line 697: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 698: Implements application logic: "license": [
- Line 699: Implements application logic: "MIT"
- Line 700: Implements application logic: ],
- Line 701: Implements application logic: "authors": [
- Line 702: Implements application logic: {
- Line 703: Implements application logic: "name": "Graham Campbell",
- Line 704: Implements application logic: "email": "hello@gjcampbell.co.uk",
- Line 705: Implements application logic: "homepage": "https://github.com/GrahamCampbell"
- Line 706: Implements application logic: },
- Line 707: Implements application logic: {
- Line 708: Implements application logic: "name": "Michael Dowling",
- Line 709: Implements application logic: "email": "mtdowling@gmail.com",
- Line 710: Implements application logic: "homepage": "https://github.com/mtdowling"
- Line 711: Implements application logic: },
- Line 712: Implements application logic: {
- Line 713: Implements application logic: "name": "Jeremy Lindblom",
- Line 714: Implements application logic: "email": "jeremeamia@gmail.com",
- Line 715: Implements application logic: "homepage": "https://github.com/jeremeamia"
- Line 716: Implements application logic: },
- Line 717: Implements application logic: {
- Line 718: Implements application logic: "name": "George Mponos",
- Line 719: Implements application logic: "email": "gmponos@gmail.com",
- Line 720: Implements application logic: "homepage": "https://github.com/gmponos"
- Line 721: Implements application logic: },
- Line 722: Implements application logic: {
- Line 723: Implements application logic: "name": "Tobias Nyholm",
- Line 724: Implements application logic: "email": "tobias.nyholm@gmail.com",
- Line 725: Implements application logic: "homepage": "https://github.com/Nyholm"
- Line 726: Implements application logic: },
- Line 727: Implements application logic: {
- Line 728: Implements application logic: "name": "Márk Sági-Kazár",
- Line 729: Implements application logic: "email": "mark.sagikazar@gmail.com",
- Line 730: Implements application logic: "homepage": "https://github.com/sagikazarmark"
- Line 731: Implements application logic: },
- Line 732: Implements application logic: {
- Line 733: Implements application logic: "name": "Tobias Schultze",
- Line 734: Implements application logic: "email": "webmaster@tubo-world.de",
- Line 735: Implements application logic: "homepage": "https://github.com/Tobion"
- Line 736: Implements application logic: }
- Line 737: Implements application logic: ],
- Line 738: Implements application logic: "description": "Guzzle is a PHP HTTP client library",
- Line 739: Implements application logic: "keywords": [
- Line 740: Implements application logic: "client",
- Line 741: Implements application logic: "curl",
- Line 742: Implements application logic: "framework",
- Line 743: Implements application logic: "http",
- Line 744: Implements application logic: "http client",
- Line 745: Implements application logic: "psr-18",
- Line 746: Implements application logic: "psr-7",
- Line 747: Implements application logic: "rest",
- Line 748: Implements application logic: "web service"
- Line 749: Implements application logic: ],
- Line 750: Implements application logic: "support": {
- Line 751: Implements application logic: "issues": "https://github.com/guzzle/guzzle/issues",
- Line 752: Implements application logic: "source": "https://github.com/guzzle/guzzle/tree/7.10.0"
- Line 753: Implements application logic: },
- Line 754: Implements application logic: "funding": [
- Line 755: Implements application logic: {
- Line 756: Implements application logic: "url": "https://github.com/GrahamCampbell",
- Line 757: Implements application logic: "type": "github"
- Line 758: Implements application logic: },
- Line 759: Implements application logic: {
- Line 760: Implements application logic: "url": "https://github.com/Nyholm",
- Line 761: Implements application logic: "type": "github"
- Line 762: Implements application logic: },
- Line 763: Implements application logic: {
- Line 764: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/guzzlehttp/guzzle",
- Line 765: Implements application logic: "type": "tidelift"
- Line 766: Implements application logic: }
- Line 767: Implements application logic: ],
- Line 768: Implements application logic: "time": "2025-08-23T22:36:01+00:00"
- Line 769: Implements application logic: },
- Line 770: Implements application logic: {
- Line 771: Implements application logic: "name": "guzzlehttp/promises",
- Line 772: Implements application logic: "version": "2.3.0",
- Line 773: Implements application logic: "source": {
- Line 774: Implements application logic: "type": "git",
- Line 775: Implements application logic: "url": "https://github.com/guzzle/promises.git",
- Line 776: Implements application logic: "reference": "481557b130ef3790cf82b713667b43030dc9c957"
- Line 777: Implements application logic: },
- Line 778: Implements application logic: "dist": {
- Line 779: Implements application logic: "type": "zip",
- Line 780: Implements application logic: "url": "https://api.github.com/repos/guzzle/promises/zipball/481557b130ef3790cf82b713667b43030dc9c957",
- Line 781: Implements application logic: "reference": "481557b130ef3790cf82b713667b43030dc9c957",
- Line 782: Implements application logic: "shasum": ""
- Line 783: Implements application logic: },
- Line 784: Implements application logic: "require": {
- Line 785: Implements application logic: "php": "^7.2.5 || ^8.0"
- Line 786: Implements application logic: },
- Line 787: Implements application logic: "require-dev": {
- Line 788: Implements application logic: "bamarni/composer-bin-plugin": "^1.8.2",
- Line 789: Implements application logic: "phpunit/phpunit": "^8.5.44 || ^9.6.25"
- Line 790: Implements application logic: },
- Line 791: Implements application logic: "type": "library",
- Line 792: Implements application logic: "extra": {
- Line 793: Implements application logic: "bamarni-bin": {
- Line 794: Implements application logic: "bin-links": true,
- Line 795: Implements application logic: "forward-command": false
- Line 796: Implements application logic: }
- Line 797: Implements application logic: },
- Line 798: Implements application logic: "autoload": {
- Line 799: Implements application logic: "psr-4": {
- Line 800: Implements application logic: "GuzzleHttp\\Promise\\": "src/"
- Line 801: Implements application logic: }
- Line 802: Implements application logic: },
- Line 803: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 804: Implements application logic: "license": [
- Line 805: Implements application logic: "MIT"
- Line 806: Implements application logic: ],
- Line 807: Implements application logic: "authors": [
- Line 808: Implements application logic: {
- Line 809: Implements application logic: "name": "Graham Campbell",
- Line 810: Implements application logic: "email": "hello@gjcampbell.co.uk",
- Line 811: Implements application logic: "homepage": "https://github.com/GrahamCampbell"
- Line 812: Implements application logic: },
- Line 813: Implements application logic: {
- Line 814: Implements application logic: "name": "Michael Dowling",
- Line 815: Implements application logic: "email": "mtdowling@gmail.com",
- Line 816: Implements application logic: "homepage": "https://github.com/mtdowling"
- Line 817: Implements application logic: },
- Line 818: Implements application logic: {
- Line 819: Implements application logic: "name": "Tobias Nyholm",
- Line 820: Implements application logic: "email": "tobias.nyholm@gmail.com",
- Line 821: Implements application logic: "homepage": "https://github.com/Nyholm"
- Line 822: Implements application logic: },
- Line 823: Implements application logic: {
- Line 824: Implements application logic: "name": "Tobias Schultze",
- Line 825: Implements application logic: "email": "webmaster@tubo-world.de",
- Line 826: Implements application logic: "homepage": "https://github.com/Tobion"
- Line 827: Implements application logic: }
- Line 828: Implements application logic: ],
- Line 829: Implements application logic: "description": "Guzzle promises library",
- Line 830: Implements application logic: "keywords": [
- Line 831: Implements application logic: "promise"
- Line 832: Implements application logic: ],
- Line 833: Implements application logic: "support": {
- Line 834: Implements application logic: "issues": "https://github.com/guzzle/promises/issues",
- Line 835: Implements application logic: "source": "https://github.com/guzzle/promises/tree/2.3.0"
- Line 836: Implements application logic: },
- Line 837: Implements application logic: "funding": [
- Line 838: Implements application logic: {
- Line 839: Implements application logic: "url": "https://github.com/GrahamCampbell",
- Line 840: Implements application logic: "type": "github"
- Line 841: Implements application logic: },
- Line 842: Implements application logic: {
- Line 843: Implements application logic: "url": "https://github.com/Nyholm",
- Line 844: Implements application logic: "type": "github"
- Line 845: Implements application logic: },
- Line 846: Implements application logic: {
- Line 847: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/guzzlehttp/promises",
- Line 848: Implements application logic: "type": "tidelift"
- Line 849: Implements application logic: }
- Line 850: Implements application logic: ],
- Line 851: Implements application logic: "time": "2025-08-22T14:34:08+00:00"
- Line 852: Implements application logic: },
- Line 853: Implements application logic: {
- Line 854: Implements application logic: "name": "guzzlehttp/psr7",
- Line 855: Implements application logic: "version": "2.9.0",
- Line 856: Implements application logic: "source": {
- Line 857: Implements application logic: "type": "git",
- Line 858: Implements application logic: "url": "https://github.com/guzzle/psr7.git",
- Line 859: Implements application logic: "reference": "7d0ed42f28e42d61352a7a79de682e5e67fec884"
- Line 860: Implements application logic: },
- Line 861: Implements application logic: "dist": {
- Line 862: Implements application logic: "type": "zip",
- Line 863: Implements application logic: "url": "https://api.github.com/repos/guzzle/psr7/zipball/7d0ed42f28e42d61352a7a79de682e5e67fec884",
- Line 864: Implements application logic: "reference": "7d0ed42f28e42d61352a7a79de682e5e67fec884",
- Line 865: Implements application logic: "shasum": ""
- Line 866: Implements application logic: },
- Line 867: Implements application logic: "require": {
- Line 868: Implements application logic: "php": "^7.2.5 || ^8.0",
- Line 869: Implements application logic: "psr/http-factory": "^1.0",
- Line 870: Implements application logic: "psr/http-message": "^1.1 || ^2.0",
- Line 871: Implements application logic: "ralouphie/getallheaders": "^3.0"
- Line 872: Implements application logic: },
- Line 873: Implements application logic: "provide": {
- Line 874: Implements application logic: "psr/http-factory-implementation": "1.0",
- Line 875: Implements application logic: "psr/http-message-implementation": "1.0"
- Line 876: Implements application logic: },
- Line 877: Implements application logic: "require-dev": {
- Line 878: Implements application logic: "bamarni/composer-bin-plugin": "^1.8.2",
- Line 879: Implements application logic: "http-interop/http-factory-tests": "0.9.0",
- Line 880: Implements application logic: "jshttp/mime-db": "1.54.0.1",
- Line 881: Implements application logic: "phpunit/phpunit": "^8.5.44 || ^9.6.25"
- Line 882: Implements application logic: },
- Line 883: Implements application logic: "suggest": {
- Line 884: Implements application logic: "laminas/laminas-httphandlerrunner": "Emit PSR-7 responses"
- Line 885: Implements application logic: },
- Line 886: Implements application logic: "type": "library",
- Line 887: Implements application logic: "extra": {
- Line 888: Implements application logic: "bamarni-bin": {
- Line 889: Implements application logic: "bin-links": true,
- Line 890: Implements application logic: "forward-command": false
- Line 891: Implements application logic: }
- Line 892: Implements application logic: },
- Line 893: Implements application logic: "autoload": {
- Line 894: Implements application logic: "psr-4": {
- Line 895: Implements application logic: "GuzzleHttp\\Psr7\\": "src/"
- Line 896: Implements application logic: }
- Line 897: Implements application logic: },
- Line 898: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 899: Implements application logic: "license": [
- Line 900: Implements application logic: "MIT"
- Line 901: Implements application logic: ],
- Line 902: Implements application logic: "authors": [
- Line 903: Implements application logic: {
- Line 904: Implements application logic: "name": "Graham Campbell",
- Line 905: Implements application logic: "email": "hello@gjcampbell.co.uk",
- Line 906: Implements application logic: "homepage": "https://github.com/GrahamCampbell"
- Line 907: Implements application logic: },
- Line 908: Implements application logic: {
- Line 909: Implements application logic: "name": "Michael Dowling",
- Line 910: Implements application logic: "email": "mtdowling@gmail.com",
- Line 911: Implements application logic: "homepage": "https://github.com/mtdowling"
- Line 912: Implements application logic: },
- Line 913: Implements application logic: {
- Line 914: Implements application logic: "name": "George Mponos",
- Line 915: Implements application logic: "email": "gmponos@gmail.com",
- Line 916: Implements application logic: "homepage": "https://github.com/gmponos"
- Line 917: Implements application logic: },
- Line 918: Implements application logic: {
- Line 919: Implements application logic: "name": "Tobias Nyholm",
- Line 920: Implements application logic: "email": "tobias.nyholm@gmail.com",
- Line 921: Implements application logic: "homepage": "https://github.com/Nyholm"
- Line 922: Implements application logic: },
- Line 923: Implements application logic: {
- Line 924: Implements application logic: "name": "Márk Sági-Kazár",
- Line 925: Implements application logic: "email": "mark.sagikazar@gmail.com",
- Line 926: Implements application logic: "homepage": "https://github.com/sagikazarmark"
- Line 927: Implements application logic: },
- Line 928: Implements application logic: {
- Line 929: Implements application logic: "name": "Tobias Schultze",
- Line 930: Implements application logic: "email": "webmaster@tubo-world.de",
- Line 931: Implements application logic: "homepage": "https://github.com/Tobion"
- Line 932: Implements application logic: },
- Line 933: Implements application logic: {
- Line 934: Implements application logic: "name": "Márk Sági-Kazár",
- Line 935: Implements application logic: "email": "mark.sagikazar@gmail.com",
- Line 936: Implements application logic: "homepage": "https://sagikazarmark.hu"
- Line 937: Implements application logic: }
- Line 938: Implements application logic: ],
- Line 939: Implements application logic: "description": "PSR-7 message implementation that also provides common utility methods",
- Line 940: Implements application logic: "keywords": [
- Line 941: Implements application logic: "http",
- Line 942: Implements application logic: "message",
- Line 943: Implements application logic: "psr-7",
- Line 944: Implements application logic: "request",
- Line 945: Implements application logic: "response",
- Line 946: Implements application logic: "stream",
- Line 947: Implements application logic: "uri",
- Line 948: Implements application logic: "url"
- Line 949: Implements application logic: ],
- Line 950: Implements application logic: "support": {
- Line 951: Implements application logic: "issues": "https://github.com/guzzle/psr7/issues",
- Line 952: Implements application logic: "source": "https://github.com/guzzle/psr7/tree/2.9.0"
- Line 953: Implements application logic: },
- Line 954: Implements application logic: "funding": [
- Line 955: Implements application logic: {
- Line 956: Implements application logic: "url": "https://github.com/GrahamCampbell",
- Line 957: Implements application logic: "type": "github"
- Line 958: Implements application logic: },
- Line 959: Implements application logic: {
- Line 960: Implements application logic: "url": "https://github.com/Nyholm",
- Line 961: Implements application logic: "type": "github"
- Line 962: Implements application logic: },
- Line 963: Implements application logic: {
- Line 964: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/guzzlehttp/psr7",
- Line 965: Implements application logic: "type": "tidelift"
- Line 966: Implements application logic: }
- Line 967: Implements application logic: ],
- Line 968: Implements application logic: "time": "2026-03-10T16:41:02+00:00"
- Line 969: Implements application logic: },
- Line 970: Implements application logic: {
- Line 971: Implements application logic: "name": "guzzlehttp/uri-template",
- Line 972: Implements application logic: "version": "v1.0.5",
- Line 973: Implements application logic: "source": {
- Line 974: Implements application logic: "type": "git",
- Line 975: Implements application logic: "url": "https://github.com/guzzle/uri-template.git",
- Line 976: Implements application logic: "reference": "4f4bbd4e7172148801e76e3decc1e559bdee34e1"
- Line 977: Implements application logic: },
- Line 978: Implements application logic: "dist": {
- Line 979: Implements application logic: "type": "zip",
- Line 980: Implements application logic: "url": "https://api.github.com/repos/guzzle/uri-template/zipball/4f4bbd4e7172148801e76e3decc1e559bdee34e1",
- Line 981: Implements application logic: "reference": "4f4bbd4e7172148801e76e3decc1e559bdee34e1",
- Line 982: Implements application logic: "shasum": ""
- Line 983: Implements application logic: },
- Line 984: Implements application logic: "require": {
- Line 985: Implements application logic: "php": "^7.2.5 || ^8.0",
- Line 986: Implements application logic: "symfony/polyfill-php80": "^1.24"
- Line 987: Implements application logic: },
- Line 988: Implements application logic: "require-dev": {
- Line 989: Implements application logic: "bamarni/composer-bin-plugin": "^1.8.2",
- Line 990: Implements application logic: "phpunit/phpunit": "^8.5.44 || ^9.6.25",
- Line 991: Implements application logic: "uri-template/tests": "1.0.0"
- Line 992: Implements application logic: },
- Line 993: Implements application logic: "type": "library",
- Line 994: Implements application logic: "extra": {
- Line 995: Implements application logic: "bamarni-bin": {
- Line 996: Implements application logic: "bin-links": true,
- Line 997: Implements application logic: "forward-command": false
- Line 998: Implements application logic: }
- Line 999: Implements application logic: },
- Line 1000: Implements application logic: "autoload": {
- Line 1001: Implements application logic: "psr-4": {
- Line 1002: Implements application logic: "GuzzleHttp\\UriTemplate\\": "src"
- Line 1003: Implements application logic: }
- Line 1004: Implements application logic: },
- Line 1005: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 1006: Implements application logic: "license": [
- Line 1007: Implements application logic: "MIT"
- Line 1008: Implements application logic: ],
- Line 1009: Implements application logic: "authors": [
- Line 1010: Implements application logic: {
- Line 1011: Implements application logic: "name": "Graham Campbell",
- Line 1012: Implements application logic: "email": "hello@gjcampbell.co.uk",
- Line 1013: Implements application logic: "homepage": "https://github.com/GrahamCampbell"
- Line 1014: Implements application logic: },
- Line 1015: Implements application logic: {
- Line 1016: Implements application logic: "name": "Michael Dowling",
- Line 1017: Implements application logic: "email": "mtdowling@gmail.com",
- Line 1018: Implements application logic: "homepage": "https://github.com/mtdowling"
- Line 1019: Implements application logic: },
- Line 1020: Implements application logic: {
- Line 1021: Implements application logic: "name": "George Mponos",
- Line 1022: Implements application logic: "email": "gmponos@gmail.com",
- Line 1023: Implements application logic: "homepage": "https://github.com/gmponos"
- Line 1024: Implements application logic: },
- Line 1025: Implements application logic: {
- Line 1026: Implements application logic: "name": "Tobias Nyholm",
- Line 1027: Implements application logic: "email": "tobias.nyholm@gmail.com",
- Line 1028: Implements application logic: "homepage": "https://github.com/Nyholm"
- Line 1029: Implements application logic: }
- Line 1030: Implements application logic: ],
- Line 1031: Implements application logic: "description": "A polyfill class for uri_template of PHP",
- Line 1032: Implements application logic: "keywords": [
- Line 1033: Implements application logic: "guzzlehttp",
- Line 1034: Implements application logic: "uri-template"
- Line 1035: Implements application logic: ],
- Line 1036: Implements application logic: "support": {
- Line 1037: Implements application logic: "issues": "https://github.com/guzzle/uri-template/issues",
- Line 1038: Implements application logic: "source": "https://github.com/guzzle/uri-template/tree/v1.0.5"
- Line 1039: Implements application logic: },
- Line 1040: Implements application logic: "funding": [
- Line 1041: Implements application logic: {
- Line 1042: Implements application logic: "url": "https://github.com/GrahamCampbell",
- Line 1043: Implements application logic: "type": "github"
- Line 1044: Implements application logic: },
- Line 1045: Implements application logic: {
- Line 1046: Implements application logic: "url": "https://github.com/Nyholm",
- Line 1047: Implements application logic: "type": "github"
- Line 1048: Implements application logic: },
- Line 1049: Implements application logic: {
- Line 1050: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/guzzlehttp/uri-template",
- Line 1051: Implements application logic: "type": "tidelift"
- Line 1052: Implements application logic: }
- Line 1053: Implements application logic: ],
- Line 1054: Implements application logic: "time": "2025-08-22T14:27:06+00:00"
- Line 1055: Implements application logic: },
- Line 1056: Implements application logic: {
- Line 1057: Implements application logic: "name": "intervention/gif",
- Line 1058: Implements application logic: "version": "5.0.0",
- Line 1059: Implements application logic: "source": {
- Line 1060: Implements application logic: "type": "git",
- Line 1061: Implements application logic: "url": "https://github.com/Intervention/gif.git",
- Line 1062: Implements application logic: "reference": "d856f59205aec768059d837148d755c079cdb94a"
- Line 1063: Implements application logic: },
- Line 1064: Implements application logic: "dist": {
- Line 1065: Implements application logic: "type": "zip",
- Line 1066: Implements application logic: "url": "https://api.github.com/repos/Intervention/gif/zipball/d856f59205aec768059d837148d755c079cdb94a",
- Line 1067: Implements application logic: "reference": "d856f59205aec768059d837148d755c079cdb94a",
- Line 1068: Implements application logic: "shasum": ""
- Line 1069: Implements application logic: },
- Line 1070: Implements application logic: "require": {
- Line 1071: Implements application logic: "php": "^8.3"
- Line 1072: Implements application logic: },
- Line 1073: Implements application logic: "require-dev": {
- Line 1074: Implements application logic: "phpstan/phpstan": "^2.1",
- Line 1075: Implements application logic: "phpunit/phpunit": "^12.0",
- Line 1076: Implements application logic: "slevomat/coding-standard": "~8.0",
- Line 1077: Implements application logic: "squizlabs/php_codesniffer": "^4"
- Line 1078: Implements application logic: },
- Line 1079: Implements application logic: "type": "library",
- Line 1080: Implements application logic: "autoload": {
- Line 1081: Implements application logic: "psr-4": {
- Line 1082: Implements application logic: "Intervention\\Gif\\": "src"
- Line 1083: Implements application logic: }
- Line 1084: Implements application logic: },
- Line 1085: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 1086: Implements application logic: "license": [
- Line 1087: Implements application logic: "MIT"
- Line 1088: Implements application logic: ],
- Line 1089: Implements application logic: "authors": [
- Line 1090: Implements application logic: {
- Line 1091: Implements application logic: "name": "Oliver Vogel",
- Line 1092: Implements application logic: "email": "oliver@intervention.io",
- Line 1093: Implements application logic: "homepage": "https://intervention.io/"
- Line 1094: Implements application logic: }
- Line 1095: Implements application logic: ],
- Line 1096: Implements application logic: "description": "PHP GIF Encoder/Decoder",
- Line 1097: Implements application logic: "homepage": "https://github.com/intervention/gif",
- Line 1098: Implements application logic: "keywords": [
- Line 1099: Implements application logic: "animation",
- Line 1100: Implements application logic: "gd",
- Line 1101: Implements application logic: "gif",
- Line 1102: Implements application logic: "image"
- Line 1103: Implements application logic: ],
- Line 1104: Implements application logic: "support": {
- Line 1105: Implements application logic: "issues": "https://github.com/Intervention/gif/issues",
- Line 1106: Implements application logic: "source": "https://github.com/Intervention/gif/tree/5.0.0"
- Line 1107: Implements application logic: },
- Line 1108: Implements application logic: "funding": [
- Line 1109: Implements application logic: {
- Line 1110: Implements application logic: "url": "https://paypal.me/interventionio",
- Line 1111: Implements application logic: "type": "custom"
- Line 1112: Implements application logic: },
- Line 1113: Implements application logic: {
- Line 1114: Implements application logic: "url": "https://github.com/Intervention",
- Line 1115: Implements application logic: "type": "github"
- Line 1116: Implements application logic: },
- Line 1117: Implements application logic: {
- Line 1118: Implements application logic: "url": "https://ko-fi.com/interventionphp",
- Line 1119: Implements application logic: "type": "ko_fi"
- Line 1120: Implements application logic: }
- Line 1121: Implements application logic: ],
- Line 1122: Implements application logic: "time": "2026-03-21T05:08:17+00:00"
- Line 1123: Implements application logic: },
- Line 1124: Implements application logic: {
- Line 1125: Implements application logic: "name": "intervention/image",
- Line 1126: Implements application logic: "version": "4.0.2",
- Line 1127: Implements application logic: "source": {
- Line 1128: Implements application logic: "type": "git",
- Line 1129: Implements application logic: "url": "https://github.com/Intervention/image.git",
- Line 1130: Implements application logic: "reference": "3c449518c7782ea7454d18c4a7a54e6c2250e889"
- Line 1131: Implements application logic: },
- Line 1132: Implements application logic: "dist": {
- Line 1133: Implements application logic: "type": "zip",
- Line 1134: Implements application logic: "url": "https://api.github.com/repos/Intervention/image/zipball/3c449518c7782ea7454d18c4a7a54e6c2250e889",
- Line 1135: Implements application logic: "reference": "3c449518c7782ea7454d18c4a7a54e6c2250e889",
- Line 1136: Implements application logic: "shasum": ""
- Line 1137: Implements application logic: },
- Line 1138: Implements application logic: "require": {
- Line 1139: Implements application logic: "ext-mbstring": "*",
- Line 1140: Implements application logic: "intervention/gif": "^5",
- Line 1141: Implements application logic: "php": "^8.3"
- Line 1142: Implements application logic: },
- Line 1143: Implements application logic: "require-dev": {
- Line 1144: Implements application logic: "mockery/mockery": "^1.6",
- Line 1145: Implements application logic: "phpstan/phpstan": "^2.1",
- Line 1146: Implements application logic: "phpunit/phpunit": "^12.0",
- Line 1147: Implements application logic: "slevomat/coding-standard": "~8.0",
- Line 1148: Implements application logic: "squizlabs/php_codesniffer": "^4"
- Line 1149: Implements application logic: },
- Line 1150: Implements application logic: "suggest": {
- Line 1151: Implements application logic: "ext-exif": "Recommended to be able to read EXIF data properly."
- Line 1152: Implements application logic: },
- Line 1153: Implements application logic: "type": "library",
- Line 1154: Implements application logic: "autoload": {
- Line 1155: Implements application logic: "psr-4": {
- Line 1156: Implements application logic: "Intervention\\Image\\": "src"
- Line 1157: Implements application logic: }
- Line 1158: Implements application logic: },
- Line 1159: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 1160: Implements application logic: "license": [
- Line 1161: Implements application logic: "MIT"
- Line 1162: Implements application logic: ],
- Line 1163: Implements application logic: "authors": [
- Line 1164: Implements application logic: {
- Line 1165: Implements application logic: "name": "Oliver Vogel",
- Line 1166: Implements application logic: "email": "oliver@intervention.io",
- Line 1167: Implements application logic: "homepage": "https://intervention.io"
- Line 1168: Implements application logic: }
- Line 1169: Implements application logic: ],
- Line 1170: Implements application logic: "description": "PHP Image Processing",
- Line 1171: Implements application logic: "homepage": "https://image.intervention.io",
- Line 1172: Implements application logic: "keywords": [
- Line 1173: Implements application logic: "gd",
- Line 1174: Implements application logic: "image",
- Line 1175: Implements application logic: "imagick",
- Line 1176: Implements application logic: "resize",
- Line 1177: Implements application logic: "thumbnail",
- Line 1178: Implements application logic: "watermark"
- Line 1179: Implements application logic: ],
- Line 1180: Implements application logic: "support": {
- Line 1181: Implements application logic: "issues": "https://github.com/Intervention/image/issues",
- Line 1182: Implements application logic: "source": "https://github.com/Intervention/image/tree/4.0.2"
- Line 1183: Implements application logic: },
- Line 1184: Implements application logic: "funding": [
- Line 1185: Implements application logic: {
- Line 1186: Implements application logic: "url": "https://paypal.me/interventionio",
- Line 1187: Implements application logic: "type": "custom"
- Line 1188: Implements application logic: },
- Line 1189: Implements application logic: {
- Line 1190: Implements application logic: "url": "https://github.com/Intervention",
- Line 1191: Implements application logic: "type": "github"
- Line 1192: Implements application logic: },
- Line 1193: Implements application logic: {
- Line 1194: Implements application logic: "url": "https://ko-fi.com/interventionphp",
- Line 1195: Implements application logic: "type": "ko_fi"
- Line 1196: Implements application logic: }
- Line 1197: Implements application logic: ],
- Line 1198: Implements application logic: "time": "2026-04-24T13:57:17+00:00"
- Line 1199: Implements application logic: },
- Line 1200: Implements application logic: {
- Line 1201: Implements application logic: "name": "laravel/framework",
- Line 1202: Implements application logic: "version": "v13.6.0",
- Line 1203: Implements application logic: "source": {
- Line 1204: Implements application logic: "type": "git",
- Line 1205: Implements application logic: "url": "https://github.com/laravel/framework.git",
- Line 1206: Implements application logic: "reference": "416a93ea9c53161e0d4b8a44045f447b65a7d2f1"
- Line 1207: Implements application logic: },
- Line 1208: Implements application logic: "dist": {
- Line 1209: Implements application logic: "type": "zip",
- Line 1210: Implements application logic: "url": "https://api.github.com/repos/laravel/framework/zipball/416a93ea9c53161e0d4b8a44045f447b65a7d2f1",
- Line 1211: Implements application logic: "reference": "416a93ea9c53161e0d4b8a44045f447b65a7d2f1",
- Line 1212: Implements application logic: "shasum": ""
- Line 1213: Implements application logic: },
- Line 1214: Implements application logic: "require": {
- Line 1215: Implements application logic: "brick/math": "^0.14.2 || ^0.15 || ^0.16 || ^0.17",
- Line 1216: Implements application logic: "composer-runtime-api": "^2.2",
- Line 1217: Implements application logic: "doctrine/inflector": "^2.0.5",
- Line 1218: Implements application logic: "dragonmantank/cron-expression": "^3.4",
- Line 1219: Implements application logic: "egulias/email-validator": "^4.0",
- Line 1220: Implements application logic: "ext-ctype": "*",
- Line 1221: Implements application logic: "ext-filter": "*",
- Line 1222: Implements application logic: "ext-hash": "*",
- Line 1223: Implements application logic: "ext-mbstring": "*",
- Line 1224: Implements application logic: "ext-openssl": "*",
- Line 1225: Implements application logic: "ext-session": "*",
- Line 1226: Implements application logic: "ext-tokenizer": "*",
- Line 1227: Implements application logic: "fruitcake/php-cors": "^1.3",
- Line 1228: Implements application logic: "guzzlehttp/guzzle": "^7.8.2",
- Line 1229: Implements application logic: "guzzlehttp/promises": "^2.0.3",
- Line 1230: Implements application logic: "guzzlehttp/uri-template": "^1.0",
- Line 1231: Implements application logic: "laravel/prompts": "^0.3.0",
- Line 1232: Implements application logic: "laravel/serializable-closure": "^2.0.10",
- Line 1233: Implements application logic: "league/commonmark": "^2.8.1",
- Line 1234: Implements application logic: "league/flysystem": "^3.25.1",
- Line 1235: Implements application logic: "league/flysystem-local": "^3.25.1",
- Line 1236: Implements application logic: "league/uri": "^7.5.1",
- Line 1237: Implements application logic: "monolog/monolog": "^3.0",
- Line 1238: Implements application logic: "nesbot/carbon": "^3.8.4",
- Line 1239: Implements application logic: "nunomaduro/termwind": "^2.0",
- Line 1240: Implements application logic: "php": "^8.3",
- Line 1241: Implements application logic: "psr/container": "^1.1.1 || ^2.0.1",
- Line 1242: Implements application logic: "psr/log": "^1.0 || ^2.0 || ^3.0",
- Line 1243: Implements application logic: "psr/simple-cache": "^1.0 || ^2.0 || ^3.0",
- Line 1244: Implements application logic: "ramsey/uuid": "^4.7",
- Line 1245: Implements application logic: "symfony/console": "^7.4.0 || ^8.0.0",
- Line 1246: Implements application logic: "symfony/error-handler": "^7.4.0 || ^8.0.0",
- Line 1247: Implements application logic: "symfony/finder": "^7.4.0 || ^8.0.0",
- Line 1248: Implements application logic: "symfony/http-foundation": "^7.4.0 || ^8.0.0",
- Line 1249: Implements application logic: "symfony/http-kernel": "^7.4.0 || ^8.0.0",
- Line 1250: Implements application logic: "symfony/mailer": "^7.4.0 || ^8.0.0",
- Line 1251: Implements application logic: "symfony/mime": "^7.4.0 || ^8.0.0",
- Line 1252: Implements application logic: "symfony/polyfill-php84": "^1.33",
- Line 1253: Implements application logic: "symfony/polyfill-php85": "^1.33",
- Line 1254: Implements application logic: "symfony/process": "^7.4.5 || ^8.0.5",
- Line 1255: Implements application logic: "symfony/routing": "^7.4.0 || ^8.0.0",
- Line 1256: Implements application logic: "symfony/uid": "^7.4.0 || ^8.0.0",
- Line 1257: Implements application logic: "symfony/var-dumper": "^7.4.0 || ^8.0.0",
- Line 1258: Implements application logic: "tijsverkoyen/css-to-inline-styles": "^2.2.5",
- Line 1259: Implements application logic: "vlucas/phpdotenv": "^5.6.1",
- Line 1260: Implements application logic: "voku/portable-ascii": "^2.0.2"
- Line 1261: Implements application logic: },
- Line 1262: Implements application logic: "conflict": {
- Line 1263: Implements application logic: "tightenco/collect": "<5.5.33"
- Line 1264: Implements application logic: },
- Line 1265: Implements application logic: "provide": {
- Line 1266: Implements application logic: "psr/container-implementation": "1.1 || 2.0",
- Line 1267: Implements application logic: "psr/log-implementation": "1.0 || 2.0 || 3.0",
- Line 1268: Implements application logic: "psr/simple-cache-implementation": "1.0 || 2.0 || 3.0"
- Line 1269: Implements application logic: },
- Line 1270: Implements application logic: "replace": {
- Line 1271: Implements application logic: "illuminate/auth": "self.version",
- Line 1272: Implements application logic: "illuminate/broadcasting": "self.version",
- Line 1273: Implements application logic: "illuminate/bus": "self.version",
- Line 1274: Implements application logic: "illuminate/cache": "self.version",
- Line 1275: Implements application logic: "illuminate/collections": "self.version",
- Line 1276: Implements application logic: "illuminate/concurrency": "self.version",
- Line 1277: Implements application logic: "illuminate/conditionable": "self.version",
- Line 1278: Implements application logic: "illuminate/config": "self.version",
- Line 1279: Implements application logic: "illuminate/console": "self.version",
- Line 1280: Implements application logic: "illuminate/container": "self.version",
- Line 1281: Implements application logic: "illuminate/contracts": "self.version",
- Line 1282: Implements application logic: "illuminate/cookie": "self.version",
- Line 1283: Implements application logic: "illuminate/database": "self.version",
- Line 1284: Implements application logic: "illuminate/encryption": "self.version",
- Line 1285: Implements application logic: "illuminate/events": "self.version",
- Line 1286: Implements application logic: "illuminate/filesystem": "self.version",
- Line 1287: Implements application logic: "illuminate/hashing": "self.version",
- Line 1288: Implements application logic: "illuminate/http": "self.version",
- Line 1289: Implements application logic: "illuminate/json-schema": "self.version",
- Line 1290: Implements application logic: "illuminate/log": "self.version",
- Line 1291: Implements application logic: "illuminate/macroable": "self.version",
- Line 1292: Implements application logic: "illuminate/mail": "self.version",
- Line 1293: Implements application logic: "illuminate/notifications": "self.version",
- Line 1294: Implements application logic: "illuminate/pagination": "self.version",
- Line 1295: Implements application logic: "illuminate/pipeline": "self.version",
- Line 1296: Implements application logic: "illuminate/process": "self.version",
- Line 1297: Implements application logic: "illuminate/queue": "self.version",
- Line 1298: Implements application logic: "illuminate/redis": "self.version",
- Line 1299: Implements application logic: "illuminate/reflection": "self.version",
- Line 1300: Implements application logic: "illuminate/routing": "self.version",
- Line 1301: Implements application logic: "illuminate/session": "self.version",
- Line 1302: Implements application logic: "illuminate/support": "self.version",
- Line 1303: Implements application logic: "illuminate/testing": "self.version",
- Line 1304: Implements application logic: "illuminate/translation": "self.version",
- Line 1305: Implements application logic: "illuminate/validation": "self.version",
- Line 1306: Implements application logic: "illuminate/view": "self.version",
- Line 1307: Implements application logic: "spatie/once": "*"
- Line 1308: Implements application logic: },
- Line 1309: Implements application logic: "require-dev": {
- Line 1310: Implements application logic: "ably/ably-php": "^1.0",
- Line 1311: Implements application logic: "aws/aws-sdk-php": "^3.322.9",
- Line 1312: Implements application logic: "ext-gmp": "*",
- Line 1313: Implements application logic: "fakerphp/faker": "^1.24",
- Line 1314: Implements application logic: "guzzlehttp/psr7": "^2.4",
- Line 1315: Implements application logic: "laravel/pint": "^1.18",
- Line 1316: Implements application logic: "league/flysystem-aws-s3-v3": "^3.25.1",
- Line 1317: Implements application logic: "league/flysystem-ftp": "^3.25.1",
- Line 1318: Implements application logic: "league/flysystem-path-prefixing": "^3.25.1",
- Line 1319: Implements application logic: "league/flysystem-read-only": "^3.25.1",
- Line 1320: Implements application logic: "league/flysystem-sftp-v3": "^3.25.1",
- Line 1321: Implements application logic: "mockery/mockery": "^1.6.10",
- Line 1322: Implements application logic: "opis/json-schema": "^2.4.1",
- Line 1323: Implements application logic: "orchestra/testbench-core": "^11.0.0",
- Line 1324: Implements application logic: "pda/pheanstalk": "^7.0.0 || ^8.0.0",
- Line 1325: Implements application logic: "php-http/discovery": "^1.15",
- Line 1326: Implements application logic: "phpstan/phpstan": "^2.0",
- Line 1327: Implements application logic: "phpunit/phpunit": "^11.5.50 || ^12.5.8 || ^13.0.3",
- Line 1328: Implements application logic: "predis/predis": "^2.3 || ^3.0",
- Line 1329: Implements application logic: "rector/rector": "^2.3",
- Line 1330: Implements application logic: "resend/resend-php": "^1.0",
- Line 1331: Implements application logic: "symfony/cache": "^7.4.0 || ^8.0.0",
- Line 1332: Implements application logic: "symfony/http-client": "^7.4.0 || ^8.0.0",
- Line 1333: Implements application logic: "symfony/psr-http-message-bridge": "^7.4.0 || ^8.0.0",
- Line 1334: Implements application logic: "symfony/translation": "^7.4.0 || ^8.0.0"
- Line 1335: Implements application logic: },
- Line 1336: Implements application logic: "suggest": {
- Line 1337: Implements application logic: "ably/ably-php": "Required to use the Ably broadcast driver (^1.0).",
- Line 1338: Implements application logic: "aws/aws-sdk-php": "Required to use the SQS queue driver, DynamoDb failed job storage, and SES mail driver (^3.322.9).",
- Line 1339: Implements application logic: "brianium/paratest": "Required to run tests in parallel (^7.0 || ^8.0).",
- Line 1340: Implements application logic: "ext-apcu": "Required to use the APC cache driver.",
- Line 1341: Implements application logic: "ext-fileinfo": "Required to use the Filesystem class.",
- Line 1342: Implements application logic: "ext-ftp": "Required to use the Flysystem FTP driver.",
- Line 1343: Implements application logic: "ext-gd": "Required to use Illuminate\\Http\\Testing\\FileFactory::image().",
- Line 1344: Implements application logic: "ext-memcached": "Required to use the memcache cache driver.",
- Line 1345: Implements application logic: "ext-pcntl": "Required to use all features of the queue worker and console signal trapping.",
- Line 1346: Implements application logic: "ext-pdo": "Required to use all database features.",
- Line 1347: Implements application logic: "ext-posix": "Required to use all features of the queue worker.",
- Line 1348: Implements application logic: "ext-redis": "Required to use the Redis cache and queue drivers (^4.0 || ^5.0 || ^6.0).",
- Line 1349: Implements application logic: "fakerphp/faker": "Required to generate fake data using the fake() helper (^1.23).",
- Line 1350: Implements application logic: "filp/whoops": "Required for friendly error pages in development (^2.14.3).",
- Line 1351: Implements application logic: "laravel/tinker": "Required to use the tinker console command (^2.0).",
- Line 1352: Implements application logic: "league/flysystem-aws-s3-v3": "Required to use the Flysystem S3 driver (^3.25.1).",
- Line 1353: Implements application logic: "league/flysystem-ftp": "Required to use the Flysystem FTP driver (^3.25.1).",
- Line 1354: Implements application logic: "league/flysystem-path-prefixing": "Required to use the scoped driver (^3.25.1).",
- Line 1355: Implements application logic: "league/flysystem-read-only": "Required to use read-only disks (^3.25.1)",
- Line 1356: Implements application logic: "league/flysystem-sftp-v3": "Required to use the Flysystem SFTP driver (^3.25.1).",
- Line 1357: Implements application logic: "mockery/mockery": "Required to use mocking (^1.6).",
- Line 1358: Implements application logic: "pda/pheanstalk": "Required to use the beanstalk queue driver (^7.0 || ^8.0).",
- Line 1359: Implements application logic: "php-http/discovery": "Required to use PSR-7 bridging features (^1.15).",
- Line 1360: Implements application logic: "phpunit/phpunit": "Required to use assertions and run tests (^11.5.50 || ^12.5.8 || ^13.0.3).",
- Line 1361: Implements application logic: "predis/predis": "Required to use the predis connector (^2.3 || ^3.0).",
- Line 1362: Implements application logic: "psr/http-message": "Required to allow Storage::put to accept a StreamInterface (^1.0).",
- Line 1363: Implements application logic: "pusher/pusher-php-server": "Required to use the Pusher broadcast driver (^6.0 || ^7.0).",
- Line 1364: Implements application logic: "resend/resend-php": "Required to enable support for the Resend mail transport (^0.10.0 || ^1.0).",
- Line 1365: Implements application logic: "spatie/fork": "Required to use the 'fork' concurrency driver (^1.2).",
- Line 1366: Implements application logic: "symfony/cache": "Required to PSR-6 cache bridge (^7.4 || ^8.0).",
- Line 1367: Implements application logic: "symfony/filesystem": "Required to enable support for relative symbolic links (^7.4 || ^8.0).",
- Line 1368: Implements application logic: "symfony/http-client": "Required to enable support for the Symfony API mail transports (^7.4 || ^8.0).",
- Line 1369: Implements application logic: "symfony/mailgun-mailer": "Required to enable support for the Mailgun mail transport (^7.4 || ^8.0).",
- Line 1370: Implements application logic: "symfony/postmark-mailer": "Required to enable support for the Postmark mail transport (^7.4 || ^8.0).",
- Line 1371: Implements application logic: "symfony/psr-http-message-bridge": "Required to use PSR-7 bridging features (^7.4 || ^8.0)."
- Line 1372: Implements application logic: },
- Line 1373: Implements application logic: "type": "library",
- Line 1374: Implements application logic: "extra": {
- Line 1375: Implements application logic: "branch-alias": {
- Line 1376: Implements application logic: "dev-master": "13.0.x-dev"
- Line 1377: Implements application logic: }
- Line 1378: Implements application logic: },
- Line 1379: Implements application logic: "autoload": {
- Line 1380: Implements application logic: "files": [
- Line 1381: Implements application logic: "src/Illuminate/Collections/functions.php",
- Line 1382: Implements application logic: "src/Illuminate/Collections/helpers.php",
- Line 1383: Implements application logic: "src/Illuminate/Events/functions.php",
- Line 1384: Implements application logic: "src/Illuminate/Filesystem/functions.php",
- Line 1385: Implements application logic: "src/Illuminate/Foundation/helpers.php",
- Line 1386: Implements application logic: "src/Illuminate/Log/functions.php",
- Line 1387: Implements application logic: "src/Illuminate/Reflection/helpers.php",
- Line 1388: Implements application logic: "src/Illuminate/Support/functions.php",
- Line 1389: Implements application logic: "src/Illuminate/Support/helpers.php"
- Line 1390: Implements application logic: ],
- Line 1391: Implements application logic: "psr-4": {
- Line 1392: Implements application logic: "Illuminate\\": "src/Illuminate/",
- Line 1393: Implements application logic: "Illuminate\\Support\\": [
- Line 1394: Implements application logic: "src/Illuminate/Macroable/",
- Line 1395: Implements application logic: "src/Illuminate/Collections/",
- Line 1396: Implements application logic: "src/Illuminate/Conditionable/",
- Line 1397: Implements application logic: "src/Illuminate/Reflection/"
- Line 1398: Implements application logic: ]
- Line 1399: Implements application logic: }
- Line 1400: Implements application logic: },
- Line 1401: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 1402: Implements application logic: "license": [
- Line 1403: Implements application logic: "MIT"
- Line 1404: Implements application logic: ],
- Line 1405: Implements application logic: "authors": [
- Line 1406: Implements application logic: {
- Line 1407: Implements application logic: "name": "Taylor Otwell",
- Line 1408: Implements application logic: "email": "taylor@laravel.com"
- Line 1409: Implements application logic: }
- Line 1410: Implements application logic: ],
- Line 1411: Implements application logic: "description": "The Laravel Framework.",
- Line 1412: Implements application logic: "homepage": "https://laravel.com",
- Line 1413: Implements application logic: "keywords": [
- Line 1414: Implements application logic: "framework",
- Line 1415: Implements application logic: "laravel"
- Line 1416: Implements application logic: ],
- Line 1417: Implements application logic: "support": {
- Line 1418: Implements application logic: "issues": "https://github.com/laravel/framework/issues",
- Line 1419: Implements application logic: "source": "https://github.com/laravel/framework"
- Line 1420: Implements application logic: },
- Line 1421: Implements application logic: "time": "2026-04-21T13:32:11+00:00"
- Line 1422: Implements application logic: },
- Line 1423: Implements application logic: {
- Line 1424: Implements application logic: "name": "laravel/prompts",
- Line 1425: Implements application logic: "version": "v0.3.17",
- Line 1426: Implements application logic: "source": {
- Line 1427: Implements application logic: "type": "git",
- Line 1428: Implements application logic: "url": "https://github.com/laravel/prompts.git",
- Line 1429: Implements application logic: "reference": "6a82ac19a28b916ae0885828795dbd4c59d9a818"
- Line 1430: Implements application logic: },
- Line 1431: Implements application logic: "dist": {
- Line 1432: Implements application logic: "type": "zip",
- Line 1433: Implements application logic: "url": "https://api.github.com/repos/laravel/prompts/zipball/6a82ac19a28b916ae0885828795dbd4c59d9a818",
- Line 1434: Implements application logic: "reference": "6a82ac19a28b916ae0885828795dbd4c59d9a818",
- Line 1435: Implements application logic: "shasum": ""
- Line 1436: Implements application logic: },
- Line 1437: Implements application logic: "require": {
- Line 1438: Implements application logic: "composer-runtime-api": "^2.2",
- Line 1439: Implements application logic: "ext-mbstring": "*",
- Line 1440: Implements application logic: "php": "^8.1",
- Line 1441: Implements application logic: "symfony/console": "^6.2|^7.0|^8.0"
- Line 1442: Implements application logic: },
- Line 1443: Implements application logic: "conflict": {
- Line 1444: Implements application logic: "illuminate/console": ">=10.17.0 <10.25.0",
- Line 1445: Implements application logic: "laravel/framework": ">=10.17.0 <10.25.0"
- Line 1446: Implements application logic: },
- Line 1447: Implements application logic: "require-dev": {
- Line 1448: Implements application logic: "illuminate/collections": "^10.0|^11.0|^12.0|^13.0",
- Line 1449: Implements application logic: "mockery/mockery": "^1.5",
- Line 1450: Implements application logic: "pestphp/pest": "^2.3|^3.4|^4.0",
- Line 1451: Implements application logic: "phpstan/phpstan": "^1.12.28",
- Line 1452: Implements application logic: "phpstan/phpstan-mockery": "^1.1.3"
- Line 1453: Implements application logic: },
- Line 1454: Implements application logic: "suggest": {
- Line 1455: Implements application logic: "ext-pcntl": "Required for the spinner to be animated."
- Line 1456: Implements application logic: },
- Line 1457: Implements application logic: "type": "library",
- Line 1458: Implements application logic: "extra": {
- Line 1459: Implements application logic: "branch-alias": {
- Line 1460: Implements application logic: "dev-main": "0.3.x-dev"
- Line 1461: Implements application logic: }
- Line 1462: Implements application logic: },
- Line 1463: Implements application logic: "autoload": {
- Line 1464: Implements application logic: "files": [
- Line 1465: Implements application logic: "src/helpers.php"
- Line 1466: Implements application logic: ],
- Line 1467: Implements application logic: "psr-4": {
- Line 1468: Implements application logic: "Laravel\\Prompts\\": "src/"
- Line 1469: Implements application logic: }
- Line 1470: Implements application logic: },
- Line 1471: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 1472: Implements application logic: "license": [
- Line 1473: Implements application logic: "MIT"
- Line 1474: Implements application logic: ],
- Line 1475: Implements application logic: "description": "Add beautiful and user-friendly forms to your command-line applications.",
- Line 1476: Implements application logic: "support": {
- Line 1477: Implements application logic: "issues": "https://github.com/laravel/prompts/issues",
- Line 1478: Implements application logic: "source": "https://github.com/laravel/prompts/tree/v0.3.17"
- Line 1479: Implements application logic: },
- Line 1480: Implements application logic: "time": "2026-04-20T16:07:33+00:00"
- Line 1481: Implements application logic: },
- Line 1482: Implements application logic: {
- Line 1483: Implements application logic: "name": "laravel/sanctum",
- Line 1484: Implements application logic: "version": "v4.3.1",
- Line 1485: Implements application logic: "source": {
- Line 1486: Implements application logic: "type": "git",
- Line 1487: Implements application logic: "url": "https://github.com/laravel/sanctum.git",
- Line 1488: Implements application logic: "reference": "e3b85d6e36ad00e5db2d1dcc27c81ffdf15cbf76"
- Line 1489: Implements application logic: },
- Line 1490: Implements application logic: "dist": {
- Line 1491: Implements application logic: "type": "zip",
- Line 1492: Implements application logic: "url": "https://api.github.com/repos/laravel/sanctum/zipball/e3b85d6e36ad00e5db2d1dcc27c81ffdf15cbf76",
- Line 1493: Implements application logic: "reference": "e3b85d6e36ad00e5db2d1dcc27c81ffdf15cbf76",
- Line 1494: Implements application logic: "shasum": ""
- Line 1495: Implements application logic: },
- Line 1496: Implements application logic: "require": {
- Line 1497: Implements application logic: "ext-json": "*",
- Line 1498: Implements application logic: "illuminate/console": "^11.0|^12.0|^13.0",
- Line 1499: Implements application logic: "illuminate/contracts": "^11.0|^12.0|^13.0",
- Line 1500: Implements application logic: "illuminate/database": "^11.0|^12.0|^13.0",
- Line 1501: Implements application logic: "illuminate/support": "^11.0|^12.0|^13.0",
- Line 1502: Implements application logic: "php": "^8.2",
- Line 1503: Implements application logic: "symfony/console": "^7.0|^8.0"
- Line 1504: Implements application logic: },
- Line 1505: Implements application logic: "require-dev": {
- Line 1506: Implements application logic: "mockery/mockery": "^1.6",
- Line 1507: Implements application logic: "orchestra/testbench": "^9.15|^10.8|^11.0",
- Line 1508: Implements application logic: "phpstan/phpstan": "^1.10"
- Line 1509: Implements application logic: },
- Line 1510: Implements application logic: "type": "library",
- Line 1511: Implements application logic: "extra": {
- Line 1512: Implements application logic: "laravel": {
- Line 1513: Implements application logic: "providers": [
- Line 1514: Implements application logic: "Laravel\\Sanctum\\SanctumServiceProvider"
- Line 1515: Implements application logic: ]
- Line 1516: Implements application logic: }
- Line 1517: Implements application logic: },
- Line 1518: Implements application logic: "autoload": {
- Line 1519: Implements application logic: "psr-4": {
- Line 1520: Implements application logic: "Laravel\\Sanctum\\": "src/"
- Line 1521: Implements application logic: }
- Line 1522: Implements application logic: },
- Line 1523: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 1524: Implements application logic: "license": [
- Line 1525: Implements application logic: "MIT"
- Line 1526: Implements application logic: ],
- Line 1527: Implements application logic: "authors": [
- Line 1528: Implements application logic: {
- Line 1529: Implements application logic: "name": "Taylor Otwell",
- Line 1530: Implements application logic: "email": "taylor@laravel.com"
- Line 1531: Implements application logic: }
- Line 1532: Implements application logic: ],
- Line 1533: Implements application logic: "description": "Laravel Sanctum provides a featherweight authentication system for SPAs and simple APIs.",
- Line 1534: Implements application logic: "keywords": [
- Line 1535: Implements application logic: "auth",
- Line 1536: Implements application logic: "laravel",
- Line 1537: Implements application logic: "sanctum"
- Line 1538: Implements application logic: ],
- Line 1539: Implements application logic: "support": {
- Line 1540: Implements application logic: "issues": "https://github.com/laravel/sanctum/issues",
- Line 1541: Implements application logic: "source": "https://github.com/laravel/sanctum"
- Line 1542: Implements application logic: },
- Line 1543: Implements application logic: "time": "2026-02-07T17:19:31+00:00"
- Line 1544: Implements application logic: },
- Line 1545: Implements application logic: {
- Line 1546: Implements application logic: "name": "laravel/serializable-closure",
- Line 1547: Implements application logic: "version": "v2.0.12",
- Line 1548: Implements application logic: "source": {
- Line 1549: Implements application logic: "type": "git",
- Line 1550: Implements application logic: "url": "https://github.com/laravel/serializable-closure.git",
- Line 1551: Implements application logic: "reference": "a6abb4e54f6fcd3138120b9ad497f0bd146f9919"
- Line 1552: Implements application logic: },
- Line 1553: Implements application logic: "dist": {
- Line 1554: Implements application logic: "type": "zip",
- Line 1555: Implements application logic: "url": "https://api.github.com/repos/laravel/serializable-closure/zipball/a6abb4e54f6fcd3138120b9ad497f0bd146f9919",
- Line 1556: Implements application logic: "reference": "a6abb4e54f6fcd3138120b9ad497f0bd146f9919",
- Line 1557: Implements application logic: "shasum": ""
- Line 1558: Implements application logic: },
- Line 1559: Implements application logic: "require": {
- Line 1560: Implements application logic: "php": "^8.1"
- Line 1561: Implements application logic: },
- Line 1562: Implements application logic: "require-dev": {
- Line 1563: Implements application logic: "illuminate/support": "^10.0|^11.0|^12.0|^13.0",
- Line 1564: Implements application logic: "nesbot/carbon": "^2.67|^3.0",
- Line 1565: Implements application logic: "pestphp/pest": "^2.36|^3.0|^4.0",
- Line 1566: Implements application logic: "phpstan/phpstan": "^2.0",
- Line 1567: Implements application logic: "symfony/var-dumper": "^6.2.0|^7.0.0|^8.0.0"
- Line 1568: Implements application logic: },
- Line 1569: Implements application logic: "type": "library",
- Line 1570: Implements application logic: "extra": {
- Line 1571: Implements application logic: "branch-alias": {
- Line 1572: Implements application logic: "dev-master": "2.x-dev"
- Line 1573: Implements application logic: }
- Line 1574: Implements application logic: },
- Line 1575: Implements application logic: "autoload": {
- Line 1576: Implements application logic: "psr-4": {
- Line 1577: Implements application logic: "Laravel\\SerializableClosure\\": "src/"
- Line 1578: Implements application logic: }
- Line 1579: Implements application logic: },
- Line 1580: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 1581: Implements application logic: "license": [
- Line 1582: Implements application logic: "MIT"
- Line 1583: Implements application logic: ],
- Line 1584: Implements application logic: "authors": [
- Line 1585: Implements application logic: {
- Line 1586: Implements application logic: "name": "Taylor Otwell",
- Line 1587: Implements application logic: "email": "taylor@laravel.com"
- Line 1588: Implements application logic: },
- Line 1589: Implements application logic: {
- Line 1590: Implements application logic: "name": "Nuno Maduro",
- Line 1591: Implements application logic: "email": "nuno@laravel.com"
- Line 1592: Implements application logic: }
- Line 1593: Implements application logic: ],
- Line 1594: Implements application logic: "description": "Laravel Serializable Closure provides an easy and secure way to serialize closures in PHP.",
- Line 1595: Implements application logic: "keywords": [
- Line 1596: Implements application logic: "closure",
- Line 1597: Implements application logic: "laravel",
- Line 1598: Implements application logic: "serializable"
- Line 1599: Implements application logic: ],
- Line 1600: Implements application logic: "support": {
- Line 1601: Implements application logic: "issues": "https://github.com/laravel/serializable-closure/issues",
- Line 1602: Implements application logic: "source": "https://github.com/laravel/serializable-closure"
- Line 1603: Implements application logic: },
- Line 1604: Implements application logic: "time": "2026-04-14T13:33:34+00:00"
- Line 1605: Implements application logic: },
- Line 1606: Implements application logic: {
- Line 1607: Implements application logic: "name": "laravel/tinker",
- Line 1608: Implements application logic: "version": "v3.0.2",
- Line 1609: Implements application logic: "source": {
- Line 1610: Implements application logic: "type": "git",
- Line 1611: Implements application logic: "url": "https://github.com/laravel/tinker.git",
- Line 1612: Implements application logic: "reference": "4faba77764bd33411735936acdf30446d058c78b"
- Line 1613: Implements application logic: },
- Line 1614: Implements application logic: "dist": {
- Line 1615: Implements application logic: "type": "zip",
- Line 1616: Implements application logic: "url": "https://api.github.com/repos/laravel/tinker/zipball/4faba77764bd33411735936acdf30446d058c78b",
- Line 1617: Implements application logic: "reference": "4faba77764bd33411735936acdf30446d058c78b",
- Line 1618: Implements application logic: "shasum": ""
- Line 1619: Implements application logic: },
- Line 1620: Implements application logic: "require": {
- Line 1621: Implements application logic: "illuminate/console": "^8.0|^9.0|^10.0|^11.0|^12.0|^13.0",
- Line 1622: Implements application logic: "illuminate/contracts": "^8.0|^9.0|^10.0|^11.0|^12.0|^13.0",
- Line 1623: Implements application logic: "illuminate/support": "^8.0|^9.0|^10.0|^11.0|^12.0|^13.0",
- Line 1624: Implements application logic: "php": "^8.1",
- Line 1625: Implements application logic: "psy/psysh": "^0.12.0",
- Line 1626: Implements application logic: "symfony/var-dumper": "^5.4|^6.0|^7.0|^8.0"
- Line 1627: Implements application logic: },
- Line 1628: Implements application logic: "require-dev": {
- Line 1629: Implements application logic: "mockery/mockery": "~1.3.3|^1.4.2",
- Line 1630: Implements application logic: "phpstan/phpstan": "^1.10",
- Line 1631: Implements application logic: "phpunit/phpunit": "^10.5|^11.5"
- Line 1632: Implements application logic: },
- Line 1633: Implements application logic: "suggest": {
- Line 1634: Implements application logic: "illuminate/database": "The Illuminate Database package (^8.0|^9.0|^10.0|^11.0|^12.0|^13.0)."
- Line 1635: Implements application logic: },
- Line 1636: Implements application logic: "type": "library",
- Line 1637: Implements application logic: "extra": {
- Line 1638: Implements application logic: "laravel": {
- Line 1639: Implements application logic: "providers": [
- Line 1640: Implements application logic: "Laravel\\Tinker\\TinkerServiceProvider"
- Line 1641: Implements application logic: ]
- Line 1642: Implements application logic: },
- Line 1643: Implements application logic: "branch-alias": {
- Line 1644: Implements application logic: "dev-master": "3.x-dev"
- Line 1645: Implements application logic: }
- Line 1646: Implements application logic: },
- Line 1647: Implements application logic: "autoload": {
- Line 1648: Implements application logic: "psr-4": {
- Line 1649: Implements application logic: "Laravel\\Tinker\\": "src/"
- Line 1650: Implements application logic: }
- Line 1651: Implements application logic: },
- Line 1652: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 1653: Implements application logic: "license": [
- Line 1654: Implements application logic: "MIT"
- Line 1655: Implements application logic: ],
- Line 1656: Implements application logic: "authors": [
- Line 1657: Implements application logic: {
- Line 1658: Implements application logic: "name": "Taylor Otwell",
- Line 1659: Implements application logic: "email": "taylor@laravel.com"
- Line 1660: Implements application logic: }
- Line 1661: Implements application logic: ],
- Line 1662: Implements application logic: "description": "Powerful REPL for the Laravel framework.",
- Line 1663: Implements application logic: "keywords": [
- Line 1664: Implements application logic: "REPL",
- Line 1665: Implements application logic: "Tinker",
- Line 1666: Implements application logic: "laravel",
- Line 1667: Implements application logic: "psysh"
- Line 1668: Implements application logic: ],
- Line 1669: Implements application logic: "support": {
- Line 1670: Implements application logic: "issues": "https://github.com/laravel/tinker/issues",
- Line 1671: Implements application logic: "source": "https://github.com/laravel/tinker/tree/v3.0.2"
- Line 1672: Implements application logic: },
- Line 1673: Implements application logic: "time": "2026-03-17T14:54:13+00:00"
- Line 1674: Implements application logic: },
- Line 1675: Implements application logic: {
- Line 1676: Implements application logic: "name": "league/commonmark",
- Line 1677: Implements application logic: "version": "2.8.2",
- Line 1678: Implements application logic: "source": {
- Line 1679: Implements application logic: "type": "git",
- Line 1680: Implements application logic: "url": "https://github.com/thephpleague/commonmark.git",
- Line 1681: Implements application logic: "reference": "59fb075d2101740c337c7216e3f32b36c204218b"
- Line 1682: Implements application logic: },
- Line 1683: Implements application logic: "dist": {
- Line 1684: Implements application logic: "type": "zip",
- Line 1685: Implements application logic: "url": "https://api.github.com/repos/thephpleague/commonmark/zipball/59fb075d2101740c337c7216e3f32b36c204218b",
- Line 1686: Implements application logic: "reference": "59fb075d2101740c337c7216e3f32b36c204218b",
- Line 1687: Implements application logic: "shasum": ""
- Line 1688: Implements application logic: },
- Line 1689: Implements application logic: "require": {
- Line 1690: Implements application logic: "ext-mbstring": "*",
- Line 1691: Implements application logic: "league/config": "^1.1.1",
- Line 1692: Implements application logic: "php": "^7.4 || ^8.0",
- Line 1693: Implements application logic: "psr/event-dispatcher": "^1.0",
- Line 1694: Implements application logic: "symfony/deprecation-contracts": "^2.1 || ^3.0",
- Line 1695: Implements application logic: "symfony/polyfill-php80": "^1.16"
- Line 1696: Implements application logic: },
- Line 1697: Implements application logic: "require-dev": {
- Line 1698: Implements application logic: "cebe/markdown": "^1.0",
- Line 1699: Implements application logic: "commonmark/cmark": "0.31.1",
- Line 1700: Implements application logic: "commonmark/commonmark.js": "0.31.1",
- Line 1701: Implements application logic: "composer/package-versions-deprecated": "^1.8",
- Line 1702: Implements application logic: "embed/embed": "^4.4",
- Line 1703: Implements application logic: "erusev/parsedown": "^1.0",
- Line 1704: Implements application logic: "ext-json": "*",
- Line 1705: Implements application logic: "github/gfm": "0.29.0",
- Line 1706: Implements application logic: "michelf/php-markdown": "^1.4 || ^2.0",
- Line 1707: Implements application logic: "nyholm/psr7": "^1.5",
- Line 1708: Implements application logic: "phpstan/phpstan": "^1.8.2",
- Line 1709: Implements application logic: "phpunit/phpunit": "^9.5.21 || ^10.5.9 || ^11.0.0",
- Line 1710: Implements application logic: "scrutinizer/ocular": "^1.8.1",
- Line 1711: Implements application logic: "symfony/finder": "^5.3 | ^6.0 | ^7.0 || ^8.0",
- Line 1712: Implements application logic: "symfony/process": "^5.4 | ^6.0 | ^7.0 || ^8.0",
- Line 1713: Implements application logic: "symfony/yaml": "^2.3 | ^3.0 | ^4.0 | ^5.0 | ^6.0 | ^7.0 || ^8.0",
- Line 1714: Implements application logic: "unleashedtech/php-coding-standard": "^3.1.1",
- Line 1715: Implements application logic: "vimeo/psalm": "^4.24.0 || ^5.0.0 || ^6.0.0"
- Line 1716: Implements application logic: },
- Line 1717: Implements application logic: "suggest": {
- Line 1718: Implements application logic: "symfony/yaml": "v2.3+ required if using the Front Matter extension"
- Line 1719: Implements application logic: },
- Line 1720: Implements application logic: "type": "library",
- Line 1721: Implements application logic: "extra": {
- Line 1722: Implements application logic: "branch-alias": {
- Line 1723: Implements application logic: "dev-main": "2.9-dev"
- Line 1724: Implements application logic: }
- Line 1725: Implements application logic: },
- Line 1726: Implements application logic: "autoload": {
- Line 1727: Implements application logic: "psr-4": {
- Line 1728: Implements application logic: "League\\CommonMark\\": "src"
- Line 1729: Implements application logic: }
- Line 1730: Implements application logic: },
- Line 1731: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 1732: Implements application logic: "license": [
- Line 1733: Implements application logic: "BSD-3-Clause"
- Line 1734: Implements application logic: ],
- Line 1735: Implements application logic: "authors": [
- Line 1736: Implements application logic: {
- Line 1737: Implements application logic: "name": "Colin O'Dell",
- Line 1738: Implements application logic: "email": "colinodell@gmail.com",
- Line 1739: Implements application logic: "homepage": "https://www.colinodell.com",
- Line 1740: Implements application logic: "role": "Lead Developer"
- Line 1741: Implements application logic: }
- Line 1742: Implements application logic: ],
- Line 1743: Implements application logic: "description": "Highly-extensible PHP Markdown parser which fully supports the CommonMark spec and GitHub-Flavored Markdown (GFM)",
- Line 1744: Implements application logic: "homepage": "https://commonmark.thephpleague.com",
- Line 1745: Implements application logic: "keywords": [
- Line 1746: Implements application logic: "commonmark",
- Line 1747: Implements application logic: "flavored",
- Line 1748: Implements application logic: "gfm",
- Line 1749: Implements application logic: "github",
- Line 1750: Implements application logic: "github-flavored",
- Line 1751: Implements application logic: "markdown",
- Line 1752: Implements application logic: "md",
- Line 1753: Implements application logic: "parser"
- Line 1754: Implements application logic: ],
- Line 1755: Implements application logic: "support": {
- Line 1756: Implements application logic: "docs": "https://commonmark.thephpleague.com/",
- Line 1757: Implements application logic: "forum": "https://github.com/thephpleague/commonmark/discussions",
- Line 1758: Implements application logic: "issues": "https://github.com/thephpleague/commonmark/issues",
- Line 1759: Implements application logic: "rss": "https://github.com/thephpleague/commonmark/releases.atom",
- Line 1760: Implements application logic: "source": "https://github.com/thephpleague/commonmark"
- Line 1761: Implements application logic: },
- Line 1762: Implements application logic: "funding": [
- Line 1763: Implements application logic: {
- Line 1764: Implements application logic: "url": "https://www.colinodell.com/sponsor",
- Line 1765: Implements application logic: "type": "custom"
- Line 1766: Implements application logic: },
- Line 1767: Implements application logic: {
- Line 1768: Implements application logic: "url": "https://www.paypal.me/colinpodell/10.00",
- Line 1769: Implements application logic: "type": "custom"
- Line 1770: Implements application logic: },
- Line 1771: Implements application logic: {
- Line 1772: Implements application logic: "url": "https://github.com/colinodell",
- Line 1773: Implements application logic: "type": "github"
- Line 1774: Implements application logic: },
- Line 1775: Implements application logic: {
- Line 1776: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/league/commonmark",
- Line 1777: Implements application logic: "type": "tidelift"
- Line 1778: Implements application logic: }
- Line 1779: Implements application logic: ],
- Line 1780: Implements application logic: "time": "2026-03-19T13:16:38+00:00"
- Line 1781: Implements application logic: },
- Line 1782: Implements application logic: {
- Line 1783: Implements application logic: "name": "league/config",
- Line 1784: Implements application logic: "version": "v1.2.0",
- Line 1785: Implements application logic: "source": {
- Line 1786: Implements application logic: "type": "git",
- Line 1787: Implements application logic: "url": "https://github.com/thephpleague/config.git",
- Line 1788: Implements application logic: "reference": "754b3604fb2984c71f4af4a9cbe7b57f346ec1f3"
- Line 1789: Implements application logic: },
- Line 1790: Implements application logic: "dist": {
- Line 1791: Implements application logic: "type": "zip",
- Line 1792: Implements application logic: "url": "https://api.github.com/repos/thephpleague/config/zipball/754b3604fb2984c71f4af4a9cbe7b57f346ec1f3",
- Line 1793: Implements application logic: "reference": "754b3604fb2984c71f4af4a9cbe7b57f346ec1f3",
- Line 1794: Implements application logic: "shasum": ""
- Line 1795: Implements application logic: },
- Line 1796: Implements application logic: "require": {
- Line 1797: Implements application logic: "dflydev/dot-access-data": "^3.0.1",
- Line 1798: Implements application logic: "nette/schema": "^1.2",
- Line 1799: Implements application logic: "php": "^7.4 || ^8.0"
- Line 1800: Implements application logic: },
- Line 1801: Implements application logic: "require-dev": {
- Line 1802: Implements application logic: "phpstan/phpstan": "^1.8.2",
- Line 1803: Implements application logic: "phpunit/phpunit": "^9.5.5",
- Line 1804: Implements application logic: "scrutinizer/ocular": "^1.8.1",
- Line 1805: Implements application logic: "unleashedtech/php-coding-standard": "^3.1",
- Line 1806: Implements application logic: "vimeo/psalm": "^4.7.3"
- Line 1807: Implements application logic: },
- Line 1808: Implements application logic: "type": "library",
- Line 1809: Implements application logic: "extra": {
- Line 1810: Implements application logic: "branch-alias": {
- Line 1811: Implements application logic: "dev-main": "1.2-dev"
- Line 1812: Implements application logic: }
- Line 1813: Implements application logic: },
- Line 1814: Implements application logic: "autoload": {
- Line 1815: Implements application logic: "psr-4": {
- Line 1816: Implements application logic: "League\\Config\\": "src"
- Line 1817: Implements application logic: }
- Line 1818: Implements application logic: },
- Line 1819: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 1820: Implements application logic: "license": [
- Line 1821: Implements application logic: "BSD-3-Clause"
- Line 1822: Implements application logic: ],
- Line 1823: Implements application logic: "authors": [
- Line 1824: Implements application logic: {
- Line 1825: Implements application logic: "name": "Colin O'Dell",
- Line 1826: Implements application logic: "email": "colinodell@gmail.com",
- Line 1827: Implements application logic: "homepage": "https://www.colinodell.com",
- Line 1828: Implements application logic: "role": "Lead Developer"
- Line 1829: Implements application logic: }
- Line 1830: Implements application logic: ],
- Line 1831: Implements application logic: "description": "Define configuration arrays with strict schemas and access values with dot notation",
- Line 1832: Implements application logic: "homepage": "https://config.thephpleague.com",
- Line 1833: Implements application logic: "keywords": [
- Line 1834: Implements application logic: "array",
- Line 1835: Implements application logic: "config",
- Line 1836: Implements application logic: "configuration",
- Line 1837: Implements application logic: "dot",
- Line 1838: Implements application logic: "dot-access",
- Line 1839: Implements application logic: "nested",
- Line 1840: Implements application logic: "schema"
- Line 1841: Implements application logic: ],
- Line 1842: Implements application logic: "support": {
- Line 1843: Implements application logic: "docs": "https://config.thephpleague.com/",
- Line 1844: Implements application logic: "issues": "https://github.com/thephpleague/config/issues",
- Line 1845: Implements application logic: "rss": "https://github.com/thephpleague/config/releases.atom",
- Line 1846: Implements application logic: "source": "https://github.com/thephpleague/config"
- Line 1847: Implements application logic: },
- Line 1848: Implements application logic: "funding": [
- Line 1849: Implements application logic: {
- Line 1850: Implements application logic: "url": "https://www.colinodell.com/sponsor",
- Line 1851: Implements application logic: "type": "custom"
- Line 1852: Implements application logic: },
- Line 1853: Implements application logic: {
- Line 1854: Implements application logic: "url": "https://www.paypal.me/colinpodell/10.00",
- Line 1855: Implements application logic: "type": "custom"
- Line 1856: Implements application logic: },
- Line 1857: Implements application logic: {
- Line 1858: Implements application logic: "url": "https://github.com/colinodell",
- Line 1859: Implements application logic: "type": "github"
- Line 1860: Implements application logic: }
- Line 1861: Implements application logic: ],
- Line 1862: Implements application logic: "time": "2022-12-11T20:36:23+00:00"
- Line 1863: Implements application logic: },
- Line 1864: Implements application logic: {
- Line 1865: Implements application logic: "name": "league/flysystem",
- Line 1866: Implements application logic: "version": "3.33.0",
- Line 1867: Implements application logic: "source": {
- Line 1868: Implements application logic: "type": "git",
- Line 1869: Implements application logic: "url": "https://github.com/thephpleague/flysystem.git",
- Line 1870: Implements application logic: "reference": "570b8871e0ce693764434b29154c54b434905350"
- Line 1871: Implements application logic: },
- Line 1872: Implements application logic: "dist": {
- Line 1873: Implements application logic: "type": "zip",
- Line 1874: Implements application logic: "url": "https://api.github.com/repos/thephpleague/flysystem/zipball/570b8871e0ce693764434b29154c54b434905350",
- Line 1875: Implements application logic: "reference": "570b8871e0ce693764434b29154c54b434905350",
- Line 1876: Implements application logic: "shasum": ""
- Line 1877: Implements application logic: },
- Line 1878: Implements application logic: "require": {
- Line 1879: Implements application logic: "league/flysystem-local": "^3.0.0",
- Line 1880: Implements application logic: "league/mime-type-detection": "^1.0.0",
- Line 1881: Implements application logic: "php": "^8.0.2"
- Line 1882: Implements application logic: },
- Line 1883: Implements application logic: "conflict": {
- Line 1884: Implements application logic: "async-aws/core": "<1.19.0",
- Line 1885: Implements application logic: "async-aws/s3": "<1.14.0",
- Line 1886: Implements application logic: "aws/aws-sdk-php": "3.209.31 || 3.210.0",
- Line 1887: Implements application logic: "guzzlehttp/guzzle": "<7.0",
- Line 1888: Implements application logic: "guzzlehttp/ringphp": "<1.1.1",
- Line 1889: Implements application logic: "phpseclib/phpseclib": "3.0.15",
- Line 1890: Implements application logic: "symfony/http-client": "<5.2"
- Line 1891: Implements application logic: },
- Line 1892: Implements application logic: "require-dev": {
- Line 1893: Implements application logic: "async-aws/s3": "^1.5 || ^2.0",
- Line 1894: Implements application logic: "async-aws/simple-s3": "^1.1 || ^2.0",
- Line 1895: Implements application logic: "aws/aws-sdk-php": "^3.295.10",
- Line 1896: Implements application logic: "composer/semver": "^3.0",
- Line 1897: Implements application logic: "ext-fileinfo": "*",
- Line 1898: Implements application logic: "ext-ftp": "*",
- Line 1899: Implements application logic: "ext-mongodb": "^1.3|^2",
- Line 1900: Implements application logic: "ext-zip": "*",
- Line 1901: Implements application logic: "friendsofphp/php-cs-fixer": "^3.5",
- Line 1902: Implements application logic: "google/cloud-storage": "^1.23",
- Line 1903: Implements application logic: "guzzlehttp/psr7": "^2.6",
- Line 1904: Implements application logic: "microsoft/azure-storage-blob": "^1.1",
- Line 1905: Implements application logic: "mongodb/mongodb": "^1.2|^2",
- Line 1906: Implements application logic: "phpseclib/phpseclib": "^3.0.36",
- Line 1907: Implements application logic: "phpstan/phpstan": "^1.10",
- Line 1908: Implements application logic: "phpunit/phpunit": "^9.5.11|^10.0",
- Line 1909: Implements application logic: "sabre/dav": "^4.6.0"
- Line 1910: Implements application logic: },
- Line 1911: Implements application logic: "type": "library",
- Line 1912: Implements application logic: "autoload": {
- Line 1913: Implements application logic: "psr-4": {
- Line 1914: Implements application logic: "League\\Flysystem\\": "src"
- Line 1915: Implements application logic: }
- Line 1916: Implements application logic: },
- Line 1917: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 1918: Implements application logic: "license": [
- Line 1919: Implements application logic: "MIT"
- Line 1920: Implements application logic: ],
- Line 1921: Implements application logic: "authors": [
- Line 1922: Implements application logic: {
- Line 1923: Implements application logic: "name": "Frank de Jonge",
- Line 1924: Implements application logic: "email": "info@frankdejonge.nl"
- Line 1925: Implements application logic: }
- Line 1926: Implements application logic: ],
- Line 1927: Implements application logic: "description": "File storage abstraction for PHP",
- Line 1928: Implements application logic: "keywords": [
- Line 1929: Implements application logic: "WebDAV",
- Line 1930: Implements application logic: "aws",
- Line 1931: Implements application logic: "cloud",
- Line 1932: Implements application logic: "file",
- Line 1933: Implements application logic: "files",
- Line 1934: Implements application logic: "filesystem",
- Line 1935: Implements application logic: "filesystems",
- Line 1936: Implements application logic: "ftp",
- Line 1937: Implements application logic: "s3",
- Line 1938: Implements application logic: "sftp",
- Line 1939: Implements application logic: "storage"
- Line 1940: Implements application logic: ],
- Line 1941: Implements application logic: "support": {
- Line 1942: Implements application logic: "issues": "https://github.com/thephpleague/flysystem/issues",
- Line 1943: Implements application logic: "source": "https://github.com/thephpleague/flysystem/tree/3.33.0"
- Line 1944: Implements application logic: },
- Line 1945: Implements application logic: "time": "2026-03-25T07:59:30+00:00"
- Line 1946: Implements application logic: },
- Line 1947: Implements application logic: {
- Line 1948: Implements application logic: "name": "league/flysystem-local",
- Line 1949: Implements application logic: "version": "3.31.0",
- Line 1950: Implements application logic: "source": {
- Line 1951: Implements application logic: "type": "git",
- Line 1952: Implements application logic: "url": "https://github.com/thephpleague/flysystem-local.git",
- Line 1953: Implements application logic: "reference": "2f669db18a4c20c755c2bb7d3a7b0b2340488079"
- Line 1954: Implements application logic: },
- Line 1955: Implements application logic: "dist": {
- Line 1956: Implements application logic: "type": "zip",
- Line 1957: Implements application logic: "url": "https://api.github.com/repos/thephpleague/flysystem-local/zipball/2f669db18a4c20c755c2bb7d3a7b0b2340488079",
- Line 1958: Implements application logic: "reference": "2f669db18a4c20c755c2bb7d3a7b0b2340488079",
- Line 1959: Implements application logic: "shasum": ""
- Line 1960: Implements application logic: },
- Line 1961: Implements application logic: "require": {
- Line 1962: Implements application logic: "ext-fileinfo": "*",
- Line 1963: Implements application logic: "league/flysystem": "^3.0.0",
- Line 1964: Implements application logic: "league/mime-type-detection": "^1.0.0",
- Line 1965: Implements application logic: "php": "^8.0.2"
- Line 1966: Implements application logic: },
- Line 1967: Implements application logic: "type": "library",
- Line 1968: Implements application logic: "autoload": {
- Line 1969: Implements application logic: "psr-4": {
- Line 1970: Implements application logic: "League\\Flysystem\\Local\\": ""
- Line 1971: Implements application logic: }
- Line 1972: Implements application logic: },
- Line 1973: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 1974: Implements application logic: "license": [
- Line 1975: Implements application logic: "MIT"
- Line 1976: Implements application logic: ],
- Line 1977: Implements application logic: "authors": [
- Line 1978: Implements application logic: {
- Line 1979: Implements application logic: "name": "Frank de Jonge",
- Line 1980: Implements application logic: "email": "info@frankdejonge.nl"
- Line 1981: Implements application logic: }
- Line 1982: Implements application logic: ],
- Line 1983: Implements application logic: "description": "Local filesystem adapter for Flysystem.",
- Line 1984: Implements application logic: "keywords": [
- Line 1985: Implements application logic: "Flysystem",
- Line 1986: Implements application logic: "file",
- Line 1987: Implements application logic: "files",
- Line 1988: Implements application logic: "filesystem",
- Line 1989: Implements application logic: "local"
- Line 1990: Implements application logic: ],
- Line 1991: Implements application logic: "support": {
- Line 1992: Implements application logic: "source": "https://github.com/thephpleague/flysystem-local/tree/3.31.0"
- Line 1993: Implements application logic: },
- Line 1994: Implements application logic: "time": "2026-01-23T15:30:45+00:00"
- Line 1995: Implements application logic: },
- Line 1996: Implements application logic: {
- Line 1997: Implements application logic: "name": "league/mime-type-detection",
- Line 1998: Implements application logic: "version": "1.16.0",
- Line 1999: Implements application logic: "source": {
- Line 2000: Implements application logic: "type": "git",
- Line 2001: Implements application logic: "url": "https://github.com/thephpleague/mime-type-detection.git",
- Line 2002: Implements application logic: "reference": "2d6702ff215bf922936ccc1ad31007edc76451b9"
- Line 2003: Implements application logic: },
- Line 2004: Implements application logic: "dist": {
- Line 2005: Implements application logic: "type": "zip",
- Line 2006: Implements application logic: "url": "https://api.github.com/repos/thephpleague/mime-type-detection/zipball/2d6702ff215bf922936ccc1ad31007edc76451b9",
- Line 2007: Implements application logic: "reference": "2d6702ff215bf922936ccc1ad31007edc76451b9",
- Line 2008: Implements application logic: "shasum": ""
- Line 2009: Implements application logic: },
- Line 2010: Implements application logic: "require": {
- Line 2011: Implements application logic: "ext-fileinfo": "*",
- Line 2012: Implements application logic: "php": "^7.4 || ^8.0"
- Line 2013: Implements application logic: },
- Line 2014: Implements application logic: "require-dev": {
- Line 2015: Implements application logic: "friendsofphp/php-cs-fixer": "^3.2",
- Line 2016: Implements application logic: "phpstan/phpstan": "^0.12.68",
- Line 2017: Implements application logic: "phpunit/phpunit": "^8.5.8 || ^9.3 || ^10.0"
- Line 2018: Implements application logic: },
- Line 2019: Implements application logic: "type": "library",
- Line 2020: Implements application logic: "autoload": {
- Line 2021: Implements application logic: "psr-4": {
- Line 2022: Implements application logic: "League\\MimeTypeDetection\\": "src"
- Line 2023: Implements application logic: }
- Line 2024: Implements application logic: },
- Line 2025: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 2026: Implements application logic: "license": [
- Line 2027: Implements application logic: "MIT"
- Line 2028: Implements application logic: ],
- Line 2029: Implements application logic: "authors": [
- Line 2030: Implements application logic: {
- Line 2031: Implements application logic: "name": "Frank de Jonge",
- Line 2032: Implements application logic: "email": "info@frankdejonge.nl"
- Line 2033: Implements application logic: }
- Line 2034: Implements application logic: ],
- Line 2035: Implements application logic: "description": "Mime-type detection for Flysystem",
- Line 2036: Implements application logic: "support": {
- Line 2037: Implements application logic: "issues": "https://github.com/thephpleague/mime-type-detection/issues",
- Line 2038: Implements application logic: "source": "https://github.com/thephpleague/mime-type-detection/tree/1.16.0"
- Line 2039: Implements application logic: },
- Line 2040: Implements application logic: "funding": [
- Line 2041: Implements application logic: {
- Line 2042: Implements application logic: "url": "https://github.com/frankdejonge",
- Line 2043: Implements application logic: "type": "github"
- Line 2044: Implements application logic: },
- Line 2045: Implements application logic: {
- Line 2046: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/league/flysystem",
- Line 2047: Implements application logic: "type": "tidelift"
- Line 2048: Implements application logic: }
- Line 2049: Implements application logic: ],
- Line 2050: Implements application logic: "time": "2024-09-21T08:32:55+00:00"
- Line 2051: Implements application logic: },
- Line 2052: Implements application logic: {
- Line 2053: Implements application logic: "name": "league/uri",
- Line 2054: Implements application logic: "version": "7.8.1",
- Line 2055: Implements application logic: "source": {
- Line 2056: Implements application logic: "type": "git",
- Line 2057: Implements application logic: "url": "https://github.com/thephpleague/uri.git",
- Line 2058: Implements application logic: "reference": "08cf38e3924d4f56238125547b5720496fac8fd4"
- Line 2059: Implements application logic: },
- Line 2060: Implements application logic: "dist": {
- Line 2061: Implements application logic: "type": "zip",
- Line 2062: Implements application logic: "url": "https://api.github.com/repos/thephpleague/uri/zipball/08cf38e3924d4f56238125547b5720496fac8fd4",
- Line 2063: Implements application logic: "reference": "08cf38e3924d4f56238125547b5720496fac8fd4",
- Line 2064: Implements application logic: "shasum": ""
- Line 2065: Implements application logic: },
- Line 2066: Implements application logic: "require": {
- Line 2067: Implements application logic: "league/uri-interfaces": "^7.8.1",
- Line 2068: Implements application logic: "php": "^8.1",
- Line 2069: Implements application logic: "psr/http-factory": "^1"
- Line 2070: Implements application logic: },
- Line 2071: Implements application logic: "conflict": {
- Line 2072: Implements application logic: "league/uri-schemes": "^1.0"
- Line 2073: Implements application logic: },
- Line 2074: Implements application logic: "suggest": {
- Line 2075: Implements application logic: "ext-bcmath": "to improve IPV4 host parsing",
- Line 2076: Implements application logic: "ext-dom": "to convert the URI into an HTML anchor tag",
- Line 2077: Implements application logic: "ext-fileinfo": "to create Data URI from file contennts",
- Line 2078: Implements application logic: "ext-gmp": "to improve IPV4 host parsing",
- Line 2079: Implements application logic: "ext-intl": "to handle IDN host with the best performance",
- Line 2080: Implements application logic: "ext-uri": "to use the PHP native URI class",
- Line 2081: Implements application logic: "jeremykendall/php-domain-parser": "to further parse the URI host and resolve its Public Suffix and Top Level Domain",
- Line 2082: Implements application logic: "league/uri-components": "to provide additional tools to manipulate URI objects components",
- Line 2083: Implements application logic: "league/uri-polyfill": "to backport the PHP URI extension for older versions of PHP",
- Line 2084: Implements application logic: "php-64bit": "to improve IPV4 host parsing",
- Line 2085: Implements application logic: "rowbot/url": "to handle URLs using the WHATWG URL Living Standard specification",
- Line 2086: Implements application logic: "symfony/polyfill-intl-idn": "to handle IDN host via the Symfony polyfill if ext-intl is not present"
- Line 2087: Implements application logic: },
- Line 2088: Implements application logic: "type": "library",
- Line 2089: Implements application logic: "extra": {
- Line 2090: Implements application logic: "branch-alias": {
- Line 2091: Implements application logic: "dev-master": "7.x-dev"
- Line 2092: Implements application logic: }
- Line 2093: Implements application logic: },
- Line 2094: Implements application logic: "autoload": {
- Line 2095: Implements application logic: "psr-4": {
- Line 2096: Implements application logic: "League\\Uri\\": ""
- Line 2097: Implements application logic: }
- Line 2098: Implements application logic: },
- Line 2099: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 2100: Implements application logic: "license": [
- Line 2101: Implements application logic: "MIT"
- Line 2102: Implements application logic: ],
- Line 2103: Implements application logic: "authors": [
- Line 2104: Implements application logic: {
- Line 2105: Implements application logic: "name": "Ignace Nyamagana Butera",
- Line 2106: Implements application logic: "email": "nyamsprod@gmail.com",
- Line 2107: Implements application logic: "homepage": "https://nyamsprod.com"
- Line 2108: Implements application logic: }
- Line 2109: Implements application logic: ],
- Line 2110: Implements application logic: "description": "URI manipulation library",
- Line 2111: Implements application logic: "homepage": "https://uri.thephpleague.com",
- Line 2112: Implements application logic: "keywords": [
- Line 2113: Implements application logic: "URN",
- Line 2114: Implements application logic: "data-uri",
- Line 2115: Implements application logic: "file-uri",
- Line 2116: Implements application logic: "ftp",
- Line 2117: Implements application logic: "hostname",
- Line 2118: Implements application logic: "http",
- Line 2119: Implements application logic: "https",
- Line 2120: Implements application logic: "middleware",
- Line 2121: Implements application logic: "parse_str",
- Line 2122: Implements application logic: "parse_url",
- Line 2123: Implements application logic: "psr-7",
- Line 2124: Implements application logic: "query-string",
- Line 2125: Implements application logic: "querystring",
- Line 2126: Implements application logic: "rfc2141",
- Line 2127: Implements application logic: "rfc3986",
- Line 2128: Implements application logic: "rfc3987",
- Line 2129: Implements application logic: "rfc6570",
- Line 2130: Implements application logic: "rfc8141",
- Line 2131: Implements application logic: "uri",
- Line 2132: Implements application logic: "uri-template",
- Line 2133: Implements application logic: "url",
- Line 2134: Implements application logic: "ws"
- Line 2135: Implements application logic: ],
- Line 2136: Implements application logic: "support": {
- Line 2137: Implements application logic: "docs": "https://uri.thephpleague.com",
- Line 2138: Implements application logic: "forum": "https://thephpleague.slack.com",
- Line 2139: Implements application logic: "issues": "https://github.com/thephpleague/uri-src/issues",
- Line 2140: Implements application logic: "source": "https://github.com/thephpleague/uri/tree/7.8.1"
- Line 2141: Implements application logic: },
- Line 2142: Implements application logic: "funding": [
- Line 2143: Implements application logic: {
- Line 2144: Implements application logic: "url": "https://github.com/sponsors/nyamsprod",
- Line 2145: Implements application logic: "type": "github"
- Line 2146: Implements application logic: }
- Line 2147: Implements application logic: ],
- Line 2148: Implements application logic: "time": "2026-03-15T20:22:25+00:00"
- Line 2149: Implements application logic: },
- Line 2150: Implements application logic: {
- Line 2151: Implements application logic: "name": "league/uri-interfaces",
- Line 2152: Implements application logic: "version": "7.8.1",
- Line 2153: Implements application logic: "source": {
- Line 2154: Implements application logic: "type": "git",
- Line 2155: Implements application logic: "url": "https://github.com/thephpleague/uri-interfaces.git",
- Line 2156: Implements application logic: "reference": "85d5c77c5d6d3af6c54db4a78246364908f3c928"
- Line 2157: Implements application logic: },
- Line 2158: Implements application logic: "dist": {
- Line 2159: Implements application logic: "type": "zip",
- Line 2160: Implements application logic: "url": "https://api.github.com/repos/thephpleague/uri-interfaces/zipball/85d5c77c5d6d3af6c54db4a78246364908f3c928",
- Line 2161: Implements application logic: "reference": "85d5c77c5d6d3af6c54db4a78246364908f3c928",
- Line 2162: Implements application logic: "shasum": ""
- Line 2163: Implements application logic: },
- Line 2164: Implements application logic: "require": {
- Line 2165: Implements application logic: "ext-filter": "*",
- Line 2166: Implements application logic: "php": "^8.1",
- Line 2167: Implements application logic: "psr/http-message": "^1.1 || ^2.0"
- Line 2168: Implements application logic: },
- Line 2169: Implements application logic: "suggest": {
- Line 2170: Implements application logic: "ext-bcmath": "to improve IPV4 host parsing",
- Line 2171: Implements application logic: "ext-gmp": "to improve IPV4 host parsing",
- Line 2172: Implements application logic: "ext-intl": "to handle IDN host with the best performance",
- Line 2173: Implements application logic: "php-64bit": "to improve IPV4 host parsing",
- Line 2174: Implements application logic: "rowbot/url": "to handle URLs using the WHATWG URL Living Standard specification",
- Line 2175: Implements application logic: "symfony/polyfill-intl-idn": "to handle IDN host via the Symfony polyfill if ext-intl is not present"
- Line 2176: Implements application logic: },
- Line 2177: Implements application logic: "type": "library",
- Line 2178: Implements application logic: "extra": {
- Line 2179: Implements application logic: "branch-alias": {
- Line 2180: Implements application logic: "dev-master": "7.x-dev"
- Line 2181: Implements application logic: }
- Line 2182: Implements application logic: },
- Line 2183: Implements application logic: "autoload": {
- Line 2184: Implements application logic: "psr-4": {
- Line 2185: Implements application logic: "League\\Uri\\": ""
- Line 2186: Implements application logic: }
- Line 2187: Implements application logic: },
- Line 2188: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 2189: Implements application logic: "license": [
- Line 2190: Implements application logic: "MIT"
- Line 2191: Implements application logic: ],
- Line 2192: Implements application logic: "authors": [
- Line 2193: Implements application logic: {
- Line 2194: Implements application logic: "name": "Ignace Nyamagana Butera",
- Line 2195: Implements application logic: "email": "nyamsprod@gmail.com",
- Line 2196: Implements application logic: "homepage": "https://nyamsprod.com"
- Line 2197: Implements application logic: }
- Line 2198: Implements application logic: ],
- Line 2199: Implements application logic: "description": "Common tools for parsing and resolving RFC3987/RFC3986 URI",
- Line 2200: Implements application logic: "homepage": "https://uri.thephpleague.com",
- Line 2201: Implements application logic: "keywords": [
- Line 2202: Implements application logic: "data-uri",
- Line 2203: Implements application logic: "file-uri",
- Line 2204: Implements application logic: "ftp",
- Line 2205: Implements application logic: "hostname",
- Line 2206: Implements application logic: "http",
- Line 2207: Implements application logic: "https",
- Line 2208: Implements application logic: "parse_str",
- Line 2209: Implements application logic: "parse_url",
- Line 2210: Implements application logic: "psr-7",
- Line 2211: Implements application logic: "query-string",
- Line 2212: Implements application logic: "querystring",
- Line 2213: Implements application logic: "rfc3986",
- Line 2214: Implements application logic: "rfc3987",
- Line 2215: Implements application logic: "rfc6570",
- Line 2216: Implements application logic: "uri",
- Line 2217: Implements application logic: "url",
- Line 2218: Implements application logic: "ws"
- Line 2219: Implements application logic: ],
- Line 2220: Implements application logic: "support": {
- Line 2221: Implements application logic: "docs": "https://uri.thephpleague.com",
- Line 2222: Implements application logic: "forum": "https://thephpleague.slack.com",
- Line 2223: Implements application logic: "issues": "https://github.com/thephpleague/uri-src/issues",
- Line 2224: Implements application logic: "source": "https://github.com/thephpleague/uri-interfaces/tree/7.8.1"
- Line 2225: Implements application logic: },
- Line 2226: Implements application logic: "funding": [
- Line 2227: Implements application logic: {
- Line 2228: Implements application logic: "url": "https://github.com/sponsors/nyamsprod",
- Line 2229: Implements application logic: "type": "github"
- Line 2230: Implements application logic: }
- Line 2231: Implements application logic: ],
- Line 2232: Implements application logic: "time": "2026-03-08T20:05:35+00:00"
- Line 2233: Implements application logic: },
- Line 2234: Implements application logic: {
- Line 2235: Implements application logic: "name": "monolog/monolog",
- Line 2236: Implements application logic: "version": "3.10.0",
- Line 2237: Implements application logic: "source": {
- Line 2238: Implements application logic: "type": "git",
- Line 2239: Implements application logic: "url": "https://github.com/Seldaek/monolog.git",
- Line 2240: Implements application logic: "reference": "b321dd6749f0bf7189444158a3ce785cc16d69b0"
- Line 2241: Implements application logic: },
- Line 2242: Implements application logic: "dist": {
- Line 2243: Implements application logic: "type": "zip",
- Line 2244: Implements application logic: "url": "https://api.github.com/repos/Seldaek/monolog/zipball/b321dd6749f0bf7189444158a3ce785cc16d69b0",
- Line 2245: Implements application logic: "reference": "b321dd6749f0bf7189444158a3ce785cc16d69b0",
- Line 2246: Implements application logic: "shasum": ""
- Line 2247: Implements application logic: },
- Line 2248: Implements application logic: "require": {
- Line 2249: Implements application logic: "php": ">=8.1",
- Line 2250: Implements application logic: "psr/log": "^2.0 || ^3.0"
- Line 2251: Implements application logic: },
- Line 2252: Implements application logic: "provide": {
- Line 2253: Implements application logic: "psr/log-implementation": "3.0.0"
- Line 2254: Implements application logic: },
- Line 2255: Implements application logic: "require-dev": {
- Line 2256: Implements application logic: "aws/aws-sdk-php": "^3.0",
- Line 2257: Implements application logic: "doctrine/couchdb": "~1.0@dev",
- Line 2258: Implements application logic: "elasticsearch/elasticsearch": "^7 || ^8",
- Line 2259: Implements application logic: "ext-json": "*",
- Line 2260: Implements application logic: "graylog2/gelf-php": "^1.4.2 || ^2.0",
- Line 2261: Implements application logic: "guzzlehttp/guzzle": "^7.4.5",
- Line 2262: Implements application logic: "guzzlehttp/psr7": "^2.2",
- Line 2263: Implements application logic: "mongodb/mongodb": "^1.8 || ^2.0",
- Line 2264: Implements application logic: "php-amqplib/php-amqplib": "~2.4 || ^3",
- Line 2265: Implements application logic: "php-console/php-console": "^3.1.8",
- Line 2266: Implements application logic: "phpstan/phpstan": "^2",
- Line 2267: Implements application logic: "phpstan/phpstan-deprecation-rules": "^2",
- Line 2268: Implements application logic: "phpstan/phpstan-strict-rules": "^2",
- Line 2269: Implements application logic: "phpunit/phpunit": "^10.5.17 || ^11.0.7",
- Line 2270: Implements application logic: "predis/predis": "^1.1 || ^2",
- Line 2271: Implements application logic: "rollbar/rollbar": "^4.0",
- Line 2272: Implements application logic: "ruflin/elastica": "^7 || ^8",
- Line 2273: Implements application logic: "symfony/mailer": "^5.4 || ^6",
- Line 2274: Implements application logic: "symfony/mime": "^5.4 || ^6"
- Line 2275: Implements application logic: },
- Line 2276: Implements application logic: "suggest": {
- Line 2277: Implements application logic: "aws/aws-sdk-php": "Allow sending log messages to AWS services like DynamoDB",
- Line 2278: Implements application logic: "doctrine/couchdb": "Allow sending log messages to a CouchDB server",
- Line 2279: Implements application logic: "elasticsearch/elasticsearch": "Allow sending log messages to an Elasticsearch server via official client",
- Line 2280: Implements application logic: "ext-amqp": "Allow sending log messages to an AMQP server (1.0+ required)",
- Line 2281: Implements application logic: "ext-curl": "Required to send log messages using the IFTTTHandler, the LogglyHandler, the SendGridHandler, the SlackWebhookHandler or the TelegramBotHandler",
- Line 2282: Implements application logic: "ext-mbstring": "Allow to work properly with unicode symbols",
- Line 2283: Implements application logic: "ext-mongodb": "Allow sending log messages to a MongoDB server (via driver)",
- Line 2284: Implements application logic: "ext-openssl": "Required to send log messages using SSL",
- Line 2285: Implements application logic: "ext-sockets": "Allow sending log messages to a Syslog server (via UDP driver)",
- Line 2286: Implements application logic: "graylog2/gelf-php": "Allow sending log messages to a GrayLog2 server",
- Line 2287: Implements application logic: "mongodb/mongodb": "Allow sending log messages to a MongoDB server (via library)",
- Line 2288: Implements application logic: "php-amqplib/php-amqplib": "Allow sending log messages to an AMQP server using php-amqplib",
- Line 2289: Implements application logic: "rollbar/rollbar": "Allow sending log messages to Rollbar",
- Line 2290: Implements application logic: "ruflin/elastica": "Allow sending log messages to an Elastic Search server"
- Line 2291: Implements application logic: },
- Line 2292: Implements application logic: "type": "library",
- Line 2293: Implements application logic: "extra": {
- Line 2294: Implements application logic: "branch-alias": {
- Line 2295: Implements application logic: "dev-main": "3.x-dev"
- Line 2296: Implements application logic: }
- Line 2297: Implements application logic: },
- Line 2298: Implements application logic: "autoload": {
- Line 2299: Implements application logic: "psr-4": {
- Line 2300: Implements application logic: "Monolog\\": "src/Monolog"
- Line 2301: Implements application logic: }
- Line 2302: Implements application logic: },
- Line 2303: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 2304: Implements application logic: "license": [
- Line 2305: Implements application logic: "MIT"
- Line 2306: Implements application logic: ],
- Line 2307: Implements application logic: "authors": [
- Line 2308: Implements application logic: {
- Line 2309: Implements application logic: "name": "Jordi Boggiano",
- Line 2310: Implements application logic: "email": "j.boggiano@seld.be",
- Line 2311: Implements application logic: "homepage": "https://seld.be"
- Line 2312: Implements application logic: }
- Line 2313: Implements application logic: ],
- Line 2314: Implements application logic: "description": "Sends your logs to files, sockets, inboxes, databases and various web services",
- Line 2315: Implements application logic: "homepage": "https://github.com/Seldaek/monolog",
- Line 2316: Implements application logic: "keywords": [
- Line 2317: Implements application logic: "log",
- Line 2318: Implements application logic: "logging",
- Line 2319: Implements application logic: "psr-3"
- Line 2320: Implements application logic: ],
- Line 2321: Implements application logic: "support": {
- Line 2322: Implements application logic: "issues": "https://github.com/Seldaek/monolog/issues",
- Line 2323: Implements application logic: "source": "https://github.com/Seldaek/monolog/tree/3.10.0"
- Line 2324: Implements application logic: },
- Line 2325: Implements application logic: "funding": [
- Line 2326: Implements application logic: {
- Line 2327: Implements application logic: "url": "https://github.com/Seldaek",
- Line 2328: Implements application logic: "type": "github"
- Line 2329: Implements application logic: },
- Line 2330: Implements application logic: {
- Line 2331: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/monolog/monolog",
- Line 2332: Implements application logic: "type": "tidelift"
- Line 2333: Implements application logic: }
- Line 2334: Implements application logic: ],
- Line 2335: Implements application logic: "time": "2026-01-02T08:56:05+00:00"
- Line 2336: Implements application logic: },
- Line 2337: Implements application logic: {
- Line 2338: Implements application logic: "name": "nesbot/carbon",
- Line 2339: Implements application logic: "version": "3.11.4",
- Line 2340: Implements application logic: "source": {
- Line 2341: Implements application logic: "type": "git",
- Line 2342: Implements application logic: "url": "https://github.com/CarbonPHP/carbon.git",
- Line 2343: Implements application logic: "reference": "e890471a3494740f7d9326d72ce6a8c559ffee60"
- Line 2344: Implements application logic: },
- Line 2345: Implements application logic: "dist": {
- Line 2346: Implements application logic: "type": "zip",
- Line 2347: Implements application logic: "url": "https://api.github.com/repos/CarbonPHP/carbon/zipball/e890471a3494740f7d9326d72ce6a8c559ffee60",
- Line 2348: Implements application logic: "reference": "e890471a3494740f7d9326d72ce6a8c559ffee60",
- Line 2349: Implements application logic: "shasum": ""
- Line 2350: Implements application logic: },
- Line 2351: Implements application logic: "require": {
- Line 2352: Implements application logic: "carbonphp/carbon-doctrine-types": "<100.0",
- Line 2353: Implements application logic: "ext-json": "*",
- Line 2354: Implements application logic: "php": "^8.1",
- Line 2355: Implements application logic: "psr/clock": "^1.0",
- Line 2356: Implements application logic: "symfony/clock": "^6.3.12 || ^7.0 || ^8.0",
- Line 2357: Implements application logic: "symfony/polyfill-mbstring": "^1.0",
- Line 2358: Implements application logic: "symfony/translation": "^4.4.18 || ^5.2.1 || ^6.0 || ^7.0 || ^8.0"
- Line 2359: Implements application logic: },
- Line 2360: Implements application logic: "provide": {
- Line 2361: Implements application logic: "psr/clock-implementation": "1.0"
- Line 2362: Implements application logic: },
- Line 2363: Implements application logic: "require-dev": {
- Line 2364: Implements application logic: "doctrine/dbal": "^3.6.3 || ^4.0",
- Line 2365: Implements application logic: "doctrine/orm": "^2.15.2 || ^3.0",
- Line 2366: Implements application logic: "friendsofphp/php-cs-fixer": "^v3.87.1",
- Line 2367: Implements application logic: "kylekatarnls/multi-tester": "^2.5.3",
- Line 2368: Implements application logic: "phpmd/phpmd": "^2.15.0",
- Line 2369: Implements application logic: "phpstan/extension-installer": "^1.4.3",
- Line 2370: Implements application logic: "phpstan/phpstan": "^2.1.22",
- Line 2371: Implements application logic: "phpunit/phpunit": "^10.5.53",
- Line 2372: Implements application logic: "squizlabs/php_codesniffer": "^3.13.4 || ^4.0.0"
- Line 2373: Implements application logic: },
- Line 2374: Implements application logic: "bin": [
- Line 2375: Implements application logic: "bin/carbon"
- Line 2376: Implements application logic: ],
- Line 2377: Implements application logic: "type": "library",
- Line 2378: Implements application logic: "extra": {
- Line 2379: Implements application logic: "laravel": {
- Line 2380: Implements application logic: "providers": [
- Line 2381: Implements application logic: "Carbon\\Laravel\\ServiceProvider"
- Line 2382: Implements application logic: ]
- Line 2383: Implements application logic: },
- Line 2384: Implements application logic: "phpstan": {
- Line 2385: Implements application logic: "includes": [
- Line 2386: Implements application logic: "extension.neon"
- Line 2387: Implements application logic: ]
- Line 2388: Implements application logic: },
- Line 2389: Implements application logic: "branch-alias": {
- Line 2390: Implements application logic: "dev-2.x": "2.x-dev",
- Line 2391: Implements application logic: "dev-master": "3.x-dev"
- Line 2392: Implements application logic: }
- Line 2393: Implements application logic: },
- Line 2394: Implements application logic: "autoload": {
- Line 2395: Implements application logic: "psr-4": {
- Line 2396: Implements application logic: "Carbon\\": "src/Carbon/"
- Line 2397: Implements application logic: }
- Line 2398: Implements application logic: },
- Line 2399: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 2400: Implements application logic: "license": [
- Line 2401: Implements application logic: "MIT"
- Line 2402: Implements application logic: ],
- Line 2403: Implements application logic: "authors": [
- Line 2404: Implements application logic: {
- Line 2405: Implements application logic: "name": "Brian Nesbitt",
- Line 2406: Implements application logic: "email": "brian@nesbot.com",
- Line 2407: Implements application logic: "homepage": "https://markido.com"
- Line 2408: Implements application logic: },
- Line 2409: Implements application logic: {
- Line 2410: Implements application logic: "name": "kylekatarnls",
- Line 2411: Implements application logic: "homepage": "https://github.com/kylekatarnls"
- Line 2412: Implements application logic: }
- Line 2413: Implements application logic: ],
- Line 2414: Implements application logic: "description": "An API extension for DateTime that supports 281 different languages.",
- Line 2415: Implements application logic: "homepage": "https://carbonphp.github.io/carbon/",
- Line 2416: Implements application logic: "keywords": [
- Line 2417: Implements application logic: "date",
- Line 2418: Implements application logic: "datetime",
- Line 2419: Implements application logic: "time"
- Line 2420: Implements application logic: ],
- Line 2421: Implements application logic: "support": {
- Line 2422: Implements application logic: "docs": "https://carbonphp.github.io/carbon/guide/getting-started/introduction.html",
- Line 2423: Implements application logic: "issues": "https://github.com/CarbonPHP/carbon/issues",
- Line 2424: Implements application logic: "source": "https://github.com/CarbonPHP/carbon"
- Line 2425: Implements application logic: },
- Line 2426: Implements application logic: "funding": [
- Line 2427: Implements application logic: {
- Line 2428: Implements application logic: "url": "https://github.com/sponsors/kylekatarnls",
- Line 2429: Implements application logic: "type": "github"
- Line 2430: Implements application logic: },
- Line 2431: Implements application logic: {
- Line 2432: Implements application logic: "url": "https://opencollective.com/Carbon#sponsor",
- Line 2433: Implements application logic: "type": "opencollective"
- Line 2434: Implements application logic: },
- Line 2435: Implements application logic: {
- Line 2436: Implements application logic: "url": "https://tidelift.com/subscription/pkg/packagist-nesbot-carbon?utm_source=packagist-nesbot-carbon&utm_medium=referral&utm_campaign=readme",
- Line 2437: Implements application logic: "type": "tidelift"
- Line 2438: Implements application logic: }
- Line 2439: Implements application logic: ],
- Line 2440: Implements application logic: "time": "2026-04-07T09:57:54+00:00"
- Line 2441: Implements application logic: },
- Line 2442: Implements application logic: {
- Line 2443: Implements application logic: "name": "nette/schema",
- Line 2444: Implements application logic: "version": "v1.3.5",
- Line 2445: Implements application logic: "source": {
- Line 2446: Implements application logic: "type": "git",
- Line 2447: Implements application logic: "url": "https://github.com/nette/schema.git",
- Line 2448: Implements application logic: "reference": "f0ab1a3cda782dbc5da270d28545236aa80c4002"
- Line 2449: Implements application logic: },
- Line 2450: Implements application logic: "dist": {
- Line 2451: Implements application logic: "type": "zip",
- Line 2452: Implements application logic: "url": "https://api.github.com/repos/nette/schema/zipball/f0ab1a3cda782dbc5da270d28545236aa80c4002",
- Line 2453: Implements application logic: "reference": "f0ab1a3cda782dbc5da270d28545236aa80c4002",
- Line 2454: Implements application logic: "shasum": ""
- Line 2455: Implements application logic: },
- Line 2456: Implements application logic: "require": {
- Line 2457: Implements application logic: "nette/utils": "^4.0",
- Line 2458: Implements application logic: "php": "8.1 - 8.5"
- Line 2459: Implements application logic: },
- Line 2460: Implements application logic: "require-dev": {
- Line 2461: Implements application logic: "nette/phpstan-rules": "^1.0",
- Line 2462: Implements application logic: "nette/tester": "^2.6",
- Line 2463: Implements application logic: "phpstan/extension-installer": "^1.4@stable",
- Line 2464: Implements application logic: "phpstan/phpstan": "^2.1.39@stable",
- Line 2465: Implements application logic: "tracy/tracy": "^2.8"
- Line 2466: Implements application logic: },
- Line 2467: Implements application logic: "type": "library",
- Line 2468: Implements application logic: "extra": {
- Line 2469: Implements application logic: "branch-alias": {
- Line 2470: Implements application logic: "dev-master": "1.3-dev"
- Line 2471: Implements application logic: }
- Line 2472: Implements application logic: },
- Line 2473: Implements application logic: "autoload": {
- Line 2474: Implements application logic: "psr-4": {
- Line 2475: Implements application logic: "Nette\\": "src"
- Line 2476: Implements application logic: },
- Line 2477: Implements application logic: "classmap": [
- Line 2478: Implements application logic: "src/"
- Line 2479: Implements application logic: ]
- Line 2480: Implements application logic: },
- Line 2481: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 2482: Implements application logic: "license": [
- Line 2483: Implements application logic: "BSD-3-Clause",
- Line 2484: Implements application logic: "GPL-2.0-only",
- Line 2485: Implements application logic: "GPL-3.0-only"
- Line 2486: Implements application logic: ],
- Line 2487: Implements application logic: "authors": [
- Line 2488: Implements application logic: {
- Line 2489: Implements application logic: "name": "David Grudl",
- Line 2490: Implements application logic: "homepage": "https://davidgrudl.com"
- Line 2491: Implements application logic: },
- Line 2492: Implements application logic: {
- Line 2493: Implements application logic: "name": "Nette Community",
- Line 2494: Implements application logic: "homepage": "https://nette.org/contributors"
- Line 2495: Implements application logic: }
- Line 2496: Implements application logic: ],
- Line 2497: Implements application logic: "description": "📐 Nette Schema: validating data structures against a given Schema.",
- Line 2498: Implements application logic: "homepage": "https://nette.org",
- Line 2499: Implements application logic: "keywords": [
- Line 2500: Implements application logic: "config",
- Line 2501: Implements application logic: "nette"
- Line 2502: Implements application logic: ],
- Line 2503: Implements application logic: "support": {
- Line 2504: Implements application logic: "issues": "https://github.com/nette/schema/issues",
- Line 2505: Implements application logic: "source": "https://github.com/nette/schema/tree/v1.3.5"
- Line 2506: Implements application logic: },
- Line 2507: Implements application logic: "time": "2026-02-23T03:47:12+00:00"
- Line 2508: Implements application logic: },
- Line 2509: Implements application logic: {
- Line 2510: Implements application logic: "name": "nette/utils",
- Line 2511: Implements application logic: "version": "v4.1.3",
- Line 2512: Implements application logic: "source": {
- Line 2513: Implements application logic: "type": "git",
- Line 2514: Implements application logic: "url": "https://github.com/nette/utils.git",
- Line 2515: Implements application logic: "reference": "bb3ea637e3d131d72acc033cfc2746ee893349fe"
- Line 2516: Implements application logic: },
- Line 2517: Implements application logic: "dist": {
- Line 2518: Implements application logic: "type": "zip",
- Line 2519: Implements application logic: "url": "https://api.github.com/repos/nette/utils/zipball/bb3ea637e3d131d72acc033cfc2746ee893349fe",
- Line 2520: Implements application logic: "reference": "bb3ea637e3d131d72acc033cfc2746ee893349fe",
- Line 2521: Implements application logic: "shasum": ""
- Line 2522: Implements application logic: },
- Line 2523: Implements application logic: "require": {
- Line 2524: Implements application logic: "php": "8.2 - 8.5"
- Line 2525: Implements application logic: },
- Line 2526: Implements application logic: "conflict": {
- Line 2527: Implements application logic: "nette/finder": "<3",
- Line 2528: Implements application logic: "nette/schema": "<1.2.2"
- Line 2529: Implements application logic: },
- Line 2530: Implements application logic: "require-dev": {
- Line 2531: Implements application logic: "jetbrains/phpstorm-attributes": "^1.2",
- Line 2532: Implements application logic: "nette/phpstan-rules": "^1.0",
- Line 2533: Implements application logic: "nette/tester": "^2.5",
- Line 2534: Implements application logic: "phpstan/extension-installer": "^1.4@stable",
- Line 2535: Implements application logic: "phpstan/phpstan": "^2.1@stable",
- Line 2536: Implements application logic: "tracy/tracy": "^2.9"
- Line 2537: Implements application logic: },
- Line 2538: Implements application logic: "suggest": {
- Line 2539: Implements application logic: "ext-gd": "to use Image",
- Line 2540: Implements application logic: "ext-iconv": "to use Strings::webalize(), toAscii(), chr() and reverse()",
- Line 2541: Implements application logic: "ext-intl": "to use Strings::webalize(), toAscii(), normalize() and compare()",
- Line 2542: Implements application logic: "ext-json": "to use Nette\\Utils\\Json",
- Line 2543: Implements application logic: "ext-mbstring": "to use Strings::lower() etc...",
- Line 2544: Implements application logic: "ext-tokenizer": "to use Nette\\Utils\\Reflection::getUseStatements()"
- Line 2545: Implements application logic: },
- Line 2546: Implements application logic: "type": "library",
- Line 2547: Implements application logic: "extra": {
- Line 2548: Implements application logic: "branch-alias": {
- Line 2549: Implements application logic: "dev-master": "4.1-dev"
- Line 2550: Implements application logic: }
- Line 2551: Implements application logic: },
- Line 2552: Implements application logic: "autoload": {
- Line 2553: Implements application logic: "psr-4": {
- Line 2554: Implements application logic: "Nette\\": "src"
- Line 2555: Implements application logic: },
- Line 2556: Implements application logic: "classmap": [
- Line 2557: Implements application logic: "src/"
- Line 2558: Implements application logic: ]
- Line 2559: Implements application logic: },
- Line 2560: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 2561: Implements application logic: "license": [
- Line 2562: Implements application logic: "BSD-3-Clause",
- Line 2563: Implements application logic: "GPL-2.0-only",
- Line 2564: Implements application logic: "GPL-3.0-only"
- Line 2565: Implements application logic: ],
- Line 2566: Implements application logic: "authors": [
- Line 2567: Implements application logic: {
- Line 2568: Implements application logic: "name": "David Grudl",
- Line 2569: Implements application logic: "homepage": "https://davidgrudl.com"
- Line 2570: Implements application logic: },
- Line 2571: Implements application logic: {
- Line 2572: Implements application logic: "name": "Nette Community",
- Line 2573: Implements application logic: "homepage": "https://nette.org/contributors"
- Line 2574: Implements application logic: }
- Line 2575: Implements application logic: ],
- Line 2576: Implements application logic: "description": "🛠  Nette Utils: lightweight utilities for string & array manipulation, image handling, safe JSON encoding/decoding, validation, slug or strong password generating etc.",
- Line 2577: Implements application logic: "homepage": "https://nette.org",
- Line 2578: Implements application logic: "keywords": [
- Line 2579: Implements application logic: "array",
- Line 2580: Implements application logic: "core",
- Line 2581: Implements application logic: "datetime",
- Line 2582: Implements application logic: "images",
- Line 2583: Implements application logic: "json",
- Line 2584: Implements application logic: "nette",
- Line 2585: Implements application logic: "paginator",
- Line 2586: Implements application logic: "password",
- Line 2587: Implements application logic: "slugify",
- Line 2588: Implements application logic: "string",
- Line 2589: Implements application logic: "unicode",
- Line 2590: Implements application logic: "utf-8",
- Line 2591: Implements application logic: "utility",
- Line 2592: Implements application logic: "validation"
- Line 2593: Implements application logic: ],
- Line 2594: Implements application logic: "support": {
- Line 2595: Implements application logic: "issues": "https://github.com/nette/utils/issues",
- Line 2596: Implements application logic: "source": "https://github.com/nette/utils/tree/v4.1.3"
- Line 2597: Implements application logic: },
- Line 2598: Implements application logic: "time": "2026-02-13T03:05:33+00:00"
- Line 2599: Implements application logic: },
- Line 2600: Implements application logic: {
- Line 2601: Implements application logic: "name": "nikic/php-parser",
- Line 2602: Implements application logic: "version": "v5.7.0",
- Line 2603: Implements application logic: "source": {
- Line 2604: Implements application logic: "type": "git",
- Line 2605: Implements application logic: "url": "https://github.com/nikic/PHP-Parser.git",
- Line 2606: Implements application logic: "reference": "dca41cd15c2ac9d055ad70dbfd011130757d1f82"
- Line 2607: Implements application logic: },
- Line 2608: Implements application logic: "dist": {
- Line 2609: Implements application logic: "type": "zip",
- Line 2610: Implements application logic: "url": "https://api.github.com/repos/nikic/PHP-Parser/zipball/dca41cd15c2ac9d055ad70dbfd011130757d1f82",
- Line 2611: Implements application logic: "reference": "dca41cd15c2ac9d055ad70dbfd011130757d1f82",
- Line 2612: Implements application logic: "shasum": ""
- Line 2613: Implements application logic: },
- Line 2614: Implements application logic: "require": {
- Line 2615: Implements application logic: "ext-ctype": "*",
- Line 2616: Implements application logic: "ext-json": "*",
- Line 2617: Implements application logic: "ext-tokenizer": "*",
- Line 2618: Implements application logic: "php": ">=7.4"
- Line 2619: Implements application logic: },
- Line 2620: Implements application logic: "require-dev": {
- Line 2621: Implements application logic: "ircmaxell/php-yacc": "^0.0.7",
- Line 2622: Implements application logic: "phpunit/phpunit": "^9.0"
- Line 2623: Implements application logic: },
- Line 2624: Implements application logic: "bin": [
- Line 2625: Implements application logic: "bin/php-parse"
- Line 2626: Implements application logic: ],
- Line 2627: Implements application logic: "type": "library",
- Line 2628: Implements application logic: "extra": {
- Line 2629: Implements application logic: "branch-alias": {
- Line 2630: Implements application logic: "dev-master": "5.x-dev"
- Line 2631: Implements application logic: }
- Line 2632: Implements application logic: },
- Line 2633: Implements application logic: "autoload": {
- Line 2634: Implements application logic: "psr-4": {
- Line 2635: Implements application logic: "PhpParser\\": "lib/PhpParser"
- Line 2636: Implements application logic: }
- Line 2637: Implements application logic: },
- Line 2638: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 2639: Implements application logic: "license": [
- Line 2640: Implements application logic: "BSD-3-Clause"
- Line 2641: Implements application logic: ],
- Line 2642: Implements application logic: "authors": [
- Line 2643: Implements application logic: {
- Line 2644: Implements application logic: "name": "Nikita Popov"
- Line 2645: Implements application logic: }
- Line 2646: Implements application logic: ],
- Line 2647: Implements application logic: "description": "A PHP parser written in PHP",
- Line 2648: Implements application logic: "keywords": [
- Line 2649: Implements application logic: "parser",
- Line 2650: Implements application logic: "php"
- Line 2651: Implements application logic: ],
- Line 2652: Implements application logic: "support": {
- Line 2653: Implements application logic: "issues": "https://github.com/nikic/PHP-Parser/issues",
- Line 2654: Implements application logic: "source": "https://github.com/nikic/PHP-Parser/tree/v5.7.0"
- Line 2655: Implements application logic: },
- Line 2656: Implements application logic: "time": "2025-12-06T11:56:16+00:00"
- Line 2657: Implements application logic: },
- Line 2658: Implements application logic: {
- Line 2659: Implements application logic: "name": "nunomaduro/termwind",
- Line 2660: Implements application logic: "version": "v2.4.0",
- Line 2661: Implements application logic: "source": {
- Line 2662: Implements application logic: "type": "git",
- Line 2663: Implements application logic: "url": "https://github.com/nunomaduro/termwind.git",
- Line 2664: Implements application logic: "reference": "712a31b768f5daea284c2169a7d227031001b9a8"
- Line 2665: Implements application logic: },
- Line 2666: Implements application logic: "dist": {
- Line 2667: Implements application logic: "type": "zip",
- Line 2668: Implements application logic: "url": "https://api.github.com/repos/nunomaduro/termwind/zipball/712a31b768f5daea284c2169a7d227031001b9a8",
- Line 2669: Implements application logic: "reference": "712a31b768f5daea284c2169a7d227031001b9a8",
- Line 2670: Implements application logic: "shasum": ""
- Line 2671: Implements application logic: },
- Line 2672: Implements application logic: "require": {
- Line 2673: Implements application logic: "ext-mbstring": "*",
- Line 2674: Implements application logic: "php": "^8.2",
- Line 2675: Implements application logic: "symfony/console": "^7.4.4 || ^8.0.4"
- Line 2676: Implements application logic: },
- Line 2677: Implements application logic: "require-dev": {
- Line 2678: Implements application logic: "illuminate/console": "^11.47.0",
- Line 2679: Implements application logic: "laravel/pint": "^1.27.1",
- Line 2680: Implements application logic: "mockery/mockery": "^1.6.12",
- Line 2681: Implements application logic: "pestphp/pest": "^2.36.0 || ^3.8.4 || ^4.3.2",
- Line 2682: Implements application logic: "phpstan/phpstan": "^1.12.32",
- Line 2683: Implements application logic: "phpstan/phpstan-strict-rules": "^1.6.2",
- Line 2684: Implements application logic: "symfony/var-dumper": "^7.3.5 || ^8.0.4",
- Line 2685: Implements application logic: "thecodingmachine/phpstan-strict-rules": "^1.0.0"
- Line 2686: Implements application logic: },
- Line 2687: Implements application logic: "type": "library",
- Line 2688: Implements application logic: "extra": {
- Line 2689: Implements application logic: "laravel": {
- Line 2690: Implements application logic: "providers": [
- Line 2691: Implements application logic: "Termwind\\Laravel\\TermwindServiceProvider"
- Line 2692: Implements application logic: ]
- Line 2693: Implements application logic: },
- Line 2694: Implements application logic: "branch-alias": {
- Line 2695: Implements application logic: "dev-2.x": "2.x-dev"
- Line 2696: Implements application logic: }
- Line 2697: Implements application logic: },
- Line 2698: Implements application logic: "autoload": {
- Line 2699: Implements application logic: "files": [
- Line 2700: Implements application logic: "src/Functions.php"
- Line 2701: Implements application logic: ],
- Line 2702: Implements application logic: "psr-4": {
- Line 2703: Implements application logic: "Termwind\\": "src/"
- Line 2704: Implements application logic: }
- Line 2705: Implements application logic: },
- Line 2706: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 2707: Implements application logic: "license": [
- Line 2708: Implements application logic: "MIT"
- Line 2709: Implements application logic: ],
- Line 2710: Implements application logic: "authors": [
- Line 2711: Implements application logic: {
- Line 2712: Implements application logic: "name": "Nuno Maduro",
- Line 2713: Implements application logic: "email": "enunomaduro@gmail.com"
- Line 2714: Implements application logic: }
- Line 2715: Implements application logic: ],
- Line 2716: Implements application logic: "description": "It's like Tailwind CSS, but for the console.",
- Line 2717: Implements application logic: "keywords": [
- Line 2718: Implements application logic: "cli",
- Line 2719: Implements application logic: "console",
- Line 2720: Implements application logic: "css",
- Line 2721: Implements application logic: "package",
- Line 2722: Implements application logic: "php",
- Line 2723: Implements application logic: "style"
- Line 2724: Implements application logic: ],
- Line 2725: Implements application logic: "support": {
- Line 2726: Implements application logic: "issues": "https://github.com/nunomaduro/termwind/issues",
- Line 2727: Implements application logic: "source": "https://github.com/nunomaduro/termwind/tree/v2.4.0"
- Line 2728: Implements application logic: },
- Line 2729: Implements application logic: "funding": [
- Line 2730: Implements application logic: {
- Line 2731: Implements application logic: "url": "https://www.paypal.com/paypalme/enunomaduro",
- Line 2732: Implements application logic: "type": "custom"
- Line 2733: Implements application logic: },
- Line 2734: Implements application logic: {
- Line 2735: Implements application logic: "url": "https://github.com/nunomaduro",
- Line 2736: Implements application logic: "type": "github"
- Line 2737: Implements application logic: },
- Line 2738: Implements application logic: {
- Line 2739: Implements application logic: "url": "https://github.com/xiCO2k",
- Line 2740: Implements application logic: "type": "github"
- Line 2741: Implements application logic: }
- Line 2742: Implements application logic: ],
- Line 2743: Implements application logic: "time": "2026-02-16T23:10:27+00:00"
- Line 2744: Implements application logic: },
- Line 2745: Implements application logic: {
- Line 2746: Implements application logic: "name": "phpoption/phpoption",
- Line 2747: Implements application logic: "version": "1.9.5",
- Line 2748: Implements application logic: "source": {
- Line 2749: Implements application logic: "type": "git",
- Line 2750: Implements application logic: "url": "https://github.com/schmittjoh/php-option.git",
- Line 2751: Implements application logic: "reference": "75365b91986c2405cf5e1e012c5595cd487a98be"
- Line 2752: Implements application logic: },
- Line 2753: Implements application logic: "dist": {
- Line 2754: Implements application logic: "type": "zip",
- Line 2755: Implements application logic: "url": "https://api.github.com/repos/schmittjoh/php-option/zipball/75365b91986c2405cf5e1e012c5595cd487a98be",
- Line 2756: Implements application logic: "reference": "75365b91986c2405cf5e1e012c5595cd487a98be",
- Line 2757: Implements application logic: "shasum": ""
- Line 2758: Implements application logic: },
- Line 2759: Implements application logic: "require": {
- Line 2760: Implements application logic: "php": "^7.2.5 || ^8.0"
- Line 2761: Implements application logic: },
- Line 2762: Implements application logic: "require-dev": {
- Line 2763: Implements application logic: "bamarni/composer-bin-plugin": "^1.8.2",
- Line 2764: Implements application logic: "phpunit/phpunit": "^8.5.44 || ^9.6.25 || ^10.5.53 || ^11.5.34"
- Line 2765: Implements application logic: },
- Line 2766: Implements application logic: "type": "library",
- Line 2767: Implements application logic: "extra": {
- Line 2768: Implements application logic: "bamarni-bin": {
- Line 2769: Implements application logic: "bin-links": true,
- Line 2770: Implements application logic: "forward-command": false
- Line 2771: Implements application logic: },
- Line 2772: Implements application logic: "branch-alias": {
- Line 2773: Implements application logic: "dev-master": "1.9-dev"
- Line 2774: Implements application logic: }
- Line 2775: Implements application logic: },
- Line 2776: Implements application logic: "autoload": {
- Line 2777: Implements application logic: "psr-4": {
- Line 2778: Implements application logic: "PhpOption\\": "src/PhpOption/"
- Line 2779: Implements application logic: }
- Line 2780: Implements application logic: },
- Line 2781: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 2782: Implements application logic: "license": [
- Line 2783: Implements application logic: "Apache-2.0"
- Line 2784: Implements application logic: ],
- Line 2785: Implements application logic: "authors": [
- Line 2786: Implements application logic: {
- Line 2787: Implements application logic: "name": "Johannes M. Schmitt",
- Line 2788: Implements application logic: "email": "schmittjoh@gmail.com",
- Line 2789: Implements application logic: "homepage": "https://github.com/schmittjoh"
- Line 2790: Implements application logic: },
- Line 2791: Implements application logic: {
- Line 2792: Implements application logic: "name": "Graham Campbell",
- Line 2793: Implements application logic: "email": "hello@gjcampbell.co.uk",
- Line 2794: Implements application logic: "homepage": "https://github.com/GrahamCampbell"
- Line 2795: Implements application logic: }
- Line 2796: Implements application logic: ],
- Line 2797: Implements application logic: "description": "Option Type for PHP",
- Line 2798: Implements application logic: "keywords": [
- Line 2799: Implements application logic: "language",
- Line 2800: Implements application logic: "option",
- Line 2801: Implements application logic: "php",
- Line 2802: Implements application logic: "type"
- Line 2803: Implements application logic: ],
- Line 2804: Implements application logic: "support": {
- Line 2805: Implements application logic: "issues": "https://github.com/schmittjoh/php-option/issues",
- Line 2806: Implements application logic: "source": "https://github.com/schmittjoh/php-option/tree/1.9.5"
- Line 2807: Implements application logic: },
- Line 2808: Implements application logic: "funding": [
- Line 2809: Implements application logic: {
- Line 2810: Implements application logic: "url": "https://github.com/GrahamCampbell",
- Line 2811: Implements application logic: "type": "github"
- Line 2812: Implements application logic: },
- Line 2813: Implements application logic: {
- Line 2814: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/phpoption/phpoption",
- Line 2815: Implements application logic: "type": "tidelift"
- Line 2816: Implements application logic: }
- Line 2817: Implements application logic: ],
- Line 2818: Implements application logic: "time": "2025-12-27T19:41:33+00:00"
- Line 2819: Implements application logic: },
- Line 2820: Implements application logic: {
- Line 2821: Implements application logic: "name": "psr/clock",
- Line 2822: Implements application logic: "version": "1.0.0",
- Line 2823: Implements application logic: "source": {
- Line 2824: Implements application logic: "type": "git",
- Line 2825: Implements application logic: "url": "https://github.com/php-fig/clock.git",
- Line 2826: Implements application logic: "reference": "e41a24703d4560fd0acb709162f73b8adfc3aa0d"
- Line 2827: Implements application logic: },
- Line 2828: Implements application logic: "dist": {
- Line 2829: Implements application logic: "type": "zip",
- Line 2830: Implements application logic: "url": "https://api.github.com/repos/php-fig/clock/zipball/e41a24703d4560fd0acb709162f73b8adfc3aa0d",
- Line 2831: Implements application logic: "reference": "e41a24703d4560fd0acb709162f73b8adfc3aa0d",
- Line 2832: Implements application logic: "shasum": ""
- Line 2833: Implements application logic: },
- Line 2834: Implements application logic: "require": {
- Line 2835: Implements application logic: "php": "^7.0 || ^8.0"
- Line 2836: Implements application logic: },
- Line 2837: Implements application logic: "type": "library",
- Line 2838: Implements application logic: "autoload": {
- Line 2839: Implements application logic: "psr-4": {
- Line 2840: Implements application logic: "Psr\\Clock\\": "src/"
- Line 2841: Implements application logic: }
- Line 2842: Implements application logic: },
- Line 2843: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 2844: Implements application logic: "license": [
- Line 2845: Implements application logic: "MIT"
- Line 2846: Implements application logic: ],
- Line 2847: Implements application logic: "authors": [
- Line 2848: Implements application logic: {
- Line 2849: Implements application logic: "name": "PHP-FIG",
- Line 2850: Implements application logic: "homepage": "https://www.php-fig.org/"
- Line 2851: Implements application logic: }
- Line 2852: Implements application logic: ],
- Line 2853: Implements application logic: "description": "Common interface for reading the clock.",
- Line 2854: Implements application logic: "homepage": "https://github.com/php-fig/clock",
- Line 2855: Implements application logic: "keywords": [
- Line 2856: Implements application logic: "clock",
- Line 2857: Implements application logic: "now",
- Line 2858: Implements application logic: "psr",
- Line 2859: Implements application logic: "psr-20",
- Line 2860: Implements application logic: "time"
- Line 2861: Implements application logic: ],
- Line 2862: Implements application logic: "support": {
- Line 2863: Implements application logic: "issues": "https://github.com/php-fig/clock/issues",
- Line 2864: Implements application logic: "source": "https://github.com/php-fig/clock/tree/1.0.0"
- Line 2865: Implements application logic: },
- Line 2866: Implements application logic: "time": "2022-11-25T14:36:26+00:00"
- Line 2867: Implements application logic: },
- Line 2868: Implements application logic: {
- Line 2869: Implements application logic: "name": "psr/container",
- Line 2870: Implements application logic: "version": "2.0.2",
- Line 2871: Implements application logic: "source": {
- Line 2872: Implements application logic: "type": "git",
- Line 2873: Implements application logic: "url": "https://github.com/php-fig/container.git",
- Line 2874: Implements application logic: "reference": "c71ecc56dfe541dbd90c5360474fbc405f8d5963"
- Line 2875: Implements application logic: },
- Line 2876: Implements application logic: "dist": {
- Line 2877: Implements application logic: "type": "zip",
- Line 2878: Implements application logic: "url": "https://api.github.com/repos/php-fig/container/zipball/c71ecc56dfe541dbd90c5360474fbc405f8d5963",
- Line 2879: Implements application logic: "reference": "c71ecc56dfe541dbd90c5360474fbc405f8d5963",
- Line 2880: Implements application logic: "shasum": ""
- Line 2881: Implements application logic: },
- Line 2882: Implements application logic: "require": {
- Line 2883: Implements application logic: "php": ">=7.4.0"
- Line 2884: Implements application logic: },
- Line 2885: Implements application logic: "type": "library",
- Line 2886: Implements application logic: "extra": {
- Line 2887: Implements application logic: "branch-alias": {
- Line 2888: Implements application logic: "dev-master": "2.0.x-dev"
- Line 2889: Implements application logic: }
- Line 2890: Implements application logic: },
- Line 2891: Implements application logic: "autoload": {
- Line 2892: Implements application logic: "psr-4": {
- Line 2893: Implements application logic: "Psr\\Container\\": "src/"
- Line 2894: Implements application logic: }
- Line 2895: Implements application logic: },
- Line 2896: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 2897: Implements application logic: "license": [
- Line 2898: Implements application logic: "MIT"
- Line 2899: Implements application logic: ],
- Line 2900: Implements application logic: "authors": [
- Line 2901: Implements application logic: {
- Line 2902: Implements application logic: "name": "PHP-FIG",
- Line 2903: Implements application logic: "homepage": "https://www.php-fig.org/"
- Line 2904: Implements application logic: }
- Line 2905: Implements application logic: ],
- Line 2906: Implements application logic: "description": "Common Container Interface (PHP FIG PSR-11)",
- Line 2907: Implements application logic: "homepage": "https://github.com/php-fig/container",
- Line 2908: Implements application logic: "keywords": [
- Line 2909: Implements application logic: "PSR-11",
- Line 2910: Implements application logic: "container",
- Line 2911: Implements application logic: "container-interface",
- Line 2912: Implements application logic: "container-interop",
- Line 2913: Implements application logic: "psr"
- Line 2914: Implements application logic: ],
- Line 2915: Implements application logic: "support": {
- Line 2916: Implements application logic: "issues": "https://github.com/php-fig/container/issues",
- Line 2917: Implements application logic: "source": "https://github.com/php-fig/container/tree/2.0.2"
- Line 2918: Implements application logic: },
- Line 2919: Implements application logic: "time": "2021-11-05T16:47:00+00:00"
- Line 2920: Implements application logic: },
- Line 2921: Implements application logic: {
- Line 2922: Implements application logic: "name": "psr/event-dispatcher",
- Line 2923: Implements application logic: "version": "1.0.0",
- Line 2924: Implements application logic: "source": {
- Line 2925: Implements application logic: "type": "git",
- Line 2926: Implements application logic: "url": "https://github.com/php-fig/event-dispatcher.git",
- Line 2927: Implements application logic: "reference": "dbefd12671e8a14ec7f180cab83036ed26714bb0"
- Line 2928: Implements application logic: },
- Line 2929: Implements application logic: "dist": {
- Line 2930: Implements application logic: "type": "zip",
- Line 2931: Implements application logic: "url": "https://api.github.com/repos/php-fig/event-dispatcher/zipball/dbefd12671e8a14ec7f180cab83036ed26714bb0",
- Line 2932: Implements application logic: "reference": "dbefd12671e8a14ec7f180cab83036ed26714bb0",
- Line 2933: Implements application logic: "shasum": ""
- Line 2934: Implements application logic: },
- Line 2935: Implements application logic: "require": {
- Line 2936: Implements application logic: "php": ">=7.2.0"
- Line 2937: Implements application logic: },
- Line 2938: Implements application logic: "type": "library",
- Line 2939: Implements application logic: "extra": {
- Line 2940: Implements application logic: "branch-alias": {
- Line 2941: Implements application logic: "dev-master": "1.0.x-dev"
- Line 2942: Implements application logic: }
- Line 2943: Implements application logic: },
- Line 2944: Implements application logic: "autoload": {
- Line 2945: Implements application logic: "psr-4": {
- Line 2946: Implements application logic: "Psr\\EventDispatcher\\": "src/"
- Line 2947: Implements application logic: }
- Line 2948: Implements application logic: },
- Line 2949: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 2950: Implements application logic: "license": [
- Line 2951: Implements application logic: "MIT"
- Line 2952: Implements application logic: ],
- Line 2953: Implements application logic: "authors": [
- Line 2954: Implements application logic: {
- Line 2955: Implements application logic: "name": "PHP-FIG",
- Line 2956: Implements application logic: "homepage": "http://www.php-fig.org/"
- Line 2957: Implements application logic: }
- Line 2958: Implements application logic: ],
- Line 2959: Implements application logic: "description": "Standard interfaces for event handling.",
- Line 2960: Implements application logic: "keywords": [
- Line 2961: Implements application logic: "events",
- Line 2962: Implements application logic: "psr",
- Line 2963: Implements application logic: "psr-14"
- Line 2964: Implements application logic: ],
- Line 2965: Implements application logic: "support": {
- Line 2966: Implements application logic: "issues": "https://github.com/php-fig/event-dispatcher/issues",
- Line 2967: Implements application logic: "source": "https://github.com/php-fig/event-dispatcher/tree/1.0.0"
- Line 2968: Implements application logic: },
- Line 2969: Implements application logic: "time": "2019-01-08T18:20:26+00:00"
- Line 2970: Implements application logic: },
- Line 2971: Implements application logic: {
- Line 2972: Implements application logic: "name": "psr/http-client",
- Line 2973: Implements application logic: "version": "1.0.3",
- Line 2974: Implements application logic: "source": {
- Line 2975: Implements application logic: "type": "git",
- Line 2976: Implements application logic: "url": "https://github.com/php-fig/http-client.git",
- Line 2977: Implements application logic: "reference": "bb5906edc1c324c9a05aa0873d40117941e5fa90"
- Line 2978: Implements application logic: },
- Line 2979: Implements application logic: "dist": {
- Line 2980: Implements application logic: "type": "zip",
- Line 2981: Implements application logic: "url": "https://api.github.com/repos/php-fig/http-client/zipball/bb5906edc1c324c9a05aa0873d40117941e5fa90",
- Line 2982: Implements application logic: "reference": "bb5906edc1c324c9a05aa0873d40117941e5fa90",
- Line 2983: Implements application logic: "shasum": ""
- Line 2984: Implements application logic: },
- Line 2985: Implements application logic: "require": {
- Line 2986: Implements application logic: "php": "^7.0 || ^8.0",
- Line 2987: Implements application logic: "psr/http-message": "^1.0 || ^2.0"
- Line 2988: Implements application logic: },
- Line 2989: Implements application logic: "type": "library",
- Line 2990: Implements application logic: "extra": {
- Line 2991: Implements application logic: "branch-alias": {
- Line 2992: Implements application logic: "dev-master": "1.0.x-dev"
- Line 2993: Implements application logic: }
- Line 2994: Implements application logic: },
- Line 2995: Implements application logic: "autoload": {
- Line 2996: Implements application logic: "psr-4": {
- Line 2997: Implements application logic: "Psr\\Http\\Client\\": "src/"
- Line 2998: Implements application logic: }
- Line 2999: Implements application logic: },
- Line 3000: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 3001: Implements application logic: "license": [
- Line 3002: Implements application logic: "MIT"
- Line 3003: Implements application logic: ],
- Line 3004: Implements application logic: "authors": [
- Line 3005: Implements application logic: {
- Line 3006: Implements application logic: "name": "PHP-FIG",
- Line 3007: Implements application logic: "homepage": "https://www.php-fig.org/"
- Line 3008: Implements application logic: }
- Line 3009: Implements application logic: ],
- Line 3010: Implements application logic: "description": "Common interface for HTTP clients",
- Line 3011: Implements application logic: "homepage": "https://github.com/php-fig/http-client",
- Line 3012: Implements application logic: "keywords": [
- Line 3013: Implements application logic: "http",
- Line 3014: Implements application logic: "http-client",
- Line 3015: Implements application logic: "psr",
- Line 3016: Implements application logic: "psr-18"
- Line 3017: Implements application logic: ],
- Line 3018: Implements application logic: "support": {
- Line 3019: Implements application logic: "source": "https://github.com/php-fig/http-client"
- Line 3020: Implements application logic: },
- Line 3021: Implements application logic: "time": "2023-09-23T14:17:50+00:00"
- Line 3022: Implements application logic: },
- Line 3023: Implements application logic: {
- Line 3024: Implements application logic: "name": "psr/http-factory",
- Line 3025: Implements application logic: "version": "1.1.0",
- Line 3026: Implements application logic: "source": {
- Line 3027: Implements application logic: "type": "git",
- Line 3028: Implements application logic: "url": "https://github.com/php-fig/http-factory.git",
- Line 3029: Implements application logic: "reference": "2b4765fddfe3b508ac62f829e852b1501d3f6e8a"
- Line 3030: Implements application logic: },
- Line 3031: Implements application logic: "dist": {
- Line 3032: Implements application logic: "type": "zip",
- Line 3033: Implements application logic: "url": "https://api.github.com/repos/php-fig/http-factory/zipball/2b4765fddfe3b508ac62f829e852b1501d3f6e8a",
- Line 3034: Implements application logic: "reference": "2b4765fddfe3b508ac62f829e852b1501d3f6e8a",
- Line 3035: Implements application logic: "shasum": ""
- Line 3036: Implements application logic: },
- Line 3037: Implements application logic: "require": {
- Line 3038: Implements application logic: "php": ">=7.1",
- Line 3039: Implements application logic: "psr/http-message": "^1.0 || ^2.0"
- Line 3040: Implements application logic: },
- Line 3041: Implements application logic: "type": "library",
- Line 3042: Implements application logic: "extra": {
- Line 3043: Implements application logic: "branch-alias": {
- Line 3044: Implements application logic: "dev-master": "1.0.x-dev"
- Line 3045: Implements application logic: }
- Line 3046: Implements application logic: },
- Line 3047: Implements application logic: "autoload": {
- Line 3048: Implements application logic: "psr-4": {
- Line 3049: Implements application logic: "Psr\\Http\\Message\\": "src/"
- Line 3050: Implements application logic: }
- Line 3051: Implements application logic: },
- Line 3052: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 3053: Implements application logic: "license": [
- Line 3054: Implements application logic: "MIT"
- Line 3055: Implements application logic: ],
- Line 3056: Implements application logic: "authors": [
- Line 3057: Implements application logic: {
- Line 3058: Implements application logic: "name": "PHP-FIG",
- Line 3059: Implements application logic: "homepage": "https://www.php-fig.org/"
- Line 3060: Implements application logic: }
- Line 3061: Implements application logic: ],
- Line 3062: Implements application logic: "description": "PSR-17: Common interfaces for PSR-7 HTTP message factories",
- Line 3063: Implements application logic: "keywords": [
- Line 3064: Implements application logic: "factory",
- Line 3065: Implements application logic: "http",
- Line 3066: Implements application logic: "message",
- Line 3067: Implements application logic: "psr",
- Line 3068: Implements application logic: "psr-17",
- Line 3069: Implements application logic: "psr-7",
- Line 3070: Implements application logic: "request",
- Line 3071: Implements application logic: "response"
- Line 3072: Implements application logic: ],
- Line 3073: Implements application logic: "support": {
- Line 3074: Implements application logic: "source": "https://github.com/php-fig/http-factory"
- Line 3075: Implements application logic: },
- Line 3076: Implements application logic: "time": "2024-04-15T12:06:14+00:00"
- Line 3077: Implements application logic: },
- Line 3078: Implements application logic: {
- Line 3079: Implements application logic: "name": "psr/http-message",
- Line 3080: Implements application logic: "version": "2.0",
- Line 3081: Implements application logic: "source": {
- Line 3082: Implements application logic: "type": "git",
- Line 3083: Implements application logic: "url": "https://github.com/php-fig/http-message.git",
- Line 3084: Implements application logic: "reference": "402d35bcb92c70c026d1a6a9883f06b2ead23d71"
- Line 3085: Implements application logic: },
- Line 3086: Implements application logic: "dist": {
- Line 3087: Implements application logic: "type": "zip",
- Line 3088: Implements application logic: "url": "https://api.github.com/repos/php-fig/http-message/zipball/402d35bcb92c70c026d1a6a9883f06b2ead23d71",
- Line 3089: Implements application logic: "reference": "402d35bcb92c70c026d1a6a9883f06b2ead23d71",
- Line 3090: Implements application logic: "shasum": ""
- Line 3091: Implements application logic: },
- Line 3092: Implements application logic: "require": {
- Line 3093: Implements application logic: "php": "^7.2 || ^8.0"
- Line 3094: Implements application logic: },
- Line 3095: Implements application logic: "type": "library",
- Line 3096: Implements application logic: "extra": {
- Line 3097: Implements application logic: "branch-alias": {
- Line 3098: Implements application logic: "dev-master": "2.0.x-dev"
- Line 3099: Implements application logic: }
- Line 3100: Implements application logic: },
- Line 3101: Implements application logic: "autoload": {
- Line 3102: Implements application logic: "psr-4": {
- Line 3103: Implements application logic: "Psr\\Http\\Message\\": "src/"
- Line 3104: Implements application logic: }
- Line 3105: Implements application logic: },
- Line 3106: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 3107: Implements application logic: "license": [
- Line 3108: Implements application logic: "MIT"
- Line 3109: Implements application logic: ],
- Line 3110: Implements application logic: "authors": [
- Line 3111: Implements application logic: {
- Line 3112: Implements application logic: "name": "PHP-FIG",
- Line 3113: Implements application logic: "homepage": "https://www.php-fig.org/"
- Line 3114: Implements application logic: }
- Line 3115: Implements application logic: ],
- Line 3116: Implements application logic: "description": "Common interface for HTTP messages",
- Line 3117: Implements application logic: "homepage": "https://github.com/php-fig/http-message",
- Line 3118: Implements application logic: "keywords": [
- Line 3119: Implements application logic: "http",
- Line 3120: Implements application logic: "http-message",
- Line 3121: Implements application logic: "psr",
- Line 3122: Implements application logic: "psr-7",
- Line 3123: Implements application logic: "request",
- Line 3124: Implements application logic: "response"
- Line 3125: Implements application logic: ],
- Line 3126: Implements application logic: "support": {
- Line 3127: Implements application logic: "source": "https://github.com/php-fig/http-message/tree/2.0"
- Line 3128: Implements application logic: },
- Line 3129: Implements application logic: "time": "2023-04-04T09:54:51+00:00"
- Line 3130: Implements application logic: },
- Line 3131: Implements application logic: {
- Line 3132: Implements application logic: "name": "psr/log",
- Line 3133: Implements application logic: "version": "3.0.2",
- Line 3134: Implements application logic: "source": {
- Line 3135: Implements application logic: "type": "git",
- Line 3136: Implements application logic: "url": "https://github.com/php-fig/log.git",
- Line 3137: Implements application logic: "reference": "f16e1d5863e37f8d8c2a01719f5b34baa2b714d3"
- Line 3138: Implements application logic: },
- Line 3139: Implements application logic: "dist": {
- Line 3140: Implements application logic: "type": "zip",
- Line 3141: Implements application logic: "url": "https://api.github.com/repos/php-fig/log/zipball/f16e1d5863e37f8d8c2a01719f5b34baa2b714d3",
- Line 3142: Implements application logic: "reference": "f16e1d5863e37f8d8c2a01719f5b34baa2b714d3",
- Line 3143: Implements application logic: "shasum": ""
- Line 3144: Implements application logic: },
- Line 3145: Implements application logic: "require": {
- Line 3146: Implements application logic: "php": ">=8.0.0"
- Line 3147: Implements application logic: },
- Line 3148: Implements application logic: "type": "library",
- Line 3149: Implements application logic: "extra": {
- Line 3150: Implements application logic: "branch-alias": {
- Line 3151: Implements application logic: "dev-master": "3.x-dev"
- Line 3152: Implements application logic: }
- Line 3153: Implements application logic: },
- Line 3154: Implements application logic: "autoload": {
- Line 3155: Implements application logic: "psr-4": {
- Line 3156: Implements application logic: "Psr\\Log\\": "src"
- Line 3157: Implements application logic: }
- Line 3158: Implements application logic: },
- Line 3159: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 3160: Implements application logic: "license": [
- Line 3161: Implements application logic: "MIT"
- Line 3162: Implements application logic: ],
- Line 3163: Implements application logic: "authors": [
- Line 3164: Implements application logic: {
- Line 3165: Implements application logic: "name": "PHP-FIG",
- Line 3166: Implements application logic: "homepage": "https://www.php-fig.org/"
- Line 3167: Implements application logic: }
- Line 3168: Implements application logic: ],
- Line 3169: Implements application logic: "description": "Common interface for logging libraries",
- Line 3170: Implements application logic: "homepage": "https://github.com/php-fig/log",
- Line 3171: Implements application logic: "keywords": [
- Line 3172: Implements application logic: "log",
- Line 3173: Implements application logic: "psr",
- Line 3174: Implements application logic: "psr-3"
- Line 3175: Implements application logic: ],
- Line 3176: Implements application logic: "support": {
- Line 3177: Implements application logic: "source": "https://github.com/php-fig/log/tree/3.0.2"
- Line 3178: Implements application logic: },
- Line 3179: Implements application logic: "time": "2024-09-11T13:17:53+00:00"
- Line 3180: Implements application logic: },
- Line 3181: Implements application logic: {
- Line 3182: Implements application logic: "name": "psr/simple-cache",
- Line 3183: Implements application logic: "version": "3.0.0",
- Line 3184: Implements application logic: "source": {
- Line 3185: Implements application logic: "type": "git",
- Line 3186: Implements application logic: "url": "https://github.com/php-fig/simple-cache.git",
- Line 3187: Implements application logic: "reference": "764e0b3939f5ca87cb904f570ef9be2d78a07865"
- Line 3188: Implements application logic: },
- Line 3189: Implements application logic: "dist": {
- Line 3190: Implements application logic: "type": "zip",
- Line 3191: Implements application logic: "url": "https://api.github.com/repos/php-fig/simple-cache/zipball/764e0b3939f5ca87cb904f570ef9be2d78a07865",
- Line 3192: Implements application logic: "reference": "764e0b3939f5ca87cb904f570ef9be2d78a07865",
- Line 3193: Implements application logic: "shasum": ""
- Line 3194: Implements application logic: },
- Line 3195: Implements application logic: "require": {
- Line 3196: Implements application logic: "php": ">=8.0.0"
- Line 3197: Implements application logic: },
- Line 3198: Implements application logic: "type": "library",
- Line 3199: Implements application logic: "extra": {
- Line 3200: Implements application logic: "branch-alias": {
- Line 3201: Implements application logic: "dev-master": "3.0.x-dev"
- Line 3202: Implements application logic: }
- Line 3203: Implements application logic: },
- Line 3204: Implements application logic: "autoload": {
- Line 3205: Implements application logic: "psr-4": {
- Line 3206: Implements application logic: "Psr\\SimpleCache\\": "src/"
- Line 3207: Implements application logic: }
- Line 3208: Implements application logic: },
- Line 3209: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 3210: Implements application logic: "license": [
- Line 3211: Implements application logic: "MIT"
- Line 3212: Implements application logic: ],
- Line 3213: Implements application logic: "authors": [
- Line 3214: Implements application logic: {
- Line 3215: Implements application logic: "name": "PHP-FIG",
- Line 3216: Implements application logic: "homepage": "https://www.php-fig.org/"
- Line 3217: Implements application logic: }
- Line 3218: Implements application logic: ],
- Line 3219: Implements application logic: "description": "Common interfaces for simple caching",
- Line 3220: Implements application logic: "keywords": [
- Line 3221: Implements application logic: "cache",
- Line 3222: Implements application logic: "caching",
- Line 3223: Implements application logic: "psr",
- Line 3224: Implements application logic: "psr-16",
- Line 3225: Implements application logic: "simple-cache"
- Line 3226: Implements application logic: ],
- Line 3227: Implements application logic: "support": {
- Line 3228: Implements application logic: "source": "https://github.com/php-fig/simple-cache/tree/3.0.0"
- Line 3229: Implements application logic: },
- Line 3230: Implements application logic: "time": "2021-10-29T13:26:27+00:00"
- Line 3231: Implements application logic: },
- Line 3232: Implements application logic: {
- Line 3233: Implements application logic: "name": "psy/psysh",
- Line 3234: Implements application logic: "version": "v0.12.22",
- Line 3235: Implements application logic: "source": {
- Line 3236: Implements application logic: "type": "git",
- Line 3237: Implements application logic: "url": "https://github.com/bobthecow/psysh.git",
- Line 3238: Implements application logic: "reference": "3be75d5b9244936dd4ac62ade2bfb004d13acf0f"
- Line 3239: Implements application logic: },
- Line 3240: Implements application logic: "dist": {
- Line 3241: Implements application logic: "type": "zip",
- Line 3242: Implements application logic: "url": "https://api.github.com/repos/bobthecow/psysh/zipball/3be75d5b9244936dd4ac62ade2bfb004d13acf0f",
- Line 3243: Implements application logic: "reference": "3be75d5b9244936dd4ac62ade2bfb004d13acf0f",
- Line 3244: Implements application logic: "shasum": ""
- Line 3245: Implements application logic: },
- Line 3246: Implements application logic: "require": {
- Line 3247: Implements application logic: "ext-json": "*",
- Line 3248: Implements application logic: "ext-tokenizer": "*",
- Line 3249: Implements application logic: "nikic/php-parser": "^5.0 || ^4.0",
- Line 3250: Implements application logic: "php": "^8.0 || ^7.4",
- Line 3251: Implements application logic: "symfony/console": "^8.0 || ^7.0 || ^6.0 || ^5.0 || ^4.0 || ^3.4",
- Line 3252: Implements application logic: "symfony/var-dumper": "^8.0 || ^7.0 || ^6.0 || ^5.0 || ^4.0 || ^3.4"
- Line 3253: Implements application logic: },
- Line 3254: Implements application logic: "conflict": {
- Line 3255: Implements application logic: "symfony/console": "4.4.37 || 5.3.14 || 5.3.15 || 5.4.3 || 5.4.4 || 6.0.3 || 6.0.4"
- Line 3256: Implements application logic: },
- Line 3257: Implements application logic: "require-dev": {
- Line 3258: Implements application logic: "bamarni/composer-bin-plugin": "^1.2",
- Line 3259: Implements application logic: "composer/class-map-generator": "^1.6"
- Line 3260: Implements application logic: },
- Line 3261: Implements application logic: "suggest": {
- Line 3262: Implements application logic: "composer/class-map-generator": "Improved tab completion performance with better class discovery.",
- Line 3263: Implements application logic: "ext-pcntl": "Enabling the PCNTL extension makes PsySH a lot happier :)",
- Line 3264: Implements application logic: "ext-posix": "If you have PCNTL, you'll want the POSIX extension as well."
- Line 3265: Implements application logic: },
- Line 3266: Implements application logic: "bin": [
- Line 3267: Implements application logic: "bin/psysh"
- Line 3268: Implements application logic: ],
- Line 3269: Implements application logic: "type": "library",
- Line 3270: Implements application logic: "extra": {
- Line 3271: Implements application logic: "bamarni-bin": {
- Line 3272: Implements application logic: "bin-links": false,
- Line 3273: Implements application logic: "forward-command": false
- Line 3274: Implements application logic: },
- Line 3275: Implements application logic: "branch-alias": {
- Line 3276: Implements application logic: "dev-main": "0.12.x-dev"
- Line 3277: Implements application logic: }
- Line 3278: Implements application logic: },
- Line 3279: Implements application logic: "autoload": {
- Line 3280: Implements application logic: "files": [
- Line 3281: Implements application logic: "src/functions.php"
- Line 3282: Implements application logic: ],
- Line 3283: Implements application logic: "psr-4": {
- Line 3284: Implements application logic: "Psy\\": "src/"
- Line 3285: Implements application logic: }
- Line 3286: Implements application logic: },
- Line 3287: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 3288: Implements application logic: "license": [
- Line 3289: Implements application logic: "MIT"
- Line 3290: Implements application logic: ],
- Line 3291: Implements application logic: "authors": [
- Line 3292: Implements application logic: {
- Line 3293: Implements application logic: "name": "Justin Hileman",
- Line 3294: Implements application logic: "email": "justin@justinhileman.info"
- Line 3295: Implements application logic: }
- Line 3296: Implements application logic: ],
- Line 3297: Implements application logic: "description": "An interactive shell for modern PHP.",
- Line 3298: Implements application logic: "homepage": "https://psysh.org",
- Line 3299: Implements application logic: "keywords": [
- Line 3300: Implements application logic: "REPL",
- Line 3301: Implements application logic: "console",
- Line 3302: Implements application logic: "interactive",
- Line 3303: Implements application logic: "shell"
- Line 3304: Implements application logic: ],
- Line 3305: Implements application logic: "support": {
- Line 3306: Implements application logic: "issues": "https://github.com/bobthecow/psysh/issues",
- Line 3307: Implements application logic: "source": "https://github.com/bobthecow/psysh/tree/v0.12.22"
- Line 3308: Implements application logic: },
- Line 3309: Implements application logic: "time": "2026-03-22T23:03:24+00:00"
- Line 3310: Implements application logic: },
- Line 3311: Implements application logic: {
- Line 3312: Implements application logic: "name": "ralouphie/getallheaders",
- Line 3313: Implements application logic: "version": "3.0.3",
- Line 3314: Implements application logic: "source": {
- Line 3315: Implements application logic: "type": "git",
- Line 3316: Implements application logic: "url": "https://github.com/ralouphie/getallheaders.git",
- Line 3317: Implements application logic: "reference": "120b605dfeb996808c31b6477290a714d356e822"
- Line 3318: Implements application logic: },
- Line 3319: Implements application logic: "dist": {
- Line 3320: Implements application logic: "type": "zip",
- Line 3321: Implements application logic: "url": "https://api.github.com/repos/ralouphie/getallheaders/zipball/120b605dfeb996808c31b6477290a714d356e822",
- Line 3322: Implements application logic: "reference": "120b605dfeb996808c31b6477290a714d356e822",
- Line 3323: Implements application logic: "shasum": ""
- Line 3324: Implements application logic: },
- Line 3325: Implements application logic: "require": {
- Line 3326: Implements application logic: "php": ">=5.6"
- Line 3327: Implements application logic: },
- Line 3328: Implements application logic: "require-dev": {
- Line 3329: Implements application logic: "php-coveralls/php-coveralls": "^2.1",
- Line 3330: Implements application logic: "phpunit/phpunit": "^5 || ^6.5"
- Line 3331: Implements application logic: },
- Line 3332: Implements application logic: "type": "library",
- Line 3333: Implements application logic: "autoload": {
- Line 3334: Implements application logic: "files": [
- Line 3335: Implements application logic: "src/getallheaders.php"
- Line 3336: Implements application logic: ]
- Line 3337: Implements application logic: },
- Line 3338: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 3339: Implements application logic: "license": [
- Line 3340: Implements application logic: "MIT"
- Line 3341: Implements application logic: ],
- Line 3342: Implements application logic: "authors": [
- Line 3343: Implements application logic: {
- Line 3344: Implements application logic: "name": "Ralph Khattar",
- Line 3345: Implements application logic: "email": "ralph.khattar@gmail.com"
- Line 3346: Implements application logic: }
- Line 3347: Implements application logic: ],
- Line 3348: Implements application logic: "description": "A polyfill for getallheaders.",
- Line 3349: Implements application logic: "support": {
- Line 3350: Implements application logic: "issues": "https://github.com/ralouphie/getallheaders/issues",
- Line 3351: Implements application logic: "source": "https://github.com/ralouphie/getallheaders/tree/develop"
- Line 3352: Implements application logic: },
- Line 3353: Implements application logic: "time": "2019-03-08T08:55:37+00:00"
- Line 3354: Implements application logic: },
- Line 3355: Implements application logic: {
- Line 3356: Implements application logic: "name": "ramsey/collection",
- Line 3357: Implements application logic: "version": "2.1.1",
- Line 3358: Implements application logic: "source": {
- Line 3359: Implements application logic: "type": "git",
- Line 3360: Implements application logic: "url": "https://github.com/ramsey/collection.git",
- Line 3361: Implements application logic: "reference": "344572933ad0181accbf4ba763e85a0306a8c5e2"
- Line 3362: Implements application logic: },
- Line 3363: Implements application logic: "dist": {
- Line 3364: Implements application logic: "type": "zip",
- Line 3365: Implements application logic: "url": "https://api.github.com/repos/ramsey/collection/zipball/344572933ad0181accbf4ba763e85a0306a8c5e2",
- Line 3366: Implements application logic: "reference": "344572933ad0181accbf4ba763e85a0306a8c5e2",
- Line 3367: Implements application logic: "shasum": ""
- Line 3368: Implements application logic: },
- Line 3369: Implements application logic: "require": {
- Line 3370: Implements application logic: "php": "^8.1"
- Line 3371: Implements application logic: },
- Line 3372: Implements application logic: "require-dev": {
- Line 3373: Implements application logic: "captainhook/plugin-composer": "^5.3",
- Line 3374: Implements application logic: "ergebnis/composer-normalize": "^2.45",
- Line 3375: Implements application logic: "fakerphp/faker": "^1.24",
- Line 3376: Implements application logic: "hamcrest/hamcrest-php": "^2.0",
- Line 3377: Implements application logic: "jangregor/phpstan-prophecy": "^2.1",
- Line 3378: Implements application logic: "mockery/mockery": "^1.6",
- Line 3379: Implements application logic: "php-parallel-lint/php-console-highlighter": "^1.0",
- Line 3380: Implements application logic: "php-parallel-lint/php-parallel-lint": "^1.4",
- Line 3381: Implements application logic: "phpspec/prophecy-phpunit": "^2.3",
- Line 3382: Implements application logic: "phpstan/extension-installer": "^1.4",
- Line 3383: Implements application logic: "phpstan/phpstan": "^2.1",
- Line 3384: Implements application logic: "phpstan/phpstan-mockery": "^2.0",
- Line 3385: Implements application logic: "phpstan/phpstan-phpunit": "^2.0",
- Line 3386: Implements application logic: "phpunit/phpunit": "^10.5",
- Line 3387: Implements application logic: "ramsey/coding-standard": "^2.3",
- Line 3388: Implements application logic: "ramsey/conventional-commits": "^1.6",
- Line 3389: Implements application logic: "roave/security-advisories": "dev-latest"
- Line 3390: Implements application logic: },
- Line 3391: Implements application logic: "type": "library",
- Line 3392: Implements application logic: "extra": {
- Line 3393: Implements application logic: "captainhook": {
- Line 3394: Implements application logic: "force-install": true
- Line 3395: Implements application logic: },
- Line 3396: Implements application logic: "ramsey/conventional-commits": {
- Line 3397: Implements application logic: "configFile": "conventional-commits.json"
- Line 3398: Implements application logic: }
- Line 3399: Implements application logic: },
- Line 3400: Implements application logic: "autoload": {
- Line 3401: Implements application logic: "psr-4": {
- Line 3402: Implements application logic: "Ramsey\\Collection\\": "src/"
- Line 3403: Implements application logic: }
- Line 3404: Implements application logic: },
- Line 3405: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 3406: Implements application logic: "license": [
- Line 3407: Implements application logic: "MIT"
- Line 3408: Implements application logic: ],
- Line 3409: Implements application logic: "authors": [
- Line 3410: Implements application logic: {
- Line 3411: Implements application logic: "name": "Ben Ramsey",
- Line 3412: Implements application logic: "email": "ben@benramsey.com",
- Line 3413: Implements application logic: "homepage": "https://benramsey.com"
- Line 3414: Implements application logic: }
- Line 3415: Implements application logic: ],
- Line 3416: Implements application logic: "description": "A PHP library for representing and manipulating collections.",
- Line 3417: Implements application logic: "keywords": [
- Line 3418: Implements application logic: "array",
- Line 3419: Implements application logic: "collection",
- Line 3420: Implements application logic: "hash",
- Line 3421: Implements application logic: "map",
- Line 3422: Implements application logic: "queue",
- Line 3423: Implements application logic: "set"
- Line 3424: Implements application logic: ],
- Line 3425: Implements application logic: "support": {
- Line 3426: Implements application logic: "issues": "https://github.com/ramsey/collection/issues",
- Line 3427: Implements application logic: "source": "https://github.com/ramsey/collection/tree/2.1.1"
- Line 3428: Implements application logic: },
- Line 3429: Implements application logic: "time": "2025-03-22T05:38:12+00:00"
- Line 3430: Implements application logic: },
- Line 3431: Implements application logic: {
- Line 3432: Implements application logic: "name": "ramsey/uuid",
- Line 3433: Implements application logic: "version": "4.9.2",
- Line 3434: Implements application logic: "source": {
- Line 3435: Implements application logic: "type": "git",
- Line 3436: Implements application logic: "url": "https://github.com/ramsey/uuid.git",
- Line 3437: Implements application logic: "reference": "8429c78ca35a09f27565311b98101e2826affde0"
- Line 3438: Implements application logic: },
- Line 3439: Implements application logic: "dist": {
- Line 3440: Implements application logic: "type": "zip",
- Line 3441: Implements application logic: "url": "https://api.github.com/repos/ramsey/uuid/zipball/8429c78ca35a09f27565311b98101e2826affde0",
- Line 3442: Implements application logic: "reference": "8429c78ca35a09f27565311b98101e2826affde0",
- Line 3443: Implements application logic: "shasum": ""
- Line 3444: Implements application logic: },
- Line 3445: Implements application logic: "require": {
- Line 3446: Implements application logic: "brick/math": "^0.8.16 || ^0.9 || ^0.10 || ^0.11 || ^0.12 || ^0.13 || ^0.14",
- Line 3447: Implements application logic: "php": "^8.0",
- Line 3448: Implements application logic: "ramsey/collection": "^1.2 || ^2.0"
- Line 3449: Implements application logic: },
- Line 3450: Implements application logic: "replace": {
- Line 3451: Implements application logic: "rhumsaa/uuid": "self.version"
- Line 3452: Implements application logic: },
- Line 3453: Implements application logic: "require-dev": {
- Line 3454: Implements application logic: "captainhook/captainhook": "^5.25",
- Line 3455: Implements application logic: "captainhook/plugin-composer": "^5.3",
- Line 3456: Implements application logic: "dealerdirect/phpcodesniffer-composer-installer": "^1.0",
- Line 3457: Implements application logic: "ergebnis/composer-normalize": "^2.47",
- Line 3458: Implements application logic: "mockery/mockery": "^1.6",
- Line 3459: Implements application logic: "paragonie/random-lib": "^2",
- Line 3460: Implements application logic: "php-mock/php-mock": "^2.6",
- Line 3461: Implements application logic: "php-mock/php-mock-mockery": "^1.5",
- Line 3462: Implements application logic: "php-parallel-lint/php-parallel-lint": "^1.4.0",
- Line 3463: Implements application logic: "phpbench/phpbench": "^1.2.14",
- Line 3464: Implements application logic: "phpstan/extension-installer": "^1.4",
- Line 3465: Implements application logic: "phpstan/phpstan": "^2.1",
- Line 3466: Implements application logic: "phpstan/phpstan-mockery": "^2.0",
- Line 3467: Implements application logic: "phpstan/phpstan-phpunit": "^2.0",
- Line 3468: Implements application logic: "phpunit/phpunit": "^9.6",
- Line 3469: Implements application logic: "slevomat/coding-standard": "^8.18",
- Line 3470: Implements application logic: "squizlabs/php_codesniffer": "^3.13"
- Line 3471: Implements application logic: },
- Line 3472: Implements application logic: "suggest": {
- Line 3473: Implements application logic: "ext-bcmath": "Enables faster math with arbitrary-precision integers using BCMath.",
- Line 3474: Implements application logic: "ext-gmp": "Enables faster math with arbitrary-precision integers using GMP.",
- Line 3475: Implements application logic: "ext-uuid": "Enables the use of PeclUuidTimeGenerator and PeclUuidRandomGenerator.",
- Line 3476: Implements application logic: "paragonie/random-lib": "Provides RandomLib for use with the RandomLibAdapter",
- Line 3477: Implements application logic: "ramsey/uuid-doctrine": "Allows the use of Ramsey\\Uuid\\Uuid as Doctrine field type."
- Line 3478: Implements application logic: },
- Line 3479: Implements application logic: "type": "library",
- Line 3480: Implements application logic: "extra": {
- Line 3481: Implements application logic: "captainhook": {
- Line 3482: Implements application logic: "force-install": true
- Line 3483: Implements application logic: }
- Line 3484: Implements application logic: },
- Line 3485: Implements application logic: "autoload": {
- Line 3486: Implements application logic: "files": [
- Line 3487: Implements application logic: "src/functions.php"
- Line 3488: Implements application logic: ],
- Line 3489: Implements application logic: "psr-4": {
- Line 3490: Implements application logic: "Ramsey\\Uuid\\": "src/"
- Line 3491: Implements application logic: }
- Line 3492: Implements application logic: },
- Line 3493: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 3494: Implements application logic: "license": [
- Line 3495: Implements application logic: "MIT"
- Line 3496: Implements application logic: ],
- Line 3497: Implements application logic: "description": "A PHP library for generating and working with universally unique identifiers (UUIDs).",
- Line 3498: Implements application logic: "keywords": [
- Line 3499: Implements application logic: "guid",
- Line 3500: Implements application logic: "identifier",
- Line 3501: Implements application logic: "uuid"
- Line 3502: Implements application logic: ],
- Line 3503: Implements application logic: "support": {
- Line 3504: Implements application logic: "issues": "https://github.com/ramsey/uuid/issues",
- Line 3505: Implements application logic: "source": "https://github.com/ramsey/uuid/tree/4.9.2"
- Line 3506: Implements application logic: },
- Line 3507: Implements application logic: "time": "2025-12-14T04:43:48+00:00"
- Line 3508: Implements application logic: },
- Line 3509: Implements application logic: {
- Line 3510: Implements application logic: "name": "symfony/clock",
- Line 3511: Implements application logic: "version": "v7.4.8",
- Line 3512: Implements application logic: "source": {
- Line 3513: Implements application logic: "type": "git",
- Line 3514: Implements application logic: "url": "https://github.com/symfony/clock.git",
- Line 3515: Implements application logic: "reference": "674fa3b98e21531dd040e613479f5f6fa8f32111"
- Line 3516: Implements application logic: },
- Line 3517: Implements application logic: "dist": {
- Line 3518: Implements application logic: "type": "zip",
- Line 3519: Implements application logic: "url": "https://api.github.com/repos/symfony/clock/zipball/674fa3b98e21531dd040e613479f5f6fa8f32111",
- Line 3520: Implements application logic: "reference": "674fa3b98e21531dd040e613479f5f6fa8f32111",
- Line 3521: Implements application logic: "shasum": ""
- Line 3522: Implements application logic: },
- Line 3523: Implements application logic: "require": {
- Line 3524: Implements application logic: "php": ">=8.2",
- Line 3525: Implements application logic: "psr/clock": "^1.0",
- Line 3526: Implements application logic: "symfony/polyfill-php83": "^1.28"
- Line 3527: Implements application logic: },
- Line 3528: Implements application logic: "provide": {
- Line 3529: Implements application logic: "psr/clock-implementation": "1.0"
- Line 3530: Implements application logic: },
- Line 3531: Implements application logic: "type": "library",
- Line 3532: Implements application logic: "autoload": {
- Line 3533: Implements application logic: "files": [
- Line 3534: Implements application logic: "Resources/now.php"
- Line 3535: Implements application logic: ],
- Line 3536: Implements application logic: "psr-4": {
- Line 3537: Implements application logic: "Symfony\\Component\\Clock\\": ""
- Line 3538: Implements application logic: },
- Line 3539: Implements application logic: "exclude-from-classmap": [
- Line 3540: Implements application logic: "/Tests/"
- Line 3541: Implements application logic: ]
- Line 3542: Implements application logic: },
- Line 3543: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 3544: Implements application logic: "license": [
- Line 3545: Implements application logic: "MIT"
- Line 3546: Implements application logic: ],
- Line 3547: Implements application logic: "authors": [
- Line 3548: Implements application logic: {
- Line 3549: Implements application logic: "name": "Nicolas Grekas",
- Line 3550: Implements application logic: "email": "p@tchwork.com"
- Line 3551: Implements application logic: },
- Line 3552: Implements application logic: {
- Line 3553: Implements application logic: "name": "Symfony Community",
- Line 3554: Implements application logic: "homepage": "https://symfony.com/contributors"
- Line 3555: Implements application logic: }
- Line 3556: Implements application logic: ],
- Line 3557: Implements application logic: "description": "Decouples applications from the system clock",
- Line 3558: Implements application logic: "homepage": "https://symfony.com",
- Line 3559: Implements application logic: "keywords": [
- Line 3560: Implements application logic: "clock",
- Line 3561: Implements application logic: "psr20",
- Line 3562: Implements application logic: "time"
- Line 3563: Implements application logic: ],
- Line 3564: Implements application logic: "support": {
- Line 3565: Implements application logic: "source": "https://github.com/symfony/clock/tree/v7.4.8"
- Line 3566: Implements application logic: },
- Line 3567: Implements application logic: "funding": [
- Line 3568: Implements application logic: {
- Line 3569: Implements application logic: "url": "https://symfony.com/sponsor",
- Line 3570: Implements application logic: "type": "custom"
- Line 3571: Implements application logic: },
- Line 3572: Implements application logic: {
- Line 3573: Implements application logic: "url": "https://github.com/fabpot",
- Line 3574: Implements application logic: "type": "github"
- Line 3575: Implements application logic: },
- Line 3576: Implements application logic: {
- Line 3577: Implements application logic: "url": "https://github.com/nicolas-grekas",
- Line 3578: Implements application logic: "type": "github"
- Line 3579: Implements application logic: },
- Line 3580: Implements application logic: {
- Line 3581: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
- Line 3582: Implements application logic: "type": "tidelift"
- Line 3583: Implements application logic: }
- Line 3584: Implements application logic: ],
- Line 3585: Implements application logic: "time": "2026-03-24T13:12:05+00:00"
- Line 3586: Implements application logic: },
- Line 3587: Implements application logic: {
- Line 3588: Implements application logic: "name": "symfony/console",
- Line 3589: Implements application logic: "version": "v7.4.8",
- Line 3590: Implements application logic: "source": {
- Line 3591: Implements application logic: "type": "git",
- Line 3592: Implements application logic: "url": "https://github.com/symfony/console.git",
- Line 3593: Implements application logic: "reference": "1e92e39c51f95b88e3d66fa2d9f06d1fb45dd707"
- Line 3594: Implements application logic: },
- Line 3595: Implements application logic: "dist": {
- Line 3596: Implements application logic: "type": "zip",
- Line 3597: Implements application logic: "url": "https://api.github.com/repos/symfony/console/zipball/1e92e39c51f95b88e3d66fa2d9f06d1fb45dd707",
- Line 3598: Implements application logic: "reference": "1e92e39c51f95b88e3d66fa2d9f06d1fb45dd707",
- Line 3599: Implements application logic: "shasum": ""
- Line 3600: Implements application logic: },
- Line 3601: Implements application logic: "require": {
- Line 3602: Implements application logic: "php": ">=8.2",
- Line 3603: Implements application logic: "symfony/deprecation-contracts": "^2.5|^3",
- Line 3604: Implements application logic: "symfony/polyfill-mbstring": "~1.0",
- Line 3605: Implements application logic: "symfony/service-contracts": "^2.5|^3",
- Line 3606: Implements application logic: "symfony/string": "^7.2|^8.0"
- Line 3607: Implements application logic: },
- Line 3608: Implements application logic: "conflict": {
- Line 3609: Implements application logic: "symfony/dependency-injection": "<6.4",
- Line 3610: Implements application logic: "symfony/dotenv": "<6.4",
- Line 3611: Implements application logic: "symfony/event-dispatcher": "<6.4",
- Line 3612: Implements application logic: "symfony/lock": "<6.4",
- Line 3613: Implements application logic: "symfony/process": "<6.4"
- Line 3614: Implements application logic: },
- Line 3615: Implements application logic: "provide": {
- Line 3616: Implements application logic: "psr/log-implementation": "1.0|2.0|3.0"
- Line 3617: Implements application logic: },
- Line 3618: Implements application logic: "require-dev": {
- Line 3619: Implements application logic: "psr/log": "^1|^2|^3",
- Line 3620: Implements application logic: "symfony/config": "^6.4|^7.0|^8.0",
- Line 3621: Implements application logic: "symfony/dependency-injection": "^6.4|^7.0|^8.0",
- Line 3622: Implements application logic: "symfony/event-dispatcher": "^6.4|^7.0|^8.0",
- Line 3623: Implements application logic: "symfony/http-foundation": "^6.4|^7.0|^8.0",
- Line 3624: Implements application logic: "symfony/http-kernel": "^6.4|^7.0|^8.0",
- Line 3625: Implements application logic: "symfony/lock": "^6.4|^7.0|^8.0",
- Line 3626: Implements application logic: "symfony/messenger": "^6.4|^7.0|^8.0",
- Line 3627: Implements application logic: "symfony/process": "^6.4|^7.0|^8.0",
- Line 3628: Implements application logic: "symfony/stopwatch": "^6.4|^7.0|^8.0",
- Line 3629: Implements application logic: "symfony/var-dumper": "^6.4|^7.0|^8.0"
- Line 3630: Implements application logic: },
- Line 3631: Implements application logic: "type": "library",
- Line 3632: Implements application logic: "autoload": {
- Line 3633: Implements application logic: "psr-4": {
- Line 3634: Implements application logic: "Symfony\\Component\\Console\\": ""
- Line 3635: Implements application logic: },
- Line 3636: Implements application logic: "exclude-from-classmap": [
- Line 3637: Implements application logic: "/Tests/"
- Line 3638: Implements application logic: ]
- Line 3639: Implements application logic: },
- Line 3640: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 3641: Implements application logic: "license": [
- Line 3642: Implements application logic: "MIT"
- Line 3643: Implements application logic: ],
- Line 3644: Implements application logic: "authors": [
- Line 3645: Implements application logic: {
- Line 3646: Implements application logic: "name": "Fabien Potencier",
- Line 3647: Implements application logic: "email": "fabien@symfony.com"
- Line 3648: Implements application logic: },
- Line 3649: Implements application logic: {
- Line 3650: Implements application logic: "name": "Symfony Community",
- Line 3651: Implements application logic: "homepage": "https://symfony.com/contributors"
- Line 3652: Implements application logic: }
- Line 3653: Implements application logic: ],
- Line 3654: Implements application logic: "description": "Eases the creation of beautiful and testable command line interfaces",
- Line 3655: Implements application logic: "homepage": "https://symfony.com",
- Line 3656: Implements application logic: "keywords": [
- Line 3657: Implements application logic: "cli",
- Line 3658: Implements application logic: "command-line",
- Line 3659: Implements application logic: "console",
- Line 3660: Implements application logic: "terminal"
- Line 3661: Implements application logic: ],
- Line 3662: Implements application logic: "support": {
- Line 3663: Implements application logic: "source": "https://github.com/symfony/console/tree/v7.4.8"
- Line 3664: Implements application logic: },
- Line 3665: Implements application logic: "funding": [
- Line 3666: Implements application logic: {
- Line 3667: Implements application logic: "url": "https://symfony.com/sponsor",
- Line 3668: Implements application logic: "type": "custom"
- Line 3669: Implements application logic: },
- Line 3670: Implements application logic: {
- Line 3671: Implements application logic: "url": "https://github.com/fabpot",
- Line 3672: Implements application logic: "type": "github"
- Line 3673: Implements application logic: },
- Line 3674: Implements application logic: {
- Line 3675: Implements application logic: "url": "https://github.com/nicolas-grekas",
- Line 3676: Implements application logic: "type": "github"
- Line 3677: Implements application logic: },
- Line 3678: Implements application logic: {
- Line 3679: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
- Line 3680: Implements application logic: "type": "tidelift"
- Line 3681: Implements application logic: }
- Line 3682: Implements application logic: ],
- Line 3683: Implements application logic: "time": "2026-03-30T13:54:39+00:00"
- Line 3684: Implements application logic: },
- Line 3685: Implements application logic: {
- Line 3686: Implements application logic: "name": "symfony/css-selector",
- Line 3687: Implements application logic: "version": "v7.4.8",
- Line 3688: Implements application logic: "source": {
- Line 3689: Implements application logic: "type": "git",
- Line 3690: Implements application logic: "url": "https://github.com/symfony/css-selector.git",
- Line 3691: Implements application logic: "reference": "b055f228a4178a1d6774909903905e3475f3eac8"
- Line 3692: Implements application logic: },
- Line 3693: Implements application logic: "dist": {
- Line 3694: Implements application logic: "type": "zip",
- Line 3695: Implements application logic: "url": "https://api.github.com/repos/symfony/css-selector/zipball/b055f228a4178a1d6774909903905e3475f3eac8",
- Line 3696: Implements application logic: "reference": "b055f228a4178a1d6774909903905e3475f3eac8",
- Line 3697: Implements application logic: "shasum": ""
- Line 3698: Implements application logic: },
- Line 3699: Implements application logic: "require": {
- Line 3700: Implements application logic: "php": ">=8.2"
- Line 3701: Implements application logic: },
- Line 3702: Implements application logic: "type": "library",
- Line 3703: Implements application logic: "autoload": {
- Line 3704: Implements application logic: "psr-4": {
- Line 3705: Implements application logic: "Symfony\\Component\\CssSelector\\": ""
- Line 3706: Implements application logic: },
- Line 3707: Implements application logic: "exclude-from-classmap": [
- Line 3708: Implements application logic: "/Tests/"
- Line 3709: Implements application logic: ]
- Line 3710: Implements application logic: },
- Line 3711: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 3712: Implements application logic: "license": [
- Line 3713: Implements application logic: "MIT"
- Line 3714: Implements application logic: ],
- Line 3715: Implements application logic: "authors": [
- Line 3716: Implements application logic: {
- Line 3717: Implements application logic: "name": "Fabien Potencier",
- Line 3718: Implements application logic: "email": "fabien@symfony.com"
- Line 3719: Implements application logic: },
- Line 3720: Implements application logic: {
- Line 3721: Implements application logic: "name": "Jean-François Simon",
- Line 3722: Implements application logic: "email": "jeanfrancois.simon@sensiolabs.com"
- Line 3723: Implements application logic: },
- Line 3724: Implements application logic: {
- Line 3725: Implements application logic: "name": "Symfony Community",
- Line 3726: Implements application logic: "homepage": "https://symfony.com/contributors"
- Line 3727: Implements application logic: }
- Line 3728: Implements application logic: ],
- Line 3729: Implements application logic: "description": "Converts CSS selectors to XPath expressions",
- Line 3730: Implements application logic: "homepage": "https://symfony.com",
- Line 3731: Implements application logic: "support": {
- Line 3732: Implements application logic: "source": "https://github.com/symfony/css-selector/tree/v7.4.8"
- Line 3733: Implements application logic: },
- Line 3734: Implements application logic: "funding": [
- Line 3735: Implements application logic: {
- Line 3736: Implements application logic: "url": "https://symfony.com/sponsor",
- Line 3737: Implements application logic: "type": "custom"
- Line 3738: Implements application logic: },
- Line 3739: Implements application logic: {
- Line 3740: Implements application logic: "url": "https://github.com/fabpot",
- Line 3741: Implements application logic: "type": "github"
- Line 3742: Implements application logic: },
- Line 3743: Implements application logic: {
- Line 3744: Implements application logic: "url": "https://github.com/nicolas-grekas",
- Line 3745: Implements application logic: "type": "github"
- Line 3746: Implements application logic: },
- Line 3747: Implements application logic: {
- Line 3748: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
- Line 3749: Implements application logic: "type": "tidelift"
- Line 3750: Implements application logic: }
- Line 3751: Implements application logic: ],
- Line 3752: Implements application logic: "time": "2026-03-24T13:12:05+00:00"
- Line 3753: Implements application logic: },
- Line 3754: Implements application logic: {
- Line 3755: Implements application logic: "name": "symfony/deprecation-contracts",
- Line 3756: Implements application logic: "version": "v3.6.0",
- Line 3757: Implements application logic: "source": {
- Line 3758: Implements application logic: "type": "git",
- Line 3759: Implements application logic: "url": "https://github.com/symfony/deprecation-contracts.git",
- Line 3760: Implements application logic: "reference": "63afe740e99a13ba87ec199bb07bbdee937a5b62"
- Line 3761: Implements application logic: },
- Line 3762: Implements application logic: "dist": {
- Line 3763: Implements application logic: "type": "zip",
- Line 3764: Implements application logic: "url": "https://api.github.com/repos/symfony/deprecation-contracts/zipball/63afe740e99a13ba87ec199bb07bbdee937a5b62",
- Line 3765: Implements application logic: "reference": "63afe740e99a13ba87ec199bb07bbdee937a5b62",
- Line 3766: Implements application logic: "shasum": ""
- Line 3767: Implements application logic: },
- Line 3768: Implements application logic: "require": {
- Line 3769: Implements application logic: "php": ">=8.1"
- Line 3770: Implements application logic: },
- Line 3771: Implements application logic: "type": "library",
- Line 3772: Implements application logic: "extra": {
- Line 3773: Implements application logic: "thanks": {
- Line 3774: Implements application logic: "url": "https://github.com/symfony/contracts",
- Line 3775: Implements application logic: "name": "symfony/contracts"
- Line 3776: Implements application logic: },
- Line 3777: Implements application logic: "branch-alias": {
- Line 3778: Implements application logic: "dev-main": "3.6-dev"
- Line 3779: Implements application logic: }
- Line 3780: Implements application logic: },
- Line 3781: Implements application logic: "autoload": {
- Line 3782: Implements application logic: "files": [
- Line 3783: Implements application logic: "function.php"
- Line 3784: Implements application logic: ]
- Line 3785: Implements application logic: },
- Line 3786: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 3787: Implements application logic: "license": [
- Line 3788: Implements application logic: "MIT"
- Line 3789: Implements application logic: ],
- Line 3790: Implements application logic: "authors": [
- Line 3791: Implements application logic: {
- Line 3792: Implements application logic: "name": "Nicolas Grekas",
- Line 3793: Implements application logic: "email": "p@tchwork.com"
- Line 3794: Implements application logic: },
- Line 3795: Implements application logic: {
- Line 3796: Implements application logic: "name": "Symfony Community",
- Line 3797: Implements application logic: "homepage": "https://symfony.com/contributors"
- Line 3798: Implements application logic: }
- Line 3799: Implements application logic: ],
- Line 3800: Implements application logic: "description": "A generic function and convention to trigger deprecation notices",
- Line 3801: Implements application logic: "homepage": "https://symfony.com",
- Line 3802: Implements application logic: "support": {
- Line 3803: Implements application logic: "source": "https://github.com/symfony/deprecation-contracts/tree/v3.6.0"
- Line 3804: Implements application logic: },
- Line 3805: Implements application logic: "funding": [
- Line 3806: Implements application logic: {
- Line 3807: Implements application logic: "url": "https://symfony.com/sponsor",
- Line 3808: Implements application logic: "type": "custom"
- Line 3809: Implements application logic: },
- Line 3810: Implements application logic: {
- Line 3811: Implements application logic: "url": "https://github.com/fabpot",
- Line 3812: Implements application logic: "type": "github"
- Line 3813: Implements application logic: },
- Line 3814: Implements application logic: {
- Line 3815: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
- Line 3816: Implements application logic: "type": "tidelift"
- Line 3817: Implements application logic: }
- Line 3818: Implements application logic: ],
- Line 3819: Implements application logic: "time": "2024-09-25T14:21:43+00:00"
- Line 3820: Implements application logic: },
- Line 3821: Implements application logic: {
- Line 3822: Implements application logic: "name": "symfony/error-handler",
- Line 3823: Implements application logic: "version": "v7.4.8",
- Line 3824: Implements application logic: "source": {
- Line 3825: Implements application logic: "type": "git",
- Line 3826: Implements application logic: "url": "https://github.com/symfony/error-handler.git",
- Line 3827: Implements application logic: "reference": "8dd79d8af777ee6cba2fd4d98da6ffb839f3c0fa"
- Line 3828: Implements application logic: },
- Line 3829: Implements application logic: "dist": {
- Line 3830: Implements application logic: "type": "zip",
- Line 3831: Implements application logic: "url": "https://api.github.com/repos/symfony/error-handler/zipball/8dd79d8af777ee6cba2fd4d98da6ffb839f3c0fa",
- Line 3832: Implements application logic: "reference": "8dd79d8af777ee6cba2fd4d98da6ffb839f3c0fa",
- Line 3833: Implements application logic: "shasum": ""
- Line 3834: Implements application logic: },
- Line 3835: Implements application logic: "require": {
- Line 3836: Implements application logic: "php": ">=8.2",
- Line 3837: Implements application logic: "psr/log": "^1|^2|^3",
- Line 3838: Implements application logic: "symfony/polyfill-php85": "^1.32",
- Line 3839: Implements application logic: "symfony/var-dumper": "^6.4|^7.0|^8.0"
- Line 3840: Implements application logic: },
- Line 3841: Implements application logic: "conflict": {
- Line 3842: Implements application logic: "symfony/deprecation-contracts": "<2.5",
- Line 3843: Implements application logic: "symfony/http-kernel": "<6.4"
- Line 3844: Implements application logic: },
- Line 3845: Implements application logic: "require-dev": {
- Line 3846: Implements application logic: "symfony/console": "^6.4|^7.0|^8.0",
- Line 3847: Implements application logic: "symfony/deprecation-contracts": "^2.5|^3",
- Line 3848: Implements application logic: "symfony/http-kernel": "^6.4|^7.0|^8.0",
- Line 3849: Implements application logic: "symfony/serializer": "^6.4|^7.0|^8.0",
- Line 3850: Implements application logic: "symfony/webpack-encore-bundle": "^1.0|^2.0"
- Line 3851: Implements application logic: },
- Line 3852: Implements application logic: "bin": [
- Line 3853: Implements application logic: "Resources/bin/patch-type-declarations"
- Line 3854: Implements application logic: ],
- Line 3855: Implements application logic: "type": "library",
- Line 3856: Implements application logic: "autoload": {
- Line 3857: Implements application logic: "psr-4": {
- Line 3858: Implements application logic: "Symfony\\Component\\ErrorHandler\\": ""
- Line 3859: Implements application logic: },
- Line 3860: Implements application logic: "exclude-from-classmap": [
- Line 3861: Implements application logic: "/Tests/"
- Line 3862: Implements application logic: ]
- Line 3863: Implements application logic: },
- Line 3864: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 3865: Implements application logic: "license": [
- Line 3866: Implements application logic: "MIT"
- Line 3867: Implements application logic: ],
- Line 3868: Implements application logic: "authors": [
- Line 3869: Implements application logic: {
- Line 3870: Implements application logic: "name": "Fabien Potencier",
- Line 3871: Implements application logic: "email": "fabien@symfony.com"
- Line 3872: Implements application logic: },
- Line 3873: Implements application logic: {
- Line 3874: Implements application logic: "name": "Symfony Community",
- Line 3875: Implements application logic: "homepage": "https://symfony.com/contributors"
- Line 3876: Implements application logic: }
- Line 3877: Implements application logic: ],
- Line 3878: Implements application logic: "description": "Provides tools to manage errors and ease debugging PHP code",
- Line 3879: Implements application logic: "homepage": "https://symfony.com",
- Line 3880: Implements application logic: "support": {
- Line 3881: Implements application logic: "source": "https://github.com/symfony/error-handler/tree/v7.4.8"
- Line 3882: Implements application logic: },
- Line 3883: Implements application logic: "funding": [
- Line 3884: Implements application logic: {
- Line 3885: Implements application logic: "url": "https://symfony.com/sponsor",
- Line 3886: Implements application logic: "type": "custom"
- Line 3887: Implements application logic: },
- Line 3888: Implements application logic: {
- Line 3889: Implements application logic: "url": "https://github.com/fabpot",
- Line 3890: Implements application logic: "type": "github"
- Line 3891: Implements application logic: },
- Line 3892: Implements application logic: {
- Line 3893: Implements application logic: "url": "https://github.com/nicolas-grekas",
- Line 3894: Implements application logic: "type": "github"
- Line 3895: Implements application logic: },
- Line 3896: Implements application logic: {
- Line 3897: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
- Line 3898: Implements application logic: "type": "tidelift"
- Line 3899: Implements application logic: }
- Line 3900: Implements application logic: ],
- Line 3901: Implements application logic: "time": "2026-03-24T13:12:05+00:00"
- Line 3902: Implements application logic: },
- Line 3903: Implements application logic: {
- Line 3904: Implements application logic: "name": "symfony/event-dispatcher",
- Line 3905: Implements application logic: "version": "v7.4.8",
- Line 3906: Implements application logic: "source": {
- Line 3907: Implements application logic: "type": "git",
- Line 3908: Implements application logic: "url": "https://github.com/symfony/event-dispatcher.git",
- Line 3909: Implements application logic: "reference": "f57b899fa736fd71121168ef268f23c206083f0a"
- Line 3910: Implements application logic: },
- Line 3911: Implements application logic: "dist": {
- Line 3912: Implements application logic: "type": "zip",
- Line 3913: Implements application logic: "url": "https://api.github.com/repos/symfony/event-dispatcher/zipball/f57b899fa736fd71121168ef268f23c206083f0a",
- Line 3914: Implements application logic: "reference": "f57b899fa736fd71121168ef268f23c206083f0a",
- Line 3915: Implements application logic: "shasum": ""
- Line 3916: Implements application logic: },
- Line 3917: Implements application logic: "require": {
- Line 3918: Implements application logic: "php": ">=8.2",
- Line 3919: Implements application logic: "symfony/event-dispatcher-contracts": "^2.5|^3"
- Line 3920: Implements application logic: },
- Line 3921: Implements application logic: "conflict": {
- Line 3922: Implements application logic: "symfony/dependency-injection": "<6.4",
- Line 3923: Implements application logic: "symfony/service-contracts": "<2.5"
- Line 3924: Implements application logic: },
- Line 3925: Implements application logic: "provide": {
- Line 3926: Implements application logic: "psr/event-dispatcher-implementation": "1.0",
- Line 3927: Implements application logic: "symfony/event-dispatcher-implementation": "2.0|3.0"
- Line 3928: Implements application logic: },
- Line 3929: Implements application logic: "require-dev": {
- Line 3930: Implements application logic: "psr/log": "^1|^2|^3",
- Line 3931: Implements application logic: "symfony/config": "^6.4|^7.0|^8.0",
- Line 3932: Implements application logic: "symfony/dependency-injection": "^6.4|^7.0|^8.0",
- Line 3933: Implements application logic: "symfony/error-handler": "^6.4|^7.0|^8.0",
- Line 3934: Implements application logic: "symfony/expression-language": "^6.4|^7.0|^8.0",
- Line 3935: Implements application logic: "symfony/framework-bundle": "^6.4|^7.0|^8.0",
- Line 3936: Implements application logic: "symfony/http-foundation": "^6.4|^7.0|^8.0",
- Line 3937: Implements application logic: "symfony/service-contracts": "^2.5|^3",
- Line 3938: Implements application logic: "symfony/stopwatch": "^6.4|^7.0|^8.0"
- Line 3939: Implements application logic: },
- Line 3940: Implements application logic: "type": "library",
- Line 3941: Implements application logic: "autoload": {
- Line 3942: Implements application logic: "psr-4": {
- Line 3943: Implements application logic: "Symfony\\Component\\EventDispatcher\\": ""
- Line 3944: Implements application logic: },
- Line 3945: Implements application logic: "exclude-from-classmap": [
- Line 3946: Implements application logic: "/Tests/"
- Line 3947: Implements application logic: ]
- Line 3948: Implements application logic: },
- Line 3949: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 3950: Implements application logic: "license": [
- Line 3951: Implements application logic: "MIT"
- Line 3952: Implements application logic: ],
- Line 3953: Implements application logic: "authors": [
- Line 3954: Implements application logic: {
- Line 3955: Implements application logic: "name": "Fabien Potencier",
- Line 3956: Implements application logic: "email": "fabien@symfony.com"
- Line 3957: Implements application logic: },
- Line 3958: Implements application logic: {
- Line 3959: Implements application logic: "name": "Symfony Community",
- Line 3960: Implements application logic: "homepage": "https://symfony.com/contributors"
- Line 3961: Implements application logic: }
- Line 3962: Implements application logic: ],
- Line 3963: Implements application logic: "description": "Provides tools that allow your application components to communicate with each other by dispatching events and listening to them",
- Line 3964: Implements application logic: "homepage": "https://symfony.com",
- Line 3965: Implements application logic: "support": {
- Line 3966: Implements application logic: "source": "https://github.com/symfony/event-dispatcher/tree/v7.4.8"
- Line 3967: Implements application logic: },
- Line 3968: Implements application logic: "funding": [
- Line 3969: Implements application logic: {
- Line 3970: Implements application logic: "url": "https://symfony.com/sponsor",
- Line 3971: Implements application logic: "type": "custom"
- Line 3972: Implements application logic: },
- Line 3973: Implements application logic: {
- Line 3974: Implements application logic: "url": "https://github.com/fabpot",
- Line 3975: Implements application logic: "type": "github"
- Line 3976: Implements application logic: },
- Line 3977: Implements application logic: {
- Line 3978: Implements application logic: "url": "https://github.com/nicolas-grekas",
- Line 3979: Implements application logic: "type": "github"
- Line 3980: Implements application logic: },
- Line 3981: Implements application logic: {
- Line 3982: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
- Line 3983: Implements application logic: "type": "tidelift"
- Line 3984: Implements application logic: }
- Line 3985: Implements application logic: ],
- Line 3986: Implements application logic: "time": "2026-03-30T13:54:39+00:00"
- Line 3987: Implements application logic: },
- Line 3988: Implements application logic: {
- Line 3989: Implements application logic: "name": "symfony/event-dispatcher-contracts",
- Line 3990: Implements application logic: "version": "v3.6.0",
- Line 3991: Implements application logic: "source": {
- Line 3992: Implements application logic: "type": "git",
- Line 3993: Implements application logic: "url": "https://github.com/symfony/event-dispatcher-contracts.git",
- Line 3994: Implements application logic: "reference": "59eb412e93815df44f05f342958efa9f46b1e586"
- Line 3995: Implements application logic: },
- Line 3996: Implements application logic: "dist": {
- Line 3997: Implements application logic: "type": "zip",
- Line 3998: Implements application logic: "url": "https://api.github.com/repos/symfony/event-dispatcher-contracts/zipball/59eb412e93815df44f05f342958efa9f46b1e586",
- Line 3999: Implements application logic: "reference": "59eb412e93815df44f05f342958efa9f46b1e586",
- Line 4000: Implements application logic: "shasum": ""
- Line 4001: Implements application logic: },
- Line 4002: Implements application logic: "require": {
- Line 4003: Implements application logic: "php": ">=8.1",
- Line 4004: Implements application logic: "psr/event-dispatcher": "^1"
- Line 4005: Implements application logic: },
- Line 4006: Implements application logic: "type": "library",
- Line 4007: Implements application logic: "extra": {
- Line 4008: Implements application logic: "thanks": {
- Line 4009: Implements application logic: "url": "https://github.com/symfony/contracts",
- Line 4010: Implements application logic: "name": "symfony/contracts"
- Line 4011: Implements application logic: },
- Line 4012: Implements application logic: "branch-alias": {
- Line 4013: Implements application logic: "dev-main": "3.6-dev"
- Line 4014: Implements application logic: }
- Line 4015: Implements application logic: },
- Line 4016: Implements application logic: "autoload": {
- Line 4017: Implements application logic: "psr-4": {
- Line 4018: Implements application logic: "Symfony\\Contracts\\EventDispatcher\\": ""
- Line 4019: Implements application logic: }
- Line 4020: Implements application logic: },
- Line 4021: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 4022: Implements application logic: "license": [
- Line 4023: Implements application logic: "MIT"
- Line 4024: Implements application logic: ],
- Line 4025: Implements application logic: "authors": [
- Line 4026: Implements application logic: {
- Line 4027: Implements application logic: "name": "Nicolas Grekas",
- Line 4028: Implements application logic: "email": "p@tchwork.com"
- Line 4029: Implements application logic: },
- Line 4030: Implements application logic: {
- Line 4031: Implements application logic: "name": "Symfony Community",
- Line 4032: Implements application logic: "homepage": "https://symfony.com/contributors"
- Line 4033: Implements application logic: }
- Line 4034: Implements application logic: ],
- Line 4035: Implements application logic: "description": "Generic abstractions related to dispatching event",
- Line 4036: Implements application logic: "homepage": "https://symfony.com",
- Line 4037: Implements application logic: "keywords": [
- Line 4038: Implements application logic: "abstractions",
- Line 4039: Implements application logic: "contracts",
- Line 4040: Implements application logic: "decoupling",
- Line 4041: Implements application logic: "interfaces",
- Line 4042: Implements application logic: "interoperability",
- Line 4043: Implements application logic: "standards"
- Line 4044: Implements application logic: ],
- Line 4045: Implements application logic: "support": {
- Line 4046: Implements application logic: "source": "https://github.com/symfony/event-dispatcher-contracts/tree/v3.6.0"
- Line 4047: Implements application logic: },
- Line 4048: Implements application logic: "funding": [
- Line 4049: Implements application logic: {
- Line 4050: Implements application logic: "url": "https://symfony.com/sponsor",
- Line 4051: Implements application logic: "type": "custom"
- Line 4052: Implements application logic: },
- Line 4053: Implements application logic: {
- Line 4054: Implements application logic: "url": "https://github.com/fabpot",
- Line 4055: Implements application logic: "type": "github"
- Line 4056: Implements application logic: },
- Line 4057: Implements application logic: {
- Line 4058: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
- Line 4059: Implements application logic: "type": "tidelift"
- Line 4060: Implements application logic: }
- Line 4061: Implements application logic: ],
- Line 4062: Implements application logic: "time": "2024-09-25T14:21:43+00:00"
- Line 4063: Implements application logic: },
- Line 4064: Implements application logic: {
- Line 4065: Implements application logic: "name": "symfony/finder",
- Line 4066: Implements application logic: "version": "v7.4.8",
- Line 4067: Implements application logic: "source": {
- Line 4068: Implements application logic: "type": "git",
- Line 4069: Implements application logic: "url": "https://github.com/symfony/finder.git",
- Line 4070: Implements application logic: "reference": "e0be088d22278583a82da281886e8c3592fbf149"
- Line 4071: Implements application logic: },
- Line 4072: Implements application logic: "dist": {
- Line 4073: Implements application logic: "type": "zip",
- Line 4074: Implements application logic: "url": "https://api.github.com/repos/symfony/finder/zipball/e0be088d22278583a82da281886e8c3592fbf149",
- Line 4075: Implements application logic: "reference": "e0be088d22278583a82da281886e8c3592fbf149",
- Line 4076: Implements application logic: "shasum": ""
- Line 4077: Implements application logic: },
- Line 4078: Implements application logic: "require": {
- Line 4079: Implements application logic: "php": ">=8.2"
- Line 4080: Implements application logic: },
- Line 4081: Implements application logic: "require-dev": {
- Line 4082: Implements application logic: "symfony/filesystem": "^6.4|^7.0|^8.0"
- Line 4083: Implements application logic: },
- Line 4084: Implements application logic: "type": "library",
- Line 4085: Implements application logic: "autoload": {
- Line 4086: Implements application logic: "psr-4": {
- Line 4087: Implements application logic: "Symfony\\Component\\Finder\\": ""
- Line 4088: Implements application logic: },
- Line 4089: Implements application logic: "exclude-from-classmap": [
- Line 4090: Implements application logic: "/Tests/"
- Line 4091: Implements application logic: ]
- Line 4092: Implements application logic: },
- Line 4093: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 4094: Implements application logic: "license": [
- Line 4095: Implements application logic: "MIT"
- Line 4096: Implements application logic: ],
- Line 4097: Implements application logic: "authors": [
- Line 4098: Implements application logic: {
- Line 4099: Implements application logic: "name": "Fabien Potencier",
- Line 4100: Implements application logic: "email": "fabien@symfony.com"
- Line 4101: Implements application logic: },
- Line 4102: Implements application logic: {
- Line 4103: Implements application logic: "name": "Symfony Community",
- Line 4104: Implements application logic: "homepage": "https://symfony.com/contributors"
- Line 4105: Implements application logic: }
- Line 4106: Implements application logic: ],
- Line 4107: Implements application logic: "description": "Finds files and directories via an intuitive fluent interface",
- Line 4108: Implements application logic: "homepage": "https://symfony.com",
- Line 4109: Implements application logic: "support": {
- Line 4110: Implements application logic: "source": "https://github.com/symfony/finder/tree/v7.4.8"
- Line 4111: Implements application logic: },
- Line 4112: Implements application logic: "funding": [
- Line 4113: Implements application logic: {
- Line 4114: Implements application logic: "url": "https://symfony.com/sponsor",
- Line 4115: Implements application logic: "type": "custom"
- Line 4116: Implements application logic: },
- Line 4117: Implements application logic: {
- Line 4118: Implements application logic: "url": "https://github.com/fabpot",
- Line 4119: Implements application logic: "type": "github"
- Line 4120: Implements application logic: },
- Line 4121: Implements application logic: {
- Line 4122: Implements application logic: "url": "https://github.com/nicolas-grekas",
- Line 4123: Implements application logic: "type": "github"
- Line 4124: Implements application logic: },
- Line 4125: Implements application logic: {
- Line 4126: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
- Line 4127: Implements application logic: "type": "tidelift"
- Line 4128: Implements application logic: }
- Line 4129: Implements application logic: ],
- Line 4130: Implements application logic: "time": "2026-03-24T13:12:05+00:00"
- Line 4131: Implements application logic: },
- Line 4132: Implements application logic: {
- Line 4133: Implements application logic: "name": "symfony/http-foundation",
- Line 4134: Implements application logic: "version": "v7.4.8",
- Line 4135: Implements application logic: "source": {
- Line 4136: Implements application logic: "type": "git",
- Line 4137: Implements application logic: "url": "https://github.com/symfony/http-foundation.git",
- Line 4138: Implements application logic: "reference": "9381209597ec66c25be154cbf2289076e64d1eab"
- Line 4139: Implements application logic: },
- Line 4140: Implements application logic: "dist": {
- Line 4141: Implements application logic: "type": "zip",
- Line 4142: Implements application logic: "url": "https://api.github.com/repos/symfony/http-foundation/zipball/9381209597ec66c25be154cbf2289076e64d1eab",
- Line 4143: Implements application logic: "reference": "9381209597ec66c25be154cbf2289076e64d1eab",
- Line 4144: Implements application logic: "shasum": ""
- Line 4145: Implements application logic: },
- Line 4146: Implements application logic: "require": {
- Line 4147: Implements application logic: "php": ">=8.2",
- Line 4148: Implements application logic: "symfony/deprecation-contracts": "^2.5|^3",
- Line 4149: Implements application logic: "symfony/polyfill-mbstring": "^1.1"
- Line 4150: Implements application logic: },
- Line 4151: Implements application logic: "conflict": {
- Line 4152: Implements application logic: "doctrine/dbal": "<3.6",
- Line 4153: Implements application logic: "symfony/cache": "<6.4.12|>=7.0,<7.1.5"
- Line 4154: Implements application logic: },
- Line 4155: Implements application logic: "require-dev": {
- Line 4156: Implements application logic: "doctrine/dbal": "^3.6|^4",
- Line 4157: Implements application logic: "predis/predis": "^1.1|^2.0",
- Line 4158: Implements application logic: "symfony/cache": "^6.4.12|^7.1.5|^8.0",
- Line 4159: Implements application logic: "symfony/clock": "^6.4|^7.0|^8.0",
- Line 4160: Implements application logic: "symfony/dependency-injection": "^6.4|^7.0|^8.0",
- Line 4161: Implements application logic: "symfony/expression-language": "^6.4|^7.0|^8.0",
- Line 4162: Implements application logic: "symfony/http-kernel": "^6.4|^7.0|^8.0",
- Line 4163: Implements application logic: "symfony/mime": "^6.4|^7.0|^8.0",
- Line 4164: Implements application logic: "symfony/rate-limiter": "^6.4|^7.0|^8.0"
- Line 4165: Implements application logic: },
- Line 4166: Implements application logic: "type": "library",
- Line 4167: Implements application logic: "autoload": {
- Line 4168: Implements application logic: "psr-4": {
- Line 4169: Implements application logic: "Symfony\\Component\\HttpFoundation\\": ""
- Line 4170: Implements application logic: },
- Line 4171: Implements application logic: "exclude-from-classmap": [
- Line 4172: Implements application logic: "/Tests/"
- Line 4173: Implements application logic: ]
- Line 4174: Implements application logic: },
- Line 4175: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 4176: Implements application logic: "license": [
- Line 4177: Implements application logic: "MIT"
- Line 4178: Implements application logic: ],
- Line 4179: Implements application logic: "authors": [
- Line 4180: Implements application logic: {
- Line 4181: Implements application logic: "name": "Fabien Potencier",
- Line 4182: Implements application logic: "email": "fabien@symfony.com"
- Line 4183: Implements application logic: },
- Line 4184: Implements application logic: {
- Line 4185: Implements application logic: "name": "Symfony Community",
- Line 4186: Implements application logic: "homepage": "https://symfony.com/contributors"
- Line 4187: Implements application logic: }
- Line 4188: Implements application logic: ],
- Line 4189: Implements application logic: "description": "Defines an object-oriented layer for the HTTP specification",
- Line 4190: Implements application logic: "homepage": "https://symfony.com",
- Line 4191: Implements application logic: "support": {
- Line 4192: Implements application logic: "source": "https://github.com/symfony/http-foundation/tree/v7.4.8"
- Line 4193: Implements application logic: },
- Line 4194: Implements application logic: "funding": [
- Line 4195: Implements application logic: {
- Line 4196: Implements application logic: "url": "https://symfony.com/sponsor",
- Line 4197: Implements application logic: "type": "custom"
- Line 4198: Implements application logic: },
- Line 4199: Implements application logic: {
- Line 4200: Implements application logic: "url": "https://github.com/fabpot",
- Line 4201: Implements application logic: "type": "github"
- Line 4202: Implements application logic: },
- Line 4203: Implements application logic: {
- Line 4204: Implements application logic: "url": "https://github.com/nicolas-grekas",
- Line 4205: Implements application logic: "type": "github"
- Line 4206: Implements application logic: },
- Line 4207: Implements application logic: {
- Line 4208: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
- Line 4209: Implements application logic: "type": "tidelift"
- Line 4210: Implements application logic: }
- Line 4211: Implements application logic: ],
- Line 4212: Implements application logic: "time": "2026-03-24T13:12:05+00:00"
- Line 4213: Implements application logic: },
- Line 4214: Implements application logic: {
- Line 4215: Implements application logic: "name": "symfony/http-kernel",
- Line 4216: Implements application logic: "version": "v7.4.8",
- Line 4217: Implements application logic: "source": {
- Line 4218: Implements application logic: "type": "git",
- Line 4219: Implements application logic: "url": "https://github.com/symfony/http-kernel.git",
- Line 4220: Implements application logic: "reference": "017e76ad089bac281553389269e259e155935e1a"
- Line 4221: Implements application logic: },
- Line 4222: Implements application logic: "dist": {
- Line 4223: Implements application logic: "type": "zip",
- Line 4224: Implements application logic: "url": "https://api.github.com/repos/symfony/http-kernel/zipball/017e76ad089bac281553389269e259e155935e1a",
- Line 4225: Implements application logic: "reference": "017e76ad089bac281553389269e259e155935e1a",
- Line 4226: Implements application logic: "shasum": ""
- Line 4227: Implements application logic: },
- Line 4228: Implements application logic: "require": {
- Line 4229: Implements application logic: "php": ">=8.2",
- Line 4230: Implements application logic: "psr/log": "^1|^2|^3",
- Line 4231: Implements application logic: "symfony/deprecation-contracts": "^2.5|^3",
- Line 4232: Implements application logic: "symfony/error-handler": "^6.4|^7.0|^8.0",
- Line 4233: Implements application logic: "symfony/event-dispatcher": "^7.3|^8.0",
- Line 4234: Implements application logic: "symfony/http-foundation": "^7.4|^8.0",
- Line 4235: Implements application logic: "symfony/polyfill-ctype": "^1.8"
- Line 4236: Implements application logic: },
- Line 4237: Implements application logic: "conflict": {
- Line 4238: Implements application logic: "symfony/browser-kit": "<6.4",
- Line 4239: Implements application logic: "symfony/cache": "<6.4",
- Line 4240: Implements application logic: "symfony/config": "<6.4",
- Line 4241: Implements application logic: "symfony/console": "<6.4",
- Line 4242: Implements application logic: "symfony/dependency-injection": "<6.4",
- Line 4243: Implements application logic: "symfony/doctrine-bridge": "<6.4",
- Line 4244: Implements application logic: "symfony/flex": "<2.10",
- Line 4245: Implements application logic: "symfony/form": "<6.4",
- Line 4246: Implements application logic: "symfony/http-client": "<6.4",
- Line 4247: Implements application logic: "symfony/http-client-contracts": "<2.5",
- Line 4248: Implements application logic: "symfony/mailer": "<6.4",
- Line 4249: Implements application logic: "symfony/messenger": "<6.4",
- Line 4250: Implements application logic: "symfony/translation": "<6.4",
- Line 4251: Implements application logic: "symfony/translation-contracts": "<2.5",
- Line 4252: Implements application logic: "symfony/twig-bridge": "<6.4",
- Line 4253: Implements application logic: "symfony/validator": "<6.4",
- Line 4254: Implements application logic: "symfony/var-dumper": "<6.4",
- Line 4255: Implements application logic: "twig/twig": "<3.12"
- Line 4256: Implements application logic: },
- Line 4257: Implements application logic: "provide": {
- Line 4258: Implements application logic: "psr/log-implementation": "1.0|2.0|3.0"
- Line 4259: Implements application logic: },
- Line 4260: Implements application logic: "require-dev": {
- Line 4261: Implements application logic: "psr/cache": "^1.0|^2.0|^3.0",
- Line 4262: Implements application logic: "symfony/browser-kit": "^6.4|^7.0|^8.0",
- Line 4263: Implements application logic: "symfony/clock": "^6.4|^7.0|^8.0",
- Line 4264: Implements application logic: "symfony/config": "^6.4|^7.0|^8.0",
- Line 4265: Implements application logic: "symfony/console": "^6.4|^7.0|^8.0",
- Line 4266: Implements application logic: "symfony/css-selector": "^6.4|^7.0|^8.0",
- Line 4267: Implements application logic: "symfony/dependency-injection": "^6.4.1|^7.0.1|^8.0",
- Line 4268: Implements application logic: "symfony/dom-crawler": "^6.4|^7.0|^8.0",
- Line 4269: Implements application logic: "symfony/expression-language": "^6.4|^7.0|^8.0",
- Line 4270: Implements application logic: "symfony/finder": "^6.4|^7.0|^8.0",
- Line 4271: Implements application logic: "symfony/http-client-contracts": "^2.5|^3",
- Line 4272: Implements application logic: "symfony/process": "^6.4|^7.0|^8.0",
- Line 4273: Implements application logic: "symfony/property-access": "^7.1|^8.0",
- Line 4274: Implements application logic: "symfony/routing": "^6.4|^7.0|^8.0",
- Line 4275: Implements application logic: "symfony/serializer": "^7.1|^8.0",
- Line 4276: Implements application logic: "symfony/stopwatch": "^6.4|^7.0|^8.0",
- Line 4277: Implements application logic: "symfony/translation": "^6.4|^7.0|^8.0",
- Line 4278: Implements application logic: "symfony/translation-contracts": "^2.5|^3",
- Line 4279: Implements application logic: "symfony/uid": "^6.4|^7.0|^8.0",
- Line 4280: Implements application logic: "symfony/validator": "^6.4|^7.0|^8.0",
- Line 4281: Implements application logic: "symfony/var-dumper": "^6.4|^7.0|^8.0",
- Line 4282: Implements application logic: "symfony/var-exporter": "^6.4|^7.0|^8.0",
- Line 4283: Implements application logic: "twig/twig": "^3.12"
- Line 4284: Implements application logic: },
- Line 4285: Implements application logic: "type": "library",
- Line 4286: Implements application logic: "autoload": {
- Line 4287: Implements application logic: "psr-4": {
- Line 4288: Implements application logic: "Symfony\\Component\\HttpKernel\\": ""
- Line 4289: Implements application logic: },
- Line 4290: Implements application logic: "exclude-from-classmap": [
- Line 4291: Implements application logic: "/Tests/"
- Line 4292: Implements application logic: ]
- Line 4293: Implements application logic: },
- Line 4294: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 4295: Implements application logic: "license": [
- Line 4296: Implements application logic: "MIT"
- Line 4297: Implements application logic: ],
- Line 4298: Implements application logic: "authors": [
- Line 4299: Implements application logic: {
- Line 4300: Implements application logic: "name": "Fabien Potencier",
- Line 4301: Implements application logic: "email": "fabien@symfony.com"
- Line 4302: Implements application logic: },
- Line 4303: Implements application logic: {
- Line 4304: Implements application logic: "name": "Symfony Community",
- Line 4305: Implements application logic: "homepage": "https://symfony.com/contributors"
- Line 4306: Implements application logic: }
- Line 4307: Implements application logic: ],
- Line 4308: Implements application logic: "description": "Provides a structured process for converting a Request into a Response",
- Line 4309: Implements application logic: "homepage": "https://symfony.com",
- Line 4310: Implements application logic: "support": {
- Line 4311: Implements application logic: "source": "https://github.com/symfony/http-kernel/tree/v7.4.8"
- Line 4312: Implements application logic: },
- Line 4313: Implements application logic: "funding": [
- Line 4314: Implements application logic: {
- Line 4315: Implements application logic: "url": "https://symfony.com/sponsor",
- Line 4316: Implements application logic: "type": "custom"
- Line 4317: Implements application logic: },
- Line 4318: Implements application logic: {
- Line 4319: Implements application logic: "url": "https://github.com/fabpot",
- Line 4320: Implements application logic: "type": "github"
- Line 4321: Implements application logic: },
- Line 4322: Implements application logic: {
- Line 4323: Implements application logic: "url": "https://github.com/nicolas-grekas",
- Line 4324: Implements application logic: "type": "github"
- Line 4325: Implements application logic: },
- Line 4326: Implements application logic: {
- Line 4327: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
- Line 4328: Implements application logic: "type": "tidelift"
- Line 4329: Implements application logic: }
- Line 4330: Implements application logic: ],
- Line 4331: Implements application logic: "time": "2026-03-31T20:57:01+00:00"
- Line 4332: Implements application logic: },
- Line 4333: Implements application logic: {
- Line 4334: Implements application logic: "name": "symfony/mailer",
- Line 4335: Implements application logic: "version": "v7.4.8",
- Line 4336: Implements application logic: "source": {
- Line 4337: Implements application logic: "type": "git",
- Line 4338: Implements application logic: "url": "https://github.com/symfony/mailer.git",
- Line 4339: Implements application logic: "reference": "f6ea532250b476bfc1b56699b388a1bdbf168f62"
- Line 4340: Implements application logic: },
- Line 4341: Implements application logic: "dist": {
- Line 4342: Implements application logic: "type": "zip",
- Line 4343: Implements application logic: "url": "https://api.github.com/repos/symfony/mailer/zipball/f6ea532250b476bfc1b56699b388a1bdbf168f62",
- Line 4344: Implements application logic: "reference": "f6ea532250b476bfc1b56699b388a1bdbf168f62",
- Line 4345: Implements application logic: "shasum": ""
- Line 4346: Implements application logic: },
- Line 4347: Implements application logic: "require": {
- Line 4348: Implements application logic: "egulias/email-validator": "^2.1.10|^3|^4",
- Line 4349: Implements application logic: "php": ">=8.2",
- Line 4350: Implements application logic: "psr/event-dispatcher": "^1",
- Line 4351: Implements application logic: "psr/log": "^1|^2|^3",
- Line 4352: Implements application logic: "symfony/event-dispatcher": "^6.4|^7.0|^8.0",
- Line 4353: Implements application logic: "symfony/mime": "^7.2|^8.0",
- Line 4354: Implements application logic: "symfony/service-contracts": "^2.5|^3"
- Line 4355: Implements application logic: },
- Line 4356: Implements application logic: "conflict": {
- Line 4357: Implements application logic: "symfony/http-client-contracts": "<2.5",
- Line 4358: Implements application logic: "symfony/http-kernel": "<6.4",
- Line 4359: Implements application logic: "symfony/messenger": "<6.4",
- Line 4360: Implements application logic: "symfony/mime": "<6.4",
- Line 4361: Implements application logic: "symfony/twig-bridge": "<6.4"
- Line 4362: Implements application logic: },
- Line 4363: Implements application logic: "require-dev": {
- Line 4364: Implements application logic: "symfony/console": "^6.4|^7.0|^8.0",
- Line 4365: Implements application logic: "symfony/http-client": "^6.4|^7.0|^8.0",
- Line 4366: Implements application logic: "symfony/messenger": "^6.4|^7.0|^8.0",
- Line 4367: Implements application logic: "symfony/twig-bridge": "^6.4|^7.0|^8.0"
- Line 4368: Implements application logic: },
- Line 4369: Implements application logic: "type": "library",
- Line 4370: Implements application logic: "autoload": {
- Line 4371: Implements application logic: "psr-4": {
- Line 4372: Implements application logic: "Symfony\\Component\\Mailer\\": ""
- Line 4373: Implements application logic: },
- Line 4374: Implements application logic: "exclude-from-classmap": [
- Line 4375: Implements application logic: "/Tests/"
- Line 4376: Implements application logic: ]
- Line 4377: Implements application logic: },
- Line 4378: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 4379: Implements application logic: "license": [
- Line 4380: Implements application logic: "MIT"
- Line 4381: Implements application logic: ],
- Line 4382: Implements application logic: "authors": [
- Line 4383: Implements application logic: {
- Line 4384: Implements application logic: "name": "Fabien Potencier",
- Line 4385: Implements application logic: "email": "fabien@symfony.com"
- Line 4386: Implements application logic: },
- Line 4387: Implements application logic: {
- Line 4388: Implements application logic: "name": "Symfony Community",
- Line 4389: Implements application logic: "homepage": "https://symfony.com/contributors"
- Line 4390: Implements application logic: }
- Line 4391: Implements application logic: ],
- Line 4392: Implements application logic: "description": "Helps sending emails",
- Line 4393: Implements application logic: "homepage": "https://symfony.com",
- Line 4394: Implements application logic: "support": {
- Line 4395: Implements application logic: "source": "https://github.com/symfony/mailer/tree/v7.4.8"
- Line 4396: Implements application logic: },
- Line 4397: Implements application logic: "funding": [
- Line 4398: Implements application logic: {
- Line 4399: Implements application logic: "url": "https://symfony.com/sponsor",
- Line 4400: Implements application logic: "type": "custom"
- Line 4401: Implements application logic: },
- Line 4402: Implements application logic: {
- Line 4403: Implements application logic: "url": "https://github.com/fabpot",
- Line 4404: Implements application logic: "type": "github"
- Line 4405: Implements application logic: },
- Line 4406: Implements application logic: {
- Line 4407: Implements application logic: "url": "https://github.com/nicolas-grekas",
- Line 4408: Implements application logic: "type": "github"
- Line 4409: Implements application logic: },
- Line 4410: Implements application logic: {
- Line 4411: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
- Line 4412: Implements application logic: "type": "tidelift"
- Line 4413: Implements application logic: }
- Line 4414: Implements application logic: ],
- Line 4415: Implements application logic: "time": "2026-03-24T13:12:05+00:00"
- Line 4416: Implements application logic: },
- Line 4417: Implements application logic: {
- Line 4418: Implements application logic: "name": "symfony/mime",
- Line 4419: Implements application logic: "version": "v7.4.8",
- Line 4420: Implements application logic: "source": {
- Line 4421: Implements application logic: "type": "git",
- Line 4422: Implements application logic: "url": "https://github.com/symfony/mime.git",
- Line 4423: Implements application logic: "reference": "6df02f99998081032da3407a8d6c4e1dcb5d4379"
- Line 4424: Implements application logic: },
- Line 4425: Implements application logic: "dist": {
- Line 4426: Implements application logic: "type": "zip",
- Line 4427: Implements application logic: "url": "https://api.github.com/repos/symfony/mime/zipball/6df02f99998081032da3407a8d6c4e1dcb5d4379",
- Line 4428: Implements application logic: "reference": "6df02f99998081032da3407a8d6c4e1dcb5d4379",
- Line 4429: Implements application logic: "shasum": ""
- Line 4430: Implements application logic: },
- Line 4431: Implements application logic: "require": {
- Line 4432: Implements application logic: "php": ">=8.2",
- Line 4433: Implements application logic: "symfony/deprecation-contracts": "^2.5|^3",
- Line 4434: Implements application logic: "symfony/polyfill-intl-idn": "^1.10",
- Line 4435: Implements application logic: "symfony/polyfill-mbstring": "^1.0"
- Line 4436: Implements application logic: },
- Line 4437: Implements application logic: "conflict": {
- Line 4438: Implements application logic: "egulias/email-validator": "~3.0.0",
- Line 4439: Implements application logic: "phpdocumentor/reflection-docblock": "<5.2|>=7",
- Line 4440: Implements application logic: "phpdocumentor/type-resolver": "<1.5.1",
- Line 4441: Implements application logic: "symfony/mailer": "<6.4",
- Line 4442: Implements application logic: "symfony/serializer": "<6.4.3|>7.0,<7.0.3"
- Line 4443: Implements application logic: },
- Line 4444: Implements application logic: "require-dev": {
- Line 4445: Implements application logic: "egulias/email-validator": "^2.1.10|^3.1|^4",
- Line 4446: Implements application logic: "league/html-to-markdown": "^5.0",
- Line 4447: Implements application logic: "phpdocumentor/reflection-docblock": "^5.2|^6.0",
- Line 4448: Implements application logic: "symfony/dependency-injection": "^6.4|^7.0|^8.0",
- Line 4449: Implements application logic: "symfony/process": "^6.4|^7.0|^8.0",
- Line 4450: Implements application logic: "symfony/property-access": "^6.4|^7.0|^8.0",
- Line 4451: Implements application logic: "symfony/property-info": "^6.4|^7.0|^8.0",
- Line 4452: Implements application logic: "symfony/serializer": "^6.4.3|^7.0.3|^8.0"
- Line 4453: Implements application logic: },
- Line 4454: Implements application logic: "type": "library",
- Line 4455: Implements application logic: "autoload": {
- Line 4456: Implements application logic: "psr-4": {
- Line 4457: Implements application logic: "Symfony\\Component\\Mime\\": ""
- Line 4458: Implements application logic: },
- Line 4459: Implements application logic: "exclude-from-classmap": [
- Line 4460: Implements application logic: "/Tests/"
- Line 4461: Implements application logic: ]
- Line 4462: Implements application logic: },
- Line 4463: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 4464: Implements application logic: "license": [
- Line 4465: Implements application logic: "MIT"
- Line 4466: Implements application logic: ],
- Line 4467: Implements application logic: "authors": [
- Line 4468: Implements application logic: {
- Line 4469: Implements application logic: "name": "Fabien Potencier",
- Line 4470: Implements application logic: "email": "fabien@symfony.com"
- Line 4471: Implements application logic: },
- Line 4472: Implements application logic: {
- Line 4473: Implements application logic: "name": "Symfony Community",
- Line 4474: Implements application logic: "homepage": "https://symfony.com/contributors"
- Line 4475: Implements application logic: }
- Line 4476: Implements application logic: ],
- Line 4477: Implements application logic: "description": "Allows manipulating MIME messages",
- Line 4478: Implements application logic: "homepage": "https://symfony.com",
- Line 4479: Implements application logic: "keywords": [
- Line 4480: Implements application logic: "mime",
- Line 4481: Implements application logic: "mime-type"
- Line 4482: Implements application logic: ],
- Line 4483: Implements application logic: "support": {
- Line 4484: Implements application logic: "source": "https://github.com/symfony/mime/tree/v7.4.8"
- Line 4485: Implements application logic: },
- Line 4486: Implements application logic: "funding": [
- Line 4487: Implements application logic: {
- Line 4488: Implements application logic: "url": "https://symfony.com/sponsor",
- Line 4489: Implements application logic: "type": "custom"
- Line 4490: Implements application logic: },
- Line 4491: Implements application logic: {
- Line 4492: Implements application logic: "url": "https://github.com/fabpot",
- Line 4493: Implements application logic: "type": "github"
- Line 4494: Implements application logic: },
- Line 4495: Implements application logic: {
- Line 4496: Implements application logic: "url": "https://github.com/nicolas-grekas",
- Line 4497: Implements application logic: "type": "github"
- Line 4498: Implements application logic: },
- Line 4499: Implements application logic: {
- Line 4500: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
- Line 4501: Implements application logic: "type": "tidelift"
- Line 4502: Implements application logic: }
- Line 4503: Implements application logic: ],
- Line 4504: Implements application logic: "time": "2026-03-30T14:11:46+00:00"
- Line 4505: Implements application logic: },
- Line 4506: Implements application logic: {
- Line 4507: Implements application logic: "name": "symfony/polyfill-ctype",
- Line 4508: Implements application logic: "version": "v1.37.0",
- Line 4509: Implements application logic: "source": {
- Line 4510: Implements application logic: "type": "git",
- Line 4511: Implements application logic: "url": "https://github.com/symfony/polyfill-ctype.git",
- Line 4512: Implements application logic: "reference": "141046a8f9477948ff284fa65be2095baafb94f2"
- Line 4513: Implements application logic: },
- Line 4514: Implements application logic: "dist": {
- Line 4515: Implements application logic: "type": "zip",
- Line 4516: Implements application logic: "url": "https://api.github.com/repos/symfony/polyfill-ctype/zipball/141046a8f9477948ff284fa65be2095baafb94f2",
- Line 4517: Implements application logic: "reference": "141046a8f9477948ff284fa65be2095baafb94f2",
- Line 4518: Implements application logic: "shasum": ""
- Line 4519: Implements application logic: },
- Line 4520: Implements application logic: "require": {
- Line 4521: Implements application logic: "php": ">=7.2"
- Line 4522: Implements application logic: },
- Line 4523: Implements application logic: "provide": {
- Line 4524: Implements application logic: "ext-ctype": "*"
- Line 4525: Implements application logic: },
- Line 4526: Implements application logic: "suggest": {
- Line 4527: Implements application logic: "ext-ctype": "For best performance"
- Line 4528: Implements application logic: },
- Line 4529: Implements application logic: "type": "library",
- Line 4530: Implements application logic: "extra": {
- Line 4531: Implements application logic: "thanks": {
- Line 4532: Implements application logic: "url": "https://github.com/symfony/polyfill",
- Line 4533: Implements application logic: "name": "symfony/polyfill"
- Line 4534: Implements application logic: }
- Line 4535: Implements application logic: },
- Line 4536: Implements application logic: "autoload": {
- Line 4537: Implements application logic: "files": [
- Line 4538: Implements application logic: "bootstrap.php"
- Line 4539: Implements application logic: ],
- Line 4540: Implements application logic: "psr-4": {
- Line 4541: Implements application logic: "Symfony\\Polyfill\\Ctype\\": ""
- Line 4542: Implements application logic: }
- Line 4543: Implements application logic: },
- Line 4544: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 4545: Implements application logic: "license": [
- Line 4546: Implements application logic: "MIT"
- Line 4547: Implements application logic: ],
- Line 4548: Implements application logic: "authors": [
- Line 4549: Implements application logic: {
- Line 4550: Implements application logic: "name": "Gert de Pagter",
- Line 4551: Implements application logic: "email": "BackEndTea@gmail.com"
- Line 4552: Implements application logic: },
- Line 4553: Implements application logic: {
- Line 4554: Implements application logic: "name": "Symfony Community",
- Line 4555: Implements application logic: "homepage": "https://symfony.com/contributors"
- Line 4556: Implements application logic: }
- Line 4557: Implements application logic: ],
- Line 4558: Implements application logic: "description": "Symfony polyfill for ctype functions",
- Line 4559: Implements application logic: "homepage": "https://symfony.com",
- Line 4560: Implements application logic: "keywords": [
- Line 4561: Implements application logic: "compatibility",
- Line 4562: Implements application logic: "ctype",
- Line 4563: Implements application logic: "polyfill",
- Line 4564: Implements application logic: "portable"
- Line 4565: Implements application logic: ],
- Line 4566: Implements application logic: "support": {
- Line 4567: Implements application logic: "source": "https://github.com/symfony/polyfill-ctype/tree/v1.37.0"
- Line 4568: Implements application logic: },
- Line 4569: Implements application logic: "funding": [
- Line 4570: Implements application logic: {
- Line 4571: Implements application logic: "url": "https://symfony.com/sponsor",
- Line 4572: Implements application logic: "type": "custom"
- Line 4573: Implements application logic: },
- Line 4574: Implements application logic: {
- Line 4575: Implements application logic: "url": "https://github.com/fabpot",
- Line 4576: Implements application logic: "type": "github"
- Line 4577: Implements application logic: },
- Line 4578: Implements application logic: {
- Line 4579: Implements application logic: "url": "https://github.com/nicolas-grekas",
- Line 4580: Implements application logic: "type": "github"
- Line 4581: Implements application logic: },
- Line 4582: Implements application logic: {
- Line 4583: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
- Line 4584: Implements application logic: "type": "tidelift"
- Line 4585: Implements application logic: }
- Line 4586: Implements application logic: ],
- Line 4587: Implements application logic: "time": "2026-04-10T16:19:22+00:00"
- Line 4588: Implements application logic: },
- Line 4589: Implements application logic: {
- Line 4590: Implements application logic: "name": "symfony/polyfill-intl-grapheme",
- Line 4591: Implements application logic: "version": "v1.37.0",
- Line 4592: Implements application logic: "source": {
- Line 4593: Implements application logic: "type": "git",
- Line 4594: Implements application logic: "url": "https://github.com/symfony/polyfill-intl-grapheme.git",
- Line 4595: Implements application logic: "reference": "4864388bfbd3001ce88e234fab652acd91fdc57e"
- Line 4596: Implements application logic: },
- Line 4597: Implements application logic: "dist": {
- Line 4598: Implements application logic: "type": "zip",
- Line 4599: Implements application logic: "url": "https://api.github.com/repos/symfony/polyfill-intl-grapheme/zipball/4864388bfbd3001ce88e234fab652acd91fdc57e",
- Line 4600: Implements application logic: "reference": "4864388bfbd3001ce88e234fab652acd91fdc57e",
- Line 4601: Implements application logic: "shasum": ""
- Line 4602: Implements application logic: },
- Line 4603: Implements application logic: "require": {
- Line 4604: Implements application logic: "php": ">=7.2"
- Line 4605: Implements application logic: },
- Line 4606: Implements application logic: "suggest": {
- Line 4607: Implements application logic: "ext-intl": "For best performance"
- Line 4608: Implements application logic: },
- Line 4609: Implements application logic: "type": "library",
- Line 4610: Implements application logic: "extra": {
- Line 4611: Implements application logic: "thanks": {
- Line 4612: Implements application logic: "url": "https://github.com/symfony/polyfill",
- Line 4613: Implements application logic: "name": "symfony/polyfill"
- Line 4614: Implements application logic: }
- Line 4615: Implements application logic: },
- Line 4616: Implements application logic: "autoload": {
- Line 4617: Implements application logic: "files": [
- Line 4618: Implements application logic: "bootstrap.php"
- Line 4619: Implements application logic: ],
- Line 4620: Implements application logic: "psr-4": {
- Line 4621: Implements application logic: "Symfony\\Polyfill\\Intl\\Grapheme\\": ""
- Line 4622: Implements application logic: }
- Line 4623: Implements application logic: },
- Line 4624: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 4625: Implements application logic: "license": [
- Line 4626: Implements application logic: "MIT"
- Line 4627: Implements application logic: ],
- Line 4628: Implements application logic: "authors": [
- Line 4629: Implements application logic: {
- Line 4630: Implements application logic: "name": "Nicolas Grekas",
- Line 4631: Implements application logic: "email": "p@tchwork.com"
- Line 4632: Implements application logic: },
- Line 4633: Implements application logic: {
- Line 4634: Implements application logic: "name": "Symfony Community",
- Line 4635: Implements application logic: "homepage": "https://symfony.com/contributors"
- Line 4636: Implements application logic: }
- Line 4637: Implements application logic: ],
- Line 4638: Implements application logic: "description": "Symfony polyfill for intl's grapheme_* functions",
- Line 4639: Implements application logic: "homepage": "https://symfony.com",
- Line 4640: Implements application logic: "keywords": [
- Line 4641: Implements application logic: "compatibility",
- Line 4642: Implements application logic: "grapheme",
- Line 4643: Implements application logic: "intl",
- Line 4644: Implements application logic: "polyfill",
- Line 4645: Implements application logic: "portable",
- Line 4646: Implements application logic: "shim"
- Line 4647: Implements application logic: ],
- Line 4648: Implements application logic: "support": {
- Line 4649: Implements application logic: "source": "https://github.com/symfony/polyfill-intl-grapheme/tree/v1.37.0"
- Line 4650: Implements application logic: },
- Line 4651: Implements application logic: "funding": [
- Line 4652: Implements application logic: {
- Line 4653: Implements application logic: "url": "https://symfony.com/sponsor",
- Line 4654: Implements application logic: "type": "custom"
- Line 4655: Implements application logic: },
- Line 4656: Implements application logic: {
- Line 4657: Implements application logic: "url": "https://github.com/fabpot",
- Line 4658: Implements application logic: "type": "github"
- Line 4659: Implements application logic: },
- Line 4660: Implements application logic: {
- Line 4661: Implements application logic: "url": "https://github.com/nicolas-grekas",
- Line 4662: Implements application logic: "type": "github"
- Line 4663: Implements application logic: },
- Line 4664: Implements application logic: {
- Line 4665: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
- Line 4666: Implements application logic: "type": "tidelift"
- Line 4667: Implements application logic: }
- Line 4668: Implements application logic: ],
- Line 4669: Implements application logic: "time": "2026-04-26T13:13:48+00:00"
- Line 4670: Implements application logic: },
- Line 4671: Implements application logic: {
- Line 4672: Implements application logic: "name": "symfony/polyfill-intl-idn",
- Line 4673: Implements application logic: "version": "v1.37.0",
- Line 4674: Implements application logic: "source": {
- Line 4675: Implements application logic: "type": "git",
- Line 4676: Implements application logic: "url": "https://github.com/symfony/polyfill-intl-idn.git",
- Line 4677: Implements application logic: "reference": "9614ac4d8061dc257ecc64cba1b140873dce8ad3"
- Line 4678: Implements application logic: },
- Line 4679: Implements application logic: "dist": {
- Line 4680: Implements application logic: "type": "zip",
- Line 4681: Implements application logic: "url": "https://api.github.com/repos/symfony/polyfill-intl-idn/zipball/9614ac4d8061dc257ecc64cba1b140873dce8ad3",
- Line 4682: Implements application logic: "reference": "9614ac4d8061dc257ecc64cba1b140873dce8ad3",
- Line 4683: Implements application logic: "shasum": ""
- Line 4684: Implements application logic: },
- Line 4685: Implements application logic: "require": {
- Line 4686: Implements application logic: "php": ">=7.2",
- Line 4687: Implements application logic: "symfony/polyfill-intl-normalizer": "^1.10"
- Line 4688: Implements application logic: },
- Line 4689: Implements application logic: "suggest": {
- Line 4690: Implements application logic: "ext-intl": "For best performance"
- Line 4691: Implements application logic: },
- Line 4692: Implements application logic: "type": "library",
- Line 4693: Implements application logic: "extra": {
- Line 4694: Implements application logic: "thanks": {
- Line 4695: Implements application logic: "url": "https://github.com/symfony/polyfill",
- Line 4696: Implements application logic: "name": "symfony/polyfill"
- Line 4697: Implements application logic: }
- Line 4698: Implements application logic: },
- Line 4699: Implements application logic: "autoload": {
- Line 4700: Implements application logic: "files": [
- Line 4701: Implements application logic: "bootstrap.php"
- Line 4702: Implements application logic: ],
- Line 4703: Implements application logic: "psr-4": {
- Line 4704: Implements application logic: "Symfony\\Polyfill\\Intl\\Idn\\": ""
- Line 4705: Implements application logic: }
- Line 4706: Implements application logic: },
- Line 4707: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 4708: Implements application logic: "license": [
- Line 4709: Implements application logic: "MIT"
- Line 4710: Implements application logic: ],
- Line 4711: Implements application logic: "authors": [
- Line 4712: Implements application logic: {
- Line 4713: Implements application logic: "name": "Laurent Bassin",
- Line 4714: Implements application logic: "email": "laurent@bassin.info"
- Line 4715: Implements application logic: },
- Line 4716: Implements application logic: {
- Line 4717: Implements application logic: "name": "Trevor Rowbotham",
- Line 4718: Implements application logic: "email": "trevor.rowbotham@pm.me"
- Line 4719: Implements application logic: },
- Line 4720: Implements application logic: {
- Line 4721: Implements application logic: "name": "Symfony Community",
- Line 4722: Implements application logic: "homepage": "https://symfony.com/contributors"
- Line 4723: Implements application logic: }
- Line 4724: Implements application logic: ],
- Line 4725: Implements application logic: "description": "Symfony polyfill for intl's idn_to_ascii and idn_to_utf8 functions",
- Line 4726: Implements application logic: "homepage": "https://symfony.com",
- Line 4727: Implements application logic: "keywords": [
- Line 4728: Implements application logic: "compatibility",
- Line 4729: Implements application logic: "idn",
- Line 4730: Implements application logic: "intl",
- Line 4731: Implements application logic: "polyfill",
- Line 4732: Implements application logic: "portable",
- Line 4733: Implements application logic: "shim"
- Line 4734: Implements application logic: ],
- Line 4735: Implements application logic: "support": {
- Line 4736: Implements application logic: "source": "https://github.com/symfony/polyfill-intl-idn/tree/v1.37.0"
- Line 4737: Implements application logic: },
- Line 4738: Implements application logic: "funding": [
- Line 4739: Implements application logic: {
- Line 4740: Implements application logic: "url": "https://symfony.com/sponsor",
- Line 4741: Implements application logic: "type": "custom"
- Line 4742: Implements application logic: },
- Line 4743: Implements application logic: {
- Line 4744: Implements application logic: "url": "https://github.com/fabpot",
- Line 4745: Implements application logic: "type": "github"
- Line 4746: Implements application logic: },
- Line 4747: Implements application logic: {
- Line 4748: Implements application logic: "url": "https://github.com/nicolas-grekas",
- Line 4749: Implements application logic: "type": "github"
- Line 4750: Implements application logic: },
- Line 4751: Implements application logic: {
- Line 4752: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
- Line 4753: Implements application logic: "type": "tidelift"
- Line 4754: Implements application logic: }
- Line 4755: Implements application logic: ],
- Line 4756: Implements application logic: "time": "2024-09-10T14:38:51+00:00"
- Line 4757: Implements application logic: },
- Line 4758: Implements application logic: {
- Line 4759: Implements application logic: "name": "symfony/polyfill-intl-normalizer",
- Line 4760: Implements application logic: "version": "v1.37.0",
- Line 4761: Implements application logic: "source": {
- Line 4762: Implements application logic: "type": "git",
- Line 4763: Implements application logic: "url": "https://github.com/symfony/polyfill-intl-normalizer.git",
- Line 4764: Implements application logic: "reference": "3833d7255cc303546435cb650316bff708a1c75c"
- Line 4765: Implements application logic: },
- Line 4766: Implements application logic: "dist": {
- Line 4767: Implements application logic: "type": "zip",
- Line 4768: Implements application logic: "url": "https://api.github.com/repos/symfony/polyfill-intl-normalizer/zipball/3833d7255cc303546435cb650316bff708a1c75c",
- Line 4769: Implements application logic: "reference": "3833d7255cc303546435cb650316bff708a1c75c",
- Line 4770: Implements application logic: "shasum": ""
- Line 4771: Implements application logic: },
- Line 4772: Implements application logic: "require": {
- Line 4773: Implements application logic: "php": ">=7.2"
- Line 4774: Implements application logic: },
- Line 4775: Implements application logic: "suggest": {
- Line 4776: Implements application logic: "ext-intl": "For best performance"
- Line 4777: Implements application logic: },
- Line 4778: Implements application logic: "type": "library",
- Line 4779: Implements application logic: "extra": {
- Line 4780: Implements application logic: "thanks": {
- Line 4781: Implements application logic: "url": "https://github.com/symfony/polyfill",
- Line 4782: Implements application logic: "name": "symfony/polyfill"
- Line 4783: Implements application logic: }
- Line 4784: Implements application logic: },
- Line 4785: Implements application logic: "autoload": {
- Line 4786: Implements application logic: "files": [
- Line 4787: Implements application logic: "bootstrap.php"
- Line 4788: Implements application logic: ],
- Line 4789: Implements application logic: "psr-4": {
- Line 4790: Implements application logic: "Symfony\\Polyfill\\Intl\\Normalizer\\": ""
- Line 4791: Implements application logic: },
- Line 4792: Implements application logic: "classmap": [
- Line 4793: Implements application logic: "Resources/stubs"
- Line 4794: Implements application logic: ]
- Line 4795: Implements application logic: },
- Line 4796: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 4797: Implements application logic: "license": [
- Line 4798: Implements application logic: "MIT"
- Line 4799: Implements application logic: ],
- Line 4800: Implements application logic: "authors": [
- Line 4801: Implements application logic: {
- Line 4802: Implements application logic: "name": "Nicolas Grekas",
- Line 4803: Implements application logic: "email": "p@tchwork.com"
- Line 4804: Implements application logic: },
- Line 4805: Implements application logic: {
- Line 4806: Implements application logic: "name": "Symfony Community",
- Line 4807: Implements application logic: "homepage": "https://symfony.com/contributors"
- Line 4808: Implements application logic: }
- Line 4809: Implements application logic: ],
- Line 4810: Implements application logic: "description": "Symfony polyfill for intl's Normalizer class and related functions",
- Line 4811: Implements application logic: "homepage": "https://symfony.com",
- Line 4812: Implements application logic: "keywords": [
- Line 4813: Implements application logic: "compatibility",
- Line 4814: Implements application logic: "intl",
- Line 4815: Implements application logic: "normalizer",
- Line 4816: Implements application logic: "polyfill",
- Line 4817: Implements application logic: "portable",
- Line 4818: Implements application logic: "shim"
- Line 4819: Implements application logic: ],
- Line 4820: Implements application logic: "support": {
- Line 4821: Implements application logic: "source": "https://github.com/symfony/polyfill-intl-normalizer/tree/v1.37.0"
- Line 4822: Implements application logic: },
- Line 4823: Implements application logic: "funding": [
- Line 4824: Implements application logic: {
- Line 4825: Implements application logic: "url": "https://symfony.com/sponsor",
- Line 4826: Implements application logic: "type": "custom"
- Line 4827: Implements application logic: },
- Line 4828: Implements application logic: {
- Line 4829: Implements application logic: "url": "https://github.com/fabpot",
- Line 4830: Implements application logic: "type": "github"
- Line 4831: Implements application logic: },
- Line 4832: Implements application logic: {
- Line 4833: Implements application logic: "url": "https://github.com/nicolas-grekas",
- Line 4834: Implements application logic: "type": "github"
- Line 4835: Implements application logic: },
- Line 4836: Implements application logic: {
- Line 4837: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
- Line 4838: Implements application logic: "type": "tidelift"
- Line 4839: Implements application logic: }
- Line 4840: Implements application logic: ],
- Line 4841: Implements application logic: "time": "2024-09-09T11:45:10+00:00"
- Line 4842: Implements application logic: },
- Line 4843: Implements application logic: {
- Line 4844: Implements application logic: "name": "symfony/polyfill-mbstring",
- Line 4845: Implements application logic: "version": "v1.37.0",
- Line 4846: Implements application logic: "source": {
- Line 4847: Implements application logic: "type": "git",
- Line 4848: Implements application logic: "url": "https://github.com/symfony/polyfill-mbstring.git",
- Line 4849: Implements application logic: "reference": "6a21eb99c6973357967f6ce3708cd55a6bec6315"
- Line 4850: Implements application logic: },
- Line 4851: Implements application logic: "dist": {
- Line 4852: Implements application logic: "type": "zip",
- Line 4853: Implements application logic: "url": "https://api.github.com/repos/symfony/polyfill-mbstring/zipball/6a21eb99c6973357967f6ce3708cd55a6bec6315",
- Line 4854: Implements application logic: "reference": "6a21eb99c6973357967f6ce3708cd55a6bec6315",
- Line 4855: Implements application logic: "shasum": ""
- Line 4856: Implements application logic: },
- Line 4857: Implements application logic: "require": {
- Line 4858: Implements application logic: "ext-iconv": "*",
- Line 4859: Implements application logic: "php": ">=7.2"
- Line 4860: Implements application logic: },
- Line 4861: Implements application logic: "provide": {
- Line 4862: Implements application logic: "ext-mbstring": "*"
- Line 4863: Implements application logic: },
- Line 4864: Implements application logic: "suggest": {
- Line 4865: Implements application logic: "ext-mbstring": "For best performance"
- Line 4866: Implements application logic: },
- Line 4867: Implements application logic: "type": "library",
- Line 4868: Implements application logic: "extra": {
- Line 4869: Implements application logic: "thanks": {
- Line 4870: Implements application logic: "url": "https://github.com/symfony/polyfill",
- Line 4871: Implements application logic: "name": "symfony/polyfill"
- Line 4872: Implements application logic: }
- Line 4873: Implements application logic: },
- Line 4874: Implements application logic: "autoload": {
- Line 4875: Implements application logic: "files": [
- Line 4876: Implements application logic: "bootstrap.php"
- Line 4877: Implements application logic: ],
- Line 4878: Implements application logic: "psr-4": {
- Line 4879: Implements application logic: "Symfony\\Polyfill\\Mbstring\\": ""
- Line 4880: Implements application logic: }
- Line 4881: Implements application logic: },
- Line 4882: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 4883: Implements application logic: "license": [
- Line 4884: Implements application logic: "MIT"
- Line 4885: Implements application logic: ],
- Line 4886: Implements application logic: "authors": [
- Line 4887: Implements application logic: {
- Line 4888: Implements application logic: "name": "Nicolas Grekas",
- Line 4889: Implements application logic: "email": "p@tchwork.com"
- Line 4890: Implements application logic: },
- Line 4891: Implements application logic: {
- Line 4892: Implements application logic: "name": "Symfony Community",
- Line 4893: Implements application logic: "homepage": "https://symfony.com/contributors"
- Line 4894: Implements application logic: }
- Line 4895: Implements application logic: ],
- Line 4896: Implements application logic: "description": "Symfony polyfill for the Mbstring extension",
- Line 4897: Implements application logic: "homepage": "https://symfony.com",
- Line 4898: Implements application logic: "keywords": [
- Line 4899: Implements application logic: "compatibility",
- Line 4900: Implements application logic: "mbstring",
- Line 4901: Implements application logic: "polyfill",
- Line 4902: Implements application logic: "portable",
- Line 4903: Implements application logic: "shim"
- Line 4904: Implements application logic: ],
- Line 4905: Implements application logic: "support": {
- Line 4906: Implements application logic: "source": "https://github.com/symfony/polyfill-mbstring/tree/v1.37.0"
- Line 4907: Implements application logic: },
- Line 4908: Implements application logic: "funding": [
- Line 4909: Implements application logic: {
- Line 4910: Implements application logic: "url": "https://symfony.com/sponsor",
- Line 4911: Implements application logic: "type": "custom"
- Line 4912: Implements application logic: },
- Line 4913: Implements application logic: {
- Line 4914: Implements application logic: "url": "https://github.com/fabpot",
- Line 4915: Implements application logic: "type": "github"
- Line 4916: Implements application logic: },
- Line 4917: Implements application logic: {
- Line 4918: Implements application logic: "url": "https://github.com/nicolas-grekas",
- Line 4919: Implements application logic: "type": "github"
- Line 4920: Implements application logic: },
- Line 4921: Implements application logic: {
- Line 4922: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
- Line 4923: Implements application logic: "type": "tidelift"
- Line 4924: Implements application logic: }
- Line 4925: Implements application logic: ],
- Line 4926: Implements application logic: "time": "2026-04-10T17:25:58+00:00"
- Line 4927: Implements application logic: },
- Line 4928: Implements application logic: {
- Line 4929: Implements application logic: "name": "symfony/polyfill-php80",
- Line 4930: Implements application logic: "version": "v1.37.0",
- Line 4931: Implements application logic: "source": {
- Line 4932: Implements application logic: "type": "git",
- Line 4933: Implements application logic: "url": "https://github.com/symfony/polyfill-php80.git",
- Line 4934: Implements application logic: "reference": "dfb55726c3a76ea3b6459fcfda1ec2d80a682411"
- Line 4935: Implements application logic: },
- Line 4936: Implements application logic: "dist": {
- Line 4937: Implements application logic: "type": "zip",
- Line 4938: Implements application logic: "url": "https://api.github.com/repos/symfony/polyfill-php80/zipball/dfb55726c3a76ea3b6459fcfda1ec2d80a682411",
- Line 4939: Implements application logic: "reference": "dfb55726c3a76ea3b6459fcfda1ec2d80a682411",
- Line 4940: Implements application logic: "shasum": ""
- Line 4941: Implements application logic: },
- Line 4942: Implements application logic: "require": {
- Line 4943: Implements application logic: "php": ">=7.2"
- Line 4944: Implements application logic: },
- Line 4945: Implements application logic: "type": "library",
- Line 4946: Implements application logic: "extra": {
- Line 4947: Implements application logic: "thanks": {
- Line 4948: Implements application logic: "url": "https://github.com/symfony/polyfill",
- Line 4949: Implements application logic: "name": "symfony/polyfill"
- Line 4950: Implements application logic: }
- Line 4951: Implements application logic: },
- Line 4952: Implements application logic: "autoload": {
- Line 4953: Implements application logic: "files": [
- Line 4954: Implements application logic: "bootstrap.php"
- Line 4955: Implements application logic: ],
- Line 4956: Implements application logic: "psr-4": {
- Line 4957: Implements application logic: "Symfony\\Polyfill\\Php80\\": ""
- Line 4958: Implements application logic: },
- Line 4959: Implements application logic: "classmap": [
- Line 4960: Implements application logic: "Resources/stubs"
- Line 4961: Implements application logic: ]
- Line 4962: Implements application logic: },
- Line 4963: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 4964: Implements application logic: "license": [
- Line 4965: Implements application logic: "MIT"
- Line 4966: Implements application logic: ],
- Line 4967: Implements application logic: "authors": [
- Line 4968: Implements application logic: {
- Line 4969: Implements application logic: "name": "Ion Bazan",
- Line 4970: Implements application logic: "email": "ion.bazan@gmail.com"
- Line 4971: Implements application logic: },
- Line 4972: Implements application logic: {
- Line 4973: Implements application logic: "name": "Nicolas Grekas",
- Line 4974: Implements application logic: "email": "p@tchwork.com"
- Line 4975: Implements application logic: },
- Line 4976: Implements application logic: {
- Line 4977: Implements application logic: "name": "Symfony Community",
- Line 4978: Implements application logic: "homepage": "https://symfony.com/contributors"
- Line 4979: Implements application logic: }
- Line 4980: Implements application logic: ],
- Line 4981: Implements application logic: "description": "Symfony polyfill backporting some PHP 8.0+ features to lower PHP versions",
- Line 4982: Implements application logic: "homepage": "https://symfony.com",
- Line 4983: Implements application logic: "keywords": [
- Line 4984: Implements application logic: "compatibility",
- Line 4985: Implements application logic: "polyfill",
- Line 4986: Implements application logic: "portable",
- Line 4987: Implements application logic: "shim"
- Line 4988: Implements application logic: ],
- Line 4989: Implements application logic: "support": {
- Line 4990: Implements application logic: "source": "https://github.com/symfony/polyfill-php80/tree/v1.37.0"
- Line 4991: Implements application logic: },
- Line 4992: Implements application logic: "funding": [
- Line 4993: Implements application logic: {
- Line 4994: Implements application logic: "url": "https://symfony.com/sponsor",
- Line 4995: Implements application logic: "type": "custom"
- Line 4996: Implements application logic: },
- Line 4997: Implements application logic: {
- Line 4998: Implements application logic: "url": "https://github.com/fabpot",
- Line 4999: Implements application logic: "type": "github"
- Line 5000: Implements application logic: },
- Line 5001: Implements application logic: {
- Line 5002: Implements application logic: "url": "https://github.com/nicolas-grekas",
- Line 5003: Implements application logic: "type": "github"
- Line 5004: Implements application logic: },
- Line 5005: Implements application logic: {
- Line 5006: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
- Line 5007: Implements application logic: "type": "tidelift"
- Line 5008: Implements application logic: }
- Line 5009: Implements application logic: ],
- Line 5010: Implements application logic: "time": "2026-04-10T16:19:22+00:00"
- Line 5011: Implements application logic: },
- Line 5012: Implements application logic: {
- Line 5013: Implements application logic: "name": "symfony/polyfill-php83",
- Line 5014: Implements application logic: "version": "v1.37.0",
- Line 5015: Implements application logic: "source": {
- Line 5016: Implements application logic: "type": "git",
- Line 5017: Implements application logic: "url": "https://github.com/symfony/polyfill-php83.git",
- Line 5018: Implements application logic: "reference": "3600c2cb22399e25bb226e4a135ce91eeb2a6149"
- Line 5019: Implements application logic: },
- Line 5020: Implements application logic: "dist": {
- Line 5021: Implements application logic: "type": "zip",
- Line 5022: Implements application logic: "url": "https://api.github.com/repos/symfony/polyfill-php83/zipball/3600c2cb22399e25bb226e4a135ce91eeb2a6149",
- Line 5023: Implements application logic: "reference": "3600c2cb22399e25bb226e4a135ce91eeb2a6149",
- Line 5024: Implements application logic: "shasum": ""
- Line 5025: Implements application logic: },
- Line 5026: Implements application logic: "require": {
- Line 5027: Implements application logic: "php": ">=7.2"
- Line 5028: Implements application logic: },
- Line 5029: Implements application logic: "type": "library",
- Line 5030: Implements application logic: "extra": {
- Line 5031: Implements application logic: "thanks": {
- Line 5032: Implements application logic: "url": "https://github.com/symfony/polyfill",
- Line 5033: Implements application logic: "name": "symfony/polyfill"
- Line 5034: Implements application logic: }
- Line 5035: Implements application logic: },
- Line 5036: Implements application logic: "autoload": {
- Line 5037: Implements application logic: "files": [
- Line 5038: Implements application logic: "bootstrap.php"
- Line 5039: Implements application logic: ],
- Line 5040: Implements application logic: "psr-4": {
- Line 5041: Implements application logic: "Symfony\\Polyfill\\Php83\\": ""
- Line 5042: Implements application logic: },
- Line 5043: Implements application logic: "classmap": [
- Line 5044: Implements application logic: "Resources/stubs"
- Line 5045: Implements application logic: ]
- Line 5046: Implements application logic: },
- Line 5047: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 5048: Implements application logic: "license": [
- Line 5049: Implements application logic: "MIT"
- Line 5050: Implements application logic: ],
- Line 5051: Implements application logic: "authors": [
- Line 5052: Implements application logic: {
- Line 5053: Implements application logic: "name": "Nicolas Grekas",
- Line 5054: Implements application logic: "email": "p@tchwork.com"
- Line 5055: Implements application logic: },
- Line 5056: Implements application logic: {
- Line 5057: Implements application logic: "name": "Symfony Community",
- Line 5058: Implements application logic: "homepage": "https://symfony.com/contributors"
- Line 5059: Implements application logic: }
- Line 5060: Implements application logic: ],
- Line 5061: Implements application logic: "description": "Symfony polyfill backporting some PHP 8.3+ features to lower PHP versions",
- Line 5062: Implements application logic: "homepage": "https://symfony.com",
- Line 5063: Implements application logic: "keywords": [
- Line 5064: Implements application logic: "compatibility",
- Line 5065: Implements application logic: "polyfill",
- Line 5066: Implements application logic: "portable",
- Line 5067: Implements application logic: "shim"
- Line 5068: Implements application logic: ],
- Line 5069: Implements application logic: "support": {
- Line 5070: Implements application logic: "source": "https://github.com/symfony/polyfill-php83/tree/v1.37.0"
- Line 5071: Implements application logic: },
- Line 5072: Implements application logic: "funding": [
- Line 5073: Implements application logic: {
- Line 5074: Implements application logic: "url": "https://symfony.com/sponsor",
- Line 5075: Implements application logic: "type": "custom"
- Line 5076: Implements application logic: },
- Line 5077: Implements application logic: {
- Line 5078: Implements application logic: "url": "https://github.com/fabpot",
- Line 5079: Implements application logic: "type": "github"
- Line 5080: Implements application logic: },
- Line 5081: Implements application logic: {
- Line 5082: Implements application logic: "url": "https://github.com/nicolas-grekas",
- Line 5083: Implements application logic: "type": "github"
- Line 5084: Implements application logic: },
- Line 5085: Implements application logic: {
- Line 5086: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
- Line 5087: Implements application logic: "type": "tidelift"
- Line 5088: Implements application logic: }
- Line 5089: Implements application logic: ],
- Line 5090: Implements application logic: "time": "2026-04-10T17:25:58+00:00"
- Line 5091: Implements application logic: },
- Line 5092: Implements application logic: {
- Line 5093: Implements application logic: "name": "symfony/polyfill-php84",
- Line 5094: Implements application logic: "version": "v1.37.0",
- Line 5095: Implements application logic: "source": {
- Line 5096: Implements application logic: "type": "git",
- Line 5097: Implements application logic: "url": "https://github.com/symfony/polyfill-php84.git",
- Line 5098: Implements application logic: "reference": "88486db2c389b290bf87ff1de7ebc1e13e42bb06"
- Line 5099: Implements application logic: },
- Line 5100: Implements application logic: "dist": {
- Line 5101: Implements application logic: "type": "zip",
- Line 5102: Implements application logic: "url": "https://api.github.com/repos/symfony/polyfill-php84/zipball/88486db2c389b290bf87ff1de7ebc1e13e42bb06",
- Line 5103: Implements application logic: "reference": "88486db2c389b290bf87ff1de7ebc1e13e42bb06",
- Line 5104: Implements application logic: "shasum": ""
- Line 5105: Implements application logic: },
- Line 5106: Implements application logic: "require": {
- Line 5107: Implements application logic: "php": ">=7.2"
- Line 5108: Implements application logic: },
- Line 5109: Implements application logic: "type": "library",
- Line 5110: Implements application logic: "extra": {
- Line 5111: Implements application logic: "thanks": {
- Line 5112: Implements application logic: "url": "https://github.com/symfony/polyfill",
- Line 5113: Implements application logic: "name": "symfony/polyfill"
- Line 5114: Implements application logic: }
- Line 5115: Implements application logic: },
- Line 5116: Implements application logic: "autoload": {
- Line 5117: Implements application logic: "files": [
- Line 5118: Implements application logic: "bootstrap.php"
- Line 5119: Implements application logic: ],
- Line 5120: Implements application logic: "psr-4": {
- Line 5121: Implements application logic: "Symfony\\Polyfill\\Php84\\": ""
- Line 5122: Implements application logic: },
- Line 5123: Implements application logic: "classmap": [
- Line 5124: Implements application logic: "Resources/stubs"
- Line 5125: Implements application logic: ]
- Line 5126: Implements application logic: },
- Line 5127: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 5128: Implements application logic: "license": [
- Line 5129: Implements application logic: "MIT"
- Line 5130: Implements application logic: ],
- Line 5131: Implements application logic: "authors": [
- Line 5132: Implements application logic: {
- Line 5133: Implements application logic: "name": "Nicolas Grekas",
- Line 5134: Implements application logic: "email": "p@tchwork.com"
- Line 5135: Implements application logic: },
- Line 5136: Implements application logic: {
- Line 5137: Implements application logic: "name": "Symfony Community",
- Line 5138: Implements application logic: "homepage": "https://symfony.com/contributors"
- Line 5139: Implements application logic: }
- Line 5140: Implements application logic: ],
- Line 5141: Implements application logic: "description": "Symfony polyfill backporting some PHP 8.4+ features to lower PHP versions",
- Line 5142: Implements application logic: "homepage": "https://symfony.com",
- Line 5143: Implements application logic: "keywords": [
- Line 5144: Implements application logic: "compatibility",
- Line 5145: Implements application logic: "polyfill",
- Line 5146: Implements application logic: "portable",
- Line 5147: Implements application logic: "shim"
- Line 5148: Implements application logic: ],
- Line 5149: Implements application logic: "support": {
- Line 5150: Implements application logic: "source": "https://github.com/symfony/polyfill-php84/tree/v1.37.0"
- Line 5151: Implements application logic: },
- Line 5152: Implements application logic: "funding": [
- Line 5153: Implements application logic: {
- Line 5154: Implements application logic: "url": "https://symfony.com/sponsor",
- Line 5155: Implements application logic: "type": "custom"
- Line 5156: Implements application logic: },
- Line 5157: Implements application logic: {
- Line 5158: Implements application logic: "url": "https://github.com/fabpot",
- Line 5159: Implements application logic: "type": "github"
- Line 5160: Implements application logic: },
- Line 5161: Implements application logic: {
- Line 5162: Implements application logic: "url": "https://github.com/nicolas-grekas",
- Line 5163: Implements application logic: "type": "github"
- Line 5164: Implements application logic: },
- Line 5165: Implements application logic: {
- Line 5166: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
- Line 5167: Implements application logic: "type": "tidelift"
- Line 5168: Implements application logic: }
- Line 5169: Implements application logic: ],
- Line 5170: Implements application logic: "time": "2026-04-10T18:47:49+00:00"
- Line 5171: Implements application logic: },
- Line 5172: Implements application logic: {
- Line 5173: Implements application logic: "name": "symfony/polyfill-php85",
- Line 5174: Implements application logic: "version": "v1.37.0",
- Line 5175: Implements application logic: "source": {
- Line 5176: Implements application logic: "type": "git",
- Line 5177: Implements application logic: "url": "https://github.com/symfony/polyfill-php85.git",
- Line 5178: Implements application logic: "reference": "fcfa4973a9917cef23f2e38774da74a2b7d115ee"
- Line 5179: Implements application logic: },
- Line 5180: Implements application logic: "dist": {
- Line 5181: Implements application logic: "type": "zip",
- Line 5182: Implements application logic: "url": "https://api.github.com/repos/symfony/polyfill-php85/zipball/fcfa4973a9917cef23f2e38774da74a2b7d115ee",
- Line 5183: Implements application logic: "reference": "fcfa4973a9917cef23f2e38774da74a2b7d115ee",
- Line 5184: Implements application logic: "shasum": ""
- Line 5185: Implements application logic: },
- Line 5186: Implements application logic: "require": {
- Line 5187: Implements application logic: "php": ">=7.2"
- Line 5188: Implements application logic: },
- Line 5189: Implements application logic: "type": "library",
- Line 5190: Implements application logic: "extra": {
- Line 5191: Implements application logic: "thanks": {
- Line 5192: Implements application logic: "url": "https://github.com/symfony/polyfill",
- Line 5193: Implements application logic: "name": "symfony/polyfill"
- Line 5194: Implements application logic: }
- Line 5195: Implements application logic: },
- Line 5196: Implements application logic: "autoload": {
- Line 5197: Implements application logic: "files": [
- Line 5198: Implements application logic: "bootstrap.php"
- Line 5199: Implements application logic: ],
- Line 5200: Implements application logic: "psr-4": {
- Line 5201: Implements application logic: "Symfony\\Polyfill\\Php85\\": ""
- Line 5202: Implements application logic: },
- Line 5203: Implements application logic: "classmap": [
- Line 5204: Implements application logic: "Resources/stubs"
- Line 5205: Implements application logic: ]
- Line 5206: Implements application logic: },
- Line 5207: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 5208: Implements application logic: "license": [
- Line 5209: Implements application logic: "MIT"
- Line 5210: Implements application logic: ],
- Line 5211: Implements application logic: "authors": [
- Line 5212: Implements application logic: {
- Line 5213: Implements application logic: "name": "Nicolas Grekas",
- Line 5214: Implements application logic: "email": "p@tchwork.com"
- Line 5215: Implements application logic: },
- Line 5216: Implements application logic: {
- Line 5217: Implements application logic: "name": "Symfony Community",
- Line 5218: Implements application logic: "homepage": "https://symfony.com/contributors"
- Line 5219: Implements application logic: }
- Line 5220: Implements application logic: ],
- Line 5221: Implements application logic: "description": "Symfony polyfill backporting some PHP 8.5+ features to lower PHP versions",
- Line 5222: Implements application logic: "homepage": "https://symfony.com",
- Line 5223: Implements application logic: "keywords": [
- Line 5224: Implements application logic: "compatibility",
- Line 5225: Implements application logic: "polyfill",
- Line 5226: Implements application logic: "portable",
- Line 5227: Implements application logic: "shim"
- Line 5228: Implements application logic: ],
- Line 5229: Implements application logic: "support": {
- Line 5230: Implements application logic: "source": "https://github.com/symfony/polyfill-php85/tree/v1.37.0"
- Line 5231: Implements application logic: },
- Line 5232: Implements application logic: "funding": [
- Line 5233: Implements application logic: {
- Line 5234: Implements application logic: "url": "https://symfony.com/sponsor",
- Line 5235: Implements application logic: "type": "custom"
- Line 5236: Implements application logic: },
- Line 5237: Implements application logic: {
- Line 5238: Implements application logic: "url": "https://github.com/fabpot",
- Line 5239: Implements application logic: "type": "github"
- Line 5240: Implements application logic: },
- Line 5241: Implements application logic: {
- Line 5242: Implements application logic: "url": "https://github.com/nicolas-grekas",
- Line 5243: Implements application logic: "type": "github"
- Line 5244: Implements application logic: },
- Line 5245: Implements application logic: {
- Line 5246: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
- Line 5247: Implements application logic: "type": "tidelift"
- Line 5248: Implements application logic: }
- Line 5249: Implements application logic: ],
- Line 5250: Implements application logic: "time": "2026-04-26T13:10:57+00:00"
- Line 5251: Implements application logic: },
- Line 5252: Implements application logic: {
- Line 5253: Implements application logic: "name": "symfony/polyfill-uuid",
- Line 5254: Implements application logic: "version": "v1.37.0",
- Line 5255: Implements application logic: "source": {
- Line 5256: Implements application logic: "type": "git",
- Line 5257: Implements application logic: "url": "https://github.com/symfony/polyfill-uuid.git",
- Line 5258: Implements application logic: "reference": "26dfec253c4cf3e51b541b52ddf7e42cb0908e94"
- Line 5259: Implements application logic: },
- Line 5260: Implements application logic: "dist": {
- Line 5261: Implements application logic: "type": "zip",
- Line 5262: Implements application logic: "url": "https://api.github.com/repos/symfony/polyfill-uuid/zipball/26dfec253c4cf3e51b541b52ddf7e42cb0908e94",
- Line 5263: Implements application logic: "reference": "26dfec253c4cf3e51b541b52ddf7e42cb0908e94",
- Line 5264: Implements application logic: "shasum": ""
- Line 5265: Implements application logic: },
- Line 5266: Implements application logic: "require": {
- Line 5267: Implements application logic: "php": ">=7.2"
- Line 5268: Implements application logic: },
- Line 5269: Implements application logic: "provide": {
- Line 5270: Implements application logic: "ext-uuid": "*"
- Line 5271: Implements application logic: },
- Line 5272: Implements application logic: "suggest": {
- Line 5273: Implements application logic: "ext-uuid": "For best performance"
- Line 5274: Implements application logic: },
- Line 5275: Implements application logic: "type": "library",
- Line 5276: Implements application logic: "extra": {
- Line 5277: Implements application logic: "thanks": {
- Line 5278: Implements application logic: "url": "https://github.com/symfony/polyfill",
- Line 5279: Implements application logic: "name": "symfony/polyfill"
- Line 5280: Implements application logic: }
- Line 5281: Implements application logic: },
- Line 5282: Implements application logic: "autoload": {
- Line 5283: Implements application logic: "files": [
- Line 5284: Implements application logic: "bootstrap.php"
- Line 5285: Implements application logic: ],
- Line 5286: Implements application logic: "psr-4": {
- Line 5287: Implements application logic: "Symfony\\Polyfill\\Uuid\\": ""
- Line 5288: Implements application logic: }
- Line 5289: Implements application logic: },
- Line 5290: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 5291: Implements application logic: "license": [
- Line 5292: Implements application logic: "MIT"
- Line 5293: Implements application logic: ],
- Line 5294: Implements application logic: "authors": [
- Line 5295: Implements application logic: {
- Line 5296: Implements application logic: "name": "Grégoire Pineau",
- Line 5297: Implements application logic: "email": "lyrixx@lyrixx.info"
- Line 5298: Implements application logic: },
- Line 5299: Implements application logic: {
- Line 5300: Implements application logic: "name": "Symfony Community",
- Line 5301: Implements application logic: "homepage": "https://symfony.com/contributors"
- Line 5302: Implements application logic: }
- Line 5303: Implements application logic: ],
- Line 5304: Implements application logic: "description": "Symfony polyfill for uuid functions",
- Line 5305: Implements application logic: "homepage": "https://symfony.com",
- Line 5306: Implements application logic: "keywords": [
- Line 5307: Implements application logic: "compatibility",
- Line 5308: Implements application logic: "polyfill",
- Line 5309: Implements application logic: "portable",
- Line 5310: Implements application logic: "uuid"
- Line 5311: Implements application logic: ],
- Line 5312: Implements application logic: "support": {
- Line 5313: Implements application logic: "source": "https://github.com/symfony/polyfill-uuid/tree/v1.37.0"
- Line 5314: Implements application logic: },
- Line 5315: Implements application logic: "funding": [
- Line 5316: Implements application logic: {
- Line 5317: Implements application logic: "url": "https://symfony.com/sponsor",
- Line 5318: Implements application logic: "type": "custom"
- Line 5319: Implements application logic: },
- Line 5320: Implements application logic: {
- Line 5321: Implements application logic: "url": "https://github.com/fabpot",
- Line 5322: Implements application logic: "type": "github"
- Line 5323: Implements application logic: },
- Line 5324: Implements application logic: {
- Line 5325: Implements application logic: "url": "https://github.com/nicolas-grekas",
- Line 5326: Implements application logic: "type": "github"
- Line 5327: Implements application logic: },
- Line 5328: Implements application logic: {
- Line 5329: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
- Line 5330: Implements application logic: "type": "tidelift"
- Line 5331: Implements application logic: }
- Line 5332: Implements application logic: ],
- Line 5333: Implements application logic: "time": "2026-04-10T16:19:22+00:00"
- Line 5334: Implements application logic: },
- Line 5335: Implements application logic: {
- Line 5336: Implements application logic: "name": "symfony/process",
- Line 5337: Implements application logic: "version": "v7.4.8",
- Line 5338: Implements application logic: "source": {
- Line 5339: Implements application logic: "type": "git",
- Line 5340: Implements application logic: "url": "https://github.com/symfony/process.git",
- Line 5341: Implements application logic: "reference": "60f19cd3badc8de688421e21e4305eba50f8089a"
- Line 5342: Implements application logic: },
- Line 5343: Implements application logic: "dist": {
- Line 5344: Implements application logic: "type": "zip",
- Line 5345: Implements application logic: "url": "https://api.github.com/repos/symfony/process/zipball/60f19cd3badc8de688421e21e4305eba50f8089a",
- Line 5346: Implements application logic: "reference": "60f19cd3badc8de688421e21e4305eba50f8089a",
- Line 5347: Implements application logic: "shasum": ""
- Line 5348: Implements application logic: },
- Line 5349: Implements application logic: "require": {
- Line 5350: Implements application logic: "php": ">=8.2"
- Line 5351: Implements application logic: },
- Line 5352: Implements application logic: "type": "library",
- Line 5353: Implements application logic: "autoload": {
- Line 5354: Implements application logic: "psr-4": {
- Line 5355: Implements application logic: "Symfony\\Component\\Process\\": ""
- Line 5356: Implements application logic: },
- Line 5357: Implements application logic: "exclude-from-classmap": [
- Line 5358: Implements application logic: "/Tests/"
- Line 5359: Implements application logic: ]
- Line 5360: Implements application logic: },
- Line 5361: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 5362: Implements application logic: "license": [
- Line 5363: Implements application logic: "MIT"
- Line 5364: Implements application logic: ],
- Line 5365: Implements application logic: "authors": [
- Line 5366: Implements application logic: {
- Line 5367: Implements application logic: "name": "Fabien Potencier",
- Line 5368: Implements application logic: "email": "fabien@symfony.com"
- Line 5369: Implements application logic: },
- Line 5370: Implements application logic: {
- Line 5371: Implements application logic: "name": "Symfony Community",
- Line 5372: Implements application logic: "homepage": "https://symfony.com/contributors"
- Line 5373: Implements application logic: }
- Line 5374: Implements application logic: ],
- Line 5375: Implements application logic: "description": "Executes commands in sub-processes",
- Line 5376: Implements application logic: "homepage": "https://symfony.com",
- Line 5377: Implements application logic: "support": {
- Line 5378: Implements application logic: "source": "https://github.com/symfony/process/tree/v7.4.8"
- Line 5379: Implements application logic: },
- Line 5380: Implements application logic: "funding": [
- Line 5381: Implements application logic: {
- Line 5382: Implements application logic: "url": "https://symfony.com/sponsor",
- Line 5383: Implements application logic: "type": "custom"
- Line 5384: Implements application logic: },
- Line 5385: Implements application logic: {
- Line 5386: Implements application logic: "url": "https://github.com/fabpot",
- Line 5387: Implements application logic: "type": "github"
- Line 5388: Implements application logic: },
- Line 5389: Implements application logic: {
- Line 5390: Implements application logic: "url": "https://github.com/nicolas-grekas",
- Line 5391: Implements application logic: "type": "github"
- Line 5392: Implements application logic: },
- Line 5393: Implements application logic: {
- Line 5394: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
- Line 5395: Implements application logic: "type": "tidelift"
- Line 5396: Implements application logic: }
- Line 5397: Implements application logic: ],
- Line 5398: Implements application logic: "time": "2026-03-24T13:12:05+00:00"
- Line 5399: Implements application logic: },
- Line 5400: Implements application logic: {
- Line 5401: Implements application logic: "name": "symfony/routing",
- Line 5402: Implements application logic: "version": "v7.4.8",
- Line 5403: Implements application logic: "source": {
- Line 5404: Implements application logic: "type": "git",
- Line 5405: Implements application logic: "url": "https://github.com/symfony/routing.git",
- Line 5406: Implements application logic: "reference": "9608de9873ec86e754fb6c0a0fa7e5f1a960eb6b"
- Line 5407: Implements application logic: },
- Line 5408: Implements application logic: "dist": {
- Line 5409: Implements application logic: "type": "zip",
- Line 5410: Implements application logic: "url": "https://api.github.com/repos/symfony/routing/zipball/9608de9873ec86e754fb6c0a0fa7e5f1a960eb6b",
- Line 5411: Implements application logic: "reference": "9608de9873ec86e754fb6c0a0fa7e5f1a960eb6b",
- Line 5412: Implements application logic: "shasum": ""
- Line 5413: Implements application logic: },
- Line 5414: Implements application logic: "require": {
- Line 5415: Implements application logic: "php": ">=8.2",
- Line 5416: Implements application logic: "symfony/deprecation-contracts": "^2.5|^3"
- Line 5417: Implements application logic: },
- Line 5418: Implements application logic: "conflict": {
- Line 5419: Implements application logic: "symfony/config": "<6.4",
- Line 5420: Implements application logic: "symfony/dependency-injection": "<6.4",
- Line 5421: Implements application logic: "symfony/yaml": "<6.4"
- Line 5422: Implements application logic: },
- Line 5423: Implements application logic: "require-dev": {
- Line 5424: Implements application logic: "psr/log": "^1|^2|^3",
- Line 5425: Implements application logic: "symfony/config": "^6.4|^7.0|^8.0",
- Line 5426: Implements application logic: "symfony/dependency-injection": "^6.4|^7.0|^8.0",
- Line 5427: Implements application logic: "symfony/expression-language": "^6.4|^7.0|^8.0",
- Line 5428: Implements application logic: "symfony/http-foundation": "^6.4|^7.0|^8.0",
- Line 5429: Implements application logic: "symfony/yaml": "^6.4|^7.0|^8.0"
- Line 5430: Implements application logic: },
- Line 5431: Implements application logic: "type": "library",
- Line 5432: Implements application logic: "autoload": {
- Line 5433: Implements application logic: "psr-4": {
- Line 5434: Implements application logic: "Symfony\\Component\\Routing\\": ""
- Line 5435: Implements application logic: },
- Line 5436: Implements application logic: "exclude-from-classmap": [
- Line 5437: Implements application logic: "/Tests/"
- Line 5438: Implements application logic: ]
- Line 5439: Implements application logic: },
- Line 5440: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 5441: Implements application logic: "license": [
- Line 5442: Implements application logic: "MIT"
- Line 5443: Implements application logic: ],
- Line 5444: Implements application logic: "authors": [
- Line 5445: Implements application logic: {
- Line 5446: Implements application logic: "name": "Fabien Potencier",
- Line 5447: Implements application logic: "email": "fabien@symfony.com"
- Line 5448: Implements application logic: },
- Line 5449: Implements application logic: {
- Line 5450: Implements application logic: "name": "Symfony Community",
- Line 5451: Implements application logic: "homepage": "https://symfony.com/contributors"
- Line 5452: Implements application logic: }
- Line 5453: Implements application logic: ],
- Line 5454: Implements application logic: "description": "Maps an HTTP request to a set of configuration variables",
- Line 5455: Implements application logic: "homepage": "https://symfony.com",
- Line 5456: Implements application logic: "keywords": [
- Line 5457: Implements application logic: "router",
- Line 5458: Implements application logic: "routing",
- Line 5459: Implements application logic: "uri",
- Line 5460: Implements application logic: "url"
- Line 5461: Implements application logic: ],
- Line 5462: Implements application logic: "support": {
- Line 5463: Implements application logic: "source": "https://github.com/symfony/routing/tree/v7.4.8"
- Line 5464: Implements application logic: },
- Line 5465: Implements application logic: "funding": [
- Line 5466: Implements application logic: {
- Line 5467: Implements application logic: "url": "https://symfony.com/sponsor",
- Line 5468: Implements application logic: "type": "custom"
- Line 5469: Implements application logic: },
- Line 5470: Implements application logic: {
- Line 5471: Implements application logic: "url": "https://github.com/fabpot",
- Line 5472: Implements application logic: "type": "github"
- Line 5473: Implements application logic: },
- Line 5474: Implements application logic: {
- Line 5475: Implements application logic: "url": "https://github.com/nicolas-grekas",
- Line 5476: Implements application logic: "type": "github"
- Line 5477: Implements application logic: },
- Line 5478: Implements application logic: {
- Line 5479: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
- Line 5480: Implements application logic: "type": "tidelift"
- Line 5481: Implements application logic: }
- Line 5482: Implements application logic: ],
- Line 5483: Implements application logic: "time": "2026-03-24T13:12:05+00:00"
- Line 5484: Implements application logic: },
- Line 5485: Implements application logic: {
- Line 5486: Implements application logic: "name": "symfony/service-contracts",
- Line 5487: Implements application logic: "version": "v3.6.1",
- Line 5488: Implements application logic: "source": {
- Line 5489: Implements application logic: "type": "git",
- Line 5490: Implements application logic: "url": "https://github.com/symfony/service-contracts.git",
- Line 5491: Implements application logic: "reference": "45112560a3ba2d715666a509a0bc9521d10b6c43"
- Line 5492: Implements application logic: },
- Line 5493: Implements application logic: "dist": {
- Line 5494: Implements application logic: "type": "zip",
- Line 5495: Implements application logic: "url": "https://api.github.com/repos/symfony/service-contracts/zipball/45112560a3ba2d715666a509a0bc9521d10b6c43",
- Line 5496: Implements application logic: "reference": "45112560a3ba2d715666a509a0bc9521d10b6c43",
- Line 5497: Implements application logic: "shasum": ""
- Line 5498: Implements application logic: },
- Line 5499: Implements application logic: "require": {
- Line 5500: Implements application logic: "php": ">=8.1",
- Line 5501: Implements application logic: "psr/container": "^1.1|^2.0",
- Line 5502: Implements application logic: "symfony/deprecation-contracts": "^2.5|^3"
- Line 5503: Implements application logic: },
- Line 5504: Implements application logic: "conflict": {
- Line 5505: Implements application logic: "ext-psr": "<1.1|>=2"
- Line 5506: Implements application logic: },
- Line 5507: Implements application logic: "type": "library",
- Line 5508: Implements application logic: "extra": {
- Line 5509: Implements application logic: "thanks": {
- Line 5510: Implements application logic: "url": "https://github.com/symfony/contracts",
- Line 5511: Implements application logic: "name": "symfony/contracts"
- Line 5512: Implements application logic: },
- Line 5513: Implements application logic: "branch-alias": {
- Line 5514: Implements application logic: "dev-main": "3.6-dev"
- Line 5515: Implements application logic: }
- Line 5516: Implements application logic: },
- Line 5517: Implements application logic: "autoload": {
- Line 5518: Implements application logic: "psr-4": {
- Line 5519: Implements application logic: "Symfony\\Contracts\\Service\\": ""
- Line 5520: Implements application logic: },
- Line 5521: Implements application logic: "exclude-from-classmap": [
- Line 5522: Implements application logic: "/Test/"
- Line 5523: Implements application logic: ]
- Line 5524: Implements application logic: },
- Line 5525: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 5526: Implements application logic: "license": [
- Line 5527: Implements application logic: "MIT"
- Line 5528: Implements application logic: ],
- Line 5529: Implements application logic: "authors": [
- Line 5530: Implements application logic: {
- Line 5531: Implements application logic: "name": "Nicolas Grekas",
- Line 5532: Implements application logic: "email": "p@tchwork.com"
- Line 5533: Implements application logic: },
- Line 5534: Implements application logic: {
- Line 5535: Implements application logic: "name": "Symfony Community",
- Line 5536: Implements application logic: "homepage": "https://symfony.com/contributors"
- Line 5537: Implements application logic: }
- Line 5538: Implements application logic: ],
- Line 5539: Implements application logic: "description": "Generic abstractions related to writing services",
- Line 5540: Implements application logic: "homepage": "https://symfony.com",
- Line 5541: Implements application logic: "keywords": [
- Line 5542: Implements application logic: "abstractions",
- Line 5543: Implements application logic: "contracts",
- Line 5544: Implements application logic: "decoupling",
- Line 5545: Implements application logic: "interfaces",
- Line 5546: Implements application logic: "interoperability",
- Line 5547: Implements application logic: "standards"
- Line 5548: Implements application logic: ],
- Line 5549: Implements application logic: "support": {
- Line 5550: Implements application logic: "source": "https://github.com/symfony/service-contracts/tree/v3.6.1"
- Line 5551: Implements application logic: },
- Line 5552: Implements application logic: "funding": [
- Line 5553: Implements application logic: {
- Line 5554: Implements application logic: "url": "https://symfony.com/sponsor",
- Line 5555: Implements application logic: "type": "custom"
- Line 5556: Implements application logic: },
- Line 5557: Implements application logic: {
- Line 5558: Implements application logic: "url": "https://github.com/fabpot",
- Line 5559: Implements application logic: "type": "github"
- Line 5560: Implements application logic: },
- Line 5561: Implements application logic: {
- Line 5562: Implements application logic: "url": "https://github.com/nicolas-grekas",
- Line 5563: Implements application logic: "type": "github"
- Line 5564: Implements application logic: },
- Line 5565: Implements application logic: {
- Line 5566: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
- Line 5567: Implements application logic: "type": "tidelift"
- Line 5568: Implements application logic: }
- Line 5569: Implements application logic: ],
- Line 5570: Implements application logic: "time": "2025-07-15T11:30:57+00:00"
- Line 5571: Implements application logic: },
- Line 5572: Implements application logic: {
- Line 5573: Implements application logic: "name": "symfony/string",
- Line 5574: Implements application logic: "version": "v7.4.8",
- Line 5575: Implements application logic: "source": {
- Line 5576: Implements application logic: "type": "git",
- Line 5577: Implements application logic: "url": "https://github.com/symfony/string.git",
- Line 5578: Implements application logic: "reference": "114ac57257d75df748eda23dd003878080b8e688"
- Line 5579: Implements application logic: },
- Line 5580: Implements application logic: "dist": {
- Line 5581: Implements application logic: "type": "zip",
- Line 5582: Implements application logic: "url": "https://api.github.com/repos/symfony/string/zipball/114ac57257d75df748eda23dd003878080b8e688",
- Line 5583: Implements application logic: "reference": "114ac57257d75df748eda23dd003878080b8e688",
- Line 5584: Implements application logic: "shasum": ""
- Line 5585: Implements application logic: },
- Line 5586: Implements application logic: "require": {
- Line 5587: Implements application logic: "php": ">=8.2",
- Line 5588: Implements application logic: "symfony/deprecation-contracts": "^2.5|^3.0",
- Line 5589: Implements application logic: "symfony/polyfill-ctype": "~1.8",
- Line 5590: Implements application logic: "symfony/polyfill-intl-grapheme": "~1.33",
- Line 5591: Implements application logic: "symfony/polyfill-intl-normalizer": "~1.0",
- Line 5592: Implements application logic: "symfony/polyfill-mbstring": "~1.0"
- Line 5593: Implements application logic: },
- Line 5594: Implements application logic: "conflict": {
- Line 5595: Implements application logic: "symfony/translation-contracts": "<2.5"
- Line 5596: Implements application logic: },
- Line 5597: Implements application logic: "require-dev": {
- Line 5598: Implements application logic: "symfony/emoji": "^7.1|^8.0",
- Line 5599: Implements application logic: "symfony/http-client": "^6.4|^7.0|^8.0",
- Line 5600: Implements application logic: "symfony/intl": "^6.4|^7.0|^8.0",
- Line 5601: Implements application logic: "symfony/translation-contracts": "^2.5|^3.0",
- Line 5602: Implements application logic: "symfony/var-exporter": "^6.4|^7.0|^8.0"
- Line 5603: Implements application logic: },
- Line 5604: Implements application logic: "type": "library",
- Line 5605: Implements application logic: "autoload": {
- Line 5606: Implements application logic: "files": [
- Line 5607: Implements application logic: "Resources/functions.php"
- Line 5608: Implements application logic: ],
- Line 5609: Implements application logic: "psr-4": {
- Line 5610: Implements application logic: "Symfony\\Component\\String\\": ""
- Line 5611: Implements application logic: },
- Line 5612: Implements application logic: "exclude-from-classmap": [
- Line 5613: Implements application logic: "/Tests/"
- Line 5614: Implements application logic: ]
- Line 5615: Implements application logic: },
- Line 5616: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 5617: Implements application logic: "license": [
- Line 5618: Implements application logic: "MIT"
- Line 5619: Implements application logic: ],
- Line 5620: Implements application logic: "authors": [
- Line 5621: Implements application logic: {
- Line 5622: Implements application logic: "name": "Nicolas Grekas",
- Line 5623: Implements application logic: "email": "p@tchwork.com"
- Line 5624: Implements application logic: },
- Line 5625: Implements application logic: {
- Line 5626: Implements application logic: "name": "Symfony Community",
- Line 5627: Implements application logic: "homepage": "https://symfony.com/contributors"
- Line 5628: Implements application logic: }
- Line 5629: Implements application logic: ],
- Line 5630: Implements application logic: "description": "Provides an object-oriented API to strings and deals with bytes, UTF-8 code points and grapheme clusters in a unified way",
- Line 5631: Implements application logic: "homepage": "https://symfony.com",
- Line 5632: Implements application logic: "keywords": [
- Line 5633: Implements application logic: "grapheme",
- Line 5634: Implements application logic: "i18n",
- Line 5635: Implements application logic: "string",
- Line 5636: Implements application logic: "unicode",
- Line 5637: Implements application logic: "utf-8",
- Line 5638: Implements application logic: "utf8"
- Line 5639: Implements application logic: ],
- Line 5640: Implements application logic: "support": {
- Line 5641: Implements application logic: "source": "https://github.com/symfony/string/tree/v7.4.8"
- Line 5642: Implements application logic: },
- Line 5643: Implements application logic: "funding": [
- Line 5644: Implements application logic: {
- Line 5645: Implements application logic: "url": "https://symfony.com/sponsor",
- Line 5646: Implements application logic: "type": "custom"
- Line 5647: Implements application logic: },
- Line 5648: Implements application logic: {
- Line 5649: Implements application logic: "url": "https://github.com/fabpot",
- Line 5650: Implements application logic: "type": "github"
- Line 5651: Implements application logic: },
- Line 5652: Implements application logic: {
- Line 5653: Implements application logic: "url": "https://github.com/nicolas-grekas",
- Line 5654: Implements application logic: "type": "github"
- Line 5655: Implements application logic: },
- Line 5656: Implements application logic: {
- Line 5657: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
- Line 5658: Implements application logic: "type": "tidelift"
- Line 5659: Implements application logic: }
- Line 5660: Implements application logic: ],
- Line 5661: Implements application logic: "time": "2026-03-24T13:12:05+00:00"
- Line 5662: Implements application logic: },
- Line 5663: Implements application logic: {
- Line 5664: Implements application logic: "name": "symfony/translation",
- Line 5665: Implements application logic: "version": "v7.4.8",
- Line 5666: Implements application logic: "source": {
- Line 5667: Implements application logic: "type": "git",
- Line 5668: Implements application logic: "url": "https://github.com/symfony/translation.git",
- Line 5669: Implements application logic: "reference": "33600f8489485425bfcddd0d983391038d3422e7"
- Line 5670: Implements application logic: },
- Line 5671: Implements application logic: "dist": {
- Line 5672: Implements application logic: "type": "zip",
- Line 5673: Implements application logic: "url": "https://api.github.com/repos/symfony/translation/zipball/33600f8489485425bfcddd0d983391038d3422e7",
- Line 5674: Implements application logic: "reference": "33600f8489485425bfcddd0d983391038d3422e7",
- Line 5675: Implements application logic: "shasum": ""
- Line 5676: Implements application logic: },
- Line 5677: Implements application logic: "require": {
- Line 5678: Implements application logic: "php": ">=8.2",
- Line 5679: Implements application logic: "symfony/deprecation-contracts": "^2.5|^3",
- Line 5680: Implements application logic: "symfony/polyfill-mbstring": "~1.0",
- Line 5681: Implements application logic: "symfony/translation-contracts": "^2.5.3|^3.3"
- Line 5682: Implements application logic: },
- Line 5683: Implements application logic: "conflict": {
- Line 5684: Implements application logic: "nikic/php-parser": "<5.0",
- Line 5685: Implements application logic: "symfony/config": "<6.4",
- Line 5686: Implements application logic: "symfony/console": "<6.4",
- Line 5687: Implements application logic: "symfony/dependency-injection": "<6.4",
- Line 5688: Implements application logic: "symfony/http-client-contracts": "<2.5",
- Line 5689: Implements application logic: "symfony/http-kernel": "<6.4",
- Line 5690: Implements application logic: "symfony/service-contracts": "<2.5",
- Line 5691: Implements application logic: "symfony/twig-bundle": "<6.4",
- Line 5692: Implements application logic: "symfony/yaml": "<6.4"
- Line 5693: Implements application logic: },
- Line 5694: Implements application logic: "provide": {
- Line 5695: Implements application logic: "symfony/translation-implementation": "2.3|3.0"
- Line 5696: Implements application logic: },
- Line 5697: Implements application logic: "require-dev": {
- Line 5698: Implements application logic: "nikic/php-parser": "^5.0",
- Line 5699: Implements application logic: "psr/log": "^1|^2|^3",
- Line 5700: Implements application logic: "symfony/config": "^6.4|^7.0|^8.0",
- Line 5701: Implements application logic: "symfony/console": "^6.4|^7.0|^8.0",
- Line 5702: Implements application logic: "symfony/dependency-injection": "^6.4|^7.0|^8.0",
- Line 5703: Implements application logic: "symfony/finder": "^6.4|^7.0|^8.0",
- Line 5704: Implements application logic: "symfony/http-client-contracts": "^2.5|^3.0",
- Line 5705: Implements application logic: "symfony/http-kernel": "^6.4|^7.0|^8.0",
- Line 5706: Implements application logic: "symfony/intl": "^6.4|^7.0|^8.0",
- Line 5707: Implements application logic: "symfony/polyfill-intl-icu": "^1.21",
- Line 5708: Implements application logic: "symfony/routing": "^6.4|^7.0|^8.0",
- Line 5709: Implements application logic: "symfony/service-contracts": "^2.5|^3",
- Line 5710: Implements application logic: "symfony/yaml": "^6.4|^7.0|^8.0"
- Line 5711: Implements application logic: },
- Line 5712: Implements application logic: "type": "library",
- Line 5713: Implements application logic: "autoload": {
- Line 5714: Implements application logic: "files": [
- Line 5715: Implements application logic: "Resources/functions.php"
- Line 5716: Implements application logic: ],
- Line 5717: Implements application logic: "psr-4": {
- Line 5718: Implements application logic: "Symfony\\Component\\Translation\\": ""
- Line 5719: Implements application logic: },
- Line 5720: Implements application logic: "exclude-from-classmap": [
- Line 5721: Implements application logic: "/Tests/"
- Line 5722: Implements application logic: ]
- Line 5723: Implements application logic: },
- Line 5724: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 5725: Implements application logic: "license": [
- Line 5726: Implements application logic: "MIT"
- Line 5727: Implements application logic: ],
- Line 5728: Implements application logic: "authors": [
- Line 5729: Implements application logic: {
- Line 5730: Implements application logic: "name": "Fabien Potencier",
- Line 5731: Implements application logic: "email": "fabien@symfony.com"
- Line 5732: Implements application logic: },
- Line 5733: Implements application logic: {
- Line 5734: Implements application logic: "name": "Symfony Community",
- Line 5735: Implements application logic: "homepage": "https://symfony.com/contributors"
- Line 5736: Implements application logic: }
- Line 5737: Implements application logic: ],
- Line 5738: Implements application logic: "description": "Provides tools to internationalize your application",
- Line 5739: Implements application logic: "homepage": "https://symfony.com",
- Line 5740: Implements application logic: "support": {
- Line 5741: Implements application logic: "source": "https://github.com/symfony/translation/tree/v7.4.8"
- Line 5742: Implements application logic: },
- Line 5743: Implements application logic: "funding": [
- Line 5744: Implements application logic: {
- Line 5745: Implements application logic: "url": "https://symfony.com/sponsor",
- Line 5746: Implements application logic: "type": "custom"
- Line 5747: Implements application logic: },
- Line 5748: Implements application logic: {
- Line 5749: Implements application logic: "url": "https://github.com/fabpot",
- Line 5750: Implements application logic: "type": "github"
- Line 5751: Implements application logic: },
- Line 5752: Implements application logic: {
- Line 5753: Implements application logic: "url": "https://github.com/nicolas-grekas",
- Line 5754: Implements application logic: "type": "github"
- Line 5755: Implements application logic: },
- Line 5756: Implements application logic: {
- Line 5757: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
- Line 5758: Implements application logic: "type": "tidelift"
- Line 5759: Implements application logic: }
- Line 5760: Implements application logic: ],
- Line 5761: Implements application logic: "time": "2026-03-24T13:12:05+00:00"
- Line 5762: Implements application logic: },
- Line 5763: Implements application logic: {
- Line 5764: Implements application logic: "name": "symfony/translation-contracts",
- Line 5765: Implements application logic: "version": "v3.6.1",
- Line 5766: Implements application logic: "source": {
- Line 5767: Implements application logic: "type": "git",
- Line 5768: Implements application logic: "url": "https://github.com/symfony/translation-contracts.git",
- Line 5769: Implements application logic: "reference": "65a8bc82080447fae78373aa10f8d13b38338977"
- Line 5770: Implements application logic: },
- Line 5771: Implements application logic: "dist": {
- Line 5772: Implements application logic: "type": "zip",
- Line 5773: Implements application logic: "url": "https://api.github.com/repos/symfony/translation-contracts/zipball/65a8bc82080447fae78373aa10f8d13b38338977",
- Line 5774: Implements application logic: "reference": "65a8bc82080447fae78373aa10f8d13b38338977",
- Line 5775: Implements application logic: "shasum": ""
- Line 5776: Implements application logic: },
- Line 5777: Implements application logic: "require": {
- Line 5778: Implements application logic: "php": ">=8.1"
- Line 5779: Implements application logic: },
- Line 5780: Implements application logic: "type": "library",
- Line 5781: Implements application logic: "extra": {
- Line 5782: Implements application logic: "thanks": {
- Line 5783: Implements application logic: "url": "https://github.com/symfony/contracts",
- Line 5784: Implements application logic: "name": "symfony/contracts"
- Line 5785: Implements application logic: },
- Line 5786: Implements application logic: "branch-alias": {
- Line 5787: Implements application logic: "dev-main": "3.6-dev"
- Line 5788: Implements application logic: }
- Line 5789: Implements application logic: },
- Line 5790: Implements application logic: "autoload": {
- Line 5791: Implements application logic: "psr-4": {
- Line 5792: Implements application logic: "Symfony\\Contracts\\Translation\\": ""
- Line 5793: Implements application logic: },
- Line 5794: Implements application logic: "exclude-from-classmap": [
- Line 5795: Implements application logic: "/Test/"
- Line 5796: Implements application logic: ]
- Line 5797: Implements application logic: },
- Line 5798: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 5799: Implements application logic: "license": [
- Line 5800: Implements application logic: "MIT"
- Line 5801: Implements application logic: ],
- Line 5802: Implements application logic: "authors": [
- Line 5803: Implements application logic: {
- Line 5804: Implements application logic: "name": "Nicolas Grekas",
- Line 5805: Implements application logic: "email": "p@tchwork.com"
- Line 5806: Implements application logic: },
- Line 5807: Implements application logic: {
- Line 5808: Implements application logic: "name": "Symfony Community",
- Line 5809: Implements application logic: "homepage": "https://symfony.com/contributors"
- Line 5810: Implements application logic: }
- Line 5811: Implements application logic: ],
- Line 5812: Implements application logic: "description": "Generic abstractions related to translation",
- Line 5813: Implements application logic: "homepage": "https://symfony.com",
- Line 5814: Implements application logic: "keywords": [
- Line 5815: Implements application logic: "abstractions",
- Line 5816: Implements application logic: "contracts",
- Line 5817: Implements application logic: "decoupling",
- Line 5818: Implements application logic: "interfaces",
- Line 5819: Implements application logic: "interoperability",
- Line 5820: Implements application logic: "standards"
- Line 5821: Implements application logic: ],
- Line 5822: Implements application logic: "support": {
- Line 5823: Implements application logic: "source": "https://github.com/symfony/translation-contracts/tree/v3.6.1"
- Line 5824: Implements application logic: },
- Line 5825: Implements application logic: "funding": [
- Line 5826: Implements application logic: {
- Line 5827: Implements application logic: "url": "https://symfony.com/sponsor",
- Line 5828: Implements application logic: "type": "custom"
- Line 5829: Implements application logic: },
- Line 5830: Implements application logic: {
- Line 5831: Implements application logic: "url": "https://github.com/fabpot",
- Line 5832: Implements application logic: "type": "github"
- Line 5833: Implements application logic: },
- Line 5834: Implements application logic: {
- Line 5835: Implements application logic: "url": "https://github.com/nicolas-grekas",
- Line 5836: Implements application logic: "type": "github"
- Line 5837: Implements application logic: },
- Line 5838: Implements application logic: {
- Line 5839: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
- Line 5840: Implements application logic: "type": "tidelift"
- Line 5841: Implements application logic: }
- Line 5842: Implements application logic: ],
- Line 5843: Implements application logic: "time": "2025-07-15T13:41:35+00:00"
- Line 5844: Implements application logic: },
- Line 5845: Implements application logic: {
- Line 5846: Implements application logic: "name": "symfony/uid",
- Line 5847: Implements application logic: "version": "v7.4.8",
- Line 5848: Implements application logic: "source": {
- Line 5849: Implements application logic: "type": "git",
- Line 5850: Implements application logic: "url": "https://github.com/symfony/uid.git",
- Line 5851: Implements application logic: "reference": "6883ebdf7bf6a12b37519dbc0df62b0222401b56"
- Line 5852: Implements application logic: },
- Line 5853: Implements application logic: "dist": {
- Line 5854: Implements application logic: "type": "zip",
- Line 5855: Implements application logic: "url": "https://api.github.com/repos/symfony/uid/zipball/6883ebdf7bf6a12b37519dbc0df62b0222401b56",
- Line 5856: Implements application logic: "reference": "6883ebdf7bf6a12b37519dbc0df62b0222401b56",
- Line 5857: Implements application logic: "shasum": ""
- Line 5858: Implements application logic: },
- Line 5859: Implements application logic: "require": {
- Line 5860: Implements application logic: "php": ">=8.2",
- Line 5861: Implements application logic: "symfony/polyfill-uuid": "^1.15"
- Line 5862: Implements application logic: },
- Line 5863: Implements application logic: "require-dev": {
- Line 5864: Implements application logic: "symfony/console": "^6.4|^7.0|^8.0"
- Line 5865: Implements application logic: },
- Line 5866: Implements application logic: "type": "library",
- Line 5867: Implements application logic: "autoload": {
- Line 5868: Implements application logic: "psr-4": {
- Line 5869: Implements application logic: "Symfony\\Component\\Uid\\": ""
- Line 5870: Implements application logic: },
- Line 5871: Implements application logic: "exclude-from-classmap": [
- Line 5872: Implements application logic: "/Tests/"
- Line 5873: Implements application logic: ]
- Line 5874: Implements application logic: },
- Line 5875: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 5876: Implements application logic: "license": [
- Line 5877: Implements application logic: "MIT"
- Line 5878: Implements application logic: ],
- Line 5879: Implements application logic: "authors": [
- Line 5880: Implements application logic: {
- Line 5881: Implements application logic: "name": "Grégoire Pineau",
- Line 5882: Implements application logic: "email": "lyrixx@lyrixx.info"
- Line 5883: Implements application logic: },
- Line 5884: Implements application logic: {
- Line 5885: Implements application logic: "name": "Nicolas Grekas",
- Line 5886: Implements application logic: "email": "p@tchwork.com"
- Line 5887: Implements application logic: },
- Line 5888: Implements application logic: {
- Line 5889: Implements application logic: "name": "Symfony Community",
- Line 5890: Implements application logic: "homepage": "https://symfony.com/contributors"
- Line 5891: Implements application logic: }
- Line 5892: Implements application logic: ],
- Line 5893: Implements application logic: "description": "Provides an object-oriented API to generate and represent UIDs",
- Line 5894: Implements application logic: "homepage": "https://symfony.com",
- Line 5895: Implements application logic: "keywords": [
- Line 5896: Implements application logic: "UID",
- Line 5897: Implements application logic: "ulid",
- Line 5898: Implements application logic: "uuid"
- Line 5899: Implements application logic: ],
- Line 5900: Implements application logic: "support": {
- Line 5901: Implements application logic: "source": "https://github.com/symfony/uid/tree/v7.4.8"
- Line 5902: Implements application logic: },
- Line 5903: Implements application logic: "funding": [
- Line 5904: Implements application logic: {
- Line 5905: Implements application logic: "url": "https://symfony.com/sponsor",
- Line 5906: Implements application logic: "type": "custom"
- Line 5907: Implements application logic: },
- Line 5908: Implements application logic: {
- Line 5909: Implements application logic: "url": "https://github.com/fabpot",
- Line 5910: Implements application logic: "type": "github"
- Line 5911: Implements application logic: },
- Line 5912: Implements application logic: {
- Line 5913: Implements application logic: "url": "https://github.com/nicolas-grekas",
- Line 5914: Implements application logic: "type": "github"
- Line 5915: Implements application logic: },
- Line 5916: Implements application logic: {
- Line 5917: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
- Line 5918: Implements application logic: "type": "tidelift"
- Line 5919: Implements application logic: }
- Line 5920: Implements application logic: ],
- Line 5921: Implements application logic: "time": "2026-03-24T13:12:05+00:00"
- Line 5922: Implements application logic: },
- Line 5923: Implements application logic: {
- Line 5924: Implements application logic: "name": "symfony/var-dumper",
- Line 5925: Implements application logic: "version": "v7.4.8",
- Line 5926: Implements application logic: "source": {
- Line 5927: Implements application logic: "type": "git",
- Line 5928: Implements application logic: "url": "https://github.com/symfony/var-dumper.git",
- Line 5929: Implements application logic: "reference": "9510c3966f749a1d1ff0059e1eabef6cc621e7fd"
- Line 5930: Implements application logic: },
- Line 5931: Implements application logic: "dist": {
- Line 5932: Implements application logic: "type": "zip",
- Line 5933: Implements application logic: "url": "https://api.github.com/repos/symfony/var-dumper/zipball/9510c3966f749a1d1ff0059e1eabef6cc621e7fd",
- Line 5934: Implements application logic: "reference": "9510c3966f749a1d1ff0059e1eabef6cc621e7fd",
- Line 5935: Implements application logic: "shasum": ""
- Line 5936: Implements application logic: },
- Line 5937: Implements application logic: "require": {
- Line 5938: Implements application logic: "php": ">=8.2",
- Line 5939: Implements application logic: "symfony/deprecation-contracts": "^2.5|^3",
- Line 5940: Implements application logic: "symfony/polyfill-mbstring": "~1.0"
- Line 5941: Implements application logic: },
- Line 5942: Implements application logic: "conflict": {
- Line 5943: Implements application logic: "symfony/console": "<6.4"
- Line 5944: Implements application logic: },
- Line 5945: Implements application logic: "require-dev": {
- Line 5946: Implements application logic: "symfony/console": "^6.4|^7.0|^8.0",
- Line 5947: Implements application logic: "symfony/http-kernel": "^6.4|^7.0|^8.0",
- Line 5948: Implements application logic: "symfony/process": "^6.4|^7.0|^8.0",
- Line 5949: Implements application logic: "symfony/uid": "^6.4|^7.0|^8.0",
- Line 5950: Implements application logic: "twig/twig": "^3.12"
- Line 5951: Implements application logic: },
- Line 5952: Implements application logic: "bin": [
- Line 5953: Implements application logic: "Resources/bin/var-dump-server"
- Line 5954: Implements application logic: ],
- Line 5955: Implements application logic: "type": "library",
- Line 5956: Implements application logic: "autoload": {
- Line 5957: Implements application logic: "files": [
- Line 5958: Implements application logic: "Resources/functions/dump.php"
- Line 5959: Implements application logic: ],
- Line 5960: Implements application logic: "psr-4": {
- Line 5961: Implements application logic: "Symfony\\Component\\VarDumper\\": ""
- Line 5962: Implements application logic: },
- Line 5963: Implements application logic: "exclude-from-classmap": [
- Line 5964: Implements application logic: "/Tests/"
- Line 5965: Implements application logic: ]
- Line 5966: Implements application logic: },
- Line 5967: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 5968: Implements application logic: "license": [
- Line 5969: Implements application logic: "MIT"
- Line 5970: Implements application logic: ],
- Line 5971: Implements application logic: "authors": [
- Line 5972: Implements application logic: {
- Line 5973: Implements application logic: "name": "Nicolas Grekas",
- Line 5974: Implements application logic: "email": "p@tchwork.com"
- Line 5975: Implements application logic: },
- Line 5976: Implements application logic: {
- Line 5977: Implements application logic: "name": "Symfony Community",
- Line 5978: Implements application logic: "homepage": "https://symfony.com/contributors"
- Line 5979: Implements application logic: }
- Line 5980: Implements application logic: ],
- Line 5981: Implements application logic: "description": "Provides mechanisms for walking through any arbitrary PHP variable",
- Line 5982: Implements application logic: "homepage": "https://symfony.com",
- Line 5983: Implements application logic: "keywords": [
- Line 5984: Implements application logic: "debug",
- Line 5985: Implements application logic: "dump"
- Line 5986: Implements application logic: ],
- Line 5987: Implements application logic: "support": {
- Line 5988: Implements application logic: "source": "https://github.com/symfony/var-dumper/tree/v7.4.8"
- Line 5989: Implements application logic: },
- Line 5990: Implements application logic: "funding": [
- Line 5991: Implements application logic: {
- Line 5992: Implements application logic: "url": "https://symfony.com/sponsor",
- Line 5993: Implements application logic: "type": "custom"
- Line 5994: Implements application logic: },
- Line 5995: Implements application logic: {
- Line 5996: Implements application logic: "url": "https://github.com/fabpot",
- Line 5997: Implements application logic: "type": "github"
- Line 5998: Implements application logic: },
- Line 5999: Implements application logic: {
- Line 6000: Implements application logic: "url": "https://github.com/nicolas-grekas",
- Line 6001: Implements application logic: "type": "github"
- Line 6002: Implements application logic: },
- Line 6003: Implements application logic: {
- Line 6004: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
- Line 6005: Implements application logic: "type": "tidelift"
- Line 6006: Implements application logic: }
- Line 6007: Implements application logic: ],
- Line 6008: Implements application logic: "time": "2026-03-30T13:44:50+00:00"
- Line 6009: Implements application logic: },
- Line 6010: Implements application logic: {
- Line 6011: Implements application logic: "name": "tijsverkoyen/css-to-inline-styles",
- Line 6012: Implements application logic: "version": "v2.4.0",
- Line 6013: Implements application logic: "source": {
- Line 6014: Implements application logic: "type": "git",
- Line 6015: Implements application logic: "url": "https://github.com/tijsverkoyen/CssToInlineStyles.git",
- Line 6016: Implements application logic: "reference": "f0292ccf0ec75843d65027214426b6b163b48b41"
- Line 6017: Implements application logic: },
- Line 6018: Implements application logic: "dist": {
- Line 6019: Implements application logic: "type": "zip",
- Line 6020: Implements application logic: "url": "https://api.github.com/repos/tijsverkoyen/CssToInlineStyles/zipball/f0292ccf0ec75843d65027214426b6b163b48b41",
- Line 6021: Implements application logic: "reference": "f0292ccf0ec75843d65027214426b6b163b48b41",
- Line 6022: Implements application logic: "shasum": ""
- Line 6023: Implements application logic: },
- Line 6024: Implements application logic: "require": {
- Line 6025: Implements application logic: "ext-dom": "*",
- Line 6026: Implements application logic: "ext-libxml": "*",
- Line 6027: Implements application logic: "php": "^7.4 || ^8.0",
- Line 6028: Implements application logic: "symfony/css-selector": "^5.4 || ^6.0 || ^7.0 || ^8.0"
- Line 6029: Implements application logic: },
- Line 6030: Implements application logic: "require-dev": {
- Line 6031: Implements application logic: "phpstan/phpstan": "^2.0",
- Line 6032: Implements application logic: "phpstan/phpstan-phpunit": "^2.0",
- Line 6033: Implements application logic: "phpunit/phpunit": "^8.5.21 || ^9.5.10"
- Line 6034: Implements application logic: },
- Line 6035: Implements application logic: "type": "library",
- Line 6036: Implements application logic: "extra": {
- Line 6037: Implements application logic: "branch-alias": {
- Line 6038: Implements application logic: "dev-master": "2.x-dev"
- Line 6039: Implements application logic: }
- Line 6040: Implements application logic: },
- Line 6041: Implements application logic: "autoload": {
- Line 6042: Implements application logic: "psr-4": {
- Line 6043: Implements application logic: "TijsVerkoyen\\CssToInlineStyles\\": "src"
- Line 6044: Implements application logic: }
- Line 6045: Implements application logic: },
- Line 6046: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 6047: Implements application logic: "license": [
- Line 6048: Implements application logic: "BSD-3-Clause"
- Line 6049: Implements application logic: ],
- Line 6050: Implements application logic: "authors": [
- Line 6051: Implements application logic: {
- Line 6052: Implements application logic: "name": "Tijs Verkoyen",
- Line 6053: Implements application logic: "email": "css_to_inline_styles@verkoyen.eu",
- Line 6054: Implements application logic: "role": "Developer"
- Line 6055: Implements application logic: }
- Line 6056: Implements application logic: ],
- Line 6057: Implements application logic: "description": "CssToInlineStyles is a class that enables you to convert HTML-pages/files into HTML-pages/files with inline styles. This is very useful when you're sending emails.",
- Line 6058: Implements application logic: "homepage": "https://github.com/tijsverkoyen/CssToInlineStyles",
- Line 6059: Implements application logic: "support": {
- Line 6060: Implements application logic: "issues": "https://github.com/tijsverkoyen/CssToInlineStyles/issues",
- Line 6061: Implements application logic: "source": "https://github.com/tijsverkoyen/CssToInlineStyles/tree/v2.4.0"
- Line 6062: Implements application logic: },
- Line 6063: Implements application logic: "time": "2025-12-02T11:56:42+00:00"
- Line 6064: Implements application logic: },
- Line 6065: Implements application logic: {
- Line 6066: Implements application logic: "name": "vlucas/phpdotenv",
- Line 6067: Implements application logic: "version": "v5.6.3",
- Line 6068: Implements application logic: "source": {
- Line 6069: Implements application logic: "type": "git",
- Line 6070: Implements application logic: "url": "https://github.com/vlucas/phpdotenv.git",
- Line 6071: Implements application logic: "reference": "955e7815d677a3eaa7075231212f2110983adecc"
- Line 6072: Implements application logic: },
- Line 6073: Implements application logic: "dist": {
- Line 6074: Implements application logic: "type": "zip",
- Line 6075: Implements application logic: "url": "https://api.github.com/repos/vlucas/phpdotenv/zipball/955e7815d677a3eaa7075231212f2110983adecc",
- Line 6076: Implements application logic: "reference": "955e7815d677a3eaa7075231212f2110983adecc",
- Line 6077: Implements application logic: "shasum": ""
- Line 6078: Implements application logic: },
- Line 6079: Implements application logic: "require": {
- Line 6080: Implements application logic: "ext-pcre": "*",
- Line 6081: Implements application logic: "graham-campbell/result-type": "^1.1.4",
- Line 6082: Implements application logic: "php": "^7.2.5 || ^8.0",
- Line 6083: Implements application logic: "phpoption/phpoption": "^1.9.5",
- Line 6084: Implements application logic: "symfony/polyfill-ctype": "^1.26",
- Line 6085: Implements application logic: "symfony/polyfill-mbstring": "^1.26",
- Line 6086: Implements application logic: "symfony/polyfill-php80": "^1.26"
- Line 6087: Implements application logic: },
- Line 6088: Implements application logic: "require-dev": {
- Line 6089: Implements application logic: "bamarni/composer-bin-plugin": "^1.8.2",
- Line 6090: Implements application logic: "ext-filter": "*",
- Line 6091: Implements application logic: "phpunit/phpunit": "^8.5.34 || ^9.6.13 || ^10.4.2"
- Line 6092: Implements application logic: },
- Line 6093: Implements application logic: "suggest": {
- Line 6094: Implements application logic: "ext-filter": "Required to use the boolean validator."
- Line 6095: Implements application logic: },
- Line 6096: Implements application logic: "type": "library",
- Line 6097: Implements application logic: "extra": {
- Line 6098: Implements application logic: "bamarni-bin": {
- Line 6099: Implements application logic: "bin-links": true,
- Line 6100: Implements application logic: "forward-command": false
- Line 6101: Implements application logic: },
- Line 6102: Implements application logic: "branch-alias": {
- Line 6103: Implements application logic: "dev-master": "5.6-dev"
- Line 6104: Implements application logic: }
- Line 6105: Implements application logic: },
- Line 6106: Implements application logic: "autoload": {
- Line 6107: Implements application logic: "psr-4": {
- Line 6108: Implements application logic: "Dotenv\\": "src/"
- Line 6109: Implements application logic: }
- Line 6110: Implements application logic: },
- Line 6111: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 6112: Implements application logic: "license": [
- Line 6113: Implements application logic: "BSD-3-Clause"
- Line 6114: Implements application logic: ],
- Line 6115: Implements application logic: "authors": [
- Line 6116: Implements application logic: {
- Line 6117: Implements application logic: "name": "Graham Campbell",
- Line 6118: Implements application logic: "email": "hello@gjcampbell.co.uk",
- Line 6119: Implements application logic: "homepage": "https://github.com/GrahamCampbell"
- Line 6120: Implements application logic: },
- Line 6121: Implements application logic: {
- Line 6122: Implements application logic: "name": "Vance Lucas",
- Line 6123: Implements application logic: "email": "vance@vancelucas.com",
- Line 6124: Implements application logic: "homepage": "https://github.com/vlucas"
- Line 6125: Implements application logic: }
- Line 6126: Implements application logic: ],
- Line 6127: Implements application logic: "description": "Loads environment variables from `.env` to `getenv()`, `$_ENV` and `$_SERVER` automagically.",
- Line 6128: Implements application logic: "keywords": [
- Line 6129: Implements application logic: "dotenv",
- Line 6130: Implements application logic: "env",
- Line 6131: Implements application logic: "environment"
- Line 6132: Implements application logic: ],
- Line 6133: Implements application logic: "support": {
- Line 6134: Implements application logic: "issues": "https://github.com/vlucas/phpdotenv/issues",
- Line 6135: Implements application logic: "source": "https://github.com/vlucas/phpdotenv/tree/v5.6.3"
- Line 6136: Implements application logic: },
- Line 6137: Implements application logic: "funding": [
- Line 6138: Implements application logic: {
- Line 6139: Implements application logic: "url": "https://github.com/GrahamCampbell",
- Line 6140: Implements application logic: "type": "github"
- Line 6141: Implements application logic: },
- Line 6142: Implements application logic: {
- Line 6143: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/vlucas/phpdotenv",
- Line 6144: Implements application logic: "type": "tidelift"
- Line 6145: Implements application logic: }
- Line 6146: Implements application logic: ],
- Line 6147: Implements application logic: "time": "2025-12-27T19:49:13+00:00"
- Line 6148: Implements application logic: },
- Line 6149: Implements application logic: {
- Line 6150: Implements application logic: "name": "voku/portable-ascii",
- Line 6151: Implements application logic: "version": "2.1.1",
- Line 6152: Implements application logic: "source": {
- Line 6153: Implements application logic: "type": "git",
- Line 6154: Implements application logic: "url": "https://github.com/voku/portable-ascii.git",
- Line 6155: Implements application logic: "reference": "8e1051fe39379367aecf014f41744ce7539a856f"
- Line 6156: Implements application logic: },
- Line 6157: Implements application logic: "dist": {
- Line 6158: Implements application logic: "type": "zip",
- Line 6159: Implements application logic: "url": "https://api.github.com/repos/voku/portable-ascii/zipball/8e1051fe39379367aecf014f41744ce7539a856f",
- Line 6160: Implements application logic: "reference": "8e1051fe39379367aecf014f41744ce7539a856f",
- Line 6161: Implements application logic: "shasum": ""
- Line 6162: Implements application logic: },
- Line 6163: Implements application logic: "require": {
- Line 6164: Implements application logic: "php": ">=7.1.0"
- Line 6165: Implements application logic: },
- Line 6166: Implements application logic: "require-dev": {
- Line 6167: Implements application logic: "phpunit/phpunit": "~8.5 || ~9.6 || ~10.5 || ~11.5"
- Line 6168: Implements application logic: },
- Line 6169: Implements application logic: "suggest": {
- Line 6170: Implements application logic: "ext-intl": "Use Intl for transliterator_transliterate() support"
- Line 6171: Implements application logic: },
- Line 6172: Implements application logic: "type": "library",
- Line 6173: Implements application logic: "autoload": {
- Line 6174: Implements application logic: "psr-4": {
- Line 6175: Implements application logic: "voku\\": "src/voku/"
- Line 6176: Implements application logic: }
- Line 6177: Implements application logic: },
- Line 6178: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 6179: Implements application logic: "license": [
- Line 6180: Implements application logic: "MIT"
- Line 6181: Implements application logic: ],
- Line 6182: Implements application logic: "authors": [
- Line 6183: Implements application logic: {
- Line 6184: Implements application logic: "name": "Lars Moelleken",
- Line 6185: Implements application logic: "homepage": "https://www.moelleken.org/"
- Line 6186: Implements application logic: }
- Line 6187: Implements application logic: ],
- Line 6188: Implements application logic: "description": "Portable ASCII library - performance optimized (ascii) string functions for php.",
- Line 6189: Implements application logic: "homepage": "https://github.com/voku/portable-ascii",
- Line 6190: Implements application logic: "keywords": [
- Line 6191: Implements application logic: "ascii",
- Line 6192: Implements application logic: "clean",
- Line 6193: Implements application logic: "php"
- Line 6194: Implements application logic: ],
- Line 6195: Implements application logic: "support": {
- Line 6196: Implements application logic: "issues": "https://github.com/voku/portable-ascii/issues",
- Line 6197: Implements application logic: "source": "https://github.com/voku/portable-ascii/tree/2.1.1"
- Line 6198: Implements application logic: },
- Line 6199: Implements application logic: "funding": [
- Line 6200: Implements application logic: {
- Line 6201: Implements application logic: "url": "https://www.paypal.me/moelleken",
- Line 6202: Implements application logic: "type": "custom"
- Line 6203: Implements application logic: },
- Line 6204: Implements application logic: {
- Line 6205: Implements application logic: "url": "https://github.com/voku",
- Line 6206: Implements application logic: "type": "github"
- Line 6207: Implements application logic: },
- Line 6208: Implements application logic: {
- Line 6209: Implements application logic: "url": "https://opencollective.com/portable-ascii",
- Line 6210: Implements application logic: "type": "open_collective"
- Line 6211: Implements application logic: },
- Line 6212: Implements application logic: {
- Line 6213: Implements application logic: "url": "https://www.patreon.com/voku",
- Line 6214: Implements application logic: "type": "patreon"
- Line 6215: Implements application logic: },
- Line 6216: Implements application logic: {
- Line 6217: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/voku/portable-ascii",
- Line 6218: Implements application logic: "type": "tidelift"
- Line 6219: Implements application logic: }
- Line 6220: Implements application logic: ],
- Line 6221: Implements application logic: "time": "2026-04-26T05:33:54+00:00"
- Line 6222: Implements application logic: }
- Line 6223: Implements application logic: ],
- Line 6224: Implements application logic: "packages-dev": [
- Line 6225: Implements application logic: {
- Line 6226: Implements application logic: "name": "fakerphp/faker",
- Line 6227: Implements application logic: "version": "v1.24.1",
- Line 6228: Implements application logic: "source": {
- Line 6229: Implements application logic: "type": "git",
- Line 6230: Implements application logic: "url": "https://github.com/FakerPHP/Faker.git",
- Line 6231: Implements application logic: "reference": "e0ee18eb1e6dc3cda3ce9fd97e5a0689a88a64b5"
- Line 6232: Implements application logic: },
- Line 6233: Implements application logic: "dist": {
- Line 6234: Implements application logic: "type": "zip",
- Line 6235: Implements application logic: "url": "https://api.github.com/repos/FakerPHP/Faker/zipball/e0ee18eb1e6dc3cda3ce9fd97e5a0689a88a64b5",
- Line 6236: Implements application logic: "reference": "e0ee18eb1e6dc3cda3ce9fd97e5a0689a88a64b5",
- Line 6237: Implements application logic: "shasum": ""
- Line 6238: Implements application logic: },
- Line 6239: Implements application logic: "require": {
- Line 6240: Implements application logic: "php": "^7.4 || ^8.0",
- Line 6241: Implements application logic: "psr/container": "^1.0 || ^2.0",
- Line 6242: Implements application logic: "symfony/deprecation-contracts": "^2.2 || ^3.0"
- Line 6243: Implements application logic: },
- Line 6244: Implements application logic: "conflict": {
- Line 6245: Implements application logic: "fzaninotto/faker": "*"
- Line 6246: Implements application logic: },
- Line 6247: Implements application logic: "require-dev": {
- Line 6248: Implements application logic: "bamarni/composer-bin-plugin": "^1.4.1",
- Line 6249: Implements application logic: "doctrine/persistence": "^1.3 || ^2.0",
- Line 6250: Implements application logic: "ext-intl": "*",
- Line 6251: Implements application logic: "phpunit/phpunit": "^9.5.26",
- Line 6252: Implements application logic: "symfony/phpunit-bridge": "^5.4.16"
- Line 6253: Implements application logic: },
- Line 6254: Implements application logic: "suggest": {
- Line 6255: Implements application logic: "doctrine/orm": "Required to use Faker\\ORM\\Doctrine",
- Line 6256: Implements application logic: "ext-curl": "Required by Faker\\Provider\\Image to download images.",
- Line 6257: Implements application logic: "ext-dom": "Required by Faker\\Provider\\HtmlLorem for generating random HTML.",
- Line 6258: Implements application logic: "ext-iconv": "Required by Faker\\Provider\\ru_RU\\Text::realText() for generating real Russian text.",
- Line 6259: Implements application logic: "ext-mbstring": "Required for multibyte Unicode string functionality."
- Line 6260: Implements application logic: },
- Line 6261: Implements application logic: "type": "library",
- Line 6262: Implements application logic: "autoload": {
- Line 6263: Implements application logic: "psr-4": {
- Line 6264: Implements application logic: "Faker\\": "src/Faker/"
- Line 6265: Implements application logic: }
- Line 6266: Implements application logic: },
- Line 6267: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 6268: Implements application logic: "license": [
- Line 6269: Implements application logic: "MIT"
- Line 6270: Implements application logic: ],
- Line 6271: Implements application logic: "authors": [
- Line 6272: Implements application logic: {
- Line 6273: Implements application logic: "name": "François Zaninotto"
- Line 6274: Implements application logic: }
- Line 6275: Implements application logic: ],
- Line 6276: Implements application logic: "description": "Faker is a PHP library that generates fake data for you.",
- Line 6277: Implements application logic: "keywords": [
- Line 6278: Implements application logic: "data",
- Line 6279: Implements application logic: "faker",
- Line 6280: Implements application logic: "fixtures"
- Line 6281: Implements application logic: ],
- Line 6282: Implements application logic: "support": {
- Line 6283: Implements application logic: "issues": "https://github.com/FakerPHP/Faker/issues",
- Line 6284: Implements application logic: "source": "https://github.com/FakerPHP/Faker/tree/v1.24.1"
- Line 6285: Implements application logic: },
- Line 6286: Implements application logic: "time": "2024-11-21T13:46:39+00:00"
- Line 6287: Implements application logic: },
- Line 6288: Implements application logic: {
- Line 6289: Implements application logic: "name": "filp/whoops",
- Line 6290: Implements application logic: "version": "2.18.4",
- Line 6291: Implements application logic: "source": {
- Line 6292: Implements application logic: "type": "git",
- Line 6293: Implements application logic: "url": "https://github.com/filp/whoops.git",
- Line 6294: Implements application logic: "reference": "d2102955e48b9fd9ab24280a7ad12ed552752c4d"
- Line 6295: Implements application logic: },
- Line 6296: Implements application logic: "dist": {
- Line 6297: Implements application logic: "type": "zip",
- Line 6298: Implements application logic: "url": "https://api.github.com/repos/filp/whoops/zipball/d2102955e48b9fd9ab24280a7ad12ed552752c4d",
- Line 6299: Implements application logic: "reference": "d2102955e48b9fd9ab24280a7ad12ed552752c4d",
- Line 6300: Implements application logic: "shasum": ""
- Line 6301: Implements application logic: },
- Line 6302: Implements application logic: "require": {
- Line 6303: Implements application logic: "php": "^7.1 || ^8.0",
- Line 6304: Implements application logic: "psr/log": "^1.0.1 || ^2.0 || ^3.0"
- Line 6305: Implements application logic: },
- Line 6306: Implements application logic: "require-dev": {
- Line 6307: Implements application logic: "mockery/mockery": "^1.0",
- Line 6308: Implements application logic: "phpunit/phpunit": "^7.5.20 || ^8.5.8 || ^9.3.3",
- Line 6309: Implements application logic: "symfony/var-dumper": "^4.0 || ^5.0"
- Line 6310: Implements application logic: },
- Line 6311: Implements application logic: "suggest": {
- Line 6312: Implements application logic: "symfony/var-dumper": "Pretty print complex values better with var-dumper available",
- Line 6313: Implements application logic: "whoops/soap": "Formats errors as SOAP responses"
- Line 6314: Implements application logic: },
- Line 6315: Implements application logic: "type": "library",
- Line 6316: Implements application logic: "extra": {
- Line 6317: Implements application logic: "branch-alias": {
- Line 6318: Implements application logic: "dev-master": "2.7-dev"
- Line 6319: Implements application logic: }
- Line 6320: Implements application logic: },
- Line 6321: Implements application logic: "autoload": {
- Line 6322: Implements application logic: "psr-4": {
- Line 6323: Implements application logic: "Whoops\\": "src/Whoops/"
- Line 6324: Implements application logic: }
- Line 6325: Implements application logic: },
- Line 6326: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 6327: Implements application logic: "license": [
- Line 6328: Implements application logic: "MIT"
- Line 6329: Implements application logic: ],
- Line 6330: Implements application logic: "authors": [
- Line 6331: Implements application logic: {
- Line 6332: Implements application logic: "name": "Filipe Dobreira",
- Line 6333: Implements application logic: "homepage": "https://github.com/filp",
- Line 6334: Implements application logic: "role": "Developer"
- Line 6335: Implements application logic: }
- Line 6336: Implements application logic: ],
- Line 6337: Implements application logic: "description": "php error handling for cool kids",
- Line 6338: Implements application logic: "homepage": "https://filp.github.io/whoops/",
- Line 6339: Implements application logic: "keywords": [
- Line 6340: Implements application logic: "error",
- Line 6341: Implements application logic: "exception",
- Line 6342: Implements application logic: "handling",
- Line 6343: Implements application logic: "library",
- Line 6344: Implements application logic: "throwable",
- Line 6345: Implements application logic: "whoops"
- Line 6346: Implements application logic: ],
- Line 6347: Implements application logic: "support": {
- Line 6348: Implements application logic: "issues": "https://github.com/filp/whoops/issues",
- Line 6349: Implements application logic: "source": "https://github.com/filp/whoops/tree/2.18.4"
- Line 6350: Implements application logic: },
- Line 6351: Implements application logic: "funding": [
- Line 6352: Implements application logic: {
- Line 6353: Implements application logic: "url": "https://github.com/denis-sokolov",
- Line 6354: Implements application logic: "type": "github"
- Line 6355: Implements application logic: }
- Line 6356: Implements application logic: ],
- Line 6357: Implements application logic: "time": "2025-08-08T12:00:00+00:00"
- Line 6358: Implements application logic: },
- Line 6359: Implements application logic: {
- Line 6360: Implements application logic: "name": "hamcrest/hamcrest-php",
- Line 6361: Implements application logic: "version": "v2.1.1",
- Line 6362: Implements application logic: "source": {
- Line 6363: Implements application logic: "type": "git",
- Line 6364: Implements application logic: "url": "https://github.com/hamcrest/hamcrest-php.git",
- Line 6365: Implements application logic: "reference": "f8b1c0173b22fa6ec77a81fe63e5b01eba7e6487"
- Line 6366: Implements application logic: },
- Line 6367: Implements application logic: "dist": {
- Line 6368: Implements application logic: "type": "zip",
- Line 6369: Implements application logic: "url": "https://api.github.com/repos/hamcrest/hamcrest-php/zipball/f8b1c0173b22fa6ec77a81fe63e5b01eba7e6487",
- Line 6370: Implements application logic: "reference": "f8b1c0173b22fa6ec77a81fe63e5b01eba7e6487",
- Line 6371: Implements application logic: "shasum": ""
- Line 6372: Implements application logic: },
- Line 6373: Implements application logic: "require": {
- Line 6374: Implements application logic: "php": "^7.4|^8.0"
- Line 6375: Implements application logic: },
- Line 6376: Implements application logic: "replace": {
- Line 6377: Implements application logic: "cordoval/hamcrest-php": "*",
- Line 6378: Implements application logic: "davedevelopment/hamcrest-php": "*",
- Line 6379: Implements application logic: "kodova/hamcrest-php": "*"
- Line 6380: Implements application logic: },
- Line 6381: Implements application logic: "require-dev": {
- Line 6382: Implements application logic: "phpunit/php-file-iterator": "^1.4 || ^2.0 || ^3.0",
- Line 6383: Implements application logic: "phpunit/phpunit": "^4.8.36 || ^5.7 || ^6.5 || ^7.0 || ^8.0 || ^9.0"
- Line 6384: Implements application logic: },
- Line 6385: Implements application logic: "type": "library",
- Line 6386: Implements application logic: "extra": {
- Line 6387: Implements application logic: "branch-alias": {
- Line 6388: Implements application logic: "dev-master": "2.1-dev"
- Line 6389: Implements application logic: }
- Line 6390: Implements application logic: },
- Line 6391: Implements application logic: "autoload": {
- Line 6392: Implements application logic: "classmap": [
- Line 6393: Implements application logic: "hamcrest"
- Line 6394: Implements application logic: ]
- Line 6395: Implements application logic: },
- Line 6396: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 6397: Implements application logic: "license": [
- Line 6398: Implements application logic: "BSD-3-Clause"
- Line 6399: Implements application logic: ],
- Line 6400: Implements application logic: "description": "This is the PHP port of Hamcrest Matchers",
- Line 6401: Implements application logic: "keywords": [
- Line 6402: Implements application logic: "test"
- Line 6403: Implements application logic: ],
- Line 6404: Implements application logic: "support": {
- Line 6405: Implements application logic: "issues": "https://github.com/hamcrest/hamcrest-php/issues",
- Line 6406: Implements application logic: "source": "https://github.com/hamcrest/hamcrest-php/tree/v2.1.1"
- Line 6407: Implements application logic: },
- Line 6408: Implements application logic: "time": "2025-04-30T06:54:44+00:00"
- Line 6409: Implements application logic: },
- Line 6410: Implements application logic: {
- Line 6411: Implements application logic: "name": "laravel/pail",
- Line 6412: Implements application logic: "version": "v1.2.6",
- Line 6413: Implements application logic: "source": {
- Line 6414: Implements application logic: "type": "git",
- Line 6415: Implements application logic: "url": "https://github.com/laravel/pail.git",
- Line 6416: Implements application logic: "reference": "aa71a01c309e7f66bc2ec4fb1a59291b82eb4abf"
- Line 6417: Implements application logic: },
- Line 6418: Implements application logic: "dist": {
- Line 6419: Implements application logic: "type": "zip",
- Line 6420: Implements application logic: "url": "https://api.github.com/repos/laravel/pail/zipball/aa71a01c309e7f66bc2ec4fb1a59291b82eb4abf",
- Line 6421: Implements application logic: "reference": "aa71a01c309e7f66bc2ec4fb1a59291b82eb4abf",
- Line 6422: Implements application logic: "shasum": ""
- Line 6423: Implements application logic: },
- Line 6424: Implements application logic: "require": {
- Line 6425: Implements application logic: "ext-mbstring": "*",
- Line 6426: Implements application logic: "illuminate/console": "^10.24|^11.0|^12.0|^13.0",
- Line 6427: Implements application logic: "illuminate/contracts": "^10.24|^11.0|^12.0|^13.0",
- Line 6428: Implements application logic: "illuminate/log": "^10.24|^11.0|^12.0|^13.0",
- Line 6429: Implements application logic: "illuminate/process": "^10.24|^11.0|^12.0|^13.0",
- Line 6430: Implements application logic: "illuminate/support": "^10.24|^11.0|^12.0|^13.0",
- Line 6431: Implements application logic: "nunomaduro/termwind": "^1.15|^2.0",
- Line 6432: Implements application logic: "php": "^8.2",
- Line 6433: Implements application logic: "symfony/console": "^6.0|^7.0|^8.0"
- Line 6434: Implements application logic: },
- Line 6435: Implements application logic: "require-dev": {
- Line 6436: Implements application logic: "laravel/framework": "^10.24|^11.0|^12.0|^13.0",
- Line 6437: Implements application logic: "laravel/pint": "^1.13",
- Line 6438: Implements application logic: "orchestra/testbench-core": "^8.13|^9.17|^10.8|^11.0",
- Line 6439: Implements application logic: "pestphp/pest": "^2.20|^3.0|^4.0",
- Line 6440: Implements application logic: "pestphp/pest-plugin-type-coverage": "^2.3|^3.0|^4.0",
- Line 6441: Implements application logic: "phpstan/phpstan": "^1.12.27",
- Line 6442: Implements application logic: "symfony/var-dumper": "^6.3|^7.0|^8.0",
- Line 6443: Implements application logic: "symfony/yaml": "^6.3|^7.0|^8.0"
- Line 6444: Implements application logic: },
- Line 6445: Implements application logic: "type": "library",
- Line 6446: Implements application logic: "extra": {
- Line 6447: Implements application logic: "laravel": {
- Line 6448: Implements application logic: "providers": [
- Line 6449: Implements application logic: "Laravel\\Pail\\PailServiceProvider"
- Line 6450: Implements application logic: ]
- Line 6451: Implements application logic: },
- Line 6452: Implements application logic: "branch-alias": {
- Line 6453: Implements application logic: "dev-main": "1.x-dev"
- Line 6454: Implements application logic: }
- Line 6455: Implements application logic: },
- Line 6456: Implements application logic: "autoload": {
- Line 6457: Implements application logic: "psr-4": {
- Line 6458: Implements application logic: "Laravel\\Pail\\": "src/"
- Line 6459: Implements application logic: }
- Line 6460: Implements application logic: },
- Line 6461: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 6462: Implements application logic: "license": [
- Line 6463: Implements application logic: "MIT"
- Line 6464: Implements application logic: ],
- Line 6465: Implements application logic: "authors": [
- Line 6466: Implements application logic: {
- Line 6467: Implements application logic: "name": "Taylor Otwell",
- Line 6468: Implements application logic: "email": "taylor@laravel.com"
- Line 6469: Implements application logic: },
- Line 6470: Implements application logic: {
- Line 6471: Implements application logic: "name": "Nuno Maduro",
- Line 6472: Implements application logic: "email": "enunomaduro@gmail.com"
- Line 6473: Implements application logic: }
- Line 6474: Implements application logic: ],
- Line 6475: Implements application logic: "description": "Easily delve into your Laravel application's log files directly from the command line.",
- Line 6476: Implements application logic: "homepage": "https://github.com/laravel/pail",
- Line 6477: Implements application logic: "keywords": [
- Line 6478: Implements application logic: "dev",
- Line 6479: Implements application logic: "laravel",
- Line 6480: Implements application logic: "logs",
- Line 6481: Implements application logic: "php",
- Line 6482: Implements application logic: "tail"
- Line 6483: Implements application logic: ],
- Line 6484: Implements application logic: "support": {
- Line 6485: Implements application logic: "issues": "https://github.com/laravel/pail/issues",
- Line 6486: Implements application logic: "source": "https://github.com/laravel/pail"
- Line 6487: Implements application logic: },
- Line 6488: Implements application logic: "time": "2026-02-09T13:44:54+00:00"
- Line 6489: Implements application logic: },
- Line 6490: Implements application logic: {
- Line 6491: Implements application logic: "name": "laravel/pint",
- Line 6492: Implements application logic: "version": "v1.29.1",
- Line 6493: Implements application logic: "source": {
- Line 6494: Implements application logic: "type": "git",
- Line 6495: Implements application logic: "url": "https://github.com/laravel/pint.git",
- Line 6496: Implements application logic: "reference": "0770e9b7fafd50d4586881d456d6eb41c9247a80"
- Line 6497: Implements application logic: },
- Line 6498: Implements application logic: "dist": {
- Line 6499: Implements application logic: "type": "zip",
- Line 6500: Implements application logic: "url": "https://api.github.com/repos/laravel/pint/zipball/0770e9b7fafd50d4586881d456d6eb41c9247a80",
- Line 6501: Implements application logic: "reference": "0770e9b7fafd50d4586881d456d6eb41c9247a80",
- Line 6502: Implements application logic: "shasum": ""
- Line 6503: Implements application logic: },
- Line 6504: Implements application logic: "require": {
- Line 6505: Implements application logic: "ext-json": "*",
- Line 6506: Implements application logic: "ext-mbstring": "*",
- Line 6507: Implements application logic: "ext-tokenizer": "*",
- Line 6508: Implements application logic: "ext-xml": "*",
- Line 6509: Implements application logic: "php": "^8.2.0"
- Line 6510: Implements application logic: },
- Line 6511: Implements application logic: "require-dev": {
- Line 6512: Implements application logic: "friendsofphp/php-cs-fixer": "^3.95.1",
- Line 6513: Implements application logic: "illuminate/view": "^12.56.0",
- Line 6514: Implements application logic: "larastan/larastan": "^3.9.6",
- Line 6515: Implements application logic: "laravel-zero/framework": "^12.1.0",
- Line 6516: Implements application logic: "mockery/mockery": "^1.6.12",
- Line 6517: Implements application logic: "nunomaduro/termwind": "^2.4.0",
- Line 6518: Implements application logic: "pestphp/pest": "^3.8.6",
- Line 6519: Implements application logic: "shipfastlabs/agent-detector": "^1.1.3"
- Line 6520: Implements application logic: },
- Line 6521: Implements application logic: "bin": [
- Line 6522: Implements application logic: "builds/pint"
- Line 6523: Implements application logic: ],
- Line 6524: Implements application logic: "type": "project",
- Line 6525: Implements application logic: "autoload": {
- Line 6526: Implements application logic: "psr-4": {
- Line 6527: Implements application logic: "App\\": "app/",
- Line 6528: Implements application logic: "Database\\Seeders\\": "database/seeders/",
- Line 6529: Implements application logic: "Database\\Factories\\": "database/factories/"
- Line 6530: Implements application logic: }
- Line 6531: Implements application logic: },
- Line 6532: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 6533: Implements application logic: "license": [
- Line 6534: Implements application logic: "MIT"
- Line 6535: Implements application logic: ],
- Line 6536: Implements application logic: "authors": [
- Line 6537: Implements application logic: {
- Line 6538: Implements application logic: "name": "Nuno Maduro",
- Line 6539: Implements application logic: "email": "enunomaduro@gmail.com"
- Line 6540: Implements application logic: }
- Line 6541: Implements application logic: ],
- Line 6542: Implements application logic: "description": "An opinionated code formatter for PHP.",
- Line 6543: Implements application logic: "homepage": "https://laravel.com",
- Line 6544: Implements application logic: "keywords": [
- Line 6545: Implements application logic: "dev",
- Line 6546: Implements application logic: "format",
- Line 6547: Implements application logic: "formatter",
- Line 6548: Implements application logic: "lint",
- Line 6549: Implements application logic: "linter",
- Line 6550: Implements application logic: "php"
- Line 6551: Implements application logic: ],
- Line 6552: Implements application logic: "support": {
- Line 6553: Implements application logic: "issues": "https://github.com/laravel/pint/issues",
- Line 6554: Implements application logic: "source": "https://github.com/laravel/pint"
- Line 6555: Implements application logic: },
- Line 6556: Implements application logic: "time": "2026-04-20T15:26:14+00:00"
- Line 6557: Implements application logic: },
- Line 6558: Implements application logic: {
- Line 6559: Implements application logic: "name": "mockery/mockery",
- Line 6560: Implements application logic: "version": "1.6.12",
- Line 6561: Implements application logic: "source": {
- Line 6562: Implements application logic: "type": "git",
- Line 6563: Implements application logic: "url": "https://github.com/mockery/mockery.git",
- Line 6564: Implements application logic: "reference": "1f4efdd7d3beafe9807b08156dfcb176d18f1699"
- Line 6565: Implements application logic: },
- Line 6566: Implements application logic: "dist": {
- Line 6567: Implements application logic: "type": "zip",
- Line 6568: Implements application logic: "url": "https://api.github.com/repos/mockery/mockery/zipball/1f4efdd7d3beafe9807b08156dfcb176d18f1699",
- Line 6569: Implements application logic: "reference": "1f4efdd7d3beafe9807b08156dfcb176d18f1699",
- Line 6570: Implements application logic: "shasum": ""
- Line 6571: Implements application logic: },
- Line 6572: Implements application logic: "require": {
- Line 6573: Implements application logic: "hamcrest/hamcrest-php": "^2.0.1",
- Line 6574: Implements application logic: "lib-pcre": ">=7.0",
- Line 6575: Implements application logic: "php": ">=7.3"
- Line 6576: Implements application logic: },
- Line 6577: Implements application logic: "conflict": {
- Line 6578: Implements application logic: "phpunit/phpunit": "<8.0"
- Line 6579: Implements application logic: },
- Line 6580: Implements application logic: "require-dev": {
- Line 6581: Implements application logic: "phpunit/phpunit": "^8.5 || ^9.6.17",
- Line 6582: Implements application logic: "symplify/easy-coding-standard": "^12.1.14"
- Line 6583: Implements application logic: },
- Line 6584: Implements application logic: "type": "library",
- Line 6585: Implements application logic: "autoload": {
- Line 6586: Implements application logic: "files": [
- Line 6587: Implements application logic: "library/helpers.php",
- Line 6588: Implements application logic: "library/Mockery.php"
- Line 6589: Implements application logic: ],
- Line 6590: Implements application logic: "psr-4": {
- Line 6591: Implements application logic: "Mockery\\": "library/Mockery"
- Line 6592: Implements application logic: }
- Line 6593: Implements application logic: },
- Line 6594: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 6595: Implements application logic: "license": [
- Line 6596: Implements application logic: "BSD-3-Clause"
- Line 6597: Implements application logic: ],
- Line 6598: Implements application logic: "authors": [
- Line 6599: Implements application logic: {
- Line 6600: Implements application logic: "name": "Pádraic Brady",
- Line 6601: Implements application logic: "email": "padraic.brady@gmail.com",
- Line 6602: Implements application logic: "homepage": "https://github.com/padraic",
- Line 6603: Implements application logic: "role": "Author"
- Line 6604: Implements application logic: },
- Line 6605: Implements application logic: {
- Line 6606: Implements application logic: "name": "Dave Marshall",
- Line 6607: Implements application logic: "email": "dave.marshall@atstsolutions.co.uk",
- Line 6608: Implements application logic: "homepage": "https://davedevelopment.co.uk",
- Line 6609: Implements application logic: "role": "Developer"
- Line 6610: Implements application logic: },
- Line 6611: Implements application logic: {
- Line 6612: Implements application logic: "name": "Nathanael Esayeas",
- Line 6613: Implements application logic: "email": "nathanael.esayeas@protonmail.com",
- Line 6614: Implements application logic: "homepage": "https://github.com/ghostwriter",
- Line 6615: Implements application logic: "role": "Lead Developer"
- Line 6616: Implements application logic: }
- Line 6617: Implements application logic: ],
- Line 6618: Implements application logic: "description": "Mockery is a simple yet flexible PHP mock object framework",
- Line 6619: Implements application logic: "homepage": "https://github.com/mockery/mockery",
- Line 6620: Implements application logic: "keywords": [
- Line 6621: Implements application logic: "BDD",
- Line 6622: Implements application logic: "TDD",
- Line 6623: Implements application logic: "library",
- Line 6624: Implements application logic: "mock",
- Line 6625: Implements application logic: "mock objects",
- Line 6626: Implements application logic: "mockery",
- Line 6627: Implements application logic: "stub",
- Line 6628: Implements application logic: "test",
- Line 6629: Implements application logic: "test double",
- Line 6630: Implements application logic: "testing"
- Line 6631: Implements application logic: ],
- Line 6632: Implements application logic: "support": {
- Line 6633: Implements application logic: "docs": "https://docs.mockery.io/",
- Line 6634: Implements application logic: "issues": "https://github.com/mockery/mockery/issues",
- Line 6635: Implements application logic: "rss": "https://github.com/mockery/mockery/releases.atom",
- Line 6636: Implements application logic: "security": "https://github.com/mockery/mockery/security/advisories",
- Line 6637: Implements application logic: "source": "https://github.com/mockery/mockery"
- Line 6638: Implements application logic: },
- Line 6639: Implements application logic: "time": "2024-05-16T03:13:13+00:00"
- Line 6640: Implements application logic: },
- Line 6641: Implements application logic: {
- Line 6642: Implements application logic: "name": "myclabs/deep-copy",
- Line 6643: Implements application logic: "version": "1.13.4",
- Line 6644: Implements application logic: "source": {
- Line 6645: Implements application logic: "type": "git",
- Line 6646: Implements application logic: "url": "https://github.com/myclabs/DeepCopy.git",
- Line 6647: Implements application logic: "reference": "07d290f0c47959fd5eed98c95ee5602db07e0b6a"
- Line 6648: Implements application logic: },
- Line 6649: Implements application logic: "dist": {
- Line 6650: Implements application logic: "type": "zip",
- Line 6651: Implements application logic: "url": "https://api.github.com/repos/myclabs/DeepCopy/zipball/07d290f0c47959fd5eed98c95ee5602db07e0b6a",
- Line 6652: Implements application logic: "reference": "07d290f0c47959fd5eed98c95ee5602db07e0b6a",
- Line 6653: Implements application logic: "shasum": ""
- Line 6654: Implements application logic: },
- Line 6655: Implements application logic: "require": {
- Line 6656: Implements application logic: "php": "^7.1 || ^8.0"
- Line 6657: Implements application logic: },
- Line 6658: Implements application logic: "conflict": {
- Line 6659: Implements application logic: "doctrine/collections": "<1.6.8",
- Line 6660: Implements application logic: "doctrine/common": "<2.13.3 || >=3 <3.2.2"
- Line 6661: Implements application logic: },
- Line 6662: Implements application logic: "require-dev": {
- Line 6663: Implements application logic: "doctrine/collections": "^1.6.8",
- Line 6664: Implements application logic: "doctrine/common": "^2.13.3 || ^3.2.2",
- Line 6665: Implements application logic: "phpspec/prophecy": "^1.10",
- Line 6666: Implements application logic: "phpunit/phpunit": "^7.5.20 || ^8.5.23 || ^9.5.13"
- Line 6667: Implements application logic: },
- Line 6668: Implements application logic: "type": "library",
- Line 6669: Implements application logic: "autoload": {
- Line 6670: Implements application logic: "files": [
- Line 6671: Implements application logic: "src/DeepCopy/deep_copy.php"
- Line 6672: Implements application logic: ],
- Line 6673: Implements application logic: "psr-4": {
- Line 6674: Implements application logic: "DeepCopy\\": "src/DeepCopy/"
- Line 6675: Implements application logic: }
- Line 6676: Implements application logic: },
- Line 6677: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 6678: Implements application logic: "license": [
- Line 6679: Implements application logic: "MIT"
- Line 6680: Implements application logic: ],
- Line 6681: Implements application logic: "description": "Create deep copies (clones) of your objects",
- Line 6682: Implements application logic: "keywords": [
- Line 6683: Implements application logic: "clone",
- Line 6684: Implements application logic: "copy",
- Line 6685: Implements application logic: "duplicate",
- Line 6686: Implements application logic: "object",
- Line 6687: Implements application logic: "object graph"
- Line 6688: Implements application logic: ],
- Line 6689: Implements application logic: "support": {
- Line 6690: Implements application logic: "issues": "https://github.com/myclabs/DeepCopy/issues",
- Line 6691: Implements application logic: "source": "https://github.com/myclabs/DeepCopy/tree/1.13.4"
- Line 6692: Implements application logic: },
- Line 6693: Implements application logic: "funding": [
- Line 6694: Implements application logic: {
- Line 6695: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/myclabs/deep-copy",
- Line 6696: Implements application logic: "type": "tidelift"
- Line 6697: Implements application logic: }
- Line 6698: Implements application logic: ],
- Line 6699: Implements application logic: "time": "2025-08-01T08:46:24+00:00"
- Line 6700: Implements application logic: },
- Line 6701: Implements application logic: {
- Line 6702: Implements application logic: "name": "nunomaduro/collision",
- Line 6703: Implements application logic: "version": "v8.9.4",
- Line 6704: Implements application logic: "source": {
- Line 6705: Implements application logic: "type": "git",
- Line 6706: Implements application logic: "url": "https://github.com/nunomaduro/collision.git",
- Line 6707: Implements application logic: "reference": "716af8f95a470e9094cfca09ed897b023be191a5"
- Line 6708: Implements application logic: },
- Line 6709: Implements application logic: "dist": {
- Line 6710: Implements application logic: "type": "zip",
- Line 6711: Implements application logic: "url": "https://api.github.com/repos/nunomaduro/collision/zipball/716af8f95a470e9094cfca09ed897b023be191a5",
- Line 6712: Implements application logic: "reference": "716af8f95a470e9094cfca09ed897b023be191a5",
- Line 6713: Implements application logic: "shasum": ""
- Line 6714: Implements application logic: },
- Line 6715: Implements application logic: "require": {
- Line 6716: Implements application logic: "filp/whoops": "^2.18.4",
- Line 6717: Implements application logic: "nunomaduro/termwind": "^2.4.0",
- Line 6718: Implements application logic: "php": "^8.2.0",
- Line 6719: Implements application logic: "symfony/console": "^7.4.8 || ^8.0.8"
- Line 6720: Implements application logic: },
- Line 6721: Implements application logic: "conflict": {
- Line 6722: Implements application logic: "laravel/framework": "<11.48.0 || >=14.0.0",
- Line 6723: Implements application logic: "phpunit/phpunit": "<11.5.50 || >=14.0.0"
- Line 6724: Implements application logic: },
- Line 6725: Implements application logic: "require-dev": {
- Line 6726: Implements application logic: "brianium/paratest": "^7.8.5",
- Line 6727: Implements application logic: "larastan/larastan": "^3.9.6",
- Line 6728: Implements application logic: "laravel/framework": "^11.48.0 || ^12.56.0 || ^13.5.0",
- Line 6729: Implements application logic: "laravel/pint": "^1.29.1",
- Line 6730: Implements application logic: "orchestra/testbench-core": "^9.12.0 || ^10.12.1 || ^11.2.1",
- Line 6731: Implements application logic: "pestphp/pest": "^3.8.5 || ^4.4.3 || ^5.0.0",
- Line 6732: Implements application logic: "sebastian/environment": "^7.2.1 || ^8.0.4 || ^9.3.0"
- Line 6733: Implements application logic: },
- Line 6734: Implements application logic: "type": "library",
- Line 6735: Implements application logic: "extra": {
- Line 6736: Implements application logic: "laravel": {
- Line 6737: Implements application logic: "providers": [
- Line 6738: Implements application logic: "NunoMaduro\\Collision\\Adapters\\Laravel\\CollisionServiceProvider"
- Line 6739: Implements application logic: ]
- Line 6740: Implements application logic: },
- Line 6741: Implements application logic: "branch-alias": {
- Line 6742: Implements application logic: "dev-8.x": "8.x-dev"
- Line 6743: Implements application logic: }
- Line 6744: Implements application logic: },
- Line 6745: Implements application logic: "autoload": {
- Line 6746: Implements application logic: "files": [
- Line 6747: Implements application logic: "./src/Adapters/Phpunit/Autoload.php"
- Line 6748: Implements application logic: ],
- Line 6749: Implements application logic: "psr-4": {
- Line 6750: Implements application logic: "NunoMaduro\\Collision\\": "src/"
- Line 6751: Implements application logic: }
- Line 6752: Implements application logic: },
- Line 6753: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 6754: Implements application logic: "license": [
- Line 6755: Implements application logic: "MIT"
- Line 6756: Implements application logic: ],
- Line 6757: Implements application logic: "authors": [
- Line 6758: Implements application logic: {
- Line 6759: Implements application logic: "name": "Nuno Maduro",
- Line 6760: Implements application logic: "email": "enunomaduro@gmail.com"
- Line 6761: Implements application logic: }
- Line 6762: Implements application logic: ],
- Line 6763: Implements application logic: "description": "Cli error handling for console/command-line PHP applications.",
- Line 6764: Implements application logic: "keywords": [
- Line 6765: Implements application logic: "artisan",
- Line 6766: Implements application logic: "cli",
- Line 6767: Implements application logic: "command-line",
- Line 6768: Implements application logic: "console",
- Line 6769: Implements application logic: "dev",
- Line 6770: Implements application logic: "error",
- Line 6771: Implements application logic: "handling",
- Line 6772: Implements application logic: "laravel",
- Line 6773: Implements application logic: "laravel-zero",
- Line 6774: Implements application logic: "php",
- Line 6775: Implements application logic: "symfony"
- Line 6776: Implements application logic: ],
- Line 6777: Implements application logic: "support": {
- Line 6778: Implements application logic: "issues": "https://github.com/nunomaduro/collision/issues",
- Line 6779: Implements application logic: "source": "https://github.com/nunomaduro/collision"
- Line 6780: Implements application logic: },
- Line 6781: Implements application logic: "funding": [
- Line 6782: Implements application logic: {
- Line 6783: Implements application logic: "url": "https://www.paypal.com/paypalme/enunomaduro",
- Line 6784: Implements application logic: "type": "custom"
- Line 6785: Implements application logic: },
- Line 6786: Implements application logic: {
- Line 6787: Implements application logic: "url": "https://github.com/nunomaduro",
- Line 6788: Implements application logic: "type": "github"
- Line 6789: Implements application logic: },
- Line 6790: Implements application logic: {
- Line 6791: Implements application logic: "url": "https://www.patreon.com/nunomaduro",
- Line 6792: Implements application logic: "type": "patreon"
- Line 6793: Implements application logic: }
- Line 6794: Implements application logic: ],
- Line 6795: Implements application logic: "time": "2026-04-21T14:04:20+00:00"
- Line 6796: Implements application logic: },
- Line 6797: Implements application logic: {
- Line 6798: Implements application logic: "name": "phar-io/manifest",
- Line 6799: Implements application logic: "version": "2.0.4",
- Line 6800: Implements application logic: "source": {
- Line 6801: Implements application logic: "type": "git",
- Line 6802: Implements application logic: "url": "https://github.com/phar-io/manifest.git",
- Line 6803: Implements application logic: "reference": "54750ef60c58e43759730615a392c31c80e23176"
- Line 6804: Implements application logic: },
- Line 6805: Implements application logic: "dist": {
- Line 6806: Implements application logic: "type": "zip",
- Line 6807: Implements application logic: "url": "https://api.github.com/repos/phar-io/manifest/zipball/54750ef60c58e43759730615a392c31c80e23176",
- Line 6808: Implements application logic: "reference": "54750ef60c58e43759730615a392c31c80e23176",
- Line 6809: Implements application logic: "shasum": ""
- Line 6810: Implements application logic: },
- Line 6811: Implements application logic: "require": {
- Line 6812: Implements application logic: "ext-dom": "*",
- Line 6813: Implements application logic: "ext-libxml": "*",
- Line 6814: Implements application logic: "ext-phar": "*",
- Line 6815: Implements application logic: "ext-xmlwriter": "*",
- Line 6816: Implements application logic: "phar-io/version": "^3.0.1",
- Line 6817: Implements application logic: "php": "^7.2 || ^8.0"
- Line 6818: Implements application logic: },
- Line 6819: Implements application logic: "type": "library",
- Line 6820: Implements application logic: "extra": {
- Line 6821: Implements application logic: "branch-alias": {
- Line 6822: Implements application logic: "dev-master": "2.0.x-dev"
- Line 6823: Implements application logic: }
- Line 6824: Implements application logic: },
- Line 6825: Implements application logic: "autoload": {
- Line 6826: Implements application logic: "classmap": [
- Line 6827: Implements application logic: "src/"
- Line 6828: Implements application logic: ]
- Line 6829: Implements application logic: },
- Line 6830: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 6831: Implements application logic: "license": [
- Line 6832: Implements application logic: "BSD-3-Clause"
- Line 6833: Implements application logic: ],
- Line 6834: Implements application logic: "authors": [
- Line 6835: Implements application logic: {
- Line 6836: Implements application logic: "name": "Arne Blankerts",
- Line 6837: Implements application logic: "email": "arne@blankerts.de",
- Line 6838: Implements application logic: "role": "Developer"
- Line 6839: Implements application logic: },
- Line 6840: Implements application logic: {
- Line 6841: Implements application logic: "name": "Sebastian Heuer",
- Line 6842: Implements application logic: "email": "sebastian@phpeople.de",
- Line 6843: Implements application logic: "role": "Developer"
- Line 6844: Implements application logic: },
- Line 6845: Implements application logic: {
- Line 6846: Implements application logic: "name": "Sebastian Bergmann",
- Line 6847: Implements application logic: "email": "sebastian@phpunit.de",
- Line 6848: Implements application logic: "role": "Developer"
- Line 6849: Implements application logic: }
- Line 6850: Implements application logic: ],
- Line 6851: Implements application logic: "description": "Component for reading phar.io manifest information from a PHP Archive (PHAR)",
- Line 6852: Implements application logic: "support": {
- Line 6853: Implements application logic: "issues": "https://github.com/phar-io/manifest/issues",
- Line 6854: Implements application logic: "source": "https://github.com/phar-io/manifest/tree/2.0.4"
- Line 6855: Implements application logic: },
- Line 6856: Implements application logic: "funding": [
- Line 6857: Implements application logic: {
- Line 6858: Implements application logic: "url": "https://github.com/theseer",
- Line 6859: Implements application logic: "type": "github"
- Line 6860: Implements application logic: }
- Line 6861: Implements application logic: ],
- Line 6862: Implements application logic: "time": "2024-03-03T12:33:53+00:00"
- Line 6863: Implements application logic: },
- Line 6864: Implements application logic: {
- Line 6865: Implements application logic: "name": "phar-io/version",
- Line 6866: Implements application logic: "version": "3.2.1",
- Line 6867: Implements application logic: "source": {
- Line 6868: Implements application logic: "type": "git",
- Line 6869: Implements application logic: "url": "https://github.com/phar-io/version.git",
- Line 6870: Implements application logic: "reference": "4f7fd7836c6f332bb2933569e566a0d6c4cbed74"
- Line 6871: Implements application logic: },
- Line 6872: Implements application logic: "dist": {
- Line 6873: Implements application logic: "type": "zip",
- Line 6874: Implements application logic: "url": "https://api.github.com/repos/phar-io/version/zipball/4f7fd7836c6f332bb2933569e566a0d6c4cbed74",
- Line 6875: Implements application logic: "reference": "4f7fd7836c6f332bb2933569e566a0d6c4cbed74",
- Line 6876: Implements application logic: "shasum": ""
- Line 6877: Implements application logic: },
- Line 6878: Implements application logic: "require": {
- Line 6879: Implements application logic: "php": "^7.2 || ^8.0"
- Line 6880: Implements application logic: },
- Line 6881: Implements application logic: "type": "library",
- Line 6882: Implements application logic: "autoload": {
- Line 6883: Implements application logic: "classmap": [
- Line 6884: Implements application logic: "src/"
- Line 6885: Implements application logic: ]
- Line 6886: Implements application logic: },
- Line 6887: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 6888: Implements application logic: "license": [
- Line 6889: Implements application logic: "BSD-3-Clause"
- Line 6890: Implements application logic: ],
- Line 6891: Implements application logic: "authors": [
- Line 6892: Implements application logic: {
- Line 6893: Implements application logic: "name": "Arne Blankerts",
- Line 6894: Implements application logic: "email": "arne@blankerts.de",
- Line 6895: Implements application logic: "role": "Developer"
- Line 6896: Implements application logic: },
- Line 6897: Implements application logic: {
- Line 6898: Implements application logic: "name": "Sebastian Heuer",
- Line 6899: Implements application logic: "email": "sebastian@phpeople.de",
- Line 6900: Implements application logic: "role": "Developer"
- Line 6901: Implements application logic: },
- Line 6902: Implements application logic: {
- Line 6903: Implements application logic: "name": "Sebastian Bergmann",
- Line 6904: Implements application logic: "email": "sebastian@phpunit.de",
- Line 6905: Implements application logic: "role": "Developer"
- Line 6906: Implements application logic: }
- Line 6907: Implements application logic: ],
- Line 6908: Implements application logic: "description": "Library for handling version information and constraints",
- Line 6909: Implements application logic: "support": {
- Line 6910: Implements application logic: "issues": "https://github.com/phar-io/version/issues",
- Line 6911: Implements application logic: "source": "https://github.com/phar-io/version/tree/3.2.1"
- Line 6912: Implements application logic: },
- Line 6913: Implements application logic: "time": "2022-02-21T01:04:05+00:00"
- Line 6914: Implements application logic: },
- Line 6915: Implements application logic: {
- Line 6916: Implements application logic: "name": "phpunit/php-code-coverage",
- Line 6917: Implements application logic: "version": "12.5.6",
- Line 6918: Implements application logic: "source": {
- Line 6919: Implements application logic: "type": "git",
- Line 6920: Implements application logic: "url": "https://github.com/sebastianbergmann/php-code-coverage.git",
- Line 6921: Implements application logic: "reference": "876099a072646c7745f673d7aeab5382c4439691"
- Line 6922: Implements application logic: },
- Line 6923: Implements application logic: "dist": {
- Line 6924: Implements application logic: "type": "zip",
- Line 6925: Implements application logic: "url": "https://api.github.com/repos/sebastianbergmann/php-code-coverage/zipball/876099a072646c7745f673d7aeab5382c4439691",
- Line 6926: Implements application logic: "reference": "876099a072646c7745f673d7aeab5382c4439691",
- Line 6927: Implements application logic: "shasum": ""
- Line 6928: Implements application logic: },
- Line 6929: Implements application logic: "require": {
- Line 6930: Implements application logic: "ext-dom": "*",
- Line 6931: Implements application logic: "ext-libxml": "*",
- Line 6932: Implements application logic: "ext-xmlwriter": "*",
- Line 6933: Implements application logic: "nikic/php-parser": "^5.7.0",
- Line 6934: Implements application logic: "php": ">=8.3",
- Line 6935: Implements application logic: "phpunit/php-text-template": "^5.0",
- Line 6936: Implements application logic: "sebastian/complexity": "^5.0",
- Line 6937: Implements application logic: "sebastian/environment": "^8.0.3",
- Line 6938: Implements application logic: "sebastian/lines-of-code": "^4.0",
- Line 6939: Implements application logic: "sebastian/version": "^6.0",
- Line 6940: Implements application logic: "theseer/tokenizer": "^2.0.1"
- Line 6941: Implements application logic: },
- Line 6942: Implements application logic: "require-dev": {
- Line 6943: Implements application logic: "phpunit/phpunit": "^12.5.1"
- Line 6944: Implements application logic: },
- Line 6945: Implements application logic: "suggest": {
- Line 6946: Implements application logic: "ext-pcov": "PHP extension that provides line coverage",
- Line 6947: Implements application logic: "ext-xdebug": "PHP extension that provides line coverage as well as branch and path coverage"
- Line 6948: Implements application logic: },
- Line 6949: Implements application logic: "type": "library",
- Line 6950: Implements application logic: "extra": {
- Line 6951: Implements application logic: "branch-alias": {
- Line 6952: Implements application logic: "dev-main": "12.5.x-dev"
- Line 6953: Implements application logic: }
- Line 6954: Implements application logic: },
- Line 6955: Implements application logic: "autoload": {
- Line 6956: Implements application logic: "classmap": [
- Line 6957: Implements application logic: "src/"
- Line 6958: Implements application logic: ]
- Line 6959: Implements application logic: },
- Line 6960: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 6961: Implements application logic: "license": [
- Line 6962: Implements application logic: "BSD-3-Clause"
- Line 6963: Implements application logic: ],
- Line 6964: Implements application logic: "authors": [
- Line 6965: Implements application logic: {
- Line 6966: Implements application logic: "name": "Sebastian Bergmann",
- Line 6967: Implements application logic: "email": "sebastian@phpunit.de",
- Line 6968: Implements application logic: "role": "lead"
- Line 6969: Implements application logic: }
- Line 6970: Implements application logic: ],
- Line 6971: Implements application logic: "description": "Library that provides collection, processing, and rendering functionality for PHP code coverage information.",
- Line 6972: Implements application logic: "homepage": "https://github.com/sebastianbergmann/php-code-coverage",
- Line 6973: Implements application logic: "keywords": [
- Line 6974: Implements application logic: "coverage",
- Line 6975: Implements application logic: "testing",
- Line 6976: Implements application logic: "xunit"
- Line 6977: Implements application logic: ],
- Line 6978: Implements application logic: "support": {
- Line 6979: Implements application logic: "issues": "https://github.com/sebastianbergmann/php-code-coverage/issues",
- Line 6980: Implements application logic: "security": "https://github.com/sebastianbergmann/php-code-coverage/security/policy",
- Line 6981: Implements application logic: "source": "https://github.com/sebastianbergmann/php-code-coverage/tree/12.5.6"
- Line 6982: Implements application logic: },
- Line 6983: Implements application logic: "funding": [
- Line 6984: Implements application logic: {
- Line 6985: Implements application logic: "url": "https://github.com/sebastianbergmann",
- Line 6986: Implements application logic: "type": "github"
- Line 6987: Implements application logic: },
- Line 6988: Implements application logic: {
- Line 6989: Implements application logic: "url": "https://liberapay.com/sebastianbergmann",
- Line 6990: Implements application logic: "type": "liberapay"
- Line 6991: Implements application logic: },
- Line 6992: Implements application logic: {
- Line 6993: Implements application logic: "url": "https://thanks.dev/u/gh/sebastianbergmann",
- Line 6994: Implements application logic: "type": "thanks_dev"
- Line 6995: Implements application logic: },
- Line 6996: Implements application logic: {
- Line 6997: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/phpunit/php-code-coverage",
- Line 6998: Implements application logic: "type": "tidelift"
- Line 6999: Implements application logic: }
- Line 7000: Implements application logic: ],
- Line 7001: Implements application logic: "time": "2026-04-15T08:23:17+00:00"
- Line 7002: Implements application logic: },
- Line 7003: Implements application logic: {
- Line 7004: Implements application logic: "name": "phpunit/php-file-iterator",
- Line 7005: Implements application logic: "version": "6.0.1",
- Line 7006: Implements application logic: "source": {
- Line 7007: Implements application logic: "type": "git",
- Line 7008: Implements application logic: "url": "https://github.com/sebastianbergmann/php-file-iterator.git",
- Line 7009: Implements application logic: "reference": "3d1cd096ef6bea4bf2762ba586e35dbd317cbfd5"
- Line 7010: Implements application logic: },
- Line 7011: Implements application logic: "dist": {
- Line 7012: Implements application logic: "type": "zip",
- Line 7013: Implements application logic: "url": "https://api.github.com/repos/sebastianbergmann/php-file-iterator/zipball/3d1cd096ef6bea4bf2762ba586e35dbd317cbfd5",
- Line 7014: Implements application logic: "reference": "3d1cd096ef6bea4bf2762ba586e35dbd317cbfd5",
- Line 7015: Implements application logic: "shasum": ""
- Line 7016: Implements application logic: },
- Line 7017: Implements application logic: "require": {
- Line 7018: Implements application logic: "php": ">=8.3"
- Line 7019: Implements application logic: },
- Line 7020: Implements application logic: "require-dev": {
- Line 7021: Implements application logic: "phpunit/phpunit": "^12.0"
- Line 7022: Implements application logic: },
- Line 7023: Implements application logic: "type": "library",
- Line 7024: Implements application logic: "extra": {
- Line 7025: Implements application logic: "branch-alias": {
- Line 7026: Implements application logic: "dev-main": "6.0-dev"
- Line 7027: Implements application logic: }
- Line 7028: Implements application logic: },
- Line 7029: Implements application logic: "autoload": {
- Line 7030: Implements application logic: "classmap": [
- Line 7031: Implements application logic: "src/"
- Line 7032: Implements application logic: ]
- Line 7033: Implements application logic: },
- Line 7034: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 7035: Implements application logic: "license": [
- Line 7036: Implements application logic: "BSD-3-Clause"
- Line 7037: Implements application logic: ],
- Line 7038: Implements application logic: "authors": [
- Line 7039: Implements application logic: {
- Line 7040: Implements application logic: "name": "Sebastian Bergmann",
- Line 7041: Implements application logic: "email": "sebastian@phpunit.de",
- Line 7042: Implements application logic: "role": "lead"
- Line 7043: Implements application logic: }
- Line 7044: Implements application logic: ],
- Line 7045: Implements application logic: "description": "FilterIterator implementation that filters files based on a list of suffixes.",
- Line 7046: Implements application logic: "homepage": "https://github.com/sebastianbergmann/php-file-iterator/",
- Line 7047: Implements application logic: "keywords": [
- Line 7048: Implements application logic: "filesystem",
- Line 7049: Implements application logic: "iterator"
- Line 7050: Implements application logic: ],
- Line 7051: Implements application logic: "support": {
- Line 7052: Implements application logic: "issues": "https://github.com/sebastianbergmann/php-file-iterator/issues",
- Line 7053: Implements application logic: "security": "https://github.com/sebastianbergmann/php-file-iterator/security/policy",
- Line 7054: Implements application logic: "source": "https://github.com/sebastianbergmann/php-file-iterator/tree/6.0.1"
- Line 7055: Implements application logic: },
- Line 7056: Implements application logic: "funding": [
- Line 7057: Implements application logic: {
- Line 7058: Implements application logic: "url": "https://github.com/sebastianbergmann",
- Line 7059: Implements application logic: "type": "github"
- Line 7060: Implements application logic: },
- Line 7061: Implements application logic: {
- Line 7062: Implements application logic: "url": "https://liberapay.com/sebastianbergmann",
- Line 7063: Implements application logic: "type": "liberapay"
- Line 7064: Implements application logic: },
- Line 7065: Implements application logic: {
- Line 7066: Implements application logic: "url": "https://thanks.dev/u/gh/sebastianbergmann",
- Line 7067: Implements application logic: "type": "thanks_dev"
- Line 7068: Implements application logic: },
- Line 7069: Implements application logic: {
- Line 7070: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/phpunit/php-file-iterator",
- Line 7071: Implements application logic: "type": "tidelift"
- Line 7072: Implements application logic: }
- Line 7073: Implements application logic: ],
- Line 7074: Implements application logic: "time": "2026-02-02T14:04:18+00:00"
- Line 7075: Implements application logic: },
- Line 7076: Implements application logic: {
- Line 7077: Implements application logic: "name": "phpunit/php-invoker",
- Line 7078: Implements application logic: "version": "6.0.0",
- Line 7079: Implements application logic: "source": {
- Line 7080: Implements application logic: "type": "git",
- Line 7081: Implements application logic: "url": "https://github.com/sebastianbergmann/php-invoker.git",
- Line 7082: Implements application logic: "reference": "12b54e689b07a25a9b41e57736dfab6ec9ae5406"
- Line 7083: Implements application logic: },
- Line 7084: Implements application logic: "dist": {
- Line 7085: Implements application logic: "type": "zip",
- Line 7086: Implements application logic: "url": "https://api.github.com/repos/sebastianbergmann/php-invoker/zipball/12b54e689b07a25a9b41e57736dfab6ec9ae5406",
- Line 7087: Implements application logic: "reference": "12b54e689b07a25a9b41e57736dfab6ec9ae5406",
- Line 7088: Implements application logic: "shasum": ""
- Line 7089: Implements application logic: },
- Line 7090: Implements application logic: "require": {
- Line 7091: Implements application logic: "php": ">=8.3"
- Line 7092: Implements application logic: },
- Line 7093: Implements application logic: "require-dev": {
- Line 7094: Implements application logic: "ext-pcntl": "*",
- Line 7095: Implements application logic: "phpunit/phpunit": "^12.0"
- Line 7096: Implements application logic: },
- Line 7097: Implements application logic: "suggest": {
- Line 7098: Implements application logic: "ext-pcntl": "*"
- Line 7099: Implements application logic: },
- Line 7100: Implements application logic: "type": "library",
- Line 7101: Implements application logic: "extra": {
- Line 7102: Implements application logic: "branch-alias": {
- Line 7103: Implements application logic: "dev-main": "6.0-dev"
- Line 7104: Implements application logic: }
- Line 7105: Implements application logic: },
- Line 7106: Implements application logic: "autoload": {
- Line 7107: Implements application logic: "classmap": [
- Line 7108: Implements application logic: "src/"
- Line 7109: Implements application logic: ]
- Line 7110: Implements application logic: },
- Line 7111: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 7112: Implements application logic: "license": [
- Line 7113: Implements application logic: "BSD-3-Clause"
- Line 7114: Implements application logic: ],
- Line 7115: Implements application logic: "authors": [
- Line 7116: Implements application logic: {
- Line 7117: Implements application logic: "name": "Sebastian Bergmann",
- Line 7118: Implements application logic: "email": "sebastian@phpunit.de",
- Line 7119: Implements application logic: "role": "lead"
- Line 7120: Implements application logic: }
- Line 7121: Implements application logic: ],
- Line 7122: Implements application logic: "description": "Invoke callables with a timeout",
- Line 7123: Implements application logic: "homepage": "https://github.com/sebastianbergmann/php-invoker/",
- Line 7124: Implements application logic: "keywords": [
- Line 7125: Implements application logic: "process"
- Line 7126: Implements application logic: ],
- Line 7127: Implements application logic: "support": {
- Line 7128: Implements application logic: "issues": "https://github.com/sebastianbergmann/php-invoker/issues",
- Line 7129: Implements application logic: "security": "https://github.com/sebastianbergmann/php-invoker/security/policy",
- Line 7130: Implements application logic: "source": "https://github.com/sebastianbergmann/php-invoker/tree/6.0.0"
- Line 7131: Implements application logic: },
- Line 7132: Implements application logic: "funding": [
- Line 7133: Implements application logic: {
- Line 7134: Implements application logic: "url": "https://github.com/sebastianbergmann",
- Line 7135: Implements application logic: "type": "github"
- Line 7136: Implements application logic: }
- Line 7137: Implements application logic: ],
- Line 7138: Implements application logic: "time": "2025-02-07T04:58:58+00:00"
- Line 7139: Implements application logic: },
- Line 7140: Implements application logic: {
- Line 7141: Implements application logic: "name": "phpunit/php-text-template",
- Line 7142: Implements application logic: "version": "5.0.0",
- Line 7143: Implements application logic: "source": {
- Line 7144: Implements application logic: "type": "git",
- Line 7145: Implements application logic: "url": "https://github.com/sebastianbergmann/php-text-template.git",
- Line 7146: Implements application logic: "reference": "e1367a453f0eda562eedb4f659e13aa900d66c53"
- Line 7147: Implements application logic: },
- Line 7148: Implements application logic: "dist": {
- Line 7149: Implements application logic: "type": "zip",
- Line 7150: Implements application logic: "url": "https://api.github.com/repos/sebastianbergmann/php-text-template/zipball/e1367a453f0eda562eedb4f659e13aa900d66c53",
- Line 7151: Implements application logic: "reference": "e1367a453f0eda562eedb4f659e13aa900d66c53",
- Line 7152: Implements application logic: "shasum": ""
- Line 7153: Implements application logic: },
- Line 7154: Implements application logic: "require": {
- Line 7155: Implements application logic: "php": ">=8.3"
- Line 7156: Implements application logic: },
- Line 7157: Implements application logic: "require-dev": {
- Line 7158: Implements application logic: "phpunit/phpunit": "^12.0"
- Line 7159: Implements application logic: },
- Line 7160: Implements application logic: "type": "library",
- Line 7161: Implements application logic: "extra": {
- Line 7162: Implements application logic: "branch-alias": {
- Line 7163: Implements application logic: "dev-main": "5.0-dev"
- Line 7164: Implements application logic: }
- Line 7165: Implements application logic: },
- Line 7166: Implements application logic: "autoload": {
- Line 7167: Implements application logic: "classmap": [
- Line 7168: Implements application logic: "src/"
- Line 7169: Implements application logic: ]
- Line 7170: Implements application logic: },
- Line 7171: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 7172: Implements application logic: "license": [
- Line 7173: Implements application logic: "BSD-3-Clause"
- Line 7174: Implements application logic: ],
- Line 7175: Implements application logic: "authors": [
- Line 7176: Implements application logic: {
- Line 7177: Implements application logic: "name": "Sebastian Bergmann",
- Line 7178: Implements application logic: "email": "sebastian@phpunit.de",
- Line 7179: Implements application logic: "role": "lead"
- Line 7180: Implements application logic: }
- Line 7181: Implements application logic: ],
- Line 7182: Implements application logic: "description": "Simple template engine.",
- Line 7183: Implements application logic: "homepage": "https://github.com/sebastianbergmann/php-text-template/",
- Line 7184: Implements application logic: "keywords": [
- Line 7185: Implements application logic: "template"
- Line 7186: Implements application logic: ],
- Line 7187: Implements application logic: "support": {
- Line 7188: Implements application logic: "issues": "https://github.com/sebastianbergmann/php-text-template/issues",
- Line 7189: Implements application logic: "security": "https://github.com/sebastianbergmann/php-text-template/security/policy",
- Line 7190: Implements application logic: "source": "https://github.com/sebastianbergmann/php-text-template/tree/5.0.0"
- Line 7191: Implements application logic: },
- Line 7192: Implements application logic: "funding": [
- Line 7193: Implements application logic: {
- Line 7194: Implements application logic: "url": "https://github.com/sebastianbergmann",
- Line 7195: Implements application logic: "type": "github"
- Line 7196: Implements application logic: }
- Line 7197: Implements application logic: ],
- Line 7198: Implements application logic: "time": "2025-02-07T04:59:16+00:00"
- Line 7199: Implements application logic: },
- Line 7200: Implements application logic: {
- Line 7201: Implements application logic: "name": "phpunit/php-timer",
- Line 7202: Implements application logic: "version": "8.0.0",
- Line 7203: Implements application logic: "source": {
- Line 7204: Implements application logic: "type": "git",
- Line 7205: Implements application logic: "url": "https://github.com/sebastianbergmann/php-timer.git",
- Line 7206: Implements application logic: "reference": "f258ce36aa457f3aa3339f9ed4c81fc66dc8c2cc"
- Line 7207: Implements application logic: },
- Line 7208: Implements application logic: "dist": {
- Line 7209: Implements application logic: "type": "zip",
- Line 7210: Implements application logic: "url": "https://api.github.com/repos/sebastianbergmann/php-timer/zipball/f258ce36aa457f3aa3339f9ed4c81fc66dc8c2cc",
- Line 7211: Implements application logic: "reference": "f258ce36aa457f3aa3339f9ed4c81fc66dc8c2cc",
- Line 7212: Implements application logic: "shasum": ""
- Line 7213: Implements application logic: },
- Line 7214: Implements application logic: "require": {
- Line 7215: Implements application logic: "php": ">=8.3"
- Line 7216: Implements application logic: },
- Line 7217: Implements application logic: "require-dev": {
- Line 7218: Implements application logic: "phpunit/phpunit": "^12.0"
- Line 7219: Implements application logic: },
- Line 7220: Implements application logic: "type": "library",
- Line 7221: Implements application logic: "extra": {
- Line 7222: Implements application logic: "branch-alias": {
- Line 7223: Implements application logic: "dev-main": "8.0-dev"
- Line 7224: Implements application logic: }
- Line 7225: Implements application logic: },
- Line 7226: Implements application logic: "autoload": {
- Line 7227: Implements application logic: "classmap": [
- Line 7228: Implements application logic: "src/"
- Line 7229: Implements application logic: ]
- Line 7230: Implements application logic: },
- Line 7231: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 7232: Implements application logic: "license": [
- Line 7233: Implements application logic: "BSD-3-Clause"
- Line 7234: Implements application logic: ],
- Line 7235: Implements application logic: "authors": [
- Line 7236: Implements application logic: {
- Line 7237: Implements application logic: "name": "Sebastian Bergmann",
- Line 7238: Implements application logic: "email": "sebastian@phpunit.de",
- Line 7239: Implements application logic: "role": "lead"
- Line 7240: Implements application logic: }
- Line 7241: Implements application logic: ],
- Line 7242: Implements application logic: "description": "Utility class for timing",
- Line 7243: Implements application logic: "homepage": "https://github.com/sebastianbergmann/php-timer/",
- Line 7244: Implements application logic: "keywords": [
- Line 7245: Implements application logic: "timer"
- Line 7246: Implements application logic: ],
- Line 7247: Implements application logic: "support": {
- Line 7248: Implements application logic: "issues": "https://github.com/sebastianbergmann/php-timer/issues",
- Line 7249: Implements application logic: "security": "https://github.com/sebastianbergmann/php-timer/security/policy",
- Line 7250: Implements application logic: "source": "https://github.com/sebastianbergmann/php-timer/tree/8.0.0"
- Line 7251: Implements application logic: },
- Line 7252: Implements application logic: "funding": [
- Line 7253: Implements application logic: {
- Line 7254: Implements application logic: "url": "https://github.com/sebastianbergmann",
- Line 7255: Implements application logic: "type": "github"
- Line 7256: Implements application logic: }
- Line 7257: Implements application logic: ],
- Line 7258: Implements application logic: "time": "2025-02-07T04:59:38+00:00"
- Line 7259: Implements application logic: },
- Line 7260: Implements application logic: {
- Line 7261: Implements application logic: "name": "phpunit/phpunit",
- Line 7262: Implements application logic: "version": "12.5.23",
- Line 7263: Implements application logic: "source": {
- Line 7264: Implements application logic: "type": "git",
- Line 7265: Implements application logic: "url": "https://github.com/sebastianbergmann/phpunit.git",
- Line 7266: Implements application logic: "reference": "c54fcf3d6bcb6e96ac2f7e40097dc37b5f139969"
- Line 7267: Implements application logic: },
- Line 7268: Implements application logic: "dist": {
- Line 7269: Implements application logic: "type": "zip",
- Line 7270: Implements application logic: "url": "https://api.github.com/repos/sebastianbergmann/phpunit/zipball/c54fcf3d6bcb6e96ac2f7e40097dc37b5f139969",
- Line 7271: Implements application logic: "reference": "c54fcf3d6bcb6e96ac2f7e40097dc37b5f139969",
- Line 7272: Implements application logic: "shasum": ""
- Line 7273: Implements application logic: },
- Line 7274: Implements application logic: "require": {
- Line 7275: Implements application logic: "ext-dom": "*",
- Line 7276: Implements application logic: "ext-json": "*",
- Line 7277: Implements application logic: "ext-libxml": "*",
- Line 7278: Implements application logic: "ext-mbstring": "*",
- Line 7279: Implements application logic: "ext-xml": "*",
- Line 7280: Implements application logic: "ext-xmlwriter": "*",
- Line 7281: Implements application logic: "myclabs/deep-copy": "^1.13.4",
- Line 7282: Implements application logic: "phar-io/manifest": "^2.0.4",
- Line 7283: Implements application logic: "phar-io/version": "^3.2.1",
- Line 7284: Implements application logic: "php": ">=8.3",
- Line 7285: Implements application logic: "phpunit/php-code-coverage": "^12.5.6",
- Line 7286: Implements application logic: "phpunit/php-file-iterator": "^6.0.1",
- Line 7287: Implements application logic: "phpunit/php-invoker": "^6.0.0",
- Line 7288: Implements application logic: "phpunit/php-text-template": "^5.0.0",
- Line 7289: Implements application logic: "phpunit/php-timer": "^8.0.0",
- Line 7290: Implements application logic: "sebastian/cli-parser": "^4.2.0",
- Line 7291: Implements application logic: "sebastian/comparator": "^7.1.6",
- Line 7292: Implements application logic: "sebastian/diff": "^7.0.0",
- Line 7293: Implements application logic: "sebastian/environment": "^8.1.0",
- Line 7294: Implements application logic: "sebastian/exporter": "^7.0.2",
- Line 7295: Implements application logic: "sebastian/global-state": "^8.0.2",
- Line 7296: Implements application logic: "sebastian/object-enumerator": "^7.0.0",
- Line 7297: Implements application logic: "sebastian/recursion-context": "^7.0.1",
- Line 7298: Implements application logic: "sebastian/type": "^6.0.3",
- Line 7299: Implements application logic: "sebastian/version": "^6.0.0",
- Line 7300: Implements application logic: "staabm/side-effects-detector": "^1.0.5"
- Line 7301: Implements application logic: },
- Line 7302: Implements application logic: "bin": [
- Line 7303: Implements application logic: "phpunit"
- Line 7304: Implements application logic: ],
- Line 7305: Implements application logic: "type": "library",
- Line 7306: Implements application logic: "extra": {
- Line 7307: Implements application logic: "branch-alias": {
- Line 7308: Implements application logic: "dev-main": "12.5-dev"
- Line 7309: Implements application logic: }
- Line 7310: Implements application logic: },
- Line 7311: Implements application logic: "autoload": {
- Line 7312: Implements application logic: "files": [
- Line 7313: Implements application logic: "src/Framework/Assert/Functions.php"
- Line 7314: Implements application logic: ],
- Line 7315: Implements application logic: "classmap": [
- Line 7316: Implements application logic: "src/"
- Line 7317: Implements application logic: ]
- Line 7318: Implements application logic: },
- Line 7319: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 7320: Implements application logic: "license": [
- Line 7321: Implements application logic: "BSD-3-Clause"
- Line 7322: Implements application logic: ],
- Line 7323: Implements application logic: "authors": [
- Line 7324: Implements application logic: {
- Line 7325: Implements application logic: "name": "Sebastian Bergmann",
- Line 7326: Implements application logic: "email": "sebastian@phpunit.de",
- Line 7327: Implements application logic: "role": "lead"
- Line 7328: Implements application logic: }
- Line 7329: Implements application logic: ],
- Line 7330: Implements application logic: "description": "The PHP Unit Testing framework.",
- Line 7331: Implements application logic: "homepage": "https://phpunit.de/",
- Line 7332: Implements application logic: "keywords": [
- Line 7333: Implements application logic: "phpunit",
- Line 7334: Implements application logic: "testing",
- Line 7335: Implements application logic: "xunit"
- Line 7336: Implements application logic: ],
- Line 7337: Implements application logic: "support": {
- Line 7338: Implements application logic: "issues": "https://github.com/sebastianbergmann/phpunit/issues",
- Line 7339: Implements application logic: "security": "https://github.com/sebastianbergmann/phpunit/security/policy",
- Line 7340: Implements application logic: "source": "https://github.com/sebastianbergmann/phpunit/tree/12.5.23"
- Line 7341: Implements application logic: },
- Line 7342: Implements application logic: "funding": [
- Line 7343: Implements application logic: {
- Line 7344: Implements application logic: "url": "https://phpunit.de/sponsoring.html",
- Line 7345: Implements application logic: "type": "other"
- Line 7346: Implements application logic: }
- Line 7347: Implements application logic: ],
- Line 7348: Implements application logic: "time": "2026-04-18T06:12:49+00:00"
- Line 7349: Implements application logic: },
- Line 7350: Implements application logic: {
- Line 7351: Implements application logic: "name": "sebastian/cli-parser",
- Line 7352: Implements application logic: "version": "4.2.0",
- Line 7353: Implements application logic: "source": {
- Line 7354: Implements application logic: "type": "git",
- Line 7355: Implements application logic: "url": "https://github.com/sebastianbergmann/cli-parser.git",
- Line 7356: Implements application logic: "reference": "90f41072d220e5c40df6e8635f5dafba2d9d4d04"
- Line 7357: Implements application logic: },
- Line 7358: Implements application logic: "dist": {
- Line 7359: Implements application logic: "type": "zip",
- Line 7360: Implements application logic: "url": "https://api.github.com/repos/sebastianbergmann/cli-parser/zipball/90f41072d220e5c40df6e8635f5dafba2d9d4d04",
- Line 7361: Implements application logic: "reference": "90f41072d220e5c40df6e8635f5dafba2d9d4d04",
- Line 7362: Implements application logic: "shasum": ""
- Line 7363: Implements application logic: },
- Line 7364: Implements application logic: "require": {
- Line 7365: Implements application logic: "php": ">=8.3"
- Line 7366: Implements application logic: },
- Line 7367: Implements application logic: "require-dev": {
- Line 7368: Implements application logic: "phpunit/phpunit": "^12.0"
- Line 7369: Implements application logic: },
- Line 7370: Implements application logic: "type": "library",
- Line 7371: Implements application logic: "extra": {
- Line 7372: Implements application logic: "branch-alias": {
- Line 7373: Implements application logic: "dev-main": "4.2-dev"
- Line 7374: Implements application logic: }
- Line 7375: Implements application logic: },
- Line 7376: Implements application logic: "autoload": {
- Line 7377: Implements application logic: "classmap": [
- Line 7378: Implements application logic: "src/"
- Line 7379: Implements application logic: ]
- Line 7380: Implements application logic: },
- Line 7381: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 7382: Implements application logic: "license": [
- Line 7383: Implements application logic: "BSD-3-Clause"
- Line 7384: Implements application logic: ],
- Line 7385: Implements application logic: "authors": [
- Line 7386: Implements application logic: {
- Line 7387: Implements application logic: "name": "Sebastian Bergmann",
- Line 7388: Implements application logic: "email": "sebastian@phpunit.de",
- Line 7389: Implements application logic: "role": "lead"
- Line 7390: Implements application logic: }
- Line 7391: Implements application logic: ],
- Line 7392: Implements application logic: "description": "Library for parsing CLI options",
- Line 7393: Implements application logic: "homepage": "https://github.com/sebastianbergmann/cli-parser",
- Line 7394: Implements application logic: "support": {
- Line 7395: Implements application logic: "issues": "https://github.com/sebastianbergmann/cli-parser/issues",
- Line 7396: Implements application logic: "security": "https://github.com/sebastianbergmann/cli-parser/security/policy",
- Line 7397: Implements application logic: "source": "https://github.com/sebastianbergmann/cli-parser/tree/4.2.0"
- Line 7398: Implements application logic: },
- Line 7399: Implements application logic: "funding": [
- Line 7400: Implements application logic: {
- Line 7401: Implements application logic: "url": "https://github.com/sebastianbergmann",
- Line 7402: Implements application logic: "type": "github"
- Line 7403: Implements application logic: },
- Line 7404: Implements application logic: {
- Line 7405: Implements application logic: "url": "https://liberapay.com/sebastianbergmann",
- Line 7406: Implements application logic: "type": "liberapay"
- Line 7407: Implements application logic: },
- Line 7408: Implements application logic: {
- Line 7409: Implements application logic: "url": "https://thanks.dev/u/gh/sebastianbergmann",
- Line 7410: Implements application logic: "type": "thanks_dev"
- Line 7411: Implements application logic: },
- Line 7412: Implements application logic: {
- Line 7413: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/sebastian/cli-parser",
- Line 7414: Implements application logic: "type": "tidelift"
- Line 7415: Implements application logic: }
- Line 7416: Implements application logic: ],
- Line 7417: Implements application logic: "time": "2025-09-14T09:36:45+00:00"
- Line 7418: Implements application logic: },
- Line 7419: Implements application logic: {
- Line 7420: Implements application logic: "name": "sebastian/comparator",
- Line 7421: Implements application logic: "version": "7.1.6",
- Line 7422: Implements application logic: "source": {
- Line 7423: Implements application logic: "type": "git",
- Line 7424: Implements application logic: "url": "https://github.com/sebastianbergmann/comparator.git",
- Line 7425: Implements application logic: "reference": "c769009dee98f494e0edc3fd4f4087501688f11e"
- Line 7426: Implements application logic: },
- Line 7427: Implements application logic: "dist": {
- Line 7428: Implements application logic: "type": "zip",
- Line 7429: Implements application logic: "url": "https://api.github.com/repos/sebastianbergmann/comparator/zipball/c769009dee98f494e0edc3fd4f4087501688f11e",
- Line 7430: Implements application logic: "reference": "c769009dee98f494e0edc3fd4f4087501688f11e",
- Line 7431: Implements application logic: "shasum": ""
- Line 7432: Implements application logic: },
- Line 7433: Implements application logic: "require": {
- Line 7434: Implements application logic: "ext-dom": "*",
- Line 7435: Implements application logic: "ext-mbstring": "*",
- Line 7436: Implements application logic: "php": ">=8.3",
- Line 7437: Implements application logic: "sebastian/diff": "^7.0",
- Line 7438: Implements application logic: "sebastian/exporter": "^7.0"
- Line 7439: Implements application logic: },
- Line 7440: Implements application logic: "require-dev": {
- Line 7441: Implements application logic: "phpunit/phpunit": "^12.2"
- Line 7442: Implements application logic: },
- Line 7443: Implements application logic: "suggest": {
- Line 7444: Implements application logic: "ext-bcmath": "For comparing BcMath\\Number objects"
- Line 7445: Implements application logic: },
- Line 7446: Implements application logic: "type": "library",
- Line 7447: Implements application logic: "extra": {
- Line 7448: Implements application logic: "branch-alias": {
- Line 7449: Implements application logic: "dev-main": "7.1-dev"
- Line 7450: Implements application logic: }
- Line 7451: Implements application logic: },
- Line 7452: Implements application logic: "autoload": {
- Line 7453: Implements application logic: "classmap": [
- Line 7454: Implements application logic: "src/"
- Line 7455: Implements application logic: ]
- Line 7456: Implements application logic: },
- Line 7457: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 7458: Implements application logic: "license": [
- Line 7459: Implements application logic: "BSD-3-Clause"
- Line 7460: Implements application logic: ],
- Line 7461: Implements application logic: "authors": [
- Line 7462: Implements application logic: {
- Line 7463: Implements application logic: "name": "Sebastian Bergmann",
- Line 7464: Implements application logic: "email": "sebastian@phpunit.de"
- Line 7465: Implements application logic: },
- Line 7466: Implements application logic: {
- Line 7467: Implements application logic: "name": "Jeff Welch",
- Line 7468: Implements application logic: "email": "whatthejeff@gmail.com"
- Line 7469: Implements application logic: },
- Line 7470: Implements application logic: {
- Line 7471: Implements application logic: "name": "Volker Dusch",
- Line 7472: Implements application logic: "email": "github@wallbash.com"
- Line 7473: Implements application logic: },
- Line 7474: Implements application logic: {
- Line 7475: Implements application logic: "name": "Bernhard Schussek",
- Line 7476: Implements application logic: "email": "bschussek@2bepublished.at"
- Line 7477: Implements application logic: }
- Line 7478: Implements application logic: ],
- Line 7479: Implements application logic: "description": "Provides the functionality to compare PHP values for equality",
- Line 7480: Implements application logic: "homepage": "https://github.com/sebastianbergmann/comparator",
- Line 7481: Implements application logic: "keywords": [
- Line 7482: Implements application logic: "comparator",
- Line 7483: Implements application logic: "compare",
- Line 7484: Implements application logic: "equality"
- Line 7485: Implements application logic: ],
- Line 7486: Implements application logic: "support": {
- Line 7487: Implements application logic: "issues": "https://github.com/sebastianbergmann/comparator/issues",
- Line 7488: Implements application logic: "security": "https://github.com/sebastianbergmann/comparator/security/policy",
- Line 7489: Implements application logic: "source": "https://github.com/sebastianbergmann/comparator/tree/7.1.6"
- Line 7490: Implements application logic: },
- Line 7491: Implements application logic: "funding": [
- Line 7492: Implements application logic: {
- Line 7493: Implements application logic: "url": "https://github.com/sebastianbergmann",
- Line 7494: Implements application logic: "type": "github"
- Line 7495: Implements application logic: },
- Line 7496: Implements application logic: {
- Line 7497: Implements application logic: "url": "https://liberapay.com/sebastianbergmann",
- Line 7498: Implements application logic: "type": "liberapay"
- Line 7499: Implements application logic: },
- Line 7500: Implements application logic: {
- Line 7501: Implements application logic: "url": "https://thanks.dev/u/gh/sebastianbergmann",
- Line 7502: Implements application logic: "type": "thanks_dev"
- Line 7503: Implements application logic: },
- Line 7504: Implements application logic: {
- Line 7505: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/sebastian/comparator",
- Line 7506: Implements application logic: "type": "tidelift"
- Line 7507: Implements application logic: }
- Line 7508: Implements application logic: ],
- Line 7509: Implements application logic: "time": "2026-04-14T08:23:15+00:00"
- Line 7510: Implements application logic: },
- Line 7511: Implements application logic: {
- Line 7512: Implements application logic: "name": "sebastian/complexity",
- Line 7513: Implements application logic: "version": "5.0.0",
- Line 7514: Implements application logic: "source": {
- Line 7515: Implements application logic: "type": "git",
- Line 7516: Implements application logic: "url": "https://github.com/sebastianbergmann/complexity.git",
- Line 7517: Implements application logic: "reference": "bad4316aba5303d0221f43f8cee37eb58d384bbb"
- Line 7518: Implements application logic: },
- Line 7519: Implements application logic: "dist": {
- Line 7520: Implements application logic: "type": "zip",
- Line 7521: Implements application logic: "url": "https://api.github.com/repos/sebastianbergmann/complexity/zipball/bad4316aba5303d0221f43f8cee37eb58d384bbb",
- Line 7522: Implements application logic: "reference": "bad4316aba5303d0221f43f8cee37eb58d384bbb",
- Line 7523: Implements application logic: "shasum": ""
- Line 7524: Implements application logic: },
- Line 7525: Implements application logic: "require": {
- Line 7526: Implements application logic: "nikic/php-parser": "^5.0",
- Line 7527: Implements application logic: "php": ">=8.3"
- Line 7528: Implements application logic: },
- Line 7529: Implements application logic: "require-dev": {
- Line 7530: Implements application logic: "phpunit/phpunit": "^12.0"
- Line 7531: Implements application logic: },
- Line 7532: Implements application logic: "type": "library",
- Line 7533: Implements application logic: "extra": {
- Line 7534: Implements application logic: "branch-alias": {
- Line 7535: Implements application logic: "dev-main": "5.0-dev"
- Line 7536: Implements application logic: }
- Line 7537: Implements application logic: },
- Line 7538: Implements application logic: "autoload": {
- Line 7539: Implements application logic: "classmap": [
- Line 7540: Implements application logic: "src/"
- Line 7541: Implements application logic: ]
- Line 7542: Implements application logic: },
- Line 7543: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 7544: Implements application logic: "license": [
- Line 7545: Implements application logic: "BSD-3-Clause"
- Line 7546: Implements application logic: ],
- Line 7547: Implements application logic: "authors": [
- Line 7548: Implements application logic: {
- Line 7549: Implements application logic: "name": "Sebastian Bergmann",
- Line 7550: Implements application logic: "email": "sebastian@phpunit.de",
- Line 7551: Implements application logic: "role": "lead"
- Line 7552: Implements application logic: }
- Line 7553: Implements application logic: ],
- Line 7554: Implements application logic: "description": "Library for calculating the complexity of PHP code units",
- Line 7555: Implements application logic: "homepage": "https://github.com/sebastianbergmann/complexity",
- Line 7556: Implements application logic: "support": {
- Line 7557: Implements application logic: "issues": "https://github.com/sebastianbergmann/complexity/issues",
- Line 7558: Implements application logic: "security": "https://github.com/sebastianbergmann/complexity/security/policy",
- Line 7559: Implements application logic: "source": "https://github.com/sebastianbergmann/complexity/tree/5.0.0"
- Line 7560: Implements application logic: },
- Line 7561: Implements application logic: "funding": [
- Line 7562: Implements application logic: {
- Line 7563: Implements application logic: "url": "https://github.com/sebastianbergmann",
- Line 7564: Implements application logic: "type": "github"
- Line 7565: Implements application logic: }
- Line 7566: Implements application logic: ],
- Line 7567: Implements application logic: "time": "2025-02-07T04:55:25+00:00"
- Line 7568: Implements application logic: },
- Line 7569: Implements application logic: {
- Line 7570: Implements application logic: "name": "sebastian/diff",
- Line 7571: Implements application logic: "version": "7.0.0",
- Line 7572: Implements application logic: "source": {
- Line 7573: Implements application logic: "type": "git",
- Line 7574: Implements application logic: "url": "https://github.com/sebastianbergmann/diff.git",
- Line 7575: Implements application logic: "reference": "7ab1ea946c012266ca32390913653d844ecd085f"
- Line 7576: Implements application logic: },
- Line 7577: Implements application logic: "dist": {
- Line 7578: Implements application logic: "type": "zip",
- Line 7579: Implements application logic: "url": "https://api.github.com/repos/sebastianbergmann/diff/zipball/7ab1ea946c012266ca32390913653d844ecd085f",
- Line 7580: Implements application logic: "reference": "7ab1ea946c012266ca32390913653d844ecd085f",
- Line 7581: Implements application logic: "shasum": ""
- Line 7582: Implements application logic: },
- Line 7583: Implements application logic: "require": {
- Line 7584: Implements application logic: "php": ">=8.3"
- Line 7585: Implements application logic: },
- Line 7586: Implements application logic: "require-dev": {
- Line 7587: Implements application logic: "phpunit/phpunit": "^12.0",
- Line 7588: Implements application logic: "symfony/process": "^7.2"
- Line 7589: Implements application logic: },
- Line 7590: Implements application logic: "type": "library",
- Line 7591: Implements application logic: "extra": {
- Line 7592: Implements application logic: "branch-alias": {
- Line 7593: Implements application logic: "dev-main": "7.0-dev"
- Line 7594: Implements application logic: }
- Line 7595: Implements application logic: },
- Line 7596: Implements application logic: "autoload": {
- Line 7597: Implements application logic: "classmap": [
- Line 7598: Implements application logic: "src/"
- Line 7599: Implements application logic: ]
- Line 7600: Implements application logic: },
- Line 7601: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 7602: Implements application logic: "license": [
- Line 7603: Implements application logic: "BSD-3-Clause"
- Line 7604: Implements application logic: ],
- Line 7605: Implements application logic: "authors": [
- Line 7606: Implements application logic: {
- Line 7607: Implements application logic: "name": "Sebastian Bergmann",
- Line 7608: Implements application logic: "email": "sebastian@phpunit.de"
- Line 7609: Implements application logic: },
- Line 7610: Implements application logic: {
- Line 7611: Implements application logic: "name": "Kore Nordmann",
- Line 7612: Implements application logic: "email": "mail@kore-nordmann.de"
- Line 7613: Implements application logic: }
- Line 7614: Implements application logic: ],
- Line 7615: Implements application logic: "description": "Diff implementation",
- Line 7616: Implements application logic: "homepage": "https://github.com/sebastianbergmann/diff",
- Line 7617: Implements application logic: "keywords": [
- Line 7618: Implements application logic: "diff",
- Line 7619: Implements application logic: "udiff",
- Line 7620: Implements application logic: "unidiff",
- Line 7621: Implements application logic: "unified diff"
- Line 7622: Implements application logic: ],
- Line 7623: Implements application logic: "support": {
- Line 7624: Implements application logic: "issues": "https://github.com/sebastianbergmann/diff/issues",
- Line 7625: Implements application logic: "security": "https://github.com/sebastianbergmann/diff/security/policy",
- Line 7626: Implements application logic: "source": "https://github.com/sebastianbergmann/diff/tree/7.0.0"
- Line 7627: Implements application logic: },
- Line 7628: Implements application logic: "funding": [
- Line 7629: Implements application logic: {
- Line 7630: Implements application logic: "url": "https://github.com/sebastianbergmann",
- Line 7631: Implements application logic: "type": "github"
- Line 7632: Implements application logic: }
- Line 7633: Implements application logic: ],
- Line 7634: Implements application logic: "time": "2025-02-07T04:55:46+00:00"
- Line 7635: Implements application logic: },
- Line 7636: Implements application logic: {
- Line 7637: Implements application logic: "name": "sebastian/environment",
- Line 7638: Implements application logic: "version": "8.1.0",
- Line 7639: Implements application logic: "source": {
- Line 7640: Implements application logic: "type": "git",
- Line 7641: Implements application logic: "url": "https://github.com/sebastianbergmann/environment.git",
- Line 7642: Implements application logic: "reference": "b121608b28a13f721e76ffbbd386d08eff58f3f6"
- Line 7643: Implements application logic: },
- Line 7644: Implements application logic: "dist": {
- Line 7645: Implements application logic: "type": "zip",
- Line 7646: Implements application logic: "url": "https://api.github.com/repos/sebastianbergmann/environment/zipball/b121608b28a13f721e76ffbbd386d08eff58f3f6",
- Line 7647: Implements application logic: "reference": "b121608b28a13f721e76ffbbd386d08eff58f3f6",
- Line 7648: Implements application logic: "shasum": ""
- Line 7649: Implements application logic: },
- Line 7650: Implements application logic: "require": {
- Line 7651: Implements application logic: "php": ">=8.3"
- Line 7652: Implements application logic: },
- Line 7653: Implements application logic: "require-dev": {
- Line 7654: Implements application logic: "phpunit/phpunit": "^12.0"
- Line 7655: Implements application logic: },
- Line 7656: Implements application logic: "suggest": {
- Line 7657: Implements application logic: "ext-posix": "*"
- Line 7658: Implements application logic: },
- Line 7659: Implements application logic: "type": "library",
- Line 7660: Implements application logic: "extra": {
- Line 7661: Implements application logic: "branch-alias": {
- Line 7662: Implements application logic: "dev-main": "8.1-dev"
- Line 7663: Implements application logic: }
- Line 7664: Implements application logic: },
- Line 7665: Implements application logic: "autoload": {
- Line 7666: Implements application logic: "classmap": [
- Line 7667: Implements application logic: "src/"
- Line 7668: Implements application logic: ]
- Line 7669: Implements application logic: },
- Line 7670: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 7671: Implements application logic: "license": [
- Line 7672: Implements application logic: "BSD-3-Clause"
- Line 7673: Implements application logic: ],
- Line 7674: Implements application logic: "authors": [
- Line 7675: Implements application logic: {
- Line 7676: Implements application logic: "name": "Sebastian Bergmann",
- Line 7677: Implements application logic: "email": "sebastian@phpunit.de"
- Line 7678: Implements application logic: }
- Line 7679: Implements application logic: ],
- Line 7680: Implements application logic: "description": "Provides functionality to handle HHVM/PHP environments",
- Line 7681: Implements application logic: "homepage": "https://github.com/sebastianbergmann/environment",
- Line 7682: Implements application logic: "keywords": [
- Line 7683: Implements application logic: "Xdebug",
- Line 7684: Implements application logic: "environment",
- Line 7685: Implements application logic: "hhvm"
- Line 7686: Implements application logic: ],
- Line 7687: Implements application logic: "support": {
- Line 7688: Implements application logic: "issues": "https://github.com/sebastianbergmann/environment/issues",
- Line 7689: Implements application logic: "security": "https://github.com/sebastianbergmann/environment/security/policy",
- Line 7690: Implements application logic: "source": "https://github.com/sebastianbergmann/environment/tree/8.1.0"
- Line 7691: Implements application logic: },
- Line 7692: Implements application logic: "funding": [
- Line 7693: Implements application logic: {
- Line 7694: Implements application logic: "url": "https://github.com/sebastianbergmann",
- Line 7695: Implements application logic: "type": "github"
- Line 7696: Implements application logic: },
- Line 7697: Implements application logic: {
- Line 7698: Implements application logic: "url": "https://liberapay.com/sebastianbergmann",
- Line 7699: Implements application logic: "type": "liberapay"
- Line 7700: Implements application logic: },
- Line 7701: Implements application logic: {
- Line 7702: Implements application logic: "url": "https://thanks.dev/u/gh/sebastianbergmann",
- Line 7703: Implements application logic: "type": "thanks_dev"
- Line 7704: Implements application logic: },
- Line 7705: Implements application logic: {
- Line 7706: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/sebastian/environment",
- Line 7707: Implements application logic: "type": "tidelift"
- Line 7708: Implements application logic: }
- Line 7709: Implements application logic: ],
- Line 7710: Implements application logic: "time": "2026-04-15T12:13:01+00:00"
- Line 7711: Implements application logic: },
- Line 7712: Implements application logic: {
- Line 7713: Implements application logic: "name": "sebastian/exporter",
- Line 7714: Implements application logic: "version": "7.0.2",
- Line 7715: Implements application logic: "source": {
- Line 7716: Implements application logic: "type": "git",
- Line 7717: Implements application logic: "url": "https://github.com/sebastianbergmann/exporter.git",
- Line 7718: Implements application logic: "reference": "016951ae10980765e4e7aee491eb288c64e505b7"
- Line 7719: Implements application logic: },
- Line 7720: Implements application logic: "dist": {
- Line 7721: Implements application logic: "type": "zip",
- Line 7722: Implements application logic: "url": "https://api.github.com/repos/sebastianbergmann/exporter/zipball/016951ae10980765e4e7aee491eb288c64e505b7",
- Line 7723: Implements application logic: "reference": "016951ae10980765e4e7aee491eb288c64e505b7",
- Line 7724: Implements application logic: "shasum": ""
- Line 7725: Implements application logic: },
- Line 7726: Implements application logic: "require": {
- Line 7727: Implements application logic: "ext-mbstring": "*",
- Line 7728: Implements application logic: "php": ">=8.3",
- Line 7729: Implements application logic: "sebastian/recursion-context": "^7.0"
- Line 7730: Implements application logic: },
- Line 7731: Implements application logic: "require-dev": {
- Line 7732: Implements application logic: "phpunit/phpunit": "^12.0"
- Line 7733: Implements application logic: },
- Line 7734: Implements application logic: "type": "library",
- Line 7735: Implements application logic: "extra": {
- Line 7736: Implements application logic: "branch-alias": {
- Line 7737: Implements application logic: "dev-main": "7.0-dev"
- Line 7738: Implements application logic: }
- Line 7739: Implements application logic: },
- Line 7740: Implements application logic: "autoload": {
- Line 7741: Implements application logic: "classmap": [
- Line 7742: Implements application logic: "src/"
- Line 7743: Implements application logic: ]
- Line 7744: Implements application logic: },
- Line 7745: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 7746: Implements application logic: "license": [
- Line 7747: Implements application logic: "BSD-3-Clause"
- Line 7748: Implements application logic: ],
- Line 7749: Implements application logic: "authors": [
- Line 7750: Implements application logic: {
- Line 7751: Implements application logic: "name": "Sebastian Bergmann",
- Line 7752: Implements application logic: "email": "sebastian@phpunit.de"
- Line 7753: Implements application logic: },
- Line 7754: Implements application logic: {
- Line 7755: Implements application logic: "name": "Jeff Welch",
- Line 7756: Implements application logic: "email": "whatthejeff@gmail.com"
- Line 7757: Implements application logic: },
- Line 7758: Implements application logic: {
- Line 7759: Implements application logic: "name": "Volker Dusch",
- Line 7760: Implements application logic: "email": "github@wallbash.com"
- Line 7761: Implements application logic: },
- Line 7762: Implements application logic: {
- Line 7763: Implements application logic: "name": "Adam Harvey",
- Line 7764: Implements application logic: "email": "aharvey@php.net"
- Line 7765: Implements application logic: },
- Line 7766: Implements application logic: {
- Line 7767: Implements application logic: "name": "Bernhard Schussek",
- Line 7768: Implements application logic: "email": "bschussek@gmail.com"
- Line 7769: Implements application logic: }
- Line 7770: Implements application logic: ],
- Line 7771: Implements application logic: "description": "Provides the functionality to export PHP variables for visualization",
- Line 7772: Implements application logic: "homepage": "https://www.github.com/sebastianbergmann/exporter",
- Line 7773: Implements application logic: "keywords": [
- Line 7774: Implements application logic: "export",
- Line 7775: Implements application logic: "exporter"
- Line 7776: Implements application logic: ],
- Line 7777: Implements application logic: "support": {
- Line 7778: Implements application logic: "issues": "https://github.com/sebastianbergmann/exporter/issues",
- Line 7779: Implements application logic: "security": "https://github.com/sebastianbergmann/exporter/security/policy",
- Line 7780: Implements application logic: "source": "https://github.com/sebastianbergmann/exporter/tree/7.0.2"
- Line 7781: Implements application logic: },
- Line 7782: Implements application logic: "funding": [
- Line 7783: Implements application logic: {
- Line 7784: Implements application logic: "url": "https://github.com/sebastianbergmann",
- Line 7785: Implements application logic: "type": "github"
- Line 7786: Implements application logic: },
- Line 7787: Implements application logic: {
- Line 7788: Implements application logic: "url": "https://liberapay.com/sebastianbergmann",
- Line 7789: Implements application logic: "type": "liberapay"
- Line 7790: Implements application logic: },
- Line 7791: Implements application logic: {
- Line 7792: Implements application logic: "url": "https://thanks.dev/u/gh/sebastianbergmann",
- Line 7793: Implements application logic: "type": "thanks_dev"
- Line 7794: Implements application logic: },
- Line 7795: Implements application logic: {
- Line 7796: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/sebastian/exporter",
- Line 7797: Implements application logic: "type": "tidelift"
- Line 7798: Implements application logic: }
- Line 7799: Implements application logic: ],
- Line 7800: Implements application logic: "time": "2025-09-24T06:16:11+00:00"
- Line 7801: Implements application logic: },
- Line 7802: Implements application logic: {
- Line 7803: Implements application logic: "name": "sebastian/global-state",
- Line 7804: Implements application logic: "version": "8.0.2",
- Line 7805: Implements application logic: "source": {
- Line 7806: Implements application logic: "type": "git",
- Line 7807: Implements application logic: "url": "https://github.com/sebastianbergmann/global-state.git",
- Line 7808: Implements application logic: "reference": "ef1377171613d09edd25b7816f05be8313f9115d"
- Line 7809: Implements application logic: },
- Line 7810: Implements application logic: "dist": {
- Line 7811: Implements application logic: "type": "zip",
- Line 7812: Implements application logic: "url": "https://api.github.com/repos/sebastianbergmann/global-state/zipball/ef1377171613d09edd25b7816f05be8313f9115d",
- Line 7813: Implements application logic: "reference": "ef1377171613d09edd25b7816f05be8313f9115d",
- Line 7814: Implements application logic: "shasum": ""
- Line 7815: Implements application logic: },
- Line 7816: Implements application logic: "require": {
- Line 7817: Implements application logic: "php": ">=8.3",
- Line 7818: Implements application logic: "sebastian/object-reflector": "^5.0",
- Line 7819: Implements application logic: "sebastian/recursion-context": "^7.0"
- Line 7820: Implements application logic: },
- Line 7821: Implements application logic: "require-dev": {
- Line 7822: Implements application logic: "ext-dom": "*",
- Line 7823: Implements application logic: "phpunit/phpunit": "^12.0"
- Line 7824: Implements application logic: },
- Line 7825: Implements application logic: "type": "library",
- Line 7826: Implements application logic: "extra": {
- Line 7827: Implements application logic: "branch-alias": {
- Line 7828: Implements application logic: "dev-main": "8.0-dev"
- Line 7829: Implements application logic: }
- Line 7830: Implements application logic: },
- Line 7831: Implements application logic: "autoload": {
- Line 7832: Implements application logic: "classmap": [
- Line 7833: Implements application logic: "src/"
- Line 7834: Implements application logic: ]
- Line 7835: Implements application logic: },
- Line 7836: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 7837: Implements application logic: "license": [
- Line 7838: Implements application logic: "BSD-3-Clause"
- Line 7839: Implements application logic: ],
- Line 7840: Implements application logic: "authors": [
- Line 7841: Implements application logic: {
- Line 7842: Implements application logic: "name": "Sebastian Bergmann",
- Line 7843: Implements application logic: "email": "sebastian@phpunit.de"
- Line 7844: Implements application logic: }
- Line 7845: Implements application logic: ],
- Line 7846: Implements application logic: "description": "Snapshotting of global state",
- Line 7847: Implements application logic: "homepage": "https://www.github.com/sebastianbergmann/global-state",
- Line 7848: Implements application logic: "keywords": [
- Line 7849: Implements application logic: "global state"
- Line 7850: Implements application logic: ],
- Line 7851: Implements application logic: "support": {
- Line 7852: Implements application logic: "issues": "https://github.com/sebastianbergmann/global-state/issues",
- Line 7853: Implements application logic: "security": "https://github.com/sebastianbergmann/global-state/security/policy",
- Line 7854: Implements application logic: "source": "https://github.com/sebastianbergmann/global-state/tree/8.0.2"
- Line 7855: Implements application logic: },
- Line 7856: Implements application logic: "funding": [
- Line 7857: Implements application logic: {
- Line 7858: Implements application logic: "url": "https://github.com/sebastianbergmann",
- Line 7859: Implements application logic: "type": "github"
- Line 7860: Implements application logic: },
- Line 7861: Implements application logic: {
- Line 7862: Implements application logic: "url": "https://liberapay.com/sebastianbergmann",
- Line 7863: Implements application logic: "type": "liberapay"
- Line 7864: Implements application logic: },
- Line 7865: Implements application logic: {
- Line 7866: Implements application logic: "url": "https://thanks.dev/u/gh/sebastianbergmann",
- Line 7867: Implements application logic: "type": "thanks_dev"
- Line 7868: Implements application logic: },
- Line 7869: Implements application logic: {
- Line 7870: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/sebastian/global-state",
- Line 7871: Implements application logic: "type": "tidelift"
- Line 7872: Implements application logic: }
- Line 7873: Implements application logic: ],
- Line 7874: Implements application logic: "time": "2025-08-29T11:29:25+00:00"
- Line 7875: Implements application logic: },
- Line 7876: Implements application logic: {
- Line 7877: Implements application logic: "name": "sebastian/lines-of-code",
- Line 7878: Implements application logic: "version": "4.0.0",
- Line 7879: Implements application logic: "source": {
- Line 7880: Implements application logic: "type": "git",
- Line 7881: Implements application logic: "url": "https://github.com/sebastianbergmann/lines-of-code.git",
- Line 7882: Implements application logic: "reference": "97ffee3bcfb5805568d6af7f0f893678fc076d2f"
- Line 7883: Implements application logic: },
- Line 7884: Implements application logic: "dist": {
- Line 7885: Implements application logic: "type": "zip",
- Line 7886: Implements application logic: "url": "https://api.github.com/repos/sebastianbergmann/lines-of-code/zipball/97ffee3bcfb5805568d6af7f0f893678fc076d2f",
- Line 7887: Implements application logic: "reference": "97ffee3bcfb5805568d6af7f0f893678fc076d2f",
- Line 7888: Implements application logic: "shasum": ""
- Line 7889: Implements application logic: },
- Line 7890: Implements application logic: "require": {
- Line 7891: Implements application logic: "nikic/php-parser": "^5.0",
- Line 7892: Implements application logic: "php": ">=8.3"
- Line 7893: Implements application logic: },
- Line 7894: Implements application logic: "require-dev": {
- Line 7895: Implements application logic: "phpunit/phpunit": "^12.0"
- Line 7896: Implements application logic: },
- Line 7897: Implements application logic: "type": "library",
- Line 7898: Implements application logic: "extra": {
- Line 7899: Implements application logic: "branch-alias": {
- Line 7900: Implements application logic: "dev-main": "4.0-dev"
- Line 7901: Implements application logic: }
- Line 7902: Implements application logic: },
- Line 7903: Implements application logic: "autoload": {
- Line 7904: Implements application logic: "classmap": [
- Line 7905: Implements application logic: "src/"
- Line 7906: Implements application logic: ]
- Line 7907: Implements application logic: },
- Line 7908: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 7909: Implements application logic: "license": [
- Line 7910: Implements application logic: "BSD-3-Clause"
- Line 7911: Implements application logic: ],
- Line 7912: Implements application logic: "authors": [
- Line 7913: Implements application logic: {
- Line 7914: Implements application logic: "name": "Sebastian Bergmann",
- Line 7915: Implements application logic: "email": "sebastian@phpunit.de",
- Line 7916: Implements application logic: "role": "lead"
- Line 7917: Implements application logic: }
- Line 7918: Implements application logic: ],
- Line 7919: Implements application logic: "description": "Library for counting the lines of code in PHP source code",
- Line 7920: Implements application logic: "homepage": "https://github.com/sebastianbergmann/lines-of-code",
- Line 7921: Implements application logic: "support": {
- Line 7922: Implements application logic: "issues": "https://github.com/sebastianbergmann/lines-of-code/issues",
- Line 7923: Implements application logic: "security": "https://github.com/sebastianbergmann/lines-of-code/security/policy",
- Line 7924: Implements application logic: "source": "https://github.com/sebastianbergmann/lines-of-code/tree/4.0.0"
- Line 7925: Implements application logic: },
- Line 7926: Implements application logic: "funding": [
- Line 7927: Implements application logic: {
- Line 7928: Implements application logic: "url": "https://github.com/sebastianbergmann",
- Line 7929: Implements application logic: "type": "github"
- Line 7930: Implements application logic: }
- Line 7931: Implements application logic: ],
- Line 7932: Implements application logic: "time": "2025-02-07T04:57:28+00:00"
- Line 7933: Implements application logic: },
- Line 7934: Implements application logic: {
- Line 7935: Implements application logic: "name": "sebastian/object-enumerator",
- Line 7936: Implements application logic: "version": "7.0.0",
- Line 7937: Implements application logic: "source": {
- Line 7938: Implements application logic: "type": "git",
- Line 7939: Implements application logic: "url": "https://github.com/sebastianbergmann/object-enumerator.git",
- Line 7940: Implements application logic: "reference": "1effe8e9b8e068e9ae228e542d5d11b5d16db894"
- Line 7941: Implements application logic: },
- Line 7942: Implements application logic: "dist": {
- Line 7943: Implements application logic: "type": "zip",
- Line 7944: Implements application logic: "url": "https://api.github.com/repos/sebastianbergmann/object-enumerator/zipball/1effe8e9b8e068e9ae228e542d5d11b5d16db894",
- Line 7945: Implements application logic: "reference": "1effe8e9b8e068e9ae228e542d5d11b5d16db894",
- Line 7946: Implements application logic: "shasum": ""
- Line 7947: Implements application logic: },
- Line 7948: Implements application logic: "require": {
- Line 7949: Implements application logic: "php": ">=8.3",
- Line 7950: Implements application logic: "sebastian/object-reflector": "^5.0",
- Line 7951: Implements application logic: "sebastian/recursion-context": "^7.0"
- Line 7952: Implements application logic: },
- Line 7953: Implements application logic: "require-dev": {
- Line 7954: Implements application logic: "phpunit/phpunit": "^12.0"
- Line 7955: Implements application logic: },
- Line 7956: Implements application logic: "type": "library",
- Line 7957: Implements application logic: "extra": {
- Line 7958: Implements application logic: "branch-alias": {
- Line 7959: Implements application logic: "dev-main": "7.0-dev"
- Line 7960: Implements application logic: }
- Line 7961: Implements application logic: },
- Line 7962: Implements application logic: "autoload": {
- Line 7963: Implements application logic: "classmap": [
- Line 7964: Implements application logic: "src/"
- Line 7965: Implements application logic: ]
- Line 7966: Implements application logic: },
- Line 7967: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 7968: Implements application logic: "license": [
- Line 7969: Implements application logic: "BSD-3-Clause"
- Line 7970: Implements application logic: ],
- Line 7971: Implements application logic: "authors": [
- Line 7972: Implements application logic: {
- Line 7973: Implements application logic: "name": "Sebastian Bergmann",
- Line 7974: Implements application logic: "email": "sebastian@phpunit.de"
- Line 7975: Implements application logic: }
- Line 7976: Implements application logic: ],
- Line 7977: Implements application logic: "description": "Traverses array structures and object graphs to enumerate all referenced objects",
- Line 7978: Implements application logic: "homepage": "https://github.com/sebastianbergmann/object-enumerator/",
- Line 7979: Implements application logic: "support": {
- Line 7980: Implements application logic: "issues": "https://github.com/sebastianbergmann/object-enumerator/issues",
- Line 7981: Implements application logic: "security": "https://github.com/sebastianbergmann/object-enumerator/security/policy",
- Line 7982: Implements application logic: "source": "https://github.com/sebastianbergmann/object-enumerator/tree/7.0.0"
- Line 7983: Implements application logic: },
- Line 7984: Implements application logic: "funding": [
- Line 7985: Implements application logic: {
- Line 7986: Implements application logic: "url": "https://github.com/sebastianbergmann",
- Line 7987: Implements application logic: "type": "github"
- Line 7988: Implements application logic: }
- Line 7989: Implements application logic: ],
- Line 7990: Implements application logic: "time": "2025-02-07T04:57:48+00:00"
- Line 7991: Implements application logic: },
- Line 7992: Implements application logic: {
- Line 7993: Implements application logic: "name": "sebastian/object-reflector",
- Line 7994: Implements application logic: "version": "5.0.0",
- Line 7995: Implements application logic: "source": {
- Line 7996: Implements application logic: "type": "git",
- Line 7997: Implements application logic: "url": "https://github.com/sebastianbergmann/object-reflector.git",
- Line 7998: Implements application logic: "reference": "4bfa827c969c98be1e527abd576533293c634f6a"
- Line 7999: Implements application logic: },
- Line 8000: Implements application logic: "dist": {
- Line 8001: Implements application logic: "type": "zip",
- Line 8002: Implements application logic: "url": "https://api.github.com/repos/sebastianbergmann/object-reflector/zipball/4bfa827c969c98be1e527abd576533293c634f6a",
- Line 8003: Implements application logic: "reference": "4bfa827c969c98be1e527abd576533293c634f6a",
- Line 8004: Implements application logic: "shasum": ""
- Line 8005: Implements application logic: },
- Line 8006: Implements application logic: "require": {
- Line 8007: Implements application logic: "php": ">=8.3"
- Line 8008: Implements application logic: },
- Line 8009: Implements application logic: "require-dev": {
- Line 8010: Implements application logic: "phpunit/phpunit": "^12.0"
- Line 8011: Implements application logic: },
- Line 8012: Implements application logic: "type": "library",
- Line 8013: Implements application logic: "extra": {
- Line 8014: Implements application logic: "branch-alias": {
- Line 8015: Implements application logic: "dev-main": "5.0-dev"
- Line 8016: Implements application logic: }
- Line 8017: Implements application logic: },
- Line 8018: Implements application logic: "autoload": {
- Line 8019: Implements application logic: "classmap": [
- Line 8020: Implements application logic: "src/"
- Line 8021: Implements application logic: ]
- Line 8022: Implements application logic: },
- Line 8023: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 8024: Implements application logic: "license": [
- Line 8025: Implements application logic: "BSD-3-Clause"
- Line 8026: Implements application logic: ],
- Line 8027: Implements application logic: "authors": [
- Line 8028: Implements application logic: {
- Line 8029: Implements application logic: "name": "Sebastian Bergmann",
- Line 8030: Implements application logic: "email": "sebastian@phpunit.de"
- Line 8031: Implements application logic: }
- Line 8032: Implements application logic: ],
- Line 8033: Implements application logic: "description": "Allows reflection of object attributes, including inherited and non-public ones",
- Line 8034: Implements application logic: "homepage": "https://github.com/sebastianbergmann/object-reflector/",
- Line 8035: Implements application logic: "support": {
- Line 8036: Implements application logic: "issues": "https://github.com/sebastianbergmann/object-reflector/issues",
- Line 8037: Implements application logic: "security": "https://github.com/sebastianbergmann/object-reflector/security/policy",
- Line 8038: Implements application logic: "source": "https://github.com/sebastianbergmann/object-reflector/tree/5.0.0"
- Line 8039: Implements application logic: },
- Line 8040: Implements application logic: "funding": [
- Line 8041: Implements application logic: {
- Line 8042: Implements application logic: "url": "https://github.com/sebastianbergmann",
- Line 8043: Implements application logic: "type": "github"
- Line 8044: Implements application logic: }
- Line 8045: Implements application logic: ],
- Line 8046: Implements application logic: "time": "2025-02-07T04:58:17+00:00"
- Line 8047: Implements application logic: },
- Line 8048: Implements application logic: {
- Line 8049: Implements application logic: "name": "sebastian/recursion-context",
- Line 8050: Implements application logic: "version": "7.0.1",
- Line 8051: Implements application logic: "source": {
- Line 8052: Implements application logic: "type": "git",
- Line 8053: Implements application logic: "url": "https://github.com/sebastianbergmann/recursion-context.git",
- Line 8054: Implements application logic: "reference": "0b01998a7d5b1f122911a66bebcb8d46f0c82d8c"
- Line 8055: Implements application logic: },
- Line 8056: Implements application logic: "dist": {
- Line 8057: Implements application logic: "type": "zip",
- Line 8058: Implements application logic: "url": "https://api.github.com/repos/sebastianbergmann/recursion-context/zipball/0b01998a7d5b1f122911a66bebcb8d46f0c82d8c",
- Line 8059: Implements application logic: "reference": "0b01998a7d5b1f122911a66bebcb8d46f0c82d8c",
- Line 8060: Implements application logic: "shasum": ""
- Line 8061: Implements application logic: },
- Line 8062: Implements application logic: "require": {
- Line 8063: Implements application logic: "php": ">=8.3"
- Line 8064: Implements application logic: },
- Line 8065: Implements application logic: "require-dev": {
- Line 8066: Implements application logic: "phpunit/phpunit": "^12.0"
- Line 8067: Implements application logic: },
- Line 8068: Implements application logic: "type": "library",
- Line 8069: Implements application logic: "extra": {
- Line 8070: Implements application logic: "branch-alias": {
- Line 8071: Implements application logic: "dev-main": "7.0-dev"
- Line 8072: Implements application logic: }
- Line 8073: Implements application logic: },
- Line 8074: Implements application logic: "autoload": {
- Line 8075: Implements application logic: "classmap": [
- Line 8076: Implements application logic: "src/"
- Line 8077: Implements application logic: ]
- Line 8078: Implements application logic: },
- Line 8079: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 8080: Implements application logic: "license": [
- Line 8081: Implements application logic: "BSD-3-Clause"
- Line 8082: Implements application logic: ],
- Line 8083: Implements application logic: "authors": [
- Line 8084: Implements application logic: {
- Line 8085: Implements application logic: "name": "Sebastian Bergmann",
- Line 8086: Implements application logic: "email": "sebastian@phpunit.de"
- Line 8087: Implements application logic: },
- Line 8088: Implements application logic: {
- Line 8089: Implements application logic: "name": "Jeff Welch",
- Line 8090: Implements application logic: "email": "whatthejeff@gmail.com"
- Line 8091: Implements application logic: },
- Line 8092: Implements application logic: {
- Line 8093: Implements application logic: "name": "Adam Harvey",
- Line 8094: Implements application logic: "email": "aharvey@php.net"
- Line 8095: Implements application logic: }
- Line 8096: Implements application logic: ],
- Line 8097: Implements application logic: "description": "Provides functionality to recursively process PHP variables",
- Line 8098: Implements application logic: "homepage": "https://github.com/sebastianbergmann/recursion-context",
- Line 8099: Implements application logic: "support": {
- Line 8100: Implements application logic: "issues": "https://github.com/sebastianbergmann/recursion-context/issues",
- Line 8101: Implements application logic: "security": "https://github.com/sebastianbergmann/recursion-context/security/policy",
- Line 8102: Implements application logic: "source": "https://github.com/sebastianbergmann/recursion-context/tree/7.0.1"
- Line 8103: Implements application logic: },
- Line 8104: Implements application logic: "funding": [
- Line 8105: Implements application logic: {
- Line 8106: Implements application logic: "url": "https://github.com/sebastianbergmann",
- Line 8107: Implements application logic: "type": "github"
- Line 8108: Implements application logic: },
- Line 8109: Implements application logic: {
- Line 8110: Implements application logic: "url": "https://liberapay.com/sebastianbergmann",
- Line 8111: Implements application logic: "type": "liberapay"
- Line 8112: Implements application logic: },
- Line 8113: Implements application logic: {
- Line 8114: Implements application logic: "url": "https://thanks.dev/u/gh/sebastianbergmann",
- Line 8115: Implements application logic: "type": "thanks_dev"
- Line 8116: Implements application logic: },
- Line 8117: Implements application logic: {
- Line 8118: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/sebastian/recursion-context",
- Line 8119: Implements application logic: "type": "tidelift"
- Line 8120: Implements application logic: }
- Line 8121: Implements application logic: ],
- Line 8122: Implements application logic: "time": "2025-08-13T04:44:59+00:00"
- Line 8123: Implements application logic: },
- Line 8124: Implements application logic: {
- Line 8125: Implements application logic: "name": "sebastian/type",
- Line 8126: Implements application logic: "version": "6.0.3",
- Line 8127: Implements application logic: "source": {
- Line 8128: Implements application logic: "type": "git",
- Line 8129: Implements application logic: "url": "https://github.com/sebastianbergmann/type.git",
- Line 8130: Implements application logic: "reference": "e549163b9760b8f71f191651d22acf32d56d6d4d"
- Line 8131: Implements application logic: },
- Line 8132: Implements application logic: "dist": {
- Line 8133: Implements application logic: "type": "zip",
- Line 8134: Implements application logic: "url": "https://api.github.com/repos/sebastianbergmann/type/zipball/e549163b9760b8f71f191651d22acf32d56d6d4d",
- Line 8135: Implements application logic: "reference": "e549163b9760b8f71f191651d22acf32d56d6d4d",
- Line 8136: Implements application logic: "shasum": ""
- Line 8137: Implements application logic: },
- Line 8138: Implements application logic: "require": {
- Line 8139: Implements application logic: "php": ">=8.3"
- Line 8140: Implements application logic: },
- Line 8141: Implements application logic: "require-dev": {
- Line 8142: Implements application logic: "phpunit/phpunit": "^12.0"
- Line 8143: Implements application logic: },
- Line 8144: Implements application logic: "type": "library",
- Line 8145: Implements application logic: "extra": {
- Line 8146: Implements application logic: "branch-alias": {
- Line 8147: Implements application logic: "dev-main": "6.0-dev"
- Line 8148: Implements application logic: }
- Line 8149: Implements application logic: },
- Line 8150: Implements application logic: "autoload": {
- Line 8151: Implements application logic: "classmap": [
- Line 8152: Implements application logic: "src/"
- Line 8153: Implements application logic: ]
- Line 8154: Implements application logic: },
- Line 8155: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 8156: Implements application logic: "license": [
- Line 8157: Implements application logic: "BSD-3-Clause"
- Line 8158: Implements application logic: ],
- Line 8159: Implements application logic: "authors": [
- Line 8160: Implements application logic: {
- Line 8161: Implements application logic: "name": "Sebastian Bergmann",
- Line 8162: Implements application logic: "email": "sebastian@phpunit.de",
- Line 8163: Implements application logic: "role": "lead"
- Line 8164: Implements application logic: }
- Line 8165: Implements application logic: ],
- Line 8166: Implements application logic: "description": "Collection of value objects that represent the types of the PHP type system",
- Line 8167: Implements application logic: "homepage": "https://github.com/sebastianbergmann/type",
- Line 8168: Implements application logic: "support": {
- Line 8169: Implements application logic: "issues": "https://github.com/sebastianbergmann/type/issues",
- Line 8170: Implements application logic: "security": "https://github.com/sebastianbergmann/type/security/policy",
- Line 8171: Implements application logic: "source": "https://github.com/sebastianbergmann/type/tree/6.0.3"
- Line 8172: Implements application logic: },
- Line 8173: Implements application logic: "funding": [
- Line 8174: Implements application logic: {
- Line 8175: Implements application logic: "url": "https://github.com/sebastianbergmann",
- Line 8176: Implements application logic: "type": "github"
- Line 8177: Implements application logic: },
- Line 8178: Implements application logic: {
- Line 8179: Implements application logic: "url": "https://liberapay.com/sebastianbergmann",
- Line 8180: Implements application logic: "type": "liberapay"
- Line 8181: Implements application logic: },
- Line 8182: Implements application logic: {
- Line 8183: Implements application logic: "url": "https://thanks.dev/u/gh/sebastianbergmann",
- Line 8184: Implements application logic: "type": "thanks_dev"
- Line 8185: Implements application logic: },
- Line 8186: Implements application logic: {
- Line 8187: Implements application logic: "url": "https://tidelift.com/funding/github/packagist/sebastian/type",
- Line 8188: Implements application logic: "type": "tidelift"
- Line 8189: Implements application logic: }
- Line 8190: Implements application logic: ],
- Line 8191: Implements application logic: "time": "2025-08-09T06:57:12+00:00"
- Line 8192: Implements application logic: },
- Line 8193: Implements application logic: {
- Line 8194: Implements application logic: "name": "sebastian/version",
- Line 8195: Implements application logic: "version": "6.0.0",
- Line 8196: Implements application logic: "source": {
- Line 8197: Implements application logic: "type": "git",
- Line 8198: Implements application logic: "url": "https://github.com/sebastianbergmann/version.git",
- Line 8199: Implements application logic: "reference": "3e6ccf7657d4f0a59200564b08cead899313b53c"
- Line 8200: Implements application logic: },
- Line 8201: Implements application logic: "dist": {
- Line 8202: Implements application logic: "type": "zip",
- Line 8203: Implements application logic: "url": "https://api.github.com/repos/sebastianbergmann/version/zipball/3e6ccf7657d4f0a59200564b08cead899313b53c",
- Line 8204: Implements application logic: "reference": "3e6ccf7657d4f0a59200564b08cead899313b53c",
- Line 8205: Implements application logic: "shasum": ""
- Line 8206: Implements application logic: },
- Line 8207: Implements application logic: "require": {
- Line 8208: Implements application logic: "php": ">=8.3"
- Line 8209: Implements application logic: },
- Line 8210: Implements application logic: "type": "library",
- Line 8211: Implements application logic: "extra": {
- Line 8212: Implements application logic: "branch-alias": {
- Line 8213: Implements application logic: "dev-main": "6.0-dev"
- Line 8214: Implements application logic: }
- Line 8215: Implements application logic: },
- Line 8216: Implements application logic: "autoload": {
- Line 8217: Implements application logic: "classmap": [
- Line 8218: Implements application logic: "src/"
- Line 8219: Implements application logic: ]
- Line 8220: Implements application logic: },
- Line 8221: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 8222: Implements application logic: "license": [
- Line 8223: Implements application logic: "BSD-3-Clause"
- Line 8224: Implements application logic: ],
- Line 8225: Implements application logic: "authors": [
- Line 8226: Implements application logic: {
- Line 8227: Implements application logic: "name": "Sebastian Bergmann",
- Line 8228: Implements application logic: "email": "sebastian@phpunit.de",
- Line 8229: Implements application logic: "role": "lead"
- Line 8230: Implements application logic: }
- Line 8231: Implements application logic: ],
- Line 8232: Implements application logic: "description": "Library that helps with managing the version number of Git-hosted PHP projects",
- Line 8233: Implements application logic: "homepage": "https://github.com/sebastianbergmann/version",
- Line 8234: Implements application logic: "support": {
- Line 8235: Implements application logic: "issues": "https://github.com/sebastianbergmann/version/issues",
- Line 8236: Implements application logic: "security": "https://github.com/sebastianbergmann/version/security/policy",
- Line 8237: Implements application logic: "source": "https://github.com/sebastianbergmann/version/tree/6.0.0"
- Line 8238: Implements application logic: },
- Line 8239: Implements application logic: "funding": [
- Line 8240: Implements application logic: {
- Line 8241: Implements application logic: "url": "https://github.com/sebastianbergmann",
- Line 8242: Implements application logic: "type": "github"
- Line 8243: Implements application logic: }
- Line 8244: Implements application logic: ],
- Line 8245: Implements application logic: "time": "2025-02-07T05:00:38+00:00"
- Line 8246: Implements application logic: },
- Line 8247: Implements application logic: {
- Line 8248: Implements application logic: "name": "staabm/side-effects-detector",
- Line 8249: Implements application logic: "version": "1.0.5",
- Line 8250: Implements application logic: "source": {
- Line 8251: Implements application logic: "type": "git",
- Line 8252: Implements application logic: "url": "https://github.com/staabm/side-effects-detector.git",
- Line 8253: Implements application logic: "reference": "d8334211a140ce329c13726d4a715adbddd0a163"
- Line 8254: Implements application logic: },
- Line 8255: Implements application logic: "dist": {
- Line 8256: Implements application logic: "type": "zip",
- Line 8257: Implements application logic: "url": "https://api.github.com/repos/staabm/side-effects-detector/zipball/d8334211a140ce329c13726d4a715adbddd0a163",
- Line 8258: Implements application logic: "reference": "d8334211a140ce329c13726d4a715adbddd0a163",
- Line 8259: Implements application logic: "shasum": ""
- Line 8260: Implements application logic: },
- Line 8261: Implements application logic: "require": {
- Line 8262: Implements application logic: "ext-tokenizer": "*",
- Line 8263: Implements application logic: "php": "^7.4 || ^8.0"
- Line 8264: Implements application logic: },
- Line 8265: Implements application logic: "require-dev": {
- Line 8266: Implements application logic: "phpstan/extension-installer": "^1.4.3",
- Line 8267: Implements application logic: "phpstan/phpstan": "^1.12.6",
- Line 8268: Implements application logic: "phpunit/phpunit": "^9.6.21",
- Line 8269: Implements application logic: "symfony/var-dumper": "^5.4.43",
- Line 8270: Implements application logic: "tomasvotruba/type-coverage": "1.0.0",
- Line 8271: Implements application logic: "tomasvotruba/unused-public": "1.0.0"
- Line 8272: Implements application logic: },
- Line 8273: Implements application logic: "type": "library",
- Line 8274: Implements application logic: "autoload": {
- Line 8275: Implements application logic: "classmap": [
- Line 8276: Implements application logic: "lib/"
- Line 8277: Implements application logic: ]
- Line 8278: Implements application logic: },
- Line 8279: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 8280: Implements application logic: "license": [
- Line 8281: Implements application logic: "MIT"
- Line 8282: Implements application logic: ],
- Line 8283: Implements application logic: "description": "A static analysis tool to detect side effects in PHP code",
- Line 8284: Implements application logic: "keywords": [
- Line 8285: Implements application logic: "static analysis"
- Line 8286: Implements application logic: ],
- Line 8287: Implements application logic: "support": {
- Line 8288: Implements application logic: "issues": "https://github.com/staabm/side-effects-detector/issues",
- Line 8289: Implements application logic: "source": "https://github.com/staabm/side-effects-detector/tree/1.0.5"
- Line 8290: Implements application logic: },
- Line 8291: Implements application logic: "funding": [
- Line 8292: Implements application logic: {
- Line 8293: Implements application logic: "url": "https://github.com/staabm",
- Line 8294: Implements application logic: "type": "github"
- Line 8295: Implements application logic: }
- Line 8296: Implements application logic: ],
- Line 8297: Implements application logic: "time": "2024-10-20T05:08:20+00:00"
- Line 8298: Implements application logic: },
- Line 8299: Implements application logic: {
- Line 8300: Implements application logic: "name": "theseer/tokenizer",
- Line 8301: Implements application logic: "version": "2.0.1",
- Line 8302: Implements application logic: "source": {
- Line 8303: Implements application logic: "type": "git",
- Line 8304: Implements application logic: "url": "https://github.com/theseer/tokenizer.git",
- Line 8305: Implements application logic: "reference": "7989e43bf381af0eac72e4f0ca5bcbfa81658be4"
- Line 8306: Implements application logic: },
- Line 8307: Implements application logic: "dist": {
- Line 8308: Implements application logic: "type": "zip",
- Line 8309: Implements application logic: "url": "https://api.github.com/repos/theseer/tokenizer/zipball/7989e43bf381af0eac72e4f0ca5bcbfa81658be4",
- Line 8310: Implements application logic: "reference": "7989e43bf381af0eac72e4f0ca5bcbfa81658be4",
- Line 8311: Implements application logic: "shasum": ""
- Line 8312: Implements application logic: },
- Line 8313: Implements application logic: "require": {
- Line 8314: Implements application logic: "ext-dom": "*",
- Line 8315: Implements application logic: "ext-tokenizer": "*",
- Line 8316: Implements application logic: "ext-xmlwriter": "*",
- Line 8317: Implements application logic: "php": "^8.1"
- Line 8318: Implements application logic: },
- Line 8319: Implements application logic: "type": "library",
- Line 8320: Implements application logic: "autoload": {
- Line 8321: Implements application logic: "classmap": [
- Line 8322: Implements application logic: "src/"
- Line 8323: Implements application logic: ]
- Line 8324: Implements application logic: },
- Line 8325: Implements application logic: "notification-url": "https://packagist.org/downloads/",
- Line 8326: Implements application logic: "license": [
- Line 8327: Implements application logic: "BSD-3-Clause"
- Line 8328: Implements application logic: ],
- Line 8329: Implements application logic: "authors": [
- Line 8330: Implements application logic: {
- Line 8331: Implements application logic: "name": "Arne Blankerts",
- Line 8332: Implements application logic: "email": "arne@blankerts.de",
- Line 8333: Implements application logic: "role": "Developer"
- Line 8334: Implements application logic: }
- Line 8335: Implements application logic: ],
- Line 8336: Implements application logic: "description": "A small library for converting tokenized PHP source code into XML and potentially other formats",
- Line 8337: Implements application logic: "support": {
- Line 8338: Implements application logic: "issues": "https://github.com/theseer/tokenizer/issues",
- Line 8339: Implements application logic: "source": "https://github.com/theseer/tokenizer/tree/2.0.1"
- Line 8340: Implements application logic: },
- Line 8341: Implements application logic: "funding": [
- Line 8342: Implements application logic: {
- Line 8343: Implements application logic: "url": "https://github.com/theseer",
- Line 8344: Implements application logic: "type": "github"
- Line 8345: Implements application logic: }
- Line 8346: Implements application logic: ],
- Line 8347: Implements application logic: "time": "2025-12-08T11:19:18+00:00"
- Line 8348: Implements application logic: }
- Line 8349: Implements application logic: ],
- Line 8350: Implements application logic: "aliases": [],
- Line 8351: Implements application logic: "minimum-stability": "stable",
- Line 8352: Implements application logic: "stability-flags": {},
- Line 8353: Implements application logic: "prefer-stable": true,
- Line 8354: Implements application logic: "prefer-lowest": false,
- Line 8355: Implements application logic: "platform": {
- Line 8356: Implements application logic: "php": "^8.3"
- Line 8357: Implements application logic: },
- Line 8358: Implements application logic: "platform-dev": {},
- Line 8359: Implements application logic: "plugin-api-version": "2.9.0"
- Line 8360: Implements application logic: }
