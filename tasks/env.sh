#!/bin/bash
V=`echo $1 | tr '[:lower:]' '[:upper:]'`

echo "const CURENV = '${V}'

export default CURENV" > /Users/yanli28/Documents/cur/vipMusicFm/config/project.conf.js
