php bin/console doctrine:database:drop --force
php bin/console doctrine:database:create
php bin/console ezplatform:install clean
php bin/console kaliop:migration:migrate -n