const operatingTemples = [
  {
    "templeName": "Laie Hawaii Temple",
    "location": "Laie, Hawaii, United States",
    "dedicated": "November 27, 1919",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/809f567ccf240d2f1c8e457e8c81fbd94ef96759/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 1
  },
  {
    "templeName": "Johannesburg South Africa Temple",
    "location": "Johannesburg, Gauteng, South Africa",
    "dedicated": "August 24, 1985",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/b378c080e5880db5bf2bcf6d828b2f3fd59820de/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 2
  },
  {
    "templeName": "Logan Utah Temple",
    "location": "Logan, Utah, United States",
    "dedicated": "May 17, 1884",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/54ac3388abacb11ef04678697a2fc2b6aa0ac4f5/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 3
  },
  {
    "templeName": "Las Vegas Nevada Temple",
    "location": "Las Vegas, Nevada, United States",
    "dedicated": "December 16, 1989",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/34bee57930584d7ae483aa077cbd78e9050330ba/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4
  },
  {
    "templeName": "Mexico City Mexico Temple",
    "location": "México, Distrito Federal, Mexico",
    "dedicated": "December 2, 1983",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/2dbb637a01da374959e9b50dd072294645917ea4/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 5
  },
  {
    "templeName": "Ogden Utah Temple",
    "location": "Ogden, Utah, United States",
    "dedicated": "January 18, 1972",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/b001df653b3ca0c2dd39002cabb240b275025cf5/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 6
  },
  {
    "templeName": "Sydney Australia Temple",
    "location": "Carlingford, New South Wales, Australia",
    "dedicated": "September 20, 1984",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/8dd109cda45dda79ebe30b0461d5d0afba41f653/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 9
  },
  {
    "templeName": "St. George Utah Temple",
    "location": "St. George, Utah, United States",
    "dedicated": "April 6, 1877",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/215a9dc2298511eeacb9eeeeac1e26338fda42c9/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 10
  },
  {
    "templeName": "São Paulo Brazil Temple",
    "location": "São Paulo, Sao Paulo, Brazil",
    "dedicated": "October 30, 1978",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/940f3e201364433a3d5d3dc14b0cacee38d41d1d/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 11
  },
  {
    "templeName": "Nuku'alofa Tonga Temple",
    "location": "Liahona, Tongatapu, Tonga",
    "dedicated": "August 9, 1983",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/218d9090d4a69494266e658b653714514c155c31/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 12
  },
  {
    "templeName": "Nashville Tennessee Temple",
    "location": "Franklin, Tennessee, United States",
    "dedicated": "May 21, 2000",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/761062becc8ddd470fd362cbcc8de03cb9c18541/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 13
  },
  {
    "templeName": "Papeete Tahiti Temple",
    "location": "Papeete, Tahiti, French Polynesia",
    "dedicated": "October 27, 1983",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/b8a175b549d4b45a0ac5ab6ad42a9a7ff3f415b0/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 14
  },
  {
    "templeName": "Tokyo Japan Temple",
    "location": "Minato-ku, Tokyo, Japan",
    "dedicated": "October 27, 1980",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/df6b96801c9f11ec99eeeeeeac1ea2207e7c517b/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 15
  },
  {
    "templeName": "Vernal Utah Temple",
    "location": "Vernal, Utah, United States",
    "dedicated": "November 2, 1997",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/d8c07cd3032b589fba11a8a8ab2bc160949ee735/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 16
  },
  {
    "templeName": "Boston Massachusetts Temple",
    "location": "Belmont, Massachusetts, United States",
    "dedicated": "October 1, 2000",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/9e700b82104b6e93ba8d0095d3458564082a781a/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 17
  },
  {
    "templeName": "Antofagasta Chile Temple",
    "location": "Antofagasta, Chile",
    "dedicated": "June 15, 2025",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/e02ad85a9f8a3c4fc4192a1d5a7969a2e3cbfcc7/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4119596
  },
  {
    "templeName": "Mount Timpanogos Utah Temple",
    "location": "American Fork, Utah, United States",
    "dedicated": "October 13, 1996",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/d6dd0dd4f410f6744a703c43d871a9478de5013a/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 18
  },
  {
    "templeName": "Preston England Temple",
    "location": "Chorley, Lancashire, England",
    "dedicated": "June 7, 1998",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/f4d04898f81ac94258e161fbc4758e1a59074373/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 19
  },
  {
    "templeName": "Moses Lake Washington Temple",
    "location": "Moses Lake, Washington, United States",
    "dedicated": "September 17, 2023",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/870578c5fa6f11edb2e2eeeeac1e709e84598271/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4119594
  },
  {
    "templeName": "St. Louis Missouri Temple",
    "location": "St. Louis, Missouri, United States",
    "dedicated": "June 1, 1997",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/4d19c565d5dd52b8c8581dc536685350dee49856/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 20
  },
  {
    "templeName": "Cardston Alberta Temple",
    "location": "Cardston, Alberta, Canada",
    "dedicated": "August 26, 1923",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/ebdc56cba8bb11eda23ceeeeac1e7e543b91e9b4/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 21
  },
  {
    "templeName": "San Pedro Sula Honduras Temple",
    "location": "San Pedro Sula, Honduras",
    "dedicated": "October 13, 2024",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/Usqhjku9xyRSHqRwNaqaXs8ONHRjxnruvehdhtcp/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4119595
  },
  {
    "templeName": "Mesa Arizona Temple",
    "location": "Mesa, Arizona, United States",
    "dedicated": "October 23, 1927",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/a338f9b0e582f23025658041e5a617029c9be50f/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 22
  },
  {
    "templeName": "Boise Idaho Temple",
    "location": "Boise, Idaho, United States",
    "dedicated": "May 25, 1984",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/dbf23acaf84c11ebb042eeeeac1e1a0ec8058a00/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 23
  },
  {
    "templeName": "Deseret Peak Utah Temple",
    "location": "Tooele, Utah, United States",
    "dedicated": "November 10, 2024",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/tlt3bx603mu8w1gzxwx5eyw8f5yt3qk47spco3yd/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4119593
  },
  {
    "templeName": "Chicago Illinois Temple",
    "location": "Glenview, Illinois, United States",
    "dedicated": "August 9, 1985",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/5dcf1ba0e76511eca9fbeeeeac1e06cbebd2c32a/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 24
  },
  {
    "templeName": "Kansas City Missouri Temple",
    "location": "Kansas City, Missouri, United States",
    "dedicated": "May 6, 2012",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/24834bec921708cdada7bbd4c350f1a9267697cf/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4005413
  },
  {
    "templeName": "Córdoba Argentina Temple",
    "location": "Córdoba, Argentina",
    "dedicated": "May 17, 2015",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/47f77971f2ad3eb7013b86d2f14e1e491333566c/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4005412
  },
  {
    "templeName": "Denver Colorado Temple",
    "location": "Centennial, Colorado, United States",
    "dedicated": "October 24, 1986",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/cc479dc2aad6195d816ce9920fa214f7f4bc7f60/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 25
  },
  {
    "templeName": "Okinawa Japan Temple",
    "location": "Okinawa, Japan",
    "dedicated": "November 12, 2023",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/99f1e63f202511eeb116eeeeac1ef1e8603f51a8/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4119591
  },
  {
    "templeName": "Frankfurt Germany Temple",
    "location": "Friedrichsdorf, Hessen, Germany",
    "dedicated": "August 28, 1987",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/53cd8f853566e3d1fbb7a7619801ff4481dba7a6/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 26
  },
  {
    "templeName": "Rome Italy Temple",
    "location": "Rome, Roma, Italy",
    "dedicated": "March 10, 2019",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/17e2c70d687fffedfe115197e57fa8f5d1d369bb/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4005415
  },
  {
    "templeName": "Madrid Spain Temple",
    "location": "Madrid, Madrid, Spain",
    "dedicated": "March 19, 1999",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/93fe327ea5a8f82b20a48e283e51dc32f57ba148/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 27
  },
  {
    "templeName": "Philadelphia Pennsylvania Temple",
    "location": "Philadelphia, Pennsylvania, United States",
    "dedicated": "September 18, 2016",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/c727b5bbc1ccd152cc0f39bb139e92b3d553a5ca/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4005414
  },
  {
    "templeName": "Apia Samoa Temple",
    "location": "Apia, Pesega, Samoa",
    "dedicated": "August 5, 1983",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/6007b20e832459d2d8540c15a8f5fa80d7dcff0f/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 28
  },
  {
    "templeName": "Tuxtla Gutiérrez Mexico Temple",
    "location": "Tuxtla Gutiérrez, Chiapas, Mexico",
    "dedicated": "March 12, 2000",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/924c675fc1458a2591e5db14e3ef826daec6ae5f/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 37916
  },
  {
    "templeName": "Atlanta Georgia Temple",
    "location": "Sandy Springs, Georgia, United States",
    "dedicated": "June 1, 1983",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/2f38e41532b2b5529266317c51193b68fdcf81d5/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 29
  },
  {
    "templeName": "Buenos Aires Argentina Temple",
    "location": "Ciudad Evita, Buenos Aires, Argentina",
    "dedicated": "January 17, 1986",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/a3454a8b72b4cc972b3898805ec69cc901a89170/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 30
  },
  {
    "templeName": "Calgary Alberta Temple",
    "location": "Calgary, Alberta, Canada",
    "dedicated": "October 28, 2012",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/eafebe542f696c22dd64a03e622990b9a191c411/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4005411
  },
  {
    "templeName": "Bogotá Colombia Temple",
    "location": "Bogotá, Distrito Capital, Colombia",
    "dedicated": "April 24, 1999",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/89b209718a7ed41649a497893e240972b7cfd036/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 31
  },
  {
    "templeName": "Bountiful Utah Temple",
    "location": "Bountiful, Utah, United States",
    "dedicated": "January 8, 1995",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/0ef41c19f3cd8113dba38d4dfdca16a5d06cdcd5/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 32
  },
  {
    "templeName": "Dallas Texas Temple",
    "location": "Dallas, Texas, United States",
    "dedicated": "October 19, 1984",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/c853d3386e74f389bb61d29d08feb2243aedde77/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 33
  },
  {
    "templeName": "Freiberg Germany Temple",
    "location": "Freiberg, Sachsen, Germany",
    "dedicated": "June 29, 1985",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/0dfd23ae4f947c0a0a505e5c142de5ee2c51d91c/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 35
  },
  {
    "templeName": "Guatemala City Guatemala Temple",
    "location": "Guatemala City, Guatemala, Guatemala",
    "dedicated": "December 14, 1984",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/4ff985daa77b7f309360c884660244a965f9e8a4/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 36
  },
  {
    "templeName": "Guayaquil Ecuador Temple",
    "location": "Guayaquil, Guayas, Ecuador",
    "dedicated": "August 1, 1999",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/b6e397f7a6c219442a9987bcd8c92ff78c5d50a6/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 37
  },
  {
    "templeName": "Idaho Falls Idaho Temple",
    "location": "Idaho Falls, Idaho, United States",
    "dedicated": "September 23, 1945",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/c5c1115d68bb7c292e1cc60ee39f2e6b406ad70b/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 38
  },
  {
    "templeName": "Jordan River Utah Temple",
    "location": "South Jordan, Utah, United States",
    "dedicated": "November 16, 1981",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/87cb982259d1103385e7d2a0e07f41a0954eb4f8/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 39
  },
  {
    "templeName": "Los Angeles California Temple",
    "location": "Los Angeles, California, United States",
    "dedicated": "March 11, 1956",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/f776300d2f59a0d25045f45d961c326a7ae080d8/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 40
  },
  {
    "templeName": "London England Temple",
    "location": "Newchapel, Surrey, England",
    "dedicated": "September 7, 1958",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/914ec5701c2435b4cfa50668de85df2aebf68f26/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 41
  },
  {
    "templeName": "Lima Peru Temple",
    "location": "La Molina, Lima, Peru",
    "dedicated": "January 10, 1986",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/b800f5245ce311fb987aabd6ee6b2230b7c8b04f/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 42
  },
  {
    "templeName": "Manti Utah Temple",
    "location": "Manti, Utah, United States",
    "dedicated": "May 21, 1888",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/d9c313eb96c173d0ad32f21f461ce994129c9e8d/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 43
  },
  {
    "templeName": "Nauvoo Illinois Temple",
    "location": "Nauvoo, Illinois, United States",
    "dedicated": "June 27, 2002",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/04d0f7f577ff089808b71b864e1f58b2e877a124/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 44
  },
  {
    "templeName": "Hamilton New Zealand Temple",
    "location": "Hamilton, Auckland, New Zealand",
    "dedicated": "April 20, 1958",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/2ff304d05520229fae54c290f936ba01b20173e5/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 45
  },
  {
    "templeName": "Oakland California Temple",
    "location": "Oakland, California, United States",
    "dedicated": "November 17, 1964",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/f7e41833760fae68fefaf157b7a8558e1aa1a2a7/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 46
  },
  {
    "templeName": "Seattle Washington Temple",
    "location": "Bellevue, Washington, United States",
    "dedicated": "November 17, 1980",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/02bc5fa239bfc78d3fdc3da6d851d95c65d054d3/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 48
  },
  {
    "templeName": "Santiago Chile Temple",
    "location": "Providencia, Santiago, Chile",
    "dedicated": "September 15, 1983",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/b6becb4ca0c60a52ad5dc57a90ec69fe5fe7ec63/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 50
  },
  {
    "templeName": "Seoul Korea Temple",
    "location": "Seoul, Seoul-teukbyeolsi, South Korea",
    "dedicated": "December 14, 1985",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/57efcc4b6a1c664c934aa672b0f8de38a8f539c4/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 51
  },
  {
    "templeName": "Bern Switzerland Temple",
    "location": "Zollikofen, Bern, Switzerland",
    "dedicated": "September 11, 1955",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/a2c415301c7991e2e10059b5ec588a28785917b0/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 52
  },
  {
    "templeName": "Mérida Mexico Temple",
    "location": "Mérida, Yucatan, Mexico",
    "dedicated": "July 8, 2000",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/740845e883664b738aef0310edac9ee889135501/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 36916
  },
  {
    "templeName": "Taipei Taiwan Temple",
    "location": "Taipei, Taipei, Taiwan",
    "dedicated": "November 17, 1984",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/292ab7814b6355ac40236fbc39eb1a4ed8c058a7/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 53
  },
  {
    "templeName": "Washington D.C. Temple",
    "location": "Kensington, Maryland, United States",
    "dedicated": "November 19, 1974",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/9bbc2a18ee4b11eb90efeeeeac1e68824aabff60/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 54
  },
  {
    "templeName": "Hong Kong China Temple",
    "location": "Kowloon Tong, Kowloon City, Hong Kong",
    "dedicated": "May 26, 1996",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/cd518a59ee7511eca935eeeeac1ecdb94609c80b/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 55
  },
  {
    "templeName": "Cochabamba Bolivia Temple",
    "location": "Alto Queru Queru, Cochabamba, Bolivia",
    "dedicated": "April 30, 2000",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/e012ebb4075dc7976a314471fc0a3b3058e37c1a/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 56
  },
  {
    "templeName": "Recife Brazil Temple",
    "location": "Recife, Pernambuco, Brazil",
    "dedicated": "December 15, 2000",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/74d57cefebf31773df61b0b882067ee236de5279/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 57
  },
  {
    "templeName": "Billings Montana Temple",
    "location": "Billings, Montana, United States",
    "dedicated": "November 20, 1999",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/6dcc34be2bfb4a3c2fc01cefb08f51404ef65d4d/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 58
  },
  {
    "templeName": "Manila Philippines Temple",
    "location": "Quezon City, Metro Manila, Philippines",
    "dedicated": "September 25, 1984",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/cf62ebb59aefa1d2856981fb77574fb9982c5fad/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 59
  },
  {
    "templeName": "Monterrey Mexico Temple",
    "location": "Monterrey, Nuevo Leon, Mexico",
    "dedicated": "April 28, 2002",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/5c22836ac5e36d099a131d686b0850eb22e1a0e8/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 60
  },
  {
    "templeName": "Portland Oregon Temple",
    "location": "Lake Oswego, Oregon, United States",
    "dedicated": "August 19, 1989",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/91ee64d1750b013886f11c27f2c87c5535f5cbad/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 63
  },
  {
    "templeName": "Santo Domingo Dominican Republic Temple",
    "location": "Santo Domingo, Distrito Nacional, Dominican Republic",
    "dedicated": "September 17, 2000",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/bd7519e3369d1f82b7470f7d16f1ab92504246b1/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 65
  },
  {
    "templeName": "Cobán Guatemala Temple",
    "location": "Coban, Guatemala",
    "dedicated": "June 9, 2024",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/4b129a33b4b311ee9c99eeeeac1e820ae5a7a3bb/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4124796
  },
  {
    "templeName": "Taylorsville Utah Temple",
    "location": "Taylorsville, Utah, United States",
    "dedicated": "June 2, 2024",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/08db56099dce11eeaccceeeeac1eec0900fabbe8/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4124797
  },
  {
    "templeName": "Toronto Ontario Temple",
    "location": "Brampton, Ontario, Canada",
    "dedicated": "August 25, 1990",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/hc8192dqhhobc8575o12j35f28hjhmtk1zx9d7px/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 67
  },
  {
    "templeName": "Caracas Venezuela Temple",
    "location": "Caracas, Dependencias Federales, Venezuela",
    "dedicated": "August 20, 2000",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/5358fcd9eafe59917f2deaccb97c6b6308640b7a/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 68
  },
  {
    "templeName": "McAllen Texas Temple",
    "location": "McAllen, Texas, United States",
    "dedicated": "October 8, 2023",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/51edc593152e11ee90afeeeeac1ef99dfe5ba797/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4124795
  },
  {
    "templeName": "Bentonville Arkansas Temple",
    "location": "Bentonville, Arkansas, United States",
    "dedicated": "September 17, 2023",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/34410870d7d011ed8402eeeeac1ec672bdc0ce45/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4124793
  },
  {
    "templeName": "Orem Utah Temple",
    "location": "Orem, Utah, United States",
    "dedicated": "January 21, 2024",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/071079264cd111eeb455eeeeac1eb5a4c7edde59/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4124791
  },
  {
    "templeName": "Panama City Panama Temple",
    "location": "Corozal, Ancon, Panamá, Panama",
    "dedicated": "August 10, 2008",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/8c9a8135ae6962307b0150233443cb45b40673f4/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 69207
  },
  {
    "templeName": "Curitiba Brazil Temple",
    "location": "Curitiba, Parana, Brazil",
    "dedicated": "June 1, 2008",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/ea7e0f39c8e26d163a4dfedfcb1ce5c41d650b5b/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 69206
  },
  {
    "templeName": "San Antonio Texas Temple",
    "location": "San Antonio, Texas, United States",
    "dedicated": "May 22, 2005",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/1dc0b8602087f0f95c062dd122dd45e080d25432/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 46179
  },
  {
    "templeName": "Monticello Utah Temple",
    "location": "Monticello, Utah, United States",
    "dedicated": "July 26, 1998",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/00b60393731fd52ea05f41d561df6baa573c9905/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 36462
  },
  {
    "templeName": "Baton Rouge Louisiana Temple",
    "location": "Baton Rouge, Louisiana, United States",
    "dedicated": "July 16, 2000",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/a75beca22300a3263bd47fba03b5b0d1b5ca0753/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 36984
  },
  {
    "templeName": "Birmingham Alabama Temple",
    "location": "Gardendale, Alabama, United States",
    "dedicated": "September 3, 2000",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/26997a0eac228b51de04df861686ccc0cb3bbf92/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 36985
  },
  {
    "templeName": "Melbourne Australia Temple",
    "location": "Wantirna South, Victoria, Australia",
    "dedicated": "June 16, 2000",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/48e36732ca023c6cbe859be980617e4ca2cebe2a/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 36986
  },
  {
    "templeName": "Columbia South Carolina Temple",
    "location": "Hopkins, South Carolina, United States",
    "dedicated": "October 16, 1999",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/4aefedd5ef026ce77d6122bb415ee9d937979733/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 36987
  },
  {
    "templeName": "Memphis Tennessee Temple",
    "location": "Bartlett, Tennessee, United States",
    "dedicated": "April 23, 2000",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/99e615dbbcc2021f6781fa0e2af8b2db239c4b11/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 36988
  },
  {
    "templeName": "Montevideo Uruguay Temple",
    "location": "Carrasco, Montevideo, Uruguay",
    "dedicated": "March 18, 2001",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/7dqbfpkm3mnualv3l4oiqk913qdq5460xrd98epx/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 36989
  },
  {
    "templeName": "Villahermosa Mexico Temple",
    "location": "Villahermosa, Tabasco, Mexico",
    "dedicated": "May 21, 2000",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/2dcaf6bdc04d42202ad48d580bcf9b0b15cf5550/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 36991
  },
  {
    "templeName": "Vancouver British Columbia Temple",
    "location": "Langley, British Columbia, Canada",
    "dedicated": "May 2, 2010",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/d33a3407f39612a343f6f1ac26c59e0c00db4296/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4007091
  },
  {
    "templeName": "Cedar City Utah Temple",
    "location": "Cedar City, Utah, United States",
    "dedicated": "December 10, 2017",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/b695ca6f1c809684160e59dd5724a4f68ef99448/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4028590
  },
  {
    "templeName": "Manaus Brazil Temple",
    "location": "Manaus, Amazonas, Brazil",
    "dedicated": "June 10, 2012",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/f758727dc0cd20dc24845be6e5810f81e400d603/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 79543
  },
  {
    "templeName": "Aba Nigeria Temple",
    "location": "Aba, Abia, Nigeria",
    "dedicated": "August 7, 2005",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/7210c09be95c4474772ae52e5f31c23c08112784/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 43202
  },
  {
    "templeName": "Helsinki Finland Temple",
    "location": "Espoo, Uusimaa, Finland",
    "dedicated": "October 22, 2006",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/f46bd40ab80c3371019f5f4ecc78680b4660e1c2/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 43203
  },
  {
    "templeName": "Asunción Paraguay Temple",
    "location": "Asunción, Alto Paraguay, Paraguay",
    "dedicated": "May 19, 2002",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/68dfd881f93cb86e99828aa547eac056189c55ff/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 43204
  },
  {
    "templeName": "Accra Ghana Temple",
    "location": "Accra, Greater Accra, Ghana",
    "dedicated": "January 11, 2004",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/7cf8e8b9e5a5a1f379d4e2c9bc2166f9c6007aca/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 36549
  },
  {
    "templeName": "Lubbock Texas Temple",
    "location": "Lubbock, Texas, United States",
    "dedicated": "April 21, 2002",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/0a2a0bbc531e85cbf43b72ed000e549bbf59d790/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 43205
  },
  {
    "templeName": "Albuquerque New Mexico Temple",
    "location": "Albuquerque, New Mexico, United States",
    "dedicated": "March 5, 2000",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/d7744ff190d8fec7615a2f5b0d5e2b1813ba32d6/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 36550
  },
  {
    "templeName": "Snowflake Arizona Temple",
    "location": "Snowflake, Arizona, United States",
    "dedicated": "March 3, 2002",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/63ee0de38ed3430d92daeecaa5e200ed72dc26d9/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 43206
  },
  {
    "templeName": "Anchorage Alaska Temple",
    "location": "Anchorage, Alaska, United States",
    "dedicated": "January 9, 1999",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/ef1d9b0a65b398d3d5aad2ccaad5aa79588b6cfd/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 36551
  },
  {
    "templeName": "Columbia River Washington Temple",
    "location": "Richland, Washington, United States",
    "dedicated": "November 18, 2001",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/a4b69ff6daf25c70235e2823612a01872a7b2abc/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 43207
  },
  {
    "templeName": "Bismarck North Dakota Temple",
    "location": "Bismarck, North Dakota, United States",
    "dedicated": "September 19, 1999",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/b35f919a37ee792f1283e5a76e993dea8fd68d13/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 36552
  },
  {
    "templeName": "Brisbane Australia Temple",
    "location": "Kangaroo Point, Queensland, Australia",
    "dedicated": "June 15, 2003",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/28f8485c143afac0623e026608261d761be828d9/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 36553
  },
  {
    "templeName": "Campinas Brazil Temple",
    "location": "Campinas, Sao Paulo, Brazil",
    "dedicated": "May 17, 2002",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/c9a81a6f86750d7d9ade3499d3df52e2f7f726a7/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 36554
  },
  {
    "templeName": "Ciudad Juárez Mexico Temple",
    "location": "Ciudad Juárez, Chihuahua, Mexico",
    "dedicated": "February 26, 2000",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/b8280841d672858dc62bd729092aa6168ab00100/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 36555
  },
  {
    "templeName": "Colonia Juárez Chihuahua Mexico Temple",
    "location": "Colonia Juárez, Chihuahua, Mexico",
    "dedicated": "March 6, 1999",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/9130468c8099ce6d57d408945a4d94ebc97d969a/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 36556
  },
  {
    "templeName": "Columbus Ohio Temple",
    "location": "Columbus, Ohio, United States",
    "dedicated": "September 4, 1999",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/46fda163a1ab11edac63eeeeac1ed71e54c1cdcd/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 36557
  },
  {
    "templeName": "Edmonton Alberta Temple",
    "location": "Edmonton, Alberta, Canada",
    "dedicated": "December 11, 1999",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/eed1439015e47d43916bc7c9701d9c32e71c67cc/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 36558
  },
  {
    "templeName": "Fukuoka Japan Temple",
    "location": "Fukuoka-shi, Fukuoka, Japan",
    "dedicated": "June 11, 2000",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/6e3b7b6a40037766aec369a9a3380aed9a963cec/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 36559
  },
  {
    "templeName": "Halifax Nova Scotia Temple",
    "location": "Dartmouth, Nova Scotia, Canada",
    "dedicated": "November 14, 1999",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/bd5a1eef0d9d6a6dbdb3f26955218001aeeb3d4d/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 36560
  },
  {
    "templeName": "Hermosillo Sonora Mexico Temple",
    "location": "Hermosillo, Sonora, Mexico",
    "dedicated": "February 27, 2000",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/cba0fa28d0682caa31b2f24e506b4261fb000883/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 36561
  },
  {
    "templeName": "Houston Texas Temple",
    "location": "Spring, Texas, United States",
    "dedicated": "August 26, 2000",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/65bc8aa26913ef6a8302e6e73099c4bd0b57c60b/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 36562
  },
  {
    "templeName": "Kyiv Ukraine Temple",
    "location": "Kyevo-Sviatoshyns’ky Rayon, Kyiv, Ukraine",
    "dedicated": "August 29, 2010",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/d0508e0ecf1c6d995baee78f23989e4871b613e6/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 36563
  },
  {
    "templeName": "Montreal Quebec Temple",
    "location": "Longueuil, Quebec, Canada",
    "dedicated": "June 4, 2000",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/e7170d6c20f37f275c8df2082f67888b36c3dd01/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 36565
  },
  {
    "templeName": "Porto Alegre Brazil Temple",
    "location": "Porto Alegre, Rio Grande do Sul, Brazil",
    "dedicated": "December 17, 2000",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/8b7f7031cc837345a3638255f73ad8df9b9ed693/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 36566
  },
  {
    "templeName": "Regina Saskatchewan Temple",
    "location": "Regina, Saskatchewan, Canada",
    "dedicated": "November 14, 1999",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/20dea9189bd7f3d6b2d0c1e9cc2c38f812d7b1e5/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 36567
  },
  {
    "templeName": "St. Paul Minnesota Temple",
    "location": "Oakdale, Minnesota, United States",
    "dedicated": "January 9, 2000",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/9tlz7rxr2wikctyky70x8z2ug72vp40cd1riej95/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 36568
  },
  {
    "templeName": "Suva Fiji Temple",
    "location": "Samabula, Suva, Fiji",
    "dedicated": "June 18, 2000",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/dd095f798970c078795b19c71be29794f273561c/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 36569
  },
  {
    "templeName": "Tampico Mexico Temple",
    "location": "Ciudad Madero, Tamaulipas, Mexico",
    "dedicated": "May 20, 2000",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/30ed2207120140ad2d331c90594fb24e9139ea53/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 36570
  },
  {
    "templeName": "Tijuana Mexico Temple",
    "location": "Tijuana, Baja California, Mexico",
    "dedicated": "December 13, 2015",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/d3082bac914b5045a3b1517b6fa25c587bf5fd42/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4009693
  },
  {
    "templeName": "Hartford Connecticut Temple",
    "location": "Farmington, Connecticut, United States",
    "dedicated": "November 20, 2016",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/29bbbf0d7052177efc5cc22908d11aea43d52044/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4009692
  },
  {
    "templeName": "Lisbon Portugal Temple",
    "location": "Lisbon, Portugal",
    "dedicated": "September 15, 2019",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/6d84eb0301da0baca818212965160d2db12879c1/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4009689
  },
  {
    "templeName": "Spokane Washington Temple",
    "location": "Spokane, Washington, United States",
    "dedicated": "August 21, 1999",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/0aac4d049a074897419ec63f41171d50ca0e3993/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 36582
  },
  {
    "templeName": "Urdaneta Philippines Temple",
    "location": "Urdaneta, Pangasinan, Philippines",
    "dedicated": "April 28, 2024",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/46910789b4c911eeaf5feeeeac1ed77e9a30ef3f/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4009691
  },
  {
    "templeName": "Detroit Michigan Temple",
    "location": "Bloomfield Hills, Michigan, United States",
    "dedicated": "October 23, 1999",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/3c9f57ee5c391a678c67c60125449a6ba8dd7b29/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 36583
  },
  {
    "templeName": "Indianapolis Indiana Temple",
    "location": "Carmel, Indiana, United States",
    "dedicated": "August 23, 2015",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/fa48fbd0ab3c56637b99a176aaa99eadf83d209c/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4009690
  },
  {
    "templeName": "Tegucigalpa Honduras Temple",
    "location": "Comayagüela, Francisco Morazán, Honduras",
    "dedicated": "March 17, 2013",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/5eafb4407decaf72553241072f38e2003df39658/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 77556
  },
  {
    "templeName": "Raleigh North Carolina Temple",
    "location": "Apex, North Carolina, United States",
    "dedicated": "December 18, 1999",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/83ddf01d389928892e38cac8f2865b16a8649e17/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 36603
  },
  {
    "templeName": "Rio de Janeiro Brazil Temple",
    "location": "Rio de Janeiro, Brazil",
    "dedicated": "May 8, 2022",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/001db7326e638032470a02813c9e47191ef74b0e/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4028611
  },
  {
    "templeName": "San Salvador El Salvador Temple",
    "location": "Antiguo Cuscatlán, La Libertad, El Salvador",
    "dedicated": "August 21, 2011",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/8c084fef6033bfd96c430cec43236af0b41740f5/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4004669
  },
  {
    "templeName": "The Hague Netherlands Temple",
    "location": "Zoetermeer, Zuid-Holland, Netherlands",
    "dedicated": "September 8, 2002",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/3aedbae4240b4c09f5286429c9e6303f530a665d/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 40705
  },
  {
    "templeName": "Gilbert Arizona Temple",
    "location": "Gilbert, Arizona, United States",
    "dedicated": "March 2, 2014",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/33e19ea3cba5f4aa250fab5e170af503d7bf667f/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4004671
  },
  {
    "templeName": "The Gila Valley Arizona Temple",
    "location": "Central, Arizona, United States",
    "dedicated": "May 23, 2010",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/b4f5c9e373295ff90cf32369f5efbc13d73285d6/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4004670
  },
  {
    "templeName": "Twin Falls Idaho Temple",
    "location": "Twin Falls, Idaho, United States",
    "dedicated": "August 24, 2008",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/455e06d2e9cd169f20910e747d8417ab7e2d3d47/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 75531
  },
  {
    "templeName": "Winter Quarters Nebraska Temple",
    "location": "Omaha, Nebraska, United States",
    "dedicated": "April 22, 2001",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/cc1ed5eb420f25a1bf6338781592eb9b8bbdb437/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 40202
  },
  {
    "templeName": "Draper Utah Temple",
    "location": "Draper, Utah, United States",
    "dedicated": "March 20, 2009",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/dca32cd633382f896137f45e1af4088adf7fb310/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 75530
  },
  {
    "templeName": "Perth Australia Temple",
    "location": "Yokine, Western Australia, Australia",
    "dedicated": "May 20, 2001",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/2487cd627a110735aaa3195227f5991db9d4dadd/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 40203
  },
  {
    "templeName": "Lima Peru Los Olivos Temple",
    "location": "Los Olivos, Lima, Peru",
    "dedicated": "January 14, 2024",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/3f3327a93b9f11eeb2f0eeeeac1e45f6554046d6/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4086056
  },
  {
    "templeName": "Quito Ecuador Temple",
    "location": "Quito, Ecuador",
    "dedicated": "November 20, 2022",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/490df500d14611ec90efeeeeac1ee7e67e80c168/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4086054
  },
  {
    "templeName": "Veracruz Mexico Temple",
    "location": "Boca del Rio, Veracruz, Mexico",
    "dedicated": "July 9, 2000",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/7912c0516d806e53855863d40d426412ca2e5836/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 38680
  },
  {
    "templeName": "Belém Brazil Temple",
    "location": "Belém, Para, Brazil",
    "dedicated": "November 20, 2022",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/588d3a27e2b911ec94adeeeeac1e0a0694f432a0/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4086055
  },
  {
    "templeName": "Reno Nevada Temple",
    "location": "Reno, Nevada, United States",
    "dedicated": "April 23, 2000",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/bbe896255f1b696ee5b1ac7f1b40acf5a270a89d/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 38681
  },
  {
    "templeName": "Guadalajara Mexico Temple",
    "location": "Zapopan, Jalisco, Mexico",
    "dedicated": "April 29, 2001",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/a1fb15c2f9532c712eaa069cdfd9d23c63f910d9/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 38682
  },
  {
    "templeName": "Harare Zimbabwe Temple",
    "location": "Highlands, Harare, Zimbabwe",
    "dedicated": "March 1, 2026",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/13d2f6cf147a36f20e52890a7d46c054541a5357/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4086053
  },
  {
    "templeName": "Trujillo Peru Temple",
    "location": "Trujillo, La Libertad, Peru",
    "dedicated": "June 21, 2015",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/9943a99ff243f011c0533e3633cf9ecee0829628/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4005658
  },
  {
    "templeName": "Elko Nevada Temple",
    "location": "Nevada, United States",
    "dedicated": "October 12, 2025",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/jgi73fw8hvn8p7x5g43iahh9nb3vwcj3agi33i7r/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4138367
  },
  {
    "templeName": "Salta Argentina Temple",
    "location": "Salta, Argentina",
    "dedicated": "June 16, 2024",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/8997d67ecc3011eebfd1eeeeac1e4e2f81a7e639/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4108670
  },
  {
    "templeName": "Burley Idaho Temple",
    "location": "Burley, Idaho, United States",
    "dedicated": "January 11, 2026",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/9c4531bb1adc11ecbd09eeeeac1ec23d4f6a8a8a/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4138365
  },
  {
    "templeName": "Farmington New Mexico Temple",
    "location": "New Mexico, United States",
    "dedicated": "August 17, 2025",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/5iz30fn5yrwi4ek01afs09wzqqcdw7cwcyi4e7ps/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4138364
  },
  {
    "templeName": "Grand Junction Colorado Temple",
    "location": "Grand Junction, Colorado, United States",
    "dedicated": "October 19, 2025",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/n234f2c89ig7tt8uqokudt1wg5pb9dbbm8gxpjvt/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4138363
  },
  {
    "templeName": "Casper Wyoming Temple",
    "location": "Casper, Wyoming, United States",
    "dedicated": "November 24, 2024",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/bb74748cc5e811eeaea1eeeeac1e060ff4c1e350/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4138362
  },
  {
    "templeName": "Helena Montana Temple",
    "location": "Helena, Montana, United States",
    "dedicated": "June 18, 2023",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/12b539bbeb6e11eda7c9eeeeac1eac0a8ada7139/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4138361
  },
  {
    "templeName": "Sacramento California Temple",
    "location": "Rancho Cordova, California, United States",
    "dedicated": "September 3, 2006",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/f44fa0d21e44659d9a141e0dccb552a057cdae58/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 45901
  },
  {
    "templeName": "Redlands California Temple",
    "location": "Redlands, California, United States",
    "dedicated": "September 14, 2003",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/88ef0d8ec26cb47d31143b07bc74d1f580600410/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 45902
  },
  {
    "templeName": "Newport Beach California Temple",
    "location": "Newport Beach, California, United States",
    "dedicated": "August 28, 2005",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/5288eedbc6e58a3ad9d586eb850d926a7d30ab5a/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 45903
  },
  {
    "templeName": "Quetzaltenango Guatemala Temple",
    "location": "Quetzaltenango, Quezaltenango, Guatemala",
    "dedicated": "December 11, 2011",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/61a9bf72e29c45210c113c3f70c8d80ceb388362/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 78698
  },
  {
    "templeName": "Bangkok Thailand Temple",
    "location": "Bangkok, Thailand",
    "dedicated": "October 22, 2023",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/4052d9f8ff0e11edb9dbeeeeac1e97aea1b93079/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4069712
  },
  {
    "templeName": "Abidjan Ivory Coast Temple",
    "location": "Abidjan, Côte d'Ivoire",
    "dedicated": "May 25, 2025",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/bal80d1i45vz2eluh67xvxs09ep6p2m1lfv69t0q/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4069710
  },
  {
    "templeName": "Port-au-Prince Haiti Temple",
    "location": "Port-au-Prince, Haiti",
    "dedicated": "September 1, 2019",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/ecd338cd0b4011eca4aceeeeac1e0759736ccaa9/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4069711
  },
  {
    "templeName": "Phoenix Arizona Temple",
    "location": "Phoenix, Arizona, United States",
    "dedicated": "November 16, 2014",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/5446b8c12c7aacacff8444134ed15190da233a58/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4004672
  },
  {
    "templeName": "Winnipeg Manitoba Temple",
    "location": "Winnipeg, Manitoba, Canada",
    "dedicated": "October 31, 2021",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/c138e6a51fdc11ec86faeeeeac1e09d25bc132a7/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4010937
  },
  {
    "templeName": "Fort Collins Colorado Temple",
    "location": "Fort Collins, Colorado, United States",
    "dedicated": "October 16, 2016",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/0eaefc0418fa18839483f3c54f1d44733ee99610/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4010939
  },
  {
    "templeName": "Meridian Idaho Temple",
    "location": "Meridian, Idaho, United States",
    "dedicated": "November 19, 2017",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/109c78e75c462bdf08ec79e081104043b065d34f/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4010938
  },
  {
    "templeName": "Brigham City Utah Temple",
    "location": "Brigham City, Utah, United States",
    "dedicated": "September 23, 2012",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/154ee0c38f920aa66074c0338fe29f535e0d0a65/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4007349
  },
  {
    "templeName": "Fort Lauderdale Florida Temple",
    "location": "Davie, Florida, United States",
    "dedicated": "May 4, 2014",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/0871c25e05d9ad7a649fba4ce0cffcb112f0aed7/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4007348
  },
  {
    "templeName": "Fortaleza Brazil Temple",
    "location": "Fortaleza, Ceara, Brazil",
    "dedicated": "June 2, 2019",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/e2a28dbb2b14f5f71d79b359cf9f7b88dc480144/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4007351
  },
  {
    "templeName": "Sapporo Japan Temple",
    "location": "Atsubetsu-ku Sapporo, Hokkaido, Japan",
    "dedicated": "August 21, 2016",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/c917995588e9c8d3ce881ebd32405150f9109fa7/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4007350
  },
  {
    "templeName": "Cebu City Philippines Temple",
    "location": "Cebu City, Cebu, Philippines",
    "dedicated": "June 13, 2010",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/3b515c363a8c71994bd6e110cf021fc84d9c90f6/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 77199
  },
  {
    "templeName": "Concepción Chile Temple",
    "location": "Concepcion, Chile",
    "dedicated": "October 28, 2018",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/7873102ba98c0c2b6f45ca655d737cf5a5e7f7c2/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4007347
  },
  {
    "templeName": "Palmyra New York Temple",
    "location": "Palmyra, New York, United States",
    "dedicated": "April 6, 2000",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/fbd79639873ea6df9927ecc310a21fd4d3094e36/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 37774
  },
  {
    "templeName": "Oquirrh Mountain Utah Temple",
    "location": "South Jordan, Utah, United States",
    "dedicated": "August 21, 2009",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/b46172590e39dff0cb70a5dcb243bd90febcccf8/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 77200
  },
  {
    "templeName": "Pocatello Idaho Temple",
    "location": "Pocatello, Idaho, United States",
    "dedicated": "November 7, 2021",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/088138fe9fc211ec987feeeeac1e2a17f945bcb2/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4098474
  },
  {
    "templeName": "Saratoga Springs Utah Temple",
    "location": "Saratoga Springs, Utah, United States",
    "dedicated": "August 13, 2023",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/550bf261ac7911ed8c4beeeeac1e96d814e4a849/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4098475
  },
  {
    "templeName": "Alabang Philippines Temple",
    "location": "Philippines",
    "dedicated": "January 18, 2026",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/2cr3d0ah18yg08jyhl9vxg8cte1ge96z7q4h8c98/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4098472
  },
  {
    "templeName": "Nairobi Kenya Temple",
    "location": "Nairobi, Kenya",
    "dedicated": "May 18, 2025",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/xbrnlkgvoumomut7itk86rrpepzrej7pax1mvuzz/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4098473
  },
  {
    "templeName": "Brasília Brazil Temple",
    "location": "Brasilia, Brazil",
    "dedicated": "September 17, 2023",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/95f3f3abdd4811ed920ceeeeac1e15db91037802/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4098471
  },
  {
    "templeName": "Adelaide Australia Temple",
    "location": "Marden, South Australia, Australia",
    "dedicated": "June 15, 2000",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/ac55d0df60be2627d4e67f5aab5eece766f672c0/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 38298
  },
  {
    "templeName": "Tucson Arizona Temple",
    "location": "Tucson, Arizona, United States",
    "dedicated": "August 13, 2017",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/85c2eec3fdccb54f9191db89e21688f16e9e6ad5/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4017571
  },
  {
    "templeName": "Arequipa Peru Temple",
    "location": "Arequipa, Peru",
    "dedicated": "December 15, 2019",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/55f6c59ce8f9c093a9c689067f8674335de544e2/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4017570
  },
  {
    "templeName": "Pittsburgh Pennsylvania Temple",
    "location": "Cranberry Township, Pennsylvania, United States",
    "dedicated": "September 15, 2024",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/3acad454f1e511ee8547eeeeac1e08ec1996e39a/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4130713
  },
  {
    "templeName": "Tallahassee Florida Temple",
    "location": "Tallahassee, Florida, United States",
    "dedicated": "December 8, 2024",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/eimd0slu9a41hucf9p4n4ue3xurlm716kbaejbxi/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4130711
  },
  {
    "templeName": "Bahía Blanca Argentina Temple",
    "location": "Argentina",
    "dedicated": "November 23, 2025",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/eyafcdinietc2piwwuclmjgus8kq6af3w0h3xz7a/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4130710
  },
  {
    "templeName": "Star Valley Wyoming Temple",
    "location": "Afton, Wyoming, United States",
    "dedicated": "October 30, 2016",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/b6e3d29eb9947ea11a6c777b53d556ed1b282235/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4012421
  },
  {
    "templeName": "Barranquilla Colombia Temple",
    "location": "Barranquilla, Colombia",
    "dedicated": "December 9, 2018",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/7e68e3b2ed30f817f91392968737f45a07e17e79/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4012420
  },
  {
    "templeName": "Layton Utah Temple",
    "location": "Layton, Utah, United States",
    "dedicated": "June 16, 2024",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/529738f2aff311eea33eeeeeac1e3460ceb07401/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4108674
  },
  {
    "templeName": "Paris France Temple",
    "location": "Le Chesnay, France",
    "dedicated": "May 21, 2017",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/5ec026c4efeaaa19a98e40f0f1b4c6069ae63517/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4012417
  },
  {
    "templeName": "Provo City Center Temple",
    "location": "Provo, Utah, United States",
    "dedicated": "March 20, 2016",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/e97d43cdfab131f3ffac633cd7c952de861d51c8/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4012416
  },
  {
    "templeName": "Richmond Virginia Temple",
    "location": "Glen Allen, Virginia, United States",
    "dedicated": "May 7, 2023",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/8d15af22978011edae44eeeeac1e7b4cc85f1968/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4108675
  },
  {
    "templeName": "Syracuse Utah Temple",
    "location": "Syracuse, Utah, United States",
    "dedicated": "June 8, 2025",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/o3vkxs7q01j4fue0tmaurmboy67osfrdl2bkbgsj/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4130690
  },
  {
    "templeName": "Durban South Africa Temple",
    "location": "Durban, South Africa",
    "dedicated": "February 16, 2020",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/8b3f1b895a7c92ee66c2d0c7e78606f75f0d0cc8/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4012419
  },
  {
    "templeName": "Payson Utah Temple",
    "location": "Payson, Utah, United States",
    "dedicated": "June 7, 2015",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/7b998062094c11eca393eeeeac1e50df07c8fd34/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4007811
  },
  {
    "templeName": "Kinshasa Democratic Republic of the Congo Temple",
    "location": "Kinshasa, Democratic Republic of the Congo",
    "dedicated": "April 14, 2019",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/8cae06798bb811ec8827eeeeac1ee76df4b07c85/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4012418
  },
  {
    "templeName": "Rexburg Idaho Temple",
    "location": "Rexburg, Idaho, United States",
    "dedicated": "February 10, 2008",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/af036291e98a7caa26e051bd65e2a37176cbbf89/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 72126
  },
  {
    "templeName": "San Juan Puerto Rico Temple",
    "location": "San Juan, Puerto Rico",
    "dedicated": "January 15, 2023",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/b8e8764466cb11eda40eeeeeac1ead22054ff7fc/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4114420
  },
  {
    "templeName": "Oaxaca Mexico Temple",
    "location": "Oaxaca, Oaxaca, Mexico",
    "dedicated": "March 11, 2000",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/f4d7feeaec4cb56a01fe624fad0ddddb26267d11/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 37835
  },
  {
    "templeName": "Red Cliffs Utah Temple",
    "location": "St. George, Utah, United States",
    "dedicated": "March 24, 2024",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/5cd5c361840511ee9868eeeeac1e77f1c174272f/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4114421
  },
  {
    "templeName": "Puebla Mexico Temple",
    "location": "Puebla, Puebla, Mexico",
    "dedicated": "May 19, 2024",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/42fe168daf1b11eeafb4eeeeac1e9006b9466aaa/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4114416
  },
  {
    "templeName": "Auckland New Zealand Temple",
    "location": "Auckland, New Zealand",
    "dedicated": "April 13, 2025",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/stf2cvl7ssqhkj3h0a8ldp1fo9nxy9vtw8au4ze2/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4114417
  },
  {
    "templeName": "Praia Cape Verde Temple",
    "location": "Praia, Cape Verde",
    "dedicated": "June 19, 2022",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/978860bab5c311ec9b2deeeeac1efb02ff7625cc/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4114414
  },
  {
    "templeName": "Yigo Guam Temple",
    "location": "Yigo, Guam",
    "dedicated": "May 22, 2022",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/9f541175bcfc11eca77eeeeeac1ea52488fbff2f/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4114415
  },
  {
    "templeName": "Feather River California Temple",
    "location": "Yuba City, California, United States",
    "dedicated": "October 8, 2023",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/69a19c66094011ee9df4eeeeac1ef38bc47a5aec/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4114412
  },
  {
    "templeName": "Mendoza Argentina Temple",
    "location": "Mendoza, Argentina",
    "dedicated": "September 22, 2024",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/af7pu96yy3qbqvv6nq1bz9p662c5coek29rsmtkp/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4114410
  },
  {
    "templeName": "Salvador Brazil Temple",
    "location": "Salvador, Bahia, Brazil",
    "dedicated": "October 20, 2024",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/UlFyrs8Nz5vUZKIrUWEuLcfmvVr5wLfBnrDFKkAy/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 4114411
  },
  {
    "templeName": "Louisville Kentucky Temple",
    "location": "Crestwood, Kentucky, United States",
    "dedicated": "March 19, 2000",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/352468c0460e400281f169cc322ce2fc4c9c9a9f/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 38376
  },
  {
    "templeName": "Medford Oregon Temple",
    "location": "Central Point, Oregon, United States",
    "dedicated": "April 16, 2000",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/efc8b3641db69038094c6467ffcb3f7acb07d5b7/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 38377
  },
  {
    "templeName": "Fresno California Temple",
    "location": "Fresno, California, United States",
    "dedicated": "April 9, 2000",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/afe9eb9888bd6c7a011b33a41aac6e03fdc39282/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 37354
  },
  {
    "templeName": "Oklahoma City Oklahoma Temple",
    "location": "Yukon, Oklahoma, United States",
    "dedicated": "July 30, 2000",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/c7a301686d61136c5451eafcc81ee4633308a882/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 38378
  },
  {
    "templeName": "Copenhagen Denmark Temple",
    "location": "Frederiksberg, Hovedstaden, Denmark",
    "dedicated": "May 23, 2004",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/ecc2bf9dceebbd11e1f9ac07b060aed8c1970125/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 38397
  },
  {
    "templeName": "San José Costa Rica Temple",
    "location": "Belén, Heredia, Costa Rica",
    "dedicated": "June 4, 2000",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/bd91294858daabca93f65c705d65adc00568c3c3/full/320%2C/0/default",
    "status": "OPERATING",
    "templeOrgId": 38398
  }
];

const announcedTemples = [
  {
    "templeName": "São Paulo East Brazil Temple",
    "location": "Brazil",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4134474
  },
  {
    "templeName": "Iquitos Peru Temple",
    "location": "Peru",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4156607
  },
  {
    "templeName": "Retalhuleu Guatemala Temple",
    "location": "Guatemala",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4156606
  },
  {
    "templeName": "Harrisburg Pennsylvania Temple",
    "location": "Pennsylvania, United States",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/joib3s4miqk7yxy7c4j83a4mbq6c8op63o1ov21e/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4156620
  },
  {
    "templeName": "Charlotte North Carolina Temple",
    "location": "North Carolina, United States",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4156619
  },
  {
    "templeName": "Springfield Missouri Temple",
    "location": "Missouri, United States",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/z2okt93bltbf9p8o6pnzx67y20cj7ih70kyr3lef/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4156617
  },
  {
    "templeName": "Bakersfield California Temple",
    "location": "California, United States",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/cb96c7d813a611efa04ceeeeac1eda3033885104/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4156616
  },
  {
    "templeName": "Sunnyvale California Temple",
    "location": "California, United States",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/jc5mwhdymuiyink7b5nuij4oqyjs68avx1zcm6a0/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4156615
  },
  {
    "templeName": "Hamburg Germany Temple",
    "location": "Germany",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4156613
  },
  {
    "templeName": "Jakarta Indonesia Temple",
    "location": "Indonesia",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/3ruqdhoofk452hsw9pqcfpi4qb38lz6urgym1euw/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4156612
  },
  {
    "templeName": "Iloilo Philippines Temple",
    "location": "Philippines",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/r0jmg6rhc21wbjya2fndjaq13yh90gpt66ccjjoo/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4156611
  },
  {
    "templeName": "Tuguegarao City Philippines Temple",
    "location": "Philippines",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/hm9k0jognyx2gnpxst4wcu448jrokp6nbipuk1b1/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4156610
  },
  {
    "templeName": "Teresina Brazil Temple",
    "location": "Brazil",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/c789a40513a611ef914deeeeac1ef90661da137c/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4156608
  },
  {
    "templeName": "Portland Maine Temple",
    "location": "Maine, United States",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4176171
  },
  {
    "templeName": "West Jordan Utah Temple",
    "location": "Utah, United States",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4163881
  },
  {
    "templeName": "Lehi Utah Temple",
    "location": "Utah, United States",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4163880
  },
  {
    "templeName": "Cincinnati Ohio Temple",
    "location": "Ohio, United States",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/8fcpmndjpg1q017due17ifobeiuwv7d2ovduvgk7/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4163879
  },
  {
    "templeName": "Des Moines Iowa Temple",
    "location": "Iowa, United States",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/t8gwgi7obe8nc4089fn9861vkxssgvcpf8bl3jwj/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4163878
  },
  {
    "templeName": "Fort Bend Texas Temple",
    "location": "Texas, United States",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/sz1j4l04yd7onkuobe35xf751ris1x68dw4ek2fr/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4163877
  },
  {
    "templeName": "Yuma Arizona Temple",
    "location": "Arizona, United States",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/9069uon6hve8iqpwzl3tt6e41bxiutjxzlkm5s9t/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4163876
  },
  {
    "templeName": "Victoria British Columbia Temple",
    "location": "Canada",
    "dedicated": "Announced",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Victoria_BC_Downtown_skyline.jpg/960px-Victoria_BC_Downtown_skyline.jpg",
    "status": "ANNOUNCED",
    "templeOrgId": 4163875
  },
  {
    "templeName": "Honolulu Hawaii Temple",
    "location": "Hawaii, United States",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4163874
  },
  {
    "templeName": "Brisbane Australia South Temple",
    "location": "Australia",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4163873
  },
  {
    "templeName": "Edinburgh Scotland Temple",
    "location": "United Kingdom",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4163872
  },
  {
    "templeName": "Rosario Argentina Temple",
    "location": "Argentina",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4163871
  },
  {
    "templeName": "Florianopolis Brazil Temple",
    "location": "Brazil",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4163870
  },
  {
    "templeName": "Maracaibo Venezuela Temple",
    "location": "Venezuela",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4163869
  },
  {
    "templeName": "Uturoa French Polynesia Temple",
    "location": "French Polynesia",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4163868
  },
  {
    "templeName": "Chihuahua Mexico Temple",
    "location": "Mexico",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/cler3ehe1x7yujukbgb838g0fft6tl28kbcv9vh3/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4163867
  },
  {
    "templeName": "Culiacán Mexico Temple",
    "location": "Mexico",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4142975
  },
  {
    "templeName": "Kananga Democratic Republic of the Congo Temple",
    "location": "Democratic Republic of the Congo",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4142973
  },
  {
    "templeName": "Monrovia Liberia Temple",
    "location": "Liberia",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4142972
  },
  {
    "templeName": "Beira Mozambique Temple",
    "location": "Mozambique",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4138354
  },
  {
    "templeName": "Vienna Austria Temple",
    "location": "Austria",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4138352
  },
  {
    "templeName": "Oslo Norway Temple",
    "location": "Norway",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4138350
  },
  {
    "templeName": "Price Utah Temple",
    "location": "Utah, United States",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4168043
  },
  {
    "templeName": "Summit New Jersey Temple",
    "location": "New Jersey, United States",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4168042
  },
  {
    "templeName": "Milwaukee Wisconsin Temple",
    "location": "Wisconsin, United States",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4168041
  },
  {
    "templeName": "Huntsville Alabama Temple",
    "location": "Alabama, United States",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/haw2r7wq03fzwk9ixzmwwnv1uk4glld5baosbq35/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4168040
  },
  {
    "templeName": "El Paso Texas Temple",
    "location": "Texas, United States",
    "dedicated": "Announced",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/El_Paso_Cityscape_%28cropped%29.jpg/960px-El_Paso_Cityscape_%28cropped%29.jpg",
    "status": "ANNOUNCED",
    "templeOrgId": 4168039
  },
  {
    "templeName": "Coeur d'Alene Idaho Temple ",
    "location": "Idaho, United States",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/qf4dghyoehf0jnmn1p0o0xki2hpu0851s36antc3/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4168038
  },
  {
    "templeName": "Maputo Mozambique Temple",
    "location": "Mozambique",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4168037
  },
  {
    "templeName": "Kampala Uganda Temple",
    "location": "Uganda",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4168036
  },
  {
    "templeName": "Abuja Nigeria Temple",
    "location": "Nigeria",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4168035
  },
  {
    "templeName": "Milan Italy Temple",
    "location": "Italy",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4168034
  },
  {
    "templeName": "Puerto Montt Chile Temple",
    "location": "Chile",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4168033
  },
  {
    "templeName": "Santiago Dominican Republic Temple",
    "location": "Dominican Republic",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4168032
  },
  {
    "templeName": "Medellín Colombia Temple",
    "location": "Colombia",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4168031
  },
  {
    "templeName": "Santa Ana El Salvador Temple",
    "location": "El Salvador",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4168030
  },
  {
    "templeName": "Juchitán de Zaragoza Mexico Temple",
    "location": "Mexico",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4168029
  },
  {
    "templeName": "Dublin Ireland Temple",
    "location": "Ireland",
    "dedicated": "Announced",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Dublin_-_aerial_-_2025-07-07_01.jpg/960px-Dublin_-_aerial_-_2025-07-07_01.jpg",
    "status": "ANNOUNCED",
    "templeOrgId": 4168028
  },
  {
    "templeName": "Queen Creek Arizona Temple",
    "location": "Arizona, United States",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4168027
  },
  {
    "templeName": "Missoula Montana Temple",
    "location": "Montana, United States",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/9bwq20yxan4bzntugra9txdg3omt6v8cjcd9mtff/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4148134
  },
  {
    "templeName": "Mexico City Benemérito Mexico Temple",
    "location": "Mexico",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/uvfspe3yq16akkz1r9zyp3qt8zaoez4wh4s12f02/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4148128
  },
  {
    "templeName": "Santos Brazil Temple",
    "location": "Brazil",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4148126
  },
  {
    "templeName": "Maceió Brazil Temple",
    "location": "Brazil",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/c4bd3d9a13a611efbf27eeeeac1ed41dbaccc990/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4148125
  },
  {
    "templeName": "Norfolk Virginia Temple",
    "location": "Virginia, United States",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/vll1whv27xgay6dhvb23gopywr468om5trbo1f2m/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4171165
  },
  {
    "templeName": "Cusco Peru Temple",
    "location": "Peru",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4148124
  },
  {
    "templeName": "Greenville South Carolina Temple",
    "location": "South Carolina, United States",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4171164
  },
  {
    "templeName": "Shanghai People’s Republic of China Temple",
    "location": "China",
    "dedicated": "Announced",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Pudong_Shanghai_November_2017_panorama.jpg/960px-Pudong_Shanghai_November_2017_panorama.jpg",
    "status": "ANNOUNCED",
    "templeOrgId": 4130716
  },
  {
    "templeName": "Dubai United Arab Emirates Temple",
    "location": "United Arab Emirates",
    "dedicated": "Announced",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Burj_Khalifa_%28worlds_tallest_building%29_and_the_Dubai_skyline_%2825781049892%29.jpg/960px-Burj_Khalifa_%28worlds_tallest_building%29_and_the_Dubai_skyline_%2825781049892%29.jpg",
    "status": "ANNOUNCED",
    "templeOrgId": 4130715
  },
  {
    "templeName": "Rapid City South Dakota Temple",
    "location": "South Dakota, United States",
    "dedicated": "Announced",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Rapid_City_Skyline_%282022%29.jpg/960px-Rapid_City_Skyline_%282022%29.jpg",
    "status": "ANNOUNCED",
    "templeOrgId": 4171163
  },
  {
    "templeName": "Barcelona Spain Temple",
    "location": "Spain",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/b42fb8e513a611ef810ceeeeac1e1bfbd6b8bda8/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4148122
  },
  {
    "templeName": "Liverpool Australia Temple",
    "location": "Australia",
    "dedicated": "Announced",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Liverpoolcityskyline.jpg/960px-Liverpoolcityskyline.jpg",
    "status": "ANNOUNCED",
    "templeOrgId": 4171162
  },
  {
    "templeName": "Nouméa New Caledonia Temple",
    "location": "New Caledonia",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4171161
  },
  {
    "templeName": "San Jose del Monte Philippines Temple",
    "location": "Philippines",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4171160
  },
  {
    "templeName": "Uyo Nigeria Temple",
    "location": "Nigeria",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4171159
  },
  {
    "templeName": "Porto Portugal Temple",
    "location": "Portugal",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4171158
  },
  {
    "templeName": "Campo Grande Brazil Temple",
    "location": "Brazil",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4171157
  },
  {
    "templeName": "Rivera Uruguay Temple",
    "location": "Uruguay",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4171156
  },
  {
    "templeName": "Ulaanbaatar Mongolia Temple",
    "location": "Mongolia",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/mllhs037uekarpnow0qtbpzojnu6p3fg2r17vjjb/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4160404
  },
  {
    "templeName": "Chorrillos Peru Temple",
    "location": "Peru",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4171155
  },
  {
    "templeName": "Reynosa Mexico Temple",
    "location": "Mexico",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4171154
  },
  {
    "templeName": "Kahului Hawaii Temple",
    "location": "Hawaii, United States",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4160401
  },
  {
    "templeName": "Spanish Fork Utah Temple",
    "location": "Utah, United States",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4171153
  },
  {
    "templeName": "Flagstaff Arizona Temple",
    "location": "Arizona, United States",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4171152
  },
  {
    "templeName": "Roanoke Virginia Temple",
    "location": "Virginia, United States",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4160400
  },
  {
    "templeName": "Caldwell Idaho Temple",
    "location": "Idaho, United States",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4171151
  },
  {
    "templeName": "Tulsa Oklahoma Temple",
    "location": "Oklahoma, United States",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/tk6jlx7y51179ccdxg9pd9z03maakbw0cm58rsnr/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4160399
  },
  {
    "templeName": "Colorado Springs Colorado Temple",
    "location": "Colorado, United States",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/d3x9rmdulew7u9evwnuhmb9vf7kpshov3pnwz9i0/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4160398
  },
  {
    "templeName": "Osaka Japan Temple",
    "location": "Japan",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/webtkq0287yjkbbxml8tpziexew8bui61vqwfuwo/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4160397
  },
  {
    "templeName": "Laoag Philippines Temple",
    "location": "Philippines",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4160396
  },
  {
    "templeName": "Mbuji-Mayi Democratic Republic of the Congo Temple",
    "location": "Democratic Republic of the Congo",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4160395
  },
  {
    "templeName": "Luanda Angola Temple",
    "location": "Angola",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4160394
  },
  {
    "templeName": "Cape Coast Ghana Temple",
    "location": "Ghana",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4160393
  },
  {
    "templeName": "Calabar Nigeria Temple",
    "location": "Nigeria",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/65fsqmch9nb28c9htv27j55wilako2ev1igd0qnq/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4160392
  },
  {
    "templeName": "Goiânia Brazil Temple",
    "location": "Brazil",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4160390
  },
  {
    "templeName": "Russia Temple",
    "location": "Russia",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4108676
  },
  {
    "templeName": "Viña del Mar Chile Temple",
    "location": "Chile",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4160389
  },
  {
    "templeName": "Huancayo Peru Temple",
    "location": "Peru",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4160388
  },
  {
    "templeName": "Piura Peru Temple",
    "location": "Peru",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/w401bwv4x3bqglhp32v3nfgwc20dvl60hq0894gw/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4160387
  },
  {
    "templeName": "Cancún Mexico Temple",
    "location": "Mexico",
    "dedicated": "Announced",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Skyline_cancun_mexico._%2824209557802%29.jpg/960px-Skyline_cancun_mexico._%2824209557802%29.jpg",
    "status": "ANNOUNCED",
    "templeOrgId": 4160386
  },
  {
    "templeName": "La Paz Bolivia Temple",
    "location": "Bolivia",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/b7e260aa13a611ef9048eeeeac1eee0f360f4c1d/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4142977
  },
  {
    "templeName": "Savai'i Samoa Temple ",
    "location": "Samoa",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/c995vvlivkr31ocdsap9qu5nhunkduujugsva379/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4160385
  },
  {
    "templeName": "Vitória Brazil Temple",
    "location": "Brazil",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4142976
  },
  {
    "templeName": "Tula Mexico Temple",
    "location": "Mexico",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4153320
  },
  {
    "templeName": "Toluca Mexico Temple",
    "location": "Mexico",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/iwtolueu7vtlimtwe4n7bqwiet5ok7cmgbmg8gor/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4153319
  },
  {
    "templeName": "Pachuca Mexico Temple",
    "location": "Mexico",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4153318
  },
  {
    "templeName": "Cuernavaca Mexico Temple",
    "location": "Mexico",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/78xvza1vsjr730wzggwwb0n6qv3t72ieuclu8jmv/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4153317
  },
  {
    "templeName": "Tacoma Washington Temple",
    "location": "Washington, United States",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/bfr00qjwzuj4kewecx5desudgk559x627f8dngm5/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4153316
  },
  {
    "templeName": "Buenos Aires City Center Argentina Temple",
    "location": "Argentina",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/zaz1fe9x1u2j9bzrz409ewvtycy7f9uy7n5r9ryi/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4153308
  },
  {
    "templeName": "Chiclayo Peru Temple",
    "location": "Peru",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4153307
  },
  {
    "templeName": "Eket Nigeria Temple",
    "location": "Nigeria",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4153306
  },
  {
    "templeName": "Santiago Philippines Temple",
    "location": "Philippines",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/dbx7dn2sf68z2dkr9o91aiidxp6xfvtvhcaa5eqm/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4153305
  },
  {
    "templeName": "Naga Philippines Temple",
    "location": "Philippines",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/ezhn7qdd7ohudw1rgatqia0vo9vi2zvpn11dznji/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4153304
  },
  {
    "templeName": "Busan Korea Temple",
    "location": "South Korea",
    "dedicated": "Announced",
    "imageUrl": "https://www.churchofjesuschrist.org/imgs/az6tow3bmievwjahtohx0jsyio2njarv4fghe30s/full/320%2C/0/default",
    "status": "ANNOUNCED",
    "templeOrgId": 4153303
  }
];
