#!/usr/bin/env python
# -*- coding: utf-8 -*-

import json

lines = open('people.md', 'r').readlines()

teams = []

for line in lines:
    line=line.strip()
    if line[0] == '#':
        team = line[3:]
        teams.append({"subtitle" : team, "people" : []})
    else:
        teams[-1]["people"].append({"name" : line, "image" : line.replace(" ", "")+".jpg"})

with open("assets/json/members.json", 'w') as f:
    teams_json = json.dump(teams, f, indent=4)
