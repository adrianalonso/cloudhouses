echo "Drop Database"
php bin/console doctrine:database:drop --force
echo "Create New Database"
php bin/console doctrine:database:create
echo "Install Clean ezPlatform Install"
php bin/console ezplatform:install clean
echo "Exec Kaliop Migrations"
php bin/console kaliop:migration:migrate -n