import re
import requests
from time import sleep

def getImgSrc(goodreadsID):
    goodreadsISBN = re.match('[0-9]+', goodreadsID).group()
    response = requests.get("https://www.goodreads.com/book/show/{}".format(goodreadsID))
    resp_stripped = response.text.replace("\n", "")
    term = 'https://.{,100}/' + goodreadsISBN + '.{,10}.jpg'
    ans = re.search(term, resp_stripped)
    if ans:
        return ans.group()
    return "https://d15be2nos83ntc.cloudfront.net/images/no-cover.png"

book_lists = [
        '5-stars_raw.txt',
        '2017_raw.txt',
        '2018_raw.txt',
        '2019_raw.txt',
        '2020_raw.txt',
        '2021_raw.txt',
        '2022_raw.txt',
        'before-i-die_read_raw.txt',
        'before-i-die_unread_raw.txt',
    ]

for book_list in book_lists:
    book_list = '../assets/' + book_list
    with open(book_list, 'r') as f:
        for line in f.readlines():
            goodreadsID = line.strip()
            imgSrc = getImgSrc(goodreadsID)
            print(goodreadsID, imgSrc)
            with open('../assets/bookcovers.json', 'a') as f:
                f.write(f'"{goodreadsID}": "{imgSrc}",\n')
            sleep(1)
