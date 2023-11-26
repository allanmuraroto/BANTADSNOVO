# $(dirname $0)/clean-everything.sh

generate() {
    cd $(dirname $0)/../
    local filename="trabalho.zip"
    rm -rf $filename
    zip -r $filename ./ -x ".git/*" ".idea/*" "*.pdf" "*.xlsx" "front/.angular/*" ".docker-conf/*" "front/node_modules/*"
    du -sh $filename
}

generate
