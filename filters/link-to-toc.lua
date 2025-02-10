function Header(h)
	h.content = pandoc.Link(h.content, "#TOC")
	return h
end
