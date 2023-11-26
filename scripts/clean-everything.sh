$(dirname $0)/stop_all_containers.sh

docker rm -f $(docker ps -qa)
docker rmi -f $(docker images -aq)
docker image prune -f
docker network prune --force

$(dirname $0)/clean_state.sh
