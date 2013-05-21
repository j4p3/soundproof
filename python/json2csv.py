import json
import csv
import sys
import re

def convert_json_to_csv(inputFile):
  ifile = open(inputFile, 'r')
  entryList = json.loads(ifile.read())
  with open(re.sub('.json$', '.csv', inputFile), 'wb') as csvfile:
    cw = csv.writer(csvfile)
    cw.writerow(entryList[0].keys())
    for entry in entryList:
      cw.writerow(map(lambda x: x.encode('utf-8') if isinstance(x, basestring) else x, entry.values()))


if __name__ == '__main__':
  if len(sys.argv) < 2:
    print "Missing input file argument: python j2c abc.json"
    exit()
  convert_json_to_csv(sys.argv[1])
