
-- to build the docker image 
    docker build -t test_docker .

-- to run the docker image
    docker run  -p {port}:{port} test_docker:latest ---it will create the docker container

-- to access the server 
    http://localhost:${port}/home

-- to compose the images 
    docker-compose up --build

-- to delete the compose images ( -v is for deleteing images in volumne optional)
    docker-compose down -v

-- to push the image in docker hub
    docker login

--Docker images need to be tagged properly before pushing them to Docker Hub. The format is:
--for example
    <dockerhub-username>/<repository-name>:<tag>
    
--For example, if your Docker Hub username is karthikmd and your repository name is events, tag your image as follows:
    docker tag <local-image-name> karthikmd/events:latest

--To find the <local-image-name>, list your Docker images:
    docker images

---Use the docker push command to upload the image:
    docker push karthikmd/events:latest
