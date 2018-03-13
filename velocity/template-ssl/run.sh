#!/bin/bash

echo "Starting TCL on port $1 and ssl $2"
java -Dlogback.configurationFile=./config/logback.xml -Dfile.encoding=ISO-8859-1 -Duser.country=BR -Duser.language=pt -Dtemplatecache.local.update.enable=false -Dtemplatecache.replace.content.whitespace=true -jar server.jar $1 $2
