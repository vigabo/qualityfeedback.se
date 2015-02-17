#!/bin/bash

mkdir -p static/static/
cp $1/static/dist/css/www.css static/static
cp $1/static/dist/js/www.min.js static/static
