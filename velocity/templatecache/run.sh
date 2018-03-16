#!/bin/bash

java -Dlogback.configurationFile=./config/logback.xml -Dfile.encoding=ISO-8859-1 -Duser.country=BR -Duser.language=pt -Dtemplatecache.local.update.enable=true -Dtemplatecache.replace.content.whitespace=true -jar server.jar $@
