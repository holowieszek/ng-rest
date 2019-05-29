#!/bin/bash

# echo "Waiting for mysql"
# until mysql -h 127.0.0.1 -P 3306 -u ng_user -p ng_password
# do
#   printf "."
#   sleep 1
# done

# npm run migrate
# npm run start:dev

set -e

sleep 30
npm run migrate
npm run start:dev

exec "$@"