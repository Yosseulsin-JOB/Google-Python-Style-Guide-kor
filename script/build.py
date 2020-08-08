#-*- coding:utf-8 -*-
# python3

import os

# 구현 예정
tree = {}

def get_file_list(folder):
  file_list = []
  filenames = os.listdir(folder)
  for filename in filenames:
    file_list.append(filename)
  return file_list

# 각 쳅터 및 파트를 숫자로 저장하지 않는 이유는 float 형태로 저장하면 3.20 => 3.2로 인식하기 때문
def get_chapter_list():
  folder = './Google Python Style Guide'
  file_list = get_file_list(folder)
  chapter_list = {}
  for filename in file_list:
    number = filename.split('. ')[0]
    chapter_list.update({number:os.path.join(folder, filename)})
  return chapter_list

def get_part_list(chapter_path):
  file_list = get_file_list(chapter_path)
  part_list = {}
  for filename in file_list:
    if filename.lower() == "readme.md":
      continue
    number = filename.split(" ")[0]
    part_list.update({number: os.path.join(chapter_path, filename)})
  return part_list

def chapter_foreach(chapter_list, f=print):
  start = 1
  end = start + len(chapter_list)
  for i in range(start, end):
    idx = str(i)
    f(chapter_list[idx], idx, chapter_list)

def part_foreach(part_list, number, f=print):
  start = 1
  end = start + len(part_list)
  for i in range(start, end):
    idx =str(number)+"."+str(i)
    f(part_list[idx], str(i), part_list)  

def write_readme(readme_path, data, override=False):
  write_type = 'w' if override is True else 'a'
  f = open(readme_path, write_type)
  f.write("".join(data))
  f.close()
  
def insert_part_in_readme(part_path, number, all):
  target_readme = part_path.split(part_path.split('/')[-1])[0] + "ReadMe.md"
  f = open(part_path, 'r')
  lines = f.readlines()
  f.close()
  write_readme(target_readme, lines, True if number == "1" else False)

def treeToContents():
  return "" # 구현 예정

def chapter_build(chapter_path, number, all):
  part_foreach(get_part_list(chapter_path), number, insert_part_in_readme)
  from_readme = chapter_path + "/ReadMe.md"
  to_readme = "./Google Python Style Guide kor.md"
  f = open(from_readme, 'r')
  data = f.readlines()
  f.close()
  write_readme(to_readme, "".join(data))

def build():
  title = "# Google Python Style Guide"
  Contents = treeToContents()
  
  to_readme = "./Google Python Style Guide kor.md"
  write_readme(to_readme, title + "\n" + Contents + "\n" , True)

  chapter_list = get_chapter_list()
  chapter_foreach(chapter_list, chapter_build)


build()