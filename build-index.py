#!/usr/bin/env python3

import calendar
import itertools
import json
import jinja2
from pathlib import Path

env = jinja2.Environment(loader=jinja2.FileSystemLoader("templates"))
newsdir = Path("newsletters")

archive = {}
for news in itertools.chain(newsdir.glob("*.pdf"), newsdir.glob("*.txt")):
    if "lowres" in news.name:
        continue
    name = news.stem
    _, date = name.split("_")
    year = int(date[:4])
    month = int(date[4:])
    filetype = news.suffix[1:]

    archive.setdefault(year, {}).setdefault(month, {})[filetype] = str(news)

index = env.get_template("index.j2.html")
print(index.render(archive=archive, calendar=calendar))
