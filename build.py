#!env/bin/python
import sys

from flask import Flask, render_template
from flask_flatpages import FlatPages
from flask_frozen import Freezer
from flask.ext.assets import Environment, Bundle

DEBUG = True
FLATPAGES_AUTO_RELOAD = DEBUG
FLATPAGES_EXTENSION = '.md'

app = Flask(__name__)
app.config.from_object(__name__)
pages = FlatPages(app)
freezer = Freezer(app)

# SITE GLOBAL VARS
site = {
	'site_name':'',
	'site_email':'mail@soniacs.com'}

# ROUTES
@app.route('/')
def index():
	projects = (p for p in pages if 'published' in p.meta and p.path.startswith('projects'))
	projects_sorted = sorted(projects, reverse=True, key=lambda p: p.meta['published'])
	return render_template('index.html',
		site = site,
		projects = projects_sorted,
		previous_page = '',
		next_page = projects_sorted[0])

@app.route('/test/')
def test():
	return render_template('test.html')

@app.route('/<path:path>/')
def page(path):
	page = pages.get_or_404(path)
	next_page = ''
	previous_page = ''
	projects = (p for p in pages if 'published' in p.meta and p.path.startswith('projects'))
	projects_sorted = sorted(projects, reverse=True, key=lambda p: p.meta['published'])

	if path.startswith('projects') and 'published' in page.meta:
		template = page.meta.get('template', 'project.html')

		for p in projects_sorted:
			if p.meta['published'] == page.meta['published'] - 1 :
				next_page = p
			elif p.meta['published'] == page.meta['published'] + 1 :
				previous_page = p

	return render_template(template,
		site = site,
		projects = projects_sorted,
		page = page,
		next_page = next_page,
		previous_page = previous_page)

# RUN AND BUILD
if __name__ == '__main__':
	if len(sys.argv) > 1 and sys.argv[1] == "build":
		freezer.freeze()
	else:
		app.run(port=8000)