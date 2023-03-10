import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import Navbar from './Navbar'

let products =  {
  'B071Z8M4KX': {'name': 'boAt BassHeads 100 in-Ear Wired Headphones with Mic (Black)', 'price': 379.0, 'rating': '4.1 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/719elVA3FvL.jpg'}, 'B0BJDY3MMT': {'name': 'Oraimo Shark 4 Bluetooth Neckband Wireless in Ear Earphones Deep Bass,20Hrs Playtime,ASAP Charge,ENC Tech,L...', 'price': 899.0, 'rating': '3.9 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/51suH6PolDL.jpg'}, 'B07T5DKR5D': {'name': 'ro in Ear Wired Earphones with Mic, 3.5mm Audio Jack, 10mm Drivers, Phone/Tablet Compatible(Black)', 'price': 149.0, 'rating': '3.5 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/51D37uhFFBL.jpg'}, 'B07QZ3CZ48': {'name': '122 Wired in Ear Earphones with Heavy Bass, Integrated Controls and Mic (Gun Metal)', 'price': 399.0, 'rating': '4.0 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61leqZi5dQL.jpg'}, 'B09J2GD5X4': {'name': 'QCY T17 |TWS| Environmental Noise Cancellation (ENC) | Playback Up to 26hr | Low Latency | AAC HD Audio Cod...', 'price': 1699.0, 'rating': '4.3 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/41FxhgdnduL.jpg'}, 'B0B3MZV2XJ': {'name': 'truke BTG Beta True Wireless in Ear Earbuds with 13mm Big Speaker Drivers, 38H Playtime, Fast Charging, Tru...', 'price': 1099.0, 'rating': '4.4 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61uvOQ5QQGL.jpg'}, 'B0B5GJRTHB': {'name': 'Wecool Moonwalk M1 ENC True Wireless in Ear Earbuds with Mic, Titanium Drivers for Rich Bass Experience, 4...', 'price': 899.0, 'rating': '4.1 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61S0j2RXjcL.jpg'}, 'B09RGVM96S': {'name': 'truke Buds BTG 1 Bluetooth Truly Wireless Gaming in Ear Earbuds with (ENC) & Quad MEMS Mic for Clear Calls,...', 'price': 1199.0, 'rating': '4.1 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/51+3lScSWqL.jpg'}, 'B09TVVGXWS': {'name': ' Z2 Bluetooth Wireless in Ear Earphones with Mic, Bombastic Bass - 12.4 Mm Drivers, 10 Mins Charge - 20 Hrs...', 'price': 1999.0, 'rating': '4.2 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/51UhwaQXCpL.jpg'}, 'B08MSYDMZ7': {'name': '102 Wired in Ear Earphones with Mic (Mint Purple)', 'price': 399.0, 'rating': '4.2 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/51CxVGGzHjL.jpg'}, 'B09R24JBYV': {'name': 'ro in Ear Wired Earphones with Mic, 3.5mm Audio Jack, 10mm Drivers, Phone/Tablet Compatible(Green)', 'price': 149.0, 'rating': '3.5 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61+0KSoFrOL.jpg'}, 'B093LMBJB6': {'name': 'oll E5 Wired In Ear Earphones with HD Sound and Extra Powerful Bass with Mic, Tangle Free & Extra Length Ca...', 'price': 299.0, 'rating': '3.9 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61TmcMQHB+L.jpg'}, 'B08YYQ3WFG': {'name': '105 Wired in Ear Earphones with Mic (Black)', 'price': 449.0, 'rating': '4.0 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/51PyI5qRSwS.jpg'}, 'B0BRXY7FQB': {'name': 'boAt Bassheads 220 Wired in Ear Earphones(Black Indi)', 'price': 499.0, 'rating': '3.5 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61iSV4o+X-L.jpg'}, 'B0B4F54WZW': {'name': 'pTron Tangent Duo Made in India Bluetooth 5.2 Wireless in-Ear Earphones with Mic, 24Hrs Playback, 13mm Driv...', 'price': 499.0, 'rating': '3.2 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/51niwp02VOL.jpg'}, 'B09R24HMNW': {'name': 'ro in Ear Wired Earphones with Mic, 3.5mm Audio Jack, 10mm Drivers, Phone/Tablet Compatible(Blue)', 'price': 149.0, 'rating': '3.5 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61+5q4oGJWL.jpg'}, 'B07KY3K2YG': {'name': '152 in Ear Wired Earphones with Mic(Jazzy Blue)', 'price': 499.0, 'rating': '4.1 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61O8tL6wTtS.jpg'}, 'B09SGGRKV8': {'name': 'uds 30 3.5Mm Stereo Wired in Ear Earphones with Mic for Calling, Volume Control, Multifunction Button, 14Mm...', 'price': 199.0, 'rating': '3.6 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61SEalrpuoL.jpg'},
  'B08D7QZG8H': {'name': "ECOLINE Clothing Eco-Friendly Men's 50/50 Blend Polo T-Shirt", 'price': 617, 'rating': '4.0 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/81YPOOLioPL.jpg'}, 'B07MZLP3YM': {'name': "Amazon Brand - Symbol Men's Regular Polo Shirt", 'price': 369, 'rating': '3.9 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/81xbkxEVMUL.jpg'}, 'B08VW1T9L4': {'name': "ECOLINE Clothing Eco-Friendly Men's 50/50 Blend Double Coloured Polo T-Shirt", 'price': 617, 'rating': '3.8 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/81IrpsD6pcL.jpg'}, 'B07CT3J9S4': {'name': "- Be Bold Inside & Elegant Outside Baby's Cotton Tshirt Pant Set", 'price': 639, 'rating': '4.2 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/51nUfiMuCLL.jpg'}, 'B0BGJ7JRCL': {'name': 'ton Fleece Clothing Sets for Boys & girls - Unisex Winter Clothing sets Full Sleeve T-shirt & Pant', 'price': 299, 'rating': '3.9 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/71bKVNlYHbL.jpg'}, 'B09WYVKG1X': {'name': 'othing Sets for Baby Boys & girls - Unisex Clothing sets Full Sleeve T-shirt & Pant', 'price': 299, 'rating': '4.3 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/51WPR7e1+SL.jpg'}, 'B09Z89NQWW': {'name': ' Baby Flannel Jumpsuit Panda Style Cosplay Clothes Bunting Outfits Snowsuit Hooded Romper Outwear (Grey Sca...', 'price': 664, 'rating': '3.7 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61kqhTCKtgL.jpg'}, 'B0B7R7YP5M': {'name': 'Baby Gift Set of 5 Items, Open Half Sleeves Jhabla Vest- Tshirt, Pajama Pants, Cap, Mittens and Socks, Cott...', 'price': 449, 'rating': '4.4 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/81+X9ugBeKL.jpg'}, 'B0BGH32K91': {'name': 'ton Clothing Sets for Boys & girls - Unisex Clothing sets Full Sleeve T-shirt Pant & Cap', 'price': 349, 'rating': '3.6 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/81QZl5CLZOL.jpg'}, 'B0994T5938': {'name': "- Be Bold Inside & Elegant Outside Kid's Cotton T-Shirt", 'price': 549, 'rating': '3.9 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/512Fau61yGL.jpg'}, 'B09WYZW846': {'name': 'ton Clothing Sets for Baby Boys & girls - Unisex Clothing sets Full Sleeve T-shirt & Pant', 'price': 370, 'rating': '4.0 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/51WPR7e1+SL.jpg'}, 'B0BFDJB6P2': {'name': 'eece Clothing Sets for Boys & girls - Unisex Winter Clothing sets Full Sleeve T-shirt & Pant', 'price': 299, 'rating': '4.1 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/91Gwmp+h95L.jpg'}, 'B0B69NSYPJ': {'name': 'ton Clothing Sets for Boys & girls - Unisex Clothing sets Full Sleeve T-shirt & Pant', 'price': 349, 'rating': '4.6 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/71kEW9MuwDL.jpg'}, 'B0B1C48DVF': {'name': 'hing Boys Patterned Tracksuit Set', 'price': 949, 'rating': '3.4 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61Z1oCFE11L.jpg'}, 'B0B53HVQXC': {'name': 'hing Colorblocked Boys Hoodies Sweatshirt', 'price': 599, 'rating': '4.0 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/51mF7diIunL.jpg'}, 'B0B8N4WN42': {'name': "hing Boy's Fleece Hooded Sweatshirt", 'price': 399, 'rating': '4.0 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61wcOJs11ZL.jpg'}, 'B07RD7F137': {'name': "hing Women's Slim Fit Poly Cotton Track Pants", 'price': 549, 'rating': '4.0 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/51BtZ9EkmHL.jpg'}, 'B0BCQXXFRK': {'name': 'hing Color Blocked Girls Hoodies Sweatshirt', 'price': 549, 'rating': '4.1 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61KwovupQvL.jpg'}, 'B09KV99RL6': {'name': 'hing Cotton Hooded Sweatshirt for Girls', 'price': 594, 'rating': '4.0 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61gGbVsrGAL.jpg'},
  'B0BR3YBZKD': {'name': 'Samsung 189 L 5 Star Inverter Direct-Cool Single Door Refrigerator (RR21C2H25S8/HL,Elegant Inox, Base Stand...', 'price': 17590, 'rating': '4.3 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61KOvwmoIML.jpg'}, 'B0BLHJXJ65': {'name': 'r 60MM BSK EBG', 'price': 779, 'rating': 'nan', 'url': 'https://m.media-amazon.com/images/I/717IVWKBGIL.jpg'}, 'B07R9NJFYF': {'name': 'AmazonBasics 564 L Frost Free Side-by-Side Refrigerator with Water Dispenser (Silver Steel Finish)', 'price': 49490, 'rating': '4.0 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/71DuofqGR8L.jpg'}, 'B07R59VSRG': {'name': 'AmazonBasics 468 L Frost Free Side-by-Side Automatic Defrost Refrigerator (AB2019RF008, Multi Airflow, Black)', 'price': 42990, 'rating': '3.6 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/5160SoMxXnL.jpg'}, 'B084MS5ZKP': {'name': 'Amazon Brand - Solimo Fridge Organiser Set, (3 pcs Fridge Mat, 2 pcs Fridge Handle Cover, 1 Fridge Top Cove...', 'price': 289, 'rating': '3.7 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/819TZuHXldL.jpg'}, 'B09HV4RDY4': {'name': 'Lepose Refrigerator Multi-Purpose 4 Pcs Round Plastic Legs Foot and Stand | Washing Machine Stand | Furnitu...', 'price': 199, 'rating': '4.0 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/519znUpD2SL.jpg'}, 'B08SC2ZTDP': {'name': ' Star Direct Cool Single Door Refrigerator (RR19A241BGS/NL, Grey Silver, 2022 Model)', 'price': 13190, 'rating': '4.3 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/81FyYXoQF-L.jpg'}, 'B09LCPR8VG': {'name': 'Star Direct Cool Single Door Refrigerator (RD EDGE 200B 23 WRF PP BL, Pep Blue, Large Vegetable Tray, 2022 ...', 'price': 12190, 'rating': '4.1 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/618ikeOHFaL.jpg'}, 'B08SBSL8Y2': {'name': ' Star with Inverter Double Door Refrigerator (RT28A3453S8/HL, Elegant Inox)- 2022 Model', 'price': 24490, 'rating': '4.4 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61-Vk77zloL.jpg'}, 'B08346545V': {'name': 'Star Inverter Frost Free Double Door Refrigerator (RT28T3743S8/HL, Silver, Elegant Inox, Convertible, 2022 ...', 'price': 26290, 'rating': '4.3 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61m9iGtuS2L.jpg'}, 'B078YHT1FR': {'name': ' Frost Free Multi-Door Refrigerator(FP 263D Protton Roy, Alpha Steel)', 'price': 24990, 'rating': '4.2 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/51doUVvMA-L.jpg'}, 'B083KVZQ7Z': {'name': ' 3 Star Direct-Cool Single Door Refrigerator (WDE 205 CLS 3S, Blue, 2022 Model)', 'price': 13990, 'rating': '4.2 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/51HxYKRTfhL.jpg'}, 'B08Z878LCJ': {'name': 'tar Direct-Cool Single Door Refrigerator (CDSD522190MS, Moon Silver, 2022 Model)', 'price': 11490, 'rating': '4.1 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/71pDcgractL.jpg'}, 'B0BR3ZP5R6': {'name': ' Star Inverter Direct-Cool Single Door Refrigerator (RR20C2Z226U/NL, Mystic Overlay Blue, Base Stand with D...', 'price': 14590, 'rating': '4.3 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/71hrzlHIM7L.jpg'}, 'B08VJ3QWFZ': {'name': 'Star Inverter Direct-Cool Single Door Refrigerator (RD UNO 1854 PTI AQ WN, Aqua Wine, Cool Lock Technology,...', 'price': 14690, 'rating': '4.2 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61tDzb0VASL.jpg'}, 'B08XPN8YR4': {'name': ' Star Inverter Direct Cool Single Door Refrigerator(RR23A2F3XUT/HL, Digi-Touch Cool, Base Stand with Drawe...', 'price': 18990, 'rating': '4.3 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61r28To-5rS.jpg'}, 'B08446154L': {'name': ' Star Inverter Direct-Cool Single Door Refrigerator (RR21T2H2XCR/HL, Camellia Purple, Base Stand with Drawe...', 'price': 16990, 'rating': '4.3 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/610k4R-foDL.jpg'}, 'B0845BZ8XZ': {'name': ' Star Inverter Direct-Cool Single Door Refrigerator (RR20T2Y2YRH/NL, Scarlet Red, 2022 Model)', 'price': 13990, 'rating': '4.1 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61whDGLJmzL.jpg'}, 'B08XBD1PT1': {'name': 'ar Direct Cool Single Door Mini Refrigerator(MDRD86FGE31, Silver)- 2022 Model', 'price': 7890, 'rating': '3.9 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/81wXGjSqygL.jpg'},
  'B07V6Z1HH2': {'name': 'AmazonBasics 8.5 kg Top Load Washing Machine (Grey/Black, Full Metal body, LED Display)', 'price': 16990.0, 'rating': '4.0 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/71EYRYzFKIL.jpg'}, 'B09DD573SY': {'name': 'Semi-Automatic Top Loading Washing Machine (P7020NGAZ, Dark Gray, Wind Jet Dry)', 'price': 12490.0, 'rating': '4.3 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61xtcXJfYaL.jpg'}, 'B08DF1Y7T7': {'name': 'Inverter Fully-Automatic Top Loading Washing Machine (T70Sksf1Z, Middle Free Silver, Turbodrum)', 'price': 17990.0, 'rating': '4.3 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61jhEDBPOaL.jpg'}, 'B08FMN5ZQM': {'name': '5 Star Semi-Automatic Top Loading Washing Machine (WT60R2000LL/TL, Light Grey, Center jet technology)', 'price': 8990.0, 'rating': '4.2 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61ySBQQ9GlL.jpg'}, 'B084LGQKD7': {'name': 'Inverter 5 Star Fully-Automatic Front Loading Washing Machine (WW60R20GLMA/TL, White, Hygiene Steam)', 'price': 22490.0, 'rating': '4.4 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/71YPzkeoRzL.jpg'}, 'B07WGD8QQT': {'name': '5 Star Semi-Automatic Top Loading Washing Machine (SUPERB ATOM 7.0, Grey Dazzle, TurboScrub Technology)', 'price': 10440.0, 'rating': '4.3 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/5193gu6GH7L.jpg'}, 'B08QP41KBP': {'name': '5 Star Royal Fully-Automatic Top Loading Washing Machine (WHITEMAGIC ROYAL 7.0 GENX, Grey, Hard Water Wash)', 'price': 15790.0, 'rating': '4.2 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/517QUFygaeL.jpg'}, 'B08QNZTQ96': {'name': 'g 5 Star Royal Fully-Automatic Top Loading Washing Machine (WHITEMAGIC ROYAL 6.5 GENX, Grey, Hard Water Wash)', 'price': 14740.0, 'rating': '4.2 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/51hu9nbHShL.jpg'}, 'B07QGWHH63': {'name': 'ully-Automatic Top Loading Washing Machine (WT EON 620 A Gp Gr, Grey)', 'price': 12990.0, 'rating': '4.1 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/511v47yi5EL.jpg'}, 'B07V3SGB3G': {'name': 'AmazonBasics 7 kg Semi Automatic Washing Machine (with Heavy wash function, White/Blue color)', 'price': 9690.0, 'rating': '3.9 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/71+JK-QC68L.jpg'}, 'B07V3SH3LK': {'name': 'Amazon Basics 7 Kg Fully Automatic Front Loading Washing Machine (White, Steam Wash, Built-in Heater)', 'price': 22990.0, 'rating': '3.2 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61ePF-rDyXL.jpg'}, 'B09T6NH99B': {'name': '5 Star Semi-Automatic Top Loading Washing Machine (WT70M3000UU/TL, LIGHT GRAY, Double Storm Pulsator)', 'price': 10490.0, 'rating': '4.2 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/71StafL7njL.jpg'}, 'B0B8NHX62W': {'name': 'verter 5 Star Fully-Automatic Top Load Eco Bubble Washing Machine (WA70BG4441YYTL, Bubble Storm Technology,...', 'price': 17990.0, 'rating': '4.2 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61Ct6+KF4AL.jpg'}, 'B08R8DGDSK': {'name': '5 Star Royal Fully-Automatic Top Loading Washing Machine (WHITEMAGIC ROYAL 6.0 GENX, Satin Grey, Hard Water...', 'price': 14540.0, 'rating': '4.3 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/511tXz6RWYL.jpg'}, 'B083G25P9L': {'name': 'g 5 Star Semi-Automatic Top Loading Washing Machine (ACE 7.5 SUPREME, Grey Dazzle)', 'price': 11490.0, 'rating': '4.3 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61WJqbSrQQL.jpg'}, 'B09T6NX8W2': {'name': '5 Star Semi-Automatic Top Loading Washing Machine (WT65R2200LL/TL, Blue, Air Turbo Drying System)', 'price': 9990.0, 'rating': '4.1 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/71WZd+x2RQL.jpg'}, 'B09ZBLDBLN': {'name': ' Front Load Washing Machine 2X Power Dual Steam (DIVA AQUA SXS 6008, Silver, Active Color Protection, Hard ...', 'price': 23790.0, 'rating': '4.2 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/71aXjFRD35L.jpg'}, 'B082FJ9RS7': {'name': 'g 5 Star Royal Plus Fully-Automatic Top Loading Washing Machine (WHITEMAGIC ROYAL PLUS 7.5, Grey, Hard Wate...', 'price': 17740.0, 'rating': '4.2 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/71pVSyDJD9L.jpg'}, 'B09C693228': {'name': ' Semi Automatic Top Loading Washing Machine (WTT70DLIM,Burgundy)', 'price': 'nan', 'rating': '3.9 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61UQoBiuQ8L.jpg'},
  'B0BKPYB28Q': {'name': 'Catron Drive Socket Set, Metric Ratchet Wrench Set with 4-14mm CR-V Sockets, Extension Bars,S2 Bits, Mechan...', 'price': 899.0, 'rating': '4.1 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/81zkP5mzHLL.jpg'}, 'B00JLJ9IDQ': {'name': 'river Set with Bulb - 840 (Neon, Silver and Green)', 'price': 287.0, 'rating': '4.3 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/811PcITWKML.jpg'}, 'B07CLL89VB': {'name': 'ACHRO Chrome Steel Professional Industrial Grade Screwdriver Set with Box Spanners (Silver, Small) -Pack of 24', 'price': 649.0, 'rating': '4.1 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/81DquGlGOdL.jpg'}, 'B07DYC3ND3': {'name': 'Scout Premium 60 in 1 Precision S2 bits Superb Aluminum Screwdriver Set for iPhone 8 / X, Smartphone, Macbo...', 'price': 899.0, 'rating': '4.4 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/71I4nbRlTGL.jpg'}, 'B095X9DPDJ': {'name': 'VIBOTON 110 in 1 Screw driver Tool Set Kit, Screwdriver Set, Tool Kit, Professional Precision Screwdriver S...', 'price': 589.0, 'rating': '4.1 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/718HG1mrdZL.jpg'}, 'B07HWWL8Q1': {'name': 'Generic 13Pcs Alternator Freewheel Pulley Removal Socket Bit Set Garage Tool', 'price': 2272.0, 'rating': '4.1 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/41XvZz7HzGL.jpg'}, 'B082B6L6DK': {'name': 'Ketsy 311 Hand Tool Kit 12 Pcs. (8 Pcs Screwdriver ???1 Claw Hammer Steel Shaft ?? Lb ???1 Combination Plier 8???...', 'price': 845.0, 'rating': '4.0 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/41LuJbLFZzL.jpg'}, 'B0B9Y7K6SP': {'name': 's Tool Kit & Screwdriver and Socket Set,Hand Tool Kit Wrench Set Multi Purpose Combination Tool Case Precis...', 'price': 699.0, 'rating': '4.4 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/71qqfUDmiRS.jpg'}, 'B0744NSM3N': {'name': 'T126C Hand Tool Kit (126-Piece) for Home DIY and Professional use', 'price': 1983.6, 'rating': '4.3 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/81kskpCT-0L.jpg'}, 'B07G8KHN7N': {'name': ' in 1 Interchangeble Multipurpose Mini Screwdriver Set Magnetic Slot Wrench Bits Repair Tools Kit Set Combi...', 'price': 259.0, 'rating': '4.0 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/41vrQATAo5L.jpg'}, 'B09JNV8MVJ': {'name': 'g Combination Spanner/Wrench Set Tools kit/12 Piece Tools kit for Home use - Professional Spanners , Open End', 'price': 340.0, 'rating': '3.0 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61QmFvx0xeS.jpg'}, 'B0B4KDLV6Y': {'name': 'uCare 5-in-1 Pc Screw Driver Kit With 2 Flat Blades, 2 Phillips Head, 1 Round Poker Bar | Multi-purpose Too...', 'price': 139.0, 'rating': '3.8 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61a1Ny1+Q8L.jpg'}, 'B00INTGY6O': {'name': '500 RE Corded-Electric Drill Tool Set (Blue), 10 mm', 'price': 3999.0, 'rating': '4.4 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/81fP7IRuKKL.jpg'}, 'B0711Y97RQ': {'name': ' Kit (Blue, 12 Pieces)', 'price': 1425.0, 'rating': '4.4 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/71rTuYwImRL.jpg'}, 'B07W4KVGWZ': {'name': ' Piece Household Tool Set', 'price': 1669.0, 'rating': '4.4 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61dKElQfyRL.jpg'}, 'B0713YFTHB': {'name': 'oken Bolt Screw Extractor Remover Set Easy Out Drill Bits Tools Kit 3-22mm', 'price': 270.0, 'rating': '3.6 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61Y+7MX4ywL.jpg'}, 'B08SKC9VZX': {'name': 'test PC Repair Screwdriver Set, 110 in 1 Professional Precision Screwdriver Set, Multi-Function Magnetic Re...', 'price': 689.0, 'rating': '4.3 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61AaaoFDv7L.jpg'}, 'B013ERLQDK': {'name': "5518 16'' Essential Tool Box with Metal Latch (Black and Yellow)", 'price': 783.75, 'rating': '4.2 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/71Rf6RusBoL.jpg'}, 'B0BBB8B9CR': {'name': ' Basic Tool Kit, Home Tool Kit for Men and Students,Tool Box with Tools Included,Small Tool Kit for DIY,Hou...', 'price': 499.0, 'rating': '3.0 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/51TRrCF+QVL.jpg'}
}
function ProductCard(props){
  let item = props.props
  let addToCart = props.addToCart
  let selected = props.selected
  let cartImg = selected ? './cart_active.png' : './cart.svg'

  const toast = useToast()

  function cartClick(item){
    toast({
      title:`Product added to cart`,
      status:'success',
      isClosable:true,
      duration: 3000,
      variant:'subtle',
      position:'bottom'
    })
    addToCart((cart)=>[...cart,item['id']])
  }

  return(<>
    
    <div className="bg-gradient-to-tl from-green-400 to-purple-500 product w-[250px] h-[360px] hover:scale-105 duration-200 cursor-pointer ease-in-out hover:shadow-sm hover:shadow-white rounded-xl">
      <div className="h-[290px]">
        <img src={item['url']} alt="" className='h-full w-full rounded-t-xl'/>
      </div>
      <div className="h-[70px] p-3">
        <div className='text-white overflow-hidden max-h-[28px]'>Name : {item['name']}</div>
        <div className='text-white text-bold overflow-hidden max-h-[30px]'>Price : {'??? ' + item['price']}</div>
      </div>
      <div className='h-10 w-10 absolute top-5 left-3/4 z-0 '>
        <img src={cartImg} alt="" className='duration-200' onClick={()=>{
          cartClick(item)
        }}/>
      </div>
    </div>
  </>)
}

export default function ProductPage(props) {
  const toast = useToast()
  let navigate = useNavigate()
  let [formData,setformData] = useState({searchString:"",order:'asc'})
  let addToCart = props.addToCart
  let cart = props.cart

  let regex = new RegExp(formData.searchString,'i')
  let ele = []
  for(let ID in products) {
    products[ID]['id'] = ID
    let name = products[ID]['name']
    if (name.search(regex) !== -1)
    ele.push(products[ID])
  }
  ele = ele.sort((a,b)=>{
    if(formData.order === 'asc'){
      return (a.price - b.price)
    }
    else if(formData.order === 'desc'){
      return (b.price - a.price)
    }
    return (a.price - b.price)
  })
  let productElements = ele.map((item)=>{
    let selected = false
    if(cart.includes(item['id'])) selected = true
    return <ProductCard key={item['id']}props={item} addToCart={addToCart} selected={selected}/>
  })
  
  const checkout = ()=>{
    if(cart.length > 0){
      navigate('/checkout')
    }
    else{
      toast({
        title:"Select a Product to checkout",
        variant: 'subtle',
        isClosable: true,
        position:'top',
        duration:3000
      })
    }
  }

  return (
    <div>
      <Navbar/>
    
    <div className='min-h-screen bg-black'>
      <div className='bg-gradient-to-b from-[#2a2d32] to-black p-5'>
        <h1 className='text-white text-bold text-2xl m-2'>Filter</h1>
        <div className='mx-5'>
          <label htmlFor="searchBar" className='text-white mr-5'>Search </label>
          <input className="rounded bg-gray-500 border-black border-2" type="text" name="searchBar" onChange={(e)=>{
            setformData({...formData,searchString:e.target.value})
          }}/>
        </div>
        <div className='text-bold my-5 flex'>
          <div className='mx-5'>
            <label htmlFor="Ascending" className='text-white mr-5'>Ascending </label>
            <input type="radio" name="order" value="asc" onChange={(e)=>{
              setformData({...formData,order:'asc'})
            }}/>
          </div>
          <div>
            <label htmlFor="Descending" className='text-white mr-5'>Descending </label>
            <input type="radio" name="order" value="desc" onChange={(e)=>{
              setformData({...formData,order:'desc'})
            }}/>
          </div>
        </div>
          <p className="p-5 rounded max-w-fit border-green-500 text-green-500 border-2 hover:bg-green-600 duration-200 hover:text-white cursor-pointer hover:scale-105" onClick={checkout}>Proceed to Checkout</p> 
      </div>
      <div className='grid grid-cols-4 m-10 gap-7'>
        {productElements}
      </div>
    </div>
    </div>
  )
}
