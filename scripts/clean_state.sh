docker volume prune -f

rm -rf ./front/dist
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +

rm -rf .docker-conf
rm -rf logs

for Folder in "auth-service" "contas-service" "clientes-service" "gerentes-service"; do
    rm -rf "$Folder"
    rm -rf "services/$Folder/target"
    rm -rf "services/$Folder/.classpath"
    rm -rf "services/$Folder/.settings"
done
