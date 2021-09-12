#-*- coding:utf-8 -*-
# pylint: disable=missing-module-docstring
# pylint: disable=missing-class-docstring
# pylint: disable=missing-function-docstring



import os
import re

find_link = re.compile('\[(\w+)\]\(([\w\\\/\_\.\:]+)\)')
find_nums = re.compile('([0-9]+)\.([0-9]*).*')

readme = []
tree = []

def get_files(folder):
	file_list = []
	filenames = os.listdir(folder)
	for filename in filenames:
		file_list.append(filename)
	return file_list

def get_numbers(files):
	numbers = list(files.keys())
	numbers.sort()
	return numbers

def get_file_list(path):
	files = get_files(path)
	file_list = {}
	for filename in files:
		nums = find_nums.search(filename)
		if not nums:
			continue
		num = int(nums.group(2) or nums.group(1))
		file_list.update({num: os.path.join(path, filename)})
	return file_list

def file_list_foreach(files, f=print):
	for number in get_numbers(files):
		f(files[number], number, files)

def write_readme(readme_path, data, override=False):
	write_type = 'w' if override is True else 'a'
	f = open(readme_path, write_type)
	f.write("".join(data))
	f.close()

def insert_part_in_readme(part_path, number, all):
	part_tree = []
	target_readme = part_path.split(part_path.split('/')[-1])[0] + "ReadMe.md"
	f = open(part_path, 'r')
	lines = f.readlines()
	f.close()
	for i in range(0, len(lines)):
		syntax = lines[i].split(" ")[0]
		if syntax not in ["##", "###", "####"]:
			continue
		link = lines[i-2].replace('<a id="', "").replace('"></a>', "").replace("\n", "")
		title = lines[i].replace("# ", "").replace("#", "").replace("\n", "")
		link_in_title = find_link.search(title)
		if link_in_title:
			title = title.replace(link_in_title.group(), find_link.findall(title)[0][0])
		part_tree.append({"link":link, "title":title})
	if part_tree:
		tree.append(part_tree)
	# 파트가 시작하는 부분에 라인 추가 (d5e507c / #12)
	lines.append("\n---\n")
	write_readme(target_readme, lines, True if number == 1 else False)

def tree_to_contents():
	contents = []
	for item in tree:
		if type(item) == dict:
			contents.append("-   ["+item["title"]+"](#"+item["link"]+")")
			continue
		contents.append("    *   ["+item[0]["title"]+"](#"+item[0]["link"]+")")
		for part in item[1:]:
			if part["title"].split(" ")[1] in ["정의", "장점", "단점", "결론"]:
				continue
			contents.append("        +   ["+part["title"]+"](#"+part["link"]+")")
			
	return "\n".join(["\n<details>", "  <summary>Table of Contents</summary>\n\n"]) + "\n".join(contents)+ "\n\n</details>\n"

def chapter_build(chapter_path, number, all):
	chapter_title = chapter_path.split("/")[-1]
	chapter_link = "s"+chapter_path.split("/")[-1].split(". ")[0]
	tree.append({"title":chapter_title, "link": chapter_link})
	chapter_header = [
		'\n<a id="'+chapter_link+'"></a>\n',
		"\n",
		"## "+chapter_title +"\n\n",
	]
	file_list_foreach(get_file_list(chapter_path), insert_part_in_readme)
	from_readme = chapter_path + "/ReadMe.md"
	f = open(from_readme, 'r')
	data = f.readlines()
	f.close()
	# 챕터가 시작하는 부분에 <br> 추가 (d5e507c / #12)
	readme.append("\n<br>\n" + "".join(chapter_header)  + "".join(data))

def build():
	to_readme = "./Google Python Style Guide kor.md"

	chapter_list = get_file_list('./Google Python Style Guide')
	file_list_foreach(chapter_list, chapter_build)

	title = "# Google Python Style Guide\n"
	Contents = tree_to_contents()

	write_readme(to_readme, title + Contents + "".join(readme), True)

build()
