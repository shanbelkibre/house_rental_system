# phpunit.xml

## Code (numbered)

```text
1 <?xml version="1.0" encoding="UTF-8"?>
2 <phpunit xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
3          xsi:noNamespaceSchemaLocation="vendor/phpunit/phpunit/phpunit.xsd"
4          bootstrap="vendor/autoload.php"
5          colors="true"
6 >
7     <testsuites>
8         <testsuite name="Unit">
9             <directory>tests/Unit</directory>
10         </testsuite>
11         <testsuite name="Feature">
12             <directory>tests/Feature</directory>
13         </testsuite>
14     </testsuites>
15     <source>
16         <include>
17             <directory>app</directory>
18         </include>
19     </source>
20     <php>
21         <env name="APP_ENV" value="testing"/>
22         <env name="APP_MAINTENANCE_DRIVER" value="file"/>
23         <env name="BCRYPT_ROUNDS" value="4"/>
24         <env name="BROADCAST_CONNECTION" value="null"/>
25         <env name="CACHE_STORE" value="array"/>
26         <env name="DB_CONNECTION" value="sqlite"/>
27         <env name="DB_DATABASE" value=":memory:"/>
28         <env name="DB_URL" value=""/>
29         <env name="MAIL_MAILER" value="array"/>
30         <env name="QUEUE_CONNECTION" value="sync"/>
31         <env name="SESSION_DRIVER" value="array"/>
32         <env name="PULSE_ENABLED" value="false"/>
33         <env name="TELESCOPE_ENABLED" value="false"/>
34         <env name="NIGHTWATCH_ENABLED" value="false"/>
35     </php>
36 </phpunit>
```

## Line-by-line explanation

- Line 1: Implements application logic: <?xml version="1.0" encoding="UTF-8"?>
- Line 2: Implements application logic: <phpunit xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
- Line 3: Implements application logic: xsi:noNamespaceSchemaLocation="vendor/phpunit/phpunit/phpunit.xsd"
- Line 4: Implements application logic: bootstrap="vendor/autoload.php"
- Line 5: Implements application logic: colors="true"
- Line 6: Implements application logic: >
- Line 7: Implements application logic: <testsuites>
- Line 8: Implements application logic: <testsuite name="Unit">
- Line 9: Implements application logic: <directory>tests/Unit</directory>
- Line 10: Implements application logic: </testsuite>
- Line 11: Implements application logic: <testsuite name="Feature">
- Line 12: Implements application logic: <directory>tests/Feature</directory>
- Line 13: Implements application logic: </testsuite>
- Line 14: Implements application logic: </testsuites>
- Line 15: Implements application logic: <source>
- Line 16: Implements application logic: <include>
- Line 17: Implements application logic: <directory>app</directory>
- Line 18: Implements application logic: </include>
- Line 19: Implements application logic: </source>
- Line 20: Implements application logic: <php>
- Line 21: Implements application logic: <env name="APP_ENV" value="testing"/>
- Line 22: Implements application logic: <env name="APP_MAINTENANCE_DRIVER" value="file"/>
- Line 23: Implements application logic: <env name="BCRYPT_ROUNDS" value="4"/>
- Line 24: Implements application logic: <env name="BROADCAST_CONNECTION" value="null"/>
- Line 25: Implements application logic: <env name="CACHE_STORE" value="array"/>
- Line 26: Implements application logic: <env name="DB_CONNECTION" value="sqlite"/>
- Line 27: Implements application logic: <env name="DB_DATABASE" value=":memory:"/>
- Line 28: Implements application logic: <env name="DB_URL" value=""/>
- Line 29: Implements application logic: <env name="MAIL_MAILER" value="array"/>
- Line 30: Implements application logic: <env name="QUEUE_CONNECTION" value="sync"/>
- Line 31: Implements application logic: <env name="SESSION_DRIVER" value="array"/>
- Line 32: Implements application logic: <env name="PULSE_ENABLED" value="false"/>
- Line 33: Implements application logic: <env name="TELESCOPE_ENABLED" value="false"/>
- Line 34: Implements application logic: <env name="NIGHTWATCH_ENABLED" value="false"/>
- Line 35: Implements application logic: </php>
- Line 36: Implements application logic: </phpunit>
