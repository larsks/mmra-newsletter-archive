MDDOCS = $(wildcard *.md)
HTMLDOCS = $(MDDOCS:.md=.html)
TXTDOCS = $(MDDOCS:.md=.txt)
PDFDOCS = $(MDDOCS:.md=.pdf)

CHROME = google-chrome

%.html: %.md
	pandoc --standalone --toc --toc-depth=2 --css style.css -o $@ -fmarkdown-implicit_figures $<

%.txt: %.md
	pandoc -f markdown -t plain --wrap=auto -o $@ $<

%.pdf: %.html
	$(CHROME) --headless --print-to-pdf=$@ --no-pdf-header-footer $<

all: $(HTMLDOCS) $(TXTDOCS) $(PDFDOCS)

clean:
	rm -f $(HTMLDOCS) $(TXTDOCS) $(PDFDOCS)
