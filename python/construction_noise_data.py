from bs4 import BeautifulSoup
from geopy import geocoders
import urllib, urllib2
import json
import pprint

class ConstructionNoiseData(object):
  url = "https://epic.epd.gov.hk/eForm/cnp/download.jsp"
  payload = {
    's_form_id' : '4',
    's_district' : '0',
    's_action' : 'searchnow',
    'h_advSearch' : 'N',
    'lang' : 'eng'
  }
  data_rows = []
  geocoder = geocoders.GoogleV3()

  def __init__(self):
    pass

  def get_total_pages(self):
    # Connect to the webpage
    data = urllib.urlencode(self.payload)
    req = urllib2.Request(self.url, data)
    response = urllib2.urlopen(req)
    html = response.read()

    # Parse the HTML
    soup = BeautifulSoup(html)

    # Get the total number of pages
    last_page_no = soup.table.findAll("option")[-1]
    return int(last_page_no['value'])

  def get_single_page_data(self, page_no):
    # Connect to the webpage
    self.payload['gpage'] = page_no
    data = urllib.urlencode(self.payload)
    req = urllib2.Request(self.url, data)
    response = urllib2.urlopen(req)
    html = response.read()

    # Parse the HTML
    soup = BeautifulSoup(html)
    table_data = soup.table.table.findAll('span', { "class" : "tablebodytxt" })

    # Costruct the data list
    row = {}
    place = ''
    lat = 0
    lng = 0
    i = 0

    for data in table_data:
      key = i%5

      if key == 0:
        row['permit_no'] = data.contents[0].strip()
      elif key == 1:
        row['issued_on'] = data.contents[0].strip()
      elif key == 2:
        row['start_date'] = data.contents[0].strip()
        row['end_date'] = data.contents[2].strip()    
      elif key == 3:
        row['address'] = data.contents[0].strip()
        row['pemittee_name'] = data.strong.string.strip()
        # Get the lat and lng from geocoder
        try:
          place, (lat, lng) = self.geocoder.geocode(row['address'])
          row['lat'] = lat
          row['lng'] = lng
        except:
          row['lat'] = -1
          row['lng'] = -1
      elif key == 4:
        row['district'] = data.contents[0].strip()
        # End of row
        self.data_rows.append(row)
        row = {}
      else:
        # TODO: parse error
        print 'error'

      i += 1

  def get_data(self, no_of_pages=1):
    # Reset the data_rows
    data_rows = []

    # Get data from each page
    page_no = 1
    while page_no <= 10: # TODO: get 10 pages first
      self.get_single_page_data(page_no)
      page_no += 1

    # Convert the list to json
    return json.dumps(self.data_rows, sort_keys=True, indent=2, separators=(',', ': '))

def main():
  construction_noise_data = ConstructionNoiseData()
  no_of_pages = construction_noise_data.get_total_pages()
  print construction_noise_data.get_data(no_of_pages)

if  __name__ =='__main__':
  main()
