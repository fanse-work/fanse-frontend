#!/bin/bash
aws s3 sync "/var/www/frontend/dist/fonts/" "s3://fanse-bucket/media/static/fonts/"
aws s3 sync "/var/www/frontend/dist/img/" "s3://fanse-bucket/media/static/img/"
aws s3 sync "/var/www/frontend/dist/js/" "s3://fanse-bucket/media/static/js/"
aws s3 sync "/var/www/frontend/dist/css/" "s3://fanse-bucket/media/static/css/"
