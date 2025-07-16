#!/bin/bash

docker-compose -p "database-sample" -f "./docker-compose.db.yml" -f "./docker-compose.yml" down -v

# docker-compose down